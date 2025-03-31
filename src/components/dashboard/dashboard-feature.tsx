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
    "2dgwXcVC74CbArSZMnwYAAewV8MB9BjRHyjznG6Gz84d3WewKnVstmpWPiEyLgEThXN9ZXzK9DzS6SfWttwApeDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SK6iTTBksHs3cVA7NER53Wc3oHY2TC6oLzxJsCfK4GAo7BocfQ6dTmJYooxs8JA6X1dYxooG7UEZodAkcwb8K2A",
  "key1": "2DDNDRtXR7CHKvPFjsfNAbxtaboHnLbehQt1RDHrrA7Y96m4RN2pCCCUtA8dFe9YPxGteFtW9sWPwJAmr6YMkLtf",
  "key2": "2VdzsgJFqBR3pGyk2aHUzT9E6kipsmMjeaXfriXgiw1JBZACfofK5GT6bHSdfH7NvVZGPzX7oikQx8SrxBCgsw2u",
  "key3": "2xGXKTtTjbZwztJ1DREbHhqxs2YBVaRpwDBKjoWC3ArNzf6JRPQyyFHtHqasSzwobgqtL7eS34ktHYUoYmXk7KrB",
  "key4": "5PWLyYF8TQv1FS2zfWZqwb8zUE8npYf1PKPgVizBp7MfATgLUfeTsReX3ASfoSUxgfGZ4W92cP8A8nVdDug8J5JX",
  "key5": "unVyN16hzcxs38SViydXLSrcTSJFJxnS9YU6ZUub4LzusP16mrwvBWzzbaKo5eynFnU1AdzT1RtufH4XW6QnbZN",
  "key6": "2VMz1UvNtFMkwDQa8j8m9xLZuiWjBGeo8jdE2nhxyUo6NdMANHiu4cZVGD8Ud1UhX5RusjkPAJhGwrBxESxWW5Hf",
  "key7": "f3jewrpGKEQqaNg98hKKUxvyWB5ZsWF9nYXpoVHGHJUeFdiq44phRyGm8uvENMcfP6ecjrxkrwwt6j13uW3B7zU",
  "key8": "4cyJR2DgkpZsVBjtXykqXtwgFtYfQHHBmbvkx1i4GwAdAsssDpDSDXDqvG2RxQVemKWh5qLxyxQpRA43F3crJ4Ry",
  "key9": "3kA6np8PXBadgUupZaHUGDFYVc5s6QqCkPgfHHG5n7kMB6UwiDbLeYRL3LEZpU98UKH4NwDFeUabCog7QtG59EvN",
  "key10": "4t8Cp9dMDocRJ9ptESCqMvERFiHNRQeDn3P64sa11BBFh75xssYVaqc4wcw9QyS1wunCapbd69AVB7ox8m9YTrEY",
  "key11": "pPf158pv9FB23CfMvj8B5sMa4u29b629iKFeNWKeHUHQ5t62sgdCahME6NFTGEtVahH4XYUcpYg5qbvWnStE44m",
  "key12": "57NprsdJZXJFBEvF6YecCg1kp2a9YaJ9KF7fagACLcCEWqLjBVsTzFG9VruBp2NuDnPSgY1XyKLYiTLc9T7n6QVa",
  "key13": "9E7JUGgouAjF6TQVj4cWoP6wyg5yMZZkhRYqkAx1n9artojH9naM9KDPveKMic9JCjCweEwFBNiggBoLDJ6ANFa",
  "key14": "2R59kCat64oh47L7hK1o4dmdB32SzyJLtnq3Wdui4uAuYRsV3MWvwKyqZ1aWC4je8kGJBUgEPigU3fCKXaaUJsf1",
  "key15": "3BP3dRZBzNE59a8fvUVLKfV5tnZhc6pC5EXzkH1SpvR9yBhEJYxzEDgYQDSYWVhQ1xcbJqYj7MqociVBqCRo5yQ",
  "key16": "3hQpNBWNz6Qw5xjnMJGFMLbJtCJmKQpfsoaT3r83ERR7nJGk5vRkzo6TEvFu7a78WDbirib2uUaLjyUsVj7UMz8L",
  "key17": "23AiG8fvs14H5R13Tgg7oBM87xZZSYRZJtxk7AC53dyU1NtxnhJVmi6A9aZ1QK2C7GbvjJspmNqFVF8tF9fUBzCj",
  "key18": "2KLBiimLfE9eeqat7Pr9SbSRmwCFN2MJCYBtPKJs58mrbwfckBViTKHeRf5e9XxFTtG3UMZqrPjrpXjpCdW6UTxY",
  "key19": "4fct9LfXuLjhgPi6DEeezgB4FwNdRvJHvpxmp7GbzG9gNZbxyasK31GyTA48ozT2bwaP25yPFSPekihiuxcGTbr1",
  "key20": "4gRUtyVXRsFCZkb7vzPsjVTCSNZ5b61x99mD2K33Xh51iW9XMuhe1EHVxb4kHWtmw9Mw9L2bXwcYPG22LuXmBQyK",
  "key21": "2wVZvrTmckpJwuuXQDB6niC5XjAGyy91o9W35275KLD9KS1SQXN3NxdBvPtGnx5asPCyUtWBGj76VY2BxAmdFuda",
  "key22": "2T1nhnS52ELZyFNfL1NvkMJDQLwgYUvPoqzkzC1nQFuDNvtivNoYQDPGSs5dugbznAAhrrnGKDfG6LoeUR7rPXBX",
  "key23": "3d2Dm7c2uf2BVfscmbhQq3WVwi85bMQsQ6emNWxz6fEvSoqduqZsdD2tevcT6nkhJtrDk5RYoMaVvyMjb1tAEU3b",
  "key24": "4qiyqAfC9d9P4zrQnbTEHNXxxVaL6gB6xS1xBtxvM5aArQtZsbsk3Q4soymNK7Qa3TvdRfxik52PFgE8Wq2sdXjv",
  "key25": "2kJnfsSbpEDxa4T85YPZ9UgZ75C3FyMQ4CaPzRZiKDUoy6rHWK3BSjkrrm1mBmz8zWVoKCP1hYUZmHMMD5n4uAKU",
  "key26": "62C6z9Lhv4ke9YHMWFuNrf52Hq5gifDJ5MJxsRP7m5Jay6QaG9iHFEvPUshGSaaTuYPehqCA7Q1GwM54UQfL7cfp",
  "key27": "2YmYnyD8jfCNeKH9aQLJSkLq3y7jeyJ6MLfPnRk9FhAGnixPkhfYJLzR8ibMPBRbquDjPRZpjP9EYoQqpNJoVLxV",
  "key28": "583NJXfrTCjqUopRdF32AzN2x63VUQVBxqzn9L3irUgySKj3bDMU5rQAaDs4eUQAWYdJfsBK52qUES4YPSDgSHqA",
  "key29": "22LZa8fxHPZ6h91EFmdgTxPjhRZaoiEu2vaXm7LVpqfkgU8mN39dZihsQcxtGf94JobfGsWLVnrc6SQjvPrdBqH2",
  "key30": "5jSiVaZXHXqUw5nMTJvB7JiEuFWNYb5L3gwSVujRH6DFqD7L3PaYhERZuXteQ8ihVQ4khQynHeJ7NW7kwBgDRjd6",
  "key31": "3X1viSZpEiuVD7w6ojqiaqdTgn9KMQ6PSEcjwUqSJj4nN3Z1AN9EUUurTYAFSWwfburWxBCkYF1Xbrza6bn66Rz5",
  "key32": "3i18aVvG7M7TCAU7jgsRBZMdReaqkhD7DAfac9NQUvj5BjjvGvua8kZS6mEKkMBqNL3Bj17dWLE5saVNKeLnMrb3",
  "key33": "36FgKLgDyWSwHLQ44udQRNgoiwKsgKBPCu72VERwKLMAmQL85aLuXN8SvV9czmsJCgQY7zKcXYDXodYzFXoYppN3",
  "key34": "4mvxYEa21US87EXFhvYNdypzkikdQeEPyyYDTCxk9sowQ9RBih6L2WS3736TFXvek4Gk6cEQcHXMw1VshJsruwmt",
  "key35": "4HcP8B82cUqGpqqAb8NWD2R51f88auxoCnxkzgdVMqw9jGpaDd4xJvg4QsKs1pKtvYgDc3mQoPJPrzxcpRK4wSGS",
  "key36": "LJhxcWdfwHBgBL8PwopjiAog7cpH3RmYSLDwjHuVLDaXHGqndxRTZxWFhyG1DXEC7bwhMdZnQHoD9p1UHJMZAMb",
  "key37": "56KfUyXyEF445UtZMh2UVzQHGLezQptrvL9SbfUuP8N4xmaVLJzvyfQ4B3sp44oV6f1LEsJMwCvbyeHxWXK7facb",
  "key38": "1ZqyMU6N1xeGZx7g8NujXTezcvmE6PcqLG33N3CVriDd3SoVKRwdfk5ejMzJTjbo7uRPX1wwEuE7yNahrTdPbEo",
  "key39": "kczRsv1cMAgwBKgngTSp5A2QFxrMDidXKFza8ctCncfVRnPFqjJqxUGHDhZmSf7R2mrTgNUBKSVm7tqbmzZE3GQ",
  "key40": "5VVMYTnyUncNiD2UkgKWzvBZEXqSQeZYfd72owuE6KbinmoK2WMwAqgpAA7XwAEDEyv9MsgRrkq8YcQdevfaQr4o",
  "key41": "2RSrcB18CBXF4tQVpbXzRbWbwCKPvsoGcfPXjJN1pXJ3KMHx8S9uRBzxjkfQEGLrPv75HNYVGPjCN1gz7R5SWJCg",
  "key42": "3txS4LxgNWR3enfVfrhKXoYkwRrdPfjf98LQYGA4A1JuYMXbWAdjJJp8EmYQxdh9w3isxaawDnjXMFVT1kASZEMd",
  "key43": "5siwMaDXrnDjgUZgcpmvfSnbJ8ZRZxbKMSfFxR2Z7Z29sFdvCsa4sVUPvsF9y3n3C3tD25QZq76TyB5ZNbyK8xzp",
  "key44": "pZPGJAtLJ8X8u6k5U41CrhSud1u5aorMqrC3VzszUMwU8ty4D1vE1iC2ABobf7cFDhMYnV8FfzTVtpDhaHgxoWH",
  "key45": "4rrh19QDkaJw1LvdnGdULp3eXFpo8kDtjguEvPSaFtsNvqKqnXLSphtsd3BSeA218mojQ37f6VKWerxoK3tbVVxB"
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
