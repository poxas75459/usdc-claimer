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
    "2dsMuSzSdRvoQ89aeZTQSWFAg1852RdB9SQVY5A6MmDBcwyQHpJBSt1VUSeDAr4xLrSq898BmvoFD21tAmn9m5N4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "358tbBEYUAMfBgSf6yccU42H8mZ53UbXGsJWtpN9vBvgkMWDuCeRPPkKqHXCxpavpPFZyg3p5V3vkCDfqvtKQySj",
  "key1": "5BraKt6EyZmrBRmZXbi1Gmp3aXBape872r7XCu2XfSVJCTLn4MJBvw1GiFRypKDRnFBNEAiyzTRYM6b3DQcgbGSQ",
  "key2": "29MU6RDR4HWGWoLWuoeLVwZgmBkFFdfVkJ8iUo9VWUYZzvuW4GhCvZqPiprDPwf57u5qUVcw6K9EnXiLtFjvDpY8",
  "key3": "4qm4umihJFUHmDpJ1iPQArZTH7FGLxNiLUsS4g8xjgkuDZo2VZM3xFHmnTFi7bAqAU7cgtW4M4m4cxH9YUQENKQY",
  "key4": "593eVn85ijtV2tQJbcZvPs1MGi5o8PNYwRSjXHM6Dte5aSiXPArgqQoGN1KBjd8utox94YgtC4nvdy4s6Rqr9esC",
  "key5": "2JkskA15MLrAdFCZujUG3yc1RmLb8AKRvZZNKxLPeb5YMZAAnH5Kd2sRtjtbaaqaSo4T93EtuoJcNdhA7KocJrgz",
  "key6": "4AurijoVVxok3Jgm1NvKUqBU7AXN1Njfec6BWy4VbWb69mQ6fKkujKTpBC1W6ti637tYH21nZroLhGgGyi99G6S1",
  "key7": "RwrSavpSzZDkPQvEwmSApQZXqi1f4LNvVPfk2SsUE4kDh1BG9tpW2hGNJTHArbTEcjocmd3zLnzrQpkXchnTMqi",
  "key8": "iy4TKcK15mQoAGZhKbTi6CfmhQsNm48Bxaj36oVFM6XaZ6pg5iZMVYprkh92Qx195afJoRRYWSUg76yRCamTcBp",
  "key9": "5iTQSLRCiw9HRF3Sw1HxYqMQmW1bC8ADDU5iZ3nSC8j49D7sMWumq9GugRFQfwQaeZmUx87CqG1oMkohjtxthaXN",
  "key10": "34JdecKzPBhRw68vke9eQG5g4yT2jftBxpcw294jBFKg9k4pz87JJsJF7pHzBaT1ckwaSh8DzA5ddWTveDVhf9uB",
  "key11": "3WFMQJn8WkXhqfo1mHSnUK8nR8kghGfyxxNnTqTXzjaUaDSQKHNf9V2E5WL9rH8RKwZyDd9gXJdh4WHKnq2tFDiq",
  "key12": "WjjTHdGUowWmCZfZTZQAhpDJv3KRfLANfcwjsf5dBq7irAnybU6TigxuxX67vsDwhXLLjrJ1ML9Uckbf7SA8QaM",
  "key13": "ckLgSYqwabUjAzJjApzkkB3j82jxG74zFwh9xKW61jV9yujhnnC8XCHGY3AJFvwcCcjdoJhKxdirUqRLqrRDPJr",
  "key14": "4qtXbwLdmGzboJ7nEeEwHtmFBmNirzREWWMGeyxM8XxRSR47g7dNHxhFyyQzxV1mN9pc7fQxG2XmuDsYuUNygXVo",
  "key15": "3xA8eL6j8s3Lmnk4Pi3vpCipnkj4CTDjiEZC1nw4LBRJETh5YJ3QnLxL5eg7HDdeem75Q4gxeTX1x7ERTmR1BmS7",
  "key16": "2DyYwrTgseSrgMDmkaCbYfiUQwicESjSdgtx1mkFMM6xkST2Rx6wQRMsJBYpbHRSjewApqweTZgwq3hLNwcBBXrF",
  "key17": "3qix7588BgX7JsrJmqjCVjy8LyGYKzCa3eVxLXfnoYsfu1C8jkv9tg4N3K4UrCaVtsgmGi3U8CPU6dLAKSY7F2v1",
  "key18": "2uCXPZGLTQUYFyLcNjyzSUdgSPTtrzNvhDiQ8FWhSgWGjzKvsK5VVfDM2Hf6vhLhxJzHYFsni4R7ktKdtnDPqTSV",
  "key19": "pgaT7cJ4rpoZFy5J7mK13rXPbhuodiSuQHTRpmffATxWLPtajWB7VaXK2vNzhwwLdLaLzaA5vSHN2z94RwJR6Ph",
  "key20": "4M2YFDTDZh48NahnFdSeAGrc3qfsY3B2FoKBZXt62H8G9M6AYUPjzcg3c22frzRPcaGgCC2JkCrKkiaFNLSSg3Tw",
  "key21": "4og4ddJ85Qg5QzvPT6CA6rwm5Tnsk6CfkqjWeMdCM38aNjY4yY33oCjyLXEfwe6u42UMULTxJcsMbuqzBHdEHvuN",
  "key22": "2bF6TD3WB39hnCf2KjbMVLBLM4D4aGgTL24nmfHoYLartEggfGHZFhEbsvRKUJ1FdYLSF2TBwwLRDZQ4QgS4ezC8",
  "key23": "3QK6jNsUymJquh6ibT6h4uEFxqWQazdfZ2ykaKVfEZMLH1DY5VPbA7k3S1ZKPc2XSdamXBWM43zsnzocCJSGcwwy",
  "key24": "EMBoXijeucZjNDbtczRVVJx3mZF9aPELYmVAY6J31EHK9scF7HpzURBhpcX5EASKZS6hdV3CQKVsd3koY5CW7UR",
  "key25": "63DaGsP7ucuyhmqvrNcX6hdrEKrZ2wgLwD1M62VQetnFVDX6FwWxdn585SCR5SLHLgTXbHxK5gtwK6zYiQGUTVox",
  "key26": "2Apt1Cjxj4wcB86EoNMxt8pyQyx2eUBQg5s8Xko44Jb3XikRjpPdi21XQRfG8mszswnJs5THbtuf8AdXr31SAmUT",
  "key27": "4iUSzig9VZundai3N49GDjt3VA1izaVyb6CepZYkLZfkLoEC5VXAKYJ58a3KeJkrvHrvutAhnMsYxiANT1mDVycM",
  "key28": "4xNoDHGh7xSTmwUYPq5JcZGr8mZ7uEugejpSKJ2ZcaFPVdne66e3LKQK8LcHNKHYqgMnTczDn8i1JSK8VAMiz6VV",
  "key29": "5TQD48BbUMpFbwgYBEF2PvWSaYmeTthnst6iwKfN1jEfyJ1D53dVtdgm8wXdboqwYJcf4LPFtY1E2ifJ2Db8XGTZ",
  "key30": "2z2be6hZdDj4hMCNM3dULo5A6tNFos2YpxX9jNTkAH6cDrkjs8LD2tHgk8RdUMZ8ZxL3BzVHmQHqX1YYLmz75roh",
  "key31": "2SkVqZG9C4s42LRz9yfxYgrKumrwnwUwsgPavMRVnJ5tJbPq315YmVUBqjKCAeHUZUftLTBqX4de5iJQUuJfTJhm",
  "key32": "4gGb5QiUJwiXBTGJ7Q2UiSWquW9XNneahiKqm6bEH1HPX4YDbM9ku85WeMptEbmUoYJYekFFRvvyfQoxYtBY7LcJ",
  "key33": "2AzJzgusjoYaW5tU9F2v7ohvg2d6G3JhHiAv1gudwvLvxPcgkpk6UegvQ5uymLdr99QvWzNb59wduQQAw7ZY8q84",
  "key34": "YWBTPA4wJ2QfC6nPuPyGU8bE7qBqT7kJeaqZELUkRUvGA5PFyYGANJHCRkCXQKAqty21D6mzPUKqSb5jmecEueT",
  "key35": "3F9U4VVgSzb5BxnyYdgQMJjkduc3XGNvG8mTy3mLG6KEvnwnTcVQnEWG3CTjvDiBEUaJrnaHjemvDMAeprdvTSjw",
  "key36": "4mtQFGXkhjDvdkxkajBpJX7nvkgmhBJh4Q2CzdoWJE3jeufuQbEqSGqZbsF1XKZK9iYuWvYa6aRGW8qigyuFJkdv",
  "key37": "62yJ6S2AEEAXubu6sceDU44eBYZaTvv6at35RAXHGKQ7K6G5MmG4FVQEJm94zfp9vENqxEADbCpXKu1u97r1a8xY",
  "key38": "21ecsgH6pHstyLCNVw5WM15iSXVqCkfAQK31yRW6dfjotfeQwzjauYb73qeX55ChyFtyaaLWYq24c6h12eYxvFuQ",
  "key39": "3oJVyvqUUMXoeV8BDTkbZHwYdSHaB23qKVJpy81f9DUGLDe3ADYxZygRS6mNzLB1QCo1JeG9kBt2hk5puaZ4qjRK",
  "key40": "4vrwPP9tjGDoenZZrdaYdrNYHcEGB2EXgrA5RjeFrK5rooWkotQRQ51s2J2GkbFcTiNYhCtxqhe8KkDA9hMZFTqB",
  "key41": "3ebGmEBwnes4Un1CnD8ARFjHZce6h3XmNskWDN7zxr8CHNiq1zdYVctpMXPHm7twpqYHwjbeKeuBr3J9rxp9wRna",
  "key42": "FZKW5ZZJDu5kftyHUqgjcLemdAES9jzepRAUmNwAADMNXa5KNoYdDJSwdC7PFKL2Pgzx4QzpR1KPwn2ixgrftYp",
  "key43": "3yVAjrn2UhUvi4zJdkY4LAzex3k9dhpTyK8casM1fKymWG2mRM76Sj85fbEcw9hV3NG63ewjm1v5xgUjaedQ3C18",
  "key44": "4KR1GfjxGgFoGN5CnbPawFZapJSvDgSt7uvyandNaFtm3xLCTWPWYs3EyGx3DiGxiFqKD3RsALne9H9HVJUFoB98"
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
