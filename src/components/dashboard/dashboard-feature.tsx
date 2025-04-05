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
    "48j8N323bWufS6F5mYyj3ZBVbTSMLdyqKyoVHd9h1dpPHxFmVnQthM4LAKAoXtfGB5H9aanNxNdksA3nXsgJnJVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RNqV3R8yALJm9n6H6jUcNZfMTFiuENnNLFDhszmAwL5dyb26WbcBnGksmaMPCmAipwynSZDehCFcmbmtfKbpFYo",
  "key1": "3pQWrZjvYQzGisdSVw9iFuGeftnZH7VgU4Sa2v7xvuHNj9QuLVSK9m9EXDJFDzTxUupzKQhDn7EmaTbjXdJm6iNE",
  "key2": "5rmJNE7ppjz4T6ANXGrWFFmAG846CN8jhpZJ21wMAxgTTsiBS8LLgDRVxsz9X9iKf6P2Keen2aLWVseUyQxgwV89",
  "key3": "3LBdSMmw1jm2eYsDgBNdDfZtBrBMpWsGtGd8EBQMMWqpzLeXUyU6G6F3qwPepsqjeD8khUYSK47pm6H6mWEFxrW2",
  "key4": "2gRoN85Tt9i2nd3FwxHPkpDfWXwpjnEtvBJbUTseuERKuRPrmjNZxVvabwdhrQunkLnpmU58x2z5jt97Fe9E9jpT",
  "key5": "52NnDphisbH5oxp4Gd1QhhBmMPT3MQzdJgkcGs9NvaRmnAXmb9Nosur5dVfFHjDzg1a2BEPyCz6BwvfKbZngnosr",
  "key6": "3q1W9ug7xkZXuJVSnKJb3GaiHwzRqvB8KqAKtwbk4Q6yF4iceqQAg4rDx6z9DevnzriMrDc36Ad6eYkQ7pLcRMtY",
  "key7": "8X6HAoMe8yu3fDA17nNJPWBzBakEPjD6A3Cs5HGRPhmRMPC4KB2coDdKEMP6tJby1BUWkkgpwypK4VtiBh2b9bb",
  "key8": "T5rgB7A784fPhgR7VZoCL72rm83Q6VasUx7fDCszmfZH9th7ELmmXM1dpBEfQ6nH2ygi3f7Us7pMhyRbjrUN85P",
  "key9": "35yPjmuFwBA9ovQboqvcLtWESzo3PLXULVgP3XKZZbbE6J5G1G3rNVGLtw85brbB3bf19ToH6QxDyXkD35vbqKTF",
  "key10": "58tixqp4z8uXbkRXTiK3qtEbgR42y3aLxzxM4mSFC9wYHfeMHxZ8smGm1UftsDR2eLaif8qyn4h2Pt2hvgMgq4uK",
  "key11": "4v53C2hpKTk7w3UB5U2NGYjCQNPugrWHkW8kBy8qjEYpx2nKQeD6gyGJ9F69NLHLMdkbykj59ZqHyeyCLq698Kig",
  "key12": "5x7Ldz2bKgcVSZ4vxinFkkFNmPEJPShw8o8LTsRd8r33n2sMzs72icKW7DUEy6aQmYmxUCjiGrAfkiMcXh7nL4sv",
  "key13": "2Tbrqo6khb4dY9mmXxC2VZSsEq1FDnTpEZFiNV9fyjKhCe8vQ8638iE77bS15QpEYz39yjbbMjecnQK9wRto7Wsa",
  "key14": "5q2pkr1UPNJ4oVoBfNbxCYgn61xpDKQiJkG89KkiqebiPYvRigqKdQSNudm9E6Cm1BSyuc2GDH3fqLHSWUSSLEVt",
  "key15": "2JXRJX3oCbgZKbynTbHgrST1Vu2uHTTaqGJxGF6SwRULwiGpW1TcHZoNXAzzuGkK6iQG1tCTH2jAmh6jkKo2fBJ",
  "key16": "3qCMBV2MEabGaTY3hnT9AwiPAiX9e1JJJnTEysSo2z5iemxT39ZL23xBS8C1w5fbf1Y4d6ShxEvtVTKpcZjyAwTf",
  "key17": "2Q2UmrZcB1i3m4dmTL8ihw1nF9oN5qXZjstp9UZy1KsPSMMUzbT3i9VCg9NZdw3uEHPXjN3wPg7rHSnCjvT2rP6v",
  "key18": "4JZM1sf9KjWEEwixJSGgukLDq9RJ3rZBk3WJyndeL1LKqLi4mz3UeG5T7ew36PrUuBuzKMdUMjZgRxdJBBpqAxCg",
  "key19": "39C5J4mkHFfhhWYxmmB8DtCH4rVWuznpnbXkZK8igWeg7ncoPT6b4TjTtVWPfvpvgM5kYG2ebf5GacFcmvVDrr7Q",
  "key20": "3pfXdkEyDMC6p5VemtwkjXP5D8ZXW3pEebJMmeTA6g2QBe9Y5GcbWsxSqK8GkyJHTpBWcwLVvc1VDuA5a9DH4wzr",
  "key21": "3Xt6i2tSdrNvzEuwrNVAzWzkp3gpodz8WzstAAqkF1zFg6aHQmsfypoumdDnH7fLRDSkgbHHPgtTUySEgNzDRvFk",
  "key22": "5e51aMqytUoDa8w47fbsRy9xyCyXXvnRZwf7gZHhYaVZ5RvHg9GaYitPCkrfL4VuzUDCa5L17gwNQzsCgLnkCh7x",
  "key23": "5hUkSsgwMJs7aE5cFbf1gkUW1nandrZsWQfdXnxSkQHi3iEkibTu4G8Dap3k1Gn7EVEonpA1mSEp2BawPb8V5dVk",
  "key24": "4aEhRKK3MrLUqG4TnnhDN4bhJxGtS9VDugV1VzBdkLRe2YTeK92pe1tAu5tV1K5qa5JQd5UGUZZRt67Q2vKQwyAt",
  "key25": "5gnxSwD5oAy432aPZVvgzH3U9tcXMcFZ9cFvr6ip4BcT4UHCPcrmoqX2V4iAgA6QEUTicENePKqMXks9p7FKKMv2",
  "key26": "3wHhHs8ZYXMcUu4mMM8QWARq5SNUEkKg7srng3cs6wGZ453e8fcZwtGoxRG8yvkb6Ce6pHqEtfHwRz8RMXsSr67U",
  "key27": "45UH2dVRVPBwMoqAPxX52Lp1nwrZvKYUFrMguC99VhNYtHChTEaokJjFVXFCNeMBMa4JFkkYwx4cV9RaiwcBkvhf",
  "key28": "HPtREnVqj2XKHwuQ2XqCZpzHRrR6QF8RtobjhFGC7yY7TrHXrGmN752gXEX3s4nVW99tMrUaJz14Z8yzc9mkXAg"
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
