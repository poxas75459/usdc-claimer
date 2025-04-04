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
    "5hmb9nfYjaJyqW6uZiGrWu4BdYx1dTtmdKe3v9bB2cqFAYcB8kcmX6E9KyBMoPTuqMLUE2dJCLWCsdLaoq8hqBLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sQ5TtAzRVb7fXEtrwXB68jec9Geqak8KRdofZ7UihLo1KsmpTVfMcg7SHhcBZiuuNGaMXU7A1yHiZKVyCKBNHdu",
  "key1": "4J1tPEMrKQtgzbM6w5Ku13iALH9Kpc6SUAU226qboDjSjVUzLwQ8sxUAY1gvPUYT5k77S4qVdByXLFEuvgpn5PDP",
  "key2": "3yHSHxQqHjPyEFYg5Eno4eFPu9aEjuYYvmE3kDvVsPNfSJRPUjXGDLJVpi9E2jcR88Rnw2Wz7NdtAEe2o3UtLUsd",
  "key3": "3kA2ovmJ68iiFGyZa9rAU2aqHFscGEWFLRHQFWhRBEtRYu5R8n1zkMESuVtGWqtxA7DUiky3zmEXj9PmVqzE9kPN",
  "key4": "5StVzN49Z7gNabVnq6Cb4cVnSkbYbAEeGwEVQ7yhP2cuy7wN3PoSVioTrW7ZzBMkUPDX5msCFs8LVJhHxbwQJxeM",
  "key5": "2eN5TLpAizc31m9LWzgTi887sL9BgNMU32HngCP8GrhBPAYCcrpELbF62VVT5gYdjXUdC5wk2K8ydgja7EyYggvd",
  "key6": "27oVwf7DBSFJpg16F3UWiawHzufWaMaSTeSUL1EpYX3Y3h2WWhtbmSJMTXPAKy71rpkcZeHd715NiicH198PpLr6",
  "key7": "zuuFSFBJNJtBJcYnNnFdjFzpobxdZv39aRLgwKCe2ULuUhSyMq4CifF1sAEZuxfgdk1n7HxY6ZU438CS5B5LESX",
  "key8": "3o766JgRmKF9DJrrzk459rpeWKLGnS89c5JPmtJqYuwwdLziBdC2Rm2KJVD69PPJRvrZVoUvUpk3VgMvie8ksA86",
  "key9": "3cMt8x5kC6CKPhK4QeHqnshyZur6UdiNH9B6GD4RN7ZtgD2mz2eJFYBqvaxuUPHFkfpW5qfdsnnGi7DSiRG8cTfg",
  "key10": "38H56gPtrDMJibxB7twodLwSfi6ctxC9jDU4FWdzYXfeHcbbTCjjLSxcgkrUvEs7VdGzxsVvaUC82pPLEVGKrv72",
  "key11": "57tLY56pUazwEHhkXsqnfsWPpmeunnrX4VbKnBS7tVMJh8gkHERWXMtQkvugyKjSB4cov7DcdLALdYd8ZVcFScy4",
  "key12": "4NT9ZWnFkdxTnaYn5DKxUSTjsWRMCA4tU7pieBtttLF54dxUx94ZR7at5ovXqxoxdn9nQKqxXzmunYbifkHfTwhW",
  "key13": "2ACPczfJhXu4Xb3P4A8cPWehAx9aosPCMhNs4LULby4XnwqPk4RYA2Q22Z1vSLGXu4qFpcUCbyLYPuWHFtCfW2ZQ",
  "key14": "59hMgwYrympR14Uns4w7wF64dzXSk6zF88XSKfv8GBYimX4JZ8iDanocj7RxWbB8LCjQfKQF2hEgj4Fb8NQ6xzQy",
  "key15": "5HP9UkgVNt9soqaCMWiSDSDsS3nYLJXhwkJJ7F8BKNKCHRt8gpJQQmZLEPjs4cF1yca8ATbbbVjxVg4YjM27i7ac",
  "key16": "358FVsNWKB625duKJm4WAtLmhmemoT7cjaBjdJ9EFPjuJyrtcQiddw15fxexyYDAmL4PPTDaC22KvZy1ZrnTrovx",
  "key17": "YTSYPw31o6fTxkiUs8TPcRphpu2aA4bHnQNSiSZDpPAhMXsjPRVmJK3UFaFe8toZnyvs5T5E7KFkVpBR8EmhjLs",
  "key18": "4Yk46oUdBrxD93dVtV22gvekEcbX1FiFwFuTJjvCimDAU4fxH4A4dcvXsKshgX4XnQGwPL2rufkBC28iG6BWursd",
  "key19": "4QLV8mjVRm1yLPaWsAzEz4Z3dXGcD1NteLvCnBecbrKQj7iJsmYLKcACZgBYtbLU5DHhxawzWNMKkuqhcsT5s6dV",
  "key20": "inESQCmqUdjAApEd3UGm2iHKRTKCNfkoJmoRtb6scu9ZEB6oP7A18dP4fy4Fy6Ly4Bdasv7ztD7MVVJUFPNNZvf",
  "key21": "2YoFX2XbkKvUxYueGHg5fvmxPTZn1nWCqTa2DVAZYdSpXpXcWpJ3FJwea2gxmQ4Nb3qpUnirUM1jFpQLxQyQYxdd",
  "key22": "3VNEs23qFyDt5rHkZuZMEkoHf2MLSUPY1CnXLPKtJWyANSpyRNDHQT1HU8EQwReiucdCeBTFfckVXZvCNYC3mSQH",
  "key23": "5YZwNkmpbYtiwsyi6dz4iZXnFaAqsCifPF46JJPMKJy1r6oSWrsEThSjp6o5TRpHKGy4uUch2sQC8SNLxPGh7X5B",
  "key24": "59Rg4zHFb7yv3GgHfUL9GL9SDdScDnzCEjZ8mxRMZ2bWboWjBW8RGpVaXas9PhzBcPz1yS7goMh5dbBbyb3VbH6U",
  "key25": "65NLrURzjifkactYQByzDgReVW6gLzAuuXNVndXpu6Kt6H4VJ3C4VsJBechcteWY28BrpPY1K1Qwd3Z8qx1HJHRS",
  "key26": "5yDthXEtHhiVVBm4Eb14ZWSMZvG6VPpm2ccorEJDLG1DD69kmzQUBUyJ9MbR9m7BqgHsRVy84Zgt5H3i5pLCpgyG",
  "key27": "5h9HSeyha9oqw98gEbFzZvtRu1qKVoKj8NxSEpZRB9vhUw9dCSjsx38oCtEyiBc4jcsUGshzLgvgTdxvJ63ZPcRy",
  "key28": "5dm6NfKttXSmUf2uHcVY1zoARzSdRDv3XgAMGUkbiVjJN1rnprQ81nX9SeuvPTn5su1hfnSq5vH5rNhKyG4zPZKF",
  "key29": "3Ruk2cPnA288bentTeM45LTab8mvwuW7xiXrUJAfncHAyW9YK6DZtWctDdsfyE8Z5uFvczNtbyxDRjvzsLVYLisa",
  "key30": "XvW6xvyFN71Rz1bYREhN9zxASHW2zY3S8fFSHot3t69rWgSuYkyKnHk1ZiBdB3KygK85G1HKn1DGipftJT1gHiV",
  "key31": "4rRsh33NgUBgDZn5U7S1vSffsrorKCyfmXVM1qxVPUHTL4jTjc6fPjetyjk7UnFXHTTgUtGVye4VcMGfD9LXk2jf",
  "key32": "mBDCshEFiNKChkUbEmbzMq7RNMwo7ExERfpzpBXKzyUHVivdUJ3SMjzfmyoShGw74uoDbj6ct8cJG4QmuPY2hK5",
  "key33": "2bp4AMqx12qtEBk54DmgV1dWR33ErQaRENAXTsrwhVVWa6XWwr4mN51Gfb2Mv5BhrCLUnUcmcMMYamRrZfoHaKQL",
  "key34": "LU81VoNDziw1R7FQuoFwyU9Z2Rg5pfU2vGH5zqsTv8fqrEXCg6Xcq7CaqoyaPXjmAADYTLYRFHGkyHDJykxg5e8",
  "key35": "2XyBPUyKAGQZCKXHG9UGc3CrGgLx6TM8iR5WE3gsABkaUZDYQvQ99LxjUGrdfMWmN6CBgM88NMAi4BvwAMWoPLwz",
  "key36": "Bb2eb2JnqaK383d6mP1h6GZ2b7ywqFJdjb6sfDprnVBLxxGBVrxDyK79PpZoyJfqdNZJQJAK7te7M5NfoiebgXy",
  "key37": "2vrDgDvZ4iaSvqRBSV4paHPGSzeo7smPj6E4deDAYYsGAhesWRVSRVq2nuXzV1NdRVkxffFHfbrou27MjsmeTVDj",
  "key38": "4ZudiSeYFV2MXpF53XcNiTEdMNWqeegpahpxtZYAY7fPij8h54omgZZve8Xm1yrhDrR37dkm5dfb14ydqqzN1Pew"
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
