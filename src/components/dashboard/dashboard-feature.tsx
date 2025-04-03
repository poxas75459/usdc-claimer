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
    "5NYKjaucvNatC6dqmTjcZSYPPvBSBydNyMLk3VescXb7iZs5tnLHttPYfTbYQecNXEz3yzUiqz4T4QspCSy6fV1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y4yES3vf1dj4qvHofH42qLZo91UyXLSiyJTgUvjG2asUFrynkb5rvsNbAf7W1avmbFRFEaAGU93of2gcUmjRFGZ",
  "key1": "54fqL1itaBQm6mXzvMQkmwFwJZntT4Sjz7BDvbx7DiSfyRCvuCD2ErFF9fZsCtXZ9MFQfgDa3j33aavaWH5pdXh3",
  "key2": "2P8ae8g9wjrTXTF3XMFvqsJgnXVoxyebQw54BZ5hU6yXZarj14T4fNuumHdR2Xhbddt47mtFXz7YodRWDQfBjfij",
  "key3": "5CZWUPargHczZ1T3QhwcWdHh1hCuMrvEnpYPGmehWaAgSeUzTnMCcdvFKvhwvyVGgkar7JH9Vq3P2BxFrZ7MRwgV",
  "key4": "4rLopazjxvT3tXAurLWppbsrsgY2JdtXkHtcHGHF7jh5PcZDabTfm5oBE6EMFjbn7HHnMp76Z19DDEm2CZtmQuYC",
  "key5": "pJbScJ6g9mYugSGMZHXrTCg3Sysn37SMBtBq2rRSYcBJBRBwyrEkzTPL4AN36zLHP2NmjHu5qvoZA7kbihHXN67",
  "key6": "4j3RnLWP5YDToHr77Nb67mhCBPk1W1LWJxeoaUrobqTNJP6dDiN5BjwvFBpdnj5qGVFwmAmwdNxbLBQtG8KE3V4B",
  "key7": "4PGzSyNNveTADWAauyaydj5z3sqpRDZb5TAxu7c3XUjjjT9545b1hpGEXiakJPHp1fzyYsbB2dgAosxVr2jMaZmL",
  "key8": "DFJ24dEETrke4sJVhFNY3ZbM4Nk99J4wrM5TJERATnzKWnWgimgdcQSKzYZymQjbFWEh4eQRicfJQXm7n2Cxq9n",
  "key9": "5tVqVToPaZsqHSsM2RKkkZFpts5XqoQ6dgmDvStzvBVSLHSi1uBd7mGNeGAZqHaJXL2gxuJj4ncbgeSs952x1txU",
  "key10": "29HrYbpSmfaEVqZCmWfKcmxy4vFzjifMSYynQJDVpFvVapq6jcGDAVpXFhHFkkU6mfv82MhvW1GULwrMVFSTjGU4",
  "key11": "3h9SJz2MwZaUC5m9hG341hJ5Na1i6io7KBg9NebvpHqgL8aTq8pTMxo65WLoRCCZKm9Gnqz8NxQDwWrybLR3jkHh",
  "key12": "3mSjv92eiVJtkfpa7zcwSTRdZqhvT2zjcj9xJPJDWQnwMZ6rBR4PkTUtSVn5uxYp14qRzY6e6LTq9S7MEsDe9cVW",
  "key13": "41XaibhQA9mXCDKy8kcbiSEY9R6rSSEwPmPufZ9Xf3JD7M3UUrhGbAzAja2xMzPtaZQbjkkNJgh7Dq6tFQj8Ukyt",
  "key14": "31YjFw5DVG5FT7Kfof9aHNhD6S1tKysLMarSjUsKPRv79gBR9HBmdvTow8o6CJJSi3fTTKDAPxnwfaqD5cZujf5b",
  "key15": "4n7JZQNUqUSWL2RFXaZCHt4ySaiFXwckeoK9CVm5hNmDfaB5YytftEvcDvjD8pCg6otb7JYZ9BnyUxadnGxo4T7p",
  "key16": "2E1K4WmxChgfvc9LggSb5KjopKtsLmeEsSvkPRxuhR9GggixvoMXdq1An7xGxLq1T8CPNwXxFtHBYZzXbUjmZaAw",
  "key17": "3EJzvyPvLwdbLiC35E84PZZPnEeYMyDfSHnMLNvcZXhTSou94Kihs4wXs3FAnBhbqUpsw2LLjV7G5QKfVd26sTcb",
  "key18": "67K8dNZhge3Y3kqnJDnJeuXyh26PuomVFdY8ijdiBNrAGoPZGbpRvgaUE3uLyZJxqr84pz8ptvij99CzjRoQaqud",
  "key19": "4JhoEbVR786E81gvVvqiMKbKd2qAh6GZZucgoG2KymieMH4D3zg9Zmujc9UPybXMxE5q54z7d9UcGLVqPxxqrK3A",
  "key20": "qeAHatvfoBKQ4vuAj4cVHtTwSJcTzQ6jd1BtnfcEsWfeo3KmdPFdHvPZjj8EL1rsBG9z15j4NYWhxJJy4cEFNSm",
  "key21": "53wjMLyvBevncz4cDCGCDzwR6ZcYsZ98vcPMd16eKfXWxAkQPFvuRLbqRXPVCdWxqMHUB4XuFKD3APDFhz4sWTPG",
  "key22": "3cqt44oGKQYCYyi9xobCjX7zTHYRtpEijp2R91Mh7PHGGEdMr1NaYZKzmrrqDjMhSQdW4ykQcz3MTgstW5ZKUMfe",
  "key23": "jXaAd91at62Vrx3sfH7xWtd5WVEktbY29v63GwswBaDFDkQwUVtHDs2CXxomKFnmkKMteTDLkLGuZcMB66warQS",
  "key24": "NM2qrEvqL62vrhpJ5RWVLimZnezSEffw4zZktpnJdhUjPXXkLjoWJgM2Y3GMX8ZFS86f9HK3BojCcv9pYwW9fhQ",
  "key25": "WKFNe5LjEfUKiEyx6sfPN5UHMw3WDbm6FRcNosfqXJ5cjEf9DfZua3BU1wpncBNQz4XjyrKxniaLxLte94i5VZG",
  "key26": "4kUnwcdJTqFY6D8LgN5xwrv2CNc5kCwioXb5zh1UAD6Rcm8ZoYRdSnM45RpGz8B1bNRhNJ6icJ44r9cxi7Mcd1Uk",
  "key27": "4BMp77JHGnxKv7sm9QQ8MTuBoKt1SeYKYmmhC2eTk3z8DHE9iU5TW8JWYU57nqPBt4eWvD592YjSUa2b9CDzegYo",
  "key28": "4EoLtUtn352NNux1ZidCaPYk4YBNSJGj5sxhjjLsPnjMyq4D33dxbL2w1G5dyujPWSbu5uHqiGePsuKKNhDRhQF7",
  "key29": "3aWnVaLq6xGo5vJVqf2SF84hrLaKTLSswCciXhVHqB1rwAmTK8cK9yep3QNvQqtWTqzCchTEwVCL5hyj8f8jjSwS",
  "key30": "3UVGBEfR1e1YRUG34j77efwBvRFBcfyjfeZWGSpgWctDWyaVy3nbXbexWoj2R2YdsQtpBFy1uC46846oBYeXaCtm",
  "key31": "963KjFGBtPAasm13PZXgekjqT9LSy3DQNsSVLYRmqGJpEn6sEFoowqeo32Arzbztkrv5yuVfp4XAB86ZA1mQTvU",
  "key32": "AQjvxWwL7hNWz1BdJp8HJLzpA7cqP49Q2DWPj4NYVQUxMNb4UBZkATRHc1PEytsU1gKBGagUU4APr3dtGPxK7tw",
  "key33": "4dyggVMTwicSD6EYwy8mMNWnydUTAvRsDbb1rXcGFjHeYXNr5GCEgwHGUWgpqUWpyD8iNvf3v8dreyg2z3WguaYv",
  "key34": "3Q4uqxpKXyFbeLqJcctXjG9kwR4fxE7xuX89oRjFvrVWQ6BzrhniF6EVXD2zEURVDgMkWm2bLu8L4PMi61S1c7JT",
  "key35": "4MHJFbvQmbKnQ1CUbS3CnJYDkDfR8L74Zv6MQhXwG7PEsxiyy3gtWbFoZnXQVfbNKsRBnHdETTKx64D4rqbGqb1R",
  "key36": "nzasYQEC9weypmodmx2riHLibghNUn3bWCVXpg5TERoigruZ8SHwg5vktmNbdd72BNMJEDkHbYaDruAWUVubA7e",
  "key37": "53JCUPRNgFHNQof5ujVzbeBW636BPHTZfYbYCztfcnMPSoXa9MYZrwBUMiBJRxth5fjxeWZahDWUCBVhsoVXsihv",
  "key38": "5GPAB8hKU5CrRmKQEFZc13vZ1dn36JuBwq9USHRCvjhT5eQGKqmQyzGtGiWoWDt3fCTfCts5ndXHUDRuR8chdrur",
  "key39": "33f3d9sqwkvoUNvLW4jhHXck3oi5EceKqdXos13JaACM1HTpKoXSqs9sYU2sHj8s8SGgdA2RTd7PXbH7bdjwY4aL",
  "key40": "5XUSp6g4kG5xwmo9bJnjULXbbbCE75yKXCZgygnUXG1ERRB3EfXi3ojrmoadj84jbKaVZKiwwLCYFQcUPu4sujno",
  "key41": "dHXzaq9NeJTaEQcDwFiezdQQZtHGZegLuyx13JLGcmZAfu2WzeaVteQmoezJYm6CsCbJ1j2oVLZRnBun2kxphBt",
  "key42": "EHQcaoc5n2shSdwAGdxnk1BpGqh2MT8PSxhHQJe8JefpbE1zG2F8uFgZzCpUCxDaxod2Y3j33D6bSxaawQwDh6V",
  "key43": "63dwU5toYnwKo9shYgLUXPUw5t2k6weipWBAcc7e1iNkm18TTreoifjVjd8S66vXMT5bd3i3wn2h5G7QB43tbr2G",
  "key44": "L8WZrYrHSvqDgfNWDotyMaryZtzPyoH8JKXrodenjvPtarUYqWJBqqHxX7ZHz6D4tWMAY1s1tmpJdijstReuY6V",
  "key45": "2HuXudjFcjmJmsYxM8vkmMXYpSKpuXxagbparnwPggqG2kjk9769xn5cfsHVGvAqfgLM1iNvs4J2Z5TicEKNSU3D",
  "key46": "5UkLJEktK3kzAUzFaYqoafC7pv2HLCYJmk9eVAtTGmZ8gjyN3fvfMw1oFi4hY4V42Jhha2MptukxhLg2wCVU4jFc",
  "key47": "2dQQFnmoz7CKCXuy1gjXnQdmJnRq7nnbS5aEweNbnxXa4eBPBYCazJ2jSQxHcE1kfYR112Zdh7SyiDbUqCoDsWgb"
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
