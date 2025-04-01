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
    "5HvjhHVg1JGE1fMZSTebFGJf1M3ZEFmYBRzfhB9ccJkWXpZ898RDBN6t7uFk8YJeG3rP587MYk2PfGXdSY6Sb24b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7HNWrN1k3atSquPGmbst3WKrvPJufzkFtLRKN2jvHzieN9ZA4xrZ5s5XMxDEavRd76MYM1ezdjnNWq9dpxfJBAG",
  "key1": "5efvGCYGHvVn4A3fBwcH1fiCxCjqgxx7fGCSNX6fLBqFQdHPNKWfvLBHcYspAmER21pk7mSKYF8Wt6foesNuqijK",
  "key2": "62RxLHqBu5cJPU24y2UbjWhPg4zpnouC1YARW4jbWKPieer35WjmCAmP6A625tK5hJ13iUPH2RvEraJsKQTCBLvC",
  "key3": "3XimVUaW3ACawdH6yGgz5FoLQHg7Tcmp6XgrQ37k1A1BBQzLYUtTy4caDhyNStE893Q1FQ1dddBaWn6NCShkVWL9",
  "key4": "Fx5vcVe1qrYTCiyrr9XpUqodq3xk1TF8ehuKWd8KTLGUNteu3VyfuW3oM9RxnvVYWbmj36x5u4wuZbqrvqb8YXT",
  "key5": "4Scqmi9sYmcRGqWbCRShEcyuwWmkVuKNxXPxTbLbWhqySGF75DPZqYkNn4BSRwqFPVamStjFeUpyU5Ko48KfzE7v",
  "key6": "61SZXdTxc2tqcQs5AQep7TpstHb8KP4uXWxqXvxrpRmXpEVZJnRpNX9h6ix6jb8vi1Pjj8Aa9Ec94DS8SZ4HsYnh",
  "key7": "2iJ6BUsqUhPnW93anwRcFTkZQCfc3MzquDKznn6hLBF8gV73VEHSbWH5kZBveGzKzPXUQ77gkn6AuVB6HZnvDPMP",
  "key8": "nswb3cUf4U7i3mQzf14MaxS2MN8SB2bRbhmeGZ3nYNqzKYkaEJdXXPSshaEn5ysuai6FVowSj8u4d2YmNndEJRb",
  "key9": "2MDXhfM5ZgdtgfpmreDfz1fSfnb7NaAjBqwasMGfRtCKEiFzFuuQT3TeNtsGBMw1CZaqUQiDBDQbymBAazAHiCve",
  "key10": "49NNJHM9HS7vtypWkJj9KzmPkNSXMgmNXmJ3teJHUvPfShMA75V2gyH9P9rNBahCoAtVS7L8LHJCDBrhYfP3t2Qz",
  "key11": "5c8HyruA3jXPFXMFo52fmbnXYM6dFniEMq4HMLbiTaBLNbTbE3FNzj6GCQYFLArmu1T4KN5166z3QFbutCeEVbS",
  "key12": "TrGFgtWgeVUoLeU8qLpxptGehdqRbvpwUn4AkycFyV96kos6dJjzmvPhRmcBsCqrHC4K9QC8pZXRqV5XWRrp3kE",
  "key13": "48nyJxUtL6mmA2NFtcEwMTxk5zmLc5cv1qndwbXB5Snurvki8YeHQWvtnYkvSKkN6DwGAdTuc1bnsH3NXwqpPU2k",
  "key14": "q2JQpJ3uXkFnnWxAxkPgD8ZvMET2USyHzBbusUMc7myACmWfzvyH9CXsvgizdquU8y8CpfdKH5EzpMbz7TR5bu8",
  "key15": "5Jr2xvxP7iojNG9tMxqj5wikV4NJHPWLKfb4JaeK7V2mHpwccv1vppidHTWjGqGPHsVdry5rgLAMY7Qmcv3ohboP",
  "key16": "5nQBmQnYTwoNemHmdXBk2awUvQuW5kpNvrCVPJGPRHJBSQjKCyeVV5f6aPBE4w34wNKPBrgy3Avh8WXpJSQrxDAr",
  "key17": "3U6SsnaSCqg7BXXZhi7C91sD9EXF1aKJgzahygZ9NQakJdXMTR6kmMopXLtSVHKeYpuU6QtqShzwSaNt6TLfisgS",
  "key18": "32XduDRQcUBW9UtWX77uHGZLZnsHJTaR8gpUW8cuFqYb5h7wL6r3cv5t6vgHvFtfKKqRXpUyEdWBEQESZMpuwzg1",
  "key19": "5sRQtnhL3G7rFpwtXMS7ypd3qdp9Xm4C6H4sJEx22ytgdCzZsGLviU9s9yJu4S5aGvkqkWBPjBrgQzPxsLRJ5yuw",
  "key20": "2QvffeK1Gh1XJvvhVDJZ65rRcRrVC3oCxmW19gY2THUZk6U4p3o8DDx9vPYXTaF15jcpNWEjNhowd5ByipLewre8",
  "key21": "2WW48QUhMdeXHG4K2DeQb9izKWQprhzLfrYKFvu1Y93ytRQi6JqfMX3KUZr7sFCg1NVYUBjMb6VwRG4edKa56gSa",
  "key22": "3bMR2y5No6Bb12R4LgyADSBuYA564FtAgTrTLoxTnzgZRHAtipEfTL3Y8G4wNThCdfeECQXKwJ14Fzo8zsGy51iz",
  "key23": "3fQFp8oHuqjE5i6geDrAfNwA6SniNbYBgXeQRmgHVcmNijXtMPs1263yCa2UMjATBspHfmmWD83NBDQ8yc9m6BPG",
  "key24": "4VAAeaDzKR92kp4Cdg22g8sXRkNHw9UYNma2umZuPuEEmE29ckSMuy8sPkCccw7sj3XDf53goxxy27rRtyKgB5y2",
  "key25": "3kTfy3xLoQ3dAVcQdDDonuitV3T6Yp92TqxjXHqP4EDwdc4EGakUypeo6wMbYtYcwPrm72cA7oMoEY6FetpKS6ww",
  "key26": "4VjZAUCUPPPivn4wjS8V15rzwGGhpm7dNxNdLYgBrZimodyC4MYQTiPDpHMq3efsanCQ78QLvPq6eP3gqGczbnLg",
  "key27": "588VTSdSgZ1VKBohjTokiZF6FqY4jA8Z548NQXL48LA4jgNWHSMeZdw52RjfQbKUkP8dcMiJ6L4k8DfAHzZqWgjv",
  "key28": "5EpbzDQk2oGY3BU6WyjCrxytwDfY6bRQE6wUa77Xbc9Axv7yqw6wCBrdGHFaM9XBcCMq7wirZDEk5Pp47W3ALkjx",
  "key29": "57oPuBc1sFA7TUkY5yDtSsYAjrpZeWMQkLdSK2WvXAhgUhfyCrvJ186P4xjs7y8jFtV2rojBy9eM92A8rFhuWfxJ",
  "key30": "5NXRKXp1pezD3Vzt4SRYTiN5WjaRYiq7Ea5KQ2LKsxhVhW3Li87aKAHVDurQwKuioXwLBVxUJ7D54rjFmJ2PwiqK",
  "key31": "5puSyj2q5qoRGdcRNGjd5L3gxH79WU9N8V1vnzJsqGnrik2VpeGHkduBXQ8pSxSZvgAWZjHcu4T36Jok1kVvaH4K",
  "key32": "9eucWXUkc7v6ik6E1exdDGffT2nEbmmQoF6ChCfvJvsypT4rhN9rACUpMKF9NGGrA3XJYQWBvJnLKSWygNVCNXF",
  "key33": "3HTiLZCoMVu9mFG2DWKg9aTnWH1gKqYtTfaS8aqCbdcXP1hvG71WxCRk6LhEtPZd7T1JHit84oYe4dWpETKRNDhj",
  "key34": "59FxAxkc6r8PN9cyV4WfSBjwdzuXZctXHJQjpDjmLBUfhJMzqPHJacoGsVTsWtruwkgHctUKJyzSKXH7HacfQ2i",
  "key35": "4BnsXhwBPp4tgSgrTUjBagHZKtfdQKXxoMj8sTubfCkGvVXd5bM5NTpZFSdgPhbsXijR8gq3eJEVt8NPyTn9A5Mp",
  "key36": "SxCk8tXS1u5XMb8qXLyk1LWRMDnPAsHYbnth8CNgxyVd2hn9RVb77U6EFFXU8DWuzHEGtHPdwmxWu8qQJmadNgY",
  "key37": "2ep1UQv8n9x9628pDicczSCt6dzYkmYsuKMbVQMuwk252DpB6FTT15KcSJ1peMXuAefmQpH6pQrte8LvQgSsABao",
  "key38": "g5BjqBFYyNGwDWErTddDTyQsxvrZAom5cnRMnP8BL8aLUbDk7XA34EQyDjPDRHfSKGvwfMhsBgEEd1gaqzrxZeB",
  "key39": "n16tBZZJAWvdxMU87APRPQ58e7pak9dEpfta1erANQmwvfwcGAqAxf5paEQ4nD8R8aCobb3dVqkzPewHbKkhHFd",
  "key40": "5pzvxQdm69AsRJMHdKmN1b9KNG2i98xAtehogJavVyd3mgAhbLgJsqUeJDA6Kx7UAwnFwLgjjojD8jRRe2bEFqxN"
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
