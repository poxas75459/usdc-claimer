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
    "5BWYUVKy1vxZvhT54N4gYnvqUQrE9yoUya4RUoWrF1bE3K4jmFBp7ETd69pjngKwc82duYHoPKNJJwWaY5a5WbHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e6FLsibvrk2qN7TEvCY1wEVgXXp98YAhcG1Dou8kMiEAu1jr13Uopn3fgtsJfki81bm9fv2NCBXuw44tWzdcLCT",
  "key1": "3iMuZUCX4dG4z4UcZN9jgbo8jd1AtqNdjCtvNW8Zo3zEkgvuLXzU5D9wTH7474jgJTjwvVpiVtYcrejcQMnqN2n3",
  "key2": "BvtXT6MkdHmCimySRsCfW2oDgJCUK5daeqZE4pvtpDc2ivvZNa7CNNhpgDDVMArWZCq2Za5NbaHWqEN8Ug4AdAr",
  "key3": "GKKPKkxNzHhCbwMrMujAgaFK7Y4BAiz5rzao6ydhEeyNAWGqMY4koxxy1bncXxvbAhiJ47bFoo9eDTXfSaT2Epx",
  "key4": "MGPNs1Ea1AxMC72LELb41oVCD7LMYd5nS6BKu7dj7orjXbgCkc37NPtUZWUkVwt8FckS5ua7xcaJ7jTjY9NkFSh",
  "key5": "2zjfYLjfHRkTfYotLPNW6C9YeH2TWa9xouNcQadWRaQ7h6KhigFNPVaysBrM75p4XSQZfVFewY2XzUQrJq3LjpFE",
  "key6": "63N3YRTFJiYThyV1QutTu519zmzQ9L7xSvMRhMcajFXE4MwZqTN8jgwUCTRSR2fJC46waewsUUEtoRwN45gCRrtK",
  "key7": "2QZY3GXM9tEWEaDpQuCQsbNKuWGeHHoQuAS1kjuWn1R9Ez8bEUtv61FB7AQXrP97rChu51GUw51DdBKm4UN3qXQy",
  "key8": "266GKjCjCUzLgXvWcypvvd2tPhpM1XQgSEF1rkX58yrP2u7phW9Ew7cta1Gsa5mjpFAgH8Yze17Jb18aNzjaJ7Qq",
  "key9": "3ouzBrNdnreqHXcFBMiAJE6HQgg3pjVoBNYwByuzu1kjEATi992cTddPu5eSvrQCBkAXwemcXHptRRZb2QuvBnK7",
  "key10": "2hkFnPhg23k9w5BnB2Md4jyK49qLicAY5mN7zEMbxDu8R7dN5gFitH1256KwwTGQif3PwJZtMnPmScpgtKWYmfWL",
  "key11": "Yh9JJmorJqNqjnsCTni555nwuLoXhhgNSbwYg2RmwmrWBCPr5HiKrUvcfGWrjucvgXv6rxWeh6mGKu6dwiyChcP",
  "key12": "3Dq7EBnhLih8mu6d75zah2VoayTM8qbuDCrUvXp8TTgczpcc1HhgHqA1sNB4RwmC7KqCt3z9PKdfoxfd3CZoQZKh",
  "key13": "4KPNFdVJPEdtAj2MqUcytcZHE7aVr6qXnmNBn8chWrqQqU1uaGST4CBCm7okvjrAinzFeNXx2wHpvPzqdtnPvh4y",
  "key14": "SjF6DGbD9FSi4RS2V9VUjsXzLuGjvnCEGjeZ1xhqokfqUUwos9Bma3kaP75vqxJGApcmbZGJ4GN38SGxGtLwGkf",
  "key15": "5bZpVzkzbkUzV3paW2U5REZYFxU9WnGqTbUs34Q4gXHZtqWkwknaZtMRB9cnMZwx8rzvCiWTtbCpkJNxb4poHr13",
  "key16": "2exzZ5DWyaUNWnwGtfVkQrB6KfQXwPT2xE72i1sTBPxSqVaDTabRDDih1r4BQPrpdmKMFAuohnPapLxQ3rm46S8o",
  "key17": "4Sa3wR8EKKoJBDmXCbbJYHhJxbfQ9ktHguxF5frdAnDQ7cazDWDzUiD1nodRWqHErERJFRPbw4DWDU61ui22NTq1",
  "key18": "3WnYm2F2c3MmP51zf61P8b3hQJSgCRoprhD7iMBDBT64A625wNLsSQMPBKt1rjaP4QF4nPVESoP5oHn2gFDRibDW",
  "key19": "xb1GucwCTiveFFJ8WvP21p2oMQusvDtcWQ7WQvogqVurZXZhcfUth38t3YTjfCPdiTevkssTukX7ikYEaTDgqN1",
  "key20": "3hj1fe91YfZptJAFxFqmxVK8W5a38Psbvb3dKc6wuup1hhp44tbvcr6B8fcDJMa2P9h9ZZaTZU2ybJ2ZtX8Pb2cG",
  "key21": "3aq7jqLSnPQQuEFKdPQ5cPn6rieQWEJpgFDgXV7AGNZvahrRi1owCNLHcRpryieExMYsw8GMxs57JBhXb1bQAB8R",
  "key22": "22nu757mUUVSX3kq1szhM1Yk3UjfR24PmKBjK9wqxfJ7giCvoj7TXQppK4a43dvzVvgGLqF2dwg3DBPhed7iFTMh",
  "key23": "5dzUDyk6ZMhuzYRopZjjzUw7pqNVJiYJftUwhTm4hLFZRqKeMVsxJANcCBuWtYMLdgZd2LCPhMqEgCJNZEuYrEcx",
  "key24": "5qzofXTdi8URp3usB87zqBgXnj4btXTZ1kgf4UX7caWLEHQy7Boxmgr4oHVwwdCNLzP8qhWNzNKXJWKYCr6YBMsR",
  "key25": "4BMf8Ra4576VFUzWmwhVMcqXVtcEXdb7SU4NKJiMD1B1QE1owSi5kS4M5UxeuAVUUgGS65cAzn7FrFNE8fUBafEu",
  "key26": "3UoE7Rg5zVdyuDPAgrHgTBSUAUfLCJGSQHedNgFWZ9otq6nW6go73RWh93PoW3HVG5aze7CAz2976248sr4KchW7",
  "key27": "66yexuW4cM2v1AXz7SyQfaTL2wYff42PS49gVHj8hdhCxbk9bUVZjwTyL45Ld4MGGDCTXZU2PTZwztG7YVpjEvEp"
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
