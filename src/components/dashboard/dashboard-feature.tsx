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
    "2ugiyZ3MhA1GMD8S2vme3v87XDs5UcCRwAU2Yet9nio7FJMSRkbZXebFUP3YGRQemWVt5GZZzGS6JfGxpGMFLyae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZxJhwH2vHUfFSPgqGUrAtk7GjSoaY2F3QdDixikuYtgtwe616RDJZcp6UNwShVwRNGJx531MnPAPPzzrUDoVLf7",
  "key1": "41gpRGbJ9isS85ZYHb83k66Q3G8Ctyi8SKfDeJPsWGwW9ZvCisVUkHzHUuQxqanz4qr16HbbGaG5CF1PHSd4hMum",
  "key2": "3mK1pjHzkWPdynwezc7YPAgayGiuKTWiGVttX4o7Q159c3fGQN8PscaPkjZYTnsBn6TtxTkCuvbLyoXE4ZjGu8ES",
  "key3": "2Ejyd782jzKRxumoXPtpPPG4YJCAQJaUaULshoQ95TmEXaknRxUyGUuTTBsn53vPqXTsSogyi3qSRnSgpfZjBxkF",
  "key4": "2EtYVjTwYf5eTRmqv87zaLnvnMtM3dnqCb2jqMjcQj4obshH44g2YX7sdVMdFQTnNeXVbR5Kje3urEzKNeMS7RGt",
  "key5": "2JUf7f4JyV2oMq9it7bBTk9JmuuPvuQsqWTQnQc4qSo8adT36zfxsctenDsmTysbP3YqiTe5PjPvv43D9qBmuNCV",
  "key6": "3ZNKqPJr6CDnnXgvkQmcoefvPqFjspdBsc3nSFCu6pmLWiierMpUWuUKoWboKWcGAcVG83923LMtTmdKeY39BFWp",
  "key7": "2Wu1H5mSufcL6UznBxA2fHTzPFmtZiq35DA68eUMYwNcNLB15Xi8zZ6JJPwQaHh41Cn3FP3tj2ZfSNEYJwsdYbPf",
  "key8": "47nNRL6dSqEiLYmrNY6Exa42FcbhEDvSq1GqtBQQUWq7rRCKBsQXNyLY4PG5qEjNxPjydN7q8aVQ14Z3L3bexEC2",
  "key9": "5VDXqmE3T9VXKPCU2kFPEpDg6vUn2DMeXQvxbjemewQT8sLAYjitj8uTihTgGPvwPeXcyVnki1YDucqhntqVrMru",
  "key10": "3ksJ8DrKeRBzbdc4ScrEtcPhUQno21RZoy1KJZAg3J17NkhC84CBZdEyxC9JQzx3LH1rHnU7jEmeqRnDF4wDMMWo",
  "key11": "2raXKgNaGRQxXfVSV28JhdkwVRkyk4NZsAJ2xb8wUG6pSsNGNukgnkn55c2HeixkLi9fVWSCeHCNdxN8KVygWWne",
  "key12": "5QsbscKW7BH52SQu1JXMaejrTZBsCemgmVc4ZzvQ8o4Ct2rux4mkDCifDcUMh5iqq2QkCtfqZA94mkWByZAom4KR",
  "key13": "31ZcByoJNo2RdmNmJYjiMoZArRAZXTJBsGU6Uy2cPnPkpvMY74KNhQeddQoJX9SH7FnrwtMHoXAVM4EJh8kY63HB",
  "key14": "JJMqFmr19NWVZXvCABfhXWQ1cheB8vaVuqZHhEcA5a4oiXa2hXEyJM9eAfXUarEYhV6qSUvvgu1smzcp2vn4RMc",
  "key15": "4L8JsvcvSnZfUPjEjs8VtBjKHkhK3KS2Y8vWPVt7BaKQMPAmLAE1uXmsCf5Nrt7Kb9ivUt7eLSHu5YrrpqsSxtV8",
  "key16": "4MLpttrjSiY9GzHA4SzjZHv1jPf12K5gbezLrRw1hdKgZpf5ir37nksDPMdjoGZGCueWNZE47iXd8FNfGnkzuugm",
  "key17": "2iZjMFJCvH9gdtLPR8Nw5hBbrjERNPpAsJQd34cKJoBY8fxcCAS71QYPFzAAg6JeM4ChZQdP52ZpXCVZTWFW42BW",
  "key18": "KaeR7j8WSNhbskk41e2Pq66eKFMS9XvwBPofVusosXnZd3s7zavFJXbe6a2wExYib9L8y4LXhG9FxxjULbuB7QJ",
  "key19": "5r6GXX9swUnijwLgoTSfYQBkTXGaA3gu8Ty4GvsziS5XNUrHH8drVZLqaEjN6fr9uFyE2LgBAQKxsR3vz9dLVqqm",
  "key20": "2HPutyui5qzv5nRvmt5gfrpmKbtDFAYmkHBWd4FN9NFHrHLfUSYeNN72F76ryBVdxdmyACvpMgbLjJP7MSsKcnUH",
  "key21": "3gepSXzPFh3K9SjYpv7RNENJNQKQxCZ5BiNi7C8JJqRXAaULDgrDuwGMGouMkWqHu2ypHdaAQa4jgkgZQE2Ekxm3",
  "key22": "54XaJwtnQw3S4QZDo2tyhiyZ217qKvpLV8gijavTNmHjqByGq9Wk8deKC26xn2MV5AoWno4wAx5PTcvHTMfQhqr1",
  "key23": "2Zur1BTBxAswbp3fomQFEf7RfSNuxfkvY8gRP5xgnvFw4Qgovzg5M9vs1rK9sczAQiYrqQMsKDA6B44neXUi7Wzc",
  "key24": "61cE5UuWuRb5U2mxWD4dBZ862BkpTZrs4yeFt52LEhxnnLpBDtkWMhm4ETQ4gAZ5wPQ8NMv8shADN5jrsDo5HBWN",
  "key25": "3Jj9EAe2ugTmbYLD8SHhj9XDJng1asrtxzJ4pEvZjp1TkVKwq8FzLqh4sfYKn2mx88SDXkyMbREWTu9tVaX5W55Q",
  "key26": "j4svLbi6vCAbD2DgE5Uet8vCgXCXHuerfNc4DrCF3ZSpaE4EaM7FHs1Z7xfqqzgpNzNgehMbF3ZpStkxehj7B51",
  "key27": "3QmYFMJvPgG1bLjbvqMG3Do7tegxpmuUq3DvprSVnTzcAguXHXpZrpSuzS5YrnfApWtTBgc87mhZX7FBprvLfQ5r",
  "key28": "4GUuENWtFb7P4rhUmnCXKv6DS9zRDb3tXdJ1s3DjK1Equ7fiQUS7vgHbwyD3et8yMDRx5LR2jwt33cWkRio4DX7i",
  "key29": "necUdSggT2ejG9iJtto58X1ZZ7GeB2PZq414St3PAeAWWsGtukAwRPEDtMJPrjRyWETiBW1VCVP9uLJPp3G4c4f",
  "key30": "2zn7AmUBf2m9RyQbDUhBqZVmcgYoKmZy2K1jsXjghYQtMCkHwnmo3ZyzacASiKQaYLe1gnUB2jsxD6E2Ln3wxoie",
  "key31": "5n9SvnMymPVwWf22Q64PzVzA3jS2jgCvkNCL89uDtCiNLSCMpjuHVCU9d4YZGshGbu39tw3DQLb1mQX1hwVjfC9p",
  "key32": "4LzQKZExdvv7XcKcwNEgma9wr8Yb1oYGmdYmnPGMWhNyyR2aGs4MtTZvxrFnWZ1aVGeh1nmLmV3ELBhd4nH1ErNS",
  "key33": "3i7wca8Zc256xzcyRvQK8pG7wKWrkqC5ibCpb3TLKEWoufM7Ma4NjqJ62Q3z91hMgJNnqXWM2PufLjCwzPutyGfe",
  "key34": "27p8vUT9qJU8Qnd3bqyvDaca39NMQ2TX2mQhySYqRwrGrNzwX8avLeoLwnqvGTbXH8xMPEfTCNMrjcpbwceS7F9g",
  "key35": "5wR3Te1cjeiYATqD9FmapkJHuAcmvtMhtVF7C3nnJggPdxJyiqzMNYsH3AP3iNjfGfg6CDJrShQ6YfScdzztQc7D",
  "key36": "Usw23hQK2pRcwA5okK6dU8bZSQXgjiNPJ8rr2NwDnmZv4N4cbFenJF3KyRhMdULiSEk1aH2MHFGdSgfgSi5TJ8A",
  "key37": "4fH1R1r2eWb7VF3bUTTpQJGWZSTzzf9rtkF5ZwdRiCeJgpom3o1rw2UVJCQM91u68q5WaagPyBEfpTAe7A7NZ4mh",
  "key38": "nBesNg7pQZ8wZTny2uTetEvDuPbKgr3gbiw8CcKS1kxj9a8vbJnX5wEHwuoEJHU4y8GZHfWt6MXzS59qc5XqcF2",
  "key39": "31Gxv3kWphLgDiCyXvENiRyPWxwckow2KhU64VBLPReND6DMNtF6TtCYMXgCcYCwLw6Lo33ePFnpLQ3THiFUVopX",
  "key40": "4B3Bk4nWDXSMMbgHSWDYUMmyLCjeQLGnPCpV6r4hedDtydKhidfP9bKd4iZihvLiAxYSr4Zv6REiSCinVtwwmeGi",
  "key41": "42zZucZTKaSExaPA44C137oySQGGjpNBh6KHLz53D5AhruHzv22dJjcSovybqZRTfoJE5f8NtNvofYkWu1cLbPPM",
  "key42": "4giKH9nrEoy1ETN4PoTChcGfBrdL1wVxWaYyEQ8brpgx2GbMTVd53DoWDy1MJz3WXBmttQ7nb4HZZdgPQFsLfn9L",
  "key43": "4eR9UP9M4THwJZkzMBogjhqFB8EwGNvn2PnMZnoSahukAZz6Zzj6hzQmxdrPLQPmntKPSPgb7TjoCYy3HE2j8EaK"
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
