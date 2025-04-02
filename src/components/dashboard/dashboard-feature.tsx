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
    "W5CYHnhCRgWwS2S7YkXisJpqbFwD72a38QeTCZk8eJT2jeCCxrLC5C2yT8wpEgQDNrFMzDJuQp5u8sT4ZUHukZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ikw7hJf8hVkbBrwcJzePCCRiV9mrtPBd5pQLBxYtdh1cUcBfQCNYgBjFeKKY9efakssCbcwDz5wnhgHR9TVQt17",
  "key1": "2bwcdcp4yksV3jkTew16QSsKBAJcjaySCCZc7jnLyhbYwrQwo3qAos674zH2Mjt1KkBqwvJX7eDpNHUQ44b28Fj1",
  "key2": "2zAWFKdbzsFe39PEfRUwmPZR85sRNvHVhTguBFBY8G3EcdoreHwywZeM2wwjkPWeXgyT2xtJWFKXayouPz1urTK2",
  "key3": "5fmsYExf4m1t6pbETeKm4VXxB27UezTCgFPnjhZmimTZHfYFfY1auTccJP6XPqfWHQbvmLNWZ4MXoff3dUuMxqyh",
  "key4": "4LKQmsann7kDamQMH6UK6ySwLEXuKFXjbVvi4gw5JpBHebibG8Vmy1wQkz7Pqe2qyERUmCJcHKwBeLciHyxG43vU",
  "key5": "3JdQHYiCA4kLeAgqnfHeJAFA73XYtf8zgUqpKjrRbTru4HT7j2UW6kXVP992BoW2GDGY1sDnmXgrkWwU78VEZKNA",
  "key6": "3GSHgJSymTyBbLFkMGtn6CoAcxigTBNtwxW2dB74QUz6rVHckHkHu9hNrQgJpYJW9Zy3uuLDc2XtvknuDYdXJkfs",
  "key7": "4Jfo5ygTvWSdgWdbY8sabBEWqTAWjnFarrBGAF8cP4Gdv5J7mMuBi3mjSwjPADb9ocTpLPYyxNu3aTooseWZfB4Y",
  "key8": "xZEdqPr3vRzc3SSuYdR9by49Yp6wumBJwGRXkfaw8JFfzFHDhLFFNJ5HK2TzVttRWXSszPHHKy4GKSkgRFAUwZJ",
  "key9": "3JhKE7aUXXpfZCRxDw91daogHdD526BfzwtRN5KqqVKcbBRhcY2m3zeTutxe8KHdgXTYWxeqJrzf25rYsbsT3h85",
  "key10": "4ZpRUeqYzdU8i6dLF8VUnbUjJtEoeEa88rkJSto2zYCLd1FxXkgDTKcgeBVJE6MkNb3xdhY7ouGKac2KyaJLeEP6",
  "key11": "4kbfEeBdZjupGcicN3kb7dkoLVTV6GC7oUcMLoZrT2VdUrtZ62aSQhc4VrXHaabsthnxXnJBsXAhKM9xtsRidPLk",
  "key12": "5NW1KTSeXsS8L81Lx9WcsVSqFqxyc54anw18avD9yjvvV7vFbjkZXYEWrEZ3xHFyVGPDC6BBwudZwenPE7gema7m",
  "key13": "2J9qdiUjerngtZ314KuE48HEmfnnyJntdmk8eKn6GxEp3PYA1xNFVSVgFjaPXAxsA18p75o9QKYhKnrxWnqwqfY3",
  "key14": "4q2NLULDAtsJp4keWtoFuwzrPm81RYnHgnUM4iu3h1Yrt8JKcnoCxh9SeRABeJs5HQkJJCCaA86yQ2UW5qBZUcvZ",
  "key15": "5xbwqJYfFTihistH9dRbNy3GQKmM6Zit8GErbqNGp7sTToHEqqhFYaKVwU5kjZL2yR5sNsWWcTTPG82p6uhoTVHG",
  "key16": "35omxdjacqQq1oww4M4WJo9yQpZ6hAh2etfsQFYKYtyXxpYsYxCqt8urE3qQSji5L4UaJC9QtjyWskxRwLZkQSj8",
  "key17": "3QEQRF1jezUtoWPa3dm6TgpywuUgD2esFuwHa2Su7XD1Y3HwAACUaWLKmCmKQEi1JWDUwzzMSS7GTxKQi5YUQumv",
  "key18": "3qCJWJaWr2rirZy6iPaansQa86bz3EEsLVUqtERSH8KbHZxhGmDCYVRcXahK3ffYWXMMS38Y5Q6Wa3tcdW9abvDS",
  "key19": "g5dDkf6nDoZVdDLdX1pAhgvX1f42hbZS5x7kkR1rGgVGa8CU4C82DW2ZUsyDCWVNRYvZZW5tNyHhcLeySjvyMTH",
  "key20": "4MqT6b9YeJLjGRaQPxkkVaQx5jMszG2xHVqPJyTYwFNtdzxjGawNVFmgcwKayCAGDaPbGeYgvALdYZY13JJTnWpN",
  "key21": "4zCPzqakEy3NLpAwr9RCmReyG9b9hBkH8ER1zuz5tHzrqCUNfof31v6gt4QzGcLwfRHwxtZv55ud9j3LqJ8cjyx4",
  "key22": "2BL17DxDkY5oVjdvDRwjwo8QGjYJC6m1Tb8c1viqSHEsLFY3vJ2z9wanF1oceGMHFi6bBgu8w7ywNpReikDkXwbu",
  "key23": "24DVXM5AcHwBqRJstiQbEryDNcmUoyqoycQ2ZMVJWLeHmKmSRykVjjHJ4L8hB4AxWDFnmZrMfp8gCqff1unz7znk",
  "key24": "2h9eNMXqtYhCfysCdsEp5yHQPtNuu19P71h3hYbd5V96WKgz9E7KKfbg5RK6TQyDCHUguDyJEkEHJr1HahNGbuMD",
  "key25": "VjJA1ZmdgeAMGYbEh6zyCZDpiZ4Naw6QWWCWjMQjZ8BbFd8ErrJT8niyZcpc5uvYJ3npL8zCfaCBKWeMF7rTswB",
  "key26": "3XUWfvpf4A8B2N1LuEaceHYNLpafLLcE3967cfp66cVpZMCTYMnun9fyN8MAo5VQMqMom9TvwrJRfxAq535jqWbC",
  "key27": "2k4FMCnwwUqg86mq1Tr6tZin2C6hWmd6tB5yrbYfiLkXo898WH3wXBZPQWAMy2hZAof64v3TWWCHHDXYS9HrcdxE",
  "key28": "3Ubo86b5rufFznyMdKRpcrcVtSNtqfXAhE2oqYUWXQmqpjujqPTQLwC19Ex8jqVqKsGtJZuXZMEqFkPZfE7jC5g7",
  "key29": "2HS2kHNEJBxx3eDPjbEMkeFqaz4YsfQ4y1goQLQxhhGHF6dbuK56YYhL3wgoL7H83v3rwpHRXLEFM2MdH8HVzfKs",
  "key30": "4HJkpsV3p3qBwh1QtcYkSNiNcfBLkY2kJRLM6nHYem5qDRdJSFC9iYopZgyUb9CTJWfJMm33vMFLWyGHpvVHMa3d",
  "key31": "2j13fb3Bb4gciGGYbD9ZBFy8TeQnFZrq4zqNvig74pWxywzKSQdJfmH5B2hyruUAFvhwRBQMFC1DG3b9hZi8W4w9",
  "key32": "GiFQNjUNMuHXVY5CTDzuVCSsTqEQRcfLVThusfwhAvWJ48vdtyUUmpwxDQjQREqmbeZiQ1FnrTnHnP1QPVtsfNY",
  "key33": "665HTSduYzqKdaaFwsYrEpJwhHkgb73uzZdk7vfcgvgedHJgve1Y824Gw8CNe88qiRhDv6YopoPQnoeUWgQCiWs",
  "key34": "4h2DJu9SfM5d4CC1gDbdfDM5V2JiKavcg5pV4wjr4ZFVCFztJUBYvWYtyKomBfo24m21q2eHZ6uMLwvPyPB8qERB",
  "key35": "4xwPyUQo1ZkpGojtRfNtXUkUR6GrQbHvSx1GrdGXGyAwUuPPZD5ewujwHw142Z3ArGUeQ41n2oTpTP4EAq3VKULg",
  "key36": "3HCTfDFsSWWHwxezYuB2o64Ujf2sY6WBMXikpEngNyfhJAcfsUK3wXpRnNQgc5xGrvdgrkVEuWLGi1MRYFJqXzsk",
  "key37": "4PydqCb3aZtNY1VwbHwNneqpgZC14injHM17Md5xtAfB5RWmHgVLcHoPXSBCk4s4qubXmbBLBUgob3a7YfQcgkdd",
  "key38": "32A8xXyaBHkFfATtn3oNnAWFXgaEs6AYW1tAAAzwRdBt6KCjctxeQ5DsUZan5RVNwzTp8FL8eW2ZSW5cHBMTcbVY",
  "key39": "3gSTMLmSXVUvdbHpC6Cta9QJ3QrtF6WQhzvQB4zKBckSQEc1nsTiQUgt1VGoDHqAYGurFoeEydEPhFWh1yQ8Cmfg",
  "key40": "59uKJcH3z8oMVtVBtLYu1dCKjo8YdbAMih4TwxzvhtKBmoLWKmK1FkHeDrzsJvM3t1RQEyLHVuXyx2qN1U4EGKu2",
  "key41": "4v8WQTKMrGx7vNNYWdEy8bfNAiBAmNGyp8cS1uFKrrmmHia5csfYRHB6jjuahoryeQ4BBkziL1TmWePTFpp3aaQo",
  "key42": "1APvvfeKCsDqyHis1EuUeSKzNN2LpT4nGAKPrdj2o7ZZQ5Ahs8uV94nt15ctVcosxMu82K2tdM6NKHKZLKR1qEr"
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
