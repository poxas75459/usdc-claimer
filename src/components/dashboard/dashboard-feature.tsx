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
    "2X1aJfYP9h8Lo9nk3npqtqd9tGBWSo4PnALpdKTTg9iZPmVM8ZbUm7pXoWFv7KQh1EwjXFaHAUXdts8YjE9zTgJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ADMewxCGWNjUwj97beWyEzofvPQHvDHVW4J17nthDuJvwwc43UjQx5VKhZPDNvbzTE3Zy5oHo6XDxfwB6o2Dhgp",
  "key1": "5QThgPUwEW6pyL47Ss5d2VhmEEbYVBgRPF95FhwhpRtPXm5Jc95kzrB5KKxuiCgSoGvEMPbmf4mkU4h2y5NwcAzu",
  "key2": "22mRS22vQbAFemdaDHFfJeKPx9ctXE2Q7M871dQZpuP4oHmKfoafBGL5uzQnVFMXLu6p7uNMK39tFupch1eRcX3z",
  "key3": "6xScn8jsawnEUzZtKtKtYNcq34YwppFbZHkXQbgrp72bTcTp9jhAW8uBCDSouyYKuxjUEmaN8JPCV4kUjTiAfHf",
  "key4": "669e47MyUXbRNjMfP1923UaeQZerYzBy9CVLELSV15Mdw8m1rHrR2EehGVPoNJT31sUvU51aMYHjk9cUCbBcSaM9",
  "key5": "5dqP7y1wgWv33giyQZgBdKYNaLJGRWDjEecZZJsDagTMocpFSXTF6nmedqHpo3sAnFC6YX5K4vTTohrD13fBjruS",
  "key6": "5Wfm2e4beMm6p3cEaasmZvUqwepMKujVFiVsXqVsBTKbQFnTwHzXyaPfmpqv8CroDxH6soxhNQKwD8qdp1wLCXvw",
  "key7": "YmavHwWL8pWPK1yv4ZdpV4BqkoWN8UdWK2fr4eSfy84Pym1FJJB1CzSt2tYd4tWEwjmXxpmWKMK5adLwsMDvEFp",
  "key8": "jDwfMFQNsA5Zqaf2UUKR7915Afmqt3cFXKtzeB6GxhAE9MEdzqYnYmeuuKVDFKzi37kJ16cz9ddD1mkDGM1vSY3",
  "key9": "24wAhMDWhcB9j3bc1ce1sUzqEkDBvB1UK6RDYQQaugVvaWwb84Fdmhoj7yE22uEdC5d6nA54X33TxU7NGBrjjzzG",
  "key10": "5uN8eBzXWSd14kULCbFqUHVQoBJJk9K7TeXK9CKtip5oEGunBrd1Eb5WFL83WFZCSGgXfDe1WiTdK3ZPmdQfVeNM",
  "key11": "w9xsXpJdQGCbgL1nqXxhJDrYFpzYd43HHRHdCSygqEmpEt57wJMA6y6gP2ZM5J5HQLs65kSsfRbrp9i4aaoGmDb",
  "key12": "5NVXrUaaWDscrGG9XTvE8MqCCJ4DkTWWYHBtQKTzr6kBGWdM9cA4yur7vUHmEzz9uMDkt1LFjEbMHsjwkb1pG3xA",
  "key13": "bN4XG9bDufp1Ns22JCCmPUHg8GyxtWpj9SYAWzCq4f52yahf3zSi552c2mZ5kjkmwcG6HNjcdXLbCsiDE8AyKKL",
  "key14": "zic1dJtEBPc8MyjVfVKfwrE7eZ9jkBUZ2EPdPawo35wcS3fUwFuhWgbwWerZvchCfyS2qLMkS5XUcbgZ7ENYyNi",
  "key15": "iPLtoDKiTkjkSsniqPe57CzG7az3pjQuGxAwjcidsUVDV69pr8zB3FwoMkC55uPRj3LZ6QDDmWiZdRDNgDrt4nz",
  "key16": "32Z3qef5uQR8NXwWKXUc4hSJSSDPwUfvDX1j2kSRreF2NjMNGutsUomj8Ag31uCZu8xsiBMg4HtahWLqiTLpiYvi",
  "key17": "4EGuJxD3VAAGPvRQtpsuJ4Wk7vzEg5EjDzcZhAysSmzKLWzd7vzE6FRVwoSBFiH7kvac6rnY3J2Yf2u4rcJQyszZ",
  "key18": "2QmBoarhLoGsdYoX4VnCH5ZzVrCiPmEFVh6q5GFyEww5LGuhTnHSLXRJd2cykodTXzrvnrcCJvxPAUhFLJ9ef8ak",
  "key19": "4cYjtcy3NbrKqFbEEF9QtUXPQBu2GRhaVzTvBtfJJbYcaZuGuZNb1B58FJm6R4X9inPUvKufjN1sZAC2pozpA3M7",
  "key20": "3hQwBqvuMfLnBGaUYnYUj5dHVmZDn4Z8M75vziRj3TVrR11uNV6tk74ePAzpaWAji8TvkRnYRNLRet3meEY5NzZg",
  "key21": "57tXAW6P6F897MEv2Ew4wMJwLmbt9qZHf2jAJgEHPn989mYSkygCyDErWJderYJtzhdpiGmsMpPvTW6JrU19f2h4",
  "key22": "3WP2bc6DySmmcYMJHiyvfixqHo8WWk2WGFYiLa4iYWuco2LyZX4HMJFsCQF6LBzWHd1chcWUYA2uiZY9NCUaiPnb",
  "key23": "42HXgjYtht5rR39xhbe54XpUhburGbc5govNAEMCtEggJZYzJXsbbHPUhxMsNDvYP3sYaJqCuM44hcCUKjaFiBBG",
  "key24": "GetdFkb9UUpE7g8oygxLNaVE3zHPZEjeUL9ND5nw6gK8yu7kkcodf29QifUedAEQ5CvR39LKNCtUpqocgcdkLaN",
  "key25": "4mcZheGxwZhKnKRuRGvGWdDAYUmjVDM9K7qK8ryrVhmXv1RMsVREnWwi1RfHtctJJhN1L9LPHU1L6ayrAAYfLr4p",
  "key26": "wab2F6nkqQ8hP8GgqfNnRF6RYuX2yJQfhabQNnVjNF6P1XpNC8gxgXMH9tHrroXgFB6mEaxo4dNPFoHgKsiaKK1",
  "key27": "5bH1PfPjhVwRFUYXthkn64V734JcsGDwQuegQHHPpcVbJoKfbUGRvNSvQaepqmxGekHiQX2Uzrji3FkMqrp1WvTc",
  "key28": "56FkdCdbTBC3ReuVXnw5uZn3R4Sot2TPGd8yuQRj7E5FgC4mv1egJhQRS53HDqyvwW1dvEaYUMqaze3ey6WKxT2t",
  "key29": "1277UQvP7gA9Td4itejaVQVpJrRBqHyZob4sMW2Lb3gCpqgdhQ1xxdZeQ9QtRHgxjp4sVLxu69rWTCrPJrnjjsTr",
  "key30": "3DD5MAmV59GtLSyzfMUnf9cob8AUWP1azyV6EcmtpbKMwHm79gG3cvmqK4aX6yN81uhb8c2u1EzLUgzE6uSCGfvh",
  "key31": "82vQDxaHaUNj1XB9qbG1nox3TnyzSbeejCChrjp4DWRXnToMQgUMevoUm9jDGzfZQHDsUjCYzRdWJdJiExmnWBj",
  "key32": "4UjHvqNPtKkZU2Yjy2nGEUNuW2VY6qXAfLtij89sbGiJk5E92LCjzxix4Br32skcjKWktMvo9hWmtcSw5mRDFsQF",
  "key33": "55gqTEyy3J9YFs5hGwwEmzx4WgLb7u7EZDvERgxCMuqojgf1aNEcWjpf4x2AvJ5vX8tivf2CgskYFcrYeCXjDQWc",
  "key34": "5AoQKnEzK2MQysHLAZgsR8uAK9ihAvPnrLuNadebk2sx5ZS8qoNEsm8orqstYkNAjYz96kY5fUsGjrW1mNnhq3gc",
  "key35": "4VpqKDiuK7sGYMXmgoe681dxZFXViCFGtaafGtkVNW95F97hj8yxV6BwhjF3SKTmXrb2Lfm8Dh3d66s6xNkSPcUr",
  "key36": "5aQi9WEZJFtwS2qYjSuxX7iH3MrXx85kWNrQWxoxKtLwnUPA22vK9NBVNHKQMdciGEee87bX2ufacjoeksfjPcdf",
  "key37": "3eChH7cPGtENPr5UZeXKdWPNfHZ7YpvL4EpgFSpLx5LQquiTEtHvwai64ATSbJzvHdVrkfqNimeKuGQquyizo7g2",
  "key38": "3brg4jE5eYnSm9bwT44rekgm6RD2vTaj7juwTyGBeWBuZPTeBnGHc5mDeh7BM3erfSsHgNBSKCMdaCnPgqNmUf78",
  "key39": "4cq9dYJSfjd9HXdddAFNku4pY4ia2m4yh5HGYrcfpLxeh9fo4homJdedM7aqbhz6dX5ARHJzK5QdQ81WXXwchng4",
  "key40": "2JRuBac5UwH1fF5girJNb59i58tZdjDgCnLBAZiofVHGtoyny8dd2shZzw9Wjod2b31YktRCgF48DQfQnBEZk7Af",
  "key41": "3P8dEan4CXyu29RYvex4PSxQiuVgvM9zP2VSjhNZcWvdutmLEL6yv1fUh113TQ58iUjXPGcUyimD1STpmMf1jDtK",
  "key42": "2PzhUZYBTXcwXRdTtyuaS7qbs6bXrAGR5xtaGyqgaXAZZUW1y6gz5DdjXZKuRtgh9qXQnYMZH35mVNLyXpWTcspJ",
  "key43": "45R4VNQRmpxZLHHNhqUz3Dah6ehNzCZy6aR1fSdFXdvKZTxLnAwEx56bGQgeAG8iZXzoNkmikfCYBoc1cYS8xb3m",
  "key44": "3cYT36atch8kHMR4pncGzrLn4RU7wNTbucK1Wuviwp5FwKmk1L3mDj8aaCSBp3k9ym3QotzEEcoe9LR6M1A43Urt"
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
