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
    "1KAcxh6ayuuXi2KtZmgiUobvYjmTeN5efRXV5VvHJFMA1LPkFoUDw5xuDbJQAE74PfmbuyJaRP3dLbUBmHbA3DY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29jf8ACPhBm6ZTUXE7h57fp1KRzLaSpfN8DMKFETmmLwRPU7uqrBPcomoV2sknsa2VybuB3WLmtMNGWZtZJAQLSP",
  "key1": "2GkzoARFAMdER6kenAteRHKVNAAC41TCYkTrGAA2Wh7cSYV4qSuwPZNtNSjbErdT5RMA2oXmFTa1xkyuJoabDTqc",
  "key2": "5iNaURihrbE7PtqZxNor7XgXJp56r6vsbu9GHPiKfogABpYEqufFX9wqMrbT3E98neWmWuHXzwvVBm42ZcP3xMPb",
  "key3": "2THK3n7gUGUtUKPTNRBxr3wZjECyh2YFnn6UA2w23MBVuBVNBN6w8xi3JjfDCt1htG6TG4Lt94jSWTfE4hvdke1W",
  "key4": "2EN9rGdgBXmLHBZekL5vtuzTNQeUheHZL237tv6UdSKRhtk1vBVzHy5rbV1kv5M4195xNW2q7tnzAjtEzxwrXXnp",
  "key5": "3R8WsXBYh6wkf8Si8cBSfhdBzAJBuqRfC3EVqNgKth3rT3oo9Xrcaawqz37jhSTuacEk9paCebsemMngWLyKyjiB",
  "key6": "uNmuu4W9M2R6NRAGaURhQtjGxFmupp1b5xTUZnzLtH1cg5npGzC8U9MzkfrNz5gUfRsnhuSesAMbvRhyDd47o1E",
  "key7": "4t3MazetxbYb6LTs3CSuYxXYvbeFpXg1C1HbF2d71yooVUo8D8UYC7QK28h6FosfxSqYdPBV6gC4NdcF5vNNjvZ",
  "key8": "5zBHQo1sb34VWXX9v8WYe1YoDDEegCDCFAFuDdETw2muDxmGUx8g2F3ppR3pir75s6dbaCePvv1vjnkgYd2zABqJ",
  "key9": "5gn8wowXD7ij2KjzhYQDicyoehzrtQFxKw2CVDnSTsxse695PwJ2RVyZuFgHC7qAKzBZUxLKuLDWLwZ3f6DTKuVZ",
  "key10": "1yzcfgNN3DRCfZeRMf6AwUSHwR9hhmSBgsbF8SypnXxZmctL3b6CZbzu29RqNZ33DJFnWNrRP9syg9a6LVFrmsd",
  "key11": "28aKCw4Ykeoe2cuwvxoRcJ1w3bRnZtymj8C3qocAa8nKPXTfJzEjPmjGmhocoJAPJnq2RwJupmctTCduSv3dyUFn",
  "key12": "21DRXGEa3BSgY1kKTf3z3948gcfEjXocrK7SW4hotte7McFXDhrwc6TwmFAxH9AkLtgxQWchYF19ADt1BREGMGXJ",
  "key13": "59YzbAXNDFS6mSzMhHsKQYCnVpVMDMvbah7uxcuRzK6ZpoviSVNFQ5EZPvBP6nD3aMzS8wYKwEvTKcWCmrpzemiA",
  "key14": "3R3JkVgXm9xKzAuPPqHuGZ9ahLLqJqVZMEtJgK525Hrrsypv1744U3U3ZhDFHrArUD43TTWhLxh78sKCbn8uKhXr",
  "key15": "5kK6xc6ypn6wMSE41M5ctQX29u7YLUh9DAbkqs7kEo8bLoPug7Aytfm2rxwmYJEh8q36vcULgT2Lib6kVGAUrhWp",
  "key16": "5KATAWZaG6BdeHowP3zX7Sk1PCNcaeUeZV9DxVqvqzaXnNtdaV7cW4KY9CuJYKzKqU58UbSVmNnuSERz3a2fRGmE",
  "key17": "5U9tLxDS3pJJwrBjLitmmhm2Cz9fkqEEfa4HyDR3cszT2UWLgq8x97aasb4ZkV21TXnH2GPQqFEq5ySc7ecZLtFk",
  "key18": "UtPobyk7d6frqxXBj4GpTrjdFepVmE5yRUAh3nQud7Bhj9UE9FtJWxHr3b3B8ntKPo9NJVGCxCtU9X652TAvcUQ",
  "key19": "mmQH1TzpbLMFb87CLFKQtByfwFUx4bz2ccANVaocVDmNf3Jifmvg7cWK8UhpTyMtvMCGPWS515UW24m7ZwJs662",
  "key20": "2adRVESPxhBV6GVmWEic79heLfxzM4ZqSdwE3zUNtgwZAFHd8wnDc67QS4noxtYYL2RZRat91SpasbqQryy4CZcp",
  "key21": "2XzNpS39iVjA8Eqeyucg2zbqcG2JW9H36krzLo2Y4PEpD9shT2ibqrdm7dG124B7PLkbTdxEpwdYfapFtBPR6e62",
  "key22": "4KYxbVsnUMzU69usw9nnvoLVBLFeCcrR4dKeNoK1jFopcxxVrwJuVxmX8BC9LdtG59hTcRoZvGKSSV7hsW93nWch",
  "key23": "4mqgv85HMn6TxfpgaqeDSvvtqHU6DPYXfeAsJZ1WKTyZXi41ABi74pr8nzgXoeYnQvS86ev4NXqpZuoK4vMKDZwJ",
  "key24": "2Eyg2FLewaXc7kT8ackJZTrR5Rxiry6AqMsQp2TCgMh9yCod8T1WTtbvakdujn8gKbNpYVsyt2qmSBcfFhZXNwcy",
  "key25": "3ic5RXRp1teV9wP9qRAdHMQv7TbVs5nuHxB12mxzK4YXHT2J3GoYcXLpVt9UC92Pj6ENvmFdcmGYmvXXcH68E8Bn",
  "key26": "4SptDsUmE8Ne87RES1RMyU3iqLpgvpQcB2kqutNRK6sxA4vtwZ5GFbVSFCUeHCczo1QwdyjdpXNKdzTF3cGE2jgr",
  "key27": "5mu7a9HnzRN4AxzVgCgVoMN5BWomjtcXHwEP16aQWDJHShomwYBEYLoXQDJJCSiGM6NbAuDozHzh1tLKTTdmPrkZ",
  "key28": "3KxwQLhFUZXSxtPZtU6FKj5HRPecjhj5eCk4Ff7YuqXmVJTFXZAqo5wCEi7cTG1EpsfsvYnE4PKK3L3uzdH2yC1M",
  "key29": "5hGKafFG5me6Gs7eCQaspGDwv78d7tkDtvSrfpRFskGyZMgbFtfdHWTYeq13o2Ao8bA9JQQxu7mRjw8jTQYgou7G",
  "key30": "zw4K1DZjSLpyX6xMSWKiQ4yiCgN2cAEqP3iKRM2bp63MZHBQgVF9wdkrK6ug5JPgo35R4qUaLZiY3iuLx1SUAbd",
  "key31": "5vwEs58MKMqS6FNuxyvNusTbCeVThtreFbu8yhM2DmHR2ZdY9CnKvvkSN9ZSyS8TUgJ31Fgde7F8ENNNirSRaUJX",
  "key32": "4hK4Nu3FAUYMUTgZvZfbSjdTt2svDH4ZrNt96stqfb5YdRcbp7v9m9qnkzCXAw7A6fm9n26hs15pYnwPy1p24fGP",
  "key33": "312TEPQMWb8nmiM9kcvYSsFhCoqVft6Ek6fbPtLFdG1poxGVQvYAiGXUfga4m1dMpTkAazGhCfhGDim7pyXK1ct6",
  "key34": "3ynLNm2hREsLMThgTURgpR5qew2kfghfJb1oaYw7M61ohcaL9GK3magNwiGZPFq3krLJQFefT4JsA6S3hBCmQLti",
  "key35": "4gW2FjL6tx5rR4qTvh12i6oMVBwxsTiVW6HBiBsyNipaDi5AQD6VDFrURVKpSdmkUN3E3Ar2oai6CC9FQoAxyqaW",
  "key36": "4DWWpvXwNDD74outnxPgCNAqdMdjbX9QwAjLfnetxUixJmdLqvh2jYXuKfvMBUFgo6iwwpJGfdGGufTy6hVkSDKK",
  "key37": "pDL9h6SQw8PssG5vSVHBX9GsqBhXpH4HpYtiAmPZoa9QMZnz1wP6EGVsUUjW6VUVcEaLXDtArTHuUUgbjMmChxe",
  "key38": "4gno35GLTL1GF28zsGrr9vJHKzvdUYrqn7XiHv7r3xaSQXPs76fvq8tzz7oV4YVPwLrfsnuGAgGkdVoZEJQ39HgY",
  "key39": "5XF1GqrKPKNr75NcRsHeCoxZuf6DEWp21dqbphw7jMJgZoKQ5twJbA9MNjTPg5Ej17VBtT3hwP54ttrb96oL2ADo",
  "key40": "3y7F45yEnbwLbyCocxjQdVXHR4fYr2mkZbnbYf8bJdL85Tu9iqSJJcRQLa7etMjiMQPQTGUvkP2ZAdBPMjVf4c8a",
  "key41": "2eAnwp9gNjvGhSzuD9xohqGY98fnryENmPc2VTrLTjUy7XGqLywEqmDSpsLfmDiwmXPQBaWA548FxczMRVZdsoVk",
  "key42": "4RxsmHCkEUAvgqbkkBMgm8jj6UEJ55Qi7bQmFGyuDpxHgngiHfE41oe4bH6aWn4K9bGprRvr9PcthoaQt7bW98LP",
  "key43": "2i9w1CmxTDjWoJ5Ck91dJtL5UHDRLdJn1MMGgp2BmZWF554q4rm5PkcYxesoKQcc4wNDbbfLypfVRk4vfqGTojiQ",
  "key44": "fpZr27r8zSNq6bA1Fz4kNyygjA5PVCzzRtNBch6uXYFDZwUCYwzZmH5n4Kz9vuQd3nzeWpHdvGNsoJCsbkdapcG",
  "key45": "2qFmbbLgAR6Gxq6nEuUaSUHRW5cXspE4LK1XWXogcAhGN9PT84WPcTHZQotHTaMd92cCR4eBvMgujigxHDhNj7aZ",
  "key46": "2oTh6Nd7z1p5X3RoNosNijxxeT9uaGaqyezeCF9aYts3xeppB4JStzowNW2tT1Dh9HV77w1MjGHG5qn3J1nyMvGG"
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
