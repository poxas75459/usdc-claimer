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
    "4ffCQ4oWywp56LAUvBqfAJmsQc1etjzhbgLLHJ27SRPknPQagQG8Cf3LrkNvBH37wbJP9LEvcPEaJ79sJMmcYaq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QnXUJUX9EvySCB5Uzgc4mFwGzVaxbDSwqLSZdckt4wFuaCFg2hMXHQyGpk7ETUucfPPcuyWXMXuzL5SDhQvuv1X",
  "key1": "4YLJ3onKSFqEVaFCbY3Akft3ok7RkMW458rz58LPuHn7z1upJVSSxcxJCKRcC7gAATvCLevQFYL5MNY2jewH6xT9",
  "key2": "3gbUBVyNj3ozjmcnFE8gUNwycahTeXhjfyzjweUxbaKyMEiQE7hyrfQfNkSnHZmDi9vGxpFwu8iBevUdVM7rn6wt",
  "key3": "44SgzhaeBCNoQJc1oiYvcNST9bUN6sGE6HxrTU1mL5uY7Dcha7ZFK8ZW1FjmSREBWzQYduAj98Wnw2jLjEdEErh5",
  "key4": "2NA5ygjAYhcuUgvsrJkNh97PjuB2G2cFpVgo4f4dGqGekMGU3uF8SiZ8YynmYQXnH12zTDXJqMTzfhwgCrPzJf4C",
  "key5": "nKzLvAdTX7j5Cgd6jMdLF6D49FqA514KjoXk9TREQycVHEAkaGSqMufYPBJZHX8EohT9H5h8B98xRjoYgCV6NVf",
  "key6": "3jbHc4FTPf69vXo9PTd68HWUEtsYDTi1Ny9nxPUDW6YxsNMEZD1fWQFZFJvYS8QXimpe6CX91RfSknCG4CAYG4d",
  "key7": "jXN8mxeZCijQVckYNg4p5dVaGe91DWtCVfXgN6cXpBdy7gsLqk12k1s9QzQ9ibwkCVPhWJuA7z1XAMKRdWd12Xp",
  "key8": "3ngxEwALAqMZozWRnpfEzEKur2x1vUCCuGtF4yCb2g8xE9DfPYoKMQ9oT6vMuxdN4krWywpeYKcRMwnv3FqTsQh4",
  "key9": "3hZp93CyWRYP1HEzwP6Up8sgJvwkBo5qB8dgi6zEwBMxAJGTy2MzNPXnPXpVnHgv9PojJH2jrqhZc5Fhadmux379",
  "key10": "5d6GF7b4J9JH2Jb4CPE7s1dhfiLemfoPz3w2XLYbP7jRCRKudyHF5frvLdzLKqPQmtNshRNLhfx94RZ4ZapDVBvQ",
  "key11": "3HV5skaPscvRJtpTs442XadndNdBP5k5npeVXRSWgwZWUhp1TTsPaqPHU4Yv6gj9m6ajSVysJjN3C8p9EtTNPbeC",
  "key12": "5LV4cY77SF9x5HoB9MRNcZLBZgnH5EnmvrnG5PcKJgg7Jvnrn7yMAtBKtkVWuAXTphJjJqQRK4wb11pFufKFt6jC",
  "key13": "412YjitaC2qX63SE39Rs8F3h2q3mt3hsAXG8YE5d6HWKVwHUHe6FCrfZYCz1k8o6b4TxUyh8Mq4z6aveuYdhjqbt",
  "key14": "5FN9UTYN2Gx7HksyJHMraNpL9StKJqeHgBHtUs5h7fToh6ADdjpnwMTiSRK9P4MJ5bu3snKDgLkezrGDX5KSSnHU",
  "key15": "4BqjdCrqXjewGVq8gy8JaEC17tvdYJ7Gbu6aXyDqFP1ijMRFeuNuLMFSr7VNuGQMHQ6HEBGfedUPYyjxAM8DWfVW",
  "key16": "4gHoFZfXsvbSMAPuUbj5YjevPabpVD8SckmLfeJkAndhnTkCdtb8pT5NLGNsnsbkyzm33P4fye5ptg6HgBU52nSG",
  "key17": "4A5UjsRMDjw1rcG3Kj3pSxfCBCeBGjcQf37Da5dAyFXRKWfypjr3CRkLZD42TPNc8YKBW7sqp8HFnDnFbdMcaZBr",
  "key18": "2nMEvBqEkDL8Gyvch5SW6zt1VjnSVRyDqRFwV1MfziSS25XqCzGCxpBveLJFBAWHb8DdaB8EqZhLW4vo6bjAa9FX",
  "key19": "2jg2gq5j6fASwQMaNekvCqgaaje6Nu7exxrhuWdvyDeivLhFYatr7ahBPiKDEQbiyp6G5T4dZLGyME32uwqwmFFt",
  "key20": "pxyEcCWWuMxMD89WpuhaC4X3qYkpwBuSViZpyFazukSVNKtW3miYr5UDMqCJq8PGb6EdVgvLJumsR7xrYetNXqS",
  "key21": "2so1vmfzYnRYqF4d1wqexCQrbVnpeqVK8mM4DaVqerqi4dTqtAE1bXg1hbotVsBkSi8pDucN6H7roCAdgJj98KAA",
  "key22": "5X97apBgiCrzV54gm7Nh9qFsNJS2v8kpfqXXg1b9uDA2AUsmjb5DubeuCYM7igb1Z3WVovKQpFHATfWnDezG99CE",
  "key23": "2wQJb4dsV3TcJhjDpH7waydGxz6cGso9i1f4XSFMnLmK3zK4jPPQBE7DEDRJLPZaTXuciqox672qy3vpqb1Z7u82",
  "key24": "5UZCKt2gMjU5QQ1gxG9BCMhLoEqXvZMdvpZvJb9WjyYfSyS54xfvqsy5AAB17WYid7D9u9DoiPMRYLv5WqSbsoJ9",
  "key25": "52H2WuTyGfF1od6eK6R76DBSpbg9F64v8hRTLFM5NMBfZMiFMT5By27sERTaHtdVrgjc5hZgsbbKSfiiyEg4hjNy",
  "key26": "4Athafh4xanzYLZTmxncvfa6M9KVn1WfNmLwciQRSYdFLyMF1MwTc6XdGdWtUjofWCUcG1oBmpQYNndD76JUFCyN",
  "key27": "2Yr8Bmjuj4L9SmcMyhbCVAjgFyjxLaWWZ25Avt2B4E7ZwqULVDaZNjX3RdeHidnwYaNBD13mnygzWYQdYvSqpaUd",
  "key28": "5DmabHjuScRVT6u5cTmjP7TA3AsaypQkuhdqiAm8hgXDcvRQ96PCzNMuUnW7KbbG26MCSTXw2ykgV1hz54xY1Kut",
  "key29": "4rZa9ZoayDRii4isK4UwWSTqCYp9bByp9xYt8pAxzZroa45uFoMNgAaSo98L8J6zWJcEjL3HbW2Yb6fEs4g2YmmN",
  "key30": "44gsELymYh1BUyBYD71CAKkYJ3ny1C9hjXqowXwYFZuf3HBVJD9aDXr727gaQMnebaB42dj3hpiURB4HdCkQJTSC",
  "key31": "2s4BpDxyH48s2ZrrQadMt25jjAEeRa7hBSnJy2cwNBwfqzJoinSGSaBQ3o3AinLjRBVLQMnhJtHhKtUXcW4yR6NU"
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
