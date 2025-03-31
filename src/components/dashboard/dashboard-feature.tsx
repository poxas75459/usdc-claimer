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
    "5BBvW68tKkvuZmfQ5i9BGUhTuBa7ZphKFk8ErVavvKG1M5c7dYxcKhX4ChFb2XzuFMZQWCctcWDnTPZSq3unXMCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nu7mHbjdMbjRTRVxKnpWqFebLUMd8J9J76CDPZfedLstHxqxxXF3JeZ76PMqN8EorgcG2xArR3GxHnFP3Rakg4H",
  "key1": "4U9LcFvgKaoxeNzr289H8AEGJs7uYc9xEZmhHDjmqBMyVaPGdrbty8QncCZFcAvhZsN25KZpLsgUwRXoJv82Bh1d",
  "key2": "2M4aFNCz7ZM27423UnJmoj4LVLLyAf21Tt2VDJCN642j3aQ5c3k1dwGRpqiFkpMEfSvxmsy649RAtMAkxiZt5cn1",
  "key3": "4Du5Mqwc5EPhRxRU83DcoLLPsqDS4hzVYtJxYtwj6pwxqacunymCMF8fdP2DcRdt92gHoNB7TYqC7kEPPdXgE4hZ",
  "key4": "3kwpb3DxUQ96LRbVAA7TCFV3SGf94UiSepesQ4sTUaXnQzVxQU5Lsacbyi1tZHRuiD9x5vzhop3TVuKhBSBYahUL",
  "key5": "3Dc26c2q9RhR7T5L1JLKsk7DMivYUExofFW61ovvdZZVuU7xpo582Q8GsthZz3q9UQ7yRC6L5zashHNJZR3qYr2G",
  "key6": "wF5QFZ4b9S7mjrN9oKui2S6vjT8aci82GLA1BBQyS8eoBhyQ9T83B42yJunuvtUBi3Cfu6i5aCv5r4odVWEZvVF",
  "key7": "5goy3M9cELy6CFBHB87rykTB46SQmTpKHetvui7NzJmV4mB1x4PM655WPji8WxdqUnjgnP8NUyAUcMwvsGeFvHqt",
  "key8": "54EQDGm7VGPWcfMts1yHJYK5urbT1RaStp8vNERQc1GfVzbKmqUX1sgG5QrgGdeuDuyovKEhwf9eZ2GUFd7Fq9Vr",
  "key9": "4CeHr55Rr6KtR3utvrXLq7k4PQqK1JyYFdELJHsrFg7xpSoQ3LqGT4gQjeQ1AKw4a4gRXPRk7HfptPw9a4xNYoAB",
  "key10": "xiiNRayRN9iVCJQDMXL2HibU4UPgZD74t6Ta9PFDh1SzrhFfnskC5WN54vhHTRKoEyw6iKKRAnLw6PpXFuBdzCb",
  "key11": "2Acg2oAMM39sMapeMmEibGBLZq7roqZV7tWdU14BaCQMh568V6WJzwzTFSBn35aWCoVE4Ph6nqbSyx6cdTmtqHrV",
  "key12": "MiUaWxRpMNtrMrHvQ95BXsk4v3dvULMBh2GZGNQx2e2FuNegPtwY5yCRcXHD9Cc9HQ2at8wj5HGfuQNc9C2jVAB",
  "key13": "3gft4aFSv4ym4rVYvs7CdKtbG8dVvkFT8i231SZHmcSz3335n6e49sn5QBxptFcXoRuo2DrBneFQLT3ddf1ktS3B",
  "key14": "3dFcMVpqqk9k4W9u2tQR4ud27h3WYANnpFB32yD8ff7hZWgQXWbv8K326m2Af9EeQnrmo2zzNG4Bt5hv4B3Ler6v",
  "key15": "tvJHJmyLJkvJ1WWZ78cP3uTeakUwQn3KhQwqvkkvj6upUYJ5Vinz5X3RNGR87fNAkiFoSYWc2xRBYHMD25brajb",
  "key16": "3eYqit1WsSLnjPS9WpB2npM2rcu6dm3LA7jKxB6692HABBcUbwzXLmt9zZRUf9Kwd1fxTjNggHsBW3T969zDoGF1",
  "key17": "4JNHihAZDJ5QtTDJtS7cU2pNThPf73A8C5feYU7ooYf8rJ6NRWNsfvnYdPVf1aNGgXX317wDcdA5c7sMnWY7C9UV",
  "key18": "5KBtc52rrN3CgQ7iXAw6eideskTZr2ZDKi3913rAC2ZYBjwpvdvbWVyVDG45mXYSxvnskLDgbvxx5u2q65TMijTf",
  "key19": "Sc6ek1JdWZ2vXoSMTPUpJdejyDzS7YqqnXE9p5PbyD5ApnomYLLUZD6d9XuQ26dKFVCCKJ8LM56X22nUC2jVBbx",
  "key20": "2mvBkGvjtVKJYXsLmt7BHgx1MV5TnhnHxtn5ykf67bBHG7cZ8d1BiHbmjNc3EywkEPRbGBV8DA6XGKF25UV9qS6X",
  "key21": "4Z7rza7u6Bn3j5T8BHCxCQete1vsSfY9u9PAtnngbP2JEstKW9VQXokG9RfqAG7ZsWaMaxfB5fRxo7Ga5THYok74",
  "key22": "45w3i1j5ktk3jiUVcvWVhxfvYFjGAStYXp82QogDvb5HKUBP7wmCvfqEjb5qNsadegc2uPtC5Eb9Pe9xySLaMGF2",
  "key23": "3rZm3MBqHScV4K4xi4LmrGbVZdiPvw2UKYfoXMY2siWXBc3G33mcSSGQeK8xPZdwjres5z7Bp5yYNw7XnmcoymFW",
  "key24": "3uMoCS43sQZwijpwcj5GUDeQabEeNprv67yeiZ5EXfwEfRCrfsf7De76Vdj5198F1wg2s6GKVCEKrgrVPvdrhnxH",
  "key25": "gmV9UwFwVS4Xnet2qMqoQC6u3wbCUkUwzcRiLxsfTqwi6JzLneGGKFHJZodiF9tRa44MZ651bwPe8UDEgUyGUWX",
  "key26": "jbuPZ99RhcXYu8L1fWx8tseFE8MV7GfaihG3SofEk7jpv6Mgw7c9j1jQbwP5hx1b8hhGV94hNnAZxvBFjjhBUQ7",
  "key27": "4mteQ7GEeHt8AawPJY8Z29GA8Fhk82fBz7zSUDo52eTNHPN58Ze7fkViuoQzNoG4UBJ49bLQXjoFX2uqHfHk7F67",
  "key28": "2YZnht4x3KA6teuDKq5r2fChgfAuizgmrboAXLkmFmuec2yiwFwCXUagNguSfDs7J12RMb8J9Czu3k9Bk2f78uha",
  "key29": "235QmfjhpvGBGhY94M65A42hyv8ge7i6su8eyujguSuq9gjjzWLSkezBJzHFzeRHDriwGyvbSmymv4RJjBu8uu4P",
  "key30": "2qqq5a634wvuj4r8z5MYn3WiT7tjME8JfgyeX9cKuVUhxq92NrbWH8VeCaR34Vtd7AM1oR3Y2dzZzZFuxwg9f9pU",
  "key31": "2zoADZ4eF9Ntep7TKnVw61Qt8y1cMtH9nRX1xYoX43DUCmhkBKrMr6c3dEwZGkFNvougJtZiA4n1eUBon9u9USXn"
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
