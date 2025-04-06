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
    "4pNzzFmjsEE9dfunktCdYDTooMinJSojejcE77nYvMo8LPtgBoB7ajNHRX8btrRWrPTRRorXteH8dutNLtZbb5iX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h8oQ2UWFsZxpxRjH9aVED9wZquSCxoTMv1KcyqN8qB43wrvw4Pga2mPohphppdYKQZoaXot3rocwRgPJwvyuDrh",
  "key1": "xZ8jS5aNqT37XShH94XxD6d1hrYecGKDkVHRqwfw5SyoF9Gb5B8BBtV9SpfD314HTA78tpTMSZBJqoAKdAVU1GA",
  "key2": "46WNVWuKqnohJJBQkuwJwjLvLPm7J4TbMK8CFDqFCY7KFssDmKfUL1MU9yneB5YzrKmovobhExgNECbJP9RYBbqS",
  "key3": "4DEQJcsf1EhSM24en73EH7F3vy8vn1st7riVaWgcUaPnyz2zAmMmioMMYJFHvMV7QyCShgaJjtQpF7evFy68GrDm",
  "key4": "4fC2s6T55GS21bbpsZ4n12f9N67qrAQMPGie6WSjUXTyTZX1mCJy9c325PeY3m1v7uCTvQPiH5grf2nid5TSxTj7",
  "key5": "ky7L669irYGi1FF9YukqXsBHVJMGNpNor2fxNPXLwZrrwg4yXZPpC4v3pE5HuwjVnMmVk4tc9BT1rruWKAmUoYW",
  "key6": "5Ujw54jXsbj6xqwvTszUNkqqScaDHjz15QfrTVVgXZVoNzcBJYsQZ5zSc8qMK3LyEyrgf2qc2PjuP6cExqpSriop",
  "key7": "vZ6GFtbFQK58pRZ5Q3FBV4pLcyQBAj3zf87UWtWcUBqD6wfbcfdrtkDYwjbDfQ4jrEQnZzLDtFv3SsoBL84mreo",
  "key8": "4scR33tH9wrKJhTNATMD4rfAZzCtbULYczbaij1B6EsvBdT2dSFPM9ecWAYVk1je1fP6Erc92mUhphNQhPR2J9Ru",
  "key9": "2vG2X1MrLz5ys4N2kdCvLEc5MZhXtKxa8S2ZJwnYQ3zSvd649PUTSZmjaARxe6prtoetaEc5tm3oFt1f5GdkDx1o",
  "key10": "55aS1Dt5vdtxHqohQrbRwS2ChdwWT67wUw2enxtyMrtFCF4wrw8Q1gwXAX4QTaMvNQ7Bi4sCv3TwGifKrVX2kyC4",
  "key11": "XNCfumYtMKaeEuQPL1q7wAwaor1tMssWqmchDaBAGXoEQ8gzzXDvSjqSt61CNseBayZLehHGN23u3YkfEDybiYx",
  "key12": "5MzuYQaQ7oyu98dkZqp4TWZWTVAq5wUNSA13B7P3TTGhz9dV9gxscds9y3bfTQV8Mc2iobHMuoq5fLVo2wxarLg",
  "key13": "4VjzX6LS29CjjBjDDaKDLD2c1dXAquVrnRDBh2nK4XEdn7FJzqcQaQNiuGqybCRRPwJnmCtuMX3TmutrwBiTeCqi",
  "key14": "t9Yx97HmUoTZVAtjUqdiZW1eP7SHRHuKBHMJwEpo4n9VJ2Lk3trNmgo63xRfERouTeNYXzANQebR6JWrdyos5TM",
  "key15": "3sy7Gbq3phUmMux8yQm8uJzjAHajxkRRorN9PVcxhBt7nds4LCqhAT2Ec2RENg6aAmsQwhx7qPHdRkXG1815rUUn",
  "key16": "5UQunMSjmWZhMF2usLL3UwAYvY9q2GbC7ghgWaaHw8zjDAJysugx2vEoLAXDEp2AAtpDwJg2WXZui6jfAWxnLTna",
  "key17": "DXc9xEmCtvfriaTd2YAWyLzQNW5smQfjQ41MRG25BHTh5wiKeL8RQyGBpffLGu82mJ6BAAVE6pFkgxGoUfbHiNs",
  "key18": "5tbFXkEKq5k46B9PK8BJQwXG7sjHB45GPXb5J3SwrNMpCxs8NiAGK46yUbHGb8kgaE4MA18mTYoekerLVXsn4k1s",
  "key19": "5o5Fgd5mFZZminUY8Nsn4U5qn6roVXNm2k8MSsuAUs7iCLwbx35JR9uquiR6K4vj1JwzMVATezGv8z2ahoY6L7gu",
  "key20": "2mX3Joo1t9uq8WgXQxdFMLRA4cGuhe5mF5s5AfgmtQkYdaPLMPLti7EJWRhG5qrtwM7o3rnWJTnhk2XEEDQHEnhv",
  "key21": "4fMuLziDPLHhpttsUSaPqPUHJDZeR3BZARoUGq2uHKLrkvR3Mc34kbzUREAG6WEUzmw8tDoDeGxQg4fBSZGXXo6R",
  "key22": "2r1uRWYh9yQzLRtTVuAG945SzBnz4qUBYQpVQi4sSE83R5z46uGcWxim6WRjXsETEa9vpJmStLvg7wzQ3ARMPL2X",
  "key23": "5Vs9ixFd8LLT5ytNYxQ8PZpjPDa5CSyY1RrJ71DdpiZgLiWtgSBEtiEndgrTxF7dMJCRE9rhmwTJRJ8HAxRW7y7v",
  "key24": "5aVfBQ9SkemN3JoFcagMaaCs7yJUGupwtMwLDRph1CocrDX38XYNUP4Ve3uPigrfcHtxF13WPvDm5nR5W41ce6pJ",
  "key25": "uk6eSACEG3Q5V9ay3knFZQsuNofCzqUuUBvp8D4bYcfazpDbFG1eM3GWj5QfivjR8cH4976XgtcLfQ3o38VS9wy"
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
