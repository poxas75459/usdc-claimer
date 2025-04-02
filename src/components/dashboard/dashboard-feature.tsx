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
    "5pm4Cdb4DALCcQ7bWcL6L4Wy7rbzFMFQujw8ocmZ6MSMhqyrkVkVn6L8HA3XkZHNwEhQXVJEHimGbRXWnTpBEuhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57sT3xDB9HBNyEJFAUMRHzUQVaFzWj8gzikwT1UNuHtBQwx6iY1XDLHXJpvqY6C3NLQJmHAzRNgJDaEQecJPNGq2",
  "key1": "3smR2rHAhAxBP6GFGqM1TzYmrCVpJGcUsQMatfYY5bhG6QdtU8sVVYb7qdSRP8cE98wzh7z7bCqMZRVvDVHm6rYQ",
  "key2": "3JYVVNS7wEh6YQ1T5QnHNWCwJvAbJCXBjEha4gPVi5PYAWxyaMqT75P8RxcQtr4Ho73KsvFS9wksUAF8nB6szSnL",
  "key3": "qxAem3GKFL4hkbZVLmmmDSfXWKD2vcyaK94r8DV5ATjNxojPNDrakxCiJpNzn3PRc8zM1954jhfXnTZDyGdXWp4",
  "key4": "2AQEUkMskfWhmxGiZ1hygKKHPrSg2zX6rUYHekriCc3uy3kRFsBKBXCRqwYDWz9L5JQcQqzeKaH2VuEdpJ4fqD8s",
  "key5": "3HtgBzvVxGJ1NZF9hzkBCXRAxzS1WsVx68FAHv268hdm8tRkXrBhFamNChSwuMhYiTZAf2FL9zGAV7jWh9qyf5ny",
  "key6": "3roNjeBQQfEf9omWLZxfsrEcM95S5oM5hi1FdH9mEMmMwDBSY6f2Ko4k5BeFefZRvZS7c9EGhSAipey75uun7jAJ",
  "key7": "2ZbAjvQ5GgXm5N8fk1iUcFo2i6YNyE1RWEHGPphH4DRDuLTrUdwg6Ng86G797HF1PkAV1BpPtYDcLVUA2gGq2Mia",
  "key8": "4dqvExRutpNnFth9GNcUpyG4w6WwSR6U5quofPGFz9PgndHBsGVUD3w9rgkrh8vWztzCnLR4rG8HiGfm7e9SQAe9",
  "key9": "3jBETa7t2qgaeGbmshfJFnNhFWv3zy5k589xEB45EYYBNaP4kq6DMeCN3K5azj6aow2Qrde2oF7XToJCQjXgoBUy",
  "key10": "3gCTXReKqte68oP9WEU6Gi5F4sRf48je3qnR5ekLpPkLxdt52fmHKqpJAa71amvgwPWT2xVHw33c1XCto2Sw1k1P",
  "key11": "3VR4PHCc7ZdxU5TWDHgzbRJvCYDou8dV7GatawADkUwFcFBNt2nZGUr3FeAE1UBZgPLL5zWx3MrUwX8tNfzKSTeF",
  "key12": "36gTridv6xhbf1aqX4zGcso28MM5xMPHVAtieNLhPaS2479EA3LKcLbskuZNRHQhhR9tGUQVKoHrJZbH4Jpa5daK",
  "key13": "NcBmEgr8MohLtNXvcCawbLTRPeLaA5pD3UGWt5qrTCzCsFnWMfyNgpbXz8aJhTVpt8vL2r4KepNBrVZtkCTifUH",
  "key14": "4MtQGNrk4E2LJGs5vt9ediCtKyfmbSrdkxuP2CwEceCqK6a6Vbe6qHvAJeRaFTFS6Ye9AktGr5uAo74zu9UzzZW2",
  "key15": "5XWk5UHwh62HJiJG65bu5ta4GqYnSDotrvvGAxcYBqt7n5yMCyLfNHtcjbtE7JqJdLQD6WMtBjXJhrFTLcDcBkZk",
  "key16": "2EzetbLgvSA8gxq5NQxnen4R6FFQ9NWUwpYe4SBUowGGqwkG3oqmzH4UJjweNyqXq4L3oGbdymQd4zLwJxwwFUS3",
  "key17": "2CcqAS8pjk7JWCtLrPJ1jQizTabsNKvt4WSwoc283pmpDV32UpSmrjrne1uq9Ghauw93FkRS7iy9D3x24Pwikyjs",
  "key18": "2fJvM4XyQKBWjAh2Vrj3CPNFYXVuqHUQUGeifiW7akF2NuE9x8zEkz8jU2z9J43HzomWVGKYEJnkAh7oP2KL9Epy",
  "key19": "2f6e4SNvMc4qz6ohVCw2AsBoK3to8Yt53HppJGorKWCtL6hagCVG9e53foYuGMbKEciHZDrb6DKFqW1ZsrTYi65p",
  "key20": "395QHK5ysmHWynuyqN6KoCAJrseX2AjPV79P8MN5tuMuS45QHpoDV8kbeRnwozNpQTrrHy5c3sr7uYpdNHFcfYD",
  "key21": "2y3uettm53E4UEKf64b8UKxpRc1ZPVJ4atp2VxwBNChqARkQmTxSPz9P1p65CNNFF7g7uoDbKna2DyEwXBaXveMY",
  "key22": "3vWTxoPZXfFJwyZ85VvrdZLiNS5PmGWGuMfarDjZS9jfQLWnmWCuoWTj51qoWg86Cvf9eRJv78zCbC93Zn3omWDT",
  "key23": "5dCcfqxaeGHj2wXkx4gkSXXz4ETSnGv9vCnsMvwrRnSGtBbfEggokii2CHndcMFyRxZJ8vEP4mFPCuDnLDLihx9U",
  "key24": "5ikV91J2hgD7hA2HZd11g5VeUrUoKVm2ye9FoY5hNGzu8U4ruAm54FH6qqkiM8esNgkUfkAETDPC9ZXiYMJYJTc7"
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
