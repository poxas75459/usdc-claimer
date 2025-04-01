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
    "3txEDMQxWjrmT7rzrhxBLVdue14YrgvABiBfd9zM5dQmTtajm4k9HHbuijVUWfVGHj3AZ3n7LQW7nAmaJQmiHjy4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hw42P52f16z7LDGyaFozqpoNM4JaB1FHBdYDF3XYUUibCyguJ2p7aU289FP539CL8mwLaHaseWRewVEC8BLrD7P",
  "key1": "5BxpS1XDGNq9oSTcUSpVXhzffocojuRWMkxYJcBwn3WCLqf1MHbtspLfMg8mYU1Y38mPSgzU4cxRSX1A5i1euwTt",
  "key2": "4u7fPs1VrwV23WGMgNNkZd69N68T1cdkeNeqbXLKjQHCffqthajLo3uZze37NdJCqr9mZ3cfbiHeom8TkEmXY1xQ",
  "key3": "3Jf8wUtFaGoHbKFKan4TK6cFoQWYRbGVHhaUPPfSbpAMn43HtmvnZVyDm774QRK1s3hAiMExFhRcZDJoEPUjZEq7",
  "key4": "3bx4nfDhwKvc7pHWzupXCuhzW1S7bM4RVqYv175N2UdTFYczATBu3db7gTiFSgyMyZ3aLqZEohdjAtugiKfgzkD5",
  "key5": "QSnNnzF5J8a8wFXe8FZwvgb8h549WqEV4EpVM1ErBP7gX7xd66jCGjQSWT3NddreT7Tt5UA4R5Vi8h2kdZATCWT",
  "key6": "3h1nNcHzUYMztouPwGJfPVW1Zy9Xk1q8gv83R9Gace5xLoPRnHJquqxh11qR9VeZTGTobt79LBBGhaDf8cx7bvar",
  "key7": "22S7tZcxwgCKs2ReMz8qxjMqUD8cS2oJ4Biux1Bk5vYf5hdGhM6mNU2soGDo8XVauZmjuwqW4QKD1zvdxu3n32tQ",
  "key8": "2yyP5j3fqMKysdVMvRBeanQ1JvJ5vRxs9paB5pt77CLKYXHvbWcgwejpEyGY1aiBVHPtUtiP1PDv5ksSpMkgoUo8",
  "key9": "2Hp39g9tZccK2tP2kfBz4tmn9UFMqqgnBGZqVAWqpMNtBGgB7P22mCt74y3wqJm2bTxznfrViwzQ9BGZ3NUDz4ko",
  "key10": "kXbfPvLH8K7xeRgTpVaRTryuQ7GGXrq9cjt6NB7cf8Aiejoywdnf1xbskiHkwqvt9fUy3DJVB1ncR9hrt24HzbB",
  "key11": "5oZLfWwb58XdcgQTeNhm5N4P9GEiQ2hh5zPbJvncQruS3sGeiCgZz9449K7iVscQpijEbdNoTvhLx8wfhFTvVCsj",
  "key12": "zftQU8s8pywWVnFuNjy3xyuZAmL1aeXdXqgsJHbsXHc9TKThqQ1sWyRp1GyX2QN2fDhU7NEYmpkRUdbRXQduB6y",
  "key13": "3ziE9Zs9tpDtpPt4TCHCU5eHWQrniNazGR51BU1ubwQk3zbbXVkZQAGx3jSSuttTizRDbxVPeD8ZpVdW4S15sRqM",
  "key14": "4FJoWzMLAyLKueuXLf23P72Vi7MoEECd4mQJf7WpauC79b8Jen4h3CNsWVP3ZNHxbeUGWtacMKar5PhfgBoRyv9Y",
  "key15": "3h9M1K7N3g9ZmBHRQQE5PUU8TDvt54KHNbSnecmHkW85BM8CQkFG8R6LZZZsATgyNjYsYXWpeMNJesZn6QH5KAvo",
  "key16": "2ND8UDQ1fMuMYbBZ2J7yTpbQMeteBySYkQn1HZwMGotxUQVNfMvXsAHxgSmUrRUdVxaZYPjLTfjFsSew1ByRpCsJ",
  "key17": "4au1tnwijE8MDqfYRcikeb8kcSSXCn7HSchaL8ixzaGuorKoCvy8oeTQmGmxFud5tRRC38LiDSvNTNuos9iRBBwW",
  "key18": "52Eo8vx59o1cehwyXSnQGCvkMvEhmrWb8YQiFQxHFpFBExGq74ApKv6RrSWZwpPiWhrpvCfFFssp3SKMhEoTmjUz",
  "key19": "AD66gQAGUEojJ6gqSNRQmKYgM9X31ALXFTLvorExW1QG5ggWvfTxQDCePR5a8KPbt93miJVu8uaF5yTa6dbARyH",
  "key20": "3n7ME2DnVgtJjBCDgdxaBhEAx74kzuws6FuMTqjSs9RZ33Be6cP4FZkgsqkjfTCJFkbEDm3g1uFMZ8s4Y9gGHMQ8",
  "key21": "3rgqsNrmB8MXnKEme1TWGMneDDMse81VkH8tXFTBsF6gtyc76qZxxf1orVUfteUNDWoSkdY4mCmutUF3kpvEdjF8",
  "key22": "5L1mDJNYNn2wksZ97KKxkWmUjkbUuBzz4MARRRxoLdptgdaPUPCyPUqund7feGgtaUWQN3E9d1JxDouoPYhfEDeg",
  "key23": "5BaoK8QuMU9TLQ9fhbb3SD3GmT4FbdTTSGy644A4XtTku5ezopjQsjXRW7jj7FaANfjBeGGDkEyXg4xgT6Byz2AT",
  "key24": "39Mf9T6wd88iW7YfoqpVkAgnidy9CqYLUhaHL8REn7XFVXDewudPiW8V3GArBVQFBugwrrqVhdMqHn1DSqj3AC9J",
  "key25": "26ZJPDSdRF4BQo2tzubKyk8FxPiEpYjpfVNa2uY9pPegyndV5joY4XMGxDLEqYxr8omNkZ5dA7UGCSXRb3rzCRLu",
  "key26": "64PKjpLo4iZiRuSS1kfD3Vvrs94e1tQfbJA9FfCCU3BdT98parSouXmKvbqkshiBq9ubQgpifQhamNApfF8Y2r1Y",
  "key27": "33cERirBnQqLYDbP3oWS6CeiiyGyb5DQiEVcEm2MrytTsMUuW7GFknCSyzgTWY1GXQGTwrq7jTMdAsDFkK6DtAFM",
  "key28": "5iey27925dcxWXUZKUw3ffuWS8NqXjq99KELTH8GL5oLjVytqBhwbLNVrdQXLVnfBneXfrf1VPP5YRByySSPzjZU",
  "key29": "YApYMSFvnjn3RY1ZJKAG4nBdponuJeoCDVcvPDtGySAzp7a3tohGoinquGoBxMTcB8thw49LZMXdT9nahZv3ERr",
  "key30": "5H5bLzdtE7pTJA5qsFCNnP2TQ9SBuDpwVEvVqCQoZC4kWeqQ1DjKZg6zacxWMPhfejHAs9KnPopMjySnf1SLwYrK",
  "key31": "662s5nctbdygXWtFnyPZ2CAKBh2Sm4C5peMHZJHuXbDvkt7tzfAqYB5Pj6mwarcYQnG88wYXkdHz49Ui6casEmjF",
  "key32": "4vFHEtATfuBYckMi9C3KQ2Pk69kGgQGm3KwL3roFS42exbCzuQfMdCHr1h2PmTGwcQyroAfyUxPRH5Hwg32LNV4V",
  "key33": "3SKrgYUyaVJ7m4V3H4JRbX6jBU6ZwgwR5AoLQANJVR1x2H3MBbrDNQeokv1objDKVPXtNBPgCom7XCZMBQ6YgWKJ",
  "key34": "2GKYAB9GWxLo3P9k7pvFjvA2UPAs1wmGXYoGenXN6VFhPiYJDa87YuVRwFrv5THawZ2iejHX3uN5TQyEnVm1rtgD",
  "key35": "2mQsKRJTxcYsa2B5wjm21AHyVVpQGdgHAJyLmoPmByWpcEen3NKjXKCVrHNcURHFy1EmBaF6TAnBXfpRVxXutoSE"
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
