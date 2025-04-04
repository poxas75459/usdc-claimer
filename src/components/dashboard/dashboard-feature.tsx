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
    "en8yEJBXhSyHnMGdsCaMevMnLQc1ekqSkxrxxVZPtgt6iftja3Yr24kn4NXXEz4FVrk59CQjf1yThNwAPSMgSE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ANUjqerZCRPgYW42SaP7pFSX7zeY1cLaQzMNTgszYAMvWVQgY69rhZMcKgkAeg6ybaKRsQpjh1WyXFHyEG6XRpn",
  "key1": "5qkVGdYjdrKow2bQRjqHHV7D741dPSHoJxKk7KRsYNC2CHQYfjAPz89M3wkTwEinbxUair5myzkPWvhTauJHGcAm",
  "key2": "3AX7RsrqGTBY3SF6yLHdoMKpU8PwFLnpPDQ263X9ipWGdJk2MmPkhHLPWAVvVWwZktR6S6NNawmxVRHrkeFTJkDd",
  "key3": "3SzVkbNEYJeD1oQFmo8ALFuLGReRhb1XSPEHpxJrmuiuCspqcb36SYGjxzganbT46y9PZcWBuRsnAACaGMRefZEw",
  "key4": "4iSHMNVuLZFMdneY3R6TzQChwYxyRugjyXM83Na1vWSxjxE5yKbWWGgCM6X4Zs43MMiCPrNwwMhKJpM34SJWoEof",
  "key5": "5zVLA1BRLt8j9NFizSpbLpVohDXz9tuBB419TLr4vKv9ffYPh8j4ivPfesh8VyzyMbMr4QK8jX7Sbxv1jsT5FCJ3",
  "key6": "3sTjbXrjsGkcSPNpPYrnK8PbEbPSL8hQNnM1bm22jcLtFD5r3e6VB3TTXFKfAGn7UZPaASFHGfQujGt8QYXCAwCe",
  "key7": "2969ST6Ti9aDEpm3EQxSm6Ujt1Hj7om1mr9BhuDTNhcUmXH1K8pABY3APJK3bLD4zsDq77G4EWyVpCWTd5x9gjMx",
  "key8": "3s2pWWvrJnKwJSRVdcb771mEdH2g2tGRUxSgBrv3BeMw1bf6pHn5FRARtv7KicqHU9S3gWTpToRfmPa4MZ6iUfzJ",
  "key9": "5iGmMZW8DMLqzMkerX6Smp52ePiE9LQbpRjmoPHBWJavGXGkUE6zZH1PBgkAdHbhoYEJCb8zTCYyeJQpRZPTFtua",
  "key10": "pLG6Xq7aJx1QwZQCiHbdv9ZB9JeiWtjztg8Sx16QH1rFXkxDQtSG39txm6j4GPt4to3uYfjXPFWR7gU34LjcrKT",
  "key11": "5YAS8GNDq2dcxovTYyfbJ3dvzhxoJCsfq3Y95JGNYyLdrnAeQq8dGXwWqEeU3Myp5LxZ2tk8fpWFh8L9jcrydRWX",
  "key12": "AmU8bUjAVxEZL27DespvPBdQxpK5E1E3qTUdicPtNCY9kRW7BmCdLVCZHVjMr6EGiwWyqq4ifqbVRBQXVXncQsr",
  "key13": "bq5jNNzfNwQQ86sUQ54ar29Cc8QxsUrXQkzFKnb1EVemx47xDRFa6Zh2SqJBkBifndx9SWNcpNYh2nAgYRLwwXF",
  "key14": "2pvb1uUMwKPXEAqGPU7E1wzUnwnf3THb2fDSZjbdzjf9oogNNZpq3okUMhikgJQCAN1mdR6zRWm6nxFDAGTWVD6t",
  "key15": "2cFrzXN4wzeLhfLmsWEBarso7jQLxm7YFS6KGV7wDw9BFgDjxEkQpBqAsuGhPZrJJV6C5YRyKfSp4GuTy7EVVJQr",
  "key16": "LmkjRDCz9Yj4ezSwQUc5tbfZ26W9jeqdpUjWRQua2sVuWPbYtc18uLU9xPtSvUGXxjckxuu7y3xNqfWwVqAc1nU",
  "key17": "4bz2RxDJUTzWep2yUZyjYgK1fpuL7f4FJoaLE1VPNdpk2yD641boYRUcG7SR61cX3vPa7yxmmUmE1nHF3t3Hwq7G",
  "key18": "2xbPN4GMoq2yk9jwPk13bvA2Wohwzdf8M1tLD5Qzi5v1TnbiuHxMG521TEPTXCJfdVeZsNbK7k3STtDJD5LK8xdh",
  "key19": "2Jof15BGCp4EHwzvcPL9SwBDncwPLDdshPq9HgQnn5UH5rvNgXFkhzNzkAgHNz53YVyhUaAzieExqTufyn66PruM",
  "key20": "o5yqNwR5KaZfw8x8QUZiAGiw3GkB2WTrDU7jCLWuPi5k3yzhmSXZuydLoVw52846zU8gqChwRJMZRNNzhtTmpC9",
  "key21": "5tM5c196z4zzSadpskBEGyLWASaQ3spxDhYa9MssqhqLmpJ9aZyyMBm3rcMvZrt3XCuctFAeEEQdpS4tbq9XYCjx",
  "key22": "4r9jGen11nKYHSC8t6oU7z4FNUeUA1PU5KvQW5E8qhavz8HdoNAgzgeGBkNQtvGYRS3XJCQHyAzE1j3sCANF3oFE",
  "key23": "4jCLpgNhXrQQNH971sxiF2sCHbjcFSXRBayroZLzoUALG68t8TJdf5f5PRLVbon3ULMrRDkPrzJMPbXf7NuWt32M",
  "key24": "5MNybTGs6eRgoH1DNWZUN8oGFozDNUYQbajSPgHjaMBBGcQokBm4YS7vtks8tsM559ZW3xvtU5Sky85U8gFYFfiA",
  "key25": "5cEQGomNB7AqARAq89ALb5TzC9BoAm8zLwuhmSkQPE3U1CHWfbMdGipP8BFp7oBuegKTPPYMaxmN8QApbExDU9Qk",
  "key26": "2R1T6HivUnov4pXbT4TGAyCjo8MMzY3bs6prCJm71dSt2q7xMpZQAgku2vB6X79UPVAFpgiWszKqin6EH6ux4XGY",
  "key27": "3YCZPyhq1yhAfDUQfSHQzriAYz4sANqFf7nYYruX4CCr1YyMHFpPpBWuYMKvocZ4SQGSgFrBCpMZ2DVz2Unv1fiN",
  "key28": "33h657Czn9Pd9vWHv6UR5dG4GJntEsadsQt2KQ7vqYucEufMhmYuUd26Ka4fyCEkZSaNKziVzCuijNKFaYuJ8skH",
  "key29": "2GqKdZYnWA9vquhZJE4nbLvhAUkHect1mvS1nwcgVBWyNqKBcMv9ZLCcjHc7bD6RUUeUdvFNF45hCLEsZvkCbdmD",
  "key30": "ZBFj9fvwGFyg5ihAj2UuddbGtRJystAEX933Scp33CWKdGgF4QoNZMACAqR2HTE5UAFSU3MmpVGKHCiJZ7Ho9Ms",
  "key31": "4jRtpE92gD1gbJiW78u59zy417eZm7UiC8qWrPbe2xUuCKGgWhpDjhsJSFhPjiT642nNzM5nN853xUSFTkrEwNVL",
  "key32": "2Uq29WENnkqeZe4AYRVnChCtuSRfq4xwfSujkJJHXQ9rgzA2FQygPYfAEygQiGZvr3dUsVMub12xdgmjF5ykcG3w",
  "key33": "3KiYArAkE2PrEEcpfmDUURuK84yFdU9vDWJoQN4vyjsScqLirh869EoP9vemqFLYhfNzZCwRAPvgLfDaKyNSap5V",
  "key34": "59JFhFQN1pzYDUuYSuDx5Cc9z7DgpkEnK2ysdYZJhXAnNdmSxZki6qmGJrTQXPZKY4sX7EbiQvmSTEVhCm6WTdTd",
  "key35": "22PgJDvo2KYoRZgAepDQ8hqiSSKBeHZj8s8kPgYf4DkyopHdo8badGvC2Nvy2oaj9GXmikMupwkb9iZqTx9ydKWz",
  "key36": "2qtPW7kmgBnHEgJS6S9nWkuBaT2HviG2iEYYVVkqEHw5f4CqyHfXgNEf5eRmwgbiGwsvUTdbkbQBWhJdEfyU18o5",
  "key37": "3osHFj9FahfdWBkD58mtvvxgF4naTZL1jXdkUdp3BQhgp6D4Cc3ZWVdxNAZH26RSUtJcWRQD3WWEay7wHPdqQ5xT",
  "key38": "389N17L4QEosDVrzxpvqHjqCbZBah4aS47zmWBpkqjRCNnwArXkv2Gc49L8oM2rBrnkB15HcLz7imvFXo12UNatP",
  "key39": "3ywsADqHiZutjAneNrBS86BdhntzvBb3hbepU494u8soXm7S4dwMUPPcxqjYkrMjTTVCGSeNGzcckwMrpvvtMDA",
  "key40": "64WW9wgHczPufnFSgFAG2fiejtYt3YuJ4eUzcHVwzwPeU9v1wayvPWEPe1usxkEXwcNLsrekb1kzqJTH2fQU4SF8",
  "key41": "5DBbaeDRNkjwU2UW96Tawm9sUMVGK5ztHoVkwWjo2X38JHXTvMoBFfhCWKbtQ7SrkViQUV3AmcXavDobcFnBW5TB",
  "key42": "5wST7tZXBZTMg4e7ns1GokAi7X9dPrwPWW59pJUCtiLS9zEVYwQvHV547Lb43ptht6EKSBMGknQsmQ1UPwL3PMf",
  "key43": "3CsNJv5DW9Qi2oWtQzeb22FLJkaX7gzfhrk4pfd8ntPX4vJKEFu7Cos41i6MwJCGJJX95d3vmSx61PuE5gzsSRVA",
  "key44": "4yH7xR9u5Mq5a46r4anFYnWZ2NBuirhHR4wjqmwiwXcxvKRuzVLvBV8R3hNurawokVjLpXV1SBUxRxe6kdr9gGyJ",
  "key45": "SPgAFgnJ1WwBCXuFc44US17RNG4EfwTsh7mYoZtBJWGbCi8MDEKWhEJj6j4grES6LHAz823fXiZtM1i2eMWuawb",
  "key46": "5KQaxaZkLDKSsH83Ju45DNGVCzNq91GYnQhtzMovshyV8iCrk4JBRVF8CrCpJaNb1QnjFATRTsQPAdyEdwAZbdYX",
  "key47": "3wq88SVcQ5oTw684hkebHYRXku21VLo94eskRzEgA1SezuD22CuT28PdFXaDXgAMuVoBnVUcBfx2QKxFkUwgfFzs",
  "key48": "gxqpiiq5pVrLCnKtC5KqSN81ZGEwQMagQw8n7QNjJwMyDHZR4WzuoY85V5Q5Y6AJiB8wzW6vnJ2hG13xkYk3awq"
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
