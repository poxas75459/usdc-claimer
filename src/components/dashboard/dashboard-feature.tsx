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
    "5hMtzvX1E86kEjWs1XCNF8ujAogSwkgM8QU1sAkhjKp4JEJB9N3QGt3CoWVAitSjCT95remH9L8N4mHhsPgqDDHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z8c5LV7F7Radp1AkPTCMtJG1SFy5Zd1iMaE4KpZc48UJhJpbSwKWF55zGKC6PP5Gf2wrziFEtk9rxJSWmmr6opH",
  "key1": "4BXhnmEvYM7qE12nMKrGBnxXkbxGLSH8TZqYKJCBRSGbPABN3HoozbPid1KxqTjgoG3PRQEt9yvhEHduLrRWjhne",
  "key2": "aUjYr3qexowW4uTcZGBKBy7yzouVLNW2qvGhCj5gvnMVMA3xFofhWThkcWM6HT4r4DYcyzT33zkkUKWqFjGSJER",
  "key3": "ZU8rVDbBYyvuhD9ep48RwN8p3BXJ86tFLhFRagLNK4FUbdLa1j3YwWoMzp4pHwf4yiYH6sGFzfgbGEVaKZmbcPN",
  "key4": "4VsqBUE3sxievzX1e6WK2u89oYh24Y4Dbc7Hde23kMaBBf1eyFam2P5aajegfFVuZSR4CS3rbwdjQifXJoQCGKu5",
  "key5": "2VkFhVTpEueJQmVfhiWKfnGyTrodSNroRatbq4Rs6jsaU6w57F8irnVi1BZcb4iMUZwyirjBexWyh5wbFGAB74B9",
  "key6": "4bGUetBpC9ZGAyaTNfVkshtKsfYYFK5BwpdGiZDJ2Jo2pDAK1pXrt2BAte8EfoZbtoe8qUGYfz84dH9hCNjZJA5G",
  "key7": "51veafcXLVpwnDjgn7MkepBbvU7j4eLnvAgciHbB4qe168aFTRSMLwhtUnT4ozjgGCS5UWD9wcBikHkNyhzrshrL",
  "key8": "kSCzKLu8xo4wG9mrZt4VTuLawzDJKT9BZWn7dRKuuLbin2Jgpf6aCcMvRhY4SwQZC8FMyKZe7fmv3xcdeEiGYtW",
  "key9": "2M7azmifYrCYSJoGZJcMQ4URiuiRJgpH7yTQG1CTouhFqq5RvoYy7uahdGr568ZTMXic9raWnTuFGXud3TmxHqpb",
  "key10": "gsdU3N6K31tETLQ5ecyNJLsfQ6FscZtcdroRxSHhrXVLFXjDoKfuVW5tFhzRXqABqkYZBBMCVE6HjUtWYVU36Eo",
  "key11": "4z7UUwT7UjrcUTSzybri79HyWYptxQJEVEUt1g1xqop2kUFH5MPF7QCKXLTTyDutkyD7BpKPr16M9D4hS3wXLD3V",
  "key12": "L6b8vkEFzaLbkSc1y6dL67nqfotsRGWTRJTtqkuG1cJq4KDPR3KWq3ipGkg4GtDw247x68Tm9oW3dYJta8Dpd32",
  "key13": "5b2YAkq9zEk53aX7wt2Sk8UpPRkjMnYT9zBFgmeAEeb1qsSqbHwh7aWmbErG8jT8w5WWakr8e26exXVrHeEVUkAo",
  "key14": "2X1dYkXxSz9wRcPfWXYcCpuUpTLVZ4r9WUgJn4bC9J7zZPrpKR9eeaxNhzXGCU4znxD3TSWkyeQxzkjAQhLVFayh",
  "key15": "351D12wc5yYiiQCv1pbG4xH1S55wrBNT5UQUU8aFJ9qTd4UXgAGVEAJjvJbwnZ5iKHogQ3TTwQpJnj4SYHrq8wA3",
  "key16": "3de17XssL9imEbdmBVj5CnP1WanrjDq7KZxv8Prc8Pdx2vFZVtnTCNdojPLfmsYfww35TSAvxS3whSj96phoD5vk",
  "key17": "2ZAw5FUMX7atDAy4jTsFnrB2XQRV7YBj7iDaF2TgYekr7GFUQPKBVaQgBcJy7btPgVCbdgZ6pRjUAyT1wfugr5Pc",
  "key18": "3vzuaaf966r4khgLLLQtqpZ5fUaBsum4h6ML5zpzGWHfcRZh8QxrmPzHGiKivuFZZAVmc9cGj6qNvNzRhutoumQB",
  "key19": "5Vk562suWFzd7LeomqLrBYryv1MiomzSbia13yDU57YHzKf4ZuoMjA4kvuDxtastt1A4jzzGq4uRCHmbBjpAigYN",
  "key20": "3hK4yncuz5y4Q6Mym7EndcaoqKaXA4j4mPJNp7Cxm5XSCTSHhJKBeJ1cYjD1E5ZucUK1oZuLjwm9CBQ9jNyGTkKJ",
  "key21": "4mar6Q7mzU2npGfXMFCURbKpevCtUc27VnSBbCjN6j4c6Jpmmc7SLQq5vMx4KEsj2pgQJWpTAfBLqs9cKi8dQS43",
  "key22": "2FtjCHGfGwahr2PFVF3DR7ypDPemV2Yy4VAQviQT57SQiWgK7RdZk8wbLLKi3Ez9ihkKKPCU14tsJAQfi5CrpPus",
  "key23": "4STvRBsmqoVxAhjCRDmb34kxqEPADcbDgSYXcZwNU6KYw1yqwoqezpwt3BHFee8XFTRZYU8HJHZZgHnLQyES5AMB",
  "key24": "5xkjZpjLUoCv7eW1uJQtmZsvEE2vLYQ1ayV8qbUJXWKs2e44sQpksxchbgQXVg8oekGkpyRknAAYLS9hqUNfG2gc",
  "key25": "5GCWYSnswLS8cVDqm8MYCfdjVJz4wp2LrNugHb42qDpyhijRr9dRxMxjQ8euXGCz4gzAcUVCSbUHXdCyJFGWgtTb",
  "key26": "4FSknsCg558vB48Ca5tgdPv9LLrdBcf8toqymEXrg2viYXqCNnVL9fJAHti827oTB7QU318vH5kuPU4MCD3uCkui",
  "key27": "3U6h1QAkWfJgJKTgUBxGwA8XNYcTbVpT9juM4yJR7L6jtTQvtPNcyWXiYtvLGacRCfcyS2SaRSeB7GevZ3h9oY76",
  "key28": "2KP6LbdyBpzvqx5tC5wtEsDxGFZiVoiujiS5VnpCLPWtyNDP8AHsocyJ3yhEu4PsE58n2QZB7zW4z36Smv9v5L2M",
  "key29": "3hPUTMMbnN2wU6vthQRbcbeRvqh3z9crpZwKjX1kCvf5cbgqZQEXReSjqwsaw5UeNGW4tqwPShZgSPMAVYjN39Cf",
  "key30": "52z4Epq48eAV3h82a5B7Pgx1jbcR93mgCeT5nmndT4vr76oz7ps8zK28GDRDfJ8KRXJsQmdiSLk4NAoAmxiS8ETH",
  "key31": "5gDEHWT5Bs9zjr5qg2dpo4UzRuvTSMwuW7yf6KcVndUnVFZu6zZSjgksg2uNeEZyZoZNsF4MnSKj73ePMCTx2RH7",
  "key32": "5hnyeyHXgg8ZGSa2WXY8yUckjrb3QRWbHbi3pjtRiWkmfDZJp5vXyvG5wcgCbne18DDWFtEU3KWo23s5cZwNAJ9W",
  "key33": "5CPDUWQtswfw1CpddsdJAx9PRsqPDhiJHPzEZ4k9j7MvQM48nNFnrNvDwUu98eiw44vFyjjG9sFJdDiGJqzx9iog",
  "key34": "CrMG3BwXEdneym5A6JsNzVV2KaJrZPteKrS88Ax4nuk4V9vwmBo1kqH5GAF7kaT4E6BZPqQZMPAAvgzFY1twKgo",
  "key35": "2TrqCXcXEqWwTbLRuexpRPKNr6qq2ScEshdQFLG9u8vH7QJPBroRZAmTvooWfpKsNz9wfE6iVetiCxBpmNxsnXVv",
  "key36": "5H4zMqXZpe4faBour6ZbydtAg2RgEr5fARffaSfKamVBvxJdvJqXW9bCa2crP87YwhvQEa7obm5a3v9kTm2iXpPD",
  "key37": "2Hyuwi7yimaQ9RjWZGDCn8jR8zjEWmUD8h5aJzeq6wc57yY2euvvyCaxKKFqrSoTtXq51h2aMfEEG99di9uQ57sr",
  "key38": "5e1kNEEt6iwheCPWTQ7EyYC9ooDjHTFkoyt83yjvnzkjWgDJwimtbhvEfSXvSyyRsNJ1BtCNzKAjtBEMU6goqvWw",
  "key39": "4GXBgNCKJvgtCSfPuCCQ3g5NJwmD1jJ3xh2cpERA86C3VftxVC7P3mPNwypBNtPs4A2LZtHeejCX8ANvwzbhKTXg",
  "key40": "4NNjJxfuo1bFyPm2mLVaRHmA8nav3hXWqQ9dawHE34uHq177tbvuGdYRhQdWpPXu5KQGgtfc7cxL1pczfqefjSdb",
  "key41": "2SGYBqoGb1ABPXAKw2sav9gqyEPBLfmNCMDbHEVBs6C1fx6qJtJzKQxVe6JdTyZcCwD78mD4Dq7RHmAh1s5cdcZt"
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
