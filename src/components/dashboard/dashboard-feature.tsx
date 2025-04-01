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
    "4kt73HeqBsbq6fnLfg8ykKbiVnxfd4ETr6WkqWH2BPZfLzkyso447Z7dtgj2c3pR4vpz9KkFnQ6DmAEMHgEy8rwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61QZozDiZJ9oBqwTiGVRXVx5FWXPdNvqScqM9GeeGpVXrMNS1KmqrGK9faTcnNdoxroMxDpg4vTLfZ1idKJEhZsb",
  "key1": "5bGqMgKC2EDN3Nx3Vt4T1ZLTueh2uR7voF73C3sM6WgCaaB5RGZmrB4vpUbaA82BErZ9FxyTmuDNoBy2zL7yw2aN",
  "key2": "45J5qqXjzfijHjMyGKSfAVFLJ5Mwp7qBpnSTHx2RBfmv2KZaagSP8mUPH3xUMtMhtRxkueYrTeUKNJJbrA8LjCNz",
  "key3": "5SnjzzEmu7DNYMesQYbxZ5cgfcmKrWajgZnbJ7FahWDXKqzwhgMBNb6XeLVEGkwXota6yRzsJu4u4HDgezWQQJCG",
  "key4": "4kFzoVetQnDTkKcwQhdwbFVpkiTnasgfYDDSgJKkeuMGBPJG5DuQy1GnRNoriHjBpzWnWVEkV8nMbUMUaKgVEAcC",
  "key5": "3K4WTFufmVMGFoamHjVZcMEcM2rd1nE6Zk7BQitTeFr6XsEAELQYqZ7EY4HQqe3FSYfVSjBArLXpqhKop2BecaGq",
  "key6": "2WrRZ1qfKjoz6vsjtmCiWjm2RJvrz331epjgAehEAnu9qQ44JXerJSRT3PmcgcPGEn6BrLtdh3uJeqMm4y5yL2kK",
  "key7": "5RCMcE4ffKqj6THbchRiw7jQPXFMi4cF6tUsoNo1TaPo1UHCUeQte2xXxTUaTTPaKXoohxCpAZFCH6k3SP3jZ2qX",
  "key8": "aC3YeHwtXduhMBgKhaVEQDxtqVf32hN7mvJJjPLc7Byh6SoL55dWkJF61mziVsXSGcoomdxh32EvRpzsy46iJNF",
  "key9": "4E1XTxxof4GwNjxZCwWHuqpjScbeA8nATHfiQH3Hpt1ob9hxFnzxFXSCLaWNwwHnM7Mi8hHoJs6vBuyRKSDoEaqk",
  "key10": "3WLGAQrZcEHFdCMJmAPLEZXCf8JAQecAs2X2DdTzAyg9tRno9rRLLAvWYeZ8pdeTsCWKkjjJdtdH9nbPdfJom8ok",
  "key11": "3TXW3kpiXofWyYS86GH1vaJfWTJExkKMCcwtDRNgSaRMVEzGWN5WzcN3n6QTNmqnknM2PuuNQeUWLbRobQQQA9wh",
  "key12": "4ZFVQTV2GRsqSywx5Q17qs69QF4k1SjMb8GMNaMQKj7bbwRtCYSLuY65eS7P2mKZ7xLfqbwvvoim47hKBf5E2HDU",
  "key13": "4jyiTcspBYr575YvNo48J6QUumJs6gTuM4U5cC5zgYM6qR7fCgvE1DsXyxH4y25vPKevW9yJ3Ke7kfzGnrNUMPLd",
  "key14": "5x5EwUHgGSwLSAvYjhApmJT3JfdRuXWntkkYHRvVY95WfXgNZMAzgHSEXXQ5PGgTVPotPiXuDHM6PB7bYgQhjBwa",
  "key15": "41CWr9iWrYPYJ1DQzEAMFbBbPxjiki5TynysaA5XTZPZdmmWdq1yrCA6tpXQCXDb2pvpTe7oAWcFptaHBHUMiMoL",
  "key16": "5CEd5jxdquqp7wREq5iVqZdiFtbMgrEcKw82zp3KmnaKQk3wgVB5N1P74faV6SdbSfEL9uafmDhgaSqN617sc7Af",
  "key17": "5LVbznfLg9pu2DcDh6PbBdufkUqfB4JsKpiid1wXyBvRdoXav2kKHng2doaNExrUeozK93T5SDTw74ritkB4z94t",
  "key18": "3m4nbLuAfoQ7ncXWkz3AfgebYECKgd4odovW6xVMWVwuZUX19ujM2j5xgxaFHr5nD9cgoWa5wXasfc4S4oWfkFDg",
  "key19": "3LVWVv6HGhLER3uvn7uXUsfzJxUJbuDkRabc3wMS2wcJV1K8D1hMentgXmxnntxFLBUkYVfYttWac1GbwpCiXa8S",
  "key20": "okE37So6gp2NWPhgqvUKRqC7hSxnbCMCZV272jXKzBY4mdFFfALnPLrnDcM63g9L3yw2uRDTuojbbDD4BN7gmgy",
  "key21": "2p81ZmhtPnmDoHzSGKKgSHTom9zbUF8VqkmcSoDvL9b6Xrk3J3Qe9TT1hBtYDFhiYpB3NUWzPtgAr212hGsapRNf",
  "key22": "2vcNoYrEeWZe68NF94kRZ4qDXQCfYy5kEBXuZu9eMNTQ31sXF8r2E4k2FSBiS1F72Wo1f3UVn9vdVdeUCcc3d6aF",
  "key23": "2PH4fSumpWLmA7XHPnRUQD8WmwYCVFesn4fHjfHqtRkBKPhrk1m7ssGEQsPSwuvQyQ8CPKEaaxtXzDgRSA9iMkSZ",
  "key24": "DRkcZ27Gk29c6gPjSZJ9qN2cj9v2ofR8cdXJzCcCLVRPiUmDtMkccekpgNkqg7xARoHzX6H9YzrtPKLrFmgcf52",
  "key25": "3URpPYjF33GBeXsaLrQopLqfKPjy8SLoEjYwpyLf2BZt4JezLz7ED2ELMNXeP8v2WgcQAUmZWJYHWQHz558nZqnF",
  "key26": "U6GKqqZetFxTKgejp8nxRcdh73TMuxc4r5Rz9Q93oekfAepsi1xvxWLbPtuuvY6Cq673ctbCNDr7nFozhpxWgRu",
  "key27": "X169GdGiZvjwUiCeMMEVJ5dWXRNnNwpMUenyWueWZpUdUAhzgoxAoXZnivh7cn3S6dJsw9hLVJ4Qkd7rBCZweq8",
  "key28": "58dZY17xYKWBzooeJMrrYhe8hrTjALRsNaZiXkofQpTvEk7dADaY5yChDyxwcfEbKSLhANJdo7xN2dzEVSanoeAT",
  "key29": "3UaUuNsMtYGD6fgWL4mTZcGiSqbd3AaaKHPkuqGow5iD3ZwXFvJZkRVAmnmWoksxERrxai6rqo3gPY8Sb4QK7BD7",
  "key30": "4ewZuZZFGMjYVR1roPtFCzSVPxLjLE4DmERqeBPKFohDXJdhRe3kmxRrg3toz4hx27ZpkBmGsPp94dAcowvos9b9",
  "key31": "2ymWC5Vp2pSdrPcSmEDh19vesX1yoJdCp7YSbyhdQQgkof9Wg3JJtwwpZPqRXBvVQ6Qyhro7DjMhqEFm1cqjwXfv",
  "key32": "2Uz2pSoJXRCxHG37k7xbqKezmHPuvbxRkPuHS6Egwa7sfUs5v98kqt8a5bJYSvsMCmNkuaJdx6rGJcNJwnnjGy6z",
  "key33": "pix9crgsvmEbmXX5PSku6unvjU3R5C5vnKSLx27mAfLfFKbKi4WYrMuQtvNALJfVXW3sGai7LLf2bskS6uTxrPY",
  "key34": "2xCdrLUQ7McqNPLDipwPtNhGUE9sqvtLd3TCwcrFj9omQ2dEsb1XqxE12iZNzft7usfQkMmz8Duj6gGf3STmk2Z9",
  "key35": "2Gwcd181U8QG9EPyAKUbGtvPhiVYXDSY8R21JpF21xNojwpwzTnH2iwenG5QBoaSh1BcPPXi2hrc93jjh6juYSPx",
  "key36": "5473MenpFeVMT2DRpNbDMZZctp5tZzrdNmQxCAbAegXV1UNtVETfTezjQKmUvGUgBNCjY4gEzDXxDudMCnUJpKmz",
  "key37": "2N8tH1jHD6PbhdeXnz9xiuenwYfhiugvYJC9ZdiQWucwL5hzXpJi4XeRnvVs4wzeN4W6H6pu9XQG94euM34tjbQC",
  "key38": "5ebE63fPA2whRNF7JiX7D3b6wjbmW6hrvLSGaUzPXwSFjKjEZR5yyA5kbibQyrHqqjmmjh7wSFmvFn6Uf423m3y3"
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
