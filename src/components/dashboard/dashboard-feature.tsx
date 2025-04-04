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
    "GrE62CRSmTRk9U8VYYDKxZ6tMwReNz4SLX8Hj9YDUzgwhhyv1pZ4Kv53apTK3zcDUqi7E3bFEVuWWn7xdB9Hr9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qfpAMQuhBrbx5iPoHVyADk72XmWAtY9ETohXFChZsLbh6Uv4TVjbnGXF35dksHvDrVKgsL7vuhU9rhNsQL1BAF",
  "key1": "5SAWpqywcHnEfxrnwD4mu44GDeFVwmsuHsjctTNNrQjuMPqcAtmZ9eq1djmyJJ4hxMk1N4YAYXezBd7c3Fsp3nyD",
  "key2": "55B1V13jphc41rXUzWje9L2in2myxh2JXt6NPTiDoJ6tPHbmwGUVBSU4et7MymaJxn5Kntfk2o24G7mcQ9HAxwSX",
  "key3": "2fPeED4jzsfT79FccMfdA1RHnnLAvvT3VWUkmKuuQhPkbjMopedxCXDj6te18cR74fSmYt5CNQMEaTCCDZEirNZs",
  "key4": "2YmggYojkSmE6Ls915LiMDkrZPtdyyBAem6AVSh1aaknBHoorB3itUCMNVi2AdpAaLUB6FGf4KZn1gnUvoqv54Pp",
  "key5": "5kWk61yPenbVTuZzXGiyPyw1Eo4JViNdRfSWDzhChrhXDynGN2y5Pu3ZrMMLzZEweHWiXSSspoC7AxW5EVi3sgoC",
  "key6": "2iQhsw6oqsZq2b6NsD2a5Mw2Ur3QXUbiSgJabokX48iebg942gFmApAu265FJGu36nQn6UtCtatkL2evgVPRtV7A",
  "key7": "2Sb7X2Sh8mg6zMmYtj1qLPH4ZGR7L8Ebxk4JYwkVSFZwETXqcfe1zodr3jGXGeKo9FAiewRb4WVhKyeNaYNahBNs",
  "key8": "626gQ6qSz8YrdoGLshpVfF7AsDE1HN2Vf31Vp8YiQ2qJKkvnyatAWbwASmaaTYGr4C4AvDbukehTDzNBJWoayqiy",
  "key9": "LncFG32rmxLaDRrk5KcefBNx1vQNr8M1mZb1yHRipbWo8qoHnXaakGyELZ6TszPUH2PjhrAMt11aXjqmind3zA4",
  "key10": "4TZAyWMzv5qFA8wV8nn6AR1jCL3FHNLUXun8aYj66XsoZzKDMxQSQb1ABjaqL143oY3f4fVpDhxkUSWLSpnWafpV",
  "key11": "4cNCJjNf7J76YAEQYpNx4sPyFYBtqzJnYcUpUwjthEseChBUS1E4eX6oo6BVjij2icG4kdBTCbSzMYEVoiZir88w",
  "key12": "5AqSBztKx6xcJQPh5GeKz6qUeiJVhmmNCmQVUMfK88ec93XoHCWbj8U9FZtK3kGfNCfMCshYqiu3Mt6yEK3QiW3W",
  "key13": "57rPo5fHvNgkocc28zj5KFQMomDnLc2THeZ4eWfxXvC7poEgDZzTe7CEp7wiyjtbbCq3CuUv3XMFxPeybENC6YXT",
  "key14": "Ak5LiViaGu5cb8GQjARHG9bDb9yhUieWNgkuZ82fUn6T9Sn291Zh23KsHrUmUejELuEaYs2UmkRoWCZVSNyiTLX",
  "key15": "3Wgdg6ZsTBbywQTFmb6kTce9XMQkYcywQxvCrK6aJ6y5jvjPpdciVjFnqewhaAH7u1Pr2UAy86LdNSY84hEkSqST",
  "key16": "2egamXwoUEpFpGLqfU4auvSVyn6juuBvyXeUyFzmXpo4ywYByuCE9bBPg25bq3gqPwhEuDKyMHJJxegEmLdPhXt6",
  "key17": "4B2cfof6oMDGeRy1Q5WcVvTwffPCyKMkvxicc6rWjcCTLucgJFNGb8Dz2CKHLvHu7u3ACXFaubTwWQpEBb7j5yyy",
  "key18": "2CpcWqvrX84Xkms4Dv8zGUXuJvHrzHMWzNdRazgZ4ZNC2PxdhnhUp47YZgoo29T7BsDpYsjZQdaKys4ZaAfech4C",
  "key19": "381QXxkmeQiT2Sq7YStduF7AmjfBa12GMJqN5KEGJZCXPvLBLCNdbPa213cByLfcjQoa2VxpQbDYRziAQhHgK4jN",
  "key20": "4bM1HccV2q1sPrhePDNiPn9e9QD8zR4ebJhVyLzGwdLqo7VE1NcRqByQi5soSufYKiNJpdhu3SFGAt8fomnAHCLx",
  "key21": "Fw4GynzXJ4hNtkjp2dFbCSuyPDkyVsxHYkfZYMaNBDDf8NaQFWFwmGTUDnKCRi5ZjjpmtHZyJDgE3odP3aQKSia",
  "key22": "3euJ33fKueoXh77SVWBmaHpHeULryjVEvgQ9BdR9wENe2C7CSq55rjxs4QZv3WU5FJY9cEP7AxCVoEQyv6d4cV7q",
  "key23": "4KGzrEPfqzZ8BEPwQaR4z4tqhDHFHTRktKoJmdbjX2YLLU1P2vngY4FEQqqU4MoiUD3peFMGtJvwMUZG3489r7NW",
  "key24": "5BBd9z7Ka9fsfvkdPxVMptj272EeypzvFRFFPJ3AkhwQy4E8rxZRHp7w79dMgJeTiosFgYJBqRmgocx7Vjpy8kc1",
  "key25": "5KSo7o2X5HGQqKakeQhd6Vu88CesQ6if2RNofcTeuEbVc7KsZcnnqHxUSipN2qm5sdsiDAaUd6LXW6Ru7mb18NSE",
  "key26": "4Gmf9WJps3mEgCqxyGYEyF4gqPs1vhXaieCpwnivE1ZJDdcFfA15DiHoSGUnV4dZKagjeRNhnW8YkD9XXceYHf38",
  "key27": "3QdvQwUkc7fyBCK3yUTfrNtNxVC8PYuGMXjs3pbgVhiSaPbCnmzKSLjVs21jn8jsK9XuCMELC7hH5sSzQLbx4m1M",
  "key28": "4G1WXF29UA6eVGNo9powsmDdWXjzNBLyVTYbqUy6yo7qb9DFvudY8AHrPbHGLrBCb8ej9yNd9B1rNy9Fznds9J9t",
  "key29": "4CJwY7mmmC2knpwfTHyAUg4t9AsQo1z53RkeMDU9MbxULBunguMCmGRu5N4HNyhr4Htv4ghrSnVfENNtQDnmW3sD",
  "key30": "5v5DrJecivsaq1D6UjEL5q8bkr7XjeEN6Dfc2XG3hwQLB23EdcABSd4UkA8CBgfEWKF1kkbgtNG8HqNVeYwHgcyG",
  "key31": "55kWWAbWEHxJEpyPDjXg1sgVxcusk4C39wAXpCiSsnrvnzDdeMXeNhz88qVGT5rWT2PifWiWxrqRUDUYKP7n11et",
  "key32": "vhWdBmP5ukALhaBfHSrQqWhmncnfxHgdEWi7GZNZesmi1EfobAQcudzegvwRaBh5E4C3rvZbdSapLRyAiD2eAi8",
  "key33": "GDMPeGvGBkEPnQK1T7ZnMdqvMgHrA3pZ6ajKdN2ydziSbtKTanVZ6EcoSoQvcZAuNTS5sQduP5tWMrL4bEynAEp",
  "key34": "52cVZ43KmWZA9zigRgDH9ygype8q82qQnNRWQcUBsFhTbkFiFCopX6c7HzFL4EHCWqZYHCmsaVk9VYDUCt33LGsb",
  "key35": "3fYJH3xhu1TX35CFPPQYBh3hVac8UmV38K7uvra3gson2R995Lo7xd2DgcLrGRSR4LLxaR18AR2gNeDMpzRVdgdM",
  "key36": "wVw7qpEbdDe1CvDo2E8vAq67AjGoAFzwHPGLSmn866MBKWaT5deqJ85wrpuMTLDjY3JaW26wcqcqiBm8zFdbWXP",
  "key37": "3E2MuYXPuMM6xM3qMNjY1yzfjTNjcEyRNc4BXN1AaWECyikgkEprwFbSD94kfwvJr5SSgJyT2KHfJAxdrAj5UYvf",
  "key38": "2tz687pmh2STnhm6SSVsQHWkKJ2HvmLMA8xoxYWMU5P7GDnvpREWdP8GHRzW4Go21RwU54nQFrEpb7LQuHoCsMGR"
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
