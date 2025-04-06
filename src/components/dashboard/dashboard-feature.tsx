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
    "2CfEP3L7LSrt5RjFWwxdV32Z7UoDFyYv8puZ7yNhEUF7GwWqWDwtR3pa1Ndc6BJDPyDzQ6aa1pNuP9MxKcbqTMFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NM2fLduuaiF3ufkUJYkiYmacqyuJ3tPNBDaNGsSuF368ADmtZ59ybq7JZNjHkT78WHUVK41kq2TwkAsX4KLnJgs",
  "key1": "3KGcK8jsjfVsN9yUuCx9gQiGZQ5p5BYEgr2kqpRh5G1A1wjssXSFF6viDCZxX48aCqeqAsgYfUGbNaRipuqe8g97",
  "key2": "4yZM1QnVvpq2jNdhUxLgtxxkHwsSs1hDTntFDLQHpb8hTeuev8BphXjeuxfmYFtRzgSz2XqKEk4GS4w84WxTcQwW",
  "key3": "36q19RCvWdNeCgBp9ppU4Atss6Ya26nVsiopWvPNmBwEhCZNzd7JF6QPP5qN7ScAUGppVTPs1N9kLG6c2otPKTvM",
  "key4": "5mtVFKPbYPmh1ruke2p5j57S18WKFSJhzdVnZ8XPhd4po3YTqmUgkjMjQWfSMiXdCPsu6TcHBYW37Vb5QaQyFspp",
  "key5": "4PkorkSHpmCvefkJb6wviczU5kGofUk1JC53A3XbYQaUqD3uMqAMj9RcijSvC19eLiacbuBwk4KfH6QD7KtLdozE",
  "key6": "4nqBGfHZhWeqeWDJ3RvcfQwWhFpFntwXVBvKFgXRZK93QJ3L4TJQV56fMzoUaQyPBr7mjnsmppttFCCMRup3ELUW",
  "key7": "YsG25w1yPVn6Ky98dfpQK5LN8GYs4uMA8ZYf8uaxEjuoVghHjY1kVUaESBYM7rcmqBhJNuqcGtV6JYi6qhNnUE9",
  "key8": "5FxGdFr4ECzVa54cegXEHcqfeBVoAdCuUVVQHw9igKXumrQbQtFkFVoGemRbud6HHvftP6x7SNXxA4mHkYay6KS6",
  "key9": "64h9vHaSDkRAibHFmJdXfmo54AFs8QoXZSwXkvvFJ3qpsaUZZRaxDAN4DDTEEHWSQW8MmbpXC2J38kELgFv1DMxa",
  "key10": "3VmLMPKyHWTQ95fVDjbueWc4JtYpwgB5svhHgdMtxaBwR9HM2Mug3ut7rrGsdWrcYfbFFEnF5zCKYZxPawxGLdMe",
  "key11": "39UqMFo12uoGrP4AzYZKuN3iCWJQiHS7GTnoFCNC6fRooty6Vp9gNzqG151Grr3r4xtowuhnHfmMGQdAQHoAwbRG",
  "key12": "knsBXVp3FpdZCVedQGEvjAPFGqF4TWQag7nEcKfWH7g4r44RCjNtGLNAX4ZvCk4fsT2ehQeiPZ7FXsMYWHos8kh",
  "key13": "2qy87UMheFpqHdiUktEaqBTZEEX2z4ATB3pG1KgjsEuNGkNwWq2w38LsBqWaup4o7k861NcJFYaUm4s9u8D3KWye",
  "key14": "sbPZrwYShhRdVpn894AnzoAVcHLEN1AWVkYx11NkfAxnUEUTPSkFaY8Q7igvJNysd44LpY5KzDfxdEFYekWksDd",
  "key15": "3GXV8T8NXPsLkX3jMAAy5fY6kr13RGkmWnwQ5z1gr6GdBxBrikScjCY2y9HF2bupM6yrYyT7chV8G2sZ42XJiQ8o",
  "key16": "qWF6bKv3ZeHbEEgVVbDoK9e3KMj2dJhkRFJVVgRkSvYYTotnXAfnPvdsqnoPM6NfYnqrJZVLdw8vMBRj9kKJRNc",
  "key17": "4ZiSPbvaKyJKQWiLhdt3yH3GMvCLrsAUzvwGshPxDPQF1pFqcHdGeUQ4edgxKo5b8pXiWksqJeUeRmtmePk4Wz89",
  "key18": "4fjSea4YcykCRfLHna8gj1oo3mUA5QXVPUoCwrYSEeLe1EKuPePEB5RrudcPfyFEAeLJ7sUS2pboJTRgeu2dLmmT",
  "key19": "3HKh64S53v7rN2NkkCMJR28rz8qfCahKeXH26CJFNYKhYBM6y7qys41d2p3MB5TCJpdAa35nAUHngQ2cY9ySGVQb",
  "key20": "51WgpzsAM4AyRMs9LN5z6gLJ2rmUSkHGa2mSBaBi6fJDWp7BztmZDwuGcpxtqpprwwvCKx6t9XmVJ5gYLMup9Fqd",
  "key21": "4u6CrzeLgJtYd9zUdVq9UhajeobjL2QgSvhgPRAsXuddG9S2n2pGQvQbUCU6G3zLn3GBe5NqEuRTwZtLWw3f5LFF",
  "key22": "4nnBkTQrtoVPMuYyN7n5qVwhuSQnPTce1v38YXewrhVErhJK8LXu6LHNXscLBVxEAGuqm8JWqvppCXEXk8uzfznX",
  "key23": "47uYp3NY3Vba4FJRxeDSiwc7RtSTcSA7hCfvCztTMq4RjucTJKWJWRYEnsjz9VF8KUndDD1BXaJfie65cSAbp411",
  "key24": "2u2wj5H44YtChrSVHfnTjSci5VsxW4RAitdqZihCErK5aRt9q8xyvTZc87bjH3FoEodDLLT67UKggb7xf34hfWpH",
  "key25": "4LKLSiXsYY1ECichhxNWCsKV7B4MyZqJvFWocZroqNuAZuNpKnM4WoiEFF7KGaP1UouVYs4Ftfuhcs3jn621bVka",
  "key26": "V6ovuajX3ZodhtUV9quHzajwxoHTc5Y57bsuXNEq1KfRebvPYs32892vc6EA5ZmG2582ujQXX4vY9eHoXM1wodi",
  "key27": "3NNJXhdkG67QWhY2QajKYSPo3Mah1X6E3uXCSW3iy67yYkS1BE9f7AxXX4k6kfBow2SWaS5ASViABnn4Kx4S8Lsu",
  "key28": "4Pn7nPegw53enA8u4vJNqvpjUCGcNQamwAzDpU5PTmH1q3srrsLmCy9McRyyqJ3AAy4RBmxjp3UmfRpA9ZiHj3p1",
  "key29": "5fSHgi2jpsmo69bxpY5tNYrXWSEEqzwYvvXJ58jCWJiFBmLeQ4k5eJoNhQcnKGTBTmrhm8fQxmBJRPqcmx5YJC89",
  "key30": "23FyRuoh5yMtuJ79FSVKRqRkg27EFUonNWsCukGfrGUTNTmjzXDR6peecCQ4oH3n7HjFHtMxr3BeAJXZH7Bp6CBf",
  "key31": "4tzERgsGuj8kps1wpH2cUR2Qff5XjVUWp1sYeucLajXdoAbcxDo7p8YJiPdmghUbMSdiKLXtumu4zW4wPKRneoWg",
  "key32": "MJLPYuVyeUsGCTaeydgYjJZqtn7Xc71VehMpDHTFA5Jp9nGFwScRVZMYG2Y8ab9yq8hFRdbAXL6v3oaYMNjA6hA",
  "key33": "5aHKULbv5uGSXBkSM7aG4NerunGRQMreYiteVhYw5ddHKSynRT2rF82mjFCvWKfYpNVdzgayXz5ohYG6zEsSL7nD",
  "key34": "3jbv5ZzSv8RZx4sp27wDDqySL6hAghjPrnjnaaf6CtsPEVDEho6Gfs7JM37VNifzATz5d2MV6MVcf6HtkgnyP5Wa",
  "key35": "2um5WCyBS27CpyWb5s9HomcHcgFi5V55rRJ3UA8TWZJnEyHbz6d9SepdwnzuggsGrLVCXmepf76159adPSHGDpW3",
  "key36": "4hXcy8DxXe7cBdnsLhdX7UzLiXCo47yooFbPKmWofpH6GEXh4LZx4duEJdz3QGfZcNpojqBvdAixxohiFHbXj3L4",
  "key37": "5VBp9JpfnceVCxrTbtJdwaa6yu3YT1T1CTTkuLDg1cNGg9ievmFDys4Mx5M5vjXjzydecnUWcHnonqbZCRuSZw16",
  "key38": "4BYQSjVXAkNBXboqfrUuWfj7oEPwDRo4fQSJ5JVyxfYnxr6EmD2TRd5T4QihYHQqgctic2VEbvviDeD14RfLv654",
  "key39": "5BXU7XifMxdgnDn1Neq3N42jowhFSXtQjVqQHkraaqiem5o8nvgGfpoWwX1bCBrBdXoHvHXJXWzufpZ5a4sGZ6Ki",
  "key40": "2PkmtB3UuwNiGp1Py9y6XwQVPpJGTRx4vygPttZccfXtJ8a1TqNrG6kWJNwXzZopdjvPCMNfR4Umebz1rvr9CsKB",
  "key41": "c4Pd2HACQU6ofAG3jRzsTMakvKUki7nHhuCFAaA4ZhBP6xXs4sjRThwMoQJ7Fh7bqx3GvPJip7otghSfxznA3Rj",
  "key42": "4Js4kbDYNT2KPKSxUXe7s3kKiwZr1o4ZhhXxauwh6hyDhAiMkRLxV8XquYAknuXiGJPSgFpcMeViHrMrst8YDWfk",
  "key43": "4hTjZr74tMGEvCbNsV6yTUH85wngnjyHEbaUivWCdB5q72WyCx8p8e68ZuPxBKkn6bYtiSxCBAkugD3YA9N2nP7i",
  "key44": "3kgdfFSykgym82wAo9ms1VHU3zdwPwHBUKvvCRZp85F8kF6nFuCYHMtmGEVqECBzm5jgrTd3jtNcZooiS1JEAZMc",
  "key45": "32SqsyApz1cW2odhFfGn5NcGbsZ35gZJAfAdCLmpzU9S6x5VwciVEUp6zKxTScBiTJMumMk4zLZ3XLrcxVQHcx22",
  "key46": "ZQbNQwHBJr9xweUphG41TbrKx5ZsSNT467fSrmckjymcWQd6W8T4aRRx5rVdmyqVNAeuDtqN652WrZuSmUhRNff",
  "key47": "uFCrV1dkMYz3Fq5qv4BWgHCjALFuP5RssBxQ7CxDbMAnZ2R7vaUcts7oUgACNtD3mdqG44M9d2sk52Ue7v9LgcL"
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
