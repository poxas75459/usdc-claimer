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
    "33vi4XHaBMSvnHADwcuyDHbEVJoUggphG1VVtBWw5BQKSYUTEhYnn2LWgp6MqH8ybMLCy9ztZiDEZUsMUGAFGnG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a42jDiz1prYBeZN7dDb7sWnzuexiBA2fHJLBrhu4sPMreZyirKFpqVTBW59gZjvAXSnb7t57bQqJzGjfuBJ6re6",
  "key1": "5y7mzJtucyGxmUA1vKKJUQZ9r7qPXAFF4j14vTUfeaXRJMfSShtyLg2pV3Z13GUWZBQvEjyBJ9g7omhDu3RoDtLZ",
  "key2": "mtmcB7P5NhWwqcHQWU8qeotsFtRwbNATGmVEwLAGbbVsGAsC1ocWWebRmeg3gSALL7EkGZU9FPoj6WBMtK7B4fv",
  "key3": "RnDV5Ew8KiGtYRE7ZpQPUnA8qNs1EDnwEAU9g6B2eaoeJ2fZG63kMS6ncwiDAruLL3yFH57Gxi21MnZ6L86fyp8",
  "key4": "ScqozVtJseiFWT6mZcoknoMBrXxPRcZ3mc3PugknJDPxXffTFcEG8UuZeg7nNFvVRQLy5R8BGr3hcS7sZtg3agZ",
  "key5": "4T3uB4WPHZifMZizz4Vw7SaJmeapMtuK73WXRCtL7hSqRABbrGUET2AQXQzxQuRGnPnjft4x14GKzznf6DU8sMNW",
  "key6": "jYN7BdufV1GBYNfuAMHcpEkVnuFCyUDmfz9gqDEnYYUT5mTLcymWNxodqBgVmdzJ3yrF7XJio7XzRfiRc8kmTCi",
  "key7": "xG2daPHhHK3DnJ698RZZVqk39UBUD3WzYoHs77ppTZwjV16cKqHYrjnf33SV3Yp6XqFwGxkQmYPxtgKGxrjr1EP",
  "key8": "58DAn3VmesJ2Z1pjTwPgbdzUy9LYXoJSvmAfXr3sosjoTqqwHZoFr4KyCCqnv7KKuoHuj4P8GfQ9hWmdNm69cj5G",
  "key9": "4rJ18dfKC2CMV9x61v2EmJzPDuTf9417samYzPVFjxjviduX82CbqNhZx5X2sYakLnC3q6BTXjUtAMFEi9gy311E",
  "key10": "57Ng4jHchDUv2Nx5nvDZQBVLKRhAMUe74A2YZEDwEBSwU63JuA3392DkV5mawppFN2dCEn7PYSi4Cnf3A5j4j6BL",
  "key11": "5T1MjpwNrML9mv6KsqA4w4PsrQ9sJhZdGDUUoVpTMsLb8PP19B9qXXSnP3LW3qqGnwJtpVTtmLLzRgZiJ33XJZSw",
  "key12": "Ahqbycdnv9ucjeQgMsgAHdCAXnK19rmqFfUkaUF9dZSywLr2AMdXB14dDjGJ2HtCFNxs4g3nEz4sTUtXLRYhkRJ",
  "key13": "5fPy2n4fzu2UjAMHxr7EuVkKRCCE8Wa1ruVM92YzJRZ8PJbsRoXx65QiG1Jhafmq11eErcrkdCVLNwSmRHAWt13E",
  "key14": "3GcNoHNULtxnJZ1AX4utZ8SJx7Zixjdj2T24EwqeBPkUt4Pb7oa9ZaS27NwT5Z88Jq88E3D83qnsK9S3NxW2Sdey",
  "key15": "3vpkMWEun3tbPk8NaDMK23qJrkEdh29dpmfPV39TrEHfkXqxWRyBeWbxnviaU4tZ9CofEkjsBAQCr9VRaGRzcd3w",
  "key16": "XtinHcoWcuqAabASND4TCnkgpv89PNgYBzH7kNCvmUWJ3XaVHcU8mQJdatoPzCJjLbqBRqWDFcrrnUjjNvz83X5",
  "key17": "2m8u4qJ5xADhhq3WUxpi289bjP8sD7C6pgRb7NNt6ghmee1H5rN2GNiKkY48pDLaLZ7FgF78bNCeudgUJQkQXVNW",
  "key18": "4Z77H3cEr2aWrWpZaZeFATsDnX1nNxGtKDL1iHCGPK7cihFcpGM165FLgAMVK1xN9wtJXcvSqaQPsHShjSzsQ5YN",
  "key19": "3qSNo9viKzjmHiihTGrFKrcTBoGcj5zuKiuSvTAeMTC62Yv99bkxwq8XB1AfxXDnDnhB73HSkLSse74QtrmmE2et",
  "key20": "2jWtL2hMzNtfGXBqyDnCB9TxU375nqGYotmUzf9Hpv3dWnXvKVNXbiTrbxqXXEW1JbKoBR4beBhB8BAfg33tNiie",
  "key21": "4pj2QH6vN5Z6VdN1kfz9ZRzaLWLJKVbuhdHipw7wSCvnZzqxGH3uzPcgw99GiFrSSZcHqDYp8eCFXXA67hcHbigZ",
  "key22": "3fPmDHCGmBPZesDzSZPN4zhc1jeVpzWN3HQ5pfo4KizaRjnd9ysrqg5REGCJ35S6kM8Pdnz4w2DoBsnWo6g676P4",
  "key23": "4PwK5m6YCu3rB2xuzc9cV6fmgH1hh9HhYpWoF1TLh453aNUFRWfgbhToFTYAcbap7RBP2s1vMRy2peMYdg8znfLD",
  "key24": "ZED9QzpFbN7nfPHxq6bsbfhV7gzZZJETX9sZzrJ1wCoAq7qSoLrrYHYAwrZHzL3r9ypnL9gbS4V9mMhYTTE4h5f",
  "key25": "3gukSAzEEc1n1cXJSJusngne8RxumHZKZP3HoQsZi3o3G4VxYdHrdvxwHtbia3cqGCCfGQH4WoAZ7hjWAED5YJ25",
  "key26": "BkGEVJXavTjUzajKXPWdj5t827dqZfmS1pkssVdZp6DDoma6ezVkBK1A3kayJY9ZEjYC4YwEYmkneQeNabj8Q7H",
  "key27": "4N7zZCAdpasZxvY27kL2QEU2JAWxHqAtvRZRXyTfvBJhGiiprnTFdUvmbJ4wfJkzbhLLwoPadAFUdEryvkmNxGph",
  "key28": "rp1mUtNrgx5ftJxxb3z8aq3kBx3ehLPp8N392hbpRGhmETYt8px7WtRYxAiNpBkLin1wvgmibdctxzSeFafYEQC",
  "key29": "59cEZg9TEsD8cqikT7h6E5JNzTQmpULL6qwsHWrHhwQwyRvEBHyVgYXKNhW4Xu1WQjH7T1fa6kjuCAa4R39RMVEH",
  "key30": "4cbJQFD6BBiiq3g7J8tPHKj57C6EEHcqmMRAetGb2cKixGLu3GM2e86DFmufQD5yamzRQQAspyhn7oi9xxQSYCL7",
  "key31": "4PLk9458uuNzAZbz3W8vwuTZZvdbxUGJnaKKYtb51WdhKihrbLNLw4fJsvpqAKLrq7xyGfnD2zNS7vJhijBETw78",
  "key32": "TXxGp15tHqCyqu267NoYE6KHHYeCVYHbQpKmGcnZRwtkJ9hX989pPY4MEAiLLWSxNthFPxbTz9SsTh8qY71JSpY",
  "key33": "3h4i6d6MbWXPAXCtatK2CvBL85J2t6tmPou9d1KpSfXMqUWnHY8z66YQrcruJHY69FyTrNc6ZXawAfqZNTNPDNma",
  "key34": "5SXm71FAdFgKq1HNe97maWWb4JWJtEok82Q4BEVGMN26RYSha51hBYf5tiUgvf8FeX3W9v2HjWLM6tfJCxqBUhie",
  "key35": "3ZG8kYWmmtECfwy3VydX6FsMnVnAccGxpX1gnqGBvwzCLPdW2LvRGCFgicDjAvBjJkDWkW5GSKBHW98x4ghVS8CB",
  "key36": "4TTQVqxRc8GPF6epzd4ve5qx6U2749cJ5evDLSw8caFz1oesnreN8634mBQwjq7wDDCEkArb2az9cgb7MNrWbcms",
  "key37": "5EEYqnPbVKYz5XZJPV9QBRysuCJTxjyrDYgesuZrGL8Bk8AZmZ1KBZKW7TTg7bQWx3VAXhxtgxCdA5JgmoZbu6T9",
  "key38": "tZHvsnXqwGPzpQqsN8AWtXDbZCAnizcrmLMemUUvXdTnnnsyQwc52XqamJVpngYfNrdvkjwP2waFeR8DwsBgJrB",
  "key39": "5DVAeqTUPTVnTvd3djPYsjDgndGfk3azv2nj7ogxjw8o36LQo9JR2Xajb3dVq6ehsHyywc7ND8R9ystBpuTWygHY",
  "key40": "5PtTe4xRRKzV69BN7zum53t66TcbTV8ia3B9bCwsKJSo5MwbGtFunE5rBvdr3YNKiF6zAy1WXqv3fNqH2yEf6jCK",
  "key41": "5jBLv1yhEpLd5zEKeE4eQXTmg3AjPhXXkVXPCXeoATTnjJyD6fqvF86G3nk8RhPSzBUsPcdchZjKkMwwaCAXZdq4",
  "key42": "5Tmt6Q7MHN9dr8SPxvXhmKsNcSHHhrYVGrgip2LBK1buf6tmDAyhDEDY8a1yUbhEpzV7eaE4vZ8FaFS15HXAfbXC",
  "key43": "Fk24sXnE7VEPUaDHVSzCKqg1ykntKvU637sB4C7YbNpaJr189aWeTH5UNqY37zL76sYKpFrxVBmHjcwJqdG8WfM",
  "key44": "54qgXcconJdLAeDpqbyyBwq29pexX6xYbUnth5Jiz7VMfS4J6yeXfYqz9HARxPoY3KWUsbUiwzdttmUGgmpK63oG",
  "key45": "36HN5qHn5Y1317pQY2HcM8LX6JcAW3zZArrpA8sT4cLGDBkLLwYx1tF2wp5eqVS5VqtZVRNfDLcesk2A8Uxgz1T4",
  "key46": "2Zr1XdbxjYFZKfNBvSwvjT6FyMeDFrrCCKt4LDAFSife61oMPwH62yjfSWrGeFqf3T9jFcftp1dk7SFb6EaVHrbC",
  "key47": "5b6GUkY1sTEmTdCzNAU9hsEF6FbZdASwm6MKakgx7jhcJYU9tnkzQdm19SJ7iQkuRQykhon8CgLGmeA4QwXJK97r"
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
