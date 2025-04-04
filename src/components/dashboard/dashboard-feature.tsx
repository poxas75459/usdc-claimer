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
    "296wLJzBTqXcYkxgyYkcjBRFm7RcCm2ybb1HKopGmwSstZhn45H3jAfFAcTnsX9oBogvH8fEgN3muzuHsyZ5ve23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KjvWmt4z7NfzDstXTsnZMUPopkh3sxF4qHSu2cg85p2nDZBMnFRANRVRhz8r54fGA2JDvMu1tyZgBmrdLYu9eQ7",
  "key1": "39h8eJzLfF7CF8as6EuLaJkTD2h2iM3x6EkPCpDtvQgNmZQc8uayPdotfArDuZq3YaQ4raGaPK3uKC1PHaKC69qj",
  "key2": "442x8695YZ6Ea1ZAAMaAW2nzUrkT276qVURNkwnV779yNkCkU5TbCfaM1MWPRxcSXwvwqZP8mAHjedTVTTB11MNH",
  "key3": "3CkN1vrR8PGr45zo4UFxoiJRpdxHeipxKahgWmNxgxWM5Ly2jk6a9g8qNgq9sLn1pUWEDpYwFQEnXkiYAfG6jH8K",
  "key4": "CrcEjLbGxnHBG1WBiD8N7mcxhRJkTVN9TVbx4cUBoQ1NDFtyjHZpH8E7r1UadZzmZN3JLC6TWya5eSSNW2F5pVv",
  "key5": "4KcsaX7bP2roEyPPEcdz7cxoFfHE9Bt4a4BKE3DBeC8ZAaNuQnpNMD4VUs4Gf12TtdxoYuDhgT9s11QkXRK1c7Pf",
  "key6": "5hTi4DHHdimxCEkJ1XgN1C9phtd3EkurHn5HiRfexi8zM1T9RK4aapn21GNr5cwCYMabhL4DVZ64envmCKqDPTmi",
  "key7": "AnDWZWbPv8qdiB4JVJyTsgiArZpv7518X2SL22zca4wnJxxVBgWLQ9ViCMZWQXF4HD1AUyyHRbVXQr8qTVVh6zy",
  "key8": "55yCqhth2ZHQcuDM4zKgaqndzLp2nn82wmbf932AVwWPMNruKJXW3JqZgohRRXNc459SHnDccnS2f4J5VR5XP6RN",
  "key9": "HGaz1Q4TMsGKK24eM414gdyQFfqzuQ1bduyLiA3NkRGU3G3f1EuVup9cLRKtgyeDEJMN9DJVvBMJ23JYZVZEKMp",
  "key10": "24H9gow6vDLY7CXJiqNTsHPed8QfLv8MnA5vZTi6of6aRftfdbd2yaDUvesiCSYjKp3kX8J7ydyPiyAs2psNLB4c",
  "key11": "3MiY2HTYvUEsfg2Zyhtzy5Q4YLeggvhYETUNJtvFUn3g4h98CPotSDWXxCmoBb27TJHXNWVsd3qpTBj7nippfVXr",
  "key12": "4jotMJZf2xjWrngUjnzsDGKPSRQZtpDpeiP4UcRJ9Aqv7JFBwrcVbTirCuDsGbhH89ws5yTSoB4t9LCRuq7hTFb9",
  "key13": "5BpV7XxCTEpDZqZQVUnif4d828YNLeFzdFwYNwFPSExfS6bTDUMEfH6FckCy8WDBQX8nk8ywhzxUrVBMzAmWvJDS",
  "key14": "4KWT5Vabv3KjZ3fvaFP7HDDUCTCRBRfTFmfdxRp8ZHtJ6AHd485V2iZohFqamxB7EaqEFjFLRrBxjj9WDDeLPPLr",
  "key15": "2iLjYwuQnrSeABrThEcdFCq7hsHL7DAAFNpLGHc6w2ein6CZsAegwji6xQ6ke4y7aJFVuyZ9p6Qo1rLd6QaU4THz",
  "key16": "42tkTctsbRmjfurxtYfzoAkBytxa5iLUErHZUsVSBAyJXg5MvvnYnhYgLLZWw4hr9825SAkoCa1DuSGS4TwwEHoz",
  "key17": "3h2Y7jKyyJG8Tei3NVfkY2YbwtyoQQ3W4368eJbuBFPE7cREcmtsQr8pyQVyD3S3PJ39SrZUcBkzTojVbWU2kyWz",
  "key18": "36zQF3fUzqY4GqupUzJ9DYUaCyqrDHWEbPmjjDqMYaRvR843H4AryqXizVWmXCqxw1oygsSZLjZw1QuwHUcvywJC",
  "key19": "3zhHfW1siaSt3e6mAfiuWyjnUgNBUZQT5EivHS2foSXY8dFJQ8an8W25AzYaXWKGfFmBJpwwk66rPu7mTJMdUqu",
  "key20": "29ZU4fCBbgEDHMhiLm8qPo5w4koFjJBHzC7duCeCoPwjSM6CuBo6g6UUB3P5sNs3C44Wiz3FXmRmfg3hM4wizC34",
  "key21": "64VGCmP35z2QKZK8eJycrtKaiu1GfUsw5hjZrfX1UQawh8mXg3bczuvPdrq9uLQdE7EVkQcpTS1cLfdFjpRt53yP",
  "key22": "5tk8pm4WFxeV5QpUu5gfzPLG1cQTZNXWV4pCYNUw2zP7EnnfQXCYDi4J5FoV9yyBSPxQ7tEnDrqKr9aZPwPzTstz",
  "key23": "2kfFwEV4671PnFaxEhn1ibdg9FtAUwWGMvrAHZ9h3m3r7myajTSKTRWjwUeamvfG8EGoqFtRxViD8qfHLftgEqL3",
  "key24": "5X8u1PkJHwNmHkCaGTRsYLypG7rHHitZckkGXAbLyacyrGBKenaU6iYNJx8W81C3Mg7X2Z5KjjGnmN84UUGV6ELk",
  "key25": "2JtcVcXsba65TedgTKmAY4ohwFeUAY84Rrncugd1rtgYt8VjpvzD4gaDb7kndTX6mHhhHKJT3n5thvNBvdKBxD43",
  "key26": "3bsVbScQn5oHB4K4BXrWRG1rsm1dhqHsqoMfgk1kk5SQfmNQ4xccZmsXF2s9ivGe4BCmKtMSZdVMYW1LPWnwMfBh",
  "key27": "h3uC9SP4mvzAqjardRYkwxjm59iDLeuzXainahrqg4qRz96xifp9A5oH6661EhUuugRF8vMx4kKwLHzgxod2ykU",
  "key28": "3oR384mibQJPuuRUfAwEyGHuRk5AyFeTZUFKyZSPnEkW5VWHRB7btofH6KY2Weq6M99V1cvME8NLi2W3haGbiqSm",
  "key29": "r86rmA4954i6spJfhys3xBghgLL1dyc3NEogvcXSaT9oLFVNzKdUytR9PXqKvwAxNvajYur1Tz63ZTo7UUNPGgE",
  "key30": "MUcwXC7JpecyqxDhHhP7QTrSRUuWoVbhL81BTMEToys8vW9DiMEHwcrEC8rqs9AvgjRgY8SHXuiVBThfiE8uPXw",
  "key31": "2Qq5knZyNS1tJMoDJR6fNarG1mPZ1Th2X2MLMk5mxUFkdf7U59PhezpaVy8n2rH9zvxUWK1g4LaZ66e3fTBVFEDn",
  "key32": "3UGiSrPB9rKmU3aixrjanYaW2hAwicszaDjQW6f2jghdRe95GQxVc8UsBHJ6M5n7cuWh5ZkF7nEiYwLjn6w4oNhW"
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
