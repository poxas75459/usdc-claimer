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
    "4CD95HLobUr2UpTK7toYg69PEExwcqgJVHZtQ46LPojxSqzcumQ7JgzLcaL4dUNVqNLjmbTEMbka1byVBThudvbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MKcSRJknogBgHWUC8cihEdQWkGJvBqJQnxphNPErSux3qP314b7smVU3GE7Ufu9P4TbtBEDnHT4qVtJdNt76wuh",
  "key1": "5pAYUgNZ28QTEj5TN4VwE4aAARHL3mVjSoiLkRyd3GPYKbCU5i8CAQgFRR4v9VGCaNTWYmqAGcd7VvR53G3dYhbM",
  "key2": "675rYpBdkBMjPLxecxntQPHCtGsh8ZemBEcKS9KKoztmcYQKHh2koGQMjopxB19kkBGJt7KzVN7c8zi8EM36RAwX",
  "key3": "4ciRaxiSehydwQpAk8wzsnDZSKUwKs18fLFphJGkirYfzhJZQMBQhj2KnLGeJPVEJL8PzKiSvsJwmTtoro11X6so",
  "key4": "5JESjAwQ3eknKqubVJo8J88dFjDP4FzoagE9xv9sq9CR8AS4pGfnwu4EJyM7URqVVofyt2rR4dbsqFrLRVXMp9ZZ",
  "key5": "5qngKmHE8PBsYmqRT39QMet3njGWardk1BbLvXPWAdJh7Xtmd6ehHUF6Cki3oKabybSdaPkL4ohfCbvj3RG3qv7q",
  "key6": "4oCKVEtccHLycZ3REwCXd78i4498StTaCCnuX9ggLweHCwTP2zMYKfBJmGk9LsDv5BbiPJbJbz2cDZZA4bugKw4Q",
  "key7": "52WSYsAXByuBpVJp9KvMBTuQ1Y293nckxsQW6hjJnFH5Wx4GBzASqBQ7XxsYEJ96jHTckDM2mYV8GGHV76pFU2MN",
  "key8": "5AtJPyA6Z4GzNySMiYHqCJ94Y7aueYTe9sWePiAooMG6NJexa23NqjB1df2YoJPHzXCDkVoZ6ZtMaBTKH8KRDXSB",
  "key9": "4YyQLzWCDWrTzsbwq7W6sUMarty1ZYtHwX6t86W19NmkUKgQwGzFx5GW2EtRTe8BrngnxLcqukoHTfcwTwyhpRVy",
  "key10": "2vvdskBZs1imL7pyPgG2Mt4haZ7zn8ukQR3GqTn2oE1C1ZPXTSLDQwZsQ1cni7yRJYHn7xJxb9oLXYRzJWsg9Evk",
  "key11": "5zWN6FMyMKC1X8v2KF82Ys4w7aD9h3bU7MU5pAzAtjw72v6o5Etp3evhkTwkAiN7tsBZwVvpyXfFdBnAY7iGzvYp",
  "key12": "ywj91hkPYtRDSgTNvRUZqo3LdHoD6Cb8w7jykLTnRoNHDmqsNmVXh49pRySiqij6ywYeYkKcpcVqUZ4MyZvnW4e",
  "key13": "6436NKfwapxH6TjNzeuGqcKt77geATUNQk5F7E5AHYQ9hnKSkqmwBdKnGd18BTvFz8N6DP4nUPWv6z2EQix2rwmU",
  "key14": "3TikonZHhJePpqAyBdSGDwnXRiwFxagZhiCEuKeTxWDMsX6KnLf87F8HqbCBb46CH3WcA6VMFJyHrCMMpDG1F3aB",
  "key15": "4Emb9Tsikcjn6Y99CrYGEGbYSyPfuECTfPnCkggkHQ4cRnqkPSA8nSf5nZwbZpjKCR6GZ7S7KzxRtgXNgdddkX7z",
  "key16": "58BbZVQ1YrFDsWndbPMe8ZBemjpPqJbJdr2RDpsX2693PKptHYoAQAJSZJkSHTckqpobE7oUxouxRe9BgpBnfdCZ",
  "key17": "5Ad3Jg3EiQTeaPEfD9AZQSJGS51QAqf9GNjez38jCDk1V4YtoWXeeyFEHQbbcQ6Jqwvsp3MDg9446oMVa3xybWuh",
  "key18": "2u73LL78K33tXxXJ6vbaRJY3ek1Ek6sbLrEn6MCdy5rsYtDD7Jm6gh8jNFSta2Ubn6nUASUFYk1SgQebj2gbe7Mb",
  "key19": "4Wuq2xJdomZzMNuFHCEXo1TnzciabCy6sRPwsXo3GnSt7Y4S8bdLTxy8kcM6z1DiZwyZjfUvtwwcUgAK9sNxchp2",
  "key20": "4q18ajapVbsvwmdFeBsigW3RkYEz61nvGBpwwh4QjSVwFjGepUzFWmN7bwbzap4s3yfpr4iMBzpYHPMhWAMVo7zS",
  "key21": "4mTm1e23edDSS4SKJf3CTNC2onaXBU7LZD8fyYUqPfgycf2VpwAisDWFpStMUPTwP2zz1vY4ARALYyvmuSmxbhTf",
  "key22": "tGwP5kQKTQTXmYFYkj3mB81VURn7Tir4wWarNm4hvMLchqw6dakSMEnahzLKGtCtnYyU8bSKQyFcGW3Jszu5yTo",
  "key23": "3KEekUvAkBLRuDv1GyVKH98STjCkrR9AxPWhV8U9CQpoQmqNBETTSDmhgvmCN27PHqQS8TaQ2QTgVinH29QLR8Ee",
  "key24": "4pPYV6C4yk9GpQdmcf4v836EtLgWScetGUdUafcBWtg4yr9XQfQWx7AY1Xqho6orMAE2sxymnhpejVcVqZCv95FQ",
  "key25": "3cVnMGkqNmkGXYvZbej9pJDkACvjCCEnqoSWo83eyN7bGTKCnH6AL7uo8szpPAyHfSVZqn71Tko7YfFidtQVTwFL",
  "key26": "59ZpNGvCdP6yMYSyGRa897XsHFHdKHScycshAvg71wtQJvh5WDTGWjpR6WPWisRCfMUwojxvheSp1Unm6UpK1dR1",
  "key27": "2msedP6fhHMLs25BHzQeEziNajf8mpBgQ9dW4jhWBDQKc9JiwwQ8xMGForcV3yD2gQq6cjsTHA13vMWQiFb1STtH",
  "key28": "47zawft9y6BmL62F6qibrwRG3S3FrK2XfEYf1LwRqJVX6U7WLpHQ86MwRNTCEAgemRKZhPFCwbdLFhsLrtWJNShQ",
  "key29": "3NArP1L8GNK5bBie6djHf3eR5ecXpwh6hDvTWZVjJnNPdWzmLSgztFhFfh1VUugvxKpBGffJ6Hr4wYpkS9XTAKJs",
  "key30": "2SYD9ZEjqGVUkFuMNxhZNCW7KPZaFRBvKTMbodm7Wq9BdGoJCJxJg2HoiHEqzwTnbFPHJXRmNTKoatGmEnd7wNYY",
  "key31": "29qFxEE5Q7gUwYvHFZaDjuj9cP8dD8kLv8pDqkpQT2tfRrxYzp1RtKjAeA6uksD2qb8MzjuWxE1dUJfmFjBmaHxr",
  "key32": "5Q6n4cnHiTQMAovLsEvx5r8ENxNCgj2WrLV3BKFV7rarPNBLr1ajn3DtBf8YFhgt8ohhRig3g6d4HEy9BqqmYRnc",
  "key33": "Cuy6hvX4dNTaPmujNbjDP4PGL65zwWnwWpBjJTZ3L3WWLghKRbEZFAX423WUpaa9i8w3vuM6wDxwtZjGRApGCCe",
  "key34": "QbTxaiQPVmkM7vqvS9oiHKH71cxhjjeGwsPkEnyHuLWkjDp9fqLaWa7r7rhCRex2L7HsTba7KHgvAXNgPGqeZ6q",
  "key35": "35idvYduJn7u3FxHDMFpFiXuGo1uQe617uMdkD9FvsTAE8t8VeqqiW4cdecBAVdL8AtXNcGNBAD6dxmsbQRgu4NQ",
  "key36": "5KGFJ5RXWnViEBBkpvmhyPgcKbPWkGqEwCUa93T1rB3qZHzUeXSp1w5GVUMz2XR5ehd3GBiY6XnJPngFFYHWH7vQ",
  "key37": "651eePWQBiiFX6S8aiveXuDgQHUCQs1Hw7M4WsswMHdCqHRZZ5k1Q8KfgqxFBcpG6vHoNfsYdvv7ptTvxPJ6v66k",
  "key38": "397x9FbfEw5D9UgEh5K4XGcWd8sSkrUNHVY4nWpAb9J1ri453Rp2AxLj2K18zs3NETqBjBxvNeRaBqPqKTfg37io",
  "key39": "66SnqmnzySwpD5DYVYcAavXxgst198CMc3SLYzgwvLXZgw4RqbzxV1Ma39ZqGfK8TVBknngsRNsRDiuUmLfHVkuT",
  "key40": "5agKmrMSsBQSsSsrVNAigWYhFweYo2DrKDVBRcBKNGSyv2C6AZvU2Scpi7JV5UPpr7GMc2aPxYr7xiHHD8AfShZF",
  "key41": "39i7f7vCHVDMNvFwcDN1n6uqbmoLi1ZgmfG9CoRsgwDjJQBbzyeA2bcCvvEK8S2EXmmSkhtneeW9ea3xQ2ud6Q7i",
  "key42": "TZAuXiZqHGNMVv3paMt4MSNMQYaTBtkWNm2vTHwUPREohZyQ9jW6W6ToNkQRT6ezJwJtLQNCwWETzabTHqPeNFB",
  "key43": "2WEMFxkNP4dfoRTsfrJf8oAHyTJyDrE34e6ARb8X7kzpJWcPZK4rydxUehZxm7sdxKPgyCDVAAJsF2z7bhSpodtP",
  "key44": "2YUpfyP8gPPd1uHZEW4QHXDRbc89SeGoaCTcPraa1iapMa8ucEKGBRoSyFzmv6AKPFnnoyztZYiJkCH6Ty5Pus1W",
  "key45": "5Vh4pT2GwM4JgLzAvX9sU7AF7Pa4CXvqiPBSkyQrwXNqyEYHEr9tWAVu1KTJ3wbAXHV4R4fSzbJCERRWrVuMG7rZ",
  "key46": "5PttCxRpvKDMJuxSUU1ZqSNyYQLpHJnoCiDq4Dc2GvdosDZKcJsxFzsy7rQDbg4CeddMAs2rRGaYmubDr1mWE2GK",
  "key47": "4yXacWFhD2BAdCZND9mbVFUVKCBoWxT5sVZ9Dh5ERYBRp5VJqCLMKX47bVJdRNpwjRueCCjEzYamYyAUqMxiG4Yv",
  "key48": "BhSwmAm6V24Yb9oczyfNajRSp9CvWaFquL9evKTM6knRMCTRjoRkouh77C6CJ9wodgiTjhb5UuyE9NyjtXpWA4z",
  "key49": "6X1g8bNe5gGAqhfab4coKjR9aWoRMLTimuw7cyLHWeJTuMjS6wt6vEmMDSb4CHWvJEd7tV1tHXsB6WomzMTYgQa"
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
