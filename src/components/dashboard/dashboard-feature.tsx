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
    "5jieWHmYJUQ5f6PBZ6HK53aT8c7QknpSg6rj6LKZn89wPsz37XZCvMbUqAAyitUhzYEFXQymuykXWsR3CPRCmVDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "581bSivNQ9PvrfcHurhBGphzgBF3qaRRsykYaRz97mG3a5qFhzgduSf6QVNPynWVN7U5jeh26Z5TA3sRbyfZuHyu",
  "key1": "5Y1GCU3S5sDxzC3dFZZr4WPLY5uhGc6EKApP75XfnU7Toqjmy5wbQRGb15UzsNrAHKg9VXSABrFELtyh4dwZBJ41",
  "key2": "kWtgxZs6AiXGhrrz1CEBMAjQpF5y9xcko3qqQu6iegrQ85fFSRUPisFy61nQruUcAtKz7P5uURjgVMf1JvETLCh",
  "key3": "3syiC1ZQbDvLjAVAPNTB96tBt9hokX2tpcuYK7AoBpTnoJB3UoboKq61vpaU8sCRrLqC8zQTBZKGvtVyvJr5bcJb",
  "key4": "5B99yDdhrMWUY1fEQaMBdG4NtWYTE8ixcr793fiLNxNZPi2XUERd6TbqnYUsP1Fq2GF3GBzPUX8DmPVAemUt2ASS",
  "key5": "5nBrZfoTm6grL9Qm1FxyGQKuGfBfr32t8hQ2xq5vQuQJDFPj5FebPmpiKR93tJ4AreiJghBdyPc4LWEPmKe9hXUV",
  "key6": "jg3i1ijXnfHYDKdQS6obqicijgPLZFrPWjk9BNs85pvM1nPjJS2PoY1tB1URdF7a6ibnkrommfJBGH5ZGKWz1uf",
  "key7": "5pQ4DPHytcrDDGGbtgTGhdRsVHtRFuNQH6wGE1paivLa8hdcSTa9G5d96q4KWK6iXt7Z3g67Ws3JR2JbThNQCJ1E",
  "key8": "2ypCWd41xJ8MJLoWXYid2E357EC4pV6E2heKoqLJbtPUvzB3KD88uuGagnSqnrHUHjdSHQ4YJFVSTGVGLUYUqV59",
  "key9": "2uvJE8h7KdKZ7deoupeF8dHGJjnveupD4K965AQVbvLikv73qAjQUHL5uCkMyE1p3VedFTYXVR9nQ6qHkecrcm74",
  "key10": "23DRDEVi6tDRLgfdWdfpsQ6wQiqEyPXmSsJUaopZ6X96RAcjUe7AzUzcyYQ7tSV7YfVS8NEakVH9sjDepP7Ka6ho",
  "key11": "5MdRWDKJKC8gyVKW996CxwgRDNKJbXM89AJt3fWBcjywgiJAJSys3gd7GTivqNyCEb8tffCTt5J6qMdiHDdcajPB",
  "key12": "5sUubihvK3hekfxSN97geKMTfsH777x2odvmJU4CUnv7asqGvgJoVE3AWNmzQn2NL76qRHtEV8vmAswRvh7CtFLe",
  "key13": "2QcnPgeXEVUfEyDxzygbRayxBB2rDQWEWSUZKqJgtW5wZYg4sCvVi49ghdSJXPcDUnVtt2sLgVqDH8WL7ZHxbV9s",
  "key14": "nLjYs9yzDBeLBuB4LqgqHyBXwLCt5vUE64bRwTecdymJBFD9YStheKTRA3kXmTaV77v3U5Mc2TBZZ1e8RLUAVGm",
  "key15": "4gL4R2qiQUkNBEGww3Sbt3i6wXcPYY7RakytmNaFQ2o2YYPiStxynMsvDMRegvgKQdCjSsTVHVYZeWZbr1mRxt1b",
  "key16": "4YmfdYqG19MAjYmZ1YKjheSfa3jHQJJJ8XZLifHmNgvrp8JMHdgGaNLHXHYwwKU8LMpjvXgmXTEV1J1EX1Tm7goB",
  "key17": "5g29whrwmraYmxpZRxj7zxUPZhYkPVJyeNdPoNn2nDDPZyM4JQRHgXqvi9X7GHYKnmhdfVLfR5n72v7qCZ94PWfN",
  "key18": "4cWdU17mVUk6HB17NPkR2zhqZzCN6D859tm1wC34Yb3GVYGwuSKESLSUYHD6RMVyUejp4HSuTw12RpteR7G8nVkc",
  "key19": "2bCzNidoPWbVwLDo2dziAUgHyuNZi6z2bUb5Bqv9TniUV1wgPH7ovGyVcJqHNUpf1q4RvpTnnJfVes5ok1EcuEd2",
  "key20": "CJhhjgrYGfXfJgQLvWBKS7dod59XFKa3iPmFSwS34SMHddGJXhQNoDHT4JbZ6RxUcGCQmErcXSY559jFNdPrR6N",
  "key21": "3sDAHCPT6k1zxw68xtXdg9vALAuuTreBNE5TWHr62XsDabK3YsiPTbtjmJvaRtMfjQB1Hz5tX9f8QwuybHdLPQKn",
  "key22": "28tmsVpLjBhRBT7ziExR4RoywP5nvr1C6LUE7J7FQeqtXTscR6ZWVFBa2ALv3225uYQpojMphFLiuip2JEjj6VXT",
  "key23": "pgXD1gL6cqKGbcJg9EnQtVa5isc86e2wTWD6Y5SYrGSgvoz4SiGGDxkYCNhQUyPpYsTLfJaBRVR1T6tN1aavcv6",
  "key24": "527aqLA2QS526d9uoMKcYjGNn3PkCvkccLXZyP1gmnuHwajQ15qqf5nYzxbeo13nAGtv6KAdArvRpVZyaUuVpCqG",
  "key25": "3gfxY9bBNvtgx7fs4EfbYk1g9ztNKzFPrj4xAA9C2xEchxZUZ2EsMEE5mxUQQh9achu99p6V5swBQY7v8YmCj8MH",
  "key26": "3ngFDJZayyzNiLTtRxgaMop5PjYKCXz8eDicqd39a2Ch8swU4jmk36Aor1koDYnwuSWzMshViTworepA6X1WMH2t",
  "key27": "5vsK4Ewk3bz6DWsxzCNQVdCjJZ4ZZkfx3x5RmtoyLinH6bfY9C6Hi8W7zKrqB4iYYecwF3bS4vzYKffvrC23kikp",
  "key28": "QZjnasKJAZDRjZgKikhtKPcbY4Dx8KK5bsiWfy6M867hpd4cCdUTh7bfwDc1NrWomUSatn7pitDFU8iVCGrEpfr",
  "key29": "5X3SoYCC9mACcfXNogb56BeMg2KRcvKGacRq4krtQnCfC7x6Z1SXCYmUpSJwKSFteVTJGupsyTLNStw8GQT792je",
  "key30": "1e6MFvRGfhW2ChX3Qi5sTSxo6ED577dgv1BnoKpA6NXxaMp1iyj8zP5BbBfwHcD2mau9pcAReT5VhhKCb8khgvF",
  "key31": "V2Zm5N9jubXpjv9zzjsuLaNDkHnYcXsyK2s8DXuJQBm32kFNxZcbdmx8KfTEy5KyWiW82XGG4QV3QvV3U4msHQv",
  "key32": "gEqmJS6ZTKwTRJntaR5rRufFQPPZbSQPpt6wipEDzNiS1vzgM2WJwMuJuuuuYyaeTSzjTxrY9acZykBY4bpKJpb",
  "key33": "5ai9ATbHqJTTd1GSCiiikSa2hHV55mDk1NQa5T2TjRP5TEAJdUg39z2uQSWbWBDzthnFFJPm9z599qosrrKnRfvG",
  "key34": "Qq8TW4699JEMKFTAHXqmU87XE5C1RySLuajwZaqd5D8e2sn4rQVXuMtTpqDw4LeFn2K7gZd8GZzzPKAWvHkA2RD"
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
