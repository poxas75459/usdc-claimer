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
    "2RcjGm8yMnFB8XKK7X6xqQ1YjpLKFRteEyezsnAT82WP2dUCW7rTzXcHPrv14FLFVhPgUBUkC2zrKzkHD6sfa1yw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "397LV1xJpTkbKkAD4i47p6NibUD6wqLCft67xzAFzcm7v8HkaE6GNEPHKu25sEhn9yBrMrZ4S3GMBuq7SLojdcLo",
  "key1": "5vRTCsXJ1VBPzqQ3vqLimoVWTjarBSYCWZsoQJXJjnweaCpTW35XWy9bU7JzD8qMq9Ebx3Cepn98zYVsHmmbRCJJ",
  "key2": "2RkjVkwJ2W5V9C9uHsRkiWzH9Xd7m5gw1jAX2WGYiAQCF8i4R85755exfXjAosjyk8YPDbTmHZQ9Ueinw9sF6Hdp",
  "key3": "2gSSa7CSfbu6TEScVK2Hbtsx2sWyXiUYDpVzhXsDaEQqHmqBS4PVmBNcQfiXL23Znf4xaE1LH5yD4nUdtXMT61Sq",
  "key4": "5GcE7HxUUrkQzinWz1iVy5BwG9PuTyTMMjAC6R7JiSSBTJXjJ6rsCV6waeE1RAYavPyz4cLPsNdRBmYTbonxU9Ce",
  "key5": "27rTCpR7g91nHicNtyVU8TYstvRxTC66cVrMW1oLTY8pxQ4gm5AbR9T37rK2KPARZiKfEyKXRggwvVVMDD1RPwFq",
  "key6": "5RqRFHj14bD9dvo8TM3WosK4r2d8SAH3YxxCRuXexgfrkHRkd1xQNAonSCApEUcnN4oV2NPvCYwE37r1nK3JmzA2",
  "key7": "5fUkuvxUyKGMvPQKA9y33qWpiUrfa6BwT7SJ4RRk1GcK7ZwG2DJrP2V4yzSyHS96P2rUHtHgQVUNodcfG79xz8yk",
  "key8": "24NnGFoo6cziV2SYSX7eK7nZBd1GLdeZCoytJWALd7qCXkH8Fn6grD7f1udo3Tsiha5ZyBkvsdCDVvN419jMkPYe",
  "key9": "5gURzo8uPYWU83S77ZoKL82tVbGDmmmzvkr7KPmPmyMQAajJvhV6G9y2p5jCXL6vpANwkhHoQLzJeDuou3XH1DMJ",
  "key10": "5aroBUfbLm2J6iogLjHbcQWiZDYsfUMpBGM4AhQE4PWZgWViPs2Z7G5hxXF4uXoqR2LbSSbwY6od753f6MJxVJGc",
  "key11": "Vj2e6i49eFerkXZ75WSFrsgfwzQsfnpWPXVU6UCQ3xAyVYizdkTxBtc846MPat3oPAMhKPcDDCAVRsGXBNZTJac",
  "key12": "AGKRtjMDXW5RcfEAzmWGzGBQG6SgD8uXmnq5S3JGfZJGQuxo51pW216uXHERihhrMmTxcq2cF5wCNXS3rC45sY5",
  "key13": "3tRTjYMarG1fe5dnfxF54SgvjYD4nzgCE9GGxvMPWQDjrxrowd7V2dwp2Wz1GbegV4eJtfh2Uk2TtQPhKri6qZNQ",
  "key14": "2WsnSb36NPNWvq4k5HyJexKpPLEUrvXuxGHfPM8KdQr6aWtzSqBvGXCVcCLMtQKMHfsxw7FErEJHJCC8Vfqq9G1v",
  "key15": "4zRRNEJpzo8QrRXy5E5CU4tdw41Ut6jsqx6Wez8wvuah6fW232gMXvTrNNDqXkbXt8iwUaDcamYfbuwRSKXG3XLe",
  "key16": "5F1D6Zk9Gx5b8WvhRRw1rvMaiBwS37AVKJSECz7rwBdvjDo2SULB9rkfQK1S182R1YXKqM9WqPAXdN97qg67CCSp",
  "key17": "5vPLqz9BKoo8NCJKP2JFqqezu5vBYP7qyhVEFHzCZaykVVZMtijFWCXQDWBQUas3fEvD4NdwByabt9WHo8Jgiqyf",
  "key18": "3WV6VMTUxaMTymfiHBEsZ6jVAxWDMPMYsx7Ga77BacwMgyKfVHWzPXXJtVs3a89mrfSDpTsjnaRQBV535nacBixs",
  "key19": "xVHRfi9h8QcVpgrWZf3NKXLX9jkLxGesmChKWSv5ysFo9GFB4q3xX5qU8mWeZgdFm1hCXmXFMb71qVAMwemaD3W",
  "key20": "398VSVvoj2KBpq7JNEWB3Fy5Fea3tiZejUQFn4NNfkNNgfHSmXNdDD4MUGPuLcoyrRgWWtkRt9XQuM6uo6mgRLNZ",
  "key21": "5KNr6udweCi9eH2e1oz8Si3tsMVc725tfmuHHRwXo9EXpxN2Yr8zNQx4VfkFbRmcrphAjsGED2MVfqtapR1LPJcn",
  "key22": "4uNL8j3tN3h1oeGXXXESYCsWFap2QpcDYhR6LLvW1FcEmdXvcgWR1c4tQ6FZDEbZhfsFLdLasFwMncFhuPLAqCN4",
  "key23": "3WmvCgP42whvnYvYfrCKJ4he9Eo7uKiEBefs9QED5jNmPCAqwCzRh32T9JGMDioYa2rguU2h83EUdZTNLk4xYZ9x",
  "key24": "3xNSNqbQ7cv5res9YSxqYK8nFLMaTbyxsMJ6DGc1SWBrWTwcWfd8fQZLbF9GM3D8XgxDZeRprJmXwUiBEa78VdTy",
  "key25": "3kpRPf1DiGNVaxgAX5ZamxudaFXSytjPivfDLyQ9F5tqVvGvmDk3cZGkgMGqv1Ak1RZdHGCeXNKjHpAd3ixRmWXi",
  "key26": "3qY1jMq7BLX44NUy6S8y8AcuyGXfZ2TM2yjACamy3xS5ZJFX1U6nnMVxrLJZPv5QxZQDVTKtGNMdecE6j8ijp9p3",
  "key27": "gfsr6DzNLUhspV87qBwKgvsjRWZoHEXc2T4H3akZexBuFxU4UwQBy1FocUVBzWD8dgR4wGEYyioyYiXqxzsRhGH",
  "key28": "4LG7sC2eZMDDfoodm6tQ2qJR8FUxGxSBVzvwNCDEENWXnFdQvUuXuRUFUTZjeXpghC8k3BCU3LcaHZfBSJNXRWKb",
  "key29": "3sV4k5Bsymha11MVYxgANuo9dCoAvhhS978VfS8uqLY9xDrXTLrUdJ98TRJGhghsgFCmNQkakTBXuHYDE24cAiSG",
  "key30": "5etM4UipHfQ2yRvwUqud7nhgg88ZvT4f2bKyvo8Y8Utmx4SKvp2hXS2KkhLEtCVwERUEkiao4qrj8AUYnjvAESPp",
  "key31": "4uhGAKkdgi3vjYgtaJrwARUCKbw9Kofh69zfgfGJBkkwBhEeCXgvQA76SCj4eBLWPofFqXzvqV3peGk5TrJzS5Yx",
  "key32": "cfnjHJiHXdAaBy4Y8V42Xzj2BMjvReFrLoYwkCTrV7G8bmFeYYT6onyKTTVvuXsx84Y2RFuMiL23smFEkCnPYAp",
  "key33": "NSP2or7rmbdgdBHmuQxGQgwdSp7sVveFqUPHMeaf8CFnU63YYNNtiMSisAkSYL7aBDJqef8CGqAXmrFnpiBcQ49",
  "key34": "4PXbHng2EYcBVQVMa8ZYHY4x2cMVEBezeftdLQGecZtXUsxEhNQm1v3uWxbAyZsAZY6NampxEY297gvwGeZxRKDz",
  "key35": "52nP7xUnRYHsnibD3uLWtXxTeEwmJhE8bnzwiUcp6cxJwb2AgVLg9qtzRutszWgY7LM4vQYWpALwvkSP5s9z1FTQ",
  "key36": "56hvvuEUSz7aaEgULP4bDrQ2fx1CdWaYgmTD6REBSKJMcH9PcfuPrydB7EJoyxQLuT5M54VaJGkJsnSKE4j7mPFa",
  "key37": "2W52oFJ8A9LkA4bkX7hUbapRHDDWqNBCiit9FVmNkUEGjXpYtsQYBBytXo7cPQBvEgTHJEwkPZBWsEQt2ptFovJ",
  "key38": "3WVKnwNMwUB7smPQBwnkoynz55YQCpynXQHK34Y2ebNEUV3SuGPnCnZFwCHiiLT1ZRXvWzVDrw6PGF3dRqJgfXVk",
  "key39": "67K2Q3bZTTRiSzJJDzw4PyFtBYWmQSt12p4b5pbCeJtQYF4ECeAJ8nn9Gv4F4Aut9TeRfNb73yVLXwZcq33GXe3j",
  "key40": "3Hfgnor7EvDN3gzVFrXgKuERdMtziBnkYnD33UtZ7fyQYTPcnGExu9sjNDHXu9heps7SEGzujdW78azWCjLbrKJW",
  "key41": "3j41bBwYDHTP3uhiZfwjdL1bZnGXB6y9ExQjHMrTqPsYSKnPBBoKPDDGb69BP5f4pLxc5LHpxYxwZJtXjJNScz9c",
  "key42": "4kBaP5juJtQUTRUzW2aDo96Atj97Q5W8bKJSdxTpB1xA7XjHjYLPhYofYZQfgUAPGfPXvRLvaCWUju1GLYKL5ynY",
  "key43": "2rgvkTf7fd2rxWfA3A4J5v42eMoBm3bgG59yXRdGeLr1rfKyR7ER7P3mmvQ4XbPVhcGvz6FpwhGA1nL8ycZEs1CW",
  "key44": "wJdyxyiuK3p5hejsqc2tesaeMRFYxPzk6rK4W5GWPK1AJs3FSdKyXoinp6Q4y6UuPQz4sGbECSUsENwMJ9qx8Bj",
  "key45": "mQ2tecc5ygEMXRdj1paKQFEpdYChbDUvDRSqpuWwuoRpr4bafeatdyyPjuemgz2wFM3N9GEiFn2gTYKNGBj1LXJ",
  "key46": "5rK3LNbsepgr8PrUPcuyCAcmbT3TUQZecU6b8k67Yhskce4ijrUBqYmd6t2byUFXXFkDXjUbP8V3RxEkS965qcAh"
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
