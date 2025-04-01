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
    "2NfQgTmneVcBhGJbf8jqnomrtzWAgTT25vYpGykm4VTg4Me7mfwWkTYLZ25Eoe7w26qJg4HvZkYWsDFFfQDN5JPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sfi745hdMhj3U1QbkubrzLV9ex6vWnewaqSqBcJAKFyxEc8J4o9WBHQwBpak6rdprPnL9NMKwGobWGis2cXjwTR",
  "key1": "YzcYeYZmqFdKXZXuWSFrdCjprSeaDE3PFeX9KVVdcYQvHQLvKVpTEGJPxPeY6FMuUNqbtAfkNyTu4DMzLNJwqLD",
  "key2": "2x9FJ9WqDmhixzqfyrxmNvPafHPQSBiUqynHooiUDdGCr7tsB8uyu9CoyVa7GJN9euL8pRmNiFgAN5kHUYyvwXuH",
  "key3": "4WLdYtZLqK3riE65fEEcLna8dJpYBgi52njPsrK311d2RjBpmTUa5sNoiiidVe76R5xHqGTaQ5Rt1eaEY2FewJee",
  "key4": "4gjzKhce8M5cWRFpnTCxmnN2RWPEMYCfK4RzeqpxUYNAijDSrjikBqDTSnB2DxsjZgnq41vFdrD21Z2vSmdq6YLD",
  "key5": "2PbWDYdeW6SYY4dfWq9SYBDWE9VHvsA8635P9yLpm6L6GdKUzj4ZVMN1XYWFPK3jaTAw6bUyF6bd5Mi9cMAEPyGf",
  "key6": "5V6PpM7hdTPqxeVeMYrjcwMmAkDJffRgAcu2irivmWd2N3wV8xFnW345ium1pvqhcbCZnhz6SGYinpeTYHukQASG",
  "key7": "5Fr7pLJMaTZsDu7jFQRDXgwXnB9g2odoVAsYLUjF59ohFV5PcCZCPeHoZLfnovHkjAQkjVzHW7XznReCvNqUWkxR",
  "key8": "5KZTzeQ8sYtw5nYH2nFT957pkPTMQJZyRac9gyZzsAAc64J4ii3cx22NgwXp6nUsHxzGrhNyQrKdV9Myj1fpPLvA",
  "key9": "2mJpCfbhWeHpcfWkwB3TQ7Tz3MRc2yaLN9NaCQWbVZveGQ47p3yw3X1UT4ny8WexnRXedR6LAKwiyw5ma88Ryrmo",
  "key10": "kZmbaLK68jeBA1nN1JbAf5osTKQdv49NAFR7Q39jCu7GL1aHkotUu2Sg2FbiF3Eo6sWdq2mtBfSpsBZk24L4Fpj",
  "key11": "24JjB7YVEvmVkB1Db5mCP6TFosU1LSyjwEYFQvNzQukh9YTLq5Ts8uD2moU3RyJLmQfHQXnNnntEksaNzYE11krm",
  "key12": "3SpvXgNJicLedBfV3sNftRVCKmfjPTF3dnUsNVYaPmpvFtLiuF5bxXR5w7D4AECyHCnomXbHUQpXFYMqHQ3SySA4",
  "key13": "4Mf3ugTf8DB9xyHMU2Y5rY9YgDm3DPzRhSMCbgMcUWSeyNAu9Ry7E8e8YeCHPxw1PhDyDmqtLQnGNeGkC1sPNAr7",
  "key14": "251S6MHpPLoZGfSShEH88STbVPhJtdcpmrrZ98SkUjtVAPVK2cYiuPaaahm2V1jdvxdmzqoTzs8wb7UtBUjEdmzn",
  "key15": "3nUFjUkWDCiEA7iHqkWtYj3HmruVErDKh1DWidBuPhD8HSiQpgBwxb4awdvuspjSq3veSw6DwqnLBiGE47Rg8Rb",
  "key16": "2H5eUhhnhEcHfqHz3cNdrZXGEG7wqMTSysQXaLG8Rryk6NmtDe2yrYSpeebMdznUEG15udWoDh8BCL1Z43xoS9KR",
  "key17": "5RqNgGPjHDQ7ucXWdcU7gf7fHi7DMnxn7QL4VP3v3ak1s3FfznU83Pybn4fVDRD66GxDDBLg8xqvdBR2Kb4PNxaD",
  "key18": "3kb7FeAibqz2wq5BpD7BcT8RmxxBJ7fYDBrGNwSEJ1q3Dup16k4F9PEZyfkovkwTgACdZv8YrYqTDzWgHGELTbgH",
  "key19": "VPParjP1kZnJUhsaLw63LRGYi2G5hPuB88odsjghdEFoi3K2eRoSx5zqK3JThsi1S7g5pazGCm7hd8yHCkdTjNZ",
  "key20": "3Fos4o25ZeEtwjd3tgJwwvTcafhE9Dz9kGhVTsniiezE4ruvNn4Pk9NzGTjs6LFkCSXgFuKRY7dC2pTqTSRv6XgQ",
  "key21": "2DRVxa9hdeegEivXY1hb8hAGY3E5LBxRen2VY2Ms8g71q5ixixxHyKUDahZcAVCWAnudA4Lbqdbs6FzL41w5bFtL",
  "key22": "54UUNMHNDWRGLJP31ZxR4NKGSBCdRebxiqNpWyn3XghfG1QARaZZuH98qU4XP6dW2cyXzEhp3bq2MPm4dzRzEEJd",
  "key23": "5TG75xuFFMuNQJH2kdysivpkwPNpKgZkdyTiUH9z1Hhac3NsmypGGaq4NXrXULfVBaF6UuwEuP9wu4ZncyowLyRP",
  "key24": "3nV2DJCm24VKrW7TNuLvFP6Vj4SekCJkGho3DZqSMaQFf38Tuh1QKKZgGZ78DJYAwctHxCGYEZRUStwCkeV36i3L",
  "key25": "2m8JsDjPGtx6nKN7DkRK43gZ69jrG6jepEzUE7y11eWBBYi5uZgKMKiDAeWKw8Tr57gdX5gq27ZPPPL73yQaiZSd",
  "key26": "2b29DHe4ui7UVbEgn4ZtbWCp2k69aP2J62DQrU3e6PHipf2hLoiYtdFFiRyTbPDf3acSuEXbeWbxnsDCPBX3uuYA",
  "key27": "2QSsweERDpghPuZf2e4hKEGKSEqVcr9Z3TtLnZanbjYwmBdM7hXYQiGMeFWC5whPLUns6m11jcPDsmkw7qykUChj",
  "key28": "4w4EhscWGLLp7ahHajVUzk8YqMbrfjUM7UvAbsiZnrUVUah4iN6fzzPYJTeKdskmZLKTEDQxCKAHaWKeeuzxDEZj",
  "key29": "3CE7gjdP4Pv1xSe8ziJHxPC5p2QQcCjtqYoV3qk9GzG2FgGR8cEN7gvY4JoCrTynWZ9Lmh9CtGcFTRU1PSSL35XZ",
  "key30": "5b4ca93StytPZWxV9NQGciDh4nBdmB1Qes56586yVQz6ESczfBmxFremDVTgYxd51U8GKHYZxnBeCeLe9Fbw1wtB",
  "key31": "3Y9z1TNabVJFn8iPGcXKDNeMvwPHt7hv18iEejsBadCYXWdKUrShKTDqohRzxKv2aDANSRC1D2v21BaQoBqdjcJs",
  "key32": "2Z7yNaWfwpRjgH2iQiHa6UD94XcfT9kd2WXwLB9nJwpvYfpSQtnNRSh1DChut1y5obfkD11SoV5A8RSqgNTDY3Zm",
  "key33": "2dyv56Qv9v1eKopSJW38tqC4xPjdpy5AjC62JCyBaK54hbp2sjpADSsKEoNBbFzV2msKHW4V8pGcdojfLxkfsdrL",
  "key34": "5jAcZh4RX7eAEDYiF4oCPLFPzVH4aPw5j9FYo9zdsCEqEsgKBUVBsz4sjiUW2jo48V7ef6bskbKTEJJjP3p9AUgG",
  "key35": "4eQDrzMAqgsTrrMfjuiFQBCMr9vR1wBvHQfyx27Ez5WmumGKZi8AbSA6xpKLJLUGCJkZf7aPhTLVhwCLedU2Hc3J",
  "key36": "2FZcT8T4pCSpU5j4ajrjsgp2YpF1vfgZpceHfR77jkbQXZEjeUkkPScjPcTHkotPfagnLUPbVzAej5MXSePtcb11",
  "key37": "3Vgq2Pf2fM1M6cprkagWeEoq4XfDRYnPwm2g4kJBESAP2xWtiumv51WDNpRUG4xogkSiuujacND1PxcthuV8LARz",
  "key38": "5t6ssGs3fnNJc7KwR9xrbNPJE77aCV2Rgnru2U9S1yUB5cvNqWqnoLmWJVKSjTELBF6o5qFVBue1UwUoTpDBsExT"
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
