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
    "5YLtum63jqQvAsU1vCGZ2uYb8Bz7NNzwj61vDHrWgbav1ohfRD9MKnMer9FhnZKi3EhsB4Wm1EyJueeQ6tNTTBC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25j2rHDUsZENc2n9NKeSjEToAJgLbkC3ugJiox2FH9NtASAg2YQc9VVqZ8GM6oP9wQ9DCk1UCoduAzifsSNbv6Tx",
  "key1": "4aXDCcmZZVPDrJ8PPc8j3u3t87K2tp2HdumS9AK5foht7joYYb6W5wVpaBXf5ZaKZvQkZJnRzgFEdFApCXEtY6R5",
  "key2": "2o4yQL5UpAucywtNqdVk7dnDmVxL4foaD2ZhiSkGiSmc1bcqy69Z9zJYHYQ7Wrc1grdaomL3Q7TC9Aby1GxUNDUd",
  "key3": "3KfisJh4KWtuY7LrmaUFBcegHbnjYfqw5fnVwp5Bx464KaAz85Us2mbeUZrsaarsrubM26oNgEtExjgr6PdAH5SJ",
  "key4": "3qMTqnc754Bkdjcm6KwPUyAJPC3FpJQ6UwJh46C77hh5vQ23T9HSG7h74xzhKwrMHQnHbB4gqR4xiyxPxRBqdu9F",
  "key5": "5URzMB57BSBPZAHB9VX8Fhtfqikyx5zzMZKgdzmToBe54RutfwAJbGmR2cTjtUN2E3kuvxH7bFybRfPvs9xcRJza",
  "key6": "Ho9sfpxWsvvn5ty89BbMw1h2eBMs6oc3CUingeFMBmbrEKW3MEudyiG2FdHLk9fabRGLFrYkP2PQ8k2s83WK1nC",
  "key7": "B8HRmsRAZqVgQs3HrHLzkr7JrFV17YpAdA8FnrDCyJURyfCAM6QQCNmgfJiWg4Nx3z4FtgF5FAZZsqHgojZ1HDs",
  "key8": "Q5ZFQ3AWterqqhZJBE8qpkA6EwS8RdNVhoRZ7W7oRqYowqgQRPFwCpFoonqg2zFTX5NcupbjJKCeMopak478rhY",
  "key9": "3ckmK4YWuCbiuiJqSLpC8kQVooeXuctS3X19mFXWpwxVt6CzThFKqYuerCw37ufWFxgaptbfTN26eg6mbRv1Z9wS",
  "key10": "3Vrm2bm4pGiFnkVzHfhtyvZuV2fX32QQnzqAuzXWNmzg2XzUGrS4ifR3u75zR3NPiwkZ3vCGcNJpoFiqeVQ7xCyE",
  "key11": "DgPruEMLak3XeDmGRwGPrS5TDe6qcotCfh6gKb3NtGYqA9uSx3UZ41MF4GbLXUeN32WGjbshSJ8SPbXcjgkLcDW",
  "key12": "FLnwCMMu3yH8vTiSv8KNkCGCZCe5UMNqViRimrzpsyXexhWr7rJfRztNfKremmfEcMvmUDCvV7jUULE5fr7ZnFY",
  "key13": "4YDcvCri4kocsms2y7teeXD4CpSpSVjsRKrqDZ7UQ5KTvsqgh9AvVu6jBzW3UqhzU7AKNnqyzNMyw2Rn7Nm6qPGw",
  "key14": "2aWV4UqGSGT8BidEKpN7dsYUuEJmsKahgUGLDfPzKgeWbKvududGLVS6L6fjduEUcMkzVVkxSTUdZ3PF7suepeBX",
  "key15": "5SgViBccL5oieVoaSvhbHzKQ85aKU8X38DrKcgC989cX9PPjQGyPjq8m8RjpxnLX68PyAA3j54NT2jyHmpNPMkvK",
  "key16": "asK4BVzEfNfW1bWPCXUAj8P2YKKjjo49oGTagjQWYwX742JUC8LPYtTWkYkKyP6WAa5E49DirYwAGH9bYN26D7U",
  "key17": "2kMrWQRQKwonyPDbJVZtitPDhwwFseeEfeaMNqbCz2ti4Uc2ckKHPHxi4vCggVvGFjcTUeuh4fbBgTVufmMKQxc8",
  "key18": "65ebns6dZszo5GeaGdwiyDmWzw8P2pfhiTXQmadLtucjvET4hYw2EUZcVdVYcM42qMxS8vgUcfhzCVoFoRXR5pYk",
  "key19": "5AgNj1MmKQt3o4W9sedW9SwLVQXC4jZGDuVtDdmHA2FVbgLSyR2Zh9M4Ct2oj9saCkjNqUxN5xiWNx4z2EZnMszq",
  "key20": "tG4T2vRD5cKW36tPxJVgrBXZQZ5DjbgURqVg85ZkzuHp6dojLcrLdqrCjMfhkhUixpmcLFE4MH7FG92yA2x7sBu",
  "key21": "2Uwqrnwyfe9D65hdfTT1ASSE68aDcWqRDKXNN7iwEPks2fMVjEmVCdg4BqAa9nsma1BtoYPp6CPVVxeRVV8DAUDk",
  "key22": "5p85SMBtYn7c9wfLkJKrb7fbYxJkkaEk9SmuT8xvR1GmTjnZ5Wtz4jzJuBoyQQfzs6hBj4zUQeED1Eyjoyre3iRb",
  "key23": "5mo4CjRLjsr7KTSTtrPpZZ7cUt59mwsMBwoc3QV3J1sbXGQDYYudkMc3iERAKpAkv28ZCgqHerhaezk9Xy2UnaSD",
  "key24": "2n8qH38EMFFrANoyoy2ibpJQMkYm4nXgZZucmMTYuWykrPCnqwM6SDDPfXQo6cYPrT2gsEuQNzaxwA7KZhZejvTy",
  "key25": "2JUFqVSnK2MRZfVYPWDSzJiVikQ6PN2dsj3C1qPKLULZgUGr5p7nwUXLpGwqnLxkZvBUTb7iMcQ5UYWYU2xc7jRU",
  "key26": "62EG82HS7pDoxhScgF8KuYH1jXA3GK3L9FZgwu2kNX9ye8r3q6fBQVSdWThwZtoYH2sNmKFaqY2LpAU331wTLnhs",
  "key27": "4vbhsMSJtXdDe3Z3bAKMfnRpKsymUts5vft6HNiWDiD9q42FZ8GZ9kvd3vt2Hhgwgzp4y6cEvsHrf6r8qHwjcqpW",
  "key28": "3dvjgVgga79S6LgbBaJ8WgV3e7hAafLfeV9jnMtUuqwPuEcRhriDBN9gCe2JKght5LgxV8YphGAuxWApZSuN4ggX",
  "key29": "5yRprLNokm9JSUPw1rCgrZMtGQdwEeRHS1GaDUfXwqVCWbCpNcHnW1qFusin8cgDJB4bg8m7Z4wzWXismxqccxeE",
  "key30": "2FFWb2NN5ehmbsvVPkAN48ywaCg1QMucGAZFRBvRdFyrRFTZwT4hP6YtwQqWC7NnQ8Y8MwD6NeLBC6oV6haqJpRg",
  "key31": "33SyVSVEPi9cTn7re9LnqafZ4dTirdLMjBfjpmYsYwSanci9Us6LruBZJbX4cnby9H6qDVwbGhFsFzjnL8wnkkjd",
  "key32": "5SfviJRekHTJNRJDdYzXXXyKGzUC7i6E745TLNYmxSf7M3FjPXxavzW2NhJp2qptNzKSn3X7GDmkhu8JYTzPC6UV",
  "key33": "3qHBgvRByo1bcgmeTLajgWmtNXkZMag4RBD1ua5AWZZoECnh2eBazkFMVcxmFx6FtDFbZxAtokkzue2Xo7dwZGkd",
  "key34": "2QRPBF5xBKUe6doB9vstACdvgRYpAqC22rCo6RjvsAfeAKW6rMBVRyu28rADwKKf8Kw6iHfqwE3UJhEXw821Z1He",
  "key35": "7jWT95gdeF6rN7mt1hvJkZSrux6saE3DvVXt2QLFtNPeaH3ggRKypj8T2JQArVuTLYPz31xxbug7KwDauysReDQ",
  "key36": "3FaYBHWPLe1PsYm7V5SS5vivZfqC2UbBbtGR8Rgsqvkn87T1HjKCYCDhLH9LKcqFUzRHsh1P9NqQW8QwN6AhUMpJ",
  "key37": "3AEau2fVimpTRt1wm8U4M9jYWUiSe1SvjVZGC5zcQHbrNDBeGgscyBJBwiyav8eYd466Y962zXNYduznfou1FdnP",
  "key38": "2Yv26hDBzUJg4aDEpqEW6w4HQ6r9fTSkFmqRpSm8JCcQ1PmK3mAL95N9LkSXLxjAAh9gQHSPPggucjomLCC3ypQN",
  "key39": "4L2X2RjWUGtKck19NqZsPFkxWoQ5FsHGNkF55Er77y6SktLPt7X6NqZvNZSaaXyRTdzGktgDLvSk9MpJLgsKgrRL"
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
