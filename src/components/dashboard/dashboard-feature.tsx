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
    "4ze4HVWFN27LGwzu4JDisvdMPf9pQsaMyC4A2pvSf8vECJRmCWQr1pNJ2PDuLAZ7HHVLGSiU2RUXVEzpm9Uep4N3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N9vm5pGM8FTXPBGxtpUEaVRjmZiXcdq5m35AqSwCyDyeQZKj2Bn9nPZNcngt6gURHYVpTzz46xtZQxNTU9cJpAH",
  "key1": "2Qtz2RMCwdnLwdVpvqsUuKKDhZdVBGE7an4thR4fTUT6KJ5u1XoyoyBtsaxLK74esGdxhcWdWnrqVe5BuSjcHEXU",
  "key2": "4u7RnGaSXkcWebEBSmnjchz3PzDVnwhG5w1CR4DD1WSJtUTZtskB2xLdnPKCvERAE2VqxUF35WPzdSCWedVEoBmp",
  "key3": "4iZru7XnMrt954ukfrC2hzef7XcwrFCaMVcNN3HZCSabWNAYk1vv6KmMqTgjPkFDaVvEfz1RNnomfVDdBkTQLMgb",
  "key4": "4q4EDDkitC2QZJMv6XP26yDmhgbdtsnGmnrjwxfithwAs4n6iBPQ3eKQ7PxzZKJ3rwz9yCVxqsH815SrJ3aVJwNw",
  "key5": "3TPXGUPyDDcXTpZmZ3RfPK5X2fSZk65SZ11qJ9B2uZYr6qAEuWai3ZAuCKKqzjCv6tXXGvXNv9UkGvJ1EEpW82q7",
  "key6": "4YuEp4AEWPLkZ4ofyTE1y2RhC69KgHBZCEjit488JCG4eFhey2G2os2Hb3JtWdgT78ZexDZrkJbpMRLs5msaYdYo",
  "key7": "4U3Fke2fnDZMQh2Fg3aUNRpRKqR9dDCGpbSZbggDT6X8EjX3QQwbdLSyWAvUTUVpaCV5MnfTJGtMnJQHBfGi6hRp",
  "key8": "2D4qdzGTJvQ8BmgxS7rcAw8sm9ATioJ1ZC5W2MbkxowVvkT133iXNfno7Q7yA5fZYHhoF12RvLWjCp2uHD9WUXHe",
  "key9": "5xQU3EAy9rGd2wZddRWmSP28REACaD6efpHMd4jtvnNnQQPY4mJJvnVQjsao54yH2pJWqxS7Q499n4KEvjoRfggq",
  "key10": "5m4QWQ5DLsPJFJA7VjdhN4hELkoRC7wbqtgAs1v1ppaPizyGZpnnbZyGPYbdqDEuo5VwjSYMZA3LAKFoNcsTU15U",
  "key11": "3j4WbCQEZrbhiddKmHBuoWXPgsrqnQGYnRtKnMaBqB3VdbwEE2vTYHxZMbnCD2ReSt5AqezabkXkcFDKtSRuBuMk",
  "key12": "3gyP7MQtp6Q8zCXAm6SkqEDVTEmMjjwZKeuvHVpFvdGY56R7LpWwtvimq6b78uQVAye7M4p4rEEhEev6uJnXNPfB",
  "key13": "5ktAXu7GPiSxx9iwhLhgJsiCF3ukad2q2yVFpTqpTFfmFeTWNNr8PJrKzuhB8JqKKF68SviNsXKap9NshpAAaQSs",
  "key14": "5JPi5dvDQUhWgU9yDW9K8f11xGKybvaVW2UAEtY8yRYAAUY34ix8M4NUKD2G1Jn299SoQEG8BCHQEQCipUUV3uoy",
  "key15": "5qxdA5j9dvmoHyN1JYh4xk2i2tTEqh1TkBarTxDktSTP7DHVQun4F17J24msv7M3BEfjmmtutUZr1ycuF177XT8Z",
  "key16": "22FkEhFcZUVfFEcJyCgfc29rB855LtJ8CMhv1Y8esFA6kMyjcQ1xYdnKepC86X12YWa6s9awmNGpkmm2hZ5m3pGZ",
  "key17": "5AJTmzFV82fFfNUbwJsWRpRJGJdcaD4D3nULSEvfa3GrnmBmcg6gHUwtUHzdBUgqKNVC677RGQiosxxgHdP3MAPy",
  "key18": "3xBwQ4UmjLrKoYU3wWUvwxceyi678ZiKH9e5tfXY7uBd6w3QRXnFkiHXfdGToZCYgidRkwQkG2Y7PqfxckWm8VsE",
  "key19": "4yicw9j1pcQt1A1HhiLDmc4jXXgZAoyNNeB3EUoJAeRdt5eNquFzv6BKRT3P7EN7tp4Cj1NTQgfPAPcWjkHT3wgq",
  "key20": "4yjDcrDzdTH3mHUojRG84FWvZs511P4u3gqs8tjPMQ8NL5mWjUpujj2gR3HhgtWRMVjc1YGQTtkWagPaEdPpjWff",
  "key21": "5iNg5vrDyPyeA1cD7RHobTcCU1b2VFeJktczpW7kkimPuRSYJ9L8XUgkCb5gsi2XDLtjtfB9iYv9CDbnyMKqnTvA",
  "key22": "2io5haHh2fPqw4EjRTUYwj5vKi9bsvvw85Sty6L7Qw9oQwfeESxB6GSKKQ1v7oKm7GzC68jRzWmLkeHcbpgWW9Hk",
  "key23": "4TwNn6mSc7dL7pAbXYpiyb1xcJGczqvZtpKboDWJ7wn326G8GVudcHo6CP3Sz4wtQG8eNh6wbmg95ybAagbxW5dZ",
  "key24": "361f5c3WX8oNnJPtVsYKienJDXcfqXxNLN9GumVnawDrgsuykuhXoU7kmNeTMwxCPbsdr1CsiwgCoiFH2h58eqfa",
  "key25": "GbsvW1tyMBwcHqZVo85xZDcRJnKw4znKLHghYDntt7eCFnHt4rf9vueCNentgbTXEdiYLQbjxPiwDpqpNxpHab1",
  "key26": "4dftgLUjXsteEgvKxfTaToZeRiQTF7qcbnKKw4dKCHgALQ4MumNbmGRZHiZsDjEbVce8AqwmfeqFFqGDzkzrF7ng",
  "key27": "4mUkQxDg6choeA6xeVzRVf1phvMKeBDFdfi9PRVkQrAivjeJ3bwirbAgUaZQtRCrDTxuyVaHzPoBCkZ1XGPGH5dD",
  "key28": "SUSDrei4oVvZV6tq5WALRr7xY8PQd9Azz7nhGXWjB6NFnh67ZZPJApiVf6v3rk5E9hmRaV1oaXnCKA8JnBujmbM",
  "key29": "2RKwbyThZNGdejZQ6jRUf4WfLdXU4oBjET1ohftiX3nkACQz23yPJKTa9mLpwFoYQDYVhZFaYHgeBhuB3hJRzwoe",
  "key30": "2YknzfFurhJCrm8CPivC7TVNvxkNwbYMZrwAaeBt5xD5tsKMB59oKMmEDKB8zvvjkRdby959DPBK13Zt76LKeDvN"
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
