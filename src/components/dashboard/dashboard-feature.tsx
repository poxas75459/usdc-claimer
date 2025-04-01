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
    "4nos6QAcQGokJybQsRMCfBwC8nAkNPUvTSRyeVDqjD5iuBFzAjxmUMHivxByj8VqDDLXBqrgucxgSEkH3vKbTDUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VbzwDVrd2PCKpcYhoCcTdCBmVB85MrXwGMVFmakRMhMjT8Q9iYcmsN5ZUWixrsSazpw7YedQSosNg8LeCnapDHn",
  "key1": "3uU15Y9WeqF8aTt8PFR5Q2wcRuNi4AQh7SojX2QkEJvHT8y4XQTU6r6pdpeUaFYCjNb8YxvhLZjg1dx5W2GW96Q3",
  "key2": "3MtYLC4bnnW6vXhtHQC11L1oGpYSx4iPtiDN8EZGmeE9XG5DZ5TUxZRrAfBrfMxKjZZcduUHkVJEnKRdjPp8D1r2",
  "key3": "DH7tkpFxbFWiDhF51rzTB5CLRuWy1pbpXL9dfXroNEwMq59hSz4aVCr7ZMHuNg9HxT65xjFa3tcbZgogW1EDMLK",
  "key4": "5wAomo6N4pNABg49mirmcot2oDdmVvzggPhT8oom11cUUknXZpUQ8hpwF12Pe6GsAbRbKuaVNgUL92zubidcrXko",
  "key5": "3dq3uqP2HV5BanYwVpBwfosSFGTHhhREbN4z2UTYiUtQyxnRsprMcvLn9GnHN1AGVY13d6D8zntXMcjCKh5k3Jta",
  "key6": "CxMqtRaR6QEgg2kpy1oSWgiSjzvH3m5Ejh8tj69nb5QznBbH21vPAGSzgY5SJ7MzJDpgtgfJJ734kkmc3rYoGWB",
  "key7": "5qhPvD5jjFztzGKvHAC8V8nxg7xKtpZfKDUMnDr3KtN18Xcg3WcXtzutCptd4j8JgWtU382UCCy3tnDikz97K7mD",
  "key8": "4tqyXKvv3vNU1AFzoXr1zk9Qw4dFSeR2GPQH3cLHrsBkhidUz39Hvo7dYijZKs6ubAsX7De26E4ebqMeJrRBmA6y",
  "key9": "QVCrHBzS6Lg2G4v3eL6HDBpbH2yvR8tUqc3jxHPgo7VdWW8tLDtjwwqnSmtH2bMEUPRqEYAAbUUJSZb3WH7SMrr",
  "key10": "tFYVsdaCU2b8i1QnQLeyy8u2gczdZGbs89cyUoSoEmJ2Q63vC83Ho1SUcnXQHSKxEZnySaJAqA16KqC12sYrQkt",
  "key11": "2zVUVQSW8u7QPqj5p9YCPJrMcmbeYnFYCaQbrfTEZN3cyh5QYYAnV8fYh6bynRiFwNGDY2GC61hsiajNvH6uRUvC",
  "key12": "5GBg8ukZRwbc3PVFA3MCHfUZXhFfHv49JV2arLAnK9AG4s2aqKrKfhcmGiQLjVHqMHkfFx3BUzmXqQS6bPgsDPVT",
  "key13": "5zV5DuG1X3Qjn88AZeAPZq9zR517ukSn1Di3XLVWEYodoSP5xTywHXWCSBfjphsuz6rbVo4RwrZHYWWd6HLYsfg3",
  "key14": "4ujnjjYZwxj2uiTopKiJ1P32zxKbkRfvRWK6jUL7W5TKKvecS6qioTGAPq4MdQTMT7cfxmE13MWpRWTHKUAXD5Sy",
  "key15": "3vqLZYg7F8vFN9297KUBX85pCVZ45W2dLSedaGnjY7ga2Pe2rit39xpi47gaTGY1jYRYCrJm6XojKAeDFCtRXNKk",
  "key16": "LiePiJrdPDURJWW13UpYDkczZa9BXDtDZ5RJf5vjnYo3WJKdDbCu1oeN98HwyaHxpEsYiGtdj6UVWng11krik3m",
  "key17": "4Sb8gKK7EFkQmAnJAFDYNpbsfufdX7jfFAqzWnxMFBGAkixn49kbEtvDxKK6B3cjThqP3pA9Y9Ghg8BG4MR3eij5",
  "key18": "5ViEAo5fUPRA7JVVnsS8Pa4MKo4sVnEbyQ6yEzodZ8tRh93jT84asvNLFygg9Uy5t8rK4u1BvYWKv49EzPJtq8oz",
  "key19": "2R2MThmWd9dWRVywGdX29jt8sE9kSD47Sn2ED8te6ppvX24JQ1FfagE34TXeDQNep3UT8N5ef7eSaDpBTsdbyqtJ",
  "key20": "21Lrf1dKJ86xdH19qKwG8GYunjZMyKWBstmQ8iTRq5Tbhqw5fg8AYXoZ5LmQAKodv1VjkogkvuN3ZA53Ro5juTKu",
  "key21": "sxYrKZ4dXE2kP28NSq9VSD2ukUVEKtkZqE3AFN7P89umYb8AHq9tWWGAfcR3v7CjarTfFfapD79qhMpqwxkw41A",
  "key22": "3EAjis1NbYxgPj1PiymPLonAw7fi9epYhqbGW9L3JRyiRQbSDBU2BxaSHUn7eJEFFNaaNLg4rkoq5JD2mxwJGZ3a",
  "key23": "3BN7ARJNkzHsb2Sqa1SSHHpQGzmHzoa7FLzPW7BewjK3Tn69KiShAEKgb8KbdqH1ANaRiyZhkMziozbr8k9Ebchw",
  "key24": "4NY5bgsz6U83CdPYvkd3KVxnMn8Dt3SnC3bwkv7f5u1p1TC6frT7rjQNai9P7TSVpg6az4yrchWvsF2aLAytXTeh",
  "key25": "4FKn3nL5NVvQZNwYiGRzJsNTij2Tzn4zu7eayVRvuP7GaEAiC15AiNt7WyFQv8RLvueXXp3kzuJSmgdXvPbaQxFk",
  "key26": "6SrtEjXnQ1Bpvi4AFVqfxZMUJmtEvr8XoP2s4SdVHB9R8h417cCPysiAYqHkzSr2xvyYrC8rhHj58hz2hH641mF",
  "key27": "2CfSxfc3qZGKB6VhGWvet34HYUN61HQJExCP2kpEbmbwwNifAnEJxgEzocD6YYcbbB9MyYu2LwTHZCuTZAmgXmjA",
  "key28": "59ojLaLqhJmuFvvnEKf9hXDgGnL5byrx4L81m49kaLsZQRYiyavpqDRth36FX7z51nfq8UnXPH62ZhHPaFNJcZdo",
  "key29": "2tn1f8E8FQ2QyFB4arqgqkEokBQGZMWVLtmW6BvQ84juncJrERxXpFKKkfpxPMGU4MrJ59zyYQPEuvd55mQ8bpCN",
  "key30": "2DCk3JP4skGdKNo5yVLiCLvoGpsCeMegALckcsviK9Q3ySpsNUs9hwCeC1sjCqRHd6FQqQ1a4S3qWTs7rwUcho97",
  "key31": "4KUKSSC8WZPcLrGMed9zaKNAYz3GtwKWvRdhU2tZLto6X4oeXfVUvmNN9V1jRgib4iPrMmu637h4pUefHKCwLtH",
  "key32": "riv55BiC5EmWkQxgY3MiCFPYczH16cADQyTohZX8DK1JehC3ua9XVWDvSoAEuWdij7sGiUjLjFqvc1JAqEz63bU",
  "key33": "3ByWaYopgnYrL5MVgDxLCXwCLsSfXnyYzHAyeTHW9ib9sCEHhTiJw8FWUnSkE1u8iejdnErJ8P9rU4e47EcYuqqw",
  "key34": "gnvmmdJPgDXiJQZhdiqBWdHSi2aLJVmvqy5bgSSTDHrYaj9w3esgcv2R3py9EfryDW4NMh6RYdA8Uh6MrsKi6Nj",
  "key35": "3gNVzFCMPHDPSF8bhQdG474PLMDsFkZS7RZRMivuxB8v6Rr6HJcK353F1c47DH4vrENA2fSCEPschcJHkE6Bw55q",
  "key36": "3iHfPE2AQPopR2mGUErsGPRVcDQRnh9vu3GyPR7sDR4bJqCajCQPJgKCjzCqg2Ri7fs5YpEDrRzWSrkvJtEU4ADS",
  "key37": "3Hc2Hc3C6GLcktuDifGnsz7W9MxuiQH4sB59xt9q74XFrdYh8jbhJaNmRZuwYf87zY1kCRSejrKttmXW6rEdCFyn",
  "key38": "657gYFHqMiqoVxnuhFYa2Ts8mLZeaGzvxp6JNEeMNf6n3bKDurVYYbzn98pEbtNwqwtvHvVzngJnRUFcBhaFFwhY",
  "key39": "ad22cxneenRHbbecdcGLfY4u2AHixZ5bNiabYw8MD4XY6kzmysG5tZR6UJiYsZRNAemmamJk2gdqGAGcwVJ4sBG",
  "key40": "5PrGrG3yLXZKRYtAsEvvdN5exUi1RsQBxMSw6892gWTpppFHjo5TeKtExxtTcrPLx5ndqzZ9Zt5RkoUZ1jdcrvio",
  "key41": "2gPuaGJYaWDCYT5Jinf8rwesrovDbTS1TB4xf4NqCZE2dptLoF6rjbQr7Rxkpi9fVh1AGfG2v5ngKmpxuT11Y5HE",
  "key42": "5Qd6ZiKYdsT9B7dVBL37LWrwsmnwvPM7ecz4dkNxrJqGo2RV9F1fVUj6wq2WCrcYTQtTSbNgPenfUAqkqWmXNxiQ",
  "key43": "3TpBJxgPQf87KCUUG53VfqcrMiZZDP8AjKg6Hpg3QZPsHWSMbb5P1aF13uqMQktyyQEv8e2JRrSMXH6LSSgiYsPf",
  "key44": "3sz8oUznXoBFJSEFuignQE6ZaEPLVFU6EayuJfpPnK1bEQEiMQWMJULryVEQ5ALNvaqVb9cSAEf7739fyxUx2yTt",
  "key45": "zGQTQetTL8ivnWZtcnQwBVSo6MQX6ca92GWZ9aYjEMG9LSEkH17Tv4hVcSSX3Aaspo1M52FQhbVtwjHVqY3Eu3j",
  "key46": "52mxntsSbWuTJBBhLFoD68K3uMvTgoTNfEMbFTFS16XxonpMDTQWLa6eGKZXnYZMZC3rbWpYbTvQuYGNfWSy6ztD"
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
