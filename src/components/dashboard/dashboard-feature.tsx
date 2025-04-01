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
    "3c3v43CH7SkcpUHX677rdkiZoF2X7DEHxziMi1mvQ81Qdkh3jVNURqvyMuWq1THRxugo6QHhbFw6XCuM5EMxUyaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qNJCLW7VEuDn7m3UHPabjix8BS5JMNdEfQ1i5LaRHCLRyBJjhvPHprcvnD8VF6sMYbTx8JGDo5v6Vj459Qx8gpa",
  "key1": "3tutvD9zxCoqnpfUJNbbtwiGQGQ6nSxFy2g5HZQp3Njtk2CDGo1BwJK3QSJAMENrfUmsEvst4rj4DekCF2ZwQ48H",
  "key2": "4zRS2a89ukphj49vi1hUayV7NkYeegNoWvDBJUYAG3KcTEVYoyBsMBYHWb8Y83MCfBcfgnmz3Vuud88oJMauSnJN",
  "key3": "3Ako5KRpqPLuuHwdMTsXLKQK459Mx8arYAMwfnV71JSQ58hVuXBm9tgsvMG5pWA2JbJUjXP8DjmuwCjaKLfv7yTG",
  "key4": "3zdrLrr6tCB6duiycEUknBJYC3Xm425jhUJuDxms6wQxCVpnFVZUGR5JVhSQmV5CgM5ogmvfbdhvPnm8uxCcBesq",
  "key5": "2JjoqHrpNKNwhpTFf6sUuZVzjw9wca3rcSWCVXcmzB24SDYk3MaadpKUntHyVUAP4Mw2gKW25gFbfJ8g9kYuoyEo",
  "key6": "32kczdk6u6Df2xx14qZXQ7PfJeJ3k93W8ajaUd7oSwzuHqVJ1meeetnBU8bejtPykAGhzdMcLUzsniT8XyzZZAad",
  "key7": "34ycMCHhmqFVyxV6rrzsppRy5wk8AxRpw2y3U1Fp54EvzYaWQZrhyRHwT7NP4a3JKBs3qgpyJ4uTyrGy6fiWmAXm",
  "key8": "5DyhHXGXGNL87hbtQMH8zLJwgfoX8AgAR8bd1it43NKaH2EBUTGkdppbBsa2zydukQ8LocovkoRncTJ2aAhb7zqn",
  "key9": "ajLvuuXvGcXabwzLWkEMnY1ST51SqCrJULeh8hSvG6iFkJW722N9jYbeAopZGy55vcgebWDB2hGBhFJhKHzZhLZ",
  "key10": "2yxdM9Xxvm6KuNr6BwqrzCCAZwfA4HCC7dyG17xj6aRys6RciZL42BwhSDsKphbaqwa46gop35UMfMyjrDaqdzgg",
  "key11": "yXVwunPV6tncN7R3VYVd6tJAZyMAZGJkD9mMbmV8s8vVSrJqyoahWmsJJRDMRUWKNeKwbZvfomVcrYdHdvDAgo7",
  "key12": "7dESaD7JeuNEzgDvorEzR7VsSwYCubriTQKRbyUAA9iWTSEe3o5BvTQT6tStUvkm7Sia3KUqibZTxQ3HVawTPw5",
  "key13": "3WUphQGRdoMrtcd2C4SfLchnictnLWTdB71VgEzp7wba4Qv7qEftB9ULQtmMLZLyWiPACG7MKKTdbY6KnAsPjDnk",
  "key14": "kXYeoNkTexdH8F2emzNBZPNhCo2LMUT6D68Rx28bcdTFhA9zYU982zUQHVLoRKPRwcir77UHx1cqqkc5L91pqxB",
  "key15": "46ksG7LdN7kxpUqJj4SFdETP5bubmtH5xoYME2RG8HKJ1mbdmx6A8RqhqLmpjxhfVFJJFHXtWwdeg33pAohjrJcx",
  "key16": "5ERRtMaSQmmZo4BdskAsf9ozZ9nS9NVmZhozX9ziRaiNTemqdEmQCw3cvFprskvoX4xnsT3zHM9XrNwVXzveiraA",
  "key17": "2FXUTgxN2iQJsG1eG5a3BUK6ajCU2Goh5fkmzKXAvsVhLh5daYJPbcmcbfQJ4bER5idQKzk1vvDDMYHBYnfNt8Gw",
  "key18": "Nu5e4Rck9vzHUQHNDSV5GaWv99BBZTNcp7SsbUepP32N1Tj3a3LrsfB1eYtzdUhYJraGyKjx9QHH1xXRdQQQnUa",
  "key19": "3vdssWVHhoQ1PtK9nv1V3DwjcbB4mPu51AWaP5GpvAv1QLuNspeVjipHEZoCMnTS215meSgW9UYJ65qGR5xWEZKr",
  "key20": "2zef96fwwMSdiNBgo49T2FSP3XkDiXvUso8SdRgNf1rto1w6eh4nYxk8ke11sDhVHiVRTg3cX7Svn6e2w8XFpZS5",
  "key21": "3WQPDasog19NDWEVNaLYzjwzxim9T8hYPHy2xh3DJcBuwe9yPfemPg6cxWshtqffruvZZM7ZnL8H25nwm8MjvEm1",
  "key22": "4m5CEaN2eYDvwoJkKkDVQt4UUqFzsEeRY4AeFQ7oQQiNskAevvDhh5nJ8Y5MP41pt4JYzd4X6sg6L56oUhAUDgeS",
  "key23": "5XXvX2MoVPhsLBQvfMcXh6DrRjfqWRNAtvRiesXn3C9xXwCEJEYTxcNUhwwCbZp6WApQjDuFScPxBQM34zmfYo15",
  "key24": "5uzG2mMoFcvgdfQMcsfWjHSYNRhKQZLw6cqTXr3pNzmodH6x5pquTKqkhkHPKt7GJj2iaUs6UQjNpXwuwCD6yNx",
  "key25": "5L5ukGhUPd8s7gyBYFmYpqQz6xxGovJduQ4tThThcZ38RZcTn7q16UYAwqsaT12mdUAKtXpB6n8nkNpsCxuQ6AEZ",
  "key26": "3josbzXqiyTgXj2PcJa3bKZ1Mp86Fqb86ApPU5Lcn1PwxNntsRhLfctimBVAfut54P1Bs3oNigC14GNwEif8u5Di",
  "key27": "41eUFpMYVPc1u1i27uokiGJWYqUJz8yWK4EXry3qcaTzJSi7uvLpA7yjVqhNqbk3GTnhuGe9GT8kxW2p8TTdCdPu",
  "key28": "3115bGCyB2wtVkBoMohjKMQMbGvRbr3nSPohmbYkBi88a1WEjrvHFtu6maCNRWnWkkQWHhzgwG7mqPR1nkYkoesu",
  "key29": "5uHfL5fdFQaUtGqVoQim4WChF6A6HpNPLMrDBWifrRjyGCpHtsuAjNFT3xHqSXMFmnYcxjYUVfvNG6DzejE3SjEM"
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
