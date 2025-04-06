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
    "3gGEJC5j47VYwqfGDWuvWpTBX3ELi9rmwpq2Cw8199tvuY5Ji2snEGyM2YundzktyHRAvCjWKUUwg6n45T1VWHBj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28ZjpZPqoFKaFCRfdtk8Ewz472mrDHzTXnACws1nxBhiXy3wwdjRquLTPPjWH9Qb9ALNVQuV2jiHCd8RusHqvJ27",
  "key1": "65wypnxRUS6UDsZdYZrN3RBCHtoVy4rYNrUi7z5uZp7XWtvpMxgs1iQ1Gi65X3KfscP8SmNB2CAQLFkNpaU86rvu",
  "key2": "4xVC7gZekxHSZwmDaUojVVEWzmdYHd2e9m7xup9VJctaUUk3xgHZhuJ8HTHaw61yYqZYahSMGtPtznmmmWcB88w1",
  "key3": "wKVrhGxo3zgNutTjTx93dvUxfFAUcEkJo8ZFRjspeneyNpimUt46fJM2SmpEGb7v3eLfM4uXojPZepXKDwaLa5D",
  "key4": "1GKqT6dQHxHcPAnbRU1JUieTK111Ywk7NgjmnNLs9iNHhwxiQ64AyvcC2Zi3Bnh1nmDPFuhof1oFkLnEAy2NkTa",
  "key5": "3ADVJtwuq8fa8Ru1ZaEaaWtWiM9nUhvYPovxLkyhEmieC5BA3rR1N4SkBtKALjUzYypCvM12pFN9dD5HNYrbkVEW",
  "key6": "1Q4dJqG9ffaZWaxQEZZA1PPd1BNe33pot6UxqBwMfye2Vmwa1RRRbfGpJubHZvdu5FJBCSX2rLZAQr5shqUsSRQ",
  "key7": "31n3dGnJcBRVjy2nkrrHjnBpdMRms9wbuKaFUrFP3RcKSwdHv6zdBcC5TvRJ9BQ66xR52Fs7uLXqr6gBDLEFYE4v",
  "key8": "2aYzGUuATiQMgcbBRPFE9wQGgu4BaxDyiZ85ETHNbC6X3JyHxq9DkH3WEiAkAo6P61ez2jtRjTL4HTV14S4L9C8b",
  "key9": "Z81pXmZZpzNjCk1K9gCzr8MU5DtFm6kJChBZKwTqe3CZgP297yRVdhYMzyzqozr3B5xBxmJ3UkTnUXgQicdQVLT",
  "key10": "564onfo7ZtYrUyjCdv3nf5TQzZGQdNcVByGiNg9yzdyXzZjdtHkYNpU8nipVsq61exGMYke3mkhgCxjenx9ekMkj",
  "key11": "rHuKhUEa9etRi56JqJvdgCa7vx84DRe9yVHjP4zpmUYUdM28SUS6X9zW2Rw3BqPb2sCsLW3nm1YY4184sFwv6rg",
  "key12": "T2N74116cW96zEisbzmvnDbtdaEgFitSVGVipLgHF4TxVjbkHHYBhLBr3skCSsfKsWBrxQcPnpChuR3kxssrEim",
  "key13": "5iRtsnTeusPLNXYqJGPrVcEaYWyr5Vs3E7xV2gt3WnsbJ3eAA1jR34mWZZ63rWo7X9EYyovkmMd4oTWN4yHbo6gJ",
  "key14": "5kZXuPBXuKD2pbFLKkTQRJEsNRBVEzSi8WaqGp4ERTjt9wX6RrkKeiywzbtLR5Zkm94jipv57FptBYBNV448kech",
  "key15": "58JXJT4e4J66LXKJaKhEuNH84SP5DFuXYCGeC1RcjJu4TUTxR12kHNcLFrTKeGU9sookYfpx7y5x6Mqqkzze8dYF",
  "key16": "5bQjucQKwLNJQxLXqTWzpAtNKUSeaiXZAtajo3A2NLhmWje4XEtQUTSbcmuL5Bf39mpFh3RJBzp6nkgcGjv2vX7A",
  "key17": "YK6DwHJVwwTwiQ8wUgPgkpFv7r4U2BgdZ3q4rznby2HZ2mj5gXLLFAkDiUYoRahpYqnGYcdi8cRg7FcPH1pHopx",
  "key18": "2eN2jC4t2xYWXQk7o4SWwV9tTTA3jXXggUqRuZ9SMi7LHnTbsaVzpwxTwdbPM9Dp9YBRoecYMqZSdnENLXAw59LD",
  "key19": "24HWkijZxKkMPm8LoB9nFCSX2u6pqJL8hQFt9k4ZTqxLQxbE2BCD96Ng9umyntvNCyBtn7x3ergiEM6v376tE46i",
  "key20": "5yEmTy1WpTgxw41HPJnp4ae7s3HbS1ufF1epWSrVwavp247M1ez5AXYSqWJtwywm6ukZYe27wRsAjTck6dzvaB6K",
  "key21": "jnpc3tAkk5zYzz2GAG1NZ7TkBSYUaDFPMwUb2uqZghU7AVaae6TSP3fkLBAbDqFtvWcrJNZw1HDjuxM5ZmJ2grF",
  "key22": "2kLBZnvKCEDKNKTz9nLURLmMPdQHtw1VXgnbEE5E8dErECVv8AA1wjj59dyRMH47WPx7Fg82LYrhjGmHsoRnoPv6",
  "key23": "4DE42TwMyUfNrAj7J3L7J4okXy3jJguRd2NSJ6d6Yo7eimTG7iFXc6Ue4cEy8qfcQHwMAv6Xc84keyaFh8b8fJZe",
  "key24": "4qTa9MCoJEcwKWTrNF6r7zv6QJ5AG7cXSxaLkrn8kL5W6wxE2J9iUENwkdPYBKj5PEWLTs31Y3v1i84NrCBeCWzb",
  "key25": "2RxMf6ZNrTtUVh5MPbtAtAgxSjZXnRt5KuM9eUeksx1q7cxWFvAA7tn52RyuZtYuYpjCc484NRiqLWCVEdKVTsVt",
  "key26": "siNE1u1LPQ8ULugxgAjQH8NhZCAPsdRadYQr4dLcJnC3Cjz1xaDm6jh13ZNoeDWB5wCL1nsZxUonTWCQPFW8EH6",
  "key27": "MNsgVuC84e6wmSpzo46K5gtaDj4XpAgngp1Yz4wthehuezxir242TKXxGYopgQuy4eoBYrt5VPVGvve9VGhxuTE",
  "key28": "KLHgesu4XF6EYs9SpxgMUPVwgxeFdBcvfjZMsxoWrmAAt2qEo5ByJThwxpErzBpmPGpcMGFVmetq7qmMw24CLmk",
  "key29": "1DXnAz92rBtooVc6SLDATxBSkd9wrAUC6ThfpL2ELup6i6G9AgdU8c5KRfJkJVJXmnioHUKvqwBcczTgW6MHkkJ",
  "key30": "36E6oMGedQtASXL3cRAePcS8awSMUciQxgbwUaJxuqBJ1d3ikqyU1aytrtqSsgvWeBPz2gtNaXeKnSk7RfSysP5y",
  "key31": "7t3jZzBZFyX7mumtpRgfLwHRwJbfRTTU3nh81wsKtRWS7uzyHpKU6aPD5ygi6GbGj9d4GMmH9fYprMfRuL1Wtbu",
  "key32": "3PrtKEpgfz3CNYExyApDXT6wFTr4JfuWRnu63ZQjRGQVYEUvkW8z8WGadUW81XQcA1sMYr6xJkKFGjmpsKpFESeE",
  "key33": "5D12USYioiuY6s4j2PuU9kupSaDwPnArPXs9KADHbszmorph8cy8z5MmRii5gin4be9aWaCZme3c6ZVdZ9R7St5W",
  "key34": "kFcYNtoy9YiaDTswTdxqk1jBPQ1btkMQ43ERTg1qntmzDBruHXcXMARDZb6rDjprPSgnjuL1Z6Dg5StA5JxJNSU",
  "key35": "2K9YEcphEAxvVq2kp9QNa8rfc4WyBAbNkeBjG3ec1QBoLDwSSrRaACVp6PGhruqkRu6t7eGHLkEuYkVwcnHWzTdw"
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
