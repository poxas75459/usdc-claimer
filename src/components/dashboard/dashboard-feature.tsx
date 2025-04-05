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
    "3NcULRvq139wQL118pBtaqCs6oyVGAhxhKBQwtMBCkHZhLTXHtMkunwV6an61h1cidMEDdFGa7rbYEXzyDgEy2X4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "btgKnGzYgRgafWZF44CxM6pYgpo2DNG6992MvSvbQ9DZikTWuuRCBBJNYh9uh6J1EcuC975dbNdBg8WkhMhovMe",
  "key1": "46VTz4ufkMj6jWfCjh3gJNCgCHKJwENG8q1o7YEwiQmzzyzEFTydqLkF9ngxndB1tB9HhiEWxrnsscybR4nifQcC",
  "key2": "4xpR5jEQVskPDP75T5r5vmqDnmf8H7q5tv1z4XAU4LXSZ43nSMxzGe5JAoWwXAafPJjcYbZW714n6Afdgsr5QQ9W",
  "key3": "4MHZKkzcPuNPK7SS4D1N1hyaYSRMWHJ4vJHa5goeJwZ4mSZFarbRS9zyQf1cDawy1o2EHiG7RxsE348Vqrh6qmEX",
  "key4": "3NM9mt6KL7G6ryLsNGsV39iGAEnfivBNxAbJ2CoH4pHJEE79xJBop29hjG3HEbP3L8RqeW6DwwoqZNH456TueU4D",
  "key5": "369Aegk4nbymEKkd2L2EYcFeg3fbNayuL38iKQ8gA4FfNKMVh7DXYo98rE2bf6XWKCLng6uoVHwFQttqQjGBXgby",
  "key6": "2JHTn8qtifHU3Xb3v4Mk5h6wVrhuEeRoj8QBgnZPMA4SNCNRCKijAmFQAs8BUJAtkYVYp1SUbuv3NYhv6YALy4L8",
  "key7": "3U6upQTZArpN7bxg73V3G8uaWYkp6nGw8e9gyaTNB9y8cv1Fo2qfpPVQ5ABcaDgnXRUbh4ussQ19gGDqmyxNNoN",
  "key8": "vU8kxKyMnCoMCU54VfrKGX7g3cK1X8mYqhVo2yH5wzx1ayrubdCEq49eDJxvpWZ5QLY6cAF6saRsjvaEUaGRg7Q",
  "key9": "3sKM7crnCGai4td6wFNPSsoot8XE9ja1ufJArQC4Hvep1MEGPRJA4Z4jpMmgKknJXUyKtsDmuHSmiZvmjD1TKfG4",
  "key10": "4z1MWUenYbkYSbhSmbHhiua1qsR7uA2cSbRUSd6swKgGYRvrKNhPtn9LzC3zNSaHnXJ2L6BeBhKQ5GKyh8CebTrA",
  "key11": "2vR1WBfZkuJdFYKS9X42sdezaRp3mtbJ1tAnq5W71tYyzJtAKCnSXLBfEwt3SSpnZzdVUiKWt32iVFYffDpfe3HS",
  "key12": "23AL4bZwzHTTirpNHxut8bJnDyHGnxjQXecH1mSLX9fueyueULfHrYuuyjwpb1QiQXA7LtbD7THSncmLS8RfGUTS",
  "key13": "5kMVcy4Ag6RALnknFibKLw1hGrWRG1faVwkBvFZfh43aHVcwtVuEVBuyWhjESzS4TsTn8yn8Wx1yB3P5tvtSoVip",
  "key14": "3c8dwzek1mwStk2nm8dp5UkqCzgNeve5G7WKMnPzELAJtcyNUsvCwqAVw7ku2vXChJ84zni6rjgEfyemfCy3htUr",
  "key15": "dnEzEwSnnzttf1kd5StKhrFzU2QjnuSp8MDBtNMeQx1B3q7BEhqHsrdsKkLmtkCxfxQo5Ggq3iXDTx3G44VmfQa",
  "key16": "5o3yV1jrPenNN14wsFASeovDgL5qfF5jaBbagUi9i9ChJkFGp4JaFzMmqM6EE2vkwjFueTgiyipE7UiJfrpdAVyY",
  "key17": "3qJZp6tTuNf5VWwHV36ApZo5fQohqocj9AJUvSd6AA1ryJr8KgMffQaoYZF8ej1iyfDe9X728cScqoHxepVv3AGf",
  "key18": "3BcZzaf9nUQmtjZghgtwibvR3KyZu3fFtp5Z5R5KwsCxwVwDtQvvMjrFLiMZP5Ssdg6qMPNRDyJT8LuZSNzGS3UE",
  "key19": "5FcUfGWjW2XjFWVFjuNJFEhMTLiEvrHZrWM6ycrBSYgJMHwECKtPHmxmkZFZCKSKFhoh1C7vs9VTc9kWD2fuo4fa",
  "key20": "2ECBU1yEMVpQ8M6CAhC6dihynnK9ik4prSUdHgpLaxWtmqnqAwNr2DYieJsy8Hf3ULd1LR5QtG7KiUv4dpCE6LxN",
  "key21": "5RgtyLVEYjozJzSvXGCBbfNc7VjZz61Jeq4Y6kxTMCijEPVBEka5kd87cyivN1bkNHzZj14uFZKMNhRTi3NHz6J6",
  "key22": "3UKefrjaohc4py5LwsqvyHjPxsu2Ym2oa48CjnjC1dSrQzMANtSE7AWT4faxNuFGyQnpiCVNCe9YjNYGBBaoGp1U",
  "key23": "4QsZyYWuJKHCMKn8Z5X97bGMVAKKHd7XQHGSD2ArjthxDL4jdwUpzrX6fT2syBDnWfjBwEAgtugSWpAvW7UnuciX",
  "key24": "3WthAVrLmgF5qSyTq16uEx4A8qB4U2hfNu3HpGPATgc77jZ3uFWCrTcTeMYJLZtVBun7U6qbfZ6mYUcUFwzfCjUr",
  "key25": "43fyuCetHAuRcnWoxTaHeA4bQgvh5rCdpFcHw3bdLzsmTYBMYTQj5o43DpPYBw7rGL1fJHcVtKC5caafyxWJDYVw",
  "key26": "EQJ7bSCw6AL4Nxtd1ugUk5yP2ysHSEpKyhyJyHLcsoZjiqSQ8BFfmxjYYhfqMFwRF9aK8NSoeUPDtrZshw3cz81",
  "key27": "3zW6bwoAppwdJKhNQa9pBDQiobyaG52NU6cGPmdtEvSyatvUqvuvNpWxc9AENucrb7utYFBe85UBkyMDHBLRQXjU",
  "key28": "2GJhK5M3oiJw9TBXZ9WA6jS2fNP8MiaHqhkm3Hg8f8VdezDwff5LpSyN8mXHKj96NSxsYqiRNq8qci1KyTejEMnC",
  "key29": "46a3SLk3oHSckHcWkgua5rFA1okYmFj1YZ1rjmBpPMYm13H3VfBXbKFdd2WFsJfHhRGP3Xs1Wgrvdyo2V1HMtAvB",
  "key30": "V5huQEsQPaW25byrqLa9B79xf4w4muQGjwQ37mLxphQTwU8kqdTSPfH3rzv4CVbgbYdTtVAeh8qthTje1warMgU"
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
