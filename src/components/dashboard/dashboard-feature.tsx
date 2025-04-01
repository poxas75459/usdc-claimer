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
    "2nBMrRorNDcCicxjeP79P2sYKSA5tekjTnCEhqNpH7N9qH358fnyc5P8TKe3TPL88scjeAUejPMJCyNeu3UgEGfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AB3M72udHcvS65H5asujzS1UhDXXuhP3FaKmGMLGvMUWRwFndAyaQrBb3q6CqXPLkLXe1JFpjp2eF2yamJ2CVTa",
  "key1": "4czX3jXMDpe2FrNKdu5S9FH2rTrxr9Po44NKBMydTrryc6Qz2xzH8NqwW5fg2a7TgvEYMiN32yunSqbEBwdw3CgF",
  "key2": "2UALVis8xz4KF2gyoKtjN4V37JpmQNHLJSLf31VuGGg3haMsKT9n8qnayYYSADxzX29DF7aea8xioqi6idqoAgU7",
  "key3": "4JqFhG2Jyo4FkTRVL1vZda5iVY4drJewHxFtfBTv7brUaFFvVCDL6ocsAxWsVfLjX5SFcq4JqTJvD1fi3FyH4Kg",
  "key4": "56Jmj1zpEpaTFps9RgbsQSi9ti5FGbRvKP9i7CxBFqgTZiHWjk8SYGKQ8VLKziZMqhEe27Yf3vEEzW1E9PyiymcW",
  "key5": "Nht2urSQAg6mp5C71Y3zkm59T3fPsAs81kyPpHqdm1VHUoPZbGrpYp8pDHCyCZzY162Yeat9JLF2E27raZCTxuG",
  "key6": "4NQdr55AS61Pe2AwggipxrcR7GjfrHpjqF4HhisrAm3QzWpsb6ZxkyBAW4dkcpTbJHwfkvkvGk9AZo6hfTZ33iyU",
  "key7": "5LpBvdTyPReZrcAkms3MXy6DJwDhhrWJFrPV363W6ZQijdyFM3mp4Bgi69kXC3HHdrJmpaiGLkmCAwdGe1RwRQss",
  "key8": "2nUS4zGonycvryJZVhyj3XKgTi8V5p2D7reg2GzPJ4NEE7mCw2Z7v29WHgA7tP49TdiazwJAwNzR3yvAWAQFdh2e",
  "key9": "5LUERra9gRcyjw51iNF8cMQVYSs1VMdPf45MgC28XRqV1UYEdEBs4qs2DDeXjWHmh4xDLLQ99PwuguCHM85QxMJo",
  "key10": "3PyEgfR2Cn2ALd4nuXxnPUePYrTYsiX1EZXPNubHTNsDEZUcon53oKQXd5DSNenvXSsqBNk24D86a5dtL8bxBf7S",
  "key11": "RuYRExhGH9zD1CLmQKBia3nkR7QJ5BkmuSE2JbK4rUiG4f6XV92iEVFnZTzKz2ay5TDaSYwMbPkWCvVamfwNUpy",
  "key12": "325YTrMbLu6hGezeWFFEfHMfjwMjyok5vQBmHAP8yHvzZxqiQsPDXtxExEhbNUDob4B2BPtYBVDdpxPK8upx2C6v",
  "key13": "2TBGpPyf25DM8Nub6AgJUtFLcqs3c9zCTj8tZ6LfS46EDbk6dpRPCBqzukRZmZnaVZmAG5j7YLSPsgw3F4nLHNN4",
  "key14": "4gc73WbHnMJe12R59T5xCVMFF7JGZ3yjmf7peqjygBSrsgupiAxE7jKVXYEKtzvTUHruSqb79SjmJznMvqrWVe6S",
  "key15": "4mGiWhUyYPE6cThReJv6guVRgikMyZPoPxNrAcBGDgLp91VZLgSkJzLdcH9LCTNQZRxkoB9U996BymR58Ly9Tbxx",
  "key16": "cxUMGiXygDYD3kqJmtZ2MnWNHMaJEiJHenDBnypj8U5kcEedZXMTVMfXef87NhajjSmL8YkbjcGZG7pQodnhpPE",
  "key17": "5Rv6iW4sCkM4xARRbGf1cUwkYz46uYbBgNvnkdAenz5Yqydh9bYWsjZScRKTbQQfarS4btRPfJZQTuHJ7TNn7153",
  "key18": "5WLX8e7j9z7NGhYitoXdFP2YT9zw7tNkvF9BTRKs2FdijFoph7ifkHNjVGHBAX8oTMua39aKZVizFnUWaJWK85mn",
  "key19": "3FCEQnsZqgeSqBMrgtjhxmoSPToRiNGKQ4cLVnyAvcQkHnUj6W46rfSfgXQAXK2NX6vXXKPxQCcUd28TjGQCGDGA",
  "key20": "2BWXxPzwe61gmGTE7rPQ9Zkp2rvPHZ9SiYSmq96Ki2jewYgMow2QKgonDj7siKD9C9VvxMh3Bj3HMjqUY2eXEHxK",
  "key21": "66Hyfe5pHNMyrYBKEJZGPpybGsxFc9aD1xW4E8p6gkM1ZVN9Fi3nFVPpUyCs4x4TbSpJxStiVRR5AtSSASLARqny",
  "key22": "32DVP2tXRP2TCV82unqKoRUKPV5rN5mKrpKTToWEnb7nVgh98Wmx71L4v7U3FxuboTogtQnordMXSBRgxhaxmoLr",
  "key23": "yTxyqieEkvYdk1paq53E4182a4YzPA5EiRGArJExwUEHZ5JCy1mZr2U6bHz6SusLx79ZdzPfA68jREKoGCqhjNB",
  "key24": "kFbKthCXaK2MbfirYNVtRrKgs1uWmHrtzCnXRmSECbVwmFJmhyZK22iTzhmdQhAdRRHY3LmqNvY9mM9JMFoKoCZ",
  "key25": "4C7Qa9oBEWvqrQQhAKEpou2eXXqw1Afft2r5PxpFPKdY1kdS7DKD5QWKEKANCicqTXTnFivmEzjbSkvJhbZPqBng"
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
