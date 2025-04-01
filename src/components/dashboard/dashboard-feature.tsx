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
    "5novRRNcyX9SFTunbFP6z5bRuUg2oiYff3brJibJf9EdwMkQyASvHsn1KCXXmuieQi1w2ETQcMi6zrG7QGawLHFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KjbgrDuMFcJ4EnzoemfNHPE8bDQqn6jG9ZQ7yeJvvLG7H7rRR2mxNxdcr6ESUyNVqAoeENvAM8YdbLSYXnLtRRU",
  "key1": "poNxZDpmUptwvBqrbFicQLEu8p4ZehY7yK5WRwySHbt2p7LWzTGwbkFnhWvXEJxj4e24zkwhixD5Ah6BgE6vTRY",
  "key2": "3BpniHNzfUbKY8zwWkVEGepBmav4eR9xvG94g4XUqemHiWs9ZQW8F97PUXU7P9Eo15vQKYDYNxy1Siw269h1bPdq",
  "key3": "4rqhihhKwndTmDHZehcSUWrCyud9J4rg2aCMMkeYgZiSURrm2GuVrWGUtHrsBEYT625DYg2HtF9yre2rB6WLnxZ3",
  "key4": "oAx4KvfWEzH3gMj4bjZKpYK4ic3tEV6o3skG3ifVcoxrWkh7pDNibpxd2qNFY2nDkUhrncogvwDiagx3Zsk3gZY",
  "key5": "4ZCgtDedsm22gy4zNofUVDL5WDoGTn1fxNARQUqgRwP61Xhx25KD3haBx7wKcRfwJj8VGiPmExdBNa7YkCiwx5DS",
  "key6": "25UWLzst2BEbzLMQ7R4WS8R7XYTNxjuE3nEajhqhmSKo3oLYVknrfVLz2phGRxQXywVC4jAEUtpZzwZqHigEzDAc",
  "key7": "2dj9FPE8Mt8WwsPTcXQKdsPvtT86LqRMWyR57wRbVsLzVW9ypDAViPUYhLHvTotGq3ATc1wN11NJx8AyCy7qA9bU",
  "key8": "55hnXHRKTbeWNoLZAdxJPGGuFvM7MA46tL5ApVr7fAUxGfeT9pnSQtbWqpVCHJ6zrTumdsnoc89E2HUnbkB2G4rS",
  "key9": "3ZjCSEK3wEKaVjHFdVGVzCSXcU8d7ok84qRKcWUR5B3AwM7BumC1J8MnxbTvtJELriSomEqTVRFTuAZA2G48aobP",
  "key10": "5uP3uodT9YxXQPbAdzWt4VpDgCnDN1zzuGj5FuU6e7UdakU8AKdjcq44Y3hGaMLggS3EBk2wZ4PNUP7aar8Y4p9n",
  "key11": "5bfAiLWTvW9MDHNPg4Pm4SoUgrtjgdhGbzJom4yjUNNn7Zd1b3fMFg9Yf7jE7f5UFSoBsivG8KQ7RKrx5jDgL7Yu",
  "key12": "669uHX1WBJdV7kmn8x6DtC5W4NpueZtozKH8n1Ag3p2xm92BYzRdv9Ct4VwV1s3oqBDMmq9gWxX7qakw3ypjhcDu",
  "key13": "3gUE44RkSZMPP6zMYuBvcR4kZdk1wGcP3cNd3FgeYn2zhJBGhXfFzqhRxxdwut5pf8qwyayc5ZRZV9JqPqLEpscf",
  "key14": "5zKUSHGYTJimEd9PUYFBNruWhVwGMkDxWZ9QPhNLHMdjsqu2dbYeCoNCmsBdFd1JComM17V4bPP8tDsoF4qC49Pa",
  "key15": "2xhDxPREtU1yXv92MrXc9jN62dMPzRHkTL4qXcS9Ew4xCuvaA3QrU94KCCKoU1yhPo1krPkdgt8a6jvVx7rFJxJ8",
  "key16": "4fL9VKj5UX9i3ZW4BfN6JcK22fdXmP6zeTqbv9khuVRYGm9V2ZvZdhfBFUoNS5cR8JfkX8SXFA7fC853sAUVbxLY",
  "key17": "4K2r8wFjvqnRV1vAozKzyokk5FNTDC6Ep9vuRssxoqX4AuxxC1vaSKX1iM5f1nNgiQmkHUqp2EUj9XWH6eFrHpUr",
  "key18": "4SVmV7aMtkvKPHkpiYyaK4Z5YvPqjGPzGsJSH87ioWp3TMqwbZnX2rXhTepA5yRgHgmkGQx92hkDwuXvhKuooa6N",
  "key19": "3tVbFdZajDeWnHFhZP3kg9ZbgryKmfZAN8Nhbj3XjsesktSEDPGGR4hANhSNZYjmLAPYQq77ZLphuuvY8YKW4toV",
  "key20": "2aQ6PUwJoaYn9XrDewfgy5bf4SNtfoHMsUMowRuR2qbjG1VQKyW83jw5AefJLSxo2QMXEGTYQ9yiov5iEHp8yuck",
  "key21": "4suMSR11UnQxyqUo5utATtSqoFaBVpN4s9gFkc9znQSabaTLJ8ntWB8UzihKimWsCoNEcCxuBVRWZUoUk4DGj2Wv",
  "key22": "R6xMRYxnjo71BhtG5WM6HiCcndyMo59pK7xcENxejGEBMxtYpsCASY2wnGopp2JFUthB1Fhg9B7kBSkRJmBdGhi",
  "key23": "4ogTButu85PcsJtw7RKa8LWNcG5Zu7NXiiAYgQioHnA8ZKyCiudd42CXqCRB9zYSJgAbZNwEeX3x2qd4JssKgHiz",
  "key24": "3ZxNRPsby3uB4X4Cysd44VaCVyBEFoyQWzwAgwu9tt3inJEBMx7uyzhYXog17PV46F4A5gEEPirERe7WY6rYWnfU",
  "key25": "3nzpYCbQff5SLfanPRaeM5RRw2fJh5brFmp1WuSDvpciTq3G4HQEquNoNkqA1ghgjFcu3XTTa4eAiGWEA6W6vXqT",
  "key26": "XkzfG5FPeQfDoUeA36L6NbKTnSeyrEym7rFTRd42GspoPmhKCytTqGzAXZqUwDew87oUNLer72qhWFAUWvVDyB1",
  "key27": "SCFQyhTMZcJV8WwYyjKaKTFH63ShteiTEjvPYBmKGJ36Q3mPvpRM7QjRhLmhwLKmTrUtBKNPVsQ3C4P49uir8e5",
  "key28": "51TqR32p747BRCbtZRLJeriEuWK7n7F995wMw92asj7qDJqd8V5LNnTqNUww9L52hihqnipUA3UCo5V28ynQm3EX",
  "key29": "44uw4McgiYsh9XeQmKRLLF5HPd1fc7zBKgD2cMu6eXKRP4H3BEWSdZVtfeatvbaCp657c1iV7BXvQFgKiTnfZDef",
  "key30": "2sHXiwvWcc5Nco74YfKiRokvA8xtWw85o3WqS1p1BptnD1jDQbxdyBFC9EVXzpwsygPkgqFK9nbYka16pgij1D5w",
  "key31": "5UE3v53oDmeQr9tuS4QHvB7e4fgVB7rbApMZUqGGKPxgtEBFoiAy8XC9fP3kgfrcYNEMLEQXYiDyyJEepduvQ3JV",
  "key32": "w5qgDJwA2wrnreT37D64ydo8Av7djft4EpibHC7MViChE4YWe7rFrL8LoDGWZ7z9UiJV2bFDYCf3EeYrU1mVYhy",
  "key33": "4YL9TQR8JU2NiiEYYiihr8XRShWw7Dv1Woed75YtAPh4Z7Qzm6dzEcT1D6unpVyZx1VXVHeVy8epgL5MKsnSAm7W",
  "key34": "2uufaooDxFMzQpm3vvzaW7Egy21g1n9USZVrVVgAEwAGN72t1BF4EjiQprTcERRQnwGDKTC5AcGwGdjaSFyQzM5R",
  "key35": "4VmQ6ERPfmyXYx1WUupZB1bj2b2zmQLsFkNCjfbcbZirmeFUy5z5YX9PWHk8btkVAF3F8AbTkS5tYREQgSW52Zus",
  "key36": "855tN4XcUdQ1vYvZBSgVajc8RNP1sAZNW5Zs68pjqr3xcn9gLRCtncPKN1xG35jZtva25fYkmWrygdxqSp4Kwfh",
  "key37": "2GVQBGXWuifBbDES2Q7xw4wPicNpPmSF14ME5tyGhEaUTc3XGFg754yENxnTQbc1qgu9J1vjzvyh2ES5quLfmFKw",
  "key38": "jmqTpksUpk4QcVtpF1ZDW3bQMUu6LNYiB8ihETC8Toyfce9At8x6wD11MFw8dytqbXDfR86rKLsAaFAwjYRzoBo",
  "key39": "WKRwD1n2RirZ7KDw8bKR7JEVV6iLDe5e4CanCZGFdr7GFZPap6XHSmtzsqiNFBrVTBDfVpv2NMaM4zotfzHim6v",
  "key40": "5UDAqqJNopZLSTfikm47VDhBtKhJG7w7QzcpiPMcC7v3K6Rn6t3YuKeHxz8b8zAzRxWm744o6JsKDg8FbKnGpE7J",
  "key41": "4j8f3KVLHgFKxtirqZMY27rDjpBnsJbs2XzvZxzhqGyXvF3ic8ZnX5EV5t6iNFzAEv6H8YBbE9DbDp5JuhFZWioH",
  "key42": "5X8rKLf4gVe4kn8AX7EeP4dY2CCCx3HSH3vjbpaAxqMf56nPMtKYuWAUcB4Gf7LALAjkbwWdB9n2SsnePfXRXyva",
  "key43": "4rMfavFu1JabeVjV7Dk5M2EMB7RuuPk3qsbctnNatMcPGUqkjTHBoBtTSpRHubydM4wjtXjYwuaDaKbnf9XNTN3e",
  "key44": "LpKyJARgsvnkor6Q3JcWtJ9CTH7GKnBmJ6HGJP7JVbkMQocRs7a67t4S7gZuQ9d8NGE9TChaTNi8E5CbmVmHz2L",
  "key45": "3CQSSjepEJQATxMHmi8xX7qxx9HS6sk82H28BaFCFjP4r4pczuCrPMDcWQweUE7tRnPd3buQt4ja2j2ow8UzQpm4",
  "key46": "3PeSsmgJ1RtxHCN192ubb62YZ8SqBVMCiyz7ZCPFwHjWm9eWDRAqirDdA4m2wCHhKSKPkyzhFBr5fJL3vBb5k4qS",
  "key47": "2or4JMRTfF9DGPKedqpTVFQrBTKTSdJtSvcm53MNb3etAo6H6Ru9BhcwRhqqZoZDatioxi5jrj2DJZQ8KJUPenzm"
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
