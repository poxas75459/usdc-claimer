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
    "27h8BY3GqYKJ2qnPQDSR9tBJgV2239b8HuTyDsEA2JJEkT3S3PoEyMsFyx58CNBjTCnFh6UFmvm3y2sMzX9EkHeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DkhD782CocT9j5n7Xwyq9taJrEixKHpBVdEkjD3RFkiifZYHBFvAnF6uY4PB119cLNJp4BV1j4eSX5BeuKUKnQZ",
  "key1": "4HsbkS1Tufy4h8J2XZmdMxcF7XVnMPsXbdp64sHAYEMn2fd2UTmfWVngXZkTx3XyvxirJn2JePz7YoXMEs5xuPPa",
  "key2": "2yxhMdctK8cQvkgK5VD8mQg1NkWvqHSREw5mJLqMBG1aoqSXdn3RPH2suYwKyVAPq2FomfocunqJEeQedPAY1ZjV",
  "key3": "zQ4GKEXLVMTdWoVRyTjHcr134YDfResY6mCVnNcqaSZqf6hW6k9n68A6sYmsam14gSksEGRWhoH9J2CBLrbsZoR",
  "key4": "23pHd9p2efmbYudrMwLCoxZHKg1w3HjmfazKA7grLTZdKrvsftE9aaV6C39rD7XPhcQsJdK4shbbZwT9Vc4u1yT8",
  "key5": "2ACwd4JgDMf3rWctspKSMJJs5bCTxN7NUZDZACs4jnkD2FKmQSD3HnxJtFr4e43152amdLK4DWFmK5y81n2yGpV6",
  "key6": "t4L4x42YJw5XACHWqch293cxPaoHxJJgDpz9XEJXXhWADHRLpht5XQEXeWDhyAyGNgUYJF6gANKw9r74LKtLQHS",
  "key7": "5uk3jRcLyaXAA3CLxsVFmDh3BDzNWjeaDBwYK4gBxHE6D7EEEbwNRk4mWUih4umoyj5fja7p2mf5G5iC4B1oNGo6",
  "key8": "3QGKYtZbnZTxsLjEc1838TYyvW2o6RbekLmbjdWBn5UCj8aLXeQRMmvsH6XrtBYkPJnsee15ShEBQR9uJreggApe",
  "key9": "kLwatJNMo4bXbhAxrKYx1t8g1vqJrNzT2dBU4Z5zh3tYTKzjb6R8yT46PKqECLXRYYi48dWGyMpJokfcdVGuPK8",
  "key10": "2ibfUehkZicK5PZggejwUJFgMqGu2rJ82WfjNBWMNCVRfHVRiZ9Zh1SLfxVcfp4SPBGNtyvyEMeTx1Myto99VQSq",
  "key11": "5F5E6sDqV74kccQsWuyqkth6Yxccj3D5EuGgPLXtCPWdFmZPsZK1iX3iH6fu9Th2rmF6CiiaxVmJmteuwhXZiAyn",
  "key12": "3CVBxZP2HQEvJ1zmo3aBPSesdfSiFuWQuAvyDhoiDLpKZXNziiynxqLkUEA75CeDpyeYbvMcBA975r7iiTh1Ejvt",
  "key13": "4XUZWPvMj4SwJb1Um1ZcgsUv8pAuqPn6A7Mqi4M8Y1jmiFG42FAzEUnNmk9bxSSYT7oZcn9HGvSveGqxj1XT4ENR",
  "key14": "2oHpyw7Kzqhk5UB3JYNpBrWiv7XBbwzARheXE8Fz8hsRv9UKaaJFKRzZL9Xr6AbopJGuTJEpJzn39D1GDkVWgzZq",
  "key15": "2PjCZduc5hGiVXapzZyW1A23DULUevDBxaRrDn4Cp4pC7LJoFed3oR17QaHRGbvLG6fEeKZ1SEAsU4gL2rzaszy2",
  "key16": "EggxEA3ofRLtcM9Ax9rni8gdLz2ud4hdawD4qKnjHozD7FEVKQh9c4XqgtQFoR4mB2cXoy7gBgUegMnCjJ12s1c",
  "key17": "2rbL9RS3u5wrxkwXuTpDDkvoFuvZWUrQJQ852rxH8w65ZRswGGFxRGNt7KF1EywtS2LMs5LACTk8bR63GPstm7Yz",
  "key18": "Wj6v8NCvCvwkweF5ShubEVn9wyHBeiA4vXKED8GAoD18ybhorzqZ9PxnipQ4GpPmgGnSR5PH7u4jHHXVVjny91F",
  "key19": "2T4mYEPPVJVCNp8v47rxByZD6vXcUMMJe4gcskqUwFgkLpwoZkP9YeZF9hCqxUFJPeneZvvz2NvqejtLNcGKVR7r",
  "key20": "3Ymog1dqpqiUt9aZrRjdsiTX6tviGbqX9EQbx9HmqwjqFChxG6fCyhF76zdPo59t6n3uugB2GZt6CfCUfXi4Minb",
  "key21": "2D2UisnfyJeJbeUWG4nKxjtcrjx1BUgfykjTdNaRerWcuWV6E14sUo9rRm5Cc31Z66DBTxCGx13KSHNRSgHoin94",
  "key22": "5wBKnn34Cw6UdUcNZC38r3PTChMNTrC3WRsNJBZJVNjD6xcTuUveJqswmd9ijpTAqq3jxpj4kzKY7iADratrP9EK",
  "key23": "fD9tDgkby3f2wVBMHjD8Rg13pvDAJ6FCVhpuWSJPPWXDEjVeg841nFUw9ypSJDoR7Nionux389hLqBngm6Ct7F1",
  "key24": "QwoWRGX4TbVymyZ9mFSX9vrWAduXQfkYim3hg8VCUbb1QvxhBJbAGYZ7fZECxuUcVD1dbazVLkM1LDDqjMeU6r1",
  "key25": "29qT2o9zxWmQBSEBJZyWWqfxuuTF4HfG6zcYaccS5ySfpxKasQdKaS69vGP73kd5soufzRYMZbjZ3yd2Xfew2afN",
  "key26": "LRY95QzwX22sjp1FV8ppjpQRpvCzo1THvP2eve9HWkYpXMxrtL46EBrYoEdv1VNgYjty9Be4JScU8n5W96uLUQh",
  "key27": "3y8N98BFsuVBVWMYrh1XpSKd338nDXd1ZzQ8omT2g3Ghn3dSmyRvdWhHseeQBbF7qBUBvckFrQAHz6WwBEXkPMaA",
  "key28": "5woxR8yVYKQsxkfnBGjqB7MTEhcz8zCR4d6EGuiVn7WTkvu8R3hiCgow497prf2Yh9E4sgT9HeWtdHZckrnqeQrc",
  "key29": "4Ez7fWsii45fJ4hXKhWkX5vWvcaoQtjy8qi9nmKDWJ7A9LwhEgDTu91nLnwDJiQ9tbLcNujKrDS8TZL2mBrJv7KS",
  "key30": "4kjuHDzxnWvm49xPUgfBsKZsZPtMyzAcPXB9WfgikQh17VXUBUJac7oWDVN5uWsQogiVeyUs1bEtih475pzXecWk",
  "key31": "9AqjD8CXaiJx35iApUGogR5Poo4ipH6BHPBzm5223FkM6p2Zo3xSuGVeA54uW2C4hssrS2Yd9vu8hQaLczqZDzG",
  "key32": "27oe2CVsf6tstqpChADe6jpYp9WecVb3h1bHcP7h1nH8r6sGhTqDiAUmaS2LvaZnAfs3u7xXjRBAXHF8ej9k1ZY4",
  "key33": "37aAwW7wf7gKgUXg6d78dMnW4ebprE6jYkXzjfT4uMRUG4CeU2h9VucwCNmA5h9r1WfJcT2sm4mP9XgwDWQbA9iS",
  "key34": "sJdqQUUTj21bUF7PBrFArBRkMkicmMZpLLJKcF3sLTXc6owRPcxK15XztXwHCkT69qcNXsT2zqGHJfZiN3Exj8t",
  "key35": "6Ze1teFpxXo8kscNt4JTc7d5GRr4uk395ha7UtfVjWzJHnZDYZ3zrDitSNdFijwPbdYTcrBCboZEFt1MMEJ981x",
  "key36": "55vKEi1sFvWVzKCZvjv3DEjEQG79cXaWRMgxmMvR3Tmcy7GGzKC85pVZU4AVVXKFEL2R6oJc1mZQez4MW7CqTMS1",
  "key37": "3N3aPB9WKqFDD6TWAisqL3SK7nogzv7hA9y6bNGw3exK5LjqssHq3vYGhzFBycn8phMfhqXpVDz9oAGzHza76XzZ",
  "key38": "3a46nRJTqvie2KEQVQfQM8Rj2NmogCoNYkCaMK1XcZeuQwUnrhwHNwbSUtdakKqVt5JxY3TytkTWgm4DJM6UAsuu",
  "key39": "2xdAp5NrhMFfmjPt8Y2jFwiymg1pKBx8P8swLaHxtK9FWYrdJm8ru2HaQTuya4y3A2mqXt7kHrrz2rnzXZqJ4vtb",
  "key40": "2meCRp3DFKPi14u2oeQ77kDFwUK4bhcesQPwYTCR4EZJJUduoPkTkzPzRpoS91rnrSoT92GXeuzwbs6JTdNTCr37",
  "key41": "3PEtdXiWSGkX2E2kJrFFizLHDbGgpTYxNMDemWamYXFE3aJPTg6se5V63ZCZakinc9RDpnrnxNZju8utfVKTmHzK",
  "key42": "3ZgEs4APMFFk7TjMj4XoiPf843F8mEKBrqLUmrZsymar6iqkB4A9h89N8F996NWoqXsdQ9M8FBm5oCvEjSsC5jxb",
  "key43": "4jzJQSsQ9YyQAF8ipSGaSEj5wmEZGgVo4FFfPgj2jHemUjz5nuQU9drEHCXRXqMVxEkHxPGJKRDJBhK4TtUA2aPc"
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
