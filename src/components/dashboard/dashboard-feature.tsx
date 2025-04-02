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
    "5RSJ9GyvX83WmH5UeZNRYrfx6VkraiwiULAwasmDtvEaSHKMM2dGn2EUeYhFSg4zVMCNkX62ya3AdGhio1vFUiFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JcDoAjQ3MDZZaKo9K9xLSYC2WBe7hXLxmktB8Ueyy2nkpaFum4qbbmRJf8aGJTqc54jPQytQj5j4bWMCi8vZ2Rx",
  "key1": "4JrCLpdu1bWfz7zsob1i8xKRNihVo4fCttPZA4HD99uwxQMV3tTFHf7n5P1nhRhUxMHhp6XjrtFaoUcDHh77e9Kj",
  "key2": "4E4bbw64kTFn2dUgfYxvmrKbtAtAih9DpJYjMKoHS27qAZoi57hTwrH8bRRbQdFvG5oAFkFdMqjtnSFD1xhvgkwY",
  "key3": "4sRpD8R59Cs2Nz6zf2rCBqsjR9XFFx1229c8mkSwxDoJcmyvZrpfkEmzbotP1UNq5D1Zw78heRFE8f1cGCzqXyZV",
  "key4": "gwECGKVFbWK3GBtCNKR7AwRFvr92q4U83B8QXGmyKsyn9y4qjsA23UQwxgYt75fF27D52mBz5X3VowajZdNNDga",
  "key5": "2RSsNqmRVVDWWPM2xekkDWTV3cDEqD1195SDizSt2Hf38MBPZGXF7pGX7e73sTGeFKghoCJjfEkywABkjNXSyiog",
  "key6": "57GKNy9bgugdrRYHpWZhnnWe14uoSqbQ5renKbsVmHuo6doVuw6Nt7T2D5Ch7RSPJ1Tn5MgtkCus7uyEa7fBPyan",
  "key7": "3gsWZ4vZ7Ad96bn1LQ4QyqmMuvxb8khMjYNJUZusPgWduoPhbS8VXtdgf2BKT4GV8F6vev3Z8v4VxrYuiKFQz9ze",
  "key8": "4ecENegPU57KNPh7iAB147xybksAtnxaRCzirGZCe7xyepESdnKo5GoZs7jBW2SQLtRW24WuknDMcYypS8bqj6LZ",
  "key9": "3PcNLFdv1GFscnKCFtR1vjAUJiW1yYjGcKFDBj3itbmNTwj2xMy93ffzDwyHf2bm9ntDEZAKwRYeD72TQSbSuKmu",
  "key10": "3rpGz6NJkgfV6ny6n6HX3bGpkWeLq2Ms4hbnv6hzJ1Z2p76xyWNpYWYwBveogzVx7Lqe7PuXjDayQvygPh5b4UAx",
  "key11": "3cne6tYs28uQvFfie56ntDFad1HsqC1zUeuhRspLFPncrbwYtPaWbv4SrzudikR7rrnsvLzaCQEq83qoH9JrKaoP",
  "key12": "52oEBeGw1WadGqeDYmWPn4z7yyK6wGqh33bzoedjWJNvisPACTbJN5hxjQnXfJpUBy8WSG55ShefM6CnzbzkWf19",
  "key13": "4WBrbKDy35H2FTTMoixtwMEU7HQXa9Ag2dZnrr44tufYrL83HUfct9NANP7o9iyQ9kCbwGLK8Q1qqghkZ6NcSkx9",
  "key14": "27pXrszfzqcPdJeTWgQzkpmP8cqFthD7xpuyrkFCCw1K9KwjTbbhVtgvP6srSJiu7zCnLia5ooam17ipjAXhyXTW",
  "key15": "4qbNpDUw15DAByCRUkw1B75Lx1w2Bt37zQtMQ2gcKfx6VUEx2ZHx7RQzKxWqitQ3bD6F5ci1wuZc2KLt4kgf8Xe8",
  "key16": "2CbHCTYHzPic9M4LzAec18tNeq7ubpm7noj1yGGrMomXgKsw3kXnLZkSepuctwchkWSEhM6aW69uvu2YTmLtsECW",
  "key17": "3hbnXBYtuXHHs5d7ycpirtb7gpnHgW8fvRhPEyuKkBiUJwvAthoj3w1BeLLZ5TE5VK5NtH2JNyadau7qJpHM67r8",
  "key18": "5aKJC9zmiZSsEkAdWjCjZVd9qhDy9PERG5Ke6AEc9pHgajTdJ5MPa2KFj3mcHD9vKwfHxUackkbbMPZoNnuw36TX",
  "key19": "3c1ddLP93URHavouXH42BNRTJsaKWcUD6gsYN9VLHb8TWZxJxzNSz73w2RDQncNzh7q5RhSbqkguKtWh5q3UwNdn",
  "key20": "5iiNKewumdAiDxuTrf8vfP7Y2GqTEtuw4GBdWmHhyFB9Q5eRv2sDhU3Gdse5TqQUMrAssSGyHrb3H5tGPXTpDCZC",
  "key21": "CzfmGXq5dky8mUUu3DHboTJRgvKieGJan8uofaqLmC81jeNRXRJAUJtW1w5mbKorMMvFiungoHVoAR1Cfzt1xcY",
  "key22": "29MqYZfEuYVk5xBk2GRM6uJ35ywHYMiwqbtQmHW13jG1LuDotrCQsFNRfwkdCXDou8abxErKCHWhEmAgorFuPTLa",
  "key23": "4bjhPpuaBifxGWTcTZbbYeofUtzZrYmU14a1fT8g4gR1TH2rJVPKkxcWHhtBerqmb2VtUeS78bsgxpCTE6HpRbvq",
  "key24": "2oN6piV4Gx3v2NxG3QbetHxoS6EwLqJCCwtbSNrBcAdENABgkGYh68kGNzdBRDYVUACjedKAGmnEt7fampzFKWkw",
  "key25": "38NUdSfzpDY51g3aNx9aWJBsUapfPXicsVGcgLU95faF4dQZddLcKG6dPjCg3rPykEysk6RHdsUjD5QjASkRtE1C",
  "key26": "2UjRe7VPtPvE3r8nHoAt5Vgs1i7padpGTLztxVkhmWi3RDi5v23Kyo7wQJMHLyZz5EPREKXvp2EC5pd3pqq8wWeY",
  "key27": "r2PgvhzfxT3iPKeZqokwpGY11RWgd3t9TRKP3XY51aADQgLH6c3k8qwaMyqyxJ46yL1kshck84nRsmhroUcHzJb",
  "key28": "4hBrbTtVYANRAAt744H7gVvBQAGiTPAw1ywQWm8n73yUaw4DVec5ogUYfTUtRJ7csrREvgL1Eoyyw4x56AZCaVx9",
  "key29": "4RxJxYx1mGZF9MjNSB29v8UzJtMMkyEXTmWFM7Lms8EMrQBVcDNgxWqcpc7JPKK2GBDhUdpE3Cp3AyUu85TTKJ1b",
  "key30": "3fD2qi6YPjJoRpuErW4pxddTywQJfPBvGkVoxLxCEKUmUKyBMZWESF9RByUrGaUuqMhEPLK92r8dw3ydLzuBMJ7C",
  "key31": "4w3ivwccT8Kgozu8u7nqiJMrYA2X6EKPegrn24jSZryZZnLLzK7gNT7vfBddkyY3ysWSsoXNGEkMBwBEJdaCYdk5",
  "key32": "3egwSpYMi3uKaPce5QSqTpmP36ALXVZAWTfpawnXmexmu6sry1Pm9y6jsRM5vhtKAdWemr7PNbRsgu85gLMZSHdZ",
  "key33": "58c2SaUWGbLMovVPSTgLjgiTT6LRRpMawTxTh8TZhRA6R681SAko9XrwnfDrwJmptgaep78AnadSEUUqfJzM9yFZ",
  "key34": "2rtBva9C8EZhDWvY3BGZFXnw7pfUpdd8jMjU5StTHvpi3h9jSEyXQ4Ywb7Y8o57ELE7ZPDqfyyUsxbttFrFanemS",
  "key35": "2VAi878Yv64U7X1LZk4CankyVLHQNVbr98j3Gns4uYGSqTQMJKuJwmcuCz89fN3sFnb3jV6GMZmSwKHa6C1GN3Bx",
  "key36": "5BpBgASRR5NdzXwF7G6VBjCZZRp5wJ9Uf9Y9k69KEnsxxrdSvQRHzYekyq21RBzTaJvAVPgg1Drc6ekehJWu9kUa",
  "key37": "5VAzvQzq2ybB5dHkVdVWj2BBaKPW5DUPft8m8FQsa8aP1WFgFNS6owtupwB4M95ke1YFS7eBCZ2qeycDeBUF2c3C",
  "key38": "5fcUG9ax1dZxQYkHsoFbLQQQkoCkUawsspB8NamZ1dtHGN5M8w7E8tN2MPHoh9PxgRFgXCFFWLEgPPZahvH3fHsJ",
  "key39": "2LXaX1cdkQwdmawmmJbwGRHqxeeLGipvdy45XdsWyDL9K3Wvvw3WMTnk8M5tH8RnMxKYbUzeqHkvUPvtBbCn1c1J",
  "key40": "3e9cEejYRoUGgnmpVcXUjqbjMDUTwGgUoa4aBV3wih9nz99vPW9J38gysvBDKrvVBAPRNR1m4LsXNU7wvm3HMuei",
  "key41": "1vQqaK1mrj1qCxGVTtZdW1cb5wh7tHin5Y5FQuBB71S2nUgWcDjrDUdNf2XntUqRc1JxAqGmvrqu1465XAeVdr9",
  "key42": "2tek2wMXHJC2xSu8X9XyBbRyZ8qN4GtZzjuBcjxs9d6PdDB3En8Qa4e9rD5rjVvTNXWAZC8c91oms6m8R4eu4jfG",
  "key43": "2p9EHEzbdzNVZFGdFAdLxvW8T8RcbZDxp7h2cLjP9kzAjqxdC3AJ8p5rk5NC5jNmwezmXAsvPnqvEMWViH3UB8KA",
  "key44": "22vkGWTKDtt3fqMn6T1nkazU1NN2Sza76Z1GbxH4JpAXtDWwXyKa6iQJp7DzL7kczAaSuxTUjmmwXznZbkibjjqF",
  "key45": "3thaqXzQN2vwABrF8L5a2MT6g91TTcwtMekTaoxUALQxEocvV3kqKLfSwCWAAW9ovXwzNKHtAh4if8m3yWxn3QRD"
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
