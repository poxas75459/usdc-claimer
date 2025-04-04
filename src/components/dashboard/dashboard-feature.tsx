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
    "Q53BMbtN7ftPQiuVEPAxcuap3qG7FaWG3C5PDsNZhTimqaUQ5VJSqB78KteRpNmBteRe2WbEwLE8ZNdYW1tom4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SAWVxN6sW9mAyjRgdQDoVeh47sUCy1osUGRxoXgs4mq9T4e3Qg7k6kvMB1bPfiJQ7C9cLJAQRnVeaCN1urzcrUa",
  "key1": "3BRuVS9a6jftLTjg8Um5j4kyABoBBb99Hcf86y1d8nbSdroKGicQfpBUVB2djxnj4N3EAYgcyRfPPsE7wJTgKvMv",
  "key2": "2UzQoAXCdKAEbRUaPh4B2NDCagtqouScYz6wdQ8rcLzjFQnfFXXphcz9tPUbp46iuUi22s2vHM2q6iExQQ4xoZZm",
  "key3": "3PxzGT1PFDnwQniCPtMC1wWAe87NimgHiB3T1oj37kAdzT8EHDRmRBmAMzbrWRVJVor5f6pBeoK7rvwRv891zbxS",
  "key4": "5QEbmVBnexb8Gu37kwpJRVTp5NysbP7aM7dbAoPNLpJX9uMPz1nFfmGzQFwZuFudCte6aN2XTTqNafdguAxkJmCo",
  "key5": "RWLKvBszhqQKESqaF837vdY1vxzEWpih3FmnJ4aT6t8k23aS1E4AuY3JMHadJXy5xGUPzzSWm3XbVfQjrANzfWt",
  "key6": "2wshm6UFx5tx5biU6nYfPHkpDeX8cn97DVW5gFi59pJQUxHAMsWRrDtR4GKYxhnZXs9UzMtU2x38nWB3KqcV6RYJ",
  "key7": "2TpzA2cWdEqGkPZWY5pGjAG29E7vfREJ9EoUd9XwWM1Th5LsBoheVhMLfn3Dfp9vMbysnFVpt2quJbMvUXkirrGH",
  "key8": "5h9er266bc6HJqqehDU8EcsQ2dFbXw3jrfBsZ3jMJqwHjBeNSEBWQmtHDZjJUVfrj6az67FPVzXK4thzzdcqkK1f",
  "key9": "4BXesjS9taMgxGQJGgmswJ7P8YRfubydmzJJmgL9PZ1SjkjbbydqpuZa7cARqfv4AHtrkKK83btwSScWmjc3LvwA",
  "key10": "3RnvadQxXsk62BpdaV1u69n8GutTfDj6FEdDjnQjNvksGoGq5PCzAimK2An2puUfAEfNo3ua4peEtmEqYzHSyJw",
  "key11": "2J9Esb2aZsVYJGzvt6KZE28AodPxVBrvL2qRWopHQciMsQmnEuYLyLYaGk82qqLpNPD48XgZfiC6p3kU1TB2ngUG",
  "key12": "qJCooKy3Aq39SfjH6UdUKwwSowD7uAycr1zK9G3DUKQK6pb51R8qS1uQquEJXAtjpUBbM1nfAz57ajvyaSkAu48",
  "key13": "wz8bN3d9tcGMz2BsJDVRFKTbzZPiW9qHCik7SbNuR7GvNkx7YYTuAxjV6Zb8s3d9je2S8Aob3ugVMNWHYrXZt6P",
  "key14": "4TjycbQsUZ3Gb6UaGSStpk5GHNbUNCHpjyfkMA8H39J9U4N3iVeeDK3fEfhJ98vzGT5AEqnjfb7Y9r1wYMwKRRzL",
  "key15": "t9DExwQaNHuvJ8rV1UcrJKwXDNqqUqoeHc9nL5CkCCFEa6Wmn4wpoVUSGU48BJZm1N83Bm99zL7ksiNasFYMXz9",
  "key16": "5oKaXyP2VtQB9RjRSQaLDM96fuPCSDPNmo4fJniyZvu299x7kAPTtK2NyPRXN9f2gKbgqfnHopZYaQECAjBJ1MYw",
  "key17": "5XHB4Bus7oqJpZMrBYMVH4qcfUPq5n9PKeBW6k7xkvjP6c3838RrCg6v3mnGVoccZRcvyx7jsm9p18ktkyLRKPEZ",
  "key18": "3Dbu25yqryCtruNpsWDhZbKMe42mVqp6DPm19CktFbsJyqBgMn2i7VfGpmBirdKEBj9sETQL8bfcNtK4fD7B2C81",
  "key19": "4XZosgeiWWTrud7zpR7ZThbfs3GFFSw43nGhegvQss2vAqiKX6e6gMwjkdMQ3TjuhH9EDYGor37osYkdTcwqBjZS",
  "key20": "3UkKCrXtf3Dabw3NB5f3nTqKPZvXx5xRbW4H6GhYiZyC1HYdnMY2ce7SBzx6xDTaDoxDiEfUsPTCMQx59FpCaFh8",
  "key21": "4zKhW8LouAohjToNYoMPT5bEbC7bbdE2wQHkfjN5zQroZnTZkwqHg1HKEsvsoe4JmBh1X6TVfhpfBJi4a5XTggxo",
  "key22": "2sbDjC64tTUmvqBZKbCjycKC2JhpEwVcUK1gdeppTTCZBmJ3TxF9Lde6nTKUDBk3E4qwDLK6Pj7KFErkWRksPaBw",
  "key23": "5iAv9wq14X1rq8dQcE15yJfNbxMZA6f84g9D3WW1F38sBEdujzjbgYCapGsN9qSrUGktzngcVLzUrpmGLc45yS2t",
  "key24": "2twdRi8LWKYdEsksGkHZVETrJBLxp3CYEfBvhcAZxL5Mjtyj4WaRyQi9rDSfEWgKiQuysZcTvmX5cufgqPPmpCpn",
  "key25": "5NedrFuteVkRpzxWDzfAKr9ypEzEopRXAfJcuU1vAJHYWPkhrzCQxwUCDk26XqCv342LDXnStVnXeWDFdzKs8coi",
  "key26": "5hZu7RxwZMxagYQbE8nhRTFWBXR8V9jXAVeR1RJxQ6AS8XsL1ERkDbkokXTDTYfZhZ9w4KVPujgRM7FRkSGMBv8U",
  "key27": "3dcQbYHx9aGPUt8dJe9FBdnsY8yRdhZnRK7qYFrAbRWdBvwfVNPrQ2vnnN7y3Q75cJV9eGjfrdZDc2nBMLUX51VN",
  "key28": "3it7fuNkUgp6NBjoVLxAwY5tsqjKkTAVse4JmMqLTng1v9hxrVpHS9yRSRf2HYuvDcRVrbwmXH6xqQqhZ7UtDkD1",
  "key29": "5rg1bFgwu3WsHyHrNgV9HGRaCu8HgCT4hvjpEPV3auAMpLLGsA54uhW6MeGnngHKUzjXXsWaGpZDmrPGUFUgGExF",
  "key30": "65J7z73iDR2sWeHgwJ3YT6EZbBiFZSJNKbamFdW84163QcDaeFMUcU77r9DiEbaDpFWJCsW33j6qtUBvnxTTcc6C",
  "key31": "4xe7LnXCMFv74Dsk5ZEec6NGE3CDs3azoP7zrSSy4g4w9w1wLZDQ89Q2bCuutyPgBNorVMg9kPpF7vB1dMEpdK9q",
  "key32": "5qPghzs8a51pZ3aDCyqBdwjH4idAZ2tU8WEtR2Z1B4VjKMwoCbpvYwMCrbsn872xTUbi94JqzS2tMdJTDTJJ2FZQ",
  "key33": "BTEmj6FsmEekYs94UHXgLwbmDTYeYoVj7yDdUJ3FWjVJGRgJBz6PjfLvrYRd9E3v1HDYo9ZSqbTYwuYcTFJm6s1",
  "key34": "vJof5E4iav1yxYLrAu15u5YHGL8tKCjgvqySb9Gq124JKJtDSfyMAnFbDZQoDBdwtJY3Lp2DJ7Fx9impphvdvDN",
  "key35": "2wNd9NaXUrm5oV2VE6aPNG81oMJLsJETuKyiJGQdjMmhiKJTQX8i1p5ksiBdZwfpv1bZjrvZ9iywYxJkjVRaiepf",
  "key36": "5kByfCFXxNw8hSpVC3NomhjYorebuF5kxxRCgc78PAcnk8PDxMicm4umMFcziU5XJR9oZvc5Qw2xkrJbqHKGY52b",
  "key37": "4V6hPsMuT2o9V77KsYPspZxQP9SeBQrh5jp1V1he5g6xcQZEmWcLmuoXYKnYP6CHVqPWDsjq16gxHAFCYDfoPLYE",
  "key38": "2HEnVyS1oy3LQ3FbC9aEi1Y1RJhUJdt1jjzRgUnM7oetTX8hnTwNfd6d91TbUpEKdPPZSqKbJrCkkuDjrJYRgCDU",
  "key39": "4mTb8DSXWLQQHaSS8cXuvKDQamqGUHaHhm5dHjxvUC8ba5UEEqHpLxFE7Duugx4Gp9xXggenWSUaoEZ5A83SyhRN",
  "key40": "hbf3jPM2FtyuFYoNjEcG5vkbwycmAbeyJivVh4hRcFhM99fctPm3FUh7cttDWXFwvNVD8W9affjgzQ6VGHMTgHP",
  "key41": "3ZuXN8yNykKUDgTAjvaKL21FZnHQs19jM29NS87Ljp5xh28JNgud5vL3xXaqH6tc16YBiUaGcSxxN4QcrMDpeMc3",
  "key42": "3dftGRxKyMkytisPqirXGGcPHQfobc1s6knQHEq2wjapJmj7fyF4Hmi2oKhHavsjCBQyTbC47SkLG6iWwWaDnFPw",
  "key43": "2cA955qGvo8SQoXnZyfiF171UJ4aFErGpFMuwFyxgWdi89wXPmwvexP6Vm8ojeRywvAC17VqbuCvxHesgjyG48MA",
  "key44": "Um3GCvNeyjWvwGueFPnXJY19MCCYVmWgfBn89mLtGhYipoSA5VyU5885aC8xote47dye1fcJdicMQtqB6WP87yn",
  "key45": "4MW3i2zVXwVTFK46RVrwiVVeiGDUXNvF6aSmiXwah6octhKT6a511Y31bnFB64kcPTJzBLF1cUKRScQAVhv3eTrQ",
  "key46": "4jgWtM961Wd7k5f62vXMdjB5sjdbKm7P8sf6gUSJsoBR8sNQnFhyXmryN4BuBuY1E3AekzjxnRKdiPbo1a597j5J",
  "key47": "CrHWj9ejdsLi9LDvQ9er8GPqioY3Xoveyyg1sGhkAX6Ya97SbywX1A91nwMxcuegn3bN36GDU68qMZp6szPq2Ad",
  "key48": "2P4xPvDXBGuV7PTbZhAndFgbnvmJzzFUZsQfAHjuhKmjbwhDWrV5UtZXDVpFZZ4TTu7UBr5DcTSGSmDgYbv9RbPA",
  "key49": "4QBRYdPSUuS3k3Xp551FBocSwXWhVAi6UfBQ9xrimtqdeDcPE2ZtrBwahamhNj9FAzKRyTQ6wspbRtB2amGyZMFM"
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
