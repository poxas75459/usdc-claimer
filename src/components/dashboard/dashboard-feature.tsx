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
    "5PDQMJHdTXjvHcLmhRDLXBaRQjJxbe7DzDtsuzpy5toKwW7vv5Lnhktv3kEALyCLiJZhycrnQiWER4ZUDv4kHT63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KNCJqLPju9XVcVCdbN1EpcXCaTeGnUVXoxKPRjgaEpbarVKvugr69EGqcjAxcnJKxLtjxDzz7iTmZThbKBRLuCC",
  "key1": "57oZjK6LyShRaty3gxh2kXdj8rMqh9pSwvauKGG6dretsvreknceA85mhhUZP5fyXfWNPyas5DwD5rbvuyjGukFN",
  "key2": "4hbwDQeXAxSJHCL5gVLYvKFp9QWkEacTptwm7R6t8deBHDMuwvMEMkdnH3hUcEKE55gG5E8zrRiN5yVeVzF128c4",
  "key3": "5vU9vrmXCnVrCBE6KdiPvTAJyKo9c9LEuo755QdEovE4qMjwKY33uGpGHDwEVL8sWpfge8DTNSm96cArAgbtLMq2",
  "key4": "RNma4sKbiNP6ZDB8BA3zL8ehsAk2XMZM2YHdEefkVRa5iSEMwDrGxRZ68UHtoumdpPA1UKB6wiPUKXeGfCVRFdS",
  "key5": "3jjfwgANC5Tp66523MiYbSogh99tKcdMVuJLW9p55nK8dLurtWMsJ9WgxXeoUzbJWDVXdsfLXcac4bqoCv4itRDG",
  "key6": "aQKsWqhfS83NeaWqZjMuzXsuVeHFnoAepdW25YihPD2yRSqbAXF9XqkWHjJ4M2wD8zGtTm1KSktWiNdFKWhj4Zn",
  "key7": "MAdGo8nLNQiuhSjomUE2naXZZKUiefKADAKHd66NSPQp7hw7nV666m5wRVfCmv2S1dfDhRbp8YpHENXh6XGxEVD",
  "key8": "2cSYg6Js5rXvw8d6v4KyCb1A5G9HKScwuLvGvbPnafLZRzmJC51rNUEtEC6DKR4yxTz552V9cRMi1f2Ma6JJmo4L",
  "key9": "5z1mH1qCqA1xe38NkuFJVS1RcCZjWSMDxAM2oEHWqD24JWkyNkhVCyFqYma3tm1bu9CHaykxCY8X36wVW6F32fGj",
  "key10": "48TFcRDZwNVCCRkgj6fFVpxDoTxt3pRZEqwBy1xfLsxC81JYeNbiHbu18E3rt2jDxn1mTtmToPbebiJfpXN8AV1b",
  "key11": "3nFr8mTg1uR3MVqvV5s2D52rCzGozJxdzcW67hifqiAp2PFfawTY8UbrB6HU1qXKKPBMB7984ZUcm6s3Z5zM1iVw",
  "key12": "2nbgJkxbBPSWqBQBXgYni872pUJBBpA3PbmUtDDtkdTBeu1nZWR5DRa3KwjnbmuowSTK2CpkoFdwFcz5g7aX59cq",
  "key13": "3KkTRLx5P4pqYBspXFYWcC2vMkcTZn4YNiVWCKuJcWqUPrtpaapYrtbEbGKywmuK2MXkVx6wax1UqyffzqjrtWYS",
  "key14": "4CHs7DmcF8jbBHRZTinXAnegK2fiRNNNP4U5w5GKpHPFxLzQdVHM59NxW3ZCNytZzQpC6TrNS4yb6LqAKZLu8R4n",
  "key15": "62PDMREgn9fthTR64KXhczAZUBzoEPPUy3TFRuXMgLthQQMapTwEPUAA14Z5MYpWH4MZCPuSMH5jYkNMhHvQA9Bp",
  "key16": "WP3W2aC4v5eKJFeyDK4QDLyJUm67fWmR9JRBmm9A6PwhJbcTE22dAxBxKFZ95p9XiQbVQFzYLZgcECSCKQ6maZj",
  "key17": "5WJ9P7pTUm4MxixcB1CpkMjKcs9ojEHRPzq2pTWqXfnuXyo3GKTtUAyjoKagPEeZL1VFeyT5djymhH1hrjkALFWp",
  "key18": "5aYue1HcpwRcVbegRXhDbTEfSiQVMzQjJsHiH7nqQjqjr2E2SDPVpBqZVSF4TnC94V3z5d11Bgt4uADwdJ2PVbin",
  "key19": "3yBVEKbZ1rTAXF1ayQn2HQqma4yiTSHyPm7Qa8hKoECRq4meFU3iepUEPog6DfXSydoxwGRFdSK6qoWV6YAVmaaX",
  "key20": "2ZTE7hLKwbtEiNzRVVoGmB7SyHi1PXdBTX1rwK9wFTUUVwKsSpC7Nr4cqABa5fckWJ5m3vs5FUcV3fgTPgyDUD9r",
  "key21": "4NjGs3q7teZxwugz3FZiaMYeTDrLrsr7ip1FWnNdGMfLzBFstnuSoG4ueUFuYRo46Hvf7wasZQ4pn23witqmpsXf",
  "key22": "5AdY18qBRcs9fPkh5KL7HpnaVQSAi9Turi9bTTuQV68enYvTgjUA4TWh2rkFjEzYwAaF7orZDujed8QMRsUtNB3y",
  "key23": "4gLwfk8SVmtvgd8yxNpQGhjkkoWH5i7mUwH2uUSfnhmo9m4uwY4qvzCwfG7xzz4bNDMduC4tNNe163mhTyU1w6cb",
  "key24": "3ijCdm1y8gnBf7gBNfME6jMRW7kxpjAwQwPQtB6XhYD99Y8jLQmkSqfqELT1hnWPvZbata55SZfFf1pWB4sJF9Zz",
  "key25": "f9guwyBZoV1esU3dsuHpjmcyNTEBCEt374k9qrEdTpEgaQBBmHRTtHTeySnUQGtaQ8uXgiw8DBucwbF4JZ1zdXg",
  "key26": "3RgG5FGn12Wm9vYXHnyk4LJuEFPZWn9kkP6NQnS47C86GgkyNJvesbvRKMxhpnBHjFoGQmx4k3U5UwQRXjomfAez"
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
