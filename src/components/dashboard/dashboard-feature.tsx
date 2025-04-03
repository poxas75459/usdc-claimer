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
    "a8f7SGz7WMMBG7vQyYBSZVoAgg52woYmo5hbZoWaoPctPknHdDeYQ7x5eKkNks8ZbwRVCgLmewDicAfZNV4QsZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HQn6npFpCKthkpZr6mQL8E3T8JkmpQ2qRRw4JU5ehHxEBjweMPvENvVV6A9kWdMjYqFQ5ixMj3fHggW5g3hGvSb",
  "key1": "5UFoGQ95N5UsAHWvhigpMngCjsNJbsS2nJQg6p5ot5hwGYRhCvrM9vUgkNNQwcGT7ZdzLxdWQpFDZ3RhAzNoPbN2",
  "key2": "4uraTGMarfM41XhYVf4qJLT3S6DyDoDWsZyvmHwXAEfpp3euSCj82e32efdhm4mf4Jop86gdqGgHVoajnKdFQJtV",
  "key3": "2AWRaqvAYAXwcBHNxdxWW51GdNezeQVQCbSJbuTJ7Lc69ZL2Fz3RM7r8pwxnW3QZ4Qzww8Ycy7okAHHRqsHr1m7H",
  "key4": "31jgu9CvypSp9Etc2FM4ZjTu25hJn1zU5PzLrhPM8QCRQjCoZjbXGwFK85J7ajn2c6CX1Qh251XeZgGQDDncjkn",
  "key5": "5dwKmVxx69EeGEdQ9FurxYpPvEzeDitoVahRknFgY1FVEWzyiJia6ZnHHGq6Yev7ShTPirPzJZmuoq6292wm3hnQ",
  "key6": "3VLSDZYs7hn1zBPTa7g5yMbc9fFr2AncYt6Km7Ag3DQWjvvTVK8qxTXCxgWE1ZDsYYaUignPxmwGhhTaTEUDxBeH",
  "key7": "38hqzXUEnvm3NbyGadvWhjpcQPxviFSQ3NCqpbHZEmxdBtT95fwwCC1ZL5kuFcrFa1tAG8vZXH2tPTqZ3G3xGQSo",
  "key8": "4F6EST8d8dyDKypv5ZwX7tsgnCXfQe6n2dYDmBzNKiMmojo2J3y2YkHDKMqpMdrAUge4JkGWXPmtdQLZdMYnuEkT",
  "key9": "nLJaF5iYRwKn9YL4j7BYTDwHRb17bzVuv7H4bEB1bbWjiyJQ2tZUNxVef2CtyTVX55SvgLZvtvhnv3PMc4yJk9i",
  "key10": "mJK19enr2KKxJD1S6M2oTxYKtoBY4v2pU7SiMVxo3fAJr5w4LpVQu4t6uMtRets4MiWVdj3ES4zh8Z6UU8fupMm",
  "key11": "KDoE68N5GoeviTToKmdXm8PDLMCpYwMS4TZDpKL837h2dwtK3NEMjSX8bgsmpM9jogx8WtdukdJkzjS82xmXo3P",
  "key12": "JmZasRFwDS2bsqnhjpp6DUtiZTXiJSvY67P9ziCevVxsiaedB8DNFqsiZijaj3bVAA9wEtsPCa66UBH3CzvWRUu",
  "key13": "3QHUa47tjyZvrCoUZBWgREVXWmXees1HwXeocSawthMVSXW3KwoeFoGMuaYVE5wz97X9KjvGsrfbDmHiY2KLqdmE",
  "key14": "3yS3ioBCFh3c7t8z3q7hhn9z3wbePT5QgQwstcGMy4FnoWLDyQU5HhB2SGnmeUM9zCVpNPyMu4WVTwk5axVexvSN",
  "key15": "gBSNqZaDF7Ae2MTrqVKYrNa61dQVZKQrVwXDmPDbEUKmsNqWqYUph6cwNB74tM7dARgGHecrnuhncWkAXv4aQVZ",
  "key16": "ppoR2X1a6JgruCz7nKDyf19RihpXjMRFWHZ14bymrPy6Pa4CXqnQQ1QrDHTDAviTqa5uZamaFH9iXjtaK4AMBQ9",
  "key17": "2o56THNeTma4k9F6Zm9oZDnAKWTS94wUSPMjJDcjikni63kTbkp3kTbyv8LRqBSgHDZqDy3snMHzPxzsjxQFb2uR",
  "key18": "5Ljvi46Hpg2EQFSFczsdCDjFTLpdvyoxdsfkCjFFKjP9bLTjjupFhbePxs9nHJb8DzFW69fRXEBkxDGXjsfva7X9",
  "key19": "5H8ZHbV6pq7uDCvkJLCciiQyMTjcZAfevnLJP7nHAeAo2XNMUPkXiNtM9SjkkzU4Sx8znixCnDqJt4Y6pLBJKQe7",
  "key20": "2iMkF28PJcNnPwo4QGpcc3f5wa7PDQbsQkz6uTbZu8PYx8R5s4aHXn9BGgJJLxDqaC3tYtPspYAUjyiG1zVbSSGc",
  "key21": "4K4ALSr6HosgjknXTym2sAi9paojEkJzf29mpcz862mDpT8ZvjMwvgMRoj7sxt6jikGqfWfMJtivi5eur16SoiPQ",
  "key22": "VcbnEV4xnXTDFKLdTokuzif5eTZSKWUfTa3tHx1iggRJpstV4U3TgBwXFfDkuNCpMsaiVc4e8X4qdKzmKPEGnx2",
  "key23": "4NdwUnTSa4Gb9QsBsABgHJeyxLTVneaFaZzErcjQFGDw9PE9U3V9nBuiheb9jMDMc7sLA91uytCM6zXnoWuysejC",
  "key24": "49rbTRkJnhm6789wos3QCV6vrZ3dkmSD6W8QuBZno751iF34En8S2QbbiD48ESm9deUVaejXeuEBf63x6Qhccok3",
  "key25": "JMh2T1Meeaz9UcVhGYi1ZdMwEbVkXaWAAcbBXtUDhQkxugRXHMmXJiSR6tLfHG4CAizwZXKZCr8JPLfbrLhsgqp",
  "key26": "FdQvVrcW6txZbwWTNvbfMGHPZwgBTUk7riZ43BVyktid2JwCJ7ZVp42KsXNrAMUcQXkCqPkTCYkqR1SqeGG9mj7",
  "key27": "4beTrTNfW72ECpZdeFDaYvmZMRy9abSkNzV1mzjzt8X4TyhqbfBCEzP2PG2QvEShxjuM9KGDS4sJUMxXq8ss8PvZ",
  "key28": "fJLAwehxbpnhFEWf1wpGoehwR7Wk3U4Ug16VNJzQV8pnuLaTGQ6TqPQECXATw9ANiUwyASZAKdaM4ekoDgtDMjg",
  "key29": "2KzUx6i3n7SmJwcCGmC2s25UJ7GSj8hMS3fAirTdzVZauxKYapRMknXLtcdmqqrCy1jhaQEBexDquyEog9QYCsJm",
  "key30": "3wJCC9qpmsHJTdFmVAoYEiQjm6rayz8mhxk1u79N2HqqETq5Sw5v6QPBceAQcE53ja5YBdMstzt4dNZWWRZskbGW",
  "key31": "2UTSDpkX1h67JrUL8cwM9kNcdvuJxEv5NGV51vdPNsZU1LzwYfdgAGLCqSCPPVsEXVUm8SKX6Z3vdrqbwBwcx69L",
  "key32": "4vfcH4iDKrHKZNtMqFVYQuQqXH1EFPsAYRnNscNpcS9L29DejmGHcZML3geFJfEhqG1tiuJxyLjcEN9HmFG638SY",
  "key33": "DMob8BxNB5BkhutgS9r3vt1XcVvfy3RpyQeaHptxYithXMsxTBFvkLTDK2mY7baTBNYSpEdXCb8wEko7QDKspTX",
  "key34": "KFji9WnoQZ5G48LSZdQrq7o54Ti5XRB1iV4BMusK69cxoeaNVaw7ANj936oejmevwi1fSM2AZbj1HKF6hTcgtUJ",
  "key35": "4xcaYoSUTHmB6ygfVL99mmhm2ShWQvG5nXpYecafUHb8BRJwnfdccqDA9FTg6CUPxZuND8kDRUyHAN4UMdtPBqyT",
  "key36": "2w5GSpTvExKcAwsEwDT2FZsdssLcY5jdoZ4KYiF5AUhRfNW7jfHck3rGRzjHyvUJ2ReydP4uWDzpHaQCURLitDTX",
  "key37": "5DcRbH9NSuUqLvAov8A5CEmGMBSMocsHcG2cQMVsu9KBeNr2aUet7vXyB8Qz2EYgfqDhqFTjHg6yGt7LU2c9sQ6A",
  "key38": "32vRCf5ok7sp9QpHdRqiGHR73tRxoudDVTqS7Uzdq9RZCEFrUSYmzxSTJJc2zMiiqnESZpLoRPM5D4yy4vMq1zti",
  "key39": "4eUHvHgwUn7QUQtJB2L31od3d75t5qzrRCFdWtgVjAi1gMhPDE535HZPB7pDPcM4DbosVD8wXXqmTfXQ8Y9w6v4e",
  "key40": "2oSYpz5rQ8B8Zx6GcK6dbHmjQutiCKmxcozgsH7vtAGSMWe24dbUgBzDN7n2YL5k9aCLccA4aSkZ9so3fPtKNC4n",
  "key41": "QwDT4TGsREm1gV5W7ZuHLng1L6MRJab2F9hzFcsrn8SfLJY4EiPY9KBHiXHTvP1mtrz5byxcUv8rybbVZNuAwUy",
  "key42": "61GngeF9cfEtx9dG4nbeY3FzLDbkj7WjufThT5iiZ8H4iU1Zn5xv9JoteqHMygznUS9Amx3Y6fMFGBLbhfUYDDFn",
  "key43": "2YF1zvGBU1MFpXs4zDnswPMcS8fWUbeCedF7MvAbUCyxDLPzVP41jtAuD6TDc2dhKb5nCbzraeumRvW2bHUx7ajn",
  "key44": "wGka1Pru8bzsoWCVccZyaqbixhUGAUpNKR299tSHy5vVtBUAG1HEs14qwhZetQUU3GsR1pUnyAYqYzxv75ptPNP",
  "key45": "24ukvxcLmKi7hNfuQhiL4jbJtfuzW6u5TEAQLxrtSKuw5dpFZBq9xts4ir4TQymaGEwXfeeiqSN3LBeD3deEpZh2",
  "key46": "5nCk2zCRYzGtJrfoWegNx9GqhK7iQjuPMNdqNBJZUKhHSGbRMhoog3qvqHqeaS3Z6gbafqRjLo21h7msmmPJqJsU",
  "key47": "2YxzbQUm4BwLvtdzK8fJpTVJJy8CautCJZwD9Tp4o9XtPQCHC3fJ7cYuneZXLNS3zfAY7cvgQndBps9XoPP45sGa",
  "key48": "412d9YEddtAsiUTxSafWd3kt8hMn2X6ybmoTxQVzncSmTrzNqieJPMWAV8mV1aCecd8iM8Jdz7L8tqtA13L2jVvb"
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
