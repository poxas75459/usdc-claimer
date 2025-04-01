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
    "xfsxtCz1XjhQHj7fVj4DS9dUDw9xJFcCWaRMrVZiWms691gswUouYMYHia4biX5i51L2yLUuceN3huc22G2KSRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sdqLEDMM2fybiD3eskRLqet6T4yGEjo3koEKmEPcNjY7qXfKC86cmWdF7j1uiEpZ6AeKH9iDF3uh9xh4zBx9d2U",
  "key1": "3ctSjgUMT5jtngwALopQzZSTHpeAMJHqRdHueUdgozMVbsV1VfEqgKSHzNxisD5KQnz23WgSSbNC5psXNYdWNs9K",
  "key2": "4N8DkpR2X1hLu4sfcEioCdznHSBVuZBUV37DdR1RTjQfZxzJm5tgsSm5JUBJ4LCwHArpqi4sr7iLjK3mmgw2J3GU",
  "key3": "2X8TM7Gd8ZQwMVg6Ep3ek89vG5LX17Th8uCWcjcXoZZnDXPZteDaPTH5KKenQmL6D6HskB92SRE5sEas7Gj1pxtX",
  "key4": "3KGTLVEvd4P6s9CRXJ6T56ZU9mjy6M3aCgG2Fw2oiU12LEYjtr5wPArtwgtKJBQ1rYoKQY3KMHZFcwtoJXydKJAs",
  "key5": "3QqYeTbwrQnyLd4CbE767Ab1eBJPrNjvECkUwK2QSsTzswY9H94C86HA2VzLrTDLbqfYuTLhch27s9X6D8iXShaR",
  "key6": "2wP42WXZKG4FiQiARyQraQCMxDcRuAcptxNwBWdtxjymBW5fytbnuM5R7Yk5vFqEkx5iLuFD8h4ybztosLtWB3j7",
  "key7": "2qifoKUMzTNv8UiqxFKv5S7H8yLtosGckhx3FdnAoYuMRvFsjZR8khVP6Dkx4e6X8yDBvyr1KjeAT8jJsYucn5Bq",
  "key8": "2NESrbVmvxAENoFwuMRvMLchyPcX7c2uK6JGCfEQ1oHdqN9NSn9qdEcB2PahuwXunKD7GbvBq9icEpMCMJ56sgZc",
  "key9": "2FEsdx6gJ4oG3aB1TnD5M6L6G4SZrnjGbGCYawh6NPqRJcsKtNravLvJdkLGQNyt4a44ozia9xpGcdYK2P1kpyo7",
  "key10": "5nVpoCL8L6WerP9jMHabnfN4KuAjsudVBvgZ8fmCNxaMSxLB6jg2Huh1TJWUD6cuAnJKm48Zd2cemeEkMyQe3ksv",
  "key11": "2Ynt2tBepASj332SR3pDfDG7byf7G2exhFJvxvpGBibY3Tkw4aEVVMQXFbpZPLxgQPYbXTW5bwJTfr9jf6RxmpBb",
  "key12": "3q61gHSjaj3C2VaT8j2jzZwxSL22LPbrLiTRKY4iFX2S6FZgSb6MEL2c9ufyJ3qGXE28UB3SdZ4Y7vxDSEAA3DEF",
  "key13": "5bVtuJ5Pr336mdskTofy33dnixZEgMgbDJ6p3JvLXCfB3jrTcCdGDJuWsS5Gg5B2ARjKs3vaVgBPZVtCXf3nrDRk",
  "key14": "26nLVdD7fLgXV8Vdz3X6bqnHqdkAYjJrmjCrNxfRkzYbC1JtyVXs4RCaGW91PMayrMqmb3SevFJctBJ6ezYN4huT",
  "key15": "5qBbKxa67jfsGVkbzDXMCXRwXmzJchFsC7tkZvY1JLf9XaJm2FhB7TdWhVsDA3NE9tVjXeNx76EFQtxHq6rwhWuc",
  "key16": "2yqq4G93xJF396pqTHqURJiyvvVWez1MVQ8iZGzwks2ifJfcXWjMPdTFULQoZiPtoXeozRqYhvABWEWq5EbU3xU9",
  "key17": "2MtxDcXZxYubDwszC5rCv2a7cBFaUPxxz9c5XN64pbbdyM1YnuzBr82fnquSWGqKx5oBH6DLvcE3gyp7BRtXQRmD",
  "key18": "VqgvYXPMdoBY7m1C2M5wist359BYenk2hcZvQjTbm5RtThW5fNydWU8NcpuTKsx5eUCYcnrZ8o7hoQjqHZqFtwk",
  "key19": "Y152chv48o7ZfFQQjR5oeuWfXM6v78KiiLDBDETqsAGKz974SZGToicp6YDkVpHGWvZQSSmjcK7dHfJPt6TWySu",
  "key20": "5148voEdYBiwjmDoV2Wc4qgttnHGCjmFpwa6TK3Q59rjUEy85D6Gr3nf9SH6PwsS7ZXEz1gT3jNPEDQt4LDaTwtR",
  "key21": "54cBBrnMUjcrcqJM6h3bLVT6c29G2kLUP3mnw64oVmgWGFpQabxuy8xgtLYJSG9ddMvZ2ArcaF7FwkHbx8e3cif3",
  "key22": "3rsYwAYs144rvKrxfvno4WdACF8pj5hwVHDpx2Gf5Fg88D8RTtaoJKGSiiWxPjgQz3kfovQEqnX8kUA4erdoaUsA",
  "key23": "2f41sz8aKBvHAxgtj1aVCky2dxELeZBU6mvqrVUqxU5DSkcwozqpumTLZQoc8Bje8xiBdSrbTapJpQtpuQZfWGXr",
  "key24": "58zooaobzZHFw6bzdJkkTYZVfdamdrGnNQWFJrPevfwm9LzgzthCQZqPmdBMcT8YLVCTAWdYSKdv7vqykec6p5C7",
  "key25": "5Q3a7MxjwbbVSFWkehogcLF1azAsiN5mHnXBB1NVtaiLe1vajdd9N4MAUJ66kM3YupgDyMnYuZ9pi3BYBT85hdZs",
  "key26": "4LufzkVCCXureA6zRXWACHkNhy5wVNcLCQR3gogRJ882GZXWAugBLtRU5QYsnX6TcBofg1NQgvFY3jt1MtMYSEtr",
  "key27": "5uVRjG59x6WkJVTYYGLY8E6RELWQaFE9W4aKTk9XCiyWcavWDLXo4W1efsxHphtummE7ptsk31gE2tYNP7Q1WtAj",
  "key28": "4aSmcrRVt7gNSvABxnW4S2Jdg4jnZWj44XfQhuTSrywmcPsREDv9KV6qkXyJuCswafiHVRZHfQmcfvNLhD7TU4qK",
  "key29": "4eEd6BcvvwTMJ1uzcFQN5shvY4yzsyiX3D3e5F8n49E8auwguQvrUEUFz3D1aP21jZKxZFVBffWEpJ3zNqFfK8Tc",
  "key30": "5Z2gpzV4e4ierzufKBugeGKYCkBK6V521FAXoDVAtaoKhpUsEWtsJJGP4Re3zFyaH64N5tPPEMi6UZrWYKsfgBSb",
  "key31": "47ax5dJ2o62MpBKzhSBXGhpx8BCiraRXPjjDK5fdDaVHJZotu1RMZdE4rngySrJv9cgPWzabBiGHJpGmXVYXCAL3",
  "key32": "bzuaKarbJyLe7M8uiwbm3jJbvmkGQmwk36eZNUW3QeEEWadc1i8XC5f8EjYgqcwNyuRLHc1wZCyU8F7YCHDoxp8",
  "key33": "3gHg3tbwphs7V3vhwatGyQci8WgR3pZxhen2ULgJaM6eXhfDoQNTKqo8PZwkj4kdyfgV52JZ155pSRgegecPSPwC",
  "key34": "4WQRqw1der3ZjqHQWAV1vtb2ueMFgph52RfBDdbSckAMPHyDkWJzCa9TwoczJs8FszU7A1bDEHatbtMjPPoM8mHD",
  "key35": "5n8rEyVf6hVhaBn8vqX1nr2MWPt5dot7Zg5jcwHcbdYDs41dtGFrdARGxion8a7AWz3Vk9Me9cF5DNQ7uiacM8dg",
  "key36": "43nzk9RJu9BwqHuw9ctnKxfFoHC6kh3WeFSxx4QX1U7om48HEP7A6K94UzAAuhzUT2PgNGUEQ8itaUMA9XVbzjw",
  "key37": "2UUHsZVaatdk9L4ETARnFvxH3sJtzmRcd7SqC6dy2v6bvwgX2vcQf8R5FtLVtvDxfQYFcXAtQCVowtSGG2ucbXLW",
  "key38": "3wAUpNVk5AVDAsh4k6xMxgQagcuiy4einBYW4QPA6zcXWDjZx4y91S2t8kPBemh68VSPoMxGA7N6CV2TcDsa8aQB",
  "key39": "2LoQGaGrUuk15iTFnnCz3H62DTnu1M9x4cAbxFMbzvd6vMvqnW4qdGhQEL84yBNuiHKBbaACRscrxQArLZdVtuDk",
  "key40": "5fCEbBdLEukZzeC2dDqqCU1Z8xdL6Z3nxSG786HMM98DbkAPyVfoydvpBwHr1kgXzvF73NDH92zJkRCYykL41Dqm",
  "key41": "4x8KqycdndAT3MFbhaYqw2rA5P3FewN6q48ndCXoX8c5sXLfKHe7mNfGs1hXehX3tTCX9ap5nR26AJye9R76aaZk",
  "key42": "631Q6XremFmJo1fNVwiZeaxrhybCpoASwpx2gYY3kDrh8dmEqy42AqvTnrufcq33WwCesTXhGYiwhTTXzD1A4LCK",
  "key43": "Ao5KU5GoffKUUoVaS3avkbKQfQvCroifEZR78wtZ7PimwQDSTLuzn2Brg8N7PkkXZ8F6TVcZGjSXR8gAgcEns2x",
  "key44": "nD923KB9ZRqNdbkkcz8CCarT4ud4ZkWwjLb7VexyzoHcjbfJcovw7E9c6NRpi9umYB3VocQGiKR3EK7bxXPM68J",
  "key45": "G851ystchYiNdpGG4bVZ3Wd6mA1L53nD9r9Xgmi1zYkkG2GPG112eeRE46wnDjYbtQbPTn45bL4GM5dmzgBT1vz",
  "key46": "8Gz9JeCKrfqGaeB7FwcLPfHcAB7V99X7amnn7j1vZHh9cYDNXbbysBtjHm94HRRTatZNu2nfkpDoydeGFgoriXE",
  "key47": "pkoARfJ1RqGJjZ4kuKKWiHJ7D5tF6Mvrd1MnGLL7f53LbnVjVn54DvvJcJEM6xcPB9uNjD5Up2KCxB3FFvg92f7"
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
