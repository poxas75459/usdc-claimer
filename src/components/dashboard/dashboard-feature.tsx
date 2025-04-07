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
    "2erDUwtX8BKw1zSukus8ALuQgEvJrU7F858VQvj5XxJcgpWEg3DiWsFmycpS7vgrkUFceKPQU4jeDZsWQtgtdc4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g7c8grV8EaVhaXhXJzjD2wsv7pGobtFhfJ6AUQm28RBqLoVhmzZ1GvGPLX3KkrqpzGFbMuNA7GJsnNEuMATgfgv",
  "key1": "2nx8Kxag6NCSdGJEXcd3SLtXms3vUmtgvybxGACSPSHsfrpM74ecBaysh4QLTyrKtob2wtnYwuSX7XVEfSN5VG1T",
  "key2": "2jHeR5uPeQ8bsPBubhGXVi6J5ssjbwnZYMk6azAYBh4RZWSF2SFRQRBQTJR4Xv9rJBWhoAZ2gQrfqG6XkqDe5E4z",
  "key3": "5TDEF7KWWsvuFsUSaoEQj3YNgCw4CL9zAqX3xdD66uSsnAYpBoMnxP6BALhjXRMa2LdbEhe8ZHvfzFLuVrUiL4Wf",
  "key4": "2zy5x2wMMsoZBxF2dyHx1zhi476FXH64rsUzMj9yBjYD2skSiF9KWH3KwbqfkyoXyatJce96BESQFJLt7tGtXTQn",
  "key5": "4c52sWJXUfddrN9DW14BbvyrbNYBDZu15LRemazZHCUNavovKBy4TmPzdhFwma2o2QeS1AMwJY48wfhxfM1TFFeB",
  "key6": "5HVFMXzxuKhU8zidTWLNjxDWNKhYhTaMHBMnR7Zi9LA3TXAozjxg8wdCzWofBPDtUyFfzvsjdLBfJAkXzSRzqcHX",
  "key7": "5AfSnTgXVdgkkb22xUfESiT9ePaSApJczmj73WtmysfgnDm7up1L6qMmPwG25sTjjBeoBaHzdpmt3oVoKAgwruwH",
  "key8": "54pGVJrs5XGYymfF6qtHWLPCnwtbcJJPBZVEbyejFfKgX5QSzSz15WV1TSF3bpQ3Cgnj3E3ADuASFh1bPXcrphCP",
  "key9": "5ZefDSqH8WXe8HfCvuC1xVTBCPTqPAco1L1aHGiqu5fDj6fXwwJSuxQmeV1uLFUk85rRxkAidungfavAtn41xiHi",
  "key10": "4PqnxJ73fDBkTK4jGtvVFYXSj765MsUvn6aQ3NXCgBruxq6b9DYLRdnki2rcbMkRBphySmNhapcWEKFfnwDbnxHh",
  "key11": "51Uwr4HVBvBaD2YJ3RFD1cXByxK1HM2oRUFKQJSW7farFQQvWCSMXtfUdLYExTH5T457rNvyXTnaU3pT3fo9FTJA",
  "key12": "2XeUHhWKNrBJT44kf1koLPi6vTKamPQzC6Xd5kd7j2wtf9SoS7J45QYk2ALVXXc7YqR4nGgFUyKVUeGJvZdfAnm5",
  "key13": "2hGc29bwCNVdX5QesnMGot5fNaqUocipUi9Ejoq511GDsqHsUEox5avdAhtLecu8gXaYqZEwF6ZfADWRjJRKjtyp",
  "key14": "22hBDURhu5B7CWeEtgzGiUkrQa1X98xChKLQY55ZtKmcMhGVF8hYKVsMkDrR8SXRV7we3n7v3uzN9Ho8BwxVzraX",
  "key15": "4AXcjE6AjhqQvhEuk3VWSqCeTtFJMNhyZKtiPdh6AuadxvThgjENysNAfWyhxs43MeiuCmgykDemoDwFhJn2kCKh",
  "key16": "5TNMxQy5ngqYUKABsZr5QWcN7Jj89dSc7AP4wUa5pDQL2Q6Cvs1nBMyNTvtExuJWJJUPV9kUNNoEmmEjMS1eAZDL",
  "key17": "SW73ASsdwcwxZMZ6DsnRCrvrFSu4UTK7otPQ5UmdKnUBF4to2ajKXtNzRmwqePEbvKamQ5JaBtdTKiutq3Ee9UE",
  "key18": "2Qp8ZsCrqUefnyTnfqarWp9X5FUYC8BNQ6SwK3EUmxYMGeCzzNV7nUSUMUV4MpQecq18hEemPcpFcZXTepdUDQQj",
  "key19": "5pxbsN2AtEbZaBaEjqgvPYA9VvJd5jSBy8db8qrZinSS1sAaxVrUMrXyAbkWZV2baNXRStDxwc8FLBn2R5Dz83gJ",
  "key20": "4kbynRNe53FhUM8ruqinJX9WSXxiPAqWo7C67h6G48ZwMwBy5rNvU2dmSyKnWWdk7Z9UH6fhyasTo9JedQ3mZU8p",
  "key21": "3oNNJxgvmVFHrdpXtA3sEHNmKS1Q5vHwEWqcj4Q2U17DY6BAphkqy1CCQHM3zLJdkBKn96E9n1rnQnjrY78iEBvu",
  "key22": "5pZKJebVDCbjSUsd352LXGmTvHrqvbz6XHXfeNwb6kbwaRxiqn9wqQkWTWZCQARZPhwrq2N3RSy1fRmsaG35Cghk",
  "key23": "XufJgjFFLdu2saYiFQemaiyaM9m4sW7T9f2ojTn3PhhkBPBNLNNg4os4KjZkbaYc4X6FwXD6AP7n6i3Zk6F9rTe",
  "key24": "4sX6u5itUQSiofZLjTZu7gs8QQNtJAhCq8fyrR9995AH3XwgPHkkUedNr5R3z7AYrPVhsqs5TPMQXtxgfUdLZqF4",
  "key25": "4HUUVkQCfVun1AJhkfzpvFAA8EaHVfYkVT8BiuPLvBvY4WGtUQpsZhxim73Em1N7QUMcBW4UykyqtzCZUoxDbkeS",
  "key26": "5K3QjggkbZovktYVLtZnbsGFcCMHsAQk3NjousbtWo6dia4juqQJBH835pgokTsMqqZVcmB2rE6herjVvcBa93n1",
  "key27": "2V4siRSHgTfQTwpYTZqEG4zxjAt4G12zLAxuWeH9ib47GfCPKndPxA6GmhAxrgnQpWRWNJRdb1Q4pE92XFBtuqQv",
  "key28": "2D7NjXrJeEgMw7pd2q6TNbWfZ6FVc3NfRLnu675Wa7g3n6zwTYRrLBjmmgvWwu1bHEUHp79JutQsNtcWHzsyEk8D",
  "key29": "4SkGmfmYmgUieUJhqJRw5NW4qjmJMFQ5V9qS1TsxEiHemgtQLmzPq8y3hkn9FJvxnkh6tRb6Mtdjz6fri8J47prV",
  "key30": "4xFPzvYCUXhVrbw991pfUcUA5ZLvRxBSKJpANQRZ6XGaypdWaoSdzTsV4wKrrDQgBgH4qW6woCw3mwEdV1JLDKTH"
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
