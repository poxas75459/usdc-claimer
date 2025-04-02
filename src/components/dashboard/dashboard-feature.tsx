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
    "5zAYsfUYF6tedum5r9XeqoYhgwH4s8AKocNqd2y2B2cZrPqTSAmBrPxtxYXVsLnheVyxuJisP9mY3fnQv9d9vPDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YXwbGRb2xPZjNCnfVgrXTZkG17AKqFgfwTYP2BBTk9UoMEL7UriTaCvtubBzYNGwVpCC3vkTjFA6Y1ZpUb3r8hj",
  "key1": "3Wp9Lrbhrb6rfuWHGL5HcJvRvn1ngXR9BvMY8cWt2r1mrKu8ChhwXT1YyubxH8vgpC4zfaCKGbQsxxxLvYSbzmmW",
  "key2": "35unDYktWPqUppxzUa6YKtW9bfAV3gbj3esQKpA4wsWB9ysZvmAXiGQ713f4Q1DGx8iBAzQVhec4H28u86QCnafx",
  "key3": "5ewSHWTsNgkGxA2DgeFBj4YVtkyBcK7QXfr9HbnYQquk8VP9VtDrZD34RPNwrXLn6XPWHc7puVvhHGEmxzQZUKMe",
  "key4": "5zhUL9mbdoSHXDKggD1bKQVoGoCvArNc77UzoH3qsPWm7ASWQ6jC4kKAPe5LC7t9TWRPnPtteZGGPs3KQqPkguSv",
  "key5": "cUiESMjmAnanDw85s9HBEi9RujPwuimnoHhSsrgA6jQqYmMgkfUmJTvhzzzJQzHKNLbssskBxDbrEVNYNuyGJKa",
  "key6": "Vf722M1id5uoyTgiu5penUFdoPZwvbS8CPGm9yNfS7dxYtpFuNaomsNUS3mgTGJu9uqQyikRoQVsiFmpqUsREgZ",
  "key7": "3CteH4cbLX7Zjgii26CMFBWss51TFoi9VfTXwqnaxncgNXUdzMm71a95AXDQeCjfSA2J2AaqHrgiXsiW85yJNvVP",
  "key8": "4fszh5yoznkjxS5dbj7NAJCVSDwaGrREPgBgh7JiL6cr9HxkxCfX19hN3SQmuKtpibUH5bZZWXoGAvXR8kHHy7L",
  "key9": "3A9kSTZu2zGLsEjs6dH92ir8xyqXwWBYaxP4vJWNuy3kq6SYzGynTPGujRJGcWjiHobNLbP6PFuEPFkbVPxzkLzd",
  "key10": "YMrY9uzei4mr8kwjjtXTtnVYSRgsLgKHYn3tez12iqL9Ct42hpXXaG4LTUSriKswyNgEULZsV9ZzPKmhFw3ooTp",
  "key11": "4RunENMf6QpTsnpjkT1tLZTz5gcGuLr7tHk1t9QArz9aqTwEkXaXv5KKUbqXgFPNR8n1zFowwi6R9EeFG9iwekoC",
  "key12": "n59JDQvpJ3GRn4mbgatVU6tVYMhB887oFQ2DBcavMqRxELyZb2vNwj4bRL4yZomfJ9NqHpg1bj5DAQra7esY6KK",
  "key13": "3mWnQJqL7MBk8gxV7QcsiixaWjjLhYbr3g62eV9siiAnmFLb7hBDmQZNTfhsqiA8FQhqyNzkmvryt7YUVnr6cKSL",
  "key14": "4ohdiHrvGLFyzcfkyC6JpGPjHixjiQfiEerH4guVsm9PSmChuQiQP39ZsDaC32j5WpzSaNsT15aoi8njAEJF5BTv",
  "key15": "3pwueVTuAruTWSEriv3sheChz9VEJXiGnxAo5otcmLqL6JmNJnuXu1Hs1k614cDauk4icKFaBagsNxpHYiagBxoA",
  "key16": "5S928bYNB376RVjGKWTrgUEnDiuSUDvUx5DqGznckcoQog66mCDo6heiKf1KE6C6QG6828jHxp7XeupDfR665oQM",
  "key17": "3UECsSzg1ZhqW9AEsLsAqjazK9LKWTbPNsD8eZCuX9rxgNbkpVqpGexzcLs3ePnUqxb9SLc2tQxbn7EJwe7pjiur",
  "key18": "2SVuz7S9ndjTNR1twobSLNzFC9r1hVdvvvJTuurje7Rbd7TxvYiQs2VuD9f5PoAgqvxwcXQHn9FX4aedUpjLgkZB",
  "key19": "2jFcehEgzu6Gz9gfveHhVKrG1svjSxEhCSwcf1pTt3LQB8jgwj7CTp6k5867vzeXSoyEauMHT5iu8eUTmsDSGjdh",
  "key20": "33vhr8k7jzmSJXaduto8DLQ78HYYRvoQAaLBSZsStnQf567b9K6rjRgDLUXgy5CkUxs9rABuks4ciS8s3aC2CjQo",
  "key21": "24HXWsG67Dgwr1LU9xyfgxN4n3XaG6ejxjpqKQw84BFUgbaMs6JMKq8LntJSC7a73zxLBciYcaLBnSrBPbK5mPHt",
  "key22": "4Xy1fNZiowworNtHvN542Tutrxa4T2i1LhRz1uvbuYVcAfwrSBtFPorssmdAkJdSLxAEdJ7AXiV4AVFWUZ11TDxT",
  "key23": "2NxeEgjykgiQ3GHxwhUSBxWn7r5CiT68Rhq1JDsW53dK9rtgVdnYJ4XZYzbkRZND8h9RHoDZ9WYqj19o99r6hQzM",
  "key24": "4j8UudK9gyqVSZ4nc9hgj1pZLULrgbmMiJAukzzxKtz6ZA5DcueMVEvUtVvoQQGY3oy5xFGx1ukTzpDLfEursBDz",
  "key25": "5DpwFF8uPfpkw7iBSvdN2YdUGRC86wqq8NHo8EKDyAEgfb3WR3h6sU3FzykdRPWbBCQdn5NBTEM5roxiCUA3r2PQ",
  "key26": "3y6YE9LsuxZ9JHctai8uJJu6btnC88p5TeCvZn3GMMHLKHHvA64cMMNUYYLEcbEPZtZGe2V49nGh3RADbNoMKdwf",
  "key27": "yJ6gU274JeSjySry52ZAFQijXrCzUuzpNM3SrRKZ4Z4fQi8GjhshBAx46zwtLNH9J3MpHr3HH1G8ZdbCDmxpgcF",
  "key28": "4dmkesQaKbXgj4bsbocgmtNRhnGJQ1nUE7QFqaoUUYpyHPbAQ1xxEvLKotUsL5gpExq7nvxNZs5oBWoDmX9aq8iE",
  "key29": "3o7WbhCTB22b7SqmMMkzzX6RDFKV81jhchwDNu3rdPuTtgfSM5xGUWfScKAsipSoCdR7kBssQymCMWKPSjMUWtwA",
  "key30": "66C1Gv51wG5sPCKAEVU659f5swXkhEns6QQTm2MWd3gNH2cwYrFWAfRgDqvoS2DRv67k1AQJqYgqE5DfEKKyu4WK",
  "key31": "5zKbGE7aYGHj8YCKv35M8J8qriy6SDcKa7gfhuv8gTdH9KDLAimCohSn3tLzXSXPB6NyanFap1iFk2TEzXUZPKfn",
  "key32": "txGogyV13hv9jVBfuNFN3UAiCMVTBEAmpiyhPRNV8M2k9nLQHqGfBXgngju3qYdBwiYrNYEZ6jmjd4Zth5Cjxur",
  "key33": "38V7hMjq967Rj8qxptQNigz6V2Z7GF5W872dLXtJDeAAK77ijhM4UehWkvV2GP3vTRa1VP7T5nqTH5hrf3sR3cHi",
  "key34": "3DdCSxUxj1cxqDxyqkGZxWB77P1Ytuo3j5ZUf2dEJjBiZDqoNEmzpCQ4g9q1xYLRCUuPkDS8juFajaC52NT3F9dg",
  "key35": "23VVZ5VGXBj2FuRdi7vr8aGXdGmNsutrJzf97vJCGcFD2zXBaVqLXJgQikhgq5vg2VQDtDjcsQQF7v9Ux8jq2ozg",
  "key36": "26DaSro9h7UP8ZiF7vLnmbE3FNh36cq93wohkfhQjQeHbc8KbN2e8sw1QsuUpYxC2YjNqHM2RXccP4pnUQKdzh5e",
  "key37": "Db7qAg731sf9VwcoGgpRZj1QZT4hKK927oVNb9H4qkAt1UoB4aifwAYuwcNwurRWqPSUDV4841aViDxeQmB6amG",
  "key38": "3NVHf2MPEkGXPrzgtbg2ebkzBUmM13ERDm3FxfKqaTkbG5A6HQGqzJvLpZsW5FS82bhp8VYrvWwMRRNsofHYevwW",
  "key39": "3nVeb1zgTUHaWSthWA2wPYB7NuKfs8tMw7qD9YgThSzQznRLjP2vztVfwvR72fRAaW2geYhXFvBq1ysrZyhtNwDh"
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
