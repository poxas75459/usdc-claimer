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
    "26wy5xba4NuE74x4BmG6tbcVP3FthhbSEcMwCXmvNUpMFR5LGq4y1p5aKoXxwfNMkF2sHgbAzyRKkKtceo79XvyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gMRMwq5u3EPoBAcCjK4QsaCnEzUJKk5v4uJuUYc2omKC5q8yYdUx17rwkDVqWDuSMskrFEKZS5jh3S7NMckZqNc",
  "key1": "32J8ht2HT9NDSojMPXeeVsnud4nysifrp2b3ZEL2uqvdGWK9dMYdnQuP6nCCevBgjqDDC2M34JVJU2WpTKinbzQU",
  "key2": "64sZGbXseQcjGUN5sT35GDhJeuC4bvGiJ4t929GrRvvn6HnoQ1NyJ29MxSZSi7rwfkbQ4cpVc2VXfgJd8GreYvCK",
  "key3": "3xBf7w3XYdjnqPfn7bkx3sbcufgSZq6xBJ4S72kAaGjYKJYTAyVioCJQ8hFof71RUoXMEwpgidN3BCk9vt66UGVU",
  "key4": "5tDHAmXdZP29X3ZsvaEfRpZb5nHnunQmRkya2J9WdNYE3hmsoQ25ohXVUguKdkgY7VZEoc6idTnpnBP9aSEr9Dbd",
  "key5": "ycV2UkAyGWVrEx8KF9u7LpXqnQiYXAkCkML4d2J9yV7x5cLvpdMG29BBRic7nowfbfdbuNeGcGbd2eNwQXZTZo6",
  "key6": "CSzouiwM5aXFQqiBoFEETy9Lm66AuhDHt5eisfW8PPcPXriKVyj1oLgwgzXbtVHErstNiya9PpokRTeQawi2Fd1",
  "key7": "rvdiZZTTiHCDLF78Wi4EPVxVN1DZSjNWcC5Wt4SEsw7Y8JtS5GKAXjs76ZpWCGkrKXCkM38GQTmD1n9dcBbmndT",
  "key8": "5YoFi4BD3cYR5GoGCab7Q318Zmftz86jqXCE6bBLrywzZPQPZHWiWQGWfqh388zq2dFmGSQWfkWf5ndXh6rpjSTT",
  "key9": "2mb5c7BgX5fxPFf9pRhr95E2AbbrHnviHTarS2qmqSDUaVsbyGWW4XMQCR1itYKPTtBiEBR2C4L3TMExT4YPqE1x",
  "key10": "5VHDr5cXoc4sVtCd4uFsLXncNjVmVCMQWKNcRjuYAXtJPtppHjpdu98D8mmJT99zKNDtKGcRYDKQNFkaLi2CqwEf",
  "key11": "r2NSUUangiJ4NmWaZABYbM5BqZZnhZYYNxDcsy8avCDHK4y4bWvDekWMwdyYbDGo9gu7Hy8PQNPAcewgJdru4rN",
  "key12": "2FBhDE37WniyKnnD6o7q4rTHS3EDQvxK74vzvTvWaw4LQY9EvXt212ZeT4fRSRtjw46kvTkLUgwmzCZj11MAxueA",
  "key13": "3WSW2deYScGSxnjzRUPGkT6JgfWGv573L8khFsNbhGFS6qo2WZCqRHZLanvdQkWKj8a6QdPopGSmT7DoUSKryZAz",
  "key14": "3Q9HY8SGoPxSHD7MqofghFoiDDqY2tBUaxBfatDwjSK85yaUU6PrWHQtZ7eLWbt4PPyfFsdaMdyycAmjXNNiayxx",
  "key15": "3Vc8g9GUnLy8oiJAcMWo1BsEyYgcNnTqG6goxFHLvLYS3LzU7gFj67rJQztF4QBHi2aEXMay6SwVwc92GbAjS6Ek",
  "key16": "3GARoPuwBARsRWx4NAQsEqgDsVH3NMAUpTXC8ebsGHfE7KMaEt2k9WiDSaGrgLJdKr1HsmcVzsQqiu4q419MgDJq",
  "key17": "fJybicDTaeJzCinrZwrkwAcvVGy92t6aHNKmuLZMC4BYRhWVys9GEzq6E13wBKJMMgtrzX44k5YDAvpgjWMq3sM",
  "key18": "S3dmUZqhCMEw5caTtrrRCmqQE3ezb8NfBDv8kCyvbdN94867midnuBmF1Rr51RuCTFKXUAvny226Au9P7nSN5nQ",
  "key19": "632NNdYGiesxqh9DdNr8jqVRWkL2mKDbx8cpvSr9S6hvUoEwsvMYmyjAdj5PJGG9xjGMHkpmZ5k3tsBqw3MUweE5",
  "key20": "2cH2EkGQLDZEg5bVLhhTiBiBTQ7h79AUQ1ps93rqGnKPemVpzBaCgsaop8PvoXW1WGifDrhNzbvoyxBQDqFCtDTS",
  "key21": "2RKDLsPxdYcpc6BeFXmtAKPwvQnDSN57937Xrn7s6U7k4BoEubpp3osQmBdbxomREQG5aYU5qUkfV6SGk6Z8S97J",
  "key22": "3QAafWXMSedxd6yUf9AwoWf7jkG4T1ywNq8GcSBbibbXRvKxRN3ETiTwzcXSj3PqA1zcGQ8wtBmSVNws1NrPdJeP",
  "key23": "3cFBGnnAhGFLbhsf8Wqd7ozdPfHQjFFtTCeprxKcCFPkkzXN2uVpavmHW6qGr3kWVSfzuk7jQZaixcujSzxtvbB7",
  "key24": "8iGSCU4bSYGM9DHDSML88c2RYQox5BLaPxSr5eXRGmuVRNDKqQVNSPbzkvt7mnKcspyQSF6UF7H37a4TZp1Vzkb",
  "key25": "5sfKZjmSUMdWZMSZivXJWLbme9ptqDQEY9UbFjS9gWepQH4shk6fiTeUG8uP2oumVfyfeDF7zA9FQDxF7ziAN7MK",
  "key26": "2q2op1fSsnvFwGWKqbcYq5Lz2hn3ujP52yGqKvFZQAry9CXct4hYPvQ4gWj867MxFBEWRvzLfYih9YucmsUSk6N4",
  "key27": "49ax3M7LwDg1kW7YiHL2ugZB44C8ZUBdhvEc2Xyn62eReJwT67nVtKUPXoyxj4xJ8nsUKwDG8HQB2Qjtko1hUWn2",
  "key28": "3LBnYnjchQu4YfQzu3HEGuLKjHXgY2AuL782wXMueTR7Ur8zp3tUVWPcdWS64k39y6CZWYHQhH5EharcUie2PsDr",
  "key29": "4FN5hJUh2p4bqdiWcr281pJ2AvY4d4wqAGGo5dhkyKtoZS67AXm16awgYLxmtn9EfQtkE8nM4mj5Z5tNcqFWbmH3",
  "key30": "5uCfp8Dj6VYqYP5F8oyhhTP2fTZ1WAnKZmH4FDyQCDR4r8SE37bceC2JawdJZikG3sa7uFdn7oZfaw1aV2r7Ey4g",
  "key31": "5U5uy2ZCqMrEZbsRYWezUYF1GL9cgwqB1QaVA9xNyHUxY6PwNwa5E7J2S3phSVDjpWVPiyECGk6Uc2ZP9SqumHq9",
  "key32": "39zBLpVepNWgvwsDTVvA2poYEMy373221Bsm6bps18oeMDLxEPcJv1epya27rc8NYvCTAXraSj71XbqA15Ntoihu",
  "key33": "4zsALLGm9RAjpEJnW85PzmoP9pKHXWMP88xKXXJXGEu7hD45tB7FYkxmBdFZ3stzjeYYXjwLPgtzzpRHSwuYSoxR",
  "key34": "3MANVcXqYRQxu2hucAS5zpdKGX2Kk1jqdwKnbnrN44SErgwnBdPiuqVaT9AqYoz9hMA78H88yMfZhz3jJEJUGaV4",
  "key35": "4jSN6rSjVSfgbYsx1PfRde7Znp6wUtC2xgUJiZsNW2vo7YeYwvA1mKmNsMHKs4eemQXUGciU1nzpRjNDH2EKc7MN",
  "key36": "5MdgdGQvw55vFn1tFGtQWwQgPtdL3aaNx2XSUVHb6H3P97hgytu4ki3XhcjVc1i16Lo4z9jzh7ppPKAJr4WB4c2g",
  "key37": "2GYtsCPsKg8Resmqn7A4XBUrTP5JnQKrEKuNEs7U6GiAAtWuJSfM6toxHiBxKksQ37pX5RVqSkq35Uh1FuzxZvam",
  "key38": "66UPjbs6ZYPxegu7MbztorL5yVpJxi52T9QDscTneuJXWPUbuVGCHqadVpZr623XfZvTEZUw76xpEfsbmjNgiWbi",
  "key39": "2LZRDkV4FwZLLdgTQn3f3RUDrZ3WRN2tBgnubdjAbAfoD454fixuEoLFiav9fSz3L21jVNWoeC68HSSKNAZaghfx",
  "key40": "3pDzVAi7HBCNkQ5vMQ1kvKS3KXooMCNLvJRiy8DWWrBk8symHoJgUucPjTLo6ukhTdQUb8ef4jvhMTrDnTCvA8pN",
  "key41": "4MKkU2xC9ze6KtVnr5gZQ2d6anPHcpBUXAgtY6feiZqwb6bEtErj31ncY5zYLaf9GZjtS6sMoWYTwRMntiCyA9nc",
  "key42": "5gTW1fnCAdSFx5oWsXMUZkmaTQ5GYRLK5j7bKfw3aLMokjfsCYfJb9EqhM2XZc6GRzzMVymrjboP4EfPdQd8egV4",
  "key43": "3BQL2iAL1eqGitDpj9194LzpRNQi8sFTEyg2aPEDYbHhu4xQCyxcAt3ewXf56razc6Tkjvw9R2FKdXwPXvFLeKe1",
  "key44": "V3SuZ2TULoJPB16ZL7k8pA7QdcsM6q7zLAtdrJffTP3CdtJzDeD1f7BXvf7KbyHDuGfP62PkCkyrixhetMUf3hA",
  "key45": "4Nc7jq8JoPukBePGc9Y2XEHQHHJwgob4v24a3PSjTk7EeSV2HtyTacRE4BYEsDQfyLDR9qHa9jazmba3siK6cwuC"
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
