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
    "2uLQ2XqMQ6JA4s7sTh2jDeEydz8DNjuZFN4GERBX9jkk9LuhoiQAPy2WDe7s2j3k3seonXeQN2Sdg7BRpMatoGZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P858u2yHpYiGQtGSCVZL1t4XmoANG9X2X8Rjiro5kdoFqVFA9PagP2fW2efip8xz9yprJy2SSJJB6QMRgha7x5J",
  "key1": "4BieRkf7JRKnRdgNRTn7kuJCwLUeVzkHdfcaLzKymA6uUiHaqC79Q8F7svzL7yfXyRsHTC6vtaQCLqss6KAS24ob",
  "key2": "2MFC8psRt9NLDfdwKAQ49x79y63qr6DKfZbdEPS6ayWpdVWEiV86cJp5jE9StacVrswy5dbpAJ3vkF2Vprqa2tx1",
  "key3": "2ZZQuZ46hFaqtXesX6MjN69WeyB2gbnh2i4ZxZiKqdQZv6xeYdDWBGZurTpifnMsam7stoG3Tpsru4iP39a3ZXS3",
  "key4": "MrBe1e46FwDqMBujLeuXicTX8yZKYhKfd62uV8SwJQ5SuhdSe1eeSNH41EHB7uXKPqaDpAb9f21mKex8Pphpv2u",
  "key5": "26AfJuEuGHmLj36cKRzxgDzD5xwpEzJD8szVQpisrLRCcoXBg5eXqJwZ4uAFbCKoH271s8RvwbrRh6HZhfKMRp4w",
  "key6": "3NnNhFWxYS8cwaNzD4jGRm6z5hadrcrjaUhTFcYuRx9YxeYb6DuFZW5UwZvedvGcVXbjeHMsvL1yFgh8CXnfZKP6",
  "key7": "4sYCRamsrMJC17PGXm8m3nMogdVLfKPoGaojQkonYq7eGWUdUEXjuuGCw1udL7KKoiBkc3f1m6QPfaRSeCJzfUJS",
  "key8": "3qGYVSrdifs6z1w2GwFqCE6obWc3YBMtAb6t8cZaaADigeH1F12m4F3h19tiZFFev2S77ywB5W6t1YtY6uvYjsRd",
  "key9": "62xjWeNLZV74H4Yin256EseBeC9L7ibCXVYhNfXRB3FfTzQtbE4vrsNf9h9FaCZCnEuZBUHvfWquphkW1vN9VHPz",
  "key10": "4f6ZcfnjoH9MCXFMzNwZ4ZYB2bNSbp8LS12iar9if7j84a1Yzz167U1SGLffycQARcDxwHaVmJuYigjNrr1Vky33",
  "key11": "494au6b3KqE5CjYQvFvHpKEcHFVAEbHcWvSAkD4daBidxxQKaJ7thZposv649mDRDWdFR5j35qRwxJi37VXE7NWk",
  "key12": "4PiGpAjtCcJshHJx7RCZiEs6pMmFVhSx6vdrUjXYfngkExQVrDkkWgrWtnoX2oUCp5dZnsqyfF3wfdBLP7hs7K2t",
  "key13": "4EP9NxUQtwbwzSVgCgWdgyeaXwcn4pPAUNFBpcWyNJsLe6tn273542ZNNzxJ4omgBS3nkTFJHrKdoVen5UwHfSpS",
  "key14": "2aQa7NqmsQmqwMmqQtisVaeSsXQVkwiYmjavWLndfiTQYyh1i3nv3NEGaAjbEr7PQSFN3urw7z1hZ3U8oW34MSnK",
  "key15": "2Y59XaNuxbnkMKYZ51WfJxhGVR2XouDgqwGpAW1endX9nQLnKqGycsAfD5Z9jPHag2WEYRG1ZesRQfz1dc1AmPrZ",
  "key16": "NUobtcME28mjSrmzsMvpUW2HKsA5to8p251Nidio62WGV5HSQqC9J4y7bMK3AHchvP13JyS3A2515bn1fbRZLHp",
  "key17": "2nJ9ycroyKiUziK2jWA61gXn59QZZmcHMSkkGLT44ZfhbgCGdn3eTAfNRAgn9KBk9aT4fA4m76dSXpjmS1tkJTTc",
  "key18": "ZV3TaURaZgaWENrtMcNeH2yAu6hEjipDwweE3ZDdx9RaY4h9cBfbPT1G59vp6ifMPbzFhGtK7WE2FBeTScEE2S5",
  "key19": "BoG7Pv4hyFBbbTzxzXSHNq7Yc4K7Wi9vyf5A7G8YEpwFR342P4453sDo32moWmyw5XVLpMTQDisHzsQ8X3b6xnq",
  "key20": "nAm2M5smTrfk8vgdxcZvs6Fs8aWDbneEPBkqenaaQ1MBHBxWy8HMCRfksjZwTrc6DAtWmNVkhCvZNhxRR5FHkvZ",
  "key21": "2tBZysASG8FCcgG1ezNpr1oMpLgCY1WSd8ZpvJtefS8FXksaZZ1pd1BvGU3KmqfJeV5YNWNBQ8HZ5Y7WfsRhSAEc",
  "key22": "3X9fCkVavDnGVdUo9Nc1oW6ptTANvFiS8DqVmmUfrNtrLZL6ieZ1L91Gzw5zk8LLSCjZy4HkNATEeyYdd8mGqy8a",
  "key23": "3GSJYnyTDJdDAnocvNfAhx53kr4xrqWtw2obMgbwzaWN267Zmng4ea3r1aQvV8ynw4DpWc2m4fuVt56LiP7N75MX",
  "key24": "4RBgjEwC4gvcaLZK5A1UWaAp6782AgjniZQwCG39UAmWmFJK5dz1LYhShRgV8hj87D7mhJY4yYdgFGHFmcZtkfgf",
  "key25": "5H4qZwc5t5R2MGRykvGrW6o5NMLdW5j59hBUNJUjA222GXYqprb2boGij9m3LRamTC72BhMBABHPJthnQ3UZbqR7",
  "key26": "4fxfbCmUKBrDTz6Es4GWkXchD9GDgkoPGCfJxuaARiYVx7ZJ2ZuvSVSdkMkgLxSQdR2WCKEoRNR9SA2BT8DrXnaT",
  "key27": "4z67Y1cqerSdRBakXUkt94b5J2SeTPuD8GYLcEVV5Y9qpfAa6BMHSVMuuC8cwMphMhiDa3i3vtWa2cbyzqCDPN6t",
  "key28": "bWH3qtfzcQgFUPkJtduHheMoG9PR2MM8Bia3VCVTm7xY6m4LPvKHZi9Ax54jvTTXxGsPAkFq5DAoTtjUm4MxRv3",
  "key29": "jW8yjpM9BZEms8aYZSC6bwFMMKMtftFiDcoshFvVDFojWgbU5vbFq8tF64f9LC6gjqVwcXnawHtvbYMXZjojsiL",
  "key30": "5MT2g21ekwQeca4gt2fbtM4RvN26PvTq7C3Jc1iL3YytVLWUWsjhyPEaPXiTy7p3G1j7ypKP5mtJRndo977sfXLr",
  "key31": "3ApmyKWpbRX2ZDgLQRoVmD2tWHvgvzFtGbhxka1PTz4yRsTP8ZLbNNGKsuueDaDbPE646uDAcKfzaLBBo6TKMFJ5",
  "key32": "54mxX1v5FaFoByJd41Y7f5cq92CHemBXD4wgy7CiyLWS5VpaqVwNJEzgb3n9PmzJgMfy6mhUde4MHhLUniEBrEMs",
  "key33": "3RWfLXomv1tHareyZYadh8kTzmabLx1nwJ8yo63oaUSpddhYNyZBNsJv8YPKzEPkc928Yc3SECvKdBTxQjkJumjC",
  "key34": "2HfY26qthGYGKpN2e1GcdsZUp1hUXSCm4u1uBftGNXnU6oe4V1ciVVyBoSF7DkrKb9QDQzAjogrMSJLpkdKXyQVR",
  "key35": "FmnHmjMuTvWfmtBG7Unp3EXWjufaGDYtKURQe7PR45AynJ4kbg9ZaNbUFKHzxGYWbKNbfwoN1EkTndSAjVXvfcz",
  "key36": "3KBweDmzFG7LppRwjyCvgNcjv6ZB6NTXJM8kaYL4NBt2mT6Pbgrp7LwBiax3MpMwnzRVApYFyqcjEWvDLFrm7fRS",
  "key37": "3RvMFcnQ9Nfu5iNbKwh2FkVCWFUqdztit3gZ4ooEXA2UbPwR6uy2NBZ4DUJK4Xw477jNRZ2bjLBVDosXCV4xVDmN",
  "key38": "5yDgZgNFH5LtyddwnQU6FxhbagW3HVDSbZZd9m73uFTEDwUuF1pUMmdwEn5spAHTYiEkFWAUEXAT6vyHLLVvLnex",
  "key39": "5Wi6yNFTSxGW5kMDqKKyBHqi529stPnKqEF7Qzh15NUCLdWL3yBt4JvKNHd1i3mHEUwZbuKQ1iBzeYvpYYe5decp",
  "key40": "3GmYxqnd6gTizFipSVeAJRNX6sHNnSbJQ6omnaYfUtD8ym1M7EPp5r7AekcZSUSkJcu5kR4RZGBTPp4VCaEhjvcq",
  "key41": "4QkGf2xY7zvvhsRSfivCCSXkMqormYmosFU95bb5jKZJ6igDFc9gV8YdepUDDucp4yR4HaiGeoR9YsvtbUubXdNo",
  "key42": "35sA7tWpsDe1XCpB4Zz28rqNh1GNAmRD5A9FcXxsWycV7hwLmkujfgiiJQPdzC1ydhLjxpqpmei2ZGS1zTSF6XjP"
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
