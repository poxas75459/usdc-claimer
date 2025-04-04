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
    "3EntiPS2iGmMu6EvvYeRSGoC67dNphJ2uTatJHSYuh7Xcvx5F7qouvy532Y9WCFacpHqsfC1TD52RHXetUPp2x1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BmjmL2o5RCXgo2XN7kbbQ8eVUXsurNimw7HDd3eg29aBcyGCX3RveLbfEBvVmYset5QrSrsdebbLHSHSpVCm9Ed",
  "key1": "3YEezkNh2P74isWWZyHjsa7sKvtuRKEymjLN7QDrEDhMh3YPDtp19C8YXVQfwRZFumq61dcpef3TJnLfoeaUEm2y",
  "key2": "bEu2ZfwZwKx4VfzaDq3Lpbt8qs8auDoLdakib7DYZRhJF43JDAvXWxVyDDJuRGnJK8qX7sgvqotQLCYv4Pne17P",
  "key3": "3ieYAtdFii4ZDzgLauueYKCWqhs8PandVAg66p55EGfXftWAopmcNNbYG2Zx3LHEq7rf5qMWSPi3dEtApHftqyTa",
  "key4": "47MmvWajJywe9HGL2V2jES43Wnd5vYTEebZHyjsdzEQFq8YAmcKheQ3x3ySiU5ivJrp1sJEY1X4WiP6R4bg83MSC",
  "key5": "2arjSX4GtjWyXmYitPn2J3FZdWnme8Uj4KRjWwXAUpvRCrcAY4qUfZsjdQ28hH1U7nRMe8K2BDR1m9D7x6M5Tnvg",
  "key6": "2sqeYuGEdMHM4MyAmuPQPB94VYCsjhAZsUVdvnBFfQ58eqVomZ7UMaVaiSyNed7P5n5Eky8QggpXuqmQVVNmC1iF",
  "key7": "4CSUiJKxkmDYsor7wwrYtTmf4fGD8WTYVzRjT5FXJ8N5mPxdEMRZU4MobHZHBi7u2tEL5dCiGvyJVCa1tMixzdz1",
  "key8": "2d5ZghHSgLsML1MwWyCGWVP5fhViPdokCMxCFA7i9ctRcL9CvPayzc9RfdtLmNyaazzk51yubUZtmxQwasP6m1hh",
  "key9": "3LKiLTgz1h3jYKW9GeAzJjMdURy5wbhRLhLaooiPzajhqRXm5AtkKDb3bsAqmNVqWtuZF68tbUiFjjP5dRLyssxJ",
  "key10": "4V1SeRDfcbbZoaFjG4bCqdbv2qJJMHc5LmXE6nzyMDwf3VLr9hd7NukqTm6bDygGYJWXUXobnRcmdrZYSEe61u46",
  "key11": "27Q1DzfBp7DsX6Vk7p6PxgBfVvrd84jNCG5q1NGtGpeKjm9PUP6ZRvU8w5BUeydA3m7gdDFL3F9fWpjJFYX3hmFa",
  "key12": "628azYsF8ZFasEnrc8iKiXFxeGc6khxQgpG7e2qZQr82igGxDvM9jJHktL4taD67s6UcVRZgakKYHczZ3zaVXscq",
  "key13": "4rU9UT7t34xXD5WW5ujudsA7pnHYFuBpbadSX3hS8qycd4LGQedF6Tg7cVbqKAd2Uo5Gb56Tk3yQNTUNoJDDpyK8",
  "key14": "3kyeUKYrKHQEd2U7bNVYPh1nfRUCb8v9HzNbykHUQtwNhnnvNMhv7mYWxPUgBgtZzdw9fqnzEeTNPpHWPFmkMK2w",
  "key15": "pC5QYJs6MDNPWRQWKzPPGiXLr1uonitAFCFJPfQsqpdRdwqa8GcmYAhjZmW5xSKRBoBGoPVoU9jf17qPs5FW6xr",
  "key16": "4r1VezDfBsbPi7jruNzN8P5yX3vQa8QgasyoqyB6qFQw5yMQ7QqNu5eYTCAATARDdurFFJ2aZ1wzRqqPTRPJg6Xf",
  "key17": "522yeMQjWZdKVgbGK21x867YsdYXhkQwHpF7MvLqvQPjrFec2XEyVWU78uEq9cFLWKkVeH86AJdHPVvWuCaf8Q5b",
  "key18": "sVaoJ9EfmGWciC3619SpKXzdN7SGzXghCt2mRnJ3k4LWD8FcvQe2Drms4Zg3Hz4NPi2UomBfDnGe1i7HSNQK7cn",
  "key19": "226EYCo9AjwDetpdegimumpVoz1pKrjg2jJ45yaShfZ9WuFnU7ZbGLg1rwj4MjpX9MH48GyYGjdqJZPxZXqtNeuW",
  "key20": "zWnztNWWcQMWvyHmYDJC17oXYzH6ziYm3kf3BDZDZNDGcss8D7oMkuRuCCjCR9FtXahuAv7ryo6qFfax4JnMcQt",
  "key21": "27AQnTv41DByiqMdnA7m1uoVB4oCquNbBqPPKpFLRZPzsUhM1xXoxuUFidLLyB6njz9Yp82G6pdmrsV1Zz6mCjch",
  "key22": "AFXCMjQtiKCTELU4dXGch7UMR4FkXh7uCgm7jeWbC96GoLHjqaQgbGPtzR3Hgz881YCZbUnnCxJx6g6cWJTntLu",
  "key23": "4uUTbVi8wqVA94BR5qnD45NUfkxait2MrAgkDHkvVGGQUe4uwzbdDCuDM863VkbGXJhKkB7BJVUhPFWzr7mBLxci",
  "key24": "aqf9mGQHFmX4tEPE8zQ6W9EPeaczo1Tqk3FRgMqeee6A7hHnH19w1h2S59TusW362MnNT883ifJR62boV1WXFja",
  "key25": "2Ewh5AratFL6LTmN4nNAVorUMGUUqaRkpuUNrhCLztFLB57c7zN6UC28dpQLJWiF2zARN4fcrmuruoojxk6XUqzQ",
  "key26": "23gRXe1svBvoLwZso7HXdcC59tWKE7qs1Xgv7UAprekTgM6ZffmJrLDqsWP5TJC5krF5oW162sHeaEfWsW8Ps7ft",
  "key27": "3jwSFm9g7uzA5bGELDAtU6hiX5FM249PLNBwYLgfMCEyjee6eJkjC2eSLTieLJJ3nN1fdw21ig4Y5HsmisTvGmaV",
  "key28": "3vVBB5e1PWCyhyXR117gqBtGUQHGfE2kvXwbNNa6s35haP7DqzotSLv1pBNmRuEeWFXfVadHTB7DfRCrR24UwmqN",
  "key29": "3nmWjoaxTYW9vgjLyD3yKyMk77gUTqB7Tp75vJokjAugkWSpqwRmitPiiGxWWTXGJKok4chx75rUNG8g7CP76mqb",
  "key30": "2pJqjk4TLqStgPfUyTcuYtm9ykMrHDVvq9PM8dg2A5qAtVVuGFPJjsdtiEAc5P7wBqnzm2Gk32NhovMdmTfZZ6Mb",
  "key31": "4Z7z2o8Aaqj2VSdhCzaoSekRJdJKUBoN3Z8f3hdRfEc2NzFoGV77K4LAAfYb9mzJnxg28xai7Hw4YNckQrAAJrNS",
  "key32": "4Kc2CqUpPbXQTzJ1W268ughKjBMdv7KTJWheAHEhDciz6bPRpAaHHyzdWk7Bz4R6H7nyipavxii82BEsiSRKiQnx",
  "key33": "2SpqkJzXszfevRmL8HVRym8jjzfnsgQJGKGNmTBZY3ZU4wg4X5L4JMatdLUjj6yU74SGWhnqd634kzDGhV93ix8D",
  "key34": "55JYbSpetKQT1NXJJ7kV8sCG6daYPnXiVKuyH9TzZfNe8sHXWCqmuZ8BwUZC7nbxMCkwAnAxY1mc6bx2AkTCSasT",
  "key35": "5pvcoYexdf9HnSSpskZyWFqy6oUyq1m5xT6EkjuwEW9i5dmeyyT8NvcCJtPgnbF3SKWGTzZDuda9mDqKTcqSZap7",
  "key36": "24ZofuBMx5oCVdnZTocPma8vL9p331BwBcVrrfCs8xzke3hntKJodndGTWs2oVYf3k6h4FwgYvmneuVsKdJxhp3f",
  "key37": "5KSVJS1VVPfUjdeakpowEmAdtWfYH5yVimtQugTAnGEhJMgh9smizH4uc2hyagL8ekvDoA8Wovi1SMn5J9qgTxka",
  "key38": "5G5F43VzHhLQ832b78NBhSd36YTeX158bqxxdMLN9sjsbx9ss86qRG5kiJPHS3oJKCo1ovDZophYrdqj5BnTF7S",
  "key39": "4Sq4PEoM4rFdnrrnmS7RRn2EqrySTnqdfUJyQWJYvkBjSNPBLPX6XcpxVQmRLzuxHmBP34mrN5aaqjjHnPUZiJ6W"
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
