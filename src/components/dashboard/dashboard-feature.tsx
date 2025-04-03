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
    "5L7DyLAA5J8Y7iyJ6WdULBr5d77xmSMA6BbeXQNHvYFzGa2CeS5y5MQ6SQP3WUzPEa5cnsJPzw4hTFH1ZJ2KobrQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57FuNzxBWWP6jf5QZ28r8KLcR1xUPPVaetskMpNUyJREPMXfczbtnu651BwBaaaPSxe5oCg1YdfVotwmjThQ563z",
  "key1": "duanzjMQ9S7Da6rhDxWyu5Kp21pH7MQPAFgitEG7yCEHoUaA6r9Dx8TQihzct8gnqrvSBSK7HeJtkRoQGR3BifL",
  "key2": "fHYSr76BMnGdqwfgw6ipAdy2sy5GDwo5gQ27S8TW4Evm7Pz3iLNqoCK8mrou6X2ZiTwHJWmxsfuQL7gUB6N7XRv",
  "key3": "2hwwYnYpn24BF4dEDuu5yPAPPhLKWoWC23QQXPQARaqWjuR1YZnobgFPhGf8dwgA1mnesku2zpqpjEfQTRpufBhv",
  "key4": "25x9mdoFKS9DAtS23mDCFmgNQKzEgwwyuD3u5t2js9TnpXCjyZxp6iPd6JdkGaRGp5btQ94JaC452uMB2w9SHrYS",
  "key5": "gJGZUG6wHk7gjbxodSdim5NXpksuFc5C442vbD319p5VRy4Vjt4A9EiVVrYi8yDvnDtJNSw1cVmN2PNNEtkVQQc",
  "key6": "5vJ2yM2m7GBuDLGvga8UTCST6j8vMWQw8yzAsZKXkF45h7yjgDpvHL7xGHiJ72AnzFHLzKkrefZesXAuKi1arkKm",
  "key7": "4zPXCJbCSWFAJqqCU2VUJ8cLeQZpoEVncDWU2xB3TgmJorfSYMTHStB1the4wRPaVnPPfmtSu1HbRZb5frmRbeGh",
  "key8": "4vuPUastUys3hfQJWaZZiqT4KUzuY7KHaC13DPDEdwxchFCjbJSoFVK5jspuQDDu91cmEwhKB9HpUVk5B5gjtrCo",
  "key9": "J6xKmqrnpKaPGyUJJmJ4k4L6SKAv6JLf3gPNFxCndvEKZoMeZHadNgpjy3xhSVZfqn1AUZ3ayHKDWiX2PeZ2wcK",
  "key10": "2pjd3ftQ17SdQdrYeLiUtozyEQiApTDLuv4AqhbYkLV9ujHA1zVC7AZfCio9B5ywacRWEyvnFdjCbu8xwRhPY1Wm",
  "key11": "5MSiZQdi5AE2gheqvoKh6mMjP1BcZvLzVXP5saNSwFrZ3tW9zp8xuELmn6hinG7Qza5bqQnG8NJFtH8Y84k64sjE",
  "key12": "5tu7vxKwaC34zKRQcAjuNd8rJAYdwTEK9bqeVJfMWaogDVo5bkcMeQPLqpebJ1VDjA1sXFAyi84Ud83oMTw3w4tQ",
  "key13": "BipshyyhihzNJbQfPUf6NUtWhVmpJQumr2nrhT8ezyxA9gS4brSZRhuQq75RytFV7fcqtgSsRrzbYJDcMWehznF",
  "key14": "jmmPDfpqnhS23cwTbTcLDkcKRAWjjnMfNsMkPj8KPjTcSysbfsYEn7EMGwzH8DKc6M8uNcve1nmZiGdWSKuSpUL",
  "key15": "24gxRxmYuLfBx2Q5bvSiJfXY82VZJpVZCbAqta6NPBgH8BQH8MfdPTzqr47w68K73atiCEqGKh85riMoTTUh4wpN",
  "key16": "KGTTPDLigB34R5Ab7x1f6a6GauiAXRsCLrUEyPsvLYTGs1CFKqegqEA3nGAcePps4pWkJKKPG76r1QQFwD6bm8Y",
  "key17": "3n162UTZuT2Z8G6GVj42rYmW3FhAdCiCzdytPYR2r8tkpPc1fnaXxV7JcHLh8z6KDU3MctXKsYUVmFPyevHTbkT3",
  "key18": "4mCxHjYZvyp4YSN8VKEXyqTNvhuFz5KrQwv7ucf7K5MPoAnr9NKVdmi5Q1fZEbctdGNLWKFc9mqqLKR89yi12a2K",
  "key19": "548UeHnHh7CE3adZiiVm9dMyyLqRZNLHDQ8cjfcDVxMB7qXZAhDVMRS7ypVnqwLtrHsWrdEkFGUgfYazv6bTBYQg",
  "key20": "4tfthqwoiQNdHTrVDMWcyBGtmmPfaFY2NP8jMrksc3jKGE4sEr67Vz1gCb3mRSVsmpuVjPHbbk1mS9rv66fr3zLV",
  "key21": "3T3RysnT5ZaNDf864fUyqm6XibhCNa6agWCzLxqReBcqtmQGVBQHAZbpBGV9gMxcRUJxYMqsebAoipUYUfK9YWsA",
  "key22": "3zCnFYMqCnbgATx2FnvUM7abDru4wjZdLNKgpFjAyoFmcucLnXrfaUDQwL13MHpkiczMtJdB8yzTpbeyWB8iRxAf",
  "key23": "4MS5S9nNfQ47KZ7tzHGrtQx7DpRGYx5w1LRHBotwxeTuBjgxw5xPWNZhaiV4v4Ki14EBQwxUrLckzMCWzX6RFcB1",
  "key24": "5YKu2qHcG1oC3hJofWRjQgERrKJer9kqctBW73g7WL7SCwRXE9fJ6Xq9wyfuRD1FXimU3ow3KuDJFJof1Gt2C6Jt",
  "key25": "R5LSnwotsreHALsRXiAZeQbGhZdpJ8zdL7LgHhx6Z1CY57hVPU2rNVUx71hDm1n6NLDFPXp4wakPNEKZXqd5xuf",
  "key26": "MRd7kVvdAmmd6bxavWfqxpoNxcxo1jAncntnBjzbRq4VzNu77SvWDKCnkq7EdnWfjqz5tBpH9Ny4t3ckasM4SKM",
  "key27": "4CtCTdmNxXNiH4LJ4Wd2FWGB6rsreCQQE5eCePF5W5kMbZzJq7WWqYBe1LvafW3eRFxYWLmDVPojWyHD39zoz6MG",
  "key28": "52mZDXLLQi5tJeiBTFPvFfN2TRXKFdUBMAwwKjRjsXeRTfzjcHw6Eb5bxxZsNsm3XjqjMcz5FfLkv5M43pdV8JLf"
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
