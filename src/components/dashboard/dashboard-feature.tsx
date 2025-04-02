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
    "2Txz5xmxazK5TMS6iQpyAx6KJHj5yvbXBv1jKDwRtLPJ2dFGf2tFawAtwyvwKx8fLJnceGsZVdzsgRdZ4bPkzQLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4arTAU1QMoFoedRdtYjAG2kH8xWZjxCcpbhbm2vUeRBAudHrGJ3vkLquubMK9962J6S8wTEGXrrfidi6gHL2NXCQ",
  "key1": "1sbhJMF1Lx3TTbjh5fQubty5LxyC3hQ7wTv4YtbmmzHh5yZTfpX444s8QSd7BFtGUQzHvZuxweV7b8pVmuMghzd",
  "key2": "5psen4uduyo9Z7jZaxUNH7zLYpu7GtCJFQDh1JjNikuN7HRhprCAfGjiozj4p9pbyXwvBVuk1jKqDxfizwhqpf5Z",
  "key3": "3HLNcQCq1ue1uNRv6wrX6Tvpsp8PbBLY5ADZ52LbyHNPAif4gEGAoS3h3BaCezzGXtQh5fNCD6tofboFGRTUg9qz",
  "key4": "2tzTjUiMvZVAJrvZYgek92xdRJ7roGhnkK6r71yjpH1bH7k4PPX3KoWVzc3ZJ6tBLR6VWZLrn1DEdpnJqFSp6a2K",
  "key5": "65UTovSH3nw1YPibCHjfJzspq86gkCfHndNLWo19MFVoAuyyJnYeRZyrMeb5j4YD7tvdxSBi5dD2qp9rBHJGAZw1",
  "key6": "66e87mz1cGoQpXK6dhVfdkRHYTY5SWXCjK64AGMGGace8y4n2PaQTn3QagCYfkVVnA1dgQw9ZzqLuam9nfEM3Vs1",
  "key7": "2RDWh8ULziYZvyCQKrxp5So9Q6r6kocFVs6ipQ2KcDVX3kNM8CaCra6GT48xG4w8PhpekapPNHHDe1Vm6dJfHC7Q",
  "key8": "4gko42h835ZR3ZooLa69bP2bAiUeweW18YUzLVQzhvaCTbqDh38sSRvm1st5V4TZVKWA4we1W1hdwM2u4n7qA7ts",
  "key9": "TJyePigmt68zt77QZf2hWxpJa6N2C3ksNmGbc5UYvrenaNxiuFLYgADd4Wh8fGEsayJzdzfdUrjtZQMjQNJm7yL",
  "key10": "ri2jDdisG6GRDboxE7v2iK8pAEPbBSRHBHgFagnDFJzvCSnWFFB423HgD8vgDN2mJSRtnYmXqxhVmzY2uxsmSEP",
  "key11": "4Ri8T77uyXSHg6E3AY4YP77aUUohXHiThFhdpfwHeB2TQ5Q4DyWiq4BKftHZQHD7b9naQzV2Lm1zgA6KRCCHUzwF",
  "key12": "5u17KmkVvBAH9wF5nGXVsgZJTFiGVXkBXSXZcxXq5jk23xhyGNQyDHqDAdpWPBENSPxC2vaZMXdQdRyjmL7tTau1",
  "key13": "5oZfni6eubUvBTTPykn99dujtK2ZGpZLFcTyEbb5BfoekTQGkfiQ6m1Lv1YVThRq1nLHFoHAt4QUHPx516UizF6i",
  "key14": "Z5E7pVKXe1QYRuPzAhHZPB3tTWFxTsQAXaWixYg22EG54oKHUYUV11ahMv1hbUJUjaM96B7bGTdZdN66uBLRA9S",
  "key15": "35uDXqkEYy3ouHfpPSEDN5CyZFth92BX4HKmVwash4Li7AF2fNPgHCfsiHMUGQ2gcucJys6WMi3iDM8Cq2rUCeFa",
  "key16": "DAVR7nPTaJ3nT61UYXNXMB6Ww4MQNmd33Kv3FbiqU9nXQssmkbaUSKeCoDTxGRVgq2MeE2GRVgFJc5hLvaAo1wv",
  "key17": "243hqGREjZFFx5on8PR99cUFFLKF9Qp2G7oi3ALG64hqGm5uncCYRr438GZEcf9BoCwLoEJDHNevutoUjGeT3QWG",
  "key18": "4horVvkxJcfSya839dZ8GCJV8NTCCwxMRYjvXYKTRqJQdm6mLgodD1s1jHFLzrX8kddwdCq9QsN1VjCwWAyoWir3",
  "key19": "5nCTvRFcGfJZJrpRY45etZz8TonCmq8AaGtqmnwC3NJHKbTx6RmZSiNYe2oQretinxDj4AjjeCUKvc77gG8ULqda",
  "key20": "5tDDCY7iFKYMZHtA6LaPkeZHWeffdC4s5bpGsqUwaAaSq53w6KYg9x81pyzDo4wN9RpTtZcWYs2YudX6po2WpfJS",
  "key21": "4JSFEWoubChGfFxeV8nYQ6J6C89DeSM64xV19AUYnbKsDfpSjEGZTULrzwfqVi6nrAQuzkHFFGrKkKS7Rr6Legg",
  "key22": "5SMudXMJXvtrddYkQfU7votVJdjqDS9j8vTLamvyNFh69iLoU9Zvw7dX1MkM3y3ZPvNJTRvFaxR7ayeuxotgj42C",
  "key23": "2isTiFAjAXPyrW2ahgyxH1QzxDYwEhEscnGs4q3dmF5Zux4vS6Xki8HRJFcp3mc5zaFVv14xzuN74R9MuD1vE1ot",
  "key24": "4ELHTY68UUB5nW7sX8uatNnPfNj2GAMRyUA2D36C5Fyi428DU9AofCDtcqp1APwPZaKSSvaNNnarzS9SH51cPn3f",
  "key25": "PDDEQR8jMpkg11kmLJRW31hejDxHX2t97rvqKPvmh43WECBFtShaof9sSW8uK3nBYHmAzX6Jt1Zo5enS4qNvN75",
  "key26": "25tTvFuQm8PfFDNdCxKFD21tNGjNvyzTxfvRxgZAtjR95SXrPB8kZBayZBo1uSWSUprzQujUzFfrgXuEgg8xY8D2",
  "key27": "5nkL7rfGVVX9w72zK2StLy9LhWjigAYCnYkRvq9ikYLQZToK5ev2dgqkffVdjahYV2QQsZFAzWQppF1zhem8JDuN",
  "key28": "5VxofawRpDKnZ8PDyNapUq3LLxiTMcjEYEm71SkQFgcq845QgeFScTVVhwJ8NykVMrh6g3hVvnQR5QkTm6B5QywK",
  "key29": "2mkHBMgMXqsF5v9fSEcz18Nw783DimCVtTT58whut2fQUBvwoionuvavpx4PYY58wTtFD3Vbzz3dDdDVqQXsvFev",
  "key30": "2aWdZwSNsEUpt7QRHKhiT8UAEgQ6nsEBnRRkjTVLdgCjNQ8p77VxWifjub9xALFpMf176mWPzERQypgpiCDQ4Ahv",
  "key31": "3cdvAJ7AoK8Nd4SHjnjKWHANhLwZooipXw26SkbqjM6YV61PnHDW9TGfkLw5AM1vjQYYqcEePsYsRL635vKtboAF",
  "key32": "5cb225xHRJ15iH2fY2XcKH5fsAjtfXxrQ4zbdpEUgPB9TggFW57YntffEpuEcAVALR4t3ZT916aEpvWS1MDNziNn",
  "key33": "3E6raNqYofyqTe4HiNstcG4jAihCZ1nLYQDRh64oeFmDdp8pKMmZsowafbPPCSAffUmVccHtJ92vDCKesYiPGVmF",
  "key34": "3hbqJ79iPv4enhnKQzxdzunN2LUXHC8NkEQyap1RC4eedTMjKxutfppGSAyUgwfLi1ZPjg5qjekznnze2WQe2b5R",
  "key35": "9Li2j3DU2NzdDJut5nCwdTq1RnUih3H7s2zHjYpbFkLrAhZ6tGwGHQUxSpG4mJnwGc9GuZUTAuJ8Fx8mgzTGVXV",
  "key36": "sbAhff77sgrpjpWhYrgjJbwW5L8Yx6iajrz7NgxUPwXKvjDtEMfB9qVbQngU2MLyyd4Jo1qfBPuXBSV7yBfHXPA",
  "key37": "vfdbfWE6PSzSvXGcaVruGQnC93bkc2hnCDXXUbrHeW6Xe7nSjMM2gHEQH9EPKwUSSasgyz3Cno94tTb7q8wt4nM",
  "key38": "3UBDjCk2ck9ViVBacnkqu8N2rrQoc6ccEF7xyC7WEh5SCSkaUR7B8PXsXxNJd3gTnH5BZgGJNTBBPKHfhPftHHBC",
  "key39": "2rRdMa5mnssxZ3WJK5SsyimwE8jrkoXAdgKfMgfDqJiN8QJfoj8LxBF2pswTLGycHxcHuHJ8otk67yrW9bdpfB5G"
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
