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
    "4BMqs3XUQcJqcDLwQemf3MqgLwHNqy9FuV2dFZoBmTYV6ks9FvcWkkNf5a7xPBvAQUr3tUkgCuG5QqKo9XooyxRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PZUdmzJJ7qYLQ4qGvWUJNH1rJbv69n6z81ufLYtpXUad3HXPRc2Nuj1xBDk58XZXAVhnDHFzAUEJGP1vDvQuz7N",
  "key1": "54evY6j4wHb3KThMAQvZYb4sacCci4S8kHYEMzJPyWi9ngjNRgF74bvWy56gphD8z6ptKa1ft9hVa2Dre5cxQtwt",
  "key2": "5fZAjKY5RNSRhfxcUrWr6T6vn6CUy9gxpuj1FuCqhgRaMfkjqaJ3dFG31Vorrq5GHtExsAJXaBvnoXdQ4G1BxhAx",
  "key3": "3uBEFkyiLm9XRGXmJZGmmzhYXhLP71co1S3k3pWdaKN7d98rgQqicWaFc1Wbc1p2KTrFQsjL7rPTSrsRdA4Y6Lgt",
  "key4": "5JdJFedyYrXK7KiZmWZKKSytMZGARhG2Mgs35ZPMPQQYVs7BBkn9P2J48oCFRfv6Rh6mNvL464Fj7VmAZYuGvgN4",
  "key5": "277gzZmk69iWHytkfwNyD3CzA2K9LVeG2af2uPPTrskXtWV6ggdbtRByj7txqXGeAeHDg3tL3UdfjyX7ue4ac93Y",
  "key6": "2Cfhczc3asiD8pZtnNjmFFzHGM6HEZ2mKK81BkAJUHyjHYzGNaM1V9ajWSn3KH1Rihzjip5NTQ9mpiBdvpBhaCQc",
  "key7": "FvuoKoZ92RN7Ld73puRPM6zWzfa5NcJnV3hnvroUmAXJ5oth2aQvn9aMnQ9nv8qqWbhg3cET3o3vR3cuQ9ayg24",
  "key8": "5wQ559azFM1AJSYPPM8tP8xg5MvTMPhRAtZkkH8TJyBEdD4vXcuqJ82kNn9g9EJKP85WFfK48UNDTMXSFQLXFYK7",
  "key9": "bp88nRE9ozDfmT6Htgxfxb83xxK1EWQs1h91NF3R1xSaFQNzFvGyGZAAg1U9J7fuRbNrCwvBFF8iSLvs4Wwm2MK",
  "key10": "5z3j8nRRahP4w1ADTHedWyTgSorz8NZ5vjVu715rsbFN74p3GRCBjo4qy2t7WVzrbJPFiBhUpnKfhs77SmSrJXh4",
  "key11": "37rPM4vVZMocWSi5bMENdKUmoRt3z76qBitFJYRmE1FaaVs12V2qa91y7RP3TsgnitEeahSZXf6oFrmgNMHQbxEs",
  "key12": "3ZtBSaXcngPQXovwuDBdZpft4FaHYL8NLJbp9jxrTCGdWm9NyZne3JiiviABGTLzmm18pQvfNWog1WFf2YqrBfPs",
  "key13": "3TWtp1E4sYQ281aqA3gZF5288QTHW9msqxYqPkdT2pVCU7vaf4FrquSpfD7Gpch6KiXFD7vKu9A7tC9MvTnof29P",
  "key14": "4bh6WgQj8BgwRG7AU3hZjYq7UKBxtHopntuQP6o3rbcLfKhmFP1wHuuW8bTjrBHyELEKNzkkfV3kLsY3gYEwUoxc",
  "key15": "3hfvv72KaFpv165AmxYTSkMhRbPwotWuZyyjkdYJJUNipHannPHvWTVRXZMhgKSPEc1hREdMK3arAr8Ekbg5G3EP",
  "key16": "2EDMrBWf5BVoRJuRKnpgjQbjdTUsZbGz1ncRz1i8xxJczWosHeoLciMWcExKCN7iWNkd7McxMDEX7YAAsj7QB1J6",
  "key17": "4MWQgr2yZpLmSVAoREeq3tubqTjygG6PAfGijD5jNifUuUqJzkn5QBC7a9oXLhYtULbeVtDv6yrFoGu9BMSFUkxN",
  "key18": "3FYFjJUYNznwtAgKvwsBQMYZ89m9RaeeSYxPDzYBhnYDFn1o8CcVtwXwizKCC15Atire2mvFPUbiwAtz3E7g1w9e",
  "key19": "27ZVjbQziiRuxAcX6yrq5xf4dvwvtmyiQyggTcy4Pc4vEF7n6nvmZp2TDwJLN5zVJ5XYznFuNNBYNy8aiHQn7WWB",
  "key20": "24HFJSZfEbi75vag4EsrRxynz5G7Zg2D6EgqgAgXiEqDRVmjrrWB95veFknezc4LeZfSa3vctYEYWUn4BiGivESA",
  "key21": "5cTgQJcknBzDK34g2TLkezqvrBCPLKmgKZhuC5zUvMyubjBaBbsTKHs514gQZpePFy73w2fLQFbEWDFfBd8VzUUL",
  "key22": "2qvcpbbnye6zVuViMKfSt2o8nEXZMKfBhd8kc12KzYRLq9zqXsgUpf2BgeZ5gizQtEZq6mWFix6J34UmeBEAY4rY",
  "key23": "EHXH7yWyh6P8WEncTzwJhpT9yHDxYti8CejmbxGZAbvH9xQ8siuBPdyaSsUphWAoosThp4NcmG9wYy6QGVJDvAM",
  "key24": "2RRgM71yEhLZHdoSkkzrtgSkcMiMwUc5cmSNRZQw3H8R7opkRWXr5VXECNm4ZhuoURrZ55WLG9pb7vt52vvACtXw",
  "key25": "4FjG8E2EhVpPvMmLRFALw1GeZmBGiNDC4sLk9jXzWQrxvrT37yEhzGoCzmAt2nSTHvriyLJqnwRvjdiWCP6QTSWU",
  "key26": "qFFPRSzyr67YJNr5XHGHsZsCeTnN9sjfMnWhRBAuvKRnAHKUW3Nrhi73RfeGmw8vr9B8JoCBZK2gt9src67T3Dp",
  "key27": "4hF7DdecfMwuJfgQfxTfgGNVrgAdbvtwMPPYCUQ82nw49qBo7PzE41Dsdd95x83V71WAYwQcmHs9kqJh5wHzBSqs",
  "key28": "4rZRuNLrS8uzZDE5PeqMMfyp8vdrCBwYz8aUkL1713Byh4J9xe4UFTm3aj1yiDKfDjWor2M1m691i5gQHX4FNXMc",
  "key29": "h4iu1E9zy3QHefVSJFW5EA9qoEEPDovEfHTtYQeu1CujeSiEjzEiZasqswDYAhZTrftiRRSSxaMpMfJT1Ygnxg3",
  "key30": "2tyc4oCcy3bSdDFLYY55atuKU5HPJUDcT7kEYEsEXvCKVP89ao3qP1NXBV6foDYKsTPxF7vjCg5Aw2Yo3taaoGCU",
  "key31": "GzcJoXWuJsupC6yS6kkBsJHWFu6JSeNdonc5WKSeptHumET1kEpWovMNdyu9QX4xZyjzxNYA9Ave5QpyVqeJcqL",
  "key32": "3okzG7DMESUfTjhhWFmrP4vvCaDL33XcNUvS9cgzU3xLJXyHZrKHbyvSeG7hEBCKrXQqpSAXu28UfUHv9xfHk6yU",
  "key33": "5KmtVbebAXAN6xRqhWgQm21eKgVBwfSYv8PMyvnMacdSrqLKy2tQBsAeW8w8uFFt8v3Ny4mSVSzC78zYo6St9LRS",
  "key34": "5humF5psniqTy1sPvprCuUyTGUmtipSujqNubjA82qkZhs587u5H4AVR4xamiShzLqHKDpciXLVKyoEcj58xMzWj",
  "key35": "5dwovSAwx2s79J977PuWedMvxoQChvje4KChhhijHjy8sDsj4aYHdxFK8LfvnLSHiB42z3PdhBzeZoXg4txz3d7v",
  "key36": "4AWeDFnAnQVWcy1k1bGwssbL588j7eqvqCDmDYqmDbNqycSre5woDKFbogGqSNLFD355Fki5FKpiqWcte4bdkZDn",
  "key37": "2GMDpqHAdJJ6jYTJk1RAnrstttNzCQsMjkjcd4WVEXfYQp6RmWaFSD1bmhwwMZeif2AgNqNUPZWcfVBh5P2jRAct",
  "key38": "2etPVZnzRLubp5MAUp4vWwDRATDBzKcZkPPt4w8rVtLTMeYzwmZ4jKb4yAC1qYhHq5XkeUbMvwvQHYza3A2zLPRy",
  "key39": "qHgVagKT4icuGfC3keXXvyAvj7GxbeDxBsxTEpcNRoJSM5MhGRLUA58mLsw7h3cdA5EV67CUBbM9iLygyR9y7ra",
  "key40": "664e5N2wMHXExEWurpR3EWPw5yuf8KTKhrvx2CgM4fqE23iWpEPxnhHXaehZW69Pmf9caR39sE33n3n99C91Yk5P",
  "key41": "2CJ5UbycgsjArxAv5J8bcnboq1kPZ52jYVvDzZeiFD4NyWTHUjwECvXfGbXcaNMy2jY3SJotRKVSGYdKBoNUez2S",
  "key42": "3mxUwfrCXS34kBfe5axTZRtdke88xwdJRBcmKXCKV5vENJHWNbogoKwbx4xhNqswpUFEYkBxn6HPyxqSAfF4X41B",
  "key43": "NQTJJetcP5YaDKLaR1bZm18D5aB11pSRKvzJyUn3iQqUeeDw2KdQ2sm9a1oaKmk98LMoDZjaGjdFnvBJgjH1etB"
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
