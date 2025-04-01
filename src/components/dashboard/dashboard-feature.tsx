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
    "5Zry6dZFxFF4HMyQDKD2ErCyxBv31D7BfjtuD7WTYsotQbF9E9cZccgXi9Q5B5UubWUJ79gUqxNhHjirqq3ZaPMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nzB7iWNgc6d89NXkdHWizuW8PKb42Umj4WCTivSooD6EYmWoQZwQ9bmmvaUUtoERWQiNUadrtUeRCcBXjdEKxW3",
  "key1": "3QgZ5Vv5VB7vguunpJsueAWQixqsq5ZAUMMWFDht1Crtzf1boyGxUaW6JhPWTjy1APbhCAch8cRPkAvrx72zwy9",
  "key2": "2ws8go6nTtRh5PYNtdL9ku1hbKeAqaMbevFhVkQfmNcRmiSRvRKfjKMb8FDYdnciPxqJ7737EGqkJztToh7pD5nP",
  "key3": "65gjEc3oRXC3NpTF9Ldctm2b5d3gwp8fUiURAt7dG7CtneMeK8Xeh2mupXpAyLnRnuxk1BhQDUAsUAgeDi52qs9o",
  "key4": "4aLm7nfd9nSwfQ28P23ZAxmtFfTbreKdSbh8KQ14CTkxvUDYyCSthevgcEzo35nEerqwLGg2PVFoAfgaA6EqLqMA",
  "key5": "nLDE6yRBgd9FYQik9uRETWmP3ibfF8xeby5rEA3doYg28aCKXNghps8yhtrBP1DUgHhbc7LTYDg5NUwmDEBotrs",
  "key6": "2xR66LPxLbvWs2xtudoacZr25T72MRhdmtwr52QMu6NFvYaRkVaM8uK5bQSWHNPZAp8GHWqU5C2Jv76EAWe6yP4j",
  "key7": "wtgfp8JsxxAEtPygtMZReHbzpEGMPqZFbgXm1Vumv8rkVN53W1boUoF73PDYTLaAoabCwwwd74JS7eUYSCgNoYa",
  "key8": "3Ve3inAf6kCYLbreWRB96km944NdZoxMagDo7ZbhGmKv5GiVoEDZSu2xRb3u7jasrrce8dzhh3MoNvxUvwCmamPP",
  "key9": "3vaHLxtx87Za19JV2Nrs23vR7PvTbZJnecMAfNbzwYSMd9NjDvq8c27e6g7a9GvTifb6beUX5dVwL8S7E9gCJH9o",
  "key10": "3X6EB9J6dnK6SjVSRTjMqEHQu8B3szV3nWthYhDBnuWpHb3Tj5uYE3bByba4gni3gK6W5b68SwpUAAE3eNbUyuz7",
  "key11": "4KspPM9PEjTDiUfQuPtdffF7Ar7EKe7atQmdhPhVti28PpKh2AacFs2aaVub7vpGMxFEceRWQb7SteqYZMsRERiu",
  "key12": "5CNkrbm2nWqTWPwKNbuXpfpa99e61Do3iVaFj5fBKWnTA3cnNjPZ9Q21svaYxD4qKc7kHMTotifsVnW5Ji8peuQo",
  "key13": "2aVf7D4vdtUeeDi6wqoKm2GxZUrpYKh11yr99vRGfzxg7erePy16fBdZ2iyTPn45XBuV94hByRv9qJtrGwzPjqpA",
  "key14": "4g6Nykvzc8qFuV6CVnbvNNG7WUGVdPxxwroevoWAYG2t8vMZyssneWTrE5G9cn8N1EpXpUaPPNwYkz6A7gLgyr3Z",
  "key15": "SorcpK7AyBbsv74LjhdQBw1Kv5NFVLtXQf3EoSM7ygUHBejg9r6PmbaEX7ZWMDCC5hfBCZy2z6NgiNZoUroFcT6",
  "key16": "qYMXvnekWjaJT2HioJ2dyjAagJRft86DLSokLbMzZk4aLveiLGkPxDSG6qxSWx1pJsLCKAP9apAW4TyuQHzLri5",
  "key17": "4MinUNukTXW7H1NYbhjRBdLkt9NhEUKVWTD1y3WZ42xeSv12aEpXBwtHYTNWWXt9bZj9CwXX47YpVkdQF9bgNQ4k",
  "key18": "2g7pdZnX9E7htvigHMpYkMdw8LAraMKZN6UUJXkYg9nSNHdSn1QSrmwgB3Sdowvq59inJrS5h4hFVj3HfNFLzvMw",
  "key19": "9nQZgGT6vXxaRa2tAnuijYuB9vW2jkiC691r7ShkDTQnkmVdbb1vUwBN9u6VucHcVCuZeFyQADEy4Vg698mvdD3",
  "key20": "2kebCdyDpuYrPjPHC77Syb5huVrmaKY6JAiLhisZ6gfW7TonjRK7edoLF1oRQzmUgMPUn3daMSXmNu7LfmUY8aDP",
  "key21": "5RgR2GzRS3qNAMDmXzew1YPwFStrjoVpENJo4xG1TjzuBk7s6PAWDxHCZQUYcj9ogQRygkoet5qfHVR3ntevGpU8",
  "key22": "5PSd419eKEkqBkzPEnR8DPALF11H1cbXBw1K8t3ppqnN7uqhZfm3kXAnXdi4EmGMFUbVr6VGUcAMetbQ5XsyG5bG",
  "key23": "4kDcoo2RruwhrcfEH56N6wHegPtzq8SMVrQSgvbnSrqHeVv8Y3fvJFEYaoSEctWKCnNDnC9ewFcx1qupWuxc7GfZ",
  "key24": "2Dy97wPRdYkEYdemgvwizXeViNGoz7dUd71Y69cEPgzuVjSJMky2H4HBLUEHZhDfsmAKqYaPFL6nE1iQcDo8PfcY",
  "key25": "4c9pC7aJF7sfCzq6AiMkAjxTutfBTH8mt6APDXhhrF7eF7vKeugtetocMc5xyq7GTJyuSrXPMw9ADFAinE6B616D",
  "key26": "4PrWRoLo64TpdnvbLmBV5you3eFMa31jGDJ6FjoLayToQZEp2WZFeYNiiifU16USMp2w8EEXDEeVUT2MMBPizHWX",
  "key27": "3moAKWUeHEE3FqzofTYepH77pbyP8xdWSNf5QYez9wdb8WwrZL2cRHTkus2praFVroTJnPaFpPxLHMHpgJoGMx7H",
  "key28": "34LpKiDLGN5TKeGGMd9dbfpqBea6tFWkVaQ1oocop1EM1MgKHDJfzoaeErgCzf8LDFrT9CxXsak3cdzpZADv1Ksg",
  "key29": "CK9mfkmwFGb5FykXnzG9BidPkhAyeig9m8UpVq1XwEcUX1bwaHPiSFQXYz3p1TzDzP9ZsS9AbmFW4NRGRUvgyHu",
  "key30": "59UWNmpaX1VoBQ1SGD5haYVQnbNDVJ3jAsuAxiQvRWRKVUoUVxsvNtUdiEjwSPgNdqjZT1C5jWnz6JbhZv9KdBaj",
  "key31": "oNRcUULmrd4eATLT25yNQ7uLt25WT7DicEEQr1bCEsQhDUd7fYWNjBddxKvBMWqJuYfWaesGGf7688Z81oEUMWi"
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
