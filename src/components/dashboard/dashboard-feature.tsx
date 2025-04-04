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
    "2rVoTNzP8YawvMPovGhFLH1fMRRuN5GGvkdLAa27j4LzrZZLjw3wPBPZtHpUuxF5pP7KisS73XRQcnFiKYVafo1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33nNVBERjjrRV7fvg7s3prh4nA3kd4MTCYFx6wGmkme8RwShoqCdPgbozLyKidGR9ihhUrtpnV5cx7e2qAmq7MYq",
  "key1": "5p3kRa5V8k8nLH8CX8T47kGvWUz69niLef2yCSWWdH6XmXZgEyge9reaSEgzzvBEhq6zgGVdfzvCmbZPqnrMzFoq",
  "key2": "4RAMfFxz6NQRpM5Qn5HefD3q4e3SMvn1MAqrBZiWCLKrFVSRN3ACvoFksjEVVgjZQkjtugs7tWooHwTaQgag5t9q",
  "key3": "RMteT7RpAc1QGdd3hB6MwdDvdLZmUKUyq158Yaiq7MZpYvMXJTZ2jXgNYQtoGLNq163A9hpD1bwF3xgvYjsAKoV",
  "key4": "5PTdEVX2uLtULgx66p4fjDsU9Yr4i3H7Y6PYzEF5DfTszawQq16RkgpMjP8iQFc5qvxeQ4MQE8W5ahyPKFc3kmFX",
  "key5": "2sq9p6Z9HrPXwwNVgftyEdAH2YaUVGhmwgSxspxcrM5LMbwo4qy4jM1THyumtMneXH1wKvVM78Ms88QXH7ztTZZ5",
  "key6": "5BnrykYxepL41EZyd94KbZfZhakW89cf3MbBEaeBeFcCTxDqXjunmLmtLFChqA4YU1nN7fKJMbDfnTkrZwbDTRyH",
  "key7": "4ydz7VK1SEXpPfTMasfHhJcQjFiutGEcomizcnjv5dqcU328KdESQypaArHnhQYiqsYhB4aiaADzXeFp95vbbMB6",
  "key8": "2cWUkdThASFjCQQARKzqYhYi3F8tutgth2KA7eDHdFuHN2mW35fjBq2yBfFdYAFfYrWsGtJ8AVgq5PhzsAi4qq4E",
  "key9": "44xZzpGVTRj8d7GRo19GSteK1xKsptyjHLPBwQhDQxmpYXf181SVRmW4UZ38CaEET1U5qYZb7j9hU6KomykjcVHi",
  "key10": "22cE427jXibVewe2qaTwg1ygTWBREjcnBuRPhgjiCPD7n4MWwQ4BDbStNM69LHZ99tJzu3e76ShH7iuDPeXQgXWj",
  "key11": "42HSXgic9AH9V47oDvNypc5tWRep3nPrtuMjZ9MmATXs6Cfu6hh964Bi9h4c4d39RqMLexFJjqzPvjXryb4BSXsY",
  "key12": "5EzHTqy6qv4Noc6ByzsjGMvJtF3owjFN1XXrRnSwExMBWsdKJ4QMPKoe4W7PxX1BBxs7M3FFcrjDbDaawf2RpDq6",
  "key13": "3WRxqxfF1ERyibyEr8gCvpow5EJ3g35tHFRzzb66o7SrYrTvciWSN2oQ7fEk46nCQmNFi4zFAFQy4ha3eoESKYb2",
  "key14": "6oKUPSN7asnocKrZkndogovBSFiXc8PET2onUzZ6cPPcqa8jEKxGkmXqjXJEKqfH3SLwXbCZQfXy5pXxPoEcXNg",
  "key15": "2R26BdYyP51XfR7yK76zDXEfFpUgJ1QgF8L8M4KJYWY1aLLbnukvVimPsAzFQHavRRHPhV86a2qeCv77TqWxQ6tk",
  "key16": "5jLcHJMnhxS2XyzftYbtZwDvc5yMgQfZU1grWtf3hzM3iiZRbUXLzDwkboajJWM5JeYv2riitEiG4tnXg3XkKtZY",
  "key17": "57SGAwYz179M1e3doqWA8Vk6Y6P5Zs5Uf4MnuL7DEVMhgsd7x7zmPXSvJomXzuRNSVHaSmeTtX9vsBTF5bK5Ha6n",
  "key18": "3s22FftWovbdGPaSLkfTC2fpPwEbvDuQ6KxJSUmjJ7BrraAxgxLq62JPW6KJN6W3tU1c9RjeWAkrXp96Ngb1nXRo",
  "key19": "4ZBxG2F7XjMyAbt9amYSziQy2PZKWmDQUJffvm2ZXD4c57tQjcpJZ9hgfZJCiusVcT9uicSZCMYj7AU8hjVCfG9h",
  "key20": "3X9E8F2t66nUa5QJUbko4xz9nSa7xp92TU8qK7FTGCtvTNFxcM9riCiW1XHjqKGKTiqCfG9Lsp7e1oYCHrfBASja",
  "key21": "2vrHqSJhkZkpzGkSgcGpWfXQeqhVznhpeK9DrFTrWrDCBBRi7ofGaKzuK62pjqagXYDw28eNKekvnXZYWnxFG1Mr",
  "key22": "5nr6x32YBGrqB82ATydvZxj77svVse1virfxYmkVZ5tgGamP8iiwvUKMV3R1GT9eN2GFd4X6EN5ErHq7UPMiwMkN",
  "key23": "Qu4VrKhrz3RdkQKrrZnFLLS2jZPJfrU5Lc3QxsiCPTa3qdswMXnBGNzsfBECSbg7mUmbFWNHuXJiFspb7nPgaC6",
  "key24": "4KnAHqnNSgwc24ZRhMuMG1kMKkgH47XgBixm1W59SdyN4EsewzqEDgwtt82ZNHyH5t96ZWYP8qg4KHQffr5Ye4xV",
  "key25": "5Yk7MYVzLab9Sr3ZoBmyxDxDgamNKBJtMUAf1TWAiQa1wnv15WXdoRMZEEYMAHwHS2EfFfNGzaYznhrYs7U1qAGF",
  "key26": "448SKkVArjgfdLfT1ZieBc9LucUwF6ss7QitrfGvLLB39VMxTLmqhbGBShv1Hfs5WbMSLxnMh9E6a5bKGzBd7LUq",
  "key27": "v75vvHypRDj1pFZPovxwbKcuEcK6q78bohRkNphkNCUrH7EN1g8oLYQ72Bc4ZVivAhfKNXXErVSWbnjRNSRyG48",
  "key28": "2Dp9MBt576GRhHixoC3hk96cYLSqR1bxBZ9anRJcKEh5todM3myVZpvRtFhygckRXJWGLc6GjAS1KrJX2iSo5c4R",
  "key29": "5hvsnyo7ZGEnxpy78doawKP3g5XpggAq9yT8zE4A8XPrWyGwv2eQybXU8nYPZefj9qrfEqHLVnaAnnSwMhN83NRb",
  "key30": "4XkCv39Fmg4feMNWngPHiXtHKGnDY9b8CvApxoB6wJN1vFJTrMCLfTozDCmvk5vB6tcKuQgCXqimbePFvv7ZfrxW",
  "key31": "2YPdeSCWztdYiDvXp4CVqig8HP3csQE44Auhz5BoPdXdvSmKbocGaTkwEE3rsYVF5sEZAKuBN4yKQbDfQchGJAWQ",
  "key32": "2em5SYMBSoias8SJdHTFqP1ZMnfVvRWNW4YUdjGctwkC4QYKw98Teh3jgoimqZmZBU8J9aaKAJzqNw39XTM2C5qG",
  "key33": "vuMF1SCGWBWPD3iF4AqUgZi4eAXsTuCLvp2RF2kGrkVz7hR8QxGnYLt6ek4TzAHUZ17LvLaNhNZmeWUX6jacDkG",
  "key34": "5jYBiEsX6RZqYDWNHd14JeH9K5zhbgyqznmeJPSWSAEkuEdU7FmkpoaVbs1dWMWCXRGgB9uFS3HY47roee71dKB4",
  "key35": "3SwnC923A1cZETZkX9Qtq2grutiQH9bpHJwpVGik6a9f3SitoyXzyHL7wDnJWaXmtDaKvPLtUQbqkb4nUQ3ZXzPV",
  "key36": "4LGEGXtU4qGUKtbfAAdYu8CLA7vZysTnciHhMs5zFS5X3ncUy2zywSzCAY3AcVqqDUGZSxsKERTgoEbEyado4tJQ",
  "key37": "5QxGp9ZHCMdXHhzrMSn3s6Lpjw6S9j4AypTGMSfJwqQaQ2BTeFdadRe1f11Vr64g8vdDSPRZc3EmMYeUpNsYDfkt",
  "key38": "4aULiLJejMuaYdC943NdWqqQ3R3CyqUstyKWxszXR4mvYkh58aDXpCrqQzL2yuQfV7Ew8gaoVjvuebUCwtL5XPFe",
  "key39": "v6b6xEZgveeEpBcwyMu3zubGidkKyAB5Bzfmb2evFuXpZeQ6pveR5oouXd3Qh9e18DXjBw3EtzjVNPKddmXt6R9",
  "key40": "3Rqzo4ZtLPWj9nshzo6R5RXcCPjrcN2N4ZkNoHtQ1DNfqF1xyUwGYj8e9Eoz2ukdn5S2uHrmWMaKMrBg81s9F8LR",
  "key41": "2g55CBj53rDbZaJ3bWS3Fe3kZqhDLyyFUQSrjic3zfrSsH5ac2Tm423zU8LQVTH7YqFPa2Ek4phQqHS2g4bpNPdU",
  "key42": "5ecaVQrWMvhyiWrxcKqAbpzybBaxxFeJPT4p5ZhKsLYw74uctqBekJpZ7AYDqPY7LaSXqfwQNmghWqUV8yt4HEBW",
  "key43": "2eTKtXSVxA9MXDdfzaKHJhjxq8xJ36m58d9nKyeXnzPK77AJpapazqMUhvJmkkyJ2pdQ8tGQDWnMaBonq5Z1pUMG",
  "key44": "35NYLF3Qm8nrQfF7SvSaRJSEjSrEokLAMiyqdY7U5T6we28GnL4zUogPvfYrdwczwqtcsQepxQKsxux69H9o3De7",
  "key45": "8pA4PsXfRNz1ugqVbhCDQBtBf8UkeYaeGkoQzaPZmz2DTknujy6Nz8CuUmtNtPseD4n29w3mWvYovBNp3jH8cC5"
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
