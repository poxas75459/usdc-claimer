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
    "2SZKH28azVVtb3LatgbTYx8Uh2SFWQqfy8moVdNdCRGZ4iYGh1C6WEeTbuciDQEUTXmZyzZxun2PK6BXVFkS54Zn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FzJN9y7RRNz8S71tdWZdqgibCLC6wonZ7eBYJBJCi9DX1sKXFbijseHLLXWH8meSUcHQnPqsA1XedbhBuxWZz9K",
  "key1": "5eBP7roBfUvv6M1EhGa2iJtBEnnooZMj6bobUDoudfwF7TpmbogKGuSHvUdd9SX3KJjm5W7MorxNdWcUKT4QcABX",
  "key2": "M3bD1BP8uMtzTK2eaPpMwnxFG4BT8tHfaRnGFFXHiUuysZNVzy1d414W4Zqd1NjxoBBMobsYCdFhmHaqvcRnySJ",
  "key3": "bYPNQ3CSgxCZMW6P2gCrvmft8kro7tTzwZf59EQnQ8guMQHjbBsBfUySSv9soH7DexAiAyrBXBkMHsjnj8SaiTA",
  "key4": "21eJThhydgvxm8tse6cH7CRcwpjkJNxcKrtW8MHvZs3DpojEkx1Q4n2dzHCSX4pfmcxdWCGtT1mtx7dp81zC2f1K",
  "key5": "47d9BVEgBvVAKQ3xbaTedD4jcHmp29gJKSdocWV9ut11MQF7mRGiZe6RKcqhJsh5p57ij2xoNZk68pCrB1XVW4py",
  "key6": "5ACNiWs1bEwNuwKgpjFfeNUkbyybUSS3cDE5mPvVkChfSTDdFGxWAawb5AaTGVQVVtaCvE1UZzr7GYzRqmxMZNrU",
  "key7": "2mqCakEc3PPEhbadjdgCxRbvwyWmzNfERYBZDEVaG38fBCmYBebcANWRsJJdNX7234K2N6waFqwoRnGZquSWYEJ2",
  "key8": "4eV1NihCfFGDNpU8aicShWEtFrk6LGe45D5rjii2kULHLWTPdok1YoDYxadgc5972AypWFPPjTD7UpGqCnfH3beu",
  "key9": "2XRg85hPaZRfRjXMWLSQ1K1DVbHRPj53rtequByASRDkvDXiDyqpNoNQqJQgBniNGyyzHHpECKk8FNAaDKY55Ta3",
  "key10": "5jjnVmZpBfooeBn4yVZzBcMnfz3YpwQ6QzDTJpXv5JGZHx89kX3bxe9uzFiR5CLBjSzgq6umHRyCpQQhzTZxMTsH",
  "key11": "4c1dhqmvAsrzEgGPVJCFVnScECRBAGgkRJfAnHCYo8J2DU6kubR65xtSaJ5mGCWkmkbwdF57JekwvXe3e7QdRo8n",
  "key12": "4ZYkA4dH1r4vDqherEwiAA9jJdVEJaT4zH7ZzDMrPVHy45BG455a75eRhAqEErVamN2W4rt2uRoXM27SXFMLTGoV",
  "key13": "3K5947tFPVn3MTrqAWK2LcyECX8bBEN4pc5yKQktje3oaL1sc4MeF2V9htkgy2fjKv8bZYFBo4mujwnhvQ7zwsij",
  "key14": "44MUpfaaERFvRio5YrsaXnmjSR5Hhtv68L82GYXKW2PBTJEV7jdPGjKfd7zWLEVfRGjFD8BmDYFqk74T55ymBq9E",
  "key15": "4R8ob6BS12R2JSTfXk2P3ERZRtkCvR38AqNWaTahmpjYb87au1S3jpUMkEeCX9fqkxNBiExp6Xm1uRLqvodCNHjP",
  "key16": "2S4297imcXJQwgDxuJp9vW9K95Fy12QXnB9Xy6nWZJZBBuwd9R892g2nVozhN2qR7a48od5oQggtp5L7RtkNuGuz",
  "key17": "2FigfmpDAuAtudqFQqePygLVjwjojKZcDEdPXH4DUskF8eu25SfBSk4XWybhw3kbAfejbpxDx6pHDFErDp8Vaizu",
  "key18": "DyBLkz1q83gkpZbsLJkzp9VCVZ5fqFX4FXyKSxeVrW6yc8r4dAECtdnfJt1QFa8gUqGZu3zkMjLH9w3oBDkh3mL",
  "key19": "3UVfGJa6vX6hbf7fMTRij2h5fZajSyha5nFYR4gV75SGCC4eZ54wAiCr139DwqKL3Vz9zyTj176Z9AMTka4zCvHs",
  "key20": "4R3Qt3k766dhHGpvKi6M2TKsea4r2FM9UQNyUJHXUS6NGAfmJJk4se7V8CZ6K3aAAgyosRWJD5jh3T1YcujukC6",
  "key21": "gAccYU4hWmZ7kdRUuKQY3mMADw1e2YRfV6zmJfgXF74CvmNBfsajHCM5rGzJYXoR75gFuhYBQxM62zTcUwbtz47",
  "key22": "645MEF6zU5hEAcJrob2bCzZCnRC5LEGjSTksFk75UBUgr5W6ukTfALVwW92Wd4yRBcwFnHvKy5gVqSqMuDTwCA1V",
  "key23": "5xEo7PXdpZ9X7Ph32njP4XAT9BuKu2cix7ssPfbJrqD9Ytv6BeD9KpaTz5MEc1cH29qnpbVCzhejFGfUcSoMWVPj",
  "key24": "2Tj54MetQDy1vTBvMaxNGVg358pWG3GMf1j81BpmyRRmLHA9F2ZfxLYTjsj5YYf2PYGxu4ZqvWHem9tscbxFTpj8",
  "key25": "4MbaDUSMehBz2dntuhNF5Xf1V2fUnR1rbTi4Q8ULiddBvmdqou4ziJ6jBi8XRKTdqecTJkwsKadvvfg2XW8NY8YE",
  "key26": "5XV5PPEWahV46giS8F3YYEBqQh7iMK1vbR8uosS2K8oaihbHhgSDYxoQL3fC38zMy9B2axN6Dhk7ZPUZ7P7UJscM",
  "key27": "2Dq5v2FB3tKz7xFWyDsNu7whRT1G6MPr3K8WreajtHGwYS6Knphp4V3FVLkHWxbN3W79bavq7PxSP6mwdTtXBVfc",
  "key28": "4uhJe31kF7to5x7UQ2XaNmCPa1wWHHMsenmhzSqmL4QUEhAWUxnuJYMDmyWsgR6vLePug96aQGqXJUHYs9zHa51b",
  "key29": "smB4ZWugMwCcLMQ78GLntg7amLpoLAxbPFgNJHrMBoWgLxv14DiehZ5iMaboPJbL2g3XvKGC1FvtndKtLByCJ6u",
  "key30": "2zyZmM4H4VxunbJZ5Ryg9KGkuzQZVpUPPr7jABv3g2aNTw1wPdKUkn9XzZehDyjvyZyeAf55ccYdNFecaXAxVNcs",
  "key31": "cz8PVJZac2iUT5GnNgYRQhLDvQKmnYH348kv6rgErtiD5huEaCe9AjUTQtkYhfqmKvEGAHyUeqSfbAyu1PNnZUg",
  "key32": "3fRAwvCUv2rDLuxZ4zwkJZ1BU9TTAj5cU7XKX7fjmdue4zr8pVcMKKnv9so4FWG3KVgGJXG6NxucTCDGs94BzsWP",
  "key33": "49GtRyWhf7sLnQvW7YoNgURsqRzwBjyXK45JXnUHymWbkTF3UMnngAM9Uj6zmN6ftAVKW1ehx944xWTY1iymRigV",
  "key34": "4b7X65b58dR5sJMCcE5HNL3aADkBVgLqwxtsPieCxiL9NyC2deBmuRhdCqNaD73RKtcruLfPfMs3z4tas652v8WX",
  "key35": "5a2NzWwD7rMJ4iautEYyKg7Wg9wv4m1o1XVFxdyFhnBZCY4W7aQTi4k7ZuUchM5T4LLNKLA1iua1yWSXZmCvW6Tk",
  "key36": "2DKyN3e9uZNZeGLtxakwhHJKcMqHZ4og1fHXUNbZvxg9MbcDHSnWXgw6qGgQFeVoZa2s2j7CkRBs8CY3XFYD4ncE",
  "key37": "5wyx98k4VPLhgbNZVC6RrAnnyaoxREShEgRW44kxm3j6H9NawaXn9HNVCikwhePsh6ms34DrY9qRPyS6gcFf9G3x",
  "key38": "3V8HU863p6wYF6CRReRLCtFc6E4mBHMPur3LUHZCA6oFSz7QpytFqrXZkudpWXBBBYvVyn8Tz5pXnj9oM8CgefvU",
  "key39": "3VvpUMEcVVdCnsEQyds81xsWsaBcc7HZtrfun86jL1es1a4pHqcWjcmrTnY3NDEnjCD4zF6F18TEhJDNey5oAj7K",
  "key40": "7U2E6deJkx5gGySJSTYQxKJFTH9QHKRNUZLQ39HJH7R9d6NZ9fjYd2rxB12FpvaNt9ENoeM8oi44iq5Lv5y9stH",
  "key41": "96NnSL1ttWBpkjjKmdjf2ZXJkkyxXp5LGNRuN1NzAvceSqCeJ85opmiT1nkdhDmUWrAGoRyt5gAVKGZNBczPxEg",
  "key42": "5gH5wJXMGZUWPUQvP3R5bSx61rU3HsrJqS7tNYYG4MMsT6pzmSb9rnpinHVW13bodTGF8FtdiZk95usWvXkwM6CX",
  "key43": "3NL9EbSzudthiCArhhUvf77iDYrwM2XksUjATXyJ6BHVaEZDW9DQoM8Dkq6xcPkQ5ZujkruPoAx8cikpTbPS8B1A",
  "key44": "5kD8zr9kjSisJdXsJiv5BLq5uWd9GrFSymGUGns3Kqw6Ki8Bi5DTcP3oPRtRCkvLwN4ee1G5vHm4h6qHq4uAYuC"
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
