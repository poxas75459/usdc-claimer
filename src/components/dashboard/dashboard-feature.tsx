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
    "wjZ6xQSs15XksZPf2kKFvTGxfg1Qo9vYSqCnDv42r98XVgNAQSyCbP4iQuvRmmkB6NRazCmFL56Pfj2vH4VYhxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xStS6ivnjjy7CMsbPSHeXRk6cDg7Vt3yQhf1UjWcCHae7xypguLZm3wnQ47wnDUMP5Gi7G6Btr6TpPukADU8orU",
  "key1": "3b3KzxhKEugKVHzveQXFXFAeEiL8p12gjQ3frkDUQYqp66eJAwWo1q4vsHNqhrU9oCWFFqwxAuk7Nv6HxQf24u2R",
  "key2": "2kTyaBh6zUV8Cgmj6Acmrp6XN7c7X8Zbn8srfEwc26BKYNT4KtbAxHR4Qte42XSMwGRbdFbh7A3oyxHfaZ9HyGhB",
  "key3": "3Bj4XhTLNWXiPTzKofnemauHRZTr7rgHtC9TZNwFKheXNjmt8kEdap4EDFajjbrpKuw1PAjaQsvVTcecVScwKU5D",
  "key4": "9m5g3nvjugbbcpfoGSP1Mv5X3sLwRs7MyjcmzifsatFoP9GEe8wond6UNWDESQKXi2YLzJs1xhMBsvdNo946npY",
  "key5": "2fquFctrRXP7y4EBazoyN7UgVh3RKCHGdrKZbYE4w68Avg1UYXeTPYgfRgkojakmuYC9b8DQjQmJ5Byv5VmVX7Qn",
  "key6": "42eiWeF7vrtxhS1soEzVV7X3P3pDds9HMR2x5mvQCGpnqgGGybftnmQ3S2XfobHTNHUqXLK3MANtzYydeYHoSAwe",
  "key7": "4QRaZwKF9D4steXJhtRcPVP9uH1cYeDEYPG9YnbX4QrJeMypMLfaHRDFeTMXigR8a5WH6MsNuqds6hCUpmpY6LTy",
  "key8": "2vQAWvwDSmCLqxN2Ypd3NGEENkvMtBRYVmUkfcwYWUbnstLuXhbEJEdYn3C4kYJBsXX5c7391xdrrveTjL6etezs",
  "key9": "4s4ycyd2Y8YKMUzP6BF3o8kXGGrxkzTPHK81aHrR9ubac12UEhRniiCo5E1MJGENhGYvqAG54Zck9Y3QM4t1UuGg",
  "key10": "21gVaR5Q1Ued4vLKoCD7JLHbfg3MZtjRXis8KsszdsMiqy1L2JGMVCWkERoZBibY4KovA6FJyjp4BKrBBzMPwjPb",
  "key11": "kjTmcohPaxvxkhxnsbv7QTKnQ4S6TFphB4Zi1tyE4TZJETKxiicMTW1Fib1pxY8QRH7jNi1hH35FbpQauoiXU7i",
  "key12": "338vmzTdGmf7bM5Ke9j8KDipBCJG6y5mBGnchkiK99fy7UTJXwubbK4yzjCRPRTTJMBzcmTadxAbkCdvVFYsAFBg",
  "key13": "42UoiEuAYmKEaAe6igC4HX2dyKp1qdLuPY7gaTs76mN9UukYzwGwja3RMuzkUVLvtvorn8qULHy2W9f776WmVhMF",
  "key14": "QXzYp8oFZMSY3XcF1z37M26AocoDjXewxcv2htryJf5VVyhx55rGze71asf4YfCHsnQF5Za6MfhBvmnMCYfao7F",
  "key15": "1TYznBhsLc43cTqNh5odRjCj9hwWRt9mnnmhi3K6V4hkAQBUw2iszc3BRXP4DxUSsDcP2GsV3TebtJf8QZZAq5K",
  "key16": "xaStWYyRiXHZ4ic6ErVuB8FBVdPmuuhfMwzYJdfXzumkgcpvfabcSfdnhgBoJxb2zmaGzm51FHkzDh2DKwgPFfV",
  "key17": "5r53EfycbJDQuHmSuhAGzS4qtbbedXeVLqvJ3i4jH9cyzDE7QmRCMPcQPmDyskUSfevCNr9Rmu9mY6UJXx9LLonL",
  "key18": "LDGf7yHiaoGZcH5aWgUQ6QJYZApWZgWymVGyWLY34L8zJubkQZVbaLTN3G6SAj5c9WHQMYm5n4MCRa2D1oWkiip",
  "key19": "2x6FpPYBZkGJx8GCBvhEUKufZxJdaMQUXP9TQPmiQfVKtTLLa4V6iZWWDBXav6BAbZnPds1EF1iyDnQVEDbh5vNv",
  "key20": "2UgceAytp2W3QBwT8CByUumW7efmLCjw3WziaAVymZV1M3C5YBwDpucmpzMZdkbQLRMqSNpfhjCMqAQp7f6T7tJQ",
  "key21": "2HoJ17sgeuEKamfWxUKBGTNdd7AjXQcXDcJLnRkXF6QZgTEH9MQm8AjdtXbskKPYEz6W75TMwsTy28xBEG99mAop",
  "key22": "4V6i2Sru3Tofsd4mWvcrzLyZJqH8MXAMCPGpG3TTmRg4DU8MxRPeZMNyZVuAkKXEqTLwd787JgoMvEpB7WEPvuhF",
  "key23": "3debokKp8fZ9dA5d9MoM4zcfoA2xLXfJhyxXedxQToz4K91PugP8dExv8jF8VhmFaVwhE6dLDm4qT7YPfQEhx99W",
  "key24": "vKeqPHAqYFimY6k4AKupS3qkGE86PZJAqSxQXud3fv8j69sGHEvy6KojaLRcN4XxpfSwwpiQ3RwtDDs5Bjj8Xy4",
  "key25": "3Y5s7QTmQZPCszwadDGJFAtoHoUHu1mCidhhzgKpqvh4Jhh2Yun6oRHqmm1T4vffsoZydwt2nmhd3BFMhruwWzp8",
  "key26": "2uaHcRp5LzXuJ5UiXwMZXoaQYUgc27VWVSHa5VdXJxrphAKBfoTnMGhqRVFvcUT8r1VK5jw8dDqxuPBtRfrkkt8a",
  "key27": "4xqG2YnFvKdsS71NZBczdJp1xWqrWqqPpgDbLeysp11iFr9WpGF17cs9CXFL2Zf1i9qR5ygCnP9PJCZ1ivVCHrhy",
  "key28": "qAXnQENZ6cGRKxqN1XwcjwX3sbGRghhTy5WXYrsENBSvqmCfvFPaQmE7onbNG5fdchL7RG5vcKi96wx5hzQ2pJy",
  "key29": "5AVeKdTqBh1Jp8Pms4Zs4sV4HTATftxMKzTLQuNFryZYPHfrFjUad1ufq7Y9nrLjxFEg728XnjBjf4JstaQtZkZw",
  "key30": "35MZpEDkEYKDeMGLwL7StqjfecqCYaCmgwEC8pk9Q1WPyukcwRJeZC2jcwfDXbMexddZXLsfiLC8TZK2dqrR7x1J",
  "key31": "3xjkLGLMdDYkqaMK1N2pVZzy12cD4SvAtiPmU1SzFiNucuwXZT1tshrZSBcJCD6B3nz4JFoBsRMpyzqc6pbTToES",
  "key32": "3ukzZw1T9MhPxxkSH7KfNH1j8RQb5XHqb4VAAmiREXHKg3LVByQf9kYHFvm3r1jwzLnerKLvwecbV9FxyEwydJG4",
  "key33": "5L3APckfAmd3R6p996ABZpmZySy4qGP3HHLFwyPGN3i4Ctvq5UNPU3J8WC7cjYgJj7YK83PaFJpYajoBaqLhPAj",
  "key34": "5PXr9wZw4LJm8E66uAAEda42TdGPTPq2owvRb4idNi84UNEMQQs6Lc3EwLPjtJdiuRvqJG8QgWzq3Tf5zPiCy6Gw",
  "key35": "4Bfm9abLW4ewea4exNWbzAr3KCLfbhwMgtnNiKuwpreoh6cM4GGpSqP2ZtTQpfHVjRa2CsJTa3FPhYddr8gha6qL",
  "key36": "MAqmrVnkrpVye5YXGJYE74GdiEqbvLzs9DMCGHFRjogTAHwD5HDg1oqdRfBY47cuaxzP7U9amLFRcoXxBX725xf",
  "key37": "3uGYxw8hkMB17rJZfLhAi639a4QBTehBpTfk2uGyoWrHfVbA7gz2pcu7SDCuRGmKrDCxqxPEXdiXmCqtkNRtkn4b",
  "key38": "4UKDh4vzTyHAdsmQbVriaqtRaCZtis1jtLuDtHoTEC9a9w7B2NS15S5U4o47bvczX3CcCdD6yeFuZXsjjJawb6A1",
  "key39": "5upDuMqm1JR78i5LbTWNwkjeMLW9uuQXurKQd7kTT2abLwYf9Z7km4HAYbtnCzEQxQpeAJpLmERUMG8AbKt9SxJG",
  "key40": "5w5o9jK2bvBfFsR5AK69WpKksQSb3S8KKhDq5vYo7g6Gd7cY1XwvmRvJMm87yYKPfF1ED58vcid3kLJGysr7N1sq",
  "key41": "53a2q5zinXqurNUTwx6fciU9a7Haf7waHvjMQhadCRptuCDVjRSX8tTirCEsS8iFs9P178Y9GdPFMG3sptE2SXKm",
  "key42": "2ufvGdBzZFZC3htMBi1EX5253C51Y9g7FFeAnd9Yi5w8ACxa55XUzCTLsvG7xB4PRHHDjsi6UFXCoNDik7jTeFUC",
  "key43": "4LEf3VLRTeRLfBLE8id2hPREszmYWJASDBWEyS2zf3sDZTFLVxzW428pffZ1QrVTRhu64f7AXbP5JNJtnKggchFz",
  "key44": "3und4ePHeDvPQ8PwkkiwajYi7ZLgkhmdWu7egwePo4ZsmCjaxKCUkzwH8AHe5cJhp54wzPYPazpXdhcxPP5pmuTb",
  "key45": "35msEAkSrXU4KLVideqLKAevne8xBWJNvtZb9CjsCZ5yTAgiywkWn5V66mQ3sBzXGss4yayfSU94pLau3tqqJhZj",
  "key46": "5KTwK6sWfQpEs7PfgH3mbQEe4ofTc8Acb7gQgL1WYeLmaycPJs5azGLUpWBNCezUcARngehxZEyhXeDFuoRB1tWx",
  "key47": "4MQuLnrsG6LgAkPzuD6FXKTQBVGwvFWHcGjWgyhdjisEcPHfeJQ5CLqDzmZeihi37Ht4vjiSHFiAnJxfTg3iNSpc"
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
