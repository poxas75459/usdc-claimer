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
    "5ULSmth5L6NsMwegPULQGjh74M3rtC2LBtDxC1xKAP68b4GLeLZ8MoHnbM7cKaVuaivNTZRTw2ModG7xagLp9Ta5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TJJDjWuMJu8Jh4bQ3L8s25TxVUDbJRkMrLK6wknY1E4JLzGR1KjuMt8jhjMEnQ5toyZe8bftUU5iHJ8izYhiMsr",
  "key1": "4htPwvbYfQJMANgRw8cKnCHiVci67Mh2dtatgKGNy5ANSPcCUewkRzaZDvVY4bofTrD4tDjZ14bVnMJtipe8a6Yt",
  "key2": "4ngSBjAYwrRryFzMufTtmAn7vGpLB9cXa7jNiqKsX1NKVn9LtNXnMYepneRuuGmY6wJMrXMb6eEknbUUewrpDTDa",
  "key3": "4d1bV7mvzTjJUjYVTtLDhY2YdK1kzj2vbewgmbdByyrmnAvUzwDXrEwCUQCXA9uGTtKDPHaAGo3c7SmRm1CHhtVX",
  "key4": "2C6ADkqfeBYjpu8e15TuN9GXWjjxhKR2eDnLxQunEAFnPseUqngpv4KaFeyqXJd9XqaqexWux4RPAfuNTSex84EP",
  "key5": "21sNNatXmj3NysFngy758UVjejFeT9kQHk4MYLzn6XbiiXsczB939UoS3ZQA72HHAraVyMv7srkdbUXExz2ZZqCS",
  "key6": "4cpXZgRo2Z4QNDCDQDRJQx9RbtuRcCjh1yHgj42PeEYSiUCz1LfLvq5Q1DEK5A3r4qDiJRR4AoQqB9eBxcRgd6Vc",
  "key7": "2qWjqppiEVaCBJqbmGXizes9dY6QDZDrWMHzJLDABk51mQkk6FrYuejnsW482wjnSAFBAADUcSRYf8osh3J6bdwF",
  "key8": "RdrwYE892ZLxFtV8tkF6PcqJN6SeW3aMW6Zy7YuJPXwv9GvzswfGbUXSgd64H4xu8mXt1Ten9ng7Bgaa2BJZQSB",
  "key9": "5fYtvPm4YFbNgGpQPFwYt2pDmxRDikSvNJ7bPpjGYQTGBZcAFtUjhQJdcpE5M3kEYHipRDQyRKY87RecmoAL9JAY",
  "key10": "3rFwpjY4y7TsStEDgaCSCC7wyXBGVWAuj6ajDQxSzmxij5YC9c3X1acfhrDcoAj8XQShrT7NFobd14sZQGjDTCia",
  "key11": "aZRoX9em39oXppBepsRxnfP7UHr7TNdtP2LiKtdBRxACxfwZJK5iGds2mmzq3Lt7auVTpt5ok3QYm3b5FLMdEkm",
  "key12": "5GhwWWnWW5MriBxtjT6ZyBPo4a9k7zWkcsyKJWPPXt5uwiqb6DamRWm91kJnULQ6YpQo2HKJthPLt8amNeGsLu3U",
  "key13": "255fXEMnmiS4xgTL1HfffHKkcTyTbJLv2Ahxi95X8dBREanTbwMpugChmswJXyzBLGPPkJSwZHX1WYrgNy4scAso",
  "key14": "tjUMpLXepWRSHZEbGX6wN6kPnJyNwiUa1uL9hH4jy6RYRoUoBqam57ptz8dNaGboMQe2LYJ9L3vDLoeSQk9koG5",
  "key15": "3n9eYCxpNgWv8BaCbgqdPgSjeEtRrmc1Xp7fhWcc6oy6eFApje2AKmUrdiChuG5qo8r3FJy1s42ZseZKfaauvu6o",
  "key16": "RJ9PBYygXfsJGNcZcytX6tnTWczAHHWU4co1oHvb7kNzJnBLdpVuxPj4E9zqAN48B6rzjqSqTwE3BWvEPzLXKFq",
  "key17": "5FpbQxHGM2s3KvPJS5EBEFe2wcK854HVYV9XwsUT4YKtSLu7cRqbyym1PnpLGfbPsJwh9oRMAJRUWhA2zpHBvm4D",
  "key18": "5nHFcGBHDKV8dPAHwWiax8X5LTmfSk4hqr4EH2BQh9zuCjuy7i6Jf4qawzXmr8gKX83GLyhoWwNF8gnFvirthnjD",
  "key19": "2PeGLF28uhXcuhH7U8SEqBhLri9KJfPx8Lcoop5c95TsPm2JR9t27kVoMky4T8Q7EPbZ4ANfFSwCFtmFKdWSaif",
  "key20": "4AMVbgwShdfRk1RSWSiMBfVh81gEr5SAa312vYXZT6aZ1mbipsGSEbwG7SMR7QgxAjx1Y1vexpADDKjzzewAT8yF",
  "key21": "5eyPTmpKnBinzvAwg5QGmccNoxeCyRD87K6Qkkrxx6xnXViv9A2cqo3fjS5Xq6cHCsKEUQiVwS4md8xkroWfbsev",
  "key22": "3qppfm4Y2pCwpJzwaYJvqnTC5NDk9Sk62d2Xv8hk9Q5eQQFVaDTq1yKU12Uf5BstreJ1yRikMfewx4zBkX17kAQH",
  "key23": "2npKA9MmxTGxtPD7uwqVtwbeiVdjqThMeG6KeqLXRFGPCfBdjaPcbx5Ax783GDXA7ndkoSjdgv7qXr8S4Urs2DHS",
  "key24": "y1cCQn99Wq7qZ7Tw99tHqeZ4amN33NYTREmdh1yieCwSd4Sdu4Add7fqAr2f7xuGNRf8t3FjK78QbjWiH2nBR91",
  "key25": "4odkpdjNYwBdrQuxP4YipsGHMoRqAZAH3FvwKy7TwyEAi7nBQbpP8t7s8fwRmh6F1JEWfeZWxXL8RdrVrmyWsBAU",
  "key26": "2ok3VjHXryRRe1DBmHcjavLWQVPjU9vM9rbKx5dXrwiQuHvkpqnpZxPnKgF12bVAf6a2PTUA35Xtc2uA6gtbbhxd",
  "key27": "2BLD4rkfsXbeb64Zrb9zWVWaKAMbE7uDswHXAkb29NRmvpDyo8Duq6FCaSHCvWd4s2a9QuNZXKM4XpufRLR7TBBK",
  "key28": "26NtZACrtwLQa5qLywhp81pPGWUKAsRsf98gDPgKyMKYNnvgBAuaRovMyEwJjrm7Pf1vjayRSbqgTqyFX24jndVb",
  "key29": "5u11TR4pMna6ZwXBCz5mc3bxBdNaTCpX1ocaZ2b2oNa1v6JJch5SZBWyUud8J6qmQHuhAQJoMbjnURFPVixCQG7N",
  "key30": "usdJvf3X1fiHhtQfQGBJfY44uoCXaNN2L9MnnjuSZi8vp2J9zQtpRXVBRJ6XJEDTyh3rKHg6wSyar3GpkoxLxdX",
  "key31": "5VGmYwasWaNFw7WikvZezJjmHXw6BKS3JksigszVyXrdJVP2ZNF7wiwkGE56B8XUcv62X5qC2sXfcfnPHseFutLs",
  "key32": "5W3uFKUXHBDs7AzM2GzSvsfsBAgbghptaCTSeSemae6QwVnxQ3BZpUg53aqA7spL9USzqMRcjyB1L2bzQoJpdddM",
  "key33": "Qma9jodoyrJWQ2s4XaPNW5zLuo3y8wtDEumnmEqYH2nMMkY82H8aQ6LtuEFBFvKzE1zL2AcXA7193HELxEfjkEF",
  "key34": "4NrmTW5tKyL1nga9hJNgR2vjSAv9SCs7sZ7umTMQTvTzRqHqdpbRen9rk8SdWSxJp6MBWH4B1HvBwvBzjGQMxDpR",
  "key35": "4rcZAELPYddrS2TWVRkhTRpGiv3oo9gFYzAjwVxyX5vG4tbJjCyUXKQDYhDywzgd7A9FUbdjMoj5fsVVkbx8omv"
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
