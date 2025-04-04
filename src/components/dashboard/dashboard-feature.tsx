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
    "v3arqMhgmXE3ev9CvozMgqFmdvAz6QPRCzEoDLThZhjBqYA7ousiXMSZpt3qLgqYupGFQf4jH4jfRLwvNYqnRb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xABmdsH6aTFwQkTnXyXreVpbZqPbPZbJgyrSQDmzgSceDueF6XHTV1n9rA6bjoVFrRJqBRLmB23ns1EVyqmCn2n",
  "key1": "21tQKAub5Le61rSTVL2dDaceZsur3gx9kb7ppP6xHGZ7fXN7atAHw7iGLoNqdBDBHAerBE7Gn4jjpLEbkhZESGXg",
  "key2": "4g7Ak49hd9sCAvxUr2rd1f2U9pLLeWTDhDfCemhUeqFZ3vvRr4UHUMUr51U64RVpunjQ3E7BCv6k6X9jGr5SBt5Q",
  "key3": "4amhQapcZ1UqbFMpFFoUDqejTeMgcacyNJ2sGmYs8829yo3Ssaep3Em6ozTBv7h7uD5e9GHbjNTj3nKgUyXj9FKn",
  "key4": "THNnR3ifYDoawiGfa55YmY1NMkaaWvn2Yt5wmT1TLS5duABtwAAnb4Dt4GzPSeEe6npZqQhaGRS8ohjR4bhxA4n",
  "key5": "3TKeU7BSHBg8JciyjrhKRdDEpY7yqm6BAM7hBwa769Qbph1iR4ntuVdvn2HrDKGGUfd947WSEukmwNSqthLRzefD",
  "key6": "C5Wso4bdt7cbaqLMwFxoCCG7q3vKbBJeNW9ZHfTg1NjkAyGMuWuPBEuUZZ6GBw7gmcHtgjPNyY5CKFGprarUt6N",
  "key7": "3NQWGCrn2CP1ZfyPcU4fdyHSQQZ8vAmininbYBcmdZfgeLT2gb63ttwvWj3GmYg2NrAh9vAibvTx1KAc41bdeSMm",
  "key8": "5RHPZP9jHVDKyjHDZS8tBNnKafPxEjSKks7oWd2JECxiLugKexhPhyi32aCWzzyABbPpz7MhPuYUTAA8t6QEo3Ru",
  "key9": "4ygiuGkPQdFgj2fuVBLBy1FonA6RQBHJeu3jstVwHGzUPAG7SWGydWw4LwcdFarKvWsZdULyRUVLKZyaSYgZgtax",
  "key10": "2wKJavwdFJHCjzq939QtBfZJkqFUD57YRfxVF61Ew9256rG9ZSyApDYGDUsTALo6sz1bnMzadaP9AaiwNdNi1z5f",
  "key11": "4BbQbxYHwtssacfhEjcKSKFQFDoggy1PojGFbryeJcCUyrSCdNAUM56mZVGbfL8ABmsCsxwvcd6yHzzkd9JoTCHX",
  "key12": "5nhQLNAxu4gKVAzq9kCZpcdhPwtCNoPRRzoqWErx8UX2ekKtfZBEMNju7rjjfL5yGp33VAGEe5MKVcEB1igiWp6x",
  "key13": "P2Sx4MPmdoTHQpwyK8raatVnTLfg3PQcwNtM6c4Fz3BV84jxTs4fzg7jWuhBLDJUq4AU52wk3XKWPcp5qiJsPhD",
  "key14": "2Kv1fUafmCCj7rkFjUK4ZWXFqMSYPPSzwgj8r29KPirLB6Fzam7mgaRZUQX3WWSEv9afgiNQkpHPkgoNKkpH5PLe",
  "key15": "2nEdJnoKUd7mi6TKeVP17v45LqJnCE7VqYE5XwoTsQSrij38uv5LNjBf6LQY6BU581rCDdqdrM8bJPNgNvfuXe7T",
  "key16": "3GZwwqH6YEvf3DVT11juSUrvweTQ6gLaTcJ18pCbKsh2omqXNXt6fwKdPeszBxWamkrsMYoumKWE4YcTYYGjUYk6",
  "key17": "2hrhD3WRWMRXGSbqwpMh3iheEoVynhb8W1pMNbTQzC4fsxZwVFcmTQgtSPVuv6o8nWQG5w1Y5AR8kNAzwKfk6XT6",
  "key18": "58ktr2ydwrTEEvWyLSfgqZL4tmibjkZhi5k3aeoHTT5RQVFPEEVBDMwRrVVtKP6evpn6et9ZV7x3kyVsw3TA2XoF",
  "key19": "5LYeHpeoxTs7e9xq96FgugJfLtrH6chAcP4Reu7vcnLZdXKcX7zan5yJnCZcZaL3iFvXGgXetw6G15hQeeRxeMUb",
  "key20": "5Y7TbNzXhUPSPsdZMK5k6KL7aYxYM7zRgteaTzS6uBkXKaQruUrcBnQw7vg4QM4yrjgtkPHUF1znrAUjqNyZa5fC",
  "key21": "5vepSTZuBBYzPpUqEHczTed2zMGc5w7Zwh97KSJtivAiPqZT69KMF2pSTSJ3r5ThDRei4RXrgmy6r3KhGEbZYfEW",
  "key22": "318mFS3JJ3FMvKUuYCKxC2VphfM3q9umTFLduqgLT9PX3Wn9AzJDUzfmBdnKtjmzxokH784Ad9dFKgWN83uY3QY1",
  "key23": "4KBLEptDjQPCRTT2Fhj729kTasgGBbNqGoewtK5jqkCcyqAcWy2eRi7BN9h8weRVwMefN3ErH8vSb4DeY1vUxM7V",
  "key24": "Jt4HtCWZJqbAkZ21PvvE2DV3EsZ7UKvXoEJkhpM1BAooMJPyWrKp8QpDwgqGCVybLcpNNoUqh4zNyVgJDt5U1Kz",
  "key25": "59jB76CHoJbz4keQ2dxtVyVo8Z9A5fLuEgXR6UG5K8ZCTy1p6hFmSRSttcSJPbjm6rsJyou4tFYYxVT7CYTYv4sS",
  "key26": "46btRwHgYCbyQqemM9QXdDLEiXHhMNc4Wr8dX9oqRGqJt1ep6LcXuMpBMATK4H6d5eyDLtY3Dy6PfopbiPYsgPET",
  "key27": "5syCh4D11v9nPrueCKYrMCrh8SawM1g5RLFVPgVR5AVMPAyYpZ5ykVTRFQpDwVKqDguFRGX3GVVWwfh2CauKJgam",
  "key28": "42Vqc1x9gH8UDKPWYH7X2fuwa4pu5KKFhoT8tx7yffuPW63yR2USUX6x181VUqeegnUTnCKzFyZBVyq9c4Pfjs2J",
  "key29": "4pVNLu34EXv381SvL7uAUym4RBoo8PR4E918YEqifyxYfXT5XRbQ33hDs6HykifVJg7mwAJ2cFzMY6ph4rcN9ZSN",
  "key30": "4nvVuTq33ggzLW6DeUDFwH3g66GTjLmCny3G69UpGQSSWE1ou38buayEuc9HpRusetD924f8XvwfRkN1Xd9wh8XS",
  "key31": "mzbtRxiSdfQdbzw52xcokjyr2FVshRgUYWonCBdsuCs6oVJiEPpE3yQ8wLrCJUGkoq45Uyezx3HNAwsSzivymsB",
  "key32": "2r14Ws54rUTDkNaubKSKwa4YFUrUdBEWMZK5QbDkKSi6PQuSiPkceRBTtRF2Wcme6nTwyhagPLYTuRbxMsmm2Dpq",
  "key33": "5wE184HejXaTmrJnKePC4uYyvB6CM7YJGP19F34H9ZGx3ipTMP5kcqV6fPJQu4eL71GjPHXzjfXGHN3Ns89VFgFL",
  "key34": "3ibvBusfwVEJi7VWLgZ5gw1UBPbUyaDntGHSqBD7Q1Gdoet3YsNCiV36iska7EXBENmjz2gDdzkZG4SbNXKHByvM",
  "key35": "iNN2pqNaUc6Ka7XbjyP5zgvgE6AkPddDydbCabr99U2S3s2SzL8PoezQUV47HH8ky3LSEuXRvqnDj1KCYvEzVFy",
  "key36": "32nrVfvQb7224Tqo4oNzpc3kgcYhHYpxqVzBfrgknxbBqg3FGv3X2GRuAUTVvdR3tPMnJ2TMmNRLcG6jXH2Qjh7t",
  "key37": "3AyoymuJxjQSFk2ANm2JBm6n9YKL1N2vqnZG32dScF15h4VAkdd5FwvF9VHZ4AZxLyHbHD79CSXEYe9PCjPegHJs",
  "key38": "4uYM6GLv3HuZN1cgbMw8uPcT8CacFadBo5apP6wtKtCcUFQfJ9SFkiQZTRkPeGD2DH7b52XQqxzhgN8t7XEE2gb2",
  "key39": "2kctB3U9UDgG6X2Liys3Ut4cix7mc1Gq535TpfH5yU9pmkzowiDD2Nh3oi6gvht62S7KezcYAssTkThPQMJNS9ht",
  "key40": "3RtiXKmngqhD53shUoLFVzGMJjatZZ64KmV6pfdKXQggy4qhgy7hAXTsYKy8camKX7e52ucKRXrH8cxd5x4tAgPb",
  "key41": "2vHsAWLMUELyaeRg66NjKGagu6TgviPQtbHSUE6N6JDNB2YrtFJWfu3XRfco9Rqp3arHjxvRHMcMoTGnpgLeU7HM",
  "key42": "52toNx4Tg7QNeCcqFG51S13iTYqgqeK53AJnV7oxsraHUgF85XiU2BWtp3wuezNF4HaBYUgNPqGj4i95YCngKuRU",
  "key43": "3no8Dev4QCcv3U6tCSNpPjCXgFzHDpXLvuQNayJckn4BhGMe3T8KRrekvLMX3didV13NBmaUY1m3DN57js742eLH",
  "key44": "3joi2F5fU8u9Pt96V61tPtN1tWPuLWxuXHiwuTUa3JJNTy3D6Vcyn4EPdUWsordEKyLswmR7DbqteYV29sQ296A9",
  "key45": "3cWbgkcQQYEYiMGM6AfijWH7SzyQ6hxWmJMb9G1gi3KfGgokceyVhVP5zL3mEvrrhbg95an7xxh2r8tsRbrzo2F",
  "key46": "2LHoyhYXDERfrU2Dg2DkYN4mUizBkUfXJimGj8axwwbxCyzDb8z1wCPtWm34nYthNxVXaRqtD3RVCAQRpVWyac7H",
  "key47": "28dvvPeqM7oK8NVzvVk8hVtvFmLi8zozckdJQwHRMKVs69wrpXSyfhg7VF5L7GRv83vXkG4JwUqUbdTuYku1U97r",
  "key48": "4tXogLQNQg2Fv3HJyoe2dS5oLPqhzGUnY18TgvZdHkokh9focjLN9mFbHbv1p9LJ9GAGVgHBTBjxgrFfgiGbb6c5"
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
