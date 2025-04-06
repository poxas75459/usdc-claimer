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
    "3N4zZeM1DEtfV7d9rMihc2g5AkngAwCFS4DAboeoyWTAKJSXZAYg3PVrrwK1eYzz1vinNNbHw6v4VyAxiLKQdZmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rT1tmoA3DdQtJLom5STrrAN4BvhjqtL3Mrf9N1mYPtrhZk9wQNY9u9QDHqy8sz9haGF5GvtZysnyXgFbqjnjNcx",
  "key1": "5xNMKpCgMYaggY6zzvzaq5JQrMrmJXmY1VyMkAbgGn4MSC4hCcqMyEMHMshzjxg55gpNX9qM65LxMu6HAwcaP6xY",
  "key2": "4NCmpkgsXs6m7chMxmnrsERp3E76imCSe2nAEpuLRfrnUDjCm8CgKurvbuyXr5HZqtRGjju5KyKnCfCigWJzW9BY",
  "key3": "62dD4Mv1EYjb2UfLDSLcND1MsYLYAU3cEHRiJSZELJZy8neG1iM7FLJuG1C3VzK6VzkgY1GamssdL7XE5dHMDnXS",
  "key4": "bG4w9MPstvjwSyD9PpqLrbtZb7dSkpduoKGotsMkxJWGfpsH5d6X2E3j5rUcVgvV6GfbRcjPcdHxz1eY8Nu1XA5",
  "key5": "49QjEHoN6AiAQHBYb2dQqTpRC91LUEHfm4St64C3B7AT5XxRjF4WvfEtxLdxRZfvFrkrw5v8rZer9F8cYEHVCWRW",
  "key6": "YSmuChj5oM7Yjrozv4FdQWEjk4TyfESNvt7XwvSzi9i665qopTwTrMcdNrm2G33pu92xmEY8G4D18Bw6VDrDGJ8",
  "key7": "2FuzLNUm4TMMzZaWwvAQJkDAsK4UNeRsczyYYfESYxnjAVZGyC5Z88HkGNW1pB1TsQ86MXX76SziFkCjggB7qJyU",
  "key8": "3RveccnkCSs6649sgm7CNACGQZvQTFgTqHKcmn6naWMrneVfm16bpnocvCD1pdAG4nACfcqb8WndEnobQqRaYzjP",
  "key9": "7A9pSBkutysnt8iVofVMFEppmERZSrfpCcMjxsXYqJBzVKSp5GvCsJxghV3Sep2ihzjdQ3pGr85aVp6hpGQrDWQ",
  "key10": "5cMj62HbhjfFYd3y8b29GVfEMbMPXbB1aP6Fzvsu9jDyRfcCM9nbmreV5BjtgSsTLAvga71qW6PeAryt7PtH1wks",
  "key11": "Fu7xH9oGNh4aFUi6eR7tvsCCJRgLKc1b2ftMLFgLeT16RCwEWm64r5AKWARFKWV5f5uJY4kQG9T6j9T86skE8tX",
  "key12": "2FzaT6PuGycYnHHopXGQVVw5mo9hDZBKmrBAh6L19hwnSyA9EF6dK1ckbVFtXCCFMf6j6rTDkC6dczS5H963H73J",
  "key13": "3pHm8o8HhAGH6AyL8s9uC1PkicWDjRbkmnhFgssN7QA5qTHFtKAb65nZn7Lgv387eQ33RUhRuWtt2WLgKB2uf1zL",
  "key14": "2oPFzcjR4gxDrTaWG8iYy6iicZKqbry3QVBQ2pjQ2wX1hYKv3iuNXZTAq4jE1bboeFC5afNR6RU6tWU3TjdYZSXn",
  "key15": "24FZpQgth2fFx2FJiTSiPSbo6UHTQCLFGKARN7YC5PxBRQPYCFbSC8Kd7pgtbP8usaromEnd19ispJvBUfaShXnZ",
  "key16": "CbjtCjJzeu7eii9QeGKAsGMeS2sgL2s5m2oDLBVAQA8DgHp3HGwUQ5wuAZ6JdWNx2rmHEzvAAhVpRcyvXnyPv5k",
  "key17": "5DPCzocc6iTV94ZnzcJEBas6bJ7cpFWoy4H3fGp9D8N5u1eGSnjTf73fkHNWLTDqdvkHHHGtSAouSjt5Qwc8tLSs",
  "key18": "4bjYdqTntirKnUqakPjZsVF3Vpy4rFUETXUEC8PPLpL2e34kWjbqrQtxnnVcMK1KB97WnQgAQcsuRp5i85UTsHjt",
  "key19": "5rAZe1NywEALMDKbknBfHKA49kYwhfoX7e468J4EBYRzJo8ijw3jQ2NnbGFxxu8S1mB7SinjxRfymD7CZxNrJvnC",
  "key20": "5VZfkGYs5YgLmrkF8C3HLrJ1fZUaQoJRvk4MPpvH6VrA2BRcWvHzatL7tKQpXMwFVmeMNMkx8hcaCLvbSzKjNfWK",
  "key21": "24ewaC1dLP35BxxQpiddhfjLdxj3z1utr8EBMAehStJ7KZ7kMhkVh1AqhqFhKCc7Z8LvNoGCbYGrxUDUS2xXTyK1",
  "key22": "ewoCJeGsWNbtNaFnV6n1RKptKGoYaoj2JD8kC5LWMXTPVzX5BcwpZQY64kj448VSneRWRHfsGXBgqJsicGm3CEW",
  "key23": "3JfTY9Z355ee1WBwxBu5DTtEGPKuU6QdVhJRYAqZmQxTsWgYhEvdm3jBLrZTNyzC8AyxCRBqCXdLtgMQXu8zispT",
  "key24": "xFngkZkcnSDCF5QUXhPKRRZwZCXaSJ5SAT1Jv1Sh4iu8ZgKHV2oHUzLMMzTdPjjobWZP9t9nTQ2h13hCiFinwRD",
  "key25": "48HPzCN4UjHJtHoa5927sBP72TzTAJPZTDj42HebZoDdqa4UvUVxb5CMyhhEc1uvTSvVMq1LdpxrCmQkjV7gUawG",
  "key26": "2AVjg9RF4MF7eqjhr5UR4ZyQEGZzdM3FNgs4ACyUu7fJaVwQ7kCAsLgQ4jsDUL8goLVP1BqPX77xKydtNnq1GnSA",
  "key27": "AkmwfvrHa2fs93qapffdYqQeKJHqYyGSharf11xDe1GGo35bZXcoEyR82CKV3218HTLfcK2f2DSZ1oCecKTWPoJ",
  "key28": "38MmLasYu69WyWuRjsg2BuXpUa7s9nQnDr7Vm34b4r7K9iV1mTGkep9G1CWyFo7VT5daFesc4xzSfsAtGEHo81oz",
  "key29": "4jBvQxpd4Z95r5ifAGpwe8PR2Kih1UNeVTgZsXXi4d7C9VzeeKQHwMjB86dRBEKt7JqtCAVXXzWXPR5hGwWV2ihF",
  "key30": "67LbmTqiMJvkuav3kmAhg67F1nsXuPkK8nwxi9zga7LZC8SHkHjuDD6dy9DsoG5fA4w5ADY2ntCrjm8bF3p7ViLc",
  "key31": "5oqjc91yqNL2CyGi4KQr928KRBtrjS5AYcW6ziq4wocLyv7Vt5gfscPsuc4c23vwEEgMTzQ3tBNJSUJabHr7ySxo",
  "key32": "voGaGuLbeuuGvWDKW82DhMQ5bqEoN4peYf3q44PAdo84u3L8Wr8dBVNDfvkQjrsY1R3pRoh1UPyKJ3xBnxQRaaC",
  "key33": "3m5fTqUBbngjgMno8d6g4bdhpWFmYTSbsQQsZqWXvfw9C7gzwYK2LPoj9nYwMHmwyVE79arumkj39sMJdZNzxV2L",
  "key34": "4vtrb2GqASfWQGmkYpbZC7qynvUCu1JTcWDaAkGcmBWe55VWThxK9G4v7AU3qXw46uBAyitR6EezFAuSab19on6Q",
  "key35": "4rjcGyN8eMsSkJiCkxYNmmApz5bddcbWnRtnddJpsZbkjDyzf7WfcHuAcWu6E3haiDWXZx8r8ZgxUXbeSFUgUDyF",
  "key36": "2F4Ss2VEwxRnFhXr8CJfvfHkQea92hkaMgVPrRsDJPPD6JEd13uG3erLoJxtDVjetTmy1wNZyJHS2m24iM4b8NWB",
  "key37": "332oA1mWxRYi53w9GjhFH2YjQ7SQTg2BhVteMtrmgBh4ht98YLYFsU8jy6JjxvfwF7xaSvLVVuuWfdWVvcQDuD9F",
  "key38": "24iGXW5wLmLz1qe4zgFcnLgd3HVs8TvrE7key1RvkyTBnyRKnRFGvU4w9nAZwSi4Na4ztZ5vWDBs9dqitcfe9VXa"
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
