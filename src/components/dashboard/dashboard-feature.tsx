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
    "3k7gMLasxdi7E4GA797jd22tZSCVEgzrAW1NHQPGWdZrgLoQb57d9Ys6Kb5V3B8xSeiGycopjLppQScY3MAYk8tf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2awVLYhvDX2xhHrtqoavdrwLyBkJo3U4WGUvohRLgPSRrVcUCb1tecLGS5kQQ84zLA8uoYekGKZomUr6vZhMsPth",
  "key1": "3RPkrBXumtizMuANvmrRDESctNYMgsY6wAySoCVYFRadCr18XwfYemgeRuJMQWBE9ru42ovhEJGWk7PbfBtkix24",
  "key2": "67dExKjHEXs1vk9hh5imUBuHRmjC9D5H7JKDzY9buWWAEc1jX5eR7h6njGUE1PJAESwgqbZm2wAfiZGgiHYAxB4V",
  "key3": "7KVj685YwjCjLqbWqWtRynYqc141S82Eww4NFcnDjksAPegpNP7e8dPTn9FZ8VTUvDcYrbSrbrwd8jj2oJ6cm2z",
  "key4": "3N6hkQceuKUFrnGYCCdzRnyFJ3AGvzanxE94gCqdeVWubQHqmY88k2hYuZy8A9nVJSUtyhsUmw1gL4pWNfbJfKrX",
  "key5": "4kzc1hKPExQWRf752zqnaSHHjQQiwXMyQh6LN5FkRY7RoB8VB4pQAKMPj4oPmVnNufKyoS7gaGFKMXsZKHtuuL2s",
  "key6": "3r1Z8tFDLpmdZ8hAkFQyiR9bJKRon5h4nohT2CL6LGvWW7rb6HL82P4GmaGYTvMKkJ3rpV56T8ZM3M3tHjTYJpJJ",
  "key7": "3LsgN3cHk4XydL2T6Xp9YJwDxy1uMKC47QUAoEmkPEunsMwpuRiiminSm7tR7RFxG437X9szksBsQytfMYg8vUgd",
  "key8": "5EJW6W9FsZL9QJDLPPtrb3y913AzP61yNY1pDNRLLkGyWQ6W7MMQLZAXrKMM6bxVLqMWq8uZZ8XsFHPLYChfWj9N",
  "key9": "472W1scPWAj584CdgPdbG7nK1BKSHnaFVhAXd1EDouXsFqXPEgHG26Zmbg3sPw6ddu6kGJasbuxfZhUWaczTHkhF",
  "key10": "A8zHtcbKt7EYubHLBVvxejuXJQ9zVVAdge6Vo8yR9mB2STtZBNHxHn42QSLCyj2s8r6gAEYuuAyaMaeUsvbhEMx",
  "key11": "3LdsbRUoiRPTqtp1NQwXn66TR1TwqtF8wu7ZRtXr58oS4GkQCASJokwrVBsm3hzNCaP9bpgcvwkEcAeX3gVzxwZn",
  "key12": "66pn7MqDomJ9xuZpz72CnHeyVqRYDqCr6wjA8WrJvRhvnAJxQAZHqFGyGFfvrZWMAkyu7hbFgKq38aQLUuTaQfhS",
  "key13": "2ovKwLgTFvGzVhJbt82Xxssqcdb1UJ7yBT71Kvm6XSwQ1uWvW92eDhk4A67zfxVxB5GxDBDFquUqSsywg3r9PdoF",
  "key14": "3LKqfqJyxe72twwtRxV9St9X6mMBH8Pido2uCn8qjuBiyufCEhQFcXpUJNsLJ1fSEsxWzf53MG7S44fwTXSczKbU",
  "key15": "5mafrrSjCJScDq4TVmEz3cj3cwaKCAZNzafGhncmZA5VapmKhD8MN2v5SqEut57yXW9QaZ8ss5AZZaa7BQrfeG2v",
  "key16": "3Psa1WSPfC46xLhzikatJ4fPchcnzgYrrgNDXLSCE5XpiMf3gXPnDXDqpSckLgBu2fk2XJKpFW6fcb2LFTquHX21",
  "key17": "57ebAL3LHqZvUfSGaoA1RCxpnEqaJmwrBBuMYmiL2vWsHNvDWy7KCAP9pCvJius4HuD4hsND8xNVQFSrtDq7nwiF",
  "key18": "2LTsUJTUWTtE9T2W1xz8qeXnA7oYuwS2iXfFaB7P84Br35bTpE4qCCSwEyUHZEdLzHj5wAYsyUjdNY72mVM363Ku",
  "key19": "2HU4vRRNwKLyXTNevijnr8ZKQXrPG9TimLD5JfYamZQcqJ273h7nPSgNtSLe4k8j7uLxQGyoLS43PGQLSbgAsPKS",
  "key20": "5mnyXvLNsLiLh2txpWqnuBxd8yu3GKdBQGnqP9PY2Tww16MSLwB1x7Nh7Uu6NqWh13W1XujduL5RytJFifHAyycP",
  "key21": "5tZWyZeKDJg4Hm13cjwjHiXBQNgwT97zvkBtVMC8A8AGkKUtHU9omLq98WXqq9xNDPL4UYgD3QiM2ydKoqEznfEY",
  "key22": "dHSHB1x2jxt2CpbA1aeVRY1EHvoaJZbjzi7VyfrnYHTEMzQb8so7FjEjxi6qeJ28jQSCPKRhVfTZxNzQVRzZeeZ",
  "key23": "2wxkjRwpYma5G3pLLYcjK2aBZkfjN4qZfR2DCQxxy1ERXgVKjFQ7UDAxNDkySDbihB4pKR6ha1PeYHsyjVC84CYs",
  "key24": "4nEQv4pDw5MHejMn2exd89Uth3FN4mcsqcZvPV2RBNBb1XQ9ZE4SGZinqE5sinEWtqYX4B6XoCcXGw7LbJ9geiGQ"
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
