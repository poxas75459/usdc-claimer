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
    "4jsfmMHntjWWVmHZ258E76zgDNsateiCEwUpjS97vzh5droUicryb64eeEAcbhsQiE4BvLVyXpuRLYDQ8xDRESMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dxuNwGFQACWj67ZEtgSe68NtZakcAZ25JnkgCV7HbUwmzdWqJGeQDdDzg2EjuGNqbNJzK1M2qQYzNJ2m4X4N7cC",
  "key1": "MZc3xy4YpbHSN6hSzMbuPZwtrUKBmJP3Y9SgKYDshEAEDvFkHaJ1mUzhac8vGdbWCNYUJc7xnizkrMm5hErZzo6",
  "key2": "64kJJTkMZCetyZKwjqBhWkPJkr3gMLkxGHgXksS29kMg7A46wTcgqfiWDgDsbdT3qCSeuLhBPnJTZBZWsooRXdW7",
  "key3": "3SCysm2BNnkiABoqkTGKcEYjL3vGTf6r6PULc38ytqz3vyjh6r3PpEKLxQ3tTSyJ1BFLdupqsNwLXxrJeR2Fynhu",
  "key4": "4u3RTyXjRYFYWxYyteZtwLhHVrKB9RuLFrRfCgU2dKZvmkt58YHkxHT5gaFY8kFZnFVZcmTRRYbZwa2eFaL7dxfE",
  "key5": "22Hfs8PkTvU9nGxLjhyTLSLVUXS72SLcgTTHPGdcqG83gVf1j7G6z1TZgwdfcJb5es6cXgggeEk2nxcjyCTSTPMo",
  "key6": "Cvhzq8W2coiJ7FsrujxSVAMcLQHXkSqAaEZuVvMfaK48iCqsGgGPYTiXcDiaHFZD1KAKws1VpgbCrHYGiSfk434",
  "key7": "3xAiDyhMQ2gJLhNicmKZaGaoG15R5c8KyyDa2L7hQffqVRFZUAQXRgp7Sh4crhvnEq9ijFZmWSPN7ZqDWWE1wZps",
  "key8": "2i5pAL66ghg51Z4zd1qRiVvQgPNmxtKZ44pCEU5XfLZGtyxTbnyF9hJcfUUC58gXxAanEvXxSmNxb8kahSXhJMoH",
  "key9": "4gRRaJfNgHQ7KxEPQ3twmSzFpJiVRUq4CoFXJ7gbLzDTc73LSSnthvTDoGGpeqpKuahkp4jVCEDNkv5KTfFZWjy7",
  "key10": "YUrDM5r5ZGx1xfBRdCHqbtzxMSbNGraQisQQZjY5y5UdXTJBQWYxX5EHxgoTsHnopGUrtbhLmTEmd6NTVh8y2px",
  "key11": "5kFiGTdtMvNJWWsag1oHfdor3npyhCaaDLkcXmCXb2h3cbBtKNq51umKEbARkkz93L2TC5Ergcb1QdmJGYKuFCKj",
  "key12": "4XsFKq7ZM4oWWhDkRsXVVXwV5Z9wahz7MfoF5A4NYRbXtykNXdaxC81xgZL7tqSk4EuW56zVqNyMZTjrTvGfchMv",
  "key13": "5VuetypBtw9yVDPqF9RMRjxaGWKYu8gk5Ftzn1Wdjnf63WviUHDtEd5jB88M5uLu7aQvwHoS7xJNQyUrKQh1eWyo",
  "key14": "2RYvXpEv4UyBEa1btqyApKrvRcbPcfr8Wn4UuWmQNXNZp7wXnBPUe1bAwViewjftxY3T8z75MLCkA4iFup4LyWMp",
  "key15": "3ZKm4msmSKuYFtdJKMkZyy49QkUMCuTdpu49mffqicozR2mg7YsmwQT2pdBsxEV9macr7JdRzUsomQA3C3oNcr9a",
  "key16": "3jr23wi3E3QnNELdJcF8zempkzpMMbsbe5No3udGmG5JERm4Ewjb87fgVYw7LDgkjvUjCFkGpkFVEABpqKyb4Pp4",
  "key17": "5oTZUs6z6y9YJuUo2WgEAugiZB147PUW4Xno2KRVeCBAnjWHPAR5yjaWEb4Ab1vE4vsAfQHBQ6EHXjxSpDq66uzC",
  "key18": "57v8xfBbg2VZJ4HhyVSaHUwpo3wzUBvsbafTpQgHnvvhVWYYGnz8kXziQ9pqw5aLQkAvzq6DNizpJyLoPRZtwUgS",
  "key19": "4hceJwjAHDSS9r1iw8U9XFMk752ZPhTHSVxo6aqJxa9YZmLMfcFhYECQA3tHb1RxGZAXX4aBMgmZyAy7ARC2SYqV",
  "key20": "3dMabF54kybgRurPW3BHPtgjSrTg7rGFmit5z76asfG7bYw8uf9tGVnbUoZrnUG8pkQzb96msP69wA1RJ7SVBbKe",
  "key21": "jhcB2tLdNFBUMtL5qutX3DAxanhBwmjZ9SrF5C4BZijALWgTVEGee5cjk1goBJF9JjPwWdJj9orfKzRcxKKT2C3",
  "key22": "4k7ETWsbbij9XBHNthuBfw9KrApg5E31H51fZW8VfkR6XSKEv4kysMdiPVviQ2j1hubC2ZiX9k9kLJZgcUqSq3jd",
  "key23": "2MzBdv152aUHaRH6BtRog5B3YnumWxDBX7zszr3J67xidvZiWscBrv13zcNm6ZaFnmJriqSyNHJcmzJbz9mPwaY8",
  "key24": "2haCm6PaF6y24N9kPBX2L1U6Ej4FJtRSvVtmne8Y4fMn1mGKm4ioiDRHDdfWoTNJuLzeZox3pubJEZsZNNj6ZmrK",
  "key25": "5HaWYDtuwWUTJ7bw892bEtpnr1RYLAboFUxhCsbiUG42H9GpQm4yJfuWTtXgTWcc3seCn9ysZxw1KbcMD8QrqHn4",
  "key26": "5QkAmFD1WBAp8LeNGXTuyd1prPERjSeas7cPLwcptRUsTNwYnXjgxhQTR4XhhksdxQeq2atvBJ2sBjpUq46drHmJ",
  "key27": "5F7qoeLZ2VVPrC8Ln2jTeqJXyNLYguzQPUyk5qKMz4R8Kfj9CRXTvB68NRnesJvtyCGiAhhKcjYSf7naGSS8QEZm",
  "key28": "5MV76s945PARy44usBqeeFmuaJF8ZGcPddvLj8JaTNEtZWK7QFGdPUgZghSh2m7Cj8TNWvhnL4ykEC59hjCYXvBu",
  "key29": "4jokrVLvRF9gAv839xxJNYi7vcP6KQ6yM7SXf5M5bytfPz8VvRGDVcVwGeXkvUrvdThdBbVm6VhS2rABzzYpCzCZ",
  "key30": "4d6WBgoWAaZZQfZh8SWKUtmb45nXyMoJwFRgrwJxtkqkgLeshKtaQAt8ryTCMHUsMYd6ssHtDFJ1TktWuBVNYhyi",
  "key31": "2qs1Ac6XD5rq7VwY2SshM6fTwZZ1CSLnrXnxicQ6NdKVTiqngS9J4qJHgQF2DY1dXvb3DMkXnQcSEnZBr2MtWkYY",
  "key32": "4wRjxN6eYKSWTjfyWEvfK8AB7L5o23HsoGEVmgaVdnZumYBjyzR2q4kphX9edxQwmDKDLN2FJPYg26YeYiHikcfH",
  "key33": "2vWTTeU8UB4CmCJ85Ff8QVzBKS6KTJULh1HGykCKoSjGQxvohZQbsApjnVFc1em71W1JSkXeuyQfj7sosAFRs3Pd",
  "key34": "55nWW1TqTTPb2ab8xhvRa81xSwjYatfLYY1WbZYkqms3f6EEpWQLW63xWB3fSFKyPBmWGM1VPe8AZ4vzqg8fqWDV",
  "key35": "49kX6Bu8ko4NNe5aTgrRr9MNbv92S6gymqZ74rGRgBCuWGCTdHSGVU2zfNjhBQyxAsS9SUeDoCtRVE2fuqFKYuZc",
  "key36": "4pGbGyhjYy3BhDQpTprgmJWZJrBmxm4zyawNybH5iVccbcRFJBivHyj6t8yrv3zhANfTZ34Nz4V2KzRSiSQKiebe",
  "key37": "3BYCcWPXpfXWtYBwPRj66VKorQzex3B3xW7neTctHtUYj7jDuPje1AfEXSuujLK77o5Q7MDgT9cJ3ugMVAePxeud"
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
