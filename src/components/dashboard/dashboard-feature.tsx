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
    "5Lkz4XUcZXhwiG4qYiTgrGpNyENVnoZEJ74itATAbySDkDrNwATcrjnif98U6dssN58n2VJXGzoeh65XtQiPY1FD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37vWP4kZ5qceedkrkpx3V3BRJtNRu7ua3ozK5zdJ58Qp5QXJSXr1fMKFXuqNape5p9WY74NFUfENj8ic32bxWjzZ",
  "key1": "5pzZiKX7G6G29fc7QEdF2BaD1KKHB2FM9TNehKLWRdjSWppqEPSutYhbHcCv1YfAD3nNuXRkcAruKocrQBMjgNFc",
  "key2": "4Rnp1AN89jv1FLY3PQgGcGu9vv8qYz4dxsyDoKrHnYFgvY6WGyNoyYNDbTYdY8Un1sS2ParruF6cPNb3b15Ee269",
  "key3": "44RwMbVj5qpDEyGyYBost6sswqRKZRnDWxeEWMBNNR9CFfwJ9FeV7FPbbwB1bdihBJg7ZkfWy7sHjewsEdC3mewD",
  "key4": "2sgREzj9JkxKWuRU4eDTEKzMYJgvGwhpCTGGZn4Rnd7uMbUwykCaWBE4oNtxDmxTKnGt8zM6opeBKebyAYEfbwQ1",
  "key5": "nD9fwXJER84yCgnoR4iTjiRDhyTEWEmGZUAr5LdDbFEQ4sVYLXGhTNBAmZ8U3dwqdYHG2r3sGoWKjesiQyLSKTi",
  "key6": "ATcVTZjXji3V1kLCfrENo9aaCSRFduRYHgozyXBeM2dUyDJvGi8tfGTxMZSb2FbtvxU5yf8QtvVfhBVjhpzQvrn",
  "key7": "5S5iMoQt4NrTSSrD4MdwUWwsKbzFpUw4qR7gUmTy487yi28Tj4niFjXBYF6VKKDeYDL4JEXmLVf1P3W3NJ6VMVbS",
  "key8": "4JAYT29adUf8wd6JsLqpHPrHk4wJMrJpKKABHz5doHuVofZyXhuev1XLgAj6RTkckDHcS1TQpdyDbRjdiB5ueLZg",
  "key9": "3HM8g7UvtkWjULx4oJQLrzqKmJosvX1n6U5TQGsf9xh3iwahD1anQceUBNxUsXTDApS8f5UrD1FpY2XtTEPyTkFr",
  "key10": "48hT8dHHnegHYc2ryaH12WHG9DuizDgGwkuakFfJZBinW5cY545xKxbSnWagYGCBhVZAmHZQCLqf2eJ8mRbnuCNz",
  "key11": "VQLXEmw1tzDrBwn7PYbTxww9mqCWxrUZf8U4FUuckfyRcdmVpZqWG4LEdmaNzJNV7S2ANu2hZfYWEr4AqFvdXzX",
  "key12": "59tESXefJHuSVsBhRdh6gqWPkNeT2aATPr5etQ85Wu7UsgRbQUjRKtprmNHbMFbiesungJgaCMUu9YFh2NKMLfiZ",
  "key13": "2W9DWK6rYHHk5bUiiCyb5bxRnKvoAYZNohVVwTeM69d1FTnpUFLftjjfm8VjPeGr6sa5zPYhhxHkTKsd6REzFL16",
  "key14": "9ppTwLCmr2sgXoGbj42P8Y8XrUyiccz34K7yDsc1fEaVQAnLhfB6NKUCbUSRP7ccBvQ5UD8EEqV3CJGnTVw7BTe",
  "key15": "fSKfGsSC6hVPd7F6tzQeg3UEiidi1CB1hRMiLGzSvAFtYQfyM21E5J8KswFRy1ZWDF38uH3icdVtNsBip4nQAux",
  "key16": "5KsZbgzKMF2qvooyctojHnfpDwqPDqX7rNMazZMji4zNnHfCfotk3t598zHFSTgcSLidLYJd5zYHKkmxvZ6Kr372",
  "key17": "4Dmj2BnsGCojFA1GdUuZH6vunfkbmXnYi4p8zVdUDiR3CZhXfQ45Ej3gvHZst2XwjoawAezQLV3ZaEMKi1Ua5tz5",
  "key18": "3LhbwczNX6NBAn4VFhczYkHVjmfzf8TJVRYeffhJL5X1fNHbBmJugnLVcM9uKA5DXX8RUcLfFQuWe47AHL1gKndD",
  "key19": "5EZWqTJZSiRFnJmxpfuHvhCMmWKCYeTupY7c6uRpdGjUZBtSZKFGs5kBDFR4jv67TUB4R7Kfw7S6t2xaSce9izke",
  "key20": "3sBTbZoAc8EEXMqfyPLvfEmeXQ2ZkWGqfmL6dgu7E8osTBQdhJKbpVWWEEkarSf78jf2G334xWpE6mT53CdA7zRX",
  "key21": "5UjjWVsgc59NMZBNXgN68TpjNhj7qHLyLC8kZecxfveuS7YeuBPH6tvsYTmfhVPpQJkhY4tsiWADcZQ49M5FUkZy",
  "key22": "24dHAw2bwHa2x2YNnkZ14EkSWHejCTzbuHoeYjSkVPvxgb6dJBz8vFjrxMARLnnLH6KSXSeGaB3Tgs62WReCfkwU",
  "key23": "3g6FDCULz8mHkqhVTurTDxHiaNTXtP7GnqDCGJjmhRuQvRtWgGcBnnXLw1vdyvA22ZpxaPDWxaq3D6HLE5fooRiM",
  "key24": "4XUAyjv2U9QcVpkoaJNbzewTLT9jwqMXbcgSCsQcp8A24J8T7hMR1c66vi6HRjadpYiZu8P9seZMVX8kTZYZzPY9",
  "key25": "5PU4f4uNnxhKy7VLmCYNGrDHekGGSSdfaBtTmsfEJcyrxAMEWS888gL9ozHJHYgtNaJaiTWvZw9w3n1uYABKSYhT",
  "key26": "4AzTwziuxLVLrvQ1NcD5qkeznNh29z9BZJyJHgGzdBufhW3PHkekfosFaFCQYVunQ3Bsg4NqrBNDJ3sQTRrUpNun",
  "key27": "3ukuXUUoBT7AzGdomqjQoz96fMzjEbRrGJRpMcD8JQTg478E5kNunA7t6Z2ZuXEBkKxhtzG1WyqzdVXRChPjNvpS",
  "key28": "5F9A22AXkfbQcsYoFNJXzqsct5rkZ48ZXUhFskLQXAx4AoiRJCjf83A64RRmJVE7XpaDsyvG1JPrimGcTtDAiekJ",
  "key29": "5g5MimbsJ8ucXZjEtcQNa5YufNTYGjcAbQfwoS9MzPhuZ6ruvGSwhqWNtNcBV9W6TYqGcyMXNrTTDriswQpzqM32",
  "key30": "43gA4ssofv33qmXmA5sq99NwXRHtqN3CvaZ7dYTs3g1nrNioPKBb3AC5f61ucKBe26viqZvqrffA2RJzA11jfHnZ",
  "key31": "2YCmbbLrB3PRt9FaNTjX12aeFqC33viJD4EmJyBNAkocZ3PVaVYVn2CV5hxTRBZvqE5vP8MM6JhJ7gh8jNoKMucR",
  "key32": "3YQoHK2SegS9GPfqToyzdTeNhRLjE2dkjwXrmrgdcSHomCwLue39UoTbXARAbAEGDcysbRawcNxZJn2Qa9C8XDHN",
  "key33": "DyjcMEeqwEWRU61sHkXtLULkyJk5bdvqBAzqzEvJ1Fu5dnunuLucifRM6k1c6Uifpa1AyGAwtArNCt98bgDwazL",
  "key34": "5pUEaUn8X5CQF1eWVV3BKMD2NGtU3zzBaFyLqkWC6RkUDd8kjLvrnyZLfK8hdzquXF3MCK3U9avi4u2Bb4qm3Bgm",
  "key35": "5uBAvac39QTfxSp6F7RfQizAPgGri7uWN46BDo33DLwJffRSfXcLHcBPgN27WxjMNDZMpiDvbGcnwnfKjCrpf3fZ",
  "key36": "61EgzLZajx41N6X2HskTTXyBrYK4shrET5meiNLRKKTrkBHRuiqQcewRrh4CYZ1n1C1AiPP53e5Rx2sbCboyY46y",
  "key37": "58QVrVmX8RtromCG3kknwY6eQ7WfrUBk3TcNpJC5SpE8PN6EkTT4X766p1zjqFA2PiKj5W1gscFCPnbxQXLgrcgF",
  "key38": "2MTAqWHoQxhwvYjdxzEtf2DTKiZvYPtraV9ADgQBdUg1A2WNadx19ohDTHJ7dXMr3YcTEZaqaA2pNpCLk95onGPp"
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
