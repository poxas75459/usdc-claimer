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
    "3PDCEa1XS3ntGqwcP893WZA178Yxk8KPW5EyqN37XkLuUhLBCy3yndUQbLwV4UQwGMzuQGUfRYmWYV5w8covFSf4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JTnqwyQSabaUzsDEKYRurFxYS7faNtw7U8KofsDxzjxrVeuzRKDshXBSBqVfKoFaVLwetW6DVdV4EedqrvZYFzw",
  "key1": "3zhmq1stt1WjbdLk6tvqNbbUfYMESXiv5pBmFJ6UyuJP411kUseU6d3yAUKKekKAvjZvjWP5noXcwK5rNgzuQkcQ",
  "key2": "4mYSyVG5sAJ6y8tmBXP4n4knbsYzoff6Nr2LR5G6ACAQkaiQAJQ1jJzjY5v5L92BufZVdsGYYf1raFvBddqKJcUk",
  "key3": "524B8MxvsgmtPouAK3m3skF6q3QRxWD4skonCYPBsgiFFDjrBsY2S4JYH5d2ztListoM8v6YopQ5wwxf9QrgFxJz",
  "key4": "Wpx846edopGqUrk2KzD2jUVC24PBoZTHmRPMFGtMnxeetM1kn8KkvHy9stXd8DRD4GWmG9sU2xoJjMuJB4BZRAE",
  "key5": "5G9bYfpdacVqNmLtHgSVqQUW4zLJiRrCRLwd674Fgr857NGGTHUuUBtpvq3MCCx1c2m7S1YTUfrdopzxQF1fCErc",
  "key6": "2HrT9SnXn3QgnohhXJton7d4bxHxABhfgySXEkq73g6YqKucpaVZYr2Zz6PrwiWaCnSj3nvi2iZ9jJWtAnbaBywY",
  "key7": "4Xo5K7HQJj94Eabh6vk6Higm6h8YnzvdzhYc9Zt6c9LrBBp5KfCint52MEbRGyAymsNgLiJ7AqaT8eWETbrY2cu6",
  "key8": "3qwomyiiZSsR3cvvr48DohfsxrhSaG32HPLCjt3mqZ6nrWCUhAA1bWXDe41zTdVcJqq77L7ULNnQRBhqChL486GD",
  "key9": "3JK1r8so5GB2YXYDXMLVpz6HS98uosgG5Bc5XXXqxSoAS3itmmHxWD6NynKdUdbfutcFDkhUnuEXYuDmB1tueXqL",
  "key10": "na3fo28vW4RAya82tohemiBvhQja2evZBkAtWqpeExk2zgsiWGQUXdrpPNdrtgeEQYKYYL3skHTw1TLdvANzMpn",
  "key11": "4CrRtnsUZyh7UoJbZdVRYvJSPKRk5hzK3ih3EWCVT4MrPoKXzJ42zkinBsyLUriJxMsv4TJoJiUq17fU5DrZ5bQC",
  "key12": "4iXrP91dipLxpFGZfuf1tUnE5RtrS1wmgjUdrG3Fm1T3Loef7CrNDRAQr9hNDiPqhZf4bHRimVxMev7Thygs5zzu",
  "key13": "2mWEbNiweNT6yjPU3coLb4p4MXvEmeztLLzvNDP7iw7GUsJZo2BxkpgGL18jMfDBYFC63QP6ttH8mtowpdsVsqY4",
  "key14": "4dFag96XXHUKGxE1AKCX34p5AjNuJj7x8GZYRL1L53NMVRjgvYcGPBbkxfZBfE5h6cZ3X1Gr24fpiX5ftMzHAcb3",
  "key15": "2rQ12WVcPW5sQgpuqoX7gCCjoDh1c9ZSmPQ6LbTKmM1jkJzvBBpgG73QA6y44EaYZXu415LygFeDuuQiKzkiDGmY",
  "key16": "2tegT3WJj9BxDZXCdXzEsWdHeAX3p9WkowJYTQWeEXwNvyJeRHGG4CAfXBJWv37croSYQB41h1ebvuHf6Biq2coh",
  "key17": "3Lv9RH1STBgGFU3e744cD4LPzvqjTKi7gdkeMX4jEWSnsZ3fQxbqmoKCyJjbvH1wF4M3sNUFR2VFQkagXWY5kh46",
  "key18": "3cgjqbNkADVcBruwhdr2SxwG9BZFoTbtyuz5JvtQ2kABYCrBrf4yzewojD2mB7ovmdxYX1EBFqfauwsXinMJ6G5",
  "key19": "3v7VNPYow1GVRMCZfN7DtT1iFGAzkKSeMgGEKRSizQ5bTVQN7eVAzVat2E3k7yFrUE9CUJWocqrYcxBUDzhKGHET",
  "key20": "PL1ykSiUeTM5yJKAA6NpMtZ32MDmFFc2nkZGrq8cHtoazxzuN9oTs4uyTGLJwpL18kF1dNe4WPFJUKVrdVaM1zC",
  "key21": "3jRr3yDmqdBW2JfcDJmUkQ5LtCjnRR2HaG3Rg7CUuA6f63g7zKRR5iWp9gDVv6mvSbq8yZL3SoECGBAWMkm63D7r",
  "key22": "x7ZzQCwtJo1gAFCgkmNkV7i6Rgcf5fge2275fNfTRFw78EPgH6QpBvKQuDchc7noGGr4jnR64EtcvDfUtLWVAaa",
  "key23": "3DPhACoqBqUGUkj9xrp5ssNiJVE25NGEtjJ8wjwHjYQS1mnc6Me9WZaLvedoHDL3uRNDwsFyp6yypRMqKaMcbENg",
  "key24": "3F98Hzndif5wa1VLdVdsYFkhx3T22NvHuxRf8FyvunbbzvYg7YWcPrVJAiSmRmhnE7qZCNi2eiBkScfUKQnqaqeQ",
  "key25": "2vioaGwTnLwiwBtJnB5jBUD4GnzMEYD83jXJ9x79UPHHsk2QGhF7CBFjngqVAr9irRDwvphJjvDom3BHF2iFDaa9",
  "key26": "5SKoZGtFZwRjUr1WnJFbktpTpwcMRrwsYc9j479VuEuUkXyzm7jQZ46gBkakeDPpMQCXsrsJxSJZEjE729se86fh",
  "key27": "2khnStyCzTbNWeaXhMjH6cBhYZRJKMwJTL854cT95J17V6pHBvSwNqxv4t2eML4SdKP2fPKsLr6uSeqcQjZ2YhbN",
  "key28": "4zjJ7Zh7BNikxypY7DgU4Wu8pUCQkiH6E2eJSjiGsApiGHJE6ef9iYuiceXApm71QCsvC1qfVEWZQMVoU7bUHFp9",
  "key29": "3DgXpA7S9kZ51PKbHypg7UCSiCjVxNvTvnvA9Xkie2GrZvcUWpTm3Co3xnqnPMx7XWavdNTW6RPXnW7Be7B9EryF",
  "key30": "49RMpVPoxJ2oUasDXL57T5VkdLCA8ycmeeadXRXH3ec9rmyQeX558GE1VuFb9dWq87A8Hrs8DF6AsWqErmhX4Vge",
  "key31": "3Lo9HmEQ6fi82eVCUtLCdJji77FMzGZq1r8Gvh34qW3BKSFzGMxWfykEiPyntUS5umBc8XfXgzUUV82RCuqJNozh",
  "key32": "29ZEqaDTB8DnAZfLkqa9wQHJ4PCVhfJQ3Z5W7vow5kzgMrQCHhvnCXv4ckaFm9FMK3cRA2y9yMUoTBAVUYc5KP83",
  "key33": "3f3cDizVZipXCYLtxqP423VKfa43KjeyEVFGm5YRKZUUjQh7yjEQG2R8sUkjdcWHsvUADb7RbyGbrAzWjrNuPanU",
  "key34": "4Gt1kP36NZgn6VXsDRSFMDmrzzTzX2MwWJNNjymicFeQ48nBmHPJm9TojGiox4SPpDVUiNP7LTLBRksJa1iEWY9e",
  "key35": "3GCevUHXGZGp1CeU81VNXPuK6pxuJ2k6iWN38CBXsWwLEfaQkhiaZUn1cvLs2mBajumauDVd61Qz467GkMgy7uyE",
  "key36": "wTk4BV7W1TKGPK5crRDfR85BkMQdEFN7P4W1RmwGsAnaC5WUv7FyjbscqWvQxVWzaGct8SxGLmDcUHzShs1baZT",
  "key37": "4YYoAGQAgTLQFpKSSisMJ1NC3seXiCZTZrTLDYYcFNtfYbLygL6yMeMDYoRpWLZv9D2yhx2wqSd4mJHibYg9BJ5Y",
  "key38": "yraJrfbHMFDna535Njy6HhaheVpUe3SMcarQnsxSsbnthA3rfmcD1AVoED2m5jwpHAh12fwxSwbSfjbjYEnU2nY",
  "key39": "3SSjVdXbjd8Rqcyys7oAnb9S6vZAmoEPGRkico9PAPjzG5Bi92Pa2DKWPW5EixSWfnCBfvf7mX6B1ihk4nWAWQN1",
  "key40": "35uTvLyJ7LNb8P6jESawVCpRippqCN3g9iBpLD6jtCP1CXo1tkd88CBW5V3TsnoXZ6UsigZ4dhuD4q39m3XvKZR7",
  "key41": "4i1XNHYgm2fiViBgPW3nGf4CVDm4hbtVod38Z7VNG9MWiHPk92TE7khUPUWTuye4vXZWn2ZPkBLYtt2D9HuE74Z9",
  "key42": "56BgzQqDP8SfizYgsXypdHg3AVvLAdcXEp5nsNk8bjMMYziPVf2W1rrs7KbstytWQuJRCiuYQWWNhknVdH4CnJWd"
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
