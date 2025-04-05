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
    "4o1ArCXJXaS4WbhdayS7mzaW5TPPjjJz37K8Rv2J7bPDGkkTasgAwnhjngvWoQq4G4DWgYHg2r2HZDNHL8BuPe1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65oK15WbaYDdsyXocZuJ7sMwr17xJLC1p7W3pEx4EGkkLMzHrMyxnqbaX2vd9PWBwNG4UNCXDDhDUCKmYwPXWmQM",
  "key1": "2n67HzeyFCPhK5nKaTXbBhg4cZ8j6cMZiDxXUKjmrzCzL94fAQNrXarRhfx9iAn2JvMHQuHtHx93XpQ6XxdTRCFx",
  "key2": "p66d2fJ4vwCBHztMWYEDqyNfoBaFcMtUmJaDdVaXCxhYsoYjrVTUnX4BW3GPQY8rms7pdUKDZvHkTrEyGfGRwSD",
  "key3": "5y6hfpxCaG37CqHTfP2iNAmK8Yk6JKxdc8JKTwsFeCcuKzgZLRABbHqYoNFSMYUvXc4RekwgCw6r3vrgPavJsXyP",
  "key4": "3jjcMwZNoxBWe74DRuGJ3rRTZqZNhtRYWjoW1Gq17HtLnGN1Vm8Q6WjJBxakhYtZVmCrP8fByMfwa72cNCKLYVQg",
  "key5": "3HSP7fw3URcE7Z5q78Cn8qTgdpQSaAJoo8zhn4szmvaAHNAGkHCJ9oBkk2s2tQVwi7L5ev3p8DL3BjpTFbSmoXJU",
  "key6": "2cu8A6RQX5cxQWdkc4jFvoqCXqdnR1pTH3xgavt1aLUz1D5ESj41n7qhtjGozcXeM4jQBv6AaJtTKWoZf4whVsws",
  "key7": "3DbJkzVXSb6SBAfADqauTkqRncoSM1Z7Nfmbq8B7vvyNDrzAY4qmJCZTPCZ1gFTQj4DSZdf6cGyqPDSjXvFjw87F",
  "key8": "32iKGeA87xaqQfoFvvUPtkou6cYQMdKr2tLqpJUUuvxjHQAxvqvTWKTxZBJvAvcomphNdEWfiRa8G7ZCTQWWKikB",
  "key9": "2Ux1mTQ9wVZu7kJVZggySdQZV1NNWeUUo6uXYok9LE1Ysf3znJtD3UJMxrHfzyhfU9q1qkDq5u2Dkznf48Jv8X2j",
  "key10": "2gBVjvZF1YTKa3yz996ant52mqa6PvnpjdUw6Y2qciNRRc8nFyHFP1EfbnBaHTaG8nUhXSPYEHFb4QptgdiUyhxz",
  "key11": "2ZdAfDnveMSsoZZvBCDra1dgCjtaC42DjcdYmYAAL3vdHcPDFLGzs9wuub1btUDRR8BWQT4rkiFRxWJTu4yE9CwN",
  "key12": "2Xhyxbb8BJiu67u6ZVqHnUrYPLN7njkQTT6PPqwTorYKMtucVUC2hUr8ohguZex5LeGUpSRHCHQLsygKzPbn984t",
  "key13": "65CnYGEaaMZUrowV4dfqrrGkRtCzougWojt2c6dgWPLw1pG51X4vXWbJjaot4YVQuxDEVUVjvNXKXdxsaquEjRyQ",
  "key14": "4ieJMeVCN74RBtMEBQuBYpx6tYXKbw7pXjdFkxVJhXpbFiqz4juFXWN3SDRZ6rfT97HVt1eBk2UNLgqG5KZ7QJg3",
  "key15": "Y3pvRZ5FF1979EbfyYhjdiBBWL7oGwBnhxBvuBjvtoHfJsiD2k6Lt7oioFZ2GAsmoJphNzkkKNxCHuChAZUxh7W",
  "key16": "3Qq2gr2gpMTbZwBX1g4NyXnFrq9LoLGCw9NGyufws7D8uQS8zudtPxgHMsnMVEwbeTh4DCMok6ncKqDT5j22wD8G",
  "key17": "5ybysGPKTBW2d5KaowCt93LZx2YT4tcn24jS1mbs8x1AMobFmbJ9aP7gwoat8XEaNSZYHiX3hhZzos7QCGQURfKW",
  "key18": "4jLFSr1fDz2ftqFiRTxj9wRqSrXnZzsgmcQZGUbT7Tg7tHVURedPdSAcgifXvhwfWkf3RvE6CXBP778cLPPRHb47",
  "key19": "4LqcFd5z3bDP5GBVQB8nAKjujYZxCcE1UDf8yvbDxLWj79Kq91tJbVebYrAvSgj9gMCSFfk6GpzuRrzyJ7xJUiBu",
  "key20": "47XQLWnpy1mh8xAsJxTdr4CxQEi5e66giqDFhaHS5qQbmf4xp1h8quXzGbNWxZr7yHoy37ubHqntxvpPa3FNsqg8",
  "key21": "31vBZr2e6WbRMmx64rfFLeKhH5pRfcJmGdwGfEfwe2VKq2wQ7J2WJwMSkP6wkBM7KcyPmpMGMZpGmvzjLneHDwYD",
  "key22": "3hbQLTK75Rd7pmhvzwvXPZM6qmraSy6jqDcKZKFn8bGUw8SL3x1AUCWmRz1bWHoxLV68M9g4hCT77ARzkNdZHUrj",
  "key23": "2ZW9PXsRUEAsjT5smcvFiZtFYZrGubSky49g1oXA2ufgHMMbWxrejZM8hbjCV56PqewtUvWwtJGc7sEAH9T5cAAw",
  "key24": "2BAPfKiNfNEV1e9jipimpBQiTQYsZ8aunQCxPMuDJvJVBxdTMP9NuefJMRwindh72oM1hw8TP3H4LBdcEjUkkFam",
  "key25": "2d7BUfpAMLuHbd4vX1KuCzh2iXpLSteUYG1Fv4VbNd7814ATzXQZB1B37oJYFPbA3NzZioruwptuKsDbUjyh3aHW",
  "key26": "2wF1VPYgV9Cg7ANgpqAL8W2MNXP1P8zh84MUk6SjWkNzqzQipGquTgtnWezHBwKphLYoyuXCYKzxMvkmNXcgAmiY",
  "key27": "3MWeGSRLdppGyUX294HCaja8VaRKMKoSHV8hT73LsdQUQSZvpAsrdPLBxwkRLbvYQW38dRz9nfcrJrDTG99x1yZo",
  "key28": "3R4r2RNHQuxobdWctQAb45QgmwzdKY28Chqp7UUPyiorVvyxCdc75TVVm2bPpW1be1NMn7ka6Xm4NxWgdHF6kTms",
  "key29": "29588DhsKjRRJAKLxuXebQ4E1pWZvhAiBSCHRCw9XUc7LDMYqWcvofQ84CjYjGa9aUALxvcWpcbqhhKcGanPacGW",
  "key30": "4FD7A2iUqkEb6mN2CD2RpiXifvwRXpBaDMc748KgHLyoCQSFQ8Hv6sgh3d5DsDiKMXKarukHu8jGrjHEXQ7cDiV7",
  "key31": "5Jte2LtbrrDKg4bCkDmCiy67XHPDV2CFDDF3gRdCcc3Nni8u5L9uUfhkYp69GWLyGFGvEhptkDBeAFqSXzdF9Kwy",
  "key32": "4GUfdM6stah8EbcrckAb1Z1mcjidPtE4RHHZU9i6AGTdVNjw2qafuTGwJw7wsKo9NwNycUn1Xecb5LmfAqVa5ayY",
  "key33": "5jseWD6dNckwLtc5Pq6LuXs4swLbLXpiDoMSvKJvJPwCMjkGCCoVHEQc9FVjj87GqfHGADv9Typgn1p8SV2hYp9a",
  "key34": "2m8AReR7qMhwuWB8xH5fXrWMVooZsbcXMKJSK3Heea9t1arXwNegd4wkGPDa3RTuk3djkbsuB3G1RYyEjaLkzgGh",
  "key35": "2hiimtiRCVNcE6GPthmAPotJ31GdzksVKKjyfgYuF4TiykUoHLZ5NXXD5UC8iu6CqmBjneihYQ4neH6rcUWN6MZh"
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
