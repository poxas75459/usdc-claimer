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
    "5dXnAbZ8dXtGFy1t8SHepEJ7xGPYs6UBrw6PGZo7CtD9FHSNpLpQXWDxoJjjn9qP7mon7ZFHpurQdguhyhenySx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66iH5wPJy3g78GLH6AzijE2xA6ruAUbwtXArJa9bh6xLp4dd1T2UTeG3cSjWJuRZ7E1wNh1kifo72j3CGpqhadP6",
  "key1": "2cARGVcF77FEt8sNs8sZuBXsmVKTYpPmyTdM7csbcKXtKvgvDg9AULQ3CeBt2UuVfeUjfMowMNpjktqT66rMrJGW",
  "key2": "5LtACAubT8Wown3AXo3h9bWrKfJ4pdm7zbqp4Fw2hMGPcAnFzWuUNdSQMRwt4MTMHPxryLXsomhYZVJpBux5XanC",
  "key3": "Uki3YRqPvzEZwt5PU861pW69ZcYGo1RzXqwjdjT5MNCMXaw2N9GvV17pW1tQnVkaKBBho8A8j8YBJeviGZxGv4g",
  "key4": "2SE9SuhLNZkhTDsXZeEeynq3Gys9N4GaWLRconSRyqc4UYJ6kHqGYmLUBbZ47rJJDYVc6juKjQAkVFCis7ccCtFS",
  "key5": "5G3woxAtXbfMt8YJ15UfJBVEFD8Xgnkq6R6h6Urn9tBBvNurRdaU1qW9iKNq7bVs253gYHRH8UfwqcYApVBAz2R9",
  "key6": "3y8frrTmnW2fMZhWixiGzM96udyFG7uWZoALvRP6ivb9gTUs8jfavt3Z84HwHff7DycqshDEiP2BP9KELZgZVefT",
  "key7": "41ZxyaxQJMCWedUSzWFFQpcv1fc45tk8tp9GvCnhduv8PMBCasJFoxuYzCe2L8PPTu9o8ygPJ8yusMCRQPNCty7y",
  "key8": "35RjwUaZ4Vdw753wG9QLJEnBRB2XBqoeYfWjA66EsNuS1YZ5o8B8nkjzdJdzX9y4BMETzhLd61TeQmbVDJASeBB8",
  "key9": "2Q9HVHmPXaVSFmjPkYhuPS9R46a1iZ6Xhb91Rq9jgGEwg2EZ8FV9qHMYRiCusvV8qa2zDFHiCLBm6BVAXpVtZ1XZ",
  "key10": "wZ4zivZARdZii9DxGKbbd8YBnNXAn2kCQbF1mDEU82rytCTzTevkiuKQ2kECYSXuuL8f5eygTMdxajzmtvYY1vP",
  "key11": "3fgxBnphcJ7BustUaHeg5xrK5JEYtDSrGY7mCs37VHbouW2J334qgjTZs6gvbEGZTEFprXtSFsCb6JafVqYvT4Wc",
  "key12": "5FRN6YBpKoRLtkEo8U6SF368EZd2p2TVM5i2Q7gf1EGxUNUzv3DrK1R2TeDg33W2XTynDivfkwTKrFjPgV8S67wm",
  "key13": "4z21yuM1KwVM5AVP768r5H2zXhQDJQvUvX8zUbN83pJbJ4pkxMyAeVdnBPbmrRC5pRpqVg5G9c2CpeFdbNaTMQot",
  "key14": "hHjrLBHBFeBmDCyyEZrXbvrxx66D9kmdFK2HLPrCkMoFnbf2rFo2r6xZ7EKPd8tf1KCRto6sLsAXLjmDyn79nuF",
  "key15": "2f8bZffQ2XEMoAHxDjQsQdnMt2LUDmy5nqioRqtKJrjDShcqBt8CuUuzmzQtgrYQvP1k3ZLHFccQajP4bERka2gP",
  "key16": "w6HZLmc6iSYFHcT9ztSWjwJahkA6KSjdEfGZJu7o6HT7AnyWQX2ru51y59DbWE7e1PRtgV3Zgqi3HJgxZuvEjXt",
  "key17": "57Fg4y3m9wkxUhSVyXsJ2ZDnNW2PzEUns4mNWFA4NxkcHYYV15iqbD21vLFr2s3idhHgBGpv2kzz6L5DnHZRfE8p",
  "key18": "39tD63aF2oXRLWTZy1C35hG4StP6AydnUma6PBa3gEUp9bSZMtapFKavUyenRuoLXf8uNbGw26S9KujUmiFRqk8P",
  "key19": "5ZQzra4trc9nmqjW25DbjFBC8aa8TV5ETZhdqDDZGatgeJZJGnWhhvkTP16kB5V9pe5Ni816ePpnqfyxkBg4Xsgf",
  "key20": "a661xsHq4r4p2MPgq6bTEYCRBPk5QBEowMM2M2ma3c8RVe4BpBdV8ZGtNNPkBEikDvNauR94aKYNhHUezFPysbx",
  "key21": "57xw9ZoLmeJbE4teFaNBB7Cwvousk1wzRo4pjUgrfyZ5MLFe4Qswwzwi9PFJFCieYLdRiLz1ctHuzouxUqzGQ6AW",
  "key22": "Zq65XURfSY28UhtBMq9bv2oW1Hxb6kYjAP6wdHV6JqaKGSLtuWb45kXgWaH5xZNeDq5Yb61cBQR7qj8QNEJpqdL",
  "key23": "uamNaZiAd9tifqF3fwGRYWsvepJAdpmucfdbZ3YsgXrEFswfKioziZJRDVzqCHVezSMFBWFYpEsUXYYtFUQr5NF",
  "key24": "5WsyeXdr7df2yxd1ADagX9PN1mjvHB4QseRbSMokEYZ7SPniThgR8utnanG5iGxYnwZBu9Ah3WCjv8z1vw8umWTn",
  "key25": "32uhNANzPypJk6xT6SPP2EsvEdgEywZJiLvX5iVGtgZidiDuhRSWEPxA7xjbSyi2J5oCN6VBWrRtaYUESZ8soALC",
  "key26": "36LQwjeqWZYdRQwVqBzD9r6vuG9LshQynTycRbHgU1wVFiF5pUWbUnCwWxtpvRvt3sWR5LGU59k6fHp3qb1gXe6a",
  "key27": "3UwTWsfQdJZeMYJxmSYANTAH96xMMjK8MEYy3PvPhhJJ8wvTTfzDiLs6fxTycgxk53itYE4NtzjrWruvZtmqo9xc",
  "key28": "51k6bWjehym47gpk8jShyqe2Rm1yfCedN2MQuRK7o3up2tPHG1zjutDN9GLKmK5xx8gWnBwk4L8t1HFwEMRE83u3",
  "key29": "U5eCAkLeJTYr5FWD1y3bF9VykWwAHr2254o1izqrQMyHuur5mgAN6UN58xdcat6i2Se8psiuqFNNA6xyLfoLWEp",
  "key30": "yYtwjfMQw2haBYrZ2BB6ps8sn8NkN8cb2P6wR9p8KVcSpPDZqDM35KGkBS5C3pVpvHKX2YSYaAgvVBowf6JWV56",
  "key31": "5k7EgBwttDRgyLcoeGM4HG8wAJkfUqTUFV2ErzcM3Xv6CdVT5YnyZX9A3C1jC4f2U57qhSBeN25xJWubDPfAvk7P",
  "key32": "YfYv9wp3WypaohfJYJkVXfpDYBxi7gZQ8y4zQPWoz7gxhNKh9qSSdejVZTHZFaAkoePYz3trn3B5eKeKAbxRS3n",
  "key33": "2V1cZF3vaVRY7u6Ydm59NYT1UWJqiSNTdzRh3PJvYpu24TwaBDm1FMabmBmAY3weT5UvN9uNGAji2RM7X7z2kaPV",
  "key34": "5v2zz3m1qtjoDshHhDXfmrvZEpDRovYBcQYkRgVRu3gG5JkFPZCUNmt5QMD8rqGDZGuvTWAC9n33CbUUSZhQxM4Q",
  "key35": "BzVpZpZgMw2XUcuiXNWF26vRg8BmkFBbE2QZNVR3ZWNh2HJgPMhr3VFkVdt3ZpBcVc6y4JSznP1J3iaS5mqiGsG",
  "key36": "Kn4DdbcL1s8fSFGZhcuVGQFnUDDxZXHFcMKTNb3NGFGZM4J3FJNTtTfqoa8pVfWND5kB6BuE734mFPE7GpdYfD7"
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
