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
    "4az85x5ahx2CbEjA13zL8MFPUijyChaD6BddGhVE7GBhKn93APQgvNdosZ4pa1o9zbH5a8aYsLCVMz4qb8WzTVbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DX55dGYfvTK2sikKLsDBNzjvgCrV7JE4XEubwwSv7DKV2NmjLFSAp77Wkt9NvVbh2reR8LJ4q9p5gErwcztmNXc",
  "key1": "2QaStStJcmE4AQ31HQS4GpNmvTCNR4sDyUTJHSPC3JLg6C1TvJeXERzvUWYRfNjaq8yLAcfA4Xb7WYPkzyPzqPtz",
  "key2": "3KyXUZmB16BmEMQfoq47BpRvk1fnqpzqd5dS9SvLvvxv2RsedE5acXaHeNAg3CDG9XaNttcHVnhBN7ftqGR4NHxB",
  "key3": "5njq4ni4jpFH59ycbb4gZGtQUryEgRVdwxffMjKwRRUpQwGN5mi9Z8KUey64MtrgVvH3ysrXYUYcj4T4Pa4eCzoo",
  "key4": "2sTWPWMuxuLEUpW1sSXiGqkEBMLa3jHUgqxztuvgaEc1ZttUw1X7fyDvoJdQSfSxxt5rPKmduwwBzxuwGTdeGeKC",
  "key5": "33LTnVqzR4xb83qyKUpszEP7f31jCnceKCA8SdJxRrP1suj3eiinczN7bKjQNjwZzj448LXctoHbZhYZ6xgJgBK1",
  "key6": "39MCSuyC6BC6mwPAxHMf3bcSDEbxbr7BhWKHBw77iG16Jev2DMic5Aqu1s5s9MKBenmyEqri5tHiqGf18BqmGNGf",
  "key7": "uwFqtNSdUNKeJhNaUMhJc5VZvagFJSdUPFUSE2cKnghVS64mfsb7LXb8bFhjimkZEMxmvUZqzE3hoXoY8zDvJmf",
  "key8": "5wjMaTCGJwVh27nDQhV1opeAifCnTmxye6dLRqTL5yWjxSA8SK9bpafSxwkD7wpL1gJPQVf8utdZrAbTJrRYm3GT",
  "key9": "2YuhcsEKDJXcyyYktqcCTUASViERWjhScCvt1nHwPkycUGR6phE5auQmZQtGubFjLgwpEXrL1ghmyPE4B9cvGx6x",
  "key10": "mZgsFpF17LKJmVuRRtXDQe3qJzj24unDtQrma6m8Qzh4yc8WqhkRdPQTQFyKPTQaJCvhqsa8jKwKfMWzAN3qTEF",
  "key11": "dtTVThVMt83xNndZfxfshGvG7xhLgzPL7mHfVDvBWpXV7AKzfDgkbB6wmi2tp3nXZ2qDPm6pSD5iGJFvp4KTk6T",
  "key12": "46SNHdWJFCThkecULNdcxjySAK7mdLK9KJUCmJ7NkPrfduiKnTcvvseFMtsedepPKJSg3Lb1c5A8SVG2Sjz6iCQW",
  "key13": "5MZmL3gEMWGExhGxU3HL9TqDBLh31DEYaPx3HtkHRouQqswDQ3Brqvgu6fxQA8CEUe2QWtXG7C9WyvGbqdPmeny4",
  "key14": "3kCLW2DeLyQV1Q9jGi9hAF2motFAS7Xdotp8vrgPLDCUYU7heT1knXdw5r5gkMBmZJ6zRLs3PKgR6y9hSYMhMhgz",
  "key15": "3cAoXJTGcoEvSj2JUartR72az2ngaVb4XYyj4tCKPhu186EZxcX5RLtcgsatqAkkKs91ev7tT3KUtQbCnkjRTmFB",
  "key16": "5v4p6NL7b5GGZDp5xXmgAbMcktsckC4QdTbjqCjGMnJUDPqQhQcmntgSm8kX6eF1jTrmMtc5Rhoh6smsYQaKiB8s",
  "key17": "4HgqwWh2BiFvP46oErmjMVjbGXeTEDTvkbPPHNHrE8zJ221ANcm2ui5sfMvLCfw2wQWMNZQZ4JsuBWo5m2MHnBjF",
  "key18": "2o4xNgfViQ3XwYbPjbZofyz2FCebo1zVVdSWebPRSkMtmbQaFRTxh6qwyAPDRSqHJ3qEreHfWAC2n4LymY3U1Lne",
  "key19": "CC9APtporyjTzGQhX8nzzw2N7pRjhnKZdB8kPNwBbuN1m75zrskk9KdYEf9VjeB9RUjoqPF1hc87ygs422PiK1x",
  "key20": "656WevQvxtCR5tDkwdoj9UEeRcR4DoA13DE865JvSdL4Ja1TH8dnqoRSJ2Q91ynXXSLByuvsfZHVSTxMFQJkXj7B",
  "key21": "3oLrGWsnCZGRMqXtpQqeeh6nm5Fy228Bnt1y1u17sdkT3CFXALkmo5xxPrQMiz3Ku4gXtjhQqMj823doYjzGMkQb",
  "key22": "5K3ciuV97miBEeyH3oeyrsScAwxHz8XXRjUKDK9q71UFQR4hK1PWqocRZQmZsEXqF5RwGW8h74xTr4iXNPYTL7mf",
  "key23": "2x6ENtXwnvVDy72KTh2vZNuEYCPTTZc3QqvCFPXESeyaDNx6kAFBvJGDyn5V433JTdwwo9JgKzzxj1tZkFFQY1qX",
  "key24": "4ABoWiX63WHZgJbDRY99T5sH1aowj9SbexgeM45NhWwK1moATDeWrzSNu93ptSj67vdrBNs26bRB4g7pbTYA4J5v",
  "key25": "bN5fAMFh188BUTNip2hRePJ8LnN6tyLqKGdGRGTJH6Jhcac5TJFiR8bb6JkS2UWGE5jFT7rSubCtk9AeSbLrPt6",
  "key26": "4bQdCUiV5xZgypHv6vGczPeboTt3gVFXQbyyNFK6AexxwGNHAXf9Zor35Nsc28r5GhJb8CYuuTGXDNGDixm1CUpa",
  "key27": "tSboXB6tM5ZZ4xsFqvf3uzswXPbLo5cmJP1spGh7mxAFSyCCx3V4gn6SwdhXUKgf33sdX5uhwL9gRJtLoVtjaGL",
  "key28": "29yv95X4DJARYw6wyfsXjrKUxCFv8CMQyRJ9qSkHMvEdwmkkArmP2EeFnLxLWcxBeCqHXhuQsafkijHDB97zuFre",
  "key29": "5VFDAoCTsUh4thTetK99dyD5At16jqPVghD1pd9eYvGRhMUndDPBEREKsyoeiLdQQeLXYV6K26yKKaHGyE94B9op",
  "key30": "2TdmHjyAW5Q5v19eQ8V96ekR3c68usLXTKKkfwayhGQpoyeK5KWe9KAHrkH7q1RBtPR2BU5ArbmGaom9xiaR83cP",
  "key31": "5MjYbPYYnH49TrDd43uJ86o1oSaWuvZ2whrNHWdMCDKEPHDUjWU8L3wejkL3EXstP4L6Ticj8pdmHA87CkpZ6E3q",
  "key32": "5H9a8JbobNM6a55MHevSGSZUQVKDkn5Qc7CJrAdo4hmszZJyXXcjRkCS7QApP7ozvoQQ9RQMbzmg1W6VABb1CcvF",
  "key33": "2StgiwVCyvUakafcg2MChUNrtrkgkQ97Bk83zrhHcsFnDHgZpKTAHj2a143kP2jyMG875KZ8vZXPghdMaMPDBY6Y",
  "key34": "48GTxSSpvgGGU61xYAsooH1AAi9R3Wbt5x38ppFvFrUUkVurmRS9hVCXHxkKqXcTYkWjE5d56iKng8ZfPbCNZaeZ",
  "key35": "2dRye82wizaCoHy5usD72b33RkbDtT7xZ4vWyWhnMvSNywgQhi7hPhxYYrQkTHAq1xG5KaHrtbzGxTstpX2X8US3",
  "key36": "5ap6kuSiBqtgaZpUU7SSM5VdNz5HFV3SxGoAycCEuWWCk8cCkoNyTLzpTC1AXTyBgSJrgT8UjJ23ZiHxygCYcC1s",
  "key37": "4AFguoGmH5gYShJaSCefwxTKitCuomHVdRikZ8cxyWPa64aWRFzP2bZgDxEQHcUDjEcv7KTwBEkEiV2WxJESJkC3"
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
