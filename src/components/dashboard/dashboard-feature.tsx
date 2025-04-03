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
    "2dS1BTXpeJ7tgnngotawU6GAbPkgg9Rac9AEGmtDvLKiG76H3jL3XqhtJP72RroQoBz59VRPKiyJD69DaBCmRuzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x1By86UjgAiGzuYHGLEwi7WLs2BcfEj8tCA79uMPrH4zKRJxrNHAsMsCue9jrgaUe2mmLuXhsPYu3waw5VqETY",
  "key1": "4hLfVbzHLFFv1M29DNSA3cuvbN66jZt5ont9ikbzCVw6SSFRLTvLDw82MEm5opaJ6srsF9qQBmTtkkC83qybXT9A",
  "key2": "3hX4a1CpYYSj8VT9YPRsZ53GTCJeRRNYCyevxu2wqYfGk5sUKTLWYsgMA14SXUUCdi7jEGKhCXBYNdXfQdYtsk24",
  "key3": "2eK8w44MwZztSp3K2RRW2jzD5SkiBAQ2EMDbs84rSawFqCyJ27Ymfq39HafzLWv5ZZF4pZbnUuWqo9hKNAiGJQbn",
  "key4": "4mkXJkbw5HSYmHa5oDTwZoUVZrDcZMY78WKrumuRuZx7ZiMKa8jTSVFShYBApDowb45287Wu7gnMCjKDDeJdqgDs",
  "key5": "4HkreqPLV7od2aTwp2AA1vVZF7C3zMFj3L8oH6R72sisgpnjkTbQAJhhtUZTksPjmhDU24oyhA3DrkEmQUi46RPC",
  "key6": "WMw7oVM66zs7NgqPX9RMocB5vCwQS8vsstfcEQyGWKQMUZMcSw2vXkJgzJNo2G7aVA6T8tAnSvEmoxRkFYdjjoP",
  "key7": "5nmXFaZs4JSQb8jihdCFXCnRFsUigbcCW35nvBHUTLxqjSNzjwMzWY2Cwc1by4TvHkCtKaaWnwHNXzEe8Pgn7gHu",
  "key8": "4yPZLMj5QLTFVRsPfmw5NushRGtqN6KYdae86MWvoXb33ttByUtvRTBxdw7k84kzQsXRu5tTfXwQg4G2oBkGZrkc",
  "key9": "3mwX2zxqs7g7P7Vz8dH3PK1aj3wuJdSGWajrXLgwnJcLQtb57LWL66TBFB5VJ9HZu1ksSpUunNee3nF2rJ1ixQBp",
  "key10": "5A6ucSznS7npz67j81QVDhLQPbbpXyES5ZkAwUmP8VV2TPCvrzujpQvXBUxPwPtRh7DfUq8QHDpGvvU91fpTtbML",
  "key11": "3QTn4XFQn4Tv9HB5DdSRoxDRwwEQVADG35VXC7o2QYi7kNNS8mUYJLLi6yifuLMB21jFmrvzMixr8fq5jG8ZWYUX",
  "key12": "4GFboH6VGobMuUbPc4yVqg6R8m5fu9GNUYdM2YexDf8cL9bX8LUdXqNKNwLVLr4aCDGLkvAtyELmdF4KdKDTJh6i",
  "key13": "4Emoz7Kmn8AJrpbjY6tRgWKkZXnKTZ6SWjtypY1WKjbHUNJTEWWraM6wSq1RcTNrW7ESS6h7GqDQUJPLWScLHVSR",
  "key14": "2ug5U4n4TmDmPQZjLf4Yv69bqZowzr8kSBqcJzuPyPqAHMmv7gCTYCiUDsJenNeyC5eHb7W5xLgoULXpBdy1mt6V",
  "key15": "Ww8XXJngfEL9nwxsjP7z4JctPhBHLm7JfU9kz6y62HnKgpsGfhU4xfapUbivgEdTYQXbba9miigyZM7WEZFnTGB",
  "key16": "wnU9CG6uy7x5Dy2GyPm45LZ4q8hvJMqHmvZxfbQFkT62B2LpbESoWfuvLYb2HWxGAb4yxV3HjqyfwYhiWXVTZ1f",
  "key17": "5ZF88eFcTkqQJvY8KAaJPV1C6R1A5g9P1JgnzSnq7Kng72zEJAynN4nGb53tAkdDj677TjaKHjTyH4LVeJ19MAY1",
  "key18": "3Nv6PxQUeVP4ZyPw2ftfQQibNXfihYJ48fifAjKJB5kMRkpPtfKSLbwjehttRarH7xHqhftV8mzmKUa1HRYVhLFK",
  "key19": "4tiUmV3zfUQN8ixYFHSPsnSnZRfNwWrKUmuggXV855SkcLnipYexLXV3TyRfUBamkgamgb9jYqYJFVWCnmk56tnR",
  "key20": "2FnHM4krH9gTBAumBFSgjrVZwzvWYyb3H6BtAayqf3CqpJU7eHNhAgx49zGtwxzDrPFmGGF1KpUkU4qrfigZLxh8",
  "key21": "3zLaZK5P63ocU6m3rPVMxto76qtGSN6Mzs2mowbBj33UNfS9diDNazNm5aTKzshe6TaQyNL2u3buY9qHXNRvrafP",
  "key22": "2T9WBjLfLChKgydFxT66zPQzpEAMs3AnniKPPD2XWfpZfyD6Pn59TLuSeYf2QZqDFp8JnGzxx7DLUNBKfi3HByTy",
  "key23": "5dwvgMKHMA6gL9e8x3Y3ewQmLAVfkAeRDfe6eK8MEX2cVAhXapuEEMTAjoRg3oXWJZtQPqnm1StBSgWsr8kpeeat",
  "key24": "AostJjUQLqM2WzubkVyFJovvJWrtB4W32Tnmyd3xNjrCqDiv4izMDBnyTt24y1nzCfhDe9Udu278JZ7Vqp9fWsT",
  "key25": "9ZZxYXuoEVLkvPJo9mvd2BZ9PuW71JUcBdEuyPrs2nrR9UPZz1rrzsGiSX7btp675MC1UgmMJbbX19M212LQ6Rh",
  "key26": "2JeKSjCz84jnA21bKPnsWBKzQoA2PvBnXhmrXnReTqi5z1p7nj27ajV8YQTCP3LNVdN3BgmQy8ZdVGztzHpwT8ES",
  "key27": "3ExZVfVMQNfj4FfDUUbBQ4JtNiAPGAhsVDm19VLyA5hRvSqZLcGYsHeffovjGFs28cG4Mkf28yffV3xqVvuimCoZ",
  "key28": "5Nj2gn6DTkzF6v3Bkh5eX5JEvDcb4jdcL1ShKtVqbmB26QenLNvotrrTvgonRK4E1K9ENrbLCPXKg3ayehr5Ct2D",
  "key29": "5q9WyjqFhtDgbmbbMDspBN621TMy78JYZsZ3recoYtQCVk8z416FAoCBY7MiCTmnSQQ7umcXBYcXspKofwsi4H3C",
  "key30": "37xrCSK6SjtaiJ5wyvXEVKjwmhPvcifYj5hc5agbYjgdWstckttzBTqajR19gYGgpYF7Xn5xMgn4evMRx8PkTq9U",
  "key31": "3Eo6tvzDwjmRS7mvzNTKaqNcQZyPA3uLWR2FaUya5mnE1sJmfqXB7ZZzYGzSZjem7Q83WmdwwddQzpmrBX6f7cNs"
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
