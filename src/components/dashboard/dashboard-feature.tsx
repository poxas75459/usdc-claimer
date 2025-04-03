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
    "1yS9ZQCSZCUwd9Kcj1wQQRKsAFWWUX6oSndfJuFfni1BRXWWbQQ6jrfYesuNsUZ7Ttw4B7oR7epP9JpBkJdVqg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fGNAKfB2Qt3w9uSzFvnfC8kMiEb8FBUMe9kNJ6TsqsgCBGkaFjzf2cGH3TTKDRioWSChHD7ESAkXCgpuEgJtxNo",
  "key1": "4fvHiHimsd2aw5EpMa3qHL4C16bh69M93xUAXiF1xmTQ6pSbyKPYEro3MpNyLFfwTBCGak9unSSjti8NhJMBfQps",
  "key2": "XxuSQ1UVvfKYPFLAdwgWgBG7W5wvMJAym2fJDvdCgiN7hoEojri7pyBDZP8c8TCbRZnywmpzzfZXsz3C4QgXpvy",
  "key3": "4TSzZL7Qn2tAxJub59qMSKqydoFxZgA9HiRCPm6YsB9DbHZAofMZBaQVfLsyKkHbSPgRMJLbVk6gjWq4xyNSyaEm",
  "key4": "4hjyNjpPZ9yzgmvis7zztRefkB8vE2JSV3vk8y9B5XVDRpvu9qF2DWgJ896seP4Kzvcge9xvgkK5NdeHybSsM41",
  "key5": "2J5gFxR5ChYrPMAppwLQnM9AyTY5DXf8FcrQBhMU4q2AVv7KdjWfKZQ1Tyvq1tzbAW9i17JzXuknbiZsomgmCLJK",
  "key6": "22fLGwWayN2KjvZA6mm2EHmmvngZu7b1d9FNArN2hANFQTSihj1mGVXxgmmHsQWBdM7z7dhquMp4GUrz3TTTuV5x",
  "key7": "2GipoYKydgW5X1dSsuxiKSiwHvGuHywLTDEWLQoRf8E45fu5LcVppD3YPD2ws47r7QDoJMpLEs1fSuin9X8amoCF",
  "key8": "4bTiT7HEg9d4deSWbVJiSC7HRJNRNxvdrur3hTJrz98jWxc6Try7pyUi8W37jKGh8ZYNm6RCU4SipYsapbsVxCKB",
  "key9": "3DAtrU7P91CA5NqAqpquidWJj5uQFp4YGqMhbNn74SFC788Qp8veBQZdfYmsKwBSgudXDywjpqYCwn9q3R9iocmM",
  "key10": "5HAsUMKeM8bsnHZNFpEhRAGWTcoJe1KfY98voyu5MoACBKGoU6K1RkmvDevBcRvYB12pbafcyknDdaFDSyRKeM8c",
  "key11": "4Gdaj92xZqPh8wakw93MYjKGUmzVgEZGsHSzDjbVZDryg9G6twUKcJSnkt7ucMF7uQvSVRJ1fSn3GtvLpiXARt7p",
  "key12": "4p8UHoqcZEq3PU32peBo2ya3dAHYjLWVdwsdzgqbQc5da76CoroD7PK3boW8BM7aK5dDH3s41hCy18nFpA9Ju59b",
  "key13": "2oVboaRzioUDDkxees5AwNxRnyUC1nre8bZzdncVHC2qoKRs9CgU8CGDHymEBVjPw9FYsohpKSZwocniNpgU9sfT",
  "key14": "2tZgwaPASgANgmLBZryV9VRXYRJ7dPuSRcN6WNBkHg4R8QQyYCg3NsPh5RN279GJh6cZ1GwYMNrG36a3JqUhNCh8",
  "key15": "53AMuaSnnPtVkcJTB97Riz6hhbZ9ZtAH2sEgbX4S2PZW3g4JvHToTypN4rknjotk3dtMt2VS8UfLafK1coNEPfAq",
  "key16": "4Q5s1Ax4SK1M4qYjgbjEYkanhS2K1hfrREEJKSC2w4wY5We4dKLsxdwR7H4usBGqZBpWq6Q1jtUt2pbYYWD5Kqwf",
  "key17": "4rabFXyfnH5J9eWC7Riubwoz8Mt1qVWw3crUDpz1qc79tCgcAKKTzk91Gt4qDL988P9Bbj6Dqnmp9aSEcB8E1goH",
  "key18": "5bQujjscZA12UR3psZxtGgA6nquqneiRqa8fHuhuQtc9bN55F8F9oYyTxY9126zztvuueMZwN8K8ir6VPsPQ89KT",
  "key19": "521zq4Km6y65ct9rhsRkJ2QhEeSSwEDS2zjnmCcBvCLFuowXXU8TKwELapWoqtHSzKhFZ6DGqznJtTV5H9tLCyaW",
  "key20": "36xUPp4YN6kw11vfsrQbyRJvjSxMDqHNPuyC8rzjDwfAE4wpzRHnkRv8wGGE5DELUr7GxnniZRM9MYorQHdPVorx",
  "key21": "5aeR5QqR58eFqhCN5kPxA9PB2xt8bTwSgqeq2Vnpd8oyepygCbyeTfojPZ2DFMiAJ5Za4ergRBHaFDX4zRXD3DN1",
  "key22": "2CiLRufQF3a64rdYb2mMn3LF3EMXBbzDzSVDb1qxW27NjCHfPiu2BRrmdY2QMwBd9EmxuTXtWqAZtkLDYQd87eaf",
  "key23": "245WWrHCxyUbSv2neojCmcia8QqNotQVGa9yTyJ6fzo7mstFzMLKS9C4DMMULHUw4tto7bUnj54trHcZ8rC5FCd2",
  "key24": "3nG3uXGjHP6QJ5RA7rfWoHXHxsaTrw8UFe98M5VXtqsCdFhhhZRqxfU5JZtP91qA4ZeMScMM64b3hGQcryUUFcdB",
  "key25": "4ptW8zL95nZSxSUEKw8QfnoqSbzYcFpfWhhLWXnBiEqGiiR84eBZLMBFYuPE74ZvYLKmtJ9VGABdJ6nhwJoXH9AL",
  "key26": "5wP6keDvp157dtqBsihWE8kSs2Mme3Ve9nacCDUAy28BJaBzpDRJwVyUMdhe94ED1iyCsUJ14jh1sMkvENNahF8w",
  "key27": "FbUCLgwnXB9cFH4V4ujUBqcRyXEmHvKargm2eoyCJ92q8F83FzSve7TXcAs6RLy6ALV1YcZyW3bCTpaHrDodrDv",
  "key28": "8i7Ac73MisGBdKjSkgcbMJRjeNDK2RFyLexgT8pHeY3CYKcHjQE8qhe9gREBgfj8SggJvT8gAgYFCGGWjLSQKg5"
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
