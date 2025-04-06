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
    "3eL78EWsjjgvrPGT6YddLDVkmytjj6UcrqN9fjCebka8sovUm4npXqWeX1F9TxGYbxqHkhubvNUKhfSMA4vQDpD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4acbJucM9AavinVcS7ovc2YVDqe7hJQ1crzMLogYmDQrohbUzDE3ExKEitxbY1WVJ7KVuq82GGWkJj1AKLh3fCp6",
  "key1": "5HfSQA4t8dGz2qGg9RVs6UNDZcDSuyeps7GoajMUGmmUEmdbNgXboGUX37WdvHZ2atkD3LcXU189F4yqqwUUbzVr",
  "key2": "2w6Ep5wsL9t4U6gPSQfuErWrZ7ScwNMvTReTtoWNpRLvz8PnZJapkr6bKCKDj19TWM23YFyXoLB7M5jZkSs6P2Jo",
  "key3": "Ux19RGHqfYKgguPXLshM7Grq56vzwxXxVYH86wkYpwVDwG15LtFhCe3EgTAk7mUGUkefZZY7KYLkSZU9rNL2pPa",
  "key4": "36qWvrfy3TY2fapmomDeHFtCkfMnZNat75ZimEFLdWtdYoj5mdjbRvA1pnbRwQ2xfUrHpCUmLXQG4LYzXqvEFMCk",
  "key5": "3rnSiBASTwtq8caC7vaUJRLi8XjETYM1sofRfKfo3GZxMnpkDAYbeMsLqMtMZ7CFRxYKx3Eg1gtxjBNxbgcA6dQ",
  "key6": "452HBFkYzPj2dkdEbKREJwDLKae1Z9JY2gSunhKhb4zJxXiSNnNX8QMxxdoEw6fPRnGTLpEX4iwT7JTg3auhG75k",
  "key7": "AvkgZhFTZJq5K8H6g4LYFH9jByW4BTw1jzeXa6p5TLthATMEPYvLbJd9Z3P7NXr8pVhMfzDTpK2cZUaMQn7fRGD",
  "key8": "5kDUJChmqw3fxQzRKnPh9NYR4zKCUtJaCnRF5umYdwAP2C1LcbsJMV85KYPU4h7YhmyNFV6zhgPaJxU7iFC497Fm",
  "key9": "4C87ZefK4TA6BjYvkHDkF7afFAPNTvGrUH8i9ZaA2noyqrezvRoBsTaVQVVLGDSJM1huR7MScJUTjNi9tRyndpmS",
  "key10": "5sUBBT2WL3rVsCD9yrKb5xV1fHZtgAESU7oBgwYQAiBwVj1it3eqPN4Acv2xgofSuQMCkjZXPiPx9gPXnQneWbL8",
  "key11": "4tAQJtrSJ7dz8N1ckjKrtZT7jv8K1h5Ro5fKVEhLwR2GcktCP64Gj3wVomKemGidXahmnzDaUXu8nYJgkEYRrb5r",
  "key12": "481GzZuP1HHbKrvQVLCT8Yqun9YSqjey5TrzoCzAmiuUdL4KoPUrfbmrLRCewXnYbRVENGfhomitvY9QudNpo8xV",
  "key13": "37EMcUnrUZRm6ev3RuXqhqy3tEadx2j8pJsFwTZq7a4GHjUq25LQy14qgZMJjsgLmaUugEMDWt7eHd7hJu56ibUe",
  "key14": "5yLKUnQn8d1e2YzmJzGmPJsEYikv5fK7vb6spLjt8qiG5iwTzketbRZpKyc6EMuwaEN5zQakFRNvTjCbsBUxSg8v",
  "key15": "5u1WQy8pF3zHqLnj1iosGGRUfC5hDaTaH4nd6wLNkqSCG3YGMgVquxDGXCCJmsgyfFbwmPMKDddphpCgDnnAqwPM",
  "key16": "mPdtkkVNpvGJ5tDTmqQFf96WnyRxXcfsHWzXdyDvUPRtxcKyMMh1WvV2J6pKsYNfY6FfXTU9U51HvQ5ir11jxJq",
  "key17": "3GSKYczkgytZLJiR2gpsu6bPEeNXETgxKEsXYLP3FBNg2qQVsVKj21RHVpnnQa4gHuWbQvERDwrwhg3gjhQNjkfX",
  "key18": "13642EemSXJPhx9WuwGHUcNZF9GPXyAasLLB5jqAKUTwmw5cKZ3DRGXKjXgUsrPbfM8zmbjke14z4Pzamy8R86X",
  "key19": "2ConnUjLTyc3MsCD47Bpsu8kJc35KRHiZSbrP998P9gFnXnEJzpwA18ED8abTPjMVTH1yEAhjqTosNiXmv48F1TZ",
  "key20": "5QjUV7UDfk472gBMhR29TS6QnLA2vsw8PVcff9BLckGV1Dv253vA7L88AtcWTXeYaMm5MiUBC7kLbsy8PRUadXHM",
  "key21": "4KSU4YNGimXiyhdPdR6HtQ4FajtBpRwhtcmSrKWLRnrzrNDmLXNzZyi1hUPLcDRJsB9Cs6WzPLPF5nXTvHudCugK",
  "key22": "2bLvHtKZHpJHrm6stCPTs5t5V2452JFF6fGd31Keh7V4E5XKHeCPUgq9HEKYWx8M3mWjYdPwwCtxDMbKZ2R9aKWF",
  "key23": "4j6XqMUdxb8bxSf9dwmXby85558fYqy1YYrVh6KNkp3di49egqJ6pQPcSv9FfWSJPzpBfasFsCNHWCPw9uuAFSfq",
  "key24": "4XrSzyE8LTwDjTF8hHBWukptc3MjMy8eD2YVZS6FP5eu4FnNdLtrinm7MogJxsbavDxJcCPcTxEC8mBvx9HihmBs",
  "key25": "4vWjHwkAkD5wFe36NHbhj4ETJSL1t7ohxrwDNVNJkXAmeZjCYF8vTsK4p331qEUF3QpqKDKcrGtptd9sEpYuB6HP",
  "key26": "4qvqn8AtBHmxtZWSKszEzPQRSUUC4QnvyA8pD7E7ba7gRGUPxVKahpywhr3hN6DFjSDqTpGsiScTBGuSTU5qr4aj",
  "key27": "wpG3euV2QbyrnA1Voz8VCW7TGFpYbN1bmouTqFYNtbEQhr8WT59qUa9NUNL81nwCts9ZoECPfgN5yA3yv1485g7",
  "key28": "2oXwNbfxZAUUDjhcVNSkyWjL3rd6L2naUWzhLuPTnCZBYiZSKfkvGYGVx3WLccNdKeo2GSVGpze9jqfEmYdoA3TN",
  "key29": "5e3EnPLzznvVUWMCVqkHdinXVQtywbjM3wMaVA69wkN4bvig72brv6RZ8GfyLdPAH8CguXjPWiJMy8PUVT8AMBeL",
  "key30": "4Tx89ot3i8UXBGA5Jvn9dpiPTCiZccT7bMD9oBvnAQGiS8G7C4wRbtVzfvSYtCTtZ7HLLdhe5Eidub6x7nxu7vWg",
  "key31": "YUkPrrNaJ1PE3QXqzMr6WcnpuD8K9s4YR7yRdLxQqG8gJ6BaJ9vTWk8eVzqN4VsJGgQuP5cYEHz7qgfZ1JB8QWr",
  "key32": "PGK43g4hzLrmsHuGBAY7bRbYkYjaFASPfq322fUJnkDShEXndqaMFnRuNwF6QvvWMyf3scdbK4asEPQRRpER2Py",
  "key33": "2trGhFMRaCeSZNaS5cGUesmXuvxrabWqK8ZuBx2fiehkv9sxAns5iFH6GY7hoUEGdVZjGTbgiMCJKzAWyTWNNDmZ",
  "key34": "3jAW75kaLXnEgwzcjAwsXQAXN7xJfkjZd4MvybDVQ8wDtMkrZviGfYDRTqC9aVdM29ydBQmAPVuJNgHi7vXrbtnn",
  "key35": "3KKFohng4ELarANf4NSDGc1oXsjYGeKkT3SjA5eLA4TYmLmmU2o9qGt2KQgEBMZN13bSqHrkPDPQjb8QYporW9K7",
  "key36": "1yPz2xrk7ngJ4qPt5duaCapuzDpuMRoUaypQTgT8dXZfXNntyBEEFWivDF2H4frTHZy5a6NL9gR9qqiNGCeQuqg",
  "key37": "568rg75DwApBKJARNceSnJDRJYQpYoeX79V9Y1jA2t3qfJu4KK8B3oLsKXzTbxDWtbNkHhw17RkDNfTJzf3hApbG",
  "key38": "4NQLbeFdNqYPFDsJSnihsjLJSpgKAsvEnHYZfw3GHst9WG3DCEuFDGggRR5dE6rzjfJUo1qGZPWNqgkukNetz4sk",
  "key39": "462bUMca84PHK7dTwSmQmxYiDni1Yq2Gdpo7xgcBydTHjTamdWkDZqHqJtyKHr4QA15319ndKDQeuVPz8p2Mj43j",
  "key40": "3D87csvw14wabciYBLjq8H7pibzQGtSXMBkiNvZdub3w9qaonK62LRFzM1VVmTi2dXiULnveVSgLZ7j1xXUusVJH",
  "key41": "3ASo4Ff2nntoMFpCpmt3t7XvKNCSpvzekEqiyUcgrP8y36QnrDhwCRTFsDim8dodV1r11WfdyagVZWD5H4ULnaoH",
  "key42": "DgLsCRh1dWQhaDcJyMjcyAKX2atnxkEgaKmFMxkM7aP32UwiAySzjPQgjdUdKXkqVDx7vZj6NiNmu3CXXfBLc5x",
  "key43": "T4ig9hi83iN9WJdFiSPdRYqECdHWhDudhNHcdoh8bVmo4hntbwfhVqnFCxzY8ahQroHQaLfyr4Wf3qELfQbh1Yz",
  "key44": "2zT82drC2g9gr3CW4btYXBfqTNUWm5L328Gfg39CDRQydoHoMvARQQyVnHmc3TqY8itdtMQGZ4Krhszq9AwVSoM3",
  "key45": "4aP5yKWHHmWLfBR8ZWAfiewhK8Ujv7R8UG39PvQy7bF9xq2i52KHzj3HpBo3nFJTCtVQEEsqjj48FKtJL25FbCyp",
  "key46": "3bYNjmA63NnTP9fXxG3rFNCrW48E8KQ11Erf2xxDum5tZsMBbtoJgjrqGh5nPm4YHGp7fVewJMheGjKByV8yRGkp",
  "key47": "mipD7LLsomVB8xjmBsjtyDsLMXW1QYbb3r9rgj9JSSQbC2c5DcLRPQPZTNaooRmWonjsozhzsgpe6pcYwiPeRQV",
  "key48": "4PwRM3CDDDngAgBukMunxkVkv33p1yCL1cRFdcaVZdqYE4ZAqBAvD5wWwHiSFGA8ChVEpFqAjDxRrXvBDmCwr2nn"
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
