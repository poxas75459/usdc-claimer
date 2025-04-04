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
    "2f7WcdXgAEhPok8azbrTKfaSM7vzQpYhx3MdSssepbmfiyd1W2wVZnfZgi7kRYp89wZn6UmSR2sPJjivrvTH2Ecq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "St6seuMfRDzHE5s8Tc93U83XHBQaCrMEv2JuF5CkRnXdh8cmnHrkN81XhdiW97RqjfQQ9Wqq2iPWee7hQVNsfMQ",
  "key1": "4vjW7fWuQGykx14KtUCtuyJVLjCuHkNmEVY1tiMFHfVYwR3C9gFexWP8Ly3AeMMSpgfaSCZnmqwGRVGWMu3ekVGq",
  "key2": "2TGPFiNiRiyMS9b95HiEgFukr9MZXt3n1k2aL7ozq2iqon4tTc6hxEum45PMd3KB8xnJvcoLrVRPut17e5AoCsbq",
  "key3": "241xnmkVHvoitqz8Qwva9BRHP4iQCr68R7Z5dkMhrdPAErmDtesxn57TqcSkyhYCJYsR4f2UQSkeD2ENfqGhZBJf",
  "key4": "5UV3iKbXxiL3cF9yaGNBDzF5aVhoi28UMePumWJKpQ3bJYYePnGaMv4m6hTcjjtkLuwFf1EZaos2gBsavcHaz2UM",
  "key5": "4Huz2k8d4qQidyCTufHDcCKT8xjexWYL9ttTWJ7ajK6jB1hQaasjfxdgbJ6Rp3niQou5RJs91Qw73HJxs9GtajX4",
  "key6": "67rcDD6Z1WzhUPA8Fjp6paLeL9awBffFviEBgbNMNQfH6ZTWgdU6KFc9ohqwztKrqpNoXU1P1ULRg5ECBhn4MqHk",
  "key7": "3rtC2RSW7LbL2jJNkqJvXh9rhCe9mBKd3ZE44gkJm8x2WFotniYyvw6HYhfU54Da3HjkSMyr5n3FkePPGneU3ugM",
  "key8": "3ZqTipSzJzTaNDrQLCRfNQL5Uyq9sof7ZogqKYg4Hk2XZWPYgY36PtF69fveQmyFQLcBLjvmm1JJkZsebdVGSUj7",
  "key9": "2WJneDGTK7WPrCF8KcgZU8FsHMFwsww5E9GUDVTaGGUsMJoBqyUAYeTNje2seqB3FXGt3A2bwQgLJJ7pYXbMjpZm",
  "key10": "2V51AwyZLRnhcjL7ygDTdH5HCsxm43po5LxgLr7D4n2qQsVXo883mf3yPkhmJvhgr3c6T5DbWPJDcNTVRtZHw9HT",
  "key11": "RysXyyBEcNxVnc9vSVpcRLmLCdciHVmm5MjfRnbjsczYb9Gi56FYDnbd3XnPkt7zx1JBZeNPwnJK8f99nVQvGFw",
  "key12": "5ZPoDaS4rjhuuVp9AWDTR9f8poA51x6GAMZibLptggFCgA593mWZtNLNqAD2ENVShYfQmSBWwf2Q2NKzH7qiEL4L",
  "key13": "3AZAc6nanUBGnviLpggGJBwBwJNGFZY2sfHNVQZK68p6bLB9mx7RCkVDsxpiRw1uUgHY6A3xVBWFvVypkmH2uJfV",
  "key14": "3K4yzXbF7Fa4qVxoucEyTaCDN91rJMhzv4WJjNuKZu9DMD42ZvmcQ6gvg7Js23woHxWFB7B5xxRJWKAb3S3XXQpK",
  "key15": "64RSV7N3rQNU9AQj1zNNZhsThoAwQUChvjuhuo4se4qdoaTwQ9rTrGsDhcJFr3ioWme4aUSgnMrJsQRPHZtaJF2E",
  "key16": "5ERokGcUqoCsvCQtrj2otyuDBayKgeZ8N1npsZLTpRuVemRMm3n7keJ5G6FBhZm2z4ayacE2x1DJYJFnCn66Bm1J",
  "key17": "5qWxhxdWLsvtRvZdFxHqVSnuN5Xb1qKzpR1h6cNmnhox6N9NBZ7nN3eTyFwgCiNPGEjtZdeSwfEGAWdCKSFc4CQw",
  "key18": "49X15Wtbse5Pcdr8g1aSvmEWZxUnHX7We4NegWBby6kFUfB4LMjv1EL94kHReUyyk6ZMuhrdX59DcBZgZPWh3spi",
  "key19": "4BhG71DojzkpRrLXsoENHe1ia9E8VwYDv3nA8GcRzGfC5n9RfoxcruLfXpDXA4Y7ABjroZoVxgMP64FbAsh9tH5W",
  "key20": "4ZEHB7HBnY7WwNCrh2m3ES4JMPYBbbfrPsy1tTerrgTdvznnWn7TKrSiJm3yPNf3aQ6ydCRJkmt83xg7kmqpykrN",
  "key21": "3geW73xD4JPaoWWwYPaGUc53dEWDpDAeC75jv3hL4eqhvRGqQvkjGvecA84zj8Rpmf6w9mnQV6vuh82bQuxAmYGx",
  "key22": "35idRZSothLDaNoedZe6sbGHzuQCpZfGwfnxioJ2ZRyBBaCbQWfRfV3Rfs2SeJcJLYAgNG7wwV6jdBzp7Dbk3Xtf",
  "key23": "5zzctXmZYi88cydecpbVq9J5tBzHYihyv6rP7SHoY1sTvbkrwD3zMMsPQbwFLvwC8ovcvVUecWnwQYDzRZYFJ6PB",
  "key24": "Uc97uwEXMK4DfTGbB82JyDxE8RryWYG7vQVKqGw3pcG72M6DriVS5GpzKqLqDntGbvnUqj7XXDnk55DZqhRcpcs",
  "key25": "4GzpKdN4WuSqJnBkPgE1NATV7w9QXzjAvPzGymZrFV651S4xNoHaSaQ8oMFJPCYXgS9LWminLADHzaJuNWYJnypz",
  "key26": "6j7ghpNiift988LrfuZzoSMRTdBHfH5jn4VFy5QcLsxDLESfMxvrEA78ZRn72zHHL47zx8srfSuEJKCfUPhuNae",
  "key27": "2me9AP2ob4keKdf78fB22k1Vuz1611gyDdFcoCrFVwKsrHoUXAqGZnfEgZA7o3kRMNx3rAvqZtKAzfDpBWmx9QNK",
  "key28": "2kVAYEDjYMihpzh62cSXro5q8CVNdHc7W7jR88Lw7Dzec2b2xhvWYNnaS994DA73UpnETnDX6bSKja4T96QLWXE",
  "key29": "3dhpWBn9Kht37zmQHofmDZNvULjVnMJ8evA1HU5AhSHUJRPW9hspKdfP2SeYvErLVk6mSv8i1FvtrfGxr7K2s2BS",
  "key30": "4A2vCnPZTYteA3WPDinEgastXzszPeRXH4NQDZedh8aC9NCf5UFfF3CjXZ5SCfFzywpu8PhjEwyfNpCfEzmrgiLz",
  "key31": "3xs6dU8zWHmvQzbDZ9GAjs2545FeU3CaAhQbX3eCNRFZP1WELVPhhCsLkpFi5Lh6jgvEX3nwBsRTYx3KZYc9AoLm",
  "key32": "RJnFLjZvFxKvex373TyLnyyjv4UBDcaqw2K97EWq2Hbd7CWSE3mmDW2Xo7gyMQDJMWqG6oPVvujYdUrXGKHss1r",
  "key33": "5fvmyuMiuSBxmSftz3rwhHQabsFirs8Nnr53Xuh2pdLgXHUE6iaY2Hd1bTTxZwG1TEssTWdJXZZ945vcsqbQc4CE",
  "key34": "LxewAk3aUapdiLPVdrZPyhW6kdCh31DTp2gGLbJqLi1ffjDFDwmYWzUB8TNxtQTxV6Q8Vbtnhdx5ogpmFZzhACh",
  "key35": "3fHK6UGz9L8Y34qasbjQKZDSnDdErfhesEti28P5k1eaACzrSJfXSab2gJ6bC9jhdciWnG5fsZiyCEqkvTVYUDQM",
  "key36": "4C18eqVXBxN55NSPYRqhHCnD5NKedpsN1CTCumNWe4C4dAcSHznin7MfgXLcEZ4ANeSCSHLLM4YmxUFNZERHTQ1Z",
  "key37": "oWth41eWaEhj8wpHGvcQkEBhny4WWwA9Qnzq9Nr4Ea6bpC8tVuAUmpLezwDQoJfKBhpw7iM7AGRpTCbkET3KVxW",
  "key38": "2A6th2DHMrS3Tm4DB3EaMQHut8K3Sd7oszEyrXYFMxwXcEb1PEzx8zvNmD8cTCAp2G3ECpuWvcdiR5PUfBrUsB3A",
  "key39": "wMWvvyED4HcfuJKSo5bqUqS4Kr6AYksq1DGhDTdwGzSbei3un7AjeMGEGw99pez9TPoaqKnHjDRqLpfYdjR1bSf",
  "key40": "DWC5ek2U7RCGjf7uAd8uGziDcathZhJMnP5kPNe1ec6NfmEcvMARhLPL185DJuBUVXKzWDzWAu5sVEYLbRG89Ad",
  "key41": "5f13sJJSQwz6Mfu4e3xdhXSM12KQKzZJTWTJpeHSAHUYXHGiFJRYMueyDc4kcCdSHeZqUa4g3Apip9x1KcoQdPH3",
  "key42": "2JqS2dfd6SLiYoJa5Jx9qgGdLMN1q3tVEE2KyJK6LXbE9BUsEUGzCoKv5TnZQCkpeAA6C4ZJfRVFLYUUfx8t8jRM",
  "key43": "2LKzHhn7wywGEHupbcLH2gVvcEGiTkPygndgWQ63E3tQ37XFhJpGx1V7WHfEu9L8HoABA3bt9hs6NTpLeyLvgrp2",
  "key44": "2TXKhEU4XdNGNaoa3nXf1J6sM9eWNWqrcvm2tU25zE9kkMhdCfadfHy4DWorsANEdNUQ7jPRFdugkmLvqycDipF",
  "key45": "4UdNvK9sa78MLQnfEWA6zDbhp4UkLCQdzjXtdQZJd3kJPGLy6N4DDaGAciDh56NiR245U18rDjDKYooJTYSb1SXv",
  "key46": "5vV7QQqDmz2yoJRYYdULv8whCuDWAxLvHips8RPFjvLLWdBQFXLHt2UHTzukfp433FUQiDNSUYDo7yZg8FiRXBCi",
  "key47": "588QPrxkVcNcH8m1pmH2LPsxfr4Hb4BxkAn1bwgxzQfBijLwydUvwUxmJkEfK1rpb8SFK8Qoe5BLZE6dxQB36HyJ"
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
