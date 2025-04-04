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
    "5aQLCjL653qnYKYPjEvPBKyXczczeix8NdDa5A4nGZ8VQ6pYUV3nKVw64a2gfjCNyEPMnQ5rcWTt5jx6ta1SVveJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JgBh6iBVjTis5WTSJpcpRUxYBJRNFM3SsoGci9JPyXH1AQkVuGftpUmPLhCrUP4GLRHWtudeZ3NmPkRnZBnm9N7",
  "key1": "3hBUf1yiRLbzVNARFU5nxWKuAKmDoprszRLsS1sKKu1NVozuHTYNfXGdN1b5euDwmpxCH4cJkxBDt7z3n5yK7w61",
  "key2": "ZawLZRRcbNRBygtLWz5YccBKM2tfRybP116K1cHB2iMmxaq2UEZw77SAf2HFYgvkA2Sj1fe372BwW2qC7m8TADr",
  "key3": "5pLrfz2gZ3P4fGLJzhDb6VdPQp11ZQCqvRXd4X3i4XqbHwfAKnmPEZS6sczwKUYoCa6pkr6MnYJXvHkFsb9NZhS5",
  "key4": "4pn6WvKGKQZG7BNgnyp19dDXrWUJuGaYHT6SuFPE8E4Swzjue8veSDBsCZG7HUnNeooYtATzC6D3nqxAMsHujFfD",
  "key5": "3gKnDP9izrJjX8nqLcHaXQkmT9gwLDxe3U3YoDBd9W1CkmGZNHH6Qmi3K55tbbAJC1YnrCWuvYMPJBCNfarDSNxE",
  "key6": "3wfFsVJsHe1ivHb2xrskGgz2Gzvbb6suSfTPKr7prAjAyeTWMZLA2HvnQdgc6dyqpNtQT2jTDRDhDrSML9NaGLbT",
  "key7": "21AsGNoQfMT2Evsu4CcmwdjhXApNPdSpyz2gqrttdHdedaZeWFenAMb2xtREx917s6Vq5mdUzcJJmzbVnJ9VqayX",
  "key8": "3PGcFRefopTPsEUbCEaQ9sZYSRyaGtmcQePaZxkVcb1d3qLRX5neLV5PR7WoCheiikbQmsXe3ChzETLQCBCuVtMc",
  "key9": "2ySFKoHAaAsf6sHFR7YBXwaWdVJMYsNKCnSoFZyPqrDieXwRLRSLSSksLrooExifMyHjxkJJMcgx4HBqUS1d64yg",
  "key10": "mxCsZXM93h2Cbe2CHgdbo7cRtym32MRj23pxaLtGf756KrVSP1qT9XSKn6evyUwfPYYBogDaE5DtAXH44WcJ8Zj",
  "key11": "64U2bs5uKAPbL55rM4ERZP989PSvNzVCoYuwREAEDov8f3hqaHkrkyEa7VVTidZfipcGBrTTLxQnD2SeYx7EqquJ",
  "key12": "x3QAnfc2zf9x2gU8Zk8mMLecbK6cvW1XitqJUALEfx1QybgJUssEezB8Ntr7suBdxpobZrTZ7VLmizynEFcnQFj",
  "key13": "3cKjeLo6G5SNE6JV9FtCHayoDtquj7K5az8XKHHjJ2bkz4JNiQJEygecxnxmXPfjZVgUfLA4VJNgXUMvLkFasV4q",
  "key14": "nQ7YHVyZzYZNVgAiwJ9NzMbAZ6TdcvvW3BJxvzuHXg8BrsVqjGpxpk65BDxecbzngHMj6wz8bPMgSTvM96b1TSm",
  "key15": "5H2LREB21RbyKPXXJSYmhiWe1EgSVqPQuAmds9vANh1uMKHMkyFp6PYrrtfKV6tLukbpHskq6cWE9Y45DkfpCCxu",
  "key16": "2NMNN7oDXYJcvRDWeP18D2YHwWEkfjJPb34qDh6EcKT881v1w8evyQ11iVRFWoA29C88NeuYg78sW5r4wbgarjDq",
  "key17": "wDJBs1yXoNq9deyfavSS5ep3z5UDnYGzvARzUoe6hmvpbuJtGbpKy81AKdw4iUa65uhKHJjJ2tG7orRCZtQHpSD",
  "key18": "2EjLxWgc9SRajgJkuZKvQyYeaJ8n5dak9gwL1zjyHxLVn7ym6uCWJXKB49n5Ws36MkVSFMJRJT2vG2yqEKoLSSLA",
  "key19": "2EK2UBoZYz9nXc1jajhc8kDAwMJAnZnLcX3i7aR1JhBL3adzJ2eJkF7bdE2kRTFHg66xfLBjWd6bdRmYviwBWSri",
  "key20": "2wc6EFgbsziGyLDcP8YhtQZzgN7gB8bWizoifR2mjRkar11FsA3UvfTX52pLXG9q1ZgD92q8qYzKkuh6UmrmQWcR",
  "key21": "5wpW4R7ypozffKF8T2DaVwo27SSTX66VHqvaPSEaPxjCnQSyi2yLb6RcGGYTWe9RdMyRrHKdJF1GhpKDcYcoZh3g",
  "key22": "48MptqGG4r8zyL4X5717nkAsxLPJTwGfvR7Me11PMpqinCLzZty8BDVfCd4ZFsmwpvkBNow5Xb4XxEzdtnox4h8U",
  "key23": "5jbkSWRQT5sbC1teymahvhz6nKFLRXAzGhZiKsmyTowdcRhkVGERBbHNGLvdphQDA8dZQedb4J53p7tL5YY7Rid4",
  "key24": "2HJQ5H2SVkELTFfjB4WXjphSf7sAbFwipiw1HvTptJWWj1jDWGbtoUUuTnPzsFKazyX3xgFC7yfwfUS4Dn7UFcq7",
  "key25": "5UgCJXm7MG8j7yfYkYKvFm6TCQjmuj5TwZNjjY8Sv14a5Rhtu9Zux2bArNRBd5wCm8jyKUoiWdMQY5T4SyYXiL2a",
  "key26": "4dULc1Pt3vk3pHqfEDm9CdPmCEu9UXEMN8FR2SzBBCqCYNkXmRNWSCFeNXPhSdMdbCnXruY3B53dmFYiZZmCNCjZ",
  "key27": "31LMjVrHNgeRqM74464YrxY9Qk2ntUnMQZEbh7pXACaGPyGJQTvYfDeMx3SNXT6ChuC9uH3ntahxtcEwEFeE7vzW",
  "key28": "bNYcAnT5MXtmK79ZxKahx6Qmjo7QqtSaynpnVUNc5C6sfnP8qH34xhcrDRmyCopy67wRqbe9YSWK2Xhic23WGfz",
  "key29": "3pwXpLtpCu99TmfxkG7CW2Btm8rvCrfxkymsz7KVsYQbBHUvxw7RiKKYVbn5PBub71BtsUw2ua1iKJV7AjF88Z7S"
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
