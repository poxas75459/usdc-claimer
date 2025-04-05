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
    "Hw6tudQ1MBachR7N6h9E9LpQFqqLCJJWSQJLRnwWALXLjxkksrJ2n2YwBrKdCAKu4gHknPvZ1dr16ZSMhcdLXhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ug4jEPQVgdDzZV261UyBe4GR4eBWfQUHM8Ydi4D8dLAxhZYegaBjr1KbEd4FXpEixTk9FHHTg7vXm4gA32KkF31",
  "key1": "5smxoDH9vL54AE633qDmsev6bHsvGfWmEkix7d27XEmHyVSEr3QHr8FkrjNzoYUQx5oEtbHXrW7jamTdxk952bYH",
  "key2": "5U6JBnJyPsP2V7uscKJXgg24rs5bauWcmZ5JkhVn1BN3V1LRcPye78awLmyde22tLzgCYJ8mr9gf4Fj1nVJjJSHR",
  "key3": "3vcdxAFfGcqy9Wi6yUEkt8MeAGSYaHnuGzjKq3v56nk5zhjmSpwFSF4Se2mNmwnog8f2BtHFKu2jqPvaDw7YUUAK",
  "key4": "5fkdwc6QEkHoQqxc2xW6xhJZk7sKXQ8iP9Y3m7BBfsH4vmtkwKXScdv3uS2wK47MQgWmbF5CXQ4jLTGMsGLi1Vri",
  "key5": "3mTnRx1trdkGm8RwguSsYCy1HKtFEy5cQPWSGWWwpS67s3LQEe5S7o4jrSqFd538sMVkxxCuJwyMPUAyqi2fiocn",
  "key6": "33Tc3zRBuL5KizqWWgEEva2cgCUsM82GQbu5pevFvpBThE5vVYQWy9GyxqRgKusXfTKZWWMzjAdWdsVzXVJ7EWGu",
  "key7": "4GYSMdTYqTWAUqdGuHQupSXgCybRWwQvd7tTdCTKjM9bYBNLYcp3QnQntmK9cGFjyytj9pQ26sE552DC4hWrZcuF",
  "key8": "235yYfpAdAxJfWhLGZzWaRNYotMEWyxTTU8HBgNunk6HyQaZSenCJfxzRDkBKtyebN6hu6TpdbT68JBSohMK1MoA",
  "key9": "59HEPRoiboYK3ssBWdYbu9QMhmQeGJxjr6T5YMShusRXDn1xvQmZ4VvmLS1Sieur7q1JUFoPgkK8zUy8syQboc1X",
  "key10": "4wdqx37dHAwi593RKPU57vSURBurPEf1xTDwfktxckVoGmYXBXK7NgEVYHV5QV3J5tVWXmmaSsYcHP9R3vKo7q8r",
  "key11": "aMRYaDzWZwCYvhBfwQH4NCyT3arqQNgLkrWjuEaNJzNt5tnF7K4rtR8iFM6F1oGt9sJ2vTi6WmnivFmjzdytF1d",
  "key12": "4td16eqMgMZtz4eDCvo4jbzphCMaFvKvnFSxwkUyA8Eydqtk1jPdGMFY4wSF5sRX56J4rUpwooBiJ9LMDCXj2DSi",
  "key13": "2TMaczXQ4eBCQo1MndiUp1LHqiT5sk5zD9fuawQDtrMJGc2j4Q9zB7C5JqPYbVPRdbHqt7B5SyZZ5jyn84GBdtTM",
  "key14": "5exXF4tnnf353eppHTTFvPiut2gg9gcF8j8ZWzAeEgQfkeLDzRqrhsqxWhgYKuFNkcpm6kZYndeXNcaAqomrgcXx",
  "key15": "5coPue5j9oGTZcBDUvYL1cDZEt6Ciy94iUsyq14fZvBnyvxHJe4ZDfz4wxsP97ecqqm3mnEzJgBJzHWcwNsTZPei",
  "key16": "5U6LTJdY6Ki1tMm6AXLmFsA1tNCexA5GbJqMkwRKxrSp1rqZNR9g6vHtL5Wj1kDhUrMohPDikEfS91JnrDsGdHJ4",
  "key17": "51LxV4cixZziEqV8PE4y2wfzb3LCqAAeu7gE8DtPwpbJUo8aFLnu2XJRQMsni8xTzMMyKsKqunvTycwz6FPRFA4n",
  "key18": "GQFUCSgk7sxDELDtA13YjmU1mat92wGWGjpJAitBHL455AJwmgSrQp74rRLEJHWnAZJVsxKDdT6Z8bunpMoSetJ",
  "key19": "2VATxCdPPg3cQGituz4KjdAWz5oio24d1qiQKV23StavwNtAp1K3KLi2W3dNjLiofqxD6EJDHEaXR9N1cUiHEPEi",
  "key20": "2PAwYTSKc4Bhwuo5Ent7E7P3r33LEyZUSBPUBLNTPhwc1hGSiEets7m3FQoXaRUR1HTKY5VrP7ZpqSwsTJjTCw3w",
  "key21": "2avnXMR9ruBSRU2k6NySMDabLPdxpT6zeP2snMyxWJtuUKWQjQ41r4uPjmoauTHEoc87gGsLdzGDGcXNHoyYiJiK",
  "key22": "65nJhfhfVaR7WjGz3vJs3tY7BeGSzpuZ5DNZYRJGw1jGvdxiVTmjoqNhKAubLQshTQy1x8gEcXFkMNiR2G1yb7Zc",
  "key23": "4uyW7krof7GSCFo9GdKZW5R1qTMHjsHUmHqUtjUDwkQP6jfKxC4pKEVmyWfvuf3sAgWtGrfdfPPF3LM3qJNzPXkJ",
  "key24": "4Q5ZFYH7erVrydGfPMBHb7pTW5SXG9iXpCSHYNUd8CsFJPTL6HezJD5rsStgmDts1sSmsMFpf89JjFcCJVnVvdrT",
  "key25": "2M3Fbe2v4cCAUSrfJCZdZq4coNRuj2syZrw25GcyPsYXNKzVvRzip6UxLkTEo6bAvLmhUVMcU3cxW17j796r6SBw",
  "key26": "5ngMrPrd9K649Twi1WsProSGvbD55f2v7euaE8jFU6rbVX8dmS51E2MoJjSpRPceNKpthfZJU76uwhj4dYQaPfc7",
  "key27": "3w3tdiPEVEr4dg8WVzGmbuQ8yNC3cZ3cTd8k4TKjbZUMQgY8RJSSEvVvC8oXfMGrsKQQLWRbZSP7an78c9mzKc2d",
  "key28": "2NVReSnggGRsoZ8eoxLTWBTyjaqWQSTZc3v1aQLjMmisTHjtJcwjK9ig9cfLqH4w54kJiMPvfuXDNNCmdQnsLgsd",
  "key29": "3ars7QWxu4D9APxdnUNSaNv264LLbBjK76KpZTQqEhJNdpYkW2zGSUJwtbjocyf6owMZupZ35cGkiRikRDXPdffX",
  "key30": "5nbwCxmddyDWQC7CtfnrktB8ay85gcuBdyetgDAZb225cjtk9JYWbMNhrDycBX3LjQ3mSE5VYG8V36XmzgRXf1m2",
  "key31": "36A95cWk6FuECf5nNP27cghi7zR5NeivSwmmtCdjFjMofyknWm2PtbX99SUSRfr7sK7BqYmPtRMLcMkkWBHD2n8J",
  "key32": "5UcxB4CNt2WzYWZnYh92itaptzwk5cqUvCaXgyyefc5jjzRBS6ixjLCYXPZy9dixdufScUSbVRGiuUWNVQ2T1wJ8",
  "key33": "4xnRKkojp1gSxZU9eYnBGqfK9iDPJ2M87XzzxcR8yULa6gRsGNmWo4gpWMjMZ8y6wzjxiKf7BtqsXM6yhP9XG4Fx",
  "key34": "eX1bt6sQcq2UptLcZN9VyC8Xp3746ZbnL9W9eW4Zuw96wVDQevQFC4qXbvHniytMQPRGCf7oAP9DLFbxvKwVL9y",
  "key35": "kLcyFUmrttV2BNLJPfnWeVVCs2hCkzvusVQLVB3dEdLPR9117SYRb1v8ty3dwet6wtMfCxekfPuZ7QXu6GbEJmV",
  "key36": "4yeSaBxer38CA4SfjZJRJLi9wN6jE69EqYrdcz7bMtRJEkk4MhRpnCM5oPoMTZt45h9u3pgmSsYiQHcR5VwJWVUT",
  "key37": "24iCWvCeQHqAkeC4CRrVt3uy7W4WUwmS5jxf4uatJj5h9DbMAtPhSTGYKVTTpCGrj9zzFSUqLXvQW2Dg4TdXQAwk",
  "key38": "5gP5DjjthcE4c89o62DetWEJWCjrqsUCFWvxjdgV5RLCUvWVVhwUspTSXSSnKYyCSaEqQJP8iBFZrKhvkeQYyyoq",
  "key39": "2ausJ2KBfSa6qNZF2QBFVPkMEib17Yg17UsXxYZwcvg3BqFRB4vip3EDbaddLNwrst3ddhuKGy3N2Uvn4ZWPDsYD",
  "key40": "gLaTLgWEzTpcjZVbcz4sFp5jKY7zUMEWQYEeAzARm98E326H4p4rn34Eops5xw7JjWSP4UrTafkBzgLZkcpQ7gL",
  "key41": "5FjssDCCmHAzYE1etiCituiX3ktFd5RmRpfKsM7vGpyXTmLXwaff25BTVJFRqjuubZASV7Hp2GvWCw5BCABxuddR",
  "key42": "3k6cWdvh3ebH9BRrMoxfNhsbHXr73uQqpcw1RFnYzeuH7pd58RJRn3dyPpxbee4oLtWYMDF7qANCtMqjY2cNDt2e",
  "key43": "49w9gbbW3k9pHgreF77AS3Dya4p9wcW47cHLUAdrzVCx6WnpVcQZkTMLQGZY7b7cUzCGoqDBAYH6NEjQ6SXoPcJp",
  "key44": "127vPvXnGvH2kpFLx6NDK2Vt8LEHmsnmhnpkBaPSrvQJWWBVL5NbNWGJrwXagCoTwErrY5kg6XF2XSV3oxBR7KyL",
  "key45": "4axsdnP1xoXemz4Dz4mWKgFvZyzXZ4WdHuYQ7TjraehqxzwvnhhYuGtPWs8Q2YLbjQJvcpPw2qC4twZzZQewpRum"
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
