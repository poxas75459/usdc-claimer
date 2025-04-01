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
    "5Qxu6Ca1rsjhQj3Vccq5qpPvWBhmvB89kuMDQzmupX1EfL3xWD2185FvGGMLiBYm4Z7JBgAbzo44ow72vYE4QEVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47m7g5sNXtKZfY7XLcWJao5x8SNjHEWrRGxxf5d7qW27BEvyhPGEbAWTEHA7yS5qZdZwYyQxpvEWzjFj24iVa1m4",
  "key1": "2CvXaDcptBPUq52ZuUa8NiuwYtV1catwxBud1xFFJDe2pjM8dCpvS9dbNAEC42hvYVTkYPHCTWQd1L38ZBN2TTNc",
  "key2": "2MHEt8iJZcB1mN6a112dAgzSvs4kMo9AYMoaVoCNnUXKxkq1a5bnmWDPYV6fbPbrVB4nREF8nVVSa7uPcmGV6Jru",
  "key3": "3ZTVsk2ztCmUzJGn1zsMVYMGbk2KhrJvBQMs3b8QtTJKuBbxnKzbt7P3L4JUeMTMnkXuuX2WsXosop9FjJLiVqzD",
  "key4": "4KKZu3THQJSbVGSKKr4xii5oE87muWucbRyvigsXVgzBSQgpXafJNm1eQa1kueJ7yzbmydJTkivLCLuKzh2fo9QV",
  "key5": "RsaJAVPQVAaKEghxm7R7cE2JZeGxhfpFzok7Q7VoyXf27o7RDtukp8PSTd8hE8JgvXRjVsw4qHsNSaX45uuSpxi",
  "key6": "25ARSVrsHpSpnkeCw5BxQFfHPAw3Pi78MAzoBgGMAmkEZFzXwst2ZrH7QJwkXpzR2RasCJMgNbkj6w5ZsekXT8jj",
  "key7": "4kyBUigW2VL43gRbJ6RC886vRUT83ug1t41mCkAXWB1vwALUvgdRQL1SAx5XHpPcUF5xqzFcz3fqCLstk7yWt5Su",
  "key8": "55Y7XtFGaBuNGPtbTyEk3t5xB4Nrg7g5hdtnV5iGzHrYUFQvTkWrR7HLoA9gKjPgd9iKhQQooMZ6h8L4TuWCPMET",
  "key9": "62RMTWFd7topEfTW9RkvitLrBDTsX16Xum1JHVweQQmSsi7FWhMc5Dg9myzkQiV8TWri5sLTR7NzBjD2B2VbhkEn",
  "key10": "2rdcE2nT6srcFFm4tjhwmW63a7B56kSzzrgU1hW64hc4oBHg1BuGmcueAvZre9Wp9TkLoNA4HX1GMyYmFid3tKc1",
  "key11": "5TciMyFEUisfJqeZMBzRan4WKMfTeuWMwhr17YHnbQuBCXjjTzpNWkvEEAsUrDRepf9Pz4pmB24yjETzC42PgnFy",
  "key12": "5K94mKcriAFqBBECHUg9gGgJgFggVtE4D8A3s39hi6wUTTdJGHiMSAEWsRxieLTAhD2QMLQMF86WqT4SgPGkbfFB",
  "key13": "3nMmHH48urbrqvw6PnLuWMkaqm9nMHTyTZLB6cTa6hk5fBSamCWEKts3bkE1hFF6gAYkdiYL1Qh4sTLnu9nZnWG8",
  "key14": "3ZJYKYaE13awNNyqm5yhobRLjmJsfB8bAMdYTthkpkkW4QvDJjvquDCvvDZxz41URM3kGZw1dZjedZXcoPW2Wvdr",
  "key15": "5DqFmNQKT5ubY5hGtfqyoswhnQNmKsztsziHLvDdeBnfbdU96fwk2tKsZ1ir4cZH4iNHPXkqsjuPVRURcskVZF37",
  "key16": "33ckojZZrCAoMTwJZ5EKwQA9U6kgyrqTg9kWuKKxz1m1upU7K4Wm5h46qnJt351rkKWaMpKB9MS8q1fTi3k9XDK9",
  "key17": "371QgxreypVjBte9mJNSzfmMppA9FSdQB9z3vJjvzKWhhXDFSH7rAHwobVwPQWpTyEHHe61a1XBmSCNZmeaXNK9H",
  "key18": "5GuHn3QpMi9p1Mn3W87DZ4LweV36AepticpgToNeRosjbKEaurFgH9eRYLypRwbrFn18px9kytpCFQiWpyki8zWP",
  "key19": "PTbAGbxy9eRXGUTvrhScFBtkTZqLGRKrKU8eKmRRA1r14oY7XeFTY5aTCmwo9P888U1hhHNHz9CSYCvHDkybAVZ",
  "key20": "5ZjH5Rg8uaoDpqeKi5ajou1SSepgUcq1JPZQi7tzJVBfBVRy2uh6r8S4dKcdE8xLhTZXL2kuv8DNpBGeX5i5fChS",
  "key21": "2WcU2z7w6fb71uSvBmNakxxA5s2dQ2dZqHGynbtnQjFFRzxHpV3eRi2BtLtbSZBM1pLLzo4zpDEhHCPaftWs3gSr",
  "key22": "4Q9w6p2r9ZcQ8YMAEGRKCuevKGFrcy17hMXzX8ip8GeJC3e8MRgAbpSZVK43Bf2X2HnhyyFwkdjnQAP76yJqnudz",
  "key23": "63mQLHMwHY6hXLKk66sYD9SoTEQ91cDM5yVYAhSfjvna5skz3xaHBNdN4nwCp1EMYhKCZKqtPzNWiJK7ciqq5jy9",
  "key24": "3XAMXK9FED6v6H5hjyZjv93ELeRR3iRQrS9pakcqxXfuod6k6WGPUzhv6xu7vgMjBSnoRrnZGzPfvhjii6qqmzK1",
  "key25": "5cXk3ZJvS9Zk8KRrJXAVBYbihWqsRhiCWnHTQ4zyuR4igxfNtpEDvg5NPtedJCbXi2Qp1zJ5c7NWPvzzWsowkhrs",
  "key26": "5Pq3Wv75D4h3MedBTQuVuEDQAtSLGKWR3Z7aG54oNAGiERrx3ZJfCs2qMuFQF7KXPyme8PdioTf4prcqGdC9D7sa",
  "key27": "5f63WxvthYDm3BfjP86LsEAX4fiVmJBKPxkGu8ndc9i9Fo2drYUKBh7UdrpEN8iVYuEjXEhHWw8sptyW5PWqgqRF",
  "key28": "2goLexJzxg4K72rZ4E1Uhfn1GKS3wBqhYPZw59z3MpJ17K4maCqMzqUh254yumY7LkqcmEvB8pxxWCKEMsGV9VUV",
  "key29": "5MwJTYYVNs4ysD7dD1q8GCCXqstBApjmH77RHkgUPF4JLAg4kmGzHaxinh1oCMn3y9goix5F8DjCL6d2bK3gL2yQ",
  "key30": "AiaMJg3vYcr7G199fsEjTJtPHmLuXvpKMdT2fwySbXjZ5vffgJLK2JLKvzchPwvRT2TUvayGKyKtYL1oNNS9XmP",
  "key31": "3Xn1jfUndCKJjn66sMcXakmzTDLAyjZxCfYgwpQ7bdjSe8DEZ5VaafAqmsmQWK8RN8iXffVeehVJiMiXjZbz5guy",
  "key32": "2YH2a9mvfHSok68TreNbjXo9ysSxYAW6QLupoAPvTdxFg4TxaFRPm6CPcGbS4dAmyTRV11hQsvoVHjnGYVYhMwrm",
  "key33": "skXmzWpLPZnP19wCWpNVFtbygen8V8795wHAxNd2mTZn4fsPJnfceiocapjuQ7L92uEQ7pX21Jx35Ar1c6Xy7Ee",
  "key34": "2n8FpukSyMQnQQRKN2TjfoY3cL4DttYuGz3sgnR8Tj4LdSfFUY95vhLWoTLtZLFEMPUNAZRkFukbtorCHDwd49sX",
  "key35": "7CU9sMgYNCoZCJ2p142ZmStfoypN1arQsgJDVjEBUhh1CH15GngjGcXX8jqMRjSKBB1kiAMc7UhmAGSwNNETgw3",
  "key36": "43areseqASfnT6nPWCvEUPrzGDp7YPzzpZv7mZzn2CZfsDKKx2UpFDkFKaqAmF29QivMxY6Qt2RQBmo2bTGSB6E4",
  "key37": "5wPwETJgbdf6JCDDr67jEVUKmBrHLRJEgXijPUgcSNFVF2KpHg14QY24q7v6srMEz9DKQD2UxU5pHtWCWg8GrZRy",
  "key38": "2kuVLeC2bxUSBgdKJoQ56FHK5GvW8beJV1bfducKHsPSVmDeuxDvkibPukZBtcmvjBVzceJHhaW3CFNoTdC3oPFQ",
  "key39": "4zakkJiLJNeZf8bZEyVZmpeMSthhDVULdQDL1DkfEe5Q6JRLv4MGdbQXNQaJ57Wgzu5y3JjzP8BRRWSW8ziDZnsK",
  "key40": "3iYJPu4WeFSeSVuyzEGKY4JnXVVQTMuCXCDTdKrM4iRmAVigkbu1MB3eEwExo63eKxeQZquBT8xmz8LFbJU6fgWU",
  "key41": "3XSHHYkXY2NFfdoAYTozpLGLfPvSosa6uqJ2GCxmHmaBuNoPoGL3ATPumcE4jZugGRANBAhzjpGJsA1YTusQGTZ4"
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
