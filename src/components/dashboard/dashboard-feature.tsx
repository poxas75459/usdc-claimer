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
    "5WAMBKrX8pJBVjncQ3UFWPLihNeCJyva5vRs59HroasNMnQiJHvjJtLE7mv2dPQkeEqMbax3CJhHLop8PaRwTHAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KnqZgZArFVUjTpEP39rHjfZNGWsot8BW7CwDmxarfvAn2VW3MR7Z3DtgWZDcyzom53dwscuQMytyi9SdzfbHKy9",
  "key1": "5DZMfZG5HtveJ5bKtfDnaigyfiFuHj4DV2GGzrEJVADLEXERvSNKW7WuCvuhkBe5WN7NxNSCdbnCNf8mBBzYc7uv",
  "key2": "eb1fdG7YTY5p6gpe6fj4FaKevoh9LVYw6sA2jG5RiGpHGmEZNHw2iMA2i8FYKyRDgR1Jd68ULmW4UipGubBsYPQ",
  "key3": "5Qjvtw7uBoz1rieRNq4kECtVV9Y9J4QABnsiAMyEFBxrhd671xhva5gY2fKRcB9bkXpcFPPoNdTdAWCiE6iYUEsF",
  "key4": "4tuLEniAWx5VR5Zh4dFaNyaFFy9BsWGKFQr6ViunLccyR3QBxpYyre5YP94GwZeon6Cg9AC1qAE7dWaNUBpYP4Po",
  "key5": "4mNPMGCe4i5E2Vn4Yk2SUrniDvbMNHhVZfi11oaQe1aDNaUf5GzzU5Va5UkALoK4SgUsgMQ25M82TaQS9gY527PB",
  "key6": "i9CN2jYBJ5aZbCuriSGjomQACQZAF9nfDTYsaqaJvJwNx1bnQjdLHDjhvPB2NytR4iZKD7t1JxqwscpJ1XS1meH",
  "key7": "5uw2eroCvgz8nambTKAkPyxjaJ14DcvafgsFp4CjAuyNV1c2ofP3xgH2EJjyZE3qeQagfcLufFJWQvg9awG6LAin",
  "key8": "EbZYA5pYKCdA5wuRAhSKRNfkGcK4oyB7ymoz2u7DYyQ6U4HvV6cwZCXRDSZanbPVY1ktGFsoQCUceAtVDntoJLA",
  "key9": "HfrYo7XyuibrVYUgDtJn6UaV7ory1vqaUiMMMR4aUD5nB2tc8PkT4cLdCzwD71QJnRTtA1oB8ps6ueemPghH1G9",
  "key10": "367Rk5Rzv4kgkNriiTowEebiGAEbKyrz4aeUvFMtXGDvr5DNoC4X2dHCrhvTVK6QyF3p6ekL9tVqwHKjpm8v5KH5",
  "key11": "2EnUVAQ7P9Yfjbi8G3ga5h6MdZrLCNnTcq4nh9V3NaK2euiBHmpR4ui9eHS5qwtHuYQ8pZkzGTjquSdHehkyTV7M",
  "key12": "4uu1bTdqE7xzoE2fFmP3J787KSjBnUJ9ssAmcjRqA3THTMeLVxKuKKYXU9geK6792HWQXXnzCFq1j84PHCnFWTyv",
  "key13": "2y5LiQQZvp7pP2yiFjZHLtd6ozHW8xkW3TGSoKW9NLSqK8K2SpkdA7dNoePTuVa5bkBbnmtkFJUWtKqBYh6VpTZf",
  "key14": "2xBpoM2GeyuyZfFiyGir95wNi9kGdWsTpRaLe2H48Te4EaSBakVw3W1TsVeepSJLZF3HKwYQbLnFRa3V9tCRqQsH",
  "key15": "44Jg4WoXDn5DXo1RMbwGtiyffTXBPqymECyFR1h1p7J123PBZyni5BbYyv8R6U32HxnZvE454XJYo36UoTEB3gWS",
  "key16": "ywaSwpzsBiuotJNmP88VnEFUQ5ZTE75ZcirVkoT1s2x6HmdcwmrGtMjiH75rUgukm7Qmp18Dfer7QQrSmyRxfWn",
  "key17": "5bN1w67auax9vGCJRw8GFWTiHNDPBm7Hz8SinKTSdR5m5yH5Dhkj8U4SuX2E8CNv8h36Dqb7ehb3b9pnDbG5Adrx",
  "key18": "64i4M8oiurkzUMj3FMALLXnSnZHdEK4Y6qF6kzyJZjRtv5kKnPNoMS4gV9nqmfj3S3xEPsaGwint5q7tpa6up3Zw",
  "key19": "nfNRcYV8PkzPBbCqDZCApkJJcJvEkieZ29kU822Z6tWvsgiTXLWhkqyWnaxe7RNoLnXtsAHYYcVPNwdRKHEWr8b",
  "key20": "BuQpPruoDeYkbNpawhEVKVXBJTEic74Muvpy5Q7gVnHy4Wt6yHim6jqQsv2NNhUEGxgnRiqVRHvkpAYJYuLwQD9",
  "key21": "31o5m3HVrkqFTAqPWyx4isbT72jnLGob4QRUcYGgDfzmcNrfCgagNEH5SrfTUkGBDccgH9PxmGLd9pYB3stRCZ4M",
  "key22": "3QzPwVK323YkHdFoStM8i6xvYgtozpSR1xQxaR1HFjbm4Rt4S8mW8WyyW5HsEkwLi9ERZu2keSmN6PFZzWH9yqQT",
  "key23": "4Yj5pEV3RKSv39p1xPyFTWyKEymQdRnCCqTSTwGHCQTvNWZCwAzqK3WJeDcwzQJMC4jt6TYsPYq3cuiXm3MqnJGR",
  "key24": "2kf34biYC95ZwEXxJ9uuMqvpGRrYPzgsZkCV5u9uvF52KwiKMHPgZqyT7SYqBj9jUH6DncKgrH6HxSRddcZAczyi",
  "key25": "SX9BtwWghCqom2n9uJhCcM2aPmACqadRVrDAD1V6y5yvDvX6xDYKVpqWTpiBouUZ7qcGNntCNTouuPnTxDsQVtU",
  "key26": "3AQKB5pk8LEy28YCaGXe9JEVd2pxREAr5e3NruFJ2n8oUrUJ1SN7ejVFJHbrqFdn2wAH4Q32PH8vWGYknLzYeq79",
  "key27": "2fEkGX7kcytGdKHvrj6soKZCc1hHgzUPRp5Sv1qJBdUN1n1BNo2sbcVQ36efZSugpnUGHeLutmhAsMLvUxzc9bnP",
  "key28": "3FdBsHuWYMDM3wh2qRveTtXsvm3rQMEYVRs4PdNaMo7ewmk5gAqXCVAfoh7ycttNtmzGbWTgxRy2Rc9ox5F2beTM",
  "key29": "2fjuY6Lt6uHyNTrJRMCJ8X7HRwNvcEzNrfU4P4BeW3FP3TVCATs6jMumyqtWMnLtUDTN9UD4rR83bUP4MsckyyKq",
  "key30": "2j2o9iCtH6iFjQuWSp7AUPSfnhYHZzKBHuib1VpKSSX4J437RPEeDX5Kse89baNSvV4PeNYVvEQkD868D4EJMtAH",
  "key31": "5Hjm9DDFsZWerkTmpKf3YYBACknCoJFJeh2z6cGXddD5mFcW39PLQn4qyA8Msy78DE6RvP8kmtCoiQNqr6rmHuzu",
  "key32": "4xQXB8tPF2xLf4czDbh9ZXnQA8RxupefUxSNZwSmxjSvxkpgstjktqsaisHxVxdvbFV5fnBVoxcbxATx2LBcogQ7",
  "key33": "3ts4uKL87mqbvQGFggrJFadHSyUgaLsFY6LMLkD22u1VqoqP6kShFAEpYGYdPMkNpBkkibaS8yiStqyHpGQ64W21",
  "key34": "4jys4HNZz8wHceHLBrASZoX3zDBsCES7xbsTx39L6vVbKe9ao34Dw1FMMZX2NoRTVAi4mdfKek5supSqfigJni1X",
  "key35": "DE2NxfgqJvL9eZWmMCub8TAdGHyoETxcm6fkokLJUb29UqKL2VViNdY2aSQ2x4dtdUYDsBE1KjecksxciyorCch",
  "key36": "4eUBjzCp57krWgsgNS4HZ8GeaTZXnBb2Pjr22JTLMtwbVvRZ7RrhWjHGtqFAaKDHSK4D1cGffH7g58NbU21gbnhh",
  "key37": "2UsptjRPbGKQzcyTwz7st7faMqftM4u5pyWbged9nJb7WyMQtrbKbz3Z1p9EyPPS2EWjogkH8FfPwaN5bk6nLJm7",
  "key38": "2kupwF2aQ5Lv4LofRU7LKwpEYzMdWmByXgp3QgaSoxbYALGSL1Ve8FdSqbjPW4BiEivg4Tg9Yw9cJ9yfykse98yA",
  "key39": "3FuoiiYFPpeV9VkrK666WZcSYeZ7NmRRBrAPdzJbsoLmZjYH1qjApknNRYc336nFEpEGJgnyj79HqtHefYMWU46h",
  "key40": "2Ao1jbA72KtahJWTCkCHAY5RMdCWmnPJx6D4YYXtEkb3KR3ix1VDh3SJsbGEHaT5vdHyk2naQMF9mofT6iiQLSCW",
  "key41": "49b6shVWzX6qBVW5kpv2fJpNPuzn1nVfs2vcWgMndLNgpTb4GGmDRtukXd6daHUq3ARNp2zQ4TWcbSVNuP7ym5Yt",
  "key42": "2VHJMzKpCVNsbJguM1EHUQWUqFV7roi96VjUQnnH9aeUxVMA7pKENgK4uT3C5PNbKuYRg1jAt1SF5ZHFobALhWw3",
  "key43": "2CQEAaxuuTPz4qoz7WhLqaogMD54Aa38rDXE124u4kX6HNb6XFt3KnvapdnxcCGLksY73wL2rBLufgYvMWydBQYw",
  "key44": "5i2zDs6eFJPi4WUJGo8cQSpbjKJqJpT5LJnc2nE6ZjacKL6oLKeSuGkbmNXTm6APCzozifHSMv45H3Sewptb3yRt",
  "key45": "eHeaMvr5pPG329m6WhCa82fYobXwvtnfFvfEiibPRDiDr2ZMxp67rXR2LdbgiZjoV4Erc5CgraEN3WWmGeiJByC",
  "key46": "5qAs7tFbv6VKgSF8PJBV2PuuSHfebfuz7WmuriYhaNYjXb9Afp2cX4apsLoUSWMczjcYkFtPDuWs8uigUEd2F8tm",
  "key47": "66VcFJJVaRXKsKtkpnu9Uuj9j6WkQLt9TthZ3gQZjqeHrMtfHwUSVYQpMorBvFbQapq6yczZkjw88zkGN6vcTGzY",
  "key48": "2C6YrFKBHg8EmPcbVFwPMn1z6vbeATrFYiPNF1Qtcct3Jh1Z6qeCt9T1mtU6HNvo3qofCCXagqeM5vzuCYHDnVkb"
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
