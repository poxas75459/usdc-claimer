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
    "dWPLxuG3YmTu5FuR45qmAWoci311fjcH9XgAABjn8n9nBerMXU9g73yPGd64FjceTyiPC4VGy1WMk3JnizpNLsx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n9qKgVP9qoSXKKyBiexBrLA9cSpgPxDJQYprzo1jgQM9uRTuhTgjGGtqzdHR2k5EjLdoPmGNZQnxCCsQKBFC2VB",
  "key1": "3HKbDLQgu3tLBLXbA2RyWEU9Y9tZkzUVTAPSpkL9QCdvUjrqN1kDaLbnJsuBtSToovTgL3rU6tLTfy6Uix6qxAZh",
  "key2": "4VJ9LXmHwo6N739ejo7d6FB5yt6XfsLQ21WjaNVEHqhSC8Jojruuzqn7PwvZGKyHT4HU4uHVX77RKuRm3ALS39gC",
  "key3": "3eTZb6w5o1F5gSfMCZuWWEfBWW7iWud1bL3S4RPLmKbxsJNXnyZ77yKb4HJvt37zFPdpofjnuPVfNr4YfpHdhyrF",
  "key4": "2rgtsBPG4zdXCs5YqFZoE9k9sZuYSVKZbcZ4FyRKkTcQFnmMo74yeUdCNTA1rfpmT6YrKr2w3f3CNc2ZuhpYbvsz",
  "key5": "4jcB6zTLbK5LhsVKfzxqoNrVP48FyeoHZkqWojz7ycH7KXx844iYmu4fR88BXT7RmFc8cqZABhfb83EtA8dU2HAn",
  "key6": "27GcDJzhnWx7BzZtopDyUGmTK7mfqp9KsLsvQXNZNV7DAin1FNrRVBZBWffD9eMyw5oRNHNRDiMQajbduEg1hPcQ",
  "key7": "24tBT53KFoPYFR9sz3299gwnJtB2qLSh4ezZfYTy6Uydw75cJ7KJKRcCQCubHWboZT5CnMG7rQudqGaJu9ULM6kL",
  "key8": "5yPkVX5kmemDfTMepdmRxrNH6a5TAtDAqEzcPDF8wwRZR1UicqupPQJ32w5sNfzDShQ5o6a4t2fsMR9BCjbbTGJ4",
  "key9": "3PeTFtqQ69X5hTxXxNQDpidh8Su1TUV98nkh99rj87dRAQNTz6W6Pz316x4E2wCAMCN9q6avGM47NzgZ5RqfuXCq",
  "key10": "2UR9BT7RhYAQRK2Aji5wtVES72EJmMH66JqLz4NbLyEXhacf5rfEjGwaEGcaM4b5Y91N5ZDiRrBBbbKXcw2NcvbX",
  "key11": "417Ew5gsd4yri4LwpUcTRtENDoYvjYGvBf6WpWfq5DaEsD1zjTLzk2NbyDHEPDdJcBVNWTmiYXbdvTDrEpMshAj8",
  "key12": "3cb97RLGhfwLxx6hzX4p69a7xBgmWrX4HRUSojBoLXdY7CcW3S6k8dZav4qBs19zTQK381pJQJZN4q7ZtDWe1J57",
  "key13": "4XCf6fmYermMoFgMkthb9bUTWPeLBaSx8UZNGPfLLqKDarHGssYTEzQwhHeAkBERfucXZhPNb1Aa2itTZvhpWqh2",
  "key14": "gyrFs4p6vUhp91qRrT6mPx81ogrEcRfNX68jKpRW1jKKpsubypkN2xVxGRQoxEs6cvu8k2nPH3wv1NNmG66XPgn",
  "key15": "2HG7Z4fu65n21cUzRwsAZZchTbKHoRi3kXWLkyaMkMcDFsjboWU7tKFbRf1siqD2u8E698FyPmCGxhgjUBubuV96",
  "key16": "4KfyejDnfPXUqCfxQaoKYyDbJBhpKS1qJTDAJR2cRhLkQ4wX9f9SUhyNj48RDqLp5bwXSkwpY2pjRd1dCt9oDFCR",
  "key17": "2vAseAKdoiAfYPFVWvvguo5NRKXCriDACkDfpTtAfiYVeKKSvPH91y4WXSw9U6483CNYyLADUXWpx3DqPWgF7Thj",
  "key18": "FsdYpHB2hLrMYfm6UzqxfFAu48YiNLzMxTbTAonH72yQWfcWkL1ai1WHotbdvUs7wBWCrSua6SPcvP3tYU9FUSd",
  "key19": "44ysQCZij4VXwhR8JqsYQtjgri2VptpFiwUX4DwCkeoZCmrwrYZsD2sfQ4BPz6KHQVXZMxcVngYdZBBJrRjZ2KSa",
  "key20": "uqvHEm6oqUpbDM5nYEAg1XxZwQ8fSQS2FoWjc1a9UJd4xx2KWce6uGopLiAdDqr9D3hdNS2VwHsd7AKKMy3LfMV",
  "key21": "2L1aEpt2iz8JS8iyVK75XYWqbrq7NTxiA72Kik7PnQBKjg3HK8bWuqAhxJN6nBFPYyeiexxN8rmtMHM2FXKg2MBT",
  "key22": "SaRKiZ267m25nnohrCTcox3XmzvzFtbtG8g5voZeeE1CVT7XSG5hmLzNXVH3SdrUNE9Conv7ju9Ym9JYUtrXNyQ",
  "key23": "5Pq3aNjCGWPijtqavYfye9CjnXDBH8y8UVZosas3p3oxNJp5eL8eeV4ArhhXaqqVfUb1ktSqKDQE1R8nNP1QuQwL",
  "key24": "73c9bQeQqNUgcpKaodMTxAgv9roQKteZfyuws4FXZsJZpALnX2LAzhR2nLDUEoKHeGUjSNqs5j3S4FkPm8qZBAv",
  "key25": "4RL6ukGqAiuu7vHLB4yyzuNPVFMWzceuffEc2byT5Ubp1qXLBFP3sJZqekkMbRCzAheadeVAXjt9YPQBfactuL6o",
  "key26": "5TeYzyY2c4ohKBUYMRCrQSQFa6nPue9vJonthJg6xSgyhAkM43YFGMpmZ1VKC7wA68u66q7XH8AZysBuGdaiM7PM",
  "key27": "2BMcoCpcMGQmfVhHxJJ3vsXnQMqiZuUjffqTk6zkPGyVgNtdgMvtkNT1WiJ96uCzXFKePsScWdVs6ox28v3psvSK",
  "key28": "5Lm4ndzHRN83h2hc8SkYWQGZP3L8w3SFZEHgLDkoXiYRJEyfumEMzuMh75hEHFrGu4XhPZ1kXv8DohQ27XNNCGJh",
  "key29": "Z4jPEX4LLAyJ5dawpzyKfTroHYhqaaJP3ZHhHfMAjacpaYotHRFCaEZuhNLnGMLqX3LQ9qhag3zpn7ggPbuc5nZ",
  "key30": "5uX588Sh9sq8MUNczCm4yGzE3kjKgH2be87uvCE43MUXRqnsQLfGcqF1mCPsS5vTh818upNFNeasYa28VB5LpLTG",
  "key31": "ZKgcZ9pq6uhXXXaeh4KHCdgYKJuSKtraFnFBG4jmpAfpB6eg777i2gH6vAXXKhNKLUVefVJ4Ga5ECuVkNjjB5MV",
  "key32": "3PhahtnfhRzheHyyGXeYM1ng9m54VnwW6X2ptvxwQ5y6kM3WdNd84q9pxLEWNdtZepvtzgs8hQiuATBtSyBDxhkt",
  "key33": "41e5JUtS9zj8a98W8Kn98pcxM1gFaBibQJjNwa6MnFVCu2UvNUFxnjfQ8WgzdrAspS2TWGFB2UBgkycwmS8ozDzd",
  "key34": "4JhvZEcPk98raQFKcK2DGAzDnQJW6pdiaFcJa7FcqHKVka4Cw1jp91uiqJ7YwSLqo9bjpWgaDsJ9e6KfJakH23f8",
  "key35": "5m3Fehnzbifwb3gRctcfbHvsybWnGcUHQUz2Vp95LscvAT2LJnts4LhZE4z838C5gSnLKZ9M1979rWA8Bx6GdFE8",
  "key36": "2YuziM1291XR9NABj8JTE4QWJ31mELwWLopXmysFAT1KMFokDUbA7xA2pnfkaJtYCexvRAvXkNSnD2NfHiqFsC5Y",
  "key37": "61u1qLQUqH9y3Wfv1TFJaVpLbkWMmKUFkHE4DV4BPpN9jJ2cCy15Po8gNqMoJt6ba1QY4kAfpp7DJD5AFYXMK2kX",
  "key38": "2mAEh42AriFgS1nMicY67ctRAgNTKRFNUH3yTGDVPX97yXC6rU3PfQhsPAnGju1fypz9Agy5no35fb4G7WCv93fp",
  "key39": "5u5czNrMUDndLYkX989xA9kztTyaRaH2Ktz4B1dodfD8DueWMrGPoHQErGjt6XxG6gWM6EBJXfTSRQ81rZuou8nU",
  "key40": "45ehhKYAPxBTKj7WvbpRtcBEfWaJrM3cWv2jLaf8C9MPaLgp9Gyru6D2WM9bH9HAsB9vTZcMywehBEgRuwossgnV",
  "key41": "4ssBgjEckgUuPYR1rtViqccuKfpzGuNHMjX4hTYk7mvNyKgn9eWXL2D3oy3N1Uun5iytF9Rj7wtCCPAEuzQQekmL",
  "key42": "5z4Kz1ovSpkLB8jbQ4MfKy7Tknp14o8vqYn6gtP4Ba5dzSd9DqLDqU49g73fQrYT2cE9veJSMpTTbUsHuKAvRxz2",
  "key43": "3nL7Vu2kWo8NpbQjX61TZvemRZ8vv48daGV3KYuztVpvKe9Bn8u5CPn557XcgdgnXKbNEy2MfEz9KixLeckK2sDw",
  "key44": "5yNEwmBP4QucyrDiWUNZAyA71g6gKgb7U2Y73oV314Eb9ejknURxx4Ag9k6W7NmcUZ9WfkMqVvnj2GJn6EPghYL4"
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
