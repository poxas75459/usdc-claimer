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
    "4M7rimh6W75kBrS4owYJshvnKgaP94Z6oGKQUuCzCt4UaNrYjwbXM9yrUan9s4WeZMQKREwTavaQAK9ThVa5JAx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yyWvKXjhnkh9m8g7PJuGCRkuoy38ftzFdxBVLVY3bjqVu3jcozMfdBDCdX5SzxKnwb323Q3GmGbRrbxWnuYY8Tx",
  "key1": "uxKNbKcPYxc2WV4uRhi8mXX36bL3KLWp6qjjV3M6GgzdeYhy8oPL7bYAjbnzjqDZ5GR6zXt1hWmjMGWgr3qXFbd",
  "key2": "2hvsZ9vrA3b4zQsD6vMiarDKmknDkcXFo3NQR3WEcJQozmw1ih7wAayvPq9xHDeKWUSLWNMUCRDKfwsYrS1a7rM6",
  "key3": "ZiGUJFARZaLvPUxYmWrin7rmtY1kGY2nvRRZTxMhAD9tVgsuWcqzkDWgcka7CGAQSmTybYw5CBtDToUscZhUiuN",
  "key4": "5ivWoWQhtvvLAjHKmv2LT3U3uNiS5RXJH7hmGBnn8Ssppcaf6Ad8zX5UWRo37vRSMj4PNvr6kBsYnMkAX1Wq7UTE",
  "key5": "3PUYP7D9WN6TUe1KxvNzSiKcYJbXHxqK11Bfancc11yMc6eYPZZ1P9WLEz4RZkNE5TiAfTHzyZATF1KzWiBVRf2b",
  "key6": "2P5JJyiNeSKyZq4aFDtX6hW9Sbrzjp5Vp8sfYX3hXZt33QrE36tnHkiFYXSKRHcMa4W5iLpthzfLsfyUQTHUcQQ9",
  "key7": "5EcTf41bLgmksvP6bRVqa3C6NhrfmNBJMjxEgh8PkAxoHgpvH6Jj6TzjT4KH4h1ydgT4u8TcGVS5ZumK5STzCSn7",
  "key8": "4CyCmAgZWMfvi3ATcGMkyV2VA1MRQogv9tu4KWnck4iNd6t3WViox1j3vVcqd32G5LsqshJZPtM7s2UvA5DLn5pr",
  "key9": "4KYp149H9pLca7M35xxKMoUrJZvskLp54yMom4aMxw33FPBKViDxkf9rVCMCdHpSt2maLcx9NcKvPca3eqQnS9qv",
  "key10": "5odDHwocqZk5tGWKCYmvmhVo84PLBpZdR2AJGLi2C7bAtj1YippP1JXvZ16RpNw3tkKdD32b5RfEr5yoRmosfgSq",
  "key11": "5bdvAgMBZ3xsLt2tzpiQ6CLRciEve8eXi2YMnoUrYqkmoZ1w8afS81Y3sAq6eMQ7FkxNtqCpjtQhccL2jMrLGH6c",
  "key12": "28ce299eZiXKN8wqtLmMbUK7D82EPDMRGY7vCxZN8KLFPZXStZX9qDxRmxcXHQCWtGCCySvGGQrZiaYsFGz87KTB",
  "key13": "27MMA8pisoieFR2dQsHadqJWYUZ5m1W6hmBKfbpEnpC6Mch6XD7evkLsnuQitZJ5R76faabddk57T8PApkRNESdf",
  "key14": "2XQTK5gtoGstvBsRybLbPDMzpZJ6q3cZPFtaHusvQaboUdD6Hue7dCt8qCDmWpSwHjsioJ3Ut7Pza7g9ejNdMnbd",
  "key15": "5SyhTa5YL5naHNEFHNj4jtoJPCx4xWWf9K8afhCd751iRgWjMGUGdoj3yXfaDDDnXgmqtgJBk7YpwVaTZH2HbGp3",
  "key16": "2ZW7Tq5rCPxN99WpyMvxiDNkSw3nDzC2YxWNMTaYpjWzmYScaKMQrthvMuj38ZXuwN6t4p6MpfUeJtFZx7BcCKhi",
  "key17": "4HgeRqzpuyWpQeHcTcZjUHnf6KTJjAJU8dWTco7MA5fDrvDBAbjFmmgWQHSihXCbxAuQi4x2XCcMQ66exQyMMbUF",
  "key18": "4LwZAgTn3y4FTaHzTTAFyryPaagUvhdYsCkXSZYxFttmHLHRR29CLb4rpUN9mfPD7hqSApGG4TKz49nMFV9fkQCt",
  "key19": "5b99CjtMAgFfSq23MgQHLVjvY9JR67RatqM62DK3djykhRgSSagaM6yKvsfTi6eB1CZFFtHEXQEuthBtx1B9UE9A",
  "key20": "2eXHtv9FbJNQurKmLcoQF6nkBFkBJw6tkz6pzuEkRBBR7mKTS239rfgX63i7KkRa1kWutqauXrhP3Hi66rCXcMqx",
  "key21": "3pTAc32RmxEpPWaR973iTLoDqj7UPvtfzHoftsEt7hf7AH7dwpbGoe9ZmL6ywmQ3fcDqvHyMdALE3vneMUbhLH5L",
  "key22": "4vFtPuXfCigjbgax1WRDfBdBpao9iac7xR9Sheu2Hni3CD5uxjdusQ7By4K63rT6sv3wdQPczTqvfZC8vUoZ6HM2",
  "key23": "9Amxk631rAeU1Q9ATKZkqafJECUcSA5Dgiss8Ei4xuNvyBC8JZuv8rw57q4QVtacUv1kd8UtsPjtQoToUAtjRMS",
  "key24": "2Stq5XwTrqwSeaqtn9z4FVMUv8w8z8umCw27eDkFzMyaNqbTSVUNPLErX3YTTieFoSDstdR4Fzuvze37nUJajC2K",
  "key25": "4Z9EkzCjtxQdbNAqtpfxqQuXe5VMfqXnqSENH68neE11Gc6pz4ZjoGkKDQGaLsf7J7FkKRW4Vmv1EaaWQwhaiKs3",
  "key26": "3rAJVnZZyNL2n6k3nki7j31m8AxticQ7PipKHzc9FKwNAKXFWEKjUJsFauyKRuE1bQnu2FUeTHTtSWDtScfHT2Am",
  "key27": "21dLgM6f2sjVxL3W1XkBRhDqYGNKhuLozgeTvD6ivQFaMwY3HDYk3hnKvjrZh4SYXiZsee7VktK4cm9u6kN3PQXb",
  "key28": "2YSe9J1rJ9FRrtuy7VupjdfNkAyppnVy7VcBwmA5hVPmmpZdMtUVms9MapvFFsrEE4BrmESrcdPvcBxhytacddpY",
  "key29": "2nMPTGN4Taxjc5iJ3ix3NNJFQKJ7TmUUybRZx4mMaVsc7aYndpGx3KaYF4V11j1rZZyCRJDqXSRpLH5Jm9wGZWP8",
  "key30": "2mPpsPzfZ7PxJqvUcaauUs8KvVCuKmzjoGV1LxZhuskqMuicRqwXXRGa9g7BBJA7KXgJXkFHy4pYFnafcVuKtBA",
  "key31": "5ovuJt6rphRFuQQ3eUtz5j7qLEQ59nxni6kEAGQ6uDnZZLqV4H79zGFs8QEBRMYMk3U5X56WwA9AgXNnntXZsoRv",
  "key32": "241b2DD4vHFUCwCDbVB4s4ztcFsyCBQibphAtsgpDqWp51BowUdRAXsaB7HNSGiEsYkxMbstf3JN58S52M65vtvh",
  "key33": "2ypuYcspx7SgQRxVvpJAVyZq5xDbU87YgVqVg2Aj3xVk3iDLmB9QGoT7oj9ezD3KZhgSzHdupKp3Dx8VaafNSsRh",
  "key34": "2W2uLRNsgTiqeH1gVetwavfFrGKD3YgDKHqNnsZdqzamTuSkmR7mAVMkxkuPhWxVEzzosspjBCDWwHWCpGpE5w1y",
  "key35": "awy3hUk796SMrKvqHbnuYxfaARb9JUVjz6beRokJRLimdep6zjv9KWHCg7groiUbQXLfDsVa9ycVqJvBmrLkg7y",
  "key36": "2XvCSZNzZnzPKxoqGTBcRGKDwAcPhus3f6L5LfTT2iZv1CacmY9FmMp8bFmoMMzUXtznC3FvrE9gqLBGf418APrB",
  "key37": "5bBg9tQLQ1gTncDSavdfqK2mxeCZHAcZLAidTm5XwzKWEMXdWhj6dxej8CaT3qifUwjsoX2wNyXjgUwdYYyjCjwQ",
  "key38": "8iK6emUxLhC7Gg4QtQ62KoXTc8Gq7Lsj23QtGRxdTSKCZih8aHpe79tzdjrpf1Jo63j9HzwiqLFyrSAao38VdhE",
  "key39": "4ix9E4bEBsCXmRBsrNQ5h23mLCvzSFvLRwCfeyAq4pn3VfnHpH5bH7rTes5aFZu1rCBayxDs5XAG3GiW689483nP",
  "key40": "58FBxNt15TUzjf3g59YXMntybCgQzgprouhSxN8oHJaaH3w4oCXMexdSsSS2Z1nWe6iQ83tjrKhV4JZzqhvS4uj4",
  "key41": "GfmyDMvxa3VRfH5AKitcBtrSt2p5rJdkceyvgmBnuxbQEZVtpk8Yaow1uGYgFxbKwD6qLpeDVUe2RdeiWY9Fez5"
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
