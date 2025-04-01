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
    "Jqs6ANNMTtewhYJMhJLr63jXUZ14qsFFVY8irdLCrmjPGB1jXsoTbRSvBLXrQL4KriBd4ongiyE1mZv6mSqtbea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q7tM6QoLSp8RQiJdNAmuWMSQasrGwmCNo8uXqn1TSSyJ8xSHcTiP8NrW2bpBin8B9B8iWFeEBRrFpH2uPjqNrVv",
  "key1": "4RhZxYm7mjvhGCm58G8r8sPYdZChzCbyWeVurSsVXgA73bne5UzL8RsTB3P6yWWp9LdFpQhFdbWuC2aGW1zN2dB9",
  "key2": "3qU4MsZiUiuqMTtZoMmyMXnYjv1DGPcUTZVr6k3Tg6bF6DxdSbuXT6nRftTtMxGtx8CxYcUWFxr22VRfbJDtHR2M",
  "key3": "7DuhKwQedEGvUYrwf4nC7BoVHbN3GAJb2LsQmto7TBxMTdSV2hjv93bBED7idwrcdFFsAJPrCXD82trZ8m1vBdy",
  "key4": "2PD3GGVf2RLcfUfvRjBN3wFcnGKSpMQMPCQxvjnsM8Bb9b8XTwQEcJXgUbLGed4DJ5jUPAGAG5UbTt2WW19jVm6M",
  "key5": "2DpTd25agr3NDBUi5CP9uCv34mHz4JGMW8pjhm4TwNLXwLa68yyMTnS5M3XRRbgwBKgfe1hqVN86WA3y7ZVDDsBk",
  "key6": "3Fpysv4TUYy8D8qA9VmGCawzw6bH8jWGh1xXa8vMrPFZqjDHV18q6dyvxbdLnBmX9xKm3q7NU7ZAncVo8ihf1Zn",
  "key7": "5UW4kkq8sRBK4s3R6C77Cbxf99xJZVtM6ZpZ4pXvU1Th1CpRmH8ZxXDuN2cUtJ9ZbKfyf7UEVCdZ24nF7soVVd3g",
  "key8": "3TKjv6L7ssfS9esojcmhymHxKZ7NUKJ6EH95h5gtFkUVh4voH9WfrFbCQ3P94MqPk7whSizQVXJtajGGd8z2xPbg",
  "key9": "5eFvGLiHxFavbhn2BtEac4qffNV6ZWxtc2fzRfgji9X8vSh2jkWdh1FrCYKtsdyYBxmFDEoG3MVVqpP5eL4UeqgV",
  "key10": "9XgY5FLrutjyRutKJEq2kbwCAkcqHvquu4cDhoZqcm3HMBSMiLpyvLoCe6Bg1CLabsTL4FfUuSNo4ihxNBFQiXw",
  "key11": "2SCQVYtGGSZsRVoPy9u73m1Psu7reFrjvTMLrRdzs3FkckTibbv7TzUkRiMaET9H8MdicZi4nWuhc3nGytV3jy1B",
  "key12": "5TLGiBmpxuuEkfjkoMuFmFpzi2tnVPLSugJpzCmiQXL4MDGKZD29DV4q177JgWT6gJyJFkSLbdutcLcGLrCU1MLX",
  "key13": "4TGF66DjRg82WmZduazBqYhdWubpFdXvgMefPngwvkJafxBizPHrazCXttS6bG4wpAt31UPxQzfHSe48TD1X4r3N",
  "key14": "9z9ffthagNFqBW5XRq7ScQhbwxT7keuwLpDS8Lrt3fmd6X43qYRndgL2oWzdmos44kVd5C7RtBJpgwp989pB5L4",
  "key15": "2XJz7uNKtJEgSAA1TvoUsuqKNiLSrRLAFzXKoaqQq9fog5de2YSYB8WvVPWca5Yt4SkBDZyc1NjY4k4hy27kjoK8",
  "key16": "Ewoin8mVd7fURw5bDvKYnrcPRiiUDsd39UbKcoA5P1iTVUi9fBBJvLPH5SQrZS2ZhpoxJn4fP1r8j5qDgTGJjQ2",
  "key17": "2twa1w9HK7skkc3TNUWPjyV1tidC8U7omAgtk4nbouBSs7zAoMnUr8p8pEcbnwtujA23ztyhCktV3MNkZEoxcCMq",
  "key18": "4xdHyv3nYh8JUZi755b7SNPRxzNWh6bvGfMi7LFdnJRtFeodFPY2YJWZnumFPJS96MQDDRVkijwSZRnazjGNV4mT",
  "key19": "25KxxjZBe8zkVxUTSZcggvm5AWeoXjDgyiUCetqBgGZxMWEeqKxR2w5wdiYqkWz2sxhZp9t5SqxC7bCuunTSqL1W",
  "key20": "3QCWpx1ffuD3SfMiqbBhcCAvRnSZRPHAyZth1Ps6KVQZMunfv7iKoKWMShN3zbEnSah2oxjxhxoR4DqQQU7pP64g",
  "key21": "2gMw61ePvAUMAH8z5sDnB28UJSaDAn32obMNYhxTrc3AGKdVZ2muHgJQYeD7fStpxXxqGJhkUKN3EcVLjeLTt6Cw",
  "key22": "41rJn6HTsWr5dx9KSuPKcwFhzBaZ7DNL2AXHgVnc5yRcPPp5Z1P9ATRaEW495Czzf9EnEx8NDksLpCL2MeFP12rp",
  "key23": "E8RxHcsaLVAJtuphhyFbqDYGPWY7hQBDPFxc3J3eTE4N5o849HM2UCedK6hb3rCeecmcmRDfFJBWn13HdQpSZod",
  "key24": "5mKFVJGDWzg33pTFnYLzuf8vpFzVZ7L8yH93WkF7ce1cy8f3xxPGuWGn72xbziMgM4ctzXZqWjDb5CW3Tde47wUW",
  "key25": "3epBiQdN5JMLoBXJgHVaSwqfpe8d49sn41GVqFdPVDdY6Ztt8MSBKajBPvUxcCBZh2ZDtTYYnsgBKMMCr3roNVBc",
  "key26": "3AWy6WD88mQ37sn2pnkjYtw8CV4wqibn1TBpA2DKY3VgyvLvHUgBaAPRq7aeXtiDNsFbXa3bs5hqXsr6TEEnhBT7",
  "key27": "2xZMb3m8s7zNRPDBZbSACBcX7Tf8yBkmP9Z8DSP5B3XAmfCgjWUMEVK9CMahq9vXVsEzShgz83gjv7yeCyR1CbSg",
  "key28": "3L34EX82fWCoyRrbMp2e7vuCbWfc4GhFKH6PV4jWeKoHTwii5LZzmFPnRiP3nYjWMbwSx3ZTdhndnFNesP43AGQS",
  "key29": "4hW9C1C99Sf2mt5bUe74Uum9UF5NCruvZUfMcj5jzBGUCAYX8aSKMessWc3GximfuRx62HngPfz2B7EB9z8L3Tsw",
  "key30": "4TtRCNzCwuHN3zoaFfCPSyyNp1R2wTAwDsHwHy29DsSWrLuR2uzGN9RKfWoWPqZZSk3ghTfTvLadeUv75wnECXC",
  "key31": "4Ni26MnK2vkmbjmqeXseJ6XRkXx31L4ibqWUUnPH66meFXFmHVQuezfussM6dydQ7aevoko2VDB5SDSi8L4joCLN",
  "key32": "28ormkn4uYE6e8N5cSpdQBPhDAZCt95nuDLdqZTo1YXFiyUkg2SzaBBcNRiNZbK57gfDALSCSyS68G5vsvUbEizR",
  "key33": "5H72PxHkfZhjL126Z9CPigvvdS17CpEvm94VbmbgsFd1WwRYjgga5Mov3hRMiwTRFqWzsLZWhcCTDaQovMuCBBcJ",
  "key34": "37h14AAWfdeL3mS9j5nfUy14vNBCqJNDWvQgVjGbXxP3dhx6mLaBKfGK3zkhqRe2FYKRvuUPeKVRn2AA4CjvXHQz",
  "key35": "4FejXKBpsxdWqdoP4A2691n1AgLY1gMxbfsTyQi49Ve4AR4iWRc47Y82nJJkZaSMC34TA5wZptnvMLPYf2SANuva",
  "key36": "32sEbKJpt2aAU6fQe9Paz2ao6SmDo4Ug3usDrYq5JVMGqHEyYDVVeqbypRLTUoSv8jBo5qeopPYgnn8Sz8WNRERX",
  "key37": "sQAGyEJ6T8rrrTWaB9wiSbexTeGmwMxDZjcaVGu8s8pYtQYfBppBsje1NmNC53BQ5pBx8DjAofPqZjSHhTgkACv"
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
