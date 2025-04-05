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
    "4abaRHz6gSJEw49X2wDbzrcum6Y5sNfCkhhUMtWXW18DPd1YQU3d3p6chkniQzcSGS586yH3yCvyDv6oevBZRfJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wrq1suQ7RrfPPSLyLwmvNLPW386mT1gD3YYN4KRK2bgmBDrUn6Y62jfeqsfSxnKTirbxASAs6BfSo7cVgfBDPu3",
  "key1": "3ZLtBnvAaYRz4dakapnQN3sV3ZB8oSaG8GDhrEUh2VeyRQzipmSHpRwTN82Fg8A9BvQy2EgRs2WgNcVUdX2eKsGf",
  "key2": "5tiFEZWvGfazz9EaCgZYDmqwC84oZ1YrG75jtGdSDwaccxUW3HYrvEjV442pn9wzHhPCA2K8gKL5dBkwgKDtckoc",
  "key3": "5zu4WuGkB69JPnrcb6HtwFBu8uYi8ZbzVirW9JWLN3KNco6CngM8wxURsdKN8VBESuu8oAYndCFSdJipfJXyUawk",
  "key4": "2RMXjxKb8ncH6WVUbjMMkYgjWq2H6D9mjA3oc1ymW5Puw5v5ESWPMei8hTS6sscZhNgiK7iXrgvwTA86njYR9Sky",
  "key5": "iN1vkHD2PaBe7Lx4cLmpaHeCxK1GTRMs92bLxj6uRLZESwz126m7d3DHWCSv4MjrdVBhxZ79PEAaWV9HyU5AnRF",
  "key6": "5UNYR5FcPcE6yHexRcqF8R2gTuEgaNsKgFLHrt9YzqJpSs6HbzQ7oJvTs7eZofwjS2PqRTrAZ9dCmEhY5oazwxDu",
  "key7": "4SHXiTvCCoEv5veWH3VNbXXaAGxHeUTieM3FFjJjsB8vpnU7i9oeGUFQSNEivE7SHcnbsiLXAUUXdHwRvNPBW5XR",
  "key8": "5y3KDjYpyin4s9o9nPhsZbDYZU8LT7MNG2nHGyitMEFU2xQbBC1AzRtGCpqZoYWxa9BhGTXuQgtvsyY35Nv4RAYk",
  "key9": "2VhMg3MDCS1VY5gmW9ky48tqMMhX9pjvfwyjf1BbbbyvX7KUATSdpfUChMRTXZga9imhaaokQi3niT9Hs6REVq2y",
  "key10": "3G2D36idwN3suRzutnd4iLjyVZnqfrdj844UP99yPYGYNBUmhbYVTcZ82uTfZ24PRWmYwTHUiF8zh9mAWvpwry7p",
  "key11": "3GGhJG8XuzMcHoQW64NBXeCVa7dqwJ3CzQwA9m38MvqJpbN2AYfmdMX9SZEr5WSyDeTJMCi7jCN6e77MCaxGTfFu",
  "key12": "5D5JTj2oZWXWBZstsrNNeRmatzm4RAmghn9NKUm6Yecr4FS6cwnLXNhwAiKMpb53S869bUgVo99JJ7pG2vEx2sWM",
  "key13": "24UPD5L59Bu5Ew995bJc6xeTaGsMByMEFJWYCCtLadC2JobY1u1ho4yK2F6vTN6JqUm1RtghvhmzKcVVmsYQAYMm",
  "key14": "3EGmFBtsmhybnRQ2f49c6DnDcR3Q8HzD4fLtjbJSV8YRBHvmVAcxnxdRDnXuALYPBeSyazBLVpuHSL2PnBmcNj3h",
  "key15": "5oRfZKy5BQVmk6w5JW82u2nFi8d2wKnLbMafmFSgsECtKwJHH3cAHqyWNxisPYiFUEGTPozXgepoJQser9z7YY8n",
  "key16": "52caY2k2oRsxpRkDdv3zPuYwztFZ7D86sqNfQALWW4LcwcMvSCCzvQ21qSWSjn6P4S96fjMgwHFfGcNg63NQLZYQ",
  "key17": "3tv8hAvdefiuSwmHvpBYfwoPvSRQaC5fWzyJz8Xa6gs83EqgVHygq9HBJp66DHsTsa7H21rpsfQUv6P72inoNKm3",
  "key18": "3BueWHCFYnjScte3NqfnewCmWEFiPvVUuMHzidhgzMDXHNrVxoJ3SiWUDLTLPdpVKyAuYWHeZjFfCdWHxuq5AouG",
  "key19": "5onLiLmpsRq1aCvnqePNT2X662Wq3uQXoApfHVM72BvupHVaaH62HQ68qRpHaW1CVprTSnD6AATRjZTeKJheCvp6",
  "key20": "5vTgQC5oGvNVmqeLfxc3FgZ7yAPyQ7KYPmdW9tqdHGtRQRcQkYXvt7sCKrt5Mq3tco6Vc59VgESX9bTd5ZL9V6bb",
  "key21": "5HL9eVPhHU8Q7uYg47rHZ6LkuQziK9N14wp89ugWf2iJnoTrmBNh8L6eQ638uEtsTo4bJ6FihA549wdNcds1feZb",
  "key22": "5ZDbPo5hHpkF2nvraGxSdK2wAsnVQR3kUzBSA1ZhUEUeoPou5EnNQKZ38bRWmQJYeRQgGcLrknd4auiy5g8B1Kry",
  "key23": "2Q94F1e8DNPXUR8FExbDLqCEMQiRQejpMmARkicuSb7rXS8ay1qWYbJoQKmh9jv9U6987PvLtGhvaRQ1347gDqvC",
  "key24": "3g6KfyPj7NYcoqxWADcA5xjw7qPTNhhLkMAMtv5KSYQzkMieQHRoLBtPuhy8MsBVmiyPAtUfmMrnaw9C5Bt9UGBz",
  "key25": "zuxi3Q6dFiEYD8aFFaAQ39q9RH5cAUU5bf4HQKUkbL2B23x93CpMV224bZbE3MQxV9Uq5ztZBgSfJy6rFDAJVq7",
  "key26": "3sJf4v4JWvYHzwvJMUvZq8TveWZYWFbeMN9vjUdvxqT1gbXcqb5jiK4d6AEXphzczT48cSYb2GVTg1vpshf45Upf",
  "key27": "2TfoyHmFoq9hn9zmvATuQjirUrsSFHnBt2HZvrxbDcfXq778p5DbSjm6q93GaAp7MKNFik2V6TUSgWWEUHkf4ehh",
  "key28": "w8tRCgtzjzzYxZhm2XWHthbdTydeSdTNQVFc1JMNBReXbcLwZTNEGzwgwCSAEsRoBJ2NbFsdF7Vb4QBBh7Si4Tn",
  "key29": "33gvGV9UFQE4KeFbXoC7m7M8YhYCwRMxKfAojmyD9ZGVZXevNi6phfj6eyJG3Df7ZxTpZkyqRFRMzadEQhMndsN4",
  "key30": "21EAo6iSfvANMiW48wp8Cm3cSNg5M3Dy7pMVKrnidcByvnd6zwRDgvYCmYxV6RUrLt6wcgB3z9cTSLz7CVtj1gDf",
  "key31": "LJmoXqmBDmLnSQptmQy6pKq6NHkBA6m1CN6TMNaegS7gxNkiYxPL117h1VLRZgpjCNCmhkJynQDChEjpbTH8TFe",
  "key32": "4JMzeK3oaXbrZdfPWnijnjmS5rprfP5wuhazUrUV7XAThKvxG1c4VDHGA9FobPmhySRZZAMEipbNpoSFx8rti3v5",
  "key33": "2cFzQvuaJph9xGsLsS1eR2pSAKwEhaeMNkEkH4Lgr6L1s6hattdWGTTYSX5Bxi73YA88tpuRQafeEmfPF9TVeyJi",
  "key34": "4gGKypJ3mbR16VG5cyxzQrGCw1bWMa3k5pdQWgW2XSXcEDDQ1qXbJhNTe247NoKmNJbsQSKecF4qip2wdhCnCVJt",
  "key35": "3Y6gq1pW7iTnSFa6YtM1AdjJXXicGG2he1ntX6mCTXmD3uMa3HXCWArq91oJ61ziiKA7v3QnFwm7YokUVMicsBoB",
  "key36": "4F84BwxUZRoSRF1WCkw4Ge8yh48u9xFgk68CXppyAKrWYdcbB7NHH1eUqk7VwXDtnTWokafqJy1dVQu6nipB8Rs4",
  "key37": "59KXnF4oMLpTqxc6ngDKNrMbdSsTMbuMGYdTYtf9ePua85NPMtB21UvEUt3G8Fvy2kbudG32vcuL6RUGUx2e8ZqG",
  "key38": "3aL6VpSwc9cxYknob7C12Hk9jUCFvGeExSjU1387FqHyM3Yr5c5zsiCz66b5pceLKvHa6vxzmuv5RNCHaSvjQPh8",
  "key39": "44sCwzKoWuZibvThZ7ZqPg2xgK2LJX4RJBhX6BbedbR9rENcTx6dcmmWLb9VY17fJ9AjjVfj4iAEetxgUfB8iS61",
  "key40": "3GrZqxr8qvqPWMfuyDvRqpFyXXd9mWC8A5uERSZsJsQVmuAMgwJsgzV1sc8PxEMrwnzcgQJnrgCRbbwgUSimeCC1",
  "key41": "4Ut3pn5ZztEefSSNaPsft4fUYFGnvy4i89bDgHT2eJygSBrzvxjoSNVfQFeLrdZWGeDokkD3NYpJ9Ss3jxbNxokF",
  "key42": "61JLDttCxQQgaERTRN8KzMPegLcYYDouujBBpzch5Xz1xMc5JY2NmWBy3bBocLJBmPvnyRwNLboP6WSXB9tGQoWJ",
  "key43": "8cFMT7YqfmiaPMz5ktVHnmyf6T83VbgQWenA1UXvYzYt5EvoKmyyyjwqPw7VYyPxyyawRPT9Fh4dcz78miiGSvs",
  "key44": "3KzuQb5uJbk8xckG8WWRN9GJZsqibNcKenA2DJXf3MLBnsjagvTwTypUWrCe6aB4dFNkvhFWuAKa7T8JSPcAAvHg",
  "key45": "4S6bGeqiE6yEHuers2rpzLPmaCg64McBpGwYVgPqNsLNPjzi2jZEZ6nVTbuMFTn4y8wos2giv4Sggcrp7DfCXqsW",
  "key46": "4w4NNBnqyL7BUosBQ1BZhTtzngxoBJRvLbxP8tHR7hYyGCZ2B7uwjU8X6kDdrAH6wesSWUd1ioPecpq1LLUbonxU"
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
