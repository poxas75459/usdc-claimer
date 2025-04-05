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
    "ycwwpqNRtL21BfJ5pv5h6oLJnuDx6EFPuGFuUZfZ1ayfqjKME7KJYvDBJ6pDvuYM6ZVQfr5j21AiNHGbiaRan9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nqp1Hfajz6idgNRY2p21HxWMiGuF2UPa1A4kwSuJ7egQmuwuGyYYrSpkAXme1dKpuwkQi3giZRZg1WHirxhxaro",
  "key1": "1psqiSEocdFTi9mZomPPbTGZvEP46ue7BKKWLNC2RdzFfSDyopzXVHNatAUr3eXhomBrmHGAAUJRKptCvAgjoqC",
  "key2": "5h6Du5ke24Zu3GpE6vHmwP3PwCkggu8sVHkf43zGLAdYHH4LwXS1X61vGNHMS2eLPLdi5PG9RCK6tVSinsRWSQER",
  "key3": "4sH87Nd5kmEsn7w2JKLpovBEPLctvco78jH7Q8R73xzxqv2zKWQFuRQ8UyY7i3Z2fWVkKtR1DSPes78K3qbxrsgM",
  "key4": "2WqB2kiGDixPLtxxsN2prQigoxtfw5RrobnBNQaUbsEKteSkQ2vrL1xS2H15U6ZvFRb7yjhJky4w67cuxYyjsLiT",
  "key5": "4wqtjU6GNQvpvqQVLV4tStq7wmmUSNoAHVPGK9WXN4UUFZrQNsB8bXZfPfrvcwN5EQHEi5axXEnAZkWbcYVunkB1",
  "key6": "3hsbEVR2dyee6Y6Avy5zSk5MiHgUDjmj7jBEgNHsdiEhS6V42PHQPTy69wU7p1sDi5dYn3xUgYeZxrEQgYKY7k8E",
  "key7": "z1B6WoF6UBJbFJNRDSjJo8QrzW3nf4TBVKGtsTGWwKSX6C11rC6aPCkLDok66aT1exedTUx1XWUMZqivZawrjXH",
  "key8": "4pGejQCAwb9R1ZySgXVMnc2p3cxdsBT7BgdukJWWusW3DkVZsHZpAW4VafNQz99RJucM5MzVQSKd6MB2R5EpSu9M",
  "key9": "4ZUCooW5EJfoJMAZfX6T4h7txq9kpwRZXVthAhCVCKZUdawZeTiS3TXArZXu5Ft4Cz3xYgJkxe9dUaw31jhjcLJF",
  "key10": "2JhvLtJKSU1y978c2zfa2fSo5WQKBUJwq59WT1ipKV4SBRsAMG8BuqZ9wufVsRGXhb6eYTRFdjhvxXj6ZmVgJb7r",
  "key11": "5D1oSNiQ6WrvGpZZCDsp3SgMyWx4T4kTD9euFnaCg36Z4U6xKJbdtvB45XszsDKC33Pykwt427LpxX9tS7cuKY1v",
  "key12": "4VKiogR7mJRFHQDyp13sDxSnKCekQM2eRRFP8tnERXedxbfoTgFKR3whUwwQRdm4EL97YYvJ8rpMDAzU6RfzEYPd",
  "key13": "zWLAiDmDiS6FXdTkoaEHY6AQtq6cWz4CSxKgge7SGWVK3ybVMCsuJ3nF14hAsjYrKo1e9N8K9RhmM3UKg8tYx1K",
  "key14": "4Likvvt1WMPXQjvRo8fd6yvExqzzjevputqV8RgFtf9Pruc1m1YStfukjnMLb22wR4qYVCpvapkYBsSiFpivdFQL",
  "key15": "4yadWSmSepf5zPAwtFhojQFDsPV7vtcQtNyDYfrPfBE7N1r41TrbiaGyUpUvfwGw7x1otmtD47xNXeftvrqGGyw",
  "key16": "3UW57UEmHYJNNQEA8fyPpkMiTx99qv4pe6VmfGcbAHg7zP5JTFn4z9RPn9q4cpYhvVmoaiM1qFrUScVjDnMup2iR",
  "key17": "fdEie9v2Z8NAfBPMFrfcZ5eDtE3k7q5hjUr5a3izDZR9CnErmmFAsiBwj9DbhmuQXxoCSrXcstyGo1pQZic6T5U",
  "key18": "2ZZjsQWsaaKUMujYXDYQV45wCnH9wVZFfm5BWv9Bc7ocsMUvsyXpf1FKe74Z9As6LWnBChABHwfjHhaXazvfNJi3",
  "key19": "5mxANtzb2X1o7dA69j8ArNqrmQ1NnJGGvATAmDFZcDXwceBvsmAAzFDBghTAPycAPVkuFxCeCQccJGRDQpiwZ9XS",
  "key20": "55SUs6xKC5mQYd7tU3dvfBHFUvHTfgs8rBbxgqkYedHHDkSwwbspN5GVbKMcMvvbwtuc7PSuwhp2qdCLRJdEeED3",
  "key21": "4spHgeQGiZarohXQamAPnwqRt5DFLxVRrNQ4uVW3qBZmbNKsLmcHxu1sE4vYqSDBbtvLaEQtgJAUdFdWorthagxB",
  "key22": "3qfQG9Vkm34tBimJM5UWyojQqtTogvESJLrtTr7HsYnDhigoKr1XDC2fJHZV1JWGKwU9PCftYFPfMahCcwJAKGsk",
  "key23": "2EsD2txXtPpiBJGZDS5debndRAGA14cZcWBAzQiuWKgGvAzBisRa3xN2aWN3Tzpav4inEcwtwpCxXxYrw9sS3KWE",
  "key24": "4dpHTLQ7jmHpKvivDEjrdqmQQtsJYUWh6daDbVsXVtxewMDkryDe97VAUUn3PqyqiufmhuLk9ZtC8BHLs3po9NK1",
  "key25": "vVYfW1MGBQsCtMix61D7bN9uLNUK9FnCsibansC3VpCmZTwd69sy7XPRoYzwEvYgsxWRwqniQafKJEyqPDAQTRP",
  "key26": "Gqonyk1CWVWkx9LDHG1ELWUEBwggLQKHNTUQAazsxH55mBfe9U4vme8DEJ7JJEMohKDhh32z7zyMERWxw1BGWbU",
  "key27": "2ybW3bX8z5N8PyL5sGwSzPH182XKEohnB9M4UcwbxE6N5Bk3kEjSZd2ecmeoLvhnyvfNMwS3sjA6sfimRxFYZKV",
  "key28": "3qkpftAycRweLHyYHuTDckRiNJ9fkvJ5Jo2RLj8AiG9rCP9dh4ti2jq4y9fabJkFX6BLL3LaDYvnRrjXNAHxA27Q",
  "key29": "4ccmhHkB5jJZ8fuf5YJmtn6ewGuibfd3JkEsXo8AhgzP4WBeUMR89t1vDigL5MAH43TtUDBjxPXykFq9xgyngSSo",
  "key30": "4mvCDcgVStpudvtoPERDEMYq2G7mHPNsRmL3QiLQC45A7fsEPM5rYE7QxTCvHK8ryadbG6fFDrWjeGa2uv9HUasU",
  "key31": "4DHkzD6xhfZjzNE5ge2a6e8b7XfMqrRELZCc58ns8Dn4ysSqFRWyhiKHUME62SVp1ADDDj3J6FxTVzNAEHAswxo8",
  "key32": "3ptcatv6KJQoPo6vRQWgzsK6m26LVqSuvfu5fa7QTPBH8wCRtmyKJvofzWrPbdJyr7io1phZ4c7UuEo2uUDNAXLA",
  "key33": "3P8g7ByMqNnHYoEcXAUTBUF3s1NfUX9xRAKcns5hbxjGvMgu3P7fkWziyh1PcqC7LTkCVSpaB3sssSqKLRGNbjG4",
  "key34": "4sm4NowAUWKjRJewhCVsKfx35jSfTGoWgbjTjMyucgkDedfSGYzYoa2VtkoRKSf2ZEjZ77Xdp1yzrFYR7Y5mG8uz",
  "key35": "84hUeRyK88arkEAvXTeBxXM8e4rZ3W9sup4FZnnRZZXFpgkfDd2ta9eD9FKPeaMxPGMyF6k55pZhgh8jDDDTSYp",
  "key36": "4hsoXs5HoSWNuNJakE4fCQfPgnB33tZPCYyB8zvz3MoHeQLTeFUfuvopHMrj2yyLS998jNXgVwd96FfGsHvZZvWd",
  "key37": "3CiULChv2ceAynTg7s2ssvkFQbcU94jPAeTTsnq5mirhHsvfPGkFJQH5HKXwyBwxwmH7LVdjfcHLz2G2cE3B8uBV",
  "key38": "3pSJ6hnFTid5eK6YTqZA9xS3TjD76RYJqw9KfMK6sff48GRu5UEMmXk56fAn5WkBHjc9M1BdWhq3JHThemjmGVEy",
  "key39": "5hoHuA7BjxMtzbRjwtc1jrfz4ac4TAGThAnFiUdvFQ56apu6pLYXCANkyU5zrAaiTK69Yc6AfFCFgaXnnjCqyu3V",
  "key40": "5c2iWruy5rmpWqi2JnkqsbyqYu1e2qNC1BdpGH9YYcrXwpdKELJuQUhVX6u1XBTZLzooz7DooQH3ivtRN4SMaUt1",
  "key41": "VDY81Eq8iwy4Q8Pej5QDFuZ5x1E24n9VisZpiLbfqmaABoG9cT6ivYCJ1hmRU4hSbEqeprTijJ7xZ2BywckUSfD",
  "key42": "DKGse32UwDvKfx76oYgRHKMsuC4xpBKN4UuPq1pGxS7pNHrPLjtsoTFEHp2K8Wa2cdW4jSX33cymMXnVXqMBVYY",
  "key43": "253axMRGpH5r55g5r2waHP8nDZCuNnmUApmYE6bq8toiDDkvoAu4deAg2PgoUxZF8ZVvkurpAPwYfBbaXAU2ue2f",
  "key44": "4MsFfCc4hu2utYqY29WrgZx5oSfAwzqVfGva9VvdWueFrPmDivFgygqc25WfeM8AgVyXJ1RBcAFiwZMiwp4BXtuh",
  "key45": "55X11jc7tEXWExgsddocm8bomic85MVU6TG8uiAZaJCWGBxzQZYUAwprVVUZFpPrp8tspVxKPfyG8nPj1gH1srQi",
  "key46": "NVL5fi86vfQ9K8CDV7UvEDNtJYHVVft9UTN8tXzKL5JUPCw33UdHZaZCyoJ8WuM1MhMYycH814Q5s6eo9v5VCjJ",
  "key47": "BQcmHzteGWn44qSqfNQnHzWHHhrynPQhwKKEeFmGHUZ4s2Skf26ZCWsCopuVpwh5tD26i4vPgYfzF9dmY9jUcLq"
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
