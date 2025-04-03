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
    "3H5e9tNQdyV5xWmAEfDynfqQQGLFb5bL4nJJSzC6BXuasoPc5WftpQKM9sgiijKrG5cJDrKBV4xJgZP1UYske5JL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eHAdKYimr4w5K2EhwVDFbGkoM9REGm5eK6Hfq3zYAo3Es2xG3euAScWXH2X7dXcPRKDr15RTiCWSkTD5By3PUM6",
  "key1": "5bqHJE2sJbD6rjBAr6wmizAHxYLNkXC1y6NGRV1Li5TdRJP9xYvRibsiRkhF32BsYQZqd6qSo5Tc5xAdYeRLX8kj",
  "key2": "4fJH6xwnPVvewFKNXFmx7pqBi2r3LxxyvTasBakvJX7Pivi8RhkTVZUqWJrNRdHukWXxXjsiMvPkckrAARLVmKxV",
  "key3": "KjWNdQ83RqAMZrUUBYS8VeRym2ni7EeW2jymmnuoovLMpwhh5LoFgVwECAftRCbm6feHA57KrAHoLyLPtBVxhmC",
  "key4": "4cHUcDcgCy8Reg84K9vAeC84jPtv7e26fkYEBUna1cZATMmaZbfbiFJA1PknSU8iae3PxfL1UREY7iYYVrZ3krCU",
  "key5": "2zryQp3ex4M7imeQwbJ1wvZXdk3fr9tdY7iGmyXkNyy3gt9dZTCRkUdLonkamjBySVfRpJ17KqTJcStJKvdfRUx2",
  "key6": "3ZE9QvBmRacGFodBPhmjYWfiTkB6GXv8Rn8vYcKSCnUr3PZoPLKZ9Cb62ok4vmqZSKT8ea2SLJmXoCsR5cGasz81",
  "key7": "2Zat2ShjedRp61Ae9rqiBrcx93HCK1Fzb3A3kXdHn9CVRKd7YQZPqD4HctKks1XPkBnX2HQx1H9jj8CSvxutSRv2",
  "key8": "KDpBnrMQFwmcr3pzSxKNUTq5xrryUewJWoEQWHEMAU8UXT4oW1aVMDJhjXoV1T98eNJUX4T6EJy3iMm9ky5XQ6L",
  "key9": "3qKj8Lsz51gZPzM2Gzg3JJ9MiXMWaP3xpbcVgKEjdrc89BQndHGYZg32i6RWzr2T3kAR69QyHNz65kzBjm9nGnqT",
  "key10": "632kHjcFbkWwVrNdRr847dsZ1VqWc9UnkmYaTqmSEC73azLByhSo12KnGFZ9KsvUEyDZWcQc44jR2aruvJUnTQYW",
  "key11": "bHayr44VCCby6W2pgqpYnk12xkeaxK3tdnnvvDGkkhaM93zEyJgt4KamdBzZTxxd3wesy9cKmXRQRraohNptK8A",
  "key12": "xty9PJx2rpifpmGSedPUWZoLAd5dbaJB4pyE5ifaZCN7Z2uuyYHR6Fc76PGrSrG2jAa3ESXQc4LANDuia3F2P3e",
  "key13": "2GomttRiw3VzMMhe6aY8q4AFiBPSbUv3c6advLid7ndT6nZQ2boHAhakCGTX9V3EeYrXJrQpwZaYAw8HYceHUQDi",
  "key14": "2xWQxREsxn85Sxu16H3k79Q4k5jmtUpfQ8hrS4seXfLeP9y3fPXjU88VXA1Mb4rG9AGPpUy6nCQLdgLMgKTRhJtL",
  "key15": "2y2NXFF1HksCAkSJJMkE5L9ggRhYGAGmrtqpoqq7rsYmE9GcfwZ1u5TGqJ7GoT38i34ATB1z3Zr5M4QH3T8XVz7z",
  "key16": "4b2eqNWSkt6C7RasH3YyeDW11fg6aWnfbhN9vSqrWC5PoPnJzeofjHm46RBDX5BGSovusWxuGxbQDnoxQ1cy7AWP",
  "key17": "ZtrLgvjVMRjBEAcM83HxezvsUmx1PMFpHBbH3CuWABN4mUzUWqiyACxDnEq9mC7gPVmTkQvpYJNUJ7E3HfFEB8D",
  "key18": "exvy65pzXwMaiFhVqrSaaGyj5xWsmdi8KhaxgBx8Aj5Se6M1Z1qVEgm16KG1Nfyir3BNwDrEy8J2kPm6mv2Z8fL",
  "key19": "3BbShGR7bQbG8i5keM71TJfGdbpU5oAukUF73rLzGQZ6pWbxTFwoZ2m7KJuTxrtHsJh1uh41crUbreYdSAPMH58U",
  "key20": "5vsP6iEWNJ4zhPnyjo89JMVqYKYcRyX2vFYBHV47AM9nFLFJeW7DFxaGJA7Ar9C16WKKgQ22kPKqecERjZsZnmjW",
  "key21": "5DEEnqYhY8BEaAmNhWrYRwtCndih5AseNeKYNbEz7xwEJymJfU3D838PF5zYGbTmna7Lwo3P1Qe9xU4o2hi4Gbnz",
  "key22": "2dTdP8aTcquZ5KVMVkY48Vq9sBAb9zuu5wD3v7EBUJVkEuDSrHefpH8XUz8vAJR8A89cutLF4tQwdJK7UZRvM24p",
  "key23": "5jo7zQU5Ng4yNAtn6ftynNZButN1ztY2XMwvZ6NbUAGu97nVGwhcP4GJdsht1Fzjw11oczcfrsWJQcGFiWw37JRC",
  "key24": "2aaoFWr7A6aHVPfk1sUkLVRNhSknAD2Eb28d2bATZ43q9Lu1inuDpPMaXKpiBDb383LUmoKf8D1nSWL9ovJ1jd1E",
  "key25": "4wcKoNSvryDGRVTwAFHTkVsbLymLZBHVRdHFEkKRBiS8ivrzJSaP3yyWnQeQJZpoAbp23owdqXa6AuG2n2ekvWT4",
  "key26": "4qkKotn9AeWxvSNN52TTVU1R27LVuEV2HTyGhupgawYyopXNCkeykFfsra5Re4SJJPwP9BZwFaqB471SadyoX7RP",
  "key27": "4d4FadZ27nGeTmQTCN1JxrBbPPpSk7eZBkXEB7sN8M4NdLtjxuJ8fj4BUCtUbhsPk74rkQcXtBmE16W52Dvks9Mh",
  "key28": "4NQqPnGh1wc4R6Un9TDqHzRk69nZmgCAegCG457Fy8PomQsFNZEynCkqAppicva5t5XJgqpq1NSnfvJ3PJGnWpHS",
  "key29": "2MSRgXJmg1Tb58ZQswo8n2HBaj7h6depyEEwzwzifDLj5QknffUES6TYvZnja2DVkfVNX8xvbnsyJesvSZ6UDhbZ",
  "key30": "5opWearvEMjZcQJAWjCEu14ZQ9mZ98vxF2PaXzGTHsYPBeTrYWmouJzbEeAH1NJyEfgT7QzsybR2eyiFqTpbm8i",
  "key31": "4aPpU5jsEyuaS1GAoyTQkUTAPDMfsstDda783jLUK11WdFM2Y9GgKtJxUHFp39eZodJBaMkEij9QpmQLCNtqk85w",
  "key32": "iCY3ca2HbQDzHxmBNaTWTu1EbrfLpYKkzkYZBnMWaVJ55bXzQ7N7jc7qX133gANH4Xy6RAKW9qzghQTvdzYH5ya",
  "key33": "3zb5DX1TXaQ3HF1fbjNzZ5p78YGhbL5JGhSd9UTRdZxyp7SCd2rQaoza2kQ6cfHceb6QVa14xNWNsGTYwKw2rE75",
  "key34": "2sgfufSd28BRPeQFD4yP5948CnGQTNhRRKkep71w7BJBD2foLgqhojRvjpBYzpwZ9zFSpkZqqwPbmGamA1BRjCdk",
  "key35": "4Rgoa1PjuBMYGHMvXBve1trq143x2QmgzoihtWzU7jqRtE36JihzHPnjVDmJPjLXqUg63wy3UhgNrEqmKB7BciJY",
  "key36": "2fAnvAB8MEZaiKK7AYsz47qHt25yZ2eg8mmsw91wvkazDHwUJDafbvk3xTgh9ffpSkvMRuhjBbBncQ1pC47QHxay",
  "key37": "DWhvBmndmMpFNPH6d31gguwc2GS5fYyv1Kh6B1guzHkEebdD8ygDJSoGHB1FdUjwR28C1TXaSEXt2h6Sewy1csj",
  "key38": "4NJf4hdF8RM4pHSC3JPANMqghubJbGsUeKkqgEowuy2omtnNefBWCSDQyii39GWdQC5BDFDwxJUm3DYVSQHiJtzA",
  "key39": "3LQNX87rLNk9FzGqzLDRRewvokFsXD6Yhx6UKq2HGZ5yGcrV6oj7Zy3sz7BJzNUKyK2CJTahcQnQH8WhJEgiBaHx",
  "key40": "65xYSHPZn8GF4CXXvhxhw989M7MYwhJMt4LQM4dRAHPm3DuomHEAa2PPkh5HmDkpx3eyVo3FJDrQxMEeG29wQN49",
  "key41": "34ns6qwXWD7xjJTNRVuUn85T2sKoEtDK8DnbAKdsTmb6KyKHbwM2HojrZaTCTA7w1REMyVuVQZP84HR3sy5VTD7j",
  "key42": "28gVyCNxUCUCs1uLENqhTceZCDwxaNGyFc6hL5DHYVtUCw2rJ7Y6bacHgfL5ZR64Myw3CKMfA8GNp2cznpz597bB",
  "key43": "6pqSWDtxvR2QE8yf8FgTrAVr8kbfayGugfSJgFVJanvLiRjGo2LsbMaokW7PyHTi4GYvmJYsBxTNpBrsWG5CDrq",
  "key44": "4a6Rf2kz7JiGu28GXZsdxakyFBvpUsGKtU1eYQwroPS81aKqKX4DJ8mPBL8vcifp67CbB5rEeeCww5PXATkDAUas",
  "key45": "5WgV2P2hUiUGo2P9CDgtX7ZQCz9LXLEMM6GrZCCtnsavBCrxNZCgTpSg6Az6bKAiEuM8JN4hem7WJvKrZ5zmh4pV"
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
