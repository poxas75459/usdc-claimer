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
    "5RaXWwzvdjhXvms5xbb8bb9CqfSwvwqbBaZMKGCQAthrQowCAPTGrAhBUbL8erT5ghYBKg9EwznGwFvHj2TikuZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hxHwtPnxbpXUyj4h63ZmPT7oFit9SH7HNebGTYwUA6M5fjFm5hwN7G4XvxvQy48NySusCJdSkqqMNiKwnSQp2B2",
  "key1": "4ysgFeJze3YtDCvswTUZzMRDjRtjScia7zHG8yGbyHRmcEyg97hB2bkavrn7VZbUjuDaqKTVPNTTWFqH7pS6dGEj",
  "key2": "4ATBugkUpTED7eVVqxZCqbv4yLhtPTzQi8Bg1jEnUMd56oNdGvCcUJxMr6SSgpU8xxXVNLuveSddEVMuad3SJ566",
  "key3": "4GyiEP9iKhJqa8oSz1r49SUpZCJ78kpW2ASvpDy4C6mP9uqwQekybyq9aeUVnH1SpRvUx325tNEmFCLhMmfkKCjw",
  "key4": "29KS1rek4E3GHzKpRS6yLYa6QfJENNj4DSyD4d59v2Zw6b7eVHhtq5MXWPVLZ7RVPWP7ENjueBz4HWTMRWrapRaZ",
  "key5": "9jXzQZRedmFmdeo3G5yz6EBGv1433SY4VeLW1mk2gFcodxXDw5PH2XU2ML5vsX2JuJQkXRmBnoxCXyfjdRKqtuk",
  "key6": "WnUdqFPF7ih2vUrPwWFnw4Tf1UJwVKqSsKMvvpCREKmKpwGw7PLnJou4ym1gbQhNDovNe8JXKpMTBfrHdH1orky",
  "key7": "2NqSFsLsDYhbBCsgV72TscLLwZdAUJbxazHqtXwHtp9QL8hjuntvySyWxqkSm1juqTwzsvYMYxFvakhRB5wjcfgp",
  "key8": "2WNQ3EgDhTpz1EP9sJrju8Vnr6adCVMSMbPXcKmetA9oer1uyjKRFNKRPsvgiq5SfdZVw2rnG9BuMQ9ouzH8qYCb",
  "key9": "2yj87NL73bLFVok8rUZhUsS4fGmBEUwTd9hitidMHEivs6Nkus7cmUKRQ4UrYkH3j1RANtRtYStA8qvtzhTr8deQ",
  "key10": "SF3utnyGX2RcuoFRE6pwkPaSm8q9z8aZ8VB2aD3xoYjdhyELKfxRZjxJaEZcLeutkc4aAPZS54Bir1iJaELqU3r",
  "key11": "2hVsDeA2PR2mVy66qx9cyewjhFg8UYVGeG1TXCBttnsXWidjwefpFXKLwQZzuAWt47ag9Znnugz5ZXXoqEBqW4Ef",
  "key12": "64KeVPwj3noDMQpKYoAoDyBv7hhNrjZ4s1Bj7YveugGvZYTFHwkYLgnLeEUj35jaj1JWZ8zELFFnky8PPw4GWjut",
  "key13": "5ECsrC7c2MGYctk5NEnJLSkg83CorArWM2WV7oZCMBa8VS4Uxb8MzSPUHcHDYya1cCf4DiWvhAcUyLFVBWDGqEP6",
  "key14": "3cgYL5K4hnFppAD573rAj4Ra3iRABUw4Ksu1CuSnovPu6wzrTrrjYPG3quBbzcDahKhurQ5nfbot4qJUgo8eAbms",
  "key15": "35YiPBusCBth7uatteC273WZ48P5fCbFeUPeaCbU3pSCvYy9KTtmuKMNPnyxTQRWiz1QfZuU1WeBZ665r9H2ipT2",
  "key16": "EhSGvKEG6HHdvLgH45BZ9FeE6WDavRuy3Ap5YBTXVTPNFxv3hzTjxvJxvw5KdPnhB6NytQpbAA8kb896uA1MdpS",
  "key17": "2PtVAoUKJaUfnGjKkfsEPAp3xkgE1yHNWRVwp28H4tPsAhVFkSb1NtvnULuNjDBrHZt1Lgyo5YUJ5MAHvC2W4fuj",
  "key18": "5R86GKAhkaiJk8LSYPxBL83zsqEod2R1RNDr9YsyWBYWuSaX3njEk6EoJX7uzQxNWBtsZSkqqpbSNn8Eisz1DhGE",
  "key19": "2srFCHLgCAzuS4rHeBDbjN3TC4q5PSr2gPpE1RCfgvhZeM9ckViLDgfXoT7YeKZefiYtYdpfwiewGAneEbRQGLW",
  "key20": "4ng3SiHA6XtcrHjnk3QnwrFuUpG9uAwcQp91XXGX3yyt9UvA9yyXvATVWoFAVsQ9u6BbHuVVAHt716b5E42Xd5gU",
  "key21": "orzeuHejKPfTBKcGd9sNpD2eruBZEwbSamZmzqfPfJantNPJTQZDo7cNF7Pxd79evpNHtqbbqgaL7kU8ciELR2K",
  "key22": "3e25hZu9Fc24tkyHrvBxSgRE12vHU2ZCoEHjiAsfG7Ng6yrhc4UfdJgda4Fg4AUwKT7qHSBjKBDgTRY8n6oX9rBc",
  "key23": "22cLiwpBhvdu8G3KGhJeDRnHaRUW2M48uCgDTCKrA4ificTfBkz8qmTpTJwdtxV6U3CHqHLWZvEQu2HgcQk64MyX",
  "key24": "4zvQZ5PKqKYvcd7RRJzEYr7KD3vNj6P6Csuu2Yu2GhUeQUhpRgBMstEvsCy4N9dFj4XzHkYkV5JK2m7tqixRGMSU",
  "key25": "4SFiusByniDsP4z57NKUV4NqMYGDgrxoi19XL63QUeukHUKxbKukH7rSdSzWgxfyVbJ8VGjZVZtjmLRk5xyv4Q5t",
  "key26": "NxqNETMQXvVpF5gk7Xe2SGLXZuDSwLVxuPTAoKSnHP2jBH5ogJUn7j535LdtN7v2myfFPqqu6eMeDSAzNd8xkgL",
  "key27": "sMMUhW8Y8oJg1rmdLv2ZDWxGNfgZjznLu6n9gJvKqmm5rnShKzsLZyxXgZ7oxbcUrcYFQHnfeeo6P6af5r2czrh",
  "key28": "47fMy9bzV1si8XQEkemfWmarTyQ3qSXJdUd5wEYvcu4FFR3PeryRmRmGBUHsaCBDgwBACRgYk2PGFzawPzBk51wX",
  "key29": "25fHPnzqBWs1gHro9hDcpFFrhJSgfpP4CitaRcuXbQ5ChS4Jbw1b6sQko8geH76vo8wPQimtApZosfmbcnW5C4Qx",
  "key30": "DLnFjbFqZKJgnYLNHwxkEUrmwckRj7ZXhtxN5M7P7iNLwJrHmoGxFKaU1jY3thVppPbNemEyvG5waq47C1jsJZN",
  "key31": "PABYmFZYUQGAxYt9o89JEDvGw3gSw1mJnQVZfKqQm1skq1xWCQK4g7j9WWegoLxtgZUAAdhxifyjdWo43imFrKV",
  "key32": "2xyqxfuJEcjq31V2ZAo44CdwvuZqpdyfhBTejJ7PEV54zmCRwiycAJqYdaLPX7ZPVTDfcfKYipxa8ApH7E4YksfD",
  "key33": "4eVYoM1fjrHFwc1khRN6D23rYJ54MtHyPHWNUkQLsnM35J8xfFPSwS7jE2m49ZNs74Y3QH3z8DpKBLutzvmfn8py",
  "key34": "5oEwBaV1hKqUUmUbeGBPLqFhBSZixd9wCpBNRzwEnehwLHtTvDGRdyQTLESq6TKPHtrPoDcVufuYJQcgwKAXZm38",
  "key35": "5uCzEfx1HHBA7ZRRpqzmoqKkjW9vdZFHPEUaNzwZq8eVxPy1ZkQuqQcheAyb7vK2Rji4uZBcG81YXZGWWJAtvtQg",
  "key36": "1V5HW3HWwjZ7e9W4g3d3fBJXMQ8FLqaE4Lr8qp3ksbkWy92cAf6Dy8Hba6hE5KfMtg7hRMWdyVvtGAScsWUhFqD",
  "key37": "GJRknzhciqLKVuxWEMUcR7UYzBDgRdRKZ55pJCNjre6Bq2kzYVniyfttRNb1PcsUYaQHDrE6nnVgYU6WEbLKE7K",
  "key38": "2jW5d9jwi9XdSdPZjBgfrn9YyjpxsNMxDVjiuqdLEWBdm2X7eyLwk1Ku5PH29KLzJn7gwTudPFRzrXELK1t6Nsmq",
  "key39": "5Jj8HpN1Mh8iUVm7bAWB5Xz7iSidna349gnCUhinpfjnZd4b9gBypmZQV4x2ud9LPj8hpad6x4tmLexhTr2jC9Ve",
  "key40": "5RNMQGhiGpR6nDoQDq9ARxiVoj6xg6r6f8Hj7nLtP8Ri8Cgc7cLnoDNmbxzDv5jT7tmRErk2S4BLZ7dCeePH8uq",
  "key41": "4bTRAna6fftvBB2JR2FyqD7GH4GvQY2Wem6zYF4KgLJQ19SuiAT3twxYwFskLbHV4aTRugVKFjRQRfA6kJzD3KA7",
  "key42": "BvH9F6KDSkNpSp9DAwumfKmJYpPt8shKDfcsaQ1R9buRusG1AFEUsWYJVoroGbLhQKp3Be3he6LzFXxNsFJWvXi",
  "key43": "2RczaGYzWJuRMbgyqMaX4Gcsa71qw3mM2utsrLT9KXcY2PKE4tq8FKmqrUwP4Pqm1qJHzpfT39nWrZnsAyC98uwh",
  "key44": "2b96NkewcYpLmvqKfZWE6LcvgNESDCi1YVuhBrD99UHHbgg7VEVaUE4KztJoHKk3TnH4ydhgtGS44WKs3kkuEHyH"
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
