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
    "61czUzN1BF84aZRY6C3C7p4kpFbaBkKW9EcPeQ2q2H6Cdv97hYofqWrWq3kkRoTjBsw2gTnAVB37hWoGBv6BtwLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hvwHSbqZEAuotc24BfD5wCMejqDCGPQkB1sxr94FRagtb28DAcHNmyXgjnvD61Nq6UUSnadpJv35uh1m5zmjBg",
  "key1": "3PuxMcWz91ThJnbA9LnPvM9DKRZhzSLdxT1VfqbAodSF3SowPc8kpK3HS4gUEZPWmLiRTV6djQTgEaD6RBySZkrJ",
  "key2": "2FjXmKggPZhmonGJWq4L53tZ9JeB57fx62JP6vUSpAtd3PoeJp7UUhVUqjhfWTNtxQCR8qiLfm9TMt64Rb7RdLou",
  "key3": "2ypvymfinJTPTaqVwkx51oFEdmvgpcGcnH3jWLyRgUzJciSoF6g3yE2a3BPgJNKakzWfb1tRCJY4MP2bsFSSQHHW",
  "key4": "2yWjEmhCoLvVyjkvW3ujABFyu8BXNU4HBioNxmCjzef3FGKiRYP8kpPfoeLzaeTCN45fVqUYDuERqZ5a3zTyatNK",
  "key5": "4rJMR9Rwn4EU6fhqBzWceKJPAe2E4PL85TwFiL7VZRU7ySN2RMUJqqggrvPV8dcousmagHqsRXdc28ULSxd6ng1L",
  "key6": "5ndqQfiT7g1pyJ5mhwzUAwMKz228zdVFjyuZQGtiddTzw5zi14FqiBAYW7SabRHmtraF6GCYVVh8BqQAiCcKC7L3",
  "key7": "x1YNhKF8CzGR4muDXcXvcxjBkVX8HiKd8oukFbiLTzBPrcNsKCdt3jtz3zhBmZZ4EvJ1ebnDzey85pAGHorcmyx",
  "key8": "51CUfH4Ly31dKtQbP14aVah7yhUBEjugBVTFuNcsG5fN4EHmAQ8ty6GLWJ7UfaZosZUZxDtHxA7nkMdW6KdvSWdZ",
  "key9": "5UhYtEg1KjniD9wF9ofnJQ1a1HUR2GDt6Fdx3Ec1XKjgxm1yYzDLFmU8tJopz54irKXpHTNyCq3ausdWdMvJC57Z",
  "key10": "2CHK94H1dTNQvZVMAxQn3JWJ3P4RJmpXKkfGmTCfx5H7Ze9GobUQFMwmotKX3nVMDWSSNdiTzNjgvuBjPrukFowW",
  "key11": "4JcNYSJAiV3E8DJrbzYk41BD3Lok3cDsJtRt9zhX3nbG9pB9BFUPCrGtixicMjVM8t7Fvokd2KsTLwz6DGbtR2tt",
  "key12": "33TXaxwJ3jnmsfT6wa9ioecDQLtLsYc11GGy62q86BHpxhHFyc5FbsJTar5WkdHEzurSmBhJqZc93t5usnhxo1qr",
  "key13": "5AeuCEac5yQr8Nead4GGBXPMy4LynXNV8TS6Jw7kde7EdJcZsVLYJjwT9xPipwpuJr6jqHYJ9BC7o1zDDJ3XuRhQ",
  "key14": "2mMMxXGX4JVKgL43W3qVzQc8yuNfLtd7eoZbi6hVoYmFLjLhpTkrvptGWZKk4DecpyvHU36aqBa4dvLPecxPRGN1",
  "key15": "5dLjT877joHajuAhnAvPCAHhWQWQj5JAaPsoTiNuKQgSCkbTKU9FgUcD6teT4XDSeMQR9Nxa8jeJEwy8AUuoAYku",
  "key16": "5mmLCRWj7UPtuW6VDTLvGQ3F8498eau35ZbcXwUZH6z3KLdpoxd6HXeaNuKN9AaR8HXxtUvAC81Hn8LjpPvHytqa",
  "key17": "41P7CQVcSveq8pG3PxtV1Y9shXKSQjhH8t8UQXM3grS3AGmcumTqRaLMd7FeQ4m4D978eJKCd4HYzVP9X7nGtpiY",
  "key18": "S9cDs9kKLLdw7y6mcWXZpQ9RmGJkLAKfQsYw6XLfA9XM3QbQ6VwS7rBN8BXZDFqDLWw6sRCMsCWZME6Rgt1q1HH",
  "key19": "4VP2UTqywqKuEGBq8gdZ4opPFvQThGmdxX6uMkiic5fQpGtDJrmoMPyrmUUuxFXQ6YTAaZyWghwKmynwURUMe9kV",
  "key20": "2tn3X6NcwpRoMh9s1icPPtqthBe9q1X7Ugyr6qp82dU4RvW6aUDBCcB1fWYJDx3G1m18wqSQFy7gcWKX5qTrHMYT",
  "key21": "4qsTAMo9emadnQvrdwAwGe2VE4dEABT2CNZBtTjvqtnkXBVLqTjcPpkTdPJsSgcrqDGxfFUJztCq95HJssbDcqG4",
  "key22": "2quqV3gpGcP8y6iAweY7ZmgDFWCmTx5HHhu3pQHqQGm6CjYykZcGxr5m3y7fGYTHXN57DcGjuXV3evE6cdgNX4eR",
  "key23": "4Xd6Cmx7z8AKhHsA7dphzLCFispPLq8bYDjaGBeFZmZV14szbd2nWNja3jge4LcCDQ2oqseXdve2jfCh19cTLLum",
  "key24": "5bnYkJtdREmcAiETnzmkMzX5mqjvjRXEdgP1VRnTReSEyVCxnqxbGDQf7S8dW8y5FxW459jM9Ly36TGrYhucZoYZ",
  "key25": "3qn8gWtrxEAoYQq1jFmRszqLtER1BMQ9Ej5WuN53K65KjnMdW9e26DpTEkRw1ha5exqqJN8yLmJ5rLbGJDGYWg1g",
  "key26": "4P2qizhqGvbvzVNR1cffGiNRFfzppTwSfa3u4n83kQjGi8HYak3GxGa4U5E6C98u2n49czo6ViatHwdMJ7qxLoXC",
  "key27": "31LY4fVp9vXmwCYbhvUJiYLC2gh2mkstgTm9JQKzqkXRnEeC9xmprgPr9UqADg9dBdBF3nWiGBvJyT1xwKpe6KXF",
  "key28": "3WmmzjSNjqsieS5HHFUyP2DNLA98iEGSVLCGyUhCyM4iPUdtPv7FPuvDMQSQtGM5JeWAK62ed4tAP59fFnYYCSsR",
  "key29": "LhxLaTnXFrZAV2YcYW6TB7rEPedtn1R7YwBbAPsVfNXYPKcrHCp4bXtLHzWiKp38o989E4pekPiaEpEUt7DvizW",
  "key30": "5jAnhRvjAYyY8287PCSbSbw9wNDduJcP9c18Uf8SGzw4cYM81bSB3EqeasySZ6MMSM5YVHkteifzLg44Vd4DwNnX",
  "key31": "2jixHvbfojCGTTJc7XzZxjg3CU18ZPNP8idUKdLJFTRkfb7MFt2ZP8fpqGwEmN5naEfS7oi4nwYcBmVY1BQoGtfK",
  "key32": "4fJw6jcb2UewijxkxsGXAF4d8CjLUdx6bDcFsbUD4bNZzp76N4ccWj2ibt2H4dSbLBAyT69YmqpRTxoENwEyRL2N"
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
