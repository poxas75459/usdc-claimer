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
    "5vP16bAgdjA963H84Qf77wmiLtigCcvdCEQT2nSMMjJZByYegrsi9SGzeby3p6oPKgdwDc8Y7kmYNGWBTf39gKp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vSrxU5EvdxRbvTouULXgufW5h6UEGaSrq1eWzRE2bgxphP8UJafBYNR383qaXYnaVXj2qEFSMjxwac8xQRBxCSX",
  "key1": "3VfXCKp8xZbKRWVJ8Us8ukZNzRFvCQyAwkmUdM7VtD6QrLgC4rp7CyYkDAUxRTCgk7cz2gcmtLorYZbDQwRwH57U",
  "key2": "4HYDCj227f92sfnFZH6GQKR8ePpy7EvNZfuGwoCAMP3w369JZ7xZCpnDT7C3UQG3pGqmtYkhapPMk4jhkE9AatE2",
  "key3": "5RyTGQUFxT9VxRvNPDbkJ7mrtcPJweTZV3roFxYcCpew4LNkon3s4bwCa2s39cFxZT8G1F9MRUyq21m2SgHmk9dz",
  "key4": "4GU8LRe6t1GGR5faFrsUXh7UD83iDw4MMnRcomPcfHD4C4SV73riEyYKt4z3WAviWmN5wLbrfmtF11UbjMSr9YZa",
  "key5": "2qkDSpv6DpMNeMxq2wB2XFnsNtvZ2FJcGBKaFQU3wwXcvk9WCcfKfyxT8vGz2RSkaeEo15aSz2gwBwUVKUQUp4U2",
  "key6": "4Sds4b5HtBdEYvgtd4apqiF8qM6dbUfD4vdNeTZDqCgGknssgzeU8PnJYrRKkZJtHaRMSs5QwLwVkACobuBmj7si",
  "key7": "46nmFbvNq6d9pQghm48Wr789CMXgVwjc4284YYMtX7mSyhHcnkJ2PTH7RVCCvxYVu1BtCHi4KdaUtZcNXkQ6Buiz",
  "key8": "cNLbY5L8HB3RjUe8rqcNDfygkFs5dvf5PKiYTT9JCFWiCi8HpV9jUjxcA8GDucuB8t8qnXr5kicg8CnSREJGYqH",
  "key9": "3QMNDYaukr8gTrWEq95X9EZGrbvCZWM9QGvL6gT5UNtuWucEbhZJazpNY9ioR7TxrGG5qvou3sHPK9MZenvVoks3",
  "key10": "YXt2thkC76Yostcgrp5SnimiDJmvKowL4rM5qipgUcCAgktuqqfFFcZHN4aeW5sXDFSmkSNb8KBs1dJ6EQdr8jf",
  "key11": "3r8D6Q9Ta2sgYiP78GXeMbgeARuMD6GPHMeYXbrkK4vXNwMYYdEGsAeEwNfVr7Jm9DAcbA8tsM53ad9idXmu3uYr",
  "key12": "4UaKYjuwNMex5Y2WnDE9Q1Vv4h1XW9PYBK96wGEzomUSbrJwXcmxNbbTQ1ErnV4nBSwDQc48mxdt97wqcsLMNLp9",
  "key13": "dZ8WH1EBwFUjgVx2yfJEP3mDs5MGzeXJnMjLEXz66i2WF28ss1ajbAH24WuQVETiETsnxQmGPBAgrQBA4jU7Woc",
  "key14": "5kh93LHDQe9MvtkbBxCde2T6nWVk4bVYrgTMzH6G86K4cp7GzRwRFgLisyG1iRoi8LVzAaZhUQKhEimPZY81yshb",
  "key15": "2SoGhFUiyrCjvdDvaefLKzfBMrKkCPtFHANBt3NDExziCyTp7A2ym3B2oEtrFuKhDnkBPs8vVhA2EVkaX8a3KtrN",
  "key16": "yZcPBZvtaxL5CL33NVT1KLAdp5W4NwxRqnKbZRcaVQiL8ThCz28mMy3Sfw1DZadVWsaawSyc51YZ1EFFfgpRsv2",
  "key17": "wsTKZxt8oKZNgneJ9Km2Rkjet2go7q3WU5FbXyck975tpgpmVNHx1tQ5noSNHdwwY6b3EeD2rt3bTnnGq5zgN3D",
  "key18": "3xNgAQoZQBo4RsoPAC7viHb6V97QmhWjYYxsnrqcNVzwwCbFcoL1dB3yS32MPWQ8kjCHkAP1Ss6aFdeoS9mkayif",
  "key19": "bQHrygVhw2USXGVmMpGqixSZ33tecuYfbv4TApXk6kqCZBFW9f97vEZT8CvTfrV6zxUyvQKLf5LX2jiEEjCTnn8",
  "key20": "2FGY22rnMH5tJoLcmqL4j2KDV75uhWkfSPHq8W3dBzbw3DjZqunUUM1DT3QyniGAGceYpL3m33BDizJnKbfFZUwF",
  "key21": "5975WZv3TBdQV7VkAHX5ohY9rwJkfWwnsFsziPjqGhDhyLPzD413fnS5A7U3s6mqWoMy9kzkfFfdve4tpiVemHym",
  "key22": "4wkG3jo654DZHnBoX7UR9Gw4TcSNuFzKL4f7uv7XuU7uoyapoem3pbvxzoWqazVpPsKeyi9cKZQEjxs6g3eKXVU7",
  "key23": "4CMm4FiD1sTyXa6FjPg7Ny4bTDC3r2sWFs5ugkZXevWxqVhENyG4USL4QhmagfLrfmjUsnSpsc9odABFfUh4j3t7",
  "key24": "2uyyjbQZVoCHhv6cPSm2ReFmAmpSPrfuPMfKhaMasZXHVPuNuvf8amBJQHVqDd9Va8BFmQ9fMAYN34iCMDXixAoX",
  "key25": "2Hzut85E84zLn57oJzo2xhLaNkD7GFMwT9x5ETnzHjH6nN6bSD7C9u2EAyNDb3YViwCZ8Yvy8bGg9bzDCJne7kcM",
  "key26": "3Q1ptxHbDgsSDStdbuD8MP3yDZGrPsjwToRAPRArsc4FBLDycMYC94ew7n4BNBzC9btaMkbBqxH6wayfR79akrX9",
  "key27": "3sfcDpLgCoYLjAZXHtmxcht3pDUBzeZ1SSnZRowXKxvHKCePR7dMieARYt2hsVrZrtq2aTqmfFGmQpUWMVxRxmQi"
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
