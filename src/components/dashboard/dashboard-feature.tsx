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
    "4k2GtbmUcKAJMMfkFGLq3YA1s9r5hKABjpykVjcdaceVF8GKaSFrN6HMiBxeBeH5eUjF5kc6R1ifPPqcEBeSwViQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hs7hdzRe14HMAixcVbqR1292QcuxUM2drr8cMsw2qjAsmMMjJibJs7qTwE54HAKEpLQ1qcWkxM99fSepoDP5ksp",
  "key1": "3aDUC5phVFhL6B4CNzXCLuYwviN61wf3kqfxarapwucUukpzujxj4C44wLQoqSSfDJivYvxgaQcRYZcoSuhgcnf",
  "key2": "3hUdN3LTRvB1mENLKduJNdxztVnyNhUESTCgMGGcPudMbJvdMKUZqtwPUAmd2X8YyAseVwsXBQG99Ps3Cejd9q17",
  "key3": "4WfaNAxC8t2tTb97WnYFM8cbk6L9RyzpKRh8qsZJHjy3jpNMKL4HfbzxQQcd42h9GhJW3mwFQZ72Voperbt5PBx3",
  "key4": "5duQFokeU12esaGd1FMU1cCmnHfbrdx4rz733A2xUi3QpUwaHBwkJCUd9iBJkWXxFvDj9ZAH2MZcpZY7y8ZnFEEg",
  "key5": "5ydjqotRFQbiTWHH9HRzFe5V98qzMmavNh5NfDxY5Kp6qgdQQCmBYKYfKkkRbe35T2dLBdvYoHghJVeQfajwNLCu",
  "key6": "2PHYq4duKnzRmcaxoM1z7sEfgYaBtiHF79LZbfDeQAtQWdCF8aayEQAvYZRyUmjkphtTM2ZRyJoQEvRspXwSNwZr",
  "key7": "3WRS2JfaPAqSZAnEMQR65XiHaaTFqt5XtvdqDhwbaUPFH2233pfMUdUPExqtQdFvtbxiV14YmZ5BUXSXZw3XJJE8",
  "key8": "3JWUTxp5pN5itoYy7Zjsnb8tH1cWwtBs287zwFpEvxk9UzsNLghiJ2s7DHZ87WE346xDbmfeNgY3Gwden9mQdaAW",
  "key9": "2JR3Q4jBB4bcMyndDDU1TRfMBDfuZhXzgos3UmRDCA4mqhgnxDxoLuni6bX89iNdF6EhQxmH5LWEWGHdQgNwkyZQ",
  "key10": "nsherARXTH3iCWMgXUk68ms63Bvi6VtyZLefK5AXnTsTxuwA3PqfDkwwAKzmpV2gqqVmHvn12pReeBQc1n4CS9j",
  "key11": "3CXAgTBpmsXuYLkNKbby4pAnHg3x7aTCWYZTCkmfjZKpo9XhJKg5n1bb3JNi2FTxUQ2Sur8boLAkvGifUcbEbVPL",
  "key12": "3ztPLLWRdA2B9ykKqwurJhz1Sbc1TQXAb8VSwkF4C6ieDsBaS3FxQvPh6t34KDqJVfirNrx4z1EMYoK1Y5qTRAHb",
  "key13": "4YVLWhm4rvP1ZbEE6BGYVTj4psVEkAHwZjKDN8hNjHL1koMCoMzymtA3WtCp22jVjaqcWPAp9LaEtrwhtj6dPceL",
  "key14": "3MwzrTTf2ca1HWdfRGFPDNEY9ZLsbdop1nHKvfy5hiUtQkVtQYHKup73R6CsfoQjqFAhucRbrrUno7oUB85P7u67",
  "key15": "3RZohy5DP5AjVD9WHbEitX2mpJDzwVfHaP5udbZor1JoKocjWzsTixqXwSK6ScbA64JTf4iiRHinuQvYcfoSf4kP",
  "key16": "dRKiX5Wo5tFMY2bsymKk9bZN8esUpB8J3HvWEEgCKcDhtVjt5U3gsyXeyX7KoJAwjou1wLrkiWiJbZiJYoUy725",
  "key17": "61uWnPW6CF3q1qG1A4zCpeMYwcq4nFRmTNYjBCZPWP8fgVcs8ZSFxjVDiJJxrLJcem1cYxW5wTLMRUZFspVb75As",
  "key18": "2EgNha8VFBwL9YVYNYHGvT7eXw1Qac3uRnThDBLLVsafXzANsp9VKBo92fvv3VLLwVEcuz2md8JP6SjFWcCbesVG",
  "key19": "3JHFUFDeSgo1RXVWbMnYUUhM6qGSQTdqZ5fnTB2i2nrTChoFVwSiZrSuTP1x7kqyjpn8sNJZFJUp2Xz2UVRb7KNT",
  "key20": "5XrcG9RAp7fKjW7EKS1SsLo773VJFWRi6PHW8GWQoQaMdALEVojieT7b9HGn8RV55DCTBTBZnstwyrfjSmEzLQGp",
  "key21": "5vkRYDgGpYcbohLsjgmowt2Q1DKhpBKyrmC8TUJgMpeGG2qULmSRzkZbWAAFTfjJ5oWwAXth24dyXrZwycHArVGw",
  "key22": "3vKeYDGzYdTtbxSzDbHjGLKzKp3Cw8Yx5mvuFbXzgp3njzyGgvcL5pwaVS93tnnYVYyMmFLKXEa2CLj9LXmXXtY5",
  "key23": "4sHzC2YwZ7CiduD2VzxEXofXYfUR9MmrWi8iPhd99ehkmd1bv8a1g6gHBSGicWD1wKcsX9Q1N1qrKeCpZVoxQBsk",
  "key24": "tioAmHW9wDWxva9B3vTKDqyQdkSnM6RMSAZ964k88zcCFi2cyvqc3LhSG1u53w6Read4jpdSb8yt8C4WY9ANCPZ",
  "key25": "4WnM3ayyD1K5NayvMPYhaRu134J62KtPiZC3YhjpCjzypBny1ra2e4yRYenM2bNqJqGjhfNx8w7GumLvRyHmwE41",
  "key26": "5YawkVrCutmuTEAS7BtgHjMKhaiUWjFQtV8aJkh7v3RQvubcpvBY8FHWLbhhoRwCSsfxrDoMk6s1e5ZJjYN6cAU1",
  "key27": "61gGoXBhyMrwV33Ded4AqgKvShAmftbdchYhUvhAbSRQzf99T5XkZ6gqfVTe3dgefG9PH7zue8jKxQfzXophnQZA",
  "key28": "3A6QqxPyjrG89uB9FBryANt5kgMLjMziRvpJ5s7acFcWMoAG5CEyvwrB6QiirSUSZU4Ciaihkk7qVvMX4vMuqJx7",
  "key29": "3C6tMbeV3bbpf19vTpMd3xWcaxioxBHJhQndraweUXrbTqc6zcrGyyG3CqAPB9qi76RQh755MFC9mUaSpsQiudtm",
  "key30": "4cp32Jbaub8GBnGTRwgBp4isj2mTYHzjLHXMH8uoqRu4P5WsBDjeHA3FBg1dRtP14DMFV9g31SAwmQvuY7DnEV9t",
  "key31": "5fsgCGNieob27aUFyYoiKkGLubpQuHgV5oBs27WymiJqfEosrU5NMEqmD7HiNd1QhYpmTq6FS3Rzmhk7jgHxYF8f",
  "key32": "NfXjoR8VrZdaCxQ9rL663oZaeXJGCGfddGqV8gm3e5jjy2kGRk4dfQ3xBhRhXYRr6t1DpGMUCedKwtDkxUr7t59",
  "key33": "2qyEBKUvokHqbEwLEhh9VFjsgwkSBQbHfAYeBUJY3fZ1QvZXhLpJy6wdn8iMX3ACF2pBuXiZ1gm8LpN9cLxSXmbM",
  "key34": "4ne12pjmgYdaqwT483PnhPC8WaxErU3SwPhTBLjD5M93nMHcfwLk2gbAAWZLhcJ7KS8YFUEk6Ah1ae6FQMTqcWwo",
  "key35": "21JP9bRJZ3KbtTLr4SWJLZK5UoYxu2XdUXDQRvPbcCPgPH5np1HkL4RMuBTfxbBxJNLmbkPfd2VYiJf5rPG5cKhV",
  "key36": "LDsVb2nC5otSZGKLfgjp3U3c5cWERjCMj57B8zyXWqBvedvgVx9z4xZhTJjC1KhPA6DmfHKvuRoEw6JVZPtsiA3",
  "key37": "MYuZomCdDSSNcgiR4bm1U7ma4jB57hfzAco1gCgtKYK2pFBEckcbd3XSgsgKi6cPk54AB6zKkdvvH6PTyvupdvD",
  "key38": "2kfDtWAdhDVRauffWotA37ARGmhDCRG3MzSRQC8u5HdHVdf3cG48iBxbqXVnfj7FrG94NCsQFQg4pBt6jiiLN1Aq",
  "key39": "3B3XpHa57k3My3YWWZTnCt1NN3Hbsk9EXUxuhD9HTsBqahjt6aYvSwwTt4R8BBz2bHgUc8Yj69UEz8CijkrSaAwv",
  "key40": "62fX9PsEYmL3qzHfGbMYDtyojJ16H2NXCVVtvfU4FtTmzyH1XEDhtHQ2JWzPoqZD2DR2Q92o3PrgCLNxfBM8e362",
  "key41": "2qYkhk91uFmGzubavShtuYAUQsxqjRh3V4jQeDt3QF7Xo2hHhDFFoP6Tzo8DQGYzJGwkWooHSFkTALUevAvXUx6V",
  "key42": "Ab9LNc4vBajNoQec26HFZmbse741uT9Ux52pmk1dmXfxdHj6Z52x6H9hPWMAfN1uUNpg4ZEBPw8jk4y2isprQMu",
  "key43": "3oUeyNTkMqsAH1Ro3T4ANivxAYExdQUw41pyCEp1CWYnJoBSKiteubLyYyK3ydPGfgvNUoC3JgCU65uCCsct24pp",
  "key44": "5S2eNi62WHZm1SZa9WTTmmWyUGdfVuQt2zWo3mo1sceFn8XaJV4aMhEZmpWnBd3xqBzw5iAPH9F54DNryXLbnqit",
  "key45": "4aSthoafWTiMWDaBU5tfi5zGE2aLY1Q7yRqg8JrmRVZmQi1PpHBF7R65skHgv2Un3gdxhKK5HK8wmDF74j2CDShM"
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
