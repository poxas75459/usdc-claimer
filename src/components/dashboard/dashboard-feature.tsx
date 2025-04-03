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
    "2JsqF9cmiU7SX1GinZRVFyA9u9WJStcvaUyJhyPNzjY7Pv9AGGmwyymWLFgGVD1zshD1qiYN4pUhs63BMR1nurUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V8dGbhhuck9sk655mUPGq4h1YpukoxuoUmgVQq7AW4kLzRp3q24GrkDMaEqX5DmxN7oqHRw5ZuqExRUCFzxESQt",
  "key1": "48MaCqg4ECovMQ4b8hwgyKsVakNJminruqHb9EQtUpcaj3pUmL9dK2DagYSAY7N43WxTZSg5qXxedkvTsYW2mvgs",
  "key2": "2C2QjUS34mK8HHYizZuSGd9b2d8vzTAaekM7CVqRBVw26YWAEa77SL8MbH6fDX5sy6vaXBQLQoMymupMAYGVcZPn",
  "key3": "315tSGaceLLQCP7jMJCg5ZfVoTL4G83qPgjKzr1Do1KWUqeSaUkxF5Q7w6AjdVxnuH1ExL4rXUucT77c49N9pr4p",
  "key4": "5KNsYNJr7JsY1UVSiSLPx7Y6dbNgjZQM3Caqkhh52A9gVye5dkntddckKxiKYvYBc5T2PikprbjrCZd9DVPiGPmk",
  "key5": "2MJY7WZn4cVBF44Pn5A3DVd5sJCi86wajPz9ZxYi5RPMq15LzbwahjdYAmiamzS4LwZXsyhbLnoYqEswj5whmj5F",
  "key6": "331PJKa67sYFor1NTHVVqt74CYgd8Zy6XUWGcit4RUtLhZMGtPLwhh2g2LGHaVLWpGp73j9jjAPmCs6AVgaQn8tx",
  "key7": "4gYj4bRmNsYC9JkvkRKpBuMQSdxoPD51vW2BSyWT1DTeGuYPQd44NTboG7n75DD5seHozcFyr6ab5dqryW7Eueg",
  "key8": "4Hm8b2TbCaocPaySspWbC5NXdxFc7D8ayfgrM4pibSwMt19NUjTU3PXSGSwa6CHMbj6jzkA9rTraV1Q7cSFGzFZ5",
  "key9": "3L9x5U87eidMqtRt1vfz6Noxj2U1kXxRke6Lz4XBwT2PLMxJvM9A5Bsdzp7p5frPQa5vWr13DitSu15Rq8TqfY78",
  "key10": "fM1QtqJkSWZ19TgrfGuHsE8pMDC5vBw75fnVbgCjE3mRzp6X71KyNTLLC5Y64cnaPomPySsFtPtkmYc4j5LYn7a",
  "key11": "4HcdgUwy6R5VLAWUQdx1nv3odjmZzwFYHNW2uZ7nGWdpWn3tNq5k4eAVu2E8HjtFCf4bTVG8mE4aXhMuig9ADQXd",
  "key12": "2oncmqETe76nM1bvre8f7pdhoXtNceS8RHNWNSZNHbhCJBnX21U5Jxt46G5hAfHmR35VM9Ep2j4VqquBA19wAWei",
  "key13": "2m5TVFXsUpeMMaLZnSYsUH9fo6umjK46WJTjCkDv15NZspZMnQtvbx1fKpXne5MCX7drVwkxeHd6ZhmmGGgzCLLf",
  "key14": "4xuMXBnXK8mkhPvUtnzm4GcU8k9Yi6NbaZi9A8pt5pE9DQyVpXudu4Zvu1ZHUaST8bgNceky1wQtRyQEm1my7pgx",
  "key15": "kNrrbmG11epySV66oqB99BupXKE89PdYYY4qTHAHDEwmgDumTnN2XoQGnWCFQC5iCgcmjuJmD5Cq13Uwzz6Vpm2",
  "key16": "3EbPjNdwuyDsYJCBYei2awKUH53LEMTW9RgSwwnQMQ1ZHbvEvhXDeorKrzG75RiTDNcSKQuydU4CX5SwMx8qpXLE",
  "key17": "4M3qWPjGyZsFwsqKxLVmPUBfjYN6krqRMhcnWbq5X6AhdiMonHMXL1PdPDF8GieTi2WXfKbDTjs5Vo81uWai3y6u",
  "key18": "YRUQwsixKKsDxo1icqNg5eyDFS2PJrTr1qAWAjg2Hv8T2s1NHsrLDTgMW6yqeXmhW7grCp6bUhyMdBmwPwkhmu4",
  "key19": "3xXGsnPDXaJL8dqq8Jt3jpA3RG7Mizo4oYK5ryBQqXXV5WY9boKYMqMAEF8YQeAhk42g4danejjzs8NQkQ7CSuL5",
  "key20": "3ZxrTVq3hFxjhWCfSYiC9aGvUKWDmq3JkhNVHLr84U9iWeFPFBd7Q5WSkfFQ8VH7vkQTVxEcZ365ydqqmxm7Bz1v",
  "key21": "31QuH3u2xYvpv9NnDqeEzVgPfo89vQfyYEskFrVrv1exAWPzfYhtMhxwgomYSoCM2zoEHVSAz8pg6yvEK16LEkF",
  "key22": "42ZdyPbdHELS9dUnaR23pRNfhkmx8pN5vbZgUsdGfooonzamH42BFrZ7YUBxZJKV2gfvTnjJ4tSQTRtnLWUW5Tv4",
  "key23": "3VnYaipHDCAgf4KJjZtySvziVBLA8kwL4Mcy6Limr8mQP9tAQTfvRBJSMh5q7fmGBe84jGwnWCXoQ4HLEdgA3xd1",
  "key24": "4vWxzDhBzGwwkoMTPVxzCJB1d35LnYjsj6FFuwTERjNMoUq5eb29f9G5wwCDegaBCSuUhrVBNTobDoEKK3qE5hB3",
  "key25": "5fGV3g89NGJqB12RC67CihLtQ48NgCaUXsz3JYZh37AHyqb7XkDNekgMzHrW7hveaELkTJtQPnxNgx4RkpLSXiAN",
  "key26": "xE2vaQ3Ea9SkPDVFZM4BNmXpbLzXi7uuEuommmLj3Lv25JsKspoqHfaoFSHJU1nBf68q2UXv14HmaWFKaZfVvJ9",
  "key27": "3XALnesjP2dtDk14meR6pQjnjbmUJyiSsSRkX3Q6SPM1CYJB4GCxMbMT8HtnfabueKtWdWPKmfjwmPTPDNoQgvcJ",
  "key28": "3dMgbiGGMVdJCb98uyK5Q2ntLYTCHCv6r6b7ZoJeusS7Adc9PBNXqaH6wsb4mWvrGAs658kgBocMpKioU9yoQWN2",
  "key29": "5WRGLmJHrbmxz8KYfkRERVbY5YdGVJraNg4iTsZxQvTv2MWczMAL3vcyqSibu5hje1fgmumNuw2wLXkVxtEQPct7",
  "key30": "2pw3pbrnFTj7MwBGmfFDAUpNeVfA8BLEhw3ePm4Q3GrWSyMYs7Wa2Z1o9JDCDF6NJ2bVAPmMFS5r8Dz2v2m4NL13",
  "key31": "2ibqbMfroEGhq7cFgJBAKPwWJpABvuFQYKLR4AdGaQxf8JbEKM5eKp53qb8wxXRu3iYVZEcqCvPvSsyh5sJCcVpA",
  "key32": "fUNy7FFBk8X5ERv7Z4Yf7twQJi4PjutkZSJVaFJv5bnmw25r42DdV9Z6ui5rfB4xcaP1TX5ynVeRUBkBy1mT1Gn",
  "key33": "4zy7QG8mDXVoE77Ba66FQtX4MRqc9gby7QCzCKvkdxqZKRUYRngWP3WTZNzjSYC1CAbSTvGeXFKuCR5fwjJHSZ5x",
  "key34": "3GfmvetxT2CuTa88UWzJvtzXb7W7sS6jcU4EJyuC5thvsRRQ9GsGW6sCjnhckQmfiU6B3HrV5pCqE51wMkZw7jDF",
  "key35": "22tGQm3zYqPCk2GpQLW5j1UrwKUB7T2P312Zbd7VSAQuEDNPrS176VvhjpHsbhNFQNauuZbZuDWsnky28Y38LnFe",
  "key36": "qviM4StFa93vSj6pCNyGwbzhqtBkjRuBFA4AVrVdv7QCqR2qiB48QqVHWMvbEQMypZiFnzmnA6Q4CHCBrnPaLkh",
  "key37": "4rM2UtLZZMHH8EkSmNCvMKWQs8emtjbazZF28PsRU5d5MiwL78Tjp4xSKCUG8PG4y6XsJ8rAeytfAMsyZkhgYBVH",
  "key38": "4fdcy1sof1LWGQKN546pC2vJd4DYTtj2twUjLrVmtkVZzaEt7T9H3eacLePjHcbQB1aRMpPuuoa51PX646dZpE8N",
  "key39": "3gPbW4WeWB1G9cfpkFqXzXBRL3XmyUDvxz3DpMMFHtWz29ENJ7jsBmggG5TNzDmEaRguhcPWcXBGZ9ybhtRuXYgL",
  "key40": "495NMb5SfCzHDD7sJAx5g79LQFgYFfpTDjDc4DKB22ZEjpho2pgoG4nqXf5gTM1yRX3QHcJB2rpKw7NsEChr2ReD",
  "key41": "3UdAbMTKpx7i51nLJatQ8mJig5bmWkQZF1Pvykzvjt5DBGXbZzFZz2sPVwxk6yxcjWFqRTrYLGRrY5yvRtRzhMgY"
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
