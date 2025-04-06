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
    "Fz2WtSmA79FgDJtXXdM2QZPqd6hskwNp5eUPyPeS7rAHvhNVQSuihKB9Mv4MavVFk4R2sMMFZRRQBG97aKSvwAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x6caaJm8gj3drH6UeqvtXaof4icUfH5Wv9kFd1hbZj6TGkBQ1GUkVtjvvTBV8EdzD3tuQvvmRQUXGgKsAxjpsRa",
  "key1": "392xnVTeG21JqnKaT7BxYSzshMy6VBT1uoiH8QJE9WsqxhXyZmZrfSpqKxKAPY2GB6KSXYBFXZeVaxyyRkkjj552",
  "key2": "72RyDXDwJLg3opd3Y6d1Guetieg4nNX84mMj4ocQFNUg7VdJmqoBxw8NAhf7Qi71gjcm5rhyyJaPhy8KqcTTLTe",
  "key3": "gPzgPJfnqr3UH7k8Ev1iWmV1Fo7pDHHSoJvQWhJCgszoGNe6rpAQvNVmwHBb6MCk2S83RdPZWcvQDLZkw3o8syM",
  "key4": "5tiTxWvJcubqbnyYRqhmBpP6HD3Wsrz9Db3Pg7wyNBe6bpz2pSUKCitxaN7yNXrnxj4mUKrH8mnpPhAT3xtgYzqN",
  "key5": "J9YarBfW7itwtatdqvbLFTHm99CKPqxFbKiWap2mNu14YQPWNGjrwodE67L72wqQAndABPYoH6rDHds9iuvZQxv",
  "key6": "3C2tPGEjVfmdgBy7CNtDRhtEL6yo9ZE5HSXMuRXsqwckiucXbqRnyNutmtQ4kUAdVuXbTc8Wmx7fv2cD78SkxMwf",
  "key7": "46yLEyd97Z4hNtHVrsAoZg7WQRysQ83AhvzZC7qQos6BKbb5j1vAe3n2xQicgTtaeNnGk6tUqRMYzm5xYiQkq1aF",
  "key8": "2inPJYwiq42GUBJeBCKAqUEfa79pjHqXtHcn31nL6RZePJfaXyX5ypyGoBAwbMQT6hDDESRw1mqs8qC4iUJkyHHP",
  "key9": "5up2HRUDz179Req8qKs7m9dqfAbtRxHraPuWPA6qTkVtmnr3jBjqUyxhHnFZ2vEDYVTedJ3YzsNf2grwKcyMMo8Z",
  "key10": "5DpXPAf71PRvV9Jumk9Eo5i5ampofYoBRKAiPuv6VVNG9uPA2PbutGBhVdzJVNbQyZDhvY7YhKrAvQFbSWTsz9xo",
  "key11": "5AaZa3CA1iTatVCyTEHy1QdhGr2SDriHkTXHMb1LB7gBNKuhhF9Su4WZLjxhqd2uvxKthtRvSEtrTYRGmp6YsGHZ",
  "key12": "2UJ3b9PmuinYdcBWXW8S11W9vzsPiqPh9HywLajpcoNzyCdwCXSoQ1RuerjCsTgqUPNr9YEUgKjbkuLn6P9umNqq",
  "key13": "3b456sDbxSrkpBLm5MWs3quc9Vf9Xi5wSGHjDVSPx2kdkofdRPS1HA3GYWTECVxV5QrbzW7uvNS1JLzqWET9wsnu",
  "key14": "2SEoEWLEru8Lh8WGzJ2Ve9VUpnX82DhaxqBswiokci9UDX4W34BZXPNj4vdvW2N1tes4M8J4drc4PFPnMjfKEAF1",
  "key15": "3NW5J1Vx9PGXekuPLLFqgs9ajyzo9ziu5K4eCC4WPXcnhxvg1HKeC84oJjJn3VdRfoUDXDCe4PAVbQ6xCvjFpDTF",
  "key16": "8BGJFJMzqVqm3zfUdT1Y3BZjaRN9d1oQ5dSzWkDvDJQhpPF5NSwVpxuVymH4EHdYwWxxUsv8FPsRj27ZXbx7CRh",
  "key17": "64ZhJ79ghMe5oBXDgSrARgoh9wSmvUJkHbRfecdVvxyvH3sqcCPnKcPxXzMXpwfbF9S8PH26turcyYwPWp73PwuG",
  "key18": "4CBS32XRgV4ktYDuJY2x8Nj1N2BvCkefsLFGm4CaQ9E8ujS9GCfna1Ucsna2HSv1VEujfLZVirMfWAeVM3KuGNYc",
  "key19": "4xPdagSvDxUuw2JjaUwJ7i1jtr7zoRQrhn17RV92mc1adJvyYbcmBkaQHGYvqEXCsBRXAMeJkPcsaTnQG4V2q4zp",
  "key20": "4eKfxg9tJhDaHULw8tnwK9QJD3K47GEsPaoaEJggkw1m4D8gEYGhBPVfVvuLkDwwknZvRU9vZHCd6oRxkL4zgQjq",
  "key21": "2okJ9GKztQnR689S5swvp4Q1ZS44pXFwF39UdmK1RhQ1hymwtYfxJwk28GJaXST6LxmqMAiAJaJ2vMSEtCVnBWDQ",
  "key22": "4NWhxFcW8p7diqBEfB88zP8DH8usFY3tNtNuBBEM1NYxYVwLb2bngTGPKrENtbLPtdsKPUmT8zVVzQGJ4HqWDKrD",
  "key23": "4tJU6LWdg5gqRNzSfNGjiczKh1dnEysaYuxNRoRfm2Tq57v7kx54SsAJWcGcXjTepHyf2ma1w2XqYTBnoVTi1z2T",
  "key24": "yjiwyLHdyepnkZE3sD73MH7b5Gzs2Q6zYRV75rvtzJM5Beey57SytKJuTqWrjeF4oXx219bizeFoCzZy7CribZy",
  "key25": "JQLmwz1c1yvoqU6eUU6zidJW7hqiBJSBTWnnPKwCzX8fgeDWrZxLf9bD8HdCJjsQA5eTXiuYV3WFcFjEaZKS2BL",
  "key26": "2YUY94L8vsv2v5nQJjn9cvVcZ8Sm7dS7q5KBvBux1njZbLjyjiaVh3uFuT4LgnaZSJU4y9eF3WF2L65DZqakDYxD",
  "key27": "2wwc6ug6p4iCWWYSVptkSDLJNa8eVrDVkSfBsWHvD8kwkTVGz6Sc67aGv8WZboceDwcTXvHR6Vuya7Nuoqykq44Z",
  "key28": "5ad3AauJiMZkBuQsfa5F3DciF8towZjnRvvYLtoNiUJTCfMMjenxEDuf5ESUaCujhw5BATdt8ytDsA6Sic7K1M2h",
  "key29": "26232EzNDLJxUdfBCx1KdopGf7pqksb6qASKNjnYaZnrzL8rhFn6WChbbG1D9QYkBkU7qW5gBEwfx7cNaqe1ocmP",
  "key30": "21UiMteXPnLWe1Z1bX5A48ZW8JMJmrhvsYrgJA7LUWLxgpkeFDhS5f2bY1A5iDLy6ohcYGF4EYA67KpYbBYhHVpu",
  "key31": "35NsgoU21zC59VqrxwiU6xPpktvq4i6CvYZ6FJ4ZejfVjgUqivVdHqdEbY268jhXYM7UJz8GgS4RupJPeiY66MR",
  "key32": "67Vvd4KM9fmjn8fEvAuSFtnoNy8bLJ27bFtgQGWrjdU9VkS3pPaYDZRZx9maHUAGYfznzzPtEC4QYeKwC1pNsoyv",
  "key33": "5YLPDjMwjE7dyX2vLxUsBF23xaXXv2VACcE547R88HPrANuYgYSp2dC8S5Jbxz2aYCgtYhz8JctPcQe4haqmxYrY",
  "key34": "4WV49yuSg2AfdzuxS66ePLGUdZSgczYVjGUud2136jtxDnYQAuC5X7jEBFaSJDWmBvWjddZCrCPFt3UuifzVRfCG",
  "key35": "2ncCiDT9Xjz4Jq4HH4gDXQzpng3STGS6ChSxVf4uBTgjStvNsNhRmjGp2sgD8RFPm2yoTTMVwEaKTqzDgRNVUzq5",
  "key36": "7G7LikyaYfZnpgQ1KCwjXNoDFcRcZn3K4P79b65rnJwsqDtXhGFdALtBJFeGcUaMojtCFK1De1mMfKRPmHcuVxL",
  "key37": "3QGXX9dme7FBPBftm7C7bRx9KCUnyo35YDiLxazTttCy5GtGnXv3GWdjRDAPSrRBVtDcPRFNguoQjHkyYSKy3ySY",
  "key38": "Frgsz9fowQcsMueyzMD3UM2enqDSGpbZ9Mq7Z5nisCYkkP2QKPX5gKKzfbPiCmbrPJEarP6t8RUSfYpiJBBwXYH",
  "key39": "3DeN3vFf1rCQNdzqhQZqVzeT9ALPYjfkeLN3jwCaBNry5tGzUewnq1zoK12hQxNhW8PAveiL13jZ6YK3RDRs3BiL",
  "key40": "KcM1k468JiZujiU6tmXTNeHNnFSzzGsuJu9Zix6fQKKJDndznvMUVN7YMUQFyq7Cq5CSjAsaZrUbnjMRqFejMKE",
  "key41": "3tXfiy2GhswrT4GvQoy3K5QFzxXbzCrGKEdu5YZnVU564RqT3TtiJP5VEX1Y3bpNTTnXtAtkVQ87TE3rztpmvcTe",
  "key42": "2WkCWUfvaaoJzU9nE7cSSZmDQaDNRBqD1nobpfQN9BCQv8J68B1AuMaMnSTDWLY859Ztoy6dHdt8h9EJZgtDgQVj",
  "key43": "qEwKCPwpTwbbvNuBrfT68aAnQvQtSgsReduHPd46Pbpdy8mtnrRhmPjNmGLWAqNLgADXBS6QJNfVik8zrFFJ2Z8",
  "key44": "UZ8NPDgKDEVwVD6QtEhu8ZrQmMBcBscZfQ9kyfTfM2bUkG1ALdQq5KWXRPniuxn8nrtqWMHMm9ZG194DMToPBnQ",
  "key45": "uTCAoSZyryD4MEH8TMaNbg6GFRawSSoSxTYAsoe5DsPEp3W4vJmcVVdP4jN1R8dZGFAdFNmqJyFs3mtasWEqgDi",
  "key46": "5njq15iU4tMdiiC5H1eo6EiSE9ugurHgYBtd3iepwguzsNXB4Th8q1NCfSHnTg3f6UqjcLGgnhDTmMSAKeyitr6Y",
  "key47": "LF8AyTvoMHxbLGQWn36JDnaJJaKUozPusL2CepSL5w49KxMipP5um2n46ueyXHGbhPDHR4G1tqdvG6xonsQz86c"
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
