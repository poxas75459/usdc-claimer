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
    "4HnF73GgULypePd4PRjEsJbJJLXax7dmC6PAFvCVSXC3xNDTkp74okimnqvkHAnNa2Tw2ihxh45AXgsstqau3B45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43sS8jowNxyQ33HA2msrWrT5WiuPzSzdDEsbPVdGMag1u2bLSmBnYY4XEXrywiKetRN8ng4xQipKQmpPaafw618a",
  "key1": "utGLacVSPBbdTCUNPjYBQ4xD8hXbNR7KYBucg7DfqRNMBb52FNpxPZfVUBjGavsj2sYZ5YSxhFPrF8XcWnTMobz",
  "key2": "529X4f766HtbU3XTEyidQnjq75wjZ5rivXAMBAKDXRmNtjPCq4QMtfse9f1tgBaxKiX1MZqYAqHneVnXSmN5oENG",
  "key3": "44CFTLhirtvT35mKjWhkCmds8JNq48jSy2rrh2rq7TcMr4PZ9asDFT6xBLgjKU228TwNkQYxZdfJSDyHViqEcarc",
  "key4": "2cvrTY764hCTtJDqHzXZZfrj1xK8gUDWhx4CkndYX7XdYBnS7XTcWFKYdFqYhnRL34sM8W4WAP9yrDrmwYFiJ6Go",
  "key5": "3f1z3XTNberPj4x3K2Lm1X1MmsLfXgApDuFmEi2QwWectmMvd5URYyki6FUr8TkZX3QqiAJdRj7tkMYieegGvx6x",
  "key6": "464mLbhn769Moyri88YHXfLuYDXvJw65HEdSyitdQPNwoxoWJ2JwazbnC9xJrrPHxxcyMnT9eHGkPRy1f71H2tDL",
  "key7": "9UQBFqU9W2fcjYYGZHCS6fZJMQnBBrTi5D2Vp2ELrR4Y5UfiCUnYYPZNp248T3E6HCwHxqSp5NQ1QWxNWtotyeF",
  "key8": "57tGB4AS1ttrfFZwG7bY2v3GHnXgi8zjByJufJpbEkqeuwQK2yXYj4TzZuNstdvkG5arh7Sij2BGJCA55kZRFNWw",
  "key9": "4zNHciLD9ynmsnXLToHZz3oWPV6LLArG79ZJNBRkq4FJM6oozTzJzHKx3gHCcdFddMg9sEcmPibbC9fuTVkcKEQG",
  "key10": "N9MWB7d7Ga1RKfjYx7AHYMd36B5HcbyB6jpJuhdgsimKB9dCjdALs3Vb1xCu69hM2eGvDSb1eNQFFqJnEbiNVE3",
  "key11": "441grMjxD9iDiENuTwzACHqVb89rLSdXBt3vSeZ5qr8jfsXsKVJGKm6epxuEcYnZguEpuorReZu5iPftQBxjEn9w",
  "key12": "795GKYY5z3mCPXrapQ7kcaiFcDv2RZ3ZvWqg5jqS5ojypPcXnkHssKkE9Yt8h7EnkD3NDUFGEKMNfuSJrDm1wVo",
  "key13": "39DD1V6kGHynXfMZhLkkQMSGjcWHwaGZ7qCUYALSHzcWCL9y7UupGXxbTEQcMAyHt47vm7VS6qBZcTvGfb1HD3ce",
  "key14": "34WaYwuNR8jSatDXUjFa5be54jR4pnP9XZmV7K3JeQxfC1WJQ8ZRVhZBUN2NFBjepWgsYeJyXv3J2av9oSCVSmRN",
  "key15": "2UEQMKTbzXDzuKyyTj3qEBYCFKCkFwsmomPLzrRy8FKUdDTnRdnVefqZDAtMiGDsfMLafZX9T3wE7jmzg9fdfhAW",
  "key16": "5YVHbcyredwXTdgqujdxEaTZubQLXTbYk6Us96MAXv4XkXdWcrfJGCcPTfPY5PL5xi2bwEtC3WjMGvSrhqdQER3s",
  "key17": "56s2hH7YbRxT5mBz4qtfvAJxHteiz7VDycKmauMebAWrtSeV4gTccyFYk4Xy1gK8MaAHrzzwEU5t1DaDYBgYhEuB",
  "key18": "4iDDdZiTb2Mt5xzp2fhgnCuTmspBgcgeRp5hnnaHMBLBiAFhDxyop5jUJv3GMAaArGBE3r3Tc7yFY7qi5tBfg28V",
  "key19": "2txmMkprptM5Gv1qYMJMNGTMPRkmwqi3Hct8uJvsGF769j36w7jVtsGY2KqWmEMJkigduF394dvRtaP7NbRniyof",
  "key20": "4WPk7i4Jd6iT8Em25GQD28cc59to9GKmWFCA2qkCY5V44Hnz3tRQy8KNTKzVaRznUd2zAfRV5hCg7b5o6Nks3oFe",
  "key21": "NEuDSYMrncCqLKKvnk3oyxZApRrwyHAU2zoNS7vDBbD1KVBfrnstqd9nTBuFHJKr1eTzgZpums18baRNR1Mzcwf",
  "key22": "4ax4FHhEgY8Nqev7keNfxrKJkgteSf3B181XcR1mkXMfGH6x6epuHgNfJTjqeGG8XvtgVMUDcaykmxzYJVnLvHeJ",
  "key23": "29VdghuM5jYXzMVrhh8j1ccLm3RVP5UA41E3tJi9aikkRNtQoPv1rnF7QA2sqoGo9DU9jyBFRo2N2kbMmwcDS1XN",
  "key24": "4dwRt2jeivfhkQ2nRXVGLTPrN2wGtNo58DBEEZcVAEB43pf8jSG5yzcJ1PMQr5Jt5sHmVqp87td3Rt8MUpUZ3D9m",
  "key25": "4adQREqXm4UurQhN3VK6jkARyRjiuL1Te2rjyQkcbnSoivCoRcPYzw8dtrEmwjdCDTXEet8fe73Y51BYCxragbL2",
  "key26": "AvrSqPQXBhEvJhUij83CKkdJv8WPj6KP73AfUKy5NoKs3vY3d369C2uPm7NRGeR1yRFobq4NBVkJ7hDeYMjHfgq",
  "key27": "4X9RdvmZNSzTX6BNp9246XzgXaQXcYxgmifF34H2WmzzLgywaMGzkV6WTa7Y3pBE9w9PzThqXATmJHTMVPiwPcz",
  "key28": "5FyieFJb68nthK6BkxqoVQp2EnYa8186KoRDGUtzXqVUdoup2DCpJkSuoav86yzDf2Z8Xs96sYVW19KZToeUBpoL",
  "key29": "4BDyLBUAdYU1HjLmKnSWBi321E2wd7pbzsG931231ES9WDgafc5PKCupvVNxs7mvfuu8ogbpEunRcUw9mobkkquj",
  "key30": "2CPp7kv7GWNfycut3E3FaqeMFGvMhWYV6PCPV5oXoS5tPG3bpVewSjePujH4xYYQZbC9m6yfHvotcuQxLRRfdEp8",
  "key31": "gxFMm6dhhu44UP1EG8Bdv12X59yPXHu4QuwUcznUKW1rCSeVVenJBMaZJaXiy4J9PyP3SrmgbT7YF6NfwfSbiL5",
  "key32": "31wFrzvEGrmTA4ntKTiweD8K3KiEzcCgAPt96s2KaphKPwR4sYzQCMzwFnEM36X1idWFzyN5vvkHJ7mgahfKoFN4",
  "key33": "1GcXUsN7C7Z6q4wJqdhTrSYXd8iRaaLRPsw9TPJbrc2p62NZLqiQWG1sasofUCBxdKreLaMeHeYa2VdwXbw5Hqj",
  "key34": "4nTixjhgdnYuvM3gvnnbqnzfsiUF1efyxYjk7dCgysk5Y4kad7oVxXmXs4BTPXVugWVsiNVuu4535ok1Qs9eNJxC",
  "key35": "5r6P32Eqwo1sNyfpVxYXek4nYYLhQPPzfC8yoFQS8WGtBSJyq9st3ZWSEr9gRSCjmN3uLHhtYCyPrgE5dToZT3rN",
  "key36": "3NDZhoun6r7Z1VtkZEmvh3mJetNhKnbd4WnjpEhQDgWtDdFQzqE1qDVsw4odXJ4papCz2FEfoiL7VAtT4EMykqDc",
  "key37": "4BNS2qN74KNAUGdxFeVQKcLHpCH5ptKEW8iaKueH2uDp3ZftRLHgVeDLtpthx7xoN1zUNM6jzRAfjDP4Ri8t2sdw",
  "key38": "aKj5ZrzyYyVNLYWQnZUNcXjd2CBZeo3fmiodpKd3nMidNoNh2grn1h4qq1AmsRB87a4WYzkDvnYCcknfaexXykm",
  "key39": "5bAdRw37zA3wy7vpMuNrmeYz9zYSwxEwNAGhWCSa5nEuH2PgSNVvGKYU1VTzdyQhPAU9ukBMMgyEUS7VSvjUCjTo",
  "key40": "4pdDpjgGBLzWo9HUtzqZBmDcn8casCkPQWB4Swx5YtuPgxhoEHmnRcehx4MR9CmvsQrmi12GVV6Q6BfnNcRjtUVn",
  "key41": "2QLdacU5JVJpkoEe8rNspfVdvjSvUNsKhtC2qV8CyywhYdxDk29XpuCbgJJZAzhgj5Uk3WNmFArknLq2eywUNxRQ",
  "key42": "vo4aBj1BpzdRhuUU5rfjjoaMaMuTTnSz1WjRVKnLKZntJjNGua6sjXjfRvUnqNjyU8P2VyCXSN8R2FRxr9aHUgV",
  "key43": "3Mf1idgtYXey1xuU8umCkck8bYAqkWgj1Z1m1K2J6nFjbc4t3fG4D2jmfE1SuexNSEsNjz81qKxXX3x6HdyjMeCi"
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
