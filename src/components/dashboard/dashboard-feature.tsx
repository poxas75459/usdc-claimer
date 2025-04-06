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
    "5on1QfiDkiz9Dd8sWTooA4t9W6cWQCN1RuD38C3Y37BXD7YCLBqL1HP63edUH3zEUy5JDR6wTn2xEjN7Ao9FePt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4weSJW2EJc9TyJ2XyEHC2DWFbWfrjVGqUSHamBLWYq7a3n2kcUy1QHsjhuLXkG1gmBTc14o7V2o8scoeLrWjkp4L",
  "key1": "3TwcgNUAGgWcMRjfSJ2DT7Yvjia9NjVEC8RT8rbn8CefPozGCvsw9rzmVaJxS3Di3TpcRFAgZLqGc5yDt17xCBZ8",
  "key2": "3XdDbqWHGWLe7Ams8ayXeD9DU9mhGmknMwF5ccyo52RikBBHmTp4FkpmXgVtKoBsoN1b7x25ngPKQLn7JCLF3wav",
  "key3": "645m2K7dC6TtksYZD4PeU7BpZhCUkc1TeQHgXDCnQbiSVV8kSmeEH9WZFuG4RVctDVYA64C6UCKwqcYoqqrha4xM",
  "key4": "26nQ5KKER4Y4oFinyTVXoBqNVC7fpDfZJAejYohRjapXFeX8FfB3ApnA2raQEZ1JD3HsTiztLvBKWU9topvh38SA",
  "key5": "547cy6i6i7kerGgi8f8o6DUnwDvvRcZ29peDBBwfPta75c7TMPpxM5hcFcTxiifwaSdhdK8W16Ggx9CbJPN8GdPg",
  "key6": "4WHLXUumaEfSog8Q9aEmspLiQio81Qxg1pMR6upMbYoKNPSbLBxdKUykx1bEJjRTzRWjem6gnegPCjyuVgxdEuyy",
  "key7": "3RRCuCJxMt8XfRaWGfmFVQbLej9WWp2HhDY7TjiUiPUFUCPTFr4vAKMEHGbLqJZ2Y7epXRWRhK6CRNDGnidSTFzE",
  "key8": "LRSiof6rUoafCdDrGb1UuTjxm2wfMKSFPKALCtV23d5QPKeMoZgj13dcJdegcvfUHu1B8V9fdaJwwCEjuJDvFPw",
  "key9": "2ULMAWRPUykKV9bs3gtyvqG67C4YcjBrKCyXCuFKcMr9LbzahragdcA5Chumu2eHfwCRuHgwCE4VxQVkjYWyFuCV",
  "key10": "3f1mQ9paqY35sowhCwntQZgULGNHwLMiKYNNBmY41djf3XqAc8zXrRg1CxTygqHEdvKq3mpPdW4sADt9Xpc1nkTu",
  "key11": "4WRUR4ouuXp1Ay2hcjPK6z3x8A31ESCx8Fs2SJTbuLxkSNxJxiZo2D8FirSiEkyMw3Apba59pQkWYk2r5F1ybjC2",
  "key12": "2MMtA5xgexxV7qGzEvnH4cmqPvKMVJKMaiJMu8K2Ur745zGynrWE4RLK49v5KuWtfrY6MFitPfzx1xF2jkgmXCX4",
  "key13": "5gNqQBVudCq4dAKiMVSGMrJ92GLG7vFx4g7YBFk9FjgLFQRRQSD1WPRjPeDBMkN9sEvJp2FKkrbBZQRXJ7Ti1n3v",
  "key14": "45zysXhg1ZwbmLQAGG9PmzRncMw6ab4CJfwLfRkk11GXUYczR43umyvVakUAKFCRHfZvJBKt1d6fdcy7hyEPXqGM",
  "key15": "jDxSBjoCbM4mhxg4gatqUS24qxw6Pp2zracHd4UQG2zbTtvhnjB43HaT9X5CRggtcweNDQbxrK1K8WgUCPPtepE",
  "key16": "2Kv4bdT1W9uDZXXYDmNnCVkzamSqmpTkBCe3XX9xW8joTU5oo4aLjZp8F55GujBtieXf1ethnqvLM91mrnhSzJoA",
  "key17": "4e1qemr9S17BgiWhTVJUzYnfXMn1AbZN7mqjubBSVKmdCr6L5PSgb2rnVmQ6taroH35BMYETm3RK6bokVNfN45aM",
  "key18": "3zJ8jt77NnCj4K4tDkfnsrQvVJKjK38xUH8GrEVqwhvoNnzDvmcRoadbRvsEshasXUaW6T2Po7g6BRBLgbPDY74o",
  "key19": "4bigGAeQQAsPmnqKw6utu37Cb3xYpXLDQJ4LhhxasBHrd5ceYJuJuC6yFYbNscTZh26ddWCujZXnD6JUZCifmxJ",
  "key20": "5rxiuyTcbCC6VfpRQTFXWVscEJnWvqQGk2ADYB7e55nKMRmcreLB8wgkXXXyYbpxCYSpm8PAjjsbJgJQbtuhpuqc",
  "key21": "4H7JaqpQyYqxqeHAE81FXCwrfHHcBtX4juSokP6HBkRxH6jTMMxMBUofRhNrun5xXfsWT3G8XBURRMzXLB7As93c",
  "key22": "2Vu7CwrqLhSEZnbuJTbsjL44PSFV8ATMjNMZXfjqCWNjNcQA7cMUtA8tyDpaRptn1g8AGkGbchQ3BoeLgeJCo5jx",
  "key23": "5SXmb5MKfSD21bBUFnRU2YhCMa9t8vDkCfJik2dRuZj6T8e4nBvcFxsa98err55QQ2o9Goq9GwUCL5awTvT4dvGX",
  "key24": "59w5w9cFypBgUPUZCEmUsApTDxfid5E7MwioSNV8WenAwGQKE7aCqaVd9Hkh72P3vtb2yVxPvovJ3HjTS5QZZWy9",
  "key25": "2m6XkctqtYzSDVCeGSY19ayyJg6Kzzp59XZkiSEGEnK6YyqYE2sAT5aMCPMLisGC1roQsFSt771ZCobm5PDcciPN",
  "key26": "Cz4z8UemAF319kSQyPbjYYcicynCW31WLURMo8zKcaqaEwDrHWie8VyxFyL4jHgpL8uawEPNSV79RnXVfpU9yrK",
  "key27": "5pYpmH5Qnv6WgRoiVVJhvtFP2ctJomHdtCDm9U1xNkGy7mMpynEdK7Tzp7t1YNUwgAE5ddmFpAjzqNeXEdF6NzYb"
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
