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
    "5wFo6Jsb1tbJnY3VDAm3bKcpABZCYWZqv62rk7vUZwiLysEDkW8jKTNNBvLxvsbFtcZmV6kqArSZE6M68ikQfakj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m9pRQ3JhBXcL7k2k8FawV89X886QiCgPsx2en5WtFMwyRWUVUj5inALJ3vdqn1VKsQc5XehYUVVXk5Xfg2jhp31",
  "key1": "5LVPw9jYfqWobV4XeiKAnsA1Ap55dDBzPRD58AffxHmV6iqNnLi8eKwGQvVyGb2FCiNnVqcDTcBwr78JXL3P4Gfb",
  "key2": "5FYE7pBv48rBjqhfBez6s7CsTCWReczXRRVg6ocCu16MPueVsffi3uHJH78ue8VovLveMMnE7KshS2dTCyGLmhtY",
  "key3": "2JQDGpmAEp4e2pwKWAZSG7ikt4v4aYp1eAVBUTvCAemGM67EosSQ3SCbY96BkSb9PYEpdsivUhg4gno2GdW6CRBr",
  "key4": "5avwPQ4gWxpLaHMVADuZbPBeQoFtfM3MMfzpkyTTppRvQbwrY6DtSEqv6MJEugd7VBnweLHQz5niHzsuRZfgtRw4",
  "key5": "2y4LQGyoe6fQqJt3LXL1Nms3HACNzExZPanjSSPNHWjbcnX1m7Ph6WLTHacwpeA75YpgPZ8uDdwZnAKt3R8UVFsp",
  "key6": "5CNuhMQUWqLKfMSfwJMxKK17x6J5SvoPg7Y3vcMFrbgLea72AW6w2FT2m4UyJwjL6BuUTW3R3WnqdfsRwhfisJuv",
  "key7": "4hSYCbbukq9Cmt6SVS1XYv2WYYHfc6HbuJYPUqxx6d6fuTX3pdmhBNG9EbkHtJWNwtDuPkXLvowM4DU6ZYrJsDoZ",
  "key8": "Q3nJLC4v9iomks9GApioK1P62tqqhJ2Jh6b68qk8DjLdM9KxpKJBS3qvA5UkWokuYoU9Tm9CWy7tCcNXmX2AW9j",
  "key9": "2QeMmgZymhQAaNdk9J5Kf1D5M7GJv3VMBAbXKcXs1vbkuTMWYGHZCnAqWPmSUBHsJmAcbDBDcySjVeegK7MMuodX",
  "key10": "5AFx9Z61UHXkE7ZimgFLmaSTpQbfstQ6WftBXePwcQx2r5uFLEzwPcwnhu4woR8twBwGt9348ktbekKLzPTmNdVg",
  "key11": "hxEsJz9YpQj59cf9E14BgZyeiXKypxhJDaM2aoKifKAgUzW4pA2MCU8UAQPvouGCn6UNeNGdBFykzTS6wfjB1HT",
  "key12": "2LdVJ5EBoXTaMKx8Rn1vrrVYKwwLv3NpqXFxJft8rSwpUoM1dv8qFPiK3QiHirWtRGGuwqz2A21U5GbQPcJzEu7W",
  "key13": "5fBvYmLuueGdmVUanjEZhfMs6tJd13V8kwSErtz16n5LbhMqqutN8w3EJi8uzZpmL8fMSHPP27KiuQqj5LhJfZUz",
  "key14": "hys2SBbU71NQR7eTqkfSx9kW2jYypCfh2zvZk2SU5twK4e45BYWmPMycKdj7Y7JaziokVXJ6mBsiU9njP1r1ySX",
  "key15": "LKPwfhHLoGx2PpzAEvnFEP3BvZp3hv1wPm6JBHLkQ91Q1N1251XWB1mEmn1rQySPfhQZMajmfhYvweAKJdBi3P4",
  "key16": "Ls5Yxh3w87oH4MTbnJWcXRXqGEzWyto3hmbnJVfcrrAbrPbfLdBSJuvtUqZoT4UQSvtb39cyq9sjKrjJFF5ZCHh",
  "key17": "4JW1yUYYLbYmFYc9RywCnqX3wpWGYkDrvsZnQhhg4F54pE3YGBGeWQGTCXfCeeP4fFdUw2RxvYCEeoSeHeZciawP",
  "key18": "5fo3YhYRR9XM9LfrZGKn1FWpB25YAAyQonp2ScJQobJCpQZ9mjHFRkLxpwNqfyHeTeRKCyGXzqJMXDgwFmxuH7NX",
  "key19": "a4x7bVHpuSiDEpQsycadkkwLZB8nxz4BuT1iN9SK63Bj3gN7EKqyy2BgT5nsVPU4YKqX4M6kayYnHFDg6jyi1cf",
  "key20": "25vtwUtFpcwvg2vfM3fVTDeeAQXAynbedDNZJBup9Emji6vpxDKdK4WvMZmxk9TiXN2Cyoi886qKajFN1XpybQr4",
  "key21": "5N7DwMyomkbc4FgSXPf9vunWQTkNm7tqQsZC4TW6VjPx9bR5TmCfqGbicRzpBbVkZ716owuVQJ1ynWveWjmpp9Ls",
  "key22": "2hkjmwm9Vs6ooadZFfzEwSQ7QMYiMHZjvpDRVdW4AdW5oCo3Bp1J9ETd6GGMASvuje7t2XvNhy1coKy1NMcS5yVJ",
  "key23": "36NT4UMV1anpUa5jjXd6k1Dn219cb3y6TcugfUS29qcXqxgMu8sd5fsZtGYpzHR5V78K1KJeFrNtp893q5ui83fx",
  "key24": "3erutPQRYvnoMM9brdCZPeFGjpVNyfhhWWbe5to55jbZvdALcCTbcPb3qkDBKatGrRhV3Kc5EgdjqqZ9tXvvR3Pm",
  "key25": "4yfC4Tajggm8RQEkRuZ5BtCHE9kD9bAg2f6YwPCVWhQyrNy8Nki6kKoB4kXLWiXcP2rnTR64ajJR81BTDsbdxs8S",
  "key26": "4kxAKi5zgxB2SpS8kQhPM8aCpswychCJFzxNQaAax8BQt8qpD78B7HYpJ1w9eKDWZgVq5Fowxe4CCGtEHiHRbkdR",
  "key27": "1mf18DdFPqXLagm4KsCxEi89kXmZ7tHwZTX64KgZseLKZCu35jYxPqLP5YV4Jd3EcM9X6jkTkD2NEyjs2ppTbk8",
  "key28": "3JpEqQHFsK8cqGjm67Cknq5WGhafSDHqy2oCWYKbFi1vbbLNa7KeYWkJCTWeAqfQ26cN5rYqVui3EitKxqJE7LFx",
  "key29": "c5uPBGtXF6rDYDV3HVeVqUtuph4YwengD25K1BZT7NG9EHy7nAbKjwcG6tEzwnWfEegqVYdrN75GKmeh3HeH9eU",
  "key30": "CgFsXYTVmSDwgwHqyfimUkEfxPeXst9UqfxS7iezrxx1jnceq3opyDWPU4XA8ZqzhmEoVss1n4k5E6VYUKqRKSg",
  "key31": "2GwDJvEyDWdH7e81VUBGYJw9xPttwLueK81rTo7CAC3ryiFoZRMbup1dLB3Ea3v6R39nDHTYgqQSwbWmFQo9FoCD",
  "key32": "4uBwkvSRHsTPTpBCSmMdNVw83oBgs1M995P8qtabXqsr8GcSRqBTCBnTswDqSj7Vu3QpdLeuqxbJUxJjqTtQeCiy",
  "key33": "NeFHJSRJYbbWRggogA72jTRqgQ5T1m5FeerWy3xfLGiFmg2CJoPr6DhPd8o3gXMvThQ5KbpHYMNMgLaiUUXSTJa",
  "key34": "2CH5yAv6HDyoT1ckvycjT4gX7WohBAmEzcXET7u267MB9QDyVsfxquP8wgy36RDxPeiAabdpypcAnsiYbZsCEbvB",
  "key35": "35jSN8vuvoD9SiY6NuuMihw7ev1zt76jmyomQ6zqmwyse3zHFu5Ay3NdkyyKMMCxdqZG7ysp3WaSh5YtDxNytwEY",
  "key36": "2M4JAg1TT2ThJsrXyGt1DoFvQVeg5WFEPiHWVJ2M21zoWmUNQ4iX9X9ULn67k3CnDhytFUi4syJfDD2qFZEjkw1u",
  "key37": "UC79TVMZczvBJrP2A3ajjZUrt47Rhc7Kd9ATwbvzjJWxiK2WXLM5G6HN8xX3JB5BpbvevXUPGQiS4NUGuF15VC9",
  "key38": "35UBrdheKfoDWhaHhXKGF1ES9Z3Rcsfks4mu9Y1YbzRgd3EgzJTLVzva3zAAiV8JEHGgYFvaXTxyE1JGTiUoKh8U",
  "key39": "GFxC28jLeM17vWQMES1NZyA7FJfFdy3GEZ4LPgn559nbsVL8zD6iRKYCRNLGRwbC2S7na5uc24QMLTyp5SXywCT",
  "key40": "3BN1TgGbAgQkCrgw4rihN4QSvgmQhAZUoP1BZb1moL5kv5Q9c1ukvsCcGxoNoS5ZPjxfKsfxjYkLDwvEYUD4EmET",
  "key41": "4vZJe9ueYPjfUPqq9nZtbkVkZKEv1mEMasWoULh6MWMY9ksc8rPryXh61KLPntVTKWnS6RyvfbXyMQNwxZNVmvfa"
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
