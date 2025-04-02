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
    "2H23JR9pUu8yjqPMuRd8fBHxxFB8q6uNpet5D1WAZPYjimmQxN5THcP9rBBbr4e1K4b98G6UrCTramRLBBZbEKf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o4mPRdYYf7tT5aAVNK4mHir3nsxvoYeF2kw39gwpbBzs6nmA6rCUQ9EiWA7fSkj6Xmc6vMLqLTjdgTrwtchubss",
  "key1": "5RpUD2KM6nao9mPgNhNNQutsZMwpzA3R6RaqZtHWTgTwKdSKJXbDaVamjXSqgvcpT2YTrjvPArKBmjFAN83C4j5C",
  "key2": "oMv6RoP4dBsNWmT1sTBmqhyQh1edLhCUUCbEnyKrSVV8tep4HChQS1XGRsRPug6V4SNZPAzomyTXn3mmffxAooh",
  "key3": "4gFmeYNc57MQtaK6jksBoy6Lvams2RkDeTGf9idgk5wQti9R3MvAH62uBCJyomfZoS1jpVA2Vt6CuJCkcmgKzZab",
  "key4": "5ZQ9FLL3nLubfL3Yz7URyj1DNBFoJbLa79ouAbi4kcHpYDDpKpTB3qoY6XC46EP8y79be9qLe36xQCMvGmsH75ed",
  "key5": "4QbmHQ2xRxvkLAPs1JPQJZkmZ6CQwe4tcU6sXPkDiAmQjU7qWdTmNdNxRPpb9BHVbq3Y9mrPZWeTJVz3NjchF7v",
  "key6": "2e1NLCUEwtieqBx6ntVwBZwmbWMqSyzfXwfjnCbHBDSK2AMX7jjrhSAraQNAgug2gefeMFvHREREwmpY6i9UDG8W",
  "key7": "4DrmkG1NMXQ57CYnHrnPJZ66KtBkBWN68G2gXKqDTbNBD3vamnVmEjZDVe1nKDYS9yAvTchzaSfkBWh4Q2pLBG69",
  "key8": "48VFqHYeHBxqXfQfWHwY8vAZV3JTEyWox6o5FCaWidwvBfHr683inaoSeEdokq1oKWTWZvE2PbcH5hSCBu2TkqkV",
  "key9": "3rJC5MR3U3Sm5xyPR4PzkG84zP8hMk69Aw4zE2j8VmBFmAQiJLrGy6aodQPRTKqxFP19en8hvLT8Hahas9QTjpRx",
  "key10": "3YKAY78Yf6qEFan55nWZZtJ5AKUB5gLSL7AduSMYssJDFzBtNuU7G2MpPN169Cp3t14eEr1pvLLSQgGEdn1GBrKi",
  "key11": "KF6upBdVexvVPT71MzPZjkp6zVeaCNvUAT3TRwD2zKFoXXabT5hBHkAXv5Pr9ZXdUXHYjixsK9sNtY21o5iBLKd",
  "key12": "5hXrnEGZQwvK14UF8tAuJb5k9cvuhftRymfdeXMye6iSCLFS9C34DgTByhQH4LndirJ7FLXNcGiVXUzaq2yKYn71",
  "key13": "61viGLS8GTmtqhKtNwBEn7RpYtjXUrRTHPnGW8ssiCawnsREyWNSWvGLhRZdTZpDaGiRPHJ8Xrjri7RYJE19poFA",
  "key14": "3PBhY5FWyyS9jLKJvDRFrHFgWKvG4Xv9dDFRLJySDyD1fWZFumwKrJF6UbEppCUsxPzrAX9E4b4uLJsyfpdYdPPQ",
  "key15": "42t7vqhjycwgdXjpNjM8a3vRU5zKCYTf7xvxZWeFfKUeEGEg9X2wg2cHc9GBYEmxEWd4JgaAFrgfV66uoaPoUZHi",
  "key16": "23C7iUKkVuduvbwoSd96pSVy4rtSMo5MSq1Nahqv3WuL4Bojq8GyeZt4xG5VVYue6D8ftyFv8yEZuwUWQiQqRYD7",
  "key17": "2uC7JyzF1suaJJ1egk1mBnDZo4VFTEaQkBQxMCjBXsx5tqvfbndLSWFNeug7e1yeDD17iB2VYAgbE3A1qn5EUpnJ",
  "key18": "5Uf5FzSmU3z8BaTR8i5GDq2V2cuanmyoeoRMSJjoBMGe57ZUqC4dJ5Lf37Jaf4WqPZrHmuy8Fn9s6df4v3w4DNn6",
  "key19": "PYYNgUiY8gPy832QiqsZjQAUVaxxPCxDxESdy33tToc9wow7FGgqDFN39BmvPCtXLEq1PgjJCZRyYvwX9eF4FTU",
  "key20": "5aTx1HTvKDjzK13dVjEk6shR8XyHqMSpLtwXTiaw3DK8nyJU31maDh7mqGanoJLz9dScCU1vqMV31eWNn1aqn2so",
  "key21": "4PcYpahwaVKMiuCkWEXMrURS5kmSFZw3fHGqrkgpAh9BN5ovnSN3Q5FaHGgQYDUBFpJBK4KxcKstR4PUMe2tqBdC",
  "key22": "GeCiX7B9v49FgAVxXuJbXYsrxuuZBrHLYVk3SHCQXmoqBKvG8NPQuNAbYkFr8esSGKjTcH9LxJ7YJwTvuF8LeRj",
  "key23": "np4HMvQ6ocWmpsJFiLv53nVKjTpe8dKzaGAh78Xjvjr4ahd8feK7U2HPzUuzsK6qw3FRpzzi1j4hpRhpvjeVpxf",
  "key24": "TwhJV6KKKvNCkoahQ31jUTUrwmEoMv9NwfwcgoPJ4WKuAFvBxQc7Wb9ZKSMhKoj6AP71sLGk63DNxtnSgGuvZvr",
  "key25": "2LentYqjtsPJ3rWQD5J4YE8aTDXJXRmzZJ1ghvth54N25My2ECDucNzr133S31H8sLpxz9vVYocQu5qWc75GwL8Q",
  "key26": "3sXtXzmmRVnnzYwdZhkbwUUsGtczdjycDcj4MbX1P8NkMawUqKbTRzQijWNRUmyWiWGJBrgCeu7PM9VNRDXyBfF8",
  "key27": "4u5aiZGyet69g9u87dVVmU5RqHMCSh9x9DjfvhqhnQ7cce8GHSzYKQ8umorGRP6pJZ57FtyG6QfUiJNKjCdZU4MY",
  "key28": "56JDxptsMvVrcLi9QGCChcXNEgNbyroCPr9WELWhRCw9VuiXCw8CppGrALcWWV5DY6vXVd43gxGX6Q6bvAUg2HtW",
  "key29": "2dVuFb1q2WVFqFeyvnb3iUpbNXfGpsaFr6e98NcsatucqUyr8hLohpV49k5cPHPxxCUPjuKT3B6wXRWUHMb6F8Yj",
  "key30": "2TZ4bPJAFLiAKrw7KN1JQWxF6ttvxK3FYfERK9GMjqr8p6iWfSJGZutMzwcd7KpTDodwi4iPC8B4Www1y2aWn83q",
  "key31": "3KZvEhC6RtReZPAHexctAeGtLKmPugS1UbsgN9wMQhoqBfYDv1DH7YZV3EntXN2GdXjvKaxnwjwsHbwnFW4CoVh6",
  "key32": "2g79sMjjLMC3vX2t2Ft5sVvWQ7L8vU44vJE6E1pfDG5GYnf4LBeJkWFLupgNoDs64WXK14ZwfEVeYUtyScVe4ezB",
  "key33": "4oKgZkkH5EbfRQmYDSxB2ta9ZzAoNhUFqsQJosjVKXQwXWjiDpNqjTuY3fXevNFtNwVKrZyki5RDzLg78yVxxkdJ",
  "key34": "5su5xBMD6CsggmJLBJ1sMLJJcXYGwGQiEu1nkdqqi6stGWjYKjXY28cEZmB7ozGXa4SZgvHwqwaUjuKogzxP5Q1D",
  "key35": "5UXyNrfeynRPVtaLzmMnTSf8oWH7ACh27TuTgBWG51xdSXfwsiKkLfY35YqMj42JwoxxsYW22XxCgvVngRx5mVEK",
  "key36": "4pAdWZu3VkCdhXdxt8LtGaXT4S9qjerWBjZAbg5tEtThrX9wvbh1bcPZwMor4918hveZcezYKLBBdhkNp29Su8s1",
  "key37": "2PtbCXQ2bBfNJMTnPgiwW8VKpePyw2mFiP6MHp3u2ykDJuWwh4bTFLubiKhFkVX8Kt56R7PQXT1QeHTEGr6H39yB",
  "key38": "B835okaVD5d6eJXUDHU2hqw48YrGUvLANFZU6G4vTcnmfoCuzDmG5be4CQpvfkMEGH8PHvtm6y15KSXjGdCh3Fs",
  "key39": "5eD6pKVNvZNMSaY52sqsCm5QZ9io2BbHRfxf1sYhmyJ5hD7qBjjodz4PNjbCtx8P8jaR2qwYgv7Hhm4yGNu9zD1z",
  "key40": "H343VkHky2mBJVeADzbV9QXB4MZrRkMyWe6hUpW6Gw9mZoeZuoZvJQBEPBUfWimbWjCAwmVTDffnSrKrYJmeJL5",
  "key41": "2C15R96MF1z5fCtWErgCSNFiZnBsBqbBUoKZ3rcZJpXcEc6Mh1yJZwhGQtzT3rmt8BoqWA1UymEjkoqXgGjR8HDb",
  "key42": "5DtdZvVDttV7LA3FFbxMRQc7tPiUDDPYkAYAyu6SGZQNSj4uhmuhE1ZwVAkYvajMsgcxDQBmSjwZDSLzssMEq6S1",
  "key43": "4SSJEXVP4b6rujGiZWzRugwLA9CAEQjS9qa1QvP1q6cmZ1AeaTLuVeCdJm4YSnAhcXQvz7sNVPoNctiL2Sgf7oVL",
  "key44": "4jyNvqrDca5d2fSEGt1J1EsovXG2tfDvi6PJ3fkDBRY3T1Zp9TMVZHg2Mf3LFD5ewQJnnFzA9tGJxfqubkQKavpE",
  "key45": "4HgYveV87taKDCYgHZWy5ELqsodFwzjPnLv8C4E8fBwfYvZW25s9tw3R5jhebiWrombDEp3n8CyUEmPq37ikTbeT"
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
