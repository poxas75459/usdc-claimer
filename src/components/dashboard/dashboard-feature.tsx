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
    "3ZkrhV2QJhSEZbtH7HUUSN5tRpX4R2w4diYkBRBczdTyno2GeKH6chkNAZr2Taf6r6qNxLBPpmsHY7JRRwWgEerk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ddn9CBnuCjp86dKwRYDpCwpfA959edBFR9W7mHjRLzhvbPhRVTQNNEo5dGuwPtKTNzr6UqWcnJUHLbcea43sZay",
  "key1": "4ZzZwJgY9xiemKGQ4wE5kz8SVQQwJW1fRgcwFQ9CautZ7Wz2F6wHejDkFtEJXzodAutnJ7xYqLVSxoz5fJpu33D6",
  "key2": "5SsdNNYrZEdj3QeTD3ZkHK2AVGqCM8owjEvTPzgByaJzyqkzJYx9i9b7vPqCCBdfQbDgZMyhK2Xu5BDzsVyQSS1y",
  "key3": "2ujTXQA41JHwoQ4FsxCMUbt2yrR8w1RPPhPDyDiRmzT1JqaDweydFw7CmSZy3P4qso34EKtQGowmG6XvXJEfnRGV",
  "key4": "FjtZGaDfB52pT773ASGPo8bQ8cubfn1ygEaAXvyano49x1BATPeK6k5MVEGPPAYVr4Gbb4wATuGruvy3cRmuykT",
  "key5": "2nfvYHrPzGVrx2EgGV9JqDCxCHvzjjmTJY8mXGPxQBQkiEfRnsMaGsfUm9R5jUGpvmGztKqqUdHgv2t1SPcEMP1B",
  "key6": "3MRiNP5YCQxtHXkXu2oHchShTs5cbNqtwSPbYk3JvqbGiYBCDGTUoqCqS2p6Ne67JnbUQv9PHkApJniYo4TQNdqQ",
  "key7": "2Q9maHoqVTXFAoCkeD4Wc7iSrEVfwQd1327ifqr4y7tbd5DaKcvab6oLs89738NYVAFux2YaC37k3sfpomF3N2gF",
  "key8": "3266zPimJanrYBkFMkeMFgypr8ASt3Gt51mfWLyBLem7iiEPCcvJcZKHLSoY8UDjAT24Tr62pRUMkAybv8pqx1aP",
  "key9": "5Dso2ieiMNjXm3xUdrpuuMGobSG2ckUL5CEdtytAS6KJ9RAXYmJakVwG4TioeMzgUnbqWu4LGTTiKp2DzZQ7HDSm",
  "key10": "2vujk6ZvxbvMdqBP2AJ6cyg3c1zAj4KaKKPEqwjFgV9gnmfo5HHG9APxJUyrDkC8UWUsDUVm5nk2fy4Km86sumpd",
  "key11": "3ZMB61CsyjYR3YanMUfR4chj1fpUGMNTKrSdRwJRFLoKEMRZMZFWsQwP66Pd279KuApUj7GF8YGpyQqHYJMB4J9J",
  "key12": "2wA6K5N1GYny3nJy8Ck9PoTVhmpJLjQMuk2adAAHEZmZcnbJyGxnPqYLcmN5SUrgpzaSMYb2UionY6xpBK1Yqcrd",
  "key13": "48ATzXYQAtxAWNkUGYFD3UddZTGi2m9geFGuePKnnVvFTTTnBQ1irSnreG53sb7J4YGpRi8KeVZQn73H4Pv4WQ2g",
  "key14": "3Zrhw7EmWsUoeLWDqWyM2iA7cGoiK1LBLJqSHyM8zaUTXYavjSAKCyGwFxAZRHA9xVgeKk2UD56VGkhnoieMfCWZ",
  "key15": "2pKYVjoDu3ea7qcom4irVqH9TQ66LNb8hYQJ2nqxiYD35NJjPHosYzPyzVoJZBMqtLnyfeGe98quvZ5C3g77dh5u",
  "key16": "okmrfnoCVtARbeX33dt3jZXh28Nk9jMvTK8qnyiAztyp1x9U4VfdFaADhda4TqF1CxY7ejJgt3aqA1thnqyFZ8Q",
  "key17": "5proDxqN4hDuuRYk2DhGqDoAa9cLCWFsoxbJxwDci2W9nzx72AJzibrn4CYvzNtEouAM6gKjWsuZFSWEqQtBKiYG",
  "key18": "3p2z3uNAJ89hPJxzk7FirkFb4737RVsSznuzjRB2cKcfwUTSEVy7i9s8VbdYUBJqhwvLT2qrGruaf18pEuhktpzD",
  "key19": "5EqrHCoVupbheKEBgmFwQQUgmYiZuvAVGwtD4QjJBJhrDqfURFXzuJibLffL7rHZCJzDLPtHAdew9Wr1sQfvgnw6",
  "key20": "hYZX6YoQPgfKaQ59cww56gBeQBLh1a2Apeyuc1zBURyCdcahJmdRzA8MohNR41cvhPSMueRztpabrQgC5uVfFZV",
  "key21": "aYZYauhJfp6vJmzMwt8odhxFnPsKGFVpQVSK9RdAe8tMPmmrPvKT8PuUSbwypHnakgf3Sddy9KfJ11FNWSfLpxP",
  "key22": "22WsH7fYoUJ5sdwfzbmXFbjhGRnGd7KKAzBfgx2N4KWF7VZRzgJ42u5B7oVvJA9og6Lgz8hZUfGaSS9Y7JiCtyrs",
  "key23": "5JQAmRWuZW3J84Mr1rgV49YqcNZGzdwaqrvbmvNMKqzctRTjvCNypk3cvDJvVC8y62V6jgw2NAkzfr7nFoSz9bnU",
  "key24": "4cTQVSuNjCgtMtPtZb1VTRTiX8frSUTcRvo5GgVBjAnTi4mXK9rtuRSokdThzbqhty4WKzUayT81jTZTruC5Lnw3",
  "key25": "4cKLNr84UgroB7mERKC1MRNa7utYSHhE2yLji1871RFHXrkguQt4EJtp33DSXfmGbSJxHaaRbiiv5cdqfXRPDWDF",
  "key26": "2sb8ZnoPoBh1VKP7icUjS2qmqX3XB2mQ3qJVEUwf8pA2Tow7jU8u3dmEvcNV5JAFQwEobKQtUvkhnTXAWxXUZuBn",
  "key27": "SC6abRSqf7VxQBfWW2U83brX29iKF893rUxdGDHRC9Www575QetpY3yiov7bwo9PyvjEt23VzRpfmV8in2xijG5",
  "key28": "51gRUe2QRWGqFeYCsa5DdGBeNo3t8ZZccAkygouztSXKnftBMgJwi6LUS6iyjztGU5rSitCegBZtWFKJeo3mx5b8",
  "key29": "5DtGvPEwnmQHqupEUjSmeDMBewzgVrwpRafKXEJbgdFaK9oY2JVUtKNgAGaXJjVqiuxZtPV1FoJQ3LMYCwyDU1S2",
  "key30": "4ywNzYgtrMuWmK1WkkURcXKcGGBtNVwEVN171xzyFpcxZPXcdF7e2Y5MDE42Vhq2wx5zfDqHGVyStJTL7yMqyaq",
  "key31": "4HrbFpBvQZNhLS3GcpRtMKCXcvCGunxf1tMBeVfs7JGtWx5h4KpDk43cq8mfyUsFSVT3E6tEcEfQq6wTHuPzwhS2",
  "key32": "4QqX2TeF8TS5sHqsxB3Qg6hJiiXJi9sFeHAzo8TPHFBDJobf9MT3cRjUAjxzAnFW7nTfAA5fgZqU7izxNjuaCKm8",
  "key33": "52h2Gs49cuEVYpdqQewSV7yazqu9UcQzJVWc9ScjBf3MdERV3QFoVDCJdw4q6CU7aowKgd3fQ1CQ99Bqo1k2c7JM",
  "key34": "5SWE4mp9nKWDYQ2c32XspxBTZxeYdqSQFz65DoiCiNpEGfvMLMQe97fWGfMa9DLY3oRwwnf8ktVJWUTjhmQp7qRN",
  "key35": "CZwzZgmwHDRpKZa33uKBzqhxZYsnq6dBoWemx95LYPMpaxXPnwrPn13HAy4NJNdFygtje6UuMUxSpoQxLTm46Qn",
  "key36": "2qGdDcGQwymrCPjwYDYQHUJMwBLoerEWCqHXeJmME7XxeyN4UcurPKRCic3JoViXtNfoJDtKU5WwHzhcpmukEuyn"
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
