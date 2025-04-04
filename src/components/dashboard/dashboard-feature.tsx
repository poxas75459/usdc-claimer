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
    "3QTXvfmMAKZ1x8gvFmDuyNRFF6gjWGaLdbWvKs9zbsW7BXpwxMUZuh4C1wsTeA2wjtAm8yBun9Ar9fnJC6zbm4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dBEkV5G2Hp1So1R22BQaGF71Uicv9omXmadcn2enURvSKXfj5Hqk3xemVm2HLsMh1eyTcZosKvDu1vcm4N3qwM2",
  "key1": "Ujy41zRfZaL7ZWo29ju7QZ8CzXjw4MqFxwBPQVqmhCYVCP7CRmKjr3ZZr33uL6T34UCseJypeMSR5yWKcBLsdb7",
  "key2": "3Y5GBJAyL2wpHiwUiv1CuxdnZ6qy4dUXFpafvMb9Rd66kwwSkWpBNs1gJ5XBcmBtahZxgnrxNyi1Ey9jcvKBHaBy",
  "key3": "7LVL4AdenHU28ecge1vS54HsRk32T6uFvbpfZV2Mhws7CEwXoqntktABwVRhesNDU5T4q9TyyVXuWJGBqYJokbV",
  "key4": "39Wj8YXLvbUoHL8L6FbmNuntoyato1q8jRDWC9befa1mrehUaXQYoYPJj2Cd6aFCY2bCbU3PiCnXKytA2MMHnpbQ",
  "key5": "JbNivGcfqpdhbEuZxzG38UG5gQ2S7cFa6vsdcX9gSPE9SXEQnucGGCyASZLrzVMm44GkBcA7ir32NnnHCDPEQFF",
  "key6": "31EziX1Th8FRdcroskvEMGfiEcSnEFLUgp6aG3m1vR1bwvGkyjcdTWkHLyVmjzDAFjRxtUC9yJLymBsXpg3amXZR",
  "key7": "2KwTPcuvXqrQwo2oXv9K3waSuEHwEaD5ET7mtHFMK56q9wrXc9RpAZCSe4HEFpdnVE8rHxm8re1KFkZzGUkZcS8v",
  "key8": "6izvoFE6U7XAzztmSt4kX31FD7tSuQzqvCAN1hzbQqk4HCoH9mCBp1cB7LbFMm2wPRKu7z8x6Xr94MEpSdAFRog",
  "key9": "2nb3ussJ3NVJqgFGytnNRWAM253Zcn4zRL6yngQW7XsTvrdCMfkCPy56h75KRYtnRheEVN36b2uraRkW4PhQzZAZ",
  "key10": "586hxXtxo3VN5qdLqJMwwpYdLT1wj2FEnMPFv6jnqiz14bk5rLgJTHAPNJwaVWoTAMupeAWA2nBatZWHHz1KXro4",
  "key11": "2vNQb38HhgRBSY1kgpz3fLWzaYyHMgLZjp2hgpxDpFnPpExkYqyhhxP7T7eNjjLEajyWN7giLArVaVfd79AspHYd",
  "key12": "2CecMUhTJnDYrMQX5KVNzC3xJyqiVqeDavDPsLuJgXns6VTBeKRxmfq5ZGLtmVu9YGHR6R3DyM3sRbhHg5CTKLWi",
  "key13": "3fvzTXcKkd9qRQRjt7NG8tJn5VVDT4ky5sbvDvwKTPHRmK5LuKKyv6JfjwFHLeRmJQBkAWscBrcXTEt6JxcP6nPN",
  "key14": "3jzRnE8NvSSodPZDa2FmzgNsxcGMfXYTjwce5EQS8UeJAnW31omkL6rMfXouHn5q2wnxfDR4qaDujJQPdhoZf7Va",
  "key15": "2GuKow6CS7L5VbJiygfCe4bo1ougcrSp7rFxkTZG3n2zBcYNAZYuwYKqDiFRi7Vvw2xgWUsNw1tbY8QU1Rh3Dic5",
  "key16": "4sUgvYo1ftMNFAM7x1gpX5tDtSLt4mpWq5qj4mGfJBRbVBDZdMXdkENuzZYrRwK2LzcphLFVsyuKahrmRUidHgcR",
  "key17": "42CokohC6esMZ3cSS1o97ZMRXjN65k5Dd2QgEhypT3QpbdvSx5F28kUmHNcNsLN3vBQtyhuY5bK8FnQLov15JzDp",
  "key18": "JjNYrcsLzX7tJexeVNZgNnwNsfXmBSLqkQVXsH4kTySUhPZpTtGvfLVmcURY5ALLVAdFjqsM9yapzff2mXh6kdk",
  "key19": "4ARea6nRTyGPVuC9M3XaetBEmpV6ter9qaRKDQczwMA5eTwUG4HAycy3pnDjNbLUj8kdZBS1sQSpLFy6bxjB4Z4J",
  "key20": "2vhxzWZoxhUHcCe9VFgUifiVftZiyh7XRWj1Jc5zeUvpbFtvstGfzR5oG4tDWM2FzYSqzXe5mLMs94R7B8ETHyHc",
  "key21": "31AuaUD6ncU5xx2MpUbRKTc6gzqJmBaaGjU4NGtkFXbYy9JSJeuxiqDD4CWd8PfNz9L1xR4gFzMo8HWDEAJaVwwP",
  "key22": "3QZhrtakiT977aYZHUD42qFbARMf1tqXXPnvmkJaDNWhNndH4P3cVzj8tpC5L9prxbjnnenH6d7JNx5wtNQqEGwp",
  "key23": "3eS5BF9woMoDmHiwJzywYZ1fJRrYmms6Pp8aV546EZm6vnc7K1nedJYEQtmitRM5NJRtvKUwi5UKqqmH2xXzYCBx",
  "key24": "5dEzuo13BcZkCXLKGdzsFnD6X3YGxqZxYuLBYQ67PHNvA4CJKFEqJCbDnXXsymRb7C62JGHCCjDkwaR9VT8GPXjW"
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
