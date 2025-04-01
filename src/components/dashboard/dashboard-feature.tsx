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
    "44CCUwGbynKJpo1uQz89J1sDPpPWqvoRSq4AWXfkaPjG7C3iPkotvY9oqvF2qixVDzeCkuRjeRzRq1Y5CaPKsqnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nZkmieYAREhFiJybRF8Z77TFGm6DjamaQgzAJpfBqvKLqVKKquXW3sxA6AuyZ35v1ezKduEkDTMPExMimXJYVXk",
  "key1": "Fd68tvvKueZthZBK44GogLg1n8MKQYVNDUm44Vk646EBEAuUtHg1AByLBgvuskUBQduC2YFtBFUJspwQs33KMna",
  "key2": "EQPArc9aQBGsYY1qqySKYAmDM45suZLmnBuSGAazgPTvrDVqBZLTTyjhp14LWqUkzXAvzdvBYXMzhJHWu5zpkCq",
  "key3": "3AJ7R3Ba6Vjk8HodF8BRLkMQ7u1bwzv3puJH26oxeJ7dhTWs9TBpHAPrEx2nSDuqasM6Wn1ph33JvCBTkqMNWShQ",
  "key4": "3X3fjrQj4TX5L28myVJxmwwX1W6crGQGEc855jUhhCdA21V5e5BzGed4nuYzShWyEZT487A3cCw163xAVxXfqDqB",
  "key5": "4Zdg7Ks4yL1M9h2mAAx3gLMiaibPrBMyVFq6GcwJ59yeoJfiRXE8aegMToqnRU8SN37yaahvYn3bescUmHYJAS7Q",
  "key6": "4334efW8DVuUcfhgWaY163s34W4e66D3NVj87JMBW4C7bsAsDaffiXHooXmwkcLLQ1dahzmQfbjbXxMKot7YUZmf",
  "key7": "3pWEdzGhJTvSakP4K4DvcS9yjkgjMMvzbRnKUTAQRXSnypLHZkksEpg6WWJVbxoHWkBjuNEn1Ar97YVb5WEKJgMf",
  "key8": "3AUQaRd8iU6z2vjkd8TLL8XgjVCteQBFRau2HHdRuc3qygodaGrjnaQU6oJZPi47EzrHUBXpAnJsNPwj3yyPmKGo",
  "key9": "5TgommYBBkvLjs72inGLRKSnwPgFHqdzzcn2cAgfoP5sJwvHvQ6xQqtkf43AFff8Mz4pTKUFbNAFuPC2HN6kH61W",
  "key10": "429hNy21oj9tBDq5XEBu47NUoAEyBsoGyP16qXGD7re6yYZqe3ebcDAbD41osB8Vn3prYBSnJ9gARwrdSWy5Ruc1",
  "key11": "3BrXMHyQyZjXz39MEfnn2pEWGXXChcuPpnaEDnYDBfcHXXe7PZrn5mS4JpKZcrAHs31WFjqWLEtcTuSuG6zFX72s",
  "key12": "5ATW4waE9c3JguA6TrtYvbbAGB4Sc573hAvZ2yTJGA1kdBSi24WhAfveW2NQF1Gn5cSi7dkjTmCR3n6pT5f21CMx",
  "key13": "Lnw38mcSNuztNnh46pvM6pMHgi5FrGktt773zDpbfyf5hzSNmTuAfoJT3cicPzSVNCQzfnKa7XiqGpx976ufDeT",
  "key14": "3gyGkmkTq8fYfyaUbm8tApXJKPpk4LZ1y5BU1bqqLkqBv4XQbjSDNRDUd1Kc8H9wFJCwcH7anQZZJ6wYLikH35U5",
  "key15": "otJZtfar2ZkJBC6yAson3ktCcGCPh1wz8eZBRWLA1U637j3F6K5SSKLAGKPjfi4SSyqWM4n3uCr9MTB3yHdjDkX",
  "key16": "4ayRiJUXEhMh5FoVUDeRQtJbc3LXVe9Bh3nXtReeUFsTL5qiEQe8VwVS23JGBgGr2ghdP4My3dRTBd5L12Ap3nWb",
  "key17": "5nnsgf9GdFGBPiqDacga4LXH16Ti1w6fkLgaF8GNdKQ6V5UjaxfzkmXfLSotPQTqGuu6iiLBz6gKYdcWJqnQgEXp",
  "key18": "3AWUZKPkWCFdHYVRqeR3PHnXJ4V2A6R8GxwUnEnL2FFyj6GVng5j3GX7uGxyFs8X4vLyUgSFmyuZpYu5NW6CG3d8",
  "key19": "2josE2LTMZZBUsRuDc71TKLyneL6AoMq5uvBWbToiCQYqPUcnijqtMsu2TPttoKFYTtCwLfN7CLGtt4Sa4DFWztr",
  "key20": "57krLsWoyYb2etr42f6uGwQG1kJbujDixmuYTL83p6Qdh2dxQvtKmQeZ65VCDyo5mgX6a5yqR7x1taU83pzhTCjV",
  "key21": "5iszfTV3CTUVfQQWSpi3rBMrC6gmVCiTLmq93aMZYmWEncB3tPPg3ogfvEXggaaoxMUUcDcWJwB6Yd6rHTvLHLut",
  "key22": "2VJW6BScANNqjDYZH4Q6oW3fA7yH22bJSaujCRg4naiDxKszc5jTaMDhrij914V67ebQVg1yDk7uHXgf8F763ewn",
  "key23": "2i5ZZVPtzYTyUi5utmuwdNm9NjpvKaFvGYMZMvHHzNxwx67A4Uxk984KUSNWrMD7FxhwQXHvxw3ZyPjhtGNaARdv",
  "key24": "3MS4mpN7j3hrgkBcQ5BmoUNFgmdZC93xRggYZjQz2S5vLQLLRxsZdBkHL5kUgz5nBY5J9kjuoXPdkUVmMJoNfLAw",
  "key25": "ceBknQB3MGaRsAccvLsBAVYVSckTvduNpnnoJuojUhwEj5BsqYmsZzPMUCjN9MuhhUxzPW4WbdDYjaqKLwHBPwz",
  "key26": "5qXEcKAiXJ156Vp2VqhYZcyuqCqYnPSkQVNXg3No6wymRpT14WE9ZaPmWNkqX6YpdS2MXyp63PrUQ8ndhZC7M94T",
  "key27": "w4ttGiJSJCLu6BLC2pisbpFN1DuB92mw9KDzRf1SZsdhjhjBmqc7g6FyAimSuj7mytKMNJgDr44Mu4GncT95oWF",
  "key28": "2255J4SDVF7UtFrZMPFJz1XVYhPdBLi8hNnYosyUEmdur269YVpdSvRJ2J7WSppzw8zLmsWwmjecf42zYQPdsADV",
  "key29": "hzWfrYFxCJaYiuyiu4B5wEqi4L37cVY6a5f3X8mWCGCBZ9VSamWJiH2r7Q5XWbH6kc6dCfnTxLsfkpk5A8MkUXi",
  "key30": "2gRrKhm49TxCfknNyDod3cqGsShivB4Ln5UjqC9HDwTrvVQwvgEnDM2jGJMdGjZ6PL5FSjnV2pMtuvMh93KmgK8R",
  "key31": "5hVire81H871STLKLutAssKoiJPdidg1XCyaVvXgtMcGb4oH29z9XWdq8f9PS4ryvQ9Mzv64c7r6Ubs9ywLHTFcg",
  "key32": "5x7cEPXEhhb1r4cX6HvhhdJMSjkrBQpaFJNURhAbizHaGiDh3fCe5C8rnPnZT1Pv1ZyR5ZB4DwrJbqtsxWHbjPCE",
  "key33": "Ts9RRuDEvbDdpiMQCGjNxVAVVrmXZvnKbrmXsCm2ND5YvQrfHmzRSpe3b6VpkmhfHqNXUMwzQQL7pMRRpPL4rdf",
  "key34": "42Zjx7VkYS1ea8PTwYwc9Ei9L8JP5qoAp3SZt1Sn2e2ztLbRjFuorwY6ZsdV39HBtYssnczkaxi7vDtLBT7G9pvG",
  "key35": "4heemy38jNnQZ1yiVHQkvVyN9dc5HT9wnAMTy6GPNDxT2Cjz3JvB73X8MmTVjnWnWw6nNH51RSLB8YfBRZ5WxkyT",
  "key36": "3gLXMC9tAHEPrm2gQnm4Xe6MsHh4eHBHWXbUAsYxxW5dD2oJTjoJ4GPCTCsdXUBtLJtTymr5iMXo3e1Cn8SXpJ76",
  "key37": "2ES6JAmjmBeVSAv8hf32sA16ifJYUioGPzH3bqKiQzKNbPcpPUwWRXcprkYn37bDxuQspFixJZqYn4NH61Kf97Df",
  "key38": "2a9ARhcNoEBoURiqqjLJgH63gLzGmLLLBFavTqEs6fNkBw4RyyvsfwB9Pxqi7oCSRq7JyKTM1X7nkguTNkykoDKC",
  "key39": "5RXpkj3zBgvnjMB4EsuxMiyiyRoxNawcEmeFrnyQcWDgvqiDbzUoAbJtr5GftMKumyGxSr3ckKiBzUgyUucYNgTr",
  "key40": "1wAan7TDgs1GwR2CP9AYyAkZu8dhJ6HePHJQ5p4pNhcjLsxEvyDmh9G4fVCTTu5gJwNVCVDq9tiZvGEcwWxjpLS",
  "key41": "2jjdGXf9o5hkEsLSkFCx49Wi1QzrfzzdD3x7H8eV7od3NQRvkCFVRyLuCRBjpPFTAojv78NPbPtwMytJ1jmK89rz",
  "key42": "4Vf5WxSyfPt9pkYHtZ8ZogFU14iZwNDonixkAhxq6WUdpKdoQejDBv9JRiN4MyqrCujJZV5t6j4xczwVuFdL32Cx",
  "key43": "625493AgWFUtUD9KTVxeXHfoi2QkJhXVpT8v2i3wrQzPZVpP54aJMVQCT6ZECBYLcZqhzhku6EBaRnV6EBNmeWQg",
  "key44": "4E6aHrAVXxVDkQsPVaDRBrci8nd3ygEsZoAdGzktvSUvH9Fr5VKvNyJXmuEaTWJqR48zZfQUkUcjCggwTc33BF7N",
  "key45": "UquxZL1Uz2DN5eonPyagMgr185XkbPGvUfMUQrc9CGoCa2n9JGUSGZHgmSS9pTVVa3DEVnxiXrWDjFfpuWnGs6N",
  "key46": "5xWH3vvBPoHMfjArnzVDpCA1AjNoTY4HYZCVU1vTftAKG5gbj5wXUaYo6bPCEUMXxjGJTvukXyLDkjfND5TeThf7"
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
