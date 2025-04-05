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
    "64yj352JU9bKJpPGGY2imq8f1s1YGTM861nZkczArRaykJSmfLH1h8kBJR5ECJkirnUNeCJ1TVhVPY6DLiwV9w3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pK8dYUfa8BctDTSy36YmL334EPDurYawswwLRhtAsMuHGWBQwxRMoApjD29rHxTRo1Td6NnJCrJtTaooU5HKpGn",
  "key1": "5hdz9rXV8rD4PmYy7SRJJLkUWLpgRdBPzsY9Gxu8gWWc11aZYWpNTKxxmzoegD3KQW8NobXnfVEM42TMcAtPTZza",
  "key2": "5uJz8D7BqHsuLkXNhcjUz9D9nrm6uYNQJHAG53HLQdveqd715W9ECJKuVwb3kDannAd9tC8nqMzUbpuHUNPNvM6m",
  "key3": "3WniCPE8EnRKZFho1KtLXHGziT7f6vBcKG8Fh5Kr7hqwre2c5LstJXJWLt8JV5eNcisUoryM27XTavqjeqYxiFDh",
  "key4": "2tiMiCZ8x6tfwsEpZh6ubcv2kNSRxrJVyD2wYoL6rr5K6pNMFdKbY4qGw5WbVYwqxaJtku7vG7Z3acEoPa4ewWC5",
  "key5": "MRmZx1taC9m3vzy3NjuqvJyCMSd7Dr3hYBscWhQytEUMAaq7uBBCEQACdhvdKMgEqtsvzNP7QyocvRZrKTaT3MB",
  "key6": "3BAo4tq1Y48y6nWXfTC2utvHCmL8fkckdocPdbxqGjLn36DRRC7eQpQFL5N1dwon1hduptCDCzHVRkT2hJF4J4ZV",
  "key7": "3xMaBWpzuSy2BgX1EmyjG68SNDe3nJTFUZhSS7MAyXkTSLYGFM97VCZEhpZTzAgYqLGh9cFxG9hT2PP3GS1ijDo7",
  "key8": "2z6E76bAi59PZcRias6k3GAc4zqiwwymSUNe26xUy5nYQ4pUeYzDjhtzL2HUXUJeAK1JT93RXFBE4aVK3j299ku6",
  "key9": "3J6S6EkRAZJDRSGQp4329Tp6YRzyUANZsiqfAGUAMTspANh3NMv2RQ1jEjAbe8Zv7eYNn4E3uWo9P95QPQZe7xPj",
  "key10": "3fpQDk4CJkMJUufP9eJEtvxdrrnAR9Lu4rK7eZbwZQS66bAofgbnLxyjcZL2ovsAnScx74py3zyedehwHgkF3noT",
  "key11": "pDVAgkWiHV6uxr8uPZJxjuVHSf2atztMeWcJ9BuF9HrLK3xxuQsVkNhrH4oCqj4hKhSRBDynajMD5mqHcSEb1mM",
  "key12": "y8nJu5eQ4ihyvvU4dHc9CumAYdfsq86KdaJ4KWKXPbeHBiMDNvPHXQHoUjdL5XrStqM116xaM6bR4KH2ex9KUHM",
  "key13": "5xiCHmzXCZbsXncqdUermejvY1dHjjr8DMLyxECSCsVBJ3AFA3okgS22cujpsZ1WjPjnATnD4s7cBsYbbRBo2xky",
  "key14": "2ZceLXJoqi5ou1KoU4kLpJShzgRZq2oRdDw9iZ5Ua324Vup2nH7JDFZ8aBEXh7aMMp7oMpnZ7LfpXM9qZ3VMu95Z",
  "key15": "2Hu68RMAscnX8hN4amGuMoepGmXyRJAk9tnjNpehGaMVzypnN75ipjhW7KhzpFUhJZbrPjKxnG9NjvjmbhqyMbj1",
  "key16": "4eUr9xKTLaaGRFogxK7VKqTpz6xb6nBaPhHB3SJfpRFDW7yqjQc2X3CZS2ESBbFMomyALU3KfMXubTCScz6x6YxR",
  "key17": "QKYC9UfwqC32MeTBpvki1LauVa1BdXvndtShRqPNavtBXKQYboaHzULTPYAgKqaoRqGQ2zEgfV7JtetNRfwk4bA",
  "key18": "35uqKE6abC35VSFkd2ZHjDXasYaiBvuuExQthMdhx8vTN8qKoFw5wSSirrCQB3mkrZ2MoT2nq4oBovWzeJBeqW7k",
  "key19": "2itSfCTiet5nvvYCW5vmo3TKbK8YQa8CwXXDrPEntkhHVeT3ypsVNP2KBrCSGJ4ffPG1XzXiUD3yy4Ln5dxqex3s",
  "key20": "2gPaPDKJk9vZCvP7z6yJyuWcr2jEJRB3MvbvNFcj1or5tGdebFDzDZ2QZMxy1hgBD8qGueoCLXCqnzBPtgVra98b",
  "key21": "21u7efg1ceMrQsrqAbK4YdGWuD3buy8vkBMbjcxPzsbx17BzyvbydXrtYZeNbXBA8TZfqPGVfMNpnBJ8FAPmbmbd",
  "key22": "56H9s79rNFcGxDgq8D71qwSQvdE5YL3TW6TCrN86qFpmGUp6kXF4AFDZwi5Dmxt5DXJEFLPUXX3gAiNvqJJ7Lnmu",
  "key23": "4kL6LYroeBgNvGJuVb9bMhh8yCSuaBSz1sPhxAXTLJnnMqDcHH3RSjRvn5r8ogfvmnjVUU2SFHoBPfrkv6wKdbGd",
  "key24": "42qEaYvGamt3Nnq2W1U3b3RAG4kRMbBq6TNN8r1dWTqtkqGaTRarcbwzANpynhLECSDo4MczbnrsnLECkatqvjiJ",
  "key25": "3o5GfoCLDcoKSTeiBAMNpmDxJyke4atwzKhTBePFVuG41aQ5JGjP9fwBiRFdzUNDd8boJD832kS3PDCMsfwmguc6",
  "key26": "5fM1Rs3FRVg8jFzYGDc8rJgq6bPee13McKWzGwJ7dpnj8wXBvpsGqsBc1eiZCJYheFQHTbsaXQ82cvC21L1QuVX6",
  "key27": "4hcWLbx5x45766PqPVcCUsw8bSr7xevpqz4Hbf8gAXgVKfwNZZe5LUWQ3PrMFnMHQupnW4oS7sp8py6Mrcc5cs2N",
  "key28": "4bqN8JvCh6FnunB79X8H52DAc2WyjELYBgE71T8beaCBXbAygiPUcNKpMwQyB1j8yUvqXSbhAmQhUqnpobjrAjwu",
  "key29": "2XtmrVRu5BR19CrbXBs2rP3qsb5civyWhBosQ9doBrG9sBanG8qf5VVuopZKSPG4UUsWs8tvKUzw77ZNB5Ux2xzj",
  "key30": "25i9PUxwqVwBKaY5cKoma6bzQJ8iKjHaD3cuGjAuduFdurgELSgPQ1XWMPp4bGvW33kqRsTcx1BmdkUxyfycNX8r",
  "key31": "gtEjmAznYwCxDhysqNM9Wn2EiAHqMxMYCioYggZXhECphAzTMatkLu9pzyFkGMwcpiMT6kRxHacsfdHYKR1pJJA",
  "key32": "555HJYkyK1H6jdZqDgsYDNxrDspcVFHnNFPHpgX1vAzhrrhLQLbExorCrbKB6HfBthM613kHcjYH7avVoh3q4Gv",
  "key33": "2aF3n4ZixYi8jNRQZuvNJ9zBR5fQa7UWLy5JjvMCWv7fPL8Ynb5Xw1Lps75irT7M4DMrMZYfGbTT5ZCm1s5S2ZgY",
  "key34": "4b68ryEKLpXkNdkKncEM2D94sYjBM5E1xHaAHd8DQWeVr6U3S4nMs7TUwU9WVJ5FqMoiUCdBJgTTX28pGL3fJLyA",
  "key35": "yAqXp4rWWFMcghVf4mZg7Vrt4AdR1U7XPvqQJQyqSybaqQuiQFkfyzAPjcbckysmnXahA2KCRuSkzcYD9yoLVyM",
  "key36": "bFRABCYSW77fPpFvaLB3pHthTNQEsPYVduDjARn33g1mUxsZPE9eNQRwbDp4qi8Sata78BFVCN9RettsR93V1y2",
  "key37": "5Tu8sSsUEB2XhXDdJEKrZ4xB7RjbNfQkpdA7cCgKzpP2xn2u1DtHbiL3ndUzjV7TAu4UsYbFwnE9E2yjmbXYVLtf",
  "key38": "3BYt41g5vw2zghcJTeKCMjTnCPe8gi7YjwZYhF1ZGQNwG3ggafSByRa3xDQT138gVE8SmQWGJaReqRnjtxWPuw9b",
  "key39": "3aPJtb6LLvvL6Eo8nMTKdzezbPfkG1F3YhrP2o2XBVAZPcaqQqc9V2MTJvEuH8VTnwXMwdAEMojXtTu86xYid2Jp",
  "key40": "BSCrT6Qfn8iLNutZpFi2LAJxs8uiraQeBByXCU1nAySovocG8x8DSieRe9H66iULT9XxbVUW5KwhmJAJFYjynNm",
  "key41": "DdVCX9dezX8XSRdtkk5JYvoqxFRr75nNvjTXnMrHMPXLk7LKio6eNYeFAZBsJ7rMtohnnCMpyWy4SCJ2kUo6m9k",
  "key42": "eQ6zsrSziVcP7NrGWkSxDUUPbh22HmPFQW1spnnhFSGkd55En68yvQ97CDMkPMLKjuZ9Jf2bKnfdfGqZbQBUQvs",
  "key43": "5rJzkBZqv4VX4yeeTdJ47Ta1JbLf1f8u4vHnJCn38h78eR5nzTUZmUQvZdZY73Spnz2MviTaKrpeRT1bNgsp5zZ4"
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
