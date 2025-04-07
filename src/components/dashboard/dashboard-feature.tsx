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
    "31ri1TRYDKZzhHc29Ajx3MBp8rDbWukFXb4SLKb385iQDM8jMNeGDQA9frUN7uJtMU5RwaXSkKhbHdVYUZ5AuCyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WfKhZxnUr54XWVV1bPA5EBSRYowrstooC11VxyR3M96Us9eTA8YvAQVbaQ4DN6XSQdgwzMpS91CxhjTkLHHkshZ",
  "key1": "3R9xjprH3jQvF1avpwujXqJC6xLFr2zKHSnQu1tGL26A3QtoFynsTzpQuRujJvxd2AkW2qHZBCr2jiL9eWyf3LZ",
  "key2": "uJp9hxvtFRxrbQfBpcdF5enYG3XkxaguzKScGYqLS2Q4asgEbs1oeM8TowrS3YdedHgB6uBEauDYW5RAHae2Xs3",
  "key3": "3FrmR7opnFkkvzcMHHfvChfFYFeroZP1QVH95U54ZL715eU3w5MvJ4AvhreHiEZCSyatHWFNGcHS1pPNbQpNzd7X",
  "key4": "2E5ng2YVx2nSKAuM7jungVWpsnfffPdP2bQGUWeiKgcfUWq9uFJyJnfB1fE6a7R5tSq84Kpw54yDfAbgVoULdwsu",
  "key5": "544pUQXCnKZZt6iN5Q2TWZ6791b5mLWBXkek73KsZi8REiJdRRoqkQDvK4qAxfbjNK3JXCG27JB7PvoTMToMHxmU",
  "key6": "y7KyzjGDvkwUHZweWkALc9eMRJbppow9rqT3SXTVy7do8fVu9ViugoSZkjgG4kescNB4C2YVvzCDJLENrd588cs",
  "key7": "53wq22ipgReRQs9VBa9DMKRdG3mQQg9sHMVf9qVykctbPZuuBLrJCaizLAKrBRsBLMrB5yrFoEAx6tHs1L6B7TmN",
  "key8": "4YVhRz9BoKixNv6riDR7Jjr8BTRjuRNsJSjg4YE8F2hKwpZwbiVTxPWa49aEFyVVxbbXErLtVtkkyfZttvdNnLdr",
  "key9": "GxHPmYq32CyQgYCquoJ4MrQd9b1xTu4GDg4LAmR78h3GvjVj4NMAjjH7qxi2mxTjW5SkKm2voBs7MNQKKQCL5oS",
  "key10": "3xLH2tYUUS8Re86zDVrvtRxn8Np6AjLhZnfV5ioVyZF8QyyVmMksFCQAWmvGLyLrR1efewkgEfVFbxXyzGaozfd4",
  "key11": "3t1EnJzujeoYWnjWQNGcMrqnqxTscEW1Zc8TqgaGH4nV53BzNedF7NB3Rc4qwebDKCtGgGuF6Hrf1RYkzZmyRcb9",
  "key12": "5LeDrSBKbJYpP7bGofQF3dJA5RHaRg3qN9yXeyvwe9v7YvBYdsHrUqAoxyVQ1wVGLjyM15kKs5KSbvrMrFW63Laf",
  "key13": "3qxvj35UMAJwVGX1VLLMdfVJGGMgJ9dReKx4ZepD8tsosr7uVpHZk8RCU79xUF8kHoAzwDjY31M9oWQaN3opN5W3",
  "key14": "SqGqKVvBvUbKybTgMywQPaBpVC2VUeGqPhLjRhFsC8jHY6tnMH1ALKhUcu2m7J5Kj9ByHVvUa78BkX1P5d1JJ5m",
  "key15": "2mrLoG5pGchPTyEXt4KAdPAwWR88ZkddcTZ5q9J3PonbD2sjtA1fjTJazpiiTZv9m6YyaSAx5TmQoSAQvrYgFLbs",
  "key16": "iPP6LvjK6Dq6W9vWUMJB1oaoYgLE6eibJd5JBsWKRqazerWVkssyRsNVSZBx9H4xSFjTo4PBzgHyDwZUXWaqn27",
  "key17": "wwJwVURhydN2t3x4NodyRSqEjUUMtz5ekYHdMBKnbn5FGxBSVc8Yfvpi637yd2UwUz3VQSN5QfnXD4QGv2FxAej",
  "key18": "4Mwhme3EUEJ5jwMg9UKEYU19ZtsVsV7h1rApFgEQEn2sAfLNN4AMzkYraEX44y76YgCCqy4DrmZaX5MrU3Xk6xmy",
  "key19": "4qkNQxEdpZENqN4H1Fq96GCV1Tf7mi5Y2enxy9TajoKmGbSb3zWPmcK6LmPWixW4c4StEyTfE8ecPyixjApX8At1",
  "key20": "4Qq9wAf8XMQXY6aCkMMdx3Sx8TsXy4ugthArbVRX6bMaSkUDwLHWxwQNrPrsx2BBjqYUBSSvPwjGTXa7L2oe5PQN",
  "key21": "9LyreYofes7kD5rChAmPS4Ehuh8KQ7qfwJzwbykgAQqb7Uruw4VN7KsH6Svk3yKRAV5pcRSY7jJB6jp9yyocTFf",
  "key22": "AN7CpsTDQvHSdKNFro3UPVinHdPpa6tiJzd8LVUuoVeZ8tWixPHA9o8G7v6SED8AiC7pyvdikNeY9opkye4bY32",
  "key23": "3B9qaMVftaJvxArkrcgUoCwCmqBty83pFnySSCXquhRYBRSgGskgitDtwphuJ3pSD2RwWhJg8nkmmKxJcrAhwAyX",
  "key24": "5qHsE8kaqejtwbT7m7rVoXd8mGTuB9wsZ5ya3wDpaHo6Y3Gi31XqNd5FKbBmGfJy3iBjJHoTKhpFALbyosD4gWQY",
  "key25": "3Fx5uAhScJ2vmpYMsX8KNx5seMwUdkERDU9HqMWHd3AarS3p81NKzj13KnurYzooAKYSYsmrrnxcdTVPVYnPXYtT",
  "key26": "2EvDyxPqxSsh1jEmiQbmATBqGWcWAgw4tj7sRMuDtUWtW2jGEYKmREFJmBZmNTT8q1E2TntPMzuN37WiNQ4t2EPv",
  "key27": "3yuXkrVYEnkfgPFpgJpG7MKXNbQqTAQgMfowiZGSnkkEmJiBX9C7zRW8EMTF7KPL3Yy7hyJAnS9ydN7jjiMYwVCF",
  "key28": "2QvDyJapF5i3QwLn4XPscwSNVLBzdxD6KKNgAnZGK3tSBbhWGw2nrNQqsRhVswaV7JJV2Gi4T9gjWMCvTgBrS9Nv",
  "key29": "28WcyYJhY8JnsVhDT4fPvEEh4JStLhM9X2Rb3yH8echUMo3kRZLyzJroVLNpMZRbPibt4PBcPircR4K8VZN2Y8QC",
  "key30": "UCApXNhhf6rbDVxANGFufGgvwcStTTi9DGjTuEnKrKV5B5QxvCr9dZcMgArFg23HhAPLGujf2NVWNFSvp4T9FMr",
  "key31": "3qEiUK9rwFccY74F5FAsgDCSodBLFJoXeZ8rYS3sB2yLpCzR2K3gnkwKsKZKExD43gyV1VKY5zKtC6twgkKLiXL",
  "key32": "6415HP3fZs4yNkaQDte4eMJKJEcajTAnnDdJGbAHtQ5oMFxmnRc2baLxjKvaPuqJve5QS8SnNj6wwUAE67rsvxT8",
  "key33": "2cXwQRshwU6AGPqu2SER3kFLqvoMZoc6B3VA2ZnmTojGtGrptPpvPjxzv5ooF5gzjMP5b5E4xqYB4RkjJKSo7oM1",
  "key34": "T4P1iEWu5PUf1cbWBXRhjUdQpmxSGfhKGuXK1y455uZjy4D4jj4dtX18qE6M2s7rJnjSjGxSr1eaz8E81GyLQRC",
  "key35": "tq7ox8nhz26nGMq3rxs4ku9MfWkLJB8RdvKkwJcWFYoCi4NCF1KhkM89fMeUj8Hw79C9zck45q3CddRLNwSejtY",
  "key36": "3YWSHbj6Yah1RHxfk5QCtttVc8uh2pMWixeEMMoBvsYTgBq8VCCbsGGYK5h7BqFHRcY8FNAfMzgurNi35pMrpwU8",
  "key37": "4LtMWNGACUNCi7ekGKDcZSj9QJiYUzyMU3drjXSxUwxoL35RsPfrAkGLrMBahF4X6Ybwv55dsF2uArApJBoUVK5s",
  "key38": "5w4vGKUZrBQmscVWhtnF1JGTHdpidKk4dPjTHXx3sUA9RmenMM9t8F49ejx4QP3JRkfH7t59y3o1ZmbDseUdBC5K",
  "key39": "2tb4QH7ru3ZQEmkV4rRjhp6bgUTjuJmHN9eig3SBkuYBjZKjATrh7csKonDiHL4ekUyyvj2GJ353jLipiam6c2HR"
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
