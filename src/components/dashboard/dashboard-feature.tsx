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
    "3MryD4Te1ngt7UtsgptgMo9Jq3upGHi73Pb9wmhqPFmH8vz21nXf8WwUWGwrWWVBTuBJRQ6wvbHs8Gr5nNrq8Qze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SWewBSHVkHNHDbqgdSvqGKSZFjCavFs7EHL9msSL4G8FmgSicAYERLkXLeGkpJPGtPLzRRjxPfx4ufP9a3UABq7",
  "key1": "3qKnj6DKd2p3FadvNZSeXUFxNhaWKrcBdM2ciXzWTgGLEKhmj8bseQL7Ep7Ud3R6QkDaCrGXnHycpMv11oUjnAnW",
  "key2": "5XH89gKSP591USm5o89vdYGjmYJxwSkMSFonJTn8rN1FXaMSYixuchdvubCrkorxbDptnCDsTyVxj1295SE5RkH",
  "key3": "3FhPuwsdnMzT5YmvcM8msMot2RSZmJ1nUAMBuyUJ2Q3PuD338keW7ichVhcqb2BCBVibPxFqc4QmWqixGtfw3WmJ",
  "key4": "3HNQoZLnVVkL15uJqEZgXz4kLgsi7rMv59QTowCV4w721pZSeqosvhkyoj69bB7ykkS8dkbrWUgnRaJBY5D7MVa4",
  "key5": "5BT9drGKbUjYWV5evK6j3ntyf6rF5DFgJemX7qaZWViMRKH8gDRh6PmvunagFXw5yiuts9SX6wqXgaou5rtEYZz4",
  "key6": "eEMMaAaTK18R3BD2pMmJt4qH6WwEZQHp7CtbWPdRrbhCmgz4H7bjemPe6tC3zNVqje2riJxyj9xYLAVhbhZsiV4",
  "key7": "3HMTiJJiqAMmYLUEUKoELxfKRYU165mGXpRQvLUoAwCCKMpuKM7AXEMREqYXsuztJq2XZAKe1iQQaZ6vu2ZJkn3m",
  "key8": "3wfC49wfj2HB3bE6w4hZRaJFmZ8NCcgD6Zgv1ZbKahbT8QHaN65wKZAg4Dyycz3ZDYnKcjjCg54pPsFQzFFCLY2z",
  "key9": "39gVSDTeMJSYht1f7GYTxeno4W2MYEgqsYTKVZxvwRy9HAF12TsinA2MySgZgdyDnZam54aZBLmEL6mS6eKdhnhR",
  "key10": "26aZoym9Z2qfaK2NVWcFPvbHTdqTgoErzAmfYnrvW7Qwkxzz5Kgqhig3gUF1EmW7KrmsTvonwbAtKgTdSuJoVZJc",
  "key11": "4UgaF9msT8pjfdDEAXzFFG3YMbEX5Ne2NVeMjbgzunYZi8XxQEEA7oVNQqPSFuwzZ5iapxwyy7fL33LBaorn345L",
  "key12": "4dAhnSXSvAp8WmZ12jAhrkeDrpkEnaMmpYASUHqM5s7o7q7GMEKfPYXPVH3t34kYyH3E8PSGDLwLzfSTzfEiB8Cc",
  "key13": "4TVQnhmCTwXB3bPM7rzxLZeaeeAQimXKw27uzhApDgSMN9xUxKzocUr4f69KRBP16vFP19od6EWzzRWvqtVs7Doc",
  "key14": "3ym9gM9cvpnW2kjbbhbPnAjkB7bTrFVus1asbuuVre8BaHiZY445LZjzqEP7DwWYU6T21YsVv1aqp3LfKmbvo7MM",
  "key15": "2AqJwDQWGiYgn8L3aiXyHgacdDcXkxYWaa1gTCBpFKm5WFAvP8d6Qhw2Pvfe5gpLgaJ5evNS3hmJ1CTzTJ8W8gMC",
  "key16": "5SF7Z57ewYXcL219nMufqoDLGZASyDkmVtNqumn5xbs99ybwhp7xryq44A52K5VWLG7y6R1WHqeg9Qsotv4rV3DR",
  "key17": "66kg3wWwZCDVB1ZYcXj2xZsv4WZxSuWm1gTGMaAuFqMhNYb48ptbTce2TSwDRVgjUfDCRMwqDcmxcap3XMENiycU",
  "key18": "2XPgRybT5PuFg1qM7Y4dBg1sdkGJvmr8FoCSwphLBkY3uMY62LJfGupkZmktHzAH8njRzRpnREqLQZhDYDa4pzFk",
  "key19": "2z7QzL6d9pV4RpDHoJF8AWkC16WRZtUw5T8SL1GsWXYKXrumBXhPphbSNMfm3RteZaokEeyC6JKuV51dmXBWiebZ",
  "key20": "AmMwmPpeVnrhzx8nbUoVbCHo5bYvr76TTRdfYycugekHpQWMfSmoJaWJi8wLArRJJcyN8QJYvgBzJLiPGQ9YXjx",
  "key21": "3WcV7AJcSvw22ahFgXRiJ3pCeAb6WCd7CZBeuvcGsHGkmvPgWT5FPRJ2etjAnNW2SBJpmqmcutMwfHN1q1WY8hZo",
  "key22": "4B5mQaMvzLi3UMvXcHpgNgsSi6stUWFsNiYzbn6Hv3BYw5EusytLatHkZo4JNo6hXKYt62cCbR5mPEmhW2pHZEjr",
  "key23": "QTKcoSqeXASVHqSfEPweGNV9ni2MnpMj4uEYPtVFPNhRGrWB2Ajfvprx878dxuYj8AwJmZgLG8CiP9Y7ptPDsdf",
  "key24": "4wXMZvSoevoyt7XZjRsmm1TR3koWWCUpecPN7uwcyNNp3vo8ZrLvwjVaZ7TAUrzTRzAwGTx4k1U8MKbE559bzDhy",
  "key25": "9xPpLff2F7zh9MZzet19RSMaVayifQUTVzVWgdwDPTjxaN1To1QGxaYLdYM6KRACaDPhoCufVehWj9bHLi6DVeo",
  "key26": "2Bhb5W9bwDw3i6o3eNXZNK91qCVAKE16ztJau8MhbV3Z4XqNBaybpcbBbQZdQBijhK1z9NP8Zfr6He3L56V8jx9J",
  "key27": "2RGCLPktkqQjpt78GQnyk3kFe6MLhXS1LW7uoBxC7txNbNhESH9mXeZD7cwmZ45toYeU4HUPm5cRfEdN5kFbLh3q",
  "key28": "2PV98HpxHX5wnL7CZV9R48H3cCZeSPcrHPuSmS4ZcVzkcxjoE5f5pgRjfpsVfuKantBofHAL9CyouxMr3sCNpvGB",
  "key29": "UmvX5tsjsoTqrbXscPQdT56xZ7GQAYnpdCjdPu72UqjjtPWv7nfA8mHYuCxFrBBXURRF7LT8AMSp8GkcTnDcv5i",
  "key30": "581nYTDuAcFpZ8ueN5wKaF2qjMkcofEySSmK8TSq8v1xg5jabu5dvxknmELgWP3E7KKHmPPhGDe47qkK652TkHRg",
  "key31": "2X2jy7ktegPgnXD1RvMMm1rwMxKCYgu6TF6iYzagEwsdC6wccdhfYiSjKnHmbVUKJhiEjCSgpFK3wM5HWoRcuBg4",
  "key32": "4oSVgVu4Je78v2zjTiVcS9SuuQrE9aHLw8rhKiDJi7CXwu2WABDEmpg5eL34wkZxLwx34P9ekSkw1sZFGQ3Gjswa",
  "key33": "c9XwtSrNNsTv1HUtXjXyFMSskR5PNHfU5VYTr7ibtV1hJ3UkpzqMiL1C9F71cJRqqPDbqGLtBFV796hMv9LKoWB"
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
