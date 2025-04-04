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
    "5UqM7CxUY2StKfsweo5HsTSKZeoGWV8QiNabrGkky29it8e4R3GcHAxd8jLznoFyD7d4b4CN2dA1697VaAFpDgap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52aiGRvzp3JtVdD9pqa167LDk7ZgdZ7ZmNvSLmPLy69wyt9AXvhAzi4qj26NqGgbtphwsuKobGJa6p1V4MVZHpGU",
  "key1": "5dpQF6tKFLKhCLtJA9JbHXdnZaZHFoDfjCYj8v4cMsWVPGcHqhaP1bnoNLQrXu3RTzDPmMdDw76cduFtsL24Mf4r",
  "key2": "3uh6MG7gWhYQxBV5Cv5THbbVsZZahwGfvYJBPQgHtAJyYywDCk2sYfVh1V2iDEPhYWpRDb4Sr8hWUP3sug4TVTTf",
  "key3": "4RCiUF2FvqonL1ddRp12SXMc2caV6tKvqdrz3eJS7causVSxKFrxcYgShZApiEQHBKKaVqTPoS4jAuXEX59YLvcW",
  "key4": "5zcBY7QfUVc3YBC9Tq7JHAscAph4LSJ8GcYC6AbUuTgWGzTsvN9y8136wEFnTXdmqUW9SF4hAscnXCLSYHrTHN1f",
  "key5": "3jTWzA1ZGerFNQVMUX7NRPyEuiv1dtrBbj8UoD5cr9eerAYW5gdxf2yfwVwSt1CpGMJtPXCmSNDnEXJy8Xh8qGBr",
  "key6": "5LXM6npYFwjtVRAmhjJae39GvuAbAMSJ63pEZewD9x8jFpJL7BwzxsHwcwhrHv8A9GsGpau99xcqBaLc5DL8kCLY",
  "key7": "3pvxqvJ7uRjb9iuTqBzwfAsyvMCQpvymmaphUL7N4QQc96g5CCZQmgx5eBeZgG2a65WCUdZNjSEgaW1qNThDBrbb",
  "key8": "4eyrqifYrjjCbbbpoGxAv8jXW7orznSTs8ttLGTbPx9E6SX8Bs8kYuMpQ3iBHDeZTuzyHPy2UW1Ws9cyRRj2bigE",
  "key9": "67jQF74db2N6ikpxBeSVJT8X8ts1kT2vdP3Xs3qLiPHasKdiscippF7FQgvaUdeK7MMiBpPGKSwXzmAxbJDdaSqw",
  "key10": "jy2GtVnAbnxwJCRkcY6H7thbLiLibf5rJqLGCNRatgBS67vZANGQVGZvXX8TYa14QNvrGdmH6oaLZGBpXbFb5wc",
  "key11": "Y2JFUMVj16LkHERwTHFUhiSJGZhXc4mQHPxLSok1znGBu3oGhBTzNjoNcEGydgqvpE9vTxYd6BQrwWSFcn6RhDy",
  "key12": "PYNVE6JFmrxxzw7teDtNM9jVcouetQKtMD7mdKTsABpJupRhCQD5s472PM2kiicjFzkg49JKDLQVerTRTvvJpNZ",
  "key13": "4A7JUqGtcYpMK5tNvRq5Z5sKU97ioyhD6rFCWnLHJbnbxZArjMreszxpgr7JA7MdWoyFACUg1pPDHEtBTW1w9Rmt",
  "key14": "5EMdm3eHEBZJgijBs15UoNGv3VEMHFbNKc4moUrrzazsvTnWL6y95hg7nqdVLNW1t3swZaanP7GRa2s4GHxXgVU8",
  "key15": "2hJQD98j9z3ZQ6AgaARHgbTt781R1R36LnLmDM9e2fWpd4nwByRVwjXuUWEpVYhXichyLFftUETviVU6PBLcGnSQ",
  "key16": "2bMvmGJC2DPn4vAjC54xzfE5o7LgQKqMj6uex389gfPnbhW6j6QHv3WYcfSCXY13btQppjugmEZyWvTXgfDSxaeN",
  "key17": "5cAGSraczGhKZEytpiKRqDHSuVEYBCGU45cGTWuXvz2zLmHj66FF5iX1ST4GoWajCL1QxCXoxAxaEbhjK7qCw4Gs",
  "key18": "3FDgQF3p1a8hN9VjBTeWTLUuN4w3RRDvbddQNWk9f3GTZXwqfL2Y9TrB4wfU7YRQu3LDRavMNUvsFW9EmcxMF3Sd",
  "key19": "4HoHrk4zti52vGMb2P8b9ob5UA8a6RGCUimtVi1hPbpH5jeugcV48Wqr9VvW6wATLL7ohnWHiFVeWbPnmCTMCvXS",
  "key20": "55FJzBKumPSKdqqFwvBTcRqd57ezXGuK1fBcxMWZcjPA4PXdNpjcrR699SL3Zhr4UYCo8Qch8uKVxjEJT6EKKqCb",
  "key21": "3LdGP4xkA5J147d3DkwXVMDC5kwtzpkEyrtpCDZEf5xNMksKEWhzsUQMYVJGMPoSqbi16K3J7xePpjNudKfpg3Be",
  "key22": "3pnXu2RyEwvNjCHhvyYQcHuBA1SuuRaTnYddP1bMNmU97LXDJpEXDBWEYGhpRmGwkTzjkWo5HSN1WUquhCrBnPPc",
  "key23": "37mS9pqPwg6wYAd2qPyGzBzB7BctsD8YsMV955iKnTUYpyb97yHuXr2WGyvtBFYwrdM7Xzzgfn7ALazniQ6K1UMK",
  "key24": "4gpgvZq9B2HS1K8fm59v6Aksnk9oMLAeUyu4yQ7LZfqz6V2UevJ9mJAYTJPrzPhvSCCsQecm8x6JmCpcYTqyiuBN",
  "key25": "2AAW2fXbEoc9epuwS2ix5gg3ngG77Jy6UTgZYsEuPQTUXkWh477PWy721TfRTcgJQgZSunY7efJm1uZfnHSbbciM",
  "key26": "2QDHmEdqBgaJm6YC3sWJgzk7XnkqjnzvnTvGKvD3q4dhFZsyocdLC3qkBdHfXKMgdcCWdLjYWR1KJRyRCer2Rcby",
  "key27": "5Csn5FMEkFwRNSTYgjz5D6atdsqQqrDTBZAqED9ZUrY6B7bk3JQDG6psvFZMRQx5vrJfzBG6AJW2b7UFntT44gXh",
  "key28": "4u4aWosJi2PbRM43L6AsqE2xrtM8azeiWm8h24smW2T4rrhjZ1pfE9JdHLdRz3CUkCnU138U9tawpnJNSRtcVreB",
  "key29": "66hVGCfX5BPnSvR6HGJtZz9v87kQzMXBCndHpdUpm6w92UpebBcqWERBNLfmHC7pVsirArdYoyE41x41aqiv8PBf",
  "key30": "2BsB9nnvDyUSqSv9D9m5HBnjLtKEcEFd1yDpeNbiYZBcgoMMNnzTKLgmDTsW88UE7z4LKVtLE7h3GzVC1FF4KekZ",
  "key31": "DgLLTQsspn1DnaHZJFDrbJgm12hBmHW7yp1tiSZyXGhgBfhxVpzxA4dRMuxftpzS6rgsNRuCbktSc4W4Mx19qZe",
  "key32": "5Xe4k2mu4Zc3SoEZ2u2Mq44BqWTH6XENMzJQcsqNQQCKH9QXgeDTRr9dypFey91pDw5JHPnnSC8YYXmkbecT48K1",
  "key33": "4ajvTWahYfFAb1s6UDCx9TFRvRPxTH1YHjpQ4E6k34J7DB3UbFJBFqMS5azE4xpK6BLxz6zg3wze6W3hbsKWdQZg",
  "key34": "MgQpwsGjz2uNzzW8X1vr7675E7t2TsfVkHTwEAZU2jEgREQNDtTvUZf7xtY6Ap7sD8T7DspqpUjzeAYj39nih1o",
  "key35": "4c8jKjseUqTpGBGPtCmYSmQ8FK7bHSd9wN6JuttmXp6fbzSiHpF357q8YR8umkTs6JzFid8wbGA8tEqBBqLvuW4Y",
  "key36": "3GhUHeHiaentcD7UqCZny84g8fJy6d69v2YQsUJAaiZkGYEELMXeHDWwpJ9T4y35i4CxsA4t9VoahWrqHx2Ke3i4",
  "key37": "BwkZR6DDW2DSViCCH8GBaJXi7fXUBeeZJ4SmVKmnhFG5G5qEvGr8BuJnnQLWhd124npXiS6CAuv3hCw5KZikhhx",
  "key38": "ioV2WeZDbzSLqZ3wHzhpZKYtVcBmhW3xqG17okTs2G4cDgDRcTANM1pnc2H8qZ6hvF2eJbU7vgT4RboXTxqRWCL",
  "key39": "3vgEYwE5TdvmhW1mRKwbZBuDqm84SjDomZYmmMbtxRkr2G2mPqibDCFT6mkYXhhYT831qQWBxfGkfHKXH4qinoMy",
  "key40": "45MSoPm1azm7xxvrqm7K4NSNPMCdRmkCFxSF8x3HY8nP77ngKHiCYxyBxLALcq9ZLVhWe5ysf3y7uGQvuyJoG1Df",
  "key41": "2A7uEJqJQ5dirmy2AVTpjN6FxLFpXpstB3zD77eCfsWEw1tjtnXyWoejXaCAHzKEKbtJPad6rBv5dkt2efJsWLMQ",
  "key42": "4TB6rarjgL3he3DVXgMaqwWWHJM92WfmL9tP15142uMsVYBL4746e3varg9UtKa7o3wDpmTUerRcpzvhWivuMUTa",
  "key43": "3P6QU7PVRoPUS6tS7rhCFZ6xDKs984t8r2GAwuVUKGMdaMpwFzkxLdwcqRLUr8eTHMYNpH66yxX3sWMSZQVu9BSm"
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
