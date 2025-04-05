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
    "K8vB5zaJ9eN4dJSzY8cjLTuQARDEXof3mxcHpbwL9cVR1ApSVn8mdTfGfRj6EJTCfHHVXW8e4mLDDQPpXGUxVQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kfiurKnbrY3AGMRdfETd8VE8iseC1i5WdJUDdx5a5Nzsnis2J6SERDiaN8HyAfwVqPyPhqGj1bu57Ku9hrEm6zz",
  "key1": "4RsLUoB6kLv3cbPatxSRqr5WRk1nVJr7jYs6pboAWzUyxzaHLU4NjyiQxJYtgK5G9nZfaCKWtLfumfMhArTNZfVc",
  "key2": "3bNki3HGSGVARA6HWspv6gob4VfFmvA59iXZx24unqKYdCTnnkSQqCyWsUECfYrRzMfosop59pPacuFoi4WBy98W",
  "key3": "BqHWP5DRXp5yxWtCYPR42CcrN8ctdkCoq9iieWmHXhaauQ4Nae7WMjrhWqNPgBr6sLnPUQi9165FQtYmeEWDk7D",
  "key4": "49PN5bynjBH6wkiX2UsTabU2bK17SiBaGQrg9VAv3SVNDoDq3Wc8CrWTsWv81DN2Rxt8z4HnAC7k9yvjYk4CaFU6",
  "key5": "HsNCCX3HmYrryLjJL4L1BxJMMJcw17xm7z6YLcRX8M7v9RQHNwjDyRmpVFkvhDgUt7TpTY1DgWgyE2oyRDmBUG1",
  "key6": "43rimHV4kJoob8PkD1MBMgyvSS3D8c6hCdnQmGcgHJE16PMkqCgSFPS685sz1mdWkKkQ39puVvnyBpVsTJjtBhse",
  "key7": "K3vZCB6eePzmTC253HpTaK2WcvdAVeUMRgwR6cJiy98L78vJRMUTBafri215ALFUFMoM1cNAYhkFM8fiSQkojmH",
  "key8": "22dXfL3PATQeRASPYuLCrpw21tWvZk8qCDJZUKfr6ivhsHRQMTs6QzvpQZePW2dqeAViyh1JF765EnzM7gDeYi5i",
  "key9": "3hJzcb58eoFksRRf13EEZMXrivh2Kn5T8tv8uzEREvCs7ixHCeiNcy4AHDAvGfLvZEJcVLntqDGJVD2rMHvbWo8t",
  "key10": "2AKM57FtBTnj9oZD8H4soMvFECgPggiKYqZZCGm6R6tGJ9srZhyn5gufXco2m4zKUPCH9Pz9DWGbVzksTjcQNyjv",
  "key11": "83zqxHuL9fUJiZ9xbPT4qFR55cNeGyXwmBdBSogM5qwNvfGGnytyyDmwecGiFoKHfx8mX1YFMHTubg7HMk8xT2q",
  "key12": "RCsybRrYaPhpjaTrwetk8PPHKKiHBhvsA5GAs9tfg1aPKa2xhrYmYuPnBkvx4DRVU8MA2mhBib9heMxsy2yE1x6",
  "key13": "4TEGdFFu3Jsn6YCKrVqhFZkRcGScNivgH5xqZBkyHgnQSrbZgxRaCtAnyeuNuE6S2xXQybGTQK3UT65WrWCheiUy",
  "key14": "5F7edHqRsUvAhoijTpAJYBHMwuPu9uqkW3iH4HsxjuN3p2ekzcZMx8z1VxGKxSfGdPYfMdsYVpKyRTGn9rbndqTY",
  "key15": "43spZKhtJPNvEgZBigXcAyx7aRFWAVgMrMewoooFAbmS86gbkHcCG5voakb2hdpJ2LaXkSvQWATE7UHSsuQvTeCM",
  "key16": "58HrKLqFyiHHdgeq6p8xLXPKzXwqQh86SmaCCkQjaRzehEtWS2ithBxW9TE4tjWSE3Eg1aE94wJJcAbKJAPiT2tS",
  "key17": "3zZPi34xpA1UWpdUJrsnqu2ySjPKV6tsHcvQVDWK6uFJRX3hhmWV4ARDugqpAHtjUpwiaoZofDvJPAoEQsWjfnY4",
  "key18": "5i8YyWYpptK5ku2WbmecsurcUcVjhXy9QBut2Jz7zomzscuW4o5JnMcBqSzbkdU4KjPu79uxG8fbx3xxdZbEBUJu",
  "key19": "2S2d7AV6nBnCAVRsQoACFaaSedMC87seu1ZJfi5MGPJr9vNFZkw86ZvSzWaTDWvJMBa2Z8HotJFnQjy2KDnf1mot",
  "key20": "5YN1Vfv3w63fiAYFGZemdA9gn21rv3oAyGpAwEdgWiqFuKSt6mUxNrXJKySkyR9S5kW39tVafaEdFbmVXP3MK69a",
  "key21": "39NoKvESPz1Ke4ynqZh797XeFyHhVCi1pC8tWRHFzGEdrANPqdpoUaeGYtgysj5MSttwWvVtnKYH7ZKoFMYcWYxn",
  "key22": "LfRFyWy7tuHQNJv1BP5XnHcR5dz6AZWEmsaCXcMcyBkG4VRB5beY4oD2yHYy2USZ12fT5vtFaf9u1fJjTfKA191",
  "key23": "3M9tepqknN2xAfTo4un3amQfjNoBwdmRCZkUas6pxZB69SXbNoQBMY1Ss1ktqxYpa9vqaEuA1beENF8VJ4HSbLaC",
  "key24": "kP9uix8kNxHD2zbAuqxJPCuTRZLqkQo9ARVEhu78j6NuUSrZY9zy6wPFaHS73DDizWvUMzjZiwvezFrGjh4Fpza",
  "key25": "3FinnaUBHgNeA93yaezpCF2582ywdwASBF72a9Xj7akASGbF6NQtwYnCKmDLHnNbLfVgCnFS5yCy1FMPpp6tvqMx",
  "key26": "25QHVNvFhz2MiCrHAnH3r1eAuWZKXi43g7x7NUryz1N4y5FbzhuW8fMsqSvgbZQCN3qdGXfrYr46q2oJYbt3MQd6",
  "key27": "5nc5WZEK5GU4ARepZksq6kCSK7Z2RVhc233iGszYZVYtid4Zmb7G23zDDjq2fKEqWovJX76nuLNVHtkuHxiW4D7B",
  "key28": "3mY4pq2HzS4oDfUj54MzEzAyR7SKJ1mNU69WxMPxJ7KVCyMjf5Mv9WukkQrRKteZBs8AvYMa9AvVGgzNXfZ1ahG",
  "key29": "5dD1snANo1WGDdYUAEG7xm8LzBvjjiSnz9pMSvJcSUoxxC8tyQyFSh9UQxbP3jWUejtPhCyMiYoBZxVLRokKvSsq",
  "key30": "NYZf13z1paqXrGA2CXHYfvyfwZ6tTHzFZBL34JCnCa91n7XWTvWJ3QnJ8m3KLEGemoenLv8oWCiT9zMK23ePVhQ",
  "key31": "4qcGNa2FACD3Nb73jWyJpc1pvBMUP3qZc79FACwZz1iYeLsNuqB8w69hkxjXgjtX2cGohtiayyUGBURedz96jirs",
  "key32": "4kwggsV1mRKbKgnJdH4WuRr6ZUw9iSGZ42NC92vdUKKcPw3bNVyuxZLMegG25SmoBUi4V3nYHRkeuDeayRCukqXG",
  "key33": "53qG8U3s4JU55VoDh8a9iFoFzAPBgHgt6AFNKCoNe8MxjMW6UHTeBNnAJAFsmfwbPt8kbmygizDv3rfcNTuHbVnV",
  "key34": "5HHsp7TgazaoVvyLcatcXsHxYYTCorQbavWwYDdAT5oS4R4ETJrjh3ZyP1tML1u4KiZX9fJFpHnx6YReAJxENGzH",
  "key35": "1ehE9cJREt9y3Na12pPpFavGPsaWELWfHbKjUzMLLsUksE8744iRvYHaSjZ7uFuHMRrV9oFmZ2YMWtRwmC34c51",
  "key36": "67MmqvNX1L9jyvMCKojbfgBHXqKVVf2M4oQt7pxWtad9EgHqMHsA6NnZz6VASi2snMPpAmsikp6Q9BxYt2ivSgat",
  "key37": "3EuojMTmTC9ZZjXxo8pzPLmAVTZ5RRAaCDsXMWTPUsQ99X8FCSeyzbNwrMPxJSjzCcC9ECdDzFWg2zfYf8k7raem",
  "key38": "2we8i4T2QyVF7yReu6QgyHNoRmfQZZZaYsnGQW4FT4Fph9if2Jw6GiaYA5bXfhZRpqLUJVA16n1un6PPtZjKLZjq",
  "key39": "5v8poc3FJ7u3UE49kTebNFT3ioxqezdrcprSxYuiEpbxroTmE4cuSrJFRnfbNoKDVfxam3ZEKXKM88usfJTp31T2",
  "key40": "oKeYH2fjxGRDbn7bRZEpecfizFt35XBu5Ao9J6NzcfiKQTfKfFKZxvsEaLX4Wy84H2rWLiwLQ4FK3oorAiNUMQE",
  "key41": "4tuPeFN52ZFJns2HbeosTgjourmpAHxF7AEbSV7FjkGi4UTysMTosojDfAuvHwUgPmShKFtiWHvRcW7Y4mQewePb",
  "key42": "5sEXfQFdtwftTF3akzvRppGXMFD5VhRArAVqDzLUPD2xmZUFUGBbuUsJkffNQFJ1aW8Zg2drcNw46eAYCVrxu3Es",
  "key43": "4m6YwrsCaioomHVu836hz63qXSpbBvd5AiARGc8G6Byq3oGk6QMBChffjLNnMPjJvewTxB4mxjQdPSwKWjh4wSW"
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
