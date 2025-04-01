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
    "4FuGZTBFhvKET8tqCKTn48rUk8z63Wa6q2qe6AMxzbaPXk4twPGoMoH7mMWkAEdMUeqg67dMFL9yfLBwsDgUopHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uEfPw64toriPykn1nMKX5w5EskdNiGGG7LdaUCkNhLY6JTKsYTeWGBsjYhJU5e6TukA34StZLpFzs5LqG34P18b",
  "key1": "4L6tuDWoHWA4WgtikXVfpRyf5EYVL23GPNiw7JbLbeZcRAH65Ptt2RKNR2NpdXk2KHns7JS31ZTnrBo1HWDJMFEw",
  "key2": "533nzSJegBM9XDzj8MBDYpEFjRshnYpZMTWfRbVCKcVDbFfWoRLMG8rugj62cq2j6LDx4NB2u7kcpcuWv2ep6Ue7",
  "key3": "32sLU396KTUxJEtizGUoL55gmP4rQKgQ6Nr3mCQQVBJ3Nw1CioMfrU4yF8Ub1yh1mQ8cmP5uqLr4xmrDQiWVMSMt",
  "key4": "3KEerVCZFxSJmNPyaweZKWVturgvzb3SJu2vCm8FfZs83pL9eXtxExK1ELBK1KP2AB1EoNtyYmzhVrnmX2EEiSuM",
  "key5": "9Tq9NvK2gqEgvn6b4qSC4E7Kj3mbouuaiL4o5gnsF16LipXxFZpQm1vu3xyq61wpNd7Ycv3zDfV9hFPJSZJpBzD",
  "key6": "4PbiWEXz5SfhdmpxLPR5Yfxz5nQgoEzgmGruWMuSo4AiFuvBmfi7TsTogGer93wotvJGgxz4zYtQfTXmnjPHDRXn",
  "key7": "2ksKM6ktxke7bW8ZTrE44xRXKFnVhY63bNMVJxfUSTHZSnHuSFhLi6a6RfHpPVdDRmacAqy1qmppgnHHNLJAxhRm",
  "key8": "58RN3kjv6PLmvmiEB5jPcpGfmNKqqBWkqBWESaBoFojnci8h681bmgwzdqBQ8yoS2KuZjpYEV5oxX1CvDaEKrQF6",
  "key9": "be3dontg7CEAgrW2ztoe2fUumqma4nR7cFrbRemaSGS6RE1LeYFoM9JXE4D2MP2dmkpHjkiJJ1n5FiEmeP55ZPk",
  "key10": "3yN2yUYBdtwbpeCcP6DBwom94noCD9HKFMwYvZAZHw5sEqGGq3xAg3Q8vppQwZ4CTKGksfYnbYA6wFfGbS8oxqBK",
  "key11": "5kGPttbtwPZMxSxzfsL3i8U1Bzyz2Vgy8DLhiB64njPcjszZe7D9JDEnY4rHPhwRpwUqH2Yv4zsJL7GtrnpnAZ5q",
  "key12": "2EcJGQ3cAywbBrErZbb7UQHzHjFFyehuubKP3ABSWeMEcw1owwnpdLiEuryefXnX3kodt3s4aX2VxG8fKV9ZbDie",
  "key13": "2qbqSUiyK49aCgJbdzzKuYvin6wcKYEynb2Q8U7jNrwEovzfbJeQ7C6EaDjF24Mkt2DXmhdq5bU2knCyGbfv3GoH",
  "key14": "4VbGQHb67dq6p1AJtmHAxYkZL5evEGoYfP5Svfj5kSwtABU33ctSfN4ESEafDjtgpNYXmfFffTM8zkRuPaEhXhZB",
  "key15": "yXVQcAJ19jYHu4Nc6z1Ye6wNiD5ZSBwPm2jLkGNgBs7SepXFmNrCXgpiX1YLEjd32WsXE8FtwR7w24sMcLkfhJh",
  "key16": "4pBboLEbQVN9wVoFj8d9kcGB7DEjUjXvBibcUWnQjEfeaxmAg8D34XZU37YZwEs11WrKDc8HtmeDPepy3yBc3huK",
  "key17": "5nVXUNCg8gBWD24etWw4vWEwCMs37sHuLAz8QBAJEniEyYEQukxum8zoXoGeqeGzen3vfdLgzP4GpXzboWMZM7vK",
  "key18": "ffXqR5bVooAPXfDijjm9GGzQgkxoYhfnkEEsW62mbe8WaHPL6UyqYst5fcWraeW8JXjUDD2VxMhFUUnfcaPhhHa",
  "key19": "fVCWWQ8RSvGzJoZGuYMXbAAXRGohxhc3jfqx8ofJ8Rbd9nDPqFmmCYe8uWT1mYtPwmyVnZvPJMpf2hmQaobk4J5",
  "key20": "52Bi5jETK1WXakBCatZAYnxxLMzgpK6kNnxG8GsjVoj5CTFmhytfnwJo9KaCYwFrhzk1ojc7RWB8etVDFeBhxdUb",
  "key21": "f3MMqLD3eog4B9mvc3GJwQT7J5oi84JUWVW6GfyiBxa625PaU4qWV4b3KtwR3YNSv45PXX1DFFfQFTTy7eRtZAw",
  "key22": "3qNV4Zza2FksbzK5w6ddxK84dZFt2WkSbMP59TV9qQHRtuttjNvgDXhCNzc5NFzNmjYzLR295dtWKf5rTAabg4Gr",
  "key23": "4RdZbmMJHRpey5Ygow4ch53PMcEtYofvovaczjztKFnDSzzDNdjS1KBTjvvz4KMHyvGhm7Rr2FE59pqKje4WLyi6",
  "key24": "2tPsG1Awnkn4haTjEzmgD5yuxCrGPCPrf1UMWpwBAAxDUdgTnugjvWRnj61UEZpZFtGppBmFazxLBrbx77jCojSi",
  "key25": "4jaVqJSqj4rfsmFPq3Ev5UUKq6bTFUJJYLy9vHoyiW2XcBN6uYbYhYzUyKr5FLXvzmSyJs2NYW4W7YsA7c2Dtar5",
  "key26": "2bU3QKMbkdc2RBN3Cy4GfvUcCye43LGaYU4JpRcxAkQE2N7FurJfWXr1p9D1Z5DfWsDSqwVYerzsUtTHTUTNLDQ",
  "key27": "33cPTztuGdqMTS7jbJhq7yefyhwpfaBbzc594SWm7w2LfttV9Kgh4Y6mED3bnSnWrJeNxceKYNFuGFpPPHjgBXPP",
  "key28": "2kYRLpDNKXjD73tJXXMNMEMJJ2YWN5VC1KbHeCj2p7zioY23NaoZuUKPojCcAGNSH295MgHW7ipAJcFsTqLVeHe9",
  "key29": "5uEeQSHqH73Ne7hEJncjZ9ZCDnW2EpcLUvDx1bUwxDPTJFpR6ZV3yEm5Jgyf5G54RDWZSFW4Kz6F8s3xQ6r1uRHz",
  "key30": "fDuewuvXrcVNKgFbvQhTLPRptRd1w7g72iYzEXT6FavVNg7pehbicvjJPTnftGxmPTCBDQ7JvS3wmqoQGjGZswZ"
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
