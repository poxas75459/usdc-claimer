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
    "5hxaqENfpoBTqvUDE9aZoVaTppaw3ENs38t8DqYPYk3p7NQzQqCQGN6bEvcXPTdwM9mpThnNHYbEcLoHf671DFAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rz6DxjUR5RYUqPmpbAYfcuFoHzAUMg5E3RD42pcquNHYcrZ9yhDUjXep7C28m7KkvEtzNm3uhhhtjmKDUfA4FnC",
  "key1": "2hQqDQeWfMWHsK2JhrrhKA9eU6DRmAqYntGmykXZ1B8EC4Dntg9vrKMF64geniXKAiD85g7Kj9uhhUX5XN8LFP2m",
  "key2": "tSd5peFrk8835He4L8UZjcN9cqsHPmAh8uAQRuGJasvL9Yu5JdFNr5vu8zPXNpPALe5reg6rXT3WdaDY6Z2jbvR",
  "key3": "3MT31PMtx5KfWjsmMy4TqyvNsBht38ckxF7g5MWeyPnHH3agfRRsosrM6RQRM3amTfzP8LrJaRX7vBfhHG2oxAZ2",
  "key4": "4PKhuDL58m6BGcTYH32UfPXwgH41GMaFUzQ1z5nnMmkxDfAMFhj3r1ey5AP1ZsLBUs91WLVCazHLvA5Mvz3b2Q6G",
  "key5": "3XQ56GkwyRtCajr7Y7UCpyFvkPaG13kTsv9455cD7v5Qp9TuXvowU3jEqf5Z15dphX3bZxpqHacd7ZJASyC4dhDv",
  "key6": "5jeqr23FLM7XuV1zaAv4THANrmtKRNrzvLj5FX4431SZio1oZLtca2MttNsjAwocP7j1WQkEVeUqszG8ZYYVuKkL",
  "key7": "vEnpH9ssH9Y97XMbANC5owy2aZpmMypkZp1cExr58ZDVNXRqHjA9ZwdttHNaspdQrhPnZskkykL7mjLFV9LkYWs",
  "key8": "4reHtuw2aMDZeALHWNm5cPLTFkPmqXtLZ3kaZG4K3YGeUCZfpSazQUQ5jSyxtmmodYWfvAsDuzXf6vj6Wj5v35Uq",
  "key9": "5hgdTpLQt9AExG6rxF2xrCSBKdyJHdyYAj4o2mgWAWHdLv7sCMkSMVLzKFrZHDJVXsfkTmYb7HZE61zQHUTxXeju",
  "key10": "4grnHW21xWYaNbFVoN5qSHm1d4LZsEZgoSqH1oe43FTjkrvZexJzeEK198zQzXoFgXz3C5hGKTXV7FkXkGFxpJ7t",
  "key11": "23Lpuspm7pBv6K9biLaF9wDFjGTKUGG2UrJrqfNMptzX21nQU4dKuGG5yZh547Agfm3U6YeGxbkNVw1SCxDbD4gA",
  "key12": "36qf3mkbnnrXfnkFc78tgSd43xdqufzLuXwQfrhgNN3F3tXuAfkDeNgDYSnAKf6biyyL5uE9C9JvymmZFNUx7HNQ",
  "key13": "fLDzMaG2bfMgkmtpUzsQtXAaEJtPy5FWPSqyC5JAKWSWohbT47T4uL4BF2AFwfSnfTfdtn8HkihLRQUeoazUxVe",
  "key14": "5ic4LW171QPNN4h1azNTyWvXpJe1nfDwq864JJLm8TqctFWmNPxGi4xrKFXmm6MNY2Qsmi1bWAZrfy1aofvYcqbb",
  "key15": "3UHXuC4uoLswkyHfCZQS4NdaX1nbSqz9vmH91n6cUT3MHxQw4rxEvFXsvDKixd58ctKLUjLR4wn2q7fuzAhZoFgJ",
  "key16": "28UDwUBvetrm5mq2nB5VLdsJNRAMS54isPMnzmankfT94xTTqjVUTEWhmKT7jjczRg9WQo32RVk9CLfZzzXqTjov",
  "key17": "4jaL5kRp22adrQWfiDPUpWZaamYyywuqebwTCymABkWJfK1ChoHHAaeie2ST7F6YSnTXugqarWfkbYkNtm2eGmh2",
  "key18": "4RGE8GdoSZjebVxCkmnY1UrFpRaxVwZBBcKkRNaTPiVXnwfuocPP8DgMNUJi7bVJXi7QUxi1nfw2ozCLj7Av3Qw5",
  "key19": "2YcoGBXYMMn3TngoVDSoK17CuUyXkdAQvweZoVJuNrtnAWLXi3dsyS3n8BBHvpLvYC9C9PtNPMpxFzVe8wtiUrFM",
  "key20": "3sw4HHsG7mbYhG6C8fBim4hcqmeRcVAiVxNvaF79dnbLFaiEZyDXiwmH2wf6VVQGrre37okx9QE7TdMF9uwJU9gR",
  "key21": "3TpCkSzNKsfKUij2E3VvcENn875paatsV8LJUoeiWtT9qpQBBg8n6ZNRcmRGMvjCHuMVfZQiTLoaHL3UdHWZFJnV",
  "key22": "3p1d6RPARzSrWUXMDYKDenyVwXTpbyCi3HBYKcNTEwR3BksqhPSiWkZ7xHg2z9rMu6ftPpK7E5ktkVpwwqkMgziP",
  "key23": "3DNejtoBMiu5re2YYPGmqN4srtL4LN81XPFwxKo3yMRpQB83pbPFPg89gJkmujaMRfcy9P9QiJpJYwJDtnLxyrZJ",
  "key24": "44EW8PB5csG1MdV4X2h3fxn65AWJR5tA68Sv8CN9MyaF6QSgRmxbTFqmFjXfkjr5zTBy21trFPk3J6nvyrQpEdG1",
  "key25": "2ft26Ey4nn1ZNzoFuaHQMvHbzcHaPMZUpq5AwcK6uYAtMZhjXQ6k2iqpKmZbguVqVxBChvf5Sik9dp94tc6A314P",
  "key26": "VKXKv4JHtxyR6xZVh3B4sRtyiS8MeWWmf69dAyP32fzNE1nVNMm44fNEH4Fzyni2w37PQ2LA99KcvJFh4kYJR3i",
  "key27": "2gePYs21xNBGMWfRbttYtsFEvBnMzRvqWYACRVMQecDjasnRkSodo4YXwYt3svh92gkNUVnVa87ZQHjWjdbynTTf",
  "key28": "2fcUfSESK2ArujT4Vndf8gfWW4jSrV6s1DWAyk16orwK2MEMHSpwRQHe9LthbW4ZbBjJZUV4SPvaN1JCeRxGZMHr",
  "key29": "5wV6vSuN6dvDpjBy6yiySdvGGXDaLSG8cyoSiDMy3fJBuLduA6YJeaP5y59cgdc6ps84BcmwcNDm3Kjo1LG7SQhp",
  "key30": "2YHsDvDpgAxo8925PKbHeL8Cx3PUvFYXbK1w2eY44biwoe4pJZj7hXj4B4QajQQhH74AW1LEtLeghoutzRHDFuKT",
  "key31": "3p7MBNJhz4RWpCZm8zxSLk6pi4fniqoN56F46Y7SkyARmo9r5Vedn6vCwUxMGfXvoTsQpBgQzjXZ62ai7MQwv6Kz",
  "key32": "39AxPpRwgYLV9fLWbvZYRkHL7HTyJTKCuUptn3apgNmdTgCFVYddU2yNr4hoBM3JE7YcpofSKywMQqEPK2VuBBsC",
  "key33": "5EecQnJmPiBVbv2M7ePFxjD7he1NDsJbswjcbQvUzZSaRLvFSA7BLtZKhVBPqFtACXC8cLfP2B9zgt5y72rFfesj",
  "key34": "eA7keyPjjWp2mR4GMjMEHeQhaj1KNPrfdPDBecSFER39yKCAxpwA3PuH9utKQFtsuRs1auMMXxdTVx9XEHqtR9h",
  "key35": "5pzPxm76DXsZUg26SfnjNMZCHSRRkNFT1dS8eM5cpg3k9oqdmuNLFxf9ojT9Ci5wYumtXQBSyZuqQXcSsN21i2pD",
  "key36": "3KWDGPCdq4XRSYASFKJ92QVqXRYWQibMPGSFKZZzR5s1F62n5YFgJfE2UK28wmLkD5ryXxDWwjQA2LpfBfdo9zNT",
  "key37": "5dbgGqc1WUds9z17MhJRQ5t1DjC561p9ooTn8duVJ6NSgJRVh2z1YZUoG848vJtdvbr1Jr2TjW6aBmgfzzPLDV1i",
  "key38": "4M8TXctLf4kkDypJWeb42Pq6ZdHwqSseRPfCrVho2RiQbup7CkUit7xfNkWbyXvJQEgAeL9wXxhPcUFfA1pL9FBe",
  "key39": "4GLg3SXVpT7o6gyhKoyHpSdGMUYznfW22bEJngqBRMZ7gU72wyMjV5PnYj4ENYUma7AnowQ5LSxDQLzxNrcGGxmT",
  "key40": "6NvbJRd7CmyWLxYEYoHvfz5MnSk9RspsSRz2ARoVJYZCx59FuTgVmwLvymxwAv3JFCuB8dhKZnTxiNDwaC6nA7b",
  "key41": "RTubtHjY6qQvYb9upUzc1DMD5mNnB5eLnUFvDwcpFt1LQZ2YGHa2gxnf55fq2unAtPpeeXeWSjz6GiiYTN6YbvP",
  "key42": "4t9X9ofJgG2NqL4TvRWTaA7MCNfq8qUoYwchwEsoWrG4thYM5asSS9NNFRhVgoBsrrgHGCicoxQbFd3YFE1EC4aJ",
  "key43": "252MwfVzkV5kpxPVeV5B2DK6L9LchCeS8aT5Coj4RS95ZXEfRvHb6q8viksoi67inncvxxbsLAmHmoqSQNAcfk5D",
  "key44": "Tbs4zPTAZXJ5xviStdZHUtudJWgFnmhq4BBp3HbRSURFxKxJjc6v2oDjHn3Q9H1HPvzkVEbMamm79irRstzWhC3",
  "key45": "2jCaqv2cc7qBDKjyWpmfx4qszBwrHtH7LGUXaGMSEN1ysS5zUE6ncGhJJXxNvWR8sN3R16M761FHZvHsFAjeCcNe"
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
