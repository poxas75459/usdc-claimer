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
    "4Ufe8wegubs2swPtV4c26i9hLbEj5qxi6V1WK5qjyoUH7o3NmBWDeaWdowKc3J3U9hV9YchhGS3LDQ5f2DGLTW7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AU3Vi7oPkySQMrKXfUNuhggrcwPKprmRHHe5v42WqiLxev6pgDj8xFScu4etk4hRrar5gjENvbzyE97XcEEPxDT",
  "key1": "23YTJ4kUPkPsst5pq9QpemjZhvAZZcrkFHoFKfeSNxoqQ2syVGE5L315tTXX7vaDRARh8wLHQzVMe7GVBGWzMsGd",
  "key2": "2JMVucSkTvhupEJhS1XaepzehrruaxwsQctJjB9N6Sb2jCWw5jzV22RtFAPmGu4Bv8XDdudsE2Lcm8RKjRg6NbAe",
  "key3": "5K8ZZiqvWsBwhDgC8mpru9mW1kapnvVPbgNyZ4C1CddVkkP7ZMnsPNt8cz7q2Pk3x2MTK9aSRsvyWa8iK5DuCmVg",
  "key4": "t9wgw79mM4UKeNyS5MXeY5a49aFK9xTYMxY3MCLzA7LTU74KPCPd6L7DykDXpbNtv56Q9sywmcGx1MzFcaubu7L",
  "key5": "46oDSaAuSCtezcJe4rSgM9NZ2h9sw6Sq63ANcMPoZvsCYTYutW1yPJpduHKvizAFqjXZhWZpEX5pS8AcYwBU2G73",
  "key6": "5VxtMhdBnahTZSqMLpQexpHeguQs5FTRvPfAeWqxAUsNQcZtYyrvKMsKxQCkuohAej32h4ftXHZM9rsk4t4qH7Ux",
  "key7": "5Ep3NmR4RS5VwsQDppw8WuxzMDcY2in1oTmCfE5AJtCksbmezcE81HtHmijKjvoYgCHVdpTNUknNbKmWvL9Ehp7Z",
  "key8": "4z5DmvRbjtx66vVdfV1tpdALV5X5pEHVERyc6NTypQdimANktKZfhfK7uehKPEK3zrkn25PtYuRq7czry8Y9MUxi",
  "key9": "5FBLkgBwq4tb1M32RjPEm84HQnSvmhGvv2hXeghvjR3LiWspsDTnB9tLj78NWz8671v4cng4mQYTUdKswnVoP56d",
  "key10": "62VDKMbaGuFqvdjhReRKEZfPatKkSN6Z8KK3CBrRqQYpJc5T7qaRjFdSP8ezhkr7jMDUzXCJH2rvdLnWz7Lvhmr4",
  "key11": "5d9BBHGJT1ST9Lc4ie5ZSmE4mUXT7k9pDYJfxGEurjadMUQThCryWVtrvo6GYvh1uV23KX2x5oaA6p7Nye7t4q7o",
  "key12": "58KRiSmgSDQbVo8H8fM8T7WLActemigU9ZG4naB1bVddbU8Czo3aPuZCrAGdMFXjgV6zqchrQcaXM9dkbiUmFcFD",
  "key13": "2abnBGyY3Gwx2fB6dKN9nkaJRRhcZYQMProKvSe2VVETx3Bf7i9RofTwePCENHyf69jT9DTn2e2dKDA29ZHLTsWG",
  "key14": "tBLNcdo7mthRosyHT4xUTvh78m4aKqX5KwnEwpT6CmD1AVQGCkN8TiyXzgfNedvANkQV8pub48YXSuYZneC4Vsr",
  "key15": "2xNSNgPhWknuDbVUpckrY6nPuv79ZGyiMLn1rvQpEGAMZv94EcSNMJ44cQWVhvaifXWRATWjCVpPfvWmqh3F1ZAU",
  "key16": "jwKbDEy4rDYLdm3zao4w92YiKzU8SZ8xsgHtDL49G1Kvwp2z2wH46Bqfyaev4ASVuxDzqbX64hG5E3NhAWN5fWR",
  "key17": "2Pge7pgCXjd3QWGfSfRRaLKJYCfXY5JbivqQPSeoeMLESXRZmLKHzpRynjGCySFGz1ST4nHNKnfFcPDkfkkirPdn",
  "key18": "2BqxPe4FFvLMPRdE6B9SZBSWx3npaQ4WYp2UahWLtNbB8GVbJDepYaoXcuynpV9qRDXNpHVhb9ECujJBTPCsZjLn",
  "key19": "2KEQYLjxSM6HQw6CNRcHsjMFt6rtDeSePDKTW15Z63Qxjq4QqjGBxNsHqL2NgKQPuak8XDfM7QyReAN5zWhTA1Wd",
  "key20": "fJnXMe7dcrYo45HeNfNaUP93jiyY7GqPu3CERRAg1LmBQGJSz5TQmAmDJxfaEVyYXRKCzKvermcaHAeU6HXA1KX",
  "key21": "2RGQHdWtN2xqJPDpNVKWa34gyVkRLQfEF7wfnKvtNtooNZ5fp6YfoRWrVVHKDsF84eq4GrqrnPQPVurbrrRiAyEt",
  "key22": "btjn4aoaSVvmbLawQS9X4mLsi2m6dRk1WFqbgV7faYoHT5kZNGNWq6fvdGmma6NSmkhZg8RrY4bCpZy71UT7JiB",
  "key23": "3Jv68SBMjGETDEnWExh99LQSyY65yBQCUjqC2NzATtdU5Y1RPFi6oJqAepJiLU2FjMaN2HH673hWy3MEqAQBRo4a",
  "key24": "7jtHCw4rWWDrMDtQGXnk6YPz85hSxmrxzKxQBeRLTs7BuE5xW4seKKrVyX5q9KZ4GDaufe5VW3gbm3gHUGDXT2t",
  "key25": "fnUEuyEje2W93dXPFKA78rdr7xJ56gn6u3PvEUerK2SMkFf6j93XjX5Jod7uxjRzYQZPZqrDQKjcpQGVhdHeTeg",
  "key26": "5rTMc6jHYYhNwttpAetu1PdPD31u27FJVvK4g6R4cN7DFFWZYdfmuBc2u7UJWN7KnTnF7KWgvAfiK7xD3hTSequk",
  "key27": "22LyHAWUjDhmFZJnTkHQycstRpho8NHfCxoUyShTuY1Mqxe1PKLZqev52uPp5fx8eWH7nasHfBp1FyvnBFmi81F3",
  "key28": "24t6Gy9QANgJzD6ceRCp8eGb25Ktf2bvK6GihN2vauBFd32qcjeSkvKWKeZJdvDYiak6sVQmRRpbwUTcT6vXbMpQ",
  "key29": "4YcTnz2gTVHN4ouMX28EGiUhd5RysFozxCtCvoGVdM8Z272K5wjYhex8Xo278PTHYkXvYx4nUHeZ5QbZYaHToQhu",
  "key30": "3w6xT2fnTD1Z2qWe2n7CMYgbyM1BJFyrvvuSR9YWHWQHddH9RFsnLCdJStqqZkeugWn5msqxXJvvWBZZDW5e9vXf",
  "key31": "67iBshW66moZ5TLbrhZUJUgiAkmkCyibPH9mw1N61f3e5HxXjhsaBeaXCfnUTcL1sowWgaAybXpT9Zce1CdQTFt7"
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
