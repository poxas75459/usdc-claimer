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
    "P1rd3hjiskk6PC7rS5yA4RJSogak8cbZjR54MPWPA9aiUuSszYYWMdeyJeCjoaPaWm2RjVfAxASW1prJ9q2dWjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FpCEuFQzzHTutJRVAffxkLKzYfkCpV17rTGqZYMnQrELzjA8ZsKgYTtWnZCteHatC8ew5DkHod9kEDUQMamsS84",
  "key1": "31pjw9RangKP8atDfxXAvjr5odVR2VH6LZVKP7RTdDcFYUEbut3hnL8TeNm6iSgpZDhwypjUYDgyiWj6ehiqv3rE",
  "key2": "4CMVUdM7pnpuEREuohYCST4URsCXwAMxmwzyrqnWCUJHx4AjK1eJD8RuC9tYUkSSFEuSBkSB6SjaYg5vetKXaw8i",
  "key3": "qS226dY3SMu9X9DNHFyqBbRDnfTdikJgHnzfSPuG1ijuqVRW1qoZFAq69krCz7Xumw92TYRXSLpLVzzrxiKE1Zs",
  "key4": "2vJrN73zJTDixSim4hjct17dPSXmMhsfEX3s5f6VwRJFijSforXMxToyQjLSfMa7H5dJEGKbrxwRmrXrFURh5aQR",
  "key5": "4d3xPtoe8Q8CSswAeSDdL2AGBCytEEUtvPZoQ7TmcQmSrDPfbHyyDAZu1G3ZPPGnGntpM5Nj9fcNYBXnm6CK9TMa",
  "key6": "4xzLzWytFDcN33Ckuq2WQxDJC5kh3aopSKGGX4xDerEk6rLqyGyBqdmRZGAgPK8bnb5tFRfcwawQVQ5htJcBp5Cb",
  "key7": "4FaSsQTXdSfVVvJai5iDYaz9JXvwtA5DMRaLNLBKu1ULBRjEFJmWQUgNN8DXVsgJK7W1gFeMYf7Yp23msCoog8DV",
  "key8": "31SLAbSU9K5axP8ktfpQrHaRXQ9m1Jr5oP5Te6QMhfHgziGSSHdY7e9tJiNsPhAgmC64p9F5nuGia7PV6vwjNtez",
  "key9": "2agX3bUN1repjYB9uK6EFqcK6GUnn7CGfrnYh2vUVNQUDDdMDJAjcTZ8z79vyE1w57JJGv5FGHmjiCjjNPhAWD7J",
  "key10": "3GuKuavjaozEt6hXSbra8LSwTCVHbVtx3HU2JxSabsNL7Zg8pi2AK3UmjWu49hYBDsACwuFm2gJhcnhCjqWB1Xi4",
  "key11": "3YbtYJ5pD1kYe4ney2eiJRzk2R3T16n73iQ71FbsrEBDF4FKx52XD4mLNPMbR5eUAW4m8wd7fseomsdCoTvdyrYL",
  "key12": "YRad2YFYVW6sCZTmGjZSKtDrwCsDyvd3UTaZKGEMXPkwQnsVWdFhhVWjjxLX3jHd7MWvVx7DaGe6fc3mBYYek9g",
  "key13": "DgprbVJFBhMCZhcGSqGjoEdGym1no2afDUDnZVa1FMKiokg5iznk1aFAtJJ8JiMqSisSnkaUs1tVNWbvq5m3XnP",
  "key14": "4oLn5Tw3r9d6yi2X9Lm13gfJhxBtpSLD3Go5FZPznz5UoapuLGpBPg9JuSShHtVXtEutWsYE94ANSn2RYLvrtdqy",
  "key15": "2jytXYdYV7eiQpYvB1sTLE2g4QLYyRKxFegR48gmxQvwBVjppSfYUpTJgxATwT9hrCjXm4enigQ4z6P88qbShupK",
  "key16": "3F5z82y6cUAbE1iyKsxrhaGviu4gUFHeBPevV7hn3ow4EZyLZSFsc4TxMNw13uhgaeWXNMo7Dc1Vxmjobmr2bbyo",
  "key17": "64hGi95p4k4cKWeM7J3DcgXd9pZm8wXF4D2S1ZMMkH3v7SNVuFhaS7ugcxqZcMxDtrQcNcwDXGsHvHbY6JQZYe8F",
  "key18": "1yYkakYTZZE5PTZSd4JUihWQ1wxFif9m9oR4eGf2x55pvafMVNVh9FGxjoAWziYR9qBLuQDE4cdDqey414zH53F",
  "key19": "LdxPyBGDknbDMXTxMdPTKCyRzme4SM6XytcCc7vmXivrhxqX5tSw4BAFZPdf4BUJ5mFHNxH6iv2k4J4nAvceaab",
  "key20": "4BEBPSDk11sV1VMVoUttp9BChB91iCmmLMnjajEotgvUefujB9XXjTKEbQBSQD3ugSdjwWgQTW8fhPoyeQByb53y",
  "key21": "3GYXE1Cwu7fDfeUb9wr2fAxcnAPBYShm6mxGRbPtriv23Lxkwkrbdss7sa8NCPZfueW7ygSGVqyqpPewmTLFztyj",
  "key22": "FHh8bvfbiKAD9iAw9wXYRFFiFiRtYRFFRELUFX7r7nfkpXNh5zokzzHUGGJJk9BvTnUPNZt4Qf53YH6uk66CZbq",
  "key23": "3WeF7EUfEzQNu2huFfdAnyDQgRDQp52xh7cmpysW4JEro2U1PLsrZr3rGj9G5SHuaDhr4jRtoQPwxUryyBVpLTyS",
  "key24": "3P3mAwLUabcruJ3bk8C44C8drh74pNohCQLgqmcXMxWNeq3a1ZZcdZ94cvhPwssJzTrNk5MjX5MUXSd2TSTkP8Y3",
  "key25": "2pudBrdv9TbrELzZnwsnRFdzQRJFVw7nFUNYRZd35PMfNWAZAaosNeEWUSXZoSHHmQRdniku3f7BZ1fQKrW4LA7B",
  "key26": "4dieLuwz9wnRDdUaQgztLGRJEjtB44o1J5xhbxV5G3AZtEUKMUdGUBAohohmhhNcdMfiiQUjV2Dsj2cyBjmeH3dW",
  "key27": "R1B63bijBtcFDpjwNSVwgTZKEdnJK6R2JS2uq9ZKPfX5ABoq3a3bP6vgFUWeevAfkiNe8tn6LwDYGXVAWtRWUyc",
  "key28": "2KEvWqoKEQLfaJHNFaDhAVPFa6G11qjWnkjAAGLXLfudSc1y3hskdkuwrrZR7WPjVWxtxB1MkFfjDFxRU4htZinB",
  "key29": "2bEf8rWtXNqRCdzUzrccD4WLrGanHAGiy3WEtUduN6H3tfS822d1xdkK3xVYT49i3UgtPGqSSoQVoUtMxdpCULdT",
  "key30": "2EoXqfbePdaBphmDwAkU6LVkzyxkkXdZqSkwQojnbiJvNRugg8trVAYHYr4Ztq3BiWcDFLxL9x3KChzLmumd4X5S",
  "key31": "3c5JZt1KTHVBYKf62BWM8go2S7qgvifxLYVLjC7sCbDGRv1hPtsqPVNEW1N52eNKwVZkL3JitVSBPv64S2UYjoEb",
  "key32": "3pw2Vjbu43jaDw9SQcUDG2m6Yy8SuTCnqNV3nfkVVKkibGB9kZaWsTG6WdKoozJkduVGAJjB3UpAHzRYG1rqDPWN",
  "key33": "2y1aB6txZaegKWzcvDfUFrJa16dUY7hPtp35WK34iPPJpZDsUhxkghnV2Frmg5qS5KKTpmWmBfHs6HbSzzr4Ar82",
  "key34": "FnQFYSRvDjoPKwHPUuBEo6yo8H4e55ZtuWxJe122CRv6VUNNCrBAKefgQ3sHFWkGYJxhdVDE2VKqWo7T4sF9eQM",
  "key35": "2yjFQe775xVuRmLmwU37YKd9k8J2BoDLMmuyWRf12sgQ4qPXPTdjsEPgtu2zH3VTzV84L5kz9fkJ4dtrS6rtFAvs",
  "key36": "4XD12M9oqy8EA3Z4PNLMd9My7rd5okzg3SmrPyQtgPLstRwVQpB6jYzobw5aKGX1UC7wd6f3zQUpL8RsXNQYTSh2"
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
