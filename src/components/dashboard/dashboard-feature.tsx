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
    "5BM6JQi2FkK8Y9GaBwFQ6FJdKbKFzpNhkdQNEyji5sQdkc7KM91hAYoSTeLjX5prmn2VRtT6De9LdSN1u8ypWhdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "383NarHxSsLYCptoLQFFR6Dof6FTok6hm9VBdvsznq9XzhhnJmjybZiHDiPRosepbgdPi3Jxvm3fBW8d7VsntGVw",
  "key1": "5k4HguGnZkSiA4QeFyoYsFazmaxXrc8wtwNTSC9ZdNotHz3MSQcCoqCQLGnVBo7Ex4uD1ZXePb2VUax1ERCoAv81",
  "key2": "3MnkJGDxq8ppXMCRV5wd5WLhKZb3NXwW5cJyXPtHcrFzzsvoZfMKyUUPsmTd77ULorJP4PKw6wN5f8Ao47kY5n57",
  "key3": "61yG5jw5iztXh38gfdPUikxj6yebGxy8jRnYWqsoGFHq6zCcAF1YQAKUBEfYSAx1whTVR1wNKBDMGynTvo9ZXdFX",
  "key4": "3GKFd2wgWMoBKKNoezc79qDbNgBLTMJyNkDVgf2Er1XH7q2uP6b1tb252TVUUK1MDa429Pwwo4jXUcaU9mJEceD7",
  "key5": "4cxiZcvqcxTfDRJVxE6ZB4ptmkvjZAUFiwxHDpLQ75SkDVSooN9cJfDdAsdaTe6KkEGmsmRKtHQRKkesq6vgMpeN",
  "key6": "3vqQxeMehWpGAvKJYPEATdSDLpgT2aHT9hVzbaSwLDYnJamtvWLBEkT25vNRHy1B4uVZQaRQWavyR7bRB7qi9Xsc",
  "key7": "3uhGLS1ay7xEV4Kc1j1MshMm4dbdXS2Yvb9Jn7MMjuqUkDYRTDJPWbhhedLi2PuMZqsRnqBFBKxyVox79K5ysmkf",
  "key8": "3NuqAxLE787wRYxBYF1JdHTaoNywLfM52cqTHdiF7SbkAaF2qaM1kDjFxxpP7dsAsNjRaNnjpgLBspbQzPrq1e6r",
  "key9": "3zLhydeakADszYCBjvdWmSSiAaWKosMDuT27Yi7c2SUMApEWTKCEtwSiuZgfnttCq5Doww76pTXP4bRLT5u2VM6w",
  "key10": "2bX18oxfmgGUemCwqFQXXisjakzoQijaebeu9p5RLVr5P8s7FmmMVk7G5T2vDQbZxw11MBkcKctbNJxLMbraXrvN",
  "key11": "5BssBaomVZ8iBhpF7ACK8SymuPWK6HNxvtHFBPASFx5AkLNtcK6zVQezv8MK1eBynmhaJ4Amrk9KirqCMHycsgdQ",
  "key12": "55yUbTXZXMhBxEm8pUqfJRVQHhYFpd7dWcGEzejdMtTTiy5njNBsm38Yr6cnWxSNBLT3H3t2NLtH9aW18HWWMY5D",
  "key13": "32CSoeLfszVFkUUmtf1hsyvJRuuJp7YuCS9h3Yh9ikStaTXqGJabHkx1X3YvwAoMR2mip8iwHyYB5b1G3e8pxDzE",
  "key14": "2cu68p89hRSHXqJvr5ZtFXiPb9FkwtxpAKjLWFptJSjcRSWhrk3b9KwqZ9FjK5uVothAA3zECiACoTGu26rra7C6",
  "key15": "21tQezhtGa7XD1VbZ5x1RGbEHQoMWCtQHBe9gfCxgA1UNDUeST22Cz1tFMLyAik2upbe8d8kd2amiuknJWnS2LcA",
  "key16": "5AJjSh5nVfxKpzR3qov6hFra3H2DV5Dz5HeAdZdFaP5NTbGtcFBhzG2RVXygfA2rF6h7z126zusY3Hapuq6GSuYP",
  "key17": "65RLQQCTGpAn2NnX7gWd9gauN9C4mAmQhQDbKZApNbLK586nnrfuT4rXnhPFduWojGEbvpS3Wdsk6oLGCA3LNwyx",
  "key18": "2sVH8mykKU8SQR1yPxx6YW1g6GRZ3E3YHykxtkZgitzkAHN4ZCGuSPYQmeDiBS9T3FsCgmU9tZBZk6Gazyej3hHD",
  "key19": "3LHZajGtMHhFDYFbEhw9qLzDMMmyDJU32zrtBvcZ51TuMdtCaNErn99D4tCJKKGt9QzDoFdGknV6RauWeiFpLvuW",
  "key20": "4GSXooWzKi3a66TqALUR5hnrFv13U9efMp4Rk5zfFtUFesncZ1Sqtbmu6C7ehLBeinqRuEn9PF6t7ixJmiWsLNNz",
  "key21": "7jEw7KbT92GVRro4jQ8QVpQCHFxAXJnnzycwN3DHBmtMFgxxGha2PhXTHxwqkTEQHaWDgqPcFkPUFEerVQhnsAQ",
  "key22": "4BMZLw4eNkuSMQjQwdobiqURg46KegRdK3spCnQEn88RHQvvcdHbZKpAfSwEjiSRtLow1TfX6ZxyrQBRyVSkCMXy",
  "key23": "3pvmDNRFNZ7oGmz1wobJZSNLMqaZkwmd2iwDhdrBPJqMjNKKTnYPnSXtDYotfvNtMQaz8TSDunCLoGU6L7Zan3Hu",
  "key24": "2VkjYmcfurFQh7uW9p3mdcmXHceLXpxCCzFAtJgjRcDKwbf8QVnysbEJWBuzxb5KErhZpCKgMhvC1zrtNLeRTgfP",
  "key25": "5eFjzNRPEweXeXJLjobTgYHRgZC7fjBakaXBiza3Bh7qAa8adafwxnGo6xKvpmZ6yf9PdTiSJGZ4GpWhbALN99yt",
  "key26": "4PJvowbgupdN1euX5qSpvZjrbH4zs4Y7VjuzmBGX5uUUhF3fFVA8yApF2C61NYxByAEQfzwSe59n2CLvVXko6pJa",
  "key27": "5PS3nLHbWTGpC6bvV8BqfPJR7fHzPFRnWiTAy3eYdEKy7xMSWd1GRtDxZoH2eXjisV33xhnH6CsRoDoN4B9rJ79M",
  "key28": "5BaRMJX5guWMQoEcbKhcPLMvdkDPZtjEjzDrokZ3SVs43WXxmQLZWCzenUu2fCjT35XDPY3TZj6EckZsbjsZmLy3",
  "key29": "2n7VtMTwGuecmHXiefpBfa4xihcnXh71Wum7CVwAZdNqbmNkZw3VPWJZfpCn7At4fVXs58xqVQn5oxjrSiTSZXwc",
  "key30": "UL4Eg6ecgngVsTvD8JLGdZ6FKa56f88hQpMP67dbRBvFjsd5vUBBfhru8FhHyzAhZfEwDe7qQyuovp4eWt721EA",
  "key31": "5KtMu4tHEk5K5xECgiAqL6KZfgF3kh39zziD7rPwxuRAGgkj6pkNFc7JsfypLqap6Q81tjpHG689t7HcQEbiY2Zs",
  "key32": "3Y7AQMt4FAoEtM7gxwejHp1eNs7Ds3c9ySnoeQ8eUfMHQ67zSx77PgL3W4UDrWW34PuwzKBMsVyWS5ifqJgQDAiY",
  "key33": "481FatYv7T2E8eynXDJayrUjoJg4RVJMEZkYoQZuRSfnkMn2cWsRBWsgZkwCJcso7ojfgajfBEAf79Uot462h1mV",
  "key34": "2XVivu7G8eriBWSLmczDJHXeHrymWyhTjX7LvrMVDvMgbsZ19hkcycRwgyPycgifkEQZ3Mqouyve3a7XcFFvbb5J",
  "key35": "3XtdbkxryEHJmZLqD2cLyQ899YR1BBq9yUL4dSmsYcmHiRvMyk8CfQoedqcS7Z3WJWsuHYH9e1DTXomyCsBzyJSr",
  "key36": "34HKmMnBhZHnWwwPH34rQWnEbc4UQ8aryV3VYKTTvnmpHZayAHrSrEJgBWPzg3wv7LDRhzv1zNHJQwT5ExXP74QN",
  "key37": "346jdsFRU4pa32TqojqHTDkiEDmH1KKSiKR4C9sjjfRPfNLkjvypP5q7KnkYhrqfZVNM1cpWzLjdGp9zM3C1VPeQ",
  "key38": "51CwJhXYswPzygnGKoDYxvxKfEGmYs2wmCZwjqrsygp2dMiEwGGCDsDWPrFpWw6W8YQgB5Rb8gLvyYVzBj2qt8Tt",
  "key39": "4KMDqVSZhxCFY5c6rWHWEGRbV3QvdjnEHN5gBxxXdfmqA7ywzHJT1m2iALUFMKEF5M5Vf2ZerDN5zy4heEhKx6Xa",
  "key40": "42wLk8UhWfJsAgZ6Eqix6RGbwRLst1dXwF6hPAnsLizMNkfW4WEFu61vnAnsbW2WWoVtrGwKbgVGLiYYrynbKiNg",
  "key41": "4w7bw7q9B4JAT33Z6VjyE5qcuwRYSuQ3mkfDdPPG9KX2HC4SrnHz7EkLnrouo4fdW1stiHAu2f28hyBfTQdGMZ7T",
  "key42": "4Rvc6f9wYWM1LT1MpYoYUEgZvFmzLgVofULy3KuJcCJvSDFgFpQQXLF2kUeYEhHJidcAQnjcGpgcAGgbR6djPFcb",
  "key43": "4qFr2VuKNWwNGH4EZdn8DcCAP6QuWiaT69goMs8qE8LVyp5U8esPxfvaaDEkkAnpkFCN9c4DZHTV67mi5NkHUYkW",
  "key44": "5qZEJhAe4hwsV3YzgCHqP2rptFvkpvoYg9zrBeh2JmS8qq6j1qd1qtVUqX3zvpQ7CztxkZ8uzNs9bv6umigaSdKE"
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
