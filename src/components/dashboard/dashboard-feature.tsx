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
    "31m5vXwvs4prQfhWiPZ1jrVdt6rdybGBaSTDVZC77aBVRKXnR6Tpn6EM25wnYvSm82L7Kpvs5WChHqEy9K1rPhGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YqnfroAgr1cpovGKB5FpGGqnY4qDkb15yAkPwrAoBXUexxTAc64LRDAaZrbnm8QBtshenBtRnnXjPPq5qmqsHJW",
  "key1": "2L51GKsU9Es5VjQdkKk81xG8YjCoseDe5H9HTfAgxi7UcEx46pZ4R6GZsgRKN5t8Wa5yNQWD9EGNC2cGZW6MwNmx",
  "key2": "2NxTKBNe7W7eCDqNuNsmA8LYS9LzAdZFyUjUCM6DDXukjyLPmzx1FdXGuD5e3cv6td5wYyTCery9gqQckSjPMTpk",
  "key3": "3vnQKyyyn3XMsgT783ZYUs21HQrc3b5yCdvvm6413zyNMjXx7dBUctEv5YFK3bokYdSStt1fzQkzAdFE4VFHmRCa",
  "key4": "736u7kXgPGyGkgVXK1U9MsL6qQ9mXgVpiCvto5CajVCZm9iKMKJvDkj3ABcbgfh1pwfoDaqk8gpWAsyuxzqcMNC",
  "key5": "2pcMpJWCh9n5qgHQEtv9hN3pcXjFhtPSbstEns7AHn65JyZzoNkXdEWZRDVSQDxm1p3XAX2f6GaXk2YUjSwy7CmF",
  "key6": "5cWLgMoD9gurs3emEGv1TxPLRHejPcCZ4cp3kS47HSRHBjpGYRUn9yd6r8G6LZeidbWWt5SxjLebAxGKnMUdquy",
  "key7": "4C58A5rXFa2MnvApHSU9MP5s1pQ4yxbSAZULoXDytKS8HRw6CG7wUpuQzjzoPdzNj4uNzkaJ6mrUmZUfxcGXxjBo",
  "key8": "4DYfzBCFgcZzBPAQkjW682jVzr52x3e2tDETFBaoNmFqHaFtdRNg5uUREda921xxUkLpfESei4fjdewWbBwiuNh8",
  "key9": "44KCPbYJsFW11tQPEgBzSBwonVyANTqtyWLJGrCwGXyFYsggSffMGZh8jdjsW2yuGxsLSKtXhMxA5dMYjxeon8mz",
  "key10": "vNxDyTWjraB5b15K4BMPskA6Kta6gbwZ5HH74A73iToWk5pm5WXSVLm5FpFTh96MTZit6XU5oiVzednHCPanpdn",
  "key11": "3W2ApEZPmY9bAZRMjsoeMBbf1KyWD73rd6ee6A2YVuTwjh3zDxrkPL79R1ia98UVQwzhmwPbmA6D2zGBS8G8RA66",
  "key12": "WAcf7bQzZjmarpnzJvEv9KDcZL1T3qwmvUaQ9eFnLADQhaUDCx41pc6b585zHSivzXqGtGMcMX9Zk9M1cyjEpGk",
  "key13": "66R2vyQjdijkkVm6DscGzNWxPv86TxisWe6X35SJrnR1ofoEiZeAdtBSox5o4TZ1AHARej2a6YuvRwzjeLYUAP5w",
  "key14": "4Wy8UWEG5NKkKzuf7kGwhVNciBmSrgvtQtXeuHA5ajsNxeiWjnhW49VV2rP4iMRqNWRx9PuzUJXJB52ytB3LoGr2",
  "key15": "23j9hJLsPN8otXfhwrgRpwTn8b9zLdSMrx1ZSRzX5b3FusJB5MamBYzdaHgXM65pgGmL7NW2g45vDwH4JRbHn1SM",
  "key16": "3L9C5R4dEzBY6hwtvqezs7dF89KUHoBakNEKG5YurWYkwmmWuvTXc4wuVUxhSgAC1tbzSiRxXHtCZJseuDX2jQi8",
  "key17": "2yWU5tHpFvJrqNufgXM8TfTAqF6CxmUrkXsgh8yYnqsVg9eTsWXcV2DyPyTEtiRsQFgyDuktbhsWHsFYLQq4N6s8",
  "key18": "42dbv1Yt4MwNm7YPTwapgA3n46z7zWjk5AHCoi4WotBhojqN3tcHk8VnvTvHYjNAAVksmDx3ompha4YoJABRG4gb",
  "key19": "5ySu7fVjVk68hPo3HoGDTvmsJcTEPpuh7k4RT5hLQd52fc5nRefF4EYiwvE5cLy2B5ZhudtnwBbvptcSVjCEt2As",
  "key20": "4GZYMtpUCRAPjpJyPSoS7SqygyNCKSzBhXZiNbUrvUnXmMKUXRxvFsLXi13Yb8E7MGGjwBd1oWTXyrpdUSJQ8Kut",
  "key21": "H7V13xFZ6aGQSL5hBeEvQANsNAZxguXdDjFf8hjrnsJvzSd8L1adEmKjNWrWvXJFwRUJt14ZAb36V43C1685sgs",
  "key22": "5k222xPH65SeMYDhpRHkarqzuxGN3M9USQMcBjp3aL2srX43azTBB1wNBPQK9Hva9EFU5pkRpDs2nukCwUbZ89Dz",
  "key23": "2GUxrDN96KKiejhkyu6G2LD4z1u345G1v3N7x7pYkGsP2jKBoz2A4CTvUr1ugv9BmtAZR19nJiy8XT9EwFhDsiWz",
  "key24": "2hKccL9zsKwgWGXXnPugahV5CdmFz9H5UsG5g7FLgXWC67Hidx2Kc1PhdtfnHwmUpB5jWLBTFgJaJGcDLGQwA3MY",
  "key25": "Sz2dGLuPkHZcjxarqLuhtqFGe9zhWBeKYwmCARyBNvkiuJquDd61yYExyJbgS5cek9QgqqTssr7j4DEupgsGX7P",
  "key26": "5fMx7k6VeJnjme3vbyUREGMgwcUCPXsXRQk72FffCxRByg5MK3ubiMUXhHXdFurhxiGo4Ra7G2cNGm72cxtGNrPa",
  "key27": "2DP5xsqGHPmY657n4tKGiJ48UyrJYhPSKdqJTXwAWDjhTs8PznStNQfivMySZbdykL6DBfufuK24jKCqPnCRY2p1",
  "key28": "5CYN9XWg6C8DwfKir6wfTsHtecfu2zEmNjzjxyBRZtd4a1fetRmGPYS1gibtt3URkVYpVZjQM1rGcKKBwL4WerkK",
  "key29": "28hjXrMZhWnMxfbZu8X621u9CA9Rfa7Z1MqbMXc94juBqCEGwrx11VnDmReYAfgtcVwfeN949nHoHdLx7p9ZFnGy",
  "key30": "4msPUb4ofuCRT9BPTpcMqJet71GPKihJg2xgEUC3zouPkNa9C4H83rF6e3G51YwBNP19kX1sEkap7dSBh3FrXVnb",
  "key31": "34eMKXbDiF2HTijqV5zNx71nYweQNmWugK1EBfrhHUayRkKHa8NX8fqbWY95vdJbgSiQyuotiMAqxeBzAnu4QA4f",
  "key32": "2xngTeRsxydDyTJd158nZw34tnC6p89eUcZ7o5FisbVGLYTH21fjNZ64Q9KL6KCu3ebfv6wzqfBTTXVHCuniQHqw",
  "key33": "5g5trjanY1NDq28tPoQaYNZwzxgcLWmqMZAo2gL7Gkdwb4Ao3UFQoah3F48Um6PsJQVSs9z1yqntjhsGVgeax46f",
  "key34": "3ZywsF5hmis7YVuKtjVPDHFK6AyNP649a4qrTeZnP8zV3SPJCQPJ1Acc262W6TKKLXWjy46LiDmWjwm7zqFbL53h",
  "key35": "4RfrEFY7AdzEZGMe3vAaCvSmPsPq4noYaUwiKMQVWqe3RfZVCAK3ev4rYubkPY8WoKAhgEzmLBgyfxQrAAmierYv",
  "key36": "sRnZGUb2roBJR46S8ArzXfVh1RCYtkefzqWHLGwawEipbvGJeccTNH6oZsNfiX9gcwN9XXWLuv6ngTUmAaoi9TQ",
  "key37": "5wrbHQ5GCkKQUcu1xCJCnwashQtNXR46x9DHbo2XhawGBS3JFezASuH5DCxYNdBF8NY7jf1pyskkg9SnetighdUg",
  "key38": "46t3dkML83NjWQYsvgFcCaaF8sexBUzMSmcgBrVDygpaZ3R4C47oo8XZ73AaJjZExy7HBxgTSmuPp7SZEydzwpEX",
  "key39": "5CCYwqnfQhSGMPhnEwezs5D1pDjKp9Q4ZhFmcRV5sweAV5SAYGeFnyx7DgAHQwWSsQCmBFK1jhyUJ9QJJixTJBrS",
  "key40": "3jMyhDfEpuz8nxNTE8vrAbyodHsoEnvz1bBNm37DWbB8UftukFyauYqehfq6wTDLZP1Y49BBxTxaZWPtfafJ4PjN"
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
