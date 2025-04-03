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
    "4uEKrhAnJEtGbCVurJLcUUrLfjbtPGHwg6dQSQmjgM7sGvj29NnrANDUXpEq7gZc5ACJtK13DYXp8Q1xG1b3Pa6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SsMMrX2LoNcqpdhCfasjqbydu3afRF5EuvJM5HAf6iDeZVMpasj1XwmfncEbNaGjUsk97H15vKo5gJfJvhmJQMj",
  "key1": "CgH1ncw36d2mG7WHYjQa4nauWHUTkDFQSKgFeMqYKG2g3p2GAaV8DsiasXw3pWqQ9yoN9vAoGVy2RdtgWaP4fzK",
  "key2": "3PDkan4ZuUXoG7jXaUeWQS4Q4gwCLMXtDu81pTiiPfX2HZru74EG8isLL9skYjtJbqtjaSzoTbcn17Xysum9DZu7",
  "key3": "2zBu93xErJTj1Yy17gUDBFELt7TpGHHzCM53jCHqvJCn2jK2RzzX7Ynd9BcFrmoRtZW7XmBbRgQYNfbnBHYDzmtg",
  "key4": "4ksNaUAdWJJiLAAE3WeGdGcjnZHHfXaDMgVFBNUeoKmkX9PMeHzFB46KzjyuQuZG6CXfwG79M1AFjTeifVrLHa4J",
  "key5": "4Bs9fjDxvQon5TsJ6VX6JXxCEEyZwaGC4PkK3q1wqgUDdDFmB3E46LgbHpeBXFR2cPGU2xuHbu7VhjU8E41qhLbj",
  "key6": "2AxVmAfUNbsjbu76edrbCLWEt6Q43tStpSrggXkriXeMMuTSyi1a8AvPHShF7EuDuv8SfTLLuEMPUTXhW7P3bc7x",
  "key7": "2VShHuaPEAVDTrMuF86aVj74AeUzu4uFUbBFbGYwi7wbynGGY7522ofLYNWrJgv3HSiRmXPNj6eD55TUGvH3YTAL",
  "key8": "3W6LVL7kYX9qEhEA1VXN44sZXncVadTaDJ2NUdGRKLeNovig7xCLQq6BhcTjyGQ67veebbyjrWtWN3cVXcMnKuBq",
  "key9": "5ahiAwBGQbhUEDeeGrw7Z5eYfmmjwrokp6pbgkWWHtupcH9c68R7vTBZjDT8SdM3mC7ycwzekcGpnJwgP5FYkkGm",
  "key10": "3uTQNWkWjrW4caFUC4uBbUbxbEWwqs3jWY25SX3hiKW3CydFf4GX1NTzFqXNor4QgmxVRahFMBuexk2bsGacRNHg",
  "key11": "7cRC9iYWUy2V4MC5SHsWhNmSZr9z8FooY8wKGjzLbNTnoWXcZvY7Fjf4VNLsB7PgG6oP3ZrVQaTeL57oBkXVLT4",
  "key12": "4ZrtAEyRPDmLr1gq6SEUpNUYf5mxLMJV2RDyrcmMrnQAxoQbaSECxuoGcicCzcBUaTD4qgBPQcpa8TEp6YYKnxzL",
  "key13": "2ZAWQkGDEsCayXtnn5RDP6cgbNtBvTUgSsBCy8iXKoTqiAD1NqcHYmgGr6JNNBSkFk7QdrEbWt3rGdBr5MGdgbVp",
  "key14": "eFVrGHEJeeDuXowQXX7SZavdc6onLvoBMY5GbuME3KNxkJRZocnLHX2BfYqQvwhxgBroyt58YhgitP95nFJcaD4",
  "key15": "2ZRwXvCbF5nA2GsfbM3yNZu1NWMeSp5NVSXjUUiFFwiLy8UgmYrQ7Qjc8nk2nn8TCFqWwQK63zJGkDLVNgE31r2b",
  "key16": "2EHcfoCPprxwZw7CwMD46aWjLzx5ozkHDRKtLD9iqeGqwaVEDE7efw4HHRZ3J7ZaysJsjPU8a6c6hMufSXFW5GWz",
  "key17": "2nfEPChUWmuWVo7nhoeA4TgebP5RtBZTXtBWrcNfHNuE6hPZvVKn5GH1UuJJr1mrPRRqEBQySBUWb83zV228PmsC",
  "key18": "2dYMj7mwBYobsV9A4sG2hTipVcKKb8qXZVrtSULCjXt6vXXPCxzGJthyaKwnz1gq1H6ZL8oanrsM1zL2roQ9HGS",
  "key19": "5XMeJwdiCxGB5sPhayB6DFeypYyZUqqGMXN8ZViQCiUP9jx3MJdZdBd74f2vjDwzpoxtk1j5DahtkkCLf6NeKX8q",
  "key20": "34Z7G7NBFFQQFFQoZivJbUsGYKKwTTYPe3vtSiw9GC7ghyQoJLLWrt5qJYqsRFBnujUiyAAVvBGgmYpjxixtYCDg",
  "key21": "2rgUdisNbppeBubHLmjPenRX8jzp6PEiQGNSFfxgoS66XgJXGFqyQAMRvHLmg2TDdksK5dyAQ4u2RAZfbhLQXGkS",
  "key22": "2Te6eXjBfkLQUpJ35N3SFmAcHjeikvGDD3UgLazhVqMrk5jWMBae6ALP92MgUGEA1LgVswp1nrz9tR3XABgUXg2R",
  "key23": "2JsnZ3V22kLhANuMFDmMNrnLaN9ZsQRUauPD3n85yg2JGhQJR4ZNaasxhdHBPvjk9rDXQH9ycSZoYURC9ihz1Ppp",
  "key24": "3aSoseHGJ9p69gwLmwuNv4EvM4oqbQ3evqQBL6eWLqN1BeQgCEuwXjvWyeArpmNdDoNFnhqwYAQJM3JmcAZThDje",
  "key25": "ktA8mGkNDQqBcM1noWBTA2Mg5exbeMZi4gXtCPAsjPn6T4yUu1TY4aGuEyfwwRn3UoQBBkDf3tjrGHjRxx1iVBh",
  "key26": "NZob1yqxTAu6AUoDXxG4a2jcCNn2zZ4Z1sJ2br5q3T3q1BMvN68LDqWtmfjX4nB4E3bECfr3gasG3mkBsjj3zed",
  "key27": "2d4go34zVb26o1bGxLutZXhdLyMrJjzQYZnVm19XsinVtnnsn7yoLP5C33s3ZgRe11dJhiKqDEPodQixYAC2cpnu",
  "key28": "4QMb1JJER3duLjjrkZhDYUwZh4peKEWPvxk3JghS1FYFgfDUXLNi77MdvtUyBM5FnB2MqSKiHDb9TMZRNQBkX3DF"
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
