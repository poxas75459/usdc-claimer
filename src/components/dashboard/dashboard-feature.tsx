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
    "3SjAbeqauhWb5YPcvsY4jkEX2k8UWvKFyAji6TDYsBDbrYJ4dsz1nhwVguNttYb4wcU9nkLyvTP3nNZ9o14GnVvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YhHRp5TCgnXuncaWKNYiYoMs4FqVog6ndtCp7SB4tmnwz24uyH1DVeMHgpiZixaVzsJHef7rvG5MdzNkQAGCB3J",
  "key1": "32DUekmsUqojSgzsiTAohSt7PZ9CqDPoiarWXwbfiBtDCH5tb5bA47GEW6cZWBMNEk4iTfxszmcENhakFVUvseMj",
  "key2": "5Rvw2VSq95hQHAmComZ7PrpdUEwL6oD9oFL4TLTUyHZmSkzZ9xZceEGw2EbLJnDRxzabyjZK4Gki5meGebu8uV6J",
  "key3": "5mMrDUQNchWX8S5xmZJm1xUXrXagVaAtqPT7C6YwqZGBJyZaPfgY8edYMv6qDfWCT5CYASHLamAHY9LAZMJEAvwC",
  "key4": "vdBUvpif1LsxTT5NvM9k4SQpcWYKHZyZvfjTDUYhWvWR1Ssk41PDpZZAjpgZC9VXCviuPoTnwimVXUXjU3WPeTn",
  "key5": "4a9pFFifXmpeuvEaoBzD2qxLHLkX1cH4T4Nay7SoKkXx3KDrAhpFecZGTn1dbHqy4nSKBnR8cCVnd6vWbkohKaaV",
  "key6": "3kA33Jir8jLSmH9wWsppBLQhfnjD4TwX3v8yCPdaTJjgVdPyejSn71dBsem8Hi5L2CDHvJLQabuEoxoaqPjjutB3",
  "key7": "21KzYXXoHrxzWw6umwHwxyJZY1ky4Spg6uk9SAWLsxSGG3jv6abTbcP4sFU4KcMkVFdPozRTrBj2CX7dJcXhv29G",
  "key8": "3QLuV2XjJvPYBJME7DjRYbDkxyCBELGUGneYhwj9XJfwpF4QVA9zNrVNXZaswdXuqTpK2H9gJ5KVatkEqqGjkAVx",
  "key9": "2ybQAgx6fsmyj31et2cNE4XEUZAA7XdmvoKTUCB4Tj2UMT7xfuuxcj8gEtCfXN9xZKiudjHkkAfHPreXSb8pBGVr",
  "key10": "53ynLaNPsUDWCyHoK8KgWEMGrycfZWHWVJm5CQvJkYzEFmEiPgBbLu7Y7xawTbtwJ2KAdXuR9taVKudfKLUC71K3",
  "key11": "3cGyg2Px32ExM6snyhH7aSv5BqqWAEoKUUgXJptuSs7MDaiuVkHfJWygEhtrDwKWUvMP83A6DMBPQuCj2Z9JeUCx",
  "key12": "9qFrru2abnwYHbc2DQ1duWpyfN82Nv4PWKnFxw5pCteo91Jv7Jdu6LkdEVGLFR1A3re9hMyQp2rVu7FsXsYn4nS",
  "key13": "qeYzknuERQvJnfymq9yKYLCWufJR9BNmmUncudYMQ95QeU3Lbp2NBeYd811bYuvxtKUa6DjQ3BQVRMXdJ7ZJuiu",
  "key14": "3u8eQZvHJ6LVj5P5ScJqbsRyDRUfvb68dYWLBic5QG1HuAfGDBb55Yu7PF68xUxW3tMMBmtVpvoz4keED7AXJMKR",
  "key15": "41tby4rhsGf5u6DKLqtjiR98cHT7Ziemkha7fXJwjcKQhWBxowsTgVRSjM4KMx2RFpvQyfKQcYhwdWPxsPmedDCe",
  "key16": "5hJzJJRvA1ikxKp1XpnkCt5ZoThXM2tiExaFfkbjgDsM6UrQDxK3JQk9g35ZnLEoX92V3uNuU4YFgQXqp3KPQGob",
  "key17": "2LyLKPorGnNvLmpMepSydFEKTjEyzVRemHhdNvscQ8CRBADQ9gkXaePvckQo1KSCiHk1Jnd9ecDLJRbK8AjvdSae",
  "key18": "5BVeKA1DmNj4jFApFhiyD1cbN3yaes5y7N4pV2X3fzcgsnZLQJHcScoekoBqXETt6fH8mUjMd4RgW1RADX7JAZHA",
  "key19": "5pKgAPm2fEY8qTotiREZda3P4jZxg2BMKroeveXNYtewnjt5bSiaQFHxLdzm1oTATH4Agt6FKtNKfkVKPnViZjKX",
  "key20": "58nHfq1d9CdAxpYXcMp2yz4zHtiiBHEbavFSN3h9PoAZAut8d36QcL1zLbFbqz7xaq8SRtf1av1yWitNvABT9ySE",
  "key21": "27xTcMX6MTKtS8YQYpzRVtbL8eYhmXWWpVSTwXWMXx2h3dKchC86oTWmd4UMWx5QTcBSpLKkaJCGNk492wQbbEMY",
  "key22": "53NU6FhVMMpabXgARjpuy2JuPgRkcjLtz6ReWZLNJBGuAep75sz4iZfCkE2XvVR4yc29TEYXvgEsqQ3r6edyft7J",
  "key23": "G1xZS8JEMRSBVnY7ud3EN5QwGr9FtSzsbMfeS3n7372StHKaXF5t6KnzAYbBM5BxwaP87ePSoABo27p7Kjxt2Qg",
  "key24": "4UBWr2kAwvP2fEyZxM6iX7dF3bdSSUvhdboMRvCcB6zjfT2cjyYiUy5EYCTRMQkxwTuSDszL5rSzspqbAR9KaSo9",
  "key25": "5igvggd2gKpp5VXzbn5XKgxmP3odkAqBb5HVL3Vr5giLWwQ2novGFtRyLE7Lf7cvWzmh2DBG99rBZrzrtZM9VCEj",
  "key26": "5y8qMYbg7hWWQC24HUrzr93MUW2ANkhnygra3V79sxaUXW6BCyXQ6maf9bFkv5wUMRTQt63SUWxfMv3VD9LzPQWX",
  "key27": "2hab3TYG5rSCfVtAnfxU78ptd5kBbfuz3QDfpvGY15TEQV5ugdP26Sdrx6bQLKUW6FfkVrfFzeBLvn9hsZvVHC6H",
  "key28": "DP9mh5zheWq2qYd3JQu8pbefWEdWXEtSBA96UDYKjbuc6UJgDUVr2yMotfuZsy7SNP4ZWUrVKKwQs9KinZSKeut",
  "key29": "2ZCNdbgibzwRUAK1iUozZ9YAkSmP3UWGVQpL6KUGgSavnQDMX7k4F6WkYZEVRPdyDM5rxawKm3RcZz7qDaJUsCKd",
  "key30": "4wHPcfa1zKzGdqFi9HJ74YHSgYLsRQUaTCfQTLEZXZBXARPyGY9Eg9kZjPWkWgkrsC3v4eE5AvThheL6f6TQjymj",
  "key31": "3nkEzvUZnwEG34VGDxSGmBy5gAy1qpG26hp2UgtCbFCfkz7VL7o427GQdf6qgNRpdyv8tpcGNN68jnS43A3JswrY",
  "key32": "5C3XgisU3zAxyuugtfgmKjSjEGp6YfS5uY1XrGdLFXV41PpUvMXSNR2gt922FxkmR1cM3rvn9dmVxBv3ZzdRrY8a",
  "key33": "3Bq2JrQQ92ou9t5CV6tFFFPhzsuQYZTerUiaorijPZ2TYmAd2UL8LTNeRXtPEbQRHRZDBFctwur7ruKjCYfCREut",
  "key34": "5P171KbNYSoVGdQoCkzrSoMxRtBjYTkAH4UHoHVnX2FVJAFXNkdLc6Q2ba4AVz5zz3wqNSduxpcrqe7cpBkhC5Qm",
  "key35": "qtgeUxPX1i5LyovMpgUAX1So5yBa6rhCT3VkgipMWM7G41SsFR33spMN18ofxhy5bxBjQmS8K4EEvRsCMYnY3bx",
  "key36": "5eNBXWhxog8kMv8gdQBibMZVHrVQmZhpFPad332BTuWzoyYXmnHzdegFxhiSLEW4jTXGdEp5Dvmng4sXMKRTiMjd",
  "key37": "4Z9ccuSjg6wM7qprmyWNXVG9Z3YSRSECtuYWiC731sGGbqf3VDsD8Bw5FccThkPD6bQgn9sXqTt3RAmr9QCzCEcs",
  "key38": "3mqg1YbjHrJz6e6fCWL3XDc4KYoVck6eeQKPx3KbdWSzqmQ4FTNFGjbL6fnCtqteTPFrPq4tGkEBzhiJgwqfxdRc",
  "key39": "5PgyGwPFjimjcVUUjQxHxQeMAE2RA1DqEKgHAXYc5HHLX6wQvADDjzLdnX5HjqFAP1s4boxFuYzHVhEJA3baoY1z"
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
