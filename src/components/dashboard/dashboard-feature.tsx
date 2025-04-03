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
    "5BP5xmyY6tjS2wTPXczWWi6pVDN5GmVgnv4d8rgTXGmAwmRRRytej7kY5RbFnYVHKF6gJx2WjwUDbN7yMt933826"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U1NsVVuZsZ4QCu4NE6h3u5EsWVR4nBWGwwjiuc4Zz7nF6L8eLhKxXGWLSeWMfMSgnwNyQARkfv7JLJH2s6fz1Lb",
  "key1": "5nXjkRfzgcAKR47SQoFGAmc7d13dtfNc2GLykgFAVBU6M1xPisiWHdd4vE3atBoa6hAJsvVddd3uAhvV8YAHpA1S",
  "key2": "3JXBFsa1X3Jbmka7xyMx95CFVZfLjs9wACoXiCyZHwfF5A1A8UjpXPgpGuFuP8RLUup9unZ6xxzG5ZBvztiD7sWi",
  "key3": "41ADt2aw94ePoZvbmZnuEXPp5A4XEEoiUKtGcJymSXh8WxXtwzRqKV5PFHn89x92XPet2RiJYHxz7gfChHydmXMw",
  "key4": "4g1JQ38hzJg34MZWvaeYz2Q5ksRZkAoGgbcqaBXzLaQgSJdhoqWjMLsdUXKVGnuerqdkzuifGnTLXVMBNCP5FwR9",
  "key5": "5pgZULoRGpa5h6XV9GxL11SYLQCC8syVqAbTKra6r8UVKCEsmNscd6pDJnrg38Sv9aoh8EdkHYdhj5pFPxJMJa3K",
  "key6": "3Y3R5yQHJ6neoXTzoifkLPtB2zKRTKym2TwePtjinUZVoZDudvLrfryQGcKhyvibGqJVFvjEfy2cnnhPEDaaAjBE",
  "key7": "PSq11KMXZYpqGLqTGrtJevjc8yMKHbbvGvmPLqWATJhJTUB1GiDCoaiBrbJ5k2Ri2cnsXi5X57WxLXuR8sZfL9y",
  "key8": "vSghPjqwhhmXYxYh7JhZi6Uioxm8UpXB52aEnhkF4LivKGeqhDcnPRXasrkjnYn2oE8fRWKAMdCt5uwUth19dSb",
  "key9": "5W5LvxrCsC6hGTPxD6Cy62uCVKZrZCM5vGRtKFCNQF6WNfGrhDxZ6YyG4TioFureQ2Mb4AeVx5rF9tkW9tkrLndG",
  "key10": "YFRR3WsiRp89M8KrRjBt2hJwA5RZdY6j277dJeik4xJQBLtxdUpNF3vbw3nRsYWyXEBjNyuuk3QRNirij98T64S",
  "key11": "5CWiJMhzLJprTJzi2WCkWqC2aPMXuZcdP3Bw8CEqNA3fheypxU27GAB8fzUqL5KDRWcbeABLXtyq54YhAaBbNU1b",
  "key12": "5aPSjj9WSQzNtrfAzsf4JWRAh4aoWspcBhqXFNoYnD12ZNWev3S2sHTwQxtmvNEUvy4RKTgwAURU1cRxBTymYVGq",
  "key13": "5AD35u93B3M9TtPwwGFGoftfWc6dmipM6XNbQMZqSh4uRd4heeqmjDLXmeWaoP6Wjwjxgut3jbvrQtS9SwvM5pog",
  "key14": "4prZbAALhzWtP3S6xrWBxEHPTtVovz7EpWBH3NPH4NNorq86FnKkCY6BsoytEvQQDtwQ5Q8Drb4BumQEBQGHweAb",
  "key15": "3tjftPBuxeGNZRdzVYFwn4j2oaV4uNsVjuU5duCH79rvYUu8ZnBwZ6ZqLCx3rbW7xsNXSUJ8Yi9jX9ytXcgdqafQ",
  "key16": "JW68CBto8e8wP6gjywjZxAdjJ6krnRdQFs9TPqXXJuWfHoghDgme3v5aRMcthoAd3EYdUeMssCPJqjp2cXyKmbC",
  "key17": "3zhBeJB7TmDNd4vXqiHRQpShHCmJ8151xNrnhW7MuttZzApbBSc8MZQSwouhRdDE7fdFPkc5MkH5iCFpmScBkSsx",
  "key18": "2RU3VyDVpSExQRb7D6whD17oByhzbYo65ptn1DbGJEXsuNDn1bYUzaJhdfhQKrtwE7LeUY4emAr9jeMRMgKdzDen",
  "key19": "4HNTp6aLYEhonb4WLPhMJCVE37UiHbwbYqry48haMB68RK4HKP95Y38EMmUWivjcGPrqDXkj9pwWFWMdSyPcQ3U2",
  "key20": "Js7vE4SnCHE4Q5UNEBnjBiC7ksB2iGE9LBtfeEnhczhDeEuNzBT8Bj85JpeJykYczjn4joZgc8SW6LTmHRxeXXn",
  "key21": "4aNpEVRWdRq5WEghynLdBwWRyTQeTqJAQ4nMq4Wdh6qQJHfq8ZzT7Lu22gsbCTN7GkCTc5AgAkNvHrDM1uMYDgdu",
  "key22": "5mUuXciSt5MAcsZjy4fV5QD8NNAmFXpekveNDWZJdGz2wPtj1LiYGJYZtL5X2ytLZYM4ouxxTn9ESjP488htpVni",
  "key23": "5YMNsiYBLt2mcjjkxSQPUJhtJthzpwq1AY7dpV4KSLKYytZyBKgsZkbYUJx9Zpuww2EDGX6fyk7JjE2U3E8yb5xr",
  "key24": "CbQ4uUBeR6745m9fW4MGPXVfiTZPSpZoYAJFQsXJjuAzQ1TjfxRKmPHees95eZtFHBEr8tUDh9WRUYAQaxwuzKC",
  "key25": "4BooQ1zefV4Y35pcrudioEvYQVqPvrv4ek3CofMFLkLMqG9Mg2RwjD3eDzVkTTW2UAACM2ehnMbnWbWfDxv8hAEK",
  "key26": "22DAcb4J4PyX9GEFcjBXq1t2RXj3L5XfV6wEWu9RSQzHWS2UwpYy5VEwnrSbLjkWR8hc1nzJh8ABrGrRDbFiXVfW",
  "key27": "Lj6pwE4JAqZumurSPGvEaqKVEKx6uPcDPR6mERnuL9KEtsdaqQHWhELnnsqpjAWB7tvWM11hm3qFUq9bW3WNrcD",
  "key28": "4qYF51UemRndvyNMXH9qcwcJYQX7mnWxcAo6hgVd64TexGdhdJecMqsdgeFKTvtjycN2fanTz3Cmhcmy3JDp9nT5",
  "key29": "3w6b9NcWj2hVcEv6oBxNNqiYYzWfQuzXA3Cvsb1hZoqvPj647SoCpriF8gCFRhuiG9c6MDGQfBhkCreFh3BmsLcy",
  "key30": "5GZKLKKZza66K3dotXAErNg9JsBjbeSiKiYHcTebCEjrss7FF1PAQDhctH3CX5WA577nfrFmhAahgfyuDuYUPoyc",
  "key31": "5ByfaF998SJoSHCfogtjzExpiPQEZcZvCCpcqPVQov5GrPSw2gaiiY6mDPYq2kGfY5yyR9DAAiDYyc6GfdAc4cci",
  "key32": "FKv2C1jzwLwbsi7f4MeKZvTiTb2WWYnzaVK6PwWGvQHv1gMvnifkcfgBJFEY1VXvpizqPVfUq7Ntz8PKXT87Q6j",
  "key33": "2DYkiczGmcFhLumBRh6XcT57yCaYmcm3Uy4Fwgeer8meVM1mBgETUczXodGbuBUeLgEWswVz2NUJgMG6qNjwwKxz",
  "key34": "49AvoyvAMQHW2og2CudkJyNu52b8W8HwRMG7WNfvPTiCCmrepLwLeKNBHwYp7FsRoiRzvsdBUwrvrV1ouS1CiW35",
  "key35": "4EuESJgeXBw4k9mRybrRLJ9u4Wnwsw6vhEj1o4oAEksXAhD6kgPJfuMUH5qExmP7bLYNHzuUqBfM78anpfDJLWbH",
  "key36": "2b2k8st4xkZf6XXzZft2TQcqeJdVd2fUvQEnv3Z4yKXpKAxevsPxnmweA3Q37vWHkPqXp8cjBZ258GD9wzRAGzi8",
  "key37": "262a4aKPmAYDptDjoJT1eooDXovQUSGyF6XqCuJYh5ThEnrjmfGFs1FWz2SLjgAHaLFbjMbFkcC3ZVVcwdy6U4AT",
  "key38": "3usi7dZt8eoXZJcxCLF24jT3NVHG36hDJBTmUr7Dau6ArjDbzbCxZtnhBNSBimRaLEFaSGjdHeXjkE7qXhJxvZZQ",
  "key39": "pUFQGui2YZqy2Lq4Ct7DyDyKRzNVw5K19DhzYa7aFLLFMJAjDuNiDvak4yBnG7zQzYmKbhFuw5jkg6vNhsR4McH",
  "key40": "2ACkp81xyCjXsmNtvpTrCx7ZCxxK5MvFRC3HFzP2PZ5rsaTZgfVosuWz4k9jeo3Q5vFBkMogAtgsWYBQ2BsfeFGn",
  "key41": "3s2XX7W1cJz8sMCGB9na1VpZhQUPAqEHX81XHthvEyg4ke7V7Kp33GyM9y6nGKR3neQjZi6r99JZJSoVGs6Uga9V",
  "key42": "4442HVkEiNVq11ZGp4VMZBrVv5LU64LzBGsKVc45QSb2UUerLHepoM2T98HNvk4x4S8oW2sM6StLEV8NSTRKtK34",
  "key43": "44m5qeH29iY9pkVuS77UsAr9LUgHtyejxwJjmSwvCQipgqrH9SzpF8TiLp4HGxpQPjqhzk5XmWmvaA3KX2SRbDdu",
  "key44": "3xJZrhKtd1h8QWZKR2dPKpGn5PMQhEQDjdKbyEbuuPLY8z5SFqEUGVmZQuX3cUYKhU52q8bU6cQFYxaTHgKJoGxa",
  "key45": "4jY2FQibFcS39acdR56J6c7mbhXZtBjXcGuf5mq2qg8HwooeiPiPbJgr6usE9gkEwjCnLCBSDgV46LnQCeKpq5Gq",
  "key46": "5A3jQiRgF4yWnYTmKATm86AyYtouQsTLGQewosB53Lafcjt1aEvg3Ah8232FSN4grXFYh5K64FDt8SjyQ6vPFZsk"
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
