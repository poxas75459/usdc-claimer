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
    "4mFnDksMLGCu4zKSsp3FfQzAKE413sbb5avjhybYoSgpXmnFbFHnWCgz8RfwUTApKHnvcumBS1kLRF6dxg6vGVS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26TtPBvstRC72Aitr5q4z8j5Fkg7S44JAwLnYfBjMBj3yxHzyfur49EizX8Lc5HEcFnh9vTtjSYQ8A5CfR1PvwY2",
  "key1": "57zwpP2gLQCaC14RoEz21hYnqEqMKvoesFRKkVZRdbyV75oifEpaFXpWqx4mSC6BJxQN8MtsNYYFyC1cf1GToBhx",
  "key2": "4b3qcFpEvazjQuMocYnuziQVsreacqK7NECPaAiNjYQphcLbkhW1Rjb7ZEnLrGHUsyuCMYNAfJ3oe8YsE92s4qfW",
  "key3": "pmuYPAAKa4fuP1HiJ4nXNjyFuFmaG9n2Y1bEBrw3rTjaZ1mF9fUEvPoajJC8x5WkSTHdC6Z9bJM52in6iNo6m8H",
  "key4": "59G8ymwrvkG1SqX6Ke2UzDWgKFjFUKCDnfXR4hYSEoc1MUWtQZh5LDLTi3N1MRdH5w5MJKDHB3aNsa2c4AfBAjBv",
  "key5": "4kcxyNdhqu9kKCMyncKUES5aZPriiYcWcyNKxzvAKGeu4L8PNcKN3amtj5sd7RsCRALrTUtK6UgxVGJRpqifhDbT",
  "key6": "4ewJMYbhUdGhExZM6WDEyLq7e7PWX25Ap4P5eYQaCNUQhufHa1Q79qBzkWMs6xiD92ptNaDHWBDHfK5mRtLEtUrw",
  "key7": "5xL4ojjMr4UymBUiYGe4kvHDrP7G7eoZK9Xn53N9MJQsfjCtonuA8dE6Ktin1nobmwBEZ38roBqoawbNb1sacmqe",
  "key8": "46LkMamPLxnqavm6cuGpMCpHk1X82roJjXtud9cxgHU5VucU7jvvJA7CAoPjCELYAfX9j4aspvo5oRbjbt9KtbZd",
  "key9": "LxnAQkSucmwqTQvV9x1dYnmCLKE4PbERRGPqhz4C3tkbmFPDdedFkCNPVxJJ34dEdMqZjCJn42eyKrvSJRGntYB",
  "key10": "buJzXRZsj8Lt4QayqamudnHzVgZXfeCiQhiRv6LqoHcHsqKXQbwA6egesVZMb56PkmUgWBYgrxgNg6S7CsDXEim",
  "key11": "3fDQ6WGnzmX2f1fc81NHXnT5AeZrfmZmNCvxXKKjpiWBySNmkwq58DzqGyU33fsnfLG8XhPCvU4Qb5WbBTLsVUTF",
  "key12": "45aEtfgBKV3viv8GKgfa44dv4iJmJnAt7CWRqBhsoTUM3iEMVnUEoLhubR7nfExPPJWZiWzDiwUMiTMAjJF3C26e",
  "key13": "2mqMQHpV37v6sm1TPjo58Nn1pD2PNSf5SBF8SmhzQnVyYDcwpTBSZuKdiMj7zVNzno9BwFswKkjz3KCu55diMsqt",
  "key14": "2yoTWLf47E85TwHNjmuBuTiF649kQ1ju7t71GSYMqECorBqNZnZZhhN1vVobqqJDn9kdjvzSSKZN51BGSvXK1P8Y",
  "key15": "66BmVY7AkTjb76YN5TcmeiyMiz91XuqHxHQ3ndzkGWmzA4d91w544UbQJuHZXaayh73TnwHN5WvMPUcmKMGr8YXd",
  "key16": "2BW4r4J44RVfzz6DSRpzDuKjgjX6RhGSKNd7tEYj7ivR9NL5gsbqeb1viirk2GXs1rA5uWhAxaFDrNrGF789r2af",
  "key17": "2BfenwcGJN9nLN4vghQYdwGwbuMp8aq3kiDor4h9feJET277pDC6FimCFkJEN68wVg2wZr7U4y4sfSxjfHcT7xka",
  "key18": "pq1QLKNmYka8LtiqRrThZAdCZ5nG5V9uccheCbQKth7Ue9mcHgBsVM2EK1HqDFY5xGr7a5U8MC3L3NNzx36arTt",
  "key19": "2Pk4NT1h4NwwCKime7jfSMMU7JcTnq3PHANrQh35DZ9t8avb5ZEZK1H9CqL3SCaTxpomRgTLAztdjcBwTvFcU2gN",
  "key20": "2cjbxuJ89AJCV97o9xoF5RGfbfg8xckJZP5GyxUkpn3JnGexkJUkaKPKVeZ3kz3ewaEFvvCdN8Bc1XLkk4JQKCGP",
  "key21": "2ZVKUre2q2NCMjNGvrePXyxn1HnMBXsfrBPiGiN3fK4fXWVJ2uP1ij1iCFNj5TddsCuPbSBXjxCjNGKunFuLJBkj",
  "key22": "5sojbuSUqE8Z94aKywGR1MZZzmoMK8rmg2Bg3Gz6gooNnCidWsGVQeSoQAPzmgnwfQdfoEPXHKkqAKUyaDUVk2Wc",
  "key23": "2ZQHx49GTHD8SPHbBRRYXVxPaz4coydyPX34fRMEueeySfj1jDhACuWrXfLqcM215BrduxXsQbM941sH5bmVbeMf",
  "key24": "4Fn6XznXAX6eH38fSq1UpFjyVnyaj4uWWXNVyXzL8BJHHuUb7tSfmvQLZDhUTiQQHJRzFfEBS52yfaGPAi7SgJU9",
  "key25": "5ox6uPNyGvABkqL3s9hyrQy6MrvWfjJxvqydGyMAYU9WsaEuPrALww5aVb5ezKChi52gdZfRd87fkcjQwxULvceq",
  "key26": "AHKFYkyPqLrwuQMiP9th5RUtU1UWXMmti9xA4ZQHfmNcX2nPwwrqH3YPCGcsLJyDMRMHLWY1f8xEpndzKYdN2fQ",
  "key27": "4i4mBpFLpLHmQmo1Q9XCct75VPspXVKcpqZoNwbJtnCCUJnVV5Be25QjYzK3YrYsRzk2pEeyaVmhZyVmHphNdQHJ",
  "key28": "3zbGRtRxTUUT5uN6DLJxzy9KT3fSqyxM8k1TGTz2ckTn5BXkTQkiw7qLb3XCGoWUo1ocHgH4ZQJaPmUe7TiVLH7s",
  "key29": "pTfSsCK3eUeSvH87BmFg1drNW6nYSZzWTfcsu8bt82o7Qx54xkQakKa7C8aZhaoYyNZQsuXjBaeC2D7wFMdGsaw",
  "key30": "eHJHUDRjNKUENio5mQwrDERSeo1mWPw1XeNpoBMrqnuF9wLs9NfH6rXTZZ4yKhD1w5tquk69S4hVcmDvZieByQM",
  "key31": "2JqqwPqVByLCSpoPaCFrvsQkoJkEfSQJYPbHXmBBmu2MqsBFNNWV7tCCCFeiiFZPF1a5JY9bGqUEEXVkzku6nL7P",
  "key32": "3pvBDCW7FejvUmBrcGvbfnnN1zQnMnBz3oHfarHNSGqEYEHcrmcssA7nxhVQCMctiu4DBYFo2awX1bY3okoBEuB9",
  "key33": "2WsvXv5ngYxFpBi9KW3mY1PC5GAQVNDHRX68T39F5HT2BdmsJdSqp5U6bZAEzjmJxphJ6xR2v4jc4PmisnWqH3ji",
  "key34": "84qw47Pn6yQsCVqNFsxaR4EMa4exwwfbjWvEtWZnKnZiZ86cfH1ZGBqTLEXE5JK5u5uEGBbBzesWBg2DVNuEJFo",
  "key35": "jZktco9eWShV7jnfb6mh8j6a9Hf4gdRpW9afKVZ7hyzZqCcG7Snc9VtnK5kdqepyvWnzF3LVnSfkcwarWZ6xj5T",
  "key36": "JNK2jxrtgzsM6ELUZkRcmtjBn7bkmnkptsRJCLbGTbH7ruRNcwTTJN58JH7fLFEcqanS61Si8t33pmRU941RPtg",
  "key37": "3GHYAFvyK8mNPVQHDYbrzNv51uLTEdx7uG6iBKQ7Vb419bUBHKDWBhLHaSV63Q2eMiZpDob6aRBjErz8x4Z2ycLV",
  "key38": "2qXZDQnENfzz21dNTuhsiobwtWWyvZbvyrnqzSfeCAPni1shCCL2TXhSx8zQGvGeoBCvPHnk8WqnGNP29TU3onjP",
  "key39": "kmLtvPL74SiuUHt8mGZhcYzvYUcxA8qwZEJBJmuijFsNzEtz9YbHp2PWW82SyQzTnY7ZVz4eHNqtfL1pvz1paqy",
  "key40": "4E45KjN2vKdw6rKKxEbx77vUypo8PkL3LkSV8ZE1Fr7YzUyxRm2yxJYkzanzDvPEvbAez4mhTofXceMLA7jBEMk2",
  "key41": "5V7DDpBQj5WnLKcWAG2CB9fuqMehm9bXRMmULELdBvgtpJS8GPDPtSWQmmm7Uit7oNA3hPFgkgP6HynHZ12WHrCN",
  "key42": "5nXWRobHBCuB3iSb8g87Lgorc2vV1URBL2iNx5WCaEuUmwQH1ebqnnsGf4tCUumXnXkjT1L5wBuoacNrtx13xgja",
  "key43": "4jVxpLb45P5k4XWvoiMZTVDeUzEtzB1kDZzri49aumkzSa1p14UZXe5yPxkXW9c2LydVZQy4fkzamsJz1SRqnakM"
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
