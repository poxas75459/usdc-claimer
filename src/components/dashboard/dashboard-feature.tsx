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
    "2Gg9UGZMPuDa3D1CzwBtGRLS77pRwK2QL12WujQNZBwPsroB5JQN7Ufgeu5pfbAHPbSW3bm3VXLoWNjWLoXFnrJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8HrG9HPpqeGnTupr8gkQSByUMo77sf3dtGZVmXVWz8AcSifxMmNVYkSBkL7eZmqqG32PqM4pYfBc7TkhTWAbaRm",
  "key1": "2D3Y8c4Eao9euNC8dxzaQUs66vugzrZW7DiWFkhxKZUjJTaRby99iDc9SqHnRP9GyWPRfHGUwrrW3av5g6ZxefXg",
  "key2": "4GzkJuCoKrNx194p7LyLwhDfjCz7yeRBM72dHAaEED8qQwNrdiQB1nTpV5msxQZJicR463dqt9XkNhP2fd7mmGy8",
  "key3": "5EHKkuP4bVTWd8nXYcwrrm8ip38ca7CpEpXqLAR84nBfjydW9hqi2wa1q1aqCewtkeYbFxXLVx2K8JxFd4qAM2GY",
  "key4": "3WEZgqMzRjFZyuVXBruhA1Q9B1fWiFSfk4uE7MRrW6NPQ7p6oX9up1AuLjuL5JZF4JVRW3XMyxtYGWZ9vr3abcT",
  "key5": "2GWsthVToQLjrAP7yDhhdLCpMbsZbW1oj8gt6xF6aLKZx4S6RA1C3Q3jxWWonPeJtztV9xc8Q1JxwmfgsfrLbcDf",
  "key6": "9fGpvimBGjuzkpdH7mZnDu6D6QD43ahsfi8oJyv3ESM9mbM9YiwTvMoV9nSP6wSoSa35U8v5BFP7eZFoasJx5R5",
  "key7": "4CGhVhZCaYfXQN4sSN8kUqgcskSK3MmJ3ZErQHUuVASWeLFp9W26zpwFtuhRCvD7nq1Xj585gK47YZJsZ6omvm8W",
  "key8": "65dW6vgjdKdg4CZpcs1U2EyBG33r9bKyNHokgcPHbALFaeZz12q5zYwZ3NV2TUd9DJKHDFk6pUueFRabtuQnfF41",
  "key9": "5mc3jHB4WqdKNyP1rUPqS3Aoy27MNM6uuPsBLN3bgi4iNgKHzacP8zdoP3LrH9LB8YQTPPzcxz6qJ7t4wKH6eQwZ",
  "key10": "58RE6pDJgoTV5XtAxKmcQZtQupdEhKVpmLWeXA5zqKR3wYYA2pT2mrpjD3o97Y8ekYoDqk8QyN8VHMsBNWsekbPf",
  "key11": "22vVUeJfVTvebtfXDHPyZuyYv5wsp5yZLtzQrYLmJv5u7DDvtUB2FmYb83gqwsy9Zt18u2tYAn9t8oBQjtMk4E5e",
  "key12": "jrbHh729GYrFu3FRpBUL7mvvRm8UbvD2NatctZJWoLYLfQXbDx4fisNLK2X6ugNBBHNA75Fc3GCWUqZVyWouSSJ",
  "key13": "S26UEGW2oXESYT9E9oK1W49vpzuJSR7g1mikrFcf4MFAiwvM8X3TNYoWumHQodPLEwpskoaW85e4gfDAJj6WCAE",
  "key14": "3RMWs3pfAinPL3FS2mz2EF18hA1REQGmjWmEzdDjnQVtkVVNdTqJzC7NSQEiD3D265foDyZ4tbx9qqSpeCgP2GW9",
  "key15": "4SDkxCzqmRACX3J6xLTHtPNff4KGSrxpk4vkpvSagNJWVEMAzBnWwvF3KYf97DUZSRjv5gQL8k7Wav9M8fZWY7GX",
  "key16": "2KX9kuX7JQU6SGES52F3VSTTxXxkB56cjrErHcYb1KQUTwyb94JGa87HcbpXUNk4Nx1JpJhUPj26e8WWDzru3UeQ",
  "key17": "4vj8Pt4JCDfQbvEf6K61LLqXPxCCsrZhmgyJg42kAnaYmE1BN3M8MDioXRgmz2oJ7yZShhemXQHBwGvRN7VXZGy7",
  "key18": "2adnDHiZYSWetESARWsBQYjuPAdZzWCJG7P7Rw4WCsmTZogcYub3qeDT9M7MJv5NtAQgdYZaUB2JWWQpAhS5zN8Z",
  "key19": "4otD16Afi5ohSawwWFZvgMSMW6e5SrVfFW4yUVMhhKMNyj3GSn6VDXN1RtnHttpu5DDmZWZk8e9Yh8RnGo1jFBUt",
  "key20": "5y5YAdaDFzVUUEb7YBNkKccJ9MwBpyv3WDmyUwm1D5gnacVhLAL7tmNjbSaoJUZ7wcto2PH1ZbaHmjSwZqTagd1a",
  "key21": "YAzUZ7uyAve8e3DobweKQnYjQ3FDpupuQNVUs6qwT61Hg7VaL7XBS1yKg331AUAqeiruSXDXvoFedbZQikZmaGK",
  "key22": "ezb2hzdYRcv6f3qYBu1xyAPwuSaDuN9kkU9JmMReuhk1yVLfd9S6qJhjYhgBZyZz1DQnVH2GXM9rQXB8b715eEn",
  "key23": "2Xdquzk9aWpHsBqhSyPQ4HzGzjTNpk5XmVDvsxMFrCei8deVVzzssCFUUBPWdZE8k3VT287bdn7pidwS5912WYHB",
  "key24": "2LgAAKa5JKsJn8ugnYnFx9eT76JmMAKsrUXgWifiRqd4XkYwy3WqXRbFVUdPr77VQoAB3EwEkrCzzHEZ1HjhaFUh",
  "key25": "5krVVYghK2yb1kVLJLfob5fpNmKq3Smx5U7oH9gTUKZJWxRbKsvjL8TNM6ndhKkFgSoYRhvkWbuKATQWGp8FnCfz",
  "key26": "36QLTdEaA2753dXjbH6oLWZr3sbiwBBFR39KnawjFayghV9je1g8GhT5gfKTdTmXP6u493KxyHmdijiew2wG3rud",
  "key27": "i4L4Kt4tcFQM9GDa24YXsh4DjEVyzxZE3WGJ7T7vNUKCTNSVURANTwV4abfDmuCgFABhR6oJtKHaqLCwga6DQbk",
  "key28": "4CWT5ejM3U6LukidMCssZ1EfTQVn3XBeTPrQwfK53coAwyKDnrHaPo3vAFDx976zASKJcY3FSf1UK2seAbM8LKHD",
  "key29": "3p73h4sB9LTKQPZZmsDZDMtDmzqzxNPbaCjTCWG4wrjJRFGEfybch2BVNdSbuxktTNVJgWvEbUtvNSaAHLMMJ4Km",
  "key30": "2v1VXbsK6gBfdXZckT8rboo9fndMcL76HottXio6vE1H4gnQAxEGAsEotBTmEJvroSHBw9AQ1EmL7TfLeAupfNCm",
  "key31": "3GhAhGzoYUAfFux6GYM95sidaLpFqTiU4uWE2HSFwaZdXskgpNqhUQcEHASuy9acMqAXSvedMo4pUcKtSe4zeVuR",
  "key32": "5JuMCnG7tQLRtxenfaeZC4sseo44KsvMv5RUadPVXD9oEi8QjDx8yiEHg6YcZtAFwDu3xASe12GzaL67MnJxrF8Q",
  "key33": "2jpBKX5nnK3tcveW1go5f4GixbnvWUCXFFsm4S89wxqnSBq8rLidem5bGQnGn4zd6q8KDVYsLib7JeFJyCRzfVJz",
  "key34": "3SZph1smdiDZ4RRbcK1A2zFvdUUppsmFuvfhqwWEWHrRJizRcB9o7Mr3mqkXiezjty3Y6dgdPpG7Gs3SPtipiQrE",
  "key35": "4ac5muosXPejBGnE45MfC2sA22Conh3pdCHayjE7rxkc7zNFZCdqyUrMk7jaZNvFy2wa84aiwPNTzGRA1qEkN7x3"
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
