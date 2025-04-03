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
    "5LbR5rsfmgCqA6wNAs3hzT1gJMgDvGpKVCc59mhgA7BD8CCSYuRfEhFNMENv5pQSdf8gKVFbeYZ7dtzJovn1keqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56cYEXH7QT5zuu1ddm59E5BQ6ajWf1nTkuhPCTgqoGx2wjbqyZay8Hr8WXKjSGptA4BJVXvuGCmjx9azhozEXmLn",
  "key1": "3vwGkZQTMyvePAT8FT7iFk7REfb5WsxQUWrTZZpitFsEGQ4q318SsCFnxmV7rs9bxga6tnrQZT1zNeA5MWfehh8c",
  "key2": "3zSuauML34aTZ5Ak8Rm7VFezY6Tc7RAdK8hcEm2vsrQThVuwK8aivrm9U2PQoBxB6Srt9An9GQcDMeQVtmzWnHh3",
  "key3": "23BH9fHBi7QLCwvA2uhrW1kup3ZexFfzsAi8vfnmUZsKHieTDq6Qx89McNmj3s2QMoDZ54UuyzGqzsvpqab32tVv",
  "key4": "429Y1P1F7eRMnFARCwRPidALmWw5foZTouTBhk6NwBeT1EHhGxzJtvKCbUY5qeaD3Kj6zWQP7eT1UbGqH3jCepFj",
  "key5": "56cFSyzPvia1dTR6QZYBXDAQkgsvMBU4wbqA9e84iwN5RnYPi41yFCmcp3Va5qjwR6vX28j4aZiVb1tSixZynhRd",
  "key6": "3zMRHtR5DzUPZa8jcMyKhBATeGafXRq3CF1aXaKzHQahSgB5nV5DrXdJPphxrdmvpvvKfRaCFH99mDu8AsnAWbm3",
  "key7": "3tY9wNRZQ2iqPEGnJf7GTkXBB8T7MQr2M4qumusbu1FJJKKywTCiBiFQCVQedDt5zsA3MKcGSDFTq9C9ezHxNq2K",
  "key8": "rCHe6TkHDZYmtQPNrnZHguh4NWwToDxEp8zYTEuXzuRYzWA9C6dwDREgAMWWrV8FuEWWa5Ce4djr55fG6U3rvNh",
  "key9": "5SPYQe7qn2kxP2WRiphGawBmhb9iibMdSBeoYuPrMNi8YyJFWEbV3MoksAq8JLrZbddr4Nh4nwK2TDvhJ6FU6zoE",
  "key10": "YHfrXn3sBhQjjZYdFoznn6iuXoZTDMn59ag2Biwh8efV28VbPFcbT9PBmnWCeivY2AZsMXP8ULH6P7fSB2CNiLr",
  "key11": "4oxweSEfjUAmwRwzcpRFKNgAWd91euBTarnKJoYaxwQxQdCcBFK68rd56drVPEHick1Q8S9u6enfkNVCnuDhqNbd",
  "key12": "4y35SRscFsCZfCR3XGYWm2CWAcTHRisaikTcWpqb2QiUzxjCc1RVvc7u2XurkqEgWMummEzqLLtuHF2M7qfbphdj",
  "key13": "zpoFkQ3bjm8AFwBdfwkKFjiNjTLGXp9P7F9EeMPBkS8ksNNPYEFXp4T5Pbk2gfqiGECWkmp7Z5tyxcnFMVKGXjn",
  "key14": "4jufi5oYfSENr6pP1Y4YR8DZtLGoY95kD2anCJRMYUMJJ2bbhDBH5XFuBvyFsG619eLw1cn27wD2yPMBprqzzsBQ",
  "key15": "wDFYy5EW5yqLC7BWneEviTc1Huf9KAWbnbif1C4vhdcfUmW4MoikpjkiGgokhiekQeLefZ5W9pF8CuiAMGvDmmb",
  "key16": "2hexH2K3XzKaPUNzsBSzwKDZUaUGSLuPaRkWB3z1cF1TuRozCM89nrE7kBV3rYHJihdcTu4LjWHQZV56yfUdfs7e",
  "key17": "4MqS7vRDwCJpS43jHE8uThAgMUUmvWf3fBvktFkdyZTZkjGTGLvwUrtWGKgrCDo7G6PJ3UNVbYrC1jgQEezEaPMa",
  "key18": "26kVvEd9EHhLGXTXq5RHU4mZktNtQKVCFmv7BGxDEhoCR1kzf6qwKpFDdKLpdsnMTi4cK2SMVorzQaAs3c8AfV5d",
  "key19": "4N3S8mbx427Veu6zbC4ahse3qW8XivR1ZWsgcNNj4hrV9bN9Z1YKkPzGnKioV3Q2SY56o2Kcf6AFYv6XgSbmhtPf",
  "key20": "248ccPT6d2ga3m7Ta9neSg5cS8qsovHvjkH75fzFG5HjNRNiZQSNGsQk9L8zfNHn9wi4DWPMbxHcm4hjwcBRJgCo",
  "key21": "2zkAhuSwR56ZJ65v2Ywxg3ggwEciSN3i5d8jkYchU18ZMF7FaUmdi6Jg1kS49UfCmxqv7Vvg9kHF2mzzyysNw5ZX",
  "key22": "54LAckk7NZqWc16CRS68FsuZ5pqSbjbcaTaQiCHC5Qg4RagBfP4Yt3EixoMdBCJJzWf5rgZZQJdzmwjxWuypu5f1",
  "key23": "3wJHv69aiyfguXLepE3NXKBa9C9U2imioX3qK5xWHGwGdrcEmCXqN1RpSWn8iHozqtCVXLePgGZYkj8TPD2fEpeF",
  "key24": "29hzBgWfgYEx8K2M7bJnVFgx5dpSVPzJCuH6VohZJcBdR7dygkqkoYL7LBQZ4oJ8bLaTduhYZmDq29X59kZLcanm",
  "key25": "5VgsZd3WKWsuphAKU2Nc56exQUwVMVhJBdJjXitBCby7m2yoH6Agwip7vejL2of9QVCA6YuBZgnF4D8tiPVRC5BR",
  "key26": "4HjDaKgGern9Hpw6Qu2Fc2rQLEYUpdiJz2hHHXwUzN3jGCh38XqbTHmnx7uva7kvQbXMZpBXbRzumoF1naJF1m5b",
  "key27": "2QWrGnYYQQDvtqAibFdykyaAPnZhKRWrwRSeqxgb8uLVFE5vxyBgzywidzuyyTnCBLA3xn4sB6v7H54QJYLDN5H9",
  "key28": "2gbUidqvA1n9xpdzAHhZXHb3fPRk6AVeLiGNzBpTiYzNnj1eQqyRvoRvZ1HXQctDFgNFpR7YdvC1PjnpyNfexb5c",
  "key29": "2yjukZg9GZ7cBQK1mtB4rTrBnCUV56FFTSk2SzWJgAMbdVL26nJ1gtGEiUhtLQENomxCcftTw6qmpUFLLUB35bzJ",
  "key30": "5tXUWpJHLG73jyyUdEP2yFF2gSZ59a6nqsQjESMMpWMUxADPcuphKMspYfQTrePdA3xtT3EkDQHHmjMp3YGqpcjM",
  "key31": "4WeofoK5mJhfjduRXyCeLWPodzLtUxP4dqFi8GTWEsJ2NCtioet1MRjC4a88BurvEMvsEZDTXSS2HyWyNTVTtGov",
  "key32": "4GhyqBXDUzAvtVjHHRzTtZRoE1VqAcZAUUSZFdpPtM7rEjft8RMNuo2QJYVpQ6A2Q7dQYdCdoJ18AhuHpji7gyvE",
  "key33": "L98V8jG7fPedbbdsG1U5Xk8fS7VaL5T5QTKnCKvgpHcmwCvCE7hin26EQxY93H9M1xHSyDFassfhvR4KbJm7NsM",
  "key34": "jrubG1RdfPJSSUqNKXXErcKVdta169HjshGc5QwmWLy8oNDEpkppdEyA4oHvE7UK1ys8SnH9qwiKLvfiPXjcNVr",
  "key35": "CFHxcCukMHYDbntkJu7y8aVGFd5sAYzy1dBRpzYeJQ7PehbGNRWU2cjfzXsYG4CW3koG9fgT4wwBLpDkZ7A39PB",
  "key36": "3pSAPdWjQzXm22RKBeyc6B6vZD1CrevpYKSdbgT58BW7wEzazejQuRhtaNHdLQYukCy5NoicLaYQSUB7Mw6jrVQ9",
  "key37": "3KXgKqvQEDYeGZUuQ9i1mVL1cCaSzveFdLsdTePEv5WyheNiQF6yM8wksjSfXDwzeM4TkPEUHoFrqZxyASw5BNUw",
  "key38": "3NEvGdw97LEenA9YoS91ouheWUvYCeMeMXd2swUkyXAGSCrarpeGqyCDpqrRUU9ztRvtddfXBrNGWD8QUDxKCnVg",
  "key39": "2kBYu7JPmWgcQvn9oHFAEBgpJfPoDMbqNtVAfU6Ntu7AcX5mWC3vQT9UCPd2g7iPH4xrky6mRZVBiYwdJziz1fkA"
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
