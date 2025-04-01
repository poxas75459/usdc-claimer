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
    "E28bvkeCPGhg6fjafFb4Dbe6eSCK5YYGu4PWyeGw1hmgzrLWDBJFChZbSto86HHK14sstzf1LZTxzabFg8tPYNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nbJaNdETY38xdVX6TVDHQYQRRN1A9mWPtAYYNCr86RYMWLJVgrGc8YMWdpSjKK4PUiKD9fP1wLMmEHp3AfM9FZw",
  "key1": "3HuBfR9Kj17sr2gEJb9h5zpJz5tAQkAkrMDMUqMqmX3EHbz8Cf8jrHAcK5x68iK7JsfKV6HdjLu6cqT79Bc9N5iS",
  "key2": "3adnxr3XYqoZ4QDvzbUUP9jVT4Ra431H3fRAzdTPMZa5KPyoMfbgEheuWwYMQXvSKyNCEyt9gvERZgzNLkQkWUeq",
  "key3": "2JxfHdt2WG852HVqm8NEUrUroXQAeNfTCVYEvDbNepSxUBGNE4bKXbnAsCF7Vy39B9rjePLadeCuxsTkFQDCv2cd",
  "key4": "4oFe8rQC7CqXjAdSJ7Z9xKUWVLM1iTivbiyqtu56P5kwXoHBWVTvqnkorys8en2jybs9HzbtgUrFBZ63ECYiiZZH",
  "key5": "5CEg3gxFiCYgHAKZEnokSgercfJe4y9TacC2b7PWT1688P5FCNpdk1gUKhoXwi8XkkdZiF7wmMg7YxFqbg6UL5vz",
  "key6": "4b8UGHvphEDMWy9JsevZAutjXjqSz31PFD6p85XGBUwnyM1yA2vAtvB27ezcQ6V69e4BJUTiSqh47cBCnDuwyvXh",
  "key7": "3zrdRyi8bLnFqX82UG5Etnj31pvaAkRVw5tAEQzk7gN3nM8QRTgnBnYnCkrRBSBxCjFGBN5Nb7HoAZeMgkQyHvQf",
  "key8": "3YDKJ7mkWY4dpDE1aj6p7uBD18aPqaZ9cGQBjNHmn7VuPFn6wSQ8JNvPohcDiMtnAm2jNDYS96HJRg5z8MbL11L3",
  "key9": "4MiLM1B62MKHMbqTbYcNLB52iwhFgQ1nQGiwNwyR1Jd2Xt6KS47BnScKSdjpjBMsfN3vgvxoapTHrJy6zGBeUmS3",
  "key10": "g45cfugHufciWCxYKCmvG94AJZfDpPF97h7virXQwnhP14h21L7HeA65vk2Eii9EyMM2LuCSiX3dJJHYeS4ZY5w",
  "key11": "3y73oKeMCxUvA77KXN9gQaKLm2xvpExwUFRsWSP3iThijyxowbcLghpcgrJJuuNRpxustebvhYD9gA47Aakn8rdn",
  "key12": "22yaj8RpVVTwso9MBFtCVJmmR8JpTP1LXiKHg7vDhXiBKwRoCXXG95kLf9XMoHE3WUy8v1cpFvf2YFPRiBPDfPgK",
  "key13": "2sbCJkmZjDZu8ZJNZBxDCTB7b4SzkX4EReNbrFttmZJKYsXpvEUh5SwCXFavdQiTgCQcNVAVRHFWvQkyJ2wboG93",
  "key14": "4w6ZUQeZVJQKsqA6dtRspAxVRBeAuXv9A6bNjFKbFE35FYxDhxmSnB28Y8F5BVmuBECgoRUadFUwKZGsEzARhJXR",
  "key15": "2aqugKHmrAtCJTSyUcfPq1bHJnmC8SJcb5BAhR9cecx5WuYr1nJwx8TXeVKUJ2DZAH1zmRTKnHn4pYMvbw1qPSQK",
  "key16": "5jLnHhXEQS5kk6QB7nRfHoE6cyBKxA52JNfUFhL7bxnx9rrAgqgUauVtfQHA3KbWRHVWo4tKJ2tJZsQEtuWtN8Gc",
  "key17": "2W71cdEUVrwjj5y1BpUHLugKzWQB3an5nHY2TMYEfv4pQBVUFAGpQK4v1vakVUewdmSWSnMQmnQP6soPKFXfbGGr",
  "key18": "5ELb7UYaKpDc4EToYdZFs2WeBRtuDqhiCb8zh57Ly9pQ3hf27qLhQmhnwqQTS1jPBi7CnwCddPWrjQtyNN8NWEDr",
  "key19": "49x4deE2ztSwkqdQzznPDQToSnhkDheWYdaJ69PYnjmjm5SLg9BnimqaBTNLm5FseHEYDcJjZ3sLjHNtQfUKaKy6",
  "key20": "2WNrR9Ze9BS5k4acPC3JqquxvryVhDNVifP6b2atRnZVsR2v6nbzJWXHsWRQvoa8NNUPhm7bCZTHdGqpP37d3HWX",
  "key21": "3ntx6fshf6SLcgsNtMgHgq2Zy576HPjMrsJXxR3b29GGbmYDSe24WuEu5KHnbQxb6NsfbSfEz1o9fHSMoGKypZef",
  "key22": "5EkpVYSqvHUedxR9YUwLN5FbvjXEFUesa6QRD6vgvDxfUjR2hCArCtBYJkR8E8zUG4nayXn8BbkeK5KLDGys7q6M",
  "key23": "xNqaJAKQq6ca2PE9CJZ1dtCBo2hDzYauyG1UiAW9YCEUS6XFnwU88hw1A5q7zEvPMtKRxtjU89x6ECY7teBUti6",
  "key24": "3PhrYQYQxx3Ywvag4oqDAzgqEv9AicmP7J1hAKnhHVnK2NTRm5tEg8XqXGnAbXAa4pQRKSawfC5b1s8XoBKdUks9"
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
