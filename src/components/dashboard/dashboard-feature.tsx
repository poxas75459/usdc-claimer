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
    "243cUJXSxgz2L76arYaoqT1A29ChY5TH9WWMFjgqEnXb6WLsi5vEH4E6ySKfvXmUMgJ2koA4efbtuoYuo4mGJ3XH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TtZdga5kZNn8DooUfpU8aC8eb1qgBv2FB21i4uK7kpeW8TsyCCyXjCjAaJGK3gq28Nefu416YyFG8kcHsHVHcxK",
  "key1": "21x5iyPBan6JcwfyxFCYxn717avnCTWWWF1j3Te5iTn3aKY9FGDMWFrNUThpK5G6j9xDihhbLjnN1t8taCiAwzk5",
  "key2": "GNJuYRwCvx9Yv5PtPW1Yfsm735gPsov1vtWAz9F5sXp3ScxpuWaqiHh891CuNg8VoPydhV2LmiCPDQa8EZDBH3x",
  "key3": "4RaAn2G54eXTsxjW17toSoQnSroRepn9kAFMZqfWxHKH3JPKhray2VHQMRsAskRuS8yH1X3taNWc2HSgUv8iNExo",
  "key4": "3aDt8B7cG8kbDnN9kCmUzerPnxQSfnuUXoCmhvqhcdHPi6VJZwjqHMNHhMMXsgDjtTTkRJ5Zu3zw3Z667kQSKDiK",
  "key5": "xbmooyeKLZs3395keMyTZ2mGDJXq7Ra726frrxY9Yx5YBwuhJLvXoc7nBM9oTG6tWbyS5pYwnKisDyTa5RqVLES",
  "key6": "5ne2fs8zLKfXPLFbK3Z9RNFi9zWLA4j8vX14Yz1zmn3JKPxfhfG6uyGRVxadd4CGWnXQ8ECXKBqP6ooxzUnugLu6",
  "key7": "5SNVTytE1zutt463QKTmGrkqBNxvs6o1Xu7ccq4YDEuwHKe5rHFhECH2oxcjpKi7RHmqGo3hYtWJiecXFmQkRzTf",
  "key8": "3uRMoZp1nTrshhH7YfwHcWy6mqA8vk6eM11tvieF313GGSZ3JF6kqUpVTgGhTmJSHbxdRucKtjzfocrsa9ZQui3f",
  "key9": "4ALwKknspFmvcCs9kyhV4UYRZeQWpnNaV8V6fJDsfHsoWJ6Lfk6GMwLynKQsWBJmEBy7G1XTTubJv9pj44qbUNZU",
  "key10": "65mLev4r5ek3qQQgPrkjuxkXQwwmqRk4pgBovMoL9Q6EhJY7RFpFgUGn6rSjzG8bbtiXEvZCBhpEkoFd6HKoQAez",
  "key11": "4qPcGu6KE7pkBwrGPr2Sru6HpEgtZME29n4LRjcg1WRLhYiPCXePnXkqjBKNmrY4VxD5rvKn8GTucVWnTK6iQ11e",
  "key12": "3EqDkNRJuwcxRta3q1wqq9FwrE655LmWqcfcf1YfPwZgwmF1Ut2VuzDCr2dC2vBtNNxxBXybEnEtkAExy12PqyUr",
  "key13": "bN99s6YZwj1vu4qw4haifg79SEnf4wuxo6xMnf8AAnjWJdPBsST6HrnYSPJRADRhj42D9bNGnxbAhPaWT52WycU",
  "key14": "2E6kLBPs7B92ypCPautZgWqarn8he4NxfrUy4oK7iKfH4btAzZAb76Afq9W9uooPj97YDjtQXX1L74Vqc8RbLQxQ",
  "key15": "5q2Fxd7RceEE8yNo6Ud8G2Twy6RLfh2zZWRuoJTCXccWPfhfZY5aZbgrHE41qyXnfAYGjJp4LVWzwoqWoiaHAhDB",
  "key16": "3c1eAqc5Vx1kYTuprs8sXg56Y8tGSWjuAE32MtGdqbhbLTowGvF4NQzLcar2ij2f8sRAQAhzpm9XSXJX6bCrArrY",
  "key17": "mD6Zzppkks8zCEU7CXc9iQ1S585d8TCHDhpaqLuH5VCpUrc8qjxAU3B9hTcRnrcxwfnTAQbNJdygyeC7uSVjkZ8",
  "key18": "t2CGgzHNTS92CzwF6gxbRAgvqWPdPBSYFCLkT7J1tZiN8n6uShrr5RgnpQUKJaToSVJ2JMqKn7aoi9QY4TB1rZ7",
  "key19": "m7d7rQ4BXyvJnSjcWP7qghkidHaG4dW4VwHyn1ejRanrq6enSZLrf5c9FugF2jaLBQDD5JarcQyHqAKZb2Q1J8F",
  "key20": "3FKRgh3EFdVZVJt1vcYD5zW7NfRgce9MLYbTzygxEGndnWNg8y3d4Pc7Y3LtrfHs1sBrLWLWj2rS3bbQQHNKyJN3",
  "key21": "hZ8Y2hxVhnStZq6RhVmkeTgadM7e8wNGD3Y7aHgDY7b3NLXfXTSdnMcY8YnQBSzTeCuYsEEfrmxpvCs2KqT3s4u",
  "key22": "53SBiU1LG84prkKoDfz6e5qQBQVHwzU1427Sk7P6Vk4fs4jgeN4cjsPRWRTnXUbmJ1nRUDKVDMawk95uVfpTYXUZ",
  "key23": "4U7RDw92rfpTbDkdJFtKhmS7fpPpFGSUmcMBUWgTg7zRoEVubn2reMG7MD6rp8x7BjyeUdetDdYHF22LeguZKh9Z",
  "key24": "XMs22u1juqNQQdmNPJW7y4kCe5KBhNjdkRTt7PVNjym7ip6kkrggsCkGWDX7H4FSeXmTzRpBfpRhfnnHoAy7tak",
  "key25": "29euYQgiybtXYcxpKhoQjpfM4fVGn7rjgAp7iDuyREx8HPJpXYJ7MsQnmecFjvbjYXurubnTPhLu7N1GBCfs8kSc",
  "key26": "H2BV4bgxQGicdQNeqLT4kbj6pnqGLgF6hmGino2H69UB71sKQBRLp8p4RQx3JLPACJSwK8K6PyVgwdD9deFiLEz",
  "key27": "2wGMaVyKNucf9iFFQrG76dG5LrgXKJ2mPqiZDoFjMxEm3QHrxrcvH4NKNSRw9zc4AZr5nmkuZuShb2jbJjmdoza9",
  "key28": "29Cuy9Mp2ryRRKjew4NRgUs94nPWWxxt7nZ7cC6epyiXu85d3FTA2SHUBNVfGtGe3DojXrNJd9pNKrX6ccewNmUU",
  "key29": "224SC9Ym7RZAh9HNstw8BWqaAJU7qYBVoUZxeeDDLGZBsLUyz58LgrYiinfiVj66pTNYP65iG8EAYDdYU7fgqY32",
  "key30": "2wttBn1rH19ZDJpVL7n4kCcvUwiyDFsqRjW9DZs7u4v8KgNqSzf82WztzfXvfrVxTFCajjTVx6B91VrfRykZ7pHp",
  "key31": "SHysbsepFDvQwfwG2UAtuws1HFoesTKg1WpLZ29DD1kyeQ39KNwz8Q2YHo9Xk6272h1FAbeajmx2bJVJcHgxzVb",
  "key32": "5Z4jCtR2ovkzFZrJEtQ16UwPn1hECJF1UmzJikYmtTdrLnCuSjCjedjgWeS6Ubwm33SkWxk5sbEVRCpyV5JFXQHn",
  "key33": "4xTR8R59Nin1mwef6cytHnRuSH9jb7EUsTCYV33enxYumqowCFUsHfko1UdHMMBjGpLMNwUsYgqHMfFDoi23Vvug",
  "key34": "4i8mo2RaqQ8Gv83JBqTFiVhpbaKFTvT2gXfAAxNZGrzVz3zhiL919AksqyYEVsXroTuhjMa8xF1bcmTi6s9WqS26",
  "key35": "2wPqnQAD3Yzq6qU2tfbCwdoUcbZUXQ8pR6CqoXeGZd82BJrC3HWJzVbhenkZ13hDkxgaayAduc4YKSquwSfy917F",
  "key36": "1EHSEbKWHAAxFUbdYqFnQ4AzWQUMHCc7KbaYdSsjAihcQW1PkVj2L7Q6LNj9hRBqfYMLjtGmPQy8Uhp6RH3GQGm",
  "key37": "2CAr6Y7N3fDEnpBPcY4aTpBxBmFDHmJphZoUY2PZ4YkmNPLLZD4F4W5NteNewgwi4h7BadWwFAQHQQzatqTmhqhs",
  "key38": "4TZVDsHmpBAf9xsLRcH9ZT3RP31pZneuVeTtV1eFg9svp9dPYCZQZtvdcjYjzTbRk6H987zaZesk7LrwiLakVmHt",
  "key39": "2VftqC91iw6aUEBSF31igWJRTUskqDgDubxqqcQgqZtj4EEX8Q1RbKUNayD3FJL6RGnanHMBtLhxfRTbkQg41yjn"
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
