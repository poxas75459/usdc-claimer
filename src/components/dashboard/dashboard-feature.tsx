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
    "5eVc6TLFjJqxmvpMN2SsXEWJi3apyHPXyEmqy886dePMyrMP5Gdx9K6nVM1PX4TsYCVFEbG9sGcpRG5XvDv8DuLQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "98HPgXmSyEX23k1e7DTZhQPEFn5F1Bh7wJK4J2JecCxVcHKSSWT1RvQhaxpzAaLBLF4XQa9VZW8Hy6nzQvtu4c2",
  "key1": "5TkndCxR5aAHT6MzsUygVGrZ9kJEBArN49izartzb8DfumnNb8VLcs3zPMzowVuUAhPjpzPAHHtGXanSvWaoTLMs",
  "key2": "2u3YLWdr8XogYATsQQUCHATiryw6YipBPjRMzj9zaBdhvUmezTsGwN2B5CgpPWvq1bzjT3SNVBmNz5XjAw1GbdoQ",
  "key3": "3WuTvhUkb27ukg8iw5HMRRMtyKp9iLznF8PHe1Ly5R3yoZpZsQ5dxVyeAPQzZBp8K2fdsSb1x9jJZ6gC46Vck5BD",
  "key4": "4KhFDwUbtPzBbDXttbbCRSXv7VPKKQQXnNWLkaF9McunpkUYAECfhZoC64nB2XGmHu26VuMbyXLXvDMRyMMj19g7",
  "key5": "3WDq9xyQ8NmHCMomkWMQcLCE8Gzob7ezd4dGW4KPs3EZ93aGZKPBQ47F699aYPt5eaJMd1J3w38hVCfCSfEuo1oi",
  "key6": "22b3jXAu3J53Tm1NtQceWLKmjXWtymGApZ63NLYxhYHdkTfdELbQJVUZdiqGPesBH9oR6LrTXAtp6rFFjAqCb3SL",
  "key7": "64vz1hp4Hu3RyuMgUU7Dk5AkE7pQoFdr1zSQs2pPYwgPmUsM4wSzHDNRBCV6f4RvYUhJaufb7496PK4rKF5z7Zv5",
  "key8": "3dVPiYjaknfMUAdrze6cmMYxiXrH5RqQ6LebWPqc3y4Pr4uum5dVeEmPTDc1qma4pnhh2ouDShZf9KX76kHUU9kg",
  "key9": "3Ue19VWhpw1TfoRH4Sc5963uc8vcJE6VFSsk1xYpkRsBjwF8pKjSKWqRUtcBLYb2UzQJYB5mpRYrbUiugSBwsHYs",
  "key10": "2nY5Z4vyEdKfEDz2jDwc83w48R6qrztYUPgaPipiYm29V4rjXZKzgtbJh91G7VJGXGKUeTp6mL1jdZ1GbSjFiZDm",
  "key11": "27R9ysDkNnbckmZwy9XoafueoHTKYiHpVdtdDXDaCHfjXc3Gcsrsj5AK2XHuUvD8iAMSNovqsVQ47ZyMhavJUAAY",
  "key12": "2TcbZEp1H8p1tjHAHw4uNUKAdnfbymTRFUqmGx6rJpcv8ctJwxT4ukjfJK4u75rXSa7XtdXNKe5MbQiwC5jnANJy",
  "key13": "3XXVLiSXxjAcMdVfuakEaExTBoC7qrBMUgnTWKTYJm9G1BxoHmzt11bm4DXkFyFFcUa5f2kc5KfzJcMtZBBWzfzS",
  "key14": "35KvSkgZniCBW4JjAFVNVyzbzDgB3VsN6HYnHNhTCjshePCYNN6aXmAQ82ppnAEBg7PPwLfDRgbiXWSVJTHDLL38",
  "key15": "3szrtqqmmyXPjeEGZ8v6WRCnvyFgmzJ1iDu56JX9NYsLvaEjSP84jkbAvQcoHjXPXPfkCrwnBwEW67C3sUMMEDMp",
  "key16": "2K8NoiKApTkZec3kt4gLqd6JLwnwkcLXHppRH1Pfkfmvf18SVXG9cusrX3T1EErAoq5N5TbeGuPK6LW9LDk6pMn2",
  "key17": "2FvoFcvGiRb31KcjrD67o4PnWrKutfJaMHLZyBzN5NmUFEWHtdDiLTKc6QNM2fnRtwqjViCjFHmnyCteCMeCvomg",
  "key18": "8BF5RaT69DdMEvyuoL8GkTC83cRng8ULbk3dvBiYe3CcgbiZj1YL5W286MmtFWSLnMXriNk93VXRAcFWB8jj3iS",
  "key19": "66ttXk8s3931hTcyNjdkm5JXZmBmgGuWXkFkjqE4eAxPC1M7gmZPJocZ9rZAFtbvAwTZHHrmrPwnRF4L4reCxS95",
  "key20": "PQNLiQ2Tv5sPqyb9AsKm9XjXHXzshHwtmz6g3hfPHr4WvpUDSn9LMh6c6gH6uCkCk77JmKk8PFXc2Eu8Pcmx27p",
  "key21": "3Fqc4828dBgGWuYvdGsuV3uV5kcBCuqd1cwQSCU968d2s6X5vFphHEJ8vpXYZpEAPbrCzSLqtanUL4wjoLx1yP5T",
  "key22": "4B1yoH5rNJFAb1TufSpNG3kZHEtESC5FSXFt2jBv4CVWQR8UtMgULNU8TjUiymaQz4TQH2XYPEE7gxmicnjd3ou5",
  "key23": "3MYwFmnn2QWsyRjnr5sF2WApARmQ9hVmGYhM3iwBuf8HLSPpwpQhLi37qxriaCwH3gHuiJBEQ7iQQbkxXhvoucsZ",
  "key24": "5gzfJVbwb14tYGjNfjGNfzM8uFBADNo25oEbkXaJ2TGtPCXBNTieaBB9bJmSbm6wS5ZEJJGwKTVbXFpvYNVgWvgG",
  "key25": "3yCrcdfGag8QcCkq1zM6xfJgZVWz84dxb7aRGFkfhwftHqMb3t2j6xJ15nJtEvik5uKdzdZGhFKL55wxdV3N8gt6",
  "key26": "5KvanJtwb11EYvgABhWL8oMDzQ31HV4MvuwWB5cPwnWLuE4A8sRdUmDVBM2GeNh3U8isBqNy1mkpTTtv178wFmWs",
  "key27": "56fqBfqvAdf7kDWShHRTWtDxeXGjBgjzKgZpBoi2FNgp52meaYRDK5TE99Q5grJ5cHNvqM7AUyWQ7AtE7sH68sg3",
  "key28": "4d1nX16wwcjBpKc41qx83LiAG1U2pzkci7MRi6J2jFudvjPNQsarwE8brPKnafBGzQAAZgaFZJzHpKk4Q2gGdZTz",
  "key29": "27ZksHCDQXkKny8hKdes51UYUhTfY1VtUHyD5Dn9HatqG6Jg234h772r76AF7yehJ7KyoGGKr8Rx4gfVqCj2GFUK",
  "key30": "4eAYW3segWMHknjwJ3U641TeXGbs9hNubgyFCSziiqidbE8FCZEAgnihjftkreU2y93F7eC8dc2vYy3b5Hhhh1oQ",
  "key31": "5FdHZwEx1dPC5M5ChwRc4zXfP4ihm8ytLoX5gcffqq4QQytbZmy11HVd1YTpymWDzUCi6pZD3hUTduyxbaKzmfTC",
  "key32": "3dXqtpot6QRKFj7VMfffznAseefMMCRo4VFCVLfRYYfk2rSyoNcDCVQpUhT5yMWhCmVeiSwLShj4Ji6nWwTePuMp",
  "key33": "3X7PZAdjX1WoqWamSGvQLgsGPxcuG5kwtWQnC1iv7PPD72io3Y56YppNAmEShQBXLrHkwMcBkdWWmBuy4HUdpN12",
  "key34": "4zMxrWTc9KZZooxk2pPbfqpDNNebRbVn4xhD6PiarRcbqsfT3Ahne6CUGattHvK7K1q6sFy4XRsfZUsCmD5tfyjL",
  "key35": "L5NX8FjBjfzF9N1mG3GiZtkfjYi9QetAC9p8aEJo46Hqh14AsD91pdHQKH1nMgfAJa9RqXKnvQMcSQ9uFLSZR12",
  "key36": "2CXGVRVYhCnhu72QYLBYyZgGV83pb2vTHrj5vgwDKi3E1AqiMrag5cXd4dSctC9cCn8M1jhaAMtGYhuxFFnjavpX",
  "key37": "3kjSZKeT6FJnTHf7jmtb9JKDqAmc471cY1timDZNEkqLTNmzPCKUSXctDwuYWJGuQftgnHxemwLBfwzRFssCyaGR",
  "key38": "iPhfkRBdfAEGGw44AkaVLMmjYzmh2hJT4ZzKyPDNsNS5aaiKeMqUVXsrPzdCEUYPgNj2MrF8cBrLde82aLWkQiY",
  "key39": "3ccqbBFGPqCDNMnS7wa7gLpArframVSDHSVQo4BFpdNA2YurhvqyY91cUjWyTYW3M1yKbykV5SoVm9o87aDwMQmX",
  "key40": "5ypXcQXcQTTfwtDv5kMqud8ofC7oFrDZr66prWNuBHVcqt6xgLUrL1WBvhsPSY9kadmieY5xDkrhXdRaDvsHB1G9",
  "key41": "LvtKMuFKo7gYKkc8KFmzcS6QcfJjaP6tSRVdL1Pn7yR8EVDWb965FKvzCeerVVFgKPxRVvmP6PnrnU9XJZweYVU",
  "key42": "4v4fCFnEcvjnfViyxZyeC2gS5XFPZ8JWd2AcpJXNuttARVbu1sxxuqo2zsq1hAVabDbBPfTW5YjkxmocxsYSXv7W",
  "key43": "3BhpmGrASHMAbgriE7WUnQWukwJoHB7MrUyDKzJzaVc5oGggHj8AX86VTjNw5cD6eZpBvb8fo5qk1gV4pWecZKbA",
  "key44": "4PkmVXUN49xC1HDeA17LjFNM7L95Xqs8LiKX2vMvGS4FJdYGZ251UW1QjG5zYsnhe1xehd3TTuutkrzgZfeGXryw",
  "key45": "QiwpE1qzPss18Vk2x8Sqx7hXXGFUJHRfhKZktsGb2W5SsnNNjtrEcRwH3gikGrfz48uXKB48uFJrhZRAAd8jfET",
  "key46": "euPaWkgoHBMR2vn2baV2fWThJdvQ3o75JEZvcCz2StYkuVvgZoieHV8EKdKNNPXMgzdvmhXnbmT12SRJVcEM1Ah",
  "key47": "HE4tdqiTjpj7XA94RETpwqvDk41UE1x6dYF8xmF6MPEapJg56DpwipRFWe5H7QoSPgm8DcSgScJHxd5XZPdy1P1",
  "key48": "5idc9ZNu2LR34KDQSmpCaMeGFGwztRSGLsQnrFatYKV5AE3iXD1CP7vQ1z1PzG3YFUGpDdRQBZ2BtuGfW2xNj4Z4",
  "key49": "5CDxY3UuvNiaxwLEKBGT4T2fAUaJ3k2gzSTraR5eMc7wZibj3cbvpdGtUjYZNNwLgeihSkLAQjk63V3Q3CPAFAUe"
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
