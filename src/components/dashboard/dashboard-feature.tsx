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
    "5sFi8hRPKnTCVGKZgzfujzr1P4Nsxyfeb8sZNxNK9HFRWwSiEDHLeS4CvFx4iYzYwJH2kayqVyi6x5PknEhVtwha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bM1p7QSsTbT3pZNn8CizZYGuGcYvkDydKiWPQYbPAvgB3gP9PRCkBvwc8QnPxLpns8nByREFMqFyXAyShA6fjuq",
  "key1": "4ZfFYzudgkCXvs7mmm3tRV7s5XRPXZFhfeHfcn25W9TV4jCpWZYWV6DQaeZcgwg7rQgDiyRATcwPzvMTu2sTnzLH",
  "key2": "5y4gzutqycMNzcem5WcWzpM4tQVvq3hr7fiVSh6crMN1uAWaG82c3rZnKKbheoDEP2htTcJ97f2NjatmzC4Fjo4z",
  "key3": "43i1VFp1qAkcW4r8izodo4iWQnXYdgqJR7Di3PtbWMTcz5tWKpZS3PUF1kbEatRWmXphK32SKXPCqNU4HJKmjmFq",
  "key4": "4pHbzRv17AhpYYYurx34xUFbJ2XjXoUfLXTk7hfmpSC8tnDL9ZRqWNWvTm1qDsxwwYGpiQgUvgtAQNvRfTCTCiJd",
  "key5": "5V2shPkN2RYMPpfRnk6R1evqFTAxfKgqh5i6NFX2NztVF98z9KnDYJ948qcbpWo5XGytMe1MGFC99FqhkTxJFhKV",
  "key6": "5QXecZtVyJeNDGJJC2f5ruxqyXzk2KXeCzomCdthHAUdAQ6G5fHrF6ETHm3kMzHrh53fBAXQFjb9hJC9J7MWxE4h",
  "key7": "5qLfLBAhKY2CEqqRuUisi9QCXiqn7a3hRTwwyyRiB4zkx728tBXSgYNEJCdegNGWDB6nj2ejwM7isswReSD4keoB",
  "key8": "3bFDmB87UibHZj9UBJUDoxNxLDkArYpiRoQsvPMPuGphqRSRiJnskHP8DLRjdampN4KCH5DCiLbtuuhM35icgbJm",
  "key9": "4TxNGsojeBnXuucdb3qRr9jLVFM1ifepNPB2DviYRec4SpD5kgTop64ZQBe1diR8QwRrcefFt2mi48gaYbtZUBAY",
  "key10": "4re5npGLzgTLqD8dCvnKPMyELGRWccU23iyL7DjxPjaF4EesfXVyhtShK2xqZRL9EFDuszqJeN2vWBceYxpotch8",
  "key11": "4ZDmEDjuWr4nw2xoFf4zdwVGxgpRfPZ6pLzDRXkstzDQ9kGEyMmKoi7VS4HvWPYxH14RF15YxkjyuJAtkUdtEcJ7",
  "key12": "5hnTRbArQD1MwKFzbmAovQbwzK7S5gearrfpzJmAufojS35kWcwcZLRGzL7zzBuSzFC2xLUP3mqo7yg1V8qhieMc",
  "key13": "4EtiM4Lwv7mWCf5Mo4GCedgA1ThXqSboL18m6LUX2HXcr2EqMYWkMzwSEzcZbdcrYyAVgP6X2LYjMFLY3VdZboM",
  "key14": "4iD7DJjqoTFZKTVKWfgP4DPjmbnf6gUoweVjuK9DrnMt79sAb9QSL5eG2fayo9wXoQXsiKPo5S5fL4dSSe3sm3Tb",
  "key15": "3ehSXnCXrLTUsjYEWbCLJzmEpz5ga358m4eYdQ1Y5jYMt7F4ej5Xk64ht1U8fkVmLDd94JuU8CpVtPxwZ28cSFtw",
  "key16": "4Lwee5PGG8XuF3cb762gooHGzkePYkRrZmmcDjiECaotzFHQct6N3Bz3BwJ6HYCG76djg4zChZMP2T9g5eR7D4E",
  "key17": "2riQ4kThHyMHFsdcxfyjKaow5FEndoFw4YD1eJE5Xd55naVjCRcRS2F4E9XQYjy1tiomMJuLZnVejT6nHWC2UPhi",
  "key18": "psjn13DWWQEeBG9ZrZGkZPp7HqKvCzPtC2Bxgdoau5MHPGQmi7qdgbzD2ajHVhzeyxefKJL1d4WpFyAXEmPQ6EF",
  "key19": "5WugwWqi5P4sunyLV8yp2g6yFjNXWV39FEjFHn8MAauehDRz6yxo3UHAiF2LBhEi3LAwyQaN1goLZdNE2VTQc1dV",
  "key20": "43NMfZbjPCYsLwV4uLkDZb8XGnPeQ8mJhYhtCVPfnnaMrJm2vzgaZPhBCDW5a6nuBLZPmYeKevLxCSDA1bqKUDue",
  "key21": "2kwbufvXYnFYhGP7VRU4eM5GiRMkbLSNDUkFZNU2PJpE9hUUxXd4128FiRTLK8PXusaekaAagiqhQG2XXgLxwmSE",
  "key22": "4TrFKB8fzbfQLRsB2YQnoD1gKJRnN44ryyAFLxtjVCQMzjpiLLedtVKF4LV54dqmAphZ8yQMwoPrYPkHA6FZ8RqL",
  "key23": "4bU1BmBoj9cYDJAqApgAge2KNK2c33SBp4ND45QPhYoRzxAujxX1ATm2M5gWZNtLCFMrJauMGLVWWTosoMTqc41B",
  "key24": "61PgUmVDzhU5f5DcnP632jYF5BKybitahgoVAkNoeCowSU4yZfTewnkzk1pXzNfZRbL4DqaBJe3ZRSxPZhbZ2ijN",
  "key25": "4gAwzCWzVCgG2hybXe1aeY2xm643ahqcdGCT9AH7U6jjTE6T3DMPhGrt9ct9VxZGHtMAdWY67N6CmbPgJgRR96r6",
  "key26": "qGEpLRvBGuwJcuoj9P9DLACNC76Vw6vQ7ffSMhQXL79snga49KwXxq891ptaMTnupR5sXJxmpymaMV1YJhRZ9GV",
  "key27": "3XkLRjn62qSGcM77RjENM9tM3Z2GDM3C7LhvyQmwbdFMknvdnyx7zhBYCi5TU375zP26mhMypRGEXu9FN3zqdCEw",
  "key28": "3C8qb5UBU3RepDp17RT8cmX4RKdQXZ9nWvzKC77MuAsEgDjHuUxBuepZb4mwz95M8L4cMkjwsDq4jJias4DjJ32T",
  "key29": "2HUFrwCP6UjniWEHxLnzZuRwjwhrci39iSd2qZjqYDBbEVR3EB4k2iiazCrYsHgwSPsUmsnArUhRe3ZASyKZHno8",
  "key30": "Ka4sTMPSjrUs8s4VSyMUumKQsFzcaEbB94xJuAVJ6qNNXqQWfW6DzxjYHomat4ATm2napPorNB6tvrX3gpjiGZ6",
  "key31": "3WG7jqVdoS8SHWRDiPyFh4nLvJBtbEeGx36qAPSJ8tKqLc71YKdVBW5XCTbfbC2vmn9gigKvKviNo5susuLQo8bG",
  "key32": "48VzcnnDyWayBzfQMjvZSaxBv72AoGreNBRJB2zN3o4TNkPZhHJwjCma52op75srr3ynA8aWBuUSJCchkVV5uued",
  "key33": "24U9qqH2jVRczqf7nVhJWdg8U8vb1ioftG2DvHQZ3ZPAoJfxWpKH9nsBtyBdewWRSCqG5uQoH8GqqXh9hPGUR1PN",
  "key34": "Ej32mb1dfJQS3LknjsQPZdXc4dzjGaruZ95GLjhcbmivmPCzKAj1YLQ3JoCAQqSMKLYMake5tvAhRcUU6G8cXAs",
  "key35": "5U6BWTrUQN3ZEij1oyYcLJpgP5J3utH46NQBdvo7u9BcKdnMfZzSzezxQ18PeTaMQi1U9FnUQDAuvp92L4sf3eGB",
  "key36": "493Bz7bT36rTLpEtQwiFDJ9WziFhon2mKE4fLJtXX2Ygq3aYgTU25ePBWQt8CHiw8XcfPa7ro4rYzS1WdfwKhXvZ",
  "key37": "3fCV9dUKT7LauSDsFrub66sGcjMM8iPGMiPzkxemcsoQyTqYbinsWTVE4AZuK3o4So7iJEUyATAMDHgGX5FFhz77",
  "key38": "5obr4u7CGNfyqUjZcnUVNe7a3xf9b2Bvj99qWG2cDBQW2mUGevF1SFszvXi6SGchBa2cErSaHjQUpcuZibTnEC9b",
  "key39": "vsHZKoG9QwmYr5h2NVnKRgcEcvJAzpFGi6A7zjMQDkxYM5kcygQNVzXZ6Jaf5t3Zrim3tJHxwDp4YAeeXJ8oVGp",
  "key40": "5fQXSvKPTvK3SEYUACtsJkvPVQxSY5WRg2LJPJTvaj2S5jfBLh3gpKr4S8gWY1PCBBzGVSJGJq4ffm4VeiXBSyTJ",
  "key41": "5BmjRi2UsNY9aSc3hsX8DdApdfNwt4XCFvJwcLpBwsaW4gCSXh7BvsWH7WmZ3DY7FwPjTy3VeH9dgoVw6MrSoFZc",
  "key42": "5Mm9NPDPSyii4cc9P1eyF3CGRxtG9thBj7zPJMs6C1RkGZqb3mVCYjeuopmACquHqMjKdg76wEjC5NA5mMQCCeGP",
  "key43": "5GBD95LH7bR3pSkbcSzd64JDfyPQALEvpNKWrPJKVVzTf8i1Z26itTu93euuxcZbjbcg1KL19ZVwbNb7JbSHVJfQ",
  "key44": "5wdbuXqtUnZ87FRnjuhyyKGhfB29Bjepae7VDnm2DymdxSBqv61Pka2VkMXZPZojTYJfMPk7myU79CQ75LN49E6N",
  "key45": "5UzEraC6VYKUHpM3Kqy1hjE4ZSUYzF8ecsTE1VasmBqAqKoYyiH2LaDTpuoNX8MY18yuWMv96pJEnPnL8sHqQmLj",
  "key46": "51rFkMahFtdVbrdgteSRCoXpzwNYiiQ6eMNiuxPixwWD8x43iTh5vED6siii7fFLBnYYfii7h3fx8gfEwyFARSaq",
  "key47": "5Hc6sxo5nELR7NkNrm6WUT29DpPm6fSR4qRh4MBhvtWKb82Ezk7NtpKwuqQia4Djj2W7jxeuXtbTDxPW72r6w2M6"
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
