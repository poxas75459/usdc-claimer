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
    "3oAnSZPvayrHK72nQiLwEaxnpCo9gdKt3xs8KCtCCVH2nUxgB1MaE9PV7gxHuvTVErtahYhLbNuFJPaNLN3ii1LD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mzxDjre9N1GA49JBdy5ybn3aqRr3oadhcEA65VRh1tQbacxsHRmSoZRMjCkPkNpS8ivNz5E3mrqpg2G2SKC4cSL",
  "key1": "iV88u3K9oVA8CAagK3GH6Qo415hQsA7y2sDnyWsaJ4EdM3Kb8VzXFbR2ueCDUL3Fm8UkRCF4J4JkDfKppsRZpG6",
  "key2": "2eJgrw2wG9LdJXtZNGe26x9eFLpti2LMAeJh97Xk5MJERNoBiaB1tXFyUJZ4mx69sLzzNiF3haLMHxEYMQnQmGwM",
  "key3": "413hn6rJ3Saj9yCLqDaenvoEHQfak73Mh2AMLswKbG7hPgut2Gct2kohtM5tTLpesHkjRWurQMHVYxd63YJvF3Py",
  "key4": "3yh3qBzJekixsv3hsS9eyShi2252tqGRUXy5dK6YUWKfbjA4SuyXFHxhNN14UdhcdZPH3fGy9in9jzZbKxrULEns",
  "key5": "5cWxedQCXKDqoTTvESMCB1LMDFHbmrQzCD9Z258JBWzDkzj5gM1yEumdWMJvR6DZpNTCoriSvQoR2vQ3pY43NF4A",
  "key6": "4eAMZYKLBXrVXbGZXWPYHeCoizj2YXX5DEXobVNTiVSXhr9mxUbRKGo82Huy4ed5ZkMbR91PQZMvcqXYJDExsckB",
  "key7": "3eVzpb6PVi1M9jdZPannQPgbsdysBv9AsrYDKgy3LLfQuHcoKhKY9f2HSBUHMToWKu7aihdjcxUbL5SMxyFS5mhc",
  "key8": "5mjfdJBRHBnjE9F8v53n6ZhrUzNVMjRjN39qMEmSKwmt7aL7C6FvZUAc99RGMyKdaND3U9q9QeGZSi4STv13sYLv",
  "key9": "5GHBMkQGwZ8rx2jUgVJUbjdgknojodL9mV9jxNqnQzXCBMoVFnUiZFEV5L1BtKJiHWBgYLpLpPeNRGdDLxGXfX9y",
  "key10": "292mr9GaaqLZZ6fUtBoTGPB3BSZc5WCm21byShVjS6UKjZ3bibyPYxhDtGjSRgQRQtsZYfn3NM2Rzh9iZ7jA2x1U",
  "key11": "5nYJGdqnmwDuHmC184e8iU74co1yggDZX1i3bkhr75uorbz5rV43uJBLUCBeJmu1W8ras7B3mXLGHATpfoXnX4BN",
  "key12": "ApeJ1xAfGD23HSirw1ykHBna7v91EfTj8zNVPTGFiHxt1NqpQZfCwkHGwskGm62hTggBJKzHH6AqjoPJqQRvmJ3",
  "key13": "5s4T2ZYedzqqo6SC8rtzqfvKvPwXqzqj2xzhMHMoA7Mj3T8z1PEdRi2nhpbeoAmoLqgqQn1DY7ytArt14XkyH992",
  "key14": "28foNbH75imaR4DPjDT3erKFMwJfxqLZ22B12mjjHDG5S7fTUM1Nv7kVuGZmCdXJuvcmLHssJgfd6Kjr36WGg3Zd",
  "key15": "3cJghsoFTd7FSeqx5Kr3GaHzrgB7VWBCzHMfst1toJbft7nQPMN7s42yziSzymSpYAgZZNkw1jcv9Bs1MM8BJ7Hx",
  "key16": "2uM2nTLezc7i6rXSKz2BbheZKzjaQZ2LfJG74EN6YUxUBySMk4MKqhyF9UBXNWCLQJKxHVLd4syNqx2QYPB6nEFw",
  "key17": "4GEH6BM3pzdJwMQBuuh4um24SM1UpFvjEHGqGX6wYUiHsCmhju1ukBW7Kjn5BB9R1UBJjjfFCVbaMkSTLQxyFaZk",
  "key18": "2127rXXXL2kZJxb3HkH1kBntTrWDivtbPVsTqgfBthT4a5pGE4EYSdQrsQBfV9uDSzPjToJTYqEAvycmJ6uHGMr5",
  "key19": "2oHzo1cRA5HJKjx8TRC3VkzZMC1jhBY4XJ48LV161u5nTvzGnqzz8stnh8T6A2ohvnAenrgfQQJUWX9UcagVeK9m",
  "key20": "2b1A2deXN8k5QtpE27iG8oPZNW6AjmTBPEq3o9yRzgfLw3d3jCEAk4JZhC9rByzx8EXBn4SGvPYRQFvmMzk8K7CX",
  "key21": "3LRUadoUBzTXdzZwr4m7Vsd7NGSqYXXo9dcqsmvXcHRbyCR2HtKafnwFezsdodXkajqjqSa52xqF8xJL5E3yiqfk",
  "key22": "aMV9DfeN2HFdbpxYYHUAAxRGoyhs39sbGB6hQSbVcxyv2CT1RtAATCXfu3ZZA8dKGDy67GqujfcGrgt8vCEQzQd",
  "key23": "xrv12qs872uGQnW9d1PTuuEpeETSTAAkmtJ1Rte8d1a6QTbZUKXrJx4aqWAfH2YnRxoS6NNRqNrXQ1rQv97oZmq",
  "key24": "4YsKXvf77BHB8SkTSUebCCcoSuw9FZvzgfpTkagzWkp9bjDAorRxAcucBQE2sZqsvSVeMQw7MGqCvqKyGZieysK8",
  "key25": "oT62TK9h1n8EsHdkV5a39xq3Too28Hhrbh9Th5ZwDLGxFCUDvbbPfWM8pNFhVQSe8GuruGYki96NaE89vFDnVwM",
  "key26": "4Hxym5cqN2CY3KBsfSpVzusfR4xm7C6XySR5AWHPLZFxVmaUqkqzc2zqJh3NhF4PAHUgmLpxZ2SRHwVHqnjbqRDr",
  "key27": "4EaQEhKpb1sztiGL3XwBzVR3gkXwJYWGJ3tUcNCNuVnBgyS7xENB6YhTdDPVtbm4DKRFARBLfwbK1VtpQJXKANBH"
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
