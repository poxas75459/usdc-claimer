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
    "ZXoBpbxXHp3xw6VyqPWzKy7wueVLpqGajCUQcZVWQ538HHP42s8g3Ne3P8pd8SRukshZLsXcgBUELbeRuWx1fTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nZWEJtPJBQDCMCzpWcGVwzGQsedEFCAmrBpXyBfi6Lm9e8w2siZAiLcrjVzEnDVeZSJXYm8S2NjHPPrZqb9Z878",
  "key1": "ADfxqwNe1cBY36NdXE7jYfRDMcXb5i6YtH2WaFhxAxsMRfWfCBXEJ6UUEv9P3nKwnXRL1AWPRvPnq25XztP8gMh",
  "key2": "4d5TmRmxDovbR8Lw8na6ujyBYj5ZYZ4JdXG6iZtzMb4jbc5rNNQr9TTERwvR29bSjQztBNPHFZCduhcEQ7nLjEtV",
  "key3": "3wMH5q8zPDbzm6MADyG1jmsPQ25p98vQh8ePuRfJyNfGCBBykePGQAQYX9RUfJsP3CMpM1Yt3YitNP5rmLaw6yy7",
  "key4": "3JkVdKQC6oJXdsVt4qKch99NQ8rmsHz2ZoqfXNAaDiX7YjqmX7WELW1J9PCLphycY944SQRSAHjhe7Rfw6GASh3y",
  "key5": "9qyziWd2PurgXe9WeVN12buGkeTKWMNseCjdSxtwY64xZsyTgvadqW6AghoRexKbhheLwS1bhtLPyFA7dbXPig4",
  "key6": "2eYXxNuBbSCQY7vjnYXrbSbexm39iwSmRCx3RToKMhxdHkExmUzf8VCiHf7jhYzCiacQHSzYLjoRXNzguSpM5EPP",
  "key7": "TGmbyzNnSbNeirpbh14hFFnnmuQgi1wPjWFc8ac215pE2o5nuvBCnWw63QasqWzyM7jwiK1y2GxmbfGauK41RAB",
  "key8": "63dq3AumfJCoDtztowNZ7Nx8iQJiU7DFkhFjQZ8ciri73Ns4KwC5fcSQECzbRYvxyxaxo74DaqxrofBy8U71VqFL",
  "key9": "352dgVFK4n319ruSaVsYckB5VHk13ndRpQnKQufxBPPuWJJ65WoPsMv69ybfcJ8ZGgJpanFLesgcx8m3BfZQcPCk",
  "key10": "2s3Zuk27TLidwXb5bH8EdWYoaTwJjm2Gw37ssjRjpAMTGrCKnb56S7pjgTig7Awi9Qh7TndDqYLZqZgxjTbTmtkq",
  "key11": "28F1Hvh82xEZaFFXFYsBLdj2UmRNCmHRpCLVLWPepS5TBFvtTRR7ht7KwcwXtfHF5yA4ycuS2JPyogY8PtfBy5qw",
  "key12": "7dtgo3rY8QMVJZgyjok3s2gDQEHk4fSiEuXnWnxMR5MH1b2NSCjSFWM91XphszBRvC4H587ExTzBfdek7gS4skd",
  "key13": "37DLjVqAUGkjjY2eBCj3PBrB74Qd63RNUR9FBvdebLmC3gD2rKTRUhnacCNFxsKSS8RHRKxi2ioLk4xbWYuvHanV",
  "key14": "2jXZ6ERTSPEJkFa89RL2homLkJyBsKgMF5RwzvCcCSQSjdhviyqL5d4H264cH9uMbxBrMmQ4Fmr4nn1ewQqJENUx",
  "key15": "XiVDe1hNqhkwCM6dyjkb3N9tH8eNYctr3wzuDwqUA2DRC6LpMM97x1uM63dVzTYp4fhuDsxg3LhsQi6gBA7LhDf",
  "key16": "knY9v1xWrqq2s6SjZKWMi5LB6XEuKLZAnjVn8Ae4oedfAHitdhsVc1WDeJsj4aDG4DiRisE7obnw2K6FoHLvs5z",
  "key17": "EUEiKJPhupQiJpSJDBQcZNZmngLmZyn6doRxaskzKvfF6j1EogvLPa6xCPcKeYYkqgnHcF8DK3oJjKw2HkmX1vB",
  "key18": "1j2GtB7eqiRaX3EnYLBZQHqnLNdb8Voj3JYLW2MzwgpWsarKtm9d3zLYHScep1Gw9tmRQgety3o8G6HgY5B1ofF",
  "key19": "3d5eCxEaXm3x6bfvzSuQ6ffQhgex8hJTT7vsbHKka7CfhNwCPGUmTSjwiyabjCdEmtUzNaqKrhAc3j6MV9RAJrR4",
  "key20": "5LEAVgAD6ZLzqBjj9UKMtEmpzsUKbS7VHtcPv2QbuGTmJzUV4N3ndwhAHXX2HjE7AnmAmkqEPgZouVmEkCNPbtVS",
  "key21": "2BvGSF3PMFrrA4iez23LurVvoRcPpcoy7rSZBeT2sMPnz1ukRGiwfNqcS5R2naxrZC6Vap48XbV5xZYrQZCR3FB5",
  "key22": "5njCwckqH55ieeEYs2NNsXRthMknYjjYNQmw6oQ8fp1Bq5jLk9NbYh4uJPe3ES45p5E9Qa4RnFg22ZR28tkAkcgp",
  "key23": "4Sbw6TM87WNkQwDK4fiwshv7XrMND4ztiQ1iNoNqDXHH1RBwshJh7wds2Xrg74ihMTYxYgZ9YB4hRRGsGrH3TNsm",
  "key24": "5AqCpMc4ZXRPxUndJn5BRvuNW2UVjEmfA2r94v7zrfidG9FpgqYL4kj3ure1QAXgsezBk1Vc5M8rvnSeG32wvgY1",
  "key25": "3BVfRWmf1WCsYn63egU9ZqwofueznXCjsvvkZ2o8rvPrP9ffDe5192kFjz1ZTLJx8LteVML2vk9dHvPYxjesafvr",
  "key26": "SDTztSp3S8XbFxEUQpnEY5HRBJMgqHt4VMX4J2USbWKvgLFY2zY7HRTDtJKQPT8zXBiMUYEfUoyBh8dSvNHZ93P",
  "key27": "3kavNtsHo6AoGXVKmMnNrWdgn91FNrpEp41TT5xcgrPhfYz6YXUCSDowcjsypqR73UyfwzsKkTHuVqVYH1HSr5Ge",
  "key28": "qBALgw21vCKabWz6ZaN4K8nN45F79qv36kgtTPMHcjUqukyrswZX533XDpryoy88fUWjRQrMmVCVrx4fYpGNjv6",
  "key29": "5cWmgTiyXrD7Qb5hv3azyM3hJmYoj4eZdVfR9h7qx4fzXDoBFjrnN4eUqfapTY4o2bMUsFdJYVxfj8DCHothCZfZ",
  "key30": "2oqNxwM82yX74FBJSVG5eYxjY7y36FePyDxZYRhpwWnYqjnzc3ThgQTjFnLM1jqSFQNw3s7wQZE9Zr5s1szEvuFX",
  "key31": "3wv2YrEDaewkrzVbFJwqY5trTspLwvTspNCdMEykophavGfmqdkXPdXip15qPnxqwbCubpCVpBGywvzNX5VeDczH",
  "key32": "7gYmgGPJVpTtkvBuP92uams6CxaTKQ73VuA8nnwFXm4r3vkYSWg2h4LKJfRRiTGYgp4S77MikFrwzQDcwNh76sd",
  "key33": "5buu8DN48Db6nHxvcz2fWer4vqYrRNYbKiP8FfHDsgvwrFNc2cfEcCak8jWPWqBd29xmLFY4dBef8UGJ65uoW9br",
  "key34": "37U4dmQex2BoKywzs4JgrRrgQNBZQT3VM66dBdrMdLunXsqsSXnFhNb1YHHZN4LCFDR9AXkETmB3qMrqDDZFUiPU",
  "key35": "3kTUBfarzbCyXrYeuz1dC7gq3CXJDYM1odrodyLud9NsEAaPteEHJYVmJ2h3tccbz4o2r8okNxe1mC5WnQ4LR71r",
  "key36": "2Q2YJJFWe9E9qRRxYJHwyiX4F3iKT8CcQdyfaXr9frYe54TbCZ69HnEAnoFyRFKEf6epJVVxJLiWM9Q5CLYc48gL",
  "key37": "2CrsSvLxFGFjGKUFpcKY8kHQhyz6Ncs867TUfGzf4ZMiJL4RsVSTHzbsrDiHGWPv8FNdc73LeNjJF7heyoz33YBb",
  "key38": "uu7kBW7ty4BJsJGbKhi35CMbQvshFZC7mVCgU1stoHxRawHypQ5w98bLACXhXq7krVzcE4PESZjBPhayZT6Gt1n",
  "key39": "2DpupdudpYWtu3uU4RSUzC2PNysz2KGiAJhLmyub6iaxWfFp8cUep5UdEgt8eFj6mfb4BWxLHYzZd4tRvvC7EqCG",
  "key40": "5NNhv3PNRh4swDLXagDKXritfM1j5kgdbqXdkCbXKJj9zMsY17YiCiMi3dpqRh3QZvGM4fKwfMFXCi26hjhYGtfh",
  "key41": "2J8H3ZgtyVDq98uVa8oxfQPmTZx5ZPx4zpThkiUtXyuMqePqgAVnY5Tdj4t2NGoNY9nALK3gA3XEpoWUe1hueQbo",
  "key42": "5XDZp8yAqN5BgA9kU2pMKFtzGCfzQBcxTfXxKrCUKX5U5BRmcmkHLZrYF5hPWrFQ3sPwbh95X7WBgNSErn9zTu6f",
  "key43": "25maUiZXkQE78wYu8j8A7SwVyiN2fLmju45stRnhMxqrRAycW4K2RPWd8Ma6jwF86dvgPdpeqi2VW1Gh8h7oypK7",
  "key44": "2RGD14Aod7wj4PNMM18Q5ND4dtwPuVELumwnwE6GAxmjCEiGNqSkW86siPYzfnfgWsmz56EU5oEksBD3t1kwFfng",
  "key45": "Vh6XioHSpaSABZyN9kB6pkhMZAD74QUx1ihtJMK35ZxncuzqxKd1hUatCtJbBh1QPgYQ54qmmE33WqEud2kBn3w",
  "key46": "2jsFaWcAEseSRofSFVbRWaCECcknmKL5bxuAp2PvGzLRid3aG393u4h8pEFNJPCHyZ6EMMwmCALHUgvj1TKmAd88",
  "key47": "3rzZ6s41eNKXy8CVmfcUtozZ8veZEvczAZdnhSyTfoftSxdZcmvULjjFqeVvdFmDr17XJ5FnaGjm5QJa2z5SayNR",
  "key48": "51oJXgxzmGXHBEuWmuahUmjLCLUUrrvDG3MNmCKApbBX3Lbmbd6T7ENriHBL7bR9xtqXBQtVuCt89bP36jY2J6gj",
  "key49": "2zmcgs9gbCHzdSydzMor7tHrmp56cpBy3vF5tRJp1CG5PziLXp6y2FyJ1DpiQYD4RrFWxXRchRuZdWcnnKLdiBUW"
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
