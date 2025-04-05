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
    "4v3nhTFqrEdon2Z7eD98TSAY2TVFcvz8oeRazwuaf1CcFz4kJSKDrLnQk2wQJtm1FeDvu7fukwAzHueofAbUFei9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pdGTtssERXcAqp7jm3vfJeqLncwjaCQiszMXxLvBrK5MW1HgKvHxbAmby9d44nt7ZxkKpNfKvKyuxSX1HgbAzDs",
  "key1": "2rZHnJRG9tpLhagrecFxbskB8iv3nbjaWBA9kuYtDrrEd41v1dykmZC8uoZbx2apS1msobS8ksVkuQwjXWnggaFu",
  "key2": "WkT5HYx16QeWku5Gu64bX8rqeyNsX91hunvdWeKDnuh2wVm22z6a2Z1tiDvcqJTnZyKt8zVo7gykMSdxNwux6qS",
  "key3": "42pQkR9JfVjNHAqazbLR8xeSr3D1vozBXftXX9g3NVQ4HCkJ66Ry889P3GJeeuh3gp3Vr8XEUwrrg4rHGtTHsNzY",
  "key4": "3YWAzLmQdiaWqhNgTa8n32gTFP7kKZpqa9KGuMyMzLHoeivSbgD46xXDs4GFLctpR3voRUtyhoPDN9rEnJxgTe3H",
  "key5": "5oNWJNffH4i26D31VwabdyVRM9YW68KVyhXVnT1NNUQcvnrqXBJLx3jRTyqww1B8QSokSE21GBp7Ymn9r6DnkoJF",
  "key6": "3qvh91Py1MSid9bJz2EdVkSsaUTmhHALJHGQiAEH67Baj3R5i93vDw19MEBDRUz2HCBzrMFWkfk6x3C9s2WFSp5R",
  "key7": "wvFYwZmuXtsJF4yLHwasV2ApWvjxhty6DdqVvQg5hwgyFztMgvEb1th7jaRBj41qpsiuKHk9iFGWA3g8K4sxnWQ",
  "key8": "2WwSNpPe2AwTATA9UW5BQV6zsyAK6jm1u6gVgSTzNjfk6bYmEwu4gavFriHhNFtxWwC96BEHiCUZ47VEMcAhu8V8",
  "key9": "4yTjU7zzWE4CQSieHeAGgPXMo1M9gjCdydB461URT6SNVi8TJpnXSR3rDb1kipiTAh6mxJYhmxJHh9Jh1AWtfCWj",
  "key10": "2FEyyUTuxs3SBcfwnWy1nR6jgoKDAUufCLniRtfaNRfv6z4kw9tZv8nh9pxAMQaGuwMZ8RVumsDJP7rNr2UrBoPc",
  "key11": "4CihcAQ1aaqhZRPSBtgnAeTuLD1o6DALR6P8ux7a7uURFghwgQiQ6J9D3xo32eF3HKW64yrPNWCnpTv9afs1A5BQ",
  "key12": "3Jf7Q4wGPGF7fyDr9ExuipeDecEYdZ2qAWtSjusaZATkU2tdbPnVbbJC52vLsEeBTtd7mVjb5vw5VcSEYTVJWQAd",
  "key13": "2qCnuAAQuHzaq3oMsUSaUKFRoREQzuZBer1V3gs3mwrDqyh3LHj4ASbRPSSBHzUEgmhTtzXpK3c8RYRbrnYCL3Tk",
  "key14": "5JgUiyvkir7pnHNBJSyjjqFiWTNNBPZSrkfyCBy9kEmVTekeyWS3u3r7XLYee55nHvujdm6HFCAKu8gqJ7Hhuw6N",
  "key15": "2AHSvJH1davLHfnC65akVArZaLsfZhX7akiso35mCD4KrVfAH2h3wHWkmvKDj2TFRbTprPhGB8GLvViCxwZXFf3Z",
  "key16": "3ypErjxjoUzLZSeHgqZeggGqV5ZJsLkFBJMRZt1nKxH9t4D42oAT1CkNofmBtV9oV2pzQSb4mb7o9SaArMGQbTfo",
  "key17": "2862ajdTireM5KdfezW8ZQRcw9puACVSKRQXnUJ6EpG3vMMiWc5BhEX49hw4qPBLbPnBYeEP6DZr6xbihoqTpfMA",
  "key18": "Bb2WoWHGVQQit7sNFALev2Rpo4J2ZMKKPgAYAdYDsfhCgzB6sQBfF5L4tikKnax59q4DZj9yHgb9PrP4UbNTaUx",
  "key19": "4wzrZn3jEPabgjabfB6yuFvNxqFnUwuLx97QDKq1eMRrXGEm2MqUr6fQsiub8QnSEknkUT3RsiE8XzJhBvqZnjL7",
  "key20": "5JReSn37tDjnG3QmHdwCKHuZVBbF4n721cA3h55gqTyatE77SGxmP67xpv7wowBj7VfVCCFGLSm43L3Wtrh4YMVK",
  "key21": "G57HNpr37GP3xtbM8dq4HmptLGjqaaZ5TrpJQonDNpoBZnQtBgB4kdK83jzZazeoUv5CSxvNVoUSTH8sMbvzRAE",
  "key22": "62nYh3oZR9XWy2QV9EdnLMFuVM85XsZTiiQtCDyAF9s92iR3WgxWgTZsh9ersgDMbaFcAsdTaX5UPHvKvPbii1ss",
  "key23": "5EFwGv2h9UYTD4mSh9Nds3Fyf57ndzeCbAYfShmcUZJSx3zyjw7tDCrdwwc5h51RvWy9BmN7bbNGn75BQYoxVkwa",
  "key24": "55ac3kW8dVCihtpXMhjH2o2hcQhFC9eGJ4g1jiTtDHCuDrqN4qWhkiS2CkYiyjdVmHRmVv8LHocNMabXhxkyzmeN",
  "key25": "3Bkzk5tqKC14ei2yNBcY5UVpEK4DkAev6sabWTBq5hvGyJC8FWEnoqwjfuDpSNsiVuckv9ZaYRuYn8U9zvvN3jQa",
  "key26": "4Ed9F1xFZ5fYMFtWWNrApeQ1on8YEQzjChSEKDWE3JgGFjt9vieiKKzryxoNdSgekTvpiryAaKnrKr3XTaGncRPA",
  "key27": "4i7pRfiHpU4EDiwL3XKgtHrBDn719xHzAHnkdpvZs61tptZFNN1V2vdMvBvzPewaeJ24UqmaeTV4DngSeiWAEuam",
  "key28": "4WxLTDQhbxuNLMZinxkgWWx5zoc8WVEFprH4Kj5XByRQ1M7Va9m1bP9wNfffeUJtiToTT1Kx4y2H6gAJBxcNLSz7",
  "key29": "hMAQc2GscZqgEmXCuorVDXTSkAWGCo1u6LBwmUZ4NzFzhDM3NGBX3yNJCSvvzpPNEKA7y7oz1Fkm1xCGAgbNcG2",
  "key30": "5iqNFivPy9fxRgK8dZwuaVEjJRVwm9zgNM58JEa1kz8c1WYQfW9aso47KU4ytvP2dRQ7QubTW9HxBWb6xRDfCEAK",
  "key31": "koFuResBbMMfWgJBzCq146qCKtxPDcT8xZ9Kz3pgnMhMLsN8KtYgE6C6vUsMRaLQEGSWmMaHMbMvVJrWQ8uYvgS",
  "key32": "5tVAqPG9e9JKFh4SiBgEdZCebo7gL3XhqkHafSmRbgjjWxCinThfUP7WBbsgHj5boY18vqVUdBYWRhhyrwRbJhM",
  "key33": "DC9jhAU8RsiGG8eFcWdbi3VBurxXrgEV7FKPJX1zBR2TH6WHYQ5xBTyVb2E7pHav8ANHY5zsVSXUYrbujSr2nUZ",
  "key34": "YXY699xUGVoweTNhjnE4AJuhMidbaoTHXU24Jj1PtSvFHgrHDboecGncrTkkiAiPBZecjwXqqQbyw8ER8T4itw2",
  "key35": "4zPDf6rougGW7y6cPpDzYCrp8gTETsWeQXxPAvjzjAbVd8RxcnJUmpzEaTeRgzGbwG1b4Mae6atrqqzHJJzuUQpS",
  "key36": "5hZgpr5x4KtPWN3Gv8ccBgrywGzgZs1CQM1L1YYk4QZ4GSVDBs4iPbqX4xqSohMXiRytT4LBPHhmMYkXaL2yTF4v",
  "key37": "2YUK4TJad6i6fGmHQ7LZDf8FCdFq6akcNHMcsgeCiuEcRUrBk5DSatXadf66RL5mjDxLV3ci8fzATR8v7gAj8Naa",
  "key38": "3dPm4z4nWAJj1RpK4a3DZg9BE21ZT6sivBiLLJoUk6amfxLwMCNwHoU1RqnFfPw8mof2iyPaXQexRVqRryL3YXZC",
  "key39": "23o8urkU8ZnnRSZr8XHvC3wzGwrAXZXvKhaw3sUipaYextWg5mF7C3wS5L6Fu8EDVvYSzkUhyLsShyGpx3bFREWM",
  "key40": "5BYzLC9US7qu5nsjxw3yDMiEwUZQJoKFTdXkScmVZVg6e3HMts1cMGLS1TaK2Tv4nfji6xJ3sQa14Dox5BmP96g5",
  "key41": "3Ws7AT2E9eFhHYD99zeqyDRfrKACpeT3x3QcTzbMzB4ArJ3S2VARby38avYkqcJPYcfArvTGwi6TXG5v8wr8wcfL",
  "key42": "3PWnyCxh4USFuxMrGucBTC7yfLcLbhzsix6sMzpJYux3bBJyqyv19TiHk9VV1kAzV4HXBzW2eCF7qhuLY6gsru6Q",
  "key43": "KyU4wMizZzMuk9bBkiLe96Nchkkrfq77p9F1uNHtjNSBp518kKE64h4bh12fyF2TBw6Mc9Vz7VmWwPvXK6AtaqL",
  "key44": "3QYNRWhtn2dX2cKT7eXX4tdUpoAxJ9RQVEae3fkSPhXtJ3LXNUNuFwgz8K4zjLFS7NKmdhvZGG9fjKYwJA97cYvj"
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
