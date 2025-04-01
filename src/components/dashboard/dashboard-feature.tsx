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
    "5G6nShCDjYyrLiSsXwTC86y6arQ3E4f9CyKZtcvU4A99tb1hRk8LxzYPxu9uViNj72gkPe4f3KQiGqZwS6Lfd771"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xPq8YJ7u6AhV13njko4HwjmsfRSLWSoM3cGd29bcz1thk8oPWGom6BMW6KVaxLcm88QF8RPWTBtU9p2xj8MUSeE",
  "key1": "21K92dEmjfPydbgEtjw8qkft43cMmh22YXwsThbfBAMLRy8uMQAVSFWbzSBTFyS1WuG48YQa1G5YMyhAVdP8arFp",
  "key2": "2Vpd6hfSnC9Fd2JZSBibFGwhJx2SdyJTbus4qUQ9jVYDwU5MVMfAZpTXfFBmVtyFfKJjZQNcSAWFM59ocdJfcd7X",
  "key3": "5CCyu86n9FF9D6mFVcXJetQUUQHFivpkYMruWh2uTuJoHa8RaVVkQCVFnBQvy6xcryeejnbYDtgDUN48NxRpemRA",
  "key4": "4CQ45oxrpEnaFoqWQ8D9fSNEzhgZjBqvSE4Lntv9rxSLtiwPNLgXHNdG5mLSjFKJdS4Npiek26SyMq4AYDVXb3D1",
  "key5": "3oonc8GHHZtJXWj4NoCJZFkuMJZzNiBX9LZd14vEnzhBKukzfB7aEkejrgSRRwaNSuymxZiuy2uKFUFgZxCiwGDo",
  "key6": "4KKXSEi39aog7JyG4uEuWW4MYXj1NriG57Duq1XVKHdzVLFcbhyrwUsfGuym3r86Req4ENEvCkFuKJQgf4qWvP2Q",
  "key7": "2swKPFjJ4MYqFqafQ8xvhGYjqJL1Pedc4rG2QpKfPxY69PPgo49APAk4V4rruG3v4rikKnVWz6BgmgyVYdUYBBYL",
  "key8": "5HTo3sSYdYFFdjvqdFAJXhbS8HVjLEYufD88ZUJ8WwMnamuS4scLdvNEPvpMCHEvwUgJdra83dGeqp3LRG4Gjbhu",
  "key9": "qM3gjiBhopCzdEwWTvZSFXKzgTZmQs7eCWF1Bi1bivUj6dugjarb6sUL58B5wDtpuvE9nQkexUEStxke2bNHVcE",
  "key10": "67p4Y5mS3tQtED8p4cigNtqr2JUMKQqHar2PXWR5mhDvdfHKSXzVAecqWFUTX7nfTKopHGecjqqLZJydjb5b8Q5u",
  "key11": "2dtUfUvGHxPMvYnBqVbC8ZWgN4tTnTcYfaT5VVcsaBJwLujpgJL3FamEx6bdrMAmYAAxyd6Gt6PtHshyf3LEzFW2",
  "key12": "4K2vgxv62oGtzP3Z9TXUiGhmsr68QNwv4vrKVkTgbt3m9mDD1rzDYHSaed2CsQu568hN5kPtm9Xkg72qG59f64uR",
  "key13": "5rHhhwJJ2Ta234zZ5ArGgGSLCNptKGZWNvWetNFkBMmaQjBMzTK4k98o8xNkLg3DK4YQzaeCU34wNBCF3siGsjcZ",
  "key14": "25aE4fqgsZ4cuKukchuVKbKJbxfVw3vaUMwi3iV7R9aDAZudxzNN42A5biZMHStmjuBRSjA4AHnqsiAPKa3QEnxS",
  "key15": "4DYdtVttZdgjmt6B8RmtgeVpo4wgd42WULrWhiS9LKRCVzt5mkRQkfFiiQVbZjhsuWCmZd678tZrg6kWwW17R9YV",
  "key16": "26TB4VuWgTh9jhJX8ZPKxQYZg2cLPmd1Dx4SKyGHkPwXchm9xoCjvZZ7351ctwi8Fwgz9qMFHd8WxH7pxvGUdzAW",
  "key17": "3ukxYytqVC46PsgmuLprakLdMLL6hjbgrJwyBwgPqsDx6cfqURVsHHtT5FTpM6sQGtET6DZye4kXaAYW9MMFr9ET",
  "key18": "3Uq6NUsYSPcMGwSuAgTL1MmsF3n77Xz7cEczqeNyCy9uQWPkUG4rrGq1mqrGMAUXBzQBzB3W5kwA43ShqKT7wGat",
  "key19": "2zgs1FRzAsWmd7beFEjMPa8hM6BhFxnqLM9bfiFjiQeXeakNEMgJMnWibVZGpq7EPCSoWq9HouGVsyVCXp3rd6Jj",
  "key20": "2brATkYbDX86ahkjuEgRu4EaxJE6Qk4549TVdquCSNAhdXtFwjJd4Wa1ZxLkByHvKybb4RnVowvvNoMrqXRG2g3P",
  "key21": "2XXMcgg7fXdPZbDXo1LJF21v8aSMzKoS9QaEq5Qt4bJTTwb3mqWiev567GkuTbtcAQDPcQQp5GMhFNYhsyvp8VjL",
  "key22": "c7o1hawnW7gAhDnX3cfJrhCGj1CbgqfindYogjzwqqfbzrjqo2u3wcxk6pQSK2ch5QCkfCNcAJXzhHBWkvgxXnD",
  "key23": "63avDDMCaitT3gVzFync3FA24Nn5ff5YTM5TYg5icc8WWGVSU9e6BMQLYf6ToA8tSFTSwHuEYtkTm4j4ieU3Ktd2",
  "key24": "5wxjiPCoW2ZD3LyNDpiVQPrFTqCPFnvMJbCT7U8agZtRGHZbTJ1R4oq18zSbURkcBiHeeD7cs2m6U9ZXAPD1tTFh",
  "key25": "5g8XQHJGMWwC6f2ugg8d4goutcQnssbTZNrApSbi86vwaKAZdaroe6M9DBTHWzbVvogTxWiAxqaNb9qx4Lms8XFB",
  "key26": "64K8d2SMcTAXS8KAbpugLKwdN9HceQaHR5v4LADvzZzeYs4ujA9yxGc4kNNhdZ5MDGH9ESiF7P3MzPyP686F1aHt",
  "key27": "3X89E4Vry297euf56KHutdSbSSY7EYic8NoeNR98gmLn3UsQtEKUj6RooDVQCzwC8LqHFhRC22cgbBCHcNfPMQ8H",
  "key28": "4FUXeCu7PdeCHvQfP1YwRxdsSXzaPmDhz6xdDQZxmCLkSUyuAY9sLYr9ZUkPYQxyAkZfgSRED6qSoa36ANtxxpMr",
  "key29": "45hrMdAaqdDLWRnFkDZWywkcT4qDXLm3wKhpWbEzDJ9e83prx2J79edDDPt8qA9q7oqyMGogmznDLQoGeihGpzJg",
  "key30": "2GyazEDf2JsUwcLNQSXgcPL4XbBxVi98HoCqi7HNUTpyF1eEgAuiBZoKXckybHsPHVV19XENTiRXLwpRkAciEMVN",
  "key31": "3PmVUBmefAekknrfa21x3Rbh41eej9ewEHbFuwzS3buLYszQDab3s5q3L3392y7ZPsSpMsxvRfNgME1czRsijf28",
  "key32": "4U5NKB4FsqYQ8nEjuBsB4YhMPCWVSKTde7Vti4Ak3CBs4pXqSpKqdHs4oEnDt57Jbb6V3bxFegn9nhLVvRGhBPWF",
  "key33": "tVxFuztPpoRY7Pf2DzaLxTjUsc2ppyZUA5Y8k1Kz6kvH796oGShaXnsv5ZY3pgHzSdY6yHova6uZST8rcNtFPj3"
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
