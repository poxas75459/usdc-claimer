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
    "4LabAbXQ7CiwYUKXqVCCeo3mtjb1oedLdJ2cMF5VbCVwBZXZJVJF564UnZagK2SGFicw4xr7F5jrSZd4zPD7q6yZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26W7H15bcvnp88NjhEpQpNQudUci7C2ByRG7qX15zGunrQnZR8fjUtAQJQj6VR5nHFfoSZQZ9DGAMroZLxgvoLaZ",
  "key1": "3VkBjuraMpcffcb6LWqViUHX5L1v2e5vu3px9KGWYQa6UCfGdYYpkGXM2mYCvVDK4C3xCEsHinERFE1arFkKdFjN",
  "key2": "5ocZmpv8d5edRiwFSsYCfiBjwKAwd7RV7c6YukysAEAqsgW6eYQJPESZXRLgCNK3HFU5ip5efdWAiNGbs9dQ62Qv",
  "key3": "4odjZrJo5ZDGfv2Pu6BbeP7GFHRGwDg1so6ZVXSAsDmYBWhUURtnvtc6SyvhyKVVkPe7u3nwC3Diok54iTuDh3Xh",
  "key4": "54Mgc3hzbA1FDMrrKMGUUfDhSCM7BT2twYDPJ3HE3BnXRWwpdkzXNSYvwosbue1rutTogMPMceTfxWGJozA6U5SJ",
  "key5": "3BiueQ8je3nTKYxbiSy8jEvPNJngCS8VrX5buNirTpymWDCrmQXjDFsoNFox5fxvAHxjWG1b8ndYK8bmLuGLHHXR",
  "key6": "4vcMXyeLCeaqPuGiMV6RqeqHzcZd1KJwqMjoToAuL3zbtDEv6crTet8vvE2xid1cWVWUaKKEXTcbsMxMLjJHnwqa",
  "key7": "5dE8dpe2X8A6Q2b41LoEEd6adaFjZxqU7CCGU6X1jdHf8uiwa7JydRTqUvawtyUtvyMtZE3NrkLwZGymbC9DpkgL",
  "key8": "42xs1dQu6fHV4q2bkyn1F81AnG89CKjGgAfcFZ1P8BjJAwhcY4dwA1CwpqrSXwtB65cDNmfkm74JDmmkMFLFvCaN",
  "key9": "3nggAzpLDKCWyPwJQbHRF9yLCMG5NX2ZvDBWPbWX9hXEBTq49QztmJ43EKQKzbPavCkeiZUdPDszUgc96ma8wp82",
  "key10": "2uL6v7t8UURUE45dz3wANoqQjrosv37wqhyqLjHnpsEBBhwZPn7mEUsAnHznySSfumqxkaoko3C6EBYoybGKofrf",
  "key11": "5K8EekwcPyH56cj8aP6a7ZP1rgNfUDtHFCqvzJkpWTELsey4RCj86khfQ2WfHJdtFjbners8Tm3yJdifktWxE48N",
  "key12": "2NEPDGAQ79tZSjhtDz3KRgUjJAZpDc2gCXyiBAVAs9e7Bqt9vHKncUEhghLy2RoEJJ3C5sM8kNGgTuW7YxcgTS6E",
  "key13": "637mXrZnbHXE2ZmbYdBdRB9MCReXBLCrsZ3bU71urhuk5gFuTxACBAidT9HSSx4J8Jt7omtnnoCgqEdmDY4PZMxH",
  "key14": "3QD66FF7cHyn22eBiYSQpMj1wnjfFLVuFUgh5rfLpzBkbknLTBY8ivBA2AfsekYXRiHNMT3s4ARtoQF6C6rWdxvX",
  "key15": "3rFhfUoRxs1xwXpBUMudVVetMjXa16ooLmWquCVEguMqYafgmKEnGctUC7NXWWVRVLpYbiDMNBVGsT5QRVNeEVZc",
  "key16": "4HEKgGyyxr9TaQT4bb8hMNRdtGdficedARumRfzotSGyMMvTAqsu1bjwUy3C8H1enHP7dp1KyxiY2ef8eBTmwyAs",
  "key17": "26VXSr2hu2DMZGJsecKTXtzsFoqjxVQpiUp3Bm82MD6dbTwS3j2BzmfQoqed6mTJesG6sTU7VXknHr67E1zocVZY",
  "key18": "2cpihfB5hG5iuYGJegy7bhqgsL1PA2wnGR7GP7U7zYZUSdmvibpXtgDMVZFXt6yghdLCqBCXSAj3FFbeg3HzpueC",
  "key19": "Kjy4RKtCf5pDELwJHk9fMs2Mf3qzMoZZicyDpTt2nPJSHgV95FXpNVUwCuqfbWNnHXpgwsWasjSBZDp66ieq8dV",
  "key20": "4tw8tVptXUYo4g6aJqvViYgUe5fWhXjNWHKxcrM79CgPgEj529EhiqXGeVsJ1Za43kdx33SnW6pa17TGo9FuMeko",
  "key21": "3XUcjvQYc4WoeRWEfAQ25oHF4a9sTVqz7rLgaSRmPoeRrfVNEon2bWFuX5beQdXFNw86gF2aj7tXRUw8H68o8pnA",
  "key22": "4Nertds871YhKwJGua8YT8s73AgAHR1Sry1qqYVPrTEdnSAyn3YEhfYJya8dvK2fo6ZH4RmoKYL2FG1w2Kk6QKK",
  "key23": "3kDLEVNxVXSajFbngswcpY9k3xsu7NWtJzZvcB2tcG4nWnTXM2EXPmxwRaVQ9t8moDQiuQugQiXTbn7zGxefFBNw",
  "key24": "2boTrGxjxy8phL78GUUQXfeFEQHxTaqH5R9TjZb8t1aqmovReh38xkvQYwn77fcpp5BeBJ28dS8i4XnWYhshQRaa",
  "key25": "5Mdok5fvanSEFuej1fiHutwWFTbsLsnTYdmmiRg2Cjo7MwMbLTMiGqD2faziKkkqL5k97eWVKiwkdU4xaBFE8LEz",
  "key26": "23Q9EZKjtjVy6dmBVH4weofjR7Kk6RxLw7hwVQUtd7B58Ae9zAs7czecaPnhcMuU5xjL5zYheuPiENHZYkoHJ7Ec",
  "key27": "27BaVdPLof6GN8nWi8mqVqY4i8ZC2QxmoSv4zXv3ZywcyWBsfPCBwBYMsTDN7nuNwRpwT4Y285mM7h7FzasznHMg",
  "key28": "26XyZk3QNDHKsKwR1vA3jQTktYcCeHLS7Do9Fd1iVESmy5yssif216t67mRwRtareev1ZUCsUR7QdbJhAUzNmhSG",
  "key29": "3iWQBj1yk81tDsQm6ouZ6WxwsEvR4i5Z5FpVCjQiQoGCmz3CXJrHxnLZVeV2RWkSvUGh6Cu5huhf9ibMjmfoPna7",
  "key30": "48te1hWS6oTMCxt2tSb6ME1FgFwCAE6LvMNzY5iH8uAPLtSh2ucC8Gqb16mBFfQgEcwejgkUR8GLuB3DGvsPRTnn",
  "key31": "3HqbTHQtXJmy8nr1wfnktJAmETRaNapdmkMVvSWuW4LEJWFjw7LVMxzVXu5D7vX425mZwo3UifZA46st5EZW1t2q",
  "key32": "3q72oLjA5d4ekYGt78zbgsk2kuxxk4P2JisnV7zX5iQTEoBGbvtmoiJ2i33kYfDonUdRhxfFJQr1AbH5nh5nc1Ma",
  "key33": "34Yte1VCMxHNfLKZe7YfR4hPaZP1idkCprB9PwVyRv78pTd91WbLFyD6NeRZRzSY94j7eczw8gFbmEvv74X5JExf",
  "key34": "2Qrze71TfyqnPdRNzsxTVC8ozecN5NshrGtqFNB2Ut9EHkWpoZEYDrRjBNXgjx4w76H83F6wvYnCT2R4k9vm8bfE",
  "key35": "4qSD3Lmhq6uV41fG5e8tUqAq6nwW86tfsBv3MZrniZN6EorLX3xBqQWDSTkjxNPtwqzcmdu8PPyoMCjttNyUGNye",
  "key36": "cEzNyFH8ncmdmV97hcoyA7H9djPN24mdjec7XeJ2jLMKBsSy9rvbEwzTvWqQjwzciL5T1hResWrwgr4eAR5Uqei",
  "key37": "G5ePBYqLqnVcGfz9uvMx3SE8SoKVodTjnGiGR2Rg2fXwLi5gS73M3DceSGkSyRnfzXjChk3PxwAq9MFs6V3BL9d",
  "key38": "3RdnuW5FMALBYc81E9ATgbdYbJzJAMcGd2Gj1spxu8t8wbB1YXwSw2FjgV6U9H79XA5UAoXygopkSMkMLM8o4xMv",
  "key39": "3sr72zdmZvhdKnDGMfoAGYuD63HEZGyVJmJ1zYZtL3gSyjxnN3y3GAZY3TKR5BCRfRJStRd1QV6KhVPjsKKPUpCD",
  "key40": "2TBMvHXuvu5uiCghtnsEGqwnnNzeq9voa4raUPamcmdSLHSMosChdaX6pvU3MPphXaGSk8e7fGXtaR5oo6YZqoY7",
  "key41": "2jD63mZVpfqfu9SEwjFVjatkg5mb4kqZV46JUVKUVyJYr3fbP5pu5zm9dcmAHXFtSeSGcMmu2JRCWp4RczvPFbAx",
  "key42": "2mXRg2kvuoN1A6ityoAfxpVqpoazqa5W8bgJEAUY59VSnKth9sPDrs9oWD2FehsNAsBt414f73aDoEqJGbYY3D8L",
  "key43": "3mk5mPnJKnPGqEs4UWA3ndyBzeS1uxEZw5MMFUWbkgzZhDJNpoYuXjBkRDnhKzgxVM5zkM2y9TvpVAAWQbE6Z1C5",
  "key44": "2T9yyi6KVF2MAkCJ9VsC43j5FneWHn9hmpBXjsS3Xiv6NTC7eKZq8aB2B9ZqEJDNzAraqMzyWzcGNzpJQktAskNo",
  "key45": "2n9jvv1kTs3TEAfwGGY9pcXpaUambToVbiKT8rv7V2uWRr5wfjtdKXbJtowNs2YvXtwgEZXtL64fh91rUmMAdss5",
  "key46": "5sjTFWoijc8TgHCHkQxFuSQ6WmqULuMh5f29MYkBousXwGaabTU2PtHru6dTjnGrDNCF7GpNEc4EcuqmAmxgMaei",
  "key47": "381AMpiDYR3ckNtxqLXvyeKUGhe4Z5M67iH4g4GC1ZL97QYjSuspGN1e13Ly7qQSJsCxB4VXKoQr8ScLMk3mLN2w",
  "key48": "5o58j9w3GY3faA16NqRs2H6kY9nWPtUMgfE4T9vhRQ1D3QwrxmeCFSHeYgN9WCXRqEhWu8d43erV4jMhrSV3s8o8",
  "key49": "5JSLbbyLFvRRk7MCjGxrBhU3jqNdwJ4JdtgZEgUs9E84we7TWQnBi9KLVqWCuNdDbASSjwiQFmJZV7mcoNQvnTW"
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
