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
    "7CdXLqRv4yN4kTDqDiwt7ztpoWgv6kfitAu1FwgD5MTqyDoAZhX8cagrxLRXDJJKzE6DYFHVAjMFNnXSQJti86q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6359MPmxVS1HcBTajmME1CrmUqC4rpK5TASRMRwawDMteduKVJrkp9HLvhg3x5K8LoirTuUCxMfmedyAA5vWeuPv",
  "key1": "4XKQnZ9maf8bvYaQa9ZXMpEynEoyybedjJqFezdbdaRZJpshLfi6URkSzKjViABwP3KMTs4FrnrDKu42CWHNgooJ",
  "key2": "3fkuYpt4WhhaYXCEDi6uuYRYhh1hNe6BndBez6Qwy5HcpznUqxHb3VLUt5ViK3n3L2MEFYVvWPRjmyavP3Yv2vT3",
  "key3": "2tKB29ArbkABYhCG9WgsKgmYi9ebYM84X6bJDdfesSDSuNvyn64TQpT8fj9cCCYzfTSSBBjgEm38RS6YBaBPUtfi",
  "key4": "7qZJobPQs8qB7oBMbZu8GGYyGVknbXyLBmcgvZrzT41NcsknKwzpifrh8BRghrkyJudAUqDrBjvRaD15nbqYf58",
  "key5": "5jAp78CRDdFqbfNxyBQkf7aPeac7fXWF53vW8LpGvynbQ7uDj6j4nYTxR2QYZEZpQb88Y5uCjXsZJqDJKpXdKt88",
  "key6": "22ZMSM75oKYTT2u2WxXoRzJ8UY1ddErX7pZG7SjVNoLx9y5UuQYfLUKuVwHkKhR3StH7kmH6r3gWSs79U7L21aHH",
  "key7": "2nKvNPjL5nwzNKouApJ5iAcmvDYuQrSdc7RbJVbPDQZNWdUXeUnG2Pn33xQUF6MCc4o1hDwdDqs29fJKxipXNBqU",
  "key8": "21UDJbXy4DWJUJgqn1tB7DP37Bqzazgurha3zXzaCXzX2QoWBThoJ9Q9PMZbMSQfuibuZbWqGrMn6wGhhyizHDUf",
  "key9": "juVBD82KeWKZEgG8CcJxSTYbu5tJtp7eh2YWtN9FGSAYEfp13RdfcKordKzawVemeS6FzxiEcebp125SNs4HKQW",
  "key10": "cBL71yLB6mv5SprTX7ADpsxGXuYx3tM7vGLpXr3H69idMeftg68rNNc8pe2mwCgQMmkciQqrp8zFcvJD7NXvKEj",
  "key11": "2pgcmkCVWruhDvH9J7XXvGLoC5MrZVwSCpBXBsN1TMmyAvWNnC25ThvGMeFyoCnkgQAVTvR9uFjgdZK7owpEenk3",
  "key12": "Nt2kfDnXFLSptJvCf1bvQusUpeBK5Mac7xmTgWw6RPMJ1tXrLWvdTLdED1BocERaGjGtKknbZu8xoq3PTwV8Y8n",
  "key13": "4i4nnkmamHvgJmufXVVcypMCdZpVmUsj8UtZQTgjCSKiRoenQYsWi77QTr76hELdLBmnXE6EeadvFYUSwFpnGgCQ",
  "key14": "4fcwPhw89Vy2iN1PWMLjU3zC6ESRxsDC16KkMkmwQCA3EWF8TqWcctRiLapC6MttpLkPtSwMr4T2B9Zz6MW7jN7y",
  "key15": "vbm3Faa6EG3atrzP2wXZBEg9ZYyfEqN7iMotLwdKDLL9hjn3o4k2GNQ5HVuSkdSzYrbMJBkaUEd5epcMY9B8Nzu",
  "key16": "5jU4ajwKbboakAHKYDMqzLRcpCZvia9P7eBHa3AnChnkhW9BLv8Fvgr9msTMPa3GnD3i8KDiTHjptsNmMJYeoKvw",
  "key17": "2WDGYRi9Zm747BfXimHHXZU263cPt46YV18E32Bg9tvzJbQ8LdAEjcQ5UdJFrcwoVJV8ga9LGYJXWnG7ouMA9jBT",
  "key18": "5trx4mh2LtWtd8rghgbinUhgkYF9CenRbgxjpEUugDn5aVj2zYoTxSEMJcgcHmqLdJHBEQDRbjcUFEZnW49XZBmR",
  "key19": "2NmYnimcVLUqqUFJovAvfCss1M9f9Sdkaef7somrh135wSXBC7ip4jNgt1EJPrfW3QHm3MxrcH5yGu5hdGVzjpsD",
  "key20": "5WdLvFgxCTjTM6KRLYYkPvHksvs51z7qcFTA2LEExEsnsNW9jcdGESo4gkpbo6aMfaujGPbh3dk3T3tBY6LRgK2r",
  "key21": "5ATLy3Q4judWmF8tvNjmwjUtAzeBUqC9xH1akHqw1jsArdBVw4SEPa875TrSsEpD3epXpmVPAsBrNUgLhqfu5uQg",
  "key22": "3UAUu82yJ8JXjvAzR23hD2oREQTKSQ3wGZ5Bei1dVZTUYvgzQKCHkUSrqfG79MfGDqNSDQS2VwPqU8mC1tyYjn3",
  "key23": "5rD5DXRRgjapJ1AKuYfjjhszEUdwdTMVMMqQFwv58drvpayWvBoHVrPL523NTmouhbdjnMAwUwJMDEUx1171Uigc",
  "key24": "3rZZauTooGvSpGQXxE7fjWxWK292Jzyy3Kqgqq7jJZKbyHw5Ycm9zWxXbY8Nf4dSu1hzhmgKYp2CVV1VQwFmacSG",
  "key25": "4KahedKx8vVLTcuvqN4peBZe3a4mXHX7C3xS3omSek9ZRkPTgRA9AVsMUQD25CJ5HgN2gDtGUzenDs6cmRntreze",
  "key26": "4DwaiyYyCEHNMpRNcvYxiEzA37AYwioLKbCX4VU4vsMW8zrKQqWWmBgP5xn2Jbu23NZKqtr9xEkaPFXPCWCkGFnX",
  "key27": "2ADNPdBok7xUM9ozGmgmRUBmJ3ek3m9hZzjRLjf3SEHTpw3zVc8K3q6J8tjbmnuHwDHUoGfq9hY7MKMGMrKLXSaT",
  "key28": "3pU6sen7vG6XzRmTHfsJ6H4tka1Rh8kxgHMsUWMV5cPciTEE4MtyQ3CFXf7dPJ65x9SaMLtQjuHXndfwZgVx76dC",
  "key29": "387YzvX2Xq5Eu6ysAcW8RncfbD6RkuHqNznfhGWXPAR7MUdmyAJsJnyfRZsFnMpQp39x32pudXHjZTrqXcLN1iyH",
  "key30": "3sVJGUtimRjKJfNhoAs7AncKwkmPUe9XnPNbfuDTkFL8zoyusKbj7J8Bncpay7dEXExwcdyNpDqrZB9UUZo4FjXw",
  "key31": "61LJTqUaj4ZHHDWrDo4HhbF6c9uujyBcK4LisWf8kq6T1oaTWSTRuRMtr2F7cJcXCb1Hx9zFTvEvdBDtEspQfp73",
  "key32": "2tzxgkm5mh84BY63hgaQyp6PzmtH9cFxQ7e8KGbi76rYxgNmH8ZBTgzjpohBpmAi8zPNbeP6dwiBnbMqxRL9Ccen",
  "key33": "4w2kqoDecnWrHmKQ8x8UdwBYuQvswLRcotNY2MrxvMXw65cNB2oNFo87896zQocDSEvxoVYJgGWWvzonL1kEnsvk",
  "key34": "5wxcAhmh1GnAnKEx8E61eygoQ8TjQ9DbUuk8Vwt9hTLcDgnt6FmiR2oXcKi6rRVUZoJakhd6qdP8YXs9wYipwJbV",
  "key35": "4skfrHEoPLrXoBWbDYNSrBYWNzfMoHHeUzLLPzcmYHML97c17MH7UNUZTSM9MKiJkWQZjTmHXycnXDadaNAZYXmr",
  "key36": "4pFyrw5oiDR2ZMZ8sN4UaqFEvGctXnrqbDwB5fyBd2Gy8Jyk6BK8RhjyRG7y2rjUvKjtzNmgwQ54KdqDK9L7Z69m",
  "key37": "55vhfXg7Ld8NpYDzmMxEYiuLEeaBkQK1PTRu6WmyoQsdzoSv6VFoKKktKhkFs8BGsfBQg8MwR2YdjMaTDKWviMBu",
  "key38": "5uMEoPegSEPN7WRN21FJkson6yuoQKXfbbgffs6rbbZGamCQZRE3syykRAC6ZdSFSWktd9Ywky6qLo6LNXSj1rWo",
  "key39": "3DqP6jX3X7hEQAdaqJshZkUumeKW5wmqjoBf77iMt4hFuqD5pQPp1KumJrGtcSNw5vzPauZm7HKVavkFPWPT1FRR",
  "key40": "4d45gkncGQZBUv8rTm72Q9PNru44VWjsJcgUojsZrao4xcSuEbjraK2GAFLH5tgWcDFrBVdAYKKWq5MvZDYX1GeL",
  "key41": "48b3RaydPWFoDqxsKtN4gpw3RsCsXz3Yn72V7U96bQ6wQcWkxdF1iBkHfE5WeozvqvgTu5YFrBB1EyFxrbaPYRMD",
  "key42": "4b4mssfjZcqCtEom8QFQNZrCdgnctCcbGrYDmVDv5FzE5B1rX8UE4Vv5LhdceXNMTnbpkgXrhRsMz1Yq3ztVmHkr"
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
