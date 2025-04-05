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
    "51WvfSgaoVcs6ka3jZcUnDq25mhcDYZVNwiKpoUvpwP8p8EzGvWpMWunuoNhoPHGPWZ4y6PxmafzinaoA7QWRwry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mdBbvHxc3CH4PtJx1eRrYe6sVMoTH8LuLrd3rWMvCiPeBDtHP2MR7Gs4bbkKqquqZYtznFiqkARuZhPMAghNNBq",
  "key1": "3XLkijaxzBLiacuMjh8avbzCtgRLrNr6TRVxzBiGhxcrZ6jJrfw98vYjq5Ft69mJ9ZNdvp8xpN4pDLn7BkW3QZHq",
  "key2": "5grD4YpaEJ775vXz8xTWdwc4kCmB8kFMxSsx5MF8UcRCVPdcH214sDuxtES75LGmzNquMeuck52ev6YC4J8wwveu",
  "key3": "3UC2SS1W9XtCsUU2AmVokEK2q3p9ic5nuzf4sBSmFxQQ3Svrm4XvMvkHfKJENT8RAzLYoxMazd3PvZmjVPoZp7Bn",
  "key4": "5KX6q6ywTQ7WMLwWPRXDAmYSpmLay2YbPHBCHasbkuNVywaGmkstgsctq7RX6RgjfVxHoCPwkBZr9fo3yeC8UYtM",
  "key5": "4JVAKUHfvbTpZwrSXxcFJtdvBvNDJuRPkAcTo8z1aDGwB6LfeBJB377tE8qRrbhv73rkVrjRMdLfs4G767QGxBSF",
  "key6": "gPDdFyBAcEaPniBfSBEmCPAaABLmJKpjsBabQ3eDJ1QGX3j6d36ftaJt5rUmXagQNhuqRz3EcCBCDg8oXyW9Yf3",
  "key7": "4mQqm5RkMCGDsynYxbUjuNELRkVqTVMZXTBLNbWp51fLD3bC7ZZpk5mqpWWw82ABvcDSHZJu5XL7Cb2Ks8znKyQT",
  "key8": "BNBXR2Vb4TVhbCRUocrZHqbjdHECR8cyhjwCAue89qWyzcJTXdLQq86qzahZrcR3U7XS86kbYfWmJbTq5NcuZ5s",
  "key9": "2MhoXtQVPbCT2tV5VayeQWBx4NBkMWM16BUy9i2taJ52jx7GCp9DxjCAwjr443iFSe1FPfg6dc7gQjkkvNZ68spb",
  "key10": "4z32qUFcyPyFwL6vSBUh3Yj2qcdXyA1sWwmBXL1U1eZtcaB5FFN75iRuizopirEMBKNjwJHpE35dNrY9KK3bW5dp",
  "key11": "57bY5dfNxpj9pCZbefV7mnevoe1LrSXV7eeQbPjWnwEqx8BefBBBMKGUAgt9cJ6sW5wD93qLNYTYD9XfAryUEsz",
  "key12": "34KTio6itLR1iNYzQj4NbT8Ye89osEubpaDCQA7E1MrMkjrZCLcAGJqjEkGYn1EvpYdQfkGaBi3cdaHrrJhF2UZA",
  "key13": "2kUv7QK6CjGPkwD1abRniuhWP1XpUpBx6ZqKtNeu3XCooMiUM8xgUeYmTCG2AMubPNnzewYnEyR9NxWKz545SmC3",
  "key14": "2cTaboz9f1zBWNcVAmBzVMrqUGbybb9wDJjiBCRvNAAg6n7dGQUrsMcYFLNUG9k4L6fmjhsvjzDQuGaReENhNLmu",
  "key15": "2x3fw34kFid7TECtKypLCoKSZGJYezmFMGtV6nzRQTUr3nfhkTukPqPySraR75iCerV9d1N5dtu9uNdqS6rQa5NK",
  "key16": "4EgcwaDUcxTmLUN9XsRFaXU8cFD7o2Ccwvugq36VE5MKG2dG2Qyjp23BTxD8FZcPJCmbXA8f4ZLNfu5A3n9E7nE3",
  "key17": "5cdZmk44s7pZaJmubSkK226bpJPfL4V9LXQ6vDu9nTUVq8venZ3gV4acV11muYevr7CLurS5ufGMHqLA6mZim3Mm",
  "key18": "2vo8hbvjPnjTC3nnKiT1NtMrXr7wDqcB9nvtvLdU2HZaGLvY2HAsYigLoEo2Pr7Tbm63feiDJAqny77h8EkxXiWV",
  "key19": "2hTeLSihn7amvkTceen8rURwy4gAGJ51y3G8qRp5kWeDyYim55rB3p1k4BsGZCpphsLxkgdKdTKyKxUiK6K2K5gQ",
  "key20": "2C587noRJc5ibf7Wow3qZNaAzTWKXFDjaGSnoL4NNmnrTgLgzyzJED3kvLPbQRjLLe9kcGVqLngJ2uWyHRY7KtSD",
  "key21": "EKVbvT6ByMfJ7vyUAQP6iwPPets4EGcqSC8x2iu9iCj5nLFVkf39wzbk8b8wjQgzxFd8PZkTXjWdjEPJa44VNCS",
  "key22": "2wNBBBB3MiiaLiD5wGVNRQhTZm4e7NTKgRPfiFk8vQNXwKVMkwBJZJNZYmpide6FG73qWNPZRtSq9n8s3vHZMiys",
  "key23": "57TPWrDZqrmhpWGp6hkDntyrJQwh3DcuCrn8Kne8yggSaFRLz5RQUsUcgBMUFVcLtpeHT2YS83HcWbLb9HgtuoEf",
  "key24": "4e9UNd1J4tDNptFxmjVzAHyWHRcaMM5JqYq7cHQBtYYtRJ5vfGPcaP3PLCW4jC24dmETxGaSEx3h9Bw3diGHfhQ7",
  "key25": "3DwHPHio5Kw3x2NEm7rZ6nX8bRcBzCHmWqV7NupYgiu9HhmPDwG28b4rYpPG9A4qS8QXfZqUpco9ZL8UDQhVeBDz",
  "key26": "2v3ofS7D8M7nyGwp1GsTc6yEoX4zB4dTAmXJ29SHQyy2SD2mzk3G5rRiEqY5dCSMFYbJEhEsXrZYuVBjHySVCZwu",
  "key27": "64SDJnit6fX4ZHsJmCjRHUXhKygciKy1anfbBWRpHLprdZ3NysdzmbWBJWSiFPsNj2Bhd69jDcX4M71FfDu44Jx1",
  "key28": "62r6ZwknTxoKXzueyuaAsi6PFoxdGLb6YbwHLXTK7xh98vcLEwsFCFXRncssDye3x9TfckGf9osRn1UcSBis3LNB",
  "key29": "2qS3cYNWrh1wC1bCyWhQ94UmeRs1SsvuAYz26zgj3zXXNAbH3iiD8peBEL9gTSMnZWoHc1zV6qJZ3jN9cjqCJ7tE",
  "key30": "3uDVXSnmv2Fq7i7KhRSvkn5GDQjNevNRdCFqvQaogfUdsVRDmfWVnW4cJrNWe9AW55cqT5MijNboBExPeevp4AFh",
  "key31": "5SF4dMePfp6h8FVQTbfmCaUYZLpY5TjQGhM9gBHDiPTVr62SEeEuxeJN5DZgfm2ScDFsVkzBMQ1mP8KJF1mwieZs",
  "key32": "JCmXkDWTMeyaiCFFKphNVNqKUGQosCpn33NHURnZPA9o9GJWSbKDE1FDaDn6Ld8LW1bQuPpeFQJyWG7pn3D2gqB",
  "key33": "4kGZQhifs3wQPHicSPUF5C6RrFZ56ozXrUQQHEpwPhoC9eMDS6axxMwQzVRUbT8d1w69bHZmuA3QfHUgDtVY3Dog",
  "key34": "3gjnCzqCRfAuXkyNbAf49W7QNz6e5iYgCNro1hLqoKnet14GKgoNJyyK8rJ72kFHNvrp1hf2HxzqoLGKTHsHr5rr",
  "key35": "esQFFXGdgL12VMRA1vhEGpLWZkXfE4HSLqQPLTfNP4CZ2391XM2Cqhvggshx5fLtGJjwWV1tDmK1dpiUu7ikvzn",
  "key36": "4q46tWp2Kpk7MX6WGEzMLnJ7jrAZBgsdzcq5f24TptabuJjhFschR1EYDTFriHWQoJ4DRygMMbpmZyKHs3uYozZb",
  "key37": "3wkQ9kQ25LR37s3nzUPo1oCeyay2ff5CW34TEdS4J5nKPL6qdr6C9DGB5b6WLA8GB4ScTmQWKxFWPR8yBba3HF19",
  "key38": "3kSr4imExAZdsTSHjoMuGCobBzdEBH2YtmWG4EBiVQMGBgCmGTb7w6dr9pBxMzqo4D9mb5pVn96LwuCvg8PXmZeA",
  "key39": "2FKAruGEkaqJoLxdUwkNVuuHbKBLWEiy5kH5AfwA4557AM3Zx6gfz8GeSuAWh9YRjigsopzn2ydmdVKBZddpSsyA",
  "key40": "5GJAgDrBMZGzkW1BZesYMcLVeonCRFjq9ume1b365Fs49PRG8hikRFa8xoTy9nozCHHPb4XAwdCPgdAEoZ9FimBD",
  "key41": "AzVnUif8HgQhLUNgi7hNEceGWzwpvhVU1gbsLKHr6oB8eTecnmwQDhs3h4LJtirQKXCQWVqkSJ5q4mvGVgDd1KM",
  "key42": "2wwWKr3tZKg39d5ECcD1qu4vVUQe8ybuyQCAqV3KvxjEw89D8Qp2MwmpthHqKriuoJnMPEFfUdqP38RqhywvzN5H",
  "key43": "4xUqKEVkJRfPd4TAtX5rycqEAeun59CcX2vWkaxfcpTrGT5vazezxRNoVevBtVEUWBtCv3jr3L7PpU5wXbwK8dv"
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
