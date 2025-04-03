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
    "4CwZZxzLpSvHMRLy53RriJ4magEV8ZbA8YQCPeyqTixEr42SWPRUu2aTt2U53MKRAhywmKzt3fkRZQCNRPKSBSnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "91uhsJHgRRJ435PEp4KaWVf4ZHVnWQiCjxGcaNez9xrEGWicu7TbkGd3xNzKvB96fASgJVbs3kuVbLactcT8GAu",
  "key1": "5DnN2jrDMrX3s7rYNqXw8tmk1KAvwudYgE59a259kaEE7CZJbJdg69EvZ1dzFseiFdY6QW8UzMQaXXwDJowuFRuC",
  "key2": "3JFG3QGBX7NxKG48oynB656grnsSk3exooR5Espq9txZRiUquGSdTr6Xu4rruV5dx76sk81ffeG5JjdoaNBZVLam",
  "key3": "HRUk7a3Zp2xUS2tjJMfjE313kDaZQpDBYPJyBEB2f8nrgoBpHzC1ZPLxVjTD515dRBarucfoLtHXsBfEevrfhST",
  "key4": "26Bv4wwmKi9JGD6WWL64nLmjXdJqeWiDVWE3zxufRkQK6f6d3gwAL2KQWVT3cs1h23GLf4pyiAnVGWJqMirHafHv",
  "key5": "46MezJzaTZ4uTzVRrazp1wLpVwNqJSmAcEFiZha9cigcW25YdaoH1DP8WWnormJ5RNAtDGvheBLkS43mmpbKpSNC",
  "key6": "2BoFh7AdBJcgcw1TwqcUP9Rb8K5V3zvGAPnEJ4amQouxdGD2g5qNWJjJjL5U57MCseo2VuCZFbDoSG9NGhgEzdT9",
  "key7": "22sM5fv6A57P2t6vV6VXVFBX73vxohprygHEVPCiK3E6XaKR6Ag9TeSpv5D5iNYxvUH2vh7whSdqegHBvhin5uq1",
  "key8": "wxvXWhkpTmvCjYjR8TVdf1H3AHRA8Ks1jAt1mZJueVU8vJvq2zE8FbT9czS1tRVtMwok57fudaazFgWjUqf6TEp",
  "key9": "ZBi5yoB946ZiYnH96NoLEr5KrCKGCBy4tp1Z1ATeu6WdVqC2BHvap4ycjjw8XG8k4fdUyTQNwyebWG6GoBvRAyA",
  "key10": "3xDbWQn22YsY3hM3UGLk4u5uoNiNhVbAk7wLdSG8akuxNmHxuugCoM6SQcoXyqe2T9cnpCTfPTrDAkH9rjzMc8cZ",
  "key11": "4fZWGsnUGPK3uQiz2L36DZiArq5eT4byWrb5E7MXsnaXAVCQ3yT6ok3f3yq7WCHdQcxmsoaDmww8zhJiep6Zu8wU",
  "key12": "5HCniSvQ4DLQYr6DJZ719ELTxHuX6KFbWrzyaiZN7RWfAD453HRJ8aqfUBTtqzFnfP2REHAYik4DGMbpWnv5tuHm",
  "key13": "mXq5anG9P7KUs8Uu5NEYCPdhUoFuFLFiYzCZLYQBNZBVRW3TmbTMyT71ZYJfgAyKSy2q2PSpGTgN1PDoJgGG69y",
  "key14": "iDxYAvXAg1UdYZAAeNgj2RvzKgprY7XkDZ7gF1CZSMmokjWtzCDZ7u1SBmu46g1b2CAoetywsgFQZrYJ3z82M5y",
  "key15": "oXjXzcdGYm1cowo9fwxLSHt4SVpb3MrTRfiNyyPijTvKSg9s1vnBwA9kyf57DwvzExVKTr9pXs6CVzqjTJU8NEN",
  "key16": "2qFqLdF5xG9arLE8Y9EcYDbRAZTPR8ZrPwBFoQjH4nwvPhFgnoZHzhLSURUt8Q2XdvZaQAcZriCXmu3ip2qDji9a",
  "key17": "3b7WpBpw14QJKh2sdcBCJ4VTC2QfRyzq1e5bWi9cMTgMA62b8vsc2tnMHdgRRLk5KJXF5VZ3kScW6BPEsgE9rfch",
  "key18": "5hom9wLgaSFrJogCNoYkUxEt5cRx2ZNSGw7ser1qh6ETfjoVBv2fuHDdqZ2tnpQ4D6cVcYS6CwoEBtrES6hnU1Rk",
  "key19": "5efi4m8yJ7qaCsPZzFKwgx32q13MfjkE5z6Qk2dHqPxzF5KwEg1WoHA2SDunSEmpvTAerqSdckoM6AB7VF4YGxGM",
  "key20": "BmRgZSGZnHhfKZsG2CCeZJDb4NFQonttQcbDvhXKXtVGfgayQuQRL6nLWSReKFC1qQj4FDhGjfN6oxZwfHzgqAo",
  "key21": "3MKnCFQd8Y6VFRsrHN2cAN3VDf3gViDv55cNBrZG3XR8Hj9NY5cCEfj9GmDjjqRqpBRUzXubZzRCuJREyCBbBaB1",
  "key22": "3HFARCsfqtq5hAhpXYX9iftU6xquxqAH8zSDDXfcZZM7tUU5QiZQwbA7zG6krLmUbTifGfhLqyCBYfg9DrzUJT9N",
  "key23": "2ZaemUQ1giy8yPmE8KPw8WUK8cen4u32Lfae6ieqQwz5nWUj7xEaxhAdxsaLqX38TqFxjF5eqWcffCc2YPJ3sYNv",
  "key24": "4wHCS6u7aHmWLtqCgYEVCucMdYXZASaXxfQ1WLqEHcPNVZboQsmhregHdGZYd8SCgy8F26hKRqbpXJCDPaDHRq4p",
  "key25": "2ySEQdU7v8vpZayBzXjuyhr8bpEJVfA3oBep4zbw1ARnS2E9jXuuAXB1eaWkRdfeWj998wwHGKSrsaGVV7Pe4rpR",
  "key26": "NQ5pNPSg4iDmnNXEyksquczV5fkmnM8pUX8RecxPgYEnUcbLmxT7meqYZbvxGS91nGC1s9oE3NwP2k3jAg5oq31",
  "key27": "4M6UWhBNamrGgstT9XhAYyWZ6WX2VCmt1v87zpwbaXZrRKF6LBLB5d3HPKNtFUupDQyq2q9jRThTXm1UXW2umpk7",
  "key28": "37Rit8KGFj3rRVLt1uVo8EsqBD11Z2QvEikhotyST1gURXYtzW5zTWjBPy19EqSYMGHxTQ8VNsQaiy4tZCx47QmW",
  "key29": "2RizuLKnQqnbbcR7pFpEZRLK81nCoitm4XRdpEWHKpHqqjBPY8T5ShdTS7LDoBMWyHs3cwyNghrMwzuVeSTpRuDt",
  "key30": "35ntJrteXhn14bb3wBGa7KzFs91grg2zAsCKoNqQjSNbAPUNEThLS8bWwX5spZoWJJKi1royVUv8qaitv3aVKFKN",
  "key31": "65A6SQnzoCw4ESfruL2R7oqbaYvfjHfX2iqtnb7mhv8VhsXD52VjdCo3t4WkiToCqiadU4ShKqjQgHy2fTLTV7pk",
  "key32": "3YFRgYcKkbRWdFtfKYEWEAgZpJasCruKy4XzZJKNNPhVU9WbmTpQXMp7EXeiCHmXVfRaft7Wq6bhcdgPJrenA18p"
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
