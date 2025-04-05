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
    "5bau81w3LaPsYkHsZofvcJo2QYxkJ4YBfgzLF3P2XnUZxhDu5NQgEVbLr8iVgfkf4NQzBySGLYA9cxrbYArk9bwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gs8z2tt4wYmeqVUXEVoD3KdqgDMii9416YP6pJjEZoKiaVk22wimHVpAbe3DxaqxAZo4Zycn85VnN8kRCVrxhpj",
  "key1": "4iUgu3drZHfxqVMd9UXqtpNfximoRs6cnp4Di6cAPeZeejwHgwMKmDH7gogRMiWQfJUA4DEdAAeypmyLEaHB16ir",
  "key2": "5D3cYTUzTERGpqahxeVWkVcfv4EAUUg15uMVq5FVujhp2Q4naQGqtVYKfNvcZz2h4itMRTcCsLtZmEbDekJkr5Jv",
  "key3": "5CBbiNLwKNv2kZPUvxAV9vPVmQCJ6sQzEtPTT1ScWan1k8kzQVxgG3vATRdUBcucUMsQyRK2HyQzq3yZaZgBVvA7",
  "key4": "3ivYFMray5S3uSWTdgWg9QRLcrsztngkUgoTtRZbrJED15SA1QBHFzB8LwHNyDs8reWyHpWGiGjZjgbJK3FVAUhx",
  "key5": "5snT312k8kkcHDmBXt2xKz441v3BicQwK11g5Aie7CCZyfo3oLhVLHLCAJ3RLXNxE48Hf2JSG4yxy8BaozDUqJtU",
  "key6": "cruBUJ7edYbVmsEAWUK1TwPrhKEYVtDZ4VsrznuypT8ywAzeytGzzXVtrxT2ZsuJpiR9amykkLBkNWdoU6qJZVA",
  "key7": "wDZoz4iA59iKmhuRc2WM547bhvnUUM483RSAcPSPGBtUQ9eoFTvoBM6rQfcjv2VfreYHsUCbE6kDtdCwk1xytmU",
  "key8": "BRtgawqvym72JTvqSLQwrg1qbYfoYdg2tk92X7ry2JBa33ezmDsjjAM4aSc1eqzCibi2iMyZ1h218gSj2Yk3zsY",
  "key9": "Fihf1sYqK89D7WsriM3n4UKo9JUAy5DqxLFEgwuWf6u7hA1wbgMGL3SAen64iwLWxDep1f9zDVfHunyNa1rVZCx",
  "key10": "2jSciiFS7ndYL74vZgF9YcfiyvqeAKY2BD2prtTRW51vJbQdPJiZWmQvqF2HfCBJEVmGM36DQB8QeW26ApJCbFnp",
  "key11": "2771SMmQYBKVAipvBVTx2tG1jdD3mQGuYkVAjMezPcjQMmG16gH1kCQRZjG4zLr1iyfdpmLxdRXCjNY1WNySnuyp",
  "key12": "3bAvWbXPqugXCUAQ1vXy5XY6VnjHjQz4A84iepEWnA3prWAcVLP5mcnbqdqMXs3QodTGuAbuY6Zsf3Ncf2t8Bbts",
  "key13": "iNrE5yf8NCgDiAj8s2ipALRSCdnbMsPu62zBAhxp7W6P3ZyShY6vfjqCdQFZG65vpzav4PGyeu7hwT43z67NjQS",
  "key14": "5AayrT1RrSTMshD2nfudPrk5TSJ2RxTVHZhucNJvK6FDtEKpGAkL8iThpHe4yE8rhCQQWGNmbfFhYnqXKpUdkT2o",
  "key15": "4RAVEmGWgVCRRNsV8PFbwQoAuYkJ3VEXvPBxE8wLJ3HKyWWo6SdEtfLMFMtMjr7HqghR9Ufzp6L2XhxDf3t8TPmA",
  "key16": "AgtJvC7EKYnRSFoBW8RQosN4UvppwZEXgDhw3F5u5XLjk2LabXMuNKqntUYaHkbPjuTWhYsCRQ9Q9CZvinALAS7",
  "key17": "4QwvH5RTbVf9bYck62HpRjL2McG1scwou3a6h1UTPRr26rVFiCxVTavr8ZLKqcZt6BzJroDFgYgs3rXumT8Jja6f",
  "key18": "5yFkJXAhDMmf1cRL9q4mB4fpXc8VnSXZbNqvU7J2k2xACmk2SdCREBhNBXcsmpxT13Qg2AGnjNoJCkCAqiCy363B",
  "key19": "3meVUqaUHVafH5UdHgFzzRqERGMftTpCDz22MNaMKmqsP5TXjFki85fTnQXrsvYf2ydhX7KPsy27Pp84Zge59Jcc",
  "key20": "5em9AT9kYKw4pjxXUdLzPksoyuuZKeHqju9Mk4sF5neWZdSYr6M3iKaQJh81dcXpJXN8UZSryNmhPZpKWeQcbXvS",
  "key21": "4gUsE4F38UTELJ7qzEiritwfUrt2rCcxRmrAgtDbtVGVJygUqDHMVLnR5dtXrqUcpk6QvLyKQvyXMB6KT6HMmDwc",
  "key22": "4SQVDiBPYhFo8MS55KpEucwKD7tm49eSjmzAPmNJ6dGVGUTaUJxoEoA4voFwZsNB3oVSPzWbg7LZ4dttYmwfitDZ",
  "key23": "5VGq5ocEwHT6MdDomUkULsMT65TrrPniaPqmxx4MTahqnTGqGBezQRrBgsDH7LWhv7RqS3KZedXsbXET7ReLRN2",
  "key24": "37mAbtwjutsFaXRRfEZUFE1YSNDuA3MRSFpE2K5nYM7LgVBGHAcNDBiiu79Zr9AcQhtQrk7FJHewsmJegpqB5YwM",
  "key25": "3nvSksqFTqJpaDFxnjHCT3BmECz3D5AXp3dTFNLzHiC8pt34QXx1EJ5oHgpuSqgRuR3aAjd9XHRxDRiAmd2S3Fp6",
  "key26": "3N3f2f7SC8PP4p1gzmMSqbJWR8rrhuaG8yNkAh5KL9SDB38zgUGPcKQk5vvcHH2HBPafFWe1ARbu2qetL8uDXeXT",
  "key27": "5bdFBnBbVGqC6YJrt9w9EvKd1T4m3mQXKp7hhsk9vtqTj9vpnUB9Lb3C8tbBVSRtwVCjQcrY45TkWQgSQHuWdXaU",
  "key28": "2TgJXEBCu7BBgzvWzH5WTkXZwZrjjtnGPcdZga7pAvzhpqKwDU7mgxciwGXbpRn4jHzi7cAeVoq9CWp2j1J8ztiB",
  "key29": "2oKzLE3H1BrV8REXrxCSmdqDDsX8AfWYVKzz8hmeNNQ8uQ4yUbiCFDZGhhQomatYgSdFXVBmuhcXXg6wSv3G3tyv",
  "key30": "2MxbHjgR7jWERmNXAj9NSfTWENDV94nY4omAHiQywuPbnRMMCkr5XELKuSRRwaSacnaT2d8ypRonF3QL7SSGUoft",
  "key31": "prhP8Veb99Jec8xPjgWm2PPNQZgYZkg73kTnnZBbSve4CeChCeXbUstVTT389VUvmYePH2veJovEC97jxFHTmti",
  "key32": "zk75vMsdkaasy94B3vemr5Sjb4FHBELcSUZWXa9H62ZCHprkKBJiP83gS2VJjBgYgG778Ho32jvxCmVfP1Hhqrd",
  "key33": "3CEeyTa1BsxwhSVXKfhuP1sue1fdKUskdFjitJsFVfiWEPmrCp431Md89R1Jgsuc9VGEso3PQNs2TWqeqcwF5sbE",
  "key34": "gEEzFqDZ4PnJn6ENrGw4kAt7YmnFd2Ky1RfbN4oBgQanKdNCEvwqki2kcgWSHbydqJ33CGaPeCnj3HdCXcrBFF7",
  "key35": "NqVFoJC8N4Dhv7FL2jhxQaNs6LdekhEdApZ7j4S1isfzXmcmrCLnFo8c42GkB6xrVHRuwq2GSmWoretQqzZ3eFX",
  "key36": "3AHxFXnbp5Np4G25Kr2FtHp6NwH66fU8vTtQMbvpYwP2Hgwgw9cUti4nZqCCMEzKideyShyqgU7a7SpojaZWv8Du",
  "key37": "37EywuRc8KS8EgZnnTT33MiTyPX42ytnaAL376jXEsvdWmDEas6HTutGkbBZRTzQGYAj88BofpXv3xueC7kG14Cj",
  "key38": "4w77dJnsMTXmoZJQ33hp4oyN16DrAY7bHxnZPqfY45cZiSBrXUkeCWBmBq1Ph9umdbMsmQfsiqJAXPYEivYdKFCi",
  "key39": "LB7gzzas8dt2x1YDBn8e7fSXpJEB7uxDqp9osyTedcqAZYUA7oVTzaCxXG6gsBgDFodoxPT6DmaJmcwpwWvjopU",
  "key40": "5RkYfUwG1PooKeecG2xJiAgFiCpTCQaiBNYSEVyHTQQfDV9xJx6qm5i6C41eAuzqkiVDHr7ZR5AjvzVpQuA5158A",
  "key41": "59x8PUErbffY7wtCq5WWQ6ox6aQKH54rugJfhW2qhJ4pgfaNhvZah4n9P3Wyo1V23oGS73JrrWTPVzcqKQ2sCYPH",
  "key42": "yBQvVixM8E8WszBN2g6udVXsaDDzhBUviAteLxAb6LKMHCFcx4cQf9uYqSXtab81ULT82AiaScbd7gKAUdRsgMS",
  "key43": "2gPq6Wr9sq6eF7f5EoFnDgwVJqJpZphVNUCCdyPDtr7uhn2W9ZQXZRctFV3W5Ygp6zfsLcTeZW5g4SVuWaEupu76",
  "key44": "5E4htXdsEauUkxNngUyammsT2Hdcz1776FNN9i7Xd9hbexf1eoqccFAEs6pGUXqTHwRqGevs7ubWcs6Y6RyCR1KQ",
  "key45": "2BFBjFrjKPmUj5wZW4tGhCWnZfd8cyFTzDEo46mybCyy6Nr62NPixKF7VNeuKQAjK38gAcGfvizi19ipSxGTmwH2"
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
