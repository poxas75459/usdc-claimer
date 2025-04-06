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
    "4SmtiWbFg5RBZtMMk9Hvb8k7ie8ApwmsTxTFukuayUyeEURYrtX439TQQUvuu4foCFzkjawJhaV5seENa3CcrdTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32DHYshrqz4CCw62VNRZkwjuo9gM92ASzJYVCAzbSWTHgAxFdDREMsB7SPdTdhpN8Q7syTJr8AjAmAXEUhnkwkaC",
  "key1": "Va3Ad5JUBCpuM91x4QQSURQiWNrFtGGC6ihLySuFkJwj7XqL2JKxNi3a7E9QuNUn7XCwPS6YvQjtZURo7zvnMi8",
  "key2": "4RKDyiJYZ4uuJfBP952xbkNcMm9TMr5a861MV8p7i82sKoYMhEfd3kqjMiLiJL43Wzhhp1jhQy7KUWioZ2bYeYsz",
  "key3": "3Lp7MRh2KSJaawYhaKKdG68ETLZbhsUZUsni4UpWcQRxVaU5DiuLZthFCrR7T9aSwbFiGuoveVc1b5254CH1J9LS",
  "key4": "4BxUDBDrG3noZBCLfdAwKyzTBjjpgCUJ1VdrLkTyZUBfPGxLno6dv5tTULusDpakva9Hie4vCt6daRszPKLmN5X4",
  "key5": "3jy5XET1dvzHRJDPwGNd6FSFVVAo6MQcEpgcardYmiByRBR1huVVYbqzueqxew55qQQTSk7fbANCCeciAMTjpoy2",
  "key6": "2wEmSfTqYyaJooyevGHwRgRCCJGAYg6r3QJMQrFKfJhhhdawa8Ube4rtPQCE6mw7eqb78gihnK3RRQYgkzZVkP1b",
  "key7": "3XVeYGfgYw2rDSWBHcAqicVYjFykfefoY1WgZkCtXLhpnKjAkFEjJV15KdEZRHLe7VKPyZYHzyMbQKuWmvMZo2Gs",
  "key8": "BQyyTn6AakkcbKaWBQPotqS17LPFBHjmzAz3M1FumPhZCFWoSFKheNKZCPxZXfbPaKYvzQDSMPF1zM63TkLaJT6",
  "key9": "3TEx9eybvSziduFZmmxHoHi119rDAmNStUMfX9vqyJmMiANxM1FUWsXwZPoJQVFFrvKN4wYqvDshTZHjmtp8qLQL",
  "key10": "3sBEJUr11zteGd4Z6wKSdGmutUGYUqdYp52uXWJFETP7icLenfeZPS4TGmsDXh46MMGmBCiJ2bcZwbq3z4cpwDbg",
  "key11": "4ns8NNvo5s9AE45o5PoJrgAxbeNez1piyRC8qgHgZAaJGeuGTrYj6v4bNFThETgWPjmvzXW1toKiuyYF8o6apqe1",
  "key12": "4KcxxbkPzXc8HwHnA4od3afnkHWjfinmY1k4cAbGoTPgPL8AZqwECjECnmpmqSrxUAQh78c78boo2PNpe7WPYEA2",
  "key13": "3hcQry49Uze9xgriVV6wZ36atfEY8A7ZG8cPUeDq77BL9wf4dAPX7E5TUYs9irMaU8kjZbE4mEwXfP4gCYVU8t6i",
  "key14": "38bUowNoqVcFtSV22QUdJAvDV41zYjwDJEZLhq3CEsQxsemeunby3JCZRbYtX5fwxNqBgT5F22hue1GLjbjmAdzT",
  "key15": "6G1AEPpwRosLFSqWc5MW9VSsKYDYkuFt6HdSWWUWD8a3vFZuQk7dLumX7fMEhe3K2GMuDoWrkFmskRdm97nCfVZ",
  "key16": "3PYyUjjLJZ4NfgeQ8uPf5gY9hHyxRVWyxJ33A1WFKy7jNZk7yKRdXcNhc1pS1LdeWDsTtRgap88w4fuSNwsGSysz",
  "key17": "LU3Uq2xh7iVmHqkV2n6s6QJk3v2nFKjDFDZ8Sn2UJNPRpSFkgAsX1YE7R921MvHi1hV5MoocaG6jkkr2occ8obV",
  "key18": "3n3JbNxSuTWE9E3MHJ513JDRPxCerX5MHjAYArrxEuwAP4wHduzVdKJua5AVRDfuLQXFDNPonZZD3Jm9vQDZHxsh",
  "key19": "7V92yaNptpH7RL74B5Bg3dj4sbAXtjaZdcV78i5vAegL4ZXpW7ktgRSWFDbZkHLJkNB6Wvd1MbGiz12X4c3rmMF",
  "key20": "2s9B11dtdPrB2ksjRCp9uiwy2hT5QpzRxd3sX5foeBNPNoPeos9B8Up5fSaoQZ1EXuCizkxowSJFXdFuqCakV9ju",
  "key21": "4fGyzdXL6y39jVUftGRun5DHphqy1HWPaNY26DthfPRsrw8kqPvvTHByesLJXDTY83eqsnP6EkraLLy3tPZxj16T",
  "key22": "3qbPo9gxd8VTSDkGqf1oKdgX2zwX17D4RhpQzs1bCtDUecEtRjMsY7LkbJuAAYUUTFbHhDufCBQRxd7sr1BnWQZQ",
  "key23": "575KfxMx3gKdFBBVaUXrRbgyMrDe3ByyRQvNbxineZjTEpFt1F8xuWx4mPadBgNBJgT737yT6MA2r9mk2xrbpLKj",
  "key24": "35rcEGEKz7ZDxztVpTmfLrGtpTJy6ZBJc4csnz7nqJ49TRSTkTmQQrJ1nR7RAg8qmx62mVVYto3gLyrRUy5SzT2z"
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
