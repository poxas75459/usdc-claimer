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
    "jnsMAEPQHS3qVaNF5boSb1RBVRLoLaKKFrzJBpVW7EJ1gGrfD43gtWbTjstgaHzGrL1qtgi8bbphDcfGtv5Qb1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2han5yWjxxsPVt4eWY7jLTTueYRcE9aL7gHRHzZpa1C9aptGLjzovXPgmJfULxjySJH9tnzAPTodZBNjysbZYTWt",
  "key1": "21agU5vwqWc3CKPhnp4Pq4nguRvrkSWRR49i8CDQHHdUxbr4CdaULCqYYxnRKKHrueCRhcgaeUQjT1oq8DyEBgBw",
  "key2": "N65nJpUX4QdPX1gokS9ib5nUttmuuevJUa1VtpjUqi8j8njG5TT9Wn1Zm5eFGcV6hppHwWTvsozx1y5YvVZPh2M",
  "key3": "4Kj7CbnnMhTLqocGVU1zwDbjzZEY2TCxEHcLem56fCNPoAazQDPDG5EPhtRpmgkAXAsMmW9KL5184tETxqWXzyKS",
  "key4": "2TJyK4MG1EPooD7mKT6sTykiaYQqL4kA9LKt7Ho6kwKGSGSTVbDt1Uw4vZEMnRaknAhBg7qRZ8tYGtaqH14jCsxZ",
  "key5": "3fPe3VSNJdU45qvwMkPQunj9TY5w71TSQcbvLgNRnwJC67GqFeVPw5QZdGZ9bYu1BY5gyiyW3rH3vCN6f4Vyk4CJ",
  "key6": "3ZaBCQrrFavtbb7RhoU9b2mmKZYS8xJEcuDZewfX9RaLjS5op9d9cwtKekeTtbdUoco5LxSghK2Twpk9tbBWVjXa",
  "key7": "3wmtvdD86PRy5GaHJ3Hd9n7TecP9zX6zzmPBKxiHzPi3tem2yMGzXxKzymaeS672e1U7RFoeCFAF2ZHLxgP2r77t",
  "key8": "3zSj1jzJYrQU1D6c6jBYH3vQv6Y9DmmnnGopPTa8he6ZEUmzGXq9W3Z65RYx4Xo7VCpPbHCeFx9QBeicx5eHjAsc",
  "key9": "4v3ChYcGJydyx1pJR9u6xrZtuHFW6uPvFwDVLpCzvTeg5nKsLMqHAy2fVmDsMwup6mTgkJq3fFgi9d5VSxyzgAd5",
  "key10": "5dJHBu3RnsUYRsn2hy5WJfpCJHoCyY8jCcXjKRufAwS5McYW5P1hWPubJKkjJrYHu7DUg4c5L4Kc1Y29A3xi8j37",
  "key11": "rdcbcjJXCqnLaA6JK1pmyFZPvsK6BynzzHRNQiV38FGE28RLvG1YDD4fY3HQpZFreV9pEyE6PwzBMhdtm8zaxUj",
  "key12": "33AA3zkWJLHWbYJJfjkZrGLWPDhYVbFdR6G6j6w3mTLjAT5aJkqsJYH3FKfxbwQpxc3e5PSZAJaxAJBH8peWk1ma",
  "key13": "Z7fxD2ffU5JSEawrnLVramb2UYWVNenVtwyPq4SVCrRGGUhU3xxeUdpEZbmgwGVB1B8S6XJjJF7onKKVUrbVvR3",
  "key14": "21LhZcbhiianymPvJDa45qufvEjE9BsJLVbweENX3mQX8GpBzyHCr7MXNUnFjHwVbxdhw9LyBx2ydz6RrZCMN5SM",
  "key15": "5UvqDN3og7Cj78C6fd4gf6YGNzv7Vb6gReeU5dQwPA48S4XLuHS3pjJYHRpp5LpCArFpfX3Y4Ku4VsfeXDEz3GCf",
  "key16": "53YRWjZen9RjHFs5d9HHhLTs5UdVjnwUcUC5DH9mehgnJqGeLEvt36DeKvFceimCikcNzhR3XAE3eK1kYYPGwKuz",
  "key17": "5stnfTD5nNvm3TQW9za2Kd1J64Hmnbe6nixngYvrUHQYgQxsjfWNL9syHedkL3vouEun6W5fBxPrjECX6GzvDjVv",
  "key18": "5gUxiE6iQnSZF9uEdWjEG6Kj7RZnmmRpsdyv7BjFZWT4PMLKsGkGjFqeXXWDVnZC9jAT2SBbemQoPGpgM58UBbEc",
  "key19": "3ADCvrUbhTrobmJrXHXW6Axii1aDJ9FfHanrqeDPZqrMZXZ5emtxzhCRZdBgQiQJQvoPGCCRD8bDGCgSwqkf1mUT",
  "key20": "3DYPj8iFfdjm79G7Jgn9uDVp32XkNeEw7yeZU6yC24ihJ1JeMqgYKM8sFwKjqzwcMYkSGpMegvpsuRmWtNSoQotk",
  "key21": "3oiSgyMUbsUWL2e8aBBwpU28QDSCqcVccAFFJSX1WeSzHtADAfguJUfzEigokThoPCbdVGW9uU8m1HdkeMqZr8PG",
  "key22": "XaNwHYGKxZ54hZb2jGU3ZMoGafrMdeDdc4Kige8PYrQH8r2mbnKxNoRrNGwgXK2MdHGERnc5KW1BKasGpKqA5JQ",
  "key23": "4gA8WCW6uFXFdHLZS4f3w1TXNHJNin5dcwYQYvDLvX9EUMhekf34FyqyvaX37TmtP7NnBe7Ypz9E2YSfy65tVLia",
  "key24": "4ZBr5rCiHGNN2DTsNpJ2Nnca3n3svuwJeCJ9KCxXWFax1gT5a32WxxgdvhYhyYBEB4i85eKfZs1kpJ76B6GSQsNC",
  "key25": "3NQGtAxVvYhJuSoBYYRHkCtdzukp39whLkSMYw1w4K1QtQqvpB2Uame7aXtpKxjBhV53rAQ1w2PJ1NyMpWunWQKH",
  "key26": "59oYFJpxFsyPWiqtngcyv3KM78e3826C6uk4YgiBCE393o1h2p8dM6NNaLsiGwBorH99n9ZVKEp31v9DDXsq8AjA",
  "key27": "5iukKwmJ8NEf7bvguQP3cQn7eLEAmiAcSJhptvtfLg5BCa9PSsPMaf41rhP4gauR9W2bAio64xvPZY8u4dEUc1L8",
  "key28": "5PxmeYynF3D6uxLXC71DbAa6KDwrtCmidxHs3TrWrc6mMGpPcRYQTu4wvQn6wx6sp1cZSCei3LLGRyomhVF1jBAb",
  "key29": "67Le9NxAPAZbuj2xAdXewQ3YkNbTpXqTtLqzauN3NR5Y44RDE3zcGX2d8tZfNVqX4FwCrqyQErghJk6RpnfqiRQR",
  "key30": "4iTu7xsBdqeAyhZKpit1XS3KJ7SC6n5mG9sSs66PchdpysWF7at1Fppztd35yWJ479RUR9zMiKXctqSXiLvSBseP",
  "key31": "2jvTuXPo56FXxdMHKCGv3a8zzHNWeKWvoZfFDGe9oNpgYk6b1mwUkTDDGJtZ6P66dDRHAxv5mJEFvjHje7NfNZy2",
  "key32": "4WBM8KZ7sYCwEWuqUms7VDRJSfLKV1gzngibpFTb8YJAwQ1WtEJcyKNiDu2JHhqth39B1zLZi5qysmCfjMMosqo1",
  "key33": "3XUappKQknVbS26xpEoxnrE9KJq4avPYwrke9pz4fq6ZSq3Kc23Ephs7mbByeisGg5HAADbwBD8wbpvepyf6DdPp",
  "key34": "5EYTcniZf3ueqALq7Qht3d5g53jXbHdEMkKGhxtvcCd4Pa6WKcRv9Md425g9r1tdnZEcBCgsSkHDydetM6fLJSE4",
  "key35": "5NX9gKVnbvHhDophs6edPp3tgw83qKKGNaQVMMtnjEjkdCnB54xSofbWaL9bNJ8pzs9kQukqZysCfZYXBPwpgmUH"
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
