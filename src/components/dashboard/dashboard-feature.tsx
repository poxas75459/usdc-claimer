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
    "2YQ1Dh3tYkn6Q4VRpnqJWoF3T2spVQxKE8TU98rJPSUxBMt1XNX2CoX1SLesgjicifUVvoEhCX5hsgJsnNzJFyUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VqYKBHDjA3Cf4kgxd3pR9kibqJdc8XipEayyvt3n33yFx4HwdegrBHVgdLMQRQ9KTG7xt2FjvqT425PEbUfvqS",
  "key1": "4YWpecc8c21yw2Wt6ERdB6Ce4awJ9Eum8bGvkbV4gJm4A2dYLQzUa2KhteF9bkZVWnLHXGEgXphJJ56q5Dp73QBW",
  "key2": "3qFxm6Y3PAjU2bne1Y9Rja86da8YLoqUyESAqkXHGRAwZojexC5XadyfnDmHRMrHTzqf56a1jxJTHR6v1K9ddckb",
  "key3": "4GPWWxrM1r9RPcJUkdGGMyUGQf8u2FYnYgzy96SDrXp9ktXReC1BEPHFCT78zcK37aGnsc9uXUuiRhDKncBF3sTn",
  "key4": "66CVTkoiWg9bsQeai2tD89NRypmd8k1ZiakPHCyJt9KwgqVa2vNdvL9MLFvnzDunVABkEfc1ww1MGAMmiCbQEV5q",
  "key5": "mVmQWbS3B6DYAMatBdrgyMD28JPRzqReQHg1MVHrK6mozF1gYKtw5PXC37uE3C2pqat2CDvxQZ7wab8zdiAv4kx",
  "key6": "4JUYhxnrVPBP4LP3zQcVvVYucMvuDEjj7Q2gWEae8Kd9LYrjyCC2LRiLyvXAMkFdjjRJUqwRY2J9uDSUznn6EAyc",
  "key7": "67eAsaHBsXDz543S5YwL6bf1HHmCXh45WHopx7tnCLiAUp9bWnjksgdRUpsXpV3eZRSn2GJsv2jBvzZstGr9MZyJ",
  "key8": "4xjzibmt31Cg348bAuPTMi1ccuSxSN4uHP4t29dsAUg87hgHTvgvqVWUq7X8k94hnF7nv2vWXhpNuJpN85TDetd",
  "key9": "24va24V5mGnbD3zowMsEjZ9zmj21SQVCYJP8tHDKKXavstRNcgJwodTEXVZcQxxxyLLCCNascVgLmYqxPq4MV2mM",
  "key10": "57BgRQa6rEdXeA6Pj6gSgBGWZvvD3T53ZPuGA9AtcRsdNNCmeh2uEEMdJf2LGhie1YmyX3ToR6FxSVPYTzrXRw55",
  "key11": "65NKEc4zPraWa7G8BTzoP92eYLkJR4Hg6Fhp2jcd2fnni8RTAgSKxN4DBtdNoR2jLjEjjBNuVhpJzjdto7aoUaYM",
  "key12": "5tFnz94VYhdxvFqLWN2mYiQfwBZUQqjgW9bEroDdVcr1TuBsMxNsAsRxe5ATj3oVkhmqdfExzTaFWMqwgKRtRxeq",
  "key13": "57sHKiDj6AWnes3wqePig15Hq5d8ddmGvE91GUKaGnmkBVSP8QcJvWbzqkfMBAeV7cXopvUj7r57Aroiaam5hxKC",
  "key14": "57Fr1HmzRFVD5ta5P3xRgkhL9uQSF96a772x6AdMYAhL5pZapqP2tMYkW3s43DVfYXyf3vJP6zRbEtWnNEZtaiMu",
  "key15": "CTqqoeyEHNuMo7crYMAmz35Gh5khD9bXSA4VBoYnfGJ25TNcU8zNh3LHgLKocSQGv2WXk7t7RrJwX9aoDmMa4Mq",
  "key16": "4iZtQY4FJe94ovkHgSrNHs1hJyoabFSYW5Z2NnByPxqjXtqrY5pCmbL3yDVwhBDCGnkzXhtu9UneN2g67TRtFNa9",
  "key17": "44YxsEKZC7j1VJbk4GApRN4ioHZrSUZuH9iC34zGLKD8k5hTvtHvDbtzvMRqVHqhUwxLLnEjRncG4z7XqqbAAVeh",
  "key18": "21wba4y3LuZAYPy4mDu4byyrHEn4p7r9zUQZpg91Stjat2qW8mQD24ZDEw9xBLZqgeYfRXtBKcrMcQviJBnVx62n",
  "key19": "53hCpR1tXABY9J6LV5cJH7J6tV4MWAcr1ht249qejwoHJn7nBLkEZwumq4Zdp3AorRh7yUEEgXPbbHoiDX8Q7qj7",
  "key20": "7Xi5gVWqNS6wfQqycCTkoyXceBi6UfzUjvKSQivDWi9H68DUU6t8tinv2ood5eRFiTWY7PGabJisNqK3ze9wy5j",
  "key21": "21kRASVAEnor1yNn9zasYe3XU9NoRg2d5AtanYDuDLYyy6hkgGy2WnBX4CYxS8zWPoyoAMmNFSRLYT4djjm2XyFi",
  "key22": "3vv9yhaGaVVG554B526Q8qoqcSAAMnzXf3iG5aKALxJUzRn5BdiZ3JX2t2rtjiFuSnhsMHPjRCkvU1nYXCKzBpK1",
  "key23": "4XVTqzqLfXVPaTaab5GEjTWQW8a7qjPA7uS5fa2TEc6kb26hh3Bx1oD8hHXiuNv4BqUDhi5zisNqrFrJzLL6c7qa",
  "key24": "3k5QHeGibg2jCr8qXSKMfSm4G9JXTsGdkEj2UbcGpjoyD8DoLYxxDTVCthR3ytMf9ffUoLhswNB5afTwH2LXmCas",
  "key25": "2jNP66X4HzsVYAamfWk5xDvtGEXTJGFx23MQEno3MxyiXAZ9ikmCAhQLTT1RiLbuG7t7ipRjnjUfcvwfJQshSW1",
  "key26": "59bG4kqghP3jm6BM9Fy9vLo34DVi6khTMsKSxxTMoR4q9Mbt2FjGcTwjAVB5ub16rAtBVS4f3rkKpLcBfmbR2Lhz",
  "key27": "5V8AMMyNkKmK2WT2REHKFY4QeeFCwTjaanPVVy4qv2eBUnewHKtWuiUAGcCsoTrrshmJ1K5g4ADyGPegteHmhA3c",
  "key28": "tCtFrnBRZPjhZKF85BB93wgy8F18poCdauphS5FWRBFwcjYUbLrta6Um88LJ8771M6e67GHgeBsmaPMqs8DUXwq",
  "key29": "3Ue3nNTqdKwE6mJTGZpRwBpazNU2XT5881sEz7W8okBAGyhyKsLffc8D7GzScrky4CA6gusVL8TkaLTorxo9emcL",
  "key30": "ToCfajGEDS4ocZCxsMMdpaxn55RAdG6FcA6teJkcToWXraiMr4tqBAkeC9fzQPooTp2eLyn1EwoGBWAgWnUMBMJ",
  "key31": "5L6oW8cG4S9cjEyebw9av8pDH18iU2XFCnykd6oumKmitHJDp7RLB1v2tYRptPCowoZgHr6YdrJysHMdWabKwLaY",
  "key32": "2i2mMUxcvM5rjUgUdSYTpdrW5GUhkVK26w7Vxb3e5iaWwRpsd3c8MYHFxs5FjS4KTJfw7j1Q5dkPLs69wrfGNt3e",
  "key33": "4wG5x193fLMKfNyf6rHbrgTX2p3zDtz4toVtrbU5DEFHRuPfPtf7m5NFLtrjkaxkaQQxHWmGcgHdAqi9Ryd7VfLY",
  "key34": "652M3EurfP7DLAzt8bsHPgsL75G9hEqpBRp7wJw6fZ1RWs3kaGcLVSv9YqTjgvLpcPgSiE1VpRSnpCbw8ieoXqu8",
  "key35": "3hHaJMX5bYaffJqYVPCQ1i89MLsaTEsyBdRWa1zEj8NN2CJLyghPuXX9XVuSuBf4qvEM6Q5cF3giBKW64AzCjBPx"
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
