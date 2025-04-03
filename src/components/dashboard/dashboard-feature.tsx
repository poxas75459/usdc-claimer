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
    "VFfd6vdDfV5Xv8trayPtCXsbchQd5WjJ7apfCHvMMLtWiDkkwVTUfEmBG61d8XxNyGyBCNeLcZqqYKtVxGWa8V9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Hed9XPCKZ8SutJoWaRtRUK6hpZd7tDUKpCNy9DGe18T5NjA4aHWYNYjitooJWUxn6VmdWEK5XfevANGA7LUHgY",
  "key1": "5vnVSmMHrT5NFuNWQa8WVZCXkvAR9a76tXiTgGvYMG2ynpHnmJYwm2Y92nfLfwktxMsuoryhpKAWZe8ojLvq52AT",
  "key2": "3zcrccQpMin86RCQsRv635wexT1oZUG7UQnNs1wp3cF8aUqckjN9ZHbWAahWuvxXRNfxYVSoUbyPuUuiqLcJcF8n",
  "key3": "C3sbUEpHBpGh57FxJ7fJyeihAS6TFoDbfC3oMak7fnE4FVMfapuRCaQjuTwrK498WRmWSAZSvJxibTqM49kDQ3W",
  "key4": "S9z7c7QVmWGnFMp6cXdNhycwA2S1eBoqREB8Ee4d8cMFSacAugW7Btj5FfRa5zFH3A5iQrNAPmtXzj7uCvJ74Li",
  "key5": "4F99sKgyrgQdZK3Pnef3cnHGPUYbQdxRs1jYn3V8hxvg9KEvvjW5wqvmYoNGYTWv7r57MDeaRDE53gHpvexQ5rjX",
  "key6": "3DAo76usR2VPzSHrvrCJgn52Ah7WSacABvqGMgHMTg6jDk9yLpU7XM2nzXUWP41TwLpr13GSWVskU9J7LA1Qtnjo",
  "key7": "ycgptuJpH8q2x7b7eDFHKXN7jafJRQvX9Q7NQc9KPiRZyYt4gezvr8FwnxGdjF5UTy8cun6CLx9wAHt61qB7Kh9",
  "key8": "4PrRjUydkV4ALJPzH8FZDE1Pd8D4kr169L4TdTnruRQ89Bame2oqZXoEF4ZvV1NCF3axXz8X3k8iM9d1PzznJ4mp",
  "key9": "6475qwQN9mYdw2JQa2CeEjBDq4x3AsFXRYM4V6M7pPwt3336SHvEptJ1nKzSdMZp3DdhV3xzbN8BGGTp7prCUPY",
  "key10": "2banhokFqLwLvotqHMKsR46CozmPmPc8EfoUfycKZdPY2sqiZmW4rCRMd5Y67zLnyjAcaiso86WTZA8JudgQ1ppi",
  "key11": "t9vyLUyV25xj341LgR1D2rnkPmWtHG6xfW6Src7AgqCv7BYcuhehe9jxtbUrZW3sNfFRf79xWqcwsELQwW1aDF7",
  "key12": "3R5Qrn8g6NQ2LMUdHgP78CB4b13YuNGy62uciwkAQ8QMLoQCjNNSSE6hUHn9SajcUbxkFVygJ6L7DxAX5xLeoHmg",
  "key13": "5fz17kYyvoj9YD9kytobYnC6GRF7jgXmQkn5GBJ6TAKPQCRtWULSzvCs62YEfxDRD2jquyoDsMnv1y2TXUYeYope",
  "key14": "4cY9RDfVhNVXorv3ktgZgSQd1hu4bPT9tMJWiW1o2Dfaw6UJHakaMBhmmqkju3qfhAcedv11mbixkR3Rkqc3pat",
  "key15": "52aPoeytS43HUrNrMvGgDG6i2C2Kies4YDdPMvvRQmSYo5fKKYCjt1Y8V8zuH6H2MHuLmYkMPx9edQRUjZf6HmX",
  "key16": "g9vzhVyahgpVKbWian1x6jK4ijqFkLoxwLNmFLFjRqoRaMSzuwJwMarNFEum7YzsQd11kRMqEUURiwrgfGVDCzz",
  "key17": "5wc4BaWP5ajNdgwXhG8y895HYv1WRLQViCtizcKbHDBD1c29xMqXUkgEgAFd9ghTbRY9z7Xf7whvHYsYFuPzwEFH",
  "key18": "XCjdETzjs8QWdCHWin55i9uTCveYeupG9tbsDGzLVRFQ95iUswgtVbHswza7d3QGjC9bZBVcxAnJHxhL3qXJS6R",
  "key19": "4XiSfXNuj5XyGWrLgqdEkQ5VBYRxbb7P2FWhsMeACV9DDtvM2PfT9LgsfzguLtsFa3g4Rrzu5vQBJhdrW3CG3LqE",
  "key20": "4nomAGLgACek2sPc6XM58AcWvQTenzeAeq3ysxzUiAnUiYa4EWa6VCfYjsTt5nTog29aaDs7KCEq6QJSMyU673t4",
  "key21": "5TGTmcXqqzD5NNWabp9dw4e6UbYm6xfobT2bXtLWqoWSdBCmwqaKD2YKF8wXyGHQPuRtKMhB43hNdwRkyq25zEXb",
  "key22": "JxnV44FWREJCP27W2GpnEMPZfiNR7AEjqiJh1SczWYCCsDwTbbYpJ7ZKy3j1nvaVQ6N7c5xZAkfwHqyLrWgYV6J",
  "key23": "3GyjQQkP95yQLwp4vxPtGqPFeAqt9A9iQie5FKi3WYu6eU3uUnEMRaC9qvsuLhL19TCyb1gu8jbT291WXowe9MVy",
  "key24": "PfgR17PLgfVQorwmZWdhE9WjLsj7gwncfPcAxH3uc2mY8iUcsLWoCiqxnLQGyiCsJEtEpkZJQYTmqLma2YJ5LiD",
  "key25": "4buWBVqsAnwFDZf7rRtDoepxzyE8NFNFn3xiNaTC9FgwADYFy49o4wDPB1QYGc4sRWQBsH8vvMPRcQpEUet5Uxkz",
  "key26": "PgumTGAhfQywM1eupTFHcSKac6zosuqrfvqxUJx8pfNpUaSSvZGZmXut7wg3KUQgfhbYhU991AtsNDBsrJdPb61",
  "key27": "49iwdkgXNSFESiSuNydS6rQeea5e8KgApx4kEjka79sczxbm5pQ94UJzkXWqEkgwr5hvaQwqvEt6ZrVr7TwRuEsF",
  "key28": "5yWWfH15bXrKqezsGUMZHnVxxMEd9w1HkJcxXCuQ4dpfNVVNMKzFGHnAoVJf7vD67MBiEnnQ5fFfjTQfVgmYDSiM",
  "key29": "cSnMDpA9Fxmn4abAcsECiDpH1Xtfxfjn9W49EeBMK1BAeDsr4QHFpKJ4p34nRJNGk298FrzrmzoA3gdC6yXSLos",
  "key30": "396QQjrw2kjJEphmyNt1dDzeaY6fWx1bvb48kbCboNYNFKd19DB1iLZuoiDYqZsawQmxPTPFKGX6q8cAbvfV6Tus",
  "key31": "3RsKrKy6jDoc5fK96ZLWYp4XWos1XHfFS9gvuax9oAWqJDBZkCUMoeqVbN7iYtTBcdYXFWq3SZbD1ickP5aC3Jgm",
  "key32": "5kZrrXYE4KFaAbbVCCcLr2iUAhyjfYeMeXD3fmG1PW124XhNPSmoYomKnmtE4ynUinCAbXQnBJ5CF7B9cuAKTfmC",
  "key33": "5CzNuMBDfES3F2k4iGUYTKkxa2AnL7JKs2UQiPY8yadtHMnfDWQvvWT8QYCEXzxMvpRMjkPSTaQidssVgPSA9tEM",
  "key34": "3o9bXFpwvd2t2598jnEaQuMM8bVi5573Sab1GYN3iw6y88xWNjcoysCP2XQLeRpwLRuKyg6zLboQbDCJDL3XKyck",
  "key35": "T9hGMfGDuK3chPDkLv5DP7QgWKXpSp2vAw5RrrjyEosKmLfi8iPx8koSQEW34NUn9FrstKYvaoaNAKosWA4cZkP",
  "key36": "3WGbEv4nTHmzC6Wab6pvszU4W9fi1iBZfR9nesyAnbD9WEcuBPdN17zMSHWcFhBRoJtr3CJWd6Satf7xHcngFf3g",
  "key37": "5bjYD2PzQXS8Sb4Va8p6YjAc368JmR8fKXchaDDd3EdU2RAeTWK7D8xkwobzxav2FMqLSZHJU1HZfLKVYHfAsUEL",
  "key38": "8Ab9BSaje1nKTeXiN9CpPg92Cu5ULUTPwbAw6x9dvrh3nQqpMwyLJ2HyDjB4RvxyCwA8JAtmEEe7iAPg6nXjWBg",
  "key39": "yjf7fiUa37EYAwWp5Rd3bFzrc4qyTKWTWUpuqz3pdz7DmAQq2ATQk6hLvuGWb5PAa7nMDDnfBnqhmFntsEReV96",
  "key40": "MxoSJZnhyU2km4k1WQk3ibkX8agBGVTj6uUazTxXqBoCUCg5YHcwRRDVK8QnCiGPSpfEUX5EC2nDPcw7tEN6Dur",
  "key41": "5HWA14sKVq8EkdwDYfQk56CHEcsYSj813okxfhXLpYenKiwAzTq7UQEVwhN6UZUgbaLraRPuQdedfwLutd7ZAs8o",
  "key42": "37XCeCDjzqsQXWjVmpo56ugtmrCy5iaxHf2PRhy7bVsrXqcwHnRSB5LuJSLGSWKTPXvBg3aLe9SEvMdomNW63cLC",
  "key43": "3k9PBC1VTAJziTgvhvPpSFP7LPLnmCj3s3mPiwwdY1VPfXDMinvztf3VkL6dJGp1pQYqWLWsedDa7yk37rAfqyzH",
  "key44": "4K9amXfKmKDr7xFaMUyNR5Tp3zZ6ufUorUoZSPUXmKKqsC15RA6AqXneM2zdZFkPNKyGpjokZe6Va8ejBT7G89Zz"
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
