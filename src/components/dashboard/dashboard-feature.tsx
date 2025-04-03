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
    "JcAN6cCUZHH7baQtDw2LXLbi9UMQiWDwgtACfNQVnQ5YNBMpcVfyZYEyJaAjGbKA8iYSfiKNTicukuhXUtvrHDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hsMSuVKkmoSVcjXEnGkbzyTXdUcqKjBLxGTzpjxLLSyzKWGYoLn2y8GmTSEya5KPkCYHgytDbCz2pAVbDJZBvqt",
  "key1": "4Y1Nw5kp3tajQUiY8S6SVfaop3cmz9bcCGSc9HmWUukKsxSZXvGxKjX5MkLcDGRyANfqz3rWcKYRFzBhqW7wt1Jv",
  "key2": "447QShxay5awY7BVWAy82gbE37eyGpWaa1tCEuFfnRKAJAMCFzNDLF6Te8WjRhSrBoxSz1js3Bpfuhg45wx1jtcz",
  "key3": "3LkxV3V6wdfeyQfDDf2upWX8LSF3WK3dZsM37QrEFRq6rbV6bnnSTgwLBJKcur4g1K5PNkDzpzutG2PDd8zLaTWj",
  "key4": "4ZkL6PT84EMMuewaehQHX7ujqk6biP6wBCjL2AWK32G4V72YNXhB9TR1dzuMpA1zMiS1WYz8eJf89jy9MXPupjW6",
  "key5": "2ydG2U7wNpY6ucUtL4BqYvNznEsKYppnTts1Fj75ue74hXZcmJjsNFs8SRs5M9NixT8S1HVfSezzrAkEpPMLpyxW",
  "key6": "3sBjY6zZ9khomoVZ1am3D2cshsMKUHieetSASzG1pDJLQ3UsJwoM7fvEwCwBkFPsJw2NDMZU2m56bvywb1Xkp162",
  "key7": "5BHwx8E1HZgQF5LyFNtWUHYZcB41emuVSrgbLcMVAanoYX8qi8pdJzAxNRtfU13Rk2Gbh4nZM779PHGaZ83CxXLw",
  "key8": "n9auSt5CJpie6M5AF2NM5igcrFffaTDs1gHkXqvL9Kgmc19hxkEdDTvGqG1YNsxadLrifp8zwyXxTGCEipbSw1J",
  "key9": "pFzVmRRWS2ogdT65fZugJ2P7QuHkTJT55jCcqV6SqTKVykC4qKRYdUo5djUorZNLKs86est1bfdiJjZsEmNiwAR",
  "key10": "5oJbm5CM8pHqrioHXiK1sXwTQe94yAVmNnZ8FMditn27Vjo9YZmuKnPrP9Sws1aq8pPeHY2Me2fACb9BhfhQEKtW",
  "key11": "9uKvjwVtPbsEpRpTYanbFkEN9vZy68hAmwsv7Lf7vDvdMkemsTX9NKKCs2o7J4cxjhmxYuVCUFMyfqogE9BTLco",
  "key12": "5E1Fcx8RCPpdE4k9KngafdYVWWqFDpFnby5TkPwbZSPfqCiEL3igxcAFMNrJhGbX4P6QdmXcxBtX1qK8HACcRjXq",
  "key13": "2wbh3Xvdu8XY1Gxq3nLPZchanHy1LYeK1sLREES2cvQVVsV53WGp79RqWECzdsm3BohehrNyeABSGvsbrkMNEizZ",
  "key14": "31PTAdaeRxqBgQraSh8j5L459vKV1ERMcGhdeoLcYEaGQJP8HdDHn77ZJMe24AFSZPQBnwMV5dmF1CqbW2XtjvRb",
  "key15": "59D3SyAqAMTcAXd6pRBePehGHCv38D4aEfkuZeLJeZr4dgp8F7y1KpBv2RxZxtwuS8DVfXsEGo8eQ14Z2UrUmb6Z",
  "key16": "3yGLh6TaE5d41bNMXR1dWXp9YhvQnFE5FA9Yb7ieiRfgRmdEBuM57FVm6LcBGkm11bU2zYBtZbhEsWvfGBA4ECdW",
  "key17": "QSnjzfepQnB8dqoPrvvV8MVu2AgJ3LRTLfvTfE2dPfyqbqtU5BKJm3HBqsvaHRyDjEgfrwtKxLNW9WR8vufMZ2f",
  "key18": "UeQXtUCfFQsZ6R8m3Q3ttX1aNDKwSfXXBCUUdeFUwTWrapGVg6MMCwnkp2AtpMeC88zf7hmscKc8JbFaenGpCJ2",
  "key19": "5fejvXaTmrCwhyuS6erALvxxP1AcgKiTuZc1DTKXenWixA1BtJXw1e3RpQMKYdcdkb7x7xG6nA4qa8nQPnqEKu3j",
  "key20": "5JqaAASmQsHSBcx8rRmdZuBp2gYrgHwhqeL2pJmkjacpZzG8nAs6tJivug8tdwzQMEewmDwV8dQFQhwC3XapFd2u",
  "key21": "3J42ZLjkKL8YmKJ7SSGWByBLMmKAdgTLxqsn8FXEdQHJ1GMCaMHa1YGDSA1ZK3AK6HbtTNUgDjB2LDzGrqtNdD5x",
  "key22": "5C2axvQ1xUBFML2eYGnkxDtFKfyW3b3i4nArbAA2s4Qa8hDc8Y2qpXhKmHaVZKTWqEdHzSGwFnG967a9Tv2KWQXC",
  "key23": "62CoKWVoKFBNxKv5xEtU54kAmdeeMNtwNwpYFMBQqF77FKwhhDiD1KBTrZgDDqcmvcJFqTgpxzQsTLXnRSQPxZEh",
  "key24": "2MsBjzfFDfkrAbM3UA22896TdEVJejzgpAAGRNuroyGJdjXfUaY6X4QrhsnGQcYqcfhYgMy942xRth75gZcznx8k",
  "key25": "5TjfFJ4SfwgTR91wYXDGmRj9iG7fnAgNELfpMhSZGTLiVYG4GNq7jyf6VCakqvvYfmeAHTppMjcVSexWRh9B3JFN",
  "key26": "Pbpdocyau8AigJUMTp3sm6vnroRzB5z7JVbTYYGRJ3pSsu9Ukxbbwd7uubEUpCY3NML86DFETuQRfVE3x5wdJ9v",
  "key27": "2GRg6FVMKn1rK6wS2mXdQtgmyj9D9Sv2ianmj6mZSCRpJzugEgTZXLjSQKWeZ6djFa4DsgH72aMJJxqMsoXL5v6F",
  "key28": "4xvSCoetanDq3mExFqRKkar2Qk1EsQpyJYuwaGqfMJ6B1abiVDjsxTDSbb4f3STdzqUxYHns61x7ZhfmStRh6UJE",
  "key29": "59HxEkKDq2FXQoTA84puGwxpe1fngfab7dWq4M2XmxV6mLu1PKRcZzkikEbxbzFmSjPFWZz7T3WzWtEqeZxu4HQw",
  "key30": "3MjbTdLhbWYKcSwKxHkav2HTZwU7sv4KC8C5VxivUdrgVt9bNQwWwLsdgPfRzsFrvx7U93CJAHU1jwmTaKwNXNRB",
  "key31": "p7F4joTiNfWxZBQfbHpaXzMMqJ1mJMqmahcQqA64bccZipW4GRqyWkPVufSuNHWLJBqjS9yUxsDtuGPXt5UaAtn",
  "key32": "EBEbbVmWne2BwrhWaXmyv9WvEzrTBJoGP3mdMXNqWkrWRqogRqYp8bd9jYuR6B1JzNGHEz3tUSKX6k7GDmVXuYr",
  "key33": "2gK1fGqgbzCvuN6yPzbNC8WkZzMdY1VNo94UVgeGxaZFV1SwtuZtgmULUydmn8kX8Dh1Kj9Q5Deb2Xcs6DT5kPLX",
  "key34": "36eNELGXphtCLQdBtxiyuGwkEpDUzZ5fFeaE4BzgZyG1D7ULDizQQBoSn9iYnQF9YpXz32UUrrkb5ZXHzCNuBvT",
  "key35": "tuzJ6xJM4kWkhA4gBeDvNm5t7btxtwwK5jWTo1TR4osTdozSgMyb4Pd3jg88PtHJyGPeANTUvSDwGoLXUMwf7Na",
  "key36": "M1cHyLxpU7eHm4Kst3V4vjWaVaCNYCZfESeYh1XNg7Trfm9uTfNPYBxH8YpUW89AqVaThdxV8iLhxfc94bTkWAG"
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
