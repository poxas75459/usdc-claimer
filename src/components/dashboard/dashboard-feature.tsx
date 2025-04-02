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
    "3ehqhz4Wj9X1wrKWcq3BNSz4H1PnCnVTtjidBsehTQ6cxdg7F1i5Mq4N4GZSVoCH31kvNJodx71xNdPMAd7CvFuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FRH85pnhYN8t5KQaQuxeSgcbSQphAC9zxunXhKFXmHQbZRbKSiwUjJpJhS6FwzwEDfbLeVtprphQJBaG9LjSJPx",
  "key1": "B6Vt2FRBB9waQM14TicL8CnVpuQcm2CvJUtxKaAsaVMoEfy9ZyYKAGp39ZihSbPQrd6ZGEBxMh9YPzWHWraW6LP",
  "key2": "3FXFp3s4bzYGiAJ32q93EXuViNwWoBc7nqRPU7dyG2Nemcgbz4PE3Qj7j8PmkVSPsmsm2umuhrZBTAUpxUKUUEzK",
  "key3": "3xnNVtny4izDK6GwbXtrJ864hCzVPQkUpnhHG9jC6BBW3E6dFEPgPoazeQBjyyGH2zD3Nn2rudbsgzkKEX985eVv",
  "key4": "2BUknfA6zUbXTRaDbUHYQgvBWFpZqTQdzSgVmksCPe6mHToTGW2VZCjbCKzrQJWY3U5fUBzSiEtYG5jrr8RuaPwy",
  "key5": "3wg69oH8kvacAzDcs1cv8HPAv1X9S4pstEyfVFPDHfNgm9RY9Ai1Mgnk7NXsSPuWRo9hQrid8kYxzCfWaBcp8Vw",
  "key6": "4WphrqXEvKnoWfzc8Z6N9KhuD7FprKs4Csf1g5dgtQYLQqNzzWX6DbSmhg2fY4gB1D1ktDq3ySSUKXw1qYQoKGur",
  "key7": "ERwXgnL88HbE11xwUsNa7dprPT8YB6BqMWFqVxL8BNfRbqMyEBDNtUfpcgFqftszXNLtb84F7i8vNHqiZdP2Ejy",
  "key8": "4B1LZg9KjAjvCMNkm2ZzXMJJ2pQj7p4KXrqKUDqGj9MAmzgd3ueMowmbnnbSTvvjTHQD1z8Ym3qsJ7nVERHnw93A",
  "key9": "4KUGvg66mf6b5LVTLtj9YPYrFSjFDrTPnkFTdQaB8QcsAyizwcxSkeZoCawDoQ6WhCFvgPEoZN3HKSm5y9q4P7o3",
  "key10": "yU8mLoAkBDrAvGz8emsJgXzWA6gqSx79RN7jMLDyM8jpuffeoiT7S78Hf1aB9rh9Qtz5SPDkCqz8SqsKcr1kcgK",
  "key11": "4wvHmKaMHofTiHxbCvdzRrnecBKr9qjnTaQaFNg8CMxzLjge8eLNvHy6ES7JNhy5qHVTemuKZLjmHu3KATfso6eJ",
  "key12": "4HWD7QJRnK3FUcF7Wkf32o6Rq5QkVMykKkWS82G5tkyvD24KYixjsywru1R57nqxQF4n987xQtfqK8hPeMeGdFwt",
  "key13": "c9kPDYJCQ6x1tfKG5V4WS3HfAkKtbwUzjcw33a29LY9aNymb92DA9oFFC1XR2hkkJyHNY1RypNKSGxN5h4uax2X",
  "key14": "3gJjU97zJyZzXRn4QMLv2MbD4Fpxjzf9i7UZfASKCqVQJedaXugsKeLmt2NRDftZsrTnh1egH4iLkVgA2HubXKe3",
  "key15": "343UpqbQH4UtAF7Bf2HGEGRg7PYY5Jxr2UUuo9tHojYRe1E576DoNFR7WxrKA2w7GQXcS4DEuomZEu4SNx7QcpsS",
  "key16": "5a31wr7DJD1bQ1ebUETvg7LKxBwm4Tzadpo3BdWPEajQ1ASRsgkNJxbw2M21LqXkHjrM8neEfj5adXujmEpSrwFs",
  "key17": "5UNrsXSUXBgH8YXUdTD8KwweXewRTATH8BQrdcfjXLX4Exe13axTL8vG61uhTBALUuj3ZNFX1h9WdjtRABSoveXv",
  "key18": "2BdiuhoHcLoYqb8kp3gLEVkoWcZnfsY293yfQNJcZ9Do6MmBrrwbb1wEupv4h4YKokGDwgmcomWaMcb7rWjXvHvc",
  "key19": "3T888GdPKDKXo19sNqmHAkTrtdn5yogBywS8UWTrkwKe86ThhSQyg6jdhQQniPyM6fwv9GFfDKejHQB9NL1bDbn1",
  "key20": "384CauzNRe8HVvQvDBCdG39hhpsPtSAweem9JKWycYdwJDGyZdN18b6hkthqWNE2EmEC5XacPR86FbGB8KhqGzmt",
  "key21": "49oSU6aWKdJLH5UaeaqhjWHtQCn8sLKpXLZbHA1xV3gcXcVm6rGRZrcs5k5ddQGD1yFhvjmNXJAodW22TjBCQEpE",
  "key22": "5A1EKEQXTgrLnPeW9LMfx3ST3GXAshTRdpDJs8PiBUJc8SLHuTLwxcShUg7PNercBkuidYoLJhNErA2XVXvrUcQb",
  "key23": "35aUACs36Thbs1KGDZQFoq8VZdatbLg6ge1NgFjR7thdxCzSJeYx4TuVSQRa9CgjC5X4BaygbQTqpb1LVRLwYp2A",
  "key24": "3vDJnpNu2EbNTTGgtMi4tUFjg22kN27TNhYqsiLLfUFsp7UZ6vvpas5wyE3t8YafA3r1X5GgwFWgC6kvUtrktdtH",
  "key25": "24gc9xaE5rH2S3Kyav193Ayxbpi8NWxuP68u5idYZgpMYNCTu36zAKaC9P38osF6TQkd3psxER7qWcEquvifcwxr",
  "key26": "5MKNS6bRYjGfKkiy7wxexhwPg6esS6r2yBoj6bdABhruE4ewtututnm94zxi3VP9PJirsSVTbZTd8WP1UWwcnZZM",
  "key27": "3yDXr6QgQAFMMJCkbcjFFC1dXDMtrCNBbkodciC1xdRGwF8SwYdghxdtio3otsXuS3mpaXfxuPj7TyrFjo7CvfvB",
  "key28": "3irZfushVMjU7SninTcCFJq4uaLHTsrxcWWT62EaXvaE7wDKgGxqgdLs2NjLsH6vNo1redRzYtnz88a6uCqy6s6n",
  "key29": "3WKc4mcqUKQwezzgApaSnELisny99AKTbnbw91dKZeWVazCLfPBsQsGV43yc6bmemfn7WbHwD5TtRSq7YRmouxFH",
  "key30": "D53xgSYjs2T2ocKcKXR4ZQKbnw5vpKvxBRLACoeqMZz4RrJyn1a83d7qUA9DDAkG4heEi6mP7vtMpAxLi1EmCES",
  "key31": "64yJ2qDVDSW1rojiN4x2H5Bwsw1RwyXwdh8wLt39VRXKqV4MPBYwE3Z9q9n4mBeLjKRCANZJ4HEqyttQwUxWgSJ",
  "key32": "3YPEhmY8VquoE5jkV45MoLMoDQxCwPt2o4haSwtoihq8Nw34UEQNPCHWQG6Fth4BjKTyd2WUE69uY9AnSZ6W1Yw8",
  "key33": "PyCXzeUTkbCU1UMA9PPSrFTyjJm5pAsKsLxszdNTHcGZ1RBwq35Fqf1DWaTit7XxXmVrYxnzzpQpVYbAPR2EA86",
  "key34": "3UCQt5LUD9hEvcGwhTCiMSGkWoKqCGTqN6zcyTgpTtm7UiM5gVJhbFNUxCPH5wXqH26TH4f2mKVUjD8DGQt6J7a6",
  "key35": "3vyjoqiFQZR1qv9m3Srvf9UVSGMMZiGSsYtj89gkJBebmLBcFJgtLtgsGZsTNeYNdEfXEuGTrjnHsY1DvBSjGtaj"
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
