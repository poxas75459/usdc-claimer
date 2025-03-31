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
    "4adgq1SWREZkRCGNuc4S62R8xGbhCFQ8LXMzq94CMBskVBg7hwNqGoQKyMp8DoVdc43iEVMWVpkv7kcPGJCvW2k4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pFH7QcDecfAM6SNAzwKykchyKzkjRQMtUutUbUfAv45pnHZRmqUJYcUWPa2ZbkUr5VTMgfMq7AZ2MAqPepvA4Vk",
  "key1": "5T3oG2XT8yod2gd4DSqJAidZ3VX9sbjf1ShkBwCTk9kMb4rBHXz9bHDehvvh6f2q2HUQPA5Hc53c5R59TZUWLaSy",
  "key2": "5AdJRqo8eBWM9Zm9TeSQpGtyVzdTvmoPd4pUaZo6soXsKdxk2LU1QGhJ3WYBtYtcL5uutVdunfYJfrbwNEoNM58R",
  "key3": "2f2SjhizYuhyjSbB9ZgJFpKY3VNsGJjQPVBHESrv6fPqDrPH7D42cFF141yzRSrZn5sZQCmWEkm2G69fa12DsBTY",
  "key4": "5Z7cDZjvjodKkWTSDuXQ58RTx85wTTK9czY54GNfPfBnUJeFMkPR6eY7zfmrJ77rW7mxBDpJ1vDsm7vya7h7x9zC",
  "key5": "4vAgDWexKc7BMY92JuWBk21awFSKb3xChPz1HXefLJRBZ8WzohVdohyppQ285PZ2So1CwkeZKi9ssXdsXQ9QvVMC",
  "key6": "3WpEg72kBsWa3mdHbEgcMy6R4GMAr4YTqXMXWXhii7qtE7YF78wzsxbsRLb1jb6ySWZQscT5PtXXMfgNnEKAMvUq",
  "key7": "rTPE7G2EnxDBKHyDktm4KUqR8r9Us7xr7Gxb76zYWBy36JrzfB211JbCHy8rw3fz4c41kagzwJZHFTDoDm7NBSK",
  "key8": "641THM35potBiYD1uyoWFRk43H7m5qV3yjS3iNHPRv8UQF3EBvLRxjTHb99yNBJJbTEfkW1YhPDWe3rDoKDTD7d7",
  "key9": "2kLe8jxJzjM9afpp3LtAL3LfA1qoRfSUp5HCn7rvQhnfrhSS9tQQuMVRPjp2mteS4Pix3X2nmun8ewnv4unDf3X",
  "key10": "3TBrqpJwh98mmd2dk5iu2FhQV4yrAwxXVPVW6yNpMg88NFUq1UMx5DRKHYAj96qMYwjiTkmMPUCP13fft1CPgoQ4",
  "key11": "5K6pXcgbDcAS6ZfetrFNXiBfEFDjdNVvUMirty3VxY5hw3TJFWSXE9KZowmPXiazWdK9qtyqm6bC7LH71d53aNNS",
  "key12": "3gFHB2a2daJzwBhoRfgDpqFAWi3RXF1iyoU6JGQaMcA2n6n87FPKf1Fvk54NBViBqCMAZYaRRtpqovyrrduZjwoS",
  "key13": "4tEucdArHXXFkuQQtjitDhtbDMd1n5wMtWkGqHdh2UmVmVEmcLEA6MmEUfQAsrDHBdYWQrz4FxfWtecs9dBoP8bf",
  "key14": "o6VdHZBDXsJAXwdaHqPQXZ1gEhLyy2g7HbbqS6XqXyf8RVVytd5dM5Xwocy2AMCc3kS1YNnqER5Hqt2cYjnV9u8",
  "key15": "47h8ZorNLpwZGQHTWjvsk1VXSUURiTdoorz5U9Z1bu6w63E6MC88g2pWySpi8wFD6gYCFHDS1CWHdUi9WJPhsax9",
  "key16": "2LktXeXu5WZquJGFNyT4DeQXjdLryyejVNo6qzPQgxkX66r1wRxXEjHgGGhDxfaut27hgr75MJ1yTAJHWrEUPV8h",
  "key17": "4rxSRNhnQ8uuAAtb2X4hZKzDVfk9L7MjJ4d6STMbeCK2dYgSFTSF8DF4soEbPMb1nEbnKzQmATdp8sh1Sw5cWXEQ",
  "key18": "311BMUuAFHjDBNv3SCwtRPewonHuUs2jAukkaXccjtErE5XTz1ihcTPFhjH6ejcx1bvRsRrCA96jFvcSfP6ddcm5",
  "key19": "2FiPPEca819gpSYAxs5utFQk16pZCzqn9cQuHsPrmKKDyEQJNFN9MGVKCkV1CwJqbNXwHCwy5BGLG3jzMzv7Z9Py",
  "key20": "5dKqHpPbDHcmPPGzquyrsTgK8ABs7bowUs9x5auDteeCGaVG3q8skMgi4354NsxoLJzrfiX8us7G5JVNpeg2CyW2",
  "key21": "3vozDnj7RtPzMp52NddW7kvRRKseBreCMh2FAH4CZmaYykQjC867YvtFCmqdKQ6UyXCqWWudehbFBS8XsRmYSF9h",
  "key22": "5kqrDWiXu8hmU1KmoXGHGLVpadDo2JRPiJyYeAc2wrw5nN896A978STMAfHR4s5EqN59r7mWQFP1Ca6PquHTwaQ1",
  "key23": "3Gh66wcjDpo4HZ4ghK7oeWPnc1G99C4jUQV5NDtusEbnjPEecFSDrxDyiXx6B5zoyQM6WLMRigTBraStSVjv7exG",
  "key24": "4oQQjfhqfy3TpAKpvYnoyDheVa2oYWgGWfQpn9Rqx1FzmWCdTZ9RTKtto7jzoNVDc7hY45dArvzuNT7CA7sBT7WD",
  "key25": "3k2bRSrvkbM2qvCfPrwFMAGFAEauDn6RLLimoQLa8tDTzefNGBEoZf8pxodsrMi3SUVoN36wpeFAXUdXwpZqCeK7",
  "key26": "5H7i2dy5Hy7bbMhX5EEvSG5CzjRqbmU2A5RD9PtSbvHtjFy888gaRSESM2qwo7McuXvrRFVo88kQuFFC36SweNJr",
  "key27": "4x7QmkuFDvmtcDwSLPPhQXbCNXgpBENZcxb29BFWkkS49WzGwwQdmaazapT3h5Ec4SvKiiwggtcCJ3vceYbDnvSf",
  "key28": "3D1fDhEbgTJQn1tXEANVzPziBcVmJ8PPx6WZ7SrDPmDd3GVwXG3QeZ7tgpVaFFE4sy2ZZgRzQyQtiEy1cdxoP1ej",
  "key29": "3VywPznC89W6heUevaPc2FWy6MsHYjXYpgZEVqUf82pUhsConESb7eFyYbseLoJDjJeEceLTVs7ERqChV7EiVPms",
  "key30": "2ppV4z5Dy4yWZ6rwQubCRqGeNDY5g1sa3sZjyZKsLcXXxwwxhMmmeUFW29jyqGFvr7tCG56zd1eYL8A9mTpWDD8u",
  "key31": "n7FabVzH4tkJKnEqR3VHxyHmQi7Vmfwec9qm7RcdnPoXSBoVhGNxWLcwTc2L3iMGTn9yGoSpHCVv58LBfCfSLvz",
  "key32": "59YPhDMBsbTS585m5rfdqyrvMevRR4sBEf29c4HjJuJtfGpFLT4GAgnQcPoLHJuaP5H4CBAmeUYCizSNNipcAfHK",
  "key33": "2dU3nkCEt1NkFpQqrzRcJRck798aYZtz1DJBcob7YmR8odmda7FiDAHRmnjwoX9ku5XcLKdhiWQmPskb5a78qEre",
  "key34": "xoKx4nBnRKiHauLRsixgWv7ff3yT8JxX2BETGwmLrLsT4xRRjawrjQQsTFUD4b6c8muVuu9fG26C1btPoSGQU1u",
  "key35": "4wGD6d4ezH6CgJoatRYWzxMq2WoBx3hXfkNuFVoXRkz9MMQWhK2eSkmkZ9gK2XtqgZKM4LWjeC1raCw6o95xUSkp",
  "key36": "5fCVzhVeeVmSafVig4YiWNx1bcWormus9fJoM7saB7X26r7p6zcpsdE1AXWYtybwivrNkGGD1Qa5wWtgHN9934kB",
  "key37": "5z4ski8PBAx6QvnSe8F1PPUSrZrpxWumtRWfVrUTKfuQjrspBM7Pcwi48d78Eku1nuyTeVc67Wv1tcGqSeyqji58",
  "key38": "64MmEgVD4eEPTrYcy8aLP6v2QqQM4R463ZXxYRiTJRm3UmEqW6aXKnjootRv44Xs1M3DMy9ZqWTspeeYBSewe8D",
  "key39": "2VGr5BcVyxTc8rVjukSJE8ASX3hdhqPcoMoBAWq6uaYwfP4tiS2mNcQmasyyS4SvCXCVdiHoVZinj25FBDCSTpDw",
  "key40": "f8XNAc2FJZSBQ2hLgCCNvi4wwRxJ2845b3cQLstenf2MJzaLD4uDKiwQX49YwhS29xticF25ThzLetxwnizBSA6",
  "key41": "5Zh8TvtPS3gpdMXcEsN8vVot432kEok1RcgRnttnLYhb3kxPHApYXt3RHcxg6oJWU8aHSDiakBUDGhwVAMjCJDXf",
  "key42": "2HwPCGJxU1uoz3b9NkGVDrNCBgDANVUi7mXqdn36KEvGnBxFAthYDKsPTHv6YQ1oVxTgXDVaDKqbSm9G6UXjEJdB",
  "key43": "2A3Ykz8y7NPSmdyaE7CqpFVSWFUpNLcUGzjj2wUkcg5MU8SoXwxoEF6xKhLUzP7egHQ334EFjxQo5HtGquQsnNgV"
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
