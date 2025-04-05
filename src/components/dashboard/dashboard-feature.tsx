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
    "23iw6WqbW6VqpXdWK6Q6Uz1MSvJonhp9PdTnKascgtVV9EGHGeqVbUnVwS9DXet1jo76AhkBFE4wYfdRmdqQA892"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JrgQqbg359BMLQLaJmhrAqDvwGzkWwe2RdapRojmACegwSbCUUKpeYzqALyVtBSkPLMHkJetSTDa98ineZ9wzqT",
  "key1": "2Xcn5w3RQC93dszwFqEVuM4pPRw6BZ9HJuy89wuzhKK99Qspd7WTkoEJhAfav8EgriXn66gacoYLwU9oRdd4rFU9",
  "key2": "5z7MMTTc4kdDgZTDxcHrHV8xpB128WJ6HKP72A3duQaaaGJJ8zKUsiDzEs9AcZ1wGtqhGWCQW4F1WagwumJpYz4g",
  "key3": "52EN89AZzVWNvibRYH3mRKMzs1qHRctNU3AGaZZhMe6TDkRsPH7STUySpuFZHQPueCkmnaqwEHmu2JDqSg3XGLv6",
  "key4": "2cfcV2DbGPAPp9bfFTDhgzT1ubBY6nR7wUAuG33Kgqs6MFruG42riQQ5NEqSJeMjdRqfN2w6FJQcQpWBo7bPoB6b",
  "key5": "4UbVJCjPJ9cGCGpqBLQYd63BCt8FjT94UtJ2YeDBqtNTgtXAbinE9pyAfu6fc19TkWsiT8fudYbwvZ1ogGaFyemE",
  "key6": "1Lh5ntBRHCVKhtrDoJRd1WAojkeB4eEBXRjfZiNAA1sysGVz5Y6MpMKkJn9NexUXYoJQpkr2tFoKqREFtRZPwhX",
  "key7": "5xQvD3cbWyQ2EER9LuhzkGzKWNEQBdVdm9HMFjwM2ygEVLz1RD7vFccNq7nRRXkVEmtHuwoaMnUbdX1QAGqGzc6K",
  "key8": "5bqS3QeyerpV9b7mWF93iQM4VUPCrfXxfsF9Dbi5m5fW45aXW1XXMftDYkjgjMuguBtz3dvVN9Rf4L4he5StrfSt",
  "key9": "4m6xGttWNMmyabXVN5yrcj2o92cmvaR4vnSB52WD52bBbMDhocYYHda1FMGhYjzRU7ZcQJSsFaN2B1CMGgCfjARc",
  "key10": "5bDBVWYvQGHgGpAcn38np9TiW31xXLMDLqYNtR8615JtHTnQrBBnf4NAzL8FHfgiJBF3YMXvPJHaULhXZevud9fz",
  "key11": "4Bf3uiodgr6xfAD1HKWRk8nPbj8EjtUa6srQSxk8cUGeJDYcqeW3zozzJTkfaJ2pnLisHfeGua67uVhZ797431Yw",
  "key12": "sYsHPrJBfnWZDnUDzw3kW9xQj2b8x3FAW7kd2PrPWigRGAV3HgatnJGugCYLboJG1XAeWJVLQ7rfXCeTXzweV3j",
  "key13": "618uLkvPq4zQkPmxmgJZGDbbjKXn8BswwX8YNgNhJWZ576odSR1KnZH5vKjYJZGcWTCvFt4gyXaqf8Yi7soLMYba",
  "key14": "SZfHmNpirBMLkqUXTazXHUPyGJJJZfJy9gLncKFG8g248RLLq47EUmcskt8emzNe52JbjjyDe9MUTMKKcHjiMTd",
  "key15": "3ioAEA7FXQ5EwMw66Qu1E45vZ61CqNQtcRi8vf2YqwT9W6p81iavXJbckXbQZorVhwSBrFcTauNRLoDkp93Cgm4G",
  "key16": "2nwBpquhN244v11GPcCjm8RKguTa4qwtHJx5uWmvb7fwZZKhgTaCT9gJFCvYakzdtszBqsEs5HHtFt3PziUbPPDe",
  "key17": "m7BSKVdkXmXAYBSGbPV8nGDYknUQqx7BCXUEhUqGJgGVHwzeTBZ3i8Tfq6cXYdQzjcHpepupe9NnyGqSsGAHSvc",
  "key18": "4S6x9G667ria6dG7CizXSL5A1bx4yvycG7KNa8CzZds9TxRoJxf9Au6M8jJBKPPGxzTcw8FsbGux5ayeT1yfwmnV",
  "key19": "3X59aKaZbeewhpVTHCzV8mLJRvgiHFTC4gnniVMCu98UhA7vT2QoTiEn2c7jLfjFqP2xZDVjn4YorvJLrYGkdQ6P",
  "key20": "63zN6LMCouLCzqDx1v4dowi8n5o2YxyjziUs8GhbddqTJCAm9v4dR7fpqG1oz1GSyJjiu5QgwL4p6zqhwYtyBTB4",
  "key21": "4h9VqkkPfYqpKdBmT4fYpWXrteeNxSpcEB3CooszeZHZBwrm8MTNiNe5DmsCkbzxw8c1DW7Y4YzRW7PMDBUJneL5",
  "key22": "3P4JPtMkukAUEBR7NPnemDzzTvtYmWr4zqHbJeNsC9HYYHLA8gWBoMe293c7hPY2ufG4Z4EjWs9EeKhc4RkYQmdD",
  "key23": "4K3KDTAoTrNBBVN1TAVZdpN7MLMGcp8b9wPCz2WQLL48fjKg4isCo1GMRvmfVn9pdAiPcGgffE642KiZd6YvUamX",
  "key24": "4xjXLU1sKjE6CMmTUwmyJi3G22PW8NSQ7CFdF1K1aDi6PHKR1EZHP465MVqKCq6XtF5jcsSikxqhJ5EUcHs1ZB8j",
  "key25": "3ojfPxDBw5nLcCFAMoUfSkzdg9uZ1abiKNiQT4zDwrKCNRdiBGfQEJ2kqSSnKDgE3WSV6vqrTJe4d9MXrWn3sE2M",
  "key26": "4GVsEhr6HGojvjcpDhTfCucKPu54Stm4dSadtKfgSqHxxRpGkBiiYvncVWTHTRQQ5G7PVUYPT3MTawm2orbpbTpy",
  "key27": "5shGEhgaaUkEzpr28Wbt3zfCtYD7FQYiEFZn48Yt51kxHxHDtsNuPDEV1GpJJrfmjPzfiXEuEB3sidPF5hpN25Uw",
  "key28": "2BZhtTPMzZVkCvMbQKfJn4YhuuHnYBcRjX79dHV3YWUD4sJ5xZtBhVLb2L7E6RK7GgGLRsn2r86yiZmrYorGVVbw",
  "key29": "4QB5PSjCSVeujs72p7JskNjTNA9wXA1bWR4x9or68DrSLPU6V46QDziTrb8V64wHZDSFDcXr5XVhfET4XXGcwi51",
  "key30": "3zNQRtdBhH8LFaY74SzH6VSE79sdc24zsjskMTedtJYzcECj4UHbftMk2wBhvYp3kW5Ba5qay2dsnfmEaRjEJB4S",
  "key31": "355oYTJNiz6nggguztgohg9XoUm5oDX2Z2HHEYqWAFLTD5rnNDWTVst4t17PYoyaXZGaN5xaujNoL927TjMVMEmt",
  "key32": "5dHqLnpm62F2dpody9zSBh454tTRSxL3nYEqoBS7VyRa65AabGXrgbUaF8o9gcUvCfnPVKfNZEPWjn3o3Cf6UceV",
  "key33": "5eBW32Bk9WBGup9dMu7ZQg5s98yfD2p4r2ofsyCfSw4axGdGeb56p1cS4VRH4Z21wJ7dSbaRVi34GbLmbvM3vMbT",
  "key34": "3mvsGN2q4RRdzbWd9BAnsjPntPLJTNKW478jJZ2xHGNH9yA5dBJH9cxVeh9L8obH969E11gmCSsRWZQfv9Y6M9hr",
  "key35": "4k7FZNyKp1HfymDwT4UHk7KRpi5Vfw2GJwn9czURAxBrSidPGD9V4yvCWrwDYMJJKExqgKPYJvS2VYBEthgkMWLq",
  "key36": "5oyebfgZAvZUM7BDiinKRvg1pjMK9rw3gGt69pFMcroXGCUueockEoXpB3a3JLtWvfd1gKp8GmGwwiH2Zyne1P2L",
  "key37": "4tETvrK1tGSPnaNuVejqqYyo63f26ETJ36FoXvwHeryGK6KoghpGQBxxqRgsWUvy9z23H1CFU44PpcZdJNtBFkFu",
  "key38": "3uCeunDsU7d5MXxrtpFWVQCgu8D8fb1jFBw7QtmwC1QbjNdmc38JGPsHztLD3m1vDP3s8uR2kYejktXSBSa7svkJ",
  "key39": "26idraKQhr4yaRUkpC7xzAkeQ1gRXrAG2syr6mygzX7X3bbwiaCyXtxarKziXBufq4oPshK1Am6XwLh7advzpSis",
  "key40": "2KfHTuFRNE7Vwt24vg9SeXsMheRRbd4evFmrZ9U5FLTDihxkn1n5Fe2rZmvgzqRNV3BxHavKJfrWvhnNdWEdqD8P",
  "key41": "3yW3Sca87siC5Y5m9sfv15eXPheS9TGJf27Krwaknqp9Y5otRVj9MVm2BWe47esDYaTDEPkNXXjkexoYRS53jzjV",
  "key42": "3UGb9V3S3Z8BKSfskPoig3U7neu1WMiBNBYuu6a5rX2wamjScm4m9GLQt5Ax5XzBAXfQX6X3AJzL8tqJFkjofaQ6",
  "key43": "3BumzeK5WpbMSSjkh4DUrHFsMzAs6d7jDA1fPjoYbQ2wgi9gG45hMY1L32frJj4q54yQVtzdbVvyKVM2u5v2VisL",
  "key44": "2SJhuZqnHAUzptPBbkFH5GyioVWk5fv4YEUDTR9PvVYV5r2RZ9U4zE5Fi52muUmw9rxySjVUEGGPFdKp7xgAq5SR",
  "key45": "5oXRNkKxZwn5VjcUSbtuk3GtRbLB69YAoYnDc1TjLzEvWL4VntejqXHjKNDHda7cj8t6noAN6P49k1LFZYL9p3yT",
  "key46": "611DnXzQmNJWtsh2k8iv45CPahNcKW8zHr72JvxSDaww6AdwDNRPJvuf9PbZhry79SZwHMjcEjecCjHC9rSQ3LEL",
  "key47": "5wANcHfaZyRFpT5rPhVis1suqoV8FNneFh8nLGGTcNbtfZAfh9M7idoXVimiAyqQui6G1mUabEF33AiKJquUJdhA",
  "key48": "2Gz12MpqzB5NeQ3QUw9uaWfo6wub6ciHmDtAoCFxHUF7Gx9icmnJf9ss6iCwKQ47aoeUCZgQ3kr768CZxBqWhhdD"
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
