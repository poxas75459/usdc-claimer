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
    "2MB9kwNmNPaM8uEUsd55Hzgkybqa9Pou4iXaHFNkiY3z7pcLTFgye93CkdCdsrS7hY3RQqnbx3KkDisAp5WWki63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H3E2sK3vNzjHgCvTz5TE1yTwrCjrcXCzCojAA5XLQzHFwcT2QoKQ7HYckBKLsuyZTrX5aYsYEZz3a5pkgDBwt4M",
  "key1": "63zs1FDK7rHE8w1k5YQSZy2WyiuJwnWkaVCYLJaQmJrRCZnXtKMdM8FU2K9V6CXTnuJYggpYte2191RwXDYuy481",
  "key2": "2s323JcBtWM6kLjiMHLnzALEtBEfLS5S3WrqM4BBD6c8TZMasyjE3JLBPje8C9U3vJ7tQYoojc4WTf9J1jHgBA8U",
  "key3": "5kj3NRtHbt1ruJ8kZ89VBjLDMHxt9gYbsXvk1SGB3i8vCdRtq9PMa8EreSq9sdL8PVBhm2khSyVg5qJyjZ8BddFF",
  "key4": "4eshJhdPDqJH59hEjcMBf4o5ffckuahLHsN37xE1hXdeGCpcupcrEUuybFpQdJUZM7XvM7J8S9T54sjvCtfagBLQ",
  "key5": "27GQiR3CawHtgqtvftS6boxkUSHdHMPkuHjXyRVRERw5fRTziQVnpPHYzqNhVdJCgA3d43nHgk2gjCjLo1CAqMiY",
  "key6": "3RV8iCDvC4MYXgi4tHPz1xaVXZuKnGAUxXZeBaTdi2Z8MsjbMyurhU49J4KzTDtyR2HH232qNyzPeKcyr3ZhtHWL",
  "key7": "4g1GyQejrS89BMXs6imyXrMUdYPivyp4zWbUYNh6YKZ8H2QBJEyKGAEapfsh89gnoUzCC6cdbH5AE5B7kXMUi6SM",
  "key8": "3xDtcg8nArzRNG943zeXnkvtA9CTno21CHxHkvC6LMSr1rQijByRC2f2ipaepGHFyP3sxRRb4VKnLqydLwoGQWY5",
  "key9": "oEzcvrRuJsTvSTgd9uXsxFxeFZ8Kreabr83fvCpjYG1MiKZqdUbK8vD8hXn6McEZqcBEQw2wyBkhvYE5DAe1LwU",
  "key10": "26y68Mep7mafM3oMEJn5KopBjpho9y3a1c3zzXibMHiaBtRkjMH1nbUVMq61Y2hQx3EBn1xfhpBKksbR6NqpyJPm",
  "key11": "YVeFas23hoHFGSh3MWZeUCmK8wYtiZZSrQtagawuCQpidQXdzpRhrCc78XUNUvST3gfsz3sJ7gMTpLP7SEXMey4",
  "key12": "Lskd7uiUJynWosJSvVAwhDfjk8hYBSqksampndf2NDLgnQLxgaKVchueHWMjWGTkbBCroYAqadDNRVTLskZaw1p",
  "key13": "kKAsv54i6MKRMTSzWrq52SqLPTrt3zsKM6Wh7Vrq69j8jGxRkqST16g568qwyVJDFgLBoUp5NhUn8cZw5kYvk5w",
  "key14": "4ZbFrbputvf9GvCKFZT1vSAKH9sk9zgfdPfoNx7tygceGx4JcLAjhnpKgfJhzT4cjDJ8cJuvn2JNbA6hHXUrXJkd",
  "key15": "gBYzxHLqTkN8ABwwYgyLYfeP7qUXLDrPeUEheSoZUeNT4gysgGpuAaLrE6w2CTNPRqJrhc1scBhRQh7mvRDXpsK",
  "key16": "2F9F4dMn9igdC8SkzxdozHeLaR5nvGCXFXh6oUYvALrzhgKyiQ6WX5izQRMXSSHSBTqKEHqWHhRzqpnZPD1A4zjK",
  "key17": "ymqfxMmyXRioZjrTrCfSu2DrJjnJLQfGsEgtcUpBjQbJmh4fECibU9E3thF1ZN13NQ3MjEdARMLLuG4CUCf5BQo",
  "key18": "wbQcN9veSrWQL9pYHRvi27ZEANAQnLujCzmwHqKdkn2adUUJFsuAzgvc3SQzrGbtJSzQ26oLCuQCvDJUoPsFQba",
  "key19": "3RdqTo8ienJBH3uM7XFJkqR17sjJ3CV7wVRLsdFtBRoc8sArKS2t8r5DL8xcxLNi7XJ2qr5T42i7xkZKwx4SJ228",
  "key20": "2xxqNKyaoAqXc9FEVr6zisu4zkxnKNJLhc7Qs3tTKsEc9r3kRZcHKXw8KBxqxk3VkyNYXxwkSAeDnENVMV75mmqw",
  "key21": "PmVvHbqfbvydHPbwwVmzLRBHhQG1YD2mofUtsPntfSvod4tMFP7Xh12tVc5mHF1oMPS49APRfJcjXrXXBTfU9H7",
  "key22": "5DvhgQudQLsiHuWCUxetZ3K1SiqX1WF1cL7qaGhG5aZ3JGWG854YZJxUTC6MhJuAgWEQG93fan3tZsci6niMmMfU",
  "key23": "2hjQF19wZ8RgGXVykxd5jdQXPuLyGRhu2NZq6SCVAk3eSjWq3UuQs25kPAPwwjqzGer4rGuqGMSxGB2A253w9rDA",
  "key24": "7JnAh36vfBqf2f9xVZ2Agg614Nbu8BBKhaX7pd3a2mXnzeh4A3Gc41PpS5eiqdHZwdzZpNBTGtfS43VzVKmBdiX",
  "key25": "h1T3NdR78GQyiX6WVndUNUWTKPyFgeCAKLR1BFHrHqAYciCEX2HkxoVCbCNeNVALvQS3Jwx6wa9SbKWFLbRz2dr",
  "key26": "61y3Q7m2EEdE5virvpboT7h3RuywDb6PVCvnzVtzj9p9PPhqeTqprnsrxshcbHDrwVrw9ZVvk3XKTVtsgviebj8x",
  "key27": "37o2GCvbUYyntB6UxobQ1shd2XPYfQAinPNLoRtxHC6EfEEakhhhXMt3EqmHAQqfPvUxS9iLDgCmtbGTvkKyABko"
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
