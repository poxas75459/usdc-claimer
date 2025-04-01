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
    "4QTKEx6zNo5D449YYLauXfMP4DCMQJgjJk22142FX7Tojrk2GwHqgzV72TUC5YrySru2bXjahPs7x3KwYExRkC7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LosSfdSQLx4MR3dzFXS4nNbUNKzZb9hzJdsdpMg4f1S6rhxx7ARxuRHPEzNaDTfi3igZCdKgw3L7x6LcGQzHDUS",
  "key1": "2T6xMkQ62ZMp6oQSpZYu12byrD1qzRQr4nbzSZc4PkC5NxACgTjWXDmWJ9PoJWiqLw3ubGi77toREkJvjuYRVuiE",
  "key2": "41egsaMPr8xTm8c5rxyqSMpnQGaaqUK8Sc2BVxkpz4G17KQvTshFBzxFh74GFLpGEZqwDYv5seeRUZsLUY9Qm26Y",
  "key3": "5ysCGKCqnpK77x4AEcGaFz1SAydgh2D767P3YiTw5dZ7nUMtC5gGbAJRqrP3totDoE8E9aoWZWA6Q6fP1Eojdfrf",
  "key4": "2wthxvmsidtdvTVgCG9rNGT4ZbfCYGxZs5EkX7EyWQhb6nFRbJCDdqJDmFMiJHPPZ3dyXznLeryTGqjwFfABith9",
  "key5": "2cSY3yN1ZECuxp4dinSKhxgrgq6svNXGVhm6ebNVobsQEneB4Wp1dZjjM81VvNfZvorD4py8XyMfTRdiJUw7r5iC",
  "key6": "5xaUiQJh32LWg82cPHaSr5D4RbXgKsS6qj5rtBXcsqH8Sxi3CY6CiNmsEffH3EnnGmC41hPTbjcHH6FCMwfxruU6",
  "key7": "5YqmiJQKvRSqYD3EbdtvYoRtJYR634sEHBPRDgwAuXt514aQ238DAmXvrmkTHj5b426Jy5YaFmkfX6iADVS5eimD",
  "key8": "2apv91GvU85bPeqgs5e8SzdLVahf8JRrHHfrc7WhPbfcNHNpktKxJqs7NwZX8Bmu7UnSm5ZWQo9t3fR8FxM9uEhm",
  "key9": "2De4Us9JAMYFJesmqq3w12qEmzfqHbAdrYgFzuRorGUYDaLxyAnNyoySHEfqtU64xfVUDVaV5864QG6xMdj9PCuN",
  "key10": "5afsNn8wxWamTLBR5zD7RCfWJBRGA7Zkw6YUYaLBSu7mLPFkrengynv4KJevwX7uQnKnbSB3p5mZ1rMgb89u41Dq",
  "key11": "5jYbwmhgHQ7MA5nYsEMADbonj4w6HdSqtBzjPYrin186aXrBAXwboUCBwxcVaAikrXAf5Eo4FmmsnHY8V6Nux1RX",
  "key12": "3NQaob7ujqZ9mPjz4xbMqVfSQGYVZMqed3CKJ1s5rjRQkbsxXVzeKbpyWRgM1hRxEz3N5uvt9F2szMCR2DZ79nMw",
  "key13": "3WyG5JGayzoYEPDHFeGUY4srK4LkgCuKQsAXBwXGBbqteFJYjXfV4zyZ7WaDJrfhCCJfheGpjfgr5bYq4LPqDKqf",
  "key14": "4sD4hJyNbpMpkYbLiEg9G1XQ8192emDbYKWjYhqRhHFNLfPRwhmhrpBak6TqjJ8MGHahFjm1Rx2A11vaqrvYaJEj",
  "key15": "2MtA64Xm2iqt5GG95VPVTPKhj3BYukb5H5tJN1a4yffF1c7Bf8VATWXDNFxBcmqsmD17hYVp6SZqeeRdLiTvYTGm",
  "key16": "2twNynq9WqMnmZyDEKio26nBDgB73bgp7cd3fKycqj6UZs3DWL3sVeFJSpZbSjctUn6Qfy4uGa72jKvHJTiCBFKz",
  "key17": "5DjSp3kAsvgVHeqAd7TXUyNjjYpo5Yjvbk1NhqTPosMW8mcWfbSa3imbw6NhC1MydwVdskTwraHgsUSRbyBqiH6o",
  "key18": "dpnGDnZQk46YDE5M3tgAasqZorzjAQpjvZ1J45L1mMgiXEEngNJFN4vRzWWbf9dak5XzWXdZULG6d9SD2AJcegw",
  "key19": "5aNvbVLWjNGsd996eaM3cf1TYHcMsZFQM1vBiiavWKbmzVTgVWNbWxxw6fhvjj4ooj1tkCdSVLudNf3UCDgQqmJq",
  "key20": "4e4n51jud4UJvbjBWBc45roYXRCarvSexYgUAQ5xisArsB4zD24Pxf4uiDfzmZACogCkGrr1urB15Urv7gPTcsML",
  "key21": "aU5KpFNRJ2LvndWRWktzwoZ2ZjWBQHRQgKkoVsaCxR9ZFjfMSTzwHCWPRaAWKzCYCZGZCJsfJkWKhK7VtfrxbgF",
  "key22": "athJrP9FSSPP6DotsUouo45UwbZLS9qNkGWA1vjW2qxZXTdikynBmxqwQpu9NmtY4m4uBxbVkWAqVrGmcu4o5tT",
  "key23": "sf9GYSNXrPFPH3jyAeuhWshTCoMyRAYQJzQHo6iG94emXK7V9DLBtey5zsB5x2SvkgQBBDebNfEjyAGMcmYh1kG",
  "key24": "2aH6kYm2wKsGd4rpfhWF19qpfVbhzj9MsJmiwMRcS3251JHaHtCNx4TBfe3UYLTCVZ7MCPXsznDNFXx8gnD7EjGQ",
  "key25": "5Gxb4pGi4iCUv7iabDppcWpbfrUEhBMVciUxC5vKeXgFavbpzcahA9AiewTvR861Vo47UouCgEaV4DfyFunVgt7w",
  "key26": "4HDYUkhudyyP75JHcroEE5EQhY4QQxUacDEPiEKrNEzjEch6zoN5J8g46tsARAhunmNTmnBfJh6ieqe3Mufk7eV",
  "key27": "4mmkPkSK9uti6iG6DEpHbPM4XDmqSLBnQCghVzKxo8mNZqdPuPH9pDTetzrvZtAdwKNXAXZkSscCbph6d9TRNiiW",
  "key28": "qq4X2NWDz5xevm3cr4NurAnDQKvzAM1GtifzEn2uiVNnS1cth8J1bFo2yaS1W4MXuu46a264DRqynJbeUKCHkJz",
  "key29": "5cVyqyNzQskkMV42CBRtpWCjB7DtJqf4RirdWBSwCHHiNfCYw9AdtUF4JxiPWrTB4uorSztefRxjkaHdFXTFbMhc",
  "key30": "4Ti5SCVhdCTfvy7yTWkRV9odNMztq6tfGB1nWZANQvGtrKoT8bxMUaqvqTGv4o4CCs3aPVPWhE82epwJsckHVWcv",
  "key31": "2sW4EEnUZWWkKmvRrWxJoaaXL9EsjGiHrbXWiEwyBxhw9XNp1hvQ1DvEf2WenXFwYgnn1VvdNsTtMzHerSdNFpAC",
  "key32": "3e4bvLd6vud2CWbfAdB4rLrTHHNhy8fn1xts26CcdyUzgq8N4ANA7KL4RjPbvbY8ZH4zwbetC5jaqoBzWoZ4Z8jS",
  "key33": "4iZ4QzFomvcqSZhMpcjVh7WvVBRvMYiaggimLXZEqYqYthTgH4Km5tedXGmRVqo6FSPSWViCaijtsdc1J9qpTYDc",
  "key34": "4qWXRWtBDvpsgeokzBs5ETPyEzGr6dFh9T3YyevpJ6bjSK8ATeydaxTbK43htB8eMrf6R2G51Kx2J6mcT6zYV3nr",
  "key35": "VyeuQU7mjTckUQdZo5MAoHSjVGGKjDfatsiH1ok6EpUZwvx9arNamV9pgQgeUXWynVftXHsG97oh15h4penbKVK",
  "key36": "2MwuXUSgNUxEacU8tC9185ttjFHDwpChVwXFmMJWpiioqwXk9f7v5PX4Hj4a8r6Euzg6BmjGYXzLQBkZQJyTngRe",
  "key37": "3XWYM9QwYJ2QZALwmzruYx2Y6sAaAubJjuke4frUbFdP9SbCbHan9yWGs1wg4uRKui4nwQ84RsTcxGP372fZadQC",
  "key38": "6523FCPH5mLh7tSF3jhi1wftQ6ATaBKs52cnSotPJqtGZACKNUU5MdX7aR4wp7AAun9DXUsMzSTvcUsttJ7q8u8Y",
  "key39": "cBCYx5SjfhmDK3BTm4GPHBQVFugTrVzQJLnE4eiejMstBGo8SJ42nfMkGK7Yq3p6Aj2UvXMsvSqdtLxA2F2bnjj"
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
