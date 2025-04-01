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
    "4cvVWpnuDrPxnYzfwsh7jaup69KhQos7abZNiTCXJ5zVkXmyP3FG7oxBSWyxu1Y2dopvFdeXFNz4Z3gqTSUvUxeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ysVEEDWLAUBLSHkr5BbD19n5VkyKpREChj6CPcWxXHgcDzZaa21uDU2A8mRBwf1k726CvPN8hA9GdXahB2rcP5v",
  "key1": "4S8kf9nw5hQwPnQzyC5QRT3BvkJhJpXFWFhUscq3hP19kVLXSNSGfQ7cUfwDVPSmMeM8orf3BUAaL5btASM8Uyoj",
  "key2": "31HBBNPpAgKmD7MbaT4LuhLHYNNs2qYvizWxTdwWoM7YoThXgVVXc2z34pAuFaSQ6h3XbZaR2K6FW9omLweDSxyQ",
  "key3": "586Q8tAxpzugEQK3PrgTg9rkvnH2qy8CgKkTKcQxBduQLTfxFWMkDza7PD3XENaSHRumnFvXGEpvRUWwBm8ic5f7",
  "key4": "yqqNZxkNWN9JcEYNSgDdNaQq65XyDppMFK7sDpnQKBNGofxo9X8GBTjRD38QURGEwJfV2oXzjTb7dYzZWvxugvN",
  "key5": "5NJKe7kcKGc1xxQLpz5zFTMF8q6r9Ysq6tK3rQSDiu6EtDky8YS2g7Y9uemrnNT1qPDXGp6Keybrski9VjRJKU3j",
  "key6": "5uEEcw2VKRX7avjdc9xCu6JMp3TGNbHNDqDQHW3AHZrNGJeYRHdeirN14n6Xf9NnZ2nZ3KFxhx31KMLfgSifP1Pg",
  "key7": "4XdzWR32WkJZDERfdfVWvH9JcFjpc1oWseCsAmGHB9mj4c9nYsQ7yhnTfd5i8SADmbtc7dvnbs8KebcZT23JRscU",
  "key8": "4MfaVLyEgcNt6BB57J2Hr1cCXPWSSyXTNuZa35ashAR92gostpixfs1vW6nVmARAW2XDWHHCHt2r9z88T3C9WJ6d",
  "key9": "5G5MBqqVpotgJgr4VE8XQGubucopUjJDFez4zR2VwWCrXPM9SHt9KYgyPd5MbhpsEqCqRuSKrtLPvbSizYLxj2da",
  "key10": "5aKKUKxvZaW8jfHJPWpsh2NnaMntSekVUNEhwkVbfApnkWC2p7AExrXCfZbVNMfSbTDVXN3JJq4Y8exv59WM96H2",
  "key11": "2BCUyZo57ua9T41hf5km5gpJyQRN5z1oPQ8WdnfWv6D4T9s87NEyBbuYpsMPXQ2cdGPpyX7pDq6yeWcV3WhiMCgb",
  "key12": "2vrjDE7odXA7jQySi9gWfSc6Vzac5FtaK5BdyfoyZDfimEaLR1y1G5McHBCQVHwogJgwfkLm2oJbzAgfsXSZyFFP",
  "key13": "g39uz2JfZwZSDE5eU8pZK2dgyxqZ3zTrtB6fp5zHkwXpxx9d7XV6xtbg6FGnkvzN2M1WmtGBtkgUAytGQG2gGC7",
  "key14": "2pecWHhm6MZxSrttnJMwngyzvjaayBAnxFKz11oiFgxDX5LRSNdW2jsXFw4y5jrQUaYW4jX7So3Wz1efdthGeQh3",
  "key15": "42aPVLzKZjPHP58PrjzCHh8Vzc9WkCVSw3WEixBarNL24zTi5JaRJCokMf1bf6jmwpFJc9nAgFnyDKwKkWm3FTu",
  "key16": "4skzbQk84ptYshno12jcbBJck8xoiU1PpWa2mkAG5JUab1mDBcmurpjCXNUU13vrjpW39y2GMMM7TDefSfdbjN6R",
  "key17": "5F2sSRfWxnbbTkGkZTKMKTDk481PPDaxMFifBv3G3pdtqw9Nke48dJZuyYbrEeobxSdwnGbA6g1DoX6zavqyaB2J",
  "key18": "3QqGVztkJ7A8iGT5L72Sk1fdKQpMVrDYB4XCDTLsacAs3K7QeAwYfYnpFmpq1cXksx2sQjGWsJcFh9Q4SvCGnZL5",
  "key19": "4uRzstMe3nwom8UZGeBKZbwwxxeWPiXQ7iRbwQM8rB9P68piVYu1GPETWi3vCkRgAEEZwpF33nvcD4NzERqs7Y4",
  "key20": "4q82T7VmpkrduAC4w3pXHA9uq35VXToddt7rrDDvCyzBnkVAkUTwiNbmXhNwjU5QLdHgv3phGLnBZ8KiY4B8ir2z",
  "key21": "4QyDGDfofv5iSJWvb7PAytzMPBtv418SgAv6ALnEf7sVPXSGsy46gQ85pbhjqgstsZsWmJxzVJ98FrwTrTCKwJP4",
  "key22": "uXBqtbJF4f79bwWTCNhDxC25NeA7uTohfVTy8b4vMCWyo7SrxJrnr3qmSZubCdDJYzzaoaZRskJqzMsxEXxxqUE",
  "key23": "66mKz5RWkm9X4ptjUcuMUKfRLkcjvbawzrmMGRPKZ1zpmEGxCQUBYnEv6aX48fWpkJ9sZpzUzHRFijMfLxqkVRyE",
  "key24": "3WVdcfBxUt9F8U1ARk9kRPKnfJBTCXTbkkD8ueGDoBqAhaobUEDMwo7958f5v2oQaJ2WeAVcWmrPbUwgVeJKWjv9",
  "key25": "436vCxjcgg96D78xafn3gQCPYfrMkSW5m4Q474pVWYNozEL61eFqYKZmN3vCoZH12FPvwe8wvCJnPCDyaWojML8n",
  "key26": "3VkTfSoKPwdf6k68FuSgxWF5k2dHpvNY4AeHDqEZVbzTaVzWYzGHcNKSpaooyaWNwdDW4DQiU3YjhK18Xpyw9LFZ",
  "key27": "2NV2AUJ8NnqF13psZhTz6u9TtLXccBH2XBRnXfr8SheKrTGuZT8DBUfzcGR1jvYTuNJWX5yfCeHKQruki66BsQAf"
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
