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
    "4ysrXEADhwBEmdNorkoCahrQ9cCHoabUCRYJKpyXCm5YoVuRm8stU1Fgz3uQPGBiWTL1XrZHuB2s8XAKeu7hkYvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DhKYihEpFXDyyHt8BWZySkEBVyvcM3MrF3teaqdysVFtLAhGYbQpKGmk1qz71QjcLqMchHVLzNKQpu12aJd5jga",
  "key1": "44q6arP9YACPrfV6NeQypEDefS9cLCxRhBsDKmEpK75muCctz2vr1awuquawfyNZxX7HFYzPD2fRW71vx7GbN29c",
  "key2": "55TqNXDBwFmBYP7YGzfXKnkvMzgGdEJ353hqBJKDKe8qsm2bNDtWf1umyiu8sXvkC16nNMzCnHrGhV7gtUefpEX1",
  "key3": "5WwMJPPbTmcQP3M8M7j9iAy5x4wa76rCLurWofB1Me2AfM6PZwpuymYZmYq52AYuhDy7J36z1B3vavMSD7K7odvT",
  "key4": "3QHYYk8xXZMu5bczeMupyswqaGdUBBLfDDVKD44HJSbpNPeTC2V74cHfDy7NqKZKw5An5SV4Lpfuqb4c5ayBQbYB",
  "key5": "5VmTW4qgJVGKDoprDDQBWrTY25wbBFNH2uyb5Qtwh1FJHcP3fz7f1cj7tM3kD6qGKzmzvjVpLvhyq7RqovmuP7HH",
  "key6": "5trf9myKVatXvBfJ2bQKM42fbt9te3R6M5jcGvAWRB77RNb5uV5KguMwZj4EGcVNwegHx8a9NBQQqAnYEpwPQip9",
  "key7": "2JuzGPWf8xMKEXYyoHy8cej1csZY7emjxeha5eYNuHvrRUQ8gSULzB8FXtZCAYvndbWJGYZmNVJ8CEsmDs7y29jG",
  "key8": "2rdDXyMqaCio1v1pWeKmbdonJ7SC9Tg33WoKuiewXUq8LZeGCiGzAykTncKyDWk3ukkazun8Wt7KB1S54zVRDbz2",
  "key9": "2gBqoXZKrGPgo4QLUnR9czAncPZ75Qco5o7jLCwofkGATfp5qMNhhaPmkxFcQxiH4ckFH7jvYjPLf1pe8nqon8sA",
  "key10": "s9JvDCfY51juZJnbWy4ay8dvgyHNyBjh1u5ingxKXHF1GBTeRiGnvW9utUXjfxgG2LypiEWnRrnc5MxT2bpFeWQ",
  "key11": "247JMGX2MAYhXcPf3Bo1hdZcwf19XBUaEgCK76VJTsnRzhWf5Gos6HFEL9DEcFNd3m56Pi6LGRpxnfWioiKoWqEs",
  "key12": "2uCgoG59GUVW16o1yjX1YTDFhP46DsS82cdVrxjR49Un5nZM7SLD9iGBcEjm8cSPypsx2hMdykZtKACVXtbR1pdd",
  "key13": "4KVqHPpQXLNmPzmG7wWyRU6aSytEc1ASCyiM2YNowp8Kx7m6kj7W2jbX4PP9bHfSEGevu3TfXX2Jr8eRoYCPxSMQ",
  "key14": "3ggGStuQkp1CmDdbTDYusjVTbsHNssBgeW8CbRnUR5DeUhVKKx9wfegWqcJvXhwqfLoMbF76zvSg5vFoFJ5nh98P",
  "key15": "3KEfdqG9bqVWkcY6nKsxc76CdF9oFdFneSnExkMrGTQFrdJkkndANgzgnb4dgex2j6VaMXQpBdaXvFiFpDUCWMEd",
  "key16": "5ThdF4Zbrge2yhuUcXGpvrwv3dbffoU87DgPWWfNTjhKF3pLCqrfDwSwt5vY9dYcEeRi4zMMqEWKAnNjfd1Rg1X1",
  "key17": "5GQ3Kgnm5rLJKjFZqrqT4HPaiB3gKmTEyBkp2u613rPsSty8knLXwB4N6GVBgqYDZYSq8XRp2V2sfXg1We7U6XCa",
  "key18": "S1ZvVzbp8STTRG5LCwyr7wRt4eQedvnj4Bju6FRRTppHvXUzDnddBmguaX7oTFoWq51FHTnw4x7Lng6zbhciNhy",
  "key19": "5x7n9w4RoeYxJxfTPxW8SZdRjy2ZsbvJguypW9YfqkVdMfChbtbT2HydqcVcL3iueikTAV78Sp2QEL7hriQEbVZE",
  "key20": "4kqSpwVgU5w1wi6KF7LBkg3bdLYFCScvfnUYutWmCnJPNMxrhGyXXSHLYA9pBraXv1EvQZMvLhc5LscPWMLyEjYP",
  "key21": "X8Xd6zWd4Xw1HvbVLexECFug2NuEdwpz7AnsDQDVBH7K75QCD1bc3nGxKQTbM9Ta25HRt8zgspciNiexyaFcTXL",
  "key22": "3pUVbFqTz9LXwJuoq3yd3NZFCM4tNkt4hgJErKqQ9TrHpFjVRXG79sjsaUxNjMBKMZ2zDLkHzYrTwytTiWXEsgX1",
  "key23": "2pCiCUKc59idVaFLNx79qjqD13vkbU8KHDMWmos5JinB8pra9ufAer9wiQKZjXgyvoMRQziWNZq4JHLZiC3yt1B",
  "key24": "5LWF9kQBEK4Kw7B4pjHb9DiC2SoU8cbTz9zpVbZFdLJEYWWddPWZ7UV2duKCyBzcsXTwqF87Y8jABgFwkQFapxTb",
  "key25": "VMG5HPnM2tuH3B1xvvEWdVTSo8W4CQVV5gRyhTqBsM1LhAW193UjKi7azfbfZwy8yHsPmLwxnafg6UFuAdy97wT",
  "key26": "b9Uo442Q9caPcLD4SS1RpWPfm9vsSfmYTDwiqE9Sw3ADpMkw7F2MNrhV9QcQgpYjqiDNJNawfEqDYbG5vataUSw",
  "key27": "5C4LFKckRiXNrF3DTKsVCscea6jxxLjPaZEBm9RyzUKemp2TVxCLTrTYa7CeEkQhKxrxJrGHmqK5H9BdnjVnXrDe",
  "key28": "5RB1yLjSqx9iVHjXbSN2jfaMd7NQMsbjNspzA3mucMJe8PgWHj2fiz8tgwN1AYevskGBdhx8cAewtA275Cy9MtgE",
  "key29": "DqqWV91uVcayZ8v1yGPfdJ4U9R2KBDNwbKGMNg2rHKKuKhnxN1mvGD6DYeRTZ2yRdT6wtB4Je88tGToTyi7MkFD",
  "key30": "48e8jrcGqezjK6ELUKJgdSaESiPiH1cmjHr5ykogAXwdCvoEpKLQcdLg74t9UzP2WiE3BbTLiJC5zVSFE94vNW4A",
  "key31": "UtqVnoSuRiftTfJiBRG3Y4fX9LZi4zbkJ88NXz7ut948jsV995FpcsW64EHkvy3zxDY6v8WPg8CRQfEatLgjaHU",
  "key32": "3q1hdFWRyYH8C1vZf9ay3GsWhKe2D4v8YZtRhFiGWGjAdeeDa7g77bzYQek4M7DFHQtz8BR1m9PPkhV96yc1qtC2",
  "key33": "3yqZFBeZgCWwFstCqgzj62ajf3urkknfkGc7fCpd5uLm8ekXVb8shjk64TKu3GNe5hqRVtaycpW9XU8AxDuE9r4G",
  "key34": "nXUjiLaDsyLqqxtUdmsEFgp2pkwbJDpPgN17M3aXZBXpHsftiMsqr8jQazYz7PA6R3EFbXaW1d54AyrfgucZFYj",
  "key35": "gkD5rWkfFbHjLfiZ74qyoiXqNKNqCguPHTJAFnegLiQvsyR4tcQFQ7WW3gstk7SWXAt3QnmQJAssM334i9B71Gj",
  "key36": "31m9euBi7rWnCvcyFEQgHECH9p7xm77nw55dvFDpvNb7AikQjXAWhKxojECHhEXRfhod4CXcHvb7aRXwCLEEFkeE",
  "key37": "4kCvLfnJCTZy1JX7XCUciSBBYDmWbbKFtJN1A7Jg2CmCTP3tbxwjaJuE6QJGhTwqUbXWXEEoQe8mDNWbGnGSVM4F",
  "key38": "4rHVbx4okRPVWvyrNMEznUowCEHFs69YHNMsJxLm4Upt7VBEZCU49tsEfSAGW5yJVgZdggEwaWAzRaJDd4anarTx",
  "key39": "fmfQVsxwygnTqRTxXurtrEEKnsuU41uamEbUYSo8joVvJ5Rbqmgd4XgVD91jDuo5KH2dQEGbLqrJ1bKwomc12bn",
  "key40": "Pxy5QKV3cjkYAiLXbxPJHoyhYjgs5miTBXUzcxJdJnR8LSE5FegRbMdozESrmhCEKHnjoTsca1QfgVzyUqDGtwk",
  "key41": "4aiQuRaaxi8JQMp2vKzbm4CFAkpABgsE234DUkLWBNvAj4GzhEG6P83meF1CD2Yq7UvRT4Q9ERve29cdgzHBjAG1",
  "key42": "ktYz6kQoXgdypty2SQQ8FtfDooaZuwALLFTK5CfS16xYXtJz6FxgAHFdfAAb2UuErUPA9GyNcxUJPshkt7B9tSk",
  "key43": "5mFpYFvT4ySe6cByVugf8EUF5trWh8j7fY11ckCeHBXy4RLEwvsQ357QeLy45JtXKBjCAqSc2VWLEWxSyj9wXci4",
  "key44": "3EiA2tsQgqN1mLE2ECwKzc9j38bAoAfrQXeMe8Xx76FsB5sjyFYpLkY6ibqfsHZUjtSn4TVGiKgLxpQ4RVLTwgN8",
  "key45": "tenHzaVWJfQR2p4CTm9NwtawaZxHG9vwcfZa4XpsfrHPUV1NTNHWDJ3rfkYSnCeNpsHdJpKRyXSCxeLxcFK3mGh",
  "key46": "2zfJEhqahRmLUUaXpSbLPTA2t9uCfLGSa5uPZcFtsCVEUHJAstgeA2ZWE7oZBMGg89CBhFvDw7ycepYzM2tBFZnq",
  "key47": "3Hordturxs4Af3ySC5PydA4Ti7kX91sBrwWjX87Q5bcUEietymrFUCFs7frbh5rwQVMvP6d3zoYdAzyMPf1PRceP",
  "key48": "72RbYiUiHPQDiFb3DguPtZ3fg9zuSRFUXU9wSznZg5dVy9tY1zX8uMupxCfiHy6JEQ5QC83Y2ntHVFYT62yFZj5",
  "key49": "2XXg7zDw5dsQfgPt8EePvTq7CWVDE5aDbUbSFpjFZD1zZVHvon39dWzVXNi3fCDPec3q1v4Dtfd1Mt5vQcUkoZJA"
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
