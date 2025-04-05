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
    "65wtBe63TL4arPEMxCE51scw5YhV8ncpTtRRN7jL7FQ9A6VvE6GeEqz5hrAVZYuq3k7VQ99GMjexNANki28Ai6wg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MTxfc17QksYx8B91RW1nZJrnYH3tuqLoZbyxdBi8MeTAUD6Usv2pUL8w9VAriv2R2Ap8K1y3KE4JNprQY6HbkSn",
  "key1": "4EqABSNxddErQHoVkSpEcoLTXzPS3XDAiZw3wVL8uMDBLj2GXKVjRN8NRGptyjKt9pu8efnm4N5i5nyzCByBxMNB",
  "key2": "2Y2dmc6zYsHmoEjzy46LAzKk18nChEL6gkYkrHa9kL9fhMiBoLy3PnpSCyQoFCRXGtcP8SCop9aUzuBbqQ8bJHwc",
  "key3": "45C2jEJEYJtC3nHhYtHxWFzbBPpP7DwQnHpvBaqcYgnAAb5LNLBYT1NqsUkkU8HjJnN2G3LAHS3JbgnyHhiNFoDE",
  "key4": "3t5H3CN5AZutvZcEu7mehA6p8QWLHDWT3FnUAWYmLXz46cdu8dRFLknsJRpmB1jdY8MfSTsF84qzhUKLx78ChRdq",
  "key5": "3MUGoZ47bjKVdnGWySDPpaErWbXgX2wCttBFLLRYNUYa77f4ruLUL5csnus3eDAYQRPZwekbnseQ7RY6kJMZYm2P",
  "key6": "4tN3mNoP8Yugof6byXsX24vbkThUwPzLGwnBTukFyD5wbAVyd6XxeSBkSR9vjLRuQ2Ac1SYcHTGopEN2Rf84navu",
  "key7": "4BWbe1TqUvFAk8eT9WrwJThzkXpB5G6hmSnNCxW29QGpzVRiAsJq1w682w95GwEaVvQDHXLr8juEWX8HSvBxbAZ4",
  "key8": "2fEZHwCF5sKKroeZr7sUZrZCoxJ8xziSgf1UZ9D4iLx5ojzWpryVFDJpumASymGVEohGAw8gnCfMcC3kCLAAKevx",
  "key9": "4BGvV6FAnCN21z8EewGYn7hyN7KJ7AHdu67XXZYEwMHXxK9BdVaVqDKaA4W7rhDdcWcfsSGSELB5p4ydS2zpr8pG",
  "key10": "5rBigPS1vpEVYxfNB198D2BtqJ8i9y24WgkAToKL9qctqMR8nbi8WQUpDAi1Tw5G4zfcA5qbSfVnaFRWKJZR6AvH",
  "key11": "4Zk9YGfBGPX847JRDfMP32qRLqYQ9rYzYYWVyXAFQPhXWEeUnKt2KeWmhxgajECxnq5v5txasmF5t1qE6MjtZG3R",
  "key12": "2wdZVWhpPKoHmFMZKKBrtwu3Nme2j5JwFYw8DuviQ25MyshvEpyFnWToeLQyUek5HDUesMBrkYdUhmM5guamCrGy",
  "key13": "4jLV8THqp8U9oAcHMvkPgDErFGsKUvgBVboqGYisS4ATYHSUvR6tVYEKLe6yH4pGuVmseQ5nBrdqfjAmhkFVk2D4",
  "key14": "5kEzSN2oKKPAa7tVfVXiL7W58B8tW5AQgUuxEYVzNv7z117tgAdZsV5119tCtZWNCN5ozm9Gn1EZu3xbv821cjjY",
  "key15": "2w3TrkobjoczyyhjsbXBtMMGAnnBUiH2Ek93bQVLfixN7Dy13M7164aoMw2kBWwKYAgaUEnJGegJ2g76rXwD1Hg2",
  "key16": "qYL1qaSoXvrjV69LxGG6kWWEzp1vz7CVBFoX9d2SMZqySyZhZjXhLhCdfmMgR5ybg4QguYQYFF3tmnsEG9s2MSw",
  "key17": "2qfmrMU2kNU89iJPT5UgjyXvSJ8m1FxUc4hTJdxx8xHSBMnxRhzYceeD6mnLCnQDHH9FmMcjpewzwZUsAFFa4wTF",
  "key18": "3RnC91GNx8L7T6wY1b2AxYZkjg11o9hnUaA6Axi5ofn5uLvZQNjUfLnd1CXk9qWXqfBN8EFDEHY9ti6B7GLzQXVZ",
  "key19": "65C3XQGGb4E6iUvpBU1MrSVnWfUdd2Jxg2UyU27RhWXZrtHFPDR5bFxWwj68EuTPMZLRrrqmZRPsBkvCeiEButuM",
  "key20": "4KdNuj5DnxSZHogaas96CKwtirJQMjsiytJCmhijWxoNfgijwndU3gFnNqZoMPpi8Lc7WdaR5HgaeNeFnxDsz7SX",
  "key21": "2cuwvHtntuiQsZ1bNjzkQqkaxfT5cMiPqsMTgoKqMwBwzwow4FQWfB8dZQEcWpaEU2fX3BVnK6LRmvxwsm5yzUh4",
  "key22": "3BHQSDyPF4BNFWHAZju7w9y2eK6U3T7KeZpNdbDB9qkKpNXWojVpdCxtWXBV5mrFziYwftVrvUxWKeMUeXyoyD5g",
  "key23": "5JvMqrSefbnbPVYu3q2PPkFNcsUesAHKDnpmvHAzY66bRgE9WUn5JgkVzo8BXQpsc3ZZpMX6YAZCTHNHY7XGHrcB",
  "key24": "4S9jGWhpoSD96kA9YUZAQuHLkM9zZ3mv5n8uWyrw8Dz5s4e6M4AVjZ6bjLMeeJR8qWbeG9qJizGth87Sqsh4B1Xc",
  "key25": "4f9k3uHKsZrNcGJVtHyodF91EEYKtAeSxtyhrLx1s9vU45WBQUZKgKjPZ1DdXUyoKGnVVtKhbYeCmy4E8c9b8NUG",
  "key26": "zaqBUtPKEGAmBoTnqeGo6JWCGbDsjE1R8KSfBW6GFHWJLceJmZyKhTP6mdSWReJ7AsFihLZDTsZw4ubAf9w8jDz",
  "key27": "2NzBHgF5bJnMcGyU7Xrj6bd8gFGRFGiEjZKn73PDQr8GPKuBx8VyaFLAWC4F7836jgsuTzRCyn7MMB1Uh2RRD7p2",
  "key28": "29N9y8EqaCRrwD2CKW6nUScMxTjV5gKakYoVtiWmvqF6Mvg9o6qqX478B4PLNJqhmnMTz43ZawEq9SUj81xnNRkr",
  "key29": "2KE5DBUwDdSA3r5zjoY3DJqP1PKJmfbTjp8FPFJYB2oKLbQHwJRmQgJer7SmmBvzvNShSbm6oxCgS1aVc4SwdnPZ",
  "key30": "43u7FtLuxhtveozSrEEgd7fcgZu6ZCXHUH3M2xgMWqa37vb25p4MKWpm6TjkooY96z8BAjdCEzCX31fDc7byMH1j",
  "key31": "3XryMZcGnvB16sdKjdASSGKVntHcwkNzXzVj73agbPWZN57a1syB9HEsoMpbErWD6gAHkqGQHqVeDotXmr5vR45d",
  "key32": "5bFh924qEgMtdXAo1dHFdCQC79QrGAFWKems8GLYQSy2H18bcxSKRf9uo4n8evpe5hyVmBKHmabnHPsFYbXSwtaW",
  "key33": "4yjudaQk98ZisbBh4epy8wggEbkEf6Nh79PBpo2isEb8sb7wBCVGZH7rNvCHh7Rfa7cCVAtW4Jks7RX2tKYjHWoJ",
  "key34": "3FaBwHk2fDAwDtc3yhamjgHN76BKd4JzHSJPzMQW92CWVSXkDpPHbjUSUEsxQeQ12HSdPrJoM2DtUUpeAHGqqsGq",
  "key35": "4XshZMTq9cfpRGTV7b4NjuDbVZS53iUkSz3KSZNxrs3tAVxCLcpnVJvgAPognmzAozV3c1QS4niVTcarSkYLVLMo",
  "key36": "2X56ZgR9kWiD8GbD9UqBneFNpKnKREMpX7DeXvc6LrKrGmkuGWQhR8m2kAAKNPsd8YYx2A7Pe5UwfVUcj15kE7pJ",
  "key37": "3JqCk9Tezf3jgbHKTVWGD9Kt8ehqh5YxmwDLH6zMEDv1Zk3o2aMPMyeLPgxHWR8XPhrePyYtMnD5CjNCf9tDa5RK",
  "key38": "3p7EZLxB2tpkRdE7WFWyscNHC8mwTVM8EM7XNB57CHHmCiELwqbEqJH8vwjcC6CADv1YfDvAwiFKVZCqVSzADMka",
  "key39": "5S857pETRisgVSMZsz6wbrzGjPR8fR5HfwVcnmtJzghZDvKdbYso7bqyQigfqN5Trw4wkHPzyQSoJn4tSFhDgLrA",
  "key40": "5gVPATcZxUbf6A434sPA9fe2Wbe4X8rPTd1PWiMRQ6wgWpELyRrRBUXzPQppFdFFBGKpGeEdf15jEiVkuQgvRg9h",
  "key41": "3jerPVCe6mnehG3VLnKBSmNFd1dXJnw35DbfZSEvAN768zdSzpoVvutijeoNYHnQum1qJTjDWa91QZv9hS7L24hi",
  "key42": "22DEKELgKGdAk16uv5m4mU27GSGLGTBiTdEKUBaUuqhjtgcG5Z69EWGPchdRrjA5oRv52j3pvXsuUc1oXi9rLPCZ",
  "key43": "5naVSu9UE8JQnsvCNSJrH3qEvPF2ntf3b2oPTwiADswGUjMAVvidJoSubD2etRSsa9C34DrNtXcwMQ2T8vCenQ5d",
  "key44": "4RbfYp6WsHfW9E99A8cnociNjuyXETmcDcNSGnVV5xYucRTQ1QCRQpWSo4qRLnqJT9vFRJxnrArFbLAPZxsUamgs",
  "key45": "4AbQXTLgsWYSt7BwTZLBphnWSUZwxBWnkuB3AFyVdgYjtSJbiVY6LujewVNrquXBcMqmZWwrzNygRYhiwWDW4gRB",
  "key46": "4dHZe16Waux9hvLM6Gsfzj3UYEuKesX9bVaRdf4bNo9VLQK7vyu3CB2AaTswBRyL34RHaQaEd6EJKSVZej5qqFEn"
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
