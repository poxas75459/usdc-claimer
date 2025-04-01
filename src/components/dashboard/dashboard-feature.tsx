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
    "5pQoSxYyBsmMwU5sG7rQsdAUoUEpBm678hVWmV7C7qYHg9q24CiWU8SPFzs1EijCbnp6EhhBiffG7CFisN4GrhS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xeUeqxpWc8o3w8czC5bRSbKYimaprUfPvZQmtLKj9xUt996eikqW1w6NqNLQr39sx8mVPS2dvWqYFCdidituKdG",
  "key1": "3o3neCRL1JJynYUGkUNwEEjhBAuTEvPPKJJDY1QvFWeyvVgkRrE9ta4jf7TDQnwE21rvWxWhYtFDaL7nPsKAJdyV",
  "key2": "2F7t519tQYjSuDqGAEqdn33EXoH57EiAXoj86kTFxUgnaXjfCiyDQGpETffumMvHVkDZKx18M7YMojvydT9MTdb6",
  "key3": "3i5wyoVdUhZ5EPzRSxYLL5Hz7cRNR6L29qbxYTo7oyyofjn5HiG49aVf9ofzkQwpMEvngfT8XsdXKAvBgkjoLzgk",
  "key4": "5mLbJrPkuTUdLbC2FkgGPjP4KpTzysYdZexE8mwp3ZhcCJ6GZLvZkRUjMz7oeazTwqUe6ur2MD643AJdgsw9jgnu",
  "key5": "2hvahyQE46qTQf5qqifN6wyKMGJ5g1s6T6oAJCYdE9heqi7nks746SdwMCGR7bfwGfZqJNthuBwMy32tPQWYE4WA",
  "key6": "4KERexQuGQgjw62VJZh6GQk6QZrNZcLB66wDjsXBiLAaourEVouKUXqopqh81gV2YjoAkZ9WcH7NWkwoKZ4tGFxo",
  "key7": "3Ge74x7TuGjNAisTnUZz8F5fiNxJbtTgpgmGwEmo5PWhnQTSHCCVu83GFnYqEsoGVMBaUafuHd8pi8h1vWH5AAW6",
  "key8": "5bQj9UKTjLdCk2s7JeUqWyWrBfadRiFYNBNG8iDetYGLQYrAaPQTVeayYLtAfTs1YqTZUwcj9qZhx4knkopbp6bJ",
  "key9": "gpc8s8G1D7yt2fzbHdEcgkhbUjTfCAnAfEjv4qGRNqUngh4SQpEKmeXXCf3b8Gf3M9k7st8KbtWC5z1WXr5p3Ew",
  "key10": "2YCxPkSj9EkN9xUZhS3MHCM1boxi3UWUjPSwPGm9SMvQbGU1xXJSFKBZ4r8EiNXXrLYU1hyYFZjXWwrAzcXQPQd3",
  "key11": "4vAxiYTTyjw3txv92iS2z4Hp8oRedZUZHkPxgCroTxc6B3PZBUJRKdBgMN2o4uE94hLmoe2HJzBRVHdRBdoA9us7",
  "key12": "5xom5SF8Eme8qXK1atM8Ci6fdd7G5Q4kx2FGQ5Tx8G7rXoDTVNczoa34AnsywC6oY1BpAczMNfowqMz8qkfxjqp4",
  "key13": "1291vkPNSeyYnkMpbXedG6eYJBLTk3YiMy73p5A7rDsvWcGsDnk2rz3NNFUDcedvHMV7zmfUxUSiqYdX3AxKqTHF",
  "key14": "34VMGSvnzJX2H5k26kwftZnuBdUxrPK1smG2MftCGMuw1EwbNeQZrsfPst6wx7QAv8eSrPn5tWF7u3RN7tS4t1Wy",
  "key15": "8MXe9SvUDHW3HossrMF7QBtJ8hdoKMWw2PEPEWrWQzEiTckGqBnXppkdgQtDHtCkniTeLaqvXpAqPMYRAeTBVfX",
  "key16": "2NswV3cdj9pwsD8XkM9j9oWAjfvaXJ1P2Mr7Wk5ZTKoB6sLbZedBzC86MvLtiwdz16uTP5tn1zjeLpkwUbToKN2r",
  "key17": "3vj3s775to6wPifWkHm8MvQULR4MQTRdHwPwjTukBexsxPFVzBPSNDLkcffsP1MfZpKYZe3FjyhQVRkFUm7NA1N3",
  "key18": "2TfN4azYcg1mveG9NKpgRBKsWufEJvZgM4Ppb4ZM5nabKBqe2o4CHobFfsckQNX5fR4Qq58YG9Dhy8E6Mxrsd3cw",
  "key19": "35QM61rjjHBfT7A7b8kAbUMDq9WnXdKqRkTY77EeaU1jkL8RAoUNEHBXnuTb3MQ3k9nzY3GAdJ8q3jpTvyxVfn6h",
  "key20": "ARtC4vd64fDq837uKSzMq7e8ejMh4vFA77KMMzqYb5ULdd3cGK2MruLmfHjYQf8M5biw9YMaq6KUZUJnW9ZDQdk",
  "key21": "2VCgnjBduBpqKwXG1xyAqYEdTsV7HzsZUKd5Wuw8ikyKa4yQAmRGJs3fv4r1BnBzaejaQEVEwLcRtFhcd8DYzB4B",
  "key22": "3yS25MarsLq49NB8VKixKWqcjabU3RBqNjJ4k2yGEYxiaoHetts2rcZxj5wEGvsg8zCUiKMAeMrEgRvUHqK4zeBp",
  "key23": "3BDs1itp52n8AMzd9Uv3fpgQoGba3vvNKAubnGTtWL6RKcH9V56RK8rJN78Wx4fgPvvwTwio17WEGKtKZq8WJFiK",
  "key24": "5fQPVSr45Nivr1zmgybTCP5Vi2CCapAWUVchpSM9VKmomv2AdRw4b3R4MHwMXGBANFTLq3jRBeUnczYi8ZNvv7CL",
  "key25": "2PjoTDFTdq7ncyE5k9nijdQa8JCeZt4y1jaVaDsLCx4fAoTEcWTybqvrFwhLSV9dMj6h7yfE3cUhdzG7eAGyHzG9",
  "key26": "4vQF1iXYNNJSELfpixMVnDzPEsbSPyTJPBwYuB6boGt8UFDKXP3AULVx4wkJ21gvDJKH6SbJ7RqcrXAMtmYYBKdj",
  "key27": "5NB2JxYRmVNzNGhQoa5p38jNQhhKK7aKAE4MafQbgjBM6As4G1MvoKeenHv6tJbCPvrHhfGhRvqDK7TUQPtQK8RH",
  "key28": "4iQS8BXnFgoo43MddXj3jhjQqtUju9BgTsnZePtrDKSFQNiNcjQ4zhfk5mhrxxfPnKL8PK7aq8TGzPJ7yjffiB4V",
  "key29": "2p11PCUuHhVHwkswM7c3oKFgzyBDtKzUwzY3ScaX2xUVmSsKPKYHjoQzUoskdSo28orAFbkia1wQsvxzcn6q8Q57",
  "key30": "4zB87cXCVVapNN7yKtHVnhfZy7ALPLYpRHsZ4YnKA2xycyFwnmytMt4L3agjuTAy4oMrMVHabctFHsgrTwAuGdNh",
  "key31": "4XerPUp3w8zTTvqwG5jdNdsjK6LZHQVDQ9aHZrZG9gGwKtWBFGapQtQeGEzyS69WKL2yQHxD4KdZd5eGNTngC81U",
  "key32": "5K1STShRz2S7wshiuxVGrY3k9zFr124tm9u5LDNrG1z2UQKyzZTYjN7LjTw52iQ7pcdJAQQ5fDPBx72D1AbnFoxN",
  "key33": "21WMhg4zLBRmpMx46CbzNEvYrmFcdVYb55g5rqzwKH88ETDKqfyT72uu2kFMbv4ZWqw6eFSTrzNbqwm6ZciWo7Ck",
  "key34": "aiE58GopnpapCLQfzM68f3VQ1Cn57z4cfiDPFLH7SZaztXp5GyJBd7Q3TC1wJbipubnDhJztK9x3ocYqPkzJHdm",
  "key35": "4qUV3b3kx8oQ7t8nwj3autWEvgswnDxA4GtzzvHmga5TBPmJ6UrDpdSPiHPBTmBqVio1iU34VAdX2AQsZTzmxJbQ",
  "key36": "4UV9VvNfA3XD7z5apQ8TTjWQCLtCfgfeyXEaqrdKUdeSyqm9nQB6spiFw1osRPMN4mXoaB3wsaDAa9UT5qohvdLt",
  "key37": "66i21qDEGLktNV6QLYPhYKtzzVonMjX6YxkuMpRkcqQqZ9t9PwsGSFbgMBD3DSn9dnugVcAj3ZTg8HVc1yaZZUwC",
  "key38": "2CFXTNUBX4WH9rUY1Us8ZgyALJoZZ5YuFNksDDmAn549E8tDr2J4NmE78opadTUtdYmYpWaUsMaV4Mr7djfNCahT",
  "key39": "5HnnJh3rEFnpVBju6BtttGYJQ1XmA8Hmp58D5pv34nhjzoAuasoUWm1DHQxWYjVjKkoKt8pP8ydoPvPbmBEhs5y9",
  "key40": "5AyP7R2Fj5sZwJMGAyEvGkC6UM2FZkvgs2FYq2hJCUfWxMn9vtKnHu2seyTj6auUSpunqK7RBzCg1ZLiRSBknmpv",
  "key41": "3f8HDGV3ZwSsdLSP5QQq1WGcCUVBexc13uATcZjiKr5KU314m5KxizxerAj8Sbh43nnETp4iyLY8i9qADC7SPRVF",
  "key42": "tcXLQdNoWafoXWGC5wvM5WowEhLGJaLwmS3QxDpq5wikhgfdc72daBMZnxJyhjsYwVCdcHs7dBYaZQPvFSQEtEv",
  "key43": "Gud84dyPFHSNKMUprXWKLJ4wB6rtzwfoBVCsTMeTXztVn6EJkJGyY87EB2geAZ6kW8wCYF5w3X5PXNohE1ZWWJ4"
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
