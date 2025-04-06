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
    "5v51Jkscrhqu2SQfYsu8RYm8GPttp8UZr9wAT6besvqm8e4QfzpgCT3hdFaCGz71AZo4Pwn28JVXQ6BQ5y8PWemQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EqHSHGMwZGRe4dNaktHESGkAd9x5Zdqn4c9PeHZhJxuqQqny7pqjkHdVqV6kLRrTvyTmtWAMk5bjszJv4xEUENa",
  "key1": "58LoSo3x5ZH7RhWoTe1TiRCQQKtLEj3r51Wp6nDeqHizs6z4szWJ7McaCcwJqyUVyb5jQYR6GRMciQtcdvKodE7s",
  "key2": "4qWA49t5yxa4ckQDgHyASLxTWRMFT8La2gkV7cwuTyidqWtUG1yWfyXwFz4pAhJVKiXyWhECd19hPqPhKwkCrp8g",
  "key3": "5fZ3rzKi7G6FwMyNgHKosPoZ6J1tduznwyFgDhoKsZW4kF97bT8BQgJCHiidqd4U4KS8RE4ejPc5SW6antn7cZNd",
  "key4": "29kGePsc7L3CVWw83RL7ya3ehZPvDYxU1MAsgVVRAGpMikBrYY8BceGFZGCQCDsGxzvQoaSTETGb6m5Jae35DT42",
  "key5": "jkqBP8E2oYCM5pPcKKWAAHAeHCHT2WmxntowXYpyBSktrNZiUFdnB6RiVamfngF9hmA4amYRfzeogfdVh9zHpmB",
  "key6": "bPEBzd1rmwLwNCnxNLSp5hueFJBTgnAdsxUaKECU3bCaAXQG4rD7aKaRk8wscW3DHSASvh4LmHzoJzeChoY7ftS",
  "key7": "2NJ36TTnH8pML1Kt7tot7F7XE2qF72JMxP4K1FDYoy5VowfDGDKUgsq2rRkpXkzKqMC4nLmPeJLXpBWBJnXm4wPG",
  "key8": "3nKjv6byeeQ8pZ3jCqRfDLsmuiGx1iwWX6msYGcwP2mcAkVfBv2vKDQjNp2pvhLYTPb4twMPXZGs57kX9Cas8zXj",
  "key9": "PCpfsLzrpyq3reGnYb7uFo6qSqMQKkyanKLzbE4WqpEmsLfQ7HsoWVd7TmWS5aAeaiNkJn8bWmyzzwcR7m9xk7w",
  "key10": "wcq3iyLkGB4DY2s3qAvwfHkHz5prTWnLbd2U3cHvDr1RWQLE35czYg5iE8dXrqiwaM8Sm8sZzUaf5Cck7UMSaa4",
  "key11": "3FCpZP4Pbut1GFu4JQYbbgo29MdEau8xZ8Vkz1njrKbCwdE9FuBecF2v9kBV6CCyY2yuUTaTrED7G55Yn4U49Pzo",
  "key12": "5pqvpwrRM2SkNShRjqRmx1p1W8UdVovf28i45oREFQJH5wefCHoycPqyU9z54WYZMiiKJY6FTpjhLiRrnx9ACpMU",
  "key13": "4GBaDR3V3dY6EkfyWBKQ7fArmD18jd1U7ub8QUCGoAwRwJYwrjLyibntbGmkQwyEB45WzA8FGdzNwwUoF7dbJ86s",
  "key14": "FAkird7iRVNtqQ11iYGrw9aGwAUqmSf72pZYCant7oQczGYV8oe5ZqrYpgsv6uTkSBmh1WPNRrsetRijq8JppDf",
  "key15": "4n4DJQepy2n1a7QA71crREuamywKBiqiswjp7XkgcWZXy2VFWusih8pxm1rWTFn9CsY713146RVEygAZuixnBFPi",
  "key16": "wygfTfhZxWS4XmtqjBSGEDx7oM8vLPfYN7YNXHVeNbM31HGLL977F8i5rVBoadZpDjGiPtqm17rxq6mBVpjBn2Z",
  "key17": "2VDTcViHtgLY2vLVf9AFFPPH4GyWY2nFQRi73WdRyRgiu1PGQfhwHRBvNUgoQM8tjwc8F9CNpXHc1ztC5eBojwCc",
  "key18": "2m9fR2oHwV862g7FXkK1VGnGA5PBJRFW1nanvCgqKMJ8PLRbcqdnFwbwBrt9aCuiyTDcwv8C9nXBEezpmTYB3HL",
  "key19": "66BfZsRogrEg4WkpkpbhGioxiiGCN45S3su7a361jubfQE5gpFpBzkWpEEiaRLMGqKh5oiZZBtL76HHvR294jGb9",
  "key20": "NKwA6SUgRc8ZhAzuCQ1TFR9QDvm1vaQEtvXEwmoSoQaLe4WVgJdCXfE2VCPxdBtGPyw4tNjdTrqgXGBesX8vfVg",
  "key21": "4sTn6y7ouD8Ma7awuWcyUVSwcBc5diTDwtmZxGBWh1TfMcYXPdKPVx28bqYeYfAHau6qgMMvxkpdEadSZa9spTnS",
  "key22": "3Za3c4f9kL4hN4uDMGa88nvwktaKjcGKgPFCFZ5cqsEvGg6LtD4F61FC3AH7FLy3ZvvAdYV5YzuekUUr5GqKMFJD",
  "key23": "LoHUTRBNTj3j52Nj66wT7s7gqYjFfiRj7goxdn4nvFUsPaussNp8KSYrVhUopyxoGntPyUi19k5JnqcJK9777ML",
  "key24": "5PB1ZPMd62QMF4YtW5VsXReSKBu2Ww4sYeMkwpLWrVeKNxhhY6oJ4xSZXHmzEjAqWo3k8HatmdpaiyqWtMRcHm5d",
  "key25": "4rWTShsMCUnTi3SPztZy51tgjpqAUFu8csSFj4dvX5qKm5aNmypNFw7idgW1s5FPHHTd1A4qB94LvQ6iYbfVfSdL",
  "key26": "5JYyM7BmdzKJAHq2bYeo6q2c5qVLnFWPhgd2CKTcrhPVDAZVHxq77cM9DyxZzFpb84b7Aw9HhcgoaqKquwW7VjHt",
  "key27": "5zWUt3qKa5JTxkCy39auD2dBvvL27KxCxJNwxmfGoAFH2s3YxRfDGgNKussiFiBXb5JRUJu2YZ5E84hCSMJRmeiY",
  "key28": "4BR2YHxsd22zZBSXWJ3rX6iyxxtHw6nyxmCcAvbgMkVfjbkpskVKXnMPCu3qtn7wtMVzkYPyMp5gihpGtB2nyXvU",
  "key29": "3tvFC8Vfn87p9iGhzfF1A7NyKYjjxqc1jbd9B5MR3MmLcNwf4BMA3f71EocboBDhBVoCXpkJLVrRUSbnx7Si4oXB",
  "key30": "KVRQPwGKEpdwtLagbNpfyLBR2dtuY5xvCvfyWsmq5YMKZCrzngB1tx1ncwrFDH2AMdkKg6uuRtN4s4qbgzBJDfy",
  "key31": "5VPw1RKDmyCbRivnQKYiJKQZy79pUbmhAD94P2dYEZerP9yvNdRCub3QyWRvJbmji6dTrXLkC6rnj5vvs1wo982C",
  "key32": "5AwzuWrduDFmob3aJc4gxkBUAJuPWuxetWeVkxY72g1u5EKQqhi15hMpGZUPkxxquwvHiGe3ALkW4fMQddNBwCvE",
  "key33": "3QiZXQBo1WK3LhqZ42qr2e6o2eeww3EfhwiKX1y2cocw8txiy6fCB3rDHsSMSiXYXS6ecN7zKs8AmJzDbQ7bv3Up",
  "key34": "2UGPXyjBe2qLfn5imnHprNWyHbqe12QuZMJo9YoRAPFYgq8xBs8aNo7ZDGDERm65JwaTA682naKHd4PTPsviggYg",
  "key35": "16TiwkMqX3Kmazrajex3wCnu9gtnMTyRgv5H6LYLkpRQPMrYDXW6hxXisZhTAQv2yJLnmDWLXwLqKrqkzUsW63M",
  "key36": "4un9UHm3fMa9dqQ38EFhRsFNrJsDnovVV4N9nWqY6RYJALW7vh5sZNureGYsG9ZaGtJJwAz8WbcnA2s7PvEXi7UF",
  "key37": "35xbV6E7DcyyS4nxGEDSdsvPJw13RyDvyCtAPanU5Kasyo7wREvQ7rwdTksDRdMQYa3BPEML5dR2eN9ai9j93BnX",
  "key38": "3aYtAbsbv4A2rQmh9dhfDP24ouYunxfhveMRqMeyxZgCHR5kP1GdzEfA5k7tfya1dWVKRNJW7zrvyzhWqW2sKqeS",
  "key39": "51BkjfzAf34HQLkeiujUp7ujrEXtRX1NBwqwZduXxSQeAYiotrNAEPKD2hCUwXBkHKxkxza7qt5Boh4X9WeqgcLw",
  "key40": "5mWdjhScc7VezTqb4PgahKon7xfNNwTLj5gKExeaan1zDN1BAf8MaPXwBUzVn1EZrCq8WJV6r2wq84RXxiP4yEEj"
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
