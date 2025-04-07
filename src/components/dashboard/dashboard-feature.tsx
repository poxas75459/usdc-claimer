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
    "3dbR7PAgrtLhSnKuqxRyRTFVS9EY2zCY6A7eBpRMfr3srsVU5Uyh53Ke6kpaRKbtYvJYT4UNDXG9UtkuM9u5YSDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JeweGp86bzujFcUkQPYDqerrdge4swWKPdXNYjMuLfV7g8rHgymKH1HzuTFwH2EnPKjfUwKPhBnNzH9ns7ebXRk",
  "key1": "3M5UBL6Rh1dkfcofXpV6nK4zQMw7j1p63xkTwWUqRcULCTr7h2G6DCp4s5djMuQTTVKCqEe1WXRVaxKzMZHvhwC3",
  "key2": "A6hLNER3fE7jdSmwxee3W9TUzgVodMbx2QVPF4q3U3K4R3kV5yj2h2wVdA5pFD6usCuK5pystLVeWawdgEhvC1C",
  "key3": "6csZgpiwHnsvLFLKsKX2sz8dvzoBRCTYPC8huR18v3KbZeRMCcL1nazCRgFTWgdh1vP7Dq4vwnhAH54cjZHMhuh",
  "key4": "61Zqm7MzG5Ev3sRK6oHq9bXKVKmuz7vwRvJRQsz8tD7V9LtAAkD4QCQ3tCjNM9QbVMJQK8v9kBXFZA73jqXyhJ2x",
  "key5": "2284ZubHPavMHDqBPt18jP8fYQWjQR181UuyCqsU5DKcSxU7x8Q5esyw4mQYjNem5otNxbjjAZqq1k8JxWCF2UGV",
  "key6": "3LRbkhzN1MaaoPRRWJLpLJrZEitDNqJ5rwv4EM83KmqyHGQ5dw2h7MRvg3ZYYsRQwiduULBihFJGrXsyN3NwEkzt",
  "key7": "ProbT5UBUkCRyQL6sWv4J9YFhfJRbFoSE8MsA1kwwKcCzARzMtkQYBVR5wVLUnqxpi8wLioyTGKWAkLp2syug6d",
  "key8": "5qePBztPYb3mmNwai8SZJUNyGWpwTxsgandQFJWJ2V2GasCU6eUGFgfc6o6rvw8AdmvZUtHdeAt3uCFZfwWVBKaN",
  "key9": "5JpKswufL5PeZLVnFyQ4GikV5PMcSMn1CaswDe9GwaAA3SRiDPyEiPcEt1C9ye8PrdTMdU7rKDZ5jR2pxu2WsDn3",
  "key10": "63pnsRVNVuqzMuMDjc9bbT5hvQ1DvT3LPsd5itv4Tyd8bdoUcLfVrtNeXZ1exT3s4sxnp8cwTTw6MN5VpsUk9ohA",
  "key11": "VrW8PZXcJXCK1hVHmWk51DkgPfK4nQNxwgFP7mfSWZLa5g52R6fNcQu5cbJ9mEWMJBbyysDkC5NJDEpm58rDqU1",
  "key12": "599NAuqUrSfUgxdzGwDrUwsHvttV9zriJ9ofsGzSygwHx8u6kqERq1i6ARB7ukNJH4g4TnEnxQtBZXEgPyw8NYqj",
  "key13": "3E1F8cbwjV86ncwxHkhPpmbqaBWAjYFLF8H82nRQtfJS7A1zj5CvtCa4LpMM7XeTPGfbMq6MhTfCZqn7gNBGeEqU",
  "key14": "4CgcarLy5ZdckXgu3Dt1iiQTyjpynbw3tjkcDehRLsFnfuq2U6eGfcdazp7wduiEkWeBy7VnKL3LfJmjFYMvLND1",
  "key15": "41y4SdcRwS53tAgqPjU7U5fm27AAQKVShbN112JmkVERHXrNxSJwmyZs9ddsgYzhssYkuSKahHdxtWfKAaDuySPC",
  "key16": "qNojb6iZmJJXthfdUjTCj88y8rPFUoQTPiZuExgaJDo2qTSq4mx3ifTMjCaFmiN3gxB4oXupC36tJLM5FuLq3WM",
  "key17": "3wAF66UWaY4WNiSuD3kFPkE7ii2XDADyuxAW1n9cmvXpWzmgVbcYLBQc8PnbXrZNvRoPjHcFAkek9FUa1jm8jcX7",
  "key18": "RsvC5NNyTSxUvMq28ttNz2SijvBeMkz5s3CzaUzsjnZLpsKX7nCk2bZovGdnm2W7gaBin7yReJAcSR1kJCafFBV",
  "key19": "3k6ANsFaCrz3Ud9ntuYjCyvq2xu3SYYYhuYwjSNfSfoWt4XydeGq9JDEmdN4NpPRiN5FKVL2oPAiPpnWGcBXdwdd",
  "key20": "3UnkraTuXKq1ZUFKZ22QVLExPA98QA4uEL48gsTYKydBNJoAknUuA1M9h4FVE5kaC1pW6eEpnu4X615JunSgJEu7",
  "key21": "3M3Tx8akr3fiaAZ5yYMgdcCDEpBTrRRsN7ADi1xrLnZWGHhD744vm1tmTevHeFtMwHAV9C3s8UwM23NGLAEvKSRN",
  "key22": "5AEnYuTxk2GBXAEpwRKVk17v4MnR7pURGNu8P9MNsXa1XX4YYszuQSCpWJAqxEBXeq1GX1Ca8sMUesT2R3X8UBhb",
  "key23": "47Ui3TRJthWX44yAqKPKQvXP9SwU67FJVuwq4dTBTun2JpxiNsWgrCM3uFYZuwiwKbjoVU5Rek52U9xrvJS6GuJZ",
  "key24": "2SG7XQQLWSrUEq1rE3NaNpYGwZQ4YCZyX7ExAsTmQ7bKEWXbK7BGLCFH581EHFbNPJ556ZjPLcuaBXrPq3TUJfG6",
  "key25": "5XcwwgvDUABk6HahtrA6748w64NwoohNij5Vhe46DeXTA9ydmqHZ28Tr4tdfYXcH5xe79h3qaMAxhMeUURu2ncQV"
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
