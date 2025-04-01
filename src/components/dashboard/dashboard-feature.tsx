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
    "8xF4BjoxANzxZvKjQqpmDeQngyBnpG11mmvx2i9UWY8mJ9bfEDMvZvTMXSMoY3repiuFphDPWoDQ4A5jAwTP7fg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uNcU4u34SXz6HbezYuyiBGpYDpucegXJdi5NZ7DUQpSmiN8DNrpmzveGoB5P198Z8XrNo7Bs7QYa61FvJH2C5KR",
  "key1": "3t6G6jRocD4RyR7Fb1yWduTXLPQW7MT5rnqqYU5DhQ7XreB7yhfjLcpYyPrv6Aor74aXeQWU8i4RxBb1kAfLfLdV",
  "key2": "4aPy7TP2GPBFNmfGQGT19duPLJcU3iP5U7MTWGPqdATw9MccuDBrf7HvZfAywydesTjPLWu2bf3bMMWQdz6MNWVV",
  "key3": "2zjJhbp2skNhNPdk4zmGbt8VCD9dA1SLKn6HwGjqZRNGKhQa9m8qQ13vgvnx7FJGW66PFABsHGdvtXdSwAbgzNuE",
  "key4": "2CwNxKHLH3BDPfoUKUpPGxVxXD7wJFmYdgQodybd6qNTSiAeGKg3uJmarDDDHrGEwjK7jyJaAifh9qaUobDAuUD4",
  "key5": "2ax1EBwiwRs36xzSwQUHgXuhuavw8u6fQCttDA9zkKQyMrm3kGVoapDVPaHM91XxdmLE25Xrj3jYChHR2dxcbYE5",
  "key6": "2N6AHNpKCiDfErB3xFLodPGXmXaFn9t2cWmzFkPKNqdbUKhhJaq5PK6xjUkmFsZMUTLVWKAsPxe5QrQeDmgDDobn",
  "key7": "2i9FgXfD6prigft6LZ4nqbiVkuVE7XXcGksVYH4AgyxmGbjH4p6KGF6HkRjZ6dbfQwaxR5HcaW9aGnZToqaCXrvA",
  "key8": "4FgBwbJ2uxCSrLnYmH5rTE9YCTXbh6YUE96vzffC8MpsCS6XtJc4ZWqPVpScxdZ8GHaaDfur1MzgEZgWjGDDX7Kc",
  "key9": "jvh3tx3qci5R3YRtodNoStPoPmCwCHcqjHPcnhQqXRc74bAGYfwGPLpJpRvMyJyqghLAxJZECjdg1wRQfjGJT65",
  "key10": "3e39Xbyr1uLeoac7uVavVwVXWspLz9j4C4WjcxLU1kbRCQujMT3Tv7G93BNQuPwHH5RBSjNc3CFHyDqYnAdFrfok",
  "key11": "34nM1p7XjuH1gTQcWWUvApWDpMe7y8yGJ6NrHgbAjmtJZbmqLizQqExBG3u7Rn4exacLa3W1BeWm6jnF2N7cFJMY",
  "key12": "3ipgkbkVyX6ZdfBLSExNEyhayqcA2Cxqo5bhXrog93wJCLDNvL4SuwjGJHL5tkowcAB3LVhv5U1g9EWPJEhv6f5c",
  "key13": "5EGeq6u9Uc9TukACjsPFndJrtDa8qCShHksuSA1uK1vCNziPvbB2Zjmh72NQZ7dmx6nS4rhmBN2qvu7HjATEmWuA",
  "key14": "4HbeNSq8yrPfEZexdLoYu6g5STLkfXW8mEmGMxtrtBG2hEvtmwHeFDbS3C5xpeSG42etxoB2bVSu9ztmp7KUY28n",
  "key15": "29s3NvsQ7QCqkkGS33RJs3NETHEr7MHNR9KnJiYJ7X8gpp3AX5SMYMNr85zuBnJ7UEYLZYK9TwNQ93JWzygNdRtM",
  "key16": "2cRYw1YxKK5SiiFt1WW9xD51GZCVcpevGH7whpmQiRuv6S5A13qK3a2Dw8dzY2VvGNbkiZhDHTpdaCrWivY5cWH2",
  "key17": "3vkzrqkGL5yf6iRD3zWj1EwiRvnwKsKdiV1k5oWBryScJsDZJeABR1iRjuqJ5Y7Rk8XqkY1F4ydTfw6baY8PcnXZ",
  "key18": "5Sxuj1KLjU4u4bfVtSLji4ZCsr16fzSo4KkCRUg5PLKTFjiA33CRoPVV5XGZcacBRPbHDYJDGoRtWGxGY14dCzSK",
  "key19": "QqoiXGXXJf7qi6wTs9gqnGM8aE7BgwxjNoc3o4Hru68vEZYpJuEP2FqveBBP1aVXhFfvr593BTjLwRZ1uE3LqC3",
  "key20": "2kUhPjYXi8DZ6norLQAmbje9QNyVdj6Aks7UbyFwV4mc91V3nZndw5hQJ1FULSNNBvTfBpte6tmJJaMiiko4o7iH",
  "key21": "J5hSKoTCFwkoi9Uz2nrssnmHtpX8a9F9AsHxpamUrJNegxYtx6waBtGj4xEydnRu92iZ7yctah3yeSfwczf5faC",
  "key22": "2RN2brRh9cusmLsr9oBnaWngqKcWjVWTuKZq5wb3kAsxADJpQRt255BwXsC3c7K6cqAkksACESVP4peAoLXdUmNr",
  "key23": "5evYD566MoCLYthAbj8bZafcDgw6YcWEeJSGHnimEcMekqq3gP4Gs1MqeUET3JbyXRPtxpTU3Zsfcg1hcAM2Y9rp",
  "key24": "4wMSAYDywmrpYyPss2tBPutnkhmXPLZdEKgWZBUiB38mBSFfj3osSHAcMpsq4LNbUpjnJWvjiQ2c6Y1qH2UPrso",
  "key25": "2hNuN3J2LBjRnnSBa7rksancrXwcswBn8S38seqCDeFCYANAPigc1Y6dXa4JH3ScM2wQPsrvr34Y8SRNkrh1o6Th",
  "key26": "4ZrmHdaJBVSexnJJKWyd4zu8rvkyUPcdbuEUtep7paijasgZpkgqG1CR7pVUTzcWc2xyGD6iYE1ccWkkfTx4GEaN",
  "key27": "2C5Toy2wks29sQh7a8EBk9k2PwT52JGXqcjCfhisqUZ3ZtkZ24DNbmrE7ojrxPgrvcLYWaUiHyzuAHcA2kN635nu",
  "key28": "4DEpMGmSAezApqKNW1TNGpDGzUH6FkjMsqo2us4fxudWn6tFTfqwig1gni5NYJEdspz6JRZdnewtE5GdXy6y7LMX",
  "key29": "5K5cLChwR8t5ssTDcvHJz7yZhhrtedym9UsPDkXcyk1iiTMU8PSsicKsZTbPY1mVaCuNz2sui9vxRrM9J2ALRqfz",
  "key30": "5zERJ4w4YKTrpL79sSfP5meEFR3kYkLF3cAvTvn9MnAiVgnhUp8ba2pYFpbfJoZd8YyDiKpMBQYAzwvhEcWcKN3U",
  "key31": "3492jGc9PV7S4zcXctTgwBsujGkFcY3tqLqSkqWwCWoHZKyz865k5q8etVxf2cEgStLY6NCM5tJ2D6xUSKsoXco1",
  "key32": "5VvdUJGT9SSWLyoLcJvPvGZo9yFnJFhNTLP3y6RZfM99cwkdX4QwaBD391mHuXTqGDGMoAVkEo2tvtxGdBzw6PVP",
  "key33": "LVhQMuCYT6BUYmeZFXeeEHQfieXgHrxc4BpxiizVCU1qNK43iM1s3Tgv4DyjMge5gwiwG2rTTfGVVhP7nKe9jLQ",
  "key34": "53HjqHVY2Zc3FQcdHn4mCakrKn3dYNjS4VMFZoED6fWaxj7ct235bcRveQHpGQ4rZFp2RR6enRkvqpXSuYBGvhmn",
  "key35": "63wDuEw8ZRqAa1LPmz8PonBxGfVQMEuRzSKzYJFyyJ2m7eGvJm1q3J8DedgeDKp4ijKyn4m1N6Zjku7cqmDvNaZ1",
  "key36": "3R1F2B2yAkXGBxXfnd72MYouuZA59wxUryafCXDUuDEnMYBrc28SZumBVRVmw5vwoYTDPBpQArkzbhsTYq1Ygdoq"
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
