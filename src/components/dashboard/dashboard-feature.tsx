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
    "4BSfP15NVDZLKV6wRvqKH9Rcxyc7Lw9Dm1r3BtQKwTM5uVuKpkhmsMh9vfSz3gKfMrcgq3hpWj3MMK1uyEvtU8JU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dj1f1UnR42CCrnbA1iaWT4VDm64vN9KmsFz7UNCasCT5wYKq6SqSJqiHA89eMG92CtPBoSZQ6Gqy4Yo4pskLi7L",
  "key1": "4EvAkVpWaysR4Esux1wDNSqmwJdfhKkSbd14nMKsv4TSFujDnWBbQLH4wccmBK697KA8WnRnqG1ZAD46GTSYZqqR",
  "key2": "3XBhUNsxuoiKxWK7uDir5DqU3hGDFuUBCFsYUR1QjnV61EEyEsRiZgazsL2aYBZsKHzZNmjoz2Vswv6yJnHUMA9Z",
  "key3": "4qSxbZDhH2k1Q3o5xPSS14S1jjmUQAF9Xuy47yHu5xKC4WM15J7BSSHznVjk4TS8YxtHoPR3Keanb2VZneHwaVh2",
  "key4": "4ePXWeaVfFFWzFpsE3CxcUpQwn97M5pYuZwTA973PRjtK2TUXRJRHgFbckaEYujjvHkHp1oXowja65xnEekhKxPe",
  "key5": "3YuidZeuS9RzcGWgaeXLuuGCcY9hzuecKFBHWwGJ3fFJ5vBf7fRyw9H1kxvgrWscWCsCpoeihebtrjU2MGeueV53",
  "key6": "55EwbwnZbs3rH81cKrwQiZpAVNovhmWHhWAYgMZsD5gFZcVfEUzrnpMKChKYAmHqqQuyiufCrCkkQzc3jKiQHko7",
  "key7": "3HHMLfeEGXppHDc1E62925HTGHRDBo4e4R4rAGNVfco3WeNBpsZmhhBi5GEpvoPcxTvsbBs14HajjHHK2b8KFZHR",
  "key8": "2gXBiuwafPemLxfMf7t4vNkhjjtv2VNQZubpE6CcrRunPTx8X4USJkJnnAW6yW8QmFVGoY7tLnzJJXpxryceDnBU",
  "key9": "4qVuD39ksDxFQ1UTbzEVqtYWj3UdG8Y9Bk83upS6S2SWwYbahXcADLWFPocPMP5LLanzTxwREV5p9riuM6bqSySg",
  "key10": "49fpUziq2ek92QqHgZqkyqkbeF7Fzq2g2i4g4UV4rBtRfcNhKyQShFe77qTE3SWDZBLhWa8LHfKFGkCNiA87Qwgg",
  "key11": "4EZNacqsLppVHZYKcYWPMRLu21DFrWe8CBXyKmMNpaA1Xf1WrMEFpZrHR35LZyJZsqpkbuSHcVk6HxzHS4nBjTLP",
  "key12": "55DEEEGqLqbV65XLRdqpkAdfdoE7pffyBoJHK38TTkL7iaRpJjtsmEkMMirdBhqDWmJePv3YPcGEofG2ZT7MwPMK",
  "key13": "5Rha5CjLouCeANWo6A3Rzs6k7FfVYLM2bf32ao2dW6eKUpV4z639yzeoUNSrJjAoCvyHEwzDumjZJRx8H8URVEp3",
  "key14": "3DwJUjWuN5Gnbuviiyi1XAN8PE5avsK5HSk3h18cJuknRtLjSFEKmqAJoL1S3HT5NmuSAwHnPoS8DYjiZSnyWthM",
  "key15": "5fBJMoJ1AqXjz4wRkhAM32ZjdfFAD6HhKnLdSYiurkQbKmvY2HCb5qmgp4GX4wWERMQFjzUzQrPErw7gD9Btg33T",
  "key16": "4n7qz52DerfVkMjdGquB8kM7PDLPzhsPyfmF7Rs6ddRX8ccDr6by6MELTQBUgr4sRS5ewo3mPQyrrAW3KU6Ggxg",
  "key17": "4gAJhAE8EA9Dk8z5MpNofoc33ScncSB3hguL6HJ9FVzMDrA1a3UbhaHJfyXiWeSaHMBBK8rQg3PGGHRcG1ZQ2Ew5",
  "key18": "4Rkh1wcDvNmoBrxDSExYAdadvvNukPTGAipdyKYF9pRW8PoJ9wMp3heERxJVsd58WjX5QPtWpHp5KwvVgRpcnrSP",
  "key19": "5dRRyMgHKtuQK6BPGjKuzAzcHfLjyHwgrvpiLfB7Rer7pn5YQ56MfG33rtp245E8hjxUpGx81idvxk84eqL38mfL",
  "key20": "4Et1kCrkcv87pZJvZGqvvWhuJwwm7VjRzuZL4SqQ5GrPQHVREYFMQ2ua8WMzrmXPASeuLM9A54jJs1s3hKNF1ERY",
  "key21": "2jJ2XW4AMfzy8R9uqRFT7UEjvaHDwiZuhDzfKnhcVxjcUF1TwsU9HSuRrbMczHNP1GwVyCu64tPqm4SGtTucggGS",
  "key22": "5M7jzxTF8sRzjzHBKBTQqMAUhC62ZQGfFZNXbwBcGKeciM7wqB8wkgf36EssE4tmPYJM42gbZ8VKtDwC3HJuSyuV",
  "key23": "4KWZvjgoaBcKrzBqwba4F6g1457yNqy4a9tT5eu9YYqeXQmY76hh3QzvB9f81Y4gg7TeQzZzFKNSnfyemT14Bykv",
  "key24": "aD26BjcV3e7e7zpqKNoqwDGwKMDJCqczsjY9piMhxYwmdRSzXHmbdRNBEuARMEJWqxudP4qQQpr9nxH82BwsR9P",
  "key25": "3ipnUgN4N1QotVgHnWRdZsNE4VpdmnrYcLfqJx95U61BtpKCVVYtdMbpLLmmK1SquBkHH17ZsaGscGygsufNooaL",
  "key26": "3VbJuBoCLMrF6jR9FeiEZrEXeaNAtU1SWVRcu8BbqMSLXmo87w1mxW8keg7vsMYsySNkMGz5PMDFoK1uJ4rVZuUK",
  "key27": "641mR9DqQKq6gfD8j5gzdRJq7ix2ueNmMaviFxWuD3ccVwrobQQHAya2rHdVZCuxRwBHnKM5UWuQzuHwSQx9zhfu",
  "key28": "4sYiZ16UD6UhozCA4dUADqrqePMQHVXLn8HKZ8fvtpyh5xAtFZsTLx9ayVMxQPChkvrcZ3AGfaXmEhKbyUwcmEAe",
  "key29": "5YnxpxLhZTXNpwzfsf1upGWi5eErhH6ixDjX1LDegvLQU2SMTaYMeyVC4TpQW1VNJi6gD5QWWiWmTKkrGy7PrqLR",
  "key30": "3nwYzfjigAiHF4ydVmudRUSfHGg8sKnhbq97ejhsEj8gkjv5nBtTnRz2Hy2dfjSJEHAcC48ZagBQBmuQmARrX6dm",
  "key31": "4H5NhSdHGFK7bNZ2C7kaMBHxate52NiQrW57uisphJneFqtHbwMwK3QeX86uqLXy4AjGqoQRZFwvRFZrAACVETVp",
  "key32": "4vewhk81dWFEJ1QeUj8pUSfgWRFHJRVKYijiZFdy91pDQrXGhr5g6a6ca99jYLta4YRUKRmqSrt95pARY9cCVFHS",
  "key33": "5h3JdQxP5A1vzn8y85Lff3Ye58FBsVEaa5ewsCXHbRATasix7h6Ag4C3XfPTbbTkrziyQZHXPXBv8QfjwBwGmdCb",
  "key34": "4kMyTPEakZ2kEfU1vZCfV3L99SzD39Whae131zDo8BfZacAeNsHEjToSkUnn3niBW5meJHSC61zAyMQm3SEdZv1K",
  "key35": "4esmH5FVxAhBdoUMFPw3jsGPWYLGkk5FzLZXrNBCp1sssbWzoomZVFWh5wnRjNJBBHyTAnEktxSz8G4s19LJC9sg",
  "key36": "5PRB4LMY8vwmKaKegQvm6QzYpqztWP49KZynBY87HZYHDUUrPbecgifh5FRyR5BAnuu7r6KsUtePWP2abPjc9V5U",
  "key37": "2snPeD9VsA3d5PQ8Nc4vPZBJuvsUt4sjU8GpEFtcUV84fGczeGS14qRxEuPnRpxbgSMNcbTV9BqVasNsJkkGY58e",
  "key38": "4CosWx4n3zbean7mrf8qPT5mTxvk6ZAuvyWGXsLqAAeVJAQo1hfTEz55sboWKKACaaBtWRWRJcoSmpFDTihT8bwd",
  "key39": "2HMisptoosBw7znBX6UPPY43EQGvx23CTT5Cqtu1ViNqzwz9dB7XqwnHDbFeykPAQFebtmbBDBkubynJKuhKzVmL",
  "key40": "2aJpYAJqdiX7BMa6U7NxgSnguNq9BWY3vaNPMWzsjaPFJV5hkaeCArahXtZSRwYq7h8oVKPFJK1dRPU76nUf4RS8",
  "key41": "21mj4DDonFur1ZdFr53Ycn67Q5BuN1sdLZHRYHvPKq4rHTv9C82Q8Kz1EietSjUigyh92Q2putc45omBZw1SyNUo",
  "key42": "D4wFuAPEutzQj3gzy8GCkqtPxhNsaFRX1fUevF7UjupZrBYfDcKzLkaFgtXqhLBw9t8613Bb2unWFvf4kxmHEXQ",
  "key43": "db7pvLarPs5g6f9BmREYc14wYyE5ws8ExawvSEfwzdfSsqzPubACHcfxZEgpwTkF63vABJRDNRtaSfugb8wyRvN",
  "key44": "5mf39RV6xc7zBVRf9G7KH8dmo98QGFEepVfCYMoHsNqbMEkCy2P6ZL4B5Yfv1kQefupvohMjjH6a6B9cZAhwQLDx",
  "key45": "2xNR1R6kTG6fKhjuvt4FVDmceCyc75DtMq8VLLKzofy5SypuUq1RZx6VsK5yMdcxdUMe7W5SgxzeAazUx9ExmPJu",
  "key46": "F33jvzc2Lo3geCjpGT1ETm8eLLUKJRT9suRgLxJuSjsE98f7XVkqWTpgShXuFiwrZYCMNRT6NUHWqcyxVryyRfw"
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
