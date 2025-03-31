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
    "3GgK5Ss1DUJ3cyEixpLjZVLGj9vHWhkC8JDRyWkD4X4S6jfZtQN7uJDfX2UzosQE8bPa66oreJPGftZU4VxahC7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zefd2pq1E8UzNPykK4XdLfwiKhCfpts6UeDFzVaEt1MTmsgC6JdTXHLyJvzfvq7rC6dNm1o4LznnS91EDg1TKLm",
  "key1": "3nS3EYrWX2DYQags4v5Nnh8wXSNGpyCCCVmNzKvX5HSfk42qPbYrYoSn5dVYsCEj1oDhqxLo574YnSZK5TKiHjNJ",
  "key2": "2DLDQpjPw7ScVjsbewnoDxSDBdeefmzNvwZvpDtgqFBDRyJ8eAF9Y8z6uLWQPrLwEADCAre7K9LuVSoHW4wWCKj",
  "key3": "67dQGKCSQTDevUgWDDs5ZEh1ZiUL2jBNoxThd3NFdYb8z8DoigidyoGJ3Ls5PuCRxtHhephRd3siVJvQzKg4jUZq",
  "key4": "3ZeD8J4tzrGTjG9f1x5pzEauDLQixi5r46fW8VcvCn9utTiXwcuTADoF1i4ki3ZXL8LojK4SsvLjW5dBa8ht8rf8",
  "key5": "2Q2PJvThRLvF9RB6SbW2oBJs4UAVoZGNhT6nmQKT597dzjzfAMJ3UCjrRo69FB5496p7SmBc5BqD2zSG4UekoC9",
  "key6": "4YXJeEYhMQ98s2z8epcyY4YWZZHGYJCzZNqSpkKvG3fVrEAmwsQRPovVHda6SeJE2kxxrP2Rnn4TBxB9j5nGUywW",
  "key7": "2xPrcdQbGB4iVjVFsjpaUu7rg9UPoKETtauegEiZpj3qU3m7uHeXpRZ3Py7PuRCh7VduwhL6Qt4kaTW1rgvxby7b",
  "key8": "2anJE7iHaKPrwvxyzqXeqrxpVVoGvUnSwxvy5td7xAetz8rL87hhYqHrkSzuj7LttVtUB8jcemtsd1o8JGACsxV6",
  "key9": "4vURdG1Mf8oDMdvQfD5t7KHHxytRFKUwkd1TqmaDv8N4j6v2JRnQkeVicBJLu78sLFhY2pMhUFbWVVmPhxuo2Rch",
  "key10": "2NEysiXCZYP2sM6arkkDHTA17x4VF7rbCJ1LdLX36usFDZr69SeKEQW8VUskvRLDVrRiR5t7bof6vbsjgrpXiENr",
  "key11": "4e2Na4iKMXJM4Mw9uT8WpfkjsuzumGbQnYhUXg5QjQzcBhe7Ejfmj9BsQreFekyt22bpyn5bdSfcmqwJRGLA7pjY",
  "key12": "uG2pzpugXuJR5zv6y6EWL6A2szDYWKH7xTvuxhRBFjxX1t7JDxn7QL5hXpPakkC142qJ9HNpTjeBTyqhvwufLHA",
  "key13": "4xVZJnKtE76j25vtxtr5F9pLYUgW9AZJ2jxSFmHKd3GvqupFsFb4kVewPCn8SfGPFQHjfD8NYqCTUqsV1uLCQQfw",
  "key14": "2LSqNLsd3zqALfaEi6mq513a6dvhVTFsVNAwssGgiNh8sZgydecY6zQS86iLrzcoxbTqFtgfDAphjxWhcswLocMa",
  "key15": "36ixpFJh1rqmLbD4b4AVbKvQsRV3PjPDz51QDD9pFnA4re1JXf3uchQkP9HNFnU43j24GEiXsCigzekD5eb3kbK6",
  "key16": "4too6BqTLRaKRb2oLUoSbt8o9qMaSQ5NSoDAfh1dNqhteVD8QkgNu2fxQp6pzBaksnKhFxwxkim2Y7TDuvqnqXPm",
  "key17": "5Amm3jxJyNkQaedQbF9X8iiaQztGYF1f4Y8E3Dw8A6J48HsMFFiYWbr4tzTaBZqCPonfzFFLCChDNh7EVv7YwS44",
  "key18": "GQ4yGMVNJjPEe5M4YRcRH9onVtSaSHAFzFVsoBx5aM7tDqR1z2mdk7gCwYwwo9mXd4GEcbTZAcJFbsC3dwtXyBK",
  "key19": "2FYbCfyFYJfyJs9C7V2enaKGDJNt5mLKu3NCHgbgJAxtnp6wog5YRGi6PMnBsvwDnkCe5cRw3U5n3sVyVEUdjkQP",
  "key20": "62zxsrk3fy8u1bpzApeAqZA3mRsyitqEaaBUNzW3wQtqrtzTHb5bbQ85XEyo8rTcJqc5g89mfo2zYd7QtcCV9zD",
  "key21": "3hivZYQKc3AM7zDyzhiYX6eW6Z9DaWpPKpb3DisEH5HnYSMrnamthfGjyZQsquY1GawsdDrN5KzFZSFSWf7XFFXB",
  "key22": "5sKDabwqHfpFjsm1tKqr7QyrUrGidY61yyFqZSpePCdTUPvBAdju9L3KwXqawyuXsBnpGJdvYTQcDAxAq52kwmCz",
  "key23": "2818tfWMUCtUD6Y2zDcNbQv6VJqtKjsqXaYwMfHerrgMsFduCmFWKNW8MJgeMyLLP5sCwFnfdFU92MDvCxTu84Xd",
  "key24": "V7RCjvWan2wuzrDa5Qht3R1Stcqk8AQM5L2Gnz2EQuLqHANtqtqTTUCwefkb92zSwHgHaCB1Zn2QA3XxFPsVjC9",
  "key25": "3pjTG1CBPd3qjwVSdRE4u75WqAXMry98m4947SGP7YjpcEFtztJbRXAKNWrymHHApuvNuL3iZis7j9BpTTHCi5Nv",
  "key26": "2wyxP9S6H1VULUu1ELUMo99jGeX9g6y5LdYjiyMJrt7Gz2knu7a4mKo2id8CUzHQwUGqucgvFLRhzV2diGwr7i8S",
  "key27": "3oprUbrBwgRDSahiyLbYxGo6XAeXFFCRC1Znoybij5k6u91KJLLpNLenXNF4t1cHAYyB3j52njksqJjq3fAioSe4",
  "key28": "56MRTsieYBYfcFyCYgm3ZN8HUUcpcy7pgBm2digLMmZfqJkKaynEDSxy4bmYm1yVFaopfiQtJ7rNcphagejuj7QA",
  "key29": "5x1K2nXiePdXxnWr5bVN193ikB8xaNyRByNqwqA8ktWVfcD6aMcLBcE8452rcgMkMCgC3VTSxxHGtmyLgGxZHGTd",
  "key30": "22dZJZVxvUvowwd8yK4eFJNRByJSNdmvezkTKwWonGXVytR756FDHE3kZSNSa89Kaf1YZfVj6xcjeU93A2yTYk5U",
  "key31": "3dHdgqnLFNxPneafd9S88WnyPSQNkFqAh5RTJQA8yQuyufHTbYB1bFcYCCVV5Ykjk95PsQhkhbTdHrEq3YBFQXRm",
  "key32": "4Wa74EHSpVDaByQg5DwGKnJGWyWVSUYF9iS6qx6X8CxoreRCnHeiPq6YJ9ExgioAn8VQn2PMPRaCxZ4cAcUEiEXZ",
  "key33": "4nETa5vBMWqm4F23FubZGa5A3QhP5UqLbeVitqPuHUP8QNQbEy1xUpVsYCYTP1jexLgPpA1hgAgCq5Qoy2wGQ4Rs",
  "key34": "ZBxytCQaHLsizLjV6zf99gof2W9F8WG6Rdy6rnKsNyCYEGVG6JyTjogSQAEwX5rgn2ZfpJn1Ru4KdAqzJmTa8Hs",
  "key35": "51D1d6t9gtqxoMkSkmX29HStzeNMLyc8DwthwPQLqnoSpndzVejCNBea7bcTfStVtRogAEXWc8SWSi7wYEwuNjUy",
  "key36": "4XMCQNNxEWYmpdrSrs7GszJBxVquRVgoy23F3pmty1RPrTYUaYMA48QXds1qNKypujVtTwSmSqoVRzHXCWZwkedp"
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
