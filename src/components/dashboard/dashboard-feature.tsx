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
    "pfrZxBXrmVEEwBKwQTJgFn4TDYo8N23ER4ryo56oLNqxRueeAvGydeVHFz3xD8kuBxh3mJ6TMpV33spVzv7oxAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ct3Dd4YMWormrHXmcUXUGTqrXsj8HXpq9vNvKdRQotcxgNt7XXPMz3jyWtGzohuKWyvQbgAcn9zCztRfRgctnbc",
  "key1": "Yniqo52FzDJ2QM7HNGbMTrwrJTBHiZ8DuQDqnGxRWCotLXhVQsp7nZfxCZznzEn3RH48VtR48pBCpxre7bFJDnw",
  "key2": "1Z89TqT8xxnLHNYoLrZHJd4WpNUoEiQZGvX5Qb7oAK26xuQ53YvksgESvj7jnwRPDqNj8EPkeGCWu5A7z8JxcCb",
  "key3": "4rfxRVrzQNtdzyThqVaiwTSqVwDarzSp4LN5Da7jdvUvggwZiLdSVkj4GPLM3R2aJEeinho2A57w3waohkcVHcsK",
  "key4": "4KXhkRYiKRVmLC3AB3TLK9KkWtTRHnixQRwM1Cx438Ht4wfBMSdHnZhcJvT5MSW2Ezo5VYTYhCZPJoBFoj8xXjMz",
  "key5": "YPJRVd3LcG7aPo5KdZy3nY3fTi8VaNUfyziq3CubdyUWuSvTD1L3VD6V72yVuitEo8dEPCEmqCKogZGKHbLmJyj",
  "key6": "44GUuxQXRRvk9rin9vzDebpp2ZLkXf4Bbamee9RZgdw5y9p1dsaz39whry95uz1oWWknQfnEXdrTVDjw3NMNMJW4",
  "key7": "5xZYBrQLbNJAJKjrtbAwc4iSMhSSUkidB3BuyhfPAzw6CEeJeKDpGv7K3byt3Ud6cnu89AigXsXo3YM6kf6f9cgd",
  "key8": "R9TXJhawPoiQrtDgrsfqUjoBXx7RcjMsLHtxtUDf8TW2FyDoJBk3u7a31RdX4caLCdw4MKyaBsKWiS7bvESvSsH",
  "key9": "3dcfovTGYg5RCNiqHj6tRxbnYEsk6VLHfHv98Q3CBcT7gAKUp9G8WwL1Gtvt29fnvLbgicg4AvN6RAwcbz1Vf5Mg",
  "key10": "4BdgSdGnz5r65LM24Ho5UBtPBJmgBCM1wvL1opNwHrYrTH6aLZ9HPN3kp62YeLC95m2vJxkxnopkKBGF8Km7VXJr",
  "key11": "2jUA7HGSRYDsJTg2HNRcScMhAtbyqVo7aqfqHbSkFL1LPqsT43iQzEGRZFZRiq1shMovzgiMZo7mLue4nTG2DdDt",
  "key12": "44dXiHkCLLXpA3Ju76U5oQMoWQYFNk14Zhe3N6zCRUHxFQNeSTizwcncb1YiNWnwk68WWfwuGw3V7tFpLB7JEE8f",
  "key13": "49Roj2ftc5to7fRcxcUhT4EfG4EoCLnzR6vSEH6fAMA1P3oNWNopmK3tDaSfpJtzB9n6ihr9GChhszBDdyh7C1dD",
  "key14": "5J6wwdGtuVr8z4GFmeteLrsedFfhuE7UJ5H3phW3arcA2VLYF5mLPSANNxs7GPSVkfqgaUkSS3Wsozr64ZDsFaJr",
  "key15": "5vNdN9DyZCGZwWdV1ahzDXdPJNVbnfKaNb9X1F7UnkiKQrwKt1VULpW5Xy6nCcrW4bZgyKpUALnvRmrr9ij8tUq8",
  "key16": "4wbhPHyD1BET8UUVaBXcJrFRdPHqBPLwWQn5vFioAf3Cv4cGxU8L7E3xSgW2oNhjqjzzpP6guhs1PyuSXDEh1DE",
  "key17": "5yzkHSsnm7JLXqCDHDay7DpgzAYdYjpqUDpCBNvfkwzHu4GfUrcCUMFT6X38EZgLRH8GgENUX6MfTM4VFFVM5u4a",
  "key18": "4opTyUktMGTHTN2zEAz2gL1nLJuX69i3sfHrhQSJncEkF3ZhTSMJFxaiecq3wtWPirVSYdYdkJav7Vq47fGyKs5y",
  "key19": "2HDwprrk6bKBFK6gWCosbNrUzsfpHDCmB8SciYUMu3n9Gvc7YARTTRCXK9cBuaYEW25R4yWkiJB2BEMxB18SHgxk",
  "key20": "w64gefDeRFEsr1hpvJjXCQF6F1mMdUjL3xRW2J9ubmXRpbX7KXVHXFpGzyHyMhi5saMHrw112PZt5dtAuno79vF",
  "key21": "4KxdFfyj4m7jk6kpi4uKqbz5L6ry3BYHX1Jykgmvtm1obaMqikxDZcBhbYCihwTg3S5p1Dq2LsvMMG6JyntzYF2z",
  "key22": "2fbgoUUSh5V8BQop75hgcZwRSwL8k3Z2Z6FMJgE5r7gDE5YqHwSypwzKab91k2KUrLDkqfqBgFJf81wan3QvCoc5",
  "key23": "2Dp53MdyCSN6cFB4R5AUqMz79qpea3WSHgNpZzuhz6tdH8FrWzNDFPQjhfa7ihMZq5M2XsfRvt6VDboxut6wD2Hq",
  "key24": "2RwZAMZeWEfXgLwovv4Fxu4URUE2HXhEnMQeQqXJqyKWk4jeDGZdN5rMJr4nd6bSNizZTFTtsTNeEJMzXX2ZecP1",
  "key25": "4HMmV17wpmHVouxJXwjetnf45iDrX1H3NJrx77NKQngV81mv4Y3sC4EzWSkM9fQZCY4qDYgrY96xnmhLBFhY5U8V",
  "key26": "4bvZZYN4BEFXRfry7ZjrUxmTy8DoDHtorRvXkK7WbmQJp7q8G6sTtN6TWAMZGzBG3omerSMzneWVZzJpaJiPQYie",
  "key27": "2yifMUWvq3jePmEm8dh1eW9c4KjJ9HmVudQXm9xeX5AFqRuL5e9EcjangMjsQeuy2o9CrrcMwqFzcEHDHzr5WCpB",
  "key28": "5V4WkpxnMWT1et7cNQPYP4qyoDNQWsRxUJbYG2Qi62PGpjStCCsciAnfRkD8fDcqQCPXisQp7fz1ETsxKBVLYcUS",
  "key29": "3zdSYCQc4HpPVE2Gk23YQRbiFQwT5rzukviAgLRWwMqrEjHXnd276y64jtpnPG8x9EZky88WEPDP5sL7HZTAPHgW",
  "key30": "Gk1BXpuk7p6LZ2saeGkt3oCK9vhesRCKPMTHq6HraerxwJ4bYLH9iRpQvE8awYrZRhcmpXL7K25Qtcck83toSD6"
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
