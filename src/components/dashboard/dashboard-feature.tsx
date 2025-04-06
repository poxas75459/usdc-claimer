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
    "3hHFA4dNdDQmnW1wFmw5wFRrSv7tWWnXL1t798YtrY5nWvHm48YnZ9qvqAhrttDr7TdtJmCrBzE3xMvshAa5mSFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UxCvCMNtNEZHyjSLrBkoEcvxkDD4LQPxazuYW6ARV3XcBHDs6kB5Sw8d86RDwiKpdVuQKMK5hXPMz3xkdcziYde",
  "key1": "ZJczqy7frFLv4G3AJMWyzgWLxdSd9H4DJA7tk4tKeAqXc4VbRSswK5eUrSMFUkFb81KDXqj8kRHDkpNRAhqWWV7",
  "key2": "4M1shWSxBu83h1xYhtRRQZeST2HLD3wN4b7zM3xqL9pkHzitj31yLFh5JZNDhbfGYVR1bWXvWCk7hNFFjc11dCVv",
  "key3": "v6sqaxRNTZgHMXmhdYQsah93dgzu9st5Bt6gFc8wt2SaNHhENFu81q2KcX3aaqaAB296rV9mLeg4uJdV29kxu75",
  "key4": "3jjBS7VBAR9v3LLEzBJFgDQ4daSoE5m4sUJKL1vbrKgSCnzNMa1BM3amJCKViCjnE5QZ5BMocZZtAVCbR6x1ScdU",
  "key5": "5rPMJ1gwBJ9vWpSHCSFKMngvKPLkm39JT9D85i6r5F1WQKbJsWSRMsvdNiDTv2FakcS2k54bvF5RxiC9JcH9w2UU",
  "key6": "3qkEJ3bHSS6fYJMvRxX8rWFCLk6xogAKE4DFF8UPCGiVdpb4gmGvDoMo42SRKFg7ogFiNA6ri2SsmpfPDzzSQVUB",
  "key7": "2n1mw7DrQQbb54uk5KLAB74X92N81hccGqD37sEmzgXJzvnGViuwSxkiLYj24QVQsGJqzb6k2sJaVmquQpmbCymo",
  "key8": "h8PxfkQ6yeWkWieNFx9oMRqYns64JdjeWunwT2b5ebdXNXyfaHHp1ixzjcwy5uKSAcz8zF9xy1YTSao7xz1JZCG",
  "key9": "2CnsYWKSKdAdfBmQKEW6j4Ttfm1fU6w6msbCVUDkvFjeRG5xiTUkcrXnNJTb96SjSj6MeEJ5zqmzgeEq3TdT5sCE",
  "key10": "AE4XN2z8XLxHwQskoBAHrM7PzS1oUqyB2Z3HBxeJ7b5vVhsdsQzNGzo3PhoP2rQq1aPERQLgGi4aDPQdWKAaPu7",
  "key11": "2dkfYEey9XvGd29WE84F7VyLBAhiwrEatrQcuDySf95iPEceTD3Ecywnk65GFipHaXUeu8ZkY6Vh8UhxWVhrDSAy",
  "key12": "2Jjfn6Z7ZqEG2sLrJEydDPEFD4TB93ZNvT8S9MSVK1SVFm6sqP2Ajd5yvKYRqVap2a74ZxoyEVQid6Z869DvATQ1",
  "key13": "3N14heS2rG8RkyYeYJvJosHGxhq5LL72LNk4haYg9ixXLiYMEhPGDtPSE3LkuDu5e93MsqZC7raNxKgrKdyoi9wa",
  "key14": "3emGnUqXRw1hLreVA9ZYbGasThmewWAVKBEW1REAe1d5aC2UfJzrAadcRSMW2jUoDTogeYTy2cwcwf3S8Pe4xzuX",
  "key15": "4u5jhTnfCQHcWhKMFzXdgMQ79J2oFfkCf6skNAC3UZGfvXzAiSwdE1dKfRqM5CcU796AA9n2rGKuHaeBsnLXKDzi",
  "key16": "2a5VLCpMNuRprZyYcVZY4Fy8QugohDVdaReYyQwhVHmLAhYiAdiKen44VSVu8oJfviSZHSYZwUTHM2h86oYAzPi2",
  "key17": "2rMNAGmM9Wt5DfqtVEHXDQn2L2mPzNefGEu7NM1uRzrcn3e7j36JXeW8ZTfxNHYjigTxYK4TowUzhspsmnfpoZid",
  "key18": "Y9wbiyVEkayTnAWSnEo9kEzsUXhy5heFEp1jeuQm6a36MgjsPoSBiSmrQgevbiLFRrpsNJugf3vnUDbSso151cF",
  "key19": "3b6eBH6TvNjD4TarPeZpUUUSSeyg1iSgSLWZxe5CBxtYq9mmNU8NcWRf5aYjTDKtudFZ3g4Qu9JTMNUvyjJtGHJY",
  "key20": "54ejqZsXpoJUiJKqqbYqN5hdT39duS7oGyyDTTu6xNi3b2na5eAgkoRMKZQr8yPTn4a6UPrBrV465g4eRmz7qHP1",
  "key21": "4hdbm7wSSYrhxrB3Xkw33htmWwcu9wopgE31BLHz45iqso7qg7PFnkrcskDcKmAAxLhTgKTBfye9rj8MLddfx1dP",
  "key22": "5ns27h5or46U7zRfi4vc58qhUAamhGhuBLpyAnxTL3Mfb7sk3RG1Qk5tLzPJfkap2xs9EaK8UVR8Fb3XYRE2z9cm",
  "key23": "5XXP5XdFpWHH6u6FijrVbNAVMRUkb5uqQKTJhEVDs77gcdHQnvwbUxyNeLa62LC7QUSu2bH8YSiR4sd2uEnb26n6",
  "key24": "4ADK2QFjKYkLPjLgidwrTgnKzys3qmHQc5qUkHZHCVyT2CqXZNRmW2AKfZY95pZZha7fD6NfW1JRGYMMazrCXCEN",
  "key25": "5QBZNtPwVCw7w5T6eeC3h2Amb22zbHuF8VdbNzbRQtpn7xztnukTuEz4XzK9nT4xQy7AWG3MgvtLQAvfXBvtFeDX",
  "key26": "47aMJv4tCXZurEWht3B3FL1tbXG1NqgNpeeEWHKH9MbJwm9HBr473UFhAksN3woaLEW4qosRpYK6moKfmpR9qNaR",
  "key27": "2ZWBTkFUc4n9cdpgRWVcnwJ6hrW1HxufVMF1kWYRyjY5sVGcTHS8RVcvWVdpaUL5NBarJFwjyDmepzceFJR8CixY",
  "key28": "3PqjGmmHi6uX8AzFbPDzoFBW1FoGnidstUVQ3H341QC5gLE6agZAKoQ3Sqc4H3jwTdsAgwzSm6wvTCQiYvsgSqQc",
  "key29": "2pYu2AZ2zvZKPznA971UfZHr5KvYZqVFaG8NZVaEGV5utud7zL5nwfugbW36q6misFUWYAebkh82T7W4oTnMmjw1",
  "key30": "2VJh3XeGiTZ4irBg2NFsZXtxpeetgV7UTQzxSwYa1m46TYocYveT88vt1S79VfbJ4RMdNRNVyL95FZporN7hkQSQ",
  "key31": "3TXaniime6cYsKtxMHGPix3y5JMMRwdEFYoRqLKdQGPQeB5skLRbSbGxjoYJKaz2N7CXLBzKZHm872JG2hgSVpvK",
  "key32": "4AKRjAVtpXq6zZJBX2hmoRZAjDQwDbXiVCRQw5PWQjugj25tUvc4PFTqL6KjXZJLspRxSFgf93To8sXYKG7NTFo5",
  "key33": "LTUy8TtB9yoVQaoAHiZ5XPgF1vVMeysYcwJJktcWHysjug6J6M3jz1eLKaHSc8eP2HtF7PMZ5EdQeFBd3PcexgQ",
  "key34": "3vVGKGjQduB2ad1KrH2BDfvdeUvqEYSLN6NVaUE1Kkr9xUKTYNiKoWEyk9xrZ9GKFgDQqznZFQZ1dFsDDJiJtgN3",
  "key35": "2NE1zXjFXhvj8TJ1EM2gtnPjgpedgrX1nJByFM1RTZXkZ5ZMgRCaVJErWMkPx2627xB9eWSZfnqM8ngA1PrrvXSy",
  "key36": "5SqfD4fNnZFWG2p2g7okEw1ojdY88fPezTmUm9FozJT1fgkCR75CCkAPrH3ehpAxL595ekAqRzfwSFkGaGtSei93",
  "key37": "4oGc1zupwWpEeMe3GndQTRKXP57bQWfhCgHUideMS2366vJ95pyvceAmHV9h3T8KvdAA2KsCsU83XB5QEF6Vt3Rx",
  "key38": "35HsDri1K1tE6awJk1uRFzogR9kLXFTk4ujU3WeWH9sVnMiU7fD7w5ju7ZL4h7eA8p5fviEuGFqkSCXy1Gf9iwBB",
  "key39": "5HSBEpW6sG9aw49mSLbjZDoJgfsgVQfYWKYcikNvos9Fhd6gQYbqdZk2j8xTgSoy8xYPVAbenkQBz8XFLKmHnDR2",
  "key40": "5Uv9mM19nWvK5q9CJkbC9imjhgL3T5ADA7L46D86opGt6oqQyVc7b4hrVe1LsP8Fx4wSuzdc1kVxm3wQ4YUdQL9u",
  "key41": "5ekG4ePi87Q1GstZt9H9nqh6QA2d8EPCaMx4KvTfaZuNZi7Ug62376WDZvXcur5anzVm6Dt6RAsbvdRkwDVHDANd",
  "key42": "5haNakfL9qr3ihZNdwmR4TXYjLM3vmMPWp7msbZhg7E1EbapX2PjQb5uPrJKFe3LbQUc8atr6thhewRGjw4QR15P",
  "key43": "Lgu18SmazgRcMDEYiKNCAFXGtGZsfdppHuTCYSB7aXjyhH3LaDzzxJY4DBUbnsHx3gjpzxvcz3Fogb84XmyxUfh",
  "key44": "uQqitYFQ5upZrvmRVN1MyDX7avUbFj1xiWVCHHtwBUeupjpgURUu3DWPtMHvFE4Lq1wxv1toBZQRajWJGnGE7RU",
  "key45": "3f5tWQwVMu4wuHoF73egEp5Yb4AsDLWHdnbmq2NEpyVoQCR7iFfbktjgwswcV3sKf2kanXXwBnGRg2BLU2G2o23R",
  "key46": "EQnxZU9XSEohbv7LHDeazh4Py9vewhqWWLNjw345sbXSy7pTUvDjmh2KMXVAVjciRfqRPqFpHwUbmEGrYwSwfPE",
  "key47": "4pk4v3gx2tDTqD7pTTaCzk52uQEiNccLcgpKLkJpa7muG3n781MDhYE35TFEDhuTTfizdwm9GozMPeKq2qtFhLi9",
  "key48": "48oLkPMeg6b1q4PHY6YCgiNAvF64u9Gix1S7D54js9jBRx7qcEHbZ6J7DAfeJA21NQbpD6WoTAGLrvUKZwcxd2zS",
  "key49": "4XwwfhXGm4pTc17NeVKCsRF6RmkojCoS9xFtFZ9SRFpHGSgiAJi1JzP8kWQo4hh3KPumX5GHkdLjJesYyKW8fRYg"
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
