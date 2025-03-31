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
    "65Ma7CcdnF7CACiTvQXA7HHsTQ61W4JJqJ7JD1r7GyJF8YkuNwiDfu5GQ4Kr2UjfxHafAv1mLr2th3rsUHAvFjoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "488iTaFneFReaqcrW6v4PN9vYHHbLWsFT9AM222i7yMbFdn6pCPnASjKsfFMybbdsGTodptoDAxZo1Y5ZfgFPLVF",
  "key1": "5o5Lz3KWRxMeLjSz6JWoJnRDDhwP8SwfHG6vvQCmZNirWf9VBra5CyoF2oNiZK96c2XqvQhmQ6Q57G2NAo3kzGCF",
  "key2": "HYHSxeZexwgQQ1XYnnQdE3T9cWnCY49RtV2LmgnWLRyRdQxA2hEDzLgo91c7xArU9aTqzZXWLnw3M8E6tgmtQ1s",
  "key3": "3puNvswWrju1E2dL8Yvn2WK8DmjLFUMURkpyDqtXTcFHRHk7HqWzKf3CSjPAdtwiYaFxYAQGFPb4TAajexRtXpCL",
  "key4": "nEgC5JiY3osZWoeHrVsY2PYrcJpViaqRMzh3HKH9jboH4CoUrLtJo8dkBntTGin7gXRHNdY6iiq2rHshtzntWNv",
  "key5": "5vufpnaS1Do9hbkGy4ucA7qBhxja146XydrnDQoNssCte3w6F3Ydc1LY67s6tQE7oVdCV6WwMU3TPy5ee8JRZAYJ",
  "key6": "4erhFtHHcn1J5w3RK5AKk6kbHvyYpMFW7n4xHth88tyVV1XNZGiPLdTA6KyVpKR6vmrVtRLUwAJLftn2TZccPKfx",
  "key7": "2vz5n7pJkUnXYvTV7GdZntBaURM6BhtZ6KEkVmKk6aoYf8UzyoF6RKUsonnngsE1ZYtniNwCcyHqKMGFgN4twjCa",
  "key8": "5zFET8xyAR2niS6ak6N6g57CLM6NDox4sUQbeTSm7FBwrW4dzr7RMqeuAixGX8HbnP82TcZ1QnmVQPsBUgLnQJhq",
  "key9": "4vGzrocUhh3sMCnriffxc8zNuyqCzB6zRWR8m355SpQzjAKwV5tzxjAMf7E2NFdWzULtDmsmxkDYfWtdKkgCGox2",
  "key10": "4nLFhD25z7oonWsa651q7t6k3SjQHr6tL2PWJ5stoZiQU5H9AjxU9zsRieEJb1UwY6mMXwF5mTWJ1P15nn6nSPcD",
  "key11": "3Mv5iAJbUsFWoPt84p1wuFjjGpCxdT2h7i1orhX8Sga5ojv51Kw7f7tL3sySK4dLmM15tm8dZp49UJCdvLV1348u",
  "key12": "5fFoy7xkG8nfBENtG1GzMHGxvLuGSgnkHcY3rPgSnVj7msvBKKsh42SQc3rTHLZQw1xLwW7yJGadtkELiBs9Xmum",
  "key13": "27LMp345BseNrFcJMfPmkHRZtzXSeNCEKYewTNrcMHy1CyLdiQgfeWRjrVJa64Hi6gD5ZLx8k6AX2P4M9QGetGwS",
  "key14": "4sQECDDL4P6eYwTsGFFRUDHsQdB3UeH92XcD5EseJgjdGpgiUsyEN22FJGdYymzLqSQBmU87ZpJUjNhs5BvHZFtM",
  "key15": "4z1KrEXXwicCtcSdPjEmbXuB2zhECwrjPKRwL1ioXqVchBUL6bjLRenwyKQ5TVodLyTnedbbJxn9tVSwRXdWdX84",
  "key16": "4XF7HxrDaNyA17f2vEYMGUQDs3KFMbPEtHZ4ptDccUzBWZktkCqvSLr9ved9VV4zH1BJyQzKGK6SfyLYBq2ftLn4",
  "key17": "59tuSBHtrpNpGqgPmydHivjnDdT81jEKVRCqStoZYJvyepQUZcgDUHFRxgiJFS8p2AgGdsBXfKz2XXyzHTAmdamt",
  "key18": "4BWtsCHmpf6jqspKQxMgSuYJuA3gUhQJsgaSo4WRWiESq1ZMGSe9YqFcTTT7kTrNdDDrdt4VR7rK8cnEWwNx7FUB",
  "key19": "459QMFDhtD7Jyg57vj7Bh1eCBUJwdkTc1nFUWCwKkkczWCfmuf9iFjL7ovv8HjGsFg8rDJWq3cwpnTaMRxCZpyKr",
  "key20": "3WDMmcCptvQZvwFdkYdzCk88K6nzNh2ub6Y38J9KQfSjc7JkuQ21TjhbvfN3KDBwg5Mf4G3VUUidkfjxpPbAtuSB",
  "key21": "24UQMngBRipStk1y1badRqQZyk3bgkGEx61odjTqDx7j2KWNNpBw7RVimwhqCBWeTyw3kD8mooTQKwBnhJfaV5WN",
  "key22": "4pfqQLoMe3RJWMi9gW4yjUXfZXNaTtnw5vWtq5WX7R3BRR4FtVGS98MtHricNW4zjVsRev7PcbYKjQ1bVtTKTPKb",
  "key23": "4S2qpvx2AFaL26BLqEcgnzaN8ijs5FRrZ8z49CGR3rsm8HtLV7LzUY1qCfUypbgrpor4v1WmhvyDhmGEhseig37K",
  "key24": "42yQMw9Vf5ZKr8akdHUavk21SWzAaEbmuv25cWabHvaYsvSA2YZ4VNk9mBfuDm7ecfbebxn7R4vaHqz3ruXeQMLN",
  "key25": "AjdwF7kArQjY7asY3QhWgTwofTg1DAdYqMQkckhtXyyowvwVWJfVmxpjLCsHp4wNrdG5biyQ6Bc9AkLnyipKU6W",
  "key26": "NgQBoYS1yhFj75P4mFdvqAVBNsm9gqPQViGjA9V3aUxqSJYwCScwAgShnF46QcAM6UB3xuVoCpXxmu6rCt9vzS4",
  "key27": "5YodAdf2ddrRqmtmUdBw3fKMHUpP5koF8Gd5gcVUUx4QiYJgs2PtEbi2iN7SMc1ZbKm2tW3Anai1zRhmCiiPxsR9",
  "key28": "36omEb4ENenwLKTcztYJiAa23QWTAReroUeqvfSr2sMBMv2bQUBkz7c2gi7dkEtWWnZF5MEPLQHRnbFtU2x1Bpso",
  "key29": "b4KJLPc4TZeu5MwnzrGMDH8FmtVEzXYvtztPNocuyT6S2xPD89Fwz6mzAovkHFirYnpUZ8VSzALxuuZ4eFLYkBh",
  "key30": "3e16c9NrAxfqnoZWxGfhKkq9LqDDB5Yzhi66wJjS7DBdzT3FgwmYJppFYRjnxi7DLLQ9iHrHxLnjcNrMpuGATPVS",
  "key31": "446bHrrB8hgjr7sKG3sEWwRkdYjdRQhSjvP6HuewbpW6ZrYE7XW9qJtEgKZTyc9Vp8tDQu6bXnxUzrxog1YSyUuH",
  "key32": "2JJsN8DcxqhcfhaDhnjPU8ggfxtrx9sX4zXVb77A1uhXGmL3xWmzTLQeQZC4phj3fyTdLwK14bAVm75qQXvs13RZ",
  "key33": "5YfdSVkEGEHLvwkMtrcWd6tNCr72XzWacmYWvpDxjiXMc7jHh4j3VddJCWXcxqERu89p53SYWQ71qNCgdcJpTPth",
  "key34": "57pJk5CR7nsJiKynpagL31Ngzw4FnNyJJZDNmr4o6CAmQndMZ3j3VKLSQxh1nutoggHspeLxCLr9CtuAp6eAConA",
  "key35": "26YMYZkuSXTi5XQtmfT4r4EKWiqLU9Y78jH1hC45ycWJsGZTCbHfxnS1MhavJo51cJ23hMSDT9Ztb7XPf4XpNQe8",
  "key36": "F7gypFA3x54qbNjbtQc6Jy8mZYMNjn1hjJ4iA9bYEhfD7LkWMLzoGeckPpvHeVLqbggF172hQVnjFCiR6VHFc1R",
  "key37": "3vwy8YN1Du9KxFiTtScPyn99cCYLa6SGqxGtzLAWYXfGmzUfvTRDRT6nSf4DJNwYQoVRsXpn1qn14baGpZ2ngRZe",
  "key38": "KVeRuggLtj7mJtRHaSRekyVgpTnCsfdX2jWLy7fm8qrX62mVVy7H257AoffHPHdirjeqWpWyd7nt4UZ7K5wucsF",
  "key39": "22R4xRmxbc8z8vQK6NJoEKY8F7GPUKwavjJob2yZDazujUJq3y1LMchAbsoxKAPbWLkLZW68ZsvbqC5jupiBUpAq",
  "key40": "27QqfDmrGeH7xoaDzitQ7RBF3W6VtYdzuhabfwzLJhn537oawVjBdqFjSLcryjTuyA2nhA5qRSBDFiQTGje8dzqe"
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
