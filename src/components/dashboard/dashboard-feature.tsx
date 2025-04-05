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
    "384WPPcZvfLqBZV4Ut9uGspgYXk8ZZFzt7HCUPMYeTKxAxBwAFAi3DqjtTb2tkNEDiei3zTYuyB45g6QYkC29D2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AVCNFoz7fpN92MbyFTiqw2dLCmkabZnjdJXfNJSxahu89Z9nive137CYnTE4hh1TwCd2Xn6SygGb2UvBJrx7yry",
  "key1": "5DaV26zyfKauxVUdvVEzpGBNkW1iCqLcn2QeTCzBHwYo4x338ZezSxhWQn6BAGpe2GBWfHxJyx2fQXjSdrB8jBE6",
  "key2": "4PrXFW8tSSn7dJd2QPW3FPbekspkWRH216sWwzFphs16GrM3KcP796haisFdQEEmuqGwqdhTiuzFrmCWwbvghK5U",
  "key3": "4iZRtXsxaNCryQtr2FiV5ArUbpRXRxrbJW4NBZ2MXiZhwWmPgG4KvpJ6HwJWK7q65hghUtnk4Lv1Rwkr5DVkZESM",
  "key4": "3xEjYiWgrA4C3QrmURzCPkfQ8qdN6cj13qc3cZ1MseLakokfMGN3FP5YVvHH9DYskWhZ94wwUjV5ACQzDLuJqeDk",
  "key5": "ASZBRYkJXtVg7gGHLKvxj4CxC784zYRNXGscStAfYBrHLLxJqkfhgYXfDSGQMUkCSV5TSMyaw91mVzNjP4CFd3E",
  "key6": "5hp8cD6ALJfnY5D63DLsUHHUdhD5vUkxjsPFYpqJ8V3kaALhtUz1i3vgsWHi6TKkyoXsReiBNbv3MZweHZsCxzQ1",
  "key7": "2yuqXUKWyHfrsBZ1U5fFyPSHQahTi947wibxzoDcWcWM3RyrjDkuVhELjg1fT9im16qaNuPD7GRdSXmVQwbSKPcL",
  "key8": "2dHuac4Gqu8c7mXJwpiS4Hxj3LF731CVFL4D4DU5zVQRRhvTeC3bCSpKZsq62WdWgpxccUGwewRZA1YeS5sta2Gk",
  "key9": "294fciocgnMCaw466y71aaRUFbFriPd5bx2yQ3HhhVsnN3x6q9mvooYpkMsAtG9FsSHaQPCruk5xKuYj75qD2af9",
  "key10": "7YRVqPLtZ34T2VQGzNj2K38NH1TZnP3qbVRCAGEuMyXCAu5V3D5HtmXyBoprFyRFzsHGp79dkMaXALoYYM9wn6p",
  "key11": "4NnS2rJxt2RV3kBK4eYY8VNdRGmWchUMZXw9V7hmTaFRk2nKJ7HvDauPBAZz7RkogZZ7xmfsUSQtdx58znNkSf6m",
  "key12": "5aihD1cXBHvLkRdMmzbBLVxzvJaqGt8rbZGFdWighh2oinp5b67ZL8V6HWxAUjXGnyc1YFVmBqQjcLGFKaoFogxP",
  "key13": "5aXnEh1wB1FKJSQioxigD9qpqLArJ8yFMibB3zhPZMi1oPmHX7Xsq8PgTpBreHdeXVGJLht7f3VJjACYki5CeRNB",
  "key14": "3AVE9Z36x5CBCiJmbb2vBAxP9UY2QK1iQix7TKRHot2xKJ4rKnkW6eKDEXx47qDobuUR7XGp1WcKYGhrnbCunaWy",
  "key15": "61sHqHSVMQ5YAjTjhPLs5YwGbEKeoDr7J57S8yD1vcdQLRinzEfdVVDLtoUADmvprLH8ftE5Phw6EviZUgbX8vEC",
  "key16": "x1wsKLuWoUpmG3v5SgWH7o5yqfYhTYozdu6DYsSRcUYLLYqXoGT3yaVUcY5pigifMkVWrVrfs1v9UeKcWXS1qyw",
  "key17": "2dVuwtp2rwky4KusYVUSfmxzW7fDTPuKhPYAMVmiy23yDTa1RgWvZqvioragfzK3TxkiXrKv5dckNWnFAuT1kYut",
  "key18": "49dLtPWE3GQomZkYdRPg54AaeECK47oK7uUbwnT7qUtzvfUNBwv6LHAsY2SUTNeXnV8J7mLYWxky4r7Ka97cbVm1",
  "key19": "45a1EkhDWvCggvQ3FX8xxJmBWyawRtm9ABcuMzjciuTDGnFox4SyvZAK8SndUbqst42FA2YczvGTjrQsGgpe2oRc",
  "key20": "5HUAGJTgBFL88XuoPLdbEtJoieqALm9oYnCtEG5fDushpoXfhH6MKuTcrN2EL9tNGY3Zn9PpvBU8po71KpKZhwM6",
  "key21": "4fSA7Jo1pj5VFtZTKbvPWK73amDA4dHN8ANgYEhjGMwdsyrfbXNyS65p1zjznPwVhd6Mn3xUx3K7qLMX7161dSMj",
  "key22": "3uXJYi7vCCAUZ1Xw3rvke5ReufVm6WavCfLDNvmW3XLPiRF1u4ooWHxU1N6cWADNymCCppR3u52LKbQbK1MaMJxf",
  "key23": "3WknwFrCguafQQ6BVPM5m1ogYaieFeo6dkdFVxBBAbYty6xygKH1PXnhNFGTBuu9aE4E3YhEB94JhTprY1m2Y3Jg",
  "key24": "2AfDDKbBJPSDEC3ocPNASbDbqBbgvBRWKg5mgvisTnKqy4FJnDKDJLnE4bVJziwcGUn3nSFjkUjkYFKU9dyYV1ES",
  "key25": "DEpsudnR1uYJbEaPGZSK86kXqQZ1jqWQwk7qCek3pBZ1kfBK5DvVs6ZhhngfJPn1d5CZda8rcqD5uYErg2iArhY",
  "key26": "NJNPTL5PvCqPJtHmkFG5oTdq73zLypddhTEgFfMD3mJTBoKZyqbbdN8Q2muqm82JDA3p6j97PhEgcVWHhFGWWGT",
  "key27": "3hfZVYFzpKkXPQogNWqDaViYSnEqW3C2vfij5ih5n1CXwXrejpyyy4rqzzntLiABgJyupanwyvfnuKpocTQygAcs",
  "key28": "4CF7x57Yew56CBJqp7evWPwphUgtdS1j8wcofMUkdHCXCWgCvdNXz1ZwercoyUvZ5Hu5wozBvijCwoQ9RB9M2oMm",
  "key29": "5AbHtCav6J6npixgtvKv4fEAnzYr1FwNMvLEGHfG3TVUAZrzN5YvKMCkhubGUALYcy7kXf321YWgbdDcnVcdqPBW",
  "key30": "2LnvJpL6ERKhaL9182hyCmRDrzXHvFxfxn8Tpoi4SGoR4fX8FSYoaKBYfaAHf1z4acZUqauHE1jMUwZRc1e842kt",
  "key31": "3Fffk1tffPfXLzyvS3UKsBgAmmbJ4DhYjWfWJpTf62CBTJ9PiNr7RGcxQZeYoPrqMRrQ3KBUsFGLQWxygcBzqTzY",
  "key32": "46AZfWS6ev7UZvzrLjuMCJYRp7x1VG1HEYzw2sraS8UoaZzJidW4FyfnVDrudj664XmnVbWP9xhmVSaisi7sYS4y",
  "key33": "gYsZ4QU6WXgSVU68dTfmqSs3URu3B71pR5JQfwFuFgfm46T2njLTxsnApovcu6wkyZBPZpEL2PENuFdww9t5pdC",
  "key34": "4vFvzdQJMcZvGnJm8rvS7vuTizwKvZe63z3NyV4jaXfCNP5DC4evYRGHbCFocrd4heZoqcQMksmoxxkbP1T6U2cU",
  "key35": "AuyX8CurgHZKr8GWZYtwzDdB8VvUk1ZgMnrYd3Sjvb9QgqjWj6mrduhgGjs5WYgAhuPYneHm6iVXkssFcGpSsFC",
  "key36": "3nZBqpYt8Em3fxyXype2y1U7wWUKTWRW79BWUVeFFCCZW56HMwN5QaUZiXaTBWi4KjiRR8sfASNpFeVc2LByXMTH",
  "key37": "8UnyNgrYb82sNCVvBjiWbJ6wFa82vDbmWxJqTaNhHkRBd2NG7gPLKUyvz5rjhQ9r9i7nDdLz43Dz7uTKtsbRFQD",
  "key38": "5AP8FP1t6yfme3DDVcgN1ZUSX4dzapj7KjLUMUjUTi68q4UTd8r5GaF6zR54GYnQsrKCP4F4wVaJVdVoeUwSbtWv",
  "key39": "2ufDmTuektrHTQ2FwM7C6kweGjfkp2w7HPcZT9YsMkcBNgMGZrukbEJpSEBcbqpkjmqoH7u1hCnLVLFdtDDTTow9",
  "key40": "5oksQEHX4HokpY8ywAiJTXUmrCgLHoSRoQAaQanEubnfjFVLyqFqAqx5AMyWQqKLggJuHb7g6zhq7WCzhAVh2DAh",
  "key41": "5FePxujm6RRRzVNmnJLbqgBcCvaBmmvx6DyBfhnZy4EUvjjLe2q9vTFnPv5ZPV1juSpFAf1ov9x3nZfur5zs4eGn",
  "key42": "223YH2rkjTdxFTbSK3mDN2y5hiWNW8QxEFnxPm8aactdETdi3oFpwyUndfnYX28n8iPvL6jv7QzLKksLZNdLfcRu"
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
