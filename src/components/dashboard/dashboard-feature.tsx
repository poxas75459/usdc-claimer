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
    "65ZdVUUvCBKG29xhzKg6mmBJq2U3A6YrTuhFuWu3JX7zYCSRvDhdN1odm8Em2rZvBpnUpMm2zwC5jVhV61aSJe8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nDFja2zCU2p6uJHBENd257xWNv3RhmaDgbX7yB6db48CkX43TUwNtbaGppKmpuu6qX15vzat3yVWbXb4azW8zLP",
  "key1": "2kesNDW5oZyrSZXW7STFZhdBkAy6LMPb3mNQoqCMi9tvQgJ8EvhaBXjeu3qqmeMMYVwvYEW26FCKMeeUMGtHXiTD",
  "key2": "226ieRM7FHshUxYCEjfmf6fj3FKyMAAbcFMmyED6GaGscvzYQAcyqX6daDJcdHu1BjW4nzhwMvR5Mpf8GfzvCHpM",
  "key3": "ubfEXn9Gnx3vWCgjqecPWTCDYxxiMunm9V15GUNDstkGRZsM7Xhww2B7XkcTwQfHB7FsV3Gvv43KtdjUhbBffWL",
  "key4": "kfTHETWFeEzpMnfH5bM4QhY79EV6xY8wghd5FwxoowDoVYCQhYd4D9LmkD5ay7bB1ukL6T9otDMFV8T1h3Kq8Rd",
  "key5": "2Dya2mdFPqnjBXHJyvMZhQFVJDASKK65J35kn5Ka6MKnkayGbHWBstUbpu3m9WTMi3n7owZY5QG562FgafTq7CQT",
  "key6": "7KiTMAHuGYaCyRmw33QMF8jRsey4udRnCCjzVYxXWbd3ViRxELdLcG2KgchrHjZ4BkixZib1181RmRxQhG76VPu",
  "key7": "5zmVy3B8rsVdJw8gwXoCmMhVh33bokFXqcoiQeZvhsrfNMbaLHj8iEaUsZXpG6ST6t8oohufcGwUUV7K256Bdg2f",
  "key8": "4YbgKocnDvpEhPwctRYxfKAieED1KL1Yut1hjubEtwwEUmA8wz8soSQE86gWjqXJEHNokxey9t8kSqE1oyCczER5",
  "key9": "31LzN7aZ8Uc4dYoCCo1u2nR1QoeGoGbPHhStsahtKWimXU8hdSiRm7ZTA32UhGXZy4ebBh2LKW5aa4vs5Byzhts8",
  "key10": "5wN9z1K3ZeM1aFjTkTNwAZQxqTiD1248eMANzY3puSugY7evzjua4hJXpYzVHA9KV6Ye3cMgPzKWBuX7wRafKu81",
  "key11": "bXPKq13mAn5USJdvgohGKc3kakeXeBdHx67KnrBYQFsz93cnk4CxXfFiZiiydsyNASKKv2sA9oysJZXjudUUDWY",
  "key12": "4HkPkSmaQhvpDdCkUUC992NoW3sVQbewHoGHhJQy3YPq5tiZ9ZyMh8aEhV6Pm6iAqoNvxqUBu6XZeg1DEU9Z46Mv",
  "key13": "35VMwmHeJ3WdPCm4jCyNwAKvkEyoSB1eVnETsWREAarygeY1UpWzaC2e71cPhgp2gt7v5earb4KJU5FJU6ZsFZ2D",
  "key14": "3SQHDo4qk94LQEb6Nc4Qne7CYHMjaVsYEPzTRb9yLtpQanGnpUtDiECLL1b7UQ58uBm1mxR439GCp2iaNdFHqnoJ",
  "key15": "4qswLxkdonP3Q2Yp2sfyxKtuYRTkESumP1iQWvirDMj24CPR1i3jECYCcVxECbgfsS5zXLqkSDDAXsDGaNsH7fU9",
  "key16": "4EWxZnKvzfbC5S9P9Ctbd9TFmqfq5yPzdWoWCMLpJ6DWvJRQG2MhXaoGhyAnmFhPrunq16eeTcD7dgTnAq3Bn25e",
  "key17": "n5oeunMLVbrWtGc9pzK8sKfgRrydXuXXpB8ntxP6sDbdzEAeBRrCPgtbGa6rBb1gACjbSd9ThfLmqbD1WSQEwTo",
  "key18": "w16Aof2PcEX14BBA6agneUCDDvmP8SMx9fiDu7B4AeqTDLhr7hceFSy1Dhxn5B3jq4UY5B86ZD1PcTW3oJGsi6V",
  "key19": "27RFzaT1bo95KNfU3XB4o6G6TmkmfD12JgiWzf4f8FoPDq2BKpwwhafhuBLLBoKvRn8shdrr6S7iXcRk829bBaTH",
  "key20": "2wNyHXRAkyUCikNrRwruNnoVL3hobMoSZ6GBdF5TwLPfz2B4D6A7KV6eqgN9rZxAJzehmPCfaiErPCUpGECFsXtu",
  "key21": "59j79Yw1robmNUvvgihKqa6g2gn96cErqZEFSQLCrJ2V1NJmZdVfTc14b1BRTCL4RqeZPUcxmmZ8SCJa3AF9m6Wq",
  "key22": "37hv7bh3mu6WwEHphZSuHZuSjxULRLgdVQ4zxjABnT4ikjajvk1SVJzxGjd8Fu58EoZvFszxnYCVY5jXH1Kq8MQc",
  "key23": "oRNmXwggK7Rf7spLELEkm2fRvQDccMNjEEdKNHji6G9uQrRgAWcZ76htNdZNVHnR2pK78eGTgY85AWKGu13KyPw",
  "key24": "66WCLrinuxXpCpQnQrxFYuKA8hiAGJkFqcCj7qNWzYKnb2GA3CqsncPYi59JGPK5wX1p5onfsymmK7EijShBxaDF",
  "key25": "3SSp3vZdReYBKn5Fdgsm5rHXDC3KVyRFn6u5BKDptYaK8TmuWK12nAK6jbngCkTnpzKQRqk7JFerAv5TUhsAva39",
  "key26": "5PAmSU9phrmhDTqT1BafzHa2G5vrHyPNow2VtYowPYzXjhdk7sjgniWs8izXfDwYArfGDb95WXVbLpU5fd6BXjjh",
  "key27": "vFNkAHSMWq467nbFND2YLpJDPMfNDJxzmAjf2WWvssPPXiShH1KrgywZqugpc7kM1cYuKFQb792pZdv4VZAxusL",
  "key28": "MywtbkaMMhMHENPPpKuueVF7BDy26A5DaUaXChGvJCxcppcGUe8Gz758mhnyLGp6WJ7kfFbzjFuc9okuTq3ZYx2",
  "key29": "4JxNcSt9Q3TN8RWu46Ms32Q7Bx5RHcT4b5R5VwYweVpLdk5CB5SBnqTVBZdpaj3AiXDCDvp6BoAT5pfoa4NYV4T1",
  "key30": "54TvMnMam66ymMjcNeHuZ6WW5nG8HihEmpDQtFJLjKvgGZH7k8eYf31EGhaB63oVtr6Nfx7T98CzMgLLSh3XkWvk",
  "key31": "BCA97TLLj1Tj3Sr5D6AX6bJNYPW23RdwUQ1tmrTLwBZsh23sosxRPDVfMchwo7mpdrhZLR7m7C67oYueVG5oM7Y",
  "key32": "vy6d5aYX5E76sBKWEa4RwCi4FaYsLub9FZJwdtQYUJ7QzdCJ8iKHyZdgmDGCi9AgZsyd7p2NGFYWqTeEDtiCUBb",
  "key33": "K9xmzq9CKQCYkkUFP4mA9uzXuC81VH9ZBPCzxrPRDSqUssAVY75EWYKszEvkCpmT7NYrr35w8iWBQ1FQbzguy4r",
  "key34": "5tiivBV8hGyThHHjbz8nzcKSE9EHiWMsyF1m3iqHkup5wybixHGb5BcNW7SYbXD23Ad9HTfzubit5bWXwTzje1dQ",
  "key35": "3gNsLmcKgpnJFmd1q6AYfevtvUJ8NTGhbs1j2ATr59714HCkzpw7teYu62MUr6YBdCEqkCcq1aeU6yrNwYNXdVps",
  "key36": "4jZzhYCeB1HZSS2383uBDZJ6dboADFGTpjfBkNmKBWE4XEP2nDVZg9gbYA6pEg3Nmn8VaKtegFEnfU6DpLQwhTMh",
  "key37": "31m48KoZyBu7raM2cZwks2Hd3g4D7YUg2nRJznqf9PsDFFuu4xzahWQpTDktC5Cy9bLxYXwTT4hbrsY9XAnX5ETu",
  "key38": "3eSyyf4SSiKKbHhAhtBXvhLdD7ta7HcNfkn33ntaKjNKTrSc2NgQS3etughsZHDMY8r33whnHgZ6qf8KXbNVV4wA",
  "key39": "mQGuohimxfCx1ZgDwCHp2suPWCSXrZZiPs8UQWgxb5GG9YLv5XJWjJy76UWByVSGB9RuHxSS3hAVMaWB9PX3r16",
  "key40": "5xVHGautPFbUfmAEW8rfuiBBxnmYHKBVvRD3pwk9kLfPSdMUyDf2VHLHyQMGrbffaDLCj5GFJgwb9frRWj5xtcz2",
  "key41": "5KqnPL4DLZ84eGNsdd4Eg93W8aL3rgpytxpyFAB9GLDnzzBXxzVyBhSkANdHzx2RnZ9D37jRk6rn4NWZyVxGzUDQ",
  "key42": "4Ls8Ak8SP1ZnFCXmzszNKpyzPKRn1ecRftL1MPoHKAm97WpHEew6QR6PvwtvLdjg46bMNiQBLY4F9KeatNiCqc9E",
  "key43": "4NwTYU9GmAiWLRmZehWJCRBc1QdZu1za5WiBLDPEevXax49TcHgG6eewTh3hwgg9uiEHzvUAfdVqzroVRZzHYdzg",
  "key44": "2h1NRwMDPGsFGkP3pVHmy8X5s2xoMNVpvxTgfkUNK78dA4g1iRYHvFsqXW4wyvSGcPtGSDCDPBbPh4EsDyYQv6Rr",
  "key45": "2iQKPtNwietNDy2GhEyWeGuxV69azRdbby3TvjkkqaCGtATNE83Hu7fZP8ZqaNqc6KuqUzMGX8tpN9JDHdHenr2R",
  "key46": "3zMQxqtQbZU6cYvd6ETkck7rUyJuwJ53vXQ5Mmh6Pn1JVKNLsw4YW8vz1kRQtTajP2xR2ZTVjsCYKrbP7xX1qFMq"
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
