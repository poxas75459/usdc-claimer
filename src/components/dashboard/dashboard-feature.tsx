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
    "2ZT4HqfcZFC8qugSsv7b9sm7ECuqcNp2iXaVmRZotLJPPZPDKaQz3fp2cb9tUv7bZPJZLorHZKXPtzA1h8dUxYsP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2muKkdev5ndGUN11mRavCucGNg9pUv5XTAMyUp8y7BxEbqbYHX5fBj2ztbtQrnqbZZzga3zMqkZVYLMagtgLyGJn",
  "key1": "pm252JSPu7j6239UFoCyiKgo5VKNVbckhFcHApThxSmdHNTfx8CRkKX9pz56arjZZvaf8aj9hRXocB4iigoB327",
  "key2": "4Lm6yL1ehJAGY34vLXYhtEF5wxLCy5AJvkHbMWWyPQA846ZTmnKo2GaFRSxRMRiGtiw9EkgzD1qSxFAHMtHw4aaR",
  "key3": "4rThE1KTWWfuL8b53FnUeW6eZzwZtpPjFbPvzzGpsrUoS2HqA9siXU51jeuDiSSjSrn3BHs51Q4ihz9KTJskuA26",
  "key4": "2HXccxx5dBf5u3YC7MooK8fgc3fgeDvABgAuoYWhwWXwDDiJivjtHFS5Lxy4dJkmQmj2cqx1nYbXYexY48X4ZArd",
  "key5": "2ecLTarcSKXGzQJR2s7Rgwe5XyaH4MzgBYDYeQq7hi7TY2tHP1QzKWtvJtb1mgco4TXSHoAiwQGRQZW3gwXv1Ssg",
  "key6": "4gVN2SR9jVBAWxjE4N1ZguCq2k2cTPmuH2J4Q4KYP9z5767rEVHsR3U35c7EkkwC9862QLeZ3fy99uCeuLdSTPpY",
  "key7": "2bASJwPJJsLBn2RhQJbaBKHdUidV2Y2SQDtrswsQK8GhXv7LpcTicfLLvowyyotscbDr2NMWrqtCeKz7hcYCsNuB",
  "key8": "2bD91LgRc7bq77mXz2SirVPw7N1xUfKQoPHeLjMrR1vDoVuLMqum43Ac9WPjBXDBQvB4ZtXbakWq3MksMnhJM8Su",
  "key9": "5M4JghVT9nt8vjyLk3TjmvykoCPMp1JEfodoYpme3wLJvEk8DQfEsNZxsjx8oReGiamruQkpXhw34urnFYdhsMBf",
  "key10": "2yPXyNWDZFQYrZsrKNuRt8ef8n93yKpnYpd46kMZ3WeeoxMXNofaw7t2dodMcGknN3e7c1RzJE5LkPc88aVp8DLX",
  "key11": "2GUbgyWp7Y7Lj2AQNiym5ifTCaCAkCBJ236YyLNBU62NhAywqUgehmXKKSbG3uycArnzqmdWeiHE1gLDRNgerVr4",
  "key12": "33xEZDTdVCsr2rsr9Sv82ywYQ2VJuNJJnvhS45aDhxK3Cc9eA3GtNy9nvPzeJpKytZ1iKt5wfo6jNJvBTGPTf586",
  "key13": "3vd6dPKh3QCKBXXwRmVdJfw7Di8jf1RBA6WPPxGFKEuapMoVhE2wxfL3MYaDiT1tVMg5LRsuiYerrWcB96RozStz",
  "key14": "5nin7CsboCfyhGZ3d21Rh6m2oVGSm1tqzvaCpoG3VfVBNC8nFqiTHCM4ScJLZz6rgJpY5sqjG2pSr2yjcwqoQXoq",
  "key15": "4pP3a9pk7bm7spaF31nCRYfCKgdadbmZd5JMoQvhzmixQAbBVvgDB7sPPC2DxToYcRk5g2VcoTcpU5fV3PMGSa2d",
  "key16": "5JCMhwoXQzAHiVFMUkzaPm7zpPPWrakXx7adN8htF4XyqF8gdZYxc5JUBDfuKSFc4KYK3DWDACQmWzKQ5RWBvfwJ",
  "key17": "62L4TgQhBE3oHozWgj15b65gBg8bgyV4gnSJBUtnx2cq3pb9BiSEW7NdaQVSNo2wduw2QRi4rZ6WbGJTeVKquadR",
  "key18": "5wDVVvAxLdGLhkpJiZxDkaYDvLAzaThCbskoq25gPzjZnywDh8X2eu3egE7s1qENmRgB7k5ADgEdFMhje9boMkrs",
  "key19": "3mv74FwZzgiYU33oJRPRQ1ZqQX1JBpMu4RdEGryqcW48hzEVQXSEqqGzCbDBF2oa6ZQwNGdP2TJHdBfNtwJQtBSK",
  "key20": "5xF2prKBQoBN45hp1mscWBrVVuwrGRtrKdQAAuGXUbP1iCySaGZtGWdQA8WkJ7ezgYCdA4XYTnEkkbrV3qKPN1Bw",
  "key21": "1dPsdmd8okjZcuUhu4b2mmNq19HDij1AebSQsxT6fdsWg9Rccgg4roAKCNggE7mzxz2m1ZEXqdhZhZNtBt6xhyX",
  "key22": "QczTUf8odqeGtEEdvXEFy7B3ahzbyEJUMurRAv3aZXH6dcyBqiyhCvHWpQ99wWMcixJUYcf6NuYweRWngvtx2N8",
  "key23": "5FWPQiV6oB5Rzcwtn6eQkSD8BJxKduBw3X1EvAun2v6TnvQKJMkHB215SRCyWh7yZEEQG9iybRBGbuoBf131K6wX",
  "key24": "3dE4qebPskiGR9MSu55j4u8Mks1tZjD5JVQQUCg17HfoBudGNXYj6wDtibsTkrs68VwAVJVqJR9vT8h3Z31R19SA",
  "key25": "W89TAFABqUajujoq3SW5zh1PR9hp1t9Fsk2oGXGwKKe9CtKYZtXgwXedWU1gNjUHbzZNnAR5d1ZzgWimhwVokgd",
  "key26": "5iWagZbWiFH4iEvh4hJuZNZqfgQUFWS7gKBWkpeRn9Hk5iXhvFZiZeXSkpFa6dMA6okAFP4qVhqkQvEm53x6vdme",
  "key27": "36ejj7h82ircbHFzbD8BERBJXaiDRr3XRP12d85ZvbVMb8phDLrPEqCPNK4CsrZ8TwxHN95MDr6ZiMMA5r8BbTY8",
  "key28": "oTVybfL1Zdv1k32z5gqgE4WWeVajrL2iRwASxPF2tsBEFdjVPRzU3smsEcLj5V9g7N5wQn6ggZ7Woeq6MPYrwF1",
  "key29": "3o6ZWEeETwMEoz7CWB2sShgSvHDv9jNFDtifqNaYQC95rAyjaSKQSmw35U4gjDiGQ6aYra2w1wTdRg4tamdyKAAF",
  "key30": "58AexKeAthdT7dVPbUy8s6mmXJJJ9uALbkWw3dZkAEKAqhFTUk8f43ptCqUU6qRXwbFurA3QCrqFZZW7sr89aRFz",
  "key31": "57y52jWCwPL6fMs2y3cXtjCMWZxLUnPLHb6cP1B9ZWkdGHMYhqFZoxW2otvnf5EU8DUSdr6JJ6pENNEHQLFedorR",
  "key32": "63DK1VT5uw9nW8bEp2WvwqvhfjAu86p2uhLFKqyHpbNA3uQLm7ufLvQcpss1ykrdsrrna64AWNgS8ejpCFGBtuvY",
  "key33": "5DvvBJGySGbTJRVSbmLGb3gedY7Z3ubk2kQfLk33bbXLt5Qmay34kvKxyfwZoYdPs98FgMSd23kU8KzkibTJvzTa",
  "key34": "5f8ZHojEAc4wj5p74STJeCEDVTUVtv2UtoRyLPDmGifVCnipH62Nssat8Z6k1Y4gA8c4hysryQfWgQ57AEyzGQLs",
  "key35": "2ipKUt4j8kJCpZPsdg1dRmvqGRAp3WHqVD9BWsGnd6VZ6kSZvZRw7FPUzCYYY4LmY1hDjfdWaGFANaASeLLwFuL5",
  "key36": "4baHZSFqYfu1eBvt7zbSsAZmCV5g21jqT1ho3ABF7KSRYzb1Ej5ex1xeV7ckweX8B7FkCzfPHYsqwsyNpTgmgiiw",
  "key37": "GUVqbMtCvK7jN7FAKanjpmDH6C6qbAQw6J7v8SexiTgr2u84PVjmGhggoiaafLHqTv9U7sYzCF1SSK9XqpyRU46"
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
