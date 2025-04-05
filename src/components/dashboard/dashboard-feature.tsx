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
    "2DSeHCyrnimboKdJqwB92pP31YQen39P1RZKvuFutgZTGELo36RY6eXgA1zQJ6RydxtDJ2wp7N7Ck5Y8k7g7kSgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47zihoRmcGpEM9CEXAYLUb5dm7g99ymedTawz6kB9roDarSarnuZS1yDXCGMtZe3BfqZsTL4bZUxbgawEc7uVzjJ",
  "key1": "5oWAWxHxoPWGJsDvPEbcWvvaV4yB48HdwJwM7qDJoGo9e2FXvgeeHgnaDvRf5em5PBL9o58fr2tzGmnvnJZovooh",
  "key2": "39ZokBotzvcGMtDrTvZL9Ab5BWoG2wCRTpFuik2junWJmbXFhKDuUmC7NVKpgc7EMtgHN1eTBytZL786xEKhktX6",
  "key3": "32pxXw3pqAE8vmsYGjiWBntuMYb1ppCo6RdbswLRWRojisQWZ42Hrz4LLrmNNWzZZau7tpSL4UsaEYXmQ85pm8qx",
  "key4": "4mMg72ZgSMNV2Q2sadCpDpnvCmNLvnSgotB93tJuzbPij7ySdnFvwTYpuynbSHjGEWrK4dZu7JQedQYgjhZKUgw9",
  "key5": "2U8ByigPdjV9bN5p7diPq3EMha8G6JoErFWggnrrNCuEkEA3bVaBBNoDbDT9cyoByVhGu3TSnkLK1dna2QLYxtzf",
  "key6": "5LTKQ1JZRbNK1GzpZReQNM3ecugNkuVeVQNwyan7H3ms9zPexCFPSArYxQMqc1hHd2UNr7sXmn1A4kqvRrrBNo8h",
  "key7": "2WJ1H6q6mAhJ2fuGhTHbRMB2jC7WxuYSkZe4U1YMCiwcFSKV4VkCfenpmUoXj5YkYTPZj42UUgrHh1HxNJ8mdEWu",
  "key8": "2hLxLAJ9SptUrBdFVh6wkKedu3ihMv1wYeMokhRJUMNqgajzGejARjyK9ADDUtPgQjPUZwsQT4STKJLhXnH5strG",
  "key9": "3TYQQbgH9R2EUpWBT336FekHisAUgUKNptz1aLGtPKp9phSaz6QXHMbUYhG9ebYazDY3J8sNicrgBwRiT7kiKHAt",
  "key10": "57QBW95KGhcupU7beyeGZw6re9Q5tgPKAbLc8xev2NcMrjftHsBAmYmCCvYDfbRBDPvBn53ZgK4dg39MpXBhqHTp",
  "key11": "55Ae4Z9VfUv4oXF96fq6z8YPjnd273aVWeqRq2RpzB5t812nA6296zfMoskpNBx3JsZ5vx26yhJ2gGLN6WYh4pMh",
  "key12": "2eXxFw8C4pYhMiCEgRSYS8M3Abgv7Epf1FhQJSLYbSqt6BnguhctZuWGwfRTmkZAJvwRem1grTvkZjohHBKxMu2X",
  "key13": "5oheR7XX11uHMwvbWuQfiA4j3RNihTY8oFQ3R4tTyYkTi8MfKbZZYXDM7iRJ6Fb4Xezxm9c1SrD9xVEcpGtsxj8z",
  "key14": "36uUAMdyAwNbfYJ5tSH5t1NQt8859sb9U3DgFRqtazzXxZLWKfwVM4vhCpwiRF2NxrcX4MsAWZWguKsrDh2RyKDQ",
  "key15": "4KWpJtNKAx6anq5NhoVW9coz18eNXKkiXkHwGf3vPMYBb4An7cWcAeyo4t8tCkZGLPZ9CF4tfrogAux6vbxNHJwu",
  "key16": "39ffeRiiGJx8MAaVXPjYQLn4cb9koU2m7xTQaDbLnCw7QdM67y4RZcmNP8J1SMnUTpfFxddL88fWK18wULFyNehu",
  "key17": "5c5TqVdrVincYhVnifSvC1GkfndgtEu6wVJDbBjxL8oj4tnCL2q1eVjSGStAVHyz8BtBdddgFE8JGfCnFoziTMqQ",
  "key18": "2VqEqwj5ytjSLSgPTe6AL7UBcMx6QGVyLKMYYFMoxz8BJrKfE2ntTi7gVnBDE4AGfED39JBossbmuYNEZEcCQkwz",
  "key19": "3fZfT6cH1icArtRZPchVEDdtKwkNxeP9nNZM35ZnL3vF9PFzfVk72Lgf3m9EeAxhcBMhVj2JQCH92ai6PRPmhN8B",
  "key20": "4aWXPhJ1nV7zrRuoQVsHDDS33N6YtJesJQskrPAX33tMwN1mm4Z4AG77941MMrgKRuXxN5isWBsGZEFA2wKEsSKv",
  "key21": "5tgHq6PHak7ZAHdE4M5GmrsepLvw9vxaqtxpw5pYQK2J8VsJ3oepP9gkRw81GfnerizP9SHYNk9yvZewMLNG7j5X",
  "key22": "5jm684qnscRMySK8YAS9gKTvP6Y5ycVytyVGQiyAabQshWYrPDMp2gxEPt1A7yhPyNfzVnqkC61EbxyU9s7sjefk",
  "key23": "1XcVjqM6tWFQpnEfKx8K2jSFhMiaonehvKo9X39Sb4pG9EGRH5Jm3rWGMgD3WmFSsd6qKexeNsCX6SnJHwMkWNy",
  "key24": "5hYWKpJh1JMHDjyBwSY3SJaYtg7Y3yNwVKsJiaq2zyvVVB9idCudy5xPCfcLEb48dSdrR97rNQgzZAnMMXbkXDD4",
  "key25": "3EMa93W3m4EZHfiHvuMf1rWHx8VUN2c2F2QX58b3QZKfjovXWT6YsAJBgKPU5KLDK9Qm4DC72s8iRaesR2Q1mECq",
  "key26": "3GkrqCtziVL7n8YXjU5ZrZ6crzCBd1Nob6j18pApWUMLPKYQPr8VDWyuLHu7qDkTdQABhNeUtoTXYQXRyTFBedYd",
  "key27": "3oVZGiHbbijEx9EC8sRki2pwz2kUyQpAEr99dQDWwS6k35vSmfQgHudiCxbaAVmfB5wkNn3mpQsRcL6Kt7CEuX38",
  "key28": "4AtggjMiwVLWdHMhCxvi2emRrivqcC1xnozVvMMHmj2xCnL3Mne8xP17CtExdRYD9pKYn7x5KtsGZzHPc8bQEXT9",
  "key29": "453JThd5hQY4VJq5X1eWAP4v71gbiWedQJHz7ovGojy7LHGEQsDLisXe22GvYCjTXazCjxou49446GxQTnSKuVWG",
  "key30": "4uNXpxS3qKHdjvDx6iYQR6QndpW8dD4Lrz4Qy4LEKf8f1X3QqLBHN2DQB3SEcKX4kcc6GgCfaY2g8AswsEzLbWSm",
  "key31": "4ubaSyow5nvPDp2UWFqDsyDxa3CmrkXcQhJR47iCY6yVMce7ycLDqinaCgbnotbBXixUeptJ5iQfrEogwcP5oMG6",
  "key32": "4hSYKEnbvFnBRzTqNAUuysUbcpgwCu6dc5Zzbyzksga6G3cvrxhscHjpALi4ANg6gybqnASQB6Bot4a9tiWCZRnU",
  "key33": "3WmQrR8dGzuBRC4Jsq4CYtkwLodLzAwyKmgJJJQnL4s9bJTVcsWvM7LfFvh2q5XDrB4hex3ZAd7MBYyVm6SEijZN",
  "key34": "3PWv8v572zFKAHvsbaD2pBqT3JpZrQgUmJoxunvu6Umgbv7spEfaeA3JshTfPL1iVkrQFhXJRoysFJzmUvVtFZ7o",
  "key35": "NbLxWgJWPdbNZCHpeYy2RFa4ZKucWkucy7Mtfe5WYFdcm1UrUgu4ju23jSs6xCrZNyyxgbrLn1spToc3D9zVftk",
  "key36": "4UvYoqVB2NAsb1BMWaTi8HcthmKEvmgYpL2FX5yppTzV753e81QeTnfHRMW1b2VBb9K5QVCBT9whnzbPHrhU1u3Q",
  "key37": "2ieJjiajgYr64isEhNwAawnjgmMP15uVdAoN4fmgS6kwEBTBoj4UFiA4EL1PwzpAmTorEquoZzPPW4LYV6eLXign",
  "key38": "DDx9z7Vwtz6tQAsTbAh5XAVpS9VNz8NzD5jb2TnzYzFyYdmQCQB2GxwYBGKY2RrtzZTX9CxXHqou2SXXUJr7Zwe"
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
