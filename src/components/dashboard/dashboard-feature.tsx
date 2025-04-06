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
    "4SGxt9tHiP6wqGz97y2Nc3WxEh7y182xg3LvwJF4PiDMXcui7YD4nSDLKqTn5LyqoMge45oti2NFT53ArUvU2dp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "314GsAX9rrCH7N6qgZEWfb394RqrcaRYvpPjjGKuVixZzCcibitTggN5vx4J4f9GtonrMXmEuvcF5NiQ87R1zG28",
  "key1": "5ZcyJ7Aj7nVjYyx1yhQjihHQgapLP747uF17vi6rnRsnPnSNmNHzoQqyszg83nLNWHV9ZbZbxUKUqShb4niLKnon",
  "key2": "4zk3NUC3SGVV1mFXMLNnXrttdVLr9tXcrd6Q3gk8zPsG9PBMDAgyc9T2L5X4ideXQsAGdTHzobEBJDtcTfiQcAEe",
  "key3": "5nZ8t2p8Tbp111aor8Yy1YvFDSwGCzw3Z5dufeMPsv4hr8arSJXw2pewi6NGa2YFEDF4uDNrrMeq8fG6L2vkXgVs",
  "key4": "tyLiRoqrY4BZrpXhCbgdWhdMPNGrWj83a1cuVQHqntNfJsPkoSfBmFcM9JTFx85f16qV6UQqXsYj9UwMz9Etkgc",
  "key5": "3h7YzgXmEUh7w68iaXKZ62DhLCDH13wkqGpKBWnV5qr2FqVd818aHVRygGhDF8efawFPDKDsuQz99E4qVJWaKrKW",
  "key6": "67gYzuk8Kt4SQybUVJLA7h2g766utDkrGapYGgay4H6DpoxDSFMqGYHjzSZdWNrU5xHG69omtC5C73E1TUv8RuJn",
  "key7": "9SEwUUxmamtuqaU6yiq6iS3AU86CpMnX3ALoTxbyf8xXt5MmXQ2sW1PTmAbM11jGkGb8MfhM6MYNBxSzb8YKLoa",
  "key8": "5CENjqmpssSG9odPkiuTzMFop5mSqHzyJ8F67yiJNBEWMLb6oUmB4bqKDCucgR4pggfZAuz3w7NNX17vU7ALJxdX",
  "key9": "3Zv93caEANTwjpUMgokAeJAfnNef8tRi7U9bMfkVZrHRoMxdVhutH8d2b35M8NgKU2ZEr24K9PN34hyUPyBkRUtp",
  "key10": "bXTiqBAsBGpnhn85tpHsLX5M3niHoiWrYuBPHLLdno6jSu2qFhLgmkJY2jmuPysatfScQ45v9aBmCJtyoo8BufV",
  "key11": "QX86REtCZmwKvCt6Ezv1D1gZ3xe5cRXP7NLrJo9NEfiUfaK2QfgJLqHkYLSyQkaB69zJADwgFVDjoQoeCymwJJw",
  "key12": "5M1NSan3oZpxikswL66YgeRVdwsJYukQiUtLmNprmWXfeTJXg3km7FLftRw1czHXMZcgBTmSxZQ6guZvMzrUfRhu",
  "key13": "VfhtSTC6JYNT9DyFfrX5LMxHMgyGvzchu3o7ZMG8rR1G1njv8cMrWEjwQKuVG8H51vkoqnWuEwdL1iwoTEeAkUc",
  "key14": "5ob3REVY8PZE2XUNDTBi4A61p3ADYn9En6bXaBXoPXZxgs6ohDB8ejA85owuQuEjnUbnSdEhNDMZo3XgRhxUKMwD",
  "key15": "3u6c9cW6BL7bVJtjUWtPj7KV7uEfQKnbhjyXBVsttjjX5GiNhV1zJtzfMUyiyMp8qVWcVpnXTSaCTDngn6kMs2zc",
  "key16": "3RKAadzXV5PvuEaG2CHhjNiwXa8QRr3UWV9qvRicVscGqxmTzMgaqAEThpNxuqrXD441QXTwVg7M74Ry2PhBwRWm",
  "key17": "3r2iLvnA1NoKGsCTHLrvyywUWmneZcyYPwecHY71n1DoktVpV7SLjnpWWSe22uKzUKJHH4ECbYafz4HmWT8RqMEU",
  "key18": "3re4hSXJuGRTomg7mtMkWTXTL8snWGeT9DGc9u9oWfvZS8S8wsCRRSf5uVoiAbz4KMiqo3yh17Q4316qU9sttTc5",
  "key19": "66HGDzy6g4G898rDXwcaYEnG4DBBSJ41xp3QTR3adjA2E2p89tmtoPtzceym1a5mxvPsfE2QTCpxe2eamabcfJAH",
  "key20": "41J5JPqghG51NtVwoagPM4q6PeyRFh2rdmJFUxoQEFkgiVYj9gWbXwHngCw6pzKgcMg7drKtnhbPbHCiyQ1fG5HR",
  "key21": "3SzCWtuvGNMBB9b9guw1QWt3zpQvzyxuJRTVy4KMFWasZdFq9nNT8GW56iqTGPzShPLV8MfLUHUUujCyKJbknRUS",
  "key22": "33iJkZMEPJaLv8UjZpeuxwPcbNCeMXYLtxFahajRUsgR2wbzwFhJccuo1JLjcg7f3W2jzwkbHQmauWyrPjDPFiXy",
  "key23": "4sW5aZrdkM7rsvoPut7b1BuTBAS8WJACqxEwAnaomnDyRwDC35T4YWzp2d58hjFgx74gA2CWXRHCQDnm8P989rwU",
  "key24": "3oUEEukLMxuboKaAtTPaEMdSDkSEieZPf6jy6mmy4qPiNN28UhL7cKVbzkjPfNLCCHRYRSBQQeYZvBJUPZk8sEYi",
  "key25": "5MxFN2HDfx4mQccrvke9NDYhm3zKCeVubWc84QbP7FagpC37HMjbDkrsH4WwwCc11vJbdXuBjNYDha5xWMJWU5g6",
  "key26": "3aFwdxpTQFzMzSanAsw9rni4fXX6ayuxTpvuUQxyKQ2KoHQaJ2KWtoeWif4QMKR8rkp3qhVuFs29B5nxs9gk41Ki",
  "key27": "bZKQbcCYXpPioaCeg3v39fqvaEQEfnhLfRqqvLBPec7cBhcaccCdRkYusEwMJM3UfjdmuzB3Zg9r61Cmtp15Sb2",
  "key28": "3vxfC6makqavJedJk4ffgFCk5vZSBEh3D3d964d8epWsw6YaG2aXLJDKpkLbLCyfTb2Hu4QzdhL4bcnyfcLzTJuC",
  "key29": "3frgc6NfUnJJpSuNLokRBWyCcZdDuZ1ex1TavHWLaL7esMgcrU86PfJbACT6djxsNQ7X7M56gvgiQYSp1bjdAG4L",
  "key30": "55yK52RKk2vPF8nenpDitfCmxxxwKe4jPKkwFf2tyozXs3XKYQuVKztbCZaHQmvE6GtDoUcLWSA2pduN7kQQXu9E",
  "key31": "2A1XsBvLUmWnXBrocg6cNUCYxTtGWy9frbQQ8JLfnSBsggSzAK3k7KhLJNMWpSWNuzNyC12oMj7UxqG4W9NAhhgP",
  "key32": "3daARYAMjgytUo2f2r6cwZDgB7urCj9NH8nRfNVZa4HNtAFW6jz2JXfMDgD5WRQR4HC9ZgGgDB98sUHA1XmRkDzU",
  "key33": "5pguMFbkh1kJN3kCVM9k5NLrqdAuKEF8PezmDfgs56yvtB3CP76bqrKwd8NaznKQEco9XmqP4UyubKodSmEESGRb",
  "key34": "5vX94Ud5g5YUkqmwy2BWPXdeRURDrbCFUwGvg1U2y1C898jtX65DRWAiZ8GzY28p72ScH9GsC2Aoq6NZNXw9CQMg",
  "key35": "624EAbxv6iQMc5xsCnAY45NBNqdn4ucgjdPKw5x3Sj7YH443iuFRqXU73fkYetrNbpDqcrkZUHSt86EPy7aV68br",
  "key36": "ytcHpJMU6P9bhCz6McYcVgvYvG4Cy5nd4Xp4EhJtLe3T7HBTeQnNtL9A3nJKKKrfDfGic26aKyrAvCWtsZkTDUX",
  "key37": "5X51V7kuWbDmUifr7r4SMxuQp5nGrdQbWHW3NGnLCn6Rqii2z2Gk7P8edJKCKzFXm4qDKCHtaXUpf2QG5ztV85dq",
  "key38": "4kC75guoz4qwnhcbEAMEiThSjwKAtoqsMxb9ZBx7QTn13AqhojjnJoS1XCetixRXuHKs8e9xJEUiy7259r8XtSRz",
  "key39": "2876kLSs9dpMA4M6HqmmrZk249CsUh9mF7KZ6uZWWtWX7W7iqmSGo9sSwonH5jSup5keDMQhmLWUyXFjp3Qx5JN2"
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
