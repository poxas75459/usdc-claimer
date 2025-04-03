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
    "3q6pTTPk2mda8yLWXBAtXa3GqZRdjp8wRQhLVwVmdAh2paA5wxn5mqnrdkPxg4RZJ3byMmjJS8ct36yfbaNjFJyi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U2WjYJ1kJQTdzL75msUpKjA4xQ4TjyLAY7eTvsXG9fxRjMya1c57uQPJUR9sJsFphB1WygSA7UXARQgmcN3M8Hf",
  "key1": "5LYeP2kGZYXCgS9FzvWV2TQ8bieYdfezHPAdxSK6mgzKNNM3TcaKrx7ab9jknPchyFUQkKBGkLpn1MUouXsQ8TrT",
  "key2": "5R2kJLiLWfh7StXwaspzDUfdz157yw15pPTccvgTeTfCoTS2iQ49Nn7t6Gz3pqGKU9RXATNsBPnmP5v4AkMRWWYa",
  "key3": "5w1uKkJzwHjnWjz2teR9WtDZuu6GoNz3ZjXyLaCy2Z64ZYSEVNQpqUn8KTmA5TSADvfyd6W3fHc2EjRoRP9fKLg3",
  "key4": "JdMzJjLKY3msgFvtix2AWDW6jsehDnBFZU3yXBxhew7CyPrmuUipchx2ydDgPck616A5Yr2tFiASvmatT7rEcfA",
  "key5": "eoGfkwfLpurnD5Ka22XoJJKadqfNNqXKxiyxyrQ5GgdizSiXuXiq9qYjWYvyGK2ApC4uCQEmQG6Qe9pYCwLU229",
  "key6": "3m6suBz69Q27ZzeAiyjwb3qmMXeY6GH3bsaz4v3LSTP1ixUkpDcQ68MimxiCk3Yjx9a1dDxn6Gbz9iNM3fSfu5gf",
  "key7": "2usG6wMURh8ks8x8WiCvFcf6tpLDFtY5RPmhbiZ1UWoMtyRNns6cf8tyt2xQ458XyyhDN35UzhExfR3XZDNDoG3u",
  "key8": "5R9wUDDLGJcmjbn55hQWUL4c786C5qosXZD3TXdSBu9LtEc1hwpsgmtGHqLHyULHHrEx8os7RJ91DWW5ibSJHATT",
  "key9": "2nQK7gZV4hmzBJw9tAAiXNeztMfDSJeC1ULhm3d2fpB7pbHCMZxDjHtDe5wiaB1htKPqbgMeCiuqpkGd3ksEouCn",
  "key10": "5MxRmaaNqihYdUmE9UHaUKpfVi6uhADerpenysy7jGuEoxd7DpiqVQgwbsxXWwvkQCJ7ZdQwbw8eLN8n6RuDp5Yx",
  "key11": "FoDkdWv5UpG1PETEfLmYH9hPejdzHXK2t72qYApvGYsfcCK5ytMSurcAmPcUbaKRoPHXcR6HPw1M73XjnKeM4Lj",
  "key12": "Eg65MDd6q2D6tQ5qvoFpvWQacoESU6FsSWCh1E8di1p49ozkB82FXtuNCH9PpaArWxK8WKfyuSvyb71Y1317mVe",
  "key13": "2jMqufDUkyMntbvmLiz17CCSFqf9nkFEBqjB1cPDjiYbaQKVfiXb7sLi2HX4n8PY1fx6SGJraNaJ77LmpwQjZm47",
  "key14": "2MaN4wDVdTExsqcAQi2aVnxAgAJSR78KfhsQyRvbnQ55wqa386DHT5LZUKndEeFumMtJpTFWhJ1EpeKT6gcVgrxZ",
  "key15": "4zv2ASvtB6dunevsfzvh1uN8CLoF13mdmtTkVLfm6b4F4z6GnJVeWUe7bSwjoDkduTHxXmUZW88icCXEJsLsksMZ",
  "key16": "4UiccUz4TqoYAdcJrzUkA7mf55fEo1juFGDpPkk6GGL8Fc2a5ePqeRxXJ51Tp1mJrTk6uPbXzGovoZTT1utYH26T",
  "key17": "5Mr1S3QkEh6T9Z1QV3g3Gf8iisRBz95xQy5pH7Tf8PQsHLbZVTcYNoQsGT1bmi1QkaM77oPjnHhCqBoLd3Aw3Pxg",
  "key18": "2VQsChZqZvWzVshrXm2F6Pfu76wDqaEJMjd9kUPCZb4CakdEa5XBXAMx5mbmfChAR6aP8T774vwNiyXBB92Wj897",
  "key19": "5upmedAky39EYKHrXsJ12h87mbS9a4TohjaqquE72dqAVeQwqNPqHwBig88qoEQbGMes5eBeP4pmsbGcX6NKHUh2",
  "key20": "4buk5dZGYhjagFUMwDhMgoMKmcN1u4NqkWXqFY27FHefWdwZyq9JRC7U49FQndm1hEKe7uBxSQYKa4jekMsCVudv",
  "key21": "3yRkeVCA8MXh7r3EEYoiJjXg45TaGhHzi7XUGmpdsGFjjHDEWW8M8apYuJbE5nmgmHebvjZjpafp7LZMhYTkjrX4",
  "key22": "gTpQbHEVZsdXCvvtB7373sWEyzsEdjcRBDkB5D5AmqjnpP1ey9MDtnF3hU7CNqu3DDd24qPHtdGea4Zi3ABBXjR",
  "key23": "3nbgEca9Mhu5ztnhgZS4R8tDcXY4yZ4yVFu3yXx4UcoyeovaH8bqWB6DXHFLr8N2E3gd7jQkpuCTHk8BZ213hQ8V",
  "key24": "4rK5taY6hhZMfFoCKpc8X1hE2LQD5wyimXCFEK4A8FvKHJZ9Hy8JgfPvp1ZBjEusKGSneETZY8FDfU3iBFPdu5Dm",
  "key25": "2kFkzp2iUPtcehAmtSp9duJ2BaVsdBCppQHWjGwBEHJpAqJZqbeAPLqiaJnWXLEQptJ9PhXxTgsQ5MSWSBvP7f6b",
  "key26": "4hH6UtrnfJViagArqGQZGsNWUmUUHEhdsUdewxRo2g4s9HMBjK3wzM7SBmoDG2Lk9WA7aMWiBNNi6SVnv8gWrRYa",
  "key27": "5CHYxxnuJQkCgRW2EBC9Rbeotos1YCirPgnwttuN61g3UuikV95mDgYfq85GMhNMdBbr8XoJ3BAkDdyZDTVCAkRg",
  "key28": "5KgtdB7psPKNDMcC42eHMUpG2d4zPewgxNVzGSKU9vbttNQjhdri3DG1RyavB63J3NB4jLWpkqDXaBVgGvzLKazV",
  "key29": "2RSSkmAwTPeurQjFgm1khSLHFJFpu7pYVgi3YaFzBHtpVCtM9ch7b9Umpjy9kdozqYtgXKYpVTvSkm5TEzWSnRLR",
  "key30": "3A7n34nF4iNzayqLdHSZcXQ3hzkjJLaCntgDAZkyUJnzRoH7yvnMnjS6T9nJ8Xai5KjzC9WZZ4LY1M46Ej2xC4hf",
  "key31": "2TPthMwVxsCrFH36HLk3CsEE64YJoMX5n4f8cRACMT6cu21LJDS4s1NX3NPJu1L7EGqzCwo2zdY7aU7QwiByJiyd",
  "key32": "5yU9u8Y2UXmPfu8Sa7jKxeKCrFR9J6gpqkWxJszkG5p5Vr4CNo5xttdA7Sx6ESyD9vQwpDcMRmK4ASZUZqXLhfcW",
  "key33": "4HmBhLgJMDeNvFAhTxgy5iw5tMTjh21ffB76LrPQ9EMD1eBwuZDLkBuNSvr5GWHm6VdcV5qw92KQCp6DAU4YF1Dj",
  "key34": "5qjAuXEjS9xLvvyLJMokmeeC8PTYJZTT216nk8F21hqmEkv8BsRHKSRUtCF783kCWaVxaEAmE4rcegLopkH89yg5",
  "key35": "4TSxs7zHDJdAE9HaevJBLV7NRCSKVawydCKRViYs4WPKs49WxbpahjUaPmyRgh58w9j5q44sEehC1F6aHC9kz2Ke",
  "key36": "522MsgRRxr1id78u3mSfdMxGDvWmuEfofrXHi7WtEE3RM4LCciNCzv7ggYU7py2ST5sw2FBi4hkz5M21poJK25oS",
  "key37": "5mr55Y1uGANr7nKRxaLS2ce7n8vjgJM7QLocmJMp6hFr9vwj5vSUGFfgo1hoUkUyG1JsYR51t4E51YcQfNNMKBes",
  "key38": "2BEu4UasKFAArN1oipwJQ2QG17gg9KTRqC1XoBoWamfMkgULJ1sRC3HRDLpEAwynhN7dFaJiPw7orVWMzGoHp3Pz",
  "key39": "BW9AEjsHRDFZE1pt1hRus7dN756biL2ZZa7KzYQqEQPb6Gt5Xv4oNj4dCzdzQ6N4wiAnV4FhCyh8LyrtD79fVwS",
  "key40": "4HFcRBDcX1ZKeWoe9JEFfZKuRjJ2a2cygRKiV7W4hS6FWdDU6QnYq1cnQjDCVdSUtVTwRxzWKo4f1Y9wpn5dykqk",
  "key41": "3fppPWhrDTjoZYXzYm4iYcJjdgXoyGnmQtxkGDQU4oEojRZ7tviMd51MkdeLfhW1Vfg9TBHsMJroPPetr9464AKd",
  "key42": "3NxQRdi7Y46dN3pj9GD41zrGazNTLvghWF7bowJLtZiuN4wZJwCDzDx9ykd1sYp7XCtUNPbgqUoVL7Fz6GkoenHR"
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
