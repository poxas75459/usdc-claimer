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
    "3ZcQ9CETx4dsyJcxTUxgX8sTpZxV3cU9aA5tRXnW6Xpfg4nfQ26v2iFuxkw5yjiGm2pAtrU2RX8f3zJb36CU86Dd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ke2zNLYvKrw8a59Pj669VzyTWSpRhsySdg2TNJubk3Brqm79gu4KeZ83Rh4WB9o1dg35BYpgpyztZSYc5Wwvmu9",
  "key1": "3dtb7WSArMqTQNLyLULPh8r6vAd1cTErrvhqnuqLJGgCDF28d2VXZye3pNNXbFKhYD21YtcGTfp9dmYtFHJZBZd9",
  "key2": "EUcom5D9HvFLbYUoWG1PkNvMaKCLMPkv6TCXc2u69aPtgVMUAgQnCXVF1YU8geBk6LNRYGhRjBbNtCJcQNYtzbA",
  "key3": "3jcjvKmg9ryKRrP9phPtWEnAqWka1NyTGYGxwMD1tEwN3iMWQjDGVKRnMExFTUHLoqHN9W9wxfqrm1hkYzn5g8wx",
  "key4": "29EFMiGaNLWT1tzeh9iLM5vX5M4sC9fSfWc6jBFpnVvGDYFmq58FPwdRhx1aPDUpo7DTZTDGoP4cnCuSnWVYRpKZ",
  "key5": "xLPAEDt28U4PygFCMiHKJf4HLiwJNEcYMmRcZzSbTTtEFpJDrSi2Vr6dzXXL3NTvoTiSfaTGiMfPwfxKdtiEBWa",
  "key6": "273D98bzm6bRAVuCnD3xVTSoUXhBBPjYUVo4asZhob1rPrDvFSmM7xffFa2w4RhqSJbrF2Ro6gkVke1hSw3P39uq",
  "key7": "4SPxN7vYoRvQSQcSenPav1XyQ2GGaSV39uppD76P7R87n94nWjCkZb9cm4NJeBKAH4ofVj9JmcvFnAqVbpuo6WCY",
  "key8": "3QB2AQGzh92T9T3nvutSodEnu9ByQcpjvESYz5BFjvxSckrgR6yPEc2rzreRvMo6XAZrXoox1vq9fQZKvk4pMAgg",
  "key9": "3pg8ExphvsehjsBRdkJm1Bv878QTFv6QCfZmxihuBgzGP9prc9iAZx4T5CE7ZF9e7EfucZxZPv6je2yMZDdJvVLo",
  "key10": "5tCbsW5mQEGsSgptzAvdCAmqBid7m5HR2PsbVWyezQjjDHdegTvEnSheVoexQ8Uq3yLeJtgsV1nqiG7DTrDYtScv",
  "key11": "4NKH7FUhuPrSFmKrFQBQ3xnMYUc5jeMrj6kwEg2Rbc2TsDLjGmdhwQL2ZNRQzGrRnN2pQTjsV4sugaiwPE4n54Y3",
  "key12": "2q34pt41UTYv8V7fqNtDZbx5kUe5eHUBqHMbhqvPw4cMadLyFFyeyXgmzTpgHtTnogTfYwbzZMTmLW7sdttufV5E",
  "key13": "6GgcrsYm7ceCArRoThFvvcm3d6Ukh1xHfpgFGk47RKq6UecxhLZ2ChHSz1WRZPbG5JF12ewnSLSj1cydRdyhmxx",
  "key14": "3TaaYbep2q2wnvv4HGtpYs6MghrgNjSaeQFJzrjPMbHbdUMfzAMqM3eE1uT7ar1ybhZwEZfFJ3e6uN4FdUN6996",
  "key15": "4JxWq9ipm22mrXdVo37TnQFBmmYJPuqiCX7yBAasT9JKjJAESaoBbDbmYQa1sPRrtGu8SX8vCM3aNNA11psntnED",
  "key16": "35bj11ffYJH2FhDfvmJa2jX12boGakgqWyGtvgM4bbznnSSBMwjsq3Wg1EyRKeUvbcDrsdum9otGi3RXSTXoUZ2h",
  "key17": "5zPBFQr7HgHsknGHwmNU7bnteggaNPBTfHhjoyXSpPjryuriHgmfeworjNUNGuzy3d1p3Xi3xxJm5nsD7aWYkWGg",
  "key18": "53p59Ko6qWRvGGgLLuFYgWm2qV7u4xu4C2oYbnH9144G49U7NmGZ1ktFyRrBBdZk8bX76Yq9hfB9MapPixqRN6he",
  "key19": "3nfuriZCo8fY6gXVk8hAyPveLig4Y3RFET5hEPKvZh9kBATSBKXU8cfqTdSgWwp2cBHFYTF1tUAu6Ucutty4NKr5",
  "key20": "3XRyRMCajYFwuk1XqrU8DkQ7StxbPKyuY678272maUuJboug26BQXrK86QE1mzFwT1DZdSFfAPWfumqkRMmZWqaN",
  "key21": "Yz14Mncdv5vGtCrk7KVBpNcc8xrPUKYiffQZTase1TpFU67gvo6z3L1aTfo1Acyc8mSEiDM5EHxDF9pzjRqdKZ3",
  "key22": "2vjai1FHKP3s3Fk7QuepKWgWEHTAzLaXNomEL2BhTMaBTVgzXX9YcokvvWDkoRVtDZe6gVAPCVnY7Lo2T3NVvTeQ",
  "key23": "5Q2ioh4KX6Cm65rYG5YQdVQZS1JYibmJc7HvM43htFpwpG9xPBaEq187AUR5nsCRtVUEzhYmiKtcAScs2DbnxzhS",
  "key24": "4Ec125pZ9AnKuexKV6WPVx4s3T3EsAGcYcS3ERzxkiTWyUU3b4JUgYbmRp2KeJaYknjGX2HAkbdz83QFzaKjZEvr",
  "key25": "3CijoFocD5BJV6c57oKgtaUQ3T9a1DJ5vrAk22erhg2CB2QPxkjmztfYeyUgWTxkzLGZ5LH5or2RYByrxtFnRyPX",
  "key26": "4gD77jMRFrE2QcjGNmAeCQyuW37L7TNrVUKVicwym92qJWQjNZJACC3eg47qoZ7MPWKLzBG1chJXpiJq1FGzbEae",
  "key27": "2DcgDfncjimnWNkdfEXki37ajCwdCdeqCHWuKizCLYCXdZGirMGuGwRCU5CtBo6kfaUbnpkPYWpwsEKq62cv4Pee",
  "key28": "3iHqFTPZrzkENku7cPrMpNmNczmU6ircUfQZpX9QvtKvq7C7VB1KMzorw4DSTXLbf1sd4Cuzk4iTEXrnHiQEUxSY",
  "key29": "5HB2MbX4bKFanpujGtEgKJFT9zRKDh23eTRfC69SPaz4V6P2av3ZMvHzDE1x833JmGmiVicLyeWvH4j1GBK7245F",
  "key30": "4KtGVFUfAsA4puaSMDrrhfeKX4f7d621ZYJyZJzXvSDbdcVWWotiNQSiL8doZcN5DhSCw7q9Jt6AQJFjjoT4Wp3w",
  "key31": "22UMAwuhPZyYD6qYHBcH7uz9dHAT32zmKD5uTG6y7NZa8avEM3Te7n8YZKKFvcQiJPeCoxong1kicPMd7u6uM2CL",
  "key32": "4ihFqvixfSovwSQPgc6ZySmivMvVpbHh39GwqWt71DvXg6AsX9q4pXbqtXx5WJzTBpqYdwivu8Rg6wem9FoY5Y31",
  "key33": "4Lm89dy2hfoPEYLnRx5wxyG48kcXTC8jmkQkYqGPPG5cGDN966TrY9hYDCfhXMfozunJp615WMvM3bcNvswEDMTh"
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
