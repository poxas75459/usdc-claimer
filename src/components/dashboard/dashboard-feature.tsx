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
    "5KHBpt4L6phNwtvcssuLidieiuJ1Rd3dAp9ceVXM9YoMw9t7onh1F7sALi7v1PZVc1ReQPeyw19xLeotwrHMZwVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R13xntrGNowLK5MxiUxidw1CU8pqi6GPTPByZEZmf6e4z45gppT8rbj6nWQt7Rr5Cts9ZhKRB16FcrFdNB47Bsz",
  "key1": "5r8sqMxHRZan3hay5pywS7ZbMFrYyY4ZqnM4AUETYahdDikXJASLu7KHmTSssJ6ngn2sUADVjb5Dr13kBqtNz84A",
  "key2": "2AyRn7rPwRi4pxxCJmvB95HHCxWaVeees995tdK4g1GBsX8BDk15CW1LsZAXxUganU2hiLCV4Qd53Kw8tuA2cnYw",
  "key3": "4gyuJfNhC4X2ugW1fn5kuFtKXeSNW32ZcYziEuqHRBt9nGc7r46QwU2JNMRUPuoLomFVbAw25cLbEXSC9fKBee8N",
  "key4": "3Puorg5r71udUVMri33SatEEbyaf73PFJgsLtetNuWy9ZsxwaTWaRiWfhosZabo7W9kgZjsSap9f9nhjcnCgbwiZ",
  "key5": "3gLZzs553aAH5eQ7TYiZUWo8o1Kszec33ujTZQcmDVYTQkW3JpiyYzyTbDzZTbZCZ9rC9e3ZRFGVd1VCLXYyHD23",
  "key6": "5PeGAHugh4QGumpWEiAmrLHfKbbNrZoBrhB3RB4qb9tLw5pQyjZiAEkYHMQ37JcPxJHCVFJeZ7Ltz22FteaXocJM",
  "key7": "3xWb5P758QgKpyNsYEVpN2hawQ2kxvAdn3se6Hp5echkMzvyDHbTqiGn9be5i1js1BakDrVXAesvTroAEKkvtJDw",
  "key8": "5t5cj91bJtkNiX2JtszYumrN4x8LdQC5w2rm6FuKxwUzS6bg4atBxm77MvzGbaUmY87JZ9MqdXPqJwPC39nTV8ao",
  "key9": "31J4Y4sXnpY9drrKe1PALBxCrUZX9x65SJ8LFrEM8XLncTHN51eCqnn7GJ1xPJtqJvzYWKVUmLhtzJni5qc7s9xv",
  "key10": "4Ynt9uVpeLDa5XrdZsFhQZSwWr6TBCiroMbHCVuv6GpWpqywAEVxc4xP1kDf7Br8nihinrMVtDkTEgpLLSCD4R25",
  "key11": "4URPx8wXr5r1RZ53dM2pv9pE8zJj7HBAddN95Rc7b3Awxt72rUdyBe6HLW8Ufmf9b7sR7pTn1jxq8fA32XqtU9D",
  "key12": "3PQXanhtoKubjA2ndWhTsV6NVQaqbQCzsAVzuTBCHsRJXdrYyENdmotEaNR4ecS7ABDkVnTuLixjygCQX36rfv1g",
  "key13": "3Cfs7LDSen3tAGZpkhoZyosqk3tcKkgB6wLFYnuMrT1nXydD8ZgCEX2gMizWdafYxyq269Pp3dGiU72WdjMktS8L",
  "key14": "2tTQxE6bRgmfEyVoTJiGN9ASC4T6jFEnFcqCrPGD6rgmr4uEDfbCHgkUSTqtJAkYK8hnFBXrFRuU4g4cy766cwwC",
  "key15": "2RnM3LwJrFqJTxGJ6QUQzPsZLFhjrt44CGRRa59EHwwy8HdWqwP1Qx58i6oYTrRZzBt5g8cyHaamBxxBqq3tWw28",
  "key16": "3E7MQNieArnqMQNXii9rAN2GdwMGgMRwW6NDjjsWyTk6EhshRvTZ4LTnk9xGNVEY7UMoEStn543DCc3NFJ6Cv4Nv",
  "key17": "4oHV2M9T3wzcUxYUBUJytbmDYwXmMFLG1P4GQT2UNzf5BiePxdyo3nVNA2zNzgq1Gt31AgnpBhFiKVPcA9uKqiCo",
  "key18": "3SLRWUsxQR3HBT2f89Ww26Zf1WKUijJoZvHq1fw8yjeKDmP5AFfescQ5AJj3yLiy2cKduKMw9t454WvcVTjSjG9i",
  "key19": "3DrUdzx8Df3jjvimW6ybUXKWqzqM1n5GPPBd1vciEAJ21WeoPcrKVc3UGaQRtaeWJCyxtrqYf7mNVZBsrLNnLgBr",
  "key20": "RHLQF1sAkxPByHum5wMps4DdJBjC3TVZqSeByq62un8PEinAhFWFpgXRMEUyykS9pxDyTK8eSarYK7Z9oxJ7hL2",
  "key21": "u6iTTDbNLwUS8dxs34YTDkokciSW5XwEnMrsbaEoGBxNtzSkQFFGdxuY5UfYGuuWgf4VWgFojFVLPJh4eJZDsxM",
  "key22": "4z84ZmKj3xFaiJLDSNowPKgZ31VpT6Uz8XP22Z8BTU3SU8bGz8qLexvVu4PWJVG7hK6pjW86uGtYUHuuwZueQbED",
  "key23": "3Pq3B8fhy6ck7e8MSnxGqPUj2UUFkbxMzUBHDFuVkGhZHfZeVPt7m39vBEdiL31gg9jDuUGC7xrm9heZe6hWaqjv",
  "key24": "2Hq5weuPVQ2e1yVhjxLdziZzaGHdg41UdGkcwBD57ajyiB3ASA6sMd8iU5F6soJJBtibXf2qtfRnAwkpwkgxhEdr",
  "key25": "5nYwVdde7ipJYvaF2tjnXM5ZoJ7zPKhth6g3zFGKe6RunJVY3zaFevFhbPMLJ4f3VJK5bwWR9JfHn2ZdcLFH498R",
  "key26": "3jvbzeLQhu7ea8yCjRA2o8uyw5MDTgi5jvWqEH2e5o6YWt6sWUXMvmascm1ngroMtwpzgjaTYZjkKhcLBDKJWVen",
  "key27": "2LxMRHJckmwkyGz8zRQGZ1mmRrGvyuyDbgu9uUC36T7Wg6nWEaug7fF81oZ3kUbBVWVtBPfBDuJQMYv8PiSudc4L",
  "key28": "3kWhvWuADznEbqJ1TMZo7F9XDV4t86FoyDZPayAAUgeQbx1Fej8XWGdT8KypMATt2AAM3cJ4dXv7DDLLbDt9QpsD",
  "key29": "28wfbtXUfSXHo2oFxvhiXNLbUeZyRqtHTEvEpNmq2H3CBYiQeG3o4pL4AMPCmGGkXBJ7waSicHCHedGyHuzvSDee",
  "key30": "i5E6E8cVy8Aac3cF9TszGK9zg11T1YnvHvisTpPDfBvFRWG4yXVHLg9fcqHaL6ADQj7Z2Kpbp7A8Pt1BNtfzrD1",
  "key31": "5jVd3p1H5Zp4Fq9QA2cFZmkWyX6Nyv9s9mYoAFappU8nD4x7LMxMaGe8eeUUSeLbAPCCFMGx8YXN5sKSrKQyzhAS",
  "key32": "SnvgTyJjeVAQeXG3cxH7dTmjz1gZ7K8JhXAcgTZgRnTH6vcJtQAxPpSMF48V3MbdUCwtmSS1CJAZkQnp3Jv7xDM",
  "key33": "mdmZuri8WTvQTed7J3dMxiJin35zt9R2W6TXhRaiHcDDHKXEBTNioMZEtqY61LgALQG3CAhg8xBDmiQbrU8NGXv",
  "key34": "Dezed6TL3sBT2YZwWyNZTwR5syGdxzzNpcXDkgtNbzcD6UdHX8g9rxfKw8CcEqPjrQ7UWiSpnk41H3PfTSttFzo",
  "key35": "3UU7edWwm1yhBoa5m3AoHh7ahS7R3ujucWqueYgYwgaGs1dxse2be964vmaqGHPpwpySBLMNo1dSQh18KJNkMaQL",
  "key36": "4UY7Vn6cKhN6CJ4Ykhgo2Swp1Qd9HN4MFtd8DVqzxuRfzPNigfaRUBoJALbTC6dXop8jtebVVUNUpXuuA8HgpajZ",
  "key37": "5PcFvJgTqy4GRJVDC9wY3BAE55GjtCUoDFoSvozXorqzmHUBCz1SujHQ4h8AHDdtJcVEaYM1SGLKeMK3emx7sqLx",
  "key38": "4LgHnvxJdDtsFSr6Q35nNfEm1Li47azN2iBEU6m5BexhxztcE2TUYQ8aSGpkQjUTkDErxBHMa4xLw9SdGTp3CEq5",
  "key39": "5TnP5MEHSuCDhZMWkdiGjpHgAtkWV7LuKSjoNLiQBRBygu3Zi1Sx3w1zXbjPMrAFWF61XZKejVkVaTCmLCFrVyHu",
  "key40": "5ELKcWsy2DispsRKnVih7XYdpcXn8hJWUgEiKDj95uzfjNF5nrkBboF3Vod9ZfPunGAtCvCW3L3eqGD1B2gD8Beo",
  "key41": "2E4HopFoQepAvwfyLYZzbzMxLZrnsdB2WjDHRFSBNvVbx9KxgY7vtN5rXk8nXNY69JRk9vuNsCWBbbGNm8cmYuVw",
  "key42": "36P5Bmv22kferqt4yEg9gz1TRPcbvaNVqRNX622uTT4brDzX1hkPzeky5yqVGxKhVHceuD4Rc4aUixHFEuHcsCKc",
  "key43": "5gL5HJG4gcCXkQJd6ByvKRwYvoaiWkp2NZcu48DToCUv5Sit9DumGkpVrSJHzfQxvdcdaQQUpoqbxnfw4M8fKui3",
  "key44": "2Kq8joDqbU3jBJ65HrJmkWvJrB9is5unAdyjVNVfcc6ZfBEjBPw8UsvHRqaJ7RQi4nyS1nnXXVSgv93eqaLHzPQb",
  "key45": "4DKJaf7ruCkNqeQujkQjYj5CbxmcU5DwwQzu1q1fX7rmievHiGkEeKAQFuEAtiZFtyfk6dvm4NMzEv7Tgs5g3bhQ",
  "key46": "qgKjuQmG6zKwUR5k81yXUyJcdYHZ9yFiSFowzo6CRNeCdHxgqwPnQcdbzUieSY9pTdE967zjLGtbTGbWsM6qV6S"
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
