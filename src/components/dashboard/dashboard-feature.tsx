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
    "2HzfnFhKdRRjNaoC163y6ooY2JeGv9G6LQr88eNYdwq9bqyLHCidTE218hbJwEEGApStqjMB95wCFcnQ3Weu38fs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fd8XkzetBiDJUnb9Uyax1hjSCMyBT8CbcCpoxLiVzj4AkHkKvL9hzoTYXYhHqxmqBfJ95Jeu6vorda7XzQYdjPP",
  "key1": "pYJyrUnxNGVSoTiXiPQBRv7518LBzWhJHGTQm3HpaYpWHEHAzKNSPMa7SsjaaynuRo5DReCFNVYoevnabyC5zbg",
  "key2": "23tTe9YxMqJ5DQXEfhHmgqLfA4ZYpxNw54Lisd2Hn9YDh4q4Kt3B8B1cLzUGTxvTbF3kUS22JxUvyb7YfPezB5EM",
  "key3": "3Z8yKUFw79bWoLUvkmspgdyL2wF47F1m1NZ5zkMYPgFepzZ1NAfAibgm7Hf26FnBorXVHeuaCKJNy63QSuSw7LLU",
  "key4": "4sakM7VFjdWSb6TPPPthDuDbCD7dE7VTR75rBuHMAwJLsKNLaM5Bby9fRYhz5HouZBH6BXELgeb3pgTyL6P3pEof",
  "key5": "HY47P6uj2jexrAKqX7BeUbPFGDtRGbVZM3tUfrjHzXUwVUcAHaY75N2A3nSUVYwcUpALpJk8M3Bm8jPNrCWWUiC",
  "key6": "5Eydx3R8MS3FxKvqsWDHw7NRfreanDM4ToXWgj3BRgWYsfrD6gncMyphHrfWTG1fpXyMtS4nTr4h3tbSY7zneRa",
  "key7": "2HnpFUXEwEu9cHifQ8vd7QH7avQYJv7AaohRa5zpxq3nbCNXKwCBgeftAcX5hU4nDWZQFtLUUWGBtTfzisxQNUrb",
  "key8": "2wrun9SpdZSdBaq9NDh5K2ANxGHPu5zDG9kNyVvTavYYVJVAmz88yYdHHspmAJszdF6uPvvM9UmMqdDDmNnkae6F",
  "key9": "34LimKSemxjtx21gcZd6mzGHZZHTFWFzG3PELdzDf6xZcSYXzzqWjFtjnBhCty3obddcTn1rx3bhsTYvSY4VSnAQ",
  "key10": "27uYMzy3WSU3YNKGYTbYSLxpySjfmih9n26KbVvkf2pQX5jpwJ4vbg19Wqv15Esr3CLrHZZZ7gg1Kp3PiXyVh5Ch",
  "key11": "jtscaNdJ7bBFisH7dgnCavH52q5fcwysk36HW7cbWrZzVhYedpnMNyc6LP7RNS2bteafyt2H8N2ejs5sDajYhgn",
  "key12": "2evWmoA2ZkuA7mnALS9XoyqvW4w376LHwzTCXCGehLaj8heDADgKk9nvTnnWHR4UmoRuuWaYNopd3jtGgHML2699",
  "key13": "5gp9mpVnHKidvrbgzSN1w3Dq6oYnncvVNusTvQqJqwrsyENd8dXXSfq37uqDCZpLEgs8TbjL66CMyZqoEhwKSeXH",
  "key14": "thK1UmpNryszVbjiwK4GLQiPnyViPyuyCdcYnU4ef2Co2a7JdjGWw9h5AHPXtqhHdbMkUcTxErJ9ZQzFKGPL4ua",
  "key15": "4iaL55GnxYkAz3r4xyDqYQ8gf8Yy2a4rW715JENWFxCtVJYSAEtnY9urnGgzEv98oAkqba6KqGjEH8RHZjPsbb1D",
  "key16": "2tEntXCoMfRcESC8WkqdZTtW2jweNos3nqKPxENtxf7ohebRPrWiMYfffW6sxF3FpQmkm368AJKGaNvhcrx2kxcZ",
  "key17": "dd5Ev5eZj5D8rQDjJAsHKcJ8qpx9jFwrNYh6iVhofaKjFbWoqZjXPTzfCtPGKJeorHRdix82pyKHSAaAkTAj3WT",
  "key18": "3JoqRB18RgqSGCSsNRH54i4bhtYegD5BALqt5xH5R9ZbW6zwjSgm1ZnKwp5PDwuGg2gYUSznLWWfXr15GRgt5tNQ",
  "key19": "3E3rCRTB34UWhj6zsyRQeWwutryBsGsgiQbYG1PNi7Cc4qNjrDce8enh92xPmwUufAuCrJyKZVZKENHYMCDyAx7C",
  "key20": "2Cun9DAzVQuw5C1LxqDpQoryJwxmmZggQUqhre4ibQyGTRRMVqCgdrMDRDHMdq7Nmgz5nrBGG6E9t62F7Ypegc2b",
  "key21": "5FZ4fwqQUf3PUpoxjmgGzPvh8EWz4Qgw6sM8gq6aqssKWxP9hQQJDqjCucuaf8KN19aqFBDorhsCkSeC8k4TyaYi",
  "key22": "4VbJQZPxiw6hmNYFJxZzevAYVgNaSJvYeVRunptSmeMApvB1JDLii2nS833E5RnekK2795i67HwYmv7UgRUum3CZ",
  "key23": "JD3ZtSkSAS1YRAyQrYD6P6tCKP6JCbPP6svkM9BqCSWPvRq8Y73KVx1hAnsXax9o7djrdKLQc4h2WsN3prVvSy2",
  "key24": "5hmNZwHNEQWRvh16a8qWDANJ5kFS7cwb34YAaCSxXM5Fv6bEQqGp9ZCcRrRvf9rqMveEvEn3oD9hrfnULBQcFLMS",
  "key25": "4YLv3R1m4qNsjtmevSonnfdZ1cmF1djpPsE1snjBZFw4RHNExwNvjXzQ5d9SfhWNwqNiyHu4ois95N7ZmpHYS32f",
  "key26": "3duu85weQWqbZr4WhiNdgwH6T2LKG47RNdcVfrF9TiZa58pgbjUHnPBg7vw6CxPWNVJ1gMeE2PfCGuTziXCgoyGK",
  "key27": "5TvjWFo2jPdAhkS9ceogDQ23SMRdBHdneHSavZ7Hq1fwnEpR1xH8suThXT3asuAo1sFSBNJcqP29WcXgLEhuVPsD",
  "key28": "3pg9LgvB75Z1xmRuK2ZvSvBwfFV6JWUvJNxgsrXsUaJFmTYvng27LH1gDYUUTZB6bt5pt7rZPEXXpUWfbaoqRc8Z",
  "key29": "3qx9X4u51wRuvj1tw4LxHzXM1FxeHrDXSdK2s25T6EYQa6GK7FeQC95qNdVgXNrp6ibHFkKp4gXkhqqB8FGbFzLd",
  "key30": "3NZe3ed9dKrLoBHubHXT9vB9m3VKDUN2G6isWF1Xnv26fvVGZC3Uu3dve6tSpyFtq8iEe2RZFq9YRWUq74W1k5yZ",
  "key31": "5mYyfzsM6TVYNV8VTP32x88P9mJRsx7N2gLhAbctRLbwsz3q2ktquozs4sxxYaqwKvTWmKB7skxwRHXBm7P8S8Mc",
  "key32": "4aFDQPxGd7XnCNUwse1w9ikYRDiYrJWCNTTEknWKtTedFGLiMr1xznxqCtmMwePVWMZNT9Z2QXrMHLmiEjtif1Kv"
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
