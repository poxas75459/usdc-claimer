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
    "43xh14MTNVJvWr3Teh2ArVaDqRUXeBLFbMHWg2UFSDvMyanikrkJUUNG8vDwZQSx6aLfUTL4ZwDbPgmNMvPMVkMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k5x4EXJZuhB46Fkd9dWntPmhnYzbw3ahroRKT3bQkoXUGnUYDLhNZTEuzw4h6L6MAm2g1qpDWJffNMQYRQr1DQB",
  "key1": "5LrrBFfYNJnuYKC7UyZ6KiwNV7Ere1hvkzrfA1Zp42ExURs9wYtUyPiaE5bokKMB3GucVcBnuMphrwHNugkWc7af",
  "key2": "rCSaRtixadLqwA5V2g2ZL8yjTZ9wrbjXy4GVNqptnQ7aTSWuF4ydvUnnTuumFFhBgPEJvVCxFLEd3Kix1kyhgmJ",
  "key3": "4GJn5ptD9i1DR2Yh4kKpg9CpjyXrnHnxCp5Lg8imb4wBBWzdPNpaMJ52HLisb36XqAsPoLtb8SQoujwSGwEG8C47",
  "key4": "2FN2BTc3yJndd36Tb5j5f3dYzUZUojM2pSgBbxDZ5fGJ1CYPwCYEBzfQC3quWJbRvJDjiaD3dZa1VED5UTLgz8jE",
  "key5": "3RLcExzek5Bgd4zLxnMBLi7cJm9Qa9aNTjVzWwJDkSx6Xj3J3goAdS7WRoVAqgngxoRebWaLfQyRCcHhvxgg1VQH",
  "key6": "3Fu9FFwBNZqfQATJ7vZ4U9ZaCdoZiK6SDUC74Ui7eidzaC29yTQKu8mYM7s9pyLTkRVTxXi8cSK97q2g8pMcMN6a",
  "key7": "3W9e3cM9yuD84dUZGxDUif1n2yWAa8Tabw53HVGaUT8Z8vz9ZWgJpNd6LM1hTnBEB2L3QCxC3p8shMKzs54BXWDP",
  "key8": "3xTw62nR7LeoLDX6r8TxQ7rjzGTZKr2hS3DrdY3AL2P1k7tZHfAT2pgTrmT5GXirMsA3jNQPnr42SwWLZEZdZfKM",
  "key9": "3TNdgR4Yg54a7ewdtrXr9yrwauuW7Gdpt6PU25s5hWsaNUN69Hj8CxRPAywf39HZDQhebHLyJP3BWg1GKrZ2Sy8H",
  "key10": "UvTroopprVyYfJznEb8RQrGZwv1R6ugm2Nsm3QRkLgdVvDMapJAamzBPPsnjYbD3CA4VTr9UgR4VdEYWGVp9JxF",
  "key11": "4VX6NV5ZFFxqaeGAzxy3D5q1uSGjZNhAK9PtoKhmQUiEWaZiL6CiEq4Esa5Xv5byCk16RyJDtRUpfobq18wPtXSS",
  "key12": "3zQnmid5psJxzaYUvtuyxMRSftqC1Vx1L84wgcQYKnxjEhPsFo1ZWwVbgB9kYKTi43wjUqRqdeq2T6YQqv2Ceuhr",
  "key13": "4sMpg1jWUbZ2qzz7qhuLFTtjaubt3TfyPRjCJVRt92JfxkpPrPJrD8VQhJDNtJBBkDf4VbCGJRzLtaFnWzoQzhSu",
  "key14": "3W5sXwwTYebjGpReAXyMYKctpTNZ5EdLECqxJmSvvJndBw4bGuXyACSeA2sqWo5Z2pVZerwAUpHYdcgakMNiAtKF",
  "key15": "2DiU4LHBtWW6Hxn2GpehSY5Dw394aH9cxNc1tRnVMx8QX7dQcaytuJddTt5uChA1f41eWen3a1QBEPBdFPmhUgeR",
  "key16": "5cujWPY25D5dZ98jGG8jWJzboeAo96kLbY5udcJVYDDcFnpye3dqR4p6bkEr6gHSDh1iCsvjwSB9mPvGuCyrKZVF",
  "key17": "3t3tKMoc1LntUtMNuuketyAFC1spd22B6L6FHM78xYP3h4DLAcEFNybQxKJHiygaEiMkEQ34t8P849J4yM7GToDL",
  "key18": "46TWzHoqFJ6FBqvPmecZK15w9WGdZbTaJCK4vyktEuVMe8eL8R4J2DgeWE1iyEBcBc1KQJH8g3Kg2ne66L4HMHNn",
  "key19": "4rGEML5tUrpu25GaXfJuPTbPou3t7QENcChjjK9fWvCa9nmJSwhQA9ze7aioHEgW4YEh9Da9Rys5gPcn8LL26PsH",
  "key20": "2bRUmULoRk8NyphheWjC4VeeGggWMu3vJbsExHcQ622DtzLgxjHZM8rXfL2wkBunpUdyXt8GZETyMFa35T3Kgkjg",
  "key21": "5fbUk7eCXvC8URygyH9yqJGNrtbbmj19nkXp1K5GcB9aYZS67fRiRnEq4jZBjiyEAePR88yaqERKHvTbqS3S59sj",
  "key22": "2uuFUJAxfX2VqPX6DutWswdbVeAzXZqoC3euKMHN7oM7xbQb3Szj7Yj4krGEe2RDrXVvNfQScwW4EwSZHKA5HHes",
  "key23": "2s5e1Tr2L3yUvbbshEgDTTgAUYJzPzNcsvt61voF68ecU4V5ymupGjKL37AEGfBT5FBKVfZysHvSzzdtLXCrTDaC",
  "key24": "yhnYfr5xYbxiyiCQEzc71D56ohokz79BTtcxU1voiwCGER2GacwFStDYeq3fYZD6qgrMZroDzxyWyg6P11EwpHc",
  "key25": "4VHUsCJBoEtQ6HwXccCg2VZdXkzTdrMnuB89Y3bGCpcBFRGPjPExhiDm8zsKhDy16mL9UgrafhrV7EwdYMGnn1M6",
  "key26": "TvuvYDKjvLzhyvdKsR8JFVwEsUqguEceKGqFAyrCyW4UhTVkme3uAtyRUMJ5afeB2RAa9fqFTuFUoriDmemMgHD",
  "key27": "3w13UhKR8eimoHrb946MdbZ3v8pjsvAmuE1qHNdPG9iJ9g1TrFxjckvT4VqVgvY1JzJiRzYe7YsbhL7RLREJXJTo",
  "key28": "3QFDjpX1FBKgHcAmffwLApM8cao5YfbpgYD78AiTmh8ZoycrVL8gqAgJKE16CWWsFFUcef8LzytUPHpbaU9nmMVd",
  "key29": "58WBQQMZBwfhRpp6GZSVeFThTUHAhNuuUYNJ6aMhjVRT5KW1xArFMVjHmmGCk5pQi3V66Q2mmTzLiKLS9uCDrh3b",
  "key30": "3imWPvT6xT2yYGU5Hf7DTUJajQd5L7SdukjgqL1FXVvBLmyY77KmoPxRncYENQPovxje4a6F8Zxga88BEiKdcALL",
  "key31": "28CkBes7KQwEU8oi6oNJkKMnsexxd6EwDQqnhbn7d4ChvXRGAApEULhEiYaX5ynAKuWjkgqscZGLYF5urNdpdiue",
  "key32": "96Z2HtMU2kfohkjs2iZDGwgf8C7VxRw1KnqfEPybFXUqPmhjuxvSnYAKMrQrnBXfW9TSa3xjLt85FDK2hzHeccV",
  "key33": "AgHb22n9qsNLoEgnuRbsZfmp5M9tWLmcjDZRnFDJRbukmZbpKSe6ctLQugFc8XXyGqKLpuRDnNRRyxyFu2Cfkpz",
  "key34": "4H21YFfU8tqdWobrdWUJx9LnUTebv1zwYQ3vLkwpKm18dSmk1mkX84rezcViAu4UD8izbwgioQcYNeKAKzdGbSgV",
  "key35": "2aCTcy1NuwwKqjFHRXatbwwTsvkRe5qHfLG5HwRFwUKrtsqHFxMBg3ekPCnD2s64Ebjw7dtEQrt5rccDtMNuMvuK",
  "key36": "3jpZwuBkvz8zQm4mBwxdHenHvpEmFe1mGwVTS7DUk4w3YgizUjmzuMPVK4qpFuMRrWmAiY7RfsMvzBGiYZq1ohSt",
  "key37": "JUhttdgWQwjrd9KpyRbWdbuhMYMjFbzTnJgBdvg41TVYPteb1H6LKjG4hrhWZtXYadBGomsXM5iW1ZTV3LkqhzZ",
  "key38": "27oh1RXg8M881A7hmWTyddBTmD2PKMWnNnER12L2avFfgBS32GqxiWKrnyJQcMaKcogHGbWNx3WqPxTUim48apF4",
  "key39": "5U1EgRGmBZPiP79bqsDy22HR5LVCZH7Ef1R1GBWixYe9ec4CXLntfzeqc6TFcxaQ9LiuPvdq4pgGkK9yX4eg1CZf"
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
