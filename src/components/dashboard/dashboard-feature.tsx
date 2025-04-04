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
    "2WKZrCZeUxUNdEKfHCmQRQAvs3ec5SF7abMAV5K5UHgdwZJ8PZdQ9BqwQ9eTywtBMTkTKkRtgcochypYpVeHwokQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C3mS2cqmsg8kJw5EwP5nywPAEgEqnathPDLsH41qETww78L44ivXBp7Mrrapq1tbuve2HePHTfqd5yij2AQmJcK",
  "key1": "2RPjmUxvWJHvuga8vFkKi9s4xWvg4RoQ5uhyuccPzEo7E6RpYKcHtKf4MpDrqniZVtwEQzbCEpW9F5oh9qdA4viz",
  "key2": "4w3wQxtJkc9SghxKmsKHSKrKNohhPoZEwogmCKjFWLqVE89EjDSi4HSHq841or1EfbUZKWZCmxaHDpnFoJUPNayC",
  "key3": "3rrervRRETNgpMjfsahudMcpng4DntRRvyrJtZyz614KhWjNE5RnKKSQcfXyTVr6ZmfTJNr3tZyzrFf4HP2rCSAV",
  "key4": "4h7FdLiFLaT4iGYG63yG7p2aAXGQZBCRKyQDXNEzxGisJna1PYBy4R4XqjJ7XQiudgmy67KwAqatVKj5Ejeb43TX",
  "key5": "CSwrMh8Zy1AZ9H2eJSDy5f44oGRt8fXapramgeLvkGbdLDmzCC5mSGvgZQwAcmVCdJCbWdnbAroXNxNtPnmipam",
  "key6": "TyB5mHjfxvZiwG4UCDUdD6LqjZhqXAWFGXXRJ4kgztp4UxULL9atxc49cNx1zZYzKSvakvXvrdQefrMDB7xZJxy",
  "key7": "3BNwrHXDRmRZUbNvXLTrEJcHxoRPJzFqxx6YWdCoCus2PV7FUuVFmmp2gTXHJD7RCpL49tzr9me34w5xEyzzStJB",
  "key8": "3RvC9MYFiBJ9xKkgQLhkVyuBE5L5uVRMTUvgMiQuNhAZDPdPdeQxUZoxUNLqK8pnJ5qyzau6A3sAZMH3dQTbC9kD",
  "key9": "bwmdGD662dfwNrSc5PcEHh2nE3bzuGsYEGceM4thXoPCsd8ZPfkcZ8qdCfE87G6fvSZxiydgaRHgZP3V9javwuc",
  "key10": "6JRRt5kzQyNU2uZNjXVnmYpRbrf7dg5P9RWcESXJaRwgtibNrvFAXtAkvSMa7999zAjXxGy2NXaUp7oxiBSQS58",
  "key11": "2YASim2H33J5HGKUSrLX9XhupwLmWRHTbq5PSr2yQEEAqPmTxmQwLr59o8AN38nqocavJHPcLPypMuybwX7BmmhV",
  "key12": "3mvncy3tGHRUYFg22wN8FwbQbCErzEUK7haS5aQjjWTHRYrqXNytPJonvcoAHnUQ37xrC3agKQrNuD7XwBTSV8MR",
  "key13": "3xF7wJ3JBYKBcJM8nHcndTQsVhNFXArZJef8QyfZdPEWi4QxXHgadhS2LXNMBtkgHJHSdEUvCSjqoLimArHdjNLZ",
  "key14": "5B1fUWgCj6YTwNJgcixGuC1KZ9h6D73Vc8VjbwEAYs7Hk81ARwytTTZA1t5ZuzxRysr5nu49Tiid2phvy5tUmQKs",
  "key15": "AhTGFGUzrcAjBSZWX1Q1fKeXgFPynGwgHJNQoTsAULJMku8aPUZtzRLSaVKPx8WcNowDE5mLVts4rGR11DgeMpT",
  "key16": "5kFspivb7wAU3Ki2Nb4C92pP4MJ1S9868uHoeuuFjR3G58SEEufRm8BZgLuGYHSBbj51iGSRPDRXN6iNAH41L8Gk",
  "key17": "29ASA6J74NTXEbbbf1GxFyraReMecdF6L9W7bec1UWL4qHJXKHrWHFWRSZ2bgyy7bUMf9vqjBYEqR31gSbx1mChR",
  "key18": "5PWE1w8H6zmstEF2yiBe925jZYVut6o8rzjk3bq9yLqV3Ssy5GShtrKBbRca8VkXMoZsz98WWT8p6D1gcum9Ujfh",
  "key19": "iguWmgqgww8uRSvZAyezJjLV9rQG4u3i3omi3f2E221VbdKPS17Ngh77yZRp3kt2CUESHJYAiBkRftZX8zotUK4",
  "key20": "36wLiH3XLwqPq2K8tGNyPM6SgGMzqg9boNFrEQ9MbYKongJN5WAcAEtT8kdxdawCxF6Pm9HPFGP5pVAycJVWH22",
  "key21": "3qQXtJQNVGkf6S9YZ4YZxfuVzgfTYSTS4j85VekJvp95SUrk57N1sWj6e7CbwQSWNNSUuSbG7QQNH3VX9AquZaae",
  "key22": "3dsvK7eXJY5NihVX7BJ6hNUb14ATdegH4HW9qRXeBGWPrdBTNYepZGtomsNitdDsfvSe5E71iSSEnYNSwCEXoypz",
  "key23": "4Rs1urxHdLp76B6wYeUTWLEp9Bvmi92jtEEM5SjpqMmibs4TQQhqvoib6UiumWUwcPVRt8qRXxwpR5Cv9V8s6xVw",
  "key24": "5hePSDdQTqKmecoezkyoGxKBjYnf3dPoakP5xqWF3v55HsjvxDat3aGsJ1Swo1Rgw1wBVJveBcgnhrRGf4WMtsJv",
  "key25": "tRXcZGjSMif2CcvjBLQZDYyHt47QtBXUQ9Vhq8oYZzm1qMeqnQgE9EZK4BMB1b3xgPs1tqZCMcFbFpDyG33h9hG",
  "key26": "gvxJFss16ZKBf32Q8epGrR5kKJdeYtURYfirpybHQPQ8TntejrYnbFxxs4QTKQXrkxPqpLkg73cHpXEMM6SKjSb",
  "key27": "5XzyJV8gqHL6DoXdvEwPVKiiWLLpJkp6z916xeKXxP1mAT9Zpfa8WnUNUvSSFCGAACcgkVFmrCV9PAd178LuzDK3",
  "key28": "4ae4J2ExPqS4FyRGybrmbnKb2cXFjFjwQybm49CzyYGEQvTySp3cydX7aqvNUyAFXgb6Udv5fFLmDqJJEULHBod3",
  "key29": "51NXgbapYHoh36DVhPZTF3EqrpwQPfaUbnQonnjX7VfKA7qeW2b9mvw9YeV25e6yMYsvqPkN1WzRbkZapGXycDTL",
  "key30": "nqiGgcXkULgo9RK7LbJFFgK8xD47KzQdK4ihM4kjxAXziJSKTJr9rZLiHN8Y2ftZEdMWH1WPYpyELRBWFQsVEBX",
  "key31": "dYc2e75JfHJRiew6UcydCW7FE2LqYQn866sawKvdw3dP3kk17sJoS47amCPf6TBpPSRgbJdxGvPAr1UnaALEEhH",
  "key32": "XqhmsdFLGBkv7daraDtuAdLhB6RPRKcZpDhqo44UJQzKiYvuD3kkBWqH2Zk2fcW93JNc7wDieEwzaEEanHm6Ha4",
  "key33": "57GJLZR9bVokpZg5BpXv6Yw8DXWg8uAJ2QahuQknxGYfLDDXzfrjL3zJVYyDVykRXn5w3wTDuiBimDoRLV8UabkN",
  "key34": "2C7XycqGuM63w3So2m3A69pvCkGhR1zD1hVErJJpfuZQdT9jeDz8ADzhcdTmda6oxmuaETy4uYshWzsxYYfLnMYo",
  "key35": "3mmHU7RGsL4AxsxCdMPDjrmaGq3tcbJTJVwykXapmikp5XWH9raa2ZNZTn14xGWik6gQfe7Rx3b2gKcR7syfTjSc",
  "key36": "3PgHtaSNSee1A3zwPWGhE1tVervjapoo52vMBQbZivN66hu24igpqagTkWnxEAqTK7CNwKmWs6UTpXkJGsXv8Hjj",
  "key37": "3HRs6cp2mpnHMfSFKhNRzCB4CG6ujzChFKtF9zgUrr6AvyrLQbdfp78DkktC8ADfSmSgTY2B6wn6bhRHXBBV1fPH",
  "key38": "243JnASaKih6JjQTiSz1mHtVYfxahp969Kv5JAMkwvMw51qnBPxo4GQVGDhfFWUZFhQ1uNFNqYJwKhkJMtTnD6vq",
  "key39": "5UAEUsp48Ct15Tn2aoiFSbMBFQTq38LRSPwEJw3u5rSfsxTUmrr5st4QFLsXte2ju6qRopA8VvBA3euE7muY4qjU",
  "key40": "2VLCWHKfKeKUQ2RLXdvn47hLNGDSbHoqeBFcg5EaP4WDr2S8zzYDuXdPN2QZP5nXEPnF4ARDUwDwZ523ZJQEwkka",
  "key41": "XP1GsaBQq4mGMe2iZgGvC3xbFTkWZ5w8wpZCHauq5QNrYQjKgJqxw8CXq152G2QrM6BUUYCCbCAcEvCw1VDaVRv",
  "key42": "drP2mKSsGrNw7DQRA8gMSu9nF4itHKq1zFPWbPazDBreDDz5KRZd8oXb51AztrzaVzY8aqctMioVjnzGJvg8aGb",
  "key43": "4WRgatjviY2mV8T6JnjJrLzUQnbiySC3FDiSWcbw2EuUrvRUK9ixrfBziJTbBRxsPtZVQ262UKCP3gmwzet5o8oU",
  "key44": "23vNSDfnEgDaFpydNStUGNk9j5jDNtmzf32toHGGuPoXDDW8NrcuMFXkNL1VvY8ymvrS5tNnPujyXisWg9DXzJTc",
  "key45": "2YKFCmUETC8f1gZ72xdjADJJKzsYnyvgedVmiCx34y6E4mboVKuvf6aJjvbzeJvYvg8Qzm671NHTBRwXSGFCJLev",
  "key46": "x2hVjLmsZ6tko8pqh1pdPXiyeuetyHrnSxCveuBD7C1zu5LXmiP8knMixVKyjYPWCPmkBMNVM853KSbYczDo26j",
  "key47": "NRLDdVzzbwXc5fAch27gi8EAqN7xoDFyEXGNzAqyj64wBMo4XhgDmfKGcJqEPmNKc62kpWjv5yGSQ77QSMrpwww",
  "key48": "4G6Yp44fNrAUG7DfqHXt3Ffw6UGFakZWhTnTu1t86nAq8RCNaip5VZLtknZQ99M1kaJ22AmGh3bCRF9HBx8Uk3D8",
  "key49": "2YZb1U9X6RtEUFxSjQt4Peg1voMrybqqrienBUngVzXoZhsQNFp3Ge2EbEemHKPJwXxwoTryp4LP7FJ7aE3V1U6P"
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
