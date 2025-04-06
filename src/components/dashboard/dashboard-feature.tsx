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
    "4XnckmhmKrcq53xXTqbVfhH37tdMkqTQbdNE16U9pbH3sEJ7ZgW8KCdjVKjKAku5pXXo1XWypbuuoMP4aex9UY7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55eYzZycEPDE86XYzuRZeRCD82TspefJ5jvNdkpVoNfeh6oVSPWGLsR8h5Jqa5EGsJH9j2c3rf728tKdsYuvEeKb",
  "key1": "3jEhCEUM2hgfsLnFdFWcGqxu4wKj3j76MsDjnRPCRhcsMUB7u7HK1rZ4Nj5DaZgFmX9LGAwaqSytgzpS1VzNmx1z",
  "key2": "5URc4848CUom7r3irSwHWFfXmuGkJQUytGx1GVvHf2j1sKyF8ghDxzEXkGmu1BGSE9o5oDxsNEQ9pirfp1a2xqKT",
  "key3": "39ZDVnoXjFBbcVUE3AJRoXGGYNr9X9UcYxrVoy78n9G6ZzviFMm8DP3eJGUK4bBwa6HihgBf3pEJp3wB96TxbkoD",
  "key4": "5THGkmvSxqBWYtAuDSZVWVNyrJDtRdKogwYAQfDXFoAq1Nh9JK9M3kUxbJmdKyMHEerk9urdDxTLtufzgUcDmmnc",
  "key5": "2Mp1hXawnUDg81U1WPLj9yegtmpfYzoVaATKU2n5ZYt8ysAbR9U3wDEvcpwzECYiFm1KwLGvh4DaEKRRkxCJqnph",
  "key6": "T3wboH95AXtmqfeX682VSApD64FXKLaekrZdn9ougR3NTpUftLcAKbhhp7Vx1ekYo7SHSPrBZ3jWD4jBDonGvTB",
  "key7": "3DiYAb2K6yxBAiCKfdBS4n4m2bUWTFAcPZN4Qbyq8NLR49BUQjKFCVATv5YogEAMUAe3KqJWw7MaXo9cDHUJVEw6",
  "key8": "3uPVrKZZhDH1CMmy4YKVAcXvLi54XVf1JXYjuw2s1Fkky9zLkT65VD6QmkWcnQJp26tGqaLwTWhTQyo58FLPXNFY",
  "key9": "59r8ddJ3ChGqYUHzNASHwJ7itQXuyyx36ADyEtK1zY1KcQtua7QdkbSsLHCwDWs6so63zTVAJLGXvNb5PLjpxru7",
  "key10": "42XvM37mE39Rhf7d8z7gBqDdDV8Vbx5w4jDDyJCWVaDPu9kxYc5Xemp6ARo6fCPJN8agUwfY5S4aQzJrgkKWQszF",
  "key11": "4rdsPHzNoUj7PLVASxccq63XJDxSQYe6H4dKAtArzUBSeNzUvBv1tVhmQjFtqpYWdahhW6KvxnjLdkEg5vx6HSWq",
  "key12": "2QWJT54jxjK9uA5x4nS3fhNrnHY3RYm5UkYHFcNECHnWP8Vq81pNa94q389b9ayajrPoVyALJDJtfNAhPZWSVtYY",
  "key13": "4HyMR4aVfop9MYr1CsNMNQkhHZ4A1ZZbCTTih7moPy29EwhBFXrgc3vecYfDxbk4Bv83uQ8hjdQrsSWBptjVAKka",
  "key14": "5pqA5KhmWbvrV7rYd2gTk7rgD9EeR8mwZSxspAAW4B3RHbxFZafkcVBYMDHT6HQZ5bubpMMHEvU6mvMVfGnSVkNw",
  "key15": "wNTFJvmVLTv3RAuxS8h3oa4CTsKjWip7U4E16c7tRC79oSbfsQx3U8GCwsWBJkx9TDSxESv5TVb3wXNwWRCEihc",
  "key16": "A24Vpf2FgLpL1oQ9ttddgCCtQx31ZzojNGxQptVV1ZSUdAdt5DgHYrTQruAWPAJSd5W15VBBpVkDizMyK8wDw8k",
  "key17": "4SjYwk9ZFeNyyk9UQDANPm2jNwVjrTvbZw5mvNCK6oeziX8gYrAqHp92pViVs2yEpdEYMHciPfRSwY4EgArZmUu7",
  "key18": "3gSTE6vzNLsFoCYBdH9WxU3fxKwqJaWB5NBWA9Y893ygZc9qeBQf1oaC5aNyCdugPLprJ472XgPhp4BHoHfApzjU",
  "key19": "3gpvwTUXeVbWnpZbeTHFFhxjMYon25K9pDLyCtQHUij4C8KPiU1ZUmG54UWb3ttv9EiPq22sGHWCioLA1V6Jh6Kp",
  "key20": "T41f2FVYPsjxc1ezTrWUDRkb6QhkGciqkpg4tYERhfY4doWP8au2X8xoZgSyUmDCTgGAF9aftN6zar6oxMfKrVw",
  "key21": "2vAJJvWe1ued3Ro9gwXeJSQMCjT2E1KzvGVdarMiu8Gpq4qapuiRSQuiGkstmWRmvpRw5ubFVLPg6ktHcrSYBC1H",
  "key22": "5NcuM2GPANJKC9ZDoZgCLEU3jUE9AWb23RwVJtAVNSLRQH2GMTUtr6upBLauiFobsYogtr27EgucaYGswWgc2hJK",
  "key23": "2c1ntp8aq6eKUKDbVY93MyDJ4BQUuYDHn1S6mcCzYVVNWQvXL9k9NGUnXhWqhMpJ11PYPkvNPK7dFuCTfU65ZLGW",
  "key24": "2zMDi5qubGVL2F9B78SppxkcwPgW2KYZFbECuDfba1V8QGkyr2yoQBk5ZJZkYZB6X1AVXAFnAgiSegjtCWCwqKVb",
  "key25": "2zdyrmw8oN2eVoRhurtne6oNe27kULZdqCGA5oZe2nFNRK8LsPUYXZ7378i1pqA4CUvcuuDZ5WwUi1xsrjwZDmv4",
  "key26": "2Sb7qXsqZmNkLcRrELiEZgUXrEgcnp8EYUadsSpbPiNJBDKwVLAH22xGXSTMzUwU89VvWbFt9Y2WfLwsd4ymdaGZ",
  "key27": "PwRggrd6KpSN2GGYGcAmxcQUYgPWWHG9KxYLkAcvo9xcoFwEDd5wrEsC6YomLaKFXrg7A6zVtRsR8tQPbBj8x3F",
  "key28": "4hbnMSXTPQJM2sAnnbE1AfCnU42qj448uhhcK8gFqcS7CXUpK5g5vWP9dXd9XAja7zchUxs3SENbUjuXeb9sSug6",
  "key29": "2erUL2WGyVRLaxfg1jEW9tHuEXxxtF1VUwV6DbWVZrKsTkJaUZXhtzXaQWJsBMmEywMVmyr8hHtXsperLdhoeq8q",
  "key30": "5yCMDoWCwCqvQSJn7Q6rb6bKcmqdkMu25m1LqEq3YmxgEPqP4iJWWJuZBEjLDWFB33sgiztUfhx5K6XBF4aFtmh9",
  "key31": "47a3ZAQQaoqeVm5bARbiHnFGrcToGXSjjiCFgsRpAcAE9U5G4WRzSUeZea8j8bKR2bnvkXWZqNZKQ2hiBYA7MJf",
  "key32": "5p7ghHsn4voX6A53txvJ9Yx57qtKMeaSabevJ9H5P4aywN5H4mgqzDkcdB5esfLtwaWCKYr4gh9BHAETwifHWbhz",
  "key33": "4o2jpFC2huM8XJkKo6K6E8rfMQhkbAgFuopVmkkQ9ymLCA1RcxdUfBBiBZ6QrjYHXE8Awfzn2x9Eqii5oMVvWC7v",
  "key34": "2oSEfbuvBNsZfWB7hHLqNPAWqeRDscSeAjjL1shLr1wu4peMT9QgCzSVK7YyyEYd1vXhcyG4F1Ayzb38HFzoDuwQ",
  "key35": "4A9Kj9m7dV3PZNZjmkcMqzahBeTPXHFw6nonw3vw26gBZpjZLNogSetfPT7dcCF2ZEW99gNEREtYRrmimRVG2zqy",
  "key36": "2yLvUg5XdV9RMLxdMqd8uL8X8vWCJV7SjqVHR8iKy3WLAriBWUPfmzohxJi848wR2M8jCNhqoTwqnx5VMxHxQ4kJ",
  "key37": "5ymV5cnXzjcv6hdRMQU6B16VeBRtBX9yLbgJ5VwRKZsft5BvRQDV4ganTna2LrUXdPZkHiBA5xsS8dNAvW9QpChr",
  "key38": "2yDGPVSpGcPZwgQs3R125UEgHFx7XskyNQy6B5e8XEpNHCe6EP6xfzSwZMgXK7abjkqJ5dTs44rQR5nbFRCjvwT9",
  "key39": "5LGzRhRYrFPemJcnYCq6c7CVuajFV3wt3b4ndsC9PCtExhDv8YBwKPG7RX2hnDFWJ4TyWy3NVPVprfxqq27f4ocz",
  "key40": "4SEVgo5V3G5ng84MfAA2cHNNTymhLUw3Lgbi2CK5Fad1JossxrgjjfRk8ES9xfZWCn1DJMKMrVPsoFvVmySo2w4E",
  "key41": "2hFPDnUPTTjgHjnpkCuFKf32d8Ad1GfN6SQxsSeMzQj34mzYJ32E7YA4v4DaxXqqLmvxNRjLF3HRPfcev2Lu6pR4",
  "key42": "5JAkWB7UqHNYjx934CyEM28i5HHm1QYXvgyo9tbRefhSwTCS8fLVoXRGn7cDmi3EcdsJLYyzMBk4vrdt4yYd2nwM",
  "key43": "5cvGiQX5QRA76wCFoZq9XfxssZqMZVaAGDnJEv5MKMvL44tX86n4V5MPLHowiHS917PjkWDn6ci6fRCwEjUdUWSo",
  "key44": "3Z7icGLp2BsXhufZ1VweN3tQHavQgW2TBRtnSaGhD6ijg6qPpu8PKp65Grj1QRThuKkATTzETGLksmiGSNLCD1ZH",
  "key45": "3qWkDz48GrvV3Gfqrjo62ovYirPmQvtLABnT7TsnZYDFF6mcxwdfdxrjQzTp2mNQ14JirybiXDKD9E9jDgfyoJYH",
  "key46": "4AYNdnui94gqNx1faqt2R9nZ5TBDpxbkde7gVjeEgUYq9eUU85JfvU463fnB5GgHtQjwbPdib1xWtMH2PFNY5MpH"
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
