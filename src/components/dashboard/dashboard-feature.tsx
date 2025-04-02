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
    "3vfqo4xENnYPSHWpgFaxmQXiG3AKhgnYCR5pubM1FJUXg6exhC1V2VRRrajx62rSoUmcqdaL8JLKXpn8L3fJdSSh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wQHt4XVeQGc2wqCmgywMUtouFuxdw2tuLm6gqYXgcDAmtVE9EsYQx8xVTqvVTTckqL9fCCYDXjs3ywPqzrXoaop",
  "key1": "2vonHYETr7dJ1VUMRxC9w5D7zd2vszkmAdmxNeerdDpsHegofQKc4UbWnSwrBFtqrHbX62KJMCgHNLBWdVRu56HT",
  "key2": "24MvvJYy3GnLZSqUaDN9rh9S4NfKRxGHzRFnhCMSDondC1xUYn1jMKzy1Ys6rFMfU1RiDJsw4YEQZnvQcVsbcAaL",
  "key3": "21fFqjbTHzXsADWjuv1MfnQyyDCg6qUPE91UdQotVGzYn26xs2VKFWU42oDwsc3sNR5hGMQfDtg9fdVe5k24s9C4",
  "key4": "5XrMymYDuvkJfAqdLjR5vJtHYtST8eo6fgxyyFLimChycKcfbS2QzXfK2cjAUXfF3VQHgAJ3K1QFMBXpLdQsxhTk",
  "key5": "3KiCVPCJGbcYr3YHFTd4MM4gS8fHfUqhaPmPLZEf5SAKZLtVmhmC7APG1haYhv9HDjzd858whfchD4P9ZjnzQxaN",
  "key6": "5jZsdvFdaEZVwPrNa4nA1NywtwoCncdcUFcff253jSq4w71Xn8WLYsqzxseAf4Y5uXRUCeFHxSBmjCbaqvZNkXsk",
  "key7": "5yx6UpAZCDZdiehggdDiv7NevdGwshBuWg49RENKxMjfZKxLP6fFRm378hdcpdiaetYRfD4qzfHa6Th7VG3P1gwc",
  "key8": "sgSdv3zGLrqAPRKFfzcPx7cyfmxKwHAhngvbanCoxstUzUTMF7q6kR6gvst9bTp2WrtC3RQXhVsXEACdh1wXXhv",
  "key9": "5yfcmNUQGYZ2nBu89DbBUjYSxWVdcGpQJ8MJX94hLBvT6NZkoA3rWUGsyUwZbWYiEhKthNjgHcdsACAkdtm8oqZ6",
  "key10": "rBKdhmuoKsvAE4af7AsEw2cpRfWnPn7eZabKTgyB1SRs1w4EJ2QMBFpX5asaJRDUzBhGvg4HxLvPq3fKxWU3NTW",
  "key11": "5iJFT15Kk7TcmTSKbXTiDXMTYWj1A62nnsU4Gck1jMXQtkP7TbmNXAQmyEgWVfHyvN8zmf8VTwNpYgtFqVxtbNV",
  "key12": "2bZhsxDwRwE1Le5qivqEVuPHUocX1JNWbcRaoEcmQviPfezwqQsYRkNRGjGpufcfsksYC6aVhsbSYvy9YfMfT1eK",
  "key13": "U642uEqRFN5j3kmB6TBCmrecpzvwqvQ5qNgRcEmcWAwkTe4wzHSr1h3B4NWUQcxxbdqLFkmQY5Sdrto25mGtRSP",
  "key14": "2wNeP8vt6TEVcxsTkoAfad6uYf4vARrzg7VVGifvC6Zjko5AkhPpEkubPwHSPdB4ut8A5EnPK6kt5jNxtBLmtTUW",
  "key15": "65xoG66bYDzWH93RJ68UA4Bhtrd7p9QfXvN5XuWEnSjq2dZM5Xm6MG1oGaAUVtzJMXqAoXKjzcUP2Rvb4pXkDst5",
  "key16": "24fEwinei1nGnHEkVoyjg18nVV4W4SvSU2uZF3AXUHsYmsub9u3GYZJnM6sAkGDvhrXSuAfKGADwZPTLbjgmZpTY",
  "key17": "2LiijUwTe1ZPvApvPhgAQSDBZvYhWJphhabt6aDEmTZCm8pTeDoBWJJqVqXV7y1HvigygnCKNX9XX7ts8HMUtxyw",
  "key18": "3Qc1rVtCErdzumVyxKXWbJ2hyW2szBmDAZv3BYFLkzcHBwAAMboL63dGjk7ydWg3t235rXy1h3xwQvu3vnNYpVYi",
  "key19": "GnTVQSLwL64LitPN5jm1k4P5UqQmv7eVTZKkg7wA5qgYnyqQuorFUmM6ZYJ1BVDJUV1ue8HUFHSFpVeZMzub5t3",
  "key20": "8QDoUU6YTagwBN5sJ7tHoM2Q3mLUqYrkaETRqy2RwWaT5wKW7Zo9wv2qeAGJGsA7qnCGD8WV9W8zU9S6qTiCk11",
  "key21": "3XnyWn6wuLPZvmWdVcPXeaciU7D34vQbFqqkPRU5nRHV1REyNkj7xMBqTMpAJQB33tGPvTSQc4jC3YWMdgL1PcJL",
  "key22": "26DRfCkNftiG7BtaUwWF2AJXDwSF26xbUWUo2upeAtcokZrhanQ7TVEs4q89t5eLDzPM729zFkZ6LkKH6z5dxjAM",
  "key23": "47E3VzwWkoc7smUzAYKaPsC12Ne5eAahgh9cf5kqtWiECRu5F4f3jMbXPgX6jcGjiZeXQtgRVwkTW4VYEmycCYkH",
  "key24": "4HcQ5srydCUyQHmnwxPkQRpaKD7QKBVtJXBEVxbKCzwgujNChbK5VzwbckDXct5zTXjpvFGKPjtNRJLZB445qWT4",
  "key25": "3rkxze3h4P2veFsPSc9RHcbjPXfTRR7PZUMxGBsfQMSiuiYUvQLpsfvcncT3pR7RF3kint4dHt2QT7gRpf1Uamiq",
  "key26": "2AwNND88U5s22XUxMVGhxz12bogywAQNHppcMzWxRVqjEPnywZW5cwh7h9yBadrqj48TcZ9xm6nYof4F4pfvpHa9",
  "key27": "5r2XgjM73YtW9L3eBH6pNeL9tQSi67BcezFjr3SERbSwbppHDMC6hYHD5V4zXfZQqxVzJPrX1pH2HG2kGkYwrPxf",
  "key28": "3PVectLipG6CDC6TmdvuXLV7gedSdbFAdZQFz2YDEZU9ug24YktUA9A7x7PSAsdp2ysE9BGRrLGVFmTZCVcZg7uC",
  "key29": "45C66aTem3ABPbqRKe6R458hUHXhbNdmU5jbo31aAsbqmwNeUxtHKcRV8ezaULajYvJx797igwGoA2bADt7aMAx",
  "key30": "5j9663AB9xshQQzWehPjUR1XXmUCiG1EgareeFYHwHeDCno1xrix6LrdnjgsKBLcCkv3WTuzLNNMmp3kAU4FqaLk",
  "key31": "53oDggHrMWSXGoKmDg3Wbph6CY2pkzY1jaUPRhAqwi41VFdW9QAR8B1Qhq11wNHPZpdJamDETxaLGEBzUHjCfyjf",
  "key32": "5hQVmdPKn2cJSXtGSRxqhi4fKNx7M2VqyFKRWJ116mEBRCFXLJtXGDbHMt4nHNcA3XhazdotN7VxMPYbHQARXztw",
  "key33": "3iAAgoup1qVuFmy5zURY6JXAMmHFyNbZZd6mGip2c91trxhxwcegRfbU4SQBpNnvLQw1HTqGg547cJ44dpfnduSy",
  "key34": "48H95eSdWhauKS64d5wAQGCWWnMDEmEZAoTNapjfkJkyKJQgaZsE1aJvzG7SELQFMD2cwouUMfPPkDztS5U3ducn",
  "key35": "BGQ6hrBuiXxaNMSZPatsr644VDJ9CY1M192nVYqfNMLFX2vA9viteAZ2TjE3CmU1qJ6kbXen4itByvUNj2LexFj"
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
