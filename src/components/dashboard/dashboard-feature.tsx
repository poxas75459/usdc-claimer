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
    "54aYYGhEgF1dsLPt2gLdxvM5EqbP5T7YuN3UY8BJ1pxEWBfPfKqW6XtCySHepdA3SsoE8W1nvF3sj8dw6WethWAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EjCGnWcg69pvHfwZgni6DBzT62z1QmG5zjXhRH6iU1J7AYHmrWdBnrrmaLwJiSi4p9i3oN3PgnomZ6qftgpXmMU",
  "key1": "2zxFyALHMRn7B1VKvtCR4rTenq9jng2hbhC53BhCG4AfowBre7RSFRwc3XSfyFLN6JkgQq3E32ChbaVW6Eh2QdMS",
  "key2": "2T4dFXBy7JU7gFCBDELYSVY2ha5rKfmay9Lj7VLSgZW6pegrC1KbaKx1MNy8t3tByygorHJ28PTeRrik442ZQs3x",
  "key3": "5sCSUE5nT1pp4PHCMRfg2HSw2Xdm2RuLAFhX8WPLbyHQqkSXV18jYwrvw3VocZrGtb3KrceC6QGAZX9XywtDMR3R",
  "key4": "5MJcduekc8QRzxD5pg3wg8yRiyxy54Snb6ubBhggZcdJiNFuGo28xrYC4RhcXAKSjmx7eSsEp7YxfDpqMt3dAu4Q",
  "key5": "5kSN6MZ2eTkMBDEf9PPLtaxAFCyjvyQxt2sbzUjRec3CK4gE4gn3BSqo8wJ6zkbiPLau4ZnFPDQXsVZNiYD94caB",
  "key6": "2NA3G6qZmiXwCESUup7hvBFf6c7s9H1mcKgmMFhvBZp81oPmyfGZXQGTghFvhFiaWQwqAnRTGQYk4yvhZb1DTiuX",
  "key7": "61AN8uhYzgBNYSf1CbB7t5e8sjL6QV823WabcKXYpEJxH1AtueT2txjp2fHF4CRhhQqKnBM1KqsYU6Vn7TzKy7qb",
  "key8": "52BpkyLU7SYypENEfpM7fdBtFh8s9nJBDBm7caBdUSeiNFRefAbsp5ATSxRVzwDK6eV1o5Nwa2Mzxc7nxY7dh6Ff",
  "key9": "47WJwvuQQjMukbEeAJPEGedvd76erouu23Wg7Z65Z1aqyZ5fPynvZCRsNaEPEW2xbvirKB99imY1VVbK3hFpDntd",
  "key10": "3MxJYUdm5Zyc1vtiYau8i2qvzKwcy4kDHm8xdPt9djv4ZCT8dafn2yaFGkg45xVZ3TU1SZFknGwB2HxCnerdD8v8",
  "key11": "5Aw3a5V1ZFmm6uhx4HsmhraDvb95MTpuqRB9tM9t7HA2dPHFCLYeu9cXHQzrcoyVzUuPehsfnmdcMVFXajLo335q",
  "key12": "kDnRSuwMn926TWH1odXMpW7DQLuEM9vip29MpqTTS4rpxt3csgbhbAPARYhMXMU9uMx5tx3Aads5vREAFCs2Gti",
  "key13": "5srJKVE4DSJKrVkKEWdVV6mAhiDtZpGMYBasEo7y4FXeLyvbHBUbj7Psw8482UPv2tjhMa3fLK7NQWDSej3zi4Ks",
  "key14": "5GAQNCrzXzoSA94CeHhfU7F9cLSU7cKs54Qne6d7KLsMfDXPZ4N7Uk8YnfDSDLyaemPuFT7rFEZnUfuNMdxj8qQy",
  "key15": "2WsfGAshSJNkcTBY6fmciZGvc1fTw7ryCRTswwfn56W7Ps2rY6cBrGUDjvgV2ViP2stXLtWyZros5tiVTCYxCNiB",
  "key16": "4jZQMpeJVHQMRshWfR3bm5pmPCcjFcoQq7xh7ptwyWvSyGTKQSN5jL1mWUs2yKSpLyqry18JJp1Gomj3Fm2rdHCJ",
  "key17": "XZ2YYDSTe8fVMpyHchcBnEwXgtzKC8w6k1Y2iYWrU3hhx6CLsB9pQZhe73sGf8viodS9m29cbZG3Mwd23s2tspu",
  "key18": "kZ4MYsx23NNV2GwVdLWrqMbV2jFfHdkuU7c8X8qftyeUua6y3yHTfKLtwhFwQd1gDdTxi1xZcu9dj3jQ4PGj9Z5",
  "key19": "4pUUmh13qGBbbenVmMrSvLFPXBQgthFvYA8wpxvW4MrGZSnqDVtkmmXNvRHYKaZY54BijTCiStYgCcXf1XyTRUq8",
  "key20": "2Ejh4kTu5HnAB2gRKpTQe9CHaAnguv3kFGhX5oMq8FuRqhcaPbCCkFTfZSrMxM6qznZBkS544CKP4Qq4yvGebEuj",
  "key21": "4HCPaVaVMXWZjD5Z99hxpviofamthNe2nb1jkzy2pzwjGNbQwygKhHgbo6WkLRGLFLTb9uG5BhNNnj9FTHB5tCbS",
  "key22": "ieJ2267HBxj2WzQ3WTDrYyymudJajteZ5atrMZNwAiaBiZnq9YvTAbgQPrrGCugxMEwAwwgSJyavDnjLhxxRFqw",
  "key23": "2UqDu186GpouGuCMApd5MPozmckZCHzRHBqpVupb113t4yXQxEbamqxa1gbDXbeRCgnA7Q1kTwrquNCDeaU3f7Ph",
  "key24": "397kNLYBpYYJs9kV8k8cXqkHgukvqx9rrCNVjvfdipDW3ZEzt1qN8Xk5FWiQmSyTi6RKD81bmMi3HiXux7H4dWz8",
  "key25": "4zEq2QZ6wKT2bscDJ3tPjijMeec8MUELBatxi6aGkpHky8Hcf6Be56UwLRoqK2JR1TJvJwtjizrKTtRYp6dVn2cv",
  "key26": "2fBotGpQbtvGaCBv137WAM2faJtAdSp96ErEBmohstSEQBu7dWicRSqG9Kuk493JziDzxi5RrUmyfVpHD3E9rbim",
  "key27": "4sPQSV1ZprNtNWEasKZo2MDbcdYP3V2NrHai6GzD5xhXqFtWUgHcUkheHnotc6sqB3qjEepHMehEZgtpi8kBigin",
  "key28": "3TYRqXhaCaEBQgTZAHB11STKsWaUZvdJFQWmdQMAknevBoPjtyQJatp4dFq1sMUYaDyqg3ye7srPUPPJp72eiryq"
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
