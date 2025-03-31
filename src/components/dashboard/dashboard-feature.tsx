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
    "445wSJbTfRnijK1pvwxRYu8uNCKoCHfNBDPUCCWGmmVywcFcL4vyPtS38PE5MVbHym3NbkZZ1HFLBr4E896TBrYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sTyoHnizDgHGgZDyyk8uR8fwsdvvpWsx2Wsn8UrctHYG4DCZCbdsDAAsKj2epy5eTkkjiHsSBbG3tkbwsDQCBKR",
  "key1": "zZdP5YNWpLfVujAdTa3CzBmMfPqVw6jHitHbsNS1JnkMvnw7pZbff43wG3JCEu8BhVdYG3hCUjjSxAW2Lp6UNMA",
  "key2": "4jFSkk2BLFvCus7Nyemxxg3iNaeL9hpLqwCdbNEZYN6ExaBR8JuwYG54KVU2DiLdtuuFL3hbSv3shPutCZiPmiNM",
  "key3": "5Twoh7DvNmeCnJW2Pk96usTDew6KcFjG4e7Wwzwh5sTv3oCiNMvtNL6iZbT4ARDcJEcmWavnN23bhdJJUJkWe1C1",
  "key4": "XtTFwiyEzatcYg5LEzCPUPvbfnjmiCvCLDncm7RPpmcnUL4ThZ817g2mFBX263xzce4MQi5ryzXNP5m3fCAKKas",
  "key5": "4K2wVsYwsdt3QQobsXPvc4hu1r5SJ8f3zePGMGtPRX7euzugbyJsg8Pfmk3f1LaT1WQDBVty2updBqsLwjJdjzky",
  "key6": "geLQR1UQqvNvrwiMptNu8MGr8qzMMXG93nLZyYFoNRQcMZgeVdGtmFrZ62uWEpfsVDQRwx7WJ5cwroNPox42jgv",
  "key7": "2TRfzgKcWnnuBmQkRc4TD2eXWsbKu3fGtUTVAyPsgjU1sLaz3KNRSZMk1ZjHU2tvChke9JMTDy98DjxCxC9xFRkY",
  "key8": "5FRqPoV27KD42JN4E62fhYaRx6P1bFca61yGwhFzWuWYnRtqtkHnm8uM1rpLYNdNq5dR1ymFcpkY1CH8toDWrkaL",
  "key9": "mrpA86w9VA2PJGKLZqYZC4f3HWPHfub3LbLWXYfiyGUjBMrZWcQBmeASbndwgPMbQk7HKbz1dCF9G45TUUcUNvz",
  "key10": "q2qWYpky1cLyKZ3NyAcNX1Z1Eopq6zvbqj4fVEndXEjRt71hZyWxJQynEnQLL8LXphCJFERSm7DSFfWWYQU2WPt",
  "key11": "4bNBn4vUkyjyqMA64fYvarWzaTRQbaMs11nEXQQRLi6xrYh3EQAdG3gmj4KXcvBP1UEWu3UpBdRyTogy9D9g6ubj",
  "key12": "2UkQJ9M8M9WQZZgQvRXH7RWy3NUfQzjiBSqjHtLK2cnUAToZYDERyce3VMykm19chLEX4dSoGYW4rKA4x7wZdn9W",
  "key13": "3DZnSwZHMVzvGiAiFcLTQ1ki3J1yGCd9nTAVeheJ51sLtnfHaQm6LiNHmMay4jeJtNTyked47Eq3WtN82mFff7cH",
  "key14": "TpUDRg5UYo6CKu6U4zS8Wvnyc5coSMkAnvhgHuL3XNHtzoDmNFF8Q54LJgHZfhuXovqVtbxetWf5weCq5DC7R3M",
  "key15": "4UcNJ2zrKQnqtBSbZTYxau4cF2tS84QTMU5V3aQsh7mgEiNx6HSXUUWawi7fD6zCiYEtKV8pYH5N4rxEvhEQ1gMv",
  "key16": "5hzR7bVpD2hGzcbaPMwP3n3oPPNfm5CRtETKxFXfseNg6Arhcj7ToyCAm2WwCVp2xKM4y1LrguYkKX58svspf8RK",
  "key17": "669r9sV2ZYgzFfA82YRxG2UKgnswi6oqMNqK3b5UZf6GRHetdoeyeYW5qbZsxbg1Ck2fMGj71izYmvFDsj3xSTHP",
  "key18": "4CunBK35ouXE4u4ncaaup5btuWLRTtnhrCQuNpDwcDm1EfxudynEB1e1jhrLvRF2p3pbDHg5TPwBfv9gaEp71ZAG",
  "key19": "3WtmcBDSBkbtXeW4yoSMGop8DnTVszbgF6bUMQcEewbDkLxg5S3St4UWUXGxh5CHbedWHiUxa9w7odnutgzmhAg7",
  "key20": "KZP3wP1Z8JyAzJsExFxQtTV2ThoB3UUVL49zTgQEyhSM1pi1acQLEonnNFFi9ehfkSoHiPfpBxgDEV4GbBKCxpA",
  "key21": "4vvfeBt88MFKkiXzqu77KtGtCDCS8XQJbbG2nBe1PdyNt2khbysQnuhmyv97aDzjrmAnYyBf2F286vu1CRoG6Jyb",
  "key22": "9jwj8sPZMBUedFGWENpXfPYTUdTiu5hz3jF6z8puX5k7remiqDPWDAy24NV29WJ23VxgSqnWJ3LeKwJGn2vur3H",
  "key23": "qL6mB6ct5A2RTgPAhYzcnt8ffetTHLFDghmeQzVVKUN2FuXXrEr8trrFVycWKHo3dcszjMZcnF7uGMWfjqjbFZm",
  "key24": "2NFx8q9k4CbQggXAhoPtPSgfxuZMaTQjaM2hcotjZdp2d6oQR8Qw7fPFXiBKv1Go53PZusNJFRGHUvrjDxvUJC7z",
  "key25": "4vhNd71HaVGxVUeMsJEm47axCqExyuHSTsco9TGD65XX9eaqL3oWa1F7PvXcpPy3mpLoMQmn3hUiszsPRGADBZor",
  "key26": "4jMZSTozDyGLEvPp4yQh9URM5fdN5S7BxwmAfZG6jEekp9C5wynHBhN56hfFSq2umhoPbRtQBkwwct7YMkfmqXTv",
  "key27": "37QnMoDVG3LKkVopPB1zAxHdQfcFpZh91G93Mb4PpJEH8cYtEHPLgbhNiLKrc6e3hqMj5jQwxsWpZSqKsuQQRLCJ",
  "key28": "4FtFUxN5Mb7tneyav4CDzBSn7XutfWf69REDuxHfsLeXKGU4Y4YrUy5jERpmiDRujaHBZSLXjTUBk3SKr3m1MZr8",
  "key29": "3xQpa9AXG4JUYLooqYExP16uKjYdcyNnqS1WMwPZYLPXo9BxAC9cLtzLj3jHvjDqwWfNzDEc5W965BC4SHMsBpKY",
  "key30": "3tnPPnsNwZ4yiUP6brLC5V8tTa6kidWyQjaWp4DJk2RhTTiU3Q5Hngc8P5FtcYAFHQJxZU5TwPpugbZutb5EQyRH",
  "key31": "2KBzpy893TpkCRN68FaAyahks7WmqTcjVMAhxwLWg5D8GgwYjrBE8attrPfRJVF1T9rjxX8hk6fVNWeYWtZht8eu",
  "key32": "ZYnyrF7ZeGDS6GhyxR66bCmH1hPwNUv6typJhCYvc5296ZxpJTV42wHCPEktyAmsyj8jQ7oxfnVPJJc6kdN7hkd",
  "key33": "4mJVzkMbb8bJehKPunZbiN3BEgrpGYGtE7uxapKQjwdFMM7J6vxgPWwbe7BZ1jGGPHhcjRYDhXJkN45fg9hVG8kc",
  "key34": "FxP2Nu2MzwFq2yYvv3CyVEDYxxfJ2Loc81frpmFQBtLuyJNqSVHED3vp1ksm6o36tCK2M5smYANiDPerzjeuKKg",
  "key35": "4tdSJy7k1Sxy3haS9tEwgZMvY5rKLD8f1ZCLBBmXY1iiuaQBobXZB6gh9FThgE571SBQ1wsPawzNbLgUXR1cx4xJ",
  "key36": "2xcNa7gkSL9UABcSacauJXkR95Hj3iqF3bw9ZQFk6cCDbJFRTBYJAS2y7ZryoHFqerMbY2uSCh8LrrwxAUQn1UG2",
  "key37": "6LhqdKGQLuVtG2eUdKXyKD3dPL1yvbo1vXbYoXePifZcdmYdpCMD2Ki3JYanQb5MkCMV4vUcuqaLr7KBaFfyGst"
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
