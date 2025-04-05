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
    "562iqfLFF6zzwKjaNzTxg9HAeLVgJUB1FD3Xm17qHmVbGHwLxRwThG5dsqs3YbsCjWv11yHZeV8ayfUdvBMScNkj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nzbStqNseeMERz3WuxJfmsqpM6jKZNmZAjhvVTHE9nDmpKjN871vnzawnQFoRrYcwJa8Rof311fuP6jfT4B5M1d",
  "key1": "3qeqRQSAYGBdQ7KparS42QRfeNbQPMXLxqn38zNcW3AdwzinGmq6NZGsgogADrq8SKFxXHjErKD1UWuEdJ2vqPNH",
  "key2": "5nCWkGY5CzMRH8AK3mVJFHX6hzT8pBqt1w6BMh37XjknQBBDp9zAc5qzhj1gohGp2rZ63BNfGssyYdwujezvDBw1",
  "key3": "4zVF12dgkkpkacYQBuvDfMU4m6uuhtiqvAa4dMS2aF9tqiDMgwoLMhgtegRw8Mb4mv7xUHXYCQAPPY85Kf6Gc5Fy",
  "key4": "mXwYUfB8JB82NkHWd7U9WVG5cGFi1CkE7N9M7FAD2uk3Mg9UVh8cSK7E4MQnppexMB96QMjNsJAHhmsuqrmDCWq",
  "key5": "467PxYP9PY2t9pfWspVwbKEbXsLte47D9bsFLwr9keMFH9CmefRmZPwSp4trRPkb1NEMEkdTcGE7SBJqBMmVR2He",
  "key6": "cXZzFYpb565xhAzuXAkdfHy5aCJe9YNHUnz46bsabUB9CHS1NiAaBoNwTcNGALJfRDTB7Qf86ctT3pJ2xvSDCqk",
  "key7": "bvCDaPQWk8zBYrtHojd75QqtnggKZ7S8DyjgrUA7PKBBRVBP7E8MYCcb96BVHjH9KwBFTu3MNpPvgf1ejWjkLTm",
  "key8": "4fzPHrZJPV6UTFp6ZA2Ad4WQCwNop7X78SCQ7jEUcviXRBZRYUMdahd2dxd1ZJkUfKaucaS8HwwvBUmyhzFphUoA",
  "key9": "5f21ahBG5TUJzvVkV1kAFoWfpSVEKFdgDNSvzp6KPsaYcPRNdM6BSYk5fTeVpahDU9feeGVm5mvnSed79cuWMyj5",
  "key10": "caPNSdD8dV1S8Af6uCKUs6NC4iWr5VFFvYMComne8m3UcS99UnFqkB42PpJU5H58Q6BibwiTsPo8SZ5NYqtGoJq",
  "key11": "3Hqjr6vk8UHewtzYVsuf3BtyjELrJUk9Y5Jv2GLaHCBjRKKub6iv7X6HLF3q1w4MuSAno88Q6onG3u2EV5S3QF5A",
  "key12": "45DddHg3ykF5tywQVVQtekurQYo9mYETHFeJiXMtr6XfnRh77pzj7YqsJH4ZxK6ecqfn5gVHebmTWvz5jtS9xr4X",
  "key13": "3v14xpKmMySRYh8h1UVVYj2iDnQx4oWxV82HKsUSCqCzbYws9u7U1Ac5iVCgu2Btc6CMMhQgAC4TUZeVFQ6YpgXb",
  "key14": "2jpHt8xwzum2ZLTheWd3G13pEGHevZzoJNTocS36QTrkAb3KGzpxCftfidsBKRjUNQ4eq8eTc54rAK3Vmzmq4Mie",
  "key15": "22FGcEKvjeMh81A6rXkMehmjNVobi4qCRD3cHDgA7T8YVyRrmnMvtoXGvib1BeYECvk9LH2RjJqcfPT3WYh1dp6r",
  "key16": "5ESnfcTqcecVgYNyG2jGDebkRjWZsTHdbPS1xNZjFeGdHFvexvAKJrCp8EuCPnLwsDW1XgKFudJ2mGXo8M8216Ra",
  "key17": "3SFgzoCxfcTouocAgQ1bsnWjeV46DWBaSZZzwHN5KMq9UGAcCbH8Psj6pExxR7UyX1aEru3L8ynxKCWXDjYSYmpS",
  "key18": "5AFTpmor3VFQRwsefJm2rTbayPeT3FXKdiMmRooGLnGhg3on2opzupFsQFctkNQG98vy2zg1twSpfJW1VNCgCC13",
  "key19": "54ZKUXgSiAwxKxZAbBpiAWDqucXosGZHADLBj1n7k25JW1KWjknu7PtqjLKVs32Nebo7gYqoBxDPzHJLDSpadFd2",
  "key20": "4iAH5U9aruuDs2UvGGHr7JpJjwRVC5cXDSm8VhfcKcoeUqoQwStECYYRRu8tvobACkWDkdmYJycqHHMNJDax7YQT",
  "key21": "3XA37ALvg1CWwwx5s6dWRv4bkZdBpaqCnA77dtEsYWKyEoAYgk8yizkyuFsBA3M47oiQNoTMAgDCLHk4C3TjU6Yk",
  "key22": "3r63sihPsczsTdtonx1V8xVivqf6DGYrfThMubpa5vW6n1ka8u5rjCHjARybzvTSqzTQ2tRJ7DtQKtYi8MnD2yRK",
  "key23": "3RW6PFd8vS5hzNwCH2LjN6oLPV76jujno6PLoTahAX8NLJaSVtuUMfRBf1vNeTfTJU3ZEHLAqTeifVyrZPvQB54r",
  "key24": "S8rE2h7Hc7EwUPARKVpaHDaqi5upkoyZzP6sRCMew3CrtBEBKRNACzUBurhPpQKir1hiyFAteFmCqjE2ajrcwqa",
  "key25": "5nZFTLtmuAiHhqHXouJjWgHkC7gaSmAy89eBTwSMxkeuCc4tHhDxrCXNeduWZL59sn3DwzF7LALiVq4Ctqr8BUQS",
  "key26": "3x2GN6XwtnKMdM1vmhYD1LRnuWY81jKNuDzupMPqTskE1Z6jRvt527b4AKTH4EDWHVtiM2VPeu4SnbuuWERTmrS2",
  "key27": "xiHJpuAhySjPSNs6oAHcLjXM7LKfBmGwSnWwVsmXp5AJdAR2APJDGmoacwtcVAA9iTyMn5QGZHGz6wYzSbA6YwT",
  "key28": "5hVvzvZkQT679JP27aGSdxQ5eyMPZYJL6ErRjA8z1b29zE5VEa2t3nEGiUxVR5cTY2f789zP1dQQuUbJehzWFYbF",
  "key29": "D7uccPehKwcbN5ewhSByXRgsBDHU888n59A3BpVgPtGDrofAMms2KyZYddaPJWVGUj3qCx5DY8byhkk6EQWs8Cx",
  "key30": "yLwXnUui1ms6W6V1tkCg7ZKStAkSEz7ZZ74gzPBD3Vv2xySLvuAqatH8ySdRy6jxnY7x66gBc2xifyThHVzioFZ",
  "key31": "4JwToqjzdjV3UXWRtkJbwSDuz6ytRvs36qVQHseasVk3EZawgcEQBFFVSc1NAMvxdEG11iZzma33k3bT6uPGsL5R",
  "key32": "KwNyRFxx4vK2DwRCJwVD6D711eMDNCkpKwLgjvJFssMF9McyfPzrVrKujfGbLSQFSuiA6GLQEu25ppGXRFTQwdK",
  "key33": "63fg7EpFmNaxdvymqhpwat2NuUZ3KvMrxB4yhmzNEMdU7gg3cDf5FbkjTsVoDf6LwVy9YERrq4v216KE8vREdFLH",
  "key34": "5jMWyrB7BqRpeZsXtcBnNpp9L4pagrtLNyh6byAeqqLLLuunAU2Vg2V66M8uVJEuVrfqL3rH559yTZhGtbPQ1YLS",
  "key35": "37TfNvSUjgb1SiBXwyHVoL7db5x5M6UeaEtM6MPYUdgnJ32s9r1FqWgpseTxhwFTcSfQ3XqBDMD765dC969y6Mf7",
  "key36": "3JLATCH394Nc4bA4KUaCAvQhoyE3wD1VGBwiaTVPFtseE6LJ7PVnaXwpKkPgiGkBVn8JdeyJFXBNybLcH8h487h4",
  "key37": "2Mu3VRTwKuuTkz9oke1o1eCw9Y6pC8HSRxJMA5q7ETBXb6csGdfGp3ZLGRfHDzkYvhpT9x2w1K79viQKqQX3AEQK",
  "key38": "ZBe5hZsnr5yp54yWsu6WpT7hcbBumJFCjNvjMSSdQXXAxG8njM7FTatkuMeyarfDfwHUxvXigibeqeGLDhZRtYo",
  "key39": "3C41t6KMSigERhgmYqdtLK3js5ctvVEwNTHgv3PtKUfYDVX25ZrX2zQFs6JM8omUUZ7HYC7EYUpDwfhKC3ukL8Mw",
  "key40": "4aRbViCKEVGA9Ry5fSK8ESSxBDB17Qj212mryjbuh2RJkYvmWSL6q1cXdzcg8CMdkDZDm2Qbt4BVxvDSefWnYmbg"
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
