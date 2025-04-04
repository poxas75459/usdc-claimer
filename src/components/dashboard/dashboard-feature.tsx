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
    "2AUJFCMAk99nDwujyedAynApipdcRZFZkfXtTGfT9LFAMj5i3XCeaDcAUmEUaryjSxBc5qmv78qse4dXEd41HH1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rSc7Z5V4M47BJutBYis7rkTLvTRsxuPKwd8Wq7Jo6otvRxPKewT9FfrrTXBaBSTaxRPJHRaQD9YdgPzVXjyXRqX",
  "key1": "4DNHMeMohDuJHY7fcVTya12kfgsGroi4TjTe4makRTEhRPkKc3EuBsm1vhdzsgyqrKVyWNS49V46XxQBLBhHwUfW",
  "key2": "iqRMSqhzi32oSrsskrpkwDjbWD8nqkgTSm5s6Uex85HEDZwtFPCUXgYbMcbrNiz9KZGDqWGFXE1qRsrK2qCp3qu",
  "key3": "2qAefGv3kvWVoXRwyoyKcQJHJxvHDPip4JCnQGYkginqfSK7ruYBhbmX7Psg7SEejAE7zAGoTYfCF1BpJJ4ZYJf8",
  "key4": "QGw7QTumrbsMJUyr3QY72d1aHPUonUX5ha9Auzn25ft4h9rt14Luv3W7p6SpLVGFqp5dKyD4zbn68MpPSNF7f5F",
  "key5": "KpySxvpMLv9ZBmoGijGz9b9WeCAWYwUKZ3FFCDB93QehBkgEMpY7zMsqTXzBjBFCsAZfukPAZPVbuuyxtRVRCvm",
  "key6": "5x7s7m3DKdQ182WaPiafXeK9Rc4ReReqp6XdvxTKcXBWFKnkKMAuDGSKEQT3Z6WEbq9bxwEeggeGrKNmr3SZzXCs",
  "key7": "4uQ89PXxipRm3btZG1aoNZbvDNRuDEa8PtoUEuxTmmWijtCZmnnFk93YPniFR9VmospPrwfDvbrQWe8fCqh9Gewa",
  "key8": "6LcUmYZVLeD7wyxxue2HvouggA9s3wayeaCypHZxnaUc4mG75nW1FoYVR4uQQbi66XsUjoAPML4Kyo1GitqZfWe",
  "key9": "2M9jmSC4GWDt1r7xHuhm1TNNsc3CDDyJqpNbLzpHvjBLjvfWDwMyrsdrjGHc8YaN8ehRagfRq25vWP5J9dMHr7FZ",
  "key10": "5HxbPeFUhcd1SdRjaLXt7y3cZ8sogjynqMt45WQBYZFP9UqfgWcp9KxqXAh9nsQDf7bDgFBVcfyVXnWATaBmNtJT",
  "key11": "5DxjS4bsKHQivJrGZLU8DEu4nzCBT2aq1uqVjSewKUPCgSGpMHMWr2fQa3hgdfwdZn6eoYLN9MQo7JBU2o9NKgQZ",
  "key12": "3nWxfZDWTqTksxmy9wteVRqdYUYGo4vsNH5S4WMgLQ6CJmaakgi56ctHDVQiNuSDTDnyQxYc6vzDz3DuFoSSV6Xf",
  "key13": "3dBJhe4hCPju9TsQUF3hA4cbH59BCbwPA2smVjqtqQeJc461PkGn1YZ8y1ndp6ikam8sDU9PVKECFRnp3pc9cXw8",
  "key14": "2Fc8ppoY2wvjkU2UBGxtjm5tTonjRBrNmfNHsGn6WvUQELiZwAjjQBcHVakPEzeNxvaaT6TkYPJdHVWTf6WpVPwE",
  "key15": "3QcbBSX7PhR8pfxHjCMHSrz6zc8CrH8ucLWAW4LnHsfgWecQVgZB1bAxYoDPTX1XNsJVYX9CQtrphc27ABYtaBoe",
  "key16": "5kmavnaeByZa4qFFG4JqxwY1QpdJoMpaur1Bgpgx3Ue8W9uiNMHi9FjZ8XpXojg6haNuxnA2WBafMu7QhHLjqDJV",
  "key17": "5Q5i3KSNHd7dPxHLrf9Tx6VXtRpXzFwGX7JGwZAhLwbabMKV5hnpJKpFXyWURtcHgGgqT8EEX75fc8ZX7KqP7wEg",
  "key18": "5o7ZrHyncsftBbbuCCF1GMV85AJpXFspGDQmWKPtP8rsFoH1ANRL76fAXfJk3LB38bqz2r4XKwT14AU3QiopZU2A",
  "key19": "3T9akwM27Jhh6B2hHx9SGPSjpG3tmZLzkh4wGmAHKAsFeitrg31BC8kSeGAoBqG1Hhd8HfYaLhi9VJFSfzjkwLTD",
  "key20": "64845CRC5aauMevsGXvmhbUzAHHmggpboquf3tV4jk7i75mjyYd2496LwVMtUvwYJ1JMJbVMNfmwhDjeTzb9G9Sm",
  "key21": "32TaWVHA6dUx8UQsJZjZnPvg3DQo8iAjSEUzVVJtwqZaTFmWPv7Cfu3eppzdAr7LHQk5q4WTT8HfBY3BWdqLxxxh",
  "key22": "4UNgFMRn7xXV6HpbDVrbKkCvnfMM2xdM5NZWwaR72gontoLMLm8gU1FyAGvdWkSUJaA8LxGo4mxAPpPihzx2kCeu",
  "key23": "4yonWmyBYiRZeDAomFy1EfXB5HpyFDytGHxp41oYHosxJwgSDMKvrVCG8A4vt637ycx8mRGQ2jaQD3EqnCo7nsHx",
  "key24": "4kqpp71A35YQBZ1NWcjxTAyYT6yLM3zyea5foER23DwtVSJMrnpHU7s81tYTH1JdqTDRCr2QrkLZjugxDkopFooQ",
  "key25": "3ZvVK9HxrHtFFa4nqUd6YzTALnA1zLBRFJSK434B9z673jqWBMgknbSk9C56YH1YTzRmcbPcQDugaCpjd3Z8Ea3i",
  "key26": "3zAAwmjk5e6rbdcXcqUpRRCSogcC2JYdJXw89mH6ZaxHWnwWUUNcATYLgH6AuEB25ZnJtKPHGzCjN2HHKYupsuqW",
  "key27": "2vZPhJ5mM2nyK1cFJJ12wSKvWUo3m67xAxsc9ngBcLs8RDWCUqazj7NnA8D4WXkkSkorfDevETXHVidPU5g1uShJ",
  "key28": "2Tma33WnmsDkFCVTfbw5CULkDEMHANgoBKZ916yYyb8dbmJTxsfNcPtB7tUF4HTCvYjLm5AuETbqj1mHWevrt29W",
  "key29": "woV2MQgASoJ2UKgi99t31QWAZPurhp8vRzSEEwXhtcHC2x1NowvW9Yv3rgNW1kZTTAZbX2enKTrxU5GmGzLCuF2",
  "key30": "265DnQF9LE9vhBYAdc7jS48i2HNP67LvoaAViP4jNGewXvLxVzSRwWR9gfWmpkBfVaiCe3e7Yzrh5offe8JCFj42",
  "key31": "2Ad4ZUmRPjQkzpU86F6wR1xvDTJLidQBzcxA5MaRysqCh6jLFbYrZ8rBWRFEFpFhTJfJfhMjLz8tCnRG6QkH4zvF",
  "key32": "4PFgfATNtv1VzQUfKRjmkFjP6mmgmCSTHxPaBQPuaWMiWXsmUQSwjJhPhiohMyuuwKoGYsfJsHcExvxmHUdAiMUh",
  "key33": "5qEopqkDCFb5DgzEHYmLC2x45ewrBzJt4dswnbRmi1N9i5mg2BUrD1mzmFfzmAWcxhmtUP9cSES6J2nMpTevdeDi",
  "key34": "67edWjdJjp55x7NdnmQUWJhUToyZmSM1zzxtBNbniKpLjx46VNWLztRyec88poyvPbC1a5U8oQqGGgpXd8XMgJnf",
  "key35": "4qWVDQGjRWzqvLLf3vFpBqNXtGHmnSMCEm4zy9wfEJoge2ECnjfkVBm4AKUAThLwxZRBmTzgcbNZprDLBbXwke6o",
  "key36": "5XXpBosf49TRWgaSHKMmsyKBfUZspR82AvCE1Y92XN1rudbC8JnbN6wuey2rWTeYGmSNsqHDM4gq4qg17qGNmMAS",
  "key37": "5ZfUPD3L5dE2Yy2S5xN4ZwLJpEYFywPLqLj2LhTbGhgvUkSoRJ74mGWatGKFV2HDgJx6E7J1qbg2kHKzDuSeWQAa",
  "key38": "4XgTemchY7uhfNWFRmSJTSiFhHAnfHuRR5RQDukWoJY747AXsohtjvvgjT29uMocGTGGMkgKZpKkHKRA7JaFpcLR",
  "key39": "5tVAJZKka9J5p1sCBUMZPUdrycnHpvjZ9iTy8drGZEcNNABhp1iDwEZGdLEJdDRjvE34uTjMGTari71gaFhiGwcr",
  "key40": "5h2xiNpSPLMvWLGP2gnh7piYK1RuhEg53PRsDhfnR2oq6CqPNnEs2zcGjigS5rAnFGp7wWWXKyDXAdvbS5X7yswx",
  "key41": "2erEWihTQgZ49NGqpythxgDZCwx7m52aw6PmzgBwJBz65JrszVgY6psgJBCA5HaXb7UCavjDhzApqnoer3eKLw7R",
  "key42": "2xdkrKNa37M3TGbZxEwvbzuaBwszesPZsRVYDmkfnUhKWbV3pDC5zfv71Cb2x148Z61HMy9f2Mi2j7izRquA19qs",
  "key43": "32jBh19D7YfcpLcoRHCGTtoQHWLgvst45gwj7RCGcHZL6U6DdGhmwDVi8ujJWNSQPGocKjbXLwyQgGxqagS8CQAb",
  "key44": "coh9NAUBXEHrdQCbPY1cbvRE9uuNnQwq6LoXVVLew7rjJpYKSAzfwN31mepDjLg4rpAE2riopyNmCmA1D8BKPBF",
  "key45": "2fTnQ4HLE8dWusXa5jvRA7hZLBzPUhUoSsLwLbic4HpXMbqAP8V5T9CUr8x7qCSFn7EP6dJ9wutdymqR2tHEUfKb",
  "key46": "tHRaTomRUNpRDMBPhJqwS81SzR72VtdSRHTYA72hQAVg4kKhPkt81j1jLN9RfX258zDg7sMMKGfACQGzsoQnurn",
  "key47": "2CmmE2UpwZE5et9SNTZTMBq3BMh1WeWks1sTEKFkeAAvQ9EqanzLvBgqoDduxhvbeTNJbqTW76Wek6cbJZPan8RA"
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
