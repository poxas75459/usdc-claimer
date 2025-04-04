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
    "5BPKbG5qQ84quaQtDgE7Zr7yZtrr8E5mm2foaV3vYh81q7ktCV21MayA4mnXWs7tRU8hT1QUKpqeVB5qJEzmRES3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oTWUUZsEdcF46xhydFgcAiTm8fEER2wirs7WcAkoos7ZyJHJ2ji8nnAzE2tEd993HJe8cCZzYonaw6UNRZSRudS",
  "key1": "3BaUSgX3nfGyRx5vnPeW3ZtcAFfhTqPERDQDs4UUXKVjpZgUJkoUxM24CzwnFfxm45CLQMpDfywSAr82TCgzxzj6",
  "key2": "ktprcfYZoUsHgcEafUi6yQc4Sn27zd2aD1cQpMKiXjTBYryTd7ot2Mm4JN4PxnyBApdweutGr38FoaqWCvLiVRs",
  "key3": "4phV2fTvpcTuF8G46n9aFndedLGkQdKQJNArc2J5u1whBKywP4qLAbXy8ZkZssZChdEN5rFdjHfHCYoGHX4UGGRH",
  "key4": "5GQcjXyXnM7RdLw4Dku5YnHNjQ9FMWPD35JFqzUBXXv4zEN6gGLghmdFcsNS7xUs2NM26cqY5sbegRTiX8mYCfAY",
  "key5": "4hivSW2kKhAqef5M5j2L68sDowjXZrf74ms7bNxqGhJjhJagzfM5QkxS5xmc8RkhEiJAkRAzBheTutARNcziAvbd",
  "key6": "248WzCTfiukUs1BU3TuDDk7PGXCu27qLmfo2dFSB2JBkefRFfdr6pXA1wS9pswXDnoVBq8CaiZiAMUtyrHqu6aVE",
  "key7": "3GBtc7PkjtXKzAhss3tivNHDKdfzELFpfL9suPpWgy49QxCw6T6chUYuTWKxfevzPdLXEiotNzG36RjQNGbeJswz",
  "key8": "y3qadPRYcSA9TKTcZTXPtqh2aW3wD7qLf8axYNNFnBoZX1bvQTgQ2bShdFQxoJybP1Pue54GFUzttaowkoMCzNC",
  "key9": "4AKxbiaLkPRt41Aqq4UyNWEBiMF8qDCozdd8e6jpYSAzVpwJjUVtaM1WQ78z3hwr1fd8ArGrpEz3gbmbCV7gthhL",
  "key10": "3sDuHhqN9V9seUFdTJCvhEbjV1uHVd6HFRKW96SQy8cf7pV7rxPXJtzvhmr4QBHuXARjnuP1M64aSpgMjS22hrwc",
  "key11": "WFnrC5fUY3GjMJD3UQLq9kYmh4YxbDYVb33F4CVVwpPLMNSZrSQu4msgesoHGjnmgc8ggxsgTyRH8dap33QVEiH",
  "key12": "5AFXyPLWkNf9CfiMGwGU6BHP12t77kP3oJDoA9EXt9n2NWr9EaqkEEof94DHTvDK6vAiuVHK4KUMN7pKMrp4inkR",
  "key13": "Cpn9iCVRqPf2AgQnXGXcHRrgzRdpWohY3VGJY8fYwsmCJfgayCUZQ1mmbydZtxkDyqBusRZyNBhKwr63c94cxJn",
  "key14": "4UZ8QwLCmA6tsLxQvjzH8zBiq7woUQDGeCTjg4hixoEFBoQg29Q5wNF21UiDKGm4QUcoNnj11NLh3nLGHnGKmoUT",
  "key15": "4phHBf3A2pia5kuYsVpZYgtAQXthnQt3zPhQoJuLf81NB4gZgmm2cxeTJjusAFjLvFe2jxii4iDg5uoBbMqonRSH",
  "key16": "5S8MDuBsCMD1GaZC1EDQaUqgCHsmL8dgnDw6rBhysEYxbrv3AAM1hRS2WQLRjQ34ag2hN6L6v427w9Y7cHH6vsKd",
  "key17": "MhmNBdw3rRxWzkT4G8mJMqiK2NnGVPSGN3J4dspW4DZhXS5cL2TRt5aeuoDQMZ6487xMo29x7ud1BETiV5NtJya",
  "key18": "3j2rXscvsKn4gqgaRb3fVb7fqdfNcPmxYdzsLC1EKgsjvBC2cSp3T1VPUrVStGYKgyYLuUDQkPovpAdhwHEeY9Ec",
  "key19": "2HiKW8viPR7CxAVkPtXbGY2jS3pQeJRqEnaCo2ojWPqm68w1pcMkbBD2TqvTeMqHEAa7eMHpZUVPsw5u381Eu2bw",
  "key20": "3zyKKzDery6UAAbFMHPFGZJAvTzQ5yz9PZ3jvL4QQdAR2nnPWx3CAH9vvaVZaCUVMBBotJioZr6D1sT2qnzq4tMB",
  "key21": "4rXbQPpuCVDAnjSsSFKvCYPVT6RhhfaqmUFxNYqwQqRq1wKCpb3EDVrqLKqNKXS2T5eem3iR8h6eo1eMEJ6uwUud",
  "key22": "mpD7keeW5zp1AbPKitQZoqbHQPcNV4RA3wWz2wC2W7QTLmdp5QC55ce3snvx7LVskc7pVbq7KvYMAM9QpBf6Zqj",
  "key23": "5KY2KvDsUKvQBcYdC8zuFMhEhENWwcWjAtnj5XGxCjmKxzs7c8Au8C5ve3EbwpnPeWypBzymikQ46rLar3Co8kx8",
  "key24": "5dgsimc8n5B6xNzoPZ8t2fLUSSPXr1xXGkSATDmigr3wW2GYtm6D7mw1KC75PCGQNk8TuWAeYFGBXm29tkvfBt9P",
  "key25": "2ro1oz4FYChUsBi9NAEDyUtUc2szUjiehFDQHwDpH7yKkpgDuKLsmsRBQ3WG7DVYUZvP4v9iQJ7LRymQTcDa3r2T",
  "key26": "2RnUg7hHWyBYPQRmMzH7SYUApMRs1jErewUNLwSLSrWFLuqvbBCDJnKtnQe1rck9MWZpMs9CcTYgTi7zMeobtvRV",
  "key27": "46Ec8NdCE9fmcpbQmgy2htqsQYreouhcFwQkirxMywGuUGiSMDedck8e1uFRvfyr2dcwwdFvd2pbZeJNxwWGu4L6",
  "key28": "3oMDTiT2WTWkzrv4h8QEvCj6mD2JNArsrCbVuujGLQbhVMpMrdZrUeb2XbNH83dXEyrGKQ7rNE1JsSH1kSoickVG",
  "key29": "4Qg14M7mpjhZhy8gfViqtL8LexhyTCxDTrfGZgMU6VyavoFwBYstdu3qFzRsxxcmANrvU4QEEfxd8Dn8gco4TwD1",
  "key30": "45A7StBzc6dGnhBLMmJGtnzrGdTv6B8ziy3k1SCwfrzaTP2Mm8VvULbUBCySYoWx6zpruiFTU8g21HDJsLkZjzMQ",
  "key31": "5qE3KEEMnJK89rpPVu7MXvKupoi8LJDQT4tE22qffkaKXVcmpQfEJkwDHeeN9QV8akwC2atxr8mSLC33JJu4xjdZ",
  "key32": "CBTaWaXav17Nsk5HaqgPh2tik4wvGot4tTjgJqtv6MRBnewLNoiceAvjkzCxnCqw8nqNeMvQKT2UARtbBhuPadp",
  "key33": "5q1veACZjwV8FBbFonhBdT2dJgLE4wT5qaRETCpn8zqVVvunQAxZ9gYF19JRcDjj4bUoxSfH29sofnL9yDyGT2H7",
  "key34": "4sDTkoHTX5Bq3RjmpAcxFBVXvhSiJpwVcXfEM9U96hgsJFbhzoEUUGmjxyUZeYbLrnf13jqQficdKnmvJrf4afnR",
  "key35": "5ZJQGJUXY52N5L4tTmAc37CDhYTyVN3F3ZpjnTBkHvPVAFCE1xB8sM87rkvgME1QeeTttfMseceQf34Nny55TTJx",
  "key36": "25CNYdKm8144VmT5M35NbZV1PHqZGTKuA3uD98PxQUJrSpSTY2yQnzGqSbiZUjpE1Bn8umuidgJxbN7RxfdCeQiQ",
  "key37": "56W6zYTS5PMmFiM4BZVMnCqYfieUQWCUemLszuvPGtK6AFqQJQY6kfQF35TKXPD6CHpDz8v1baqXHho3CkyjDMGT",
  "key38": "5aoN1UXpFW4tFt2zFJPAPgqojbDWru83cNQWCiygpNqfjDqWLanjn6dV6m5JwxtfDXntMPTKnmZ748HDsUmadAW7",
  "key39": "3dbzH4XTjSn4tzT3BidfNeGxBzFv5z68ya7CpUrX8fnSwe8KFVxyf2t3Fx6J7mdBPurRDqXbCjjU3Dn1VXmQVYr5",
  "key40": "3CRntcWF6gKZimQ61be6Fn3JW4uXqFAuAzwbz4QijdF2na75YSthuwwzGjhAUsqLNXdqPCy2hikYDZyUJ2t5BHwE",
  "key41": "2z96jtaT5aJWy67nGD7Ti7j5ocxoTCP8c53oHebXDgwxp71U1BDZXxAQygAvYusKRfjVvgZq8rHexGxbdFcK6BxP",
  "key42": "g73K1t2q6hG43EEieuKfqdLsCnvUmYUsioqSxLMMGVkiMwfA6ZDhkv8c4uK4fCkrP4C2TaZwTqwQcC9LujqaDP6",
  "key43": "5rZzEE5ntN6cCvkLXM1PJsGeHAwn3gCemApgPZz4iYNtnrxZk19nVzTfW9KcBXKaNv2yV37qPy195Nw3FceT6Tr2",
  "key44": "42EdaQtEb4pMckq1XExznZEjQeZUjLz2FNnUNgpFBtT2xJhfM2TNQJZaXCLLWkrALXGMmAqT8SDk2tvcsYedTG9o",
  "key45": "dQv2AGGQKiDwx2QC8FNVH298YZ6cbLxZrRdRaDxTEsvbzXGDzihcZbUFTPM7Jdea4t1fhFK4aBBFmfubNQC4pGu",
  "key46": "5w6CmgNnbE7sroZrPnHWc77CtqKq3iBFp1avqST4rrAtPSGUuVsGagtChFXQRwBkM1B1oyUDEon38vwx1SBGwUJC",
  "key47": "5XNgZ3Sd7QFzY311yDtm9xLsVXqReL9srhqTz3yYLbdFupqFN5DKH7FWzshLgFZyXhDp6G2ntLihMSd7adzG6orj",
  "key48": "3PNmG1jBXiwqPuhBXuaDo9FeCQyxfAn48KUTr9PuqiBkjCXifvMkxeBEFQ1uajtuxRABD3T7Yr6GYFyU3EiSMNWQ"
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
