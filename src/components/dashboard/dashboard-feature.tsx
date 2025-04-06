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
    "3x5ZXmt5oQXAn7PthVuG5LQwYgPLhjj23pxWThytsMiunNe6qZZFmEwK4z26QP6DGAJP5tzA8hgeEqBfK3EGcjLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XPCaPDWbLnwnzq1uGhMUQJPJZFKSxwm5FHp37nZr9oTSZtkfRLRUEzMagBuNzp7RBTcX2WLPqndJBUxFJRnjNgg",
  "key1": "5BGvpzquyUjvgsnQRA7j6Ys4N1q7e6rzrgkvN5QLxLdo3SKpRCDSYCQ7BeHFsGuokeANKo4HqKDAtvujZtARmkCF",
  "key2": "4tbcKd89jDJNJNMnX2n7CWWNPUG5jeL6NzuZz13qkAiy8cZxj4NpQPoncMvXrAy6KPK4ysf2oz6krfjh9Zv576MB",
  "key3": "4WAdJYTbpYGLGJx71eDJreyvVGfAS29B4uW73kXcYfkwdzZZdZe2aWRKHPtwk1Tj2tuBNjLhW5Gn8ymtbJMhLqkR",
  "key4": "cDLrCXXP9eH6FKpXV2rpNMRUPuLfNyVATgRbeqEFUMcE1gEeU3uFxbPaqdGfYP2Gj5xwS4hENnppe2Qq99huRGC",
  "key5": "516nNTvpxTcxDFdMoTmd1oCzRndAmo4427bEQ9cmSPNbHoz3Pp5ZGYrRdCmon5WqQZKTBizhNadwPpHkTikZQWKb",
  "key6": "2QzJcYSscRtQSHKtxYG8eMUL7s9Qq9XSu3wA6JuFKskYRBr6BfosUL2kb7nP5q5oZ6acmvgiubrUU5b2HSzqo2UU",
  "key7": "5U7pS1S98kVf7PVhce8hQmUWzY8Rr19VWeEvcCm6UXXXpuJdfo9x57ZYsFQ1WFdZtUxTHbpyGLNo9i9Unrs5spcA",
  "key8": "5nNm3fhY2njMG1uBfcGBECXf1UqV77S3PdQRDuGV6Dz6Y9cQ2AZhzjkmCJJU3tRQStx5HVZa8WM2CC8X2WaMuFAk",
  "key9": "FpjMeBF17PwDh1ifrNMT7r14deq19YP6Uh7j4AU7GSLcYCmDMofgtQymBQNTtiyPb85pVAxcFjQHovVMRiTGgja",
  "key10": "4Ch2Kbq3hw2SdfEdV12MtzDcHBaMi9uB9mThUBzW6qAApo1pVebFj1LeYKLvJmfWgpGcXUS2SNzwopV1NhbEhYVe",
  "key11": "oGj6MKy9Ho9xUWiwovoZQbiSuM5c2cGSAc9CTn9sQtwt4c7gnj8zJHisfj4xU8yMWzdBNdU2GjgojLFeLUM1mm3",
  "key12": "52ED8E8B1cqPbR7Rb7R46DYTsuSA6Sm2TozPp94TsJDvwoz2LtbBpBc5wCQFKzt4c3TvuM18PEC2edJAuPMk2HhF",
  "key13": "2oALb55tQ2AS6LkamDDURChvBgKzte6yLd9BJes3inmG2TakWqGG2oMg2MckBhR7ZppSDDq1Y9JPJAGtg9HkX2xe",
  "key14": "2cum64wNhLdwmvaczxWJQindqa4g6gdFsGDMP5G7yqW3N5jCNTUvtd48ZE9BuYrsnaPsfRRSSnddAQSN7tnqfQGX",
  "key15": "3FWDrd74o5cT4tDrHRBCbjxaPVswXh8MB4kBfYphyA8H4ZVvBy9ZWdtuUVtXLG9Lo6egnKDVsqAFcC8ikrn7tc2J",
  "key16": "5hC9NAKr3W6aTpx6P3wwnHvVz5inZMXbMHWPRythqc6NGGbRbnU9JsYbqF6QWHi5iLTWVGVMeUYxmyx8BDfjpJ36",
  "key17": "5PFTPHV7kxAhaiSBRrTrkDJWAZ3pWF9XNn7CHXGCpJfMHBkmEQ7PNiMZ8DdSwMDpLyXzf2j4srXZWgkJrNYHAoh2",
  "key18": "39GJ31JCwq8fDW6RKYq5mWeDCukWLmesWQPuiTGbL5P2GBzxf72XNsCUYvBEtPTh3kg1uV1TyYRgMrKcE52FZFR2",
  "key19": "3E12YbFcn1AG83A99E3rW1VWzhFPGhVjhFjfKcvK4Txc35t7Gj4otHAvgD9CAJwLBWdXz6t3bzTBVqi2tLmWrSxT",
  "key20": "2ThNyuHCWYMgpEZRNafydidFMhz78cdXdP8W11rwqnrMFrshQkzk4U4G7jDNotcFrCkMxFpyEMoSH1dh1V8BfsEP",
  "key21": "5gGUwWN27UzowJdsPmZJ4J4UCUasVvsAzdeBapXhD3qXNAro5pehRuUKrUjFZ4mjQwQq6Gt2hLtU9Y5EHsTo2vWi",
  "key22": "5MfEBp5RHVXcrwcVXbZgosdXkeVaprqT8bXhrGkc7HfjeVhtJ6PBzZRujHQhRewtwGvwM5RgKpBnLXLMi4ww5V9j",
  "key23": "3AwjSiXCi9eF7VB78Hqhgs3DEDSD1iwT8KTB9nkNqvC5y6VNDxhp3ccixHtSozDSLRmXJVYR9GKo4rapa6fH1ebo",
  "key24": "3VwDf1nwH2E7eQgUcNmcvDX9hxvgxvpdSMmQSJZF5J4UGqUa71obMiFUrPQpbB8fKd8gMH8spLzw7jEkUD48x7Dh",
  "key25": "zKd7NvxZTBTapqtzLdyBtwGmj2uBxGqiUaUa26x1iJxMy12HqWFpnzGr7VAahLvyD5qRhyH376fLoaceRdSkVbw",
  "key26": "MPigK2yA6vpbyFSRAXktpk11ym9nRNZ784udGPqpD1f4ybqCMxF7Z4haUzcnbF6d7WKtwYb3eDv6SjP3obBQUyF",
  "key27": "5JAH2LY7nmGQoykXoRSGHjap2u1wscyHYmeR7eTNuCR5MRKo5GxkZmfy33FG8BomM6jukcm53SRrPNPkWbjxzpyK",
  "key28": "jDC44YkmwoA1XQxYkTTLBwYRrKMEpSZCGnAEtRPjaDWSEF9KrnFvkWFremNUrGaR9tSo9CrPTk8L27zfnFbKtcs",
  "key29": "3UC1Uh8V26NE3qytBWrFbgB3vEyNgfX7jLd8mr41BdnHNBjmXtozo6CJ8ZWwfLVH7E3Xx8pCRVQ5vb66g25UTF3c",
  "key30": "5RGD3k7M1GbXLcHfdoaSzDLotZqzuBmDaeZYdGbR37oSpY8eo7gQfX1WoMnkU8LKNhkpEtZkaE3qwUyya3o47gNQ",
  "key31": "3UpYY8pmTXUTckjaRkKyhaDYVqLroVVEa7fnr18dfTKWyJ4dLs9WVaUZeGCwKvUhdZdrVWUVKLUCNxDZ9zRJ4MET",
  "key32": "2NuAH4n8xCWLqesCVivb34UfXvZjaSDW6n7Tgm6YhEvZwUh2HjtL35kFN3nHswcYaUZCGnShMahmstZyqfhM6psh"
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
