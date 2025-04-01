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
    "5EU4qSSjEnLA8imTYMaDsk86kryCRKBDNfH38p9UaPmNLro69kk4JbAiePY26AFDXYLZ2Z11maNhegK9AaUcFRCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sDEpKfcYJU1FXvvWmy3XA4F6UiJ3Mbmehivz2fDtsRXNfQCXnH5oz2Lu4NxjstkjbFXqk84KYjKNyUjXcrAXrXC",
  "key1": "2PGLkmmQBrv3mygKt3nAAPjEPKUvJ1AB2EjT9U8eqcwdjhjxcB1LANxRW8EU3hDPfdym1shxMx9aij8Mipptncmr",
  "key2": "2yW5RT59JXJa71p8rWGN4thYPWiZmGEs62cQAtyGXQiJbfXGA5iASV5YT4BWehqcVYbDAoAzkFEprWmheU2eZyQR",
  "key3": "3QUWe4LhHdy5NADhiaQLfvNeDgvhnkjQQvJx5TYaJtfbqK2v48eD6nZdewZYrKKkw5nKzLytyxerT1mcwsQhJ8BK",
  "key4": "3d7J6xrVLaUXU3eLoRmnaBjS6b3Mftxt343149tqfXNXKkNw9HSUm5seE4z3xpwm7ConJ7CYfmqTTtRkDuFbfcmK",
  "key5": "4bgjByBFnFnUkQK8Giyj4eiXKy5VZ4gkG4vDBf9ys5UE7xJKYtNTCGHFkNNtshiR83AWC9HPBCiAsMXuFwEJ1usv",
  "key6": "51A4ynPnoMrQegaHwiRoYodewTT1P9sqLnj85KUb25s8how3YbywQ75ckkicuGRYtkrwqcqztTPjBoA9tSRduern",
  "key7": "5f41RQofwX9y4qkgdqugqnkLJqdadr9LUiZ7u36ZAZvvj9QL3VHmhfrfaxyaKHp62yMnZ7nGnKLpkyfemuYf1rEn",
  "key8": "28kzmXubu4m3v4d4y1mQ7SUWndvj6hjH3guAXPZYVEBRxTvJc9E3SgA65PpGKi63WLoXjPZ83okxfqWKQfMuxUko",
  "key9": "5VQ3xwGgPMEqYt8uUswVdxyJKykHmqcVGNgMxW3n7WAaf6GtQ289Z4hnQrqW4tJiZjo8XzXPVkk9DifETS4WZE9B",
  "key10": "2pUvEkkpUm2p4XERmoeLr1yqD8voGZi72p3vCKEJraTaDPsu83tT1wwQofPe4itd32eYxmaKuHB8DtYUNgf6HTeT",
  "key11": "3ZED4gy4QoEeKZbkX89487FDrsRZt1PNcRg9B7jT3VtGf6mFfJkSTB2yrY3kUazgUXNrKuGYfMvvkSZqBAEyWjeU",
  "key12": "2xPNWfPRLea64GAmcDNB2g3DftL4RDpkX8if8sEz5CTM6GFEZfn5dHK7t1b4JPKwqibqhMFLFymBiGDo5FQFBk2T",
  "key13": "4mJtJwSjRv1RhK3mnb7FjS7YxLXRpt5v7pMtnNqFcY1P7HgxXh32mW4ACttmM69ibBGSQHDBsoVhuV3PdLQKxRyj",
  "key14": "5qm1h6t6iG5cD7uTfF9wyAd6RoYso3A6e63EmWV9aLGdekLrAkTiVDw71b8EiRXN9A81Nr9iQSL7dd9QZQzRpsbF",
  "key15": "2p4JLAzCFVRs2UynsWzYJHdWMqQ1EeMNRL34aiUK6WPqReaqLTwVDPVP9tebHc4uQHyvKPMwRXJAuEQKRys1Rb9L",
  "key16": "4aVbNXHaEyYHNZ6biCVwZAP3tRRn5wSQmzM5iN663mfpMsoFk9pEmB8mPkwXc3RZ4NKXnMCAre19QfFxqCigdC9T",
  "key17": "ftQCi3WEjvuNezvqAJKznjSuJVWFegG1Hx8sFVpVV4SYT2Q4LhY6USWEqKxaPmGz5QvqTBmrXPzX9zX8oHn8W3b",
  "key18": "4L1Mvfq7CoD1EhHHAiATBxaG2u3Q3843QKr4ebZMCMGTK4BVUcbh9RYXwoS1AUQ4AZRPvXsbnE27t36EJ6okGHjx",
  "key19": "39FUKuDeMnPs34xVHrzVygZExvoJE6JVPy9d3WxVCHdRkKzdPaDeUUw81CERnQsTAMwLmbzJscQyp8GGhGiw2KtE",
  "key20": "4isdBU8nUvE2wHqsP4mBEAW2wSwzixR95tGmb8PVnEJ8Lx8h3gJF7X6wMFqT35nvKift3XwW5kT2ZzLbomWbcwMH",
  "key21": "xo2X1FGKK3jRebdRNsyHwy5R1kyvrUTnKs8HUxicSo22NyFS6id3PkUhWMcAd9kEcLWxicuMRXFmyTJDfykzs11",
  "key22": "532paxrRkUbjBHiyDYmTT23YdAoJTqeJm4t6fg43Fy3m2qLimuyU9KkUzfggZpfe3sUDJyp9iixar4ZQRD2znvrn",
  "key23": "2NSPrTZ4NnJkibUGgn1F8VmgZvXmkepAnzStqMya3N9syCHNpwihZGP9Ufe86EfRQ35aRDUYoSknuvDBpVRbf9g1",
  "key24": "3erPynHMSVLPTXiqd9GifByVJysB8f4JEXHU76FJj8g68dydHBQzocn4s7RS4BsiPZk7AYC9FGwwteQ2Rh8daX74",
  "key25": "4hF9rEbZ9Z7a81S31gtmoe1G2v99hx7HKUpL15izAtFAGfa2WNH2bmXmuhjEf9D4kpxQyLjnK1gKbSjQL3cNcHfP",
  "key26": "4cKfWHiu7tGk8kNbXvxWy4UzD7FZ6xtxP8uEmU7pBGYqVo7oHoHUkW9kDctRCducnqMwYaLMjRN8GtTXFkWEWsj5",
  "key27": "5MDQNMysNbSd5sQkanyMMxDp3Co7hDBi2Lh6yGXPBd3bkvRSSWfnLnCVzg2wjoFQMQkSv1Nh9KvAsTzjUSXftzDd",
  "key28": "4mjGxVGa5krTGgQJojYhNvUdcXyVHgPkbvRWsLBDcjZiUcVmovMyE55bkGBnUFWK1cF3PNft7HMF9Nn8N7wZvyKt",
  "key29": "2FfbkVkcdcKbEJL5eeV781nHbAFSVVoaTu86jrPUgECfExQ5bi5dxxTmiXt1qpWoBnQoyZLnmhvPKitk8Z45UK6c",
  "key30": "4usX7UCRTQK8RzYeVLVpiqPAdV3YrkdkAXeUnsHU9gEFZzJ3UamXdw5jx5RgiH879sm8RW5oUDBoa6VFVaxD9B6G",
  "key31": "2shNKVyXf42awwJKNtTJk6yXaJieeL8RiUzWJkUvtXbH1ZFS8FhSXw9Nc7vhaXbvFVkDg62MATYYaaoZiDZWsj7Z",
  "key32": "5CceNSQMmTcW3f1C3aricHPcXLkda6qurSsnX5zCeMRVdHxju1CXZ67UAhLMGDCbLXbDAx7kwCB4ZQ8fEPWTCkxL",
  "key33": "56tpfEeyJmQC3goig7vPX1jUdHGrVxE1BUohyG2xN2xZf8b8zcwTVMbBkgmzw9ekyckNLaHtPzQG1Vt2Sia66VGF",
  "key34": "4dD3TQ3ZjCcVnfdTdXwhBxGkRcWTa7ugbmAd9fgfAXYx7mau4TSURW4NxHaqZzvYSAKZSPdMvSk5eDLVLMkBtR3s",
  "key35": "XL8c5UQxBoogQn2dMZbupwe77GPkrCJYBB78qehxT5yH43cssq4hGm92kQQJDS3pMpYG3Mz92sKdVqy8q4qhbD9",
  "key36": "ucMpM9LMTdNryotDBzNAXrdeRFoMyCXrnB5xZqWFHTUHoZ37v911xcvoTVg1mt7JQ6uY6Pd4MJxsnsWhK5ZLbec",
  "key37": "4ZtCnjtVwfkik7yvyDjbpWo4nN8af42uPtaAYXPwKEa3AGovE5pujsxW9oWeiDWampZRJnWpnH1axmJeWYjMxqWr",
  "key38": "2xFEWe8R7Vo6EtcxSmZhFFDQAyASNuXwUmd5k2kF9JEzXhCpRke3jP15KQdtVKDByQiXbw2yrckZGJ8n3R2KHTnA"
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
