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
    "5GgH6uQoGWkDouib6x5CcWD9mEE6uWaJjUgz8cz3kq9BmyA5i8ZbETm6HgoSQS71zZYfeptWQ8TxGVxLavY7FSrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vDDA5rgwqWGcFghJ49UDkj5uzdXojfLNC4hTHJg8TdWdgiVMThHnpW7QZfJxCXUkzH1MGgfHG9foyz6snipZPxL",
  "key1": "2EfRTmPpJe4u7G68iuTj1hD4EACqu2aDXXTX4wMw54YjL69vGMx5iiKDH3g4rML2k8CjMPbHjLL7CM7Bnp3NvgXQ",
  "key2": "3pGvmzYXZK37rEckZKNTLe3uWAWpZKYqahpQUmm9Abhbs9Lz6JHUY5Tgtq9DvaHbfkLg5zQGZysCRwqxdxnPfawH",
  "key3": "43yPre2gV7ZJ3oHuhpucYLd2zUvjqFwS7DzKscQRvJYHL84tGkDinrcvJVcdZxfDQDbAwcG5frKZAaxAQHev18wd",
  "key4": "fUPQ5mCn6VWKDYBmMAz2jjFCTg1WXCDuUrgru5TaDA7UkYgge4vcdF1xZfvZi5S3Hd2nNezMoFHA3qW5LovACAH",
  "key5": "5BMFM9BxLKTBWVXhdKeFZB3DMkMrfYFhthf66dLHcQ4bEXzmNQfmxsHWJqxDvw9rarXwa1c63hKtoLtEc35ERjx8",
  "key6": "37rzEkVLKXqXcU2nyQJTvC3GUK9PhpX3mnJKSz1kj2Suaid3CWa1v9T1rvJtGVAB7CnB5nyzdxASDkc6BrNrjPvq",
  "key7": "4xsPuKz8tmSkN7TndSiC4fbCCCk8kxW7UY2qviK6KchVmTjHvUeispSE9RXyPAQmswehGpAyYjkyaJgNPL3vSudu",
  "key8": "2w86RJHbTjgmwPxy2sZDo2kPy31cMYBrfkbZLM69FsyiptehmrD7wSbDP2G1f79CJgfKkvoxwYowed89vX99SGT",
  "key9": "31XjdgY1pSWUgbpyGcaAhGqV4BAiSJNQVfYUNRe2EDyaMTedyoGTWMebLda6BPPhuiypC5vEzG7HasxxHgEBjSzq",
  "key10": "oALQWe8r7VkuwY2PDvDLMo4wTLbhWAu9HqMQHTbGjJTtioN6WdWY3SU94zWkdjvKNnsiMhBnvcgPnKJwrXTg2AA",
  "key11": "5MVAdDxtpB9Pq9vKvAFDytAC5MNusrq8efBDacgCrzkT6kQjdhHQK5Xw6VxMgLsSA349xEbqryf8Gn6oMCWy5g8i",
  "key12": "5QxneaLoLrem69F99qqRDfGs88j5JvmD57apd7DBxd4yXXcgSJriLPfJegWNbYJwh49gcP6vxuroMt35nJsx8dDx",
  "key13": "2stiar6RbJGUrvd8pnHD26DdJHDDe9aXLtrU274fSPfcTfHBN82HfM6qc71zRq5DD53ZEqVnMoLVzedtvZ1LydHy",
  "key14": "5Nih28UXXnpPLPrmD61D4NDPoRpZR9FiJYpP5nNvjEc24Xcj9meoKYhz4sNwPHnXuNY9enJb3Fjay9rdbtCDdw6X",
  "key15": "5PfF7o1tKSWU1aEov4CNpVQjb8KhVUyUUx2bMg2SqsDJoQa2zmmT1ZJJVhvs4mKqZkELFve324Q9HefP1kpvYvGx",
  "key16": "5e7L6zMEUDiYkYAY5ZM1ixkMFt9gDarHvmGnSdwL6N7882LW1eMpQaACGjgSBHxqLsje9j1NWPw69NKJeP3jaLzS",
  "key17": "gsMnXQeSbBVvNUQbB2dCSQ6ZzLKwfSozitBiFRnYBnYzGaBFtzoVT7B6cgUymzsL9Jm3EGTPYxYFEfo3UFoGFAD",
  "key18": "33pSyA67kZgcL5waqviNLqzFHHvgRASQW4rYTR5ZLks9WrLssgS6UhLgaxhJtyjwyJQBqEGQZg9iUkpBKQMeH3ek",
  "key19": "3gW5AnUvezTanmtr8KifhwnkVz6bsivFb129UVkiPoBPLf5Etnymod4kVAuSDAqrW3HMguwiTkJTRmtMFZNzoFW9",
  "key20": "4XyYr97KvevbzPXx4W9AUTRms4U6Ku2g6sgYG7SFtWPRhDaSyH85kHQ4mhwxHLJ5jWPQ5Y2rSp7WgcRkYtYSJqCQ",
  "key21": "3Zon4p5UyEktzZSiTxtW8ttfdn11LxHdDbqW4yZv1HzfFd5BUPKgw2ZrQS1oaiJfMMhMf62ScyKaL3EcG5XqMn8f",
  "key22": "3MpanLBvvJTvzFUFb35CnUafUDXTFP2i51CKR4CqarqVRfZDEfJ9ErWq2cBSwDdNnkrS7LEynkYT8HnyWiddGC3L",
  "key23": "3FziiLq6Jr4WkBD6mYp2g634mwYTL6JsYaD7v6Ah22rYKaZmM1UThYUJEABap74o9yFvi511akFvYPZvJhuVm2Nj",
  "key24": "46XVWbjxGX9cD47e3Ymq3q6Ac27zTooKwgPCerreYWFMtVyx5Ctc5xX3kcWVwVdRig8v4xryVjNwUHPad8eBhvP7",
  "key25": "4rQnfNcWExf23FnfC7gGX5BS7tZQGK6xUs6yLYb8GCZi4UVgXYiS6ovMY9V75A3Zm3DSvdoU5i8DUNPmypiPBYTg",
  "key26": "2tFWE3A7gc7pb4cSo5Wq8fmSYx3rPTvCRGfkYvfP5uiDmtkXKmLUH3fHLFvpws8eYGs8uked328ud42ttAZiBjH8",
  "key27": "4TEeG8fDZGJgbfXn5UARTM8m3LowRBCcX4rrZHS3TKv6tszekkBYLhvAE261eeJNGxkhvLsHyTCDaKVismRVy4Uu",
  "key28": "4xhDcf1ZD3Z6T9HYVA1xV565htbQbhVvNA4Sot1NdRxugzMNNLQcu1eJr2FhQovs3TRgkTj8wNBnMeKQB94uA58G",
  "key29": "5G9ti2josgMnTNzvt9JCNVq6nMW2C2eC2DnuYG8QTvLgxErysGbwmModeJdBiMEcgmVCjomhSCUm2U5UMPMvE1qK",
  "key30": "5SSDujQUfpfJh7qBShnpQwMMfyvEYFrfQPh5nCs3pRbG1ii4Xa7dHK493jpizEXUPzBuQRtPaD5aoakBZJ4Tvuqd",
  "key31": "S83KqFYsMddmtpPRrXfKkQ1a3zWncPUss3V45nskBtUSioZ2Pt1K1TR4CjkaszGkBSeGhGkG7yMxMy2JaB5SBEY",
  "key32": "53m2UFRhVQVDD4GBfsz51fSm5d3K55y85nZdTn9x55DKncN8tXKYbkEFzZcmh3QUzS2CYXL5c6Y4MapY6horJRg6",
  "key33": "4rf8XJbWFPU9ERH59a7NxZSCbmH9GtXHqzyyaHWkC2jwwXmyxSxcieB3wRzoBzThr3BX7FKSKcBPqFGsfcoXn6eS",
  "key34": "47Z8vwmFkfbMiYVMcJtLRgynx681RPMxe1hrH4gvsFqX85UG7XM3Cs1gBu3HG7ZungeXccaYqDYWrFXkY5581bh7",
  "key35": "2Up2vNsqkTF35cey8vUu3m86BnUwH5hhwfstpHe93AwqZVd5WofdjrfZkvRa6ufo6tYBYytiP1Bv9pqcxhT7hzP8",
  "key36": "7NhhtuEfQSQKMTDgrHokjBWcoW9pMgnoDLfknHjX8td4RgyKFwK2eV7V29RSYmuUer69sXskuVKKk6bgWSJRyNU",
  "key37": "2oi7Z4pL1ccPvV6LhiCCLAzfbZiHxPR4FUgXQTY6KWEqxXEEaM48APLvnDGCH2WopAvMWWcA8g3uMUonGf8ZVFeH",
  "key38": "4voWXZvKD7XqeGSw7JG8kFCx7XmzZXsaF7pmcxibEHZxbtYDdQvvPVKRvSKBJh4x7EKpKTQWremhY5DrYKSWRs3m",
  "key39": "5DocpAVK2Hf7P1tvaCoAfek3SHWAYmF5i1Vdhqj83t6o2ZV5ya26GpARXFM6Dj6xj8Hcfq15KZBQa9BRKczNACKS",
  "key40": "519whKDF1WmHyrLmiHMgj5TpEUsNbEzjBgLzAPAjf6bLQ48mxFtJS3XAcdk4Q2fMRuMwAt6bsEYrWAAStmKJZSyV"
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
