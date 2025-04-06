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
    "3hfggBzuuxVStVpyYWQSeiYJEXyBe5FWoEZV5pxLjKxsCoVgiw6MUiNwf8ER6sMSW5JAkm9ueQNZ1rVBbRcFkchr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JbbjSoTLQX9bARNFWpHyNcuP7A4EKmMWTLqMzAMw7GFVZQEntQF2w3ukEZhSRHQQ3AJRhetfD4UzH177KsXPwWs",
  "key1": "pmD8BPp8RCX6wbeNf1977qxvYvPVLF11yoRuVj1kxEmaqqAewHZQDh3j2meuZAdgDgJYppkGT4RkDhyCmPfMAAW",
  "key2": "3jr5BnF3EwYapr2Aw9aqKm4esD3EyReqBm24wRu6BtjALa7m6N1LNKJd1Wkkp2RnViZvahi1tYbQ9GfgF8BGF1Ug",
  "key3": "4uddtbNVaSXX2R3s9jsZhwHYsi6pZL7oqB82NHBsdHQ8Sri7dQoPH4yzPnCRXuHkNeifsdkcmiSNFvqqTJ7Q5J1w",
  "key4": "4YzNy3jiTeHGcxFUjjsaQV8CRmLPNfuB8Yw5ztdP4yqMXWWzpByxZ9iLwuYSbfQyJsjGMxxkCUjvWxSMmVbRDCBo",
  "key5": "5H8gRmaVRUCw5VNMC6rJoRJ6DSVYUNwRdmLYU9J9xpMquLC2mWWgisGhsnCFAupUuHg4hGL4nZLmzTtqhRvM1rCD",
  "key6": "3cf7uDxu6bY1jHVqZEmp2cKUGijBqRy5DgoCj1216ZTk5SFarNJYEpXE9gLwMgVpiWCq7zB7vBCx3Lo3v3Kq4csF",
  "key7": "2P7wq8zWCxzZNXZkzaGX2UjiWQiXEDGCV8WUf77k2NDEcZq3AYXgTEmk2SCpqT9YLE9AdxDSxz5CWBGTERCHyQ89",
  "key8": "28BnRGRSpojccrc1R2cFvoo3Zz7ZRmfNemErTm3DHfzPgfMayxkvGmxFboUqTCmvzLB5AbLfYehx6T4PdHNLju7C",
  "key9": "3keY4pHG7fAubWTtpihPm2E2bt9y2rrJfmtaSnNjrTpKSg5CGtjRuu4MiyScQqBbSKTZJJGmAiKsg9PPbYYeDReG",
  "key10": "2yHuB4ARgJGa5iYm8MACiaqii5YdWBP4wKNPvp6EWfxBNEUk3Lcysd8Tw3bXfuLqxCQBKnw5xwiFnEdsu4kLf8Lz",
  "key11": "237ZxgcCwxeFWzSTuHHGRNezjf4yKE34oeqqdE6vV5RHkyaL2q9CZgBKnvqmPdtG1ssAg7wgbMaypg3hT1nPYfHE",
  "key12": "5grPyjkN9VZCCy3rDhgeFGMXchwbKP9SWojqMybugjiEDguQAhR6ppJzXw2N3FTvVY6VdTGpVYbyZ5h4PQzt4tAt",
  "key13": "4bQT4EuBwemSb7dFTFGdyMsVsPNyo3h31wAmV8mRV7dB8LYqqrGJUR4Q1TRb1frTgF2eNnyA7ewsK4gacebHeqoJ",
  "key14": "4xrBMFySBZPB9jiEC44CU7s8PF19gMqqkf4sBGK1mzKDjZ7vNcwcYHbT8Yzu5s5RCC9NhE1tBEYiMRKv71ud1sUN",
  "key15": "eQ9VZnnh2PsEitF8uhnZnNczh1hK1vRP7rJGTn572SaByPq8f4RQY1F69m9xjqpijKxRShotNpZbiYW2JCTimJV",
  "key16": "2rGQidpUQ1JLavYMqS8ygG1XNtt7ivJSQG3W3jtdMFMKdHrqTcZceHRcZ3eH9joVzVmXifZ7MTfjuhZyJKYPPWt2",
  "key17": "3YGb17x4RCmgGxrjQuyK4kwWm5na2CdCUPsvwym6bk9cgktM6wjk2K3icYHh56YuBCRZGnUemFpQBKtaV893Uvnp",
  "key18": "ZA8EfULXV68efTZsHD8yrMrBzcjyGBD4edeju4DwADfLxR2RupLDP4xHszv3SHfXaeQsp7VjSqLLPV1LNGaYLoL",
  "key19": "9PvyCXoTEdGBpu3ib9DfWsU7vduYKD9mTPUz7EFTFuG14aEpKKRX1McYzfa61JCkwnxtbVBia4pDqUFer12Ehcp",
  "key20": "3a7G1zrUw2Ddkj1X2rnjAooFkuCM6aApfZJfRrFbBbFwvdcnvjjwbwKExASrnkJAPFCKPhLTLqt2Qu5s4FDiXWLw",
  "key21": "2qGY1ZjKx8co6qr6jzqNV6GX8czFt2YVe4KwwKyPfCEnvGfuGArxb2kjLdHnxKcUPJNyjkgLumwxvZ3kf8f24ixa",
  "key22": "2bQErqtw4jCNtX7R5jx3VME4T7ggy6jxjUi2NHKvxVho3wn1BdjtLy7t3CgbyV1aLnxx13qw3jU8Lg4tcWbqWq1i",
  "key23": "4g2UWbXdLQA5DFjNLvP2vtBQabFCkwPhTdRnneu45bXuMkwkLK5z5yrrHLwQLEWmKJ3vMFy1Mq2ZZrnfeCFd1zth",
  "key24": "62woKCTzmTTVv5KCeBQ3SnhSdbSw17ApkTHr8PALkYHzmurUSBcRoo6u4VZrSwpxbog3evPGQpNgFmexvkxz6oPW",
  "key25": "4TUkYxUwmtfTjXbn2LHRFeRADM2pjLNouCgThxBrDBG6BZZGqMK9HpqrhJNkCDGdUJqNqH32QFB7SY9xa7uFDUdT",
  "key26": "33hd3nmdULC8ozzS9DGZcUEqNykrAUAcyPmSFuRpatEq6QLpHos59UKxuUqh7NE6beaKiAV9en3Tqo72P1crSSuq",
  "key27": "3xDsBUtFVXn8AHfH1pZ2fW3E9KxziUVFU66rqhbqgj8vZjuGnr2oMoGTE4sCH59KZbf8uXDmAq1rXXyV9QRgfPYv"
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
