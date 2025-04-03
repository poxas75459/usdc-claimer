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
    "3sE1PwvKrVX5GTkehT99igGEzp5RPpm9nd3VGVHPrrQd41KRSW886GFY328CTea8CQQhLgpZGQZ2FbitEWSsB6c7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nSVfp4PWmd57uvKb3Stsx4Batb8ccFhmtrGHwBbuiX2T9zR1iHUDTvXyM8TLsr8Gh2gooKHBTgFiCsSujwRdnv9",
  "key1": "4rWKFC9hgo4k27J3Ez7ag9oj8fgySstXdL4xTni3znFPA5RWKqChrYx4sXpNtMoc8wXwe7YYLwLdVF4BBVPnqLJx",
  "key2": "4nR74GzR33niTzwfYTrH4VaVd24ovR5LTRwq1EXX67tJfDfimyMXfJis5S6XfJ4t87qwUk5UPDF37eCUx8nHorhq",
  "key3": "EiVGufFPZQ4j1jLPiV5d9MSBks61TVqYbZtLvmgeizZyCVySAuiEr5MHCAkmbmwJx2KAu5DikD92DxMtX2N7vbe",
  "key4": "3ttc9YezvrjF1B1Gb4KhKMNwcSDzLh4k5RZx1i4M1nanA5eK3AApe5y7j9XNYVV7uoEfzzEv3xft442AS6i74rzN",
  "key5": "4PhTeRvRTYvq2jcaA5rSv9By2dhakrWymnmSDKQ13uFip3CVSpcq5G6m4R5wo9JY9qc9PzfNe3oBbsHero2Cwa1v",
  "key6": "25C2kBuybyAeW1EK4xG2qwJY5rtAFe4R5pEQzeF4rPuyUM2huKMg5e5vjrYz9SLFDsKBkHuP3YPhno1ySesbVSej",
  "key7": "PAsg6RvqawtzqMrVgoErqmhdhVz17xQA3m47Bsutmp8uyucvdjfTUYZVGDennVoEgDkgDqJzRcEoxHF6E37cLsD",
  "key8": "22wbtdp8TSBgQ8HYF6JozKVE2ux1rVqZ5hkeFuYELkU2Yiv1jKgXxQSn68GA5SJwmbv5HeNrx95TyaYmZyQp6K6P",
  "key9": "5tZV4d2Q3gnXa2RpUzpgpDAGeAG1DLudhYVHcNvS326EBo4hpV2vrYGNrjCE4XNYHs7thkCm7AHoLxbFeiQehBUu",
  "key10": "2jBWKkwfNFxocGhfitY8gu8Jj7z1F3g6dwjkYsKgMssQZKnWBdaFk8P4EWFay7kfWRAKJ6GSrKafoUduVwXXjw2m",
  "key11": "5XoKHHVtC2XqnSizRX8hqWdHMqwXDJUmLvFZvzkGWFz4rkT2YypT2XvfdAAvYHydDfPY6XAcBpDAo2nYdYW1hX11",
  "key12": "3tdFutBGXa4PEMGNkk9apsjs24ZrnEgsCzvga9FovPiDtGtAqw49xjoA2u8qJBngC6nAukZJKCepAh4GakZtUK3v",
  "key13": "2PwA2fUxwreRfCYwWp6v9CKJVGWjaUJXjPih7pSAyFXZh8oYiCL1iuSrXzTL1kjW2hMPoDVBcG3dh4peexeE9RHK",
  "key14": "5NG8LdSn8p77PGeUVkhJq5m81dtcUyKbjE2qVYqJXtkZeM9DpWtX827jv4qUbUUSyyUJRoQ2TWLMt9G5XU7FpsMn",
  "key15": "2QYaJAWYHN7ornodccZkFy2d1oHFFqKxH8gCphBQwhkiF2BhWtiXf5T1vU23FtzVvyHiC5QWDrs7g79FEZVB1i5V",
  "key16": "HgQdCAiWEhg6yGfVfxuQL3eYJgiM4iZQEgJFxMX4exhnQLcdhC99QTnkhWqjc8xTbCtqkjeAFX6nN7Ejf9UuW2D",
  "key17": "2kda2GYfuAiF9nhYk7bEupfoCRTSe2igv7uDgVr1bd2pHUEhW8tJ19KsHV443gRwhpRr9gDAYPGmmjNbcmJmEEst",
  "key18": "4hYJJsvduyRy2rvvKi7Ct2PbrpkiwPvnmrAaMFakmtwpsHS1W822QuQmrWgK4htxNoZArWLEY81M8cBAkaYinQKT",
  "key19": "5WPGXDwaeohymHrPWVwcjjiKLhUCj2v6E8swa2VKcne3GF1ZHUynk4ZFnS3ntFUz7cNPQtb8AsgR6DDZaJVXwSZu",
  "key20": "62MLQio6JuE2TahWM4WXxbsuNto2rxAnM2aM9Xso39wPfc7iKhQZGue7T9mSkx4X55PV2Xjr1ofEJGHT8o6WNNUC",
  "key21": "4BqkSM2zZ6mW96VaBCPRhUeiryNd2xs1HUVNeeXdW5jiQRezvw24navkSkv3qjHjN5eaeZZrZbTqtfKnka88EavY",
  "key22": "4pxp65yjALKdeZQ5vQui8S27EHUp2cP8fAnoRSHzBnXoN4rUAoQvV3aAVFFzxLmxdN36yxHHGwzfcs4BvXho4GMx",
  "key23": "2B9gpbqUZv3kQ55EJGW2BoYfDwMuZ1KogMEPhRT1qDP8xFRGzARoyARgPVnTZyunHiDQrfKdHuEd8KiwXBpuurcX",
  "key24": "2JnvFT2kw1cdgeShTtBTxwZRVSU4kv3Dnz4vLJxvtCyEDvf6tFUiUw8sSsrBdvgT9Kgf8MjsRy2k9JWSiTAAbV2S",
  "key25": "5KDYuqPa8bdw8DXwiP8xc8KD6sUYEBQecVJQmWkqPiJXowoaZNF7ah26EraHSaFg7XHniqG4Em5pja1zUKP8wHMW",
  "key26": "2ff4cvSttoAt2X2aHX5ibRBCf4pXZ1dFRrmiXqhHzNP5YjYmJjisGUasoTqoWmoRiGnScXeuqQRr2hBYCEhSwVq8",
  "key27": "34Gc4Xb1DjJakrh9XwQ5LkxGr2eCXi4M5dC7pYCW7X8mktJNUhC9H7KFJZ9qNHx1SxcuM7S49kjFCggjrAvmZ1Aj",
  "key28": "WSz2d8JpZXXwAeopsrbZGJEXXeTeRFQYxCshH3v7JJ9TXsBL3jF5gPySBZv3FyqNPnp2Sx8hjWspT3VfXJ8JNdY",
  "key29": "ukfsjh5wGjxcD3LpqvDJGz83pt651qpgmtJNuwJpKwNC7pqvTYd6QYL2WgDWtdR5vNdAzv2WRLbRzUimysRh8C3",
  "key30": "2LHNsQpZxvMWkMCYeBp4MnQcR59nhwi1vjrkeK86x4DoPbRvPt9E7DBVYnDHSChBDLWq4rBvQeGZT58siPhYAStN",
  "key31": "2gdvJZqvgznMygXU7u4jmkZLM7KmWUUH1FPRvdcgK8dxFUw48AwbCuABdw3Zobr1QnXFFfNh88FMiwbTA8sBGw7w",
  "key32": "31Der276VVJmjjZatGvc6xmSwi2CetuWGNby5qiW9XeXtAp3M2kMzr5u2XZ7Ug8hTkqAewZwYUxUVdXkvEebApjy"
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
