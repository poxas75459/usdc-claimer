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
    "Cwr8cHXPULmSBVAv4a7dBmaRbT2wDHJyHaHZzrz1mHaTTZD41PZ1zBeiindN5ef7882A5PXcwmWP8a4ruuA1fi1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y7mkVuwgqb5pS6FULYdmm7yyHMT1dJ5ynZLfUTtcwarDghdsqt8Tbpxw6CfBZoKfyhcZUEsWBggU2Fcfu5Hcpv5",
  "key1": "JCEQzjSyYrnphGbA4S7N868WtPk9MiJv95VNBTCnHd2QW5jFuVaN3qGPZWg1PuuHGNkGPpycX4PZ2tN5qAWFxka",
  "key2": "4HXixT287DqrazfzEDoa3QMPYGCSGDfbqtXXwDFKEPycyCaMj4B4b6Gk9BGehcsN5Tpne9A7HMZ3ExxrXHzSTd77",
  "key3": "3e9oYGgN9PcfcynUFMLadbVXSi8D3enoxZEbyrY14brRJ8a3Ep3BkRUjVZjcrJtnGbx496mYsT8a3iuidLWzYLvM",
  "key4": "4xmAF9fNBa2o6xUjJgfifPqwhCtFXg45duVvD42rSwVPHzuDfYt9LN1umj1VBysSByBvNqfuB7zvchzrUvrmtrFW",
  "key5": "2yT7snc2puN4obrfp96j3d3PUZkAnuGkzYitrYLXFDseJ5tfCaRzHuU4cgF2psQGH7mrKkSPUWrAwr2GagzX7DF9",
  "key6": "y5dpoBg3mPCHbCbRNQq6f6Sp1UyeHQpcWkdJnsaJfJ8zjQnJXw5L8zVPujhaXoNkxuatPnzx9yjHiv56GMgkdPL",
  "key7": "WS8jJQc6Y92pYunVFy4d9uckmT86JjMg9zpWJ2qXAxZ6xNHb7k8gQNdaFQspsXF17TBwtzvwSjUEPekrLmyWmdj",
  "key8": "4QG2fdJ7zwrTQvaw9mL25jQ51kc8XjFvFeDuHHayffT3sT4uzJxiHWQib5RZRgFzZAKayXr7hmeXT68W8apbYYCx",
  "key9": "eYtsUVbAoA6wzh2MLpKfFQhahXSDknKPi5WpawcgX1J1BUqTt7dVL34gZizpgJheiRngkJE2NnyWy3dsbwXMXmY",
  "key10": "sCTPQgVFCAyVb4kBDMX5vFN4V51m7fkNMkA1wURZu5cAr2WYSVqEnb1WHK4CaGh1Frsqujppo6ZjEpaZyy6ZLa2",
  "key11": "5F4xggvdoxTAVnrh72SWVYEYPjhr4ZEvjqP1v6dyvYogDfGHLUbESRESVR481YEYuhi2iLkv4SbrXgRhxs7ca8qm",
  "key12": "4kZz2HM3J3YWVNXS1AgT1P3PSpgGCqJ2xFwkSBggjN4zDdJi8BN6VQ1zj8vBZpndV2tRoyK7ncNdNxYdQnvb9gQ1",
  "key13": "3nMWL9Mq2JLT4YXATn6T6tKRoBh5Yfab1y2pHnzpBaNjNe2BRTW3UJounEKWdk1YHKkn1YYc1wMfv6ppEP2Rvykt",
  "key14": "2GrgDVyFG211tdkp4QhcAz9ts61f4wdh5BNnWrJs3pwFGPeSbgae6RTHDXoUWTYvpnipGqGvma74mfTbeUuYgM58",
  "key15": "4g9iDMJLc21XgtMghqLsgo6fZSEAF1ZJGQTYC3aT4f4UeJQpLNb2L3hkQHgvoQ6ifRyPPJ8T3iFJkRme1MAemuXD",
  "key16": "8p5aTSxfnBWXSQtbZyrpfseXK4mRo3HbvGhPFKzUaZzPV9x7kcBAU63LxuNCfnQVmj4WQRhy3zuHyVgm2drJam1",
  "key17": "5ntqwkVzi8vQgfBEQ7LCsQMoob9NYcVkgZG8nTpPsv6QGTQUoKNYdsKYFpRP6rbSYd8u41fP7xAfKPCmy58wDRXq",
  "key18": "2Soas6dcYemuahsP29yN86YyCkxZqDesHKvB16Lt7GURkaFbj9111szw5UQoLSoe85VzLRF5eQz6gtBUhfjAMg6Q",
  "key19": "5RU4Vz8MRFiGJ2P7cptYWWLr3XytBDZvTU1rqSUhc7Nk7HNg4KqxSQhYf5kPwGQPWj5qJqV85ux1dactb2GstSYS",
  "key20": "QhfvGbN7ewMZLrm3ErA8mq5kmwyHvbytYWaUw23nwfGXEcNnaVBf27pnqmTpPEvLoFFxqiYUx4EFU5VK1KVgbbr",
  "key21": "436Vo3P3mYfbuu4mFKm1PqmKPbmUP7SCpHpZZBwVuamXKyaHnxYUUL3niEhAn7tqd5JN55wLN26c6etHDzgdb5nP",
  "key22": "3eLnDT2R8Vfmqn4saK8HB4SDe1M4ryoh5gGZwDUP56FDVJKhA8P8QmQeyCnyuDtsroSDJwXcH3m7CHX9oHutMnGT",
  "key23": "27XYu99LAYK797mcyT5621VVnboGevPQvhjp1jBp9VpP7cBZfyRsBNr6H4KU1JvWzTWvZR3tHjZ4f6nS7SheqqaR",
  "key24": "9HQjMhvoCcNq8RYL42PwpTy2HyXzP7QTETaNfoRR7TTfu7nARbsgeJqEB4W8kdd5nZQ6W4NiYrSKfVFqANVSfyz",
  "key25": "3tCMp5muB2tBzApemrPgGxnW3hFobGe23T9nMwFAd9LKG1CsCsqVkTBapHqXVMcmPJ7vEUi9zEzCpwWdrxBSsbAr",
  "key26": "2rS6BNxdV9RdtWUe4VB29yQ1C9uhxy4gm4241AFpNZksodjEnNSRUR5U9n42JtUwz9FzxiQ6b3GysJw2hVxwwa97",
  "key27": "4uC53WtQxPzJPjuef3i4W7KNGjWjNYah1QzM3UuTFsubYkxH2qNyscTQcZ5JKL99KZ5dPUgvTAcc8MGG6V2eszwf",
  "key28": "2EaZf42NJKXbKziRAFz48uEih7dYd5SRnGigycXvTpMPzBj6rX7yChjvCvGjS4gB7diAjdnU9h2Tt31ReTVuQrcA",
  "key29": "578iTZd5xjXRX4QKr3efZDyUsvUfsSJXAPyrhSaN2qAdXpaL6jQg6oeynRq2KEU7uneYrwDxZ4J3FK4ATC3My6R",
  "key30": "2kp9K2x2PPvzgng7zugWWd2RmKRtUk4MfrcZyT6RVfYK4r6g8yzqP27ZQiDJHnYJLfSW8cCXtMrtyAXB35vUzU1U",
  "key31": "4joNytzP3W71uEjZKN78kGKoCZ5UiCp3LTcLDyQKYvhfQ4uBV72Hke495jy7kW9NRXrCHeT13AuNK8TTUrJEb42w",
  "key32": "5FRiPksUsT1fUdH82NpXnJNb11hGriaxFHXwZXAYRVS5vs6XZufn29uS6yPVz8uMry2bq3Bcoicge385PWgduefu",
  "key33": "63eUYESnZRyQ1YkTvcYhmfxNdYmUkf5SWAHAbGEfUGFV54Fo2KdVpnECT2hTozMw8wiRjNUgukNPzRjtUYDELULA",
  "key34": "2S2Dj59P6sbUrs1Vn44qNZ4Afvzg7ooP6oZD5PvWvQUzEzPKEfL5jDZa5bHitC7FGCogNB9ZtQTyNhCvmvoCByrA",
  "key35": "2GZvFQKTsCXwJX6p3YvGe74Fj1iAx2FwbMGWtzwueNfgSGygQNNozgUHLGc9Uo11DRtbNyEMFLU3H3iDMRgzegGn",
  "key36": "62uJUiptTu7YLxWBrZi83CAsXTJhU4KTNPPPnYP7NVGvtZpXC4Zd66QR4y4jARfLKEsyshxEhw9BMoQtoUUEqsD4",
  "key37": "7sEXWAziLaVYWfrBJ4UmKP1YkYyBwoZZpedj2FkhbZ5BciRswUThCynwTfhSvvdnFmNEbxdC32abJPiKe8WSTTK",
  "key38": "2CN5DSssfFuCpGsdrStuuu8jZ5wHmq7C1KiKkzd69JcEqpuBq6tMVwBCKYKf1rbnji9C6av6VhE3Vdgnnk8Gsk1h"
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
