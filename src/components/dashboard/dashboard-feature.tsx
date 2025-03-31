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
    "4jffnG2iPFK9TEKJHrJfDFajvSA9i7tyMehY3ZhKkXiQrCNi7gTw1fdFCCWLCP1U9F2qERFsu743FEnmkX1yw5T8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GBs7JCwXGmYE69iZjr7zmkJ7L55wV8uTWs2CXQCSXj56aqvbsLJwkhw5AzL2sAPC9pXDqYKmUoFCeSeupuD9RPi",
  "key1": "44ZjB8q2Ypyr2mkqT87hro7m2dss7DDBMbWS3pqymRuTV3NnC8cHsih1sSVKnEan4ALfiYZrJbeeiqyzyhByGUgb",
  "key2": "cn7FCziLPJ2kBQbbwFSDJmmZzYNFqDFw8wXnGt7NPrKYxwBFjutZk1Jzwq1QH8osgsUyVmkWPstTxYRDXriye4Y",
  "key3": "hwK6hrkvVBiFHMU82gWVYKQQahgKfVwF6u13hadACQPTH5ZhkBPLCfdW6iDnLdmyQAagpitWyUK2EvWPFwFzRL6",
  "key4": "2ggrwKuAezygDw6vdc43fsqvs31U1Hj8Vffiv5civEapVizWCkow4KPeqsqVWtf3sUfzsbRmexu3fDqXnsCyVq3v",
  "key5": "2ah9BZREMxUJrY7KJWFQiLPywiW6qQ4c35PUzgCdwaiDUpTm7T6dfzpBad2KoqyQkyK77EBmARDFXRwQ59Pvf6V9",
  "key6": "5pkbHun1Nt8z1ACxhE41NTjFVc5NNA3EP33qsrUyt5rygTewZoLCnu68RtjSF1gkXohWpPNAQ2BTc3ENLiFSvGbG",
  "key7": "3cXyu4F8maDqvmtMAy82uehxY3PCPZFXxPwPHFMyw2x5ZEbfSQcFxhTMmy5hGXPpr2cFQhoMapRuejiwPB4NX79b",
  "key8": "5PLh3N7kuCGHannAxVSH6x6bc9jDUUUYHjweokYdAz4dDqwSywkE1b8zFDZfMycA2eduN1172hdgbL5q6GT58QcH",
  "key9": "3d1kHDm8g5Y2hRTR5MGaaLMThA74VRCcECEXfp3B55e648MYDCXyGvQfyUdVs2B5gjbxYKT4Ld4x6dNLmmjP8zSr",
  "key10": "99NemE18hHaHRS3kZvhu5AGNeQjP9YTDBfrDenwauTwYXZ5ouVpdDPtKVt6cYSLsdCuRJZYpopfKP2dX2tfGwAb",
  "key11": "3YZrnBTdrgjhbbPXH6bT9QeMyZTNjKfkWhZaCM4EaNQEoB4Q5d6QXVPrhX6FKMGZ6nKFL3KprTyYZijyuzVHYiE7",
  "key12": "5ygAWbKje99wnoVjVe3uhLGpmF4ijzDCi1fTi1naFh8nUiLhUCEksBMUGThdjU2Lk5p2gpPLa6dja1cUD3K4eMHZ",
  "key13": "5GrdKJhiixkdkBVD697kggov7BVmzG7jPP4kDAUK6La6vuk1AmPT5QQwPbcjKsCBuQaf59h4pg2xgMapCLWDsisZ",
  "key14": "5AD9tag8KLWyQDAnYBYHKS2ssh1wDtvFGkxaiswU4JiJ4FHi8fRZaCJyeitjAyiF1o1NptiHaPsYnsVxdsdzsMS7",
  "key15": "2VfjEfsxkSFXZMdv1qeUWPkT3ZcfiiEnZHA6siwHB1gUKXo2tyd5bEzU7JRT3j4DLGpJui1roouTwZz28qHiDj8N",
  "key16": "3Kzpa29YytPhFH33mSVoyxsZi4xMJUUJA6uk7icf5Z4g6iwd9gLbHokSDyZq832U3jqfAoPuvigv1h63dhwF64tR",
  "key17": "4WWcxbDHVPkq9ERRRaeZ3Pt3edaMDndBUDR6135jobAE7Usjb5hgDdRFc59CsdKwCCWjBy7pMMw2ifQyzCKQoA7d",
  "key18": "3b6JquVGzoQyvxgVTFAhhLQfe823W7ETtHsCVo8gMv8vTV8CqM4q8zMGfQM1gY6HK32mfNwMbz355D5VeLLwXdhE",
  "key19": "5mPMybUDfAugY5TySrn21LFmwk6YvZFyzVmJoGTd1J8bAVVVhjPTCRYbkUxNM2FDTCVnLaLsXg5HrTVfi1vdCanD",
  "key20": "569t2StwChcGMTw2ip78wowDgpP6eCVazHip9SEDu4JkCBWrHQAvV3LJq619inRpV9RoLadyhfbi9fGzXY4P5rvt",
  "key21": "23dG7V8yzT1zU3uiAA9inFrExmTeswUntXiY2Qnyv163ZRZ6p94xht1DFSMwmwGvKg6Y5arXV9nJ4cy1wzkeLiNP",
  "key22": "2B13yf6pzNe4DsdZ22aBzy2teKJhD4L4EqhC2usjhXDBbW6vhMFPzYXbyxTWRPGggznarYA73XcSXqGucApSyT7Z",
  "key23": "47tDkKgrWoexnBD9hacdgZr2cMth6xSprxDASBYxt3dEqFf1AWeTP9PPj5cYhsZQFcaf9SbJXRBTKXijqtsw1Nfe",
  "key24": "2fWqWdofiV2vq3CEhvgtDcCpE7vdTiLZznAS81V3pZ15oViJBwETBvuMsfqActVUULujBicv76zQjFGqawp9YCN6",
  "key25": "4aM2DxneRFifuz34XhtznUunoGSb4SVF7z4H6csSKcCwfGu17CirGTmLXbzq8BdgE8S1Kr3oB5tXAgg4t84CPvkJ",
  "key26": "3FURA2vgkxnUuCryn2RbX1Y3WVyqGxpnt53MuGiUFDoMZgARgL6vCLZXD24ruiBcnPGnvzwiYwgZpHBtVvaPMmfm",
  "key27": "2AJvdWBWwjM3kLndaQWuN9BAm5KwpygQ4aWpmxe22Ydo3nLRQ2BA3k7HpLjXhM7mG23HFitoLd91fzEBRDM76q6C",
  "key28": "4iUxMr4UfMC7UL3UW418TKJYZYGQKoZi9bEhEbBwzDVr55RpwBUiN6ZrXr4sLaJuGhrobVD1TtzR18NWvksbWByY",
  "key29": "5pvuLFzRDsLCeCD4dB1LuGbiSejvhuxiZcjXoHiGNYbxQQ6WMzUTbPeiW7FjBtXG9Jy2rgEEZrkwwsLkhpQFDBDV",
  "key30": "3w8Yc9DonVmVERN7kAMrg4d51vi4FYmCBoTNiBW5DAp2iQ4evXcZh5aMVDaxXW4EYqNf4EGwtuo2wdqXRx4GPZAy",
  "key31": "2LfhtVgpV6uQQq133zHCtJGGY5qMsTwtimqwJDjTEJFC6yAA1XhpyTSJRRgUeEkawU4JjgVxffNL19mYexPTy9Jd",
  "key32": "B9qRj6H8auTZfnrkkxqGr6TQLnzoz7MZprMYbD4sDnLXhanudS5EJWCAmn4zsQH387eismVXNs4s4CdttBZRcSQ",
  "key33": "4tKxfhShxREJcE3YR5c7MUQBYV6LYk29MYFigWhos34TjSKgbr29c5EBQGtzhcrGDAizzWAa1uYSWPXJu28YgJSz",
  "key34": "3gbofaHiMfk3JZf13P6XhzWTE2LRW1AANxQoSuSkYoVS15AaPRuFfYtKysmLrdMH7SCAZ7tFzEZ59LrmHs4GW1u6",
  "key35": "3H5cmrVSa1BKCyNQnnMycGTVWaUW69vVjKYW4uoxgEPAugx6RLdY5Y6awomT5xkwQxHCsXJFvKryNRqbKxNhsGYJ",
  "key36": "5XVhjoTbMsbv52LMYMpqn9f2VYN2qoQ9xb7Dimv9XVYwvhrvvcQjWJ55pz6gd9QcCeLeE9huwGeqjRwovQjTfMZ5",
  "key37": "4oDVPHQ9raSzfz4sik38T8o6uws5pBS7crDqwZ2AqyzVhNdm3uFekW67YCN78pDMaJe57WP9YDc4nyn9PXoFMzow",
  "key38": "3HkixYZSTFbzrK4vS38qETWC5woFU5tN2XC2SKx8LMkYoJYCnh2fi2h9a7tABs4qfvFZYX18yKoc2P9b1WoFnsJ9",
  "key39": "5mGHnnkaUiqdPbuYH2UQhZ5N1J2S9Vxd83esLfWfjxSrCcYpuNPyJBssgZkYjiLpue7Q5iCLoRcPoNrfR19v2Ne1",
  "key40": "czr1rGCCTqzczbtV6Egiy8MRqern83ekjDLBnQ8umBDhhrL6j4x3SqbrptWnXGMN2X6w2ReGg6ed6mrMYZr6eHd",
  "key41": "XFFfJD8q5f2UW49mJxNLYYVxtA4Hr7RmqnqDXmb5zZTUYrTw9x2LHsKyqJK5ATr9RPU7DmdVW4f8YUUBVZdVFCB",
  "key42": "3KaY2Qc48YcVdFQSEvZZDDEkN7vFYkeGZPvZyERhQLtxhAFyH9simD7pzH5ciVPkvUgrAKkcSChCsoctBuako28P",
  "key43": "3oj3dwxCgUpUMXWEqKad2XXtJDkfLkhBTnhZiqkYpUC7JMsWsK4KAKumJoZruWTJ9x8tPxwxcGz9PPtuXnphTuVM",
  "key44": "3vygD1ZsWZGeefg9Q1mxa7jVaGP67MBqt4qnvqaFSN7ejUsPQd9LVEma2fhciNJ3QNpsicRy8bpEE6U1c4daPciB",
  "key45": "3tPsdrXqjx42ppawU3wW3D3S7hZt4XPusYdrkidbDvmYmnqUZfjkgb9YHuw1Z38y2USaV8ieki2qYqcYLNCL2KEX",
  "key46": "4PzrUMCTNCGcG1JUL7zf7jH8tFj7ypYuydjNseYwtC4CfbAmMopAnmE4EWqJAtoc3QbugRRe6G3PhV5DDvkPE8ku"
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
