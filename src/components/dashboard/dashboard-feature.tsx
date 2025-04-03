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
    "3AFJoCZn13qEnQfFeK6w1L3hubbw352BTsYnJa4pLiLzcbGB4wZqRnmSXe9hsgFWhU7p4ae8W2yrULK3sQSRKjff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3radgMygLPcxLRjPkAX5W2DtTk2Pd2ozwKYmLRjYYiU5sMveZW65QtumDgywCkkpc7hS9kS5vTwjG1kb2ZzVgzwt",
  "key1": "3WF1MpFPVVJVzBo4W4YDfd6KJX2k5XyPeFXdvomKDjz48j1GaskDby4q1L9A8cvjSsV7xX1zZFGGveLUKTWtAtDi",
  "key2": "5bESBxTJDwxsEVXXef21Keb5fhkq9PwkhN1n7z3PkX1NwtL5mCXMhb6ef7C86DYHgF6peHZhZ8kuhtB7FxskWYyo",
  "key3": "5oodw6K5WRD431y5SAdQ6uamrPiXvq61suTVsZkDzRKKjfrdmTBYpyoufoCTnTUFDrrzNNWqK788R9Q9VgJEpHwz",
  "key4": "3aUGzNmgCUEC8mpiPfQYMNCdHY6Ee7AopHVnBz8JofpPcMNk912XsAKEHyegBR1MtzQxRozXqFMsbRxcsMjK31KX",
  "key5": "2ikncsyXurSzTu2qBRZjLZvTS8Q6aqGnKo3dqfRXExuvTGVJypLUfGAEUoGb2hyZZqJvFyfUqv8kWv4RawdF9fio",
  "key6": "nkUe1kzRFfaSLsfHMmBGuGh5A4jZrX9sEqxqfWvva8uRH5BWP4jNEc7zsF6xUzoueTLbBGo9QaLiUZqfRLgNGoL",
  "key7": "4AxaLcmJHBwU3AUecyAYVnUkZdG1BUdy2fhA65TmUGU2ZYfnt3LTtxN8cQsZbnsAmPgAyeC1o1qYQ7Ue7BgyYRhm",
  "key8": "43ftaXKgBAQX2Gcg5RKJMxbqetJKpAwHT4fC7sdcrw54Ns2zePTzav68JR4ixzw7nSsKmboSpwnmD7j7ypwvm1pB",
  "key9": "2J8k9o77NsqVnr6f4advZoiMR6npn1s1cK58FLHDFGPprz3B7wU8KoGz5hAJGSUbYYApT7AkNyepMjZuNsJTF2Sv",
  "key10": "hYQsSq2TNPRPFdWtrGJpoHRGYc4DE2mrL5Q69Vnj8ijjCTXQbcJbsc7Cn8b7Y2xRiVDsBEBBDgHxnAKHzbAUAVf",
  "key11": "KnoM7pDqZkGYmmm676MJmF2Pj1MZogHZ7uG39CAmJrkjvxjJoPXzqiPE2DYK4xhM2KNscuCWcrCSkAYvBEoZT6Y",
  "key12": "23rvChbJHbEGf6sdz3fL1E2ruWyNN883mAau4yXcUuHh6VCNonFMvGvXDaczJ3WbZ4Koh3mqkc51VeCoBopik7he",
  "key13": "3B9YECdTSLJmzZSPySrwtHesdYvJC2xwnKYJ3p3gTFnDDp6xRqSMyFmCoB8pAKram8bTaN5EsCoAejAXDaF2By15",
  "key14": "4xw1f17AXSjnFfEnjg85hrRXoFryWdyzeMZZLb8QZJb7JtGq3vJEWrTvzKicjUAksFqk9hf9uuT6XYgn9yfQqMTS",
  "key15": "4d5fAVgitCJ6EJCtDeVJ4mPUxfjvVbxjNE18z9eupMDpiAhthDdUEoAjHjw13KxZSpr91FzCCxUk5z1o7nQpmM8g",
  "key16": "5f7eqNYqQXnam6VEnYEkDeTPpCNz9ivQ48bKbBAbeeHKKQFBRL3sNUoLZJE9XbykpasCxpe31gJKZxnMHTSB4ELN",
  "key17": "UwxYR7hraxCNU2FxE7SoxsmwU3Kr3Tp5eu2eiQAvSNRXMzYLn7yvGLpK2WwzxhmmfkHT4vr8mh2Q1duwGbczUk6",
  "key18": "bx4TmSczBkcHAA2V73iVpH9zeBa4eAG5pVd9i5S48aYQkojBaVSQNPGFenw5jbcXf9LZLiyCmb2QKXTGESVNd6A",
  "key19": "5fZqGkXLxRsxW2ckqXREoJ4jWPsSTi94mGvFNQESegRyDQzFjBF6MiKSR8sHiTDKiw7Q33kLyU11ZvN3FeRoSzKV",
  "key20": "2hoVmrq9ZWMf7trQ5bsQcZeAD9Sg9L6bnqidohiBDW5PBb2aWEdt4FW182NCWfxZSaSn9Bp174cBpuaktKc34aZu",
  "key21": "gmYjKGdvVT1PpBYEPebyxHJmiyqp9xtxpQyB6En9QzV8M5AkgZyghJujMk49rMAxAG7f997AWciMbLrJx7UNNDT",
  "key22": "WwPwyYvTj4rXBxMAJej2bRd1U7F1ULACQn55Rvchxs69ZgUdWmpGqpYBVpuF4VoRePzn3jzGQZXZrKU9prZKCx5",
  "key23": "3u9ATCtqkeuzL8euT9rKa11UzXT2hcrKwhcNsf9pvEGhKF2Efb3C6rzmzbxcsPjS2MHhwqb4DASEEY2zuSPgnP4c",
  "key24": "Zrb2pBFjaf7s9uys4PVzoEa4PdJv3sLp8zgzZnBGAhjZnGDUnJsm2D5XJPCzat4vB9aS7A2C7VLku1BNvTTAXgm",
  "key25": "bRU9phi6Siuude84yPoZn7ASQBimYsySkBys1MF3hw5HA6xM5ztGVejhBVakA2SES17Hz2fWFQhmLmpZSZQv19X",
  "key26": "61cVvE6BzjwgWPC191jCXtoRh9NY2PeGNvaBQgg3UaARVyZBk9xMQ6SMd2o6baXMzz7snJ8etTqSensLrKHJUKH4",
  "key27": "5XZZDSFmPqVJ4qvCGPofDBomELgXXLK7pQwmCoHGpH5f8HFjhB8owdN99wwFdVaCLJsyPGHuuRJ4L1FRA58YbAWX",
  "key28": "2rDUtZrWfMWDoYGKCbuNv3qpbHiBfLdikyf8quMfYRy5TqVe2cRNyhMz77uTKKUAhnKrVrWeGmcRcK7F8Q92VpVp",
  "key29": "Q53QJ5kzr3xakhSmbBNKhHe7qyUW5oYez4gZUzQAMvMaZzZ7gw2UNpUBi2Xhy9eXihRL4DZf9adwegTmucBtef8",
  "key30": "3RWgwTTy4AXRx3WihEmr8bxNPKQeBdGDvBUJBMrSxuyh4FsCvmtVnNJAoK9X6fhziSGUY827MZ89jK1GV5cW1xG9",
  "key31": "5xVSx2pGzxzUgT276Mq8pnXP5CH6sVdHBa9bZi8MMTGy4RA3aszkrgjqDv4CFtBd9PGQ3vqpETM1uKmefjxSQUMp"
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
