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
    "4UN8tD5unmuGUYj6WWZMLMY9tuv2aZ5nHV9edLyqHiW3Xne9gnohy1Q1foRzNfyrbQM3QKx1SAqYpvMboe8guHZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PA7JcfWHnisNFVV4c1bXRWTLNF5sbhw5TvEJq11cs15C691NabXWJLioTHRB6GvGRqw5bKHgYXzipzWJUQUjmhT",
  "key1": "2jq1p7Y1kDSDanDwTUZzLmxxZMvRmKwB8vKZVbBnP5i1zfWuwzk9HF8ubF931hGYyyGCRdHZZMA8YpGqyv59wnR8",
  "key2": "M3EntVfiqPTdkZYaLJLx2UAVHhUFp1J7d6TgyYXAKs6sxXN5xtQ7fRBKMVMBEdESsyVT5ekxgtaJedQdkURnYYr",
  "key3": "PiW1gUeVLwPK9AiRn6UsVecH8AK4Sm8MuxrvSGtduW9rLfMR7HMGnJfn8PQ7K736kevTYBg7UcxS1XWxXwjRiLJ",
  "key4": "66Ly639ngtTPTh5wHDx9mxP1jTg9d8rWPfr4eEjCic9ofZA1kz8hHjfZwH8fk5cFutdDekqiWEnuBZ3SGqJcauBv",
  "key5": "2Bw9zzoZDcNiwVxJtPFonjkigo3PgTGhtD32TY1qeCQmxuFRVrmH7vvwDwJxarSPc482ZHpXypGwSxdXHzamZyzQ",
  "key6": "5f1BWKpyLGKLwYKRH3KaHaan5EYZuWQQj7K93MR3Evv68rHZvvciXjz1Djmy5STGagffeeiwmtYEY9sHzRqdRkWq",
  "key7": "2EXjLhNGpDLTjSuGVDkbMQXaXD1mH5BXc89y8abmbPTdRtBxV6fSZpj8QsmKg1j5CsM1dbbBWUmuFEVdXC1KBmsB",
  "key8": "oCcW31fZfquVBXrZDuy5mtVcg98J7Dn8MXrcupM8SteXykSgUo7WdPA7qMjegTY4ydL1uddEeJSFG6yPy6QJswG",
  "key9": "3zXRv3wnaf5LgrKLqsc81kANrfnHW98Ak2N9Xrg2yun8zutddqqWmpuwDGDgrivh4JUswHFnxDUrbUXdZF98cEDv",
  "key10": "4tS2FsfkfKFJTJr2PeFzAATUZramto2vCeSvN2styeg3i7XFmc3mCkUgT62cB4d4x6n2La6RzHsVF5wZzMHwViMG",
  "key11": "2QA4qNjs3MnPAjBZESbzeoc1uRs3QT9xZh2pswLtYqhydJ5UgtUrj91tihUYD8Lf9dAXhC1hiyuWELxYnWbuiRx9",
  "key12": "5fnYVRBoqYFZuUXi4en1Q95E3kiA8Y2Bo47sbrYbiH5sgVJbS9xKie9etJk2eLX6i5wFtVCF3WyWuuCvED6v74P2",
  "key13": "59yZamKiezvyoskvf3Fx6Wu2p6iP12ZK3h5EiLQAHUaHneDNBJmJytaguczZPUdLMo2xbCQQmHLheFwn3vzTUgtV",
  "key14": "HKWUiKoSASUwRMxjFQoHkY6o3F9Vh4fuLFdinXFtP5bQnLRh58PvjrHV6PcKntPo5oGrTboUWqoZdpwcaztXhh8",
  "key15": "5G4VkVMFuakmazCejDQwAku4qsKpG7SWzMxqGSHgXpL8GSsajotWKjjePjWZfnSg7UfjPfQLJEqkXQURnJnamu4L",
  "key16": "3ohpbv7m4SpMFdQ5SKqcMdo9eW2fk2366AbtL65iQx8CKT8UUv9BbyFFVfhzpLh5sDkaZzEEBd3LzjiKa5Uq4RZe",
  "key17": "8sGERcGSoeShLbYA8LHS1mf1AH7fMTPYyk17fj3yVVA1NQo5b1L87qiGXCEzd39KQjMKbjEDo3qbNcwsJhgBZed",
  "key18": "4oC9J1KDuxa5i1e3ZySvJfhFtV9tjznrsjN6rmX3pZYhnnCUMyMk8sUz8TKHzSxrxLQzPEHa5Dqscc9SnCp2M9JV",
  "key19": "2hrcw859ka4MSiJGrUXagCx45f1hiwtEhX4ke5P8TfY6icT44L3prRe3qdqAYCx3C3q2wdcbaDHGErnhK3oCjUoh",
  "key20": "2Xqny6A8Pgmym5ERUnzcD4g9szVSBcrSgSs4AdTNo2LPbBPiFv4ceCn5wYuLnmLSRXd9Ldj2sHn2NyThXdvx1UYW",
  "key21": "4ohZpKjGfm4xxUM676oCSgzBLSw7qhQD1PAuCEysTwssbmqgHNrZYAYhKo74gE3VwuMZ5uw5mvnSSAnghhrbDhiw",
  "key22": "2SL3oTKvsBwwt2jWU7bDMQmkfBgEFzAuDPiKQu7Wg47VeD9vdLz3mky6Cq5dXqZMmamYksXjdAUYsNZDhbHrMFZD",
  "key23": "2PBs91J4ACGtWUtwZQ1ab4LzDynpdRrZJqjMzn7sPSEtdzzAVRtfLg3gnXcn5KrbuFYP8amBRyNTdoxFV4Qf7oMY",
  "key24": "4N7jxYtEWzJBGmSm1X6X72keim6YXRpVezNJtxToczr6TPgHedWRurnxD4zUW7CtBnv4re3AZ2FxUVHDwfhqM8oE",
  "key25": "33wBhzYLaCprNAutR8DVWkPLHDTk7oKasvwVf5qfFEbuyVXiWdNyZBuvbMiGw1t79sYSwLf4Qej8U5KmXhyteodH",
  "key26": "28fvBkvxbB7XmPYAaJqYPxTXfhQXVZgivehhLstXYPKVmDtgNSgZPQpoAnLUvQF1Lgj75QA2UXH53XYgVFj1WiP3",
  "key27": "32o2Fxw4EVETBA4qyjVoJpsDHyJZmLkeZJDDHw6HuMatPKVYoB41LX8ntJcESED8GAXbEw9KpunGw6v64tSnStpC",
  "key28": "5k9HRFEkLH37JBgmWvxUpGVWptrXvzhE3tVz2xXHRzhetNboPtD8ppEL78p5MmTjrtwmkMRYCGdVXDkXEZKYBcm9",
  "key29": "3bCyosUDUiRRyhBFU4LbLEFm6p8B8jWx4iJNhdQhEqfxXPTXNHyDVCEd6oapWm2v1AZXjbasHdDHKo3oZ3xoRGtM",
  "key30": "4rS5ZiCwTM1W8NdNXDjDR8fHeCczJMhxGm91cgM95RNbaaWUQGNiwXS7GarfQNcHP12tf7R2gyFtwpCNEqKqscS8",
  "key31": "4QbGkT6tUmQLReXA9m44emjaEamMZm6a51it7yQ5e3ASMKNcntcRo1sXxe7bnhtkJYHEKKkiG8xJHLnRPYi4msih",
  "key32": "3eDMWC8TVB6fzW3xNAbuCYfb87X25nfsysDukHbPYEJcMKkL7Ru9z5NoV9ro3FWBTDjiP1JsRMbngA8Lw8LXSuix",
  "key33": "2eyTJHYG8BRwgw3vyCvnYWsCjzVWMg5X73PtKeXreyXmLCTLuJxSrUV1HrWhA1dD9gZeTZdXatNVG4NCk6C1Uh7L",
  "key34": "2utm4M9i9LTqMW6XdPss9WRbxSaHbM4c4Gjd9ZwR3tZT7qKX98S4msvf8LMntZKXWTqFHD3BSqFGuorDU5QL59As",
  "key35": "5h94G5dNzqVkNmbDCBjC6xhQ6ReJXCky5wsqTKANB4DZvDnGnvUqZDXEBnXtQFucrduzBabr6abzjyXJCZz7N3xK",
  "key36": "4NBBMKeQQcGqATLpTokbUqMyptdYWYepRYMj6nia6TNYYNb3u3k2TDgtouZ9vteiBUkXSjxn3Q8xKMPG8bphuHYU"
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
