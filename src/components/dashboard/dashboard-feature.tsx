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
    "2REhWWaBUtKcMdygXuQnroR9DafBWEUJ67bXSL9BzXC1jht5Ndo1TacafAG2nXsF4a2cKhWdsFuRa6ToAMeZnHw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TwDoS4emzuXNw7fSGJ3RUYYATnGzj3adMVN25gVJgKrSRba5YCXUecxem1VcXnghfXt2v9ZjJFVQryr9zu9YBfd",
  "key1": "4gpCPqggyHeDhPjD83anEshncGt4pq8ugQyzp5UwCXojhmHxX6X9bK85wAhZg7mUykUtjis5mhVroZyknuUSxfAW",
  "key2": "48wMcBp4QoXrTfmYktyd8GdKexuR1hrn4W9DVUaP22YnieJBPHRLjJzAY77afEUujNCR5mUCDYycyf5m39tiQ3wX",
  "key3": "6fjDgMWQYN58UtigwHTVzhqotPRHM8Qxh73xmdvUbMxw3XCU7qwRysgzCVN3WKybzFF7U33MC9KHNofzmmE1JKd",
  "key4": "2BaLkhXwPFr6uf9VdTygQhhXbZicZP95PACPfKprerJr27h32M6rGzCFU7ToPWMzmtBn68AjN3RBaHTUBc5Ln68i",
  "key5": "XKiqq7Hy4QjFqpFQ1LdDAv8FZ1tyPWRdXBBeTHNRFHbJtNrKHMCk4iUgcB5Nugx2bMDEXrDXG6YcxuSr1jGmkzW",
  "key6": "2fi4Fxe1HWjkYFEHh4GYEf2hczyN2qKi7F3BuLwVv32S6c6LwuRGxvQQEmQZA2X5kLzJth89jUEGfWYL3Ybq39wC",
  "key7": "3bJfJFKQu2FEfvpoK4zEkyt6yfH2y4LtTP2BPP4YUifLhyxJgaUDgLAzdEmoy3GjuiHjJsT5sS2CxLcowfrvXDF",
  "key8": "37UZYzaQUXYKkBvP2d7PGuiez5pyErz2yr5jRKsADYPapts5W4DcMhnAdhyN9rwQ19iFwFhiGxUvMzw5xwqTuWNr",
  "key9": "4Tqio5dajAkcYZq4ca1fCxcbsBpqxkBCxWiR3AF57uA35N1Xk7wqKCiy88vY1kxqfWPzNJsLMo1v8cdf2eYaqRLf",
  "key10": "5NqiKSLBG34o4DbaPGKeAxQoMLvUtHJh5fJxHSpVw91A2Xyg83yZszffmhtkBc6x62UWTh3cxQoBeDzCr7bTYrgt",
  "key11": "4Pi3svPe2BHHrxrXRhiAh6rrEexicNBzszoQfr3Nf6mw5bfMbimv2dMjFGnLYrCH3gFQ25NTPNfJp3dvbvZcUQvQ",
  "key12": "3LKbBSMgSgYzRsRWyAmxyoSGv97EPrFtYGc6mXUaC59yLFV1mHvVjQn5vsaB1L7c4mGPE6tNvx64xbFt7QVxBUY4",
  "key13": "5BzaTAzK1eGSERc6dJMyk34v6pBJRMVE4RELnV3ZV3B2TKY581HfL8KyzsKJNg8TuCg3fyjxQvweRKkuXXhwQXxz",
  "key14": "4JiA8yRr9hND28Wi8WPKUo7T9apHsnWKvjTFEkRsE1UMeisURL32um7nkn7oM65WBdz5rCfqQBBH1M3TtsxsYACU",
  "key15": "xhLCUr3fr18Ky4upw5RGZCbZ4Ue1HWuQnD6iA4B6yEgZyEFG99zKgtc27EZac3fCsktrpyG2v4AdsGgHSLwYUX4",
  "key16": "r2DrEhPRyRHPUYwg2FTcJrvsEhVbNjnKtL15paL5RvyGTdjLzeNwnxoZPgKLCJdV226cafWkgThE4nzn6W6XC2P",
  "key17": "qLkRjJ4QtWGMY5kzYYKeEuSzcqPFDKTmo9dBb4vWpa672kCtWDTNVoSdpz1ytbNHgpTeFQURUtgPgM6fRi13s4i",
  "key18": "3PA98ZqBM61J9HHX5gShGjJXo7qAu3as4fQGHVxnimVe2L5S1hsX5V9d7NLLFHSqLY12BF6LH6u1tZ51HexPQ1w7",
  "key19": "7B95vTh2NEH4eGTJGia9xPb9SY5j4UX6XsYv7Gf9D66wTFDxF5XTyduCcjtZHWA2jiexRhVMtJhdW5rPE2kjabt",
  "key20": "LHjY3CAuZxqx2nUB5Y1KJjVHDKPYHSQwvxurRRM32QbNNtVtMjFZXg1FtaurvVmHKGoQX5uax5ya8iGsNvkqcCp",
  "key21": "4m1dRZDDM2jPvcyuEBkFK5v23rankGPkeCvYAH1Nhg4AP4BUDNK5uNYWXY6GQpvKEW8dDYHjrvHnHR2RFHv5YGY2",
  "key22": "uSvMiVRDgNEFXib4Wu5psENitLfYpHZbd4bZdX5t1hfVdroEMZ24qPSYQzp3GTYfS7C3uTKa2AcshgL4C9KKpiu",
  "key23": "4LmbW5ZXkag42KeFD7r27sVW1HKGtJYiBb3JvhRyhuGZLgqVhaCWUMkDGXSGvEbx6hcUKAgTZsMWj5ShEZdkJAma",
  "key24": "4ejJs5FXXyzShrtQrrNgUqmqF3kt8AQP62cEvLi6BcR7zLdNuQMPz31WD4nXaEGS9UHmrj6S1cDFN3TnsULhaoB4",
  "key25": "3Z9DFSJHzozk2LY99fV9ysT7AEh4YeD1FaFfgNsuXmMVPN6jf8APVpMPyfAEoeZZxYdzqNWejhgK6M9W6TUXcs3m",
  "key26": "GpAVvkqTTQjpn6P87P4FRwNGEbVyaVTQaeMaGhFkjb6FdCy3qh4qeVyvuSmP5UQZLm5PCEYXT5k11RqG1o77GiP",
  "key27": "4KFoyiE3ngkb4yPnzTNUJVg4XAUbbi8SPF8zfKM6n8hM4smV7pJqVXk9N1phF3kKUxvpPAGDG5jtsQeKRaXnyeEm",
  "key28": "5yxgTbYMSDqoevrY6xcKSQMeGm5D7GjAo55o1fE2FonMbA7xAsdPtJLvWfzkqCf9FCJQvwAWFzxh6nZRc3ZLpWAV",
  "key29": "2QQqaCfqP6L2spw6yUAmscMomdYCVvsZukPj9z8YauiP7wkHDooSizmTfMvgvhU2SDqC8rUQYinn7FeA7w6MymDY",
  "key30": "5U1EryCoNeRohPsoqk9cDzdYCnnq5dxnMn1CqTYqMkS7G9VxrxPgW4DCFzuE7wJCuwaC1wmAPVufLVQHA2kq4pVh"
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
