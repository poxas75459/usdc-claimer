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
    "3uWu4xBs43HchEN31j3VBbye6MQrSo3XeRKzngcGTz7fzqoybAyFxZDjSCTUTioUnL6Tg27DTkaCcWto8FkoaCVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VWTboB9Cd34SsmqKngYczbLjdHKAsN9U5ycvhHLjEht1oFGsrHTDXGtLCGQn7M73KE5LcvpRDyb6xMCQD1HdNwZ",
  "key1": "35sVaQrLQ6WrcEFt58CK87pxofBHDzt2hpMY12zGJdhbTgHhrGVLFZFYMyMSPtuTdqo1GSVWUdm42ZceKWDBS8ME",
  "key2": "5RXiEKAgifTNDxzxcDkv6k8hEAjGi9xZ41BSM8A1uNCGLeUzsVvBfhBzj7Yc1a3EsNcQGnAWpu9G8dh6aq9Nscru",
  "key3": "36fwYM2rNzi9GGEQcx3SJ1Jx2riuxC7rzBkHUiJpWkRPLXC4UhzLvs8xYp4ENvoFzpzGSZ9MJ6CTR5Ldf4WGwrhh",
  "key4": "2EFcDscS3MY4dkeUHUw2D4x3xqLYQEqGnsgQCStVbKtWGYjcZVpZdjkorCJUpo6icETFmcDxbU4L7q5TCeuJTwru",
  "key5": "43wuwASbfbnFWykDGbJkuk9F45Mo89uEPaDSB7SRREYXBdNwghzCARQ5TsHb4Nqvy1wiVq8purnYjMVVjDFwwZzi",
  "key6": "duLKGPmdRjZwoT9ugdkaSosAYGRFFrBbUB9xpdSoRLdjwPv7GMp3ixABaJtcjUWWrsMqSyjSwjNrSuqkHMvLVfU",
  "key7": "5ZpL9asYwocV17okjVeMZdZn73dmRmKVoFETiYJnmHwB5wExJpmhPr42B8gZLfu21rj6s73LpkWoAtH8A2BtfnCZ",
  "key8": "5hyJWhtPvm1HkWnVgJDbCwCqcegLwenLGyde5jrL2VicfmUeRbriw3u9f6DMbQkKEYV8wxugT6nmKssDhqP8oaNo",
  "key9": "5JZo2EKMtdRUY6ML5SYYRLhqtn9PGg3shRGXub41d4i3CA1BEXxFLYDJegQUB5axUFrLA47peY2fUi2EwqYybdZo",
  "key10": "4hknGfhdNPBa6iHgfWmeYty34NgakpFnivQWkG4VwpaoTnmtSEGp5QkDd4bQA6UjfcUZL2uW57DYSX1peXfEcqKU",
  "key11": "4eodLHbtcTzu7XQed4DJ514Koo3mJiYQ2ZRuuFXyZWnhuvhwdN3S9HHWZiGzYGMvDEGJEMKz5mxJZyxwmhUNRqaE",
  "key12": "5PszAdM98z7RtRgKhsWeBWrpmHmUm8A36N5hqWwj2yWj3kd1FDuScFndFQMY33Y2LVQgck2VA3v6Ei6wPhEZ1mzM",
  "key13": "2P9ApuXs75peYdA5yNGZxcRx7X9f48Sp2MX3k3fcvyiQTvVrwL7sUheU6Df2okGEhR2fTPPUusbgp3ZPR2A7feDw",
  "key14": "2EpiTGGqUM1EE2GU5kUKJbWgaoaoB5zrnZYnXYpPQwnEidosSSJiPjdMzzxZLz2GC7ikxLj879N9tYvJD3cVxm2K",
  "key15": "LSNekBAd9MZ19LK5j8EKaUxfYUGi94YoG1nNzsumEUGbQQNqQVzbqAATAJ55zvPckZNKtihhdLiAzus3ATX7d1T",
  "key16": "2xhDKRMEebNFnAf257xSfbQMtJUseAdfugT2tyYz3bP6gPggLdewUmANHWEP3e3SuNSRHGUPhLYySXH8mw9u64eR",
  "key17": "YkpVyxRvUZhJ7ZYCBR3a9ZayMxYqfrZ8H1ziGmf2mmuUp77aRypqTnTE195ypgEjztim2o9dzN8bNrY7rjy2Ea8",
  "key18": "4ayccyEbaKmT9jRDrxKynG4BnD1oUP84ssRd9HXqpvh1T2EZPiHZRkZsMCQEpghzkmnw74EreWin6HaFWpGoUKrU",
  "key19": "3TYYG9DrJJpwR25zq3ZJbS9e23447PYzCA3KVW8VgvDgnwDrNsw58tXSdoJaDLnrzgf66Kq3xcTMVZnE76dnyFj1",
  "key20": "2X3GqZTATjVqTiSUyzNb1DQ3oXh4ohziT2fFTYQCdJwNYpN7wK8HZ3GStEYJGDet55R7ik5yRd9odWaFYWe6jcgT",
  "key21": "3q31N9u4RZJgFG71yjS17WqFP3AX6vK6uk125c2bRmynWS9HYarDExnbVFAgKYyrYPBgA5amNm8XGkrLgr54rUx6",
  "key22": "XSQXNg7h1kwhQNBtkJrxDStytKQYtjNkrQKS6Rf8jPaRxigEMWVXDtJCxxUq7TKM1a4n5gqvntnS3ukmfFkrfdz",
  "key23": "4f3PtRnTiYKpvJz6FM4aLNmTt4724N6xBrCYo9rzWrH2BqXACbG9dDG8zoYkJgAM8p7VzPjtEdrh68c4haXbBumk",
  "key24": "2Nm22BFnhLumAsT85LYqTMQLMREaZwmqkKXivxUJpwbuXvgF776Pu21ugEP5uAkAASkjgkigsV3kJwnEWn56iZsU",
  "key25": "5JHWzzmZt8bBZ4YEtEhzkXoVpBkZv4yemyi5BLykd8pZchoxZ6KjW3tZVnzuWaeL7HVzd5cyCub9KxQj8VKBwLTA",
  "key26": "246ySBEi1c1bUzvZ1M99nViVW2Q8zhioqQEc1iprAB1roG241KN9W98e8NMtTHWWBsrFR5KGr3shHzREdFi66N6F",
  "key27": "3dgnnUJPZnqNYW3sQHcHwkoh2sYD2oBygJU3zRYYadZAJH8qpNh7f19YZjqwNDLjdXLKX8J69C8s7S2yTYe9NhhL",
  "key28": "443hrTuRTheWywpuUbvQP8Whnbvuyk7oRiWEkhxvKE8AqyACLy1ALjRrVjPm48hp3HHLYiMyNTNvqFR95HiBzZch",
  "key29": "3z7uFFpBz2pZPUztYaHFuJxfVmuXhWJjyffPDhyYoFAU6M96BR72prZqzvhVfL6oTo87NQf4dbU7vckXW9u3f8bs",
  "key30": "3iotUnkHf3EWXkht9FTsF2qemsya4GUfBmviYM1byzMk4FAEtw4DaKjCcpmDm3r2EidkjLFYcQXo4RhaCpbYdAs8",
  "key31": "5KK8Z4eRQm68rySvtxVAztENkHKXS5wj8jTYFZijdBrT1VxGPCpKJqByVf8gpzVj9dMtBPXGqf8EupLhW26r2dpa",
  "key32": "Lvqp6evRcRdGUCieorR2CKBwXUZYJp3p1GSmZx1z3gxV5Knh2bTqjPjvLbdBpLMSbwo2mW4xTuwd2jVw8q4ZawD",
  "key33": "4sxFPVyYx6zQiwY81QgrnUCPWvD1TqckTpyXeAALYmq8aeDeDZZToLX4Qu4deYSQ5pQGN3kVyCBixjRSipEmSbSf",
  "key34": "3yQMUDvcPo4T36zaj8dTXmkPuSrPjfqGbfyzhVoSeUYAs5jGfeHuWTJwVwcv62DztnGt1yrfeW13ijS3gmWbsFKC",
  "key35": "7kGpdJEcU1twKW7GK3Hfm5Qqe49y3uSgLCdqPJAvwrxVHhZJsFncqYRhfsbdgUrkvDS8CVNrN3GRRxJWzHMQopP",
  "key36": "42iHKCufgYXkdkE6vipskuG1ZTueBy4CS4fSuJHMizSw1AFHSBPAdEV5kCJutkNdn9LRGYcbhsZQdw3yQt9R1zeJ"
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
