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
    "2cT3To5CUusorR2iWu7jQVourwZiS3RCkCjYpVJQznJGFZArbu3piTFoVBzLqQ5JTD896dUJ9gBfQPE3SGRwUBXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x7MDNFwyaBBhHDRETgNVxo8RFLKbtQJ7VKV7PXR3CG95QUYVuTRNKyhhTwEp7BHxJmqvmYagUyn6RgRUVumdbWQ",
  "key1": "1UmUmTrWih2u4A5ZgKFndHnmTozEskvE9K5ozyi6XekVXptMsVMoFCRZEiB71kKxdJ7hqNZzjAGQvc43i7a4NN4",
  "key2": "5RSV2aZjxNovxST3V5GyKnZLDtRopSactAiDuj5Rc5Ppt4CAWAgSJUArz1P1Poo6Nu1nLoCU8QLLgCFeyff3cPNH",
  "key3": "44FAmeaRdZEP2w6kHWGWnnBA3RD265TLpAsfY6HEsvK7hKnrxPqMMvrFfqdCTBGtYnMJEVV9LN1NBSTJnLHyoJKh",
  "key4": "SiCuCpvSYn5DhJ3ETupM8bgt4RHcEhzxri3zUM5f77MwsKHN4bNkaa1SHRjz7WSRSTJCSBCbF5PxTVPNiEU1Wm1",
  "key5": "285RZLci3jvmvMkQ1CBn6Yz1STpkFcUULchSWodYksWMWTDbwWzjZGw99DpKvxPUw4GisunJ4j86CPeYNLFa4kLL",
  "key6": "3zj7v9sAbjYwgErUaGQm4ByBNhS6qgtazhq5gkf4JJFzQsB5WwBbH7fiM1BhzvxBGZVGp4q8g6uVchWiwNUy5RyM",
  "key7": "2KYnVUNPUuUnWY63iuPd7gMmWiDXE7AYtvXJ7pjUPWmchta1Tw3u1jYtx9MTnsB5ge8fxF1RAvnWqJPM5BTy11Qz",
  "key8": "4CXidn3gFNsr8JSrnpyPZcwm5zbc8osCS85QLaanFSJVziGW88e5A6hrxrSdNj2b8atDaxT4rPcNFqcpkHn3uwwK",
  "key9": "24LfUxxqgFHKuSjmJRJpR8F1YT7HPbTvg2pz1nLzqkJ9HeLkrYwRScrYS8hz1pd9W6tsc5D3Wi9xutvzHvH4kaPb",
  "key10": "4upVtBtv13mCiLqQ3byRWmZ5rwgC7iP3ERZDpwQz9jDmBgAamd4x4p6m5cwykV5Su4Nh72yra5kbMDGpKNz5Ty5y",
  "key11": "35nMT6oiGNMYfZ9NHwC5N3GJELyTrUBokoknH9LwN8vnWiZ8Zhj1TQBRxmVdwtGU6WfYgs5wyRfbhCNcQyEbPaQJ",
  "key12": "3rDk31FQbkdKFKeyf9QmngrPAsXyUB71maMNPz7BVeZYsVMrLfEB6Bqd32JTnDVQVgRcENyazBee9NetHSh7m1e3",
  "key13": "3zEZ2TSxapo48NHEq4pCnmivrE4SUtQsuFy6Tcb9rwyW2tDz7T2tS9tFvbYYByXYu8xLRPavTG64ryfNji5yE4aK",
  "key14": "4z4o8iDKHAvuGFa6tXtAimTGKdZasbHGUhpkQBo7YxfBMn5kE5Jm9wv9jPSxaJUGPU9hw9Uz6v7XecTTPHvjS5yS",
  "key15": "3zRN7T8aoVb1X4d32xTVWuKU4zMW91wtuGwHpBNmeA9mXU3JMusgHwNvFCTu1YR8eUxsz83Zw1Hjt5YSzAtQpQkf",
  "key16": "5Z2SZx5W8gqvRD4kyfrmHDfWhtLpqBKJsYaWYBGCqYyW6b1TvXAkhfDFXyXadGkLBhkPXgtDq2atK441qg9Khg58",
  "key17": "3saimzL56ob8pQ6pHwUoE7aczNgMswPcNG37EdX5woRhDirTzSmgVgrEruh9TcXJEs8ceUmpYgEnjmW5j4x6KnaQ",
  "key18": "36tvx7VnVU7hCoij72XxE1Uh3hdoxPWUodHPR8ULv9fGU58rCBgUihHez94Fikjna6LWYuNndH86dfcFeSitHt41",
  "key19": "2yVjcz8FhmZJSx9p4miCqpxUfsGtcPxsxiKbRdDFfm7puDv7Nq5uSVASpDr3AjmKXrYV15zPWQs8yJVbDkJAH8pw",
  "key20": "4nCyb8AkgUHuHbN85CKAGK28jxeBVfsXt7vHekAobGu4xDucHqA5NbBmPgohPgEX6Y4QmsWbAdUGAAH7HjATEBMg",
  "key21": "2N3HbB31wygeC3rMPTHyUZUASCcncd1TV5rZ4vb9aQKwpkndcBfjEjXwsinA9avRrZWdFQTHXNyY5P37LXUw2KwE",
  "key22": "4epBP5pFkPSqr2pN2WFppL2XKftZQ3egq2UQTSaP4bAxuE8XVfk7puvLrdiVdrAifQfcDvDCsDGo4rvCHhtiDUb9",
  "key23": "jQ9TUSBwT9CtfxT3pJFXtHp8Aca58FBLMbtnJnahYA7qSf4GwqpKEuNJXpg4pEZTmxuJf6RQox79oEe7MQ9xb9g",
  "key24": "4gCbrh2zmWpMeWZyirjZBrTXNxg2XxyMYU9fZArz35jwfwiCWrdsdGskTHbYsx5Mb4VFUcaGTzMyRHk7rvHqqufE",
  "key25": "S1cLwd6PnEexwURSTakphtuyc1LomdTE9FxMhbq7VwDaa1TVL2U16tx7JPtUqZbMwP9Mgfzpg9aSvU4sGbAUi5j",
  "key26": "4Wd9y8NbGe5Dw5oHk6EtXtTiYTP5rgfNUgWFje662GhNLyQXseDdBYdP6QSemJZiJKxrZFnEqy7cdM3vaZp4XFB9",
  "key27": "5PCjri6Agrru5QonaRbRJQmPW1s9S4vfVJygwa92V6RPsm8hGvEm5tLHjKPdtvxggV2D8E1GDsXA8ZGn2Si2m69c",
  "key28": "5pfxVY4s6j9zPXfB2iuBrYmPmip7zhyvXdRiH4tnc3DcWEBu4cpeR3VVf7uFMzH7BK4kR96Zfcqz6KAaVKPnRums",
  "key29": "4JXExtPPe6ebnJERuo4UR75UgC7dFQLBbyeQLnwYKz2L566AL6f4jugaZzCERmbnCajRwM894C7axM4ajcQ72wcb",
  "key30": "5cRuLyHxwLYsbucLLrXxj8DrviANKVeWmDXK7thYt1bXYXo6aPi8apuab8CpszzdG8MrayTWkZQmrN61gUE1hZVB",
  "key31": "63GJ5Koh2FzyjzKBsukkeMdbU736AzFoGud996xogEF3AfrVQ7zF5McPvsGxSyuxpb6yhzyituW8TKbf2LXEk2Jg",
  "key32": "cZH9w11Z9GsVW4SQosyuP6BURNKrwWLWDrBn7t5cMjrXPUeyvePvGYtYtgmtp9e6G3sopkuos56DTaMz1xnPtSd",
  "key33": "4S7EV2QiNyESh8oAaR81hv7kCGQ6HCHSM3soKWMbeCkQWwRutW5Cs2N4eMHCEBQfTUE1avSEiLHPKsxUU5YMbegQ",
  "key34": "63w5UGMkfhYedB7d4Tw9WnATgvQeqUKKHstzLbvNh9V1tNkCFdC5RP7aKWBFDKu4wq3iLiHN9koRuhkezk5xSsHn",
  "key35": "R6NYefeWSq5w2xDMdSWj6t3QWsnkQuxQy4MwQXDwBGZg5cSLy7LUW8AmEPmGB8RZJxUQNNzEsiDCtXfoKQN3FaL"
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
