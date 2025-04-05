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
    "oWdkTDUQRokJSoC9wM7zsHQyibQN1BWzTfB46KouNZyUC2fpGnrgKcw4QZpcBXyn47hWMEmkkUUJQZ7uhf14e6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pvX6HPLLyCSdDF9xybgkBQjxmoAGB5bpiCXe3HaSEeAi3uJnkpzF1WyZoNo9WFD1B5aNt4pvirxTP2fdErobdY7",
  "key1": "43HkkU9NvACPY4hRmP1Q5QB6CTtMsdUWujag8hVLgE7ayHydXRwWU3eqMLBkp3zuoQVynnNj3RNnNb9Lf6gntF2P",
  "key2": "4tfVK5bR76QDGpywAGp8KjCmt7aRxt1Y39rJNNQHCXdewSsLA91hHKNqk66QPM8vAoAwMCb5ZB44gNiRtESpXcmP",
  "key3": "3woGwD7teisrDxFzhoyEYic327mrjEZquFCpkN7r9MjfLjg4rCtXWECZyBEFe9u8rxZMp3tHJaH8JtLx45fFXFcB",
  "key4": "5FkVuo7AVgapVTPqynikUGnkvBeuUYSL48rVEg6PFR2h8nwA2FSLeQage16uzgzbm6Yrrd9q1p7bhju6dmsTgLLH",
  "key5": "67QMjMYRZQ8peEU6uGoRiw89bfXB5FgZKRgjwufBgMUAc5PyYWHJR8boWvfhjLpquiABRYJMRrARSJRm6eYKnmGJ",
  "key6": "5j2KFFSuo3emkZoEdjv4BeA7hWF1UEXoJcEUH6ZsqZCD4dVHsHVMtJWzYSDnjSDz6PMEFBheLBYgKommyDDTcmxo",
  "key7": "LCcNQfx5pSrUNiTHfdMfxxPcMrpv2qJPsJbUum5BAC4HaU7DtZ4K4sktTCoGevgu1HQN9mssrbx5FrCdbwN1v5q",
  "key8": "5KfzCGnjqDBBkMxfoQzvFM6kKJiR4oszhqJoY6asgvauThZtucK29qAHa5o3Y2oWtFvBgGJu97gyegKhj5RvPNs5",
  "key9": "2rZXzsTcSkaBsoKys5x2WsjQCwHzLgjUN8ADkxQ5eY6FUaQz2u7CCmPnYMGau358TCkdtxNZ97rWhVuxG3MZd2FA",
  "key10": "hKcv46rJnXiuNNYSDVWKZ1DbMmdaKJMt2JfK6bbhRCc5Rd6x26B8xADqQat2wFbahpgjpDN7pvWxyrVpRcYduPh",
  "key11": "5iguaB4HBAwYtiaGtzdYXzNuTcq8dynyf8C5WfX9FTQU3tQcA7nT4czRYR3S9otbJTQrsTrZRdzFhVNk5gTd6vLT",
  "key12": "46bTa5nerEkG9kiNG74A9Wid4W4HahQ4gcLKc5W2fjtsjSKzphjHVtwRqyUwjnQ4aFg1Re7ivKZihLzTbWF2446r",
  "key13": "7KFxNWibmmDKNPfQT59t3WHmPw3PkrFtRpxgovRzPgSnyU52LmDBkfUGjJnscHriPDyaFwtxhvF8Ap9EjapKHsF",
  "key14": "5DHzLpo8JoRi1wqr3eBCPA8BWsbx6qh9hBpHCaaHAhs2kJj9uWG4MpvwJPR7t74sAy6LsuoQxDgVHrg7nMarAENR",
  "key15": "26eTdPdUxWkJN4H2LhgtGrr5CKhRWth1sLncYc11BhoK6F6eRAnfdTpYTDMcZfpjGRKZErV6moPgs2XWbQk3HYUh",
  "key16": "5X9T4c6umHvBwDRnWcBZ529V4vsZcfWGDhBe1S5bdc2k7wF1vXApNPLeMRXkNmVtJeSaCNvFYfkdGLAQBUZYopxw",
  "key17": "4L2W9dweCCh1VWSKa5DyJLaAsACJWPaUkrsaeD1X6MHZArbbdQWMRGb9VgkDEiUDjLuZqWsDMPr7yaFJq9aF71sr",
  "key18": "45J33vYmE6H15rpYZDu76RhKeGKnuXhSHEShLu7hXUDs3V5QTjfiyqTgwKHVnQ2aTnmpezdQRE8pxRgG4wmw5JAo",
  "key19": "34atRwVJ9Ympwo6uinHo6EUNPhzNBSZMM7zy1Z79Z691BbTJbaCoVQQcE51csFhsDiXTDPki31mFJc1PMVrXozrC",
  "key20": "psgh7UNJhJLqmt4icYPpfNbgEBV2FntkmZCeJL92YyPvd19tLh47mamNKJ1MsPxXKpiZ7PhP4k3RBxxaF5pPRYA",
  "key21": "4kdj96NjDVoR1zpDLof6UDuYatfjJcYV3esxnevzA9WpG6wWLTqE6kykpdAJaB9HXW51KWWp25nsMMh1uefE8h3u",
  "key22": "4EJabNyerHSMHdEZP4Uyys9eYnyqR5PT4ANKF7MyLqX5t4F9NwyW3zTN9T3v6i4WiELfzNT2uPXpmp6vUPkQNPnM",
  "key23": "5Ha3NVuLmiNxxtJhaceaLWKQ8j9HX6DUUXjxt58GgLCyep7PjMtFjigQi9YJCjHUzgBzitzh43T5vkDQyhtcpzR2",
  "key24": "5UqbDr82ERK45hiKZU1UhykR6wT3kUG1UBrRr93TtmZhfUWnBWLwm9ujbAXTx2RHXcvZtME2vnwvT11QoQeixGWm",
  "key25": "bxZmpMN7CZecdpVL7QLFNiMyqbQ7xkHTRCiiBhGC6PzsEDcJKh8T6eHDw5nixYCDz56vfJYZ7medfwo3HNYLh1m",
  "key26": "2Xun9CZ9b8Zqw1Jg8DzFpYFvmDQg2c4sHg9PNsNGHSzW72iRkhGLUjpnCG3vKcySUFw4VoybMd6DwBWAVw7Lmu7R",
  "key27": "3VQmL7i3gCzqYkKBEEu9cxVFAoFob9WWnUW5tNGggA6brrYPbo48LUFfe5Na5GbwhUrQpFnXJLXPzCmoL2J1PzS6",
  "key28": "4jUgcQGDuMoojfGiEs4mk9zxGc9tVzgLQ4VQgfRk5hEan3VcvdjwyBptz8qW3yPmKmejr5dftYM6uwLBQq1gtGjK",
  "key29": "5wiXUnj6uYaMmJMNvDXWG8KxiDXQn7qHnSjdhkndaKa5nj47sRtpBWVvbhcyWrskb7oG1fkyVuYghrnDwnYgQZRL",
  "key30": "3u4PWrkZFMXMQ1ZtiLzCNY8jqoorVSys7kcRvn7kE34ryqugcRrbqsLXVmiF8LMGh2crdc7L5Tv35imHnAdT7WpC",
  "key31": "5kAUYBRmuPWLSUV2SknmYYv3n6EBWTuhvn4YCSoxtz76zauhzuNdYwR9Q6sJriwoFpSL5toDEjBcZd6QfVbxaRm4",
  "key32": "3sCNXh1TidqvDm3Yav4dfnGdCHB1gnzWVJbEvDZ52EHAgmBsWWgW9Ra5bZqYxtof1E2mdyNjFxSXnpNDe6BQ6jwD",
  "key33": "2GstBnsX71vS6cSKUtcwcnPuMtbjipREcfikxpYgtyuM6VN48KUipqVx7afd2YcR7yVQM5Fj6NcZ1KV9vq9yaz12",
  "key34": "2ZsVC3LQS83GDzJqnfSb7ek3BSpoTJZEUXbVbNkX9vzJJ55k7i3qhMJHmdKqd6WDsuVu3Y8UDK6cJc5qHrN9tZpD",
  "key35": "4SVLYJfaakb97dfUSK8icTr6NT8skr5f8mYqSw7yRgZWwhasffouY9HPWMStdskRRYjCaJJ5pxwyKYe4JKQVvYNR",
  "key36": "3HkBtDafCupFizYVa6RQXEgYHMStnQNirZesR2FHEgh2reh32HN7Y8tbydrphrDZdfTdA8czis1iXnN6PCadGAiY",
  "key37": "FUHLNiFptHTxPyakXSTo6nqcLAhwtPFhCe3wAiGVqTgXyZgiUJokYyY45n2TQmjafPoUvggR7hwCkMtB29jJ6as",
  "key38": "2vTYbyEAkQm2APnbpgEZym6QvVSuaM4xrzuR3ZJRpeqtPmttbVK9F5bJUEHV5XN7YzFejthTkXuCbN2QaB5JkqyU",
  "key39": "rqLL3X6EaNUJAv9bTJVjJ6oXjYRTyLjrrWNpm4xAoSQ6N2eKEYFhQcVMMj237oqGv61cCQtBsoj4hEimkjzCAtD",
  "key40": "eAFvSmq18Z5NHJXNirqnkjXHezJQvB2gppiX4e4z2m8EdApLyzxo7PrJ4e6wSn3sdyFKjobSwG3bZ7veATcukDW",
  "key41": "6SzBnQobpVZcT8LebZA8BvL1diELBaRgMD5KWVPrqVCEdavbMoiVcc6yUtQemroU9uAap9fnGEYNx724KA5nwny"
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
