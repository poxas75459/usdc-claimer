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
    "2y5Ax3jvSbetWQ7Xsm5EWnkPsgbZJUABnzEgjimmir79XgoiTL4xjRR9dArzSjesokkepoW6V3jQhK8JyXkrXaLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47G86eJSB5vxydJRsuyAnEUuwSznMRDmKzaiasA6dQvefmRY19ZWa9VcJQnp6YHLDZUWps1TDAK61kjXkRXDUmz7",
  "key1": "2CbwFB4shipA6pTqAEmEoA4SszrgAoZaKsUQJYM8yK9AYwr9qDGz2uCdrB6t3cMyhKPuBnwszKsCGaGWqNaiWHtt",
  "key2": "3xzb2XnYW64o3WsDJgqpbsZk9A7dmAUGeDtNM15T1kEgmeKWH56AuLcrbdFnBzUynF5oprz4y8k8pKoNo1Zanb5r",
  "key3": "4r9JXkTg2i4qJ6F9GvfCGG4LjenYUkWnBypw3d7ggmLT7h67E88RqAHLbwy9d2xr5n7FvWD3TMru1VbaxJJhDYnm",
  "key4": "2DU6m9weyM1NiZg28wJdsvuPwNu2ggbzZSxqGtx9xgidcq2oqnhUHw4w2GeiRRuNJXPcd23GiriymnNBj5tcYRat",
  "key5": "3UZuBcY2LZR75iKy8rjkkSMEsFfHLFeyfhGWhYNvECctq3QCQb87HDAW4vMC5P7tZZK8i89RRzQbVixgwmpAB4kB",
  "key6": "3JiH8SYakr6d7CF36nKtYXHWwaWRejuPViDhG3GxW6LwQiiUmzvwSf1hsdo7uNzEgKWJ1yEfp5ovT4BhA3XiUWKS",
  "key7": "4UZopSDSNRVxDmUCMFAZ1TK2pPB3JQUKnNKMrtt3WxcQGu25pDy5F8PsdVKEQcEujYNfwY5zCEZikqCFTiqByzhx",
  "key8": "63L3dudkN6dLmnRE6fb8tQLbqkpt22qq1hDLsNMxf2sqGzS5xUfo5sPqnuCk6EYgebtSxL7pWhrpxA5skb1CRmUf",
  "key9": "31reru7BbBv8XDWPRec5sgycUL8UB9priZq1dEJbGcUPodpCqAX93rAWLBjEswdC8p5abG8c5qC9Kb7d93xvDGYe",
  "key10": "4LNsa9rUBrB9TcAjNrHUEyCkkArE5VvyZkrVUzpjrYuR1RDFDkAG75gFpmkKqqhY9yW5h7iNxYDrheZcepbzkFy5",
  "key11": "4VYW8G6vAQ2G1FMXRUQm4nawem4uAGty4GaJHdYr9KqvK1m39aWUmjQWukHfiMme7mF2hitTPJds5s8u6Dk2ADh4",
  "key12": "5B8EaTzgDWPmugGXbFiPA5JQtSQkc3DJVjf9PiBtm51XS2SJvukMNYBiiuQkrd7NXu1JJ2N3iQxCMchQzm8Jzkbr",
  "key13": "2JcdQZNGsbQrcGMphffuLetaX1owcwQKx2SHKuef6LqNzxrVbtX2nUMGBesnCAw5utJsXWT9NRRgcexPZiKcBDC",
  "key14": "Dm3fNntjDFqGLfioA9j5ndbciX8nZTfcg3KG8cKVkDDNFy4Ppo5vBzoSuSXaeHoQ8dW5ZzAWrdJ7z6nU44ZB9nK",
  "key15": "4NsMNni1wrrEnNrvBCEunqXNpCbF1aHQbEJrDLbv5uj8ZRHAKKecNn77311sVS1hciqkasZ49iYxzv12ViHMMKy",
  "key16": "5n2vU6e6rxMm5A1WqUKP9jn3N1xMR1JtZnXQoU1G4Vzc1U1suaFQ9RXhkav3aLHbBfNTPUHJrpt84YwCPfeTDQ1q",
  "key17": "2sW7DjioJcnezkcLKd9rXrGnEqx7vj4bmupc8cJkREB9UWCo61aRX2rG3Lq9oLwt91XRMKoekPV9CHLm22R1kBc2",
  "key18": "5YCWRr6BNsWDCjJMrYwGznvqhEMs2DhK4FbwWU5JXvRYXQp5a2UjVoNhV52pK6poUfpoNTXDRffdBUMyZH8eRg6E",
  "key19": "DJefXhVxKbHnXjnvSoFz5TbaupKoyHQVbCe26PrwqWnQSPUgeQLYSvmp8fUMF4MYifyixMiFv86i3j5zYEPoC5J",
  "key20": "DD7HSALR1N2MgynHGhh73nSbRg91eRpvUw131BnrNwXiAAvtHt6xcu7NXBtAConKsiScsam6mV3CWoKF6Lu8mGM",
  "key21": "3syakKZB2EZkseZiSBs6L6YjNsY6hH8Nw3qoAhWCfFfeRASH2KEbvEtHRZkDjqKnmutAwtFjMC1E3ZLdDK3HovKe",
  "key22": "5bg3Te9wntQuLToJdw6FGQbWNwtntqkUA1EmNup7H5fa1Wf4UN2pxQnCEgpWWkNQ6nQhZ8uwtDH8eRNycrKn7dDA",
  "key23": "4BNTtsnGmwL3QMLFR266Th5evdXTxKUCr5mvoLQj4YKX3Zd8wwdRrUEFe4xj9LF18ciDadkw3gDpNTZCNAe9xZkS",
  "key24": "Bm784RniAsnNTeRfoaByomjzFwkg4PeDziWqDsj1ooqW1NUvfVwEWFn1UQg6QzhVrEJWwT69SeVn7uZx9YUEVGG",
  "key25": "5TxHLYSdioN8Mgir9A5zNaR99EvjkAJtv43tC3epAXxN5FczkPDjFLK7nPkrpXbFVdTee6No5S7MwTfV1qf2Wsgt",
  "key26": "tHz7PHLjJHkunxkdhEDt44d9DdZBriRi3DVcQHHiUkZQp4kWL2RSsszDtay6LQnx9mdHBJW98aUS3bLgeWx111V",
  "key27": "5e2EKSxuaK2dVrKmnNnFCahCpiZXj7kYKvik9P4MoPVJWo8G7BXEhLAUgJyiwHiZYUvdwyjDWz9ZdKQ1LumGRNSa",
  "key28": "4HF7PxwdkHmwj4sPcHA8yhHxvU57h25oKTQ6H4WeBkMAS21axVynM4m3HNbPiYwFCLoLohFpL2QazTDgRZSY9cec",
  "key29": "67BQbooirZQRcZhxgH3ZsnpiioNkDF1vXfCX7rht8mu1Ehn3KgL7pfsejNaPFvm7HaBESHUmRDWCQgsUfWaqJLsP",
  "key30": "ohsWwSHxYErpWyC4ug2HM8SsF6x1wbhJWEGVWypukvSnHB7wDSCFbyaTytfAgVoPZFzhLnx8vfRpayK9XakCSJe",
  "key31": "3yeKnJUeS8mLhHof2SBQ36svYsjqpgK3DesmdFpd2q3sDNw72MZQE1yAyGpuaj1QS5czPXa5qExNykzQZgHjJw3G",
  "key32": "4YJW7BkG3tx8zGc5yzFk34cKQattLgHAdf2bYjzGSvNcLZGaAGfETnN7hrghi66R4bFqBUNEFMbPYsB2WvVkFzxo",
  "key33": "3dr1HPU6Wegv2nuSG5sZjuEjEJbmmuEKL4p7ZNG1EQq663LpwFrZv9Zm3fuXxmquLqH6SHZLJQMwTCTWPJSHKtHq",
  "key34": "2db8E4o1zAA8eyqNx91NAxikqcGmsXikZcQ9AUPL3aQakAhDpiXAp8aG9kvnWjr5WjVnRTrqssfWcNRpbSgQ3zJx",
  "key35": "41Dg4AKNEjr6QVPWaWEbvvsW4YM8FvCZLygbrt6giion4GRu1m6bb3Y5ctBoWmiAt4SrmywbRs7SKFCCHZov7AwY",
  "key36": "5c4nKkXXWxCvPMBYC1gNDCDnmduzQLJQfXSSBUNuHpFgXXCdSRTvwF1tjLBYQzGCyTwGWyYDQkmP5KtDDKjYrwp6",
  "key37": "2jnBTWxMXPy68jX3nGhfMPz3xUGdgCaBET5MUQCXNyDEK34Y4T7wKYLzwanz2tRxWMP5DT6193MzD8FL4nKRyviW",
  "key38": "2yByL3YLkWiuLLMEC5aP6BGGwauqu97mkDDfXYc1iSkR8YDUB6WuShqdGuJQ6Ek4DPc3UY6knu2by5Ri5G2VmfAi",
  "key39": "3pNCeKD57DXJuogim9GmAnXhhUyrVD8B26xvb3VQSUbYqHvn8jiFZJa3JDwPxDX6GmZygbwkpux3xAZ47M7bpAfC",
  "key40": "4edAMzWifEnCaAoUc36DrvQi7xt9sLSVkNw7QrZFJy5iPZyqsff8vT5YsTcM2MQur3mCMqPwAwepf8UeJBVu8hbM",
  "key41": "PATdHsQwwnbzkf8bDwQVnuYT87f5Ut3v25PwSHRCQyZy8Uttic8DqVbuGab3CiWhnyNEEbATv26D4X1wHPrPb2F"
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
