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
    "2mbowzLYJ38vNczrohWGqvD6ujpSbjA4zkBmrussTYYf8CPNy3mcSMAAfQFcgWjC4vS5aQaymn3tDoqbSA3PpPWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oqfHK2k8DcPiHqXDRZ726EnhbSGbf6CDdYZ5mFXyWhSLCsft2diXzFMudMFp6nSuo55pQfdxS1NrMXvbW5dpQ7U",
  "key1": "57g6pFK7WQfskDeNhh6ttUGJFtiBhNG18XJbcQWo99qEHdEaKMV7VomHtCenjL49qduUMXY4VNAs8DxpGk3jarcb",
  "key2": "5FD7EZRBuq3g3SYH3gcnM5eRNQaHZRzcN6zZh9vt8jcTzBPBfLNJA6EELNhbF5APmnLqp7AbkipWuWNjwBvQWhyr",
  "key3": "2ETZrrH3bMPvdima8AUZdgjhsZDkksNJMd7GTqPQLNntL2662zE1CrrdoSZUbdMmMUPojusGHFmSdbhwe1rquoSR",
  "key4": "4dfgJygefubnuiJKsV7p1asR94A7LUcyTfTAWpSt24BegXUiK3a1uqTXLJxs2hPwDihGLFiSPD4iwh31V44WrwRC",
  "key5": "2avij265w1jM5JbXceCpdtd7F75vfuSup6KBjqvdZsFnQvpD9pHcbq3WFEA1EFAebQxTwGwQ7eDgWQAHZkXsqwfb",
  "key6": "4Z1nk4PtgjwcjpCvQ4UL4KFahMtK9cRimnFmu1UayRFngBcqwScBX79yB9EQe9UxGK2MZFQPmqLSzWFSVkTEtAgU",
  "key7": "5Eaz9YsSShE3QcbB81stsM26uNwsQfGzjrRPKVjzeoT1hRfamvGMdokbWaxGKVdX4zUdTrLGnzLF3dfW7QgwdZB7",
  "key8": "3kLVm5GuvbGvc8JZoViqoecke2V7tdq8GmebYNQK78nUYzC2y5E19FJJNbsPfcYGacML9rUDCb2fDCtc9uRBWTa8",
  "key9": "485P5wVwf6Wsyngy6nDj87ThNNC6EyQESrxBqs7Zwz4ZzgUKTbdZaUE1ib4Db5ozaTNQ66efZBwp3iGXAEEKMfgC",
  "key10": "4yB2LazrgiwZrjvzt5jzh5UaSjp9RZYZvV8czMNi95HofmeL8v4HpRehgzd8mySgsftdJDEkTfU3Z8YHUgqKqtoJ",
  "key11": "47GPjf3btpL8R8oCaByZty8CCNN4Zhr912QQNAHmreibe44HDvcRhF9vc8vqwAae277bayBHN5MUFXi93wy1VT87",
  "key12": "ZJx2kZcsgUpUkrA1eNqjZNxugDX7tZ916rjy6qzyXB3tCxbBf2wmS3ozvTtwTsYk8HmeF5hz4spU6sLYsXAXn4U",
  "key13": "CQRH464ELkzn1dbueR7gkgCxAruTBBnND6raev7GuZD5sGt2x5PgGA7mwQyJkKLhcE6WgmV4VNQaAW4SY18dXRX",
  "key14": "4s3ctCAWahHRw6gRPDxwNNNmVsq5yEJNsg9XxxxwmWgo6Z5ggQ3CpMuXA6wttXTjzYtXqBubnWrn24QY144uVpoS",
  "key15": "5gUpvp254kxsAsFdJA7XP3hMwBZBeDFUQwUqGJ3Y3y1NJUQmFYVwAXezrQMZ94Yv6dJGJffZtukok7BuaFmkKgmP",
  "key16": "gxShoRrN9bHLsRYwMg8KAUtVtN9izYBz4dtQXpru5aPSLsEQXtFEwmUuxUy3znBmtL5mDT34Hv57h8FG9epZFKz",
  "key17": "5YJyvJfMFuXeYx1BFPDUwC3oXpk5ytrc4STRQEG982carCGJRgY4TqVMB4AN32cHf3cj6LZ8HnLQVhTeX6Xxf17",
  "key18": "3aq6bTc8xqL8ZC7oFaqzFaTSWZ4BK9CDkq4khRpv1SjR4XK6Ct95GyJsHTLmpPnth4yW2rQLF5mo5RMgVK5E6Wkq",
  "key19": "5m35SrpDtAt2GmKuRUkeHvKnMhkRKE3REQp4XmYMwxzg7oidFLcsF143QkgsjJk5oSMfzRWdTSgbzGyUiYpf8eYu",
  "key20": "ikHqZtitR8i5gb4aKRrj9s2rC3obEiB5KLYWYLc9foxBDqbvNxcmvxXVe7at7Kyz7JyPfSdeVQQq24HxKbhmfRf",
  "key21": "2j5yZ8wvhBHLVgvNtZ3m7ApoiPbMAi8nSK2ihpeLQNk6HcTDTkSMVecMCEirEsDZSx8UVnQugY1MA8pnZGAYYYxd",
  "key22": "4ZTfqhSBjN6VpXL9XdJKF1K4aKSdtapt5XY6znTqRBhPuW7LKnyjSJBAf3dWmunxxj5EaMGURQMv44ph5aKq2YMA",
  "key23": "4CSyo3XigeCsD3MDVyqq4ghc7V34WiPpj92TsAutERD1wmrxDvqFvhi6Bqv99WyhoqXw4pzN1SS2ujuTt2d5fpgP",
  "key24": "65yLe642H19CGPMv9M6dL8hj5P8RY2EURHYvk5dULGYXiroCaqUGVTJXoF2SQwJSA8brVwAq2SC8AQAtb8f58t4X",
  "key25": "65BFAcQJnZdg5chrXR4oGTLSX5Xqoc1GuV4eKcMcBf7WP8TvMTp2RuGSEksbiBjtZggXgy1k2N1xu1h2QmwcQK1e",
  "key26": "3sRa4nQSzvNUR1rAWGt8pRwL5XU86sK54J6QWNuf6HAd5gAQg3wbK1yREEUMKRzw79DZQzhGyHNc8iuStqoWCptN",
  "key27": "32o8Q18XHDKJhMGWsi1HCVxvQxxyGxk91hL44vSNijskzrbH1P7N5jDynon3SWsWMV1QStwafzmg8DqCftunRvtb",
  "key28": "aTYkgt87rmmzwoj7JfqvpN7C2SpEeQXJnV1fitrtq2Ucee4Ja8ARhm1Kqg4zBvRutddRHAKzfDWSrHsoQdSogzz",
  "key29": "4qRomGh279T7ab1btnhPruaYVkQtFtXFyj12WLAKh8BfPCFTaugmW7qvVHHPLy8mgTf52ugzXCk5HXs63arQvUjD",
  "key30": "hSYdNodfqMXywnUFfSvcunDHnfmqbsjjnTYKjXZjpT5E3KvLJ9opatS8HBMmPKSno2MgjPQAqMqNrYhYsvaUffB",
  "key31": "5f5CiW451KrddojqWYbH7KkAowvThtrfjiHptuyexnhTN64rQiNs9Gy21wbCCUDt9Nw8GjDsJ8UyYXQwKFunKUjw",
  "key32": "5vj5aTfTD1Bkcc6M73YbN2AAZnTc597uiME5287NtEqLNkBhVZxaQzriD5tuJ8PidL4UAmJDh2x72jTTYbZE4Mq9",
  "key33": "3Et9ARi7VjjiFmKS5BUmrxZP5KVoBt1asEK8f3KtT3cV5LZ8CjxFXrZFPvQZpGzXyZhetfz2odUjYaY1QW9ZohRz",
  "key34": "5MJ4vz5UdFWxf5eEbJgkGL2CwJVpWxc6svGLastMdp8aFtrdT9BbHuf8mC6b9sUTGtuV6D62a2ncyDd3yPLjCJj",
  "key35": "4EBZKqyjZvtFHxvFebW3NUueYmDdY6xfptBUgLWtYFLYLF1w6e592A6ADuXfrgZMC5yJiSo7T3eTqbr2FGPVVbBT",
  "key36": "cWHYUsjqT5ay6zAgHQURwkhLhewatSvcUmcbNuXYpb1iyQ8wPW2pD4nPM2BEhKDf5dJRPq4rYChr2FSq2epS71E",
  "key37": "5wsYyP5z84miU6cPMzniKs3MJbFVX637FfMzrmqTePCjrXC5NvL3FVFZbwvLJeMk2Cpiw4RTxBJMJrCRTWEifqaL",
  "key38": "4aiZBVaFrdcif7jaKUth8UC5ac6p6dRNf6D8AXGhCvYcydvuq2zeabXdrfq5aWyD6qNJQqp4G3tvLbVKW7z5D6t7",
  "key39": "2DG5bJB6JuGRxKn3trY4mi7GaL2zR4wiHz9d4Absx1TwkTGGXtB2hRJY3Q2AUs7mSjY36T9o4bXYcEYdWNZ586eA",
  "key40": "5Jwa1jwGmyEbHpq5WVSxZChwPNjfAQF4JVmkbT1sKE8qWTiDzsY1upLHp8FqX98SDR71zGfufYPu8LFb95U11NW4"
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
