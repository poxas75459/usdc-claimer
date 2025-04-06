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
    "2MnFxx8hjhoXRD55eVXDoEXK88JjDs6wVmC8FQGR3kjLFZfCetvcL3dS2d2MiEhEUhhbcwRoF83WgEnsbyiJaafJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vvc7stV1YNuCAzmqtgfRTK81kyf9hMGogCfL2X92qLpJrmN7qG2o8A7kosn5KWpEYrdh8JtXqU4M3PvwEK1JKBx",
  "key1": "3afgwj5djqgHVgQG6gk2K1SzFj9grucdJ4geRGACBDg6F13eVq7heqcZbVfSuV8SBUGYEj3U8U6e1ThELQ1n4dQ6",
  "key2": "4mVonUywE33aL2rjzCXb8oJu1odycWHgbC2G6XtUUj8T682C334y7iRoMkpEqb17gCZ8dMsTw7esEGvKj1XrAVMr",
  "key3": "4vAZvmjCk2YAcx15CBLKf52aotSDKD1ESnNLB5DjAa2CyvSGXFopvX4iYiiewqnHGpZnAi1Go8oFq21gdmVigZrJ",
  "key4": "CFkK1kCKuTrTCjDEBYJ2fctTiQvk65YCVfPDk2XwFDM2oTunw1w5BBpvDd7SmejybfytzkC1NDaHHrJVnxmPhZj",
  "key5": "5fHSVX5vYF3gFFzcNNGHorbDKT4vbnSatGWDkGWki6tYX8wtip1p5kfzqSkgA8EY986kdPonDZXaiRdqZ2WcfD5K",
  "key6": "sfsWk3KuC2ooPLyQBq6SA5cfXkrBpNykiCptiNYm9zJrA12a2SY4oXMyiGUijH29v51mJKiSJ41X1TuMHV1maa8",
  "key7": "3zx827tdHthHCmDJdtX8rqfffuTpDQyTtFPKW15FSz9eNEYNW2741brQFMAVuF96jfbK8eqxPBL3RMATtqKbDeBA",
  "key8": "5JU2moR7tQA4uV1BWNb5LjTVUycAhuhnz1dySKGxaSvVHBWgu87bcKCPVYEvqSJNEirop1rfC599eYCHuEdq8HU4",
  "key9": "4FUVTTENEgiH7NPveAm3MCwMhk5UNLpKoKhBYhHmfJKCnDNdQEV4836bbphXhdZGc9N47zXNDUZnGP7PY6CK2KLQ",
  "key10": "5bZqdVBGBWNizCASfQLFuHsmiCCyDDjtqCzs48CHQREF76ymW4eJnkiJ9zLvPhYb7eLPWsHZT1y8Y4E9MDbD2kzQ",
  "key11": "2SnpoRHX2Yhb2kJRjhBwGc1TozPDA9DYNM71wZuJ4e5WHLJgzqe5yshCA3RPzhcbuHCeYLbgo6TMmrkFaUkFyiZu",
  "key12": "3B4ZLVhi2MKZEzVt9dhxhwUduVzYdMzdx729VYnP3QeLMQLhEJoc3ZCuRfZ5enLW9vdbqfArrg2rNwAu5mDkpQXe",
  "key13": "5U21y1w2HE8LXURgRZJwNQm7KtXLwN9fZxM5zQMSYjQhig3eu6qmd4avyjczaXgL9uzZXykU2fvkjVVKCoK1KjX8",
  "key14": "VYeZ4PfMzwL1YLKPSxhUbrv5ACgPzN1RzkETyNfbsF4oQgNaTP1eBc3EGFNBve5eYmkN2mGoBNdkddXxF6UkSKU",
  "key15": "36b961LJqZ4NQJLhhVLa2EzA2oKa3V3oBwsoFsSvZ1xP6KeJqmEzKQWaQ8N1orVepBjHF7WxtZn5EPHFgGZjqL4h",
  "key16": "3hUja5QXaTXEhq5JNdM4c7kobeyjWpc6VBf9riDK4kH8o7qD9NucogFd23mgj1BENqbQTZPC7wEaDC1r7uc9aL3",
  "key17": "2mqGZN84vLar7NmUhoHieka8RGxzX3uK5vz7UTpVaLF8qF1EgDBre1FoTizaHLScShuCmV6Dp5zdW3oQadQwoKfT",
  "key18": "3SNqGmjZ1BPU1W6UnjhH2Kc1qKHHyz6LMsb8mJ4B1ALfYReQp4MmJgfoTwFg9mRjpucGmjhAwWE15dW4cNV4ShP5",
  "key19": "3ALH8FVBL5nS5RSHdAnkw2sRRt54RGPJZwtfgu8BRuTN5N88zAn2gMghU9PiV2boRX7Q1LesfzcdF4nvbjfdvBiT",
  "key20": "2trAA61vgQfoApoWzqWYX8gxSBV47mQnn45PzSWAvPeezVYTaWBuc3A9u14Vw5GanyjAcxFGcUd7hTEya66hnfW9",
  "key21": "2PMKPUSgUBtdsBJxf3Q8LANQedBH4s6HrXobde8xQStqechLn7TEATDcEj337JCNgJL465aaEXhpBgabeuRJH94f",
  "key22": "3u24z3hD8Vx4uMVskD1XkiiTgbTNNsBoxx96QQTrHYodNkyvYE7TKFC7k9CJcfFBej6Bw5XhEq4kgu5FWfFi6Q4P",
  "key23": "3xCNJLnaYc8cozdmwAzoVXAHF5VP9FRLSkSkU2yPQYqFUbvLmo3tn4pdV4YLYCYSfKvt3RKpXVL4d5U7ejeXF8Mb",
  "key24": "61wfYuvYA4mz2RRQHmfDAy2kAWZqyDwj6jXaXZqJSL6z9cSoGdRzg1bP6xfs65smtxs75bUNY66J8Z1pkEyHmGro",
  "key25": "2C3QktRmd3oSeqpcfS4vXDrEi7CWVnRHq6vP5ToDzQKh2WSrs3HjePY6wEXSQbSwe39DoBtsqjWhsfCvhsYRLvEU",
  "key26": "5CA9rCRq1NT2drqdpuFgKN2pbumC2CGaDWoGTUu7iKAmqAMukGASSZk1w6BbBR3rBBcNwTFH7rgMmdusQnHnn5k4",
  "key27": "27TZG93sgfninwJhmH7RuvTQ9dEQF4HPf4KhjNFFpCu5EhV5joQuqndnZNNXq4yzWmvx4rbfrsuEdCHPvP231wou",
  "key28": "4xweDwG6BZxiUJy6mk3KuEKZE9EL6nd4egrJgCLF4zwPXmPCmydW36AuTN4LiTdTW2hhV7QbtN3QX8Y353QTwMZj",
  "key29": "4XFpVjDfqY9f6FJ33L8hDPcZgsvUKTAAZuL4QsZ1yEUcAP2XzNjSFb4XPZe572QH1goGNJTJ7Ct5A9AUCiJdeh2S",
  "key30": "36M75jVqKQaATUqsLJJ9Pt7Vj4ugmkhQMxAYbdNvMHGojrnCQMWL44HxYJhaRCF3uXfS7SK2F4Syca6wp1YHCXWb",
  "key31": "3vDN28ejZHPa4SSFeanML87hy419ghyMYCixxgvPzoDyy5Li9P8YiX5FDcnyCobPKcSzNtR7qHo4GzUnwQM5hSaZ",
  "key32": "AvqhZBCgxSDCxQzPuiJcv4w1weN4p5EGPbgmprrfkWRA3xURUJ86RyJkoWYqfMi5L7wTaytnzVg6LikiDN4TJwN",
  "key33": "4PHzT6tKbcQfWeWP8LSnWbNFq6wZXw2mk1KJgxwuqvaznvXzstBmEzFmQaSFc1YdjP4trPrZm5zuZ6jXxREM9a3T",
  "key34": "4Pj8kD9Wfqgu8JjyKEpsBnxZqrws2Ee1DYPwbFup3TCP4TtizWM4UHFaLrQjxnH15WLgN7Y8M648SiMAsu44R5mP",
  "key35": "eWFptLJmboWaaRqpoFR2S38J4WpK2u88jfsi8pkrLyAc8ptnTs63gwyAV7vpMVcWjD5BqsY8YvNJZmZjUVaLwDt",
  "key36": "28Gt7RhqHNw8aGyRAwnztm2WGuaitzp8jgfZEb5TZa4FAiHs7vPxLQfDmckUyyA8YC8fKAJCN3C5qLJ1FG5f9oJS",
  "key37": "3aFrsuobSSsfw5gUo237YEBJzw1YxQKAAhyXQDj1sHJWQpM6ijHybb2zUb5jKDifnBXu5xs6Lpe2VHGbGxmD9ftZ",
  "key38": "4gk7ApcUn634GSMYtnKZqwia8iwY3PTysGJKNH6DB4ZSkYrB6G7SQSwT5doyWdLTEy1PN7wZaGZrfNWLaCtxcoYk",
  "key39": "XC5bxb3KKX4DsWUdeAmx3G5vnYkh8ziJdxAoz6mYANqjqB7HzDxA8LsWwqcA4rGQGQRHbcQmrGrsv5xZWuVZbnp",
  "key40": "1UM4GCEWfs8ssibbNp42wwZ3QLrYVKcF5vZLxCdnjjNGhaFYmo1cchVCSdqgtiFAhCmdhzEussgcQkN1VHfWdv4",
  "key41": "4GWCKDqFU3PmK2VnAv6xtT4ozMeX3t6dZPvrsz9GiN3p5JwwWnrhrHGfQXLUxsoDs8tPN2YGQGHnWuERWNXBuvfj",
  "key42": "5rjatz65Y2ipdXZY712Zy1CNfLXU2YYuuskD8acquWBu66yXVfiRD5bMEhYBxBm95KfnkBZbAAPhXxFBUbPK5bTz",
  "key43": "3Jhihx4jKwZnPrCxKoxyFfZfEFGXvyXR2pQ4EAexzMyLZMgeRzwC4jaPFSe3Gdx7EtygNgBgvpHKLZtiRrgHDfHp",
  "key44": "F1p4Rvjfp4kvr6hdydti6ydcKeBJNV6LosiVzqnSTkhDtRyPDo5V1PDtCo58XKSnqgrwG4uXcmDykQ8oEf5hki6",
  "key45": "5mRn6yE9jMvLy9kMKsKwYmoeQSvCSHGj9zi53BAeZHSRakq8Bx7i16yFu4dydNbyvCfgHMgkn8kuJy7iKmSbW6Sw",
  "key46": "37dMMCoPaQoisk3j8aA9qcXvNYCkmsFoUZvSuyNjTciEnFHrViw2Bh9VZq7t4AzxvvZWSEjw7aMQRsbLkxhUcbkK",
  "key47": "4tJwecrUbFJMZR3zFZUWoznaLqwD1NbzRT18gVu6WywsP1uSHUKjJpKqLcJtYBsK6jdgtBUdtcJUtYcDZ8NGTPyh"
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
