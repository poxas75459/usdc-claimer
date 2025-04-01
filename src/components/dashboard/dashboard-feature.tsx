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
    "3zcwEofVq1gu6XtaKbkqiesxPVzcYsjwevLQnd7bXYoKdzFLmqQK97QfEhvJD55S5x75N3WJJaMbTgGQ7d2vzLHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ychqHYD4Vg8wcgvTpeAoCt4XFTpqLcJjXaUci47bPYNTUj9Mhwz1bWaBkk8v6XQ7NXfPnx57kbUeFgLpWnuZaiM",
  "key1": "5EDvNPBo6UUfsYk9aoDraZj7hKzsEdPMXXd3XC2VvRtMRk9GjRoeddE9mtKFFTQHnsQvDSWrvUK91AXK6kwtPJnN",
  "key2": "5CsrUgq5guNxBHvLTdJvC9JtUF6iQxWTrcz9TTxzLuxhAr29ovQg4kZwh12eC4rSKcVXNYB9Bb5jXbcXSgCSzbdq",
  "key3": "47WWpJedinpntk3vJhfMR1J3ZbGDQ9bSZdTtb9AbW3w7f6UAkBmDZkA2EYQRHJgKMSribyEN6L77hwZTDG9efZCP",
  "key4": "2AmWJzbnHyGgfP4fw9ra2KoPW195r7yri1hCowXs9WKtqZsgWJgQb7qY4TSmqnucRdmQzVRuKX8xVopxCFYGQ1mC",
  "key5": "4k3h2RTDa44acj1ZYB2fkNAbmp1b1uJX9f3c3myDPX1GpY4wizy4Ab59nAcBzZMyHbECxWspMnxa2Tov86sHNv9m",
  "key6": "3sCnTf6mAnVfAgVVj8PTXvvTvRn37GMyvx1K3Hq3QEVS5C4uzNvBmSny7u6Bhg8bT3AFV5ARKWpam4xfYk6h8ZzY",
  "key7": "fK3iprnkwk3SbPqJHeTpdkRHrYwZEv1qhqziuUJizDeAmgwGxuBFVx4ta3EWK4JGvGkeQBb5SDW1f1aNLKtiNwX",
  "key8": "3vKWueHAQjJrfAspMHKXggdw1tao9z6YUNi2UU7Kr274X87pKRGjyqHnPXyur8CGyEnaPb8gtX2gMSosQWaYcN4Q",
  "key9": "56ntiCAz673pBxy5bsn6tSsY5CXNdmhQs4S1hweVv4xkVi3cshmVwsSEZpLwFzpw88Bjjya4dcoQtVzuq8ZcUFLK",
  "key10": "472BKHnSuMsJCR5knG6B99hKapoNZuaiL7GkH6NHBzEczvZofWwxVcd5NJrcQk4sZXyj5LdYK3j5bNmPB8FCNwqL",
  "key11": "2dj6sFHCi22kUwUTxnYFipcj6bGwcvHfnKvuJGLJWrcRaTjow7zbVa2hFE7Z8TRTBc3nEMhjs45fJZujj8pQeEgE",
  "key12": "2Y6J6xBc6U7yrkuNPmojGhF9WpAFkM9siWvQhVnNVmnz6bGyFF85GsHuEhiVNfQFKAuP9gDN4nU7ameGjZQTvE87",
  "key13": "74btgFSGidXtpnQ1R3pJseVCeAsPi9Bew2e5aNa8YPnqPi9QXSgR2NBBHbJGKwYSPwGLMEmbtNY1Eio1uFVFkXa",
  "key14": "5NgQMY8X8NNrsFDnfFkri24vApehztwQNZrQGaTSYubUS8qvPpq5yFEGwwR8NPUoXsxTVCD5fRtsCGubSKUYr9f9",
  "key15": "x3tjD4SxAX615ChNLFzAXNwcdf4a3evrBVdQ8UtRfWQ4kJtjPeSTcsu9BepuNqdkzmg2cMmoQuAjTwcuKYzubx9",
  "key16": "YXYdowMgCVkeFNWqi6Au8QHTC6xZpsdRk5So3GpVbmJxraKCNN6CzUMwFSfpGanzy52yZUYdEUW7NJWdZ5txYsD",
  "key17": "4K3krCQmntg1WWAN5hyPu1MYzU1aHnDH8xgQVRAGWYYZJPvJ4zD9KFGAaSqpnHnc5ZmqZeWgbnCCW4ebNbTZjAUf",
  "key18": "4Pz4oZLE7nzCusHZybux2qfAgHwg8JFsJD1UvwcbYiBZFPTaVqgq94UYWno6oWSXZf7KxkF7kvE3xoigCpP1ED5g",
  "key19": "5d7nZTGBfse7DSQuxst8bd8sSzCRBEKjt85DLx7Szkj277H67a9w8ayp336mPojZXcGuTwQsAXqFdwN1P2yoVdUG",
  "key20": "5gQbJBTjbGjPTcReZrHwtGdgJrtjbmbcFYJ9UzPfoEUGp3pgxUaLzh29eorimt3mzPHiHL6uyGXCUuxw3wbNefQv",
  "key21": "sD8XrqzqQH8SzYaLLFqUnA58crPVUGg2puSoLsh4FMYd24gvJzv7zmjwqVZPQq8kEqh6BtoHnFfzMC6e5aNpnF4",
  "key22": "5Ce9hneZFgEVSo9zpRfY84LgMqyjBx7DV1ekxzvxndKQqYKZuyGN18SyWTS6myCwbHugGX69v28XtZQ2ZyqerjSU",
  "key23": "3iZwAvQH7wWwsEwcu2hK9Lk37mHugpfwxiYotTrNbqxpxyWXqFkC4H27LrknLKNPVE63eQGYXCTVnTQLN14c6QpG",
  "key24": "5xkwamk9Mq7bHj1jFEiyHy6AFmxGp5VJU1uRZYmgi8Tc7iFSb4FVzQZrJbr9zosReMhb3jmWaQwHZFZ2DwanXAjn",
  "key25": "5NS3Wo97DDPDHEAosfU3FR1PQ9oRdDmzTGgXwRnbm7yhTEcw2cwaS21zVpDmLo5QoSYz63Vn2ekBCupCYVsFh9q9",
  "key26": "4YS6ELvBYT6n6ghQFhVs9jdwG4UUfLetMsqt3K5CXSSydjo767p3FS3mGm9pckSvFjcRMdVrZz7iJ9AQsDkZmYUF",
  "key27": "5h3MWhnp7zzH3SFu3zvc23qujysPh9mecKpfZoH6JanQbwpc5SYbyVuikrfiN4Whj2bQoM9szgQGXfNSLCHyxycv",
  "key28": "36nM7nsFUnrheJQP4AvwzHDNLNM8BDVeVDqtzoM3r5MrUfjyEagpKCvvfaaZd2WXUzgyPAtRappWpuzyhfNduQL3",
  "key29": "5R531s61iv9nsNnnjz9J3QbsxHScvRYKq4KFSMiTvGiPmFTp1XZSdW1Vg9V9BiVist6XULVFvca7gA9rdvACWeND",
  "key30": "4NuR1m5Lh2VQy2LtZXaDbh9evZLv2y3DM912KudLe4dY517x6pBoEgcGB6uk653G3FeimH5wnCx6SgSAPFRbqhAq",
  "key31": "5NhZyUXBeAfCsCdzuQ9SY1BKDrqM6ZUg3tC5A6tco3xYZCXtQ5zS8KrzxY7P3RxtiaQXVysH1ynCvjvDtv9xnW1v",
  "key32": "7UMtA1HFyWHLMcX665vp2reT4DXQrRVbh7JoDrwhHPRtimX1QXFt1d2j4uXkEjCzb48RqCDZ5Y5AcwQNdiKiC6v",
  "key33": "61UB5MzoTpXeP3V57dDyibWNrAtVQjW3Pz9qYhQWgiibTsk5eLhNMqEjhx3YhT5LRd5vi8YefYusomoAsERfUPa3",
  "key34": "44XuGXsCnEjLBh8G7Zh5crpAQAaMh8r9ttqYW7wLoMgUat6aYYm22rLW3BFXsvpTycp6ve2zYeAethaTNJCRMrSj",
  "key35": "2W6D9wg3FZTakNizgm9jgczUeJ8mYMLLquZbhy9XQybzNSY3ygfZ44n1MCNoSHdpxZiCShgptrWaRKi6Yij7dX7g",
  "key36": "9FqzYs58CpLJyHpk12JY3tyngZFg1vC8uwfXkgYCL7ThAPBy9ADy4AY54BizKydSkmzAMr1TjyLEZT7eb44JaFB",
  "key37": "5swRLK2xDf8BWadPdWswdiH6oUT6ERTXkH7XeehxC3VuMxDoi1orS8z6Aape3iMeqLETX8iwdrwh4DjXVxgMrCdB",
  "key38": "2NEmh3DnCGndfgcySFDnzaLyTj8vGm5ymnvTV9gyFAK471sAYfgYTS8htTYBpLH5AUCAphiQKoDhkHBdPV4WzBF7",
  "key39": "2WAvbhJGV77Hky1Xs4TU3ftzZk9RBAQNRB3rwsJmPZJHoH1W4vpczNyxSkVHaJ9vsLtEtDxsEygAGRbjSaNW34zD",
  "key40": "67iCEAY1QGetCy8WsrRt3SU1kkzvCBDJWDJwCvFodTabMDKtkdRzdgs9u5iV4cet7VNdDYGsweQDG1GiWvR6RoGw",
  "key41": "5mAL75YKaQtDZJ1aK5YHXWSQJgKyW6T3JMDwFff76P8sqGkfkdoVEpdLNEHypygHrBwXtypmQPG9YqUT77psfA6g",
  "key42": "5i88s8vkPcU1NC5pvXMg5hVhZgCSJx5rcDV88kd8k8Y1MSUj3CBT1C15HXSotk69reMQDAFR4K3bqpmdQQPe17Da",
  "key43": "2Pk3bmFrhmA1HuHDJqgEmuLThHXaFQe1WyXqFdgNvgSZHZnWrQEa6f4vni2tqoZYCwVyTfFeDHEBA3KrD8gubgfE"
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
