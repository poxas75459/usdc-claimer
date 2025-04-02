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
    "4p4RPzWW8ssUToTAkHwCDc6hDdYN4tUktayWyXk1iiARepmmpfZuk4CVQ3Kiy7wFKbHvt6koHamYmDRoBqb8mnNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N4orD9esJjdzUv1qPJ8hezk2PwoWfUL38PjgHEwJgeFDVpmPiQZkrhk6AXTXVVWvd8EXoBNcwpSDk5iLZxVaMfk",
  "key1": "5xqsFsLmRAmRuutA7onyYJzi9bGzHxnuGD6NjUWPqWrJxym1veMYqHNJMQn4RxczyD5dEboNn3pScszNQ6WnrsKy",
  "key2": "YLSh8VwqyrZM2GENh6x3VAwn1L1z4VcrXH3Y2i7JoktofU8YmC5nJQEhHZ2BS4nFSLXoSLsu8iizb46ac1Wp8zJ",
  "key3": "3S8t5eUUhyVerCm3TF4rbBV2piMxcFFPmMxZy2B7kzxAALDb59cCJvRKxFx1fQPPUV4QZKmFcEqDwRJCUGo6srx",
  "key4": "4VMSkkrvRa9j2xnLpgjHwz6tCa8FFMZaxT7s5htVSwA1dbHXacSxgLycfDjsH7uYzzBhYm4VN5kmmEbSJGDf6V66",
  "key5": "xRtQxpJy81uhyh4ZCk69n3rAkqBewHBBkrbgHMaSEvoGNUa8n7rbsgYAYpXkXhHSyV1qPEL5JCvc8cT48AdXE8V",
  "key6": "4op6KN2X1Hx9Ya1fd5AAqznNsMkCrRLfBRQoJoL1ZbH9QTVZ58u364xa6SYHVLQtf1r1aYDRphGLqaMnmdgyBX7T",
  "key7": "2A7eA1myWgd1CdzoApcnwWJerFNxadE5hZMxBrvMwLSFcbssnjUuCoJKeGkKiQsqK7m817AgfHzNhwbVnstqVdKa",
  "key8": "3fgqCafEzzA95LwxAtkaaTHXofNapqPjj4UJpPf1oA6hGZ6XvkRSrPTSrk7PJgx2fnBo9zQ2dEkhDn3x4g3NQsZk",
  "key9": "3fabj7oLutb8PAKLbCrHJMAbz3DPXjCqN4f2siT8qHv34svC7wkLwppxqCzsiyFxQvmewmNrXVarHgVZPEwvUeGM",
  "key10": "3WQrhHSp9FAS1idihwFgz93DEweUavfv5ZKSA5kBkh1kZLxq4zV4Qu1AKYhxkQUdduiH2tE3Zr36mAT1vgxRZmTB",
  "key11": "3cehiyee12FjhEnxRdpNNTibSc2tUA2vSLjxrAQSAfm7uQNnzcq7vVLvVL3mjDECRZB2R62Nu5U1Z8BHnR9dAEZd",
  "key12": "Xx7XbckHCjoBNnD5kQHFqbAH5xfoB2phzrsQrkxaD15Zn3J3EmsgXCai1fA8GyM7D7UwFoRktp5CQ8HDaMmhb8o",
  "key13": "4AU2ScsAqibYeA5A2DyEqpydMM9ScR9HvfnVwjsDk1ks3ZQnJokofS5w4XnL78sbEx68DzpXgY8qpFCGdEYKbNta",
  "key14": "2bxizzpA94zwR9Qsd7MCaGCbGdCB13vQEcvXdGXrc3efXi3yDHjafTTkoWsbB5uu8DVVpuc5q65ux7CoTYykhFbQ",
  "key15": "5yPAxRjnSgBaQ3EhBcnCF4P65yzdTMxfiM9JX9ZMv6ue8RYT9RVyGjNEF1K1ancEJUahTw2KSuyUgLR5sDgxrp7S",
  "key16": "3GYVko4UuCLX9ZwjSJW8Nq8bD9VvLN749iNXZ8saE7jdaUGTAgVfBqxCpJ8kd6c4CbwGP9V6kRZn6jjHYhVFaacn",
  "key17": "3nuzMgbnTmJ5ebFSHoqVpP4jWzvcWGWZwsaXohwV1d6nNwpYsWRtMJ2rNVCKM9f4VGMfhXCtsx9AoJcgFu92aPiN",
  "key18": "BsSRqocn4FaAC2WqLx9bijDif8S1iVRSdhw2XXEkUbR1c7CbBpoVfNTjXidFNujJbEfJNWCteycguKz4H3m55ui",
  "key19": "5QvEGsTMnhhNPWxJE4EjQTew1n6TQtYqYRzYe9fEERHHHCLXyuC9rTwjdB6zttXqaVFjfisp3Kr5yaCWKDphS87w",
  "key20": "5WV9eKohATaRY7Gxx5gvLTJP6qb5biCmzCSw8QLVedrJHAfqeWbDiPcT6zdxzCcqhiXjWdyGtVqK52TiuFAtoeQZ",
  "key21": "3JEHmgDF8cjckquUtG8YSZgPfgxhFVjt4xpSRYB2uKFtwrfEv54CR47Yjn7Jv7vtm77fJQc4aM3k5XFbw8daz9qp",
  "key22": "3Ju5epWStTDB1fSh2D4NKSjtQzQkhHzuZdLmDqud9TicsiDuaY5zUwTydTjLtoR7jgfEEvjAE58N4Qq1GKfSPuZw",
  "key23": "2pTLUBvAL9Rv16taTS1rdGjiv7YvDN9Dfv4AVds5yrGoMN6zqzaD2Aj6m5CJtw1jmBKS7Dvue4bew7vPRUsuhDjb",
  "key24": "4Euuuet68DmhcKUv2EAsG6vwfhLK79vQHme3F9vgXakuTjbeeZ1XEoQGFUaS4QL5YyWATUVL9J1qGDiUnk42WG5R",
  "key25": "95Jkbxym2yqWHBaQGu3gfWxsczSVV95mxPuNfYxcrkZCuGDkBZvRXDpGCCkHVwJtbQRNJgzMoUzFPG7do87esBX",
  "key26": "4iRE9xmn24Gh5U7T5mpkJGovmcDVw1EfQfpqzwXHxW7ft6JUznGbw1VkZi5XmQHrED2YaQKrJzDJKduoLuecZn6U",
  "key27": "5RPqz27n48zCrRKHJ6kmwavoozHHAEVfLZB3aNAHU7ZGkbokC4NAoNPA17sC3XjvPzL2zH3L7gf7EKNgfA2mgjjg",
  "key28": "3bCvQn8RxKLF6ScZ3HuJFUkuwuPq7w2hTJBh5ubGQvGWMeZWymgKUXHMMNT1sUXZ9TV3f7ht5rgg2TpSnQXbTRHV",
  "key29": "638TxLJusV5SzxLm8fT5HJBvJKju8QvU5F1Uw7MGCLZMhaqsKT9ThJCjWRLjKJ1GDWzFsxQ5yUFLVCnEkwjZeyXq",
  "key30": "5iWPTmWND8mxJq8F6ZKC3Z1AGV3nx2JLH5Vqpm7ts7XhrYYiEozbrEszzUCXzsL9W4v9EfZPqhnz51zn9npbjx9m",
  "key31": "3Ybjm3DMzHm2yGbjHsxKAAaFRsZqezR6uYEhmnKXobtiexRso8Q8x5DNCmC9UDNkX7p11kqqoEn1a7gfw9nMumUP",
  "key32": "3ZsL3CtS5qwuRrLv6kEZjpozPVNYTnwjh6qqUGHGxPNTk6zNeskKK822fMv4xcMuG2U7UKjp2WtvCxRJqJDkgPNC",
  "key33": "5L2gQLhBWQyvW3JcNXTxb9xnZpx1Db9ALKavEd4eRYWyKiQ9Cnk1o9bKfg6TNPdNFvEf364ZNy9HucnqtK4zrDZK",
  "key34": "3UEj5wprSeTTu61hUsnh2ma3bJxVb1t2JhLFsCNPRD6DBA2m2Upu9U6Pz8HjqZG6KTGS58VYBjVqzbpKA5bkHdiJ",
  "key35": "u3XLrC3N9dPE9fum8Tzv4QpW5qmsxETT5St8crY7XAUxJQMBBrWoKZPNBLYfvCFNou5WzGzb7d3FFL8tE9jNB2i",
  "key36": "2ujQdYbbBHkGUzZbHTgAqFsTQXbE2D7sVcshmFhR4aefHqm86UfPfTNbkg8DKoBDjKuAAZDJZ5zvLQsnS2qAXWMU",
  "key37": "2ZmogoettVRkDNZkAiM1NCPqWhjV7ayj8r623eTTptWKwyYMxRCQe2yZYXCei43uDWV2sjdPLdKjmnRRasG9Rr54",
  "key38": "3XXzrQjeZhwQ1vEraRDC6wa7h4yPPxz4VkvBZFS2q4CnHnQDXHnY1cvDoDF8nu2nehmDehgmbbMuU9nGB3FNipQU",
  "key39": "3uT6wbTDwPEhAHtE8BUCeEkwZgvG4cCEbF6RD6v9M3FfExN968wq54kfLgMwUkHCGMh8sZhud3WKm3MCuaspZPmT",
  "key40": "3TujdytaTxR8xYFbr4ZfVTdvB4mJGjVE4pVS8S6UxY4crEDWKqKUT5vP8zbEL6KMbH6pxDhTVeTpYL3bDbdAMC92"
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
