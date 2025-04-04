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
    "4ZEVJJkURZC4UWsiGB2Xvzpe9yoQG2pUKPG5bLw9aKzGDpFwVk2gnNjHH7sByfY2L6kjXieCZrAcguayPBDDmoHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FmDBS2x9iLj15ced7jBDLkNjTQCdVTtNxfdQf94FDkokfjjgEG1KKJiAddEsPSx2rQAWuxgujRJn7U668kkuXb7",
  "key1": "4YSLvTCPEXSmRiMMKEMThAPQQxR5cQCCZsA7rWT8WqggMHS46Q9gCK7v3a3nYVD6Ho5cvGhwxNfeA6vvggXvEQSM",
  "key2": "27idwiDsMzdYZ6fDtYpMvwtSUgo9owjd9gfjzCshKsYp8WN8VkGkrBV4MYgqXXKuvL9JL3UCUm3MiuqrVBdR2Vgh",
  "key3": "4YnbPcTXuaQqPGpL82ujp1Koh4PcvRC6khEkqAZu7A3HAuAAkyzYHfQTdX4JdsXb6NVo6j2VbCUwNzPXHRTzpiGa",
  "key4": "52iPhnanm1V5uZZLCKvdyvhwUNM9kCWVdYwZu5UD5a9vLY2ZSbtcWdAAx5JXvfn5pigHNAMqqW6KfwxERm5auAaa",
  "key5": "4GCJK59W5eGVZUeR11xyJNsxvJwA9T9DKwCFEzxHuCS2rm8TnwvcEVuV1Qdd6KycGirJd23Fy3EKRgCZQtKPEnDE",
  "key6": "4aJtnJKdYJdEHGJJEUbd1pEFyraM8fxfbcq31XMGLoSLNA1RVQGi8eQh9K2euVYskzzwXyEBdUqooCTR2QCHCCcB",
  "key7": "SYwZt9JHamrz8oPTDMjTnzGh4EypqNVBVf8PnGUMqcBmyBp6Qr1HqHo1xZDqoC3UeFnHLrPWPf2HZzhDdjXygbP",
  "key8": "4s3LDzMhKUadfwcp4ZRWpTURQjGoD7NbAZrGwkS4sAPxCQ82irurctXfCdegNSRUUf8JZUPW9c3mp79WYtqPLC1V",
  "key9": "35xy5iAQjgtFs5FUtaN7DDyQ4Si23L1ombQaoxj6Cu7NVGqqwLFdSjzfgALbNZgg6dmQGBECGKHPUuuVK1kSzyn8",
  "key10": "qjccRdq1jyQhaWWAoRzFSgnpMv4F4aGMHhR6jLT8yfH45edeE4oKs4xa1iH6X1rUo11xaVgVDoAmg4oA2RVqyWZ",
  "key11": "2vjdCUuu8sMRgmULqmqaspTAdCes4S3SibQghCuodnbsn5PDpfemYZM1jNBJSKtnGbQ4BA6cQxfJdWjfUzFWQgrh",
  "key12": "57zbVS1z6nS2tCUmaxTXFEX2fVaNMtX6hkHrsiatbkgcyLUGSRjmBaJLJ18JFo276wk4LQbhD4S7mpu9L5hdhBSw",
  "key13": "3SqgV7oMYJemF4bXxF43EXbpaWWgXrqDWUDMxxL7rMmwR8fKkh4yfmHfsamQ8tGT9ASHWEi8W2zistAQU1V49by2",
  "key14": "3ET6RkX1ikXt4prWvqcY4tcsnnQaBKCR1Xgk2sQyWvyrRuSkcJPvxdsCkXB142mEkboEoycu3cYJN9m6VasYDNHX",
  "key15": "2V14juSVHkRc884DMpZ932PZcT1u2Ypta8QoamTgJYodGrYWHGrUhPbVzrUSLvvKkZUKApfZ5MK5QTeGJru32z4g",
  "key16": "5GFZRPKQPzuo6TKy5QYtv9oc44tSjdBMncfF9UGkBwtRMgE3v2NmdCCTSGpcNGDJiub3AkKxEVuXcq6ZXSwdKtQP",
  "key17": "32dSePqwmG3vZ8JDvBpqn8JyvtfE4yApEU7zjcCdPNRTUzoe9mPsGxu6h43vLkaDQyyMX1pS6Po6eaATGSjUkv4b",
  "key18": "2ryPXY3tNWa9UErEa6eZ2FDsx4jpmTGqKxeus9yogMu34GfeC35TAJNAWAZBix8hRGx2kFQBNkPyx8vme3RZMTUk",
  "key19": "45kYjNgeVib1Fc8YooyAQbfDjXmvA84jLPLYUdNz9iv2onjTHRCjueGoPx6d3WVsqL6icpjzjWHJAxa59C3u2gbJ",
  "key20": "4qtM8V5sbtMsmbMStBhRcDZJc8rCNvxg5SkWa8AEnaF1SRG5MhQmf42KgUet1PFkXxdWckJNCtWi1ZHf6p3GyKLD",
  "key21": "3JzVQzE2qaWvUG6J6MKA9HCZrtfGYPBGYc3reRAPk1mhsvM2tqu78ZmARzR9hBTLKVV7wd2VeXDBhwm2635JcBjq",
  "key22": "3RTk6Anqhp5ProtNuzxvLxjaYXMDR5aokr33FvfBtaCC2cfwStL6VtFF7tz7bbJiWvmy6jpTF8WexpbNyQvGdSi6",
  "key23": "EkvpyCwyQVBaideRRDawcwAjPpgzDLCHxetn9Masj8uEPRZdGgTgqgFcXqSHJNJajDuZSbeZ1EVihwfwKwkmuNZ",
  "key24": "26cTD44bCcibTdB5WhWJYmnv7cJeArKUfh9vgBnLmd1y5KPasG1cZCiPoppSnCa4hh5CQ7M3NempKjCioagJstG6",
  "key25": "zJ4hJ2Z5Fuy12XH9ZkaJkJYAQDuR36WvKvJotNp7FY1fHEZR7WbSXGzcJ3QLAGZZ7KJJ1p9VjaTeoUZpsV5cL7D",
  "key26": "JpxkGT45fGoEqQUqHd8o55grpnDFT2SnFoxNnAPeBTp1iwki92ZGx3gxuXVUsok5DdiHB9anp7tqrrzrX6Yxaht",
  "key27": "Eu6cfBxw5oLu7kAUPNVo3NqDxohmgA4iKeaM98KrwU8xjVXbHLmfiATrgQ9Quspm4DyCkYxumGkzWEwUU3FmhbM",
  "key28": "4jdqQxNQZroErZBGvt4CUKoHCeZAXsn7Y7NLQjceAZLtFT9Q5SrrYCkC6HUNDFpaShRxZNxQaXdrsWB5ekeNaoMo",
  "key29": "4xWY7VqZg7SUvBsiBj74XNA8jntxfdTBZd1MreZBnyiLXwz5FaUYj1LHBhb21YfKW8qDiFJ8sS98QQkZPVe6wajY",
  "key30": "262Gj1qyM7fKb8nvpbUqY7kfWH2mREuQ7B6A16KqzZ9px8S8CtAL5sAxH95PX88xdycBZbtiuMqmm51AGGKZ4Ziz",
  "key31": "3AieootSBronsjSy6J8peghz8MMnwiJbdvnuRRMW5bBbdEovCVK2JggkCoKGTEsQsVWFSasK1kaXjWGjASZ9gtdW",
  "key32": "QzTMsWvoWZp19jTgaiSdyLnPoammsxRrE9yi6bMt8o4yjxXAtBFrEfewzH3EtNE45hfJ9RVXqwrQNQ9UBN9xs3o",
  "key33": "32FTthapiGLTFHdnJgmWL3afqLkzAf9uaFXAcuc1JSvvA6CykdEYmCzVFFUiwSQvdvCbyjUdch68hDiLsvtavxkn",
  "key34": "3K3Aw2JBnJs1LFFGqJ9pqmVHsBfjc3Lz9x2b3Za5X9eYPjvtHiQtwDtA9FToSJE4wjMBvDWtHuVgvAn2iifokeE1",
  "key35": "3mcxQUhcwGwK6SfMMsP5XcMRguCbfk2VQdA7E3KvQco4UckB4oHpueqWkV6DRNFXPL4Keqe9vkqrYqStmBnemfoc",
  "key36": "2H7FR3cUaanRxSefGdUdFy3nex8RWQV4PjXnZnpWpPP7hAqxA94SGKATAVgd9DSBWrFDgvUSf8zKb92cwPqrSz7Z",
  "key37": "5o91CPnPnHgTL3RBZRjLs3k4wf9B1pSB3rsYjm9rJGGg6j9QxJu9yPu3ZHdSrCqkr9f4mMyxMWWkEitTXri77fzj",
  "key38": "5Ws5n1vHxWR6q64ayKiHaJxGnxtqoNVeFnrqHM3jAyj63HTSxLoZT9aTnq1dFmpv2TzkU7yo1MTdKe7hWi52dtBo",
  "key39": "34LTxHgD9a1zUhMVqHsXmAbf4noGUsWXLRogtaVuip8FGVBhotkPLFBpgyzjMHyGgpgpKQDkXaUtnoWasoHQCeXs",
  "key40": "25YM1wzQMX24R7hinJuonD5NwAnE1WjGMFhrCLNabu8JbMvNi4dziPppPhNWVqRXoY5CBx3rSzgzEyvZE42T6PRi"
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
