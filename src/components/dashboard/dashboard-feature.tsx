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
    "3WNys4zLo689fcjNWzGEjeNfQEDzj14vbs74ogRcPq6EfseCbDyPby1LfvVA6xWfqi7TXKEKWmkT8mAgyPiQHXNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SfFCyixnSntrs5JnJVYN9nY7uTjZkAok4V6t9y59SwYyYJfmoWTojzGJr3watTTwNfGCwrJcuHGcF1CDw4bayoc",
  "key1": "THmUd9LvFLuCVK1h9bbuW9Vr2ieu78gy312LFy7fe3kNhttHjkP4ybvHjhRRmoH9SMXCEuzspjr6jxmq4Xeg1L1",
  "key2": "Agd8nXk7ZukFUURaKqXEu9HKbVV5G7czGqaiWSgtsZqfF5Xe3vmP79B5M3UAivHxbWiVVXtRDBvvkQSpa3oV1tb",
  "key3": "qCs83JV1vn5krkiMbMNrMyWhxaJ3mtAZCpvdEW4zkJtzYhVzbw3WFH43UqNZkSTP2q6K6dztZ69urmjpDDQdXC6",
  "key4": "5Qy1mrsq7mmtXYP7YGvu9ymHWCprrAQiJdbByprrtDG9amYLKySNN3UeDGQSogvJPEWowiMH6R6EzJjshjgczt1u",
  "key5": "2z6vnYJRuU38Mi4DM6uS15m1gi2atieTfJURBkmC6WQCYWEQz7kRXH2BG3N8V7pHreaa2H4RJ8xTTvN6fpiTYZi6",
  "key6": "VA9jZ2yEvHS4dDx6kTea9gxsxoEYUkpk6TcUsoXqFSFAzup6miuNk3YWQSbPWL6vmeahoYn816KXBFsZzcsJAcy",
  "key7": "reqBT7hiQhEzHEX8NPvLS194BaAvgHBHVQagw8sicWuQ6cxMLn8ed4QVZRA6Ze6h76TU5WetiMNZaEe3zReynaA",
  "key8": "58m5JY6AioKRXWrEKhNdKu9vZJ83hqDE2PwjEvocGUFzwzU86bGTKm77U4pbfnNyuc6TfSv2xJ858yAuX69r3NyZ",
  "key9": "n2kPLgwQSh1YeE9myRRyGoLFURU39cvqRmQWcpU9PQqXhfg7XCNNmLbWTJpgEGg5dw6LAyPN4LVm9rD3WccbxJB",
  "key10": "2M4pzqe7dcnfoU88MKF8AbPStWsEzwYWGTDFwUjuVGFjKZ9fZVDoFKumLLF6QrtfWk2X1MB1PM6dv8va3Y6XxHyW",
  "key11": "22NhEoR5khC1BPSaQinhCWri7rFc1pdCU7BSQpcAh1hNY7YE7WRyuBEwTZj8DaqRDybHFXwgzFSXA7RuUNRb1aWB",
  "key12": "3CZv5ZbhcGLLvokaCVVp9pDgzDonPWUNYSkk6Tt8fR4MqHfuQ5ysQAJJwDLE6ULGF99dJZ68MBt8yfxejHBdw2kE",
  "key13": "95YsPqCXXVMV4gqNpAyx6L6E1TAP8iiLUQScXscx28iaYyrE4MQVFu1tFiUBjBze6gAo4AtpSJBrqHXMFFao27m",
  "key14": "Pdkg2pPMS3FV2BJHyREacYgZQhrYqr1dCmZgawJMXS9vFe1qc7w128CCwB3u92oirGQnYNE1tK6GYh2zLmgP9nk",
  "key15": "3wYavCxDUJMjf8sfSfuTKUC658YkSaCBPtiFsJ9qQGwQX5WVELsnyqxJRquY86toxyDLM6thHe6V4HTue2Xmgb3A",
  "key16": "zFFPC7aTxDxX2GBehK9bXLBmDoFybu6WKcAsJeNXbyWn4xrycoZeT5y2g273MoVcQUqeXohSw5N9jnpDqdpNpEj",
  "key17": "5oVfTBrMj4caa7ypsPa7ocT1xqA2fp9pkvemGmqXLRU8cKf6fAqU72warFMnYuHwHEidbPyxkR5WrGMPcnZKRJXo",
  "key18": "4382rAtRidQp1r8sNFVmttZwDR4SGRxMjj2id8GHP4vt7d6YzVfEdN2xsTTDFhSrXVkj8vTEQyGKkRDFXKfrZbrj",
  "key19": "5LoTedx3bCs6jxo1damQsQZWJo8cxEoUiKysYRpp1WG8J1peSxijKsmvLko2qHq6LFP7Tq17Bp1tkLdvbsxK2Tps",
  "key20": "4wMmJTvfxL2zCc5UGGL26kaLTfyEfh56vej7oYBYUDngSkQCcuEZpn4mzPXJYEXZPvyppueLwa11iQMQirzd4nGN",
  "key21": "2Z89HwpKcXAuiK2gExWQ3wgXMZtixjnbfdwGtri39aKvARAukHDDrbH16HibrEqifMPihaDcf5YSptjjr3fwTUaP",
  "key22": "2k2HwFXSUx2xu5ivVkuDqYfMdDyGpUeXYZPmtTrnie4ghYmdTxCMFuiYdd32XinzZ5RvuME4A3mDHed5USM6eVyv",
  "key23": "UhYg8xjmFNFE4JFVE3V9U7vivtmmxpPj5vnNBqz4UDPFd4hACbruYKZe6x1HnLr2LZvvbFLRq2CQ2WkQkALwhKW",
  "key24": "3VdhoSN9sZ3B4TU14qfvqfp6teGHqpe5gYWXrQiD1QYma19qk7SJ9Dmtw7vtQn43srWbmmo3ccJt8E5Bs2mW571U",
  "key25": "4LyT8rdSwDuCn3dcXrufmvCthnJcSuBAkwqMbVNLE65ED6K48RCvzWN1ZDC37zhfYYckdRgxSKCHwqxzrcYRgDyx",
  "key26": "3nJopWQWGcJgH34b5j9BxU9Wy4cva6cumJb7E6A8BtYwgZFwj126SBZ4NCvCbNBnL7gNdMvvwq18UzkWVvK3N9P3",
  "key27": "53eQ4xbQXqNi9MCspZvBEMubRDYCtYcqKgTqwM8HN4tjmJAHCLD4wYDHZcNsNiBxZtifGZqTfJBvMChH3mjYtFfB",
  "key28": "5S2G9XUMEc215aQ9BTaJqGTjUcvGq8QVn5HtaAMNtMtWzTkEebVM5siXBsERzi5ues9iCJybYG77Kwwqgs52UAwc",
  "key29": "2v9czXXoNkhXt9qubwpC7w1KAQBZpTuk5ffTE8TfYxJuT9fpeUGymDLtBpWkRwS69FFx4jrcwAKaiGVuvvNFu7HU",
  "key30": "3YcNZBXjPexs6KbqfhzonDh8ECzoUgTFqdVYPErxT6Fvq2VGMVWUpv67crBN9xTrKjcycTKQ4N62HVrYHLEon1x2",
  "key31": "oGGAqPEZU3Zvf3B3XodYyeMJNmfd6xwNz5auqHucHfHX3FcQYqsmbgCPJx5RN4aZYKgjuUVWda1P2AaJEm8TWTH",
  "key32": "33rczU92grv4yu45RjPkPEw2Ys5KcsKYbrpWpLFs73vAjGyLhah4q2QeJ2Cto6haMB9WSGMRR5eCv1LyHQFsvYDx",
  "key33": "3EHi5FWuv74RVLcySFYB2Q8aJfDHrkBUWtdDHozpQQghSsXSErYYmyNRWGZ7JN5sAQtfLHYrX2ygJe9UUjikUYYb",
  "key34": "5xDpoAgvVCYefqMs7DT4Q3G7UQqEb2yB8ybYTF2FGrP96ocngc6kqnb5nTcpANtmxaFRFWXKhSHXydMyudBYKNJR",
  "key35": "5XRBPdaq1jRhZEFDhBVgjEAosNrP1H7M3P5oXUSMRshG6xeQcTxC9q3eQx8MeiUYyAcpCGznKctrUQFxtL2KiYb8",
  "key36": "4b2ym6mknrb8mpCFAdYEW4Zjbwdi3p9sK1bcaxFqcCZVqaE8ZKHYvwL2pnfZSbZTaMy5TLHgbREazEujr7EAhEFM",
  "key37": "4eBekKrLLM13S44KzTmYbveUaKFd2YKwQz4EfnQw321j68K5N1D2w6ANpHd8EHWQES8683itfjqoWgMbFEcHw1sP",
  "key38": "5GaRDZYYHKq91jFH4VKE5QAjhDxLVpMPEmVspw9NxkufMDCnpBvQqZNsDksmWUnzfEgz5WjjtW3h4kFaBWYQrJJJ",
  "key39": "FQpiA2smAeG9cb19gQ3vJR85sEm96ziB4fmkYnBJqyfYCpmiS6dTTrXZiQwL73xC8ZLBrgc8TyHcyhAMQcGRRGH",
  "key40": "22s8i2WoBqZyjDWfddkfyKqSU8Ta5F3Syqa6E8ecH5zVZK5PuWPQpGnfRgLzVYjpncF9aNvydCUi9rnEajvvNQKW",
  "key41": "3insjoFaR6jVprDWaPydis9vFmAc2ynejPNLiz4bs2SDF3Tx1SARMWkz8h96KNfWsZvnVWjQ56rKacNSDx1rpcSG",
  "key42": "4tbnCdvRz9ZE1ovJegrAcpihrkZzZrcQdCwnyvxz79b3gWhAg93NUY2pUR6h1JFd7YRstyp8Kph2jFSdgA7thYQ3",
  "key43": "4LM6msNx58EWjQaZrDZ9DhzMLtPjLGee9qBbtuidD3RpAMbsSGYoj917gi7e8oFKLoKZEdWwN41GXMESsp9uW8v",
  "key44": "37tYwwh3Bfn8xTUZYo2CsB32ymA6NdaLzbQNKsMLz4M1u52Lg4hf2yasNNEuvVeqQXPBQTtU3twfqc4a5SYUdVGd"
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
