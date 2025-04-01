/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3DdA6r7uERinZDjEAy1TkCPKNBzZcSe1usqRB5CXHWgKWVhbFnQhxdusLE8e9uiAjqS9RzNTjF5m1LSb2pgpUJcW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ec9R7ZjKGdNx3eebzAhcRr6Bqn3Gp15J83aft9FGs27vcqa1ZjFM1hiWet8XWozWmvCVR6DbnraR5Bo8x8NyEqw",
  "key1": "3P6FUtGAa8i9Y5FuYYv4bHuhdC5yoXemVg4Bp23m69opmw6nTwAr6SNHPM8gEUr79xzgs6vp1EbAxMeDhWBJDub6",
  "key2": "2pUMXkRLs6REtsYMTgnhrcH54M5nd4mRb36jRmvAxDHyaYBrihmUopQHstGWQwG44HX1xdR1WEd42JA9pgpxXgBc",
  "key3": "GT4zpTwyAS9eVrjxKacXWVuLHVFJtF1CpmnqqyjxwMfoztqUZZ4ufxtxbAc17gUUfonhagxZLuye7d46c8FA5H5",
  "key4": "33hL5b1h9VT3x6ysNcZqpyYMSxeeAziJHSyMvTBurnCGUDW5yc8TS9rsN9hz2eMe4LhUttnpxKzro7aBQCRJEE6p",
  "key5": "2quU2E5QVpRdJJ5CcKKDXqH1GWBMvu9sZkekQ2ZTAiRsoMo3wgEFyHr3yZHyVfjC57EQWgjiTNuULf2F1LxiSTL8",
  "key6": "yD2RpvoU6gzJApgbhmJw4xLBPNGiD2v5FhtLKKVQPMw4vV2cPimWbCkEKfNcdBxGe5ZSVtwy1yne2f43LD7SehL",
  "key7": "2hsA3uitDJtB1AwegEszmrEmAmg6BJNsvpEPnc2VDGgKSp5S4vjp8WnAEH272MX1G5y3uAhfx3xcj1cGeWqLEgFD",
  "key8": "3vbNerCMzUyCmDPhxRUxmby1DaDyjt6GSRFwgyW5eNNokxAx2cV4xQiZ6GQQ7NzY9X8kGoiNvLm6wUL12J5VCLpf",
  "key9": "3TXX8rs2KG1QEKoUaWHSmqeyBeTkj1YyCvn4YD2hmqaopncFUojVaxRXym22db5FRrsw3E76vQfRkN6Ez6jhsW31",
  "key10": "3QZpoVJhiQuPLU7SPgvM83L5pFB6oe5Evr2oRu7FZXT12gYKVe96wihUvJ5GpqKtY2SG9xF4A3DdvpXJpnAdEqZL",
  "key11": "Nvy3UiCLcwN6f8ixjdxaNfNEMGrcy5XAUNT7GpicsKzBwbRYi1qibubSDQQwjxRVRmGuXnrWYAdSX8Dvuzt8dCA",
  "key12": "4Acd1rk4T9J1YTrTJgzzmqJNuXeQBcDABBhHx8NZYvWvTZfUtiybtYiMHLz67iz293n7uWJ1baVzDPjKwDffokMv",
  "key13": "2aEiv36evhFURDNTeM1zKCmXYnZBk49bXEhKXbVXZMFarNVDKf5BNsjLEwhs2VeYWVujF2cvwZuaJEQUNFPsJNe",
  "key14": "3b21MaEqD5zmbbbCjMxaLD2fJYjSKUbKJZBCHoLRBypdfrLNzEubYssQ5zYN4b8v7Ygh5XXC1UCThsPMs7Vq6eDE",
  "key15": "5Qwx1ZDqKjSMj394fvgtMz9LTCmE1td9ec2VQwiJLnEXf5S5wg5X2KkWDgJirzNkHA2sHyykLph8LdfNoZJuK6bW",
  "key16": "33etFuEe6hUy2Rgq5rauyKyHqXgicp2nnd6cLqgbAw9sT8HHjgmdf4WVLj9unUkcfUkZD6SvHC4qvgBhSLPqpLoY",
  "key17": "4ttPYzDoC5nZd8j9g5pF6LigTGTTFoSS7gE139Vix6CnK8rHsGTCjbpdGCVrN1meBfebmGxsDSYPAkcjhkUUTvGj",
  "key18": "4nWUv5ZQr5oMtzjGPC7XywiMaFZoNM1BaYRnm6WtuXqrE9LQwJdXL6dciFVwLyEDXctjLfo3JNmFFLwft2YgMxro",
  "key19": "vQkw1cGcQo3PBMXAPDJR4q5KG9a6AAgoD4ZuB75SJHvJAZ4ZnJDYTLKodTDzSqNTKvfvcTevDDbQcxBuvYg6d2c",
  "key20": "4Wa5F3ruMvRdWyMZ3ccTBJFa95q88oVfXQZyFHGbu8BASHq2q3i4yxvNKqV9qGqYJe6ysY8uAKMPid5NzG3BnZbV",
  "key21": "4miskGM6wW4DMUn24RGUNCWixrU6ozLpho73SszddMZps3XsvhRENXAQYmqya7CCKjztLrmmJKJqJG3BN12bRaBC",
  "key22": "5gFve5gF1fvqLKedE7eQsoPHHjiPhZfVEBYuyFsp5kU7VPEoLF5svRTPvCNXiECP8WgvGKwVfFuSNdCKweeWAL3s",
  "key23": "2fz6YSgDu2xLT7BDDkxrSoz357GoQoNKHSvYbbqRs1YUS4aXY3mr2GWJVYSBpJcQMCQVmSFeuU7GXc3K7Euj9oDw",
  "key24": "3xpvCeKu2Hc8z4L5Zih5sFqN81TFp3vFRoTajabFAHzLzYABexNzAcKkCGrHMVzd54osEJfpDLMiW3neMyPSHKf7",
  "key25": "3qEGwMMEoAvbyP4KM2SSrA1jm92XXgiFWpGUzb2dj5KRHbHDywoLmArzMqKwsz7pijAcNz5hLgR1H6RrUEtzd4vY",
  "key26": "2MunTXBUshpgRuDWkVZ97qb1f7v7KjQCp7u2WXTgcqm5EtsMB52Q1ySNuagGm2LTe5cxmsbNcz17Sz6AwuPzujL2",
  "key27": "2yBARJmWA5jtU61wuYMHeBPLL47eVwztvrJXtigRKzo4s3ojWqp2Ym4nxU97AogP5WFXs6cau6rUgYpNxX9dr4iw",
  "key28": "3uwBcFrZZr7RAYVMwqV6GxxHf9HGxEynV6ELaqTXwwrnnAC3odrxMhABdtwT2suY4Ggos1YgLspXFMx41uP7mToK",
  "key29": "2WvvU8ugwvLRJQTZKnQRYejPyZQJQFxVuXYnp9szmvPi3gaxRUkwVxCsS9XGxzoYQJU5zeeZDLxZaTHXZmnBdj1a",
  "key30": "2HnUg62EA5CxemC9byTH2wEK3wcwMZqowB5P2LkouSgxswMJBnNWsMKAcd5Sj7yE4MNE6yiKRjPMSd2rmcYBDxSf",
  "key31": "44KBQF6RwTanwjztXQFbBzDtSpsp8W9FxVDALkFHLnjFEhRwAHcX6D2kk3rYxRHQeFUutC4HQhK3dp19YYL1AnX8",
  "key32": "2fMkpMtVj2ywPsu2TvNj3tDBtMSFHeY5KPadRHMPEfLcAjtkprT65b9BKajxjww6xEGgvQroBCzaRbtXRZPh1fgq",
  "key33": "4WwLmcenV6VjbnwR4oCNGCy2fyKrL3HjGgEfG8YtsZzYssGNDm6SChMpnUmNWio8SERpoFxdZJnhP69rh3qnYSEn",
  "key34": "5GzoKyQtXTgA3d87S7rumeteMzyTm6WyaRNmMjMrCvWfmeE3KmzA5KTzVrWoACuQm5r7bruG3Da9vehRDhUxjWnB",
  "key35": "5nmMX5xTULtM5vAwaEu5PWSGEUbtcngX7hqWE32PJSdWEEZ3PoyhQ12jyRfg23yupYc47zbJ1VTGTmi2EynFRw3q",
  "key36": "3ViBJQHug8vrW4LXhrKvDFR2ka8xKjzf1RAiU8ZMGs3a7jwFbgzomFUfnUxvSypfRHDEan34rM9jpB1WMNvv2HQQ",
  "key37": "5BzRU7dqBPcjMU7vyUXFAUzbMMjyXuFh6HXbLwFZ8Xu1eFbq9x3eoXG2orkPjfJiLB5PACgcJcEB8t1FnuCm2sVT",
  "key38": "4PA1kV1BYLUQD8WzESDiH8opupipHnqgpcag6uDWGtHs87Mt3ufU8iwZmfmTEPW8tTfuRUZKcuT6SbAddG5LY6iv",
  "key39": "4aKETCLnDrAZrWq9GDiKei2JNJEhkjXdBhi7zUAju6f9jKjXxtYjbjk6GV9APUWQ3CAxBCkEWLnTkdMDRtRhv2a6",
  "key40": "25xxqNFPRaUeN2WZCrjvYYtMRcEpsmN3pnCZRYdTFj79Z3bEw3u3HiRosRqP39r3TSHYqusmmfVUG3MLtUZankAK",
  "key41": "5eTbd2u2Ny6DG4iFrCoEUECyRXDQXHJ54cm5twJL5uNH9BKjcxQaKuQ7MZeykgfcaqEwr5V2qsurAUBoHu2gzudU",
  "key42": "3FgNkhwAYQ3C8PBLY5512zLGr2LMYWzNCjqfpnVqvPeWa7jvbNksGvv7B4ad2zT29kd6nx7kbvCYtcoGbCpk1htJ",
  "key43": "3QW9nngUszgkhbbzRVAFJYyLKAh7Qjztyq5dhLPEdxsGC2g1xJ3LpRJuNNbBobbj5UD1PB7WzTo2ExG1aj5Q1ZjC",
  "key44": "4yXC1KNhxcY19JpGiqenafJfYoUBSxMrWwgS5dN32oGaNRa7Q6A8GYLXDdyvQoFJEQj4ubrx1eptBKBUH3qwBak1",
  "key45": "5FFEmJFPcph6CfGKDpV4ohTUuSzSchzdAworBXiUeGLSggn1TvfUV3DSEYAFxHHSP6cxQNyiYJs6NnEKVYbksuiA",
  "key46": "4ybwHveKVnexTKKkUbKsTex4T8Z8897tTDDVSjQr4XdFScsqnYCSqqFxj4q7kbz3unfkkoaSfmNzTYQ3Y63MtiFw",
  "key47": "2usVVvR4ejTN4mtecfNCs6joCHWLY5ewyMgFxan8ctRNQRYRZekPP4pcRoP4FbiyeEprcqgwkEGfCE5W83s2uqpR"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
