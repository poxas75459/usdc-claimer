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
    "4Lvj2aeMv2wjriAhqCUdWtXKTh2Wajgok8sJHFguYc5yjHxC9cxPpvFMLnYbvzqALxiWRyKfkUa6RDrETahjCWNN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HS5Egjm5ijKKShWVjJSQZPi1BDXEue3mh5sbj9sbukPDkDVivzzxC5CeokWXkPkm3dZaz1ptdgHYrx96mjz57in",
  "key1": "5Zx1BJCGyGFcHP3b5Ruoxf57wZZy5WAUfpWYvjcY5kELakVoNmU4JR8NsQTPsyVqBWtLqWDjPYdNVJnpt85GWgCr",
  "key2": "3wTj2DfnABTPnttzTmarToMQ66NqbhNeYP6buDkBcZQJvZzBfyUFRPafogMCYAXDY4snaSonHA6kFFhS41nHP4bY",
  "key3": "57fAaV41oGUZGzziyZwb7qK2BLQfAwmfK4AcukSaGpsXD36qB1fx1LVJ8URdQK1Ejv9xamaF9gBnG7pRMXe8oonk",
  "key4": "3dwSpU5jiXUqvLFUK9Kq4h4prAg4VfJvJHv7FgUVFFk5t6y2aET9J8KUGTX3hgfHBU4szkno56rcXt9wseaJvzrV",
  "key5": "4WPygvwALYSJpfUXNezVSkXvAtmfZKBocfAnaXWGKcVkviNg8kKyeBSEDaVGezPjPS2YDbCM9PBFKMnfHaNcEbeq",
  "key6": "5TbPXoRG8uKPX2fqJXUJUAGoRLbf1sc6ZGskjieZNpq7PkSq7qvSsdY3TdAuXA6dtogLqJ9btwNbd8TacDQsrrKx",
  "key7": "44Qk2FzcJE3o83dFS9mU6T2N1nwrMhHSTX579nttWeRMJz3KpGPXxS8aNcEeyPbxqqyGmRhMeBPeTdAnvn8YZe9z",
  "key8": "2m2D2aygQHfTAgbNUAoAwkXyLc13G2Gokxmp8xjTVvQEs5iGScyTYDGAgX9pmzo5QspfUAsHWUHnmCvw7s8gFq3A",
  "key9": "3H8DnFVZS5djkyTcdwHidCMDJT5PCsGMCzFoyxQAHqMqHESDBHncB4WkQMQFD24Yuqc5XXLUwjv3EuB8Yrj1Hxk8",
  "key10": "58yyoXKMoATp1zyUzAAVUNfu39bi7JG9fmpWpJiFuPebvhQeuqc7M1tFPg8qng3rB8FWm7UbCn8JFRJk4FzeLBYo",
  "key11": "473PK1aRYbmTfSjASJb2bFBTf3ZkxSWgiXS9MjvZnAibRyxzEFBJutLD6NX1ViRKin6THYHZHiJA38VrtvjHCoHR",
  "key12": "4Fr2UMdQShYRho9F1mmxbLjrFBmz8xMijWmMavsgw3TzimP46vtG7T5QyS4eqgFTgN26sDUeoF3WpkXtfCiXfvS5",
  "key13": "3X3ieZSVa85v8rn8CsqtrJvEZwWco25URAeqYD89XsRqrjgPjXiCCTV4Sk76anNcQCPnbvr9itSQGErYmLqD28uC",
  "key14": "5SEQ6x3vEJFUG1ib78npNmxRCoHcEMyLdKLH7Sozyrh9gwQYSb4ozh44rudYcFb47bGsv7AER5HS7tW9mZuMm2dY",
  "key15": "5nvnjSJ7jzxLyxxeEFgSqUoQ9faLHVpNTW536faQoEYbFcLE4gcT54iEBN5dUJtonFGdZPtWkT3hkZzgH6wqNpSe",
  "key16": "37YRfzdZTWQJsDiZqbeR5dUBJu7VWwjnpexcCF4U575EqdiwnBbyBasDCTmWSv1AXYuTWNQjvXFNQj3nGzLXXAEs",
  "key17": "2AmzXp7MkRq3a1XUkopJYi1rUbTFZF3i18HmevxsNUumSzkmPHCj1SJzB8NyVztjTAcKLAygXFsyhwM98VyqSSXZ",
  "key18": "2f6p61BPGPbzxKRWLkzVyyENeKauQKVtsagmBjyQHhfnS43T9qDX6DKpb3ERPuhQnm2RVD6u2RomEqy71mtmkML2",
  "key19": "3sYNAbRyNV8T6EgPeFMDRbrkR79zkdbXcsmgjekwB7GEU2qcGaahmrKYXorTgMdo4Uy6gueeHB89NLAmPQ7enQFr",
  "key20": "2yzU7Cn7sGQX4HAGWUuxAtEFmPQy1vjFZTRc28KLfaQ6cCQhCgKaN2TwWnizUxoFYESKikgcme3ZCjPfsY65VM4p",
  "key21": "21o2oW4tKBmJoPXEJuQErokmNKXK1AHrJKPA1do4bCpNjk6FBb4eobyWthRrrWTZyExJ8RNBx4dTofn2KUduJohy",
  "key22": "4LRpKuQqVFGW9eSu67YdLwLXztpoe8TB1MiMKbgPQypgecZsT7t1AxJj59LVcgGTpmXCaNahCbe8TwQrKbY4rmZA",
  "key23": "2eLTV8eDp2u1gtYp8Mre7D3wJkGN5F3xUADHcEoMAfWzQjAdeL3sv7qyj7kjTeUkQoThPQBDeGKGLV2nLiDGzCcb",
  "key24": "2DanexJF6XJcZMjeacVPavpyfHxoWpCyEwnZ4LkRE4BbWj4BG92CjRSmZucbm7iQqSVgQBsAJNe4d2mhD9u9t8h3",
  "key25": "2NNiDFL2xhq364wVV4MynXYUQi5qBGsBucmd3Fnv3A1rJizs5e64PV8zRQXH6uxv9ywGnVVQbL4oHmrmpKbESvJG",
  "key26": "58ZC61pXwdrr6Z1X6WgS3ov8euXGxnDgY2gKMVEnQBXSrE3VKDaNp9uRJaweUyP6mYy72BJmSbxHX3zLgQbzgzgw",
  "key27": "51rUX8jQbzP3mfB6VALPFU4GU7MdyEvaKMdbPPn2f8QJatnU2LVWQUzuPP2nDPieNePT3T9LnuzwYMUGm5Zg9nzo",
  "key28": "51hkx3Fxo9Nmk9uUHn4u5FdvQEkYVoNbU9aXba1PJUkmFKavAAREwLGvQ2xDFZoBjLgBmzqManBZZiTZyXfoKuvg",
  "key29": "2htZePhFX437eoof5D2pJFNLe3Ar6QxWNjUmzb85JP6biVUuKjBQWSUdZsRB8iBLCjLHogZBPZjy4iczARLSdVrq",
  "key30": "2EAPke18gZH69oVmkfVcJbjq1KwdkuBqKjB7P2t1LyHdmd1zCN8cV7bzPBszSQKHeTkrr4JSDxcv7zkzkBEaRsUx",
  "key31": "3kpt2SP1re8RZ9FNeUQyv8UfsYZBEmuFCvVTkMcJGPnjaZZacNMaRyHmRE4SyadGzTSwGJDbKdhqJDhArULXDDAG",
  "key32": "2i6wkUZ1bq4GzJHKGPGw3Rizxjog5TqPWe8gzuPY11AohYSQFYRUsrZe9tVw56RUwTvVGrrMeJPyXxsWFySuM11c",
  "key33": "3dvKBd9uTBC73ByGqEUSWf7m7Ew9au8pgK1QC26RTQw1bvdHGz57tvBnn6Ys5bQd8jRoQhQnSDDY4fJm6PvyGRba",
  "key34": "MJNjwFowK5XkKmBTMXEN8sFiykmHVKC493mFj8u7bE2JhdEUPzzGUkrEXGMgNxdjiYxMo2c1Rn19aQQgM5FmGhs",
  "key35": "2mxGpRBz1E5zznQ2gUEW1aasy17scdWEpTenxCA9yQ1j54fCwH5QcxdXM19KxyC5fiXU2PYvqnHC99JzWXi48cA6",
  "key36": "43W5hJPvvAmY9PZQSGN2jD8oBHhh8oUNiDzXfiicBp9rryLAhUEZodiSQkwrMij9BHFfvSgk3W3Uq8adwMrgbidh",
  "key37": "3q11DNJnZQg4V5pFVuhGLVaNSSj7jHYZ4zef9n6hGdtoogtd6t1DwBKUHyCPJg1Qxi7XkuqmSKfhcjx9s6smjVQS"
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
