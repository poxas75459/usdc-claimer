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
    "2L5oDncGte4YytKdBG77nppyN9wzxu4qrDBeuAco3fXDE6jQ1xqoBD44JdBero7V1cnFmonbQb3jsgva6CjcZ5WA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yfjv8KuePc84GGfQ6XfQXW5oZciC6tBCFo3W8XXuPBM6kjuXBqtrTqJQKcPVRToR9NwfMLh5NicZUkoHof5pS71",
  "key1": "7fToyucDD6NBAuvf2H6y4pN1hx6Hnb4us4r5z3BP91DZzjucoDZHvRconjqAdVwiEehn7Tv4rnoRNVb2x2qQsut",
  "key2": "3b3bbTaMs9roY5fRFmDXDeD8BGxCxSixZDGqjrGtZJ5sqcnZwZWDEgZiDX8f9YwJfdEpPq1Nv58fmzaZyXCJbJ2h",
  "key3": "5EzLnLUv8Ex8uqoNYH4vQ634NyST6shLjhWA3217BV7g11Hc8u2KtvxWoC7mXVQQ3wRERKomJZfuBWGDRw7cc26Z",
  "key4": "kLX4DcRNR1EGqsMijwQkSt5A1qrLZVkTai3HKV8NeG73QgBCwxrmjfYqNJ6Bqy9U1n5S7v1c9kXHR2w8Vm9HEjr",
  "key5": "3YTcA2tEyhKQpMztm6HCu7rreDnvgqj1PyauyMfQNhek86N7UMdH2sQU1PaNdE5hhy1WdRLS22VE5mn8LckcpXLa",
  "key6": "Fbhhe4BCVT1mfkSWcfjeZn429bqWoeuhiYH9e4FDkG92kfPfm9ScX5s99AGz2jq9Vorris7tG96kpwA96pfMdhG",
  "key7": "7cH5L4Y6brdzDVK6DbuAcKSfK4t6zXtRSg9Ji1qV5f7LYvH7jukNizUbxeTiCqG2HV7K9dbeZui3yMaNopgQvtX",
  "key8": "KVtj98NG2oJA2qrwC1Y7APAu7nAdArvu9yVDcK7GqGvyqvVqPj4Tcpu6tWS9xbvdjbmu9txQnLsF5kcUXbJNbkK",
  "key9": "3rJntXgJWhg3uCEGtgY7X7toMf6bKH4GZdii83H5n3hbgRiXzpuMRWa9KESgnxp7i9fbT4Qky2Yo1ET9YRWG9Q9y",
  "key10": "5S9wSJdu7pMvYJ4UF4GPFtSP4qTi4oEW47BNxVZZ8JFuTk1R9H69La7UsjyFjzsCHRTTfyatpaY71dPv6FK4yx4g",
  "key11": "2KGPLKSrmtiQeEyaScdwgUoYEqK9oK9XLA9vkdXaFNS5WK3YfMpEbwMFy5tm2x8CVmTV9sAfW137HQx86piHfPBA",
  "key12": "2DVs5NQk8vys6uhXgRqmhs7ra4W8o9he5sRmSeUhNAoxEcScCRT1HhVMQYjwpgn4nSqkTbnD7ZtLWuN3u6Vv76iP",
  "key13": "61DdKBm6LXmx1CCGtJQFNTUpfE3v8Sw6dLAV5fmYGeYZuVhCdUg3VGVVef9L5t6bW1Cfpg3RqZwf332PnthYA1pZ",
  "key14": "5ox3vU65Pvg2Mf6h3DtqsQnDS2qPb3MpbKK2UD6UHt8zWHX5DRupj7hKUUHBTKf5ywMgyE8z2xaFsC5uNpQ5EYsv",
  "key15": "4fCy7bq82P3nce2SycnziYjFiDU6qnPyQARFpSGiHFuZanX8rRRp7gE3uGQpWC38nNpvfVB8YpSpeig7rPDAVEG6",
  "key16": "poiXnaV3z7xmPcxJjQgu8RQRy2KwaPdVtW3akSqujs9LW4jKE95eYLFzSGpHsQQVYKouTWb1wfP8FepgzGNXoAq",
  "key17": "449j663Eyi5XxYGSxo98du8DZzmXmYEaGEjBJH7TMGLJ8NkapKhCba6grczSnDFMHdP9jJYsn1JUmqJ28mdJbpjY",
  "key18": "3qy8hh46qCumgwaP2jyJ5tTMVcnYzWkE9QJnRTx6LjibyYhz9G8awaPqYv6yzQ6yjMtBc3FRFAoQoqDFDAi5yLCh",
  "key19": "2uSDZAJfjFvrDgj5aMhpns6JPvBsiwU1kz7MT8rDW1f6rCPc3xEfEhWxtyDjhkVTWnsU757HHsMDoc2GitM1D4bR",
  "key20": "2CTFrgbVcFVvc3jk8wRLjmdHdsn3Goa2fmbKsv3UxujXww25QbicmNMwZdAtoFfQj3YpEJ2A57yfG8SdhiNMPSqn",
  "key21": "38S6Q5hrog5VSKZ6q6xLRfBmaQX8j7CdBS7xKQ7vjeja1B6efdVBredyh3VUTkoB2jSfWNHAro55poxVwURQpAer",
  "key22": "3ErfdGMJyuBY9hvhKjbx7L9he2r9SVpxseqb6P9DvtcrNoLzGLaYsNDAf1a1M2KYYfFGtATEKzgjadHXfu5rFFwP",
  "key23": "4WDSR4CnWoRDHXBzngtiEcPmMyTrpvHiLBBUCno6SdH8UfpjNbQBCXHAQAcodc7XkcMSm9aXAkK1fhJQJA2WftxN",
  "key24": "4Xt23yHaGv3RZKWva8mA6ZF4Gx8wNgWTYLaYWZTx3QGpRBhn6bUoFzrUmDK7RRKMkZFNcWfRrLjTnNW8mn2KHetg",
  "key25": "5R8TGB51kMdcvNTU5NZPbLhPyWRd4FAaF3qsNabX9sPY4ETbbrWqRJbnqUdhSMTuWdptbHFJ26ZxoaF21BV1TSsJ",
  "key26": "3Xdad3dXLLB4VdVzocsVpY4xQosectLJCqhW7oXHSd2Abw9KjemVd4CocbVZh4DcesS2vKkBdHr1wWb4k3GusrHD",
  "key27": "55psPFMsFZ3ngKRpErmkgTLgFJdov6D94gomHgZo4fud2sBsxTFGdE1RCg8HHYh9icdJoj9LpM4gyM9Tbh1cEb3y",
  "key28": "4Xd4dZ2qg8fw2fi41phoiS53ozkWu5Xw6hM78yxHVBLN49qMDrjA8dVHYEA1A5Pa8UEHm9Wk3dARTt6HCZYNXY1Q",
  "key29": "2etowAXPrZze8tvTfBkx6Rcmmup51gZyjrkRisz5gcrjNuYgoacZSsDKv7x9dcD4rigX4Fk4NUCdqLoWANngGA6z",
  "key30": "4BZJMwvQxKD3zKgGMtLxyq5Br2VreGqqBCqAkJFiwh8crWaXSimZfN3dxsuYpjB6anRukwuMqsTJm4NSm2kQ4SCx",
  "key31": "41JM2qSm15RrWptwVjRkg9UMWxwLTd5bbBFW89bmhki2QXrQMW3TN8Wh5UNVVToTcQpDL81FSthcU2oFXAnEWprT",
  "key32": "567xHJkpg9tVfQjVhrX8hyNN12izMo2pWHQeyctJy25fHy932aCGp3J69mYAiWGGPngXGsg5hrY3EtJTwHeM5tQX",
  "key33": "3xFvFbrdA2rNTaPrZh618qQnnTafbmXib27Zhgj5j3MynFoMPrWsu6fPBdpEyZu7m4ZYugxS5YSh5ZbaC2SEVybx"
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
