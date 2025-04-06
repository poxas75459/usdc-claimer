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
    "5k3AfDj97BxmMqz3TnAYjTKonpvsvjVKR5QDvEgpiD4iyotPUfFHP8V7yjWWHysda4vdXSWHiwysTXrpieBoSeLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UGr7occrrb795GggTGbxRQPqyR48NLqhacvyNcGuigz8c4aYcG9ehTVdDDYsKbJ1GsSB89VRVNj6d4wnKUUSfS1",
  "key1": "3mP9Bhe1SJ5xkufg4JbFFBZ2fqYGXTGs7ZcRtwyaaL9uAVJB79r6ShWxBVuPW7ZtmB6SJ7fJgc6yeBrifcsjNJ6v",
  "key2": "4mA5BtagAKgrM6qb4LSxpEzU8EDsbxsnQw6a9reDUhURPux8YAc2QvyM8V5LpCy49B6QzYiRWYqYW2zadzrgNj5K",
  "key3": "GB2W3y9LHVYXaesEk5psYeavhwpqwniY7zZP9oxYdQ3PXoEz2yEsQ42gwyqWGQc1snf3r1tRyc1YMxQbVACxo6h",
  "key4": "4deTkmJwTuNAuakhL9UWLc2SDdTY3477fCnJVKAaMiZqMr8RoRMTzHcA55wHZoodoxt6U56KCboqyQBxfkPLVS7W",
  "key5": "5Zt3op1i1bnA42pst7VwSWkupms9AmFMVAx9jXvDDxMUKxvRECmJt5yAFkAnfPgRYGqPbEe44ijERd8uLmTavj5c",
  "key6": "2KstyGfsJSfLkxLZgdvaSB7dAxL11h9bpPmzZfcPGqAD7suqfmYwgmGb6UKnfq6mrcAshSp8TPM8huakmuiSfJDX",
  "key7": "NHrQN9rvwEGJNKx39f2Qe84BSuDfiG5tHGLfi1iNfMaMcN8VdRfaAx3uKyQsYV7R3L7n9uSHJSTyQL21pEXnBVm",
  "key8": "U5cJccANSSP6azoVQF2Nt2Gzim915C6T19sNG77xKZHKWadGeXQLKNMpTxCqcgYY6tepieDYtswC3njvv9Lww17",
  "key9": "3KoABu4VSznbJmf7E4cY1PMWvSfkEk4i7PRFQGaTKPUGeJE1DjMQW6ovB7CNxdvyFiYes5fvP3f4b9mMDxArooR3",
  "key10": "5ZupZ65eTtCYhsmuq4GMp7TxJs9mYZfqevnxGk2Uem2kEdq3wotD8XMnQBBMfLP6fBNZE9xL4c6FTxDFfZQeLH3S",
  "key11": "uB3aVKX1kReM3mGD2GxRAUaCQNXMzUhvXZQEzcZiZpXMBmMdZNgv38JPSTViTxeCycU36uxbyuBb3NGKKPskRSL",
  "key12": "3BQ9Xz8Ln4RYZyHXoaYwywGTzWgcX6gB8h4Tnxz9aUbC8oNRddU9KeuxXVyDPFEcho441Vmw8ivMKPMAoPMkaGHJ",
  "key13": "5i5qutFFejBe59sxfmCZs8Uuk3g2FZzyDoi86iBjNTdvNBx6NqoD5t8vDXoePJkXou8iKKavAZMsPytWHJ8cWaeM",
  "key14": "46muN1BTZMNGGibSdZnmyheKWDTgUi3fcLYsSWYGNqe7FT9JAtMsZKrxwYbzdH84btMXW9DG45pGEQ288bGZkB7p",
  "key15": "2PBxkxFFkQYk4DbbnAU1WBMYScVFnuaWqgoAnJeD28kyR5bQ1CJ4HKPYwXfr2phAuK3gTZLRCLsxxRRRZsc91cNs",
  "key16": "5VJG3HoZUvnkzGs9TVA7xkNyPxxYnb9CCSE6t8duukbHFyWauhMq3CjY2RDws3MZX3XD7sJgmit41ZkjR2JVcr8G",
  "key17": "xk57HkA9XD2ij1K2yzQxRiBNzDYXwoN9cQU37ntE7MQPNAAtS1GXfMSFVtc4hcc4sviH6ACVdt3MoSSGSvvxLup",
  "key18": "4nTSsppmBBojgbE7UDQcqNAioz42H6cFG2P92RahwkoNMJX5Qo5tbjk43b1FYWXGTLNtSU3AfUYfDzWw7wyrJ4VP",
  "key19": "nCMLXXT8qVgufn1VJJRMSKryu5MjFhJJnrrYvHtxvf7XGep7ysrZ3UvHf44zj8sPaintdkfxxeJx3MsgsY1VQoK",
  "key20": "38pYPU1TRRf3Vez41ZzopLhUCHrzbXdWFz4qo3gGuJJRmuqiEf9QaQx81ohBqM9QHgNAsoLjLbMNR8C7wGv3CMgz",
  "key21": "4BKRHzHtaKxbWSpuxJP5PTGsPkBb4sRC48mvRLBfwhNNNv8SwT9oHN1JZ6BVghXHi1aZc3mNKdyN3FxTRSgoSH2n",
  "key22": "4C8hYFAnwWn7mqpvzuq9MfuGJxYeHsstkmi2mi14QMRAXYUamQ5QAzLCAJRoKixKkmNENCxAqzownLSZxQiKPEpg",
  "key23": "3vsDD5m2oDGBKnhsqWAockSeVYpqMkgYAzEgrSzNWC6Xs1D3747cyeibdNCZNMWw8pJEYoa9d1pE4fxsemgjc2qk",
  "key24": "2F2XSvhufw72RUFEzJswvdBNpkfzB3b6Vn4WWAdgvx5qFqU6fyxTYBBqcNne9w8BmDKJMxB1hSvsNf3amzMBFLdT",
  "key25": "5QEccRhjWPJCoYmMPyXyAJ8RpmkhGQou33nS9uzjeLqkw1HKshesGEoZMobNHGvYmJz5RPpXb3tmpG2juAvhiaEZ",
  "key26": "3jfSkLqKdbTKQ2BTX62Xe7t9DeeJZTSjWtNTypjF9Wg75An3Emm2n4HPxVSonk9Ysv2Azf6xUZkmfMm1gtruF1Co",
  "key27": "3SqHKNYv3V6oy7e2mtZcQFPA11DAwnzvDdApmNjg5n7YYcvvxUEkCQMQcpqeX9vhqZmmiUGMxiKb4NbTQdiNf6Bz",
  "key28": "3LyKQnJQL1Dxx5ZS29EHWGkYphUxsM4RbUv47wT1ZWXjPccZFh55n3evvgmfDJHQYrLXd5oqgB7bZqtVpfPNp71G",
  "key29": "27hcdtzafLHhkgrtFqmenYc9VbAvMLAQT6sH7HXKNYkHoBY6YJxW6zHvadSuY5XzPz848tLbGUGC1QwCTo2unbEx",
  "key30": "2xwiN2UyTzkvz5k6XkLx81CyiKk8xhJJ3HCuTsZ7AAxtGrJJU7HcJByezfacgmhaXHQjCNUYBFV7Q7McaguXjBJZ",
  "key31": "3nWCkZrvQ1VpypG4CQKDXdXrzCjQjMGbMd5DB4mnns1GdFyFRP86eY25hmWp8NAtVxzqzqRAFM7CMd7Wbur1xe3E",
  "key32": "3EZsT1PWCFiNewUBc1zLc73mj4wvLDswoM3fzwLM4mv6JiBE2ADjvPusjrbA6eYjnk4dTjHVwuWGCDSBV93oUwx6",
  "key33": "2TPcV1YCtFBNyWrXdeAvhPZoPYyMs9A1yybxZ6QvHYnnzarpPJTCGL5H8SApdFyrPZEW4uEQi1YzXhaYE7s5vJwX",
  "key34": "3MfanP69XgkEWUGqtnjdjzVkLBoZ2PAsrYiTQWQkGTZXzCEE7zERWjycZFPK6k3yhxC94W5jS7LPV9KrkGhcbHZY",
  "key35": "65Lx12gQrekAT4GgNrhG8gMvhBTtPS6dMLRkdxDbvkB44P7eMtkbHgXasSSqsvDCJfJNkwi597MvFG1oNrNBdVWh",
  "key36": "2uzDrVDLJxuf5UyLabP7RHiUZuWmRfiWGAYDpVwc4NmmKNs5ViZYPmut3JC3VRZXfyo5PNGRxN4GtEv7BtntXtAK",
  "key37": "5iUZEcQcg9i71yAHzo2fa8Z7bUoTBoBGYkUVYVQhLPZY3KbpE26P1Wq8whDtppaPuPGrHSRyq5GEjfqypRvRz9M2",
  "key38": "iYV7veUzE7C135CMrfYsHwbV7A4WCwqXQSBN3k6ne9VvFtVjnULqq9SaA5iE7GVc8FPrDc41UsvXz7vAFYyMkkF",
  "key39": "35WWjaB2wZ5orxGqZrdJH8YwNUqiiSHTsqwy7GDG9bwUWai6iMb7nc6yhgVBf2Lm25iyVG1EQByT4SpbDcjXq9nL",
  "key40": "5mRz5KKA9YWF9wnDG8bRgeTdiWnoEW3BfQgjL8S5KezVv86QcR2b5r8g8CSau27kTwY9f133SLGZQiPqK7Jw4SeH",
  "key41": "2yAX6ybZRo2XxS3CwMu7EsVuNPZF36M8H9yrMYMpdRcYxvt4j2Z2seMzS72ct95LrvkNfFvTS6UGM9utBpa2rByN",
  "key42": "2bfjc4GMYe758pnYWhCp679FFC8XgcbLc8gecbAVbwdJm4zAUmUnRwfM4cxVFf91PGJQgVcbH7ShUBStBBZEKus5",
  "key43": "366iJ2WikCWivYDTkmhANNcLMq6krjUDEVokPvBgm9UappmbtDEX5Ck4dSEMhXXPzs6EVhAJbDmej3RJAmmHJo7J",
  "key44": "5NCXVG7zTJ3oE3ZBA3jUgV3KuUi4Q1i88T3QQSquaLhCntnZTkmswJ64Ef7NFAJD6V18kTxPVmQ8mLU4g5kSY8QW",
  "key45": "vPivQNnNvcVR94tLdZmP6HD8Nw9E7LkMNuBC6iyo6f4u8czSb7v5hJ8vvBabiDTA3PrbZZ3DXAKQ9pFsmhE8kF5",
  "key46": "3VumtgUq32ENfwV4YSXzzrkh75RsQWiRVzh5NwBpJoAuoUHfxaZxrXkkB4494zhs7MAWSttHNYB5usSRZcpMQpeF",
  "key47": "6n3pMTR8BhsG4Zi97WqLj5S8eGMUnC3Q63LbMKt1CM977rhSL6xM6q5yamiZp51hpsRSfPAcDvtkSb8FumQ2cS2",
  "key48": "4bhmTCFTz6AuQVqQMLuENbe7pFAaZVwgthkDSKYYUyMGyKKHpPtajbz2jmT3gH3BLPdaWyytiWkcboGdcLE5Voci",
  "key49": "35x22gKSPbqjMPnnSSD241B3jEDU9dr68mqBHr9pq8xuGGYdguCTnjCdhmbGtH3TdHAQJrwLkEb4gNgVFH5Ei6D6"
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
