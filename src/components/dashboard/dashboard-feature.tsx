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
    "2FwbJARieAvtDUUdCdzqqkHYZoHL7ZH8Qxm5yqMnSct4keuzUfHzEH4wspvpSRfDvfFsCX9K2VHJ3urdug55j8VP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jZv9iRiFtD9vtdhJMD1Nzneos2RUUUB6i3L62Fe48TZyyZZnL3bagYviHWhWf7tKNwmpR4CV5ZpZd9qLjRiWsrU",
  "key1": "4ZtESoLgFoAqppxgD6awDp9CersBXVFBGbv3SCiizjNfJSsDnhNFj1RxK4hTGQSy8kRLYLMyRQB1a7y1qUoRzXR3",
  "key2": "2vftgF686htwB6jyk6gsuEfmTQXTENg6jwVqsSAwXwoQehdyRk5aNySwjsg7r5ceaVq2iaWyfPAcvy7ijyYWE8a2",
  "key3": "fUrqgrft3VX1t26dbKDDXs1M1U2wyerEBm4FuexGA4XbF9SN45FTZBE7ZmxJVoLojtDhiwaCYN2zAbafjwmZ2Gk",
  "key4": "4t281b5ryTEyEsaxwgXxwbNYntCUi1PCD77bEQXThGMEWAWmLmf85JosnpuNpfeDoA7vEK8muuY26gktFNDpLXKW",
  "key5": "1w9L7GhCTjHRA9xyfjvSepXnV28c58Mn1624HE7KZdzn7c2eDo8ARjL853qwaLuKTPzHwVvJ6yTvtsJ2JXTQqjj",
  "key6": "3SKGxE6k9uj6wCLdBwyMiuAKHSHfALbies7cu2GpgqJAKy9bGmmyznBDo5WadryMqWPvT5bGDyTHMboEpN4Pp1gm",
  "key7": "5znjomn5cYAVKUe4MRm9eZoRyy7ndGHgWtUaN5afaMq6upSYJj8JQPKRfFUzqN52SRi9m7fxEj8PWQS2AjC1mxKz",
  "key8": "5sBVv5mDb44bTGf3JoM1W4ZUYVPjqkQ5DGXMGoErV5pWinBJmXPbFtTQFPx9GPgQk3cDqDZkRXYtXJEXN3pFfeWz",
  "key9": "fE9ziMAvLMzg9ECd6TgyrpMR8xVjsPvnBkRRf6jn7tGVmRpjD37i3Nu4SFzB8QSSQnCKEbSr2mXeH5x4FLXRZUq",
  "key10": "5mSWeFd7NQv2pkHN41xYUPfpu5sB7kxB5L9gHGGtDYvDQWmjg9wtKUS3ezEL9DADBTSbgwknyMBk97NT5WjZqHhV",
  "key11": "2RSv7odzggXhaCvTv7NnSgj5icNqxUHPSSMzetFBSBLUmboary77M2XnBHUaiWenYaTchy1VKsHMtjToRSQMAQut",
  "key12": "25h9kVZjbq4VBAyK3SmHu5GB8uZQt9Ae6Der2qKLfkDjpsV7Hj3HUzpTfnoUoNMV5khqm6vz8XcgAwmaHJuS5D6E",
  "key13": "2wXgGmCsV2bfRxUfiw52LWvk5Vot4beFeWeetX73FBmog5Ce42UUS1p269msgiAjTTHyzKwEHWibfcdVqt3ftRVt",
  "key14": "4NdYWgGCaGg6qSWwaMMumMi4mwVyQcSVw6SnBNzD4vNvCMj3iP8dNgeQDdE5TzknuJHnYFWWyLcrQkZBMnhaUVgi",
  "key15": "Bce2W6wos1zaKdfhsuwQ2SZuAUhELD1qmACoLSW4LabQpbeCTCUZKCJhzKFSnqAE685ZmwFhjaHRqZjXDa9FjuJ",
  "key16": "o3bfGdeqfdrcNqfwD6MjgAMVq29sXc9aPK8iMRokcehYmLSTNdDJhMUVryBftj6TZBhkoHGKdayYzbsae4RNned",
  "key17": "3pduM38Lv87is7a8LEVLxubBMqa8gKB9i35VSQjrAJCoNTs1EAF7wZrfNhMWGpUemYJoVmZCHEPXU8HQ7jphc5qV",
  "key18": "5xzCM2NZuLQRXT9hdN9FaWzisksYVTL3UmjxSKWr1KjpDYdFZRgpF9ubGsrz8ahTkRzvVkud4uSqvdBJYcZRaka4",
  "key19": "2QZiN6GvqFpxyJnVYqzcXu59QidUMPwBeoQeJSx5uNKYBdhmXAJiSfm2WhjY48Q6wbpvhd6N5HPRP7M11qtsZC6h",
  "key20": "4xk5duQbiTjqKK54fvqf1A5su3j9YCh4Fz3CDMBfBb6mFFLUfvK1iJAy2QHkW7HB169kXbbBn4v18r6GiBQDMshg",
  "key21": "4Q1X3iwcJ2grNcVZqhZzgxDF6xW4kwz6uS3JeZKsYo87dbBgPLFqYesVaxwSwj2gJufcU1KHRT1ukV9PghwqLkTG",
  "key22": "5etC8a9VQbDiz2aJGakuqnkrRAst5Pr9F39uzwRF6xKxtqWUQWWToBk3aJNspEMEMSm95ERr3zA6g1Fb2WqjhLxg",
  "key23": "J3FTxTCTCud66QLETyrWM9uuEhz7RFXfyYjocY53xfvZGRwkXWQ4hHQVWMCqkyMALpmb4m9CyPR8Ufp2L1pAesd",
  "key24": "2bqZUxpYq8AgGv8MZwpCk1y7NphRMtKU7o4hRWeSod2q2PugXUVMooQvG4LZcPEodkXvxD5SQJKki5kaYxR6vNrM",
  "key25": "2AEhpBqTrHgWnSddTfXHfTpL3SohfzmBoyB5dUFCZT94Xc1rkxCgWWuBP9k4penWrvLrXT7CWCD7Y7zCYxJ7jjKW",
  "key26": "2DBsd4g7TAmKqPUg1LkLBpvGHYAAw3gpJRxmdqCsdEP8ttqRwcXJCRLWVQPJ877f9vYqetvpvv4B4MpvKNPDvrbi",
  "key27": "2vFhJi2M9ciskJz2vr5j3YxZy3fNX5U3aD4n1h42fXGUpenE9DDxVBhYU41pb7zAauRJGfVcqRNNRgwAEBbVSSaa",
  "key28": "4hX2xhZZYbd6v7JengqX8UJzQmB2ubJQ6D7op682msnCzDmEULoqQqL9H8bbgUK49Vx13kbp87GpuztNAicEXqgt",
  "key29": "43QdvDACqTQ7WkLbUDCQGtcSeXtTSLMQpdMR2Sn3qjhqWMG2higRMv3K4tFKcFUquNbgmugiPf9cK27CvnNsLgwY",
  "key30": "3yDUYGdr6V5rCSFgeNkeygWGVpBq1SGzZBPzSLYjhAwgt15au2XVNgNp37ke5q4DjMaVqPDseLrhhrg1vg68nHfD",
  "key31": "2dTvVCPZnaG2LTz9RkrCuTMMikudmPi9zygS2b13Qzj99gYsWSoUZydbRNW2uacormDJd1z9gQp42WAojFnWNpgK",
  "key32": "7RNhjFimADtKg16mMaCLrVFua7uS18bRF5xEo5KpBFTthGPg7S6u7ExhxmqM5KUzLggzZBPUHfb49wnEZwAmUY9",
  "key33": "nV42FCNFJ3Ur3HNWfMkxzP8Hdrs4XT62di2tECDZAPcDWBws7KR8sSjNB6t2hgdPUNhjeqUKUeCku2sqKTHvTLs",
  "key34": "2phiNEemKpuANpmfhvQvAiXhh4Hs6AbEt9dAmNBhdvtS2VeWXfLVEd6MnzPQF3m5aKBytyGpdh4FL44EjY9XDygy",
  "key35": "493q2q22mNS1gXLw9VPin8FWbwoAGQ9bVeT6mXqezTkNJ7yvqgDrqduuRQbSaEbF4mxeB2H5HUUbmx1nDzHeTP97",
  "key36": "2FpWQ8H5MFT5MdkLxvSvHzCN3hSS3bbJiBdMdf8JyPQJm7YZWsjk84DMG1JiASKhDV6fAd7M5LFSJ7DLY2XmGV2V",
  "key37": "5KERnu9FQgst3NtHKDjeVRav6stAyPuvmkUeqR5AMBTfLPb8fqRp5CjEMY6BcfYzMF7MXqkXyC7zuzsWgUNqcQho",
  "key38": "4GTGK7AdAwj1S6h2fyxXe87UPTifYhBd7eJhSVgT42u1gzi2r6yFGmsYDCdMGUyrEHi5d71H9uQQAaapUhQ1juiq"
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
