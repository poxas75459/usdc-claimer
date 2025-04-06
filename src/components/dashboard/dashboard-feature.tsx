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
    "2KF6NPpuMexSR4QVh4hJyAcGWcukT47jf9XQT2VhcAQpV9XWfd5X4EVMfjXBjeH6CHRgrRA14WbPe29ouyGhDGAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53QK7NdAH5YKCnCRjjjNSWeHt5kJ1C2ht4VoE1iyqXPaQcWoRUrLtwRsCft8YBoX32R2jW98qLn7KUaFcqKSdvar",
  "key1": "3jw2cjj5y1LxDDb3xWGA4pGWWVCwWJLcmEEqps63H1hUUW5KHFZdJFZdCdtTz9xsGeXr1T15PNJ6TaHRzMpymQHV",
  "key2": "2ALo6eRn5JXHCjup6hZ6UtFBKPE2dSHwtigbjbBPhtE26BgNbdpdeeDFP4eknZP9FQE6ZmWeECDq7F8qau8Baufj",
  "key3": "4gXjtL6brtZd64CKC9KCdQSGNEA1dRQiMLzVHk7xsmwaEWPLfmR6FXQMhVzH8koLpaiPxdh55PbT8Y9f3L2jkiV6",
  "key4": "2VTA7cBrzp4FLEZCspUwsbD1k1tV9727UqYFuwo2HP9nphYeXikWuXrUgwnFWL1zEvvu5F7bBgUqdKDpSTkMHKPC",
  "key5": "4McvAEa2Py6bYA1j7eGaxn7xyjyfFYE7Js7bYJuZWhuH8PYZA5PrNSgymkqqYTThgrwF9UwNkohhmq36Jt3ED2HE",
  "key6": "3XFnrYAvpxEWpwvr6whzW3UrAgqKjWxCNcePvQmhxutCVtsaWCGCW1JuafunDsZXdo8TffqzFze2f57seeW81qqF",
  "key7": "3jgkp6yV5ubeFLhe95Hh5LeHMLif7DgxHN6X5KEzKUVeRdUhtMUp95W1yoZ4coVXVsKSDb32W7MmrDjAE7QyKJqR",
  "key8": "3ehyDV9nPkWV44K58JN43t7BdLBrvCm16Vih4YSZSKXZQTvjEWaY8mV8QmVzS6ZjXG5Tq2Kmyqgkxapzhf9LHvAo",
  "key9": "3gTsYxcPSymA1g6PB7mJ8D8mfAtAcWGa4JEeopCigcqvm3nMCLehazRUGpmFpAQyw8Nz46ztgYrowG3r3PYFr8nw",
  "key10": "2fnee2Dv9V6qUEHC6LjDr2L4Jtwzmts6vp7P2hJLSMXw9fTeFTisPZeegyDppjG6xf3TrVj3foyuYeGEe2YdecsH",
  "key11": "5Y6xPuPqhuUtKuCk4egV753ys5RL3JuuMLppzYExeb2BTxjwcUsPoLCVDELzLB3xoU7ZGYBEzdSUiXdVtBVGyhrG",
  "key12": "4LzUGxLSNwEddq1vgv6kDuBbv1dgYMNS8iY8mPof6HcFsyhRtubqe1pD2Y66VXdWKxJjLD2tum58osnKBcbjYtTM",
  "key13": "czeNPpy3nx6NFsejHPS3sCJu6nEeTWVh2zvMrVmTzsfWuAgybVmGethMJorQdQ2yeaWGPNKcjGj342CyexTNS29",
  "key14": "3qqPHRSBrdYeUcjCT2SYsmjBi5iFnuSd5ePqr7Joom3rPKRW3ujgpWXh8AiW5uqWZ7rWSiJJaB14VkmxL6GNMinE",
  "key15": "344MxcYDBbUReKHQjYtowqCQSLrHMhWCa1xPhmCdYRRU2oZZhsdFQsgR1RqGVYdnE6ehSpcV5bFqmKpnTU7fTm93",
  "key16": "hzNwUDu9tZNYx4FeB1RCUEXMTE4V9CJVPm3tKJoo3GV5n3HZynDNKTYTYdBuUFDoev3V5ao9Km8Y3jhY3aH3pEe",
  "key17": "2eUZkGuu7LegkGToj21J7pXURYzKBCkkSg8RywPQGYtt27WpzMvXTQGRPEaPeFuTZLwJMTuBo46BCjAZECtdBTBZ",
  "key18": "4kWh7bZVCtqhyW4B5dXW2V3gdRbpf94R8Yic3Vnosn5vFNuTKDTNkt7FM73yj62jEqfFHTchfcuK8NSfqgYQC1nQ",
  "key19": "M86SfUMf5sU8dsbmjcfwUqf7WgHJGYFneWZKxUMM9HZxHkUKZeoJXT7BvmN9PjYdKte21G3FkESkUCWNHW2qkCP",
  "key20": "3r2pe3sAksngmcet2wGuTf9e7RDeSkkxfEkKiS61CznuSrv9nDQX9wfpjqXR43HPCFCzG77Jg5rgxbFiV6ANFcgN",
  "key21": "3zwmLNymkcSGysuF5VSEni5ei1npGNKCFFnewHM1joT4Xvf3pAtKfMNCnyegJpNvBdJ7rTpK5hEtx3CSdhmkuUPP",
  "key22": "5WLZ7RruizQ1F7iSLv3KbqNbpcMCrEEzbnDy9QzFhPV6Tmdm9vALbZ2JPjufbn1McmhNhHbUHQJpYtEm4RHSYCRi",
  "key23": "29FfKfrUoSGbbqwXSpSzH4iWzxnEhi66HQ9gezhoaVbsb3civQ54iBqTj4HG5YRUQ6VpRCNjKkw2Eh8t3NjNRrcg",
  "key24": "5f99tb1TDHYWQi3z9r9o2b2rV3TJ3CkBDpWPoAsobL2u2ysaayro9esPoUNzkHxKwUYgD3fsvQnFUam7P6HPKCE1",
  "key25": "UJUbmqd1xRDiT5Lu3VP4BPmFjLA5NBgiciUe9CRXnrZGhekW9eXbsMWbThvH7WMYdZu3u6rHBemrXyLhptDqmax",
  "key26": "59Fzi5SvwCDXx6PnCHKCShX5EzdyYZySk1GCCTpHh9T7D8UFnDZrJddturW6okuBhAYGPrneh1WsFSKsvFFhYLGY",
  "key27": "5S8YqGhgCE1HZBRY7ErhLJx8WjFgRSPbk7HWxRFdZvGGdiNdizSB9xJSF7hCGr1KdPrM3dLR8AuBrQw17NkkQsXr",
  "key28": "3W31cjbJeHrbtvyBCUeDjyXaJFk9hPYS1CmzWu12hdrWj6JRnNWoU459JTDR2vvJLRvjm5ynqKTRjoqUH2Q8cCtN"
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
