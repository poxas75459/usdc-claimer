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
    "4pZBL94YTTvwQJtbmRchBuYFr1CamFBxZVfhn5xfvZzPgKSbzJCQWmKfF44W6ZYYuyK9P3nMPSMo8qvvWAsQtvGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7tSaNQbSMzzMRBxRC9ht3wqZGhHPMKgwpVePuaVNBazmHJgY2hMtkV8J9nxs2kcxkeHKXDLNmx5NDQqmwMoGBEE",
  "key1": "47J2bUngZNgN8wC1TA7AV2PfTNraYJ56wHpS8TzFJ5AaKtAnQHQUGWSmhu9TxgQFXMdrYW3oDXTo4npqVKawc8eJ",
  "key2": "5ni4pZsoG61s6mZbovf2awZtxf1NhE19ajt5AbhRqnAjxbcTFxvSHSAoSPRggMzeTbPsNGBjPR6cAtJWvHB7636z",
  "key3": "2FFcD19S8DHN7cmpS2Vg6aZAmH9GsYFKSZr1PgG7eRnVCgK18JJhBh3PfhhbsU2KWp63nU3pg47v3nPtuFbEGL6f",
  "key4": "4TjD119AZRvVANtXPLjzQn6ySbBwngvssRSGrw2NtgeiKyJo8cEJ54je1PHHSLLRHFznZvMGYBDSDTQbbnBRz7tQ",
  "key5": "3ntNd9M7PSjRafhquXLtMFWjcj7JQ1nCdt7YfsqFGEUaEm96HyB8UCx7w7PEZ2hzoUSk6aoLbm5xqvRPtRMHakAG",
  "key6": "3prJFSyjaGaDaDoREdyBss3TnwhTuimL2Moeqrn4c3Fm2ue7vPAJtSzkbNbjN1EEUyCJ3vsxoQQdHULUWBvMhi9K",
  "key7": "3wCvaM3QtLGZnCfc2L8VJH3ECuL7iMf6NhaVFQPJbNg5ZAgVRoHTX1Fy2a3wWcyvx9rHsm3MSWwTpHeme7ZUyWm",
  "key8": "2AXuTqNxDGuy27Hx1tV3vn6YX5qjbho1LRDLCZurf56LfFJokC7S3TQFJkswiWP9chpigb3sd6yo1TVv66jx4Ydc",
  "key9": "2kuCDVEybotpikWXjybyQ5EYYamuVuD6V5XsTdh2PCM4J797tGMPuckWG2HnNopZ2PQYPCe1iEpN912hSJkq5uFt",
  "key10": "4S9BTnVdqqu3MGHvkmuwvjH8Tnx5a6i3YQnBJVn9TF4Fn3QTwgSXGdemftc8vbtxHtnoRGSgRuTy9XrqPiwj1sTB",
  "key11": "kMdJLhkwvCvEPjRvjpZHP4u1UJ24sfDtS3DRgXAhH2TPrczaMhhe12jVE1b1TKS48oC2nVqp6HqwY5Wv7oHgdh3",
  "key12": "4FmWJq5yQjoqV5ZFjZY7Lct9aKCdbRXEPaCnUALYZfKdGUjbCFw4kUhnErp6jVqQoowKnkveSy39FAME6KP9As6h",
  "key13": "5PYkFkxsjCoxAqpRG96JKdH25LcBbLcr18nsKRdTVgzRDTgencdoTLgDrmxKvDyVHehe7eD1DcBwsuxtb99Y4tMj",
  "key14": "xcpQRvuDsieogstewR2m73QJ5sok8docREm4i6enqf9vwR5gkTAumotktneXoJjEp5jzHLFBmZkrN5H4fMD4vy9",
  "key15": "4gx3qMKcGdmCUZR867os1xxCbcokR7m88g1yKRZBX32mQo9A871METkMNRMyf5PR3eHeLY4tbnyfH8KCKp1HEUno",
  "key16": "5jdDWWmVZgTtXbpnFKCLm8UPUcZGeYVuiwvj14cJhRWQbRpLt79msBjU1LR6HXT8okLazMDDQAzexTiSRq8v7sxP",
  "key17": "57Q1LVtrs3dACPgLs1yBVQqySF5RqJHxUgamU9DX9aTHUURjNDtrWQkJcANVbMw7Ho4fBpy3vD6UURf5f76kgXqi",
  "key18": "3iwCroyDSPn33Pf2mZMYt35BeNRYKd4ibAxfnLvbESmJ1qgVAQ7SuE7dxT2J9vuiCapBpX2HwpUogEypaDfM5mmE",
  "key19": "49QKXdJQhXvefkGvovDA4Cjrj8qnvZb2ut7q6a55C5HZdjJ88pjVRH9htBmsaoBPE9Ss6J2MtabY7Tsmt2RjVza8",
  "key20": "4Tkn37nMg75VnB5F5yJ71aUMGLV6Hwo8WmhwD9QP9cEg4Yeebd9T2ccQCL8KKseRTZBkMCsojHAPWroXQ1sXXuhW",
  "key21": "bg8xGxTAaN7sdtr2e6FFAwsnMRZyMbVEoFiutMeZfNC4BJ2RTw3xju6L5hN7BERXufUVXv7GCk1u7n2CoFM4Dc9",
  "key22": "oJTT6SLkF5Jk5DbiBwRwKU7Zfu7WSpB4VPhTtaptJWCZbWceyJ6cKiYErN6k9PPxUQX1mZC3okKLszBPQMMgCJn",
  "key23": "5ZPijB6ej1beug37KvKzsBc4vymDqAhc4yLNmGm9aAZdp7nV4fmgw9Lu77jbuNhLiohV7GaQe7UtiBEVsmeKS4g3",
  "key24": "5xRokjPQLSbpZFzfn659KjKhELYUnHsGoAQjPQ6McV7B6cSvmqMX2gyaKgNNcQA3aFp9LGcvkvea6j9wy3SAo1Ym"
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
