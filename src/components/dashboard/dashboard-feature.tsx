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
    "2kpBB8DxKbQGLG6cvGYTRVoFc4yoTMyA1kpRryeEHGHP5iLH4Bkw8htv9xpyoUzbHhJbp9BBvLVWMGjWbnttRB3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DMfBRoyGstCQumvAmx5NgbofEL32rfJ9ijnBQ1kevMRNBCVDNe5ZWVih2ARkw2T87C5Ep7yYbECNkHgX7vrpQvi",
  "key1": "4rVNMTCK4xCsvjHxPQRfCQyZh2An5GpyxyfmqeZB1Dm7jxt8tZe1ZXaN6cKK8Wwyo6cFRMXBJpUcuUrofUnmq8J5",
  "key2": "3Vz8vYyXEc6iDv3YCVzbEByFXmiq5cNyETNXXwsSdn4Ur5iZXbvv26rxv1kWow6VN5hUsHuHhts2rMKUCsfGgTfT",
  "key3": "svW5uvYNsS58j9RYjjbPvfAKNLWRWFbMf9GvSLgo16aAeHiYku4P1xuQnhELHZdur8hF3J3wqteor6v277tbTxn",
  "key4": "278iCBPKH8yf9wHPGD5V8QaRPUmxSRbvZvskxQjsNd7dn3CmHr1KyuM37AS1uRpc2uRsAL4ZCzAZWnFg6ma9Sivg",
  "key5": "4YpegoD6YxxFpnpg9uzzg9sUdw8Q8Ri7SWGjiJisJkRxCBM2KDYp2ktyKqmMWuSZPmx1gRTgikf7GRKCsk82phsz",
  "key6": "3BeTPCs39nD6LDaZtpfzmhQXwae3oRpkuq5dq9RdR8i7QXv5Nv2QaJxPKZz4EATbiCNaCTCccJji1bTGw2Rqen3Y",
  "key7": "4pTWvxttqyScAnhYPksRTCTwreDjoLHL2nsFKxWxjG6YVbUj2F1ipSQ5M6DmAUbAx7ecXxDaLksqZc76bDxTnFpF",
  "key8": "2QE8FhaxwqKzKiMGEffvvP1nCfnTfK8CSbLe1b6SsPnhwME2Lzz9jBzBh8KSA9dqMzYg6EGiHpqbu5p4H65Kkep3",
  "key9": "5D5WhyaddhVQJ2b9AoE3bRidDBpqRMEQ9TZvcshgrKtJRJ28ftiyNi9824wKC9cYcDjkE5yzkALg9izh4t3iGj8C",
  "key10": "3gZBdNSpThAb6g2mZgDArHZDDUQUUYfRGQmB4W4g7o4YVoGpi2mEAKThdM2yTe58P6VsqipHCpeGL526N4p6qe3o",
  "key11": "dhQAQ8v9Hn9Zd3sjKuEjNHTwNosSB7ooZPNgBUD4eH7ihXSc3R6vhPGVf75gf8fSvcsN39LJNnTEbYY3T17bfZc",
  "key12": "5yDtaHMvP6yQsZwFXVBridTYezJDZ5Zq1TUZWANA4hwsgFvp2ojYSkbsTy14Ekt7vqbUbiYJD5fxmXuzobN6FW6w",
  "key13": "4Qbum8m7chW1X8roqmWQnSunVuBg2cMjLyf72fmR4KgU7HMFvGPY7GLnYvMmApzwQBWKgXZyk9o9EY9NFkX1FCgP",
  "key14": "4ZxbBix2YCaHH16BKtJa5DKb3KpPGP6p5t1FGLrdZNpcEzwdmN2d7bDdRTripDtmXgQ73G1EjVxAnadSPgEhj7Zz",
  "key15": "4sJxsqETFGwm1QkkrRLUKNQPmtEv3uxgyNrQLt4cdgL8MD637XSz7Juiti3HqDuJpriSjYi1HRVUzo89whuv4Mn9",
  "key16": "sbfGuH5fXE1s97uKs4ZZtJmGFYz4QCif4dGmp72QotVz1TfYyZcpUiJDd8e8quC2hmwTyWHTWC6uGLR69XG9HeX",
  "key17": "23fetKSN52wdKfcyMB6wwjCDxZwwzqwpoaQezYj8G61tktoT72Dpc4SG2emh4gsUngHC8vLDpWxiypzzt14mH3Ff",
  "key18": "2uiSjhJ4Yv8EP1Nc8rrECKBqZwEBcCbwwaeKeo3qmPFFobhWjRpRkJhcUjRryamxbEceeEiHaTnEoXLc8JZK3CSA",
  "key19": "VWFjTYqLfGzsiTNSBeSBiQk8tXQ2ddQtYVZL6cx3gjjfxPMvyq4escAWFFDjCGS63tn1vcPY9wEcZmWzTjt15hM",
  "key20": "5g7j8RTUK6ieEKZaLvFjZiKp7fVU1mPZtYs7ehGzXsLEgMXn1moiW4BCB8VNa9FmQWkUZp5PDy7mFPDLwSPV3JYN",
  "key21": "4RGHRs9xJfX69w8v7ZenK6XWr1hSpDtSjawH8T9Li4mZG4A7XER7vP6ntR8zKDnracmRvrC1hyyMWymjKSWAdQd2",
  "key22": "2otYGUYDCSsertLnivgC8JpCAYhzkLs7mhJ1pNbhd9TtUoK7RRzSiG9hu5XXs4eni6ekrvhQa7rfMNJc8kX1NvK",
  "key23": "dqGnMuQMdyFExzwoDjZ2B4vVuVZDNhJq1RxoGAGigwKhtPPHFVkCo9QAL1jitmnBeTUY4bcJ67a14U4GexCczxH",
  "key24": "4WDWNxjMiEBAMyZDUtrU1gdfBikpJvQvJu9k9iKXKcMgvX1pMavy7Ryx5A7PVN9bB367UeDjst9MUJxPzM5QRVt7",
  "key25": "5rioFEidffEb6psCxbjMScPN1TjbbFVw43bWpZjj7EQJ818eDLBzafHoXQrk2epMZtA4PDVH2wvJVKScgjRA52vd",
  "key26": "5gXfiyhV3ioptoTd3a8zuaYAQqUGnFYpiU9ETp14JcswqSKsDdxgZZPFmnRh8uk3TSpgJhs6mtq5sZxtkoGA9N6w",
  "key27": "41r5TUzunwjqB4VSc5bF32jrgfTsdHuNaqL6tZQRGzY8rrCCC2fUKyHtftwsnS2avJGVsfA2pCSQy1Bu6h5zDq1B",
  "key28": "3RFkgTFm6zXQFqRzSu1kQditQ1KCR4GLByacXWY4XHeHMziHp8GTHEkF6AiGEEBDiTXEfySUEfTVnkNmVbcXb2Fv",
  "key29": "3j91E1jTqGPpK2LQSWiUSGGzsNTsj4qAAjDVZsUDa2jEaKg95cjuQN6m8awBZ1bNMPgV1u5LZFMg9i8W64ibpc5e",
  "key30": "K9vANHuRxv8iEF5GXyryeZEvjb1WQeNHzb5RE34rCnXdToLBzvLL7JGXSWMgPqSQSydrEbtufTvqD5KBWSBjVZD",
  "key31": "5GcyuWntMEdoWTPpwj9mUWqEHBF6s3sa73fCYiyFoqQxJmUYCbxVozEXq5ABeyKbfcEXj57WVByZ9t2qKkw2FFki",
  "key32": "5bLyCUEwPqSGy5PDgwd43LneWUh2v6QPyMrJy1SKxw9PHnaAN2u3Ur6stgbJtrZYuJ4HvXVFm2k4Ki5m2jXA8FrJ",
  "key33": "ZrDoD4cL4THJ8buVEsndnCCJ49XaUwVYafvGFmwTMzxp6YRTEpUBePhYSfKqoHfsXTvw7Q8TJqs2nMEVJtkoQR6",
  "key34": "2Yif7FWsN7yos4J7hzn7wWXZF9zKp2zYoAAG57VHBt6pZGfkg8dUjHrHz7CZWiNRn1k3SnSSU9cYJErtxMfRnffc",
  "key35": "4hjcvtWQGaSvuuoZbEjSnGnT4PkQgyHg48gnBjwkSGBK2M3TNkppdjLBAw849bSVJmhTHe3jR16BKaCkxCDhrxKJ",
  "key36": "3paX3nBz8FamTC8zcn98GvZUwLt2ny335HcY9dBvHKLSc4THv6bwewvpbaTGv8xiQ1U2sUYWMQqJbWYkNMfkpY5U",
  "key37": "86QnNFeTvnmiVa1PqsrfnCaBGBMVmjSVk5npKV36LquRBKUqUikicQ5TJjVFv5JSVFnni2QMbTjqba2NqigL4EX",
  "key38": "2SA4qzdshWJC3Y5vjikdt8LSP7qggWzJkYcTk83PkZe3zW1b1tuUGFfD3GQYj19F9B1a2YPS4FpNS5j3mYL3FomV",
  "key39": "27j455huk7zw3TAoChoiU96d8FNiw2YPeq5bhKiZ98EPkMWDxiSrgbYc2bxjouSHYgstgLmsQKKqGVWcbMFHb2cs",
  "key40": "V9d4ZhsfYk3paEqi1Atx3Q89Vu7r95F4BTSdgjaB5hrBWur4FNdFr48HytDW4rcMzpEuczhK6s49mCEopUi4QtP",
  "key41": "4rSqLBtxpRtNrT4hjq1jYUZLFuuqiHzVXSXmFcutgJYqy5LhofpMYUpoM1gkV7aFcwLhSDJC8nxgf5UKCKFzAJXP",
  "key42": "4wAsMS5d9PuqtDm3GRe8vFgMEA5AFSoaxXTzvWQhuue7oiARMy3gkjHM9AWWtMni8vZroy5Pm8qFt9H5HVbqy2cK",
  "key43": "5xd655C4LMRuBzYJw6E48Tkmve1Q4ukSsUMQuidyraye5JgTSHKboLjg1YaJT42LayByBxBuPRKbRgMgjWw3NUTP",
  "key44": "KvUtaxi8YJQU195jr9xk9mRsi9fGqiK318x4KKNvVTEFrAACGzQMRpmFKX6xe35eFTLy42dtQmnS4mhUPaRBmDB",
  "key45": "3bZvfcu7YcdTxeDmgNeMEcj8n8F1VJokjt5XsZRLKphxWcsWSNJrfn25EsNUQNv1maEhMfk2d8CtLkzRK5Zn7BVm",
  "key46": "5Fyy4HetUTxv3QbhNVgRvsMYh3CdCu7Mw1BqgdgKX6bXJkRvDKpzUem48mLabazj3vhdy6MzJxqWzJeGjZK6iQgL",
  "key47": "2JfaoPKuMZGwZV1meRJMYwnVaBV6ku7DzqT9sdNFkXuHGEMHFjwNyBhqLsFV7YdA8cxrF3dv8brrjfavSzSyFr4p",
  "key48": "3FwVk3hUVvEa4vv4X1VamiPyDCs3rjMJEhJQQgirT6JiFjnCjvAxmiyukcXCRM65Rvv7iCWoZtzPnBMiavVXv1Jp",
  "key49": "4JV5gtxev5buto4YnJMFPYP8cJo1qqKC9x2kpM8B14RUWsH2tjQubjCtiMx3UhbUShtX3fFWft6gWDKXiLt1werG"
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
