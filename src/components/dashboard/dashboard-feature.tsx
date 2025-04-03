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
    "5pe3RvnXn5poNoGKENN4Y1vM1TqffEXaHmLQFnjUUevovs7PZz461VwRLERhYrbQbNpBvaY5Jz3FHQMhH59WUFto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yksBYEqSw2c3541LsiNzXrrtndRUo8h2TboLdRVkJjX8TmDkduZ1nmdfKRUJTMSmm2Fpng83Jiyh88FJKrH18kZ",
  "key1": "3Tn5TxDTvbdLKVP52rDYWxt847aAw1jedqNv7eZLs2J4JZDbvWNiLACvAKg4YJZc9iXk5xRrtX7EAhzb8qCz4Y57",
  "key2": "5MAkGYYUR2QLPbgWoAivPggPTJawRyuYyuTsd5PmDr2X6fV3iKK5QLzsf7CPBdzNzkmFpUzGiuYGvE1UtA596Z8n",
  "key3": "2rdfne58iYN3ABBKUfCPuaWjCw26gqnbB7hrQuXMZvbUGkVrFgQfpFC3sFDbdhWfjM8iKkCWNZfmKXd5TQnQgTNF",
  "key4": "5X1Y6KJju8nj4tY1cswZMELE6gut8oFT8vo7bkn3Z5xwbckfpGP4aob3ybRWccfHKiuFr7KvDTmPjAgMJWZowGDK",
  "key5": "JFJwtpR2m6B6KFEPLFs16sQsumUWLiRhiut7VJRK9pGg7px73UBBVJdemb69G2b6NAofUrCkhMbCM8tnDabqEpz",
  "key6": "2hmL2WaSkKusE429pn1CmKBDit8MUKUBPiitMBtwDSo93a4LH9F1JiUYcDMUaB6BATwrCaVdwpoGyDg8hPGH2kae",
  "key7": "4DTqLFxiZR7jGxJB6CHQqiMdqzJ3J6DQ2Y6S9S2195speWDFhFZMhmF3fP7b3Qg9hRGzkyDT8UPiYAt2AkJ4BWAz",
  "key8": "5YEVHZJowveRH17ZzCMAaRnYyjo1z1zrXe4YHyFXgfsXQi1zdU1Kwxa3PAPadEEWe6sPvAj9MmQcY8LtUDRooo5B",
  "key9": "mmnv4YHMmYf3939jAUR655sXVPRV6xuy1Bj7WGpzhBQWBayycUkCJH9wUpA6g4KH2cJnHga8fPJ3zmSLKnfqzUM",
  "key10": "2tSrdJ1b8scNHRHFSkfq6jCjUJF4GEn79wZAnshbj6w8nJ7jV6qVNGPFHFZaA5bArQ6LutDGhjotpESLWsDHC7ZG",
  "key11": "3sD3GwEkido6zH6ZHSYS5m59QV5mQYY5pvixnRvDj4BcFJRo9DrJygNLhdeRt33C4rkVK6szZgpUzHpi6UjaLRBB",
  "key12": "3J2Q2zCg89s7yURX45MY6H4iyQ3NpbMF2mjVnyMNYFuVLeyUwqA3mkXq2t8STrXvZ1ZLnBhRMfFNdBYeeGCCPRWs",
  "key13": "363sa8eVecKxXQVzsGZjgaDz37QTDMqQwrKFWJBLuavww61aTNWPktLxssgKj2xM6tko7DMoioterrvDzEjg3mYu",
  "key14": "3UBzQzWMJ6kKPw4To62GtMrUYD33ieaWqatVYDnzNjaAAj2WZ3hdxxDYEnFaCoaj1CSJM4FrnvivrwrqbU4AvPK1",
  "key15": "3FkrfPorSVZHTdask8Xq3hqEn7msvrpJzzSD11h1DRBwB9uZNHPDypQ5g68xg8WaosWxkxLxiEFMSBjd24bXxwEZ",
  "key16": "3XNHRPDZsmJnXoe39v32qxynaMCZzUeFremz7vyoPfFcAPCJWb68RVRA4PTSqexk6SmzoJNkiKMCtk35gqZpJDwE",
  "key17": "3wkfabYjrdd3M8gCzfzL89XTUz4iUdsS5w8At48spht72Jjipnh72heWYcJ2pqfoufp4uQJLQr84CmKZMc7kjhek",
  "key18": "4cpoUbarj7cXL5ABN1qtQdoBkr7zjhEx6ZZqtdBaYudYrqkBm87yRzpahSj1NuvhynFuWBMPtQJKuA3HZ5UEFs63",
  "key19": "2rLFNbqBQYtSHLeGT2Bypn1wnkSznBGQ9wQnPSQFUhLUtE2EqDr64U5NvYrz8mNmCPqJG8wyRnEy1VYzFVb8gSPo",
  "key20": "2yTzckWMoYL6gMEGD95WNXFn44hftsDNgmKGAfYacxDk7y3Ltt8gtLXYbYvC6zQtA6HF377Ax7KymFmohvGW2bsi",
  "key21": "4uZqZoc4GfRcfTptv23HhxKktMEzR8gFYyHCz6bHmi8SS6FH7FmDMWZxudCxY7HP9U9ebwgCRNDbQsfwqZnL3kdV",
  "key22": "2TFa6AWXCmzhEjG6FQMyUdT1qJNXehG3fe4ykV8YAkiJTsvkeu9rcUm5U6XbgArAuovEeeVtLwZ18X9m1vD96h42",
  "key23": "xueKDZEKqy2ep4fjLYT7Jjj899gXdy4JLsRGxRpwBLXCzDoSPhDTGxj7ZDbj2RVq8nM3aAVAXfYdwxChbSsUBqj",
  "key24": "4kwM6D6otcUBjcmuPwB3QuPgX42QnMxaGm8NW545x8yzUqMcHeMJJqVugxTCE22UwDdA9nVyhosHWWjR2n6uGjH1",
  "key25": "wBitthwKSSjv199cbgTv2mkBdeD7fYEzp3sHuLsjDe5b71VRLrr8iqizYzsYnxmvuSrvq1wcPWKCkoHAwrur7Wg",
  "key26": "2kHz9grNyMiks7AHLYpunn35k4wbEKBZdpdJp1fRempsZ2D16QnDmndUb4pRsLodzHqfuoSqYqmcDygYT1qRnEED",
  "key27": "2CvnFcYjbzJQuA8FfR2brTnZqkBxuVzT8N3fmnWiYgsqkoCpwyJDT6TPKgQLntQYVjD7kxdyAZDANJH9beUpqCr6",
  "key28": "3pSj9tarey1nv1yHfDQjijj24XZncDFZWpJvem5yrvWVzAdvSGC82y4JkXKL6pKmFxeQGWTZq4Fsc7SpwEEcdzoK",
  "key29": "4eH6AnTas25jNHxNYr8pjfDT6iqwYwg1xgTtNX3H6SifsnYPC19XMDyPpKAn19P2WTivNseNaG8jry5UfCHgxGLM",
  "key30": "2VYm4j9udCgnpiJe3jTqSBWbt78yuq5FSt46qXrPCa3wLX4YPmFFPsomf4zu6AhDAm6a83Wut6ntXWSNkKaHoevN",
  "key31": "51N2Eevxyc87q49yzqZhyogSdfonuXnXqtN1k3SHP768gbXhf6qd7YGwQz96MGcJCALpZcNaqkf5Jn1CVTzDkT3h",
  "key32": "2CFDBHLDoyJeYxmfp7ecMk6kVGnCY68VLoye746k5GAWW6N8QqxaVn7oZPETSsS2Qi6JQsvWFyCV2KnTRzNdUGk4",
  "key33": "4dsPos7ebNTS1CzM2LQkZ1j6VpHk3SR8783fbhg1uDG4M9kYThcxdYc9yF8C7X3Z375gPY5fQoy5947Edtex7CR1",
  "key34": "5XajNkrdK3bCUeYy6fFKxEUBQUcN2T2f1f475EqdozduRF6bwSMn8bURFBbfgVfUPxTiuna4yQPzcCRRNikRvLWJ",
  "key35": "22vHVWQtv5vHnBSCyMRiNXRcmEwmpb7sPGmoSfe7sEf7Lgozf1gRuSfKoYcSpGWMr3fnStXVRsJTtDP6em9E6Jya",
  "key36": "2QUjyJP9rY9tZAv96DwLXWuWcHgm3BqNytLRzWjpNeUEbr6q7rcdw1MA3CUu7ygTKeyvDx1JXrBcqZVJVFSuuwuv",
  "key37": "3ftzp34erTMzLyHTnfAuvCP3k6KQpHdKWrtz9YnPVHdu21QC9PfdR6SFM3yhkyeDeFK9dDTRX6vkuVbzq4RGGayv",
  "key38": "fEshByb3o8ne7VRetc2DSPyRb6bCFuQfCArnu8HgQgoztMy7qwwQ8FNwTre7ikyWf2eCNxT2jGcunTuR5YPSJyh",
  "key39": "4QjZLbWyDDUb7VYEruYLzbJUzV994fYrGFvNz63DcBg2JQN39HPdD3eSa2UjVYB8RKGzVsMpPHzPSzkwjH8uxQjb",
  "key40": "4oyHE8rfvZhC3duiuoPqrw9ajGFt7poo1mQ3ThH1FdouUNZYmJtP1d3VtpgmJQHs3XU8zo2TpiygGtYbz5todviH",
  "key41": "4hRvKsfSh4SVqKjscFZRkNC5FqcWPJg1bRNKGHYexd72zmyPYuDQk3WcXQNRvTcaHaL6aCfJ4x6jV4e7i1CdcykZ",
  "key42": "4nSGBMqmghcvSgULCbZNHqc4JtE47XXEPjQW4bC97NZgtQxhDrfvUCN6sGd38XhC8YBY5onnh9kAy2ACMptXfGwk",
  "key43": "5ewT9K5LrBKK74fC1SYAqZNPMdL7vnJ2YfDayAZD3VbHtZXQ4JTgwA989mn6Gxu1v2V4s5LS4NiM5gBEYh1aYtoc",
  "key44": "3gMj2yWKz19vkCuXRxqLE6kZB8WQb9vZJiHYdwV8UkoJ9u3FnQKos3Ht5ihttE1MEXppcw1d2UVnDnrafag6htvj",
  "key45": "2fzdj74fjUmsuCoSTdrFANiWzCCa2GTufNF2S2hjwVG3S9wSaqC3F6wPTkD6QLDiXmGg1tA6obWBrCHgVXmSeHYr",
  "key46": "26XoWp1YLtrRw8kaDynrYr5EkPv7bZ1iHWJXcdiTcbuqEY4TxBLocPq4G3FNVhMygXgMJ9qYt1n26oXXVxwBG5QE",
  "key47": "3WSinf8euszgrqyzSD5SyuNVVPdq6h3tBKWKHHfoNXZwdZuifx3yScs1g4TxBPMw4WSpyT3i4wJ77CmrrWH9iK4F",
  "key48": "4PFE5Hvz4WRVsQYLP1Y7qxhVYz2oRVV1AK3mYofodb6hGEzfASMVgkYjw3bYrqN3Whd2YFbVELB76zmEVt1xk6Ki",
  "key49": "2GmCvL999GGnLoPLJ5QQAXNbo17oF8eQHMUQcu8iFzGSzbRCy7TLaXwqVZYb2E7aopzqvcUEk19qf56sS3d3Nb2X"
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
