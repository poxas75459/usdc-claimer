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
    "4xTXiukf1EYQ35i78xzW9kfKnggYwkBAHAhx3HPNNZvmoTMzGFDjnyoAHZdZw4FCxJNpF9VecZnWSmwMRHyoiFh9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36UiwqW2FcLLcUytJthSoxseMQw9Jye1rTszH1qbpwQAxfZRuYYPSRyeec9vug4D1LpmUNFrb2YsuqpGZf1GkTLk",
  "key1": "5DWKUqS4VEm5bLHW5Bcp5CL5PV6U9n757LboEfyRdPjTg2ujA6BKF2H9rywTia7EGUkJH9ZuFDpBzPeQgNXijzsS",
  "key2": "3jUuPURg1Dhtcg6FAnRwj8TqJNg6pGZru31doo8Bm8nA5bjFABrdqH2YY1yy4UYwhHnav9g54MCfBdXM721LEnba",
  "key3": "4mZQrmL3FiDS9MqX6UdJUcYWzYUgzNGWJDN25hHKys4BkGeaL23uptvBBLUTxxy5obdLosPaPNeA5Dut7as7EyFc",
  "key4": "6JtRS2aK56qPkeDdZYcDD6j9rZWt86mxp391MnBArad3SyMganWbauvG2pV3FY5mSD6P7K2NvPCiW9ogqaHuwh8",
  "key5": "4AnsiUy8Mr4kWBeDS9yN52Lp3SUm4e7pWBVxierArmLRagF7n2zek3Uft5iddq9Ts3QuiCYQkQHqccajikqLgavT",
  "key6": "2syR1Q8cVVNz1nKqJUB1rqvcZ5Efprkj87TYsRiTNDRZNGHm8g9uAQY7a63fH1ZVRgT8Ei7ntnQAcJKL5ZpNqxEu",
  "key7": "2MEiPvT2REgQQjqDVkaRzYAQdWFk1uyUYnnuxe8Kkb9y8xAUFRAHh1jqbkkPcW6uKmJ5xyzxjP2ewzRQEmuLipg5",
  "key8": "4snXJBgfsXuQrNjoT4hxzKVJM5hKdUdKpg2kB5RocxwB4s8sBDE85xgxxrFb4Qy2ChGYAAhpBRTyhcewwjz2SPPV",
  "key9": "PStEmM9vHUMwnKKj23Y7vMBbtpe9CdQHQw7k7Nt6bKaAUSXBQ8kAHWZP9wMkX1io9joJaReUw2hWbcsMS3y2pht",
  "key10": "5unrh2hdJmkzxv23NLxMKeJoZYo8ibAzfyS1WUrNZmHXLR2PMqkdffQ34XoS5nySZic1rBMoxyx98gPQq1A2Sc9p",
  "key11": "5j8QSw6u5k6q6P1WgatGKq3aNARND5FhrmumTLBUZ3kcgTprPTxcZDBo6TEHm2vCsTKJai1nwEPzrHdgDEjdcB4",
  "key12": "GRtmR9LefKEWguzEvqdHFmFe3iYzPtPfWAWJNTpr2GckUqTeVaZtfpqfoaaPKujQD1C1gGrrfruX6VocuTC8Q8V",
  "key13": "2NWAa22p5ezvXhSW8rk1GDnu3wFWfz3DY4tq4mz6KBwEEJpYKSvAbVohKpTipn2xqdp73YSfUQ4mUbJVuKp7sRGY",
  "key14": "47uTtj3xeXznmeHtVbuLTdoZWdAX11Bfo9n9CqrYPaDV1wvSY45vTNKnMEg3VpzBXouzNMKsMkDaCZmqQZ8DZU8k",
  "key15": "5JCaqhDRMyPGcizeJ1buYUWPoQeJSVENo8uKKyDw1YwYhWc37nCfjQjHQx8kpQgPQx7Fvgt1DmJJCYDLqG6GSMqH",
  "key16": "3yzDig3362aTZhZe3tGYcd5cCAZAt93ZoEH1ioRsj2iyvEnf149wCr5MxkTm7mSVXrdNG8KGmHJXvGjCpzAFKbUe",
  "key17": "3kktq9Y7V1NHWyHWKDvt6g7Y4UjXNHR4wN7fBoTW6V4hAjW9pKgX99sBKCvFW8TRHdtSc8dHJ4eqAFjyxpZVP7PB",
  "key18": "3U4s6JHEDmSDNMdLneHs9tUwwmRjkuJcG4KtPrGMc2hTxbLZzwXfVEJ8qt6wtjTXxvByAephwemUp5DYN9EmmDsB",
  "key19": "4fAMwGsSDsmtpKNRkjrDQsYKEPGUsRUwACxG24RhQaz44S5dPs3VobLnYdpHoAdKjTbSrZjWDndqRVUYNSAgjUWN",
  "key20": "53saSBUX2andNRsLSWT3gU81Mpx9q1TdJ89cvDba1qhswaQJxL8RrNFfQa2dFY5wnW71hX27bJ3CPEyDpTMmdL1c",
  "key21": "5XmWwEXqFGNQJamCJM75YgTtnHqjwkUuit2vZKa65riTwoa7oAoS6o4tcD8bjdFosac9PyeBM4K6wqbBKPrPoikf",
  "key22": "utnBfzQp4kxfEqcq87Xs4f4ZmA39zaWxQGP7EHJuYuGb89gP8gn3VehhfkURxtjPfHrL7qBquo8S97pc3ucZutc",
  "key23": "3dowq1Srwm3aTmuWWoBfy7sp5D7Uvr55WyVh3r8w3tsL9Gd2zUDtdtmbKZV3jVuaDmyB228SJNfiKmLh54sHBT5F",
  "key24": "4GgtKoiUySMUXkKRyAVpaSL83euEbuZQ1evbVsUDiZz97N183fb6QkRzAYtAGXKBrdWQn2oRSEECpXcFJh6b4Lqh",
  "key25": "3EFpAg5U2AJuY5EGxWv9Xz7bvP5LZmAoy3Fr1HoxW3wQ1bnvQ54bgtdzp4jfjbVMgx6Ssnuv3kGtovnf9fVwmE7Z",
  "key26": "3BxeBGVRjEftpwmWEyeaf2RaXWF2kZAL2rqomEF9xhYbpnBVLSE7BTAmJfkuy9Jg5K9PWcwBS3p7uvkAnKTcN7kY",
  "key27": "2x55YtcxibQvExcd7UfgZPcoo4DEgarnmQL4jkDyaLe5HPsL29qKfKDnNUpTeJbb8FArU5fjZjL57sJhWntbjPKs",
  "key28": "64yYZ3W1Ni6vehCqyVuaXa99TBgqByn1VCMMdCYAVt2FGuPTNrRcQgaMnKM2px1mVXYM2DNSQb71zuHfpe6V4nKx",
  "key29": "4skpxyL39ayhTpNcQUfoMwmKySXBHrzyetz1c8a79FB4ojShGVHonKhmyfeWp1dhQkezKcTxKic7JcdPzbN41isY",
  "key30": "3FTjCiaqQovfCVn121UHXLg1ioxNb2jBtSAa3aXMHneLSvbFW62rE723TLudGfoGKhqiSZfqneRkCBFsbNFrXLCR",
  "key31": "22mzk2KBHXtb1yqFppd6EnF3dhX3xmc5MvfNY1U14NmfGJsjzNb8QcDa4QgHvSX45DJZS6847N2DbmkYJtC9igCi",
  "key32": "64TN1uA8pgsgkiNKttr2jHdVHpHwAyeKevkR277J1PytN6EDjysrwkhdRhAokUMBMNYB5sfZUaX5yGc2TAHnJpU5",
  "key33": "62bQRBPFcLyheooZ2ok8jCkXW9ScZTse7cUWriWWoMcARS5u4HiU3X3xh6QvSFgpxn9L6y6Z5bdYzh6pyJSbgvzT",
  "key34": "5r8cdsWf5BMvTM5239MPCApfqcWPqsmY5hmDuWsjdf9yhJEaLB4vT1icJTn44QcVZMhxmqfuju7B9tvZcUEBvZvX",
  "key35": "VR18x3T1wCSU1c9qudu4iuVPdh9DFQDP4UqqLzpVGd8TXKXqckf87w5BHZfR9Lbc9Vc76v324FP73pXKnLrTmRL",
  "key36": "bn2DuKxLYMrb6JLMpPMXfajKbJ1ii35Xoszk9WWAEhoGhANvWA2PDEJ7iytN8TJskLU1ZSMTTPYmiht4YAFTzBa",
  "key37": "qDb6cDB7QQfj9kxBpB5mPbQX7mZAaarXLo3f14psxzFRQ5jpaKZGuMjRg3nxHqmYgq8PRK83mW3arjZbmBfGUL4",
  "key38": "5XdijMH6BPVgeqPSjjDJX4Ubr3BHTLTLyCkW4S6ZxZJAawsoNsdFFaWs7REr4PPBFUjL6Qtd7oq9kiga6FtwQtdW",
  "key39": "5cJR5yfrqLCeW6gvJm1a2zLe4gm4EmvrF9pf6ZNbX88vHWdmomKjXv6zbuK5PkUjomb88HcH3akrVwhUkNndswUF",
  "key40": "SpgniTdNFChq43FtYquU9ebtaZVKwnqKKxzGAEdfd7aZcGaxFkS2DiozSaHT7xMZkLG39bEznduo4EobeZCxL5s",
  "key41": "uDy5BrrBSDDzEF4Y9sVRzqEPteffmVA6U8vwviUc3J8vagpKJzQMnQucr9h8n7F55LpwS7TozH9jwm5hWFF3VnT",
  "key42": "UyAAR4X9BNKUTa3ncDVkHX87FSSEN3zRvHuNTgyxtd9ZxNwKwirLzb94uLVBxJg8ASHQXd36b1W3XPXP8JA4iaw",
  "key43": "2dveRU2Y5TdckRJSJLZVYHwwmUu4ft72QJr33YfPxogCQtetbXANZ39tZZP8yrLgwiXPHe6v8nWux2VREs8Medj9"
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
