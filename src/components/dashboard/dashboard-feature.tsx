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
    "4xx8Tkenz6kuPJXqtW1DyTGzCswUxDHQimrRLTgAPEx8H7Kfb2JVCbgKtNpnx6QSu9ZXinRfvPavpZ72kLL4ryD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GeLdpaias1s99iBoKFG5aRwBQS6c7kkrugyFZw7Vmvj8nkT5xftZQnVuqQn7TdQQJFNv4Zb8DXuvJPZkF1DtbUm",
  "key1": "5kzX7JEVxjzb6z7ZwLEFwfuChGRC5hJdV2oejMPvgMwWZKkZwF5XmRjtV6dqwfXDYfzDKpFJSyfCreE5uVwCoKgS",
  "key2": "3cyPgTBoLLVJfyHdiCCtU2eCZHqKnwMhRFBUgsQZhUhgwdoytSVeu23uhMSwXoyN89Ws5ePVnEa5jXX6akpJtu9t",
  "key3": "4vz3jz8iuHGQkEQBexvsxxz9Qbjug3gDD6FP58oLaeQEzkrT9KBjYiKkVdbjHJQL2vu8zxR1AHWKi68GNMgKqftS",
  "key4": "5JkE2bDZ31R6VhcRvf8UdefmzV2Yp5egvaFZssoRa3s5tb6g36ABa8eJy449CcWepRHUjvzc4Ao45GJ2HsZiCyy4",
  "key5": "451FWGcmFbmn32ERDU4KaxBapxPsD4RC8LMQYFeSovMX91qSVDdkht2eAsLjeJxQe8stSSGqVTqFtUWcJwHfgKAV",
  "key6": "3k8hzNTeiy4Vp6DqJd1bQwe4jmLwAyNEAKZ3UVAEFyz46w7CpMVpCwrQgX8BoUBdnwtbshDyZaCBrKxxyEFHnm6R",
  "key7": "3t3HFHo8ghzPHKqqR1ATPBT5LPBuuGWy4NHBujxae54cgFhSZzQvUnMmvnVpYAxum62igjhTY9odYZn7mtBPNU57",
  "key8": "64NAHTycff1476GoGtVsgbSeyo1hYg7Qe9ZudkzaUF4QsTxnWoJovT1JnGMtXdx4viis7LA5e1GkWDQFzq8NRQ2L",
  "key9": "W7jBXtz2q4tgg1wfCGeHU2F9qPKQ9cbCWMAiyUWmM2aYu5ANXCUmqLg9fBrxiVLBQomjch52B8szfao7ApXBcVd",
  "key10": "5Cxpv4H2YTEmkVUVoQmgdzY1G7BrzgVHEaxDvWAEGmcqVzE7MMtVmN12kKXgdph2KZJSLMh2kCXkzgN5tyDgNLJi",
  "key11": "3LSQEqWR2mxNwKuJaSoRgfrPkPyYYyWSS5tag85ym5ZNPSCWtJxCSscToux63kqTYCLtU9YXrV6Cv4aXjVeFCHVR",
  "key12": "2Ug38Tn77HBUn3865hiPxTjCY7z79yFThrwggnwZSRuorB4Gr2UiJXJnnokJnHoLUQjot4mjjmzEHyQmTfWCzEqG",
  "key13": "4paeHmLCpd7bMVCKirJmV9yQhbRLFQXwN4YyLR6BoBtuEvwAnWmviSig5hBQnAsi8gM7LzbzNcavbzqK6gVfJ1Q7",
  "key14": "4oVC2ECR9yyPGWcZ8uwPMqszv1p2tYkAEWirJNzo38q1ds9xZK6VYP1135aZBuBWuyhbLYQQo2MBuqCgJNe2g4UP",
  "key15": "28ofnEKLfCMkMLkCtYxUR7mVATKKSrdRXogbsf3wFtGrnCKSorDFDEsPB8rDG64ad5CAEoNU3NXHr4ZV8kqZUDsu",
  "key16": "21EFh7tnkciN6pmmP5snbmLBW7j5RGXMwfVrTqALtSECFhRHb6wd6DZTQ8LEg3CXCRQE5HEM22p4rpkcmVQmTpju",
  "key17": "khN7U9tNtHSPKxGCxzvXFDPn731CMyZ7fgUPxvbA1rbhwwa3XojR4jRR3JGy7xVxqdwdmz1zt1QMe9D1rKch7yB",
  "key18": "3AydBaq9LgksVq4nV6GoYQWGT3zEDqx7u3GUvucVb3bJ99BMFknZKAXCs7UfGrHPLZbwobrH4KBEXkyaoNkuwG6v",
  "key19": "379j3VPuyipvoy8DaVBZZNbZeg7BwDDSKTx9BeVNyuGy1Gi1Y9GzWcNyQAsu8rqT6kep2GkYVp8KsUKvyfQtyv1P",
  "key20": "3TdgvRao71mBJkxcpGywSdKhqfhfNSXdG1jAz8aQW2TyRRqssiiXkSojwtzk9CooeVyWVNdsdK6PS23J5DcbH2MC",
  "key21": "4Mrnj3Ag8Vqct6ZpSapWR21v8yp32BWtk28QVyw1YBQ2FrfCVwCVRma6ycd77pT62WsUe49X8qfddESX335MPDrS",
  "key22": "3hyAi2hkKDCYJP6fVmD3oTR4omB5UkGHchHDKZPgGSBjFrusJ6k8L6zkn9LhWjHUgXR1EitBuQyZiGZpqiBPTiGj",
  "key23": "4FGrkFxrkRXiSKQMKdikpNkbTEBbvpxeLVKRMejeZR5KdW4AhfdeHB8tbKB91FfSmiB9qvgfcRrPWgU9Sn6jhbBg",
  "key24": "72YwuNU9e6he4tQ3enLgihtVKNz6dqLprge4umWQB3sR7Kp7QoAexiPVdQxFLM7UWD42JgUSPwHFJaxM3nchjns",
  "key25": "5LxjP5aphVrMxz4MNvZoSLigkCVro8pVh8smn55dYkdVjidiyKeQcF1L8rQNSmtQ6KcLWyVrR6k41LpXh2ndP1hv",
  "key26": "4NRBa4kmu81isAojTQFGRroz1RRrtHoc6F7b14YuGuKahiKBmLzyKmcmC5a14pn2aJCKPxfXmj66tNsUbSYC7EzW",
  "key27": "9rFxGFDbHcyvg1iTLjfYPvxnMWHXeinsUCr6VtdzQ2siyq7rw9LkFt7BKQNnuwNPwQT3Av1u4Es5hJHwybfNLhS",
  "key28": "46miWWtg4MTawa9VY4vLqpeRaCteTSrbZofBNdkYqstPo1LQQpr5ZGCXfxhrM4B6Tu8rww8oefPKjFfty4Bekf2e",
  "key29": "3phFBqeACb5MR6YfgrZ6Yrc4j8atwMG4WuRHk7yTfGVc6JBPG6i4JFwdZFBmjbpwoe7o26xDm4JC17wbY1S23KrV",
  "key30": "2qEuW7AqfBho5mnvWVy2LhyUkkaei6e8WVxhqyWJmdwCn5efM4KS8iBghyRbo9UZdHpRbo6zgXi4bNZ3s7tXAEiH",
  "key31": "4mLhsicRBpFXqcFiBuo8a98TXW9WNJrg61bUwosGYYin1RdGNAYws6Dmb4xQ7V5MUvYcjxWmPhwzLSmk6dfjDiZc",
  "key32": "38WHt7pgnJQyW79gGwEucjRpaJWyL5Jfwaf3xLfWZLh6LuCkVUwEPmZDHHjiPFwJ3geywg1HDNaAGNyrvfPC2DR",
  "key33": "4KQQfC8PB6eqasDzdf2QJg1Ego6V3JNvYB2ooVp7aQEKqbj2BDcpqeAwauqgkhUQ474UvL177jKtS1eoAtpxAEnc",
  "key34": "59NsLJ1CayBm4cAYyvK2XxpzQr2LPeRPuH3c61TfberunA9gQdzne7kbu9u1Twkiji1UwwYi4LU7LmAj2pbfzd7E",
  "key35": "4pZfRVRJDE7kCMc5fGqZpsnsWM4YyeiF5G8PTHjiWPeJXsBd1P21mm9GkTQku3qmpTE36Qi1mtVw83FqPs25B8oP"
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
