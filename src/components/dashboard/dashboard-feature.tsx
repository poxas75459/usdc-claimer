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
    "5s4MrLA94LpgxTDpePJS5iqqYsvJAFzeVJvYKatWWQjXQYVTR3ixZZTAZBiYsQW1DYEc5GpvMwTUUCWuZFiUq4qk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CNnzZcmPFGBrWNj1MbYQexKS5p4f6n4jjn3AiYGAk1ho9UKx1Jn8rPbkKVttx5LFw3CCieCT3T7jpXEDhwkyvut",
  "key1": "4duFDjV7UbGg4XeRxBHo4xX4cbPdp9akxPCEKLA9nRr4KicV4dn9vUrMgZL5jVipgEzGHoRmiqxKZPHLjMnnNJD8",
  "key2": "2fkJdeNPqTb9PaK7SGy9vAGPnMwvRSBoDmioBMFh6S4hzhFAXFBtFW1fhbYjfHwaVogbJhGu9mKHQJX2CaA9eCxd",
  "key3": "3FN7JzP252QuZZvMsySSQKUVgxVJXVRqMgGdMvgNS9pQjcVnmt2i6ddi9X5UsMWPXJB2kKX66xnCfnPhiV6P6MCi",
  "key4": "3ZQP3N3y5Du8aVKXGLhJMLjBkjoa7iXYHJzLTAZJg8kBqh9KWfN99W6VRUmhJSFGFm98gQpSaT8jmsP2N1tXoGVF",
  "key5": "5XvyGt7omyxQ5Tbkdnge8ZrmMuiJ83NTqe5xiBc9XcJtKuCjgffELsJLbMUGRVLe3Jc18mJowbYxh9q1f66US4xh",
  "key6": "22bi8WhZvDmVC1bfWi2bXa3pkKcXgbEAJ4G446KSG25uqBDRYhzpjGJVsYCnkwXcRvyoWLreokKcR13TpaN1652a",
  "key7": "5hJJ9GPR9haotws2qoD6rq9v98paaY3MDh4CtjZiLJvdSLokDjhWNF9NRAjpTkj3fGrTEX9Hi9bXNCrwx7DBVhnW",
  "key8": "3RWzic63abWP95WZJmtpRSoiXe1Th5H4RgsHxXQ1oMKdBS3rYJd6dYtEech4ALm17PbM54GNo9ndfp2vt8pXkQma",
  "key9": "5nduPj7SkKdKz5hpCFDdVom8oAZK1XqcX7fazxhX7SeemG19CivktiS9MexubxNbLw8xrqyom2MxMdohy1nRRBC",
  "key10": "3pBpFXJHDahd3DzQzj4uk5w46P392KgFiwiRehWNuJALvM3FGmQHtoetDJioKNS3nCeirrCskcgvoMBNtdiBd61b",
  "key11": "5rHQ2iDPm7podj4iKFnRPkfS74Z69oF6hHUGX9wLhL26eEuUhd2ZQSmLbKQyfebEqu4TJS4J3E33D43ie2yVm8tq",
  "key12": "5PLt5hCu316w1MJLZzzgQDe3nMsVddZ1zmrnEjpb1bSzGAWasJHDk8ax7GVbYyZ9ZAQU5Q82M8Zj97qkk4GriQKk",
  "key13": "62X9VU5mLXQu7FkHg6puuBU3AawHFxyUEs1paUgTjj8r6NcZLtXPxWEHNYLgwcDsadesKV7sQvhmhTnKYb94KHhb",
  "key14": "4J8RtDNMLoohg1xZGYCiL2jvY9T62dHbSvZUqZxM41ezg61t1MuJ2syU4rk9inBRDkWjbB9vA4djRuA4QZLzKhB5",
  "key15": "4NfDr6MM8eHnez4XrcHkJcSydybFFouPn9388vwMcS589ijmqKnX6PrgBz9uQaMrqLmVHFN49C1RFLdaH4wWYDDy",
  "key16": "2P4oV1hf2SG7w1DE9rNA6RWMeVa1fZEczjcJsyxPBDYMnq9HgpgJV4TowA7Z1w5U9EpTsBs8kPRetQkJzRbyeYb8",
  "key17": "2r6YDVswDgdz9d9YVNAqi8zR872qnB6DtsSaaCMpfEwEbHB35x88tCTi8xtVwBEKnNNmuehBb1wiqL8QCsLhZ3EU",
  "key18": "tvUKZ99gfCfd7zAkWQ1QKvF9fDU6FSGBh1HuUg8QU3GXjNJc5zpdZ6Lto3itvRnUeorf1WCLGiQPtAYS46GC7df",
  "key19": "5Nd9jsYUrjeHKuoP5xxko7jijEQkaJxgRjJwJrbcMKPC3L7e2Fc4x7JMYS7st9GCkpAfx7jSX5h5X85RGnYHjsrm",
  "key20": "3QA9hgUMNQ5RoiJojdJpbcHbHNRj6d6JB3k8d63GN5Xj2nP8H6HVz8HmN6JQsVCU3uRAu1zHcCcnuj6uohSjkvaN",
  "key21": "3HR3MgcTeMXEteJK36g6vCWdNUT328maeFV1iH9wxfVFygBrDaBisGCuwm7gJwsP7yYXgyWB9JX9PniXKGvsWBS4",
  "key22": "3wFWGRBp3gUusYRHzdecKF8T3LdUAHtVzqSwgoTk9PgAodiQsrEQhB2cMmcQ12mrQmSnfs5rE9oDwtu3bca1CuK4",
  "key23": "5W1JcdhYB9grg1aHD7MDnh5yBeNKnHnLMXFJg9JwxZRxehuRyCsfZ2FDqMVrAewdQrukGeKwPXBGTHyikGErU15",
  "key24": "9CnbRzq9nGbQZm5JxXiSTHSTyZwsoqh6koDDAxt2hD2AKkWKCTkPAZEkeY7DeuBz46DwJrwYiT7PbGtF7GJQG95",
  "key25": "tFq5yu9jyUn7zxTRFaB3eA1ZgkyTQb4HuudTumc3vW69E4fiGoJe13KLVbom3mEd2p15SGfDAq4NwWnLfYPmyHS",
  "key26": "kmvt8qq2gHL9YvzyGXhsWnZtbE4JKHZEi7tAKHw4ZHgm6nH5aafS1q638h6jcfqje6k9hZ1kgwLooD9yUWuqMKN"
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
