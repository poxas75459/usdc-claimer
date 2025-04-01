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
    "5J1daaprAMsgYqf3sPXeVhTyrBHZkMijwRudFF59p17718C1o3LMiop7GuigzmBv6iahieBw8LrXBQLfSsdXDtGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wTbKsscMNT6YxjZo7CCSfM9gcXk6MZGhUHGxbpWaqZoS6xWfRFhf9RFJKYBjqjDSGA19bhLZkXYyFf7jGmu7gcj",
  "key1": "uW2Wd9vS6mPtFUfxRY4CqwUc54KF69MvDvEYeai8d5PqFvkmFV5sUeNmH5MHnha6L3W42TWHC1ukE4sGX6oJVvP",
  "key2": "516HJ5fBB9ydNKmqbPhWEmxnCgR3bVss99ULVgeZUTgDTwfJn72Vahjp1UQiSbjDRfvs6FAoCZUfdHQ8GuR5daZU",
  "key3": "62iNgpP9Up12bVCA2e7xEaXyT8zvWruQzqa2TNtpFECKge9NUbuAZndCDQQyc2bQzzQfBQoze39ZKqb6d9yoRGZf",
  "key4": "2bDiiEjirFz2CS4iuCv9A3cPMrqhEAA2QPH8xEP7rz4vYHivhMYtaWAHumEEuyKYZvWmnM7MiCsHGaGmgtbo2AKa",
  "key5": "5LsjsrJTRzBmanE2oKyYzSKorswJVJ8meV5m46jtbGKDDrDaSN8UT2jGaZSznAbmq5mWM2tkmmAsRx2pPzTmnTEY",
  "key6": "8P8B7koy9XRfhTUhhjAMv5aYDvB1qNdjFJa1UNquyJougpFHGnBVzjQnqbnqorUGfFTMVg1nBYhsDM1tx7EFRGc",
  "key7": "2ZXaKY4SExjBKSgPfFtDvFyLQZU1cVQVEJbeBuNZ79zmmLd1eis8MzkNdaEfbH3cG2WmddNjnWptR2BEGaubnCV4",
  "key8": "5cfmXVB7xc5oRweZZpSW48LPWs1a5hEHKmgipz1AeE5sJwjBFHQe5nRwVktYPgcEFT54AfXAbvAysEcGvok8RPBQ",
  "key9": "5JXLAGsJR47zsURfYoKBQGpZ88gJFGVLja3oJLE5dB1rU4Bb4CdqwXDXPDuYb8nTnBRM86bikCdLr4ZhKVjKWDZg",
  "key10": "2WHh7f1tMPs9ZvZSoHXCDergZZN16CkP8shEP51fqe6vzk51oM1CqgURYqxK28g6zRHmrKMGwBLAMhKYpirPeCrC",
  "key11": "Kt3pxPZfnZyNHnGFBZq8MpuaYBJB3mYmiiZzYtiyuUBMy8Hc9hPCaW2YtnnP9Zfrk7KvaRZMfBESV8Eknw8zW9G",
  "key12": "2jgey6hUWkiRkrXcGuQeuB6cMitvh2ouwmGZi8xRYWAsCTq2oBRisHdNQz6odo6ijjo7xZvYbXE4DkvmC5VpmBvy",
  "key13": "4qRce1GHeJfSCnAv12gPRsmJ21fYfrV3B6XYQHZL9UnyVW3GGR49ZKj32gGdJxcSGqZATG6aeeLkWp7Tehp4RRZs",
  "key14": "2qbMWRivnmrKWjMCaysHUw54FbQFk9JqnKdCQrEk8sGjmKbV1H7FjZizRXs4oypjEPbpzM8447yyDsTHf2YMWYsP",
  "key15": "2XixViZxvjtet4nYKBNVAqBTxerCuzc31bdaMpEiSSn6JBr1L5j8iC28s2HVvBbnNBTsn9vQjxXvVqLsVP76zcRi",
  "key16": "2zDUQnQQQjnJYDeLm9SW5n5X7Z2D5PSUUDJtoM8jd5C6nFRU5tqBUoFr227iiAx1ip42BAqeAyTuPAQSFUUBoici",
  "key17": "48aGPyG9kbEvwKHmSNQi2iQhgTX3r1JhEcV3XodQGzGxhczYnzEiT8zzaNWvP4SwFmkKqfWsCGM6qBNKTTWKkcKn",
  "key18": "4AtUCfRUnnNkCfMukdy1rLqU4SpnPWUdA3oJeZdKWe5tC1y3kxLM26W4kcwk2Yr4P3XEXWbrmnLgYwxg9SQBrSCQ",
  "key19": "3ctqkJGxBKU8VzYNbAFVXA5FF4Q94rZYpiqViEbuNeUm5ep99WscHHZp2jzoMQvUq5CJh4hh8zEkuqdphgintd4Y",
  "key20": "5tGKcAEHp3AzJz9ySNGDfJSzHGFvZN8fzuPVYLqA2YgGMALkW5WZ29SbSGnEHB9bzH6bKHguV1NGPgxAfGZ5uywF",
  "key21": "4DCXvN2RUcDDyqe5pmjP71SJiTKFskYqqjWSBuTEhZmEx8uuzRncVd6GsJenJhfvLm4ZCrp3kNg6V8Lsw7hcMstY",
  "key22": "2teacNDQ3Pg6txZUq8qTjq4YC2gjLv74rQUtdofQ4iM9RfimaMKE6h8nnnsVrV1hbdoZc8exFQdKkLreKdDUEBac",
  "key23": "4GSXYrPyc6tRxUEqtjLUjxTbao8RFffhHQgwA69c9kdbLrHpRxw7sxznkSNBxi6cYzMGkXjz6E6bvYcFo9sSGkMQ",
  "key24": "2N8wCEcyAoeiudzaF2WA9HYjg7zmaNZonEWu9ebH3gzNK7rqVGibfyBgAbyjsedo6ksHg8rJsJLoFeAuaYwTinih",
  "key25": "4JQHPnLdMB6f7cL8Kj3LSzE4D4cYMPpzK9UdeK4aN32GhPRUcW3mPXV36uc5eVqXooBrHvk3HPyywMyg1bALV78R",
  "key26": "2vHv9BZqAfmZMiYfxoYXvrXsmmYZiXWXCUdVLqCXtmWuY38TzGVN2ngbT5g6Qot9cEmo23xLRFmQZFeFW4owCbxt"
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
