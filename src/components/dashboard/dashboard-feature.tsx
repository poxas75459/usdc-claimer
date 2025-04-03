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
    "5NPGUvAg1kd1zGVktKYCkc5fTbwWtMqScs2UQNVpUj223uNNFkZgi3x44XqtJ5g7YrzUE5vdmG6YzTsGxof2sLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qVi1kihvk2WdYgg78vwjUExzRfY2QgfewjT5WFkiqibrgE9uD7XgkSDz3oyhFoua9GwKCJ4tMNE2N5N8jsbiFSG",
  "key1": "VjxMptLzN8GkVyKJkENbCdNLX3DSEkigcHKzqC7UGqihaHQHcFc9mRu7cZx6B59GSnhyFP53sbYLFUpGMoUNHqh",
  "key2": "38Miug1Evv7ij2wmPodxZyyV489H4TTFv24tStY8BGyPLki1jszAb3x9r3XZmJ3syBPaa9E8iB5curXafNcwdAwT",
  "key3": "y48xhaurgH3XZRRXUzh9ZEBGZY4ocWd56JsKdR26SogpktbjLjvdHTTLkp9YixLWe99qb6iqsB7fc8KQXQAWEkt",
  "key4": "4rCDgW6uXJEyddFmgXCY4fikLHX8HgyhZUxHFYbVymPrQ2NJBXuJgPCt8XCRRTjGhVxMTrL5Ny5yStrLmy1AF3dy",
  "key5": "3ULDNW2HyH2ef7kK1T2abWQHFnjFdd8MSChcEmrekrn9hJHDf55R711zfSSFbxeEwZBMiG2DfXJDbzirmRWeqt43",
  "key6": "3ZDf4CMgp5u1vwkN9ycQSrjnMdFo35RxtH5xPo9BE5XVNhZCqRFwCqDyKqnNRx4vUTMcDxjY77B5XBm7m8aGve1j",
  "key7": "5b2boDRJJdP3HnmmTCVJ7QKFt2YTucFXmaRLyt5hqAbx4kQz6fMW4Wm62PkWhMNwSNoMzu6BxTDF1btrSP3inZ3U",
  "key8": "LxVY93AeJy1YYBJsojTkq8TJto55ycCx2VVqAXX6cAUYFMKwY2yRriuJqVQEK5EH59QYDEuEgFnonxFMiz5ZSHF",
  "key9": "rJe2TWcFGixG9YWBqYmjfzsJJ5Eo6iNTCyzbnPvHXWkW6DJ7ukCbf2FwgfYeR5rdT6CuGDtnC4sGCcRKnZdQHA7",
  "key10": "3PsvVz6tB3oJHA94BPU9XUkmVd5Ja5sk5Rr8NY2BxuiHgwFoDHzUVuXnqSdqtATqbD6WSyANobxN2644xPy2cfEj",
  "key11": "5WD8AP56jVYFwm2fmdgEFEnUmWrAptzRyF5W9tXpsKAVVSZHfExryc1X3mTEuqnjGHxKDpnQWRRJtwUf8VPVbYH9",
  "key12": "2MNhK79KZrCHXvmVt6cUNdxnpwBZGQK2qFXBNXGZJcdSGjpAN3yQHdxadtHEEFB8pKtWHRNPc3euwScy3wAZTJVq",
  "key13": "41eTPJFZ9REhovUJSxq8i8ac84xQxhqCUQWskwiv7GDeNkmDaAYF3ZHyoVHoHXzeeVpgRuf44Qup5BB7q1c1DQJn",
  "key14": "2QNFUMz3GsNpsyJfbmZpGgxyDFW8Te41uNJ58T3XiN87ZM6zFpTvGk438xAJ7hLKHkAwT1bpC56cf5S1vReShU6Z",
  "key15": "2ddry44kPvA1E5H4o9mBbxLVoKoc38HFGfuBrXLZqGuxj9CKYknAHkaeRwPaSVgLcNk9sohG39vDq5Fbc7C71ec3",
  "key16": "ZyAphB8zhzJCaeWFCJnsY7ue1aJuGBCC4QLJmZXzz6R1fvZHNdYW1BbADRv9TcLuvvZSCzYCApeMgAQhCof3REr",
  "key17": "5JAz5vtxwecNPxMrhBFqjmP4Q7SNpULYwqtmr6nYyQz6CufxbtG79JviJLiNkGjHxTz26ZHDcr6cR7CgBzqELzRa",
  "key18": "4wfMxtxRUYrB5yDitzd1YJoiWRAqj2iciCDePzecBRqxzVzc2NmGfbLzndu6HAzexsG91igZ9Fai7Vw6DHbzSEmi",
  "key19": "m2D8ZgvvmwnBfS261yJHN8qghsiHTefruWYS4U22ABh2jprWFMY16dfrYp6nGop2DqD1fpT614oFZyveWNBE5iV",
  "key20": "4NewNqtd8zxq6pY2eT4GHRB47ejyBMXMYGyW3jCWCYCQxPmDYqzBK5zsC5KxAqJfh24CwJs9nvch2oEKWm2AJmoY",
  "key21": "xdFYvwmvDCAeA78sMoPpwtL1dx2V4f1va9SEZBV9mDDMmzXjJPt5dYaVi4M5UwL6y8tVNKEJUtH3ufGLQs1x1LP",
  "key22": "4uiBWBYwFdECJwAquCjCvSrcRUmaJpy8CMw3XuH4MQP8rikEmwiGzgkZbhkKEY62UtBZYEyWo4Tw9mVS7nYtu18B",
  "key23": "5sc8EXCkoFVk6ynx8JagWpWTbp6tkqdo7zSVYSfoHmFeR6h7UBmFAzz7VyxZx5DzuLhTA4vsUALbEJAYwnXb9tzo",
  "key24": "3UmBNJ3vE4WFCU898pwxiUh7eQYjZjLTnoQNo6HF7hNaXJpaQiPXBdcfGnkMdSCDFnycnw1ZAThzzXNXpjxsYXgJ",
  "key25": "5vZKAhTbpSjHFGJuwK6u6ezsgL9PbNMCK1qAaoc4RuHPFewU4xEPjms4MmfrtwqF5a6dGrQSBEokxppW7YU4P8zS",
  "key26": "62SNrs6xeKE4SDLE5WA58DkqAoCYufcqXaa6UUcnhr1fB9Ka5UC8iGAnpmWhriqNtcriuL1ACdMKQEEJnSJTVE8U",
  "key27": "61zwsfAaprRM9ZkyEmMK7npbgzikJgx9BS9gGoDeeF8uJfwWkmuVjWu9WxpcPqJBHww7tWg5zEi4q8Ag1crBu9Gi",
  "key28": "5c3hE7jm34qtwBRhn7RweBMYueYVFsgjA8pD8ECPi1tb3AhMvoU1tsH52HqzyymRobBHwS8iBaKFyCtjKxcBZyCu",
  "key29": "4bAWywudpM6MmVb3m7KDv4wvANibKkmr5D2tFeWUi79ZWm6x6rw274jQVHNVBQuQnjLyWsYut5j8T8Nyg1QabiUy",
  "key30": "64spoQnUSPGGUjrXH7FpcSUQMKNSy9YEiPThHevTh5J7qRwGqWUULb8oyH1QAQe5QPJDQrwwDWXwpHzmax7cAFtk",
  "key31": "65hcng4W1jhfpLsEPLFLKBE4NnRGj8ATxvDxa7NWdf4X1v2c7c7Kz83H1xcQAYKgbz9UAxT5zE6zCn5x4CaDbZAH",
  "key32": "5gjjQehC1t7GdfXShGNU2D275D1RX93HXqwVvYg5EarxEDQyX2q2FdeoyEUroaRbnv4q4VYmcqrUiwQMrRwsFTsv",
  "key33": "26vQkA1tQnmnE75RE4aqm8VT1v43TyhsaeFFV2TSYdtwJFK9PQJRQ7S5deYFBRkwph4FqWRGj2LubFBybKnViXZE",
  "key34": "4frWxqxddDF7D2MtgNxUDZmRE1v5HLP3oqow7E8byqE54hwiQ4cRKyokeNW9ussLiKV449XsL8MUhjTxR91ZChfE",
  "key35": "4ftFcoLEd9nLAWBpgNT3SPHSYY8w1Ft7ybBQWbgX9e8JxyJJGrQr9h2PZXJaxnP7toGEH8ay81wWxeW3jdGJGYXf",
  "key36": "KuCNGtVKJ5RU2x3wLuMSoLLuxdw29XmNn7A22dkTb2MytQ43XtzA6JkzUjznmTeB6T8nSjGWNRtWPEZkK1mFnL6",
  "key37": "5RwLQsPMYfk5fj46xGbcJ2yPX3gFWVi1rmGDfYHAFXhpyqwVBLfhqqQRSE8hhEdEGw2Ee2Au27wXqJMR7xNWwo16",
  "key38": "5JiGKFwxV8vfY6b518yQQXN7e4kLdcbSpxUvuMMmvgLapm5FXz69a5wsG9mFJH6A8sCxefv9Ym1BtrDHWghtgC5x",
  "key39": "5hkcSGnLGxm6xPmCe5DkpUnvcdemjFi1JgbpqXGEBFsEEgdkTxyv8t3b7aj99nZrBQBomYMHw7peG1oX7gD5njmq",
  "key40": "4CJ6fwdosD5KhyFQpFKhVBAJkqSnpxnaLF7fHJY3KJddEJBAh3DwoL5sxTSKW9pqSbgmxU5T11WvJHFdwzBdUaTH",
  "key41": "4vwLRKQcQ1Dm4sS4b49okwjc84WmCeU9at8SUtkZkUjiFDF1duMduaAV92yJ4rVNsuZ55XztXePYDqBnA4gBALLY"
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
