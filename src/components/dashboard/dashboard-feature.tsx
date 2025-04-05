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
    "27YptDWCx1PmqXCKcnsGmUuycsNoGUW5fvrHDb8qo3Xk9Ecr8qfbXS4Ud2mQZymvqYqjcgLMtjz28capeZj91urT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L2wrykoGBY392Aep8K6dZ5exDVZQprB92prZH9Rq484XaCYF5iz8iv9HPkcPDsPRAcNVAuFkJJYZ6qjuRCVn3vA",
  "key1": "2mXjfe5oGF2HQVCHU7rSjbhNwoamVGch98V3NoKVUoGLarXqCcZuE543QoK2jRgeiYmN7UBVW1a7iXzK19PXu67F",
  "key2": "bWEdtjg6reepGQaVW9AW5CaX9c1x9w4Yyesna4xxkroqUBhd3iRpgtRXCiRGUSMYD9Hnzem5rRwhTiCY7kpySm7",
  "key3": "2HaHW8mUw9EnnNg2Y9FYdKPRnSYdRTmWfozkFkxRco6GoUjjL9ZesxnkBGS29KuVGQgPFk4YrU9Kog6TVrgAJ2s1",
  "key4": "4ed1BCSV7EDLA5cLR7tEUeCaNjp94HjMbNYvS7Rg6qKba82JsXHpf9duHHNwDpSHKpH2DESaSXb5H3GeGvSqMdjc",
  "key5": "uM6N4oQ1Sfb1QJVQExqxe9e4v7C5agtkZkcXiuP1fJrbpHoLmffakwye1VznC48TmLpW1kSSeDn2suje3BCtKZB",
  "key6": "4wiXThdqJBAFoR3XnVHtqjaDzmwqMZg94LvsjBPXJk9ChdGtegcuA9Cnige1Yedziz6zKdynTLqTKVPz6MJzjr8d",
  "key7": "2CWZGPZkXPUYrCCeB9nLxMtKvqYcWudJqwGzWxkPy5BPx2XQugc8qL54P3YFjmxA1CBZzHJemJ5GNXwZ1HFE8352",
  "key8": "5xirsAYNw6gpPChQ56CtVev43j2A3ay382Xnsazn3diyCCR5g7CTUfaJYG8FfkXCSw2jxFPwM2coGQtJKf3hcwUt",
  "key9": "5r85JKc89o9jcWXmhCs7Fyg5JgL1GVK3YHFVtQoQzX86S1FgdccsizWhqxLp6uNyTQj2cdsBbPBp7Y2F83waiQuC",
  "key10": "5gc6mGnT5HAm5h6EEZ13SN9qBLzyxxuJV3WUp2DSEfbWLNUD8K7UXFVe3jso6GHNbWTS7LVF3jF9VaYNprHTyvSr",
  "key11": "4Ecx25ofNSkeWmmf4QCPaKkn9A3CiqNQUkn9PTM8epRVcYc24yfNCbdYUH9rHhhKLNeE1oycxZG2wJbNHU5cqtnU",
  "key12": "2NqtLMquuZBmhNEmzbxfDH8wVvFkgdqPHGUrt9RxjqUVpXqBQRHe2bAoQ92nxTM34b8ZM49KYdXySXjQCXcZD2Mg",
  "key13": "5M5Sw1mRYseW6S5zZ8HszWw4cKJ7rWfEpwfHvGD1DbqRPQ8B7RrKFFuQM4K28yNiRztFdypYs4uBMqmC64mDVVVQ",
  "key14": "3YWAJcUL8PtmrEW3FN5wFWy35tq4J9pSKnoXR9L5pe1meVdeLt5ti4t7TaexFCovaQq3R1hXeUqotdgtzXxi3Kbf",
  "key15": "5Enpv8CMhfbBUVycxZ6D94KuDPLGghHcBNKViDWP47rciRxZe1Wwh1hRqeNjB8yqUrTEfPYn939zfS3UsiFbyMMx",
  "key16": "3XLatDJkz56yDLcVDZLVNk8YXadxnS3UrPyjLkbQGUX7c7gkzJect8kr7SrykHjhHbytwXjb5sw82iA8GTeo1n8h",
  "key17": "3fF57zidgp2ZfeA9QZs7trQQrMu5i1HH5tKdZyWjJYFuK68kAHbBRpWLCY5eYfK4Z4AdQAptpFUigH31Gp4oEoLf",
  "key18": "5Zz13LtrKjWYpDTeYkHDVGXnTWzW5QHmvwVfji31RdWY6RQuHk4VnVfhHtT1um21G6NUo3oEjmZDwdCUFKJJAeWe",
  "key19": "43kEainw8NJQycqiD2bdeCXbfvvqU62vuXGh3dzbz2tJi8fdZjDZLR8CSGAgiz1q82VCmtzVEp2nkwtyBqSqWsd8",
  "key20": "2QW1dT1TZ7YvP9HWF4SDJCbyVW6J3gZPoToiQsEh4vkLqESEFBrtJmYHmAJzANxTt2vG1e27tjvVZPcBxq3scTh7",
  "key21": "3wrQrjxkFNrgq6suiDYEeB79yZMtMqHBHCo7ZXDKtHcxF7RZZxZ7nHMawdKMQTe9JxHRA9BuZ4bqYSfDg53G5LBz",
  "key22": "4SFsMGSp3A3dE3uxwyGg2aawQjvKvYjm4mvmouBbTAXxTvwBoLRPiT9VY9c7rj92BhrLxpPZoWnEhbwDisyrXiDP",
  "key23": "54PpXdo8MQx92URr3QLf5pfyU5AZmUTiV3ymmPF7y5efvxQmyx6G9yMByum2mmYq9dqCT2b32SmU39tKeMNqKKxJ",
  "key24": "2VwtxBzx3WmLUJfxi7EGzgE21VAvuMYJes6XdiE7myUd3szE3p2UeBAvdxhqEkT8q4TFiMmxBR9hh2QatQY4j42a",
  "key25": "S6WojrBqqtM8wj9y6t2He5sM8XY3P9UziXg5eCWByz3CjZTtcVLed5wjSCXjy52nzg2uaumfdJtfNWN2gywSsiZ",
  "key26": "LmuNThtM3EZYTVJLbcopwDJhKKw9QHE2M1hCkkNCN1zpnwR1J2LjZ6UKkxp3ReEzJPuLdpXC5m2kkkTi3XZvmHg",
  "key27": "3HecA4nXBxz8zLK9BHeu2f6imktwQpGax3RbKbyy3iJnbVXh82FW2E4MmsCXPKyXo1mu61xkTpmYGkgx46ke5KEj"
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
