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
    "3VHyqX6koExNxnh4WMmhN6FaVKsKCg1XL22zGa5eWExjd91FLs8kT7zAUaceTt3hUaV4pj4tARx6i7HoqAqHzpqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mpqkPCTk6JUgncoU9faWwfjZSQaH3atN5mFYC64qWhr33sGm7ewbfo3Z1DQ4MqcgTjQDZpTFGCE44HAPWmX5RAS",
  "key1": "26XaTopxQ2UixcXN5Ptv5Z6HmJDkm2GNhqoDn8wvtosG93JWauAnP6mRDQWac9NPSScygbxKjGt7sRPNygHWhFUn",
  "key2": "DcSPi2GK4WFYRL8rYKEvdU2w6KBnvu5REFusyizTdT5vTRzEGjogNMaVwrvKqnRPAktTaTSFBsWYopKDsHTaVRX",
  "key3": "3YAbyvDZx3WYCm2vvZRTh9CojUKVVDQTNoznDuXc83bDB3hqisYjSKZGN88GYFuRXu7rNBqF7HMueTQLtKi5hyLY",
  "key4": "5ujydwgHH3HTwLEBjviSqC5vcckDLZgQL9yrerCjCdGDKaSY3WSeyHjd71fyE1MBqSnLQFiyRMY2c8qThu5DFJGd",
  "key5": "38HPpQj71hbdgfd4nLZxR2MV1sbR76AAtbTJew8ts4GFmLQtxdE1GropJ6fysSkHqfH9UQDvDfSKzdSQwwhTCzy8",
  "key6": "3g3yV4fDRymXQDwgt7EL6qZ8ceSjF4pTKDUcgNb4ZjX6Lx86MHERug6Do8j69w9cYUiRvGFcy8WRRuD9ywHm5dvQ",
  "key7": "4NT5zTAyiyDrQV8XKqE2WzzBbdiBCMyQD56Lph5TBwcG2Yvd8Z1Gsz8zNHPiy6tpfDDE1w7JEKXnQCCfVDifbT3c",
  "key8": "4w6AKkuNB6Vq5HJXCrGxinzUVUkuV4VMebqtiJ3e6CmLMLUxjyuy4GLbDnY4sVREW3rrasvuxouCWKPG4o8R1GcJ",
  "key9": "5LSs8p9mCwDJAe53VPGJQCrE856ef5DSoBphkzv9e36Dm1SXgr6CyVfVAwKwDGdfJCwQo9qTzX7JYdnjRddvsAQc",
  "key10": "5vZrxJpJ1AqMfaBnpPhkmtDgoLDeXuVLtpFqnyD6rSgcUcup3VuZAbSQBaBgcJ73nmRdT6GyUdQp6dgK6KQzgTMD",
  "key11": "4uSoKPPWFmDz6KH9yZGSphXmLJ5nAapWVquuY27Q31urxM3427KW9m4oMvqSkehpE2sAB9SGys7QU5rkMLEdjpn4",
  "key12": "2oHFM7ux4NwaVJrDSsXLv54arNUVufqZRPS2LkhBB29161aUBLVx96P29jTRUAjU3ayeo8R57BqVu8Ujg33yyhc4",
  "key13": "39FhkcnVHgKj8mGUGsLbjiiuZt85Qgtirdgu5q6w45kbj29Tn17zEv6ttMUJHtXpHdm7z8oaoLBuxo6Y2tngJkyU",
  "key14": "2pSgoGfKGXfNLwinTQTJ4gxdH1Y7U5SMUs8s5atHEZd8J13Dqj7JADNA74iWJBPBVsCXNLvY7aEz8N8Mbj1rhwXc",
  "key15": "4oQQyYmZYp3jzHzKsLN4ARRvwxysXVJkznG8z3x8HWPhPVCBPUXVLkYT1iE4zfkJyEWoirhEWaV8663hZTFa8uuD",
  "key16": "56geuLeear3rrr4x2JGzVExP71MishUs6M64oWGtZqrEJWdKNVkPVLRGo5iKprdgaiMbzPMwNjG3YuPammcCUENc",
  "key17": "26Nm93orHxHBpsK32TFTbfhjmRuMuUyeBhBzThD3pGgF4KHZpCPh2fFqRramrkGHeqe8PdQFCbzNB5dxZuH3HVq4",
  "key18": "2w44orvx6Q3pcAKYBsDKz5zyz7XR3igC89W9cSJSW5GvTc4iAwuohwJRmQbUMFkQ9BbvRg2tSmpUa7ToFYDtFP2P",
  "key19": "3QE1QudWuJPtS8steQWNvCas4zWK5CmzPK9yafRngH2wgZjUjt9AZQu421ZUkucWY5NqsopZRygKfkzRxJZErhpk",
  "key20": "3fe5NL5v8cKzfGSEbuCcsP1SptXc4JkBZppwPmRT5dyg492ru2ysh2AWxVTf8M38eSYk4vkej6CJLhByFQL5v8Wr",
  "key21": "36c2ncLfrLhbxshpH6UnFh3FcwdVk66wEgerFyzRY4roWwTq2Zc3Bd5n3ZZVuXphZPg3JroMRX6Bdiqogfbadnd1",
  "key22": "2KvUha7tz1fLjT25rN9AKVKCNwtKgeaRtkrKsK4Wmyypg9u6jtMDEMXutAYMjT6CQo2UkJeShgFYkp5zp8mzQpoF",
  "key23": "556TbwzP9u64rhnZptNuAmcm41WeWjrsbBG6hD82f24cFuUaNoS2X74SF9MrnC4cQNXagMxZ7MQTEbaE5cr1FzLA",
  "key24": "2drWBs8eHN9bVN7baNbPGcQVK2XtoC5v6Mqh7b42dovTweiwiFquGaN1jZJ5QUqfwNtpKNwctP9v8RHiKUchpCi8",
  "key25": "63MjiHeu7VGapbxZViHf7eaCv4WubFa8ouc2UPbUiWSLVoQD1aexG9PUs9VaLfLfYXNQdFPfuLBzABPYiy67V8zk"
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
