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
    "hbz35FWJZNGAeAbyq54mPrr52idFQDq4Xm831RiBzS62UeQJFZ4A4e1xogjva2wiVdSDo9X6Nh2hbKWKPSuizs7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xkk4j7sLQ2aQD6qkLiaKHV6xbRL3BwHe4Q3tK3n9nXRdD5VW8N161s3ya3ATnAtbTeZxZM1nsrKQKjHVmRdasZH",
  "key1": "3EfYm9rkMPyogd7XiAmKMTYiikc84JhWqiQ74Rzgk7BTdxnnpvn8CkNdWWSnrFDw6zh8BnMirpYudJA48FEfZNaE",
  "key2": "5FheMTeHf13sATuuSunjoKSGXR3zwdVRKnrEw47imcVTX5xKetzaSX2n615QRqpjRFs7XVPVzJguiKCPTRKq8D46",
  "key3": "LvXbgseGWpsNiJr2ffx156Rqhp4LkrbhgzgvAA2uSiuXatKxms8NzmfDATpcjByq33zmPwf5YoMPBnQsK3QYbpD",
  "key4": "3HUcizaekHFsobpnM3kU4VXyJHKFMef8zNiorq4ibuHCGj7a5qi9odsNWzP1DbhE5ErWscQNBGV84QQ181rBXj6o",
  "key5": "2QukLj8CHQDomsk2SgFANxLijLdCaRaTULhEJadbwkqbNouw3UdLm6c2qnh1882bMC98UQLNyigrsgLQovVwXvet",
  "key6": "3FQwNmohe5STK41pWcx9rngvQQmhqMcCiQVEXkrJtSWuee14LJyRYiU7TPU9B8Bn6qcaWRFRPP483E7B8VSQtVXk",
  "key7": "42oxG9Q5j5QFLZYmM8e8LC6Gi2bHijzLXybKqD63hXx7EaucSdrKRs7zMqAVGwWpbJa9ajHZHZRzp6Vnj5q8PkqV",
  "key8": "mDPAq7XgLUC53M2NVuBy7yhHKAypJwymXwn6dBsJsnW1pJnwfFm5znNMShYx18K3T1ECQzsceaB6r2ab6vUhgzS",
  "key9": "2XbWmcmspYoxAGXomy9m9zsESnorbMmNo6jEweeEoGGUsQC7NhhLhFddeGhSkohgbdLXZEUAzqaZAjG9AEiHSjox",
  "key10": "57KfJdNShmGg5Nb7uUioCvT7dyRA36EiFW9jKf7iLCqhJMGhMEHmc6gHBobctsXFEUeFuCpUKMTwWvfKd6YVG1gQ",
  "key11": "hLPwQcp6ZFeMN3f2ou7ZCqMX217aTAnTsFuo9NS2yBzv6WjY2SDwfoyXgVFqbkaPnmRt7ctJJoaDfbd7ErmaACf",
  "key12": "34bJW92s5QRHm8XKRXPrAZDiTr4TCh4HZnnmVX9WBKUUjgS4QWL4kYUQVe936b3ctCjVcLKn2zWVequLZo5qJjRT",
  "key13": "2yUFwAZgDeKgXJyQVw4wwPtfFSgcvPDFQNegzbUWsBG4cAi2aGVYd7zeFK9Zfjjr5KD1c1ZXjZqvy8DNfvsmwF9E",
  "key14": "4rCc8ujAZKDLVskBrXYfggt2bdg3j1XbZxbspgSRugtSFjF4oGjDNsYbKnETDG3LY1f2FC9aAosJpv7gRkxV9uK",
  "key15": "uh9SBSkSD25pGnmt95uqHfhXxz9kfUVM2ypfkMaLc8ZuQtuHNJVGTiMoK9qGF9wMAHen91W3TDqCuQWwBLxiqR3",
  "key16": "21XGrRTUK9j3qiTMFfgGtj4DPftSrE72wSNmNvQM187J2YGpWd8CUxhvRvVntFmf7SmxZVHKpu8RYzmB2Du8Nyn7",
  "key17": "3QqF6otEvsf3u4wyJFjrAsA3LHW1dkmFi28cdZQ9cWF2vNa8PofZYd1WtLKkX1J3YyHYNy6HibfSjb6VfC7HtVZ5",
  "key18": "2GqzHMjHSvBcPxZRqc8b4z9KubZyBYjfKK3Fpvx3rCUdQf5oMPCPd2YjHHZdXBpecQJgWUi1psoSiByjhwu7kDYs",
  "key19": "4uxFr5YF9aFPh4Wmespfkg5p29hkEVQAvPRhZHc5FbBCyMkcgwJyV5YHTTVGLqyfSCQkukfHhfRqABijuJkyEFnz",
  "key20": "3eHQ3wdsB6QRNUPmDbQcQJpsdjYEyxkPYYxDBMwdeb3cP3CkAYSTJezuPvRRgKyGC47oUto1kwhbaUvdrwdtiPAD",
  "key21": "5vSovm4F7Jf5XirD49b5TXvWJMsUQNpjWUU52kVmpSnTzHdWqVhcpnLcHjmEFLcQB2fbZewYkGN3k4Pi5kLvnPen",
  "key22": "5G5LigwfRmoWbVYpLyHaemTf3zceL1HvXiFZJPfQWcXZpcb7H7XhjCWv8jhkyB2yYin6bG7cn8fv92sUXnzdBtbQ",
  "key23": "2TcnmtxMt3rNTLf3Bppa88xd414S6dcULaT51oRGn8zmX1r4HfQmjkx3HWaoF4JnKYuEgaNp8MCSq5fbs53UMHfn",
  "key24": "4KzBHGpbiT76zTdcN2mLdfSMGDrp39GmcqmGfj9GskqEwZ9kDWiQmhRYouSoZXxXvTJCQHx5qfjKA47reCqSSDYE",
  "key25": "yRGKCeTH9QYQimxC4HQhCvDrkpx1a2eX8BhU54KheVinUcAJtnS8osRd5uj1ZggXuzxZXrEHMuXwSH2Env4wNTr",
  "key26": "63JcKcqGZyemXaNDjKCz3akfdWJ6eAzyDmiTAsKioiAwebKK7gdEfg38jF5DZ8cYAbeg44zfJ1DcniSwPwquGQK",
  "key27": "4Jay1Rqt1Qps6yj1bw4Lgi6vKzBsuYPsu2yd6PTpGTofSPVa9Jb5kbikoHW35mwCyQQDS66syiBhxXZeKWTJs3AF",
  "key28": "2zfE8a4YwQZh389iGkbPDKoXUAXW7pMxoPebwJUep1YCJduGjVKpfRrc2tWzaecoVKUEdcyUGG8WQdHHCP7A9Lcc",
  "key29": "2ff6ANBSa8nJu8rhejg5s94qvXPLVfwkg3DqNq2BecT3myPfbcrcQxotD4VTDk3PtzE279R6a5hxwTY25v5rWnW5",
  "key30": "26zmo1QkKiNMdsKiuWSaLKUKf2qMu38p3pUDC2mtnsjw3NJLnV5XKPNGJzkRVafTzX2mDLXhkQXpeD8LGv73Eqqw",
  "key31": "4iLJsZvLdd6LV8rbjyyJa63tSFVyhj3e7PcosLXwGBX5T5PyZ7fo24yY9zkDuS8PxtkZHejgBUMSVEXzanajF5Fe",
  "key32": "2ASWCUjGWFB3CL4abg9QYBhyG8fSsYFUNsaLcknYu82znwVVFh2YCXfNBnLi31qsmGmbWc8NcpwCjvP6ySgwhZuA",
  "key33": "AUjaZhn54txscH8USdDjgLHS5f4eoACCcR2ZriEPWYRJdWvvj4vHu2bGQKvR3Chda2PHG39GxAbENDy3dUM2PFb",
  "key34": "AQWtrPTkgi717jKuCNokrBNdHXgKTSPGh4BeeJrUc7H6TBLzttjJYkHupFH4En5HpnaUvvLitN1bZ86gCZWPjZV",
  "key35": "uUZu7SQXq3EXPVS7VBeEByVtNQM1NvnBVme6E3A3SgUK1rZ1m68FM5zrQdFKQFnaU25dyQ9e4RzfLSJPDBdW8av",
  "key36": "5EzRwVfRFQJYmbrByTifAbNQyWUdi8jkkBPxkP42Y9YQNsQhZmRkv9CRBgEwtXg6m9coYRKzR5QkPuchp7hZZZag"
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
