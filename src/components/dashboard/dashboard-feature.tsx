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
    "43Wy2aNuM1mjX9WVWRfusYGTBZHzMknY6aEgMWExAWf7JuVocFiAWs3ddFQ2UCnHJYuz3kPpAR9KetFq4NoNDP8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vNJBHqk2kUuXjvNoL1ZMWd1tDCNerYLhGJLPkGcZLqacBUTHQAppCSVY1cXJijg4uCuwfuQyiuae5jyEdQajFTh",
  "key1": "4vSsesqWy2n1qgvwcVifekqivf8fc4XhUCA9r2hphgn8wdWULS1yv9nz31wHRmDgy7wwjZHwK5EipsRjxfF3H6Yq",
  "key2": "2AfrFw4yqAJY5RZnypsmognuNnQoRBsUnPrmdRfNmfbaCp3d2vzN8Fk7yfhwtdU9S6E2XnKS9epiTGmNrg8PgrVU",
  "key3": "2VBN4nxs4CNL7wc2N3CEZnzsssu7MCQamkSZhYhoQvDYCCPdMaXKpccpor4qqz4hgvPMJquqVThP6hhKN3yUnwEx",
  "key4": "5HY5mdHko2t4VwCZgYYxEmQCNJCkw6gXojfLUnh7GyCu8Sb1mns1R1YrpJnBvwTUiHdY9NytpYwkPqWnyT8znqSz",
  "key5": "2QZ5fTEtXUy6GCXDKPf7xQ8cN3C72Zz7R83GRjjuARQqhX2ZR8tPL7oUPoWwvBJ3NmEUMBsRzPM8UG2Ad6kAN4q2",
  "key6": "4PqjjDr6uigrRzjF5o41qh7ihqRVeoaGjudjZtN2vAMMbvDUtbetWPavGjbo8AHqXLh8YyU7Km9DbujfWCrZM6Dd",
  "key7": "3nXpptQVeDexRGJLEW4u8ewJNGkU3V1aijGY3CcG1fxNuJXqpxEL9X8qpb49xfTzcmDKkN9r3Pnjxk34T68haXJY",
  "key8": "5TatrZub6VhqpUkud7n2BrYNTbHzdzmjFUMUpyZ15nY84Gk2vf8N5aa4uChrimKsNWnenxhhyjCQANo4afnD1T9f",
  "key9": "sPGhDRsD4xt3TuXRYXGJrzRA1J8HgHJmT1f6AK5fpzgbpek4H4P2BKbhUUxTzkGiqErRfobvz3WDSEZrG1ZNoVP",
  "key10": "4MHn5KdeCwL4brX7Mf5itdnDsFgWBSQ1UtgP6rLCiLoe3BTFr83uxdoG1cn3bSRvcsvnpA8xGW7yfjdXShadGgPp",
  "key11": "633ipaLY31RXa1wnULForcURKncei16vs7pPHxBAwsMP4a5ANN2rGTwK7GV5bJ3nWYaQBRCwomy51Pm9oXfTRzbY",
  "key12": "3Pa4uKjUUwg4ajTbXDzybvLpmQZzmXMvjS7DvuanXvF3vAyh9xL4B6BGcWRKPLMnmK6Mkitkf1XaA37WFPTYVKxS",
  "key13": "4st3ZRMjSs4mYZqRc6adGD6sMdwc3DSHd4sFvWV7bqCija3WBaaTsfGK3W3pcmq64gZwDt9GEVEy4SLTuCs6RT8Z",
  "key14": "4SDMM1CfVwvE2xj8jQ1awxCdhRcSqptTAGaibPNrtWyqmoEU4iaxYt4orQwbF9iYTcXtLYMMgsQqLKb9yHFe135a",
  "key15": "QxuDi51GQpTBr8J1Tqn7HTCCi18XhGY43xPoXLD2Vt1ivUzyqu8xyuBDz64uZPtThb1sp6m2bVr3EZDPcnELJzj",
  "key16": "35RdxvVAiyzu3LVHbMWV9d5E7Mn4K3YwVJvr6x9A8v3kicAzwq7rGqpg2616MF9sgX7hRiMjGaUW3ozEoQS8XXBp",
  "key17": "3eQLS2aqVd5kGCJmJp9bFEY9k1wHmQgpdrC7fckBPwY7cGaPEVefVNZb5YQqTmKovUSTz3Y3iMaBhF6wxhBuHTw8",
  "key18": "2navGFXvqFV5gzKJ4ygai2WnqMdEJxYq5xoMq4siXHR8XZPnudtxhtN1kEpAp2doZNrB9NmL7seEkWF4LAQZZvJy",
  "key19": "5CLu6fpqG5iWpMbdLnKrGFgpSynahszQVHMr1Kcp1kaF4JnDgHdL1EtcRdwmbLPxrZ1J3dqjxWEKFXpEcihwGxoG",
  "key20": "b6Hi5TVSAQPwyVf97GEhLYK3PYUVc45rLkBnQyZMoz9Ba6HxMNZranTbFB7eLznwQMK7XqJDhybHNtzcTtT7sHJ",
  "key21": "4rrdmmHF92Z9r4N9FLQhXCjF4edTafkJ3aGxzm8Jsp7gVHwNCbHWHjSioFHigTrrHftg7YiPf4mHv9AsxkfFQeR",
  "key22": "2fdbunm2MTKiWphPWheg3a4FKNcpacrzuGkvkFb8pGhvTBjVR8n9vaGrdQtpoipHiuPuXYYpd3btAGgaeMSg4DpX",
  "key23": "3jDDQ7jkAYAMyyBW62nMteXFTCCi1Boqym7bRTjUP3sF6dmpzfs9iGgxC9jTAurJJaHzM4QbDC6nVRgBors55wGQ",
  "key24": "2rbAFJUiidEoaWiNRTfzreBCWcpTz4yzcBjonJ6WnyZTjApHxyoGDUUtSJ1bZbozisdQ6MyQCM4X9yWP86s2Azzk",
  "key25": "hUZqjQUTcZxFK9xZqGvcAPfZQkCXUz9C91o14jqA7nAR9KKLGJ33P6UjE9Wwu5KQa1oMGSyp2D6fi8ibBJLbNZd",
  "key26": "3fWW7feJDWcHM9feCQuYFkNy54M4Q2peMA3UHaXwc8v6m2F7uD9nUX24AWK1Fc65PwKGaE3s6biP54iwqPwexu5i",
  "key27": "63Lqmqfj7LKvhCVkKZpShegaxFJrivgzHX6ZUDAn6uLBwqvqy6RVSjvKeneqG9avHp1urSbMH2VEanodsJFzHVmK",
  "key28": "54JFNKP5ZVRLEFRduYuAHffx28cMAZ4BT6n5n5NHG7LJg3Mb67D2DUq2JfqQPTeNi7qkSdWxdAfxEfkaXBdV9geS",
  "key29": "27SkkBJzqDcQTuZ71s1sHw7aJUiaeDFtisFmqjDXhLz1EY6ExwQ4A6usfLZofhHtzSsQpCuk3ZZsYdeU8drwtCES",
  "key30": "4h5PFM7V62cktMmWGpfYETUbBCB7jsJS4hHSTUbbeyVtWFzFk7wgM3ryNcMKpbQJvyv7FcLrcG92AQo6LUCt1SKU",
  "key31": "22wtVPRPJzLTHKjVUy89hy9RNi5qDDtEL6s9H4G8MxLCaj9WbvY1KRBM6QnyXMBLPaRL7JvqpkawY5mZiGqGpE4g",
  "key32": "35p4GmzpizwiXazrqckvjGeksoiR6MFhE6YdZqFKewazSbXUXwht8mTnydJeiHVXSJMTt62v4D3i3VM13UJ6iWeQ",
  "key33": "2dG8Z5kQEWMab4ByM7wkAZuo1Hjd6f7kQ1BNSzXXTpYo6kDu57z4z7pMZuAdaUY3NNLk4c4tEJTQecoTz6FSm9eQ",
  "key34": "5Br1z9VaKuKuAetMaeYUqe13cbb5JvD5ZyvCHiYzLXDf7ogR3HKqZ2bZpRXZrECUKNDNUD22hdNGpHQiaABnaxiF",
  "key35": "25NdmxoShKMg9mqx1ispk5vTqzFJRE13fMqFKQK1T5826qxSjNBXpVhjspwwMyTByCmfc1fBriqVTr2LQaPkZNu7",
  "key36": "3bMe2EWJEcas1Zx8Nf2aFLX5vPjABN4KdgDnUmNLh49HFHVUg7pYzAvxK1ubdQdUjTC9BRVYx6sE5k5yETvvS1FT",
  "key37": "tGQe11zP31MVMuYiYbs1ycnomMBLyfLXhPtp27tgnisCzTtooGfCsna3krw58AvgfHcheDcrYofbaGMW9BKWhAv",
  "key38": "23RZUma64yUbm18kxMFJ6MVe7CpZxmLYPTZrm9ZRJyekPTEejSv8P7SpxFA3uNdX6VEPKQWwS9oVsTXQXnT1hSmi",
  "key39": "386nZSqkT2LeqzUc1d4NNiCdiuA7v8BZyDpFz65BBBCdvtnUbYEaawZLe9zCNdSuL4pqxcEpPcCtQRK1YjvBXyG3",
  "key40": "5NhmZm2sG2F89ytdo95QazcKFXkY9QHAvJzGoTAwH6pu7ZoYwgZvXJcC56kLdG9yTCZbbUm19STrvijDHoTnAfXu"
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
