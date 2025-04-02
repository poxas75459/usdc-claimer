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
    "3XkJ55bvQ1dPkeJQZeL3vGC4inqiVX9tUw2a3MvUKNhhcCVnYvDJHX9LCroBBPRyaZ6pT1Cq4ZsRdeY3FHVFxzDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cuLhnv8rgTHBLeV2WpTSQWa1cdCcpSMQVJhpodNWJaGft5sEKkWmGR4WCPR3mrCnSsJG2Sr8DwcVKScoUjESKCM",
  "key1": "PEhYNoQ7eBKHVkKUg3vi64QfSXNTLNg2pzBS5VDYn2B2bNVsUe8caBBQNg62qVHZtV4r1By71ASb7Qhtr1h8M8Y",
  "key2": "3ZyHQ9gdmZRyqtJFMMu1FRrumhvnswA2o4i9PcEZ1EtJ6P4ygnsSTdhM2kf1Ge4e91UyqShEzpHZDt6jKpHton7C",
  "key3": "2q6kAyKWg8zNoiwYxCJ4XfuB6KCTK2z5mNNMkVZesmVyc3LchskJXbHjPoT9jFjg9Gft3WqJoXrdfFwkQNLrGQ8M",
  "key4": "3BoLAWSGmLfGLoc1f1LmnQRftmebWQQGqeteL2zzHQQAbVGJfbVfbYZRPicWVcN8CASDbaEusNpZ2AnUximwr6tA",
  "key5": "5moJZ554dXsdKZ5LeyMpJtvybitm9kueWnP5HNu9i1XqvstJjxoNiTaVRtJ3tsW3uTAbKWe9cPqSaUsksYgqRzgL",
  "key6": "3phJHJAJ5JKKeA4TD6yivhLMbRofZDzPPGVR7mmcxmioBzg51VcY88a7wYXebRaH9C2qxHxziTutiLcLKPUUgpVz",
  "key7": "3tFAG6ZnsV8chkhgQYNsogkHWFTUDYi7qmYfJdB3giS3pXB38s3zgrHaHbd8ZfMDV4tyYJagK9HUTUjcUGV7eofq",
  "key8": "7SdY5KWwRfj7T82aaHfZBNLkQuV7AvAs4c9C3ActEQMpBT32MJ8TbDs2uvmhhoogir68A3ABz9xssZrhrTwZfd4",
  "key9": "zNjZjvrjTXQx5PVZWneWok67k4axjLfZi7K8tkYmJQBboAPaQouMYg3QJv5fhADy8a3PdJ81zKyhDRfxwepbPP6",
  "key10": "eZA6KoGAfW3Yh2Jq1NeQaBaBmXP1VrZnivgYqi9FPmqXUjVUmr2Fre7FEkQwLDyjzi5YLhL9Sy9t4ND4duDJm4M",
  "key11": "2jS91G6s2v9aDTAYkWGHRky6pSP3EPjx8W2ndwUhyticmooP6KA3cmMPeQsyJ6dfWUNcQij7nCKoceHjNtCew2XZ",
  "key12": "4bAxKjUkMHWmzjt2ES8fGJeWofTgYpv116fddDzv8a76tdU8JoLSyCRWBum1xWYnFmqnyo2eHfvTQP3juqXpTGca",
  "key13": "3cbXninSQySa7LitTAwykL1Nx7eb2WK4ekBDDrPQ4MF9gkB91wTCtXtPXNaHnM3ku32xS8JLgRHXKntMntWdiTJ4",
  "key14": "3997r53j3wn4u7Wjr5J7KGQk5TF3M6PJgpCi3owBhNBwQpEgxs1rwzxzopZHzfDBtbpsi7DbuiKRk8aAeTivzX87",
  "key15": "AQKxbn3DUjsT22a5am9onwYtXWm5qaEGKowVTHxvyLnFQQv1H5QNiPJhpwhN9LL8NbJZereo12DX3ZT8mT1qK3H",
  "key16": "3ebWfi1vEjsphdTjpvzJoNhBnAWHURpxxKv1CzfCm4MYWPGHeqJk1x6CkwsZ3sqpzbkXEVvDi13ke4gyJmBYZpk9",
  "key17": "4Yd4NPoa5Jok77hZdLsndEmgbVajVAzrRmJLb1D37VMLdn3kPTybPgN92MzfUt7f9aXLLeUZPu3yMiyyxQ88RUL2",
  "key18": "2k9uDoVSjnuVKo1kjKYLGrT2LTHYoXXfMP6VZ3grZRUVvf3RDSSJr4xjFoMmKRTqt3Ecx2nxMhPZkEch6dG3sorc",
  "key19": "5y4kZghobWDwHTKVG6GTQyhCjrYNeENddhhbEBT1y8xbTjgyhGSE9TrQ2Nboz985Z5siaLoD3v4bsbUTtAtZtN8a",
  "key20": "5EhpesNf3tmdX9rD24RvPuKX1apYSf4eypycE7FGQErMXfW4B2L9C9op84BuZJnQbBbLQa9LK7uCCFmF3Q6NVaZL",
  "key21": "3SzS58mKD8aq1hnJKk2boo6rkAgGnKYKFooEjmUejePGsnBUhTPmkc5xbDUXc2ZBv6N9F4tDhAPLCK8EDR12A5dq",
  "key22": "nQPxUffpK2mQSSC1KQpWuS6v8VnuzZMoPKccd6JjnVLDdwbZGDG7UWfbGAUUggUyLmHgF7MtnsUV6ECr65MVV7o",
  "key23": "57CuivQFSTtjM7DzRhsAYFkEKEbzpYiBjYgFrgDGAjeqfyuSKLoWpaizteMirTiuV1US7WAF1DDi9eZPtERc7VkX",
  "key24": "4S2xqjLiyZK4CqHi1cA3TYJfciXBcTwbuSiP2rCEMqGCbGSxLRMpqxMF2iXN2MbwWnV24gbHgaVj4aHEL7nT4K67",
  "key25": "66qE29siAFUxwtXFuYnR4tWhADxqjQr4bjdYaLH8i9UFvLzG9TQzyn4bkbcteLDz9BwrpeY25DBj6NBTz7pEDmxv",
  "key26": "3r37KJifvCaryEjrFjFgSX5ZECXCew79xmfYFsQrZaP294rdfFJkX4Hdb1Vy9UMLxwtoGRkp4LJTF2UWkGqN3PPg",
  "key27": "2Skq1qg6S6eGHa2SFNDUFVPmdVmyd1tdfbA39gHHv8WdNxswbyWvjaC5r4j5petf9Sr7rRmovRgXHjSMqzQEE3LE",
  "key28": "Pfuc9mgp7DQ7GmM11WPafn4YYc4FW4DXkpzDbWELtwqRzz7yHrorN8h7tHg9G4JkF4N5WB9711VYMopiV4tJqgE",
  "key29": "5WLPNou6s5X6JHjbfG6y3gtqZruxy1AKC89ZDPTy8XZHERZikHsQuc6NZiYJJ9QSE5Hbxn9n1yMtVJYYNd1s9Smf",
  "key30": "33CxJbihoSy9Z9VdW5SFJms88toCHHhJ6qA4iKy2FjNVAMU58m7hAHQh5hsB7qempPEh62mY7ZAdgFhkbPhsutsj",
  "key31": "5ppeGmWP1Mzqh2qHf6kRzUYgsmNZPXXQBkyYDrMhc4CrpD7dKLbyvdivG35ttfHfDSjqvPYY81R8U3yeM6aFcUES",
  "key32": "4mqvcFeMXKhCNc2Pwu9Zh8QNAvGXy6BrxEopaRvsYJP8cHtEGFqeaVsPyBdovBB79GXvhFoSQLvA7csFs3JhaEcH"
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
