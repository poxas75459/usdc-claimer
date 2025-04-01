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
    "9fE6VGfCW7sKVmeBQLAa5wgkRGERZkaJWnVL7wbRCsT4b6WJrwCZ19HhQi1abanC6aVtmaQPDe8sBkPAaGEmygs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4igp7jvqF8LSpJ8XdAd2hDorkR1Xc2XeDFiQ4FUjR9cCDw1aX49rvzCSnVxxU6pj2CVsJe3DaKT1H7NQMbi4Fs5G",
  "key1": "UyFNTYsyedPH9rNwr7icnpWncRhdxzd8EHfpoaUM6PoTe2Ux5jhNGsDbhEueRoBEcHF64fD98VmfRMwvRVgpZoA",
  "key2": "njpnFmpRxH6GD3GzccxYAhYo5tFXE2CuxzgyBomeMXKcro7yDgKo1WKawnFddjZf7S5AQGcdAybSWc5o4pP2CzE",
  "key3": "5sfdvHRXiNzBjhtifCcR3qVEzZz8CaZDG35uXKDzi3v9cXHPrzu9rjwaj7yiUTX48UC3R5en1JjPxPEtF51or7Cf",
  "key4": "4q6GK7CKSAFFiC5drrjbsqY7MA8m6sfPFA6rCk7R8PdXbE33AenMPeEBKeCrFHx47a59M4KwSXV143yHuqSirNMa",
  "key5": "F396dhsUAh9nBNA881huYPq5VWRTot7RWGWdT6r94RJfG262oHAaYoMT6oeu3EmRt6XJm6Z3M7wCf8CougCpnR4",
  "key6": "58MvnMeq3ajRsPpGWzBt8cKd7HstjyWGYmUBj5zMtszApwjrR9ogm1sc1CLyhEFPZxdYFPPAkuMDoXMFAPMa9pgj",
  "key7": "yzhGxzQRY3s6tLpZEJyUU9b8f9quujjU76ukA9hSe4mXSDtMftLEG7PCvhJaepVo3koJq9y3TQ5VQLsW1bfMnho",
  "key8": "4f8oi6AwXnjBiuX79iiEzkQhPnLz95YVzrx3qonfxGkg1TDYWfyZmorx5MyLjMK1caPQWfWUyN8tfxVqJmmkgDtq",
  "key9": "5NUvJSxDjzRAaXt5cumm3Df6vzZwHbATiC64WcaPTwKbYyRN7ggoV83bx8eRhGqdUgu3VMezLm49wfuu4mMdH8Le",
  "key10": "5ETvLnitNYkbQDPWbaizcyNSvFPwbUUzp9FbLtuwW44L2gBaBea9zhr2TtxDuw5cjFamYyQ9aKKbUf2mSDy1fgXN",
  "key11": "g9r59g3ZgupfwTLkkmLcbNvs8mTdsZv29f9kfcToLtnGfCBzJw1sa1gbxXtvYzU37y2w8NJidx2LPXGY5j6wLFQ",
  "key12": "4k6LccV6e7XG1YJarFdTxArwNvU61yXGz2Sb84ZD8xo6Xd4pnhv7hgZKVjDsyTJXmztVMiST2ARC7vV9tkaVGJMT",
  "key13": "3QS2Kj57Bbkx2n9nW32sxV7sd6UQEAYEZdLzm9vPtG7WESCUEEFiXQuLZpqCChy2aY2CEVvFBRC75v8TNuqnDT7c",
  "key14": "5fAVR79twNJsKsq7mgYbTpbd4P8oh71VMBXiVrxuqtDXtWYnDFJPQqhk3ve9Yf9vYdoSGp45wCfGBcvA9sRKuTxa",
  "key15": "2sgwAcqY2wxmwiAUJYwfNFrCsWfgQw36jY8QWEtwppKUG48c43cw44J4o5xPLB9KgL8L7Nrqw6Q4jJH8DSaXL2CM",
  "key16": "X9tPXm7MWruYtTvxPWakseZX3enf6HtYzM9EwcVUdzTVJRrVNkUUXhaGfwZosTgSwXQqTFyf2wQcnLfkZHxTZiA",
  "key17": "22mMS8WrdA5vGS1nNHiCkWNGHxfWwm6cAuemER6VSQABPqYLMCJchn1ifN8mdeG2Xrs72ByyijUQAFFXnXFHSx8S",
  "key18": "271VMHDN8Mh9ZsPXyXTinaRBuBMYvksnKELwA3Uc8teag7saeR46kEt74pkPjcQsG8wuhQx1jcRiFyaRAkt33qKY",
  "key19": "4JFvE1hP5osrh8Z2AKjw5Aa5QhwjZWMCi6HvHou9XNJf3gfXnATysxVKw4bCekWbwZrCWqRDHgS6XjCMBhCdFqi7",
  "key20": "2iKc6fpHY3adXfLWt1P3tb9Cypxey4koBNqbpadpf3ZzSnVgPLr98k1WqGSJcpMcoYuhpDrzjcpzFKGiwGNCACdB",
  "key21": "4c9dzssSt8DsgvPypSDdub26eQegXYhrDMf7SviuNykhyFW5ErssS38FXNYJXtoi3LDvDdPtFm7ki6j19ABr5ZL6",
  "key22": "35azqeYJAp6uk6TBFzhxvHM2Y6mfxgFEwEU9GDzeidqDSW5M2YdJW2hM7zGjeMfAoTmYoEHB9WsbXohHLqGNv27H",
  "key23": "5t2WJ3xUkXyVVJRF4cCcPNuwnL9mYvDjCmJwD5GzLkoh2nWvRdaMajNDFtdf7zVf9YaiKR9pjJ1saeBmZputfKyn",
  "key24": "KF28kiVq46YXv4vBv7Lovi3KF7rme4faoQuuso66DzaVEeENoB7hBT2ZkYWN53QZ8z6Csbm9SQn922MX1f4udW5",
  "key25": "KrzZDVhE1N6hAp6Sqhtr2bfhaEF56zurKqi8tJj2dqSvrkHcPabMrvkEipAp2nBhsizE69U9UaiBox7EL2M75yJ",
  "key26": "24UaoUjNjhFkCZPHEx5jGBUKdQfjygRq7kuNKr9Un2mP4FQKv7Lq65UmA5iFEpPr5jS7KWwhT5BAByfRmBxAFoA8",
  "key27": "5yaDVaT9aGBVML8pfnfn1LMuvDFKRnQotKT9Pamd21kKa9fM6RxzbpCGgSQv8AeFdPHwjxrYm14j43AGoyNRYD4m",
  "key28": "5XFWCaSceFXxeRd4ZCNTLz3Ae97yghdwsHgSBiuKDgqs8LKwc2DkywFM3awoFkEo3ssmKzdGCXhCJVJRCutfoJGc",
  "key29": "37z9JxcoVXyr1CxfDqVzif15s2xJWEmKxYLbZcyu3A5v3LHSawoMYujborAB9HvEriNMXHD9dF556uZ6qXUF3Pxt",
  "key30": "2ksGU6nt7MhyCJP1U9K3j7hmPh1KkgeeZztiMCSSXR1oCTDZWzGmz7JY8YFEggXweLNpYnHT6jC8qHoMiUECdz4",
  "key31": "3PPcq6o5YnAX4pVDk3XBUhogyHYTkxFkYJpHfpX6gfD9jBo9RyT7KuKm73Ke1geXNgBWv1pH61g9QVKkZxySMkvh",
  "key32": "qvAX6ifPx8nBCNqfb8FfaSCXQ7EUfcMRgCxncZhGmCrLMw47yCeD1qETePxci2B4jPAHirJKSpbWMviXn3Z4jiZ",
  "key33": "CmNysBQLcey3XNFWDuEbKtHNfNoDwtreUzNvu8hHo1Q9EhPtVPsYCmuQHg1vt6wnirQy1TKX7vVYLsADRSt1rxX",
  "key34": "3jP2h7pFJWmAWSkdfSmQrD7wd5MxJSMLbigQsgdR8CJjjdCETtP7kNipRxPw1hakFFqTzmQFm1ibikHPvRabPgUy",
  "key35": "4XpviK8QwR1xyVN4mNdujzzKQG3hcv5AbHjwGBpQFeJwdsSt7zbVMnb5ei2pRvXqhUexzxdUU1euuLnHLdmSPdMA",
  "key36": "5EkFBFN7touMLT3JBaa2obaLCoNGmrQ3PVjTPGLCJaGnV81pvCEaYj9LrUhFu5T2RSWT6RNnz7cj8c34cynaJbHx",
  "key37": "2DRF2WpUybCV1Yo7SZWvSqziGBduX9U4mZ7pG16hBdsT4fNDwFudXEgMTV5zoVCEv6A7yXJNgcaSw3q7dqSkLtSr",
  "key38": "4DzSgyzTUcPe6cAe4MUXp52vFVdL27aHvFkXK9XwuvycpsYoF4ku5bQw3EsjYi7FNwEuUVBgu2SRX4Fs5rqBvp3c",
  "key39": "4zwZLrvsvi8mD6ivuFb6coLU46WQciJFRBWMaUV8d17sJABwxq5DReKHt8Um22iQtgXqqGBgDP7roXxaep1y5bYy",
  "key40": "4Ragx19mTc1Ne6hsNyobVXm51VhKyPbse5GbYdLYQzJccuPEdhBKNLnMEkzkdj7gAjL9VV6pb8f7ycU4VMGxgTVi",
  "key41": "7QWHLFPYGehkMoQRt13MwYZ9Afjkh8K9rETDSXUi4j271bAgHdCUoMsvhqV14FejwTAfEeVFtyZP7WwzepJwJKG",
  "key42": "59jKWaLM6222jymQuTV8W9sfMmBMr316TWU2DVPqKj92XrBUynnTu5WQaEgu9Qk8qKKVu6j6o432H187AAo92meA",
  "key43": "2RD3HKjXMbMreP2S3BiftxRLSbAzq1xTnMHpaismvjx8aLTWgbs6BszBCMjp2mMKUpbNv6joaJGDSpEjweDi2vss",
  "key44": "pzrsLwdAZ86dcZnM1uG5hZBe7XuPsg22tdyBBu7j49zcKWVng9VU8x5Xh2CtXY1cnscW4mXw8FwbNMv6vbwiZsp",
  "key45": "5dxAJQfoSNkrP6sqyHq9xnamjtn3jCwrbDgmzeSpwXxi43ZAbY9gngNKpHMthmrc1u1QCAZRECtEU8fYQRaNmfXS",
  "key46": "z5ZPV11r3h3qNh1q3bxRcocz39tUDytRPpEvEN3mFnGQMmrHZm3tSokRKNvB658e63UtLZU8Tf9oxP1LoF4sGnt"
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
