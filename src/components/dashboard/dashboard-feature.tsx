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
    "4fSTb8Hr6aH2pcjFQtdJL81nMpCTWd2Z2itqzfM3Hehcv3rhHY2GXK7DCFcVWc2YuqymgsM4e6dZ7A28Rw8cXrFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BBs7sna9U62Ce8tMBpoPftKgvnkbKs3o1otgGsoBQFEtuDSjS3WFU2xKvuqriG8GavhudufBW43ZKY94Zv97H2p",
  "key1": "5EEm84cFvuMcD3mMMUst1h5pVNC3Yg487HR54XZWRutNfS38VaDyz6Jv5VeRWrSuFvze4U4kH1Hu38wrkGBRURDG",
  "key2": "5PMy994g3SyidV1L1oYKpwPfjEtp3LmAKp7RdRck4Yztfopmwi9Q93Z1t2sHiRYoPzvHFQ7THAgL6tionuQcgRiP",
  "key3": "Nya5vUdjvBgtY8Xc1eysZytYRoxeKhJdSRaVgkhirxE69SFn989QKBMRQAdcAWtxz7DvUWFH5oHDts9YC35jFRF",
  "key4": "61DdBJ6Z7EnvrKdRfTP4574WkcuUpaxXEExb2n1VmArFHZ3xNMEBHw52jxcbuZk7zvzKZcc57LFD33pDibGzp7vL",
  "key5": "P4VvfoUKZVjRWzdUbtqQ5idgUxhjRA7gu7HCHYz9Ek7sKfZUdXBgGZ5XJ2HxiXz4cXb9GHJNNCm8W8pkqH4RSeK",
  "key6": "2ASqg4iQ4XKNBu3uRyTzQHLpq9ZyRowDzwdPSLw9e776nAw7ZmQQK6NBASbxRDgmr2xPLLLmqz1xqEN5DL6Sv4TL",
  "key7": "2sUttKHpAuVBmiVTtSzqXgTzWJphjiZsdgG8JxifvWrAph8TDzupoP7PJxY8ff2hCTKV2TnZQSBVc9Y5FfLCXP7U",
  "key8": "3CxzeQczJN4V2rybG1wwTvybTKiRgK3AZAs6agTfAyn4wpiNLbGJj35ihMXqgjgyjwdsjvGgPeWWHYs8iUK9WkrE",
  "key9": "5MaLCF8gtq7ZQr8ZYnRZXmfPioAXknSp9gmCrRe24EexY3pMsAxd14LZTgh2AhRSSuZZbhXjsVXkUaYQsrsSqGJQ",
  "key10": "5i6NHKAfuDKVQgSR4ArvhYpnBUpg9Go5ArFVx34bPTCAL2P6TNDNdH1NqHTM4dZK88BK5VsuL54WWc1GqeoGukEt",
  "key11": "AYQ8LWxZSr5BSPUHLaE3iz8PKfp6z9De6JKF2a3fS1fne8QgcwEMe259sorx5xuXfPQ7psQ8g4KCqRQnUdpC2ae",
  "key12": "4WAyYtchBx9cNG4bPDdj9ZqCGttnkZQG9whnjzMjxuvc7doU7mifdZhZn3NKc5UjrotJS2pvzyXPzJgiW2YmiXh5",
  "key13": "4NWdr37TAt83PzC52w8nArmGoFfdQNawM3y565s7wT9nfeeiUMm629ehzrvQCC9ZkFMtT9nfsJZNhNHWUN3HK6wX",
  "key14": "2853c5vCuN3YCi8M91i7UeRNMNghxCyJagehDuwLvfscBUGhY1Rk6r6PPdQDGqB4EaaQQKXGtvvhVWuQKxbowjej",
  "key15": "3MhoTeMsvaXJwurp2nTikyCWu1xwLbhLEMvEZUzL8RAwUsMpJHwpad85FhVN6cm8WvxfRgzgUFreFP7upjbbGY5E",
  "key16": "2XZgaBpGENUUDM5NHsJArzmwB5wiaQRTcHF5kVsqzWHsMoKUmXouSwS6zZKJtUGYQjhVVXpqkJ6WdiexjgVp7SBx",
  "key17": "3rEEvDw5fu6v49NVNGz8eJVNhjiZdAuGTPjTRep1KU4CfLCN7KCsdAQc2c58sQcyzxxd9TS6sYBHjjXvZbBgQXWS",
  "key18": "EW4QBnYT9XnUyetmkxARcZJ6ccLc25Qt7wo7J2sPMmdczaYrr1ob8imozTNTsKEzT5Ycv2oUbgHfQPmKsqyDuJY",
  "key19": "5nWvKW27tMobotoitiaN8W6UQfGJQ5mevZRi9UFFaVGwVKbyaNdjT1MLX3prb17cmhwpdLygxsi1aCd5zqdQSSmi",
  "key20": "2u4MpMy6sa7R4orfMjs4zLNpDqSWygyNXCFnNu7TT177cZKJbfe9uDJupa6HmDuGHLbJZFwwgWYvzJQkP4NjJh3M",
  "key21": "3a2EUwhUUsiXgaDFSddSgUizYGPuH1jVwmhubFwN7K198JC8hz3UsvaMzCWMjaFsVqdu29TAM2rDZN2hTCYNHv7e",
  "key22": "PRA8sV59NyXVXCkae97tNpZJzCMRWgo3yYXZcUWRHNxgjLNtUibK7P4Gs7aKvxk3LESXgnsPrSiFEMGRsFKF3sP",
  "key23": "3YJVEL6z7pjiJ9oXDo7yKKoYzPfMUcqo7Tk1TcWdfdCaQeJDNHZZyL6oUyki3hwJxWpvkjN6JzU2s1FsALoeFFvD",
  "key24": "4z9A73MZr1PrfCZtG6QMrJpmVZ1uZTjhHGb9VG29ZzSv7ct8UaS1B4CDXU6z7RLiNaE4Spuvj5hk28j1esNM1LD7",
  "key25": "Kf9N9ch6AxW9tdoTvpn6JcMtZEaAo2LzY1GuZDSxC68q5B1BsXEMi4oweZR6kebyeboG5RZDVPNvhaM57a7GLJ5",
  "key26": "gTkdRr82Pf7WSU38ZoityaCcJZxZv4mJTXHViAFZBf4nJLNbDGnJSGxVXQWZwxYVwDaVafPX8ncxsPPV1qjzq5C",
  "key27": "539EgE79omVqT8XeDvvz9WrsgMDUYaz62gUSicXQGNJcZBPhvrromRawgD29YMNJ9Qi38g87eD5Ay3QxL9kgUp5t",
  "key28": "JpL6mHSkG53KDeCdQa46chWauAv9rg8S4yh5B9SBFHU2pZ36GUJCatELjfNt7Hb2SBqfSxDLEABHmKeLvg3MBmf",
  "key29": "6K2xMDUqdRX7CtVcRKRneuXL717rptSsaaW63oMBkv9ZZCvwtWHZHFWU3jvZ9oL3XgqSejCcdMV7S4D2KQaCPzn",
  "key30": "2skLpM7FDwFv8ZUcpu8rZeCmYBVwzJ29Tt2z5VjE1ippjGcUFhfb2JVTCGxjkFegjPsSPQWP2eSFecSbk8cqc7x5",
  "key31": "4eYbTZLUv348vytgLmpHHf8PHyZsFUsHX95DFQv83p9XWvufibcFG28xEajewCsCWnF857DvZbfXMVavecLNRBbv",
  "key32": "XXS1XypiR2nK23NUGYr9VYYgw4CDbPLhRreipxTzUoCJ9cqC92n1YaDS6Yw1sMUJ9gsSqCGutESwn7T4cmAUkiL",
  "key33": "5cYZwFzeajvQUGUjDevU9vXZBhCeLnJpzHAvBc7w5UtqzSD8QSFFRFbmuW14WpY3oRbVR3EEatZn26bPgKkebszX",
  "key34": "LBk8tx6TwxK1cqEpG1vBhyV5SsrupCkUV4m9Buncp2V63WbSP7qNTPCPwpkTJzFspKjMw9u57mTzEBbjDKcSRVb",
  "key35": "5TucwbUK3BHHUAMbFjTKXSJkt3EcdWZqMBQG7jd1oDAyssaf3nFp1w9u3WnDmcQH6CgwmwDGuMESVYJVMbDdRi6n",
  "key36": "3Y3hh7e8cp6qHR4o6BcYHsa94MwMc3fc1zY2eNQLbj9YpmjQr9XG2ta79RLBujE9trQZZH3tAdNK6ooX4kKyGkNk",
  "key37": "2xh2M1MsSWbdAdQwVnP2UW3ikVLFNeeMakRT6B2iqvfFvRTfq8fEz64FbRgG1QChfd58YsKUcLtaKjwBbxYbXjWq",
  "key38": "3E9vdgcdHPqFqBFzBG1e96paGBvhGnyukGfXzRWEbda6nWEBBhcpVjzhmUyjp3hSCRBj1Tqq2JcESEJ9mA9Zz3Qe",
  "key39": "39wxkVJSMjha3bz3ymsqiLMA2kig2tYWFS6aEf8zPVQXt9oD113cGvMDNLyitazSBYZtkYb4rn1eLBXjyMQziBkG",
  "key40": "25hvY1RnxttfMxHX26VvpRrzoz9WGTqyUiDy33bUyfobVAaRkoAZYWqfmAfBvALoWwptFwrUdL1TKeJgjbQA71Lz",
  "key41": "334wP3hnNZpGEdjt6BmJuhabqcJHQx7uXcaDw2Ay6f3jQedGwXiXuqnLTRrdbYWtVbQTvNRESboeMFCnUBiqLg17",
  "key42": "33SbRsmcKnbpBn6wW8CR2YRkeWectdzXWDnq2N8Wv1Xc8o91ygVbV3aPSyvUyVp3ijjrpdmcCaghjc5uS2EWXcje",
  "key43": "PKjs6TGwHTUR37u3uKpvQdZEwmqYNPkbS86epx8thEicn8vgn4HBspXZnynT2YUwRXrSHWUPRarreMbVdg2Bpoz",
  "key44": "66ZwM5KkKw4PQrDnwWWQ1b92q4uCV4S7fnZA19vRU4UnLYTzqd5G3vX7Q8eLpzKveoZb62b6Z8Go57zzJkDpSp2H",
  "key45": "4Xd89c7JMZUMSnoRgpH74fF2YRykaJoUUjh4b7nDJkwbAvhUfL4aHqmVBTb2U2vcbsEkzVM99zNqTmLD9JpTPN8m",
  "key46": "2AxFafYH7Kz2Uc4ShAxVtyfGgpvEf29pcNkBTUD6RnWm56wHEMLHuTFsdW3EAvdJyTBdijBBZZJBSh4UNnTgQB99",
  "key47": "51wqhV2MRccs1RxhFkyMXvhbXVkmaPuGprroqe2gdfHpsigBLviWE6RYFnqPGiGsVhpJJ8QnrSz2sh6GZus1XzAz",
  "key48": "5qSVHmgxpryxaNhE7zZxohsv3wDqY2KUC9G1TVneGHhyV2uJyEgnRV7d7NqoYn3XmB3nYHNQ8kRLfAmkUGBqo6Jp",
  "key49": "5uq6DFmR2hC2m5JRKtZ6p1SKxkAJmsMuyhfHgiV3RqhRv2cBdswcBHSidun3hhcC2jbGe1gB37Do53s3bKxcV27s"
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
