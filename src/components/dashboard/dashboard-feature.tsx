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
    "ci9mACTxjPUsGZvTwy7Pu18H96RJNYLhHWfPX1ogMCKbWdoDwYXf9R9KWBvhkuWR3HG2XZGZZMgiYgheV2speHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QNA1ibgHNqDooXnMFQWaJoJEt4cSMGw8wk53bec51JzNFbxjSBKchhjDsajrsCqqVaxagrzjuPJ3VjbqFWtxhNE",
  "key1": "27Du2Nd1GXvN2Z1C4HoW9zHN1iGZE3WAkVXBcFgaRZsz8zi2aHQFqNfXRP4i4jEExqEu6DQwXcmm9bSiR8cv8Aad",
  "key2": "2est8pNg1Ky2uSXNaaWbF83KeeP9EJtDeDjSMmt2qxmWvD9qK27sJkVAjHqNi2K6FzxhhevVF6k6JkeTcgdxSJ9M",
  "key3": "VeUzvb44WmFdD9gs7tiHPXJ6t84r6YCpZYK2r7hyb4bbnB5Q3a2NWb9i5yrCrsR1NkBGpGRDKMnXFB3ho6zDTgb",
  "key4": "44MNsGRWgGM3GswTS1RFseCnw92ZGDLB5XMdLTPkwRdEnKxff1FXFWuN7VC9MQSBYZbtBEGCo2Vt5VNLeKxt2JQD",
  "key5": "9LwNf27ZBB5PyaAH5yTRDkegMJYidyFjGTzNCNYAdNSMr1YyRSbUUWtAr6qasjZRpQiuMiSdU5YLX9KJzstssKw",
  "key6": "3248g4XNF45meMiVuieqGbxPG5s8CmDVzrAMeNzm4ULJQK4Yq6UGKUJpgdM2fBefZTWiMDwGevooiBmeM9YGuQXp",
  "key7": "4sEtyZhqmtpAgSCv73M9fNmosuRjUdqChwmKG5XR3CXUuNwAoeeWe2RWW7rvvnz59qSp6FMnwGQvrSKdo36r77Js",
  "key8": "631c9iLJi8KffZSAsbyMsvzd93Yn1vhrtZR4g6mrH1JLiMvSi5WYAxYc4474h94PFF8w36dk3cNEVQHhZRGq294o",
  "key9": "214kMhbzWnmR52hfym8J7idMnXJhR6u5jqJHVDzSviCVYviPkrnzDD3RmPdYZSyihr2rj4pkLPvd92JuqB3jQXsu",
  "key10": "2zog9hnyd6skySnRb4qRsS1D873MjPoB5uc2NuBgp38yNHFQryLEXy91DAQvzH6GdGnB7px5j65w5X8tthnXLxgH",
  "key11": "2SJYSZCPQ3wrhD1d7chMffEQixpUP5gVTaXKj5LUokaTgC2XNyFZPmM5HGp6UuDetQ47eMN9AJewbBZnq6Pou7qQ",
  "key12": "3s6GQZZi2QXSRVNf4LaKvDARmEQVWuZjLKZqYQQb5y7DDUxLvFNFRLLKvtKzH5R4DmFN1Q9NHxPKkFaWAb6BWxbm",
  "key13": "3ob7Xnh95AX94wHTY2TyQMwSAa6h26XFzH8qrbZbzRLVNv4S7j37ZehzXQYaKBcVarV2psSNaiJv7u5xShaEVS6S",
  "key14": "2QBMbE1FMdDG5iTinaajjA592XTJXr4KqRJ19fnA2ZQBuEpL78DELU8YTPTskmVKZ1eYmVTJ4ug7TMAqQSnEJJbd",
  "key15": "4BKpi2ZVcW6v9Y5H7KmrhcF2RvVKiB9ZriijEY8KVLJzb2ha9ADnGJ98NGH6otm6czgAoB5qq6PEH7LSXg3dYkN3",
  "key16": "3bCPJH1MYrpcdbRkBzYpNXW2VYCPrjFLdGcxigMd5SNJq6SwQNG8DQRrbEFyaPpj6tvfRs5NKbBLyd55UDH1GqoQ",
  "key17": "58ojV5UUcDgRqkBaVX3rrhUCtUPDES4sqVLBPjJqsNSqbf4mygHecRwGzKisuQB5FCFNZXG1KdjNkjb67vCnjTGP",
  "key18": "31nr5g1ccgVYdrKwpKmL9RFDvtjDt2dAYoe1J5NMYrHCcauE8gJczDhYvmZfEQe81FMSXyDFHC1S5RZH9ZMeAZPj",
  "key19": "5xg8gyynfd8iCijijgQAcHwGcXTe8NfJC8TwpexQesRRc2bVhMVEbiZCN7cgoUKaah4yHvXcJQ3iKAR5PoqXrZG7",
  "key20": "2xEtwQcYBh4ThJthT47sCu4zVGofiDNuoTTZJ1waMybET9pRfUBdU5yejeFUJJUAhi5rNcjEenUhdtcr4JaWsPMB",
  "key21": "38m6BDHeAK3P5YKqWxTnRVQMym4JYYtBP4EZjiytDU8U9hVvU1jU56a6DUA2k6xkmyMUDPf34JktczxqfQNZV3UQ",
  "key22": "3mzt7Tvpi9yBfRrbj3NqMJW2Hjyt15sHonF1K4D9nzeFMruJhVpsYQAJvLGWMQP7MaBoSuEgDxvp4M3qWjcAuHo1",
  "key23": "3PneGkTiHRFMeYfdrxjwNwhXctKpTtDbfCCH3Qe6EiZLG7vNFf9Kii2CzczxcnpG7AVvRUB71F9Uyg5yJ5pYacUt",
  "key24": "3oxueh14WxVQEKQcvwPWSBDo8iUwTgeBTFfxfePjhb2sC6XeBnQNfjGP2GbhmwrQCc6SaRuFhJob9BfRCTJCmHvS",
  "key25": "52WFnY5AXiuLqQ9hhiXJRL9NKaPBVWSFuLwZPqCqdpFaZ3jU8FdGSPMFGyLdo9eKbhjtVXGZGMueEpwzJCgBenog",
  "key26": "3CQeQHjWdr9dcbUhAtuvkcmfxmcBeZ2TGLJr6YYU4PspsW8ZdwHr2QLshWcraXBMaw53YyyKxKuYaZYsLT8mkLma",
  "key27": "3T93t6QCHLc3ZreQCAgQDyYadSTByQdV3rz3EgA65NUPyPRkx1rZLhwcU6y7azvg6q4shFi9UGYiho9xWfHaSjmN",
  "key28": "23zo5FeW5h2bftZjNZMigcAfAzHKQxtVX7wtMvTGxUt6LyjfWuDoF8uLyAA6Y9ycN4GskWchjLBRUVEiCwWWbYhK",
  "key29": "2ZkVK9P6KKK4cnuWMAsM7ikak2dPiPmptDagLHSuapmLrqx64L8bDpQtsksGFhoP6GzGV5io6Dok38KBH5gyom2o",
  "key30": "46qu3k1ZpHNSj6BVybsZCPrQGZnAmkt6kXgV4UFdpDstS7CSNEhFxFN7YM5hPeufwBLUnVJEstH3PzA8vu1v9cWs",
  "key31": "362Q7o7vNnxsQjaCGxchLjToMJC7SsF1tHKPAJARRxbHd34tnZqdWRVRaocgmTXHjE16CxAHpmE712J1XyM6QgpX",
  "key32": "4es5U1Cw8ioMwUbtoehSeZwTX4ZL7HzeU29uZDgSwxBUNx7uP9uuBAHbz7aKJQCcqaFey4tqMCrdtChPfCrmt2Pw",
  "key33": "3YsiDRUKrxMKDuWuN6K4MNnxYT9FcxeFEf2mBPCwvwuQ9kK8A2Vk4RZ5Cyd1XSgMBPU7H4vTKheCLmfYMcNGcLjY",
  "key34": "2CQjFr4fN48g9qm3CUp3yKPkaN3TkbfoRToSPZPLUZMQkRFWo4CTr2e7ncrH9TGt9iDn8An6jEVbR8TDyGB6VePT",
  "key35": "HvtPfejSu2hQeDzEbt9nm4xPx1GWYxPp7b1gQ8Xnj45ssDusba86hboQoDWpnHivrB5sLu251Aor32hve7wvbgv",
  "key36": "2Vtu2Rj4L8Cvg8KYcrY2yXt4ebfc2VTS7CE1grqEhnedrznhUvCUsWAX6PQ65r1we4Kg8iAfd43zqAJLpLiJX4oc",
  "key37": "2VJYR31UL4pZwqZNa8ytHG2MCKNTMcid5nP5WpyBMCcCYUR3virxHXQpPZAYVrJoNtbhTD3uh3mRbnYQmfw7ZMf5",
  "key38": "HMpoZuM3CdjmrUWKvpXUsHUoJkqjJ1sUqvtw44aWBr3BeH6DSvKPY7DtvCYNvn54zpGBmF7kAfFzCeUFahrHfxy",
  "key39": "53NcntGevA18SKUkTu8FJKUWTCBycYhnWCdXWW8XxRRNV959fAETGWztosbziyXgkrquA71mKwi4ig3jMd5wn14p",
  "key40": "5z2FEng2LRfNUpHjiR8tMi6v7pckGyAu7vTFNAkmb6uahiYKLzWuzAfz66U86YXyRwbHUyeMTJjg9CVXCV3eZHrW"
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
