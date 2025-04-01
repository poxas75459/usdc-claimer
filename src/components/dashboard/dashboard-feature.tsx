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
    "61NS2na2WvhY2QMJJ8UVG73zVggjv2bvn6BQfXzrbRbRZnKRrS81qt962CoyCsFMNmZw5CSbgduPvg2qdHNK7NeW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q246rFFyJcdpPLQ5Kmze7vbaTW8gwsVSBbnBE2u7Z7pwemc7gv247ANiWdXNgRhcnmfnXxDtpxnWbxUejxzA9MQ",
  "key1": "5YuLUudzcCQ2FUwmdyryZabrN5cZMRtCmBdkGgyLRqrarHCVXwdjhbAsKgkJ3pH6cS3qQFwf5KyjYTzxffgaUXqe",
  "key2": "3vSkA3yqCqhcX15AAJ4yZXpmEag7H3v7EirFbCbxg5DB43XDysh3NRf8zRm9JetjQeMWsg9KTvBsAjE9mtXm9ghW",
  "key3": "4t8FKTbBXRmDSSBqgkSrP3dAaUMWuzuJ1xUWeTXpcyL3nFDmnQs8Las3wqs83nHVg2qAeXNNRz1ah7Jr3nEghvwS",
  "key4": "4UUnM5zNrZTeC8LEtuZQzdH8FW3WYG3We5mXjbU4BRBk2FGoWo5R6iMZHhtVKWhxCKTpaxbJn6TGDds85mL4i29u",
  "key5": "4UnRLSazFqJhz7NhsFtLwuQcsmPxuMNkTXYfenLWsVQ6uKY4w9jWHJkyJ2MiicoyU283uRsnnYy2rDXH6e2JprAh",
  "key6": "3Hw3EkCZNCRffqKce2T4UpcSqQ73ko6MpiPHZLQfSKLpv81wBp6LKHqoURQ5iYMigHEebvLRjvPigS6y5wCHNW7q",
  "key7": "339pQPSg4eEkJb3tJrX23WzRb1NCnGhmtdmo5zjC71oDwXqyvQEWkzhvBvzXnHQZSZtwH59E3zUM9UWUjpbqFqje",
  "key8": "2zydnetms1V661x77tnoz2wDdLCLdJ5PmL9j1zdqsyTMmQtRp5UEg2mzdGQvVMwKKX2di6bGKDfjfW7ixXkUGJL2",
  "key9": "48nyD4dt1hiCE7JqxC5rwKzHvkiPcaHDkxQfa1AEPjPdNHSHfSGQvN4ixqfp2xp7BYAWCMKaevdQQSBnuezvBcoy",
  "key10": "5SXP2X7Fcn5TwNGPmA7zNkXiJSKAVtP88stJEbS84eNYgJo1W3nG2MQEP36sFe7L1SJKUDqGhz3DqRYndr6RKxPU",
  "key11": "3HMvHxNxKxC2CUEidjr8LbQMbHPHUWw2yTP2EdWAw4ceXYRN9HH5dRxerDLgD6vLKBGpzhkE6yVog17HKbTtHtTu",
  "key12": "26JnRvU41k8dEWTG6pftp9JEwuzQyRsVqNg2bzWFRTCzPav4And5YJtaCmpD6o4eyeSiisewP21jLbMLrVsDoAud",
  "key13": "5TtvfKjZzu6ZAVANKwsK9kypKMQcRZuvx9VrqwyPSs7rNGg8N9okBuRDZbywZeVjm52hawPWDXs6VjmkYsVJrDrc",
  "key14": "5BjsjrAihU5KajGsDv6mtks5Ra1hSz6jZUkkUoQYcvTBjkEVBGyPmzghCgJ5nc36co9sm26Y5maBDJdbyWEwJ874",
  "key15": "3E5BMjbJ4PfUCL9oXo794FS5veUpceMcsoay7zD4cNsvYqWUxf4Pq4xWaXJ7ZQu9EegH5Ejt5aqQvJmjPwbq4njs",
  "key16": "2hp3g5EbamKvXCe1KuKnTKeq4WoTyr6Nyji7Z5ZgUJepogZNGEEMfsP8WzkZnHffLhbezehDewioFjdDAF62GDkM",
  "key17": "5PN8VGSziGxREdANFVZNUNvHpRot48ogsRjmeDn85hqSg7VzwpTsqQamfcuraQbMd7nqwPax87ingxrt9wjLssc9",
  "key18": "bQKZVdcqWP3AasagTDrtDtuiwp67XpWez67vyfHTFvUWqazWPPE4ztzgua4o93TX8DC1bWUpXCBLZA5QjhsPWeY",
  "key19": "5uD3iiEH9kewui6mhRimLFbMT52TPJ9WxNKG5XomDyvD6jPyUhTHtbc8baNWjufovvUzSMXyt5ui449U1zcH3rXv",
  "key20": "4QzKs4PejURc3TzvHXXiqGHjTZBVfXXYdX2Q4J1yuzMv8zHuhkD9NyUbKJKgUrXoUbqQggzzrKY46p8ZhJoMM8Sd",
  "key21": "3tC3d9i5rrx2Ztp196FdFGJnbjcUfFFkPhpuE9YK64Baos5jRzNCZ8UAY6YoeFs4QWaA1PfJJFLx8XCZXWg761Z7",
  "key22": "5io4PtDP83gA6CBKLY1VoZtm9f66yxhJT8VNxNz5kSHb4rNkqdFWkf65g1TFAmceZQxgG47hs9pV94HoXrfwPN9B",
  "key23": "JhL77xWEdVVezqPpCy48WfCYSCX7VkaykDAkKPezwohkJq2G3yJwVUCAttrsLgaeVhhJEbhawSBc4cHtFe9Fk8H",
  "key24": "2LaevzhFzutsAtKnUJMdDGP7Hn8bew88gRPqmvkA6KDXR995vXQcgAaR4A2UikuhtBFFExtwML1YE2o8bnH8gZxL",
  "key25": "2YVsxiH2rTPTzuBJa1YvWooyeEPL6ovcpzJAKwEqfwT464nUMT3tH7zZptMPPpQHfSbp7qdeAju6cw9gmiZ2aLB",
  "key26": "3haW9BSmucBYscZrm2eK4pTjPfdb54e75nNN8eHAtvcRdUvBURMRQYeUaEUiNr43XnotxAi46ZQXqnfhBZ4KfKFo",
  "key27": "478BmWofhu5DhHJnvDMVveauWc5UFht5jLUwujK3xyBnJNmYqBtqUDvWKxugQ3JLqmFfBM1pydcxDPkEmrQg5vpU",
  "key28": "23qzDrA11MWKVpDUCuzHeP4d9GbY68HowDou114JVsryo7JaX1NnLAkmPpyGrMCTSh3tTzemTSe7D77zAFxcXr39",
  "key29": "fsQHBADP2ovCfVJ3QMhpXrMtueUCrJMUwZYoi2sZsUkPkePSCefjRZMBiHVX3HtiwTi7EwVTPfr7KMnzka8yNW3",
  "key30": "3Kay8WMo6zmn4tCSMnTsMnaFtYDSu5Ev2HxFNcXSJAD7H46TntSx6zVYm9e7xTU4H3zwJozz3s2PotuvQ9dhpcyp",
  "key31": "2mc3RM9Qtv5XmUFd5RrkHfox2V2baBPq1mobNxRnrXtuG21d5tjuHRYMo5X1ezJ7UhqFhrtqmHprHJg7YwKWEcxg",
  "key32": "enrK4shj337ZRXdxBcu7JGfccKkJ1AWR2wTTGMfxmVinZuzeh3YhPZLGDsAza88b45Zxgaw2yHXYvp2RPzMUP3q",
  "key33": "2z9PeeG4gwbhUoUMngLELtgN6Q4KGkGe37twdpJmcyVvhTCVvrG69LnYeW9UWaYEjELAvEZoYJmi3jbcJTTniioL",
  "key34": "4tTtZkhdVB33EAhFZkDrFKhnHJUE2fLfNnnvtf5Tbmdyzar6bzroEACexYi5QXY1SAAbUJr1ao5hBQx1BMsNmDtm",
  "key35": "3GHq9KSEkLw2rnFRRH1yHjfSZd27tFs9vGz2rZSZ22jzbGoNnvHqtchZJp39rpcywHtWB5p6TYyzzkc4zTMt4P3e",
  "key36": "2iiq4tvDA6Yz7QtU56Mug7Dj17yKcUdUqbto7VHF48N29iLP4muyYQ9VpNL9yHT6UAiNKB1jE715JugX1Rkboofx",
  "key37": "38WYjGP4oQ1s7DQHyqe4ync87mE8FbWKYXWTtp28QwCxLidfBvimKJiEgD3TPgKCFcsUxPik3bbCuXx3a7tXGevE",
  "key38": "4duxpBuobqkius5EWiGtu7YWEN18YMZiB5jrf11q9bRWYfzmE9xpPdiGojWP2bvFx2QbJGPN7WF2G6DygaTgrRkq",
  "key39": "3Azqjs2WYYbsyYtEXSggdxsyny1VPpPGcgyteKo1jyDC9vdt7m8rSnZTPJvSzuy31KKxqyMyUCoEAHe8s94exRDY"
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
