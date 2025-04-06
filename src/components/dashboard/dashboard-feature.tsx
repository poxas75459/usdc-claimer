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
    "5roh6sqSYs7VYAR2S5SKa7GVNh4uZjrqnSXxd4t6Gny5YrUFyfUHCvLFKWV2Bune2efuZpgGmsdPaqVfxkR8duNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ti5BMc2FSv4wsPcgvToCsa4MsFWS6Mc5r8CXU91uFgKoptPGR1NhQdJEebk5kLf9x6NXEKFPSsTyHycbCGGUeLS",
  "key1": "5HuFjJdzCrfs9wAM25t3jtAhq7qWhjcDTLZJ2Gt6LoWFxoDPbU9BiaXyycQF1wHkfJVRV3WX8N3zGmhUEvFuxKYU",
  "key2": "eyuSnhVvdNeYycA8SXnW4NAdJbwbBzRFmRnN7i891tEQ8JCeDZVVYZLcPUyX6EFPkYczG9gR2jX3LSH3tphsiDv",
  "key3": "4BdnURwb3UqmdhuJmKeNe5sgwbbhZoN1qr5Vf7yAWh86UPZjzkxhjMcpieH2zu5qq2TD1SsyVz4Q65heYsKLjhaA",
  "key4": "2gra9TqZcvCGk4AtmdYhdoLv9CqRrLHZAD28KJgGnfTJ1iaQHMx7Q13nywjXpo69K4CYmFSKzBTgUxDqnS2S7JhH",
  "key5": "3bRxiWXSxfzWKFCRFcJYNsmpwYr9LGHTThDQegbYx9RFxCMTnYEbvv5SiP6JdEx3BTDxKXguLYbjVyW4kfoE6Pzo",
  "key6": "3U8b66r7XfHCSvHkZj3uwSZeQ8bjUnD43Anjksy47xViQa6M258MJmbU5eZ3JTsMJJFX8q1L3Jfz45SDZQnya9kH",
  "key7": "2yZZ3CTchmvaa4jTfgaG3tFzpnmCfZv6LhKZZU8mEVKU6RdHVBVB9fZXgumaLNYQbggmTS5SwER4AMPHyAPtrEm7",
  "key8": "3csb4UVKHiQfQQcmecx9S9eSok4vBEeEYkh8iqyeh4pMxZvJEkMcvXDJAAw6gutZryaNN6SivRFJBPyZkWc2B3dK",
  "key9": "2s5LgdbXSuu4wW6L6qbR7Xr81VZudvf51tnMaak1ueNHsuidwEK7FXW2HkGhquijkBEdM8DL2EjJiXeHpXtfhe7W",
  "key10": "2Vc3QfFPd3cxzwwrPo1VbVRka6YZU1rdirDA3xUSan8Qt3Tf1fN8CDeqkRNB1tfgGSn7ZrsMXdRLEXVmwTE7dTmT",
  "key11": "3JMiEnWedtLziJt7rL7GxNWLzFK8thEyAaEQBNqMP8X8sWBz5TadMYDKEnK1XUdGDVdtDk5W7tP5vSRBzd7XsmJA",
  "key12": "5v2Z5xzisrWuPhG1ngDKMQwL9GPnjRdbQFQKEFw6iBVhMQSvYuwi5tgrgcwKvwbnoAAoRvp9yWMxZVird6bYVacC",
  "key13": "3MNQL1dy8mMjQdriBsdtbddF45Bw8miXs8xTPP2qN1pgGipS3Vmsoh2VDSmXzWv7fhsnVBwT4P2Brf5NPWR4hu5x",
  "key14": "2Vty19L7Z1qMYZytcQrDG8nBotHuLqz7dCg2fnQmeQkg5j5hBVh6xoi8S1NAFofyqmzNLhqUdp6JWfRAQ4XW9GP8",
  "key15": "2Ymnz6C8X5zFE9cYbkKBSR61AsEYf8jLpPVm5LHZMz1cZWbUBytjAYCy2oeSug4hkgYkSSJaePcnzAbU75yywAx4",
  "key16": "4bAqZTLKbd7yh2UKJC2busXSmDbPgTWicvbFy7zWaZ9nuyGtMiEskJryhNtBc1TdRXYC9xcaZcChscPeZDQ1G7VP",
  "key17": "3chMECXfTtsN5ykAD5JSUg7g5YhezCTiZKerzVNbnZzS2FSrX9HNPQCbrEmJD3KXT5FWQgrPMevCwBPe3mTcxwJH",
  "key18": "5EJUkmFJ82J4nwsvgt5fLXbyJ6e85SWaEhjXdQz6hXy9BsshVss71iTrWHeoey2Ej9fGtqJoZH5EitEaHxM7YSmS",
  "key19": "tGZUyzygBFj1gxfeBmW8f9KL62fyPaa3eXxV7szDdn366Up9SdiL8eEkoGjq5XAoXic2rQvWCiEzudp9nvsmnes",
  "key20": "WFB1oxWs9yX3heMGxRjoKNeuv3KD8dyE12xLCkfnFKfWu2wJx4T35FXLaPN8c8xsSYHoV9F6vuFE9mDXffher44",
  "key21": "2qUt2HFCn2ZppANfZGr8GUkPbJYTi2p4YwhiJovg1ALR6PDgFchFh8UVH1ehLyPiaE8HBjkK1v3z7ghCVNS5Wddo",
  "key22": "5K1zJeEh8s3YzfgwP1ny8tWT1XZdxqjMCNPuyMnSjRPxZpstugTY7nzFRVbTdwg7RW3gp38jBe9FKGsTGytNEzWm",
  "key23": "4aMeNV5FT2mFfvTVAGXfspq8hp5R1LaA3yX4VJc7tCrpZs9KeHdr262VSnzo67JCrghANwAKkCqv4w5R5uSkVarN",
  "key24": "4VfMBm7XG9XUEnPeBST1tohjVbMPad5rUHHeBq8TYas6gRKXYt8XZ7qLfHRzzTG9anNZSitr3yDyoRwaN6aTYrrD",
  "key25": "9NguhUYTmawa1D4J1m6vyND3fBgeqGAWqL4PfG3gXBfDbUQ5EwdgUCsuXda5qmDEJYNHwLyBujGgs3c8dRFVYWb",
  "key26": "2zM5AmviEAr8mDbgbwPp8eBSAVfq6Q3Bqgk982f2WCLPyvZHg8VFctS6Z7xxqnebXuNz6SmB2KnBob6o9J3H4joR",
  "key27": "f1Uk9G2F5cHUHNNGTxayUQwX9ww6Vfnner8271HjhBqEXyLqd5GdLCf5F5gaben991qfMb4MxWXTfLpgSX6voWJ",
  "key28": "4Zrm4g49JXmhop8DTuGNGcJqsL8hnAgEkqpXNJE2EHMygh7ngtgEbH4sptqvCmGmrD7DCph87CvecsgN88FdGSFn",
  "key29": "4Ac39A7NtH1gvF2Wzx4LxFz81JKridT7YpE8eQZDaFZ4AfGSFJj3xqMTWUdfwajUPeZEVaW3YNWJib8aHdH1EXdb",
  "key30": "4GgKqKQUsc27i7N4YbnRNTuCRzXBoRNoZhVR4AKjNvkQqX78d3fomh3t7X4DvRriDTQTp99nPirLhsj59pHkg7bY",
  "key31": "3L4PSQBnBCH2eqokyrLoizz8JdGZcDmNUFJEfiP8Nj34GH6mFMQWy3uQg26aJQ2QoRHq6Ao54P3tV1iWBpPyp3jv",
  "key32": "3E3wYEt3pVSusf5hog6o6rX8hf3WWR4iX2NX5xJwzXzpwDggGgBmJ7xN5jkLPsoR1dij6gbjLPu6Sa6X6CJ3CNFv",
  "key33": "5MGDWkjTjqF9Jw4fNLjaY5dDD6stY9EVzhAa4rSkG856sLmm98TJWfqmL1J8uqVFSqo2nDPgB7D9GWBE7TtTeAsK",
  "key34": "3E8pwJY8aCymaViJwBbn87P6L2HCmnkEaDYM9jc3XWouRCynp6Vq3eRLhT5RCNPUX6rC96mTKELw4TjBuF5q89CS",
  "key35": "3y4fJyjzFnwP7zMZUikEUTfQNFMhAteEQCHGHxf331gn8RQwZNEvdGYTeRUjgC4WzEFJJDGFaTYgmkCZ6vifQXVk",
  "key36": "3SiuC3uoT3k123mnDfWZYa7N5k6p9YhohmYz5dVKGefquBVYUzyreRX61gqCMzbEEV6xJbctJFA8BXBnyD26yb7h",
  "key37": "2qXspUPx5briE1NtWg6SA5w1Fp3wktTBYVvJD1cCWR7an8FUtVZWZkvmtVkh9zgqMZcm5LW4MzkizuXfMVZGTTfG",
  "key38": "4T8KmMXucsTA8uPobFqbRosnGqfzwsejaFvJ77Rn8MKErgwWBVpxT3fYudkVLaXBd1ZZw2zUzPxoXSUUQzbkgBWw",
  "key39": "5hY9KNkopgtvGoLg3c1jjxyPQjtqARvfem3wU6NnVFyJx4aH3bLJ7CVVfMU8KHwEjhb5r3AgoPpQ4ctSoMfhmuFE",
  "key40": "44ShdQXvGX294aNyEZTLMnQAbapGCTEMQspds3q1fRogr58NTvXG3c3vKPD2DvVBg8LoGNCaBTHm8KmB4ED3Lu1S",
  "key41": "a3tLcpRkxfsWt6d5cs4KTEth1zf4NkRFeCYv9YwWT9r8U9YYuERjYzuV6MfHLmTCo5HYNDdBLYp5S8bP3geiTcV",
  "key42": "2UagJCnRFecgFUt6DSrfdmZ7HheVRPfp6C8HdwJLhNZGve88tcCsshPYENGJ6jMBJMjZW4eiQhxqh68HoCyq95yQ",
  "key43": "4i1iWbhCfzvfdiF8cfPBSPK4irQbVLUxuQbb3iqrudsed7BJZaa7goUVUfojDRsZHM2spjrRd6sufeF1hGYdnsrJ",
  "key44": "2nLbZXo6gmd8pYrUwmD3dZxuHVjoeimEjEDkBwPRerANXCnA6BMfdnv75bNWdN4G6kCLcNHYPm2gYMazEW9rJ4i4",
  "key45": "sttnb7JQuiLrJzVnUPXysLC8rs5AEWpgATTG5a338yRXaY8gAV2dHhmKrdSpm2YDZXuZxWpjY7jyWDNNuwduAKd",
  "key46": "YYFSnht4YPfJfTLym23GpjPcKXVnYrmc6cmkVhBekagFrGa8K2ZMmhZaEaaRt4hyafQhpMdwtzDsnXRRtCEUKSd"
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
