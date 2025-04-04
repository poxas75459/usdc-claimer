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
    "4ozxaA5TaDJb3KVyFuSv2awzpTUN9pWhEfuQyhvAt7jiGHc5b9mcmqb483pMzisdoNHcaQLsXZk9sDY2aBjnKMZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62jpaxav2npEk5NDbAt8PMz4RCGpW1wAzTrGW2krXaTC4Z5vy7NA5ZUU4bMC87ZBQcVFEfsPES3r2AxNpGNJosVV",
  "key1": "3sPM6f6v9ZT5GbcymZ6Roy69tmtgHrb6L57KWFxhQgNrREZHtt8ni5dWRDPVGwbPVUyZR8wWeUqaSm5qgYnrxsYk",
  "key2": "Qy7Nc8QcnCwCJx4gMWja8jBvQwLNBHjE5okqkJTcXunBv7xeuNdGGNdSyzMd8FB6zy19ftpqjZQZFomGtq2buhn",
  "key3": "5ikrLM241Hm4pxpMvJkDuMRKntZ4RMfYutXxqhwPtdQSMdz7GYChjhM7a51dbUYAqDjb6XLWt3uw27y2mpwzTgeA",
  "key4": "YNrCmBnjJQZtPdo5vSHaDrpHgSysnz2EfmKS8AeFa1837U2KkhFahTjuQpPGxjZrmQpaoo8WfBxBbNgkA6ZtNR4",
  "key5": "5vJmNqucV31jQEGkqdYga6Fo9LWhfbtBcrsiWkZWQxHFVngXfSCBLotene1fpGpcYg4vZgq3yC4xkskFZNH2LHdF",
  "key6": "NT8ZriJjskkUf694wWCSyVP9gZcGECm2PEnamEdMfpxJc8FkgFYi2T97zUrGJFTzEsEQrS1ey9f2ZRRyFLbGtbK",
  "key7": "TfQMMxisoLasTyU32QekNyBAj8o1eBVPvJeLe2eCSN4hYndYuFKABngVyRKYZmecrUENE8S6DqCNMLFB8YECp93",
  "key8": "cFqPFY9fG3des9ZtezypSZ9Ch8WfugqcbiVnmq3eBbaBAqi9oZBzidgJ7jF8cEvxdp4PJVZ1gTDuJ4EeWMe1DgD",
  "key9": "4N99YndS4SDUBHeQ6ZEPr9XfCtru6NL4hueiATzGZxAbEvo6W287qtNKoXJh6WTgmZrqquqVoMq2Q84yaoA7jWtv",
  "key10": "35uXrHjLGTdDnKj129qijULBDXwWQKSfUbQF4LdxttHkPbJRNisLseWCVCCTTmAdYJ4fH93ydfQCNShcq1jYiikE",
  "key11": "34Hmj61TwoMk3kFGvRhprMtYzQusKRVotm4jQHXUGXxE5o4SXwY3xCcXtS8VM3332xKLARgj1wC5d2Dw26nTJ8PP",
  "key12": "71T5LCvJw5f2mixSx1tNgxd32GJH5L2AWTBQq6DUBbahwDcVGqvYGSnwYx7jYg6HjTB85WBMhFCDA2GavosxeHZ",
  "key13": "4XJBvRzuoXeXzQiskMk1emACJSXyE74p3nFq18R7bso4HbUnn2wiev5Hg6eXkGfDkEAgGZwAYexX3YkvSEALc5Yc",
  "key14": "3HXVDx69iTi7fSgN9J991LJwQQFzyyqePQoWuVEaZYHa4oiV2hY3BJcP95FLHQNH343RZrfPn3M6VJrAvEvGEWjJ",
  "key15": "2QndSk6kgN4qFcKVSrNABuZofQPu1GTDzEovSbjK3dd8n6xdY14YLToVJLSdZWLfWcZDSHSYx3DiznQ4C26CgavR",
  "key16": "5NC1ALWxnxZEw5wyy5HphLYByTJexuiStP1CiXVBfN8no5xJr836L43t4nVEX2iBvGedeaJSPztvTbZJFbh55Ssk",
  "key17": "27BawqYJ5KLNea78TmTFnUGbYQESHr6Mc5e9MsW6i3oeezeNLon3cY74LzyAKsASPxsvcaXqJ83dd42VSDrcpw6v",
  "key18": "3N6nFLiuXyehzTJRmsytvJsatc1tNrE3hg2g6AFW2R7zToH4Ynkyt7sky6qKEwgReauCbCvXsZ3ymBQNd2GzqhPg",
  "key19": "5hhKR95wBN84MwBFJXkzQgg2nE3EYcgu7sc3VYjjKb9QDLRM5NV2roisgXxLNiLCpiasBKAVbmqsDwKDMExzcLQP",
  "key20": "3WGqrv2V3HauEPRkY9SM2g2nTnTgmp2HKQ9QYajVxphmaqRigCofXHPSgF1dePmgQ377mAhBWcW8iPTHYyA4Zzdq",
  "key21": "4VBbjjHMaL6JDYzAiRv5Rk57WBe9M1UWdepjEbByM3aX5fkompvcvHJJvPi2dnr2Ur4b6ULcVuQF6QVNuwXs2p4R",
  "key22": "2UTVRV2sYYCQTBB6wvFG111p5whNpcJ2gbNoT9wJMCHjnwVXBfuGx8jgW5SjzLiVAt7A3Fj4u6ujTn8nFyqmHd61",
  "key23": "jPXzzsvFrWTHMFu5r4tHfvfhbXYTTWjMKVqzpKyyujFZeAkaR71EguG2Bv9n4B6w9Sjp93ZxXAAuaHJcWLj97VV",
  "key24": "4QoX6kZ5xSeces7hyGHAnpCUFLq9Rvz2ncWbfhSc5bSHNW9LCWmE4BfFxBkfVgkAGDW7W5NuSrxhgYccSCXDrSoj",
  "key25": "4aY7kbFLXxFsjx3tbyXVEXdpVWvY7epH4NexUU3BP14CYE4v5NwSUkmsDu2BGUZgTzQU4NpME6Va9mjh1DGN7JMw",
  "key26": "5MwzviA3aoTpVSHwHJmdf3hCsbpzLXoNAL7YexUs18Wk8qn2ASFL4Ckn1xGoDvDaXdpEz6CMh9sFKfLAJBhfNNFZ",
  "key27": "3LQSPxE2BS4RwRdpjK4NYmZcvZqED4gWNw5BY8EgVwFN1b8YJiBdC56sjeo84FYvrXFQyZAgmPf7j1VKRsnrCv6P",
  "key28": "2hVJUCCF5UaWPPGhLL4DzahSibgPWcma2R3t83WfrweAyCWyHxrmMiy522E39HssF7P18cKHwX7kamxKsrKjsx53",
  "key29": "4DFrY2dmk5Zpz7Hoj4YUUKTsGpTzHjnRzV3xk4RSd6eYHce8otYjkmjkUb433kNanVYSSKXCodrcZMRohvk66npk",
  "key30": "3WLSFTBDBbxkQYYtQnt4n6z2q5mgsxwQwxH2gpo5moB3CTeTTEtKBCa7aBsHqLTuuGuWZEoMLgJmjBCR3abecEzr",
  "key31": "eh7tuKRaWwAmnJYiaMkFi6iiFew2QiKpYVJpW9dEjZnAxtJ5VK5nhe2sGBWPwHJyaeFLcertiQgWhSWNMwiSYzA",
  "key32": "3H7ucz8Nk2XiTKntQdFpDBwbvV8Fpgm6cxADchiPaBMA3zFb1XpMU4uqrZJ25Vuk4bURc53psR8TMEnZBx5yvrgQ",
  "key33": "3ULJcDkzP3oVUvucuajc56JYyaTVGE9XrMwhFnPTWjqM9H4uHPrkNueVrJxGVcKHqo6jtEu6QAZbp9nmVfBQGVLu",
  "key34": "wD3nR8GC6J6z2QEFhCmWauzKoPcVK95J77X11fMXUKJkPFPsP3nhXMSgK4EFRsPUmnCsMNEm3jq8NUvLYJFRCuJ",
  "key35": "4nVPZuqNuzzQSoU5UxVWAouNFsehefmy1gctw8FXY3ULt4cbPWVeYRDWA3HtEDtxyuAk7ZYjALite7hTVrMiDpG",
  "key36": "34ruvzd9stUUfTpCc6x59nWyWqtDS8tSDWCgFr6gXYPoBQjZEhjm1EubMwoqUed6DyGpiSz3aJTjcgDSjgoFBcBx",
  "key37": "2WE37H4UXyKm9own8YwAoYnzAdsXDLn4rRdc6Y5sY6Ub96LypTPodjsyWEZXmqAciEQCUBBKefWb9TKfafqPqRiq",
  "key38": "5g6YcG6DNpuMniNRQ1BpnBrLqLXSd73ipnsEVdmCA448W5gZjFfF7UWQgLRfNe9yW9f5yxBcdWKPrFNKakHrtNmv",
  "key39": "2goLHFGZKAABXHtRqsXPcbNuGRRQdcTvkqtP9HyR5AtYri4ftzBR7d1tZvPUcuscXMEzqvNAAAceVLm41QU1JS5h",
  "key40": "5aznMRMv4aqgFCJJr1sPCsPpWeCavQ1Kqxmn3ysXezCCUHMFG1YyeKFsgkxvMHVSZSaHt8S92kEFczZqYZogucb",
  "key41": "5bzS3vfL66bSdow6KoXwRisYwAJmCfXDmGEpqDmHZoXvfEwJetiNuF2aBZKhUuX7bfAuS4F1e5MU9urBQF12LzUa",
  "key42": "4mamSrhACjHp92cLYtLERxMeeViFCoDf8VMuKEfW49fUyLSx68B7sEjf57PnxBbLAhsK3JkKBkqrSQbyQLmDevGX",
  "key43": "375MWUaeH1JDR7zCf8XYTFTDatvSXofrWuTXFgRVJhFAynQMeTwNfh1hqLP9tDPjFb3LSYzMNfYiZL8Vqe73e1Bk"
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
