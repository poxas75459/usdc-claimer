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
    "39EuDapRVfnpNxaUmBAUEAiABugrSDUmZVmqfvZhJaAtuKCeVaFvQyF9FQSCzs4T1fAhsNPH86bkDV1CF9CpNWTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "531eCKyK51RhNWEKL9Fn8eQV9K6raoxpGLgMQmcKtJrdYLPuZjpY8bcyJQqkvuKGXy3JC9JCfVmmUDdFaBnLH1ZD",
  "key1": "3Hw39cDKWYrDb4bDwhptmo3ydn9hFSu2Wf5DrtWApwWofioCLA6MPoQqegRmayHCT2XhKStYxs7zsVS3EL3iFT46",
  "key2": "FFh3BpFkYa3U2evr2eBoC7tZcivCLB1VVKQqvxvuRfp8tNrn9A26jGvS1kKtovLEHF75ajFknmmL7acEhse2zyL",
  "key3": "4xFJVZTve1NkYMhisM3uvbwL7tPUeM5q5z2Z7bUHnjJAgmz4mLTTDbAmLkfkPqqcNy6dJsEdy8og3yhD71b3UPqg",
  "key4": "3RpggbqoqkvnAX7bjL1y7mAe2VLbTdhMUPafyGL9ECZF6eB9DfXaMPGp6ee1DDn7mYjwnZvCnZLhic3BnurevxY7",
  "key5": "2hZs7mmCj3kbjTUU46BZjxoozjGnok1ptVka1npivkByRhQ5G4rviko9Pi6WBfzehtKzFAFJ94i4dJmHoeQwbV12",
  "key6": "3rSh9Hp8kR6CA4n3WVrMUBStjq8MsSDMTFQUigsNgPjvcqykVhrQLB47N2jg3Aknzk9CqY9J6AFU5DVB6qyVfJTh",
  "key7": "4gnWAqQF94s71PzDGxSZfPC7zUAfXr3TFow4ysEfPnZK6AYxDuRcJyKACf5A5Q5AoNyuVgsT9e1Uh3Xw86NmNe6k",
  "key8": "5wYdaXJGxLa8QCiVbBByJDPUe2Xps6EhMDLPK2s5Qt16FNyJAgJdgEokJJzpSVXZAyCRJXuo261z56UrQZ8rNa6b",
  "key9": "56SVCscbh5rUi9nVhP9dCz7Y9EcGUtNCDNxDCpgKPUEZy8cudXXjpfQdcoDK7KACGoidbdi4zD7H14ZKKna9eq45",
  "key10": "4DDv5PxLEmWk9oV4ggCckJqsF5c6trA1u1f9NirweHdC29m8vsaPJXWGQxAGNvHQjeXh1Ewkg7WaUYoWcMmAt5GZ",
  "key11": "53w4mCq9oX1LyrNTez7nqs4xN5BG1vXE9oPVS4D2j9LKcnRXREh71DbHcmybah79DYVJcCi5197yLM7Pp396Ve1u",
  "key12": "5LXpQJHnziTMQK2QJGXAmwcnNfiNimELpp5ErjuKNTgRuXz3W4TZyVWAPvtdBXtApwceWujgqfbdS9nREmLmfGmh",
  "key13": "2uwvD3jb3A655FcV1U6y9kx3C2gpsXcZKYBjQxuzm6uoaVZJF1G3ZrwKugcmshCfDqAuyYwB47fvWhMSN5zbhbcu",
  "key14": "37d7vZzVfArrG5zj4oZrAP2KR5ZdfD7y5C4VbxTiR6LySxm9s6nV8BzUhna1ihbNTwJKfX6q7ehA2oo2gRWEjagr",
  "key15": "4DxkCR7KM9VbkB1E3mwSk7o7UvhW1GRsi4NWHXigaAy1MiSLxKqnvtduJ5dCg1TyjAeqWVwt56bVQzHSGwYX4FFZ",
  "key16": "3FbgHZMqwX5Jnwxr1JGD2AEkxQ7JjxDKcZW5anp6Yhrbkps91rUwNQTd8ZGWMom5P78yHhk2KY7NW7dJufqSCpCB",
  "key17": "YSMetWEkmQmj6GkTRqvvW3HW4Punx277iqmbfDk7i6UMjhK1HmebFR9UbccPnpqNASBpWuswUEh9Sk9i2KmK1YR",
  "key18": "483AXKpQyjFtFPnoUMhsjjsdVXX8RfgxQwdjgWnBxcTeUjowfEDmzNd8CtRa7yjodv7T4yxdcpLswPwzo91pccRu",
  "key19": "3uuRs5nPuVSJ2t3FZot7BEVMhDAeT3ZFrPzBRW4PVUQdV5shNvCdwLQAGtZnXnNYjDc9jxm2Pp1UGtw1JEi8DQan",
  "key20": "4ZtLkH5zdZuV5rH1rcPizQKAgviL5qDwK3oCeWiGD5N9ecuQmB9sbpzA5jLGYhNnP62C5Z395jYLFPoF5MNuECsA",
  "key21": "5geCZgDousTfNAE8H4jN6JZkyyUKh5UbEo1HXCQ6bSziDkNCKDknYbkcYjLY4FC8tTpi1u9yFeraA68gaTHM5MeJ",
  "key22": "5i2Dhhifv6YaGe1EASrtHV4YHmL9U87k7nYQLPVLDTXFCJGXerWGuY9hqDGqgNWV12FWxKAhmmgq6fNJJxrds9UY",
  "key23": "4VU99P8M6QZDP7aY7soSY2JaYZWeGBkfvVxDCTU3UjS2EFwyVo7xF3FUbhmKM93WqB6NzFGwRwGkbcBM54dC8WNd",
  "key24": "4B7973aEnnRGRjAqghwjnnXfJdEKqLLGkUAqoeTEHKt9rG2BbMX2pQqF9NQixipkqq8zGsKMXfzMthCawBmScdPq",
  "key25": "5NajzjRQBCihEhSFtB6ML3q28NWCwwZsbcrBFgfUsqsHcTXCbkA8ZDTTg4PqNQykNtCjcKGYJ1H3wuQDF4oFJNP7",
  "key26": "27jA9ZYuximvzTMMD4gbaJGesqmnrRwTUYonkecu7LMFxh8gUNp7zEwg3piqiKqYwrVyRpTmfXgzS3UYAdLAHkxu",
  "key27": "3RGc8wsmaoJCiy7srhjnbDqd4inA3oUDwAKyaP91TjwFS8HghVQ6Pkq3pLstwJuoKjCpJULdbpZzJYDiV1fnWybA",
  "key28": "44kRc6cLWSjMXfQr646S1JYeWqFNN3a9SbHufkQ2dALvRJCfr5bupDV7fWy4P8geL337g497ZNRbA7bZDHTRUphT",
  "key29": "3gBz6cHZcsJXNAxwHCJxEpPSix79g9ZZQ2kZdZkugUTZ2kDovrgKDGuvrDvtGqogu9PyZgnTLoyeokLm3178Rypo",
  "key30": "4q1CR1dSwB3itaxa7iwsCCMVT2nkkrHE78K5q1V1tH6VasRGBJEhQnBap8ALxt5NuzufQSiTKamURTNPPbyfnZtD",
  "key31": "3Q5rTY8DEZvnY14q3QEakXkKpocdzTErzhotBs5LJgB6ozfttTNzGRwTvCr51QRarTGcQ8xCKG2j5rsTu4NZGZYP",
  "key32": "Wh978UtJhEA13M3knSLHU6fiPKnokZKfGZdiSmo3SnDMDBsLuQ29k1UesXpv9ubgAYzAwR3G2HEVhESgRMVgGse",
  "key33": "5ragUccCimLWSNw3vCpc5i4D6rpbUtat7xwY3AKi6VotTfQv7mS3VmLNCAi82WRN8XSKQaHLGoHC5Vv1iqrRpQv",
  "key34": "3sxpaBBe5CFop1UP14s5smTAxeZ94f3AgT4VcoaXJa7wRcksCWK3MmgfZRcigAneHAtN7r51ohiDkhCRUA6TkYDM",
  "key35": "Vg6GQzxPHWzdDR4BTjKnQK38DSNhQ4gEX84f49HtD6DDAUMBtYd6o21hoToVazP1SfYkk3p9MDL6HWmoPM1R17j",
  "key36": "63oVCYKBeZBPWdFULvxdhW1R6zRCGjzdupZbYULsTkW3QAyKNo7xj29dsYHdjAa4DgtNZHc5AgYjuPf7e1zXawBP",
  "key37": "4TNSSh5hLpmMa3KsMPGMAB1phT8cwdfvdML6uo4Wsovs2djkr7wF3WYeTRcxWxrtJksNWxbhwM6mT4NvHrB7yu2z",
  "key38": "3BcUcax6tzHuomw6iUjFnaHLtP2S4AbJPuJNnsFyTLHrTf2yVopiGHzNENv9cTwtdjxKSLt1ZQskLrreWMN8aPA1",
  "key39": "42yHhD8PX1iWLwYij3t5852RGXh8WvA7iY1Bgea3EB9VpPTjUPXSgjQpD3E1GXkucLaNWyRULsHyKcbEw3SEPrZm"
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
