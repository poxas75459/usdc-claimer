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
    "32JgbwLkDqJ5rEsyFfKDReUwAqvNQwjLjZFH7dhn3YKVQEB4xjEGBNKiNntttGM4zXTexLB8YoKZrFQ9fe4iTCk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RPT3dAUrTTbhFiWpZCALrQDEnh521pdtyfwr7n9ZCec4beezeZBNyyAHeREtWCJwDerErjAJKuHdAK1rPztZzZE",
  "key1": "2zrUmrNtS8jRLfGynTCVKckNgqbneF9USrNasmz7P8ghKdNnL1gWpWUaQBsuffXhSpg9bhKwdGut1tXiZKQc9uNf",
  "key2": "3D3yRbmLzKrvi3anLmenHWqQdVCfR1cRFHM6piVL5K29Cwtse39Gyza5NugRpMUvPKbYMC25vxyaQQuoAV4vXnnZ",
  "key3": "5yAbtkMCL5gHYUSGTRhiZipfNBpRDcgEf9cuU5Ti3yh3nWq6vF7GVJpUuQHqAEEsyMaKpqrh6GXditABMiWZQLDR",
  "key4": "RiHQT13sKdZn11Tn4p6wHWjjp9sEokunxviw9VdgUh4vHqvzGcff53UW86C7c5B1LXm7q1TdoT8m8MptJkd42M5",
  "key5": "4KWvvrpkHAsiVpawtAczPPEiNQtrnFqGSYPWjgWY49MXWQqNzCaZanKF6vbmSWdat3McdsFt8thxQs9J8xQE7vH5",
  "key6": "94W4D42QHGibEYXsHPBGkEMhQetGwwkyRwaYKbNskHhjYBUcQUs5EDw3awQQL5UXdHGdC9XJbq3Jzqmg8Covkie",
  "key7": "5a8UaXEhyvd2iKhFWVFMptsRFobeaEjXiWiZK4dj6SMfiMUTyL82tFuUvRt2u7XecKVah2Ud7GPt4vcHEBLym4mx",
  "key8": "3hnp9XiytdhEHARinsezTzzZy44HiqnYoH9itEDmH5gQGbVF3mfppWnUVyD9Pw2n765XqswYMkw3LxoLWfW4BaC4",
  "key9": "5oRdpyS6haezYJXLVztcYFvJnpzreNY4nu3A1PEy417xwoj1K3ka1kYT5CbMAif6EimFSJi8tY1qeyWknZdgppAo",
  "key10": "zv6481R3iP77CpB5Uzg4tsSik4u7Z2RnLEcTEDH4aKs6vyiyFiDF6hizum5YojxBCFNJ25ncZMVnbpAJ3mzKB8t",
  "key11": "3dunixKq54tUet3hjPYqLPJfXvZE3Gomn4QtFubQPGVF88UXH5Pg83NHXtmvRP42BqZpqVJjYTPi3Azi2fy6rjhZ",
  "key12": "5YEJkGxTixLngziJoy5E2mKbeGKAx5DTyScf7b42e223ZRVEVVWMLdsmJRaBZ1e8DBLWKq8JXkvLsnQpdW7arSr",
  "key13": "42mg1zBUwUJBmWgxucAcr8dRWkboHygeGj3xz2M6eAcnxYtFsiXiro9apkPQ7AyKo3iso2ojVDrfJvRwJbvcukKX",
  "key14": "4FsEiadMR7CMpVkKTEpRc3YRrSuipQNfFfjnjyVBUweitSn1JbQgBLXgNekaJUAHYmPqLonUFJZS7fz82nuK5QZA",
  "key15": "2X7f1RZYJRGQeg9j9Dtx54GQAcMgHxy6hMFyTL4zAf4v8UJe3ircugeZPUURwj2oGBxNR44esBxtsr9psZEdahf2",
  "key16": "2CZaaxrj5rv9gwxMDKB67ejhkwfQZBoBCvRmAgnYD4nbtkE9cJ4UJP2CqYRg66quAcHaa23haYaPJmQw7qV3Xo5o",
  "key17": "sq7cFRybdrbeujHGJKssx6dTUZ5pUjjuirf5xGtVF9knoTj5XKguuohYKGH7Cu9k6GhUuymuNWCfc6q9G75fWoy",
  "key18": "3HfZW6EcvjoVr6DmQrn6ueKfiEfVpgQW7PpGCuWUJRYjhnr5Roqc9iLVDzbwXWqvKgL9u1f7P2jFyEQBDuKM2qj3",
  "key19": "sYz9CoKGUgpDpiBUxFLVHqx9BVbjXtvbTUBtERkTTgsuPCKxpJvvtvpccUaJcxAyRjtwtnQRLTabRWjjKvd3hLy",
  "key20": "4Ug8vKgVsdDvgfSbQfj3dXGr3qt1a63tdtd37sUhwjBYGuVbktnisStQXEeMsnA45Yewe52wLghWBE1JLbaGRsBN",
  "key21": "2oVwvXt8KGk2T3YMJYyCyc9UXCzCcdN6NBFEp46wje8T1kd5JAsNBQjHrsiJmVwUr81Wc7FsbAsN4RsSvmrS4pHs",
  "key22": "5sVD5SkfMCCm5wVwpvbyYBPGirFgkRvccEvHk1n1vzmhvwuysMyN5isGxzKEDsbN4WKasWok2nWJRwizjQU5g82T",
  "key23": "461B6uHz4YC559QTFHeN7Mf8fxjaEytt74zg3BikB2EFnQzQHVQLGCg15V8zUfeSUhqNqMwAtZyfgH12djReU6Q4",
  "key24": "53HCAqY3D8L4XgXNnKpcTFBsGum54Cb4NbqSCwwLSdDzot7G27u6bnmTMTdVXJ8nLi59v3Rh4GY9iz4QDixtMDJh"
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
