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
    "2uF5RJT8ybezxh6NVGsxwR6YFobQvHAfSqCbsEgfahkNAkhM7rVpBpA3q7135C1t1eS7nKyR3oTpaQsY9khQ5YzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32wTcUoqUT8X9zX3S1gWNbuzzjV2GsnUwmz1B3AWF16mu5qxmi5TnFsZJvbYz3EpyDcGZ3a96WxdkkXpnmgiRZh1",
  "key1": "3zX4uSuf93P1AVkPG5ZKNL6CFSVWaXw19H9nQhNebAMXYKt9MoPP6MMXL9ovfcFL9fpcbMFPpPb7oBV3kLL8K6jU",
  "key2": "cQag3mtVfxLV1BqudKWdhhE2hDutDArEUZbP6XJbFpV6KWfbWpV8TLAfepMTuz72w38eV5k6d7P3ThrotwkKfHt",
  "key3": "5ihRZcTRLJEWeq5dY8rsYHSFgMTcFnT5u7LTeBhEmojJ52ejtKnZsRJW9jV9PAdJwczB1GbjZS1nuYadJM98CgK5",
  "key4": "3ALeqG6B37ba4pY2iizP2MbfwcBYqCKdZRwwWFiWAfRbaFirFHvcDuVV1G8VA2YwcdijwCcdeeXtdSHEUyGRzbL7",
  "key5": "2xBspGeoLbwswvcbpMQYjNyCYsRnoHmDBrTR3ApFp7hQfsf5RUrdkptX966JStW2jCSc2ywf9HUmkTq8kurXw9AV",
  "key6": "37aqz9GxADsBsKi1HVSGthctFFT5nVxoBvqGq8Rm48ZG5MQumS5h9YBhPFLkVMzUhyubXVdfJUbVgPMfa3fwBMo7",
  "key7": "4yTfJLXbJ6oFvjWxgsS5Cd5J91SgScYkMRPehcSfw7oWDF6eyHiwsU57VQ8dYUVxJJcuzhbJAmE183m236rBUTCX",
  "key8": "3JDNvfBgPnVJctutDhm5UoaShHNjhWiGZLnzo6HUgzhYm79xsXc6PZVyHyHnkjb9fup7R5LbhEE7QFSkv8QNA694",
  "key9": "2WnKSxXxTEjVCMwg8Pev5TiqbTt21uwkZBDLP4bBV6GqqSeFpw4tK2FhaSnqj1qcs9yBwy5U8TU61TSy4TuxFAA5",
  "key10": "DseTEhc15PfqV9AMpweCq1n3KZ2b2sS4oTzk9Xm7t5RMDVssLD58wy4rhNK19Nq37WMQodycTcXUe9ptU4Yi6yM",
  "key11": "5nxjP4Rjw43eyNpL4inB6gZUPoQYwad9toDH3rFN3nCAteiwBxxQW8Q57sQXa8BNhpLGF74uX7TrmqgTVHRUbQCY",
  "key12": "2dF79iLAB8HLRxrYmYA79L7VEtnREZ2xDAdNgAebotFniXX6v42d2WJJ8VoSxrQh5yLrsiduvB9NkWPSpqSm42uf",
  "key13": "39pohJ61EhZU7aF7aSaVAXE2W1eZA15hRw4D4FREQ7wc92W6ihtRryKVDYQuTWa39rfeR2c8HiqEcaPGnwrvDSCq",
  "key14": "5hUTa1fzPgqBf6jLU1P5tJRxJApwXr9ebL5FG4rZjQq1nf6PNqzQjUoGKUrsUrHbUmiQSC7QJwRht597PbtjJEPF",
  "key15": "b3tPqYZZEa9ZRDCyXLZvnUbjPvjNWMPW3zGfD7hNNJKZhraqXtgKp3DevrrFrmsVyvaQ3kzdw9cCwNkK8aKKeFu",
  "key16": "3wicAGx5BmmBb5i4XoMBW2f3EapdADeSBAyzBeq6iYD6xLzf8MUB7zkTVQUPmoDGVA2BfahTGYNxFy8PLDwMu4oU",
  "key17": "3LUUA1TS3f5Yy3oc64ZhRdMMQjtE8FnVhBikjBUSvNBDDuX8zDgktDQqWxr7SdWf6cp41FRXPtKevVr65dRKh6SP",
  "key18": "61vFzXmD5GV4oSZA5UjqdTzEfcvH98rm5wHbbkVyLCtNmMLZzpPzMCgWsmh2SNaBtPa34xXBou65yotvVSUJimU9",
  "key19": "5f8Ee9kMN1dgVRPZupmwr6aJAdPG4cHwYRxsCo35tWSBrWogAQGzJyMzhCXJ8bakXSmittpg7biBP3nVVBXAT9Bv",
  "key20": "2fyeiw9LuY5g8Wsfu683c9qSGcgFHGsL4pbAyauapMobYRtxqJ5HTCh5ZirqQqZcEiXKG43SY1U5GjqpfmfJ8vcD",
  "key21": "5jGqTNhPUW2et5yHPUo9VxG4X1moUo4chRJVE851U9kt62uJGH5v7mRJAUa2o1V4MwhPV1qBv1oeBUDKbFBUAvVY",
  "key22": "j7kHkwNjHzPy3pjaqCA1jPxe68CrjFwKWoErT58CDE4oA3kC5rSc3csdkV8XcfuTP4WaS6phLGQ1GrhvVCmPkrG",
  "key23": "2DmnFVKWrDEuXC53WE9WxCWPryhzwHimSFh3956qPsUvpAXWgeyQra97LWf3pw3zESWDp9ajwNk7gawd1G5Ly2VS",
  "key24": "2TtnqEif39t4PihEsxZZK6rU35kkF9w397mAucBS9TTXAix8ApShRQ19FKryJpaJsP7nVeW9ayRcfJ1ZMm25i651",
  "key25": "SrDXpTh51PxDePZ5VbkDRXKxxamC8EsBtt8AFLHXQCWb6bqSxC4uFt8ecWEU8DE3eeDwFxQp8F5sUMvDWUmmexW",
  "key26": "3hzToFE2Wgj6kxKQdwNvLmiVKmoDNSYnsDdSVKwheb3w3ACFG1ktsc3oBAfBQzgUGRgMwY7LRJNQKgUoyuRv5Tup",
  "key27": "2uQjyeJjH6jDnQYukPsBnDodvuLiNNJw4m8dW5VbGqMr2NfUkGYdkZgxBzhZAnhV6Dy9Kbv8CxST7NXF7gV19Qzf",
  "key28": "4Aj8fa7GJsvC7Rx82GtRCNVZ4CbTfsZvmYDsYRoiGqepAZofDkCj7anDbkZSSRxt7F6CfaokwaxnmvY14TV5XHK2",
  "key29": "V8A2wbqiJVseXFQrGC4qYiNjaGxmQpvfhRL4CMynRK4GYJesspdWKYAHK89z57eRDphM5YqrU96epYdLccEvewb",
  "key30": "nHwG6koBaFnhRgjAmdQTo8cdRcfkxkacUHrp8cCmoUtAidLvGDTdm3Wm5GH2eDZeS2UTPkkAEWQbsYqLVTW1Azt",
  "key31": "2hQVrwozWBkbcADudAq3kn6mvotYatzAYjoCDyXoBUwh9Q1tXVn5XBy47qmttHLqotL2YFbEoVdXeCdbi9UxbySY",
  "key32": "2ZZkedzoCbdm88WoismPkMDE3ufrj8FVLuu19iSd2UE3tQkpVAdC7Ri3MTRpPmcKVHPK7EqmwX67UNGUjJxAhu4J",
  "key33": "3xKeZRPDFHUb2SeafYEJzp3bB6333JDsRyAq6hDzZe2QHCndUJF4CbQzB5fzPmibGpmcJtN4NwKX1Lq8fbkdJXtC"
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
