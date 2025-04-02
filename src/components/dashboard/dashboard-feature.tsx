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
    "5mV9x8kFdj8gSWWNTYJxrCZcvN7NKnm9PLEmqjmcqB3u34bhTdr3BbCbt4gYJf5ZB6HtXjuNL3uTDpsw2SZVaptL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dp4tRCoyNtzYkNJkRYvD1FQL2pTRQe1NcqXtC8sSwzRLiU1QtLBZjS5hmegbZbjtneweVxs7ffFLZoFxncRPXG7",
  "key1": "5inW8veoPWXxjNBxgDJ7rqE9HebK1ap9ij3covPpGEynMwdquch7HV3W1gMhZgghXZCaACNMrjPN83f1euy4Yedq",
  "key2": "abkGWev3nNacEmNi45KFDwUUcNUUujDsUdL29dLDfFwm3RnoAXNsve8idPEbEyCAVMZi4Zmiek44odcdDAfV1gY",
  "key3": "3gqtT3UdafTZWjZM8a2HYx2q4VrCFMRhfGWrPbr8VzoghtPMCKvkbe5Yo7vUwuiuWGVWS6PQ5TAc1TQFodzbrAv2",
  "key4": "5YsVMyUxBsXSnBVvuRQVxXoau8xDjTP8mdRnHZGrGVaK3Un6CpmgyMbpRJ9GJ5nirJRMBZETnB9JkGQMBG9fotXd",
  "key5": "p1ueuqjKdbqykjWcmT1pv64uzR3kM5QeGS19FV9PMQoCw1kroPH5VBPs3q4JjcanHjaUWa2sZAd87M3vrVTw9dE",
  "key6": "4oDRDvDw4Nj66STHVG6xGCLTE1r8zDhBgZw9PkUvT7ECxZpWPwbgs2XVfzmXKEtwf2VWCsjjZzU1QjAVSPsf3zWL",
  "key7": "5H3zqTxxHWCTzm8Mb2WDVwfdPgYp5dEDkDKWCC2vwY7aezmXWH7UVpZbggh5ADXTCZwTfnEoC8mN1uy55urxWEEv",
  "key8": "3oUKJ8G2B5ALS8UtMXP1bishosck2ZC5UdzczgeAprnYHhkaQqE6MVH8utd79FZ6MqrCy3cmF8dA7uoYxpCuw9Wb",
  "key9": "2QWrYxxjCcUzz8TChL2fBSzJbmXHbUpsJUxbNhLuUy5k5EumiMx3W1mfCRVfH4SdvbczsxthPQRcp2aYtcDmWoeu",
  "key10": "4vcvEmEvs2W7uTDo31QnpunCx6XHM5QNnchjEo6q2j9sRtg9aiVUnKCTifVuyXNTF53CAyWxeKrNxbQ4rHY33RV2",
  "key11": "2Z2jboxLsXjcT74bzibzPv5PctUZu6WxE6zZrBMA8N3892NChAt9LwERgranmGYvXyMZcbZsdxMqUEXtHzMmNchK",
  "key12": "4UGySiTEJmxXdWNRuCw8eAUUo8ScbANXzofuohmJscxKh3YJdZiWAgtf4sHSHPGz85uKNpeRZaPKN5T7izxagjxB",
  "key13": "zs18iKQo9BuTgwoqUyRdVhKJbGX4fBZrt4mWDvoYLYTQ2EMfQ2nhfYa6t9EADcpBNcPLX8EamSFXx1thwnhdd4T",
  "key14": "41QqmrqfRBZ7n7ZvvZGwH9d1QqgRAHc5Q9QmKwEbpBoVTg6wUkvxDrqY6aorYicgYMUQeybstGWeDjxUADH8DYQ8",
  "key15": "5KhEuW8ZjERwRqkxn9E1DMTzLn7bprrfKFZhgZ8pueZUEQpv6DfBiRqGWVkNH91ii9ZhZ2897xxgsK5b2YYf89Ss",
  "key16": "4K3KM2Ervn2MwiMo92viavrA1X8dQTNv2ZA1cxL3iPhZqZqsXkuMS3bZg6PtLdanbtaHo2ugZMiHJZ1KBxjMXz1M",
  "key17": "3UF2aodnojiDsK8sQGUzwVQELwkTjPErbXWQK854TK81bXMi1uDyqCjgqWxCPRo4WYWWzCEE4d5xgN8R5CQNYa3J",
  "key18": "3pTmhhpo3f4uT6NdhkVence1rDYbSMBqdQKUGKnwXTar615mK4YgjjDtoni5b4YXw1hYNAgzo5ZLGaLJeKF7Gg3C",
  "key19": "2cR1C6oTq1AXiKdb8C3TqkKx6QNvvVqjKkhSZmbtiku6UffaBZTRmR8TeaAQTNCU2oMdUbX44dKEK8ob9LF8pKjW",
  "key20": "3qehSBoSKvRocRzfG6BCGrSuW6muRHyrffvJPimZcGf2jSqHnZhKLdY4CihDFgdrV1AiTTGuGyJ24kziLyKUt8vH",
  "key21": "25cGirmDuGsSWCEPDeJSE199Xo2xX73nNScxfVgCmnanWK9dqNhLEZwp8THcDLYDPr3LSbqgJnou7QBEVTp1kqNc",
  "key22": "5QvorFCpyHsimxynqYTH3zkYTdNQ7tFi5MR1CQB48Cv3M1k8wqQNZ2z12fPVvji36tvk18rMsiu1QvvwKM7AQYMw",
  "key23": "4nKk3ptiG1ktrDYuySvK4JbEnGQTbBzPJfGJ5phB7LspALzMccMV3v2dR485TtowTA8sVwNdHWqNDiWYBCqcbvSy",
  "key24": "3RmdRdenNKdyv8TjXYYHf3MLLDt9EZoL37YhhQg3A8SiqdmA5S78RztmA69Xhg87HZTYr4yv5aiKdFfWMSP2JaRU",
  "key25": "yGC3GEGER4qjSYV8ekQAucWrdtZkJboS4eG8LdKGcW7QrjsNUNMKfryXWQrBrGtN2ssNSgvNYwc5DhZ6dXx3M9F",
  "key26": "5NU6o9C5i4JbXWQt5TMmkadUToa5TbVRgMGnaNpPmY5KShaF8LSkHZCi5siLeY7RtNSSY9FbRsEkRGi9YSgfvykE",
  "key27": "3UUk7zBUu8mtPFXdCJUJw9oH2pNZ1u9eMCJTh1jx5fHK2GxFQznv8uYnxYqokjR4tnJygsLXKAXUG8QNYGEdmf58",
  "key28": "3sMuPnCVRUeh1ZzFJZxvvd1s5q6ViSu9zTW1ZvJm9WGYNfouQFtS1Eo5ERXcYSQ4rCVs5BuMUjsDTfLceBKnD2VD",
  "key29": "5QoJB7bfqPBhaA9pffEDjnMQ2F8zMgmJufUmmmGtGEYbP96wacSs5Hvc9gNjYFwhEvaP72jA9QfvA7QVmr7BfT5i",
  "key30": "Fer2zwKpDXwYArtwd346ag4Sp75svFLBdNkUauwDvccUVDQE3J1B1dCvdXyA2FG7jfQK9Y6KAZhpbWrGU8ePgLq",
  "key31": "45Darv8bbdGELtjoVhzGSrpXjTHiRntLKaXRba5SwHFEvJhB9BiEvxELB1jHtVAgr7gJeYyYMbZqFBk3DMSoHW8J",
  "key32": "64qhPXxZp59gAeDNfLS9GNo3ENZZuDtxHEkWc5mrc2ExNudNkFjK8NMTpRDGQrhzsQYo1khPz48jJAqpZfvaSxXP",
  "key33": "aBzZ6pq9PCYNZKTTML9ke5fbfZEywYWT1nTeiXjpaqM8U91Jgu2T9u4naE2cJ4WC9sqxY3kEn9KkgJdUXL4xUzq",
  "key34": "5L6aofAaoUxHtjzBf3iCtFCYRzofRNew8dAXJ4YGGa11QQQbNFjAWZ5mP3p1MPkjPJCkyAdF1fqNGkAqvrpGDpK7",
  "key35": "2D5KwdwqDubCow82faM5KgCMY8GiFWsHoKQG6oE215FwWb9iGe3Y43Xq8zU9Vd6xj7hmNwALeW8PAiZyqNFRy1EV",
  "key36": "28taYuzgXTPRuFyrbc7ZusJQ2qivgRvtGGYQfS6J9BYxAYL67x1JA3GbUcS15NSfEZKSqJsQ1dV6VLTw5o1Wja8S",
  "key37": "3UuosShWah1Ksoxdmn5Fw3R3dcd3uikF1pw1aHLwkapvaskMWaZJLUM2StDXDKkWyHYoJpRkhLc7JGxgRZsUQ9F7"
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
