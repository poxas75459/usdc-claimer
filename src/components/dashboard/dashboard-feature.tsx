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
    "5wXqxvtHGr5cy9zS2eXeS7Am3TUouT1m5m4iA4UxJWqAmRPo4H2biukVAgCQTEQCja8cndCaLTgevms9gU8szSXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jpV8ySaSzzjQG3vLrJHdw15bT2xnRrJusYRMmmNdCp6gXdAd2LQrCaWk7ZmSTydC5sYjaJk1Nau8JBLMb2CUMtj",
  "key1": "3PK4TWTwJphRbpd97fiu8AHmhBWPbP7S54pELDrCRKDjV9PkvNfjjMw7n6hjNWi7X2GvxuoUpPQ2hUFo9gc78NSm",
  "key2": "3VcUAGsJ1f9nzYoAB16gXcsyQeY5gPHSvmmV7LpFsG9JiK3YhLkemdJdvJMVD7WPZ7Fm3iHjUyuvcPHkV5nDVYgX",
  "key3": "3ELZK7EgWLQS9HJZY1ZZnwt5Gkq6KTqWpDyKXvcKrS1vKRPhAYWf1fhSQFhBYjHoJCqsZvCumSKt4CcsAySmPzHm",
  "key4": "34z8aE6mLuGQCc9a1SZjqXCB9czsVoRQeqR63aRZGrmC4pe2tuAC2snienvFLg1BAVAVjBSRxN4F6uksBwrQooQA",
  "key5": "2TbWqVC6u9hVMqriBHnKtq8emr65JkS9s3JW5se56y3SGN9U3fp2YyDq73qypbHCkbMMqwZyYw3Nk32eSgR34a1v",
  "key6": "5iqPmZhjfbxwmDRY8v5dcazSejwDyCucyNSM6muX8hd8ATgS3MBK6FVyz6fKYkwATyLZ3d1XjKrKgB3pH9woWM6f",
  "key7": "3XF9sdWxH1GNVeuocFPcHNkcvJz2xRvWjgyRnx2pkGWZ3JLYf7CJUcgSCY7LNGz63xEHngWYjkv9v1wqJFMw4r2u",
  "key8": "5P6juhCnUK5WV8eGQEXiCCf1qCJKfnLGVYd9rcuURgq5A7M2C4HUR1jBjtpbiWveLRKqhX6159s9e1z8624t5kLt",
  "key9": "33cdPdQTRoXJnWxhepxV5fWbtsnhBpuEMiuUMyE6simnaq8bTUUQsVveny3EaGHe99WtQWRtQhAMAVWjqseePsxJ",
  "key10": "2tcgUt4th9zNWHb9xqenGVwbf2QmWHFMNhvLYZh1sPcMGuLr9u1aCQ8QbaLkeQk7dqe44Y5k9BzYBjTHy4DocoKo",
  "key11": "2CWUixXACopvzruZQ6hsx2EgxwRR9zRSgE49j1WxQW9WRB4awamUd8iGawCTSkF19SgTefyshTZLnNbxT3hzk8xn",
  "key12": "5aa8DyrguazPdmziNSwdeemyuDubyR5WGCvAmaKoGqj5tE7S24fexPeHVW5zW6rxkm1toEai4oBqUnoTRoi3q41u",
  "key13": "3d7GTbN8Yn5jd7zo7bk9Ur675BCsXW5ufc6BSmQC2T6UuLCwoMxJSXHXMow6GvA1iQzomLidAzYNTQardzDT9XQV",
  "key14": "3C9R2GpMVxyuRhwPYTgekhVTd6NTjk4dJxLnT6a8Ezqr5FrK8qgEfPmnWEKaUzrffhCRKjA2VPWbBKdabsudKeb1",
  "key15": "4mH1adobG9dF3VVF1xaAQbTp52Jn2aQbDikjWCrA9kxXtF2nARWTvX7mDqYFG3R7zJ4UApRNZvMDNrG9V4Cysu58",
  "key16": "4ZVt9opDCV6QnzSqUY6opqRG7EHWyAxSjsSu2eee1HEiKnqvxQ9W7LntCKj4AiEUSpRpv6Y4MTXBtUi4Z79A7uaN",
  "key17": "5q3Jr1M7H54o1yokB3zcsr7ktW3KEop3UWtBLD8F3yw4ryebC1CEcVhWnDhg1cEQ4kJRqCSQvoRjc5aRXPL2aiVx",
  "key18": "4H5bwweYZnz38dvWWMQJb65hwMavRRiNg7GCCnp1nC6xVSki2QFvAxoziDtSBAnSEHY6agvq85NaNAf19SkQ1CCd",
  "key19": "8J6i5tdkqn3sP7yvBo4jTzSYWRfrKYDct5XYg4E3M65KFNbaZiuT79WJgw8hd1is6vemsuo5CvrHzTrt2kvTmoC",
  "key20": "29DmkQP5HNSMJdGW5RvHorAuxfYtZrpuuAmDdeskS7AZjcNfJe8XidquY8kJ2xzdW4a8xwPiH54K4SEczLNJrKyT",
  "key21": "2QzLGSVGsnQmSBJEpMe3bacN4pUhsZPXtFhNu9LVcFUGytrP7E5zs1U7gfvdrPNNm8B7hwb17orXPCYfDNhqnHfh",
  "key22": "3QtemHjZWh1MTiPyjdFDrxh8TdkYH94xYD3PXTpUjT6ERwgMZ2F6QMDTpgoyG9keGvwwwzreR39LhJQPtCB3ZSqY",
  "key23": "2jVAcz4nYAZBtnB5WNg8KcKJ8RM4SiY39JbGTHaaeX8ATP1LLJvs3fX6sej68CELoz9qW7RKUKW9bTSNXfqc7TpC",
  "key24": "3hfSRbA18S3XGespQgQgkWiar6HRwD8RCvFmang312j7u5L2h6w3WcKKABbcBJCUGL2citbinRc9XkceYQTmo7A4",
  "key25": "cACwg7cwRUK3chxRsTpKCZwva6KperjAwxgprvuCabYKSZiDXpVwwrP9USqQRfW75g7ixt2S4c8DauPKvtbS6tn",
  "key26": "63tvsxAkWoaw5yDyCWHx5skKBM88QJSoPW7fydeWvXbEoK98UUik2FPXxos7yMGY6PRJ4t8NChzPW6nR49NAHHok",
  "key27": "5HdiKk8fZMhYyzBe1RHTYdzo118o14PTEkLmvs4jHa1xLZqg4uXrJSobREMnFgPHPMT2wTUgVyCiMgJ7B3psoZaC",
  "key28": "e33JkYC2q8rdZBWvBCAnUh2qWQaB6P79zQvTu7BpR5SiJ9VNj6FQu2WUkP1vKZ1ZuF2aygqWkJjTuQmKe9EThVW",
  "key29": "5rNpgTvcj8Ptj7m5qxxws7RUxpGupWoUKSuRYhadymQGTz42rzMK7kvS5onPNYNEopSrkFjzB22hsomt8hnVSKE9",
  "key30": "dHh2G9VLM6JD1kMsaEXby19Y1tpSGegKqEH4FnvMqT85Mw1pwi4L3SRmMe5x32JtvtvsddC76PrnakCbX5WbsyN",
  "key31": "dUswLKEKuPBy2ohiJHQQmWuUY79gtv2yRmS6scinyj2G5HxEnuKPgbscW6nqvAdtWbYrwvz2gSW9hy2xuzts5Ha",
  "key32": "5sPkXq4iBGoxBNFTaxRT43H9SCKXmeGgQZEYHwdQi3sfh1hk3fmTqpHvNUXPxRnT7z3yZSoH9QhsjUajLQwMYYcV",
  "key33": "2dssykUzZ9mTDKDxLQ67LQtRnySa7NQMRKZGp1GGKaXY9fRWdeoLwCXLrdtr8go8tSj6Sdxyo98LYxQyH1VyV8vw",
  "key34": "4FtNcY9vcgNXVEJo1zHPYXAk8F8M7sjJFXSjGD7HppSchTw2kU4CAGKZdm3ADffFPSgbUMofG4nujgutKUoPG4eX",
  "key35": "4X7jeXhQZkfk4qWHAfEewsdTrxYmQhVg7FewQirSKK4YuQ6xfmn41Y5YEJCKQBkrp1PH7Wn1BvLK3nvhkAMj3F2S",
  "key36": "5bq9LZ2XxUPA2ZCLubLBbrcLnB9SKav2asMR6eww6E7nwzBGEdPbJ4U8AnhKZa4stLE8GyJef1S5i2ZCgacxoK9s",
  "key37": "4RnmXnBGPWsFkiuxLCKtqRU1eR3YxSoC2iMGg3ZPxCw4rptqzyjLJL6TjXTvD1j1ToHHfigyHzEFAmFmZzhiHy3s",
  "key38": "5ePiJPW39jWFTLB9ZhC7kdrJ73yBgA4yoyR9rCQwnwPzmp1CL99qH1ooGKSSJZy7ugDRh4rZCzP2q4A7J712YWtb",
  "key39": "4dhjoNCaZDjonKxZ56ebkibM5wabJKhRrUpzCaZG35B48dYZ6eXaNEzkbySnBmaVVQEGohYjugtzK93knMkEZYoW",
  "key40": "5dhzbW6pbyVdxZBToLf4E3EaUDXwRNtHjjg9URZ2Tej3eqHX7BGk1sURArbX9uMxpnWnFFXMRiiwvRMfsiuUvw5a",
  "key41": "5ALmPRLAuzKAHTETd39nHRiVhXCHeuHKB385dQUwj5BCuJpg4HgibcciTpFms1UTgE9667M2yrHVYpa5BMtYU3i6",
  "key42": "iSHq4xEQR9mPQzyG4hxbXo6np3QcK45KseH69rB3bUbo26yYKSrz4bFJtzX488Gd5FkT4AKoJhy7jJD49fKjoSR",
  "key43": "2KhjEVDQjfCtRhnw5MnPzwuQZSCHe7tCC1FbK8KmJq8BRca6WJwt8Ei3Gct3uXJ7CXyyBAcKcsqCiTBoqqWrPHMu",
  "key44": "3KWLkZh7CvSTqBeNufbJgBCdrgoZaVkxvTcEtn5hprd9Rv5QaMYBX2YMyUK6DdhPttNnNKxcri1rsG38p9kVULRW",
  "key45": "3Y6k463mUqnuBDa71cB4qLRqjNJRjZiqsqiDKoTzNUFwkxDuSfR87f8Xpcvbq7GbWPoY5o9wT5frCQTA8cyvMFTW",
  "key46": "3oj4eViyqdvBjqYJuykujAjHYxTdu84MVPLNrEE7FtLrU43zgmsCcoTuhBGY2G7oUCExWYsJch1yXmisDL5UXYoj"
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
