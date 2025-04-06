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
    "4Ao12ZT72SmtYx7BE1BNKQzPh1jTDwbPTQmwhvZBEQpaoXvrNrausXNKpDmondoEGx7WswkaFdZKmg2JxCcio1Pd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "244Yf8H1wvzH8Zdk15kn9AJQ9QyLsVzboUSErGcV3KZoDN1Yg5FkV3saDbYcvaS5W3gubWZAx5gFTa4coR8Zjf3D",
  "key1": "25JwqNLfNLMER3RUb9pENKMtgv9mXe3nHuj66uFZd16so38HjVpMnfJCPbVGkaWD95RXGwGmJjEbDdX8dh1FyhEW",
  "key2": "5c8aiUEviAov9SG3FU5iiFoYpvLPy1iWjGn2M2f9S3Sz5nvKc4P42bj8idkWbj7a9b1KuUZYr3emU15DV7aEWn7u",
  "key3": "5taK5k56BxXtnAn8CqMgRXu76ax4mU3hjJrUAaK3gcc52HArBzJyazX1DQMTNA47appuL2fTZvbYoc6tBaNm9H1n",
  "key4": "5Be6Ui6MJ77Wat3hNvYrsNzUyKQhsSTDn3rmtk1jAg7n9Dj3dUxjSn1BNXx6eYhyaVN4BEy1nS1Cms8MnbfRCnFm",
  "key5": "4FMqzdT553LWKXyuvyR9q38BeioefcGkmdZDjnzJDNtLEAmtdsLtyQbpgMRtERasA9WdVYW9Z4j7ccQLkYbcFtvH",
  "key6": "5obh47xcrtGJCbh67UxXBCGTHyLJPv7M8hRvJJQVmGrmgZTFLwsjSTqQ8k89zeNkUohSju2x8CU4JxBDx1FSk9fL",
  "key7": "YRz9EnTunLHkpaaWJ2r88g3fToWbkDqwHWsBX6mFQubPxHFLADUGYiqJkBJF6BiXvDjeFWAjSr3zhqgR9uRWq17",
  "key8": "38vj2NMKzHnxvHaV9Tfd4sikWsoikTfWkeA6me3McJfatGS2sZC2BnBMv9zejpWFZ8JwHxn1MecBfk2gaSprDi8t",
  "key9": "2huW8wqz7JVzZmE36B9vdrMo675pUWed376ZM4ySde1GHa7KDBVeLG81dKvN1SHhfChMLAMp6LAPZmNYoM2QcFht",
  "key10": "38fvhDFTjgm8Tiu8WHJDg6sCvEeQRzBUKKJNqshQpBvcdmnCC3FcEe4q14GX3AohB7u5EBTEgPzGyxFqjMQzmmfn",
  "key11": "3MGk2LWjmjVDGGmS6uYYbe4o1HQScHBVrnLUd29EfqdZJQBd9yqshkdC2dcz7hY6wvdgswxneuMjLzkm1H5WUTQf",
  "key12": "5umFs5bdYdxCLGxUjPw6tp6wnadL5jgsLT8hnLduyAhtS8H3UKQPq2uBbhacwVbGZ4vPyCqSL2pQkwGoN4zxM8qp",
  "key13": "4DPeZxiAQK8DDbY1qQhVenRKQNr45YSFQUdo4ZPLB6asT3t1GUtNEpdjdDTYbctrh4fiRMLaa3ZFsQeTqaBbGDXm",
  "key14": "33j2oVgTBJY4FqMVskw2RUsU5wUeJ56ks9HEhfMEmauCfEnPbCqX5ZP3xjkkMf4dNPDTbwXNP1ZvCyiC6N61w4T5",
  "key15": "47AmQfDzBPChzxSCNi5mE7jua25MGDy4FZHFyzawqTzSegZgKhXhLB57X6cdFcYn2Wch5ZKP9JLJBDWyaa1YVScK",
  "key16": "3PHYZCJo9p6dNwwVqLtCQ7FSEF6Q85g6xpJsRwBZ33C781g8fvnA9dpW7uY3Pt4bECB98TTbjqFzs9Dq7n57svoZ",
  "key17": "4yiC63dUDdFnauxd3sdxHsRrb1WBNJ1wk1rmpQiCTda7vf3CghgHDxFpaRMWftSwE94W46MyJ3zhM76p8frQzjcA",
  "key18": "34T1jFEDt3x2VqsYh7CghaXksJjSNZmia6cB3ZNp5j61pXeCEZoNSAFjV7Yg64H6rYAasBKQfYcXSNSbUuhjaGsy",
  "key19": "2phxBgjyazEWR3cq4ra54FDo9o4McbX3YY1LopK425dXPmatwQqLrF9DtHdLJDwnRdc3op6AbAALnx6916Xufzip",
  "key20": "obaGQm8ZPo9ZxN1pFFwvg8pfc7mBWwvQi1kr6rk7fAxdvkFRehgUeoto22zqzMxyYBEi2iAXyqorpdNUxjvcsAQ",
  "key21": "rb6ap6UYLbe8UiPyhYjCRbgLbZMFaM1CS81PTcDSUTkH7JSDTBBpD2BENuDGpjGVUm33ShathSKXYpKgZs9wnwe",
  "key22": "3gsF1xxAdWYH8kALawKnxncwytgDE9byf4ijowanHFgVSNdkxZjV9j3kQUfc4gSMVJ4S1qgernxmsApfaXPStQLL",
  "key23": "geSHSHFMjTAecGfCa6Z8St2RedDZxcDytmGQZSBaMfYCtmM3rJzSZiaUChyqtAGEkK82n3s1yxW5JBG7LDAF2yQ",
  "key24": "2GrcFSsk7ja2YB2QWVY8zv4CB9wrr7GW2BFjBJCU8QgcGcPAQP91zT7rSQLFX8jCYqeD4aRD1ddXJ8V4gwYsdqE3",
  "key25": "yt2Q19MuYVfgVJbFhqfw7SXPYLLCvdvniBitmKxDpnwAm84din1kNwW1Xu6KfzccKErDzdC7ebhmkV8aNMu9auj",
  "key26": "qoe2dgqQZW4zWcTSrRaeuNmQfzWfxa7Y6eyX1xEEdiT9j9HUYJMjqkyy2tdyKktnqz1sxKFwyAPJfC9tcoqm3kA",
  "key27": "4yfXcd9kUBLCt5bqv9Ntz1LipWLeLkKA5XakJrH3zGcGr5k4GRJXk7Tk5GLHCD75ZvSKCDA6voshJKiTCyUf7Kdz",
  "key28": "3s1sKWEic3SgHoe9KoNVkbeSemwxUKUxUAZFcCKBLGx1VCQMg6nCp3BYdWmF23yeW2osHnnL9uVqCrdvdHctqHf2",
  "key29": "JaqhXJ1wFmoBQEbwABnzqkKeQeVjN4RnQHMR4rf7v7Cxk9wbwd6w3YiMXyVUWRZJcAKCYji5ZnTsANXMBy7yaJr",
  "key30": "53Jua6JVBdiMvkQaiuNqnBjbUAZZHBFar1e1pgXYfAmpVzQLvWVfmGSppe5H87voqXETJBZSE1JCrraNbg3wbxgv",
  "key31": "5KJTjS2TJBcoTsa57WBpYYtAdYs2xh2Qb3N7r9WLwCPKoxL6Zny3VVri81CvVZiLpzsu7RNusDrFDYhZNmLCJa3q",
  "key32": "3UAFANgNJB7mD6SQ2TyTLD6yDPDU3SvDLHk7nxWf9ASV2m58nVSkKnLdo5yGAHjNFaxaMmPo76eRJGXfFdtpzNXQ",
  "key33": "3ZMG368bA3SMNFRocTSwGipD6TftuvzQCQspMVDDyWphDmdqwfSwhvW3okk7Afuess4wT5wJpUoHUmZ3r9oxJUsN",
  "key34": "aY9UWQ6ehGka7f6H25h15NSr2JpjZHmaxTxQfJeqtnDMpC3KnXhUEYQwHN48USpwoihMaP77trfhdh1V3V6fbfh",
  "key35": "2VMtQLKKxyd7EiPKLhVQbCwyzdpRg6DGLw5GvM3GE8jnDvvjcAJ8Y7PxqMwPjJ9AhZa5MK67zTeJPAbaqMQdLw7n",
  "key36": "4uk4AKZMGS7XfW7n4LdY5qeUpNokvUkDC553yTjwK2XaS1zN1FyDh17tGEaiaASkBZsg1ggkT8PiNgnSrSP3WAeG",
  "key37": "4NdCqirWqEBKNgZGFABT862HFUT3jDo7sT3bKDq3eiBtypfTb1Ci6cgbCVk6swLgb1goExYtkLriXE6LXr43kzAj"
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
