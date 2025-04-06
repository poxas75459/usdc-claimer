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
    "3qF9AkoC4yJ8FwPPgRZassX4cz8Sph15UQn6FjGqHrVhhnPejaWB5H8oMBdNwucB7yhhnB1hFqQDPQyCu3DieAAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FLrkqbmvYx2uaPP8zLrnA97aupRsT5jBcYQJyn2m8FgU1uxWFg59JWrvv7LpgvenZEWghPXLjz3bcizmszqtXbq",
  "key1": "4u3cPkFJHazQDcCL8eNzENWcuhd1pDuooZPQWi4ahyJ1VT4kYEsA2rHqxjgGNw2iJ7Ns2iMAwUoh3iMacz48yAmR",
  "key2": "vKshoJuDefwzWbt7LLZ5HNZFT4uuE5LWwAGzPbRyKRVfWu7p4dHALnS9srur2vo1fxQyGSD4gHk6NWE9BoayMdk",
  "key3": "5jzxVkayUXdtC4mGA78GLBJDxWCfGAppWhabCVLLGLBygANRRdjVsV45sZhiuSP3uKHtEqnZiW3Xs16GxeyoN56m",
  "key4": "5XsjK9oDE1MEuK71eLtYs92S4fUKESpi8FPAVzNke74JZKPXefqP3yD5cpJyfSdWMBYaPojuuZ4P2PxuLCKpXDMf",
  "key5": "QURx9NUcaHQkXFEeDvyNX2GtRYFx6FCSN233SDP5U53eQztWxKa6isy9cgkt7y2XVk7Co6SF1LPzuF5zY57FcBs",
  "key6": "GCyxSsSVWhjXneGSv1QacmLcVJncNTonQUHruEdv6i9GmaNT1RKsukoKjQ3BaRFDFzdscrGZot6fGfG7rfpKNaZ",
  "key7": "2H4e2rHmBgmX3XikL1u1PN2SaNFdVZYQ6bFLBtD1wHEbd3nDFUZD7EJ4GD2VtizbCCSurpS33p2XtdwCa6VCTViS",
  "key8": "3fxYCovg4QLN5bgeqaMuN5C79mzjiMYg4gqfk5tyAPv3VHLDuXNE6rSpMqU57KH5ZFeyc5tBW3Wv6PNz1rVLqiTd",
  "key9": "29vaf7m6V38HbYpr8wQa4qBwcCyWoqkdE6BV5g4vqn7arFTUF4Tyms1bsSyndVwfhmKBGhXY9utNpMJg3wQcGhvm",
  "key10": "53EQweD7HYQRq7NLP8j8Wso5jck4fb6nPbDxY2dPwcEx1A2BDasuaUQeaygW6LrYBcKWP659fV72uUVs9Vyv1k32",
  "key11": "3cJ7FwEeaNg9i8LLjQ6PMiczdfHm32bM5tZpcvQaEZVoGvt2dVyuz5nrRRjpDtTPSfWQKtpvZcP65qYiqa3JeSsw",
  "key12": "GwTA3z5DKgGotN7Cfdn1ZEGT4exDwehJZeMB6bNv4q4Zo2zqTNEreze6tDvGNG6jLXPbHxKJf3SzZdSD6E77DxK",
  "key13": "2qeeUajCx7Z4HTAQn29ZSj4vWJ8fnMYknKWyiZEVDkDHYcRZhYFVAgY5Fb77uPhke4Gjme281JTjoF71RbsSU3dd",
  "key14": "4N1uRgCBuRcYGEa8E43QJGGfPJhwk4NNGJaPJN1Lchtbi75XiZDAVcJPuZdPk2QopAapbjiRxxWB2zLxPtWsuXUM",
  "key15": "5oyHjw1wYFTRgTRLocA9Wd8MmwS1MZnub4dmhn3UH9it8SEXVSU3LnYtB1kJsMoAEKnXpBtbJHLXpEUPTrfCfMRr",
  "key16": "3RVEjtJV84p69M5Hw3jYGWWhReMdvMRY7ixo6hRzHFXzsCtFW5ENdhsUNoTMfEVZb3jD1RrJsb3p1L1fPCripQaK",
  "key17": "62caT4q1BVbCFVpfGnzsZCZvaiRd4dMgh66cGa1kFM9aM8PHf9t89xiC6LWD3waUpzAr39mwvGJgG2VoW9aZMmUa",
  "key18": "r1PqKrMRJ6LofEEqBbn5gDyLCAbsR5MkmP37rUqwBFiYXmcnmAA4fqzvgrVNRo2xoEYTsjir7mF4mnQ7T2LVMN5",
  "key19": "3Gawnmh2uBhf14aHHhGj8fMhLerdQ44MZkBZdqKPiGMvjyTgwga7j5EXRufX7QyFwctebMMV7hqdY6baWyeu3qVA",
  "key20": "2WncJVLhh7GuWvF2SHfbXsPfeATKGvgYxrVoL3Vy9FQ6g3XAG9br9Lwadvy8iB7CqFw5qvxUFP7ixtFMiGNiRkFx",
  "key21": "36ukCMhGA4R6PPx7E6qVMN9ZCE17fxXi29wVX8xm6ftz2v24wQ82ac1N7sLnq5x62NyoqK8cuAZES1Gyi4r3at1t",
  "key22": "5mi8RWtFrtTu4HsYcqgi5zkdbYK1MR3rVp5AjQXnV26ZauAmkDfYCq1m2ohfSM85UH5dExsTGHcatCArNF93aTcA",
  "key23": "51cWbxdWo8aGGfNg9rA919PZGWRyYCcQTuR9XBKyyEuZTVNZCWzsyMGkQ9Y4nkWXH4cYSzi8pf3hDjjVXCiKRTUH",
  "key24": "5u8U8R8VcyZT3CoJBywqELCw5RokXMQzKZnDVsiFQ7KofYoevGv8RK6QZRN4XP6MLiarLae5BLJZN3nEGdacFuVf",
  "key25": "2z89bvruxvZ7ACUP3WCBgZ8gSgJ38txNNwu1sj2BKmUkpFD2ChmF7Qx2vVyEqY6dYFQ8D6nUTpxYK3nfnXt3Z8of",
  "key26": "4jvaRYQMd7EZupHhUYyqc3459SfZdgswjN4LM6z6HycXw1sDdxsR54DfZo1G2QD2eS57xqrtqy9ptNZ2yiFiVWDd",
  "key27": "mGBhDzADrNmyyZtrtEXe4oLNy2w8LPnaFR4vSaA85E6vEYuEZW7zY3KK3Yd4oHZX6feKYY7KcvJTLCNZT4gQXtU",
  "key28": "5Eh72WrcaALoQqbtvw24AhhJg2eXTU5wwYvWx4Jj2TJMcs21xsxwiQcjiK1Hv8YYK18FXVwrc37MG3ZkywN7Gj1v",
  "key29": "5Va7QAhpAgiGQDAJWVn4rjx5gnqcVoSiqRckESFnLahqiNJFKY1NMmaj7iEWJEP2nFxc3qoG1aQtZUVprCor4Fhx",
  "key30": "3Y2FSrasgWdE1j9AnALpxmfEa3UzYqZkVG6z983bhfi7116ep4nBFzQXdrbmiHnkkh65P6gk9Dy8YWp5yL4KXysX",
  "key31": "4KnryAtZZwe4kxReArzZmYSHewrCD98PdSAGfYQ2LNSp1wXQTjZeF15M44G7NgACAwnAVc5QD8QqN4FMmGPNww27",
  "key32": "4eKxHtP6TgwHyaFkUeuf8axgNW69yY2zkqYJhhkrSEmXVTz1pDpp7EwguygDtMEG7NDgTLnmoaHCyUBBrRCySTC1",
  "key33": "2L4xwMVkwPXL8z4Dh84eAgqrhnqXwW7wKFY23WoWdZWfikgcw8p5yGEqUhvNjU6btfTXZ9kSHVTaLaaRH49TnHjk",
  "key34": "5inQwYy5nTrGFgDHzwj92xCpUTS8mEgUmnTjR8sESgGmFQLbx2aLrVyhPf75KyBRumcnPwFpD6TfsU76FpN7mrve",
  "key35": "283QiaUVBXFx2gBFDGnV5wyobdWvhcjYRtL6SejGCf1HE7ZS5KQbkNH49DHZxhaAqGr7mFgXSE4efZRKnXzBKDtJ",
  "key36": "3SBtjAPCESCDqVjNgr5g8TJXUDr2jRotB5eypegQi917BBxpqVVBaysBSjricHGbj4b7qmFteUQpmmESBvCBnjH4",
  "key37": "3nbdVkawXntA6cYQkz22XVfDDRwwempn2GoKXcjp62bBcsSWrHmzkiW7ZMDS8a8sybSMBDdAHTQnpbjKSMSUgx1X",
  "key38": "5mDAZtwRsJB19szHDs4mwc1iea9RJHFm8Aad1UqZkNvzEgCKZC12VMRAXBARrKTQesdyNYvdcuXGMfAgzBUDZ5u",
  "key39": "2wsp3svbtBb6KUdxqRbB66SEuBcHevZzXDF48HFQpCD9X1hYYg6tt9iq6D7z1BbSirRmiS6XY8i1xBBrTXLSxtpU",
  "key40": "Eq3XRACnDmX1B7LPjWYPBrFFK5iHnAodp7zVNqFcJczNoGi8wJbaE3F9UnQnQKSZegHoKC1r2BHpFibrsueLiko",
  "key41": "5UbpPoiGaFaCAuY9Agts9S3cVhx9cPdU2UNME6todv9W8Am1qEffz5d5z2aB3THQqVnGVpV1PxTg6iYibH5o8yxj",
  "key42": "59LaxVcvyAhigrj7wRFnzp566UzrTtjgmXcaCbLfHbeDsU2MaibbFRy6jMptWjRZpmGRmKb9JzdYjUD2ZyKbkeRx",
  "key43": "2pduMovTUMRxnMN72dLqxPpGJMYTeEdnvfnUVenNbPmNy5HmLAhh3L1egV8DgDY9djpwaxuSzYbZTE5Y8yKT4UjP",
  "key44": "6eVCTw5KTeitvpi88SusNxfWBN6mzg53WzTksuY5N7AhHrXNGEZMw96JK6QmUjXisckAmsBKEGbw1ZtG9ig7pJ6",
  "key45": "396CQApKJ4udkTMq4BW7ctHiB5kCemjqSZSjBn9DtrfgxNShCQ6fEvp16wze94QpJL21EKT5U57VUvaEu57nKWUx",
  "key46": "4KNEUHFB4k8SGsNGi7SY9CjJXyXYLKH86EswusgUN5G7izD8JxcJyY6wNsDgWKMReeB2xNnaZyUTvxBTy7z4FWhU",
  "key47": "SgYczA5EuTBYbLNWvdSWFSgcf5LBwKDV9q2yrYDyUmWpa1gHPKUFkf7z1gQGHsKkDX6dErjUmgYWNE5Ur4YwVV5",
  "key48": "3hMdPVCFG7HTy5PJAWftvGtD9a8jcGrucFKFsBwLTyVv68z8i2vHmTp9gVC6odaJTqvyvnueSgBPQEDxzhcYSQQ7",
  "key49": "5Qb9KjbLrd6uNsnDpLxYxXM5VNkwB3WJwFDxPUersm4Rs62a95N8jwyxaCuUNGDf3UN3KiZwuSdhbb2bY5fEaBs6"
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
