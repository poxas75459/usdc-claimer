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
    "3HN3oDnANurbKQs3LMeDaTWJkEJg3i7EYu4UsN8HyWeUcBn9wFkQDVhXTJS4yW54v6hofMDA4pXFeHgotfcXSLsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WVyaFspMDJVLwixnDdJSSt4Q4ybpNtheTYXFXi2GJPioAnY6yffgmFPyUUF2LJpjwFLDqZa8jn3pYfr3hDmPkyk",
  "key1": "54bSzA73gGVsTocYNtHYaQyzi7m6Ujh1zNt6T9ezD4ZfrNLqAZCApTWVMfwSTWLpSayxMRdiVrC3m2gU4yhPUCMW",
  "key2": "4dBxhpbJrg5iWGnvtApDz9KdSTEkbwVprAmCYrxBqt93TNTyH8JwNjyGr4Dvd1nAHb998Z94ewRXizWUNEaxipmV",
  "key3": "5GT4jL4cowfJ647pgRs4bUgRpZZQcYutLRqFiLKKaNYRRKvU38vWxChqfc33UNDqWWD7pNtZ9ZrgErMRNVi3FyYN",
  "key4": "2kf5tBpNKtMTyEPrtyGTyQwkLtFoKL4duNrh3zYChpJqG3zVbM7BGdQNabSuZDxcv6vNN444jC6KELNu4feBnDXJ",
  "key5": "25QsuhurozipsWGQGazpkHZ5WtkPF4xyWBgQu48UNp2JTHC5aiGVZdesNno95maZJjdaz9Suqgfz3GBk4nAqKkD6",
  "key6": "22kZcTnCgfifyGQQrjZ65Apd6X6gNMDBY8UEZ3k1YHT7jEKfYx7VMsTJ1hSWJGMJiKqMeeKaxFsMpAHvU52bv4Uy",
  "key7": "4DG7eYiENkroNBy817SBLCHY7rnMWvZxZ58yAyCQuK39cr4vGV9E6CEZXiRPE8mukcxvYEWavqB2e8orMP5oAaHu",
  "key8": "5PkbzZBr6QYvFnCCbzMMQ7Kezs5nYbJMz1z9YbKFSXr77XGYvDnZoMzwt5iS33hNYg1nYHJCcmn5NSsiWuVXDcvK",
  "key9": "3hM9YA3f5cs81eARNMVMwvuuDcw4Aq91DEVEnMG7MF5wSmeMwWduvhJzLRgdMcAkSshBYSd7jJF3mxbQtEFZhpRb",
  "key10": "3gqsjHRynd9zz3UWjcTW1nogSRUqhCtK3GnQwKYR82fpuYusTKdSa1Bk3QH3r6nvTZcHSPn1GhWK7vyH492wHu2N",
  "key11": "5WT4zvXWu4a4niFQX24RVxAPQgRM2Z9Lpu5RX7WX8pkeGGgSkmvuQBDSCy7axs4h9sZaRk8yfmWsc89GZefVef1t",
  "key12": "267R9qrtpQtW7zAVsTvDpLMu8YeXj78e7skb9nJ61ErNg1zoYP3kBv7FKhJ4c9s9sbQJAUdmhzHbPUK8GhhVaXY3",
  "key13": "3BAEVQa1DPtX7H3mQQsMK8PnYHPTRdfE2wQAGhibeDqqduNKvYnT9bSKo1LtjP6wSU7guWUse3b62YDGaFtRX1Tm",
  "key14": "yPWdQXxP6s9o7szzJoHG2TNr67CV1rXLaDRjHqpP7rppKURvYWSezANw6Z4TU6ZLPYtkYU1En7BzsfuyYmoSGbD",
  "key15": "3sebeXwAMUNeTfvjF4wKNS3vta5GWwPiJP8YFDqqr6mfNHSNPtodE8QHseL8VLdRKwQc5aAXtF2fKByPF8Jdn4W9",
  "key16": "2a768bXerBKUBruRp7g2GZE8pYVDd5qPrCMP1mM48GPCCuwtq2zcYfWEAav1QNJruLJvYpViEygTNpJwDh3LttBp",
  "key17": "52cB6gh6QUcQWfP34Vq9ytmCY78umcv4tx5LPhLSfhERxrTJxCDRsDR8uZBkkZLNEWWT4BL4cuNCY2qQ5N9pc5XN",
  "key18": "4EHW2YLZQKEKDgAXbdQxJPRhGssGW2mFxqhbtDnovT86hs5BrQokiHEhgujoKu7pr91UwXFMHJy923iG1owUo3R5",
  "key19": "3nyGbwz4w2129rnR2Zwxpf2Bf3J1Kd3XktW1ghD2MCVGRcSAbM4KYxFerD99vYAHsj56PRsg1ZpLawAh5cqK2oHy",
  "key20": "5ikj6q773pAyWhRMz9vT6BjXPF1qsnjLGGmFGckjfpVku56FazcwYawyJj7kN2RCvbw7U9LdQtPy7feDEGx3TSqt",
  "key21": "5nbeadTamRHpPqseGBjQvGLH7ues5SjuqCMF6FxmJBXmEkeLr93g7Lto81NqxFHTVDR8j6nD7Dgqp9qpzbVu2x3z",
  "key22": "4xbLRpkGxHoESgezCi14WEAQ1TzTWktQT1UKUoM1E2c1wpUnSAT6fVKkG7jcAdnJQn1ntJwFbn3vB749k9e3Czdr",
  "key23": "4QZeraQwepn7zcaGaT2KzfmJyyekvMqB24vedikunVf1VFqr2ZcXypNggbNSczHKoEqafwkoGi4JHtUe75tTHdU",
  "key24": "Sm8mozvXfJNqzd5gqDMx6FuzPQDX8FexPA34EoUup71Qqm8DMCNYDfmrpxQkDmK3HriESJsRCddVgRyRfDJ1vfS",
  "key25": "5uroJae8V8VUzDjx8Vn5H2ezP9rwK5Bq2ErUbKBobWcEWX8ATikJ3JvmNVyt81BUh8mxXgBN4xWeKCTD9x43AN1P"
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
