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
    "3iTgM8mXjTEUnvbhZUD13gLPjesoP3eUXjpmuRpuXnQupLnBE7g9sSamnSF228SsrF34oZALJBnexDzTCy2JbLrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YM4CtgKXHpLGRv7quTAb9zjP9ykMAeZXvFkEeSVjye68Zsq9qxPTH1Wje7p2iKuFs7Z6AxakPdyEvadbzG4hMXz",
  "key1": "3gfrFWoYa7JcFBArBHR7ro3JfQfEn1oeH5b63VdSmrp8jstUQghAVLUQUqBNSNySNZ8XezB3k7uyXGGWZxqJTZc4",
  "key2": "4LcMgdECtFYcSnBTZV8tfNZBeJ6m5ivAjzYEpEyteFUyHgFd2BUEuCL89P8pSDCGo9TdNS253Ea9itwUsyaffhDZ",
  "key3": "21J4nwW3w44qB1REd51rQdGDjZo26mdYqwJ45QFzMdeo4dXgvEzzhfkUbh9xS1rViQ8pRhMk2XsuNXscNdJLfgQT",
  "key4": "21k7TRXBB8PMZqgbuGd7162xpfKdKrAu5z1yakizKCapi1WCLdkA3pYGFaDPzudQzHjVTvNLD43Fg62yD43ST4xL",
  "key5": "2JKrn8t5VYj8mAETKNZzX7NwPXAZZt8wxBxbzpgm3wuJt431KftsQ89AdYVTB2YdSHh6mRsvT3ipziuGfsMrzeXa",
  "key6": "3yAMG9q9bzSbkjWdnpGp3NFhxD9pzHQzMmt5n82fsiNFYBSTvvabCcYjsndtAPBanp5k4YmyFgst7USoffsZM2FF",
  "key7": "3hTXCeSkS1wK6vqBhSPZg9UrsV9FYYRJoBjZgsz3eBeYqcuXkRzgVYTmhffXQJHMuM3BzoxnYQbDvrP2KUPoDWsT",
  "key8": "yxF78Mj1iwG4MMA95pcWfcfprdaKJDzp7qKyB3rpJ95hbEpum3ikpsLu9DagfdNRLBVSdq1EnZ56HYTbk4Q6iSd",
  "key9": "q8RwapcChR2aHV1qnDzrR3jxGu5BrsQyVePPwFKVSqAsdmt4VFohyVKoBGqrRfv2FEgksKDrA7MXkA5Fr3um4Ta",
  "key10": "3AK2zRjpszDqCtwYt89F5tSJeZ3Dqa8bVrhj6ZjhaCaqgpS3CwpK1wUqCvWemDQ6B1b1EMTfg1RtBUg96iWWWf2R",
  "key11": "4gJHyAVXUkAaRuLyx3NcwcJTwZm6d3w1uc5PGNGpmxHjQb3Bbxhba99bCYrzKtsNqaArUgFiuts9NkbNEUY57Xgy",
  "key12": "4bnnnrDnvbg6ksua9LpeJexcD8yPtbAq9ZKtLupVRx6hPFfzRqB4uFiKmKQF2GPiquvo3L1Rg3Jq6FZzkxjdeDXc",
  "key13": "5NpfoPiskajd1eYPQb4fPPpHaMJa3oGPTR6AGnTUaMEdjVSRmRS2ZoN5kqEdtBy1DGkgvPTiVHZF1F43xmi29DT8",
  "key14": "ey13WFZ2f9gEiwuX6rauLPtiB72XYXVtyavujQ5XbhqaV1rTEWkzW5F1rJk9m4jiKj5zj9TvYuc12PfgV9fNBfw",
  "key15": "2gvNzWAbjHUXqLfUqdfAhAvQZGHbzN1CqUwL3CQMx2yD2KrnbdHoddTHptEwbsqKPZnAyLXVPPk4YEGBGbtBsxdm",
  "key16": "4HFqKxW5RgyWcNcAtbuXR52N5thNnhmoQZK5CBMv2rmZ1QRYEc8TawN8gBeT2FQZCyoVEs6sTQU4KQbhnXPvw5b6",
  "key17": "5UdmEudp6SStoCi2S6mC5UR1TSNKsXC835NKwyKp4eCdkmPrDgetbeM6Pp7KpkDNY4sGWoZsLim1hveyJmYbohi9",
  "key18": "5BKmSYai51Xm7ezTFhbD9XjuAvoLZmcnNZdydWHNS7mCFPwouwuhj7oEvZjQBhAZv1izEoq4sWxwSLG4hKpAuYNH",
  "key19": "4dRNQ7Q2nemc2B55WAVr6CnfgoDfVsdMRydPHbY9C9g5D7yMvbnYdQGSA3Wo2JPYriTE6M2M39D944wdfCKYNKQv",
  "key20": "4bbNaq6xZcdmfva2hu97MZdh5epw8w25Kk8xFubW6fHoJMQM7RfSMdkmU3tfVq4KvytWCakEhQDVqZUaGR7tMaPd",
  "key21": "5nfHaddpnTPbUAgJM5kZWkJczwUcdtEnJ9MauMAkjGPbK36SLDMqxavZCL3PLvwpFj4Zdug8Jw2zPfk7FPBKW8gv",
  "key22": "3te6Lfk1TEGfMzqrkaRbGeXogcv4M1dC5M4Bkdi9gbyQNVFxKUTh2hCmsc13TMsi3BkRe1FfKpfHC2f89GawP99E",
  "key23": "ze2gQU4K5ZnXBYmy8w1VeMaqSVWokfaURRJMPGWLi2i9nvdrynfKWDrac4QuqRZs3taGZYQQsUdURzs5NVtMJsU",
  "key24": "sgVZRFoZTfxsKNnnmAv7VSZZEh4toS4MmL7rTtNwhi1gYh6PErUX4YeG7w628C8kvTy7Egcy4ACNYGpVJFjSGb1",
  "key25": "5brh4XAYQoLjGibxJRGdDV1hPmtNoahg8Z4DBSXxTHG2mWiGZWcj2ZCAkufEr2tyLoevFjMA8jkSz2gy25NxwMT9",
  "key26": "3HHnT8B5BvaW48VrPjZ8Eqd2JDXco1t6NQNr3JLBqw9Y4bTBpznQDetA5P92KKHrcap47c8Q793zW57T6bPs2XLT",
  "key27": "4TEFtXnZXXDQFgnULiieKJRk98877zVZQygZQAxaaKKzGtikV9V1DdHdhUTe7emrLEKthvGYbu3CEVDs2CavJYQk",
  "key28": "4YaHEd9S5F5GDa2sLPcWhxz2XyNQECS1gwWYiioD9RRm59adRp2ikPRfynfuahwRu1nSSbx9unxMg7MChN7FNADr",
  "key29": "3WgHQCwVwzNwW4WJJfPWve8MaSPN9Pr7vPgu8ynBMHRGmmsgNhjtBygwTz81akc8j7dBQukuyBnJr3HJuvr1GYZS",
  "key30": "5aMVpv6hPP8ogLJPzZUr2Csk1ZtjMYhfZcG5pLFfoC8C8ym6vjCiPR7u24ZRCPfPCVfL3UARm7jjMBnbZig2GPKP",
  "key31": "4Arx5bsXEdSu4M5ZUWpsKojgE1HhSRsCsP5sSfmpSpyBUSw5aW6QkSxhRcts9rn28UHoZHi6t4wCMvhdm8DQGaZQ",
  "key32": "5q7i7oVCTzJVAXraDeAr4JiBbwPQNrQR9DDCc5iXiGipSQksPKtEz6Nqxi45EBG2w6bRwbDrvso3aAjgiwNUwsja",
  "key33": "BJdvL9a1dNwa1Refd45GJd4pXTVUN8RYyhjSu3Zi46Bxj9BVS5N5menMriS1DqAAaoNp87QPFqwSkC3e4mi8Jbf",
  "key34": "T384rfo8kEJ7e1qPmdsoqvrguKqV7KRSHkHueZcR1YHu9U22WapDPHXHenxY7hD5twBaVM1MkdHxqFpqyPGGyUi",
  "key35": "3iNmxx9K9CpYmRtcLPrUF2zJPeLc585aWgFEqg4SA83Bn92y146kKAopY3R9WkZTDFHp4Xd9msa8pgxKQxQdMHE",
  "key36": "KNh7gEwPFcrNQ6TTZCw3qZkv4DhGPcpv18yAw9ZSg1a35R7zHxyjMRFBZPS5CXWi5J9G1J7oAYMJhCS8hNxxsLg",
  "key37": "49CsmtVMVRLAqBY54FQHBespn7sRGmpXyXTMSAtpa6tZQmB7QPWkX18DVauUuKPSCYZYdssmqiWgLWchJ6Zp77wP",
  "key38": "5QE7cDeKpBAnndpudVJh2H2najoNd5tvnmwRL85Krh8ViMejLonJsA9MkrcikPMBTcDo8XckUSe36x6GiRt9XTyv",
  "key39": "3wNWhSprfgruFpBMXLeyQWD9HdPU6CPQbZX97jx82hGx2qxdMyGC6HfJhYfaV3qsNKk6AhrkCptwupG5Q2Ft6xKy",
  "key40": "5Dbipa6FgqPTSJD4KeVqvS74HBk45GHTEEZhET5ZhBjo6gzA474Vic6Z1cLCreqw5xLsCFjYCirYookqS28Yy8H3",
  "key41": "4VCbmYuZvWdfJZTob4rywXmeMxoxDNDLxAveL8ihgbXoGHtCB9mtZ9s9WwpYcoAvNg2z7DzQJRFcHwXvT7HtXzhP",
  "key42": "32yvQqrxZh3HSDnv3WuM4wi4x7UaD5APb8HAdHGiEbEPQ5tWeTx4PtDJiUyzQvax4Nm4XU8w8q2q1kvjLpLDX3NM"
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
