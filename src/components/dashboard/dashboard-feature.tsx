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
    "54LdRM7xbz3cPrAg1HHD3ncY79jy6S1dLD1BeNUTCXJRJa1kvBZEJBfdQK4xitaqrwPPq7DjwUofxk5eS89bC9dp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Coi1RiXBieWgnTyVZqAqPWV2egSVcXu3awwddk7Acwcby5SE1xKybUghGYZNTGwwfj4yVDM7y31AHG6UENKKvgV",
  "key1": "3N7ZJwQAmNYiTYGNamQCFsAbEkKFqiKiBqZwFiRQCkULa1BP1wwKNMQTgUXo7myzyLKX56GdwukpCVidboCrQZY2",
  "key2": "33ALUTdGMfXzH6LpKYd4jRFyofBVS5L5epnq4TKCdNLCk1V8mAfm5dxENfsXroEFLsCGTVVSjJCFV9ZUCeosAoFH",
  "key3": "4C7ZSUynu87WxoHdg9wJ24xuobLRConATEnqPf3An8MXngtUoqy1c5t92GgaxnbGfnL9pqAmUyoXzoR9F2eMcdUZ",
  "key4": "3XGztWwoNf4PSqJuTFZS9n9LL2rhKKWjsxy6CLcPda68DjDKxzcKXbhdBn2ot6sb2rYek1WSbEWpjdKBw21NuHJ2",
  "key5": "2TRQVFMoYMsuUdQMC3mZb4uUxN5zB6vQKxpB5nJPw7xqRZuHkLMvtQBEmrfsYkrTJvqiXu2zuNaHWMv9GXJoTdTJ",
  "key6": "2RKfJevTZC6mzctFeZdroAV8ZPcDedqqAqcM2KdNKymEe8rVD7s7Rv4s2mjzguXPfTgNkpCBYPFSzwsctnb4x6qe",
  "key7": "fCv7YodZXaTHaaPNj4txbDdLrijnAd5FeUcM8L9ruHz5MA83mzWiURQ2MRpF3us8niHFFii9y9apqPGcxnjrjgd",
  "key8": "YMQ5fHrsJwc1BoQToBnrkD4ZrAd7bLF1YPbQvtRqFHrJcrXjKEg6vJPpLAf7sk61CZ9qQZEquqcXVf9yc6Uf3s4",
  "key9": "2CVbnRZqKDBFfoPXgz6oGo3HD6817PibCmpQR2bgMgKirqwoAu8uo6VET2P1qCq9neQXv5Kxo3VZioEUHi6Gmaco",
  "key10": "4GLuUjHQ4ikQRLyTFj1e2Bze8kY8epB56gE6Ju99UbcP1gnKF2Hxb89nyfAfacX2trytariS2cj753bVjmvxv4p1",
  "key11": "2sEb4B7nHjfBdh1Rf5kDK6GAD8Avg8ifXBi9QmDct9vArMncLLY6G5jRN19KFcUdkvnHxeJKwxvLeeZuhjWHfn3u",
  "key12": "3mTB1gaSwnSUGUgFvHZMpnis4uxiEvm967pP29hZfPNfmkFF71itQREXt1BeEfC2XAsSWPq7LdRqbHPbTJ3T3uAy",
  "key13": "2Vpy4EwABLFYhEAX3zibBV7s7ne6K8nLw5hkcbbtUcRpwE62WLQdCvQygfgYGQnWfSF9SCW5QEVUcRHJ9j1Vj396",
  "key14": "2BmXQuLiScaFU1pmSYpXxbE8opRCBp4q8xGLq9r2W9dhK75nJEZK5awgb67Hf5kykVMVzkvLTVK74oqM9WcvyDx5",
  "key15": "21JZEGenGMNq1wWEPEHQpEXJG3uhMCS838jo4N5Rnz4HfQLRGE7ZSqv7E9j6yDpnFrsupwwptDUkRsvu6UJPUEPy",
  "key16": "4Bp8oyHEDtbnkqmawe5YziDLqSaorHCErbNT6MoHsZ57D6XhxR5fbg6y5TNfBCDbLebBoj4oHCwx3a3xtqBJLqEk",
  "key17": "3fpbJ6XeqVBkoxjBzDcbm1d4DM4ZaZV9mY8JJMQiM6ELBKK5vnybYA1nAPW7WKYoZZcEWPS8H8b8RfTcdWZRUv8R",
  "key18": "2vkCFScGdE812gYF8V8AJByMG1SYGPa3TJUFBdcguyeY2mFTPS9o74LWYhf4TVN1y6JaWnAWCnEgLkRWWVXyhyMY",
  "key19": "5Xf58gvvCq2XuMqfHd9K6hsG1rzBJhJb3Rc6DriuC4aLRyJBtRgqSdR6Wruck1pLYevy9JETdqit7yqrrL4Lrupu",
  "key20": "5DYidQeMghDoEJVZRPGJQiHKEL55yNmfRtdavyMGA1kx4wPUc2MirxZbGRAiD9p2du5K13xXTniMjhYALgTgX6AG",
  "key21": "QfNTHMdboztz7EonZGbifzFBTVhbFkVPRu9GVqRtPBvy1a5iLS7dwRBigknM2o4oXKvghBTGnqz8DhoVLUd2TyA",
  "key22": "44UcmNAmn8Ce3v9gTxJP54U7gkwRTbKvqffccdmBt4bRib7eGnFKH2187AaWHhh8Am1wBbe7y6RxCkK17o2wnqGk",
  "key23": "29tAfGBiovBBCKsmTmiB5VZGJ6A5Kynk21TAVy7MurngkkKPqUbd5PEHg343TRjrsiuMmkkUmGoExnEX1JFigR7A",
  "key24": "2E1xKkXXarpcrZru8PzPnV58digei5p34qSWygj8pYgGnVMgmP9MeTV3o69Km7sY2iLvd2x7tdpNeSUptDApi1Rn",
  "key25": "5MxoqSv6jh9forYzq5PfwNuN7ZYgqDNowSwgAF6LHQoHBtgQDfwsfBdSNYfUwUHZmDeCr5nziJw4A4GkQemdCtC2",
  "key26": "RFQaCe5rZm9vqfPc3eZteqz9ocsK76C1J6eQL1NDEUZfL4y3cQERWbKihAcoYCFt8idiz78Ejw4h8D7F4tBn5Fb",
  "key27": "42BdbS3x8h45spiYr7rPN32DfuxwCBSxAq45ejrT6xgtEQeVRSmzWvjZ6LQS6K8uRSzVnzJ8pgShHg5Rts2c2Egk",
  "key28": "X9pACXV3AeBrPCNjRnTXMpaUdUtE8UMAuvNc26hVLUC8WBXQbcyJ22Xtr5AX15LMea4JQ6HPutJmduFBbBqjQx2",
  "key29": "wNaA5S3BjS9T9D4yYrj6AAHDTBexEZGU2cL7aBv4xV67zNy2pNGd3bNU5ixN746Vzw9cqePyErzD64BxCZM8Uhg",
  "key30": "uSjVdx4hnmk8GhCBRTmEoncmQe7yqfJoCPfNR98xrQ4CEPZ5eS4xpoLxYXgQEiztm534WTkndjegASyidT4njvM"
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
