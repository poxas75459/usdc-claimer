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
    "VavmoFcHdcqMBBi3Qij8Cbx2jDXgaEYU6b7Qcu3b3CX2dDZHM1TTC8akoaXUEsC39tTd1Qr6zCbawxQLm5kRVbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZuhtxWKCnKAEDgbC9S4f1uru6sXumHTqbxZXRKE1REuVuyMXs7v9hfdncHsPXArzRNfhFZagKA54dYGw9u8a5sX",
  "key1": "2kr9Cs9P6yJGKQzNs54g6KHLxDrUdJjYYSUacbSq4cD5pR3QAJbFEnxPA8KQA5yhUU5Y9BGjm95jYDJpWG3EXwRz",
  "key2": "dfRF2ThxB82TQnVfgd1sNGBuhRHcUYHqM4vjKBA2gf1T75Ri8VXfF4E82PidTWc9J8aEis81EcCk3WBSKnZ6gtA",
  "key3": "2sj78jARs9y1inCfVHW326fZsWAVMdinWsuQTYbhcbxHvg2UrTzYjEkxy4FvWnhLnvMSa1YakeTvAmRMCgrgSB24",
  "key4": "3tvSWmexqqgJEXwNfRtbhbwzdqd6w9Y5mDqy2WEhu1JzGbWpxwNQm9u934nNFQAWhiznWYH3fAJr59Em8QgkTGhq",
  "key5": "61y2UJ9VFL2NXPxTZXNz2YKjdpaMYjyigBJ3HM8czcPtpDeLTJ1ryYSaw6gAwdAcdFfkVhruAhfVAwGmPvHufeW1",
  "key6": "56gV5wF38jzDvGS7HQkEPdFYJ3dkPsdy2pXdBgKH4uDDWN5XsbJ2ZrE67tbSFnKLQoRjXern1E5D4Jo8CCfcJLHy",
  "key7": "iRd8v6bbeAtH4AzM6oBcuCnYwTmJgKJFia2Esps2mJNLbAVuFazBnZiXRJSW7HesSGX8VfeTK6cQz17kjBQDsHM",
  "key8": "4JyUEaCtxsfij6owR4Wkmvmu8ZuwdjJHhDTzY7ADYBVs3nMKbugU7Fuwkr3v85MSpV2Y6TrvsXMVdgMx3JcJuw9G",
  "key9": "4nMY1pf396yQuUwexJBLjVbhg6XFjU5bNVvUnQ7og9s2C5LyyXFcMehioUAdzuPd6EEt9H1scWLCSXDg5vdtFhxZ",
  "key10": "4F8f1pGpwvjFW48TdPpWQYiZspE32FsbsUdN2Zv8dcgaxSsvCX4jhUfqVDs2mrDvDYBEhfVyCjWRBLV4QnFU48Kj",
  "key11": "4f5dRZpNpz29rD7vwhw5swQ1Ptm8sxEuzeCe3MaGEixyFVcE3mAefhytezpGhNQqWbGtoaMvEDimHLpZ6hoabjH6",
  "key12": "2dJ29qdhePYxxzMF9nUxdGRqZvLAVhJM2iwGVYJGNBiqVMa3oyBZLMzKCkN5oBw7hrUYQh3T6NXKwMMTBi8Mn85Y",
  "key13": "XNrHVPQpqxi8raVGT6wMKKyu8RFZqpqZtoM2ooUVZcDtFUjZrAp1obos6DS3ebigSnibXuczBa3HhqecK98FK2x",
  "key14": "2bmDozqPpFPYhvGsZfWiY7mNwnkUBZuyELqDTvudGYD9KEUPijJfCwgdmbXYdABTYUcL22i81TpMLs1dWkEEUMn3",
  "key15": "k3nnvJf96ZmDBazLiJwcMZysyU82JbUVqWLs46tD55Jvng7byyHubJCWNcNWN3H4f6D2mdXyt9hKheryXxygCMg",
  "key16": "3BLr9hJWGJPpCFN7deEFsU11iGTcRw9WwGYafmarjuhKjztjLHAFtn5D8GzxA7k2DrP24nZAmo7awYTfdZ4keShw",
  "key17": "3bsSB34JtuZEBXGEgCCAs5jYrGsLPKofDNf2P9UMBM2uW89T4hzR5ApjJfYKYRkEFmyfUvGa7eiiuMn66FHZQMoH",
  "key18": "YwC1FBVykXoXQB7R5CvwgezxtykwRmNM1Yq31B5TCqJtaVsZnZnsGFfUAf3GAz9GpGsr5uDUagHMcL7RcuUDAsP",
  "key19": "DRzgDLWuYzhdNsu83ZTvHg33fBxJVa4mQGULCWx1iuapENnTL8uYPHjwVBtXmFAYjJxssDVKYvWoqdJ4ovjLH67",
  "key20": "31PCzL6xswzsgsiiBnuHcJ2XtGLTGhZowLfdPSH4VdSvuCJvyZ9tCKkPpxBV9L4LdidF6NKtTrLypBB8CfRcfoas",
  "key21": "3GpZYcdPRxBhhvwfm5xDCEEg3ihjFMYoW7GNfWvuUNz9fnVKtyAiTQeTCms71WHJSVTzQu1kKz58nbdupcefYq4E",
  "key22": "5iLbUgBU58VNf3Q6qsg6mFuYACf5fXhEPg5aTcUakXz7MvgczkpbdT6qbkhmkrwdhkBJaTnGsJzDwzxumppyspUT",
  "key23": "BfwNp8gqoPw6ysXkizf7YQf9U4GYeVNiThDWLY7UL9vNCWQgb57uc842nDshAJaiQoNouafPbZXEWWwygbTaxXH",
  "key24": "3Y6m5AUc85x7uFWqXt3M8mz16UaN5Mj5fADfYWRr7KRdd9VE2fNm6Bqi9kuLBg3NadFA9Cwcu5P3ZBQPs8uuKZpE",
  "key25": "Lt84DURsG7Hqfwahya3ax4p3UeqG5FijWkqmmxRHWA4RbFfsZnTw9B87ZeZCCkmjWFzWVgJP3WmsRTkURLseky3",
  "key26": "3wFXkuomj9p77MR1wbADDzCxjfam5241DeFDt45XtpKJop69QffGUHvhJ3EJ1p6YSWMcVgPcAZjnX48k1yvHgfPf",
  "key27": "3VtVAi7F8ebrohbbE4t12NEUaanbBKCVLg6htGrFuStX5Zqoxrd9ZcS2dU1EYKUAgDUyJggAWb72HjQLW5ViSYtb",
  "key28": "3BXe7SH5ERYdEZDWHXwSpqDZt19rq6Dph936BweSXNK51xZwj5ugMVoGD5qpc3TLxYGAAGF8nxGy2EKYtt7D4Mvu",
  "key29": "4fMcsoG3XhRWRA1esFNtaXdHNoyDUeu5Egt5Sm5FjhimEPr2UGWUeNLMigf4w4kbuJ8qUDE787snnceHvXvrLmYc",
  "key30": "42ZYtQagNvg6NX1kU6awXUNVFvTrTdxyJg199njAHpSntKgyJ5cncKW8Y7QUgTXvN8KuhtsLfdTeo9N2YjEjWvsD",
  "key31": "4GtGLMygiNmChDRE997rwn7EDmdKkwpdub2tyTZJyh4R2wjDMT6891wvD5wn96NAJ8uzTPXWK4bbpWWM1zQxc4aE",
  "key32": "4VUPpjhvPtEi6uozaHwbUxEzuG2WDRaNgKBsjtr8hgSuW6YmwyJkyK6LogysfJ5KFCTE5V1hayCnYAXiiGNGvcBc",
  "key33": "ysUGVueRr39mDmoJyX3ZHUidT283Y8grbxdHAabPCmjTz9pzXzV1dCK5eEQ91xT2VrLLEosZMtJDrf3M6JZT9vH",
  "key34": "qPo2FNsEY2sm7LCJVFW733Jof7QAVcMSDbHNsZuE4qDY1WXp3YG9DdfsRyBVZS9w11phA1iTZNkh3MPuxU89sN5",
  "key35": "38uQvsECsCbAXseiZJGJcck9GJFuKifTQqQAwJvpaw2j2RGNCqGMa59FMMxKVSFmw5bGwNzdhcpHdrN8y4t68qAi",
  "key36": "sfXvZEx8SWRVM7v3TiMCebT2FD2Kikh3Q1ZEzfqc1ft1yGC3u5pf7RV15ph5fQzTT9Gn6V2BTk1fTes8g1ztUxk",
  "key37": "5JuhUVU1qqq4VeFHLjWCibBuAEZhj6R2bQRGRdqKepjR8cHvkeQxFdpZcdsAotrp3tk6znuPf2ScozWfgiX7sUt7",
  "key38": "KnVoJoaJeXLNX3x2tEVsRevHrrS4Z5jrWr67w6KkrawSqFy296qiCnWt6FsBTKwt1x4krSzfAS6YJAxkCHyagct",
  "key39": "2jrFW4CW3748fQiRtZ5JapcxcoHH5u3NLCCSWLBdCP7DxQvfr1UjKr5pB3qxG1LNV3TsZ4z6jGhw6NLozpVWXeHp",
  "key40": "WkMW2m9Uh5yt4WBu9yoeuJjBSqxWXgdFoUn9osHE4tm5X87Q8gYTwA2doMp53bgY7VVKgWyee2c9MkpteM73KgV",
  "key41": "3nMe691UkJr8RBH6xLYkPHhPm7cRsUnFrqMvp5ppnFbrMtJ3VfwRJcPo2JfvcHAqds15pkteBRJREc9BUvjcE3D7",
  "key42": "2MpAydH9ucPeipPipZFncsD9WTRqxQdyrxbn8emicvtLsX7Yvyr1sqQy8sioedZpeYBYfBRwhft8D2xVnBsd9HD5"
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
