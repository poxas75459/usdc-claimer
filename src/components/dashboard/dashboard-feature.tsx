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
    "2SR8yYjC99kAK78ANAd6jvN1B3cUpY7Tnb5NMd6Nb3Fv3TzXsC2aHG25NAdqs5EVNVzAATKz7pUg8vVy7ZqtokZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NXCwYbeAPgBoVEEQhCEFdvcTcYwjdZfWuHBYebdWSbxtEbNP255kHhhud7UXQGtwYqgmwphdU2mJ34M8XH2wSDQ",
  "key1": "3d4p4vTyL2feYmay6UsrgxbpUDMXH8r5cMY65zWbRTWZ5J15vPWtqdNiHJ7JxxTEgMfXttzhyAdGdPMSWgjNVCQz",
  "key2": "64yc8kkR8StfKVDXu9wubyJJyU6pKUdC5FxtHNukfZYaprqNjqDeeU81q422i3UnngwqJBXCxNEyVjGuvzR7iBom",
  "key3": "4D4s4E4jcXEAJ7mtTqhinPWDZVrUQHwpYrjm9VGXyvnahuMXfzzLXHphC4iYombmezx1BtDBbZbBh5uWnscAmkvW",
  "key4": "PLWFvr5dEhb7AVafjr7HtLm33x9YKpoCKnegURgUWHv68RnHVEiyw6PJ5Nst37XJJX8vX5ofr3J7skwRpHrTHsm",
  "key5": "5D5vVMt8sG6GZDz1dsMo7hb8ttD5rdK7xMVXfYYp1EpCbtPJdh8TE8qkEnt92gqPN5DzwzmEpreFdZXKTjiSzgvT",
  "key6": "4QK2YK57YMjAKDKNp47RPD67gAxFExJhp9U97G261sHfAVEtmSxoVUoUyFFyxCSHUFQ1TwrixrDdWWa4wTrDbCk",
  "key7": "3kJf9eAde9DRNJPZxGfF6PUB2nhCoNh5DRqcJp2oLjfPXUtsBLLwPJKVe3zcs91gKvKPkYw5hNZMKqRJmgmwDvoR",
  "key8": "4EUJ3bb2DRtJQhXHoLCqkCQcYYCpSe9nGrbBTukuDEN2b8TsjWB3WUnpELTbfcrGKPbxRiMD7U3SUBwRpeVrMVWv",
  "key9": "2QtxiDmVjhoVT6J5wmVwi8giJRANz6nzdECedsdRz9yt2MCFSuFsXUwWgkPi1r6EEeeXvNP3QD2PF7XrdLwgsh3N",
  "key10": "5kLdZ8HwdTBvnom4ydZKwA7WEEub7rWyD5L8XEP5AAbPdFdxzhj9HwhsHwmqYwWZA5JpxYKTwFDNxqAh9CPSPqq4",
  "key11": "39qghAdPaNPXGc4pytssMWfGf6CLvxsQ2unzQvjLDKGuXTYUWpzwcDvCT2Zy4cwVLcootiCFdCaLv2oL6FELheXd",
  "key12": "5BLGaDwEfnTmDknhFJmLsqrEJqg7hA6av7iLik38yAhmqMi7TzLoNjKzyBev2FG1fC5B4UkTFd5PbiK9snw9Qv5V",
  "key13": "49gyWjrLR9FLncbepzmfcLzLj4qpCMCJPoyKfrbGrVVKJFf8h5hMe27uC9B1XJBKkiBN2NbpoBv3BkhNLRNjxAuF",
  "key14": "5ZetC3gwQwnUqTb9zanY7EYxnGEjMgv3oNXxK1ka14gTGsBdSXC61mHVrFMWiQXiJkvWD8vs2bWQEZjeP6SjNmkM",
  "key15": "2niMA81QBHMFFh8ygcyeJDXmrbBkKoP7458JhkwLr9qD76pVqmEKJPwfdNiuqNY5eWaAyduXGU65sjSUqgL2aBJn",
  "key16": "4YgkFNmHjf15cafuBfVeW7g6JSY6Z8Tt88wfuuQARcQT3q7knXi5KDNuTmmyAy2jsj7uhrrpPAHoHxRbNMhsGYD1",
  "key17": "2kQEjSSWyNjboLKAnxRcDXtbEMLmtqjP9A9DbfDa5Nj1K7Rnv3kPiCFMHKXuw8CUo34f75NJ1LPuWxDVz1ci3WA2",
  "key18": "yehwjrqQwfA14gcuJnwD6ZZnch31mZxrZkKgs9C9BRU5t6RHbq1t211biEAinZrPzSsGz2eXGvwsr7HhZH3WvJq",
  "key19": "3S53N6hFyV7tfcuZCBbutBrWwZGgxi532tCnj8CkXQ3gQU1dbhZzx5iFGmsefQqjvtrfufoTs2cTTAw3tsqZuvS8",
  "key20": "4wfwKN45YMU9rEmWaj13Kg1Fhrmkiy84kEp9Nybwb8PwDizhAmxmwN6wX6TFj23H6naTZhrUUjc2DEASJq5oD9cR",
  "key21": "4MYEwhnvCyaj3JVyZxNpB6FWtmg4kQx5CmhaSca2Ck5EcR4fDCjbUCsmxDtS7Fn3yGAZEUPN6Z9R7hvS3YarBJB1",
  "key22": "MnzkYPxC27hULX7N3AN8d1RQoJqB3dubxY7LWJKiXtiH1JbWYaeJH9U99TgWLLpqPXf3RiGF1uvqFJJKY3HNvCQ",
  "key23": "2ARLmUghKXxqQPqeff8UHcdKJaeMsbTGkeUnvuNzMncJWP8rNdxuzKtf4VtBUoXfHvyHpMNnM9FJJoP1HeLzkzPP",
  "key24": "2BskvDKpuPRaCEbrzPzD48WhN57PagjRBD2Y94aqNNKJJVwW7tf88dCQsbkQZEBucV6EMJjU213Mq12mQe7oVobF",
  "key25": "5XNy6jghf1phZ1Ew2QPBxd2uX2xeSc7tzRJBBa9MKKeiQz1oAq5RK23tkC86jRy4C4gbAScRZL2xv7PSSLR1e7Jn",
  "key26": "4bhNXhuLEx7mLuKmuxw7Qc8Y6uYFygg7QUk5Z5zVk9RvJVanKoKD17tbFwoQUEY9skVY8jQcCGNdc5yt1MtKSceQ",
  "key27": "gNS2uSMUskMtqtwph94AReu9muLdwup1i6uhQ9A4qQBmsmoND78468ky91KvBvz8YyspmtKdNzmQ7Kai9YAjHBw",
  "key28": "2zfKqPfP7Dhx8rKQoRGwamhAHaBA3ubg216XudmGiKSgVRMjk63nTP9zYZewv1gR4VJrjqVsWhE6ti4dmJNb24YV",
  "key29": "2PM9aFKryZ9FUQWhGPLnXqXqM2Egk9vrFsELtyDhHZ6tKunyXN2TJQSbufPLq9RdsJo56GwFzTUuyfXdoyUoeSpj",
  "key30": "27KoosorR7ce7tUPXNGm4TLZENM17AiVDnTTeWevheeUuiEWR1HmkFkxdGugg8PNXkuBqb1kaubR8eavx2SZ1k9G",
  "key31": "EEs6DybS88nK9Z9n73L4zxtMX14V9RLRPDANDZHRwNMrmMJJkpcHPDwxCSBjExb4k3wZkWZctGJTgbpVpwqpjFj",
  "key32": "297Nqve6usFAynBS3PJw8cXWrcCZiqk3dpLKP9TPShCHYYjiD24LUaNWTa6oWTh268RYpBfRJiWdGpaSY9kz4AJc",
  "key33": "4nGrWrbeoW25iCyp22S4SLoKuv2Ws6gcAR1XTroGt8jfDar3wFUsiWtHJNZmJnwVqwhzoGzoBEwM49KMBBzaoRmA"
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
