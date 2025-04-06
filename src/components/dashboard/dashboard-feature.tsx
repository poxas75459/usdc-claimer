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
    "5kASg9H8HYfoaLZoTLCJqjFVH5EN2Em3S5XmGMvFecYc63fXGKAdJb1MguNmuGXonsf3avST7A6PBEkhAecz6heD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cjyt3QDUgQxuEoDKJzhJXmnPdFbz3byyra7qUAiJQimC8oJ6fesSYqH4jq1PXXvGKxvzyW9GD8zq2Ufc9PXVG9U",
  "key1": "2kGMvLRzfrJ7JBf3KSV2x3rk4PNKmxJJv3uUMXEShMWCmZio3gzMnMA9HLM22pcy9bTNhoDRiLJaFpSpAZQVEzL2",
  "key2": "4wZyJM6AohmuMtstjxHKFQdEZmhHbbZ3DCGQbv52J9xdKMcHfXVhoowy4WyzpsAE88H8zcd1SLhsxQWxh7sufw8c",
  "key3": "CNgdqQLpYLfeRfLZXC5zmif4JmSqwTP1xhsJLtE7amWgtgQXYT8mtr2rQcVYG8Dhhd7Jp2FmXm4HbZKn8nDNmFr",
  "key4": "HK5pgWBPQcrCxU2pVjEhWWe7zVrFueHRAiiuEtvQYgWchVmz6PQxXSDRjgzYxhdqpDgwnUfdYVmHPsVv6hmRULY",
  "key5": "5nhgTuC6Z3t3GGEgFEKVQ8iXbnbn87wKAABpCk741CbR3URMHkpLpKwKUDQ9M94uQdosCXjYrZ5BsoCix82QHVfc",
  "key6": "5fr7wQZNPb4eUv5HqsXgXFRUpoUopDm79gLDFBSYb5zLCtf29GLuXCGf4FDJN97iKQeLDFcnhk51pkVm2PYphvRc",
  "key7": "rKFUWnRvs1Why4w4SRsedHThsuEgyVda2koXj7etVfLXXmJboEsf1hVpGherv76nF3DX6Atdhsa1CgDV9d6JBH4",
  "key8": "34prajmgdviLvuTkVWp5FvUds8zp86tifu4dWwEamXg2Lb2Lr3Z5dzYeVa1Xwo8FER5FQN1XqdgfFdjFnGZzD315",
  "key9": "4QdV7TYRrcUq558JhyKcnWaBbDAcC2kApL5woyAmgGjo4aRvc855xdTxXW2nFj4RcyPZL9fEVwMmMitFPwn4dNGF",
  "key10": "5PP5jWDjW2XLJvc3KdRZMdZRCpm6xyt3xChZ1hVuViw3b94rGNxDqdmS8YxEyChMZwomQSJYtx2j6qFPSHMgdfp3",
  "key11": "2mBHm6wGzjGTbj74zcwBFyQFn58J8gH7tkTmfzkhZ2WpE8CwV9HFhh89hRjqVa8ky3k8h1XPK7ZnxLXqYV4GJ5gU",
  "key12": "5bPHRPikYBG44sr5ARjwmxugR2EhFzWCUfu9Bzp96iMzwQGqXyW6T54SRi1iUNL8rjkZFtxDBsThfmThrGWLFUJU",
  "key13": "41zLLjkc8XW8NxqA29nGMU4a4PASDhpD8dZK5rv3Jko86cpF6wtJFVXr4FqCvcJWwwrSFbypr6R14rhxK3NfBi8b",
  "key14": "382a71DyFAXKzLPE5D7C71MXPojy9LapwDunydngso7SjGKyMt45cZkphZP5RVucZ6C1ik7SuEcy9QYY9MQGUzJF",
  "key15": "5FEgbqEtrFKdXXZhjVo2EoRDZzLyNKBULzANcPArf8DUihpUneUeseHZrpqDDfBBdZD1zZqibhVqUgunAZu8UUzX",
  "key16": "3pySrpyQivbfKpxkTeoNuyavRLoiDXnc611ZjkHdXXae7bNM8R65mHRdG25sKbxy7A7AEgonCTqnNhwqhBgRy7nq",
  "key17": "2DuAJU1C4KYLBEFd7sKtzdLCa6LFdGHLDuNjZiqSePkXmxZ3xuoKkYSDPEfr8ZxQJ1bGhRsRzj4kii3CQ859JGgE",
  "key18": "5PihLAKLZpGoDVXs8BZZtwE6Ur3nchbw9YNYq85TwsPYLbQ6gcqDK8x5VmQ1SxwWxpPaT2MAwUzwaj2m4C3fRtKK",
  "key19": "3i8wue322tKzoGVm8j95WUy9tTjx3ZrNy1dn8yQqJGfmbTm7Pv8ia72p11xutnfk4wtHYARGdBzzYBaP4J3Xi73M",
  "key20": "62HrYPf2F8w4LStkHwQAPJv2XCNsiGfpVTrtJht2UQ9GAiRSnxKr523E9nZPyXPuToEXbkHPPZ27w8NWFCJYTDrR",
  "key21": "4ev6FqNgCtwLBewR9oq1Ebw3dN6CZVwxLxQWnfJyx1gPG3CaMumejobWf7avGaadG3q5fR8HYm1XEmKbVXuKPN8n",
  "key22": "39b2JFdfDfveF4Tx5kB9TGwsQnGBJA4Cv8ZsPNEWY5ZLYrnzxnz4d9R8nFigjrxMYUXmbtPvcasmEqkrShPUmdw4",
  "key23": "4cqEei5QExLG21YpN3FWFPKDakVm96hsSSngC6aLyYU5KaEv44rQZhpqJUz9r2SJ27SkuqxTC6vSQE42874o7vCs",
  "key24": "4yKYsxAVciUGThCUKJHGJr8NrkFQWGLDLnR6oowFjfUSRvEMcuhwGdxd8Rt5rFBcCBzKiUjo6rpDtMGYtV51pX3t",
  "key25": "8DYH47jtrrs6eGMX1Bqs7k8MJ9t6EUsbAxZRsYXPdsoBsGx15CVzVyqNu1BvCqj7k2MURrGNTeJYnzkxbRzQ578",
  "key26": "3Nb5L7NNfHprodmv5gz4KtBjrmhFJNznmaynGq432fVqjBH21JvWFhk5M7H6psV1DZoNh77fDUDjxwAFrkChKnKe",
  "key27": "3Y8grJfM3i78ZGGCmgowrdwDozFbatMq5TS6bEc66avQzGB9z57PESibebTRBzoTY7jVMdgvPYWKypBZgR8UPXVB",
  "key28": "zHn6XgVSXZKwfcqJtUfqA44QJjWCrwRo8uuJJ2csLAEHymPNGznAaC1p9wzfJxLFWzAsp7Jm8EHEX2dZcKybk5M",
  "key29": "JSrdYxE6NTnCwYP9UHVM16Q1yd8b4EwJB7JapVuTKcbW8W8DuLHQav41B5zLaeCHDVxBNdizXuS57TAVrgCxxgR",
  "key30": "4UZxyhJgfQW2KkcvhJ4eK3Wsf2GCwQuvATa97bNRgggQb47exxeXVhgBTjwHoANCQSrRDBTUJrsNv86EXaRsF3MW",
  "key31": "MViHDVpXs4N6R5XH6Uc2cZTBDxMoDMtXaTk5jtL8UN1Fu54hPjv2CTeauvQADG1wm1m9PZDRPe3PRSD5FKmuo68",
  "key32": "2BohK7Zn9Zibo8iUFNYxmVpA2gGtBtJt5bopcmUgPrK1nb24WGkepyoPVS7tnimLGgntEvZsCmGS2zqCXvU93Ghc",
  "key33": "3onnNF2kNX6QHdBqLPS4Qc7AUGBUd3dnwdVdj2qJvSzd1jCBaXGevUVdPL1PtNp2psQD5qtNJcsuHgmFgfhykTe2",
  "key34": "J8j4PrSFqyUMNKpzo1Z1qasHwByNqut1i14W7QpDsuJE9XQiCYXuqg6i2VVVxdHSggF73XbxRpEX51cFFQRd9rr",
  "key35": "4oaWKR75TruCgkighLeetrn9QpTaXg9Fyn7TvaBcrZcoZKDV1znQhbS711R5L97QjMLJKSrkNiXnfkUvpupeikNP",
  "key36": "3ueq4L6uvD2VSyxfCAaTcdy5YSJT2NonB21H9repNK9cJ6ibr9GWQnbV8FVxE99KCfW4gAgXRAkbZKwoYxaYzCjL",
  "key37": "nHyX5JP1aV7bmAvKdgaU3qAjhiiV1B9Ncj4CyFYmHzfvShK5qqzYLoJfmeM3oFaLQu1hqVaibV1A6aBttKCkM4M",
  "key38": "491jDEpAL8T1Gf5QTNuh3P5GWFiyqd1iBnanYvaU7roT931M6gHTYqk1Quj7oz7G6RCg2SWu5crh8XzsmwTR6E7g",
  "key39": "2RokvWzjeStYAh5yCYmh4dc7YwCJvJeh8RtYA52oUjTqhFqsXJMtqUCtbfYgH1WuoRXqsqhc5EJYQAhhuG28KHAX",
  "key40": "55mkGmdgyU2254jvcTk7sAY3Y52NFHN1obvE5tbGJs5Jpu6w8sUX2PqHD1nG59aCvH6WeEkhWzTxjpresc2Fve4E",
  "key41": "3SkgB6N14ZovrAABDbMp3KfYtcCRVrit3PmjmwNFZ2oiVbCAz764qGV7P1pEAEsMXLoSmMvMr6ZxSvnyiihbKo9h"
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
