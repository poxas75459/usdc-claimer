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
    "28PJCEyAAASuZnXKHBpoqBj15G8SXk4oDdYcdLuMJPRQwdu58hDhRx9EWe1rZFtYhyrcXPHfBxhjoNwiQ6RfhQer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32mkepaav3kiupx5tMngYYPns1baC9ptMDsj2wzvzihxRtwLbkZ2hLTnkaTTMhtFKFcM9sLLtH9E8BsnrWYkVosu",
  "key1": "22vDunTg6orkRmRBd4RL3MFAcNvWefniLLgM7oCVXsDsEerttCTE6mdvevcy3sVaWcoEAw9JjUBE82sFqeWAdG9s",
  "key2": "2kL3uzKx4m1qPhevqeuHoLKS4GjXCuPcTSRg2Z9YTujBQyEBdeSSagLGRT573Bt2qfKvBNv7PGpNfWsqL6K4SW1a",
  "key3": "5F9sDJa5JsTn3ha8BREKfawfpDkiQq95WHB1kvHnUh9MsQowV7BKQSb8s4MekEP82NBMAf8T1kVP3GNqrD96Viof",
  "key4": "26NbR7TArTwXHhieTvT7tUQUPSMuacxJDWvkEPMbfDzGaQArR3f9tbEFoobqERkZ7zzBVTpGZ3PUoDxL1A4cBXrc",
  "key5": "4yFvGZxJvXQGawh6tx1EWpmQYTbxQW5QN9GKZud44SWB3CL4RnhYu3v9n1kvjQhuoDFtSv5s8PuB4PWBYknXzZB8",
  "key6": "44NrCyLxhED8j68BuFZ5xaH1wWKEBf6HK3emVVRr9EthgL2CxJBMEG55jRnLrGSMJw1NQK7FzWnxqYvyn1j89H75",
  "key7": "21XKRLiKWiL3uhnvdBBEtm7YJKvD2g65H7Xo1datgqU9cyFpu3QMf8VAFBQmtnrHw2TqSP5EfpRM9YKswLxcRwfH",
  "key8": "4dHfnpZykJgtd3pzWpFXpgTBA5BmQFiEhVrGwSt6KX7q81iq8bXAwL9nNMR7e6qdDYprerGQrcNA7VGJouJPgFm3",
  "key9": "Bwumu7DC6FnSsnLN9NifuGp4nUhAUMjHE5VhXxizxs2fis7xZZKdqNxtPo25AYgGicRTesYo1xGRgmzM5qKMcWH",
  "key10": "5GgsbiGhFvUAxAuZgJMKAmgZhjMppbECumvJu9EKpKePBEx4bV2QTykQpp9rHkJz3dhvZrKVzc2b131bP5j3FfKy",
  "key11": "39ts6dbR3Xtuc5wzVRedvdgBwZk1PWFWSD1tQVroqTxRSu8AtNK3Ugmc6sP2Uc2TDXWuHsZQsQ9zowne2PxMJtD3",
  "key12": "4WoQfzN4HMAgG3b7RPaXipdVtXaxDWyphHqfxQ71PB6UvwSLmgpH16r5pgdcwLSkTLorxd2h2yR4CkhFLCfXf6EV",
  "key13": "5k3nqkorZywwom9kW5JsDkrs9qHkjW2thiszFZHyL59XTwEBz63eCVhEMq42Cpi9F2xnzz8YjuKqTVy7bqb8BgY1",
  "key14": "XsjcMYVCbaUoiXN1VvqYF71HaFpKvShJKJhCKB4f5sZ4TC5gA2StzxtkPSq2oicdZcccoCXotP1j3eXHJkYD8To",
  "key15": "424uuafcTUTAAWaydGubWL3RohG9LgjwH4tMbUbYzikLAD4k9HgegmQiy5tCzFv7B215zCXbPKeUTemvq3Ur6mE8",
  "key16": "2MfeeEsCnw9EJq8AagX7GcP6eAmtFCbaQuxjzBdRRFrpWNKQerkEUSvCf3vEWCiB96eDvL5FocSkSmT2ZEKJ8c5d",
  "key17": "4oWshKkkUW2xeyLugET6FciyLU41ejEnYkpg5U8seV7ozMs1UaAcNKDd4d6WK5XhCoffhrjSzVN9jngzcoudQtxo",
  "key18": "4hWJnsx2PuKNVar8JjmfSpcSGXSVjvxWMGMJbHdJt6recGbTeAvEbTohFjpQy9VmR4pbkC4VrEEsQGKkAPJzQgx9",
  "key19": "SkxLdvqvefL8cUy2xDtdZjV7Pj3GPyLHHvrYKr7uRGiQ2uj7wKbFNkWLTk1HxLy1VhGrfGazRaogF2YZkyHyzxJ",
  "key20": "4Z2n2y7GNSgVkBV48VU3DSZ3qSnBjy2K9cXLaZFXVdvdrqfhcKoJCoyYkE6dvU4fma6GnwdmhcqM5nUkTwHQbER",
  "key21": "3VS3brKcXhyBvnv5zzxPCeXivvZ7rogUB62gwJDj8Q4ibcS1u6ykFSesG18wtmNzDEs2UEXR6VovCz1LDjmpRrjD",
  "key22": "itTAdLt3m51fYbjKuEvFvnsExkNPwpLaYdQzMREMotBwsX96tfYZJRGEhhrjhgk9zW4iErpxFw6SQff7B8rP7pD",
  "key23": "4CXei5sxjeptmkAy1kGaHoDsVoaCTyCAWAUm6ArvvoKENcnnkSmkFsdTX8miiLzEjHmBJaKrnrFSHpg5g5XUiS3a",
  "key24": "5Xa1jxTnvzweDJvSqjrC1E6KBvmyDckjzb6zgixCGpFKMauqHLY23hvjvnfJW5a6Lgzrhn8wRVKSjVQnqJnsaBeh",
  "key25": "33T5bBEdAb7rjLY9jHnpLBDvZKRz4UbinaqNPUAyZsT2YkpGnNiGDZkwbkFb1gZbFcYUTNp5RffuF9dvn1BwZxvS",
  "key26": "3p8dH7CFdUG63mN4mikSZUsZBVGLE7zT53QmhyXJ7e6gidxxDBoW1xWLRcBGW3aYgrWHv7dUnCT83AUtep1mmfTf",
  "key27": "2a41P3o8bkxu2se85RAmPPKdVishUWv2opbY5VbMoS2i2YVe5j2X7AqFBqSZPMR1C1nd6y1xp2RWC1sbwXRknomd",
  "key28": "2A38HiMX2KuCK87MMGTAazKwXkP4tm5nBNn7tMY35VxSV57UUALjcJUs9P1VifDFqRY1LoUPo7GzbLxrrtwJovo9",
  "key29": "4p7FzSkmatwVknMeQo1Nywh5HC5bhG5NFA26D4LPbNFZz8qTnu3K3qaHMk1MQ61HtyUo59rBnt8KTJi7fRchobZp",
  "key30": "2RLi3pSeMQ8fddhhf7rw618z74m4x2ZouH4QiGmsSae5TFnEpLPiayGNfWN9RABhcmAUWF5fdUFgKcxTtgBuQwYS",
  "key31": "2YGckYiUbghBt2vKrzjDkcfVp6Xa5Vp46XSC8T8j6VsP8N42jg3ft7ueNHA83uwQEPCs1acm7oVfaeimjXWyKUDk",
  "key32": "3rF7zU1eDKK49fvZuP5V8AAFwNZzjy2mEz48reMrdKLnnFnYm6nME8kMhF7H8qRXWsqVkXLvnJNr529XLK6u1MDC",
  "key33": "5VmLaaoXwAmweZKVGfBPe1U868MFfmnyVXgDZe4oVEnumKveSLumdj3LoNVmhPDSX4fAqKxgTS6T5JSVie27pG19",
  "key34": "3qvvF2rnA5P35dQeD6zmujZTyzYXJLuiCLs1MQgbXXqEEELQ1sLHpvpWAFdunUBD6yVJgtLi4qAmxUEU3UhbHdJs",
  "key35": "8oH4Z9jps74k2b7Y8gEEXuNQXehEmBsBCUyGrhBKGn4FGb2UYkn9HCZ82PSSUks2bWD738UzeTzCCUCzbrAAg7E",
  "key36": "3XoSaWLd2mjxy2Qzc3b2kqsHFqkds2faAA6fBuVDNBS1VnDxdaE38WMHc1uBXAdVtafsbWyeVUg5ZcSenB9Uftsh",
  "key37": "5hTc8njmcsPtUD8Z4VJZtWW8FuDJ2WZrfUajKZjdCZnDkfw8jRRi1uZqqKWfZTC5fqqoXnGZKHmTwU6K6xp8tnYk",
  "key38": "3dC2dhEZaooK7nkkbyuHiBv6bgn3Yz76huCyeqKTgeB1ftB2Ky6adcbUTrdi6jXqbuUT41oQErVWoJfCkzUvfU4k",
  "key39": "5uVPP6AbmY2rCvhLsjCa2oB56XTHnQhZsyBfUX1qjtNPerTH9YgqMQ82gvCvTm7whBCtVDiLUxVbR4fMsmjrRuA1",
  "key40": "3VRNBr3tJqSf1WkXRaFx2DgH8Krm5t7PqeMA1dsiePpXZWVGQDk5JzZEbM9Z96zADAG4JxsbHVvzfhHF6tmXhgpA",
  "key41": "3Cgy1wqS1yu1YG38VNf7iG3eqzD9PhL16Qkig8MQ5QhDp9647NdDTXrc2R2Ym6krqohxZtQeFf7uF8QzfQqorRAh",
  "key42": "3X8G3QfSScR8KWRMdJjdnrajNY19SF2mYF6k5dPA9d6TcJiRoJhxz7tKsz71jh8QfCxbURBzKtJLZUbfG9X17JC3",
  "key43": "2gcrnS2A7XXnkgv3GRivstf8HBHNJFiZkf9ib6vj9gE3KsTUopF9zznmt1jcSrQmuqse2kuTtjq6efsgpkvkCmhX",
  "key44": "kydVKAVMyVuZFdgVJLuvFXDuzHpsEYJkG6D8Z3tN2UPUKivJF8UUQafjB5BrKiRcUTMuGCdCctsab3jadiXpc85",
  "key45": "5fFvASup9fGfrQw9p6jr3V44ug9pviWGBUqxQRkFekHs6gjf9xgzSBC38moyKWDKH5ANvZUGM7EnpGWapprDNCGo",
  "key46": "5ftELpWcWWg24omYqt5TknSiqTJZrWsogzj2mNqbdtYgrgW4igRySZDHewikicPp6Pz4h4TiKXPwvCLhyiy5qyT1"
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
