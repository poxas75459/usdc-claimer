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
    "2HQ3RPf2pZzgYSSh6mxajZJKqE1Cee3nNt46xTLymsY6Khf2nmKejQMotPKmXQCbugtvLittDmsGRHj4HjYK7cui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H2QW6czYhcJYzRyPgt2GHauSgbuGRvxwXSAdigWWaQ1uGo88mCS3p7Vg54px1NbEBijKxiE9Whc3DAwf4Eox3jX",
  "key1": "2L3uhnRy7JNH8erKXY2SfFmgqYrddfD3sD1FL9ZbuqWMh97LvE9mAX5XBU2eFMAz4KutvDy93uAR3hr22LKqduzW",
  "key2": "2xBfJcDoWaY9GD73SJxFj4tA3Xk5HEEbmwrAbx4Bfbs6SAF6urL57Z2sDycL464BpWCtsURJNNUp3A69TimXqLvf",
  "key3": "4WRMP2jfn9frpUT3SR8NtGsiUCczmLsbh92GVTiPdssZURoyaJdRFdF3bxvt28c1KRnB6d6HBybAuay9rPTRxevX",
  "key4": "5PMronzsWZ3j5DhjgoRoV6sqyi1s1bAteD9JG3oSnFqjyrcuM14NDtdP9UwaKmywyMxWpWagNASFDPw8ANVBJFav",
  "key5": "5X7ex4XLvxnPt2Xo1mvKLdhaHTRuEaEvrirve9VVTbEDDihr6U4HpLJju3xDC36zWPwrWaKx61To5xH6SC8kLjjE",
  "key6": "3ZWTp7HYjfdwmRHf4TT8EztXsEsAsQvpbHMJy2z2MmGzXeM7hhNPhU8LLRq2Z4jukbcyuafFbZPYQRPDh6j69k5d",
  "key7": "4D5F6Rbi3GfTEKxixHMtzdUYw5LGN9XnHb6qvLhndKGWFN3mWge1VxuNB2pS8XF3w1XL6BDeFCDqyXb6YmxNBGcG",
  "key8": "5HKz3cuLQsnYPggRFfYp6NVf1AaHapdjTMS79YCQV42HmrFd4U8TWe5QAAs1rQZmG94vq2tR8CzN5fLR1Gycz7q8",
  "key9": "33Pkj9YZ3JHif3AkX9BUejCUumvtJEJyEPDd5KVaeRjX3nWGruzVzTVaZ4bg5nXEqkMQiKxdDH8mbxsojCAPByoT",
  "key10": "57sX34NF6WH14jJPbPAHSuQykBJZ1hNAX5jz91fvrs3kqX9b5wT3vZwr71fCkytcjNqCuiNEmyQT7c3ekttpPadz",
  "key11": "3cz67SQsMNYagLX1jttsRC5BG3DMvraq9qcQRjXzwqEHKf6MpLDvUUYJ25cfAN2qZnLu6vbjUsbo279sx2wjbyiC",
  "key12": "4P3omFuNVx7ZCHuj5Bwd8sLeShTAc3tCHvFAGPhvUM9nt39ny95DN77jMTAJimz59CoErFuytsoMz9UTWYzQ3L4B",
  "key13": "53gn9RVyK8BbowQ3b3fJUte2r2ZgVpDeYDF8BAghnRt1QuMTAw99V7khuhzw5JfYuY9htu62VWaGrkBhsRWtUFer",
  "key14": "3JJYAeh2kqJtPz6BhZtettmW8SdJ2zHV7fUXW6fBSCV6Luy8KMo2V5mHYVzbaCAyQFjkFVXfgA3QaUY47SFZZuk7",
  "key15": "37RKWs5VgiAfdYpidXSoCpdCsJVzwymPEZvtEyLvY9hWxuNrJMy95V8CE57z8dY4CtbCaM7p2i3MAXbBE5BFar9u",
  "key16": "33hFQZXUMxWUE7Zu79hEiNnHf5Vp5v6ty64fJcpDFqMAfcQVdoUMz873bXTwsEczG3xbTohdoBVTxEJSjPCw6ExL",
  "key17": "3PaSJc8PSxpzJgdHjijSgduwkX25jpa5ctkNcgSEj4eb7mKT5mcEXT8GEhGHrasvDMLaGGJs53xsw5G6u65fPTwf",
  "key18": "5MttpvBwrHwTyN2FJVdvgeHEizrNL7zy5fM5jyK4V7jsDo2QtSgSsYfYDmnK7zppwvcJesAWHP1E2bipuiDogzrS",
  "key19": "5eF4eEdqe42Y1foxtFMWHjnaSKfBPxDdjRc4P37mwvGqAY7tF5pv4fPpDhCgktbyBFCnemMgfjSH6AA6hLavE7qn",
  "key20": "56HtNtxmekq5TAo7ziW8VnknErQhS3FgqS9gGUm6rzLR7DZXveWQ4QmofENqAsQWMKwm7Z1NPupPWBfCBovsMXBp",
  "key21": "34c6TFNeHnHUfvzjAe1AU3uHgvP3uAvgzRQm3gkBMN4XqUMRqY9NWzV9mG8eK1NzZ8tZHhTZmzQQo5aKe4V73hBB",
  "key22": "5XuA6uAQrkvBhHpdR29UNTVYYtH5m5rqpyRx4EUGnAXqf3UKWQ88FGN5b25Qm8PT9B8vqTfkbEZPdUMdPqEcktBE",
  "key23": "3kUb9McagCPYFkYe8qJ3xDALgA8NdnimZvQAHt3T3UhUjgudw8AEbEwuokixKUTKQSmUHLV3ESMb66cU3a47YFZK",
  "key24": "3rRg7DzxocZwMrznG8H6JT36uTHWJgW92LTSJtTgjbcpoaoCCgPaoPgAKvdbWMdhKCuZbdn9SXwPn2qYpaDvYsG7",
  "key25": "4WkM1ErJEPWWQ9HKY2VJPtMD54XZeTuesKxj5BE7YnJY75yv23vJwwqnQhmhAXyJPHosEHsCwtvhxKoz6Jbhitoi",
  "key26": "3bcH6Fm5dzSE2tDdF6wSrR9t6rNL1WHDHAboXAUa7fDSpNvpcAEhawFk6wqjdQDBFiJn128DsirRjfU3nQFWbvHY",
  "key27": "4UzCSe7Mf6nKsmFYM6u5ZnSiGF2ENhSrtaJjVFP9ARxVXRu8arw8uQCFSUFNAcCQGAuNBqycXVSwGnjLQeJtPQGB",
  "key28": "RpUjwaaFZ6BbsCTXmdB9G746UyrezFFm95mGsXtn6a27icwjLgGPQUdsLC5qUnXturM2cLsFELKwFBoFswiua99",
  "key29": "5qthWMLjA7pDArEapf5U65n2uvbCJMYZJKSWW7FGnL6ajW8bjjqS4tohtYXe8KHZTYW2CDrmXaoVrgfnfRt6ZPHu",
  "key30": "3kvvF1b7PH6EQbJnkqgEJyLHQ9DhukTtJRoJnf1aYqYdkQARz6k7SDL5CsGvi6CynciEEYgRxb8zXtVZTcsWrG3G",
  "key31": "65wmhAgGHdcfqzmdCz8o3VnvYFe24MiWzTXwp6zvaghgzvnqNt26pr4TAPcmq44ikpJ5Z2DDhVCjMnAYJfFai2HS",
  "key32": "HjQBKxNd21ykT5cMzc437V4N7Yjwv9p7fGev1xmvTkVEijT4KbcHjRxfedmLDmqGmCaCkFe6kE176TxCj9VSFKm",
  "key33": "4Gpj1cuj8f9Be5eFR3qRRdmzfj7Jzw1tjNH9U2gjLkjTzMxsmYHxQDp3aKFX2KaF85oyk5TB8rj2ppoc8KLWLixM",
  "key34": "21CDkVXoCpn1pea5H912dQXsYywxuUU9TnCce5DHGKTpoee5qLVrT3D92y9HtyFGFVhQCvKH4Bh6yYmuzhBBAamE",
  "key35": "4SXfCr3GQVWrekcRHweMaJifEEYycJKpyeHNEBgK97BVGRngPMbMRNKZKQ8d1JV27PAFu6VNM8RuYCyTdu96kE7g",
  "key36": "4fmPdUWssYmMV2y2MWSXZzjdEVmj4mXQwdDdxGVT5pDXSgz1RYCB5PfkLEbM7vLKewpHcUhLev8htdLExmiS7ayV",
  "key37": "3iBCjLSbpbcTU9a2hPCNyh9zRJ68gioV4kvPr2QTuBH2ZWCompRUWmWc8twR3nWuovquEH19dge5hU7svPWe1nQN",
  "key38": "3Uk8gJ3LCSU9ZLufwcrsUhxJ4RQJpWQSMvaTN5j5tWpmRE2xikJFkGt1ksbNqbEuL1N3y3KudhsJDCXCf2hANJgX",
  "key39": "4cGkpXTXibnkbPX4gD7PS5n8E6cX3x4QiCqiLRjL8aicenXaT1fcNCsxmZU3xkuQgfB3o5B8q77DfuKxmn9TNh8P",
  "key40": "51UthJiNuEMogTQWyuq9fLcQ1aVLGGTkd4JYvuTyb9bdmitkNn3xJHuQanVCAuG4mgb8iXjAjyDDEcqcexx4BHYE",
  "key41": "ZEyKqpGLXF3A6HPiMygywnJWeWTs7UY3jv5Ret4ny4uJYyR1oFrktbxEfzVLjGhBHq54xENAVySnUPdP7B8qwkx",
  "key42": "4yFmzf7urypPDtYsTvbeTL6wbJMcjhn6KjvK9MCNwhtkD8ALufeyeZhkQQiaUz6BXgEb2cj2DUFBph7y4hM98pE",
  "key43": "3Ry94a2eUJEqt6MbBTVXS2AT5MDGkxPpqcGv1XCAP2iZrAza7skHfofMcbxCsKX5WCrG5WwmUrBARyp1fepk3W1J",
  "key44": "5khWi4w3oYBVu5yucvP6SA86ejtcfjSgjBa8Cfx3yKDXJ8FrxHaczupzWiwYSe2nY6KH9hNWSJx2g4bkr2K89tXk",
  "key45": "1X9ixPpCyWRsZRSdQNmGj3RZgMkVL1w7mLwAcXBme9UTKv6LP9VFp41uY45L5uJKidBuEQoycAETFGfpCzw76iw",
  "key46": "5ts9rdetxG6UH49Ufz1QpRPCZdwM1a9o8JAr5HBHrpzueRFGpiK5JSGpESm2SR9FZMyA8kM5j3vYY1ac2g46JXum",
  "key47": "ghifNtiDQGWz7LFkQw5CuPVBKviZovuUXRZ7uMn6bA48unniC5M1iwKuUzJtdMq3Y2K8QFzBACqERaH8cMEvVNB",
  "key48": "5pC4qzGknVvFrYD8PUFRyMY5PtoaBs2ZGcwJiMQybdKwiBQ7egdPmNbe7tdCrHuZw3mBLW3UFyqyvRL5wS6AbZyN",
  "key49": "62VBKfQLvjfQPFLfGZUBFpdSK9Bd5UnckUjZvvFKpwfaDumWCazZ4yPdEHQZ6euPcWCXLvZdzPnexyxisbn2W6mN"
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
