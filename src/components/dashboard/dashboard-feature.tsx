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
    "5xLdNJ7wNV1nLbc98cRckhKNmCmhCqBLyfiYWovFhD8vJgB8Y3oiK2BUjkqYqZL9dzKbeG36Vyn5U3HN2KwVmei6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cPsmtuMU2AVyhaK9pTL4drqHLdkhtxyhBomsBuUizXtaGtop4XpQK2cvYgCFsXKdUtUwsCosEE6oGkppDm32AiR",
  "key1": "2fC7FbYza86MbE29fheAzfnVQb99XmM37qibji1dvjVm4VtdzoshgkTMKHazGw5tonzueavUzv1uKUfGW9DRmDuu",
  "key2": "26RrMmSjuQCa5Ym6mPKdKnCFGYdqbms5fQmKyfd5Sh36APS98acdr835fKLXZVBUbPFCPqKcURFZ4zDACBf3S197",
  "key3": "5ZNfTFMTgM5V4aJv3XR4JwEF48WNHRiPw3d7THd1YV4sZVzUMHQsBWqSxxb9RbjSE57PNhyz7iJ9gr6Y1ZVKqUKA",
  "key4": "YnWxxJU3J2A7i6WaPi14EnotrMmVGJUE3SJfQof4XmWdUaUHxF5ekuYCTu5b1RkeB2xjBh684q14H5tamYcK1u4",
  "key5": "3ePdC2zdLs4eEnwB1kZymdsjzzPe3et8JPB1AZc1V3N4erWXPZw8qtWXqNHhvumnTtAa1QwXduh6goKgnYh2rRQT",
  "key6": "5GzL1kT9rq8p9yVn6gbDEzHwUMaNiRRAtvfWJim5SCGhkseScRtvDQT5uAArRrqwYJrdpgpMoXSSX55dceeEF12P",
  "key7": "5QkMyZPFbK2TbGNVH6yTZPjV2MXR4DtAJnGpJuxWAmLgiP2bkGf9FYt3vFDEMfHSzU43tRxVBX121WVsgooPzdvV",
  "key8": "3cQjaSnkrccSTB4fsgKazX8QSbxpcXhugNeJEGzFhfLAAtuWmvPGjkjncgC7xiHN6Uj17Ln5Jt2YGERwK7DuX68i",
  "key9": "21FkJDG1wvtCrWm5qxTeyrp9XhaP8bUYnZ33z1dUSt8ZCXJ9usnUq5mkRdeUUoeYHiHQZVHY2b55gjkC8r99vsMK",
  "key10": "2Nq4qyyaP3RxvwUgpxjQW3QVHPRZe46hYXnc3WFwHVTiwVp68dZTGvs1wSKcozih2qcdnCcUHY4s1bMbEDQEhjMA",
  "key11": "5RNoUhLYozcVLwgnUqX2ntBcSHTfQSGFya2nT6VJbcLN3hmr8Z2yYwiSUbrPDAz2evzZ3Na4RP9SeDPseA6ARQLX",
  "key12": "3idEhDzA9B62mBvjVymxeWbrN55Ah3LUTfhBtRyDBga2TbUKwk55UrPNxwqZJyxkF2zED2EZezsrUCTN85PoHqEE",
  "key13": "39cJmBy9UKtqzDuvEQyd4eYqvDKt2V4Q7xMQafHvGhEtg3qfNt8CnyaVHoEDspWXR8ho5THsjPzPhLGvxG13m1Se",
  "key14": "5U9BUtWULc93QNPKWrbHAhWvhRo5GT1ATRAXkP8kmg1vNiV9Qk7iMamvY1FRHTwLkkBTqPKhQu4iWvS9vNL5bEzh",
  "key15": "61tUN3xKACLj4BMo7iVjmpgirVv1TkcUNUj8T98kXvevmnQyo1q1wMDhVERrTLKtWX8cLX7H74DU9kV7jtwnRJWM",
  "key16": "3e2gMtLdHoQyLMWAqUNNXH5KY9u4Ycj5LgnLEDYUMEwQ46caYL7XxWaRRQMqxkzBrhidAX8gD7W7eTauLiEtg7y1",
  "key17": "4FVKQGeib7cPx66SnPYi2KKG7QMVX7P6gyuvCxhWyeodsXHAtCeaEay6GPMH5pN5EHPi5xLM876VVVeok2GhLcC",
  "key18": "2PyMk7P7xjwgvCPSAuXDCU2rchZxq8vcbnnG3bMVz5JvQAFzgWmTDWTWsRqQPhbffUbLobvkfvBkpvPNk1psfiLj",
  "key19": "4wSeWMmaW7sVQpjjBBPi1gmoSdSvbDgE88mtfNom9xznmVDmXnBnaQ8VkhkkYks8LdupNQcn2XTgKAUQ2EYyuddA",
  "key20": "4S5mVrj7yehTHrYqX9kQNaGNjTg8tFen9wrXgFreo2DsXaqynfzCQWwoqH5RVPuVcPScGmoZJHCyyyWGLZC9FbSN",
  "key21": "5z3RbeLiKHikHZCMB2N43iETiWU7njF9iJfSUpLveBjNxteWhgu76Y12J5v7JgWZ9sczKvTKMFj87aF8nGKY526A",
  "key22": "27686XGo5LG95too3CxKkG8cLmqtL1cjg877be8DZfhuY9RdDa9Mbc1TTrFdr5ibMiDr1Z9cSpbzWBRKy6whZgzk",
  "key23": "3njbyqyZicDtxXkjPPMaUseWnZAMy5wiVL68ojNaap6nEsYMPUhfncDM7wzfZh2TMXaSRAHUPDRau9g1RYo49Jfg",
  "key24": "29TDWiZJ3pD5bDVZo54mySE6ZmF8Ns2ZG9dsgFuJxZy4ipXhxYfL9WMkcFZeVj77TCbL392xEAR8NjmMCRBYAHmd",
  "key25": "2UDQ7jEMcNmxdsmnkmgCo8veWRT7Y3W6S6wyyCZCeexPhh8Nzzk2BgmHSYKe6KepTyFq6ynz2DiyMzoXencSatz5",
  "key26": "a3bEVfuJiUkDaKxxk6QXuY54JwUqY8EvF86vPKseKgYvbwvxrnqHqqRGFtTiSd1zvk8htYZbBTCAVX7GUD9De3Y",
  "key27": "3zKPretPaaC7tQ2eFk9ST9GG8VRKvgGGaUef7kxbNCDee31pW3p7coFHSsJRJCov6qvsmBD2mFRVV2Z1UTytYSrk",
  "key28": "2auyN4wCXV5PNhczULG5GmzePhVnVqrf2ddXY2T3gVz6tr7YKyGuSAeQhoWNpExEFV8ScVhtvfPrV3Y92LoAoC5h",
  "key29": "3HzXGPU2NQ9jfYwZtHMJaXL74vRG3oWVdt9c3T7hVEpcZqiAbqK8WSmyvi7KPZSbTQ55hi8AJaPETUcvCXromP9a",
  "key30": "5W7VKCYrf7jtZXSvebTvEiaA5GgXRX6sDTpu26vq9ePwwUFFFGUPPAS3v547vNapmaRVSNjd2Wh9QSNgzXjWq42e",
  "key31": "63YpXCZoiqPg6csxYTigov4KxksGboda7yrrkQvZ2EceguPCR98CRE9Dae9zLFg4qZ6Wty3mrdpUfYGJG1mezQqM",
  "key32": "2XTjzQbwUen9jMycri4ykF7FKqvRoSWd3opCMiBHNdMudSbcYtXvS2NBLe6G4kqRLkuFzDgr5Vxp8KBMgpgLYQmP",
  "key33": "3b3CTEZdvkPZ4pseXzVZrUuUVBZeasf4xCdRbxgKVovQMbp3Lcvnkev1gje7BsnCzGtrcbGSmdLJZn9svVrRwT3B",
  "key34": "4cY7Ry431eLfVCfHx91CjX5HWh5PNTHW7mrJt2nxf26kRqHaFywrnRQFd1deXiyfvMeuh4aZp89T7EHrTsN9w2iC",
  "key35": "3ENfS1FXENupQjzBqs2SGGr5WQu4ssLU6wLNLkpBZeCEa6ofg5PzAqMigmfWXBidUiiwT7wSggD52uXk8yKufGc4"
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
