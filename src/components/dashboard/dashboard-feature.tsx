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
    "4o6KcmAaX35WpjbcMwvKLWY6v2KDGsnVc8iUBPoJ4tJckPthBha1eH5rhmf1CdV1jEfTWk6Bhe1htvd9hD6jBZgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VTGYZ99CSC57PuBeZbhCvoKkrpQPTbirjLNmKX1bsopwaLNVknAV19RWdnqqhaVAPrM8owvkJciZs8u9RFoF2nR",
  "key1": "4xeYVpSdSupiNT8Gya8KHM47Ndn83QNvFDumWvkkfniQKp2VN4KEviZAJ6dj5vAhUFyYfgqo7VJWqVFELYayJ5su",
  "key2": "46wcuEgZqgFfYLKbQmGdh5rVvYKjSyW7YXfhMdL4QCBDRQF882968fD3oMCEbEe1q61JmWKXoa71LnRu3JdgYuSL",
  "key3": "2Mgpz2LyabJNhBBToFmqNY3xgNcdbBtxqh6pAebYMSV3ov9SFsGyQxSSZuZdyvX6NF4rxuMkBTfKXpZ4VKJ8KNvT",
  "key4": "4MV9Dq1WAf7oM1sPNc2KfMYDk8oyXpnZjg2GEMXFVW9q2CPjvr9B26BjrFUxPsBkyWHsUqrYxA5bvTLW2qQ9YBkd",
  "key5": "b67QPsNj927c3XKgirQCLkh1koxpks2yMmPK5oC4L2UFp5wH42aFQ8KK8GUzBJZJogB8TDytskuLX1s5abJDEjv",
  "key6": "F1dUrbpJmEyG7Nv5gJupSnxHdhDaUzMaDhQoRiMsbdQDUoa1QDNdm8Z3cBwnfpT4UnoC6yeYVAb5jLsDHyfm22e",
  "key7": "2qfLfhSZjfzUowBMcKx4A5hsPGa4jLpBwVucFRkni9o6q8uNgovwc2ShSzKt7EwFEFYuqssxmk2KvWzdEAhEMi3F",
  "key8": "jGyh3oVdXHjpnuAdiRqnnMDhm4v6bP7chd8Z7PQg2tAc41iNUiVYPS3Q8P7qNY2dej3Ljw5yDk4f5E6Af1r7Ehf",
  "key9": "5NPyXJYLRRToS6a8T1bSpgxfwJ2vWAhHUxzjrkcxDdJk6RRSAAyiQcPTEvbVAHn5F4bAohqC6Zw4b8aW88euckJk",
  "key10": "4FmpiS2myD2drz8UmjQuEiC7stA5qutspRsSzRgt7aKxEbgQc7Qc2bjEtShbpdeCpyqsYfBYED9DmKUiHoVWiS4y",
  "key11": "43muMoodhChSr6dS1RHywErmc6owqNmfcsWjDKqnvhZpRebcTUtsfWAiu1Mrha4RpuAnazWRBdW7LY2kangphAGB",
  "key12": "5RXPPPUHomY2bFhtjpWvPAYWHbUL1u44h3GibGrJ6Pf1riEjt7KUAfyyD16g3Nd7i8xeDHT3c7ypH4VUFq3DqMpS",
  "key13": "5M3gKPfHv3B3xUEdoa4NAGaVdN1uzuHchpt9TmTdj7rB6M6nxbZ7rvKJMsVN5m3e6xUcfWAYjWVxH2pYQnZcfScF",
  "key14": "48p1BC39dv33Kaa6FTgXXECJsi3GtPzJq2HVGp1brpKNgm6eqJqod2jG7scDr7HWA1dbunsMRhWRkiVw3yfc1Z2Z",
  "key15": "VNMZ4oHT95XLZZDZxKXqG7WKxzRfTN6LzBKbPWZRK56g1aRDsFB6cbP1HbCR9xGuksC6SDTTrKFhj3TDawMPnhA",
  "key16": "5UePA9qubiK9DHesiKQvYiedD3kLKPi9ynZJHKnZxCEWe4skZd7xpeJtqaPDvKKQnLwvVCyAavA3qw5TkqRybuRU",
  "key17": "62psqpcWEnhF9ZP4rCEHx7rwMCCg5HVmbhrosXiM8mwpyBo1PNmf7atHkto45RN8WN8QScXB3x57oYuNWmsUs4s",
  "key18": "5vJzz3ob7zrfmXXLMj4saoqpPgJvgbfLCAsGN7q9BiMxddoWVv1hUY3qhgeZLnGNasrzcbAYpviNK7AGRJ6km5KY",
  "key19": "32KtVMVXuExDH8KBzAi28rsKLV2z8xRQ9Ei96gVVG5Go2Ja2T1wEptfwe84bTYfsA1m5ZqEm9QByBWXALmtUkXn2",
  "key20": "4YWwbuDWSiPxtWCfymgx1VGiByGQA9NRQ2HNqUdnQgCZz7m6mLRUE8VjMciFHVYSGsyHsnHyAytEwivxVNUXbT9h",
  "key21": "3TY5dqFWrAnbFZVSXoLKkREX6vd5E8pxZJdNjm5xuQusFNfYFnfy42QWSppxPqUcyp49HNKFqSsP1EBppjzZH6aX",
  "key22": "izSXjMiaczPbGXtbznweGokn2wuB7RA6GLRuvB4Vq46eai6o7LcqQc39unyUCc4vcrDdVhasHuVfCNG9r4pm1uE",
  "key23": "adPqAaqMfbiAQfGXg5CkUST5Dg6fMZX8nZHynVEehvSJBLwTdGGuLU4aYmFahAChsrneaUi4pKimymzCsZNKHEF",
  "key24": "63XXzQkwXxJM7G3cS4PY6NvVkSQAWcyCkyKuLfXsbFxucZGxrSi4nQrNkgE93c5viSjinjxTvpm4G9jbRrAY11gc",
  "key25": "3vuCqWFRPcvS8bV5PJS7W7SGsZ7WBDGQbFwPDVEQ6mTkBxYx2JXWEDPboQXAFsBQVL6itp4kdCR97r46DVC9vBq8",
  "key26": "3CcntYPUpwXhoPzaueuxDn38PutcFfghyd3CSu5T4k8ri7AePj8nh3ra7XVtyRc6mUVBCnc5inhpMNY8sBP81G7m"
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
