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
    "5YEqoe7zhUcYMKEdXh6ZfvSkdGjQk55ykV6xfc8nGMSwBAJmYYbfQMcbw7A3BY7ri4GMssDHiagpR4QZhytbTk87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47shvKpRMvseA8geLmrtnZGw8HW3cNnAozWpArkCZ2jPQY8Vzm9MJzWqrZPuNrKXAFkqqUqKVkDZNJt4JyFAQyBm",
  "key1": "5DdhSvKSF7ecuPwwNWErDbKG7hNfxDJsVQjT8m16audY5BVeK9jagUSAxrWV3Zj1U3DM6aHDGMU4S6tU3qHjYjr3",
  "key2": "2DokeYuh5wMh91qqbBivaEPfKsG8Hd9ahvrLCKmphXMYDTH2CVoqAq4GdMdU887rEBGskyE3sRP1PPtbmkpMcLsT",
  "key3": "ESqjhRL65hmUpiZWdhuhpFn97Z3yRFjyGZGTUYNoDcE87jHXmows5amtv48QAmt64RJDZnv8jP7pdpFYBwkRcWs",
  "key4": "41CuoX3DH8buAJiCrVsEG4sYeLTKCoQejzMVuPYED1UqQC2Gk6GmCxVrRmTMPS1AztQ5gh7h9ikQ3GEwbqpuwEkP",
  "key5": "4jsW45EwtXDPduVACzkGxrxDrhSR8uKvFyBKX78wabN3pgtem3EauRurwXe4c5PpNXDYrLnCBWV7Nqefb39LkhGJ",
  "key6": "4d5X9TNck5YiiSJLn7SvP9yoAs3MXfKAPwnwL9Qzc49ZbZfUg4rXJWwxunqMNHSQTAWzTaiNw2L5UCekF4UNwJCX",
  "key7": "Ha9s6YX8zYTx9jyQKoK4k5JXUu6dExiU6VUAtnMVG9ffAWTk8CZEu83kpxExwTywMKNy2J6GvV98WnUXzNFcCWw",
  "key8": "2U9PTEgJ6MPhkBin5z9VDQoZdMSCUi6ihBGsPAMaCqA8b1ZD1AjtmwuDmL4WmHbJaudLrqRSgYCGgqfLGTVFWqbA",
  "key9": "2g9fehcCdHdofHZefMNxVSmiBCq7qDyU99gJ59Sx9HbCrdBtQ2DWwTm2ZVB2tMPiLi6ZrGxqTA17MniUHm7si4m9",
  "key10": "3jPuUbyFywY45uVnR6NVBSGKtiazrjXogeGce4oM6kxQdfE66cQ1xnk1KQwnEPqAqDPqZC4SDKLoUAubPqoaoC5V",
  "key11": "33ewsB7FmVfwBWKA9PWmMH7u7ocmMvUZDkPTzq7b14QYNqQiULAmNDNfgaCxtNnNRAd6fn2x8FLMnY3GMVEgjCYM",
  "key12": "4MgjSeDigRX5FVFjUzSPoDDLHdm1U7nnKYQVr7iKzvGX3gzEwEYpgeGDn7941fkcJvQ2fEJwGK8bAXqy4nXymVUv",
  "key13": "ZuLEi7jeGZ7rdyRJFqg4HNChoBQD6avA3gAnjnvdKqkCCiMiKmCntVffYvhrgabqufVqaELhhVswdWWVWd4DCda",
  "key14": "B9FNCFVjGZS44eT1n5UHma4RXA2C8R1482V8acVi5bSp43yGn9BgSWvPmm7mnuNBnAcjweZhydsG5AGtAExBDE5",
  "key15": "znaKXax3vNuX7eYTHAzoc4xfbC7b1DNohCByvnHwUeLaW38qxr1daTXYHRDdf1MVbYbCCxfbCJQez6tU1D75LvV",
  "key16": "2TCzGJXbyVhJKZ3gTbV71oxsH6gkz559veRuE82XzLLRTzAGnZZNTW7PqWSdkD9H3vgd1vXUWhCxEN9PpHiGUQM5",
  "key17": "3Hr4EjesEgJPptsqQ6WQunZmSRJX2EuJK58H7sFj9n1SvJ6AG7LEm1jWF9jmkudLEdWDijfMGERmx8HHn3WF65QE",
  "key18": "3YwHDjbKNUs9hJT16Ro3VfhQFFdDCbvy26F6JEpqmHmct8719TDbohV1ZjVkVmS3W5SDhzi5g9nucoiiqUe8xEdK",
  "key19": "4w18bXB4af8A6e9cXXwGbmcXAmRkGy1ZszVUDbAdx41QaensMR7iUhBefUZCfW8iq6kcJHyHWbArMNwxHU54Topk",
  "key20": "2W5pEM1pQqYVbS1VumKwG9YuWJrsBUbdaavTWuNHSSGWNRrYeDRjvznihdaRni12dN2hKWrf4D52SQqz1tSBH2bq",
  "key21": "35cS5FvgrpqrnrydV5BitUzDkvFyerNRjDTmyRuqZFhMF5trrwvuWXxoGdSaJEuc8ofEx2EEY7iAe4fWVeVwqhSd",
  "key22": "3hD3SfuYMYmKmafWCfbg6LW65qMXstBGGzDtZYk4wjdcFTmANmzQM5rouRbTJbxQDRpgpNoh5Zbe9NCeADE8CwgW",
  "key23": "4uqnumnTQbFXYSfVXmytU79D1hHoioD7BMJ5BA1E6aVJwwqZdhsMxJV1wp5dd1sfmVQgBSkNxAPV9ZgiqhGikXs8",
  "key24": "28awk8JrVM4VBchPUSEWa4YDZmSKrxjyTQzmJPgAtCcbSxU3w6BAZ26GHLVKRVxLFZZBHuU7j3y3bYwyo2ndyDYp",
  "key25": "4uXNiujdTcvB26qrDWFaY4YuHcTiasJdZFYNjFkJ5bBwAg36ezRwqUo3pGMzFqLe9g3N8kTLsdoT7eHt6CHeUU4P",
  "key26": "43FzKU5zdvVZceP6s7YuWXS2ubf8dwP2vZDFnsFuVBsMWuDuvw2xuxn3FmiXaUkQvH8Jpnbi3RYYaoFqkpQES2Bo",
  "key27": "2PNiuZNZfhVaMAVBR4fJf5oUa92wuTVfU2rCt3oAJrybnDwfeWCAzZszXyt5vf9HEYKATcxSd7yXkmzd4DaQfaGn",
  "key28": "kjjJN4GNUhjz8uFLMwZrYwwJ5TaLV2xKBJeWuJMDh72JM12CzMU5vfN3rJwQrB9kuuE1SBYV8mebX1aHi88PNJW",
  "key29": "3krVYqn4Da9qjBYwHHAdmTrvxzAyN7aQL67DTAuQAYxKmjaYSpPFrgK4dciDqFDEfDtGRykZUtUEEzfko5hknT83",
  "key30": "4pSrrZQ1Xr2D9gAFxfnKE3n43ZsCJwqaEvTVQBgdAn6WZ8HuqxPUEpS5zzWybVfKNNdkyqYxDgFq8pmAPGe7XBoQ",
  "key31": "pN6aCEDeMTYQpoYe2FJaSQdfAAxyw5icGiW4iJdCxnUPXZAppCEHmdbSYuMrwHQnumqDG9BicV2ScAWyTcyYcPT",
  "key32": "4rdm84h7GZzd3e7SYoMbptHSQLPbMzdWR9FNxcaQDirXpqKgKME4nuo6hhbPaWDw16JdiNmBu1z126vYfrobpeZH",
  "key33": "2jrKLEJ3VQ4YLfk4iNPABRw2NqK7mXCarg1t7ikQDPwPQRUtXGxaUYV7fSJhLBWtiXdLJQHuue3zmVREQCY4hCwQ",
  "key34": "3PRJHPcUdnjrL5ihaJMQxFfDdUKYfkpV4RrNMrHXt5PjRbyrUsCdheyuKRuMrvr5rgRWZLk5mpjWin22exUMRFQM",
  "key35": "4jvpMuYnaLXsXPJN1fDbhnw2hN9GumbUdTbAjgWNx9VP3oDWfkYMbve6LNvJorW9z8eKVYRVML6AcPZZYRpPXp2o",
  "key36": "39S3h1avDAgYWDkqARAp4RGRPRsQcUAc5avv1KJvjfjG47nVd6Co26qCSSXNXc769bztYyUJWc5iLdRgVZVXRXLe",
  "key37": "3rsnKMGkj7ssVtvXghRemMqjmvyxabV7UkZwui5znzAVB8Ljiq9UHDzFzMCJjoyoBmqp8fzwmuWJGLn2xPY4DjB9",
  "key38": "3fZjCFkTvH4kc3zJdfbNaFSMdgDvrHBYcYrpYC9Jb7rNhCr2gLuLpTpgm7BjDFkyjamMTLTE743MTnv5dkYCVQCz",
  "key39": "2SNq4ECzVqx1ASCditkPXHuzbzkmsCN8RZb4rLnkJSuE9LwPM2zWpn1SsNej9ym49jayiz2E7cf2Knxh6UPqH5Te",
  "key40": "2UttPZEyGTwYpmScYLBcE9ayCdQeC5ER1qGsTsozQc6fA6aYx3jdCUrCicTAaEvf3rE9hBym8sYnkSD1z2JvrMm9",
  "key41": "8U9knmYXGJtEjQRAVpG1zBsevjnmLizdTcJJ6vpwhrzKnj7mRrzPbvNF58LbdP9B7MYSoE4pi71jrFxYdCR3MXL",
  "key42": "52EHQPQe6xtTKkdBhsHJtqEFCPBajBzAxn4wTghFLvZ8dNRoCFrXWkeVKYR3sWUELg7R5yTqq8C4thL37seacaxB",
  "key43": "5pCmEoMPSAqa3APMVsr7A1QGwTn9TDnRhvLUfPSXjwWHXHZsbFASWDjchW3cqKAyHUyRgkxBqBGqBx1ZpkwBk3M3",
  "key44": "3pEqMgB1ai2jJEx3eeZotMt9TU1jgYKSGGuSkXMKtyz1HbmhAYcsbWLgWAEztTbodReGtMRZtJ2r9s7nMUio5Ke7",
  "key45": "42TRYZcY8mcMx8AKvsE47dXaodLiNh4xY3bvYvQwbiZwn6DoB7rUqZQT7S1fAJopQKZ6n8iv7BiLVwH6bPNmptr8",
  "key46": "4ZqjBrdxifznzVb4SjLomY2Sw2vdtZV6zaFhnszeQPzxgrs4oU7XxKsQjjKZC6iBSzbm2dYMGBZj71Tm5yNVepBv",
  "key47": "2MtJceWJawtSRFTbDajmVZh1vppvt5s27GnSbkypXzcHyy1g4468Tujjac53TBbcDe7wZTGyi7Mkz6kEEYf5Sez5",
  "key48": "2niJRk2KBVNJFLNdVaoXzi6ZbFSw522pkXmifrxvegt8xZ51hu6R5iBqQb66N2sKnrq14Wc5yKs3MVu7U1jFeZ1R"
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
