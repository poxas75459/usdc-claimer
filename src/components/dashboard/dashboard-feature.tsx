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
    "2wT87weFgni3VBmLJXrFCFHQAJiCWC8xgmUAU7t8A4nsA6wcu7CmyEZJc4cueDox1LcxQLakSEGY67i8ca3c7L2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Rj4wugnNZ59JPapp3JpMCH4UfYqN6kcju3nFGHgsXn2ZfsoqRqCvN1TE1QNKWUerAcdWgUL1QeD1b8XbMFVexw",
  "key1": "67eSQpFx92Lm6x2mdu1zK9961thd5UWx7JUy8e3q5eqgXHYQd3KyKrHxhPArY1Kn4FVsEtg4TaHhhoL4fCScwNNx",
  "key2": "3e1cqqEEEnS2oUEDSNUpXpzH57UQ8PdF1QLbzAPHRzAZAQmTyw56XwyAgH5ZCiH3eKD1D36S2iY9BZkXSLcf7gk1",
  "key3": "2XCqY99jBAgLg5hrigsp1h3ysENjhhkNMttV9vKGQFehiCEpkP1hVgLyyLcXUGYTTXzXjJegzHGbpdWmPMwpusx",
  "key4": "3TbYTVChtvQAqwaZW4D4nx54NnrMPyz9Q59q4FnhcfzpTGGhDpgJgB6ofdpyUCA1hSQAHKAa5FD6ZQ4NWHrPaNNw",
  "key5": "3t423VNjyfksT5NvRdduQ1jwnVLKix65NLiisJuVmnEBSHjPyNmAM63puU5hStYnEzK9BSt6krxKYeTypvMJK4g3",
  "key6": "3rF1wbiJ5mP8aV9CK4DksGeenXpLEHQkooQ2NZFeUEtkLfTAMUjot36EbNP4sXUoyTop4DViQvqoLGtJ6h5YQgrb",
  "key7": "wXeG4yA9N6oCTFEjBZVDB6EMYU5SSr8HcySFCWkVmGV4NtdMZXeNW8awZRc8q8eFuWRHZYDFrW5p6u3ZYFzXWVL",
  "key8": "4UV54jH7RdVNezMypA8bBDpigxXLgw7yPRPNaP18nVcpcDpobKWZ7dZJh2JK2b2ghJ9vZZA8cvF9cXRhaRsG5wVE",
  "key9": "2tA13TwN8BksoNsDH1UBiujRr9HCa5pJE4iRvgscWoiCgzTFrqm17faajYES1NwecQE2R9FFm4knTxoHDqwy19GU",
  "key10": "38Edw9drKHix7ZacegeQobDzTW9Wzv33U4xaNFKEFKLDtgjMDhJhPvRcGoHXCdBU8XWKgFTfDCeiwLBCekKME3qi",
  "key11": "5HMVBEpUbjTVetuYhSgz67AQwALbNNpN78SNUW8XnGbwycfaGHZCDGfGxeJx6mqUEaNfdr3EeVrBsRB2hwV7oBDc",
  "key12": "8DNr69DAAM5r2S26B6z7PsMkg1A4WmpErpr536Qr4CN4fspeVxDxgwpwpzkFB5ZNXN2e5u6BtvnYgBdyjfQfrN2",
  "key13": "5t7MNJN3sG3ZRAieBSyZNaLFSPgfetSXvEEVi8KTuw2GpVdJXF8tqoRgBtSb4rs9r8AZSzeQegv6ff9FdrRNyKA9",
  "key14": "JYTomnF5n6pHNmu2BLGKsttbtFkocKWa4tiKzWe4i6FGUczYGTCi6a3Hq5Q93ZF7Cf8Z2QonJcm7bcs5Uy8Hf55",
  "key15": "47Wm1zuw2eRZptyjxft2yKBnmUiaAQJa5D9EFoBtqnbsGazRR9T5FPzKZsS54doVaAsCTn9iJF3tYeBTyYPP7urY",
  "key16": "5z2BxdLpaKRsn7x8ZEsAVvi7DujvHMEuTEQvVyAKjdtS1rerzwgQhdUDJHKTijYb8bsF8Nj5H3zVP1bRTAU6hHK3",
  "key17": "5CkkL3ngCtDFM2GctjV9ZwFY5p9XhuuQxH9LLXHzMCQ4apbbjPNfXP6mSGr3Ub3DuDGy2Sxiwf1KTJuYjxEvzETo",
  "key18": "2s3mYCXCShzd32yUErhzippRXRPcrD5TxdzhW63tyiqYg3uoZu3d2u8VqH14mVGMXdUrDA6V75yRaJw4VM1UyXVa",
  "key19": "43GdEnyU7NqLCeL4T7vBH4e3tGm2nGjMB13dvMaNeeiQZtHNzPSYvjbhkr3qFF1EVodvxkm95YUtUQwRYjsv2cfg",
  "key20": "4KAKi7ZHLDggcRyp6QcsTanZ27cCU4YBJT1mdcGPnruELEbMRTeVswow4xEDfUJSdvUciByuHHxrh2Vt9DEv19mZ",
  "key21": "3GpBTcmzpbLMd3Avpyo6U4kTQGWuXKNWwPenUUGCaqNLVm1DvXDM1RY9jYQUHnqgQTx5RBia7NsoPh44LERdN2p9",
  "key22": "2WrmeYiW5Hf9JbGHim84zrt8isw9zMtoiorJusgXwUf2Zru6AUNEFjDW1HuYJHSCG6pZsriFJvBCAaq7FiM2PivB",
  "key23": "4uiDpEeHPHtpJ7a7w9K7zyE1CHomsv7bXD7Hv77PkjAc7x6AZ4xJrVuHNgkiSHNLbqmgwHJQYF7Kvm8jZwNwJ92R",
  "key24": "4hfMWK7v8ZtPmmGpHpi1gnqtDyTdpc8hhkCdK5HKk6Vik9gDM8pu8L4E2iQrbmq4P2LP4KQnNeSj8oJxQPQFTcGd",
  "key25": "4yQH1JtfBuMQG68duCQeZ7PuHuK9jcuigzgqCdzqyNvBdhnEkSHA78pF7Hwyz1d2HdqEBwsrW6qpF2Q83mZsPpoL",
  "key26": "5ALC9fth26VsFs8qt4p52BXiMmjRsgaPPYVaZzGxSG1BQBVyidAqBZBwu9YSLkyqrn8qRrNvMtvQhzBPzrTn687E",
  "key27": "4iTJTsbxRoF7AwaEPYGjxzksuWQk7aAsYq5kxYfVsmwzynjcsENyUewPZDcB6uznUKJ4gAiEhMSux5pFkA4N19tc",
  "key28": "35SEfj6eL7fea13pNUEPLx792z9w3sYYXRVLvRkHjGadzPbFn8Zidj4mRjX3H15pf3ncBkPsj8d6wQQqhzDB9BuQ",
  "key29": "5HP4n8ZxMHVnuBvG4ScWircZnRSybvtBSqHhLjpVfkeBAxv37d3hQRsMsTGwG9HWrETFwCQFBZxTAuSshNkVHmRf",
  "key30": "4r9nfSEd28r4hrcALSgFR7pbmHkS2UVZcZfnJ5R9jfsKgqTYw8r6BAeeTcvvVngvMTomgKXoYEb1uE5sCgdjemJ3",
  "key31": "5y4GEyhuJZVicWTg8As72TtedYy1JKNUsYwMBMCLdjfR6JNKJAA9we4kbMNo7AKUZWMPXdRdrtUuGBpoSeAAoLJd",
  "key32": "2pzZ6apBFLQcebjpv8SiiXJKohXbnAV7uCeZqrLkwfYeRwkEf5p1QfMvXj6uFKGDSdWEyoG2nh2cfeY13KM6oiix",
  "key33": "2ekoqWUKoMf9csLqmQ4nK3KoTwGUwGNubpVaPkx7wD6dEy3S9qoES57dW4bijpRyBND1SWMUHFFfZWNoEKyCUYud"
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
