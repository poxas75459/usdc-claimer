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
    "45o2fYypyRBZ4egsp6RUH3TbTDvhSLzUmLk4KHFcq8cVg87kUT9QgVESP7Q3K4gto4SyLr4ymbDfiwXQNvSAkXqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "221xm2shdxX6eiqJS1rGPZhETYQLhTGXySofBPHiByzCsjBPVV3JL8k3rXWKhbVzHRyYaxP8Lq9UEaxNSUgGXBSN",
  "key1": "4BBqo6oM96eGwWYWUhMrttgBv6hsSLhKgLGm3tamXmLX5K2VLe6LbxfhYiTCPoLQwBZhhi4ymNpJnj6bocBDZxdX",
  "key2": "5YBpyrDaojwRC6RQqx6atKMacc6kYyycGAiQR8DeubfxhfGq5Cz4Yrpt6WZg1xrSm7ymPfZxHvqw9xJ6bC5X6oCH",
  "key3": "5jwZdL6zNA1bPuNugTg9fzhenLA7WyoXPD2LUcj64kNaGfj7XhJwtMNjLjT6DxyzrezFNcpWmxtauuXPujtxB1iD",
  "key4": "2WheYuC9j1CANZkAEhNzdgVf313oixKVdPJ7bUWYDiwEtgAF1vkeM2GCJzggkt8hydsBQVvxALvAgjgXT6nEWUxK",
  "key5": "2vhk11YPDvdRxUdDgtFh7TRUeVJsPbP9bPxocDJYg9Ykj8yaTsGbsYLnqZNn2cXEwSZhhDW7HsUPu3qdiVs5vx1g",
  "key6": "3pEXCGUo4ywUC6QRDARVSNM3sMVQjuxvcpR3NaEDNCm2EAyhLJ6Erd21Rc9KxVS8vsjYSnrCSEze1coUavcNhd1D",
  "key7": "UV5Zwoa4BmxYooks2t5rt2DiXN8bEEY7fKj7kWDsKqjDSbReCNNgAFQdukZVieXqryWdPBieC9tpuyaW4PY7ELC",
  "key8": "4h3Zf7uVjpsYd5TA9RETLhPpqT29Wvr61NoeNzKgMYheYAvsyv5EjGDVTzsJhzygRrVrKVeX6BedpswnPpRWqj3N",
  "key9": "PtuYfUBcYMjrjwkswurWGMkQsV2rpP9wr4gFieVLJ2ug7t3mX6eqCrFJRbG684fhbFWJPwHthKtcuaadpfcatwt",
  "key10": "YVx84JBM3BdnECUf48Qrv384wS2XnaqcZ2h74vJKiANEnDYaSzKnbEPJxSkWTcuhP5PJRw58MCohk8KtATQryAx",
  "key11": "4S7t8LdP8Ge13FVksQMnukqsNFuvJgWm8RwmFLBHPZ4JJfRSjVqdAj6j8P3ScrGqfqv8jZYZWotvoZndquiXK6mr",
  "key12": "4w8F5VWkgNkYQ2aJDGMDvMAC75qgmPcM1c3JVvzi6kV36YnaLohP5gpbXx8hgS6Arhg9pjLzzu1rF2Cf52RUiajo",
  "key13": "AUtdBoK6TzwfPHRrRhubKmQ2e7SP3arpFvcijPNiJSpxcf7UtY6JoUX5y59qeiqsbZR4HWqy7kS5Aky1taFfhUZ",
  "key14": "5P3hqPm7ZB2iNkwDkZ2nrQk4NXK2MfAeqqfp28Rne9wkxtAq6AWp5uv6uUpd3D36EKLWUixARGThkEL98FAbXmG2",
  "key15": "5dfXorBnTKEDNXmRir5BpV5q3ub1Xt1yKdmkt3mSr9qK94zJQXsnqedtzCA7B9C9EvsroP4yEwTxWckCN46YMnsa",
  "key16": "SkE11T2eRB8Mz8nhv8eCVBfG8tiKMaXTjQ1YFXeb4w7s1c1uF4cvxDsN7D7ds5K1Ax33GvAr8EZ8iDhKergLooT",
  "key17": "28Jnm2HB7H7H4A3WngTVYdC9LEvH7KrfK6EiwEae5KxfeBb5XKPs5RJrg2ntE9gAG1JmDfCwTvzwQTU1WhSLb8ZX",
  "key18": "4Nyw8ET3HT74fqsd2nSE6AwA6rtFc8yF9ii4hDwuJQojnnPrP2tPX4ire9cSHrfKzM4DS4zUtfGgNtAfSkM9cEnm",
  "key19": "3kp2gifKGNqiwJtqG4ChmxuAamndiSYpNzZEw3FChpgDKebfBcLiutWXg2iJn8Sez8zJqjgrmQ9mRFd3mcTtf4UY",
  "key20": "62EdcnXS3EThembPzYbxX9SVR6cd8Agzf7YV1xq8W2kBJKE9usPe3sM9GhFk8naqwBuPSatCTk5irV9B36EJG4GZ",
  "key21": "3uMEVEWpJAjJjhrGKqNThfHt6tB2eZ3qNKnFNJee9KZG8U3c8Q6Dbep5TmFHKomKYHi12YHx9JQTAE2H7xTLbLhB",
  "key22": "5tnXTCbiG86Liyk99SdyTsh6pZLFrJfzi95AFwLKc79odLGhDW7kpU1XipYQUAwSttzQntRPAqtNXY1wi3NYHVFv",
  "key23": "3VYz5rGBLvEyMrJasKDZZbbM9W1pcDjXuEjYX9XFFdRn9D43tZerEjwQCiFa491sg36q6mRH1zLusvbuRocUQMvH",
  "key24": "GeNJ9EuWZinReDkn6MjZYtGfSCEPYxv8ENPZU9yPLJ1iKDmE1QXYHMbz4a2nDRqwA9cKVscFgzyRXuMGvKZUuEo",
  "key25": "3fhSDbqTqGUzupuRsdaD8jyhJw3vDdEEKcpTjyEvBD3V3XdyfL4NWh9VXBpESCcEc72fQPmTGaKVNJe5RK8QX8Tn",
  "key26": "3SrCeC7CNrwUudPNDWkAopPvwx16KT2JGTQR9N2quHLeVudXmmvTri4GzNHZqsUkTW7mJkK71cfzMXNPeUbctLCt",
  "key27": "2tnYsPKSnLQRDnbZ9qB2cRLaRL86rM4PQtato7ekdLwjUJ5ahphh9UiPc37mYQhK9PAr6Bu7Q2HXYvaxz9LmP9sK",
  "key28": "5LRQxFihx857ePPGuWLu2nuWib2ZaDYaBks9vFzPEJjLbEUSbmsS7LHrjDrXh2eHrMcF6NVYT7uqi4m3rBZ8P1e",
  "key29": "eW2ukv6VPNZDtX8piErJUC4rSatDDM4oG76cAEC6dSxnybZ5twV3f6KFjey3Y3rk4pxt2wLMdqgBHw5ut32G2AF",
  "key30": "2jF4CEY8rsXJqeLMfwpx7x4SetRRg1g61XaDf5VzAph5e7Xa5mMY19WvTW1UfyJidmQmtQjhW2rQybnC4SMCFhTG",
  "key31": "5SpvRtkG4DwgXu5w9yQuhowFXSGX9Hei9pyq8BiwXwFBTfrWg8DJrL9vpkoRT6wpF7C8oLk3ZgBpxViS7uPDntEg",
  "key32": "9uPZ8dBuFi5rjbCp2PrvqYL3odFCGMuoxBeCcTH3gjnudytnRBEn73ZZQwAZPwA8mvG1nJebZ6HL3REyVA6E8TS",
  "key33": "ZPhUnZjsgLmBR2oAG31fgGDZyXJhrbnda4v2mCgNhEdMEvvCgC1Bi2KbTjK4MixvfRBN2i73uwbPXVJvqPCS2of",
  "key34": "4MhRyJt7phpXibpiwvkxET1YaGDSMJE91bME2tx4wMoKsEreYdDN2Gr93FUDEt7ceP1FdaBrbtTwsZEy6Fd4Y61G",
  "key35": "3vqybGtKr56JNxZRvhyADNMdyScSMskYonuctNfreuV2VDTZ1ny62mxNV9HD2VtGeLZqCPeM4e56ZN5nNVbfd5et",
  "key36": "52VL95BkQvbSay8QEGXa92nEFiFo64Y5qDirkoTGwu7EJT6jVQT7Afi7ymYMwCo4gH8fGHzhuQRxMUgbYw8ouJTN",
  "key37": "34kcPazfmTuSnRiBP6rNhKSBFEsR1EjqW7fVN3B4f86NHBV9XeZHnDpuWqamASxb7YRzJ4isQLv69vuSwjfSHrkL",
  "key38": "22HKy9UzXR3GLH2zEu81fFuvgdMKsKU7qtT96DWPRHmCjwNoBuVUT8ectwxB54Ly2ZrQsVZiTGJJBJznoyVVPWjY",
  "key39": "28KuZkF7zj2wMedchZRZP3b5ipRfmLVEjpTwQkt2DSHKLc1VutcF7uWmYbPVEcX6QQVzpxsLY5S1ZyxJ5HPqPgsx",
  "key40": "25wJjjTm4U9t7XAURSheMQEZt8xgSo5AxmA4DcYQfWcj2B3KFpC4DY3agfCXmTgeomRRch8U4XDyzmAPzw9mJ5d2",
  "key41": "5m8aEyRj81ST597NtECRduK7ebSnrmZgy2w9S6wRUtLHxEtbmKWARogt81XKmKQFaegrQPxVwbRJfYDAfG7yhZkR",
  "key42": "2VvHfrXuQYy4s9bqjtQ7m5cnWfvzaYMkaWPwCocy7WSckEeuGoor1hv8AkTsxGEcmFVjwRpdTo61D2M3HnLaTURi",
  "key43": "du4RrYe3YJJohzp9VZnuLffzesfaqy3A125LHcdFtyvJ9eXvo54fbgWuZqv7r2rUgmYKGu1kU3yXUt6g2Y9Dpeb",
  "key44": "4YiMyKFauQNF2YnwJkwyMtm5fAKwADpbGHWayktuh7vULQ9uGV5koNnbg3jzYcZRudLSgvaphzDDwFUsXvT5BKPD",
  "key45": "5iKoxw3cKStSkWajrw3Eh9qga6SeRTvLeqeA7GBEjBbyxKbtceYzXtfhyQ9Soyit2xwzS1xXzFYcRUqkhVWAesnr",
  "key46": "4yowyA8DVPh6v3sqN3dWuNsAji3QuK8c3mvauML8CJD4A7Hd9u8qua2rJaVFtZDu63ECKxXr1wXsuiGRVY6UaEXJ",
  "key47": "2psUNbdaSaF9RvYKAtovJk63TUQSysRJMLde4LpZtXDsPAAeKzFBA4qJLbQzr7JUAseno5qaNgKaG26CBdAnYmYi",
  "key48": "rhVfFKbVpAAhLcAStMe5m2LX3B92q5ZZCwJbs7KX5VDoaKCkTqPzrLxnAwoYW4e2XBD92gK8C1EfG7shkQri1cZ",
  "key49": "2CDXQQ7gEXVbzFhPPuyNVSWjuMxVwAdxN2AEMTGHFsjvqAgaJyfbynUrbBCqzAFKSiaq6142YGiBbwWFfeBHeeak"
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
