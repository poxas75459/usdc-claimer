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
    "mArUnHzxWg3TARrA99hMNDG9izdDUQS4QVt9c7VoK2hes3H3VpgJfif8matuhMQHmRkReyTJesY4crBRYeH5dC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wjjj5XsZtpxbyuGEz1ST48AqCdAcq1tq9vpeoSb7JUFd4Yk97UiK1u7bwXEs67TynDdoZhQKCkbR8QLbuW3AiKH",
  "key1": "5zFhFixkVASNcng9EFNXmTeJ8aJhhagSZ4g1rG8EyokRKjZgCKUdLVEMdzTJmkz8g7spLWURsLH9FU4Cj66uvrqL",
  "key2": "483Ntf8jAGp1KeJq1V4Lq4biNgcvLYyT5MiEaoqnF8kvPMecpFwBCr5nJunK2xrZqxwGehgCeUWHXr4DTgePUgir",
  "key3": "3HvuiWUE88pd4eJ1hqHiLMF9jmarCNtKD1AP6wMd2SqFT5PhdQLa8akayC77xyLFs8gkXuWg6mCh5BNp2QABiPfz",
  "key4": "5WHKZxEoSyHt9axZE56r3uypjeSQNC3metjj4y27Fp4qsBEzQa54vxeYhFuVKMhNYk3V6o9hQQhrjTPqSJ9c3NoW",
  "key5": "5vWcqWsuUq8qaKn4CGyGAhzfbbaQPDmjkQ4E2RhheAwGBGC4yztsRLTthkdkLUNffFG3HJkHaf9HAoMneLmKbenT",
  "key6": "62G1AX73F7X6PUGENGqoUgj6sDpVyWhp9DnNnPh3Vx9HZdcCXCWpp18BcQzCXgL3amvDABF8TCByvGoFyoaCNg49",
  "key7": "NAVRAprdezxG9Jym6c3Bz6U5StAEY6BUsHYjXbCVJF3DViR3f6ucxTaaDyUsZiSA6N1egCqDP53zWioScxMmag9",
  "key8": "71NP8Jvu1u2ZKoAVYD1Drj3z9VgRQHYDHNpJfbYLSYPRzbh1GMdEcD3NqgThKg7MTrjUfrgmHTJTuVN3FMU9P95",
  "key9": "wynTrbYw2grhdR9Z5K8ddSGfikhGy5KxfGhXwg3DmW4K3BCKvasyq9B8SMaXKC2A7CAyFdc12mus9bfbDto9cGr",
  "key10": "4qqNHc1X3uupqzC9iVRc2YWxHXwbi3oUnrrt2DzTsaWwmpnYhs8ms5FW7oPSAVkgv7xPvhqeNkdGyF1tVKww2Eg",
  "key11": "5LXCpVjE8PZZbqdwCwzag6g3VPfZFgadwaxt1s4kVbFxbHtWdtZsgtN2LEUYFdhjfB5CARjxSV2CjFNzZgRVX5Fa",
  "key12": "3sZ7nStKFEbrt1643pxkhu2XPuiKCEer84MrZevbg35ZiSLRejqvmewduEVJZqaZZbw32MbsXmv5KSKKrAjScWDa",
  "key13": "2ScZsMqvihxVav14HcxevYNvXkekGNwsF1EHWsiLDDXjxk1bMUtCRJ3UQTkeHwWDoGxNDpLthkbi1WxrdPDmqh2f",
  "key14": "2ihge7GjEaJqTygjgpCimzqBnrUtaXFPEe21LcEE9yATdV9jromgdyDNeumdDaAjWjpZqLkaXC67JmJAVi7TnyfS",
  "key15": "2JzZ8mYpCoT64YtkhiPYiEdi5rrjLeNfH7Hi76VPFzsHETdkJzqJHehmyWAdrvz1rH5VAqf1xiA1DUbUyMgzBrQm",
  "key16": "ZFMp9iiGkZeW9boNUXJBmFq1ijYLfB921aQapVXqNzg7fk1PS21XtVz5gw1xkQ5zeGrp2f38EQ2D6PGwPKbD2Mk",
  "key17": "cyaiJCaUa7ZC5bdbCrEbzw65i8XrKc7ZEL1ebCZZruhp6UdP526suw5dARQtju96Y3QxW5bmy1KtwB7piNLXsUA",
  "key18": "2GcASqJnb61nGAfE1zhTrf6K7xjxn6jnkHuL3wwAvykiArYX7GX22dm9p47pTptesHp2T89yiGb2ZcfobtDUfZhY",
  "key19": "5yTutjUqEmAbZgmJf63hoREBaUc1PQSnXspEGEy4aHoMsDYgjbVVk4vbx2F5i4uopvoHFE1o3hqeu2UQ6c69weAX",
  "key20": "4YoVtyMLLqpjcGzoFpAKqb7TeQyLHVCxPj6YRq19PGM3yZZb35pjNMRsEQyeycXbxHFgDTewvyHA5hw8aDfGcXAZ",
  "key21": "3SzSZbcPDfbzq93bbSvnNmU428RuTCZ55TD6y2ymg5juzXjBTUPKUhtRy7Dko7VUyd6JrLFbsSGa6cvZqdcLd562",
  "key22": "5pd97gPCETz7grUNxkgYm1WurHiALHr87P9WndCPGoY7Xk26qDaUYe38TYtJR2cmruweyf7u8M3BiCd2oyL1bR6P",
  "key23": "8R5TuFXeVha4gpx52iyT5etWytMemQkP1zrYDS9c7ebVxYh63hLaMfK8sfYYD8rVhRdkQeQqoyT8ouvTfQkvRdi",
  "key24": "2tHQyQGVLsKZob1AYEJeRc7PM5J9S49Tr6Y6Q5x6gQUECcD6JUAiXxVPEGfwFCUKepgYjsoEVXVeLJGYFDZUbt7C",
  "key25": "4F15UVeEPhyAnaVXhZbSKDLHmWSU4QkmfcEdZm97nZD1PwXXvzs8M3EcHaKGNFQbDQRdWLv71kJfdrC6VKGsi5xi",
  "key26": "55x9es27RcyuHkrghiFXvXxBEZh97uxuxDS8DKBggGmrECNNPbnpKWwjGNd3WrGfVDTJvBnJoFVUK54uiENStYMm",
  "key27": "37oAt6cJaagTAUQr416Q9uWmaX9yfDD2J5wWPFcdWfWUCZNjT9tmzHiHJsu7ewi6ZtqCR6ApGmTHfqXd3uNTxdJE",
  "key28": "2H726MxvMonFDzJ84vgK9MyNxqej1Xz6XJCCH1kmQfN4VwYL7ohMxnoxq7ykpppDyyvEVQujamR91QRvGNLcFdUg",
  "key29": "3jDdX46p9SmJQ6h6UA1kqxNBP4wfqazc5zZWb2fCkz29fe4c33bBf8uq93JomBwFh3AZ2mkLEXs84jid7BsZug6N",
  "key30": "SvYiT3t1opbv2KSZ6jbKNKtu1TWbQiL56ifXBC5CTHL4jd7kSz3CkrxyTTgyBSvqzNxfDPM1bZ78JienGA4ZSqs",
  "key31": "5z3wydShrnVUL6wAf7um4v9VhLWVfWShuA9jeJd3HWBJNw556Y3fvNQmRrMYpcphQ3Xr77dZPYL43tyFQUWD2wnX",
  "key32": "5VT6AGVyJBYG2TMd1BRgWX3rqNLmdo9jnfVtzsPrgpXphC3oEJi9chJhQNbwZXvYZTVYsSWzPn6h9oUUNg7Wycw6",
  "key33": "5wMSaaszS6NpAsBro1tjWbwCMhcVPiibY4nhBxajMX5crNG7rVxqx4CLPEV7FHccTbiPTh6mJuaRVEfypuHMWqkN",
  "key34": "gXP5NNynqxfPMRJomcpKbnTKiyBSXaAKzafsvm2pKAB7mqSCQ9EUzrs2vhC5yzNoSyBPVD9FpqbMuxeNd2MvcaD",
  "key35": "5wigJ2Drhz8pQQznxTrXkom3JJYjxmmG5jot9pS2jg1NkosPJUwuA86vCS4Pi42T1FUENCpE6zzGRAF4ypdEMd5z",
  "key36": "5mbxUPEHEVXEmJ4B5RHxzFLr2Kxe1sVWAARtoTJzgxk9wKwQZkNbf2aPHzDNa6u1GLod98ov6M8wbFVhJ6448USp"
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
