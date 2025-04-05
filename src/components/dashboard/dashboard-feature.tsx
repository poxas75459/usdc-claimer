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
    "4uxropG2NRgWQnt7XFGaBJRE2MPKzrCcz2v2adXVnWPCNEqynnKxdwsYENZewpUcQvFES51XYKiahJcAVShSUXKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59XwJ9N9oYg6dAiruJR5cac1Sv7wNnEtdYKQJXZCSjq5qMZPxetTC5qtM3kF8MzkhKbxDE8F7F8Qjz2HSwd9NBNH",
  "key1": "64MYirJed82mX8EqhXGsdscGrjA33WgTC5o3JjgAViq8HYe5DyFzeuWydh92Uk5SPcLkFxaLAiCQF99BaX49pqmr",
  "key2": "3DgHdgXbGYsrgteeVLoktGHUpguLcLzS5eyPdTx28xvSpUyGpvH1BvkUhxuQHQA7ZrGLouSXEYgC9VvksZ9p5Sqf",
  "key3": "4KP8uUm5irftNw3aKZB2otWRsYA1Q27W22q4t2gMyXGbaNtAgqxcUrvPfdzGk9T3GWj245U7a7T8MnJu6F9p5ehC",
  "key4": "q8HkoaVJCbmhh9NMWeCLLAemxornUdJujTcSQ9syCZDbmWEpjoVETjSt4dX7FJFqpxiCo6TnpinqKQzZ8gXRsME",
  "key5": "51gtW7MY8By97PKr5QVm8EQmfQjkEzK7vcpR7KeRUydh3Fvk2WwtSaRATRF47MwR5DmisfEKAQfXNnG8Kvo3eKGP",
  "key6": "66wxoWHjLyE1g4yhVfoZsQi6i51pgt4t3HzNLENvrV7i6e6L6bvjEfH4cenwgCc8dWyjxQMkkV4ynUKLThWQ693f",
  "key7": "2N5TL1brexfnFjaBZaWGzYeV2tBtdG5JT4oUJgyiYNCf6Ampn7AvabJc2HTfS76pStUBE8wWksdtjjtHBZ8L6ANp",
  "key8": "gKB9R3VHeZ6ZMjeBaAh4xScyidPdQASSyDZzFVg25fX2LjGQXhHgaYnxmVkvqYj8ADfvWpEFSoga4vxD1wnxxVF",
  "key9": "3a2Zcu1HnXKEQJcNV8jdsMPwYzBc95ZiYuhqy1na9ZjWaQxz1YYATqoTpWuhapZwGTKZT4amqoH6cpFhvJz5mgyk",
  "key10": "4cSwMtuMyVn1we4FjpTgfWfETtzHKBRheYBuE9mx9cmw8RCqQQ7eWH9yNd6xrkVPqiaMYYVRCywdpGN6KQTCcq9f",
  "key11": "4DVxwjP5nNCfdJxGPM6QkXyNyqRy3oZ6XD7yPRNc4TY1kW35xBhKyJkfm6Li6nQ72UnBvguwH11JAtc7WS6KsGwg",
  "key12": "5Np8QrDgjSMPBaJBr7YtvvgvkndRjE96CPPpGN1L8gmX9cby4gzmF4otiDTGSH1HhRBfPWZxYF3nkigFMUGgeT4f",
  "key13": "uGwvBDoHqJDPgxwRvUSw94xMDpPAXhMJXgr8GNHxgXn7vDFbUuVcznVxNsfovn61hGHzgKsrs6CYw8J4FbtzS76",
  "key14": "HmcJcd3EEgzpPwbMGJkgbjY8qho57hsMbzey35y4GFgopFGBaVh2wpjCRKh4oZwWiL5HiyphB1DYq4n4PRKCBtM",
  "key15": "4CYueKuKSHr8JgYCyqqPcSmzPdhsEBYb3xHkjWaC4cYtav6sKLX9U9nNDKSvbLc9Ksmdw78vWg2D8o2H8DySASVX",
  "key16": "3dwJPdDyAWkDh5iNuqss3uKK6ye7kKUvkEMtc2i1kBoJPTaWxsyX2FgQXDssBeDZKNMUrvZRHi4TK1pKM1iHYsHa",
  "key17": "GhdrmhDuahanFvQZgvDCpWxRtphnMEp38hBtdidQVBZuvH6YTKE2oWckTaWijKFhyw8mWsy9hjAFwT5BduLEgu9",
  "key18": "3CC8bf8CmKZSzgqP2nqAiB6hQoTd4VQqg59azr4La91tjk3C1LozXgL2rnRzZi75vrUiZBBZVyZyC5mPALBdFTXb",
  "key19": "29jEcPLLBxWnTojKd7riKwk5kQeCHYyWNJkR6cTLNCKf3LWKQZj5ke6B4ufFZvVmYusVepBjQyuotjsudKK2WHS4",
  "key20": "4Vb32dG1ZNBT3EqTnW6oKJgv2FY3xAW6SruBkKzpHpKHnLQ8VacgED1aeDUGn3GsYx1Ve9aMUA7VzUz41eyQGvYC",
  "key21": "4W3bLUKCWVwBbCYzxJrRRYd3GnU2f7GNfzGd3YBpntKW3hn37aFLZ1ijbyvr36LnzLWpgKai8mJ1qvVRvYYLBDcB",
  "key22": "25zsnJRBYD7AYfUwR7Ss6vdWpTPmdfUWwKXRi6Aww6HM2FCFRJucQ43mNN4xPSPLUrFd4z7P4PouuGjY5F4HayND",
  "key23": "2wg5tirCjTucRzweKd7Wzzq4F1vRiLHMJDwojL2hZUn3tGVUpyjfJ2ATHA9sgDjqCeCYd1dKhewh8bi483pib7kq",
  "key24": "4GVVGNkb2PFAST2cRpaEpAxbDmnDXwXijkfLwqX2tCLnqFn2LAnp36gwDLmZXqU4yf7SJerDFzEgyH8hn4J6i7jB",
  "key25": "4LSvn3hGqoRB5sxLhVRuZzKYpxt9tXcQ5GWzNeGmWCBQhFdFL2KQFMTHP89mrh8gEN19VJ6DVdtMwWQwWEPmKUuA",
  "key26": "33Ft6ArqiFRSy4eMr61yQcUKXV9vLApsRRvw9P36ve3gTTpreebhrU4bxV6SKKBGrL8goRaXLXmdtXwsXDEnjB4a",
  "key27": "4vjVQEbrCHk6QtGCiLKLQw63LA1T19yRKgXpN6CXn2iYWPfyNFL7CWs792CfThwS8kXo6wVeBvw5WYwQDdDrTfwe",
  "key28": "27UUPFmaniBEEf8Bo4DR229VsgNiYSBuaVRwBJzjkXc1aiLohTeZJsRvxKnq1DYMr9xKFBz5av3kxSNDNpN3VB3B",
  "key29": "3YJujzuEV3N4S6TfJ294r2fyhtF4NRXwhbMaJur5QSQq5v8qXxSVDSrvLYzuDnkQKmcsccgCKgwNcBZEujgGkTMa",
  "key30": "k3z54BCBvwgCkKwiQrPjSdh5xdDy1HMBjVLxumppgtyhh8jEmzXGRhTLbNVeGpJuyXryuv76sQeafHvyxFj1Aa3",
  "key31": "4Q3a4qM8MRa24NoZG9eSms2KjnWo3NjqqyBsb5xEGRV8agH7nt6pSH57uW8aR2ETgq2cqJ4qqYUG6oHX3Wa71mGt",
  "key32": "5kKQJQU2sAfX4Q2hb52WeftZjLmzxugHq3Arh93EsLtEbTQWzkZpgfzSehaPB6QjXba3wkSs6XGiioQBJdFauiKK",
  "key33": "5Fj62Vou55aocbNUNwjKsUWnCwPLb81eCw1s3U6kZUM53u58DmecigZ38Gycfr3j6227TNkShds6DY1ygtRWR5An",
  "key34": "2zbHVGZA3YibtMLEJt6AgcseQFtX3LmQgdGvtGtu9pGfgkYE8Ptct9i4wUboqSVybGLYMvnkqNu8kcANMftxpZag",
  "key35": "3QtV1Qxs4yQwBYhSo67zTYgPyW92Z3jNLatKMtfmphZf3H2j5ip9eWcCqbZNjpDZhSpj9sRPpUVH1KYgZkqYAMi",
  "key36": "5wS38SqxhDhMm2YKcMz76BL7LZK8Tnrjq5FZ9ve5VTsubS4n17G4xbkSSCDThZNigt98yqffbNbTzkUUZng3BS9C"
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
