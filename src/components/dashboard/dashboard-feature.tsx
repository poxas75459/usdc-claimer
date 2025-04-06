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
    "3rPLmQQqpQ7wmh6Z3gijyQcG3dEU4LnjbHQyPH8oKtWVoQK2mrL5dzsPMDexeSYBPLvQih2uFf2CG3Y175mZXn6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EpJMV9y43ikCKgGMkUvRFmFFVXbi6RtwuaW68CMU2GS318Rgum3YPjmEY8SSYi3P9Y22cCEFmHBuY2T4Tu1Y8zT",
  "key1": "5yM3LP893P653Fga9hcxsCXZWyQrsyCkifZbBhZDTLSQYwAZ722ThSqUhy36WRXKDCoqP8gWLmsLeR5HWnbxQXr2",
  "key2": "33AccZkgk2jeCfmmPQpr4zUTe6skP6EgJTwKRJhSqaKVg3LUS2ANw3Au3qUuKjdAcKZ7iNBPfWgifagLwwzF3egA",
  "key3": "4Pm5E6XmMRDUwHza4fNSbyjhnn1VUX4QiEBesHt1PLRUq8CZNdZYPqGvwros5XAtCSoVe5VNrC4jLCf5sruAf3uP",
  "key4": "3mjGqJ78xS5oixNVMRAKob8FziGP5Th9JXjkvQoHB4zi2Mza63hG4iPVCEmvdFNdUkFj7e3apieqX9fGPJVZLKkF",
  "key5": "uwZGwQx4jN4n9HUiAivz6BVgBvSkGfYq2ZweNMnhnsaSd5CujHTKQPTocgtUaC1QquWqo8p6BowC6NT2R66CWcd",
  "key6": "2G1XuuPskYHS2TqD6m4JEKJmSkqadmXQXcvF2YLMZim4BmNkJgcKTjwvt4D1q1uYs1ffSRoJPfinTEU3FYD3qERo",
  "key7": "3ccLiWcXN6tZNgVTMXXWahX7fVCqMu7Zw4hW65Y5hPwsVbMabD82tNjp6uFJnDExSXbPBaRC8UHweL3P4V2tNfaM",
  "key8": "3QCMjzFMXGgnYd9HZxx8bumeekQi6zkYHYdDJuCZFvMS5jTngYGijKPZ1PUEZJpCr8SiqprCz6AmvDxnYtHobDaH",
  "key9": "1FP2px7GHosMmzt7kWZAi8qNhjeYZysoBdbVsQxAVT7ukaU3pxbBCUGS3e1SuL1RoqGR8nSMrD43woHQePwsSBQ",
  "key10": "2PCM7hq8t3nXjni3WhcNxTMc5M7oKthDMiEhJQGXJvY5N82RrWyuob536vU9EdpF1ayoM7ZsaJHD9TpcGpPsjWvP",
  "key11": "5sBd7Bo7sXSjmLFWpUT4GXsAohW4ZPpFGSUoRizjrvJWZJpnQfaCEdEaAbwMw5WjMG7tZjSJuo9Fe1g9BCbjZSQR",
  "key12": "DDGYdyec533Xwypyzz2YNCbG2qr28CKFB4bdXFYheJAc4d71X6SJAFCEH3i6hj1RprXr1wFNoBBjJfG37D4aceD",
  "key13": "KoP6n5YQqBExzWENnjUZ6A68kHREzVm4RHfQxJPfPNigcE5TpXASTRYijzxZa33ktcEnhL6BoGAJvLohR5Aq4A1",
  "key14": "6647uccTigZg4QVATi53pTaNsfMJHGzMbqo9LYdXB4tNp39YMfq4SPMo6iEcfoTNg6ubNf5EPDPKytkE5Cv3Urj2",
  "key15": "5H9hHaoXqmS8Dyqx2TMPHodmQWLsmZfctxB3qPL9ZMK2sQLEQ8uNWPq7Ki1s2grzTGkEhBVbzrGVkPY8N57WK5Nr",
  "key16": "5c5dYSxH8MBGK5DieNoTpP5k9F5ZmfG36VJf5kiwkUBdQGnkXMZtZJv9T8qbLC376KrrNjhDv4iZJ65RBAm73CYU",
  "key17": "29reCz8voWtpguWV2Tuv2PaSudtwh53TVkW4LLMpsEDdxbh7Xa4A4QCzmXmg5KqtMNnN9ixnmVvMQTcFTvi5rK65",
  "key18": "WeWpn78CjyT6EMACUq1XgzZCZHWo5efguSa59MDy2KrH8PPTRSVTZAGyv1s971WXCyMNEKZAVdWmpxg24ZU16JB",
  "key19": "2YS7jcgEoGwRiMZK15EmhPtd5Cga518aybgrJgkg8nYfQraJAmb8795YAN4JEGWpwbmmabM8P1fn24WXQXRj1GZA",
  "key20": "42Gm8FvusiHiXgp41m7TZ6RWP2VRdrg8NPKQ3WH96t6s3g5voASV2dpe5ZBcVauSYDhY4wm5D6ieKnEkVE8Troea",
  "key21": "5iXnr4Pc22NuNG63hrKL3YD6gdAnGtavm5mTgzRX3gyZchyUCSQ6icXY5Ri3gcMwd3KQcaVxkg7VKtBuczLpk41R",
  "key22": "65prQUHLxp4xAvnn17wBvYoLDwvT31ZgHLbaz8C7uywycyce5xWgQPJFMMoVtQzRyQ1hbSD2NniHToDX4nnkiP7a",
  "key23": "5FDT4EVLhfMuiJH18pXw9GE4eUVqC6F4xMWQ1EbLicfCoUyDwj4jz7b518RSZMeRoje5AThbEesZoRkJ5Mqi6ZPk",
  "key24": "4mMTSrpQYM1ULkPa81jSeHtCFCHmKDdHVdXHbmApBVNfSBkypya5gR3xVuEqkFYtJqkVSaVmnDfHqbTVGmi1Rc8i",
  "key25": "9kKiiWDwJ1QmPuKAyyJzqTKmkAdQYRQifrRYG8nDnCqGTdZb6RrmYw1V18w1Pw1VQELPKSjUayQKUgJCYWngyz5",
  "key26": "4xYfthk1xFhXrSwbUyokzeEAePjhQHuWoqfrhTF8hB36taWodv4rnigu2b64v1mDCcNFW1TfUo38HWoDqpXx7R6D",
  "key27": "5KfZv9fUeUkt8BphhfGwCHssZsD7nUHpxx3sg73MdYuW3NEwKQzrNxK7gEiyMgKcX4UYaQcaFPF5gVaFusS8UUYM",
  "key28": "63nHMYvPUEgD1ZTMrhgtVuy5R83DzkKLt9knPxAYYjvwNmC5c9Ay2mxiUmJBneh6SadVn5fFGEaqLjE4bavr7FPK",
  "key29": "4SFWUL7i6UjTeseRjaUB7VL627uUYx9QiQZtL6iQwzBu5FD2i1rQdvpSxhpZd5V1ysnuMVHMWShJsR5cbpJpAWsm",
  "key30": "5ySH5xZJ99doLRTzDRQXcHR9ah5QhXhr6iwWjZw4ssiKChJwf9ugHw86mcEZhb5vu1LsSNDd3SQnsDm3Avo5tfuZ",
  "key31": "mdcJJgbdFaLRUsyzEb9A9foN31QhsjBPksjg6f7RuC9Yy9vk6st7hCPf1a4MKBT57bHvPtXrsdpCjPxVLBvjr8U",
  "key32": "4Vo2VLCYHrnUG31kCHvL8px1XMmcxaEngYL4dCLJnUK9D5RJkZaRXhowok14RzmFFxPpY6qGWrs51bAtjh1mU3sR",
  "key33": "2kUNpbyj6nQpswceud7EVXLbRKosVZu5aQ5sHrPQkHopBJ6Lg3GYvR17pRmiG7T3Yz6BBiLDA6uUYd78XuzKNLFj",
  "key34": "xQqwMJSco89JXHvJPNxQhmTKADVHYThSiywAJRK2rdaDsYWEgWucJJHDo95B8HxmZbRm9KLWADywUVQPjnykdah",
  "key35": "JzqwUocujWC2sX4cycjtqezvG8P9ze3F3pVW8JpsCcLKPTNoCW2FPUNUiwzaeWjxwdV2caKxj1ZP1TCCdy8hg95",
  "key36": "44diCaw4qqfSwFfb81wgiaukrjqtxHaeAqPcxHdSATm1ZhF2xW1ihYC3oNJLgchLtyBVTrfp9qewZ5cC6XRABukr",
  "key37": "38GShWWXLWryHn5vPJkEeG4C6qct7soqYxCwjjy9rNeSyzu46EDtv4zXwusgZgD8U2hbqK6rH9AxmeMBtnBCfGVv",
  "key38": "3jDViZHxYTK1ihceAUEZjngXGyBFA1F9DaQygTLwLGcX3H11CWVEeyf8PK4qjygcuZYPv2AHa3FhKEu5qrPcKZyX",
  "key39": "UdVhGhNRJW7BrKFCFs5eyhqibA6FitnqV7pZDuZvsqFdtGv4d5fSGJe2vjdCaSFpdxkZdUiBpbqV9aUaecB3FUs",
  "key40": "2LB7TV7qiG42EvzVs7BTAs3SgHyWZNhTMcjxaTaxB5LfH8dnGuviGTt9sFHMthpEAmgfyzDF9MT1Wp31tYbiNyow",
  "key41": "5FAYfYPhWGuwJa6LeBZDNVtrFejAS8r13dra6qphfPzczcYn1CQj7mAJZcZr7nLZ9XSoxm3eaTiEWC2PBfTikKNK",
  "key42": "W4TjcJ9PxtAqZAZzqMB6rv6zkMrNLKZa2sKg4ukRgfvTXN6ZsoHoEbJ6QzEEJaRwvpNY7v1qhvdpqFa2cgxfidB",
  "key43": "5PCGDqT4NtWzs5yZQuQk5M4WLKgnwJ7bHA5FbWv4ZMJfuhmkscVCNV5DScD5GXgNzg2R2ft1yHBQsrUiZ48v3Woq",
  "key44": "3YMA4otr1z8CQuMrLZhitrFn7FBbVHrk1QHfAAZbCsHkQgVVxNDrxiTm8Wt9ZMrmc3rk6tsMgrGt9LqyDwVPmLya",
  "key45": "35KxNPRCiKXTQdYHmdMZmSwAewNivy9CeXjCmQpEo3sVmB7ehY352sCLQJ5x6BwfRMgn39VyjZ2Ykm6y33AAWARd",
  "key46": "25s1jJi22anpMWMVVUWUCaVuSzh8p2gwCb4N6nXkNitMgQedW8daYgEkRx9n1wvVYdUSpZFnBdQtBURnajesC95A",
  "key47": "4f8RvcoZutfvDbxTr5de6ZjofE7edMmDnLpPNBWRZVUWSggQz8PicHrQGC2a4Gys3MihNgfvmL8jFWMC3shsE5hY",
  "key48": "t6qzAGBz6pybdeFQhYD8h9nZoiQAg82MLgEYwrM5vZuE9XwKDxP8e8oYQad4XxDF5jVDMRF8BEkZPBgnk6i9qph"
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
