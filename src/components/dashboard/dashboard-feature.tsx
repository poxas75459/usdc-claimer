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
    "4WqAsAQ8mm2B5wndjuvR4ipiz1emV2bTR1GcqkAGrZBsQr3pFgA1VYU1AL7a1rGSsZQNrJBCPJJRBXjajcp5yHgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vxmYPfaMybAEW2RjbgZ3HqjZSBi96ouwwy8UPijZfHtKERju3PvDehLUFKb45TvvsAVwddWNsEWb74RRYfFqt3n",
  "key1": "2pefredczZ4uGH9UjWB2v4aR187WvE9AdZRUZEkboSqwD7Y8my93fk7WJ4pLhAV28xgWdxVRVLM2mUMgDchRwwxT",
  "key2": "2UtpHxfGRyJ47Yy8q7uFrnURFDPVgsSyYvRrRwsi32ULStf8dfeferECqrNZCLGAzhcK8ZZfqkw8oRZ3LHSrpCMv",
  "key3": "2122FDw79kNBH8dhCUS1xvMAg41pHdPEsywRJ6GRnPuKBZjmKDMJZRjwZnawpk12tXwCj49jhcDbdrtVfowtYCgo",
  "key4": "42S1zUD4tYyt2czVNH2X4VYZZQKVvszrxdaxmf4rVTYMfVSng3E9RoenusXgqCuZmL29GyafKAifEHQUx4ow41Fq",
  "key5": "61nL9EtiuhqAbikHhPfeeqW4qRREc6syLmKf6vasNZD737VYUnUJsVtLrquDX5h3TKWHq7yhQEEZwp9GwAV6JTKH",
  "key6": "nuCChQboEdD5Rquh9VRLXRLT811Xne7dx6hM2rRKyzC1wo52WUN1HWchVb1x6skje8jHBarH4hAJbN6YG9wS7c3",
  "key7": "5ArHDAuJg7hcHFQYWFjEp55Jgcb8bkcunBVa62Sbqc897KkNCpLDvkoKuQAm5m8BxP2mm5Le2B2QoGRvNNyJpVqC",
  "key8": "5oFFpEnkwMcFZ2gieoErc4QdGeRY1RCtFKM6yExiPdyYHhHKwJzerPwT1SiSEH7RgapQmYYkgmTcRG3AxzW44THt",
  "key9": "2RwUMWW5FdwUPHJzyrid1LeLAguivzUmJCHHg7r5e3Hx6xsSLywj4mg2JwszjgmmzcM27C2aBNNgoD5aC65hqJLW",
  "key10": "5FTJxodqDtB2aBAeLmhWQSNGaPLVGayBkLgKoqXzm6Yd9yyKr83jJkjLcwBmr5JHtjUv1mdV4qNpFg916yXKQmqT",
  "key11": "2xmsMiKPBZ99PcvSrcXxcqcA1LkU9Afg1WqJVwvWBY53222RdRGRL4Yf3iaaA8QMBZB5mt3JrRzTKpi9aswAyAuc",
  "key12": "3JzuAycEJeSExNs3YpjRoURJ7156eauW1RhmMJBcGwN1e1PsoLQw5e7FqaEccRLFD3qSGCKJm3wDVrTa52VYwvUe",
  "key13": "52zs9b7cGwQvv8xbGtRKQauLUVAEGafrPNdysTWNLHV9iFKjjz4Gd1Xxd78bPARMjLiLYNPpxBgYx3b4en9qDSWs",
  "key14": "3S4tTB7sxaqR6uPRLixD7bLB7uymTNkZkx7vcvauVKJnJv8xXYS4oDAyYCrrj6UMHPgVUhW5Uk8fE8VUMeLYn4Z5",
  "key15": "4ke8L6B5uPLt1EqhXF5nM4bSu2UWWfuY8GPNZTyZP6sRMUfEKadZWN3UQZLMg7ubZhHM7vmWJ7hdxtqkMixcpivj",
  "key16": "4u1HVJo5eemPbqR9PREM4NZCZ5tuhvvBLvppyw1yzyPdKEPcj2pwS73p9g98NghUTrpBU1ep7iR97ziEiRHshD2h",
  "key17": "4LFjRig757bJQq17cWrGYnbR11bbQmB6dJEeDZqxUaHENFXJ89AFm89Uze8uE2oLWqfqayZEkn1N1C7sdNsJ6L85",
  "key18": "qa4x1FTofjGYcvZzCzUH82oBdFD6VAwrqwPGvZZ6X2CtJGNsAZfALVzNwax6S2WaN6WoLoEBke3Ucw4UvFunkLd",
  "key19": "5DHimNMjJBh3qQ7pJjTs13dM8qiaP8kL562zBFUx8E4XYpxXXUmsopX1hLkC9e2W5EdJ3Rp6aRsJcctsVp24hEkz",
  "key20": "JCasAcSUo7QgQ9veCoZSUpW6oafX8w6tQFDHLcdXkfLT7iZmN2yYYkgzXMer88BtmMzbvYQF9cYuRCzcAsRAGEg",
  "key21": "3AEWDroW8jPoQ4JZPzH1Knbyt7TK1zsoM8fJ2VdZbzCwusXAmhW9batqfQGsHo345AHFTnfNWrW1XzWxZ9UYsb88",
  "key22": "4CDuanAXNYPbJi7HGUK7LDzd1iznkPtWpnnVVxigqGEnYg5MMyziHgkTwaoLVZYaWDuUrvEQ8vfAJXUEbWAUtzLa",
  "key23": "3sv9n8E4kRhuK6NawiMKpjvwUP3EzdsPuDZKdt5pxAqvXS5kDsGQpmbKcNfmb1BFmX4sVxs1xH2zMWEG64xwmF8p",
  "key24": "Xtd14hPfd2yfHf3Xntt7j2yCWAmzQKaGPj8xmTBDyPi6CzsMaBaqTvgbL9DejU3HHNzCiAcrLi9CtkVgxL6cP5C",
  "key25": "5tLjppQDXtNRmTjLi3ChX5MVmW6fojKSkbk2Xvqo1QcFzLgogei9dACqwy7TfnpArFAreSAbYnhvFY6CUWCyxsJx",
  "key26": "4VarGQ7DJVvxUf5yaBh55zcV6pRcyyU8Jq8omr2d6JBFpiaEg4iJzh7Z3KjCNNJfnZtfJ4CFjzXKYMSwDBRZWsqq",
  "key27": "2osQ1WFHWXrNpLDJeQx3YYpqnkNHqrFbndLDiWDo9yv8Fj2eBgW7jEqLEyDyK1jKxeWDXkwu9bHth5RFfMsWEABa",
  "key28": "k4F2MnmEpEQbRruZpCCMK8pYH2pzkAaTiCHWFvSAhnnPSQWgPhfXpiZwvTvTvqX78AZ9yZUzfww7eu8L51yQV38",
  "key29": "4KQQrGbzsuvRfGzj29deTBMPuJDdd5ZdRdb49TKt8H16mnLNCkVXhRJk7r3zYactycSLAcAN4G4qMqnAaBt1P83p",
  "key30": "2J4oqkjTqJ9YAfJBRz2T9g9iBScoT6xgyXpm4TEGqDW2GD1NmSefSUtEHpTaKYobPJ58XKuT8b7zkDbQrqn1xS5L",
  "key31": "67qfaGnrTCnuxY6U9eFse7CygEdqPyWaadJqXDzfa6JzCeosFzFmqXCsxMZFraHmKdHQdq9ngKHLKd9eaMrcedFQ",
  "key32": "3Q2GVKcfdDfZgN8RdSE3tMEYbpMYc7fXjgvZ9rfxQKtEjreJf2kYY6zcoBfXTkTyNUkDcwcPxbHFshjQwPi3uCfi",
  "key33": "4AqqSWBNfaU8rFWCPZWw2JNNVSUivqVHoJitDwavMmzdKknd1pZrpbLVa3Lwz8AunEs9mPePF9NZ7NgBe4AXH2sM",
  "key34": "2oaHqxsD95ipuyKNA1hbagdEdXS2kpUFaEs9evyXQuK8ao4VjBf3md91QX5pDQGjg6hHBf1GP9ELGioQZUUuSVLd",
  "key35": "gw2HNpYqFTxzasNrTJyQYbVKdPezU5dyHS41o9ZmHHgs8TK4aT6aaVcB1Q433LvpF3NnPiMwLXxwBXa7bSbKwzg",
  "key36": "2pnY5T5mkD8n2PbD7EG1LreiTKniPuafYv4Y9mP39eUkFdS9WRtzXTKPXr7w48sjemDLesmBouUBTFo31a2bEKc2",
  "key37": "66KhYgKKcPJH7LS7MQ7FPqNTsF94uLPSo2Jw1RTBTGmqf46JXAhTX41AWXqfqZy8mKUxusMPYSz22jYs5AkJiHaH",
  "key38": "31fpKmnj98QTkbr3msVwAbSQVqqimhsegnHbM6DNG9Jms89GCxAvP9SpGdJ5UKi1PJEwJHx6QSRKiEGNg3C4ZYCz",
  "key39": "5tPqQhh8z4YWjUyVyc87Rx3GrM2XeRaXwzQk2z5HXhEHuxEquYgXaft1L9GPTQBxmFa64UYhi8AK6PVc96GgVzps",
  "key40": "E6Mu8mtfihgwJVBFt1fq6LKjBViAkm1xcRHPYufyRS8y4YACPjyWSqgoSag6uT35En1WUJDEYsYJyg7ssPQVBVE",
  "key41": "3bTZHsmzd1a75NWGQmq3tCtZqn7vMSfwYPtCaoX1xPJ7PZM1AL3pD6tnvwnXp1ps8J2vJ4x33v4GufcKcVLNZjcD",
  "key42": "seyDshJhAcWNWap5x1xcXUnbCystqpGnsKxn7ecZmfP1WMqeGpZB3gYv3u2tHijypBHkAAbbi2aGo9XPwtM5xWy",
  "key43": "4Kq9uqHXrwZcesosyz8TRYwuQLk9ZnEF6cZN16ry3ghLRBHXxGnLU1MHVUgAB81XPxXxiJGAMhAWKJs7dA5Pqe4d",
  "key44": "5KMyJigSxdqufvpMywgUQ3PDX3HYL6Z83JULQKQsUuR8YAuZgzUAHT3dikWLiA5qsgx6pmCB7sZd1yFe9tRvGaP8",
  "key45": "3cU8JXRNkfYY9JmzxGKNyrXpWbZij2S1SWH6c5XuxgQfi2V2p8T48eDBziRE8DMpXMLwyXvbCftE393J47cGK68K",
  "key46": "55ViXxUzZYfae2WVB2hzwf73mP2p7Jo74tNVGcWa613z8CQ6nZhR3qQ6F6ygY3fibgBKF6EbE92bYcHR4ooP5fZa"
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
