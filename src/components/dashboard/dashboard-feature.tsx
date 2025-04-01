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
    "5SFPMgwQZ22ehrH7xQ6LmNpfyNeJKSmqS7YUoaeE5CqZXkdv4oE1AMxxwkub81HNdkbtdb7Aahq3z85mu1sLzv6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kuea8hSfFHMYr54DRMe1EUUhdaptCTw9ezyR8mX9SfFcne1rVSwrEY2EE4M4bYozmYVerwXeoHsfwXMxHcTXB2f",
  "key1": "35PtyoHEPdcEzXgN6inWZto3eLSA66oppkyx5NVrurt8guQX2CS6JmBhRzRqy1wszvFoHv82rsTQVakzeVGZxBAy",
  "key2": "2ucPwH1p4yS1owfUnt7LR1h4heKcRkiFXs6rEhquSZHTfUHT5pGyMywph5GuNWAwL15ZFy6jZR4fFasXA338zAUF",
  "key3": "5pZWba7Tu2rALQ7aCdcScRp1FqdNGkWjERSdvT43pTPFkw8x56GsSdseNPt36JicXX1Y6W2F1M2ucyLqTDLg8DRM",
  "key4": "2Wy7YZiUCqoZEdfZWvrTx3EJPv9PVJArECRNcC3xSJtZ1zFp4EPrnigQGeR8qdgcagJCtGjENQS8TKciiy6KnGf4",
  "key5": "3Qk5SL5MMekG8neK7qMy9YVDrWELnDTCGizqsWF7prELbGa49rASwgnd9CUko8d1L6xswKoVDTncvUTetbvhrYsH",
  "key6": "3hrGcW6UHP5Mixip2vaLiddgCrgif2WfnhPmjgBzaWcawoi9d1syFLeifkETxBkyiqJ2VMfEFaU5LpNMdKKxwpAP",
  "key7": "2kAyF5T2TVtHjsfciLgmfMyxhi5GDZKxC3kfZbaCTw5zGtgXUDDy8UpS4WL1kUm7C8DGuEKjcnsuPbW96Ro2vVSK",
  "key8": "3AMy6A4Q3c6sJkHbmaDkE1V2NwFJwZLLxRUv1kmUFVsoUC2i44xU2yggD68JqmTQ6yPi3GvRngZNu7e8SiX9Hosb",
  "key9": "2eyvuwnLuyudzJGymcGc9SMvCdjaoCFyc7tyy5vU7zCMw3ULsk48YCnKPBo4YjrGZ5zhfwt5uVG81yCCFKqg2BEZ",
  "key10": "35dRbhxbs636jKnbrKE5q1hTJQg7XPgnkz1ni44rvpEVqyvqCEGDPXBfeKiTKv6PHFGzFAEjA4Scy7yi9scCFDAs",
  "key11": "3xfftU1QBZ9txshvNMr5pqsw8faGk5umoscwjTCkfjGJUpzkt4eaGcG93Uhe9zKBM5D2xeMcQwkm4DNyu7pqi7tN",
  "key12": "439v7sq8CcHQbbQmqK1JGhkWy92RtJmghp9Y7sbYoF4zBxAqYgDn5Z1V4yHU24eSNMtS7Fc27DfVzQ3MJmAje4AT",
  "key13": "5q1fMBPBCHVvLtNHu6ArzuqPoz7H4tzreASP3teKkFKexvYbpV2CKsZfPX1wkfMSiMJVp6DczqeKGqdXGjdMLpuu",
  "key14": "HB7q4zkkb5Sqhx7rHLHjF57fTSJRpMo6wobgx6Y7ADyAJXUHqiJu9d7fiBCa9wx3yFB6Xb1A1Azcy4K5w1CZj3R",
  "key15": "53ZeZdVdcTjLpUc2uYQLyFgJRHcveQr45PP4gR8JxiarSu1Ffxi98WgBGGn6XZbwc2eXJ6jitfcEeBCgPucjD294",
  "key16": "4yoZi7wSrFjg5UVwXhzLjNT5zgKp1obiJMr3N87JwWkyoJ2zxXAE7kx3FTzzRku1X7wGVMiXL5SFonreuq5uK4QC",
  "key17": "5yamXSomVet3o6bsnS9pFoJjiQasza52f3k3opj94X9aHNcopsLQqEbEKzdLsK4a1BgtALzWz4heNHbmG62NmT2b",
  "key18": "5feYCAFNkRmeyKLB3zgwH58L1wYoVnSRxMmeDAYpaNwBRhBxEUQercfYQ6eSjpJNBH7ZCtzkGPAifif47yR3osmK",
  "key19": "9aY7XToKcVdvZYgMr9kJL1o41sJ4tjV8U4tkNRT78tF6wnvkKLwDXxeWKXSsq6BM53f6HyTuy6g3MKvN2PgF4he",
  "key20": "2PKeU4QoJXfDW91Lc9rCbKhSahA4qHuecZPMrFf1Rgf1AXfS1xukPqMumPZ9ApeqeFo155W5D2NQrB7xDKYaXhVC",
  "key21": "3wwHjwqnWUq7yAi187xEH6YyLdFEAUBHAqTQdQ79bzisniJb94ZEnz2dhXgJi8QgzBnVxgnf9Pev6U8t18oA5X2H",
  "key22": "5rMcRC836JHc3up7EC2zKp7xzQnWNaNhQp4FXhoXNkKCRsgTwtGG9NsW3whFKoeWpRmfFCkdtGHDyNb3HBCJk8Md",
  "key23": "6KgBBuBrXB28sPkFooiUBcRqsjW7FpjcSpr7pHFYgZk91YEPxgzzW32S6H9kmBuHcVHtmfcRhS28EEevodrrvJ1",
  "key24": "5S9oxYwP9tQ6ceue6a2bEvuhJ1kZXSPJit61UJzg2wjeX22DiCHYM4cSKMxAFutittxncfJqoLKFGhW2sL2XYpdh",
  "key25": "3wTcot5yyCDWZ8Rw8wogjdMdgngDEa8J2NnMrFudpUKHQfx3BWaMhUTm9KxHKFe4vVLEmk6T6BPwF8VZxKKJwQbW",
  "key26": "4aixwCRjq1WPM26Lq4QVKzcsi89ZqQX5bodsniYrPv94KQMZcZAdzwNppr3ATknJSnTi8LWRPVaBN2RLtDZ4nkzM",
  "key27": "51TJP7E9PEGXLZY6yzpPoGhxLXbuXmm97U6RSwZNVkDBrcmJsmtgTdUcr8CHzvdo5HuFjW5yMiiXXrPaipE28MTt",
  "key28": "5EmtJy687gwXYZWQsdmexpaUwUfPJnY5B8YEbUSmHg2ePrgzk3AAAQhYjKPu5ifwh2Eq8P94EXJa4uym2CbHEJdZ",
  "key29": "2ixk8JXFNg1v56vPGX9j8iDGMpaMYn6K2PLZQTYdUd2Wk9g81CVzmdB3syNZ7E8UUdVTfuYohwKDsf6nsoxA7zhy",
  "key30": "3hKRGwANsG6QNsMsX4fgkmMG3WvvDxaUaFFvGfZH1iR4biS2MYmdhtgq5iy6QrcQXHJcf4zHuZeTyyJhSKW6aCJm",
  "key31": "5poiRfUFsuLSuic7wCWJP3JDFLEev1eZPJsYecJVtZj1Ap8VMN7GwJeLfZLmCM7w8ndKrjdcFyfxjpD2Aar4HLmN",
  "key32": "hYj4bCNwVVaQUnJLBYr2jFpMLAEaSzErMi8Ks8xvoCp6N2P39BqG9SZDrW89npwhWeW2kqkNfqJhai94TFmwqGe",
  "key33": "3SKfLtFZfgRVnwbstmriBqD5eRFCtmyLCXn8oReV4xdY5iV6Crf1QwB65qqtjcQaWko9k4AuVmEg9xHhzXZnxHRD",
  "key34": "5kovrUZm26hETRK1zA1YpBjQZiLri2wctRob7r6ayFubXAFdMSgotM9hyacch3UqgWWRknHjxwPSTeJqiRo4G714"
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
