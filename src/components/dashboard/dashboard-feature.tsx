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
    "9qK3y3kMiXaHzak8GiEuiq9Ja5LkYH1Cc8aY7x5yeGsqkfwhHKAGqEADZ48BHj251FTBV4WWXw4YSU34YzgVss5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5my9qrdt2dcdYv9S6f9KJyfhNqz2Ehq3UFheVntbPqkmRPmx58Wd3JeyesmPRUz1GZX1ys2A6SxEnbFq67ANTzwK",
  "key1": "2E18uzo4rfrqd1hBH4aMxvZVNQmnPJbzNPiQY4qoubDd6HLs9zaZjG8vmP26673oPiEaj1veuFhyYenMbywPnrzZ",
  "key2": "5XXM9dgYc4GbhBtZ8bdMx2c683Nu3yh7Kbw5fFHMyRwcyrrNC3DrsHPVKsmhABPpeTL2Efqa9vYCbqdoRf6v5WyA",
  "key3": "xJEABqVw6qavwiZta1PRUzpq8Cz9pDfFnBawVNsMrPkapWTjfikT9yMwR358pbDAN4fXeZnM7VQaZcGKgsmnewS",
  "key4": "3pAUjGpEvUi5Vdkqgp215Gkffa1GkURqtzE8PfKkHnKSJU18HMwn2jJdYGaunw1pkYysqrfbPoYCJGQg7yCnbVsz",
  "key5": "spBaSNpgvNw1Pok6Y64FPREMyFJa4H524rD7KRxPSog2EMsuhdWaGH9PNFAqyrPxJJjYLpKufiJ3Qti7A1mSJjT",
  "key6": "2EGh2MUuLnyPvw5Gm1kKH413K8sTiHwY52ZeRFRM17ebjXKUdHhJbq1rbAwXDUoZgx2ZnFWjn3N4HDJu7B8tbEZh",
  "key7": "3XPJddRfTtkN22NwQHevP7dTFnnqgWLxip6jnJiRHWUtHkVR2gJGFVPVzibWeC5xiLNYKe6UGmzFqi5eS9QmPYfo",
  "key8": "5y5wsFoL44t4BHfW78G6MsYNQBSZgRFD5YgrmETEsfhgsgQ6ZZccNGt2kVEE9ipfbMaxxPpN9ALu4UQ8UkjrL2i",
  "key9": "2aqDywuk8NYBLTQL9NMRmGX5Rb9b3mjDZ1Q9F7RGdCh6qwjLbYoax6PwZUjSFHtgytw9dUEur4UdY7pJjbqxW28s",
  "key10": "4iGo9LvG8AeoJY8AsBnW6RC7Rx1yLp9cFL1QQzqfTs9ZRpQL2AQa4MTC6pWRCgbcueKFQnFVSNoF5WVYQJQdPcNM",
  "key11": "B14cfPNk9gn4bGePZN5FFKjdTURe673z9s4PgVz7LsP7hSQ2t9gsa4fsCoW8VGZmfQXwzVBSovTwXJ5M1VKLhZS",
  "key12": "5JBaUhV4NftNziRYKrrQSypZibrGAWubkkt1KjVoNcfp2kAfNxra4cvw3CJiWNtgpcgpTqDgUtsFTeapHn8gDqX9",
  "key13": "3B9wk7Q7eU4628W9VL5jidrJLj35wvdev1iH8QFJqyJyAv7L1QGx39tKPbnWiP7YGEbVfw1MNHBdDx6g7uBudNCM",
  "key14": "JErtLUaYZnyUtdpkiHSEZR3xyyo2mEco9MRZRkisA95yREi5j5BBMfeK9LArCfrPAX2RZZDTRvEaSR4CdP82MhN",
  "key15": "3xNJXKkDJtBY6WL9wQLeP1Po8NEv8xeTiFZ7GRjaNFWzsf8TYQqRfx6rHAhfE4BUKUYy3XbfUcoFpk1Ed5PRRgy8",
  "key16": "tg18SMRsgCsRYCDnYXXhVWLyyNddEUSAa3y2syQgnswsapcsEjr6WzgtnQor65JUYvhyu8KWT4dAXERDMAYfhGp",
  "key17": "5Q1svX28BFQcnGuptfka4uV7afHQo2dH31xawHJ7xLDtCxjHhnRWMMKFFRE9b2GFKufKK6e2R1oivVieA2xU6ENz",
  "key18": "24B85kSYnwsGAQ82LMABEMznMT5SHXVEeLEWHjpe5Tb3myMsk2R6KUGKoeFuo3WPTzpjqSUYayjFa72pfu9EKZEu",
  "key19": "xQm5uvUnvTCdRW6BmmS2GoNYnbHyKqKygfg9SnqdMU5zkjdzhP86R4p4HWKfQSTy25cj9TzB9p8XTTKbwyvrw5i",
  "key20": "53JSwnjCyeZYt4tTyU6v1DDhwcXXffo8S77KhkezJfgCXT5JNxeRKYi9kWJL5ZpzJSKznYx5BetywpFAZdjwhJ43",
  "key21": "3KC513KsAV4DMXBDao6j2ur5eXwRjdkdqiqwktDzyKbmewbHsSyxRDDnoYafiBcDjQJG6kUEq1eWZgKHMzymSeyx",
  "key22": "28aABNasi7F3rLVSUyeQAF3518yiEZGvA26jRgaRCjkgQf2an7LHgiK1A1gdCyAVtFqNy5Ze5LUAtF2ZfMbcgzXB",
  "key23": "55MFqDhuJ5X3kDVrdn2qPZATHRQvbM1ZkCwLnnXPa7xXTHgV54Xc3CWdACaGeNAnNYq2xqR1gWCZUWRqCTdZE2YK",
  "key24": "3Bz6xpe2RiV3cK8rTueBmfYwuoSbSUrVkb4shLk1p1RxDikU3LFYBsZnF5k1EN9QaUcPr8TSvUGrk4Q2vCopQFzi",
  "key25": "4SkYmqAfzQNjHVeFj2AQWHyMW35JYQLWZpR9atvYG3emz1Je1CDtcVURujQhcdA1Se8bSZRcpYXHSaeqwZvVYvgp",
  "key26": "53XDEnfiszRGSZLr8e4ojdApCP4PpfPBRqqEEQ4wRzoLbHgGSZj5aqhoAZjG8TmiknfQWPXKEZ7E34pXdPEzncjT",
  "key27": "29R7DD88mzSgXaYGgXfo1C6zxyQe5WuGuMunrmef4dwzzHt1eUA3YGMreJ7J2ijYbXTrsi3s7WYUCdkoUAJTYpg5",
  "key28": "4LCA8Mum2YkRmkV7n7uiFxLaqer5oyJg1jSJ1W7H8TSuTkFWPdgf2wo2ExvTzt9s5TjhgHs8BVUvAu2vrb2JoDFo",
  "key29": "4yZXPvwuGCVDJgaaH3d3oW6q1EhVdU2atLkoDxaNzX7JjooQGKbC62LNMMfLxxddymykAyHff5fPtRFr7Ju8uCkE",
  "key30": "3TfubeSPjymvZVd65uneHq7dZpoAKq4nQUX8BZAwLupSmUkkF2hPan7ihvqX1gzw5o84LzoQb4pqCxPAojFHkUZQ",
  "key31": "4t6hkALA2tG5JihftZjhjmMs18fL3wvArU3a2kPXAoZAt1jGvBDpd9VsPna8jAKmSUzLSiNuswUWvwW9Fb7fRQ17",
  "key32": "vwWCDmVzYT9PhLn7FNXGBzrSBApukNQDECtm7ZkE9QJJDnrLUvjMQEDxrsjUhA9Z45YwJhv7W5UB6jQAC6iJxBJ",
  "key33": "45F9JFeymV1bTfXsvkhKKRbXnZc5cg4Gb99yfUKCjA7NffZmCcptoMq34NXE3vU1B4aL3v6UaPxeMyhKM2L3zaNg",
  "key34": "5FgdASa4tgpQfpiCCQdR5bkhCBpeLDcL5dMEaFTjunAbn4cqqy6gKJKTs9tSM3whtzDaktJrR3x7d2SQNKRzTxdn",
  "key35": "p1ybNxzK6exgsNhm5W4xmEM9vkZgT4JTrm6ZV5YqvkJWTYwKGytoAojc6cmnFUAkGkV9iNYyEH7DiP8fzQoNd94",
  "key36": "2DPM2hSoXCASS2fJLMFkXiNv7t7Bfy23TaEYPJPJXt5K7wDtPjzyWEe8eyZUB2oJ9csLqUhfCA3gdiYujg3LwEqZ",
  "key37": "5L4G7u2W7MRxv16GgxS7TzzBr4Lvrw7q2Jzq8UD12T2T6f2rN8nVEsYo6WyPykN3gyFTuqEcmVg7PGEruGa6GvwC",
  "key38": "4dkUgyg8gNcaJjjW2hn9nVqSL27iX3cPuMjHnq92UxtA2jwb7cbwx3SpZGSn2oTZp8CxwbWoPsJcTTR6kVLmsxL7",
  "key39": "5Qk6REJFNrAGzgYqwrMGnzk8ix7AvLqcrKMk67XfFzTawXk3xuk3RjqnZ6wvJE6T4vjBqtB5AZQvTcc79xeKtDgL",
  "key40": "gMsV9zcvVTNneSM8kZjeeEvGRCwVraPSFMJ8hza5b65F59yCHESCLjxRdwYaH6Pyk8MUH4k6HJNqGixmyHRjCDo",
  "key41": "4T7s3CKyvXw7nRnJ8fBXJH7rW9TN7NxFCnj296ecyhcnABhRuiZyPmoXgpRCRvkEDRfo7283PZfSw7cb1SNzCcQq",
  "key42": "mciN41pL5QiT5KFxsB5J5x7G76yXQVU59SFGMG75ZfsGrbiKh9iH6b5LsCk7kj5CTXREKEP4ZBnHYca9zLrcrmR",
  "key43": "5MFT4Yssx9YajEgxgSgLcUWZg1aJmWDQ6pwWQ7NBRfbA6mt3ZeWQjBim4t3mszW38VthTDZPfg31unEvCoM2A22h"
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
