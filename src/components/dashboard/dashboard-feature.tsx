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
    "3dMBhwkZBAXnDfpBUqY4mkKP7Fr8kaKiAiDsh8tDvebNieZv9DGs4qWjZS9xMvT5hdHgKcJdM1G1DJV6TgoaQgKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HJhuzCAbBRLyJm7GCKdciqGs6xqAQmVe7ZNApHGbjKCtqnV1zcJEztVcyc1q45foTPVrG1HWJZbvNGog7qH3JDC",
  "key1": "4C4LhjRPsZUJioskfhjiyY7ZAphDgtZGdF5GBYaAG8bfih7FZpo6nbRcMaWLH2SEUkr7XNLkp9no6jWAGsNKfhNn",
  "key2": "rysWk7zzqQzgMnj5X4UoHKrkenqiAm2F1CMyJzkPNMdtFxcgeARTnd8FWZ6gdwNJguqZo5UULANRZBwuV9UWhnh",
  "key3": "5pGHBLPzE14PxKaXtaG4oGv58WNajJYrP7dct3kVZWLSb5UErP7zBeRMTJQNL7fbBr9Sy6EUjDsr3Gf66QHDu8vD",
  "key4": "5u7t5gCukvEvhyEeNPkBegZsEABebSyPtsje21JwMm8xS5cYSBViUZJwzpTuuKrbu4uy46urfkB8sLJu7NzT7v7m",
  "key5": "32Jv12rCGZvF6qujBKsivqpnMEM5NCj8ynRZ7B7GXJZ8VkmnUbdHuVrCPXWZBNLqaXSJHori4Rs9ff9EdrKPdwYo",
  "key6": "3FvaNjY3gp6gZWW8uyK61mMN9z3Nw2QCQWAs4mTVbEMU2TcaKPMTq7z6RHQ2SHW2rZKTYUAEgaMBDNWkt1fJzT7",
  "key7": "LgUBLSmgcQGPHXziQiG9aHhUCuKtuwq5GEeiJKcSNMUC8qQsotiNgPT8KLB4jNi4RAHQd4uJtM3GEVTsyduccLX",
  "key8": "5napoZn44ZaFdCeaXvqwqgndqBuMWLaJ5Yg2iy2srGXigFueDSZYJCUaC4LbF7nuKQdsYi71MvwtGNzP2hqRxDog",
  "key9": "3SD94JYBWhYNrSedZgEpJDcix7Ko9mLSt1r5rLFdJsgr5zuTaH2g9szcMQDJgekfYwxxDCo3zYfLE2Xx9K7owVK2",
  "key10": "22wCmy4Po2Jmdjqe4kwTDNwqJKxkN9W4bd9LirqrBmU4mfNhzKZB3me6zJiCWvFtFqapG8GQm5nNtdwVGFkpZKac",
  "key11": "3FYjYHZX1sKSRnfcpFpHhrtejbvioyzFW9ZdwcoPeLAkv65WCbYiFfh4vbfjw4WHHjPMGt582ESecbyzsUFA9fR4",
  "key12": "47LLd6iApuVnz7z5xqFmxJUTJTUkYj5G4jpEpJdYAFEDSJWUiEXt5RogqzmWFnahVFU7yAwVXjcoyvxj8XDoDvke",
  "key13": "He22tXSrFpa2pEVruXVXiom996A6YLH7zfpTGdrdEh5HtHn1LkdxL5d7YkcG7PdjfV9SabQZfvhJpfLgyrQTh4Z",
  "key14": "WUXUkhVjE8meEPTMw6fDZYstFDUCXPFrQtu4uuVDp6P757bPHPnedBDXMxyMjRuwf9ZvMmnN8M9spcVsDBWD2Hg",
  "key15": "48DSs1YGJ9wjCWcJLZ2CDXC5BUVULa87KeyKMxpXzRNxhnYteojGFc6VutXSC31tjTHCx9VnnF62iE1ZfVV5z67H",
  "key16": "5uHwyC3XPSpYsnXKrWkdm3BWXSwVsYWuxeYE2x9XoMXQQd2hnxeGbuVn6S2ELT8LJG1fvuJ2vLWZqyZGzF123VqG",
  "key17": "57NsgwG1KHoSP8XASduvJFhcNf2Nbk44uDdzD9DL1VDwyxBBRLY4zWLQK4JB6kKcDkHbAJQx9Nd1HsAxsyCZr1ma",
  "key18": "39YwwEjtphqBBdDc94jWGXgzfRSBmEZkamS7RGy3KGPsGzXA2FJQ3MdnjxjiiBZZfAMFqPoJVb31c9fLCR7f3ehZ",
  "key19": "5EKSz2ZM69iDKZtZZb51dWxKDrnTMYmT1e6TGoZXYCyJ3kGMBULRLLzKnXnRvfuhhtKqbH4hAqNxRpsgQHRYRvBH",
  "key20": "w6ZiHzQUWTrQ3SpeWFviXoUvWLgoXm6zWgMcWsGSMJGVJvsySaE7GndxpDLQXHmryF1fyRboF9WRZTSse4nZVMX",
  "key21": "2HiQBsjysLYsNMAi9pysnKJQRefRzknTJ3jLEZJ2mDYiYAQBNTkAGcdyT6Fy54SEoPXDA2h3cjEK7qdCgYD4ENKV",
  "key22": "3xKsezACgHGCgWZdvC94jbhzTR4FCcYkJuHnjLG35WsQm29NQeskCnnDq8J531zDWcu9sDEJeJnuJPin6vfxrCDj",
  "key23": "4EWvHT9hcKCRhnR5cwSjULtP5zyDFnyveU2zfTyZbPSEgNu5eUGwi9yak1ohVkbMN1Bg3wBoCB3vZMvvV6jPBfys",
  "key24": "45MgcyQPaHhtbJQfw84agHG5uB8ZkVRvW3zGMPvwuBBwqsn5wNyxufahVtvuc2KtDD7igem6r54P5qG98kKcTURn",
  "key25": "4STGudNoRkpowdY3cA9dNhwAe87zRyLPRXfMziYqgbkhZCNFuhaewLVf8TbFML5y5JzN8e5oWC9DxknQ7GvanvSV",
  "key26": "3orHAnMSkoqv56mhGT5L1bLeCBiDaMBUKnfZypgBsWS423cUYdHMEYzEfyK3LQhzLuts9pjXamPLE8PkWqH4VjKz",
  "key27": "5znm3rvruafCyLnhZyxn6FYddHdBwsYyhExgMHyQfaBhQgJRGwKw7TL26XjhkVoa1vZniPCjUUqE4B6mu13FhK5M",
  "key28": "2fdYtbiK18ZaSWU9k9SYZwzY9oCH5bJJFGqxSSqknDKx19S8hYYC7nNkvmKvNQrSL4ZShFrKG338spn3vidkQ7Yk",
  "key29": "5GjjGNdsXW7BpeKREbPkoV8gsPuwh91isFi7nvBANdtuBqkhMvTHZvYpad4HHwXcf16CVxmwrpVYPoBDPbEXTu44",
  "key30": "3Z1QFbFsyFaRozR5EqSn2XTsQNFqdQWM7YR2JCHo5RM4LDjFBU7jwz2htEQVdkpRhauF7EH4JY56Fno7bu4YXLt4",
  "key31": "5RNchr7jPSfxLmJjR4tQHzJKoBaimBqiYYPCrEmhrua4Ao7Cr8R9EFp1Hx2BShQJp7nmLJ8HiUGW6EMyYyfuPjqh",
  "key32": "5fuZip3DaRyxRvt9T3TMTpjq7bJcqYe73oLJzuv7APuVAsfeKyaqBGeBFtyNN8a6hVyvBSYHs8TEv9FrFVK5y1w2",
  "key33": "21Tj84pkg7ywaQ2WnE8fGdKwoh3iuja73hTUonGkSNVGQVz1S97YwV6qtvoP3mJYaxTL2GKnuA75kEq7qRpJPJx7",
  "key34": "K8a83fiGzK6m2Gt9zWWabPyF8BnbF9M4t8uogkWpqmKYCpfXEHTanWKNdPT6AD3pmkSCfgc9hWUqHnNd6jyfyDv",
  "key35": "5MFsK71EKvb33iQggNyicwbLWoB5p8EwAizQNGTiuxiCYq4KH8qEcdmafcr47VAbCxA5s9NEQj3zk5ruWSCXdndX",
  "key36": "4TJ8B1Dt66dq2oQgqxZLzs3xZKMbBZu9UhjAKCD6qFpDiWe6HDsV1YY5qXCxpz92ejGpF53kgGHg42aKAGwj4A87",
  "key37": "2d5XBCKpkaSXJWyXfHmqspasPsSab2BEhJygZMXn3an6Z6ctpAkFS7jtXBfhiqrxn4nhSLQ6uRwazy34XaRuxJ6g",
  "key38": "57ouecLW1GkHFoceKFG2QKVyWg8fS8yoLneFH1W5E7sQ1YhwbC4TodmKNdWpxECH9N1te7B5KhcTJrBsjmC1i2eX"
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
