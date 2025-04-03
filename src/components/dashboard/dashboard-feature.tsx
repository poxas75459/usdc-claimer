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
    "31pV1Jx9EVMYUsiTPUvopzuq8EbuCEozdbJe6dkkZawSaaPZX72gbtrzcTuEhLbHfHYwX3w2kAWEKBzQniZhs2E1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b3D638TrFqo9h1LT5PiSjFR5AsJhRxBqmBBbkGMwRs7AjnAJ74z3XGzgRh9nagM2AGP6ifhB43KCNNuLHTBxaby",
  "key1": "5F8f78hXaTnGsr15isMzzMbPwM9QHBBmWWzcx1ZujiHrf4DaKXBXGEuF5AE4JLWgyR7NPv2yVGTtk9S9obw4iVmB",
  "key2": "ShNGTwZbDawiShZk8uEt12RSQF21ZrUKyLoFbDevpo28vbCPsDZooKqVixj3R5PBCxQAdVhxuGbsg4xe2cFe7Qd",
  "key3": "oXo4Ru52wLTrLnhokA18TBBMSsrq9J8WqRQWANNTLx86sdPgG5DvmchezAkLAaW1kZxKQGwhoepNEJW4xn99LQ9",
  "key4": "2z8bs27X8f16WGxqu99bccwYYe9Kv4Dn8qbdQPBVSHHexvqbewHatt1tQyB1JbwMoDkfv5yQSmZqdZu67733Hi9q",
  "key5": "4HswaGKVH8sfSzBX6p3iWqvKpY96SF94LQARUPUoRQqwpUDj37GvjaXfBr9jHLRvSoMCcGVzyh8NRHnXwhSUkGvC",
  "key6": "4HhZNQcyY6XxnKPgNSfAUom5kfCJ7KTDjLymXbiALGGv4oeY9GAEeFnCWxEqhFgbKzmEer4r9scYEmKY9PHixRx1",
  "key7": "5QBiyN1ot1hJHFop6Dyys6Ah3KFPcSmhRqxinRn9KVdvm8KmeyFjTABCswwBHdmtKnrNKnY9X5f241YJ71PFX3A7",
  "key8": "5V2aV3Ld2MLFw5KwS1kktRXrQQ6ZoMsrzyJ3JDfMmmD48H1TiY5Jr2kzqvXtq6RKF6qyYd9AxMSqNEfEECNRs6g6",
  "key9": "3Woq5TPbd4WEh41aH7WQrX1P3WWHUUc818LxaYRRsf3T8ixuwRS5U7F2CrfL98WCmSfRNsCRYFPM5G4M8xzaP4j5",
  "key10": "3T9bppaB9FnStR67vSUjnFicM3z7hoAZz28bfFLfbPJUHFQv5YESjEiPe36xSo9XD5DTKo9evCkMrJR4MwHdfxXd",
  "key11": "4rC6h5FM1Z7MtSaaUPH5BnE5NhL89d9RhWRz5nUgfZHV7AhXbfoUqUBdbEG6i94RgKvcx6ePyyP1cHHK9JwpTxov",
  "key12": "xhiqqLpsrG5UVJ7FBGZnHXTiR322vTFfSna9ka8ubDf7BfRD358Mjn5aPCyYK2nNPhNhBz5AB34srnqS5KQyk4g",
  "key13": "BW6E1darvaYZoQMNhWe3KdywippYk7mmMswjYzDRJ5oMrRrT7jibsL5i2nMR8hRh3xyAXwEK8Do1uQkjN3fsQJa",
  "key14": "xRAzWiYknPhK1vH4g7S11WxfjNxNZTrB8b1nZajVCpHDhUnq8EruCqb1GpkhHDZDX1n3f7E6aoRSjsMMf6WLnFS",
  "key15": "44YTMgNzxATo6Qqgp9j3LfKZ8HatpyaxhRxN7bMKSTURHtoURkxbvz7FJFcHuBx8PJuxNStgzzy8GrA5hkp5j5nG",
  "key16": "3KHRe1bam9MXd8BHcwry4YbT7ZFQLBqDuo3exrj4Gkgf6Equ5q8rX3vHvaHVUkAQPQ25ygfVgJBZRUheNBg8wnx5",
  "key17": "ksZG75trSEkpngcq368Em5Vd2ME87o2Qht1cMjsM1t42C8XMU8p8LoAmnZfZrnTraZepXrEyZ6YWV7JqyJztP3n",
  "key18": "5VxTkJ6rRufa4kfRpTTGTFN9S52YWsNEEUYPN5NTzbBS6NTQKZS11asFQsXCcZrC2bLS4HomkPzscS96HHWZgERW",
  "key19": "5jzvqk32zBE1N5C4ctZDMBaNQnYhJZ57UqhWGD8AmVx9sJNnSUVAYRhJ8AakqgcM2YHbuW2it2YsUzjvLBgYxST6",
  "key20": "4KjD7G7myENfk5DXc1XNh63fhSmucmbHH6XrrUE9WcCDYt2E86d9QPSTv6eF2UBoTMeE7rJYECF7stabydHctz9D",
  "key21": "2mVRfP5rvNPU36ZAM3CPjeAbxfXWp9CtmHwiT7267AALYQvwGwLUy5XfjBiUm5RtLYWZEBQ8f6U69JTJN7tCrDCM",
  "key22": "nzpxNyYdyDdZoJp1HWes9SodVTw6TufPYRE3zFvR2eStHfQDRmiFQcZ7P9LmfSEPYzb5VjdF9L7Ug4C3V4DUL1T",
  "key23": "46joisSgNcz3wkP7EC3ZHv3NPd8RSwYNi4nzHJyeb5QCUYWEXpKrpoqnGNGVMWjeLUez877nnVke9QxpDPMsMYsA",
  "key24": "2GwbxCsAXF6sp1f54AKyDtU5awYCviZ7Ab9g2iusmQwKfWoeJdGztYsNrBkRyyjzA3z3qwetnVRTvNieBpqxPt1b",
  "key25": "7rwXqFaS3w5oJhAEU2eCpsrs25xUrbM5EFzd63xz7owLif5JgARVukKwjs11n4NoahAEbFQT1XDWD2wc9KXbQMg",
  "key26": "59TVkWfjYGZqnFt4bVa889gDn7vByZS9rMBcHA9Dq5bgx4NQhDeedpHmfa3eSvKEDQGuSSdMUq9pibaKatcV6NXM",
  "key27": "5YeXbUYhKkEKAdQTho2UsfJXv7SpYQBNAv3HtjpTVGudVzTkjK6Pp4r1Gz7faqsF6hMSfPVnRRiewUKbHuY5R334",
  "key28": "5rA29NVcQAe19n1CwmtuZ9AL8qRVCvfVfBxKCYPtKxno4sfkyytnUtfgVmDwkuBU6NCcaW3sJN8j93ghkxo3XYqE"
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
