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
    "3HXf2gVutntPJat9YWbxt6Gd6R8PgjqzQE6ZzEZnRRHMdg1ebrwR1T291gLn51aRyiDhXkDbz1QMnQzLxht7pd1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K8gdN4e8WjP7NpfKoR5At1QT6s9yAu5VdodzykcDUFMDWrAC7kSXLSpPkbdiN8LZyDnDziLBmTge3MTbwHfPG1E",
  "key1": "4pPGpiT7n4Ax96C97eTCsv9rP8H9CAQipRUpnPyfMeC8eWjUY6otcD9v3EDVTPXJbYRpYBuoQ2i9W75fwq4RztjU",
  "key2": "63jNj89LZrVq5uRwQcQg9WmwTokxmsoiKkXEujuX9AboxqufxugZATBLSr2KZrBVnGauULVKVYMZnKA77wtesQub",
  "key3": "2YMhvidW2RKgZHZpvUhCuRFFC5xZBxVLSpifLS1DrqwNDNwezXmazbZq7ATd6WMrqzhAMCEoKkiX6kCn2fYN77Mh",
  "key4": "5bVEVb28oKTThfqsrvhygJz8dMhssya98ZtEknZSosWWAZe1nPtex7SLxKDRc424Thq1SsvUDnNqaTKeMc3TJCEh",
  "key5": "2F7rBCddUpJkXM2VUQrAbHxHfivihbLi68HhdeoKHcrtnxKrYiVhJJUC7DQposvvzNMWyKtmdPzA8porRGWtPCcS",
  "key6": "xZbHCsqeUas9G2fTUBgk5VHKXLVG7VrKTHSeR4SfFWm5FbV7B8spDHLYTtMtVAWGXny2VAmtkAodjiCNSXEN6eQ",
  "key7": "4ghE2wymuakTubhZR6MHZNzaBKkje5x6sXUbVRpy891hKAd5v5SDEyKdV7HypuKVnDapJucywFhK45RHmRgRNR2h",
  "key8": "QTw1vpDeq88b92jifzL3mv3bU8FvF69DB9QgdngdTJZDae3U4TpMKoQj8aXMofw27yDwkxfiLMexTaqBAjnBgN7",
  "key9": "tXG2ybosQL5KrutM6EmUBKAgQKpdhYopMdNNEnKQeyTPyM8GNpMg9RaZdXRifdHTvEQXZWbV4tZCWWcL3RZgDeN",
  "key10": "2top1K2UUGwx8q1XdGufEQuWtx2gZMibX8ReeVEtdQzRWPSoSLXUcuvqjcuiWaxoitidSsWS53K56md3YJbsGPBN",
  "key11": "2krarGzH22JTb7LRvts4u7M2HHJNi36baAJQJiw58gTjw23fiZNRtH3yypUdjzAe4EheHg7NGz8HShdEKcsaHdRz",
  "key12": "5JQ1stPQoTT7JJBDPaPF9S9CCNsJ4xMuqAbX5SRosvBFuDVCqZXDCsGM3BpYacNqvSyNUxxabEfUzRVV1H1i2Rd7",
  "key13": "2ivNvtjFPrDHQNBW6WXGYSzZLu8Qz1MDHNQ5KwEusjTwKKKxntjz6nzYeodzovM3VXemVfMcnkRfg5Q5dXAsp1Ey",
  "key14": "3vB3CB8eXUFUmP7XTNdegwm83JgPEPpxxYVF4Mto5QWccLfqK7H4BHxGLiDVzq9kzJJeVrUJxySQ8vKoYSJi6RyY",
  "key15": "4US3WmRHbJGGRQxm7FUmZY6fDAxpWyqZYVs8DT8mbpe97eQUfjZx2fTRTwSk6sTZto5baPVBysNBvKMEec4Kr3uV",
  "key16": "223rBm456NDkAK6NCqtgvKG3QRH2EGth9uuWxMnhNA4VQe7UUbszWGkAfb3H84k5S7VtL2uNQ9jyPwTBP3EP6qcy",
  "key17": "46vckCpsWWcMyBYwcCcF6EFGJd6sqBf519TvCabArRPWYFzb9gG7GtpmFcwuQsLLChFfBuMcp4mKviRzc1Pnompk",
  "key18": "46t9yYaVbMMfHMpy9ZWZWE28wFP1q4QyuNcTseBHcnUS7GMjq2G1HhqViqBUyMAmFJp7RMoMTUBM2xNaySTE6fLW",
  "key19": "2eq5MeoKybf8aKyD6zyTEKJGtXL9iKVufxE9K4kQedhjbQjQ3gRfroF14L9hjminQE8rhzrM4B4uLuPSVcTZyWLK",
  "key20": "44AcCF22AjRR2Kt7TWsfyfyJ7n78qeCii3s2y7zSU1ZpEJpNxPQ5ymGaFN8Sjy4uvvkb8ZeCC7qyE8D7ie4maTW9",
  "key21": "3Uk8Bb8K5vDrA3WmBz12PDXpHrKcE6u8PB4GMpJruqScXUQTM89kHxLfyJjDQDrDJVQSrKMMSYcmKLcMZunyeuGZ",
  "key22": "4n971mxRAggj1dJPkxnBmuFYeHbmiYTYxVJHnbPtvhBupruks6LmsQgGDJ15JnRHq4KWeV1o3SxwXPSxrxpRDHAh",
  "key23": "4C5cuQojfrubPSc1xp5rHLKneoDxin4dAgLdM7CoaEndSAewTDRPqQGnCTACERqbAYjgSo221YgVSiHdbS9fp7XE",
  "key24": "3JBEHXQHgdfXdcVWvv7u7rdj9okmfYiQ8Z7UdYcL3gmJ4aT77v4dM5m5d72AR8Fn7AVNteKfYcTJKKuqZWZ116eT",
  "key25": "26Vr5Ret7NzpfyfsznMxpcau2zbsoAADwQs3nY3E1DHkM3dmZ6oMd4dXtLmUv2u4TFACLqGsJTrbUpWjzwMCFqzh",
  "key26": "oBxqBau2WquJLZNk4zwWZH28rneR8C76f19fGhVfrcg9gDxpBchPF9SB6oQy1guzBChdKcVikVXh64DND7JXYjq",
  "key27": "2JviwUaUiyeY88GGqjNwAu8NjkCcTaQFSiKYFEmmgenZdME7YfRAU9M6zTNsdUQqGtg52QfLXyi8FMSxzrXWtCQG",
  "key28": "4aTQVwFpYMHWucDBuLzQXfoM3jyXGkF73e25n4ShvgDkGqH55bYv5rn8AVATBbaS7bW5eVKFmH1ZwP4ekwSXxNM3",
  "key29": "5YBF43CpbYHZcjGKH2ExtKytE7cvqsrqkDRW7CS4mfZGySb3dKCUen7uSaVoq1chXyvk1LFucx4CN4bPtrP5R8vY",
  "key30": "3wKMBdd8sirCjhfjqgg47isXvtDzFy3wP6ir3wW9qEwbtahNuwKb147zorWoP7Y41aot7gzSiLgH6KceU7X2Y28z",
  "key31": "zb3ibcghEJdZjnPunS3ofKTUPSxVJX3tAVKmq7jwVsZByosB58zRY1iDgjNfPbaBZ8Ev3zKcUJE7P37pZ2DrmxU",
  "key32": "3vppWJK6wdKs96k1JDNx3AMyba1vCnWT7xmAudBxcVHrNmZHcyYoYzSUDqxZxzsdPhpHEo5Zb7u1hASUSL9DN1eR",
  "key33": "2giemQ4fcPSM2Knkv8UvgumxwYW6YQb3vjygA8j1m8x7yoeSPNcQyQb7AYVLYSeR87wcPGEhTf6pZx31BG2eCgFQ",
  "key34": "6h9NdcYi27LU3gkvFj2DB8JUxXL9XncJFxotC7J8YjCYrxE4ogojmLbjYrVyveoWw9LW51wtmiwb5GNdXGFoDhk"
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
