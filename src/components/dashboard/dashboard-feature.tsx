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
    "ZmqXMqPcqdR5KSZc7XG3ezHx9qdz1Rv5sE2hrVHeGRgwfeU4MyVjuJjeoWUubnpdWjU9pbDHWGT6ZXTWoKewAvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67fkv3Jzhoo5WsQvPQePJHjnwtEZr3RHfPW6QPx5a24ZznKK6NJSRFyzsSqTrdmzUdzLVrXEhpvPniEhkVMtBAtz",
  "key1": "5eaHaUYUArcDzAB4ZcaUFJqoppszq8dQ8ZXJM5qLVECDai1aVf12W6mD2J1UofVcqmzWu61xCxt4FaWBkzGSirgg",
  "key2": "8WXjLZeciiq4ywGvuqPeFxDSHwiQYt7uUMScdaaVTf6UnBVSZhVTfnud82AFigDupBP8TUJRDYkfzVtSRjDpXX5",
  "key3": "XcLtHoD67Jmp7afaSsYNXUZdhAMTxDP9vGXx3cGm8uzeMZMADwUpJ5Cbr5UNoP4yWFav6XHC8VEfAxPHs3sNwXi",
  "key4": "x6D3Gt9F4FCcmMr7hyS8Bee752toPAaGU5bexskbNusWtd193yzHRtt6yiGNnrYVtdqaJ8DWznAkufnX63yxvc6",
  "key5": "5W4DwLGkNGaukpcw6Tqmp9Q4nf6Atmhqmu5ChvtdSJzWKGi1GxnhdSjjbYghy5dmGYKXKcVEQBhvqnUnFx64ewZd",
  "key6": "4L3iV7xS4erBnXFbtMCsQaYMJRbQNCNMxbNv2Qb95jN5Ax5nrDspp9bS2AHutK42obUFMKb7YEZUgTGHLh6y61pp",
  "key7": "2AqP1v6V7YUsBYNE4Gny2J1CBa6vAuymoeTd1boyHpeeWFzLxNNn7arKW1BY9xdfRDmDhQXVEyb1mTV8ya9LX5DF",
  "key8": "2jL2ZWbQ8TjZGJyjyKVSmUxCpiZizHEYPxu6Xgf3peXZQT7qSuKGkYBUEhsEnN4pf68ES7jwPS9GjkGgHfUKR5WU",
  "key9": "KQSuMkvkeik51CRimrNiRanzxVpZGuCW9Gw7j2spf9hL43BXLBjJLFxv3Yq4yyKcmeWCrtC2DKWdtW5UDCVCMis",
  "key10": "2epLS8e6kUV269wkAgHXd5MCXuNKHUyQc5fZJeiunzfmzdVNdGV3mk7FBQUvVxDUzqq6Gy8omEs8CcNwbEkE1GV2",
  "key11": "Wr5gC9q1Kj86tRNZ9gJyN1NH98zNjdsoWU8mH7ses9NkjFLRqaGKs3KDkhAhZkBeUQEDFAZEgDYkj4JKTWTKbfB",
  "key12": "wJDptGmigDTPQH3n2HMcLavVezcjYukCJkszAhE76oUvT1HErJyDh5HbPbK71jps1TZe3wdEo1vz6AMcBFNsCuE",
  "key13": "2RR58xEHwrnSJUpYfXRetFvLFNef9VizwrcBPgQjLPFLfVXHzXzxaSgduss2rzaBXSM8zYCixRBqNs6kuYt4mpJk",
  "key14": "5FCBNKZx3AG7FCnH8TRxBGkwDHBpXTqutpjKVLsBMwsc8Z67F8NSM3Ar9Haw8wXV7jx73SKPoNJvKm7x2zJQ1sSn",
  "key15": "5SnbLLuqWaik85m1FhCrNrH4iaCCiDFR68i1QznhFsNe1s4o2xwGfq2vsAXV2f8FXVpyka5VuKR3ZApQjzn4jEnU",
  "key16": "jLvSoMR137BNsNK6srXR6nD7LBKJRK4TsG4C1oYqCc66YrVkuVbtbkCGNQxgmnUSUTDcyhx3PwdbAecySneg3xh",
  "key17": "3VyG1XzyLUhfi4bth214j3kWSuRQVDqcrDNig6NYpxfetHpZfu8MZfbUwWuXYTyjHfXVC2GuoYraw1e18JiGriPq",
  "key18": "3pxMeqBCd9jTBEacMJ1tFCmBN9VD35eDvrSGYy68cpipDggzRTZgT76TuvxQ48VqN9oyNJzMPtpSf6stAJgmGpYv",
  "key19": "LoAERXedEQWwHcTqkZciL7fLMy93zQAwLw6FVYVp1BX7PgCsWragr9yE3rBe6fxZiviLKXYhtQPwjStMZH4TTSd",
  "key20": "aMXDw7dwHs7rvGc9pkB6h8z2iDi4d16TFpZPRoak4ypRQBaHry8vWPmH3GaEw1KWs6CJ3rGc3377aNrod9vjcox",
  "key21": "5ziTYU8sapgXdmxKDGVE4KhDFGgFkLSgb5yVFrT7DYyzp66tNM7wUvewdtgkeJaoTMuvrTgC6PHS8GgbbBUq6itb",
  "key22": "5WTmAoKiaE6jYjgrdR2Eb8B2yx5AFZBG9BbpSysZ5UYcPVdjHGA7VyY2FFKvvwF4BhGLxHzq6eFPps9UR3njSGtW",
  "key23": "2saBAmVfwMS9tFtTqoZD9NtUx1S1Aj4uMxGa5xqmA9SF8T5hfBxgCfC3AU6Y1nLrQn7kvBYDR2x97uvU14GJQGnM",
  "key24": "2awuWarVCL7YKpgNq8tbeJLH1bvUtJKqgfoZfN6J1bE6MX9rmtTppyAiCBXUvA6NvnwimkSRDhNdKs2wdQyZKiYh",
  "key25": "5pVGp4XNs9oVVt7NkBZmkPHgNRe5v8pGoEcszTzqEaHt35zS3y2KX5eBFjd4HaZiNznVgc8eTGNScM43DCXUK7Fx",
  "key26": "wMXVAbbpF7PGyG7VUpxGeuDFcpR6ducBvXSrntgyNeigBaAHWwgqQsXxXicK975TLKuvm4FeykwEfZyMfFoPgfD",
  "key27": "P7ba3uAKdWYckyoFZWqeoHXX7xBFA8gogWae7DFSB17RvGUU4FZ3hgYkzKSahFzgPXqAikD1J2KZKa4u4wVHhot"
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
