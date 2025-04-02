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
    "m1kkHipzkvNEDUyp2dnmVCwbajx7n3DMGcWg7tTZEU7rkTdzmrThzwWi4XR4GoGADEDdrWaFgXBSUpASGPmQucf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dL9VzNaDgReSTrV9v9HMav6x5AcfdPP28FDSUyeoArFB1iKWyN6VxYmAyv7R79T6ftvxbciiVGQYjz9Jq1755HK",
  "key1": "5cXeG2LwLvTmMFiZAQyYXVC3RWzQCKuguqhC1UZ16p4UTFyo9NrauLynJwY8mGozgEAY3xmhUGsatESbK5FzzyV9",
  "key2": "5kEg4ty357gKuXyfCfSr6gZv9WQQyWkV2ZT9U5AN78BHk27uwZP9H26FxcNqepyrp88GjwtjYntSLao2Tk3VgeBH",
  "key3": "4WG8qmooeAga4EfRsFnEgzu8TEWVNLH6TCjMKaLTB1AAAiGxRboStkxR8Kvy1cSdajQJNxBsx68xodSG7TzE9pbA",
  "key4": "F4s69xwQxb9qToCJWW5MQ1FJnxwBPFsgMKy9dDXQ48BZoWoDuTe1CvscBs9dDhA6n9XjEuwuUB1njXiyjy4p3Yq",
  "key5": "5eaybhZ49CPWS6HCoASRHbAZc2EGk8ySLTX3spZ2tEVpSm8iBj8QpBMeHs7UAVXvupogGi9x4W2ZD8qtdHBryRht",
  "key6": "dcqhyELVAVCQk95ZU8izrtTFaimkpBy3B5VuwKuX9Va2KkiiKuRMwvk3xrrtQFTdEmyRzFZ2T19xrs6UCrzLLxK",
  "key7": "2Wp4R5xwQX476smH52GW4Yd4qebzLqgoXTwuCBX5xUBoS5UeSqEqQzuXDszotBAqHUzhCu6mfssm5QVqun5NnS5L",
  "key8": "5kHsbVoNJuXiFxwS3oXRDtBcmDscNMEtQaxawZzrmy4CoYW8yQu14cnZEDoBgsnY1nJCNDhbrPhwwkiNNxcUQL8e",
  "key9": "3SNY8gHDj7jPduYEMMrqoTejoJrpvSYziPiQB7dbA7uTRxY7JnE21bKpmTx3qgPhA9LHJ4M39watFsP3mJQHQCHT",
  "key10": "3jmeN9ZBAqtRGwphmuWd5Ldy9cdjkptSYYvGYCGNd3dd1ZGxXwDhTbgffh2h3vBxb7cRV6oxFPCTBi8hZ1vwKWva",
  "key11": "33WVU7gCZcYg4yhnkU7AeeEbv6uZR7vQi8bvDRHExbqLHRwUmPx9Vb3dX5UPZDF6WuhARQdMX5H7JxdWZo1W1V14",
  "key12": "4tSZMpHGrKfXcRY5NqRvpMXPfAfroP1YGMguMAiRzLtpJFkLf4hnq2A55vCaTR2jF6i3aUH11aEXsNPPpw3DAh9D",
  "key13": "5xV47aREU6ggxESGjgz7LL1wCUTESvz7D2kdu1eHN99GAgcnuqYACjZyTM9DccmrmgntyTvqTqvzW4UFuTgo4Ro7",
  "key14": "ArfseSKZfsWXNbePKXz9cqhBMvMZ8cQMdiGyML1hx4W4UrZkSR3DMM3RmeejMATQdxENJwCEg2r5yHkzgcAnusQ",
  "key15": "31MCG2tkmBGNFKgsPLSjkFzafbbU4MgighiUmrwcFaD6388jcaeuBLwbkp8fJabnuFvFvAYoy9hFV6ZQcfGnRYDZ",
  "key16": "3e8tP5Ud7iWtoUDRyZCa1hmBZkHCJgc9ysZ5QXPukb6YF3asw6whpF28s8xLHFpcTuH2mYUz2bv7jU34MtpDwgm2",
  "key17": "3KVhh4eGrn11Pfj7c7EZ6MfCMinGMU78PFhg9g5JeA3b5BquKQ7VYJor7vPakRTazRvyDs7qaBfszVMeRZuD5xus",
  "key18": "3tFw86N59WEXDmcSSFzp6hKbiTuN4sCAavz4YNkrQ29TSRHW2wt89feJtvjuPy9P7G7vwGQb8DUCkJL71MoAa9Fi",
  "key19": "262nzJrG2t3fCRfVHPR25S8T5WsECEJGmkQRdub1B4HFJNyiDW8Vmd7s1K41wQzYALuJZQ3nXH2nXDhqoGRxH9XE",
  "key20": "5nYr4Xg5WpduJzppzNbLSCSrdhyoofyq5NfKWmwvSXDnh7xQ6BLfLMhHUZsAbFVjuaQLK35Eko5gVoQxj7xPCt5i",
  "key21": "LfV1Xvvw2pj7ZbRXrfsspVhYCnxpekCBr8zc6TWm8E1Jn2qZybnymUWnzhbn7WkTtSULwjb7JbW41ck867vThLD",
  "key22": "2g9ccZwGaoiA34bPsfNQzVoGTkWapTrMwpAyxTiF1LEQhq51wdeJMtBv5nhbTWuqcrnWqRyZJ1bhz5D52cdfzGty",
  "key23": "5ANdgumXWSNybsKsZdXTPjef13Wc2rB29bCWKngxrZQG3hdEojKuEpvJCASRAWRvrLATKqexMCeSFvr3StGhgRzK",
  "key24": "2vZap4aya8ocsQbCA8HQGN1ff9czF7sgHFr7mWcADDH3Y1cboyrXDrstUMLA7F92rAYJ4ia7RWcSNVe6792gWDXT",
  "key25": "CV1sX41bN98b7qkT9K3Lm6tXr2mSrYSte4bptUWNyHBpq5PsNLK6SksSduZXxEuQ7LJEcyqT8tBa5jNTWjEoKfF",
  "key26": "QrRKkcbHXaUopAmy1ejRRr6PKqH5bJF86iNJgxRTJ3niQmLw14A9A7R82UCLVi5hz354Ev9bvT92BBhpb5BrM7M",
  "key27": "3vyk1Eg8ZFv82rDe5FM9m2TMVHR1kfY27RbV5BCxy1Bs19vuBrnnjppAX6vjzxYHkvw3xrLQshcTuES5HhWqBttW",
  "key28": "3iuvs4mmC4M9osfpvZ83jD5wPLzeDmzJvrD7Z5gVu9kZXobrNqz3q57KVLrfYFgUEe2Mfs23UQtESbxcFNLD6gnN",
  "key29": "4kVzt5GM3v684ezF78ktqpbE5t366ym6dHERd5sECEn7x41t84BrSaYbmAYc1RHtCJ9XarCm6mpkxa9X6YR5kpYG",
  "key30": "3VumaV9yo5AgKFVQWUbGQxFt1CZT8ERpn9S2ygBvWWq3w5361QRT8ykj981MptQ9WEhupPh2qdSWDUP8vvZzjpk5",
  "key31": "tGKGxHQVab1DAnwKNrydwUBU4umjtidARAg8ki5kBTKsE6he3XWpf2TxXEuH3KyqsTBbbgZtVe8eTnMwXcLCSqX",
  "key32": "2btqfLy5vMAiZ4ZkmjHUBJM3j9NGWYNDnjVSJwcJN1eGcApUDkLMBAMuXjkB1MD8riLaDjTmgKnE3iQQwp3G3hHK",
  "key33": "aTYDzx4ebUBx5kFMvNcjpbqsNLBHsH4DZafdAN8nCvDcp6jqCFFFsmLLDSmsYmZ2Ti85w7k7kYuaPBSqhGqezGH",
  "key34": "5rVocTDqdimp3pckf6SkUyMxpQdrMacUVvv3dw4EzhtBQujTbZX3WuPEAbeB9ybCkn1j28hBEKJUSpot2MtDGhVm",
  "key35": "3JcgneK8mXpxVyyFe3XADii9BDAnD4pD8uf3tp4s2PDd8qbuYwnNAfb4Bu7WyYq5E6NwJEBS8YsFciaiom8xztgn",
  "key36": "3P9yeC5ZXBYMWetaVZZb7iAV8bxwrqm3qMRgwp6jRHvYe8SUEMQSdJYK7FTnEpVJ2Vy6w8xbMQoXJwaCS9oaK2oD",
  "key37": "xZ37hTFsDT3X118iB4jwMNjPxcCtPEo6HTDg2VU3mw9N5accRG8ATmGSnWVURVN6zhrv6z3NVdvSmVny71VgG7s",
  "key38": "4HPm59uN9CgreboZUytVbu5fWRAtMXsQyJx8vv2wzTV5MnpR2FnaBQqqpraXX1eHvnXFfyeKGuo4rX5iCGA3eKD7",
  "key39": "2YEJy6fJyE4EfubYdHPFUDPzNaxMGvCiVzQEutJnv8cm1B3VL9UR9oDL548CZCTZB8P1cXsTZdfggDxHUF16p11V",
  "key40": "4iiNqZZtSFAmK7ppQnZCEUrsPZd39nxeS9ErcqV85DAowQnjPYPEGWaUbHowWXR7RvAdXNPMcRJpdqT7dETGJ2AW",
  "key41": "3yjMh5jiioWWaLodhHriVAgo55ED4PYdtMnqie88vHqUhQHG3f19XueNcZKVKNj6kQ81VLQHfbH4wcTMYN7Mqsdj",
  "key42": "3uguVsV9H8tx531aW6iAHs5h1v5WTR1k3zG61craK7DwHK9A6Gi6m3cPfiNMgmm4zNMCsgnW3xUt3Sp75Gnbpmhq",
  "key43": "2rhPC4T13up4EAQgewmp6RHPYDtgXUDRSA32cEwjr98Hbt3xpkApc3RFpHNw4qQY7jsBe1mtTp5Q2o9YVdkqPVXy",
  "key44": "2fRhQj4YHLysEe35WJJsyzsNnjGh1HXXeo5GNHPzeoptHoS1yAigzgkt8dKvWDRnQ4QUx55nmyzE5mVdNGxieZd5"
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
