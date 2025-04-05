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
    "336EPCdrVvGFHrLyECo2KcaVsLR1UfjA1TxGCNwbqVhEaDgtCe4dVvDqrP5z5B1DTezVuWgWzRj9wrqh9MrSBE4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xybK4YgJL8g9hKsT9Tn1q2EbxigzTWY9wRVrasGTWXajAP4HzupDktJAHDWVV7g6cd1rXjVMnaKanuC5Kyr2iJe",
  "key1": "dJZiVEMg2NzaRu9CFo6XHiNY29f4DygvYG6BKvz5NpqMd6kYGy2GNnAsReZp9P3GqNKoSW3cW287vC6HJwCddXZ",
  "key2": "2E15CPAL8fWWc6C1Vr4jyyeUxPNHv1JxrRvnJ8ZiE1aHoMnExhvBKNHaYjvjczjPf6TdaY78Twgwsy55bVXZdheT",
  "key3": "5foU199Lgj63zyvENF2jPHLpdB9UKp3gpkSRAKPjPfresd43EdBP5bjs1jkV5NyUXb4QtHpMKvqgZG38rBerBZpC",
  "key4": "42V5pnYYYUV9uWNzoW1JRW3rULztXsWiAMLSZupVSa9DGYorWLWju1Xvu8DKApcKdE49rviwHABUy71xqD5FgAcH",
  "key5": "5eUwS8byKrpdes5eMt5Sy3J1ga2rN82pvxy5nXwSiEWxPXtRAog1STyW9sS1naMQ3MQLc66hSKsUy4mWe8kcZiaW",
  "key6": "4UbboRZ9vyhwNjwLoER6CGBbm4aGHfzf3EYcFcm8GewQ5emqxPGLpEPM4EjJqpMANFyhyNLhzhVGKqpSUeStcVvd",
  "key7": "4PLMw1zhxg3JuhRMKGY5QU4o43V7SJWU9tyebV2npP7S43PdD84RQwZpRH6iJSjyBe2YU5d6RkMwi9m5dDiCecAu",
  "key8": "5Mf2DMrFkz8fesMGVHPxbZ6HMUpACagjMKnjjPmkcPc8UU3MPQprMUmvwKopeXDJrVefZhydXnL5u43LG4wNytsE",
  "key9": "5Dbd56z498WvEMM4wYmAqx1gzvZ6j85FAv3iitdqhNvqGz16xTYnN5JDUhDByymDXFbKkDzd8BrrjXqaCXMrC3Um",
  "key10": "EPYpMCcX9cmgFzTCVRrN25umYn3jY9YhdY5XP5Ewh7QdcHJZV4YmTAN7a7a9z5Yi8q7sG3xaR4Bz1DcuX4ALHD5",
  "key11": "Mras7cXhFb77vz394R7uNSJbELZLmr1XLDazym8xQgnCtdGZjrC2C8cW22r33EFMfQaV89BCBzGXStB4tYwNgJE",
  "key12": "2Q6nHSZCeuygvkdvJRHqwmK4Lzh2GtC3K73RZReTbHKyUpBe6ukHPDX72nYTHBVgH4cfZLUibf2PUV7osa9qJFb8",
  "key13": "2Sq6fyDkiuggwHCkpWDwbeVzij9ELtn58Cn3apJUcPbdcYeWzzVit3fziJkFX1viSz6ymCkcqnoF8gvhV1ezuuZS",
  "key14": "3Endk5ktSKJFQWcLtvxx2KDx82AQAabDjfw5EUL9XaRYQCYMoeTbGLxzC3eeZTXXETSLVeUT1knkkto2Q12NoRLb",
  "key15": "4qqa7PT2UxP9rSaHHBKdbicRH6Apzt8XJi9f44zGCdukLxkLhxjZ58bh28GoxxJuB3Lc4D6HEg6a7TuY5Cecd7N8",
  "key16": "3cb7kNmyGraKQCHSEG9fj7UwtA1CfUUDP8TEEVgGsiXsi9eJZ85rXZNw3KJhU7P8ePHNYxYr3hKj4pz6Boks8r2M",
  "key17": "5cYr6dyc7c2PnPtsHteGd7WQABZj2741A5DSZh56vhN9UEWbmsMts3S593ipH7m3hVHwEqxUSX326h7EEDTRPzHz",
  "key18": "2K26DkBRGT2CJzKAw3nUxKFdSUrEp4wCqbcGFXzkumg1J8au25EtimoLUvrFeSQpMxY33a2zmETuRiaVSnAdy6Ky",
  "key19": "33Dwnt1JscR2nSPwkkrTyAs1cvPqkouNixNPNt4QRG6x3osu2yUnxCdQz9KUPsF1tBTSiQ9doYHaA8merdKe82RF",
  "key20": "22NM32rEdiPrb8D97orJ9C451ZK7HAZwgHkW7Qv4HBCCJ4CvTK7hZPvVqvUMTvEDJaDBZQig2DUNVHaGjqxamQsi",
  "key21": "pgsvUK3MDFcDgd7PSwBNmYxfojTpAB57fmjh1PghtQLrER5LxvDdiQyC9QqfvHtG95muWySyavzWX7Aonxfu9Gg",
  "key22": "4o5yMqCrzJyT4dqh16DtcHLTW1eSCXbN5byFkAFr8q6hjphzRUMskQbdYvG8VfgyR9NVDVThy4p292iCyNRRHCce",
  "key23": "22RhNPNpsvi4kSbg5479AunhfQVR7CK1zMAriMzVFASSwvaJiL7qJUEqCvahVLvH1nfjh3dhbp7c7hrbk8nfXv5B",
  "key24": "2LqvKvd7zUDQg2bby7Z7hi3S9zXUf4jtuUxs2Mj8DM2PQs2eLacBJc1pjA4m6pCmFsaDPA7FYpMsK29tTJbELSbr",
  "key25": "5J8nDqDFfEZxJwAMEgtKiuo41bAeUWZB9zFuM4byLkqiLq7qUhfoiFMLYy2YSu17Lag53T6QRbdQNetD9wjh2wUH",
  "key26": "oUykjqHgoDEn6CEJb6TF3dZzBYMgvrQVs9ct5sVmVfPkK8FRcWfT4hTxVfU4DLzMypyf1xovDsD3QSBEhMVeEMf",
  "key27": "5bywV1KpcSMBW1PaoW7roB3m4TPesd6CppwSSfwPbJsx23DT3SGbGZgC6D6aWXhaPYNb2fjZntpyUxh1ZnxFCeFF",
  "key28": "4SnEKbDGfo7Yt2KF4Zrj6vEEAjJ2ZrgPBTnuqtaG5RNNUkN8JDn5vz8RA5zk2MGUJSiXx4PSaLPYKxARH7j3KRjY",
  "key29": "4HyKQkQKSX3M643oNJAppN8AtWxqJp5ifCTT62HCCDSk4eYz44icV92VTMPUzAaU6P2TJcih4PDjSJnE5vUzv4ge",
  "key30": "uYaJRVBtSH8yYcVi79E7LeE9R2woCC348mTUzW2YwsURGT3jNeVJSUYBEmPv2pdXE2pV9gQBLRvvK7Z5ZQPh6qs",
  "key31": "5py26MvUPPaLfLAxQ7gzEEWw5PShPzh3D4ktf274s4Z9PGgzs4eeFTTg2KD9rKPeUTop3YRaU2TuoEJwn2t7i5rW",
  "key32": "2HtZK6oZnoz32wDayJSb22B1hfxc8RP22UxRuVtC7aDP2on1kvoxrem7EK9oTPjsoJJcpNqk3gdvjwhJHL73VG2G",
  "key33": "2rBM75t8JUbUeTXuEw6y1XgTuZTESHV5hCcayERbZt3roCxJYVJnEb5uaY6n2DL8AaBnMszHePPKeiiZSJooUivm",
  "key34": "5pt3fLEuBHegVGecJKSPqhg9UAqxenud5CHVXNugTVHfdHZJuAUim1r94fch22tjor5nN2kJihZTCse3dHdg4xCk",
  "key35": "5gdXwjzkVUTpbWvyjRVk3PKkABFtrxWn3f7e9G3twwdjDes28Qfthv6ZrR7VJ33AYH3Ln25ijoTDEfuFwG8f1ykx",
  "key36": "5M7f2Thsp8sEN8BuTtUTF1jbqfF4LrjKG5649WTB4WoDcQFAFaHH3jsy86PwJDFRWL2orrqt2rf11b6JG17hJ3ja",
  "key37": "3Bhps2JeGVFRZhBZCa9xHnYgjzqD5jtpySAaqyPhxsmvHGNBSaixhjshAUTkP7hyqbuwN6rJAP6Wzxxj8ybYyuLi",
  "key38": "56WtPaJNsP4BQ1aWUDK5iMUJ9jY4JmhSdbRo4dei8eBJja1beDR59m4dYqG3WTGFVkWaMt37zcTruiWE6nhobnbv",
  "key39": "2vFNQhW44y3h15yx9rGf8t9dqaWYXA5n97zZHDsdpqE63EmkXC99YioNGhB9iUDu4cQ2TBnbcVZaePMDciCSfQwW",
  "key40": "3udpmzGFLKHVhuonJTEJ3tey3diRGCYFtAmQuCJV84npMZ7cjyJfUGZStkD4Lp4zu5LGty83TS6RPE5g9F9vtQ78",
  "key41": "4mQ1DbjDiN9DQKvRnwQEdbePnbEfebk4ZX7adggGy623ytdSyFc3u3aRfU37drZyXCsbszq1nj4GUA7QXkTxxAtF",
  "key42": "3cNWPCZRwuB1kAFiw1Xgc1GyeJB5fGX7SEFKuDGbwRu8U1BqVBJE73WTBXPijwBkAt2M5tRz9Va793YaxDnWuA1W",
  "key43": "26uNGVJRsHKrSoY81ygFmdWbiCRWDzWA3yFBM3cRpTbvGykc7g9mfDL1MkL7VEMsP9FuTTaNLnEpdbAWPndeZiuJ",
  "key44": "2GQ6Z31Cio1YRpjrZmpMBqo2Gi6iegWFn2qH73TFziLWWJtHDzo76ic9afytQoSraFSrpHkzM7Jqdtq8H6VkemvK",
  "key45": "MDM8o5fVFW6Fq7zhbvgAUS121i2JXWUd5hEThvyMdEhqGe9CMxVH1dar5YRGpJsaheA1zQtbsgDZBPJav8fVBz1",
  "key46": "4ntmgUNXq8LaYrigd2xTctBaQn4hpnwYVZ4hzrdoU6RFGayVmdkxJtRrCs9G6yPCjU5E3TPFxLw13wbWbi3bBMnH",
  "key47": "2gtSNGbkhvCA3zC7DsRRraFYyiXFwv7d5VeWRdcXbc5rc82o16dRh9XCvSzF7Xxf7iRcUL6AAgrPfAB9E7JwmNsc",
  "key48": "2UmzXhsBXBdv2bs5LjxPJeQ394TyXetj2ze7BA7yemEwP6aSmp937vHRCtdutPvgcEyxcnR4j1ffddij9TXwoCHu"
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
