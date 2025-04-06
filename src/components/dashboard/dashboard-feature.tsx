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
    "39guopecaqt8gfA4tNF8F5hWfBV5CoQYEFvUDred2dDWPhw3t9crYhifkrVyNLCpKmT9sGCDscw35wEPEnqMPRvp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mVJPxHaRoJ2C9aX1orEjNDRSKBsR2FuDtLvfcHbbwLhohXentmoHbT3B2huJLMa45w8S5YzRuuWZXTAoP7HCCcF",
  "key1": "o8KeNBusK3WAFGra2URTa2TAhYecGtNSCfoKHs5AeAzkv2FoU1C85qbvQt8BCe98mS6SwgZqksDwRTJquYzw8id",
  "key2": "2o3qN7EtvqSkwwfpufQppjtiwayxmabAFY5uXsJ9ko8xNequss97aCf54pH5JknWRZxwdNp1j7LepL114mnnBTLe",
  "key3": "R2hEgrZYszJCbfwPJbxKvyjfGE6fx3Ghz1mH9YRApBcSm6DMzPesHHEQrgsM4xqsVwFXUgcQ7TTUPM1GjxhvSkB",
  "key4": "3QN16fdR6u7Eq47TXqq9zuHDXakGJ3WMTyPRRL4kQt5okhtYB1ykTPwRNk3jXXMXkdDSitaFvh7zqcKm9WRSBvWm",
  "key5": "3X2HBvXHwewTqagvBrAVVNFTS2TnST2FqiQ21h7veT6vSpwR7abwRVqTo3WzjFeCitsWRrorcNbqyoMmAYRRjU4n",
  "key6": "5HDGCpLHVnBrK4b696YDPPb4g6iKPbBCGymTy6BprutEu4H5uvGSuxSJFrn3cY4M5fKynFm7ht3eTg8QhVQq58w",
  "key7": "2DLBwTXejVBucG2u6RKYv6hCCSLKyUsMPGeBd8qs7kBRxDaoV3GuiSeS5qeq1iUJZnKkK8Yac73MjdaB99z7MwW7",
  "key8": "4SffGgjduDTHJhLLiR2LwNqDbZKpjCSyuygKpLTucCbZzuBdNJ5oq7Q91SiVPzCEKXGjNb8McAMguPBycXy4wTGJ",
  "key9": "2q7Qt62Mz8E1npThCrBWU3f6CqBFnJq2JjdpofPKTk7GHwAQ2m5iuZ3VbeTDwTJRzZJdUWiMmkg6utde6R9cwGdR",
  "key10": "3N8dj8QuLaq44QqaFKfgKvgTngeiPnA9oVMLJFMHksU9e5Penpodv5cwDejwMB4RJb9LZjhkAsBPGC7BuJovX6bJ",
  "key11": "4J8QjEiToq8s2eZk3m41utjhUJ5uXcWHH5TwHjPLbM2v6bNgaqf6xqsjfsFyo55NSFvDhCP2wqiVwD9nkNEWFT5q",
  "key12": "5DpHY4jH4Zmkw5HhnsKANpCQUA4jitgsWXUh1SNGWMKE7wCGr4a1RUJz4Ki4ktTW4VxyPsfdmrbrarieVXnGjx61",
  "key13": "4dTyNzwsZPW6gUQ4KbNAiaVntTBRWknPCtMnD9TMT47GmHBD4NP3M3TgZpBby7qzopgBdfVBZgQ95rUsEZNMQso8",
  "key14": "5wgcd8ePP9gz6CefFdhR1a72ueavWvZBPtjSDNsLgrNJJmpuJHvLoAi5zcASKL9S6eBss47TWFuE7EgCVVzwzU23",
  "key15": "3VYKs4EwPuNjrcKX7e99ACKkX6voUDoFbECqtN9dTEQnh8tf6yoEKBecQpJtAPYaBHaxRGEfW24MgjtwQz7SC35y",
  "key16": "2WyKD6zG5Qh2fTobRzFVBNfPVTBEkq8ap5UacQfaPpFosJBNwGhc2XfGEar2vegjZEdreF5dRyN3GJehWrKXTuLB",
  "key17": "5Bi7tvc7rXnBWt6JDmKgMvFuEDqvKEzHFsqhPLsj5a9qyM36QvUMGsErj1gzfc1zhzDkNs9E8CRDi5a7Mb9QnGfr",
  "key18": "jJTADWpySqdQXRqFdDCCff4CqHHAGYJ9DSjof6itTbCSYt1aE4tEMyZWZ4q75xoHjJNQLsp7mXMz1Z1xQLXod5J",
  "key19": "2JwtqHAFuj92Jm2EihMyXxWMmpg8Sut69JAnNdxQPmUJ3qgJtL3MLn8VEUZYSRwLEbugvGueH1H7uVHSm3SzHEiv",
  "key20": "5Svf6b4G121Rqwuk1zHX6yXKYUXnsvu8x7hrtfRKn9kMdePYCoNnGYDPdv89GGVxvBAbDLfYQK8QaX4tYFMJRSYp",
  "key21": "3ekiGjrD59Q7MxsXtC7S8Gy2tP1KMZxjvHdzZEbtcnS7y7foQ2rHaUqjVu3bN9MFLuWzdNnWZHhWHN5JURfwBisg",
  "key22": "5777JHJVGFA9spVpgYzJ9Xk12WjFzqyhUw49oF9kE9KB6kzNqe7TiDUHRidgq5Z9iyHr5QZSFRKqNKN9BrQxeDPV",
  "key23": "sa9y8JprfbmSAhXXKT86qQomg4S93DdDY92G3zHGjsz3Z2FvX9PVUrnVZ9GWRrsQZDToVMiQpszyKzBVzRRQec1",
  "key24": "2GBprDgGb98VkoFWNm8mLhF1sQat4wHVWta1rwUgxJRLSdZi5C27wBJX7Xcp9XTeBpvp4vEx3W6G3qPZ8HtXGe7y",
  "key25": "2QgnvSE6QAoKCs3jdo5eJPiHHtrFHzF3MJ26e5bnrZhPwy8sDJWmyPijn2utLkpXAKw9oEf6QV4CkDfsZXsSf7Hj",
  "key26": "4gRWg1kCWn5kKDCHaVpPKxC9u9LgUgMgdmH5KxZqhpxtnvWZForVUBRVJaWaBM1uJJUHzv22LiEC6WAGpVsUAuvq",
  "key27": "4UimzhurdZsQ5StoB8sSfp3qv1fNKZSJkjfy7FKd9SEHqdJZQPmx1Bnk3DvqqCzWiMZRNAQALP4tQ6te7PhgEriX",
  "key28": "5RoCYCkAEBfrKbQ3Ufb8oRVUVTTuwjmmMwg5jXn5ax9dABdFEFYjDZS9DHy7Xo5qk858oYfaeonjVJqL14dnZ4vC",
  "key29": "m6azB9Pd5xqsSytd4tAxNfQMHyCfbLpKAPNj43dHEUA2ceCsthVtCdh36JC9jtxEuC21bymQHMGtK8J3nnGmzeo",
  "key30": "ufb16KDbYqyumCKe1TCxG9HndWStEg4zGc1UJuDnEhHck1TsfvtF32DgUFdNwmEajXwGAxxKmdbWpj6LH96jtdN",
  "key31": "2z45EX6vVmHHuthrMyprVn99SziYyufT9krCPhYd8DcGw72SuKzZq9Nx2J1uLWyMNYeLzVwAHB8trzdDWk69oXPJ",
  "key32": "24xeg7YEvYQx1ZgsMfFpFtb5QmKZPijLL1E3M1ZP46JcHmH8ZCcazH2XaCHYGmazpK7uss8QYaZPCnD6vDMd6W4i",
  "key33": "4SwrSuFZKcwgn5FoDgpTYj1KjptbPUFP7oaTzsYnJNbXgrx5j1eg8rhcvYCTMq1iqbugcKBsypxvDMFCwuSqC4LS",
  "key34": "PCN8RkfFzj1Mm9gYC9LkpfU6tVyKj1sLD1keXA3W3QijB2PrJn6YfireydjwqyqzbEqfWUe33Cod81LYGsFtXMi",
  "key35": "5oqndDRLqM5RPy1GzaXMyXDbejLh5PiGzakcuDJDBrLM9TJZm2WsPY7vJow7e6NEmDbar1URRJymS9YhpptKFdbn",
  "key36": "2hX5fSDJuSHv44cCzqcMGMWtxRxPrH8AusXyChtDTTx89FAmizLfXq8HxY7yREzdu13GHfTFshD9GRUrTG5prJnM",
  "key37": "2wjP2fratMJk67PQu9Q98Mdn5qvMndFvojGRd9GwXFXQUoJifsYXefHoCTkGEtRDYhRYzncTHSMPHHxnPKBVTHZU",
  "key38": "JKhNsseNchWeXyPJxdZBjwuxMq4r6xo47M9fPtbo6aRXJXe9A87zRUxV7ifgNGDhjUSwnfAFuQg5kqQykJ8PYrp",
  "key39": "5k3okyS4qhcDsZMeTEa5La5SEhpDw9tG8PcmdhWCxbVA9ZXbJXxFTwDGruE2Fev7M1UkuBFYgm3MdetK1ha13LHK",
  "key40": "4zkC4kLVFgG9qYYat9p6ecW276Y1bWAmuySqExBbNqfwEquP91wrboZkib75bcxZ3nL2DajwX4oJ8bbk5Tvo29hz",
  "key41": "4nrgMahLpjWcatVYdqCMZe9Yer2NkiMQUDPCfcwj89JXmY6DwzANM7CSQzeUoHeYD4414NhpDKczMJi1CDPA6x2T",
  "key42": "4E785RVha9uGPsJeWXo4UwPziFW7N172SdSjsX8yBaRBd4YHZcccJV6Fqj6qc8Ckcazp6ViCAjZbLbxyPw4TRAoi",
  "key43": "36Us7yyyadStZKibbC4aFNBKzNH7e2tUnTXDMhRUs5kWZQchFWDUbC39CSaXPKtLRPv1qXADQTxR8UZvzbFJgqxi",
  "key44": "3kPNiaqFRgMr7Edq3YGoj7UMsX1vZU2Lf4GUrTZqNNQRozh1ei1fjV9gSuPLeUY6sKbGjaBtupfhnUn3xqTVTLwc",
  "key45": "3rboQuChGMR4bbVyA9hhK3jZCJ6q4EhfePJsKhhUR9pPfQ2zXBqVX9nmpcuiU7C4UH84qrd8b3zPQBRysVqqHYRQ",
  "key46": "4LDFyX61gJcjEmDBfRGthy1ua5ARfP2j2LerFU3xFxaYb5uqzzWzVcXmEXZJBhxMEvNeiWfVSr7FF7ddqZDxTNsQ"
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
