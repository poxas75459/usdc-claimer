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
    "2nJu2yb7kZMeKevW1DeuViLG4zZ2yTFBTn1Xsmnr8pirjjL4ndgcs2776VZjKDk4nCZwA5GWf4qMzPRZa8a764RP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wgopfj4SKkf5wAB9XEruRkg242bu8xB56KjhFXC2qN2XUqvrrmQF5jcjuyxsB8wyyRWWgZe9hAB9fJemUjjhibh",
  "key1": "73ghPGVyya71kTQzLUmbWv9odNVaGQYeAstBqfQwpirZTVHapK94TiSK15vfH6L938gXwmBa8rksa8Q5vYxVdc6",
  "key2": "3RxZapzpqCttZmW3xwh9ETQxHtEo8VFQM2cHDP9vfuq2QHW3yqeSNjWYNUMi7dzsXefKjk9VDrqokB4sb47NvqVH",
  "key3": "4DrsTKBnGaRpBrKCtKcqKZXukfmr2ieefA14eDAjYnNY3nqP1qZsdwWcAi2t9TaPHvaoRLR26Ub5a79Fvsxbbfjt",
  "key4": "5ZBX3svy1EX36PfofFez6n4i2yCg8t2EaVPLy2fkvDbV4v8DYJqmBo7UjStTazBgczo625o5TBVcV7VtTWgn7Qc1",
  "key5": "26x1wYZUQxViBasEYVFRefo6htr239Q9ZsoGjwwvMJqSNU7sCy1tanbYWeWvqLSivEfjm4Ja2ZQ4gRPWau7cJRMA",
  "key6": "3vbfzSuVHWkzGj9mVk8cDZS9tekbEweioKrUtWo4ECo4MRtTtMb1WZw4rnMe3BiXPzcynaswuN7foyrBod6hX8WH",
  "key7": "2MRwhYgmpikAzN37VC7J5gpcSnJ2uAYAxZVs92jewzTFHu6sonBkryWdakSsmcQBYUzdLWeVmDPAsBpL7nT6TDkc",
  "key8": "4SRJfZq3wrkETiNAApnGNgQgAS92xa5Y4rHHxjxwrEvunSD1o8Vr1uzh7ZNRtr8ucS6iCDngdhuFWoiZ54piiNbW",
  "key9": "22RXvg2MEeZYvPh1BEg7tKimVQQVPp3PrPvfnK8PJwVLrFEiG4opqY9WqgANmWXDZV91tSFPpjKBXqz1ewRYmGmP",
  "key10": "51pBcVasfz3Vqj8wHSu82aLw1cG2udkpiWpRJSzh2NGxAQ8cKC7cP64UfwoZ1rpz2jQ2mgq1Jx8ufCZpzzgTm8Vt",
  "key11": "63yeNk7DhPuAghFbN4U94WgJWAs5uFcp6D28zjb2gFYNgRf1vdk5rS3DG51HpC5Yb4d9At716g9k6A8K47GeLM6B",
  "key12": "3XZZ9FnmxT7Aw2x6Jq2CSrkD6RTJYLPkyjoRLqE8hRine1awFMCyQS2vVkKJHPhb4fCWMK1Xk9rXgfbrbc8fv4No",
  "key13": "z6GKvXNrZRaMVCkXHJUik7oQeS3XvVQkBH7FGicCCr9RH5Ueq1oP6fxogjnY7YzVPdGUhjZspLZM2eL6LT8JCPx",
  "key14": "3Ji1N4ZcEZsk8GvaEMupgCjTL9uZSj24rPgwzC3WBqXmiJPdZwqpmWskaRRVVwxqQwpfnvv2cFqy3rc2rddoEFxE",
  "key15": "4VspfxtP19ZEBsmodpviqWFWWehxqxPaFQ98icNcBSohTq2b6AJ44RSYFjfyH8VG1VPfrBfyZ5j6sNJ1M41HgnXT",
  "key16": "337U1o7nYWVn8qKkr5XoQ7YkqBtXKC6CHNTukS4t9LBrFAtUEuEey2M24jih66DgHDBa2aKPFhQaEDm8hG4xzWTE",
  "key17": "5yTJDaPj9iALjxjD4JoXBRtAKcEe9ZeYSUaawTFMJJog6brVBjq2u8PSbsPhjptoyzmHCUndwULQRHkHQpLXbnvG",
  "key18": "3C7oKb3WLMf3DcBErSYfL92fb3uRitNneyFTQJSRGUBMxW5TB2vxRRVqdcyCkeuXSVo8B4SvNJcnuudWEbmiTaJ1",
  "key19": "4aNRJ2kBsCSvkXtCtyu6haMmRrAhy5S7WgyZ8o1ZcgjoWfhgNJ1FDTvpXajR179dyieX1H4mAAKmscf6YLMkisHm",
  "key20": "3NXbw6txhkarazNJC55SaoSJG7GkcySYCFK7ZxTDvsJpHcvgFtzcmKCnm5zLMaZBA7buQ5wbHCGkXAQPPL3NgKE",
  "key21": "3GjUuDT5rG7dTW24TVtHEnyKx1BDcj4oxDGoaHd6XnsUBwsGwD3GxzVdHDNhr9pDinauXwVjEJok4cuj9jC2b323",
  "key22": "4NukKy6d36By5pRt5scUNyjdHcxp3R7QCb4o95Xh3JypjZWhDjLCnexwDGW3nC83bpoqZAuNjR3CgJFGn9y9tGjz",
  "key23": "2VHp9AMn3hc4wFY28DgPLrAd9L2eCETwxwTnyCDo5a5rV5TsyCBUMRUT7JA3CFBaq5Qssvf8cxgQ6tPh4zA7uNfq",
  "key24": "4qoZPaJ7E8CHj3w5SaQuttQdR39db6miV6xW7xdFWjj9MVisMUn7ek8mdDkzeNTipTSWib86xZZH3kmqoExUz66n",
  "key25": "4AtmW8UnisXsfBfLQYwwfsY7GtpNUxunpz6SxvtsLpDRQHFZu3xeQzCCqS8PmaTpDJfbPnzTGqAZ5UTaNLNdCQsP",
  "key26": "64vXQgMozwSmAPnZ8Ka57Lw5R43jKtFGB7JEdVAccUn356xDNPtVx8rNXMt2BvXdPuLXwquSW1GPzxn1eajNx87Y",
  "key27": "6LgrJ9YLgiB8edc8bZFLNfjYTm2pdL1sRV9zMpLSa4ypRqcKXSa1Zu32jpSrZXyBkfp3wCJpbqY4RHjgsVD2DXP",
  "key28": "KzjaUzffHoETBPThyKLueKBre6KZ8M9KJ5nkk4p9N5P6aeLp9bTdjzVymz1YDp3nQyHo47SrUgxyBLqNQSoZrDp",
  "key29": "3qHgD5Lr1RYbzpn5BaSBGzbZxaas2DMbdXbcGy3bwt9E73CZAXPvk3VC9EeBUEiRb4Y5CoNcoDvo7BAbRtcGszem",
  "key30": "59V4RWj415xFsAMoRVF5p5k29gjudJjfzP5fRUMgrAaTn97BQoksQcjhexh4HxLzUCGuFhkJDuuznZRm6NQFxTvF",
  "key31": "5vUd6MQ36HMJfwvQezEcFa2M3c2ACaVfUxBfPGUL5GHsPcjHGiGpDbLzheRc9qJcWukCMKREdsyg44bsGNufGue4",
  "key32": "6wp1zthTJTYMTvyFH24ckFGSGKHFfwxWHo9MjC8Bvo8G7ZSJygmBsnuBUnHBmBpjmTkwUYgorVgLxzziqUPpYqX",
  "key33": "4CqUpTGyLEfx9LgA2nHebnksLnevvw6dG4Y9P2SPQcYPuYiFrCYVEoTJ8YkiRY5HuovEsHvbafDHeiKNYsUtuseS",
  "key34": "RkXJiaNFn3ycUYL9ScURLZpjeXMWGWPm99ozzMAC44hWJDp7WN18N69wCkfy2nSwHNzSm2WgrCysr2WPmB8529M",
  "key35": "5mvZdfMCWmXhmVmFpY9tM1rGADAsbbgRGFU2okZHfQNG5G54RF67eYSRxMFdjBBnWqd8AXBgC7tt2YGMsWYFMFYr",
  "key36": "4MnF8XVqNLAcQLg8yvpKZRe87jyMzU5zMkPgUk4fNPUMKF4qBVRddNHQT6oMS61WqLoBiLGXBRzn18RmyBhB6sFP",
  "key37": "2DUP1as8bfxpVVbTShyELgezNbm5EUC4mjGnAWVUDZMTekrJinNMZiXM8dNGRat69L71HHLFZGAtCPK5BgWyPcjZ",
  "key38": "47zLtNrmbwAXZ7QHVUwo3KXVFSEXBAcXLnVGccuFQiQbuAi9BwnZn4KgfaWbKH2Hm9zQuzfQn7E643ohF3324Cy2",
  "key39": "uiRpies2kYFRnk962wrb6U5HvBrFspT5L82wfBbF2CMUjNzpcz6VybnJgYC9PbxcNweHVk1fQ7fXtcBBccLBkiC"
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
