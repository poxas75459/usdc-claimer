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
    "3pY9sEuj3RF18azGbau7DDaYZVHKmRrmE5aFk9Sk9fGdcf3kwG9uE3jEvKqE9GTSBcfXxMx5GefrEoWSjzDGXPfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xx1tZ5cqB727PhKEm2wEndqRbc52qkjf5ayomu1xFYTLqRjdZomnswakE6dYo7CpiiAUvzNSnb9i8PumtaG1u2i",
  "key1": "5veEQDEYHvamPHEBJnryovx7bTHxT3XPai28fzcnNoNXcVHD6DSqv4MBEyCCtoxjy9bnbtmxE7Ydw6WapPn5Un9m",
  "key2": "5rfmkz2eAk9KeSZMsoHnb45EgzuoPUKYXQ32nFqYnz68HbKijmF34kpVXvDVgbLD8BoPHsiJ6FSKZvDJzijUZceV",
  "key3": "3U1GfFdzFNgV1VTuESHohvdgxknQSfy4fNynWwAsJMbjNTMLFaVtyNA55J5mwpBJRoo2bdjfNBpfJnGv3G5VEZiR",
  "key4": "5r9n7xBBdpPcvpN2cZ6SB6KVhqsZcdenMhSC4F89NkiHhyyyQrTn4KzjyZjahdCg5u2LCfKTk8Dv54joVc9HvC3g",
  "key5": "5pw9eqrBM2fSrV6A9iwYu9a1jTJt4n8vt6NfGzWdt1JbqDpLHoaGqKLuGC44guSM6oz4fLMPEG1BjBrgsnkGnnJu",
  "key6": "3TrV2styG2ZsG8Sgh99BRgZgAdvbo9R9x8E1m8SrVq1eA8MdhzZN9wpaXiYVB2JUsqkzLqZngDuXdYeAZQA6wp2v",
  "key7": "2ee5pKeJseEX1U1LPjw23bozCNLDe2B9AKsxboZSfi7GNK7gJHS14Em6p6FEPDosCqNvvsB93mDZ6VzL5rMENNDB",
  "key8": "4cVDVdMmeDFubzBQRYgyzhtKUzk1GfjhPcojvo2H3uuC18ry4AyYsNwiVZ47YtZsieJYHZsP5MaEoP4tJpPdYjYt",
  "key9": "2E3F2KoPGAZWj6zqpkhF8kw1sH18WL5YMJtXzLFPpvwD9rYt1RqEdNc5UU3Hoz2TMRxTRhBXjC2Kt8LFCvyiSTwW",
  "key10": "5TFSBhXyV7U5vw8a9erFxSKLSHHwscGNDmuzPLaBqyDLokXhAFbnU56i5PEw54kDXgZ7JMgEjFiZocNvUgZ171fq",
  "key11": "5DKi6sXn8Q8g4UvGuPk9zAtH57q5NpRharXyoBPqGCAGoTfAtd8sU1xK25n8Wo9UF9PrdUSgnHiRWTaYF8HW3Ge6",
  "key12": "2M5Az6kngfxcMCmwTjVPjPLqikqS8nPhR4MWZfUvkUr3hKvSMf5sNaE1J5pucEouDKUg5ojn6PjBio7bspGufJds",
  "key13": "213mrgPhNq1aWZ2KWrvU4cizYNfKXeXZ7jpgJe6AsiGGR1soy5cwPucoZgii4sN4a9jZT3xsLtuvhSCJZmLRsDwa",
  "key14": "4AmktXBEyHb77t84mqAx68hzQBMV6rcgHg4pjeiocz7tLVB7CtWobGGaFd5cYoa3TNEhdQgUJ6V8aug1swAXD9KC",
  "key15": "39obCBTpskwdQ8BAs6cjQsKJDgPNChd2M6NaTrzpm4JwRAf5ifSH5T7J9KUdQtRUWeXnfGipFWoArTrKJPVnMx4q",
  "key16": "3kJuTqtqVUzyofNGzYZb8vGC3WxzYoxMfQKQy1rcGkjf6tq9Xgps5AfUtFatZ2v3fxvuCH4zCHjDqsxGAw6mdcpJ",
  "key17": "2MmX8yFSYj2d7X8wSwq3WRGcTNtZEXzZ8PmvYdchZU22rfzCzGAZae9b5xGtYp9tEqBbt6uiBvq9U1kD8j7DyYNZ",
  "key18": "2zA7PUYGz7FXFAbe3ZykwQzVZQhK9r3KiqjBQqQBJvaY4gamaGvFfa1H9DcXLzepTuLGhpf1ce2RMpE1vFacFqJH",
  "key19": "XEeoKfBvC8QrgZWh1dTwErUFZwrApgyawb5y1j5hS5gzmksqmyMhktYXn4BpjB5rk8f2Vog6FNcPnCrrhHxKa8q",
  "key20": "2UuoDqayWz1ZFC712DpfM4vcAu31qt488ztEKmRQaaCar5kEiFKFPfpTKQz7cXgZzD85NrQTGwty6saxUAcJFYfF",
  "key21": "Kh3SCXPmQFp948kAkLy6VdmNDwQqsv5zxvkPqMKhcjeLaLvJpqx4quCb5cDM554Ai3zS2DdL49QFD4kaAB3b8tu",
  "key22": "3JqrjhQf5KvkYxAY59DBg3kQyLMQe3uUGYq3NbRF2w8euM7WJVRorEhh4NdpTTvHFjbAofj63gw1c2zVLVBqakxp",
  "key23": "UgrHXs2HYsyZ9k2VXmqWZ9ranzTknXqcDNFdu8NiRUQ1GnYU5xRcGYkR4u7ZR2cm3CqpoPTM2grz44EGh7SHoKU",
  "key24": "kM713rkDBKzLM7C94CKE6CVK4DCBQSi3wRqi1PLHjpfd242dW33hVoy5SAUYXaoUUCT6YjrcnhUMknKaikKvogE",
  "key25": "4nfqsT2rCf8nZbiGpgSBFXBsUrF43a8nHoVtH838PxXaTxiHiBREtVXCc18ThFum6v6LhHdDKAWpXLkxqKBJqMAz",
  "key26": "3vWt8rYq5VGzNXAQVfz7iXQdqzCDSzMjbbFHzwEFfSa8z19d81XPY62tkXFCr39HgmfDeVjiBmsydmbJttaG3pYy",
  "key27": "2uXvQSbq5EosJrdvnTRcjGjzDJvXRMnfK4aPbXBJtTYCBbgiJFYKLkUHcGHeHXM6WUb2PV9Rk1KCvx8G49UC7UZE",
  "key28": "4cBupmQxPGjyN3QnEtNShizhJ82bAPsx8xafhFSfFVTuhzn2iY2YKyYzq9StJz2RSjuamwWqju7poAtLsaE1QaVM",
  "key29": "2JHxGCcaG1PRcsbdJBHD4dYxsqwMtebgYZLKV4RWF8kV7rVvTNazWAZdVWGCn2mx5nHvC3Qq7XCQjnhYx7ut9Yax",
  "key30": "5x2AemHNeKwcoYm4HpLozvvS9yr7FYACzgfRkQkMLEBbXPBFGWJfrBHVtdHL5juXqEPsmcteNz7nKwDi2Ny5JkH6",
  "key31": "5rvJDuW7uYVPvSULMGoC2J9wLip7z8N6mWWsk3YohuYFFcJLbkz8A4BViMeokEPtxJjfJZmLhNoptvKR9MWvBnmW",
  "key32": "4YCY4PUCcZwLHNgThd4viPYzG7fNSBRAjQSSc9duFv9omfnLtkQUxgF7yCMWYXNyEjQYXNuVkJWSc85pBYfD7RJ7"
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
