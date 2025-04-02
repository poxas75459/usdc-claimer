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
    "67WXEgG2DmcvTsghpJe9SR4QVhZY6dHAZTcLC2b5jSaEJ9ctasG4S4nSw6gHUyShrgGJXQUYKfCmD8YmB1s5Yk55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pDBvsFpSHuWWTxHhwMpie6AKChNwmeMV7fWgDDommRJBCq3qg2JsaW2EQqb2UoQ9yDY2ANCQn2E2fJdBfUMftGq",
  "key1": "2ju1Kuya8i99QWMA84p3ciGQvqP8McagNtiybscyTUXCvqr7DLHgk4RDMPXwoWso9xtyoFvS4WQHqHqw1bj4aSnH",
  "key2": "2D82se5TBNKeNiy84PoGpKyQ7FJaK1A3NM6A8ExScCVAU9bxsjiWckW6yBFDgvpDhtRpk78S4oULcKnUabaQwLHe",
  "key3": "5HCxzVLVXVhpYv2b9coqAPBd3YiCdmpMjxV7PHzhLqxPZzbe16JzWqscRHJnkH1TkPK9nGoRbVFPJ4AoYp3ZSpzY",
  "key4": "5XDt2jh4CG8bHW8K3en59r6qj9YHfYpytLd4sHPnrZvoBRF5KRLXuxizwPE8cnDNUP8LRcpTWgDBjdbYkrq1v4GM",
  "key5": "5PtWxLqPUqXR4BQ2KfT1qprNSdamCyDRWZiYR9RnXnvxyuCq6U16YGrndp7qFwfx6UeQhLw5GBJG689Sjdkbv6qt",
  "key6": "3VYkrGAtqZcgXR7zoP8dNrDzhaoocDUxkagyUw3DEN23mqgzc4eGmodinUfZtcA8WWpxTmZQ5UTECpGCco95nCEn",
  "key7": "5yW5egdc4PZpHtRuRi7qG7wfcaqd92WSdJhceMcAWztM2zDRxn2tYku4WhCpRfZcJakbPeXr1UpPkidAaEvz34bi",
  "key8": "mtfWw4QZD3McgouAX5sUgmmzoHcqjv7X5zMuXPa2perhNfMmUxUmscxRnE4JD6fxVjXEAoKh8i5XQbJYD3NPyhX",
  "key9": "4jY5zVc7ewVuHXm2CrCuMrwWo6Ejv3HgUwq6SNNWsi1yQhdReFMzohVx8ggPsqpPVNotgfKcm2aihwX2WmZ9VduW",
  "key10": "4MhqLPpQEUdSneKSACgEhPHT12ga9ycFM1bsGNJQjTQF2cRGedHpLTypc9zmbD5ybChroA78FTpzsejDU6phwZ6i",
  "key11": "5Ete6XkdmULkeqSfaCNZPEnGNkCHDzQNAXosUkff8F1NyMs8Jzq9a7yg4ntkv2HyunkdSqbqpLnh3smxJay1Qu8b",
  "key12": "iZ87hZE6cj5ZoWrJDwyMvHGda7WveKsv7QUqaMR4b8ranwjFZdxW3pHiuX1GrAki4pcawFA7dTDHL7XZL48hD3R",
  "key13": "4QR8DXwDz56QaDFP4JDZb9Wra1PwGGS3PD5SmAqeyUBvW8NJePhrD2UVdtSpqcwVn8yG8zhqJ8aoatShhuJpJx9P",
  "key14": "4AJM2APMgUBhVjzjtkYPnRRAyamoDAoHSXHwRNKQoenr6Ly679kKcQjsffkuuSGWDXf3s1UiuSzDZksc6kgVf8ub",
  "key15": "588ezkpShjS2Eq4Gybi8wcd2KZ5f92TiRhJmLspPJ2bpHL7qFn41RPzDseEum67mGtehAUEFMJNiD16ocGme32T5",
  "key16": "5umJweQUV2R6aTG57UL9JADA9v9QSZ4hTbcfv11WqQkLMCjZYpheGNuEYDX344mRhhdrLnb6ebE5JPkFT6MBvyWz",
  "key17": "4PjMBNSKH3ujFSGTUu7TP2cf4q4G2S4nV5oiE5ppf63VxoEcsj76wtkFXZc6dcv35ahp5QDmEorx3BTHbm6hLMUc",
  "key18": "61Kdvkp1L6HHnv8ZoVN9jvbGKfjNWKXQRXafETEBFC8vUBahc9eQHzW93yCmQ8SswnnHzKA3GYhest3b7VHEMQht",
  "key19": "5hTWMTwviQDCp8SzJARe8csesyMh1DLX8Pr4DgS5jH66jkYrwjfGJ5Z76Y9GtaYvtWBUACN5oNecvJaNxCBBzS8R",
  "key20": "4z6shsccJCnyMP8FbPWhQd1Bzzy7KAaEpyMaMqaZn9b9BA6SnNCEXA5mvjCfhwEunr8FwgHDf1Xs5ZPYLpyQoBdW",
  "key21": "41YXCgb6L6GArKYLRpTVKxms3ywW5bcpSGS99KLUG3Cr5Dvd59T6qa1ZN2gk5xFix6UnL3e8AezG2ErtrzHhRv6G",
  "key22": "4pDzT4JaDo75rW4HyJ2tdxj8W2XtBV2kjRJAvidtArnY2fGLEmwXYHLh6jte7DfuXf1mq1wQb4URTk5D2dTeBb1j",
  "key23": "XVCkdvBaxFwsVeCZXaRfuSgnYaNKHk9tCXb4sk5mknB7Cui4RTjg5NQzBYEaJsNDRTELMEiNdLafctqA4cxQbP4",
  "key24": "2YwtXQ7LBnTqjKbXQWp5WivcQyDWriBWJwHujQL6aAmQX6E3wfDJWyyziqA5RfMLdBXY5XtznDPPS1HiTdSMxKUh",
  "key25": "2imVbYCNgjKa7mQAjkN2bgHqhX8XT5fLZwr8uRHxQ8q6cxeQnVH745AqA1fbBgVsbCCe9XA1EtqwiK8WXrSYcXJh",
  "key26": "5uhU4Dz1jb6ctycr57g7GmK7dVog7vXrtPwprj8tVGz5kkfZBZM8E3wFWDHocs9jVDVVsTnGLJujDWDY36zzNYxm",
  "key27": "ogHJ6QkYtuah7LeRyQgGuv8JRPQvq6riwFBH4PoPGz7Zq5AQ2i3urzgyasdVg5FFGw93pu4nNuhH8wTcfSxkUW5",
  "key28": "3KHzUNW69FAZ7QXpy1Ub9wYs61w5AWpBxz7LK3zK5SPSGQNAvtAF7B1WGnGKpTuoRsqrZyZCoJD6u5YW98rNrYzi",
  "key29": "4SGXWExZvvyWxYgsMnQqKh7cWCokX39qWzehAGvj1Je97SWXvFsRgDTJHjNRoD2UkKicGTonuFNzCEirJrBP67sC",
  "key30": "DRJm2HQpXjZdcRDGKC73gASRR7SmkxYN4zN8HVB3r8CGEtE59Pb1oJgHDY5ozELaCZWjWaAckw6FQiMd918tBPf",
  "key31": "2TGGZxip3atGP6XoGLbNLx5Ho6CurTy5N4FezKngtso8StmfJDAMBLr2tpAfTPU62GW7sWULVMgGZW83fm7pRgXk",
  "key32": "5DnXuJ6nqta4D4WyPLA6y2bWdbcBBPhSr3RtxtksWMkFapGdMh4Do3kpx8X3Bb3hnPvfP5CWHxJBbMoUbVCukbJ6",
  "key33": "44d53w5Y5itVZ7Xzw9wQw31qCnKuvrpWAQkdrb3apJVr8HX6ZrmTWHQd6AKMpbmUcuB5S1LrEBDYtXByGz1WAJBk",
  "key34": "2UBF68Am1vaaitL5TgM9ZewhZyZdRxMpmu2ZLRjickqdFvy56WfpQkQAwGWHGXCQPvoD5G2tHaiS3oerBYong2RL",
  "key35": "5Ke7zmPn7g2YWXBMhdLb42fMnfipDiWqb76zNqndAmKNNk5Nvejq53EzKEa28cfJKQLtk7t2eGhtY1XYKAjRGYxq",
  "key36": "5uDSZDSxxZm7gqA6fwtqSJWPQYoaaBvk5xDynrpi2tm2Yekikfg2qbA8C24XZ8epCb3jJyovz2jE9tLoxEavXF7n",
  "key37": "3eu176cNKH4znLvhxpYeRTu9aN9aw9s6RaTojugQ5L5avLsnxHHBXLBUhdDCmCs4YTH7novzwsr2hePNWhJTGL8p",
  "key38": "3cc8H29qRiTnXrZXQZg4vKf3vob9AgkZdK2zwAwo9Ub5KD2dCVHtdckCGd2FU5now4JYbVX8jPEwCw2P6y5FUXds",
  "key39": "5Bt5mh1p5xpv4wY2UxdhaiN14QU4FHzTGTZr7TPA9gTkSMJKoFjmXbS8HqLa8QWVXxar27sEGHGnHHsMowuwU2NG",
  "key40": "2SkuHcW3T31NKyUeC8RWwdhMux6m3w6VeWqA7q9p78878WGbeGhzuzMjnosm9BFthHq72DcMKYsN1CVJFiaDAKYv",
  "key41": "3VtMgn5iiSaUpgBXbpKwvaofBKPkC5TqFSQP3bZqBmi6jmaPDAgAQ8SA5Bvepmw6UYJofSHJnHoB3jH1PgC9G1qW",
  "key42": "2QMb2AkMGiAwNW6XJJkGsJXMvwMATJxy4Sbw5Mxh3pSd1H6AQid7AipkUVjZhDa9fGbmYVLeEvZxBPeYoi6BRQcV",
  "key43": "3j1nxT5g9YS1zK2kU4tvYZcM1Ft6XxGfBAkXzxXA1f3kxWqF5KvSyo8uuAG685gErfcmmKmBDdokpiMQXAv3BEcK",
  "key44": "5Uk4wQwzb8zrnRZELrskikb6qx7VqqCx77nCS2kfxLyceKu8PAoCsh2LdyDNzLSW1uv8SfqgF9YKwY7ianSexCmB",
  "key45": "4BeY6WVuSo8rAQ33fxx8UTNRr2TT9sgPjUa3sKppRPtjYaeBNFAJAZ9S1cd8Vq5VSfm6D9Hg7Nu9zbQ597cETt3e",
  "key46": "33jYFNiA8XA2zFWvYb5P3hBoCNgJiczFP5mLzAuDRowk1BCzCogUCFEwgiGe3kGWWq9VxdRNbqVW5MjzahkFZEfQ",
  "key47": "2PWD1R6D61rwTkFBKcW1ssf6Q5DoCBJKCDutwjbrDoS4e2LxRGaWfqXY95fBZEeuYHpWvjq3yPMKaZZtm8YjrVCm"
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
