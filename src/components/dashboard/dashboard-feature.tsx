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
    "5SJCXqmqTuXeZHA8cxEy8hrC7baMM4z3282WHcJmkY5nJtbFKYB8rgRA5z7mFMUnuHUH9VpAoRuCnCvzaFShBaAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4msQAWWJ5FePG7DjDbFATr5oCtBPj86HaTSTXdQ2ZywQ4SRDZn1bicvq5xw4sjsxsmS6aojMpdTjncecuJACNCvF",
  "key1": "4dBDCid3nq8KR6ryqzxoBggH36KGCLEzrJkaD7yW4RmtLXqVRQKmgKhkbiAr6TdiQxiQeqhenqhkz1EzY5X9NG5L",
  "key2": "FyM5b7pVBU9is7zSkwoLXxQ3m9obqkjta5UGccoX27UJyXjLXH9q7SVWmuwHSrUD2tiBV46uZdBScvHgKcynZqD",
  "key3": "LyQQ32r2x72RCbzacmgWUggdZdmLcg9tCYJ1wCA5aLvFfL8Gfyf9Ci6vb9LpWjeJvQJqM7eY237RfS1oT1XRwRZ",
  "key4": "2b3fEKHbQzcEvNrTXFVXPhnPVi9koa7CP1BR5YHDMmNCi76g8dVjfBfzMtuiCKuPHsSR1NCCp4rULDZMTGW65cxE",
  "key5": "VZEbKJuwsXJYj1aTjoR5qUiCVscCbKECuhvqqcYF5p2kHd9jc4qGpmA9D7sY3L1bYL3uezQgHTXpDgCHYudTvQ9",
  "key6": "4HPA4SKLDAmcPs9seZebT97ChSH2nKLkHQsy2LTvyqapPx5WPGy6CeQLzgZWqHWdQe8mcWyz3QGkAAaqawn5vtep",
  "key7": "3twK2ikg4iJbbeCjnPTayZnctF1Kfdop3syJrcKvhzmgtK3581hh6AGtuqvxLWdz3zHMr2agzLu7uQAWAFGN8kQq",
  "key8": "2Vp9QYxCkW3DZtRFBkdyAq46ZzKsPSvNDjyDYUdiMQn1ynDHHTCbLxAsaGHbhwcdKNYmFaYXBhdogB9kq5pGvU7x",
  "key9": "3GS8nguTVDB1qLncoLREJiX3W9JftkQVqVMPncVd88qQ1evrukntSAgPX2Ji3iJU9YMSWvMe5nuiAgq6fgsFBJ1M",
  "key10": "HiH7csnrszsvwkUCDbCw5g78TYTpbsnsPxYFNBkFSvfzvbUXUH2nmzjN4JY2VgCmaq5qx8kSJrkrosxxFFKRQsD",
  "key11": "2NAk7sEQUYmtGZkceuppccHPvZGwbK9SR7hvBkbZiZXFDncPXKKi4tARPEJywDNEAwnVC5DkTMX6eerqTrHZPE1X",
  "key12": "44oofNbhx9BUabD6EbMeBsQXQLf7RTXDePfFXPn7Eunfsdaug94fZJTyffLsgoURd7yHTGE7jUKDTDGsTBeFwTuq",
  "key13": "5S6ZviJLNEWUZs2kqUuUUKUjzK5gaf4TNasFaZcg3jBcEjZmtTKgQBqP8bZn2qdt3yXdit4C2h9bFGJxpZ9KrGAG",
  "key14": "5pU5QexFVsXd1fMevYRtr5yTk9nMszjQVNZiGwBhQieDoV7VzzWquDpbMoojohPAjxsZJeEnGNjvMTADoYQnLyHi",
  "key15": "2VXES23wqPdZb6ePijMDamJioVxXPWWfCfEm87vwp4WWK4mRQdkQErALSxuHKZGqc9wapY2U1SQWZTd711ZsLj7u",
  "key16": "35AaA1bwEpKehsntdAA9EdfWo7ZcNyJQFHsJR1qX4Va6wVetK42kRTmmoE34uBXaQJQY3DLXe1AqYqxovtrPJzqP",
  "key17": "JtitwKJp1LKKPz5ZyAooUMZj33iFTVKwXBmDfRDRFL98CuiiK8EeC91PYKH2fQ4G8cd6z39vk6bFuewDEkWQRP7",
  "key18": "5MuqgySJ9Ttz1bDBsCYnTMqDka2rpxuiHqQCzHxajVrMGSYZNxb3Q2Wh8w7WdwXCWF9ReSB7ErxJWuSt7iYYJ1GD",
  "key19": "5U5VKwAPuMKa5tHUJZ8L36n4ErM95VKfVVe6avSbhrM9Kj59LsoMwVG4TZTU5yX6pQpkGm3jM1Bkqj4eD6MaTchu",
  "key20": "4gLLxVxn6enTX1xEazHqLn8zXHP5vYY8sJ7Uv4Nybv3ZktfsNeHkMMySuNwbzpUt99FchC4AGrz9YEn4N8wD216f",
  "key21": "5HD9w3rYGk9hPoicvvG6SiQApLrp5MrsQVmX66hEipDaD2SoP75cdX91pDiqN74uyk9BkTEApr6997NesJnuo3gM",
  "key22": "3pZGC9yrVmcbzx11mqvdbvZcPrjKuTez4m86uywfNuG122r76DwPrknxyMiPShT75fd9jTeLUYZMiiG2yUBCzgUD",
  "key23": "2os2ohn2zeT6m8Z6KL9BFeEQpGFfScw7xXhMTTC4W1GMbrEddLYY7wxELNpAnW97oTRGZpRXShdoAf4AQLnV26jh",
  "key24": "56BcF3P5gmgYpgTnWnXNTXLWUhnvHQDw7wtTG4vP7Vgv69tMEW7ae5G1LFwMimpZtyRSGo4X5Q9hBfps7E2RHMcu",
  "key25": "5HJT6WM1DZaRPVbkCNGCDs18tNqYmi6ADPcrFURDSMgQ1a8QKsNTdSd6Hz6z88mWn8p5SDdDJgnxdBeJsrqVGUSL",
  "key26": "4et5i8mjYLA3AwZKmz9UuGamLJaLcrnjpt78SQapGkvosKQEQnCd4BeJhhYfPj6tvWg2p5kZ3d28Ee5hSDZbh7kS",
  "key27": "TKyw3GYbBs6nFa99xn5DuNZJzjBQtujpXwBKE3fVffeJZvd6MVgdWy2iYWKSF5Ej6u9mQ4yZqFVQow99r3JWdgw",
  "key28": "2mUC9gKXFh4vvCa5HukxxEuorHNjskawAhiBcqN6DSSUcPJcRspFMUM66dWWrSyDaaYzNFkmfLY4GLAQsxq1psTi",
  "key29": "5MZncQo1Gc8WMSHkHg69rxvr1z2kyNv2ei87uVxYnzqLXgdkUrue3pLXAND2ze5kbYfLNDb6y7ewSAX763KeSKGs",
  "key30": "q9G5XyhD6xG5zGVGgEmXrPNVnP7Jbw7VH6wSenMuFNnVfJebNjwpXEeksgqH2Aoece1tRkSScGn6JRWLGqTdjHx",
  "key31": "4VrY5ewENZ4NrekoFmKPRA9J6QM8zQ1V8sSsssCR81btBnSp2mMdp9JtGUcksbA6UsgKN6wWiZQcXvZhqEKGJcoC",
  "key32": "2Va32aiQN56oB5kyBoW9JwastgqqGkUxoAoSEqjUo5rBBUMWXUSSohYoPu7kTh1zkTZvhD61vJdGSXiDDyhsa8wL",
  "key33": "4ERhpSHPwehBkd787Swj83qvyM5KmcyPj1sGfq9s52zhmugDJkhmE3XMFg1t49rz5iCFkx2X3v9yQ4gkACcPLw9v",
  "key34": "61j5MvuFC96ntwM7RxAZ23Lt8kEdiNkWHx5RZbHuN7X5dH4MfbKfzu7HA6iDz1gTDXJ55KjtzvbJwEWoVPfkjfdt",
  "key35": "XUeWmVw13KLTxZGtbQ8rN7NdLZdRndR3enTGyDTYGZGiFZTAXM2MWnkEXyiSSuxsGCE6zEmCQhX9cRsL5Ct13um",
  "key36": "3bsYhgLDcWxJVqtg58SbrSWtnaLDemrSo8atiVhKZSTTGdEekg36mU8CDDeu8dbW5Uze3sD6zWfbQuKxRazTABUw",
  "key37": "3L22XGrNmBqoM8mfywqVbBEgB2mM5RfF6DpAR4EKrCiH5a1GGLbPdiUi1doPMk1kwJ5cZ3cBBEkc7aEb12TyCnFa",
  "key38": "XbAWJisc1HtFvBn5kaEVK6d1GnaypBg19C4GacfJLqKuUUBUzn1zJa8Nv6ZrbjfPiHuZxEpmwz7Sc3QtTE7resp",
  "key39": "2xvPxa99RznF8vMfMjDezRHQ3KvJcCqGwmrpv9G1KQ8LSFVzuCFQnKsJCdZpNyJQLcvw2sjsGL1r4VES9FyDQ4jE",
  "key40": "gPcZ6pebKynEV5qGTcteWSrFY1vG3XEeEou3gYBYVFeiqU1ofP7oWe57uTRqxkYGNDyLR8Hw1rFVNzFG6TqhGgJ",
  "key41": "2dqL2gp81dUqePzJFGJ7WiHdtwV5gKrTRxHCHUUdtaz4hsUQQv429UR24QboqUBtFP9sLfxj9vzFAC64ztULDaJQ"
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
