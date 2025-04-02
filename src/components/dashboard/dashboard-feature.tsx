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
    "kbXfXRdC3NoEHcQgrvPC64hSsifSQJZN83C4S8rvo8s18AYaVpzZsp4eFr59VCNMYzfyxKEi3BPJzBMAv51TbQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ufi6w9Jqxb3xqGPgCvHFf6RqFvS1MMZ7WLsdbz17EFZYcXaoxpZKAWWGqLVuy1nE9f9HL2815H5kkRL4fftW2gn",
  "key1": "2mX4oM992MhuFJEvfDmy9cERAKJtMc9GLCo5GF2F2J8ejjY3YLnnieydQqUKeDJuDHDx814xTwqshs3RT1Z5Kbsr",
  "key2": "1ixpsWMg2XohWgtnvwpoSf5tCmFYVX7YfrQdu7foQKjAQtzif6ioaBqa23Xm9Tf1CU3gR6uxoGQgjXwxZrvfT2L",
  "key3": "4EbR3K8RsbMHJ6yJZyTYfWLt6Ug5z4ssZvYd1LDXNydXdqQs21BSSN6fRi3rmRmh4oiVNvBJWLEMk83SbpCgNPnU",
  "key4": "3bN2Hd2dbYaJxeqNAEG3Gxp7B6YKu7t9ZxBPVsMPoBS721SkbrAEe5ARrQr86W2xoX6eJSkzeVDTqzdYxcBzYEWY",
  "key5": "4SXY682EMWuuF9E8AJyGL62XcD3drJQgGruGYDfHX8Lbg35TcP8M2Gd1z6Fhc4rzUmgZqoKhuzM1jspKXxUehrTA",
  "key6": "2nrA27L8QmYKx5pGbvY5cHnxBgkceTpQEcfk7swXZeS7TRL7id6ouDsNTs6rRvf47rZzw8sKNexh7tEJsWwoQEkZ",
  "key7": "2kt3pzMUpqdrTm2BvwQkjH4FGihvcmfVjFvsrd2WyoYiYuTqipStnA2YHkWLJfXAQPx5LT65HCRuFAdt6UunGroV",
  "key8": "4CC7yHVpzMZtvhpEq5eKa2PPTgjkYWsRxdprHSSRGHYz5FZHJ5FWjjKyZvEti23KavCfB7gf6PysLybSAnL4eKFA",
  "key9": "4vDKMHKgFxsSjsgnh7gtEDtCjnKMHUXieNBy9bWNamfP5DfThmJLuRCHjyxvyWpC7Y1aSi1vYvLuXKHwQMu1mPDs",
  "key10": "2ZnuXbNEBfXJZvXWzacMuegYU7gapyCrKEATGBrChyYBccPSpJq1G6MTZ7VQeshJbCsuK5Gq3uvtQHmuhrznvbbq",
  "key11": "4YQTag8kywUCuvoX6T2tnbfeeWPz1bADEXxSxjucsQV2q9c1MscqvdNKx4xRzKcG8r6m4j6aP8ZyGKerMEE6N5gC",
  "key12": "eon4rhHcszgfvaTVdqmADbw8TuhAEZEer1ZgXq1offPkNvkkvUMgAmEMW1aANo5evab9CXmjzpUpaMAJ5wMVTKd",
  "key13": "5aVG8fMWdbbrm2kXPGrkqYB3HmjDJj9zA1d7yeqcDJeRG777xf4BWesUP4k2y7bCXqWyXdrZNmkDT6pZoDC4717z",
  "key14": "33UvnEBBAft2JmTMi6qrdMZCrvBU7i1SUo24JG8nLCmufa5wRHPgMafpgRnDnj5CDmBKALLzKzcy6pt2xLNcn5ps",
  "key15": "7JmN1ETDjjhoWbdgRPwQmnrLjkLMaBDZHpZhP3BqKmpLpDiKTPCgmQZBftdjemZ8jzbPi3DqwLyXajsyBYAb7u7",
  "key16": "bqH9ymKYmWHofVprHu3sgujpZGvA9dYQPLm7Zy2dRH4ZiPBAp68ojpyLtDEMBCoZV6iSCDbR29pdSBAHi5UTCZQ",
  "key17": "23YZDCeAsQHLmC6UGaVa48unYnUdsh2xPBeHXgm49rD31TS6gboWxm9Qgs9jBAioGE3FyztxF4XDBnaoYQ8i6nxW",
  "key18": "3zGpwTu9LnujGZvpn5CsGaq2uXu29QML6YTvN1TEomvwPAbwPmpqkjJovmbKQYPDJPbVmY4qV5mWw9t1yx2wjmVa",
  "key19": "sdZvgakdWME2jS1r8rDhMcPZaXKKYuzVwNz6V4oi35PoQJs5wpAGRQwujxq15rP2eZ5MmyomxEWuRQw7a3EAzhe",
  "key20": "KhTx8mcDUCBVbvR3536W9xhGbRT1HnsJVKGFZhRsU6dzHw5e3cRUwi2N7e57Exe5GnDyczNKE99oPAdaymEDC96",
  "key21": "5q8158grTaPxx5MbeDp9t4AEX3TqUjeBg5JYQrq8bjNL7NXEj4zFFRvMF87sRoB44TSQ7knVTif5GAR3n3gnUES",
  "key22": "2LG9mkDKyKQSX94HmNYuDwNQsHiAz6ZkZrcyesRfgbUbwuLfeRmt8qMzgXe9LJ5MS6Hz5ob3F23tMtWzNaP3jyyK",
  "key23": "2cY9dQ8q2FtQWKuNugNJVTjeVvxeu2VFZC3NWm3XCApLhrMyokfibCmo3Si5iv2euD3bpanDtdfBFXBR1HXXoxRv",
  "key24": "5YWTYeTbfbYu4r7E4z9nepsSUj2m8uioQFCJ2Dos35PHbkcyCiptjWAD6LFvWTNK36xM8EidSvdYNKbxumgJvZmj",
  "key25": "45VhxmezrjyfpMiGLiAAXo5DUtQVxb98PDgMTQvMcgMLzZT5jVsgQaAazz3qJJfwyUXc7p1RJdjxSZAFSuRY88qz",
  "key26": "3MDGqwNwMT3j8ZtMLYsJfZaiP1gUvLDtQawM16y19YWXY3v1WSeAw9UzpUzYFPtLveM8pyVMNZ4rsQY9fcqaSpfp",
  "key27": "PUqM89Honq323Htu4uY5MnB63voQYtAZW2GZcy2DuB5Q8FTbnUTMagFrLBeD1TcTUu2xLpqCTN25viFHE929ykS",
  "key28": "5GyrnpoRztMi1fZV5hszkgwjG6mbie2W89sUiVHDZeo6VdXKiRFuHY1RV6WT9CiW3U9emGTTeXrDa7VArsy8Lcaq",
  "key29": "3GNC9RDxw1oKaE8b3YQb2pM8FfsJAEDc9vyG9dVJv23JiKUtQCxpTJeAfg3Xpr7Bk3YCgD4Gmmxb7nbZzGD4Fmof",
  "key30": "2ajpD2FrcBVmDJ2jjuh1jiY5cY987sBK7bAxje4N81dhT4tzYjbPRsMNKsLzuPQd7Wm6N5USv6DK7a8jTbQkkoXp",
  "key31": "536ex64B6tcNUu3xmvaVU7VDcFE1pudhEZF4bHS5WzeyWNPzSK4LGyJEPYNg8vUKzryRUiaKzQSwNhAH2mdQyQXn",
  "key32": "3FhAPwfHGTJ5YXkbKsTWrxAJXW7J6EbsGwAgHQUETdEzzT8GgLQi5dLQ9EpQQGi2HGeGH6cTfhdYqw23mQQjExzB",
  "key33": "65t4UjWTLWsDYHy4sK1UHshuT9Emt16Ras2s18xbGkVacxSCegY7LmsZciLopPZttRvDhH2Y1R9ivJtAsphcGPQw",
  "key34": "5tsMZ4jqz7yuys23qNsAq3kY2qZZjQg6g7p4cSDstmRdozRfjU8ecXPkRDoEv3KPz7JS7ngUBM5mvThM4NbZuccn",
  "key35": "4TfGGDthCqNEtwsGAQYn7Hq437wkHTfzqSSrQR3EenaKdMLM3RFbMfb8wf3rhfNupMpVrGG8s1bJ9QoviZeXVpnn",
  "key36": "5fTzgziX892TxrX7RPPJerBrYrWJUt5SkwNub6RSJM8R7GMRXHB2taD69WupA8hii9ivfHWx6NwZudzWi4cHW7ch",
  "key37": "45XpnrE5mwQwiAFj9mQv2BQmbLX8VLrMhbKJ564XewTL4oWuQNj9dHzpdZtb7b6w4WdnTs7es5KdBswdYxLvdvtQ",
  "key38": "4jPEKcyfpM1L6BBzZB3rRBKZZ7CJBYwhX3hReVttP7TpEmtxg3feAV6BtqmhY9WZ77PPBacAxnHr3ZA5gEew3cHJ",
  "key39": "Sx3UnhKfjhqN9PBJ8gb9brJAHvXRpmi39PBdCtE2q4wPpEzxyeLVY1qsFdNgSRbEWuGEjnKJLRTetEasQEZmYjT",
  "key40": "DETQiQpSgGjqL9UtVvixFqRxU9baMe1rAWGEEGKKkbhnANxWQLTuoZbWDGC7sDMWdhVixt3hqVH2WJSNS3srujR",
  "key41": "b26kEEE94AoSUErukAsNV8dJfumBSBJHpGWEMnVUCtu8tjBsCAT3rS7AJ936iQBD3F84jxKZ4wGomwuoikX5RXW",
  "key42": "8YMLej7hqpiGmVM3eXRQsnR2W8B1jqfRbdsiFuBPRmFruBqaiW9GgKpDWPfiCsQ9zByoTnNHCFAiJEqqVxHu8Js",
  "key43": "4fGrtUNpyKPxm5we7ZjyKAK6SH3jB2ShNCMvNPWC8XQfzZrCArbCaha1KAQVBuAngLzSsdnum1wuxfiTJz22TKXt",
  "key44": "3zkV5JHox5D7PmrASa9j3p5EurH3rZPP55FpujwLi4RFW44QesHajFMAPMDVheuMRqFoi5cWSYt1SXVXeqBsjQ3b",
  "key45": "3xjxmPi2x5gV971Zb6XUZDLv4Jhxi7wkF4gD4qW6HBbzH2kJjFBP5R9LjzMSGmjgwNfXucRSGQkCDb8LqNTVuV2p"
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
