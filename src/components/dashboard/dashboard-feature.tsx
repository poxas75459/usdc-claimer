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
    "5RADLt1qKDUffdqwAn7HHiFjg8afgb9whUZ98HFExfDz1KkYqgFqHGThtNGbzvR5CAy6HTUKeFQnXShG26wPUdge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27KV949j9u4G78xMfDmgbECfh6FNMbc9c2DJuoVkhoz5Q5rcV1Hkctn7qmH2RPF7ZfvB5CjqNGiH2B4gs3a5dwVJ",
  "key1": "JLRJwpm4SVAFfJG5fkv5Va5Fuvtsa9Dqnp4KLYy8SwD3ci2C7VDQtk9w5LiG527cvAXG74shqCYzK4B9AufpiaG",
  "key2": "23Yu28nvBC16nyxC23qCFA71egr64GMa7tT8MqddHvjGdz3DEa92EpBvU4PLkmywwBYtrQokWrmVckwFasiPRBAb",
  "key3": "51f1qnBfcmt1EpxPscjNCn48o36JJZgzN3eCUxg9L5dCz2BZaNR65oA1kUW5HH436D7YQhqmSvEqDXhQedYWn3nJ",
  "key4": "2WFnAhpLB58jZXgRA48HWkfkNr1J8gUKywCe4k21icVyBUnVxwRzKajE48bGm1gvyRhHypicjauzjGAyEHJAv6Gf",
  "key5": "5hwZfbz7njLi1Lf175zNwt6F7KdyzJXdjrnRosfv8kFET4j1qMJUsKY3nWAQnyPonxpSfS5Xc56huiTJtNUa9jQP",
  "key6": "5uNjfAuTNM7NXbnQm819YH5AbQX64hb1Pi68AfQdirqyCtoBxydALVb49dWAX7zguiLC1xxivXBjPBaYqWwY8hd4",
  "key7": "4LftW6QPCoaCri1A9QwdBjqHQbRbByfq1QmAk8QEekyXHHyPprEPF2Wk7xVdzt8KnK7hCfUH6aZuvhXKzSZe1jL5",
  "key8": "4wB2zQCXer98D3AqfBuL3qKgh1VGb3pqbjrHmHEjv5HCBdTCKrQyx2b8YqtyzVWkLFf4apWme2LLL2dRwGpcXUwf",
  "key9": "27UWy94mK8v55ViCx7U4QmUvuiFbo6vNZ9SjSwygpqdJvHzv6iZ5ySCcqmVTJXn1Wkoj3VqxvG8cK69x9YkMSoZi",
  "key10": "cQ3rS6owa9VwGaUWrhr1vW5nzi8ZutxnRAFqP6iwTzgqCJ1UF4CZNkh5h92ic3BAGbrDmkasXGkj66TsZ5qdBqR",
  "key11": "53gVhVw6YwMigFFSV4VoqfBEnpA5Q1tsjt8jr38Nv5YE2w3moL2BDVc6D8fLspoGfb6Sh1MDhmYNN1ehERV9o7j4",
  "key12": "3TPvS8CQjM7sAy9i6WYVsKawzuoNuADgeqi76YdqCkHuCANAztXqfKZ6XubR4k5rpp8Mr94P2HdbsGcdvE9A3VNr",
  "key13": "5imygvgSkrV17dXqxPMpi37Jkivq4M6rfYh5WvHPGnmVVysWEYDuaX3AjAmWRg2o4fNdB7uv92DccnziWDVKHa3b",
  "key14": "3Z22uQ7Hny4mGAVJygvD24gffysUH1Vi5UJC9x4NCBU85Y7khDFzsnuyf4PQwvbvNU1SsiCz6sf2xZmgRW3Zo6KF",
  "key15": "5B1CPqx859kZS4ynzaEaSUmpgLRJFdXszS7N1RJT1XZZATHCbwzy1KsdzE2K2LMBZ7K7kJDWAvmmipbiLnDVVwyK",
  "key16": "LV1ZQWqmVWqjJR5aPPxNQpJG5wHDbk1mtf3Dhq1eYNgxUg9aaRNn4Ka4FhUeBedcWSYY6EQJjnPBnh8DWXNMxg8",
  "key17": "4Gtm39QESTEap7BKX6VBjU3aA4jtCf91kj84kbAejAu9fdmietkeriBWBCMtrk2RPFFn3QZJQQevcwTWuQLD1FfB",
  "key18": "2msPPn3nfTiz9RXcFJD2Jbhw8XrPQHpWaeoJ6V5Ew4aFoD8omzTeFrHd9Wpu6w1GCLVA2ZXbN6sv15Rt5YMpcGH9",
  "key19": "2yJs5inExxdPiBcjEDEqimo2WQVxw4UDbqfeS7pqPegGLPLJYFoxTwcChN2fnyWvMvYFQ9HHDHhToUqKq2bideYN",
  "key20": "4UXDR5acBVmYZxgJ3mL5kRHK9rBfBBpcgVBRYoYW4qTmCwW3RbyGrcxAdRqrnKnZdXmg9f7DqBEQUTu16ucZbcdZ",
  "key21": "5EACmQoVhge3bySh2HNUp3cJxDuwFTgJnywKvY3S7SCCfZEw8wgADkscwLxUtNJ3T2wgW2L9pppjsR16zgHj5YvS",
  "key22": "4NTkE9C32M5qaZVzopbbbmVb89nz4vnm5kgNK7ecH3csnpZ5Ry2CcqCWkyxk5Cs26kqRXT5ZmqQQk4ddejKyuFUM",
  "key23": "4Fj87mtKWtZovQwKFX4dV9ysv6xizB71jiGP9aLEN8qHPnKqnZVhaRLTmJqmnaueymeufveR6tBqeghwWfgfX9WP",
  "key24": "4WqG54MbYvQXWZyo6LwFz3c9hs28FkhyosniQWy5xC9gqcns4gPZqpK8HMZjEdVB7ErZeAogdS9KdC55MiN5Q4LX",
  "key25": "5APCsA79qKR2jKATroD7N9cpcPpKxttET77t9BpdKLgMzwwdRwSrjpLXaSqSXNKqPmUE14WbujRNUmePHw1SkqJ8",
  "key26": "3si1cbwpnMyCkZhwKoKuNS5t7DK3Uef6Dg5toMBzRovS92zh74rCEkTnZ3aQNSri1kU8UMGmQ56WPjdmgUxtjA1H",
  "key27": "2iQLZgTTcQrSc9PdUugbnb3xzi4H6y8EaaCedRBD2kH1avhuNak4KDhEUKd2cSs6r5MX3WPbVy8JiPGKMwAx8zt1",
  "key28": "PU5CxMePbxFUnvCVhNPXqvDfsTaXx9MGPPvemHZoBKSPHexX9d4bW7HJaccSxM63zVbCgW1B7nutDbQP5jrTmnY",
  "key29": "4a66YMS8zk8LWX1tubP64QPfQT1xau8GLaRbtAES2rLJxhvqqsfCdPmsJbHkhZiSwxfNbbCv9oqzS4L7vsxMfzvd",
  "key30": "2Egx74LminXMQimKFRg7rjBdjF4THJs4is9WBF1cTWhV8EkiiYAvfdnQoXxVy8MHmwFzFiPQHRWbQ2wV29hH17T3",
  "key31": "616FVjaAy8Fi3dhSQPxvCoqhxAjbxCz1hS4CoBrETRNKs83Fh4EGGQLVfEPETetgq9GdaPP7CrzHTTcdnJJa5uPa",
  "key32": "4dUFSWSrpWY4YRWcutpcEyvg3aJvdykBZyyEvcx5PbkS9W9i4xektF4H4G4opSm7vhgdtduUqM8ETKL4xRPeKHX3",
  "key33": "3Y7qa2eUshMdW8wRTA6sEBKrUY8aGTbtHG7gwJJCV7fnZVn169NFDmabnz27nASPdP7yWdzfABbpo88oC7wT65U5",
  "key34": "4ojHQ4NYAozNg9TiNEQBpD4HzytjDVL4Z9q32ZkSNdo34dGLEXu4ZySXqgFBERc7o1jUMY8nQkSdBi7iV9jGpAqu",
  "key35": "5bWLnd1DyGyRmTNS8rQF31EdcGtsJ4uZ2kEHzPRMxBQTShqzJjo5siEzQGqv2RFj5PcmdrEZGQ3FnUyF96anBzLZ",
  "key36": "4wgytQdpiMDEjVEAGstR19wcdnffxx5Xfvr4kiooo3UcCKQKjJ8KUBz86eb3yVsFS8SGTH2z8BQeWVinmQeFSr7U",
  "key37": "3s55FYkNHcp1WTrSqAP6SaYPmVbE2m8MsCSmsCVJi6FQji7bdx1nM8ApSbaFqnw7SfHg7SsuxJiYU4WQR2FesF7n",
  "key38": "3jD8qrAei6pNMZuxTZDgaTx5YR9WCUDrf3AewGmeKCqnCLohWdo5RtXoFQwULCQpQLZ2JWYefGV1mdgVBd8qnMm1",
  "key39": "64c2s6gnZyhiADuTNNJCnEkfZgYmx69mt7ZXUieXSjpzQtTVcZYSeBnzvhFfYibEweijSHCkRbtdsvtGL15KTi2t",
  "key40": "51A67E9END8e9XKvk3qW5QWBna4Ud8WeFp8D5sfb7nXHxxHSvXpGh2Ls4gVEsgJmv5BDhDsfsBDBy5araL3iFDzf",
  "key41": "exSRNFpc4THhLT8c9rP2JmucZATJLkBNabBTa7rDKQc9EhogC5kehW2ynktGnAes4emVZg3S4WuqUCDwqNsZ7mF",
  "key42": "4bATMCs2zsvWEETDy1Sx2kDaBaJDrMCX38LNoSDAdZ6h6ar33ecVBByhSacdz2zuJgHMGqhCyCKvwccK8wuLfErS",
  "key43": "59m4tCWsUEvXHSufykJQHVEn7W7DnLAqSH4AgsjLn8FEuHnLWoesEtaAV8h3Q8bAYvYZMXdHCPjCaMT3t7QmuymG",
  "key44": "32XYTnrtqJ3eDVTmWbjtkSvGQ3aPjZMGj7PpcRhnuSgrXSTLaoBULWmFqBqVg7jRMxJewcRLE3fPirntu2X3EXgk",
  "key45": "dYD7UJ2eMKEJqfkqnRx9BLn2AyjCFz16fEEbWTPDrN3tsaaw8cjXQfVkDgy9tRSDcsWFV6nPD2TsUTe68nPU3DW",
  "key46": "5fu1EntF6jVHvA26gYRGwNCHq9xiJqQLB3F9s7wJimi2CwgHZoNRHPSvgpMksqr2h6j4BH1AoMHGrKLQW7J3Hz97"
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
