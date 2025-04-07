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
    "5aAq4K6NVvNZk9izfqByxtVNp1gTDoDrbE3yRjBw26xitxVkX6hyw6pRJne7AZrJRUzwvFrNzcMMFvfev1bmpYNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DwprXqGy2JonqNwpRp3s7PEHB5kxmSknejPbxWKgPo9LfRXtf8NdBGuiFvxQFosD7ZBRKcQjiAUYMb6Y6EeJnwk",
  "key1": "3Wrr5mnjv4UZDcgARL1vHkaBFJ1gmgcXPX1SphN6sDABiRYH6CjSE7ybFaWikfe5oaiW6Qf2C9hJJdS6x23Bmgoh",
  "key2": "sSBM9AF9b9h9PiyEaqx71oHSGLEUPeBW98ooKTZohGzSCTBEQuVjC4FiNpZ6jzw7kGe1xDSE6hbMZM6KGk8xKFs",
  "key3": "241uxJpeVsakjnkwL2yM2Gsv56FYgo1vhj9pTbGahFATySxKXqNm8xRBHv1nEHkJf7yxHCDMJtLH7bErf6bHtweE",
  "key4": "SssnZAHEQ9C4wpTz4hH8egeRHUGs2XSKaGntjfDDGK7csxH7WmUpXx3vBbAxz6GeWNtXANHFxHbM4A2d4vKbM7Z",
  "key5": "2ud5mopqG5CM9xqsKFZ37sVjVF6xLtbEYuCNtnKMYHwk17vKkihNhNksfWNyxGanJhSaoviHdzXAX2bh4zG21rQ9",
  "key6": "3jmU1M4EA2fsZmJySZgaK2Wi1F1zB4kqG3kRgwr7LFB2CEtVpj9GMFJKLQqizb5iyLTuiFknMVXY5fHVYM2QkjnT",
  "key7": "4Q1vmBj5V5Vu8FgWbVqWqy6ByKaFtaE9aqSaU1AtPDzqTFBZAoCuaJYNc1CsNyeqS8dwASNQkQaHYp57Rr75trB7",
  "key8": "4WdiwnvwWQWioZQhRhFDcMyrK7AeCub9SoMFW7WAi1X3MEvz5cpjPmBPCBuKSFBQqwfFK5P6MtnZazUEhYsDnCRi",
  "key9": "3t2cKFssdr4RcLeupoTsENQLicb3oFxc4ZZyJN2EyzQ7DrQmmgDR7tRifqggbi7tk7YJmNiSKWVwk4SAvEu9gSEE",
  "key10": "5f5KGr3cGvbWvSaDc9ystGnDGsoZMh4AU6LybZZjoijzeQWhGWi7G7aBXTCjypHcUcGgUAmNTKyf26RuA2aScpsW",
  "key11": "4L1ArZcaxUyNfuaizbYH8Ztm3zxmH3feaHrmdFWk8Wio2NWso6Hbw8XdeTUg4LbwkZZ3wMSESdksDbSMeA4mPt8S",
  "key12": "2BpWQ5akYVYZdQPxLsYtSMQSMrQbZhhKsWiaHQTd4zkPDGeibdQgTPMqgYzuToZKGPxTv9PBekZafBHmjKKGitMp",
  "key13": "4ssfoSGyhqBysWaNWapyqcHKDBZytPzQxigqo6dxFsJ5knP6LJUVtgSGMJg1d5zFa4Z3ajhBUvLZ2kdk34oDdpn1",
  "key14": "49ut8XMJuuuGu5JGUSDW9ZtnW1MhZSqF8XVe72u3MW5tmPsaLPqfrq8arUdbXVr8hxyHsSokSisvTcSrCyUxCjQ9",
  "key15": "2j1aLoX85UX322b26nfYbRaX2zY7nKEbQLrVvLHUwSjPwXv9c5eGekns7qyNgGwqrjuK4rGf5qhr45sRvvzyGnc2",
  "key16": "gTJeMgNotVLmF7Hg4iNjpqXzr8sWrGg7C8dmeCyitRjVhbzVLgbNW3pU2QBUNAyN4KYbZwh3kttNiCL4uuaAG3z",
  "key17": "3xoPgd3d9cyDLNiGeiFsXxFmf7rFpDtpvZA64eWR3KJLWScZg8QDoibkWTyzhv29KkktWgCXGJaUD8ogtdT658ML",
  "key18": "4w53o5wGgtqAbzdKZNC2H2kVXGVJ2zCTxoUV81hS2QK7HA23wi9KgtiAupydpFt6nhZ6sPjp6FyUf6jR3sugKVaM",
  "key19": "2cnykkNCxE5o6UFQCMekAW18aeFCoDbqVU1jfsaHVGNZf4qRrKGNkt4JX4ZVsyGHUWgYiAyCxqD2dsDpBTKoc1vs",
  "key20": "5L9kMQ1v8dysdm2ijk2eWcYT6JkdzDej6brn514C9ex1hqq7VMNYKM8mm9U5fcqsyjXUqSHy1M4BbNZnGyKvF8n1",
  "key21": "5KAMEi6KckVgNozPZHWhiqSSwuPMx6RTjpVEryQ98saFGfXapXBF1zpSUDuoP6g5kfw6AmQSEDM76Sog53kYWQuy",
  "key22": "ZbYhzrQL8QEwaZmW88YbEjxx4zBj6nc1FkjVRyebz6k6sBTAMWfvnQ7nL4CybBcUyGcjEqTqLGHwKqeMcX6ueTJ",
  "key23": "3Udusg2Ub1Rr3RvQxKMUMmvcC1i3pv7S8dDCqkyXU7wGdtQJnvwUyn6C169yEJp8NYbLhjX5QtgqDGAc62N2UNKK",
  "key24": "2auZtsjS5Fhg6tZYWww37SBisiTEWEMdG9nDDFntsWzWrNUKBed1RqWd5GZ4V8PjBvFPAZiPtP4jMB17bw2HC8Mh",
  "key25": "4xm8xGZk32J1nR66jMNH52TLgpLJAsMToAaNSqAudqMgx1rBr19rtiwBmaBxavhz6TUMz61Fvo9Cb4QavzHHWHkd",
  "key26": "4CeSAakW4Zck6WGLMyKJfzmqTPs2kgD6jdVR52uF7ZXmAm5FkJZDYTsuX8U6nCJr688TSSwNZY3L3s5ZTb9UE2sP",
  "key27": "4BenKGWesGBUQ4HeM4pFkf4Z2yQSBhv39tAEjpZjQHv4rz1cUaKL7GsDXF9kZEsnmqH2QUwpzbrCPKBRzFkSoPPA",
  "key28": "5UGUDjyhNdWc6TMM2VGLSNzcc6JSwJtWXc4VdX6y2k4NGKNmvibTZezUzo6J2HXWncMhyz1X83rqzdiMaHbmAMbd",
  "key29": "3YLZe4LyhEJV9Kcfzc4Emq7AgnJpQ2QBPQiorgdRicS9i649wQNTcYeDePps5xBP4ia7EtnhBHivZnpVh1g3RjWG",
  "key30": "283pte1cbP6p7qBy2HJMjX4Pf1m3y1kh6uV59ohKCiigf2ixskgfvZ7dtsjdS7HZC5GF3G1fJW2rVqKh4ut6MmWG",
  "key31": "34Z5Sv3eJvQXNXKkwB1c3poKoRpHw7duiy9vCV52EZJrruHKjY264UYLf8gPRQE9SAjxrC8gMMWyVgVGscXf4fiS",
  "key32": "5oVmjwh9BBNAJoamn1NRj8VgySrGRvH3M4L8e8CzbrJXB6AQAEgJmFH4sG48kKScc9sK7RuGse37SxrZfqgSaBip"
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
