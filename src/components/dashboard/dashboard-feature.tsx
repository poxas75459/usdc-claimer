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
    "2pMHTbr7qPh4kjG3umqFwjWxM6w5grDeGQNs2aBgnUB9qj8U5DB2rfawYg7betwjD6PFMtkfeY96pkNc1qcrEzZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "558cwJcztfcP24ocxQbYwHCE3bsd7utfYz91GUfc3qMHbq5Zbwr8MoWd1nRMQyspEZbWj7DDMPfG51m5PjLiaioK",
  "key1": "2czwKvwyz5vUfUtNoqKEvUCn4m4JUMTvBBpaJtmuibK6v3AovXM6U6AcjkUZ6MDqrjzHWS289VKRtZgwNap9XdLM",
  "key2": "4j1NpqqiPkJizzW7HEE4qZ2rHcykErntQtbTuravZ5LBCZ38ENaU2kDy24pSGdL4d7ccaXFWYFWRcZJJmp8pr3d6",
  "key3": "3DrL2zrDFciNeKq39DxNUZZVFW6VyZdDvmEs2qVLcZ7P4STJ1d9TK8rkiiNFVncEuNhoewTpi7nBcWnT79dJBG2y",
  "key4": "2rQEAZcjuugMJBcUkvE7bjfwwSUjYdktMQJLo7irMMMar3TYRoDHSGkcC69h3x2hU1cCZHdRggo7cm5g8LqUArNu",
  "key5": "5B67h6wcebZ5jF974jMyhzMHkYUiUMpVNrQXyxGew4KuZ845sJxmRvEJSCz4kMjpah6PYk7TNLx4CmKJkgx54ELr",
  "key6": "36QXQ3aef79ApVogPEaxNKPPgBeAsNxUGP4mce75ML2VmvHzRS5JKucsvC2Th3u8iVRwEyB8jETZe5oEGxyok2Yr",
  "key7": "iT5Q7HqfXbAUEkRjVUP9Uo4siCY1uZVACWcdsUwSEVacKV5zUVpkFmC9WH9vX7yNXMqTSxqx5LhHgXZjSwRM1cX",
  "key8": "2Q4Mjz23F6L8XJ4idNwwAr9TGVpE4bmqsVbxeQJAqfiKhJwGcrbvhtXqoafZCCxtWH3ivHZKS43onbNutuuqinqy",
  "key9": "4cmg36s67FJ6vdoBWrZirKZioD7vKv3i4JyBgCH4Ze1mhg6nuZoNqCgrTdVKkUp5EuznzpTBPNuU4xd4xg6cjLeC",
  "key10": "5KTJXMbDP31To4fTLGEZeHz2u57bKgBoRsnRr1LQxjitj85y4sFTCPM2RHbdPxqhYZakGRFf24HCCMrKjr6imugh",
  "key11": "61GwucpVe2NFVADo7fMVcXyrRmzCGzixJd13FU6D1CDjxrasCqxGieUHjPVvzMcvP63q8YY8EVb3gUGLAvhuWorb",
  "key12": "3qu4ThJ4UfvR8HHGz3XDJ83y2bwNvLv9D4qic4W9jst7ZJ81tRvL1PZdFHa1KWiofM4JRf3uGvxo5voL984bpLMA",
  "key13": "5jnMo4PwyEpgvZuMzyyUKpg44hU5SShcB6JBh4iU2Xdo7j9hFtkoHfYhPn5HvbZFA7HhwHB2FxQtZASXxaPfVEkN",
  "key14": "42iCZLCm4KFF7sGyN93CSMNuDNmWZPEdKaNKjnJZjv6JXWg6itBiGbaR3sX9PWxHXeN6Ed43andMarRpUVHYixTC",
  "key15": "4mhPYHJKfgYhVhLCTsQSvdRhpbjYpAESqhHddWS1fUrgZaGXqhN6ZUoEYNmiGAetsve3izFukKLXU7stEkWDYazH",
  "key16": "4NnRNQyd7MUeTp8MaEfTZGR2HfcFHfyqFgVG5eHZUFDCVwgrjLSL7EFbSMzx81AadCTKc4K56SPHZpojj8qm4ZqC",
  "key17": "2BUMaqkNteq22ev1kNMbLrjJh8fh1CPLaCHc8AZrHG7ekBzKwRaDao9FcQquY9kP49nZTjiN5t9vCCneSBgWLXcJ",
  "key18": "4jMR9Jza7gp7y5wKjxes91Hxaax6xdCoQRNgBR1UD18fW3V4ujRmt6UYUdWejWEHAPxC24HstbPdCXoxE6jJFKCZ",
  "key19": "2jQDUEtdMqBVLyfJB31qJichnG2CAaDvCBTscxTfAqD2dvMkyAff3yMjaj18Pa7MjUJUXDunKSaZPTYWmw2dMBLG",
  "key20": "4iVAbdNgNZPf8Dzc6CUsuraYKfNnWN2FDfJHpSaMubdwzEsjmnYU4UXycGYQihHhMLWxBePTa9gounPJHhDFHqwK",
  "key21": "3sfmDhyTf7kGARae4PYAbPNYPByEVq2ihi6mRgoCf6HMdrk8ag4g25LmdaNfuZwpdZsrM4Stj52K9jbhsKwR7Nub",
  "key22": "4574bBvUDJHKUDzxhmSrW4jmVEkaCjFrEtGSEPzijMKEbAsjSVtPCuZjTAFuGZ8pqzvDCmJvLYTS8CcLTCpd4iru",
  "key23": "3tYgVLRaZKasfL8rg2T3Lw8zUZjU6ndPwwLDj6RP4u9u1TdAQD2WoSm8n4UnQ74YKHch3oRbevKMZyCCUKMC7pDp",
  "key24": "2NFhxjMqRStmshyABmUjGJ9jAWjNpa6LesWRDgbH8FNWuTUdZVPruE5ghEsFXNriWXESLEeQYiDQ2UmhFUc1tYq1",
  "key25": "4VJte7z84186LxBPS14Mvmr4AaQzpxUy21RZjMWpssLmBQjmgkeiBNjbcifC9ac7D7neTHeUisjL5atULBis1KRM",
  "key26": "2Ep3AtGXiYaX7uvVKvQwjZVxZ4GGV2H7BBzewkb9yVYT9SNGb99z1ShexMNCrEj9Et6eQVbrxF5HRW2ykyRUstvn",
  "key27": "5hDoGmjYMwSM7FQcm5cTcbmjGNSaHwqErfC2SSmP4bo6H2kpo8BkCfAJvu9PWTWDEh1BXomypzeU8vVbcBdLdDtA",
  "key28": "qxZkCjQALVBv3akgLYa9WfyY3qPn4qxJ2dTUJ8Ge3wmXvuFSPTsWXckjnxtErKm3TRL6aT2DRaSVnQfT7vX7U2W",
  "key29": "3Yz1tV74VSd97FJxLP5dYyivtY3AdDbxBBmZYsukBxjfWmcem5jmeo8TvuRJpconWodzUfe1jcPKfdoZTyNoDHtr",
  "key30": "4rNWgPQGQsRgiSQkwega9nnDzQDpwKLLLewn1LJ73Vam21QpjCyHA5ZwZk1A1nrLXeSir3dJRaYRnWRvrE7Pjsws",
  "key31": "2PECM9nKVwpvWqMfs7XqLfgmr5h73Pi1PqbnYsswBunc1NcHEMFiwLxH3D3SZj6BgDhZ7TeaMmUcbNK5rjWwdKt8",
  "key32": "4aDpFwJHwxgfVquQgCgnhNYFHfJsn15SSxL4BsppxfqNnGpoDtJENnZoSxtJSEoXFMsMVBwAjNBXqhRnUo5JHMA1",
  "key33": "Kh3P9Tx6rj83EU1itgi18Lm1F6FW4LkNgRS36DiHeQrTKZSsf2g8Mia3CC8Cne3JTvWzALQz8ZkbhH7o4HNvaT2",
  "key34": "3nCAGzbq3n7U3pzYXJg45Ni5DrC2yTQUbMixffSu2UgfMeydLTE4wR6Et9xpYYGpPLMyjDiXYfw3HF94XkvPbxNa",
  "key35": "394xK9eRdLszLJ79Gi7Htbp6gzR6N18DVw4amJkxo4CwpPg1X9ykyoxnCFkxAQ4aTiEmj339ctpnJtB7dRf3J7LS",
  "key36": "4AzRnbj6pqKeqL4K8rVSZgrpQ2m9cakmx86HtY7GkHNVhkTQxEjZNPf57qaKdSoxLfLEy5DqUmHtNs64V6QgMffV",
  "key37": "2gb2zXHWt6nFFkVST6rSqFS3MGWi4jQJXSFPzkR1MCGDPG5nHgK6VCYT2K43fDuqWUbqoLBet24JKos78yVgvV5K",
  "key38": "52qcmoAHD9etjGoPZdMjk3uQD8B9QwABjdzwAFhKwQG54Y2Ejfk4F8YA3Hn3pADYb1UVWPp3Nv8eqc16HN8ZinXQ"
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
