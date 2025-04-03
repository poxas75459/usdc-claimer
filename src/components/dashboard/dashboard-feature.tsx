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
    "5bmTmSop8B8v1PJgkqzxDkFMStXsdYN8o3ZmhQZQ229zRPjfPGpAPgFSegskkJvResSPrZaBz4fsXMB1vhibduuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xFbBkbdyR2c8TTPaoESKErGG8M27ozmPUgPP7hdxgbwBYqfDA1LzGrb8mH9ma4TT96t2E3BfvGehWWsu8TpmQXX",
  "key1": "4TvX7CWNucEiCRvEfAZHSkcfMycuAaevE48bAg2MRtjUgo47yC43MEpqj3o7ThRH8e9YqYktgSwqCbdhwc77s4jz",
  "key2": "56ozwGhCmPsbdHP8se3DETmZqwvhHBAb4G7Utc6i8Pi41jt4XXK64QjYVTwZk4p4WL8Az5N7CEGXxdc9igwkdyLG",
  "key3": "5ucLYtQc96F6ztysXhi3mNmLjP8HLUCwEJDufcPR1xRoCsrguuGT9VWNPJiXrQuTpB8ejfVCEYPbHSLMyN8K5kq1",
  "key4": "3cEHEGBhUfweuYc45NHDQWmPzGwsEMR9xvXsVN967whFJNmhjeKkX1CiFgdFdSZUGi5sGZxowXtyLu5Mps7uUmiv",
  "key5": "2x2Z3PD7QV7gg1HBKygV4zQUFU2s3cj2bQ9UxFdJ54BE5tNyEy19wEDG9e6q81iZ9PQPgCgn3ZYfL76e9kJWXsfX",
  "key6": "jFbNNNK2ooLQXCVQ1eEx2HvyPiy4x4H1hyK6mihSwogBX5JTJTzrxcBpBAY3A2uvf3EaFuNQ81FbJuddgFQXjuS",
  "key7": "SL8fD1kvtfq8KV8DcfEL2i6toTDXLaAqX7jSENWNedLs8k59N4PdTvCzpRidfYMaa1ERNNE2qUxTdC1EoPeoeTS",
  "key8": "FXGiWNzSoVJp4q5mEMWWWiYihoYeUygjukAE8E9S1JLgBxggT99r1LwKxSSnNbBJ5cYgkKRUkpWHN2bjLVEYBT4",
  "key9": "2iVQHwuPB9LsfJY4RhvhT3fgZF8XUQqncsrXqmpRYeehL9PSZ9LrHB4H9A3M4vjtsvqikz2ZSJWZHBLsxjAHnokA",
  "key10": "4piS21B1wqVCRSX5v1RvkSGAbLpGkH84LBwRhTNoreBtNNjaHwN49DUxbn2ZDa7vUgJ6FakzsZ4yY1iWs714erAu",
  "key11": "ZLnt1cjHmnYYSXyKo6efsRAqipJT5hAhAFdTTxqTdCfpcQtJdWtr3bAyQ9XmWVuHCKAcLs3SFxEBh2BKWTJDq47",
  "key12": "3XhPMXJyYNvW4as3YMbjBfb1rVJMHxRs2nFzq25PJ7dZQ6vYY7PAjcGsf6b6q7btC8dvv5Vi4pWAWboMSALFP6Jn",
  "key13": "5eqmon1X2vTxq9xaHm4v9d36D8f2bf6ZAYt3m5DXLKjaAzGiij2XbJGtcPfxpyg5Xs2pNCQsBJ1kTnVqPBKEj1Z3",
  "key14": "2JNXvq5JCCJfyiT1s6cCNv8BR7Wdip99nvmBm1EA7A4vBjoJLKnvdnZxtS6JfYPuNj9FFbd2RCe14txiSdhje8A3",
  "key15": "UG8ibB4RZFqa8AqLJNM46L3zMWuhUzznsRSdc4D6b3mZSvRFJZBm2YxyWsfXpifHqta7MRjcMSUgYiJGqu5PvyF",
  "key16": "vC7oos322Dzg9jpb7LkK76KADN58rNggqdben1epcr2ThUHjKFrRaKsrwAqAPSc5L8b8RsJgcJw1hsMvL1nFmJT",
  "key17": "57RV6xyDMrJ9KZYMsJxnn4bnecx5FM5top1KWdS3pPKjdAdiGFqLuqdAjcbKcWqn1YT9wnGHGRQ7kFAoMXUuYNum",
  "key18": "NkUArWFFcp9EWxt7nYMasW3jUcXyz8wzEAk4W7MjpSBoqJVSb3LScce24Bg4rS11vYtBBeoWv5SKEzw9UiRVCm8",
  "key19": "wqev6LsRp79oNgvzZSRekNKWxfFesdi3E4BguyGqUe2hFJokT3tmYLN5Xd5rt1BHtk9vHh6dqNskrk97dmGeRpm",
  "key20": "2iMKLSBZ3L5ejc4iGXkyT2G418eSZrD8em9gfAaNmaiTANQqCiRRoekguLUB4c6gL1GyCVJomPGv4xQpN8W7f2ed",
  "key21": "43hjFbJmEYdY1bqM1bANPzNA5hNV9ShwefCvRuxaWYKggSzkzL1DVnsv2nABr5bouyjvg38Z7J5xigGosVPMntwb",
  "key22": "3WYzfLMYfc5H7RwxcE257hpw6wJdYXQjurKo7iiWnf2Pp7xk4p2vNL6JhsemEDzE4i1NCofvkAkgWVDc7bgXi8Gs",
  "key23": "4CJiFAQXDyMk3jzTQBxucfYXdHsYmU93E6uEQbqd9oRNArJLeECmqd3MNFU5ytbfCVeubqhgvo1o9EMNBXqgExE9",
  "key24": "5BAw8KS9erfW2k7ttmwHZXayjoGHHyGTcJcQQw8NwTWkaTEX1KpcsWhuHDzT6cNuQGzAu3D9QBPzZJqWj5u3Fd9U",
  "key25": "51595zh6vtcc7FewjYxfssFvNXyoLxKM6V9c6H19RQJDL24uLwzEwkJpdk5ao3v53wUhXjatwaXvNdBZo9gg3vbS",
  "key26": "rzYzSxREcw5q77Bf8TKau1MBhbQVBwWUFzF6LNvAwrL2QPc8p5GEzATqzcVxr1yAG6bNWVGzVxnPSR9yMYLfrUE",
  "key27": "4Ze6fwdeJCa9WdPsnPrprTBCo3mANZNtArpef93syngx1Lyppky9LuQk1mXpE7Anwu6Z3yMb2X6ex9W21uqA4imT",
  "key28": "4cScg5ULeFWzyMvZAJSJCoRsS1RdYYmcKAvwH4C61X9S5W3hHHH7bj15p2DT7BSn14YSemj8XkMbxZjcmxtSfguW",
  "key29": "4w5is8npqsRajMzsskxue3MsPFh1PvkYTvMy6oJvDDobPNddMq4JWp9r478vvoxPC3AEivmVjHVFm63QBiUyVsgP",
  "key30": "4xQypdHRD1mu4LStytHwMczw73fDZai1rKKfQKFXD8RAyA14TzSAECfUTHyJPFge4Fc8jf3RSncVNQh1nnmSXysw",
  "key31": "5duoAeeSXbt9WkydRQRkFskzvR2VFFFs2X16XFms2VhvARhXDA9S4srVpB4EiRYyi6CYFWPY1mRC7mQqoysVER4M",
  "key32": "4dx8vNRzf8sZnsGPwQxV2yUaLM29L97XswRTXm6E7meQF7AGvcAaBTo2eraUECj7yWEBMcoFfDKCyuKPoU6j7Z2t",
  "key33": "4FpFwDkSqYh9QdFePZhFWAjLWGDgeCmy1wQ1wVY2CjpgV4hCtcQ5nN9TR1r1s5WNWzumfwuxF3d7QwCupg92cic8",
  "key34": "39uoHUUXmEiCpVEvkZ5qTiACr7QrHDcwxf111ueFScTVf3rLFE4u734sHw948ap5hBxZEVYYaBUjEc6HEzEsWd5z",
  "key35": "5Krjv6Kw4oKz2fKS9WqY6kvqKioBpLpvpGWtyRNf4Qq2opoAog8ZDj2PgrEJNNABcYga4oQtvVjt3H5my9CUTPbv",
  "key36": "554Wkw7EyPsypcWB5qc8Zu14qXMHba3ARY6S1eiZoJZ4V5UrgRp3dSRfnUFMHipwt5XEMJfUzkxGfBf5mWYkNurc",
  "key37": "JQheY8UuyAKnpY1amD2Xu8bVjzSVXmLKCVEhNz7Gaqwm76zrTvDWR56TRzKUqifoU1WQpdgFT3PcfPhVJMSZNPN",
  "key38": "31Jo7iVMJuj74cqx8M53NQD7m2TLaQPPsQ6TLCABGcGtLQhpnnkHTKxfiL7kgakgBsvjLBygbqBmZwiQ1CNE3wS8",
  "key39": "5tr8Tx7rBxHqMu72xB138AauoGAeyVu7QYnuUoo3bMUeqzisyQsfwvVZJMs5uvedEYpTcbhFMfTDMSq4hgH97EQL"
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
