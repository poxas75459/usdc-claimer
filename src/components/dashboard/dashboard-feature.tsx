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
    "3hZ28yRBDP6u57tfH6VZmf8eJLmvw5GqU68NMB3MWzPPLKY1a1thsJ1uz5TNKYAjxaQo2QL28T48crmnmLHamyki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HsmoUotr84rX5Huh7qYw3FjCTPNSkXVA7h591LDgHDGXjPYdqnkBHhRiUZatNWv7YBAFbRZJFcGRKzRJgw8mFcQ",
  "key1": "2wFgGRfz3pNKSH9Z226NScjvqegT43jVvnQyinzTgJEVXs394cateoctLswBUM89WfePeFvDAEYPvuz9Uathbqxc",
  "key2": "4TyRQfrdL8YVY6xwHegDsd6m6Kix2u7rwMdnUTpstB9LhqHSRbEVmrMjt7rYFdxTB9K1NWUbVxzsjCKC4CNgFfi6",
  "key3": "2pYaBti9F7GzauR5bsfHHCWmBhxcUo18UuViRdULK8dCGwDshmfFKjsysGrq9iutCUNrPfMuY4PZFf2GPmFrDGpo",
  "key4": "3HxaiS1eQz7KmmLNV2AKXMd18FqLz4ULwe5bjqzh7gz5ugXkz7iqsd56vDC5vyaMMPwnsXxFzLWkNPicpUq5JFum",
  "key5": "3HyaxkesYsAsxX2aCdLEpJ6PELRBk6osj2jocYWyXnZytUNAfftvo6TbNueTudLHcVyBvfSmuEKzo65oZ3W7pzAm",
  "key6": "5gWcStK5jZDjRvNZ5gEoYRBRr8e5sPDAVH8PK3T4es46hikpYCPCEzvzegfyEuGhtNfLwiiqUJyyj5pDtipNyYne",
  "key7": "5weSzPGRptpiqxhAvSM7UbHkn3kaLvgC3dheAAZMdHpyDZXjJ5PWwV21NkoDeRvQj2Ff69wavLGqxTpqha7CqB1d",
  "key8": "2CZKevaUeth6GPV9P43SZBpHEvSAQKkWiryXcDLUPfZBP1vJExKrA3U78DL664dUxDpnJpqbWqVKttouc9Ao6mE8",
  "key9": "2TJWEYk38RWbLpvAB5xqqteRwkXSPvn1us5Wzx2Pcjc8mXEYxRHGAomETYxUTjVykWd7SEyGDykHxk61FbCpTr9W",
  "key10": "pQECpwMPfaDNAowTmDmH4T1BuhhmToBMzj3DgfGGK6LMQUo4Ggv6716a7RdCGVzNJFrWy45CdPJk898v4kw9hAi",
  "key11": "5hP4byLg9d1aLnhsnHYYYCQreZhyRdKDwiA96ZqdhYgsGdufjTD3rz56vBrpkzkmCVcdg5waM2QWnWjWdgMgXpk2",
  "key12": "3z7VoVpharJYDVProx6Y31PWA2KTnVb5vUx5q88Dat5CUu9512mhc3ygBN3kdGPmGyu9jSjfnmT6ev1zyizXXeRC",
  "key13": "4jAHbb3ezRNKyaLanp2VafvjieKmUC4ozPKcqwG2NriZFYfqhz4iKj4Gk61izYZvsi18TFPUnDruvg6XyhcE41na",
  "key14": "4ZgdeFa3ATitYvS6h7NjRvNSjdthUiSGwFFom3UXXJMELgWcdSGr275NdSENPmm6pqvndUBiKS8aDyxFunyyQpHY",
  "key15": "4ftjj7MZq4vC42RMH8nz3eQJYCUnFGKVLQJeXxMTfnPuX9586krBPq4nM4zA7LuxYqWUyQ4JKQkLivT8abYFAp2E",
  "key16": "45D9pFQRbHvu2du8Fkqn8QiuaM8NTxvhC4dSBKmd7LKKPhkxbWdExw2Nkx2yw4Uq1kWcH1Ki5gMKqTWjvY4HUTMT",
  "key17": "2kX56Y1YWHwjnHGAzuMmYuPfcivqPy9L6ym3tw9r6fy9rbsP3Per27uYSS9wb9vYpxBLDChR4mRC18knM2GyEMbZ",
  "key18": "4Vsx31MgqTKCYrU97y66Qk8cysh96jixhBh3JURm4CV3gdos9G71GryPUf82BtG6s9dR4tUchLyohhR3TfN5yFYL",
  "key19": "39Nfypo63k8woV69xTdsgJmffKcwebsjasZk49NPwj9QjhGZd4jDdpbH471PHWHMsSQSaQNWkuVYi26RA2LfYRRH",
  "key20": "2daSbJE9VHjmxUYgEGbGJyw2zrizZFTAacXZ2s89oWsoWTpikT6Mzav6pB93SWXQcwaunJxiYAzsUitLMnJHGe8L",
  "key21": "SAoR8exzoV7kwKBPQWy6TL9JJg9wYoavCmEPAyiNEbfiJnBACCBT7jsLUts1n9kewQD45MfDY6nprxZiprTtbWc",
  "key22": "3g6YaUtT4dskJDToFY5khVN7asNbk6Xqmni7qLohwVZqFmvgKf65eYQPQLhR1S9sWS2R4jTyuuBroeLqkvDoS8zD",
  "key23": "ABojPCuDdBS2fB898vJsoUUpzhy5ECk28nqptauBnHCJ9MkbazZ9bXeas56L29ALcTAyPFppStEJr5f7YhTTfVb",
  "key24": "44LeZS5VhDzF7j89SVM9fM7BsydjJA3nWgsqzduqB783x7Xu1EZ7KaxjsRgiTyN5vzdBKK5hr3v3659Hkr9JD3s9",
  "key25": "5t7zzcXn6G5XVoV3MwHdPZ1y3GR7mEYKHoeuRUb2EJmopEX1xd8R94V3TPeX5mXvKmtcCc43kPptLBCTYkjUwXhz",
  "key26": "3d1wCW5zcy6r2WPDnLHwgMUCZwdq1DTyijv81NC6qxdHYRWNJwjBeYL4n3jhByGgzdJutxjXHhxQiLYYQyKPLTsW",
  "key27": "257hkaQaNxPEubqT1Mu6jUpavTu8hhteekDmfk9Hor6T7Rs2etuK4YsZWYmbKh6PzmmJkNRxuKWk4mi4S1reddv8",
  "key28": "3Ww9kRJ3tcVw3bgLGFbNhocdGTZkDattLC3odfSZVd6qx82AH5U5EYNSfFEcjdpVAJmMXv46YAp7Ef8ghvijbQNE",
  "key29": "3aNx4Tc5VMRdhkhwup83TycKdrCTzGQdm9mmzRqgAHfJJK8H275RZgni9edf835mYJks5pUGZEST2GSS5kbNpSKK",
  "key30": "4fZjNpvdAA6eT68SHdPkfkHCxcjFePuv6wr3kunL64JbwhqDpEeC6jgCvVM9vdET1WEsTivN2hwoTxzPjxKgQK56",
  "key31": "PFisc3xNBGPZpoMHvGanu514B2ji9a61WEjW9ExFzb4DpeWhDQhL9RpKQ7SBKxMvhzkeYX7CXZxLTpGnCXTDrRm",
  "key32": "4PWVdPDeq5C9yhC3U5oUcNi9u8xt2sueUgX2v5uDHA1CJXBiG65pFTmu2VxVdpu9TzuftssgBvp1c3YrCFAsSQSK",
  "key33": "u93nTnPZWSytz7TnyCkoEeYfGixQyTDVPX635cDMxg2SQo4rW7KWLzH1H78hMMSDX1YVvdgSG7ikp33MVcDabGr",
  "key34": "sexBoQQhrFChDaij3fpXmM166qFZ8SwJU7M19sc685kNy5AZHSbyMiuD3cMdi54xr1vTrs6cMAkuAvz38Efdu3h",
  "key35": "5EoPkUdhjeua44DdVF4azYAq4GSedcVecUN4qgzC4jhvyyzwLjJRAm6ToM2hQBRM5sH9PTVUk4ujk7N8Bzq6db9k",
  "key36": "2uobyUriHb296q7277Tsa3c4VBx3jrKEgwsWCQnErkJR6xmwTrdUNqqjq5TvFTWgs2LHMQoJWutjaVoJsvB14DQe",
  "key37": "RmyLGi9SWQbY7HMvpoZG5A7jNv9zGdS68WeyPs69VqQGppaLtwWPpvZ9uh8bMYbm8Gf154hSpED3U61bRqpZnNE",
  "key38": "5npGuCG6aDFgh3RTtrU7HBFM963KViqRgHrhyBAzX9pSiDPDBkz73g4ztBNm4wt2x9sp8jiiVDTGigGN5nenAkRB",
  "key39": "5QMfxFrycJxafD3cGrz4V4yUbHeTTZU1ALB3HJFhBp2NV3xSHbqztoqG11bJAHZMhc3HCqC2GWYPbAZTn3tmd7uk",
  "key40": "2mQmzpkjLbMGTaLsGtbWDTAbUtFEaWsHi5NpSUnPNxopD2xAJiTVcyCPjR6qKdfdTiEg2oZenpqmPXfoqvTXnPYT",
  "key41": "3zK7vUTmBuA9ai4sumYv8kh8FNAY7RZ8me6ChTdTzDPQYXP44eXrTe6fUXHUrmoVcZqBqbbGqgg5nKovjykQr8YF",
  "key42": "2HaHnmSDxPNmdV9cPi9PXXSjk6j1ER5tRE4q9R4vsCSNc7fJX1UvNGbV3SsapAtEahYf5n4BjBFdUi7vSQYvHWyd",
  "key43": "t66FyuN3S5PFV78mvdpdCj1f6rJmNnZHd5MkTFmqHn2LNZEREzLrFV31bXfUxuJogy38dSU7sRdP2FAphKy2vhM",
  "key44": "mKEpsNHXJoNqLa1kBceg2fpQK7yZkd1Dhq5gkUZj9crATAi7NksiXXGSjDHwUaDNRunDJvsWYiakQaSE1UZ8HKU",
  "key45": "4v4LRfhHPxRSEE2pB7J6Wu5Pz4gHZYBmPiaZmFHkVRyh5LWA8t7q1xk76QkQRHcttdZiJ2YvVqaJx3i9zGCbBWf7",
  "key46": "2dXy47mPXVKAB65jXCTdPWwXG6gkziAXuUgwDpVSiFKHVeBJUujAuERJp9vg46JR4gffFNJdWGBS2vJwQ9U3fSb",
  "key47": "nDavYhkyvWyor3pYJc5jZB393xvjZSSEAP4A3wArbCfCgYXWcbJYM6gkEJSN6i7EV3NbkdpWfb542qd6tqNsYAq",
  "key48": "5DgHwPK9WrdcmmbWxgaxrmSspxBBzGesqnagRgUwTuTzsJfmaBhvNcf6UakUkASUbjyMRewaswDfB32HsguvSDCZ"
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
