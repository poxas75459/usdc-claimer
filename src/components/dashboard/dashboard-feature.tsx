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
    "36k4A1rKftgR6g3ADpSsJ7WZLpyBa38yQTnPdcrnEC3tP4pvx3on6UMJefxWcbByqqib6rBieM5FmuRUiHQCspAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CySVujxVasrJiy62f5weErsDSMHfpXjTEtsYXqX385DjMKAMovRYtrrakcL9MiGXSkGaZnRsq8yUoEe1xrU9DFa",
  "key1": "3mDkvD818bUpFQwu1BQh4GCkkAY2u4zPAMUNVXcnaYiBCpDaWNLT2bxKAHG5fAHZMUGHqMXVf58MbnaHypjiVvDF",
  "key2": "4rrqhCvSCBvBNUqKZF8Raaa4bVNWtaUgFD5Rg6qksV7UKhRfwbGg6LjSRex8ohJqkqZ68X18TP882SXYevxjNvh1",
  "key3": "41y1icWrAyeuLBTrqYKn96i9MgNV5cmKYZ5hBT8GZQnDTbgWptgNJgeHNSN1caFuyPPvnHkE96e4C7JMUtc3qWJH",
  "key4": "5Jfx1EWhrhS87pV6iYEDd6QRXPNjWgVqUjhmuwPZ46YCCVbWamU7SV1CFLEv68MgieHu1U8f2vfu9gCaeyD8pLA6",
  "key5": "2Y1QEP9zGp4LsXKHvda6skckeDYsYCCUfYD4u2Qj1mUii56JdHbz2pB8RwzdxnK7rudApQhhpZ2gJFWLmVhgdeyB",
  "key6": "2PiuJAUBkjQGW2tbvY6XBBumQUJPChoCyY5UTaZRyjQxZR7AAde87JJEf3NoEgHajqHgPGBEnGNMEvoxTgghncFE",
  "key7": "3fQWiJgXGRqiJjRx2BJQoaWtyoK13RjWvCDLg2vwSRMsuV4D6H6rhWk4USjS2jab1ybgdXrAzBeqne4idGYKtrxs",
  "key8": "375w8Tkwe6iawLDbeB5c3DydFCuwfzVR5SVeczgftBk16z36eP2co4g14PqygS7vTT2NTGR4MzdwWqsaHAkySYnb",
  "key9": "5oWPsB2a4BhCingPWC7Sqca6HeSVGaKC7XaJjngDcLrSB4VXMrJojvnkUAgW1yaNZ85PhrjdfULqzs3R7EAUvZ2W",
  "key10": "22Aba57cH5NLnZNJtTYz4H9WZfLdQtfQNP6L5wwQrtTQg9w4WPct5ut2CzaA4nEruAJy9sZjvhvdECtFBenMWaPi",
  "key11": "5pGnZ36snYgoTrAAXqu6FaDCF22P8sq8wkptwTFteyasnGkpDBNsGCsYZ1XEfyEwyg4hujBYuZCmbqm9tuQpAGxp",
  "key12": "2wbXRTAqz2gxv94kBwrkhwGRLpmXMcae4L4oPpjApHSKe4YMgSin87LjpLWnzP3j2ktHCGVX6G4eugN9pWmTvoMD",
  "key13": "UBeVi831DApd8PbqxBUfJazAfHc8uHEgqxeG8bYZrGk5eSsbicpxiB6Qd7GGtmUKBLFS8KYGMkyC446g7hskgrA",
  "key14": "4BqG6fV6Uz2Neq13ouS8AzdJCP3JpyDJc3sAmuXCQU5d5ZS8rUuAQpjKnTwCqRk7CBq7Jf22uVtyz3uo8HPvNRNv",
  "key15": "5JpnxCTuLoHx8s81AyQpSc6WCDAHZKp36rXG4T4d4UZZFYTYcXpLgzBW24caxj9HKT4zRFp5Q9oF42RtnUbjnufV",
  "key16": "2FUb3KvbMZxf9GmgkFpRsVyFJxhJj7kw3sUaftCbm46p5yGiSanityZvEyzdGctnpjGN2u69M6tZYqwDD2YpevZQ",
  "key17": "5bjo8WRa9Yy9n8aDCwSoJ7DDrdMEFsp1n8Ad275HWUyd2hXW255vESCnmCs7GtL5Fmk2G3coB2oEevJYgxY9FTpt",
  "key18": "2yiAR95R6gRmpm4GyZzb48feRkbRfxsvrChrFFbv126KczJzz3bLZqbTaTJ5mVka8qTFf7KZaxQwi4PcqZmYBqRh",
  "key19": "xQGJf2Uw1QeYZWFpRVbbMckq8TnDY5SoUbgEZAk1VfRBHYd4Up2CKbQtSqyNdvu3ZYS6cNvcM41tkYj9bTvr5Dg",
  "key20": "Czc7RJwnTY5cgKoYfD2EuduoKSRB8NWxaRWxpyvYfYYe7AzvZMJKvv1tH91XNPoWHnuPhshSiTGiCYW5cwVoubF",
  "key21": "4FxUBXBCD6fusK7FxXfCQ4Snqm9TwpvMmvpfixpv6muGH8zPm6fAPnrCB6gPHsupTTLNwxzdDi5iHsQkD2mhVCXP",
  "key22": "4aWbrMxHUyJJVh9895MMktqsbZbyq3qNJECHmuZmtmmbQt8dgyhy1iBPuPHUgmA1LjrWhxfbzPqNJva73tFk5HNs",
  "key23": "5kNEkSbNXCbr93HRty1YMGg8S6QH1YeVw3CYkEaUv1vLhtpV6VvNLVV95vxY7tPwDdpxaaLr1VtK3B9kcWpRaG7E",
  "key24": "5BisLmFe8hMNVhomj4UDnuW3KkvkCdWMXMJeoMtDHZaan1r9hsbvLi4WX8wFCYDq8PiStUdi4TDBuC7G6zvVUaWk",
  "key25": "219PCXkdjsqU4rFFWeHbtdSsT6kYuXodLcPT9TufQXyWsHgf2jgtKjyVeBgLbPNCdpfKom2vCUz3DTo2QXAaLEUW",
  "key26": "57KJoW166NV4T7MdGhTMZAyDx6NuCnfcaSMv5vGtQ3QdB7hxnszkmBXiXZ29VPwnoZfgho3tjum9khi6PmJmJ3yQ",
  "key27": "4WfQRTpNWshNEtKmj44hR5ELwp1Q8eaZcmwkKKHpQZDdtw5byfpzST2c97CZQWucarMPQuHtGLRXAuH6UAE4nMpy",
  "key28": "2oNNVoDdyJbcBy6PZM9dXykoczC9d2g6Gb59y7cFEXXqyBPqq6EZYY4a9r8Z3tY1GHf6e6GBn3dXy5bXbqmBRxvj",
  "key29": "42ARgoKWgXpsuSoACDACxHamuA3e2pgQVaTM6wgp2zAaaA5tqfyi8mQvBzv7gqnbq8X9U8CEmxA9HfwQJBwDJhUQ",
  "key30": "4q5EYjkf8nHeRfWN7NQrzYUAQ8WRp6r5PbT7dRBx8ddMFMsyurcUd5N4RXTfvoGLQJMnve6eunFfab1CUQc8ZARh",
  "key31": "5hyhV5UqrBobVa8qnGmMSWF3cTJ2eNQKWnSej4cNUA1FGi13V3huYePE2pHs2qprygQKmWkoKzmQEzxJtgF2vNR9",
  "key32": "R2CpgURAxXv39eLsRU9bSrGxHMLiwsrBvMAayhxbRBv5P8bQVEYX6P6P64dw1GuockLvk85gtG4cGz79s1dLa1X",
  "key33": "3Hgvd9ZdmqZfrf9AsxQ5MvM6CiFLhUMucCG5XvxJNEaL2cjMhj3KaLneTb2fA8z5FqVF2xLhQkdRPpqd9pm8LaWi",
  "key34": "4SpJca8evSgmw2uzopvgfXh6udXnLaL4RH5mumg1NhMWugnCsgAsUPkzFqrP3kAa76GibBEebqxEpE9xvrbQBLkN",
  "key35": "5kkKEGcwvu921e4Em4B8sBFueLmRjwbCZbVDDfFkaE4yjgnx6x98WkkoEqCjF6PoC4AbaQ7wgdgaUaQTxWRaFs1k"
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
