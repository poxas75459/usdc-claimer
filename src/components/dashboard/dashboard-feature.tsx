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
    "V4RQqQLWXi38RnaciKQanpmdRUFEsX95WPGmQ9yJwW7KfQcZeMPe5wVu3H4d47NSjZRtbLLx6hCZxjjzJUw82NZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ABj6DCUh6gkucgup95MYKFX3BLrt63HjKmoXx5wSmAgrAzWWcsmqAGpZ7DFUCQfqNHn121XyYJqSy9JbZyNk7Gi",
  "key1": "2uSCakobTfT2ahHdt76ZxJrcQqyKSM6e6J7WEc4gTbciuFYeCxUnxq1BuWEqWvsN5nbNQmNo8cPAe9PhQHbDXjHk",
  "key2": "4XrDbfhiVSA2mUHqyZCpGAVNspBp7qubmx7iAX3Gfe7T33J3h5DotSkLBbFemCZTPokyrBaEFqGF2PhfhmcJKiBZ",
  "key3": "4T3N78XCeNbrNxYVhVCuTSV4Zr8K2dBv2NQnUkt4bhdUsgBspaTN8zL9jTzXMFt3T3Vn3FUds4vDbvU81kC1W46c",
  "key4": "BD4AX6GAaG4TkgRKBNXwz2TtaVdh9N49J61KcCGng6gdKpWNLTS1RrL49RwHpyVEzfPfQREf1uTvXnguxqngFiS",
  "key5": "4xcjMuUdtxxMSX7XXvdsx3oGoAfZHLYfb2fZ6Yhodo7SKQQyRKKMyUdMtQaYAX7Woy7Wtv3dHjonP4St1pcwgkjD",
  "key6": "hzunkvhzYKXEpoULK5Xcnvr8nTShsGUyTsFLc9JGzknH1mdXSQ8gE3CJriPBjKq2mmvvqjXukAUiFcHTJwxvJgV",
  "key7": "2HFEmrd5UvqbiATR2xf3cHTDYipMvygfRN5rMNH9DWkq6UthJHQpdqMXBvCBRk2F4vHumDDRdYqki4m1VwPEENYE",
  "key8": "45ESbVpGChCbVYFsJqYMuG4fHxQpbkV5KLMY8rLhaSDsLwoPbPBJ367rf97EGcP91tvTAUwhAve8syoMS5KJfoUe",
  "key9": "63coBZSAxrNZAH3NpWew1jBQSWPUWFTTaCmpqmAkHqstsJwWQBb3e4dKNT6cvHyskeeV2BacFXHwCP1d6DkvygJt",
  "key10": "3FSJEfcW95YQv8QiD2tJ8CdCX3trN4PsiD2BjMwWANSXkUiA4oxPBXi4k9t7egds1BS7ZGhL4svZXUTKXZ7CkQDc",
  "key11": "5wiEGM581iSJEgyKfmWM2jQJ3UNEiUUctH3QNBs2CQWKR6Uhk8Vj8wQqSpnw8SPW8xHdsQqT6sWV8hL7hn14DPDA",
  "key12": "6VGoBHP9wusMsJLCdnWNR4m9JSaS7aeXgZZVuNwX7BDA1hRXVvHqkwWqaHLEzD9h7BMXv5MY9YdFYkMr4dJgmxx",
  "key13": "3Cd9BDwHTUMbjDxajC2YugjhFUa4qfdMvG9AXz2GZo8UbhX3FgBiktFKKwsWvbopyqavmEis14L5GyQg4ESEmb8w",
  "key14": "2H7ER2u7nKHPDLR7Za7YR5Uktg2AgYfuRrXecBPyfEEMpRRhACoK2T7VagLgykERfwbEZEgMRgY98UGwFPzAsR8m",
  "key15": "4RTxuBuVbaw33ZGC2DXcSvWk112VGpJWPHQGgj8ZbW1BoXXWdDkbpFEZNKKicrz38X1c8zwdME87zG1ppswpv5YD",
  "key16": "2dMj2ogpxb8nYjG82D3k3ApLieDKBWpJsvEoeuvHF86xqLbFhXFKQLqaJkJRuExUiZEoMrmxPVn8W4yioth2TUVn",
  "key17": "5KmcBAbifcZKUU6X5MwBZBJnr14RCBSmtmTUNqsYHgnb1sxqo41dhKLo7qyVEAn8BWG8fi2dv8iFD7tfTtBWTT6Z",
  "key18": "5iPVD4QzgCKdLn7F8vzMVjKMcLPqKm18wddeUt4QfQjSGbZDKWyTe4L4taeEkoAqakESrnVx1kqxWesbUsQMuau2",
  "key19": "3TWbwzJekVpFYjT8Sb23rqonZt5m19Z95TWMr7y2uMB4t1fyTH2xGuGG8VGa8kva7jWRAPFpukWcJ4roxbYeGxcE",
  "key20": "4ukMMehutWrg78ufzTQGqECz6jkAwyfX4T2H7DiZBXoZqSe16AH6tQe8tYGhK52fPkipbnmiMEyBgFP4NFabmS4P",
  "key21": "3FhquG9bJNgwWZveDHkwH8g2i2onr2oJyWpWn9XWYnC4dRF82SQoTfPS7GiMgxA2MfpJdPgfaNxjhSbXqpoJs584",
  "key22": "5B9kEQFM3qkHA3uWqTKPu68DHQhSoen4HLPEGjdhW3Z2znh7iU5VRYH3GYUvXxUMUFP13isqn3CQGSW3ksVtvJTg",
  "key23": "rmEFkW7ync8mBcY46vVW8PxUsz5RCja1evG43WJDrLZQZDgB7H6J2XF2ny8LT6ofc9ZbYVirH3mdwbgk1XToE2o",
  "key24": "4wq76vT8yZDLz6w1QGRvebXc4ZaKvZyCSLmAg79ncXCFGaTELo3kEH5MzQtjKtYnRmDsaeJhTMKkGCRQ1urojQ7z",
  "key25": "2Nmn6aaxaYqhYBi8Nw57ieHEqJSzCdU3wB989bVjox6ckegHCnoVv23ot8yZ7pAobYhpsezLx7GAtxGSJMgZhepG",
  "key26": "4Yrv2Jr2MBvgEXfxJu2ND8cvsHNAoXtAxCT8tcaetHoUuF92WKXxDoLhg6kJdpYZzhFSpuJod23HsJc5eiMZRV42",
  "key27": "oYvS2zuqv9gcdb5g7Qy6v8ahZdC9jkHdELKzpTzo1TaazEicq2tdFqvD9bfqsHMfaa6wFeZUKDwgacmWPxLvBD4",
  "key28": "5uNyGf7zo5RBw5kFJuyeqpb5GeLmZrugbkPzhNYeqF9CYBY1s2sMJSjc2tQwmUS4fAt6euGwd6m5BCZ7nJKYAQJ9",
  "key29": "fAGcJLRsF8n1dq7HU5meKsvUuP2szjTSCkgAtifwrJ7gZxBVHHLhHxqU5QWhSgnEhNKm133wGJ2exQjjpD5PBvv",
  "key30": "3PtKdAXVzjknNB2dMiEKjRVTfyrWYaeEgtuamvzggaQFrTXorA8hBnhWhBhAdPpbon8AjXhQ2W7dwo9jfMENVxRe",
  "key31": "3Hyyi8tzMKk18KZKA28ighctPPoEfdzoxDsFLzYZbmL8E1bfVVgXv3eFCTzQXNDwgsxeMrkoHapiJFksWCYeQmkc",
  "key32": "Cwpe1UTzEePSrbkgfS7nWqGKqCmpnh8NToNZ5XNvMvUBUCf3PK4hZhRBVZFSXCZdspLP8Rxi6jMA77fhRkJCMjX",
  "key33": "5digbRHvZWq5SSbGtrpugkMVSYmS8SL5jgHaUkP4XjFF9wFVHUzQhFBRg7iYrstBHruurDUToJGrruM3rBXGzbeJ",
  "key34": "65Ufna2qJewPfmnpb9ymJURfwu8St2Q8vRaQBFNF8PikZh2Q8VGBGr2hXWTS12nCRQLHkBQ1y7J9SQHKQxiErrfh",
  "key35": "MsL6enNdWmyhMkg9Y6Q9MZk2ibaQm7wgM92j3wXcRmwRz5RvF4xpYXwdBkioWTqzdwwACE9LDU8nVqd2hTu645i",
  "key36": "3rTwB7nZuV9T8GVBBnGG6wCMSktsWc8JD1cDggrjDvXsgRvDH8ohnzUaXFxCUZgjcr1VZFoAxhHxuxcTcFsAkGf8",
  "key37": "5DyoknrGwhtD84UoSiNYTGFG5PztgEntn69uCZTx1zCmmWjcYRK8pwsRqBQnpGPNMBYYMCbH5fd5iSVhFR8VHatk"
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
