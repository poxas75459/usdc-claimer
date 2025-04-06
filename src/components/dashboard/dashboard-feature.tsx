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
    "2vRQ4v9qWuBvbANJjRTqtcxvAJJF2noXQhEkkNWTNXCE9PaUmdgqJDxN7GEPA8p8AqQZGR6W4MimCzTTyFpAAgzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cDZrhM8YfXJ1yMNEA5RVZe1TE44NFs8DN4cXsCGFpTosiyqE8qgaWoJuRz2xrUUtnz5Pi8yyNksjzMMd9c8U9vS",
  "key1": "3QXQ25HpR3SRb6hVeKr7uN8JXj7DhA3jrtjGE8A4PV4eFf5W8iHebL2S8V9Sn3C5gg6HA5zZ9p2ctszRmHF3QSM3",
  "key2": "2HaFzet9hFmYBtP8Sa7ahqWuJ4VAw2Y5GJvRXqWdvRw1Nhrxwg9jWWW2Ngww4i14aWW4kUM6JezwoJxwK5Fbv1mW",
  "key3": "4r3rQWoNURuQ45mwhTvkeJjens8ZP3nMbKknNjc6gzaLsYp13uzJDQ4GrP7pPJGo5zQ6sw51VNUzcprKMJRFvXja",
  "key4": "3vtqQ8ESbmpqfy8SWbjsCZXZNYjNmBowpuc7tpeLTzLY17RBUWuUYRPBsMadJ7Q1E6S4bkycVv4ixg74p4zfUbU4",
  "key5": "5zEzTB5TzQDodMH5nLRUjZeW4h37UY1frzSfY68oWJCcNSY8veAM3D2CbLpFriGX6UkXjPj2Fz6cCdDdVJSDM2jH",
  "key6": "5mQgvNXNSSRgDi4iQbUFk3Ft8iSAiGabdoojX1uGBRe5oDvqPmzbPeNuWyjUEpwqP5RKR6Pcc5HKCTwU6HQFgVAa",
  "key7": "2JiDwViAm5nLYe3HbcLgpr2zY9HdLXq7uneZG3VbZbXiJL23v3Ws4LTqs61sR5BEvYX3orK3DGvEx4rK2k1QzwoN",
  "key8": "3V5diPL18n2DU11MCt2J9aAnhNMzW7DSNHPww31qxwAVmzvRER6qPbstqNX9bmCo6FQ9MdJCMxhZXA9QkMjEcq9Y",
  "key9": "49W4oeEmeKnJ8H5eUD75FzSyWu8VEHf2AAWLSfzAQhqKX8CH1tSHSv4Y2FLmKDc933EbemNY1TmdnGVsGYtHM4HR",
  "key10": "2WR66Wmm7EU4P1KTop9zs6qKUN5fJ2i7GBxWSC8NByRsa9LPrTh4dGKSmzDgu8jkLkMpungrCLfbEF2gHaLH9baU",
  "key11": "3CMi9WXz6MacVY32kEVes7xMYpq1ydGNWHMnAMys7nwFMEkhUmHjsJpDheF8QKybfkDvgYtHARkLygEnuV8dJAep",
  "key12": "48xjYNGjfzcbsF4ayikDZ5s99chyYFr55NegCJtuV9uJHcA4v2oaC4noD5eJLViAQE4gbrbeh23nQWD71cdTVNTr",
  "key13": "27k1srgsTNtNKSKC7m2o4TFS7HjJRMKQym3PPSA1sTaBRiwzkP1dwRb6wKmngKK5dsdohfakZmZuBsBzqgSPxUGA",
  "key14": "2UAEZBHy7tW1ZD99F9PiLdwqt7KW66hNMwLLWV2aiVevrVWwHhbXG9XpdXMNW1gYAFuxvLSWgexwfcMMDWXQcNW3",
  "key15": "4VAJrkfoEzjD8jtbaizPsefmSdtm3TJMyb1tmxx6BTBejos3Fmzdbq1AB95xxnYUBPdquC6p2D8nDn4NyeQrZaUM",
  "key16": "4oEqw4DyLBy5KcLLiKyxix5ibKvxbyW8yxnUY93Q2DJgo1arSPkHtTi5ZpAGMN6qHbgWLVWaiR62NKjVYFVMFCBH",
  "key17": "4ebkQwKGyK4b21rxgQ7eL4LdKFxKm4pFmUfWRrZmm9j69CAnnXw2CPJ4NGZ9ZWyXQRncxZPGkuJL7xS6Gv9M4uCH",
  "key18": "2tRPWcLQaeua4oxFJHjha3nVQRKzpT78xF6UFJiFwNCXztssASyKx5FSY9iFB1PYpuTi7JN4J336ZU2rADJCEtv1",
  "key19": "5LsTQJ2iQmhjhUSY2o6Pn4XGd8WakcyExKMMG4pPUCYuuk6ubmVkd6WS1MDKzP4WpxpGV7MJimUXQ59iRSbBMNQE",
  "key20": "56adAjK4o5rNPwjYfyjFUhATNYYqWsyHXEbTCAL78ykuLrsNUD3HBtten5B2RoSWPekvR4z35mXhHaRDFvXyuFsp",
  "key21": "24wyuktQaLV9MH5hpsgg7x24qJHt42xco1ySfWT8F8jNwN5PHx6PvqpxVsfYLbanXJ9Xx17V1YxTCTqaNTKGhUuv",
  "key22": "uijqGD1MzcJa4BHBuAPsJxCbMESv2L8wL8oHZeEL9JZX2uf6H6xym5qXGgKW8ekDbxTk3xFrU84MNHE6uuANLv5",
  "key23": "5JbeKr1wCoThRBj4Cdhnem8zLKDuGuTZd26mGCudtgQ3GzjgXHqLWBzX4qiGVWMQ4zd6LjW8DfgXNgbvS891pxzq",
  "key24": "4esT245RwbBJQi6TjsDiMz8ynJcAsf5iAvoMWmU44h8Ln1tor5pX2Pc1RNcB9vws5LfuDRxzhR17FtohbXUqGRmN",
  "key25": "3RsdYztPxo4r7GJvsvpE2ghmwx4K4sHQPt7ZB8rvNo1yK5G9Hbex82kH7reeVxnVGgiykFMyBBYbPD9Gveph3bNd",
  "key26": "5sfyKpF2bxMvnb58TqfukDQbSvcfNQBdZqL728sDP6Aqgn6aCTjSiANs6xtvsfsgGuKFSqqJUp2P8joAZn1z5rUd",
  "key27": "5ismwoQTVG98RWXSzKrni1Sbf5m8ozaV1VLj6gMKv3wP8TFb2YZcE6gn5F7WumS8yrkUMqk75ZNYsDNALUC9EvL6",
  "key28": "5hK6aNRMhUxe5Y1JMfr2vuQKTCNDEfobQYA6JYxhrbmu45UgVhKtHFGah6D6h7zAqvYB7LjpV5jgCo7BRD6YiGWd",
  "key29": "2Pwq11o7RGZGbq7A8MQ6ra5G8tQC6rhEXBi81829wqGGdorQA9fixo8SsB9akpw2rNJL6Go5S5r5Fyw8XSF7xcEr",
  "key30": "2NGQHmfTfF1HALkM5TjPPTxuN1aEx9X73w8sWzzNiYtAnSLZbfaFoEBtz29Mq853t1gXPB27cDMu4mU5BX6HMuxa",
  "key31": "4UH84xNX3gSDrQtosdmtC1aLBFNnrdoULb3iM2fFdgCvyp32wKSbqNSxDnDQ4ndr4AkStoq9qD2YnHLJGZABnho8",
  "key32": "uCPvdvqSf1b6k1mvzP1pqivwMGhiXfcGF31MvBFKzhXysPL4WhEdg2RKhJ8KqMxm4tYzHBWajEa6g4v9pPikeh2",
  "key33": "quYxH2Y1XwpzowF9ajZDUoF4Eu85DjMcGYvgTFp9iqVxz91pB4P6scWkoFYuEt5MHJDobRwrri5khTZfYE2GU9D",
  "key34": "2kdzLfb7uBD56o6WrDNGb9vCTAv8Xw4R1RXS7iFkoqT1kH2qFJk1f9N3k8vAX9ZDDAnFha49TWXr8qSBRcVE39rU",
  "key35": "apkq4KsKBZiQVmNDGCxet53TeDyvxjidY2ZkqqwdLh39sRpa6JmRU3UxnmsqR9rjJHM4HMQdtN23oiSfLfhJhPr",
  "key36": "319dAVeShCmb7woWZBa8B3faWiiPhApzQdotAquYHRwNkjVjdcymHi3NGVzAtU1oQ5Ba66dPsXLsSjs6ChJNZGHt",
  "key37": "4kYx8JwDwfaTHkxv1TVnbcojW7GeVjyV1U3SUvUeVTKxLjtg2nABFUrrBR5Q6ZKJ2FnB9YUJNYkunrX7zJGPm8Pj",
  "key38": "39GJwQswqN3v6Y9JGxiq7cGZPyHyWxLYJywXNx9oGZ4xttphLyqk6hsBxnkCRbYgY4wu5gLpUTD1b1xnGdaMRktF",
  "key39": "52c87GLYx4R88RwUDrEs6ZZTSe8v2pQabhr2hvKPMKJiGCDsUTnZKLR43o6kqHLAXQcms8at2Mc3DVvhLMYdvuDB",
  "key40": "61pn71wHqPbHZja5vxfaGekb2dG2JZvQHVovxojMKCZszvWSvmM8YptJPEV6S54wXpYYHMwQvEhet2XxmUwRf2mv",
  "key41": "3TA24DH3aSaV2yhQDJRXe9Gaus2CTMmkRYM15k9qxKKZxUfZTEW2uD6jSaWCqvxqg55EFAyFq6F8vDuhtRg2u2mP",
  "key42": "5tN7FnDpxTdJ1ZepQ5tFofQmAVtf1wriTTPJrWbCLn19Soomomm2QEXRJZ1qZYwgaU3r9iVs1QSXBpZ1YY6putFR",
  "key43": "43o1wLj3QtowE2sEqDRpGfrw6WHBVkzRyjNMAcFgyRjzvMLjqbBpcNZTr6JFRzNoXcnCBcD9CEYS2zCGQ1FFem3e",
  "key44": "2F2CjGTkdJkx4QXL2KTaKGpzQWG1W9Vvg9rGR5VVjLgMq1VAuH8P2cwp4Up8g4Vm7nQD4jPYyXa6rcpHSJTytEiT",
  "key45": "3ynJz1qNV5i97sBF23HuPYDMyuQxrVZNfpeeWnBVQRar87mGte6QwKTwCFFhj41kP4Jc8MLNfNCna4q7be4JbRFJ",
  "key46": "5au3BfkUtof38uCrfeb3cgaGP8STSHt638qgpqxGZaSa7QbijFkoj7fH7nddH4818MQcc85Uxn9VCkKBZ4b8S6zF",
  "key47": "4EtLejJtpGQiC831gQfNoBjPFqQJpCEbP6SZNh6TCrKKLn6dCTgPYt3iAtEfTj8QiERaWN8iq1WkU7hUj5AvA2PT",
  "key48": "hQsPkSdNt5tNXx4pFvk5xZutwQBfYCJkz2HW6XSZaBYqPnh5et3JdZTMYLAVd8T8VRwX9TxQtdizfJ8qVVoTD6c"
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
