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
    "5UaV5s6kXS9f55kYmzV4pLQCYPcgQpAX6Gq8tcVNbXnZzvbJgDXyYsnuSz1g2zVojMBdbXy1LF5i145qgKeyWtFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XEda4Wr7XynhMMr6LW4Mpq8TfHKyes2PkAPZ5vRp9rPf2Yo9q5YGzwzA2UkAzUP97p4QaFk6ukX2PoPxepN6PUY",
  "key1": "4JBqAR1zHgQHmtvkbFdj1gRFQgj4bgiwhjRsrae3yJdJodnR2WdiPPHHvJi7XMwudhDjJaJ56uhNgaR6ERdzWpoe",
  "key2": "5aUAfTBskufazyhYEdS2bvyQNSekAuVf7rWXsSkLLrhNrkjbGfSMSSeeCTWhHZhSMYTMNJ7cwd7kqbJNDRqFhhrs",
  "key3": "2fggzicsfj8PaMSWonSJJ3DAmWnkCeNjcXoX2RWgq4CK8wzWMhdDDXLCPxCo4ZXAstXyMrv3aeUfuTSX8AhuYeX3",
  "key4": "41xbcf5js5Lwq58Q38Ztm2HLmsFQafmgg5KNw9sxApTbUcuNuTqQLWd1kHoDRAbQ8Ws3N98vX21LKfD1GML2YUCW",
  "key5": "uWk7fjJQAdF7XHYZu1yANEVyzNjGw5HszNSgiMcLiWCFGjEb7TXztc1m8PqNqr68Y5pTMueyAdsiYDw2AJ5cSs5",
  "key6": "58stG4MK5C5JwMyakh9RbL3d4Mh4hD7hZjrXwZSZ46BA3Sz46asJGGmkA7yuPfbCsSRZTeEZNd6kGtBDWAoi53aa",
  "key7": "3XcUstxu9z6JWr8WBZFQC9c8tpsEKrNRE4pxyY6C87JQDLKTfDkirrYSUdFbzv3M9QW6EoyqMtSbXp5ERdFu6iVY",
  "key8": "5e8Z5tG7EiFN8xp4igEHG748k3dTpLALtpBpRskD2dzhahqBR8M1PTV72DrdacUfQKMCDJz7uk9TXycsmbanXKag",
  "key9": "4jfntepUYMtnUpNHbJoNkgxSQEy9aV4DrqDLHMVvpUMY9v2QEUZg3hg2sUYa1GzN6Gw9hC9rNcKqggXTQ3AMNNzF",
  "key10": "3kry9riW5Rpu5f2E11qoHMUYVV6ZiTZR5KtMBNf3ETBSGdCenVqXsUPSL98yp8wJxvXuARvkpXxQgASXjuMoPVAA",
  "key11": "4BkvCWG6rqu4TBcLVPtQtM2oC62jVsKfu5FjCz5Li4dVAatpZH3aYrVuRYPstxd7gSofkQxC3F6GP4Z6MYUkYgJM",
  "key12": "5ZuxRXBeRdsmafVA873Y8MRTErF98v7dpPZ8A4LBsUAVuXPrQPJHCaBaZN7GTBVdRT7XRAnskSqmCgqguAjQqoie",
  "key13": "2EWor36MyS3FhWgB7fJuaEh325zpQuVV2MrSCLVMBehYgkAVSAu538jFeYrJ7DuMBunb4nCbjoLDGEaHzdr3FF8R",
  "key14": "iwQgS3vDs43z17d4WPnqdvYMxUoQmmvdYtWiHw44YKWiuJNaQz1FpPaZWSKV4YZZ3XCFdBdhSBry5Jazocv87Mq",
  "key15": "fDaHvKwx9dsrYC2PTt4F6XhEU6nVEtzfCBToF42NmUAz53XCMmr4DpLJRw5yuFvpUZYgbYS75Y5ZPYWue7x8KAv",
  "key16": "cFFuPBzCAViLZxQ974qr9KdJeiACaEQmAnWUa1rvXQAqmXnpEAqQjwr677Gv7uHjpo3ocuNDNeHb9FnHyvZajTJ",
  "key17": "3TKThTASm7uQv8a3p1RMEqmW6CFtdM87Le554qLwboqp81G8TXM1aeg2QepHoES9LKm7FJ9xrttUbkGY78FzFPr9",
  "key18": "2ubDV96yRKCNMwYn3N7wkgAxmxbJYVnVTv64QXYNEWVt8TFXCyMX5R7KMae42gJoephF3VBVFENZ32uksSLRZbNz",
  "key19": "3mCuw2rmLfxR4Lp853e2nsfe1LMTYZJkj3TZLterTYZDtMfisdmUSVAPGEafVzHu5yAoxPqhjJ1zhbvxqTxaRvPR",
  "key20": "3MPs2jrCwjeyQPzqk1ZDYAcB7pMHDZq4xrhVaTsRW5iAfM3zziLiavxKK3y5ehWniNgwhx1NP54stDQPZj5AfRi",
  "key21": "56u2sAqhboj6pUGcnmZXirfDYBd3KCArXJL14h3CaHi34E2zbJv3gQSHkqcMFv7o8MzG9uvG87W392R9CH9tMpSe",
  "key22": "jvDJVTKUDskJMGmMgXbgHyPjSDp7JwXwBXokBSJLgsdDijcfVWt6GbbYZoD9czBWuRY4qeY56m6J2drJgm5Trvb",
  "key23": "2wAiWwKv5DPrutsveQyJUSaNJxfWNNYV7Qg1fjzJUp8jWsqDoBkTiN2dj7z5mZtsgLG9ps89PhnoVz8kqqcmkizj",
  "key24": "NveFRJYR5Besc5y6SSziEUg7BGAnPoPsah9n7mxQNWMaQvq8J9izVe6uDNWHgC2B9ttGQ2a4MDrQNAjnS2pQWjb",
  "key25": "4hFFmykzqpi2Ht8vSPrzK6HdVqgj5b3taN3QJEXKwo46U2yqtFPaQF6HY9zkMa3oDvRisFADJXq8CFT69S93N9qd",
  "key26": "3ns5YiV91bBYNP4x5cxDgEWddhxTY1z2Dmew7wHzjBQtU7VusK2DqdjYkLqHTmYbqKt2phTHndySZC7NTSYbPSYt",
  "key27": "3otB6v2HBcVTH8ZdnWKR4LDmMZs1i5XhGhQPQTn74nb81wv7juuAaSBYdBBXRXomPWPE2v7kf3TXjcKSrKngQeSx",
  "key28": "4SkLtzLbJMT2WT2fWYFi3oApA57J2J2CrgBXJha6cD9L4w37KUtTJPMuvCsNPRknYEGN9ow63onCHMbP6PaBJGGW",
  "key29": "3NJ5MAaUgoi2QA7dpcgGMhQ77dnNwC61cqrZZtMmh2utxuSHNKtZBzTqDZ3WgwW4tfntLtpkfLJFdNdfKfPUbp3k",
  "key30": "4Lbhw1MzkXHAU2KPP3aDhKRXHWzrS1oHNjf1aNLBt5nrDBvCe4MXiinDLExctYFSaXpZxmbSVMVjo7HNvs5pLc4W",
  "key31": "5PrhM3PfaHQ6NHBj2TcKbCpuWozc48t432sUBHvEPPVhjoUD7YFtE3LjnDs7GXsZqGGcWdExX5YMCmzsP2wtNw7b",
  "key32": "3b2wN1nkoMguGzL1fLyoKJc5KAxM949rpGNMWQ5zqp8kLKEfFYFZ3xmBTW6mNvJpWy1Ga2uVjKUgykdERxmLJmy3",
  "key33": "MSHtuMiZTYdLyEvoi2VS3bX6CH3zA8jyvDpVvYDvCw4X8u4jMWwc6Evb4svY9bxJFujF8mCjC1NFqMHSHZyRv95",
  "key34": "5mmMF4MtuqkAbTmC4m8tURfxzK4eNPush9xZQpckaAeKHJ2QeMFg1P22twaWWgHpBxeynBENY6bHjNEH6fZw1gYi",
  "key35": "9MM1WEAuaNAJdvWXKQpM3V81XvS16Qvw4DVSKc9cStizwwuKLpjC9JQP3WMpgAUBo4SUYyGGC7xkfvnjuxXMZfN",
  "key36": "51v77K9E3qhKFzs7KDcHGWJ6uiapNoJVusmJ5RvhCxkDDUXhRoWsCkK1z52fKWdrNCRRZeh5CcbVSdMPERuGSM9H",
  "key37": "22P5mQqxcjJNbFE4Sy4dW55szF8i9KPjrAVwCjqXngP2LMBv5eXcv5tE1Cb1L4ZCywwMGdAeEhoFMWmpx4UopejM",
  "key38": "2ML7sFXRZ3RYiYE5cGdQRq3wAgshhZaadGek1wnLrVkPgVMWe8nziqPwLX4oFf5urewyxuWmQzroqCL7ZQtpG4Rm",
  "key39": "45kcBUuktpxfzmvr3DujohHFGwaEMzPstEZyReamZxYX2CzLfLZgMNNyXVoQHqSCy1C4uQ4at3JqSRSpeG1RQR3c",
  "key40": "5Yjnjuecm7WTRRX8gKLbQoS2LN5xoc6aVU75VzYMYTuzy4NxTB32jxrbL9gKw4aznHYFYbZd7sZcFRkLivizL2BK",
  "key41": "4uxmeMGdDZfHh76zfxsXv7AEpkhSefHVXPuLfajHCHg2dTUoHhtESgYx4L2dYmxEsV5fizALdN8FDfUM5c3RRWr8",
  "key42": "59793t9qDw2LhB9P6pkvXwTd1UuEAmJ43wxmbdqftfZ5M8fbvskSF3kK2zAXzGbfXPCY9fXqTi3VMur5kyD9sWSo",
  "key43": "27QVV6z9nEmHaXRccN3Mf4yRx1LpfGx7KrcqHUmX9v4Kj6MT2ZJDcrvtEjCLPqqrQqixdry344H9ZhZLpiRZBCDe",
  "key44": "2tdp1XQRj6Y2b6VAWEJezW3i6C4NPSPkm5fPeqJDUP2aJQdEMN2CR8X9HvNRdbHRYBefH9Hi1iXvvTAWngpyC35k"
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
