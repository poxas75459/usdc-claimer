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
    "2GnQ3sgwD5SAtyEGp3v5Z8YNyAMDm9jZ5U2tb8R5gvcJ6kssJTHCDnfFwoFWv985ANGB2aBzfVZoFat6S6Q33Go2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KRdJPLGSZg9RmKTXDiQACgcDoEnax57zw1kawB94jzTK3qSNGsz8XQuPjZudzeZfNJKgjbcNKYJ8H5FsY2mtqt4",
  "key1": "3ANhHinFVq7MhFw3VphMqv7V4wcn2dDzyLstmNnXJXo2WxZDghEYUwGgdiUK6drfhHXHczQV1kuqwrD7mW42cXuv",
  "key2": "2581PGycXWxx1grjJW5Kpss4TPj8CfLYoafCmeTcVuwkovMkn7de9yiAzGaFHhq6njUKLHa6rV4r61CUhAHoJ2Wo",
  "key3": "vtZwfq9WRphh1QThfQdMNP3zYqzF5nnH4YZtnfWZVxrb73KN2S3HbbAHxrtq5PRdujaZX2btq1xyh2Wm9RqZbH7",
  "key4": "2qf6FM6A5HDTjwN8Yba7ZjTurTVjCKR6XXDNeM3YEmk5zpdHUiWZcSHFQgRPSxE8Dw1s8QARGkH3nQaTWbgBVkZA",
  "key5": "5zAjz2yzQxCNermaiuKMzrPDRcUxYJxSoUA5HAXoQoH3cWP8HF1JRrEHcy5MowgmEhKG8nDWWN52zd6SVrAbr4NR",
  "key6": "4moshZUFAwjik6zjiQBi3AydVBoyyxLqiHRTX7i2zPqDm4BV9uYF69DKiNy9TToQugkFojCymwvALGmDeeWE6US5",
  "key7": "3b65f2nSoYMfnHD8rK1f7g3Guo7a4mngTtsXT6vPfnquPkALgETsvpy8WbekUwYDFiAj4U1RujRH4B4cDKjSqHXn",
  "key8": "8ftKfpgKarU4RPLrD9a4jvPRYCYmVsqDHqSaGYtMaxFhnZFzxs7WeZsptTRR9mTUwwFPGRBMchiAtsTrsjqegBZ",
  "key9": "244NzC54k2xWpG6vkRAV7BNyWR4qeaoY6VYwK3heJ8JauxQ9vcMUCHxTVWtyAGfA2xPCWXHHhWfeBBpfdh9ma26y",
  "key10": "5GLHx7V2SVtQBCi21DKvdKkFuvvMqJ1SPxtML7i5BhnSr9ghanKW7DK5Hb6sr71DwVFMt6Fj5Xg6hpP2s2dZdoHn",
  "key11": "3vemBrxXzGY1w7cJwjCaMZk7wFKg9rTEVgaNaZGrUxA8xP7u5qBPoezZUrmRDJ6W4pgo6923u1gF2unThjqMEu8R",
  "key12": "4SvtBc7sRJfvHfF9uUS8K5v4nqC6Ftidg8vJkS7xVTYiGYejYB7HQP3XaxEVGgZcMgt4Th9ENvbcXDxRV5XDEoB4",
  "key13": "38xY48nUbeSxyi3Fd9S6ERrRrC8SkwwUoJWRePeK5BnMRE16DG3PBbPfZVYDrBj8TRXwcnTBZd2Le3M1JwVpiQZE",
  "key14": "WYMFp3U9ZUx3VNcEqCvU6qNMSfNJwQd59HvQg5RG2ybdmSkasb1y9FBjuhgPjjoXdFeLfsorS3PPE5oJXZqQBup",
  "key15": "4gu189PsXR1bY9uqpFiSJYAfyDjAVzhfi9PXcoHWq6zGmfxtRnx81RW5vPEBzZ81uAEEwysgciCuWJKZvoPJBuRJ",
  "key16": "3CuJ7kvi62gSDCjPWJBbMCmu8BmB37sptCfafuNScCXjs4BqbMmRr5iZKrQ2bbf4SH3LXnjA4SXwEgn6jVwXhUg1",
  "key17": "2KV2tbqZSnyQLu6k1h8L65xaQmKgmyQbWLzEgcrTa4eu6BN5vXNDbA33KQLAZJQCsYj9fxhF9wFCLLudm1ngRqYc",
  "key18": "22PC3wVqcXW5RLqerXCksXLBzyYkutPspL7kYRXW4W32mkDX76K4iPotnTd7Dh1tyrX11h8d1vAo5cHAUMyoLKmj",
  "key19": "4rdtqJC12iuQbvJLMfSjJ1LZWkrgLE4CUv9RAxyLrhKi5UeD7owrSi6ezrszBMXhPDAdcB5CX4ua2Q2AKkPFS9wR",
  "key20": "2Fe78TLmzgnpSgpS1zKry2orLdbWVMRX5cCSch5wodtkxS3edfEjf5DkyUz7QcPZCCpNpJAgevCTLiBoGeFq27KJ",
  "key21": "HE7VM1QyEt2HwrJLbceSTPaHKUn94eqXsrf3pehTY9x6pyYc1Wm1sUnQW61StoopwuXt3ZfCpqTCNt4Q1oZN9rM",
  "key22": "3GckhWdUGuWdnGc3V7qQVZv1YBoR2kiCyvyUaAijVQXpB9oSiuvKAVXAhNMyuUMqu2XWWzkG1igsN1CAUx6iZMUx",
  "key23": "125swQJWZuDtaaPHyWCr9RxgrdFotuZgu3fpigj2aSQPABoQ7sLLwX3mKzunGPuV4hA3aZ7YTkbNfMTNrTftQimz",
  "key24": "56JBqfjo8DErfh12KxU4J79C2uUNnUE2zAaFG2MjefZXwXZfg3k7K1RPTmP7DEVTEwNCEoDwEX6HQSSdYn2r1aR6",
  "key25": "3cvCVu6gtHp2GdaQCYzgeDBVuvj3DfpQdrKwaksJurWUD5whgvprk4rfKKEp7kNZ3sabj7mntgwALdFJZauNJhVF",
  "key26": "2utWuydPtQt1UraEGB4X69cc7kjxjuNkbtzoZG16SGiiUyysWug7MPfWSdijxmyXGQad8cgwiHXBiY8ZpVyzgpzR",
  "key27": "924wYiEqDwuqoSuXUzAh5Aq4UwazGQb6tFJdbG3DP8nN2y8qWPEoJkT9TbYRwBWY4tmA7PgfkesUQJirbWc164W"
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
