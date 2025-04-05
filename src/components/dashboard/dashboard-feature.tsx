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
    "3GD3a6Wug6nkuTb6nnkJJz9kyFRb6dMoQ7zRZnreSdrfjBoM9qKv4FCJbLRavLo53EXhMar1N8VZG1uiEe5gSxNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R262Ni46ojcagcG6zdP6aDMqDCxYnRYg1WWoW8vT1bTDWrGGbaghydAkzBWf77vUQh7skGxw4nfnNEsDBNdh82o",
  "key1": "5XTDU62EeWdPFgCcikpeWsg2dkkFfetJEJM2gvXUUkWhpPMFwy6cUKwUKfh253RKDF4bYv3oVy5soHzZbmBi6gV2",
  "key2": "5YJZ87RmjYtJSJtydtoHQFjK1nCrvuDUTMMTuTTXhozKL55c7xfQ9yA2PvyE2q9HNPFTfm8tMpS4NieGkLm6vguf",
  "key3": "5TmTZRutPGidWUSNVxZh6PRLi1BYtLXJTYa2RZi5mLfAFhDjnoAyXw1HL32Ad7XGtaZofmHKggoyTTgajHn3LLWR",
  "key4": "WkiLkepx5d1NMYGvHy6AiGyz8tf9HVeMiYotT8KV3ACE9aXmtZFzTbkMFvCFhdDYQp55y9sby7gAvrK1aWGgU82",
  "key5": "2Vjnj1iyqChZDmGWTHNz1NmsZDLHN4rYKCFVE9tLNFdDpRY68Y8LoKpw8yeZBjmzsJ77wicSu5tAvQFQPTQ68K6S",
  "key6": "Qq6M5hEbRmcY3LtzjnNwEgU2WPxpWfhnafDv4zVWmZqeh2fTGJCWk5EbpBcFAaKsXmXGcWBXt6kLAGLM7Kt1syp",
  "key7": "vKtgkUnf8Uo3RRHowiunbwDYra9mtFy2uSHnLsYpTutZvH64cTizp7i23k1SwEvyHeV7bPQ4dGUfB427Tx94EaP",
  "key8": "FzxsJyXmR1xV3kC3j85rx5zzKRprftCR7eRjEa74CDphoF9CxrPdWoE1uKtZoMqwzikBgEPWEyKRVSqwzc424iR",
  "key9": "3yAwNtJL8DerqUYMUYMxQA7pcnd2A7cVX3hM7nft7uv8nkkekKAy6JkGKQRNxhjJFSJ2CeerMtk83N2hMUqzGDQ5",
  "key10": "n4jbcujWtk5yuxSG5AbBpUAJiecVcJsLVfh6TnFbokdWo8v8BnqRkYpdPEGSUhaGoNyYUmbqjRZj6f5oXLbyEBo",
  "key11": "Tki5NwBRRv3bQSXyFmiJ7CEM3wj32jJgQZhZetre8vFSs7DKag4totmtG2LuWNmtqHjSS5UvWyNvnmahFWkUEqf",
  "key12": "3hHjiY1DJnDK5xVHHs167LHYH4LmsUHnizBEpFyESB2HruXx2QYe3vHhECrJjuiEo9F8mxHaepwueRqrVhSvHcLj",
  "key13": "4vHEL5HYkbS5po74v9aUZySz6giuwTrB3p8GYNaHf2gH5jWz4U8B7xHJyECibYcCgZVWzTvqQ1bS9jePdUdCKGEh",
  "key14": "4hAhsNJ1UkUDfsNAjzFbBYCUN24LeFSYzyCSqiBK8RHr2N236bfh72QZ8Y8sAYhinNMrpdLXEajKFmVsZ2Yxst1D",
  "key15": "5wPTKxbxz8vrNK9eAXrXxhYbeVnD1wSH6QWNZ5NyfxbVJbZsQxbUxqbiG8MZvMgq5H8gZjm2a3FPtS9Zk1okNx5j",
  "key16": "3BeM4EboQp7qbghrd7rXEpARHDZgQM21gbTowJmgXiErYMJoj1D1GWnsFBVKZmEbGuAJb1hZJSqoSW5Y2wnB9K5n",
  "key17": "e5mi8SgHRvb5uje1HrUFgU3BzkpXpPtpz4QfKBkE3v9WGvqLxxbfv7hHWZorNEEiEsJh7DifKpwK16YoNBPDnJq",
  "key18": "3ASGPJE4M6DkqWYuDMpPcTdf7Z1AsiQhBX9hEoEcZTCJtsojWwB5yyiWCtfg8EGEwjuaVh371qpbufSCZqiTS1ab",
  "key19": "5jvT6uX3L7wKTRA96QFWxRcEgpDd131q7EgKZHDju2G7zPmqn33nbM2vDG1LdfXPQrh2upwVjiJEbxG91tYk6TSB",
  "key20": "3QNNdJhBKLJub5Nh6uetg6RP2fKrnYXu1cS4Y6efhS586EVaZ8THr4CznfPLTm7ARcRpdCijcyL3Jhe3acqGqqB6",
  "key21": "WAoSYKiUd4UgU2dkAoLAU6KkrLvXuwanQk8TqCkw1MWdmU3imnx3Sm7ijrteCr3Jb2Kj4rANfBqZN69e1Tno1aS",
  "key22": "eVpdFYxEJLWNwGWyuJ37o5WsSyGZMLkdu2k48t4Xdnb3aucDPgDQMTMqovK59JTCb2UMjf8LFSnc9jMPaGmL4h4",
  "key23": "4ARt3tDpuK5mbEcPSNS2e9tvMNTyoueHKcLeP6VHXtkfpbfLwQA5rELuqWNu4bkBjjzHsq4axndQ3yLQBt7ERdk4",
  "key24": "8XTgu6CLpCJjvuSFcEjoRPPa6qbDZR4Yut3Bizv9sgU8hEBkYReHLCiQCsyrHFHSaHSBXxj7xw1MiTSx3wuszx3",
  "key25": "3wJem5PV6u7xRDLRwXFMKt8EDMyCZtA3AiJYbY4s3DYiQrJji1wv8jhXvZDVuJgbHK2Z5pJkGckCXXFC3qGFzaxA",
  "key26": "2Kzwqph2YY4KrLGpXV8HgGZyAtLTu5XbmtGDUkBHNF5VUABSoWiW1T654WdoCdcuuQJjB1RZB4WZSKpetNufPtsW",
  "key27": "4WRgRPbpon3B5XMAfJdPQqBeCFc3pKoYJWi8vedr8VyLY6Bqzbxh78e2gr9qs6sQdDrh835wyJpjvUZ3tH9q3kUa",
  "key28": "26reMj9ewvKDmCeRyG2c52EqH6wcRsqSBz9cUNBSfafJGFCyXJgDaFfEQEN28gPpYHhXoJeDmDWEdi4vvsQRMp1F",
  "key29": "3VXRuzrNwXhgs9iJFgmfqvFRfLqFmiuFxk7yFEEF1sgwoXwTFPDjtUtJrW9LcqM5JJSnnDoQttWVogx2LwsFbSnd",
  "key30": "4MW8Qr5PfmTUJ2hq6vFV3JwH1d2EMYmYFzypTtaCQJfia5xevjxnQZYBg8wBVHoCiz4U9CBp9PGQQd6qyBZjVrS7",
  "key31": "2FQMo9W2EUHFJmJLSk8fm3Tqicy3NPCfXqBP2WieymsTaKRgUGvEG5p4zATV3NHWvDWQ5i9Uud941LArSfkYW13U",
  "key32": "3R7kYykHMkj879MGEMT2bvXwc2xewe2wN2233AiSQvv8qrc5PAfSqnA9apXAEEZvA5gs7srbUmcztzdjuvHtKZ3Y"
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
