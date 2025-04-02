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
    "2ojndoUhB6DtMfZv7N7cHa3KpSsE3LmPuWCrWKMAuFvFvpdUcm5z6amURBDtzscfr4xFffRXSZfcHQTf82hP5Q2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EfXLUMczfzzZN1HTeewwR22BpDNYpMWWLin2JKR3xBrYQXYooRotUxeSTCCkD3AxSpXEszYmtD4uE2NPyK1hMtS",
  "key1": "4McWoabTyfVaUQL85BTbZJsbFKoiKAoNCTqpzxtvgNQF9J3oogDeDNEomBU49ZnZZNQXEfXJ3w4vYTagPZsmKRue",
  "key2": "51JS3VZtZYCSBHZh2cmCx8AUggWe6vnCjgNz8rki6g9vcaEek5A5DjnvRJLjEjjvovr5ipRV4jXJiGpykutx8PgN",
  "key3": "33YZ2ZSrXrrWNZERE178kE15Z11keEDTWJvNqN7eVknVtspWZXzXbDfpHHUTo2eP5gRYGi2qNWjK4voxScuPpyzs",
  "key4": "5jmY8uFnsmg62pKi8Btoxyvub5JWCpnun1rmGpTvW1bJxaDZQupLm8HWzPpAYi2wgBaLTbQXuWFymJE9vqzGUFAa",
  "key5": "5tEAR1BxmKvwfhVdGWAD3XYKanZVrws6iQvgKGSkGqRyf3KD3zaigwXwSWcRyMXjTRMfDPN9Kp9wxyQTDTLzPZEy",
  "key6": "3C3xoNSkqeQU86xm5Pyt9E5qKFJJaeZf6nbrgFED8tR7EUfoifhJfhzm6qL35PFfJiiWjeCQDa5Li6KEK4trLj4D",
  "key7": "5fw7EJn7BTzfLKrjmjU5D4jc9Duqd732C5ytKryaptSrjHjdzp2BgoFYfpZQZvVmtvEj4Be3QEsbhfKm2yBTFzdk",
  "key8": "3FYmEXFsDRupQfzUv5bjN5o1ucQwiNx2UoEF49biFdj1ovQzEs8cfvihySb9zcJ8Zodh7ZM8Gff9CTkhoQYxD4pt",
  "key9": "4m7zVoCyGcLtFdCxyGBxSxpy6LDW8YqrQK7v7fJ18uF7sy6bLYivA4ndSf8uvyyi1W86ZN6RZrT7vgaD4EDV4UQ1",
  "key10": "3oCWKwh9auzMHZCxoGNXprdeRb1CGDgQsYWMGcGivW2yLdAaWkXuXLfr97t7CrHYA9aBktxq3b8JLkjnsMTPNi7m",
  "key11": "2CiXSyWBJiGkFD7MLp7wobr9JFEc3Qa4QvX7dEN1QmypjVCasN91UFcW4SfHN4Y5YJcsyEy244kgF8VnCPAEm4ZL",
  "key12": "244XLLaz4HwPuYCdrsxnZZx1cohFAhDvSwJSpLpfma9QA8sWgiJ2Bo8uYgQAY5Fh3s4ZEWwkFbk44wKTbodGpRdv",
  "key13": "zKViqDT4QTQqahjs4JDLviYFcbPK9H8pyrEpTCpUu9yW1cdrn6McWzcLgbNpvZJn84hZVWMY1vnu6iRyBweqzH9",
  "key14": "35oHAobNU2rQvEAqxgWNktzUUcWXxmcYauGFRwx4yxm2UDQJpUG4d3bjQ6EARhpS8cRdYYbRNxa448Zkbpuj8CxV",
  "key15": "2w6xaF7QbztGuX5WzyJjTRPsAaHJgkBY56idC3EBLnHvvxReAoEJSsMNQEAz7HUKZhsKb2WFFaPzFRmMAYMMvhWB",
  "key16": "2oyDFbNSsbgy2upowHwmdyBgnmxRavkMNuFSpHpQicMKBGJaXjCrJG6gcPuLDJtwaJdYxFC1u2aiVnWWNY5Gsrav",
  "key17": "2NsHrE7UBhvnEPWWysP4DS5rEBCSBMVDFE9JyopFwqo5GvVyeF8wcCejbwPiFRcr3op1ciXLHmskkAEJdj8wP85U",
  "key18": "36DKeFd3Wc9FC5Z5ZecDVqsnifkLvrQKvzjjhd7ntTtNi6mpfrKZ3YhRUfAyUQaBmmcrWp9AmoLa2jti8xy2YNxC",
  "key19": "c1gz3BvuUtRBaeqsnYdsWm4g71en6bVCQXgptbnZiKVaHjJnEQH1dBS5JLQxnwSb9uJxq7w8F8BgVxCSxgixnKF",
  "key20": "25DN5QzJu24L25rbmSESC4phMx2Ptu4nQo9jatZoHHJU1PzhTUK3oTKYigNydQVYNLQnFB4S7GxgnJ3PEadCnjjG",
  "key21": "3tmmbwuett4D6EtSh6ghKMcqY6TVyKzvAR7rbJPShmWP7KSmWVZoKQxBsYvwj8tWJrs3JQ57QNWQTVoMqU7cxE9M",
  "key22": "5omsKBMV7m7AjTgQKmdqnmPyH3nvhcX2xy4t1LYWhipFzjDGfCMwc1GYj3ZE2buUWHHWnDV2R1j3RgXpihZYg3pv",
  "key23": "THdZ6Fo8xHJ7ymhSASVwoA1N7Qb65dbEt2oGMVN3VSK7Q4Awar8utVwK1GYjp8ETPMbyo2LP6d3xjzg4rnUu7z9",
  "key24": "2oyrs12iYRxkRXCQ8ACsnZJ9qP4Wj4hv7ta4USebGLowLfehF7uhK9puV6VTm8vE4rKNGsAP8fvpUdodATg5LiY2",
  "key25": "5o6oRbm8Khwetnkumwpt1snqNUkKkPjMMrzbC5xNx9EiiH7akJWt6iVjHjHH7HxTaSrcYaFLUiy2Ah2MZRWD1wYM"
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
