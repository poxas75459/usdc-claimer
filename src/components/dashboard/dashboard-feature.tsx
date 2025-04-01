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
    "58P7KXtTZ2Sghhd4xjJ6YqwyPs3qT61EHzhHHfgX2rhLtyHDwuJN5WRqcpMhuecfTCeHTJaxH5ygg9Y7G88RHptS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MMMK8mtg3pC3tjz9ZfgmWSKMvtACntdtvPntb2Yc5kAUTS8Mz4G1HvU7ERoXkE6LUZB6JXy1EqpxLWUAv2PcQP5",
  "key1": "3S3EjBkGuoksNXFx9zo3eAibSwUHNzspvy2e3WCvd4VsLtVyb4aCZwJVERSvdxJPU31AafXq1MPZiGqQPmq9LXbJ",
  "key2": "5PmCbRP9VTRxLoajtwNaojreJ5DvfpBmPm1NG5y768b2DCZJ1pmovmYPQWSzGUrgEWY6V56qBDHPEUCXneyV4pZh",
  "key3": "tWdsK8HdkGeH9bZ6wogRQWmedJbn22MPZyeCwJX54LXGhRoTT2249ZZGB85S8V5D2aj39NMjdVq5otc62QB34YC",
  "key4": "26u5wRT2Z4zmmRtLetidwv7cCE3Hy9a6mgbuUYwuhf2sXzHEQuXuyCjDUXakeGYu9AqMnBQ8c8dkFQfGKCT473Au",
  "key5": "4mQUL2hfi114J3qJ5ukNVwHgpZbsGN6SsV3XnyVJ2Qs7vF5gbWH9Dj2HnK7M3d45zoHHo44iHy181CeqbBk81XEH",
  "key6": "taeSy1pu2deetrsVFhNkyzo6YRHYS4h13cYRkAXeTbDUe2kMYFxCjJxEPstbHc3XLLuo9wUGcZGwFN37YEvs98f",
  "key7": "3cLYQ32yJoFi4pPKzu2juXzeTH6viiC2MFyuntvJtevDW9UAs4Wkdp8CRd1KNQr6YPAtG6njQHEjxfu6xn1afMs3",
  "key8": "2QhCuinzg5tKBYkkdDRZd2NeqUZv1Cn1fH1U2boMkfA4rGoMZPwgU2DPejYJoyKKhop6NA53SiqSArh9e6yzjb6g",
  "key9": "oUiAW946nRtgPpcVZDok5oGBj8CBqW8RnwwCYH3gVvQ1ciK56WYFbKiX1GUJa9FavVzJqho53nZrQmgz7H5GWLe",
  "key10": "3eYEqkZt4r1wwWbUZFas2PCuhw93f6JtMYgd1TR1drVk6aqHU8nX9GPLbwrdeAyZxgX89LUJ7fj5Ed3Arfi5reeU",
  "key11": "5BEDbTxrUXRLfRvw522CGi9UX4xUzUaGZfW2kyas5RmTVDoQyWM37tUVn5kiFHXDznwLU6DkFxVjirHJZc7SvYLT",
  "key12": "3tVSVxVBAUdyHwYzz9NSrz7FUagBVZnTCqbwNpf7ves3TGqUKLpVuxnP9i4HRz8HN6HZ9YE7tVQqSqFiyyCpvETA",
  "key13": "2N5LYB6gQ9GT58UzdpGioBWrFunwSrxhtA9C8cq48ZSCYkhExymZr6BQ9A3Mz6TYGFDQsXRr3o4Naae3WqtSvjBL",
  "key14": "61khEXhVc25CYxd9FJSoQabnSK1QpVCvmbohY1dE8LCJhZci5tXYryBHG5AKSbKphEZazMg5CQGwcmB4QyMkX3dL",
  "key15": "2dAZFN5ok3cuS9pGJqcW9CyKmqhnMsR7rdb4gmPQ3NBJ5ZoaUyMgnnw84ZigziB8DrhnambhFKLEfJLc4ubQqQNh",
  "key16": "v6Zf52V1ExTb5kPmpcQq4RsvuwWnr9QqwoQVJU8c7zGoaCKi2dZhQco9MusaA18sT1cNeqCMBnnAPtfNag7YZe8",
  "key17": "4fWnpzYNsYBy1LtQ1E3EwA9LcUNSH4hKaZgbdxbXSec1nDNFbDGpDHgj6a55y7xjbFJzWtzsoZjYiG1bT9hTVfbH",
  "key18": "2DX75sfAwoFXTJu8AtJticdviNPPFADzRBCUXrZNyuHXr1gjLAoDoWoGgoikzGgbrd9YdGFjCf6zZBQoc3T9pjGN",
  "key19": "61jkFGqEqNZPqSyCzBNbSdeB8uv9x3pudZqcdLwGAZ3VGoPqKsgRb8G6WFVLj8Nn8gkTVokbDKjzAjewhwqCJCBc",
  "key20": "2YZjxMCsK4zjyKC6grBFTVnuTrK8HNZnAppVtRAyunxccFiP6fYBt9a8VSbDULGZKkjghbENHdaVBXPvBaZFwyFX",
  "key21": "5y3bUPj29GCR9gZDmc9FRRexvTQiBZBgwY2MxXcXuWdH9PUC5BBAYcb58pkUbqd2hNdrkhT2zzTphnzUhYHKxRJE",
  "key22": "EaTCEXraDN5cPpVUSSM8Bnxpm9UvJ7bN9tHJTmzM9r2Q5GCJSr47usVU2UJDKzZuj2cgYg42CggRjMPNa8PupyQ",
  "key23": "3nrELZmN5rNqnQME3J98Ct6RL1H5ZP9gh3Tt2NA6VTq9ZqNsttPT6vCZnJ4RvgRugDgAUjT6tyQvycbXexUjPEeV",
  "key24": "5gN3vH2Fs93MSudZa8uVtkWjDfpCxEzqDLPvT7tDcwq3BDH8kCAKoyNBmxBtVB6pLajSZcsH1eKRPd1eHxJ4dSyQ",
  "key25": "5Kfa59A7TxdCLu22RX3Vazgu4fZEcd3saJbpFJesqcNmTTnjeNNs8zxMquRYzXHebbmPW2PNAGUULDRReaFhWNtG",
  "key26": "3R7pVZ5iqGy5UvrJi5bS5hfxB8DPk5XwyVZBrQSz5Y4iQ9Mafn2Bw3S2fdjG6gqf5BPT6x8D2AQNrfChFnJHn3AE",
  "key27": "jy4eSJaxwu3JNg39SJnqrqaMP2z3xMtcoFV2bnhLPpgAVhSFwjSqAc2yxNsx3BLUULgveoMtxcuvpDT397ssRao",
  "key28": "4B1BdSJbtHbDKzUKfTGUjNBVN6BZK5pgfUfnqXRdwcPHjbbkkkkVwN4EjuCTudfJ97JX3mJqafP9z21pWtZxbTDD",
  "key29": "2wVnJpTJ8LMQEhk7yXsTcn9Czwhty9Nniip1ZRF1Ye2XeEq3AS5gt8U4im5mSaGrmUQUBpZQ99HdbzsikLosDPYw",
  "key30": "4d5PWkZiVMFeoixefPgnEKWMc1oEGTcLJZjJTcYP6MLcMHuz2UghnfBJEgNoCpsncdKSvC56rjbCtoSbkMRsqNBF",
  "key31": "4VUTNPSVpfNwQJpyGADTCpdQxxQM1YSWG8P1WRFiwZsD3nxc8mQSigABEdSiJQbW1pLKcjbkpoBx6QbC7CcGVMpu",
  "key32": "3DxdC5mzjJVDjLAcNYSnorHs8utBrmE5KD6R8ufN8w5gkNzo84c19hZJJaVQ6urdvwXxcBgeBcpGzfj64wCw3bf8",
  "key33": "42e7dG2dvcQz7mDsrsFo8G6FatGHZfhRdwYa6QqCrXXXAoFBm6KMpntn6hCvDnvoCFG95EPDzW7Xckrr3G2bQMY3",
  "key34": "2vYYQsauMKvQMztrJsc6qfdBiHubKeyxqgoVB1wyKwrFikpXgaDkinBSCdwiwmhs5b7eqw73Q7B4DEbaNzG5wUz5",
  "key35": "3rqv9Wkpe4Z1aVKzKFTc8PH13QsmRf8Xs83pmqb54A2KxfqhdDpHjpG4WG8J279hqcRQHbom5x7JZzGy5nxMUQFE",
  "key36": "38aX836jRW3GQSfrDFNTf66hfan3ro1PNBRxWKD1vfH1fbN43LajfRy3EYxQ4qZ3W626e2idiYztEnTM9MdBQR2a",
  "key37": "5fq6P3TsDZWh3Vpg1g4cFVYUckgNdhbUVhanFLTbys8cPyHMgMLLdhLnkJ8yx5NEhJEWLqAN2JeUKk23U6ppmbhu",
  "key38": "5Lw2Ybn5NVFno9Ha3Ch2s8yAvcSSCCX9UPnhaLy7MxJx2fj3x2mcjWnbQ47aLy6weqVSxDN4doAAVT62P2poEGp4",
  "key39": "2RCHHZaeJEMjCxZ1wek2hTG5U6VnX1qaACf5cG8af93e3Mdbbu4CRS1KaEhtzvcwdJ3Kr4Q1mpkGyD1xJHdt6uxs"
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
