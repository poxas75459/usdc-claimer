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
    "5jyZbNmKsrdkj9N2mktT3gxefZTFnkrkNmaRDqh3huGSSiuGzCb3KjPqgXTrWqCPooHN3HdHfrU2erHxYrfkSpW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4my3L6s784SXw9YmsPaQDxgEo3GxhN7gK9mAGxjAeb5tCr1BmRKiZLBZBR45xN3BkqkGfWJGcaGSdYETNeB9g5p8",
  "key1": "2W8HZzD27YbGfwsWu9kmxiYkSWnTvSVBvK2dUyoNKjF4VEjwdvnNQaGX1PAhJDtmXtwfJxW1SU8hfWy8v4rRTDpk",
  "key2": "5kvDYgYYEhQBJrfz4c6jgNEtuduGKpAdEG2kM2uWdWGYfh484Xj5wExj5dNwXjsBAtEtUuRbU9sjZbtf2qz6cac5",
  "key3": "34hyks2YF6SLthoxNs8U4u1LZW1CKDxBUuLwAXQqtsPM29PvNGTUYSXYVtwfzuRVLHbLuEqrTjgkiGvcvfwwEakx",
  "key4": "62hj6Zt35JGRq9Luk3A7gMfh6qQXMW7DFKAru5qzt5TFiey5r4TKgUzckZSCLAFn8mCHmsSfn9sidTVJY9bDMNDw",
  "key5": "47K6CA5cZ8ftmF9cvJtYUNU5fiD5PU6zSj5HGg4rnhY3kWLk3cwcv1MaGz6uh5X6bcSRvGYcUG9KB3ASQocMzJjr",
  "key6": "bEwjDEkZPNF2tyyTooKx4U9Vrr867uGNBGtPceRLYN4x9ybtmTtmJmrKfUWv13CKWMwb1kxuqXGMK3hh9gCivTj",
  "key7": "48gCYL2kRVrporHgWhcz6d7FW2wSgrYGhTPfQU2N8y9HsCSakeigLDBMjsVyRXgCyUnmDfPHfDtaKEfmd9S2Rxsn",
  "key8": "2hFpZmhxHdW8Z7Y3CFBi7APybgDtqSz2nPoVKJmgabneaZWRq3uhRPxswZ9chiSxA91tf3pWatzMWLMqg5rj6ahG",
  "key9": "5grzkqRwdqhurYFUi7F6J2wXdxC9SaQnBjm5qMACkhrsMLPozKFijADYKppnkKapiScU8pnnbXZhieEpM13YQnm8",
  "key10": "dVGtPTVnGtPgaDzi1jTD2ADAYTu3S7SrnC9x5bthBJs2nuqNdhfCXE5JWXsQirfiQ12AcsfLAKt9u4e2kBWY4yw",
  "key11": "2M4U3FnqYkjnvpaazWKeiF1kt4Btj99reB2L1Gm2YoDvdFoMav71kuHvt7uATqfDv61CaZ6coyP2HFkFGVBsqrAF",
  "key12": "36ULTmqyv3Lk7wQL9Wnz6WMF88oLskE5bFNrQPWk5oCmBwwspsLtMPUPi6F3ubTX4rE4JNHCz1RVHu9YeUJ5NEK5",
  "key13": "5JCRx2mrabi3Tp2yFJ35dQn6WoRvzeLJ9fXJTF1CA5ZWnb4sxk9KytfqxAruishBXJSoyzJ8xPYi9BWHKm6Kd6Py",
  "key14": "4KjUeVeSvqk6rRKPJcZtrg9M957kM54Pw9weetLtVrQRo6o2D5d85U3ykRsQTmRhsgovL3D7EsomVghgMdZXa9rX",
  "key15": "E1k4i3t7LfPNPpLABvDoTUMX7CyNTPZWZobkQGWaDZ7weZoRgJMcuCgRUveHd7p8D7314TEAFnUzJnVHfqUv2oF",
  "key16": "5bLb4GTRcAMKUWrbZNNgNtvM6GSRSLyk1vrmyGsatKYnXSDwUGkMperdLXPX1xoCP5UiPm8KHhPobJ16P7u9mCd5",
  "key17": "32XnnmzqSwtyR7JSJuSi7fJJcyXT2MxbVyyZuUUXoo8X8CM4DhvwPRbbSjjFU6ahLHG4i7gBXTVfz1MnYA4pJiEZ",
  "key18": "DSxSPz2jeu7t6opx786hkQzbWzRDPVrBXDZhmtdsSve6R7yc8dH5KJnT1Gs6KiRppsU3aGarrJRi9m5nnmBDn2v",
  "key19": "s7yH9HqMjf7U2Gef5L4BkjLGs7ytFCu3Sxy2cKuVhsqnYhLb31zB645tdncBVr8Pe6dxLJJ9oWoA3Ccjece1vew",
  "key20": "3CuDwhjXodmfkPVuN7h6WaeXXyjjAVtEJRNQx9TY5JRYRyGXNp9DUNNRRT1yvRVmHtSsQka5LBr2SXHZ5N6vEjfq",
  "key21": "3VFTg4xwY383uEe7iVYi5JddmHX3Jvc5ph3x3HUTisTF4uEDuguUayGHcFmVX6jAAdErNiKiA9Xtpwr95ff7JvaN",
  "key22": "3Fxb6fQLB4ZARiCsGWdC2Mu3BnvsQCrgYZF5XGKsN4i3QP5GrrMiNpujn7k4tEUqMrVNkq7vjbEJzESCEgzqLt7C",
  "key23": "3RhmrdCMtgpu9QEYngUjNBaVcTws28NCTvd9aWcwsyuYoVrXu5UuT8xL9ejKzA8QvmjphxazJPjjiD4tcrhV1fpM",
  "key24": "66AYHvAau4NFrASjDbyhJdZxpujK9oENkNM23y73EWyhn4epvbNQ1uQSAL6PRuCtXAjng52HDDFeDsq7kBToyuJf",
  "key25": "2zbjAG3wL8c8YmuWcz4cmYWdhfC6fQ9NvqvipRWtuGcQcUBjfcYWzPcZ33d5vx27zeNQfQabacmRGi2uijq3U5dS",
  "key26": "D9EyZn8K9yALF3ppSfKG8qfK1SGamkuY4K3tMSHyS6LdUMdBckkZ6LR1ThE4ePN3QmUgRJkkAeCH9Luwcsu64cs",
  "key27": "4Hrf8zStUgAfdLQU198CDq2VXvPgqW769T14joCysxY2UE6vS5aCFALu2fqXkQdHhVYv2gpzzG9YoEVJynumHyPN",
  "key28": "5hf44qxzasry3mqgGwAqgXXinXcn5HrZ7JLM3ig7p21s1gEzTs9maJhE55pjVEQotGUriu2huAccE8Q8G95ogxuj",
  "key29": "TERjxPnYSVH5fCmPzfKgdSWBaMVNo1HaFTcSRaSeGbm1dnFqmjGQCvRM1c7KM8iZcnJoSCHFDtJSVTgHx6BynbH"
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
