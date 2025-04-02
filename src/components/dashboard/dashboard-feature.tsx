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
    "5BjpiA3J66cEhQLzstJjWb96UNX4ET9cWmpe3SL6DCmxZ67bwb8tU8v4LWkM8F2sq7jdyBnfjcW2SEGe81FnqbhW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yDts5QQVUwDhjGFH9UifR5ZDfex9s2hMeLKfLTdxunqg1oVzKAXCWvTrKRGUs914gSvPhrhfFnhKbCb5eCgSwuT",
  "key1": "2BAV1xbUbTZAA8CoAqazDuXQ86LuWJyZs31CM5gLeUutzj45tKC8vYgWLoCUeiqm26eGneobjFoYXzyyJiuJKPC5",
  "key2": "5crnWwW2ga1DCHPb4MaQonNUNobK7Dksd4zR2P6Dnk5MBdoCPgJzkkh5354GhQ8Q1j5vZosmdgqGh2u6sgFWmRWi",
  "key3": "5WCmVZACGo84Ehea8CXYZP7vC8LxnagLGMVZqYDj89e8hPHKzUJgZsVFZatyRGKkgysRxwz3BuPmUssjZ4LrJZKG",
  "key4": "dnagx8z2FgC9HzeW6w2fuPQ8oRqpZZkByktDsjrz2afs2NGYrRpneLoL3Yv62UUr84xns7T3daJBDSKbQRXtvk4",
  "key5": "4zbNurVBDqAn7nF63nyJx9FqKfCcdfbJzk61Cn6gYSPYcxJLAgeyfdtAGPgwFLcNrJxrddoJjvFWrEBga9Cq9e6g",
  "key6": "2Gd8Ln5JmvbGzqQoBEuxwMsDLseEBizU95sBKSekuq2hmNEipQ7yaGHCa29D31gdNZhh7JaQ9rg6qsFXdPVCEjEg",
  "key7": "4oXufV7uPmLbcmfDJeEWjipMW5pXzGaZZ1vMWkPnPu3Qo2bsvqiGuGsVCSyYqp5giTZgYev5yiqsVUserqatC7vs",
  "key8": "ALkjoaPoBjHwY3zBxND7b5HjFFCRQv9GAJptLSsJ9ZmctAD6roqLWzNvXgfScgMW6sjjyvgbJoJaRHjRv7JHQVP",
  "key9": "3T9hAAyNiEnX9MgmzgFqs7FG3QwzXWNuK4BydvBwThFTnzYh3QJ8xMXQXDDWWpdXaubyVDjqv6PgufKHz7h2wQom",
  "key10": "tZEtQkBTzCGjUxtTLCDS7jUYLZsT3KrPPjBgojK9WAwYYbsk63SMoB58wJQN8J8fXNr7nbBbZjyWuFYZYBWvbZd",
  "key11": "sJXJikF2jm1yS1XhT342bb4Lm6yTgUpYCnNuVuJw1Ru9RHhFkmHFScYKp899X5xv328fStYCbZ5kQF25aQNMr1u",
  "key12": "wLUyoHWTZ3btTCdm3r7bAMZYKEiUWZcEY6JBj22fpzpX1m5RrfJGFtbMzusWAejXN5s4SEm5GgRWFanFYuv5gcR",
  "key13": "3yMFP5zPS9t3XPYhC5CBDZnSAesJyxLXtrQukP8AVgbbxhaHsoQWnmeyzhczaNXrb5JSU7eFkjRLUYuyJhQeug7j",
  "key14": "4bJFtyGztugXUxMsdSwQ4g1VQvUtgTSF5BUyuJJ4SRL72A2nLPVXWGfppC7iZgtoPPccLuajmquhZYyQc8m9xgqD",
  "key15": "4JggLfB1zL4Unsug29y4GQsZG5A4QH3DLVVvxqLYP7Ej4HoTnXVfTNZbuFeeUZYvAWEaN982pXY6R9NonSq3jdCp",
  "key16": "34nxekmShtfYP9kzSifQ7eS496A4k4dKGhFNDeHbwnj8uaRuYnXALXN1hCdSk7wCZ2Z6cYPutYFfiBLHowrzeQgh",
  "key17": "5VadxaBGsMgM71fhixKMmgUesh6femXYT61DCrH7wmmxPTYvaMRNXyQHaJgGapTQaGR5WxcY5dTA1uNWvyNgemNs",
  "key18": "3oBt5NzPxihT1p8qpNgPDrUjYCZkNyGa2Pr37K5sw2WsmV74thu2vGR7EQAFhGrmvbTw1rsUoz6BgRvzM5oBoR7U",
  "key19": "27HFDr8mAiDa7n8fSjRmMnYdWA8PF4hcKtrZ7WAmYV8MYoNHcT3cwQDQMgr5a7WtYuezRD2doj1RKURDDbhFnEBW",
  "key20": "4mYWE9cp4AcaC1R3wBNi6apinkZ2JJv1VuNZakktXcQLWAyLLuGFkD78kCg4EShKfFsFrwtjDmYUa7Kvcvah6gC8",
  "key21": "2egGocA2cKyi66u6juG6Fx7XNaorfGzF2GVY2GUk387sLxnPzKbT2yhC1ojbz9qUSSekhF9Mw3DYqmazpt6afyGw",
  "key22": "r91MPLz3CE9YpJZtBy1uMbqNhCPF4CaSN6jyCa3FGVGyT9oZTp6g4RwsyzmCPGywBcfbAuEQa7WcTgRMviSGzHH",
  "key23": "7ojX8KRZaZZsoLdwCKsmfRs4tPHX6pnuHwqNegHtUgnytmbcJ1eg8Eka9zL44waMdz7Fu3MtpbNC6p6pXxEHdZE",
  "key24": "aZVkdsd45juw3J9H9faDDqj3HmwVM5L11jJYLUWDTyMHd6pm56mpCxEhTbTHRmYXN48SEK9EWDrZgUVXPURnTbL",
  "key25": "5YXF2uMjmBnfi7JH8JT42go7oxHYZVhsRkMd9b7cUYHCAh46nEgakgL6J7WRubdWCaivZqbhecQMjQLRBZ79YrPo",
  "key26": "2jtSSMowpiPTcKKTCx23ZKaKfLhUAyzqGVXRZVU39qGT1nASDx1xmAn9WsqTMwoyfXAycR2kkMMZF1wvA27ja5HH",
  "key27": "b5E7AyXenQYiZuYqZmyh8on4gNLhVGimFjsMR9cVj13EkoP5E7JVFgSPcYZZWcCsLWPkg1Cknk8jYsJJm8c8KGh",
  "key28": "3zWfKXvu6HxcyWUjmBRFJ9oubjv5aYr3UsoVYtsPhifLf6SG8nZeZU1PydHMFfZPCvijpeUneeUi9bA4c445cnRV",
  "key29": "3WBpNJP9tuqEWSX3HLDogrTHVPdYv8z2Lwx4FQ5AB5VSELqeRBjbcV3SD5dsEqkBaGtviVUy3z7o4v7tmnjXYN9q",
  "key30": "2HHubUMRYrRwk3uxgBEcDYLD4XdHvb3s9R6i7zNM3tAiU2Qhxc5Fyfqyqaq1fp7MSGdfiRpemHw6so4vZXpwYjPy",
  "key31": "65pzJKs2F4EFH6m53GgzoY84f7ZZM4oXvoH2UUQVn1ZtztyzeWaAq4VcrLjfDxgmVN8ApuCxKycUj9sCGK8W2ZSX",
  "key32": "2ApA299d8Uj9A4qRdVrAj5FRZ3UsBsLpLggnVDdoGRFMEzbZBBb37rkx89zBYAhCC7oYyE53FG6qZQZCMLzGjfeU",
  "key33": "2Gzfz72reBkzNWWub7ehyZePoZ8PcgVidDsx96LjG9wnLDM1dS1UZjLiq3X4Ac1jxLT2oZK98GUUNksdKuRMdUeF",
  "key34": "ohw5wvGpgeSG7H2D5f818mGYt4u3RY9jWxxcPxe16AkRLHpqsfufC9w4Deo94UeoV9w7TUpxjP4erV9XuEnLxVM",
  "key35": "24pgPZD9mrDXX4SwJGS5UwQdxpdsyCPTKbDmYpNYyhcDfXfStYWCsLwFv7j15xpsGz5xgCwtnu1EKtmUxzfWd4jK",
  "key36": "4S9YW3QoPx8SBZsrBuvzAzdgCSLnizLVKZx7bJnYsNv39qwTpQu46iw1h8AxCXHLukGU3JwHCHUMWFHV7ZNMhF1L",
  "key37": "2HfwknKGdVRYubP2m1g6MgmSmnqQ1wo9sQ32pEU5mea5Yao3wFto2GtqT1aNTtpRvezfpzUQgG4o6BcLsLG9huy",
  "key38": "4DDa5EEU9Z9ErfAtVBM5ENALtTVFRAJRvZs4VRqV2iLjat2upeSRD6yJHFRJhiFsL7WuSPvZhFryx8NXvTMYRLRq",
  "key39": "4VkmJodQAEV7HHFc4zjwPAMUAXELb4THc7WrSUBTh4tDMYhBFXajRE9ZJZmNzK3WWUKadgGkp4GcjBNFGyrxDsi1",
  "key40": "37N86uTGLQsq6cyA8A69b9G35tS7Dc76p2LkmCq3m44tRKKY55KjGsbuziTkJE5sECrM9YhCobMoWzU4kakVbxVR",
  "key41": "4K6sLQGnJHZF1qfJ1YBxyvn9nkn6SM2uUMYBZZ5L7Dksd69UN21qtRzdU71agUpRWYf1uBkp8rbKC6LUpUWUv3ti",
  "key42": "2y1y9jxnnAHwP2vadZ62rFEcMvX7Y2UxMquUsrgtuNo8U3KsGxAjvmAeteSuUZ2UtyCMqa3Z3bu7L2eVjcxZh6Y5",
  "key43": "2Qs3shk4yyzs9mXGzM9cxX7VZtmpkehgmuWGNiccGFZwYd6ZTgP7W9o4savAPqHddgRU26Tj5zbjyJUqoU4aNnPB",
  "key44": "4Q4WjVHZCD3wKofmZeowd5kruVMB9bUDBVnJuviC6meUWNwqsziyJMf2g97GXgs7szRU7JahhkLePoFN5WqC3YpT",
  "key45": "4k6dA4G3Ha3kpPYAsgRAjMY1uMf9gnJdfeNHzPW9t3ov23S7Ke1qqkYpqFKam9yh9ePnoxud1yAsBGzejj7GS8xw",
  "key46": "3VnM2X8cg5nE9BCMdz7rCro6CELWympakuPFVbKgPUkK3PQqRAhsk4eDyTJrBe1r7zPFQrK18tL9b9dtKWCCrVJb"
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
