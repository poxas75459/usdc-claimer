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
    "2Le3RvDNbGD3ETXou1gT2cPG46G35jtWDnEEEsykr64qfJFG1KmjEVVk3bhnAP9ueKXqPyMYt718X5iH78M4qzAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LMqfABNexYTTCwQzNqfJLH2Z2kXdMUH6TaJZBnDVbYXmtfjJEww1Mempi6z8WAe3W1HDECZDCg9G2KPNNtxxFTg",
  "key1": "3QKZVJ85uksaWfo3keMSBZKDXKCQeyhTWyx9Jpviw93QKNrmEyDp1jAKsJaMV3XDweYXStE6a83YpNjN1AiC7t28",
  "key2": "2HBPvYn1a6Mj2xfNBENogezWjGrYvZiY5dF4KcHh4mMXUJZ6PNsVZbzWd1hLLJBmSKtJekiZ5jm2c1wVtRMvSPQ",
  "key3": "5PUBFUijKQwQiEzy3A2VGMR9ovtnQk9mL5uucCZ3nkmDoW8tnMm1yfZpyRCKD6QJCBsd8UovjBNqBxBfDgr8dyyC",
  "key4": "2mTu5z6RNXxqmxGqDCxrFvERFsVzQAyK1E4bJB4tGM8JR7MogcSX1k4CdZC7tQi7ZFW7baSiZAmJuYJJe1qBcG8u",
  "key5": "2VfJcSPgeGLyDMXaSSzYRhkTMMww9ALHmnWW3V3YVZL2usHEjGKhi8Kneiv2597jDTCYR9Y1LVq56ZUci2pzYHKB",
  "key6": "52YRUJqiRUZLrUy7oeQVxtfdgW792A3GRM8mwSs48wCvPGmPf2sxupVb1wMnmyc894vxWSR3ffrHpUEjFU7GGavR",
  "key7": "62P89WBHDBiA1FbWYWKhfvKyxHqKrTKD7pAoUPB3E6gnZj4qcmEXJcnC1y4JeNon3PSsjawWvSSeF9cmynxoPv87",
  "key8": "4yjdVK8Vf6npxLubcR7swhP9iwwZwug8fsDGjCPHvxA9GHCKrTHrYYehfdttHUkynXX9Gm56c8tiXHuTX2qhtrta",
  "key9": "22ZNnLJYstvgSpAuWAPF828PcssCKhmT8XtGutr92z36F77HaPws2SkLwZzcPMEBGehLbpkWC1jcjZ755zi89XEi",
  "key10": "5UD5WsbHdaj2AJknA6A4YPn6JYLCRpEsEBECG5EPMjyEezvSCESxKqByQGUA1fv7Ge6uayxmJGi8fcQjvMM7VkyD",
  "key11": "2agkTpYLeD97hJ5uDLP8pjqmH3aznK4s5xXTZdDhzRMZaduS7YLT815H3WVqTBD1U5dzpPAfaPB4rtCZ4nVZ36k6",
  "key12": "228v74zNFGBb2SSj6cqapYVdCwqfkkseqihBYYdGhF8Kbk5jHQ6BT4DHFwvYh65DxHAKgjZ7fZrpRpvJLtAjEYc8",
  "key13": "3tcL6tkdKmwNHbENVPv4n9anV9mPB9vX7ecpbgVejTXK99aDMgGDib3kuDFTBrKE31fnLgW3Y8EEYwS9m2NfC67w",
  "key14": "2gZ6sSCLMTNzacJJqFyicK1cYr489pPNuCJRipqjZgNsJzkn4aU1aHgfo8Ld3pCadZ32b4GhnsWoXk1SRkPvyJRT",
  "key15": "5ZvBMpovFG41FvALAB9xWe2GVucLtXsKBwCxavJm77NySyAniqdhKjeDVo8ZVZpLjqPvhwmGimxXTkJYBezBrCYR",
  "key16": "2zofrncNmRyyhKvVrzTbYBwx5ajKtaBQScSmaUQsBmRYA6SPRdRaUDMmaSQSWUwHwQadMZ3DfR9GSVEQT51jaiaV",
  "key17": "5f3mfgbpsXXYo9HmNQYZwH7ZRLAdGVQewoWBqc6v2dMd1JYRj5Hm6MYZPGAQtKzEW6MDyQFijJtUq3PB2qq3FQWT",
  "key18": "2EvU4NMiFtNVnuTzMEeNWU3ujBVVG3FEKQLUmXGpJsqVyiaqNsJ6nYjATQAUABqJxzSDGvyNyCuhVuu5ACZFGexH",
  "key19": "5G9sr3pA2tRD1qCYqL9UGSL9rkoV1XRyisMokr7Zw2wu5R42uDo9uFJpgv6dnG4ShhcV2eEVdFuJrw8xsH9nc6LB",
  "key20": "45oAGbtzsxnJ2Xb4ZkfJYqEZJjUSPfmJ12FSVc7doX11PMCBcSMLMdtnK6DZsWoDtJyyudRJ5QzUzdGs7kLxYsCZ",
  "key21": "TuvLE11crZtcsqXyuLrWukqsVGNJ4PYyzNiPC8nhHFAXeqPW6pUKqUoQFrCBQJ5ZEPXxUQsSijmTisERFKA6BUK",
  "key22": "5H6Hi5pGsjLPnaDa8auZsBKTV2zL6hpQSPjymE8DtFQuvyuPng8sKqe6aPJ35LJNgBnG5Tc8ksHkrUw4r74acC6T",
  "key23": "6A7MyQaYDGfeBsickoztXvqVNUu4R2Nok8gpCoSkpDpua84f8UEhgehADoUQNVJk5QZThxrCyTgWwcVvhdZjLJi",
  "key24": "4zC3SKAZpSLjdKdTfiAqVJkBeEWaY16srQB4a8hm9NjLN9VkFaTHap9CDsyF2gQQbdJNfe7NZJLm2rM1f5oDQyHT",
  "key25": "6mdYU1zkCy7TokAatWQXjEHYPPmiWg7aPUGNdCF72aRbxjVNTgURDj7w5CP9H97nMspp2Mez6zvuHzdXJv8ZAn1",
  "key26": "4rKZUCXMq4CQY1ePrkYchMnYTLzCzM7YwtUh782QzkEqQzEmCHth1qx9wNHuYYQs4vb82Qf7LyE1qeWAE9LcYx6X",
  "key27": "36TR74kPRGuDwWh7Zx7Z8JnLpVXFBpc5ouJvSNRH9HhJy6HT12gDysyawKKhfWvqUfhaz1H4o7wJzaacF895uqEW",
  "key28": "4957Ev1ArdFfE65kbEEnsHQ28j3W4MqrUuHe332fEQq6N8rDAzGtt11KhKp4PJDCbZeiSD2eTk74ZZbsiypuQ9Gq",
  "key29": "5svrpDJ5MZD5yyTZo8AptSb1SxQ2MyGbBFXwRFC1mLfeCcvbVYYfsCYbyL4cnPTSb7UQCudaR1gSkQDkdtsi4bBL",
  "key30": "3wcPov8ALQ4WVT32nkWXoXioRd5yaqTN4yvjNDtBucLQb9v4aJyaRGY27BxXHKMQArZH3X96W7DqKPdPyRYf15DY",
  "key31": "2utvqS6UWFoPzmizKr33YEbHZEbpKAmbo1VEvoybx3BHzLvnV6GJsc5MjALFQ4e4qn19oySUb7sJpi4389gxaP8x",
  "key32": "5m66vZMvtzZpLiMB9kqYuauNGaVzFMEDFxfzN6z97bUR5AhM6eti6KCWYnaYRmotx74Am2NUhLsKWTLBUgZ4AuXw",
  "key33": "vRJ3v7wkbiDFGDKFSfPeLXG6hSqKV3ja83tqWkDsRpiZSoqJAFEobMB2Sh6q2xZawJJk6qe9w8hF7DYZmHRGKoy",
  "key34": "4gTAy16nfdAhVnHQZ4T5Y9Ys4CG8H97jSyzYRbA9LbFySvWwfjnj1Yq8E9ykwEkbaUKgis2k8TjPvg6CBNFqjiNj",
  "key35": "3B9VnvZcuWbh6ZtsMrtB9Z2KE92Zx9WtkupfiqxvSAuSRrGkmXdBtSevQB7ogwaZv7F5nfvzCf7JStB6Bu7XAfbc",
  "key36": "5rnUs8GUdK5QgZG5P5FmR52VPiv28uNgcPSFhYGAoYiY93yVPFAbAkbNvWfJtArcdq5kwzCUw92a8v5ymYnm5cFB",
  "key37": "57KojHuW8gLdTMjGuSwSWQNuQYGko6KZCUrY2HyrPCNN61dfejBZJ9i3hVG96wuQdBT2yFWyLn6GCTBqeZEEsBXd",
  "key38": "EZXW4CxFdsNZ66inREyevMENXoSyKhKCMoWQZHwdtFcn1rMKiRUotRiTBK5pnKbGQoL1478C3C7ofbpih6GGFrP",
  "key39": "4Bg8VassF4HX4TTxiQuDQuAUtpBLvHDVNHdZkpyFDz2aoBbti9dc8Y5yFSdyFKkqmXG37S5KwjGHDPWntxcUWwaJ",
  "key40": "2BvgfY3moRgmssRHLw9q9WUujVeRPRHJdx1QpYG6TGabYfnmKiaxTQhHAbAkBxxCEyxe5UKmyZgrsJsy4D1iPGZM",
  "key41": "2SWRZYCMS8f3KRWMR5yt91jvDeLaUwcsiGBkGQkQQqCjRMo8gA3rJ6xvh3Eke225dVLz88tooEDiagNrNV2KkXKd",
  "key42": "3EtWS6dq29PLNEzk27u6GoTaZ3333ZyCvxm5ugCPf8vA8CUdSBcYajaBC3kBgtneTwJNoEWd4s7EeEXjHAFnRBBn",
  "key43": "3S6ZmfVNhpR6nrzMiK3QBEYduX8RNCTzwJRWJsnVjKmJwinvpQeuf5GwgMeJbM5mmk2BEnGXtqBBdEfp2dvJgotv",
  "key44": "4LRnSQrBNaicsoSEJsBKRmNMirPAw6DhDoXGiffLcbZb5zNMa4RvX3gi7aj2EJBZ8sJKcmazJDzqmPvnad48VwcX",
  "key45": "3HMArJzRopofPcVy2fkq28MX5u9Aj4WiveyvtjGfWZjDpFu8bmtNkBu4zGD49qTEXpvA3rWaaARHoXDLNCHUw5vZ",
  "key46": "g1TnGg9VfPUWqq5d7bycsoeEsWgSbj4Sp8L5B6ffXQNhwWCoZyhhTyyurjhZHR5MMGZb2y5VXYiQUFnqTnXGss4"
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
