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
    "58T2kVtfMcFCJWJ4WhvP5yVDX56TbPSY5S4MixL6j6tWEUnqqmvj77y814MrKCYyTBBKfsK5qYxoNuqU9XTNpcsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yWdkowFzRCPR22AJgHdqDFLF63SQHViHvUERHqcxEkaFg4RYPaoKnSNKxSQz41nvvBwbEMehUBzYpeJfoWooPSd",
  "key1": "sa7vcdZwswaD58XXisBSD9KLzZumyXvVjtS3Kb7TXQFWZSHA2XKKXHMJ6Vw6AiKXr96JLs7btd2BHiJu2Vxy3Fx",
  "key2": "2w2N9qeNB1AnaAGsKof9DUAii6v9rUetdRaBbVvmwFHX6yZihNn3UGFaWBsA5UrkVMVrMbxm2TgvjmAF7mzo34MR",
  "key3": "3MzmtdsStpxJiHqgkhhZnUgiokjNwTUoSerbC33PYgNhEDWQQHCPVREHUnWmYcpv2raKzz8bCagyvuyQueLzHmA5",
  "key4": "4yqaNtJzh9TuyFLKcWS3SgpUpMUdKJ7g6gPtd8gz7Fd3iZKt5ncNLeve91kasgFrwP2cQ85cWkhb8JWVEA8iz7Wg",
  "key5": "5EB29i3gTskJJhi7v1QmXcL9fSgxcXtfWXbdVUtk9P2keBKG8DdXprPn6j8u4Mr7Ur2J1tqrbrqJRQDhZFvEnGav",
  "key6": "3FJZCXWo3XzxX6Y1jdi3j7c5dUjdYZDAxFvubsizX5Tnojx8iGy9tRHwR2jREwnDjJjEUgydPDWvKGsiA4qaXcH8",
  "key7": "2pR6bdT6Sfo7ahyYFKQaGAkp8bwmMAxbWZ1KBTFkWChkyhyRyXZsodBdSfs1obwHm33ezdn2TXH7fATBv8tYiqK3",
  "key8": "2Mr3Nf4LxiLYNMESRVzvjPdqpD2TvSygho3EMUizxitSZq3sC3oTuiyeHonkubAXeZc3NXvfnE6yZMWBeqcYuV4w",
  "key9": "52MtpsAPcGpxguYmmC3gJq8DRVufpwRM4HY9cykqQDhbu1XiFMmrTN8cifHunCWkQ5Fm4xoDA7mxwVQYxe5qtQJh",
  "key10": "v9VrJ1w6qyMEdsaxDNZDvdsgpVLHdyywrBFtdiLdnhhia6fLZJU4AVNYDDEMrGr7ToL7dC67G8jgsTbKJAjPq74",
  "key11": "3fMCeHyJimrHq6SqCN5fa27jy84zZxJjoXWeZhxRaJ5hT9PMJrem2QQMwE7cVUcdUkpw5Di2ovu7XBNuMHTz6LWK",
  "key12": "5kprPthtM86DBsiuLgTVi7CQL8g9bPnywjMEoEQz8FbGRJ7CeQdTmC9qXtDfpRGfSJx3489Wo7JCSaaWBFLMpxT4",
  "key13": "2GurtZ63jcdEddL8jfErdbEfMHvFUfn2h8Y8m6wrayimzfoVosNZw7DKhtxk8dyMQq7ww2n7zKLHRB2tbatTQych",
  "key14": "Cz12boPwMC3aFbtjS51LLnfiN3RE268MvhDhZXHmATdCbrMTnHro9aJmCf72TukaGoPnXDx5DWTLZGSZGMo3A3B",
  "key15": "2Bz4KZEur7MfkoYJv2KzTuKtFrRkNCR4AhRBqJU5McRzkhVS9kKzc4wyhpADtdCtxtWoqPAXu1dQiJezVmoXzm4S",
  "key16": "25ATcRwybjgoyx9wzGxNg5sUxv1wQQfdtTi3NuDGYXPbP1tJwS9XVScCv392SY8WM5CRzH8f9edNXQXW8MD8L11f",
  "key17": "3KKgNudiNWWW1BLC9FYgAZvnrLmtDbJS23bANktcvWXJB5XSU9B3nxV2T8umN9iSiNHVAiQAjWJ3PAesD52SiMps",
  "key18": "2M58c88WenyvHYgWRC8HDrk76d6qet6WAREo9UKX2Ne2oW2bYweMLkZVSb1WbFEgpbaa86W1m9Hamz4dMNQ9B2xB",
  "key19": "65YXPcLoGaLxN9SQr6xD12DqKkxHJE57K6uVeGqRr8bCDqp3BUaYpuo7hNyCWcNbRJRhLuRegHyyEuxFQ3wznizu",
  "key20": "4ETtapApdfw2xiLXHQLZYzvQDDXGJGuHnRV2xv7QgjM2dhxExkA1TPcrLc8bxEm47BdysXouA6B3aKvsr3bUYTLZ",
  "key21": "2Sg6EZuAE4ZZqVcu79vS3YshrAVNeuZXPTUn4jiVFcX1Kr3DsrJdzn1W7KSUZ3Vn7iwA8mAvzHjAGBy6g1gJNwZf",
  "key22": "25Wuw4PiZi2wNovAwmUJtTnPduwzUrG3fDFcq6zL3qhJ7SK2StUzRMWsuqUmWkE7H2UomScU2St6iP6Fv12u82Zw",
  "key23": "W1N8dGsCyLDT7CtacKLc5x7xb29r1Pm4eSEMkzfMnT1bnnU565t1FaVh4zz3iMr9RzrSqgCkLNcKD5eqvuWRBUx",
  "key24": "K7oUUDdXs66GjiynAza6fUcEmHfrzap86hqAg8aUZ4fMhXVT9kXqzWSyPh3eTL8vHnnN6KaucWdooKDzm181uB3",
  "key25": "5WnYQSPdHokYg2MQ7LgmcJDU4wLxdE39VLh6tkyo2DhhE5tSKHnT1eJpUnDiodjBPDCjXWqPH8RabNG1z8thJJ4q",
  "key26": "4VSzvh5zenZrXCnJbE6iUAbWGc3iXhcawpJTPj6dSWN9mDHTojFqzBnBddEiuLkKpRphK5Dn7geih22jDnkQmcpY",
  "key27": "4SsAbAsyhWXKzu1XQSmMwLfDpJSDcmA3WWcY17QXJ1gNz9wQMbAg3CpUGmXKEmjVuvwB9ae132s5coCVG3gGhkxw",
  "key28": "5jkfR9zzCdvqVGKcLWHb9TuSoUffuKmHjLvvpGxuT7M9Ciouryq5KGEM7nFEtxGcWdvwkRLe48p7JiioWhEaSJ2N",
  "key29": "4Ro9vamG4GnL3fBMzRJ8MDSYDknPHBuZxQuvEJkVx7ZN5nn5rdggErbRg7fkXEUmkToupDTNKcPiK9PT1YXaiBLy",
  "key30": "4fmeCnYMopN3vkVR9862mtvPj5YBcZf986heakQfu6Ey8pRrmfQhzK3wc59JWhqh6aSniusbTcw9oicUpByznS7B",
  "key31": "3r9JNuHRRcmAZUXFT9FYhjJQppKajaNGGjujnfydZbBMtFDbPFhQqRJAcGS6HDzVuyH6g2s4MbEZNW42X2X8wpZZ",
  "key32": "5bDb3CrCozcfcgz6fwmjHS9LLc47XbXy9eFahShJPDvqLq9PzzGYraXQ6nFpRdNy4Vr2anhDsNDhrUSFsEAvb83u",
  "key33": "3W9oNGsJHuNYkC7TQuy7npWSPXLboqT9Q85QwxVSwxE49U5DoERzZpS68X9HuRCZRL5iVkE6V5zH3rdSsXsXeyVT",
  "key34": "5ztov7Uk33rnCZWVPE6UfktiY6Nefv5kXm2zezHA2pfzpdP7t9DT9eJ4BX37P7oEFQGc2WX3QMpP6tGtWhhRsiwU",
  "key35": "58CpFhu76fZ1AYj9b123rijVUQgGYGkdgP2dMRw21PGyBiXtbeHtNoR1iBnRwDEjLG34N4YFYBNeg34yPZ8dbM4J",
  "key36": "5soVWyqcUs1k434hvMvkf6eHU3hmvvbXNyAwDuCz4ZLVwkLNtX8w3g4ZvocBbK5qJ9bZfd6zxFbKJy8JgnpXoiMV"
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
