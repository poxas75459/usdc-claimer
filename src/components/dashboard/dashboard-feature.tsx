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
    "3sUzhzfqTZzHKyBDeBZ27jTFSVg5mzwxadRZPbrZQh1FMD7YjhFqZVNw2fhGjEizzW6NmKgYdBPJSPgwGr7FjpRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S3a1RyzKX5QrTfKpo3oMMzkvX6fMM6xaYQr7SnuzFdD8PQ92ZsqKb8MW2k2AGCC4RFWycqA2rFZahbJZESjXUzv",
  "key1": "43W6wE9Jw8g5ii8MtoMRftLHFFkhF4UEftHFgt6B8nfJgGK2baE4GMv6WUNrjp9hy9phmkrBH5kj5txRS26FBdxn",
  "key2": "EDAWkm8ySUspg9EpYJMm2kUktNij6dNRyUgJX62g8s5YWHXqtBuGCDugXcPTo4fYd63sprALRKG75MX44RKf3MN",
  "key3": "27nKnZCqd4CH8kJuodCY9AWzT3kiniMko9CjWri63kKYVx26ek54a48bPD7Pec17pJSnjW5j4YDW2XFzsQkRwPFW",
  "key4": "2gkyHVkXYckTeDpm5v5dbXhTrp2SqqymEVgPcDxErTxXzDbr7aQb2fXGXsFDBGSKahzsWvTkmYQ52Lhj1PYuZscG",
  "key5": "YXqggCnqKuPmSUcAdVcecw6QVRS9M6xfoAHweajoVVny2fMezJGaby51Lof95FjwwSkTUm3b2HW3yfWGFAHWULY",
  "key6": "3MYQkJiV6h6krwPUqVgddLUQwL7Mox331vvYP7K1kzFTLNa7tojLnWoMwKqJTpSmztVcwf1S3w47mrUUoGVCcZT",
  "key7": "ZFQ9zcKnw5LpJDCg4FcqytK9wAXE2gz49879oTRGDLHcE9XgDxMcei8JBhBVhC24PNEMxvT5vLNNGgZAuRkC25U",
  "key8": "4euyNHYNwnqkZsU7mLD1pUGQPLYs6XR4UKgwzXhzuRixYKbqfPPCtMVFiMeiFgdrpnGhTQUM6ukjqf6crSaKynt6",
  "key9": "32fq2dwR9QMS4oibuqrTUFMepFhjc4ctiCRRiX5ycGrbhQAeLwdzFB982TA1fUQk1p6xMYJfutomWeQ5REujrTc7",
  "key10": "2LbaDVrLccUYE5AQ4tVM8zhaDUcLYsTAAtN9fdswKXQrBJgDtCbuDmAKEEYZx251H7x4F3JpC8EVmsqypeLXM49v",
  "key11": "3xbsbYLJK23Z52owtEJCdzPjBjEE1edPrQUZ5ZbZaE663WbzLbXces31NEwb5LzLzMLiqSTJ97fd483gAy1Gq32N",
  "key12": "5eYbLtZryGxsfNrug5o9YcB3hAgMJxjZxkf69eGEvZVN5JZ49cXd2nxvznSWRHkZ1Ux11qD8xAam2khxPVzVMsbk",
  "key13": "63jCWqPegoJLcotsqm1wLHoaVKigcoWymBhCZkfLyJoppPkhRX9CfA2aDUhzotrv7Qok3hX1tNA79NcMbxbyc3Bs",
  "key14": "4HAj8amDZrG9Kr5mYYP8egtRaLvvVgPFZGTwcuhc8g24LuepC2B6QvYn514eh5nVAp4U2EkSkpRvwFJP4D7397Wn",
  "key15": "2B4EbYQjsZ6tGzkqLr34YKrGJymUn6iQ7HQcG247ZKrt9sxiNJusTwFfbUqBahm4UF9dknr54Ku26Jryq1J8Hz2C",
  "key16": "9uqB65a94SZfGoL4SC9yfb775z22tBuHkskgfCvzuoYhWqBf6ig3ddWH68D441corPntyethJ2qktZpb78CCBf6",
  "key17": "3ERxVof3rYp9hesssciejh4kfKpdnrUhj8r9yikdwRywpJJbRS5TK59oFMq3XgURWpH5ihn15ywCK9SWUAYEePaG",
  "key18": "3rxXjMXJKA3LffwnbvGHapPTyEiY8ehVCyDWc6tdFFCgptn3uWvF8RxirmmkWaP6f9SEarAqhz4owi7sZNwxgaVv",
  "key19": "4mJMwYaBqemZhaQo7qAP75uafRetBHpQqpSLkdRdawDfp77XYCDMbfzh2nVoNL16zs9YY1p9dN4PqsNUhMMFHr6L",
  "key20": "5LgzRaV9z6Ur6nA6QV5CBdADbNzHipPDXhb2wkBhuwjSTiefK3VX9GrVUCXNNViSwSsuu1VvjPyjohoTSnDbGXKt",
  "key21": "5RALRM4T7ddDEDyamvw96u6FUFztzxVem4iXK83neQPddbpjSsVuUazFcQ547EzxxHZWN61VnexzBMRuAEopSkwj",
  "key22": "2biFnRWxRSz6AkbG9v3Npfa5JGK5oNVQuuTFq4qmmusbCAjgyV4kVB39UTsKgUTqKNTDbjgJiBmLkpGUw1M45Mv",
  "key23": "3ddPCqRkb3nCHBxznPw4QrMaVnmFPVBhifwQv6pHrLdgD7ezDHiFh7axtDf7cQqRhZYPgSzPEzgMfUBYcX8pfp3c",
  "key24": "eWmMxLzGnuFhSQjcBeSRrgFmDdQ52sSTVYZSTvqvPX8kvj1pRNU19Jv4y8fCLN9ifjVhYWPHmwH9napAe23KfdH",
  "key25": "42fZEuvWmrGVaNJ9B2jvSqv5uNQRZuMsU1JXr1ws6UAi5WLFG7MpmeQNfLZLpjSWoKBXdSDQzHRU5ikyKL411SCR",
  "key26": "4ZURtnDaDtyywhZHWLp2b33NicoUy9EWLZrWHgiU2yso7r7X6VBPZ3GF7t5faAGQRwxFU2xnu48EvdBCcYnukF2g",
  "key27": "5cFFkQQSCo3YRTK5Q1MCnzKHHoMdzWoTsmffrJ91PpKMwaQEiQasxBb7X11mvuhj5T9H4wxHugUwKkh7QYJcCUcw",
  "key28": "SSeP8Z4HwE2HxidDGcAHYHAsy3CiDWrpX52Tu1q6fagaT9JmpsF8pmjU3QieVpoRK4hBcdWnYheGsiHJx5jM6Eg",
  "key29": "2jn4dom5F2TQ6m7s8qZNa7zdNnB2wyN75DghyH3K39S3KzyFX7LyvBnL4dV4Na4esWkAaC9WhHDenf9GPkrxwpLm"
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
