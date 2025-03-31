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
    "63FAegEr4Pms9ZDFSKcaAsrD7t7ahQw6PvtuX6qN3QcKJYJcxAbH2Dh4tdh5Ze471MsMXtiKTYaitz7CvXjss56t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SSK6fz4fGebVqWSu3eeDwypFSqUTCSrySqKqchKMxnqKPCNSqa9RAMccb3FwhHcYGfXmmjyZmrqhamMcjBaHztJ",
  "key1": "2uv9PTYJhyDjuVERD8phnEqLsGGmPEkML1m8Fti4KWRSiaTfcqKnD55eTfzfJWZBYZCYFRHuMzf5QB7g3dBxyKww",
  "key2": "hwFtwJoSCgTTb49JGxuKHg6Dkz3QRXL54uoTnck8qcPamv5dAtPfLX7oxcEr6UyMpVwEjdK3HQm7XredivwHnUT",
  "key3": "37DGoV1DvpwvGmVFaRxeCBu6xqE57VHLs7iVQVF65K1R1RnNUZzWosFwLMooTZkVobkhYVQFyFewM11kEoGWc2qR",
  "key4": "5uqbXF9LNSnLBQKgjRJkggPKc5KH4XgnoATTDQ7b5zoVq3VwdwSxRkgzQeQyNumjA1AnuQvjuNqvZJ6BD51RTWuu",
  "key5": "2zGrFBM23wa8atvC9ShKxp3847W15KEGxmu4gadsz9mJod7PRFzT6Qgm8KLt4pMGfx4xAnn7JwvCHV1zJVzGr5h3",
  "key6": "2nyUz5PHT9kHfVGM6C2bXynbiFegKmSyWWMVcByAqyfrZ5JgGViUMtAwjhYAGVJWpdhBEVSRM7CnHDYghb2kP3Ud",
  "key7": "5MY9t19JYgQJZLAqKFnyky9BKKLRLAqo32EBSpYkToCsLAp3NUbkKx1yTkN8TTYGsGNFpPmmgjHth8rrzJ2VvPg9",
  "key8": "LZtPdSYQFynwaLLg7NSY8zhzaX2ogK3VAZo2H4Pp2V6Tdaw7bWHPmqYXUebrbJ4zHUNTZw45H4WeL7xa47Yo1Hq",
  "key9": "5NGF567EExX7avgyYA31BWCDqojwcKdP3swKqjf4TSdy2GZ3Q1nbb2F55K7Z2WqicdT14wPrnBJ6cdF3JBtCHNpR",
  "key10": "4Abi95KdXLVis7CUhvDobha3m8YcJjhG8AebvgRNjYdincANGxMptdddFEvuCfM3w3dg5WVPsPD3pwnLiLxWvfWP",
  "key11": "47CtjoAiNxKVHhezD6JfNcFgVsGjib9UgHTYAChvo8992Mgr9hzctMLkmSuNhrnHcfNWgmdQEyZqw3WyojqZAN6f",
  "key12": "5iUrysHh3TcBmqtce5KGVULajuLuVLfcwp4M17H1o6VStiMWw6NJ5fW1aonc1rykNnkUwadzMC9MCJoPbykjKwGb",
  "key13": "2YJhm442HuRKJZq76DQYN3vQj9bftrwJMSibuSoKVJkshkHaFhcDvqWVpyGC8X1ghkE9WijAfRK9ZmaYmddTXWXh",
  "key14": "zR1QJbKjKukcssi3KbDy613zvNRaj5KZh1CnUYyqfN2T7TD174EWLowY8jPLd7jNRNfqtG1YDvGNKaAwWrfxpF2",
  "key15": "3dnqo2SsPDovwdvgnUdZj2EDRkA4NyqsUpvo47xGTVbD7MgVib5jJqjumdkcADv7a4mEhGXWYTaSMKC2rXRbj7Us",
  "key16": "5qQ94tQUMjozwyq8XaVHwrNncTvVQAH2PzWtmkJTmLMCY6VNTGCnA8gwnje5zt2rwHhzJFYiz3MnH5GRZJk2ruN9",
  "key17": "3ftPtD8g2BT45J7YqNgAmnW1RAD3EXy8YQmYtc5E4gaaoguAvmYbJzqgd8ih5fsjYZCK8HjL8GwnXjptRttPfSz4",
  "key18": "26irQ2WpZiZTN493wA3nd2qNi5nkjQfVYTERGtcJriptWYWMWktx7Eewn8PSWiGQnZg6HbYMha8d5zhRhnQ1pARK",
  "key19": "4eXbw8w1iAGMvT7r712Rk3V81WUPahnZzGonetBGj6dEG4r87d2erQkDD6hpVevrrQF8TDwfTCWfMz1aj4gor8HB",
  "key20": "2YJY1UDwCeBEuzZB7pqYDdVZ8ctfdaWDQ97qd4vTVJs4nnRoYBjWjhGm5zj1Gh5nsAzm5VguH49Q5TscVjMg5rd8",
  "key21": "3gfzbXtu17cDxFx5BBXSJC6URYdmMfWvtZvwUGYNj8L9pLFQZoQ5qHWn82zPMBzpGWHabuhUsqfJN1d4UTmTSVKY",
  "key22": "5PbKVzvU7ntHvZG8FsZTxTHvpaggjkoJ9zMabDuQfVUvidmab3NmiLrfhbvtPnmLfTb118pppoxM9RuFuvWwNJwV",
  "key23": "TpRhEVfxP5ThzjuUyhpV8eNoBic7hkg7gtxUbZazLa5VWE1FQLa5Bic2MLJCwKdSDjNLswDnQncN3EtUgxKLvGM",
  "key24": "WwgAmtaPMYH9AddWBMuKQXXq2x5TQuBb3R1EtjfuRKCUnQni9Ui25XjrHK5CM8bvqi1UNFVy9UDbxHcJsCHSF66",
  "key25": "5HX1GfiYtyBZ3LvZvFkCcRHMs3iY2C8J9FeemoDofAKCVX6YBxuz5KwYCzigL7MEn1stP3UUUkjP7tyKJNT3feao",
  "key26": "42ddeyHBCn5aGKvQx6YKZWBuvbFMYcafaSNaVbnQgqN84PKZpSN7UVonR6SVFruKBt68P4V5ZFRGncZYTnTdogRt",
  "key27": "2SLurW1qAfpv4Zi67naemfYxKdD4wzgJy9MxzjFX88mdmyuqZ1TJHjbBzRk2iAZpTyAXnzNfTCw2JPtSnpUkcpfv",
  "key28": "sKwWUrW4LPTAcxEdgFHnQ66gB82BGNfbQUTdaf8TiE6jjmLtNuNp9ZvEZQGkWMaXmaSDR6uwu82B8EL9Ny4sRWw",
  "key29": "38rVFqxLufzRsT6R6cQDyd4r962vc3dQZ8cotnpYECt87W4WYPricYTDe7KXrC1jhTUT4p1sSJFudCCZejCvwubK",
  "key30": "3wmVeSAutJWNuZekmFgmx4QZ27yPaRfv9BYFJqCejhBpNN5Yf1mLUffKC4mgFYGTHMQHK2aytV4MHzgoTRAAfjU8",
  "key31": "35Bg2LnSAWHuTtnmEeLKn6NHSCMi7n5iyzGp1oJfAG1eKwtmArG7t4P74p1jBEUm7RYDuHBUpjq67yJ1YyiPa4xm",
  "key32": "4QicHo1Hemjos8cAbCGxLPLkY92L7C6AkaQWwCaZNrKusrf5i1SpN1HeXtT45R6pRabSNJ4xtyWD6La2h1HY9Htr",
  "key33": "2FHVQsyMZ8mNvfiYneYM7A2ukZyeiwUJZ7vHpvWXqnuGs72TENhdf42CQ9qF2cdWdib9npnjAhbPDNiP9PUAmeur",
  "key34": "2qXonJfvFkJaRYkabNEK4qwzK2zDmx3EkWF4AQQHXYTgmNxfyPUvULkruHWX9T7J3sXuVjBqmyDuS78xtTLC8L58",
  "key35": "E2unEEDpwc5LNsby4xSEH5jjkq152BHPJ8LKioad7cdQdoG3h8GSyT5H1jf6LS3YpnCt7b39s1DyAegJcU7L1gK",
  "key36": "2CXkMW75TaCtVpgwMEVLWKSgH8HNF23LD8jh1n8VDkhfaoUK8uCFA4ZgnsySnRDTGKrBMU7AnorPZnXG3yXpycND"
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
