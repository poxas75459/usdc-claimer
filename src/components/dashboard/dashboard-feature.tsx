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
    "42Latj2Yev4vydaFnztmARfmMTPB21fsxQ1AwVTghAU5F44pLmxefBCvGgavXBLRP36CRcGnXGHs2xCHpn5dhhFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EDfL2c7bVDoecyroiybE295HbsBdGgbXV8rmASmbJJ8tegK2u9MHAy7wihTWVqD3sswiMU6vhCo2YmboWrkJao3",
  "key1": "53NusoiysJdkjLNPA3SYqo4CfJ1HjL6gowMvzSgkFVtmPvG2bTvp9cuYJB7hZq77nwjPiZc1aop3qErw7pteeerp",
  "key2": "5QY8Pj6c7AcmmLksGSd1ecjFJS2vVT2DLsa7NaAmeSkRQtP1nqaPEfPEN1a9VVvQ8oGzJW7HfQctB2ubDZqc1kez",
  "key3": "2jZfBLj8ztN5D5qkgPKk2mtXBP9UtF5PohxZG6oNzxpFKS781AwQxkK39dMzLQ5MVYSvuDfq3Rw1JnbX4HqhHaT1",
  "key4": "5uknRgiwtg9HZ3YScHVhPRrGc4aCjVEQrAjpSTpKo8xcF7o4Va8yHKydou7JfomM9pd7UnBx2qLpxz7ydDt8G95k",
  "key5": "5t6WK7mhQGu93d3xEJK8rvbj4FnmxDem8ndS2xSe7uFZuEB799UGaPHG36eJXXZ2myVvZCMfmzyav2j3tXKczPtF",
  "key6": "58yYmPf5yetsksuW4haRqcJ3rrbxx5YetY6kNubwJVmamNCyW8SQqzYJhh6qUMzyfsbgxgwRniytM2i96Qg7CE8g",
  "key7": "4W2CSZ8h44vZViraY63x5Mi3jsWC1X3P1mhsxmuAk2rv9L2852BLAcm9e65GmQikr1995nP6spanBYevB153tbhA",
  "key8": "2pR7ZRbf7mGPLLE3PQY6x5vbUenNxLnefReZg18EM2wFxpXfmzmUmjnDTDyWAuyz8AXWCgGvgEKdpngZLrjdjFRe",
  "key9": "42WxjfmXie4dDcn9ZbXAcC5Y5G5d25Rvs6FLi97gLKYSAQ5LigZB1XT5GXXT8YApjP9A4FcUDdShvL1cMzUS4YNx",
  "key10": "efWsHS9KBSeLZfcoSei61nVy4fMp5aDQnepMDg5yxm7EAVtYRZNgnyifcrCQWT169N8nGR8UxJFuLU7b1qF8Lv3",
  "key11": "3bGqi5oRnsL39xhwP5F1gjTGg1xFFAEj2H7EWe9F7dszv5CiVoWE5jT2EQHVr6Luf1totXQctzZKD9wwYQvW8Jwm",
  "key12": "3TQrgjyuVdhLqUoLUuD2nwrJd12cvMb19YEHQofToTfYboEdrGhA6aPhG1VzHFMKzo4HuSUv5EHDKXqYghE5tDE2",
  "key13": "2mMm2Rh8X6CGtuXRTLdVFaRnkN2Tw3xgPRGmWmniVNaZSNr5uAUybr2u9NMDKgb78vfbz14m4tqYq8jkhVCQxcyq",
  "key14": "2VFXKYy32UgDXweYKfmXeEgUnxUBxZtXWtBrN3qn7gDi4afuVY1NJ3bKTivNqtXnAd83sdZKxYw7yJ95f9RDPQkP",
  "key15": "2xp429zQtRxtGpH41LTsfJPGH7fd6SKk2sTTzRC8Vt9ZGf3PknV6KSWz4h1sSMxVecE9UprEqnXwScye41qLaqPf",
  "key16": "624CUy1ZtRHB7ms7W6rT3CE9mLyQAEoTpf6VUVfBL5L9v1Gd8ZJKTh2UJxoZDyyB9aKQMnCwFHVrPW2Ygs9K8tVW",
  "key17": "V8hy3XM4j1J3KvmGLkwr9vLBU5QfXiq8FQkgQGCu6KSN4nfM8PcmY1NHSCoiXfjhuB3Btwu65uJjf2aKExdhZMP",
  "key18": "3CYNymFUXoQqx7uRgegBiuwLVbGMsMDfnzU1KagMT1thAejvhZk2p3XNyDTepwxHrVAe238A151aTaxETeCKBfSU",
  "key19": "49kQTuCBaMmpWeco9dF1RNWTreLKQ38aqsqDGFQAtMMbRrzeb6K34oVja8YhqYfhTAhNg4rnq2VYQ84gGLeY99Xa",
  "key20": "5UYipeBhACVYDZ77QD6jSGevcgLtJf8UGhGbAm2DhYCQ92jhsCoNbwAUWhoh8EE75kqE2hy3R9CZoJCt4F7KzSey",
  "key21": "3fU4MWWYCqfH9i6UB6MMxkjtfPEViV71PDv6EMBK4bcmYzQrt9di5bGZQ29NaEFBQUF8yfZmA2rMK5aA6GBdZMoB",
  "key22": "3ibHaQcXeCovNpQ4ywLjKzHWpi8W2UNuEHpQ8guEqpm57SYpNnEeeZkkS75yQWZEV65e13D9dfF5hV6Fz7W1mda1",
  "key23": "2eWVaXg5J8y7iyrqVeRn4BY6aXGQtooHTmR38po1c6F8Cw32Nmf4AAzPkeiYKxBzEmPAYZxWm5ZoX9EHDMvNkHoi",
  "key24": "rQnaeHwhoPYr6qDQhEMrnVP6JAbP9oz1mhwpLTZJ6DdZuvyZLmFm7kD7Qzw5PsSB4QjspJM9Ca7QXjcvYoDemvS",
  "key25": "8EHCAmx7r63HRoLDhyZjshUTpAV7wRpU5UrnA23u2yi7Mcy45wZ1qAwWQ6Fmdg9TRL3dqUH1RintKQ3pwwkzuoN",
  "key26": "byfgWLDmXMCYFBAqXeUsARKzLV1MzEisw6J3yS9ax1Y2r44AHz8usUfkrctcKBhhgxsJa4oGWonvgoC3Doye1W2",
  "key27": "3WC4RGSuGTDPmVhtDNwMW1xvStNeFRExhitJU4ZUWSsuF2gPLiZj7PtUiToT4LLF1edwt4ehniFBbb3a9Ehy93Gw",
  "key28": "5S3HDtzYcgGY3m7gcfbCHXs57MsbBtkAW4KAdkpmZq6kiRyRqsWJWExtqVCnf4WJFghTxDTnwvXCqK3f6E9ktcLU",
  "key29": "4r5AL1eLF82wKGctrRdUVXRqRC8wa3q4QHAaSeva8UKJrYeitoPbbYkz5CMQiWQZkR31XpoY9c8kv7Wi9XsP1Jmm",
  "key30": "2QBMWpgeDGStqTYS5DtfejoJR9ckeD6pPLk8RXjScCwxMJc71EmQtd1KqTxP6bovrk1EKdk7pjPiHpEtPJ9TCzsw",
  "key31": "3hpvCYHBEssLuUpiZY2AJ8YLjM4scPrwmaHN8Vps6ffbTBdv4UqiaW4knwixnw8MPB1vfTaL1jtWBv3UNXSuzDCd",
  "key32": "3FrV5C8LsqikUsemJpVQVuHPiZjEycZswiaLqHwPYovLzCinPKCRquooskDdEhsxQkSyGoCNDQ3wDGVE9tHv1gWD",
  "key33": "2vSMBxbsPU8u9g9WHZXz2uXyuuxhT79a4RgPxCmKnet7mQu8UBoMxtz98UGaSgfYkRc53vzgad2AioEPTCgUXqZZ",
  "key34": "2V2eMDZeNK6eXxiEyJoNnit2z7ZCxe8Z73xHEDoBPx6RbEtj2dZPT5qD3nWKapvYtsoVuKH5NZ6GaZ9X6XkDjP9f",
  "key35": "4TMrhpK4VoqNpATXpdgRmjZtcx1C33GBjMmZ5FoKwYvoaUEJkLoQb76fDsynvof98UTREcbvJJdAMMyf5zUQSCx8",
  "key36": "kDa8jfSY46kCh3cuHNruSQpvSaKnp3ABdXVkFUPvn9WxjvHywb6ExXAW2kTptX4tMXap1Agm1vX3LSrAozmBhY3",
  "key37": "4SMTThyrSB2cHMFGm1KoyaM1wW2WCDAUQkcDiLfXD2ucLVQhvSfTETEs4t5eLszYBqgwaQvVMLUGVdBmKqJYQ8gC"
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
