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
    "zRDLFfMWyVCw4RoySPHPZi4DTzwfCcMtirDjwhZThF57g3EqWbNnKWYtP8UPummxt3DqjNTGyATmQS5k7cSSV7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ftZQeLqLZrpxvAi99U7Z7Nb17WsWvdGQtAEH8K9pJJpmjE7xwzDceEqDKfnjDK3Xruo8BpJEdfk3KHxPLDoideE",
  "key1": "ZSgp46Uuq1N5nXhW7AyxS6Gqnbgw3JcH2DAAAES5uCkuJkNpZQcW1GpBTALanZQKnTTZ5GiybbsmLvDYUL4Aq3M",
  "key2": "2hK94FZCLLiYZJ5Ynnkc6BP7RaKBmVynnr4xK8Ba9E7qdcb4tSQAQLR6eXopYrWY68Q68PeDbTotMhZuih5hadQ2",
  "key3": "2UVznESUtnscw3oCy2Qv4778pgMeZiRdrboKoQPvNGJC2Y6272rsHEbCrcQzH4ueecnYfMUiw7yrnmpznthXp7GQ",
  "key4": "3c28TxQGezFipZvjJvgth6ZASm6PUhZENCiiZXWP5mkNcmtNYvvAxRqatoVMLYLDfteeBFSkgBvTi3gxB8BVJgTZ",
  "key5": "5ghDtVawcxBzsJWHGvxnyJmwE5a2YRpFaAmj7ebKnpTs8pPrFRzYCgEkDZ7FrAfuhM7a5ZorfocaAkktbbemU9KU",
  "key6": "V5bov3x2529CguhK221vguR7CZKGLGhqqBj6tZzJfCbr39Szkh5VcRhs93qcgkPbH1fBSzQhbqohDFH5DkPJfh2",
  "key7": "5v8tEhRvPZpe7KwM58aHHVBSYshV2ht6BkfJqpu7WSDMNWg4xMKAgy1YS6gq2ZB5FEmHKdVLQABHvaj9c4SWrLYE",
  "key8": "3uLjSFj9696SJJZBmZchwBBQCYQX85ZbdMcgmjMiFdNdnDFCdYh8TwGnGF2dFPAbMseTYtRt5Nvvzv7yy5tKRWhx",
  "key9": "cLDAzqt88sNFnBN77xFTpyXcgBnzrGQ4bGQSLj8HKKDWj9gdr1CZGfoYuJNzjGSbGDSz1gWTSpuzTeEUbsXz7zJ",
  "key10": "44XjmtWnycy6Cm1d39YuHn9k5F8WasrAo7V7BYXx6NFK3fzoDZE778vyuRQnKBkB91wHSZf9ZF8hm8NcA8CvdCrt",
  "key11": "onKBWU6ipun7VuXoSjaaXfoRyCJf8auAV6RRroBwcDkSTiyWqD5M9tceLHuEE4dYpdTzRNSkVPKRhb7cYya43Sv",
  "key12": "487KgADRUsPqK12ofG41eWy4D19Cd4AM5x38gZW6sWybGS9gE4rTTsAZ1TFK6GH1SUb6kyabTtsQEsdK24PMY5DC",
  "key13": "4ZWCkXvzCXBpLXShNAuJhA86JK8uZKQkJfAWhCZJEAi74tNQBSnMpbNL8e5XYM2R2NtRWQtZ8wAsG13PBXSxzcLn",
  "key14": "pJZT5MvFbbjQSvXmpxn5kZZ6XUXx8qrhoWLYjWgEjBEv6BSVsTAV6UnxjE1i8NpsHXngyBB6fyfjFX9WWMx6A8S",
  "key15": "2jTaRvbGSTw1wMsC6oeTPL8X2JeR9YNVeWx9Z13aRz89twFxBwukSuUEfouxfRzypXoNPckt1gHazddwgYUpT2Z8",
  "key16": "3affhTH9q6BBmxvHyfY5sN2cLHEwyb8YiTrzPUoaiLDBq5itptizLKLpPnBiAgioBtMChdci357kzJXUW7eUHLb8",
  "key17": "3Drj4snJnYfoHyvrZtW3XdN1mErx56xS6ut38VTERqrt4WSJsFBBotwM5LCiuAWmua7dee6GpuAVvXq29rPKcJLT",
  "key18": "2JPFvQfhCXzQvmuWSYv7aPwnvxMJqwQh4aWdJrzBYgEYNXRJgyK96QEo4JTnNXjKAfCa4VrsKjsKhs5Xj3xF2zxb",
  "key19": "FNA14iDBombABSVgfRWifb5M8Fhvrz5wbCSYQzUqb7DAYeNrScmiBoQRRvNCDTPKpqYsffeKbau65tq1nRFfUW8",
  "key20": "48pXXhNVR4SFVqDZDfS8WZL26SVKD74PEoDPD5SgcVy85VtHbVsuwpFC1zMqRqJCg2UKRzr5Qba3KZ2f3WF1fpDc",
  "key21": "3ErZRX8FuXA7FUHqG8A4h8mEBD8y6mBkXe1e2jVWK1bWPsmqpuziU7SFfcq4bavHYgktLtq8cxpvVbqsyyqQvoxJ",
  "key22": "5hsLsmGvM8uPyk4iuagKWZ8YNt8Ku2AKDosmf3qNh2K4SB9xW9Jen8mGUnEqmiHtfjgtuxTP52wiWZYcvrDoR7nz",
  "key23": "33fzkDjSPQ3kViHGfxC4L64w8D9tLqu5KCYnsn4yro8RRb2kZoFntKkBP3PCQuYHAyojBiT8Q6QscrhXg1ddiRJC",
  "key24": "TSBwY8Gwwn4Bspqzw9QtcmwuJAAz4dxECr78oDqyMyjWPoQe1nFKoRhCGGYcVtXxwkhi5eyAyPr6b6tdkMwE6X8",
  "key25": "4HrbLTiuFtucLD9cfkPUB9HE2js2iwvScHidjUSuHhZ8FPeMv8NaZY6c5hU7cMH6PU1R1ZgFGKa8YR1abs73FuP",
  "key26": "3zDq3qfQR2XrCyud5f6L3Yzn8f5SDtbEEiozLTg14KLa1Df2moVFYHoHEM7yt7UaRD6RtVHtsmGP3AaTkUnuijBK",
  "key27": "2oWL3HtgqG6y8BLEzK7LPFtCxKQHZrsi9TFZyQC2Pca5FTxGFsmvPja9vrkHtrsc1aVxhYJisvzLDGptt6Uwodbh",
  "key28": "2pnCXbG4tN2YsY3MsZQD4TrHZkdmXwdQBrA1NVmjShD9pqZnu7iVpCYduTu5m9Qcz5f2mJJdpkyMSKnc1R5ve9Rr",
  "key29": "3r53U1uytJDAhZkzWwFV8i3gpWWnwPzHqgv7ozy3icoi9vuyjtPFE7wSJ7mHgPsPaxvqhdFxsB3nGxG4hHeqvQ6u",
  "key30": "pSxyYu6ezaWeVeTRhST1zvB3ig8yeKoPL7CoNPrJBBgArZSYHMRp8bN3pynjvnMu2umREGZx49ZmXBGLsMgQNfD",
  "key31": "3KnNBcoqBRZVyJRintj3ALmiEHu4z8PBbV4fTHKyVC4FWUKbwerTtoUQrRCuHmbBK7mQAvbHkSqJjALLV1CfV4bg",
  "key32": "Ybe6pBtMPkyNNHvR9TmZLCHvpURuAL6JEo9yFZ5GDvuqQqX3cqGWud4skRWLbAYd2b78CdiQBuZaJR4i4uzo47F",
  "key33": "3fTrY4xEj6GeFdQqZ6qrn2WjP7rTahzuSKTbqEnzzLugwRBaspM7zkk3pMt1nE9F49BitLWm2eQPSLpSZw2wRDhP",
  "key34": "5dyMANFvCXdY5oMdSSakGfGrnjncZUSaLF2ZKdSa75UQTu3hLpfuthVzMVTFK9hdCGyJdYR7VCishMaopn4XKu7L",
  "key35": "8F7qPEggfi7KhnY3oYFmgrvXj9uWeR2MThQTCcmXM3zsbReLoutx9ZtB2gfYi24bQD97P2Yo8QLqoK6AjvhGPG5",
  "key36": "2aL7MkiJi6NwNU25soR1xUDmLaMYHCqXmbWJsf6kdTWYkFKERcuH4biTHMtfSj7cnf36VXoXV8tJzG8Yj5Nt1vwv",
  "key37": "34QRp6Jm4oZ4mgZQUsXHBwQywz9zYUQouavxeL8ebsrvceMqbqbeZQo6vaQdKxEVLaQpoS4x2W1vAquF5d8FZVbd",
  "key38": "41JMC2Rp6HXVbiK9dqsp7fbqd9qfhciRUU5KEudnWjosrVPNKy4a3hfXKXsHfDDJX4EDcfBpQaFpjLLQUdxjY4nL",
  "key39": "5DshNyNAygPhpeR6fM4jpsZA9qoyWZ7aDtXGWPvKLybYDyMGQt3XjefvgeghophCgmuXpPKynsnVBiXUZTykCGG2",
  "key40": "w7rXsrCJZQC2KgS8ntGkBmvVj8bNKHvmWTAvfvYxEQVETmztWnYVmDWZdVgRKUidWjqZxhuYqa33v4Xtcmr32cs",
  "key41": "KqyCnMFHu88wC56LShHCzP1hH2Q5my92ihDDLLK64YsxL4xuci8gmqLDVgwX2eZMWfWtfhsTwy8QGeH4vvd714s",
  "key42": "5KmqxNdinJ1RQ9RDqNPLCg2gakP1s8ATQGVdziR7NKXns38qoHHxQZxfNBtcRxNsn8spJg5QUUVEyDRaKUT8mnCD",
  "key43": "2tC3ZnfjbJPeF7zoUwUYYbCHYNsPkUYs6DZRS99KDfUgZqpv2nReuHtbA2LpoTB8ytDkY7QkECNWoVUkDXxRskPe",
  "key44": "2uhJdewE58VCKjT2xixCDDw337cmiYdnhoTZcgxXsMAFDGDYNxVrrem4dAuDDU5qruXRF8TH1Bde8EzDdgwDhWSY"
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
