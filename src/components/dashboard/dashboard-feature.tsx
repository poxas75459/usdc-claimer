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
    "2Mbedx9zdLkWiX3dybRkNUfWbwUhjoAD8oaSUEee87cHubGcrEb27DRrHeRRFginL1eMAGsq2mrqKMeV4BgoyQ4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kMyAksKEh2cJj8SFtiVTxUL78DckrXNWaXoaTg7owmVsUsDjQ5z44EQy18NYTdidjk7xFdiT4s4zpntYnMUKNo2",
  "key1": "5a8fJp8aje82Wyfh1fMz3XEruMjKLPSkveZYn15EZS1huFK1wYTS9uGyNhcpRxccm3jvfWGw6k3jcrGpHMPU9TP9",
  "key2": "eXmZhK2AoD4gKQGPzArzTtCLAWLD5fdGXr1v4S6aPkDHo3XKyhdm8mLWFino5bbkeRajLNWQvy3DeH5S8xRBNVX",
  "key3": "fLHBDFjT76R21iqqQaVVD2SqP6uZ9VrBYSjEXm3dNLm1xyrpBygAqLjH6Xus5vERV4pSsSDY8b632vHAYfKSvKW",
  "key4": "3wrqr6T6bH4wHyqdJwJL8yRwT55NgBwN58jDR5dsZFEvtTiyx1qk6Fb9reH3y1sy5PXEuDeqyYWKNaP2NnqZY6PL",
  "key5": "5Rf5WCDio4yj5Ui2v44BZawtrY94oHgw8868d3yMV62Wq2XPVPyUNBvFGnousWXaQYPhUXZiBsmKiu7DBohzWH2M",
  "key6": "3JbPPETYvrto791CPAE4jpCZZDeSVSgTa8KwEv1b1Yk1v47qEnEhMhZfQsNji3PGDxwrCty2b2LnX3AMHAG3zNHm",
  "key7": "5jUWnbkddeJ7sayhFqD4uP2qCqA3uepPcPtUannesVBaN2zrNWiWRvDYpT5oLb6AtnUGqTMuj3iY3dfwfmb5Bd19",
  "key8": "w9CJZQGs7Vg28MWHUFD43KfLrZvpPsgksLnNQAGNVmDJN2EuMsZtwo2A5GxVoZcQrN7hN72x3BgN6Pj184NVqkW",
  "key9": "5HU9eDXVTSwDHgSQpQ1fYebzNuPVsT5vRmA1cHkN4hCGapJEv2bmopouPTUpwbafH7NNBmTViRHk6CXeTx9YPQch",
  "key10": "4bbNrEYsPaXpfg6iFebvk9vvcxFFiJUAFxGY7mHX3Yt2S777gPvgdhPoU1EnEebfqx1Lf6KLXxZRmMNUt3fWirk5",
  "key11": "4JqSFyYoo7BDZjx7YkokfTeM3GWKYaohzygZqaLGjymxjQMcje2BmHPaZQaoZ6bVZTKVABRKgU6YJapzqo2uZ7Cc",
  "key12": "3PQVwLxSgPdKTfZn5qEUWBSkKEpfabkW9Rpp7fTV97TC6pdVEAoNCZD274t2jPgPJv5yTMwbfMJcUmc1xUC47FUX",
  "key13": "xh1moQALYAm2Nh7rxu64wvLw2G1eUjv9mqJgUY1LSUKtcr8JD5nS8NbCd7NNZAEzup5mmv7VhuYecVrENrWbYXE",
  "key14": "3WJCvAMGFRYxRrM6rrQrYsF1g1QMPEnbN7trdxgUWEJZzgmpPYJKu8P6WnoFbudSid5h15pw6tiPzM5xK49augVv",
  "key15": "3YeF96frMp7UmYBRHYBdDddZo4uAfFmvJ9iH8nEwRctjyPMk6JjzX62wTqhUAHJ6eShfsv3VD9JsZc9fUnAVp1vr",
  "key16": "4zqbpzVfL2GiLs31L4kWCZXdHnyCVtmKde18FBcHgq4VqWeHusfLEvTwJ7PMBbDvr9fydKVGY3yM7k17NG4x5mLU",
  "key17": "21ALxoSS9sYbvWoggSz3s1pJ2xGKV5wT8RFniSqAJee89RTgNYfBvpqD466dJt9QnJaP8SQgSySpezjXNKoCXDRp",
  "key18": "Ne4hgcYVUzXF5WvXmaxUSCcVUg5rebZbQQNAjySgxpHQxjKZTXwo4XhwNc5Ky6mwhJMfnVwVHrGubiV1FDRjDLH",
  "key19": "3eTSL8ZijB9hGiKaGf8RNavvjsYw6kMEueaBCYV8Ewo8AH4tSwk3mcuQ85a4XYPvpsSsctM14wy84na1UN6day1y",
  "key20": "3erZrPmFE42oDKuPgFTYU9nF3aSshVbX4x4zCkYvmDk1RXBgsWH8ipkmrBwGL7AuzDaCHH5GpwRrqz8mwXjP4XaC",
  "key21": "JnJNLJneF73yMF6hTHBFJU1UY8HWVR7jfDACviM9AXKqowRPXLYefCSB68DRyB86dpZSuFQLY4hHeik9YNE8sA6",
  "key22": "2h1hQBg92DyE2KUGWEVqh7JJ9SwzyYp5amtfUTg17ybabYj2M6SZEc8fh7jCSgGHfgU5j2915K3kZxPzCGwpdm6b",
  "key23": "z5qiKQkLFq1LTTEGkCJa8MgBF3tCzKiK84cPHxZgsUdC8nHd8N1z9Ubog3FvLTsNbKu1xmJsdwmEM82GVSXCAvT",
  "key24": "4S6ViLXuvogsimtz3DBCUSgN2eQcpYTs8e9BqRNkz2FW5ZQB4v5JUAFNsE3Sp3sx64PepCe8foTesKAGWvUryfAk",
  "key25": "2NaLYL7LTJnXAbrJ9P6vReL37LHsgxra7u5i42X1V7uMgxqLpwnC7rnNZT4SkGquwXzJbaJQom56vXRhyfbsYhEU",
  "key26": "4WJWKU21ebDbyCAjRHGvxw78ncEjBHnY7pKoeXi36PwikKsBnkHkrnEDq3z6sYRBx3wEB1bUd5iaNRQv6PZVkJF2",
  "key27": "3SS5sVPZxhCFMEQCqXvPD4nE7DLVPEtJurQE5NTMv7dXqpTjEkvCzjz96otpWKiomTYfWhfk434Awshtn9pZkWDW",
  "key28": "4dvjHUp1fZhzefTBfNWN16rSRut2dmp952LUaGMXvs2iTWBtvBxaSNQB7Gvbz4zjnNj9QUFjGpBsCJWeb2zFj2V9",
  "key29": "5VKE1QALgHBVAJDcZFghEGWmSasFRNuqzyNHgNgccaqZmcCrkJMpw38u69u6P9wEG74bxyoTcxJVK2UxUfpfHMxg"
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
