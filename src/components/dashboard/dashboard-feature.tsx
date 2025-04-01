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
    "k2CModz1VWqSESSLRnByCSqsDfLsA2uguQoyNQSfi3QSdyYLt1FQB8iRi7iYZFjj9WtWhYcSaH9HKa9e8bmeHGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xaEuvNmh8cwo9j9usJt9Mw86JxFxCzimkjBa4BTC2VC2agrzBDn9gMiYE4eU89WuLXbbvwVP923DK36JyWBeSNn",
  "key1": "4qy2WXzf3J577GT9DcedVGXvSvLXTJMmBrpKUsYg3qc6wEfGZFzso4To2UT6hdbfvXNn3Ds6Z3rbMGK3AbhdxAXD",
  "key2": "3ctrDLktYRv5znCQDCTTztghBkwRXN8xdDHMn1exFVb5Eqv9WzGEzFMojNiehS9PV3MB9sMg5q9YntSASp1y3wKy",
  "key3": "5diHUkTL2A7PH1Hwad6Jo62K7S6aDCnQjLhhxezSQfCHE7KZRsw8T86cr4GRpw9f2hXS3gnftbsjCy7EB2UJVe76",
  "key4": "guffe7FbDMF3QXdBEdg2SNkHMVysy9dapekLnPuCkuv4eA1XYbCKMADgUf5NYvVu11eqkBBHwTdbBvjvhX5uxeN",
  "key5": "3jyB5njvsTQJZm4MdfGTJExxRyZCKPFkMYAERA6BWKrjf8NHGcdkV9vAa7FebvUGHaMtuu1StycWhtLZHYgWS7nS",
  "key6": "vkGbMjAaKnaKDnhuvJgd7By8LMgaW7JdyB2TMAMDqb4Db42EfohQ4HHi2ZxHVp1wa9XhctkxGxHnv9Q7aqwB74h",
  "key7": "3xLeR4qCQx9tBn9FVBRG9r4Ph3uX8AqrFLpx6zKELQf9ndiY9nWn9iuax4JKjHvNcVMxHHmQTo5KreUVeDPpcTBE",
  "key8": "4RB2Ge1yQYcHKeBhio3WCjvEjzuXr9zfXFcfB7d8Ykwi4Pj9AS8Nc4jKjQhs2K2VyDYgtayxJavX5cuEac57y1KC",
  "key9": "38zcAMv9FwA4DZgttqn8pJXFiELbiJbwVGivDXntrS6oAZzSMJVcBbcqCMyianwibMyJL1SeaiNp9YRWCGsvu2hG",
  "key10": "5fg3hbTw1pAr9ERTaTsgNFKjWMnm1aqKq5u2iK4CDCGGpUQnVM9oHNn1sp8fcA3xkjugmM4yazX36cwpUXy1WzVD",
  "key11": "3uEiyrvvhXWYEYzpd2KfwNjpoPXGMecXwtsVX7Cf3NLZ2o9LfVj5kfhh9UZ5wvQm79D8EcGLxC3k2wA9kndjKniq",
  "key12": "xAQKdsVpx9XXTYExnieMKVLTgQftxM9SzgNLWYMYf191u948V4MS9ic2TqDdcykuQP2F1tpub25M9DzN9JrWcUp",
  "key13": "2QbR69gQnKNj27up8R9w5HPVJozW5GVd7GtbE8T5H6sSYoyUh2h1VFuuQKxhVwt6vDfBhRGzHW8YfbQzVXbJqnwj",
  "key14": "4k9BwEd2rm2oLeMp1nPZbeMy92WG4GW1BvFJZtrUXEiRnQetbG1m8UEfuEGfZ3waQa6VuVALU4qiCcxrzf4MJB5N",
  "key15": "53QZ4TD1eFxP1JczTscTNNfo3x5dtAwMaBHWF7j29F3sLoXCPaWg4MnGPRNUZEcdQrMTfiR1Z6dQGd3W7wYK28bA",
  "key16": "4ke6EUN3mhstZSAaEV1yaPx7iBuevW1My8FsaiWnCMQSs3dt1q7Ex6G5mDqqJH3Ej953nGWRv7QZeWRxDKNqGeLY",
  "key17": "5WaH9FiocdSdDc6Nb7f2h936Pg8XUfVzEZ1yoK43C6Q1DWTieG4Jo4o4dentTwtXEXpPLi7DVNEbRSCfXyuChWL",
  "key18": "5WszBE9qTJpWfqB53c79yYy6mjYjVaWM88wRA42cS471EABhRq38a77tFXHXpoQZqss8RZaadSd6YbAK9g5W95ov",
  "key19": "5kHG7QogwPYfx3p8HhotM2onghZ9XUWSSy3JFKVyvtV9jtDyr1kYCtKNLYdaQGeK4o2dGUWgXk6y8WQQFPd6c8pW",
  "key20": "5vh8qyuhoKmZNBXVp4VnycMJeoqFv2sCCRsZTtqGsTzxniM2n8PVEajDkvXHo3hQnRUCQrRVADtPKPh9tz7ozFEX",
  "key21": "PKukDP7w3aeEJossjHoeBpFLQZKJBqdPNuVzYwv41w8XkJQL2GDYwRdr78Ysf8wq8gHgH63Ub2Fmqq487SFwW48",
  "key22": "3kybMHVJeoaovUNBnEWCW2CMMCdazi9MJJYeeNbxW6fbv7FdZQ485NtQXyopui9kY9m8HnTVXoxUvqdg5nvmCRPf",
  "key23": "5Hw3xoHut1BmMgpyvneuCf1i9zxLYEpbEasaHfuQkMTb4paepVhZuYegGmBcTxkG3LGjDRcJNPx24S6rdoX3ySnT",
  "key24": "5PKaW9ckvjQP8aH36U3YBGNuFj3NK6Y3LKqBp9HQWbR75biF2UiLZiYjXvwDZbG2eDBHQsuSCNTXktwoMkJMrpuA",
  "key25": "3FTAcEMkPwEdbR64p3KVdcNKqeE5quyKkq97pd9opzhPB6pTwwVwbFN3411FREPsYj4Cbbc3xfYtNRnVdX19Lt99",
  "key26": "4xDkK3xPh9dkG9AMv1kKD6QwRcgA1YbhBACdVmLEa12pJLbgYLPbZVqYsm2ygZoxukUK8xT4hbBtZX6H6xW4Adve",
  "key27": "Yx6jsk4PTdx948dQ3SQfsHU7rTYNVpon1S59kd1d8UjkK2mPmZX1CzUD8KZAr6s3VEXDimoEfDhyENobe5nEvvy",
  "key28": "Y9E4b7CUMLZsraAzBMQ2pWDcWQaud6LfRsmdfZP2nGJ7LHkbtdKG9LW9GN8vmz1r5auwzqS9x4hJo4tqQVV26MZ"
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
