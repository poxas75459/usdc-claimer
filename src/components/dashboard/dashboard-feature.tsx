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
    "66Hv2GxpdBeBZfrtHQLxjjuzx2XGQj2CNusNydVZoQvih9fvwUEDUoonJX2BZ6D7HVCbeWd8vtkim4tGP7LbNL1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21NEfHtsTUeanyWWZ31vK7a1p65x4J7MHuN7zY17TmKxbyc6NgEMA5wavab6taMakQW5fDhQvdprzj53ZxgKkDkL",
  "key1": "5otrYtpHtiirJPgFUK5xNKBs2W6UCZahgdH6gzPmjbfc2E55LuznHBAyC5C8T6FFckGy8EDKDQX31yjLxDpSBnqi",
  "key2": "BP7V7P1J5QzmWdbTRPQsXy3z6Fo1XbMNugk4B7wA69MzpUmzj3iV65Bk5csYEWCLKfdWAnWz2KN4x6sx8K8BXiX",
  "key3": "kHCqcxYwNeAaA4bUvGuDHaePtcHnNufxtBzmLZ7WUUKpwjpXC6cwu2fscSTEFNhHDvkji5PSbdJr3QxoznoFZWV",
  "key4": "3x1dgf1seJDERPMb2xtp2RBbbVouoNzsy7hWnYJcPnmW1JpMQt5DNArHaKA7zi5dC1dGj7oJfnp6NixaR4BrG3Zz",
  "key5": "5uvwspZrzQPWdYzmTbB4RzjnFaXQ5QEY4ii5597uTUB3pMw9SqrDN12wZjMi2FCBuhZXZG4fDLZoHQkXp172KUUR",
  "key6": "3946R6jido36jzyAdg8rixmJMf6HqC6f91rutUcPCrydEGE4eS7bYLZRv9FczcT4u3Y44B1mJ236hEBLUoxuNd6y",
  "key7": "4yNMSy6wmgtswMc9gn1a7Y8Lzha1F3NdpFDXCdBVT5TzLHs8L3bTPZV2vSsy6CAxWii1D5vWx35LkbFwyPctftnE",
  "key8": "213Rbgvm4XqZkYHZ4Qb64RM3sftsGQFveDSTbSr3SNGqUah5gdkm8R8fNbDD6KJkJfjnZwgnhwGUJUnyuvhqYe6c",
  "key9": "3CdGwHjjxUQmyeveBbU7wHDPytwFYrd2ZvjZwMygb2V31M4WEq2q5UDdqMnua9FzycmCdPhVPdzpqCcMViytkETc",
  "key10": "5nef6nUwbTkorQ1FxPSGjxRgVt9rSRQqh5JHJqACHZZ7dNioaiJdKJtsRy8GFk1ozkzPVXb1bTD3awmyRiZdbwmQ",
  "key11": "3reVoYUDAhf6coCaBmjTmJ3TbMfg7sTje2La1e3Hy92Pbr6mMDEjXYMZ5Xt6Q7Fy554oNFR8U6y192JpRoSDL9h7",
  "key12": "5zVFxJYHXUxd1TJaZDZZXDuGQH6mckvQ1FTrJvLnQnwwe19fBEHiD4449LRMZ7zNCC1ptqP9T3sQAvhaCRywZuAa",
  "key13": "9PkaUHvX1jZbk3zozuLE5X8JNTTHjDwgoTGYS8RzQ6G4KfoCn95LxBNMUHCXQ3gTWSZwWRem2GazFsJPnY8xdKN",
  "key14": "65JFKVACBTcdWqHjjJ8fX5rsiphC4bj73wCLAAXuy7UzmvikP2A5Lq1Z1NyqtfFcALddJYm3CRRJngATBKTzEAw2",
  "key15": "5jn2AavYD3FmRMtP1xBAct89HpehVci6T2e7h7QWDiuMca9Vvo9xTonserNJBoUgKMW1QD4MQ1kqAvigTdLivqTe",
  "key16": "5iJ4WtF7QmBQpFbmBZ2k56Uy2M2HhquUXjgLJVpj1onExfx5GpsNqA8MbZPpuDGqfXdMbYnnyv2L1oWRMJdnjurS",
  "key17": "3YpSciGKYwfC8h3TN3HWMpvxiK7r9rRtU6cHKZxskJLMKf8kVVqB6Y8kYUZoapdBoqfzHy4Sm1ka2YLFpG42FtpD",
  "key18": "cqxQi6zjLhV7jGyKBWgT9HVMoaMmVxkK6Uiedg9hMpRmTvyYLLMN34zaiJ34uxdTsautfxpQzbVCQABbDD2hRef",
  "key19": "3on7iDWc3XHq1FzYCH647EyQy4LXX34hZT4Xc41cB6rxAz3Yikjpowrr6aG15k7p12zfvbN3UDSh2peUPrBRD35d",
  "key20": "2wYv2wc1vqopSdr3b2yhSoMm1GYPrZbcuMcLXNQZtziXFbCavophq9aNkpm5iPVN3p4JBxaAWXfC2vpqSiYkyVQh",
  "key21": "319mHFWe6fxJPJCsC1pypHHYHoQw1xdycDxadRfPxjjf3vkyMGc7vYVxtJCRqoFeFWmTshPCbHL74r1CyvBXTWxz",
  "key22": "8qzEKjuRd8G1ySamJtBsFZzYzi5akg7N9dF8NQg8ZPkQtwD87vgeChczGXGH5j5tTm7ueKgNLVab7QVxfSTJDLg",
  "key23": "5TZye7w66FnYtkQdfbTmNshBU4bSETpZ5NnC9gJ8axSkHVXRjvnqRkYJ8nSDMHDUHHzNrrDNwC3wxMGNN83mXo4p",
  "key24": "3bX5ZYThiV2jEJQB7u1qjvxAJgahyWuH3JisYWfDJ4xe2EjA82ufgY7GDWskCaC8YoNX6K8PLdKHGhBqNyGHNuFG",
  "key25": "5qLdbDmhi6uCcYfvxffwnU3Vxh186wHxJqdUnz6repYBnYRjnxFRhPxLhxegmQ1tX6jd4LxgiroyK4NUccEHN1wL",
  "key26": "9h4YRXQJSdtYvYjbqwxVWGbxsyVsK4GGGPkgHETF6NX1Yr3H8KhGbgGXyRyyjxMgqo7aciGncpUAUTEhy88mBZS",
  "key27": "4sBsby5BHFsPaj75su1uVuRaZnHGuc37Z1gYzJWKd9AjBJ8GsAkLEcPFeDiDAtdRFutAoF1B8Whd2yYVuq7uqAkU",
  "key28": "2o5WeBTWTuAXhrqxdahtRYPSaP2cw7YxfJ4xvLduMAoAzedx62CbFt7a482uKprREX1JK5vSApVsfe2zF4oihVtE",
  "key29": "3vAG73q7sX32vsxFg1ucdUaHVD4hXAvT49ksXP1SAHmTCRMWLxACTiggXft4YV5hwAgCVn31Sn9VhTVFieVew1mz",
  "key30": "4V3XxWtcjLfgh7zfR1G3nSyt4zH6vDZN5FVmqXC47q8wqTmou8ga5phC4yRmtzXtXJnwfzuLx8vVYGXbcR8FCg5V",
  "key31": "NbqpcVoiDRNkRBUtU8icjiexh3EAjQYzbXtiJYLs4FCNe5fefuSE3Wn4o47hfSibEVaVm1W669jf9tRyck9aH32",
  "key32": "BiSfe2Ry4v7Yt7dFHzpjP1BKmaX2xNbucWB9Sw5HkFXzr28ZW49JSnWPUJvqtTbaDkHctN9KNUB1ms93W4udva3",
  "key33": "55cadNtjyURo9Nb49Sief4wCGqoWdutsqS8rpwDzyYScU1uHQkqVjc3WUh8sEqBVgBP2Wg7VjHDMw1M3Sso1ynJ5",
  "key34": "75AuccgMRb695JiruyindxLXa9t46jc4rZpoJPbssKpgFeq5QhgtjRRjC3a9ZRjdksftuk3bGMnbSiSt9NDL3Qw",
  "key35": "4rwixQCVJjcYbbVT4u5ssptSxHWTETEwsLDrU589EBe3cfGDBVGbijACW9M13o9pdv8cL8fbto5ZbvYc4UHDdTk3",
  "key36": "5mX9pMkfvBdFhAJYwxoJZ1kBHp1TuCVYfkgePp7WJmuqmfZSV96vMXV4mmqFhK1Syis126vMoqVNt3JhvGiQPr1B",
  "key37": "3YafzXnQJ6Cos5Xq83g7uMMMzt3i2x7ZL8iVS8RCUid64Sq1ywzqChKUubRLMm8we4ysM1B2VnAH6YCK8vZJ2BWN",
  "key38": "59KaNc5WgUWg7DbKxrvArmZBP7HgE6f4jgydCfgvCipmiw7TDb5NHdzJMJ38mSDnZRa5sxqnCsVNaZPzaEiSb9VL",
  "key39": "XRUQPNX4fUyRESGSkusPJ8Fez2fZEXXBn58tcJNetwUnZ4ahxkEztL8pRpg4V9T5YrBAhpuye6AQjLdgCbEPKkM",
  "key40": "311KBv1F58F6rAKagH7vVJEnx78UP5sUEKM3nAx9uaAfRzHyBeobiHfAEMhVq3eRW9L5zSp394QRKF78JBtUTMAz",
  "key41": "5inZA2u1NUCr1XTw4MTTuFEAFnyGTVJoia9mjeDydtWPguPB262e83ak8eg7tgVgtKTtRU6mtpRAqS9AP5b954nq",
  "key42": "2uBEdCE897Mz7qXDRMJhQ9ujyhgZkP6Vr57iF5yyyMKSj3p89wi6WrGDZvQfJG7N9fhGTtUFPic5Azn48Jag7yAK",
  "key43": "2zLirsf7yWbvzk5hutGehtFxPLJaf3ip9jAGQEusNPGBtZnBqYgPqx9VwFZLcy1usoWHKmDVPyFMreK2HJbDpQyq",
  "key44": "3NJtWA1zAedieKK4LgfHqWajeLoj7muCBNkPSeayfn9cwLxvfwFc4zx8N32N6B3KPLc7KTcwUvZBrQSCWAvG8igD",
  "key45": "FLdkeuuLMqNWXRzWQzWR69TiyYwtFpKGYdjve7xhXsVKKR3e5mVdiJLHf1Yk5Bn1CboREFAs1AJkYnU8Goa8NUT",
  "key46": "3kBCZD1X5KypQK9XU8BdFU8fJGx8qrfJqdfFwyUGbFKhp7qPbWJvCDChm61uDE2YnjqCfwLyrCgYnvtF3jGDxokW",
  "key47": "57Jqj5NA9Uec4wLWhfV2xssucVCegdkPnvwA9TnzQMRHrH4rVSyfydq4xY7hBFjAKssiGaJz9EescycQi8hznHXT",
  "key48": "hDgQZevepLejwwQ986pXhwWT5yqiz9GtmzKcq7iPp2vr66f2iC2dLqPFy5RtAPa5AjRyP53LMU7NyDenhBW7khw"
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
