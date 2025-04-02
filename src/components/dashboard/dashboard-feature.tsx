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
    "5u2PWqusHk8mANMqR6iZmqKT8XtXxUCjB9qzSTKb2yWWMWCnShQWMbqT3mXZkGMW23USPFqUiaY593rb9ea4NZJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gG8Z51YWHmzoktSapHmS7KigiK1dxVTJkYxndn1vv37yAPvZM1bo4dmxhGqGXpCBngnVkcAZA6onrzC7ck712cR",
  "key1": "wnj9Sk3wRtknK2MefkgAsesxqKWjSQ6uH72YRBanydZvpz2QAeb1e6LSspsnCipks2ypq8FHKv8dYZPcoNb1Xfk",
  "key2": "3GeAPnB6MzdgB5hYt7z15CxTjRxESsaoBx59pnJm631Er941hsYePD4NunmhAPRbef2Rqv8EgBUghfF6onayFNdd",
  "key3": "npJLQ9wHS2rLMGWbw6MB9DfWsXKxJTWF3xi7uaGNW541r2ceseh5oasFuddjqzwGyu15LuaJQcP8bkaAxk7GteS",
  "key4": "2wv5QEvVkebnTrhPqDbPeMCmwCYtu8NSW3j3AwD5nBWvN7NHDdnhwCaJoYZw8iykVm2p8KAeeYDFSDpgiqot8q7v",
  "key5": "5xgvozRZtWUkhuAAJ4LRqGqZTquw1GornA7JUr76wfUZYLaXFgogXtwb3EbJ689sw2Y4qrT1WVatViHbb6vmck7y",
  "key6": "4QiQZjQR9Lkw1VbRbuJT4uF5dXSHNSj9rBsUsAQDU9AxsjF16RkrSrovcnkzfm3YJ2p4TLb9v5Q6L2Bs7r52mEG7",
  "key7": "5kMJKqDMtc2ZkCC1dkXVP982YrforTXKVuy4cXUWbvnGqxxpED4NuPoMkLhF7Xa6Evw2BebymaY7KPn3QTwV8T6j",
  "key8": "5iZD3CfPA3Lxr15a8cfZZyi7Vg1z19UNXQipFa6PS5U5F6zjuXrgEqNp9KrqbLhHk9woC4TNZzXUupfuES1udhgS",
  "key9": "h7QLXWRyPsuCMU2fdMizJQ7UCBVJNtkURde1FLaPhEYtiZCuqDGWA13YgS7yrLJ5XwbdHbicCgijC31KcsasMQ8",
  "key10": "1DJU9EAdUQ3rocFq1SGrUv5bYdk664bZfKpKvEkgPnbWuzk5qhCQVpXkVJVJzQyPRjULYuxaDoFH5ZXFnUyECwL",
  "key11": "3szLbSoqyxP8SHmtmSZE5tZr93sQmWoTs3j5uDJecKrhZJJYaAgcSDsBj154pira1mZP7Ww4KbWEDTC9P599tqiW",
  "key12": "GJ21bAox9Fur2nnwrk1VHUKRqZQercwZHTjXwxpUtFBA3cjsUuu2Ag3AJ4hbn6PHcgKbE8mCjYf1yctDST7qdur",
  "key13": "RwSTbViDLkd1PxXBkeurHSb6bSKX4uqAtcL2GvrDVe335SpQWNEQLfgPdSNowhHe53cSAujWzgBdKUY1VWCUxrk",
  "key14": "2mqEh8sQ8ZKe1y6keGPWKsKaKpoQu2o8z28SFfkGYvF1sEd5taLfH5qUjL1kNTonnCWBoCgLhEjMvq6rR2Bnagad",
  "key15": "3i8ZsXCQdt4PZ4qdbRRfkbobvbRPscFnjVmZidyL3tdnVWrm71VwA5QXjumKeAbHsHKvNSQY2GdhjCre6hvhmaE8",
  "key16": "2EkpdB7sQn9Jz8axYtLsccdvauB65nmwVTeDtvS2s2CzD8CN6wvVZ2MXS7n2CNTw9jTWryAW8ypXcLUPdkWcy4pD",
  "key17": "3F4WDAUPLv8A3egW4hhojGCdqDrJYXTx8ctwe1PdaNEy52SPoFNuJpgFjqYDis83oeMrmxzrUWP7h11qgyY5E32Q",
  "key18": "KddQqpoSSNs7MAaRZm8c4m32N1MAWT4azLfWQTrx3386PhwyiHJUH2dEgpME6LbRu922CKjAwsUDYkWK1rTCXxs",
  "key19": "oQ8vLZKoQxo6S8i5wrJDSeTZ9Raa8XtZKkhbXYxgmFFMTLxTZA29s5HJ1Di69huNvprkmPVnt9FaUTT17yScPV4",
  "key20": "59rLMbt9rbJVJVmKeaBHYEQR46VxTuhvbEDx59h812mARAPs3xhrDRbUVUELqrcyvrxYqTRREoFtTnbzU7rxUyvJ",
  "key21": "5br39vxE8L451pfYrCo9h6uVaZzhSYBH1w965RKM2oS2G7P3Z16Ye6jf1fsRyKoGqXhWKoqdwWYrACDGrXvPUm4C",
  "key22": "hvy31s54L5daS6nbCfMCLuc8HzQzEnMb39t9pUd46SsZAkBp88xv1ByxNh4r3aBGZx2t49fv7nb3D9qfqn1LUBC",
  "key23": "417mTinBaBhA9yoqogUsgaFmRhu39QzPgf4q4KB1y5b6dxL42qj6F1zwnU8eRorB7FcNpmv2eMnzekYgcWyQ1Tvx",
  "key24": "4mU1MYo1L22gWRJKMztX9PBYLxkWqCFshAJ7ZL6WiyFrvwPWySrrX3QVvm2cAobj3L5ii3X1C5zgH7ucZ8cvv5S3",
  "key25": "5JxXiidpPkR5N62YeWFKVWfDeHqc29o2tTUeFuVnRfPxSkeWM96BmGc8RJZiK2utcTb9Urpa9Wd4Zu9Mu6t976iU",
  "key26": "2Cd2pzhmTkxpcs2NYX441hLmftXdapmTGbRGXRN1Z2HvKrKfthhdW9oYj6tcUfbqMPwX43aA5s32zWY3hzurQ7Bh",
  "key27": "dSMGeQQrWVUQZuSVMB21dfkaZdoBGGxcznq1zEv8R9BNw6zQsc45wjZwmYE6pE6uPLS6XtQNkKdaAPqxbwG54Lh",
  "key28": "3YLD4S86c4CiuTdFzT7hp5S1BbK2NVL3y3SRjJBfMCMHEXQkDzxCWJv1F9q5xrGrx3DdZ5xBgf3peTcYUou8hJJu",
  "key29": "23AgaxrcvSJQ3FJ3oybFf8gsmKMgLWMmZK9HDFJL88gWhP27jztyyYUK8wQg4cgKSPcESx5FkCWWASDa2zvtUhyr",
  "key30": "3sBEHE8VhgjXyrtiiHgYHxtbQgCDjfxJgpvqFKV7GiZgf7dZux3VfumZReNJosbXhm4FVdBRfjDwxNuJzEHuhqQS"
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
