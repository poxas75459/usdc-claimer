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
    "36hMdipiwVufJAyPaccCkUkszR96Ffws7vqfosSauBEECZ9LC6wBZYBBoSeRFKKsgewUBQUEKjtYRVSHq54WNnn8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h71sqSyVRXmDDaxPDQkRBFwebqAinfF3Xhbufws7tijWYjkraQRSyJzSXhYcHBKTW3mF4n1qqV9ngiXz3KwDux3",
  "key1": "3BQzJVzXKk35xz8JbaSiNouFj2bcsLEpA5YfEhWgyekmftwjFEXRibhKB5bFhVdETGuHpL1ciPsM3MZ8aW8ybrN",
  "key2": "3PpLp625p2orKqn5v8rukEPm5yiWNLsqppngu1CyDLQM1HnhDEYUUFf78YJYNYXPBhrDeoi9h45jVMq7tF1hqCvW",
  "key3": "5CfEFRG8a9G2P7oLuoY2owskshbSN6fhhFE7PUQ2uA997V4TwF9pSWhhxwbjmDC1u6o36yopirfQyNemMcLGziQa",
  "key4": "3DrHZSRvkKb7kn3C9yaiSfgXPDrSZyZ5p8gmKzV9cuTnbmzFwGjYshgYMR8eHCJkbbgL3G8xcMbQdStGf4qnZvLd",
  "key5": "ckKcU3U9tHuHgC9juPwbBax7tereqBa7xipC7F8PKEjY7a3EWcEqPpJEyqQJWykJiSKagPRiD9KcbqvNWRuRLea",
  "key6": "2C1yZHvqpTWt6vtt7ZFxMnvSvWsADcstApbodCQDup8xYZgKWWBEJhbxeHXnydRTyPwUNk8QewCWmwvKL48knjKV",
  "key7": "64hPGJPiAvYn3p3365z3E9ZR4AKF2hBTTFaCo6iDZfFLgqYnQypCWE3a9ZCLoNkxk6ZVx8Q1f7psAiChEFN2RdK",
  "key8": "5Xxk5LaeXrjCh3ywzHQHPMi7NAdRtqkJD1BoMGyCR4uY1dUJiWeeHUazK42mvFQeF6iwKmHJdT2EABDziegEaNAc",
  "key9": "3MUAgDRtKdfh9QdzEc3F8oCMcUfgsEJZB62GnXikURnXoyGo1vT8yUzdTvQ1hD2SS9SusfLPeu75ynhFFd7DYA6g",
  "key10": "5wuyqDrtww8DCnsbgbCWJF2UPoC3CAAstMYJp2ZpC1zP5gn7HAdh2Y4ketbpcbK8aYEKSgLg2W1CJaB8dZKANYe8",
  "key11": "2WEpYAbuEzkaH8EhUXuo4ccxTZWoMrZXDZmDLD3yCvp8Dco982TntAWb4YjQKLEuCVBDsJ9A3LrApubn36V2Wib4",
  "key12": "2bqUJzWUGut1hMhxDyr9ihxfPab5j8KbMEFGzF3FcFL2HYc9ka9QYjF3djjvRY5XhHLGy6ZgSHHxkgLcdEHxxvK3",
  "key13": "3GuSZEstfYZNX5V2L9DetXC8AnJcxs5G7aCJCeFSfgc8dvWH8JpPxrWaJLjU1UWv7TwyJkJYPjjHpWRVjXhpsUY9",
  "key14": "4RsH9fSDU8KSVxonsA3SM1WYpJJgrSgSzcQeJzWumspMbwvUdNtkjmMVxQwkuZm3y5r5uKGaGeEqjJv6QCsDZdco",
  "key15": "2fzoarfadinXMHZuy1X6stCDBmJpEvTBB3UjvVyKmxmDcEzP7AKra5QaiGSKmWz768Wy5qE6r8ozGZTdgpX3rrre",
  "key16": "4NQ4ArF37gwgSQEY7SucXWGoPZt7zqYtRzWWWBgmNfXYkP8NdTxDvsqNtKM83QVTm767LdNjKDtgKSrX4kJFRgt4",
  "key17": "5ERsiaqnYvzdg3CJzNxQBnzAGgoMme78drds9mTLrXNkT2qxVthsX3uaCi4QcMQvRtj8nFEy6xyGNGqYUXUtoyTc",
  "key18": "2y4tfkqczbNkRuknSFaoQ9fVDFHRtzCHcvN2kuzTN23B6E5zacjsnoXUJfCezEv5VTk659gB7skLfmsxhfT4ReL7",
  "key19": "j583aZomzTZWqvcevNzofRya17FjwMPiSScqvETzh5EbE2rHmN1nfF5WjkJy1Gzmkpk87WmjD4TE2wq76guh3gs",
  "key20": "49UpVaZ5yQkWdDLoUS8FNPvBzkG8MsFLQjazctF2mRSut9NKrNGUveuCm3pL8GzvPYuakhp5R6nsUpRXFjGhDrT6",
  "key21": "3JiSMCBx7qYp64aZZ7rVxkyefYMcvrvSUVabBjMBh5G5vx36eDBVcAFYhp55SxZXBxUsfAKArx4rCH4Wk1HZBmei",
  "key22": "2CueL9ebMUhRr8k9zPaA8svBbPZ68ZCqnLbzM1b4o3xHRm96VKJZ181F8Kv8esfENLsWGR28tTY2nHdAvG1sgqGY",
  "key23": "5vwHxJZd4Ms6WHvHjSKLGMSTXNBRcaL39Ax45YmrjqgBBUCMXRgroNPCtUp3HckmNK52nvPQmgWa2FfV515NNCx1",
  "key24": "5m2YuQNzQTcZKS8w6VT9w6V7aoFb91Rd3aN44E53o9CMZzhShBuMejKmWDuZ8iRm7T2dPCB7TzoXLmzQggrRU9Lf",
  "key25": "3nJinE88hxSmMc3jbjEppCUL7x4rMX7CGzdDiK4mCWVbYhqK32aKwdJiCgfkSEeRvV8bzVKmsZvdge8pVefuioEt",
  "key26": "3MwKV2uzjgcscMwZC8ofnL8D6SKK7fyHMiCnjhh3awKaXWJyjyTbWHVfzQf9dSuUUrw6HXrJeRkZMQ6u7LGYGcWP",
  "key27": "46ci8vgKbk9BRX5uAd6J1pu61JMcbAkP6CfT6vf8S4UfDZ1oLQ35wrHY1iszHJcAC3Krm3JGKNDFJrywKxogbJSW",
  "key28": "2jhcAnwBDNvHtRuMVyJVR9pVjh72EKDupWPJsXP4p13kJtn5NFULFnVHhHHYkmPCYYFcgHdfpVUJd5T4gP7uqET1",
  "key29": "3cLemnAfGbMxbe5xMLy2rb3wwCCePyPpFZqgv8XSZLdmPpBFJYpueouwVXB7UCu7y18gxhRoy8ChzTYZCHXTbqsF",
  "key30": "3nWz2vwC7MB3GAbJV5CKtGhRXVU1SzpZvdJWYHiXy4VUFVHswBSAGoPV6iyMdrafis4Rg58zJ9Y6hwnjMmrPfCo3",
  "key31": "4ZzVeqT4EX4H7YWDqsUbUWgsf4Q9ZtSmCZRf7Nn3i7bsTXFWjcq3KHQhzFRzPJfyBnpzNbZgMWD8BRJu1TbfbcpL",
  "key32": "2XCtcmfBwPEvZE9yZojoG9ctbwuMFDgfS8XQ6vLtSPW56k9FJK8rDqM6Te6auo4bzuYyBY5sVhU2Epk1AoyiRS1F",
  "key33": "euvrzbWiceb9zLL8uH1aq9XQvXdDW5gePsoS2UQvtXBiZFE6hd77H74wTFuxKNqmUpvv6mySoLVzVveBDt5y3TY",
  "key34": "3Gx8t2f6VQYvmGb75ka2463TsL4EtNhrMYG8Cx9414hmn1zrU4976DTZ6ytbz7g3UTqaHoKHoy1hKri28c6prTbe",
  "key35": "3ZsZuDjZ2SvXbg2m9MqfHhTgSmW4z2zppPcWG7zuStGdKeay6NQY4fSKCT7x7G4LP9PqB4VhP1QiQjRLfcgRGzyU",
  "key36": "4BP7zB6vWiWBkpQ52FkDdgHxbLN3AGYtZh29UUnFxbXiZB1oQT28bzeJPZipEmxnBe2RUTfoULEMKQizEnFTMnae",
  "key37": "3yjDPqqmpjxUJayQD4EZTWRDSfBMRe5JLhnB16NCdva46uKKNPS4aTAQgiez4QhDQeqzdoi8xW4K1WR4VLcUhSYq",
  "key38": "nqAL9Jj8CkVkGdUyP4pu5k5xDzFQvv9WdNKx1VKedyteTGoFR3mDbenMnuW84Qm5hUY8uiVijKASCXU53gHotTu",
  "key39": "2VBH7msQWkJRRJ9cwM8HxcA58ZH7q2UditsDPZos422dNHGUZbKuQbNkZgmvZmufhWtnoqvALkwREbehGKCHGZ54",
  "key40": "5sDPZfJbqws2YcjySmLZeJUxpoaR9P76byZ9ehAhHTiZ1Wdn9sxket5ugjYAYuUVGgvim17nC2eFYauU9Up9Y37V",
  "key41": "5raMfjzKWwVr2MgQwzDi8ZWLggh4kh6CURQ2gxhecio96ugMUNBjAJ2pZvo5jgiDYmG1Y2MfyCWh37jWDtEAC43w",
  "key42": "4i42428EEA2iD6Ge9e768KQjSxwDmSYSivxdnW9EADp3JQohV4VpbM1ArF1RN49VebjffaVVD4j9Zio1AxJoGrD4",
  "key43": "j16K4UjJPWLFqnHPLrwkSWWppPhjbAE2YTNQY3bMfNcDgFgp5jPADTNaJfEx91TUZbnNMHWrPAcX2Wb1UmFaViP",
  "key44": "5Dp3YBfUSvdfrL4XwRNc1BPua35NdcYcWyXj4jyCtMZgNSNfPRJZ9LzRKoad4d6FY885DPNLx5ZAaYq3yjz19hc1",
  "key45": "2VSpbRd5Zt4kTTWLExSD9SB36T5VtpD1ep8jzHVVRvnFJTRAemHRNTfEjP9tibwKDGqjf8F15NBiDzJgvFMLg7Wq"
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
