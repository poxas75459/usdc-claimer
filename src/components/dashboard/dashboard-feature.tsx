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
    "23o3zmnYiX1GEW2D3aPrfM91D3iBgnwcAQTprnDyTuvMvoXNJ8gpTeAb1HPRKGV2oQ6msgssfhSFK81t1ynKETw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AzMgjpC7v1vGcSpY82hj5HDWFAAXCfKthMBjzLxH9bQdK3hRhppstzEnRDRD96Zhah1WW1dmHdaPgDEKeAkJGrE",
  "key1": "4pc45mki1ueK2iXUDyNUiGVzGgFYydWFsjKn47zb1zHWKzhT8EWQDqJ3RZLgogY1EJCrCkTwfa2Q58DhUsf2CJHA",
  "key2": "5s6GnitnSDxsCMwY1F7sP4kMFwnTjMPNvrLAvD8vt63GVS6cfJFfBnBtn2HNRjib3u26cMH5LP8swLTshSqBENSZ",
  "key3": "39NG292s3UkpfbDSBkjT6xWgB1RUeRQDssWMzPHe4ZggNXnsqc6Kf92PTupERjWKTM8srXrpVUhZVFg5mcQPYQPF",
  "key4": "44UnkmSBJ9qETHqKTJZHnu9ZXPKDDL8q7uxEibgpcj3DkGCHGvTAUCrXRiAR1musMgcPfh8bW4NwTEmVdsUhdDNe",
  "key5": "24CN5EHM8rs7GePmCazNpPTnzRDDJL8BpSLArWpXtk5tbFyjWZkGck5rD4UAPRDC6qJi1Hb2xHmqsegibNRHBquM",
  "key6": "2EYFKE9SFEWmDGMQT26UYwjvqS2QUgYTxE5jxnfH61sYggkLDgZe2zpENg4kNmmEUrH17x6Ksk31YdjT5pzzRrSW",
  "key7": "n46nqM95JZxChKgRgCqBy2HBKSarQGtbBEBHD9TtT2GgoR5NC28BbQVeZdipAjnALnaRiPvJ316jWtGZUyaCNbY",
  "key8": "2qUtMgtgLedXMb4hP4v5vhXmXYwgWz7dizKXaSqidVBMwxVsE2c1KDaJAWmHFBAx9ir3uNebRMKt5aryfZuAkDqt",
  "key9": "4oUMBj4NMXhvFRuRHLb73zb37nFcLWCCYhpiKZoBbYo7dyX3RnM7uHgdVJVWgMrs2YSgbNHZbnyZrpvuE2cT7jJp",
  "key10": "3AZeW4Zh6RPgBw7YtxvjE3aM4RwNTWSRkEeKmzbJcndcZeJR9ULCrNfvEcrvWk4ynEfPHBjwWn7KHXkNR47obhAx",
  "key11": "3ypRtC5VnqQZtKbkGpQoM1FmhRaJheHxFiYS1SdjAxyaUFnVULgdRbjv7huw9Y8mnAEZB9GLTxidJmSf7FYHpwuE",
  "key12": "2Hquhy8NggD7Qx4kKzfznGun3spt89CiwRJkEQB9uTBzjPUmwPboniTVWUhvxuSPd2C6VuWtBzEkamruUfEcJLaY",
  "key13": "3hZktJGHLHYRYrLtrzUjT7EckN2LxMQHvET94WtSyD2Tajv2BS1fkKa3vs27yb46u5ZWoroP8jRnjzKX2EcfmjFU",
  "key14": "PuG4WcvF9tYw7hBtuvaTSzYAWviiBSgRNtndQKtPycnztwdLBC3umT1tim4QqrqcTNYZTzRQ66WuF7UZj5UjagQ",
  "key15": "2V1e4D19NxPUfPfmBUbREbYGHZXnkUxATaob4u6HBNB2G4bdz6KQMq4jiLmLqUjdejqbx5nweirQsiuhrctTn28v",
  "key16": "34J9re6HXHADnvyiZ764AZmGE5a9eYtRcAx5HemNys5KvHrPwMQMpwzggF1hUBb96jqgLUS7xk9g99ABady3v1Rc",
  "key17": "2JDeBpH6DgpPRPHUJoTnjFT7d8SPX5RfRYhtYUrE6ptoLP6YdGGfZLMLu5GYKkPAHu4Pdz6BvvMF7jhrTST7fcWF",
  "key18": "3sbSB2kyeiQt4WPJr2vrMpAxqKdKV4knWsYZ62fbKvk7rJ3QuMnprMQVXVavaaaDNctXtmanXYR1njjnCiZe9GhC",
  "key19": "2GAQQPXc74K2yZrhFHR67UqCKoV49J1FiE85enqjx8yvtACsd3wuqyBLcxN1U6dtSBQnmqBkoyTLKMjrHXZjFp3h",
  "key20": "358fWuAjebrnntduTwpjhk9wwA4XkYgmR2ZGXYkNKeCC8tqqsEqZHMyNk5A5Y1xhxTXKoWMbhptXCq133eoBRbSq",
  "key21": "VpHjRKKRBd4NbmARrxgcnGmRPZppRjgmasDCmwun8Va5S7grXrsZzYpTNjYdAccYTW2BqPGYcTfrW8XtXPtiM7c",
  "key22": "31fT6ih8RuJ6QTstTbovsYSbS741AP34JgSxh2RGjWQk6jkbVcPYL1C8jZKV2U8VtHVihV7LTGUfP3ErZSpHTdJB",
  "key23": "mnepLj1sDeyLhQGhLScgzGvGx6147vZf7ft6vGU7Sdurz7xpKrCFvebUpXwgVXnLpMUGJ9qkWaTsjwn6s2R6UQP",
  "key24": "2ZBxeRHim7WxMXKggvg5L3CbJSxEQgwWqNL5avyBUdPXkGUS3MXVEa8jRyo3fBZXqu19TEpq8Micj8mi1iFgbJ12"
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
