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
    "5k6aPWRsKarDV3uxYaYKwbWcDWqfLSRXjBBGLeAgZo6ZJWA6YZDfTceM2ZdT8UPUGfd5pyPjybAVL7TJUPDc8DAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BunGg5pBW2cpZ6Vug3BVrvd4tv9NPWTdN8DspBhsFoznKX1HTazLSn73VHBA1vj5kRDTdfCnADqmTYBq4oBUbbt",
  "key1": "CXvRty9BRAc3FTCGg2goa1axggbSMNp3AcG69dHh49HdJTykkSfRXiegjUqGJ9KRsRr9UR9t6jkAec9G6NyA84k",
  "key2": "4938ZFnRryqM97i2DeqbmhLY1svFeKX1ZMr2VFQYvdBpkdVd2Yqrt7KiJZ2zWc6XHEPXWpsVRv1AeSW6M4yMmY8y",
  "key3": "g4YYHJnChRJiL3TicBZWku8WoJtUymwvnDAVZE4uo3BonpFeNnLh6MM9HUy8sdms3MM4whNbeUHE9Kdu4jcREqJ",
  "key4": "52VyZLP4Gs92kCfpjkRa7o4wFNyVCKGVrizHvkKsA7vwP9epm1vQKKpNrfs7vxj4n5nRCAgjfhP57QGFxFdLHe9v",
  "key5": "2po3ze1kpx4K7q81U9hDp9xf29Wc2tZ2ShBSp6kWriZkHBVjm5vQRfLgpccn87Q2dPSUEEJT7qu35k1JLm5LbdS6",
  "key6": "5D95e7rhu3Aj9tucgg9daNUEHBPVPv1ok8hxZnXNmsyftiA7FsYh1v7pqKKs31XhEbFXKBooHWp6CeY626pYVLA4",
  "key7": "5UT6xkJmoxg5eDHgA3EX7L1JFW9yaaahd5Rp7PKQQqCMxXdkHw96VB1auBEDzQ3hPrbwEqk7LGtMgiSqRZEy2fEj",
  "key8": "2YYBYvDziyu14d9nXvELAzVjsLpqhmFs4vZ9UZbVmf5iW1WfPRDHZvTXH26e4sBY48MvUCu3PfU7EKGcm5Ydm7uQ",
  "key9": "5i6FY8E77qN35DeVnup6ZZW5ULtPBE2i6khjB1ihccuoQEyTbiALteaCmdYHcrf96VdqtKPGjTE3uhWQRa8jFSch",
  "key10": "occsG7n4zTcubZ3hL4BpN2AEgNa4HL8ShAyvQmYTn5zaWzkdrDpQ6ZeXVAmwQH5h7S7jbTu5mz6rwgfAK6PoHyZ",
  "key11": "A5Y66pDk7jRDGFo1YbBCK4uLD8m93TwZ1d9sMwjJcv4hya1FhdvZuQ8BYyghd8F8UyVUnZrqxohEDVWFCK9waUP",
  "key12": "4rp3Sf1sibM7U2iDNTSyTDRfWRYmD1FkFuVmf7Yq6Dr1VpM85ZtWTfPBfUNTytFniKayStZH9XSVsUgvtiiSjQQp",
  "key13": "4GGMx6P1iNhMZodWKy1ME8UPknxp9PPxfsmXKLDkymTTtKNSsBH1bo5ME5XNtHBbn2Xk9dpzzmxRiT4dtmHX9o19",
  "key14": "RBzH2qqWecSQe1Fif4FJ6VPGmT12m9g5LdcAW5uRyNhgAPDQq3W9EBPutqV5XFUQxsfLEaPE1BrDDdoBfXYxPJj",
  "key15": "41Fwporn2UC26htsGww9fK7gN1wTisAyDyY2wTYexKVpE9WLKXZY7Hd6tEUfC3URP5Tash3WqaPkj8avmPo44uiP",
  "key16": "wq6MUGRFAyfmidau9zuDCJGBfbr5qkFpdQ2WaCkg4AM1EGVfP8H4EXmJ1Ngz7sYYkkQN1H1aXpbKx7uRzB1xbHa",
  "key17": "2LSecXitteup3kx66h6oPXpaeKs74zkXpyTVWkYfRmGybtRQVqhpghCcXd62kRh37ZcQ4njVHK7zmNUfb5UViL4Q",
  "key18": "QuqMwK6JnaGPBQPCRs2Gzm9UbYPoAupeaYnm2wDx7WFUEbxpzuDA124a1xYT7DaXW7GVcE28V4xTL2Hehk41bsw",
  "key19": "5Rf1MUgQ7pppF24uUT6eqMvLRoeNGMode163itZB5cQcZKxPRWnZ7cpzXMZAs4KCS48XDzs7iw6KFDYUfXFJ6LRo",
  "key20": "2mVxKbrKw2YhC5m1hLhW1kggonwmKMFCdwQkC2HrhLhqixwR9At59TZHZ5gGoVuDD1mTGjnHdKsH7nseZmK1kNG4",
  "key21": "5HjRmXZoUiAyZVWA2ShVy1JQhWkMbLaj8rGM8riicmSSgCvuPTht93uSmzay1WoxQ8NnKEqxpk7np2xtbx4sf3zQ",
  "key22": "3Nv52ucarzQJpZH9jUK7p2LSbrFTZQZJBZjWbBZ4WuBDCwRtmJByosH448NPTshPV7L6aFJELPrJZWNgKPMtnPSf",
  "key23": "DLzf5DdseuRiirfPrE3b2Am2n4PS7QyaJaQKJNkj4ooQn8LQ6DJE1aN1oifzEQaABukWL6cgScoQytD4e7ArRxt",
  "key24": "9VtTfB4NoN9a35UGozQqhxT1xpaN9Sk1JA1XC3Qy6yqByz1jkKJaUJMkCmzz4xDzzv9BTFhYSGbDHQARzd1eG8H",
  "key25": "57iGLYdeiBUnbghCmryb4aGdDYjEzjndvxjFQ8TPnxcn6VrnNwArEvszXeQtR4nbGinp19mFZqQ6NBwamhMeDgge",
  "key26": "5SpLFDJzfaxGdmrerYQpJXgQ5XzFTegfKHicb54bqiP2CySoauKMGPWS49f18SmcozkwFwg7sCpit92RSB4uNSXs",
  "key27": "4NRi68tmEnpH2WcWKdQoPwK3p1QqTUVbZ9Yg5QccRgaoWTfW3d4jQHZX8Y2Xr5DvM7tSMBwJ5iLj37c4KGM66KpD",
  "key28": "2NhWMX2Z1MT6NPxDVpGDqzPPzS6Wnx7ms7pfbt1h7MVwP8QwcTm8uEgfuiXJbBMzTnuh5Lt5L1Df8v2jKfnmGZCN",
  "key29": "2FkLmKg7VPoDYiza4PL4UVrL1zuabFf4yA7ASDvEU563g7FJREDKiPUuhqKXDX4gYWrGzyEtHbPhNFSMRFQfogHP",
  "key30": "prq2FiTiP3wrbuPafrEDZEo2MyS6HqGPwk7CVDiHth6rs35MHeWpXEXQGWXU8gvM6CQELwbiCGVgsWKfpqGKQkn",
  "key31": "65wziNyiiUyUsedAdxTWKTBpBW6P6RdMiuy25QRAHscw3JFELtZSoCWjQnKXJpZfXJP7zmEM1XRidiadhHZpBFCy",
  "key32": "3Gf3Z6v45HwvxNPuJJg84ZYxJzqjWxfE9xFyLDs2U3TSdXznenaPrvdZpMppvGe4V5fwcSriMbCHVkpMRPRJkfjb",
  "key33": "47uVAP8Rxibq2fg6B6GVQzDyBZ87Bq7q4ZtYumQFc7VJJsycqzTBKND115Gr49Edp2geJCapctS2fvZ8Kw8gLmpw",
  "key34": "RAi9puRUV6eShCTaZ63VYaUQ2hE3ZEnAGwL8JQCjaKbc4gGxJzxm7tPoAEAh1MscNoPgryDdB6DXcP8PnTAxQPm",
  "key35": "5ck9chjec3XMGFGMgfkUPdSiNjgStvt9eamFwjfB3qF9tTW3aN4xEb2UaA98rMjfCZoVrPqeMUUPixbwUmqZyUBf",
  "key36": "kDHJz3fU865nqtBi1oKB9eAEaqfijgSVD596VT4U4PQLVbHgbQuPPPhSeMGRRFgJsPNHSjBEtYTWu5acxryMQdr",
  "key37": "3AP92aPVSrXQjFF2jg8bFWW5xNur7bnL1F6yRgp7yyxphEpADj2XoEdvY9SoGDdP5wTCuz9JuxvmsBkaPwiNwZ7A"
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
