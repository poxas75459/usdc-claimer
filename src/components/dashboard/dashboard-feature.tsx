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
    "319J1pwS86VDmNZAh3GjS3coFeUnBiDPThiu4dyUGUFEWxUzgJm5bUtnahGNJgxd4c6APe9MzHc6UE8bhfJYxKgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HA8QiVHEjf3EsbsioiTMe9Q2qk2qgZJ7Mp4pVyef3NpbL7LZ1CBvtwH65kgR6QGX38migCeDDznHEBZ88SDnKmK",
  "key1": "4yrVnpBdc7Mqhyqph2mSngynGih9EwgnVPyq2iYRQxPuFVnSsm6FrVDGTa7iFkzJXCx9D3sW1rNgSqnfquk6cqQE",
  "key2": "4czBeTWsbwhyKw1SxHGxxMHrWUjPAMMf8uXAt3pXsYVJZzVg56mQJtHo9DENAmVRRtVEJv6iLXfdAgC7QMmauN1L",
  "key3": "3o2t1KtrZ64m9VRZRgvc7BuvjpnkWreYNGcZetrJuG9s3JkRAHR9cnFBcxuAvHn9UjCsVSVph9gd9y7pkcsJ1aC5",
  "key4": "4wiik93qMdaXkEwFztkseh4DTF6uSJ65SevA7cu3RgvqLSWTuAt9pR8Qax4d8z6cU9zFdH1FMk1m7epMU8pXrkib",
  "key5": "2Hy7Hy2JFN73BF64p7X1Kx7aDL6nnfXruY7ALKoTdGVAiDjQ4ja39D5sQqnFDQu3RKH1R2EY44TbpX8syv8kxzBb",
  "key6": "2eo8s6FhBG7tewVy5cJyVahp7ChJogyXcXR5EejdNgRnqPhG7KZU3Bq4MBaiRL7tTNa8av38dxbsfZH7m7ac1jRM",
  "key7": "2o6d3HFe11uCJQd8iug2joqEfPwKfUWNacRQvvYhrftoV7UptzDjSFdNuuAokNvcrEufm1zjsfmpbkji5y29Rpes",
  "key8": "4yxwZUGWKKMEo7DAahqFSS4JkPAGuZDhptMfaeHGn4m6wFMVGBWY3PeNiZnAXYot5VEUZNCQyAayx31dxVyyWAh5",
  "key9": "x6zdjRPvRuGNiSwu2VCX3zrPkQ9SbHzGNzhFLwsxRKRGrT67sxj6pd5peEV7PnwCTYVHSfZhhw3K9MdtvDm6iqi",
  "key10": "4jBKLaq452d9CFmDxMPWSEnvEtQjHEt7tsAcdrGzbnUkFcXgNB13kHwTJvNWYcoEgJbeGadrUcNdQ5pd2c2FSJRH",
  "key11": "QqQssyiZ5RWdwVSsv9dqvi2Lz17RetAv2GRSWJ3Lat4XPSQyuGTuKd2xgvk8n5zjvGF7CXcErSK1eTqbh5uQSPj",
  "key12": "r3nr3faWRqnhU8t5oM7XvVKQoXnH2ETW5whqr96JZpdTbsh7p6sL4fLWTmMH3GafW9KZPTxUkY2TW9HBiRnvNiB",
  "key13": "5ofDJv3v9o5L6UYBDh5xt5AHGDVkAjyDXPPbj8ZdZhcpRsMCZNcHPhHzRtt9aeKnXwMNyNLHgzA9V1RqonTMcaye",
  "key14": "3DZKvt95UrpRe6ytcGQZ7Ht3vKoRMWziamqaT4XHY2uZLBktJ1kNN5LVo4KeHBUKTqK514dEHnNKYB2FgpoPrvvM",
  "key15": "4gz6fJEMPuij7VRQkLb9ykimG4Nz6j4iU322dfoaMrSAWnm8fGZ9peZX11HoE1TB2exRz7NYAkxCADw2F4n8wotn",
  "key16": "128R4SjbGBLNh8UAQ91Lg8473ubZ1PUVsmDTqdRPWUyDLgBwesVKPR7FdJur8fWjB1LypKfVcgLH5ycJPZfUmRsL",
  "key17": "5US1hyMCYgF967dsE4fMhiFcFkqUb3tabRvt5AgkZJZLT31QMcwuefSDNFyxvHH8QkoVHUnsapGuM5CTn57G81pq",
  "key18": "3Hhev1wNwpgTgi8srqVcKMPMbsDSg3YGHeHKWFhmErL39pFWoAQovTvf7KSpEPTTRfnce2UBjYPJzusSTTx5Tfp1",
  "key19": "3xPGBZY3Vyh3EWHvvV4UhUbZNQucEwhzPPdsA1iNi6zxU6BCcJraHEq8Ymj6o2fVB8CC41TgVbTXQQynKf4brVRP",
  "key20": "3RnEXdCeAvBucgkNm2hsrFmX641GxqWio75EezkcjnKbrhaGyjLtUi6SfF5UTEbs4Mi1cRqPkojXaMcMd3Wt1FHg",
  "key21": "fQbYDhPzZeGXEuzE1QPGkbxBC7psSdHFZ5F7rguKA6VKEYRqWoXLnFG4u1cwXgYYA9bMRfGhULkQ7ameQqRc4QD",
  "key22": "36buMjnwyWL7h63Hcsn6MGoJWbeC5vtYUTY6ff3r7VFodNNUuUjUXVwEHjpK6S8ZUzAZHtgrM242J1qvM1mqfi3t",
  "key23": "2f2zNMCsLko7MqNfoYwERqRRHJfV7yt2918ffiwdWr5WBxKwerGVQbajhUmcwpt2rY8ecefiGHd96N3gsyrsky9s",
  "key24": "3PvAMffwpLedQXMEy9kKzoXNjLsM6zWezxNT2vbfE4kaGgq4DFF6BSgNGCSCSWHraToaQVLnt1H2f9DqcuRReUgR",
  "key25": "4sQBx3Sxphxszxf9RNabcERsSX5zJDiKWcMGACnJrynacc2ngu9bF2PPK3hpiKDGoQxgTA6FJHTshxYYMwYLgjzE",
  "key26": "49tGUu58sPBaZszQiXeGST9rZgWeGJqyZqWgZj1ursMRm3vYrzWifgEjj1cdbqytL3VzK7aBwgoowrRvMFWimJYf",
  "key27": "4X28SCUxzw6NRLxasNXHqpkrT5FkLrzpwkfFBspj9cncXNyPGeUxoHn2ocYKTrBy2qXqh56ssAKZfrw5C3YGAtGr",
  "key28": "43bE41qkozV9ftEzEq4H4tyLWLR7DMV2ErNRu8Uxph514MDxAkCvbSMex1Wy9Ze4tjbR4iL5iqU5sMVbbhwYsQos",
  "key29": "pyvSb6Rea6xnSUr38xxpcVtLkoZEunrs46iiZgkQ7LiqfTVp8N2eC6NAaZcSreDDXSyBdzpGVCsrSS4cdZMpmSo",
  "key30": "2rLycLVEvuiNx6A38gHfKMaJzEHdR7BEaHEXJmSeGMbpqTntpDjr4mJitoT8M8oiDbCkhbL6FT8nRtANVLFhFxqd",
  "key31": "2hiax8Q1jhGUUTEYFX86JV9id3kcYocWuzFYTtGsXtjawPvkmGbm9xCS8ftNkQWPvFtv5PSUTRcHX3deK9eEc3cy",
  "key32": "3ziSVrPTydjn9Z8BdzN2MiZX6H2QY58ytBASC8wfP3Ej1FNmMnAKHT3QVkcKutpHnBW6ebmfpJVU2BZA8xHJNEUh",
  "key33": "TnikwPhfPEYNm7zMoL4L4AAfRQ1UZPKeMGguvK7HMc3q26C8NwUvphP432i8DhHDsjnc797NVWvtDgoKEydbnzM",
  "key34": "5fmcN3U8GzhjSxZtDhG3SD7YMTwRBUvGRwVLd4C3x8BSZFuGcXuXzJjpRAe8T1jf91xtHW1GTJnhNqPXsQFYxosn",
  "key35": "2wsmRoqkx4H3af6HyySUpJmryFSKCp6cK9L4dAKKKVSBH2VP5Vz9EbnU6MLq713fsoVbHuRJcY9jYqa7Hg4vVJEr",
  "key36": "3AvAJMrvKm9TQmAD6eKd863JTRigdjjtyw53BR8skHL2ph2BWyEu66sgeG6J8miWF7vCqwBAxs1DEdPpgxwitS1b",
  "key37": "Nkdq5r72UqsWhXmAVwuYV2VzgVDYFpz6f1crJEXKEWteH85jirZZa8qQbHxZ7Q53Y4bUkJTY3gvxrC6gQgyyveb",
  "key38": "BVZxGezoVwhWYGPsNJJ4P5yzZEjxGg6gwdCr48nXR3tWvmXQB2f5bSjfYAzsX76Nek6FGeGSjGycg2AJ1LRSzT8",
  "key39": "sNLA4sXQSGvDx1ujnrx68MxD85N3A6CjYGMAheHYDqhtRpwEFntrDLHpNEQ2Wtjjq8ADchGRmP9kKMcJUiAVppA",
  "key40": "4ux7oW5UTTGz9qMgNFztc8PYcJL5LCZ6pF2MsARGm5pWaPaTBk4TAongGwJkVKA28tp4Crh73784sc5L2HjSwiHe",
  "key41": "3NBg2jcbXD7tU6FUoLRZAhY7bKf4dc9SxbNZ7vGqQWPt1ETQMDNGc4PudRpNzWHsbFhsnFFAGxXeXhB4tmV3mo6v",
  "key42": "2XNJ2dGqBau7oMDhqPTVh4iUy3ZNJeeGxVJkQZVKQaEgcbNXTcT96tMjEx5HRFNv5FPYDf1V4gQrH1UffX7tTu4E",
  "key43": "5aEaZp2fmZwSxFaeeSL8pq1iqfrqCfdJ7XyscfgCtDeUe66Hf6FbQm1XwJbX8PsG5L6Wy1QREAJsTPDrMgM5yqK5",
  "key44": "3ZFH8go1SirZdpi4jrQqfVaDaSgMSPaEXdJ3JopaoCxKZmcSgdB3gmcUyzEoFr6YPX4fxBgCZM6hMR8HZCorsCw3",
  "key45": "4VfScsS7YY4adD7C89fSzV4HDhhKKHPrXrPK8YfZkm4UQFqF67sKNqCmzWEuP8gokGbHdx7jsbGdfpELQDGRPGRE",
  "key46": "591V2dDua3Gy674gCVsq7kBzT7zy7Lxevd5kUyKwv73mkcictwxKLhvfT1aqQ23M5mRqcw7rKmXn3gseBkJUy1GE",
  "key47": "4CU5rXTEekdqz7whcTjsSkckHz6DRN6HjiNnD9K8f8GQr93ugPgr1iCykeoupn5xDAhfh4R1x55MhrUCbajDNFrh"
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
