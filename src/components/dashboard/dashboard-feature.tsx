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
    "3h4EXynw64E3uHmXMcDWiAxWgwxSx8vAxE19WiNyUaeT6tj17xTCB8RcdSr5qkGDNPrPA8BooWffZSugdMcaj5dK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nDYKHVM8Q8UR8Z7CSAC6o2qRT3yWt8iKV9A7DerfVqVCTD5tzVrXAxqNxYwqAEHB6h5cJ7QByshf53CZjgHXeeG",
  "key1": "4tnBN4FAMLsBtjLwFZbWcb7pSqvMLpSr4UHK3XSLymBUPqGurShPPrHKHc7ns8u5TjhjdSfcmf2T3wvR8bbZ4UiY",
  "key2": "31J6HFn8qd2xCkDnLjMfmiPV5mTyPunqDfAsGSkK9KRfB99L51VhY5SrsoPx6UM2Hyb6bnwi3C1KcafeDh1f5EQr",
  "key3": "2doJWM7S1kk9T1Dj5TGX4eFUjmXJtyMpjEvnNRWQjhHjsasnqgvVSDMCRgq7ufTrzF4YdLCm1n1K555rwr7GBixb",
  "key4": "33wbWjBDomZ6fH2EV9f1p6cJJaN81tcAkV2t5avmLPKkgsid6qnmzkBqAugYATddBPbXevgtpsnBr5Vv1xTkTkbM",
  "key5": "2jSWwDVdYTbixWDmJwFN5DBTCtHM9A714dsKwkzQTaLrGtyfyfQ5w458ahWezWAjXVvgib52XHcHwzeXkSpF3FPP",
  "key6": "2psrkJaAvLDkGMYnD6ZTefDXUxKdb3b1Y7w2ZMBEkmKBNr3kkqhyUtaamZTMTkpJWZSEnTapde22YeXY2onco5kF",
  "key7": "5JVLXoeNNLq8Nn57ZkEbWRk7QHDb7BZg2s5kUYDW7Wam7GxvJnuz39xgmURg2ySq3tJKPHy9rN8fcNtETUFgkDYy",
  "key8": "3dW8dQcwptZak2AxVWckQZp6dXotF4rxa6CRhGK5VKp68rFu6wDBAYdFVQVHH4crRika8xaTWR1a3eYx1pmnuqcp",
  "key9": "5dkvL9EVMksvHHHxSoRW98AF8kGXPmicmqjMCk476r1P5fYKLZsroD5dA4HQa9cvx8vrNtE5SEXFMeuBsm1fdAXN",
  "key10": "386BjWXrawdttqCZE61TK9HmErqdowGfFVgLu1LRDh3zG9pSkpAVy8MwzAsMMqznYsdWEQSZsgh96Jxj2XwKdHMn",
  "key11": "V6gxz3u5d849MRj6q8SZQs7keaeseBryRhD85LSoj8fZBstNK94boLNG7fHopG4N1fPY5FqDAxR4ddmRkaKojEC",
  "key12": "5RRwLaoZM8rg3TAZXNFxB4YtSUyquMyU1vA7twCN29u55ruBz4BKydavrC9fTKnHJsN4AR8ZFuXyZAxAEjoUP3rM",
  "key13": "5q3nTj2NmcNUaumr1FKQbGS3MbUKBobgqv4P54JvVWDz9vyYZbidg6waQHDu7TpfQ91fGDuDMUokzamr3VnhhHZ1",
  "key14": "4RYAc55VGy5P9r1t3TEBqR7ZSnELn4wPJwkUScPS7vvGvnxrF6xpHktNJbU5W2sbw4kmkJsoVMuyoiUfnwtttVjU",
  "key15": "3K6VJehvpCFziC61Wi1Eq6qkV8zfi2gKr9GW8zXVDwHKeRKNRumvRecaqoRnqHZsM8yecy11ypLFmXYp1uTuUSqi",
  "key16": "4ri9EqQHVPwWmaBZFhh6daYzQfc52LM9Ysg39CeRhZFMfuwfQGQfXjdmSSfTyxgBxMiBK6n9TmF9YDJKi6VCNzyL",
  "key17": "3sJTrb6VGjNnKwBe5GdVjwJhT8UFQVXL8m39jCttTG7TAr26DKh4FKTqvGqbbbd7Xcm5o9rybfcEQc1RgBpTt4fU",
  "key18": "4nHaLRfeb1f1x6tyHnjSjCanY97PpKKg7c5dyA2B7UDgZj5ENbVxBmfDz3FDi9hZAhtZKUBPj625EptpD3wUajqz",
  "key19": "61ERCuNMkMcZb45MA4CzcUmU8fsytNKR2sRDCXdfbqujXGwhuMFQ7SxHyAPHJ3iDmH9Uz6tSHhPZxbLh6siXYGvd",
  "key20": "EqGttgzgez9ghsRm3okaky21wnwonGCFxCLhCKotqXFkMSFXdUmF2prfwfk4ujsC5MrFiqXmYaEaN9FGEZcrczn",
  "key21": "a69RoM9VrpCfUmJXzLrNrHakdNVDvEnRyG3U5hRum14yMCgNLBsA7BcDVxemaGG92FYjVDWiFrAjhNaz1MTR4R6",
  "key22": "67UW68eyv42e1KyZND3wRPZnz86KEF49gWQ3868HCnATKQsmX11e2kRJ5wt9YSm9rv86fpBKD2D1Q3Btz73aX93J",
  "key23": "2mdQvdcdaMWP8gcUoSxMtpiaFn9UdybFo3e3VxKXiMsG4eCFWp4BNXnNMnPi8R2v9kd68wdWNWMrFUQpPmXTwxxS",
  "key24": "2MX4NLu7ywpkgwNAWirfgrPwdzSwkC2xKr1hsqdLaWRyfy1PxKZpEtRHqLYFmvA1PnrZh4FDfu25wvhCFfYY7Jdo",
  "key25": "4zrK9KoUAjhME125d8Xas53JuQ8Rjk872araJ72p36ipghNbTppbYmxwvr6PFvVF9CLYSm1mZVUE4rBxF3SEjoRU",
  "key26": "nRD4iRds6C4avVRyWi8J5aURqAxW2QRgWmcr6Pb2gAuYf6Qu4zxAp85UqPKgop6FoSvYD1nFGT6n27SKsFxkFtx",
  "key27": "4UmjXrVY1JwmhVA6RhsbwYh6MxoyjTPZcFKo2b8eAPFhgHX6eNVV8Kpno3wKYgQUYS639gR92mtzfEjce8n1axkF",
  "key28": "46auyGjGAhd9Puiww1iq62ibANY6taeKuyggFcsShKbu3inZ9Z9JTnzCQL25gffhKSuDF85mSHqcYRtXuLLAbY2A",
  "key29": "4fKc9MrVDT84ptSzbxZ2qKYaLzueRUaoGCR6YrGyzSNLZpHK3cZs9ZYPovNk1hHavBmLyWjBoCdGiuW1SQwqQPYK",
  "key30": "3B3NaJvoy3yDnZEhiC8eavpGNGj4JVmrxEyBb37JbriB8KqLnQWZ7iaddQAf6YcjmKtgvXyXqTVs89APxVob3P1S",
  "key31": "4EHV31N4a9pNYvwBNiy4nZMuyLQvfWgb4MN7hCiwsUrpGJovsEbf8BSyQW5kXut8HZvVSz78REPPddm3EThYsniE",
  "key32": "xa7VyVWnuhWui6m6mmzeqFsm6htLuZfArYrZjcRUP4VVyY9i6DddDQEN1tsqKhnwkKMiAtcKLLs7dBXPy2WMgrp",
  "key33": "4pHR3VdWrr51K2qd16fjfNuske7hpnBEANbevRtSsPCYe9ALUQknJkwpRKtL69GKfrSEKVHavjD3MgHyJaEKp9Kx",
  "key34": "4RecQXPUKDj1cFzHZJgBQQcivqzvT6r4ETWUJ2UjPYSwxbAZ329UAqLmDJdZAPirJAnndyfw91Hr8xN5VYmv5uE4",
  "key35": "37W7HLUUDB6AHp1U3FqBPYxHq1hAH8yhSNdQRsV1bYjdFzyGR8VK6MEszGp6KQ89Px8k1qbViiMzfwnp2DpqgQjS",
  "key36": "21TLga4MERKrCKRVEzjWKixenX1p4enBJPHkKb8m52Yg5krJAXPx1KBoHNK2oGkitujeDkUXTyYaSNjYGsU2CJ9A",
  "key37": "47LXR8oCrftjfdRzNTYj2kwrBmZap2Q4PLji89KxM6Hf4bo7F3YcPBDcGSxMWSFG3JwHyQe4q8TPeyPQfjT2bxux",
  "key38": "4ArHs4oVsDGypacW1Phm2PUmTS8vTtXypmKmi3aAPKZANr1USaHHdWEcPW4FHpUTU9giiRokXgudPFU6ejxnrsB9",
  "key39": "5AMs4EihfkQ1GkGXhyJm1aKEKusMK94HqnW89hr6ZWXm1ow8iNdLH29Y3SwF1E12fUnBzU6wiBsUJiBu2dEKf2K5",
  "key40": "eLRYB47cssor9z8xX9BEejrvL888avmKsoji3Uwm3oMeSMNen1N9zzH6zfDr9esevVPv8NShrjrBgZXmZgY8xSw"
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
