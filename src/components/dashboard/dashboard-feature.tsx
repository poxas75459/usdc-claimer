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
    "5fxzEu6Pr4b1KR8hz1hzLxr6SM6DQDUZuvLzMz1AM65NRquX8eTBYAqWJ9ynko73NifKosbLJooFKkpbGq3oRjf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XVspfCBWb6S3oeeiqF2Roha9ofokgeFTrY3ctQBGESUo8rXjCUXAHF72PpSi8nNKVBBp2uxKKzYBR15uoxzXurq",
  "key1": "3DT7DBpk63BnmpTUjsK8W4bjP4ti3poyrLadtZL3Q74T8BtCogdRHZ2ZQSLBVTRUHXUS7VLFviVzvNpZc9TNab4F",
  "key2": "4JgRi87RF24EdGGoo769VLtc87JHtASximXB39f9uoGmphv5SiRFbXtVwCsK8niuoJZyRgxbTZAgYUdXPvYAmTa5",
  "key3": "4ZzRtiBmidjoCZXtbZKe5dDwE5h84YxjMm5yadxJscc9h8aLjvZafkECt7wb4XtircYYM8qioNyWUyVh3YJamLt9",
  "key4": "5p9ewas6w5JTEpozXW8axmfqnR8Hgkdztk9hhxG78mncrLtDCYXXqQ4CfpsJKLhyEVMLEkXuPRABc1b7bzVQUypL",
  "key5": "2y1U2EzwPshLtbddSmuymoZqghkixoDfr1PiPye431fbZCWEQTWaSmjdTNnNBdggfCjjVKS8dkR7WeUbg98VQnwK",
  "key6": "2KEvDFbVbf9yuuZqRV2JaEWuVKrqGmZunMEgfDihQA4pT8MUHkzrCxzE7rSEmpiBnTTNRKHfkbgs9YUQ3jfqi3Zp",
  "key7": "K2C19beKZu7CGnL8S1qs8yXC49w3pe2AqxeHJKc1A8R1i1RhMEWzzxqx67Z7r1CE5yqRvu9G8NN34Ua7sPoynAq",
  "key8": "2uCssbgNdESPbbZ9YwvYJggnW84LJzoy7RDAZqwPxHRgind9igakoBcyvmdCZgxtFrhf43A48VdV9kkfhFxwVWYt",
  "key9": "4WxJ81HZvGo9hV2Wu56Vwdh7nL3b924Mnjqkr5gWAiamfn2CAiTMTJ1da1hSTvBiSFVNPSNXbtvCxwBnaRh7NVFj",
  "key10": "yh4BAkys3fmndLqhVbGeaW5WaoQJtEW8LVhyLsp3AkdDRuxPtKyckjAz3WVzwJeTwq9ZgTfx9uK1CtajU9HUYSH",
  "key11": "4maRm662BFSWpy8FCkpBXqtCNrftfyiodpMWdEPmNSfAwqgFjoPzEQsL99mi2EwzcfgusDKiXR4MXRegrqyYRgPD",
  "key12": "4TqZW5jFjWwibtkBQGRMfVhNktVP4bUtK262X8SBEofFotgJPveUcJZmJWvkfs8h63crTKNBinQh8ZyEsNVTKWum",
  "key13": "27gsfnTPSwMteb7dm6BZkHwNkvfoLLCffz1JtLK9iwREfEPeuPr1RSK8Hb83Xoumb7mDbeKRw8NdDtVJh37s161e",
  "key14": "pP6kq2nGTvHoyVu4j7aPe4tybq2RgafZ4ntV7PQT83RijmQKkxPJoMqYK3iKEt3DfM7uYN7Tnee3isLWRbKaVP6",
  "key15": "2kfEUMcxUpnt3BQ8UieZGCNwWo2RjfTgyWb3JdbqX9aVhahbFE1GZc8D8xUaGGCiUMydxPKQy9yJ1V9rmVcbnkje",
  "key16": "57s2VwXA8zazNNx1ecocRyhqn1HwqgjHBMKfzHABWqo325WHJuCwH52Q4MLfo43iUHMCVhXvhRMwpq5k1nCYdoiQ",
  "key17": "WFdAsrxYnvqWyGigRUPXmsPXXCynuWT4KLNBD1RbabdvHFsx9QcDFkhM3jdhvYUduDZw7Jnka62XVn1Wfzxn1Qr",
  "key18": "4jMsZV3F3QmGi4JsXF1csAAm2G1ouUfh3Y46P561e6XTTPaUSk97q6HQk33GrdgbNVDT4uYvqDyeTUCqp8MBhwgy",
  "key19": "2Lkf3k2cgNGiLw7B9z4rhPJ7GtgmkQvsoiRE7dqhEyE9ByzApSzktUsGvsoAp2jPzt8GT9NkSJLNE6KgxpgXFb9i",
  "key20": "24ag9D2VdqbBjGxhyxxWKLtYLqsfpy1nxXNNaUGixjoBMaeF81uxBbNjrA1NNJieFMXvAKDmXgSrZwtZrNm8aJd8",
  "key21": "4dhBi7rrFUF7yQL93sFPkCZFNtxMxfmK8HFEtF54HTvqLVbviucVm6YCkFvVJ6t3Xk1g3fbLKX1Cirk8zQPGt6B4",
  "key22": "2x2XhGWmqgi5hmrsnkCvEruE4LEG9beLumcibrGA9qiiwVsdCR4uzEjC55h7J4Qr6gv5Tuqh98EFwxVCHybctxJT",
  "key23": "cdNXRhYHvPQqjXw5yfMAXMdd6jdxCyooLFkdp8WAeHiXwUKGbzNovNMHfekw41HQ2g1rxP1CYoWBtMSvhSKUQEG",
  "key24": "5JhZFC7qGDwWn7juXhd58jv4xWEMbcyojmpjvQ2ysFPhE63Fzeik4EcQGQgbuB6p2gWKEET7ShUhF5CowqX3hmMi",
  "key25": "3QThq5ag3n6XMQZQznKVfg1RJfGEX8exnNA6EkNBH1psfMoc4sfaGbd7AwLvDj6Y1HBGAHv1HeWTskCrkmxsGdvj",
  "key26": "498o5g9GYhJ1UYU1TSStZfAnvEruNn8i3cno84wMc8veeJJKv23jtZw59erpf8xPThkoeGoxmsuY36bzx4wkZjza",
  "key27": "53GmgKaFv6nMbx8Eh9u49un4FPLcRx3WU9cv2KrW7VgUL4oFMjkow6JTW2CqpZZH6VZhUmyy1DYFNVe8CewJVH5T",
  "key28": "3E9rQQvSaqRZF5AWaXpPEUADVFv7MFb2ZBF3r9f9ezAji6MMZqPCuaBdzPjzWHtpRPfCsrBst8GKL8yCqrNw16BF",
  "key29": "5r5NwEufQr4RC5Qa2FSvft7UPNu9caUZvaYL2dNpqquPpQxXjPPxoxDQ1QUw2UPaJJyNnZPgsGweWSickgrKBaoA",
  "key30": "5zq8z2eJZdxmcntAE2uXzL46T9pYukMyemaoS5MABhvAHFdWMET6wr2a5raF6N977NDZNjkzt5EjXq5LBwtPZKG7",
  "key31": "2k5Mw3254aehZwFdVSFTyzYvu9QQ87VDFPRz1oD5U3ZLDeTkHrh6n7r9fykiY7sBeDYhXEfww5iQEwjwQif2DoGV",
  "key32": "9ztVjfySgTUnedG9gN2pmdMSTZ3MP1sxz7ZfVc1PMtGw9p1AXy9WBz1ML43y1Gek3DkgfbYTBHXzDU6tmmYogw6",
  "key33": "pV17SLqXVQ1TLTfuX5zMRj8koN6H3T6YqHa2DxRw3RS55BRfTvdyMBPjPXbK5ZsqGkXwjjQrtzLrs693RRCnHQQ",
  "key34": "3RyRqSkmVY7ganXodBDX6UYQc3apD6FLuHJvvBb6S5cKvjQ5sBf7An6LRVg3irjX4adUr449pTZ9E4pP7T49bFmP",
  "key35": "5icQ7v1ttbHBJAuokmM1Kd1ay5se8iEj6PyVbB1zdfxVUnADJZgzaoaZoRjo3kWFn26JNGtqmY4oYcANW8C3QzTX",
  "key36": "59ZQSLNfDp481UqE6Yf75eX2uXtMXsSwL5PGR8RrBKmAGLYMyyRDkrGJNvQjvkNYSVQq8fx2tcAj5kNVVP8wFh2E",
  "key37": "sz2PkHbehKzk3yZWSb2uPSrv93Lhe1i41B3xaenGbrDyFyh7Kt8hUKiMsh5HusAghEjphLQmxzLVw3ybb7jpHsQ",
  "key38": "59LuzRajH6XJECDYpwXt71xUF1orvNNnmb4i6Nbj2uwPX8dHZynpZVvveYVuz8xDsmewBXKTMXa7QGdfWLiAYEVn",
  "key39": "3XboKMgciDFWZzhPR22Nu6aVhAuBVpksVVhQbjFYcX4TWNZKvEgi71gMLQVLGpxkWjPu6MAKtGot3x8Fdr28xMjj",
  "key40": "3KUHEuaLbEdfouMuoA5oHdCozBztL8hNT3TrW2awTBbnXGDaDTQAUBUV3Gj4RXPPiYXsAvQ5EVdChwm3ciRRowMB",
  "key41": "4fdcJ7WukM11EebYTr8senwnBtYZz5NKSNrR2MYzZ92UZo24U7RMEkyM8VhYxMtZaYpoNGbvciBkazFSG84Hysz5",
  "key42": "36rZ7QYKta1Nn6WwDVpHYzNMD1rdsLyb4UQTh5741qu6kmj3QgWL7qizP4C768fnz6SPMujWZTXZpK5PQeQWYovi",
  "key43": "3C5YU5s6utMKFA5BF1KWQCYbNQ9tJSsG7hjWy7BHqH8Mhva48XzJK2r8CkjXzytyMKQTuceKTeHrDi4BssjrBn51",
  "key44": "468rrzy7NqBh49SEmoXfxQ7VLNhh98yzBRa1G8fBMQ9f1GzLzYoaocJ9JXfKHYmd4qnvas4GtaE3ft59csvZZV69",
  "key45": "5PDM36NHjRjU47HsQ5sST5V8JGzuoQJ5j5sPoAvyNFP7ummUqwiKtjT5BwhV3LFUVGqKM4NNR8V9do7vmraqiHa3",
  "key46": "3yQ5icezzccHvMrTQ38zJbmDS5MkJ3UhSsytiGJR1gaBR8mKdi5Evcit7iBUN8HrZkvti4ivj2S3skAVRWF7LYZo",
  "key47": "4Mi8nt4DEpS9h8gH7WVPYhHp6ftKo2cEgMSciNz4sbaXozBe95oG3G1Wx8aV7edP26mNXNg4o7DpGagG5WXKRLzY",
  "key48": "4wdTzSDRB7Gsdv7BZSAQSVBjVQyzrfjgF2CATNFe9GeTDLcHAzHo7RzNk7b1Ytby3LyCMm5rWkgKfQQsT5PXeH9a",
  "key49": "3KqDYWjHDvfq4NLqy3Gk2ELLmPhJgVJijGHVvBfmUDnqZRLZSr37fYxTE23BVbSVuQgJgy6KGroS5ERAcjiMSNrW"
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
