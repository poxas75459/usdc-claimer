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
    "4XYmVotFHF3vrwriy5v7ofL9WMPxqFVsgkJq1wzyTxBMJTqQY3QLXYStdxoJqMiudTMLViA3WchBMFvUodBTrK4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gY8hTs2gLajdS4gH5tKgebNaTCS8xmhMkxCaTsa91qGY4Zvv9b9aA2zYrFrKPqv74NJWJqCeapktrpsuBwc8JrP",
  "key1": "21FeBNBsToB6m97SATP9cKMEBLgvmCXrdZ5uPGpex5x1rXw5Doeq7xNW1iL1g3B41mhE4a21QxinEfvpffN84dii",
  "key2": "2DfWi5JBaAQ6H67QvCCXDgbVtJHJ8RcweaFvQetoTfBjdiCLqiEVPdVgr1Jen2bdFMErkuj8pesnU4Emnexixh2f",
  "key3": "4JADGY9QhJ2Dzj1oqiijEBR91o8dtp2J8jJ5ZsQYVjYiBtGENE3vf9gpXjkCs8oEn7L3p9m2wCHhKx8HYH7mYCcx",
  "key4": "v6SXUxSANUydt999tAgWTTtuAmHLLeWWLoyyX98jkWjDgHvFWKsLczSe8GocQAT72xqkuNutJYYM4eYV9jzsj2Q",
  "key5": "2CMwnHMjAMwvoP1at8qrcuA66GwJqtqTLUvu8mtYNW9quFBUyd2kAA7KZdz2QzPPK6byC8AvNRMDoYuexrkJZwTp",
  "key6": "3XyUjjEz95LoR4y1V8yfQcPWutYToiPBvUz7osqPRdWd3872xo2J93eD8v4yofcVvME3AN5mNxsM4ZjtSEAQAST5",
  "key7": "4zT5YJac8zjzHRJ3rKYd5FWtrjsSEae5y2v9aorsKLWgPk7FPiMgCbHSpPivvNnUcN4QGWwGdF3QNeDKPbnpvWck",
  "key8": "GeEGmA7vug25hWovRF6881huqrgXWacY26wVhbfwEokxuC4caqYRZnY7WozgQkrWDHLNdpA6GtTVFT3SNbH58Fz",
  "key9": "2LDgT5w8LeFWNMH62F9nJKJcdK8mf8J8j3RcRiYjUU3UBLzWYLi6BxRH3xK7mzA6jm1rDmERpnHAtdTDmSwVz1hk",
  "key10": "2EjQpJm8pVas5nyZpTA8UmHeBrT64Jsg2hrFJrGjJV2o58Ad3H9UqTa8h3jX43C9MqXi99BZaH2kcnMn74FqxMFi",
  "key11": "cBiBUUpM2Eud7Gmk94rcD8yXz3QJwF6RKmKDK3MUDf8dvnTPpFzmkCgkKtpNY1jLnkYXp7f6b9iSdfjgTjTRXqs",
  "key12": "4rcvz5c8kw85x1vRQ1qedQiHDQrdcoB15vsBhYCcbCyDhusn2i8L6J4MV7q3389YxVQNBCNvfMnJDPDtvFsiuNok",
  "key13": "3jBvWWg5CB1T6UAQNtToNZtC2E6uwbCSFEDnNjhcc6APd34oXWqc63mS7T57m3VXSjdtQmVDJmLcx5zkQHnfgv1v",
  "key14": "35pPuch6HS2CwBhmZ8MjKNTnxztBNJssmtmrSLkKBF4udUHNzgw1UBqee3Kz2hw4wRkZ6auBN7UYt893SQz4pkx1",
  "key15": "2zuMDPd2tP2PHf7zFHU9Wx3gqxMWx9dsmj71Br9hboVvMu17FK87LATZuUKuts1GTeL7b8zmgW16j5GMD8Rion26",
  "key16": "5nU8JpK9w6rQHvsT1thhbi3RVwBTVCEGcM1n43Ti6p2AgtvzFYV22Y5eHvyC4Ks8pw1ZmPnCnGXHPu1qcL82WutX",
  "key17": "cJE2k9UWiZjHDLkSmTpHCZHDiRqWtHxdZRsguiXFXWtJ317aSE7N6Xm4FJiRvWwNmLJF4FQzaZzbKKndU3h9bZA",
  "key18": "34WqpJfcFbn8pg5LQ6UvNHjVZmB1t5rSLc27hnu4VppuqFbEJwmsV3Zzm8AnfsKxnD5xwYQ2JEmrAHtTD22HGG2f",
  "key19": "voDbheqPbdokufPBxrstZ5tiKZtPVPttSk4keX57anGsr2VRFsz4xGsbrUpK1G9SPZYpaZzHYzydfdJPPjgjRFP",
  "key20": "2h1TUVGEZQzPVse1fckngEy93vjjABUpff167XkjdcN2aUhPHtjpRW9xcTwiZMFZCmMKaU3EGAhMNAbPJT4Vemod",
  "key21": "6HZ49FCXfEzLfLauPdREKrrqbN6VJzmT8q7GPN5TDqxkQZeUXAbd6EshiXxVq9nL1URXN3jWNmzikzYebhfvwgm",
  "key22": "58YtBiE5eShLetU7QfTwUkoRDF3hE26ZS4iq74XmxToLQA1XQHDC7GksUvMxJPrDqYaMBEoBgBys3wVVZvZ7QaE8",
  "key23": "4oAbzSViwXFQdgw6wr6hqAy512urWKe6TDFtgmFqzQgAxkwdEaLUqBqQzSnsTjyqkpFgW5WYwPfackB49G9pSnYL",
  "key24": "5bZLzk88ughhMpMiPUFqsB7RsRDwSU1fiZ2q9ZTcLJg4ucWcfTdTSwxkvxJ9msqFZUrsA7wneWEb1rnAZieRchgy",
  "key25": "4FDSYNLwuaaPAcdquNbEAPbxcvtUANndxwfNnvtggcA9dHwyosuKbrc3snSvVPkqsGtGb7ntiGU99pnL4XAqCXWk",
  "key26": "3M7o6k4ZojuJ5wVX8MFxC7E54GJNkYaqyyd2AZTzLawA3XRRDodnpXLGkNGVE5rUXqRFFwEpgzWmG4J9d1UJbz8L",
  "key27": "4KE22gSmL6x1FnJN9vmX6ozizqvLoRmjCYPx13hFWmU1ihrSxp5GxhD5wVbffSeKwFZeLLYYjBVvo2wgu2LBAjCW",
  "key28": "4kpueXSL24u3PWkjGVCu3PPDvkYttrG571gAm6FDYewrgdGxMisAmWzqcYajS6owAbyeBEWp12Wt5ZyhXVB82Qgk",
  "key29": "48ozgSyMy5QAQ5iuHQPz1LNnVXNSFSFoU2ke725xwUfxtyD1tTKqo4TpXPdAQ98bJWCkEzpbFJCQXENWPV4ecAfS",
  "key30": "5BG6YkS1teCjVnH3VKv8RvFWb27VnRAF6s4nc9Ei7ZhcVc3LdJt3bNRhgJhWc6s1n2czq5q1hDLHatKWohRiEj3S",
  "key31": "2XF4kcUtn5E1VuSY9JQ1Ceiwmqw5deqsMhsr3QmbgRJShozDytzeutqiLzSkDTUo3RBcjof43W2hpFBfxpTh1Vja"
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
