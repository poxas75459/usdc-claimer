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
    "4BQEpsHHsjCtuJgz1zxTbQ6uBYsekZjKVW85ZzZm9ykeqCZYqijVTYSyMVNkQBzFpTGUXVTcwM7MEd2Q4GzrYAzP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gsRGcqQWfTrb36L34pUzLhwy3BbTZdT5T7HhwtL6FyrYvkcch7sauaX1h1ndRNdBypcyZzWkpd1xCE1ygVsgZtN",
  "key1": "3BZAnbHXKqjjrBeCAqNdgj3Npat7pP4vKLzxsoG45eskVVByxQT14g5nFyHtX98Xy3sx7gVqYP5FHvDjnKtNa34W",
  "key2": "5fcEMdcMsmJBXWxPYzjD37Y6BDhE67iMCc1bx9oxXGhgrBGQMFnNufNXsStM8dmGXznJLhTabik8TcpaPXmhJ6C4",
  "key3": "5PmcfB5BV2tZvSQLqBLZGKWJUr1XBYDUQ1L3PstKC2QkTD1isVpFT41XgzwoWMrK1NwPGnSakG1H59t68Muym1Ug",
  "key4": "4tSPCa9gUpQ76TwVkExwYkwx5BR7jvqHzoA21gmzWk513wFJzyPCrH343L2oRprQReZQhk4BXQh2BGeK1m57qe2k",
  "key5": "3icQCPAAugMW3qiCfMu1a1kV56UdeTidQrppZyGeZNxGXLmMGjWvXQnU19HY3a5N755QpE4BUoqoY5xxqBDodXPy",
  "key6": "H79TEYKV2jbHveop8s5Kq8cQAEPFxkzCVhWi2Tw4xoUViU5BqNSTFytxEX3LmVM22NR5FHJorWcCWKeZ6LKWwoY",
  "key7": "e7vxPyA2sjBwcBmCHQrhLMtFPC9HfbGPZspzCYr4bFgKGqyk8Ns8RQtqvLD54Q4U42RsJaDRBpotmjJ7bJonLpN",
  "key8": "5YBUFPNF1VpE1Fdj5fr2Fm9ZSMTcHXGHMmZ67ePPihTXCcSFvDze9LANk9hstsDz1ELYcwHjHxphS8BrKKYDDiWH",
  "key9": "45PmWhfpowVgQkn9VVxxdb3kUsJMwDQqVBcpBNBobjtkhQ411KpQSQqsqHf3kxebYQDCaaqtFtgodqNvnpYL5MoN",
  "key10": "2YeU3vvNy9PgTZG83iEeeWHcGsRL3nTFPnRjHAsZcMDg6dxBdMWnuqXUmMo4YfZPnVm8pWnHjdZnww6FpxjaF2rT",
  "key11": "3ktccfhKrNwfJnFNqLA8QAnFchi6VFEkmYSU6kqoaYVZCW3WNgWsbhHTEzU7LGZDuJdjqTeJoxJbFQhFWp8CZPru",
  "key12": "5aw7GnCgZqbJBYLfVu7FLjRrhpKVdC643kUbNG2suPmzCDXFqG3w7dBPQkV7W8Ta1t5MQ931P2wTJCnpJxHXEakA",
  "key13": "2Ndymau4btZehfqaKtkzsugYfRTAvucpWB82JPWV4MxHeEEzsKoQ2MwY9yzm2kbNZjAhCdTmXogVzVihSnQjeqGe",
  "key14": "yCKB9DHYKqfM8XLqRLrqXygTCzqjER68vFgbSoQ7SuMn3p9AgECA4pGzMNMmfePcYitpeBf3vDZ5sHKVa8TmYQH",
  "key15": "5db1nhqFZ8Lw6UcquT4WRgJwnR65s6nmRarcYCsaC6oLWGAwMHKzcb4HsZiFGsyRHXsYvmytTmk27eCCkCjjDz7u",
  "key16": "3XTKmN36SsG9roeSMJcLTrNqVrKiTv8mWn9sPLedf2noFLjZQWZZAoLuATELjNLToLhMLGg3ourEG4NjSBb6pF7D",
  "key17": "5DCgEUEoPETPFbxcFQwSCTpDuZpdAipr7q9QkHnbs3S7dC3MKjETgEURJiqyjwT6VkpN3ANQ9wdHvSg1Vr5oXfPk",
  "key18": "57yD2RUPcTEoK3xhwZGTkRkD1ufNuerEUaCbhqxngTf1BiPADf3Fk5i66gjUhRtahDLNqyCDwZ5vDCCajisjfCJ4",
  "key19": "Fc98rqEXRT6Hxy1axmSivzVjCRXiYC7pK8ENXWNReZnKbZei2UWeT89zywCxbdt6pch4odpQnBqgVwH8JNBvozG",
  "key20": "5e74zGa96HgLEJrr9GFbHUE1uxmSweq7PKodAhmfWL5Lx3aG6vUhgmp3ZBSHu3YxSgYcmn6SPLAmDG8QAz6X7Eq2",
  "key21": "3qiyX5mEqQxzzz6rCWNE3WzzCAhXpWrCns61qoJT84b3DCFQcy7tnNv6MwR1FrvYN8fLhnXt63vwqjhft9t9sPwt",
  "key22": "5HZve4VXyvGcbwBKuBG9L4JD5sakmGimDrA9HwvPvcMURsJeLV7hBHUrZtTVaUvJhjBnDD2Xebfcc8ksRHeSGfbR",
  "key23": "5ULzMNJ3Yn5kS5nV9mG49Vztsxbk1W6UAadp4aydbYmnUD8bh9UmRdsmkdoqBzyG2pjuJ5s4TiQ1fPshnhFhk1yX",
  "key24": "2UtKXDjZEEPGAkvQBK2ME22uEfxEWzZ4n9CbAcgLyEj91zxN7UdFG82jNozMnGFhdnv9MVM2wgpp5tAkZu9HKdT7",
  "key25": "4683XPByJj5KEt2ypY2yteFRt3mUY1Ki5q6e7wkP6yfMRH43vAPWC8WHbvAEVjWh4agQkeuojcxWW3TXQyTx7RqY",
  "key26": "53o4ko7AYqg46QQGkNqVREFaRdNjTmuPuK7jkNWu2CaX4u82PgqT22EeG6g5uBsrbcwombL1xW5Hen15b7VSmDDN",
  "key27": "UkAguEiTzpDT2MrhgFsbU8JLULzj5ko7NMUWWF7RWozRaGDKDHgcA7yc7jjbjygKxc5emvdyV9JUZuWXZpr6hom",
  "key28": "3GEU5yEFyJqrrBaFzB6ie239jAXKsAXm9aEeKu4ryRweqiAh18AwB9ckDqr1sD9ypBkb1dzbL7VPeSxNtiAW3j54",
  "key29": "5KeNZXmquSJrXrqocs8DARfCYbaG2n2n6hztEaZ68eXDn43pJRjnWMdhoHqNLRn881hytkgkQ9XXimEjN2eHSRZi",
  "key30": "5F7FQeiUhH8EhCkLi3T4KNdCRHBEoUExWkr5xj9WUatzHJ4udcSzqvpNCLiB2b3tkFBv4pdSR9uAHeDKw4xX8wQj",
  "key31": "2WLUzLzhZanUCGxV8RG96P2FqvqdaHgXrzrfSNwFoMcEuQdsZs9xARVrxAZwZ1YU3JZDJTasRJGGnjoS2AKsb6uH",
  "key32": "42fzm1zoVzdripwdTCfC3S4BPSkqRpzzCiDgtnxFPP8jNPdWPSYz1G2gwjSKSKMgNyfuHUB3sEysqaZrCMTWMiCJ",
  "key33": "rehrocQqvEgiZhMEfYWfk3hFsXiPeVo5DfHAQytV1Wpt6UHXDdtGP6axw2L4YCbQZEoBAZfSwLsXLK57xR1uR3z",
  "key34": "ySb78WVLRGHfiRci1TNd1SiBJYYtQwxBuChX3H2GJcxJyh1dNCanecs78okC1v6MYgM7JLdSoqgQ4JMqF6pgrCq",
  "key35": "2qV3pky4nUTZby9bgNNvrnvDese69D3E5kUP33RSB5bCtZiWRYaVG7EuJheGV7wtqQo1WRXzGa3XY1rvb4tLRt2q",
  "key36": "4DdG27Xa2TJmCWmcipKyyK1G5DCe1uM6bfdtTm5CSNKRBL3sZPKXniFBTDspJ9y9FahEeFSnZ1n62Rgk6tj61okT",
  "key37": "2FG75SXewz9ZKP8KfQKgxJR5HMKub4sgASBV6FL1FdFwCVApvRqmUUq8A7AjJCEXwsqCDUgvipAFrybDgbCVnZUf",
  "key38": "ajPSzwNXgyrKZoquemqPwLT48wQtUt3vVXKevLLT3wbifVTyKrSDsfNcewEQkUGRozi8YHXUhZWY16Rj3WDGoE4"
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
