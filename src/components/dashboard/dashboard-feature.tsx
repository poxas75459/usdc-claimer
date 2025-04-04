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
    "3kqcyMHKin3kuYgdMVdnfoGQqFa6nbe8bGvBdh1rBssJ3JfmdVVPbV2Ca1DXtnvuEAv2pd6rdY3LciVGXAAxmP94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uc4UhrbjuofvPTTaozUamCjGVPBx8WvffHMqCuRzbNAmw235kt2eXoYHRYbnL4EdBh8EVgyuryrVpkBbnkkSaGt",
  "key1": "3uxMuBNKfEXmGqZ6xZAgUQz5uYKRAzUqvFaHUpkmwLBjwUZZAzrcFm2n8eM28Q6HtrLPvBMKFuGbxMBZRcyf8BxV",
  "key2": "3twKL2wfhZgUTh8V4AU2KU9aqRmo7nXCtJBtdBZCg3LRxoBVwY9y6BKkUJRsWT5Qz1tq43yHueQssKp2Tru7XsW4",
  "key3": "5cbTEZcKJV98hp6Mo3GHHqQvTn3edxypH2BNtQGZYc2TmcgEhXkuntWe5jEg8vYBBitywvsuL9ZCUSA9w1358HvX",
  "key4": "4VmjEGxC5bBYgVkrPk6VkpdKETJTbTs3TdGwLWdbnsJtTHUj1ynxv6bPHRembCVu74DMixRBwB3EXFjH7RkTSBdq",
  "key5": "hJdtznVFuJiSi7MxqELcrrC6QxGgQyRfXWoakb614UWFwDHFVDjZgth7fqNm8tfXE3Pw5Xv5ihWDMFFPuYqMSFc",
  "key6": "2xqdEcnFBjG7Y2DjGh9bPSPYkXmU3cRWa3yjtjbi9wYz4xFJ91kbB6M6sAQ4okyXBfYHLu3EKnnXCCnQMPngBCMm",
  "key7": "3E8dwA7StCXNNFK3otmvf9SMUuyQyoqJU7KAHSwrFscgxCmqjcM3irwNiL5aDzLdWuHWKShnb6dWyHgLHgLT1dzZ",
  "key8": "3SJL8sjYFcv623oseMbofUeiWSwWFBkzcRXHUjCfijsQ16wox12ENB9fD5USVdqQJmrAW7ZRJ8YiR8XCo9H8hveg",
  "key9": "3gi2q8njpQcoiBaVyhFzkNb3t6wuykTrSUaxBM4UkXdU6R8nWuKfac4fLv1yfdLhV4Zta9bX6foyHwS9dZnpqYYt",
  "key10": "4EuJGjsrQ2oSTi6kM3enbMP8PJx6GcqNRXg9ar3gsg7Kmyakb6UWWgEAeLuqMh1HPDRGHTFcjXKZHqxD5bLmnFmv",
  "key11": "4p72AbJ8JF1H1rZq1dRsPjWYsWeN33ExVeeNYT3FSSyVewNKiAzAd2gX6w1xw5NMrzzFp3kmBrCogynAo9bdB2Vq",
  "key12": "5ch86bcPujBANduLyKkn9wFfoi2mtQ3R87pdHCdNVNviHQ73fc4ydSdxKn6yR7CNE6vpu2erjghBwbfrWHoPdF4n",
  "key13": "5YefURBmQtMtxnR26rAHTp37RqUA83kJNX9tP9jNmUycDow7nwYcegBnHJTcRUGHcfAxQoHDrHkWb4za5PrSH7Ei",
  "key14": "N5npmS4Jbd7m1SYx2JxGXMq5nfEKCM2faa4hy6Tsn9CH3K84DvWPFkFBw81fFDEapWeATH3ovPBHd7SsB6QRJUc",
  "key15": "zoqewAntEwmHe8hdMJT4WdSycEyMTU8ytrDm9wJonrheusV8sFbkU8W4892S6B8WrHDraBVL2Q81qjo5fT4EHJj",
  "key16": "4CQk5Yc4daogbdPf2miLikAK3TxdPyFqLkwzEqTADgUMxaX1TfdovZyu5NH15GShv3Q3KVwaXQZDmL17Bm8hHv1s",
  "key17": "2ZaGUU7sJkysfbd5jFXdUriA2p6zb7t3ciPxHKU8VpXj3WsU6JEokYvGv6hKb15nUMo1Vf6t599BJ1gPiscHGced",
  "key18": "5BfLpyrpVJrXue3CEnwTXQuHLcr1GN2Aga2SaqgcisdwCqF69aUCYv8fdhGYUfv5TPKp1ktAK6zVBw6f1rjUGGSA",
  "key19": "3jLr9hT6EefN7FZwXiNuvy7kXqwmHEfnXCHqmWyBr9ioRG8YpbcFhWkai9Q9zKLLdZ4mRFH1pNYtUFbJwwW9HkZL",
  "key20": "4DssNJiUnhgqAnBUAzhPLjUm76q1DA9HsfyNngeK3rwYrasJP3MB6pk6zR2Vn2F7ujfvK91sVHUbHWVRKFGj6HiL",
  "key21": "JAnntb4SF3HUyf79vEbEUbedvvcc1TeuU2w1tLUwkYfqbdWNmrUGb4tKfJQdGzd4onyf4KQckAxvTWA69ZwY76x",
  "key22": "2dLk2GmdQXu2D35iZ2aRhSfWn2Ce6mb49MiK2ETEB1tF9KMhQBwrCK9WtcHK2t5MghzkVcG6zgWKoWdkYbuyDeD6",
  "key23": "3NN3VSQVuDDjXYLBx5BZc4tsTQu257qWqzTP6sXMCAQtHBtAD8AN22KLmTdD6FtZV6g3cxqqRvomdr5cpqBxbojE",
  "key24": "qLbGoswK5R5YaA9Y2ZgyW86FN2BecvCFjRmLdD5FrvR59wER7CBvPWgNh5UAd1srStvonaVit4XV3YUW7ax97sf",
  "key25": "4hoL6AKCqrFG4g9rnUotMzYbc6XG7MCriDtUmerLsj4ptNzwLNsjoR7YFntUEXmi4hsRcRQL8HYB4XsEWsYvvcgn",
  "key26": "3t2Xyd5pDCBRJ8aNW5eXfVfFxvnEQkrdchmi7Zj2qGyodFfDenxNZCxh4h2QxCyg87Cosbnh6tAapNYSXgvfkTQ2",
  "key27": "2yoLQN7P1UTfU6rcyHBAzsAHy7PSVjzofKtp1Bn6S3SKMnFv6Gpejd2rTGWHYkUYWuZzRUrdqbPJZmbA9FSum4sh",
  "key28": "4K1B8gESDXaQowZPY87rS7Lv7pFgG23YWKbrNVk2j9s4Xf5gjHxbbSccfcsddF4HJH5v6HAQcwhc5QZqoh9CbDXX",
  "key29": "3ysprXwm3asuCfsbhoJTErF3oojP4a4zgaqaacKrf3HZEC8gG9iuPnY3Tk6ACv2mjAYR1sPJ9C9ZUJZBxMmkfy8x",
  "key30": "3SwjMvHzDk9fF4GogAPv9zig6r5UDgUUpeMaxvUhy5S2hX411sfVLoMcFuGcYareEd7eMH7msDf2988xrr3HriKC",
  "key31": "d2dfRjYvrXj3zdHqK9Sqm4SJHFZNW8sKtcNz4cDCS99SPJZuhi3a8RfJLhFwN6aZLJUi3zbGXDzFVUJxfsu8T52",
  "key32": "2KrikJTa5prHVmTKRwopzEbAqgQtynC4Yqw7zKJDCohvVWXWNn5Q3ruHDVWCB5E7may8w7b37RBBZWVYpJwj67jD",
  "key33": "2wL5X9g3S6Ku8hsTkQ5f6Lhg2Ws2iaRfn5WmN84CLZiw9fAR9LiqokeKV6i6nQoDfHkocsxMZ3aJfNQiHenpzvVU",
  "key34": "uDNUgQ92vyozS6kufq9gSQwgZWc1bfsC47geAQjcuSFYsRtM7rbUi79UB5SEF3Hc3PPyXa9GxS7HQZk9wsPqraZ",
  "key35": "rbC8r7X43Pw58dfMFn3F8dSKfWGLzaUC9Gk3SmjCN4bWzw44FGy4v7ZCZkzLD4zmmgJws5TqYTsLqVHip5dGewu",
  "key36": "58djxjH39uQ2DHFkAD4mWRGLTp4sBES1p3gRZJKu2ipo2j34zwsKGRbyH2i3CGjrkzXyagMD7KPEDWrZ13g4TYgo",
  "key37": "U4jsRjXcUNDwpEfSK3apyMHFyTHaoJRrEamCk43XMVpZ5u5RzwLEpCynry38viuRvH7VkrLaK7mnQGaL4Sn9qvE",
  "key38": "4KAs8i5nfadFbkmfsw2v9NJM91bPbcGAqPVEdbV2orqxTc6zDAeXY5883ob94EajNuk6m6oCR33q7civ2TwDta7X",
  "key39": "5C9tZZfJzBofRV9T41wdqQDaBwTWNhLCLxMorKXCf92vLkSysi7GZUMkWpKdi88sumUPzGBjobNcTzN4mAVmUGua"
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
