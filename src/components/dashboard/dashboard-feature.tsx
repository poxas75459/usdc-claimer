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
    "2p5mFdHSKbzxFnLCTHW7YxUZ7G9PY65bqGgdDFAW6Zr1Cee5ZBxEa9XF7GJbU3o5cPoHUH6FEYEBpW9vaeTYaSKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K4pLWaZwxNyCFHf5qzteQzm4F8wCyh5PLhknXuxxPSJHjhcn61NJVUKJD2UiB8A3W7GZJFGdvjcJjEKhBC6gXG9",
  "key1": "7DjmYKsMDr1dbEz9Mxq4GHhoba38vWsKie9HsRN3jwPUowUC8kMfcnasLJog686gv4A3oMXwuNruGrMK1qMjJtt",
  "key2": "vZUo75ZoTZ8iAHyL5Z63qEC9XQYpTMCxDZK1S1dVTaBrJAhU8XBNy44bXViHk93m8sd38qbvGP9oRLms9YQkeRo",
  "key3": "2qHKv4ZTHgyD5PbsyVo4VHjb4JU3GVv19HjtMkBazP1eTJVT9ooxPpX9yNerFYTk59c95aPge2q8b9QK3FQd3ini",
  "key4": "NpWvT7gLv2aLGtPMDDv6ydQBEUhi4EiPddpG8h33W8FikrTypMWCMQze8faed6MJyLpnmFmrE6Sd91QtDjGgCza",
  "key5": "2XuYYQNcuNFjiayqTTVwBJV71jsK7UAhdFwff9hciRB7NJ3AH9Qb9GF8v86JqxzPvwaMtmLwkmSnuV5TpPvLMk7R",
  "key6": "4Uzw9Dj51p171zbiC8maQk7if1MYrgoADs1xgNshqSru5JXTn3LQhy7PZk4sSDLiMMsaL14jigAvYkQnxgNSuqzR",
  "key7": "2iS7Bk9Qchzx42hEHCEuucEXnfmTQhuq2saz77FMs9f3xujxRh2BqnJHAVE9D6fpFk3MH4Bfapqhzwi31tEkod3t",
  "key8": "45Vb9yzXrSePLXKUJH6NiCEbNu4LUwv6xY4LjXt9UehSQRA1oaA5bjrqKEQL8gGEtgg7pafMsV5gjvHxaT4QdNd2",
  "key9": "3vSuW14Nw6hHvzLbPaPSRMxxoxCHtu1ejivGUZvmKwsiksRmf98NzQDkmCq3RpcF72juBRHJZ2SAN9ZdjbJhe7XN",
  "key10": "y4MjWerEz3TFPVtqUmyepgkyrHassMjSwDc1WTP4Yb71qTKy2xL8beacLzmv6WnVM1zFkgpgRVj7iToa8okAKfc",
  "key11": "3s1weUqeDNVPjSwnpoU1bMtRhF9NV38c1V5g5Fr4faLmdKeXzAqQCd6e6a1uf5guSCH14rqo9JTD8FGAEYohDnMm",
  "key12": "27rX39Thme4mU1CXWrkpi6xKpj1BXWTwQPCnBZSvMjJSjXeVxnM439xtHBPz212g772MFb4Ec6mUFdVDqrNA3bvV",
  "key13": "2VWKojTXXmVCFAxTkghxVQ42jqpXdAPx5fdJzTbfjZ6SyvXttbm4CVgBjtc5fbUVgMn7eDiFrVMiG4spP5BVmeQW",
  "key14": "65RfNXa8MLSfAqX7zKnsEDbEH7P33bQLjQuL3okfRpcCpGhfpDCxWAWA18uFxcYP5A8rX8tC3N2QwxNb6jtiEuGZ",
  "key15": "31Vf63kXyUETinSsWA9EDXtpH1zCnmGJ3Zp1EMLK7j9njeGygZ5wfvQfKPmbrHS4NrQnfAgDTLntvfpR1sU2zVX9",
  "key16": "2uSWPoL7dBZbQxcaiAzN4fhj2JtXs7updC9yst8nym85Vry3w2o2dohRz7o2sXT5SmwUvboJbXTTe728EExJCrc2",
  "key17": "cAQjUbFuyrLq2qwkw8Nf73vMjf7guaBn357qSLHbTu8cSkNscz2WqAqhBvcEBmwEam1tApox6xRfKVcBHjLtMEQ",
  "key18": "5GH88jLDXgHBEjmN5UAmSQQeD64Fn3hFPiKauzuQkz3TrTmzXR8wQUXTYG14dZdmqovbAanSoQVHApK9sNt6Bn7L",
  "key19": "5YU7DBGWvDYquPoSp6yaXeFhKheK9rHRyuJafeJBnAxEjKgE9ydCiVnu7ZLBHSCguHVV1myJ3tACLjA4EGGDAoM",
  "key20": "SrcGrfzF45qXhwdZfihpYT1jT25BA67bfKp4TiN7LvbCVjtLg5ETS4KzoEdEUmadzRrnUto1bZgvUPvV3FBw3bX",
  "key21": "5XhoQGNcSe5nGF71hwCjof5jaED1c5rdSpR9QCyyYQ3KrpJFhzFiwLbVckSDaXDC3Nq8s5Jpj7b53kxoNq5ALjAN",
  "key22": "4AFZgPCP1nXesSAZ1Txa1ZondkdBKvNWgwQJKJiAJfBu6cHdmbri7yTF6fbuDJgWvU49n7onYhSC96ohWacMzfAZ",
  "key23": "S8uTz2LgCJ8kZ6eztAGJocLWo3GhNXsA7LJBiBEaxEvn9S5KeoenzHjthPo5hSuH4hxgFNsqP4uzSVK6pFMyf4g",
  "key24": "5CB4k6yFepm6MY7ETWms4maxn1w6LvSqHos3eYVgvULoUkKFPgsyqbsiEPiMJYFV8w2NWfa1zeNZTExebEr2D1Vo",
  "key25": "5omgAYHwXEZCT4CYbJwYUm8v6snPjTJGAJJqsyucJpeL3Nf2QT8uQJdFZ3h5LeXoPkphwRAqjBEzzdGDSYKrry1S",
  "key26": "4mWK2c8198pkjHLXrrENjiYLuKzrsvbMNWUWhUwaHRtUyMo95yx9JB9e1RKR1QQmSbNTKMAJrsQ864oaSR7tfi8b",
  "key27": "5d2uuHGnd4Q8KR5C5njTKxGQipXvq9evaJPTunkwbh8UPuowFZLuvTMW94CJweNjcshD8PF7QwYoWwQx2aAKsFis",
  "key28": "4igyofrUkh6qPbkC8Mcd2v7qqao9zJkiWdgvjrtzWTrd54yc8132JRNtJn2BpyMYmLyC2iAFfnomanKgRLvMKWoh",
  "key29": "6vHb1ifVQckXeZoViqLPRASEiq45tVqU2zCrCQ2Z1W1fAuoX2uZhyjYPWs8jB3S5w24ZzvTPquMYyibARZ3ym3H",
  "key30": "HxSkoP1Xdre8yAZtaX69SQZARpeiZCu2ZWK9MkAnajRKbvAH1wZhABAzgrmz72SPaqdUqnQ83f3wYtDJnfmKEUh",
  "key31": "23XVe5ipCm1XgiP7g7aHvH7Pg2s5PrSR6UX6Qu86kHbrXpfk1iyeHxrTtwRJFws2nA1e9HzWwyTWKSZXWhjq7Peo",
  "key32": "3B6SNc2KSoGcDqib2auAhwHgdAcpNnydQY63Qkbu4urh6mVzY4atDFroKMaWvaEKFPbwZwerDzGjgGYyWXoJ7QKv",
  "key33": "2BKrKeEibr84EdFccDb4QQb7XfokAoMRCcuCXAhPzhdDRKj1awZsEEbHJDcKbQiWncr7EvGinPZTJDQ2vRxaz3TB",
  "key34": "3XNRZ45YHm2BPtvFDhBcj8Dv1rmg4Nq2EXZiK9mKYN1cnRiKLFKDjka2tTLyxCPmghrJFx9G36rnddHN9siZwg2m",
  "key35": "2W58Tn6aoQ6JGW1gRpMMhJUbpgbu6sSU2GetowVYeTrLZthKJ1mT7YACYRJV4iTK5YCUFL2RUp893KQcPFnWazvz",
  "key36": "4XnzBvsPryLejXuw5S914ze1R1ZeFATENQ4rL2RuFp6EEMtRzBucmbnP4hgST7go8dXrZzSSLX1VVp1SPedqZQ3c",
  "key37": "4z4mKwjdfjaczcvpLozjneVmbDa1ssQZMZxMBYNUfMfgrSUe5UycJxkhzneHF3LKLPrBEZb4QYBBksGweY3PqgTv",
  "key38": "53QdKvtwCf8PX5HYtXPk9DvYsNn5assPHD4p6X5EzFknBLJmMKzemuzJGpPeUa5q23B1QHnHpkH4JYwuPg5MkD6o",
  "key39": "37LDz4cWzsXYgJAMimctCKYoARYKiNdEH9DsFJUwN7Z8Z826NZWPNQPhHWY3Y4vHhFNfv4nDJcBbiuj2gJb3xSra",
  "key40": "2785PQ1kMkybncCU6Rnt5GkYXAbxJuNVuJ8JyXc8Dqh2innFJ48HeFpeCKPXLfyFaqNw47yXo6S5jCeksrKNeSdR",
  "key41": "5UaWfedwJfd7ejk7uJqfpKuRpxPtNMs5so3bVie3uX5K7fu4i18KpfrKKriaifM7bzgNJY2jokjbp7HMfoMhePfK",
  "key42": "2HzLH6poA3ma2pWDctV3DETzBZ6cwxzzS58PEXEcS1RZqKysnxRQ7niywinRF6UydYfXjzCyA59b5gXQGaEUB3k4",
  "key43": "4TV6UTH5WGNeJeD1B3JRorowTg8joBGHpEdwUddxcgZoXj1ibdaz2UFryEdNJQ78ujhQZi2V798DDeCm1LJv5yxm",
  "key44": "QZFZMRN97JPjo5rZSWiGJtdrRM78F2GvPzFgMoLFKbeueE88PpVCbJ12mPDgqGZTdCb9gzjafy1wubhmec8o2c2",
  "key45": "5uqwX41r7GDQnzsfxMKJXSHKgLhKpcvzFb23gDpCgy2xKuTP97RqfcbMPWvReVQyx4NhVkZ6CqeJbNfPyZKb7ZVC",
  "key46": "334ekpEiPatwPd1adNNWQD9iEkgxB6BEQ4b9EJqqcArJXz9VJYH9K5wbLkv6Cqu6h8EywyTEYeAbKNPd6hvVnDLY"
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
