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
    "Rsvz8x9q23Xb5HP64dVUovNnP4KHCe1SqmuMpVDbPTZTjysQVMLeshCKZqNt5qV163wPHA55wuXKQurUsHj5eYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SdJzMMBUsCDeny7pxC28is3gy6xPbGAwmVfHTJXom9MExHabqKwieDh911zZ5XMFLmZN6TZSTgJSPR55rAn24aa",
  "key1": "3U6JF5WpTdwyb64Q8FRpUrwEtTuy7c871MYY4U5NChEccFWJUn1FtuHyYTG22bhBzL4YUeWY55bijC2R6HsZw5FH",
  "key2": "5BDR6HzyKkn1XuRurbr2LDzKv3MVHCCHx4br9QXF5hMNk28hmuVpmEPDAnJgeKjeom8fCLPrkuFsayR2LQnd43DZ",
  "key3": "52vSJeu3xAhZyRuzgerUkPfRDsvjB5JbgAgUznc76PeFcUpMteWEE7YhhP1stZw5aU9wCvQCM9paXrJxR2Sacf5s",
  "key4": "Ku3wbfuRNnyXVvyD8Wxxz5YA5mRsxjYbJar7k3HygFNuvDW6xJJZpw371Cf6fCv99X7Qs6tXDsachzV42nShP1N",
  "key5": "4BuNPKk8mPDT4pCqShgomFJ9icZU3F6HHcPL7HHDZq7h1nddGXsNwJzdheEjYd6oXYKSCuwCkfLto6BbkUYfBrx3",
  "key6": "22hWkq4EXg2kvq4xVjRiPoNR1xyZm2K2egZhSkaWpm6Npf9PYipeAUj8Jx3hFi4x7neecsxUUwDhN2KrqVKqPeHn",
  "key7": "8jZcGkQX19KEE73nMxUcHPQ3Sjzv1g4JZ46zUGgDqgE5Hy3BxtRn43pHDmtpiAnNtddgViQ88occzbbr5KtrsQz",
  "key8": "4BEY2NgUWeNzLHWBkUt3hxVcGqbqSU3b2vdxcumTQFaYHDttayz2Lh7UomfJEn8Qkgerb8MkMk2GHXC9oK2eZ1cc",
  "key9": "2TNCFk5ZBFEWK4tDS6ZiQqnEP4F61nvZyL6V1Advojgq8b35DrVPrgjNBjtNvedgejdHHCaMLvoDFzF5LALPr2F2",
  "key10": "4miDSC7bv5nDQ1o787Pjwn3rwgMRhx2mCHgUBJZEwGzqqM1khwe7aZtQFfLTVUnAMpithyiU7iWFLDwX54CBPWZu",
  "key11": "4cLjTpJW7trCSKYSFG6Z3vTuw1pxvoF6VTxSVaWyoT7KozkQTh6gqauXsKu4ajr8khuTBCVA1KoFbN8um8KzyaLT",
  "key12": "2gRTipt4GXiYh6zHNb4ezn7aWggL2CcZJ7BN2FJBsACYsLe5ivn79546Ug5TSks1Pq85gc5gU9UJkoGjeYCeqehx",
  "key13": "5rUqxMb18vkzXWELARyRLVNpbWKQYE79s8hSuFtTmbNHfQWsvG7R9bAmcXX7kczVEn6jv8Fqe9fuZkKv7Ri1qZR4",
  "key14": "3Dzj5FDPJgPHo8uzLf4YHCkQUkZjxVsUYMXtKn3wtLRrzbU8WvibL1sGa8CYpTuW2Ppn1HPFaU6ZxGJyopFWUYgT",
  "key15": "3RcyW6jdKfTuokbn5JY4tQGuLAQnTAWx7HYk6ZW3ua7XsWF5vHigXWnfgiduUPvTagsQPrUpi5ywEYJiHBmdP3hD",
  "key16": "3UjkQryjJ7zon264FqnvnE2NbEb9o8QhvaMaa2ofS3WC41HBbkZVWZBAhVxYgHHwWjo6Xjx9gHaTyJrdzLyat5qb",
  "key17": "qbVVTXSyDFX4dReeUw9yS9S6qWasS3cFBVYYLzBNr9822adNNb3aMewUmccXmzCjjBhF9ZZRV93KgaWgNSP5BnN",
  "key18": "4AmhDm1355HDKggwPuJ4UZ89dU3sT314mP14TVfq6cDBLDNBvYYkmT95y7caFPRaS8nv4xsDPJUqaDRwmcQmUmSe",
  "key19": "2b54y3yotamDhgvQrPedzLN5z8GxADXzRrMhASHrip6JWcBenuDD8UsDpb2Dqs4CuqnPtbTAvB43hCnfCWBYYbcT",
  "key20": "3DKr8XdGzeaFpyJtWs1T3XUhoG4wGZZMs1qkABefPcWhcy2uw8vCYHq6ALN2cPURoQXNeX5hun38LjQx8Uv5oEeW",
  "key21": "34UJQZzKoHrD91Am93kMxFGfkATMPimcoDvTh29sXS9sGZ9ugD66LKXWpEf8fBfAKfYbkWH9KZ62VhF17cVX4yiW",
  "key22": "51A15C4f5Vxr55pj5S2zrKG4L5P1JnYqSUE9kkDXQ9C4kzwpCkBwggbQLm6WSdNdXQgXnie9LbV7N1Jt6jwo6QBC",
  "key23": "2mfgGkmm5jj3oFJXrdNfbxgLcaBQFAp6HZ4w5ZSMuBcss8tdi8aft4RNLyQ1cyB48WQx22qdWjQP9EiaXCp4rwmo",
  "key24": "2uZy2BryMHeTvqwixqhDnkg6TW4PL889L6Si9dzjjAKawmhzopuxJf3GxKaefVFeMq73kFHiWBd3XCPpmP5sXYs4",
  "key25": "2wMjJsqJwNscT6AzncaQ3hNS3gxdbRGznyoKLGZigXfqz7YiBwzVJ1W59nNH8ZPys8CAfweqDSUXxoR1FrWCSjuX"
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
