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
    "2y98s5Wy9qfNqZARdyAXSjVqMGwjhXg9iErMhiss13gcBFs2Un9JneSXyGp6eVmLLGxxdFWSg7ETYCJ77KpJkybB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G8XJj4EscHw619FWE1GjPPkT9FYZdtcruuB3YkQ9cbzT7a8gJfLLPQftBrArKxf5Caw8oTNFiU48pFTjcvezx4W",
  "key1": "2L6QzneZjQ4fzax9DFNF6YFuWJcracBp1Sk257f5uZTYb1qbHGQVEFu57s8YcLuWsrgyMrVfSBCYzuQQT8gQYVdH",
  "key2": "38jj1XVwqawQ6G4jjXQXHRxx11bq8TRxaBrv2SwMhSAYx4U4GikTW1zhidqVdRYdNQ4Y2gbHXeWcYna47iG2Zieo",
  "key3": "3d29zwJR6HwiwGRBMGkuwXfrfXKSDQSuRZmeReffsacB3vF2jFCu7QbPc75PVuwv9FhnqQjBoH9s7som92K2pcDD",
  "key4": "7T9E9VWx6mSQSLnwBchCMFuqGZRehx1ji94aivtQXa23LgsZnvEnFCF8tqdj5BZRNcKk7fzd12iQ1Eoxv8mhgiS",
  "key5": "3CAMD2HPJMdYAWVcHGofUwWniaifR5QbkrVZRMT1VbaxEhgaSK9tStZpw99rhbAaXaPfvg7sgxDRfMNfEHjuM6Vo",
  "key6": "2V3inuaTBHHr1caJuKnx5AYf9a8vDT1ccyq7z9BxxLa8Se3YufoCBdQ7NSw5qGqiy47pgcxYewaeZmVC9attRvBk",
  "key7": "5nC8CsxPw5mbtKryux58VpETRrynSDxVnYXg5RrJdiHpuaypeMRRFnvAdGxA7FzRajHQgXFxHqdAHFog6h2ZfDrt",
  "key8": "5BuuxTcckHEawiFFSrw3HcGnW1Z3PnArznZY5zdZJZReyM8Pzh9JzmTTvjH7yBrQbXwbTAacinkTs4z4tu93uEeB",
  "key9": "4avSgagmLAighrdH6qvQddyW7zDsragH1vcL8DMDVpZC6dkxryQhHmJD5rTG8gwFHhUew7wG6XtLwgYRbcQPwJCZ",
  "key10": "4N8dfomp3Gr5Kcp7RLtrpNXYN6SkY7t6Sgv4AJ4wBmwHDdcKmkbL5ovvDbte8osTHs7gBHEkmL64zWX4sVk3mGzV",
  "key11": "2s6mkNFBzmN3ynvdgVarwms1kssrB23N47k7nP8XRdk1bQ5GbSUE1K6gT3xgd2hwTHUWnDp8mWbBNKtaxq97NL3r",
  "key12": "59AkRsxwdLELNG93infHc5EEqSWxxD7mp6F2znwEFYobLCUouiHCju5EevjG7pxPcYQyLjyNV3c5KpCbxLeui8a7",
  "key13": "JcUtZGL2Wa7XzZxx6JMKXC2bNdWDVpWWCU795hKSEJTd118jVYsgZdZPzWRsU9Ns3sMmWyWwLtV6T89qELo6m1E",
  "key14": "5CoKEhoRbRotepQYzGSXeH6Az3r6u86jW6W3ijb7wfX1hSfDrWcYfi7F8x1SpkHVavzcA8t38fzUDQ6KihRrajuu",
  "key15": "5QhX8zv5UcNn8WFpGL6M1cdNyJTrnJS35Gbrp4R7rxptUqUJW9uaDYp5UxqSUp8DGvEpGUedHjHFe7Wp6Lx1suCL",
  "key16": "26bicmPoPYGEeNkYTNMcEbk6yjA4SHEVt1cA3CbBgXw9dmk6Y4ax7TQFLQzGDKmAbTERqZsWBwkwndukZy23Ab5H",
  "key17": "24bqotW3xQkhwtVTY7FYyy7omwFUBXcnAcrzqwGVwhqu9fCxg77Tp5JLw2fuyXgCpo4Xr984NyxkUwh1A17QnpCL",
  "key18": "5PLXsvnqhfvhm35SHjYt1auBxKEjhHtgthXScHt68e8uCARibvR1zxWkE3fPiriviNsQw56byuVuyvJVhJxkiGkz",
  "key19": "5SZaQRGVMTZFYbybFQCi4BFM5SVYZxZv1CEs7YbVUtpK7pL849K9QKMpLH3XSRKqGqEzT2E5KxxsxrLBgtWCnUfC",
  "key20": "2w6ZoJ9ArYQUnsTUYZiYE5NwZiUn7aawiJX6wo73rDa5DZvUg2t9dhZQpAWPPzzc38cPjqM8ZvLangZwHzbrjTCN",
  "key21": "3UmAnqWLQXFYJWMc2roJCztoYdAebm2uYnrF9TgFcRsCwrNrTNtrn3ZCaKysCePXnr9twNayfUuVEbcKFi6Vd17z",
  "key22": "2coCkdh1ZxY6nGcX36DSBDb88ktY359SSYmB4Apqqc8dZqVa8WYTLxaQMGESgmyp8eT9csSij2aapYYeAqjYouUY",
  "key23": "2ncxe61VM22Ao3p8caWfGnH13nH8WeUeMTWxKV6FPyuT5Vf5KxofdnV8rDftUBxrwYSGu9wMLvhzQ9zw4cYar99N",
  "key24": "4mRokPqwTnBFErTgbytswjrDaTUZnXNJZ8VqGNqk7Uv2JMZwbboRVH4KpVXjnfFGgfyRdTcN1tGe8be9DbXYhwnP",
  "key25": "3TBSH3Ut65N2GJ6PhSN2oL9NcdzomQBh1DpuGQMFm1JP54W7caagLpdWMfd3gKKUKwJ9dRP6MeRPV6MU1rz6Kiuh",
  "key26": "58ANXfs8VMpoRp2csf27XSJMBpRpjYL1H8rxCMgPoL8n2US5AZDHm2EyR7k3wYBRzGLgcdf7JaDivtS4FPUKi2Fk",
  "key27": "Hm2UdCAKAMmtR7eSrQjsmPnQgshBnKKdM3Jm4xmqFoxmBXUVZ79F1MENs2BscAASW9kaYSbztK6npNteXodJTB3",
  "key28": "2pQ6ZhV2cAu6H7hH54BotpJeh77scQysSMSh1dDsE3qLpprozT8FjwkB9QozTWLYVi2zDSGE8jxhvvKvmntTNWpP",
  "key29": "587DjGL8YyKyuH8ETG7yNo2cWGXyNUaT9g9qC2ShRWtHvbJb4YthWWihdgc2KPb9k5ZiCcPisqM7odXz46EMxeZs",
  "key30": "3QdhjyaH77x117m5U1FSDsBpJoWC1T1wfZcQnJhVsuS6bve4vKijZAg6XJiB8vgu8AtmP22ghaXLBLXqshGhDbuP",
  "key31": "3TYqv5Hp1xbf7fEBna57JvF4dCCXisT3CCRZN9uocdUosMGUjDz1NPdHwvr2A4tosfepM3CDToZmQcfRKajAP7Lk",
  "key32": "5fUuCRbmTUavku85F32DF6cyuz6P7zUqKh4f4owpmJcFpfnUVfSs21UyeJEzqMZxbHWdjcP19bTiXM8RmpqYuujU",
  "key33": "2RFxpZJBDC8KQza62J35z511u3eBVeEJDACKXUwNyavorirTqy15W9L5SfmBDGq2CM9vaU5vYqfgrf8EcC9qZzmg",
  "key34": "DcGf9gjcJganS7n43Pi3tfvTMDGtFpjV3TQuFJ7oftgHrsNGcwUWQqzA4t9mDVQRHKwQu75Ds1UwQeQqXGE76Ao",
  "key35": "2Uz8MfJ5JC6pCHdDWAaxkbb8WNNqGDg6QXcp5aQPdisyFBUFtWyonGx3wWR1es88SrrSu7kC94zaUQRWMuyzkqJh",
  "key36": "51UoZCdYBjVcHe9MAwT9AHtQ75mqU1dSBQiNHGgjUZNJxzsGJ9eY3TZDrJ6vGB5xqXXKFHFf7iygPkjTXsD5eASZ",
  "key37": "4UT4VDqoVVsQ1NDMKQc3gpDARQAe8nWRCinxNPKxDYuBqPsXmHtC26XXHB7fkmNGrmuA7qzm19Di2PkKnUNTakhh",
  "key38": "4wWC5noeA9GtgpM65LwrqZEbV88FXY5FeNuQoGe8LN5JhWdhjGjnfJJXmw2Cq5zbBY2AT3aZcxEcJs868xUDjGUy",
  "key39": "4MHZLz15cN3DNacvYiBKExm5K26RZNcDrw7f1UX2HVQHGRiwTokRnMfRwDhttQYkwJb973v9ZrAFYkGKxA1zsbt3",
  "key40": "51MFndpDs8EFPmSd7SmT8iEzHR6Rww45vSg24tbmC2qWJZjQhdZj7pFc4ib9636aK2WuaRLazeBiu3fZMFCNcmq2",
  "key41": "3gCZP4tYnS7rBUzo6ww9bAoEu3YfmG9muVZJhKd2XUPdDpbsEKzmv1W8YDUhdpd2wjKgbr2BPd2is9m3qtiVVPT7",
  "key42": "5jsDhi6FLTaMZePrW4yYp6GfTwXEFp9ZB2UG93tyfJTSa1NDFkqxt9z3qPcK1qFzCoPzKAU8od2E9KfWs8dSghX6",
  "key43": "4YzF4UNGdxh7S2fyjEcc4ZE4zvm1jJTys6WBRYV8KCSbE5RVVyt8W1d4ckH5dhrsRaSJaLVW46kjk76tHRYpyTo2",
  "key44": "5XSX2nnHUWCn35f1wT48xNrcvfW8Qaakb11r52DQ3ihdvQRF54haJ7zC6VYWhCT93L1yiubWZQaLHzdF2wuvGiLF",
  "key45": "3pymF5kFHLh4uuchV1Vv5jieRjonhSJAwRm83Y5KAhRsw2XHyfZfoj8jktbopftheereakv79oCb3KVxXkFQHHVj",
  "key46": "4cBQoPt4MiiE44kPS1BryHXFZEmJHRr2SnZKEpDjwgNns34NxEnkBafKt76Mf9scZauYrdh5YgPRNNZ6L1eF5XA5",
  "key47": "JDwmauSGNFLBC7txKBksdAmmuAmdWhVcYfLUYk7dcCeiX6PTPRVMrUj7gF4o3WygsmwPkHfAi3hvK6jwZoYpxmb",
  "key48": "5fr1AdfSmQiF9NCC66fiL72hT6LPeCzS9QWG1xEDQEptq85Eivy721piYLkj5pLvUudBRKdj38kQ1QzqB6M8Hmmz",
  "key49": "5wStDycHAzjHjSYMrjFBXTRQkxgs4MfbrQbgCUVV7WzbccW3jBDW5ms74kwqaAcGfM3PGnnvZcxWZ8puoAYv1t5w"
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
