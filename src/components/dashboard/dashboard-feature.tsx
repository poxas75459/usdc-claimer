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
    "47bicLCAY5nn8TSeFmM4i5xFWwPChfgeSaxhkB4kRbk8LgfJxuDnq13GJCijtfk2tNZoCMtSFBmFC5A8Yr3CizTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zSUJCnrM7c6rfKqgZdbneXtSU39qHqNMbC2fzKV823mg8jTKYUt4FSBugh2quXjFydYgRDVbLksaeQF8D6tKZ1N",
  "key1": "5Lk8EiHkdyPCqpUQwskbg7f1ND8zZQcdB6tfUCvLGtaeXyR6ZKPXCV8C9Sj9ictArQmr3qP4fHMR9NnDt6NvZaYN",
  "key2": "5tDe6uhujvTLLvzmyyeqRyu7tzU5U6cG5jpDVDzLCmSgGpNE5Xf6GH8xWZtj9vr5xT1W3ZBP2TP95V1jEyPutyAa",
  "key3": "2NrhK5MorZZv7ZjqmN4BtnpHjkWVQvp2p2jzZajKAPMRRZnge6qsGKZeHXgrZEExaYgZ82nHHuGA6NyvQwjUjFWk",
  "key4": "zFSmmjjuwGnfUasqQYgyJ7dzGC9dQ5QC3mPr1eMBjzM8XFoV9ahQVp3x4ru8Y8fbTZSasWULthaENPUmZaDbf8u",
  "key5": "3SdVRhc2KCo7rY1AeJPQbZUveEVX8jDCGx2oc9zQ7CJuWUTchUcXecT8n5sc9vxH1arkx2rjzYXdVh8i8MMPBpuy",
  "key6": "5Tdc6iW3sCvHzw1m7ngG2RqY84nygKBFZv2jCTnAMHQbMkZQA5N8kAhVnVVDvZwG7JpVaBLmtvPu8dgNDTDKtZKc",
  "key7": "6526oiXX834TTAydwBZ324reAbQBDNxp5sEAbXLSfFa27njvk3CTfZhMWXBfxUwMPyT8d44fThFUMbiHohBD43su",
  "key8": "XSQmvG4YxvCLRuTwd2JazM4sajmixYpBTs52soJk11VNQCzdLsB6PLDmvYsCL6czb64Uz3k5oMJgiRC97tDdcD1",
  "key9": "ShpDh731E1YJBqF5horP7Cdz1Z4uH3BDa4ZCxFTH3gKKa9xg624FPVC6BjSntHarnetbfUWNqtGPmvgT46Fu1as",
  "key10": "2uXDv6qk4UxYzQTr2cDxi131LRQH6ej8QNmLnDEGkzK9FmT2q1wd6ejwjWSY1JjZovs1fWP4HsrGwS66gWvPHUJw",
  "key11": "3TuXJubYHvodp4Ta7d9JFtzkApEqZDYLZVi66HaqpRULtwWf29DgFUJhk6LwFBcgza9H2Z1qXnN6nyZtCKJtgfNU",
  "key12": "4CkXspQY6odf63iZU7YWDC6vJAQpMPPJuL2DRKML7oTM6pRb795UNz3dc4FpSFFJHF1Lj8mDQFB8HZRLqUUZk5xd",
  "key13": "b5hLQT3EbVounB9rUP9nDsmM6UkiP8p8RCBx7zz51ScvBpDvbk2Qgp7bzPpk7GD5JKoZRaNqcfAPzzVgHfLFyuA",
  "key14": "4ve2A2p8CfR6GQ1e6SZr7poJUBcW4T8Uo4qwX299EvRu13pyPivbKYrNCSHqhsRqMHR5pWmGYcb5JR2tiPYC6D4d",
  "key15": "5memzZthVADkYsc5UUvgW88ZAWT6g94wEwe3U2B2DjyumZTx23QtNFqt7CyPnF9dfhH15VtNMh6St3eEGRX8g9H4",
  "key16": "2RxB5eeeeHW32cXSo7tB9kiY5axUy8GgAz8F3yceTDzzL7xXz7TPrzj42zNfFRKAxcihtxnzskTkcsdDxaZppEwj",
  "key17": "4JKxwGkgV94MBi3UcUxzPsvmj83VKAnaL7EYSi6QDNawAJQnGc9BnEFCHERdR2hANqdSL2spsV7t5G7qUbygLkdZ",
  "key18": "2hP5UAFLNdVnF4BehJ8YCRN1fYnVkLnmRZW4YP6QdKisd5az8j3GpSKe5iavAeWkJhYis9SbUPwSgpFN4wRfZMyW",
  "key19": "2vT5Dti8fpvVqarMZrrQcGcKweSx8zGQsCZEgSFbiPA7DbYxmubZbv7KaN86XceMgAoBuKihJNuc7NFobJDV3ivg",
  "key20": "2mh8vtXMgfwiuuMZ4uFrUrKS5bWynMhh4KNQvVwLvsRi9xPoJdYFZzho5pe9xGkxQi7mkr7EpFEebgh6tjPwwdRL",
  "key21": "g5diCYdydkB58ffR4CbHxB3QaPzamfAxKh4HfzhouESD8dkhGjoagsjMKwoekBReoRXLNgmdfN9YHKqhKYzTGxv",
  "key22": "69SAGK5wpSvbiPGAX7hp9jqG5wuowhDCWBfiULaLqdqvqQPP5VBkd867g3FiQwS9ER5rb3xZjA9K9vrNjxq1ZxQ",
  "key23": "4dfFqN39J84Xm6tZany1A6bg9T4WqxsoQ4pFPgrathPjjBWvoG14Wz7wtSENZBBPfSCyhMT2nWU377GVgrFKk94n",
  "key24": "2jiT2TEesG4FBi6Gda6zgou3qehc8Y8nUvE6w6pbuSiVt4zfpcUv92HwVBGHWL1qChAfGgU6HzYzFr5TXwutwgie",
  "key25": "62WS64X1PFML7cYL5X8yRBg3Cia8r7RL1DEfPDBJyFcg8EB5fSxWWEGMT6R4WhogNNzcZvfxtXUWqcT2jXvwFpWD",
  "key26": "66Ftj3xom3mGSqEfGFiFMHUhdmGgzVW6N1bX8AmaLsr8X4LJUiCHGQoJD1HmtrnowbBB68Dk7LeSXrw8fCk1Bp2f",
  "key27": "4GmHxsmox5ydbSLpqAhphinXLQWMme1ZXEDpShVLkDam2aYCzEvhBW5RSgTAjF8pj4fwBERBSJJWN9aqE7jX2NYr",
  "key28": "5GUzb329UJ8ksURHxSyWNCSoHv28UARTEnrSSmMwnZZmnsyUUvi3W4jnnBkEf7mBUpzwbzbRzDB8ocXaEKavAQFd",
  "key29": "3KU144f97DLQNdJ4jnaaHc7whv6YxiX8kr9q4ZhrEwcBfYsH2BK9JwymutGTzzcjBAHnagC9NXe4e734SHY29LxD",
  "key30": "3rce9h5jWw7zBqru7f667qARG4qvkXWyz5V8YLYkFNQUjsghphs7uL87b8d92f5rBxSd1Yv4ACS52v3d56zXTV59",
  "key31": "2ZzD1bPHrKypMs2o2kQ8ufpFZxUxxe1QWEmrvaAMJc4XoPc26Gr16F3m9KUUNwaXfhibkjonbKFWK2ubaqotSBd8",
  "key32": "EKpHcGxmoRh4FAnzLeQFMDTBBN32s8bCiZ1TRpUhNQ1MYWAKjctk3jpQdGK7Nvvq6PRnEDc97gqj8dhwFp4bzxT",
  "key33": "2DnWKjy46URYtLCthh1DDAwNy5o9FtCV6en1yejWTxoLGdBphULS73QgkxEP3tfTWg8koFFQX4TG7rkL7rgJ3Bks",
  "key34": "41tvN7bpjNTYzeUSuFpXdXxbJ6wvw7sX4UQpg7bDgsifmyVWHZsB31jPXUfagWjWALmaGqGX7tHRLTFkVuvEGQwG",
  "key35": "hRwE8SfHmTRnXkgc1zdA8A7QJU4nGY2eyHW5LqLatS5D2hJFtAEPeh8pY6g5drMCTbvSNHpoCDPmhvkenhSecFa",
  "key36": "5Fyen7295axDidHoKFMoKjHUVdHjPuuTdFULBTUXuLkXZzrwXxkhTTN7qpDhyeHe29WS1Eub9P8LLUapkbdM9VPx",
  "key37": "289g5cwEtN8f2enf3DeRFwmtkfypjAQ4QFAYhYM97mSz2r3dFFqxHAej5P6n34vzgPKTXahv2JnPgzMDDrAzzZ4J",
  "key38": "4CHNnwv5XhSkaGtDqthrUiBREPWk5y8BMQMrH87CcZrePBHBUuYPYz7ABBKBDVDrLqho4uCFChkMNH8EC8A4Tfhg",
  "key39": "oqhgKRtQikHosKDhqAf9t1XYXdXyCSt6MkRkWw6rs83uXBgPxcRbmS3JMjDNgh6bffHFevUsez6ywgVEPbZb258",
  "key40": "3oEcujQoyYcHsb13SNDDXktXem2zvUaRzDntiaRqFr1rBA5S1oMZpAWNmXLPNi5eqx8MXAFky2hr7MDDYuPJcs7S",
  "key41": "5hUEYYYUTYzhqcGT6T3xDLb73Ut5wfgJXjYx1n6oVaqJ4Wm12qX7qxzkjdrbcKYfKDQv5TCWpk2tSpk4ATTUKXyU",
  "key42": "osYyHcxQfbSDrhFy8HJdx3tJsxh3VxskbuGAiksYb3kUKaij7a5nCFo9F6U4rszbzpQDthc4szZAjq1QCff2KFd",
  "key43": "37ctTwUc8LCQEKzcDS55PdUW1ZsJ1ypd7ubDRD6CM6UmB1FzdJ3KC8RWDM7WtWRTQVUNsFZs3F7jnqCcduRRd6i5",
  "key44": "4PHUGnmnUNy6w5UEWTJVRvLs2GY8cfXfDswxHxPynsRnrrdMCqGLaF1zoP9TfjUjtf9UnwfWEaUpESzGKvCPD74w"
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
