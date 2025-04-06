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
    "2wswvfMjn9xU7ZHvCiNYm6x9X2RBD3T9uW7vNMZaSV4c8MDJvNEQ8BC8EPjDzDdWzx7wAzruntXxUWWLz2ShgcNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AMrE8N6KgQkapBddx3tXvVeVhCzgCRFVFH9bGkCjGbY9QtfooBUDoGBVBHj5BCLW1a9ARKvnmAqxjM3MEw6P7Wa",
  "key1": "3iNsfmMxC1uD3mRwvyQsGDiwcQ1eKQ7cURcZe9REahbhaZQXXUKe95PLGzy2CG6uh8MMEUUVFfKEkGie8rB1CDam",
  "key2": "67E9xugzJ3r4i8nTApom9bcyECULvRcHJKQNQActCBEspFC3DTYG5nXwqVmfoGWTTF6ama95mkf9bNdt5hCUE1ie",
  "key3": "5iya94Bv6q4UrSZxQFkTbdwovzjeagSrMUZQL2iskhLzdMdFqgXo5nCUPE1eUFCQ7u1z26mhoNdjSzhpYEfXE7kA",
  "key4": "3x57pdp4HSJwgQwhgFLc5Akn1Tn5tyhbCsgW5wupSfvkjTUv5oMex1C7mNWgoLSu8UE9tH1r2kZa2ZPdX7XnavxH",
  "key5": "4LjJMhidV41QVzda2LKb2B2ZZu3qfqtBw9iMD4dyBBXX91Dr7ehS21iguWu5zuuwwgRYCYPnY8z71jHeJg7n5duK",
  "key6": "5DUmZDZBvC2hfoPbqvJwyr1wtFrEiGJGKb1ykedFfQonZ94pYbTveEq7w4fixUmx7bW6p7wqsRbixBFwMogxrfLG",
  "key7": "4VFtYLCWNjgkEKWN6Eh2e8canxoB8SaRK5NvNU7tmT6MydjhHzXDkfBTwrfF5L9JPT4yym5KhUVs5d8bzCZHTLZL",
  "key8": "4skDJdQmz6XYws3EpUVnLxkpCTSE8XbHzmLsWhUwyxhAf926FUU1rWzU2oZcBT7SV8XSkMNVxHesAQSRhByoXkEc",
  "key9": "3wptM1Su4AmJxuWNLbdQgmnTv7Zh5mfzeP4P5yLSSWKdADvYavYetNoqHcWg4NMTr4gN8BPwi2qDNFiKhDxTbnz5",
  "key10": "3P6ukCR7ivTz3jvx1Ym1Bg9PfEff2j9qEumTLenvSJaFyMUfkBK7sCgznxAyqpgMLXr8Z9Gs1KDLjgmxBG6n1hM3",
  "key11": "4ogr6wuBpnDbGK3XopehQEFVN4kZL9ciXKozaDLrBoZiMCEsim6BEouaTd3cNACjCU3G1r27HvRP4CefqtqzpD6p",
  "key12": "3z5mJGg2JSgmr2QdF9zenLgtLqcBHMr2Mjud1W6FduSxSbbHW9mibUBwxZcQmYdWp4zHp6m7LQZLXVJnq1DAzxpf",
  "key13": "66b1m5hdmuDXBuQw5ifSada3F7C63YVRixdUa8auC3Y6iMFdzdf65NaipdvxPUEbggnf4yGDo9JwgZESxFp6rQQK",
  "key14": "45GmLcoLyKubNUNd2cUn12UCebwbgGs6dSSfSZG8gsfbvey7icZE53hGmY4Sw9ZdqaNfMbHTh8Gz1tjzJ2DAvVyP",
  "key15": "3yiQHpxofLrv9Tdtu1ArSUGJpuseDbtAydNPyVvb5fjjGYDMQKocjSEA2kTZka3V1MoyvrXF9P15A2xTmHPNVoLs",
  "key16": "5hNFogVd2jDPnKSVG4peHmUNWseLz7mZ3eVGVhRsSd9NSY4Vz1BGg1QgXpEu4gg2ACF8MyYFmf5DXZ5qzE3ZCeUy",
  "key17": "59KzpiiaufVYutro4dBab1gcM8Jwqmr6VexpNKP2VbbWnvs2gsvcbpCLHGeJmaoT1naZRFk21AZNUrCQNs21QBsf",
  "key18": "3f2i7JaKWYLuiyLEoonVijhiLvqL2ouXbaY24ALbaXoFJd4wCr9U3Y7dUNSiNXJatjDCRDjcDEkM83CSSWpfymma",
  "key19": "2jQqCBEUTbznjZPpnfSNggZ3R19TYttfpmnuK8zTkYH6JXNSjcardVSpLqKNgQyMa5FtkZ3gvyrdQHDwT4y5NGQu",
  "key20": "5TvbEsf5EG5MjMKV5sEWpdcUt3NwTe4VmijhzPGdMQ88vQJPBgWtwr2WSaaBhvaNSYjTcGW8qnaASJNm2mYcLEFh",
  "key21": "36Uuxzsg8PNYUqizt27h2Y84VfzjqiM7uzpy1GTRUcDRzLthwuseVeBDyF4Wkw6UCsZ3dfkq1QWLpdpGFkgTWTtm",
  "key22": "2vNaEhfnTEiXhRHQZ6YHHcKZcBA2yhn652AiaRUX4aTH4wRKWJprNMd9WFnMVeA38GtG2yucuJhJ5HsKbzj13W9n",
  "key23": "2knB8A5g7NUSEJhbhHEyCkYaGQq7SdfPhtKF2SLtAVXZPeca9FyiKwWJMCARZKNRzCnjpmUA8wFHgdzVTTQeJJaz",
  "key24": "4UfmMEUMPZQp19ND4uZ7oGwa1uM2hS3AjSaxThWtgJfh4qR5kzjvkGQZf3cnq7qsQJ2Biazn9FZC7hsDUxXLywJb",
  "key25": "59Q5sFJN9LgTZLrtyNE8Zgnz4LDqNhkSDyURMq8k4XLF4r8n2wGMcmNdXvYMxTzUggWe7nMEmc1kbXbaNn5NxsCa",
  "key26": "2s9YwRhsaFKDkTTFuvbZBHNn5bWWLneAXLLE7GpN6Yyvt6fBREG3L8tvjXdw1BSjEcLBFQQMM2LWHZPKDuLrSniZ",
  "key27": "4FqxmwzRYYpa6vR5tftYmMmWtLwVsEJLmrmnDwvqsGa6X8Bh6HZPJhFAkeTWuDqD4hu9qfqzDs8kYqy816dBLTVW",
  "key28": "4PgVDeaFiWVm5K6arrVvMdvo5FgdJkeknvVPwouqDRkD4WJvyjrn6KKSizojpGxCdexNzWxzjFaxhrWdJFPkHTT8",
  "key29": "4Z5UuvhcqDMj8p1Yq5DmHCTr9YMzVeBvPUdapbBhFLAzAaHVuRqHQtGnppPeGWQTAH2f4ifWHiZmDn2DsBJhgKtt",
  "key30": "4nTUnphyv5jNRaEcYnwGdeBig7PRCgbQgZH7CuJCdSmJUAJA8XQnGbcan9qpJp6ne3HtTkRLURk7dzbkPbQWG5S2",
  "key31": "22HRjvVcWhDymSeRuizbmDJCxcMvXMsB42XcWQa19nS7DceyTXkiAQACaU9MexWLvB5aJ9Vy2zu6YdFhkp2Q7Xku",
  "key32": "3TCdLCzywehHa622TiRcAsJazG47W7JFTmWYDev3TpGKCp9AkxG2fwpfspAzHUnZfF2pVHfjpMvvFFTipV5733kr",
  "key33": "4ZaqwNQBHymqmjW7nKAMUdfPwLAgpn3jQLY5rRVLEnS9Sn3Dx3FaVdUJjt6RsvRz9nAxrAjKKt4bW2T1uBVcYWWR",
  "key34": "4uXL7qW5amSfWhXaBGAt4cUcHWcPoZZeBhNiqiaUiG5YmXxyDWapUvN1d8xeBwF9AzF7GpohvMFGp9bAhLm8wfpc",
  "key35": "61E5cbPo2CZf8AjqnLLasqigAYjYMbxckwJhPm2YVGjAihVLZNchmyugL2UJvc5W7iis2Lc6qGJuFWz54nziijkZ",
  "key36": "4V1JhFZ9Dz22s13FaPnXoXJPbovehnF8JG67SA3yBCG5unS6y2YusSWr7RkpURPQYnJi1JEuR6Cu3aeqjV56TiCZ",
  "key37": "9Ymg6BEf1ufN88BMETANF9CSNA6QjVQQWLP5u7QHydjTfaLhfV7SPjQa8ut5cnobjm5s947s7StuPQubzoehxuG"
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
