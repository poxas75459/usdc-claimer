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
    "617gabXLRbCnEb9Eve4XLTr1bmBiBmzRHpzrZ2xXRg3Q8W7c8ekEsvXNdVGXiwSudW9MEXS9JS52UuKA81zKKy1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q3xuyNgdTpCm654uxWt7QJBAPefNv5c5BtfuvYGdKPjsWkcRrCyyeo4sB41uDHXsC2N4KsfzdqfECXxUze297Mh",
  "key1": "5cugYhJLo6o7cvEtycVHaKbh6dutefWTvgkMfgbH5KXU1heifg797bpoKqRjhSC74vmnqXD738BoDamRAE42harj",
  "key2": "5X7xxFkqsE8mMdXUM8xED8gz88L1V2KNyGibakwEpnFTxHzDv9sVU1pWg94WFzsjrbrEFAtbSvSwkh795oy3RvrT",
  "key3": "66QgkrqYzb4N14pcZy32fPiPs2swBsNBxqArpyXnQTNjTUCwHzkeFU7HLfP6FnCXpN213KtJuHtKuEdtEB9cwBTL",
  "key4": "MZbykbwkvjSCBN11sXxCWe65WaZkQj92tj6mb2kM3XSMKyAbguh1MPN7eULBojBonW4H3aAu1UHZeuBTp1vTye9",
  "key5": "3cefuiFDEVyQJNutuQVr8LkA45ChPQiNDwqGfBMMQHnQC48PkrW3VSfWCTY4Um3azKan7uWcUEFUJvgvF75kDtTM",
  "key6": "tKKs68LVPS5CdhX2F7Agmvtvi5EuFDKdNwgiKyRGXp3bS3y79F2PktnKYHmcUfqqQiYY7KxDUVD7Y7U8veCZs1K",
  "key7": "3eUfdVxFvk4abMg9biM4dXJ9MAwaeqwUL7MgWX2yQtBiH3ZUMsWJLzy5tg42FWbCn85AbvttUnSYvK1AJZUoDjEa",
  "key8": "4JhVDDnieAVuirvbTySqBpYxJrMwb1u9PoiSX2H7sGtqXv3KKUgPuQUaxgro23755npUjRgangETc4vYaJKpf12g",
  "key9": "2wJBnSWwGcUxBh3fjZzcYYc6dBxfy6PbJoKKEY7s9SZ9VSHMjrNXDJ4xG7M7TWLL3sCKjLdfd5tFWwDX5Xc7zC6Z",
  "key10": "2ejuMEQeaayZ2KvnunsMDRsvfmMGuke28M3TZtFgPHZiwyRo6stmPcxGC5fVVNf5Xjffw9wcVj3UzS7v3sDBqx5d",
  "key11": "3QhAaZbJak6jgwSBQSvRud34nKVE9JefmqjmzG4U6JPSWCh6TeRNTQJ2aGYi7X1mgLY2coTy217Qt6k7cgJuiPrx",
  "key12": "3ps3dv327mhqNRF2SCesjy6MrzYahgV9HKzmXqLuPsYDTK6p5ixKLfnGDQy5RRGGCY2Yfu4TWrEGvKigNaYbZ9p2",
  "key13": "28ufuq3nPZTKA9W51fuCNJaG1CCdgGvkRqTDwUQ6tJyhuBKgHP7CEZZSVXrdYjWxvpQHM9vgfPF1UdbUG7UmgpW8",
  "key14": "5TLKpfJASN9tPcwKGgnzb1zGeJENSRcv3pPeXr22KhEJkj5zrUfLZ2tJPJTFkt4KEfS9yxukfWhditZ9JitpJNbi",
  "key15": "rNwmJaGaBVdC6LsQ3bKAuLvCDaAaLLYJNp2KZuaBqs6BDhWkfcCdMtNuSHDncMLsAPbhDfUGBv1XPCh3q8Qa367",
  "key16": "janMviCPkjKJhNuy9z7t2q7PoRKZad4BPK24h3iU3r8fsoDDrZRY2qEynVKYrGjotbME4GE7bG3a6Ut5YS26eeC",
  "key17": "SkXRJhdXxx7YmpWe3TEGcFxsiZVL5KoRHy34iZr5bfsEUiejSS4qurVEXXFpDNUcu8e6AX2w8KjhVrx5XkNQJig",
  "key18": "5eyUeJrQ2mKQ95BzqoynWzzNSsCVTe8dqPLpYZS3VUEQ1gh5MtpepCNxj7atUk8dK7VkoJCwn2u6GbKghKk61Tn1",
  "key19": "2mpKKXU5XwfCxne9oFGUC4VfPpbKRXg44qZrLZxVPQ7wmgbCXxw49mSqfaCgBdJEeGVR71WmvvrASLXDGxka9QoN",
  "key20": "63YFrhMgsCax9N8vHtLS9BgyTXEWasGsdvRG3cCDdMPy7CQmNGfmXdEbbE33zoBa8vdRoz77zHRvSqELxJCXjMFB",
  "key21": "5FpDx6ER6G7FjYsVHu6sxhXAnnX2K4jWyMjehxMexpEsiKpPKtJo3J7z6MccYXkUU6mn6nHkMoC9PgYUGcL1JRg2",
  "key22": "4YSrDcEr3ZKzYboo6dxy77Zx83BgtA1Xt8sBMkwa9ipbracktXuTHkoA71J41Z7iBXAtBD3ewzdmCc9d2Yd3pwLr",
  "key23": "6kbtnBnjWGVwLdzHrmu4fbW3rkmcv9mARGMfLCuT1hVo85TiTMAq6ZcvRPa6igxTNi23XpLrKQxiDrTEoe9utud",
  "key24": "24XRhRmXqhv5jByZDGDHoEc98zPDg8TZtvDVx97drxSmd92YBDowKnXaoA8dGQkZswDBSriR2DFrhK8nkR8NKhb1",
  "key25": "2thbYXLJE1Cy8B71RcUQPFBUye33DQCPz9MFgs1AHFHqGiVezPUKKw9N8uNj3JsSZVtKcZDymNWhQacrTPfqHnin",
  "key26": "rvFPsTSDHtGkWRSnBG4Em5p6GbPutoFPwsv2b3pvqkGpodhjcYo2i6FURp1NGtqkxXxCxJp7sUb21nMHpwgKf5i",
  "key27": "4fSvbJVkwn2Q7sF2qSoXa39npCGmbTEN1MbSKnPYCa5AtQxZWV1kb78RoQyK4T9JfL1FDaUwFouhywFyp4vnd493",
  "key28": "2hocSkRshV4DYJYUhfMPfAtTtdm9uVJvkRimiF4rgXVQ75UXV7pAusTuM2SBYYiV2rKB7JtNiVdtYJZraQwVgVrX",
  "key29": "4qY2NesNCK1nUTwWU4gVRCiTZsnZEVeuitmqg7Gi5eVYqr1Q5PgGo8GbfS2wkctd17Uw6PhfShSB2hbtZXneugev",
  "key30": "5dfQsBfxcUekFyJmLkMvV5RPtioXXcPzjRFoM5vmhWePTpVQPZzzWXq5ysjcHRXN2NMDVHS2Y6j4JosF5QtHEpUn",
  "key31": "3PgY1p6pPNjYJ8efyRNQmNm9tmi38NnBbHyV9AVmV2tj87bLH8eowJpL9CQ4v5Tt9fUqScVv6vwvJpeMgsPYbZ4e",
  "key32": "2hXbotMmjcWguuDWDDXsZmVu6q5YUWhG8sYVLEq4JcgEXB7LdWXzBRJACr5igvADUwXNXDGfZSDibqWXnEnWDSCq",
  "key33": "jinTBWHNUprFLdrq5LGKtv5BVBfVW6VCtvbPAM7sPeJkrjwmiregnb73apySw3ZXRSUwzC7ctxJC3o9hCiZL9s3",
  "key34": "22SXEeWFxxehHSpcHYg4racLjUt38vxK4P2B85Z6A3C1BxfBKjWwSsa7NWsJKBUkZ5Hwa2gpdZGv1BNR4NhBE854",
  "key35": "669k2vYGNU8f63ewtRhPTXbXEE55Jkyym4JGGLFprQxcaMmX8EBCZJPY12yDQPVBWzyKJLASb3qCmeRhCGDDiqtm",
  "key36": "4abphBGq8pdEPP97gpM38BvCLeGq1SBxws9qgTrzf7HDmvQzBPvzLXeuTZyCKrUfjSjN3d4Kip73bEPQ6zxeiY9o",
  "key37": "34wGPGLw3drBLLeB5sN3LkTqNS5W9UvFE3hP4UAG1Z8jciNafuSdceNWcjGzyiB3YHqTJu9ZCCNxmJsVh2rvfA8R",
  "key38": "25HD6rEEwsWKXHFDjjvzgfNYmEiATYXW3yZ1ef7periBEjsUzza1A58e2gdqPycJeJbanEjHZcJ4FHJKZVB4TpMD",
  "key39": "3awpyf83zKvzWwM1Z5LRiHtdh1t8YqDv9m8DYbrQH2ttNTUcScsSayr8JVgcE52bXh1Dz7QYg39B8Q7hLr45DUZp",
  "key40": "5VapvrsJiFyh7gkr6zX4JVc8ANtsS1oDDmhjFFAp7oUmCvzh1H94RDTxGghjkhfTvFFCHxXxTq8WENpcJvwsTQDr",
  "key41": "3yPwbSVGhZ52mCsdrZoQNXXb62zyzrsk93gqCo1aRZF4fBiQSXJoYBjY8T6ZQiBrp8Ctuvaxe28PZ9DkeT5QG5op",
  "key42": "5YcUdJyctkNtbn2WLSErsMsSjXGy2HMuJaQf1EHRTUHtG2BRzjxAtPu3aQqWyhgV8GjJZRE3X15AAnXijezyttN5",
  "key43": "2VGz88aBLcXg9SpXDQpR6MSRs6faLELiUreKxW3wZpkKE4p8Q1dELhPX113TMebGbdTFh1o8oeCZe9GMPuyQ69eQ",
  "key44": "5Ds912hYviswVxZscJZWL8eAEp9DyKAJatQVnnDB4e51683dNmJe3aN7ZA7y6o7uJ7bwgap6a6iKnDFct44U8437",
  "key45": "59J36X2Ep57wH3U3tMtkuq3bedVnv4FjYKTWMvPX2tcdjvBmdFdJPx7sqm5dXBSuYuJt5JjXEhfN9jE8jgVMFH92",
  "key46": "2h3CB1iWDbQdzEa3Rc82FSttVxGqBsib6hkMFZEcHoZEtu1NWkFa4iZJTcnPUeVHGbBiWzyLLd8wqGRvSme8reVL",
  "key47": "55kHaUUGus6s1td6e8476rZE6rZUr7dFiuWjQWjTNYBaLLBnYetWqXQ3kjvu26F7EKqHFymQNLECgD4rgueeqg2T"
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
