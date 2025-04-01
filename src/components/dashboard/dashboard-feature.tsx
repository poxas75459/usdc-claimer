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
    "NvHCGwWcWoJFcnVxRqcFMUaxFwxePVSASWA1CYVJLR6AQ6czjyQDUZ5ukTQf3Jta8EyHzyLFDYjkYPcUkhKSPhB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DXMUnT2HDroW3A5caV24xbuffpQ6PG8iMCC2n7ujh3EFxqNidwcDZQZw7ojaTPyCd21n5qTnWXiB8ic8pTbPwxr",
  "key1": "45VFzmDenSwJst1ab7ikp4a5YdzLtVRvXDsEAAcvaRm8YNCb665hzjbmGL7Y7XyZGEEbaYNugoz2jR2jR5TfJxg3",
  "key2": "2BPDJKJsq5DEk59icUXrKpzm7S5ZsfySbiE73JhL9SqjP1VZZxEdaYgsWJ5tHfQoStARRtKkzLU39pcEn56381tK",
  "key3": "QJTXh6ZX9Yjnn6AbZXBKxnwQAQDDdymiPT37jE2XFHegT34imP19Y8hHqqFFcXMjZuKNk7oyfKgPeDcEwSEG1Zb",
  "key4": "5JsgnDX3k8n6KezBBtsDuSGeN3njjDGUvaUBcUeJme8PAw4D3zxG181cp8ZPzNcFyedFjGXCajCCpCLTAPD8RGTU",
  "key5": "5xp8DVVixDLSSeXqdPxqYXwLDq7Scw8u2jQrbvhyH6kXvPPmmo7YnABs79rk9qbZRjg6GQfZjJWXvqehLB4tenUq",
  "key6": "3S4KgYpMiEYfpHwvN1r5vqiC7rvmCJC3ryYtdgSW2JwPLDGUQGRF1dT2QanJMyK7H3WHT2eZudzorDFywjdcKgJi",
  "key7": "4EKRL7febxQigtNABcKxrA4K9AERCRfUQ143xU9BqQYWedT34wLUqZGp1NCwUj4vDX79kNmNUj8XfHV2Pq5BgTw9",
  "key8": "4DiaSUSGU5VjDj244SWbZVUNQT2ZHv97pfzX6DChnTwPkMLSn71F3PTW1uT5dR3iDWy7iECGhzjq7D4hS2iv4Vgn",
  "key9": "2uExnkEFctD5QZ2WWcv9fmtN5YVEynhubKcqNDXLEySmSjAmYTH6eivneTxDxmRRpLeEkEvaRdq541cATYDeFCSy",
  "key10": "33uYBoKArahHW2yh5Eik6LCSp9jVvGgfgaCc5VVtWY4BrCV8g8HeYtTUXGZUUUEyno3QckR2mgD6QCpSp7gGWJji",
  "key11": "5nfqbHU96jymrt7hgozYrf5NFmgYR5Mgp7wbAvAi4qdQ6ioNbdz1mSg7Fz9CzGBji8zDiyJmqXKwmrNx9aWQNmCF",
  "key12": "5WkJnfd9v926fyUREgEb4EJFX63v1NvTAHRJdEcCzsb2b5ZgiGpLCpAiRxp6aSWvLTLdUuPpj8EqTSGV4xCEFi1p",
  "key13": "CBGpqejqwUvvsxn1fympHT1bdymwaNcvczQ9jm1eMFAqgyvPHd1d4CqwPmVHdLNoPShvF4VoWmiTZXJK29hYMYa",
  "key14": "iVf1tYMWXXZzcrMVCCnduEKdtTvQtspb3iCBrsArTkuAZyLQhLM3rMa771kUeLhKhPTzw7m3ujkLWTdeBGzjf2F",
  "key15": "4kNuG662vrVURnBQhaogW3nZMDhgWWaUmcbvBhpSTjApjUw25GQT16v5epaKTcqtYGzhtjHZxdMUG2MB3vtBEv24",
  "key16": "4NKBAmzoYbJtn3reGgR3fkdQva34fKgqP3fQ8mruvreiMQFjcGqt6Kc5dywiEJ1fKNzzV8yoiyzdGSBjVmRCRRSy",
  "key17": "4jZWg3Wk286A6VNFjHTypiMiS6Aos2eMQqaBwuiuvvLAosisd474kca3RjVayRroCAo7Pd72E1VudxbEQUT6nx7A",
  "key18": "55U7miVwd8Z7Jg1WTZkMvfvNCLzLugbK9VNo5CP1W7hBECVCww8wQxVpBXux8mT93mnLesavpHUvAwwRZKAQPy91",
  "key19": "4jgaW6tvTkUjwTN8xFYRPSqWWPJfEVM7AzqciTrMp58TdiLhw9M2TDH9fRAc1snPiar6JaRc2B4Hk4tXWPmHqKvy",
  "key20": "4ctz8MJyr2ouoRwcWkvvwbkLZurYHeNj4QgDxzryuAaqWZrwmzyeSkBLNW1D9jqJ5FrXzd98rUkJA62EBKszUUX5",
  "key21": "56r2wZ6Yb9MnbCLj1nd2ww6LFffDHvMZCZ1j4kfxAdbfmv729R98eKsMsVkMUUaEsxZkXcdkoS5o46WYdXs4e2a7",
  "key22": "32vWbvczEYoXBVLww4Wq6PdwhM9YtqKw1wi1r241LjiU3SPScS4mF66ry4QXLSARgHqBnZGayytJYqSjiPWmE8HA",
  "key23": "4SSpdCctrvFBvEQg4ufJTxeAoYawgRh8Akyf6MiE5xW4zBn8QKTNvrjSqvWPeqBdGYL3gqzhRbVH9wL1qCPftzRN",
  "key24": "57AXr5oWgQ4YQesZZw3bAQ5e7U7tpktZPYEWTSkWRX1U3Px7yJyGjU8gv7feM8VN86X5TGEyiMHwuN11kF7HeohA",
  "key25": "3SExzvdCXiM3XsGy4MgvPWh94sgCAEDRbQRQ9v9DNTn47Bt53vYvJempyy9eq6B6FDJWkoYU8keWyyFYbzu5Y2ar",
  "key26": "277J8Vsm26LuYfKiLaggY2k4pJJChNcHtqiUYjbBHVCkudAS8pnrNLvmt81HFffGisFg3fByZVB9x91cv1hZxgnX"
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
