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
    "33dhfJmepsnbwaSxuGNNLcd9C1McxJ3ZVfSXxeFigoRm1v7Ff5jxW8SPTKqmhmmkBPYoJLtUXvemXGSmSE7qeotv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M3AYEt6AxjEg36MjPx8c7ZuT9HBQyhdUSQkvttBZVbqFkjkTbyKBZcjJE1dVW15NKHX8N4uDt9vTapjp1HtnWpW",
  "key1": "2WD1tntjRFMNZ33Zt6CHYejhNT5QsBnWy9edZtEQ9BZCysQfJxBgnypVMp94aRghgNi3Z4hwJiW34ACqjKvV8tf8",
  "key2": "5VeV6dyT3Gv3jPod7rWht1BybMQdphEaohvkEtYF9gBhJiZyeSLWmoek68mPg5mbQurkVwVuYvdaGT6kDPsNUVr8",
  "key3": "2njkHcztW15mmQkG9E3tkbjnLCoooM55U33iPLXJCTE4bUK3PpauZjsqFtXSSJyyijfwHAYFJcfdUCBvBkPnT54C",
  "key4": "Rrpx1BNCRFGiRR7fg7t4L7rr7CV4w1u799XXtT1x2x31erdr65d8TotzPwJEssr6kyDuNSmt8YEYWsPHKrw5Bmt",
  "key5": "5CwM7Lid6QSFhvAqaF7qF9SNBzgKe5RmCjmPmvCvRBkRwD3G5aDEdLHqdo62WMey494HzWHKv7wkTLocW9zoMRMC",
  "key6": "5BgAtYBxb5GXeY1ZZYUWDk89v9zCqsWzzX2uBbav4HwfrJQESxT41T9VfzfZnEaANXnHif2L7DgHEAV5JfEuPCz5",
  "key7": "8h1RJSACuKJ7oxJLXNY4oqqoiZkZRLcPVZHhHwocz7xjHZLTxt3NArEwHQrT5qPoQ1mr5g1m7e4XHeppyEoMS33",
  "key8": "5Zn3sVPECSgDJAhf1iXbKJUXM524ZHZxd5NykJn5LhXiDZZYoN7GKpnreJDjw6DnsP21vNRZjd8k2GQBtiirbtLs",
  "key9": "4XCqy2jZo6Q8ARmTVXwYF659eWQn9PwMYDADKXM68Kd5E4Sq1CCTz5LaKjCt2J3Ecari2SEmqzn6wiN8fPeGayUx",
  "key10": "5N5gYiaFJHjX3G5G8ZyHtxJ5TL4xA35S8ZjGWB1y7pyVzbWZZSyaN7xcr2qrFyAqQVawGDtFt4za5wB4uu3929Xm",
  "key11": "4HqMdhr8zRE75BuHDYgGRqZJjeMZhq5hko9r65NDtXMtwHiv3rPgXSaTFGDerQVJ1zwCJePVY2yKnALFQ9kUBYYt",
  "key12": "4LjDc4SeoX49UWynX2Dzx3yC1iXdaPHZihvtrUVW3ECRLWM3sfDSFb6XjfEkYfHbHgfB3yqaLLKeCRBSNvxLc7km",
  "key13": "4y8h6Uqt8XhzdWVhvFV3yBPpad4RHoGKBHr26YmEgsMoRpEjYXfHAyJPpdbKA8KiSA2Des9yTkdzayX7FwEeV744",
  "key14": "5Pc6XYSCVopij13WhdJ21EQkZ9rqTQM5sdtRuhj12YVgHzhD7z2Ge3cVkQtewJU8sBpvLPitZSBqRvQKupsBWyJ4",
  "key15": "5rmgafL9K3riUrPsLc4Vk1u1fdHtYeFya8g8iLVic48j7UExnaLM6MVdNcJt5DisUG3T49xXRtjaCGYBgWRSi8UF",
  "key16": "3ZdqY8bch9GquydiYpcosVVpsFUcSAfZgQJXSHRLwxtrtRsPrMs93eNPbaWYWhSf68aGBTggt46yC3p43ev172Fu",
  "key17": "3TxGhCAQ1WnzLf1rbnwEt4SBsUN1Pv82Ehe6u3H7vSywmFPgFcuAXFiRhKz6di743FX4CAE1LKUQzjQ6mHcJqkgR",
  "key18": "2XtgW85qhUdCjZW1DT6NTbghFRFmJ1uSwBfLHiJX66Zwz4TCE6yyJ2EG18WZt63mmrYTJcJHUpdWnXQoGnwrFu1x",
  "key19": "2jhMiE9Gd9XdMabViobddWY3Eyi5RWWt6HbZFBJ333JzaevhmJjEzc4JKDT2opDfAFDvbTCh8PkPQgwhPXgapmtP",
  "key20": "27QET4XvNGZYxXnYGVWeHW4QockW6UPeuJW9J9u12vqVUeCZW2JF5SNviEfQohCf42oajW5KqkKQJgChemptXfzE",
  "key21": "5j5AoeDe4wfW7Zr54BYJbEBe6xWY9wVpziTUWaS73SqfQD97dFim5twRpLMpHyJzB6ZqaMeokoZqdi6SSC4GM9Rg",
  "key22": "3Z9bjVuxFjRmExU3bturhJxCFwx7MvKUHEwfK1XqM5PMXYzmRfJaJoDPJnETm3pXdTQW7zXhwaLyqe2EX81YHWNn",
  "key23": "3CfJ9k96aGtVNp3hyHQMtqSRkyjWwXAEDPcQUnZsBv41txQNFvnYwojFVYPY5gq8p72sBxjRhk1QCB9pYxnGBXR5",
  "key24": "35AGZEExzVdH68ngUZDg8PWFvi7DZrGTpuM2o4L6mxFXZsGLEGBHxfZXNZKceMoxwM9syos364TCuN8bxeFWzJUV",
  "key25": "49PDP74UpxmTVEGY4dGW9ZD7oy6r4cAoNPDjeXXrsnEhHfpZEcqF52PqFfFoDWfSrSjQX2mvWEGxFeAXMZSwgUXs",
  "key26": "5aTFxmC8VLUHnaSXvnQtA1By7NanUwk1xRKdHfev6AgNKCUp8EaPwXTgwobbNgxvtVCJ4ZAuZ8oWUP2JXtGhA71q",
  "key27": "KsK6NJT1KPV3EACyXNbtGvwHhg1dJGvYLXM7nS1YZHxDxsmCreKCFfpEevzqSkJyYe5CsQbgHZjF9bLC2Sgn4mX",
  "key28": "3XZmZg9DdaoymoUzykwpx4GpnGc5o8wQStAtb3mSFpgqD35ucfrhJG4xW5rhyjrtNZXYLRJimBU932aPk2SUtWyG",
  "key29": "ubrE1zKV7PybmZVjQB7r2Q1qFzPaiq3cnttk65QxMks4QUogC6yuyptPmF6xuTpXzoAA3WX3BE6M12U9rDqdJX1",
  "key30": "vwCLt4zzcaYVkTpcZkUFhX76UwGqM3i9rmPB27gVxd1ZjXtxUmiiDSxoENg1gKzKxhm9trcyTghY3E79YdSspQS",
  "key31": "8Yip468uEvYkjd8hsDBuwWPWW4a84Mfs9cQMPUbXrSJcDq5tPVomqC8rAq4tXLgPVbDCAKEmMJkKDRd8PUaRGzu",
  "key32": "3rb9RFfz2RL9SvaY9RkzJqimG3wNubn1dsSE9qmRWNfbsMUejUsEnLkrkq75hxqcjrLidL5CHo7AXrhrDpEFtVnx",
  "key33": "2BRVUMiDDWNvM94g22XpAQ7yN3REDniqnsirJjwURt6usg5s7M6HSox5PX9gmU48nHZjEivyQ7KfJwJiABJCWDYS"
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
