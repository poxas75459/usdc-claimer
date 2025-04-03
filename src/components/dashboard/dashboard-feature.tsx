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
    "tPfaEECN7DKrP4CvpMprSY4Pyi6gbk8jdwqgdZxuWmDEAWnL13scafmtgzsHBrmj4FWujH2GTSuHaQsb8W3nFfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cQgUvp3syxhvDMMnkkcLs4fipfbzkaMQUio54QBPXX2MC5Nz1qAbg6GztHFtEdvkZiQnWzh4QVczz1MreV9eQ75",
  "key1": "zSGHYRczqZSC7WwfcyXBFUuXfWVaYaNRSUnE3SncUNj1Tzh7nvNdcsEsBedjMg8oqZbcTHXJyKHQwfXVZ1SjNMz",
  "key2": "C7oAk7WgJZZFoobeSZ6U1mPW78Z5hHSJJgYn3RARg5gxERYLDQFREsGM7UPdCgXs5Xd2aJoUDahFFKib9Faw25P",
  "key3": "3kfh6pCMaW51c3JapqnqYkQD4anPqb9KvyEmaxHADQBcoYXs1Tx4ovyaCbxQCgjh9Hbb1zsyadTkq4oHm4CBjKcH",
  "key4": "4H3RS4kUjg65Pi8ToEirMKDqdB575pp2XGE6LZjVGTx3JDkfBDZ8HiiuxcGdpTR8o3JvcersZcs83xakVq1mV1sc",
  "key5": "3Qk9pF3NZLsiWo46CQHan14ATXFTX9e9ZGoRbzE2Zmfg6J4QH7mk5GfiAhJmcjfsfPz5dNXJUAwmew12SkNxS4Qh",
  "key6": "3Uw6zFV9U9pkNaVCEsVY9zvRj9ww9wfq2DoDpLuKmeatHRRqY4tbivngJD6redq6uuVHiiJp17uSddUYJscj94ak",
  "key7": "5hpwFsaExVag7CGcaSSFdvAaKGzmAFPuopjBk86ytAuJokqV1aASrV9147NoKeAMnom3UNGUoDoYVoo7KrQzCmQa",
  "key8": "5kMTLnA7v5Z9E3fhfus8ppNCJq44qW8wCQ7MkLLBdG183tPCPea3phT5cjUnMoKLwUbo5UDDzMdenDjJ9GTom3U9",
  "key9": "5B9rQNs3nijtdyaCjk9jBWeRjkTnr176XfXqwSUE3NB4sjTjDKFyzuvpuL1uagKMMEkMkkNA7hVdjLxHkvVk8tjW",
  "key10": "563Gs84entQMtDABT2Pfri3X83rjZqVLRWtuV2vdJAR6Qb4tFhr5TJdVF4qLuALCQ8HWXEbmmUVSKZv96V68Lbxf",
  "key11": "5LihWjW2T7ymptGCfKxJaPMeW6V1rjjszU3gnexyziVe2wZexcDuu6CJcWpoa3ny3uWLaWBwfPLByYVC1w5ThbbD",
  "key12": "2QzG7QYaMpUWkS9ivFuPoV5r3zdagED3CyouUAYUYcsVKf7rZCb8LKzaS9Sz7z4Q8x316ULjjfHXzWNhAdWGcvf2",
  "key13": "4A8otzd27Pna2pHUET7m9dfaMN3oiVH2QzZBL1gFQhnR5AGCqqW8tQsCeFSCiB15rEKJRSqHBVpN9YW8bdREBM9r",
  "key14": "kwh9YBrdivU5pEoD8Z7tDoWMqnLyYCUsD6hbP23udKX4rg9FF8QBXAKtgE9Z9iXK4hjTB671DtQ3cUD59F9Zo9N",
  "key15": "5whFvK3yAsF6jDGg7o48avTQ7EGiBMow5q1iE2x7Javo6HVEdAcQDgJR6pBuBfagtZgtqnECR7n1mHrDuVfzxX7S",
  "key16": "3hw39RGESa8CgowSDLAKBcwJLK6eRheoPUHW7oFT3Z8PzbUk6vKPvW82R1gSFKwiM2VT38Kg3SkzZXzcbqGoS7fU",
  "key17": "mEZFfdEgmwRE9C1NsaaoUp3Ujp1rgKuEeoQTvGf6zHLuc8m2AeTHsqZAw81bXzjEdYxHQcNA3otfJty1JCGm1tH",
  "key18": "4EVE5e1awbG6tLQ3beCzAzPkEMJxqg1HAxPQ5ZukHaNegBDMsMTMEtsURxGJ8RXVzVs3BqSo9sbg47SvfsMbBy5o",
  "key19": "32x8B3Xto8g3mgGgNDfZ8LPAfcpZPrphg2HrRbLTvVsjybB9S3Yy3Z9ad2d3Zpnxt9j9MzdZj36ku8aR4T1Unes9",
  "key20": "55Pn3Hs6US6ARo48yQaG5MX1FRrSfsYETjvKhuSYrFV5HcntZis2NmySvR4AFLAUKiwiJNHQz1LACxWjV87nisYV",
  "key21": "3w1T6ZMEtpCbJf2Wpj8bLqyzUHRKh5QGTNDDETxu8P76K8tvjq9TnNWDBLErh6bXYsXQvc7cR55hhkUFFna1WD5V",
  "key22": "45Uwy628yDTvHyirq5VdP2FtoHoLgw9Jm73YxttzZwQYE9jyQmLH2veUX8YRULuM7jR9W4P3LTYmzEHpv6bDXYF9",
  "key23": "37nPFbJiDNEa9cWjTVF5CWkS5QgGUpNj91Fd5j6VChEELDhHR9itVnPvQmqhvZ74JnAp8HhNvJQHwjbQ2zP8jkLc",
  "key24": "27bPrZQEdQMN3PtEzpGfvJfgop9GTcdp51VG4cwHbK1MqLpdVvxWbH2tvY4ZvdA9EZtGgjNmEt6Xzk8J1BQUAk4B",
  "key25": "QN3yc8YHzBUw5XCaAyz5dbpCXraxcocHJosaiWaFKikscqS7yUB7qgfiRFDs5pmJZyYFK2yi8qU4fhKBKdSN44Z",
  "key26": "3LjY5p1owWeQxZfQreUwyLsRGf317kWkT9wup9DJDtUASqesSFvX4M7LiVXhqjJoabUHwHxstVqAoirGB57moe8o",
  "key27": "84n4t4HyYF5MGYMfsqUpDvW4nQjdWz86tnb4TWeVu8h1b6DYjQ1FPGBALgurdcWhmFv1SdLFuGcBaYBUJYvWgfw",
  "key28": "4Rc14J6NeZFN2U9zCaUK35JdAvzhSMTiyVwpWq3pcZZGKAUShrox87kq2CrMrqY1GBByKKhbSy4rDzozfcjPBmW8",
  "key29": "2mJheurd7dbrjeLVVyXvuDitdZmsGrqsk2EFhJC2qNDeKX6rcmvTbzcetFZhL3nC9NKhm8psPBbRPhkL9XxnWUVX",
  "key30": "5DU17ToujbaZenQtA4NLc3NTfVLnMJviBLHFt27QuBKgg1AYBXwn6RKFk79QGYjabBJcvpmDqzYo7KpDGRDv1fLg",
  "key31": "39awmckkqMJk28mr7WgYAH2Ekz8seDuGRC6TewkFCjx8DUPKqrygDBQFgw2G1FXJuRPQVTyyQMuRi4zgmhfy9Nja",
  "key32": "34ZPkuUBEUchjuBSU7GWyHNnTn7GR3ZSftCVdrGebzongaaQ8yvo2euQ7UxJaamYLZV2a1bVqFwLmY4Q4Sp1V3Fv",
  "key33": "5yixsV8217x5U6rZgtVGRr1D8Pu1Wh9mR6vobPAxKaegwdEUs7xgsvRhDj1f46J3FaVuLKvqvDr1XpvrkkKmZJyR",
  "key34": "5H85gTubSTsburji313zT1hZR1PdKhLUR8AkjrVv5tAjooCWzZ1Kw4nBBeyxPyBMhd3iqaSe89xq11WkZa8tkWKC",
  "key35": "5bMxLDGsDtdqYuYNeCCk6JgScWGsPGLPyaD4xaGu8JTErd13YszijnPMqc4bWLPYPpoRNfEGdmHh4TtZmjUFsmnD",
  "key36": "66zQTE9A8qmHfRsnMc6FhwYijivV1rhUXSyMkA18K8wUbz7WwtAxpobr8yHKBGShheM9g5Frm94BXSUHM8HsviR9",
  "key37": "4DhtJMXJGpSaErZdTF1cV8SiZBxQYh6mEDEZdovjiA7BXhHHa1Hoi5LNwLpppShEbbR2Q2Ci6yZGNX3GaJ9NPKVd",
  "key38": "5Fhfc1NADX3CxnXwhgMbBvWmUzs9cKDw7Gs9fUdZ1zFweoAzFG7m2dFkTFwUhXpBJYiwQnzs2Pt9pmDoCyPA5otF",
  "key39": "hxnpuh8B2cSy3ncGJcvVk2s7dcnKYbiKBh1TWUPAU4ZafVyHUmgodwahZP4A52aNzq1uoadpV9Q62qgSJUXKyNT",
  "key40": "3GwnLXMPxLpMaha2qQERss2hjkHJYN7Vh34oJePtiPpFwrsefuPNHG1iUQ44ic7k1eQcCTB7vQ3vMXHGnL2xLxn6",
  "key41": "bhtwqBkT1RPqqRyLQECYCYCZxuuQduCq3EdaiRkykC1NUjH3PZRsdt4xF8ViA8G29sGbLsWXRZvBd91FJvEgRSa",
  "key42": "Dcf4qVYoAvZaUgbccZoJ7oSG34VPnHZ15VXzDBiWVEtQywo3TPBa3kET4mmF8Ubq6EhcVFYioGN5Ah7kYJyV21T",
  "key43": "2AfrtQKRKX2BHac4Fz7WBcQHJXhb4P9cpPsxCeTbWmFDrmRUgNtCbnpUGkjtA9tchcsb4EDutAsCfWF1JcAEFdSB",
  "key44": "GsuNKZQTnzfcA1JWnjNLyrgNEtJ1XQWyc1TvJRGs88HNiHDj6HaYexJugZ3CJK2MSiKxkDshBokTZRGw7FfLvhT",
  "key45": "5mfj2VaRtw4YRbbBkbNvsa5yAkLbNszNzE6S1y7vrjRwaYGEeSHqapeFrnhwyCGQuAwedW4Dsggqq9bkRsgxW6XN"
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
