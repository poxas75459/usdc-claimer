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
    "4cn3zSHNkbCpns9C8Ce4E1xbK61a7DsW8mxw1BARihSXvAkJL83s52djs82319hZJjV2yzghhHRgcVheyR9s4coB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fnk9jrWEuainK4ZkE6Y7y23tHeeCN9MbZyFfKQHGCKopEuGaxB3RzASr82t8G4fTP4QnkqD9GcfgE8rBE3EsofQ",
  "key1": "126p9owgbCimTVP27sasFGMsZz7aeusqcStm7af4a2zkcxBnwk4AwuEPUdMEbuv1Bvmqnh1jGeFA6qU13pSVcsCZ",
  "key2": "3WJsMSAqg1xCXuNCSS8pEbJRWVrKfFwYgRZoHCcrinPWw62hf21a3WQdGpgiVMEH3fyiyyGQPau77pqa1trRCtU4",
  "key3": "4c3UJRbv6KywLRJJZd6dUUdK3g7YNSZbxJs9iNzNUaaPiQBSgXtZyK1bytDxewWLvqkd93rZApqgsJ9zCN6HrRpQ",
  "key4": "2FRq22Hz28pF26dL9eS4GFgVgLVh3QpKVNxVTFbr1PZKE3gHtCsBKAHQWeo82Nmq3dbC6RF3RdKBsbnnwJQZiQVA",
  "key5": "FhrFRUGvjNvVbjf6ecLQSiJsAn8hUpFrWwXNyqjAznbtbZeMtHQA6MXHSufATKS8yyBEKoa7jJVEVJQsaCniBJd",
  "key6": "QcnJ6Kra8cNhXahCiRN1bzYKjrsoabRySWykzXRhbmfRZ7QgZcMLgfTapVGZTNN8tB24mYC2GLmebZiDvP1s18P",
  "key7": "2fkMLByN2FBZVNRyysfW5iBfLhjCFmGFs9MfWx5KeycHzj8GEAdoXdNYRvysTCAN3S5HnNaTo2eSLiDMBt4D8EDw",
  "key8": "4c6hMVAGy8RqBsQpBCt25oQ8TSe33XVqdgJoSQyUJwBqDVivAMiAAn7ZPDoxHz54qUGHDgLbSLHeUuZ6ZHkf1Q2S",
  "key9": "4uDErWnvnAYBaNpv73DTZBCb7poBjFmvmDVh76U1Rd1Kr4dkpBJgrwLkCjFrP7TdZpjAZZSeaBXmvuWbRkNLrvEt",
  "key10": "7MJ4gGtZJ2Y29AvsKh4cuSfRj2iV9e1XxUAinSLjEPCxfgQ16jG23T8dZxEQCK3tgmxi9Rchir9zKfhiUsAZEog",
  "key11": "okse92eNXtjxtsr896hyjUhCTzPZt6PM24ufu6XRj4AM97r1gHCamn6iG2zMYGpCZSH4uMYhe6841tLDwRtFHMD",
  "key12": "2fVwNCf4PeLuDw4kNUMtGrpUvd1KG54pYP9xsUJcYx2wqQhz6pz1BPK3MaBsM8VJZjiU7SZxncspkWctt8BrSkNT",
  "key13": "22mXByvmjsMK5ZA89ZxLZQHaxAscKcY5zNEB9XarVXSSWMLR6unJfem35AWuRZuiuFUECaSoRyR86Ukq8fCjdGT1",
  "key14": "3rY3VxpzupsteAYCrTSzKJHt6sXP77nepq8WwGe2aDLbWQ1pLf2uANEarDDZ67PGDzP6ePD3FuJrSsKZTxHzznZB",
  "key15": "3iU2cj8m9jkzufXwdfDVjcyYrSDYvsdaoeo6YkmjGD1y1fS9h6YHWK2gVnysXyhuHd3CGy8jBNQqZbMszJPMMShY",
  "key16": "dAMJB5wriD4FqBK77GgWyG14n7PS5eHKHMKw1n6Qj5qxzCjUeaZHwTihC4AJt2oqEgS3Dfc5invPfCjJoB5DWQT",
  "key17": "65MbCLsHEy2xmbMMh5DrHf1s4rQHQ6obe43M3hqnMDZECjXuQbpEuCrPyNzLQfR91sjrjnYWPaKewX32wJTqs4rS",
  "key18": "47KbUHoLmrm4xs6TQbg9tdefrD8RzmCU4CAbHKKza9ecKyKHHD3mpktisYWTuASrz7ZaKScHHrXQz7JLV6sa5TD6",
  "key19": "5LRbRSS2eS2krReNeGrF6xJXpQzWmwBgoFFjxmuzbuehJKuaB1rragktTf5ioLMAZsSEj3uCwgkkic1KxXnoFjQ7",
  "key20": "3Fbx9WxecwwcZVwopxhSQYKeL85iu8Cii5GpB665fr62WPJhkwBtc2eMEh91VLS4tNL8MUsfqJc4badu1CHgVV4X",
  "key21": "4LhVgwCba1L43dNsjw1PtzQvxdv62NFSRX1aNr4LPQdCHU1U2uTd8K6kn8u3mTxMn6U17sfb1LLf5gATYS6EHcpH",
  "key22": "3mXVjszxr7ActKWRdSfCUstKn4dD2zrZvSQme2P9Zrfr9m9krF7bQUEegLHFY1CtA88oqNi4dgkmiNYBmzdDidq5",
  "key23": "iX63VrT6J7PMZYWaVNtYv8FpoYvczKseD1q7bQHbN8zJDUBYV5vpTjJdwrcc3EGHCp6b3bkxWDjiaFHAkSHB9fG",
  "key24": "5zJkp1qeeKfQMQgk2RdxkiH7WkJdg9ZPJfXotmR9LCaCbhCazDhc4VARANtNDTsV1fYKqQdCH5msr3rHszc5CjA7"
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
