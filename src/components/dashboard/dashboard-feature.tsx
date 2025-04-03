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
    "4DEkDZCQYTHM8iLgK769k7kJaafD9KC9e8FnPTHiq83v7bNdPbKAmJWFgDR8wbuxyK325uDwtPArKuGKPVqHD2ga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jihgrty2597dUo3dhES5XyhkBK9zGGN1bHFwKKMhRuiTTTYWHYP4M2udc3jskCveHPYnaYVrVHb7M81VAneEKSC",
  "key1": "34gFe3LDq3Rr7Jet7W1KeZEcaProMmm3SqdztpV1S2VEugpQFoJaJfrdKvkbP8TahMmDsUtPhD11zF5CwJjXkToa",
  "key2": "FY5xN2zUeZsjps9HxWtism7svj8FK5ztDE2UTPrqWpBXs9qxgykCBTVBCEjgPoHKgo54PfekHFTkwNjB4TkxLEv",
  "key3": "5iX8ZVgqptu6K7y75je5jT5PUC7Xow3XeXCf4R7xXMjesHFn7UyLPMaZvXQfmq6HH1Udt2n6DKGSqc7pbCYmp5VX",
  "key4": "5pM7aFkgKp9964ysTgMCFm4ntBeQvyeDwHjK9oVfptKEULkoETSYRxjiJxoLYRZyFDYHA3Q93j1ret6WPwcjGspE",
  "key5": "2j43we158RzD8mD7ee8RgT5XsBUiVQsQQDD3jneJGXFBTFXR8fY1r8MT5TCUfYzasWXMm6XLQsP2qf7Rfff8YQhD",
  "key6": "3kkqGupDmBUSaCNzrkpL3CWKpAV97aYUnCnymo7MQDbD1zHpXn7vXGWTQULE1xgehMkTkMAXaRg8MzUu8NuRAN6v",
  "key7": "5F1gcMmc51xSD6F7g7gvcU77aLaFVDrtJCLPxnHkadN1NLY3HnHZjxqJVrmPA9smR9QyBXYeNMXQ6hHLH7Forq55",
  "key8": "2XSCxT9UHi7jAc2bHJC7exaWGRQUNHvGJNn9t2oa9BKiJDBujaWYZbQjNS8QidPJgUQCYFps41DXxnMnvWkKLRsr",
  "key9": "3mCDaATYLy5GWCBmg6KW5zr2FyXJNTDsyM6iA9kQ2hLMcj9WZrLAUNwcf3SCmRufc274a7fHn2hPnLQ2RDBUiYwG",
  "key10": "2xTwjTLKZs3biqtksX7bdXZDPd6ipKsJXxYg5iX4NSsayCpXECsgm79pjhVmc8BxMWggECBLRLVB7qcK7FQFQZSP",
  "key11": "4n1RTJcs2BUwETzH2Qtp1V897RpdnjiNVjQrcDCD6XyMobhsZDSQFS1rYyb8R9CG9M2bcEpNd1aioX2djpzU3rNi",
  "key12": "2QyP2UupXf4berBi2ELvzgVaDjzXXNNSeJAoQVm3hwdJyf1WNRK3ymFKogswYrQwD7pEEfkPwD5GbbXJjzW2AJ9c",
  "key13": "3NZhnnK89UZxQahRVRPTpVCP9MXCjFYmsbegiYijiWt2wVGWV4vqCegrBMJK6UitdReTr8SiaBnfrBbREE4GaY96",
  "key14": "3q6XXwZdD79gGRjPVjoCtUUai9pCryoEJb7X1jnr6EYac34dbU5674JCfvB91HD5sSiQf54njEAUW4o9ECAGLj1f",
  "key15": "TQedsS4LTgvSPEx93NbKGAx4BXgTFPnB2hQU34HaECABv7fxeHuqpWWFsdcFSGP1YjWapX2Qs3V7KN18YKDLTEi",
  "key16": "bmYCUZiVeEvhSPJHXgKeLqNRex79FapHTkexguYBWVJaX2mHpcUdFoo4iX8CBXVWKjyMTnbbW3VpEYLhceTt7Zh",
  "key17": "DVQ4ohz3wDgBX9aRCt8hSnB3RLe9kSQLTfgy3LRNXDKheYErp7itsJYE5SBDXum1roLyQSNKsS8JjASx7GBx1ak",
  "key18": "5t5q5t4jheANfYTMhcQptaEwNVo3WBRTib7gdbzZ7du6k4to2DiqxtUQyAdAXuqYJuYfPakLKPKm4bbUd6YB9ckH",
  "key19": "2EFuMYsugdFWvaARvSzAivqxcDPXdjkdP2gGWBvUtfEhb45Wc3mCckdU9HfL74iEFVAeQXgcAYQCp5kSYhY12iEf",
  "key20": "2QjAFzWypTxjKTkafFc36mK3fFTviJRK8J1qxHeSL5GuLEK4GiR8t4VvaFbW2eJsrWSG73uLnKoE3eY1VZ65mY4b",
  "key21": "2mxDK2Gi8mpkVxZZ4EQmWEtZaG6ypaPp63kQGpLfTtSmTeEgbpXhgTgAbvpBKTtzMe6vB2wcKT5E4Rr9wG4CL94V",
  "key22": "3xQ9WZDn1ssKkXso1rgRUmXyyyMTdRQLd5i5EbUaYL1mLhEj1aXUCRECNEncEwxWNymqEt5DnuYaLaqZweNsuguN",
  "key23": "4L89BrnpC6Kgvq7yBsZaK5773En6fJmZFMYbEwExFubvaJnp9s7gp9J8SQddDrHrjh3m1E13gkedZNAzrfGi491r",
  "key24": "Tp6MKXeUnUf9cFfiF3TH8bPqecMZbgg9c8pFp6nV9P5sKeomzkQHcwnN6jng4oZAm8KCcN5uK4tGCHWXTXjDdJn",
  "key25": "2xS7v1h9WaECFwBp21TGGAgDJZYZBJnnWhNzpWZ9JqaQEkcvSSya1kUUqfx9A6qXm5qAzKHWoCPLiB7Z68So9xYn",
  "key26": "53Pkn3CUoq1DNevR2WUw6RJinYQKzwmdgAhqM1CjFvjjBZtCbFDnCN9p9ESVB7P6QT3pnNaB6cLbwDdfyBXM1ASS",
  "key27": "46241RRjw8djxwLHbRNL1WtqAhfMHBghPciK6ne8PjFsgBxUfK1R5erYujCdymNTHiWsUp2SAPKE48oNhY24i1hx",
  "key28": "3rMm5DCTcogKbfghE4DwusxqcVn3f6sEdGmjHPnUYoieY95tC4mMZAEsjxsoPFw2MQNSguXqdEwnR2Jy6puFYZgu",
  "key29": "5VxnLAeYRjj9ZnW48b2W6zbG2YPJGRYA3DgynF6pjH3nHz9GchAEviCqv6XNmQW65nwmet3v9c97nXJU8BzhNdpd",
  "key30": "5BYgbdgK68SJyfp3qgVYuHxQTjVvSMdjg5ToBVBzjjG3VTqib42TStSnD2qVyfSBijVU74J24DkbYadx7CBQzDVT",
  "key31": "3PZkErDUUfH6dHgDoL7UFShBedizLE7WpDdrhF9csLvoK27nxGw5mHLbd42LJAURhpHHJkSwyJoHJborUropnzi4",
  "key32": "WWRfjGhvJ95N4mBVxBehLXmEWH1vwLHHa8WvapYAHBhsgRG8xb4isoMEJk5BmNh2mg46rHRqfqsZGNvBmoNvK7W",
  "key33": "5iufuvSdf592gwtVPp4xcbBhevUuUkxzStxTLnoGomAjLWvnEpnx86PEL5GXw5kib6uYi9oXCnwy1UgtEfqb53rT",
  "key34": "5P2FP3kAMKELwJVBZGbgVXDmytNtaeU64dCCzHN2rVqnLRN1pxRUfyGJELtLkmfqwhqxSKDVoaRwm75osnfJDT5G",
  "key35": "2MP81pt9zpfRRSgrCKnR75rU1GuRFanUhvLrqQjyNfD2t79pq4bryCeDKPDtsPmr3TByTEnKJPk6YJ7Q9RhcTTtz",
  "key36": "gYa7gQQqsJ2iZv8bX6LYZb2C8wFbi8WZzs5eeApLJNnTYiLMM1UieDPAbAsfcLG8PLRYswrfpmixoYdKocYgfmD",
  "key37": "5gbMGYLXaxfrFQB2mXcTqHFWwbGfiPR5P5dfSPU5Rw5YvcvpB1Bq2tTgWwXsvBVQKM1f2JsqEXLPUbKnnFzum8zH",
  "key38": "3rwVWJoQpKXUhRXkPeZCxmMStaHMkP7xzsGTusdJ5LjeF9QWJYYviYr1KoewittPsHQBE8GGodDKfJWzaLNVGLY1",
  "key39": "3WBXY17XDq7QNJXugMRbZxpPZZ3QF7vWbwvy83pKSgoRqqrwY4qyGbrSScbYk7CtmhHZCM9y4facmwbQ1aW2n4rW",
  "key40": "2oa2gDvg8Rnfc5uLbtiCvYHLn6Z41VN768JxGyjTLTjXjoJZMb2GbrZrd9oyim6gSxKvy9XzU7RZSqG7SBQPcnHo",
  "key41": "j6Zz552kkXWT7WwoJYDFY6RtYRvse8vYNBTmQNG5JF1XS5mKzrCtAKuYzXaSgWyjSqWQwY72tqJdXofa3kFE64j",
  "key42": "VW62YkNdsAeWRbe8QETUSdv4aB1D5b4AceRv6k2QkJQuXx8RzkeiD7Lxdfaa15Cd4vn5zqXuhwwDUWPqvk64GK2",
  "key43": "5PLqG1A7KfXSVxLYgQfnAd97UWjd6oBBn8jbZ1xNZPUgoMm9iGBLg9CVJoK2LDUCeVnUiTNDqXVBQQuyjG9zqv55",
  "key44": "2owfCBt5TeCrGerHwXgesEZbx5Bt2Y7uCk8ySavuSwRZ6UBCFaCjBEFpwLQg9JAHZv7rycZzhT2NcYsgXez596g4",
  "key45": "2tFB3voNSFm4R6KYj1LkEAowxE6GoTeTP5t6Y3GLonesRMa871Fp9zamkHTeky6jpKe53hyBFNo55SDWPz2Dedj2",
  "key46": "51WXXcA1DkvDYPHNHgthSLUC8HNtGsWTQeJbbZ5YBMva1gN58nAiS1w4q4H55N7SHcTqaEAFhf8qHhB9H2uhZ4ww"
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
