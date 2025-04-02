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
    "3RDnVYHNo9XtqSNceYzjJAWsF2Rfk6okNZJ2MpbrG6vTct2mMSrqyyQeJk1dKP27MgiU5x5yCqsy25TfNtDErwLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gjs6ojJCmngeR1CjKhJnStghVi5GZxkeM6UEiKMGa7pdyoLemFGr9pyFDvrZmjnzyQED7hnz4Xci89j5uLzGVPV",
  "key1": "3GV1tcJF1JdA6iR6owRWFKLFmJXnfrNputKsY2TsWvYt4JPqfDsGGTpjwFLNs2ND1QD1qXvpMXcyTwkXQuB9wVE5",
  "key2": "4Uywac8Lr4qY2nLXXAL4GY4Z9HjoGUNViFsGxhqySZFKfbU7cMZoppktiQtX1TNFTJEjZdSdEoY12Kh26mTEABnm",
  "key3": "22QhASoNBkJfBvGYSdwvAxVWPxzBVVVHCSmnBJHwbo7qWi4ib1vnuETVbDkh6GBNVBKDVJd9rnnd3WtQw9C6KC5Q",
  "key4": "4XPMBhpCopKVfjkM3M8n6rUAmDqcByNUuRJWvAtADZDMSt9iZ5z4dHjwEC3FWzVfGZmYmS9SiVfTCFK7EHiJrH4u",
  "key5": "42HEKFRUAAPmiQxvXwmsshUdWTNxvGJDgF9YXrYGEvHs4BUxHbYp4i8ZaMrwMeb1xG4udYPD19xLXxDesG5qwSyB",
  "key6": "RrsrAKcRHz9k9ABQciysBVfHfMQfuGySv8uVjAD2qNo8tyxx5gykY6YygL44GeP1yRW2USyQRx57FkQBuBDPNQg",
  "key7": "5ZMGbCCHt3s8tF7LBNaF4ed13ULy2h34Y7u3H64fc8Dj1Hcdyeh3quCwh3zso3cg1beHrN8A2EPYHXryN4xLYmrj",
  "key8": "3U7EFzVZvfXnRCT5kBJ4dDikDpAeqRe5mLmXkgEuKqR4ApqdRn5WJ6orBe69aAvigUWNvjGP8Z3WKy4GLyJFsRBC",
  "key9": "34yEhR1MicotYfs7QLnwZEwFevaHJuc5AMLXqudaVZB8YLvMhaHYVHynSpNrwuvENWx7KFQgsDbh87bdAVhXt2WA",
  "key10": "3qJtoBCL3gjM9vVxSMgXrMV9DsZYN5mAvmtX2bKfUnnGisgsZWMQdbUCPQkZrHK9qF6ThMMqvxb3upxPNyheCitH",
  "key11": "1tPWCLM3pK5y1fjHXFW5LMbdQpJhk6E9V1AZ7ciUwJC4EM5KQr2Y5ocqFUUHDc3cBouUhD3ujJ5czR5UhqmWr41",
  "key12": "4bDgEtrgHRC1s3cTGg4oEEZZ6vHzy5iFTyQRrQYDy1F7jh3EBbunvUSTyHWPhtFiigNa7kFXDbCYyA5sCvy6WX7o",
  "key13": "42quu6bJw1nNpreWTbt7jYw7DjRQPqAxJjLZH5wk3ewS3VkNpTEptf87zbsT86LiQ469bFCNZM1oCej1aLAhLxfu",
  "key14": "3GEGQPfKgDtct8nEQXkgXXCdjGMvsbrUMUTLZ55Ju6SFNWapdCs57XDMbXxdtrY6uAoiY1Y2KkEpmE7CQryazwXK",
  "key15": "2Y4fuJifdbEV2wgT2mEbXnu12VBkDuBdSFTifnSmnFBGp4JQ7QRM1VUWf2nL9DgMcLecV9qX8bbcvXoGgUjD9JpW",
  "key16": "65GxXeq1DNKu3Bx78nX4R943gAa3fPrTSpYVBLuKxxQokMppzdNCCGgWMDFbUmmncmb8cYcc5io2Rfjz2KkMsjKv",
  "key17": "4zSimrz1akA7WWzZQHWki4MNksjsvp8wR192KiRXqz7NwU17zh4D5UTe59EgmYV3Y92Sk3aTqhVjYkesrddxfttn",
  "key18": "2Pvqf7cBsTrHQTVafTdXx7NwDj4Rbqi2KY65Ab84etigXdVqVYQxq4qdLvEPa3s86pkppG7qsBtjF4BRFZrdrHVx",
  "key19": "u32ZfBeupzZW6wLvFex5pMbuRnZ5ZAqXGNUaCws7gCJhfu31SqdUeeMaF2h6igzQsyNFeQrzFYAhMVUHM74EEEH",
  "key20": "4vFZn2R8ZkXbdNN5jshsVoX1i26NLkPNLoBxZzjkmsnWJZsqfX4iuP3yYvxSdMBxTvfY9qCBr8L1AYx5buoWrP2o",
  "key21": "5QiPLfE1rykTdY5nfBZeZxcovdGsbf5fzj99w9H3dJGQCcLoUsqKtF6H5BC8GzaXgbv8fAhvVL3puYgiEiYoyP7",
  "key22": "4SAMTrXQBB1WNgH9Uo21mEjntxH1m5PEJ3Puxmb7QnsZmB48QQmG3fnZe3HpTDd4HPXRGqunDwkbEoNPCSV6KABS",
  "key23": "24rfpxSaciLMq3dparUxSS26anDMT4nGjPmoEbYEjs5zCrXTCT5m9YSHNtFWPQbfAcQgco9dyKWaS8nV2qpK7W1d",
  "key24": "oWRX7NZp5dZB5FkZ8nKbWEKxp4Z4cxvquHEn28jLr1TLgdmdgV491KgjXeNQ9Kg9UrinJpc3RmncyhfLmCRvpZL",
  "key25": "4vWALF4VqJU1eEb7JgTyasLjbmoK1Jz485QfZybghn79w42WYn4QQfp2GSYhdAHZyccEWjYLAfzgLbNrZGAvkqDr",
  "key26": "4A3xESVwiC1WHRGjuCeEKaHdCh4o2B6Lb8Ccn9ww7cSo1v2ntqoib7XVhMUhgiddVX4VGHozgAurNPXiq8kGdCTu",
  "key27": "MrvMN34Vd6wSuSLFJ1czpZNE1kmDKNAz8NooHNjiCWpiyfgUrJm14dbPVYG3wSVvwCZdqtNoLkpNEvJo8zByUrZ",
  "key28": "3fkVSCgkm3muCMRzKU3MuozjTjsJ7q9UMwgyJYGWwk4FLdAYX3MYeLRtDsGTEXD5QgcobY1y2N6X5Wxx1AnnEnGA",
  "key29": "3efFS25eQqDsQhSVj8hvSxjKme6jznHsx7jyBoY8JChSP8bPrbwG2JCfrKaDBufVJBPyRndW6kKqVrKW1TRgBYjH",
  "key30": "4p2rYyCuu9sB9t7emoJM8DA6yekBspaeQtBCrF4eDVVWL6VwcDohz2wyDiXu52ZirwraWvF71g9jjFk3Y58qvwub",
  "key31": "2QMsHC1Azuqozg4dioA6dBk4xAKijWyNamPs5LBqWtH11F8rQsa9tdgzVMGqviRxLhW2JzYTjxdq4sutd1tmjZe3",
  "key32": "5LFEZqC4BKQZeMJ7mgAQjJFrwphbtULGus3mkjTMdjyF9jWnoFhWfWW8H1E25jKjAZFcaicTfmX69GLUfkY6QFwq",
  "key33": "4Maa11BMxSQHPAyKZqsb4ebjbNerw2JHSkN1PmK3zBvKNqxumfr4Cd6D1pck1qBm9B8s1uJ2vq51MuPQEdRfGhP5",
  "key34": "4FExY5jTMA7yQAobwNEEYyfPymEuRj5ZRB3ytT3Rf3Rab7HSjNFQUC7HZjNqK3ePmud8zTLGuR4w7L4oMcNFrvWw",
  "key35": "2668HkTHmTkocJR24gnh9aYHt3eukWP9mqsipcSvqCcwxQGZq8djU4QPF53CJeSr6RPXNaWg3B2GuuyiCSBxYjDi",
  "key36": "Z6LYL9oYUJrQdQGbFC99hNTAYrmEbTupw5KS9VVc2sM7Rw777yriRC66XV6D1qQrjssQk1xETugYgbJW6mguYt5",
  "key37": "4F9td51ouiCodXNsEwW7rujUu6LzHa7jVMAD34H1CxRVcb3JKinKu3t3wtbje7EqukZ7WmWda8T716QMAgS9paWL",
  "key38": "JebsfhswoJi8GaHdn6Hhp6RrfqzPoPj88krBhJGPRPnUNsmghY3FLurDaTFtXctCDFD8Z6Gmyh6A5kYtC4LCzwm",
  "key39": "4xaFec9RGQD8uK7nVqsbaaSjf3utho5ttgLzPoCox5WAgbPLU6guS18XuCskLo5zVBYtVXKA4szWWg6FaYnNECJX",
  "key40": "5dYP86BSqjjRoSoDEdwUjqjdHvjDSrMwL5QYTCBJfiEhAnk19HMjpWHXmHwWH6HKBxYK5NHBj9DNoHqPfxprjXyP",
  "key41": "3RAwKB3PeVgSQUKfpyZjmVuCE79BC1yWXsJ7bsjtYa72X551tvcA6FALLnnYQTKCSeV1gjP1FLZ19w1U9YKPFwSv",
  "key42": "55FFDSqZ1MrW5Bwz1cnZ2zKqhZ6zAWEjbs4wctV9HiWPSZhKwxyggxHNDjvTx9hTUHRZM1FPAQLngbyvwk58tdEX",
  "key43": "3zaNw5rBZFJ4KFkmYahotjedZemLxjV54rv2Kr7MEQjD1Mp5KbSji8U3n4ntUBsNby7vnmrrkx1yuG5c3gBcGYPL",
  "key44": "5A3ZDntZymG52ajCRbV8GWNwtFSSSz7NVif1wwSfZc7ZDgTuJEdRQB2oadzKSrSq6BCsVE3cpZAVR1x9sf9DhfF5",
  "key45": "3uRhFesZDPoefk4U6LCBiNyb9G2Cx33BhiSYgBpm6RHSTXobsGkQjKXNybVcK3jKuVAkL9swoyteJ3mf3FUftET5",
  "key46": "4snKMipYh7NjLZAuNVgkYjqczk5tJdrJuVnpVdyjxBdku1kWgQbwWYF1WjWy4wruFUpgmHUD1AjTrhsyVUSZ2Wg2"
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
