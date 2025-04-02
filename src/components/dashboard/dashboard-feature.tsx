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
    "ffTrBpL6AB5kn69CSHeAPUA2Y9mFdmibHna26ULUcXp1FAuFU8j77QDWEo2LzPtaJ6JWwYS3fmwwEUKNAL9naSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RtvEsZ1e9kbhoGHbspm97VSkd2AdXNGCzX3AxqCap9bYhJ181vuCuFFUXwqrqmaJt9MQDRSKYdsnDW9fafFrT1v",
  "key1": "2v7jwBxKvkSuWt52sDSM6ihSTr5zifjV966iyBSFVQsuAspA6fkst2ZchE6yPjKPP62QaQxRnDypJATCgHMBKqT4",
  "key2": "2wThjY8cpS7DR42Rqs2aBkJs2Y4cStQpX5FVyj2cGAUZJfQkjDSmh64J6QbA31zuDqjyfi3Gx7e6Q6R1wezX3KYP",
  "key3": "onCgTuyjZydKPoabQRgrP2a5demdv4neoznj8ypSy4B8LnXkpzddYUDb2dZRjaYBMzTpTggNqNiz6MruS5wGWJ2",
  "key4": "4wi8hP6RoVbHdGoM5pVQSH94iy6thS2JcxQkA5M9QDdysdv2Kg1KNEnwXR5aeQG6G3Mbnpk9bbXSEhaYaNPM3BTj",
  "key5": "4iDD2MQSKLv7NyoHczR7aFJW7Mk7TvWYRL4qJtauMjEHMd77D94Hr4ggsjgutpEhZqqFaXvZLn5NC3BEeqXHPgbr",
  "key6": "589QQBvbmNdMRdCShM7aXjfSBh2UHEy35WbPT8w4SiC7cZ27nXhBhUsCCtrjV8XxvRC3Kj4ey3ZcMefRGsDuYXMb",
  "key7": "dnGhgMcCKtgXvBNrrzk7s7YnhBpXYRy8MoCA2m2Ptj6U4upa1NycFtt72cFuYvFZ3v9gmY5MstBfjhmt6gQva8N",
  "key8": "siuNGkUDTAfcfwduMCua2YvahxU7mLXL6tyfMqeAsbPRKvCcnjfDdsNCTGCdqyqhgvkTgeWqLiDLPaD1af1uYPV",
  "key9": "2CMJZCwWEaeCuuJfz4A4Zd9Rw4AyNpb4LVk18hA8zAPrmyThNi77mrtKRzWC2eiTYhX4fDkTogQTr5zUZuhyyXLB",
  "key10": "2a3cRnMtx3gS7PWVjmiWDWafWZGP8jwtKUJuRQkgsW9SCEYfyrU9M9iknVY9k7V4BSHGoXQWAoHt2CDQZaBg8aGn",
  "key11": "2siZZME3NgDRmZWNHZaoUmnfyfomq4ADzSFH1PnJ1igrnnYLEgp3stT9BvahfJg1oyPAfYLBzRGcKVwmK9ggpxZ4",
  "key12": "t4jRv3rUNEyUpA1VMpCcUrcPtmTpFmU5pQ2ey4vZr9KQqmQXm2aAFfBejqLiMLdY92z8LJUPh24PwYph8LgHRhi",
  "key13": "4VKqsPVkuS7U5UcTWVkJwc8Q462xPLWyxcyQgfJS1y7YGqR9jAmwmMZH7oHVk9JyVy2gq4QnA8aLnrqUjz3dt4Yh",
  "key14": "5j3UhM4DpPfbL8TAbZPtNqR3XkBS7FZwt7J5mBMEu2nxZAKERjGugGj2kSj9n5mnRPEeHVWmGyMj7cmztM7TcDjy",
  "key15": "4HNNwBBda2QYJkYvKHpEpCkRcWgEkTuKxYV46yxYgqngVJ2kgrQeHxbvphikKJAV3m94hbWxRp2TmhKX23YoPLqo",
  "key16": "5zRAQe8iJELJviuFM1yDgFgeitt6QcjSy6tZmPF52EsSZtLxCvDNhf6DzP8pSFX7LKQzv77ELMBNk28trLTS5U6a",
  "key17": "2c6sN445uEvNaDPcb5PmYCQgCTdbH2REq6TxV4wFvXFrJgyCLCMsK7NwGpP8R7z9orfCwdYd2Y7cFjVQDeqabqSr",
  "key18": "3J2aLCXBoWdtE2vKEJhRzQVvYBq58HL5qdnbBHfuNvrXw3tfJVSrvBHbSM4EDbw2bPBm47JbFV1Yne43RXc89iPs",
  "key19": "3vodCiC5azmY8T22JbJjKA4GBmJvZwnxtMr1qg6g2dPCRepePsxMYPvppUCu1FVY3fp2vsNXKaeYBx45PjDq58ki",
  "key20": "3w8cgWodZwyD391aZwxmTR2YFE8HoejSTLY9xc6FYPQaaNH2VFeXVg4TmHnX698GhhVF4Etpv8PsgqXEaDo4Dtqd",
  "key21": "3VrLceoBRuECuLY4hwPE7vzAho8WQRKtD8LvdNKF7LL79StrLPU8kB5q5DhGNC2q4X43LKSbtuTgSXa4seyc6gkq",
  "key22": "4UfUJz9DokKgiV4fNqsv1xAAYWs2bJAiWNUcy85Wxm164DnYEfoakyCXkUmW4WMWN2vekp64SgtENSPjg3isvBF1",
  "key23": "HPsiJ7xAhYBu3SSQDEHGQughhMA3RJ82n6bokGdxPBqx4j2QePdtbeGputTC4X3qaFtMJmQJapZ3tFfiN1wb3dY",
  "key24": "2LLAQFwhLUs2kPpswMyUAsibY4kFvr7UaTckpki4uj93qjJ8nqECn27wgSYtDNUrJQMwnBc4LTMAzCK2oRs29boD",
  "key25": "4XFpWY5fx8XpAjKy7GFXPWBEhX1AhqTTVeAVaLGvDxemtutMN7P5WR4TM2afVb4RJ9im9ZA2jXC7eDZVnMHeKGcG",
  "key26": "3cijoMadK15tCmZJhppSJqkHK4nm6U2ZxekjhHUZbLio5SAeJkW52TdBcDQ97JC5t4mKa7ATNqeHQ6sxzwaFZ89z",
  "key27": "125RNv5Hrq71BG23beKmTych9sbmGUrxAKwkqMZoykRYDBJDbu1RUGqYW7kTvVBwsT6u3Zx1H7J3N2qovFKNkKYt",
  "key28": "4PZGhPK1hLGJL8rLsrzTb9JGzapBKrbT1eDSuicyNLYLdETvnfNgtf1uyjg7YttuyrM5cwi46Qu3gFpHZq8HpDi3",
  "key29": "2hw8BiTNThqaHxEtj9EALnidBCByPBYPBoGq7nWU8xtPf5faZ2MaFQd1Nj9AK4CbNguTe6gJTsZYNkYBdozfQoKN",
  "key30": "45P7pt1h6HE59tz6gyJgkx96Wt9PvcNjtp6JwbpnPqU57C4SnmDyCGV8U41HNkJv7wCoHnN5LJYSLUhcGH2AFg2P",
  "key31": "3yzXyJNx67qttrzTsyr4xNsntj34mygiYNbEiNyTVjFr9ASpY8QGPAaXGehwpMskGiTRUJrXaE8uJjiZHHXfcVnt",
  "key32": "3FKQqpXgCG5K5SMcisZ6EH5H6ooK1UFN2TrGM61P9myANT6R5kpWDUwicaHrZCRUJcmjRJVRiNp1fyE9qQ44EfLs",
  "key33": "9u13p6QTdx7TXWDU8suLjrgWertwiWoJFfrCPyUru7fCuFsrCjA4hGWAjFN9XnmNrUjedqSxZuWwTgiY452ZYbi",
  "key34": "5dX9Lq1jr8RMFvCkQxHW7nUwHzpMjbRd2s7JRyZYGV3DFmFNV31xpaiBQVYQoGuXXWFpugJmpxLPoRikA4XAAYe",
  "key35": "Z9rEi51yqRVpG51yusbZiJ1pw5rJkk3yeNWVVcT5fJqF75aAVGcnY7PHrMy6g3QPhWXzQ7r1B1GnaYHBZCyU2oG",
  "key36": "4j2qWxE3xpTWb4qQK1mz4biKzSvc9NRNAA2BcfWKNf7rFbLeFbw4ry3eQagusPkkacj1NfUGy1PvgitfNgq4oRNB",
  "key37": "2EbFRVBRfeNCuu6Pcr5EREz1kyW3eGLz7HuYCtHHx15vVzdPGEJvwvYXU1NNktve6ZrmY3GDCDCgXcjshmgFiVbe"
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
