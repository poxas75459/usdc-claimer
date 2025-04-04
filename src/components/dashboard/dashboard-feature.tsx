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
    "2y7KJpoS96awy9YPvqHu22dXHyrmEyyMyrAeCJ9TQpqiCUzzoQo7Cu7Mkg3iotmKXj6bzWLWH2883R9NriStf6Pw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R3tJ5iyR8dWyd4htT2ZdaKkkrYbHXzyzSYM1zrW3qkvpib2i6SS19C8Le2azVAwxdrxRDy9P2AeTVZY25XaC6Q9",
  "key1": "5guzxfa441CVuHk9HjYWgSZyvQeea9zYpMAYsEogipWaREg5ixTZdF7FbmqaJUPZi1AcChR8xzcAEtZaesStKxxW",
  "key2": "5kSu9djypa9xhQfbpuVyA9ktQkd29HQ8bUQLaLBeJHxX5T7EAFEzAeCuHpFjPCvtYwMX1AH5FYuDuZ2brS7kSSMj",
  "key3": "PybugJg4d6PSXJicR7eiH9Bm3kUbTHceXsKX89qdwW2td78ZEZRogNXFXcwd4QoXB4hyBxvk8GAc2iZinioXRD2",
  "key4": "2gDpbJuwsj7dTfLFoAbT9nVotBv8hEn8hrfjEksSWSjEe4G1eGrVGNdu4BQy9aEA5GYjbSWHB3gg69yQoigaJuee",
  "key5": "xJZmpgZGymUABWpWD8tRMUr1q9kWtTwLa991zqQFzvmLRNpagkpyJKimqW7nY2FJQgzQZ9mc6w5CuDSWjhHYcAw",
  "key6": "35ud3Y2TAeNp5ZAktY2igAJEvgPCFxtY3SSg4JqPGsKvUbWPMcwkhiVqCe9ggeycRapN7EKQFPwBWvcup4YfBKPe",
  "key7": "3Wj5QqRohoz97i7AZhKivuciDUuxwoyj2hTTBgUq7uPGidrHoJic5ohu3gqDkEE4iog5FG1SdDBS3rn2g6KhRwdz",
  "key8": "3geNS68QQPxatonrvSiJeTktbkUBYPYGzhT62TS3MBVysTZx2hfMfoYXKBuQ31GBydvQrV77RoXoNy16dBH4Jgyh",
  "key9": "5V2kcJHqcoCtG6KFpZdoYzgekNnBYG9Bq9jYfwdNVBqFAdyTSpp5DpiV1KhLGnPUwuNJRWvoRarpALZ43NaengHx",
  "key10": "5nLDpV51etnuUZ65hedD7zZfCZbt5xxAfFTAN9XEKf3CrVnoL9dxjJqivcZA1zFs6ppx7cLDZ1qh9byJegz9rZzF",
  "key11": "2cijuceYSay9cNiq4Wb1RXKbeHhd1VSDQkNYYLPYNGCcGyUGLqUkXJQ58KGUd4YeLMpXvdYkMHXNRtD4v7wV6pZ5",
  "key12": "3NJxCafeh4zCZXhBbRjhxLbRJMMg6wvBHTD2ZyaDnvA1Uetj8q9uf1J7ahp4Y6NXMX8mg5jtFxWVnjrZcCwqSsyE",
  "key13": "4ZpM2PWbEpequiiHGPZLsgbZ6tdEvQNo6BZ3GXZq2Z29s4X2vC6jY4yZmUZEcBnpggmzLmCzoNwNkE3L4rYKo96C",
  "key14": "263YAXhz8TxJZ4yCrDiRwCqQxvz3QN9innKEupbaj1xX5wYotN7H3PyoZ5uuvQXtrYY9hoTPjpL12kyADDntXMsk",
  "key15": "4ZvdTRsr5QiYBKk3rVQbBtxvJujkUwBakLhEMpxKR4EP89sYwGzgfZPiZ6B75PB7zvbQrQpss5JpbQ8by3EvRzvq",
  "key16": "4B8vE5UwuhvHDAbEkKV3QWt3fXynD4FLhKK8VVv3hEiFppnaXdH7Q9D9YiFeA7ywigvqq4AxqkLTUuWzRbvVPAqD",
  "key17": "52j4yABy1kPnpDTm8Nm1GXSQPJ5WTMg6ACgBv6PEwoFvMXAsUqSbXDiCbNig71uo8gCogK6MnMZGJcYUp5GgHcKN",
  "key18": "5Yt4guLSa8xJn63XgTgzfa8SCGJSC9ADwfjLVrPpiaFpnrJuFmmfYxH2cuF5FbKf5JEyJpmLKLWytHqRqVAMyhpW",
  "key19": "2813NcwvQRJZBSHVMhK1Q4hZcnhnw41cKTjNEt3UTSyjZYr2myDBRyS5C2xxLa7fieiYwX47My78kbe4G5RGEyAm",
  "key20": "5UZXQReiHF5kjw42HyusyijX2w1dd2sxAbbCtuR24PvxX6kf7Aj1MVJSRwn3q7vVUGJbPz8hZ5Vp4EDarjEy5CGi",
  "key21": "4YtYvX6i1Ty7RBWtCX4wVkG7TEmXXnjmd21ujFYUL7xHHwMePX7c2rUydxMd9J2YFVW3sTHM3NZDmEapeajuuqTS",
  "key22": "4ft93WqoJxzqG2HGpv9bkE2edUoJ7XwhvhMg7CYZdADFEG3jiai8xLesbdTa4GgGaUTgKC3YU5nfSpnEe79aJZY4",
  "key23": "45RwwxRDFcDzUmcawLAKKg8bmLKJWua1fFB6BCjhPtsEozvHhtjze28z6A6xZuPjb72sgnSnC3eD6ThF4LJA6RZ8",
  "key24": "5uM5mePbJAAgzwcaoMNtSfUcDKXGVDsJR3yBbqqKxTCGgdqqrv1JhUVkhUWxyMPNKwbSYH7E2GMRCQYzPHwg4pch",
  "key25": "cbPuoXZDmXXVEg7XR31tZefxeCnjUYFgRMyfsST6sbEaSzJMv5NWfDBie2sznZKdpH8hekBjumb1v6dcgzYAk6y",
  "key26": "3963BYZG1DTwvdAfnmPXWHdD8rQkepJtzvbTgvtTYDFPmz4MpHiUSvKkw2NXXc6tZUnQEBNZDU4TzWHUR3HNrF9W",
  "key27": "2UfRQcNq9j6XkdStfp8NWQDqarPLaKS1MnhVaQvUeFFMd5mu1EA42UfWfWgGGDdzbymRZoiYU5bE39XfnXgZR6cE"
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
