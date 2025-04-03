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
    "5KzJEfhK1iNy6v9HQX9yvMgdd3mArc1EHZyefy3TcTRzXtWafu4Lwwqt8gTS8FYueZZ263taykauPEDz44BBJtwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y55N8f5MAEcqeaFKEmM86fvYGNjc4PMk4ovYieXpkz6Dk6R8zbKKZVPGEtqnHi8MoM4QJGtEr3sHuHvUreAgWy4",
  "key1": "D68mkgxQYXVSBUvLxG1vgVT4YrZyYqiouxQysCGwfsefR33UoKh1tgaHG1HKadBrdgPJXYtx97ayXqsiLizzHon",
  "key2": "5bgUAzLYvNnFixj7C3Ag6MPkCSy1Syg9s8GhoxqrAA64DffkgUjv7zvNHqoN5KXUJAVTJBRaLDnk2TXRVv917raw",
  "key3": "3QWLk2b5G9vzqPU5uo5ZASsdcZUUqFUHbdKDjG12gQ3RaL6d2N3351sRwAjk6XQGbXb1H958L2eVW3bwspMFAeKy",
  "key4": "4uAr9KkN2rAw6tozpyY3y6NX8X1PySYb8hmavkRpJk2iLjPLqZuQ3tRJ2UEANQk3voEAxvwvNMUqDYcfEtp3STRL",
  "key5": "4Ye54EpZ6kDZgY1HdYndF4WZWYS3byoWfuD4hgubpkCzVJpfqEJNwtyvAWfizRLhcPoFhwbzTaKEfFqsrKD44hrd",
  "key6": "3ay9PHUXQBJeCjBF5485M8DTCXAWmP7uUcBsejn2TTesM1pKbWG4PJHyyTESYBxsHXcKmftnoE3bqa4SVpyMMay4",
  "key7": "2TQtK6YiL7tF7XThTiB8QrTmHRRHMD83fJLHyKfkBqiKk1LbA3wNPivG19ZW7Tf4XugzbHUeiMTDamkK2Wu44FUt",
  "key8": "5NM4d2s9t5YshispWigkfpaWoNz2s2qWadPpiMpsa8jG6jMEnY8spcy1pxhUiFaQKcLpp6CRwZ4vM8ftDv3e5fvy",
  "key9": "3m5hrbURBv6AgUyVWMR1SxALHZQpPeSeQtcd6189oU1FccaxeqRuqs3sUq2nMYqa1fk9KWsxYjB4Nkx5F6RDBRmx",
  "key10": "4FV2KRAB1MkqSMQPUVhJzavPJ3FBsUNY6xfbJ7UYqRn42T6CG1xVWu4iKoAZ85adT1zL2if7Kmism3tSLQb6DQAp",
  "key11": "2DWKZH8zZ841XXShCR8Jj1F3RVgXFLtzpYdZvUy67EAAGdc4fRdduGoVCzoteTLxAWUQ1zYuvCuS3k7tNSJpubdx",
  "key12": "4a37Q4hcyQ2JwNTtby7ccywwWBV9bCLuDYCRR2VEvgJFThVXTj8Fpz9TmVQXc3kidqyudgXJF3hZtGsWb1kjAg6",
  "key13": "4tijiMPZqnJLvQy6EdQPDPCUbtjMtkcoW2RAUgR6mjFgttfuRmocycW7pUoAPuHjepTqU5qextjnMj4Ns2JekSRF",
  "key14": "5qZwEyMjLwfme5UFSTxZirrfJPKoCvLXQErBFwtGyxJA2TS6jLj68Mq1scWRZYwUcQoq3N3QbGxXjgdGCbetZJCV",
  "key15": "b9oaZorsJ4THGPcmnd1pYxoSFWJ36oGTurb1n5ZcbYcgWVkRv1Fc2kZZ5AGFc3K7RAFQLXWLcTY6c7FY4DP3bdG",
  "key16": "3Nb6DMuCpdfJwHUf3hrrxDWq3Ss2vqVydzkUwgVi9y87L24gZxj24c7LGpgCxsDUTVEhzzRgo3XhXtBvwijoRFYk",
  "key17": "3YLYjHFEDc6iMCo7VXiVd1Bjek9b4PUfNR6PBy79Wmk4kVYL1fCw6YgnMmyvQurdrC8HE36TTEC38MV3eGnPm5ix",
  "key18": "5qgy77EvZrchm42ZPRrhBUSnyZquUQK2gM7Bm2ZP7eRFppDTKXoDPaxrfLSKaCQWGUgXZPoVfWsfvH3pYwUntX9k",
  "key19": "64yu2f4rWsUUt2psaMvUjm7Dq9n2WhyBhy81uspnRUEPemB1cFBuMJtNRbTMGyNEzo3BL8BTC1evHYUDJyk7ubMs",
  "key20": "3g2nm6AN5L6ksn1bb4ykGozU355nomrHg2Z6MjkkghUPF4aSuj5nw5ByDr58VWnuKEHj5fEFnT9stjTMcME54k1C",
  "key21": "34Ev8wgAnAVPXoDKcU9ZntJP46Yhtrkq36NHKV8CYw9e7XgkC9RGCSm3iMCzJkDgArcjJovSEZ9ZCfVvrEoYUPC9",
  "key22": "2UKKsrPt4LzfhcgtrHy8XGmAcVchYwMRoyjEjHbBQdYesQbLM6CsGBY5LjUNwDjYs7rMrN2xYnqezFDTdjwK3zGy",
  "key23": "4FndEBoj5bkRZDSzwqzZpfPqFt7kiAUSDVNCgjeTWEPFXChY93viPVARG5bGynGMRZy3ouJGocWJfvzwxqBkhQW2",
  "key24": "65tfPa5vSZ89Xsi2Yfe3zC3a6hz4328Z7jja7d3ZUwQskpYzbnCuuZmaWfcrLh5jVd2RMmjbLTbQaxiee8jAfS8t",
  "key25": "3ha8Y4gy7bFmFL2WeARK2fxyy9Sy6DcNUD6dJnq5tQfWY9Vdn1ANhoaCV572MY8RoqvJGTwAAtwge8M3SHbKJrVV",
  "key26": "4Cb97aMGwPbEa4i95y9SHaE7d1QScF1APm3zjJTfHyXWCW4kZ9dPJUDzaEZmDCQrhrfw3jsiMohD7xd7ZxSTksR8",
  "key27": "FTcwX2eZ7UxNJ56pWpM8p4i8ejvVTFFwSjMZrLRSaqvXGRUqa2KV7Dz833qe8G71mK3ARd42qoJq3J1YSJ9xU3x",
  "key28": "jvHdQw64NdtQgjJECZvHW8XQWP76ieYYaXsuyaUuqWU4k35uW7UEazFYeLgo8EnNzHM4H4xJmPibwWfH1sj4Hk6",
  "key29": "qt3MGxydLr4h9wm4g3dECip49mQkYwNjc31mfGoZdzhb74gquXXXS3QSVKfjftYv3ZPvLix1Z6i6Gbq1XTB9edB",
  "key30": "568C92ks8obprX3G9QiM6xFFFQsxhqqCTA96Qz3TsvX5rMa9o2c8b1mE2iX7c1x7bmU5bjKzrrtcug8tpX53sy65"
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
