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
    "3yX7nrPA6UTdzsaJUNYHdHmXgYS2xvfKikkb4piXfCiLf8bfftc5EqUP6ac9t96f42ZtQcC1cPwYdX7Bq7xUhMzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WcgRUiob6VoMCQw33mHj7pAF4LJxKdm4khu35Bf3r3zr2nqgbpeE7Ao4399NX84NwAYtbtXj3foFjH8LRfHvNoJ",
  "key1": "3R2AYFRZPMJbSnBEBukfRdaK5qkeRZ64xCjtK56DxiyDAX6LsPDdLwf6QCkt1n757NLa8hiWCxtRUjzW3td2xBQz",
  "key2": "3X17dSmYeMVqDsTwBbydR9GRcp5T237VDsJdFBJ4cdLNg9S8qqE8boMFFSzkNn9pbdtAaDhep9EkXNdf2PM1pbef",
  "key3": "3agWWN8SPZopfu3qA4CWn228AM8hEcKXn5YogRo4SkfHUfSE8VD6iGhTpz8zvsEpQeRJm9AQx4ExZH2PLQ6RSmg8",
  "key4": "47tgTg2FvSFHGESiCnWbxhyKRXAKwjYmbJsBGCxgYioSoVkbuKjJ2unj7jkyfm4gatgyFbuxxkamgv5y7tuKN13r",
  "key5": "2qmFrDKEQQ1c7VqHD8rx7YhyzcbpLEuCdBU1qRmNgjejFabhnenkFRwT9pYXinQc8ZXqcZCkgJnTQVqzKK8zePcs",
  "key6": "2dTKmjYJ2B1ZJnV96tDv1dQTvQ8GzTQgiDHHUDSnZLxpBMMY2C8qXfB6uyUCMAw3FZ9AuYY8i5Jv6dL6a2JKu3oK",
  "key7": "2Y6cGgY2j1eXWorTtUUg1Xnau91h3yUzVYuL3TPFvoK1KWas4j8T244MCKro2KLTgRvqXqKDRuuo2U6WmzDBWRAo",
  "key8": "3M2u6moi32d7ovt4CLBnUDXHfxL7nignXZa4T1G6a72kHnkVuCz9aydbNgTrRxoBux4HdrMpLzanX2vVNMLyJzba",
  "key9": "21ZDnSV8MauFaryrgdRRBWJrBNUL58GyXHwyTqgN5oW6CvqtbfU2XUjCXrsiURVE3Z63XwvCtWD4wXwdgP3mDGSF",
  "key10": "NzHAhnX9ZkRhf54adVmckRrsi5LCt9MtAzZia45Pbm5f2MYEx417dYAsMKiAz1P7rRoZbtk9oTv737jKv1auuwq",
  "key11": "64xnAPWVztCikh2iMwke8Q3JYr98hQuAAaCi3K271wnbgvTg1za7pUiRuz3TcKhjcFoHgbvvhgCHPMduMKjcMsrM",
  "key12": "5yxMTvRDp4Tn6pTWgZJRkyEw9nTkpJMRd8u1f7rQ19XbCSP9a2JjnP2ya4cv1aPKkhs1Wiit67S6JwTLExqMHRFM",
  "key13": "5JgQuWRAKwn1MdL2BpxUfirTy8D5weQCm9SGSy6DrzxeqAzQEwfp28fj5GjTwkx3DYci8LJJTkyiA2n4SNpEe56n",
  "key14": "2PUsUeD6PYWUHUabEUzHT4dHu2pJekobPiFUeiX5cbhgyhRWduYmoxHFYGfMdVuoavSg9MDAqMvGq7h8wxwjhCdp",
  "key15": "5y2MauWZ655KnSTXvxKiUiiFrMGU3ST8tJX24Pzq2Pg9fVRuJTxELW8eNmBcqgDfQSzeva8tvF1h7GJYgkBKHBsp",
  "key16": "4Ys9GCjxt6pb3xpYxHRWNsXTpFo6u7RuBkTTcdmfJpRNpLfKJCxBrcXPtUqCx2dwQX3Btnt7V2NCahCM7UGEGeyM",
  "key17": "4aRmbSjxzNaDfdNvhTLafFbw6kQ7zL7uZoBY45uojzjJaPJaTs7huip4vdzV2cGahaKJLDqqbGsa1XNntqhoVYjn",
  "key18": "4R7m1ZQ2Cbpw7tKReT3yPzqVtZpM3hM3VTQ6fsXxcmMxd6ZJR7iUbvVqUaxUTHhKidm3G8ndtLVzqg8SCJzNa4AR",
  "key19": "2NbcVoZjrsetEi8SxDkVskjmHSLEJ5GyktzE7Y5HVaiYhTBp4yUuTikuxon6ZoXYJxK52Xo2aD3c6nEXiGcoWzeR",
  "key20": "2wopAQeJdoQgXmmr8cC2G2mJ6XCB8kkoLVAi32vkZHuqbzzGBiKM5GY8mp51RfBXJ8KRyKe1D4RBWKzNzwmQPxu5",
  "key21": "2JcoVD8Suu9qJzrSWjjNw2XT9U6zViWiNcGvgELrgGz7ZKZ312DDqi95FH9kEnsnHbFVvdQ8gp1gd3TXivAnHg2d",
  "key22": "ZdLTZnWSTPetyeP5ew7U85JKESZV3ma2bKvUr9E1xB3z91FAC6LjCr1kq2y5wTed1Yq8QvwoK2H2JegPGa4oKSg",
  "key23": "5Gc11EtdvtjCRUddgA2J43z74uJWriTqopDpJaqMSwRsHKBytCQgthA7PqCtYrLTnWnhEDx1RyteuRb4E3Lb1ycd",
  "key24": "uuEwDeRzecojyzZr9dprcVZY5UxH2LibKpe8Yj9PKRZaNodHp2pxWgLULvSaSg6UKYNuefN1LipXPSvRECstzQL",
  "key25": "39HEgNaB6p3Xpz9Eg9NHWB7nbu7ScH8CpUyewY17r4t7dknPTxjmDX2ZT9yqTgBA1AY3ZfNBnF5puE1PzGju7Qgr",
  "key26": "667evPoUHj1WYEgzUqdM9pAG4uDurxw6rdZBmH2aFrGjJYbVsj8LLF7XV9ZMKL8vRu6qDJxRjSdjAgveVrySZqFg",
  "key27": "5jWfrJEoXqd122MgpNVReBMwE9tf6HRctZPDUtX3mWcsafDnfdKEowXqvpy6foCLMqzo6gTAXYbaFJQuFuxSoLHY",
  "key28": "3c2zyjetwg658FfXKqUZNnbK3JFfWKryh1x1UN819PL6xVz3mGK79iapgYj9648VtrmWuCY3YaYJWehFyVRHMvf2",
  "key29": "4faZwqcToMasRgyUwFXKkDmNS8ZpZbTVZtj95TVhqotqGeK2DnxnYzdVTWixG5K8o2zvZHEyDgfK9887JM1PHFFM",
  "key30": "2MLPiwdgrguhnUCtbWbHe6aA1pWNAZfLY6vv21qXUSbJzeqYJ2U6kurzfpQs1wmSaTujWKwuvPxmzAyTtRvg6X8N",
  "key31": "3HWcf2AAJKpYNnBqGjwiJENrMkChWSYidcwRMY6BQjvoy1i9cYbXmfAKnJLEanUbiHPcHK63c5Zbru1jy7BscTod",
  "key32": "59wGbFpyVxQtyw28iFnGpT5iQR9pNPc79CaY8mXubfE2ogjvhZe3T9KJLxfjzzvvrPeZCgsJZDYTV3FgkxzuqxL"
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
