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
    "5rNYLme1hBXmECJkEUXqnCEeqQZec9NcCiMwAApQ41G9qu4rimYCKTE82KAqJDgYrNxs1AktrcRbLfd7JgC1eYmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uHVyKAE66eRKsLuWqbX6YjwYG7TLBBm8gNZwFK8F6QoyneCgjk8WBRFbDg1bLLZ3A7quNvuv2bkAw2VRtaPqYfG",
  "key1": "5BWGgscN81NVtjvtXfq38ndkdUfFj1yf4roVbG1sxpTJUFidHg8tcYMnr2cC2FDQKQQjCVH8R6v2LjJztNseF9me",
  "key2": "eoPj4gjWJ9FLSVv34dQnhbdbwbXN7xb9kAduP9HHEv86FgagHoHJ8dXbB7ySzipJrxtXFTsq35aEmGurDjNtus9",
  "key3": "4W8npq6vmj88PJ9SnciHnmrYhaL7FLoq2uWT6oZemfhAaq2YCsLNaNC8ZjJ1kv2tGsA2CXhNhQnqpy8Y7ztD7fMw",
  "key4": "2Z621yBVSM3nbmZ1zK14MGhr9AD95VAffVkL55da5zaHUGhKt3yGejXxhHtJXPtrPWJGHzLsBAAnTxqxQTeP7vf",
  "key5": "2AiQnyys9mPAFUityQYTRxuBkmtPWyqJfFWLH37QJADuWk993A4atWpe2MZUVy2onzipEfWQypn7r1afgCi2LGTA",
  "key6": "5XGuDt83hhddMuA9SsqXSw9ymSb6rAj4MEbTf3fka4T3XphVuHJAnqDi94GXHYLx8FMqKEdajcyHTubkgiYkCh5r",
  "key7": "5iYqPGqtRto29QyJf88Lq16gXfSwMPHQKwEy7pHFQjBrZArhYw5gA1Q15yMmynr8ZmoGRr9MtCBegQezH8Tms98y",
  "key8": "i5UUtoVp1Fae6LJYukcAQnqBnBgKU6DWsmYDsjvPmE7SnH3Gejxm2Mev8ALytTTyfPmumX5zZ1qg85ooSdHGv1K",
  "key9": "293yNMJNpRfaSuMB4z2ojuyN8iYzPSb9s4AovWckW6bUp5m6cTygBD8jx5RAK9PfyGwRPV7Z5Ba6og3s318Qd4uV",
  "key10": "udUdQqj7oi7MP3PFvFaE6n3oGqDYgrTozqPnfVStsBiqZWGPB4vXeyBmr8duaAi8ZEjGnxsZbYnqWCp84mmExGJ",
  "key11": "4F6WH7GS2TnLKMSUrdo5TVNLLLBVzpz8qZC1dbQgFWfTJDF4AyWxAMw9FfvNYFuyGGZSX21jTkSBkKrZyrR8a6zG",
  "key12": "5my2CBrRSCu6gE5wwQ9Dy3LB51Zw6ZW1W9cvwtaD63rEb3Pc8tXZaNHiofVenAm46AH6svNhXpW3Y8pG25ULcQXT",
  "key13": "4xRHhEAk7vAg5i4Gt2QHJKVYXcfjYtYd23LoWUU3w8a2MfwfZkaHDaPA7QN1WWvEDzPux11qmU8sBvxYsuTndUHu",
  "key14": "4PSfPDBzzXWPgNBxKAg5MBBXLw3PPfK6LVVopUU9dzpeqKFr5WBeRgdChx1B1D6BvMyNuEbvce3eHsRJZMwUhKF1",
  "key15": "3jG7oiqj5ffhXW54Ya3wG66jr5bYJTq4wZoYQF7i61Y56gzWzYF4f6iM8UY7MKxD8TdZ7k79ugswoHo4NSkYfUbv",
  "key16": "ejB1Mi16koYWTZxKUSsWDiJu26fXqmgkVyweH1uoEufNuovEDC4DxkQPo2d4Y2xGndi3pNjgwvrToLCARcbrART",
  "key17": "5KtHpKpRFHDh6iECoZFMKUYp66gUDighgCRp2KP6hEUEnK8TWGQYvC4hDun67sfQ2SESJUACon9iqnkv5Pt6fUTC",
  "key18": "5SN8VBrvRycWkp8t7E4bY7bjMZNjL1cFq3qSUAfmSALHUiH5VqD1Uc7v891AVFogLjoTaDhA4wnL1HN41EDi19j",
  "key19": "4Z5d4Tsm6qJEpF32GGCNm68a28dNx4Sz5EfmBuJMbtHVeryfQpy1uogbRtgYeGCw8A3N3uAykk6hne7ksHMmX25Y",
  "key20": "26vJ1AWsSX58URLAGWYsLEGxcaKaUd5vLtfbLkHCe2AA5nUtfCQv1oQvTpV8nmLpMGD6FUqg4JHzubTthehpy7o4",
  "key21": "5kbaELahauX2fJrMLjojM4zDDF67XGPpPexgdNugxzth6BtTpejhB43E6cCA3Zjo8UvuZukxyg1Ho39sGNSby2zv",
  "key22": "3wsQPBvvp5CsfxT32dJPYjSMwGZJxu1gFoX3fd3mZGWLnZDvPe2XVGDzzvN5QsuH4Ssp3fbCtatPxhVCsbQ8FiF7",
  "key23": "kjwxQkoVFjWdSwyXnfnyjp1hGEKqdKd7MKajXD5jju2sne19sHjFTXHp3zVNNbp24xJvXzjN3rEutfswr5bXBWU",
  "key24": "3xTiHek1dfMMYh38TwQeUwTzaWcgrMAh4KiAFY33xRbTmbVLfVMUbm2rYN2NdibWFLi1bi54dm8UaLLrMy3eD79P",
  "key25": "37EH9AeFd2Ds3b7vz5FeazwNfhRHkH9sYSHhcGRbrU6MrNmswhVYph49gyd8dbxQghgP8vZUDvRYrobciwWAMAqB",
  "key26": "4uotYB9ZmyjDFwgB9J6wTf5MujFM4FE8p2TzPYNp6Qyqy98oEQ4dfhQutmpaoNAQp5EXuDWfVmzGjz7qNKPzGcm6",
  "key27": "2fa4J8HfXnEahSocramBZVDNB7xGnJ4sUnHpKKVfTWVF2ncQZtDw3h27bepjmTQHhY3XgLWdVUwC1oJN2Rb8RzEx"
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
