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
    "5rxVWVhFa7yf8hLuWGnNERMu3rFcin7YykQ2SPB34bn1aZmLFT48i5VjarNjkYgokrMgPuapnNFdfYmc8sA7HUMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VpV7RY53JLDgJGSpxrShEtJ6sgPGXdk8NkukFUzEXmRAysh9pzMMwwNRHr9L2u98QPWvogndWc3FJctJWETLnAY",
  "key1": "4LS8QPC3MAGXcG9bMHUAsguNCSqFt95iborCLrJ6tFqeawtNUcq3i3K5zLGjCeYjKTfbFcUYAmM7c3Mp7h2HgzkW",
  "key2": "SNbjypK1hNUpAx461gfwJ2akAYRUF1t7oYgs9RYQDUpWMRAKFbStSt2jrncxRYzxbqc74UURPs3Q7fvGXRY19Nt",
  "key3": "55Pyj8FksoisJBREwWEEHPAXqyaze75rBwmxz6fWxwBUp2biRbhDZAsnaRkG5yosMypGC3Lp4xgDBtUZGxEtofrL",
  "key4": "4pzN6goCsGdngAQrLjUFmtZhkWVhuoGdHc2Wao1Sp4TQdN4C4vT1iQk3VNz1SHuLMTTbem9BZXGeueSMhZbdVkHG",
  "key5": "5ruG5hqembEFexy52z3aKDcpK8e8oubNzau9tMDxiQnRivPQqH3v2C2FeK9G1P6Crd3Kg6nvpa8GXk63utqQu3RN",
  "key6": "47PR66i68BiVDBWHp4wPrvkF76tTsnz1GTgRNJiHfNFQtaDTtTAzLWia2TaeFbTsdzF4dCjxvo6ayPGvbZLx17ZW",
  "key7": "2nrYHJHriWBGDwhWxyNd4PdEmuy8BzfBU5j5fQvyEAfLgHPQDfWk32zWCTAz68E5gpQw2JKFf5ZsWbDesLv9mQCj",
  "key8": "2ahKi6mi7H5SeaV89zd4onXtmswqFvRZJdcr7ZGFDFx49fnuiEwBmTCGq6LSrJZb7hZcQLC4BFkZYwRy2ev316ka",
  "key9": "WstG1VhndhYNBsKLdiVaDUaq1bgv3EWv4v1kVSAVkxf9GdZ5nsFykQjCNNcBEoRhSLJ4nZzwQUB4W62KUr2k7Uz",
  "key10": "5ZBuduc9AYXgG1dDd8VL26tPgn1CahHKViM1z9uiKf3stD3RaHK881q7z6vFPAzmdUhxRKafvpUVuc3TyHx8rrZP",
  "key11": "oEpCYKMmXY8nGKaA3f9cQmaqFTj46W7PnZAChJ6HgfrD9jFiwbduTqNgsqk92X84Tq86AYWtZjMjS3o8Anp4n9N",
  "key12": "445RU7Y8PUrSSdKsMtgDKHENhdmcxMWL3PZAQiDtRBR6pJP5vbBzw3Y6fxpXgqfpJv4YjqzSVA17dbb3QYS9vH7G",
  "key13": "28mFooMhhfYXDGZb8q8Jj953nYH4VCqjdwwXU1uMdMsMqX71gQaopMeoYZgZbnoS2dTFtNHuQW4TZYRMEcjmTGRv",
  "key14": "31mihqEF2xa9D3ixNoTToKTvnWyFC12qqCGnGPAtqTwUxguh328v7KQW8Fk3wSHQnhNJESSac94SZBdSK8S6UezR",
  "key15": "3k2rS52HgPGbj935uQGXCkP59YeNjeysJX6k3G1ZuvuGxqebrJ8a9B2JwmZpDzhNkxieDiNtTW1bT1utdwMQs4Bj",
  "key16": "5C28vFUS61UjTwQPYYkYQSiuiQ4BZA7t8S8QdkiH435RmEsKZh3PpqjGgxKXELUCVkBbvC1V2qCPbzzCtHZJcBkw",
  "key17": "KT3S34aW8APCSHWm1njFWWk6JjYhS8Ao44FrxcGZdv1gd86gnmv1L4u2xa6VP9vaSsF2UbxoWfA26yzTVtYVmiN",
  "key18": "4XxPdqtbEJrnfJvv3TGxSdwiJNa97t3eBAbQ3wYUduUkp8toCUKN8jU4KUDfc2jFZ3eaMKP9n7BdVzwh7u6CQPnL",
  "key19": "iRLxctzc1MjqGjQ8R286QnLC6Tu2kEnXnXxkq13iTo2PiS7yKsVJM9QRc4WJvQ3RFgiyFv11SsSvxGCEdmjDhCF",
  "key20": "49EJyGus9sFSN9YakoEEpfwuCez5vajjVr6icG6z8wjjKu8PVR6QNxCbUF8573L5js1NWqN6R4RM2euiF33fxyV8",
  "key21": "5Cs5igQie6K6gpjnFmGoHeRMJGwV6ppR9nak45GXWHGVHK53k9cjrc8sNQFAUNFfk8uqKutt3MCLSD9213q114PV",
  "key22": "5j4HR2Gm7vLwYvwbpDGsdfozhrR3e9JxZfTCgdRoLjAWqYaWd2HEKjCcteyrkL9zPMNweeDp3HGWjRacfnLpm9JY",
  "key23": "5wEAQeeKitPmjv5vMYxxoayxwpH1WdiDCQVjbDeoBjvZeFETJEbXEBp9doXu4mandUTCBo6ivwHtBXSEPQKd9vdx",
  "key24": "2JYEPqiZrJaAfjN9eav1sgaR7CPJ8HpM9yJVFAVzRBbW7xs6hv9j9fEjYU4CrHp6uAYV6tsQvULN1U6oNorLUeA5",
  "key25": "8GUEqC3RjsicLQstLTVzUfjg77AWz7mhk8bFCSMLTmyqk97HFNsKG5AUDKV6oa3wpRWXhZTcakwDS5mS5cBsJNV",
  "key26": "5vtoiSfhRJ1x9XFfS1yivFCqkCouLvSmAKodvRG3vRSTZWqyQsNKgZx4iZKPZUYFv2fPxs6v7vfUz4BiyFH8Fot3",
  "key27": "nymvQ6vxiYh9HE6chS6ozepZen7CPFb2MAfCLBvRvwy4eCPyaNU1fptLwKfizFX5BBevPGTsy6YrLbhhhpJpMMW",
  "key28": "4ebNxYbgqJzmcmUskTMak5fGRRECY1XWmTAtQwegF4X9QgBe51jyFa8QvZkn13AYyRNk8Su3pDaSYxhtoj1vP8oA",
  "key29": "5QAfRB1AxQPBbMaoBKUCFAZSHtFkok1yTRZtE4nuNZLzW7rcPC3sWwLpTnQD9ka34UzWj4aeMyry8yuWRo7NtAHP",
  "key30": "2q2nmeiSQuEDzJCueb72GFzQDkHWAWtfnYccbRmeGH6YgZWU5PKg7viMJk4FXgpUSjqEd9dMBMNdago94JVr16ob",
  "key31": "5QkQ4ajxDs3ycJzz5PDCAYuxMhCjR2FKHwBFHobaD3keo52Gh6AkRtJstov7RqSbEeTvNj25hs6WqYBXPRaTMjWC",
  "key32": "3d8inR7yAAr5XWzcaXw8jNAnpkWMR2PWysA3ubCYmmGhFL1Umz4UATXzLMhdNWTpBELn7DdCLG6cLJ5teT4zxJYm",
  "key33": "4RHtepZjxQHuiHugRPLmNBVupAD7CHzKHWsCWCQ1mq51JQDWjqq55noBjcmgMvB8E2yS4rUCV5Jh94w8ofJnKpEe",
  "key34": "3p9Barx5aomBCFL7CghSYmykVccve9HCgsbNNRs4DDDB5fuXmExhhtF8pFitd6qfQBvpNHJ4VWKYpygiUQ2zRgMR",
  "key35": "2pTMx9wmp3CfMn2Dey9YiH3yQUnhotq2aLiSKr9Xw8Qszay9QJWVZR2xEVfET6okmEpEtm8977RHKWNdoGsDk2Df",
  "key36": "2bc49SfHPRnVME2kNhknfdScUgzePPm6X8rMfqDA6y13zNgaJ6AAJTVFbm5Mug3gtKPYDdUvvBHbBdonSk1JhrGu",
  "key37": "3k7xLjgP8H3zxE62XNt1LKvyMHaXZ8YyBcnrRzb99hKvgGW7DFYuyL4cazhRCRn6jZbC3DmsgVjCTw6QVfCUEpwS",
  "key38": "fbTbUBoxxDmgsu1AGMPMg4vMg2BHG6yAhdeG57xjEu4C9RBJBKoVsEYfbLEBuA6fFKqys8P55Qa6yVNYGuGhKcf",
  "key39": "2cjZ61ZAXdyLUR6VqjhH7qqZAPk4baWnSjdgxJkLz7SVKYAAcG7awKDRyetmgmWyrovS5Yutf3UQV15BH2eumh4r",
  "key40": "3h5B9CAF9V1hSxHfokm4T5FMaaQ63qiaHfU2T9DULsQMHW2srqrCFMddhgEpi2Ku8EYWr6h6TsdKJtGHU7LEy8qq",
  "key41": "3veXoyQpET1igSE1miAoicRadJ7bDqe51XAk27WKX39U1cVgci6nhkr5bDFFqfu17SuaywP6xmce7UpigTCx8mmy",
  "key42": "48jjMv87XxUM9V9vPAZwG35BarQZT3PufPMCAaomEPciDDuZUTAZ5fGokDLH51ntCCXkY2vZjyPxZkZGhErriUpr"
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
