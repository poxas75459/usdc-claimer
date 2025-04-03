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
    "S8tY7EDD8vCfAksXw9TneipYqs55oJkf5fAc6aj1mzQ9uQAhpqYKnorPqbxW1Ww98H2VGfCDJEopZEBfEGJL9m6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WziwpWB6yC3Fmq99gb5wkicTo2X6MPaRDmb4k7cfxyF7dJcm7U8keF76vkik4qNoC3cnUSsqgaLwnBEhQLuLYLr",
  "key1": "65U1MN2fgaUhQsDRMRJbRFc1doWY7pGJhswbmUzY5RfAr1T3XJWotvRFY99cZ2ytsBXfjBxxsyxahaMwJKfPgALe",
  "key2": "5LvbdXrqMnQrc9rqvsZeCfLMGHHfZhYBshwukZpiAjJGKkMDMy5444TVoV7FQziqzpChzmxkYvsoxg3nFip4AyY8",
  "key3": "3UWJ3BHHnEuhT6BLwioQy3MKdJ6dcoE5KXzvUA4ZDiuasikeAKWrvfE88P8mBNxpnnMysQruhqzH1vpzXdQGgcZD",
  "key4": "5tz5zunBEbLKFPk2jq1DwWRdEw69ZTmaueWUBUS4HisPZStFaEzmAC9RTzq4T8Z4im9PHuJcikyxBs2hpW1BAcPo",
  "key5": "57YD1jXNvb6FpvMeooGY2tTUy1BkQWZ2goL6P2L2E6mhEuWjM8hC7prnr2KiSbU9Bdco2JvyGjGnHRxNcQ9RL1Us",
  "key6": "2CxvqhjXiRkwhqPNBtgsDB9vDVEBP1hDrhc6xA5KrVZN5Ex2cfkdntZXemouPUsiRW3oKX7XemBkyNq94yXhonDz",
  "key7": "4suYib8kw7ga49vPDFPnLmcnE87NkZPsuqPfCqfp5xgupbYHAyHFqjkvErCQXwK7kGXUy5e1NrM3n1doezs4EEJt",
  "key8": "2eaWbtCSwi1nmaJ8Xy1MGuxeaFBwstGCowGPoeKYDxXgNnz83Q6oBzZQ5ALhWPGSQQSWSmax3dWK7koWy848fHjG",
  "key9": "biv1cwsvpCtL8954SjGoDXFpVu9n1JycSzBvoVNPmDSbM2bhEiWzAVL2vkGjhbrn9CeKj83svjy6nsatUrBQiWq",
  "key10": "z6vCm67DorJCzcuVsyhzzY8NZrD58KySjRh6Vs7X8rMLWZUijrkqcg7z5iz7WW14wUhtMT2R53Z1wgH3ABV5U3Z",
  "key11": "4SsgoWUgEdUGZLfUWtNyKSoNF4j4UxJfrve44DVNin4EzTYXqXbYVDTJ1FdLFbpGsrDcQbUC1fgSRr9PnXSTw2NU",
  "key12": "2Gb94hiA8y2NSc5w3ea3kFdoXRTVQgww5LVztVw5184KqRctNTn7nYgEaYw2ZzjgDtameHhM5QYcvTxaRTzvDyzq",
  "key13": "4Rf8BYjMHDtW7aY1zyV6SbYfD9T8ytpRJm5xxTsNdJNPEr5AwTnWWVYFQxqj7MEthznq14krEn6q2cw4Mmw6EFFq",
  "key14": "65bTJtgSYf6HwqKBr8LuE6kb8fYQdUUXhza4RdasmYQheeQbbD5HNYHAdBzuJtLosi67HTgJfzQH3URHvJJLZ2bx",
  "key15": "4NrDDSJHaxK1s5wnCLghoTuT2LEfmnSHyLqYCYyVZXsEg5jqzxhknTgrdYwwssWqWGh41CbgBpm9vGmahyBDrGhy",
  "key16": "2BnSyh9pb5WiVDaXpYAGGaoPkUbJLfYZqdLpEQpcZ3jnxeag6HKfvB2SxmX21PRddi49tWkq2XTTQX2E3mWQWbJ5",
  "key17": "5bijbPfjmBcYkeWijXM6yfmEeRCqUnRvvR3wT5c6qjscqPPKeGt2RfPcPR1gm4iVcQX7u7AbxHwqMczwsRNE6cr2",
  "key18": "3XuZad84GWLV4gVCL5TjTP8DzcEKHM2H6rQnsk4hPmHheYWq8kfbiixA1pzQKKZHTVETdXhMrd6wGS5VrRbumEw",
  "key19": "3MWkx8Qu1Yr377Udq3in2UYbV1Vyx7jJNeDLraJ6Y47h7aYXRgEhuQXkbuNkRvWmCxAFwUQQnAnFWyboJQ6R6hXu",
  "key20": "47uVB7xmqqn6wxefM5DomHXCq9VL6m6W2HTYptafj6mjXoMm3RKCxr4ZfV4735vmjQaBHAJkEKRHcQcP4pPRePT4",
  "key21": "5VVMkzNGxUrgpLLhDgzpyBhy4bmEvc1tr2M7rMhTLHqrRZbLZPkLWRiF4RP6zXqtmdHY37z3zYv1WBpP96mXjUMj",
  "key22": "3wjxYbtPJktGKC25ag7pAk4LaVrYDW15qP9yxFYbH7B2ubM8K5KT1MsfeLFt8GzqAchMzTMZeYh4T5uZ4yEKMg6r",
  "key23": "5Logv4aFreMUg377Tp7VGkrGFZrfepSPbz26wYPTQj5b1Z2Mmv7xNXQP32BQojzrYFuHpcS925ekRAa2J7pfWBFU",
  "key24": "3Se2dsdu5jsRm2Rh7Pk6ffbBW5UBFpTHYjVr8nNt1ShVwTxajRmKyc7SUGkwEc2qsVBWdQuWsabpWPmcZSgVHR4L",
  "key25": "4N36ncwtnefWASUzFheuzTNYNzCERft98z7KBWcFKoPiNkSivqeBmsqC9Ue5eGM25gu6wAeeFTTy3zQSAzmPn5Lb",
  "key26": "4qNJRPaYdgvM24RQ7Hwqj4xLDj3LRp1QAW3YG1bvTZJjGPoSTx6b9EmkEeRTawnSCNLUK9iPA6aDbRGTFvYBkr7g",
  "key27": "3nBWn7XY9SeBbGNKraRA4i2rhT1kxp2YQXx4oMoNnB5uGdKrPaPoFvcKBhCAgEyDuoua8eQ5NTCCShNqBxbVvL5x",
  "key28": "3rpGwvAKgckk2aHRmk3hue9HJPd1egxj42fsaGeQ5CxSDLZhFjzxQYXuVAeKJqSBBQDJZqDXnZt9itxMT9SkEXvT",
  "key29": "2WwubSdBmX3RWfVPY5EtpKYhFxkb5UJBvVEdZGaMgPSoSx2JW3q1AGT7aFQ3gTBQ2H4xSa8kCVKdUVfv55NyxL88",
  "key30": "4zZELUF7Cf4KEMpjRw5EXbGjd6c62913aVi4Fj5Rv5JGwyDvvTwvqLUEPqQfVCDjvjzCr7Vu4iy5zXTfVckvFak3",
  "key31": "3s3mX4yKK3Db9HFMFBpHgkBEKmKLUyaxvd3ztVuu7jvZHEXYKBpRZkCHLeRLLciGnneaYcH3UvtUwADDNS5yVrGC",
  "key32": "5sfNHPqMwsGX9MDZTuXcNSMwfgQCnAQnox6q3WfM5ciQm7ueA4tJMCLS3exdbLo45jFDvCu6KeANvTNKaUicoCEj",
  "key33": "3B1XZ9uvAdXWsRkJixDeGhyqr4bPThQuAwZEL53hQiA5wxjbtGXyiS3MKu82mmC5nyK2wCYhaK1CURQhS9QwCade",
  "key34": "39jQ7ZvihurwgCvVTFsxKU2HxKZkoK5VVxeyMpLapNZzuSGch7zGZSPYqgTcCXiqcquthzbkLFcPoYJWMcMnHU5r",
  "key35": "3WLNadHmrwnk98Xo9qaJqyaKEgiYRp532UagNR65g19uipBwYt15qGiuLBAg2uW3bh3KXc4cjDjipMJ22jMbWtGi",
  "key36": "4meFHLVC6qCCA4V3ED8CXHAG8PQMZnXqnJKRa61rt8im911cmX5q2DGvfthg4aAJ14iN9CMGzaFhSznZEdNHMv4G"
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
