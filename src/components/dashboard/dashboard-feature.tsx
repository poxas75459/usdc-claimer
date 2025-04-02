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
    "4QgaDvHLxMJtXXzLjKELt2U3cUyeuBCfis4cKySjkDbxd4nA5uFHBSwuZfzwprEEeL7Lr1XH2p6q85D9HNZTeYdB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o3213VtGY2wMzrE6Y64meM5AyXjfUc4MAqBA5VqF5pu8vsVFr6jdJzUnGoeLG6DAUT2pMrA6csz2xYJ6pzGqygh",
  "key1": "33ZhzRbBH5qBCbn1vMcL4m9bZL4ZLzMSUBVuBGsc8gVjhdCAn8oyJhUgg5WvdPVeQ2Kxc1h2ahnj3TZ8von8K8q6",
  "key2": "4XtoeLX6XmdtyMWvgCMgxPEfXWar9RaLuEXBDg2FCyrRGXJHwsZXBsdKEkqDzykxEqWGvKFx6a2QGfg4DndBh8nX",
  "key3": "5KXDq8Lw7Rzegr47oURpxeucHJ7N6TqBh1iwjHD1HR7oQMLUpK4PbAeotJscNrveCT5Em1x4giABPToQXE1K6XML",
  "key4": "2n2Uki3p4UeaAZshcWTF2fVXghb3CfGpTAsB4YZmyssixUnVBuRpoZDDwuK7jXL7VME1GvKiNaiUVvQH1pHamPCm",
  "key5": "35pze99J1BD7aRqnbnYmddJzM3bTECYyei3rvciCnErCNRQneM6P3m6edzFa1RkqaUgjesNr7TkT5QaCvSTg35xQ",
  "key6": "5jRxkFspDmPXNALLHdWW28jLBTMSmmUYjDCvjN9WmaKGbuC5hFfc6n9z8GHUsr471EMHwNmH423wDF3rx1qaSZnE",
  "key7": "4W4ymtwXdhLttKZRi1Pq1Rm2cgtUNRA77sQbfGex9HFUThoJCKGB14LqKyZmkE4DRZnZc3HtZAoLccYVbykjUDjX",
  "key8": "38msPTFWPMi91gP4qUThzgK4wdhGYQun1ee21kcgcQL6vUVEEo2yfCXG7o2BjQW1PV318kJbq2dmDVYkjsc7egCG",
  "key9": "ooHfYYfrJV5btCaCcVDxTgTCznLANMd8WSZctDkUVVJkW9e4r3mEr9f3YN2GavKsUbWFRzmkysmUQaTxjX8xXAr",
  "key10": "4gJ1H1xh32ckKuiSqupqbkq2QrKqLN3cLWrzb7TwJsbAQNHWarnyVNn3H4cQRyD6sYv3oj65kufjWGFsT6Fi12wb",
  "key11": "4K3Uim1AUiXnq2YvDj7D92NQL6WEEPrM6TBdZ24ALMVcqVkuJPbg3ERYYcmcY2pRXt7FWXmHPNBC1AWu8AXykNC5",
  "key12": "3sNwykohTkXbGo7gGmpv98knQKFi3fXvQJNzoQKqfNMRo31GnTv1UEvW2846vBQpKckU89z73NHr2itVkc4AfZT6",
  "key13": "3TiPfSJfATz2WGuopzU5LTYwg2LWfF4cAhWSPLRpsseBEjWP6zSEkjehdFgdUwj8qRQ52KB7JM6VuTvhAPGh5uYb",
  "key14": "5N8QTuL6rDPERZVGCJYqYgjzvouxa1toyNvLcUJyEN15jYo9ru8UVUYx4GnVdC3ZA7pQ3HyMjzTvqBej2Gcst1UL",
  "key15": "3P7fTnoT8k2bqcAZcma4v96jqSHEb4Ysmw3ssNkGqS5DnttiLCuuuoktStQYUi76HryrygRLiUWuUhbohvLTds2H",
  "key16": "3JFnf8uxZaeWkDQ8qkz9CDMhh2Snbm6AfyThLpU7gX3BMV3WcgLzbE452A1m56uPeKZChKEK9DHyb7nwLmGtY2Mx",
  "key17": "3P1t1fSHsfkWLMyG93zZWSpFeExsSqmsyj7pUfpUj5RwTqKsTAYrbD3ybaiAbYFCZzuSfJofwtm3xCE3kTMfYTx7",
  "key18": "4eHUb1sNA4wHBT53LHGcNE68R4URzDs3CgJzbfgSNmZwf4aWr1kHM1BZzxfDMDBhqoBYV7YMpbXaKVZv1tBWnhgt",
  "key19": "2QKprKkMXG6N7Dz6sTovvWxnArratJH373FvDSYhFE2nLMCNYt4jaJ7zHDTHwaX1FtEQUVvQFxcTG6MQNiePTg2L",
  "key20": "3XZJQSk2Mj2NeVFnhVxuiKSZGVi3d5juYjVrQQWfnb8YcyyTBxXQFtBLMJQrCKVTdCv2tiH5EhiHJELUqhkjgF2b",
  "key21": "4vKx94LAAnDJ2A7tFCww2WkXy4cgcVx1Aqa9fKQxK5gx4g6ADJMNTZjjapUbjg72fCpaEguMcRdcrx1W2ZUTt7B",
  "key22": "3C9Pyt4PsKRu4JFFeWStVBkoJSJyfRvwMtqw7rjRy3CoChrVAtE7YmAnHD1nNdm4KTf3XuFkP9bXhJnusXnLQivZ",
  "key23": "53JYJw9eTNk17wQEehUz6Zd2rRQwjmZLmR5AY4zXyS9fFvhMYfcwRmEakAjnQXEtZ2swGZpXrFqcbsFTRVwoL5uY",
  "key24": "2qbywFQJdxyEDbu3jXNnpSAHDYgHVdyo4S2m2b2B3iubFxXDccbuAdTs85EZuLSQRfcDcRfDC3GpZf53KfkGnHNH",
  "key25": "2BWUuttGhFYyEBqgfxiu1NZsSvXntSpe5oSe6Ka8ERnQwqTdmyWvZ71fRkvkoHPJCN8fHx7U7iNDgc6cDbHQZmUv",
  "key26": "5w8YuPHRf9fHjML9BymojemK4mF4g4ZcVVGNYDnGi8roCTb3J2MXk5dvDffJt3HC5Z9puuiwibXLRetZdoHU6EK1",
  "key27": "3u3LjrXcu9UCreZ8WKnX5GQwpmyA7Q2dHh6ByC3BqARNB3ApJgqDozYN9L3BfJ7DBn3jaoVX8KT3PknGMCyD1Lw1",
  "key28": "kbNKTiiExyh9FbccvNuSQfA9XvavN75vuxtL3Nz7FFrzAaoJanqPGJAWc1Ugnez9DhknNs9T4TcQ9E6i8RWxpgS",
  "key29": "3Cst6smHBRok7t48y65BoSFtq4XJqDdj7u4gaeNdo9fhFRTbfHnTEdUGrZseFbxAB2kuGzV6ywnHacitZFDYwGM1",
  "key30": "5V2fU7NiBh543UQKL9VhPQT7aSc6FCu1jrBtE2keMnVGSP7NxaLLsakCbxke7JCTw8EzD3P8b4gfUyNAEh56w8Q6",
  "key31": "5zaC2UzGuQX2EgbVPthUFfTyLbsjF9etTJqpqZAhgkPGj9bd5UkoFHviKK2fhRRpEYQFEZe8b16QePigeurVfph7",
  "key32": "2zJNnzWvVeYfLeimHzVzMYoF1AbpJsMutDetZmErm5N1YN4i9CE34EHVRBeb9ig5TrugBhLQrnjRS6v39CTdm3N7",
  "key33": "5kYrQi6L1hgzckLqMUHiwqFMSh1GM1uNtmgvrCe1TgSERLYHtKV522n8iXDut4oCuFiMQqAoVGy9cjfLNhX1HWBm",
  "key34": "4EdaFtfpUyaFLTcwyHmojtBvysa2XC7jn7nHb3kdRVY7ugmncsuhjEHcHrVjgLUH1fKnxxAUzGSefEhDH7EvdaNS",
  "key35": "sfTG2e7NBoDxUrZ4XaueGMbVHhNpZy7RwJnHtP46xZ7ewQMoDJxAnTmji6YrXaFQLbDQHr4jVRxMyW4keMrQTpY",
  "key36": "t5P7Kwk9NFHgFzQAnvjyKJoHRyVqkQqsRrHGqiYaYzdV2m489mTpZjWWJWioQssvHFH4TotpnPZS2BzARaXYQQv",
  "key37": "E32uUjAp2JZ5GMvTJJ8u8iPPYou5A6XwiR5LrXwvvwwpkj6RsdFNQGU8L5XeKcffkhxDe45B39tC9ZxTCPbEcwx",
  "key38": "2o6dkkinhEoXZhve3c26D3wVfy7fbPiyJRLoQZSE2aZKxoKta8ZEs2FTh4ywtvNrgfRikYdN7kUVwGooRQXHtJb",
  "key39": "ZdBzep8WmgtH9JZkGKnRCTKJkHAVGC3s6WghJy4T2zrvrWNDiEuF6FC3G9KKN1YWTsd5q3iZ2ZnxYoY32g4xRmL",
  "key40": "53bjz5oRWthCNoF8tatN3KGN9f4HPeTJsxUCLi2uDJm2jXm4mZvvdGA9XcHSRQ6kQWaXPjkUozLof7P1EbzBLMHW",
  "key41": "3h6ZX7LJriyuEX67hrWUnmhFbHonjSEuhABsT6pKh9xgdP6G5s61arxPLKiYBiWUwzAck6ZxB9SXcU8TNSEU2JiV",
  "key42": "2vuK6ZFuK2ajNzfYLRgdCsP5tuk7XKrsTJ5WkTe9i15k4iGoKnnECBBgtRY9U1snwMzLnHHXzwdYTs7V3NfxUo1k",
  "key43": "4FVf2888v877cbPahxEeR1KCL9xAVXWwJdE97h3MyFduJx6PXzfZPjSiTpD4wcbDTXbiRXG9DLtnnHxb1Mk8P7rA",
  "key44": "4DN6d55iBYxShLeRK8kXsFwozwDcBGBMrLNNmcfTbbwN8WdMHKd1KFng3qMTtog8zCDV8fhZ3WWyk5Spe5HEEq6M",
  "key45": "4t7didXJgV1UZQZwWvMzMqp7QUJHCv3mgNVRkwBr3uXDcQiYhNNqoXRtSYFxzoqhBqLV6m5mtb4UxWfCy2HuCHsp"
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
