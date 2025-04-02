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
    "2Mu6jHuQS7bunVEuXfjYeHziTHfh5JpYt7j2NDfjYgg3LcB4kaC3NxtogPkJFs35eso7SQwP9ucgNkTbCHrfZvSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SSdhdcrU1Ju4jtV9EtiMcy6NJPyezSrP9a3YpQ6HAda2GM3rwqZgt9nh8dkbPt7E1psjEv7EFC3WSNuaQQofwUu",
  "key1": "2iDTnY8pVuuqYYMECWjCHuXSYpY29kg7cTXvNfkBY4TM2isK6xZv2MccPZeVu2EwsBSFi87c7ybpJw7ub2Vk2YN5",
  "key2": "583eZvBmbtNC6d9x5FsoAYrYGuezi5mfuxufUuxXtJbiFusxuhLNi7ZX1XTbbzsW5maGCKzJuV5QUNMicNgq5mPU",
  "key3": "5HLQJG9s1SwYwza3byouY69iqKZZse1978hwmG6KQ9D44Kp8ZaCXXEBEpmEWCNMp6bcvXcugaLCSnEV1kmLXctLA",
  "key4": "2EjZHJVhMVoTU8YoRzh2Qw8NMQHfVPMcvXx7KzUqe4JoxMybKjma2zf5vfBpJdF9E5EMGXoTY1WzqXLoKU9w8NAW",
  "key5": "4G95ybiozC9iA67HWdzEeja34VUzUwch3eQCEFMe5eZ9zSPFmajhg8y3w7dmHASkuEz959xzF4P8RPKKPN1Ssy3q",
  "key6": "MvdMfgVDwe6FwgDsqVqMTD576rFgPLcKhiEWZE5juDEi66LC2QE6HXYvoRt9syp2BjHMU8LC7P2HZcpTdBnY5EJ",
  "key7": "WiibaePQoLmefQuLeFXrJWPeQL3Jp2fxeutFWNAJitLAKF5NMPJDeEkHteWpzoCdCGuzgqEGF5GQjXLH6gEyiBv",
  "key8": "4k4yBM4fsfLTSmS8UGhELaWoTpZ6uFJMU1kS46YSTw3HKY5YcWvXM4SQePUUSzkYbEuXLx8fKwLauhd4sjBwRi5G",
  "key9": "5qcD9BNPruNEGNdLYYaGZHYjpPHTZP9Z139PuJGV1XhgBqeYC1HiHe5dy2XsCxyEPyAVWdYUKxPFzo26T9HEVhSc",
  "key10": "2ArxRnDSiTKRLZro7bRjuZH5jPBV6Q81ayjV6kxuTRnzT8tfYqSyWu7bu45QDEm17fU9u2UcioNtYBzd13zt2YGE",
  "key11": "ySaNLgww4MH4DHMSM2cDUukgRbLqMz6fEuBrYzqGnUtmXvBLWxUWM7aeqgGp5miiyMLVVjV9HKCL1idxDPUymjD",
  "key12": "53Hwn2bQ6h32p7YzohEvSz9v1JbzSsekh4JK6XAduSmqDPQ2R4Y5Py4NaNdsHAyM8ri8YevrZ1jyjgwAzZR5pCKZ",
  "key13": "oXK3wmhrCVqJeJtteR4XdRZGWbXcCsKbgQVpdWWVFXgnpXapXfYy41cWaEB8TLqQ9QcH3hpNCuk5X9sr8DsBm42",
  "key14": "4QMNv6Ud2bz6XLtibry2fvQApAuzxHmxo7rdyK5aJUhYwkeWYPGHVbkwyF4fu9gjuHEiJYTK7NihFKZrqBxcw4DT",
  "key15": "46h1vaDwx2bSW8EiFfogkYu6xon3Na7oR6EWzV6tjatzkYAxqiqnYY8PBePxUKHjUMh59dGL493TVF1a3ANLMX7t",
  "key16": "FkYPNxdDa83WqUxyaWpGFq5VC6wDdsTBNvnK8VycNv7EXgyrjBPkYv1zP6S1rHkHUa2kaQiiewehDrQcshLADMY",
  "key17": "2w2eNEHpYm2iLtaWv36H2mKqaAzTSBQznmu6Gpgjy2zr6MpZ7ZDF79fvpAEi6TXRjYnyTuEznQdtUtxLqXMfBavh",
  "key18": "5ZoBBy5HdtBbKpRmquqguY3Qt6wGwEAHyaHCgKMwpyFaFKA2jdA47xom3wYhvTod9q8DDRkavAkyRoUywMmLVXND",
  "key19": "msYADTag47Ln98AYrW7zuT6PotrYqmEUs8EcRkGFHkSN1tyCmZuv7hLakMCgYry8jhnXsqKavckG3qgcC5LEBdQ",
  "key20": "5fB7eBRGc7eZTaWsGJdnYcDWR9Csu3cU2boDWxvnioz1pSdu2e6Yir6f4NyaZnEnvBYPrEbSjMrRQqag1Gu5VzM6",
  "key21": "4cyyQ2TntAtdwf9LZditx3qa4fiWetq2DQKyBRPCh5yyo6QfYmbtsZ6s4gGNF6SQ6kBgczgR9g4sRBnGCHCFTcDS",
  "key22": "4gSsaMkWMr1oy3KRW6acjPHZexFXHUPY1eXu3qvykRxYFDv8fGGngrHoKrRJt5EYjY24jviccBc19a2RXbtNQpFa",
  "key23": "54SRpJskkhM9PDGxGUb6SKM7iyaiDVvA8cPRjTE1cHSf5ppo4ih3yNAxmwqvq6qCFpZHqHUQaCpDWQmVQJyt7t1H",
  "key24": "4QMUd9113VfB26kFqf2dvrKpnTnzNYSrkBxNR4kBKeRniChcGCJRSqCmZ5t2sZUaQHvSaygq1aCzDWFTfUH18q9z",
  "key25": "5LihWhygpTDW3HdTcHAy1mZss46ddYP2CSFj8VZusVH3aTMBKYZVyXViHHfGSiypTJTBhZiX8kaeCWKFDf53heR2",
  "key26": "4NEDaGCmH28PzCeS72nQVjCHyF6PZnWs5u5TFYAeVJEpC7H4g4stxqHo2cqx7kvFfwLMoiLTvcKjxmkqiwP7V7rP",
  "key27": "3wWkAsQMWBBvbmErVuSYZsb33avpUGe8hHPKkMbAYkqySQkzQL9eetuufRbDV5Y5DgcxhzFppSiV8wTDfecSCX7k",
  "key28": "3kwfS4ZxPcTm4p4MMTe83yLMR7TtsAFXpM9LhFTSpqw79NPGqA1vLYRno8vcHeYcPvJNxGAf8BdzSiSQeezbQHFe",
  "key29": "8tCuVL3BpsusL4z7tUrcqcEr7uMxT8coyS8LxTiMEWQcq7Ei1PyqohqpjDmrpRqW1F4dBx6eXDzpdApEjmxREwN",
  "key30": "C8CS63bKUtzpsC7JU6qLfCBeNn1uR3pcNH33AvCgrnuW3xJsZHFtjoYPyuoujRFXdgHn7KEe7wMrfNxTwhU1v6V",
  "key31": "59amu6nqcMWciazFGKV9tr7Ge2FrentntTzPrHXkc5QTR9jwqKLyS8xhta2ETkkw6DkW4RVs7dSqi7u1zTn7sWoW",
  "key32": "36F2SuLrioMWDUuUXAS4bFSfYgTwZJZ41sB7ZbrkkgJjNxUZfjLdhjvsB3fSyKAkBvkJor3FyQwjNMcFbqk2r4dM",
  "key33": "4aaVwfbTbeNUKkMxdMd96KA8Bf8R3RvU7nq8QyjmX3SGpRZHJR65JKxAVpJaPDLagbvCKQ4nAonuyFQ6AfwVhMs2",
  "key34": "3KorWRZ9otyoW7Lt2r4jsSYqbNFBr38LbnMJgHL2o1qEJVkreHit6tDvy2adckjCShGXDQRFhiuCRPQb9gdAMsRc",
  "key35": "5M79kLfpVUaSscbDr1WT9RtAjVzd9QRg5uGiZg2ohBekCwgDc4rYx8H27uqohNTN3E1DJvqiKf3qiamNQoATmvFM",
  "key36": "4GbvfDDUuRYwDraXPr6gfbSa5gjFPRhzYEFQokjdo5D44XWvMJCqynUXayv1JHEcvuh1sVp6KFa4yfYRUs66jULW"
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
