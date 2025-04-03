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
    "Q8nUu8nCAPAjPnXdZkyg9qCqGQ5tCaXde9bSs2KYYyF7jPH9ULGLyu4nxTYv2R3mpdXnA6bnkg2LjVBc1u96kbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FFH5bRNNTeNjEtQ6Zy35fqpbsLG2Pu1jVQRt34xMhGnqEQGy6bcrcPMZyruZKvqUHmc8Qan9P1p5c5EnjfG44fh",
  "key1": "6Hr996dt87Y5QEMpYpEhTU4E5KcgF4qicaTrLF3VracA5Tqdrv2RAd9ALSUWtimxaNgVf3JrdLTEa867UphdwmX",
  "key2": "46QdT9Jkyv6y758xvLu82HXB84RGCjpiU4eYBuPy4ZMD2o6APJJgSxvb9hj3CTz3UYPXBWh3STsn3yUJjZuhE6ub",
  "key3": "5jq9MNN8Ksa39woT6e9w2eSdoRCTeAb6DMDaPwTZteZmgKeS6Dn72YevixPuXiVRV8Xa5BE13HzNmRmHcTv7GasR",
  "key4": "29Ferd9gTQvrsd4CqSpSsNPQs6UG7XFDmJxv9mQrnFpFcKE9H6h9TvTKs6uTMekZzbcCcwc2k7ytz7AUy9EUsr7U",
  "key5": "2sjfQVQabPKtJtX3F59jMTN9y8CEETzPG8TQ7U3YGPVpmFt3by2rhDQGuMWd9WebUHv4biXifidDb2YS7qnMF83q",
  "key6": "5ZV6Sw1MQUqxVBaFoJUYVuidjGSJXckT6ipZuZo5tcgVrLiquGhzS8U4kEuan8YyMJdDhxLhFYgoxAGY5FiXdBfy",
  "key7": "2KToNrXAy8L1mQPnNNi4pKVTj73QmGACPpKc4nXjDZhVS4N7Vcv7VnjgB6qvYnhcP2at6vFUYZXnSQ4pe3LtvvZR",
  "key8": "sYp1xck1dJa6wcPwkP1Zjy4Yf7djvYRodJJPGiH1sLdN8LM9gH5QLFE8ympJsSXePCaKNso3Pxhmvk9tYEwhNth",
  "key9": "483bLNTETPmMVwemiV1VCgxWFNDGP5WB5MHQtsctJUM385iyXKoXSD8jaXCy8N9VsuhWLBCA1KyJmi5ZFiX8Za3V",
  "key10": "5zbGoUSggsxKiF5wxWcCrX6NDHnMioJbAK8FxGy1QzJdRwnssUi8ndVR41Ncte6aVsnKNbYk7KcXDWmy8c9R3dX",
  "key11": "4baCzVBsGhrcxxvw3HpFJbg2aAuXF3H2E5fVbLA5XLEK9kd3XBPNwDyPQRWSBs7Px77CarmcFf7QAKw6XcTBh7Kc",
  "key12": "2nWXnujoLkM9RuKfnBAFkQAxCRJLtVfdeUpeEd3ES1PHddzBdbWYpm1KNamgS2LkKsvjZa2RFdBYkvsbQMrYuaCs",
  "key13": "4YL6Js1mvcrvxHFJnHi5K2maGgPbqZbhvDfMgtn7PNacBzUzLSSa4WzKiRZHeZm7Be2yBxUrNwnEGfSXc25XeYap",
  "key14": "4eo8SbqEU8pQo1JhZscbjXFwVcjSEirDmVmFKxV5ZXLsmRqmrJnqyKwzTDmKGgzpLYBqc3Bas14L1jHDWpiTEZCx",
  "key15": "py5dYdH7NAv7zvJFzCk3by2ks6rm6eft85xQzHVT77hx476HMyJxou53UJEvydLRM7bYisFgAMLQMr9ovcauJxm",
  "key16": "2HQ2indLWAUH9NRNwoKonrXMdXLGWmUQ73T5AcGK2V4EDbPPzBvVPCce56anrchHXjybnWbS4o9E9EQZWqMo1vNp",
  "key17": "2XEFHJtAw6Ag36SNi6jczxG5Pu7r2SFGCPFm4xYrhaa3Bi5ejtodjM7htqeDP9xUobmt9arcBPrF9K97r9YmoEKV",
  "key18": "4NnEe9hkBnk4LCuqwzu4NX5AzQxjcYsVgFfgCFZ8a58xhfFaU8cQLabDWB4uz13UoAL5PDzoShZTesKgj77XLvxg",
  "key19": "2zPnHeJJic9Eczi1GkzNY8kgupYkihFG6SMKKPutvdjZUsXN6RNC29o2iZiw3xLnYMQCH8n6zBDoAmzuSgF94qoY",
  "key20": "4RUu5V5vcDQRjMMeC8Cqvz3jR1q9z7zY2Pc1DzfqMLbGUvipsqnx6QGSh5Bj83hySxNy9B6kRnHKKSqWx8KYUsnp",
  "key21": "5FbEqwBZuD9mz1qTEoCqQDuBG5iTFjFQTKWEQ4FLAaGYZKxQZVR8BiBRLkuv34KJwoZWpQhgcsaGN7xDY9wcQ5wG",
  "key22": "51PuPXM3NCCxNDTrQ6Xdwat9QvMvspuzUuwBqLJzCNxGacwCKdLwMdKgqemqw4wcPteXiuRg8uHWzxJAg62twCob",
  "key23": "epM4vSrVAXzw1jMbE1T9hijbDvfHZz8FeHbS4dnMeoKPX8D9cFyRuHrrMUMeGvuwxMrkAnpb9GgQGX4YycFh1G2",
  "key24": "4LDwE58hVLRjLuSidL1DFLsPkbjNcnHumd3JEq1YoyfZ1Z7V9FgVpEisdDigaDL4vzjQwoP6hGhfQxuu4CvkxQJf",
  "key25": "3Fg6Sggo8XSdxYMJUbJmhPhKBqKhoD8o4qCC8R8LX7UKU6HKH8WuicN5YMgTM11cGKGqYdwHvKbCzuju2u6qFrt6",
  "key26": "4pPoeCk5mTv8zLKRwLnxDJMaL3pq3WHSSfby48vQHwn8RLT5zcoS3NriK6XgwBFN8kC2HmjEgMiMJ9eqQLaYox8q",
  "key27": "4tQ3KSJ9ZyPdxdCtKqKJuYfA7HUiZmXuBpHF2youvHpd9BQi9ftd5yATXMwNr3yLK1uEfuZXA9EHzPVnqDRWVzqg",
  "key28": "2pU1J7PyyzvEigVp18iVxkw3hBfqTefA9MTUU4EwQJMiPAXApQyaij9oxTEQDyyztsGRbhprZXaXfUq8fnKPAaM3",
  "key29": "N87JSe2MnbuEwNT4885qt7QdVXxDBwhLLGfMZCtuv2qRmGNQTnCo7jwrBHA25tqyMoznf79jGe6bD9kwg2CG9n8",
  "key30": "5agk6oiQVFhpucfCDwo418VJVuFA1ZqHoyksMDvxyXFh51yRK18sQSgZ7WCVFtgJ2HmmUaniJK6HnzPRY3SydxWc",
  "key31": "5aWaKRNa2A9xJVzefWXHz2zQY8ivjz9mcUo2CAYDjm5YXjervQJcmVHoPJ6QsBU6g9fVVJxMcVstUTw6g8teBF3B",
  "key32": "3Mrf2hbaFgUTw3jDeKEYTMzDynDK4kk28TAN43gPP68PbqtEjVVgToXxAUtGEKEDZCi62o6UHSeRZBMdFwKKmjfC",
  "key33": "4LgjZov7tKsZjaDHLvNF7VB2ZZwN4eVpgRrMyP37qvXPk4aBhJoM46dBUTtdmSNVSCEzF1f5CKet88udnW12YEZM",
  "key34": "3UTg2sp5DCmwjDf45argDNo3tGtg1hMWSsV9i9CtA6yHfEiJcbLbungALvgz6PiksUxGe6gUgPV5qSs6gB8ufrWQ",
  "key35": "anTJtQF4jqcSq4RFywbzpYt9iHMd5g8Ku845dyEnHeHk21r5pd2ehCTWFU6t11VZEECetk1jkKj9yhmyXGaAj47",
  "key36": "66p1WFnkkXhbXEga33TwNxGLzQvRPNS6QeXwcnc6QBCUhzTk474rC4xRL7m5Lw444gAr9WTaHMiyEfnL4pUmkq9",
  "key37": "42FyoLjFBGsxFVA2WKeKmAAEY8pwpevbddPRyFs5zEYz62dCRRvKkimaMmJrRhotrRMKnhtMLMXGT8aetZ1wejD1",
  "key38": "2GUHxPpZhGg3xS6Gvx1H4s1EKXwLrejCwuqQGhtZcDe5rLAtwtDEmB4W4fBhvVLDaZj2i2gycjGngH9CStKFNQue",
  "key39": "3Pcnh7kUiopqpk16m86okKx8UtLL199Qp6wWciE5UCkhHwrFdy9yjCWksmTxYq3hFYEdvdqVxyGwSDSqRomRqghJ",
  "key40": "4hCoqJA9J6S8sNqwyLTQBXKuaXum8WB8CRxTu518FoN9fWYG6KSQDJa5VW3dCKjYqnEUvaPHXsnX7z7QpJSTWVoD",
  "key41": "4jxowUoBSsnLfucGfoMRDZAYA3kZFszND5QpBihiVr4gPZeAyhNjB5ziyjSfZMh9Zfybxi6RZXZE7nYsBphXRiPZ",
  "key42": "4HGxAN6726HwYZQBJbRAD99BFsCSUwap4b8NseXQNZC3hUku4f1PxcHbCC9c8NUouWD5y6bYxG5Um7i2hDE2igLx",
  "key43": "6Hm66BMcxK8oF1iu3g6wWCGz9tbnTH7MH8fS91D9MQNtijPM4kNyRgnZjs8HveoVJD47jQk1CRqf6r6YF2xoL6d",
  "key44": "2sz5dZgs6BSrGdX7M4jMoU8N51jek5nvL8ceCtkYTtVihFc7oLsz2ayLA5mQBkspLkuJHgX6UcDy92iymt8F2bTd",
  "key45": "5wbnXrgSMMa9J2c2c7YQcwG4efEu3nq9EirUjkRSCNQo1ZUMTjHhPfcFuud9a3MGbAKiWzmN8987RrTzXSud8DAk",
  "key46": "4YSX6Cb4WBRPmKVxbDPQijqkmFRv55Sh91m1S4Vzr5Sv3RQuncYMueFF6V9QBu6mA4CJyxqaz2mrj1S5W5fEQntM",
  "key47": "3XerqdEeXMRP45bsrukVov2eYEdUhRiLL29ypsrEa4Zm8VV2SR825e1itMdJAJfLypes5dtfYohPCcM9FEHTAsBt"
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
