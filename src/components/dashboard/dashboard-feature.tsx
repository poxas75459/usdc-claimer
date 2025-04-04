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
    "2LjjVqb9GUafXDwacHkfxiad2qN8ZaC32eukEruvFn7SoJAKT9SD2xeFM482wahdXu4RRD1Cc7UucV1sJXhaHVfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XgByvWBt85ZyAWh8qTgK8Ps6tqNqUqzDi94jdbNH2Mq31WfqxiRrki3wr3jCMxTL913ygifPUUKEhbgbEkPdvTB",
  "key1": "4UERCbZvecYRoJqLCAWbR7PcXjJAqj1iqTjcGdaxRX9Mn9GeoXtwrG5ftgP1195AS49rxCBEphn1m2ZkWwEt9ayK",
  "key2": "4QSJL3arAFRSX8du9Z1a8z3xSQFXQYwRXzCqBFdP4kKxMyPVrJekGW6gESpBt5QKG2QB3RFaw5SpsMhSfSv9pXVU",
  "key3": "4BttvBtVVrxiozyrgv8xHevE6UR4njNS8EKMKQFLBCSfqAMNhxSM32MebHTMpfheMprYP2vSKaaR8THykEh3WK8m",
  "key4": "3YHCqv4so6AEDC6kCUaKRRghWMPaHV1fnfdeEWvvZu9YgZTYXvNwBKw6tmwPaoWYFouzm6peUFnZovdustBHRarq",
  "key5": "4Z1ekkLcaZ5KCuLuN2HQD3GYVXiifn5NNgCSjkvUpqmKUrsZzh4tAy4nehnqAc11BjhZEyBkdJ5MPG9p5ed71R9W",
  "key6": "3jtKPEvFe7B4zE7okG6W6GNHocJHTxFQGfLTc9rr97asECDwg5xkPHNvbGE3FmF8e7CCaeA6pJ8bTRvLhoMbA4T",
  "key7": "3MyE4D9SkSPTZCQrS5o2MTYJyTaKWPjbQRFym2mdMNE9NnkRKS1JmFStgbzJLxPETDErvXKy8PSHz7Q5KDD9tW5E",
  "key8": "46iXSRvqbKjUwq3bbv6bcwsGpaZXt2gn2Rx15UuCWNhsZLRRoz7RoYRMhCeTnGUbvMowonf2TFFUM7vCc3wg557w",
  "key9": "3Jxi7c7vTspL8oC13PsfBYhqymtxpzWU5NgEdiRKvASkCbKv8Z2QKz462xNfJsFBMsoHdDEpWbfRv7ynuesdVdin",
  "key10": "4hiRCrPuBujJy9wJ385pAXacx7kAW5ogUibAoYVzUtmpejYiY7RNN4BqHJKUjze1DV6cy1q8bVC86zvB7PmZgeT9",
  "key11": "5gdhdG1GGArtF6rg4QBFwLPZH4btNHdPrc3NndCK4VowtGEPvw6Kci3xu8MRoqJWAKkxXtyXi9ffRwdx65wCJ4y5",
  "key12": "5gTPpoBrWimenVEeNsFg3DcB9XEgbUehdFM2YbsPZo9Md3wbgxsvXsAcRR75SxnnAACFYm9fJhEGdAeDUzJsCJ6j",
  "key13": "3dgSLihyTHkFE5oiT6XYFinH4mJg7zqsm5DPP4qpF4rBviixs3kFkWsXiVEoBxB7DTf7CqWiNfLzhy6gR8NQGUKA",
  "key14": "NPTPYbCcq7xLYJF15erM6kwYPNYG9CbByvcYGP46dW4AcGykSDKCSrhaAmpbCDEmdo67DUh2RqQ14TZ4yC8iJyn",
  "key15": "2KiBE8XRVvDw9ag9VoNWaYV7LPeytjGj7Tqu1L52vA33qatkqrctZsmTM7WPCDohznwK52P7NcKC6gkAzUhV9CMH",
  "key16": "DWFmkaJ3PS7B6E41BTUj1w3FCXzg2b4E72jcMdv91VEMSt1joJnZ6onqBvfKB49a9rruQEGZjHdJjF4RYCzhh1W",
  "key17": "hi5K8xmwJ5X2cX7FV2F5zZ6FHCkzfm5j9JJ3nsn7AXY6EEzKHLyMXprXr9qE9go1FioKJLeiwiHRT6ArphJG4Fe",
  "key18": "ieGSdBVF5RXNFFZfsUsUShGMXkfFFMSABShhUN34Xnt9UTD9mJDm4m2gcjSrQt6Uir8uSFg98gzikRm8sA24KFL",
  "key19": "4HibadNzLSSeYLSdvkoe8eKRc59gKgxuAHfmPGnvBzbacsGVF2fw2PiuZ9zbz6Z4EAyWNGD9RujPyHHJNvmsSmpu",
  "key20": "28ztuwKum1oDoqLtjq1nJA5rLp2E9YCHf16DwwGwWpxRi3FizDmTjWvNfRbVuNZjWN2nTRZprgk8KRuBKP3LTf4X",
  "key21": "fVYJFJxgyHGarV5tM99AZzLccpjR3vSYvuear22JSs3fiK3bsMm4gCzVsYCvtLZ7qsfyrYefbNP1Z2L22E81tLE",
  "key22": "3vncgE4qCYeXojwvsb2Kg85tWF5wVqh3hdQbHq1yvVBxPQzoxZARAzT7EhwuHWtdLkVmoaNs1xiTDZGv3mAPaAka",
  "key23": "66fGivvPnumBq4SARVqBhDLJCA3jXM7D4zhHdEuS3cbcukqmi9VbdERgvRHSxm4T3gsGf6PLeobPcgFWYVGxng1L",
  "key24": "2KfprB82AnfsHnRceeJc7JZFjRENhXjHjpHsNjqLbZJckKw7o82HuUipZ5p7J5NfJ9Try8UnsSpRu4BG76LS71XY",
  "key25": "55SgZZsPzZFK2Qh4XVkPY4ghoeTAh5WWdKdnsLii2fNkVgQBn66zWb6VR7474tGmapB9dmJ4Jzzv6m4WJpAaLk3Q",
  "key26": "5etXQ9HFcXzZxsuqZ3tdzmjePyKJTCdLWV92sdFZkKdPWQDpRKtcaJ6i1afskRCqaNczQ9FxkY288ZuNwxbn2S4K",
  "key27": "5VpBEq3Mw3NdbAe9kHSQv4EAhvty7e1FADGkZGXdgJzhmKG4UqXHFtJakbb6w8LLvK1gpc7HrpN7xQPr8ntGXYRP",
  "key28": "63Vr3uT7XoqSZkhWtMzXCqFjvnxL3JtYWTqL7vHXAmSy8nWKBx5yTgNscmrzhEAQzZ75xNWdihY6qvFR3gDSUw5G",
  "key29": "29xYYyCuubquSgDPxHYFkc3Kan1RzhcpxibL746VtsHeo3hYvCM4tdYNod4EP6hostu8wv1EA9B9sKW4BCxnxxs4",
  "key30": "URwe2iVNsQvV2jdgo2kcvmfAx6Mkgw5FzVsRgBzKBiacmWRwXMn5bPp1bTuZmeMg6qompLtwVfLRntdYsZr4Yat",
  "key31": "4gqXWRQYCaSqmSTbxSiUbCicFQAdC82Ekb2Jko9FLLoRj79sWSRc6BaUxH3iFqCuSh7CqkWDFVzqhZMKQADzCPdb",
  "key32": "4i6x6tB16sRsZa8iSPr4cKRA8grKocJvjkvUzMj4MYmdvqnTegA9icAXQAQiZQrAonn8i1Jw2KhLLM6C62KE6wV1",
  "key33": "2L4eAetha9EQi4xYdktSR5gvAxKu3YcnPxPa9kdsMCVMDF9gtpc3cqJVTUWSLgHznPmTEYMmvHoNAXRtLJEjPYgd",
  "key34": "YYZBa8uTfTUNnfp6hP6RmoQeFJmdYjsMSxTLBy8gcgDKD6WnxDX92JqWJ1yfP9VvVtdAGFRQFb27wtoYNCcEhD5",
  "key35": "4iHPfQFMb1xZYVe4toWX9YKGf5YzqkY7CEge12eb2vj2jXWVwoDpzi6ukQsCAaFjjFKan4VbBdQyaiRNchdcX3ju",
  "key36": "XTKCA64W4ABe54ptijAuU2ZC3tij3Ud1NLJb5XvbPtCj3B1QcVgfsucMYtq13oTyEf2k8qC7QbdXxEPexg2qg1N",
  "key37": "64EJEMuW1fixQ4Lkz3VoGpYqF17yfUCzX9hgna1S4pThPe41Y1AYKQ2WcVQuXw6SNz9QzhMGPSYUMXpHyJ5wfnCd",
  "key38": "2LU4KSUJpY6od8p52g6Jnno5BTZKiDK7bVkhEhwVmTXFpcSDL2WnG3rvPvdMSrusWUH4sfmiypPxHxqNcf2n9WJr",
  "key39": "5Pij88BAr8By3SzxpVCMHTp3FsjfYhHU94HudsFGN5HR5hNiMgzoa31UGyFRYM8HzQuvhb7BBS5Qu4FFb9r7yTgg",
  "key40": "5XLm3ZQ6dZx9Tnx7g7YeaKABdi2UJ5RhGYJ7qNt1bvMAgoMvqyqFXm3CvJMbXTVCZM41WyQV1gfvurKgH3NFfumP",
  "key41": "5BrjZfx2Apwf3osrRpgn5X3fernszSkEjBuwQ252X58S1BT69ALHnwPpG18PtT53ecrYRRdQoAFU1hEhz9dWiHfa",
  "key42": "4jQT5ze2smbJAgoUJQzLWMBNGMPRyLPRh86rijaeFaWt2M3Qa5HYvafPX4qb7wuYR88ybrPSurdWVcARPjDyNjdG",
  "key43": "4r2qv3fVe2xKpbcGreD8gbjsF8XizizRjr1RF8yaTYiW1KLnJK2eMx7NjtE6U93gtjYUVvZT3qzEc3GVzeL9HysY",
  "key44": "278geeqXa7JLhgiMyWkiKBhgLCwaAjC8PUze9QiKYAYNk6KJCiS9ui8ChVtcF9DEEVLQpYkTUvbW2Ea7u7qvz6V8",
  "key45": "4ABXm7PiHwCcRCC823kCwjarLzaPgFXevsuki3VvUmdYDrgprsR6YdBUvEVhVjxKkCYDSV3geTKk65BF2wusy9TW",
  "key46": "jwTq4RDL7WcpbbSd8pGZSv16B7GKdigEdWQDE7tL1oXNk7uzPyAFxn2xPcbkoJJrwppjPznYf9cbbrcnX3u14KY",
  "key47": "6YdGzr2dLQeazH7S38a9VMLRRnWzWkrCrs5Ec7Au1nSeDancHLzBjBRdoVBffHcQeatTKW76gazUV8rhK824Ln9"
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
