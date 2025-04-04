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
    "52KTRjJeLSc7SQumUhRvxmwESDNNJWomuT2WA237GeaFTSep1Sf5pXiyYSbjqVeEhe8ppMMPGiCQtAyjqeyQLA7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jYEDuKGM2M2o7X2pSXWJRWSMFcQfRctyj9htXTbKWrtex36Fw2mVig2axRoFvsoXh9piyYma6WEaF6gSYzwMBcw",
  "key1": "4b1Smj6qdsP2Ckq7eXkL8KnNYD2GPNF3y2ZMdzXRsqLrDFzqdKG4P27WD5LCYo335ENK1rS8iGkd3qBzsyJYUA15",
  "key2": "3MP8aTPnG74M2SkVPd98YkRAjikufpQjRBJsZp8y1HF7dB9YE3Y6yo3ykXgsxTQzcQ6T37KUdN9etBQkXRts3AoB",
  "key3": "2nYNf4kkEvFNHC8QqepWi4Vo9VRrEHyvjiTVLjvYeD9qp9Gd9TdCVhx5mUzeUXeasAXvTKVYZZsDeBKnhdsfeKCy",
  "key4": "4UvuuMJ64vyiQRNDgG85noj3vLwdBGbvp1PUjL2eUCCFFL53CjHx18fHUB15H1pSVsdUtYRi2mx51NP8NrsSDgZd",
  "key5": "HhyK2yreU1DDEvbk7q5Nq39jEVJVw6QcrKDeVDREujKaQJfuKd1b8jSQ1utMo9eBBuR37gL5CZpjR7t1hzXpTbh",
  "key6": "59kEWHr3QZx9pTAqjsiGvfyAsSXhZrrtchze37B5JgoEP5SGvg1tnEas3uCuSshPtKgo24USgTU6UUnNdt74Qt1P",
  "key7": "25QUJgFrM74PzLp9He5vzXzBF5QH3e3uKw1WrkyashapbqQfhPkv2DEstBgVVqFBBem29ML5RjbS7TKUrBB3Eth6",
  "key8": "38MSJCjuSgeuL3hCVHV5oemt5f89QSXaqqbzMCW7wEc6ZcTzzN4gxrSkT2nwnfmPu221Fp5nkrjTbbNBugi26ohr",
  "key9": "2wj5aCocTRLtDu4uHkqwGVBP4QtLh9udXhdbX3ZkgS4T9NgBCkdAcs6BpA3uCyFxdjSw7CHZMVCrCATcQGFVbdK",
  "key10": "43NELjuAkbTWmBYgdzfjXsoUR376XxDeqV7RQngPrXckoB3xGCRSJuvLqBvo5n4dQYxqWbhmc1UweUv4kz48Bqwg",
  "key11": "zpx4Ce3k3W6aP4SKZ9PiQp3ygSAB3NzKw4nKzzS74wLPpZFwQgGSfEWMMy7vgzz317fysQMur4r7cuE8Ep3UvXV",
  "key12": "SLQchTURx7RphpaTDPL6qS9549BXnqs5itmWsSuRYFYVVe4wW7CPYWzvZwsvNpKdvAi4DPRsxo2j8Vg5GaWSd8F",
  "key13": "5wt7WNpiqNUFZHvt1rgFG1imwsbTgJU72ad4JXwvREJ746VWgqSwUfb5HGK8oPKuXZXRHubZwMYefuNqmqnzS1ta",
  "key14": "5TTX5x2kfUr9hhusMfSRRpAADU5PACeLWDB4f1czvXK82DX9T5jCQ4vCtiPJkpJpaHHAzRBD8mKxHUmp3qvfeK85",
  "key15": "x8JZM68S6BJtJm5bpztacb1zcEM7YWag3fsGxS5pyqfbn2hHn8xPonmifpUeSvGgjWQ3ukAdchorSj6EqhWi6AC",
  "key16": "aqrX2aTQWo2N1hgXAmpqFadgL3gqs7Z9Mx4DAjp9xjEYGq7XmKrfMwpZoHwLxoveLgWLsKwqCYo82apYRLGUb5P",
  "key17": "sYQmoX3nBoR6pxad6qQppSsRtwwSo3j8GKPBCoRV3L8Wt8Nzeq7tWgEYU9PxXxpvhsKPS8bich1oubofYQx4NQB",
  "key18": "5bXVx2yHkY7KzSYrRvR6iEXtuh7C1rHjCgVhyV1QRuaZ3iHYgAx8yvTZ6vchZBNXMwnRob28r6mZvZwxW7JWHk5Y",
  "key19": "4GVsXV4g5QKprPa8haEMf4DCWWsTaTWNgNR6j5ZjcUdGSQDNkW1bPzUgPesoha8APnfz17HPJ6kJt7Y1V5rZ6cPt",
  "key20": "4MmGsuQeHABzMCXPxFo4dHH2Ph124HLn8Jxgp4fVvkDZvpdqdo65EqZRUoV5tvNxQ7urQPs6ZJtm5fXfvUi2C786",
  "key21": "5SC6V8EZn7rJBfNy7opkW5gYxWAd3qQaU8fxoSq4rnq3FwMKpaZNkEesBesrvHXBtp52dWCK9AAtMLHqYz1tSttG",
  "key22": "536f5YGS3EeuxQBewhSxKB3AfWYoJTp9KBMoZgGBo54cM9xXRJNANHCDysHTgXb7sHTt7BCQsXNk1Qgu7XW2uh8P",
  "key23": "5bFkv7M8rVh4geZyR2rTeAobAhhVVjA1BgfqvNAZtZNvJ5zbLh7he6tmJuY2VEut62Qu3PVhPdYzRP74tWkm91YX",
  "key24": "5vZ1M22ruSWuhoBgDXEE1xgYwurnJadGhsbXBXsbyUjetw8ZxRVxZBv3pzJFEVauhsonForadwyG4zF2uJFkGYHr",
  "key25": "QX8S7Yg1vWLxVHx69SwFfgksUtk73ouBkQJDqJB5zVEG6kFx3nBttWuchbgfr11ttKeRNfJfFexDpXQs3E8x1mh",
  "key26": "5XSE7XBPgtJsjQYNR2thH2ULzVZXPammxVFpS5vhnaUDsYvS6wuDr9d8zep2HumLbKZoeYXTmnvGo9qHLW5sLjy3",
  "key27": "tDeT1uRZktegzGCh6CvmSbitFVqsscSBm4asBi1J6AgDbgorEKRre9hrM35ptUnC96efktXAcumgXULZuwMfrjc",
  "key28": "CY5PR5nyBXFz1cg19SwrUARUxXsxHkn1yfLemyeAJzWnSMdGuqHNdPHw2WfuZqchzaot8r1MANn18JmrfUy4jCK",
  "key29": "2yaDked1aM7S4zDfmTYLWZYtZEgyujQPHSUm6xbwUHMh3SS9FHdHA3pCr8Cn5YF1oLs1EczNuHYxq5oTykFyNcPK",
  "key30": "2cQyWrMQydwkubNksZbvKuHF5BTDDYYyjVUXi2sM95NuvKF5Zdu8yzN49t7ynsKexYd63aEUCuq327dbbaNLEJXb",
  "key31": "EwQdK6q6AC9Y3Amqw9F3yWU1NaNd8Bi43vT2D6t7H95QaqypAY7QM9MAA5FjQdYQKJXhcFgKQQLn2iyuZYhEL89",
  "key32": "5qM2kLWQLLncLvdCGAJ24FRKGRgv55v2to2vbbRzSCrGjcnrRLwkUSiYcxoaoZZMGz3dUxPzye62jNkG6jiptH6X",
  "key33": "5NykQtS54N9LDhYuXJ3gtatRhz7manjktRB2fzFV8ZTCsSMAmM6PGKpbgExCqruoAHtvQsvxBuo82RhEa3CtYGmQ",
  "key34": "3HKRaCUW2NLhnT5wRKcmWj1HnTqLsE6kc2eYHKnpr1P4aJzNMFZD86hhmqrCxTVS8Wb5xzFjeXD1s9mRqjuxRr3a",
  "key35": "2cJdhMbHefUfiDXrd5d2mopBcKfpQ1AtYz5Sxj1td6DY2RfHmCVAwAc9n8BP3j1F5J4MBA1T4MvccF216HgvJBk3",
  "key36": "61Ya5qqsJThz6SttoXrR4NZzHEcQDAmCD4EhLwKcviky8xrTT9rxQnRjgdxtLBseKQdaTCZL4z2WsSRuYFyExYDR",
  "key37": "5BYTnomGuMeGS8KXPE7ZLKZCdq8ZTfKMfgYpGZEj997Cadqaqh377W2eLaJKjpZmtqumF5z1U98quVdRy7EXaNUP",
  "key38": "3YmU9r68qXN9zQmmyAN3cehVGFpWFFt5vxTx1gFVDQLfjtiyPFwDBcCunT9zm8qczWReSeg2gDpN7AQDaetC7LU8",
  "key39": "3SGddCJS5dMj1uoJAiMsGfPyyegiWecp3TiERsc1oz8kgerwLjDcChC7oxbRaUnVBtMBPfCfXPqdXRJNGWuseGYi",
  "key40": "hr8JNtfwLeaaJfBHDgyusHbaoc1aYLosYmJ2jwpaCExroq9bAZ6irnxygkxCFWe4kMyu7rxiCmnQ5Veukt7d9Ev",
  "key41": "5WPjMKkEjN3wN1PvijL9UuH9KFUtTLK1Ky3ohwRqwDREbm4CJrNp2ezyXiDjuYutC9KC6QKkSrCy9GyB1HowmhSL",
  "key42": "fwQp7UWCVXQ41tumAf4yJ8yu4Ec7WjBJZ73YNnL8EWrbz3s9UkqKk4fcjKsMYTEke7BunwDMKnzMFsd9fB5AndU",
  "key43": "8YV8s5UnrpAFCwkzv8VNTNeVHQ6ugcKzP1VXaRHhU8az9pMrG1BtB6LdyVDsZdKHMtdi2wADE9Cn9ihRwiCvVe4",
  "key44": "2XVCAxddq9FX7sXoaiyG7PuaydSnS48MbAcSohWRarW68NoyF2BG2JcUmXKctBGpuiHa3eGMzwrGym6xWx239oGW"
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
