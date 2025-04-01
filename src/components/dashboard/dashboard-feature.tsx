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
    "UQc4nMnesAYfjeNyKxRDeTmyq4BNiabuMBg2628u1tnNTrfaaytf9CUTBYp6Q7fTKMcTAeKiX8xajzATzzbY9f9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YHRrTLAYQs2tRwAaYuGZVTUFRNNyxaox3tq7rhkgwKxBCqbzbRbPk9At3Ee3Vdppfc6VUUsaYxQgw95LQP28jms",
  "key1": "2VimoKJVVPmGWKQCSsdwgF76J5F2fquxNfxviu6DGdTYzpUwF7aEzECyr1Ris7ZPNi84wN5YGGsh2r91Ys38BHbv",
  "key2": "RTUPVx5MNWYQas3tLcGTj9N3dBHirFZabGc59Tf9tRzcJXtUcFG37pnUj8HiJZmk5tCz6Bje2iBYEMFfWGacXDQ",
  "key3": "TmKFzZwFsmirxUSjYYqJ4EEDsTqiFxziRqB5LSfSdfHLwmRGMgC62dV7S6fNDxwynVnc3XiBvTSDAgau2eQ6mtm",
  "key4": "45oR6xia189u1xuaY18XrwoAXmPjawZ2HSSM9SrP1PvnSs1VaEAhYvXz5grQwJ485WRmNEL6Sa9MTMmRgaN7kb1c",
  "key5": "2tR4hxaiwhzKvpeurwzGfcZuC4Lq3hdwZf8jt4gDUZBNiRkyewwjTB9KxbuWBvUwBFaTJru3si9PUx2Rq7xu1o5a",
  "key6": "hFfMHQtvNt741UGs2Ti7VkC3rQT42KWq3B7PLJJgsrZwnWr4qXZYLNjfMZoVXpS3dook7L1J6MHyw2x7jv4phNe",
  "key7": "aQQu71aaKZHsjWCF5mmL2n9ps5ayDeRoc2T5apwqWnUn3H6ns5XTg98UjxteCKU4XmTtoVQY9DZKi7f9Qz571YA",
  "key8": "22T1U5E88rycXtspPKRtojLVrZ1kWVsS94hPeF2Gxgz5TT3FioqMTNRmgJrvnGe6rGogr2ogWjkxL2LoGioJZoZ7",
  "key9": "5xe6MLjvvjYRmcXkB4DpCpLnCmekauzgh6ZeqdDRqJZ53bUiNpGxe2UxLYz37bRioS7dSBJYDgdaXGx9NV4Ko6Mb",
  "key10": "4mSpSjMgpW8R7c4z267HWZaouQnaZe32Gz25qcQsNejkFoswE3uARhwRo2vQNqbzKhRW8oxM3ZuMxNrfAeK8Cq8a",
  "key11": "SnCwC6cMHvNRUpad63y3cgFxNvNRcqd4DPy78eLZ5BnF5ZDDckcMDK5HMKQ59YeRUPvoYJSjbCXtpTzsm57zKL6",
  "key12": "66ziKDf9L55BxCbHH3UXTFkmFzbuhT9GPHeGfE8UfeK3BjKMmP5Q5pmeGmDqagW8VedUzRFsJqTeRPUmJhL6NpQS",
  "key13": "2kA6GsLeNcjZoyzt8Df5AUUo6FPHUaLsWUbc3SSKTUkAJRsy62YifNoqNLKgxBMYrgFFTLY5dVHLYMHH4UagsKgr",
  "key14": "2XDHrsrvUiZGUx7mkBCpRq8KVJt85uwkKmFgpdvaAwDZ3iTvtouuqBojA18NzA3RBS5dyuFapTb6JepWP223JW7Z",
  "key15": "5pQYZsdcKZYm1HXz5PbCnh27o9wgLCwsjcdDLBiKtYu8dCZVLBhTEkcCxaBShHQ7hUbms1D5KeCebDFKe4rR6tRL",
  "key16": "G9GJdJV9P4ATA375qGqf2VFEPYtV5hYY6Mbei2V7Dh2cUMGgevDjJWW9m9V5u8NhFuPduGpukzbBJMPiTaAy6Wk",
  "key17": "5bcAu6pwnz2X1DeXxuKnhjAqkjS68Y66KtfqKLEdj5jQY53KPfFebeitECBhQXhfZPTa4yERQYdy1MqgV9FWxUnC",
  "key18": "5Xs6L8Lb8T9iNVCJ28uWJsPnZB3vjfeCfLaHcZvFv8ktwU45iNRj9EViwhB4fVosifKfJ5q29EzQVYni26or8WkM",
  "key19": "Y12XhtWXDJw4jSJ7uz8Xwz2NHbv2uJJ3woPppwBnopZPJZqeSSgfdCKWSAmH7x4Kmv6vtmM6KR7WHuU1DMUaLPR",
  "key20": "5geohq7FNgG5NR3UGepBvKEx7RDSmSEF1i7Jwzf4yHx4QUxXTHMLJAGfr2shKoyFUCc4663vxBeRcPH4frQTdoXv",
  "key21": "4zgLPxb525MkHRLfHW6YEjW7aMEb8edVoc3v7p6co9EY5B6zBpsoz1ZqWQtoBLesYwCDE4cc12XtjByrmc6QNzzq",
  "key22": "5PNBi5i2qWAzucWpmNnPZXAuKDqLzreMatFEYr4G1pNCxEQfdtFL2dJfn6vCcdNwXJanNy46uRN7t4MSJZUwTNj9",
  "key23": "4ugPGZ17xyEwyuvyiHAzB2CTHZkqVTSRTqtv1MY7HGecVDx7nQL96b1AsWHNUS25W8o3K64Y8ZSzw5qkgv2KqPoG",
  "key24": "3uZpLqASw1mktd4cW4BrmWGrFxxQduwEGi2FKvnNsmM7DRpGH1EBTSnEhkKpnfT4HzKMkgrRAJYU4bMz5xSamuNN",
  "key25": "kX1LZuMeGoCmk9Y1uoMTzbHqTaQW6f88XviMgn3gPLtJ68sJrrFhk8ceu85v9CzawrHMS6ESXgYW2eXcdcFatQj",
  "key26": "3Ye1veEdWGzAHFoD5ux6nF1suHseuoZod2jLsaFouWg8f3n6JoMNh98uxGxnwn8sond1D6Lj2PP38s9HMd9jFijj",
  "key27": "NK5sK8j6iWF7AZaNu4orknBeMK2ogECYyZxKPqxokTnVvYBiTCyjvj5y9ekTefbKuNxVQ8cD4bUADKABzqp77Cy",
  "key28": "5mJR1Bhhu1Wpzq8vUyMDGDXcWJd8DFuA5C4UbtT3wkQCBALAvwHNUu14n2pkMyxaXiXZv31DoanjpmSjdPZVpBGA",
  "key29": "5UfpnBKx2TesST8BY9qwUh2GP9tQfHi11uR6pPkNoBjmqKQYrwBP4TUuivpk9H2bFif4JAwz8k8vGbN1GhF6XGgs",
  "key30": "iQEW6FUZSbyKcpnT4vWmuyeFsHTqMeqzdwdb8gNCgYiih1n8nBi9mNjStfDpRTK3SiqvmqC5v2HUPfgsnqWFY41",
  "key31": "5bzJVjNBW6ndMMxaijvmzPaTfJ5vj9ckKu5DnX5mTnXjd1vb88i1dLF2yM5rqPCdjj2n6bd5ArMj4V6WJmuvNQW1",
  "key32": "5zzy1fmovZAyoZdjfwkfXa9XBTPXF4yLBxpHAAGhAkRX44Uu6mHissoyBqiqu86iax8tutquACXc73h8joV7N5Xj",
  "key33": "3mqx8mseaS9MhKLUfTcYFncFyH79gVXtn1EP8LH8ue7FkN1YmBr6ZxWHGrKkkK8X5PWa4nvAGMTwYD8V3jKAX2KC",
  "key34": "s5GoKvtyn6NCFnqRyCQXNFohr1HHTfwQgm2VewCvmFaARZzzM1Cfz83qpnu49TfeGEZZcEHzDHTRRguPbMa3pgv",
  "key35": "28dknLvKSiHYMcU8UGAMMJeURjx9WwdkcSTrbP1BXJuLWPrvidzYGgwLqjhUMCJE4X8PxFjGfYvC3sDdA4G9G8o8",
  "key36": "464UecGTrkTpePFVHmJ14PNopPd2YY4cQD6zGt85fV9KisjvDAFQURjJTdSKdyLNoh7kCPGHk1DNVdNN77PQgLhL"
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
