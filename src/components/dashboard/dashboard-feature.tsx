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
    "2FYVfG672N75uBR6i5zn7xsyzHWbVsKCzVLunYH5fcwnSUhRGqH38LV2ewM3EhCr219scVzETXcCpunToRdyUDQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SJ7yCSrhcfNB9VsvbWoayS4sujWJXv9N5qBdpJp9TqjM4XmQdSwukkm58o19j7dADL7eNqa2VMQqytWdXr1bdMR",
  "key1": "39FmdXjYzeNLXLjsLGPbNPAHhwdG2ox39GVGP3YYsQfKxC6NWfTnJuFccQ5MYH7p8hR2N94ecTKYrJpt1zGDUV8h",
  "key2": "4M8jKPoY1jQBZt537LTytEniJW24hT23Z7gDgx9Vjm83ZgaHrPF3D4CXCZZqEkTBP8sUKffsQnqRKna1V7g45Wo8",
  "key3": "2DLsb9Himq4ErMDM7Rri4oJTgtxm6J89utLeubpJFtDJdfCs4fxAxV5fZ5KqcQsjhMHfQmWzZiX8aQBgeHGAon1H",
  "key4": "1SqcFA6kW6qB8ovUw9FhQoAa7KErb6nGwY4hh31ziwigSUJQFthsPTLc2m5QXzGkRuveXvjy28G5JmmuZ74JnjB",
  "key5": "2E1DSfByJ1hNKC82wvNVJruQQpYZUNjo1Ma148Q6pqBLNKjWf6zAULwWmqhmwCygbXnhraNWEHSPrAQfUBaJCGzu",
  "key6": "G2KDz1dNpy3dC73S8C2tBkSW24jqCU1CwkzqwYTfxU5Ek74CxeqbkK9t6FcZnGVrzjWr4omoZvKpUVkDR3FaUiE",
  "key7": "38txfN3UJx79YEXuQthmuMBeZYSrx3Zjm2oHCSE1UvZsFK1A1c6a8DVeNfttpcAQeThqbbKCfdR6bBAXp24HRLYo",
  "key8": "ihAL5rhGE4UUExR1YeEDU7ECtxBH7ew4nJUTSgTb7cMmqGS97CDFWPyX6CFF4HuBVudHNKrSYjisAv9jPZMr3Bc",
  "key9": "2T1xMkY2NbC6EPwpQXVz7gavSmk4H4dnBF9zqFRYN62awMMJ3NCvXZzCxWBa455n9REbhnrw3CVohd8bcn1uHiFm",
  "key10": "4L2ezHK2E9tQd2mmeiX5bitfej1hu4p4XNMZBUQWBaJAUW2i1BBaRosaCQXijE258uxEeAX7Sg4DGTZbAzzcLKf4",
  "key11": "5Ds76nEnYDGcc4Yv4cT9h3JaFSQT1pQGrmAL3VLb3nkyLPowk2DqWKvhMGWLC5dNwnTCYronJzwnbJiaV5cc1jBA",
  "key12": "32a7NZRkSp16bqGicMhwyi2wMJ64k4JzbykvDpMXhUYikeKUpK3eoGbGADZkNpsasvbKwLWcm35k6zLG3sSLAkix",
  "key13": "44bNp8GtZ5pTX1mKEceTh2cvmJ7N56iMawmcQ6XRwVQwmCbEx57z7bbrt54YD6QAuVXtgwsnFnyGCEyj9QZJnNa5",
  "key14": "51RkmkkeTR5EW3mdnA51wFJ257Xzc4R2aRKLewRtLT1aMajzZiqQFSTCNGwYbe1gvyeuhGMzWvfauHjzdfCkXX1g",
  "key15": "xq9BkS2xfLhjUCgPtFSqAurQFCNKNYEQUQqprtZW4PEFLRErovThLnwi6e8kza52nQ2FynmNqPBUWzEAbgGr8X9",
  "key16": "kS4p6LALBMnixag5AJQtSMctwER3nuRHazJ4y6rvRDjJxZrQayFcLUxFW77AxnQtXD2FrQ5tdbTK9FfkYS91uYr",
  "key17": "1iyW6q32yePkh4x1JRM5raf9hboSbmaJNio4wYMucHNj1J1zHXgMWPejBVvzW23etr8dWohspzShEendQ1XcepD",
  "key18": "npipeqkXHM27aKZHvybPgoxS5BhpSJRJ2h9srmMHrz7Xnfdu3GiAxcJFixdtrkRpFvtekBhHPmkenMpid8QANfD",
  "key19": "2APnrKt9UujxvYoYs4KKiyT1w3GnmYwoUjuEp8y9vmhbC9wJZmHvuUufYSooZtZ8mgr6rCx2AZjMaxAAFk7qwGJL",
  "key20": "3VMipfftJNByYwumWn51oQ8bQL4fyXLq3AqGuYb7KJPetfvZHwYhRM3jFBwsHszh3Q85a9mygjE56QkRGFaznDHc",
  "key21": "4BcsctDTyRDWYp7XxgmkrQMYnv1gY5rzL6Q5sEVUV6Waks1E5JQq3PHRMcHNM7iE7uhUmX6rYGknLxmnyMa58VpT",
  "key22": "5gtKj6dtFXjBFFMio5vwoTrjHpyp6XqCbTLQftop3V1ATFQ8Qbxicxp2dU6t8VoqxPrXVDcPziMuC5Vou4tUaT45",
  "key23": "5u6nqkx9kGzbWUNX9oLwAJHRZUAVU3w1EtUrmEJ5ckobpkobhrgJDnhxCr7Jnr96GiuN3PZzmZfT5PrS4umkEhtp",
  "key24": "5jRxU9iXDEQSahB3b16qH2pbS4eq5SxysF84Xbedq8sW2DXQVmeNeYe572KUraohqaay3WZ4y7iyGe8xn6SGndBb",
  "key25": "4HcSmYsCr1tGoLomQW2L28TdUQ9moVbpceKwWLhLSdmkteAkVroxciSyMuy1LR7NkQqsyANLqjnQghAfmFvc4AfP",
  "key26": "5GLVDFVzVJ9AypvrNSZt19s5q2mvsqTxuh3pHb5CDJWbznUPeq5w282eah6DoihCBifJX4WQ7kV6UvHC2vEYhg41",
  "key27": "2whCxfVVz5x4VtHMgDoMTjv7JWpZibb6gNJBH1hGJbxiJXNgcxdxBuNmBkV3PmATy4yaMZNkLt1LWP1zBNd7Gcoz",
  "key28": "32qkPEc69hCwkftc2FKw3j3GsPxFc8qLSVqcY4HRUV8kNeLZkaCRcJeTY3LFefZtyMFkjZfkTNdv6iTMjvmmmw2t",
  "key29": "23XUk8h7a7TotM1Cn9zDHMgkZ8R1ihgYQTQVxngt2SdzSVruset1PoKwXSjZxNcDZ4VfSMxsAMhZ1pETnSgPYkjt",
  "key30": "2oRQPDv9AzdRRq2S1kSY1dSzcGt6FtvDitayq2RsfKBzBmd9XYBrN2v6uRDF3N6hxPrbzccm5im5wDwPov4fXiE",
  "key31": "22jeWftHy2j6SFoWM543MJEc1KsyWjRK7zhrrJmFceX1YfjHKnk6pGjvaNYzjbGp2Lu6dnxBwpe6pyEeY2JNFq23",
  "key32": "5ta9SHuQVu6ETiBkyxgfyFED4FMsC1dfFSwZW2QJro13HVSYMo3Kg1Gz7EVJsyfvGAW8mi4oc6sSkuxJZNHjgstq",
  "key33": "65icCffQAZ4RxtyDBLJhY2mKDryPMQqp27brqZcWfHnhw4WaDsN9J8kg5SvkY39uH51FUSMjZtTGtC4a1CucUBdi",
  "key34": "4ETdeJ3huz8vb2N7McjvnkmSnSZtapT7e2HxMSPGzP4JLXb4FjRixxXxCzJaKkQeGejT5bvnwjZgGR9cVH95LR85",
  "key35": "6SyApgFq3epBwNTo23RFwUfCu5aV3EhFcTKDiY6wWK57F78xX1gfTt52n73vnV4QrVu7hGjXy97udQRLuqMHJrm"
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
