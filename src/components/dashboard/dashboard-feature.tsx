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
    "4FsiZHpQKyqASa32bF3XpTX7Cc4AxvzZzdcmwa2USkC3VjvaYaZr5oxREcMcqmpwTYAUFBXQCh25Kw6aXSdqDNmD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31EVHV2XNnbKMQVVeHNCFSjhMzMqmh9Lnv9vxsUJdmmdVDf4KuAkUb21WPv2vfMUNs2BqrA5aKE6aJT4hvLzoFAC",
  "key1": "5GsK4XmoR5cMjX8pum3AEXUiPDo6za77yEKH5q2Qh7pLvwCafaZRW34jhCgxVrtbwd1chhD1uURFv7Qi46SH3pK6",
  "key2": "3ASmVb1gkNq7FEYJWAFUs3X79heA14XsezmV4DgRbVtBQ7cGw3QHFFbuPLH58EAGXS4SdB4b9jHALCebHwY1rMeM",
  "key3": "2BHBBExa92pArEhcMEUfW2hfWJqTcgDYTegxiS8yas5QKoWAgAMRLKejc95si1yHnJBi4M5F4BGVGeyMMChM8T4n",
  "key4": "4GpJkf3jwiQrr5MhXAmrbXYtdjSRqtz1btv8n5SViRmLUF8UMdQ6TEmsFxY7i7dzcoLU6m7s3dmG5WBLm44gXqhG",
  "key5": "5QbwU8Dx6HxbHKoVsJmva9DXA5yS1vofc73n8oUghCQPtyFCEYEUH3dz2r5A7t7rpjJFDgNU2DsMg8KQPeLzP4z",
  "key6": "5xbRqEocfDkdTSFnWiXFHr88cS8rCZnoMnCPxArJbKd2zE1EK1mHo6gmwqPgtgs5EFSRq7gmvYxqquZLey4tKtwz",
  "key7": "4q4aDLwvenD9s4ZQFKj63dGnzrQ7uK9vSEkALkPcWDB3n8LfTybe35xbF2NmK7JL77v63994Mn45xvE5TPyCdXrZ",
  "key8": "2bCMea1s7kPxiXPUL7chbaJJ1tHrTTU58jGREK6S7F14WPrHgqJrmoAUA1dXMZMmtmuM1oQ8RrPUAMG9ofR2Bre",
  "key9": "4YV1nTmbuTUdhzEfKxPPJPRR5Mgdhu3X6c6Xkt1fY5sWe2C4G8XTSk8vo7YPpKdirmSvTMbSG6iGmx3sHyRLrv2F",
  "key10": "4zRnftY8PicLydaTXBAUCBNtTxfjuzFext8EJ6PWgjsHK2f9BQWj6SvkX8gssNpE9GrzeXsxUwA8RJLC75bSD7WD",
  "key11": "3xd49B9C6nVS1gD4FaHnMZjuqxvr56Fm6VJJjj9mKnG1nBBZcqEetWeQWx8XfcEenbn3YyvhsGK5WfDjNDr7ev7X",
  "key12": "5qZXqSs9Xx45TxmKaY4PHZAgNDNhVWPv688RKwT6DLd565XbTpcF85of6qqhXE2AxNRh7T48Lvhd1UNzmX3w1yNj",
  "key13": "2DTHPwMQSra5XKg6swNKDHYmZBPSBzi1cFpdDzei4PnP8W8w6wTGuyu1jEdsj9QrmQDewH6rvqb7WA5pYKnBXd8E",
  "key14": "4th1hm9o2q5bUcZZjbewYZtCDQfDCbUag5Ksh9juxHjPkUC3wz4YQnk2bBoFB1wiQhiYMYiDcV6AwoqKMN2RiBzC",
  "key15": "5Hi8mVEWf5KpBL1BFKReWy3qwC9JksV4i8LEzmBSXmmWPh2vDfNpw1M2f5SvmqSqDL8BRXPKvnmiBwUSuNeuTm6P",
  "key16": "FmS4PerXuGYcXwQrjvkvVyNwFFeSLgFM1bGazYW3X65SFsWkKQWTUfP3w1PA7SQzpLADmC5jGhXqmPjqtEW453P",
  "key17": "5TH95vXEV3EnPoEYp6dG2XPVYzd41ewzCqpb8RovscQY9caG7UnqqBE8mRTeddwpTSMq1jTi7aFGA5S5sX7taqpb",
  "key18": "7TDF1tRYo1mGZHDEThUjVgQwCVGQRtPBqMnCRM5TQpCCufcX3SoeRCELpemY1Xbcxiy99dzy2xVjhszzLgppPR8",
  "key19": "65VyMrXc6bD2EutHAET6N4yR3ppfbVmRKyUSWtJtX8bJPjWyuLaTcB81gPrKG1wmC7R8zCzqshnTBTf1fNy2hody",
  "key20": "zFP7HJkxK4JjCFRECkgmcUXYA12QYBinfe14TFka7KLKCzmJQLv7PJTx28hP8WWjNUMXGZiscTfnPBhMfUCjFT3",
  "key21": "2upyRKNVjAUY2zoW1wPezCjNydWUYLYEnMqqEsUMLHuqXoy8nbAPXHVad8QZMDenAcmba8aJcVuvKf4hRNNYfmGr",
  "key22": "PYCmKCk5rXTutF4LaXUqS2WpngHjTCSEioZc913ks3BPw7aHR1MEc7SF1S6uTG25C9Xxj2V1S4hAPYrmH3RDYSY",
  "key23": "27A2CU1xgbmqqF2s3PuyMAmiEYncf2ZyptQUExGTME7TX8PbjGZEXgQUiFDyWRFAnDz9qKnrqQcHPXCSw2qAarvN",
  "key24": "5SMTwqCW7PNSYRgqgv5Eyd1wVBpgZz9t4a74bXS2vwvRMLaprrZFtZ85T32LznSc6qpKo96opHPGopKyqsgrYQiH",
  "key25": "3M46xP7DTWNYTf9GUHkRX5SkUoPDcMpyr9e4Q7QcguKEf35X7Y8PZ3G5KkEQi8xLCyiTLtjc975RqTaCAVaiNq1y",
  "key26": "2jQ4fH17846ngZNcXzVKmjNtDqMVgzW3VcsvMtwx7CP9XUBMvVMBfzLvae3MD7tmRysU1i4NXc2z57heghesbnH7",
  "key27": "63skQFCedCwDFZkW5hQfLytSdwA3FGv8yZEMKtwqcacWhjRfj8JswVf4eDs1A3c9j4TTjCcVKejHShv8MJpqphfP",
  "key28": "3kV1eQ6P7iFbQypX2L9rtAdaELjWF1cKo8rtTDFmC6FJNvRTXTdBHm8narMHaimVGoD2hTaRbh3QVDtZRpkm9tr",
  "key29": "zzaFRMAsTR6yx3ozP1nhvEzL47Fwsc49XGrDbeBNbdXeG9wrghgaBRjN9cjWF3ydxcfaifyrgfpf1fTCTDLY4AN",
  "key30": "4YoWgxW3tTCWvWQvBRf38wC12Ye3s38vGMi7DweXQF6HWrzUF3QokC94Fn5NWZfGbwMT85MSZJLwGDBHGLvivVYh",
  "key31": "4TzCCrT5SZXMNTcen9QtQeyQJ5wE933cgVBr4xDN4D1rmvBJEv7dRJzmfFwtL2h3kvegPm3Qwr7H32wX3A1P8ECn",
  "key32": "jZJeeZWqJWe9onhrWbDuiLbekvV8GnreVxHyiELGzKtYw134AhEj5uSf1J3aBa4nxt2qu1kd5wvoSd3C1wnCqP8",
  "key33": "3kqjNXgUzRGZwkygAH2iAaU7mAveSir8ygfdXy9h23A7uVXH5yZxcVaG4UPux6bmPsnfNJ9VW9Aqzza95NnhVLJk",
  "key34": "5d5okM3JuKCXDS5Xom6iuHNAFDiZWkThMKbJcqrgmHfXSzzigvR2ud1WxwikVjiEq6ju5KZjHEmtUk5du4ZzyT2G",
  "key35": "662LppTMjdgqWmMn9TSJ3YzjVcczWKPoQRnbFgdj7kJ3wJuqbzyov6SfrqJafohwwkX6Cu7w6nuKnWDNtf3rnSvB"
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
