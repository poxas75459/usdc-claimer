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
    "63kxpKsXAUvdJNP6s8AChkkRaZ8cioL5GF4KvVT6CRfHtcQV87gCvmnyK5xu6vHy5q1voUfJXuJ1TUizu66LmDEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XyavKKzacV122PXzjLzt39fpaX7hSyd5aG3sGhhsFeRLMoQVE11W65rPfs4YAWM5ZUJbW1EdhuULvj7b2wQQS3B",
  "key1": "3xEGG1bLPRXUWfNuVALHwizTi6xshfnmuvvTnQAP9RCRobFy96cQS7VtGWwA3uTBWBedunGf2EnxGfqCT1th4g2o",
  "key2": "66LB3yFwacrpu4siyodBoo5z52XLdc3Efu4x2qEeFECLJySq5ZBSrvLYbLau7k4MMTvKdTGZRhYwZ84kENwMWHuL",
  "key3": "2Jm87YbocbX8zoSgnsTe7oYigsBeVfD7zPd7WdTg9EK2PNLW8ZnEvNmJtBZL4poH91PTiYtAonskuFZjWNe6JUhH",
  "key4": "5jr7xhF48j4sf4MUQdSxAr2dTdDCUdGH29nnpM43T4PWyqTfPQ613QVTjUbL1ANjxAn1hVSKwBwLWrTycRvf6kQi",
  "key5": "4hysqSsE8G4VwiFye8n3beeaEe1asx49EUGw5bjnxZLSsPTvCm2TbZD6eKEk1ZZbUBtBCGKRa6Uprqqzo2TTPdib",
  "key6": "5439KM8MZ1d1YPJQfvADiFqP82scNV6xJdZEHTPQZJEgBiYqtHC9jArkzzUZdPCZZ3ynCmSq8Wj6GfV2Fq3LefXr",
  "key7": "nQEHD1rZgZX9n6p5nQdZVewX4yrkcTv3ZtiqjibHbN6nH4QSAD5eAiXEkfjAfsts71Rb487She4QbFPPahFNkZh",
  "key8": "5ikZCmuac8uGaBRRJzj8Yf2gxJ9uHc98MxTdpeKZLiVkEFVebaZzN3WQNwr2gLpN8UeHUbivD6GPo21YJJroakK3",
  "key9": "5jhgrk7VxFAJEBGHTmP43QCJTddDcdy31nE1EsTj2W9FNLwNaSi35255EbAactiVuppPHFVHUSw1vjgT35a9s3Sd",
  "key10": "2PA1vxGn4RysdcW9AAYzvxiRAa1DvjynKTBhyj6Vh9xfRiQuEDFKWRqEQdbLwVSP9rkXbDe7LdxRNhYvC9d981AP",
  "key11": "3ZnfCCBLyVV4fdKWuorNsJgV6Azh83q4kQwJsd5Fd77cLfBuXMwr29bkPvB4oXTMNqAFMZy8a6yHuvzNdA5xhrAz",
  "key12": "5K74Cbn3rAxkphgB2pGf63QGSng6NaDg2GGB3dmLwwiwdPf2b62VoQaWzzucX1xv4hm2PdGQQNfpJi3FhAeyxVpT",
  "key13": "XHop1sCyJxRAmecq39EYJpAYvqbRQkwKF4f8q39gqDF2v7TiV1bJdWh8s9gyEQzBjBoDbDoPpe5HRok4WsAhKaK",
  "key14": "5HjEspQH5wCJrHVhrG5hXMSeRk8Uh3181d1TuC2QQdntvU8yPiDZcYAZKPiTdmipVrhnrRKomJvaGwyx5mYYRbUr",
  "key15": "3Bc9nZSCNhSjaJ6KTUf3SpHjiZkiajaTbKyCTnFERBtiKNgx8nESVbuNEDSEuu42dovEGGeQ7LnhXZWntaaZbe28",
  "key16": "UZTsbGnDMueC29o3ch7KnaD64hw9YZwgiUev7Uhazc9aPXjKVwFobs7nCXBHgtZuf7c4A34dZ2Qu6gXC86AhHPQ",
  "key17": "28BN2Lg6NxMWiDTWpNahwkRcBVbbjLX9Po5ctBgQPJJGuGfq4wP5Yh32yHW5R5vR9Xcy3qJtW19EG5e7mrQEaDFD",
  "key18": "3FcqLtBfHufD7jYsNr4pjTLq1p8Qg8uuFhiFqcoskBKuLbBoSqXHBarze2sUjLwZ8rTakrNj52U3hXnsah9j8SYA",
  "key19": "48nsKXfqmojdRAtT4K5ietzxsv9kFr1GNwUmErKJ2SL4iMfeWH5mEpXakTXAUvLF49juTtXKzVZHVVShwuYMatnN",
  "key20": "3taFKY8NnX4Hxhd7z36x4ULM3MRMk4H713LPv4oYJnAhTMvpdYQtt5kDCk5mVdLh69XqbSYciGE4tRwsfbtT5dS6",
  "key21": "HPGwkT5EQfZQ1UfbBTUaj8iZGb3ADCjF5s2LN8YY4TU1xMwiZ3eimMRsDkDyiznZYGzdwHsGmwsAewjVCvGMWVk",
  "key22": "fLQizP8QG8KFTZGxhKuhBMzH2qRKpuwFAJ3rRYZCpw1jUXPbLdsfzNUjG6rmhYX4Nb3WvW1hdiay1UhybFSTuA9",
  "key23": "3r7N6YN7k9QhJEsE8bUpTZM489FEbWBj1GrbGwBtqqiuh8ZKanaEUggQJsLcqBdkpDvmHsf9er6s5rfKm494oKDe",
  "key24": "2taYvxtUAmoWvwUVuyYD32zqhUEGNdE8E1QZR7MvdTMku662n81nr9pX1Z6B63kve1zmgXftJFmGv7D1mvrrFt96",
  "key25": "5Mw4VqYUffC8BWf9BuaF3vqXKphxu3DVZgHGqnebN2mgEF7d5XwXKjEULZcyBghbL2RRv1E2bsjvSh4iXmfoC1RE",
  "key26": "2aznsesq7dTr12hkDZv1mwp1YEvj4suhjHvnXrpUqGXL9FxunbuLVTyH3vDVAPFirjMJqPA8LkxSWeqfNQADX7yR",
  "key27": "VzRkJPRs8KVrDGRpogj28APdKeRsfkcuDvN3FCVgrSqjdypCjxi4WVtTcYE3GKjSNnXRDZWSxEE7amjBboxdE6G",
  "key28": "35Wp7QK8dDmkK6XdoR7jdUVk2EVTZdApUNTHrqn5gXWGfK2mXU8JHJABLaixGBDo2HKNG9Fc5JgXCwvyfiABfS8B",
  "key29": "5Ydpm2fyhD1WzXWZNFhhCELNfcwzpsm7JLB6YrWyRVR3KSa9Kba7Lw3QsMuUHxJu1N4TkPeSJSi7BLjVYuTNPY9d",
  "key30": "H6q5vehPSpGCfr8H6dxozNJbUbfpH7hoBZ3nSbLG7XNBwfMkJN8Jv5HKntuYN4u3NLqQFrSCFwTtXMquXHtvhtv",
  "key31": "4pCQrFAnM2UK5PUeJQU9nV5NJXNQ8d3uTTcba4hRwdfpRLc7wM6ECZsBK59CuSY5dW8QDeeRGeWF34LQSPvtbsfz",
  "key32": "4qMZCQNS5PwSqeq99Sm53XWxjuUCqDHKiXZ7RjxFvek94woHqg9NrZUWd4foLYRGn3qxPnA6NJJcNM8bKfpr3gop",
  "key33": "w3xefYT453YoZwkL2DhPuVQ2UCp8FyygPh3qPEeirSMfNFUhnexTK96PtTqE1PbP1G3ANfhBRfG2TQb97nuNDPz",
  "key34": "3znt8Kw5hZFkuGSMmmsqBsK7NxXyzP3NdCUwvLtehHYdWo32aEp1YVEKn8Tn5xTTRuxwr8muabiBPDvKUghfBocV",
  "key35": "DEbL9Fh8hivcBAS6QFK2kPqs27hbJn5VYEpKnY6kEjVaqCFddvgFmm8CodrQJtEXeKynzpKoMusiXgzoveUvM4N",
  "key36": "317bGQGpT9bsZLUj14krUT7dKLmKgoc89qeKbeymT72nUk19JKZLewtf9ZZYpXMR6jezMZppXYwZg33GS11ZMV66",
  "key37": "3S8Dc8Hqrk26E2e6NbKV6bca7GXYbjBXtMHycQ3rwTWUn6QfV6M9hHC5jkgN37nDnRZPdWkkKbr4QHRjuckjYJFH",
  "key38": "5nZrZYmQm8ZL77AjB62WXZsPRaEgiepXXyBd5KwKWmE2BNdXbcoWbiqijmNmScqvwbSZnAJCZoGpUNYnHmaN7LTB"
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
