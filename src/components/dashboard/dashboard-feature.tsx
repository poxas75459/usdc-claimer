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
    "4fJBKVY6zLEFpEtfpVFcSJnzQ3dBhHaj4MKtt6Xhp6jpbbUMMCY8qGkkHHg5u8P31vCrS8vRD6CxDKR6vr34QHzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ff9CGWsuM164XcYmjkQhaBQ99NABhcHzih2govMCDKXJyFb3zZNRgWULWzi41i9KxqtHYFmymtsENT1ANvgfEqD",
  "key1": "53U4WibA6ZJMbPJGEs1ueSjqxod1ukcgdVLeHssWhyxKiKgxuvmkGtwd7BhP6DmoZs4QifRGuVjuAfxrtpwvhhoG",
  "key2": "3n9SC5bLxen14jFkjJrc9rUi55qfe5QEnsVLn4Z6UcHUctEvuWGanDZ9GiKeScYMKyE8CuT759W5infZgQkBqBxv",
  "key3": "249ZQCV5rwCZcGvAHogeeA9ZMk85jkjL3fEopZGfyBCSEcjs2AXreZQXD5BhU6RXsHVpKCJUJsk9JAA6TVjaMJxL",
  "key4": "3R2K4Uh8c4E9NeHnmCEsXaCtztPeQ6wLN6wGVLcu8rX32CLHNwXK6JPUdzq9VoQSjAUuHTE4JVQwJMboZm5EitbN",
  "key5": "XB787s1QASjf92A8yPHzDk4LniCcyGhqaBtTPsfWhp2DzBgXdtEvQ5noQbVcQq2pZ7Eg1tx8vQ1c1BPJ83VA2pF",
  "key6": "uw2hixVhPgpAF5LQ3j4Yzc4VvJ8XtdV9Q9hDKA2GEeUiaR2LYzep3JKs1TsFd7mT5o5Fceh1rTF2Mb1yJQ2HBFg",
  "key7": "4heiGwqURxUQP5sLh5QdV5yaJ8gPnXaDDJ7ScwmhcLRmCQwMY8FASAcokWKbwHbT3BD54vD7NxWj3YE4ek8Gug5a",
  "key8": "5BiCa9DDWFqEY9zKmkQTtLLVxch7fehuTdBaceNVTxSo5XaxB9NrEghG8mQyXFMmMSPQohUFrChHH8LRtEDuHikf",
  "key9": "32h6Kcr3fA1neu8rWQue5h6FM1vHRbs1JhpYAwCQByeefZ744mokqmtwgTNUCqSXTTDGmZnvrrxaDzHWocATvu6r",
  "key10": "5mNGhFDgyqe8t7VRJBRM2mmYUTAMo66JYxYo4Q4WGV9tvsYuEuJPTDqVNRFvnbHNR2Eujat4fkDWaEjX67MYcGpB",
  "key11": "37EozCW77GWRJuk3nR6edkYHTK5JJytYLDo78VjiEx6rCu6SD9jkAkZPqb4jzC3kQrfE7mB8USLUjWvdmsqdwD15",
  "key12": "2jUdcdcbbnEGjizK8xFN8rq8jFGmuXWHRJ4hqv2eM2RNgsbz2NkHuy6yq1gneWHJJUCSznSQ9uoPwcfBfzPcLbdX",
  "key13": "48YVHdu51cAmMZmmsuPGGbZMxedr7ZHbqwFmmuK4KU4Vxi2XFhqnZgYBCstkRbETvu2pAiu9tzark2ppftNbZ8WP",
  "key14": "4Er1drVm3cPdK4iMJqtPgd31fXH8SQs2HMSAdydQw8jY2VjXFUfJSftPTTr8GCpzMZJaTQFkK6XKkGKvGHQ5it2G",
  "key15": "34VCjD6mxS1wfreXNyPnQnokY1CUdDKE8U4s6uywxTLhwae6a8joAxJ3ARfVKE6cEe9PaEqcGYX8HwPhN1gXTSdX",
  "key16": "4cZDDX6JJ7qQf354JTrgkVtu5cGpP3tfNbex3DrNAdgkk8VQ4gx42MuooNW5ixvedwSVCa4gsoPktYEh4VBWpyT8",
  "key17": "4zNDnPB9JSke7LRqekgYo3Dm2cATTNYsV5L846RJX4UZPe8Vajbzy56VmcVT4MezJoPa6hDAuEE1k8UGLTewSYQj",
  "key18": "2vHhFGDd2buiXdn4v4vPyGrLTNeixekGYfBK5tqnKGefzWH2ojafNiVv4Km5fwuHE2mS9VXUVLwvja9KMTEH7Tr6",
  "key19": "36xSf5ZA25iYQ2nsus8SvRrxAkpTPrGkTMJ4HfboJRKdbwbdhTeTKsdX9TMKr7w5ZYvetwNjTKpXM8Y535wvzRRU",
  "key20": "5YpU4AiEUtAxcbcRDZHvsZJV34AV9iyNS4wEsMNuxDmMu58h7WPpczbkD37zncMXaaG7w7qm8M7zZMSixfyVW3PV",
  "key21": "4DryDZajFDssnj8G6KieEoDPo2iZnv6vDLXkRHrH5afsaqZ78AUes1svCF3eyyUFFmJxK4mz5Tipq7SChvmJzMPT",
  "key22": "2KPoYvUAzmtGU5pF2C7mLHszx5x9awmFcfmwDK2Jun8yUL6no5rgYKejcLN4b1Vne9JQJDuk3KbVwya7cxdLiVVa",
  "key23": "5TiwuMdu1vUjdPjij7Vp9PqxSTYJrFSc8BjUGhKBfiy2GghmMyPwQ4Cf3vbMhF6CnwmUYUTTK5PDEPNY6WexUySu",
  "key24": "3dz1topXjiahvd5m3ZE391nrLNmsMexkuJMtiZvp9CfRYDBpTQTpizTGtXtXgGt3kiQvH67AFbMWuoqe4p1xwMR7",
  "key25": "5NEP1XUkq3EKTC2HqkGUWPQWbtaMZaN2ZFpA5nC9yopjAJTRgKNoTJbLbwW9ZCgpCC5pAohRyNepDG27y6DCKe3s",
  "key26": "2D1ryq8vzT1Zyou5VJX2pUckefRTd7TEmg3PUbKLpp2RqWgsasMkatR86kEqoWUWc48dntYef2nYgGYy7QmRawfM",
  "key27": "2zCMisfWoKDi8Rx1ocyT9n5e8CqxN1CEatxy2hw9UEktVNVfE8sSC4LU8RvLtXmGiwuW4is5Ey88SJQeSADogJwC",
  "key28": "4VimGmUf5Re3VGDavSpjQJqtigbJQwA1tkGQUB9CQFZSdP2Jk4KEkYQKJyuPS8bGxDvsNWictaPDvUbnNm9mFszi",
  "key29": "4K9LiaefFtsM6Cg5s5yg6HQU6YuVGGPDbccmwnCDb7ER4ReH2DbLsZRD5FXpN8am1reAjCFP7VQ5KahytvBAc3em"
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
