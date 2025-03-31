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
    "65S1YWs2y9fifPYCr868XGoR7tK1BTCnUFdUFECLWzxm6kyoCkJHarNK1FGVst4T2SwhLBvJ2G1x7XvHLPMtEfR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63wXemPx5qPJr7X62ep57cJNYBZDimJaKDnoxssK3E9PZRHuXQBXHmTNqTMTLga3oqMGpKmLR4ZPYBEDh1GDihL5",
  "key1": "4GMTMwxro4hxvTxfXZuwpXVvkjUo3fZ3uwpB2kHxKv7jFrupeSATCY64XoBiHhJKbo29K7ZwPJqKgepAkMGq5VkB",
  "key2": "5WUyUBquQ8ytPfXsKfF4AvwN1fZYKFveSqcuVe7zpCGmfvGuK9qxki7sdyEcnLRgUg6nXRTixegkvPt7CCeS3Tg7",
  "key3": "4gzsTiepZobziQqi4grUGwWVEGVhhKyg6c9rFy2g8UGrJKMqQ9oNr5QCgWgLb2PZFd7mnRMgy5272BUXwpc8qKu8",
  "key4": "4rQVh6nRZ4FCahoeujju2aLcDpWSvpaGccUGT6wZjgD83CRm2vqrrFRp3M1QtsVk38ijqa7VKzRu6YPptv3beNh9",
  "key5": "3gBoWKtuzweg73LhE3HNRScSrmVfr8rSmfr4FDiV3Ch66MmFTG7eQ4Dqb7U5z5tFsoZBdkTVkXLGyGzMF7P6orkP",
  "key6": "4Qgkhox3ehuuYDfmBY5z1E9ZW5XDgRVaomxLS4eGCYv8cwn9BqSv2k1hBF3YBKabqa6Sm6yvZYjugSWjUcujH3mA",
  "key7": "2sqg8iY4fzkXseLiBvF9bAo6qEsuFaRknzJnzD4mswT7tk8B5T6W7pVUUacESKzF5Tuiz1whinT9es8SwDPAiweo",
  "key8": "3oo4dHhAkbUPmn5wSu84ChJpgHrp7H3ojQafNfezWGpP84rqUqauzv4zxr89NvUqr7Aog3iohdsy7ue8Z2cZaFJz",
  "key9": "3WB43CwWe5vVFcQq3czjTk4k6a45h4SoiUiB1VBcnYWxUj5xbHm7aJSvXwuBcS9orVdzuaY8V8zdr9RtZ6R82ABe",
  "key10": "5j5Y8MNznAaq3YqPMjuzHLAHXPKMLkv7zVw3V3CnjYWeuFapgevyNDNd9rx3CgctZya1R9TtqGewHav4x2jCrFRh",
  "key11": "4XqZSJTu3sTTc55EXSCJXExPbZYNbMo7A8t25FTvekoNxMfDC9gx2AsrumLd3ZNNJhX3tfyjYwsRNMgu6dFLrnb",
  "key12": "5pHYfNfjtZf4h8EMTC2avcEVaaQoVsur6Sr64JpC7gUGkPivbfvEwSpBSmfh2xRYPFTYqh1Nuy8CifjJe3coVeVk",
  "key13": "2SU7JKwvXPfZAwkGTpgxbZv7aDE6ZkfsyCRd6GLT9VEH8AEvypsvCD7BqxmuEM3xPJnN1xuzJSbonhpbGctHvtqj",
  "key14": "GWHNcZsouq7p5zk9mH19hDKrCRuqsC8eQ6kDKpigrFfXUyvpPYecTrSaNGqQhq3v8qJm7m2kpKjAN9yYs4TgEGz",
  "key15": "2HjzGQWLtf5JCJyApJBYh4SmWg9ndQFgWkkoyraKXLy8iuRnLjgj37gnBCtxvPVMzEbpuYuzsRtHKEwLZ5UKtpR",
  "key16": "4ApUyQ9qsp2xWecWU89JUp8tAfh4p8ZyHG3cV5UdbMhYXcYP32AdxkuLuBH6pKtsDYRzjhVn9bvJGkxz8DfChZAn",
  "key17": "ygyrpPqF8CM6sKLEtF2Cmun5vVaYZVVyUuRp5vv8uxNP1QT5yoFqszpbsC56H8RMmwPTPsN9ngx9w36CHxHcr9u",
  "key18": "HEyiw9G2hyGGLRrzwFFXzgnrjUB9Ygi4EixsGk92wBavreqqYJEZSLpPXQFvdU1mwTJs8woneijynexupoK7f6u",
  "key19": "2RgYbpRDsNeBF4cqpfuLTg28rjmxRuSKFka5yBtqcPxpNoK3CraUv1K8WoNGr3JWC4ynQ3y1gNzCK9FgD84TbTq2",
  "key20": "33gtT1mW6TohFTmeDDCS8QeALx8t1tgbcG7UH2RmTePJLNmujLf5vXEVNnJvJJgL8NDB82ao1ABL5NW8qLnCATFc",
  "key21": "azWoFwf1jWrpaMyGpE85UK1FZWzhWsvgkf7vGh3DksUR8fph3yXeBceJdxvw1QTxfDYCozavwt8wtJh6rQqMV8p",
  "key22": "uiiNjxYZF9LeWMZDeVDi3vsE3bfha3qVdpprAmq8U9NGRciZH2UhBYjKqqyCboNjc3KLg2DB2Qq353rKFjEwm4J",
  "key23": "oJuN74cMFVBRgjpL67wwc7J9AcoTyiqSNJFZxEVAnabd8qxdGRCMKGEKjUG94Jj3cjtTKkBjsKqqFsdNMD6XcVC",
  "key24": "DMEtb9jW8rKrGjYNUMV9HUvi6QUdqVQdudcjrMK3619ftHQ8RZ7psMDs4UsWAaG6pdwEtaPu7EtH4kTDQ1nrvSG",
  "key25": "sy5pTe9u8zTzdeLTp8r14ogHWRFhrkh3jii6Z1iQFMhBaACveU2qAKSsV2dgUWYGvcB6M3DSV97DBw67poRpjpM",
  "key26": "2BE49PWwhpkqdu5U9C9rx8rU4ACmEzXSb8K6jLNZqkS68C2hDnt3UNxPj41kAojDuMH1Rnc2ir7JbtvKqsthGNCq",
  "key27": "4gmyBYkqvNXd7bKAZ4vc9x6SnUr2N73GibhSWJJkSywrbvD3MLcNA7dVakmNA8j9xyemCPhjcA3wsovWtWmBPfTE",
  "key28": "1N7TkeNKC1nFvo1VpcodG9g6xkZUhPiMUwownf1xgGfsuMGGb2WLKYKRYDmoNninUTnBRpf57tVpXS4XzVZZp2k",
  "key29": "JKq3j17Aawka2Bmf2Uf5kAyUVh4LJid4DhPdrq9ypnvm2ubfbPUvS8VqhFRo7Wn5MP6CtnLyk9w9z25shLYFbDR",
  "key30": "25KtHYYmu7HfHV5htKJ2ypgagd3w9LpYZqcb2SqrrR2oykcvUM6aV6kr4hcaJqLf59TWEZG2WJZSpt3fdWttBUsb",
  "key31": "4VVTJWgxs9VXaBAq2eRYbUdfNWoDR9jdxqZt3xN7SzUff5YuCX74eApY55BfxEZsmiwToDT6Jk578P3WFeNCEWf5",
  "key32": "3rMJ9HtNZ5jT1WKRFCQ6ubsJQiZZa4YhuocrcUYbpJ2CjiRineFRzrujAjVz34JD4Fxj3fL37E5DYGGaPDq583Dn",
  "key33": "3y1dkTwiUBgd8yh5puaoeQ4mEA4qijatt2Sb7uryLBrMGjxCHtkgFJ8KvkhpYh6veFQef5BVhxnBeexdmQaHX1B4",
  "key34": "2FjaNKeu3nSrYVC1pEFW9tcLhkpa3CP7nnNtwaoPFDMo9XCGqozwSSerYVSfeELtTkTLvrk3vBfacqxwq7Z52aXW",
  "key35": "2yq6isdkM1n28SmGPtwn8HyuqQ2zVDSEsLK1qsGpeLgPSGgGNXie6h6cEF4GAbFFdRH8eguWxTrcQXcMrbX6mgTP",
  "key36": "5qHdpgq76aveqWXVugsj28LG5CssAeVgeiHyrmb5dMaAJXV3XB8GRtmfyGFE7EguYeLE9Kk37U3KEe731kz1UWxo",
  "key37": "62WK6vsRWsCg5RfS3Skyptndt5ovWZwJ5aFMPxvGua459kcgwPqW1v2D1ZSMGHJ1BVKSmjFEYoa2kvoxJWzn5K6k",
  "key38": "5k5LPBYeuxqeR3xsaPnidT7qDSqfZPimLsM8668xLuCkfCBXC3zpNgJGoakk5Gf8HJ2sehtpqZGwA56nsPDA91Qb",
  "key39": "3YgGbjdb1UhsCtHXM5igoexqWs4Qcsfnn4a8hHo3SHdKaTFThTJooH4jzmCa5QP9ng9j5Y1Pk8Ex61rdTNmVGfk6",
  "key40": "tNnXj1RrzRNsFaKZeVVVUjCtTydhd5mTHW9KeXWxVvVCgWvAcFQPqVM7rVzE7fugTC6QHkrZU4dxrJNziHj46y6"
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
