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
    "2okgUJ6LaPrGnkf5iaSdDD7YvqJDjhJZYoc3uCjsstQcAwBDgrKxAQTJ67okiwjrVsoxZA5TUjHYNxaYfCiVxefE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dPvctRfCs3SooTQfCxr537Ma5dLPv9L6VUUv7VnzuWSvN9cxTLEwqw7SDv8pJuzFRe6qbSj6UtSM1vLUFuKj9ZR",
  "key1": "3ek3YQTkcCsMUeX9bYh1vK1mzx6LmGWkRvSC3QMKERstyYb9W5oGtiQQ3Mc3x2EV4YRjLbeMvKCrnrhUXShZY2Us",
  "key2": "5HmT9VWbKiGALKmERco4CEAb6rZt9QA1hCqfkRZqgy43evDgSDz6iKuSfDWMNqxfCsNNhfgegzYCHmTA1pNtdvX1",
  "key3": "42r17ANvjcZkQZ2dL81SJJPR5t7WkgBFioR1zahgp1QaWtQWvYqkwVUQ6Ufiz2nyN6CBoREXg1rouxjctmzw3wQ1",
  "key4": "2PPbJ9JVoDZ2Yjb4cXqurYFTLYzzUbuhFxfh7X8CfhS5Sek5PXAvg11MYdtd1qU7pwKpVg8W4qZyhZos9Y6rgzCM",
  "key5": "5SCKEWSZVCfJzDF6vctuCsUmmcviU4qSKUqLSZ9VuVn9n3WjJzxjZNh5vL8v2UWFYGbitx8w5FJzH7S7NUohpQrM",
  "key6": "2VJEoCkmsuYhZy1cWzS2epQr89cfm1Z7uipwQzvrMvLVjHhts8LdM3SG25Zef62aGJ5gihUsrUZ9ixBBs1FVyFzj",
  "key7": "4MoR3UbcfNKnrH4FsLeQA1SVB7xu2MCKD92yTyg6TdFYwnMfLJrBTTiHtyg669UAZMpqAHMvnhFxWqUgy4t1TDjX",
  "key8": "5o8vVMXoPBsWRhyYHsvr8dh3fVVQSx5FYUmGQSLqe6PLzKhg7LZyoMLvAArhkgNgCowSvyE7avsogE9WTTzkMT9J",
  "key9": "4H1FLff1aHdKhxqvGw2yMEZP5QLK3VLy9zPb88DZ13uLox6NcuXcrEAUDEzHoY41PZdnuP7m74fmG2fCNxGaNVuA",
  "key10": "5soWMVx9VCRgHtXUoScbc56GQxNJ5GK4TkNt5RJYbEtqJWgfa44SxTN2urECoxiBaQiFH1FxHgY38vCQM9EKBLWu",
  "key11": "Sii7nqh4qQrpqn9hm6xNsowdy36tKjgzai4By9vu2bWcA99UGXm22Ldb9emPH2p3NtdWjhBpeqnuWYVuqGbUJzi",
  "key12": "3eg5FsEVKEM1yxk7PyqCAWjRtMrcXbWuBAA9hzYs5APgH6suMXjad7ty7QZD6TMYxckLbYVGhhGSMqEEM9gXDa8e",
  "key13": "5tyQtV5BNyLY3jbt2vk6rNz6Am3jHvDSYDDyzDUKWPggLbYT4oM4Xc6YVuaVWTfwjSTwDPBj3TPadiKEsjACqtXP",
  "key14": "5SR3D8MW7kpEfVLRzNDPHDGJZkj89Mfs9KYQQA1QZLSKjywAPJV6FNjTHEPjR17bJtjgfZVz5qwf2kzmE4XMNeju",
  "key15": "4BAxnHxzQBBbw56D68cZddU84vptDwANi39Buxjc35XZuJUURoXbqSag74NAiD5PbJagqCQipj1wPHDuvzkMMrSg",
  "key16": "3QNiGYxef4C6Tph2e9QNeXx2RLmDDCvCJiFtYHVheG8ApN99PRBNqGCjUsN3Hju1vWsjF8LPeuqXJkj4Bbyszp8p",
  "key17": "2K7Kho19TojdjwEZWYWdQheLmZuEgWocPcrCXWMgVFFKtCeQdwDvQq6itmho9CdoAbcPnkKx31UiChbwbpxEZqLn",
  "key18": "59SKnfw4ghVvV89KLE27WbipyJj1ywWH2RcLXoxkvnpvWEj63ZS4a16qEcFwYumrk9tuM5vCiZkycchxXkdQ41mu",
  "key19": "5xJ6cHLVMk4NVwAUieJ3GZTufRLKVg6TdoijQ3B7ogK4wZ66KpHdJ3tuTUy2bf6tJWV3roq3TUnqa5rTnZFuszHY",
  "key20": "4GVsg5XstAMPRsmzyQsZ781d5se4H5zWwApRahJhKmDyJSgoPUJ8yGjCjvGPnnEvAwdbMLj8RoPfE68FWysmkKTC",
  "key21": "4qmKyvHwLYZKEYDjnsCqBC1UUbGxzjVT5kp4jKR4fD7bzu32ujEZxZ5o3ZZ2buZ2y6977Mk3d2SfFFPBwRmsB2Es",
  "key22": "3tC8w6ygciqAX5fuAcNzvg9w3Zo8XBakStEttpoxrbtRuB2MoacsntooFJ62dzaKTrzLRcHahX8K7pRy56C4G3Az",
  "key23": "2tGSsrqQiwmAH2KjFs3f4y8awmEgfqzonZojWmqWEDf9RdX92Pyz6P6gkdo7Jv4541Yomr5TVQiLdnt9NfCvn7at",
  "key24": "3neLqtJhtNeNGZpGQBDLERtAsD1kGsm5idXz21x86WudGPYNRqhvkCxxdG2h6YSaTvTDguDCC9KQK9Zj51K1pVnA",
  "key25": "39ps4MYq261xnxgEszJH3kGnVU33QVzQyuCb2swvqJogicHMxoxV9xH5vojChBG86kQZ6V4sNUHJCwqg4WR1Tf1",
  "key26": "5tSAHQvHcXhSjdCPF72i7awzJrXrrvASUTeDT1ExnKVPh76iWsVeLv93Lk7emg1a3KimAPARtLXZB3YAtn1ebbFr",
  "key27": "23BGN13dX1KJgun9uDUvScfZ2j1mu9w6AgqwGoty3XuygztSDCen48SiHwdM8NsawecWPebeqqxb5UY5qa5h5JCf",
  "key28": "4kiZPc5vyeniBv8t7G2668YS1rG7ZPgQRr8Q13CL1WgD7s7trqD5K6L95pvALh5wx5kA4mWyLczoDfWsULhaZawS",
  "key29": "3zvChouD8TGduq1FL7xJx53J6Ma7ekkAYwFL954zg9Eod1UvRXLHGMdFQwoLiL6WjZxu2KBUqgiRnHdj5ZBupAAn",
  "key30": "3y3MxnBe3AygnqX6zA37MwQKyJjL2Tvd4HbbMSYzz6Jr8avf7ESmHJ5bAseYH1rmdz2vEEs2MFMgtyJZDsD5MqDi",
  "key31": "5EqBYFqDaViGWJvYEZFvjwTZ2dzjnrYVACa6U94d5wvuNQ3uBNa4JWqNzvD5NR2ML77dXm43u3wmD9PnGkXLsKUJ",
  "key32": "4Th4TCaNjwawK1c6CQmoHj9Xz7QSZWHMDh59gVo4AP7GWUDLkR7wm4nAhYxERt4KuYnqs3WjxNzonjuGfizafiDk",
  "key33": "4bPHMCMHYUqMtvk3AFzGg6NrjpiQENdSGmFvxQVTZktjxoMcRcPf3oeuonTQjtA6yzJTsvt9HdzcU3c8ZTKWca6q",
  "key34": "2LUtb6AXLTsrVc2UMy8FDBFrTMEp2ZD6VX7wU1rd4YWKXCVZMxrFJS12RT1M21p94WZATebjYWCfL7ijKkYVVi8V",
  "key35": "3jdULoBgitGwXy7fGRvNzQYSR94mYKCnzRjJTXJ6rJeSxhjLRKQiiibcrgHQ7HQi6TN5Q8SJWW45wohWdePRc8Zh",
  "key36": "Te9iNuVbyYyPW9yrjZ6ansmMHfjLgcNmsbzhN2inmCgjvm4tHggfBXdz9qiw3Jzy9RRjwJ9NndRxPYSdHBgq9CG",
  "key37": "3W87fZceH1B7uVxssBZoXEBAi2eo2tZxmDzmZUFWGunSQMYuPCu1XRJzprndwqdmxpNPkFxX7Yxsu53FyhTk93re",
  "key38": "3x2NRSF83oGJP1SfFrfyeNxzr3aMXt5nJKznmXZpxydxULFBQtRYuWbudANWWpVapW2HKKZ8uDufs7L7zay6mFhD",
  "key39": "5G9imeaU3MRUx1oJLg3Bd6hk7j2fBCKZxLVNxQz2UZndGZtKKqaEB9hDyrVsbVh3RwcUnnrGZPz5ZkHmy4ndQDr8",
  "key40": "2QJChHBMW3gkt7NMc6NVkHbz7RWkKoWPHAXhfEHVXL8HjgW4KpHJUdgcbY6wgE2AWum2g63wzmGKaS5BG9FZYqca",
  "key41": "B5snYxZK5QGUYfo8frJ3ivz4wvdpjwXTtg8wsQx9K6mLs7SHJdPG7P6tvt2hMxaecZ4L5B4fDAt6rDdiqjA15Qq"
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
