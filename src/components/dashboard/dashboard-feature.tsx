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
    "2Do4faZfxDuLtnCQy6VtjNMoH3ocF3QhypQ3gx27E9DDXxYxo3REgS3Ja1iezohBkoVDTWryd8yoXuuDndAH75g1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Li75MdwPjT2FbRD1u25GDc2RXrSYcoki3HH5Tmhh5gV5wWUxHQrKivzksbFZRebz4anTp34ooHjNwjCcGG7RjXD",
  "key1": "5PNy1hRnKKHbUj45t2ytt9fdFNwar9P9oVdZ9v7eySjpBwEJwBmq4G8xbPjs1KmEvpUdHDVrEzCPbrZeweZoihb9",
  "key2": "3JaKaCbQe28S4qJLAjQXGhQPwsVrCHRvJp9eEHrp5C5Sn2dXTyDycWohcAMp7fpv4ZFDJ7pjFAejXfF5d56Bq9n1",
  "key3": "4mQZocLpXEuRYCcuVqzjaJ3aUhuzR24fL7Qtb8zBaFgKSEcsGpkjmBEY7ZassfZLp4zbjg7uqwmRG3xrPJB1Y3sp",
  "key4": "4U2LqS8KpH1aPuLYWixTxu2uigiZJJnABvazesUeF81FHq8Ms7uS7YCoN2VX6gnFATYm9rKjrhMEjwMANmqUQcUU",
  "key5": "2j45QzYujbbQ1DFXxncZqhSpotfXaMFpbmttxDaYXZUAUQXfiECX6c6s9vKaRW73JP5Yw9ku66xS8CGGeUQoouqv",
  "key6": "4gQUpPM292oXiEyd81AbjHoRyfegvz9XVghWAn2KPJavLNGZA2qsiLiEbTEHgAT2eNninMyTQoEVaEKoHAmf2URs",
  "key7": "4JBPg8HrG7MkkSHWYQUnucUeR7dRmabWKExcHzJQaYMsZyqXmUxUXFubhgxZvhsmvdYcwZG111A7Q3yST7SMVyK3",
  "key8": "3xaLDXHvCerxwTxxkPNfKdn8StdGnR2ZEiCTXKMS1s5LyCk8rk6tn9tnGm3EVHyik751NQ35XLQA5xjBTF568hc9",
  "key9": "2Wg8i8JP9iBoKQ73WJv7TSY2W1oynaVKJxXNRDqYYzmUML2MHeSjn3kB5Q5BMeRYnQWmTh7JQipz6Ng4G4U8xC5T",
  "key10": "3cbpe1yStQY434m6LL5qzvfsFQg8j4T8eqs7nTWRnsqKqyqKWj1mYatbPky4ra63jipYKk9fC9nBaR3s9GhdWuEm",
  "key11": "2RWAAkGjGDaqysDefLSgVHhzf7FnnBAoe7FHmazzZ1vgxtRbVXasXnS2P8iPTwR9AETRu4kCW4GoFWpCgJWaxvCE",
  "key12": "yTnzWKRcLdVTVRefv3bjVAQMKqha5DBcJvWV5JQWTmHiMNgsfWvr3yciPeYgmXQweRJWep55s3RAvkY4xkUBGn8",
  "key13": "1dFjcEVW2D3PswrjvhbzF9nSVxXDNkV5obXeq9aiN6wd7xMy4xqz8J19wmoutT6SndrN1evjNRw111SfFjSzdsx",
  "key14": "35MxbEwE9CsEYnBhZ9MKjqAF4p82A8qgz9j2ePZJMTR61K7c235dncQpDn2wPKXTpAqWD7GYvWUx71cDZBXrNviJ",
  "key15": "1XyUyBeVR7hNietmbbrFngyprVHXkaV5mXBfBh6ogtpUQugLK5EixcRDWcRod8ccXK5F4GchvgZEzuGQmVRTQ84",
  "key16": "5bmWcEyc8VUKS1vU1TCQ26jXZFcuR9ZshC4p4ikdgYPfaUkYNeVRMXbwUzgdm75gWaX9mzDyYtT1Q4kAMPTAAnD9",
  "key17": "48uxaK6pTjJLa1jQji9xAHy3hmUTAdyvrHKDU5yhZ67t1zFTdkAV2UVYgXbTc4H7DCvrW6rXsmbpZVHupCgxkY7N",
  "key18": "5u4hY2AqA45B815WmQhAcUwLHhufhgR4TZBQkrkoycwF2vvdFXniufDXS1ukC3U6gfxJatce78cpGaEX7VWfa5tw",
  "key19": "5qyozWnFcG8eDmhcSZW3y9zUeyDYXeSs4ZEoXvWnyCBRgzSJJqi2yyZkxy3oN9kCvt1sss5Eq6e9JkAm8UwbmDP2",
  "key20": "2aC9a9WdscgHWhjj28G1jeAXRiQqZtV8auXJMQZwpTSVzhdJjeLrf5vVE4uyUoopwe8UrMtdEESSz5esYUFuYm8x",
  "key21": "2QpLEefJE1VLa9FFkXybzL5CzwmcFufMDkCemGE1Ch7k1z1U1vp6Kd5N4TE5J1fj1PVAESiXQTMftHjPiwexcoUZ",
  "key22": "5vgg1oPf5DcqKfbhip7R65tVngAVNwhQap9kNbv42pX9Ly9r56cKVt5hadwwrFqxXJD7xPZYc7QQKjfLrNakpuTC",
  "key23": "4fUYwrDbunkRTm6YQ1fNtgvp5X3Ka2iBCtca7sWn278W6pJGcFxfq11DAUf5oGeRKmx7kWYTkzJv8MGXHkoduo8A",
  "key24": "5wQdHLLxZFwuKsAA2gR1rXVe6zNu3oVtJYpXVEN1SxGVhDEzpr5SbKQqSU87x2WwB9jnW7JGoabvx8k3oXW65RAT",
  "key25": "w1qEAgVUD8Z9W8pGXu2s7exJSmjYVqAx2GyunjoEdLSijR2wWeJjBDJSaF4GEgF6w6iRa82tbFK1Y4m1R8dEGXp",
  "key26": "5juNpZrTScuhcvjWoAHtc3XockPnePbAsmwirSpnnHNG2ToSUy7eFgde1yeRZpM5R1vd3w6d2rjmsREEwvVgn4qE",
  "key27": "2FVQDpBz8xfmhckr9qWL241L8sgNSDos1Pggp3qLmW8eoSdSHztVKrXexaixNPE6W5ZWdMoTWUecQnzaPWj6aExP",
  "key28": "3maH22ADPEJXhTttER8JuJGoB8v6iwWKVaJV7biuMGLske52E9ZUurmmNefmBMRysn8z7cu3EATCKnUUZfjGTAmM",
  "key29": "2U5V3aubt9Lb9ZTreUKmVBQ1V6n3L7qKJSQUn9iFMdx7PYf6MyeLDgKb64KC6qw5Qsa1ZhNhDEzhRbhBm9P2XQ69",
  "key30": "5PiKNwkkf9YSduoDQvALe2G4JwvFS9NuScsFJXCEiEzPgTzeHp8Km7kDRKZx7evH2m5nM7sv19DjRBQkZ9sgeSSi",
  "key31": "4bQc3urAyKCPTKzYBzjZDwW7vSRoccnKeFNVryPfi9XWzKNjQb1iTCnHcYS18Kvx1EQGV4NfVkwYhAG7jcDRxgek",
  "key32": "31x79Hryd9CTHQ6hzWHZuWhvR6dgrkjodZSonoCQruqEY5NB5rxraxtnX94682wZYJwztjyxzUBZiKs8Kvs4o7s3",
  "key33": "38uHQLkapqDRuDxfZPNsp914NyDEfXU1QKVwheVHdz2TMdr2u5d1TBv2J4U3AfgztzXMKHTa6ga7bC3P8K2fzMz8",
  "key34": "4WZFwxLKi4N16ukUKpd54wxHG5ceBa2cEZc9GV8pYnfJG8XkH6XThkLsF6XKL6De6mEuvdvWnqonp3PkofxwkWah",
  "key35": "4rrFwKhWPwRhqUNf5yYSoYU8t6etos5ztvyzQ9uNRn3PjcNzNijU3qGr2NqJyjmiztz6ofX8Pyrvok1oo859SkX3",
  "key36": "3AVKsyQLeTBN3bSRiyfRcrFoAwBPWDqvencWFRWW6q96habChm6gxSAtoZfxDK3Hed6SrqaEw8MY4KV3KpQKW4HE",
  "key37": "4G4tM1tJftyXP8jotfrN58yyRj5PHpy28K4bwbDFCUroxg5oabR3Uvrz9kUkn7bh37pXnojTUwAifEnSiF4FnH4J"
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
