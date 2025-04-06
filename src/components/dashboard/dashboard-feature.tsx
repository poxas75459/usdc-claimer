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
    "5nPjaF1QdzpB1XaUaoSsMHYqFR72TjcQ9qgeMxtyqvFpDhSnnj4tbkzxxpEKA7FM6XRoM7h4JwXHxcb1bFtbBxDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29ZXsyBUMep5yPNGy8ZRcLzEVUMuwhFRmVQRBGvJnB3JoqaA2cYbGbybVE3Mudn1AQrgJVcpZxu5xfTJCEqaAWeg",
  "key1": "3ymgcPHcnuAf3bquWyimbPNWrJz2qNtatq4epsT17RqrYsfD8mXgMZ1VHTAg5tH3EYrQjsp9f3inji43HBmPMZ7s",
  "key2": "MW2CcsbTwF1QTLk1FJWJcPu1iN8GHUX4vVDg2qU1NXudCGbnXTfQnRHxp2ADfbt4Ljhc2HXFo4v8schdXVNHbWW",
  "key3": "2SvnL1jHBUp75Na3qKpwG6wDMRSb1q3P4zXs5hH92FnDUzpxwq1CXkt9qhzLh1NE4tfhtm6neKhX4MGJdvEQZf2A",
  "key4": "5eLaXvj2BpqkTwukXKQviVicoigaxA6Qima5ddFaZJtNuqsPod99rL6j6xaNptA2vRRyXhoGndmBoL5tJZWaqGsL",
  "key5": "3JhsHx7Np3hvowJsjxy3Yo5uudJ2kYmgJTw5vvj6qw7eGFhTH9PFyPFRfoyc4BFRNEXCQnebGE89Rkbsv2VPhxHH",
  "key6": "5SfaJPX1J2jKCzTnAExJWpWV7pN79sd57tdG84JfKV5XQKxa8XJsYZEVERm5j1bK6HHMuWshvBLpSdxgMV6C7vBV",
  "key7": "2Udw7cDUeZwdoXkysac697DZvGnCmpB5bEFZ5PMVfaCoAFAXdGTEjMHN2JZ7LreVN3T5XjrPb3j7YgymrFZYjdWs",
  "key8": "3Afe89UtYDec7WaXCAdGqMgGnfLeM27mLFjW4YWhTfpv9RgEma1Wr9FRHfxRvoEMMjZrmByaATH64TAW8qEY48dc",
  "key9": "4jxp8Whw3cTWPH4drfmXkH9jbyJ5ZjAxDEDijFNcxZMXkvUnVycXiGF8yt8ptEUHD1psniDNxZLAVY4pxGAttPbj",
  "key10": "5FDzBAPG8iT1hgMx6U5JM4UHAtTyHRyvyKj6nR291rotkuaqLSxPrXUD17xR5T3NPY6RCeDVWLD4JsB9mqX96jkf",
  "key11": "jDCoadx3oBc7dzr6cjkq4Xwa3nTprmhofTq1UCCz34Crc2hj7moEwfi8L5f4QhBFH28mSfmu7n7r4zQr7WMu1SK",
  "key12": "28jzHimWqHNED1vQS6hCzXVJRUy7kySr5AiL44DuMvPtd6sUPA2R5ttqmBZfWUn56PdaQ7ZG5jhAXMNXNcjhDLgN",
  "key13": "3Dp25NUcXfLjQYD7dLZ84Xq34CfiQogJzpB3ttnNLM1rzbD6Y6Zgmt7t44kUQkGDAWxw8s1rkXRyf2YFPxJUZWZe",
  "key14": "3iyxY2x9gRfFLWFCs8A6E2gVY8wPBhxz43oupTMpHTmxyBkRY9ZMeUF3kxCpJeU1jL6o8DpUzz8gfJeXLeckvfLw",
  "key15": "2HkUy25audVn61mTj5rxzvjW7NvgDfzAgupHY5MfJitqydhQhXUpSAaLAg9Bok6Zg6iFrdpQYPRAZAsA6WBZHYG4",
  "key16": "28azGz3S2CY4ybvJ7or3NXdhX845LPnbBP1HH3dmQimabDsBpx3QP3pZ5qcQiJFyw6etbzVB1EguJ4AAb36GTQTC",
  "key17": "qobmJM4f25NgEuLwyj7kyEWNnTn9ckdz4AGkrTgQiK2r8umN5BkPTKF5NZabWfkLJHMajrza8iPZME6wDfcC1JD",
  "key18": "3Ywa8JfqRLmxYqDVpCerp9a1bAi3cLCEsWWd2FT2z8cWrbsiz4guWmto4PbGSBhBhs3hvVq1956cGA7rd9EZEVZJ",
  "key19": "28h6t7ts3FFrGYFFdLbRGthw1AcZ64i6CcQYsK9mFRrG7VpiWsrvwGrkJYxT2SLqWvzCLY5BoP3aq7yYvmfWC2f1",
  "key20": "4SMygVw44KMvFXyjm6Pjx83MpndScKsLZPYVL4UB2H6SBAh68nKYxhFxdt1iQVNPMevbPut5asHgvSS5NK6UAp2r",
  "key21": "3SgwG9wbiQsB72UQCHdjVfmpPoehprmNfNjHZUgbMXbkygLgP7R4jHn6qdfEUuQEWrgZArN9p9J1ZyYYBr4hvHq4",
  "key22": "4ZKnUHeT8i68nrtLsWMNDdZUzxA5kVXiP7SntrQq5nJr5WCLY6QQEFZ4AXfRN2o1GCyveKFde4u2UEDrywMngzHZ",
  "key23": "P8tJXfzuL3MN8fPRkT5cHAc2NkknUrgUcqZJZpxVHVzdgieTESK22Rxpu4f2jTBgrAcjJTkEUTBqD1tc7FtWrjk",
  "key24": "JU2xQ2HJk8YspJJseCKimc71Qm8E6PqdwSXY5vLksBKW5V5LCJ1rv272Hzs8FxZGkYtaq9HvooDLn4hL5fGtS47",
  "key25": "39NCRt5UbFZ6CRUXSidJHhye1hK8fb8zNuEbhjKsnbaWf3npvkNEo8HpDRUrkk8U7HZGiSKAn6tsgztdT3kPGLxq",
  "key26": "5pw8rpkGDA64b87EGVS719zKGngjTyesaET7Zmbe2PHN6m4gRxrPXordv61fpbbT4YHpUvZFyZ2hNSCBS4kZ1bH6",
  "key27": "3Hmdr3N4zuudgMocvcRR1Avz9q56Ptg3AXCS2Xs7dUCJVmdPYS68mTtX5y7XDcJPR8QyEzfJhEZU9W5BPoWENBsy",
  "key28": "32Ui8nF7oW55yCyeFhMjiD2te31LWFCdHtDgQ4eHdacrbFdiYkLCwsU1QJfQo2kxn168Gih3LqcNYiadUe6AtcZa",
  "key29": "5gjSTz75seNqFMV1tyN1ZmfB6kypjXcMJANgtXnL6cCxmqRwDJmWuxd1ZrugYu6hSyT1bq8aVH4S6bkqSaT3AmLn",
  "key30": "3n1Pstxgg2LF3WY4ei38SiAxbGUGezzPXFTtTBDp9zpjZZNZmtv4TRXVXnBhGp6ibAuJr1639X8oSeVK7KphrvRS",
  "key31": "4mDtaY7qawDYErejKmfpixyWzFfPSHku5nuFLSjzs9hhYXZmuRyPEunJVsxjmwNdAHZi562Map29GPmofTuFXc2N",
  "key32": "42Fmpb5CqSaYQaFtX32YjPUDWxbyi2gzPxhAmZPEvyD3csRm62sb29BbecNTgex2c1ESdjkk4s6RoewB1XL9t8fe",
  "key33": "2B1wwMrEFyxtsKsxpf3fyazotb3jDEJMtkHAVVpUcobgx4DS5ztis7CEmjH4RgZmxvWUHwpmf6PwKaX6hpWQ5gKj",
  "key34": "3WLZvDed2P7L26Pwx4mJZz2j3f7pfTu4Gm6G6X7p2ALyzsrsNW6U3rkdp5A2RZiX9A3GzPsqPnWvgsWGzf7W4jnJ",
  "key35": "3HYtpovRYgunrqFzijR8niyoAWAhRoE7nNnDwuT5JSQNmW149fBXctyue94ft4LNz4vogYuiX3WKKWd2jkxkmjPS",
  "key36": "4Ys7FXix6QBMTJedZgfBHWTeY2tUt6YHNW6TqhaQb5DEGxwee31ssZpKpWcB2jWb9mvksFevBYUtzwyVCWT3K29t",
  "key37": "JnsT98SinVo3SYaiRcRB3q5HCDhrQeVUHKB6SDCBfGqRmr21siSRwGwVbCriVJshKhwPS3SqiK6vBphZGfcKfqW",
  "key38": "2vuuLAcN1CC2mkeiYqwzw79KWHVsKJRwuYuNh6Bt9bHcKQhMg6Gze8kTFLBucLnU2vzjPdnYTyVVJDtnBNp2XaWm",
  "key39": "39SKVYDNVJxyv2hEkNRqgJHF3vGqwdtZzsvUPpC1Q6C5okjZw29GaAu75gfQm2f3u8yFk6ZRhpvx7PJ75cTMQeQF",
  "key40": "4gFfcN5zADCFz9h9QoSdqmKFUkSKwueDQJvt1FJJnwG2z9dZ7qXdyGb4Xhrn5G81KneqrLUpyrymeWQrPtd7YmDA",
  "key41": "MZtYmu8ZQMCoHzY4XyQUMYXTabffg8muFaqMfsQXNdsssCZVVi4EGE1MgDGvLgWiFsCPtsDVapeYG9QtsLo1S2b",
  "key42": "nigCQEaLqkoNDJ7ZkoFJp4BJZkG1WVfUdQz8bcaoRnSun87tKKxptL8gUF6Mxrfq3v2LMcwmyNcq9zs7SGBzPfc",
  "key43": "5TdGnJoX2cEcwfmCsZRh8UyMFbMkuJspwyDbnk5joAkxUZ9DNNJMqN1eXH6hC8g3aVBRqVvWuQpXBdxBZEFYC9p8"
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
