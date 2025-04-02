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
    "uacEJj4bzH3nVHBpMVgA7LkUrDGWjUr7DArTxjWA9X8aAEyowjZbyv1TExKpQG7KAv5KVPjF2cFNNBQ1y1uwhgf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TSB6Wzu7hTe3BWwVetAKBxZpHVjZRsxjJxCRDPMvGuWwCnWTccUFfHueUZLnDE2Phum82ScgHPhUr3hnyt18rMW",
  "key1": "2MprLqJX1bCajSZyADU3kSSFv37pPbVjgkCiPVpfztAXeFLiiMt1LQV4iKR2EZu4Lo1wDPNqb5axzSqqp99y3X3z",
  "key2": "ZSjq9zSZ7VoP7pMK4mW9whRaT6QzjyWQjM81uziDFGQT3J9NS6C9v28Z2VA8tjfbk7sbLa112nmnNphNeVFX1s6",
  "key3": "TZNyXx2oWKgGfnYzX8FKTDUYhtz4ioXDWE6CoQmPdjq39BDBgDuR1qxygNm8o3UUBCStoyX9JWSQt73yfFwh973",
  "key4": "3aSnP2rJKk8eUHzuQUB7ftA5rCJBeZ9owQjKsXZck3VUAtmr5qEZNTJPtDdaHwv44C9RRPaAXdtrH7BxwyKcDbFJ",
  "key5": "2JxnEYgHLGiLxZGMD5YSkzAUV8icaT74jcdp4Upw8uqjyqv1op8X5kvgTYQSyDpXEBNkj8pnx1nbiqAeeyFz3wQm",
  "key6": "Pn85oZEYqJVjd5ZR5jpVjWTox7GcLhVgNWerHBt7PGYYNjRpXVrbcUSQX3xL241MUoFgFqu7Kr76snvHe3A877z",
  "key7": "3nRJ9Mn5qVeroknXvvtLfsYSw71vvManHY7sZ4XPagdNFQMNMdXHT1dh2YMo2tYMhez8Akw3Fg7ToLiBHC6c6AEJ",
  "key8": "4xuMowr6hQAv1vTyd97mNjvhJGJwd21x1dCoTq7zcECyo118eWGp8ubuJQfS7uuGu9FTuQq3btQdXwq4RH8btow2",
  "key9": "4isDRe7dbPjcHieYzcgT2B6j3PmRfRHRyaUfuNLL3TaNm3wUM2qyfnrKDrC6Z7g6kCGbMQSVb6s87ACcHpekqcXd",
  "key10": "5rGjQ6Vh8FRa3gqXmbfsbBgGLyTmKReRivXPEfuHFg1kPoeoujXjdVL3n2Ki3oLAPQSRzWLbKt9Sh4e66En7gveJ",
  "key11": "4E5FrKo9hXBajCm7nTrxvNujc9Lqq63yV63RbtAABETRwcD34vmVaatoeEymzGTeBPhc5AB2dGS7sgW182drzPJo",
  "key12": "4LEUnAzfYWvXWaeh1x8fnbehdMCuJN5RjXxU3ihRPcLxxywtSXqQyYzMq2SRhHAzr83zaZYA4hVrF5LS58Je7FYG",
  "key13": "6gsok4M4XnqmLd9G9TegFpEF2JWJF4TMX3QJtSEnRoxwYWXVVhvRhQ4LZPRytYAC6VpX6ZWg8yZdASEN31BV2if",
  "key14": "48t4CVFj6KurMiVUuFQFQeHjCPPhPS9tHMX5gemLyHoHP8Qg7nnqV6s3db5KjtSMThvT3AXL6JRSscVwt8BmaZ2c",
  "key15": "2egjdxkaDWhtDSe1eRrGccYVzduq5JuQEuPm7sFPufvqGig3USwqPcawAx8oXN7AVAmtUquvvwLMD4KBh8fQdyym",
  "key16": "3hRaVN11FMf7RUD69gkHxyn13LpMV7N9Vw9Eeh8MfannroqYkpHqXyfVTQ6GuWwnrZgnzjr8K38j6v8bHjjHfb7H",
  "key17": "66wenTcnARACCXhMPjXc9Ges1yzGPft6VRe2mt81UDRdP264EMNoFsoBvMhRrDYnAaCJg4UW8J8GV2SbkSSHG7uP",
  "key18": "3NCFCexTi3GiMVoKryUKjc31sSK6h1NCjp2wv2f12HDwwENqs8WN5voSHsTKvioaNEyxFvb5QAarDNTPpjEWjoQy",
  "key19": "q99aRWAFbg6kiRhANdgM4dUWXK1mhL9saAiZV2DxYBaVTeRxtFCxhWZ6BtgZmuAbkECZMX7bUoDUF688muesf7y",
  "key20": "4MbVNZoicsdAAFrMtoxprZTic182ZhCZcMQFSj1R1FxkQXxf6kZmp1az7tF964WVzdpHuRPB9ARALEwnpTPmhPgp",
  "key21": "2nJYSpr1ARzE5KSwFH8RuKo6sG25nPaJ6C9DjsJRVoqYZ1gHbQcD263VPHiE51y1Z3GjY9bUx2d5kR34ot2yp8W8",
  "key22": "39pPJxn7wMK56Cpb38G8nUn7HKRxjLNZ2ZAomyY8DT7ksA7MRssDgkLm6gqmrHXQcJezLWUhzzaBRjcaftrcdM8G",
  "key23": "2UEVMbFfQ9M855xyNAmtzxsUcafX7yt2pZwsjM4Fe2b8vTyCyUokRB5n9gv2Cv3Lh9mXgQSMiU2SueDPPmAS6ejd",
  "key24": "2KcSLfe13qYdWg9Wtn4CGmytabYPMeBTQv1FhCTC5BpYgVy8N8mwDPRvEU2Xo1WTLSfcYaT7JZJSSgJTZrUS1zY4",
  "key25": "4V9nym8rUxtjvfDrZZuSdLgXJCKoMsBbwSdoJbNctJwPJ91msA4LzW4cDP8VetBW9Hp1c8pTwDsYQgFv7VtGLPoP",
  "key26": "4r5DXCCEcuCWAPkx5KjMjgcnzkemB5irpfNSKauKsH86bDr3hiHNSfFwn82iDQFkH4rndHMNNv4JgQHizLJb6BTZ",
  "key27": "3Lp5cQyafFFNxXd8rCQ94hyw4RpuzajCVJUTxeAMYLfxX14dYosuNYwNsjpXNKzLzDKX9qYd1LPS6S5NbLXAFA5T",
  "key28": "3AuCE4FYzPdNnemZJXkUSTzWk9Yzx611G34jJ1ipF1QA8bQvvLbkq9Zy3x8ghXy3aPvp6oHyqbWnb63j3aFzUPQF",
  "key29": "3BkqyqcXNJCGuFRTzPwpeD3XEvLbFGmDYDNLipSmGV7zoZ2S5icwej9pmMJ1NkRw5kxQ4Eb8EAtLsyNT4JYXUgah",
  "key30": "48F8theJEby1tEYx5pBqA6YpdVxXZbw9TFBMy91hD38cYDV3NKFdzfXUNVUEerw7d81N8riT9hsGWmZyafPia9zj",
  "key31": "4XNp2bAQ2xk3Eiw5nCpTDss559ahGC5iiQHyQDxwur28dpK3awm1KXHfDp8jf2u2La8U7XnqXQbJTkVEYARCb7rR",
  "key32": "53kco4j7q3AAmvYkPmH1QtPbA6t4C7daSaA7Ew5DZd77sPYpJrwMkdQDbUPf9zDY1FEcqXNSZ6Rmi18JcLUXJxhn",
  "key33": "2qezCf5BM5A2KiXG1gF9hUFgD75gMn4dkLUyjmCbBCkbADmBseec8g7bFjvdgzKJx3bHgYotYmsGEvxKofEvxTat",
  "key34": "4MsWYioxwj8v62j7Wyn4YpZEPM7kK815NrtZtqhfdDKhSYS8GD5cPZAwYppBjDpN1pAMETeQTpCa8YhhuVBRzkGk",
  "key35": "2TtnvxoyTpMadDvfSZBUJ4T3Geh3E2x7A45XgK81zPPeDZhLsEGqwZBVJAkeozAadpJpPWrhkG7zLSQaLa4hKZHG",
  "key36": "4WYsvGvmS5XgoUgHtht3CztUHLYLkfuR7LwFkuNWwFX4pgRPuAFfSuMVgtbvmoyzXRsCBjt3DeXeAR8hvLKSgAyi",
  "key37": "BygTY8KYwLj5mmSjF6P2mSMi9yjvuhaAFtn38YndQEGFM2GWkQuMQ2Jch9LSDxvb7TkaVYXHXzURqfGw19F1Ew2",
  "key38": "gYC44EfeKnHiRfyhYAuwtra2WcvY5Rv3HyBdEXjD1bWv7DaRLBLffuTRhffGd6JsVfrV1vVV2wfekutbQJZ469E",
  "key39": "4aAYZLBK3mgapNx8M457shUNLToAtpk88tgyA5GthERqxZnngUBL5hssrWMhUQ7eygLVMP94yGVRYnhs6cSna18R",
  "key40": "42WQ6g5MtGgqPBbpV7zw7rMcaKVvmAhNp4rY418vMbDw1fv6npWFX2e575pTJD7tVrv7eoGEgdVe9ePyF8JJpBvR",
  "key41": "4Nwr7tj4LtxBxto8aZLseRBg8eNWqFaaqZ8b42URHfBSQeU4c47gykStwdDwa64BaeRVPXFAMFig5hxbYjKugZy1",
  "key42": "53MRzV2x7KCJEYRM6hn8fNVdLhoUqgvkywgPj5E5MYeb1jGhmB9DHCcyvrCFMCAB7Ne7SMcCPunrmXhqd5UCSHt",
  "key43": "5aN6dtUQwX4jDX8iDCUsXF5gmziC3napcs2LJCMbSmsFP27mdU3ut9YHVEu38y7K51Mu3tXR8ZaauGndJKsoAQj2",
  "key44": "543wsSvdzHooTw7Jhqqe8KMfLqvTbqKXFPaDo67iriZpmHZdzmQUDuCDQsiVHjssBu6KAuQ7U6xPBgguzdV5zaKK"
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
