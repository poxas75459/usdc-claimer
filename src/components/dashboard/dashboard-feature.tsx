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
    "5DxSE7hqFcWz8ybp28ixWAQudzrMJHSxNzYbiuhzHyG2Z5jrjCpwfe3dQwKmYnySTB4NBryv4skWg7skYzrCL43A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21q63DzXsioy7TPdYxvVUD3s99nvMoGCw28xvMUL6SiED2HvDBPLPKbbQ7ViEnAqWVyvMaoSSCEucX7UPL9ni4Tc",
  "key1": "2HinxoCazKDCo4gzSJdQwLfyCRTbfF4tWniodhrVJxeArTNX2jfGECJPshQMAwcXsWRujm5BtiLa5kttd49wa1Cr",
  "key2": "27TyQ3fRA1d6i7zXCtudounHavg4sinWFQ3HRrVcehAiiXkkAKy2ebQe5ZAdWK2f4WXvqRn1r6g6QgNE2YiBywwZ",
  "key3": "ZG8tkCUuuAmkjM2a5LwwUDBXGmCF2eurgSTRTkMBpCmy8QPXf2D2XM8S7Zsgi4J85QZ1HnUckrS61nbo5norqL7",
  "key4": "qECMfVKZ2ADsigyVrg4QqLFGRPABTAFHLp3f8EpskQeXS9MWHz4m4RGQ8LDvy87pST9Cwp1LWAvRpVdPcGBHuRH",
  "key5": "QbsPvjGgJRr6GzZH7gJY9q3WZXAJ2DrBdAkp3k5aZNcLNMQ9ULJAQMowJbWKfKB7b3jpymqCmKfhvzXfdQQZNRC",
  "key6": "KBmhCoCxF53UbRFPPcMhFWmTHiE4K56nTUGc3FuvYD5N1GAw14qKczLuDzh7MbVtp9g8kMn17mSb4Pt85L44Vu2",
  "key7": "2DzqkKEmRdKESnvcVXee1SJSbjL3ZbhcKWVACGRfsPdFFj8yLVaptde3s7nkN6mqBfAHzLX12jDkskW5YjZtCMYU",
  "key8": "5YASuCSR5ihLPJsEEybXr7tAMASCRnnr5V3oYGhRWhk9oNt63iv9XHus95x5PGiMg8QRfNLZavs3q82zA2Zzz4AK",
  "key9": "AVWHf8nusojENvgLPuZc4VH6JwL5bp9zeA4KqNXEcPoLaaov1HtDgTXxci2xPjKEjrpPbyzmSydhEjhvYSyjbKX",
  "key10": "2365ZKUKM4r1Ks7pJvFfyUcTo1KmeHmNhFLcfBWXvdhzCZSq59NbF7YF7AZJySMSdPdsWZyG4nLv1ahfP4FMP7By",
  "key11": "3hGdwxmj1GyeyC5zznCPUcejvri6do7pZ6hAqW1GSYcRjSmmv3z98qmSv27PcBwihRDXeemikdBrxsY4uL5DTEA",
  "key12": "2qNkaCsJcSdKZXwCDLL96EXtjNxqfQ39hRdiSFTW8eV1emQ5Lh19aq9jSaKt3EFP63RJpBFx2TFaejL21hbkFzkU",
  "key13": "4yUL7HGvktyd2k1sM8V9ADKLu7Pog7wz5KQK5E5GBZYbDAMbqXXkiZdCTJSJRb4JxkKmvEqPHBDJB8wAoFhduq6w",
  "key14": "3n2hkeAgQcP8DB1SZ1SSe7RTeDj2ka8HQKMjmy97SebYttHHhfNWPoM232fJMQdwpv4fq712MumqjfEPDyMsDGFD",
  "key15": "3NbXYSKYzph7PdKnngGaz72j7rH7NfFdh9YFQV7p6SrQ9TB1ahxoyMPLxKFsDZHJ8BymzuH8ZXkvzyV3KpVbRhSX",
  "key16": "62CrUs2kc5ym2o1xv1GzcB8zHi3FjFLXn9qFaYch2jjhg6YgXZRZZhg36msG5eQPbXnyEb1niUWvBBkfmW6cTA7t",
  "key17": "2YucKNSoqsA6BWFgFtZj6MoqvSTBBbe1vxX7wS4eZwWSzH4fgR9hTcfxcHgJp4jd9BivkHYMPR5YER8BsgBKrDJ6",
  "key18": "5j8pLgDmR4hrG2dc6RYKhdFh12URMGYpjCqSLS9BMbfsQjo5u21SQs6pdmgfkhXUYFVG8iFPiTa8scZAuXzB8Wza",
  "key19": "2NPXkEoTibXxcMvYCng1NX4pyWp2SuqoZck8Ka9r6R8V4u9xeJCd9ENiLgZowq9hsjsaU559sDHQJrwET2jbKPRD",
  "key20": "2WfCpLVLpBeLiKT7ERE39JSR2cnm1dY6fpCD8fFgf5pfHevABE16xg6q7AJovZF1M47YCabMhx3Phi8BVVfynhwx",
  "key21": "2PPtMkNqYeBsHAVoP2yBKcZjB6diN7opQVVqGVTN6krSTtMNUe9Nn6GkcguVrrKWxazCnpmqFkAzFgEQaBU1kcKw",
  "key22": "53Ru9j2p1ockzbdSjnttfv2fKeWfM92t6ZFypowPJvpq4pCDGeJ4RajocKoKUqm5Wf4BB5kdy6hGeJ75B3ir85tn",
  "key23": "2jvBipDTUSWshZMAcuHg7967FA4FnVuYBnGAhP4rCtLZTYRqH9gUKSTrMnX6e9eg1goqX7ooAsZaxt9JoD641qJy",
  "key24": "4qzQJuD8nHDhVt5sYTNopCnFcNMp7z8KgRqGmzaK7AwoeKSUX3J8UQJEhcdHgUvLmLUWAGqLS21cFJUZxU7xXKGJ",
  "key25": "5pNzgnYY1KEKa1pBqDFd6udUaFksi5t9Q97YRvfP5yV8jztC9kLFda8k6FqiXwuWzRVafJAYQTJjZmFiPNCtuV4A",
  "key26": "3jCAPF3oz5PnxdkU42ZTwJXUHDEzhCEwNRczL4TLotQrHGwismfYoNF9cPBWywqrW4uzSGK2H6uFGJNizDaMeCTf",
  "key27": "4GEQWSepERTZPiMaZAykHJUvF8yPgSr6BNoUZQEDmhcqHbUqrN1RebqFofN6TVV2LT3D5ekr9SKpA56ysYp45ShX",
  "key28": "2yDNaZeetrgmf8BaqzhWWWePC3cwFfdooYu86Gn8M7diSHD8bjoJQoBCVpCiC7LogMc8yUVX3CsQBPPSFtzQrcnd",
  "key29": "4digZjWYGPawFcfRVRvLhNjwTizpBwMA3HHk3dqsXwHbtbMYcX3PAqmdc6Zv4JNP8ZznbnhvzTa5hoHT9P9cqk52",
  "key30": "2TffX7MVYkJBe1g1jAm1XhQ3hQ23k8dZ96Pid4PiSrW8WNjtVAC9BmgFfyWHkofdFNqwqzR8yK8NBGFgXn3tue6W",
  "key31": "yZHcvkZm19H73Z8PYR5xij5bADAXvN68gZNE1qLfbDR9PAT29BnitoAFGsRuZtqoVZZM344WdwRRPK5QN9yRU51",
  "key32": "t6VVAhRw4ES7mGephPEFq6yHpErApkgUQ9Sphy9RXuoUW1YWpjabZXpwYYsvEw57rMDXxqwE1hgVYAQqNGgyqxh",
  "key33": "42ngQTh1ETqjJUCgtRU4Sumd5d5xNhoHJcp9VDi7Exn3sPd86d17imBttNU1SeiWbsBr3P4QrgusamZ9tXNQgUhA",
  "key34": "67STjWBeZWof32fbPGrAqmTKebGFgWwRB1Kd2XXf4BSPEJag1E1Mhd2EZexS6HT7PfErAAUyAhvB6KRBNQzR9xDT",
  "key35": "2aYERorRjvSHKFCfuVNpvTCP2M4JyXpuJQu3ha2KQCZFZaLQcMEJX2gv7haJNPMjU39sVRMyqoqPfdS8m6NJH1XE",
  "key36": "3zx9wAAg9W4npF2r7fEZNaSa6WVAB4MKEfqv5dU8jPM3uef4gZRqF2BzTRo6eHzh5xXgi3hNhhKD2CwiiXk3nNGi",
  "key37": "3X1vsFXVTsrkseucHayK3QvzGCX5sagR2ZSo73jXNpKPxo4YmNYGpW5UKw3Qj4rC1bvYCXgv9pJFALUxfd2phWZu",
  "key38": "3iaKF4Ym11Qir6oqztCbZRMSqTUBpD7ZjMNNPpwkp2Xq1Uw4rHwRKz9pHbenQcRAFgjw8BSSBManJQ2rdQLcrrEp",
  "key39": "HSewvQdS9b4xmz6Ywu1ktJ4HJbo2HyczaCWQCd1pvpSsWXTtWvPRwaZcJCzgyUMJqAjRBzajxJWGq6fwFgd1nJE",
  "key40": "4TtXik7JRuwYLj2S9y8Xq5csRVWtufvEGb32zyd2jDY9HCykXAzRwVg7xTdV2449jNJZw4LkBkUPTY7i9teepopR",
  "key41": "5UPEbCeMxuoCJ3efrC5m7b39zTCESCmtNs5aaMMFxH2JA5Kd9FBZiXUYR53Qpd2GUXFpo7LWPcNkoJPvH7GA4S5Q",
  "key42": "4F2gHRwWxL651UZ73MvXCwhxoEjAELmmyQg2MREFnFg3bxWc3sHfAV6gpcdCz3YgWwbKLhgtMbQE3zMXsguu9Eoi",
  "key43": "2kndFvAF5WJ89WmxEdnSazurnPX5DQ6GNwVzpJeVKLtudPbooaRaXzo4YdAuxg4fyj2og6RK66Vw27qAAZPdSiQE",
  "key44": "2q9C4AFb6LctVaPorFPS5v2ZzC9Fvee36DEB3CDGpJB2riTQMT9FY3VYTuB2En3cxZManQu1TUwY4LPyJLS8CXL8",
  "key45": "4XKm3NLUg5ofV23skHcUnrpyvngoZYcZsCQR2HUjwPoGLsWJYeEyJEJwpYpmFNF2FzpVbhk1GXcZC8Cp8c2McjXV",
  "key46": "ZCqrLSZiiostKaZ4qwuyEkQUVjghQvdbZfHTttrgji5yFvPQAJcpDqDFBeyn4sdphSCWFpwMHQmbKUBnVeZFAPZ",
  "key47": "5s1V59FTMQEftY6gGwN9CQH8UAaYWxNVamLDuRqjgCgsm4dm9UaxSpAsbVBvq8CCYD3jgXsx9phGAXqkVvYxbKua",
  "key48": "3kY1CnZnx47K2Vyx41irH391E1PrWhRTj2m1hdD1b8JE4tYXKwBCtSY7VrVE4PDEzCHTprZs6zVs9i4x845p2M91",
  "key49": "24oYSU8jmv5545Gaz3vNGfaJwMDDof4seb6wdb17Ky2dhgq5Bgs2jeba9Rx863qnhjdJeVsqoDMLDQ8PoSYo16ge"
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
