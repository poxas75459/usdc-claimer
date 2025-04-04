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
    "4JhG2Mjw68yFLSh3dD66CiNb6gUgWByXcK8Wsz581bmVzN42nYVMWk36WzQ19tWUecm1FqYY7iNhxcLJB4Y8aKD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NgqZsA2Lk7xmeZUWuW1ZCfq8pUQXawxtgKgn3mJdvsEr6kZfxJ92Vz52YMdsZF7S1CUYSTrthHizhVRYcxQrTfc",
  "key1": "4qYVDv6xycCwccNU9He5cJbeRYhuMYoHNneiS3pUWSbvLG42RK8Uep3xb1kVWmLjB8QU8YTSAvZ4w81qhZbNNXWk",
  "key2": "4GSuun7jDa6DceGrDBWKaH3BHzmC2pSBVS8BiX12TgDiAz9neH18m1ZMKnrqwzPCMeMJPw7ksoztJiAKHJZpTfAr",
  "key3": "4zRG9bNXXp3oxC5brNofWb9sZaTaVTk8pMqeF4q4AVBFEhkLjQmJEmUZTJYaDV2WHZWRtNNakNZJ3nKtQXpn2yDh",
  "key4": "3CDFp8RUT15JYpVtbqtxGz6FYTywv7cFdbjze8hzk8fZDbYKWaU5kt6w6WkF79HyTEy4Q7usLgKyaMhzbv5uneTw",
  "key5": "LvwdCj7sY6WeYZg9BbXi31Y5YAWA93GdyuNXNaRiTgRScDoVBgT97sJYsSCx5AFvEPmSTp7hyR6uappfKMdERCv",
  "key6": "4cJPaLtC3Pw1qNc355ue3jA9WqDUwPHVqfKXooWKjSbNuFf5mQVL8dcWFLq65eB4hV1gFU5MWfqRmALiborm19WZ",
  "key7": "56wViz9vXkZyGgMc3o6paqcty6ei1AQ4WKLRxn6He5LqVrYbEmvHjkHyJNxKcZLDvw1XpSXNvCaQ74Q1w8Yy7H6m",
  "key8": "LJFbhoTTruCgzc1qDz2fD7oDAEXXJnhWwEP78xYForQD8K73E1biu53bThHJ62Uqt6tayirYpyB6wpfCTPrkjVX",
  "key9": "8ZG6MhTBr3YL3px8rGZqvJt8rVmuvbUJaU6YzP7P6ZsiZzrhNToT4u4UUcuXQMtVLVeskYRwQQptunesuR275qd",
  "key10": "2Zjm1wgzSuaLfepwTq6QXAhENk4z72guT7c963MoK6xUe1sxhhWmwXRv4zU7UQ1mc3enECUrAUgaiDErob2bL9tg",
  "key11": "4czc3LL2u1rYxmN9yUFD7CUc4NrVcc81XEjFkkxWWXkRAauXQVKCaxqR5Se9si3QmwhSkGBF3yUH4jHMNN7eSimu",
  "key12": "57VK3r7PW9QtnnNLminvs93mhV9BL5nH3moJ544hsCGiyk7rzQyt9hkxHjQabYG6hn4VzUxNPXNgrQjgfcq4ySfD",
  "key13": "5rgcxdiihQMt5fXwiStYBU23dRfnmPtuTY5DmCszxQYbQCbEN8Vp8RRJxaakbrwAZazSmojcKzQgh6MsEjG3BcCx",
  "key14": "4Z9dDu8i1ETvZg8LrU16tbXbu9cpi7fhsarv9EMjygtfiP1jPRhTmaDmT5S1yH5zxdCzV4eZjAWFKWhNWeE1z9Vp",
  "key15": "4UNu3H7T4NaSihejpqPwAUqKz1whvXNH1pNFa5JkTNEZTLFJssT4PHgtghnXgnma9jKepZ886wJhstA7rJZHqQ3e",
  "key16": "4QGe7dqWXkR6ddWxfTvKAQSZLWmZxC38HgfUvCWBo1A2D33YCBHuLCisXvZCkJNuQVkSi13EskY9mevFUQYyiqct",
  "key17": "5451t8kgkzN9dbjEYUxEGSgg5z19fxuwResaGFLkR4xrpTX4ey8RveVzoCef1oD1cSaDMQsfnZ8PdHj3V6EgFHGL",
  "key18": "np8JiioY24UVEFws2tjRHp5nWbrAWrr43sEDv7WEMDPoxdPCiSsfMChhQgp1bpmTeqbnMCpSssiJYhp5u2CLWUr",
  "key19": "4pKq9F2Z6yNisRZn6n4tPjfhGjSfCrHXR6tECBb9AG2FRvhG6TdS3YUeyxDvBKPbPJkJ5ywMrcrDxYihSAHJPiFx",
  "key20": "43Quw3DfTZsZRyrgxzTXNjLsT3SPcR6PYHNumx9cBCvnrKsfKkdHvtb1i2kHdKrMigKqium3q8nx5qBPC9v6213X",
  "key21": "5KrEsLxAiuJJvk51dC8AkRNEzzoXcnCoeuRjL8fGUiNnLi7HquGT7wi3wx9giXW6ZyK9Xtf5EbenbtSVFJr5wsMG",
  "key22": "45V5diLwYgAPfJgidKC87CqAtbYVvUcxYAQ4uWX3qKN2MRNvL91zjY3jBYWSKmxxvxDaYX87EM1BdfmREU6K5mdG",
  "key23": "4ckXWkYYBxbK1je2B9ApUqgNEdzLNbpiNzNtR8MHNShDwWQHiKxtG8PNXdy3nMr3obafxxxo8mtwbSPd27AMvtck",
  "key24": "2d8d4nW6ZGSkvFcvZfFCtTx1ZMrddwPAggKvRCzfgYNJjm9ED8GQSFzPohiMz1N2SDGzW7u4BtRjK23wfqR7omua",
  "key25": "5vE2MBJSV9qrwKmzN6UTUu7Rzo9QzB1Uj6TjMZ45PNrKS9xrQbf6UpyBq83XYWyK6hQAbWefsDpueybpC87waUAE",
  "key26": "3QMAfKt6GkgANHtmh7EWAQ3witS8B2rgwXTpxiRfLRnGDoG6yit1hrtU8XtNaK8YePjhfvYqqQuSnz8hMzCus3av",
  "key27": "5Gfc36KDphh89nXUXnZShFPFF897c5ZzYDYb7J5x6EtPHR2JjYPY9R2ybKj3cstRU2zSNrzT7UKbTsXLowywJr84"
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
