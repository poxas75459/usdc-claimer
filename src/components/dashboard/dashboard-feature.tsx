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
    "3s9ydNQBX7Em4zRk2TttkEdiF9VFgSH8KKPNS9iqEFzte7AszJ84RMHnTSwAZpwrUXbrqrbbQuVqzxqGYk1ekkqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ezv29bKrsnHcZYNdBQo2aaGn4rwRu2uVthgvqmgKtSLDjmL9pRMNMZbR1WszKA2dqBtpaQeCszyWE2brz8pQ5HD",
  "key1": "3HRNAXVXQwoyvsxwQyg4ozEqQRH3Pb5NLJqKz19rcABUszpTRSdb89X9Hf41LDQ69cfhyiT2HisebjkxZxvzBKPT",
  "key2": "3X6RGNpuobaV2MmZc5XTiusTvpjew9Q7rq1LLhfhZw7runiYv8GTpKLJ4pZAWhtoMk2pqx8S9SpNKv525KyfaTnv",
  "key3": "3kXv1bnvrqpueFM196VYn8Rivwo9MycE7cW3RF1eb4C6AWJySfuriT2QCn77r7G5BhMpLK3CcfPbJ5Yf1bp9TPtP",
  "key4": "5z7kAZRVB4hBq8sCXN4HSbUaExjxwRMdKhHBcRMAosPgradYyFLEiQhoXLDVzJQjZnM7HWUTkFYMNAiJHC2qWCyo",
  "key5": "2LphB7qDPES7LmwjNtW4PJLAJFq8vQXLapuQv6jxLFvWigUzdeudvQA3NyiYMi6Jbq7AUCJ2rLSB7XzHUbenVSpP",
  "key6": "3o96pSgM8ssG7CZ2jDq3ZPZs86Ryy7XSumvzCuYg7BZfk8BFqhSNjVm7Sie9giwNEywxeDqN5Kr62JdThru1RiwP",
  "key7": "4GS71DxJgW4fcdjY9kHXmfwgwXkWwqjXtEmxBipcpR4GKBYyFw3CH3oEbGVxSA6dnAKEvDvcy4TNmHJsA7xVMNUK",
  "key8": "4ofCtNXfbABJtYT7tMrHV6tS75d3DRf1DYHfNyLymAR6UxVsML3HQ7kF4qwEbMzQvF9X1iF2mDsGdNTr5QC9Fvp3",
  "key9": "5T3NcJELLtHJLFbXTzaMxGW1yhvotffRst82b28wTLdcDZos5z8FFZ9L5roEDstkT7wftjKVC937o9aQLSAuXAmD",
  "key10": "2wvfaKycTbnHpKXyrpwThFpEhnt6NeyRTYHPjKqdQBCGc9as6SNMaW9mnrs5DLx27Xsen9A4bBsjDfYMY3cwqA62",
  "key11": "3bZHPw5MzjuiBr7XWe4bBirLRnG6fLZdsQm5tqE3aPSaAjmk3oSGhd5TP4zFU1wAERCiLmNmQAe6bGo8nWRehoWo",
  "key12": "4dZ2d5FeDidXn9gfQ1HUjnAQE5zFhhWhFXokHV7BCwhrLggnm3XESAioPz8tgcSrXXZPpCLoLFNJvCTmRk7NHzFy",
  "key13": "47a87rxVa1HaaY9Yp19Lit1589UECBnDuSeVYhDE67vUEHNou4BRabjxwmGBRHWBjggwirhVtW7nZ7wz1U6uDpBk",
  "key14": "27e4wJLeobfo9YKfay1d71Gs1fzSMBGy2iaNtfTnT89ziXvP8EmoFPw16iMZ2KE8c7X6zgea8jXHHvAphwAiNQGP",
  "key15": "4Tv9mzKCTQNeEzXGXsFgTg2j6pcELA4YcMtpMuh32msDCaNsQFQmgbsvmLVTVqP1TMHbJG3Pwdfjzhbq1sMpmiVq",
  "key16": "cG57hQ3BkUEk1Znzu428nkPxat8YvomxPZnZ8oDYubbMZPqCCqeBuBt2GYHVEau3XxQdSXxEwpSQMZEYDhyzA4R",
  "key17": "2xetWSucUFdRgf7F4C1D8uWyHaC17eMAogTgyruKx76rNYfNUsrAApXS7fggvh6ZBqitACbQAnH4JfX2VJLS3vnp",
  "key18": "uhxgCxeGgZSkNJxAbUhu5JYxWdfwCdBFWkB5Za2kAXKRQLT1gvYZD5Vb5SDU3TbZF2ced9W4rL4TmapLVxdMEM1",
  "key19": "5ApjedV9gztqQQsxSdb7DkmGQozvzC2eVMztQSD8WLHeCurcihcmxDMDC6JjuCCC1rNcKxbzECEiu1fStLggr9pr",
  "key20": "HnWCk6aXi71Dpfx7rA3JwQ7LnK54X1YbKkZiYq49QUesheG8qoXxAr8qJSweEqZVg2L7pFQ3uNNQpHPwvBMuHMr",
  "key21": "2R636LHSHnp5HDNEU1Mzf6984BaGsMXS4bJ8s8AtCw9LLm55ypGYM8nNLBE4MPCKAPy1NHeY7tYBs9yTvtMiH9iU",
  "key22": "PfVtjapdELkRnyHTAn6FhrsRxsdrXNEvmQ6v3UodQm9tYkKEXYs2GPh6gnHY4VxKyu365jApRocv3u6pP9KzgdK",
  "key23": "5cYrCf97WA6ZY2cgrfRQdFaKD2JZuU7nkkY1UJa8gNRJYqNySag2syk9XFz2GNxVeNVPnutXETWbnx3HNhep9eiZ",
  "key24": "CxMNa9pRAz9iata1S3ZcYYEStfNAnKgWziMyU6akWrg3b2R7pF7u88AVUNBVHESyAzrb6DENrfUSTCFVnaQ8Yac",
  "key25": "3ZAxaDLbVcMAXWW4qrfuWjB5s1pzyBhrdnQawYZVQZkypnAVq4xmUg7zxA2iR8qrnbF8x3iMmt7JgPYfpjNgwwzH",
  "key26": "5AZidbe6cApKknRZwEx81y4VyGiBc1YHgnvmoxeiEPqxhHHpMgpGzsX1xZXNe7fQRUkfDbwoF6rULuZrTDQ1Mgsu",
  "key27": "42gUgEdinSpN74ENNBs1BKmKimP5ACkAakUSPtR8drHn8kkVDB4q3izFDwGjFiFAk98nNn8M6NvpvwkJRHNTUKe9",
  "key28": "5EJiZSjHBg3b8pj9Q9EABcLR7mdeaorGkkN2uLeNrVWuWAmEBoD8qHnH3JALq9dP76kUkRUZFiLD8vGepxxikHuE",
  "key29": "4hJciAqAP9zXD42uW5vAdw4x2d6TcXsgsuE4LWv9DUMx5a6niyLeeaKRpcQqy2GFPoBKYZ7RNfNGC5fgt8EKozJ3",
  "key30": "5VukeTidnXdsDzQwjxhb4GFm9sJbbf26viKnQ3rLUYMbjQ9iwQA4YPo14dLL4ia5wC3qg8U4AK8GwRMf7nXRdDVG",
  "key31": "EN5BCW9agVVhcJmHtENnudSc2za5YtKaUDZYUhhSuB78rdCBt2bw9KEAuVnSSFS6LiM14RDpKh263oZ5APXbxs1",
  "key32": "54TdksP9GSM4D24bPesZYekhqNJVXtzpNiDY9rAuHhq4vamJiHQTxaMgAF7eUMYuZnGGzUkbhmc5ATaCsiYyEYc1"
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
