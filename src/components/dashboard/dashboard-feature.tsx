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
    "43LZVUBAWL5mv7Wp9N5idUHTnfTZmoWx6pehfM1ZExL5ezgqFCELH4TEbma7fr8VSup7wq7W1dy3ZFmUfhMEnHWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LhxJZxzZ9AiVULFYfLbBpsF2fvEg9PDvgqh5ujWShirBLV1aEEmcbgTEyxNwnrh8FuzoDU1H7vv5jB9hmn5NkJq",
  "key1": "44gGfS3tk9cR7LnfPd1sNaRtscFyUzJ2gKyjGxjgiSNhGGBoTcqcxhUZ6SgtRsRn77GfVpLUoYyQ6SJYQCvTWNwq",
  "key2": "4aRDnbQWqrZa5T9BSXf1NuS5Utn6YgaPYEowajKUwtVufbywXLLJ3F9gDpoExHKouQC1y6wkMBdP6vX2mhMvgUMZ",
  "key3": "2VCWiAcoL6Xjad58CwWLzKuwGTEzQqXWuz73MDwq8A2h6cHtyiuAadD3bt2uA4bUkNQgmSaDSUcXmNUy8Wn8VYqV",
  "key4": "4V1Jaqz5L8gt5EecfQDrqpJ9F4UKtuGjHqvgHMeiZ4DSBTHW4P7qKizTkKGpQfhRZCJ7DREeBcVH9UYF2ucasFDv",
  "key5": "3irKyGYAKEqZ1Zuwuh6TNeRurgEoDhxrJ4keJSrAHKHQQ4D82DZAyhNg6Z7qvC8crJXi8Zny7hBL9zfe3AoAsATY",
  "key6": "3CtUVG73oy26nF5NcYRVCX9EW2VbmEPjRAuJWfY3hWvsCJgd3ro9MGKWcDq1joLTXAk6S7upJdZm7CiywraeUxr8",
  "key7": "3SqkKYT7htPnSdMaPEnDyaamYZu1LtSoSGE3MpKSxx7KsGjNswDZyfRx4Pk6KsMXfsBdbP9L8Vy6TntcvbGVpZU8",
  "key8": "4AYSGEApQpPtQWwGwz6c2x68BXPKbz5SosoyR6i3k32mXGK7JfSCN1m4JaddosS6Vx7SoKsfqanhoVAvozgADkKU",
  "key9": "2ickrXGetL4d5KruXs7aigh7qC3ognBBZnhAy48zoXE7JhndK55kzFMSnfBmdjahtthNLWrhoDrpxEnwQK9BDuMW",
  "key10": "3MeKS9QnLg44bYYuj4ETxhxPqrMZuw9jvFSVNvPu84hZvLtFhd9a512kDscWK72QsNdhcUht9nRZie3CDgBhFLQ3",
  "key11": "4FE8uZBejLrqW7sFhD6CkzZ698FhSCrTndDL1DydGmLnVPbJ7bZLejiVWf7YHY1QFmHkRYCnbYpeUjkK5VBAydLr",
  "key12": "3bk6gqabZsAF9TPntRgZXBHCDs3E6YjuiMjQqnbewM9CbV89dqBo3QwpaJPkJLAwmCkjZDPhDj6bLNRZTmvNpbZA",
  "key13": "23gxrVgMJnvjYdU5SKkTi82zqMzZCa7d9rhKAEUCqRvDscHxwKtTPhMHawQYdEGYkQ6613Zk6q2kXMDxowTS7uyw",
  "key14": "3dAXk4JnnqGyFQfKhrhb1jx1716Lw9MB5bCATsiC3s16aRYDeZ9Ce14X4dW29fRrvWuu2naBQSjwCPefv8oiV4XL",
  "key15": "L7LUwsiLYL5VGWaTMCnvh4RiRQJZxYqNXPgJM4kqvfp56NmLxmxSAiXVfMNkcwRyqVCAUymvktyYGjAsJXwhGwY",
  "key16": "2uiJ8mSaqB23HVuKSnA264gjNMu7r7u5bjPRvm8EpQKbpbq2k4HGx35QzdguMAhNToP3CJs54F3XFq68c6jGdNo5",
  "key17": "5rJ3GUn6Mxwajk73CSdassjbMbZTMV56Poi4PhS23574Q8WLGx6QXnq6HM5HJVGszuNWgK29ziAUoP36qVcs1Pms",
  "key18": "4YEDqkbr7erTjqwyrfb2tF7e9rsg7HG3E2PWUa6RHfe762EqGrVPA1zrBhqLwMwW461SQs8SUWUtswhTSenf1yXc",
  "key19": "5JQzjgqkx5dyJuGxbSn7VkXF8NmcZPyksRkHhdxaCEGaR626DJ4Y7XrNyz9qVY7UQubkCAtXi4FQUHtfmagHf5yy",
  "key20": "4f8taoW7HUCPxRPFPGL6XVwWvFfcCd8rH12XYkQwos3a7dbJrfGfBffY9dYUmcLY2L9nJhsYvUcaA6urjSpAnrmk",
  "key21": "Eq8nZCe9H9MKvj3BeEgztg8Fno6yvw8WiqzrkQUQEABHGtZCReYKQUuVLQiotZdMsMQpuNgsG4Ewzb5NjbnFCPT",
  "key22": "3JJFuoucZC44eMfu8uG5p3oSDfWYHnXex7RH5UoJN9xkDnee8jasdor5vdcc9VjsznBALBTGHLbvnN3XzLFH4io7",
  "key23": "2DfdZhNQnNjJHkzvjFupSvVVCRknkKynEHL4PTQftSHAMmJb6ZAMBDqBLSgUCjxzZmYLPfiaeLrkQsjGYvQZMUfe",
  "key24": "5SFF16YeaLJWF6Qxjb2cuZRAutHh3BEH2Q1sqx6E8XD1Kggddj3AumEwaUhJF4UENxTnrg93EV9SgFTa4TXyyyYV",
  "key25": "34FqyRBc3a2yo5rJJfgWwXBU5Pcv5duKLwsYZVMhaqHp3S34KJrLNe4XzAqxiYLSiA9jvdyrVWJRnRYe5uYk4WJ9",
  "key26": "3BZiLh2xPDYW8KVxCRDNLnfkv71xmPb6aFDGqdGrAbgS4XjyF9vgR7CznXbY5RtykLmMjHhve7XHgpFJVDXsLQfA",
  "key27": "4DEoSixv2JimNufrEeggBDXqHesDK6db1grixbvHQPiBMncU2A87N2wFGdb9QV1oHbKX7zvaJQpvFWL4qPghV9GM",
  "key28": "5LNCRJLGQfs5ntkxEJcQGEMymURrVmR7vXr75xWx88UJYr7ypsePYG6JvWeeKvHNvVZ1LnHLm3HaafmsvchpPK25",
  "key29": "5bf58e4Lciepvjhv93DcQWuFXdZ5SWtUKA57SThV2SVPtqyZC4dQs8f8LZqKjkDVLhMBJffa9898yMFN1GQarWEb",
  "key30": "tFw33A6rQGpDz64J55iDuDtnXfJhVs4wmABqPJNMEsAjLQZJxT7JLKmywJZH7KWPPnT6jqDow49ryGYAdc4XaT1",
  "key31": "GWCGafyy87mYfCpCAAM2KPQ7kQmcD3jFFXYCAo5YUBtgMJsq1VX3kjUVYHopC7RUrk5S6vSuUgXjSyMeoMaBzB3",
  "key32": "LBMHxHRGeryxKxXnJHb3QGmPyLpeMYgqL7DgErTDXWbE7H8EXAozrwaCxQaHaShA9igwhXRPPTHKqziR9MhzsDx",
  "key33": "3xp7XS5cgSnmhwCqbS6qw8dAzBjquoM1xaD4rhSMtkJguEZzgdDLRD5Q9ixAzuBNR4wuoTAHEdZHrsWtHs96DdvN",
  "key34": "a8c3zx2q2e7TmG6GhGhvJ1uA2JJTp6k5juvz54VPC8angJYu3AwGQ5RVk4SZMT3qRH34HRgVVCoPDNDYmRA3oN9",
  "key35": "418Ay8eks79deEH4s3FdbfDSLJ4XajNjYMvR7MVPCMmHdQcy4WHTEeLQPPuMsQxNDetY6FwQqgtcfJbVtT99k1Wp",
  "key36": "5WfNRMXDPZfEJ5UKz7HCNb6dv6hAkECUsXnoAs2TtCY6fiSgGgwgU1xrqenYGazbUjecZacoAZXzBxcohWMWu3Gm",
  "key37": "5e3Q7ZS8TXW3FJyo6gCRHEZc5kiTfh8zQ4L7fpY6NkDbAiGD5H6mZLNictDFgGuNyQStX8LueiLEXt255trduPfP",
  "key38": "3MVSTAu6zAQUQgBP5gzwbVMCyVm37sv4DX5Q1FVtYEgZSVAutEh9BxC7qDPWd4FL3RJD8NLuE4wjAsy4yneB8EMc",
  "key39": "5SC8QDQJU1Sy3jZkavxVnFRqM7RUsCzfERPGkSo21521VH931usrssyNuGK34TeRqnkHi3SxEZzFsgampb5Sypz3",
  "key40": "3f5sc6crunLvS13j1VHJNRKS4BKx8kys7td4cbey4aNBDCztqetxYPwomX1uMmxpnrwh5ZytfAerdPh5UK3QSQcz",
  "key41": "5MtHo5E78npMFW1YaWe4ChTMJbck8GZiuXMrM26t7dRoG23AEc4JGTDk48vEXKMXhg9Jtv9EASgW3Fjs4X5FRahn",
  "key42": "2CZZ3rLuLHGkdKTX6H62Wkkxn8PA61G4ShJTgSNqX8nZV1B67X45RTWJfamEBHfiVtGWn1PrSzuuTBeqfojdktjs",
  "key43": "5hb23kQaQ56UGreBVvnh4oSUfAJZSXWckQcDsh5GNQG55c4pLsw5pdKZZB69VyWCf2Vb5GBB5maCGXaM9QrNoi6a",
  "key44": "3ZoTZdGz7ZNinTtauwmdr99R4Mqw57bmwyNHCHaJ1qfyXrLqSDa5xZXzAfwda68bEpa887ddzNVWhQXjYCazXdrF",
  "key45": "3EwkudUmjZiGYBcdVF5ZpzM43myfqzNcuC8BhdgX47V79Q6BQ3e1zk1LK3B1KvF7TspqMCgM9XjZVxLYCYUuwP3X",
  "key46": "fnm4gkFVRKokabznsGJP5BmLL3C6rSSHDMHj9G1NCHksgRdkyasuJ8NXKUU3e3YmXdDL33xh6YyepiKpR9tuLB7",
  "key47": "2YrCJMN9RScPXSy5DppBXCyGB8fE23ehXor2nqdvvbs133Jjd7BkPUGsGyhtTSQSdX3zyKhHRhSFvUitGJ6az9Ya",
  "key48": "xwa2YpU18jNZu72aUgRedycAfgaGLHxWSBzESTGkq5GpS71kzCrZYNxHDcrqrSNaBaiBUdiXFK5C656MJ5zGjYH"
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
