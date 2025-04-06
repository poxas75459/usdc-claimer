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
    "3t59RX5Rswkvh3aXMrmH4rVPVxdfnCdCgJBLsqKeDPaSS217NiSZhUVbZAih7URr1nx1yNARS9kmDCCJP4xSALYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pNeo9TrWx1RQCxLpNqpon9hhG3ELyZmD5w69ATxtgYvpuya7dVZTkrvAiBSLDwAEEmNXwbSw9CE3gXS8G1FxqpK",
  "key1": "3APxC2f8NHoqYppqRBugjd41ipavgx4DrA6dr3uCWrzviN3C99YhwoNn582kHhdsekHTZpQwKQts2A4vM8rnzBVT",
  "key2": "vwZ2fK6opbGw7qneS8mt3L6wod92nQkKU83MPNJTiaEwv3oB3ZoMVQptE2nvJSdaeMBczj97fowWrz8gxSwrykr",
  "key3": "3FA7yXyskpC7pU9Hp4jQJ8oGxWdqrH7RC7BeE8otz2UKzWLBWorqP86ukyLdLyJNwCHcb4PhxUtEWRq3Bq7Ye655",
  "key4": "4z95VURSTohRUgeWECa6dJpEZmUWBu7FfQnyhH4zZ26KJwMkcRV63vtpcFRBpqM9Dgp7fCRH77v6ed8tW5brg7Mr",
  "key5": "63VQcdBfnroPntPJDuR9AHchB7Tdbfk4s9hduFMcMHAVLMRaEpd15gAQVhcBLvSczktYqWN3C6XpLVAJBRWakFhT",
  "key6": "5wUuR2enL6UC6FppTTFpXoqAwMAXc6o5LPhUatGr11FKyLdD2fRnBSSUnogxPfKPMnd8Zm3ELwLr5QYBpzuGT1TX",
  "key7": "gZN1axLYRtPafRCyA5eHm6bMN498Wz7uZf2ptcEw4TyGDxG6hQtYAB9McDqbQsHPiVMrtg9kSe1gnaBNDRpoHkP",
  "key8": "RD2KR8WP4DB77c5jBaNd7iA3HuAY5a94d6jg128UCSTiWxRoRtMFUufHu3MXYp7bkGE2AHwqQpGJLDi3Us2W22W",
  "key9": "4Q9pX9FPiZsyK2DeFgovUAbMdg3WpADZYDBJfvVjquBHDN8g49SRSKNSBrCcegMshSCLK3HimSzPfRD5t764F9Uk",
  "key10": "5QPs39LpNe2DP9kpLBzuHLcArxscrnXX6iBuNP5cTFTpkhnk53TYZGyF8ax3mcQBvNBhdLDtTVrUANSzkzQBwTAp",
  "key11": "56BWadjUF7yw7wncBXzvAG5EGgXpMj2SixqDfMm1aYqZLPhf8uMMGfeTsX1mXKZeRTmG2qVC4tjuMvoeuo6cXTzR",
  "key12": "2p7Km9xgmjR8GdcLMNBsCfpinJT7mxymkAirYUn3MVLros3j1PBfhorSFbRFB4AFcznzWy4oWchmNppTefsjEAyS",
  "key13": "2TJ7zda3FetvtUqsZoxVWJGPXio3KdGbmGq7NniJNUN75mD2e5iNXWn5R8864gmz5heHWfG16fJdkXQGZ7pvKEvb",
  "key14": "4Pxnu4pAFfvRThy6BqDhD8qWftzzqXYtBBZdS5s6vptb8nRee2RZ3bqf8E5GfbihurMhnBurGobwgP5HkEMyzNCw",
  "key15": "4jVD5LHNf6GCFKgvujdzyNtMuixmh2FrAY1dAvcZ5DFHA4RCZVNfBXU55bqQryVyDp49gQyftPu2CmtS7pekv6mn",
  "key16": "4KNiPHkPuEdMFkDm7wDD7hJTpH7ZVrBn3xjXTgo4VeE3s1jrbE1de3Qvs1KbcMsaTZ9a1vib5G68rUrjqyPMAMYW",
  "key17": "mLR8S3C1WxguZ2GqHPDH3HxEbCRCYF6fEJaSnRF1Jquypb5He4NkQQ9aLnm19a9LDu8NX23tDKY2FnWRsqkJBXo",
  "key18": "2g8VgGe6YKFxgAdjZnTmG2cyezzw88b961QsQkaKrk1VVs6kQCX6MnZT1WKnf1MwXaBNLHTaMQAPcvDA8h7GHXB5",
  "key19": "in7ue5HTpAhZgbbf2hKkybmbuj4LsTD37699qCceiEoiT1PWeRMzQzaFEGeLNi4K3CMYnwvX5n2vD5zym2fQU2A",
  "key20": "5VV8RYNGKLQ5kdGHADRY7jYWZA6WeTw2a1dRQYV2Q4JqdVxpHoBff9vJm9HU8uYBwi9Vdgm5Bv1yKfo8JhU5KzHJ",
  "key21": "2JZ5D79bcZtGK6RBdNLxpomeYB9DSe7jJeSmBzccjxxXwofsNsrBYVbyEUbQVEnKq2JBHQ5KCxySgP5XSuRPWbYm",
  "key22": "hfZDjjTiCrDhuXJrZeeaFJPeFc4eoqGz1n9npN1D5XLXBrKU5JVuLoyfcnj4ov8Hf34oehKmnkfwu36hniHWFGw",
  "key23": "3eJjc9zsgm9h6xZiFpo6nYbV7gdaixrMBH7Jxj2JwrVDLoyFHz78js5REwfEDHE95Pv79MkRFCgX2tJRdAgvpgso",
  "key24": "5vgNxQLrAX82HwDW12a3crJKVBkFdc8oeaVVM1guWRs71kuTsGDqbPTmzYNFRnvBiA6Rz7pq5HsP82z244Q5nXUK",
  "key25": "nUXRRiC54iN8oaSV162vXQbN3c7iGEQSmWVEJk8Zxc4K9AYZtjzhWcaYAaZibZVoQXnZffA3fY8gZjrr2aV9fZe",
  "key26": "2CWVCmtX7NmtcoiUYjPTbgcVKu2DU5i27BQWm9xtXnKijNB4FfS7ake5NnRD7fxkqx3qhz2BW1BdxncpvbnjbRmW",
  "key27": "23bWCuzsjqPDje3M4szETDgCLpsdH5wK17thBipw861tdHcxQRWcYfNSdWHUqtYo8zUR9Sydsv8c9GajvKz5BRej",
  "key28": "4DQE92W2y4V7viBbxiFgkW95qJptru19AJhimMjZdcLaMWRmpZ3CLbdFcPY6KwGgvJXZ8FJCKktY9ZWVTYFvDH9F",
  "key29": "5tRESgveR7z3H4RKHfNpVkpzYrKahJ5D9HBWXqaiB6XZEXSRfnkePGj8bpkTV9rM2NQJgFgwbA4CLx3eFkrX4yN2",
  "key30": "2qMQT5nTeLERrgKK5ZJDv3DNnHP87jhbwTrcLBDanp34nUFGX4tRyXX56wW119BqR1gV5c2M4YZhZdFeALuMgtZM",
  "key31": "2u9txUweEb9Kw6oXNBuP3ZMtzHWjeXQwsnDZovGfw3f7Zv9u7mgZC8UZBE8jYxNQU1JegiTHb1FTe3LfWEs7yUkc",
  "key32": "63wJNWC3aKDhNUkptHGuK5HQQsBRAtAjRt9fhuaRHRNPAAnAeatV3yqgqUgi1ywQw4S2XkiyzcPhW2z2ti88WGhL",
  "key33": "46ZhB1yzHL6Y4m24t6KQ5kGqiCWazULCPKrhomhM1yJqCABpHafjZRLnez1UbAkB6pHZcG72gmeqj9aEMJLjsdUU",
  "key34": "3ySwQJxxjeNiUdg5audWGe2dEpvMS4jCmZqaR5Udvu9bgN7fbinZX7B6aJHUy6poU3AtwWSs5ZwpEQX2zJkJ1DE3"
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
