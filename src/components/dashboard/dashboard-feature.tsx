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
    "gEQiPTUP1wKHhCAnM86srpgeykmrH79W2zi6bGTZV86DHhYnqADkmNGGo4AdPmb6aWPP9vJ3aL3R7Vg4dLZ1pWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QZcqbn4ViR7aztrgveNMLs6q4HtNt9EKJbQmYqa1YhFAN3VBmvLwoB8j4EeWfSpxwaapE3gKeoTRDKPMfmi74RU",
  "key1": "2XxoYa18vMqy6HXR7okP8CNAToyWpvGbVuFKb2Yu3GDv1tWfcLTWke7r2avAkiommWXwe84syVAMS29N3x9hbyPe",
  "key2": "54rK5tti15CNPhKnmrABeQoLm5jUoPXuAw3EZdvZkgWygHCWwsSb43vxsySqWGiffAWXAxz96NGKiy1xMWaJfxut",
  "key3": "kD7h2WmHNmuXbE9fCuLdFERZki4gFVqLBazPfQSitCByTG4n5yeENrCQBXYFWdXuLaryjShmL3cTfB1QUrHwgLp",
  "key4": "3a3K7sk8ir2JzrQQTWGe19WPTJTyNT11Bgo865FQyZzxqRU7GxRDZecQi4KU3HkuCLKvftqiKf1XrVjGou84Exzm",
  "key5": "2cvZMw5e7GqVmpRhwkAH9iDQua7rg6Rc6v9pGaE4TmuxrSZmUjRSYLBBB74p8smGCRVh8nAVgfAD71q2Wu5TfaVV",
  "key6": "34Uhkg4XB7tp8pCekCUSfZN5eu5bSuBiaiNEWa431DhEBhuyBxwo4T1QBb4EJFKSPuuXsiKnuWWsrNWyREwy8EKS",
  "key7": "2JXnLTAHuyaQcTuHM93yHw4cXemufNEBiToHD32g9YLNXPk4gFdyyyFiZe3fL32zapkeLQ4EF8mXW6sg3eDatXSo",
  "key8": "3E9yhRoK3kcdJNpuvn71pJd7CXuhHuDt4SZGPFJJyENUMf49o87VSDAdr2vhDabfFhTaVT9FxJtaBR2iMj1mSZir",
  "key9": "5tidxQD348ckqeRYVLV24NAnEAavssJEbUrhY1jNJGDk95emZa9ArHVk1cFouy51YUeP9yLfJ4AyMyVa1yp4WJPo",
  "key10": "2KPY8rpCvKMcw3SGFLCywgE25xuFBQAy7ge4WdY1ZFov1SKDBoDgDAwUbKuoNVfy7Wqxp5qwQmt7bpY2R4kkGBss",
  "key11": "4SYENG4GZ6ywoLpKYJU2W8JYL9NCqjanRqozB6YtCiEGiFLPeGCiHrwWnx1JeWejr1xQ2oxPt6gGR6Hw5McBdQ5m",
  "key12": "4DHPvnMmcpLesoSGhvZPFhJtmDT8SKuWEdsH4QyWVa8K48VNQTDbUbfvhQsNujzYuvpdi87SG6oBbWGypQNEoMhv",
  "key13": "26JekzmSYjyuXwrq1wsQR87yh5biQgULGbjJx6itJN8iBDhhQBp8Ts3heTGp5THFsd1scnZWvKEAxtK8Yzok7VRn",
  "key14": "23wYDHoxVm8HS3pbz3KugTH9MX2PQzDoUZ6dQdz3mvBS8XFd3rBthxjZLUJbgrYCE7ue4kv9QmzFtBwV7z5crAj2",
  "key15": "4HDegG6x7iuAK8Ne55ohDxpXLsea3iU9QxMp4R9RQGMkUzGZsKPHYKzxcnq5n5t7Qbvgh25MTP1zamjT9u3cHXyX",
  "key16": "22QncGuKEo4f9udRVPVZvBVVLSqayvQZeKXS795XVsmcXWM8cnKBeRGdBpo5oQ1yg6VTR1X7Yk7EoeZs3DEqrt6Q",
  "key17": "5WYwATe4UQeAfZ8QF8Zft3A3yfyjCaN16Jr2aRPnkp3yz9iQ9AnEsmnNSgStm2DKHVkFRrL9KpR9h7w6kBSzGtAJ",
  "key18": "4QdepQDFQ2kKvUYMhzuAjUPEMBbfM4ySid2ZTsho6Vsgo8Wsd23vA6jBiWi21Ds6DSYfZTde4wKB3JtHN6bUpmu6",
  "key19": "2NBfPsLk4mMbzeFaeQjTzt6EoqJdtmyfDgertCp4KPcDc7rXa6FVKWcrAWY65ruocgdLyYrMgCah75izfJ2H6V4v",
  "key20": "4Cha8RdLHEWvvbfGnHxd7eKJ8fxdgNoiCwao3mCXQau4qinXvZjQkh8f4pM1LNSs4qjrSxjgdSUu7P61xPZTSXy9",
  "key21": "zXo5qrG4bxEbzAgKtPySrDRyFspCuGN1YPWSLdH7XZgCyvqoeNSvLc4yTPKbEA6TSiaeuwnBMBMQFqZi2S91vem",
  "key22": "B8P61vKi8kb9BphYdrdAe9zM9hVbn7y3bdNDrEpCZeHGYSjvpgv326VBUrGLSAdCTexg5z3ofgVdB72hYKgC2GM",
  "key23": "4uNPhj3zeAYH8RNgWyojSMmrqWYcnazm7ACxUi9i2CWcBr8TWzLbb795gowEuRMJFrPbSCrcFk8n4KfvX1a9hSHN",
  "key24": "2JrCrz2W2Z4vWHs2Mhdb4jEMQoRbjpEVsPNUnbhMC2jNSXaQkW4PpVRhV2jNJ3jWn7HxjNYJ7Em88eYnvJUnGZrA",
  "key25": "397YVakw2iHPwVMg4i3turfyFNE9L2swTwKWMXVapSEh7isfHBd3DQgWoRppTt63H3e5MZ8YEqBmBDPAcb18eQ8s",
  "key26": "2yCQUohKzVtnC2Wrbeyd3QLxsiG34RhqzSUqkQV8sR23MrBHXFgaS4QY92a5wp4R5u7zWXFb5DJ12ed8QRZqxinG",
  "key27": "2nkEHm1tY7BfHmAFGtix38FKbj4PkX83cXqcDg42sFDfWxpkckb6LeGMZDPJPfErLhjHgfAoMKUEyEyfLZFfG36C",
  "key28": "3cSwW882hvSZGFFGvkPPyghucdCmeKjvHJ55TNiBVwdz3Qn1WvSBDMFYJn48pNap3gs2a6BFLwRyVDCYkqiJW2LK",
  "key29": "4usBkD1kQswqRQpSbFgUpFMRNaLQW7qtxhTUpRkJAo4ZbQdJsGq755ps56Dy8AAi32VoVskGS6wk6zmZNRM42Hs2",
  "key30": "5LMEZUyzYf89E2ygw5Xw3b6FnamipAY9RnJvimPY7CQk8u3qWmFY1DRJGaa5aDrmZoXJZXdLHpg5eXWfWz3jbRZf",
  "key31": "4rqNMmJctEQ9fhLXKxMPoWKoWGAsytsEtRhLsvpR4GiKkApVEz8NHffZctdvw5uEAfGqwviXq6G7DdsX4sgDU2L3",
  "key32": "397xAU66DcqaJboxnnMAfrG75MbfncfiF8zi8RJXHf62R8U2B2pCqNLjGKizPCne1pZ3jUxfetpwEvu3sZDeMnn1",
  "key33": "5QetQJnhrqQB8RtZhTe8ikFM7SyYY4jF9CH85PH3ScAEyKM97Rcpf1BPqH8ZfmiH7XgCLbE53PJanHcVe3o1d1QA",
  "key34": "36Ff17bfmQsfGgrVG4ovZ3o8RE13GAVpzQC3oTwLSqaa9jdtamSuNX86WozNE93xHezhYktv1civH4geMuNEXpgo",
  "key35": "4erssS1w5HeTB4pRYkewCbXfLMeZTgQfwrdbGzBGeK5wFR4S9s1eyQK6q7doCeYwSY5t5niq2687ubveb3mLXBLW",
  "key36": "BgXY6cQMdXCBXn3Sj5iLGfdFvnrTEs6shfDHZ6Jnaiv3hnhNkyVNujTQ9PrZYDiLB9bZXTQP3nv3DJ1Kr6ffvvb",
  "key37": "4cfBQmXXAjhJKT8TGjkgxtZCi5rL7eHJtZkEyhycZzFy14qDMF2XYYLQAz218s8MWgHxmtyv5u81c5Q1fH7vauyn",
  "key38": "67ANSXZXhg5PF5skE3y7JRFLiceSvyFhtE5GajsSPjUqksoJy1VFnN3H4TVJTqhfpRVaBkBEtfnrVytstyRZYJEh",
  "key39": "3Ez2br33HJYpvy4Bnrq9xPbvpFgdRtpSiF7F4mfsesmUNYU3doPopSFweKpPRSUF43EYQdszeWEuM5jgAmkn8y3A",
  "key40": "31VfixnmAD4Lif2gjnTof7vtApHZZTcTUBP3SWTG1sBHYyajiGHVoMtKECZovUgtpsLQ2SGaTubvdVvKAKJKgb4B"
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
