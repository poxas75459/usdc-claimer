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
    "5HHacZdTMk54b5Ns2edFebk7mBpzn3dZnv4YVk4KJZSfww2rsSEEHx1Ge2FuyxwXRQ41PyHKj1rvcxdsi6nA6Ax2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GKwWYwC2NhiJs4FLMrX9syXanM5931KYjXzyfeN6cL88cqHhAPmagkrpBQFjrx7tN1CH5hbzX8MWebbT9XtvNe3",
  "key1": "3sUoQSM6LVpiHsDZ2vQCcdwpieNkVP5iw2rRiFcM8YYNTXDuSxjXVkoEpVZ1eZJeYZsoP9Jq2K1xVtGTr8rnuoXJ",
  "key2": "2AFm7QoCL4FwSchGkRGau777tQ2Hm2YpupDu9WPoFGLESLQr4MenW52SPHLtLdXDFjsC42Db1vwCyEioi38eVaLH",
  "key3": "5rmdnc6QjWd96a3YtqqCmgUjFWQN9ERJBQHj9jrbB1GNycERDSd5JDPCiCHEiTmv5xo5BKJikftH2Z8wZKoppoYw",
  "key4": "29aBTEQJPeSwRZEiicNf6Ro5Fe16rvNrGC76NWJfz5bmeTecFPjuVKQWRJrjcThWfCdJCZo8J2K4wGZ2U1Suvwsu",
  "key5": "3jndmLee4QWLC1JA7offMs5XVPBq1YGxLp9jCiVedWW7J8Q4Xon9q2Dz4V1qTJzhkUGBCyJx8WZXPzfRKLhf3KTW",
  "key6": "rwNYEfuhxZwJWTF3BJDrAJkC4bgkfqZjXJzTBmzb8UprEcrJPdh9UqKW5ZYij43FNdXAcZjBbz6qyPiAks7u3EH",
  "key7": "27vvJpex4tKJ1Z8vf92idQu9g1gjdMFGjxKknYp7fH3UYLFUPi31EryPkg9ckkCnLAsRSq5sKKfexnqxNJhy2dwA",
  "key8": "5tANBDmCY4d3ADScSLppNWVXTt5gfR6cuPbcFMfMWcdUtWNEUTU76rzbT6CjGQ99KJDpvjuXD4SfY1y6P2Sew2zN",
  "key9": "XwywkBS14G8o9Zi5emNfbmRyMHcn7MwfSnH1FzuJcbqQiEASM4WEhxNUKcsWtmwbrYjsEXZDYFQmDrq86uhNV7W",
  "key10": "34zY3hSzJzxHsmYaMiwyVBVEA3E45AyZKpoegeGgJ15H1xwCoS3z9mNv89ksdcfhLYHdQ8vcPP8xZSAzTUFVxJec",
  "key11": "5dxi9rSckZhhg2u8CEav5RtfJWiN24PTeNZ2kvxsmgDEzGgs11aPaVUDsHJnyYcTprD4ZHYcoitAuLwGf42BiN3A",
  "key12": "3eq7Wqnwn6oUAQyHwGkQmL6uRWCgoSvTEbRjaoeeiF9ZREVafFbi9JWYP74LrSCeeUnyHekMwiEj8P63hQh8afzw",
  "key13": "5GmYYnmH8eDxVwnbkhwJVu9CoELTmp6cFF32fp83h7P1TDF9Y5GyWQ8DYp4yRxCw2w6HMarbSNMfJkcFm6VQdu2Z",
  "key14": "3rHKov5QCFunK95dLeaSt9hvx85Pi1pAWsy5vEo3G11EJS5MiMsm4dTALecxdUNzbAzaZCd4vcLrMLHA9pgfKpH",
  "key15": "3z6bduXEnqQehYLWBLnwMosNsdtU8TSDiiZQpLXzu2uGFdkaz6FXWs1HtP2rPdPP6XYzsPq835nUPv2Dma3SYn1G",
  "key16": "5nt2WWCbUv8ADDaQhnjMkT4GgYzTSJpz5AtwHeLsL2txjezkXtDmKj3jb7JAwx4ryNT2kxZg3qZouXViMx1pXu3L",
  "key17": "DicAobQVERJDC5Rt52hakuuP8SKDeDGhfB1xpxRRg9yRWak4GnLnjZvsAijzMQoqTYaViKU9e3NNq1zT6LKZKt1",
  "key18": "5Z6KwZuF2J6vknkQLTKjAhFbzvzZLdNKaeZdJneH3QBKFPUdv5bS1K3Zq5tv49BvVD3LFEfYpz3iUhKsT3YSQiSQ",
  "key19": "2kzQo2TztoWnmX4ZGAHGb17rJFreMD5uzGhiVUFQp9Ai2MiedhMifzYtfuRco1K7YrzqxJgxbsW1ar9Zjz2Tjre1",
  "key20": "uqqyAjvXEfD4Tyhe3KZpenxG2bCzCy5c9BaBW6d3nKhWaLjcfxLrj78TWupSripu1FtryzxEpvXPZxDeLWzkhqp",
  "key21": "gjJmD6e7H8F1WWWKXaTfCXo5WLCV69p2Dxi268Kizzu9FPG8J6ijp42qTeKpcNNyVDPo694Hwq9cEAcJ1JutGEH",
  "key22": "2eevFaazuDcgy8GCWAAigGuU82DvAW9cBmLVcU4nUaWZgMHtLUPoYnQYSHxgsKGVohZhpRW6hp6oZYVK2nxA7d1s",
  "key23": "1289hhF251Gge9xkKm6fyCNrXKZk6mkKthGNsuLy2k6DiADADrTsTcaySC2JMGfSUrnkKn59jRizyD7Tsm1dGXtV",
  "key24": "KTwuESTcyhwWu8TyKw1DjxUpuMQdqsDVKFe9L47ErvsS9SGtTsK4u9FuDkXjoRXXT31SpXKpK4mU2jacaHRqyPv",
  "key25": "5CY7JhH3cQbG8XpT9RZVXEcWtYSyenyz1bgHbd7GKc1ZwGrbbfUJCeJBiuWnskxrCTxBnrMn4K6Jpphy1cKCf5F9",
  "key26": "5w58fvu2fcW3sU7P2hUCjSgvFP83bFtkNdfCUvX58WUu9uLtuu9ahGNzHq6eyXcQW2bJnM3yDrPd9f8p3hkDKn63",
  "key27": "2vWkAfaan5nGXjgFmoK3YU6jbxRkYyqWCmYV38hTNj5tXvp67m9YbB27nPtLZpF88PL4n4Uzp49KEvSiXXsKZQyw",
  "key28": "4yvGsXYgYE6UiYHWGX69gW2oyUrabhGVcHwNF39HX4Cb3zQsYsn9inMm44jJtpPT8Csfk59R76GGevaQUh9RJNhu",
  "key29": "5pkg8pfS9ZkeisExKz7ChtyNrRopcELQMvGeemMcs9P4reGRFLynFyNiHqHGHgLVT1LHiPJisQtiH9LqX7AWrSM5",
  "key30": "PJUti2BE1NDp4wkYDgPxL7Nh3jCtBoTjakVWHyqDzoLkzsh5uwKceyACtERyTUkdofKvV5LTdgdzJdudF2yWgoc",
  "key31": "5CVDsQV9pS7t7zDL7282RjjHZwWsFb73HWxWQxqh2GYK38g3eJhDmZ3WZnPVbyYafzwUzdtCp8fQEXDMYPUE5Qa6",
  "key32": "B8E96EdMbGdRHRepbB4HTYfwZWUjqYwHjHwrJ8TLfhn3V4pwjeej3vMzdTSZ1joNeMSzXPcVcT77ZpGqvzw75AX",
  "key33": "T2u2g5BQg5RFM2zquWmDi365khq8CuKotYRso17o7493NZmUETCHv6mqSg4R1rq4MyavfC41Q8L8rJtEWZDaGVg",
  "key34": "3pF8iHkgwMnS9yTHnaDQiiqQD2uqG4i8iA2yi5SzZdh3ePncvsjLUxy2zwWrcMwtqUWBjhgP5zmJ6KFfTH64sfE9",
  "key35": "4zYrUbD9wN9WucYKh8zG2oS9BRRgk6frG1VKeP4PNgKQ7aGsCJt2ZsknERMbQzM1d28gXyJf6da8qFMC6jgCkB6m",
  "key36": "4fDb59hNzPoiF9m8STHTTvyq7Kiyu5eMBfTPJrVLXNsR3wJ3CiSooc44n4SNBAA918znMxEyvaxEk89oEQwtavpG",
  "key37": "5TpaRWDKP5nrMN5JHjMVoWYWxNaxa4U3STeebbveHfegHTpyxWBg2uLJQ9b1R3Vb4kFhrHQtrjMqxeB7LXEUwqGc",
  "key38": "2pyhMQ2wdE8nYzK8KDMBZmmbciVDtGTMFXGkxx8LLN6yV6du9KkbwZLfbDqWuecK65pPUqEdd3Kgb4N9U9vpCuqr",
  "key39": "tYHCHEhkRWyAx3YqdHMe35VNjbEqhG375vmrmYwE77GcS1Gd1S9VGke4hohVjDT1dMDrtQ35MEeoQUbrDakJwZu",
  "key40": "2892QTgBYsEX6e5xLtzFGq2JY6bcJXhB13euHbCrppc8KPjiknWELA9cbBMvigif9fvsoRDcbYhgzGK3Yhj9d5pa",
  "key41": "4zMZYrCYhiZpAqeRRJkQ6ytUfmAmcesSskKEMhH9qawTU7SVJAmxgkynjuANKrN9Wij5iUpaMpXKw2JrDaBe4tQr",
  "key42": "3vT4h99MwSjttyxmUxq2856DVq3MDmerrstLBQS4SKffnnSGzZTg8Ea4craUb8cpt8iaC1bqYBsDxkpWS89rrQ13"
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
