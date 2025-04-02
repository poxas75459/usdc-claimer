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
    "51XcBMvY6634V9td954m1sz995fiseZmed8Kvzi1YBjfTgdayrJkeR7LjS3BnhxrQHpxEL1NRB2RVd9v6e516g48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aqGbQsdoULH6uSwGWaYso4a4JAKJXa1sj4TooUDv9HsVZHChz9xzQuhCv7PFRx2sCR8xK7ka3ak2xq2Ny9xhrK4",
  "key1": "Rkqi5PaZ8jj4oK1JttJUEWk93jMGDb9X5oMDe91sHywBMMm5rwxrFErtoNr7kH1HyiKybetDPeAEMHdYdkJH2nm",
  "key2": "4bFs2YSPdNjEacRoLMTRRLRf7aCW7S5714jCUojnm5vxKvMqsYWG2v5XKYvBJGKCDRrR4fAtBzByzwxHszbdRhfx",
  "key3": "4Z8NBXK9DgsYb5ph3Bfkxp4qX5cKvH8egn21yCDpWoKYJHxQ48gTgGmDjtwbfXz7TFZ4NwpfvUkNFELwFTDn5TuA",
  "key4": "2MxgH3QSvSDLDqAHdCwyKLdYpgXyYhoSEmVHTYbfyM5U95QXLPi4KqDaaMi8zk9jJJCsMTqAQpN52NirqagnR5mS",
  "key5": "5iAVmN4fdFh1ki59JQviegSRAU59abXjFcrEVRCLAHHJp65dFTyAfZBfS6bjYuyQJXqLSSMwU7Aeo2zJ5th8G1cD",
  "key6": "27TM8pvZsZD8RvxBD57DKLLJV7dAXhhHHgrcXqugtY8PRkP6QAiUWBz1q5dPCGp69yWRDqRicB5UhDD8BY6xKzHr",
  "key7": "3ga6Uww3C73Mc5vabEFiufXBrLWzVMUnSmLf5uQQg4L1g8V2EB6kWBpB8TnThkr2zGB93Q76ortJ6P5fWyEiavQa",
  "key8": "5PvFY6NtKi9wE49XHcXsFxtXgytKu74U6fNR9eUvgWSkptWy2rStoN2absBD9diVN4JYf5D9roTq4vXoVjnYhU5N",
  "key9": "4da5TBeSPkeXJ8nZwdHgdqhfDcHQCVzvEcoumJmqwGaQcH2GfbjkBmKjMdcH5Riv239W4DjkCR7Y9DN5g7xuMsXR",
  "key10": "3cbFyrzNPheK7WQV8N4XVnhx7WJCbXvRkzpA1Gj9H9VwoeQdtCnHpiGTSYc7KrRcNKQ2WAPQn5CSU14Sg2Fswca1",
  "key11": "4w8sDmt8jAnpPSgo8AgF5GmD4cs28vSkdmY3d5v3RqxVF3TNmbPE1oVyj5DsDSRm9uakhAEjffT9f2KzNKkCcgxb",
  "key12": "2TJnnZfE7kVZReQwtoZ57YUGuhBgqk2UUUApn6FL8sUsDBJ2DUdy8t8ZareDouuU6gYviHRKYVTs1RKH5TF6yPjc",
  "key13": "66x21dN6tphBP7MCh5rdKkGbRydUcipJ8d3yHHDeUWy6fgnJKSsbcTCD43e78tT7ecHfPAUGLggQZyuCX1ULdcNL",
  "key14": "323GXLU2ju6TxSdpRm1dgDGfvKUYxEjKuPtTEu6c2cdP8i8y18tPBRE3j8NXdFrMYCTbY3YvwR2GvAdfJrS7EViv",
  "key15": "pGc2JaHHmJ834RnqSupa3yNGhJ3ny2uFNHUqRSFGxJiKn3k6YwPeQxkVW2NhDBFQZ3nqxxB3D3RUxxHdjGWPz8u",
  "key16": "4BHQPYTcPdzBhVwB92a7RXjf2Cg1TjekzmmivisypSXdnsq1E3XfuooSg7GivU61AGL6bscP9oYPKocLGpcGYRsa",
  "key17": "3642widquLTuZerUAZrLrdznmvHLSCzMqKz8sUWuP72j7HaEtXieKwRE5x7U1jc2ARs18iMWFsYd5C8NiUYfnmp6",
  "key18": "hX6syC4GcQEu8w6Z9TXTQRV7BGb87ppPUUp2VxocstHMfsft3WYTwp6WE3PH3gWF6DbEqJvCjCFmLbSNMHB8nUN",
  "key19": "3C2w9NxvKd8Royp8FpJ5kPEQaVH3JNsoh4vSWQvspp17czFFnnSy7nPuKJKkq1ymKonwYkNxJYZSWrRw1nEvwnrZ",
  "key20": "2gWcXDcJznb89QPnKSe37qvUrqZZvYTbP5LnK7Q8ANGKUuGeugQnnHZmAwQeHJyBT648YXSDPB1tmuQ45XKrnUA3",
  "key21": "4b8JmV3DApFbRoMgwX7sLqNUg9HWq8PZGQ6i9oCo4bjGUJx2jtmb369ZPUg1cPwgjazDGj9n4oT2kxeLqmHM8ifi",
  "key22": "3HSr3iSpZkbhLgsUTkMTXcoAA7ReFRWxq7eKwCbmKDwRXwcA7irCVY4BpupraaJakj3x9uABW2PmsrHNgrkUsU59",
  "key23": "377tgwUPQh6THqjCqBE3Q42LfSukwUCZnNXiQDfDDytnykQdthSdWkJbe8ZEacSU8a8unSqaeGxGipjzqNnbhJcW",
  "key24": "3sPXSedgfgLHu8qYAtULzGUXYLdNwFJtrL6oJD6iJXL1BZeAh1KUARMGTcw2qn9N4iUBiZizBwYotHBDKLESJAW3",
  "key25": "HiF2N1vtQbcJgG7JBYDasPe2RQo5qSFVCymHJyEnTCA5yf8YwQNoSAgLKbrNoA9uoZNcnvfUMQwZV4MurZVCrtW",
  "key26": "5daj6m3h3kVwuNpJUnA9Y6DRsY38N6vy1sbEcBjyC8QSeH9xpP94AHBoAcGqtxAJtiikZ1hSjrXXVzFJWHm6uWEq",
  "key27": "13i9Xj7quZ51JS9toEnbq4WTcvxbeApB8BWSLpKoYPBr2kVVf5MS2HP9bkoMZpKaThHVfzEZ85wp5RJJj2qV8qL",
  "key28": "QyAjRqTJ7og3AgnoeWp3o3RqEEUxx9G6XccYbWFVsR2u6F4ie9meBvy81WiJekU9eJ7jo2qaMnqFg3k7BhA77JD",
  "key29": "3FBeDU5FseYTo6ZF91JzEp1U9UANHxWGwxX8HbiDY8ggcAUKLZaNdjJGXdDgYro76BK4CQDifqSrktHFvmPBAK11",
  "key30": "4XZeGfAxTopaDugGTU1cKi8FqVMuf8N84smiYfz8R4Abnj6M5qbA4z8p67KGQLmzq3KC4xyTr2MaPuFmUxnt5gRd",
  "key31": "3JrwsgnzBH44qR8PAJZ1X8BGMYgjuBgqEZnFxmJnZi2rM3RvTbdxVr5Pm8g5Q51kmWoUXp8Ls9UC41p8Z6J2TNFm"
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
