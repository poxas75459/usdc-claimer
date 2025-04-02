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
    "5ovzPHLG5A3Lj5pa4PrYxFjgqVdW6WvFmFkDmdSDy9LQFPnpHewbVHYWYFnrPWzfz2FK61ShFEb3TA6XqnwSUEcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CQ9voVGgCtS73qeDWSMaFRshy9Kad88k8f4q3D2KndJMeFjSRXJUqMZGFJtvGrbsj1jFjSZ3WLVPPgUqf6KxqjQ",
  "key1": "58bWpvqBN5nBEdQHkx9DjUUdKSQ2x4ZUv6auyfb5XNJ4kWe7iM9ArqRsYkm7V1CqPiRMGt9rLQ7oGwr1MFmfAYvF",
  "key2": "uExzHsv8YqK42MmTrQouLdq23LGWm748pyi1DzvLBawSQmzNDjDDSEsFyXwTaawr4Yvzk6gUgsN9j5zDQY918Zi",
  "key3": "4rgmdVT8nbZA1Ezh4u8SvEsdoHjSunQnDY8ANyvmXDiSYzHv9S5mLAmvXPLf7wUKYCBQcgVqaC3JhhTjmcDLhyBF",
  "key4": "4mNzpeZrsYMVPFJuUYBoH3rDDezejG6KkRqkNqjBU3bgsd8Zot6L6Z4kVvagaWXJ7vcnKmefkbayKzMxoMxRQRVJ",
  "key5": "5VVDCRzGVJ7uDdd9jy4k9sEchaJs2hUh21xkEa3CrGNBPhvEjQh629W9rW8hmFemBaumZqN5tWb9vgt2ErnAhMRa",
  "key6": "UnAch63Cd9t5Gqem4B6dAkVp2MStbfGYVeuGZNhLXp3rvd3qQTwJCD4cMniz7X2N61YtYCnGM2MJNLvEvdgLQKa",
  "key7": "qKA9Wkqstrn54ijfSnjaVDqqGRnBHfQipGTh8MGuzWoC4Eek3nimXN8ezpxbcz8q6bTm5HHTu4adrjcmTi4BJbK",
  "key8": "3rvsPKKt8xjWAYQqnJvTppRghXhXdnHCAomqqAaNz8DS7tWSude1iFVwms5fQAfMRVfByf9mBQtMmcHgetVsVL82",
  "key9": "VLHjgTWrUAtM9nsVcL4bKsbyjgSDRbxtzqG5tShnrv6GzpwYJu8RkArGRjCQLYh3ZvPaoMYi7UhRMUfGUpHHCKd",
  "key10": "5KRi2F2PkXu6JUkJoPsa5qd4ApPz7bwMfzDkijuK6HkKMmEDfiz4fsUTSmWMf4USTNn7XzyHRvWF1mNEAZuFM6m1",
  "key11": "3WruqYRPZLFpyT6rjY1oaR36H6qCid3HWgKrHHDZDBTuVbRAWXtQxuDqmF7nPwUW1D84Q6khCsnF5YVsQpCieL52",
  "key12": "2FzKs2Mvpk5iUaS4ZJnL7rpz3MjgKh5BqoHFV7j4Vntber5bnAxbCUyQcw9jZmNfBhZPbtBc6bLcJUP6Gp2S8cpd",
  "key13": "4eaxvNWgquptaj7rndPXefHzfFWoAALdGXgeqqjDNgDaYjKjkKJib8z2wafYSd5m5b3TJDSRsD8f3Pah5H4oyfui",
  "key14": "4qoVbEygNs85rjghzMauqyZ1UZJQpY8aVfQJcsRCSbrPcKZmwv6eFfR2WHFdpTBb9SXKTpF1kqK96wVFFLuhs9td",
  "key15": "45i61wFeueoLeFcLgbCgRX7Ebz8YNLPQnvNjAYE92F4pmUZW8GAKR4vJgf7vSgBqJgFqSNsTQ9RJbvyEBN7aC3NJ",
  "key16": "BBcDHm85kFD5KoC2urfsLvgBkPoNi2Rp3y2sxNXBMFkm615aZNPvdyVd16eivC4ReGcKXxsj1Gj7wPp8Q7gHyHu",
  "key17": "5EVz8BZAnzPs3q8CCBfRaxPnBKf2eb4wVFvuEjwUzHFKTCWoStCEEgr6TkAGA3pNhbrdHDTxwPVNA4Fy941TEYzF",
  "key18": "3sqLptjqjBYbL6ayfyeBDEcMnJt3q47EMREdeuhyftC72uPBc6EoAWmM7KfJgJSC84nQuieTfNbARvDK4EC6A9xs",
  "key19": "2FncVmNNDJSaakix6ZqhyeWYj2hC7ZFfS2wzq8Qx2iEbKDbjeXomLmF3im865fDbzJGeMRUAiimxeTLn9aYFmSfa",
  "key20": "2wRM2ryJLpUz1NeC1JwfAazgbMdZtZBfi36pGpWNvmEZqgE9fhBfZPAX2JFyCH9MQt4CzG7ZVh6VmqmFrhqqRPS4",
  "key21": "34DbqKfyCcXSkpWzRgcs2ckWJNcPppga1J5BZGrLEBowdjzJNkjmczr4Z4YjtxzzG3oQsqWhAQntexbzGyEWwQZA",
  "key22": "3aogfVzvKKgW1AmGjTsi1AwVkuBBVoHN9vGTygGGixFebrLYvV64bvJWKfPGrAze4y5CCKj5Q8hs1zxkMnYgH565",
  "key23": "3jyWv4CqCAkyS2V2FaPdGgALbnRGrJW2iduj53xc55VW2DnkqxQPtTxHB8caKVJBFeCYQwXM3KcmJWsQVowjR9gf",
  "key24": "5YWGCipaGFFDYxganysEcn3eBusn9Lz1KPMH8dAzJLvHmAcYW7noA5acPD9t19nBUsFnLbgGojJyC6Ns9mzQCUom",
  "key25": "4BWrSZoHtmdWndtLUWGW6RETK2JKmk3L8tpuHYQkBXUHm2nUyLVt1U6ndfKQarcbtj2eVXiWpUjZjUqTVQy1wY62",
  "key26": "trwTXFXrt77T1PDSLqa5VsREZHga7A6Q3JjsAyxmbVgCUYwZGuFKiNGW9CTn9PEWMDT3NAQUkUa51at9wj9ZGKn",
  "key27": "4u125mSSsqKwvt3HYagfBT3JESYMCVSeMe91MXEiKKDsfMfGwV6LPHpDUQvzTZ3prqxi94YHVs2pGpmLuCKQvXZX",
  "key28": "RdUoKBjBDDugG85h2vUFj8aMyZAVTWvyoRWM9aPuF7XorDjsXfqMXWHm4BBQoQVpGVAJcf16K9u32FVM8t9ao9b",
  "key29": "2jcDn822JXGfgZNfxGn9PzN6hfiE5joZWdZ6TRFPmf8So4YB6Jj6CpAcK5gWCwwj1YY5XSQSGoj6wjeoRwQx1kmZ",
  "key30": "2F9Rh7EFYL6BA7FCtUo9cED9B42Ng4cJSDnKdBqBDtooNvDQjLsQ9eTQDpPVUfGFqv15NcBudUAcE4d9iiD7kCqb",
  "key31": "5D6cAMesXfEHat1Lg3gHJGjofsr35orvPZ6d9PX8NjE82m3ZPCWKQErw23FNrf2jQQ7dE6EUK2QdvAJH75Kq4c1v",
  "key32": "5eDhcnruGGjSdeG2Zqe9s5ayDh9T12cGnY2btTgaNAk2Vkz1osAd9d4c8ebHHpk1pvGoLzDD2gpHY2Dr9CorSvE6",
  "key33": "3fYRAnvy9qEQX8X2ptVef7iXiUwszxums6eTHMkTXmQhnv1bpE17YkTbukztv6UphsJuVQfSqguKF5oYNYWTLcVt",
  "key34": "246BaQAkRBCX95thCHC3N6UhSKQZwzdqBiCPsS9kjJkeyCMfxuWAyaFzt6aSfHAqE2y7rgWiiM1CuNmpuaK3HV4i",
  "key35": "3uinGGgvDJhMdif6YN2m7VDKShvUAqJfv7ZARP92WGKqmVbXbeMMnYrkwRgzbReJjjUK27uGqcwNv9q6GACE2fF",
  "key36": "4uNhAW1T66qMR6rwjodAQbYMeR5D5yxKQubT46cifMjsaxVvHEuJ6Sm26QWEueWh4WyvNHntLGgY6zotyuyz6qn6",
  "key37": "2nNysUSEQupH4wtvvXkXPsZQAFEXAvomk1TF4T875zqSPiLrwG5qyx8o9nvmHwhHFCQQ9ks252AeZQPXG6HSWJqg",
  "key38": "3zAX7bJsvWgLJCHfwEQtZpTvqxEj68wTkvkksZn3MwyE5caubnsVdd658uovP92x9RxXWdaTKVWDbWqxPFWdrQzr",
  "key39": "5xgNaMV2tgAi1Rt5X1mfR5SebD2dkYxkivUW9UUPDNa3ZqS62LszoiHhSRVHUbDbHo4wkyfvwScr23694uKMsGVa",
  "key40": "zJaZwH17tmWEDisopBTK4XcyKknvJFbzuhyuhLZprRHfQGHWXYEruiZRDfbw6GrXpRSNKCjFQcnKh4aacfjqoDB",
  "key41": "3JajGK5EtRMe3uU1mRgj8FJqK4sVC7oFGTb4taP2NPnsTmkjKCng9BT5dBBQ93nF4GX7TkJ9mPD3xmHsj53dbgau",
  "key42": "5e4n4YeZBt1JdiPvPfjPSfowMFpAKtwasczsBjeZKDtNuAJS53iMHawY83mcoVkSnNSYWrygGMduJkJLJW2BFmuH",
  "key43": "5m4th7efJkQXsxQRnuWdqFNTRB9qWBXdB4QkW29wZEAq1G1gPpEWKcyiWobmbg3UqiwpVCTuQV1C6FX3onUBvfsj",
  "key44": "2y6Y7UVG2Vm8HR8f4kYQYZkRKkxZYQMThpGAy9sqjT4ZWbnjEf3Eefk3xnVi3Znpa6vaSgFzBRQAyBZx72VFVHQB",
  "key45": "39oCcJvGWUxJA5vYpPGLw2eaNpKEKsYCR5zoM7tLc2m6PUsHmrf9sFMuuwz7QjdDfuBnTjPkdnAUdmS32yBXY4cg"
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
