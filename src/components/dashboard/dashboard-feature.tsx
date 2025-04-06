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
    "yRZLbmCJmGiReztYuakutCi7EDSkjBmr29HRRdvoo47cjFSea5a1QANyChz6hoqL3isFKqncwaULZZXHdnVSDYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GnKWYo1mJa6ydRfS1mFpvtnCkoCZHJXfTAmB9uZ9HVgLuDvnewUVeAUV8P2XrCvLrUdEHeNf6qnspqWnxyHDncF",
  "key1": "4Jew3MbNVWXcscHoruZYw3k6cmtqLiRYNGfL3AWtBVpoqSSwzKLDNz4BnzXEuChXTbtJnJPWkk8ykD4zcD5sPghe",
  "key2": "52MPkMStZDK92sEK1JmSozgphJGkEZxJTLjrydjh3NHWNsu8opGgh26h5WW3nvji3ht6LMPaUiVMqXMkdNjd2Xdu",
  "key3": "2fYDz7BZJK1CQJ2ZkD7PvJCeHDaLgznLRuqG4Bg6yDkv5egsU32PQet81VovDeFrdNmzNvqQU7TfHWdNmLguPJtT",
  "key4": "3yeLKRPbkPLuk3oRznRXgsK4rM8qsDVgXGpqxGYsnbwhhDKmKcDt1dRBQ2JmtMvdxPm1jwgXyU9GCSKS9QwLDahF",
  "key5": "5EJVHh6ygRkzCXAsq8Rig5fsn3wpYQdCRAf6A3QTAP5ToDisGcSigxpxNnaANGa77HvyCeMxrJe2kDTrz4mpfFvu",
  "key6": "4h8xLdokxbdnUB32NKJGEm36z8atXDJP1wvjqWwZH2XsYoGbRwAemWF8KsKuYuyRGfwsR1uMWgWq4J4Zb4r6LBvK",
  "key7": "gK2pjnmYN5rCuXAwBQLcPNcQLKNfjd49pp3svWiF5QDwwCfXfUJ5Ezv4r3yYbxJ1ouPx7dDwSMxWkDuT1pvvdcp",
  "key8": "4VjT9GYMhyAN4URJVQTBGpk6s2NHU2BggmXUmS7huMcNfwBaLszUvSfombBq1xcpbL7JSrGyq7CXCUrindXmUtUE",
  "key9": "LwHnmNtY5Q9vLinT6YCVwdGpfLTeN1JhsyJ572Xa6e2EPHiapZvUtZoRutZbpyNyGRuMBVh9MRnmBHuTWeQsovT",
  "key10": "2ovynFSkE5JWP8Tq2ixC3rtbkFLdDhyZiiLMAkzB6p7LXeXKPR6qU95ubvrd2oNaoCvAHjXKbMWpinFo4492CCD3",
  "key11": "haEVtwr5HCrCWVquFwMtanvNVake7pV6BzdgHi7WS4oFy7QeEPcMfHXC1zzRrGBFAvg51eUW5dkd78a5M12eRrL",
  "key12": "2LTXw8civitxWi8fmF4b8drytcqUwZbYpBGPtfdfYf9zKNTrybHxX5DWb7mc7zwY5mLYvYhRAxGa7nRJsfeci1Kf",
  "key13": "5owC2M1fh31KJyyi9yg7cPjRMy8c3mcY1F7mDgzz9GZkiqfrCTUzKtwGZi8qbLrQCrJz3x46p73sdLYbJyNaco52",
  "key14": "5qB8b1ryh8kdiZNTcPH8N3SyK9gMRFcWXL9LQXpvCyJKRHttTRnfQyZ2MCmAdSbqG9rsp983HpB8JAbwhBQe5k4g",
  "key15": "3Bq7D2yXLf9o2ikTUC7rnLvZuJdfNWXt3knJnuy4uh4jongKis1wvhRyeAFFiDCzZjS7nvhQQbxMSwbZz4VoQQgG",
  "key16": "BuMekJzekW57F81rHWYFa7iyRe8JeFPcFpnu7ppMUnEUdzSHmxz68TYzXkHzKe2KnUDd3CPWpWivZB7u69qSVKi",
  "key17": "26ysKAmrHYnpksdZCJrrAosdvUQ9UApYQqmHQupFW6HFDWDYiDf5xzPop84yDg6G53ax9z8TMCv2Z6dFn6pcV6pA",
  "key18": "4MZjk1KYiHk8EL9UpcsW5uhkJyFrXcFmQosKrBFAJy99yPr1fyPPso6v28ihYuJqA9u8D1PdrGfWYzzEfe981UqN",
  "key19": "5xjB2jgZLqxB2gkXYdXbR57hvBZQNnG47uPRBUXMoaG17ipvrkw2tpDDfa13haeJ9A754SEwVyBMoMvGbSqbhQVF",
  "key20": "DEWnycgWbrKXeH7C2RJqxZ1C2itbfRJp5LyLxbxBsjvZPd2PboT8G7qW688nvFkFAzxk91maDe36yiiemp1CHHn",
  "key21": "43FKWwwFeYrcdmcx8uABrJFbD22o8HHG6L3b9uXhePkVmBNuNHU98hcjwNHLdKaSnL3e27PxVF7FcycMxWgDUKfB",
  "key22": "HMm1SjkcoFa1okXDCgmk6RisDFfAGa5bBAhajpMeoutwor4aXjVkVTsKxhgGEvTmpqwCv5cWgqVk2SK7PrpXhcb",
  "key23": "2atHgTXnnrBxzNuXsFz5eEZkoW6n3vSiVKkhX8A1V52y77D33btxRupKS7oPh6QowCMCkwQZPwF9nu7cKj1PGMjf",
  "key24": "5b94d4NrEnRbXu4TcLoqHvX7osvkCQDtsz9KVAKYjtK5vVgQttKt7Kmk7r7Cm9B5q8T1dzR4XYUfcfHELciPc3YB",
  "key25": "2QwpShkC3GW8xNRxWHfPHGygUggisjLKWD8NJG1RnBjuwUJNVsEb8BktutsoRXaQUWPunu685mc2Skk8RAuMP4KS",
  "key26": "3vZh4m8sarAHZfk2cR5BmHxNWrePajadpispMZWjBayzHpkCXrkB1gFeYs7v6ZCrxJrdcv4V9vSi8muSwL8ghGQZ",
  "key27": "4dTh9WkmhAKJk58Mq5ZT8T615Z4KVsB9R2B75sjVKF8C533bgP7psow9tNWAv2i6kdwFH9qPhwseC8QaNemLTurn",
  "key28": "2B1pUSGLPZfa7JZVH4mkr2GemhuSFZGTLgFhrrZAspNRXaL8UkdJbTVkxC8dqRHHAk291LxrAHnB7pBoYCYEyqy7",
  "key29": "3i7k3mME3WtVk4cpWGac6PZdQqKqhiLPvzT5YNP6xzQ84GCr4cACKjPf9wcUGw3bhd7BRbgoL6LgsMqqeLshxtQF",
  "key30": "2AJz34DndMXKFCeUXouZRoQhELStumw9p99AccSbFp9sRnH9fZmdMRTVsyuG7BnnGT1gmX536WsL4HXDEF7HMM7N",
  "key31": "2K3ufTxQq4AFVmkBDzSpSaPGG7rmrWHapG7aZ6JWsybANQaeFUwmNm4qps8AwVXMPqFj77iun1YikeZojCGwNNot",
  "key32": "4D4ouu186y5vyxZCuaEUFtCvCeMqyMp53G622V94bPcbTLtPa26cYKNjcj6e2jGCEvtLNhXkT7k9RSgTLXaCcsYY",
  "key33": "5Jxy38sHTpKmdaoHxeumyerGPhNLy5qzqsNHhyYuWuq3tWsbkqR8oTHeN4KjPRAdoCPaSPqutaWdn7qc7mGUFtqX",
  "key34": "2CFqDqhKHHUaFyJpJr3rP6RCubm7Pp5G5umZGPLPraMayETtKoKEcHdC2uMFcBmBp7h6xoqRYZaorvhTG4EjqQxo",
  "key35": "5W9mez3nvmnCa98cTR9nMEcdAWwE4X64NdYYqoz9dtm3rTgEW3JYirrLbLMM8JBdeTkBmRN4yorh8BRkyrufnKC5",
  "key36": "383iKT2Ujpqqk7XCRejtqeX3mzm4PXsYiX933y39qQN6CDwC8cp6Y3cW12djEcsoanwQCBNn9WYQhKJtGJqyfP6J",
  "key37": "4RHoQmtx2Zqj3QLE3o4PBm92KjXBD4SSebeFNseXZd8KpVcLt5Tfk6K7kWokCAgmiziCyMMuKqeNakgDKSbAgxcH"
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
