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
    "5W2BLL2khvHpVGvea5qnDkS9KvpvEpsJAh8GZoyCkGJZQbSWFLdsXGDkCAKRnUSmfkkJ5TxUox9NrJ3f1SWfwcCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uvPjJumwCFsaowXjaKbWFFs4tr3MiDWmCoxMMjkU2buHX2WBRGMSfeiZbiw33mDiQ4mgqgBQCqJy4wgjXijUYMY",
  "key1": "4Qoth7CUUFroVLrbf6CCAx3tvMHqauURjCqfcQMWGX8poS2qAa1ZBCyNeg558n1JWTVmSYg9MeUJoxvHEBDUNVmG",
  "key2": "5pbaStfpmt7VtpGFJaJPQ8wRXvynA2NopAsaSWtaFGX4quFNsqjdF6pF3fYDU5xXPXqAS5ErdDNUPAg3EPq9PZYQ",
  "key3": "41Msi1Y2dgd7NiCibWdknm7Q7mEqLtE4NfTk5vAnukwATwUTAqWppSiAWtxqoRvDmFs16rPjmgBD5NQfYKBjTpBb",
  "key4": "2pe2h3vciCTibFJyQVsKKFLdLJJd2usBMqWQ1pZYdHsfdUsF4xfUPPVYXN7iL6jzGwSjg1bNip3mRwY6ibJ7NXAw",
  "key5": "2YMv31NjMvPzC89XZf9x2VQ8wVvDpVyoSkkePF2vyJHsXVhnDHK2gQsz4j9Lm9K9rfnZ4wALz7P9s6vYcaGLwtZx",
  "key6": "2BESnJsJnw7zkiXEueDPfDWzaG6sJEHR32r1R5wkTuvppkJRgxjW2gr5jUAhJEK6jvmZpN4eGxH8f1hpL7hCHLZN",
  "key7": "5dH585LdN2DaH6NexELTstzEnUPKEPvVe3n3z9sju9gP5h7mz2aj1hqb9ZDRzcraDP2KQz2R8mhVNfAsEQfYefh5",
  "key8": "3KmtyJAQXyuo2eveUDUq23Bk44qbCk6fRkPdtr25EPaTSdSHfRn9vDUPxtT3q6d1y513dibtNBpdgKK4iPfPBL9u",
  "key9": "3L1B77D5EfF6Dua2ZZnXUA1fsjBWpVJRzYKjpcMbsTvkbCmQxp7bvgzRXXE5bg7Z5Zm1r7yiJAHsbxtMidNst7XX",
  "key10": "2Raef2xoPjwjbDHqbuF3cpFxgYc9tW2nxtV1DbEy66dG9CyA7ikgR4kNjKfoQ8UNMNM6WpsnWpQNBTNmeUREF4de",
  "key11": "2Ut7YFKms2oUehVocs9CXHFVyFWo4YduYaTnEBNmqDACD5ipKcogQWbfXbcvtNHEfX1eYmvDDr9RP6fYYCFDvENB",
  "key12": "5op6rZWxqPnpCKa8uhKajikjmMpdJRrNVXYi573osN5ViksAhqJMQ6Rv8WjaWE4LvxXVhw1PAPor5XGuR57Td47t",
  "key13": "PMqexV7EG9ytRVD9nNkxbdhhgy4YEvUZ4PYE7ipNVJK76rKzWkAKjHT4uj6c3AdRhoKqvMjoWb6NiNS7LnYvxxe",
  "key14": "22RSvQDqhgNMo36FHeugTrRsYs4L9VzGvfuNSSeUcC9sBnQrzV6ZsLXWPkt36Poih4jNgU6BokQST7Ef8YRjr29U",
  "key15": "4qV1GKSADcG1jZD5vFzB5a28bSWGf1mC47uZTPNc8hS4ZyTKWyVG6ptvUDYzjkwQ6r9pkwAZTi3kbBHAgrq1H195",
  "key16": "3S77quzQyMUewjkcC7aNpgregFNZehomNyC1pDGCwepTkks2JfwqmERSU2NzwrVStKmew3dDbNLeNQH952Diyqmu",
  "key17": "2CmwEb4D4yW5Pv33Ak3tXeg2TCPjfwnZUK687GDeaTHPFeEh6dBFqLeUZtrit8kvWUBMcz9FwsKj3hiGRKYNbWxF",
  "key18": "4kgnAGGC56Djgyx2xcK9ymnZ7apS8soeNYvJ4ZUqi8ntMXJugCyaLNftgxC5J8u5PLFEQudr4GaCB58dFvnMocdJ",
  "key19": "2jNPzi1z4BS9LocpNBXSSibiewzF255Ab3cuAxRJbNZTH4ogaJmohrutYnWnNwBubnwirXxWNSkdirPJX7qFXG2R",
  "key20": "45WMioSYZoMQE6JfkCgfQebNJuzxrs2RrupMEmQnWB23Kufozefka6NqTpH6pfoCmDqUrDom3xvYZz33FYgPU3Rt",
  "key21": "4J9i4Hz96KUXFnt16s1UeB7Yq1NjaoCPkCJpAkASAHx8M5Z3ZHXccVz6Q7Gebm1Kzso4PP6Q6pSG4Gmjm16v9efK",
  "key22": "533eBmqVQk6tetvZP8FNWoMAVuyo5aB7m3bVp6hPHxZZ3ZmnWRnF3trHzPfBT5vJ6h6yAVhCHQwKvQpCGP8dpeEt",
  "key23": "5mJ5LLdDkbnkjh9w42mNoeiHm8dQ5mo3vf8LpzePP8LNbcs3iCey8vkZYmKhXgemFgtbvYuEuPqUwjXCgGmRfMfj",
  "key24": "32cVry61xzkvg9CMpAFVv8wtJvgZeTAZ295bMFSXz6bpvr1aSatK44hX3dYbdHJrKXkfxpEkA44iVj45w4VC8mWK",
  "key25": "48ck8ZuMnb58KPkCaRU3ditXLAKTbHYH5gUMQe9nxiWLYkoqxDTXxygw7vUNDa8kht379UAWv8VZL4AotEGAX5TR",
  "key26": "3F4uDwBwL8ESiDBaqhFyefkyv1xtW5YgzN8f1dhFvyZjMz29KX3TLZTr78fsmVapDaBZ1QYaokstDeAmdQAhtGmF",
  "key27": "ewNtWtrXpWZXWrvkH2dcvdkN3z1GJQpwRiwzkKzgKz3rBH3GSBwZYxG9F383JTS2FsxZm7dprFVAbUnh2vnxTfx"
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
