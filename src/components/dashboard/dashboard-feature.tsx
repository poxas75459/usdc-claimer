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
    "3GKkpjpaAjw9CizEJ8EZcFRg8xtg7XmAF74DxF1NMcFBG8wNaVnYHGSYnhULw9acEnjLNJYz9PGsmLZRx4UKDajG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2faqE1v3doDQq8oydu7T4gsq1sn9HWfNMYBiLmeWKi2XBSmUAEBASfnsFv8LomhvGT1tdGahqPcTs6fchHDb6dWU",
  "key1": "38V2Ntung2wyDHgxTJKZYdjkSbLkabnmtyswiNYuNHXo3KYXMVgBDAkCi8H3z3rjkKJNy7vNkEquxaCWsYoouyPZ",
  "key2": "5U6FTf5mMGAi8RW5UAE7KJKaBHapuXiLETdY5Nr1oSHQ1eypE6oykj7SjsWag3vMJYbAXE2tA2ZiZEhutbwBqZBH",
  "key3": "ZZJG24TKtA5NfwM2xqpGsYBZ3o6Vbetg9QA11Pp8TtYrKDbqVi4Wm9VPktg6ALuGwYNNuQLXAGZEiAvW8ZEWaoX",
  "key4": "5HPqaLLg3dJp1yci3uovKZPjzDfEkGoz9vYoohQnTeDuXY7EPifAVsp342PXgHxDnY3ppUP2a119vnDYBphWYRV9",
  "key5": "3Gjz1wrU59kRCtfbrKbDkkTz3Xr4CyEXbM4UGrG4NBF3BAcEpvmXPZUHTv8g8NDwsfqKdeuMTThnX7gN7NgTSNJ6",
  "key6": "3yqFjMfZppWViVLrMHfoZnkFtsTbckMfrQ9B358bxc4QpnMcQdJCcwW5w3puZ5heqh5UAHK9KdcDbJB5nniHVe6L",
  "key7": "41WkSZZV3kVGGajyDTEpHRsrCDgks2FDhKwkogqfq532e6ShqiQNbrzaSEg1txXh41g9Bmrb7uA6j3WP4WRDajuT",
  "key8": "5AsAQ6hKpiyJw5btHVDnTc2nYEqEevNwqVoadCkAjm9eS7NMdMUTZAyTm75Rrmxi1b5HyVVAkHqjiMtJgGmZUyXk",
  "key9": "43C4iwMLwBuFKxL1mhzeN5vi5UL9HLjPR1UmBgrjkB1JbWCLn5uBPVyEyfuyNK6FmWFrTt7YdG1LqzRXewecdBYD",
  "key10": "4D4EJwg93FD32d241oVf7BoVfP8Z3p1gccpcGQnaaBiY18dKGAiseseMSMMdFKdCkstxCLczLnbi4UdMQnuptF7S",
  "key11": "5ef7ZPvAgTcBXVzi5nuwavpSZA7Vq4px9pLvKNPVeRcuwfkGbryfhGAYXKg3sWC4LJ5mfWYoVKQBYucgYgB3TsmH",
  "key12": "2JAYonjX5XsQR5AikJAwejvx1HoSzEvQk7rgbJquiKPByhhb7RYBFjfcfECHo1PJ63WR42E3vmRDTvydezyo47G7",
  "key13": "3GsriM6xCKy942Rzh2YkMgzSfeXrPiBUBrMLdPfBxuhsfevzuCuv9yABcowMX6bpcXQJiWc93K7KSRRQBk2R8Wos",
  "key14": "F49DVtH6fUQkQs1xFbbSq4gAQrJ2mMiHyHctWCAQEfWRiTCZVzgXrxLBAES1TA3VS3UhX2BQcSK131s7YMgT29G",
  "key15": "5XnGbaooBRau97vRaQZe72a4Lj33pSCrd5bocCv7Y41h7bF3gdKPUPBZvvZzYAYmwYs7VpYrZZuQU9NGX2Ddw1Ss",
  "key16": "4FMsk6BtBdYQapdau3k5yBPfzswTz8GNS9WUNDFU9vftKgCp4MbZSs1MM1ktnNEMcmub152oXegQAnz86BvTXqYo",
  "key17": "46wogEBXSKW4uM9uwsynEmmY7GD1fb5XhUU6ytT6G3FA2rvcMmBnxAjtQ9VF5K4RkemMHCXoP1Mjmb5eFcBNzoRX",
  "key18": "o5ytvyy3EjSoJBdg5DRa8WKc7z5MrCjDwBAWkZ9CbUYT3SgSuQqemC86ZTfwGex59iUZFXxkGyA799fQCgNvXKY",
  "key19": "2bzda739WMzKkGwJsdE7hfswbRS3UCmehnAiyGWTUHaAwjTwamx3iuztEfdMFP12y13YSpxCsiQJPzLENsrm65QZ",
  "key20": "5MqhEsRrygVKMqe7vVqr4QjmdfevGfkJ84ZNVNeXPuWQ2oXGuFzRFDGcsQS6hTAkYSPXFKZSvUsDAqcVEnpJjMh5",
  "key21": "AZp5NDCVPziq6cAAT2AL2CXfv2z5CFVthW8MB55ey1iMaBmKjWvRzqHgLKJawhV7ai6TFf2eao3EpYhGjw9ZXUN",
  "key22": "5zdtosfFEvFartCCfYYtqkxAq2asFVC6aJ5Hf7ZjwUWX8ojSurf6KqJi5ebybEmT756ix8SrCxsfRfdRBsnsadER",
  "key23": "Sk6xMNvhvAw8jCsuaaCyW8Dao5BoRDhRwyjXgGU8YMaSzcdefYPEEwsLvScwqYd7F7LDpTt5YVMvcmAt4Ljqk4V",
  "key24": "512HbJLpR9JcLvARC7U653nzphU7GE46dvfbbDVWB2GZS78gfsNu1QgFXqNE8AjmzLHGD3ZXcBJAKvGhJnn3xRtH",
  "key25": "5egigBNVuvh94foE7UfLvr1J1S9BmPp7Eug2AeVaAGFxRv2uXwPQbKP1FcTTkG1Z3piCB5Xw9TCZbF4kHGrF2xKe",
  "key26": "5mRd3XEqBizKmsS3ACR183YUUwWjCGhUxpmnEhnowfvCpmfN46wdRZpuo41qzkEb4CoG3U8sj5wcP4HzLorN9uDU",
  "key27": "2DNds4q3bcHqBDi7FpE7JsjdvjnfX45deaFbzxNtzsFt85yxTvYdPExn6wVtyw6ZW9pBb7QSiZWFYH6ScDGEXz7S",
  "key28": "32EqhXokkg99eQGxJAB4qAf4F5tFBPeBge8oeQiaLNbwWrJqwFPRynwFJVUUhzYeyKEkeX2ZoLXwhingdFXVhqDQ",
  "key29": "gqc3ySkj3SYg4zSZ49vV8ZZkdUAsHXj1noXaC9KYioQ3kbe7CZv5zf4ZBebS7iP9WmKArWLmNJRS6JKM1nJBFjW",
  "key30": "9omq3c44sHV5g5t2UzoupfobvePsEQ3BkXM9XE7S5pFWTVbi7bBtNJAqEdKsKzHZPSLiu1GDye4a8yeKm4N6Mgc",
  "key31": "4Eyb33fM7Rw5ds5TzNJH5ttnhtZtimoAJm1Xw4HHfNaPFNWsgeMPMHZmocSo5GANK7H7Bbi5SaJfG8cmJKWj3wf3",
  "key32": "4BjVfyBbJLKUNd6w3n24Nr8gRUZMF8mPD2XWYJqhTDPsbCwkiAjJBif6Y6SqdJxxxtRWwrFbdcDnBTyeDStLDJJR",
  "key33": "w9aqCC4Fag7RKnxKuRxLbskGJSfu53DCKQBKZ1PtpLUG8nw7t5zg9rvm63KcmCMwujAkhGSDQ9VakgEMWERyzF5"
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
