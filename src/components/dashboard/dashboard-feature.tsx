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
    "44SpjYG5EYo4tGe5iqPzfV9SuwLBCG9LfjWbmQ1REjmDKzdxH6iwEcZc4NNtYckJcXFZD58JqXpGfhHe89q8nwcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zk667cJx4AetsLKp7unumN44TnH1LiNdAcPwBwtsx3PCrM8Mg4ArzGs6tVbcMDFxeCWRhj675TBFhncNvYtN6Ar",
  "key1": "5QsbHBiha8zht4jT4vbnJi9A8KaLFQE3CfLWKGyhAVMU1RMPvwkgg5i4PrCYYTA5NArPQeSNqJKZqFNRjeVWNbm6",
  "key2": "3bF5SWXRKEjy58yBtExZG5fAj9QWibVwXt9fSnSWMkNWQUAZ69jFHLSNwnJUimMBj7nt3zie7GmHm1Fz8QaRywDg",
  "key3": "3Q6uW3ut8BAowSeTuHMiVRnLhx9Xxqnn3KmNeLRztgUJ8BbK68AtR6kfZKhguGnJztAmJExVHjFa6AWa4rk593Nv",
  "key4": "gg2bVUWEcuXp56Y2R7xes2MFHmAe2BTUuJCy51CWn4sxFor4UTyKYcNNZiJwVRZ23Zj4danMPamuvD7X81V7oX4",
  "key5": "TfmVmaUGwwd57muBbCqzaLfvvspnuDBwWnpHgs1jQR7HUcc1N99LJMuBweLih5xjQmHMuahEYqKWtb8h5fTaFyS",
  "key6": "2XuUyjf6b79e31dWxc73YdK3n46jTdxFbbhopw413SPrSyN7TXhzsjjFfCiSR7hWpgGjZbBvN1PhrRw6QjFGEaVV",
  "key7": "wZv14TAgbNJqyk1EEsGTexykdXRwppzPy6r2aKyK6usfb8EVsXQPPwYQztHPmxz6WrJSq3JTGQ3Hv2FoDHwQ7su",
  "key8": "2H8iPanXs37kUa35Nd297z8wpPQHn1Y6yvj6RANmaygU8JJrxxxhgwcSmjeYPnyWH25xkTSxjsuCySbdHcPGgcEd",
  "key9": "2svpXkn4ZCq5Pb8PhazaMxdhBwz1ozjiDJCYW7RukY8oSLav5tnmPNeCVGvNzPrg8Hu5cWZ4audAFW4MdE21f1mo",
  "key10": "2YmxZzGgByFP7vpRezuMNd8PPYgVPPUA3EPX2opUgtA6ZCJPbrkamJjR3N9zgbWo7wZT6Ak2Jbf7JAa63CY7mGZa",
  "key11": "5Pj2zKoZmgWNSq5ZAefXb6Jryic92apRc4TX67Zp5dctq3RYUkMRcQwkjpG21jospRiFAqxVrHyu8VovJFM5R21u",
  "key12": "5fB1rdhP9cqAs9tuURsjjcU424Zrb5tDTmC3FCiB1b4EHhx32m7CSpmbftYMi9pvE85EyTxAbyEuH5DgWBoXYuSG",
  "key13": "25HyDDTGyhh2fxD3N674cSuE8DrFRCFwNncJpXXnLXysZpzzDqgD4anyzZfh2cU2bWWU4yaA4yA6aHdgtd1Xkhby",
  "key14": "3G7KixNPUue2dDGfjswUfB9eXuWNr79TJUTDUKQGL4gvx3FFTLdsUkfL2Lsr5nVm1DUkKT1RKqqeBad8FvtwV9Yz",
  "key15": "27PuWHG99ZhFXzfEp9oVo5qyyNsjV5hvH8v63AJtipiRJGkfv47DGr2uwevjzpRQzg5Bm9vZJwXuNGkvf7ds33Gz",
  "key16": "3Qx88xyV58Tj9Y2siZ4WH2oEHPu14Zmo3jZXj5ho1ZSgnpAdZWfiEfn49TZ3Qo75aGkkqLKXXpEEonBe6bMQtGXv",
  "key17": "5i9ZPrzoKfSyNAD3rXGoMiwTRFRLJ6kag4S4xdnQbo24j2Wd9hTWP1C93vLdKqdJdpmGyTCq7jRVYNSYPXQE4qrB",
  "key18": "462zh4ARXpvuWmGR3obN1Vu7m7NvYG3sGHqoSYwuACXD8r7hm6PQ3vJkuBn3Qos8qDHnBkPPdPGNk1ERw4P7xmP2",
  "key19": "49tcT75CjeYsdDUTp2pRbQ7UgW9LB3KSQWmbn8xRMnBpArneby3VYwciJ3jYutXjhbM8DeYk6nihM3vKds84qRQ7",
  "key20": "W4xf1ZDoKMYv2bW9bbmcSixybR5ZuEGmn4MMmKvpaXSj2ChDdbihyJ3WkEvrp3A5ykczz66ASArcQ7d4phF7bKM",
  "key21": "2fRMT591nHAogGHBMgtYUA27yzV6Z9Yj11n1FaUGhNzAoVwi7At8JqJCpZQRRMpG753K7GoNY2RPEuJwDVedsJbg",
  "key22": "5gWEnsUbndUzejVtkSQB8kFNrDCEbmNcPmMXV6Q1cNxqjB14qs95a8bc9AWsXbEQmWbRZWmGQG6XpxFoe1WPsnxd",
  "key23": "2kG87Z4N1jZZCJENQcPVbYtoG175cuGRtpVn4WQe2Wfv2LjHAKLshtMDNAUFCYWdHFL224eErSX9dCgRsgPVCpcp",
  "key24": "5Nxb6p4uTvaUxBNFuz7bBk77cKUn4Ur8CWxjvVXgC69x8diYY9aBtqK44Dd1vqqEF8ieF2fL7DZJxe7BYRYHa7pk",
  "key25": "4B8iva2Z2kch6CE6HauXyb9tHWFYscNow6vRJj8ocXRvPWph2Y48WdWQjJni6Lte7s4kNbBJQR9Stz1RnUHXRht4",
  "key26": "5Hww4fnfJ8YqYV5Dao6QyTAEkugN5rqhvBeU6p7Y9fQx5tchttuCVfePyD4MawYQChRDHdAkTzZehyF9r3EXwdck",
  "key27": "362DBrsiQdfSPPdYznuTyNKk2g4w8Y7vs5sb3MMXnzPN2wJEshJ1hM4f4ktcj7dZ8vEwGMfhLMXWKiHsfUbMAoTx",
  "key28": "26A6jKQiXq56CApjW8BCoCfQ6tGRTbyAbbUdw9UKh7ziLaMjWoUyPffoG9qjJAAYHo7rQYsja8myAiSTwLUDrkp9",
  "key29": "4GJ9w1RoZ5WA58eVgssryjzPB73PUki4FPqnkqNqJAkLWpNrdQbz9L3Wye4Bdftbd1ZKykyuqYx9dHPgWXFZ78vv",
  "key30": "5ozf3DgiymgYEYJTw4gCtSTT4eGU3sG7u3wzq6bNiLEYcLrc4ZPZcJ2qA7tMC6WUWH4LmmwwgsgkV6oFrtxWGbQJ",
  "key31": "5YFVLoUsusxTKR1V5qjXpYGKXZQVxTt4Pto7b2PptzNGy7KkUka1dYsTLoJzGfDweFtfWffiqgmj7KfdMP51DwQS",
  "key32": "2dqiN9bw3h8euLL3zGd4YMy7SPJ74BXoWEr1XKJNqJsnGgrrmmtyJ8QKSzhMtDpDpUA37YNzmsP5ANESkLWXNdrf",
  "key33": "5ZQg3RF6KUjU4haoP1iaBocgvcr5YgWqiMgQT9pXq5nZxBF6S4uMiCNdreiQxBWJwjEWsKeopGrSwDQHDNNPwDoz",
  "key34": "2n2p2i5CNsp48a6UNAmJxQYZKGGeCwpZGvBFv7szCWYUim9h9SzMAVFNcM6apYaYRrVdvvyPN81Er7ZCSs6GuJsc",
  "key35": "8ugc2ABmWL2Dq4imieZZ54bE4taH5szrjW7CdoBipPqbZnMcRYxpXLjdoPQ2oNyPi1jteokQowNk4hsuNeV9Z63",
  "key36": "3hePCtdMPztEMvx67hzTZpfzD6Vvv7Wmzo8GVV9pbb12jbpy424RZKE7a4VKKuZUx6DRBRvsWLAYzbWfDpYCsWun"
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
