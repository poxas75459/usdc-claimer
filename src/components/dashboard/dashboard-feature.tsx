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
    "65yZuLqqP78tL4fgXwrqv2xPZTVGQJEYMwJrzkSsVQAViZCxd98WgAFGbEJx5AgzqRnNQYYfPWw46FfyDnYp87eo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7XaQRztioVY6qPxr4vRCR8vfPSEpa5RBnTNak22ftghaDxANcm6qqNeDSTauaEE8xcswWtaF2iganR6yfr2BJxL",
  "key1": "53nBbtmmDnZHnhFnQPj22BSN8GZ29qPLpx8YNTu99KBUS6butGyA4F9gH3U9Eh2CRn5vsGSggz5BCHjgzSnL6kYt",
  "key2": "2D5GccayLiQGtQXCPG6rY85reFNKQ74wb4e8d7KBfmkjaQLaKFr9isrUQsuwUQHhYC613enwMHCRB1NHjGLXSLjR",
  "key3": "2AFjCmBKLejUrqmZn4oHLx793sud4Pj85vDJVbu67wAMMLj3qbawD7oT2eVp65YG2MC3Dd9fYCYi4YkFbKsJWxTV",
  "key4": "hWtucbF4crv3g7m7PpJCwQeQZ7isJutW3TfffmEU48uemmqVZVGmXkKTxBbdLXiRvrSJzp2gSTwXBQhgDZuB9rc",
  "key5": "3sN6fWHzbo14VXBqZFRTkj737JiZvW7VAio11GEruWGUQDA88bjzFiQBwgc5TPpPn1VP6rDRuRe2AR42Nkr3PELu",
  "key6": "2QeBH6quTSw7zT1egim4fQNAXgpJHs3Eus35RV5tXJs1ggkEVv1ycDUHyiK8oscQ4mzbMtAgCWYA7AngEXf7Laow",
  "key7": "9xHF7VfVvWVtyHrWEBzpDWPkskbfhm8yAWxh7ZpQguA8JZG1LHAscK7x43WZBi6LSxiNkvtBPmHAqfBTAbJXbXU",
  "key8": "5NnarfWF6MPfCpcj6idkmKhrWJ7Cud1crAWeqfrxT1t2fswH5GcigaQm1hWPaALwVwvForTXt9w2iAANQHyHSpZn",
  "key9": "3CMxjy3vP2nMj68u7RPsz4EyFUg9U9xBZwfJzUMehdFaFx5E6xUcjM5LtXJQFntyY5VthbFWGziDgBggWzeYFn2V",
  "key10": "4A8NBFpPfaYXfVp2JTNVNGaJi5opNFuGUJRsrkMLq9nhgEU6zcRDn8EXBczDQ6jKaJr4YquN8R1aNFErvmtGGWug",
  "key11": "5nnSYM1ncYWMZo9LXCcH9qrzZrzjMFvrFxzCXfHTpgNGChNsGfeRYzdQH3AZ38bC5xeKp4EUM25N8K4Re6GiSwzG",
  "key12": "2jkUbWeNM3wjhmbsMsVGvV3SPLzQTdDuzozuK2ay4xrLf6ko6xnq6pBgSVNGFecvAXwcRK8vK8d31xd2tgCDvpPT",
  "key13": "4fDByueg2xRRmWyYgz7Z4o1ZMxJ39aFP1rcLR7NWpPv5UpG2BwcSFS3ZBbfpAXXJSZBdcdwaskWFbxHjL7dsn9nm",
  "key14": "3hNyWqQdXjtKm2hwXHdWQieoG7VKhnVLZ8yY6LWUZ5hLd5A1qmfouV9cpeTLZoYsS3ab5aGGRNP6LcVL2NXhz5yX",
  "key15": "32hvhiYRvxsp8SqfffnrZvvm36BLUjpnLU5mtr4o7Mh3785jH7CUSF4s27CoLfYkVDbSPyWcCpzDkjTu2eRFKxVW",
  "key16": "3bMsptgPndxy8yBFEuJVTHvsUjAWkYD8dztdwf3fgVcCQae5jSD7uLkncD5N3VNfoWoUEqmmK5wKYFVy45v1JRXY",
  "key17": "c8DWFuuuQBwBosC2poMRgEz9Z1HobmCar4CuKqpd8cm3Upn36zZDCvQ8cGp9kPqQfcdzvt4Z2Pannwc6netuNn9",
  "key18": "3RXxEE3h5XjYugdrPXYnxWKnA6nbPRdvjLoD97rHXfoVW3kqsFYPTVeK7WfuciBQgVGSu25pbBk82nGk2sK5Gvuc",
  "key19": "2UKeLQgENotfAUZpyj9fqhSnNMKG1YBJZGgdSsTNkD9L8ygR5UK5tyEZ3PsNAanTbdBYXWquEHqoDuJtjSJX7XHw",
  "key20": "2WEtS41Seruq9tDXL3qqU11nuuFTrbzdYNk2koyTpQGHxrePH31Qvkg4E62UCML9d3WY5DjpVYCzXZQTYLiPb96D",
  "key21": "dz61ToreQHsaUZg7EnNp24efH7tAKDedJSmYzyHHcGZfHwf4ATyNcyrYSjYR1WWLCx9gqSJAPx5AJuyeDqwFCFD",
  "key22": "3irXNMsMoRHc38eejygmC9dBeHuCJvvENv9rMpXnF6iWbo9zguYxrCZ3TxtYSf27tVeFghKa23nQ4kLC9iqEtmQB",
  "key23": "KYXDhDnN8EwyAHN2seadzUxTSTVREZhNthx8criFTM9bUSE4WdmNF41KsPRVhcbMoCMBRnQ1EUvMKwn7qyaiFop",
  "key24": "52eJs64UYFwquo6BuMmFgkCDnPtucSzZadwa8uka4vNkFAXKJXevwVch7LcxWLqeZMv7f6DryB9rPHfT45rGC9Sc",
  "key25": "4NJrQiVWkmdiHBj4XjXCGcWF7tx1bHdfzesWRKrJWVuFsYEDV7VqChhzGXXdwMH7qDdcwUhvuXvo62BF5tcS1rAb",
  "key26": "2VY356WieZDh5LTX8x8GNfDvjQD6PhVWNGeNSieERjt59AmbBiFf3hMdAaw3na89GtfeDm1tdLbj4mw4QaFEJLA6",
  "key27": "Ws9GeTL6uFC24KFbjJBLqCd5RLc78Uf9xB2u8QrBXmjARrvB3ecYv7Cd2S1PH2LNonJGki3wZTfLbn23Mitr7T2",
  "key28": "49KhYqVroR3VNDWK4hPt4XVqZX1KQCXDPoRGzHGWmmJpWKE2CveMgjvMGoxG6xWu96uo4Fxmp3qvXtRV6WYkh7g3",
  "key29": "3p8tnHD8EVxQjESLd6KDhu2tNQQE78HwVvvgqvKDANsHUwZGiNKuaPQT7ZhQ3URzLCGuNmKtKsu3tEpnS5xVcfU9",
  "key30": "3kZYMGUEmNQaWiSmbPSuPJCiywsvvk6uXtshsThHR3rMCuW2pQgpYEmKLcvfuYbpuypu3PBefa2UYM2fd6k9tTWk",
  "key31": "2nMn42mj5bRgkyDQstYjYXHasFufXxquWo6o9CNQ3yVKfysQLYh8zgFUpahfvohPYRu2zBVWL19FDhKPTUMaqW6c",
  "key32": "2aGtxk31jXYpqRn2MsxkvG3K3CKo6FkGfg75gLZQsoB7tVLyCJ7dpRAyZGtJ2XL1m17xTZ2QkHmd8BhCvaGwa5BT",
  "key33": "3x7nnDw5WKfpUoDUM7HsQyCrJFCeAsSbzFNNFn6XxrKhN7LWSMvJftEyfZrBvevAkW5bNG9Cqmtz8imvo2CsiQvn",
  "key34": "3gairUhQUafruYtK62uXwnPAvTG8aPr7sbreZvcMwDkLkkKGmW1RqNBptf72ZLngZgPriypdcaihUgytGyHnfCfb",
  "key35": "3zcXjaRjH5LvbTUq9zvZXkptQw9xZxy2zK6E2fwW1EfLdDjYyHKbGKg7KM9p1aK3a7mqQiEd5it9WzFRUcR6wv1h",
  "key36": "2LAHoCzimhd8VfQTvXgDP4fH9LUJoQmuc5MZ84mmszYf2sBmN6J9CEETLGbS5y9P4t7tZEbsjsYDDtfDsSmd7h7N",
  "key37": "4h17f3AMYMtbv6tDqkZ9T8mUpYUTd3GrCqQHzadAYaSq7iimEARjsrdeNURrWsZDgHQVUAtt8DRVhjCr9Tisq325",
  "key38": "3vx7nfgQEqEoE9mk5KnV1YdjRbAJnh1YkVhAKuX9kYLSpnGYLUPNriKewotA9wmAyZ2z7qpUnRrH34E1vkXNqc5u",
  "key39": "2fR9PL9WwjsFBgVG9NWio4UVZtrwHbNM5xMMsL3dW2krGdyNetzDNm9TvXVnsDDwKr5ft6Kdtpt8as4aGZwWSLqq",
  "key40": "4q7TefXVJeKy9xM3TwaJbdJGgETAK7BsLye8edyMAJqrt4WSoD41Cq1GALXqtHM4QZ4UqxsRDBLLpsEPZzVb7eeW",
  "key41": "5NoXN2bXk5i5pVX3BaUL4iVeEt6GeJCqTVrvEiPuqR6BjuZD8NgorhjDT4u5wx6SXbmViDoKSrjSrnKmPYQZT9hW",
  "key42": "2aLqew8S9pk7u4U2MpysRpNDaQf2wq8kZj9y74f3br4ymsACrjFkNMXTm75aKbChoDmdPmHeoBB2GKZx3JVGcKQQ",
  "key43": "3VcVXCVREBzwPRKLHLiVFs4Ex8Y2LZ5Y7NexxGrhd9xzb4PuNVpLQPvNQneyikL1BfQ8gLnUzH7o5APhbT5hdJJZ",
  "key44": "3K9uan5mzg6VAFfvf6bRdUzZRyyZgD3TP6yhnYkWCiadRvFHketabBda9iK9Duoovt763hxMDFiLnVPfQa5kMc6C",
  "key45": "3N7wQziPUCGVGkEtMfjdd8AqsYb8zT2GpioVr2HQZQ2r2m8qFQgx4RXUyk736xK1kg9yJtYfLpBWivChQvzdvT56",
  "key46": "4K9yQW28PBshK65etyAGX1xAUH6fXw6JLHF8XkJ3Kc3f411RKZr8Su7yXC1aeBSFpo5LmxM7ft9qvo6JEJ7xPQNX",
  "key47": "26Dax8PDcZ5WopKmp1zhwmdrLPZMkzCCWTFBiVUzAfpLHNWz9suCp7oPc9MC14B4nAt17HhxGQKGqewmmm5ogckL",
  "key48": "66uTgFAish7FjPD4Z6ymoGr1jkUkS6aSeBwpPMeQJC2Nm3knrpiNBuMQw3gXesiEqr8pa3QY12Gbu9XcEG18CStP",
  "key49": "2hLvd86T8AZAaZwiX5M4u6ZeYKxKpRYS6r9ef8qC12XsjpLUqgWYNTg2ztY3bw1RAVwTAf7RWLC1hL8121vSkzHU"
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
