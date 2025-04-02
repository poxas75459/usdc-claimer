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
    "c7SBvSsPh29TZBjJ7YEdEX7WptRJ9u6HusCTqmu1RPqg8XEp6Y2Fqo4oXNLX1pGgiCr2cQPD8o96uZuF9i86gdB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LiMMfm93msCFFmi6kdHAAoeyUzGcMNBS3PttCZDv2MFH76wMwHxJS9M738duijc1ktgtw57H8Pkcw2tnW9Mmd4K",
  "key1": "4oMtTKMMRfXLzYtgvPzXaUd6nsXqXQFzL46Q4q5so8UGQLQQo3z1DE7YmLyWRwTrJA86ub5QYKPanh55KXTeUsFN",
  "key2": "43LLkUEsDydTiycGkE4mjx2ukjvPDiq4GaeNGgzZKbV1jKvjLrPAgm6jHW9RvNxy3kd5nruovUg4Zq8B4aLdFbB3",
  "key3": "5RsjxJiBWLmo4Ks4daPNrVmg1AfiNPoMps9KaKmJNcJussqg1h3xgze3MQZiKD31NPcEWrMqsJA6caDiej6UavVw",
  "key4": "2bM8QdAfQggJXs6d5SdmGFnMd8iVoTkf8JotSPgSXULzzqF44D6cywqwL1dwYfttZeamwP2gvNs9iT4TDj815SRj",
  "key5": "4fcwZDHQpQXER29YFmTWcv5AcuKzFAR79KyZX4qdAW1d4cijoywcqiGdqVNKpcpXpx4rA9UUkM5Y9EP8dS43dEJv",
  "key6": "Pq9s6yevLcNHFfw7NhJNFZTsdFcFJcFSK2mbtPJTfYth3T3hwEfjTZjebBa7Bw6B9NJB3EJX9737FTtKdcyjLPD",
  "key7": "aSrvwuQVFSZrPnceqhJUY7gJwK4RgKMPfENrYDLtzb7nHxmSw6VMUATYyYCj16KvF69E2Y2qVt22RQKF282BTia",
  "key8": "2VnbNR1e3MdkgTzCJEHs7GLbfCqo6qb9FNRuDudMuZRQ5b6Qp6zmBkLWLx7D6BZnL5XLG9m6rHewrEo3aZV8LC4m",
  "key9": "2mY2vrNeHbvT5AgkyqqMPH6aBHBEo4P2WLeYSGwG5r3AFDgyg98a2ACpTNHSXfUNk2rt8o272ZRzXiRJ7W5osiXD",
  "key10": "2MYk1dZzxdoinJA64YFoe3hGi2NaMPCxvTTwcpvpbneyGfe9JP8ZN5eXbQBCfF1vcBs7gZ74g5y28i7qkv6KMsey",
  "key11": "4qcUjBdj3uC2U8VdkVtpYjAB3kQyjVDHstdLyHBRjo1to2JsWNT5yW8hPEJHSGNtXYe7gsvuLZ8aXQmCBj2DMtG7",
  "key12": "4tLD4wuL7qMQ9URneSk7yrEbAkLnVQjPXPjxYeWLHZdDjteFr8aXbpsFXbL4TarYDUk9GUCVq11hZGBL183jGy7W",
  "key13": "dT9nbzakmvRHHLMiPivZCQhacxrUjgRcf3fkoeY8oW9pYzJKZnPXShb6FUQY6YsQjzFH35ZDxYrz9mxHsuDw7RE",
  "key14": "4y8gi2EAs1YBDVk1ZPcpjiU4mK4F5jKqRkedWKuq28SXJHTrPJgtqVt8L9qvgMqLccB9jM5dSU6zxewvdyNpf8nU",
  "key15": "2cyQXfAY4ihDhJx41kaoHtDF2yGm4Sp5H9r4M7rmKQ24ctARGGTPibSDn84brmrFTxJ1zWmw4C2Nmq8JWDpoK1F4",
  "key16": "2dj35jco58VtLCmFPVwnqCq8YvVrNNkRGVmNETZCTQUwSDbxNBHhvUQrHTFbmVWivkP9n3JNfgoMRWFkBWEbMvi5",
  "key17": "4me4JzgmQbSZ7pBcH8stFG5qdsmNn7x9KVecrsfzfdLjRS31DmyP2FydLtP8A8xEVCLaPk73y3S6Fcysx7uYoDBa",
  "key18": "33Ms53bUynxZo8YSwhPEE8fXVPGxh6u9mktjPc8JpEoLGrj3XNd7NNgpEj8dm7SGhAMk5dzfRLDd45U3X7rSX2XC",
  "key19": "2v8TANzEPLNKn7AemX73aAAra8vjDoqZsyHZnAFQEs8Tg2Ah5JeTPvaGLbtbq4YN8sJhTgZdAY7r2WfVcwGCZ9e4",
  "key20": "62X4qaTL13PbHZmZsye8tnLELJNor5m7Wu4WwpEm6XkiSiKRTBvHjz8BZyEYr2isnqMeUaN7gRYFL6PAdoUU8t1T",
  "key21": "5hPxPV7hsVzpGp2qsf2ZTFgwY4uDLd7uyZTDDoEuenPSowrMoQkeUVn62xwLW8dvK1ivSJse1Kr7Te8Byx8Z3qkc",
  "key22": "392ibtxETPbhZwuX5ubWw6ADWcvLhymvDk2b8RbJuvLX1DqnLzn4G18fWia7NmTPEhf35evZjJ4n4qufn7Yy9YcB",
  "key23": "wbCzz3nA2cFW8BUvwFGBK1DB7AdsM3L85tcBStwU1DbJK6NgB2UiscryyJnye2odjPT8vjGVCENzKaQNSo4J35B",
  "key24": "5J1nK1fUiQjPw9krFffyLxqh6jaGDRibCKsAa97j53TC89ozkFCdyMBQ5n2DJzfa6VTR1oFkf7NBxjGri5Rr1AqW",
  "key25": "455W74rVsqDAvLqqSvZ1BzcCWj1rGioqyiCodAGWWqr47crFm5GRzRn8k71APuFQRYQtsjKATiWvLUNRmF6yYjdx",
  "key26": "3LZTcPZ2B3Xdy3sztkpvk23LDuTGkGSdcRDNsiptAQac17RWbkF428RkF1RPkY6fJXCX3FhqTX7seqQ5we9mwRmg",
  "key27": "3BU4NM1T3A3gHWHmL8tHtnK1UeGxGzQypXqDMAfLGzqhpHgEGXUdoWqcG37ZxbmfpPXFGcxBpm8BVvnaGZjweDun",
  "key28": "29mr2FYJkmEs7wmFYFAA3VuL6UWdZpaTnSDLhskEUQEBppoXNHoFMLSLdaVqMbzwozjUWM3Q4JdkmgWxTp38LDsp",
  "key29": "4RzjU76QuTxxt3zVwbWRf5ayeeyuHBckwaKoo5KQLWwaaENNXrdQ1vUcFeEy7wYtqkLuuQtEjc3gpSxyygXffi5A",
  "key30": "5MUYSU24xgvJC2XWj7L4N2S5SuPtC4s3LcdYee6g65nvLLEeiQs43CxdfGFnR4zXbu3KqcCDBvRnYSjAMXGy629m",
  "key31": "4teUYXesexiHp79rJZMMB53o5KtQAToWus7HDuxqFHdGNj5QNSQZKuXF8FU66e9GHsSFTiSWFZ6ZzB4RxyDP9MZf",
  "key32": "4KvKiJcTYoxTTc3YoNroSZZX2ZQX4a2qiky3e2FUevdXkh7MiNEjNxiF6M4JZG4GYSV7an5sADQHYYtCzNpjDwT",
  "key33": "2bGUw6nLP8TK555aXpTKeEQKhE24Vh3Znak6KfAMkegNpeo3JRtaMHscXtSusCNZR7jtTtB2WTqDrMtu43wvfVUw",
  "key34": "4WdDEhzm68VnfnFdwKW7usbXuHjVZRbzGSgwwHcfc1fqGuo8ciqe87KwykSgsMPE1brntpPK2XXQzwnUFLgNo4Vm",
  "key35": "4Kr1Lqf2hZGwpxZkZMpwaE4NAsU5uYrtN6r1t9PAPasph3KrwsSvikWBm7LnEhj3sKveTbeDJTYFbNs63wD4MzXB",
  "key36": "5TTeVYTZk6WsAKiWEZWg4EW5yTPSYmtzuPWzBwcnYtwuPDDpnTfx93Bj66HmWixqbR832b9qAcnqAyHbsvjmw8MX",
  "key37": "3KyNEqKeXEP6XRzpXrG5K5rfD7VAXqpiere7P53yuaq1gjk2RFkkSZ1eoQii2tb9UBDAzp5GmKWUWwvz2D8e37w8",
  "key38": "4r4hBuSNVcTYDonXmhW4Z1kiFBpvWKgKgwXw2RgKnFDcwt7BBQCrMq2BHGvLFt9GjGGFACnQ1yfNHzbapjTCrYgx",
  "key39": "unE4Wa1fMSprswJ85wFAB28HTUjrc2dRqGA6srjANuVybW3YTVskSyUevHwK3mwb1mbF4q95EA8SgFf5QJJMWbY",
  "key40": "4gcs7QUpMZnWBASJA8vHCKkG21QKak7Fh5aAsnNpgcR5QS2JCXDQdkgAj8siLTHfgYYkjjUcxxPnTUiC8FtNLb52",
  "key41": "5K4makGShGw1pymy9QqhD9s974jVoxfvjwvvgGG2exE4FYELVCGnqRxazXrvRSjdqLMmjpxhm8afd126NEtebRF3",
  "key42": "CAmivQAutrLzSbXGJJCNRy6xLsSEniaF2Lfbgt1ojnjQPsmNThFh5bCFRWJHfJNdKvz21QQ3PQoPrpTWLKx3z7d"
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
