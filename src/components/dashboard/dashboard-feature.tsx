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
    "4gsrKZwqryuDr4uBL7mFV98Rd4tEefvkUsAY4htnmCRchdqwkKySMifJYWPZwyJzhaHZsgmdoUgWTwgAbZVsqKDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xhcb1Tgs5nxVKBo2DimGbxGdvSbPDzZcw3RZTzC3v2ZCRj5CfY3mQ7pzLW8swyraEJqsiyMjST8gfhT7Ahs1ph3",
  "key1": "32kjyJ7vc73eJGVDpJKncCjpeZCU9LbkugCVwZAjApvEMwo5CVJWUjoFks1XSpD7eKNAcSFdCDwQiY5mkUrN1uK7",
  "key2": "atDyfx1PsYYDkyxw1hvLUi7X1KrKXMvRpPDUipKhNePwWSPvwMUogxjwdFV4ip9FCeoqE799t3A5KgPJ72DAmam",
  "key3": "4Pbe1ujm3pKtQKeorgeCmdp4DJqphcNGawJK35UuaQ1fXaTjsUCG2iEhCY1ANrtWVmG3HYxNmW9ixUMBqbxveUQn",
  "key4": "CbLdeZg2NHRatooVSjjLGpwVooKafz2M1HtSRBE8SvxRu5bfc1kus849h51RwVBp3a1Xyxk9EWwaMQZGGKCL1si",
  "key5": "5fvQe84xfZaiKEv4EniJ4NsZzTdx3KmvTP5jBhiCAx5pbzdoRcNhZCqBMNtTLWB6DVCTm8fFWP7mPqLjdLhseAAj",
  "key6": "65WfmZCNTiESBdn7C6Dax86mLEoeQcnHW1cj35ZEmWsrqqUmfUwiWVF1Ab1bcicAoAv8korBpZuh4fLnKXiRZiu7",
  "key7": "43xGwy1do5L9CKjCqGWAmY7V2VPdtnrz1bMgZRpLy76i8p8Qm7S3pQtgD3Wpb7utWXKUnHAkPRDr8Cbf3CWY4EUM",
  "key8": "4RvKvM5YdMPK9VhoRp1pxiEeR8Toones5ayaXiuWAKKxiRHqz9gKbt3MTPco4ZUMhCeXpiqGLFxguUnbXb1ApRQr",
  "key9": "KXPnk2uDvdwFX1eDFRBJubjebz4mANq4hpSEiPfnj3WHMngbFPbiVf5m5EjmC2Zd4ya4JwkkWTYeFm6aPoB3Qb9",
  "key10": "3j2pxmtB19utRV43uYxw5SabBonayGgmfymdXqG7STCfqm1mv84Db9B4Bbxv29MznmNKqKaNEMwXBDb4NGPBmTRU",
  "key11": "22yPhMTcyxLHM9zXEadG9otp34yBy8t6E9riY2A7zvnE3s3KB9GvtaCMbBcaKWNtNYVeJ9VHm2D1KVFeYeck92sM",
  "key12": "5bNVAdjZBjffr1EpdET8RLtoha1RTUbF5UcRHkBKvLQJ3DJnz5penfGEXLk3ecRx5JXEhqLhf6owwUbsipASHRrY",
  "key13": "566So8gB14Vx9QhXpJj6UcHytmRmK3R5NjkQGWZDstF5hQurdxJP1TmR7yvyAVkwUF8nsXt9FxpxfQmfQUQ9kmYb",
  "key14": "2vQQyXmR7RUjqLJQC1PHMcuG6YDuQswh5Xax6XqFPv1CcuBucnnAcgxfygePNDEffUpK5XCd5KaUwNQ7bw49qNf2",
  "key15": "43SK53yrkvnw6mAPWueL1tZzv7d37RT3YhynnkKanfYLEBZR1YeoBcbkQ4vr3Eo7RvB7oQ7F144WwXnMRTJ1cmcK",
  "key16": "wyrJEhbYRzovePUk8wZNnjaoj3HQozbRnmfyPAopHu2VaDA3hyCAq7p7eFpT2ac1ZUTg7DjUAdxcDnu67GL8gUA",
  "key17": "FiVUvHEnCgZqBtw1DovmFsj9AQvt3GZEZy8t6LYu33bPKyX5Cr7FesyFgU1BuCcTWUpBQYN4bMEAZ2yAeanjDUv",
  "key18": "3BG1owEHV7dPQ6nhanny4LzZiGY6ToMHJz2ywAtXXwQF5wWPmXRRuyKR8peND1NoiDbpAJit3itAop3SquvFRBnj",
  "key19": "Qy1aCdJqaJnif2SWPVuhnTT2o2QYnud9FUAyL84MMWTLNcZRgBSkjFWZduYGhJXJCu1CHPisDphuYq6ZgrbP7kz",
  "key20": "53nx1Xx1se1p6qdgMB7EPChYkqzsSMDd9TGBrNFYE4p7T5b2sQHCm4x9uHxZ4kGkvVVUrLxQbdrw8oM5tVMTLSZa",
  "key21": "3bR7w3ezJxuDpHgnNKhC7AHuqKi6DWQ8Ym4v6GtRmP8hZoYwyFutSYLiLcBgxuPeg45nJFPsmxerQVn7CxwHi4uo",
  "key22": "4j83TYoV2yBo57chm56KKcMu7aNP6a1Kh7A2cCnoRcqQoCZtAAWguu9DDd1X3nT68eZsusDMXjcHg5pAoUzvPV5n",
  "key23": "2htuE6MgVDJ6NsTvw2qQNaZDPAn3tLpCQuE4A2ZFZaDwbgJ1RPtboQ1xRRji9FFPdn3Cd7C4cUgSFYAUDT1batrg",
  "key24": "5QuPT4Sbfx3hXySQK3cduCnpt1GtnT1aaS6WNs8J7g7rqcXbAT2NzEtxUqMzcSkSxTavZpiA5p3MfowxUMNhgLqQ",
  "key25": "C6GVWX1PTrj6Zra7tPxMXGTy5MDdDT8aZ8bf9tRk5teA4LD3Eht1Kbi3QSQrrxE8XvHa6PYGiM4KCwKqXM3Y5Cu",
  "key26": "5AUdTfmq2kY43wpDVAsBDMwmQTCmjuney4FKeaMN1vMFh2rRwDe4CHVVfqtGvPUMLjEoCUdZXPX1SDRo29dCiDv5",
  "key27": "4UAGygFseDdmgujHvBKPwrzSVpVRstQVxm9ky2vFkLXo772Vko4BWgnKHSDzxR4kimjaHPP5svx1VK2LgGfKn55R",
  "key28": "5GkShSSTCy9BaWG2KwaQT5vPj3fJ6GQnoVkwhRh9nzXfP4qwM1nHVwEnci5G5cTHksnmZmAhLJSzAoss8iRbiEKa",
  "key29": "2aM2rd6XCiPoVgczp96S6Fk8qrzLQk8RXsNtdb7rkJVKcwkqRF7tsjLQZtdknFzpxXRZQPyFk5Z5oY8K7cUiEEJC",
  "key30": "5ejJo7aZKfuAauQPw6UcjHjZZeYFnwN2rcYprcWN9Xasj4aKJiaD3dGNc7XAexjw9ePmTXeL5R6trVZbmtHDMmLj",
  "key31": "Fr6HCDMsAUwj78QgGRYvvZ4KiviPUdE7Am6XJeFvBuioCzaFV6NvzL9tArKk9UNzzLVsnbx7p8F3wCn8GnhoV1G",
  "key32": "34xHx3KVYMf1WZRaGC7VcwXZUqYSWMPtrvjQvziZ81Bior4VEmjbHb67KfZpnpHKZPdjp85uzfHY5WL4PyCTFzQ9",
  "key33": "2wjMRAnVzgZaCp4JnAhQ4GjABWxKvyQoApa9puTCDj3P7TURZwByC3b1G6N17zt5ZPxTxMSudrtkRr2otjUPMA43"
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
