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
    "24BGFkC4vcvPvJb9hEv66Zo2gEMSxnB5LvhsHNYyva8bSfyWxCX9BsA6qBQ2TYiFqwS5Ews4uobFCbQ23JHcRdE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZPmtMuCjmg3p5u6yS2yryz5CjV5DnQ56QoGQ5LzamP2bq7F4rhcwVmi2G4sH1AiKecyaD12BZZkBqXMNxdaUMjT",
  "key1": "2TJAAJzUxBtRNofwMftVLhdsD6grpdoBF25hqvjhAKmkwyYinTpi4i2sXbCwegcy3jz3LsZ5NSssWCdok85SHCST",
  "key2": "4dRsjYmnDBKZaYaeho7h7pLVWLS1i5W8AE9j7UvyNuQNbAi8Juhn9UMWZ2iiWBzEY1byGTarE1MCFj7TTgzMi18w",
  "key3": "3GjU1wFiAJm5JeEZnYqiCHsWAABhe9YM98AWc6mKQt6qWaqdJcLanXmBGHypKYAVFQsSj1v57ZB5Nw4r2ftEQb9q",
  "key4": "2iYUKTNTEH6QCjMNButR7Ztkuyg28fhtG52iAg2AazRMNj6tZQKsDS6SG2ZPS2kjhprxZWCp2RV31DTEFbVBEgZe",
  "key5": "3rJPXNaqNL6NZqCypgQhyWAwSme15j7fkpnVwVLTXR4b9MPLeXfBvg3u27jNN3ZEWoPrARGCdbaszvDTVaUwybno",
  "key6": "2wYq1y23hXvJ5A86SUyhBbX6wC4VrPLXLScwV8pnZPxronkumi1Yqn6BDNaKLCzhB9wMPHqhuRa9sheB18VRzcm",
  "key7": "3amvdrGcBWiZfKUBpzr5W9UtFD5zhPbyiNvnxeshPLrhtPRs4zeXmyKkpYMvNGH8GZFcYwgZgXtCNuH4fQn4z3xH",
  "key8": "34oq929CcKVyzn9KuYm8eyeP1KhKvaSQ8uB6WQJyE4pEjfcioukTnGX46Nexh42EeZCzEmNiU85djHnW4vAfBuGR",
  "key9": "tCptaxfVNdJDcJvv2R53WjUwA6srXuTP38KBv4nKDVAZMBz6TbjovGaFcobT1cMZuuTY2uJZgAZB7u5e6HgL1nS",
  "key10": "4ahAKFWg23C26jXq4C8cUuuknPvCNPX7T38b4xWkDVFRJQ19znXW88YvsqXFoLBmvNYAWKkicxjRqKAgysXbn4oR",
  "key11": "5LRWcVsUd2Kcvgfa5mPHX6J5EYhoNX8oJn72S5xYPrujXRDcvsEzfriLUVb7cfNLEFK7QjTbwD1GhWFPdhpQNTMq",
  "key12": "B265EsvPU4ykPZWKKi64jwzCrAUzMGXa7Bu4v9XLe3xHCN689Hcc9FjKzF7tMPw51uEue9r5tX9uk9jQt81Jzun",
  "key13": "63ogMempPsvnPtfCovm2pChY5kwxKNqhToySK3pbf1PsfqaHxW1ti8cJuSs9zd5gR7rC31hYUyMYoaRDauCQ33xp",
  "key14": "527AVQAQSWZoaXtZkMXmZjm1Eb7ph3rKu5HSaz8RXjsJVffif6LcaLS2uHPmQBEkcipFZQhwdQFx14iB12UE6R8Y",
  "key15": "gQEWeZybxds4PfmczpZSrNxz8Qw2M5KNaR5umr3F4MeGVUdNESSwA2XSAtN67qd68zdNMsVX6UJjT9ckBkWLw8E",
  "key16": "2yFxjwQC7poRzxdgL6JaeoN2rRZg59J3roiWfhDxNUw4FtepCcmNZ7ZxbhB8ioYMS6M52yPnTUQ8ds3vCLCkAe7q",
  "key17": "4vccxD6fqpNMeYJkkc5nKQ8RqP7rrfnkXdPmFkNCvu4ZhUSK3eXyVUh1TZRCowyT3uGRFmmqp2HkdKiQiDmJkLxZ",
  "key18": "35aB2B4vzeMBVMExTD2PxyRn7Pn6qSSqXZgQ3Pn8zqCmtAYCtnvd5TZfEd3R8Fed2JfihTByoxcqiJueK8K99j7B",
  "key19": "5ZMJ81bi563As8GxwvY4UHgocodZbk9h1iLJCQMgoEC72PDFKWaQ9KE3bvXKLopdVY2gjCSca4BLLxbwSDBgHSRD",
  "key20": "2HpHjQnmfsiPL2Txra8BaBgfBPGpZhk3xHxrLFh6wxMAYD5ApajLpDMRvvVbirhUA6aATbk3NW2YdazQiB12JgCW",
  "key21": "5hYFKuQJ8z71gHEhJR3X34q2xu6YnCrw9AKmHCbXDTUsJHSsGibdhD8mrM3tBACM4nsEE6bbx37Nypzd2CqfFQEJ",
  "key22": "5fUwxSARH63e6xykb23Fk74t7KcCVtvXbv7m4LXzrCbTZNxrakgZGaJ4Wbhup8vhLCHcjaoaWVMFqj8UzmXVyvuM",
  "key23": "38JAvwUALx14RJw7b9ezdc8iYNj3LRTjQGEjnFzfJfH4yMcr5ZX1J2AJdECsb6W6rBAoUFkLhY5L3DPjY7BuByio",
  "key24": "4JrhQ7E1vi58rsaoCAq3FFWCs133wtkrQsyh6kRSWas2TFzmQr7tXPse2h8y8qkmu69RUv3rqLhSZuE64EncXdvG",
  "key25": "QFrFvsjszbMZgc8tfvBwWx4gSxLJbVCgneXx5b1ep3qJ1qveNHbkerYhEXpzTTJpQu3j3SCR8mtbz8jmjwsUMtL",
  "key26": "WyyKAkytt5S5XpNF9U6JTBvFebgf3rt9SzEi4RD6cjE2uj5PdabjueXyT6azYyoXeM746wUvRtZnwjzy17M3qjz",
  "key27": "2PiWvP2e15Tgj2KuibcJLRmHVTwo3DPwNEH8i9s5okYtfmFVYm6zH4oeZzxzuHrooJfwEn3PXWHg56qo1a5Ws4TQ",
  "key28": "4oqDUhJgcKCGxiD5ARQMA4DcArJ2vqPqje8qEgnh4ARVyrfYWThjvxZdgxZGwjKag2yZtshj2Kzsrn2xAHgHFRUL",
  "key29": "2eo2LbedBLrfCnzRd1Q9WfFS3waoc2ucAodk2ebGqDZCyZhL5erNKvGdJEFYU4n6VM9TiZb6kz4BrRAkVquhwPmu",
  "key30": "BgiYWfzJQ8SbH1P8bYGXmpBBZUsckKzmJDqGEpSwnp34NSkjjQPxqPJzVTnbk2Sae88uF16ddBYjQhjqTVT72PG",
  "key31": "emwnuuWcNcSgenLpARK1UJkgkdVVEvofeffwo4spnDX985XPay8ctdxPKndCkU49kkATg46mTQXtG6qCVVQkyBQ",
  "key32": "56Z35ZxH3XMHNnAerpV7aNSktsw9Pbn4mDABD3LZYsto5o2i5sdc6tvNt8JU8nUpxAzT4sjy6Yu4WpmeuvZeLFYt",
  "key33": "pnzNhKeF5LFHxdwWNXm9ATERkhm5mBEvWKtHshKpbRSyJpNXUg1qHhxE4BbPcFsEPFFuBbUxtNoSZJ8GqfFGW5o"
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
