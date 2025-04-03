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
    "3nvVBQSwVUBybazHxbQC68Res3UdKWj4KAxpFqyHufCJyYA7eMzXGKVp44MTr1cQV8U7o27UwWGnRwz5rd8dfoS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F5WmgXFrHJrQHqhEkazbj9efUeGx74thTcLzxiNqfZNc1XLzfABmYonTFyMbHQcCATReLn2dTHiiLcXC8GBzsKz",
  "key1": "594iy1C3wQDd2ZjdsNaUkS7LKqd2Khv6ijD1kX9gEtuBrSEFdEJirr3S7YqTgKQ831An67d9oLEvxkZM5jEatWqU",
  "key2": "FY3iotKDt2LjACnYbhgP1hFg7qg68zj7zPzZLUkdGxMrF4GUfRsR4g7jM98d63CsEMuqgSvWGApZjfdzARZshPm",
  "key3": "4QrDwq6WJkfDzbQ37gEAAtjziBGLcjokM2MwUqR2ND36CAVfj626qS4i1UorrbVnza7MXSJRHUwUx1eXpMUYhRS7",
  "key4": "2sjksfXwTL7HpDE1A3b6BGV3Df6sFyqedonFRgjV5tfzw7FzwP8Asf7Pm2as9xcwMzRLYTeoEnyFFbscyGzmTZoe",
  "key5": "2MtrjoagajxveR6aFmobGVNE4qTb7F6cK8ECVLZqrpM8cGAyABE2fSRyxeXrV57TXSqtp5hi17KJqnx8e6wdvvyG",
  "key6": "5sTdzYBEdZgHS6W1SYMSr4JiDDaukMp1oB8cQDCYe2W6guJTBRaTiY24WDpimLs7f9ZHym3Z2TZ4b1CS5XFLqZCg",
  "key7": "ptoRZntq6zkzJictMGDEXBiYNm8kZpViRBfjNcz8sLu4oRVrT8xyZXMnqP5tYywJUPjuN5Vnob3DRhkuswzVAJt",
  "key8": "5Kx92UTZ4f2X8yVngTV7G3ZSYQDN4ka3d715z6aJ6foCtaz7bgzFPpvWc4h48ymF2BbMq8DD4FfiLK2eACqi87Qa",
  "key9": "2zGLtPSBcdxJXm5EdFTEg3FYVGpXkLSwA9jsugDGgC71REGdUF5MmFMtgc9nubU8gQPSA3adSjUdgXSckA8vYgKH",
  "key10": "e9e5FsfUQkQVch1upZoDVxeHXNJ7c3mq4YsvCsssWo7GaA8yxoBzoAp26sScXWRhKS1EmbigwpamsSaqS9vs8dZ",
  "key11": "5Bkr2Bvrdm1RP6bVwJCyUsfPvvoyPGPbY9eZTXXW11r7psN5LFxiP8pASAG4tRzKbwyYyhUFKotgmzuaH8piUuEs",
  "key12": "3xoi2CYHzLpFJr34GvEca9o6ugut8Tw4dwZeKqpiQbtM8kt8FatNG69R3NAJL7Gb7GMpUH7NcvaJ5e3tSqBKajYK",
  "key13": "3Pn7s9cm6c7rs4mWCQN5yJXYto7qvT6j9SrxkrRFooLMYixDLu3PbQrkJmUX9oLEa6BMq3zJodpUyzyGTUGoip21",
  "key14": "5RUQU64gDisqNnDTS7iKGY4w5ZoJHm7QvD47ehK1Ya3L68ovM5rVdmVW3i5p5tJRhSkeNhcsSd86xUefbQxRswSv",
  "key15": "ZuUgQNd7rKhCRKrf7wSqT7AfQQkS2Ub32NMhj5r126YqVdKowF2L28ugMDYUH93caX3pCSKkCfY7Tgmq6yQc87e",
  "key16": "5K6oVYj4sdF2zS2RRv4ocyeXdMZBftet1KKQM9VoBzTAZdoFk5EasEKF4nNT7LACaZ5baLQRVZ38S8tdmxeQagJk",
  "key17": "xieE6NxjqpLGeQthnoeSjiE2LgAysFGHrhDKPYKjs8e9YNWcppY87dBhfqd1TwEBE4St8uMS3suHVsJmAgThU5a",
  "key18": "2egpyYniWvD4d4u2BCdoM1LGiCs3TnBCPBKAokLgMrckJoX7iAYrHnwEv8C8xRt14QAyZeXKdLc4JjZtm6KGs74n",
  "key19": "FrGAZnSgvt8J5JXgeLD4zzx4DS3PV4spZD47kqqPzpqDKEEBj1gcgEugVHCpEUymb1CWPo61NgNNfPaeP5y87Ro",
  "key20": "4d1SuB3vsmvgg9p9xLvCFhhgwpAJ5f3TVRnnJZApyApGwBwprNEtbemb4YSD4MrNBaU7qw1wHFgrQ2fHJUooiP36",
  "key21": "3cutRqpBAion9wkoDA54eQySSsAa2AdqLVLCAUUCG9gv1YMd5LHVN72w1q14357CCmjYckiZDRQhyKNcGhkKRPfy",
  "key22": "2Q34fbDarfrhMZjMZXUBDaDmYJxAKJFj4cio58HB83u9zXFnJbXvoBncDd1zmrfuiZ3tq7TdcVxxLtZvAAzh1bWX",
  "key23": "2E7yXUFME5mjZ4RqPTjM5LLKK1xySJ6qdFxhgKayHnHy5UKDszCTK6SirDMQrDEFQmif2wkcm2eqAFQo8iPXDvKJ",
  "key24": "51invZMEst1rsZUdFRYNi2fjRJ3mGAtz6VQFnyqStabdRkRSmAPBqLqs2NFU6LLEHHu9uLdG5dnk5vuyTXP4rjrd",
  "key25": "5TKc3fAHhKzV2dWLv5C43sfZsAPca96NhGtbT3UVkMiwvGdQHoEmaQ5LnCoqqv6zoU68z1rmdfS2yQH1ygBVW4Ay",
  "key26": "59RM9YTntnsZsSjpGoBbSpBH2Y748xH5z7NWZrzmLtLZ7gA8JBNgPhTf3dVNR77AQC1C32dXXYEqmu3ygqSNWYaf",
  "key27": "573UkuJd4yL4BBSaECZMdPYk1AyWG9kPdEY5uytwNgyNZj5RhRPTu18zHwtx5HTZ1xhZ2ky8rM26c5XuWmbBwZSD",
  "key28": "c1UCZn3XBdibx7amXohPaxzfa1wnqCTK9QQxeU7aeSBpxtu9CHpS9wKMJDaK3f7VvKokNAsWMcfebgrc5ZqBUhg",
  "key29": "3MXhrowWXbbPEM4xTFEmzRdurvK9G39hoTQ3UQQWoK1HXDCFc6SMLN4Mqj2bJGKfeJFoxnbvUJUiRe9qwttwAHD9",
  "key30": "4ddPiYrZYhERAWWNWfqntvDnyC3S9WaBT25itiAa6mSrd5M2NMk282EhqkjQ7N7NkmLSdywVkd2BscpThCiCYceu",
  "key31": "3kdH4mKnmFpLgyuViyQzuoWXh7SYpDbzT55bCDENjPxbWwvXHUrktTeaCP8rMDXKiATjW2qtZtjBAtm2kaSCjPY5",
  "key32": "6UsupN7krTbqFNfPtiWzGhQq1nUWUmYVGetNrbkLCNe8cs3HgapHGrRePkqMDERWuZ66as6q5R39fYEknpTDMdR",
  "key33": "2DnMA7iEzNZE9dxNvBKzE8y6NeQNAnvvy3Ks6D3NJ2VnR8fWvqocHvbaiNDAR14HxaV7sitYV925QwRWn2iTcN6H",
  "key34": "2rYdv1FaG6n2a9ojDVXNGy3uMQ71TPEwvE6oLiuXqKUFz6WXKaWkUTFCbtRequqrCMqVmoecaFW495U5JydpQWWk",
  "key35": "5ixmcgUDegRoYPUM5aRvPEVucSouPUvMdtLQHncPFpL6XRCYAjeATvbuLWsG824D816qivk2gV67g6RfFDrgJHt4",
  "key36": "4XNUN8xuGTKCCchskqiu2rUoALmZ9yy4nLTaPbLqfN5npw1qRvw66JRUMvp6WQivn9K58cHzPgNGkMbgLN7oit2E",
  "key37": "4MMCAPprLv2CzQ7fWMAghH5Bd96YoXLfcKpDaPvuJm17k9Kbzf8EAy2Qy9NBj5KSZFrSe1WnhaKLRRDTgDgxzBqA",
  "key38": "5CZSZ8RRnm3rzzzqgcfyB2hGazi8vvjD6F1s39gXSk3vfpz7NajCHHNczTzLSVRU7J9akUrqYjuJHH4wPUgiwbNX"
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
