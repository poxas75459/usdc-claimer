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
    "4PBmA2Jd8MBtofC9zKaHkLuGPqzLJuQhucsYbjanMw8DVQFaAFQSYCB1Cvx1p3qMcE2GJC6Uo57BaQ6dHowbcSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HbaRaWwjvef1fRd81Eh1dja9H7R4Bcfc9jfMrVoBKDBL25M5YGyPJno3N8HEsnWDR2XRtbTQWaJ5HaN4TDVcccW",
  "key1": "2LcjmWL4DA7NdoCgcVg7MEYxwoxnhz9JWXJ6f7TBxtpx8sNFz8qaZ57ADEmg9ZPoJdctYqn9o1QSt122xJPKq78b",
  "key2": "5hhCBwiqzH9Ztbr36zfAUGgDyZKAhtViQzR59g8ABktjrVuFjXrtyivXXRFS5jWBcZ9GiA3S2FttVn7tTHPNTyj6",
  "key3": "TiLLzUv87rUJe2pHmGCwJBUjpHTf5dCcKgJvNmS1gMtZBfnXSZEnnN3mRaNYfbu57vuogeAmZPMos167EBrChRg",
  "key4": "2LZQsEGbdivRJCZj4MCv4QUTjPQMXgDWGvCfX1TYiBA9oKZMF9qSYTEMzkaS7rpiJRk3UchY8E1aqK67RLoiwwxE",
  "key5": "3fgo18ugYU4tjkmMvG9echjX2e7cwepzZLMZ3VXBZekqky9bHdbSM78bbJ6h9dCz3iMS2izGGpHTxFZSugPkQved",
  "key6": "vL6wCpzfrLfsY6sDFkZgU4FK5oXKkH8kXT1Ki4PnpdAjcBhpV8sDXczHNB7Hkp8ucCx2toJpm3jPkJ5yFBpv2Q2",
  "key7": "Sy7uubgU8x744KGhQ7oHUtYgH29MqH8YgTGBDt4WHauTEvNtk1bRAUBGtZZA4XZuo1vXrUo5526WZV7qn63Jc14",
  "key8": "QhNHU66KQebGgTwbujgF6P6f4hB1NXcPYU9o8rbUkj4L4q6iaiGjswie297f8bd6eXq3TM3Ytq6K5QvSAb3cXkL",
  "key9": "3hgySPWC2mv8Xvbh5i65X25StMNFqHy3xBuu7Fz4R1QYtwg8HY5EsmVNawByDEa7wuPMfe4xKtccm4v3dyP2NLun",
  "key10": "KMFx4cxEKAZoSTityWpHWeH5LZc2DdJZZQm8r3YNTRsJceXC6zQwsNJsP6zMKdyUNurwsnbrk5gvjrpNQgMhqz1",
  "key11": "21ixwcpVLb4ZssKSZEo6GDwAfS8wbkKjKNqs1AxLpXv5q43t3CPYHyqw8V4qhUU8yp5xP7SXDbjHXzNgos7NWsey",
  "key12": "5ARSE4JV6j6nBJrAw2WWj7qUbmSiCCXfevT7LcwrC9FZWdwt74Xm9L814pT5sPdL6U5bXcdipCbkzAniA7GvxByA",
  "key13": "4PUBNjunbfvePvTMcoTwyGkRKZD7EvMNKnLEFBBs9fUq9utkwjyCtn8Y24cHVxoJW6YkzWpcPPNWksTaoZNRCjdg",
  "key14": "2fvcHMS98Nq46YKzdxddhN4aDeypR6CiQxkZ5i8ey9bRBMkKFqhAHxziCZLL4aYxPjKCwxY5BK4JzfRC2CSTrbWF",
  "key15": "3UEQz95uwXWPbbi8NXydtqKjGSEPpfvq8r8k4VNcQc7pxt38Axk5Thdjtw8cWjsZ4iajxP7AdryngYGP6q8WGH5k",
  "key16": "5JsStrukK23x8pWqkZ52czQbYnodc5ofWzXBP6mntAqPCaTGZLjMNpnnydwXxCB5Mzmgt2Cd6mDE6hDkE8y6mPm6",
  "key17": "z9q1smh4GydruKa8DKZFK3euBXnSBF2ceFakL4eM7nGzSc6F7gMTswPzDVAGZp5VQa4N5e4WiZD5F9foGemYJ71",
  "key18": "7JzKoJnBdLwhfRQypusoCmSm7aNTivhvR6Vk3SNxQsgKdGnFqoZiWCEvuY6nioQoptFcvWDALLACBMEaAEMTX6t",
  "key19": "4vGdpKSwqpqGatZFiTCa9odCa8rynoUKzZ1LRa81vg3o79SDKJ6TLs39uXFNL2HAX5V9Ygrwky8zbbUpW6AjNnog",
  "key20": "45N52QGcsxeJgfmMmr84uogRGrFCV5uux9dd7Fv87Sge8jAarE255JxKUDcMFbKtTtruZpPrnb6BTshCt35zLb2G",
  "key21": "fNLxn2ExjiTMrWL3sSD4ALoYFKiG8UE74Y2U7mgrtGPFmG57vkPYVrNZTouvpHQgsoDmtSWdjvXKqntbSJ9msVv",
  "key22": "5X6fN2VgGhGu7hiScFAUAup2fvdKuwK1vRfjnVw7ru956VbkQLAyBg9vqLWsoApmkfmxbCNsifNhR2SGwp9CvD7M",
  "key23": "5KP5KsAAVpPSh68hbvRRGrZEJyxv49KvCbU5gGr3uAvWjmYdSMaPrrocVsjaF4wzvx1QQXWccjmwbYhMRe1t9p1R",
  "key24": "54hR2Q5VvH8cUPjXbvA7HLwQp9H3nSTF9TjBeU3WQgkmfR7FUR2YeSoxWZyTVVSz9xYRk6abb4npABzMcVVscmeN",
  "key25": "5JpVNZuUKJipDSAHExY5ovGCa4wSGHRhqDo5zt1L1ikPwjBZEAbFXHDkFrzCREzS67VnQiX3pYkB1UsUgt79KbPD",
  "key26": "63bDiM2NyqMZz55iAKsnH7xgkbqThbgbN8MHmrowR3JY2QugwbBD9QhWPomkNLowVuvznXizAUCt8HQLPPQwcQJp",
  "key27": "24r2b6mksJ194JvkffP8ubdq3j9cDoVGqBx7zt1h22owt2pR3M4VbDPYoXs6LTEvktutWjA9beGMriwS4t4NCr1a",
  "key28": "2SZpN2HjVa3LYZeganF7dSviWhEcRaEx1juuEdKYM2cd1m8kuhHpvxEzU6caDWp7kAkgNu3y8M6G5zHcsAPBsv6S",
  "key29": "2z9XCzisfRa6Q9pzGLo7ShpAsKUvFEp5VseKY8cgBK7DMkARcZ9N3ui2j15gbT7ATEBxbvdF8SZz8GvRbouhuq4C",
  "key30": "CSNpiW9eXVb9cmyAwSJvWVZJxCL579cELxVwej3L4toD6hmqEsEvTMkZTL4uh4WfMqcSLT37fcsWDtfV2Q22o36",
  "key31": "3vbvAormDHpzPFmtaqE9ZvNdqCoo1JxkBHsR9SBE8AkNWGNy9b7ax4Qd1gaAHCkrdwoZQe47HKpGrP555QXdQ36D",
  "key32": "26F14rj5hgrpNQ3wnvWezkT8JaELchF56VH1KKftGpFp96JX5w5FmYwDfPHA56G4VY8rpH9TAVgKMoMCdrTp2LQt",
  "key33": "5fAmCynSzagSKpcm66mEDeP4tiWnEqCW9o7gCUA2569xr7kaGvB6Gn2ziDqtoLncFnj3wUfjAdkLT3y2RLjNt6BC",
  "key34": "wxXaDgXCVuXKdnPfbpRA3YJvGiPdrFiKh8XiF9enVFemCqRDY8coX2T4a9fkgEoJNPig8FwvMSgyZhpUL6rh5nD",
  "key35": "hDHXNciWsMp4HPyTPzL2c4wBqzTFuUzH5w5LgXxpXqhzXfotQNo1hpexKppP5vRtJ3KCn2kw7s6SUGaknx2qhNd",
  "key36": "5iJ4UAf7PmaPJ4yLV96L8nnimnxKFzsr5CkkeFwxYBrvyoBstKUewkdFYSwT6MDHoQ69yeVHrWnHjQkRetKDztcq",
  "key37": "5JkRQn8q5b6wMhR3dEcciBBKabXBmy9jKFa3L95bBEZmAySt66LQS3yrtHzbG45FLYPQWBsaa4Qnq4pKB2bCFPu6",
  "key38": "2zFBmGhWuStiWXg8acCP5zdrF2GLsVaFNLfvPJcohLoCETg5qcX1s5LecyKNd9FgmceafQazWw5JURXBTu6JctMs",
  "key39": "47FM9tR88njtjxECht3mLD2CBENRUx7PXud5zJEJY9ss2kceHhnHK6o4HCc7YoXY7jjjHJ67aUyFLNvFEqqJy8dn",
  "key40": "4rVqFacZgtEAS6xnvRZM3HPqPkBcmQzfnguTtZnHYjMk72MGeZeauXNxbhdjFYk3kKtjFG5oizUKeARBsT5iPeu5",
  "key41": "4RzZ5fTfkmbwxThTL2WzcxMzYgFqNTbyH7UDEbozfVmEN2uqc2y9X5Y5BBprDuynvha3sVqSizfURr4v7iwD61MS",
  "key42": "3U9krfeKp4boJ6LYzwdQXkr16hYasaaJD2HjbxcgRrNJj6wCrtcSLpsJEMC2SFqMDYzVf8QGf3w5jwjTrMSzdMGD",
  "key43": "2kFs3GZeMf9VkTYdST8ioeGxQGU8zDi5Jcq7P9BSZhFb245dW88n2g2AMNFoqvCVcm5u9JwP6oMeuZEQ9gwEPzFY",
  "key44": "rb2ckFiwua3zfdoPWBL3AkuwhVphDmJyXLFZ9jhr9fZJpRhXKzK7JF4QHHKNmQZTJG9EQPPZkUwNCvDrwbC2DLK",
  "key45": "5bh1jXdWV5c6PF6asCpodGVmVWQGXKh7cgqdgi37bRWMJ5PJiH2Vu73PLVefpKDnJ9DecrPzDfT4mnkfn4VAmejq"
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
