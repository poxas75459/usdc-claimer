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
    "53oKwZn3B2iEUgQYekBKMqyE18crVqfAtjsMCQ8fii4P3YGZCw4BwHoamgBbSsV2EgQBGYPzjmiw9UUw9WDviH7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34MN3WWVJqJv38dVQzFJDASBbRJj7CxrBr2e9eAGNjczAHwx1p4fkvuSfK9S5pmErF2nSUUnsmoMSK7VL8Nfuwdz",
  "key1": "3jCf4AsGsjBBmyn8k212hZsKfXLXDH9FBd7k6fPAcc4AoLFMCJzaH2UmnTEucUi5r6PuDFPufBoGWGvBNjYmX2LT",
  "key2": "ddppWLqesh7Ybv8sCbPKi7DStNLhimsWeb9MFi3UnBrEd3GZFYWtULT8yDNBW9j7ubsMEEXy97FDZkJEvzcne9R",
  "key3": "3wUpWZPDn8sZwBDBZJcCrkK3V6jUQqAn2sT8GYsDQ2ReyReSudv3YEw5izw5PeueGaenz7jSzmgTo22F7962gZDm",
  "key4": "2ruAytfHc8bSMkC39hqtqPFaSYRKiWDj1pRbtUetmYfaStkXDaqLeKabQjTtrK9ADAvNHQ3GJ41CZy6XhuPgvzYK",
  "key5": "36iWq7n5VczeRrpDBpmivwfYamJ7vp82aPxwqpm3G3JKq6rJ5Gtekt3cwxUnQRKqUKUw15SrTPphEBUenrEVA1Hr",
  "key6": "57Vko3exTF5dX4thTbbQLGvs1NFdNy2j5qpvxjsgRRv5hxDX54D255WKkoVPd2B85MV7YQAvpBGVvsyeu6ZkohQ5",
  "key7": "5LwpZsTpAQtUFHQYGvmavwJZfpgAf2KoB1Bp4GL7631XwGe5ACMBv22CEpNyWHJTHU6c5ykYyTz5E2bg1DWmY8bn",
  "key8": "5SVotLXRxhdCgKbhbVMCBazdcyzpPNyVoSBk6kcuCyGepm8DKcJvw5gxPk4unk1w2fLYrQL5ESTVu147nsfYYidc",
  "key9": "33umaknvSULPpTEAQzpjphYPdwmryjHa1bmtSJQAAP91rnrzTVsYWXnCZcpNEZ2D6A8572sN39LjSbySiLdd8yGL",
  "key10": "3fwydPriCqVuZ4Ta7ZUy2v79SXhjkFifXrNvz3xSPWEa7QNxX371d9XXh742adDH5W3WpYEfHypDWHtmuYEVb8K5",
  "key11": "tvZzEZtsrDvBQnhkL6MV3iB27YCn71Zn8vWYsvQuE2CXHrLgVGFT768SxitckRgL4KwEc8ZT5X85NEjF7iUtxAe",
  "key12": "4wVkuAdmTDtt6zXaUEf6otr38gWWdFP3oiZDCxZy7VgmGge4kLtw9DP5MUL93pysBgx5hUGG3EGYmUuk444MN2Wy",
  "key13": "zEeizxFYV1hBfXHSVRExf22uJFg9c1vGthRYqMj2ZcYAXi77iDF5yM1vTdYaTrJmENoLX7aRFyiit97WnneBHEM",
  "key14": "4pQCAVm39Kdrw5ojPcyEDWXDa4mftjqYqa5YZRA6Qn3oJEdJqPQpwccBoAwNEbZa2imJ15H3YLg4RhFuFimv5c2d",
  "key15": "2urqW1Hy9pQXfZfU4MdynyUPBCNn78pB3fk1yNmdMV7EAzf3hGKuLHBQVdvX2NYMbjstpPENZz3ipo65AoiUZmUM",
  "key16": "5PscYzd2FQy6bggEWGxYMAPRZXBy8cccstSR8VewySE8bVjiaEWFDCutkX9Rry6ZPA29NrFrizKqx5oKWyUSejQw",
  "key17": "xvXqPakJdWeCjY1kZR47Hj5gqyuHeVriXmcfvnyHKhBUm4ApzgsXVcCP1QBBLeqKqckwq1HqQij13Ex3KtGNK2L",
  "key18": "4MGzJ9UWSB1XnZ1e5RznmgfJrSfPN93qwDjhnamA2sQLBsL5BvtWNfmwsWsjZbjhyEnzwLgJywM8eR3WqVGiKMK1",
  "key19": "5rt3NV6P4a3omZYyYRt4oaVx9Eo428g8pBo4NP3t5JKnjpYDeJuBJqmnXGzPtcFqQMmYSK5WfXiW83rRmivUaxCn",
  "key20": "41w2KhoAjvERUP6rGzXZV6peJn1WSwQdPT1cYLXMsN5cDHpyMQ8NbifRG7byf3FFHRHePzsRWLM24wuezmFsraCh",
  "key21": "4FcjqXjBF2Wr9dsu6njz3iPWjDEgsH4JaY9BBdjGGKWC5m1vEuURz4HUdFoy6YfqjW3UeKNZyd5H8Jbnj7E7ZecN",
  "key22": "5TcWZhBfX9EMGvrK8dAH4hE8LVuxJncAKuBd83NkrWuJbuatw7JbS86ph6eYLTSDAMCHEzK6TabYrRBZ7H5kan8a",
  "key23": "2kLZiWBLEHZ6tV1RqXhdvqb9Prej58nXxKcEVdz22vFyuGMSBTLpCZknry2GYXUXuFpS3Bs2q5QsMFJwMapx2dSr",
  "key24": "2mSkUzV8tFBnj5Xarh3ZmwWY4duZSktXu2nQpAR5JS2HEjAXKsj76Lh8pv6QLEZDf27yLKLyCEzWbHxxEUMdyA1j",
  "key25": "3Gx3tx1hYWwaMZGFeBwSZXjMEydQvpcj26CAb8fX9mduhu44C95zQXwFzHJPLtP8F5Y7MQPrkgrJ4xP5NTT9zXo",
  "key26": "o1YBuEEGwEu8YiUdQtsv9M3Tp3dKfmd7HTkYnLDtbcjSNMDuQ3SqhymoVntj16R9JzvapvaBWQXHAu3R6MkvvQb",
  "key27": "aJhRjqsyeyetEoYYxyeknghXbRkwrCscEzSykqmmh8GQJEfCsMzVfaaAUCWjdHweimj617kMaApwcgq4a7MkMXW",
  "key28": "5tQcRK7kZFM1svDVxaUcX8D2W4QX9mN3uLuxPXBGunDz2CVDvyR8fmPYHdezGaCUUsoESPr6aT4hvww4HaKzcn3L",
  "key29": "2eCJtrokGvNd8i2Gtnpyng51CM56EQHcDa5NCvXMENjEuCyK3CkhKdrew2HCJoi1K5DMUbrNNbDVa1VEb4yvYx6s",
  "key30": "2H1qXM5mTUaPykHApkk61apr6a1i4yWJrmskQGYV7AVSHMtwTNSHVcJGFTx9Ffi59cZC52h9S11sGbpwfyKUnPaV",
  "key31": "32fegSpst9nQ2Eb41mj2U1dgAH4sPa78DrhMbjZF5yhGgEzMQb1jX5T2h3RQVUKBJk6WtYMesqAXy8akhpaxRd7g",
  "key32": "2yLZzAm8YQgLHXWJDW8F6VSUFwiNVn7cBxKBfHqfqMZNES5aH7Mva51uPmLTZJFruHpCKoMf42wLKzC3XQCZFz2e",
  "key33": "RDrLnFFbYi1yDJccCLnpqy3hjUUrUy69rBQ6beMoR7AEeYhtZ93qkW2hh76egFxrCZ916jBhLN6v1LtKcqJRWpG",
  "key34": "485Xrxq3JPynfKzV1NwAkU5p3hsRTb3EM8MS4xpWJWgs91DY9Qd6YmG3Dumh7VqEVLYmD6vEYSHAaPzygtp2NEDp",
  "key35": "5qyXERyFMjffbKA5Yc247Edfinx4wXBwZtmUrQkUShY8M26rtaKdC2isFPnsydrstUzYsEjSqj2y5pddFh5SjnZk",
  "key36": "she9dU5hxvDv4kWUV7ctGjLMvTGpbwtJx9jrjMFRufkntgbTuDyvgs9q8XfEBTmrrkPRXmUipP2kRdXXoiSqoz3",
  "key37": "97zPdQhXMr3fHJKtebTedMUzFUCAEsBjUhYYxwmjA5ZDyHnkvaVDFDAhrVWPKv4YECAjJbxkfxib9Ec4WeNwRrr",
  "key38": "HARd53E9WNg9qtir8TaZ48MvoScJr88UaxvXHVKfBPcr6Rj3E8T3qsikoety6xcob8yGJ6UNdZCMiZC3pdTtPWw"
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
