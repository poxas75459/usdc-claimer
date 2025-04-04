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
    "5gFWMeEJkiU6YycnaiygM7Taq6jfe1jbW1qAzoXCuWvva7zfytDATi5XQMxYVCTz231pJjsJ14JqZaMxpWqfCT4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EmPBMM3HwTDMwoKcyU8wNzuDvyGBgUgHyN7AqGZhZ4BQ7HqvC8m4ebxL8aLzE3zni2vGr2rFrSL8XXr85oC8Ktc",
  "key1": "5iZ7UY3yer6q37Dgo2UFdjdt4XBq6EVSUBBADUSK3gvaoU1iPvQTDZk8TEAbbpLY9KvkkcKY4kFfzgbM6R5xA3ma",
  "key2": "cECZnvfK4mb6HZmMm6Yjsxk4dR6FPqkaZijcjRqvmzve233vyo2tA9MGUosqVfjtV8Co42R1X9eEXp9t1EEECwD",
  "key3": "2NT5PFAWPUehQUF48K398oLdM87mm7HyvBDdSBacfjEjfDM6rtMufqp3euBZDEuyXnhxH41i2T1eBNEPNZ8oH38H",
  "key4": "4T9CaUaD1tPrvesEyuxVVKa98k2sFc873X6wdvCVR2GRFgbptpz5xvM4fi76TTiZfcBVAatc9EGj9sf1D6tvwykS",
  "key5": "4hqmMzWtDve7rsFBJDthAKs4oUGA1BNGTjCTfAPN3fqFEBRagvTTHMHrtyg5EbQmUvr55faDjojcRZtggH5L3d6m",
  "key6": "2PWCHejKA1ZfAXL6hvCuovtUrDiMMt8mCmZptNqLZDGPmRXCXpXVcc3a8YqJB9eUFMKyjU2ovzE8rFjWuEArdHug",
  "key7": "3QSdn6ng72thDGSabiJfR13jCUL69juKUD4rRmzzHxEi4xUTFwWnBRZB2HRtJt7PNZuuWoBTN4bxA6syduDuFfhT",
  "key8": "3VutkEL4bJSCsKbUBvaXcSLk9g2z8fAv1oKMAYDVGSk2tCq27VmoJptVmcU628AcpdbK47BQfCaMqHJqKTG7xcHC",
  "key9": "2FZDTkmk2BjtXsZVtXvsbUowpgyd4gzpB91LqffQy1Uog8ZiVqyCB1jfexgPS8kRrmwm26ZZMSWjUGDdi2zxtjqi",
  "key10": "3YnbfNPomjd3XXxFhcuqzUztTWHR3a6Hegc4f6AxGagRdTG7tTfXj8hbhDUe83bMH6ccFibK78ZSdLkWCZPbbzQg",
  "key11": "2f8tp24peKZtSgsaM6DjiJPyXY4HZi83Bt9hAiP8Uwtj1o4j67vEGFxyNVncTs2FgCpqxYUBE2pmWvFNzthQheS5",
  "key12": "55nP7kEsUvVj2DmuwcpxnuJyPiCXf39LnELipcZEWNqYDkukTrryW57hLNcH5SYXv9oU9uTVoU8b7NjArEb5hVux",
  "key13": "ErJoB8264KZ4bZQzeXvXeeDobChy3dchNsnkvK8hrc8YP3rUQh9ECSxuqM59Fof5jbMfb7pjQioXGo2fESPAwBC",
  "key14": "4EpYNZ2kMoR8cd6EVTyoPSbXVsrumPtWRCdp7e6uZKnrosbGmss3ERUArZmAS6jdiADaDeE2chhpJMKbKAeFQq7x",
  "key15": "24zsc5XxxG6JZ7gcXSJKgGXHxAFoFDz4wjJ8t5MsUXFdjcZzy15Hj5g536wcsBsLnn4x9kBqguGPVtZjnoFFUvYq",
  "key16": "FA6ry59Z2ERLMd9Zdrf2Mnj9Mk4QpxrQ6dhAfc7JhZSBqTc5iySeStV84XmVLmZKpqKiuEGnCeUtyn4WJUBTqMA",
  "key17": "5UFGtce9sMut2nUBihUCFLxbVfCrsEWTyDKD5wKaL4XZHZN3v8aVPrG1FF9RewT5WENffKxFPcYwHrKhRVeqL2PB",
  "key18": "27K4t9WZSAVoDA8gTuGhngdd9GpgxE2uWA2DMLq12QeWkeG8TgCNzuBRb7Zq48s9qDsJY4fGJBBrsKgFmsq1VS6o",
  "key19": "4rbNky3ccvHiv1CzvXWfamB2R6unad85ytELHNWXB3UPXn2XswxPtJbKBTqYX7Uqx2Jj6SoVUvzoUaoUWq9VkmXc",
  "key20": "3to39j6nfumQnVCYEhWUfzvMg2dnboE2B8anUqRsmY1UpKJA6qjJfucEHPhznzTnHzaZg73cnJLzX2ZEs4F7aeZA",
  "key21": "4ogjcRgyc4P4YkHXfKr6vkwe2uQ4icYPf8tfzWmgv93opPfjNkZ7JJsdCDqEfJ9J1h8xziTsYrLcb9xFPdEcg1ty",
  "key22": "5cbkqBDnUiTRM7YphTdnrirgqQcbZQFcANTswacVhoJ9jHGVKmJoorYZ9HqUHE4NpX1f7Kse1W3R2xskyMSgVy2s",
  "key23": "43T7EcS3ri6fsx84ksSWRjZxnBfZFpngRc4fQ4CWtHcgWWD6rRLm6DjaNRo1RkSdxEb8poWcqVPm4DzGqh95LqAA",
  "key24": "3WjtpBheN3q5Suzymm91uGwNgGQ6C6GPKLzEGyR2wReBc5mVXzggTn3P3aDk1fHd89pxQsVHyNt4dBx9NNT5iTYS",
  "key25": "5Ta86UcyaRrnGDhhHz6d7fML4qxkdnNYmJfkvfzCSfSaEqSEYbsaKy612RhE8hYejDs4oA4i6xd7rqiqjoroQwk8",
  "key26": "24wsiexL5qq9xqzmJ5CR6QSVTCjDGMKAncYQF1Eb9RE2XzkR6Yv4FVLfqT155jATRDmRrpyGJg5QA8cYPEhAeJ5M",
  "key27": "52ZSvJ1N5jm3utkAwuwtJoHJveJtzRsufDrkiaWCAXHSFWZ8tcWKKnQUUeZQm6nmqXyPvL1sj1BR9j65JaDuwE8Q",
  "key28": "Rd9B9rYQrDVirmpxF1wBZcxmuHdebc977bhhXnifczFk396KQYfewaXj6y8g4AcQjqXLcZcaSQ8ieaYyMpogYsC",
  "key29": "3Rp4yKRJBdBs6bsJNsdHBZfrYvEYe1Az7Lk4LrB1Dx2pH3SJ6RYZeSvs8Z3RuJyAsN7X3pCGzgfxF8sdwzPiM9fK",
  "key30": "2jKj5yqTU2igL8F4JFyhQBPy3pA3FYbEVtgbAzkiFVeQXBkvmhK3s2hZZ6WpTKdKLGkPNc2amMdTrWrZWL5Jw3Wb",
  "key31": "5wmh5R3K2UCrxLEnv6Nqv6FYhfmPcuF8UwVKTHmSLN6MTfzLTF61pTqAdDNLLKD6zdPcXEZ4AwQAqHTNN3eKG3wN",
  "key32": "2NfBF255b4192AzuZES99bNAUuGdfNSEqUhhV1m2LMZLrUmme7kbmFc9zWZN1uddWekwV777LPiTrqVFhsW17fgc",
  "key33": "4ZJXbiFcsA655f4bfXPYG4ehqxhn7UnHJBC9GYv771Vt2Q7mwVLJ8kCGef8fpxKDZ3WhPhCqutAU4Vy2KxjWhafN",
  "key34": "6Npq45Exp5UUDdW1MQN7NyHiQadQPXPBzEwY2Hgv9VqHEyFSEyxppg7tgaZh51QzaUCpbKUQBoFvRYpnamMhraT",
  "key35": "3GmA6btegG3ZcUvimQrNuKHgBpoLfvssDpoM1CaZf7PUNqKQFeerB4zrn5FuBCFZgf1NU19kXgyMypXPn47FGGRQ",
  "key36": "4uYt246ZqF9YKh7ZfLuGFAQgpZ1mq7rM75sGPMJgvm2Q2wRKhper5FTRrd1NFqfR2aPwgFPo3A8fzXKZNHgp3y9y",
  "key37": "4iJ2nBNZpftg3RBbPcVmDQRKLEM9iHkc3qKMHGmMbMhTe5vEnwjYmTtXUdqB9f9yD7v75Ac51QK3i6fqg1UiCeNR",
  "key38": "4sGA31Z5VyoVaEXgRAPEmm8XWRsX9f64orCjuGuRaBFUk7aHsy8vrZcTbddkpirbr5kEAa8rY3Ljjt5RwC8ugKJh",
  "key39": "5d43PbGE4LPcVF97wvrLBDEAsSX6QD6GiCW2ksJKHtHjNBwNNCNReQh6BRAtCMKNmXpXuzh7nmrbjNLx726jjyjJ",
  "key40": "2pNRTwVt5e9SrdhWNxfWoVPTXxm7N6sVWpnweH1cMPcmLHgsUQKwvHy3pz2uvyKr69hAqyFz35CmKgqUhyokVX1d",
  "key41": "4jD3to3G4i1Esu5Dg79je6pGuWc2WrKNR7ST1kW5o2AkMzXsjVtWzPcCueUwXt5jeVFS7hr3ZBiDz3gqPXHzdp1D",
  "key42": "2jQ2eZMG9DGBsoddZMWAvUFy264DPTPEGJ81jMKwGvXhPmEnMZL8igdMBTcUYQcNqRjMK29jUGxWoSvasQoz7Fuw",
  "key43": "4k6DD9HqcXk8TaC8HpHGQfqLEi7qxyoYWcB4ynYje1NwNWbKdcSdh5C9dng6hKSiBCpbTHUVQZMAPo5LdJ85phqT",
  "key44": "5F9rQpE3nR3th7NuDVV5ep7fTv56c4TmCs4B3KbWMhMCcsvqfoNxhyKz4MswjqpA8fPD1YTYucPmRj7532id9Mv",
  "key45": "5Ff7PSdjBNP4KhNAxtTowMczQT9XJ43CrYsoxrVK2kCYKFj5wjfhFiqVf9kWfALCsLLFqBZCmjN56LHymygFMCgA"
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
