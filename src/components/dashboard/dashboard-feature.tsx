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
    "3BCjVL2GG34mC35h3ahvJsgfPsQJ8TrgnAHQkCD4BUbHYRvT6g4TnTJgWDMZ3ZScwRWF3gQYN6E1F1vd7FHMuSnw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ktpcsx8seaAoyphjizSkGKbE4tepRMskG5MEn2htnd5sNj2r7C4eHRvhDYSknK2JXedfwVyDQvfwp9kzmBNCCSm",
  "key1": "C9jy4Uc2WB2Y9G21hC3e1rpPFeszuMtLpyhNXMUSChsR4YjFbHyzrUmF2jTKK8MKF87nv8yycMUgugo1WXZ2uY2",
  "key2": "LBzzF2eecG5mufgJ7jK32kmD17irMwfai97vrbLiA7dY7CZcL1NEAzG1T74L2FXEhucMvDJrSANtTYFSeuapNn3",
  "key3": "43qUbKzJVFSmHiqiXaKk4ebDefsBC9jd3VrEC3fZNLvxiWCYzVxmaNv5CMw7kTnXPYLnNs7orP22GFFjY6eNzrj1",
  "key4": "4bGpt2yC4jGi5Sboq194B7c3cyQypRNWkGPqXgcNPhSQWD9MKTrZGLjWw1TJrCCkiD3JCbrp9iZb9aknVr3yn63f",
  "key5": "3iBaG1ah8cTLFqmZfvH81sUqkJhaeXuRvYpvXXHsd6dFSujoZfJe2Jza9JLRTz6te4v4B9oUQCrbom9LRfmhjhJc",
  "key6": "4AGXRxADk3cya8ntPypqnecJw8osqMVsLkfYPBHjuU4H8XoXuN28XbVCvE5z93ajWn3kqAp3hk2eAQuvpvamAh58",
  "key7": "43ZarcXHa8wTY96KpNuw6uKxkzvfw4izGHKdeEiAnSrHWU4CjC3LoS3ZxUAeZBYsC6XoV6VpedxTKrAWsqvsQFZB",
  "key8": "5SjbfvXNpuFoUuiQ7jiMWmGW2hjkEA4f2zaZQneVS6ErqXDFBzDzPR5bTRaWgV5oxFYzq6eP7e7CVodWN9eAQ6MK",
  "key9": "5xqnCECFdZrHw8eNCKkKX6PCz3yhKMw9Rj9yQNjHJKsLFzRwzqGEiowGYhzwbGe2cu9hopJJZGPQzJtKnyHUnEJN",
  "key10": "5VTS1hMtS1hD5KKeGRVs6zqJ7HEbEErbf7rESHbpVb4CwYcQi8EJSgi8rpaiCQaQJcmEX4F9CUZhPNVyERUHvkyq",
  "key11": "3NNSCBbDG6KgRHpsEZdCZCUh1YcUB5W8VzfzW7wY4hjXSv8SmuheDvvuMGH2TnYvetuE8Wpwy5PMcai7v7eU3r5a",
  "key12": "2mtsQvDuNYTtaW61oLA87uNeqX7cJCU5qdTnu1twqzVxkdcrfZe5Jdy4NKz4HtEMn3z3ZNDAvQpT1ynWKAyYXdN8",
  "key13": "5syoq7kWwr4huyL7fDAfqKSp7yEikvbcta8FYsUvusmvktdBK6QjxDHBL41XmSPw8EWp9ePRev7WFvJydgq6m1gW",
  "key14": "5xXFF7ccGnsUPF7Uugvfw9vpEvrKT63ciCBqJ8zui55LDqrvApoqfqmFrmzfH9QJbbJFQnYfzzmpoNgirkKnur7p",
  "key15": "39peCKGXuE7QZWbeYDa1au8eFQrXUYF3ug2FSernGoH8ikML7F3hx9SP8vHUfDYcVHPuD68F2boQXor4cb9zQnFp",
  "key16": "3w96a9ekXymchWigb23XmWs13z5zSxhJtNAiSUMwACZ1J3mBQeVjQoF85ntvqhzctGwE7tG6BCDw4MJ7XNaAukxM",
  "key17": "3F68UZGFKXghkqijgD4TxWCxTaKuMbhsX3P2W5HWDFecNsiw6F3d5eQBPSA8S58Y5NRX3qYzamy9nUw8AVNXEW2q",
  "key18": "2eZMf7C89Vt9PqjZ86vD8iSVSCas5RVSr96mxDWXPwnTkpfYhNcYXwMGYYi9ZhM3Q6EWWDvgSoocQTQDJzzti147",
  "key19": "2vCFhsw6bgm7SFLj82kCMghHAdoLH65TNPjq3QYEPPWyEmoUemkB71d4rPC8CC2UafgTHswQbT1bq3oaDwrudnjT",
  "key20": "2QCd9RFYMxGuJJwvkG3qSCowHHf7G23ikCoZvSeSgkTWP5osM441spczoDYUpscFpAxXWZkzQDPXy1hMdbwwUgrF",
  "key21": "5RwA5qakFVj7P2os9gYaSgYpvtt8jDi9CWaearX1omsg9GGQB4JNVgDEJnrFYXwKQCG3vRV9dgjeN8K2T8d33f5J",
  "key22": "4QkErhSipivKXyWXTeMyt4prxdKdDcSizyy7JxLh9EUjWaTYYxCu6HskYdk84ZaoPA8nHiZoyjQyckVcvwHhS6W5",
  "key23": "2MjPurDoY1ob8fiqbmf54yKzttTPqAvqTJDHJ6LYAA6xxC679DkNFZovhDaD7CKuKF1ZUfEoznCJb16M1wgPwF8x",
  "key24": "264pYs2zfrUboGNJP9GaD2wEtTfy9ZRyvCLKgJbQGcg9iLirk42aL93Kq57Fpb24ghvtN5Dp3j5UAyaaEqHH3qbo",
  "key25": "3kcCksmtkmgFS65FSeAxB7tkcKUfTWU1T5VxJi7JQtjwCzCYT6kG92tA5xxCvuoy9NL9R18GWM9gYpX4moturbxo",
  "key26": "AGisok2gNMDW1pGK9smgoFA4J788KxxeKMNwpZcnxhBg492UvgR7r131sPyDhF24Xbuth33BLPkcypKUunmhmxm",
  "key27": "4bGsKeQnxqKcindsFbqjVa9kRvsy1aNPJxhM7gSi6Kk9NKWqUeYHKYq8RqW6H5AqVi1AsUfDVug2v9GdBNKzsY5h"
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
