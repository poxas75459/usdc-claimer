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
    "2usdutWEoP7gKNHEVocL4Hv3Gq8fy6m4LTjxLpn8pwGE7tJbgsFGKy8o3LyDnddbfVyrAb5vkTYAHbZhciALXR9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34NQ7FjjtgAh7iDtrhBmfYMvPpDP4ibvHkf4MR7G3CdKAMdGQVZrcf9tLTTJcPECfZQF43cqvFbji4V3vgMu1g3H",
  "key1": "5v8X9bTaeLyk33bWoZBUw61gqXXGaNqKVMUumtnygAoVmyqoYzGaW1QtH5To7FJWpwBJJGrreR2mz8B1mgVmYXHp",
  "key2": "56qoCZBuwzdZKwVWnEDYEvUb1DnERapiR1fF4CGUoUskNcyE8pT27Yq8nVDv5oefavt3fNvbNSh2SQoroDNK1Xv5",
  "key3": "awmGiRbMWbAg4ui6j511okonj2uJJupFeffcxN3nXjuHGsqHQ4B33NZRNbsKsCjCDE7LAVH2t4AQ5Cq75ZRwzra",
  "key4": "32xUqu4usZ5ALpvBZJF4eLKjEGvLAzD4qZVSHH5yrtp6G7C6Shh3PUnEH91HYLMRZY18vFUfUgi6gVVqZHJTkoML",
  "key5": "5ZGFkx5C8pb2YGkUKMuaTzneHEJ7Ti8ED2xAJWPDBg3cD5zKncrWGMvBKCz158miXX3ete6uZh5tDArXVtaRHjzc",
  "key6": "JjJcQNgL5GsZvF5tVn6kvwQqbWYYxf1SC6zb5qzAV176BMjPpNBwx1ZXYjeh7WvFbSMUGmGhr5J7QSn4hAmXPue",
  "key7": "3z9NHCx3QLA2Wpz7VsEgvkZJDLv2q5KEemGJTSC1Dk9hDsfvroz42FbrTjV9QUnkc4YT6o6CST6kqHo43uKuBRQw",
  "key8": "hC6Ad9w8Birzgagn3mXQP2CxPaA8N4YfnXjjhxBYTowvQGEx1y17Vw1Ekh2DiwExTB9BNACNi7AQw8K3xguhmE5",
  "key9": "mZD7Y22nXG5asKDrJ8afu1yxxJrdCDZQbfmE9uuQRUEXRW3oCcepeDAwY7QmEasZiyB2PfmujhEEAXxpgNmtKyH",
  "key10": "2gmvss9b1w8ZT6DunQLzLAADgx7JCtW6zTDWsCgReSh2cs1mLpgBKLzL7v4GY7HCK9ph8dmzL1oEiNtpktrSuuLY",
  "key11": "4CpewmbhEUVvMJ13RXsUPANYiU5d2frRkEk8APP8myN1bNucX6LCd1Lx3cgVFN5MSHommnDo7azSrTp5Z1jVRRRq",
  "key12": "yRQSVrBgV6dYvwMzyxpoH12L8kKwsTRwpgHmy94GD6XyQSvVSqQqhgtqqXhuvvvp1r6ki5Q1sY4xq8ehxRmE7y9",
  "key13": "481LcaETLahD5wRjSMEBHbmheVGX8HFvSpVPL5ckEvt1AVq1wnQo5n3RqEH4n1hVGVkEL6zdGbSnfTB6pqreSL1i",
  "key14": "6Fnew2pN4xwUkyg6ro5BLqdqpDXPnVK793stPANyc4rWx6E5Q8AaUnzEGYreTczHbznBYsrnssY3DWkmZKH9Hbi",
  "key15": "47jYhrYvqzNi3W4kF1DPezUfQYBPbyCoabkroA3Rv4QcBC3qKpaLeyrsG7a1hC4KyB5yvL3hyMVBUvXzw1M37W8z",
  "key16": "BBFRi226pu63b3EP8hhhP5gtDorqMszsJFchbJtTinzeFfLuZRhRdxAhqasB9rSwZXFaTynt62F8cPN2moxmFgz",
  "key17": "TkGsF24QqGLPiuKTYzpB8jJBoQWgM3ZPrvDSaRyCnU9sRsvpxEcqpQ1GtvFi5FRAxNRBuHUtHMbZYRWGYVT3vWT",
  "key18": "WyhcEhCQRonQq6twwSKjZme1b9NdMEsqmRdNdsymzK3TXnGp1gXtE4xZdNoT57ZV1Dd1kgKPUrkPgKgFnmix54H",
  "key19": "4xeqB5Nmjz1xGcmMM3jfV4wv18hFQa2iFno4V79nMiGvr1Y8o2PLypnEUR5Qdxoo8XBWjUWa8RPPQds4WPz44tkq",
  "key20": "2PBZbohoXS56RjAyAWj3xpvDXSeh99DAyxseY5qsfoctpbq4gLNM4fNWxYK8hRRFc5BjRg4b6eJXa7TBrdzx7Ya7",
  "key21": "qBSZhXGKKg4G3aLpZZizsvrFd2uawtg768ZzzeqvaVQ8BzgMVhG23EDdX4nMif8pKubxDr6cEug11G6WCKhGuWy",
  "key22": "9uHUt1QRW5o7fdDswQvRFWoDV4M7gB5PA1Vq6CkmhrBgWraHtzuNkZCaL2Wsz8CuEEb6Q6w5A8J9aB5K7x5rboy",
  "key23": "3zaTWsfxB6T7css8KdDZ7Mf7vwnMfuZfyPzu4YCwibG5pdk6yaX7YKXr488s6yzMiP7aoYmCmKJX4F38dya5Biyp",
  "key24": "3MC8b6AXdnqmZDB4JYfRHFa5HJVJ8mdmRgQ5Az4J4ith52Y7JTnCc8rQAx8jdjWQkaf1AanEEdTgbUt81WhoZ5eJ",
  "key25": "4VWQNAk8SNynkjwBVUy85PRYH9TdoAV55sH3vZNsUJUb5fLHmmSkayiP74Q4S8UdDhvMpsreEVh1y9nzLQbuzosj",
  "key26": "2K7bBJsCmEpCcLtHs4f5jD8E5yUErtUGy2HeqsyxZx6GU6PSC4nWA2PHVc54RFotbGrqgTc5PBxLmvzBCWx6sGuc",
  "key27": "55p5baKeig6NmwkAC55FuJx6WYsJb6sUF8XmYymhkJqS62Jwd5MfqpY4U99H3vK3G7KgwaFts9o6AaiYPNZir6u2",
  "key28": "52Hr3n2HXja4pvfHJ2d8BGvSEa2wVKgM8vwTpsvETb5VU4sMzeZ4vP7gG9GtUoQ71kXm6WHW7X6dgGCGPdooQMVY",
  "key29": "8z3EkFMEwyLyu4CRQzCXJrRiUuBNkoHDWNbjWzoZkct4vRnzCcruo9VhPacYe6W9AmHSPZDkHdQRRGf9mZvRcLD",
  "key30": "o4C946LnApDysCmGBs7gX4BCerZfqmXQc3EkgBRNAFTzscRn9mAkzd954PyhwtV8yfd4WZQxBzSnaam5Xjvef83",
  "key31": "327ARWnpSXbYNacrXM4nBFzYj8RwukR3YwNSEqgnW4gkYuGWkkQjeF1HqEMbxgZpGQUtFFc4NSHinprTgiMMMRHy",
  "key32": "4URFnxrVKcndD25wjsdmoJype41bmBJSwmZuhMENMECcusUqrKApD3Box46fxhddbfYnpEWc95iBpNnxNVMxBEi4",
  "key33": "2j6mywgmXTJBuxKu8qna2aFYaU7EUoSY8jzXv8XrMc63Kiq4n2mYDrTyZgaWdx6XQHKZkVKCGxjLGtsVV6yjKty7",
  "key34": "4KyW52jGCbot9o9RBJ1fVzhjJYxwKynFYs7k7x8PqrN6XUwcaJEaoVt9eTTTufF7UWS3FXXEUrXAAeRkrZCftvsT",
  "key35": "PDenqcGDtNLF8paux5zrdJEwtNxUJMpedF4hBNKnu6Bu24ksucXJ2nUrmP6q9RJDMzJXnKRY82jXCifEtmuMvjn"
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
