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
    "ZWPKn3bytcxUP7yQMAA39CuWY3yXHgfGNp8m54eqLfG9h1Qnkq7WQUjp2kpiZMo5dJ2gE2SpkFcSYJWc1ocHTZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qe1s4EiTWTjvJjCBHBvSyxuPZaqqfBfbxHXtGKfXxAb2U41QHrcBh2gcmHnUps6G1KZYEa515Up4APqhQKcFG9P",
  "key1": "3TRhVkfrYVFrEDBz6ZbVnNghjgyStuVtb4YLh8gWiNzcMFqrFoiNmtQ4JudihgP1ZY3LqdRMSEmNNVB2TY2QWuks",
  "key2": "2RLbHxci4HbE2cvgcMYUB3fVnLJXPw1Vt6Skp2WDFiY3S3xULDg4bdKesY9HqcDxxnasRT5nQjyuzx3vt118fGtn",
  "key3": "dg6RBcSGQJatPxi9sA7JPHG8QxP3E98PqeBbjHomZrFAQpTZjtYqfg6aTKFQAdNuj47tNPHbCLXx7x6HKoPff6z",
  "key4": "4L6RAmSuPEBsmnsF1eFPfKJD2Vs6o2NbmPVHchSRHF5sy1u1Cvz2YEkXBWPycLrVmS49kPcS15tndhDV2xVMzV2a",
  "key5": "4FbBmBk6ws2LfZDnJRKpA81i4zRpW3Z5mHnmRTycDbJnZEQfyXjSXtur84baGAAEWcNygQEar28L6UqwAiD9fiKC",
  "key6": "3q3ZHN95TdRaUeqUTVsPgZLt4F9VKSDjKhhS3Dkg9qbi161q5Sa9juMpy8xSLGkkHBYM9GkCjTvWt6bEXWADXdbk",
  "key7": "3ePxVyQpZSL14yTW8ZAs8iQuCapb4cpk7chn2P24trEkwAxJxbJYdtBMQVRhVgFwJzmdqfYZw1Q5wS3Lsx4Sk9A8",
  "key8": "4sxaXxL5qfhhhVMQiV9YLqbh6dShTMe9ipWGjzEKbPSgtkw8c3JMyeiqzThHMebAue8mHnC6EKHBw4ZougwAfq2q",
  "key9": "5X7YjCtsLugkwP6ahEJNHTjcCmZby1gUqy56jGsduXxbyYy9CnoDmjPEc6uDmZE7zMoDkZuxhXCjYxi5VX5KNBsQ",
  "key10": "3jLD5sP8CwtQnPHbqkHovYpaLKRQqrR18Ft1N9bSCu3NMZUhryQYtjcRkXPy7FfmvrsSgPa19syAJH9Kq7hY6Naf",
  "key11": "2sqhY5oxVmX7xhYaLsvqrd2CW5Y6famx6UfEFmDrBTzG2BAyKjjn1Jdy1Aejum32BCfaDFPs4F44gqb4QSd8Vpzj",
  "key12": "2uMRPErJrdv7VTX8wpRZjyBByMWsUgeBecTuuK6vPFPQMiWwfHAYdDT2sZNHoQbbq5iLkX1CdryqGNDeuEQxELX8",
  "key13": "ZW6aEGCSHA9oqZFB7312sy44Lx1vvhHNxiMUjVrm5iT3Dj9gqPJA2dU9qFWSWwA2rqtjicNyhdPvvhTiXR1aRZV",
  "key14": "57Lemc6z3fsAqpiaNyP1xc5dXH81nufTQAoYhTddDEMHkxedQZPyfRadcZUgVw86RrbQNkDt63v8x7p55tYhx926",
  "key15": "365pkJhjx6qMTpufCyPhBuw2YnfesVjt6CkmrzaTGYdK5dEf5mr3AMDNhe5LkiudXKmCfnGoFunjikNvfsTmSR2K",
  "key16": "4QUe7SLRtgcWWeiyZiA83fnLbypL23Ky59XCoaproScF6vmZBWfQ4EPG7LrBJehoF1UiPBhG5sBSXCJtUa67RznM",
  "key17": "5douCKbbPDYHBqY5p8X3pWeMSdeWtbqhMwQxHZ81oHMAUyFr22wx5Z29iRybNxceWtUoVVCUoJSj3Qym47N9KWiY",
  "key18": "3QFKvDRepQ1H6YTeDyRYwpfvDjqGh1Gcr16RP4qUmLm72phjt2isXBrX5rJVwxZgc7tpwZjRFUB33Bf4i7AhTEGm",
  "key19": "2bxm5Xu2Hw6K9sZWjBxDruin3PPLSWRYgTWJovz4YNwAayXR6a7fiUhM4gDNSxCbrMjfanBpDsjq8WiSqMYZbn3n",
  "key20": "333yXujGQG2N964ZqWowoGkWinyTC2uow35oX1UvhcnddvZxWfsZPbs4oYmBAfegqP93J7wXgx8jvsPV5JyzjRVd",
  "key21": "3B9WgwHqv1wrdk9FuBL3fb42UzPCJVXHHbLtSeqEDzFzRXMKuyp3X6hmDm8rrPtjn4fzSTMbg8Pdo9L1mAXShSa5",
  "key22": "2G3KjL1d5sz9ifmciGUarGhhMSdEn317eDBN9nCnXVWf1rpcpa2gw31rVHGz1mbQZW8LvmKVgixvxxtJ6ZEc8hPT",
  "key23": "2rjLopU9i4hg3wd7nqFFurJ8sveah4PpRV8M47Wqvbu4W3RPtWu6vRGyV2MgdchLrggUUk3LLK9YXbQuxEn1LyUL",
  "key24": "ahFgypCR2nV5E7vgLEupCRvkopfrSvtPhHGFZ7rLQJLHrdiDfr2Hm9HGFR3XELTHTQQdcU96uy1jdJhfumMkVpr",
  "key25": "51Tm6zpLEkYExaHaokxR92HRJScVMaDfkZnunojC1x4XLKtGhHGntDuWe4deAWbvTZvLYGmFRgbv1Kn92GqkvfE4",
  "key26": "36ct3CuJEDsjgsyytms7SWW4NaBHYCEZHTuvmyQX7GQX8FCu61gt8wkp6QiLEmteEgN76KCw7Am64b29ksiujRnv",
  "key27": "31P5ktNanH8xHPYvEGZrejRAD6DsNrHDLHftbBtVWLQaBn3rrrQM1SgSJ2eh7m2UF5daTektgfpaSf5sMcca1u3n",
  "key28": "8kxMiJz1t8AVQHF5zuArSPupejNCr9CRwMNgnUxpSPxTUw3WeQZWPQQuP2LYjRiGbH1RkvE8yPZTBFFf7v7tp2E",
  "key29": "4dLJTQSKjnwKBEyTfaBD47gJLp7LRVNJ8VTtp5VZiNBs4dWaBJBsKk5zPsTFBkuK8fhYyYpCpPZdNVckcfuGURjG",
  "key30": "2KWDEaKWFjhS9YwJzD74BYiXqyCkagZbTxTUh698nEu3o4rG2P4LCzuxVgfD7aH73R3HKGjy5QxKVZgRnHebfsbC",
  "key31": "5vG5aRAfVCwbv6EQkLpahD3vPaNEv8iPYWQ1nAt2iQAbcuzriW1TDyepmQm6HcuuXicvCe8e9YAKJDGangdYkUfH",
  "key32": "4oa3EnRiKbyofJpHy4Uu5rQLSzG2dRWD54MWzDTAQ3RxyxbS88EMdMAANviAyARUvMVCELEf8SNiXNgkB3F1nJtj",
  "key33": "48t9eLy4FcXoQJDdBmJn2yvfKgKP89nohTCp5aXNEyFnsBAz6CDpYokDiq2CH9GKKmNKvrEfsdjRgPeW8eK2Hbmx",
  "key34": "544BqxukMKmgfkEnTsCLC4p3FTMRUvrRHU14iw7o1GRLVx58vxuw2WDLiduxgrEodu2iCANEUsYjLwQFS8e6jM9n",
  "key35": "2BYvPbgzmvYG3PYk4kwJHYrtm5YAXCUa4YydwaUQquL7BBeiS6XRwcrwagcKC9Loa5ir8KJG6GD5Bd8cCkjZyXZt",
  "key36": "4XFjNY5PY12scDgLaZhEHrZ9iiwVWFKmHCBMeBDy4G4dj6o99FbZw8gEUfjauwzoefJtyuQtFGWpWu72FX5g7NC6",
  "key37": "4UKAVcfibb94GUUrEwDDTECWomWv517gfz7kUad5NZbanYYCFzptew2Ewkpav9mMcDjgp9Q7Vgbk14sby4TzzXsK",
  "key38": "2ZmuvfEm3Qb7v1n36gasv9wKnjkRA3CD2WdQ9ciXKcTB4HzfYszEWJuReFNr2UoZYR8UJgrZkUCb3xg8Hmf7UbVe",
  "key39": "34TpDPaQf6oBEZ6cx32nfgXB9YThGQoFjjfLnSnm59GpUo8k4xMGse8W1a4sDGL5AHiDKRKDJSGxiAoBZDNQAm4d",
  "key40": "3ekYbC8t34qzPdi91sv5w85UihM7Kg6mLCVZu9NtzPaqghqsrsEY2r7Vsjdqh4zbQ2madxG6wfLNzEsbG2s63Cnq",
  "key41": "3Xi5Rx3WnxqySeGALjBw9UVXstMG29c9vt8Aey8dL4iSGn6LzAugsVkUqtPWXgckvszt8dzG5Fz5cXZpDQ9DV8SG",
  "key42": "5SKS9XZGjppspF8LFdLRQh5tZMyLAS4AcuU9YvnXmh4Z5r3bavRoDdTj1pEZJV8SNVzfgzgrxFz7dBUVB7QswMkh",
  "key43": "3pbV8A4QXu3nFMtVkRpeHWotXv5nYQnUQcC4NDjBfbv8GJ6uMKT2SeXWDGwmKT6WXKK63PK2K856X1yWZoizxDbN",
  "key44": "66ABK9DCeoCTbF3kepdXGgb8CRWHENqAUyKYeK353X38SRjQnp4RJgPPfNzYP8CZAQekXVAGQLruWnEq3sCDd2X3",
  "key45": "2C4pHBt6xyeE5C8wgKcEDJhB29yM9XaieHm7swzRaNXfkjb1uEzsk75Qvp9QQXKTgWsqA2rPg82YWQAvfytzyyGt",
  "key46": "5J4LaE43ko3uNTgyWgoTMNyYyv6VgPd1d9VfoE6Yr4S5BzQv2jSRsC8jaCjD9DA2UzpkzT1AP2fhQo3dUh4YDWs9",
  "key47": "5zRGyzMX1nC1YPc54fTwmZYZ2zs5cqDnxKkN7dCiNxD3SAyeruEhdd3c1sHrbB2S9YEyoVgYJQUUg67P9sesCWoq",
  "key48": "2v12JZ97gDcUf1uc9VDWSmQF2EmQRe1RZsFBggC3B5iR9g8uN2fBrCSrjVZ9ogrwJCxKZKizbLF1X7KGSgTthASb",
  "key49": "ZbGHXomdiW9U56a4tNW4YXJVGich9cdRavhZXh4AnDwa2vcZhpMfDXMH2hMmutdRDktMqYfxi73aD1ZnWdJytnY"
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
