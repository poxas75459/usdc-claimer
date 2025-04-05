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
    "wbEgVQz4gpHCrzqQqgtnKUihGm4sDwwtR5SS6QjVwf9QVG6Ku3HCvKQGYovdMVgQRi7NQuLKnvdQ8rpYKj5hXCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FtVnTKA2S3ciHjQvhaKgaGbzgWauFicv2mAxooVNePwB53ZHJXnpNAhwyCcG3QSggyCJuGuWA4tWVxfCtL8UE5R",
  "key1": "5DLfqzojxX8uQE8PCPV7SE3TDPZr92PYmHAQWt2fxNRew4F2LqG4CM3gTYCPL8aBeu9v6uP43pzZwSJThfVXHjaS",
  "key2": "3D38aWhwNzCwMoiUo1Mkd7NDZZBDpnxeLbbBirCjyvqxYCuRu5sWnUWnpcnkW4m4d3mDw8pfgK6omfh3be6oStyP",
  "key3": "2MDDS6bMTtGnpaJPbwtxXAgwGTV1Bav7g1PUr3yeM6zRJ3zYXrZa3FswPE3bHTV4amgGBtsAxJxbbL2ARhuAoP8i",
  "key4": "5EQwkA2ie3qpxNfo9NtcY1SqJ9FnabyQQnWxENGh824KdDkm4mYG6g76ZnCTp7uxtnNMaxaUjiiEg1UVkUi6Xx2d",
  "key5": "4mbN8isVBwAX2vXAFDbD61NVukRDoGP3h9rZTHqainbSbwibSBSRiHyDe97AWqeNfnmEwNB7Wvq9ZfTFESEw55dV",
  "key6": "3zWxb8NTziCdyVTVfARrP6AbLCxeNS6UeanexoBDGCVc3BhDF3hN7nqq32kd5HNGbpAkrYv4EovcqaLP1SaHjHkq",
  "key7": "ihAoimNvW7uUBsavYXTeGt6JjquaSs3Kai4q85o8tpgdGC4gvvFq3SkcNBACqUoeZ4zo49fdkk7wK35ippsNK5M",
  "key8": "22G4MyCLdQSGH7RMQ7uhr99PiYU3yk1Z7cxeHfEKf74FWHLBgrCpXZb5vPT6nZKgXpyvzmGBgS6SxVPzuWvRiZvm",
  "key9": "2DumBYQiRuzxQjQEtpKyBimnzPsFUF6xiwqgyGjo9qgAKf8LwrEMoG9URvATKEtudZy4v64Gnz4pJrNGnCgFyHaF",
  "key10": "5cqeaXtrvCNEda9aSF4Bseb18ptaBczpK1FjYrcQsSBt59PbTdBn4dUKtT35uP4zpkjsnsRgcn5NkmuCCkHkZBYc",
  "key11": "3nzRMNU4zq5N8LrseAYZgV6ToWuNSjzUX14RXUAFcZmJNoAbDqtajHEcPqhPorBQkH8PzDswDg6N8LysfB6jw9L1",
  "key12": "gPNmzwWUzoRRot8x7igwGmFHAnPuYmzWDDWH3sQKcvUD8qkALqZYzJEMNn9KM84kmQoBiHm3moK2KYe1QH66LKm",
  "key13": "2fMP3cYsx2YeJndgZtMTjDM1NmTso9u1tEC5ar4nzDuKkv77EsBvUQNDRgWYuSNan8nuoj3R81s3B3CAMnicJUZc",
  "key14": "2L7N7HjaEvBuZpxwqKxQh6mXL4PUQ5nbDk2xPMRNdKf181oL6QPkuoAGopK5GaQrcKwoC5WeCrhyvbw8YFNuV1o",
  "key15": "653JW15NtQ5g5jD4xnQLxRq4ovBR8MYAczLsznNYto7MkbNZ41vi9oMwG1CdB6gAwRzT71u1CqY65R2YCNLHeBSP",
  "key16": "2DsP4eQbCGFaDy1cTZkQVpKNBfrbjAUjez897KE2kwGwfwmHy4Gtwpe4ACeYutUAni9vaFpLWuiR8BAqkbWHmrvH",
  "key17": "3gvDHJzMXqpxu9SV5Tz9mtAejwAKJrNq241jaRZQ9TczdSMoqrVMW3rMSqEz1MVW2UTYWQhqSrXdjhbG73sYCdDU",
  "key18": "5Q1bd2XeW6atqR8oPSguivaGnqpkyqhr2Peb5eQWG4geNBTEY7vxTcCC6Zd54NgYV5P7ZNET1tAhsNc7yB3xE9Hb",
  "key19": "3FyEBcWxdeVeLv8N5NbLJhxyCg6SKfWxRfm7H9sJedE2E6otbyYEjrsah2ptGHkQvcJmWfLDsi58YigpNmD3ukH",
  "key20": "3Khjf9ZT42qbV6GpGo8qE3VXwjGk6hBJEzNiZFT4V153jQ4iEAWvGRSGWwkZxUSbzUGrY12jJcfm2XAaVzp3Xboc",
  "key21": "5eb72MHdmedQEbxfkJAoFKqGdqmEUXoSb435ZmY2FTexyne9EfZWTvaKfNrEvCNMnew1ZZN22oCp2F6zXfLbcGQY",
  "key22": "4g1MXcoPt9FTYi1zXSEebYtT2NqGppHjxQKsRMg8yibmyR8o4xqvhSYjk4nJHi2AqqqJxkKy1LERNxU1MKeuBKjk",
  "key23": "22rSujnbjrgK2qMsZ7U43ux5gf2WLMH733d3q4po1yH9EhmStBMFvzckT5VmpBjmghykbeCzoXCwnhGHWP8T2RZL",
  "key24": "4buXESKHBQqjCR7JA64gxms6StYnfZMeodCFuMrDQRx7zoqRkiM558osb5xm4VmPNLsApkV77BpGthpWbyzCw2t2",
  "key25": "2A2uqQwPBnoMegFsrjdJLv2WHmvY6TTQKQn3HvS8RQg8tx7XMPJ5nzpGT774pSZdSKNF2wob68QpxstcprCGgRkG",
  "key26": "fmwvg9EGFYU2YJAtxPEHyV1HjyWvTwbxTHQrZJuLezS5DGz3PT8KdHmWYUUq9AbgSxDyFMCPp38DyQGBFxvs5eB",
  "key27": "2AvYqZLo2dmrAMZJVnbLBLK97fAgvi8eMEF9NQn6UjuX5TGfZ4mfqZGaLnY5TvhkoHSBkD1io7rgvn9Lxhwb23VN",
  "key28": "2Z5Xh7Tse2fNeuAUPF7vDNEWVDpbkutCZjp2Aes9PWJ79jxQ18PdSGKQE2Tm2WDXensXeUGkFsrv7eUHH7SwyoFN",
  "key29": "4jZgn4rJPNAU8Jyr9MBV4vwwMZRpfh9Kf1oftutWqLysELH3x9epen6h9oxdRaamHUgW44kzgWgnCUQE7L9Hdv1V",
  "key30": "4JfwSbDiH2nsbeCDTif2iwaVof64MC3W74GuFdJyKs4oFo4t9WmBff6WGfoJvnLBeunJh4G6nv2qUY7xT6NzVfD2",
  "key31": "BCive4gsaoX2tCGKdwWQxVQUFfATNAGFBLDnr2CRVmwDcHG9YkXEMjGZ7UkuZX6XogZrqStx6zPadnDbnN4XE7q",
  "key32": "3VSAFDPDXjsyGGTbDDCRM7o3T2og5kaUkTjnFMnjEwxDbaoTXyqV756zFtrVTyYYyk4nfJjXtzSitUiSfcN7P17R",
  "key33": "4UgsKrQ2aSVppgCyUHxrN1caCVoJpxhTsSmfJ6MTRSE8oXteTYMErXRcwhLWqK99Hfdv6bKmS3ZqpPTJB3qfN4qb",
  "key34": "4BeRKUTJz6sPvyubwzVHBg2tRoQpy96RjBmk11REJWZjkngfYHeon6RmcdiP66DPYvtQQpwRdT8GMmzpivRHxkFk",
  "key35": "56aHL9wQZfp9W5t43bCyBkHFr3z68x545VcfcoDygMy1TizjeVqoYfArsmj6e9KzgADDf4FATorBsD5iXtE4G4Ye",
  "key36": "2PjLgZN7ypFL2MfqDcAiSZGXH6NLeAxPA6fr3fBsUrqvwfD4GPyW9SDYr6N7iXjgiQKJBUfKhfTKcbLwzGtMdwqw"
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
