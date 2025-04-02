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
    "3TkXDkFEZcbyLedFResLteWe1DFFgZZUZavRTwy32TYay6xvJibkPjjSrnFnber2ekNNiab4jFBzS4fmewjaUx4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nPjGjHvgETdSPrhhxGdYWzvktrhqJyiS3KHmuwrvcLqWB9Jvs1ZfarjVuasHPvifbow6NBpmkBJBeNP92JbysVb",
  "key1": "5D8beUeZ6RFhTPL8mxbB385v2ZAnn44vtZpxbTY3pab3kdEa4x8v82KBrfUUhfnywZdm3M4wZ4qFwzBww6eLxwUB",
  "key2": "2KVmNhruCA4ce3TZDDAqQMgFVcsJy6qg55nMiBTM7WyhsBvNWRDofkLgeJVkXvfwyqmowah2YahnjYY9fDfX7K5G",
  "key3": "4W2hPFpUpCVXDCPjPNz7xCLtQCfVMZKSzfdP2AvJqg8ZKs5EhuC3zymW3hoiMkBSfhqcd14K4S3iLyFcgqiCShXH",
  "key4": "23hBD1kN5SCqKTvV4DJk7W7Xi9MCmygaRkbwZTFBTVmDeQRmtii2wAoDUgUYr96tsDK4vbZgTDv2c8QH1kvBa6kZ",
  "key5": "562C61JSkxodVTERoJYr9GwKhcx9qEdqt3nDsfVZbPLRM3joekKCtor7VhfK1i5ygx6C5f2DtSCeEX88o55h84bn",
  "key6": "6HaSqiFFZiyhg3PaM5dkWLGTpKnR1i2xBuxmXtmcLTPWiqzhcviLZxvEse3udzyXd4yRdz9WypmuMLBtrwtckXx",
  "key7": "BixvPA3iUsKZta3u3h8Gf56kgSjEmGB52dYi8HgPbhvFKCgt3xhuB6RD9huQSwryinwihUp87iPWLdUytB9MCwV",
  "key8": "2zAr1ciHPQQCf2RJWnf2RhWQZ7QmJcMa9wbUcYWNfwVYM7mPyiigFVSX4QN9RqxNt7K3tRsVUtEoHCk367pUb7WL",
  "key9": "4eh1LuNqngd5oUq4yAGE7LR3kjZrdRo4V6oDQDDPMwjYpDKMue9ZNUA52sCCRvpy6eg6FYRiJKLhMv4t6eACD5B5",
  "key10": "3cSrjMJTh1fUxFaSfJJSwZM3tM3gtsGpyfUoCJSu8ujqfY6iJiTXqzTYYQxku9vantkr1cmZbLemChELgGYB9GMe",
  "key11": "2yKriSrQwnK5AsUTBeg8RhizKaCdTGSY3Dy8tPqh8aWyKXZkZ4aKrUt4Rm4PSETqspZBFa23zgZW9zN4UER4RqSv",
  "key12": "55esFuaVD3Gg4HLSSuf48Qq51xsPYVbU7vkktvpuB7zaZu3pcA2Dzxtuac1fNuRaYCtWKDb6t4W9HYFLDhwc31mU",
  "key13": "5VJWvQwafgwxZXH3YLBGcKHUBNEJEp5iWPAb9PcQheoaLPiNbFJW3kfUkUVVVU3FS6fkaBWUtP6H7uyPg1zQi8HM",
  "key14": "ab9CL5rB1ea6AsKtwaFjK37MDDfXdtbwbttKkgvgdBNTFk4zdhFBPebaV1ZoVwAhjLAg94Qe12njJqiJKiBv5JT",
  "key15": "5VKfjx24TZ1BmARCSwGkbVMsX8wYFXFj8jTX8iEPjg8bjrDcjoAyMA3Adys99JQeV1f4qvcLT6LRAvbgWsXhBdth",
  "key16": "6223VdDQ9HAyF3LRcENuLbTxSqEdzr7N22vNiUsENA9sQxfyxcuzv34fcaL2XtE1DwwypWDrCKLxwKQViS1j8HLK",
  "key17": "5AuQ4gq69TC2tG5PxKmebp3cjEPReGveNKCJbwzFmR4csJkXrKG3xGhJKVJ7CMQoYPdUC8PfEW9AV8JHmL98dVR7",
  "key18": "5iDVZmLaHGBpKUy1MEojDD2KT5REyd9xp8aiUyhoobaik7i9EddNinxeSs6UFKavya4HwRoPFNVaz9f4w8zmxe6x",
  "key19": "2iuGHG95vqJp9Eeec2aFQxkmCwJ6DjW3ZZu3zykc51VupXDxa5sQgYbJm1MWrhTBpdjmdEZmb8ubT8bzPkieG7Wz",
  "key20": "2uwhkVrRXkYpdCEQmC9W4tre8edb7BHmAKw3x1padTSkzd1CcMhmzHpNPyzrrL9Ffe1W9KSjRLntEW3bbUGkygwy",
  "key21": "2AAGXBaRyJbsXwTWW2dZ5jvAYPX2z4ZrvjsbyZcWQKA5WC2HXscL92tmoxqu8Eu8ABcS2UgK6qDPfK9gT79pSQPB",
  "key22": "2ncsTrRAuJfjL9pUJ3yBPgR8xbH9YMniHr2HMRJE9kQmdQbrB9eLuT1GHDYDVahQVzgpt2NmzVWntzKka1wAFJvt",
  "key23": "2ZBZWScehK3Fvc6N1araExt5tNE2aiBuWytVAiS5JoCc2F3SdmjZf4EzJwJepGB4HfeJAV6d8hzfPKuFbDzpnMbM",
  "key24": "5L7X1AWby4M9DQ4qWnUbs4ztRJXKpmbvioEGB1RE6EaML38hsr43KqiR2D6BYfXRdmPVqCeDSgEpBfGNeiDpc9ss",
  "key25": "2VWUVba7VuJDQGHyiMLjigu5wZgLuaM5koYUbAjMHnmYQSL5nCy5CZFf2XuDKTutjkSeZYkYCoY5fABwTgjtcdxB",
  "key26": "5vQYyvzKLDGyq3cSoPnqL52k4Gq6XDcxePZ51Sqz2QsPokPBvFCTpEMEcMf1XdFb17fsrxKWzRZsCbyEVksii8z2",
  "key27": "2NJvEeU8GRzLVJeQQQe8AHuhcMhgNWtmLkXLCMWnpm2LU1phg6cbfMTLTRafi8F3huDrSufLkvMS7pR1sHvHJKoo",
  "key28": "5y5sD9Ab7qEM8q1bKiktcc1iA1tBKMG8oBKFmec9hkHz91eHJnh3foFDSF59DGMJ92vtoqCrdfBGpBezYTYBqKyK",
  "key29": "596L93HniiYTYKRW6GMPDWokDjY96e7JX4NgHwYzs8a8R7JoAUX9kLKzgxhakHtEfRu2K4ytMWwFxGfTNRzcEm7i",
  "key30": "5B4dmwLfaqtjsa7xM4G4vj72rHCQypYWVozKHHzTunrrYjr1udstbSDJcUBaLyNpsYFs8Tff6b9jA5MEC17Mjjd7",
  "key31": "5Vw88MU9YHhL9ubdmwtSWTSFxTyV7uy4hohDV6hS1Axc5iRVzYpcT7ZMJ1DgJ1K57ChyEsmv9fCmDqZPsZrT1QMk",
  "key32": "mMZFMphS9dkrpyLn9JVP1vRojmsgtri9wP7goRe4jostyvfUj8u8j1kJX6cYxgSAx46jKsxq1qSWf9RmzG3Dr33",
  "key33": "3Jh2TEd7oVHdYoXovvZLctftZSLcWxHdAFjEZVCMMUgZLd4o6rp68shKTfzV7TuX7sMqZRkSJRRhYv193Z5rXo8u",
  "key34": "5K6SyPFmnXWtdhHYrjkGbFC1B6fWQ1f1Vy9Xxq85h2aRhExhv6vCNK8HsRvBkZNgS55hXio7rCsejJVYXH6h91Uk"
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
