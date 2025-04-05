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
    "4rvpjx9AyUUTJYPgWCt4HT68DBnShBD285D6kaJ2gj5o3JQE4qUY1kushTS5A5b692aVHbnH2DzgX93DWzVfD1DY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AKaMpHMprFeVC7ZsBKpeAMRuiGPF29tGWpDjJkExdn24kDEirkDfMQ7iLzG2Bucy4WNMoPscSL1HNvRH3fdLUHS",
  "key1": "4gnuYofEMHoHqa6giFww6ssDCCnrLutq12kAwqMfhiZqucwhKXvz36ZMVY2z5ui28mRkRFa2e3oKHCieJfaWhkx8",
  "key2": "2gLoQc6yaxkSEYo19vYi7ExtF1zcQYDzyTtgpTWv8ZibNCp8pf6NXrPGtLeVMCmyyChLNfNFqoYzphS8hm87pXEN",
  "key3": "3fMBJ2YA6xDnRzB8Ka3AX2QkhDxuwfPDp3D4B1HEySZSJpCNHyvg2JctCQwSzL68GN87Gd1Xb43eUDVNm5nvvPLE",
  "key4": "3FCTR4ZvDHcRqErb6JchBWyDLJUpkCZyAdHJ9DznfMaTgjuxMEqFcDLRueb8No6DaoWq2yXVREb4U5yqTvmuyihR",
  "key5": "4xjzT7rNJrtk1zeGCtPydvt4DDjKEMrtePRtNZGx67cu1FdAerdEuLSDsoNnKaFaQucxVewAWVtAjRsZepjpDFqW",
  "key6": "3Fyf2Jw23ji4xPHWhLwTSw1eWxS3sQLz4n7u2dWzHSuihK9Pjg698ZMNiPcz9b6jU3Rp1mppFikNXAgYXq2VwGtR",
  "key7": "3Ryi4mWfyL3sh7u31AF916uoynLbdtN68BJkA6ncRnsn8WCH2H73PuhYQtXCKoUoYCD6XQVzcex92K4qtUQz9yyU",
  "key8": "539Q57yorseH1usYpsnAcpSjzR1uXNjkyTAnGfwoF9w5bmRHzH1tV3VRG8kAx2ZMKZLzHP6rZ5ummyGpds74mDG6",
  "key9": "4nEHA2fFG5GzngrZceX24r3g1UqyvwetQsxaQffR4S1rPGdANJ26CN25b6Yh1xpUirdYqNNXHgZNh4wjza4XQcKE",
  "key10": "5XqQKVKN9te2DaUME59LoGjVe5AwC2beHGhzZ1cCNGx7NX6T9pVLpkdfidajrnxCBAJEuJVaJTcymDvjDMdz4otR",
  "key11": "3YLvb6y56FACcwPw2MmaqtXKT29ryqPwT8Jyb2zG7jfMkFD1Y3PSvX3krXakvQPsnYm4gopBYPDE1PUAScQcwiHM",
  "key12": "EGZjdnQKcLXQrhG2oGUTZV17aMUmKVCEb7ttRPPv3YAFLAD9yuHRJV8Lhs8j6vAntENbwxytteXdk2qidMqcLb4",
  "key13": "5baCD1iZCehCjMeyAGhsGoVaApwmNWHkxCo2PfYxxcnXgeSHSfybHdMQFz6iVWJUi2ayL1MhxQiqrowV5nqZKnnP",
  "key14": "37MqAhMZhfiEbLnY8qibywukALmgud7CD2KnrKFjX65hqnQ1kGwibc8F8UYXuvNXQe51WcvVwMHNqyWZe3A284Xe",
  "key15": "3gcZPUZTQUPQrj5cJFcuPSA7v1jtRJu5Po2Mx11MwEmtDVrrqya93remryK41GZvnRk1SR2rJJxQ9ZAxW8jsar8H",
  "key16": "2rzQRyShXMuimb6EKmmvZLeXa1vVxNPvtyoCDQmXiGA6hJZ7bBHVRFryVy5CtSzHinhACyMyfLrhFCNpPR4fPbgR",
  "key17": "5xTn6tpBdJdZhPLUK44V6iw3sbXwdCGUGgWujeTWoDktvjQV6ENsd8RCZF2RDdSZJZGLRzXqhmN8DnfrEqZmTEne",
  "key18": "4E2nnagvTRnLmyeSuWNEf3JbqbZ94QQDnruSMiN1QVWpgajHYgA3msEsg1abv8Afwq4cCYbW52HdjzdBcdcU5ixb",
  "key19": "ad8zQ6YYzspKRS5rb6j5cagPEHVLw3ik2D1oE3Le6W1q6BEaNLjsnrgiNTk3Y2ibEUwcoBMu7oW9Rkm7tGQd5ep",
  "key20": "5sSf5KpEJa9uPLBL8qoX2wamSS6xLqKRo9MjKqwsVanP4T4ioYdxiUdKVVk1TuGnRQKFufo98vRj8wbmuN2iybix",
  "key21": "5qoGyz6usavZrjbwo6QvS4iB6wc45J57SkbAg2ZGVTCaVa9E3Qi1A6zDL1QyotFyYwVJNUT5eYixVs61p5ksjvQN",
  "key22": "2v34QHcicrtfLkqaoVeYLGxW8G4uCCbdiGKNphqqBzA4UawUtCHzxsYQugoY5W99saEyPFoMNKAc6kfxx781tJ5V",
  "key23": "5GMr3WZmDEu1uojRpadmtvpmkJsjSdpBkfue7Vr2noQmJXnFFoM8vn9vJYYvRiKWi1VqJExKEEGZHrVQhSaeWJii",
  "key24": "3Rvu7LH712rQBoE9qV7UmZk9DF5ujsjrGVqcGUL9VJfEnExCqS6fpxKAtb3jTeuStWaKhRUPzeM8Jod4UCEtuWfJ",
  "key25": "3pUmLcxfqMNvVyNhCMVxHt8yGBcsBcQbipjJpEmxJqmPQx5Cf2ZbjpciQLu2oA2K2PAoxq86KokKxhWhLZRzkJ9N",
  "key26": "4pNx5MVrfzZMzAbn7zcVTdK36TmcD6TW3JsKQd6i1AejjgXV9nC6VFhGgkjframbU5AQqZKfUZvpE3oPavFne1u8",
  "key27": "1kTi8WxgrFA9QnNRXqSgUULVLFY3qmqSdT2oETPk4PrB9TcszaTBJj6hnhCM15DKb8qdW6NenbtbUXeDQ216R1f",
  "key28": "3Yc11q9vyzBgtD5RyzY5o9TRmCJnD9vTuvNPs6xYXQzfoa9wV1YywCLXfndzVozn1pwwtLMXSWMX68GEBV7Ki2Q2",
  "key29": "Xeqak74EaXhBD7iGJZo5meu3HMqsXUGPNJfamvctm9NvGFZEghqFZD8kwixdXHWDV2nJZrdDmb3nRkY1HTitRHs",
  "key30": "5ENZWJEc4aXQKprkDZgKQDY68JHzLQLyK7kHwe8bPApWZAUfXQ8c2WHLFXm1kLPKfV4ACjAYdzYUhv38tXr6x1LL",
  "key31": "yNaB9EksCF77NmDtAfFr4pGyesbNNS2wC9vdtvRcNqpgBJkqHwHqKFZwPBnE8uNE6ELjuXHQNBja4d9HQ3CHM6n",
  "key32": "4h4bxruPzP5DntWiA5zsa1sh8izyDj4sVCNRdKDgrkufgo5egxg21qcxZxHCf6p4jyNdzsvzSKGvvtQMDo3pVJ8L",
  "key33": "3TfuDF8QitugnmjndbxJs9nNmGT2paAop4PeZBXXQGxupbJocCCFSTeDqvFGmeFRSxiwzf54FHzfayhAAJGRkqnQ",
  "key34": "36BM5rjp3fsHz3XUdYca59WzmpJLM3h9iij8A6Ty5HYhvgRPkXRNhXN1giYfLhfAxZu6HrPx6PBX7qdzEFp4Un2B",
  "key35": "3e1SQdnzVTe2z222rPa9GnJVU4xz89wWcyvA4HB6WhGk67bGfXtpByzAbDJJz3kvZygvqAXjgmxFdVEJ7jiYoFmk",
  "key36": "5QtvLwjdaaUHEmkKMTJZHyzHmW7gKyPZEX6NmzVUyebrRfowpN78rTSr9DJAaU8CeLF2vw2XE8cZZVjq9DQXSCqX",
  "key37": "2P9XYTU1z3eA9CP8MguJY49FUQ9Sg4HPkumx7eCVeftLoMBZnrJoNS7Mh5GTFNccmParr1LRXggLNkSQJ1797c83",
  "key38": "BdsrVsUBH72cGRnRvFQmeFDy9kP6HJgHVG7o8LjCuJK3vMxopbV31qPXk7pT3PfKBLPzw4ZW8ZCRzM7UL6k7PqT",
  "key39": "44v1Mb1jBEtS7XbQ2ysJcaviTzEXtz2rx9ACRzgd7VBTkPvmEXLmQqjJY3SScPFNnJ4okXV6Bh7VL1eanVyFAqAp",
  "key40": "5FH9L7CDhTjvRT6KvBGWU6ckLgsGiAZh8tVXCo76vyYVPLFPca2YdMnwNfpPwGPsDm6Y9nZT76A4WFRy53onAP4d",
  "key41": "8hFvAn7VSqDi7XJGfnKeBeAAaxNV3tANpgb9kjrFqWmdBjSrWLHojsjpGcRJPwyhEeNqVv1ZQt1F4JBobetnTMv",
  "key42": "2mCApgYzDDBvDGr2eWggEWzustWQteFNcZ6SDKXb7ccmxUvAUN83YFxjNwMYm24RiBhEGCiLUMHmaLUN73ot6RnE",
  "key43": "36GEnFNPmBR2EaSJ5QUZvVtGoDNTnE8CxF1tEQNmoEDRBqCDM31twkHKRSkAnYWEJxa8YdbNSK4gt4uQ1t6cRAiE",
  "key44": "AE95MvqJ1dvdnLR6Gbf1SBtZygxP8Gok2e4pPdkvDuWVgTF3WUeMwvfapDEv1yMyaALZSkjBCwbm8yemzjy2VRV",
  "key45": "LaPfpz4zHW1iWR8uLmkfQhBN8XmLDCh4dT96u5ytRcSKrBYz8tH5Rx4pBtegzoD3WhXov3LB19cegRZKut1J7jd",
  "key46": "Ygjnk8ucMnhEkaKwom5JnA89YdPch35Hbjg7bSBLkZbTL9MFEP7xRqo1sHhnyqTCJJ1yLcYXyZ8X7P8LpFzMyow"
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
