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
    "29UgjVdw24p3XFwLo9U88eT97PxCaWqXFvrgNbxH36vFqAWwQHNq95cGxqFeoqQTULcvQtJSWMdDw4mnVvjSJSqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HKFbXh4imFLWZwMHNQEyz6UpAnrZCsCB2oLui98fXyJMbx12wj3R6VKscpdcGju5up4g6RGESayj8AD3JZQUfFY",
  "key1": "4tqj7K8xA1gPHQVyX7YYGbZUMECD4EzeGgTNdtxZPWELwvEhGkakUPfP4qYhbNGBeT2VEmG2nbjh2oQWH7nVX2XH",
  "key2": "4jCnb77zPnPiKz4asVLCkd973V853G6U8Cgj4ZhSKzzSyxGMjQeaz8oXDsQLDRy1VYLGysfj8ryR81ziAwBbWGAx",
  "key3": "5M9s5fBj7am74Q5k5eEQ4qfL42j8C3cpCtcoaS2AEb8VZwwB54KGFS8mEncs4R2uPfQ2wfvZHjwi69NJmssA5xby",
  "key4": "2RhzXwsuFRWt6XACyN9LP5VS2BWprj8w4UKKFGGLJnnoedJaXDsNtA5AEuG51oR2i9hDTPxQAgiEiHUdHzSZWMDY",
  "key5": "61ndNhLzQMM3E6MwHCmjCT6EsCc5ZV9quhnQfdak2BdLvro4PwLktz7nt1nkKVbgmtfKPMD1nUR4LcNThp47ncoA",
  "key6": "3L4a6AF6seCFkoUQg4LCy2wgg4DHdvwc9WvpMCKiom1CH5JR1h4U6UKJLf5SyzZgQHtQNijUKx2dq7X37CmbTtTh",
  "key7": "3dqyJiPwSWsHHr25rNH3rwienYdFnuUrMcNfe2J5gphK9qz5BNiKqi9CrfRdBiv2u6AaauZwTyDCW1dpDefWw3CA",
  "key8": "57PBXwJaWX6Cp6qgXtnAhZQrWv4wBi517r3AaWfCCeX2q4Z8WHGKLjncfBwej6WyKGz7bCeBD7Kb67orbLCMdAw8",
  "key9": "24pc2gVYqyJWRCbprmaWuEVrDtt4aptcCoCp7B4gPowPyHgeDohpZPKPjZeGbS13rPgwgR3Wc7VrwsGhyZfe4s79",
  "key10": "5svHQ6tE8FkhdScf3a2ZydR33BuZvLuN3G6qsHTgZVaf7p659bRJheZqmBHH5U9nChTBChHBtQSt1c3aQ7djDvNy",
  "key11": "2ViEZGpeChgBVMBtfPKXx3TuZ5vQFvWSmX6CKN6i7gLpT5C5cTXASuwRSDbBxi2pTnVjxZprF8dB8SFhDwmNGrVP",
  "key12": "2f2kh2Hnf2ixQgsBYVLxATjm391p27BxJeBc1XGTv5V6aKQZinLejGJSfAd8GY9qh8RXAAfiVwogWr791dvGc1Tm",
  "key13": "4Ji13JGWQU9C6KTfcGCvgqqykBraJigdi5p4p3GJihYz6iNNJsXgEr6DjP4nXAuC827ozmt1GV8VJjGZd74Z8sSM",
  "key14": "4fuzQ28UrLFnuyLwdnsZ8BQJUfXUBxwG8qwtVszw5HM8YqTiWjEJiTbR5YFnwaKRx2pF4PBw5oqTX7iGo2oNxhjq",
  "key15": "7TtzQoUYy3PvGbyMDyWNosQjDr5iXKHDraa8SonnifBx5cnF92MDjjbyJXh9QxTQC6NauFaJDnKvQGjYYSdgK8B",
  "key16": "4QnUkXSDfXH3GUQXzNnevtjpYH4BLJWVo62HkUR1NJtjGC3bwgtQqohWACGmPmtAKfMoS1q5NFF2fVk69D4dVp8g",
  "key17": "4f8jAi5kCtjowwb2LSuYSHcQm5sj1aayw9VGJWtyZHCms9BokZmoDrCuyhyH9vT2DkSJSGr49aoz1JgvL8DR9ZeC",
  "key18": "2V4FFfCU5yqKXL4QmPX2pMrDJWPTejV7hvNEXnpanUJwxdcCYjxX5pcU8vw573eK6GgUi2n5zMMLP1DEDYqd8wBX",
  "key19": "3yqw7Y4HotBfGt2NxNdvVGL6CHXiERH3dALqejxS3RzcB43DFUhE7aTsWPWNLHdTgDJMJeYqS6B4jRJSY7iu1KTo",
  "key20": "3t7sJvpfVBUXydnFKaVFSJNNCB4ErzvehraDd4U3JE1MXPwUjg86yVwhPhFH9wNJrPucTYUyxHpU9Z7o3tsMKHJG",
  "key21": "4YRWrtixKbammuAmaB8MBz5Sg1JAAvbrrLZVaPkfNbaLCgw3zrWcNtHMSRb2uytYMdimTDQ1EJSQ3mNJojauQmnz",
  "key22": "42VBxhyzHvHSy33Yy2jGz2TQ9GBAcXxMi5upU2AdawU1joxhuGvBZNnzKSmRu6vD7dqhpC72BKKgHeEmsTPFtXoQ",
  "key23": "5iDFaF262Xz4QVjXzP3ME91j8jBjUSZpkBLaSjNrwDCpGBSs6vhmowkyrFVKtY99sZzc1hq5coQpxrycXrePJVi6",
  "key24": "5gPgP9ArBUmDiWhB1TWoxEA4hYScRjHgrbNBD8JFiVzHJz3rNHxvs95weTpCrG1BRSwdvbabqT1xasYkFmnfYvoW",
  "key25": "5HiyFWbAoDv9ZBNetu84uELg645GR2fniFBhaVpvEJQXVAEmM57HidMxR5GTy7pJk6vNyKKaScmsuzgCXaNXAwbe",
  "key26": "4D1kfZZr6XpzDF1cS51BZDVt6egdiJgCwDazSz5LXNaJeQjzzpBDKo8cc1Lx9VJPnsm5egLuMhpusv4yTYxA1LZF",
  "key27": "2AWYaxyJXn4x3rSZXY9w7PdU4QatKacExeXbs8BiU9fkBvmPjq3THWmzA25HGy2n4ux5eLgAnR2K4eS871nT8HDP",
  "key28": "5H6eSJhtDN3Q4GztGamd6X2km3xXrnGnCqpnGhoNnjxnX5v2SGUiCRkE82BgStvnXdCVpCwvP18QpNGXm1ujPdmF",
  "key29": "jaFefzQMKMXhcKAeiwdmQUC6Q5zgUzXfMTezQL27QruKsgSKKBfp9WTx1BCLyHRKVbFQMkcrSXDJFu4fjKk4CKR",
  "key30": "36GFEtxqEDgYCbzYVCcBooSi1tsuiuM7keiWaB7zmyprU8XZq3jX5Q9EuPeq1FWwb2TBC7i8ZBnCAFuUVMWG2Vq2",
  "key31": "5nLNCsMxsGfN3uDssVAppGngVmypPG3ezsqH7oP7FzbJaqcYYx3CWSLhA89KLwfn9n4FB47zVVRyB9dYmPdC9m47",
  "key32": "rsbtiGjeKjmvj5gVmAemaExZaF61Uoo9RbjBJj5sjd7Dyk4quLCYrCbnjFwnajenBfmeRePRnWMCysAZA1adnqb",
  "key33": "5Xjg3X7h1HoRsJ4WH26pY5ACeQob4TVpkatPdR4SvF1nBXwSvTqWMWcLXuK1ZA3GcHxv1USYLkQmiTveUvssPsWu",
  "key34": "3a5RGYa3Nf8upiyYSBZHmK5RoEupsigD9mSP8UwES6GNaqjMWAvvYQRyHkR1rNuKY7unJdK35ccJHDphFrGao9YP",
  "key35": "3zXjp4LbbYjNAR7wYZF3zvRE4RHGSwv2KdiQurQJr2xgBrzxoN4PfphaQrzwwSdJ77867AKGpszH7fVLbrtsiXAn",
  "key36": "3w2vZ5BbrkPvkqfhjaACn2isejH2QmMjFKcE7hAePBh618wDkyNLEF33SsxwHq4gYww6PnHdU4evtkEv2P6199tq",
  "key37": "4j3x9sX5JgHm9m2b3jcwjWXuUdDExp5Fsmf1oMmmwdnnJiAEeBPQ1B13FkaZXYJPNUrrvu3ZEJerX2M8dCanfBVX",
  "key38": "4JHoqaCXvWnCTmhzaJvsVWvCiNheX7ammwfkZ35wXXCVhAqCLFXC7BC5TLswXjnMsNc2nr1L9uY9SnPkmsoHg5xk",
  "key39": "3LyZJSEWVNdg3fag7vR2WSZ9o3zmgWDq37tUVza4QQoCJ6hAKmfWpNwFUHYMzLkfHxrNruGhHTPbxhuU6XcJHkfe",
  "key40": "DQvBRsAFgbqADZJqJSbR5zPjgbWfNYxNNMcwRWsraxoECcgnpdJSPYDYdNGcqvqnJ33z2oyG4soy8LKRuDMSTLn",
  "key41": "29m73Nf59Bkz6GPoUdLtLXrVhmA5cYeeQ6qi5fGBQRCh6p9WAez4wTwK6kshbeiyjPhF2KcYPLrrAVpK8SXpL5qG",
  "key42": "DH7fPQhJvYykF9kCSGvMRwKNoAnmxe7tD8usRpTMLavo18kaYB3skCFB6RfsjkXKFshgoohFh4but1fUm6mEfTN",
  "key43": "LAgsEtT3G1hivMrTktv6g2nCUGGwEY3hB2FEy8XgRmww2FGsWjLoYaQe1zg1xRqRMGtcAKq52o5gTRixPwRsFi8",
  "key44": "2wUkmkZZGLCAsLqKJeHc2oZTZniKCAZ5pHQKV4f77QYXvxUwXN7BY1wHfQ3KNbMf3bBd3KgSy3bbV2M8qd52WqmF",
  "key45": "4kbhFz9acHvVs6nsrvJ2fnZPHoi8kBWRqbbaJ3uEWLvwVRK9yPQaBgrA2vWbah3k45gprwvxiy5MAE8fCSwUySAY",
  "key46": "3d3tKwH2DRUNHhjy7DJMDu84FinrmeHuXCVjyZPWv9HucfX3jyBDZM6hj2niDz9PmWdMxvgzCvMQccj16VtZn9tk",
  "key47": "44vGtCcZEYzLsmag7nr4fDTpTVacfSf3fixS4jEacizosQLyji886om9CefbmXQi54D6bJG8wh5KJGy2rGgJzFQq"
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
