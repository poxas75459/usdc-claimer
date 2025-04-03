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
    "6EgyBaukvUgUL8aciEwtFRvmcpk3dwKykTstjveQg5dAnDohurUoPvW1Q6Sup6LHHuczZwhucJkrs5mojtd66Kn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wiaehq6sdyj1ZxfNTRuNMpceRwU6ot5Jko9w4w62co69afeTwEmbokRx7R6drW7MYSRpaWgfkvFq5ARE8vjNbzf",
  "key1": "4aVqFFapW1adLeQsmYf7ZzU7VHdB2rec9BrF9iniycWKw1TTmgF4L3Kxr7oYLcRPkrWhYJZ9c1uS13hc9z9KJ97f",
  "key2": "3GxTMhqL6CyqM6obGjnQYYbPmZQu1UZf3mHqAVpcyo3MW263JvdLfNVPgvy9vj3EfgJTwDGWbMCE5XVL479x4FK3",
  "key3": "5fNLatMFMaJnn2j9YdfUUtHL1jfdyUu4UiQ8pzuFeGQgcE4SkZPFx542VjTdZtkzFpiDG1g14vchyouUhgmUX6sj",
  "key4": "4gdvwAAhDkygWSZuq4icZaQhtCQ2tHY3oBuwboVQize9zc9qXfhTKNeqGeAQ6PQNgDPMsHL8PGJmQATWy5wD8nkN",
  "key5": "QZUM6mXscTiWV8ENBNtkrYmRndg93UjvRxt5KmX4CzhJBp8orFrioRv8nqrk1Hpre2wDQfPKkBdFHySjTXnjj5v",
  "key6": "3jfBXuUfFbDEwAYdRbkfFCDkmk2jrC56dNWFYdHUDiZD6FR8fVsKwMTCqj6kksXpq1zsMWHFMJkAgiEQDrh25Hn2",
  "key7": "5MMvLnZMAwA3gxHDxHUVanwF5BBeYdaH1hF6ysHejQT4a1YD5pQGtKdw92ETGnwkMnc3VqBe2HT8KwXdUdLdMKkB",
  "key8": "2DVERrpJNTx9iHrf49VGiQvsKfjfkZ3ADnGFuWWYwXQ4VsSVxbNSW5coVfQum1Bn9QfaZLQctBuNxgnsp17wM2bh",
  "key9": "67eE5EnDy8YvjGmSBAHhxkpMttmzvmFf2dW1M64t8XewsmKJTPYrEXWMMWRjCub285456H82v32kAkYULksBkcbz",
  "key10": "93yn1MKtuCLFB3oBAepHc6W1JuR4H6kYPKQokWkdgQA9sTvT2HEnVCLk5nAdz7XDftu7LpJTa1AfE3VtkGprTJf",
  "key11": "47FL2kzTU4hgvtUAexVW4GeDGQ6MsDMUZUfLe1kJyy6xD6mKYxamVG2URkBBD51qypp8qBWfPUhkvZD4o5DG54Gt",
  "key12": "57VqvwWgnPbXYtTaKqRjg8NNNJFFYnMewN1JCCdvLKmPvtSB5ti1po9Ju1LVQUtU4edDZ3DAQgzJnXLvbBXD66Fs",
  "key13": "54MuZk9RAkCXovBqHpEgtmq8kNjNivzb83iRxAZ1uLqWmNyR7EASY6jJzqywuDvtbxYk3mSSxgEX2Qihb1msoo1",
  "key14": "pY8iTh19P6fMyVT8BnZrdo6Mox5t2m7JGk6d8qPoRq5tMB2JBvjfRygrehry73AsvnAPZpjSwv5p8bvVCeZ8rQf",
  "key15": "5qubuCa6NguKi8qFS7AJcM2XjDKjS4ZyKzExxgFHekLto2fi5go82q2frsUK1ECcGN9aCqNCGjtat7Gvwq74uWLK",
  "key16": "4KemKHWyVF2JE2fJfHbGUnxPrtjKPuWSCGq3emPYodEB66mQCiKZ5sbpWtqS9wL7sfKbgT597jqjuZR8SZfJSdPB",
  "key17": "5EJZy6mPadD9fAWYU8so1j4oz7CHsWh67EoHqAf3b55JtDvmLHFP8WgdFJXb2vpiazexX36MeMYuc74Tr6cogVMs",
  "key18": "ekoGsqhW4jTd8M2dEWYTkrG1nyafVNB9iazWHE6cRDbazN61kZWfmQ6KR115Ed9vtR9ND1dHF75i2L4h2ELzAmW",
  "key19": "4jqN1zA425M7z5h26qMydgGQp1azDZbkXt6ZxYCAXCinodPy3iwqWN9X6YHqsWq1miiHLtNgWg4QZd8bLPP5rArf",
  "key20": "47Cm1e8R8BkDziMjHXuQVgPCuPTWJNrJhPKL7E8iTihNxKjwMxMTA8hxe3rKghGLBN3tj8mwnAf3myPCiRY3SQD8",
  "key21": "3maVRqHtb982NRekhiwpgfG7cziK5vJPyko6MjMTEP3THuR3zDgvqjbADHibimqhfucg8h1xdD8j4ndZdNDKCBiu",
  "key22": "37RofYFPgN9bsYCqgzuebXWzExV2AwddKa7ZK1hdYTNwnCnXr1F91MwSnxdzLjyzhDm1LhVtWEUAmhTAU3UoPfvH",
  "key23": "5K1MT1hoYhdco3G2uVUFWE2tS8Vsu3Z3SMzmFkhcAY3zc2x9iLA1L84bMkY5AtwfEhXq2zhdmy3vfuDzYcjuQr6U",
  "key24": "3tMK3hbTmSwmeNz69uSvNvijzCmzmtt843Yu7fKMABTMjWKTnM7njotvQZ5Ftk15Qy3A5aLKFTnwBxzRybuw6tX6",
  "key25": "5Ejf92WwU7mjv2pf29DyjTdFSnojW9hLbZNcV5JPXg9fZorwpM9FAdxB5cHJEBqaHaXfzf9FzYeec6kWaFvZYp8C",
  "key26": "2oxyuUWcfYi4xqZcPNGQ2ZdU59AzGjpY7RDg9UNXqKQ4XpGagF3QZiF3ai4hrzeAHKAv5HSjExSFXxf7Pecqr15T",
  "key27": "oABtiB5ZXV7PDrDgHBJdYAtGD4RYS7WBhEkTR13xUtWi5mrL9JGzAL1YVRfYtZppgpTv6a8Myxf66bJBajicBmG",
  "key28": "qBFr33XnYAsYH56Cz5XPpfi7UmprXFy7G8z7w7wJrVac1gogRwVb15JhD9YMtE9WYqyzuuNcaowZ4mpzrGHYqtV",
  "key29": "3JWzPpxctJtdu5wzH8MfvvtZy1Uqrio7zH43CdihV3kCPwPeQFCkeAJENKiyGV5Yt6kAE5eq8ApPwQcREMv4Kcou",
  "key30": "3KER9jn3Eix7XhASzRDSoGAFx4M2vCntPEX1hyohQgWotgtv7MbVY4W8a4EECbNc9monGb5JNNw5EyHkKgxiZoUF",
  "key31": "2x2ViqTTVV1LUarAVTMULs5dRtFcT8KWx1Wp8RfZkYpd9peKB8ZTPXVMrehSUuZkhnyggxmrfgEiaWij71sLdaBt",
  "key32": "3PC69mJpvdxoW6YHkzHaiSnP7pP3ws4BqKhzpJzwtTi4inJ4CwEYyVcj3iFDsio8FoGCSbAYk5u7gQJDnS3qQzJL",
  "key33": "36Hqnb61PoDhnJ3uJmMrn8vGUfHMaHvXCG8fBMcaLL21qjkDAEeKnNoSum462zmM2XyKtiAcDaFkeaehDvYj7zcq",
  "key34": "3nveZo5WVFdJwxx5CWSmAL9ygGp6q4vdj3rrCnvdvrKDGNT26HTse43i6kve7iMYTSqhrfjy1n6irYPZ92xou5wU",
  "key35": "3GQEqNUuZ1VxjHZHnBmFXXMJ4WQShnHRDZHADt6TM5mFTGhCqW27MTUi5v4WvaVTJcZDkvWcuBi85a7UYUbNaxkq",
  "key36": "LsVw48wHzKNKsfMMh6m3FGkA6eeXwAB2yeS57Aux7Lx1iNJrwxWZYefy6V1i9BfpwmVttUCUmHrWuTRsUg2J33L",
  "key37": "3LTewBkx3cj1bEiHhUgjiZSsfCzaTLj8v5KMbSzTxzERJzZKJLoaSrUu6ueukNS3VudLNtzDgojKEC55SEiuy1BH",
  "key38": "5enhvod3zexjJEAgQsxdhcn4gS9Lx4573qYb4nzMTfu4YWE1E7zW59TRYgd1nc2651J81aQpZpn7C4pJTiHJQaCE",
  "key39": "4m8nGmGhwSh6YP5nH6jVhhvRqA6W493Zqq4gvNEhQnGLTpqqAY2Rg43v2X954xio7pPfEPscxtRJNc9ntbZL1SiS",
  "key40": "4wt7jVF5snDCUdUmKr1mcFUV2xhu357HJepMZSTBTmRpoRZTnyq9mmePEmo7VQuQ7hAEKWWqjsGJnVQw12MmnkUB"
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
