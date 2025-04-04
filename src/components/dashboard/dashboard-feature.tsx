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
    "2EJiwTY3EceMyYG5cK9wD7LkZH6g9P9qUfzxWZZigsfnCVoiVFHcAyvcd71Lnb2KJrGSgjcbyKoKCfwKE29YHG4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CzcPMh8zvKqUy1DjbRzP16TfCKpMvNU7oatEPqfsN857HZJfg22YLx8QPtM9m4NENg3ipmJeH4hM265W1n89uMA",
  "key1": "3pa6yiT41K9E1dgJxrk9CG6tE5tg8KDdBRX2rBRntkkMDHEWsxACi9vSYTFEMzXBvV2SDkXsVQjnTx7qGawBHxyb",
  "key2": "2r7HTugkgqa2PpupUv7r1SqgLQ44eTvM1TbsdowHvo89ZLthF8Bq69EnfT5nBryx1RGKWYnPKt1dnZNKamXru5KZ",
  "key3": "3kY99ZoQHe8qfXtsbpJwCToeqD9X62HZ5UdDSUwFm8WVAetciTJ5cBz5N6Gb44FPxboRNnrLx5DfA3jLbK1d5e1S",
  "key4": "4ExNF2LfJUtZirgfCHKaoYpjyC9vX89v8HYK9qYVhVwyEWnYD5KeiMmUJhfUuEUQYcSbUZnFQWojzanWa3uNn54V",
  "key5": "45A57Bf3muUfrrkbfCF9xuJ6Q2rs7keUc58fqMGJbm7eFDk2rZLG5NDWcneEDexHPhVCdQEi4Ef3zivp1fwBrvMJ",
  "key6": "5KTDL4gcq76hsjPWX2hVCrzvvRW6aT5RMeBZcuyDVhBEFr4LxRMDSxqFV3cRVofohinL3wpHhQ1MV6x96euVEVkM",
  "key7": "4Ue3qWmpwcWdQrwgF1AuXU45vptaUvEVWGF3BMSxipco1tepbcEXYxYahu4Eja2zkULvQBFRAPrX5SQdQnDkhetp",
  "key8": "zo2Vr6oftFvvuAVt5SwLF4BUBMyXmBNmWqTEK7eCuW4eeWy8Qi4xkvr3yxTKsJ2qkZT5HJabp8UzYPxYdTvENvn",
  "key9": "4RYctzG9ixWy8U2GU2bDCCrmoQwwAZn5LisV7TR7nCoGw7w5GYFzodeFRKGfjcLDWPCmJPYxzKLaPHBG6tpXnC9B",
  "key10": "3rceFXpsim7G6uUek6Xi93zpgyUxuRuDcRUrLduVf3QSgUEhaZe2eMEHtKGGBLPqApZsqArQyXGsVC3xRc3s25Ar",
  "key11": "5SHKCxteDbBC1JRZ9dBYSc5oEgnE8g58s4hpA83V8AcxyS4jFCUacXNMZP8G3CZC3cXf9fMGhHY2RY5fMbWALEzr",
  "key12": "4aPm17GWujZZjfE9CE5EEZfASQEviZ3pgJXzSAPNerfsRpaBWhzdzWsPz8PMzWz2jrZEtkSAgJo9JG3MnGHzpbQb",
  "key13": "LVCvjYhgrR4VieTZ6wJfatFp972KJuRdLxzM1q2hvGBbhKgHqnXbNU8uopvGEij6QrJMjN2tsWwAsjYNDfeFddu",
  "key14": "2pRc8fUUy5nr7aeZhvBdDbnGvNovvaJcEryKbqcTV3k2pC8QtL1WyzCzJddTPDV6NBSyAsPPrg8oU4nu1p1NS62t",
  "key15": "3NThzi183kxC6rKEZ8YFmVmcyznQEdDQ6MkpibS8wPRxi7PgaVAFUzLU5cK9i4HJTNkcnAMmo3Lt7xhsTUrBXRNx",
  "key16": "5WzZLyseFKnCwZtz9Skm4Z9JftN9yT8m68mzNX9AdZgtpaPeVc3uBEyiispxugYido8hL91FsKQPimtZMyw51hXC",
  "key17": "3gmMyJxKxEskjQBJ9uq6aQ4qiPmskX6K7fYkFEX1TrpXrKaPZiGi6eRCwg3hPyhfQGFbQj8wdzEoy58rpQZvjjdb",
  "key18": "341kwWGpASEgUKeXfWe3uCoA9CXCp3AXLkA82jKGPDuSK1gUTbk2qBEU42g1hHG8f5zoQZ8ABr2RwfAdEtoySuV5",
  "key19": "3bQFdh6An2nyQ9kz1Ahjdbo5fGfdetPAQ6SHgy5okYR8D6votwypRuJeeMVf5MDcYDnZKLKUQV3K3YcSCzupfuiG",
  "key20": "4EdXHH7c98x2m5kvcFjSKoyB2oA9biLXCJ1zVhtHpSXPxFJVc6A5azQHp6enUX3PF4jbtDzJc2GbLaMdRtkrfuFY",
  "key21": "P7FdUETtf1bH4FdQmQzjWgs5MzsxjSEfzXRvFg9u7LG8pFpAQtrz93y9ZFrSeZqN6rPQKqnfd4Uqh7ivTwALBYM",
  "key22": "5EbZzZceh6Sfahq7WuddDP3X2gCgRZmdBG8Xh6qqahjFMDFqGLNfuLcoTX5jyUad7dfNuakUwMekgCVqAGNNnrkQ",
  "key23": "sPeGNZ1pGvyNtsMPRdDRbShWxUCL5dFPoDeuYyJpKHqGsyg57CwnQgvSLiy378c2Xhc2avAixUJfBEgvkLHt6eP",
  "key24": "63t9Q3drvMJXSzgQCezFpp6NaB6FuRxofqSNombe2KtyjbSnXnQry7SQnKwnDZGgRPqKoDTMwVZ4ynpmBQL5B7Vs",
  "key25": "5rnyyFNV3ovhqWoHk29pG2q56RJFuCG3aUdEY6dFmELDQLx7naoPi9DmAcqxdXgtJQM3QHsrRg6yUw7rRy72jFHZ",
  "key26": "5kW9n5ihNB4vYYRHb5PAHUsUpQwXZBU5YUGWPAhkBEbeWb2NJbyNbpoMjUwewE7bcBKfZjPL94exSubqfVvKpzLj",
  "key27": "227P1pBV7bGn2T2vmr2jA3xsFj94jzHLFqahZ8NYi8AJ8yi3aftBBTAwhGkx7c5hYdavKZHTwN53dTgyTAjarwgL",
  "key28": "Yx6ZWNi48BA986u6nb42XqQzMFVMvsAQxSWFhxxSx9YMvLiQGUQR8B53c9iy65jSB1NeQpPCSN9y1f3iFFhKn9N",
  "key29": "4t3edxE1oijLH5J8TrCWDbGGThjVAuQB15TpTcjVuz81Em1yaVy3GQA4g1CVgPWg2EiJGp6QvykyaEBJTThXCJ89",
  "key30": "2qPRPQ5cnnhNqqXsKSA7UUdbPvgHqA5c6sUr78PNyD77T6xBSXg8gnSYNhSwXFtbeiiKqWXPVkBqFcsBN4JHh1N7",
  "key31": "3vkwh9DfYTQSXB8zadyAC1qy8RQ7LBPpZQQzuB2ME3HW4EjyXxqmJJ8hpMP2kMwymhpT5Uw7JoemngzTA5LtWcwp",
  "key32": "4TvD4Wb2kRr2eQnCXa6TfzTtJkgqzKLf4ntyrTFKq9PvXJKzp6b4Vejrxc9mK5XzAhjL1MMzkr16NYwZa4nMBWfg",
  "key33": "66eG1pisdtinLnUXiq5LnZtNXgKV5Fi1m1o7vWhNJr9TQCci5C2pGHgZyeadbQdACHCnJSY6RCGP3HJEA1e4HFuD"
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
