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
    "Qz4t3nG9feefjjM6ubjoViSGHbHe4YRdBT54FNE1khHK25PhFezrsUK3ha36wqGkHReopvKCho9Cz7KpYM65wJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BYcH831uzUjywzDg7HqzuXYgsmKvbZsQNcRbXCyFMjDn9tkL7X9oRB411b4Hd2Wq9QtfPJFCQJuiqpdmf4u51xh",
  "key1": "4uYGy2pUrf9Z9uKZ41wiavjcZ1YUWkypoGC52zwhxQtN8se9NUVy9Xd6Qvay3b2aE3L3GFSYFBZT57bxcJBzF1ts",
  "key2": "xT8YucchXencYXYqHaA5EFNeakG6oZvYtpVG46ZycQTBtp2Rii74vtLGCrQY4ciMf79LhqeYFE5GP4U2mK92EPg",
  "key3": "4tKjDXmbqgGT4GvYCB6UkENS2o8a14ueYmFJjvt13kDyu2q19gjVCYBthHCE9rbsc8tVhGQYYiPuHa29tRnjmA4Q",
  "key4": "kMZiKdPuu9WU95JS4TE3k8erTM4ixWvKAiHwcWwew1ntNZfNKmSJhiHzexMsuJ1MpSud3LxVXK9F3yzCu3fzhrq",
  "key5": "2GUdBYeCMBKU7ZJCwUKrbM8BsDsXG4gem4NzHNwhkMUiRttjfJkF9SpKDRtm4tDZrJf21xuSAb6V6ihdxoghJ9Zu",
  "key6": "5GC3KUBR5YhpT5gP6emjEggRapw6EEqCZCCYLJiyd9Gtky3AGDwnqrZpQqg2buiphAZdBweivrtwAqeBYanYmnor",
  "key7": "2cgzvn934ta9LkxNarK1K74c3Y7fXQHQyFq6Ergcq6dr7QhYzsKcbWzzkAZkqYLPXdLSg2vPzrm6V6gRyNHLKt9c",
  "key8": "5Uoejnv5jtQx6carT3zY1yTQMYF3gGfTjkwu31vWgK9JEsau61Wb7Hh1Yy96HMmLmSPhhz1kQ641ZWthkhTJEwTy",
  "key9": "3gLRV5KWv3tLkYTkKdBRMkkzFdfxPiLrmPvmQnJZyK4ccpkMYZD1Svpphq9UQwg2w5iMT6wgU9qGaZGHr1QqgtxM",
  "key10": "39MfBJJXE8Hv6kFAmM11k8b6RAJCQTzHPKvM8tFVKttYvCz3uNt5bWGKYdDwvZHuSYZ1hGd4cQAXaPE4URZv1fgF",
  "key11": "21aLZgChxxGPTnigLEusFZCJVGXV9o5zbWRDTohFNQsqN1z91WkKhgKioPyv97pUJ7ZiCkPM8QGrZdJ37E5KpnWj",
  "key12": "4Sy5KWcPeZfQZWmg2UtA326HFjQYjgV97icCHQqaFAXq7xtBhCoo8dkM8ybgcjQfXb5ZTd6FfYHgoFhLpDoqQHKM",
  "key13": "LF84ygu4cQS6LWxu2pujL8hhmSgJ3i8X1yWgh2TGphB7P9RZkcSZfBCwvLvuqiMjM6gdGkhaWnaPqUm7e4u9Qao",
  "key14": "4CouzKuJEYxvvgAJkveWmcNZnmUKCsS6oP3xk2eEFXPFbN4rX11y1wjPxLpAaGHi1azjbNeQ1opd9LAvC6SnTwBz",
  "key15": "2kVo55JR6VhFR52TzgE9mWaapz6pXT6wWaN8toCVmDpHKwFMreTZ3vxPPETSPi6SZ8jTaLZsiFEjgxcmRmi2kCW7",
  "key16": "2EHtpWQFHXVC6eshAhRJ1rZXRmMBJLuhxoYxGGLuwEWVjMD3LFBqQUBnkuXMYahULZpd8RwDHuMMKeGyc6sZBNUv",
  "key17": "3eCRe5fRucCiWjPEXkmUQ4ZojC6FAjzcw1fm5TfRuQPV8emTs73umeMfPJvMwktLYHV5ptsmovf3hM826a6PkoAL",
  "key18": "X65kKBQoNZkqyqyn4yZExMENMJVXYA962JzZqHvvGomEMTPW3KRNZLEBm3pEyW2eNxCbeknEJKAH3gDa48i8rwP",
  "key19": "5T221WVzr1yyFNArcbkfBRq7ojqeQcjkr2L7FMpaMLnKTcKxNpCC6DGSpe7TYejYUB8GKJqQhPSDQgmAqZV8fpAa",
  "key20": "3HGrcLzm2QrGpxzrwW7kFrCPGKriTwfC8QnZtdGVeHdWNDr7DkttH2nCDKPU6Q9J4VR9KgwzXWSJ4Jui36Foxa7s",
  "key21": "4c9oo3419pALJ5fJhKGfnrSyHv2MnimSsPRhga68QM4MAxGg6ShU1M1qiRGPoVTvQqBwic3cvLfLJCKYcb9oCVbU",
  "key22": "5hkDkhA2bVYC5mBNCFkVYhiyYrx5jQoVpYGURPAbWhTxqwMc4Bn7x5FpqMdPQbN6FX98ugWeD3Ud746dZapmvvuS",
  "key23": "5MrNcK4hG7bPdq1qhTXwCsyu6ZnS7H1Luyg9wiH1JTbkh7JhEVwXeRDp9dL1SNu5WZXZnER2DTHqJrXTU1FanYfZ",
  "key24": "4sB1M78Y1D6p9fsYcmrQaQUftau6vk8XTugy1rjQVEpNem6z6nU6TKyksXZ7hQLhWbjSTdBjxCzdWNkCr87pejhg",
  "key25": "3KheUsDEJjmSs4TrZy9iHF3a49ZgwKgpuRZv2XhNjeMoMERzpmHmYb6kB3354Zo9HEqr71yRKVDvgkE5GgAjLGh9",
  "key26": "4oboChjbbPaQwYeXHrDwHJRDZrbt8nVLAFMECakxVH4TuX2ivkEriNrrn8zNxoj3dH5mqXRSedrsavjhjMSe8k1a",
  "key27": "27HhXC6WS1nVZmcLwgd7hMShogU6r2pDjWdMmepXrnwMjBdnDzVwbJckZ61LeAw5A1HzKmiRuMBF4Pvo1qg8e6Ps",
  "key28": "2KcqxpivmzPTkUpAYiGq47Pj9MJcM7Wkc2XjtjSDcygWXoQ9FTMqK7PTexqipHWx41qTuejD9crWT3RwQDjvLBM1",
  "key29": "EHrRyWfKnYXY1h6q1vXaXzDy3psC8pW4J4jwoXT6tgx7x1KjWi7ppqBdS3Sz9uN12QsEuAPTAuXEJRhX6noyTsm",
  "key30": "2ywEr6toDcuWohNE2VQ5mdqkJvDHYT7x4R8QR2vP9cm5WU9rL1cksroGGnHz42wxBkC746VvMRuSJ5zJxESUNHZp",
  "key31": "bJ7buho2D1z4Sf1vngprfmQkrBZU5Pp73zu9kTgsU2zpCs5N373E8itqVkwpGaMdu8j93F2Q45HCAYk6XXU1WpW",
  "key32": "3Ld2LWcYrZA8SReqtaKV9N4yUmd6q9zV7YiPzLwxSycND3rmQryyWDYPrqWtKqHTDh8SA1PAgmUjc6yAzcUe3Yt1",
  "key33": "RBBVFmvCQcw41HEZmpNQHbgT6NavAGrGieNnJsCo1ogj7bMjXvCUgbRuXJaBqvgp1j5DPMPh3ssTSpodidXmsEp",
  "key34": "3RYidttrriTuaCrr5GAwS9EF17WYxzY3zLzG9o3ACS3td6GqvGY282sbt1rGKtig6HoEJtN8GZtj6pnSnkjDXBkg",
  "key35": "3jznpaXmyp9EqTorEtDEiH8Rep7fpGbAtvoX1rkoA3qqLjiw3gjqXZmd247wMGR8oBJxXrkYMNijoH9qD65hNpsk"
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
