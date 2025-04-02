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
    "56Lm7TqJSDGDomN6wemm3oFTM5SaYj2MTuhkr5tMnbNj9KeVnbgxR6VApVnE6SWBKax6P6cTw5rtTL6XFq5fByN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46sfmCJ5cwq4YgWN3WS7mp3p8wMiXyXdXAXJLVno5g26bL6MESGRkNcGDNfx8orxgPNei2ZrVbhCAGghbGsm2VuV",
  "key1": "2rJ8rCy8773ZE32xNeSZnK213Dt7Ryqoo1VSdsUKfEN8CD67erEAAMKcFsvWvX8KfVLG6qySpSu2qxW6jkbTWwKT",
  "key2": "2w7UrT87RkWWALUwbsAgrv7vxWYgDdR7B4pJXiH3gjMCCGHH4CEQvzaaTczvuG7NGzVhU4exFE4SGWSTaaNWCQ6",
  "key3": "2uXE1c7xqdhjA1M9EDeVgnpqPz1VEEreZQLA8UFmfrupjCwAtTh2C56BjNf9vuaHwatgk33TzH4Qcy8LyG3iLfMf",
  "key4": "dUMnBzKfcvP8yB7KryXMP3nvN2q6i7RxtPdBCp2CbVszigATFnrVqqbh8T47XjnU2FncugXY3T6dkaVnZ6rD7ow",
  "key5": "4N4U2FHvSijMHUqVxEvfPQFWx9uGMDu8UuMuZtT7f6PiFiQ5uaPDdxd1zifzqdvkY3pQVihbyxfJQ9maEueAceLL",
  "key6": "121iNYm45x8LrYWD2Tsvyk7eeZZA9ydCW4zApTsfoS9NF1U8mL7RW9dYbVU3EbNf4GEQLDDzfWvPPVsrFVxi1YsV",
  "key7": "va75gcVe7dNn5L6YTZGP1r7XP6QnSkZJQQfQhNVMCE1DoCY7tFKxvdrkLExya8FaRcZ8HAXNxZpGS6DszaXC17b",
  "key8": "5XjhT8MgVB1qheBUwVvhpCvHb8UvGFLFzetxSiAeyCfqFnJBCjXwYPjjaz5iymWg1H7KbY8jbistqKRuMS7M9mHG",
  "key9": "4TzRH2fustVzmnCAFX8ZvChSfy2JatVv21WoqMvxiq2QLem3btspcXMXKfqW9ucgqZihYsNonCfYzKYE8RbBGrMm",
  "key10": "5Xm3oZpxcsVHBZnUN6Zf9nKeg4aUCXys8M4hzgXMKqaa4jhw7P5WkHjGFUYtv7aesBnr9CRVgEdaET1Pp8NNtCRz",
  "key11": "69PVVrfs1SZBLXBEZqs7W14uAi7fZG4TuXkKifJxJEdtp4xnnqiBp8KeaSy71D8XRLkY5JXWarAxiUS3ferZrsE",
  "key12": "GTnpkyAdxR9SjhnosUkuHqZz2qJGsDpfeG5bhimsQkjHD6fEeJMZervTRiuD7o5Ju8r7dEXh3vjYx64wLsdQwHc",
  "key13": "77tLDHXJe2Vbrf6Q7gRcdyrsTrLLFiLAnHAeBNFjzbvdUn5gznhNzhMMDXnCWzpboBxSDFmN3xpg5HMpeaSe1s1",
  "key14": "2R2iVJgjbb6rU6s6ySMdBrtHp9zMACF9G9nUhC67m6ops3SMTi8XzxSWy8gZz8tBxA7GizDecaTTC7G4e5EdHQgh",
  "key15": "4gxLMt8wNAzRkWexnU4xp123ApyGWR1Jw4wkYtUo7c9e4wMPxbGiTx3bzNCXG9kebM5kcMiSfQ9niSd92qpdRJCj",
  "key16": "4uxMFMChLeEXR5hgSRXpdsrZH7Q4rm3VD9Tii9apuafVYaFLTDy2pYTdDUQ9odbPunwfwTDZxM9XP8n8M6DQRy9z",
  "key17": "5mVPgr6Us9paELLv6oABp5Ydy78YyTuggpdNX78PCjZfxwvPhtpru4K6BuVUCB2D9VWrX5kWnF8ZNvXAUA6Kkky1",
  "key18": "587aySjCfanRMYC834dWnEzMq8upmro6ee99UZ2y85AafbZFmvqYX9e6G2oUnT1WnYu9bnL1YgUixTFmubsZtnxB",
  "key19": "2VGcrccV6jVG1iNghmG6iFRBFFat62BwwmR6Y43b92DL366GtaLaET9mD6ZjC1NP89C3SWq9hKd6gd58vDgP7qua",
  "key20": "5m6F7wrH4Ki6Xw7W1sU7QvbQME9Xtd9qFMnvTy4vE9kXa4JzX81GgPvJrMFvsf1HbCwPUprkGfigLLMe2Hc36XWn",
  "key21": "2XbdhAx3LLbnY9ZAG3moBFPbdFVfpri8JXWJ59p4pNSe9icLMRnGq9rcNP8x4Y7msiwvctvZgEyumCk6M8J3b8p5",
  "key22": "2y5T7NP5FcbEVWMkkABF6wjttjMebEYGuYWneauG764zAbRXiAGqtchWy8jog8bJfbHeQ9qXwkszb3Fd8y3z7CrM",
  "key23": "2wuFoUNkLQbZctLHib7kRJSqT27LrreTFkuKv12ERJh2zxQLKBe8J4MQya1kXUXhS9PxKTkH3ZNPzhbXteELo3rN",
  "key24": "36Bpe8Gz2dcBUdgXEk11mKr2voHjHQdDJ8USMu4P7LZ6shtRfyKmkVuY3MSUeZQsCNTcBuG69FV7iiWerHZ4SKjV",
  "key25": "3jVPLgHvJaC98Q9fsxa6VbUDhB1tSnoSSe7khFC7iXodwzdXdEQxTFvkhcvC32u7c1JmNCYWRiRoGq8sixeQGBRr",
  "key26": "5mQ64S9tb5Yv8QQ2hcsJwR6eHrzizuKEaZSN7vj2eTCSca8haKxPq18MpP669rVMMwXpLtBHNGSjwzxWeV4tX168",
  "key27": "5fPYXq5EfcWoyqjbNiGFhG1Uo4w3iC61FGAViHZFEuZPgJo4aKRD3g7QeAWtQZ5y2LBYnXzrMoYB3BhC5XStRjWh",
  "key28": "5VreXh9xb7eRkgpm4eyuRuxR6NHWE38voKGp9eDcUyQUpUgRyQPWP9MHd69YQsRknxpcEvm2Qbnsh2TtRtbDC37V",
  "key29": "22RkDRy3dFt8kABJjPUycKK19BNTdDDprnHP2BjeWSnxoxbywUiBv1KkVKa7eobXFoqhzSmAPNo68b6aWyvj3FsR",
  "key30": "4GXe5ztq5fkT7wsgAYsDTALRHsCGd9ByBt68WPByp6YqQ6FzQxVZUDxK7Q2czC9iPuzNqSmuiLBs68YnYbNi29E1",
  "key31": "3sZLcnhPiuXtYs3scUY5e4r8vMS7JWfCaqaeW4etdeke42tx4JKH9UGsZXx5up3XFDZq3zVCzqFn49F7YRvpyJpr",
  "key32": "3SgJfi7evZYBn2U1wiGboEdag2kwE8m5K5kZRs984Bzu2bi2GvKFGGBKbyXrai5UpkkU1Q38PjZLUKGChZM3ov8g",
  "key33": "2m1Ywq921kQrze7NCz6epGVjjiMB6omAc4YnvodBhcqcUAgLioqWpHHrUQ4sUmnuyJPR4YJ3u3z7N5XmaxLf2HGd",
  "key34": "56YyjJxKmm1UHFYgxZrBcbpd9fVtVcaFm3RyY6P9RkG8FV8rYzJAWeauhJyErvxeKNqqTwPsnmnQU8h4DXJ2oTcV",
  "key35": "4EDvpfLoE2UY7wdM7EkYNLVTwTCV74TubyQWQzpPahERETiccbjapKGBoPGvP28BPgsGKXjqzH4jrp9QL9YdrF3F",
  "key36": "3uRdwuYEjXypvEtLDdGhm8RK5txHmPmckcymbFDBAHdMjSZtm81uuQqpizFxxKUyuzsS6VQm14GeEAmuT2thgkLq",
  "key37": "5rQXsEKeVWjrgXhwxwwBqwQfd9KKSRfnwskV2YwC9fVAo176eqWb2wnQgt8YTb7bdT235pzbHKiuq9dWSkquyTVW",
  "key38": "5FAVPcFkQJjC9BJVDPV5pdVJU7NhidvkbDgKCnDSZ9TN2cNGucrWPy1s2s95DUeXR5S9iomiDwu3AKgRGE5YP8hC",
  "key39": "43dd5GSwoYjSCVzA6UXHXL3JdUHgoBNzdbJ3Lqg8d3d5sR1Hbhm2rrqLzKNZdStESJKF8cTeahCJNmAri8ULXQ73",
  "key40": "2gRRRMGjLspDtEwpyQJZJPbVNVjsUxMMau4zwSqXSRTexg3DnX8RuNWwZi3R7EAaTCpFbrmgPj4vEN6hZkan37Sb"
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
