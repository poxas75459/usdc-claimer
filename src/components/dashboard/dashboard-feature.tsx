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
    "2hNipyJ2dpK4w9FZ5kLt1RC1vbaZVgsnJ7bUydNYRMdECHuTpPKA2ZLAmtz1ZwfazpX4S6dFwsrWhL5Zez2XrPVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KD9U24rxauDBebV93iW9YyhepJWtFxSmwkpu12su1ywBWVD4XfWDissfLv8vTYNHaJePyMayFqhkSquuQrWXypq",
  "key1": "5eRYhDkonXJYiCYz45dvQDyzN6Had3swYssk7t4dHip8zqkmg8aYEvJwMFir5LxzTmUSBX7szD4hT6S6mRFULR8F",
  "key2": "5tKxGcotD9C1nM2EecQo2uNXrGziiuPQsPbQQ7F3HpSwrjAxxAb6uwZ1oyvj6tKW6JfCeVtijuU5hnzsNxybF2jm",
  "key3": "5YVGh3WVsaTE1KzqZYTYYhguWQXGqsijRHBdBzG72RWvUSNaNCyTkYtJo5nnqrNHGLRCrhCQqr646Wexi5zq9xMG",
  "key4": "3bLZq1DZDwza3fs4RxXN3mNQRp859oVs48dJkKy4qQiVxwixEYXFJKyzyPHHZ57Nu91tGbBzzfLZbqugEdrkGmSG",
  "key5": "2Mj8QkjCQ8Q8aqVKmB2aRyXXALaR1bYQjKa2weGpZRNcGtnAMEGo7eAL4d3vQm3cN77HBoZLYHTRwS993GqC2xHR",
  "key6": "59ag1MZ9vNvzYtBDaJEwKuTrhqHuycfsGVpqtfr2j4Ex2sV8qXSMJD1hDk44gS8TQRrh6ARcodujkHseqc7R4YKf",
  "key7": "3jZNo8YgvWHNJUhBCdpsHfSPUpqc2B4fQHM7MCJRxz52TqT5voNzHEN4dmhjHtMQckuyDYPgkqHkGn4rj4DsGM4Y",
  "key8": "28yJWGmgedsWBAfK8de8nbfzu4cFYSSkgW2jBNBV4xUfmd2iXoKBTA5qAExHqGTUYgcetiPTkaq3fZahfXbxugBN",
  "key9": "3dY5WBUEzrAZGjLWxa5oyjSsDUnRRK5z4LBAzQhSZMjDCfVwxuEwQ3XD4kLqETqkQxHnwWoWrvXyT6uoeAtkYPhH",
  "key10": "6ngMqriGaCnX7zisVkoMmP89jLoR74FWC1RfrnrLsmJaYbCXVTKQ6mqJSxvNPBTk2NLtREMoJfUA3tqGPfQ7KZS",
  "key11": "PbX3f6jBtdFNSAXvEasoHZh8Hgjz4pyFaaZ87mryWnLis954StXc6QPgTbX8jk6LS2nhyjWsypy2nBruCtiv6tN",
  "key12": "2kLoobV24a3LYCfjf9YMUyj3uMrz7EPEJKno32vYxa3DyLmVLmoYCj1x6ZD2Snd8jTnk79y1zDRuBYH8C4CZBa6x",
  "key13": "2X2cvbYt2jUGc6YbABLHRCbZParoX54tVRcSvoKQXRujih8355Yrxn9aVJSiVGDrAQ4v66VtxtuubZ9q8Vfo7mYr",
  "key14": "3EAM21FijvaBUz1Lev89M5UmdyT2DTzGwA5jJpdiuJSmLeV1sHTWvPy67fagu3vyLWk1G3tt49AWTzW4YcK2s6C6",
  "key15": "3dJtjEQ2FzWyVpqTuzj3FcqJSNztSLPNdJ1nJx8Gqx9aVVA4qfQi7W5nUjjC2Ez5ZVqjwVuB4qSyehPFTX6JsVHh",
  "key16": "5pne8fET1GBZ27CicU5kqKyKzLDUBtKfkWZ5oXGpK8VZgxD2LmT5DX5C5s6GbMs455ZM8qnzJ9fWjNB2mvLRkJdY",
  "key17": "2qBdgcscLyVeE6r9wDJCW72jC9HiHBPVkwFtS1D4hQpmtaFgixxtsn17NWdALH2Y1iKTUSaSdVoUhsfAA5AQC6ih",
  "key18": "218ZrbYNC1ZT9eTGe3xFqCqrGPCHUhnqmpCdrkwhM3gtSJHe8Na3V5fLuJ3u7PDrRVudc7PvUF1ZU82D9sCtDT3N",
  "key19": "PRp1gWF7YtYBTpCuAnFGUpnWKXSmFGkF4qiHQTWk5Tg9yFRkSsmm6aU5qWDKm3B6VDG62zAhWfCeUuUySV9dJsL",
  "key20": "5Q7QPsptcCr4Ag2GLakpyrCJrA2eUStF8GfqLPbFSaY1LAu9irr3KkaRx5ehdy2amNJssxjvJQ5aG44y69S1hJQi",
  "key21": "4w5Af7bCBmApZ3gTmjgFFNdFG3DVUD4VQiFRk2yxL42SyXwEtLuZKVRbEhYUnr1ieyr8NUhkJKaYfCrzMpuCPVef",
  "key22": "eRDSBPWU5pZGHggU2FdneryZ8wfwgoL3FxGwUXDNJwvX9At3SgyvsvNWjwssapoWxMFQHJwnv7nUTthzschkLKP",
  "key23": "2UAJ2q8zX4rh3oJtD1TG95EBgvuPEkhxBSF7QJVhzhe7SiPi5nwGrW4oG4YzUHNiWBMb73S4R1gSgMsghTTFuzmc",
  "key24": "5JB8kfhCRpqtKRuP1wKiLLWHknVEy7cUPnEoNnR1FxYwJwCgbJaWc8agZqAgHwiugsHEXE9CWNvjHB1kLeU7Sjuu",
  "key25": "3pdmbZ1qBrCR9A1X3X1HnFgzd5s79bn51UoE9dBksdrfmSQVLYQTVNJTiTXX1UD5gKJJLGuPZ54uSkZAozYHsATr",
  "key26": "5L6P5rBZCr336F7z9vPLV3jxoD51YnhSQYtwqYoBDVpxYWcSqGRSQuAsCrNtpKh2U2ie249DGSMK5qncvKvvYuiZ",
  "key27": "4d9UZNdC5AAFYwRuTs9akzQgroEvQ2a2b5mJTCkGdUxVkv24qjcJaybhG4uE782appyw5fRhFMiY6sKEwQ7dHFfJ",
  "key28": "2GFqC4d3pcA4G3EdiNPqH2iYUP1yamyfLdpBmgAiANAzo18jcVM6EaGxGLbDXBcgSbtHjnZkhNzyGBz3eZFW3q8s",
  "key29": "61m1yJEfCQVQbjCdaeiSXPuez8S2aFe563v4kEVbNfaduSFzPebyjGbSerCqWdEgL7F21iz6Gss1FzBeXfufEdBg",
  "key30": "46aWLJh9Ejbu3JkD5WbNoSm9Y4GMGcS2qRDDZBZA79XvCU7tqLSGn9CfPFptodCPHVUSZKpYAQvKp5qagh6q2MzL",
  "key31": "27vjpStazaWCqS7WchYBNqEQPwjTjwBFcdgXbBv1yR8fsasefA3jZYj4GC5gnpY34RureKwoPuEqTN6QhCX45oMa",
  "key32": "fZv2SoQEoMztkArsF4AVhCTtEKUxGaWVYMdCZ83RitHaDLWDcNKMn67BRL9RGnUzrQpbroBuCQHc1m2WJb2QpfD",
  "key33": "5S2L8ppaDouHjnYqZzspvDcZ79U1UgfeoCKPRkCkPWZn6CXgBYyLjnUE892yuRgu3qMFJn5LGa6qsGNaj8JGrvFm",
  "key34": "4p7JEGrZje1AnJ5sHE3qCQbhBeJPsukGicBjxUBt4NLk8ag5bHPJ8LkcWkMjPZWRboyVMC9tyouz4dDbJa53aYcc",
  "key35": "auZbPX5XQrMvAt3TNM63B6Coez7rshznGQHQrrf8kvSLeyZvjg11ijmhbbReBuXyjLZSEpz1oPBDR9HyaoQcysL",
  "key36": "4oitnptD415kNeHS4EobtmWmHsWstP3M1nE2wtVZKm1bvpDrSottqhM5Fwbdsp6FUbwD2EFFpALCULeMFi8S7ck",
  "key37": "4qZ4erYBDYGWCsU9GeQcFqUnjW4cG2ViVRumXjSby8WQXMnbHK5iTFj1ubGCZXv27pDDrJ5zVEchnDXTnmb89Zgw",
  "key38": "5qE6SgyLAk8tKTyGf7BN6Mj9qFEZALs8BqebkNGGvF2QvaEdvwZ519yC4VwS6q4S8YiarE9UPWvXsdQfNbVHYYMH",
  "key39": "4owmgLVoRPtAkh6H8cJgGuRdWxGuANkGe9cFvV7ftRJmfzmHKmaSCdD7i8TDzBggKFhnDU5rybi3i6TRE3vvnmjQ",
  "key40": "3bmJC4SqvMWrSo911ewwMaQX3XHRGZHDFaACqn9JRs1EAEwKZjvgYFapLhwmUgvVw8yDpS1zwQe1Y4uSdUn2niRB",
  "key41": "3mke8ebnuxrPoe7dmRQkSuZNeBZSqJU1bneSPrnvDUwvsm4RxMjmiLuUgPddvmXR4hWfTh5x6F8zvQnBiyAeBUs7",
  "key42": "5JDi7jo4QC2M5L4xNkRVTzkfpn2jRJwf3D4nFMesvsJrwD4JQh3ZhXtqMzNUfuEePKvBnzqW1qhDKgiwcVSjyn9g",
  "key43": "2pkDrMP7CkwqB3bg4veTyVm5MKxxemBuMnMR6YTAx4ARokSN8vMZM3CWZiFNPWqs5s6D6R21WmZ7LasUoCxMk7z3",
  "key44": "tSZgLQEncbzr5EDkE1XXeGiZJ7LWsBtSa9NFrqE4M3svEZo7p1VGjRXwXLGqmbJMVWKqGGXRpGYoEM7X8Ferd1F",
  "key45": "3qJcYms75nfZKcCGZhow3qk1Zxs2sGB7KNBssgpFhEpKzEMptqDuWCvNUYdRuHvWnLN377g9RyigfZGgRLpAHWQ6",
  "key46": "5cSw73LGJfeFx16s63zka8Bab1cAhvo2FVKALeyz4iUi4HhfCdQYUZk2smyVArgdGNMgMwHe49ueGDWToYsC4UB3",
  "key47": "22zJtshtSUksDHtbSkGFJ6k9rbkQHcNzNbd9rxLsqqdGZWencQSuMvrvhYKH6uJV9jjxFzpbfVK4NdeMiCwjjrxm"
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
