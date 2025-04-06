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
    "5Xvef7KxmgyhmHgrJJZbUt6zsNgjKv5GbPW88Ew7hy41SwH7pq2zQukkXzgrn7mW1rbueVMTiLbDLmBSwbnriAef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q2JBPEbZubRtw7rYFmPgN6YeRC9ChBbxz1FaRCQxHoAG4ZCNKvdo84Sw41CbS1jYGXuG7Z2n1C489CbcjpTHDSA",
  "key1": "asX6wgDm9ycTSXeo6mjFUVvVs4KkD5gVMa7h5KtPdvTz52p3kTwy4dzBKkvmXnZYFU388NvcCWYyYmJiSVkg4um",
  "key2": "Q2CUyUDAJoy733rmikRjroWpsBounBtHVf6RKWNYyefSx3h5GqswG7CdXKNsvPjJiKoSkKWE1TuvXPD2JRbMcpG",
  "key3": "46L7dUUBQtE5JBSEJYo6PkhNKcNtv2exizaAQ2T9kHvm7oz3FVEwnX8rE8qgKtxzXHeDo64S65x2LDKp2foU8SVC",
  "key4": "64f79bwxrk6BaL45zKZ6xUTTgs4tQridYYXxBWMD5iYCMMpBEBuXUNURvVWwve8XXoNRakgbAZnFCFYfVNuuoGkQ",
  "key5": "23XsrQmDvSZpAkhf9zhi5hH1BGiLQyC8wJygtB8mKm8hkFzQMcWZZZXUBGd4pNRd7oKKWW2ybQmTPDEo9B8sbXmZ",
  "key6": "3vmkpJgMEmXa3wwHuQAq4zk3ETHTH4XQQkpmuFZtskr11VAXEtbgEnLVpezhjkFXK8b8AX9eSD1BoKPPpcsegpSh",
  "key7": "3iaTamuggZPdoHXHpGppgEak8YGLdPvC6xLv32FazF12g7bp731XmSVwpPr1JhsMZQkf7Z7m9irugTD94gxLwQP5",
  "key8": "2F1iM5RWHBhw1erg5tugqgrWgsE8C3ZE5Cj9MU6FWVPsB1WwsSpNwvhvWwdYbsxxA4HEwrVEhN2D4jfnFcVd3qPg",
  "key9": "3inmbBLaF8EqjiYEReSVYo4QsPYunMXxyzwVc8Fo8vHvURT6NDzXfpAvXKLyvhYkGUqYKqSfj5oHfnsJf3WnTVfk",
  "key10": "3j6M5o8TjT8PBh5QftaDXQEquGe9NZUzdU2opjdk6yC7rCXJb3fLpJFfS8NfjEDusz6JFTEzAW7pre736SAkWDLN",
  "key11": "23hrgDow1Ykj12BeW3gX2CmcARgAYVnCSktsZMZHDwDUVAfaW4yAn9kd4isQZuSomCRuPTDLNNYdQh2ZqVKGrMAK",
  "key12": "2G16GKsjtNyPLTepoUK7fptGr4Rrqf2zc5ja1aZtC2LAQ2UwSUvLHAsCem6Jn2sp2Nt4eW55qmigjZ9gVGW4CJUX",
  "key13": "58hTNNoFYBtMeJNVdeEvPRygziYoW4zaDLeyCU3paUS1NaRkjhB3nCU6uJtccvmu7cAbfoc2s4SmdRhsv5VsteG7",
  "key14": "33Vb7PPbAr888QcjidPvSdk9H19Gs6KqTRiuoftGZUZbRqHPxRLsPfu31c7kLujHUYf2a2FshUE46Yw79mw28Ese",
  "key15": "k5K8vLqaY6zSagowJrcRGBPyMi9ec1mYdnwXGxFkd3JCnbrjuQjBT8eZ34JbYpizJmMFJLG4DA9PN24PkhgdGzb",
  "key16": "2gHWWzPLZXVHRtkRGycpC24Tir75BtifPFVcA9TNTNZiUJ6tnNyfSgzETo1z58e9SnhN8fZY4PauNt8p2X3h8pq5",
  "key17": "4WPP2zZw49X9Ap9bD2EB4fag8oKzQ1KCKCvTHgQQgAR17cCnGKit4TjPMp6EnRkuKRAXvJcwaFGTiTCDKJoG1rkW",
  "key18": "4oMxUpHTDucHVGRwnoGrYB46jARpf32X6pWREeaQA8LZjZLZjJQZWizLEqTufyvFxZfut8mb1LQsm7ujbfXRX9q8",
  "key19": "2n2ZM2aLYnXyXwNrt4F4GWJE8haULyj67mFdodGbq7o9gUqLVFwdhZ1wNDCqZS9hz6vMeeAt2gos7ygjuvZ3AGag",
  "key20": "3u7hcAuCy1ABi76p55LrzB43HpYJQJtcfqixp8nGxaxVyxwjg1cG7YF9inMANVbUosHjbKUiTozLwbBdf2E5eUV1",
  "key21": "5RMAD3W1WZaAphsfvbxbGRtgRDnwwsAfgs8mSsqhTokWFrioNUD98Gpketed99FzgJwUMyQe3fVgo5b7TdYtfsBX",
  "key22": "4p37kyZsgmjmAtgDKcbCrMghfWrk1swqKdsGoPA4Dpyhk6kp5pbKzDgXxXtr72xP7AR32R7rS1vx3HjLLdpqzv85",
  "key23": "5FyFVSJMsrzYoj2vK4Dd1N35qaeXgmDHSg6Bbau4LqqrVv7tVhE3yDxQjhFE6vCVSgWa7pgEZznKWkJeEviVmsKe",
  "key24": "HCLGhEYQqkSjxaHv6ktoyaf9Aow5jgQz3vZyfqsakvx8YkBB2D2vy616NiQm16CSV7zp57SRk2NkxvDYs1tfeXK",
  "key25": "34bhFUxogpjuP2Ho85aC9MRvi4eCYcodVfJ7pEZmxHjyFbY4D6PRQg5SxSi6DrSz54yJVc7bGn2m83hX7zC2vzVr",
  "key26": "5Zh6WMr4kQZ6gQ4Gcin1KbtQfUwueK1ynWkpJEEKyCuiQBwbiZUshExxURoRMo6pneWnknEmNBtGK8E7JjXZVnyH",
  "key27": "3BHSfJpN5WFyFZ18HK2AaEUPZDoofJtbAyzC5HdhkhFpuRkHzz7pb3xNqRFiPviohFj7fTA9yar9iLUwrJDD9ZDH",
  "key28": "3zytyKM9Pwx4bcQ7pPAkmVfGLecPhiZn9QdNrKAdHXogwDw3wJJErLT2SJFv9z3rGZZzMxHWneXRmphJXHLF9hbT",
  "key29": "47zxDFiWSVwYuQw3UvZG9JXHDbrftANM6wN9jakKDp1QkjrvFvcb6DM2RagNgndVmaK7368dAkA2TbPahSGhHzuV",
  "key30": "5wju2FBNokQQwnpQ4kDn9y9Aho57hjkNi4fWVRC816PjHAYYQ6fw56XSxu5v9LysFUn9aDBBP78muiquuJCEuGJU",
  "key31": "t1k67Naw3FZAffcEitsrpt4JDNzg4WiwPWe8jRDT5L8tNA2J22du3cjctWcbWi5hvLXztNPwbu1uHoKq8AW3jPk",
  "key32": "45g67dELfN3ci6psiPbGVvR8o9m3WrfdpSCpdQLdQMHDmyfr9tA9y8PmgWMRp4qe4ftiFz8gVexTFramm9UU6n53",
  "key33": "5H7tMQsV9bet3HqKedpK7hSccHUhLabypW5gvquJQbauDchUrMQUriZrckwTpjCmytchffcbpfRg29vWzmXy7i6P",
  "key34": "4esBPJthipzeK1BdboRCNut71KLCQcADrgeL2cB2rYx6eeod7fFpsTjiwZ5zTFtmgrPvZvnSKYaHhAt388zqMorv"
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
