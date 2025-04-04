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
    "B8aEAEnPnfRCkQCDJ42Fgzm4Rp9D1psqr7j85JhGfNbVmgHK4UkjujyeqKUbL7BYjqj1mr1F1KMmTHnpGwdpkRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4476p3RPDcKroiDEvcLzGWxTi1Yu9gwN4R5UhUtDeK2ebYdjNhdPqyUFrCx3z99xN5GvH62d4NCjnixZaNBsMrs8",
  "key1": "2fuatKneRjPoJmzecVbyEbxBM7nfEsjXE2mr5DksF9RsWrR5jLixcCGk12cp6iXL7pyoqPCbhwa4vTq47bTq9k2B",
  "key2": "5CVRE1K2YNojxBo5HokskkS3oKaxz2qQz6s2mwZd85627SLD2owGDPWPf7QGTk4rD7cjg1FjXX4tZLU1MTQgkwG7",
  "key3": "wxuKUXbeaucPNrDCpkzfGAYhykjmtZMvVGdbPT8XskUvCcnriGGvpKDf4mDLqHd4FvBCMeVFRrkVzcCobJZsDLw",
  "key4": "3nppm9THa8DYeVA33FxwYKJWA9SgqAX5cewdt5jrwwc3Z7Fd27DQPRyWaLnR6tjpaYVnpnQ7saGeEJkn9bwS1QxC",
  "key5": "3iKRqfidUvz6Y8HhjpHMwUoKa9SWaooRtowWo2m5gnkYCJFqBmih7Gbk8Ustg6b9EM4PhtWh2hiSzgRXueU4saW1",
  "key6": "2ZCED9ksztzHK1VEL36b5aUXVoV3cRvtNnvwNpwCjFLEjfEBRFwW67RfYSLQta6TcMuPH6wnpxYsNAgGbkkxJxZG",
  "key7": "37irmgcjudW4tmHtKbM8ZfvuDFePGTNRYyFATAAi2NfvcpNT924uKK2TdgsvP9qrSArGVbX3mCM4NriiX1ParqNg",
  "key8": "5WLZB6WzqtKNyyFJDbiNJVmxhxmEhrUyXSEJpVneLGby6brwDE9zDUGMjYYCg82Q7UPQXP2gb82qqNgqDykxrFhy",
  "key9": "3Yq8ix1bY5GS7ReCEVC6vkUpNwoBSLj6dg6pBGmUJbNiwfWvTSnYN6Eg7EQnxh3kfTgbP6nD1uwnJjoLvhN2G1zZ",
  "key10": "3Az6mmesz6H3iPY6BNG3oBoDYGARpu5rFApVzdBLGXP4AQFPgVKDZ1qWstjnpCfKbZSRg94MyjB7aN2cbcxksKAb",
  "key11": "5SVFy1vLTQSW4WVnhL9nGDyckkbr4GgdN44e5bAgcXw3UMXe1rUS8Am9c7fJZdQ4TtQfev6zbZbKoX4unthDqCc5",
  "key12": "36butNBLNUz4Sq79Kd5kxjZTfZoA7Ap7FyPMCfVcGbMj2xFABhL6bKzm1UWPPFTVFJwf5g3JmP6vnXdQFKVS2Na",
  "key13": "qbpYCSKxXe3Z6zTRgut7aSgZ16ajx2Jjh85z1EUmknaDqcGnjPGAry4bmVHpeeCYfa3k6JroiVshPwrzRqUrcaH",
  "key14": "2wEGuVhK9zuRTACDQUTYh5E5aNuGuXXWHhggTm83RgzPv9hT4GWmDeRweHhgoGe3W8DEhknwxCWUR7ryerLyLUPD",
  "key15": "3EMmV2fGMEesKQxCn91jTBR3jgqfSkGFbPoXmLhbcAKp8ECfaHhqfj3EVxWuCwJAT4bfJUmafdag5qCUD9r9apc1",
  "key16": "3jth5zFeoFKNUVGQZuUAgLE6k5DHddGS8wi2mLCLgbCVApCfuiz7MvW7ZNmi3jKA7Ej8tR2eGpuDHMvkaUCqRbBo",
  "key17": "65XP3XnGVTHBtP8smC8esGn2F2Nh6FNaG8DYzks73LeDJhVsd3ormeriTrWJY73UK1ewUN6pSb4gDTkN1VmxqYhs",
  "key18": "2zzPniuwx2A3ah5AQ3Xqeg2EYcHxnCfuvRvyquxiqdbCjHf8EkpAirJK7SWjbyoa62s9hRjDEhMfYNfqfGPf7S5L",
  "key19": "4ZvpMcDafyhYDtwjEzxV8HZjQhz5Uvy615HBTztrWEGTCmGjUX9zU7cV6iL3XwBa2VFHm2gaA6XJpRm6vtstTBfe",
  "key20": "4gumAvGLWq3dSqgnpadKNvkwUy8ejPVvUevPWJPsuFkhkPf2R7WDk3ZvNbACXH6GX5tF2LCAuaLC6b8noURqWp95",
  "key21": "285Qqn19qc7E6zjkfWB3zqHtPtfKGr4ZYw86Anpfmju81ZBzzP8vVjqfmfLwFf5Ntp8F3MQiWoPCvVjNq4sEeyPG",
  "key22": "61im8vuujXQvai5diefsJnZvLQWihwWiNx66qDSjPqrGdPLDWW59gsRQFdAW8FLkMYv7ZAQaGqinVoJstgiVxL9P",
  "key23": "2axhLiJ27hkHrxHbnpnfgHt4sRp8waJBqLkAHDwU6niRLBjMZKpdxQgJgU9wLXdirQdW8caReTq6Bv4WNhbzGfh1",
  "key24": "49b96hr9R9btxYLFXx6jYBnM7UuVtthgY2au7MYTD3Cd7VypZNEnxxqjuxbRm3KLC8D5etvkfSoahyhsTWLgBBVS",
  "key25": "GMeZEWhFoacvc7cRezzWwymN5vicV5pDZiSikFPXxqrPfBQkQ6x7AoumGqaWgdkGdNzCWEHrtykwDoX8MUuVxUi",
  "key26": "3MSv2FNwjHz1T1gfaGsQthh62JU9J3SEpaQwTcVnyxiqcGzu9FnbxhVFyKWZdAY2gxZ6b35quF86keedUBQ2hHRb",
  "key27": "5HNDyjaTufg7ngbRy8pwFWmFuv4nroHVv4sCgqqE3ccW79dXz3Qacp1t4dJgEGi6p7WYurJvMmN3GJz9hLpYkzsF",
  "key28": "3n6tzemP1s28vXuj9AtTanukFuZFAHZRGR5FKGR1QJpgXRHTX49cugyiQbYSMMFfsCu1berpFefEN245WiaMTXcd",
  "key29": "2GMJh69o8PSeVLPBDZD8jZWXps6bDzVqeLnoN2kNpvyyJf6Cu94p2f8faQ6eQwyumQN7jr4EczxogL1rH2jgsJ8C",
  "key30": "4q3XJSH3SxPM6sCiUfutVhEAd9o7PqSbZ7LwVHkG2MCdWAXFYX68QajakjSvkZroYKosCuwg3U8uASZ8qjLJTwAW",
  "key31": "5UPkCwvsRgVgGwvqydAGUr3kEzNqWCWNrFrv98dBj6yiK4rHBVgWy2tZcKpBaVhXwfeLxWGhYBHAdnyFPnRbufuT",
  "key32": "22MuSFKRhznyxrTeqLM8hF1wa5fMVLTco6Ziibxokv59WCHMgazRPFoVxsQTReA6AyKJ4U3H9NCeDVTWotCTaYfH",
  "key33": "5pb8UKVt93Kgzcz39ZUbppiGtyeb95pxpJC5CcZcBpbfqhPWp6qLwsjFggxvew9EQwHaLEZiBS4F11S3anHU6K7a",
  "key34": "3whY7tcWd6oPPHHM1Zt4aAW2Qxupooxc34tRPwy6MCMU7AtjDgTSYU71YigrbkxbdKAeyp9X5Y5baTozbJEvU7Cz",
  "key35": "3pnrbYaHiy1QsRZQPaeDW7whDEm2TWRYLQfW1uXNCsCxjpMeKMTqn3fmuCKQ6HCjpQaXS9ohJKpEUg3SaZtpMk7A",
  "key36": "48GUuTGx5PYam4EAJitMME4SsMRHqobhv7acmP5EY9tk2ZBvHXHFEkG2i8EDwiyqRLJPj3n5RmrZLNrBemPrCDza",
  "key37": "5eRdPxCKX9gsWeami5b5gnR8KcFSeNpnXFSNpLziM373WrmiXwe7bUw8smaRey5A8RojM7jxfYnzAg1KDmW1C4cx",
  "key38": "2TN8DwU2FAMZ7i3irkJdqPgah9qLvwQH96BBbHTCUXawJrCQtNibVGKx7GVDd4iHX7FikwWamvEbkT7KhRAWAqv1",
  "key39": "t1EfvwXBnWzD8yNSLUQMBzwAowCn8oJSGMamr8ksrXe81RQFJXhVQMJLi6itGBohoKCxAiohLHL8udn74uhWXoy",
  "key40": "Gnm9Ho2x5C74vDWQ1UwsTBQJyqr3kbRFUQxExsC1NNNZegAPGhXNhiDpnCtRHrE16wi3E1ZeRpmo1e3X1yHqfCz",
  "key41": "4iL2yyroZqtPk2jjbTn6WsfY55N6GcfSpM5MrDg6H9nibT4aUqF5Koamud2qWqGLAy123Hbi6MyeBvJHcdKBrdf1",
  "key42": "5nyjnv2P1DdZAxAgQVy1py4XJPnbaKedkR4Fu3ixMth8yUhhcqs9QiCHzD8syetxhTU12EMH6swcP6QSB8KjQfub",
  "key43": "5eGfcjkmHTom4dH2GowsAD4fTyW3HKFVoYr39iufEHKpHoaoxfzZsUfAhkWfXKErkSnjFx23F96Rw49DXu1tvXtt",
  "key44": "5Kk92PDcLtzcmH2Kne527XWhVGJw3fXfuoytv3ABuoDAXLEdKvUeb3u7br2jZi4e5jA5Dk8sRv4Gy6e5QJygTE17"
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
