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
    "Jbxs1zU4WCrCxDY5m4CMCFVwjcoqYnXtLJ9qdNWKjwH5aeSZVpwtE9GnmSZZfFeo7ASKVYTLJ9AyATrVTiWZaEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SvDi8mSKHsPzzcMcJ8PrTvkMikn13kFATbtkkxPt7Czh5NCbJAb7kw1t5tBUcfvPBp6kGUMhPMroa2bcw7Mzkg9",
  "key1": "3BuSaFsbVzGptEpsxDYxHb7snS1bdyW4QmB3M9nKtbDhL6vBAmG5opob8S3MPYoL7rjqZsnCbLeDDikHRPEfzsKi",
  "key2": "2jwCUbWhcXsB8odZbU3nSAc9RTPubFVBS63D551FeedHvT9dqW5wQ2yXGbN8mUrDKwmT5qgz91Bapasft2Kfvckj",
  "key3": "4pVfgkChk3ion3zm99iUrL7LNoUwNp6AgfRdv21YJ8naipSVEefNC5jgPZ33LD6VYNGWoQTB79E4RuUBr1s9K4BL",
  "key4": "4HZvso9XFBwM8VwoD6duLLhqJpd3A2kFD1Uxxk9T5JKTkYxwC226URFYmRjB3zMmvcTBoe6YVzj9xZPeqwLp7TK1",
  "key5": "52MNzQCtZuRe3NqwEcCpsU22QuH8pFvxJyLRqnqqcvcDUurGsp17jTtPtrkYKFp1BXvps9N5T5vCfdTjYKaw5uTB",
  "key6": "54ESzXovy87eKdB75asKCHu9uy29zW93VntXC9NJfk6n3p8B7gRVwQPrAqqRvRMyj1RDBRve1a9zLCXJu2QPvUDL",
  "key7": "PaPhK47gMbCgf4v9KRtjR3V2yCorzdfXLWQBPK1TY9y93Dqn1dLCBGLbEYpsfXUr3NqdQ4aZJ3M6bfGmXzY3K3V",
  "key8": "4S4mubxnTfYrD877CAjMGSjRoQkBZurk5Be156dk6LFZ5F6D6NcapAJcRfDH2bZaTvemhM8raNfoi7KPnV3URyKm",
  "key9": "6Jt17yYwNK7ew1nqy1HdA3rTG4QKcebFJpNg3JBqDYCeVqgAGagi2gs8U4Qtp4J2kNRhxLbXPKaWZ5f82jk2sUs",
  "key10": "326Zpjj73a42QaYMFoUf1AejD5jypwJm6da9cDosXUqJKryNjumsD4nDWucefVuzprJUxxz31XazsKWaGQuTnGsj",
  "key11": "59m3UKcGM2odwgzyjQisZsYE6maQdm6oHjwig1yHaTsydqDpCpgUHTRBAQzAkwpBxAUhD9LhfZhjq4EL7JFrFrSC",
  "key12": "2LU58fx1d2Jx9kNPiMEuzjrT83QBhAvVvkjPCsBovJB5Z1nAF4u3GsYNukovntrsNZuzm7bQVPecdywTvtKnzVFG",
  "key13": "3YDzBzJY4puxSWYjiBn7ZifgNDh1n7PjCnFZGUvzxUQdamvdF6tB9oMVrr5iFQdwvmmGHR4WyeFLNNwdb4hf3s7e",
  "key14": "3N3ZD67quxZ8ni7XznXnX2igYoQENuSZVmNWje5DnvoYRxHYtGTCbw4sjnz2wT5777vcoiUtQzMkFcaRpaW2NYer",
  "key15": "4WS2U3Wiyt5qhQHhsHDWPHSgmG8bTtdV73gpiXkUTX5esiYBHo6BoSFfHncjRwULn474Yq93nMXvhxAenVuqdbQi",
  "key16": "2J7EjNUzvHcfYDwYPwUjiYRtgAvaLnMUVT5MDzQ3HKX5k4CKTtfdHtLbYfkm3zy3Rp58qydGzNoYCauwdq8VfMWG",
  "key17": "3PMuXFXsidr9rTuwERxkGadKQkYX7uhTRd88bfMe1TGPsZEhSjDHpBh8xdkkEFnYqSNq9tSMjAg8GmQnSTQZrUJb",
  "key18": "3jiZhiKxf5X9AMZYFhpR282MSR9EPb3GU8Nfc7becwcGjFUTGfBWkKb5A7XgqjqRbGx1YkqXaARQbRgy9EF7Xbnp",
  "key19": "64fGywj63AckkAzVG5supkLdYz1x81G6nmm1WYxDtj8fLHjEYpDCXaQvnqixcUkWtvizw4qFaURj8fFmYiMamYHt",
  "key20": "5dRMmpZu5ZJ9MJedsLWQHNfTcUKGUzWxM6fSux7muDuX7MNZQedUdsMhobQBLHFTeBCn6N6pDWnKom4ZyJxLWduL",
  "key21": "4SYvNLmPYr9d2DdjwBVT9sTJwYziTBv8e8tj1YXeJpJ3LHAWeHwHZktTzxFZT3GUNmAYKyvCNXd1oRW8MAGF1iYZ",
  "key22": "3xJFrdocgEmi6BTtDVBefvaxKyoosS756fhaYke7uctUfgYrevkzjrdbvt5e6kbTNvotjSSamgmeFQcupa6oSWrP",
  "key23": "2i1dxschXkwJcFD7AmXXfzacfyaY7kg8YrjjXXviUYVw1U3Bz5jV5yrGDLHiyJzFU8G3yE1GKFhk4eMZ93temJqM",
  "key24": "DNwcmmDn2k4abasVjfx1wsHqr39SNVhNrTtQt5vda12yCtGcQ9hWokeYLoHfDPxm9odiShmZ8Vx7sKa99m8dhbq",
  "key25": "EFVUhZQW8pbRHUgjbMiAFVYzT5s3dcv1RtWeuYgwpFVSt3ZdArc8F8QLL1DQgw7aDfGirWmvHDChFMhaL6Z7vZx",
  "key26": "5wD6HV4GmrTNptTDwg5RecpeMbZV1K7LgsA33PS7no8PXb76Kp87fHahKyk2fUG8EiT31y4aiKJurYiCs8aWiRSM",
  "key27": "5yXVTjxqrPG135qXKfZHhuRi4x5kCmrPYGVKSdmon7S5hXAFCD6YjLgfA83y2F23k45byXbtQress25AXGnsRmix",
  "key28": "23HWe1puntFs8rmFVt8jhotL1H6zSM34MMNMV51zAoZ9QoLFFKVAkGYCSK2Vfis5prvzHEC98Ze7vxvtLQXXGtFG",
  "key29": "2Dr53Ws2A7Cp2s89Vvpwjctd24nE8wiuWovc4sEgZ99f3ZcW5Zp9Eius8uRR96gypVLrcenejLmyxAr3U4hZY4CW",
  "key30": "5BeNGMFbkKXLY8PNF7Ap1xRjZQd49tc3qZiZtUKzCQqSi11WgVwBiZrEouVpNvQo4CuRz4aPKBfBTx7pQceEfiX1",
  "key31": "64gFWvESKCf9fBNzV8okTuHTUKUPzAbQrKhRSKRqNCibS5Qyhjrqf8ognxeb7z1LgoZW2N4hYKDzQdFBnepVHKLT",
  "key32": "5bzpeDADCk1tFkqmevLLBeXmQP7MLDDcAo7kVRSJ9MR6BghDfJVBudsnBHqWBKnabyPCXfn9KF5PKgqsUrqySAZq",
  "key33": "vFBJ8ZwHtDnJZLbWLQTJZb83AksXhRdh13npoQBX72DoZx6uBR3Ai1JEV7HwyNybYRpyVqNxqqXRiVjxmUuAvMF",
  "key34": "5GWNJz3x5if2TicxSkfNYzFXNxVD1PoxUQn9SyJ63t9sQoWnGVtrU1fMDQBCmQhy1qnJWSAuT2pNh5SpsvEKTnHC",
  "key35": "YiawJXcjYmt7oVpAp7R7kLD3kQp18P8WubtEZg7RSssyEwo4oCHZogkyTsA2X8Bzv77jZB2QV1PAvk3EQfRAzft",
  "key36": "4MRXgkmgfvh7Mh2DTRLN1AQn8JMqcih7VDBooXQiMjvW3hqjQexjfmxpGAFPCxVdzNKpV6ZnhcsuWjFux9a1sbvX",
  "key37": "35fY5SZjZPTZyXVjWMzkEjzN5n2yrTQt7UUyuTxXFM5Ai7zA1ABGYzNiuh9stg64PWpiCBScUooRawYkmbtQtHLk",
  "key38": "55CHbZ951TA1j9mGniBJPGbAGA6ajUMzY3rXNvm5ugYVrZK3JWa8FzDN1bNgmc7MD3nr7eCYzUdKKs9i9fHmPdBz",
  "key39": "5CFfeTFK1c6iwAJQ7C5H3j1eusna95y1rwAftJcvq7HmvZPWLqaLA7mbCmExbFteBvDmTHgtkoH37k2AMtGQhF4h",
  "key40": "25fCgrnvFVPWfJor8yhqtYwzWgqU9AaR1KThgA7wr9NYTf3AewqBzkoujQDJBVawDezh4BiX7NEsGLT23BfhNjNY"
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
