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
    "5EpPKA11ZN6XPEaFG4Nm9tzEmKLPEGrz4yzHYXscies5xnPtsFiz1sfc3aib99cGuBLuFbiYVacwZ7R1hjcBTZhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j5iZbnDKNSgAqQ4VZsH6WFSXZ8iezjng1VjpeXp3ouGYVzRtvtFXWVYVHj6wSY3eFkcAfPnK3vs5aYYSZCek1za",
  "key1": "2J7Zd7HBzAQdHpZWfG49UJRDS1i9PasgWcTDnxcXscMXnGuaxu4X8VsDmTcbNmMZwACNVtvzXTEX7NWWqYoFsZ6Q",
  "key2": "5NfQmEdmiQr3vKYuskQ5LpABGpZEysptFT667zyjtY7h1WbX8QUrWvbeg3AHqq68nreb26cB9FzCNiEAedaNriRX",
  "key3": "49x35Nn5fHQ1hJtri62tPCn3mMzEDUXjiLd6Wr9c5a8xVhgQMpcUSSMMgAiY69Jy5LNFnemAarcAnfeyAjZdc4xr",
  "key4": "2S4rKezXcwhPCj93LMNbhVmtPjtoXhSmE82qeUs19yxsvYzyY785nYuDBxoFaoYTqMP1bUpzNHfMWaNe47hy8s9U",
  "key5": "2APADg1P1Q9SfajPHzyxHWTjPi9fEWnZTPAG5mD2a5uKjwRBqTqmd1drcEg2F1djnWJjHNJNc9tuPX2hQ3Zc6K1Q",
  "key6": "5Mym3bqFYz24muK4v1FH4Fh8joU1Z5wQMk8j6Pnee6CfVT7iNKCPqUrkcAtP8NAysZ2wcYUJWX83DEfd7CJkKmTn",
  "key7": "4akZsu7Kc3joDDPaz1PfrkvS1TLWUtTR9Rxcqi4ueX3X3WY3tagNvKXMisBpPuHdnankrVFUiRSxZjrz7NpFL2CB",
  "key8": "5ncCKuGVkB9xzVKcJ9rVo57d6LEtwsc4n4i2fpJTM1HKAQdCjFs3oHMbS1at6YMZH9H7BHt4RMZkdWSrn3wybnwd",
  "key9": "oDUYNU1dQjH8g3C1cmM1ncFfu4Y4cXJsQhBQ3XGoNy4haRqVhGJjTEvhYLQFo8bZznhMmCDDMHUX6ForS74UYKz",
  "key10": "5w8iww34hjeuBMiWkvn4HDYwp9KfabGRkcA9oHNh4hcdp2g6moDgaNxSLD4z1Rog8jd5MSnBwcQAoxsWVwguD3tM",
  "key11": "4utfFSAb7uStK53vGQ4MxP42GAL1YaDAsaR2t7sXzpUj4Rw27xtyb6L6rUED3ssJRG9uZr757JdP2597wunTMrMp",
  "key12": "F6BiTnTz8azHzCju2Bbrjw37QkmnJdFMrSoRcmnP2TaeV1f5sw7WMyLKoUE4Ro5PEtHAyGrzAcdgAX7joiF6ZUg",
  "key13": "317gsfg6kMbLYz1e1oMZZJnssRM9KKTe7qGNMqtgNiV7WgujizrcBf4dpVs9PFBkyfQG5yPEF84RUoZpRgCDKAUq",
  "key14": "3UxbPER8SujZpVyJ55YwbSmXZKurkxeTq4EG6oHcRQGBL9HqkwvKCLTXEmzvfKWwcFN9e2vKqPFGz8Zi3SU16RSR",
  "key15": "2DT6dWU8bRnVW6NHtztpBzbXmLjLZdhHHo8XB3Br9W1QNvZbpXdiAR6mwwbMhJH9tGD6j829hAAqi3kDrn2YPEGe",
  "key16": "5J6NKokzsdsQWMCxrRSMQUXo8SvpqY5GqkznxHgCNabPWbjJRissPEx8x8jUzixm4JnAAtRUuhMsuKcNMCMvMzCW",
  "key17": "123GL2cG4s8wTdW3koPydwNawuEBAM2d6rjkMWzcaBPUAN5M7Q3MGsTSPHb4Ypp9aGZ7FuUiaWAaXwkfjXbNPqX2",
  "key18": "5K61zRnKDuHuLPKKChbBfAWtbPJF1cBxyjgaiqYo2ySCZhiZ1QYQ4i9pg713eYErxfu3cEh1F2Uaegfowp6BgYM7",
  "key19": "4L5MqMVaoXo8nCJ7LHuvPSg4iheUX7ooix5XdySmbBvtYE7ZKu6DveVeKJDGGHyd6vVwkHoAQHbaY96F5dsiiLsQ",
  "key20": "21Nfggj4UDpkzWPjZQk8q3dmmZVzEoxZDRaYRBV39JtQjyEmVZfFzebFfDVHsZrH3L61uH1nit1qrCEHXjaKpYaj",
  "key21": "3LC1irktU5NqfFDBQLPQxYboZsjbtYhaqAYanwoQDLxEoyZHrtS2Le4RUBjrDEGiv96cfy7cJ5bBc95PD99JV8dH",
  "key22": "5JSPFnCrfkHGkrkAwDBbMZVCTx3UdBU2VxsBPqS25XpcBskGWevHNLqkk9yapy2PZHkU9W5jbSNmtxrxferJN7X8",
  "key23": "5wadtq6dMeNvixdUT5C749ggckUZVWER3bP1cHeo4uKYeowCdvo7YKy1pssfDukuktByNHyQxy4bZJ6QytYvVZW3",
  "key24": "4uJDarbDLM8LWuEbpprLc2MZhKLQfAFddkZrRcbRy53EUNj4mKEPh5oJifyPRcsASY1NMVXWvqwxwLLV6aqymH76",
  "key25": "2NargQTERWtrjmScGBAwoxLT5zvne8FcYcQn9DadC7HCPHAeC22z6bQeAAAKvcz8cKyq4jx2cgPk1KGB1YLHZn6f",
  "key26": "5B4RYpZ6LbNc75xfX8dBZuJDdnGntY8n6DN7Z9j7BxmrkjBhsPamvKGFqc5WAPJCvJmP8KdP2DoqcBiMRY7mXXyg",
  "key27": "3CPamnmETJWepqnHxhnn6a2Yxm7Jc2hpRTGsWdmx8mbeLmayj8dAqQQ8jDbiEcMwb5fcyHBxJd7VCTwdrp6z5v5B",
  "key28": "2B49MyLfXhxMm7KSuxio8fVygWF7H87y59zThG1izzwiZswXvAj1SANU8oUixdVLWUr8SCQLV1tso2x3VJSEDeEn",
  "key29": "3pgVRR6t5Z6UTPL1ezVosyPmxZcofSRmQDwMoQCkJAQVHPETojpYYE6YPsKR9JShcN1UPWTtW67VLkUMn6TyJCbc",
  "key30": "2VmLyGdqNChhXqukq6AxABny6bLfQr3sLm4cbS8LDht8zgXtqsf46ZBdkPqDeLR9eUEjqSjboiTUtBYDFnJQE7br",
  "key31": "5QMaUDiWpNBE9Nfngd8kGa3xo6BDvJxcdzzLZX47Gtgv6e8NdnkMZMrDM2fSyzwmMheD9c9WfmFYjnPNZpTNqZ58",
  "key32": "43ZG3u5FpywN7e3ZjDj4Cog36GXV6dHz66fJQuZZbtSZf83zVZrgDheXivEcibpmX1KKL838vmSJv2mJMjLq5RyC",
  "key33": "5Q8QDF21nrviMK7zGe1UidFwoevL5V9Dxk3nvLgF1SdUxpaCrkBLeoPJLW4MvXMrGvXhQZ516Ap14iZFfhZQfpao",
  "key34": "56c1ekP5K26jeLYfpqCMfgjjkyKcJPQFKAZLCtwfgcdCbruUiqiauuDeDXseAPcUjAytGzkLUTqpepfZyCj8BSWc",
  "key35": "4SvaU7b113SWPkFDpTVQk87biY6m9KDuy2RVnQmyaLvdnQsegGncqPu1jVyYjg8PHE8ZzZDfZvAkV4w9JzoXMJzX",
  "key36": "643HFhhhYKhb7RNDRkLYEXWHJLQRoHag2QWEGTyAuvZHT2hRLyQBd3eoc5zD88QZTRfr1Arpt3whNMVeLgimBzC7",
  "key37": "4u2mif1KPkVQJv3VhoXFM9sRmboFtuaQDecKALrGB36qLKyFPWZVy8TLitA9qhEss2qcsmqJC6HUBctZsV91D6FT",
  "key38": "5jeDdL3fSYyaN19Tbnuh3KZWD2JB5DkHiQom9uexgMAtn1dcFW4hxcZDkffnndGzKujFq2UfmWEc65mrFA3ggW6V"
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
