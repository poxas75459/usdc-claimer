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
    "4kWDav2jQACNz5SJ1mN1BnW5tkgtuJKybqYQ2BcyK7SjYomceBKXDVYYCJfLCmexdeQ6ek3aSVk1ofHC5EYwf5Qe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53jeVRcTR9yRBQmfv66KkNAC7HnMDV9wQVcv86e21gtaMp7oqtGM1x8xEVtEPfFBe1VA2aXgLvtdygpq5DnsbwMx",
  "key1": "65X4ZA6Z1WYHaXmGrUjEnE4HK3VDDKVWQNAtHAZ7kc51wqW24se448cEVLtVCc7EMZBPJdyUdioqiC46Ax8Fbepx",
  "key2": "KqbVuNevUeghGYzxrQt7ZZz9Ln9SQC2w8Uu7jWeD6dQT27p3LkY5YBxoCErYPt6sQzd3RbwyzTpPmzphb7j3FhS",
  "key3": "3JE3y2SnXeGoLVULiVQC8ZdLXyujSSLS1dv5y5wgd5jo6HDj3Lcvg6Sm6zRzVCx8zCGsJhDC3EPvt79kGoyxdrMp",
  "key4": "w6XtJjYKMdrJHhkpnYNV2dcd1ovXq3qzwRWYjtY94rEzXYq7LQjzmzJ2pJcCVPxTBHWuCGW1pc9qay6LLwuTp4z",
  "key5": "4mxK9Qg8j9UHuBvmtf7fu6jHrnLLdeCDu5acPssiSuATG65uXHEFTPUPsGB3SRHGPJ7UZaajwr9zihaje7kw7v7s",
  "key6": "66xs2BrWoM8robKQbYui7tA6gJtwjBuEki7nAH3x4UbgC3mPnpcHgGRZtkEpywCBPVB6yCPSUYEpnvrkbcXda6qr",
  "key7": "5vQ9P16cR5H4dBFQUFSRAGBfBtRbiebr1V33Mdr4idttHd4kgVNGr7perSYr3mpHwxrufkCGBpuvbcSvAZPoJKQi",
  "key8": "TgjXao4DqV4wWbRWsqcQkr6r6pB1YX8vEJ4uDnP8XLBbRsBCakNYzikiQ4M9SznLGHiv5SbuZmT9DoDpUkHfuuk",
  "key9": "wiVxBHyup8KHQyr5nzYSfWQzHoJj9aG7iNdqbLMAAJVW36Htb5acQZj8gfjby2UorLUA9wDmaGea2JcwViPeyxL",
  "key10": "qH1RXPyh1ncKdbiH16yja1gpezxCFuUtrBpx2TQKQdASvyNzN1XcLobX1tPSWT3xpqzYGV1NUp2SAWe7kMEqLSM",
  "key11": "gYzySCpGqtuGHTdTZxFmkb1oYu4HE268Gh23BxigTUGbqbDD8p5JV1PQ3SLt2TS39t8z3BRHbarC1fpfRpqjzr5",
  "key12": "3TQVJxLWzjuVt58e1RNXXVJXByb7hbhDKB9UTQrKFcSec8XnDW19Y6c4ma5nQXxQFfobu8MLLLu75Cbv6RconJsh",
  "key13": "2YejbndG3GhM1vjeRDNpxKd4mYk3Z4qPXm2t8HdiqipaojfTioFEshvJLPmrHrykn65zZQDSeMQ1pvqYbjV6nM4",
  "key14": "4tNTCRw6DQBMLbsw8UUQ6fKQLkAtLa4b5hVc4MAqpb6xDrf9hrwh3iZKgo9zxMv2AY3RWawptkmPvD15YXamciaN",
  "key15": "2dMi15669xF96v1Ye4TsjgeSU2Kyt6L9QS9EJovvPhwZAELz9SN8x8no8MzWPpjtBmCdRGj6k49UWyELon2dsHwZ",
  "key16": "ZrTvZSWK99KvCbgRm4YjCW5XjoHvf9bUBKdAdbTjNHrfi6os5Tz71NySmpSwKFR6M2QVdhD7bwbn8t5q1KKEzQq",
  "key17": "KVyhMhi92kMnoEnQfxifmDaYy3BG8oRWMZsrWoDY7FjQ6tjj8irMYL6hzV4yP7zmRTZ8RigVttmUshwvkEje3UB",
  "key18": "9DzVGWCzwZxPa6dNavqsLDkL5wZyt9y8zGDkxBY5jFiFHcy1FKd74YNrtDmK9br2uam7pcJc1RDSckxkc7gReVJ",
  "key19": "37JHvzHeAVWwWLcvZo4fGkHCw4SQ16DMLj5EgCih3rrpHX7ViRDoZBfvJxZVAdMLGmuEbNQ8tZqLZHgf88G569da",
  "key20": "3nTY9cizFZvvrHaS5mCmNJ9WQQrpnJ4DqGGzzYnnzHagCRB5n8rC3yrXWD7nMyh3S149GgTtM1NCh2T8SHYUqQJa",
  "key21": "5ZT9JoBT6AycujSYnfWWfGkb7BoTrDJHszs2Y9B926KVoDHXT4p8sN6WmV867aPPmkADqaBnHTkk2jMscJ8XtNcB",
  "key22": "63nPdgSFuH5YgUY3g7fMZFTKUKqBhtsjGwtiQaaZt9bXB2T49H1aDZgq71vcj5ZsVRCkmnaUzD68rPRAr4QivVeF",
  "key23": "2275fFhMR9sqCiEbL799aQEnjLXpdzAf6czH61x9pBVLRzYXXBKbTTeQU6PuNmyDPD8M5PZ18V3uLWzKXmkx5pH3",
  "key24": "3Qni9kDHsXpfAwPiyEd6F6Fyh1Chy2hcXoBysG6fmdoQs3t5Q9Gf2h975awxsq3zpq9NK2adYWYLvb3nxU6cYQZs",
  "key25": "2d4i14X7TQLuWRXeWNBpfivMxkzEQCtze4BQ2J533FKqeaJYRDQwSYXDCzQXVYkZ4MVUuMzsGL2VeKVQyaQnCzrz",
  "key26": "3PFchNcWKB28eAcjbSStwrtA8sCWLWoQ1Ch1QCRN9b8MAAr8JpBwug8V4sw2w4JLfz5EJiWU6P8VKmVw5Cj3zwZU",
  "key27": "7MPRkgyuiLanYnadFoRvCtEPp97aFLpEoQtNXKFY7WMdDrrPPTpnjDn27vUkLiWJCuMVrvfXnYfndtUiXpwGWu9",
  "key28": "4Qw8ZfbKrCCXVN3vTMSjnEP2StY1aSgsQtZ4ANsbisbCywcDHRjSumKa6NDTVzb6R1eQ2KPdPJfugo7Sxq5DUkpN",
  "key29": "2nFGMmma2YAXfxJE4aja9vSNbuJdadZv9mkQTEee8iwgJvDhVy2eCSWXcmEonN4sLLb2Hqnk6zhmtiy1vggyztQK",
  "key30": "5uwP1k8R56gc7xKUmXaWwpmowobuatzV3Rqd6BaZednzpHHa558qmchAProFAiRhPUT9e8TZ6va4jjd5q2CnRJht",
  "key31": "67EZQvhSZqHauA5yjn8gbDHSDB7vnWxYPxKiwsoYmJod3yB8Druaq466hLNb3CjKkqwRFLrbiwXH5JNNeYREV1co",
  "key32": "wAHQDV1GsHrApFxUuuLTxEzaFy9Qp1u44VE12dCfxhd7YK25xpH6MuDWvLVuZBsTYob9UmxxBuH8xFGGVGPbsVk",
  "key33": "5Jeo9u5QCbMDetUeRxgvMPnMknUZBrzQb2bryEZr11VbA4B6F2hkwgcb1hGLexM1z4v8fJweKQTLVvLVzCfQF84Z",
  "key34": "5ym5jys6ycHCHGwM6BJvPGMFVtLjjGFicJurutPnGHB8hyAJgpKAien1mjkt4MTUBunkAnsMEEEBhSuuFoHDhTKg",
  "key35": "bspnUqGQYxPTMXKJtBvvXryTWYSQo1PD4YZuPfgbkbaWpNHsdk7CLZGoRJK3jUphh7AihnBu4DecwgE2mG4572s",
  "key36": "uVYwLUWbKwhor6Z49nJpCxuG8NtesjVTQcpiWSzReRupbyXKg7hzVsFkRyG1ALmwFAVDpF2aThG2PWRuExFotP1",
  "key37": "5DedKa4h6z57HLGT7PYaRLH4krocZ3BJhXfdgJH91psTckC7uGW3jeaJK9ZWwUdRg2vMGw5UQkk8chbvXusXv4du",
  "key38": "rNXrW8yvKJtMEvr8rvPj2BtbhFuZr85uHfT1Fzr1bohCjZEvhbAiZ57JFGW561St2DN7VEdM1nvj2D9QpBipSbc",
  "key39": "414mAPwDi8HCbuFDVHDc1j2qH3ktmxHZxFqxW4WrCM4S5j5RMhnVfMVq5nJCBcmDcb6q7FNicxxbBLmfyBUufJMA",
  "key40": "3beYJaTAxPZ8yzDftLtVVkvM3C97nnhkNEmGMB2M64T3nKmWaz2QZEgBqbgyeJSdQzapPQHY7KmbenVPmEtgCCMb",
  "key41": "pXDtHkPsiacGkvy2teT3WpifWWDZDPLKhfjMvfV8DfDL28nYmtaozvx35EkViLUifoftiYwEgNaGroYNUysVyo5",
  "key42": "4V983ao7Nn2UfXRemJeAt8Jf2kaEQEQgus4ejXXhL2jiD9joBvTcLcLNL4JhY7cqe1KvnPiPee5bEbbPLgVyJVFQ",
  "key43": "CLsHQVDm7GV1gAx9qx7pKJYZzPKFGpRJNAdG6UNcVBDskrsF36WffHimMzrjp12byHAe9pWtMK7VNVrhjjJfRVE",
  "key44": "5vvkVENCNk5Jc1fxsyEWohXWhBuS85za5qkTquC9ar63tdrE6o1dZwfbbWoDfqqQMcgQYduxHLHuK3FHH8ZSiydD",
  "key45": "54qZkq8neHZFeEgKh7A8MpruGs69M2ps8JV4G59rPCNMFF6zb1i5Q62Hk6nU6RtvYRLDkdg5wLD3ZPQ9kzQmphR1",
  "key46": "4yF2SvDEru5FA47Mp8wWi1xhKre7UZybiNKxtMA1cTE9Q7ersEHULjrBysaH58kqAn4A65PD7JhhFAsMmSeutKDK",
  "key47": "4yXFmYHSL7YHqr9evmWjQXg8f1H7VfY1ebyUhY3hnnZuKC8q4yCkxsnBMpN1JsA6iEHeytCJhhBeRwULuBKGfdoC"
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
