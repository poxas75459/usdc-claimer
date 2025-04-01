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
    "2bPbjzXgbiijBaK8ZYwdqCDGQSjZdBD4TaY7irfSziVjS5Lccpmt6px9yG8ymwUC7MYUqTSzLUJHfbPzRyoDcRf4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5seKuWcfbxS1b9tHn5JpYYQnGcr2JxFB4Jh79cyNqPQ3f1dLsUpeEr4BA8jD9QrzdC6hxTB9tG91giTSXVpf8fHV",
  "key1": "4AJGRRLFd54jkHPXz8ykDsN5QCL5r7xHrvUYa7UUe2WKuDXF1b6kLzAbJjLreK3x9ouN79YXeYa2kywQyHvmvTvb",
  "key2": "5Ypc2BxxiS7U2P99MNqmmFad23CCV617LQ4fVkQGPCLfUGDTeQXMHtLKCuLNkWqt7U7SLDRBmP4kRaLej3zAdJXn",
  "key3": "2SG4VnMv4Bv15Lk2Eer9wBdACM9tNa8sTNgXa6MWKfurNkbx8MWKcGkRhWqdvbEfPiYhuxnhVGukoJwT3PFvgCm3",
  "key4": "23v5DnemGxcuQefU9XD3urmV5poiNsrm9sQ6X7ytTtSfqYESQDQRf6sH6TpcuUGH3JShyLGDEGgDjJupisYCNGkU",
  "key5": "2vhPgjw1Xg1qtkY78QUb9wckYt1j45V4i9kZwAdmg974BvKa1jwdb2jyCGi9jPRTksNnrHuRkBtnCV7KUd32VSW4",
  "key6": "3iTzbCVKs2NkehtGUxekNq9QJaR2kg7wziUXo5jyYuhitV2KyC8ic9JoCgR6xQSiptYjAfke9mZaovCvjXqaic4V",
  "key7": "3nBaiUJswhibGfBpVhkRYxiZ9ELtLeKrfKmxPU5FVe4ETpTvJxrAnkkbRpdPKFyGxuaPCmx42tjr3DHrBLkpxfSh",
  "key8": "SKVpEAPrS6R21jYhWK5iaRZvM7Fz6VCsJTPbAFiK3vBt89CCWTaJAnXPq3EWmFRcEw9m1XmXbEHQw8SnELECr1G",
  "key9": "QAv4xJ1UbtKPtkgQd5nSjUfppSVWxYgTfd8UwTDe2uAaVgKFLFRQgWU4gER9NZtpSFsy7uHZ72vr5jgck1Kym7B",
  "key10": "YPiLkJbE6gTpLrYxHvN4uzJBVARAaBaA1DYsuq54pk7JvCZHcLwmxJfx43DpRJ1bKCGjU9Zg6d5X3xesvvPnZrk",
  "key11": "2EtZXTR7bTWLkWVJGZdJ7AfvALn97Evx7GRfF31onSBjBBEhJcx1RZvMLLzYHYX9HwKFcWHpKaBX3BsjVrnbyaYw",
  "key12": "4H2hp6iWSXZXfkyFLEkaU4ZXMJCqNByZgsPnvHQNm6K1eC6yRR3KpqTWLJztesPCRwqMxhr88FZSranY7WgURX6Q",
  "key13": "2CGhmekXvowm4DcWVoU2ak13HNFWo4fRCHEEMJoHzYBZNSms6YQPukzanZiQ2peAXN2qtuQJKFj3VbvUKzFLty3o",
  "key14": "7LhbsZqMNoDWTS6ZbeBf5VSBUPdzV5WHwkBDoxBG6SccKJ8UZiiassG84nFyc1XwvyLZ9T12fjBw8enutVZxw28",
  "key15": "2kgJ5D7cx4uSZD3WYCRBryDD8kNoPux9rJnb6dSQ4KDhD8rpykEYRs6h74jvVgXjNDSfpfDVyxmVPhZoXf5M1f3c",
  "key16": "5nmgc6XsprQNjLZ9oLefgqbzNoAnJiwSadmUZ7fBSubkK7x6QVGtfBWCHa9LGm9VNe9xT26xmmrFAePazuen3ddU",
  "key17": "5Q4hLZv64nyoVw1N91ZCo4o37sqpxyA9FZsLApKKSQq9P7QJobeHi5WKopq1A73oGVnsx1N4PCpUFkTBGXiYsJwj",
  "key18": "5nyvr5S8EiAq3b3g7oShgBTEz6svsqVRyKAqL3KWvEhLMRfpqJz6fNuhernM31HvHhd9ws3CCKzUs8QhaPRGWWJZ",
  "key19": "1wc3HYYnneh17p6dsojQVAdMytevUWBV4naXZDcKMdB2LwqnEdWjqXYtg41Ztcqzyr9mVSf8LfiiHK5oUyhnLnF",
  "key20": "5YvEChFwvzLQsx4LBAffCaJZJdhQQLmy8UYhQW6VRXYzqmeLjUt8saJbmEXGotJRcaEC2q6rXjenFBKRJKJ4KbfA",
  "key21": "24WkjH5h2TgrtGihLDxRFpwuFGJPpFmpCrdVGw9rXFFJgfDLkJ86LeR67pHLq4ZAYzEnhF4bBwLQweLYXEMPwdyv",
  "key22": "oxMTVkmxjaUsvtktY6tTp7jRBQXpYNUnV7T1V9pNoafJ6DQYrzJHdqpCvrS5YWVRVZcFzkAzvfAHaZpyxPT8zsn",
  "key23": "3VUtva8uopnM2fP8c5B7uDkBnmrFxX2D77xqzQbJBV92YfiKRLku1wh72Ji288gvEWLj5p2akKsaJsMvkx3eeCim",
  "key24": "2VTGf5REAfnkrzVyEQ5wME9sLhxT6kDbSTdV5Kn2enqyukTaY45TEM7mov368VjBVaBCB7TDbsVFEThGp5afbeWm",
  "key25": "4YhBzgoudYPZCWqasR8h7Kpz9vvsdpeEFB1KQKaqfn9XvtAyZSnyRHTnP3rjeEQpbYPLHHBfUryc8mpZdqcSjmCU",
  "key26": "5x3zXKjEhrPyFMz1qyyWCQqwYB1qgCMRRDDPbH1acgvLsKRcJbD9Wk5qRfykgW2D7HmZseiwctZoXHDhMdzgBp26",
  "key27": "86YKFsFhMJtj3hHMceuwX2kBS5KrkY94mnqWxs1CiaTJbE7aCSoeUqUrRg9PfRzF6LpQDxpJz4tY4LkfSQpWGrj",
  "key28": "QRLoiXc2DeAfGca7FgZYyRDQjbvn78LuzRfXeDinsqJ7VWitLb9vSNNA3BgmMcWA2SaW53JJ3V7rWfQchRMQJ3H",
  "key29": "4VQS7Lje8DHzqkJA6mbhBRkwpChJT8TeEZFqrw4tG9KmyV6sQVASx6mbvwtce1e61rrSmGXnWz53XMqbXFf7rQHR",
  "key30": "M2UbnTY6PENvAvqbKV4mLRcrzep9qcpxJ8U3KHwZweF6T3ZyV2xb6YDKKCib12M1RoHetkQaMFV97iRd78YrCcU",
  "key31": "4ebnvv47raj98Vn6JPLb7819ZPsFywYpAoZwBYLSLyDH15ZLz4kAi9877Ru8HL24eZut7eMYk2gUiM9TMNhGN5zz",
  "key32": "2ynn8pbQaZHq68BBWXrjjMKrAEiioiuUjiCSoqzXDYf3VRmLw2nLMLBNg9YC6rYeiHMtvAKmWmKn6ZDwY7EHv2CL",
  "key33": "5b9NWG3M7d2W9xUUaurdZpghY6xEf6rX2fGpEGDEtQpYpUxqcqEjHjoYice77cRmogf2daefhYUkRan6Fgae6dtE",
  "key34": "46Buy6xk8P3YoX3zhpaPxYMMq7DvycwzV1KLPoaX9wxw1guUHkSCt7Ch7Wq6qRigMNRjCpHoSSs4TXWeyNxmNt1E",
  "key35": "5emmHM1Fp6mz8QP4zNtphZ4M5GHWqvCsCTXvHYcaQgMptWRXyFxubUG82UGFx3CbWifJzqVjKqFbVJF8wpWWzHU1"
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
