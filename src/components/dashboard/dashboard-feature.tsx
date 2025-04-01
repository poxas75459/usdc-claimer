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
    "4ti8gZArq4V9B5pYcCh4rJpeFQRsPWkNwrUWU75Qt3DtWYC2Y6WYsNbjL2vG2Rrbqf1yrKi6oqqZ7QoxpZNUgPn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JCRquc7zLpUx8wGFB5gaJTAZYer4JNFLVurSE74Pw4XaMqhM67iPf3QvBBXCX91DHD3rxhQnZ6UBCvoaN8KwZ8t",
  "key1": "4wjP3KV9u4nBoLYFz1qE5amFY8BD5LHd6S22s8XKU8jZ2b8ghcAy7CaRJ1ohLeZ8UYM1Xn4kkgPhiJdJRRckN4QR",
  "key2": "fPLeNqN3pzgJefZmzpRmUGQva83RPx1PXGWkiX3dPChYHMd2kuk4XTLGa87pxRCzPwEyZi7mJzTTA7NUhxStHCT",
  "key3": "5T13L4NTvu12cuALBJFi2t5AwxQy5VkG6KX4SvnLcghcsHQ5QzkKLEyKNuzEJbdFK2n7D3bfRLCxGvpNbWcpbdH",
  "key4": "56r5kFRGX4zJ79yKh3dM8foq9FssbDNfKBgP1EFRRZPGP9nhWbfefNzgGaGAQe1RyQayEgnF6qz8kz6KJifu7CGg",
  "key5": "5jF2wS5G5T9sZPSXRipHrMV75xNj2d2GcsSa1bvoFQS7h8vwXdVFprKditU52Ag9jd8vYBgFPerYaZabppy7RBFE",
  "key6": "5ca8fBdFhiAeUByGNzSsxwtD3maenARtnbkaNZpC7Xz8rKmbJcRXzQzqP9efki6aLUBWQTxsLU7AvLPPo5dxkMeX",
  "key7": "3UNmKCZRHpZhEXW8VLkScFw4wrKNN5AnSZmQDNZ7AbrKXYMw7zRYsRPJ8hJNqZGg2oeTXWGfN8wy1X8R6VJcBuJt",
  "key8": "shTCsQs6whNRKpTDeVzNtiAzHsqEfaK9fPGvYxYkXcfXMo351My23E2qSXmfdHnboBfuVGTpLZQB2TS4AqXKanY",
  "key9": "zSeuoRbuu7Y2Qt1CpEGKZE2Bo624TGYjVAkqigeKwCZA3bqd1KX7GGpZnB6dfgWcZViqVTpbfDK6LBbzNPx2hzh",
  "key10": "5Wy7t8bviEw1h8wLDD23HH8xuxoAZVDwr44oSrx6o9RPJtEQbpL9JkBPxM4xr4Va5QjpXMa4tSYZ4KSonqrv6Pu",
  "key11": "2p3Gx7yFW8keAM245WCwrVWVvGgP1YB5dYvVM6sfh16CnrjZpcGtUtw7qYntn6uUHCMYzdFdCagjHVc44jPe3iGY",
  "key12": "CV6g9RkaHvCQgYFuhr9wzSEfA2FPtcnf7khLTjeJSAjPHkbnwGcsgHjGCgQWEc4Wt46CdzZgxvFMqpvKYbpgm8p",
  "key13": "66VYbazbYfRLHhc19PoBxPTrLaVAAVzeaLTf9JUePN9nqP4i1ynhTbu5zVUoqiWijbGnZLVXybs6VkAeFm2WVXPL",
  "key14": "dVQz1hBwQsNn9YoGSGdxBREDynuGSH1m4Fmwo8SyJwCvqv3dXDZYnNWAFUB8hKtoQyyprzqVwZ9JXVYe5fT6Gvs",
  "key15": "3o2TPTWyBrtgbwUp2ypQ1frjgmu9YgVzDhhE8NTeg7ndjCo4xQdwYXPsvZ4NxLd6wgCJSGTtvSkDwfSeRNVmEFyk",
  "key16": "292GDGFp6NRdh24LivtWaDdaBJ2xk7yVa5yW1u91oUtM3PgSaU2gWPf3TsbbQt3uGJcBi39EmDicVzhHM4LoHeu9",
  "key17": "34fY9b4Wa7hGz1WRFBVAEJojaCNxRWyNYYp2qGNG1emCouSGV3RsdZ5NbNsiintEBCkodnSY5yLxTQ7xX38wptzu",
  "key18": "3qnwqesj3xgdsRrkgnJre3Zmc8FVXgiknTuUCaGosXxh1JhDZhWR9Bozwbasq8qVh6GC8Lx5DWcnFD24LYjCV3eB",
  "key19": "3AL8TJTZRKCLCjGwJS2XAfEvtY7xiqdpYdiLScLeTgoiZD1pYcTnw68pGteQ9ttExSBcnGKLuHpdzZQd9691yh5x",
  "key20": "wRQA9QpywboceiU44hoh1rfsgZnmhLTuqjM5hhu9TCxExxGLem4wL5U4GiYp4x61FaTVez2XCo5gqEMRzdF98XT",
  "key21": "3TsmJMqccNfkefZ58EDTCWBU8mT9cFbr85KCK1pzrVKZ5WAn1rNqxRSBz74EJGwgp4258XoNgt7kbfvf7dYKA9DR",
  "key22": "52zBxttoaRHDEC8by1s8Uyv9vDdXr7ZeTjhXyBqTfCWkEoUYyobksFqvGpBN9hh1CGia8tjxsxxPKaxNBd3sdUGW",
  "key23": "3VxL7w5smxmcf4G9TeaCUnuKMPYXygXKYj1GS1A37PTZE5rF1gUFKeiQLYvsa5WybHUojmmeetHydRVQBEL1pF8P",
  "key24": "3j6RYfr1UakjQv7dVPXWTPbH3nLheuTLrxn9S5b6Er1d54U1L1aQGEda6iprvay8Tr71xaGtnvQHsV8yZkbCTUaf",
  "key25": "x15MtVCA26jJNy3VwZnuvHHnCqstyCea5faTf1FmQCiWfA4Mf9E5w2yWwhDpYCFUjCsJLD4HfgjdRkB6LiFP3aA",
  "key26": "gMqFYyoHbGVMtt223aW5vRKfJg1LBnksRpVsiNaCpMTYnEdDLe14dqFafBvrs53L46BvDupSvrknzrD1ChXmjsa",
  "key27": "2mQvFh6PSFKCotSStqsDhEXzJhzmbYxsqtwpniYJdZvstVMTwYEraRioDwNKa1HcRpZ5hcS9J9nbpcD5iTsqVtRr",
  "key28": "AMQdeXiuRgtiN93g135vFXieExafKKxcsRweTofS4x1onTYeMuSbTRq4ueF4wmU82ACsChm1pruJi42SQcMPmiV",
  "key29": "opug6NNvrbpVUms8GatLn6cW21qVRBzCpHgNGbXDgDeAcVdExkSE3XvrCGB4Go2DTW7zgNBMt4rLdBMhjCbWAXZ",
  "key30": "2x7sbnqs86jTz1idtDzPqS5tZuskC17HC5KRYozmsLknpNtHHJVWPtdR8GiDp89JHRts1LeZVWFdBmhgCXxHtRnD",
  "key31": "3H3c47nmTVcxN1NxN1qtu9SPeSwFE89RWhBooQNZzAGNuT3KHiS9FYsxLxZF5GNpPum4djPVp8wpj2J5Xjgh1G6v",
  "key32": "54mPpHcQwKfeGCnTjjL3dCusRuzN6bsjSjZntZC7rPca4QBeL1x5p9ap5Vtxv9GQcNnN9MRzvB5knABccLjwwe7c",
  "key33": "2r7SpryrLCKoxrk7DE72LyzcQo825FQU33hTY4Pm26qJUZXcmMdQjDDeHzHvFFXZZqG6wr3jhqLdHTygActX2z1r",
  "key34": "5MqaVF3YiBiSzK3CAkk63QUdzSp2Z6GyjuaHvxpiiPS5FSE47E7HYbocPY2ie3riBjgMpRtHr4zUb2rP7cB7BQ9L",
  "key35": "5jKnYcgXxgiN5ZuJeFBP6PSNiZcEM3gURAV3UjG5jkcyhBBcNebQKipxpwe5X8PQomexSvP7Jg45UvWrBJqxDTye",
  "key36": "UbeUohyMDpXeRBiivKywgx8zQJrX6KHhRLdDMNL7r7b6ZUpmhW4EDMyuwAqkqEksDhaB3M8Pwmyq53LHtm7KcuV",
  "key37": "3cr7F3XKWBoN96kK8x44qEoyzGki1rTa8rhLmSTK3nSf4tahPb9723pNTRhPuNvsnYgBkmXFYU5cmo5LhhUz3cga",
  "key38": "2VUnjAX8iBR7ScfwDthkJQgf76g7z4BDukEnws7AtEwxvPY2uoRcrEdSbVAkkVHcKDpqMLUyyLJKUNLjktRuxzaa",
  "key39": "2FKvXkArSCS8tfC1f94jaTpLCHqXpTbum1Pz81VgM7fJDdgPyHda2zc46cE4h5gzuDYXnMbht8Bg9DaSYzrt1oxv",
  "key40": "58K5hwpA7KZM7KhqbnypFhqAKdZTveLESgkyhMRdzxoVavMVx42BC5Nb6WNikt1fYgESypYki7hHwRCgk8d9KENs",
  "key41": "5ctek4a6fnCkYMgthxLUfDRYMj7RjoCnG7CXMkHRAiws1e7qNcueKdZfTcQMNZYxAWvcHebfFu6dfNLnSq4LDudz",
  "key42": "BsRU6ZCu2DnYYYf8dd4eH1jGshFa9APGtPa6pVXRTvmwJtdwYvh4tgwXHEsvHqcRkbgiB2hv9LTvzHRBAFcsQUF",
  "key43": "2ZqG5CmbfDeWUVYp4AEkDbHhqHPL5dw7FM2P4GaWcBxR5SmVogeY7ohTa7vnj84Y98Ldfsnzs6Kk6jo66C6Lry6V",
  "key44": "5U96aQbjRmogCVocwKNmsVMCuJjtEMEwSfA31wuZTWWnbxTp2iGzFr8BzFhmnPGJx95vubBa9k4H7tBM68p4uWSr"
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
