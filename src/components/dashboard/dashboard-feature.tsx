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
    "5LRUKLQd81eGHbyX3ZwcG3A17wBiVpVzFyWyUJbwMVtYam34Z2wUFeNYJnX9FkmVdrUxV4L4fqJjCJAiQVoxs1v4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AiCM7RcuUuNXngSqvjs3cgtgjqrqYa95wxedfU1aU1jXWfrQ4TiovsNa1P8Dp166x4J84yd68c48rAkYTnjPryz",
  "key1": "4uJQFQdg87zavhp2YDHHhGdxoxqhTkX9ZecxVTJyBwVoR8hfS7pwuFFU8hRV7TxTc6KViLmMswwqNcvBNgJidd44",
  "key2": "2RYdUHcWnnoxR28fwMkUHE2yDXFRXFCks97nhMoLvt8cNzFdgeKt4zR5ibkFt3AdJSfFFbLMVGEoK9awYMyubBqh",
  "key3": "4BUhMwmc3BnZyCEU2V1MqRZ2K5FsCGxw48PB4ajVPub9U6qPTsfpSDHTjkj1ErtejgWWAiowsZDAhV4f2mxB3eKF",
  "key4": "5w3bygPHq4uWfX65wpHnzjC18gcoeLtFnXt29JXS1KLbzZvKw8WtsrqtdSzsHTpXVU9642t76uyioSNP9q2htW34",
  "key5": "2td75cACPHJwVqkcgJZnTUMamQtxxnibxFS6ArqS9XYNYdWBH1PxMfGHSFs3b56RHKmyYBDYy36esvWDMSTdbto3",
  "key6": "5G7N7CvM1BQenH1BKQaa2oWB6MjFuCgWAe3npUzgB9FHs9M8d7wRBdaGM5oqxFn683Xmpk4NT1jtXjAQX3PDzmAC",
  "key7": "3rV5rbB8i59cp3NEJbarFDn2YDSKCug8YtXjffcYNM1u1By7X1PpoDHPXk4QMrc6Gscg8pJGoNzn8skhwqZ8sFWK",
  "key8": "DnZhREdvbdDnjfF38Do4YkntXFSP37GYboTxu9bPf79bQQvErkwSkhSa2KsekAajN5XAAif82m3iDrKe1gKXAMv",
  "key9": "3MX2WqZLT6bdeZCbVjLyMbc3mNd7M3CCcnGGmHNQR7SoZgxL99UPzvvRzcbfHBeSthPS6tFQyyATZdT4D8sHJgyv",
  "key10": "5LrgMFd2z5jjwoE5qBHohLBwqS7iiBEgYsQGzuKSyWgBKa9dhiWHAsuAuiVoYYLkAog3CqWDFhbYrPLz4AaAK7gv",
  "key11": "292bDZEjPnACv8LDX1XSnqXnfB71xTjBm2NLFGvQh1dRFYe7xhfYk84DisLTNfA8tzgrMMNop1geyzMVP7GhxKm9",
  "key12": "4QPCMLjKsTL9YuuETb7V5L1SMDB63ZHxbwp83Cenov9doGLgyD4J9NxbfcagyePXgRTJMEGsSXYA8Cqh45DdMqae",
  "key13": "4SdbbiCokFV23hJ6WV8zYcn2GYGo2hiSgbgZryzXTJtfZmi4oaN2HetBUk5DEQtFKs1eaXqvRD62UhC9p5JFMiRj",
  "key14": "4kCTqKLUHFhDKvcSEgaZHmhM6yri6MwK9Tp1hGq4FgMchpAKw4fByY9DmE8Vko3PTFRPghrcD2FYCiP9RwitHi2i",
  "key15": "4gqsgfAfcb8Kr619z8cXec6YUFGjv5p2PR75dYDUE2ARHjvUA7PjSKRWktNHBRZUxTwUpvaGGNoUgzRasi1HSJD2",
  "key16": "5Qjb75FhPEHic8AZTMkf22xvpBRvfgymyAhp2hQTJsBKaX6Gu6xCRhedwzQxaR8kVDjsa1YDEH7wGpXui3yhtjYe",
  "key17": "3ioQSxU5BvTjw63APsoHgW8Gc8A67DDzFjyrTidRbo5TXRtmB7ikAUsCMrTy9wNUtrbmYUZSLCuH7aE2QG9ne5pz",
  "key18": "3JzCshoTkEEXwsMQZAG3JF4XsgubCb3SuG5AQ6bMSjhcEL7efXJoTAWnKy1JBFejwxh58Fr3nR7moLiJbS21tnkW",
  "key19": "5YjtP5sYrLphnA1JvaovXnifdKbYgWPBjwERNud17Z3vHNWM9J7gqtTdA6cUn1xXdwWjSfAZTmBPby9pqAANFkJf",
  "key20": "2WyTCkc83eaPQfU8rTczPiVWsQ3ycXXj6fxQ9igGvXrAhhaU5PmBfU9rH1M2P5KWZ5NUu5ZEgQ6MsTKB6PBRpJFo",
  "key21": "2ySn7eWq8HGPptcV7HXomkZGXGELPkdkjZzs23Qf6sAtNPNUc35FB3AgFsc2FPCBUZMgvMM9rjuYnyciHcgtAoBc",
  "key22": "3sJtf1CHzrYhC3G5SHrUvwamJYawv6FEWWGSHnufERFiLgQtJ68U2eayHAQh4jcFRnFpT6DXajwdL8QrwKtCuxuF",
  "key23": "63wtcihLu9mivea5FUsEMeGpYJyLuCmjcHW8zmPy51faRy735TE2gii7hwcAs3RszwR3QFnyxYBgGJnnNay3vWy7",
  "key24": "3GPNpChmw5XmbVmC2EEW8aXNmjD2U3fkjx662rNAAny4VN2MoihMBfPptgJH43khu3jz38fqpiqcoRmV9T78zrak",
  "key25": "54iDNZmyKAf4qwyMvKqJNCUwbVfFs6NdDZKGkLiVcE6KVBKwaeoyS1k8n9k8cEQCmJMTW6TMmwCbRhpvWb6cpu6u",
  "key26": "LJiqMfEFLDDhq1nTcJcmAReekdDwxq4gNNU8FZED7ZgUMbb6eVDZiWbpNTeF5R11sWuSNheCm7nMvTofMZWtibh",
  "key27": "418CaDwX9GJG7yAXgwdY1GaExWjqifDxQtBFEcT2mvva3sRqxMMPnNosTc6YYAnxupwu8JJ4R3xdfsqm4RqS6GFC",
  "key28": "3ZeZT8tNnLjV4sTuNdwKxZpUCVHdoehioQLdmV7gT13g4CXci5tLbjGAaQmFQMJP43e9TBLB3Khnf6sD62XZkXb2",
  "key29": "4A6MEwFy31zYdsVVo7vLJq4bJWF4KRcsfYtqyCE7TfTCcNKCBCTuoE77eWGZudG5MGm1wgHkRKPueKrfCAupcSLQ",
  "key30": "5YGaaXoXMGsaSjAH8aADWYbN3J951ho2oAErTHvkNKqWScBAPwvoXekntAB3FvvQarjQtPxdy9uGrLsEQjKhURbM",
  "key31": "4uUDcUJZSwsBBQZEg5Egfzz2Ra84mJDgPw4uiaYYGWNtYS9HVphsz7wq4yN6oeZfDE7ATy8EVh9YVHDpRVZsR1ck",
  "key32": "2tnYBca2vfXTprN9W5X2Myv3bmnokaKi38sAcKShftJGQUoV29Ldq2pbtaWXYiaEUQtg8Xa94YzFRBHpguzdesza",
  "key33": "48AZWcmeJ5brP1bVrE3Z159XqkmQoi3vsYBZ4UF9pzRQ9mraqdd8PwpE6cYqYGWnCWRRbL34sDDw22XRMJEiK7HQ"
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
