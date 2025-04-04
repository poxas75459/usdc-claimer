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
    "5FdDG97QEnzebTjo2dz5DNcCALNsKLWh2zsuLW8Die2PVjGb77fdwjA4KMGqZLbyBVAgBEycHeXYJhcud8Jz9REy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JuGihcnPVqDUoZAxXuUxAPcXmdMFBdAEa9ZZdacxNMLrye2GpYxFh2d6fKZdyGexMMuAyPsSQphryRmWRKF6dLC",
  "key1": "5UacCecKPe1GNyf8cvPRzAuVvq7mYr3cvs1ZWFHMw18ApHJDRbqzNZRbLZo1X71hnuvugeX4V1C58rYk7eA8MDN7",
  "key2": "3gJfZzmckfhkmDBbWWq5QMEhQfWRMyQhjnwxRYcfNgUDXGjo7U3gg6JU1s7cfbZqiJrzbciZvR3J52w8qzreLSRc",
  "key3": "2NwRHm5LmYWePVsgMkMwxpV1hipf2w3Mfgihi7UP9GvCNMYLmm1M9d1z6xA8oMwZw64scb3Mxmb7PUMygzDFCuxd",
  "key4": "647nd3n6FMY57Hb7yfCCUDgNoczE7G5bntSwQZCppdqRF7oBXzc4QmXDDNmJn4rRZCGQ3UX2s4V8MNRZHzRBSgdD",
  "key5": "5J2mC3k51fagU8oAEGTtxiKtBC2Uhpyu8by1855TFVq71q3GRtX2GTHDQDbM571dCANk2aafhHiG39NcyxMExght",
  "key6": "Rvt4Zcbx5yAbo1Qxxy6QT5aUigcLAnB8hRvdWwfHuFYDebjMYojY3EnhMtS988nUQUFrV13R9XcFss2cSTC2S8w",
  "key7": "2uQ7hXwJQRcvAfCgUY4YWw5bKZzCep3FPvPxhpnYwDaWv1maWRKSPqAdofwxC9aM4Z9qrLnTXCQ4djug5aVDNuzz",
  "key8": "PVHcBDuWfXGLSeY4JbaYueYhDHj1u24pB2sCTjmxZSFTUup6UTofaV153d5uHzeTeXQHJYM9MbyuLE8A3RDyFxg",
  "key9": "2z7shUdgRtnVhJEGLdgWvk6wSsuXLXdWL6z6rSdurwL27sg4qzqEmU1rANNpqn6xDqUUZFjojqptpKVHbCBF4SF2",
  "key10": "PP3o9tvS84KUNVpsgP6B36Hoq1PDKhZaD9pR1vSb12vv8WayM8L5K5fbkpezTT6Nu4MY9nRuc5Pf7n8caNCGAXm",
  "key11": "ykX7TNhBnEE6Rh1Ud1W5VANkAD43RRBzaVRunMGkhAJNo1vTwx4VK24dRg3dzzvmbQZ1s9pzgPzwPRyzJoMMqBs",
  "key12": "3AFpu4fPkbyhjGo4fg2BtbN54bWn9jWVqLTNw3jd9UbQfajZZS9TGKrDAkkpUV1dj5jA8p7k7YYqj5FMMZj9s5JQ",
  "key13": "6bCLXSnTXFrznYSYuHwpAx37EMoe6jVenmqeGsnCX3tUmh5GFHYjX3XBTTSv3GsqrCB2DrmR2kcBVSpnFvhVWNC",
  "key14": "3bPoG6UpwsbmbnzedTk8DnPpEB12yg8xFsfsvzF4jxsUdY21PB7XhxpPUQBc7MYHTgqvHvbZuBZEYeAPWQFJkCA7",
  "key15": "398NsERNN629PFMpZDf9y833Wcx3yQa4PU6ZFptnzWLT9PqWLkQm9dfpi3JxArHhmabSHRLvb4BNM6XUiPVNSjAX",
  "key16": "3UHne8wK2DT28pQNF546KdW1UFK3nf7YqVuSRr7nLmhRhKcLPE3cpsHfptjtjNyXFiHCkDygbUoyALLTeFtidF43",
  "key17": "3Xz5WzsUNELre5npJyTymLhNLm5THQsHa5HDax698YRoKSz3Ykm9qmqWyD1fASRoAZfTUB4bRZMKgsRSj6pGCDgC",
  "key18": "2P7PAqkPyT845wtCKm5jxTm6zdaELmSHT3aryKFryRwWYAee8F51kkWSJso139QAgTjwkev9YKtbGshpeXSXRTpo",
  "key19": "NhtkY2TvFZTU1xtUyf6XGK4tgfGNhQaRxy8QCdd4Ur6Zt2Hkj3EN32RiX69NqrhyUUchWnoKDu1SAJ5j6wgft44",
  "key20": "3iCnRQ6kuUmba26xDTXAr2ai1ofuiAMa4M1JKEj7Y4oNkEwWa1FhRwcEVM358NxBZgNc49xhWkheyByu4u9tSarV",
  "key21": "5B4r3sQLr86tDhNUpSaQs7gnG32TQVUPrZeEuUbMErnS8cigyUsdEcqB9V2Ykjqkjv9JRkYfMSaHdoA7f234AcZj",
  "key22": "34514R4axzMfg88WehcUvQyBS1AMLoaYzx4184JrwY4ZaqGb8CiLhR5QdsqcbDCi7yPRrAi859UdBJbZzkoH4om1",
  "key23": "32ymiH7f4gTpmA1hx4rB2cT8hYj7YWy2VA7B5JBD979LjVgVnFxhrcAHht1GbgzPYfC2C3F6DALaymNPjEgEbYGb",
  "key24": "3dXmekGp99HkTTka3UPTdT38TvscwnvzcYTsV8jyXxccWvMwZVgH8CoCWEx4FzyZfkHox6MTu2uSixExDnttiyMe",
  "key25": "U1Tmindeh4w7beiQ3wg8XfwUU8dw8KC57AmxNAyt6wT62Rx213WBE6rZ12jE1kQTpoLjm5i2uRmG4W5bWLwyvbL",
  "key26": "7pm3HxcCaghguZidMfNDR8XKLGK25wNuugxhz2Ed7t2ZZETxsUsz2cmkK2ABtR45anq6qNjZzJyYHmjXznAKL9e",
  "key27": "645TfRzKuKkcoyDsD1cWDePDujHUStikpSoaFi9F1EBe69MeXLsG93jHJoYgRavU6eRktME9BqFsndAwGESiRAzq",
  "key28": "3NHJDoPCg8rNyJcjopYz92m9yf7X515FWFR2nPjNXYMxcGx8WL4gRsWVGUNK19gDF6niZkULbnTL11sJvp3WbG1p",
  "key29": "59tjBVWXpFi671ZSgGNtDK3juzqJZAGkP3wZdQziHeLQsdwg2r1MzGUDyzi5gtJLRjH9xAaF8wfSYn2idKpKsCvq",
  "key30": "3Gr1XpUJRmGAVEj4govaKh6WwjMYfTFxMJ75fVo1rqNKTStsvMUg4uvZQ3GhDpYy1UiKeGJNrjgyPeqasQfgmp2S",
  "key31": "4c3xu6LSQFCrXB4GY64qZRjSDQDNPCMgEZxFWXUKvDNp8mqkN2c77T5DgrHxonrU2tsX57A1uJDL2MzasMoF84ia",
  "key32": "3MbHiCn7QyyVDEmUJZtLfvkZHkMN3pXcs5P4QsZro3hTnhiNwjtCCzmdYNggSUbUhpgK3dxMno2mWPfoQ5Jj8KE3",
  "key33": "48C6FF7j1fW5VBTKDN9CdRjJtdH6aps8M4sapKzcxAds7hJNx1yJkBe4RwEokLrpCi9ewXvmM7qydHmZitA11sei",
  "key34": "54dB4RvaoqeSihpwfqHnxZGpT4ZvyDJCoNRCAu3iSbnazyxEyNarBQJw4M5yuCfVbevctc7BosYY24bgcCfY2PKy",
  "key35": "zwLRrQJRmnQjcUMKnqipHQSdfZBJ91QivwstEbaQDwZCJawQKaG53EYGd6wUPPhysdak156uAuEkPpYmhXnsPk2",
  "key36": "3GJBjmeDvERmz9jUcS2Q5UNJDo4FNhrH9a4cQRzbQk2WKWn6AZqGEM9TMrxeS4L9LGVoXEeKuDME69dHxHdXSz11",
  "key37": "4GLhTqaywxq4WaCeRzhtZbkgbKoobfV9DBxXFWanWXETTudoYdnvMk4VJvsZGTcPenYswEPPQY77MD6EHavLuFHz",
  "key38": "hc8E3j6zqP372pBphCc3KEDn8K53EepchGoFrZEyzHQ2fPVZKhQgoEHrxZxMBBHNUfUgsLQMUFiRWRchA9a93w7",
  "key39": "3ZMcEjYHnzysAovQtuyzB4ihUKmw4tj52pWtRfdhwrBMQrG2FHdrebfRpsC2rHNZFhqgaETf2MPtdxFiTFXBG61b",
  "key40": "4chM2M4T4uGxaTd49PhPhtcRbpNkc362NtALteeKj8k3FQek9twRznDk7GF6ujyGA6BZSunw8mvETZRaTWKMGZCD",
  "key41": "3jiWFzASRUzy1guipcs469wnWFTpwD4KJpE5oSUq37WvkGuohd1PJ9tUkCo9xbMKzEFfrBzMRVYTWpLE3UiqvP44",
  "key42": "5bEsXLLJHxvGc5498qzkLA7F2VXd3M1WoUUdRXvHbB3TbCc48mXEYMCKNeZoUwDSwvU6PU8RLL35gW7XZZxr1VFd"
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
