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
    "4r4MsJeFibnjGgQgV3edbgJnAQLiZxJMZsc3926m2TdvxojxHjUuEBKicLQ7m2NArfWi2Lo3RRoLtsYg1yJan2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QiohWhRV6SYu12nHxsvS3Mc1NE598bzcQxGvUAhVuQkzshuAHuFQHx2okFQk8jnkCyKZfXvt1kFfHvXRbibmgXT",
  "key1": "2hRLP7xrQ1rF24wwLFTa4EABWZzBoRmmrwie7AYGUUHkbRhDcboLDwJafFiXfFiPhJeWsdd8iMMag1HXW6oX5zNM",
  "key2": "321yXV9RR7pKgAJ9hXFRazGPLKW1PWJztFjwbLyaRooPGw7KA7siydBNo8RPuwRTw9a5K1XFiY82X4ZhmD4vKqYf",
  "key3": "2QnLuogwHb8PrUc5oYux4ZT1pUyoEKhffF8XyGXUhfxrCSnpedB5XS9d348Ea8Xsfd23xrj9AKJmkBhkpBPi2xqM",
  "key4": "5npW23caC7onNGG3PXQoMf5ipDD99QnqjjoKrbyXF4hBLgJncDd8oXMXLrtcFNtQfKGdsEVt3PMXV2jAzntPoNz3",
  "key5": "46wQz448dGXJVuZ7NEmxSUNQpLQCwroHQvpsgtndPJDANd48pGmRSjGormmA92zPz4gtsy6GwF4Dn4TJ9g8bUthh",
  "key6": "3zeV1uA1VpkqoNoFu9ywzb1kCGto2yoyjL4wZsvZM75G6Dih7Zmr1WxzweJHWYtVkConD8AQx7FzqrYvr1RYiwcB",
  "key7": "5WBEsbRugVyrQJf8ppY7yWsVnnFBPWxYoYb2rjfg1hPupsthrw5x8k9Jek9YF4bM8fwiEmso92DR9aDJ9C7hwxHU",
  "key8": "2di7JLVQGM2C5WYf69b17KobzaFEz45BrCumXvjkM4fCV45oZWEgpKr4MMmXx61k79w4UnPcjoYvELbeaVtWzi35",
  "key9": "3L8Sn4vTTv9CR67dTPJmuoxRW3JJo95qbB6XAenrW5zR4esxLr58vsG6MAzztVnHdp4m5MSXYdGZ2HMgiYuQEfqa",
  "key10": "3nWQPtj4LhMpLJ8fUvHJV4Asa52PW2ULc8mR1bx5By82fgPDd8WEb7N2xitoxhRNkGEpeeWMxGA19Rcs2EMsHR7L",
  "key11": "2iW9itgYAnsmsE4PeiGHB1bNszhWqHSuwnCgsv4goG3zT9o2odofE2KVEQh7uyv9W94DDmBTEwi7Q6onwFMwLijs",
  "key12": "2FStke9tg1UdjL7TUBtUCB472MQboCo7NPE1PNuwfRqS91MEZM3xpkNGEq9mkQXJWfdzZCR9HjsfVNeLUQY2Sn9u",
  "key13": "sUP3S27oJbPwSxL1q7kdQW1Xhx5PNsHMVBShwBMbTuiyA8p7hpdWT6TG7trk22c4Gip4mtY6EjTAhbqyHgfFVXj",
  "key14": "aHQtNKqRDeXZoMbHeuySyyCeXDv1ABAJHNpTExq4YJf6u68KwyFeujdKvWFt97pqGdqg7pjFG16JKdriPwCWw6K",
  "key15": "2XT1ezM6JyQsBFcUoTcwN1LAEH6KMbKETvNtSMtbHynWHQxVQLRVHR9tX5pFYTss5eeja7u1eJTTHnanFRv7V4QV",
  "key16": "4NRN21NvEedkRDoNZmqvPh1ojCSWyvCbfodYmUKuUyRf1U2Z5We1Se1U8GYs2mr5FwbJDzZe8NaAwBnT2vQ98vDA",
  "key17": "22VHUCdwYHUJ5aePgKC6wYbrWFBWfjzaEqHBPjXeFAi5r2AjtcUAWwKdKSfNLD9r2nTb19a1bCHYbmP7tucNz2kz",
  "key18": "5JEj5rPB5L3KAuVDTwvDs6GiSxZBUEfyHm29W9a54JHvBtL451QNBew6JKub5nT3GsULupoRW1uGDHxcRFCoyeCz",
  "key19": "2TkzorS5hNUGN5ck4FNE1JXKfdkT6GtuQ96ZTcRETBPQwRtTkgg3dNSSZhTGSdrDRpkYGRpvgCXzucsZNygqJVLX",
  "key20": "5rj8vKemW9ER8uBcaWX8iqBJkTJYspEYXKzxetxhHq7QGEuwFbSKbpAhNoPTAC2s3W8AVmSq4SwFxCqejiQbqN6U",
  "key21": "BEirwM6VXqfMBW2fNRsT6qrL9NfjQGhfQyKttRzPCnKfuApfuUkpanaudiUnniG7Rf5gdkX37Dc83VQ6TV65NvR",
  "key22": "2j6TibcSt3pC71XeWASNuhXVXZuS6NgYxfG9qkvZb9MRvp1NV4XnTTAiJXbyuRHGDRT33JtfN9XHT1aD3L6th1Yz",
  "key23": "YyHCmFV6395qdX4iEhja3p7pPy351dPNnC5ncvmDCfGaCg768h2WvjcbfhJQdP5cQSEPQTKBPm8PZRNPra3o8Fd",
  "key24": "7pzcvRFpYhCrgB63ZK4BVGpky7APmfCTYcWZe6bhNzKy1yqjMWAs3kjpdg5UUvau9LKHTqeQCV3ZqXZTSjjqtbi",
  "key25": "3FT8Rpt71YdaKWkaHjCkPWLenDfPydADa7eo3Goyge1hYQzTV2xgUVgC2Hs8qpVWX5Aq2LpkucB1BKXtAdU5esdP",
  "key26": "RjZTZ5xeB1r2wWsMebM21qo6P8YHykPx4oPcTVwahQxSziW5e4B2YFGSvKWUVArtu6HPqoxj1nkjpKmza3EX8rn",
  "key27": "2ppN2jvHGMtbN1NAT7KGtwMxLFFc9bi24bzZBm9sDed2hh33TNpAkwgjgibNbARQx5zf3SpRtGaR2w3cqYfFYTSm",
  "key28": "2dQeqS53zHbfHhyfhvMny3WqHi6cBJ3igtDL262EQPU9WF5vVcwHwCPkxH9M3TvnfE3PpMydJF9kEt99g1AeeYpX",
  "key29": "rpWvxgUpGkebddbBSPLyUMdRGrLEtJxeQaSg6JxC4Ce1NNNuyhbpPLxuQDBSqTJYNMp9ULy9SwyGV4XuzBzRSA3",
  "key30": "yTh3N5icp5KQ8cVzxViWSTgw1nJUBrWD1BGYUhLXheQrtuktLX6bGCvM4U9tyn7RBxZifMUBA76PGpgi78YWUop",
  "key31": "2tpEmix2XrRH8v95puUH9j58vXmMi7P1D3mxhf2oL5aP38ojckP3Pg4W1rtuEgnQeVyzzptL8ro8Tn2XvTaVGHTC",
  "key32": "3Mzk33DaB39rrL5Dh42bVhqRUPBVoDmqwCm6pZtkhn93xpP7mYxLpwiuUEQm9i6hH17hnVkURt4yHXWH5AfEZmdG",
  "key33": "2h8K9mzz52oXvX4bwHo6624BMqrjWZABG229efHVyyFyuGMTh1pn5vy9QcEFe4UPyf9wRnCKVh2HjfaS2YjpqYzm",
  "key34": "4qE1iKY2sZyoyNkkrd6ezxM5jW8jTSFzQtiLTYWD8tkg1JjLwyJzQvuPj6rYyDekCMPGirBmvf2F5x56KuCZncLZ",
  "key35": "dPx3fdJNJG72ssaog1z6CxjcgECYYoZ6f3TsNerud7LYFemCPHZYXBAS5f4CLFeNSr5AmMPjduCfVhwrV4EMeid",
  "key36": "3P1HnSn2UhRSnY66VBXgYM5y37PnC8w7mJ2KF8d26KmcFoe3iRUSB58TSUFYwLQormsLNcubj6tGdvwe5NRW5qJ9",
  "key37": "2UcpZXP7cJn9cHFh77N9DCayyxB5BEyiogu2PEbTzDqYgnfuhaMQzX6BxnsoxnezUXSGvfgqnKNgcvmEz8MFjnKa",
  "key38": "S17PsyuJpumd1ku1ejAVkBx5EsPCYhpRih2zhLUKJS4U4fBX8Ff9RvxEFG9RimZeAj2jPwMvEPzvXw2J8darHcu",
  "key39": "hFK6zR1f3sJpEid5XxhXx3ycrGSLujHSXf589V9SBFXtmk6LzoeKe5Z29T5zAENM2psDfESen28KGsCiZkm4fe5",
  "key40": "5a2DrD9RHZ2UvuWAXGJ2Gzb4iRHn6y21jur1M3oFrRkv17kUjBnxZkjRP7uw1g5iTSViRN8yKVuyjGNk3NsbX1dP",
  "key41": "2vAEe4nz4WCxWW4ujtv8mMMczaoTbjvdjMayKR6BYGtyYJR8r7kNUvhQnuZsfvsLot6SCFMukDjwANp8TrrM6bzj",
  "key42": "4LbbsyKmCcANPZZMtH9bpDFcCSp2r9BAjuPwC2sLtKQYCT9K54wuyu9thEMZ3C3KSL4PNPAd8u7KPG6nqqP1MMYj",
  "key43": "44eUEYfzRKFLY6Dj2ujbTfeFkvJUxRVJFN9RNUQ9131ccemksE3GDxT8VM7fZpxGpfuhix4SCkWXZvWoGexeUcuB",
  "key44": "5Le84HySJxyAhpkYtQ1Y8a4yrx1ggSjSU9gqcvAsjt1B1tiAocZ7DhSzmeQPEiC7tmoEgQpKvTnvuNTasVRbSxDY",
  "key45": "5PtWNsgAngYSaPVEEN422zZhTycHvctFqyLkxf4w3oZLXLgBGGuVqBjstYBwUUGCjmgNtzcUeTvGSBWJBgVXyRfi",
  "key46": "25YnrQjzcMzFA935u3mgjZJoKb3XrhZvojmdzGziiCd8V8LUbwZXHqKHDehy7xFmCn7VCzi3b3iW4tXET9qtUPfj",
  "key47": "5fAdiXDGEAQw1kcufapeJajECVMB8QAJEzjwMXWAMxX57gMxhHhRuXt82d93Td9pKtLEqAM7oWAH8M7wcRPMhnNW"
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
