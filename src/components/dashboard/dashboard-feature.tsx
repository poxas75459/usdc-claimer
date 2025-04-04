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
    "23CkmZWqywAkMid5o4DNy3Fy3Wc1XA5wcRxy5rZtMKZJKKjMRDz25Be9Q11NNDWdsdNQA2sPnMF3AHU4uiXtCKS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32ywnNiGsMmfsSkQ9Zur2hxxH5HMDrysWwnyVmTAJ6WsSqFRAMkBzCAsPsCWJ3pUHE3Ef9zdS3pGQ2SpJvxQz7Tz",
  "key1": "29GS6AR7qxBEPtW31rqsnseDKYE77bf6n7YgsFCPqtKrAeCRwgeChTZfiky62U8jYNYCNeUUQXs6S53CG39VSZtp",
  "key2": "35WWoiNT6k4sN8YXPV6FwhXs7f1jQYDHvRoV1pxqrEgwDniKqkQzEmz2L1rPhXuJXiWaURWpYqGMrp3DsW9z1e4N",
  "key3": "4hDhUsrbjnknvsFV2pc1cdpKJYzCAhG4kJkN4j4vwaZjT868ZsLnEEzNf18ZMiie6448ki64zqQ79aXkeVnnv1vi",
  "key4": "3h5i3bSm7gCDV4Sdua7ZPJvawpnCN9Ra3ej3QhNnZ3MnA8jNdzg2Y82nfWCNC5WoGofFBdCkUsRdbiejCz8dwvF5",
  "key5": "5iG8JTZoV7tgC48PKp6W3SMjxp89qJcnQWBv85sDVoJwfCeKgP988766gYcHkVQJWwMqUrkS8zK7YYJtiTmPPWWA",
  "key6": "57BtA6uv81YjXtPv86zXg6fu91Xyx5sL3opZ2vo6tTVm1LgjHcGbXaexuSXhek4Jzuud7F1YVBxnwJbzTtNDWEZw",
  "key7": "5miHBBPx5atMqwC2WGGJdDS7XU9ao44pU34K3jHMC5mE6D7f9yZqHbR5VmBsoWsCCfHrZM1qCBeCjJfVUiZFqAMr",
  "key8": "4WQPAUZcnsta7HzXrDU1jAFSKqAk6oKfpjbjcJpxQrpXnzdQEmejYdmYvuYhxrj5uD16Hh6bHW9cSzvkyit4zweU",
  "key9": "2q12g8GZ9cENp4EXGsktz7vzLpmcgtfRRpXHJiVZ17ro5KNcty6EtGqX3CUVbtCN9XeWhBm2WHCR7pVSNcsKT7YB",
  "key10": "aATAD29hxswKgcmynYcbxsmjZZdrr2TDbqq9wBeDtyNxDbUU9LmY2hXti5DWuHJPp4923mHJPZZZ2NRPfryRSfC",
  "key11": "4DSEJA4efwrNfXyX5FM43b2EtNpHW95ajwG4xbktm29qeYPjUs6tMod6ELtNT1RDVi7b1MUT2orT1MJqGKZv6xm2",
  "key12": "5Xpz7PgHzNGcdy379RBdByXpUAFKgMpwg5Y6Tb6jiedN728W8ipcNBJmnLQumtnyE4MdSGariwawwLySEd7TYq8e",
  "key13": "5sdzk9E1YDgR8VAiTXzANQ775fgET2jFoBgbWzHG9NhmRs8LBVjmNrFhcMWpmc82FLC2ixHbL2GB6njTbhj7Bqpz",
  "key14": "4dozWnuTBia9kiQvd5d4h2zASRHKm1UoCgKhQCiqvCzYoVEm4TmteNFH4M9mEbQkFUXtYRcSXse9rUkL57CGshy4",
  "key15": "4yW8yBQagKdy7ATnXxqVzDCw4L1vFjyz847QgYnPCGXQC8JShW816nNKogUk96e1CNJ9u8jMYe9qs8rV2HawG8PJ",
  "key16": "4xtwYs4CZhL5gPb4aHUy5AyNdCya8LgknQwHJH8mPAL6DJKC2R3XBEvyfUJ959VEx85SR15ZF2Vk86rSvWxGmWYu",
  "key17": "2R3CswpWKzt2iLuaf1hhB3kHPU3cspjPcibBEVvMLM2LguXZ7ogTye8UiUSAmmucRc9GSoawncMs84Uj58X79tuy",
  "key18": "2ohU6X29wryYmJAAeZTy9SxzDn3nmrvkZnPWDCvhn3VU7AHXjR9oVGYdRxzvGR7B5epzb4nHdRrzb365AYFHpnbw",
  "key19": "3kyWNAMiAv8X7Mr4X3RM5uUVLs5szMrAD8Ut5SUZnEjrAZyQrPA3TSTaD9nMcSasiYFPHbVq8dSkay5rPcBWsA3P",
  "key20": "4zatmkZeshNSpQUTv6mj9U7srwESVdLYhDjNUiuKib6pFHAvegvK2uTFwPiiQ9Fia7otLMJvxveySudt7EhNetsN",
  "key21": "5f1kdJ31eGWT2upsbPzcB1J2SDTFEFAY6zmfvqAwoUNyTAGJedxaWCpCttG8ZdHHYjAmhAZuj4dWpsgLZbfaWLcP",
  "key22": "2WWpEZu7gXmxFFAr2DvLRyXe4gSn6Ke7hQD6MS3Pa5jgfwQvqp3eSbgg7nP7AC6xt3sS9EakGrEr32Rez8fq9nHy",
  "key23": "ouBL2iPEhDDdDcrpmhm5dDULzUNDJcx3MfosJM93ECrqqAr5eLPpg36Roq9A7v1VgCKzTAEuYCRV8QKPYStEwZC",
  "key24": "4zmytvKy4RpWxS9Xsbxgygx3oXjRaN3AX6VxrFkFEdoJrmSSn5HuX4v7RDbLgPmByuDGcsYKpa4QLRDHLz4XCwXj",
  "key25": "FRvNPmkZCSqtT9v7zxafkLr5D5RBkeXpHvNcXrE1DpWBAcRtd2ddZNMCwSgbGAok7DbhEBTkdTyexfFVLK7RjtK",
  "key26": "4v1W196Q4pXwUrXs4zGfav2oF3vG266DNL1gLH2FhYySex7bwKWiajcXgG3hc48aPVoZAUmUgR177HvGdqt3HGHC",
  "key27": "4rh2p8m9mUYWdx3qpjBAKco5CzMpFcFPqYPNst4WCpdE6h5s9YpjEAEhCpHBtxDh5Wu3Cpzdr6TSz2ZtVtdPfRPx",
  "key28": "5RjzHnLGSSTMdpjWxk3zFGuc4EajDxFfLWd55dAaHvERRw9e5bKYgVyQk3W4NVXrT2jeb7sFu7sj1JAVhRdifpFT",
  "key29": "5c8qjrQMaAb9LqGtVGvZXGLT3Tz4XZCWG1XWwj1Aoghe91SkW5zWRz8YiuJ83ywKouAwadQsY4yrQjQCWJjg8r1e",
  "key30": "2Xc2AqR4HkmKL8wtqzw1YMQPJknNw5Mhomt5Tvjd9GaM6B9MbFUimqwbDfPQQ459FhDBsZAPJFH8Srx5q9CsVA25",
  "key31": "FsogpNsH7XSXbUYhkFgijsHYxrWj5NfRaZLXAwDrXH8Pk9dEaqPKZvdenE1rre21sicbHiLsZvHbtp18ZecL8sX",
  "key32": "573rkGiMnMUNdeqQ2yuv9K3PrqrNJJU1ujL6Q25WVtyLt9ppCf4yZT6haFNAXrN7AAi6eubXTdeRsre1M7mrnxe6",
  "key33": "2iRDAoY4bij2oaVtT3V6qyNs8tYsLqQdrs63uMjGg65eBvheuaCgbo8v8sMxYhoJc19t4aNEBPHU5FwFyhGrNjum",
  "key34": "zjJQVBp73aTSBTqrcVhxrAiL8HDkUaMv4u8PeB6cQPubYaH6gaSiXH4cChZpLTpRppC15fFwdvPGWotNS4vTN1W",
  "key35": "2rzfCooUjYXX7bVF3g7p6U6T8gVT6XkBDNy4jU3cXjYWcbCtwK9TS37Eo92rq7wLcZ3wmZQmiEiy2HgpMLCCzoUk",
  "key36": "3z8YbvYwrHCfdZuzVfgtFTcb6dgKfFkGkndFhD1gp3w2Eoqo5AzWZei8xJ8DchEBzLpTguLEotLWsWF6vWMqQ19y",
  "key37": "5wHDutvt52DhxSsx3rNcACuM6AhWHxe6Hrwf7QGeC4BywTNW4xuQMXxkbs2mVcNkL2ni6WHnr9VvYqEJe9qPbuVx"
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
