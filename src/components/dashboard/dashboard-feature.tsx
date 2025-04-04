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
    "3gKst1fMvyFZD8GsPoghJswR6wtE4XK97uEkffrfeedKXyeW8P6PJY1NeeTUCvpbgVLPFtzc8nobDz93DBYmLp7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6331EtBgCp2b1oDEaiLsXwMv91owYsxmqJPkyUtiTYLYauYqNR2NgUmpyepatBazNVHRkN4afTPdEpRvpwCtrQsm",
  "key1": "4Lv5w2Y8uDhhZnbXUs94qk37YuaM1nBKzoAyhBA9AWvyB1mJdaejHqmp4JR7oQMKwLdt7QJ9GZxE8qPc5YHLfJW6",
  "key2": "3xRjN1h2PzH3bXh1VDhUSM5QU8VcEn6VqR29yaHXJpJG8tmLqhhJJp6aZUt7AGm6WTK2JrrstxFBxeNi1TGhz83E",
  "key3": "21sbj34jyfZipMqyZ5oj4MW7ZgQ26v5DMMtanhGQTT7X8su3HVEcjDf4T45tK1Y6WjxT2QpytjMp9BYVCwHPyR29",
  "key4": "5X392maQFWkFdaHHRsnDKsKVGt6XS8d6ZZdkYNCcNgeZHmv5RhX3gihHsDZFArKUW8nf94x6vPgrCFTUUKkYkLJR",
  "key5": "3FFbv8BpdBKp1JDVYpgCN5XFJ4VfRKKTm1H1UM3ogEHVa1qHAq57XzyJdhxsAvqwsUcj2C2Ftw7EZxnLLUL35a63",
  "key6": "4tUc8Mx1zSatTKGxXrFqMB2MVLyH6R6xcsXYvgJqWPqFEsPWNtfA9z3RASA24n2gC1qnAwaYzZUSUXYdg7xWZ9H9",
  "key7": "zV1h27yiKyKu1QBJZtGRHKUrVfx59BefvmEYqRcR9gbBTaVJZ8xveziWErzf9zzssZ2qzEjfKsYNErNSMMaZpUQ",
  "key8": "wSMYNdzSbpEWXopLMS2o1kJ9GeLunkNa1mCgBwfj5PYnDDNbwSXzTcRFwhs39Y8KCVY2R5ixhuDUtXQ1nzBa4TM",
  "key9": "3wSFX1nZjRPft7wfJCb7YeM1tbYmjJX9qdtWDYQ1iV52CpuojekeFR2TZhFFyAzns9EzS256deNGkQ1taZmuRcsu",
  "key10": "4TjLetQkuwXfY3wsT8p2bahAFzEyPqjVWCJ9ukw3QfyhzNKjEiB8ShydkefcBVBTrZjJYhKePMgfmQtYa8YT8eBg",
  "key11": "65N9LySRSdukfVdK5hLpPvoYYPHxgqmKG3oaq8LhT4W2v8oDn6wadw7VSmf53wKWpW5ht9KPNke1SHWzdJtKuUva",
  "key12": "4qYfHLkcJLtCNRQT1LnLxz8ucvyAuy71eJkN8hYWRXCghDLzWUcHafupUezPtfnQXiAUjgJBMghYfDASHxFP6pFN",
  "key13": "637RKpLJKSa15D8gjdK8LQ3qcMjnGZg2hng3vVoD4QPUrspGaxedsR1938Q5UrubBZw3fYhFmTibFbb4ZF6AHpyr",
  "key14": "yTaTgk2YM3DJHzdiG7m9YzCwyKdyuWyULd79ni78EboravRuyQzEYn1Wz1xDL1QbxeNvWqmYVtmP7HCHjXeEUC2",
  "key15": "4NBBNX5oCFnyoBYd3G6trUb6MQPwnZxKmXUSj2xVKY3AZbwE9brwCSEj5RwZU1V5Uw3s1URnvZ9wco78qknVJbg5",
  "key16": "5FvVFR88t5ht192vnXTqCW1KQEaaYQhPdN7ZtFV4zVUzh3DubT546xDkSTvsTbUdbMtkTzjcG72pmMAVxHt3ta1e",
  "key17": "4MyX2vZFt41iGirSJa1jQ5pt4sz2h733npcDBuQ7gp9fMN3JZGcr3jh7YmN9QUnDJ3Q6w4fC4gt5Ch2eqK2dCFBQ",
  "key18": "4yCBraLrdqjRefBzWJKH2qorYhnXtheb4M1FUNZD8Namh82WURFsZ1ftqucSsNLiLHdmYfDAN6dA4M5rXjZRqkor",
  "key19": "2M2PBkUg4TAyHVpgEhoatC2RWJtVW6V9tBYK1PjbePbWEqYgTNKMjPWqxX1xiXPBZAAnrnkLMjtAgedHja4E2sXe",
  "key20": "2CaVKFMSA7gYSvP1mhmwew51n9piBrcqCXTcYFwPWHsiNXrnaHX8hsir6RygDfXWrUBXSEphS7GnmftzKnK4We9Q",
  "key21": "3j7R2KbQjFoW6UNwtNHygraFD5gaqmsLfkEhK8ZsRRsoW9R4mcStsXenVc654uHC25ZZHgAnWPpMVQVPmcd6MEvW",
  "key22": "2hUbTNraACFbnDpPyXe7hmL9UXKaGM5sdUg5KZGU3YCpF49XsFeGeivA83KSEWGV7kou5e63QH3RiU5zWsuSzBbc",
  "key23": "44toF7wuvtdhbfH1mAju1XWtmvSk9vAJwNro8hfvR2KQf7G3mixJViSpKhPASFfu8AXXs14AyVAKb5D9dLnKVRqt",
  "key24": "61Ff3qQ2bNxwUXCA9eQ36KUmWtYkQW8qk498aCspZ9uQLboC24v18CmMsT6gdDLPrzqo69uTsdpEEMEWk7P2bqnp",
  "key25": "2azpBShFKKQuW1a1vFFpmc2aGmHvTsPPBT1ZmvNH883VwDSqTinNk1syEwXM2VHCxb9mHcW9j2NJiWp7LkdSVZv8",
  "key26": "29h16yE9T9jTLbsEenCQiSJEfXf5QmwrCpqZc74JzNFcdi3kgkksrDXSQdYq68BCPhAfHyTht6EVm6LnX2NUTrbD",
  "key27": "4VuLVApqTrT59ZrTnohp8AFQVTrCGiHPZWYCEToZkc1oHw5F6mZKkm5NtEXqZrSueQkeRGATCqBKnEWmQzhJx9Kp",
  "key28": "3nvEK5gnBWnHFjZP7i1EudUFgve8KscJFhbTQevCtttC7QGHjmu55KAsxtywsPgeH2QDNy71A8PYpxRyEae5EGGy",
  "key29": "RH3PC7qsGqKQKWLAir2kv1HYf554Z5fHbQQYviEpEobuCPBxtnNRD2yUaN8ziy31Gs4LE1bBAG88FQJwddcbHJX",
  "key30": "568trtQtk3svhFrSoVUTYSYGEw4hBUSWiWNDH3MJ7iYJbsXaMa4xCroQdzMbBRq4VPodAfRYfJnDyLEfE3ahEFM9",
  "key31": "3fRL5D7xqJmXNNowvDQyQ3M63kCcKfnceFEWotr7r72VPp3BGn1fJQyoDngG1RzM7DQXJTBpPfUKxjqgMENTzjUq",
  "key32": "5P36uB49YMD8TebrowKrJce9CXJPucgiEwr7PNgskNHj4FX5vUpqMLkSNWq7nJJd3vLkBdMFMRTwLajSm8g3cFBW",
  "key33": "4evDzzTbnNSSZ96zPVCbivDEXnxvoW3Nc2WkP9SS8AqzV4gNYthSvjggwAYR6NVjKRX1pmyQfZkfCcWmQnkC1NT2",
  "key34": "47LyDbNN6d5vtbsX2U6FZEjNB3NR9LQV5BUr9azSomPdRyLvbkcT4tCSBna5SX7hb4XfH1kBMJWmoPywQEMP1LcT",
  "key35": "3J24UDVnw2B1qv6MA1aT4wCdQAjrDNuv85if8edLsVHxXVXVKdw2XdnvdXkMWQDLqH97WGnkacrpTapnJJL2YgvL",
  "key36": "2tF8omEmSDW2qe22M27prvLX49BtfpWWi84heWAkcfPpQv6jNSdAJnaJk9somcWxNnSYDJbqRRU1LA7Qs95z8Kcj",
  "key37": "2DNJBy8W9D5CNxHDuk7G2TXWgrNRzfm8xyGvfhWBGz6HpKKT49m6DJLUDnhxYCVJuWoUowXusQ6mUzm9e6A153Z",
  "key38": "3FubVTab5wq7yshAUjaJYno3GbGtNTfmcxmBbNCiJbUNGTUDELZAcB7yrZE2vjr2jbfKgvTnMUhsiBEunYNiYsZs",
  "key39": "5raQ9sWqMMQg1hHpxRQpY3XRuWPe16pCvQHJwZTUFn5hTkcEir577RTrt4ub63LF8uKfrQ7xsYg82r1ECgTk5Tv8",
  "key40": "2HbqhU6NvL84jmULbKtJCKU1qGTQmSJkPWL6YxYN37Aazd3H2HhCNQySbnVcZm9GMiXJ1fixyaCGPmTC3FAUs24S",
  "key41": "ZkgxvVgKzquyfkP9V33GZ32x561B9PQ4xAaH2XuEyfvRDCBqQLZUf52eVXKDBo1zxkSCDJ2M8iMcTGXEg4N86vY",
  "key42": "3wizteXeKQUrX7bL79iQFuAqEs1bw6gReaxSyJEGwYZEAfX5SBwFojSMrp75PyURspkB5C97wkVUNTdSt77Njfrw",
  "key43": "2bAuhPvnN2cSTYz8qiaYBqkzPVqrquaCZGvGwnRYnLPVdJ6PyK9q6rsdgh76QZMtwLdM87V71xgfDcx9PWEPwzFP",
  "key44": "3iA52XH1BbsrrLEJUpYEK91U9f5MWAQBzmBxCgvRngTHWVNR69H1jzYVcytVixDSP9sLnHcC1UdptLAMJDAq1iTU",
  "key45": "3uBNcDkqiuhrmyjZUsNE96uYnxgvmHzgDkkdVg6rAuF9aVWyBuZbZu3upoTpw4UoN48KYnn433SxPa8svQmdRox"
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
