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
    "xpQucA9QHzJducBT9h3dtdWbbE2puPfQMPikaqhQ2RCSBTNsPfDiq1QM58zJkznF8rwFfY2R9Jpd28VC2kDD1Es"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2faC61FtdsZnvRsuouuyqxbRrPPvqmGVD391aPu1SpkoJJfs1pLjqpz6E4hrVuLPyJ48iQwn3Zj8q9fE8LbiLt66",
  "key1": "4f2iiksJx18FemfbPP4PE2hyKgCBdNTf1QMFxbwdzWZxYfgHNT8bFLmuJzHVGWGqzBAgYAXDH6r5GR7GNUtXrBc6",
  "key2": "29KbZHcbsUoq2sV4Ta6hepgaKeEXnynLd5nPxoM5SGhGgtBpwMVRiYAfV91sJnhiHWboGXzqiZWdHRt6MMeqo5gH",
  "key3": "5GbkqH7LbwcG84P7UeUpXv4tuhkdN4DdjRLW7XYTSsE8TxqdFDoJL1b8E9rFZorJVVvaGHyuefLTGR9jdGz4s6Yc",
  "key4": "2YXVrY7kBpgEbFRqyGFQyTKebrMGZ27oSyvNA5zMEe2QFXXgvFNaAVEuBK1Vo16na1xzbz9UGxvLrHYhP9JHs6ko",
  "key5": "5BfZ88DgJzMabu4bA9jCuSzckCWveNJSjdtkWUQnb5PHpZ7eh46uvvoFP1NqZK7eRicqQc7iPc3ycmNm6qnz9ZWu",
  "key6": "48PzoyGw6YSYWrjFFZHxakzm81DD4TaWUckGGCrz4RDU116wEHUZZH4sio8fSamCeDyyaxC2RfHfrwHqftq67eCL",
  "key7": "eceh6nPHduZwD7A3WaBfP5YnxtSFJe54ZwTPxdmgtQamj9Q91K3aQUkRKiGTkoj14fHHbGaZbrkpFW4pn7sBRe1",
  "key8": "PZZZpdEZp3rGuduYiiSGL3K3BsPAzmHWG4MHBJFb3BA1LxHr7W2pwmbNwjA6S74cdwLoSZpfgNvoGKEProocKrs",
  "key9": "4GeHm12MGxJ1fpTkzyQXo9CyGdAjTjwf1tPugvyGxnY3FGNV4FHLRD2f2wAcik4godmjBQnK8hTbdQAzkGmejLEV",
  "key10": "2isSVBCr8UzeeesfbGNBc3c4rfHwswSDpiPwrnCVtd8bqeA1r1tv8psDRVREnk2p8iBtHSRmUuGbUYWHHcFStutM",
  "key11": "mMmyvsvGmNPLHwjjRD7ThAzCzVj239a456WfapMiqZBJXbpR2NhhBWoSupkPQbVZ2qyPZcyG9DvQVpZ5KmdZFTg",
  "key12": "53VGyLDehbBC11MNSJVMvSFZQp8bd2MyZUL4a9bEo1tVFxkvk9ofb9kZGCPViabYuyjVeYnuMQ4XNa3NQe63LqfL",
  "key13": "vBKySRJBjnYRaZ68hrjMnNooLz85nnS59DrvHovLQsvztuEjfyTGMhjhgDmcptdqv2Bf2G3pEnLkDYC7gkLEYw9",
  "key14": "3yAfBpmA6RqwZBTfDo6WLra39HQ8wVqPGkpyjZwFMkg5hd2oTxGSMPHTYQpsBz7xHXoNwm26xuoUNjk33ekvHvS",
  "key15": "2a4FdFekYgvQb9nN6evNYp2YXTR4KA8v4vAy9VBcaUAL16ZdKEjyoFkTF6SG4bK9UbyBBXZezCgVuuMxhnQ9U6V7",
  "key16": "ymD9xhP6x8MMCVFSKy4N8BB9NJvi5GXKKfFJYkBdVyu5zaYav681TGHgBeRHHh69Y8U9pxge7bcdS4HN7N7kNAD",
  "key17": "5YFWUdHkaTUnxYpTjmxW1ePn4rRDSHui65ebKVLG1cxpGySJ9M6aB1cn8P5xcZoH5Z2i3y35x9QyG81gG6pyYWbV",
  "key18": "5nMDVzLjfKqzFtYGPvFDM4zLWpnRW1Fg6Fn59cjj4hzcTspQEeuyrP3uFAUmdkBHykZ2xqTF3BdmogFMnM1ntQrf",
  "key19": "22tDgzkmpp36G8yXRjm71jaEiebTLb8yuS33Vn5s67b6YFwKQoYTFa8T5Z3mcJQYxh3RGEdTzyCLtWMGsduBYgty",
  "key20": "biUPq1bhpNY5f44uCrLvNJWVf3Gwauiojf4cYaVbbT7rRuYhwm7n4JjTQf4CePrwN61N4nCKRcW6isEtjao8Ejz",
  "key21": "4BQ1bZa2z37m4RdzYUnFiZwGYCCVjJnQDmByXKbVpr5NfV8Xp6tsJc9jtDuuN58BorPaRr9BxSefWnsUFcVVsjm9",
  "key22": "5m2qYpxrqiZjUKBr3iPS38THBSexXpfWzNfsFiv38hwfCYKco76FBCCz2T22xgkY17qdre9xnj9jxRzufdaMrM1x",
  "key23": "3R9uemH5eb3fX1X1DUkiFXCHFWMmK1EHiACJAgmELgUDm79wZgyCpuARZ5HQQXAdsLpJgfmtF24RHYBDeHse9Zc6",
  "key24": "2gZP9XFMa6nKVXy2fxza3eUUMCxvdMkPNQnSKTQ4hkoDiYVXNnFBvx7G2b4sn6n9PiEd7Dxa8cturGLLH27isA3x",
  "key25": "48r2Ppqr6sGLa4yakANMxYW429R8FMAEZtbc1gFTjvj8zTWPNKXtuafV8Rms7QHGoojSGALGgA8u8L3gNz7Xm2Kr",
  "key26": "3SZQdwhqdmMRaPaDrVZ6mvUJ8bPXmY7i3XKLfB7cmdoZa6LEvYoshdoy7CoByofvpuazYwCT9wywtCXmxbrYLwH9",
  "key27": "3GNcRvVYeiewHdny5eEe9pXUMgVRSWzFRuxFiFuofUX5R9JwSWS2CDcdQnL7e4HR2T3fYTdCn2H1iqAf3dciawAH",
  "key28": "3mM8PzmqkcX7RaqBLgCvqbwoo6idtRKTUbW9AC797oKXeY4NHrXQ418tcEV8VwYZmtuGsMLhBQtNMohiviGVYM1E",
  "key29": "3EyqDVgarc2q6JpoSFNuzUaoWL1YxLZbcKVZ6P4hNMF73WocWjBqPFFPvN7YXb8u1N5V6XWEHktchESQVPpGHFPA",
  "key30": "wKrLXC1coUmwXG97sLbTk9FES2u3w3orCduCzzjWHCYYhpCEusu4HChrRYCA9WNvx9t35wgCDKLLqu65oJoRUBA",
  "key31": "3F9dnn4BJRhPdhtHnLuYwwAo3Lvte5TthwduSN7XknqRhZb4wGDmpLxnqfSPytwFiGPh3K88fnegtUnyNuveYLDB",
  "key32": "3Jmxz7pbn2iJzSyux4oUmbpTzgctvy1ZYHWUpmtun5qa6JQnbgfiaB8wEnPm9Rsnhrn2pHRVYW5sctJRdpWbq1nW",
  "key33": "4vaZ3GZY2Nm6z71PFx57q6egRtViUCUwbsiLgaDEFbiLLNnUpDr6Rw1oVRZhUKRSxsS8tPKLqHhGVMpoVE1xREHe",
  "key34": "4maW1cZ579YFNwvz1nk1seyV4WBYmKMXGjZMNE3kL1PnfdMNHUE3gSqfmPB7agyctqtFgnwP6aBRcqK1aotduxQY",
  "key35": "26WgKppzdM8f7cLZvVcWKCprNNKVr34tLGiKutnAzmw4xHZqt2SJM5RXtv29BdaB4XcmER7QJtz8MuGFLtQ65WoK",
  "key36": "3vyARS2UBy2yAqtiTVGfR8JfV8aGtqC3voYCWXqrFotoqiNd4ZvBSABe7SnXCrmrJjctcMuiQTySeWjCafiMRuRS",
  "key37": "24hizXKhuXUmbbpsguhbev9Q8jmu9bAozX8A6otuYurALbLKd5nGcE6K5oZYsyDJhjfpLQ7T1oZyMcSwm1iR4yBX",
  "key38": "5oYoUVL6d47r6ZWhik999MeqJhDd42NVLBExaeWsMPRWsE5m9JjpWsjwHSHEvjwHwqsaf3YY4Gn5guEHMrUv3abb",
  "key39": "4vC13dX4ZNLeXktdKejw3hF7PqW7aVR6Ep9WBTrEnMBGS23G29LNGq84zTsWuxJDoiqDobSJEd6nLSHS6HMsQUqz"
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
