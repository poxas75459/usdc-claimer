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
    "4NDAd2cTX2sruxTUWDmg1h5SMQVyUrP9ftA2umtixUfGVjw8mf5U83iwEJhh4LvtNd9YQP3Xm2gvzJcgnHTpLQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rZguJkrkDpmKEWQwJQcR9F7rGh58WdS8W34wqb3iwTmhygaz8iLPCpgXweKvvm34LCYe2C1NYJdP7ShDj2dRXZk",
  "key1": "5UVR9aBhmvtWifL3Ln31yfWbANnCGGBEw347KYMofGpLZkcW2giiXzmwVAdpk3AbPYMqk3qw7T4V6C48FgmP5atM",
  "key2": "5M5A2DdqVaLSAUC5x8uNxT9QY4sX3d6PeQ5L66oCsQTwbqT8wgmJFNd5WrXohDLZtojq8k7CoXez91z7ELAxEuMS",
  "key3": "2DMwffXrEiFpQmozRRyigxMDwwqzY6umNCwH8qtpYimkHYfEm3zayyqfbdLLKHYxURddrvfVtgNiieexHMA8KcND",
  "key4": "3MEZWt2oxEm22LrhGY8tLYftUHXhWUjTRG29Q2FYrDkYEm7eXbevHzxme9pkXTixPiFPDoVuFkwCX22JokNWR6bm",
  "key5": "SVJsVwvQaDMEjV6vDAS3cLeNeszJcU9YrcVgVbodfUh3fY7c1vh76z4fku29XdXYBYMFegQWcrfq6oSUv34b1Le",
  "key6": "636X9VSnKERjMA5CP7wN3yhANcBq9bPfAizwUPyojERwG8YAi3WhX2TAYPxQsiWVkQy3RWLitZMPydCV1eguXXNg",
  "key7": "5d3CjpcQqUDqjw2xh8BKnfD5McxbBL8VMv2ovf2wkosG388gm57cbBxJWoj4RNezbS2jkvqxw71diQvW6cAMtrsT",
  "key8": "3DxiwM5ZpQkwfbBMqLyQ2DjSv2KT53bcNSjvXAxKLt5eJKAdp4NVqYVRGKxuzBjxaSuQTdcmwPFBHnzGDFhp5H81",
  "key9": "2aecUH8DdxKB1GebUy2QhnX4bHDGg5CxUewsrV3PT2TBG8Ew3zaEYCpA6FvjxhHsmBb5MBhs8prwTiAH4ukYxck9",
  "key10": "4XcggHhMWYfSfPZijNPbFwrJSyStaWw8CJKXZL7UWZmeULQGvfmkbWioqUwRzinGwkAUSPpm2Lp4esGP3mBYVSM3",
  "key11": "3LUtnxy2hzy4mnZ4pSNdiKjiv2Q7L8tcHy7swdRwiBn6xKuB7jUuekigzUbG6EKUXKCDBHAeQWNwjces4waEkakW",
  "key12": "3Pym98aoSD29zq1YmMovr8tUdHtEKCKS9vCKk3gwJXdGH5nazGed3PdDmoHE8ovbzsnntPa7SUQ6THexDqYip1SB",
  "key13": "66DrgvLgXQrdgcs94WCbAiJrmw3nFN9zchxKMQZpkmFj6PPmPWNMzdXsv74uo7kZg5de6vXzwRRMroAvnc4YyurA",
  "key14": "3YTzTQZdfC5DmJ7jqbADaxuWHzY8GRXoHXA2otewKtCz9gSMrSoFfQa1QZrusoM3GiAXJdmKG4CVCJPnDhqoNFrq",
  "key15": "3Bgmec453Zv8gpybtxS3QjDJoVCw6qeXJUwZtVih5tMzUG4FHuMvHXRrsAK8cVJDv7gRv4HWLej7c8sNLm9ZWYRm",
  "key16": "5uHWwZFroDw7vaypRknkwQeMdBxtFa13TnCPhppbHc9dekeV5eyPesa9g5D8GwmB79JRvycQvdAVk8pXc8Tpb3ZD",
  "key17": "HrkzEsVNFqPS13CdCR6EhWK3T9KPH3EJopH8j6cm6NaRxbjssVsGwyEV16Ec7cN3GpX4TYQ5UvmyFtdeo3QH62b",
  "key18": "URpv4XbF7PRfeTYGZvqrV6BwircD7C2nasrtV7sRQWWigiMRy3eLoNUFnczHxBBzpqhTbu1QMSSrr51E9wr7h2N",
  "key19": "kXQWtxHv1LkG8jmKB1L5GuJ9n8SBY6rha8yG43h9xnoyGNrRx8QbHDcpwJk4hynRc83T6cHyc7dgZM6DZ2nSwWU",
  "key20": "53RzZTiy869w62DDrKj7TAdXvh9cQEB1iXAxAaQrbfgUoEHZzGr31BjW8W8U8WXE3yQmhhndHKcLFKidCPdxHGDo",
  "key21": "4YLEVmfzbRg3azambaTswmoartrXKUzo3hLSeFA39BuQtmWmFkJNehFmLvz5cm9aDRjjcewbu6S6nf9mtiL4iPaA",
  "key22": "52WxSo3H7FyfagXFDWB9Hd2Un5Xz41EqEpF5d7LnEXNjq2CjBdpqHEFNWm8UN52r6RyS8HXcvCrN8a9QrSQLRCvh",
  "key23": "4Jzsq1dNPKVVcJecZtUT4AQqDayxgMva1ttW8LRncFsRgmrVVW8iftp7zUceywNY3ijG9e7LfjjkPXHqVvrhN5BH",
  "key24": "4APQyEpQJpB17Ts1Wo4LR8EcD4j9QvCwokGFuBaLsnaL11ZPXEXNd2VVkmmnK89zkQdU4ZPB8rT9RD75XapNqWL3",
  "key25": "492LcZk5vKQHpFpaagrQGpN2hEMGzmucVMxXn7GKgqKxgZqAj3dHRQjDockiyA6TnBHRusLQmD1WEjj95MmcNUfh",
  "key26": "36ysaPR2c1R63ddsTA6m9ysHksJi7k1gXoCJbC8uU57GwqBgTNfujV1sYL66ETEE11drhK4TBprzgwuNE4sYbzi3",
  "key27": "31MPuuNG1DYaqDZ4hSRSa1toCA9QK4bpefAhshz2ejWXGeSBbJfpiiY8jKZ1LXcRnBy3JaV3eiK3hBfXqgtkVzcN",
  "key28": "3PjRQpJbA2AmCmW4NbnTqomScd2vmSsypRdXruz7To2KXEHJjND7DRRPLoRNh4TJwwuda8wcqKQm7eseWwPEekzK",
  "key29": "4A5gtV3RqRgUWhLvcs62aeqURo9jPESn65uTieXLdgtnXMyi7qSGqYUvdPQw5gWG7Xx2wg84M1LGCyRPKgzNd4eo",
  "key30": "4qVnyK7G3yqosC73shh91wLLjCmc4UzooAcjEwJ5CSHGGeLg6mxS3hiUpn1FV3XfTArzsafBWqXAmpP65RYTEPJh",
  "key31": "21fncgufZVy8TuAzFtWyKMKy1X9QWTvS5g3DXTgYHC2RpfBR3tZSzcPG2dEu8UbTA5iuhJTty5uqyw8TxAWPyJP3",
  "key32": "NLRioEA7B3jfqNT1ZDyc2S17EgHVUGsfvULH6QHPERnSPdQ1z6u6URVT4UVFGoaBcjjG7PpGr6sr8nhHn6eBmr8",
  "key33": "4tC7o4GYmZ7yWhZ83tkosfdpq3ZPU1tFNcD8dhikfHMoFZMAxAGTBg5ckkaskKrCvS1mghBaQntLn6fHjHK6TNwr",
  "key34": "VBd62PSsWPokbdCPUHyvRcZcjXK8z3XKNjbB1qcqRajJTaobzKBgzWoNRaW4ZKYFu4nBgRG1ukgBVeCzzF7pkZx",
  "key35": "fN4e9sWYN5fcsoQFPTWvn1X8h9TdtoxpSJFyZutLCT24J7p3pbTXyowqedXQWnFCVcdRmFUc2czY9wpFfZqND2g",
  "key36": "wWfor3dnNCVhx87qccZycPwzdwRcgyNFEj1961gnKKUqKH1pBpjqGPVNMC8mvour6pvZzBuzjGDF3DyGM5ykYUp",
  "key37": "3WWijUE2hSFJp49akW9AjbdGews4HqSanBSpwEMy12sT1cQdWqpF1fjGSXtVaV94wZLxRvVVu2eUn2N1pnVR193p",
  "key38": "3AuZkmCae4R8GDSZzPXbctWTHX7cMpabd6C8RPZJ1YiLESTC8VY9xUW1RtY3nzJ2VZ6S6Aj2ChsGxmwYmG7Nnvo8",
  "key39": "5aEMCbe5frK6dUTxEDSgEduAqgqCVkX8LxcEPiTJAxNUYMZmskCg8y6nTyntTatxsxNL5xc9AaeAWgy8VGwQDSMR",
  "key40": "2JPfPvsJGJwj66QAotnC26LSRcEBjgnx5P4Xpq2vveNch2ffCL1CJDUWdeXtUS49LorpF2AFEVJ7JkdCDMsdqz7d",
  "key41": "4ptFRZdSfjxATPAvY4JB8hPoh5KwGtbKk1YFYaJo46VuoXRm68x2UMryJrUi2ZP3R3bWdxuE4sbmXLAKRZyN4YXQ",
  "key42": "SiaTwHRQ8YRgFPrY1uguHiLHiwBNYzT8ZbMiSw3a86NXAT5HgUr7cf9LRvzZckVDorsULs5RompJWEKzy45DJmJ",
  "key43": "2HqUhBNbveTvcxeoWhDi69xRNzLzv8vW2tmY5Ahp6JjuCsFvnvkYXWzrAEKc5qK4DxFyQhHSLWimPTdA4FRdyfyD",
  "key44": "Jmja98nCzLfwEcdoqqKBk67E1mNRtEmQtndBkUjGcvHmMy9BHKurLCdWhQqjRbstmPtUCBkSNwfFs8ASow4qyQd"
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
