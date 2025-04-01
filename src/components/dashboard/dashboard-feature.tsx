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
    "4maVUxyQieDaEEJrFRMnUHBBpe6Wu9wm1ZAQ4oiNW8XUkoRtJ7bXTgDy41mtYZcq4gd7eeEtDS13Cp4ptScug553"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LzP5CMh5VSsXVReAu8ZRG7EWjUzzb8iEMvEegtSp2FBna7MQLpDHYj9UoqDXd9eyxyTW2BLgHAgY8cSi6zLjUom",
  "key1": "2uXrKK5w32U8hdtws2yRUh6v4ugwoahQ7z4ZNRrU9tWr2FqMx5AEQ5cbpSY62dXc4mLwca3SGDJSMumnsXMcx99v",
  "key2": "51Fx1MUvS9aroxfEEm9Pu9x81fXWZAhZVKsFTNPDyrEq6cXdazc987o7YnYWJTMKzcpPTzv5Fr9QrXJzz3NkPMDs",
  "key3": "9EJzpZRWLg9MFLokVxSdCnVsuctCNfM7CEXY51kxpvzPCM9RqfaVj51HgUq8x7RzMXvRZXe8DvuzyuiyRcChX9t",
  "key4": "3Gwbgz3BPSMwD6XwBUoec8BW3fCLJRjwpgDaVjds1Bm2d6FA61YMQcRqz12xsd225uUjsw1uv9BFKJxNEcohJekU",
  "key5": "5ptQNwofJjKcjpkVocdnNZEkwmQy5xBKTzpfPM3BB7t7fxxxUHsLUL636qY2kBAjesRcka9xGNNwPGknuYpjzd2N",
  "key6": "5tNSMFK478b6kb8aDfaZ7aJTHVviWh41s51FB9jSQ8MVTAxd1Zdh4in9wUqKLf2BZ3CRVcTRCkC2tpe47DmsxTtc",
  "key7": "zTAqMHDnRCrorC5eY95JMUfhi2rD4X35bPMAyBPTBtQUfaCgKpkvs6Pb83cdySZE8d6n5aHD8jPMfTMftpWkP2b",
  "key8": "4KWu8hkiCGmUtZHXy6eRaV5QDY4ghiWoHPcMv2fW3Z7FSrfsUygK8fjkYiYKS2LNgHusfguRx9iRmx1h1SoKnYxu",
  "key9": "2socvCFR4prPmJQj3zry7x8ykNZxYceZdWhn5KLAf9zR5zZEPbNLYTzwuvaz6jiSnJcvAW7BmjmfFP5NvSjYjHCJ",
  "key10": "3EX1XbjLssWktxB3aJQARLvfJFFYf7HHUY1Z6qWQMTjfpE2aFS9uWqd73sHVKK4YFvVvDRWy64XtT9C7ntiV2rjo",
  "key11": "3ggznRMv9myviw6o2atmfGZT74peTjbg86BgfPGnpUWa4MfjJjG1iXfKa2ixi6qn8YeF4EvjdXaAN8fd2w6GBLNr",
  "key12": "xsj5HFNUZ3ytcYDZrd2EgrYz6KKB2m9kmpjejJPLYDLRMF7vDPFxjiDZmrpbekB6GBha7s7JkeNvb9pahiqkeqv",
  "key13": "2MWiWFNXnYgKt69NXimWq8GfXjxgjDt3qadioe8oiuMDgGaenUcfkVckik14A3JgCpoGHkQv8BnX5NwrH96mFLze",
  "key14": "q3aqJjzvDnpbAn8Diz1PZ7N1Uo4VGQypc5CW6NxwYHpU3uNnHJVPEx8ShAvADknAFPxHEn151nWPgYLtS3UmRka",
  "key15": "5CeV7au4gwtKjCAHvJamKaky2ADtkeddirRqPjuLqPVUhwqd5vLCRPUq7JiEnyh11MnQeWoppLqTHsia6CPWU1Wv",
  "key16": "4j9RSJkauzDKT62xUZeiuDyojBfKUTfmC4ifwVZqP4aFoxgAqkx8Bj4DwfoDBu4JNo4LWoypPk94fWs7jQ7gykXW",
  "key17": "4guRmLGpugA7pYczcpc5VKxs4UqMzAoEDtfFVoVzBRrWJupXYBkQTZFZHu1MY4SrcQDgUCqHPBjTC6Ad9n8ZmJMx",
  "key18": "2wKopQvUoVT57zyGyWdu9aXF7hGMLXcMp24DtswWprqDtGgLZ5j4NGT3SULmopyyGMtDWffHyrNZrPbDjaA13Dtk",
  "key19": "3abq9QPfYS2q6oWrGEyzeheJBD699J69TSTGbyJVEmuM7q3YNg7h8rCUAzi1TqkfpbxaSHwiPMdnyo5DW9WYV3Nw",
  "key20": "5XiACv453q5JEimZjnFh4hJfZzYRut9iGuSE3y27vB4NT9Rv6Ag2GxNiaqEqGjtu46GT4L3cjdu474HeJKpW9yP",
  "key21": "3qQKtvGnyJ9RFTA2qnmZP4QkyvBqZ4yiRSfjK5piR9bydw8cMhht3RfX79EwUEakTtHJ3YiMP8ca81kmSQZUxhWu",
  "key22": "3AkGNsFL1Zz7R6dy3Uitu31nX3YrkQRN5ydNw6tuP1498kGC4w5DPD3RaogxXPGNhFLQ2ncR92z9qyFt7jcNWHG2",
  "key23": "4A6ifNSoHMiz1PF2WuKd7nh9fghi3iphdTXXEd43FpPgG3nwbeWXBRSuqoJacLWKDqQSMSF5DYrG3k8j23hYKpLJ",
  "key24": "3KdwJxQRKEhsCeUTovL4QP44kVxyRgXvfQzsq6YThhMS6ahkEmjBqhnohEJ7WcUap9GYCUSWSmajvKJt4519BAVM",
  "key25": "2VkiaNt1Redt4XJTFkRNDghoQc8ua6dML6khNYX2ReXNrkx4tbH9jfPAmk7KHRcdBCAbm7MbBPcSpnQKVKSx9PsD",
  "key26": "27CzQKoHjr9rqYfjsX1ujFZgwnn2KuxvPfZei94GfrM45eXQWb91aEwDDn3Za6iEJVqJEzJvkMjyDny62DU26QMp",
  "key27": "4P89Sn3ip7ErqjEZo2YaENqdKTnTkyaQGqs3G8yipiMJ7JVe8xKxS6nRVBuLrZWqPfHEehgYeUVJjH3YnNjxLF1X"
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
