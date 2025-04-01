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
    "uiy4PdG9QJ7uBUxCiLpyUkumuVFXqmRj5TUMx9UxDh79Z5L9wC3yWheheGYMLRYJbHFSdJw1iYWXqhpwJDJx98z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cv783Bcj5JSy1gsFccA7s6m5gC5HhbZeoNs5K4XE9C7MpM3Bge9U32zf3XHigiB4mu5ctgYeLuU4JreZGoJu3jG",
  "key1": "4oVTA92GAUusuFmV9oGeD2JvA44wMcrS4vK61RXhzTnJSmt9LeJbh9E2KS3VVePjdn6Fr12XeumzK63N8k3nSg8a",
  "key2": "as2cZYtQXbpXB9JMrZc2m9DdurnZWSm4kYXjCuLVYMCSbUFGcpKyRmoVDqT2XXEhRqsiLEnAKub7jAjsHENUXj8",
  "key3": "3sFU4CKGosj7Ngqiz64uHAtsTqx9XTrH1Sy5KsGHAjHqWiuuowzq5sh7B4Vxcn2kFXq7eowuwt38GPNkmrvzfHxW",
  "key4": "g6VjosA8f34XKFpCA8Xawhudhhu3ZBzfasM1xjrV7z2edbsZNxyMov7AYrFrTmPhxQBni831SJck8PMh9jSkCHN",
  "key5": "6EFAMLpP7YdfezxFf9HugCWDbDikM1YrxMPR6nfWYJg3Pir9FWQ67t7m7CVBAMcLYov84wMD1SWychFDPmLGMjT",
  "key6": "2esPCkdxdtMyMpCELKEkAWJkC8pBKw6WfukvTP6tk6eD9q1AmcAGqDehBJ9HBDPA3hd4B7kYSwE6CKi6GAa5NuHE",
  "key7": "2BfD42UhXYGxTxCLe6wHW65TC15S321etTGhX8FpRin1PjbEhHnnTZBuM1ntC2tZCVMxyhQDchmDK7aBRDidD97A",
  "key8": "2f4JWBd3699Avo12jdDWY3YtEDNTmErygcgshCPXdn9sNMgPVymH2oDVWLL98QqcsjHhoVagps4MCAgog6sj5QAB",
  "key9": "3kAgNUyRHtieFJYCEwp3dYoYcePNMRWZRkr2ouJo5poGbC1ohKLsGEXgp4ZK4gZbHeaF8Npi9gEJZmv3JWNmnSs1",
  "key10": "Fr7Z1ogmAmc2QG8zQjZpByESW3PntBjfSKhX1jxKxbFHFFq1R4Cm6NNMsg4rfRurRo6rFUgJBz4KJWGdT79JoJ4",
  "key11": "UmPYKYKQEtoi2XCLMcRUQAtMnMZkQzhMAkcmR4WS5X8d2pcbD1GJPVzHVsRK12bwWys4gwGh6MpNVkP4qcFVrn6",
  "key12": "3GvX22kfpHap16MS13UCrhxA9zB441Zx6RKoFq9MCD4dCqy3cReuyJun7hdnon5Gw3Jt4ythJcM3b1k33gUmjho5",
  "key13": "57GNhP6pStnWQEHeSJGp8y2BTyoC5oueCS8DdT2mqXUNxcDTRwNAgZiCFDvLhhSnSvQt1yr1koFsEKG8rCyFLN7R",
  "key14": "5W6c7nhm3aprTeSCu3YTRYbdvaJ62dhmoQm5bPb32UECPQtEhLzGa8JnvfyPbqNuf65dZcfJq5TgM3KJi3XSucv8",
  "key15": "2vfTJ39hw5aYrsKQvbRJY7uNGGBhtkoFVTUUG1BUiU7ZfSBa3KTfFnS1188x1gW1oxK4eERgd3hX4k47zwx7b7tY",
  "key16": "3LU3guyeTNatfbqFze7qf4UcrDDy73rHuHdPjVyxBLwt1bgF2kTMYPLjVuba2SHzfamWWVwWoyhfgxZ3KRX8V98a",
  "key17": "aDAUU4Dj7a7g6juZcF7aSExmsGCfQA32XCU6dh3a2vpGhFBtD3uRQSqRaSzjczXEpF4iKeKBHawJJdcfme5tbAB",
  "key18": "4LsNivC4K516Le99xbdCbXRvZbREUHqaekCoX6JQ89burdb6crRZ3dZFrdGKEhma2JABMEkUgA5Q3PcPHmyov587",
  "key19": "3YCHGHoe4qXEVy7RLd6S1jFbibAyvBitEPDgcpkKco5bnm6w6Uu5B36hV8wLMGHz8Gwtwmb7x1BZe85GShMdWRix",
  "key20": "3uLybk46ERCFWdL2UwYzZcVb6QdQN62ahFKVKVMKqdjsfTeshXEL4cww9oM7LuZsy3GYWn2fjTdR9u7SgwJ9fFLV",
  "key21": "PDkL1FYGiQKqhqMX4fbXwvg8gvTCiNUgyYKLA61jnLCCCMQUKW5sMi4iLwLPYdLCAqbPs99KvmXFkLVTm1WuG9J",
  "key22": "47B3TRkGqxQDog4x1dRJDHcfzLejGKXNoy4oD5KTiBA9RBcAZC7cXd5WipEXGFraqj7cNb7sXzh6TWwidk1ZxMRS",
  "key23": "3mfxqhLxXgjKs2divFECV56jVoEHkDwziXuchy5uz64PHpB79yqSK4VFQ1kgfpDFf9JfdjbQ77963pGEbxdsvkdZ",
  "key24": "3rLp5hAsqYoAReVKuAd6Ta1Zj2sRRcNQS1QJZ82jMYM42fspbi4mz6dxAaBm8UpS9QA8Q6T7WFC5RNHPPxAzeTAU",
  "key25": "3X7Q2iJzNdQV87pgXUdUq2X9ViK3L2zgqqQw2JkKwChhxHEr6CLxbsbMQZ1JN4Ei7mhfAmoRJ3s98fUccJFz7rjK",
  "key26": "4eMQhYrb4ftcpx7KGdpdUzTXTWKs5Cdvm2RMpG7k8g5Udc5JHcrFR1HAJP3CpgsFGau8LgjTbk8xVnJF8Xo66dNi",
  "key27": "3jRwuX1uTi8U4C42v756uuS4i3ekRpMirqftdtvFxqQ2cwvQpiBXhHVBTgK61E8HQKEeWzBKPchCjgRre6QQFpPG",
  "key28": "2g4CtrvmbD3qWhTBnh33SbnwzUrYnD8qm4TJV1zxHH9kahPbMCTBuDq8wYMaqam5C2xBPmVfkdey83eaV9zxCYim",
  "key29": "3XBa4T2gA1REyxaoMTmzzg4k36dRrMmPMwEumjFPHBkLsprJLwEYDLboag8uXxHZajyp3fsu1xzKDvD6QNTqCTzB",
  "key30": "51iJoQ6ypcrZN4bj7vD9WENQrG3xZfvTLx1i7zPjvL2irzKjRPXYhyGyrfTXA2Gcboxf6A6SaHppmsTPVxZrTiTg",
  "key31": "4NNAJP4dbVqDYsLH14MDAw1ZMFwXy7tpELjvGKBW9HsgUdSoSgnjRt55zdZLQLUiHr2gXVxJiHG171XMj8HECTng",
  "key32": "3jasQN3GcvgbKCxtqtCsLtLt1iGDSxKZA68mB8QkRig5akQHBQnweLPfo7A7UzYyr3y8QrPW6r3RJ9PQieXf18LC",
  "key33": "2ezi9RjLb7gj9HqrYZ27CKcJqahQyovLmH95uB49VkGQUg66ERL637qb5gpLbZa6HfAaPRr37vmaL3wgLfeVfcg7",
  "key34": "3n7t5yGpk9SbY2vadd321FgHZPLe4Ltf32VYrqKmPvrmgqPsdh5SctZnWAbYWckRwtzsxBZniDvmmkEeWHFJyErT",
  "key35": "4PdJo1AbEfcs1jea9mrB1iVJztaLmRSD2Sb4axTWsRdn4SyrjhEG5t4rFb21hRD2nDgLYADXAhdLuTTkyRT9ANLa",
  "key36": "441ZGZE8QFwLTmBHdvEjHiQaWQrqGGUs8L1jhg7A9dBX3kmr4KGa6exnzuhNoaFzzLueQ9fWLBkFyWN5D43N8Dpb",
  "key37": "3xwRHrYytqoGtbrckykdEnF5UyYwkXBTi8uLV2ku6QKJSEwLozCfr9e2fNTSFDyk9RrapRkMFRxUrQLduB7fsZCp",
  "key38": "KXtydpMGvUQLaXazqTMFmw7mF5PJBAQNgwKW8Jr8mXouLgMBfqDBawTYRGPB57x5g6ED7JGi8uhvfDAK64fXz32",
  "key39": "5xsLKLmeNB6ke3c1Qfex6QjFpwhrfjRFscodE1AiJ63sroVCkuAXC72yXavyt9HftqdKiB7hXAtVNwQC9Sb4oiK6",
  "key40": "3y51FYMzXbTVfgUQ7ecehXcijdRymythjjVAtVtYHfXSxtWZgLcGBaggrMTuJ3vS9UehHk5fc82GUoWVXpJBPy9n",
  "key41": "KvJWyrD2mUQQHHxXoya8ydpDux6YtAs2YMBY5dWqD1ecq9zEmkeHwyRcu4EPeBtaAUyfi5JoDFRZy4KNJjQekSh",
  "key42": "4A4M4AMHoCWUgvBgUh8LMr4bSS32GDDNtRh2zTovNDxumfxi9NfvsCPaqFvN2N5Xm9jycDL8VBdufezHXkZJJBk6",
  "key43": "5SkMBLNA86pKymphWoKS7TAmonkjREngZWbMFjkU5r5rT6jptG7xehm8bg8px74km6rFgcEkns1R7YiwcxuCsJsV",
  "key44": "48TU6etj2xGFNcWDEgEGvouasKsxdHCALVUpsqDST8wPBY4fodrHjnBC4fk7cj9TvVZ4cXmkZXManwM3MnXDooHc",
  "key45": "2z32Kfia9AGytwM784uc5fPSQ11DXHCjF2wq9nQQUuLWtT6wZbzUhz1HmjdtNf2fUQU4jCYJ81hzZL62Feb7yLik",
  "key46": "29BPDnwyxmCFTZaMVu68rKYjNRrHtfimoXu8Y5sDognebRy1ciAQc4AkiLr8AGN4iTUtzQQGT6fTw6Wgnf7chQjw",
  "key47": "4pS2Z87SzcaMnMcQLajzL2BJEVs5vd22RMnQQh9QSZ6UETegXxRaskY1fsRSWGhskCaZar4zmqX3wxYB5cgkkkRS",
  "key48": "46tTtJjhL671Tb9yWCQSdwd9BJ4TtbZ98reWCYvjijxcrKRTPqCZuk8zhryHrgYmWAkYhLKbUFQXSDsdo41zsRE6",
  "key49": "Y2pHDGv97VPu5NDQjBqi8TkDTUCU29zjY2m1B51VkCQgfzs3TGE3zunR1MQSKgiUBUQxb57kJhCwbv9LBjjqgws"
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
