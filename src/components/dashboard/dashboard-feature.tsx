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
    "5Pyq9A8UUW46LdWsFNZ7kiKoMxEJDDExy4BuwD7agY1zEn6caHHBKT6CY46uvNCVDtzdj1H8D1L2soZe6zJQeq21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yj3yqeAJHh4HUwtQsFPFz9xxvmCtHvCN5mKTTksBZX6kCeAipxgyoPtjvtfzSc5K2u4n18UuMezTSqgjUFpaPu5",
  "key1": "cdJd8zZvXqs65okLnEGCsZH9g8quv8JWGnrU2MUR5BksSXma3Qi8uFjyd3mgKoQuCQ9JiUWKTwXZjjvhU7jmrGb",
  "key2": "3yUqFbt4Ar1ktBcfhbvDJbHoWpuc9NiyqJAQDJFXzu2oDvUYdhen6so9NAcyxh1ew3DXJX7UrrZYpRDpsZiU44gq",
  "key3": "5kbbj8NpgncNNaWFg5JrAZBFkyXdobWt9kDviqcKe6FnZ7zoyobg7EguPRWX2f3PuwBPwkZ3YTSeNJ5DNJqDjByC",
  "key4": "UYMer6Cy4NA2HzEHJqwFV5TpDb7cePTc8wcuFN5BJy4EiA5hUYs4cPCm1TSmF1WrksJ7fRh154wFkBaUxEtSwmz",
  "key5": "eraNeKrdJdyVfoPAnxG2hYJn2gtkuMMeZnUvzfFoExKyzEUm1Mf1jkUJ1aaJWbR4c5uU8LBm59b4VkZRnmj9PJL",
  "key6": "21RFNywVeyU3V7SyKKQ9bPCfqHUUWNsYJNQxFHuN4sbwmad37u7Fj5wH6TTib76bEJG3v6tRM7pA74vsp59sgMvr",
  "key7": "65JdArNSk7dut7QHVweGSRaRFZhP6kjUdHzGGw7aD6SSem22a5cZsazPYMoPHpEoxdMvBHa1LH2cgu4boiqVkCzX",
  "key8": "65PEVPHrTa4Rx1XmtQK6cLYVrZ5Ji7GuosqEYuZMMZcTAAUuNeNSQfJLNg7RpKndS7oGeRWWmK6NBFoA21LeeGqd",
  "key9": "3pW9uMrPBs3BihJRjvUCDeEVSkJmuL1sLU8nbfx2fWz5GbkQCBc9ptjfmWH7GfKWnqsJn91dsR5eeqXQPgvDWU6z",
  "key10": "4HaV3N5BRAPMEFv27dcRSYb3xwGFNor6EcDzuZE1Mak4jMV8v1Ch3fozLxPmDYxsH3DAkX7wfyAGjdGmDwqHkGc6",
  "key11": "3jyFrDN5P1gXh1duq1VRGAV1cXTyshbh68sozCGJyHKCytVEk4iYxCwng8NPidpygCQAJx1v3eBuq2oSGCjayCPM",
  "key12": "5YYoRwPVWqH8qthPLMiZHhtcg6M4Yc71FB8dX9y34icKxNJBtQRZNwizt1My9yVaDCszUjqGwBT6zJZLz1avhjLn",
  "key13": "2br41iN15XriY2fbBsKEMUdxr1cr3TWhuN3KCBWYnMMXbg5Xye73evW2Jx3jJiCLp5Uz9NTvxykaQDXvjPc2PXSv",
  "key14": "5J1nwdwHVykuAgGvxxqDC8sEoGsqYKGg22sYuSev5YDwKb9CtpozRBqjLLAKJe1otCw4nMrAVWt6ibRCDq5KQv1s",
  "key15": "2m1JXruBVvtZcCupSKDjnSx62tqTJFpcYZekhaPphwEnWDuf2GpNnCmXBJSrAUjKW8S59kHVihxFKWbcVbx4PZim",
  "key16": "3jSuzRUoRW1qz4NSuD8XLdptVgwDc8cBVCwksZ7rkBRkfB8ZtLm8rRAczPoTChAkxtvb6KgQBtgvPgoxND1AuQD9",
  "key17": "5u4sfydkjqoao3aZA5HdQv1fYzsb4K4wJzK1WpXd2aaWVAKoCKpVemzdPxEXeN9B36geGDk4PFdtHKjcYsG6absg",
  "key18": "26PcSeZzNsGbchu6A5S4niqU6iCQGno9TS31DKT46WfE954Dub8grLZLjYYwiS9s3RGgXnD5R9s2ryscTMQWmFaC",
  "key19": "2gd9bJPdrQXp6Tn9np6R6sTriJFdTK6UrHrCrUf3gZP2dGxAuikDMsaG1rnbCjsJCwTQjUxFTwHzqWL7WBBkTaST",
  "key20": "ZMDhYrVhzxEYndSy8uDHA3ZG14ca2bbjyMGFAASLgkCkxAJosfWfxy8VDwnqnavpF4PPBAo1SDuZGneUJGfEmM8",
  "key21": "2SoAok2n6n97tQ6xkbALYpcG4YttMoP2vHu2WmxggS2pfahL6f3gZfhtcTXiEnf66oLxwHVa5Cj8P4oga8pTDuXR",
  "key22": "5JiytiVEEmDK4JS8jLVAqLRQabMpsVVx7QCtQsLJc5c345vozEHtsUgRRSGFkZDQvMn6WecpKB8rYUKAxAkYTAYF",
  "key23": "4b3jyNUZouhQJAkqCTyKcCHJU4DV6eLJjG56FLMjyopYAqjEeQ2ZwgkduxgdjEQujWWKPmV4e4YZ7FHmqeB6cSZk",
  "key24": "2r9KZMXLHSaGjjKfEP5cgApiJaSNn2TTHUKgMNZwRW8QhJs1gruFbCkmKf9Gebr82fdWw693SZ7LmKiKRxps2W73",
  "key25": "5hXdV9HpWwLSk1jQ7idc6WWQBUqY7jiNChBZqqC566kbKt6TgwkiJwz6oDy5R9fuCXYv2jPmu4itVcnRaDZ2chMw",
  "key26": "3bqHznw71kmktK2HPwpSFeP5BRhmvXTpVXiYgmgKjNQMfJFXGF1aeyBnZM7m79epn8ABBBgM1ZUNUGVk2qbpKmnn",
  "key27": "qjasHXKuzRQuofRnCrb8HmT57V34JkqUFbtp5epfp5kM8yzAoedzC7Xt5AuyvHqogctgLcAkrmsCwKthuiSa9VA",
  "key28": "8x1VhNEZc3ezsomeEdE4VTeqvCpgL7VhhLwYo9Qpj3EUTHYz4WEPMSahqojnFHH5UW4xqpDM3id6C75NfiaiWth",
  "key29": "3w4hjW6ueTuPqtkzgVoQpJ3NCedegmdCBJdTQzfcDQ9Wo1hUbThmsLKnRajmHL8sLnPFszA1FXQKhhLT4BhE1JGL",
  "key30": "3VKhrtkdvaHWfhpEhfV9u23VZgBP7QHdEtwrJVyKFxpJwJDKiAG5KJX6cuXcVxUNpTJwRuaegFWq6AdZ36z5miNw",
  "key31": "4EP1LKpac5XAW61uuK7msBFbusAr6xGWcrKmmDBAiXFmTih3Tuirzfsr4NoSesBdDzfmPZdSkULbkU1nrTy6M8L4",
  "key32": "66dD2xyHkafvHUPe8T6NcDyjvtTn7dghZ7Ls7XJTUqsJTJqHufeXAFdTrYt6f7oZ4ULjDofigcF2y7jbUsV4qqxZ",
  "key33": "2VkjwEGDmHaP4SbVaSTLx1svBa1oFTUBW3rKbrbjkEAGrVwGhTcV7vwr3vVdEFZ9oLcvC72itp9SN7RgP5jVD3DV",
  "key34": "2Ek7oupBa25tkAJRHqDvVPqU5Zj3JwhwrT77dLErBNEKXV34HaCtA7bsMTRghLWaTu17pkkouzJAGFF6TESW81Pn",
  "key35": "5nmXvXJpcZETGVeC2f4p2vRDi91mJDh9WVpsA35wQgh3jb7G7VAiqgj1pAvvhEkxzoe7tRgp9J7mkZcRnD4TUfQr",
  "key36": "5E5Db1v3nXh1oD6Ed8WqP882vKuyUovh3dzWE1jyGZ1ug5tsXZE7UV7S2dgueJjy3SVLBLJYujKAKdf6SLJGVZhC"
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
