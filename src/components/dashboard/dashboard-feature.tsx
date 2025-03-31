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
    "35LQvCEQS8wxPDTVuuirw1ALB6kp5sEX2ya9qkfzBUSDXuAsUxxmdNke57Aph7CqkErfKahYxNVU4jhHPXxv1J64"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ddjc8dfLDqAXMqc6r9gJ4dXDPJzswtnTu2YSwJQwqAkoY7gaHMpK2K25V3SreHRcMwocftJ73JFzTw8mna7TYhK",
  "key1": "y7D1EDvqSJjUpC8abHtf5cu9PLFuvVywPnuJosRyh3EZRWtQVnqpHAb8KyYkxJEqxJRtwMfSNYpuePKpxt9XDdQ",
  "key2": "2Qh4ieDLzwqEGHhqCr8QMtAkLC72WM65UKh91EdMd5H9hVnvW4dWVxAR3UtW4WJ6YvABHaQHnjoF7WBAP3KNSstD",
  "key3": "Gu3PogtFawh9MaRHD8w21epRUXa1vsQFWBHwwxQHCdNQz2xGp2x9jWdCM1wu1KUJaB8ZoFE8PCCWNxGRkjPDCcT",
  "key4": "43LtW81K8oVAbEH3v9PeUhGq46Sbvgf4hevNz1rLojcoRKzj86VrQkEATkokWhPmbudC2NZNC2BBynm2fKCDgDcQ",
  "key5": "5Y1DuEpy8MeyemJA9Nc2aDYGTH58Qtypxxtp1ZBcrHz2xaEAodiKd7F4HrZje65arh9bdgEcSWiviyFAM21fvroi",
  "key6": "fun2gtZvJ7mAETAnuhcdZpmXZWU4Q3G5L56gKe5N9pS7T8LwTdb8MS22NxnBGEE4LP7ztcYDw8kZvzCqAUazbbx",
  "key7": "XxcXDpLZSCpQaHbqVRfWi5yvxTeVWGSboN5qPya361zVRaamDHKMDePJ73YgMoAizuzyP9hfKmVWDXtAXA7TBFS",
  "key8": "4Rup6bRtfuWgkpUkTKcsN5jrLEW2MLkuZskcpURYdR8upopThkFNNuhyHjBNwmzyXF4M8QcL4qFjJy26ULJX8C3a",
  "key9": "37VNXT2eWzCpUms9mkpbvH8om6Tou1ckf5v78Gh5txNxJBN715HPP5oRdXodUZ6SEXJdRGa5y1s25JBkHidVCnq1",
  "key10": "qUD59YRXRu3AMEeTDEd7av1cPY5DzSznWvKV8t89pXGA2rFJ6BZDBbVzpV4toJ5X8XDjReHfgw75TyJoKzYeMVm",
  "key11": "2We9HTyqb67BjmLoWAP8WBBCwwJv7kt6SEkwANFbv6W9DaYPNATYyfkQceEiCMSZSjFMs3dufSYtwHFo1j1VQbvS",
  "key12": "5CvqNNf9kgNgs9FYhwDkUp4oaCTxqVMTU22WPYjSWUasMr5d9bWuGU9BWYpGtQVi5LS7KGYa1SgxoGtWPyVqz6TE",
  "key13": "5VBkN2szQ36HPS4xPFAoan6taAdywLM1tSh1yq7f2VQAunrfx69G67ANiXyrEw7sCebBg6X2uB7M6kkHtPUKUwq5",
  "key14": "62HxMQiUqXaZhCtJaV6F8Fjo67EBDLeux1zkVERMXSr3ShxyyMddhMkfoodPMcNW5U1mAdBq1ACgGLuxcnUsrhs8",
  "key15": "HoxUxsWwX9f6fxwqRJ8GoRzWrJutfJYLt47qjgecDxtxiJ6722gvMoJwcAfjk15yEcMzecxBtQ9vEpUP7ksbdTb",
  "key16": "5j5QXKKXMuN2Fspp5M2Q764DPvb7qSTqYskzEbEvgVo3onb4vtSVmf8zD6YbRgVenHYsqMV4k3VC78JK5acvEC54",
  "key17": "5Nkck6dquyvsKbBTYFkGZCAhTRhEEARQfoGvjcm7RqJqdHepDYStHqRNeEj3Et3Bwc8Antig94vgYdqxY6rCy2q3",
  "key18": "4S4GkS2GQhCFLJEYhBvb6eerFVzQL5BUNA6oCifWDsnNU5JpvKz9G5q5Xnw2qxvACGDRGPBscBdVVKGjNGqAMAjY",
  "key19": "3pizNSc318aeezudsVxqiT4tZjGAjJZnGvHi2LCrNrFWMji7Tf5jPsGCRW2hpXJq1RxwHkUiuC7CMeyisYmGJRHv",
  "key20": "5NSVgvTc6m3Mww8FEi2wbKXsNX7cqe7LmsKwRnaBAG7yeW3cxwoU3bck3fkip2xxdDKR1LGtVT1NTYxRAnQKk57N",
  "key21": "3KotHAWDKqr94uXauSK69bCFhWSgsHHpVRVioj1DsiHYgFtJFWMZgXRwJMWU4XzST18reJmmpcNccM878YkihYoB",
  "key22": "1WBwYYmmzhKFHCJ5dXqfu5T3aPzG7aCRKNrELt3q9c43ddccas1CCHroWSDoD3XM2zsf5KL9bJvYqHRxeskST6A",
  "key23": "xupJFMdsuhQSWEKCtkaq6ktxe93yrPKUwhA3iJnMp1gSbeW6Y3x3kDvJb8X3bEDrsdn6TY93DUwXECCZe9bKSM2",
  "key24": "2buvmYz9ffWShAmMBbyL7kwXXroTb7ng1UVCVKKYPjgG5ek11b3Z19dTMKyXzj4JKypG5nyWQU3kQNqnCLUBTD29",
  "key25": "4Nr8GwVqPsRdBquLb5vzNY5Y7KP5fKEYFNUxYDiZYsUHN2kqmg5HgpkDqzZAyVbfMv7gyDsyrbUZ9eRfDnQKUdL6",
  "key26": "4o2NNhxet4ENhzD8pXCZyg7NZpwMk8B3ApTGnbU9xy3ZCWic5z6eLVVUyeHYBRLVuCUsER12uRSiW8D9yRsmkqgk",
  "key27": "2U44ZydZfci7PJ9xFh3JTwCE5KTT6kYpUkJwfab8hA94KNA1W64XUjZBA8tnnpQrAZ1UCqXimJEiyoDvhJhrKKcR",
  "key28": "4ohc97xnFNDrCZ26mdE7nak3qsbP82og6uVwJ1sdqU1LM1VpnVyNdfgVBMosV9xAmLRYXY3ins6WzdW5DBUKQ7Cg",
  "key29": "ZeD1GAUQcxjc62EKAprTuQfSX37yFvTmoN1gpxYRRuRwjAFiUcka1RychLKkPKqS77xFXNskZDGiQsQ3nfvdpne",
  "key30": "rUeNzePJJEHUoQK6vEnMzWAuWy3TcvgRDiDLrkRs6SVFRRaWW9HowyfLzqGLYaHzC7FL545g9XFYkru1Akp7A4H",
  "key31": "5fMH9QR2F43xoXwMCEZkTG7rm7eNGv4653JLK8ghbL4ZutYnNMArkvVc21D6bukrzDxbNUgCBBpfEVr3ZcT6GCLs",
  "key32": "2NDuHwVoAJ7n2wcjjxXhTFBDuuPTvRrfZVP4Eeg52ojhveuvBtqGS5Wfp8zhXB5xPVuP55NxLc4eCofGkVkUrLzi",
  "key33": "2ChoGJfTHQ1iQxE1C7in9quke2C5c7hCGg1UiE3SEgLTDQcjXqbm4UjTibVUVgzdu1Tdp7dehmGoKrCSRv3m3TPD",
  "key34": "465aqAQMUhK79NSDi7FAKh6nrBhmsrn16zXaEJu393gJqNaYwmJzGc28VahJEH7c1ZnEtDXuyQrWPusyF4fypGHL",
  "key35": "3dKXoSACx1LTuRAeqwPjZVq5ompuT77RFHb17YUreaAMpkbYK96A7bh6ethNJ6GrpdaFZmGjnKaRyEBSJty6SJaC",
  "key36": "5xhMTorcyVoKVKXArSHVaV6wsQRzZjKnjYUvecXNxurpGnxWNSu7KkQoDpK4h25qP3qiujtjzENe3QjwFjEQwJ3x",
  "key37": "236DYYnVecLRj3oqvK2cYiCWUoei56hEUN3Us1EeATxe9ZCkAHPCCaaNj45JAK33bHknGZJSr2baXjuAhBiKopgj",
  "key38": "3nKeTt5Fsv5mimvx1rgc7jDTozx9LBZQgLgeG489VPDWJNg7atQ5KujGkSkEtNDSgQ4HPwxmrCAGuzoUQWgdNWhR",
  "key39": "5fhumPAXBFqxumKPEwvDdBGXwcnRLav2m9JHB1vXcQtcqkTyTY8MnUQsFtJ5WijrEXbFZyuCMZUnPAorDCkXK5L",
  "key40": "2FFwrAbc1n2fi6kSAUh58cSLYGiMw5YmopNwCL5PGg9gvSfed3Hni38C44241Yv43P4bwa7G8MC1RHFhTAdYUzya",
  "key41": "3QqxTT8udsDvhxNYJx6MN2k21Ce7tjue9A8D8PwFaeiggf5NyykBUri64JLkCsG8mUQP3qNvTEhNAQFF2ZnC3uYN",
  "key42": "Dn4k38FM3suQQjbcXd4pEdFA8pnQS2qi2bDuTokQmDUnDkBDmjfGnimqGqjJyCAB7j8AyEjKt7b7PGSovWfJxoZ",
  "key43": "4XVZn1CuYfDqs3ht5PuMTFGBp2o2i4EMLFfm5UqEH61Stu5bnjn6GveWzDhVAHu6NDZLs58QYL4dobAqo1WVds7C",
  "key44": "1SozZddgk66obr1wkBiBa86TPSBNrYgkbGfzXuJsJuCMdnwaWCtZtxQ1BidY4MA9KG2aUGAGLKpa4eEV1hSmCFP",
  "key45": "4QJL8JTAaeZ2tbwTN4htEtYm9aqZgsTcNcfVmCbVvPkK1PgDuNdTntGiE3xmUFt5Cku9jpjkRN4Lmek5yUNVpcf",
  "key46": "5GBBKsXPLeEfr2DnEaCaVqWCQ77aezEJtJcw39nXf4vL6Hhy1aMzDn2QapJoWTnJBJWmbTxNoT6GypcBE9ZLdaT4",
  "key47": "3tH6oRgH25frEgvJ4SqiiMLQph42mBzh7T1pWxavwod4BirvJwvB4Un2MQXg3ST227snmUN4GT3SqQZVppvnq39t",
  "key48": "kfyWveozJH7Bihiyor7Y8ort2rYBxJZwRFNvjybvdbSPfJoXD9C3zyJ9GyxSfrUEN824je9MgY6AtT8Ry3KMW5t"
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
