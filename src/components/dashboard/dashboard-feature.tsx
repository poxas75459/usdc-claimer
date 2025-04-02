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
    "51aXhizq6zpctYZ84r4vbmzTmg5nfiAaWrpJ9rxY6uCEnoXBcnogbQ2y2EhD8u6uaMML6WiViZ7mdYQ55EcnuNU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bNwh3aLzAkYwV8DL62vtp9zdiQHCZ2YtvGFMoCsSDMyRzYq2s1hTxfAm7kHXvgSA9RdzHAKGBjWz8TvvV1jY882",
  "key1": "3CnG4Wn3dwDRHePJWvELNrtmGAG5b7R7aB6xC1hj87c9YWNVaKxD6QaRo6qDVeW348EegcvxTHnSrcqtCxaRCDt2",
  "key2": "2W47v3rv2YV5aqFRfbBLFVUVq31MJe7voj2MzBwkwZFe3YpYxiFykG7BFwGuDUrJjbDekKFxyw9yNwAhNZU5sEq7",
  "key3": "LU2UUreD8ca7jzxzPhfBvCesNQxwbVX5kUCPAdbQNb6VBEAWXjtpCxiJ1BKadxrPBcpUVRgaBB9cAqP4kLvire8",
  "key4": "aDPYFtEe3xySPFfjFo2h91j9fHqPNVDpyAEvoD6yCXyNvzHVbR8bQpkJCG2EHGZjTzhMtWN1CbuadJM6C52kwHk",
  "key5": "3ePCkajDKzANTMbRDAkXhZsG1i2wpbk4TVRHE5gWpBxYFAm7Lt7iuSZAk1WZmDxyTyRs1QZATH1VZR5zZQobUiZz",
  "key6": "3Ndqh7TGtKsYcMcknmkqAnM6J2Kegs9ZnyAXvQYYodUYSFzoinMdHuv5zhi8c6QvJSmYzusiSeCW179DhBSTFsnc",
  "key7": "43CymFmnpdvpzuewM2VArBhMjHNDnZv6xLYPPtBaty911L2PGSPnFmgU3VxNgZo43PR3kvfpf4du49BwLQTFMK55",
  "key8": "3YnGR7eNeTLCgAWBWAxaCCmycmmGB3iTiTpSvxhQmu7nWTXMPGwBkYRLDuwE2S6yc3ryzNXcy5XMoUUG9XiLZ5ET",
  "key9": "3vuRSw1v19dgc9bq1VwFZfXGBRxDw6CU59nGwKJRUaQZkDvqAHztG3Q9oafEwPH6hJ2fmWS4K4yBuhK8JTTP7idy",
  "key10": "5T34RZ37746PSueh2j8A6hsVABgUZ1bc9LJm9qYHpJmo6uqkzsBxq4DSd7qixCoihHuiesneAqxd7rT7rss9tjf",
  "key11": "3FE9yi8WpJsGjGEtAjg6sFUkxcyNtEpoxiqViCEPFf1XFqPrCJhXD5emN3wQ13arewZRyUjzAd8NfkgdHCUWcL9f",
  "key12": "PA86ttnhL1Y12emSV3kdV1Z7jgZY97FHFYz4TnPBm3NboByzpiN8kpPU2DbSjDjVB6jzR7Lg9bpy28x2ZZtoqyj",
  "key13": "48ihu8AYFQDZofsZUUiqW8KfmtGBZg4QCT5mKz5ezPNn45r6DbtTSMhDWfYsocNsHHDC2Y3MxxY3bnZY1fH8Murw",
  "key14": "4R5mFvkAdkz4bmPthZ6YQCEVvApro9uBeRLuhTnzUWr7fhx4rSZ8wpGsF15nhXr8He5esRHGvxk3ZLrihMVkzBLD",
  "key15": "4zLsC7ygh6VQFdBV8vkLjeG1hK1EXMhJ84wMavuStUmnvJfdrxWfhEeXgH1ukTZ1hGZCajPFHPYw7FMynXSmxCkA",
  "key16": "2k4PU2zo6gKWyqesPNamyMtx3rxaXEUDweyrqRDoW7cyUhxZ62r5ZbPQzDvJ1RkZw5fyA9hBVMBsovurBb6iR7RX",
  "key17": "3s69vrFHx9TY6wdrJP3WUrn5988GS1D5peQD4x7P41d9AZYKsVnSPk1WBjyehBxFxeUDCV7heeGqFVKfpXXaeqnW",
  "key18": "47wg7WYTBJigJxADdhR63QzfBbSYoJEXd3gqJNw2HMxdqwinrgQFkdfmrDBmAWVGNwrzs8vTzM1MUA632mb2ZQb4",
  "key19": "58ZMoEDDRRzSKpKcqKoSKBVYwK8MkboX2bCiED2CxLxbC1Spp13YjsApFWwpL9N1xzGRNbsumYAwLqcjzDXxhoHA",
  "key20": "7wZE8kFxdQEs3g5URbDqr5tsxQXYZTCdnDgHK4nD1mdoUPiExxLM8aimNBkj2iNR7omCTp3aMog8AVhAtfmjWGn",
  "key21": "5b4gLwiNrApoyk5C3dSJk3GmRBoaDLmiRh6dP6GhsPKifGDqVi9k3AEJrEEoGZx4YzahF7AnHJgEKTUbbD5TVASi",
  "key22": "4GFeF4bkfDxKzbdSjfnHLm1R4S77HR3TP4KG1yhGYeSP14faLWjUM83Brbek8ynkJWja7LmVs9ppbRzJViqVqnRg",
  "key23": "5XuSojb9wfXCP8uxvtddaiVMLFzaFPNTs4mirNTiki5dAnPgjFNZsua4o2xPUhFbqiZ4b89uDqZPbuBcG6o3s623",
  "key24": "6x4SKbBGLA44CD6dgV54uycGKsjsSV3D3FSFYvrJwhgcn1N3kC8nE9juenNmCwThD36DX4j8oEWKL1KVBKZ6EDt",
  "key25": "aF3WcrA67EgHCA6KijeCcEJFwv2SCHgKZryhyt4yxckjq652jvnzbymmBTZF5T8eSz4eY9p5iKjbvDYwpLqxy8V",
  "key26": "5SPVRY9azYoep2iVxzYFTZP7Nm12udQZykW8iJMzGwQGB58EKkofKzk8UYqaf99knzqUG3fgzFd3bzWkF98bA9Gm",
  "key27": "WKXN21bAKrifbQKKcD7VegyMH2joNeTdUDfgtVgoaGRgoAmEV9XEXt8iwT7zxPH3x57NY9YYncy1bxiFE9adXXZ",
  "key28": "3jhrW8jeTKBujVeBaFVhGiSjbBtg57vCwxFWrXfteBx36XXb2LnacWFGcYXbfkyeJ4ttvCG1BAnNj3PqSMP7AcKT",
  "key29": "67pPNgDpWN1rtcC7R54XeA2msm3Dy2N8HrqycqZmjNLbx6zvWK8ys2Tmc4e2X2VVBqr5ooc8or6rimtRGb5YQFin",
  "key30": "3n85omvnYpnxBNmrzVL9sJ3wfTeqXWNRmCcPcX2if4BZovFvDk4P9MPfeuTUj9ApTKBGpJGBaTsYHTHJSTRhXbuA",
  "key31": "4N6fFuLFxyCUjkUo12twQFZxdi1DeWxb8s8FKnXmUcxP8L6f3bmjUepFw5agWhKc2XVRtXPVS8m3fTwAodW3oVzJ",
  "key32": "67E4VEUXEoCuLDh8x2BLNiBKYt7YW9aXMaqs4cW3xWnEFgKfx43SjbE4bb2sQfR766vsTzGZMoNP3A5eYCpbcPYx",
  "key33": "rfRGJKR7UE1gf6PJc6yPUrXUbYxaKjKFSMTm98htsdHvGP3sT761qNzZ9UB3s98YwQ6apePxD4WLVZihfmm6bQH",
  "key34": "2vDKv8dodrXF4uoM6fCtnXrzeYwL9Mukx8HpnacmvgBApZ8FG5nuKAwRUwN8ZfsNauANKzdaArAZEy8ZZkfV5cTb",
  "key35": "ofcYtgUyNx3nEQqRUFtq5o7GNN16DHmvUeFe9uZSPBDxWSN8xaUB51Au6M1pj3bMctebJRhT33nB6FPcPj1GVtd",
  "key36": "WsXp25Qan47PbhivkXUvYAgWpRPLwNGa339fRxV1ZJ4xS9KN1cy9ECndowewd1xrkRx5JZcViLYBF5m3mzGMYyz",
  "key37": "61EkzNdMWqQAda9GaptBzbcVdyDKXK6EKJ8d97z6aGyTVVvi4Wf7GbsoTBuEj3ivfytwwHR9Goxz9e3ZTrtvNDgp",
  "key38": "44WAyA5LjnYerXsi6Eexg3CqSb8gFokxHBeUDX45rfFbFARvY7jDChGWpQRmXfQerkkjFUD5DdW2PP18UmtCSkwh",
  "key39": "4Rd7nvGrSo3d2tiFjZ2xdWq6mseKaWRwZ5CHQkF9myxmEFAr77ptJZ6ZgkDFpVcDtJUuXqeTi3h1fmWR3aXtftrN",
  "key40": "5duf4VZGvHNehjRypxUihujFpWnVMt5ERhzKQ7UmtFRi41QYj1gTUXrMLcpAaGRKH9QykkiYCqmGqpZYyw29huJs"
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
