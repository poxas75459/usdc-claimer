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
    "WxL24ikYgZkt4wE6BhcTM9HXpR5TU5VTVatoFMCEWkgR2GSNbKvUZw5FMxQgub1uwvBSW9sX2m5NhJWkHKGiHHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vcS9Big4eUiBRjPKa57UhMCmdkmhJh1pdkAsWNhTyHGkapGovN5Vkt7qWQbzNPmzQ1NUnwKREZGPQziWnP7Wo5q",
  "key1": "578tpW9dRrggVky1VntJt6aRkEf8tAS7oUfFJ5imcHMQ38yL1rNeLrAZR3x6LEN4MpvBVFaWsTVx6X83fi15kyqE",
  "key2": "2gZV4r1e3g7KirAFjK8WAMAxz4CFbZG9YUdSci8RhRTSMp3ShbjAkdmdhAgikZKw5HzGXW6FkqUtbcpcTZc1KQm2",
  "key3": "2NZUz6SfjH6KVyoAnnQvisXdnsjoV1ZEBGzzanRup1qkFnBnqtnqHFf8H6Uq7DvrDyLBGT7fu8s6CrhnePJho2si",
  "key4": "2oPUm2NDxCaSBFzcwvj4PxLikH41TF8zmGrawCKbcn1cQhyCcsg4fVjp5a9CaiG1LQrrPNLbePMi77uakhB3RvtK",
  "key5": "4RAaErnqG6ngUMe2rfumasbSkSDWd7YxGTjwfySLz3iXYThe3znujqUNKTu3627arBdT26DCq39gFEZcQtambvLh",
  "key6": "49VT3oZYJrMWT6aSi62SDzc8FQbErMGnCW2r1s5GB9o5opAG462DUCSa6LaBAFL8sDpqDXXwfGYbJgaqDATPgHYa",
  "key7": "3kiumP339PNfJNpygtJpZYkuJFqnZNZupf4RnvazhegDfK59QvosH6PFwPHsN56TdV73ZfjyvwtAoF7SNN4mnE6y",
  "key8": "4GWLifzVY2rm1fcX24sHG2vfJVUS5jvEsBL1Cr4pYy2DpvC788in2nZQCz7eQ7nKK9mpwUWwVjktARoGDb5K6UNh",
  "key9": "3PSCpuakcEXFFnME5S1e2WrXz8CYr1pS5LxoeffdCdHNYfGCMXaQbaETqMaoqEokJroL7xYJzD4NKf8cDoTb9tqR",
  "key10": "4j7oM4FsWP3BfE4qVLy8CnJWiVEr8Pmgmt66KseFHQLcmzkqDGekLA8LbX7MRXzDE1wC6ZsDx5LacQ2oeWVXmhmo",
  "key11": "3DazcHhsZ7xuFA6WrSaXBhxhTcBHFBVB6t5JEpyf28s6ANE6gUv8RMtWpdf7s4sR3eziqANHRoSscfiP6i38aXf5",
  "key12": "2pEuv6KCBfMBBqoitjZVavvgXteShWcWd9ggFcutbKMfUUuah9mkJiy7j8YfkgfLDt8Pb81vqRt9xnxmHZpLyUXw",
  "key13": "2m8hKMn6EbXPzNXVMGME7Y56RH2u65xrnKinyHiRc1KB1SEEHi7kyEDiQBpBTqd5NrUCBsPa4U8vchxgHt1kjzdN",
  "key14": "31f1AaBG1xNCTfyHoJkH35ytwmrNUodsamZU19E9wf7tFxcKcvBvUoecw61UaJ5SMWYKWnNGGiQynMctKs9vNQG9",
  "key15": "2cN7uqxkXsKkAiKgiFDdaU1yviW5XrFw6uJ3AprZgRob8uAoxpLsK6eYucmTixrmKzDH23ZWKAW9tZuCLHuyLGX3",
  "key16": "3vtnSeReQ2nmKvptmZdthhw1KTer5xRRummFdp8pLQyDdn6dwMoNoJLqrEboqZw2NMoZFUjBqz1SCY7FgPksS1WY",
  "key17": "5v5VKgaaBvoPy8aCj1igFWJbmvQUgTfbFudUvUBtbjQPjYzP39Nq6A6e1N72kmmKiZVkmkh3siCVN3xHxzYp1PQF",
  "key18": "3V7dfXVrwkUYP2xVQiHQnvTvUodKCJni9jawwTchksphWhRNdk3WXSHDhT77NTH297HzyGN34v6LEGewbNVuRGR1",
  "key19": "4MnAAJeiwKz4ih32vQ8R2W2zwAJmVq8mDkY1PRTfo9WoY4fN3NSHYGw7xKJQ1nWgCMksweSZAjsipL6UEejDNf3j",
  "key20": "3DLtA5z4vMLBp291zXAmaedYHXLte3iXwpfY87i6s1nDvys6c3qKjpqhu9bBkStsoierUtjHAxyGfgVNdBAc8Jdy",
  "key21": "63uc2xsjopYH5fYfCXK1yaB6uJHTmEVFqBN5Dz9BTmEQTkqdqvpnAV96xJomyYqAVwsZv5ziKChNSb7ZsGkBff7B",
  "key22": "3f7JehBuBDcpxGHe1R9RCzD1wZf66BfifHnu9gsaWFj4GbfU3eRYdeZXDUwsPRekRYWA5jiYdjnrPK1k1uQq87M3",
  "key23": "3YYNRmTSyy6Vz74oVMLkALE933nFsMhad3q4PYmh7sYVLUnQpzAcyGR3CinzYQxG64nAarvN6NffVBboBD9tiRSJ",
  "key24": "4N2PpkkXVBbrnqQunTTcpRUqTAUdeBn3Hto4qWf8DybAGST45zgdYNKxwcS9tZtKSFxzX2asnwTHm2kEQBM7gv7S",
  "key25": "6xXDLjiFszp4ZWmEDP37eJos7FWTnE7r1DBRneHK8Es5tv1HNwSVDzCABxmAfumb7xjtu4VRfV5GoSi6JrvPg7a",
  "key26": "4aDK924CvcDrk3SFkRNu4kALbQ8AqYzi9hW3dMbF1zCcpm83dgyEUYQETvL2AHavBGonw9S7FkuNfL7HTa6LWRm2",
  "key27": "4jYbhfEcc13JkzaztQsdNLyopbehGu6gQGofN5cPYj2bNfND4kauq6AbGa7hy2bH6ZzA72HVwgU7FJzkjBSMVHkE",
  "key28": "32CwagTUQ9mCbqnwQnSiKQfW3o82HLQLnAevBkA6xnn5sCJo7FsnsjETgsAmUTYJmm9wJAQ2E6eU9N7gVa5j3ZaQ",
  "key29": "53zhjZB5r4ZmzQbmRk9ehwuP7FgPyHtq87UCwgWUEfwJ1xgzwsxxTuf7VA65JyBTxJQvouUcbtootrZmB7AHntGe",
  "key30": "4vzBF6LbzQjRgiQYsk7MBvxZciYV9yRGXbHtAY2GeQTwf8kaerXnoRVyxesWViTq2KiyN1ENDHmJptZbTNnWPLxh",
  "key31": "FdYdaYUX9zGhiZmPrC6Ms7RY4w8f9MrnNMkHbGStGaTzzUSbYVQa6kLMcwA4qjGUsuErVfBh22YGhujvpBCqy6q",
  "key32": "W6srB2DqeRSGAJC8TKSD8L5d8YX76BDpftsgxHg1fquLPnSVtjfRZo9U8YR58BZyWujeUtVKam2FrZoaaydgfNX",
  "key33": "5Vpf9TaAaS7Ranwic2WjiEHvKYbQjR7TLogNHvgkDg9H8Lenty8euMk6amNkxfeVFiscsXJRVTx1bz3t4VeqjvpR",
  "key34": "3acD2um6N1wmTkMVTAFJn1APUHH5wc1CHgvvNn5wpAZzGPUTYC7935JAEqiFxRkeYuAFoAsntYSTUPATWmk6rQCT",
  "key35": "2raxdQrNJZhEnEKDGwhqG89ZUvGzWpVpzsJAcHk7KtdsdBVvBxSLMmkrd392YAmpanxASRrgsgMwAxsNa74Ej1fw",
  "key36": "5yFPmuyu3aXhFeCZckMiHrYLYa8RKmK4RYXWTGQxgGephDsFBUvGpST8nC12P2pbJs71uRjMp5L79ZqFMnXXGPoK",
  "key37": "33PsxPAkddnARLJuX96Do6Q1vLiE3ABY95ovtAswkiV3B1bjeK4cq1A9fSf5fWmCr74vJUdHs84ttpZpfEJcXDXn",
  "key38": "J7sxQeL8EQwdJcn5qp1UMmfFkQ8LSzcztHVTxUowXraDPqPmiqXUT44SBpReUZaAggN6Ltv21AyeHGjPwXnabtd",
  "key39": "2BKtC4pZjc8dc2sZSkjEjWjNUc7gnhyzF5uRR9jsFpNZLn6ihbF268HQcsSjBF9K5R8KDMESBZTXQUwpLVB3SM3z",
  "key40": "5WZ9ZiF1sk1WEjBPJgYc5a7owXqJJcr1Fgp8yEe999dK2P3KHLDCfLCydKBHFHDJ7SZrNXTU2dE6QjMbtR233NCo",
  "key41": "3s3Q39fY6k6V1fUzh3Tmak6FunLaMKhedgQTigghnzub2e16eNsLVfqTByWLDJmmYchdivx5id2Jb4urNFLJtjh9",
  "key42": "1usx6FC1VbEKKLkhzz8Q694KudWm5BaD5Yk9jFLHmYdjH8GVdRzixq6ePwE6t57vGtoordPhw2bmEvcGUxYsxgg",
  "key43": "4KjuSsSd4mjE5Sfxaks6RYvCg1x7KAD8KNibdGnoN3E6wpAC8rVGECu3EXrofg1sRNdZM3M9SC14JVK7t3a9zsQ7",
  "key44": "2Swj5AqxXPxogopno7xTr45M6divWSSJ2MQUsvs2du1inG424yWtua8zdAefCu4BDN41FKsb3JK3FkCguo9Shq7t",
  "key45": "5u65QRtzZuszM42ij8Rgp28LiDuCkXHEp8XbYeYa1PNGxnBUFMnJC7famY5ZDnFEFAJAqXPpFB9tGrpxc25fwntX",
  "key46": "3hhnA2KM1scMgqf8Y6dtvhf5pMNJUuh8WA3eWQgmHnwJ9wQEudhLcrTX4bK2TKnKAv9VBZF64e2nSiFo2DZq8EU3",
  "key47": "42zDUex7jYpEokjgQoWe6SLuCRRVdV8U8g1uFe4MbVx89XDhGBKxfTwj88q4851Z5ybnBdayeoV4EYKeDviogQEq"
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
