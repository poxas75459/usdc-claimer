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
    "QBgqhUC6JSadnYPBUY8cuAY1t3TUsn1Svp7hvY1BLikDnFnFVE3wHJsQz31fFma2vKuHG7p1i9oz4eEqtsAgKFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q7z1vkTdo16wYdzh2Tc683vUVqQG8shvnVpEstFNTw9DxeyKc4QkrYgaLj2xiUCEZ1L7niWUznytYqoo4pcMuE2",
  "key1": "S7wH89mJjNek6oCSdjRcoBJJsRTngUZqrnoA9oBhtdDf3dUb4MJDMDnYqDixU94K48H7iRHdh4BW5C4fU2rSib5",
  "key2": "2yUdWb63zh1E9w5uhtwwhE4j6xht1VuKXhQ5bYUyNPWYK1aBCm4GGyKPPsTMDGbteRhAkJvzHCpaeMZZVQcWiCbk",
  "key3": "2vwPjfgzZhtM1bqpUvwAho6GfhNixKjrPBiabX27YTzWc8nt5dd7EahGW12iwEwqsS1ywMXqVgLdnNaev9Vi2iFh",
  "key4": "ML2U3hxytgiwEkk9QeawC8EWCcBUnB4NwG9RgFyKu22BWcu1pfkdHuaruReWGwkjhweLde6UNshWjPsx8FiiVVQ",
  "key5": "3pjhTemAfNmBJGY3HxMEG9wEBToE2A5LvpCBiv1ZcQ8MS5hxK11Fkz1eMeZqLhYqyrGe8WtGY8QNEe2vsPzEQ1wC",
  "key6": "3fUreL6LBeFBCEuduzcCQu3b48MuV2fYKDk8z42ATdaSx4c8V49aZLkvhmfQVy6G8KMHsCxcz6m4RysnbDe6KwuJ",
  "key7": "4D3JGsvNrbrCosqQatR4MRhz6wc6d2Zz3JUAuP2MWmdta5e1LAGL3vo2ZGqY5snxJqjda4Y2qTZb7utHph6XsA2E",
  "key8": "5LF3B6EdCTVbabBA5iReTpgpUPZ5gYBg2uXy5AtsxaiHAGNQB3qwiGLGRS2TmEDdYQbn6CjHthrLxJac61NnhTrL",
  "key9": "2NsUqz3KCj1SFWufGkKEGfxS5UR2MdhCL7YRQVQQpejG1uYqnWPtpdLBsz6dzNQ1bTFyUPXM2tCc8RgrjjvsbYvG",
  "key10": "5QJedTUd4tJrm1RtXd9fpcBELw7JEFjtm3KTFu17C1tVHRmiQ7jr6ZKJaR4NYeZFpZV7RhwRyH2CcQGWR4u51ZrL",
  "key11": "5cMrNLpKcSVeh6CxqUxDArkZVPYqQuNR2kF1x2cVcWan5p9QYCnh2cw45jWnMz2yLGj5cxPRBZ1dE77it5AN1wZi",
  "key12": "62g4m3WJFxS2NfaEnxF7HKHzCgsZzUKhA4kXjTWNocAHYVoq2vZWTbXpJF7SEPztkERtkUFJdfBvzrMXzgoZodbX",
  "key13": "oCjLyNoPduyhSU26tRCJ7n9MaWeh8XHoN7zZXwSHgCi3CD3hvQiSLdJQufg9Pb26s9mqS6kLJM5PaKepp7BCDN3",
  "key14": "hPciQSV2MvhPenwinnYic27tYJZqX6f9TbZepyRNN4E8AS6KUxmUD78cFHMG9EYdvRBM2NxnWzgua3hx45WZCmY",
  "key15": "4BAWFSyxEHhn2vp1JrkvxfjeQwUZ6PqS92xeBb5rzSoSy8TzBxaiXMsvj68hCp7TWS2fwaW3yE3hESLSGYAFUia6",
  "key16": "53hx8Kmd7ajGKgYZEms9JNDbST22FJ282LYc5Rw6AW3CfJgRF4PxnKty6D4AJAq2NDqwNd2du3yD7AJHEg44ptuG",
  "key17": "GWdDw9eAWJnZU4tMuxnERcC2argbV6Sax6knLjEwALWt1W2nVS3pWUS2kLFBfT2quDqf4cbAnYLsn5nB6BF44sa",
  "key18": "2bmyU3D3BcZ6eRVHHeFMDujzvyPdFg85qtFgi6fkQtVKWjycwzZt9Jr9uL7hagGEGKUtmuuqkvU1YMvMdfopKRGg",
  "key19": "3xFyk58qkZKdwPXxzhmjEQPvkbeXE3BCNv1znM6wHDaK8PsWh2ThG9xoHMiGvGQteGq7GpzwCDHxvjCqZoPhb8Js",
  "key20": "3jmsMTrwQvQZZ71CfGiLa3pFHzkx87necWogxUvRDDDF5cgJpBhk7ZGhmEyoWGWcDNR9qnCDBruFnzzTBcFueFw5",
  "key21": "5VhfGqnRjKZpwW6CxdToLkpFyJJ51JfvmKqChQip3oUxJKa3YQF8diZZA7izV4hShRvBUQMpRNPuKLYXGxMTxdkQ",
  "key22": "Y6cCCoyvvT5fFATosmU548NFVGdwjo6X5Xiv6EE6Vrm67EpzcpCG6stLH3HPZ8QSAqGsB2HXFFakX82UvCyptbW",
  "key23": "49S1tduj4qoEQ5WEKAkdP4mJ5wBeDfhVEzFNASw5XGoUtFuhMHXU1jazb6bVrnRnfFkUocjQ1k3jQXvj9xv4uyYQ",
  "key24": "51KHCDaukYcxFkgrtp1unT4spvidxgSoz2y4VS4hFyDAXxCNbx9SwvowKTUASwKmo5ZgF9EN3cnZr5hVefcJHDd5",
  "key25": "3aFin2kiS377tqU8TTzri69k21rmCy9iqU6Z8AC4SuyeYcyBVMdcn5HWsM1t4xUBovjfa3DFfpJMVKGCJh45LvG8",
  "key26": "4ePbDSaGBXQdKAtYbtYuomsDNz4j593FNxyXf6DPvoyxgjuxdSiZSCJzHqPYcTAWzNNJRdFyvPagKxqHE8fwY6rm",
  "key27": "3ibm9XVt3EbUbaoWtfqYA1AbEewmZtsnLUKtynGb2VB2njZWc81bm6pqrspNXAKhxSaBPRefN4y2u5Hjctmetgq",
  "key28": "yYZiQ3KmYmVwdJVJKFoX7XbMdHTw2YmZKhXMSNt3d6kWpP57jbhXC5gkKWvsPX7BwqFBmrW3Jxt818QFtjG451h",
  "key29": "4kSMnwREocaqQiLYd21rcid7uuYx38BJhXPpTcZNgBcbpreXBJgAAnWQ1N4a6JZ64ZkHxijjRpaFaJwTgk6DqGRh",
  "key30": "5XwBQBiiZXwNqRSimcWa1yFvysHDdfunWLo4qdJphEWF1VtgJZFD4Kh2oKL7w6smuc2LfmE5Lmuufy3CAKziUstN",
  "key31": "3617Mjb3LRb44XTTCbcynGyvQUbroCKkKfaRLBV424H7GSM2Dz2M65GpckvYmN38sQBYaXp9HYQsM6rBV4H1JcRV",
  "key32": "5EHQtek6Lm6ffmf4Wmnmi5HPHS5HVKNGV2Cq3jAwN24pfCrVVnpHmzjPsGfL1263mcRSpoWqZ3yxKXS4U2VxvU8V",
  "key33": "Zb87CgSE1MKP4wfncZfK3eMAvJZ2vquWaj6WfLpjQNYP9hFXp1Pvdxt9TRVPzXLY7jRbGk2mN6Z9HPj2TGJUSWT",
  "key34": "oj7n6b1aBDU8DMPEpGSosTAJBxBGDqCix4VK11JhBr9xRuutTnwqhC917ZYYjYdrmFAQqweBCBGh2hZAjtXoJyJ",
  "key35": "4MQiBSM6HKrxknkpp59CzP9nMVAvht98de27Fa2w4CCTH5atx4uCCuWR9jtMakF8CMxsQWA6R9oFhNqu9XjkeMkh",
  "key36": "312PrdsfTE5FKXemaVYwiWmpwGDrbuTEdtBZuE8DdNDmp3aRjkR4Q6Pke1yyfkvbRdrypj1YBdXMHziHYfETAXJv",
  "key37": "43vNxdu9PqfhW2B81xmKJ52yjMcZfAEmTtPRSmi2Ts9UhB3kDhcVAQ7MqC2JYNq5Z4jQ2jT9NJvDsPsStHr8QWV",
  "key38": "vBpJaVaVt3dnNQoav1iJJ8kotvpoDhvfFctbjV4i8o4aQH37AQB9ybnKrWKALdPJFPadoS2hZ4aehNsmfiUSeS8",
  "key39": "3UiZFb89tog7yzVJLGaH5FyZG3fU17YRxJqoYuooXcxf5jShcRB1QwDg3TeDWmX6qmkvfSXeQMsertVsdkRTcxN3",
  "key40": "3aZGpmuHinkvEe5QoSdRFfciR4kWvAL7D5NqNfdcQBKKavmhhj9JkSMc2fuFjfxKDVib11N7d97C58Lxy8hRxNbs",
  "key41": "3aVpnAcTVSep3UtjGguWidXNkmhvd2HduLRZ7hqFng5Dhci4ezDv7Nf8iHiQpQKRWuNnwnXLdyT3S6pAJNPybW7t",
  "key42": "672mduN6M58cdc1E9P7egmUKkNVDLfw79yWHAb2e9FVT7kkPkPzGDfovRhCKmXikAi6GNH9LKuw9YcuywXYekZuD",
  "key43": "52ceVb8pdaEC9q1tPMbCxLrkTSCikhGYXDP83uqtC5MufKhCAQr6s3koR7vantKDGQkx2Kdr5kHavd1nna7AXdiR",
  "key44": "2LcW9sogQfcHqWRds35PZ26miJrsFJ7mUo7CSTLxghPfmfA1mxov7yyvHxzVh4CkVkqrmQueDErA7AVV5Wj654Lq",
  "key45": "2zVnTt7idijiW4EWPc76xP79SEBdtzJHU8p5CbyUTENWshkNy8Z6Q4nAQUkVRqNeH5Pcj9LjWBvdrqEhzr3seKfv"
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
