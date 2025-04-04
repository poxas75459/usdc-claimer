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
    "eDy4yFoGcZqGpTG7DLmkMvqzi81HszEWERATgKwqxq4TX8Mavj7Ze3t5kh26QctHFbrcXt3HzUxRtVtaPzmEjsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dkqw2Nq2rznRacQcMYvWsH3axvuQvq6f6hPsheoiQgBmscaZNKSRouH61iWwnxKZboeALkh6mshtc2cnYzspDKM",
  "key1": "5gsHJcNDt6VWjrSNgPcfDe2tmmJRs1YYHxqijhYDEuJ7Niusvg2pw9CXxHgZGgxkQLqc9ATSMPkjzw842z6TxQCW",
  "key2": "58mY9VfVpKU7qLAzwkuW7U148FS4xZ548EmvFHmsGp3VhhPQuxJHJKyTrimWfyEmQyfn7yMGFxEv3iaXKGKxQJKC",
  "key3": "4gqKGasEPzwhbe8unmYMhbjSsfSAQnvB611VzA2x7Ukv1r8Z4BGVPa16HdNBoaKmBAD7EsJQ3fjw2k93pfN4e2bR",
  "key4": "5FuvbSvZcEnjLmEdHUW4HVfWfmvmWFXmcaJ2eakfLdueQjDJTYziwM2p7RApVeRGde3DyuGpq32L74ndxaFWQsMM",
  "key5": "4cbCX5S39S8LnWry3GZffgwQryQhfd5AhQKzQ4zVPRJg2A7e2UuA3tXF5qqvAHAXEdMeUtKpwKMxbvCCTpdjFH9A",
  "key6": "XirBERtQ8y4G8uVePPMAWFG6X6p8JQeE2PEz5dQgPswZ7FJ6VMbKB9S2GZPybX6dg3h2Hp3NXrBMdkNhQArhiWQ",
  "key7": "3ZhhSeTecSm2UQUQgzHWyxUnzBGVw2qhbMMSTwS92qYVbQdFYZdD5nXAc8dssBCWAns3XXy7zxW1yUPiY9wn7E1J",
  "key8": "2vuNHHL4WET3vApFuUrHC4GKpyQM1yRhck6teYv5GWvqs4XgvAic1vU8iEiv5rcVjRjFmP75C5i3PWnQX52WJz6q",
  "key9": "2pbERs4FeXeRf7DFs3p1UJ77db57iRD1PRGYGu1nXeruX1sGLWEXfSWv4zeoUtpuyFMqPX5uigtZDibvesXawcjc",
  "key10": "5U3a93C2NVDEL4JPiXV8weh4T2AZvsBydFW9dQfd7RWBF3FDpg4dVmSvyv1saxRjzSvdnrgUj3XRVryUoh22T1rh",
  "key11": "1KoCSGAJHxZdY3uEw2XGG6XGPBKjtQJSqwV5T3th9BvMHcqvvJGHmRLioF7XuKgrnFEnxHmrjdHrf1XL9RBp7Cr",
  "key12": "4cUURMaZj2QHcrpS87aNyaXxGKWr6Ea5NthSQ6xyicMdG5hXWpvFiCKXknPK3p3DaBvkLBLeagsxcEx3i2uPatcC",
  "key13": "gzyECvxz2y7ifqYjYwibFKcSBGMRzHBLUEXKzZQbaERNRf1w3En6ZuqpxiPUdiujikrKUxLZjstDZaGVokTDoDF",
  "key14": "4fS9dDzLfFUdhwRx94iTNbbnUZFoer1iknDJLvaWTxvMWeLN9EGAdp3VTjgjCaiEqqgZ5o7H1ryM2HyGWMLs12Pp",
  "key15": "3mz9x1brVhYNxvuTvHAkdM9twfySogAiZx2CtF6assB7GPAENRcHeEsx9UiZAHGm8UPa2fxKFaWNL93R1k6CLLWq",
  "key16": "3kek1WPHoEPNPvUYy3t6Bcf8szsCsNQBNjDDavU6GV5A5wmD5LC97UdYQDJTB5YenDmwFhFDyJNXfp5QLuxB4yJ2",
  "key17": "4WhLTeMJBGv1c8ZeWSDt823A87uArstx6usHuW1kdc96YL2nEn1FqmeViM3s8E4VMDLXz5aDH8cjkXXPsWo9uLnu",
  "key18": "3bwfdaki78PuRwmfadm6hiigAyS2txbzBqSuaUfiRZA7rgYGhJuUHQKjpJbx7AGSgkKJWVqKza38J6HEPzQRqnJM",
  "key19": "4TP1mvzmVWGcrizcua4LggbQxPj9xyXQWcF92iRA3dzihNGp3U2QZYFYUSL3veqXAxhYFGjiy8qihgZwfJ7Mk53W",
  "key20": "3af1Y7hPizwV2Z6NN5MzZPPx7M7XMX5uYXyKFPMNVj3YmX44U9KF5QANsHSzmpFX2jcii82hdKrAFZPXWTch7gZ",
  "key21": "FhcdvyBsESBENWcFdvRfvAtj5BiixN5BYtRSLSgwmi1tw3W5kAMVpof93rCsVvYiH1TJtjp7mCd4d1AmgitiouG",
  "key22": "5DYZxhhBbwZLFaqPWBoRZv61PhrWhRgY5wcT1dBCBsbUNrKpiqZp9fow6b1nKdqfx6k2cLp6uSgjdJFEdEJE7HKR",
  "key23": "38Ngnw8gT4RMEa7PhF7JGHt8swHSsX7E3zRtzJkjcDfoprEyBiVoY5obnVDCAtspZHfRJgwFMJQqiwcDXMqAgj8N",
  "key24": "dEGxYURtH52x64eEjDyRE11NPH5Nh65KajVuYtcTVMZihh14Wgo6XKT5fbtCKhucrTKg4gcgmsBUSh91E6TLxKR",
  "key25": "4q7ozBmWTmcWMYEfpFoC19Jbuh7YnorRzqS14PvPeCUfoBCJwgE3av49RLu6WE7KuAcF4egUcdAnemwgwa7UXwJ1",
  "key26": "4aXeA7wXSo3my8epnWWznW9R3YuNa5LroqRjYojSLoLN8vfYPBE3xAuVBKGBmTJmhjgqKNuWB5FiqoX3Mi7RRZHv",
  "key27": "474w1RVUDVPrRizaehFeYeXYTUKeMqQRVBq6s2g3teZYwnfxG3oMf3ryvML5Tk71KK5nhG46EtcXvHKvzKVnaP5o",
  "key28": "3Jm4Qvm1UNTGZNEmRMfHuFAZ7UKCoqPKJ5tFvXwYCXPBaSshSWmLQb8grX7xWKi6UNML7skCdBoM8uQ92N7mF5BR",
  "key29": "47b2dDQtLfSchXEaKw2nnGvbXzuA5gLMP36TfvYdvKU5Fxgk48LnjK5ePdzWM6HFkxkzB6afyssYg14cfgWN5XTo",
  "key30": "4VvpFQD2uLDM2ujATik8PxReBFpkRATf5q9FJ1hn5kRWH8DzqZ1VdYgk3bxnH1LdiGrYTao4aR7ASNfKe8GQH4vT",
  "key31": "EygmDcXRJjuAWKPzZcnSvKpGm3Ma3V7g5AjizUAztkCA3FuM7RY3FQqUr5UkoRf5uRPFdFN5d9fePRQnRha1NQR",
  "key32": "4vm6FRv7sxM6RSA7ZiLtamrmKvxTb7quk7QYwHGZmuF9qtfYd85qTt3jUGjG4kzrm4ugu3xgotWNZKTtMRNJKPY3",
  "key33": "44KU4Sfz9KSZFuwG9nb6g1wkfC5DoFQmuhTVRhUXgwGBcGcYa3jdWfzh2iRgjms6QBa5FU9evMkQdNHEyX5yP5i4",
  "key34": "4zNEk1DXWPvMupHts7oKBwmPJyEsqEnLoeP5F6oXy3Ux8DCYw8GnfpD5DWedVe3CvAtoaCMbHhS7ctyPxKid2aie",
  "key35": "41j92YftkfWv2YpUfsXriodv34EeubjvLsEXPqAE78LP7n9qo63zLoaKk3cTrR6nqNeV1F1PgEoK2fJrRUQXDNon",
  "key36": "3YVmYrhZmNYMyxYGK5dZiTXc2GELq7XyYzpUuPxxM75sGf6qULLskDU58A3TqvpJYhkKvqzbDQNhgZAC4pyf6R84",
  "key37": "3QhjJiL4cY51Ex33A7dC8kpJpVXe46T7ezXvCjmCzWMUaeqRDZcJPyqY91PQLoQLKvs26kzDHicEQTQchHQ8Wv9z"
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
