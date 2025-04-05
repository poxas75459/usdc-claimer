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
    "3zYKaCCxWFhNkhPBsCz7bu4u7YuRreKjEnQrrGRbngsYnj7hBTRKr5xYbDGp9m4KA5U3JU26zaWGubFQmPQ3inDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y2EFd6goQumPB29DWj9n4yEhet793k3SqQVHi1Xr3uPyVTQevRRynt2mZ7QrKAZ3T7uMyJJjpqJ63Pn4vZ9bDri",
  "key1": "49rbfcetMhoSdSt68P4vbeUQPQtPDxmpE555ofbqoibk13BBExYchr33cej2iQ5aJg5PzC5rLEdLdNN5GJVe3V79",
  "key2": "zemUuozAzmcyh5tDySyBmfGTuChTx638v9o1qVQyD9vF4oGZjtRYPNku5gKpfpVzUfjecnydAs7pE2iUmWa56Md",
  "key3": "VJJDa4FyHBNPD5BxEut2eDQvzcMvom18NRt3Et67dAGSRmkD9txM6ZRwGDQmvtgiz6mQ8WUQ4J38y7hMRak85n5",
  "key4": "5dXAgrg6z5o71VKq7ZkT9vXAKJA4v7JaNRrPnR6tHTmpXFjWYAuen2v8q4p5sBVg5yzdjuTG1Jtt4PZ6PZN7FmqZ",
  "key5": "4iescbFsAQnTFYZqJaqwgRz67uehLSVQAQuVPERapYCtKxVLGhJEvPjTeS6soWypDnjtbnbRH4Jx1pp7XU8cYj6D",
  "key6": "FRUoTPyKKGXWme4yMYpGngZwtWMGY77msqyziNx7mt9vuDwWGAztoFnAVRKWVEPejQ3RhgaomPk6e939YMpE77C",
  "key7": "4iEfmabcG33FSkjT7eJwJdQjZgvdBG1HRrasEr9tz8Mnityt1h8jMfJ1Ejg9uPwQgfbqdV2RwjgLE3hgTr6JmKon",
  "key8": "5kxpLQkTsKgQ5SPhEUYdK72MCDHfoBkkmfySkSDfohbUdXspUQg5GLmsXuWLHz8G2KwRTRvPhWvBZfnmHeGdmK7W",
  "key9": "ctB2cwErF13Ft8PBf4PFq9vGduM9SJe5n4UZwyuC1eV7A1HftSjXhexryntYBMfLUPoyptCQcB559tgwPQtwTb5",
  "key10": "2xUJHYPbqtKm1NkP4rC63zeYGj2XaqyY4omg5SdsmE89beH6HNUpYLge4kcpG2dyuaxs4mv3pA8zw3NvF5w23Abh",
  "key11": "5Mq722gnbZzB7BsJCePJEe31yqLpPGfjoR66n9Kdwu52RkxAvSAqQJsSYZXVcki1VYdjDS9Kpqj12uM6byxQ7oZx",
  "key12": "3h9NrnxA4CXSNiqVRssUnrrfZPqyG1FnMEkLsYn7VNKAiqQicRXgATrogqFH4YjWf87vwRdbfBDuJeqxAuix3P19",
  "key13": "3BDpbtFvwToX7Vt8pvEx82fkiyCtMkweMSQxtmq8L3eEdvBXJCuQeL7GTCrsShmVSfXei3igg5oKTGvyGByQnjgh",
  "key14": "5mZYUpxrZQHWFUE3fGRbPqguv5HAjs1ZXB23AigTvbDuu4NwYDiwScaCemkWcnwEZvoNAzmP2KdPQNuQDhgkFkeA",
  "key15": "qmvP8CpN8yd8VGq6Gjtb5AZypdXGzevzyjTYwFTzHZUtcAVu3vxzwRBbHw9A4UcvdWrKDn8Twxbzkr4gz2HtZMm",
  "key16": "65zg9wsxQWKjhewNk9PXPNrkSK44ooVhZqBWjv1Zn7nmbbeLg62P5Pu3Egg3sWzBbUnwJECJskLP7gSS1GVTbPJF",
  "key17": "39mJnWCgCvbYDVRt43bUAF3r9XtA8QVqPtX8JB5mtbdkXJ9RorwR8sQLDQuw9QpXSmUF1EGoeasbtnuXhaehDSzv",
  "key18": "3KFd1cX4aSxcLeHVZvSkWaadVgnEkeBFqagNnxg6gfHqLLgEkdUueVCY9i1H6n9NeVwqmNaSRhcZBQ4b2nfRpbHy",
  "key19": "4HdSTfxFCE3WePvg8WdH2bamt2RSsRXyYubFawaxqr7M38WuH4MTv8GvB7Wm1e4KNVj6iZsv9gFGQLgpXyJZF65",
  "key20": "5CsTJ4GwpT5M7EGLPU3H3AyRy5e1dAH9sW68QaPuZLoTdS59uEnsbMdE6QDY9tEkeQy6rzKgcnJcZHMuwM9e8Xkt",
  "key21": "3GG4k874SQbB8QD8pUbQRZn6hj3x6f4ftsJys2HYoev6eaHKSSTskofcJGQQcLfFCvh4Lpu39mzmWrDegGDRN7sF",
  "key22": "5YqLBBsoQLULToucgF2vW2o5dBc5f5Pub9XDw93UeqiTCasHWUBTDh43yRoZkiVxETEAQaCJSXSzpwzg1D3GmLQe",
  "key23": "2gXQscAu5pvSX5PSe1VSGKMRGF8mms1NxLXCi3vsZnaqkJMSRco5Fs9Tf1iQXyyFSEEbsAHgPDfz73tPrVZvPJrG",
  "key24": "Ys3ensfFLtcGeeQYM4uoUH8TkhkYEkLpqu57SVoiDL8816aeS1AVMrNR761EfoQ3TM3KMBbK19aFzojrZ6CSGQH",
  "key25": "2GkexsgBL1uX8g7NvXBZmXPQwo8wsVuTyNSLcGMhT5hk7rcQvtK4u4hNPPLqYvuqvZZJsio1gzfgPLLHNReZC9Vb",
  "key26": "MS1XLw4dnBJupRS7twpqQb2TNhSTC8XyQ1RXMqygHYin3239ajuhgiSuRSpcGBAtzN8LSMgTZRQvdAmTq7J4Dhf",
  "key27": "62ZMDrfXYQU3iq4rZeCMQUAvgnSUgej4S3mfmr9KzgW6Mc4K8DkMptZxBdvSDUMHsSNPSPqRZNvJB8j41uN27g2A",
  "key28": "4ZhNxYrLmipWPr6WC46f9ZA438msQudjaqjBkoqXhpUohzsoUygvhci97iwHxV1ws6wTLdDH3omyTpBYB2PViBwK",
  "key29": "yiRob9Q4FEusY2NxTvmneYwzWcu6wnPZSWRFPymn4cknzSw4Sgveg1SZCR1STVVgxsusux62Dj6K4poExzfk1wC",
  "key30": "Q6KxxeJ1GgjkrZwN9s9erHhZmbeVTNHABDP9TiQbHDHXsXHptrsmoBCLPXyVBELPPn5YXfa9BwxQrPrUnkyWrGS",
  "key31": "3N17P3Vjr9PF7neyh85tTaEEfgFb2neLdf6U6Ugr7u9FM3n6bmPxhQe9mq4unczrR4wwYNf2WpMcobzQEjxqxor",
  "key32": "5CpUu7ijRaRdPK9iLKp7CTuvgpLFxRp5n94L1fThLhMTkd46Vm9grKJR8NFXN5pfS755yHbeHnB83bJQi8jvqjdv"
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
