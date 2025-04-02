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
    "CQy4yPLbW6WqJacwkLW1FUembBKMh9xnSknFpbcDdBwmpgAkKxtH5f3jQNtiYmJzteiGxS5avgWnw4j8FBCv9av"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BzoybvbrJzwA7n47MWDy66Qhuv9syjvR2GypkDHvUsthfA8T9nTT69KJr3agvzHhHiWnGNnff6NnXGuSV6EkfGo",
  "key1": "5VSJpXWh7Pw2YNQj6GE8xAzFTLGCm4mkwPMucX1ae5snexw52JbrffboprzZR4fwC7xkkKsrEH7twcU4aGrAf7xU",
  "key2": "353vnS89yhxHFKwv4cd72GEetuftzdhP1GqgnEabs2q5v6ooh9PcCKfhVHsvaM8yswEJEf24moKF6cARV7VbY4Qi",
  "key3": "4BBpf4A3ZoaVuHNNXAnHZfsQuPWcqA7u3jCow7sGoxQrEbnZ3sfZZvKmau88j54hAQ19FiBbXUVWkQZ8akxrTzck",
  "key4": "3iKiyL214RDkQ32Ke2xfA7yQvSkVN9rBCVAVZcrPUbUzko7JWST72T9bKzszbKyQb7dC3emC6g7qDo28TF7pnh2t",
  "key5": "4yGzsFCE88R7uuFJkLzZqgHDpvCNuzyp3UWHm3BB9kMfNpSLK9bcHr6dwLHDPA3FVsbX1xjUrNZtrQnLp2AK4X28",
  "key6": "54zb1ZnvM76kRp6LH2NX3pGHBoRN6kcSke97b9KxMr2UUWRfYiuKDdP5pAMeq6iypdpZVJB8Cx84j6hYtevfjGVV",
  "key7": "4YssxRv1FNaow6fjCG7bFSwZ5FuXvZgZ4zng5twb1cpUZCYb4xiWG24eYwzaQE1R1MpUBDLVZCsh5vY2SQHrcvZq",
  "key8": "RfhCCkP3JN7tc6r7DNTRo2SCb82NPsdyiPZJjvHnQ4KZHvDrjeRKfySa9LSxx8sZwm4vxXM1zJ7uuwpwDaVSfUy",
  "key9": "36nzWoH9Gv4i3hcxz9njZsscCjPzUSCFgRFruEhVd6KV8R5M9atRe4k8DnBjqRUzGHarzZjaiGacr6EvKSrV1iWU",
  "key10": "5noRuea2WYxjJjGGCvbWmUgSDsFjs5S6vV65jWJjwCZFsBttwrdYNyYGyxeKM4cx1zDN9epvD21tcbPEaZYnDT1z",
  "key11": "3CdH7PHmyAPkaTdfr1hrMvBBNNGHFFuGS4tpgox5GNYu6jEznG2CDnAm6U34ZZzhz6Nza4jYT4zWx78QVwpTckoz",
  "key12": "3MuavhjxQ3Q7P9JuC1nWmsVfg8sXytiQo6BaC6whzU9RwAthYZg5hv8j19NjkYRwsAZBWz1AwsTJVvvAhC4kZ3xL",
  "key13": "4mHEtyfrTz7ccdceW9s1QKhBcRM8b4utJdcWXbyLcctNC35eYseMnJDJaJ496y1VMYBidAD2SpWacmGkm7nQW6gG",
  "key14": "2ax52YFo1ehmkz4iKzpvKADr1ao4XmaHAPW8Mmu9UDJv6j4XBVYCvhZYpBbhKH2adoYgsUht4ytp1Wp81UW9KsP4",
  "key15": "3vwr7EW2NyNYNx6n1rhBgkMV8DhGEdTvS7sDA1YwvtkAZfpBb3HzTWE1crFCVxQobn1uYcFYC6RYnTGpGvWixVC4",
  "key16": "3dUZxTSARufgeEhmKRRCfJxqYiZVgJMjrANGLKQ1iLSj8H4rNQEV4zDj481vq69Ax7JBnaPCfFfTHiLMb3Xvc7hT",
  "key17": "31PLqBo8XsaRdmju6TafYVRGTkGoPrWowJn9iRyFWekVDax74M2jJAAoZfR1M3ztNUnWL5eUaKKg7wxjcNTUYTkE",
  "key18": "niLdUMCyMqKxgz9avUxckzJ6S8TuYXDrQSQexyMeCf6h5shy1bS4FjUYp9iSEDyTfnMSTjFH569Dph1oKgFo76t",
  "key19": "2xqYvaMiGpsgJJkFjzeWztDz1oYtX4Ejo7ugfPQuw2SSCqfN6B1SegNZBLjSbqkvKHmEE4n56ZWaRBG6ycEqW65f",
  "key20": "3mgeb7pYWMAdSrzKrnKAuk8mWfPqrikBhWutFSM4taQHir8nT9o8zB8o2SW5Gofj7Hkaavwfqia5fnA7awCpVmWi",
  "key21": "4oVq1UGBZxuwE8gZM69MKsD2ovVdhSZrogyEJE1yGBuTcYs4ntuoG5sgxbPcqTXFtmx7JiiZYR9kkK1nm3S2HebY",
  "key22": "25cKvx5uztysDadAkamUdktxoHpieNmSgeYfsdWKt77y77ekutxm7E8vWS3RNpUJKGZcGexj6nbiiZrqVnpvCwYt",
  "key23": "4dCQPLiCEHCRfi65crD8jZm9HqH58iahfGXPUR8S8kMPZSHM74oHXQUK7CK9GAMdKPBXyWwsUmouEaNRy6VvQsuq",
  "key24": "5PbYfVqa619TYghANrZe7gBp8k7LBHVL8sAeNdjAk4b1YX83vovddyC14wEYKqzhWTmvfDLkBi79xfswYGhJP8L8",
  "key25": "kCHtdBvxkzJvX7YnYCcNL6h9VWZ2rv3k1vQjZWct4df91MYCBEw8rygQej7qhAVAg5oqS33MbrjTNo1KzGRhetx",
  "key26": "5ay69BjSXp13h8NfTpvL7b5JByUW8tSqbTz89uJFKzKAitEuLxenzFtReHa2rFjj2tD9DXD79F3vi7bM9dFC1174",
  "key27": "QyrFKLDmBongWJgfAPwHUynVwtHDMkGJXCgTe2sLNfKDuK3K3MYnUwjffvAvN3ee5gCLUQ44xsDWvRitiyMQZmT",
  "key28": "2URAgys7M7QQdV1rYtqAMFHvvnrM7h6SHjYJazUjorwZSXjx9B27czBGpNQPscUmia2HwYiNapwENai3u3RTEnmJ",
  "key29": "4F6TMVdoyGMVm6LUcnvouQm5Utbok6YHSLNLP7wgHUvoHEAXJ8WPHhc6JXWnZoTtPfY81vMmu6jWUPNKue1FZhft",
  "key30": "3q2zcP1ist2r5Wc4HpA9ofRJh6TPHKEqVNKAFR9SDZV761fHMfFP2hABazgwSS8mG6N556RAqyGC5d7HRUwD9ot4",
  "key31": "3pzaq7ycoseJ95faqakpXjeRLrENBtJTnaX4WTJPwPex6HxeDBqVQGs3PGkKcq1Tc9o1kHSQFGCuK16HAg9VEVBw",
  "key32": "3f51Kwoe3JpqbDRdqN4sSivPiSLNn7pCZSmWWLwExoKnLF3EYBs6XVhU4VAC2sDV1oRg1gozLXKhnJHdWahRhY5Z"
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
