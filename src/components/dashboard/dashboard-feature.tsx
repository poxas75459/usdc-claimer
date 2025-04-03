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
    "5q4PfADcbE7rDxHfVvLFc5b3BVg2hpeo5jMjvwNDmNFG2zYy2QvMSPXtGw37ABJUFUXbGQXJmXXzzzH2eNZSb4Gx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55CZonsZpECWw5y3tMTnpEvVQSw1QkfEFZes5bVEke1Wcxz3VJnZB85PwMBcnJ2XoQSQVGL9uWq2LBHT8ZKVkfFo",
  "key1": "jM5JKC7G4YpyV2X3PtqcP79unEhe2D6UDw61DSvH71PqYhXSGW5UG3JgpaVWLE2r4vM2qC8v5YWKRRuuDJgW8ug",
  "key2": "65q5LXsZLVQA1Ur9tihfm24dfDy7JL6kjcAP2e27kD8YFP8SUQ2pqW4Qz4pZpyp3CnH4rdAN1vp7kEakrX72bd2a",
  "key3": "3qfjDz5bCrXSMa2AjeEdYkXwN7NXBNkxcf6BunjB7fyf5ERStPUnwW8kw538K3Yih2qC52vQHX2dMhAKoauF8HTd",
  "key4": "4rcfzAyzK3WFET93eWxJSgrfENMAmyrxhPt9UR4eH2M1DKkX9LxDToTxGTPvWF64cCxMhoXTPEECo4zi3PhaWELv",
  "key5": "41KUtawhqqYjQS43P7qVM9SZoamHcbsoJB4APEEhdQ6shNyCyDZWuknjVj7XvFEjHwHY6f5KbyaRyAqSvusCs3cV",
  "key6": "2uACFoaj1pW1CRa9Q9JMeEvXuPjjqNZ5e3WDdyb9pGmceoCyPeHxBE5n5wNP5Tq1UY53uXb1oqi1KoNJ3VTeejkA",
  "key7": "5QehC9iAdnyqvFYCvCZjTU4i598MBUe2q6cE28aycUMHW1xHwBoV2sUqm5enKim8nfRR5FSAidWGCRxgqDBGEmCC",
  "key8": "tUcibv98ocwuQyqyv8fqUeLf4EFHHtPMJ296JKBj7Rw1iWncmkF3k5SnmdnKavMzMmu6wknce9EJXE8rdDEkAiY",
  "key9": "3RE7wgrM66HCCMSvLSrQok26C6CsQEd6W2vC2BVmRgQWHqVy3u1ChPyXByKUCcwm1d5avR3aGFEWuzXeb8rfN7fX",
  "key10": "5qqNnMFMqo1Majz1J6JUFvdjafP5Lsj9UrYLAPbVSwGLRKAU8mKtN2V1rJxmEcqkkGTbZJdxt1PgBT6MK8EMVR4K",
  "key11": "2ovFsvVFeiqdFpyab92HPDBxTwz7SEvYiFPbadsJSpjfihKZX6YkFMKXpiP4xgXEw4PskU8AfKX7odzbai5F8WEW",
  "key12": "2kK7zHzbbPiaovWdZkdXwLkNgM7ZAy9jfKsZtCqdi5FhvrcUjvHGgoLCkXXoEcNE3ANgwHi5CvUovoWrsEVaGVzB",
  "key13": "25rS1QP3vn9DmQS9Uxi6M2WqmY4MRZWS1uG1Dy3263DrnEe9BuM6xyqq835VEy35mTLug5MR5xBkoMDKD8eteEV3",
  "key14": "4sEQUbB74vyravqBaDym9pDFNJJNm9kRFWHJogahWHLERNEh3CA6emm5jq9QT6WWSokvTyKsri5pS9boaRpsJ5qk",
  "key15": "4bJeqGRUEbVofHKBp5T1rTyuCQPzyBQU71QYqEBRmi6cfg2HvNKBw3GmBesgC1LTmTwqnojQQQ14FGSKHj6zeTSx",
  "key16": "Rq4bq9CHMpC8CtnJA3ksKsNwPkNfJ79oq5mmyWAcsgeh5jaXTriyC7SeSAiNrZ1bsFrpeTscFyuUEtJutC2577S",
  "key17": "jyajY6n2wENP4uadKAmwtZcmZtLZP4dS9yH5WVpAqCkAsDnb3BCbwWgqTkebLsqyW36jf6eYJihJMChxSBk6cUG",
  "key18": "22yPSUeGBjYNSUNXEKNon8VU6MNPUvX8SZ2yByYJJyGkEht5EPAViob7nAkM2oec8GsrZz3VSfSWu84pM6DFWZJb",
  "key19": "4Ur1kXct26GUfuUZVWSqsRNjApiNYore2DE6TKDDNMH4A7KUmgaFjvyMoqtWvYbGJGVtrrMNYF9FwvnZfnt1AAsC",
  "key20": "58mv8q94UZJiJ1ZB5g6eit6swVwACQVGaUUcA5ftdcc1zLxiDq66sYydN1gjMBqbdi95chdWpz1kXj89318N3sA4",
  "key21": "58zf8UzR1La3W3KRzRxMEPXB6uTsbDnKUwC5f8YkvpYyhQgQAjJzvAFffS8BmtrHaGvVMX6Ys54VauJU5FdDGW8",
  "key22": "51JPY2sXbFS9HYbisMKoNHZWrLqwnnxSwk4nr9hwHKqSZPDAyjt7sukRN7MNBZKCupgPtqwVaupt4xTmwhrrENZQ",
  "key23": "5h9ox3Pmm7m71hDNpur7XaVo9yPed3zohUgyHxoJC3DNfTBVegiKqunPsXYvjpp1yJohHhCmATgaVMUYjgCcycaC",
  "key24": "2H5tjYeqvwiwLvsriU5x7FEcRBSwq4vuQ8ANfkZHxhhZ2rBidDqZeZp13jrZBYgymGfUwJniLwbuBGJSafsF6WXC",
  "key25": "5xbvBv7thQxR9mEsh78ocqAA6E7mVzuiyppfWp5PhqimaAd7LyFjct7CBSgh2tBTMU22D3wY622V35xmKSfpWooj",
  "key26": "LZLeJtvYTQKsiWiJB4me3JYNrrScmJ5NzDxsZ46mXbkzKxkmV7XA9EobhGo4toRHji173VkGfnZ1GpFKjqBuDEy",
  "key27": "4cFmijFCEhbVbrMJdHq1i6yqjJH7kBYSW2NWpTEQB3U9TtteUUmnmEJmaXNtfiPwBTQRqGaAwUPdr9PvuFaVmTRb",
  "key28": "gW1NG9nF7pzjXdtAiJDYDbf2ABdM9aXUdKVF18zSzyoMVY6TeQuHYB5t2PKGJyro7Lq7Dwc2JcwGn61Wrg1McnU",
  "key29": "5AjUTer4BYGUjxBtYWcGXxec8tkg9sa1Jk5ou8Y3w4iYzQg9kQJNE28h9uUajeCQziX4aRX8u5LJTNaZhk4pZPmw",
  "key30": "GPaUPBP3AKSbKPUzkKo3haGXHd4nhvQDqELWEkMQSzqdGjeKUgEj4uNQQMqa7Lk9H9NrCUp5jtLbxvMDiV9gZcr",
  "key31": "nASpnbNvFMidHW2P3XjDtHNr4MUJ9GBiG6wzvKZMGbs7pjQbhbRGjLq7XessqswqGSK4m7pTkzWmFHLiSVTF4E5",
  "key32": "Xw5tRMwiR3K8ANhpHifXtYVzfbnUDc8Hs4b4Yc1tgx76SuSTq8Vi9GmZMdxH2RhH9cDzuYkCuikzGcZP7R1AU87",
  "key33": "RsSRoogA8xdck3bFasrufr41CRbB37UY7hqsTpBhMfJSg1TKXVPqkEcjzAzBCfFExJ6T3s2c4MHquCuSmqp48N3",
  "key34": "2FJYzj4oZnprPjjZWQbcRoGC2oU3N4ZdpmwtRKYoYyJ6XgzCnLqBjqQwEzJFMG7LXJgCVe8TedcH4b2SbtwBkPYo",
  "key35": "HgGEu2LNac4oCY6vku1emUNB6NFJYNqyJksbXVXAYmDxbTtdqZ85RxJqPpe4pURMEkcR2Wft2CrzaG9NkfK8Bh9",
  "key36": "bW15ehWfMyoyPUDvbYadrmFRoGQsz3E4sz46Bc9mqQhYDPqYtWnNsdv4hkcxfvDt4kVfeWUzDnpKytFN3woGyHN",
  "key37": "49vpxSNHs4soeDajqGqhsUkUoUE1xgKiG1XK2ZkucKCurz1KVrg7FK66yjyQkTqYPYXhc6HCe1tHt2HiRErWaovk",
  "key38": "4jtqiRwM4Ne96ads8jZh29JqvRafWUs9vevpoR7FSnbQzzfrszQJA3Horv6uo6Wnbwq9UfBjersmC63eWAD8N87u",
  "key39": "2XEBi2BxxAS1cRSnkUhGU9XGir3o9LQKA3tstFxNbJciocL66ZPQartWi3FghNqn3Z3SGTYXXwEwWbnmgnjEaJ8w",
  "key40": "4njirRyqzTD5TwpMwXq3WuHwqGRwh8GSZHLSTrNGiX8N1NsoaYBLdAtHb2H5HqC4gmYUjmgj1GNqBtufjrs2Zc3Q",
  "key41": "5Tjqb3U2hvKh3sueainrdBGRCiRYqzrneLB4qS5tQBqeH9mstfhae9kr53mET1ipSk768ePvFHEo2VofUD4WmJXF",
  "key42": "4An5ypgKDQ6q8LgWeKQXwqMWGdHcausj6XNM57Za4jGX61fPDQga471qX9wUJFqh7a2RQZTekxE3wM3gtBdHmjHW",
  "key43": "5CXvwLexTqPnmTFgxcgYrrxPUKzEbwLBvBtZXGZVkinrdrp6ah58fajE1865nPPjF7xCW3iqQf1ammTo3xM7vYzX",
  "key44": "2yCEjQcnNch3x4AnkwcbRDEvwRk76kCiLjQcxQXprhM8vqFDQkfmDhZ94v31Lu3LBQSBW7kjxfowgJHW8EcxG2NR"
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
