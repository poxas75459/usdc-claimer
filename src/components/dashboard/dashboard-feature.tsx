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
    "AZNDojpAo6kmfYbE2KGqN71irYvRztUNXaKTC8xF68rUJeVGbmHiLDH1prSJ88FkrVJ4qHaG8TXoTP8ZZ9b5zTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31LUvLx2GiARDHQ3JTDwfF5mX2BhF1VxbgSrGi5FB8YytGE6BWFrHuBABkbn1j4Ft76zrokrByWpap5JHkW2Dq8E",
  "key1": "4VijCa1P1aRXKM9MYM9fSYUNoyhdEw55fjU92ZLX8LZhim5G6qWQ6RqzYcT8ptB4Fc7m2KuzUhzgpxNt4nrowD17",
  "key2": "2K6fr5Xwa7SQRpi9MHDTh61Nw2rUq5rsD9nBWfpdHrmWaWGpDEhjnoTCZHkfK23f7yTSmLQJs6YUbnu9L7TetCNX",
  "key3": "3XmZRBHhLi3ScyC972qfiEzWSnBGPoGDT4V7y9TPB29u4QgyQagu8nbbJevWzJ5z54J97fv1vytDGq69Dys47n4y",
  "key4": "2Z3XMgsnpLhAWy8NZprMpiaXkZ3yGHEodZEEnpYDgWrdmbhYxXMYDXbnKcjr2XF5AXgaPAxnBsV2iF7pXQzWBcr9",
  "key5": "GErJZTC6g1pP15qTWXAd9A3rFHmSXx2kxxgCrcuHvCW1Aq5uFepj2ruzF4SbrCa5rAKVDbzsWAQGehGZUqWKt5z",
  "key6": "3pZFoNRWq5YGdRdrWagGD5AiHk21Qg1sLvTVHj9wb7u3Y3YMx7mJdGCb92HGy3nyiPuE3HgVgooCLdKmk9K97Q3Q",
  "key7": "in9pEeJ2CWRbdFZXv4zxteaR8Zr6Sa7YDo5GwzeNgMVGD32BCHBA1XVwzKodKfjwtnyJonqysCZnsxYxBBrxHaM",
  "key8": "3tJPjWCLX64aXE167b357KePvcnBhEqqRzX13SM3DyjhREMUsSWyVZkQfCYMhzFenghAXHrH4jTAXoFuzZ7pKQyj",
  "key9": "JgBGNpwzoNPd9Thtq82vMEzGDe7a8Lxps7jAeKHSi72JBRMuTbSguujcD1bwk5DH5BDaSQhXMDQWg2SRc4KSCkd",
  "key10": "5ENpmnxxTMCy8itq7A3zp8VZXVYeSBEVYUU624R3QtBNTX6vFPkoZtpUwGEiyXxjt3pzJ2bTX7vAgrMXYKyTLUif",
  "key11": "3V8XAyvLxwP5yx79ofQb9cLxiqExB4nrKgD39i8WNr7HRyzbxeUst8rErNpzW5FepN2b4fZ9rWtKBaByJXgKDukD",
  "key12": "2xmt8Tpedf3q8eF4VFNsYBMFuSYzYnPmWGPbmBrqWsiz5Q5fBUBZHF3RWPcgx6oHPEse62HbamXBT84SFXAuX1Ln",
  "key13": "4iUehtQzeEHVNw9zpkzTrfm4eJueEXqmQSM2KWRHRqngKVLEPWS6Rdv71NDCNmWW3WXqKiDvXdBAUEoFZfRvoMqX",
  "key14": "3SZynHXNCSZ8v5uF89Atq8qRETRMtwoAAFZCwy5SFsanppM19WoD8VDetwyFFjVewwvVXPBon4rfBgNb21vMb9pq",
  "key15": "28byBgNxC83vdYZxMiyFUB2fxHEiLcwDCMazNBVPKb3ELku68SGp4d927f2F1zX5hTR28a97vUCYm6oyMpFBs6Ze",
  "key16": "kFZzC37b8m1oSjvJ5kukyN3FU7dKy4fQocBRgvcomXxAbfPN1RUVxktKQkmM9dwrWJY2T6nLJfirAgV1Xg33jrP",
  "key17": "5fzae9rLyspAv6TY4n2fPZ8pJguEC6jMQJCv9GvLB88Bh7vLe53U2cbkYEK64s14QZJL137x81NStX33Buth11nd",
  "key18": "46rTBJn4cw3qxtsh5ZAbWw54xt4q5DsTaD9kkdoJSnysfh94jeAs11SyYEQToSDnXsCHYzoQUCZpGYr3HLUBqttt",
  "key19": "47crcREWN1Q6XquPp1UdXiyXFPAGha2Nhe2JH35cMjEMc9wTL4mQDxsDMdHahEaSwDaCfsXS3RUfoxuehPWvDMHQ",
  "key20": "48AXbaTydNEZYxMxqUTCyap2RMJL3WzPhU8xDxp3jCGVYL7a95sYifVN9N2wPdswMxytfSYj8UB5cDEFzYnh5qpt",
  "key21": "DpPH4FCM68u7GByceHf9QfryKgxs9S4y4XxavTfif9Cp1RgeWRiWmV8CDmEqCNYrutZ5CL2kAakn1Mza3MCDLST",
  "key22": "4Su8bFVE4edkQZc4yP8E4c4nU8UacJhckdowXD8Y5MWKhaAB79Gwa8Ltvx3Hprcm3h9uAFLqtSAF6GEKJd6az28P",
  "key23": "4sjJQ8i6YTzi2gq78gvtxmc8UXcdZCjBDY5UUXTCch3AyYrfx4yL7cMd6gteqbcpmXLpo6GkzkisHR9rrXCdixV8",
  "key24": "2LrdCkrhkXDY7k8KxR3Vxo2UZiTnoEgZbhnzou816A1okwTBoo97uVs1LQEBdGTFhRwJ5g9w9P4JiPx2N1EKdYE5",
  "key25": "4cxmtqakiEmQUsRuNXqHYJp7cVDXTkLP9SwbnHiFcdXkD3org2JFfKx31ucTNC9LHzFE1kaE9fHKGn7ALZ8oCiLD",
  "key26": "49tzu2hHvVvNcBdNWQUGDXLwkZAQmfe7gDbcfWsGkh4ctZwgm5r7ZGhHXBmkesE6fw9xYmZLNf8PLro23ouV6wR3",
  "key27": "42KLUjjgK61cn1ZaujHKtNBiMLySdkQuHLMdLuj4uc6sdiBSNDtgteq5fBcKb9jtuXoYWwPp8fw5bvS5eA9WTo4c",
  "key28": "4QWzfLZm7AaRNA3fJXvf6YP7upX3JSkQn142x9QMmrAxn96HEqCP5VwKTpgfZ2bkPs8vdeWH7G1rmEYqDSUeJiMZ",
  "key29": "5zxF48j4qk995zjyrnejCLBB1xoEQyL9uiwE8bQeMjG56556GoLYMxyE55AW3FAT1aVPQKz2C1aKkjVJJjQdFWwX",
  "key30": "2bcnRWbsMC3awbJfWHAUA7gvRk9HBTcCzrQxUDVmZmGHBKfSv36yYZLMSLEMY5EtYuWrfbxRGtHHcv4znDVYH41H",
  "key31": "39kkEtHUm2XsaWxNUwjZSAqp6i5wdqnbrMqXnXkPz7AKbJQCc7QPUeVn2vPX1GfVcw8jyhChdtymJE1iVmsntZTK"
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
