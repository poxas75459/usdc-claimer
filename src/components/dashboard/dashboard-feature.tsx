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
    "35qkY46yxLytJhaC1fbonKpWaBuemfotrzgZAhNGKs6bt6GnfuKYV3YZH78cE4QCUN3JmrPHLqqosxEGNJEW7Pa8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hAREiidU2hLHR7F5rzaw9wLG8Vu3yRpavENA9p4w6My6eV4365uzPvoAtHTbJPpFDgm7KjED3GnmTUqaY7EY15L",
  "key1": "3f43JxNnUgvTHXfuWoCfT1gwqBeh9cqDjhNFjN9FCsgozCPjcAcgS7rBNbeE55MoMqtw82iaBHZsHTf3mPhX4b8B",
  "key2": "37HEwcbXjkoGonXPvX37QdfFiCec31EEZmMoURsVbhnHYDEQZRxVja9espr4LdQRg16acFwW9kuhSsRfLU51MgYZ",
  "key3": "2vAuhDh2paHGDacmEwjxX6A1D54JhKBRWX3CkBiVtgwuRtznnbDT9edvXrRtoDEpJJc5BpauoSZsE1g5Dbxc3KN7",
  "key4": "qM3FDD2XSmEwmBSCrCnHXu378uXvaR2iHNLcYKxAdDAyiL6ZU6cfcMC5CsoMdTHm5u3FUistXxkyVVqvEf7HHAM",
  "key5": "5PVqdog23m3Q1EKsi6f6tHJnEK9faN5mVd5Qfw9PyqtWCRJxGknXMeu9jKhmScrA28Sa6d29rcwfnjLf4haC56j",
  "key6": "3YJmotj8JQUMyLSvYtAjhD3N1jAWncwNvA71QL6JYWeskkFHLwETaLmgaSbRKb67w3huuCZ4UdZvhtCL4WUjvXgu",
  "key7": "4a8NmKfqVSbv4zcxyszcraGBfLSK866PEacGyH4sA4pLjhZucMS6Cox9GiWtE2TASc7ZVp7MCnjh7RvRAQRmewRi",
  "key8": "2fYFHmZv9w2uaHvkYfYHK6YLBxMg5S6c4PLFxRCaiPB1qskM3outjM4rG6CgYA4MGt9Eer9Gc5yvGoogJZxBXN4H",
  "key9": "dLg2Ynvxyg1WiTEfGtotcYc5F4Pa5HA5A2mkY1T9AyLgriPBDcu7JG7F6mrkLY7PzNHvHAmwQqTDr1KWW1bqmYa",
  "key10": "4ffE9PHFL8nXjPazZsbRKJh9XjMNz51jRhkNv2sYocWbTPfZKoGt9uFhvm7CtNgwmsNNy5vLu9Uw9DWJghPbEbKg",
  "key11": "TKpEAJFo3SVKLx38TfNwmWDZ45duvZxc54KtzDhjxi5x8EaAU6zmS3CrcLiTiJUSCqmzw4bjefeN1eK2KayNv92",
  "key12": "41kDmgdG1hmZb3nDKBpzHQ7U2XwKqQ4xxHFyaQxXYutZ9BCz4sd3M3B4Wg4k1vevNjM4SNnf3xSPYf7v1vMLxnvG",
  "key13": "2BvPqKjNCTkRUHNoY6tfoP6fWcagFP34tEoyWTtNDPTrUGnXDWbSQyymEpx9mLvbeGn1x3f6CVJ1DJheNUSPJJDq",
  "key14": "4VBdcpDwA7E6EdSuKDwA7oo17wX1ADwEWA4sHqm3modsBA6m8RU9wuRhSnJcLgwKaPz3EeEupPvsjGw4PtKwzTxt",
  "key15": "5WZd3NayiXrSYNdEK4Qj6v7JSXtAr2gsXd3KcHnBLFF2hQjzGEUUafawr8HpGfS8hHBd5TKoPvosBUm6HdQj6zvC",
  "key16": "GKgcipDPqA8npobDEG2tD9S3nhKEf1UVTry1DrHpsowhkEfzibJs2sSzWm3KdgYfALZETGdsJXMuEdP8HiaYGTY",
  "key17": "2RfPpYRFkLvmeLtUfbc8eM62mQ7Anjs94DJ27hz4sZ8h7Qekk3krQ2HjBRZpSsSzzUWjQbgDL3u89hy2fjhghyiv",
  "key18": "5xQprbxirY5LrSH1ZNQVupy9djyWDgruKHtHbmjJVBRT8ij6ZaQ3UEJUqiQkaGXXQCNRHtkaNEHtLKQdSGZaaoBF",
  "key19": "64tjyqJrs6Jrfb9R6gDw3REEp3C4ett9Nr9czseMxVLJrrw3Knqixup4eFtEjRsugEPffYQD3tp5NcQpnqZvEVpj",
  "key20": "qNzkq4FbidNLEAVNmar4LKgDGKTBLUc4QKhiLRgzPzSMd5YQMT1WaPtURr5M3dZZNJNfDbuvr3pt1eZQPem3xMJ",
  "key21": "3HETRE7hTRbiJkvi1uAUNTH4pEVndWDo1w5zDXPz5G7WM44j8mBibBJkJ6Hs87xZZ6KHNgMjadokVMHMeNskWNWv",
  "key22": "3whzMMLpDrf9q87iAHn1kZXnQAdREKRydJsS6S1Qh461datagKiVNdNDPuNem64uzwnetGSciFgwktXMbiZNNQp3",
  "key23": "23u6Tijcvj9qRygD1j9TLuiy441zZQbJhG9hdYvWttFPwyfTsNshW34qyg157vTQ48J9PJK51ZPGhyCuo21XLUAt",
  "key24": "ugVGgNyKGNNT2cz1GJpwtz6Q6mnThYmkNgvvoxiKmxybfHqWpqZKLrnk1AqEMnAS1nmr38UUKAoAAxaXTZarxGD",
  "key25": "2RHZe8F14dXztXmseKvoyvQcKY6PGUXK1Wya3X5g3nrwvnXjpVYJSo48q2cCHUBTYLE7NDe7eCuxP9vfKPAxRepr",
  "key26": "5FnaF14AKhGEMoyR3NEUNvCBdyzuHZURBxoB5tAHNPP7XxQChoB7mCFWf6WDy1ciRwXAr2B5TPLsQ8kV1og7a1RW",
  "key27": "47PoEvDgUBWyMw6pgSWzftVesLovd5XtKWKh3AqNX7DhrMtyFRbXTjy9JeoSUXJyYpE6mQpBpHUKwTADy2QSnsMF",
  "key28": "2iUDLo7NK2jRg4JqJ7AaWem4sSBEfGPhw4LMXbW1TMmsdXSkA3PVkH1wi1xzXEymCVsdD5UiguJ6cMztWGEvvZ3N"
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
