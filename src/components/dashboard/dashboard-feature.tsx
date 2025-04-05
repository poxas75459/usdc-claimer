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
    "5Bozr87xM8EoN1tiepqdhCmLFxdpqEU6oLXBw2tRL6xisYC7deNXzNtfXnWHpBYnnt7Q96dovqRpnDKyGjvdN5Nk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bqTgpmnvTkC2dhz1k2k3RLWMi4Kc7vJm9Cf5etgZHK4WyB83bH1HB8mbN3X2QdY6zZB9UvmVW7Ju5wM8ugjzRM1",
  "key1": "4WSQVbNMvauZGpXai9A7aEo5kWsweV8B6fJCm2FfB1jDD71g7tYQqVsrAJKTsiJ3be8MztA6ce3RXFhk8PqH7VPc",
  "key2": "4CWWrN78EkFmdBxCgwzwjm9bW77YdQVMNxWXH1okz3r9xVh46RAJFUeZAvA9SUWqvSwbsuyggPS7hneWdQ9rHnHw",
  "key3": "3YPqzLbGsNSbcScctSQtBjjjhVYn4viPsXdMvbYFxrYZKkWYBs77teHhJexSbVV4pNK6DD4bHcWnkZ6KMGTx8WYP",
  "key4": "3zcaLKQrdVXcsiuGnpQeGSRfyjS2mtux3ShBnk7Y5wSHTZ7Qmnf1J5y6fbEa4MnvUXDE5CqodoTXC2hJDFcsJaje",
  "key5": "wXMTLsgir1cMvLdQPiq6m59wepUffiDTcKz1hBuwFWWCp3bPjHXPZPnKg8cEUF3AJgQZryJNeQ71puJxgSDJPHJ",
  "key6": "tmFmTUarqJFCjD9cBhnJCTeXsQESD8WL6F6c3qC7snUBKLtKVaJxF2egxRDTWH3m3mxfXFk2hskUwygKFG4Cbig",
  "key7": "2fRf3H7SqfvSqe1acSFRtMqNzzvhuMak61mBmz8nRru4fh1Ldq71jJtKp859HHEm8RSLu5u5durBoy9sVKUCS4bM",
  "key8": "cgVeaAS1dXFCKJ1FKUYcGY4cExjanRNs6PjFGsFNAoXZFBeKwGRu8guv7RSmom7J8Ym1L6tZZwpS5Tappb3ifBw",
  "key9": "2rAzciMhZ9fpa6wGud5VvtJsbwSAnsCWP7LbHkr51ov58WxnCGKJvBCD9GkoBRd9xiXDCitPQ2wddxzPdZTiVXGu",
  "key10": "4Ru3tfiihVLrP3y37mimy1qJN92GpJdrpf94xiaCAc2iMP4wHwiKB1Jr9FrFkTVZiKgDCxF6FPm6GSSask35vARD",
  "key11": "wrzinr5btWxFGTW55VZDeXt9Mdi4UTJxrcAF3YcPNBydXdc6vokbaMeiTdLqyvjkHhM6c4TqcLFk2ucB5k5CF9Q",
  "key12": "4Bsfx99yBe4Z25wfCeCDL8aF3hb8V8bj1KTfbZQ3u8CWGcuxFY6gaLS8TEpTsY6qPJAuhjTRxPuHbHaFK1QWB2yR",
  "key13": "wDpBmMepkvKEuQ6uNiq4JYdCwPBQimgas1Ewzr3mFLAZzoe1hiTA9Mre51wzgWP4Lc6tEjvoZRNatTbLJejn9P3",
  "key14": "3TTvjfhn2LBzZdcTVKtNYZGm4DfnVJiPaM4zzBovUD8gkBTtX7HZmbRTCkTXU7guJj4DKzqbSvJE9HWHhvHMBqRp",
  "key15": "2ZCcQKrWfgpPNxamrFVtZ2eut8x9V58pK6AhBr2vK1j6KV6YuFMaapqGhA77BGpAo3bkAzhKt9WADWKsgX3GU6m7",
  "key16": "4x4RuP9yQj7TFZeYbNHKLPnS1A199qgry9maapSHqr7KpeZnwLExZMhFobyFmJ3Rvod8UQStoiYixzZL5mdbrC4g",
  "key17": "2aequAS3ZmokQ2B2XByYUqBZJBnDUWf9dpfKywQUNDVixH4dz3Cy7fJmAuH15YkB6V2DGWMHgDJPM5WujxXheW3U",
  "key18": "55PpeBJuhMB5xnQBrj4mSgWYU9swrCFTyQspoVRTbnb6hKXohAbLf22RshdvQJy7rE7VhwKPPXHFcThyDexdiDUi",
  "key19": "WGvSWCKjCweqSPUyCdP62NF2NXQY7ht7n9qj8NgBauqAZsgipsXNgKsStxYs8qbRrLUTmkfks2nXnaRhNY1eM4k",
  "key20": "2Zy8L8txcCYPeK1nc4T4CCiCyyMsfXKM1ShH1hSGvp6GUqB2pXtzsZm6kUWdG2aaT3a2Thnu5ePxpxuY7tU7Rd3U",
  "key21": "2nMeUYqbRaJoMafUpaTKnypX9rUBE68rWizhhkEuRytdLD9e3X7uqmcH6cnE2tAcZKU1fb273yCBAEaVvSXyLSAt",
  "key22": "5xK39gPvSPJAMWTH6HnfW4KKWbGvjqbQ7kYAfSbeNJRJPzEEJcFczEuZCJQZXorpo7pMTmJPE7ynWPDN25PEYXM1",
  "key23": "2TJW4gqvmVASzGXtQigQujAEc3isk2sZQ7qM5rMYbvbNkkz5HtNmXGbQdFM2ED1wVwCo1iSBSGicdjfYe8hvodck",
  "key24": "4AokWs3T4hYyzAE3txEMSWh3KLhugSH9gtccsfXJ7vqCBLrHuLPzZnEmYGSYR8SFHBhD24BG21HeJxgqGpHk4sJn",
  "key25": "2mHRBdbAawzZumaU14ozxAZfvCqKv9VaYyyB23tzfdstTp9zwpY4s9AjaLzW7no3CcDdDTgs1hHCCaJQj8gRQpvn",
  "key26": "4a7nQRMX6icghy2gnuUtioe1QYxR41oTq8zZ2JJ6tHp3wB2XJxMxVZPf3sr79chzixDEVUrQohcahz2PZxxMFTSo",
  "key27": "2bUeE5nxquTDJMBFWYNm3gZ4UL3AcMYFu6uRSthrSgapN4YMCkFACbssHncMPX6ULtYvsCSKGpKFXCg5b6AFS3ho",
  "key28": "5fLg5hC9jN6eocFBMzm3iLq9VoQYX5u2UnkfRnWJypebmwGyRt9LdY1EQ9aCjH2BF1M3sk3nfVGkDeBdhTj1Ga2N",
  "key29": "4r514EazS9JUiBxYkutCnwJ62FbPJ4uRPzL5c7WjKGBNzkYju1J2rYPZFrSXb72L8jTC9N8oyhwR7FLn9UHBcJje",
  "key30": "sm4BZXSVXmDJeGSf7y5R9m4gHH2k8e9BWp9fhDjk4g384Hfd3AcpNLy66xJ3WyMpm2zvmw4AtNk4mFUCspNLpz2",
  "key31": "3F1ihvgwQpPHxW9dyBW5iSw4LUajyBs2LgDbjp9P7L3H6G6HCKEWpw4QfEjddfpzYoS84HsfabLropgJmA5pnWYc",
  "key32": "qHr75GtkhjdvNLHLmnNzphh6RzQy1bf5CoFtvMeT6mRohv1taNveDCtiQtYVcJvNx2tMFvmEKRizkrQFp29RNn2",
  "key33": "3mzUT44QfU9wAyTiztF4JFQH7R2e9XAWx6SAQAbwxpF79cwcK52DKs5zRwF3XTTvhn3y9JedagXUjyTiiZoZRrGE",
  "key34": "GcBZzD4uSDmcEsjSYZsxx3CGNakWYKmdqnArotg6agHKMJTRZM9u4BbT8ZkB2jLWzzzTS6G8H1sJJz3gFndUvxw",
  "key35": "5DvNY28NqVgK9x2GX1Sh9yqYifzzVkAQAamRUZqXNAZeWn2BK6nGSRL3Cg4dBxwBQ9m8tZqKWMwVUBLrBjeMS5vs",
  "key36": "4iTYHXw49HDRb5nQwRY74hobDLdJ5nGL28HPFJtLyJb53r2ydC1DiG4BYc86F21cSwRESPt5KMBpdbfrjDPeUQKa",
  "key37": "6688QnoTkTeBzQLWksVCyzTG4HVAgLRi9Ba2egKvPGSgXdLisL8Yye7QZ5Ygzdb3f3HEWKiGmAWAmbsWDiuWnDM1",
  "key38": "5DYbcVtBqhzQUgUED3o7MBVZrrfuhKfosJC6gcMRnUfw3zcQN3cesTSAvEEkZ3gaqKmq4QR3wKqL1QaNATrUbfi4",
  "key39": "62wF2EDTQ5LV6aU33mFDcqnaAKwc6j5GU9Ds98zTYwxrjgtJN227wAz32236WvQRNQc9ZtCLwF77hj7KFfkkpjE3",
  "key40": "G7HkgvYZ1QuQxMNkZ3BnVxhtTtpcoBEvKXxcUiws5fJpuGCja7CGLBSvyLBjgzuyotKHsQMheDuJeE5vjRa1FYf",
  "key41": "4KLsHyyLxefMgLuHUpXGezHNa1yFfJR1xwLeVVSBtSiXkuJYqf6gPpzBK64jRKgJxSvJHx9qjBqM7WaNjgPTEt1E",
  "key42": "4Afg7Mez1UfhnpGG1rMeb9rh3t5UcnRnUpKmTLaGFmxiTEaSyAn8RiM9sXoYoby8KYX6gvKmPhaziASH4ux2eumA",
  "key43": "27ebNvKZPu3CN9zsLAwUdy5ZcK9RLfFmq8Y1vhC8ATw2ztWJRAqophtbTo6A1gw1oxEVtqP8J2UM9ApqMA2vVr5y",
  "key44": "2vnVCteEQPVqFpBtZRaCra7vNHgGmntwKU9SCAqNf3XUuoKH1pH9MaL1Ck1KbXs17v69Q7LAvSCiKSn1bogdHZHb",
  "key45": "3zSiJarG58Y786yJdsS4dGH7RbuhTW9Q7veHKRGMgxHKkjV22NMXRvHYuknFE7Ah48oJg4CoNwPSUCTGkqs1hJU1",
  "key46": "igzYSauRHDCPNRpMmrWLfJUvvN6yeuGe6cVx1eYMNPgLwPbFB8F1u7CnFCisri6Eoj668VmMvAvapMbA3QsNti6",
  "key47": "4TVGWktMyF9msSU15dN2zkpjJz2DcHyyrEhrzkHonimGY6N5y8g2hXDovGKhZPTxmTXwRdBDuMmw9NsJZ3Nhb4Nh"
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
