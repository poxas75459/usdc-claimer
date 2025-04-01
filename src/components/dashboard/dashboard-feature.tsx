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
    "5FZ6xPpBqZEhHd6NKciuYAYrTQcJFD25CCmCpJFCwN4kEYvCZfK3zHEMCXkcKbEvS5eDq8LWwFZYXZgLnqQ3xhQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UtFJtCMnyvH3828Ee7PjRQirL2Z7YMQLxeAXMrWgpHpZhZvbanYoCD6yCqMMgHQcvSpDoPknKMFg5UgpcCMu429",
  "key1": "5nQtXB4hkHjUnyRwR1jJ6bSAhfxeoFN8kbd5Td1k5TqAwpiy88SPW94bYuetuU6HvbQcFf9vzrhrDnBtgNE2cpoq",
  "key2": "5XUCWVL1uLEhqENNdhEzAfYrKxajZcnruyp1zLrxtdexVQbvxDewaemvg6DVE6MNNTUbXfDSiBRVA86tT8sGnN5M",
  "key3": "4vyVCWb6pxoAuNPGGJGfvQZDJmXkYeTDzWFBxuLG7rsL95Y5HJLE2Ngvjt9uDQes11HvXA9FrnkggcyKthK34mxE",
  "key4": "4784XLdt7DanCzLBmRvheoxrzUcUeEEcLtWqzpL1SvviW7j9ah8Nkt7LAZfR8uZCwuZQycEKTMPhFMpDDhBLjZqw",
  "key5": "4KY49xBYcAWYrdBDT1cqGy8t2HBST2bAMn9Yfs3XSgGJbrXQmDxmyvHajY5RsgacLW6QvWNnmeWUfjyHiE9iz2Zx",
  "key6": "4AjEM9MEXdLb2rRPcuwT9s9U3VpyhpAHYUPMNUfoKBxqGuV5bzAYDrVTtGMwPz7heUfNHQuRC4J4AjsmmigPagTz",
  "key7": "3EUCFZBxXRw6wrM3bwHEHWgB5gYQFweDi5Kmhh4XqTGtHfqKfnUfH6pft2dKrApZH8jcaFaSVUmnwZmXbbMLs6qx",
  "key8": "3BPeG63beCbV27iP3zGGv8T2oUmEmerbAysuimpveHPyTDb81br4YfMn6n3Jd9VP6MgTW5VBVhMpa5cWc1Xw5xQU",
  "key9": "CEABQuGuwJ4ZNX33CJb84Hf1Xo7aQ5VX5NiJhrvxNXhbiWZ8BpEj3qAe78W86jrgMvU3nXSsiEjzgYRsVpzXwLn",
  "key10": "2Xgk7q9B4dnfi6ty32Th63bBP4PiuFwR9AfczTRb47ujbq9L2nE1EeTsqfTjwJKJHAMPYu5mqfrrrJrSbnAkpRKB",
  "key11": "67BdGA1CaokNh4rSiCBcttAt9xZGVzVq3MbcciKhVaBTuq7bxDKLbiqkEowZ2JxDoSL3PBayb7H1zQ4Eb9tMQ6qP",
  "key12": "3HxRgKdUvSYcZ5GNbhT6RaoGc8BDxBhuFsMjyvfhMJtQWBKiGJ515BKtfgKRgYSJXS6LiA3cpEYQ6VvaRLY8WNwi",
  "key13": "4cQknqXneLDESUQv2NdARWqoyCr9ggbe7fU6WvCgsVWQLaqp6tZ6PS4bf4eD2B3wZ9fvj2f2wwTxidNarCfyhyfi",
  "key14": "3dQqt4RBRaqCYgotYTDFxtrpodns4g21SMDndK9CexRTkCXb21dNkJa1GZeE9bof3wh354uC5MK5ArVJEUE9n9xu",
  "key15": "4PvxCC7sDtKnMpFRu6Eym5nWcZnwUV95ZD4GkKg7xS1Q5AZjEgyXc8g4hxk3HKwGrHYrx3TxCnW48N7kJbPeNuYZ",
  "key16": "43Jv5UwSh9bUerEajKMoHESAdkKQv5y46iFSchPFiCadwdopWxybUo28emg1WTxM2HbW3UeN345WB2we6HcmPdCx",
  "key17": "5twNcNpYtHFyKp7ckNLbNUcxPy1nFqTkVUPvmcuo58c36oa4hqxdZjTaH6Tq7DMSfpW7WJY79zMuNwjxmPb8Lu2d",
  "key18": "3jjsKaPcQxSCnSYLh6ivv8UmgkTwoxrKoNAhaSrjfQyCmaeRtZ77XWdsqomiqPgdFWfobiDCbabXthJGL4zLZHdR",
  "key19": "3JDtAu8JkvXXup6yrMNbae7KBG65B7GTVdVPWteRHzydRVGELkJ2VRKW2ce77gNmNkbGznjq2PaAYUzLEvCCMoP4",
  "key20": "4HgD4tSvHTdhduDYYStgVUiAfWSoxZfQkEzwsGHyRxTqBrFu1LUd4SfygD9wr9AMVeimG6J7C6dpAwYoHJmoUsPA",
  "key21": "i1zTQPhTiD5ZAj8MGwZt7yMPYNZECFGNcCDNyasHefZHbMzSQuL9mT8qtxNxn3TNGh93biFU4eqKQVBE6T7G6NN",
  "key22": "3ibq5wRnUjhYSqaENDjBRFWg1ovXG8SLN9WsLBpXQM3PJDL6QZXd2ynQVg7fQBg9envX3b8sdrDsw92g9S6hGUY3",
  "key23": "2RwCosfA1wTRutC5J5QsUTaG849PAoGy6srvTdDYtCUbfBJ7FJbkkMm7iNzhjoYSq78gAYo36xszak9ch2jvVPDm",
  "key24": "VyovUDTCUuKGQs4GtdyLTQhSEbThN7mu1D7RdPidmiftyeDJSVkJcFkwVtjhFKA3nEkuzfASrd4imFBWb3Hk34h",
  "key25": "4Js5R3qSjVqAcf9uyyY3hQKz412kpmz8TBnaPFqEozfmijLiJVgPyE815dxneNTg4o9bUVXPZF1ZibRDNVsiU4iQ",
  "key26": "eWqCYdfrLHuguGRoyomhwUdtPLTG14KX2ezyWSHxbCBYT4NAZM8YrdjwzgbjuBZ12AWvqhVitNLPZRbvEUNh7YF",
  "key27": "DcBt1k76kfB5WDzrTTd5YH4SUHTQMnxx8CLa1hSVZSfE6SUQKf5Fyn8m2vmpxsU34JGcFHYVaq4gezjUuyDg5Vq",
  "key28": "3dXje4aXYwvE78dZJAspBC2CC3RATbzZCfpRrDsr6ZW7qWFuLQUiGg72o2ZmJT9T7ZDJ5afLsx3jXLiSkr4CM3Zn",
  "key29": "27aFCwaSSmf6eVpgFpT9TXKWcrNM9TrmbLSQRYknJz5LQt45543uH94ayLvewRaxuAkdzNuxHEaSnxziNQ2MfKvo",
  "key30": "5qayY5aNAKMofBzgqJ76XT1XgkWJiCApaK5dXjdnc9yCcUg2FyjbmZKT637kS2rZZzhtDooQtXskGrznEkbk1AWk",
  "key31": "2ayjQBvyKZ5ERWdKQAMWPt3EbR5kDojtUA4FGKB5Ec4xN3DWidmVE5jeHRiT8Yf4UZsKaKDSY1vPJx1bM34X1Lse",
  "key32": "4GdyzXsMvNb8bJXPv3iv9iK76xZiPxQvfTCPtAXZ9ufSM5vbUeCLA8XL8rQnfQ3BEZSwu2wLtQQn8Ek6sFRdFz2N",
  "key33": "3MgFoG1bS2cbd13DdxyXzBRfx5gFNksNmbMGtGMho538ANVCPjU5kJPLPr1uNe2W5QDqHortzPawu23kNShxgZdr",
  "key34": "59ikURoiZ6mLCw7f6g7tMmz7aRyDdVhgMRcQsnY2VMFQjzFobVYUTnyendBMQPfRZeWkY86nBoThFtvLipLgagzF",
  "key35": "5rGbX83cy3Rnc52WZcB42KKtqr42ducsMh1Q4oB9KhYw2uuSKFb1axBtacFz75aUWiqX9nBAPwiWWc93PQKdqmDa",
  "key36": "4RrVNfDLMfiL7v9JHA7wWgxUwu8e8BVHEndFFaJroiBiRZdqsrXZ4qvFAVAyWfTejENfK2t7AHMnTVkGVEagnqV3",
  "key37": "2fSrdNtPYGubaxZJGmspAgRb9kWQdF7SBxQr6xTyWRXBwL5JWT15EgMQGmdjoH1tJbKuzJvC4sLWRTorCsiu1fCw",
  "key38": "41ubgn2ehCuVx3WyJXZUNNyHWNFrcZPsR23LudrbkFQPS7v2N1LqTuwH8vfinwYV2kPtFaSEwooxRR4qcoE9BC4c",
  "key39": "5LQnXqDVaWWUM6vdRFELVkrvcFYVkrbYKGmJfMgK2U1GoyMzVGUvgcL5WwRRthC6DtXqUoUBQpjxXa9TPPbSZWWw",
  "key40": "4AgfoqNQkeBxyqko71eNKJgBYkCi4gRW2pZjkRdHrExZjQpPizSHUsaBg5kJDmEHDRGchpDUJBZ43wctYgBTtFzm",
  "key41": "2MxuVsSsUv9A6WJzUkKozgBgcJ2yJPzAGrSS91UjHoZ3D3B1oXynnUEouaLHg69H2GhHt1txGF2eZDT6An12y9LL",
  "key42": "5bYZjfhvCQRutozwpteHRfcmQPQCi4NQYg2qmQF9kEDJnvUg7UgEAno2cEbbbKQsb4PV9tc8ahyAygR9irHsuZmi",
  "key43": "62AG8pAtCVdVCuzSxokySy52rGu9V77rjokEnS88Rs6czNrWfwxoANsEzyZfQdohQFiWhx4VE3vMMixzn6iamMua",
  "key44": "5X4facPN14PeA1arYt2nJXa1E3E9Q7LPfjL53seo2eyYtE9VEEU38WMtKbEzEAQUJpbu2csPj6Scv2EguxehkfTU"
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
