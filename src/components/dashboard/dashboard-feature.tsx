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
    "5qe7Lo8zGMKfAzWmcT6rf9EsQ5vE9rcgnAzaYD7zZ31ZAv4Sd2N27T7ZHxyhshfUE9igNJY67ftesQsiq6u7FQwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4phBnmyXFBhbqPf2wL6GhpY53mePK4jRGqFYU8MY5yHLBXnMDaFkVQbM2h7cQBmVcHj3EY1zW2oaygo6jQEy2Av9",
  "key1": "64WpBg41SYD5S4GBP8ux8K1q1HsdHpTR2s6WRkchMwBwtawc4tkNH53fVBsWEa1ziKBwfXFFknaNTALck2V2Pg9s",
  "key2": "57y9XwY3wq4YFXVy6cK6rhKJiCJrwRXtWFUtpwj6eER3kr73R9fwfBLxy9XdKb7hEfAHfymA6oT6gWJPMBCj6naL",
  "key3": "3s2xMBYUx3AZYx5KwybUkrbdv7rxhbBYNzseixRv1QvAoRv25NkARyJMd2YjJuUfbtuu7Qt4fzR7LsVgtBzhyc9P",
  "key4": "4hTfQoJUWe5uapFPUB9vnz7UB1Fdxk6MgpofGxLwMPJRBrtqib7bjr7f21R1vFkcdDf5kNpGNCgA9TJ9rstRdjoe",
  "key5": "5Q4yFfhXy5woQQVoEbQFvrrtTxV3ouAiMmz82mAuWWHnkmmrWKWVPDkUWhnDJu4PYW14rtSwHP3Jw7RTeFcEZFJW",
  "key6": "5mBgPdmpxgf1p2yMESxejzzb7bEuijsjgbBkmCPov3D3eqdJEFnJ8d3XN3AFXjhw1V33JiFo5QWBJLLuMzHhKDLL",
  "key7": "4mZdFuJTwTMpBTAcPAznYjYvT1NMxR5B9PYBmr2Ci43UE2jTGC2hpdnmorBvmN3wRpuFEeKv8EZuBdC35apn6MvY",
  "key8": "5yqjEt3VpcwEnPBM3wJwAXv75Y2ZLXr7pRpC5KLhAW4Smo52apZQmafAU4NXtju3cnBFcGPc8ddALKzDCS7T2pNz",
  "key9": "2ZB9Lz55VKz4YHqwqTmv3ti1enLoTRTBZKpqpTYQiQgEWz4TU5Ni2DWj7N3TehuKNmnyiF3yr5YKDyA5rUwDta5g",
  "key10": "mZMpfeYdNW1CHkk59e1poWXrsNQtTFiBrws5ALKNELxNjQC5grQy3vvu7rvC5ZnXYVQGgHuRtS25nF1ZzvXNED3",
  "key11": "2BUoxwz3m5MoioLv7XnM3J47ubE7ycMxYjr6urGqt1GSSEy4uoNoWGNisvJ8PAKhzyuqKTbWhZye6CN5LxWXYb16",
  "key12": "4v12z2d1epcYUr8NN9jNZxs81e9BoK6UK9HJ9zt6Zi8xmtxbyarRj2WKPTVMjoJbVbD2PYWxRMRW87HuYLZ5mNJq",
  "key13": "5VjpTnYCKEakQeHYmkqy5PncsfceFdCzf5fNk9eVoHwFa63opSkK1jg4dSbRubACoZQnmL6NDzau1XMURBUpdUCW",
  "key14": "4bXRRyC5Jrq8GuXMv8xK1orVU6TRPZ36bQcaZB7j9fta4J29ueGTrcFA2Ja9Lt93SLGhMxoFm8eD1rDrWb95Wssy",
  "key15": "4q84cAfBnkFnrTH1nhoLt5x3ZPwmBsddEMjcpCCijVYDqJZdGAPErEh79HSqPBwvN3Z8YwD3KuB2D3c3bJ66J8tN",
  "key16": "4bvHiBc6ymzQA75Wcshkf5UBanuvjVy7CyNyKKXEYeptX1cePxgZ9UQPvXWHan4A47Bmz8DPMEtCwzxwxT44vuzE",
  "key17": "5yLGbJnu1Lh8UTyUNwP6Z2tFpAoPUTdUii9z6EcACXXF4RrQE6PMC33avzxF9GFQPEhozk4vQQKGYr7vGMsTfy4A",
  "key18": "fwmi9xY85TLKEMp13KhtyivYPMxUftcE4q4Y9qq1ihWr9zwG9StmF9X3THuD8ReqgxcjwoXsorPWRaYBejcd6Z6",
  "key19": "2Wv28xR9nMHten7yUmmAJ3EhU3nAKA3oDeaLXcm3mS7hzHaawtVS74DFqVfUaow9rPQMbcynjEaSXsM1iXNrNTaU",
  "key20": "zfVzr5CX1KRpJ7uSiKU5dDQZTguKjLrJfUMAe1SHB7GkiU4svFMuqBASbDdd2Qg7ZWU6UXFbDz7rgZ1YKgvJUP2",
  "key21": "oZNdoAdbbeEppYwKrhTd2yWc4FYe4S25FYagTdLZV1JNJVAfszJRUUnkJ9sQuh67KeVyp3g9vdBRPq4qwbhgDsd",
  "key22": "4FLrezU1fmvBoineYL3fmMChrw8TdpMqGAgKLpbD9HXnuLehUmNLQeA1cSrJsQiBGhcGdfYtKa4tvhyzGxfkM4Jt",
  "key23": "4y21hX1G9utwskXEyAMMN78B2va5Stnb7ftb1nQHR3wHAvGvSNchK4nSbVtTVcdqwKwckyJTqZRNmYPpJRk4WMqc",
  "key24": "4i43WHg5jTvpeyc8Cqtfzy6jzKeiARz9t5P5A3yxeKssAKt34AZwkkHuJuPF2p5ZK9dPRQghiZGaUb9amTgGTj4V",
  "key25": "3D9qqoLRw1BiAVoMrgMG1NtzZrgznx6HAcoX9Gi4ePSUhj4ouSitVFtezkcKoqJCWVq2M8TPU8FaiFTxqXgSW81G",
  "key26": "2L886gMKFX16nJdFNLRHdvjfugRRgjQ58aZWDu1WkrJEunwbecMpo8YnKocpiQKf5GtH4SBsLDbZLjabx9fLvvS9",
  "key27": "2HrEzxfSkmGTfTkoeKWW3T4w651t637jG7Hr5uNTDzhjhJtB7TexMfauyLWELr3skAcnsVQsT9Xew6ZwoLDKbL4y",
  "key28": "5Nod9oizmfhYUeVJGU8HpU9h9hALUbBVvZX3hYY1zyRRDk376rPspbjNnxZeoMWTJJETcKhvm7UCgch5NetjS5kt",
  "key29": "2yRvY2GqnEqLhS6d1KNSVPfkG3hk8ZmpdgbpRhBwctTbi9KVow5UregPqgaQi6qRcx4SW5NJDcxPi3SpDzjtKG1S",
  "key30": "63aPuua1ufCpWubM9z7LZM42NtwBk3yreuWpweeYxVncfDPJEPPQMSRnSaHhH6rBA6QupmevZSQhhRojybe8oVdE",
  "key31": "4VCkpuMM63ry7ZQxrnti1oAJQryJsttSUEg66tqZT7QE2AyWxj5pByGipnzpGifS7CUKa4AuPzMLLtiN8FUdRpXS",
  "key32": "3haXUBY3Yz1WubbkYBG1tmExpZkmjuYN8Kj8g1MFDse24uhUVZqRGQgpSQvycUzccbxNMMAF2AW33f8Eim4m6C1r",
  "key33": "5NEPeDgsoqycgLQ6WGarVwoBcMvnL9QjLTp3BUz9BX14DE7oc3wowcXG1p5tCVYeX3DkaWPnnF3XTyEKJqvn9rgR",
  "key34": "57hkhKkY34NveHtBYt7ypx6JWy23mZBjG3ktMKw4k8VqzrQacGGf74UsR8VrLRgtJqrm8jbQNwXis13Zrc53yzmV",
  "key35": "4bTbo3BNfxEmfkgS32M3SCRKxKMRx1jgmWixPSjaxqZNkJF4R2kBXqvaUVdSA3ipDjv4fYVSLkCbsN9y8CepdQ1u",
  "key36": "2kLmszxCS52TBUR23cT2Z9cTHTQ3B4geYBoEiCNXDYs6WjWvjyK9aedBNRQ7r8RJPBtMNwH7p4Y4DamC6NkbdrQz",
  "key37": "3CgRSBYAixCcDgeyNCr57RnAhYPxyVn37R5SobL2RMrkePRumTNF2H9fVKV8cW3tmzbqf8BRTe22X7tuqQmXymVW",
  "key38": "34Ng48VgUr8o4jVhTjL3eRMqDJZTKRmouE8D49fBJ7uQ7Fyh7rzmisKGLZ93ny5Lba912bqhwJP49CZ9CNVAPBK5",
  "key39": "3uSXvz99etqjwUsUDPzPqoaErBUdHRHEGkYsKxhTEmdYwndibbDJAwaQ95Cw1SGq4NmYaFuG47L9eNM3ffVA224T",
  "key40": "2L9TUYBwu56iMdSG8TZzwQYnsz3mtHRYVVXwQ2reoNsayo2yAwonsvyNEmj5fvfx5CNoQQiKQEKSTzCbmU8imQ4i",
  "key41": "4RUZytNav6kexfEwMQaYFvrSMKXETzfjds2N3GFWfNouWvYpaLiDuQQ3rCTAza1ym42FVstJWi3XgZwJFE85iUHV",
  "key42": "3x6zze33XdHXy1fVb9NFV83m6cnEYYT9ZxvTWSggDsGn7FPWFb9rMacg91kAUqpZ8zmHAyuUXgToQtn4YdU8W6Gg",
  "key43": "3JBvq7bukYSzGdTRFT2PSs7V786FmaHPwo22HhjbS9qV3V57qfLaYJG5tNQHKXjo1CCBzC5oDGxC8NX1NnAkH6T5",
  "key44": "2LGsgNRctNDom8DEJEJL2yRkiRQe4B55tgDTwYKKLWpeDchf52iq4Pfu5SKazT4t3XKJ1qHQAo8iAdAPDLhBfWkc",
  "key45": "3U9u2SsaRqEK7o6qcVEoCjCH6y2QoVhh2AFh1BV6jAcQzrMSHuhCmVcpi2VPB8EVVEb5XsbMNyxvZAxiyyWK5qhh",
  "key46": "3UfF2apm3wzTjUJ8wPTSqyq9NBTxEau1G5wTTYjtKutvBUhvJsNspPTt2JqXepbXvnDiPAfidRpzdGRoCTG2WKfA",
  "key47": "45FSZMEUp4RhdG4XQiUZt9UXzBvyb7PgXSepc3cGDpxvSUtniM9Z1YPs3qSty3dLhpg2AUyVrdBs8XGGVqsFgFm1",
  "key48": "1ckZXGHUZLYCipNZf5kNNn5HnB2HCJ2vAzTNK4on7Y1Be6GtjRiyyrNpo2aQ5kQNY4EuGPQkKA6pByr3pN8ymzw",
  "key49": "3vCqhcuv9a9moYY7w916NgAWtVhir3FnCZ3mVgdiPVrWoNAtxCGPkq7eHKDn9qVf1FPdQD1RbSQfbkaSJi5hcnSV"
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
