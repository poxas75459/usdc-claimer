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
    "3xTGpm1gPNQPNnbFjLHNuEGG3kWw93eeWmWfQz5MUujPB9LRmiyRDHKRkQevshbztdgGMr1ePp7KEhctfJYDcs5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H9FvSXQmgtAkfwGmU6m9rKW6gjvHyzhowMtSr8VWF3r4sPq8q37DrNkH2orUvXvm8T5jpo5JCnpjqYPHeXzfjHJ",
  "key1": "amty7M2i1F2BedAgf8Go9Qa8ksGqiga2oZEZ6rG6r1i8HVKh7JUkZKPcxTihryo5wNRfYFqpdDpsB1rnr9FYfS2",
  "key2": "29SE4c495GuwThjtbGDCtv9Mo6QshkgB8ktWy8tzkRSQ1Cf7nbtTnLd3bRMgXcBHN3BzLHtfAVuueerFNLWMZM3v",
  "key3": "4Uv3xuTNYkmoz31RDumQxDuH3UAZCTsxDeSdy2n6TDG5mXmoim5qDbE8W4GQfFNMs99J39hDnGXcMqtnY8YYoF6V",
  "key4": "DWeeLskHvfKRRGKrEDSa6ZxT66M1PKrVF7GZT9RmReoqodYie8mgNDa8vY6yP7jgSxAzzxuPBLxZKfoLCiUwK7m",
  "key5": "369pU6u3mRuSmiesvc7JvoekC59j77PYL837grCK5otApxVAMtXfQpyMUQYCqvK4twryXiHSSdZDBZLTzh1PXW6V",
  "key6": "4i8hUDCZTCGhWa5hbtcHKfvQRLgTW4UUarJQMCdXvaN6VXgeBxUEgSPvmzJDbUjZmiXhyRR3DXQ7b2NPEkV9YWw3",
  "key7": "5gxzs2fYdWFszVRo6RuCmQysQM8HkwMHaxzHXzpx5ENz9PSTAhKPydqgvevorKwiw3CZKt5NeE5jX5a7WvbR6jwt",
  "key8": "4TGbjqgkBNV3n9FxbrVKhaDXv2mrvYUq1cH8mHbseSZMJ45HX8QSVchu6Mgn2YCEBHEabiDVssTcYGBJfQNU54aa",
  "key9": "3poVag82ePiBhgaK2T4sp6tDRvTDriZicJSR2wnrTijY3JGBXAAjt8bAy7UQM6x4krPmr4Swj2iF7LcZ1aRpKL8A",
  "key10": "yLTJH5JjULi3X1RmiLooFJ3ajZmHmE8DXMv4iekTCsW5oaZtwJYbZwZaQPiRVgYohWuie9Rv38xXmfTm7Xz4XB4",
  "key11": "4vTVcfvNAb6hJTMgZHrjFi7m1fPUYjGzkUpcWsLm8iSaLFLKdzH8c6u68Jpu97s7A9sqQJ5WN93pxxkVVGVfBRFf",
  "key12": "VYZVvm2xmAgCyuJtqNo2SBUTAHmfp5P1jQ6KovVAQD6s2wvtXCJ5ecmrvy5VPH978hhCEV45Vm6M36XvhWg5s7k",
  "key13": "sSutjWY5hhqWS5q6eoNMTqAkhwkiqrJWFJwm1UiY33WGDhQNDij2ZhK9UfjFwhHEg1MemcKnvoitRwpkFWktdXY",
  "key14": "313QoW6oaiSugmaH1WuJWyP8VhKUgDjVBF23ovJ6Um8ReFRXYfbJVWaheQmzW6zgpqgj3Kg58XYrBwKaNP4DBvz3",
  "key15": "aWTS7YTkqnPSkBeYTWbezJjRytTiuytzTboRPtqEdyGp2ZVVJuWuP9mHc4C64gSPACSJxcYkamREW8qqQ1jZkVM",
  "key16": "2v5r4XJrskLNYdH9e4jDKgeDdhjy4P8bigjEKnPKzekkHzEMYstrn9LaRdThU6rGcFyksjjZZhPvVUDQ4qVTVFy6",
  "key17": "2ZuvUUUSweD16gjZfaDXbYJMvNNnN8BvGKevowMT7KndgyotTGrFkF8Sq791p5Ycn1aqwfmNrEEiWof1Aj6Wst7J",
  "key18": "3mgTP39jkQmpsvqZW5pq82SzZDr9GdP1gg2yRvBVLLZMacZeChwLzkzY8KFv7L9m3STcUPNNNWNUPWjRnRsHZWbA",
  "key19": "42XTjYxDvgvFzdM7PrmPYQk71dsYAAmRHUui9STMMhwrTWo76yYKRgYwWSfFYhRgeV6gsbmW8Gdxec2vYfbrSLMJ",
  "key20": "5Bypkti3xAhYMdSECPx8DFM3Ks5uFSe2Un9wS9KH6x56nsA8FhFN8cjFZLdqUfD6ZqPf4kPqbEnt5usm5S1WkHS1",
  "key21": "3ZArUKUjimu2jvJ72VgQ9YFUCQL8sV2sJjda9de1BmHtHpNG4vFBv64qkdi6AVqFdrnch91rYSWbEM3cyX4UBBsD",
  "key22": "2fhxm2x1DHk7pA6ebvmBdVSFtkXUYcsUryYJW9tZC3MJsj2hB9zQfELLSLCy6oxbZwetJE834UeJJtRfg7gU6JLC",
  "key23": "UMb4XVzdEUegbz97sUst2X97duA6fPAWAEFxhjCw1KaJzyQgxZpnrbeYnSY3GVXi8vBDkzZZ7rixcnojxaxCJ1F",
  "key24": "3VzheehaZoDw4HvYtb6V5Zpw593wV6m5RjfHJ5KvT71zzPaV9Qc5GLh66xNAy3DMvbWNVcHNY5Sf5KrkszUdc8q7",
  "key25": "4RhkgAXyZhtghgdk7ccni3m2WbGKGsqxc955N4ogQqgSnnwF8YPNqNF1ycNkqVUH4gmyLf7zjRWrzdPEPmBBy29j",
  "key26": "5uYV8GwTmGgZwD9Yj4h5KT2ZxqkgzshAFRJf3oJFmA1qrRFFKVsomAcsnyEYJRcu5oRx7ekPe5nqjpvJfWnN6XZt",
  "key27": "2SzfSsE6A4wtQEexeReszUG19ope1peqBLVA6PZUHojsJnRvgjjkJ7B8vHYYBmC6FMk868z1UUkpobNHWCwWRNZE",
  "key28": "5xCEi2adUHgzS3xjNUXXMt6yUu3SLEDFoc1s9UKYMUsR45wm9ruFhWy2tnyaoUjFiKFHTxDAX1QMf3c9zaG9V4Nh",
  "key29": "3uKfyDDHuSHE4Vwwu88S8XwtgVxcvVSdsKuLiBpPXws6CD9EzTMip7umoCYS7RFiRqkCXhh9Ezkh31sBAwbZyJWw",
  "key30": "67Vz8RCbpjy6sKj8UQjQvco3xzZT3K4mPVHSSTJVPr1uEYefY3bcwwTfuinXpHiWwPdwESpjbZrKHtW23M3nsRjU",
  "key31": "yr2ZemPdYmT9nYT97kRWk4hH7BRCoR7VMRPmGXhd7obh3B5trdYGgpMDoBBVS3Gbs7e7MAhMY7V9tVgYZC9v7bj",
  "key32": "5BZHtXUcJAHnKFxSYLcMhoJgT6q2wUCzSXy3q6b3byPG9xv9rU4XxhEzYbJLwDCV5HWCVE9m3NAn4PX8gC616vpV",
  "key33": "5yESgXRbbctU1EaDqRFJCB5udpaajidjBdg43KigCqfGiXJbkbvfuRufT3zNMRokN9Txtqbte2W55qKpVJnkn1q2",
  "key34": "WtEeZJUzau9jQ4wP5mcCcqbGHVYcHJScRTx9derCw2ZCUi77pZMQziuWfxbiZc281dq3ZcHkZQ5TxV5fWEMTad1",
  "key35": "2w2eG5sAbQQJTQ6hXfrL9BcnUiSfG8wCWzJhKsBdpm7JWXaWt6mdsgiMRRCQQ9ZJxq2FAdputSwhSacaLwpRNs8v",
  "key36": "vBBEBxPoQXWjr1GFb3cazuBBPn5Anw8EGNAjzYkHdYEV1R8qEzvW8XdGWTb5j7cyj4NLJGZ9zPZZ4taNRQgVZwX",
  "key37": "3Zr7iJoNNjKL5Nw1wnPEH3c3avaTcWmFSRXgoHECpoPfzbmob84nh6APnJLZxhjvBwTKgLAxCmm9WpoA22s4foLV",
  "key38": "6JaKfLmdmfMaSFPajUhhzFXEMZMGv53wo7CbHF6mPfD96pyfdjJoAL1gZrZzxFi3abfwj5nKX2k9sQzsR3MPavB",
  "key39": "3WDn3rZvnvoTRdBQbqAgamJiYFECA1DG1esqmnyVq8iHBQQLPKSKMd8GwTRhJ2NzKXKGShyfymP4MLuJ7HXW1YJn",
  "key40": "2ajniEvW2NRtzTp3FpPvxY5u8Y31KwiNMFLXySXNQwzvzcB1JWiHG4BdmG4paQWAek21SEBBX8hrqsbVz4jAJnwr",
  "key41": "3MxwHh6reey6QQrfqeWjHR35Q3as8GYkD5rHTa27X2c2P8KBgZn3vAzj4pbFa8rLG845mTMhmBe9boTzyadR2yhW",
  "key42": "3o6YqDaLTBYQiMZYgc4ruw7RQRT67VqToFxLKbx1cX7vAZ4eMRCbm3f3dbiCECbazEjCAXjPqs9Hf9uAvjUY8QS3",
  "key43": "21c8PHMmjjc9T5XUdAENgYhCXf2JA6UEBNXZYYaG2sMGBZHU2g3yuTtVF1t4qcBXUze2vYGF36zHJsVxiWxFDaf2",
  "key44": "29k6ZrmR4bxAJEvJHE8ta1TEFYEfHZSfufyrQTA1qSnPYHdp7P43makq4ekxv1h2jFhsVz8DMdQRDTC5NydPgycJ",
  "key45": "53ebfEe8tTiHdQkgFaEcqPfe4YHpbD38bCpo9LTdWUfaXv38CJGZ9QWVQWegrVoWGspMbxrWQs9GJutbDFiFX7wY",
  "key46": "5rQ6CPZ4qfpT1KJVsJTqPyPVcUxg5tZoWhmcBzHb7NsB2it5a3ionQq1SxsWGowqLknDQ7EKNdFQzY345R5rhhbH",
  "key47": "ijEuDLWoGGTQryduDwXugs8TxNPz1qnb3AHw4Ji3nJqSTvXtRGs3mvb6wbLxR6RjCCCQZYsgBUM9DBDFUAB4pYi",
  "key48": "5wE18Cw5uYztWaof3MRD7R5idBanj3S3Cd3w7ETMrhTmELmQnnkchDQ5ULk7ATDLwnWwEreUAYuk1tXvvMpigV7d"
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
