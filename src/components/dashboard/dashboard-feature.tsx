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
    "3KyvzFWrji5SitFJE6nicBBFGApv9pvhcmbCiKczgXWn9mAQjpkxJ3yGifAWKqj5ay8UwGPbHNbeLg6R8ndFjraC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58po39J4ar8gDd9PHuB7mHCKKxbY4oxLhdJiiJFFd2vfp6GixJj76xoyPzLiao3YGwNdP6GsSPtADevjSsGUx6vD",
  "key1": "rhm7vhzkrCjd5ix5r5cdBBCiVWpCoCk35NBSrcTM41H39QMRvjRT3DubktpJk472tsaRxb3L3sQfEMjt9MCsHeH",
  "key2": "PWxw9o3LxaN2nRi8xW8cX946mqWUc24Vpfne6vHyW8H5W2MVhF4nvpS5qFNrqftQDpF5YWjVTszxEgqVaBSdm96",
  "key3": "4x1EqP2ermPLooEgnAYivhyEFvFGeHLWxUnhdGdT9zx5VhMfwu8NDYGud1ViU3iZ8o77XU8hyxqu8b4vuKhVaLmD",
  "key4": "5GUW6W6FXkCfgNEuNgqFiSURsME7DMN8GKrxj55WKJJFevTckeGgxYeovGpGQXRAsWQDqPfi9vnLtYaxdf4pSYmj",
  "key5": "3WNVXqjCBf1km4se7cCi4yz8MG6eKtumBe1chCi7tfHmrTXCFGx5SpzcBCiAnC4Rhk5E9Ra8gPJ7iad1oG1h9f7c",
  "key6": "4SeAR2T47Yv2vDuKdSx3gc3smDKLfM7pF2i5AYDJsyd4wXj3aRbzKj1vPFyfrMzcEKQRLPVxsNE7AhS7f8VVANB3",
  "key7": "qUv1UPhXM2HKBU7DHw5jp8PmGZXPz78R6dyuu1HEhk3mNqDdNA2WGnvHRBPdy8RYd1Ph7tjsQ6RzxXhRDGoVgaQ",
  "key8": "2qg3v1fQ29wFsB7krw6Cb9aVgajaJiHcka8HDFouPGFAXUepiewzcJibexWTpNznjkwicHQGupx2UhWzoJf8MMhn",
  "key9": "4yh72TtA8mQRbApPriy9KGd5oPQFqeJhFHkcyS1CWhEwaig34KENGkcctbhRtagJa1tX8vLeEUj9bZhbwnnBDQMS",
  "key10": "58tzAKKeoqtDSjAakY1zDzNQK9aXviVfMhjDR7cxKVLzSHydguX9QrFhfQp9cbUQyQrpqNtPmxU6YoagZtHtwQDJ",
  "key11": "44kacwt9TZhXJuuAF4PckqGiuWFSbAKgYUjtSS6x4RvuYZnXYYX7so2iLQRAt9xSMZyxyxmG9ARNgqoFqZ36gyQU",
  "key12": "yhr2MnT9MWhG39u1T1c44zrN3Sq54sdAuyizAiN6ZHzYYMTzBtTo6jcE7TpsdzSTCixVkvYkaamf1CEAnofwRey",
  "key13": "1i3SrVfqgGfpMULDACAU9cJ67nE19yECtb4wo2HqbK2wnCzMGWjHVySxe86GhSfqTrZGn4XBm6LY1A2QYXrqPzA",
  "key14": "pEqZYri8A31HHB4LAHBDV8Tyb84pnS67AzQ8We3Qa87FbSsHoPzP7WN587XyAXwHEA6m8oG6zrPFHdPYxyQqWxD",
  "key15": "4RhskbckYSfYr1zTYJwetV6NU349UATVpgLshkuSEx7XmeEXjjHUGDQB8UDB4xdQNjshgnUShzL5DYgYm3hgKVz",
  "key16": "DQMoNPEQ2dRF7nvDzb7Nc2aHaRwp9Az7s22vvRcg8aqwidy4pdtxZNHVQTJK7cCULySF5swbDhv5eQ3MLHj1w97",
  "key17": "cFVbk5ULjkNR4fMMfDdF7uapyCcuiuvBe7X8zRD6qyoDxd8EVTVQG4PWKK44erVdiuRsK4nhW2iJfQarBmN2uvU",
  "key18": "2UF9BZG6tWkTqwYTMDcmftr7u7mg8zaaqTG4xZVSfobQZFPQcakN8gNWtLaFj9QD5KUvga3ZiG6K1DftaAbUyh7c",
  "key19": "5dudy11A4aXPK3nTF1iWW2K2rqNwJciD7cf5kHN2PwWYGpSAG3gFgbJTJjRNQXg7ccwB68dkHxn1pJ8oThXSBa8A",
  "key20": "3g3D6PC7Cnv1vQWCLeEMvTURz2VFZXmendGjFeE7UVxMTq9Lju2v9WptczG6qYveeHJhysi9WCnzQu7u5UipmNP",
  "key21": "2iy7ghhkn8rHyk5bWeJCRSK3zkqKuiqn4CFxsNqHKMZr3VRUhPt3ZMHaktogJ26TJZW1jfRt8QyWGULvpdGHuJrX",
  "key22": "36pH1ZZWw34eSgEvU7YhV3xnXJf8u3Qh2yMtgvmD2joQgnE2KDTPBTL3YVL3puSKS4sBLyKsu6pDGymK1ZyXcKyE",
  "key23": "4WybL8Fw6wfwmNPSCaeshNEgM1q4uU74yE13FcFsMs261kV8EYBA6v3QzqK8NpkunkMuCmi987WABAx2cmBViZ4K",
  "key24": "3XZuYCXf28KVxwGJA8HJ7DHMoCXhWM6UoqDkkbEVXyMLQ6HATSNnjm76dAibTtvFVEcAMKvtD8wucEV3Co4nSZBM",
  "key25": "X25k1AP69DygCCTQhDacBAuYmwgU31XrL4qnKS2pbSPw7n71HNCcYDtgbC2bbvhawdXxztCDsTrrwkr3Dxt3iPa",
  "key26": "4mZHGtDK3ZhnUfT52hcf6HW599Bj95AGkenAHDkUSoFGMWaAfF8Bgr4KVjxKW1bdbqkP8Zt9VQBYNxRyaifCEenC",
  "key27": "3drmuC1YrUNSdC2ajFd8sjpxHHHQ2YNgFphREPPgmU4p6VThvbuoCMVMKQ5kk5DCxc3JSGuVanoLSSEnY2pNbp5k",
  "key28": "4hCZBnYo2HjCjFzruypPznv3cL8XmbbX6UP4cYvhMWuphCFbNkriuFBVAmgyH76ZwWUvnBj4ge2Sv6JWABwXwcyJ",
  "key29": "2Zur7RZMkCtXLa3CAjEYDCfUNpSKLAsTYga3JQ7qKXFffNsKxQYCzMjTmWR6Piz2X3ZaQCyQTSbH4aGAQDpNyf8G",
  "key30": "KF4QNonfMxSwgrUzEzhW255H2iktgPaFuksstkWN3CtcjrV4ga7se5crVDFsMc2NcoZAB5yiL53Hc9kgY7h6GeU",
  "key31": "5unNi223yu7dqAQv89g184hGSrNHE1EhN5BJQ3NoKqfsp1XgnDhno2N4rn3ZAMwcgnvcFRK2G5ZzjDGKxStQYVfY",
  "key32": "5nG9qPNWWHKckUFdC17MrZP7R2Z3vTaeeDuJZ4eLfsjjFbrZTWD4MpWneujP2Z4thJ789Y9ZroQVMRjxL6SD47YE",
  "key33": "4b3GUYuSZyzGLkB4dccu3GD1X3WB5YJ73TYYVUj6FG5LyH1TH1f7Xj6Cx34HDEg8XKA85NMriSNaZ364twgTbU1",
  "key34": "496jByHacPwpZDAccpgRdsuRsuGSFNmoxyThCRutPa9bBcVqgugZ9wVis5yBURvEciKprpobayc9wkYL8U7x4R8M",
  "key35": "5cjU3xyNHm8FzJ1QxDJbkQgtD8BRasbrgwwVieR59LanEgTfQkRLXjzSsKCye2LRB23urzLyoKxVHRrqzNSNh1c5",
  "key36": "5qyMYK8TK3oa2CV9WwD5ayVruhDRy2nkwgGWjJTh5T6B2RVkKr7aMdeMVycJKvjRrMXyCBpfSTMWCFC99nLQkdwy",
  "key37": "2ZKcZcjtL3V4PeJ3zWvfdFxrWAobQagbQYD6Gg9bgiir8T8t7Ge75TCfRDGiV2oymRM2J3EsgBSZRSJ4d2EiFJKA",
  "key38": "465UYbCoucT59Ke9cecUGvh5dzFqMXJAjnPaWuGU5MJPukP6h1YNcukHV5g1k91dECHPhHAC1kiGUzmNNMDjzMQK",
  "key39": "3uf6RjgYchakpNh8bYcJNqABRxq2jUFxVKLWqCz3Eobwjd1Dy3iZuHeN713DnBARb5SA6eNR2eZRjBUxyJFh7qMT",
  "key40": "2NNhFpbV1gktJXWog8PAQoivM7KhxzSB6HngEqjUDZnB4YbPDAqCPq3jf6agmrrxzGhgHRQjvpXP9JzYQ1NSkZAQ",
  "key41": "3LhMqCmpkVPGhudZ1vfadSHnxeMsu1wEz85VRinoHzrfR25WGowrrMBECRZyZi13UDRX6VzEuythaVDPKb5GPLjt",
  "key42": "5bBgKxEQ8g5GkNKTfRyZX9Zy8kVnSLQVg6Z38XhrntQz5BjYqaMeNvYziRWVhhXxPxYSoCmgS4sCdYn6MKC21T6a",
  "key43": "aJahWwz3KSSgwKi5pD5ozJPicrpwMrSwGrPWz3BXLJvUPDmCsrhvnTHnJ6ueSSXqTGugrjJFFdbs6Kspebnogej",
  "key44": "3rdACzVLZwZsxrJkaCPMKJVSQvXMi2zvhSsZKRKtaoiQceAJZoz8mtmwuLTwerK6R2Kg2up2dbTZXQxnDmPrqDgU",
  "key45": "5cjsAtpMaeqSXHX91mPgFJ27yaaEQoQj2W2iSUBAWMXSPT37dEviQXyRcvim9vKW7z3aKxvvRofse8QA1pvwBPFx",
  "key46": "3mzmYWWnTS3QNMnxr1PkLgfX3qsuRW6614s4eLi9bt8sTUV4R23cGxPwDzz8P1DUUUCsLhCPrCSEQvvnFpmKe5om",
  "key47": "4mkX3eZBMEBwaxpCh6PdgR1vN5A2bsQNeftAxvx1mWLfu7amra9761ovc8S1qTFPQ6RkrCQV2aAEngUUzHs2a3Cv"
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
