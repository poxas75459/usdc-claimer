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
    "5iTVc8PtKJzvFhBsAzjg3t6DdjmpcBpNuBaC6AwiUHtf253YHzweHJN7JkXrCqwZhhyuck51EnVXcFwfZkeXiV82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S2W2HX45mKqgm7CAxkQqhgCzi3R1UM2ZAMdPaaNV8GGdMV6tF476GxyXkqUukwFu8CWYREHb18m2C2R1fmTgyTt",
  "key1": "s98R3TPKW229mg9XrEMjertkse186y582hA8mMgqJ2nNWt9J6QDeFUjQ3k8JfAtFZHjbygXMaBVKwgUKTecWkQm",
  "key2": "4N9ee9sTutXcHhmc7dQscqKWFqKUKw47NEWcKniCj4cJU4oc4yQcExs5sgcZMc88ZHD7oNYgTWKvXT7Y249qYXNQ",
  "key3": "5vXssPGBrGF814k7wy71Ku83mTJT6NV9SvpnuxAPgrVHNBm2ZGqspdMokNh6CEygzNXCA9FU5DGuiLp4YVLxxk84",
  "key4": "355NFkYz9kwWNtbyLYoyKWGFn75eKwdyZG7XwWXHwV69pZvPsgWTngAsq6BXhK4abB7YZh9UDQ7dJoaAvL7d2hTt",
  "key5": "T66cwcNXzi7FoHauLjGx1HRcK1Pjz1Lv3235eALw6dF4MRyZGEjh2a6tPxNN9CHUd4Cirqs42RV88WRQMJQS8Vq",
  "key6": "4EBjcWa4ivAHMfUM7z7qSG71t8qn3Q3tcAdEKvpd67Kjz7WsfcUnnHheZEZcRUwjAH37q1nEW5cXQQtNG8rAXpEk",
  "key7": "umDyogaxYM7GXzJ2arUgJreY2EXjPecWDcvHazAqnbmWPokJa1DS4QfzqPxmCjmukt8z2j5nPs5St612qYyU2of",
  "key8": "2SxoZqb1vtM3E76su9SkSqdaMcW6o8PpoxrSN1b4Zzp6W4suj7re68yzjzGMRMDCu33bz7p8hBM8BzGi8LQbJhFh",
  "key9": "4khFmjtqYaSfL6nd2EKEbdatD3JzJUVJs77CVTasozPTNXfiyWCpJx163GSHJQm4ZhfRR8emeq6usRBD96ikDSy",
  "key10": "2N7VocxDKVGPueK6ZBv5Pd2tw7WYCtNBM5LenDWNA4FnXP9srRCnpEENWYVrRveHVydPBL3GmS9bFa2fVH5K8HsP",
  "key11": "2m4Yg6FadXCeZonWNSFgUpSxJE1BzmCRTT1cGGhgYsYLSSiRdVQNz6JptSSHReQqdSXpeCosAdMW8gzgc9RLBSqJ",
  "key12": "4ddXoatSA56SkWCqMGfaX4VzeowTipfAbZuVLxVWtFmbhQc73rBZYvjWvK4caDnYqcnXUnorX9Z5S1VcurrhQUAB",
  "key13": "2B6okB3bSUyELpz99mzqtqsPqq3ERM7x3AAQRACSEwdYK1nCaFSVRgevppzGHmVRpXw1eDmkp6vPakyibBA6Bcds",
  "key14": "2EdbjZYjYVtYEd8XzL68XrHjgP7SetDw632JDk8QsoG5NzsQtWKdDES2b71ym7pc5oU8niSHaRF8AnZVYRzdcCzk",
  "key15": "3z1V1N7FcW8fih2BuRQKNWiH3rUezUYRDG2eZNkccudXVpznSMf4y3tADPhE91RCNCTjX3o2ZZJaVJhjKiJywVML",
  "key16": "3K45UAmG1GtkT1TZzCth1LCTniF9KPrc4CTG8Fq5dZxhCt7WvXzmEH8DTC5XPnsZ9fnNLGG8pcKj3gJkHEtWwYnf",
  "key17": "35fEgRjU6NxRbVgBKjj2YFDKGoHA3TW817tkZQkfBmcCNexZRfSHQFuaC6gwAU8sKCB9tjwzcu2hEX6oU1wQ4zRN",
  "key18": "5PzR8j7yL3Thih1Tt5Hzkjv1aEdiwhq1yc1btY8j4oGMYuKSzYMVUtCUUQTAB3SU2SAWuKs9hbo4hv8GQWaFVN3n",
  "key19": "22xPs3gRwmM8seaR6vjgDemK4nGhLkSHrBq4e72gP8uffEizgFjbKptSuhjVJsYnmqPztJLBnkuouKqmioG75WdS",
  "key20": "4oFLfDx3ikKxwXRfd1thCdkbsPoZxS7i3NPm5kXTzxba9ooNqppLpjCgQi888N5hhfqo9AhQ7XztaLf8PMytTarP",
  "key21": "2XZGutRvAWjzNmxPCQtRPcGjMCtfNfazbUJdxUqH7GJQHex6SSVX6EpGDKU8gyUBEhgan4KZu55qikNsUAApfvxQ",
  "key22": "5Tvppvtk6mzhuCcMauNhAnofZ72ReBX7oH9w9BFggfaZLPhSg1qa7XcWg362x9fGFHKLzLhELbmJ2vJZhoYL3EPZ",
  "key23": "2JoXMGNxkL4deWQhoCiEcxN6ytyAiYsBCrppP2xeAMerfepe5NyHbrkPTrBCgQ183kiV88ZptEgYbZJ2Dc4EdLH4",
  "key24": "2bovzFF6UwJ5Qi2ABr1rjv95Gb92MyW8Mq4qhEN1MP2jp2fDFMV5BMjAQqY9KZLhgDPiSezowufAW43QRnDg2zQ",
  "key25": "WPnvHbX7kS9BNNCZc5s8QPrnr4BynVBodGbPb5JjZb13dwCfp389T6qeyH3Bs7HS3YjcNS1BKRNr2neYcKBTTva",
  "key26": "gVjQtmgRa5eDHDcyMyyV8Pm2mHK4GLbEL94B3L6txBiMTCdqHEuYCwWWooFFx8TRiadH7tGeVAj5K2s8NCXDSqd"
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
