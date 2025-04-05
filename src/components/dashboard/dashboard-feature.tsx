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
    "5tsnoFiUaWYzDxjfwaHpJzTh1Czde5ivXZ3ZNHZPD4H63fn2RasfSjacVEp6Hr9LJ2HeT5GN42mMDy2weDmhHp5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oseL7TBECxAAKtxr8B4GG5fhVJaUWohrdW9hcf7yJTb6zFZsLaDQLF4pxYrrFQAU9Qt8vu762ahqMVhhdFvkYAq",
  "key1": "2G77Sp8sgitqKHNhWDvg2Lh4YXaJtZM2gMZEuBuGsK5tevCHVz2LZGCy8uSmyMiJJj8JN6pQUabqE5PxNYntv8yB",
  "key2": "Xp3covSBJ8gmjd73PM19ecSGUxeNVPCNi7TxJnfrVwCguCsXzrmhg9yMwBPMmcghxszhr7nscvZyq1cu59JF1NE",
  "key3": "5xoXg88DY5NXf1ueAFYU82P2iKgqDmqLBDN8fetY8N5Q8VX2Go5FYMXaZu9DBkpAxSeEeL2becuAkbbHGw7FKkyS",
  "key4": "24JR7iPJQUEmrMvwWaCU486YvNjnWZZrYkgrhjeB8QM4CqCc3w1x6w81ECRu24a8YMFLtBYqWRNUwNwUY64MLq9u",
  "key5": "VuA2iwqHayQxeYPQZ5gyBgoYpfPxMMPWbp7BtuMFyphJS1xjSVKqADYKETuH8LzErxMLLHChyyKKUGUivSkrzDA",
  "key6": "2aSwLqxc6fwP8xsqPrYR3nnhNDrsf1P8bsDJDJL4MCn691AGKkqH28CheaHURBwZJBUedH7QecAetgt5zD3gmZeP",
  "key7": "3Eewr5hVs1oML6otEbiEo8mMNyv9vJ8XR6JXXbma5aYNXPc9cRR6Vq3KiT46nfoQPE3VrwcbvevtmozvBM2JRSwM",
  "key8": "5kG18yYLZVKsrXRrhjkk1UX33W29Ls6P4BXKj2ivxeS7KcsQXGHmT3Bvu79xbxDeHX1YedLBwi2yBFqKU3ZGrN2R",
  "key9": "2qh9ipJ1TS5n8ZDHNCmtT9DSJS92HqGCQ1Bn66ZiSMEr46Ra7Tf1749oJVq2mLrQivbEX4qoEi12FW2ZmyVk7Paf",
  "key10": "5RRDRf78uoDmfzLXMf9yW4Rcwkmdirh1TN512JJWpnsCfL5bg1w9RHUoNCqSv28aNpVLtVHZvrsB5yP4581os954",
  "key11": "Gb4B4Xtwge5417pRFg4BcaHJhfSLVuYKV7QN7H9GEXkaubvMoPWWXiNR7WSuuJF4h7343QdFftdt7oGdjAexbsh",
  "key12": "3yeBtpKqv2w33kxtaeBYRKhuQXvLacWBDfMyH2yuD7tvvGD4qu71gUs7qAn3GQVRCTSLvJqPh6axb5pEfrEeKsma",
  "key13": "49ckWSSrWSfSsukobGGL4Q33pw2edw7kPFWbbt1d3J9n8aEMhhsaiKrUQMnijJfCac6A5tJZxb3mAWsZpkXnPtni",
  "key14": "2WcGTqzPkoDjXXKSTRxEqNiwPPWi4NG8U5F1UzcoBUnoShxucbjm3MeszWRJKqKTU1UCL5AFxtS2pT9C1TUKJVfo",
  "key15": "5hvt8GY34gYg9qrQXb9kxa6ZXGXsmKbYAfY31QG1pYub2rHaaqt8q2WkvDnf9pLhj3AQi6bgWnrV2yjq4ruT4Mwb",
  "key16": "2Moho9984bqruhcrJjB8UQcH4rkiyNw2zoyWW7WGekR91GpWh8UtGzt5mg57C4aG3RThqBbxfq9zyWJ3PbkWZBEH",
  "key17": "2ANcRUnXXtNqEnmzHaGhjhZXsjhp3yH99RUnmkoyRM7BT65P5nKBiDnhMnsMS6NvmaSv2f5sohS7CUiGfoJFknzx",
  "key18": "2YcbqmiV9wdCwWLvmhBM1qHp88xPcALeUK1JUPSqJCmwzXS3nA4UKvtppwmUkLiYyQPahyZbHrtoaZd7KwYoSv5j",
  "key19": "27yTRNSR13uBYYFSGjj6gyRQVUiD1Teb3kFMNNQRsuKJvoNVTeB4xqJextb5ZWnntjtmAVht2zMRirugsrKjcHZM",
  "key20": "3ivVezD6dxdPQ3sEzwphpKYZojXrRt9Gi9XRtCACBPntaRTNS98CF6hP19Ag67zWZDDfgeAU8iewgiexyhpFMCgM",
  "key21": "35G8MPZvufg6sxxcR2qEwg3swJveDP2bRCthEWKuKrqMRg7YwFKGz9dnX99KJ4m6CH1ZBrBLwsWGaSRthchNoXkz",
  "key22": "4JZvYdvcwKnex2XZwxcqmZ2tAfwA6Ad8w8rNNRofYbDxXGs8NFKCFoCbEZvFNmeXC1jMgtRbeuTkTQbrVPEqUojY",
  "key23": "4m8ArFc3ygQyrAFTA8JhUngqBoQvTQxgJ19RCZBrRcaQK2FucRUR4TueqmhB6J54b27TnS27Vx2aLYkH3rg4rEWB",
  "key24": "2KmgEnzEqs6bES3yhnKyzQht5sxgrFyqNKiSutUYjasdWPe8fPLxzsrkutjs13hCb3q1A91rHgwGYFFbpoScMyYe",
  "key25": "2TfeUECKpHnLugFS6jrwCRkeVLhaS2QzSTg8hmZ4N8nedkFCMMxJqW3JcvKjM8kCs6xeMAvz3sFK67tFVSV7UFup",
  "key26": "5ARbemKcXeiWvL3h78UrzhcW9YxG25RUbmUV2tHv5birxbiWvPw5vmqzEgmHTRy7fnSXKjcWLJdfbanDmHBhfuzv",
  "key27": "muqSb85VBe4RXe7hCB4pPvYBQDcrPemp4etZU14hmy7dmh8VQvLyLMQUd4k8S5q8R3Cfp3AhARdVg6L6Kn1VGFr",
  "key28": "54uNE2DcSZamY8NGCePvN13bTzkRhKysVhx5dVR7K9tkBMM3tF6sZRED8ENYfgT5yjFmVuQdfEqNprFbunCFF4uu",
  "key29": "5QL7hjWMNkChhKH4cbnUaHiHm3WRrMmfzfBV35iaYqRSSzepvyXAPt9BquA6qhxG9P17xZntNyTgVW4jiADyWY8H",
  "key30": "27bw8KC2QFMEqqgbM1JxmvJdNbn8sZM1qkCp7psNwN2MEwDxaBxjBBCz5rZjmEBiiuyJoxSU6xBt5vhtep4xNqnq"
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
