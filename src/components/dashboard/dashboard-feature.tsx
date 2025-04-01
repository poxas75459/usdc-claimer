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
    "38tDehRJTs4N7LkqUGVr8pyJrRF1epTwAJX5wqFj6phFug6RBVWKZ8SQLDS2wx22Cqc3GJd1xk6hz1fRayEH7zGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pJSg4J7tVD9yxuKWez3ac6BvScJbrYhr1k126J5c8QQxa2J1A3LxYDq7d5ZUgp6zm7tRUqHB9aKnjcAtciFgaMh",
  "key1": "KU792EesEqJX4ccrRnSatiH76ab39u9EBCPc5av852acMJB54WZcgWY85K1EtEbP4HwQMcMXFERyAcGWsHrqJBy",
  "key2": "3XMm1wuRRaQzdJV8Q5iFWvExs4KZt3JUdEuZbhC5Aig51NWvSosmJGMkcbo3VYaukFhXKXsqY176zcPurTAr7YvQ",
  "key3": "2xs48suCNqirGUBBUXsq2m2CAz52TzrW85qT2jR5gqXi846oeYfnaLxTCr1ntt7Pi2zLpEVJTmGiztfRMZXgGFJe",
  "key4": "ZoLemAu4Z5UCQpuxkecCzkPU4vf7MsMfN527h2VAb3waQ1kddUYxdob7fpVrZqbN9aWe231eed14YUfRTchLYpC",
  "key5": "4n2j6vK8KrRCtb9FjNgCfSX6h5J9XKP1QXwqLYRytxbM9G5jvXvBMit8XTmk4G7X14WJkGMSUkyZiqwxodjvGEKf",
  "key6": "64Utp9HnAbGzJcg2ZMe89TVz3NmwFGt4DLDzFdcw9AtoTPkxGCPYeHJ2BDnpyPqXf4mBVwGCb1RZ85fk3tvNsY7U",
  "key7": "4yrDMjD49eJ299pkCDgmoG58a7zSF4p8Kp4DUtNqdX2htNjxBEGf4tybLWdT78MoFVfh8M82ceh17bJeFaB7bwpy",
  "key8": "5TT5X6emqXzYDfi6c6rxoacupq8aX19TePr32SaZB8Y424nbh9YP5j6qWgwTNgyMhx9TYNF5WtbvF4H3zqncmyS9",
  "key9": "2HSiZjPXTsdcHBRPjqoKhfbKeCVymQm4za8WpeLhpn2L38hSoJ5C6WsqM4aFyfPEPfH47oWVBsxyN4XtVP67kMLK",
  "key10": "4cGjwyv2oeRSft74mhuMn5qLenMmWwrdnEfGnXVG1BTRxrZq2sWvcN2runrwm32yzwn2oRxdzujQ69ZigfKvJSDH",
  "key11": "4f6JigpYWxgXNHEQmsZdePnd5udcejhVYW8EJETSALnMLn3uVZod9Ayxq9DNxwyUHwgjiQwdfA9hSa2ZRS7MRpJj",
  "key12": "3VXG3J3CeaWyLBhH1SH7TWTPm7rwbyvQgZq1oseCurT5DN7j7PCJ5CgzkYrWZNGHQBFn3AfcBJuTu3dp7jpPXKtU",
  "key13": "4M8YbPpcTRqa3jGPvpPxgW31S2jQ7rnXcFh8sQRPrw64KG462vC1ocLrkaSdzpyM4NG4tihTQR2n62on5H9R2eo6",
  "key14": "5rPL9p9sNAz9bBNYnVWY8tPCYZgraRTuMRfhNqjonyZru2AzRWeRpbxoMkXWDcFc9s2NfFKEFdZZcyeHQoYCM3ik",
  "key15": "2H1DTrVn2rmvYEvDa4nnGKUxSjs9WfuVQPPnajTBSU23BoxRXZkriG7edwHAyggzgXZus7Zzvgpk7cEqnnAEHZcr",
  "key16": "4x4hc1jUG2tCMR9A4E3wVF2Ch9xRK7XGFfWXmB6NH8Ywq8moazLqedAeKC94uWPruES27MsJxjHXoSdZ12gPWQWr",
  "key17": "47GzeWFv6JcU7HnFinLtsPWocSVoA7QGNRDnUSJV7vFdjmQuvyWYbWarETac5tZ6ezVxSoLWbX8G2n3m2JCiTmDK",
  "key18": "36JGKHpvLdRqzadvpBqf6UAwsRPhcme9wsKbRumADjL4grxLq6xH2fs4qmnJJsxcLFpq7DXRJGFoPYJzvAdLuayJ",
  "key19": "3WrfCgroBZ5DBr6VBz5D6ddpJ1F9tsipVtyho6DpJiSpMW7sscWrdxJ6Y16QshVjmnryEKWbx7xLp7q6P8SgHiUa",
  "key20": "DvFuhqXyHmtFgrkCBpWDzQ2cKnUAADbP71ajFHRy1Sdm6auJgRyyNSmLRKfob1vp6K4mgD2AJfLE6hdNrp7T9PK",
  "key21": "2BHbfGPeJBYGkwSSji3FEXedMKUQcKQb4p5L3c7Sip9v5fcRtyaSiBcn5egSsNBDsm2dzMc7WtqL93pt7GxSqdzU",
  "key22": "5QVsiHmc1asZhdp528DPafN1aRZNAkAMSP98CUQQvhkK2B3ycJ9jdM2LNuqWHHLRUMStuD3E7bgSQGnTX8ZxS1mR",
  "key23": "3tQkgCJjo3tdU56kzn7NwqErkNim7M3LCYCcL1qjpg8UJXoAnBCy8Rdn2XggqvfYcK6CfTNBLmMgnj2rKtSsFWgy",
  "key24": "fGnWGoT4ee7QVQHLTBVPZj5s9bXoXWmFPns1Uen6Y29gkKmx6fShMM4nccpUyaf2kjhiVndyH4HrhsfyCFwacN4",
  "key25": "4eSVEX15P7M2KZuoQ9mGGxKEjWfSC1ACwtu43YdZDd8VPmRZ59pVNjMEdr9uHP8ogMdLq5v6x5ZiLFPM4SKM5WLk",
  "key26": "2XKGzZjVNUH5fijtxAUgbGEUYW4i8A79FACPP8sqcGqxTH5zizkXg8j31ddzXTTUJyWhYsNbp7Lrwjyt3Lkyc3NZ",
  "key27": "LHKzchdDizwGWWTy4rM17d7SnKE8TmeMYmzMdQeJv5Zo3LTo4h3BZcAAn8z2MKe7inYg16xg2nZYUE4ves5SMoG",
  "key28": "XgzW9APrjedC6L6XjzjDJpwNK6bRMJb5DK88M5dBjhzirYWUxRguujHzs7EpHuqbHA7VAakumMFLZmDqz767ZZL",
  "key29": "2fyz7yjNyuuo7cZTkmh95z4StRLEazprJtFcYZwgyNfcRYtuzJL1kTLXbavYE222T2LkqmHYyTN8NBNiLHyJuc2p",
  "key30": "ErcDkkPgZ8hm4fJ1KDhU9bBNNs9bjynJRqnSn7yWXE9doVsfLBV4NAKXKNNt1yCEFi1ZUex3jBPdvAEZVzVcFg7",
  "key31": "wtxvF6vMpCKFd3tL1y2rhqvXiK5Fs8gefEjuEbUY3A7tumoUsPhadGBE5YmskUyFje2gJ3u92qxCQrudmaajDdM",
  "key32": "Ft8EspTSKELF2ywY83geYdDELXi2RZH5EJSbctGVjps3nGrDVqBd4zjZZVEV5vRTowrzG11SBivWsqt84jnxRn1"
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
