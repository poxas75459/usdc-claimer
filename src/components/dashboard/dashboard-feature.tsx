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
    "4SihWJPkcrafDpxpVothKqxRCwrMVs11tnCYiZehxrZKC6g6y1m6aaMb81PuWokAsUKavb7Gn82mBZMD8gLp3xst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56mDt57gCfd9Rcxxouv3j76oCKYa9CY6dGN9m7fdEFYWt9si4LWRswWKspdK2cYLtMZJRHcq9NwCjK9XqZmjMQpw",
  "key1": "5U5MpgLCAnRtX17LTuYCtbJh57FFeqXTwktfURuTNmZghGE1wTgYXhvgNYWCeUkckMestXVZGPiTc8SYKnrPxaSz",
  "key2": "3bVet2Mo9dSZTz6ztvr36k7GGfGKdbBMW1qtr3yyfHvE8vDnuz3YMSeEgfHe4hcCtwfLZZuu8iTGTUr1V2i4uTqr",
  "key3": "aJpNPZo8hBu68HZ95bEHpkAWaMsKhPFqkj5EfjYn7qpWm6NuBGH3rnCjjZknywdtAWCss19tuK94J4Q7AgC8tcT",
  "key4": "Lx81rHEHeVAQxky4QSFKXSa7u7vbXWFciwHwXk38V2S3tNBKAzv3SJEcARLkveVPFg7rgG6x3nkswngGCFCscwy",
  "key5": "3ZGk2oKNMAtNatPNdwBJrFDgsCVH6KgYV1754cW7fYCQXJ7qNtadgdWMwP29FuBvjkbvq3Gqz6NFdCeomp3REHU7",
  "key6": "5Ew4gogJmujar8Bp798JCkVtsvJqb348N9LYGhP4a1xVwhUdZ6We2My17c4YTgo6yseJtdApoP8YoFG6ovV7nyHd",
  "key7": "4uS18wiJqWqBuBFrtL8N2zDfpMDmcf1qrcqo8C9bhBY6PNjr92cRJd8QGhwkRZLHEtmRo5ZG6jWtcejAgcAdDsAK",
  "key8": "2PgLvDQArjSCDAp7XmBzQWXjbEhPz2sUctFyP9fbhQUHqY99WpGdCRvtsn54FoNdfch3F28tAnReZgxHvmgCp9VW",
  "key9": "2rFwPJ57dxpxj5hB6Bv1Ji2ZoiK4YLgQ3CRzjQdnGnNyN4YWecC5zAZakX8YYUyiKYvHUqBQxzJKDcSdry6hD4bX",
  "key10": "2fomqT7A13xrDjnTUJw5LC2SHM3mUrxfVX5tTu1Ytm3deGX5PdFmWpvzamUyUZ6NGYgzmGosFYDX2CY3XQbKogWU",
  "key11": "2NVnWSk6jnL8XtWgVnbSMRSMPnqM1ed2yJPjMN6MXVrFdWNoU4Mz6FCrBG8VELiTE4irVGZuCC1WNwpPobHB9wT",
  "key12": "4RNsxn69pchc4xpjixB51EoJdiLYxwDczjLsffCwRp3DFG3WKdTSa7xVjVuj1EK8BSUxjx2tWG1JdmLZDumbrrS",
  "key13": "3m3H3en8zshe22TH5TM2kY3PLetFkSjEpN4UMtNDsrCzBZYrLKDgCUNYdcbp247SnKEFLiHcUZbNetgngZp9jXN8",
  "key14": "3qPVUmKyJB3AWbQxmH1RX2BjkSkZ8SQpRzqbGsAFygfFQmSLv5QKHQmvnJwzy7nLSLpjgpva7bBrssQPVk6LJFa6",
  "key15": "MNxP1ionu5gJZ5HpnMorV475DouJ2mbe8JCENfdkpVAJoU4F8iUtQf9SUdedu8QZD5rWgpYK64BJKGzRi5nCrPA",
  "key16": "4qcjfjEZxxsSgFz1vjrjaDz19DQ1uybBimboi4TTuJ7HsEU2nxCqG2AFyikF3gkPbM2dLZwJb8ccFh59eUCAyedy",
  "key17": "5GD4Gupi5XDBAWvZf7tpC3M51VptXmZR5RNvJDyssfMoGZuosio8pefCnwaoyZ26xiTR9GKw8CYpWJYa8udTRKRi",
  "key18": "WPgsAfPucvgf2kogHtNu67S1fuvQ4RQ5n1KzNeFMPrXwBEcfi9HrTno1yFqYVsJ9gmY3vYJ8vg9MXLmcxmC7F8G",
  "key19": "3kqVy43eD1xDkvaLke99VEScUBAVVghzyjV8VxnYsNDd85fc2FURtCaLMx7kCMkQJydjzzucXA5Py1mKvDT8mVKU",
  "key20": "2iTMjBejAwxbRGYCToZN939TEXdTsQTHJW6momuexEEfBeYdnnNFVaBcqVRGJivnvE4tUbQztcJ5dtBzivs9wRko",
  "key21": "43MkNcKSLXVzg9HkDq8wYngCSfhnhsmuY3uiH6tSgyZjRJG13zHVz3ojyTcdFkwjpZEMGkMiELxhX1sx1ebLSX1q",
  "key22": "39hMUzrwfHopCKWPwujMUETgJt5JXQgmf2zbJwPSG425ho2wFY8R8XFCpP4fgnqcezvmjuaDobqk9WVv7gFRZZmn",
  "key23": "59i3D18CkNP7SkHeb6fTHKxP2Ka4kWs57t3xF8o5fYBWqW3Rb3RggV8Hi8JtXJuzVvNC4fT4zrBK89itpzvXojtu",
  "key24": "5E19nLpBCcmjDW8krT2mRiL19vENYaiCWvWzbbpVMxchz4jjufzf4Y67oYgqdPQkVh7gDLCPguCTJ6ZRek2C76gL",
  "key25": "2FGTjNzWKmGF9SK8SregbMBQ3yPnjUYpWAFrgTUrYYW4rWqeFznWp1aNwYGxghAQ4Ap8FtYQYh6jxG2KrdstEkox",
  "key26": "4A692R1JXgcCuQ2k5hM2j9G7ZJa6fs5xBsxgQ7kj2U6LCru343KY6g1iFq82j3KnkzpW9caQTH1Ruzvd1rDGaZrG",
  "key27": "4zT6VJNMtHQB9VaoyPyLhGZyyGYC83iU3rA3RZCgBNrHbdjnPg6x8GVQQFWnuVzJVT2BRcZPbbhCH5GtUZ8kWqU3",
  "key28": "5ktDrwute6LfRvVjor73zV5ok6AMKcWgGkLfKrJBcwX2qx7CanGGPaP9H554sZ4opJXKz4Tiy6ai8yEkDNjtxQEt",
  "key29": "2ix9cW5LaFcW23u7JeQ7aGWwhXiW5RP4wjZdGaD5KYZJQ3zXemLX1KFfeit8bCsagKx8hCgV3wFAgsVcJDxDUwRS",
  "key30": "3A4EcgbWsAwy7SkPHc3ZzDr52uTAuGJDpwgFYCqfuSFQ4Rgv1fGmnfsENuKCmed5Wccs2UZNJyQoT4xBbnAuhzeF",
  "key31": "4JtUyHH31Ry4onqPei8Lx2qsQmKh2pg3faKFUmQApMCAbPRybrr5vmKyBqfZngizzHLkQmU8mJG56Vf1KVRrLgah",
  "key32": "LjEnCZpYo5TVSyHDBeBiCsouwzJ41BJz2B9MtSuuUNsenGPdhyK5bvDiGaGj7u4Zssf2SNkmEN9ckiGk7q4sBdQ",
  "key33": "HzsAi7FYW2M1tp77ZvHq4LEQ4JFxAufhJyru6cRnJc6eEEsku1V8cd8DF8NmNmcoJbEFpK16L2BtYSb4mebA5iY",
  "key34": "368wrVRs2Bja7KYZkcDkZ9zVQwjdnPTztPUqQVi1wAjNJAKDd52xBVZXKwoSpfTndQmtdaW5EHSV2eKUm3THJcbi",
  "key35": "hqNKPZjXAhi7KnJxgLkozuSN6fb8nZiRSwKEvHCkvoz79PtpJxMm48d2wDctdkfPTk6SfopuCQidQ6Z2uF7NtHU",
  "key36": "5RvqNU3PoTf9DPAEQyykkpin7SkH7Qm4isAy6poz8KqFiRPkdU6V6GgV7CEKoHHXkTHx65zw1CN3VG22YLoQYF4r",
  "key37": "24NKfN4iFLMEnAAxbYWLjm5Ub5RkafGYmKRuVbzti5H1RvknNJ7fBvFNxiswTRtELKyVfQa2gXFCGyKEYws4WJE3",
  "key38": "3Trbym65a17UoFg8EnwCLEntrew2mrwMuvYvZKnhFnTuKmeF5mxknxmq1V5UMV8WCZmqrUqHYJUPpQoNEfBm5MuE",
  "key39": "5EK63adEv1fZSqw2NKg77vykQ94nfXuMDw8Dei7hYpjGCpSA7Ci4KPthZWQRHJUoXLUsT5uiWApGFq3RZsciR4Dp"
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
