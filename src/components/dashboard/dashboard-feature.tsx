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
    "3qE3PzbzcGYpS8REdj6V2jiJ77tvCScx8He82FSKEGGxRxFVLxp8Ud1CiuaPR8mk6ekJQLZcV3eu2Vg5d7AgcZ2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eJseWa5gZygDVuxKrAGL7Yhdrym3tBPYtkDu8tR2UkiFmCP2bF7v3FNW5uciRzBrczuHwnvYz6uSQ45iLPaVcsA",
  "key1": "43EHyzsB74Bqb7zWRXihyyZuLonK7MXZr5phJtoGUZ46ne3cAed4Qx4ZW1jsQDwTteU8WoXkVGhPJz7yDrSwqRd4",
  "key2": "2wDCpYPNraytfxkBtLhRNpTfGQ4FDDXRczdi8Aej1VZg5RoFDehPtWgSXaLxj4XXAn4BKQEmzaZV2R71Nad5rYr8",
  "key3": "4iTv8std4v22ScmNqdmfuwZxXVPmMSXZbZWyNXUnRGNny5ysAh7GGWv5o6G8mQmdw5heqbEeQBM6TYXrcbhXGLUU",
  "key4": "33CW5cHy4YLrf7EK2vAsAatWz1zVtDLtUXfab1ajtmjqCovqxVLoAiG2JBVCcmqYWdcLPipHEE2KVgJyAuRiTzj3",
  "key5": "3TqtdRU82uEas43ohkQh7zZBAcLKYcKURW2V6Yx1cvr6YXixNADW8WiF4fm9pVZMfHAMfzx6T6Q5xPjh4agY4PTh",
  "key6": "4oXtVyRkA826R7EEX47fDoqZdwxEecPKgbVLUHSitTxL76D5cz6iDVHzqiHfUr8B2mkVNZDHLUFvP3ubz7wCDgBU",
  "key7": "2Mock6zGo8xnV3K4csfcqgKf9kXhQSwozKEYR5qJsNMwRkQni6ho3iTrcmu6PuwcorypMiq3hLdJeGj9Kjx6xi4h",
  "key8": "33u3KucgpNiY7ZtFVC89JjKfj6usuV3yvkGhQHAQaYz8q2xPuGnq1eJTHdJLp4yL3kd3dAnkXgqmwhFgHU3tYTSD",
  "key9": "3Tw9ezFavEaM7KThh3Ynu8E1pPFzSzFxBSobF89Fv5xLJdX646Uao8dHdMAUr8qJy4ZcYf6ohh6aB78o14SmXHu8",
  "key10": "5d8ii4txBH3a6ZF7fFLLsriVbc26J7vjKQQii96oVgpDwssWe2qikigputgmjnSDBLYfvy6YtT6kRRBXWMCFz2E2",
  "key11": "4msjdXmuVbXZ3mmE11qiLR7B1RgRi6zyXEYujMWePaJKCfiEGBX2iJ1MV8CTcfDaAeHr2w5wmrNkRkXmWTRAU3e5",
  "key12": "2fhNHgFsJ2hi7UgSjYFLc6EcJAC3FfQF7hYaP8Xa4vrKTCJBM6QLT17QsZ7kTCdy3wkor5JKAECfccEv1RRce19",
  "key13": "FZX1uwA5XbFDcWBDjRsQaLo2udDBkdmtsFj3uKfGH8CxLMMooScwxiq2wRYhUZ9JA1FcQPvj7Dtut2oMv391amJ",
  "key14": "43Ekeb8UZU66P888y1J6L7ceACzyBiTTu4qoPcY8eAunSLcvkyYsNSh8RHwAZP3f8d477ET6LjQYa8nvHa6txpK9",
  "key15": "2Pb9JADiii7Ha5w1F3JRLK5m8pFxEmdKUFNHMin5vEWAC9jsVAt38pJpwuQQ7funZyzUvP4aTCq2xYoNTnVxnqsJ",
  "key16": "VaNxnC1wMZCtgnG2Cot6SHV6DyvGSzXMauWpxfEKv5FKhwFcyrGXQPh9At5tBZdCGFSwuJvTFkuH3HgthqYZJnF",
  "key17": "3a6b35sadJgpuLP9ZahUuaKdzbiG4fhPLd1HiKRFSPKu32A73ETQYSUddExYjjvE6CCt7pC9tRBZmAyFjGXginsq",
  "key18": "5AxzJaRtpD6yEdEMv77hKuFftptHEgkM31GbQ2y3a4rJmATLNpUAuaLjvcvipyKzN9g3TchAt1mwjMc4n6Mw2bWz",
  "key19": "59M7jGyWgFfHyUrfDB7TfSmcCK2tBNySRKrDetzx7jYAcWhiPjvCp8ST5Ppn2JrEecZNdZAmarvhjHt6gBXfVsJi",
  "key20": "2aquRurptQhaxVo5sLij4mVPg5d8vDKRdWpcknqbzWgRPHpWFdzt977rWNLBXfvDcTk6zbvNg7cjjG73VADPcRSa",
  "key21": "6552m5nv4MwSUrXJ6txqRwodm5rKmpYtiC9vTYSPNcqFqBkNy5GK743XhVt1UbZUyTM1vKGqxqXzVm1E5M9SCmL1",
  "key22": "2EAMbBGZVmgRfwRPGDLjfV3n3bfPf4VMLti5BBFXYEuWEoZ5q79yf1rnykwFYbrUPLxsqtKbVAM9cxPLboBMM1Ay",
  "key23": "3r79izePxzcmckkVfmDbTwzBNW4gCa5xg5nQTzxT9BJ8CQHg3NmaJM5tNgZ5uh4iCJQ64V4PF7woE7dF3funFsEz",
  "key24": "4E16ecR6BfKaWGRqNKJhAg8mcmDjzkQMbwMX6icXTDPGPSfDMiUn4tuoKLw4dYxtahAb6kvmYyQhBQiTdMeyiGVu",
  "key25": "63ATnjvwGm8D1HAbgZhSNWNkMokMQi9pLRNrHUJo1NXymBAijcpx2xmuL2fDGha8E3JfbNnPFKKjRt9jo2ihdB58",
  "key26": "5RyByATcTXwo9ULaFg5bXFa2WrUsCHTKrFBxRFgQZAdsNMFrxFMvwA6TMQJ6Uy2Nhq6oZy7UFRtWvaVzxNbw1At",
  "key27": "DtP7hbcCormPYwyww7jobEFLfqMf7TjzUdWHw8PhyAsBHyMUrJwywhTjXTr67rFbQwXNK11DR6rZctduHcjvXwj",
  "key28": "2u8vzB9UfPKEXAdm29hyMgDF5v7GZBZWh73cLJqpUcF3dFAmv9DVxuqQ5XuY37SzXZHEsyZfo7vuGvHcnNcDGK6A",
  "key29": "5hDPyVGxoz6M11H3QWvh5oezLevZttBiJbAkJ5aSCyetmjX8NVPgVSoTCNZq7kCj311nUecYTMRV7V9yzRwDTvKg",
  "key30": "sYzLpk4WUJKS1Ln6atYWsGUqW9pgr8gEnuGZqh7UUbXMynMfb4sywrMJmmBNpegknpGzQDZmAjdrAMakQJad2zo",
  "key31": "5uP1hbqhEWSXzMDo1DNvsGQo1mq2w7D5H8YyrUa9tRqp67yepqH8AX32F5krHDxowvqCofqixJHuATc58MnDheNL",
  "key32": "4jUDpAXDzDE7PqZRYk8DFP3kyph7aUyzQok7DZEGnLikY6Z7oMd7cGAxhCmn6DuUHihGWRDHsZHbKJoR6jYUkEhX",
  "key33": "YCuKFk5uDEcnFG65aSyXU9KqKhypYf9ZU3rZuYGUc4KfqWAbEzFx8y6onLhjF2vdKfvLo5bYdSEe3iRTvDH4YYu",
  "key34": "4pgFi6Nc5ZasDBK1T7otfsYrhLYBha8f8xEBkLwhkG5JfRHDR7UNNpcgUaPEhvAfCFyHinnggos9m9ZFtBi5ZK6U",
  "key35": "3B8j5BHyxccfRr9hH6rgeZNxPNhwiRu1kkGX3owxYCm56hrgCH25qFMYvufV5zMkyP6UcXwMmh3oEKqS8SdYG2dn",
  "key36": "67dDc2UcwwXyzFvj6CpM3qgqNFqhWMCP9RUScMQNjkFfUPdkxJjmjSZZUNR6QVNPXSC2NTyDUcXBWsSPfpJwiL6D",
  "key37": "4ouX4iCHhgweUQTXqZZMJGtX7KwTSW2tUvEQMvqypRQY6aefxo8xFcQEUdEUE7o7s2ZcaH7jTQr5m3DxuH1WY7tt",
  "key38": "5oHP7FDXcn6uVbVkbFK7FPsuxQb1tZdBPZYpYW9S135HLy538MCiTvj4GvzWhX89kpEu5esfZi2TksTuSixaKFEm",
  "key39": "4HYirdfGeSpjWqxgpFYdyxS2Gc36t2QcttcdCFmEENkb3dJM7Qu82qvDJE6p5HRRc9tFaXTZLib653ZDCvno2Cbq",
  "key40": "21oYugq5ozX48hqPEiNbuY3YdopvdkEVsDAkcEeKprg1HiyV76hnhmvJ3HUe4mh3p9A8j2VJDWjYdai216KHZE19",
  "key41": "24CTzk7v1TmVGWuoY8o89FjnJnMc7SrWdnsikW2pfjxrWCd1wfSNdqpoSo7xrzuEA3B5BJ3CSoyqttJb3sbShgJk",
  "key42": "fP72xhTvcD4dbaT3V8TqpobQP2kqY9xpsdDhkucUCbSdqTJWNKz4yGp5QzpiB4uiwmx255e5BNpiZuSLeDVApGn",
  "key43": "36xM8NHRnA1XV9td6TG9pWPbb3Fd2dthT5pWRZ68V35E8EMuJdoCv8GE8nZ7eSNRUXD1CbmPTjB2Dh9JS8aKoLhZ",
  "key44": "5Tbfym6fBYC7GqjeRb9uhF4UDR7FcW2Yr1KkpjLF7BvR3sVFebZ3athTGzY4D2AzUpJ79JT8EZFUKHmdf4vbsd2Q",
  "key45": "2D3qTgU4gQ5NVkQVrsM3N8Dces2dmdaEN6frf1CFVbfHUwMsxC1GRfYMoAd7EPRnGmgneH9fqSVckMBJW5g8dHMT",
  "key46": "KFoQzAEaeHMXVc69iUL8kNZDQhiaxbgtLHp7Bi2qBFrt5JS6CwMcsThcdCFF9y1tij4JMrUCVB3iE8XkE5sdQya",
  "key47": "gUNYV4dv4mYadeCfF8jQQ9C4uN3qqxTgGfA93wBt3jbJ4YDuvem58bMxRu8NsDE7F4HrNt5hJvBjThh4WRLb2zK",
  "key48": "SZqnnxLp7XS66EzJnKTLYk48L4nwbT1Z73UGhgD34ME1zsUgSFy81crkaFcompcPCLqg5UDGgw6hZBVyXXvSu3o",
  "key49": "3U5oLNT8vua5SHphr8Emphj62THy1j8E1iDdAVu17btpV9L5Hrt54nXtQYRu4gz2gYVT4mJ7aFuUbznGGWJYp2jy"
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
