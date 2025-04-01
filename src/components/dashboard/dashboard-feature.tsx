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
    "BnAamz7ALz3sMrLhFLHXnsLQvicPtsksbSeyeNie9FcGzrhxeYeCregwbv3VwDanWhbHEjNuCFtp2RS4ShrqFPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43UxJb5RXhf7Aife9ii19aWay9JeVdyDnAHhFBZkLfQfH3PSqnJ7D4CXJ16FPvkHJ8rr6gZhhRQEJJZQXMBK1wjR",
  "key1": "jg9LeNJw1JP38sAiDgF4usrW7Vj4EsHZzA9jvAdE8hdh34KCUTgxmJot2ffhDCbYp4Gbx3o6sew82s1XWzdsnL5",
  "key2": "486e7BnFf1wp2tWY5znzmhRNVY8k2nN73Tt9vedkk6B3Hw714HJXLu7iA3T9qs3y5VwWZvp9JnQF4ooCkMLgLs3p",
  "key3": "2beY76V3JbNrHv9NvKLSGvdJ3gLC8uzmSV5rZ8DwxP5EkwYmFWXiue8kWhwr6jtvGX5VFzgycuPGJX9jXRxbCSov",
  "key4": "UvzrATpyfdXGFx3bE9YUeTYDoQG2gySmyL2TabKm8g8EaS7AR6xYHt2ChJu5yotN3JBAsF2KHgRAJJGAQWrtUSK",
  "key5": "5ioUq1P8XkxKTFLGwQCgPqjRQ2dbuZbLpJXRPXZB6RWohXzC4epSzcHdLjLAB6yvqpQS1ax8c1Qsq9ry7eg7i8Q2",
  "key6": "3iJ6kRx7MXd9MDX5yz91EsViuKdhGy7WGR5hRQpuysgP5YS1nQvXtusd24zJfJYEYzVs4KdkHCi7qi7UFwD5d1F2",
  "key7": "hTfHkmUtjTZa493tBTkZuXb3criVbgixPVfidgrEbAwUQKBsnRFieFUPrahzQDikmC2PEdrSKG5afPMrdF8Sjkj",
  "key8": "3t4cN5dX4r2qKdVx6dboy3W3yJiRqYRKrqnKztGXbc4gy7mzrjABEVhodWPnpPrZD7cADbQ73jKFCfjhPityPAU4",
  "key9": "4QDTumRqqDzuej7esarC2nq3XdHHLjYk15dGuSvSkCj8RZEMwri9GNB2Dus6nRD49gphFTaczFkKpvajSK9obDqW",
  "key10": "4TZnb9JJ91mnEC37DMF1yitE3QUxVnC9ytg1xqXGRremh4kTP5T4cavVKPrtXv4e4NnD7LGNrUEKgE8CVL5W4cu4",
  "key11": "46LjkmaNDqPUD9WZQHRGMWHEQXpG3TPiWefnzFVrmduP918VRYVfH8eDwWqPki5rsptpsCHKzbDddmPupw8sNL9s",
  "key12": "2G7kbjNukUMsSjcAujf2sKwKcc7Ze12fk7XDJwKn3KejS3bFvn3vGZPA4XAvE7BAeUbCUkqZ2FQ5rQTox4rajZvr",
  "key13": "3Gib2Jacrnu1fPE2xBqzBKyDZJSE9cLa4TELC8e2ZaqPhyLcxgojDx2eGDZJPVSePmzyYjcxeqcbGf9RL5vaPJg7",
  "key14": "3mUaSpRsirTmjbigfqBiEsdYUQWhwQHRLVGyykPuLybzLYbT63cEUc6xPR8WvpenBbbE2g74pjZegCWt1ri2ZFtE",
  "key15": "3tH1nE5ovTJpK42ogKSpi62fpoZ9q5GS8aH6GJwrLnZfswbFNwrRRaHh6JmTKLVdSpNqvF7srgBCXoqcEtPyM8BX",
  "key16": "3NarF1Br92e9NqbJHEJxnHN8cBKoPsm63o32pMx4bN5L7buSShawzbqCPCpa6bm6BNCvgZXfUvYBDBevyJqBYgtx",
  "key17": "66prxK4mbPWPTRzgE7LHhcbdaQQcqWmYVUfXZALqc8pkJ2o3X1eY2GXMsmPHvy5iq8PCBAeGvu3fBVEAZzRKq81r",
  "key18": "5PDHDz9cFeNho2vL5FqJw4pbdW4VBeExANgNkey3Qjgjq6yTUyKBg7oBwoEtpSfPWTVWYFYjDoLZQREcNuexbYtG",
  "key19": "2U6mYCYccEjeui5RXiGznK2nz8LAumc9GHLja1kDGfWG6ZcTenbhmRDnU34PfeAn7BPtTxvBFrxi55wQpeE6krSc",
  "key20": "254EVH3ddgUut1PqhLz1tnZunWa4iQT8yJT1SH4gFZYbh9HtvbCjo5MVBhcAytrsJEKbGz5BUucYTb94zsDqH3nC",
  "key21": "5J4ffF4NKFcc2vqNcUgA5uZWUrDmqwzNUqxLkeeNTC3wdCQzFuPFeDJDKmTWAwYdBS47EpWZuM5ejPZyZyteoDyg",
  "key22": "3iDLk31JJNxgDBnSVTT1kyB5NJefL3hubgGmJNqGPrCc3cALmbKWXkmjy3RRn2CWVqZuqgdVGDQ7HofNQGt8hE6S",
  "key23": "2KB7KcwD5MjKVBbrEAtkv2gx35w2cWdYK6vLDSPMWnzw8LPhFtpErS2wK8MdZET9y6Ww8LEh5q2thgVeeLibBT7Z",
  "key24": "2K5bB7T95rYiw5Xv17zs5sV12866bUjtcnp7gdjKcwSUGWeULX6UbBUM5aqpa772xgJNGaJiDYkWTcuTSDja35YU",
  "key25": "m9JgNmKdjVTqUcAHiTWHkt6YnH3ukYPN6cTfUAiLmxddNEGx7V4fQAAmQwPHzar8NU94CF8dMW1Xm9oZJ17cFSL",
  "key26": "38hYHGfbh9mgUkn4ihqCLt4TgHnnVDq6C817VFX6a7w6jxhtLrfrey9YugFwEGAByaMebGWDudzwMpTJ5uh9sayH",
  "key27": "5GbZP2dZRVkaqusJDUfu7zE7oJaCP4eTq3E38sm7VEzM76G4iz3pJG7xoGBUvPoGVLSpUM8No49tAnTMgj4SsTFu",
  "key28": "4DUvHm8QXJXuofL2Hf7a7D5mPKvnrPpNPza6rq4xBTSr77pMgVikej2kGSUv3TEAczcEiSXZN8BrzEFAiA7fWZr3",
  "key29": "3hKfNnboUt71TzKGGb1YfCLwxQQvxYbJTUVifvw5VuqCwn2P88m1a8bFUvMcsPYTjZYkiteEPQbLg2uNyR8bQHxi",
  "key30": "5qzd8dNsFjUXRD9L8JkisdQU4hZdSFBUaPB1A8BeUbmbMma3a8mCvtaKdFdySyWegLZREKfFHApozUphoYg7DEjm",
  "key31": "72pnbpdvyXxHAcy7Fjze4TQz35Yheg8wv8Xftvd5EshFKmVeFAc6wLbaQo9yb7L6L5FRa7bhA9qBYcnk3AYaDUM",
  "key32": "5BkCv7BWnpcbbdesEnQKVbHbxXGH5XFMrB2ZB7SBJQELvWb5XEVqBUYFYKDg9ocLgBRsqzNLhpiJurjmU2SXScnR",
  "key33": "4nEzyahT3ZzFSCDhmKdJNCrYewNEBYZTs2djrPtTSEyAL1gJicgEvepsqmNQYgCTN2uAsJNVjMLqd4XP2pkTcwHn",
  "key34": "5PjtaHks3ppzuyYVHSWeDEJ1di7oYNhvYoWU3bZSqGdr6bX2c2cEWMYxbQnWV6pSQ8XAjUfFWkm7aYqLYmuTMZnP",
  "key35": "4yzmdvPgtV1Q3MtTchxRqGE1ZLsHMbkMyaVX6z3fqbYphM7rZtFYRfAg5UNRGb7VdvLdGYwp8dKqRHQpfADJyocP",
  "key36": "5Hb9jt311gHjKgqEtiy6QpWRsY6uzM24GkRY4UaDkGrg3PfZ8r85xuG89odkLmeRHk4DWr4RnUc1nYi6GgdF4XQF",
  "key37": "3AbooPint9igotA556gUnqTYM6HN3ffde7Doe67SgPwmVkycAvBmEa7mq49MM2mSYdrjT3yckComkKxuiEiubigx",
  "key38": "WevXZCQJNbrVKWRq3f16YCUWQxVP12b4F5wUEGanB4UkWUH3HtY1Xn7bvL97YcC4cTUEnowu6PkYG5vE2x4wvYU"
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
