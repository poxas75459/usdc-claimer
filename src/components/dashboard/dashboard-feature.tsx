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
    "5KSYboZjFZN2WSng1U5ycSXJP2SEy2eaRExyDQYyK5UZycRDx2KqK2cx2BKoctFtSL2sLAC3UuRbcuPk2yPT87sB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RZZZ1y83ptbYzFqg2D4ugASW475mPVMj8zdqcCKVDFmbQAGHB5s6m6jyPwzuXoz12B4F7fxL1hZCPMUQxqjhne1",
  "key1": "hWa24yTdfRFinHkDH3HXr2foqPFrgBEwPp7HdAjSbTbA8BEQPMBhyvbbyFmDgU4fbUYJZyoK2mfa9YTCpDABHJV",
  "key2": "4zefsMMa9eisEJLTsnzwbBSEpHPLJRcLktxSFpxRbY9CCGVoJX961QqH2iax8HD2eWdqPyywx1MA7P8n8AyfmgZf",
  "key3": "K77CXDJb73Xe3KduFadqBYuSWc25bHwNnjYFVpN4ArcYvyBHE1H2FcP169A8Dx9tY6JEP2RXkgqQJQenY595N8H",
  "key4": "Ys31G1P7ap7mQQP9sZRnaHKFv5DFJBvGuSBbdhyykot7zho6DzakcTFL1jSzz8Uso3BjZ66u31jsZRt1EW3Eaqd",
  "key5": "66RmrsZ76F1s31xBuNCVWvEm1MhcE66WY5H29iS54UBFPAmzF2tGwQiXRkKgXzEhy3UXZwmwV1LpCtE9AiKAoGmF",
  "key6": "bpGjLwBag3Qo7Pt3bEuTgKnNswqnGzhnTxKAneShNFEBxvmUPRWoEdhGEWkiGmUMVU3osuG8UBkdQaC4thWWQxN",
  "key7": "3uXs4azsCRQbun1xtfGVQLGEBBYvy2oY35iQU7s7p86iMgbrqJnFNibnrDLwumQLmmqSNmbBYXNmZAHdbRUQbTNG",
  "key8": "s3zfaeEVTCXa8omcEJWrVSfsBHjg5f3Thw7viejKYf6K1dBSXm4zrQLFpoHpAfJUp58imHyGMB18FbVUcbVNQnz",
  "key9": "3eLobdWC3ZGnKjHKfKD3SkWWcp4KkAK562h6Zrz9pVqfWjmBqRumw86h2Ed9twBqyMtXYRc13htaYq2Sn5JQLJhr",
  "key10": "2sYHb4PJpnz3ZtNShANMK58NozuBVs4dmL3ap8xZ9UxH86cAKPveTetZnFzgbRTQhTitmgbzDd47eiTE4cKLK32o",
  "key11": "5fBiy3ULLzEMu17zJ5RqdA4kHxBt7FEik9fnffJKnNhhYs4SMbKutCG6Xvv9Kf9Jof5HbnPmH3QrdrAu3XoNwJtm",
  "key12": "5Rj8k4daEA3xCv5EyFGy5bU6wt5GLvz7A3DHMr6ncWRUDj4D2u3hzvzLDJ6hW9jkQ7EwCjp6HeM9vuSCjj2Qs4cA",
  "key13": "3N9RXpDf7vZNHEgXgfv3TPuzUUyvqp9o4gxd1AYoPEnXNmeyqiXSkat1sD7xkfpq3F6o6K7o4r9iYngzLSVohikP",
  "key14": "4fm6bt1jnKMgK9GedbYWsy1it3eTKmwCcwXCWC2mdebvqnPAEP5LG56crHkLZkpFVEf1uhkm7yRjEHuCcCtUCC9a",
  "key15": "nFQzsEY9NcQNCzaUAyvDaah1BCzk1AsFLqYFs4yMBxpfYeJ9We3v95ebdS5P765CC7JPabfCFzKp4EyLyCG4qH7",
  "key16": "WFpQpYCLxAf7cQn7PN2GcWuWsHodaAsRF4ivmZzPm9XsWr3mJeKhywsHYDuD15fPK4UiNvsrUu7vFsv73F11UJ8",
  "key17": "3cmMUUrd6MRejniknxP5qKH4yRsrFnrZZePk2MsPuukb8WC1BcNVUDAqNBC1k7ncSzE8oNqnkXQEcmgNLLTzp7HP",
  "key18": "5nsBLvuuc8qXM6cyeEFaScAunjxZBXgmtyKtVDRvL6aZkUGLm7Ye4JQDynyiWbcyqWWAWUMofZVG72jKDTft3kLd",
  "key19": "fDXZQKYkCkdJ59o71cdA6YYgiN6VAq7AFA31d5SWioH9FkjobDnwAbzeCt3hm4uVewY6pajsQtDW48Xn2h4CJR8",
  "key20": "LKRYWKYHGdwctCTnJbdLw9mfGmEGBBxnVyV9C7ekcQw6ESMbx9oc1Ho4Ge7BaPjB1sU5YqvoJis6Fn6QsUq4PTm",
  "key21": "3HNLxmD1ueSTrRRkRqtZM918RsdUzYLsCSxSi9cBqGGz3oaNBfRZG8ouvzGp6J6SQpn9QHjpQUPRw7EJ66ZqJEX4",
  "key22": "4jqXB557n5559GwJFYfoorx5rVjptncPDsJSw3nGuzXFLP1Bn9DT2ADaQrJruDZm5M9brUVoYVWBrh8eUuU9qzMk",
  "key23": "2mSpube6M7nCzw1ssq3hqXpFjeyQ5CcpKvB9PvKth8R3gxoLZDnzZ5U5rQJoWkUPoVLiTg4MtZk7PgeD1GM2RZFy",
  "key24": "5FtVwLF1rvvqpVANkhG9VYJ6PJ7ugqk6xNLiwuCvMcexVuietb7YudZJqVoQL7XL7A1qzqex4GkoykCX5LHE6ezZ",
  "key25": "5BK91jyyAQL8em3h23VSUrod5Hajd8KfiT6rXaRJ2Mny6BB8BWEuvYN1kTx2FEeCjfUkQtiDmGyhpva7sVAb9pLN",
  "key26": "4BizrWvv9Pn5cx5gsU1EFRqqYDpBiY6wYhgPRVK8D1eoe6hK6buYPKZmo7GsffnTH7RL6MG2hG7uVB3jUsGcMgnz",
  "key27": "28jEnnDyF3wH4FDRX7hqYMNdBgi4pGMdnLAggNbb2gmfeSUoZWtLdynZi9TH96kWWScp13w3zQ12yzQpXJN48Tox",
  "key28": "43sQphAyyuEDNnZ9rUxj6dAHg9bU5TSBat9sumspGtR6i9qrKJo9gxzPg9ALeonogQ5uq7SSnnBuat4TkCpxtwPi",
  "key29": "66VYMuRBLQXddTuBoa8RMjopuvZn8EH5eVasWN1N3dCThkrtAqe9TmHM4RM1jw2PiFUA6Drk8gdHBqng6L7qmmXY",
  "key30": "5TC2rAKYdgfF5xJUQqGYiKmuCvYan5HwsaDe9D382WA6ZUsYem27A4nEWpobcGkT4uAoQbdT1fFxTftUVFDVr4G8",
  "key31": "4KVazCt2hNm4ZnnpagrWf8ivwMxZT8r4Kx1fmnA5TJHkjYqbKSTisWCUoQ94VhJWPAxJ33Ty1yNpZLaVCt9jbEKJ",
  "key32": "59HwXXu1KeGgnTTbXPStRrD6cwFWiMndhq2PSwHTzuNTvYQLPEPXi6sEqHRywLiH5rRx2gbsekD2tSNfAF7aA4hv",
  "key33": "2yAQFUayLBUk68q6Hn2YYHFgmsgqAzfnYEFvmoMhwbmcui6zAEJPh6hMtqfej3W7MEofFED9vaPyh2YimDZbpNWB",
  "key34": "4psUJXS51ng4UkVQo8dsV32Ew3S1GKVXxkc2JiEjy9aTTMqw8fVfZrmwx25igdiApjZfREP9qBqAKayULwci2Nnn",
  "key35": "3TkGmjYhUmgtiL3sadokLv7rSKTvYZfZF7MqTNdDwywj9sWbCRBud7Ed5BDB53Pry5ZC8KiCijN32b6eKXpEhEFG",
  "key36": "4LATDhaJvh45oo1xjFjdW4qZjq1HUNKK8tENFucU8Hu5N7qXZpqbeeSFkS6bawbSd4BGcU7GdmuiKgN9R3C7Pu8Y",
  "key37": "mjwgecZejm8obQnAhRUvA4ifc4KQ5jQb1YnkKzZ5ijmpgjcxQZFt4CNpzFKjxmDoLzeSutf4FTwDpiyg7fqVmSS",
  "key38": "5H84nS4KanMXTurc2fDq1zGqmPBjD4v6uAR65KN8asXiFNBHMq11igApEUHLJXHxNbxCsncgb2bvdwGMoAh3E1La"
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
