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
    "iug6QqeVZcZF4b5R91cYidEqzBo5C6tRBNr22rtDGhjVNCZreQCjvR2MJEA9NerS5HhFfshRvtGi7jiSGg5nfU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "faUv37WggRSyqw6D4KRK5Wo2jrSe55MS6rCcWzzAK6zAea72munMoYp1ZUW6b9GwkDxthA95KDDr7iycR1EpZ56",
  "key1": "4gq1zLjTekZme1sJtrXQNjv48LbWu6rzKtMUhB3vZPb4SP78ojLbe79rDEPSkQeaCZ413gzu7cM2dUpurV2euKQB",
  "key2": "49fKR5KbtZyYLaaFzHdGntUsijYPZ58gd7khfaiCeXpAUjerYWMGS9SkapghNA2gkWjD9wvPk8jTD3iLqgXT1Kzd",
  "key3": "5gocXCaqV87vwmyi2XSWVr9yn1APyKfyBnofypnvehV6DBSW1pAP4SKQK7dvBa3n4f7TgJwnuNvcyLtadAbVDtwW",
  "key4": "2JcJDESap9nrmDGSNjwynDwzwX5N5wnoYkjCTbHeE3VxH5zPZ4MMSmmJuHV5Lm32rGcRmdKxq5M33bQgzjarETeX",
  "key5": "5jrukLkBfCVP5giuTLi6siT6ULWjayB4ttKr4zWAfkdvG6oDLm2U9VRuptt8hWUZFpbQMqxmicZn8CNrtbmQfcPD",
  "key6": "2ZCwRddczfWbg6QUdfLbr36TiXtoE2BmvQbon2kUyj3oD3bJoggB3s2mU9YyQFXTzM8jVjYtNeZxTj4UpZyMYoji",
  "key7": "EWcr4Sizwx7x3Px7AJpe5F9uQ8iZsespBFJ2HSW6HmgFkj3R7vLefGnqVBJ9ezvL22oraU2GkH4RxawREwykvJJ",
  "key8": "57LRjZvusFQGKFx2V4ofidf9jNAXcrCX2wH8n1q4QiajNWkQtRdJQhovBZp3p8Hs6ErYJ3V1Dj8uJSkCNTNYVAZX",
  "key9": "3x9h6tEGPAp3eif1vVSaDy3VsJ1jUyZVsVDhmouPkpQfsszzVAPkTHhBmABHg1HpcwvMtM49mLhSPwjegcpkSGPk",
  "key10": "w4NZUo4ejKnxPB2ers2QtarWbKQ2HUwceRXsoJqyG6pkxRKXPe5k2R1NjhcAq9mFz82GtvaGm6BYRsWq1bhLhsE",
  "key11": "5zAjbBQYX59oUbi3jed32pVPLb2FniWtWyd7t57YoouajGmzCC9dsqiToT8sLh4DkGpvhpB4ZuLXB8y7Tk6HXLjJ",
  "key12": "4NyScPG2iQ3fuqJ9j5EBif9Jn1rFazMgx4s4c3sHpVXXpEJtBCGMXCCCdE2SGzTeZtTvpZ9rZBEpLm8wANMMHrmq",
  "key13": "5WKQP5HX7ZXjcr4RpWHsgXfDUb1ipXQCDz2JpuDH3UDEXxtYCWhvvDiEg7CUbkygB8PPYArv7xjd9XBntzaf1cwc",
  "key14": "2HZWfmni2T62vcZ1VDtQhRnpTXfhZYQHudMEPKvwVTZNrqh82NhJzwTXcFbGYCKk8kAQGpMXhWaLkAFsuA7pJUsJ",
  "key15": "2xZHXt12A5FovvqwaQaoxjQTV7KcKJcjg38njprQogVih2eDkcjrSau22dFBzsqxaua7AkgHhMFasBJjf5pPYwC9",
  "key16": "5oGgshYkVeLcSbVXFHTLM1htn7yHaPbBAiMUDDkUr2QEHnqpsqAjiLpxBP2q1nPJtV95WiaMAZz8KwnhRkFmEiEE",
  "key17": "4z6bxMa9UtgPvrtKnT8bLSAKWmrWCHjYcgarBxgFyWSydYtePtP22kXWhTqY4En8fDbvjrh7ASdSp3e1sZkXZt3a",
  "key18": "3aGbrA5SopMv41hQb23iw7fGMsZHPJRjbDw9FX1TwnQkSSm8ApJQryYoae21kL2ux1XRLpDb1QKs3ujfhfd6WWXR",
  "key19": "66FkCw53RcXJVj8NV8krebQ6AgCedpDUKGKwLAY6oFY5scpUrK3gKJkFsMrUuG2EbqnxVSov5fmsfoS8zg6yZpy9",
  "key20": "44gyjcd4X2rke1wyEZSvPtT1t9AaUaYeALfkD76jGe19a4WK75FXaFhdxgC22x6JdZoDDWVej3yHmdms7Ukzcsc9",
  "key21": "44SqQCaQs5DMGS12famnYT9yUZhoUj2BzyP2ZJMdB3VrW9kvskV2zvHb3NQpEqusFHsJ5iEqFGYGVf7uB3Dr7eZc",
  "key22": "43hhYx1ELCtzzdeWUW6rU1yvuqicfSaKiucE1fMBZ3YZUkWThm4HNUL9KKFautprShNrqVHTwQCeizG2BYMuSNk8",
  "key23": "kg8k6cdiZ1swaABkRkYxnFa6iEgT5Ee3TSk69BPhsdkg66Lj5P3e2EGP7FU3MWXqGTSZJB7Fe7E4hGjVAPe1gaQ",
  "key24": "39LgApydFxoR2SrCft3MbkLSZC6pbqmbmURdqu5D2T3j2DBHfAXgn8dMv3ELdHD1fKMhZpt84a5Pmi5pYFaEBgj1",
  "key25": "5aoBpiEzGME9d9zP3iHqvN3QUrJ5UeQ39YjL9ZVqbs3kZuRkMSKFfQ7LSzjtFrird1W8URmLo8qkHn6djDAGDpuV",
  "key26": "32Su5rZWXvPT9gNns1wS7ZHtqMams9Y82MnF7qET7GRkNxMVeprpewiDLse6bRL5fbF8fiSpuqzForjXC1tLR5iw",
  "key27": "42UKhSaAdK37uL6taVZJvsR6zEJCncpiYyRJ4FAUXh8MNjLKgYGKhCg7jN3f3yP5yMH8k9icUJHywfgod7WAuG2C",
  "key28": "3XbtWHPbiLTBHFkiDDEXS3QGBeHyRvtcnyBNfDPzQNdzXfFEg7GsoQ7qQFm3eYbLTxMRKYxxHoGR9kx96oFKTad1",
  "key29": "4TFRXqzFGmgaX5ywoA3FBRKswgQoArn9knA1GUZjjhFocaLnfbZjcKMp66HXSEtpkBaak5ybs2g6ttdmunLGuzWX",
  "key30": "6hpmzgkbEPQQkt3HwZEE3LNahJA8nJ3Jekf4VZpe3UMjpmoZ5v8tWvbnH4eqiv1JAJWxnrwH8sJ7v477pdT3qcT",
  "key31": "663ry5fBfjYmTFYDTN6goBXmKkzooR9hfvwvzcweBHJ9JEqgFJ2jhh55cmvpBShm7d8XUs2d7hJnMSyiY64z9TZC",
  "key32": "2w3T1c8qsx5wzPNT6VrZVAAjZTjtYHEDxcG7yi4y8X4zh5yBMj4xgx8Q2fQsA4VFd6gGeZAnmfMeDPf4i4yzbxnE",
  "key33": "4Afq9FEQREsA22R9VmzM9o1x5xtJS94SeuHCWVE4E1TARJXAmJiXvwqv73QEW9shGvw5prFQEUfzhhKp26SXRJhH",
  "key34": "3oZvrLrdu5wjJRV5L3QKzygG6ptqTiQfur2WtHegMvXWXhcQPjpNSnu2bVzn27noARn2Xp2xrnCmg5jcQTtavs2k",
  "key35": "2AMUS1UanM3EJ4vFgxGouTX8u7h2Jz39FAuxXPNYWHmHijsDMWwMqT8dtAa3grchrmrFCnHbD6bZNajdvAvGAASQ",
  "key36": "2KKKWNYbHV6GVsULCo7EiDq3ar5dKDjtQkrjL6s6aiDe5DcbxkquYKdyKn6pRi5x5pE7ByW9oSkycotjMkR3Soyb",
  "key37": "44apayn3FokuSRDXvRMdteqBGggpZ2tGBXPmKN3EpWwJ9MiS87R1LssrVC8NnXsJmvZ3FZ5iYczdT9FU7zun4XdQ",
  "key38": "QA1c5L3Kh72WHYP1UCPZu3Q26VJZuKbhQrchggt6pGmxb9BfJqCXYJXVYvNhUoj6BmHicLiNc6NFXXf45eSk1ja",
  "key39": "47gXXQW3Jj88emBAkXYxAyNddFocMExT89qp1CViK5MCnGsn4iU367P6mRZ743qcaAQy2D9dRWJdgeH2Xqcm75FA",
  "key40": "2m1p3wXZ9MAtbXmpkNwjVQ5WAo5b1YDcdFiYkuAHD21RqEDUWZJydSYwTk4mXh6vHzmFabgkptWD5niu128JwGa2"
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
