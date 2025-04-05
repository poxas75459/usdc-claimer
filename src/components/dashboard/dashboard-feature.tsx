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
    "5B1iBS1jy58JZArvPBUkMoM7cJsxE1jyCnbjNCmC8m3hT7yijeHZxAEzDuzs9dP2HKWoWkwV8bJvwB9nyjzBNPHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iS7NNnj2YAhAU3VFi5weuAAHLvuANFVJXWCVRgRLAyxSeRQhHThYySZia5pgbHUr8mHrobedsSHLd9gx3eXPcg3",
  "key1": "2MQegUdfRC5erjxxSGiZmd59Si8aeHRXKHNb3uVAfH4mZ2d5Xt1YCNT1BMTpcqzGaeTf3QGMwhAZ8WELYgALH6jg",
  "key2": "45XdGfjaRZGZbeKhR25WMKkBVaHS69ChVy5nSqGsgwagTovFgepDsKHXhqDze6kyGuWD9z7ysQ6DhXtuiGrUpDdr",
  "key3": "3jtrTjLZBbbKxU3SrYCskbpjPpiGjn3cfNQ7Bk52B6yepgrswsuQszpDC1jHtFyYidTJmyRAs6TvpzsU4bCkd6zY",
  "key4": "5qX3WCbUHmxHn6cJd7pRDLEq4yBGZGYDbcvLBh2qrM4KSJwjFAPNtp3csjnfgpjfV87zM3fUoR7PAqRdLH85SgZA",
  "key5": "55K3n515YtoxB4DPQ9cpSS4rN65Qz5qiwMHCmBnaJ6Hi8kieW6zvbc5hKbPm1xtiSUgxbhAHYJRxh3Zn8KcWaoUp",
  "key6": "3pMG4qAVJi6yWyobezYekxXULBLTBEqdjzbSwkxBvveREai6bQcYDGuYQjUvJJvRQ99VkXq5DuKJxcbdSR7AUPyp",
  "key7": "3ZdZNoWfUzevQw8DNuGCM3W2cgwUr9NLL4WNvMagVHduUgy5N4L595pFc92GY5kRveuVFTz3txevrSsFNhmvyxK2",
  "key8": "p6gSEbRv9PS4v96Nu2yiq2LRUVDb6EwRWrk79MK5guvHvb4kifFbqVKSHDPs8rhjaaEDNiUgNBrJWjBpx43EayL",
  "key9": "oM8S4KotccKJ4HNdxyz9hoV5aLxXuVsY5YtSX9MU6RBbt9piyLx8mFxSfs1fT3SwjTan7ruV16AQ1ogamuvKXpN",
  "key10": "4RGz1wWiwuwcTkpVEd9GgcNdwV2Hb1iNQfRdvC9iqo2KpZ67eybWDXr2KEFByR4xysRQyYAMdajXJK6aLuBfd4mB",
  "key11": "3XtHWvQCtaemuBDaEeJinFNcqCtTU5Len8iVVkWLiXQ2QtyE8fZNPCoda9GjQ1Wffc7MYzGYpdiLz4mvAzLQ8vUT",
  "key12": "2Kt1kueNejukY6x3bkKpVSbWFMzecbnxBH3fRg4yKP5NrBXbyNqJKKdjH5jF383XAihynkSkNok6PYvLXafLQMT",
  "key13": "4hKcqLPaxJMYcBHzeYv1TBSRYTshmX6cYpmuEYw5cbP9diVPaK6Sehdt6CmNXJTEz16MvVmAL72kqG7MszQv7THM",
  "key14": "3YCbKvQ4TN4RtqAdtPucc5ERy61Vt7K1vJrDN6WD8rTNpED7sMv2EE4v7iy39UYpa1CgKHfEuMgPaGJMWyVJbztV",
  "key15": "2gXZHHB8AD5ibA3dmsDrq7gwJRFyqVrbY13TkeM8ctj9Hm8gsLJqBnnu8uFJKEg8HPKtWJedu9bPnxFqUCdQ8qiR",
  "key16": "4sEPcqGFjjQZCgt3G3AcJuAKUYT1rWwYQ7P7tzke2xFmVmrJd26cesBU5sndbxi4VVW3jpXTwDuvhtNQupZaLCay",
  "key17": "3seT7n88WY21Gkg5A6NB4YrXqCnqWMbeqCEjT8SgS9Vxbi3pnBuP3p4v4SduU9BpVWVx5Rm8ieWCxiW2sLKj96u9",
  "key18": "2f2auuMmLvcxfqesM1S1WTsW7RQ2qCiYxVUKfddMTBG5TRpr5BHDufLjBKgDvphjKBm6Btd6m2UDzMbtAGJKGbqQ",
  "key19": "5X4rDUAJYs5uYMMryRHt1R5xKygeGZurn2pFnH75RnZnkVoDTUbWB6wJxTTvT7JUVSiyqardS9jfbn32ZY7gCWVy",
  "key20": "3hNTVMWULS78WMmK67EqVbWnX9rFbJyAuos75y5W1xPkwUrdifxFX7WyMLMQH58db8opNTAQTwSKqpe9buSXkfzo",
  "key21": "5vFTC4BaB6R1jF4a4PZBmBHFTvrGkmQM3XZcYczpi2AyCovS1i5vrncsCdFi8MPGz9h7XuMZfgEgDN1PZTzQCbdK",
  "key22": "3TkPJqwKU6zqyUJTzWFPKpcBxVzbVYPbkSwgyFyn5w5ExkqsLFW9wdqcxkkrvxQsR8mSFHA5pDvNNuPsqgJk7NVL",
  "key23": "5DdweqSKbNToqUibJb2VJWMAbVJenWsxZcwfRYznqZLQuMS6AXyY8tVtA66tEF3bKKR4zWqCnNJJJCPqU4rEbzXK",
  "key24": "2SQZNaXTyTmHw2iFLMfKbhCmcecbjXTvFKNDXRMvFLxkp3MXKSRouxEYrGghzanJ5Nb9nKmYpgBQVn1quTDsu7Hs",
  "key25": "5FsoQ2E1xN6vdZS5WCL3fuCQuraaCo6NTmzafyZ7gBmVmVVkGF38GrHK9nBkf8DNmgVVPwCYEKCSkSMYD6YrTJFD",
  "key26": "2uMkYsJkS7o3S3MCxCaHonUQtHDGrhPzFGifurGtEii7e3aoBRmS4CtSruZL1oTFnqZXZYQzCgBncnuhf3f3w8HP",
  "key27": "kpZDg9p5KiCJMy2j3cV58Cgc6ZkDZEbd4uRTwXQs44ziSDCksn9ct9GU7b49jooVbSjwH8Kd5RJojYhTSivEdmF",
  "key28": "Jbtg4ixMmWyvv6RB6Mo8m3xhuTPpjYG58wiEDKEvrUpk4EniG4iVxFLAzQ8Ev9dWcbMLWkHK7zjeosYaqUUx93m",
  "key29": "43e5rpJrDcvtR7dnu9GnKScKPHpZVw7C6mCerZgFM3zNbmiZ6WkRwUGz8rZKeiipbYo48n9GPFpMc2y6iJcA2jUd",
  "key30": "EaNW37igrUHey84PV2ZoZuMGExdZrLymi8J3hDJGzVBkpDfm6vhJcLFnS3EfQTjC5W2dnTFVHTNqdjoAz1vkiaL",
  "key31": "5x5ms96d55uCcf1FbgyLco2CiiuspUaaGJ3BBx91PyNPQ2LXcPMFeaGUfYmpd1mgSNVyvyLnjhPV4PB79itVGyXk",
  "key32": "3zcFgdWpL6Rp7d8MzHx6SnHLfwQETiWXfLQy11JfYEpJ7drpbjsKKNJ1mKHHFGQCLQniVvtsHQRbxsuNzasE9Utk",
  "key33": "2Q7eCVyhRMrLqKfZcnsTfwyP4RTxHjJZ4zamE9errscJKKezhhVt2voZf6tcnaARMu9YCRVDxG4XQAwa2ms46v9E",
  "key34": "QRDbyDZHS27NCvMC9RhMjiLxdze88Zv6D9QqB6RA7QMrWenrZtj7NJoRGoH2GtQdMX9tkiWBUtiebQLNAWqRW5d",
  "key35": "3iKM7AaZXczeEnkXPsyJRwxn8gey1DN2sy64TErx2LVxUrpnUNWtgMbeGWYknYyrk2f316f2PVkyCyPf3pEhWxse",
  "key36": "36PYH8kMounKvZZA8JuA5U578JADmSjcsgMvthDZycxG4BqK91EnouChR5vFxNFQy5HRH8gmaKXH2GJb8A2gPgs9",
  "key37": "2rYUdUCsbTdmDSrLFNkmdSkm4K2936KGh28Ci3msogTwskjd1bg1NBDHQctnKQDw5sVUoj9HQKvzoJvWxewfVGPr",
  "key38": "2dR4M68JCNpwd29hXimUiGEUmjaZnKHkqZvWjMjFDLo2BRf2E3EhyqysZfgGWx5cRQDjBD1dUwxZLmyFTcC1pHYb",
  "key39": "4Gw28ybynCH45k2dNcxTCHkSjP9UiCR1VTxkVmUaXGkh7RugLM1bHrZL1Zn4cUrYDVuyaZ1uCtKha4Zoih8QuhRq"
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
