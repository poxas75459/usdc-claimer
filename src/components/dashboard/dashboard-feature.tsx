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
    "3tRqRKXJGuVvvUS6YoHcSEn1gTcCd8wQyeaqcKijjyKz1qPgvVQFMzknm19zHESkB5WBqP5LGVsN5xEBiXFkLiSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6L88zD9Gpr3TnoX8MLP3Tncxy7atRtzcCdvCYyekyNZSwMmQLTT3V35kdRtWCX4nz5mc3c4pvT8UzTDv5RkNGR5",
  "key1": "2Tdapy42JZ4CRDtigh7xLXiswhif811pML3uSn27KW5rMbo7C2wfjTQ9CtZ9zPs7DyqQy9pSVTzrN56cUUb5zpJq",
  "key2": "5KS67m4R7pCnX9NtrVf5pDpm3z1KHhqGAexjy72hBhmzMAEaKVc9HCcQZ4cg5HtqZY5FPZxUxmsUT8XJEQTVjtWn",
  "key3": "3vzQF9ojMybak5nbi1xv2bmgFFs8f8ebM4ZQv5NoQ4SL1KETMtkTka5irPqAQ7YP7qSEuAb5mFeUKUMcczDb1rEX",
  "key4": "51SEabzZzErSktBaJasjbBVuGS9Bq61xpE68QzXzjUEr2JGR1L694FgB75bRVyADWxZi183tC3KgMxdZta5BdVWP",
  "key5": "2B4brx4MBEXnk5kGx49XpnPhXzyF3EU1ctiFsaaRZ9reptrLgiYZgQ8usJ5oSMv55jf9ZkBW1b2UmNfWvW2zye57",
  "key6": "5GNUXCPgSGqcBsdp9nNKSJcqH9NADV7MesNmtYMXjxRSQgorQnm6DrN5kgiSrtxfLsJ6thJrrMwUZdDhyU4Rv694",
  "key7": "3byDeBhh1YDM5CE72kAnVyWvDZReAcFy7BHvCuE82wefe8cujoNHUx3pJwCzR56izfheiUzeXmDqxZZqzYFtY3aX",
  "key8": "9ED44eoMbTdqT3N2JuG3ja4KyFEwLoDMYkGS2YUQG31kcjJnb3tM1WKQGXqW79iBKqRZhc8JvSMFDRUP9xKhfXb",
  "key9": "GLe3nGwMtU5G9jYshUaXr9FwF8PZVJMHFdp2M4CLkTwNjzbgeomvPEaxq3rT8Vr3dTd4769PfMWEDJb7ZStWqp4",
  "key10": "5cfCLp5Dqz9tDLX3UbESpZWRwiLw7LENn6w8YDKHwqTbcjij7qH9PGnk5LM68YuyYY2rRbUCqt9gnT1e492iNMg1",
  "key11": "4KY9YnGHBzo517akK87csDfdHV4tZPKMNUcdD1JVCWfn3NirXE6cCVo3YYoApVuR9u3TZJavgADS86XBw22Kho5m",
  "key12": "3u6nCsv7ThtBaGxcZePsByKYyWxRKeHnvpiX2ZcXK8X4dA4eXpvKEoSUUWuPvAXcfJeyESM4cAYyHeZqQYwxsGdk",
  "key13": "3tZ6sLQzzNvTcjWm7miFjbZcvVqDdJbVTpfefyq1Rmohv4Mqm78f9DChxjjVmRThYHXz4dSRPYCMCHrhwrvbVtDt",
  "key14": "tAXLGLgNd76jfxyxNtJw73gvPyFPKjFnxssEkS2o5RvPmzM9JKPN2ojHAeCE1Ymd96doMoNE7FdsqkdFiGH5zUB",
  "key15": "5usxcSX5V2q75GBWvLtRLTGezZ84VAbtBzth645KpRvqj1gW8y8N2QDg5cf7yx47o4AJJSwPEFzARMNuyxFdvBYo",
  "key16": "2yjFhKQBDaVURF8wLmYnTpzCVXwiEv7Fr19ZFdPDL1R1n6rePPVnmbphDrx1FdeC9EcDcGkF4ga16xWux1fVmr7L",
  "key17": "2XkSjuyUyDXRY6dZJF7sauPqofAR1P1JS6ADdjoW2hTP4mDDWvK2Rhy7NquPte7aKHw984fewCxXbNoqknVLcydb",
  "key18": "3dWgHMTCXKrj3SohykrCBtF3KLwvH86JjbSJNXXjuU8EDR6o7CVptqzrShXtVUmWHneZfd7NH2WQjq6GtyKSuUFK",
  "key19": "4BcUujEyEM9j2vrDAQd8kHGUkgFFrQbj3tTu6Ec3FkffqCL72NUTmwe9Nz2z8PRC7FmvjfwsGckiygjxC1KE7vMZ",
  "key20": "2TCWhstSq9nud8ph3bxbxR3ckN7vpqz9NT2ZrhZsZucXDYkxqdrsyu67uHKjKZcKEm7Pmnm2ARAz4dDjgoKMK5WU",
  "key21": "33ueV33kMh4wCqjJs38uRw3rbqrN6f1LPeb2spUryn2Po1VksvMs2udSAQCLYCwZAiDEW7sgWttYbZXn1YmjY8K7",
  "key22": "fb3JG5g9p1n2GrLmU9boEiV3cezJPkDQNLGXyopDTM94ao7V2dpHzR7xaNm1ZK2KGE2pjfKtdhDWhivnJsb3gWp",
  "key23": "etEWCVXNvLqHCYeokpENNkuqZ5YcpRGaXRT8SaKXwn9ABHbVvd3LvqJLkVpH3ZuxzgiiHu2tMSFKXNSAAnq4YGp",
  "key24": "4DftHXnF6kQgTiDwFF5We5VdJrmdB8Q6E1i87V9sP1C4hqeEFNAA4igqXCC6z835aWhuENsvPZcmDbCwJi8DuHfS",
  "key25": "TLkrgtMvQ7jEBPF3NYhgtaaVEEHBmigwMgVMMaAhhDN3u8gJeNWkVBXw3CQhogf3goiqEEcrrEm5ct97nEHTkDs",
  "key26": "5Bzgt3NRgq96nTg1LajPfbknrPJgojm5DmWW7T4FvNLPSuS4KEj7ux9w6awvqLTV6kjnt8GwcKXNUy1feji46c1A",
  "key27": "5GhpGtuRMjjDAupH2NACgW9M3aeszDQnMppC2W5JMnEJo29WzZPPS5vbfkjViLaUAHwnudUu9dysNduDjJYnfSev",
  "key28": "4N5Zc59n92LQtg4b8aWT79vJ2Z4RUmUh65xYFrMRyf1NePjSy2qsLQ9aDiLtDC6muGRidhHMuxV8dLYiGo2RueGd",
  "key29": "2FuEQhMH1igM45e5TgvYindNYdZ2WEUMgpAa7W83byZvucuCFcVx65JVytu3AzjYuMrm6oW3z8UjWsarFTg6G9Zx",
  "key30": "nUrnyJVfsAypMJHPaKxLDYqJuNEB5Uz5Kf9G8R7P9S87m7QyzSyrGitFPGYR7VJfmvarN5r6nwkUVSYddLZUQvs",
  "key31": "2ZS7GugrQBYH4uayUWUJQH3BzKgkehYGEwZKFgyo8duN1QJDofMCGPnuRskhhjM4dyx2UbUKfw1CR8F3FJPaUDWp",
  "key32": "3S1SFE2FAxUFh4xnZLVJ4a8RAuRGHYuFZhCz1UL2BnsbMHQSHsb2tHksXi7Bw1k7P6C4Fc1LRzv1qmgkuZS4qVan",
  "key33": "2uYNDYN7Yi5oiGnsgWgS73QqipqGiUnTJUwcQscDCQA2pqkSzqWqQyffbJVbkhRTAcxJHgb7t3NKTETD2oF8FvGf",
  "key34": "2yjmpiy7n5Y8nprxLUGvad4ZBBN4Ywe7mzNW7LGdsQeSU4awagDKkoWiz8ZR59DbLroGzqkjBiM8ZND8GWzELeEc",
  "key35": "4EWCyDL4TgiP7QGW4TMENXmmhNTdNTXas8getV7UNqtCbqRABQdK3kPVARQfjCtgsbSURukn8HFXavkT3tyd3NUR",
  "key36": "WSxfNMdDRY86xJP7ycb5SwGc2kwY887pJ5FhzvDmshnLXGPKg3jNcNwym5uiPNrA5PYcBo3DWmjH3P35n173bjs",
  "key37": "S5zon8tyPhLcBb4Q7JfcFaxB2WnNQrr2Nd4sJpTCfQUSTdvV7FEsuTTfPyMWCLcgeZnKYSbSo5ibsjmKYcNLENu",
  "key38": "5pN5pTjnhPx7ZLAGXBtfvt3QHoMqRg2QVn2o3iGZhCs4pbBZEWpCXqRwaPUwWWxAQULh7F1CT1hoPc1kHHK9p7BS",
  "key39": "WZr7H2sjbsFzcC6oxp4TCZzh7Bxvg68PAoAUPSRz4z7bL5ikjfKEXWMtKq1ioXvhik9UMMJo14sfeMeVytfyo9Z",
  "key40": "2A4vHNpL7kCsAbKVAAYSNxSf2GGMeXJnSF9Y62b7mT2hY9uvWTQdKFVMHgGCMQzbxcZEJ4HrRWpF2YJthfVSaG9M",
  "key41": "449meVvaaEft8u33AS2yEMxqU9NxLC2rLVM1891MENY73GsfEwAeDzB61bjER3aYN6kgx1eaXENmynwWs6XHZLgc",
  "key42": "9rNkMsa8gHGWkrvzFGfJ6GicQi59TUF5UfWzq3WFhvo2JUdQ1Dh2Ax415pY8L7kVaPgZEgtBZtxwB7aLJRBknSi",
  "key43": "5TSdLaMHn7JLT3NJtzPnub6MFWHseomyESRyZxb4iyydxZXpeR89zkE3DCW1BhNZZSSYU7PAyXntiR6yRN2YQbsK"
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
