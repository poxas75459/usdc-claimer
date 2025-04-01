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
    "kaXRz5fJa6nBatcNL5Kn6EybR8gCyAAbr1CzBtaAyozNtRxgNeqnC5qTxKkiLWHBpAufMJuK7S9ZjJN2rvMix6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3apQoEvhnX4KdcE3cJcirkEGT5TfURbxhVPjn1XgqysYfFAfHo4JuJPAtUcRFtqLjY5wm1hrXWgGt7HhgwJEbyfJ",
  "key1": "4WfWppxoyby6QjFfZ4tCJvnHWsFeGwgY1Svvyxgy4ur2CcaHVvHPNw2KhpvA42jjUjE86JNMozB2iJPriJ4QvgT5",
  "key2": "53d8QRpnLP8xcKQrhwinLmoGb4vzk4y5HmoFGotmszedaKofydk3KAh2AKKv8uR2x52CfVLKZgbvrKfELcsSXS3F",
  "key3": "581hLtkNEdJhN1hDKLnB12Wb4NwPTYPtxRiv5Yk8Z7tBUpWZWxApKrsLkxrE6JNvCKpCpxRowKPJFNdtPHJ5hHao",
  "key4": "iyL18YNfbnW4o3TbsqyYymMuMyneRKnbWach5HJ8v45wdm3bWVZ7GK9Z7XhaLX4VZcUCbsEHoF5sv1eSMnrMMV9",
  "key5": "SpzUWy5pHRVq9BkaXt1tmiPjnpJM8usj8YGZn5v1SDf5dqYAsKMCpbqAGGBADuELSrx5NVF9ADM4A7rhBWMEpza",
  "key6": "37ZFnXxxPhdtWAjU6AyHbEeUJ9HKUaADyL3GwwhPHbxDWpadeNFZKxH7oneBjuPwoiPWgRgf3iBNDj7erLBeJF18",
  "key7": "2rorgNNvWcWC4yxdfejs2h9jrcWwLJPgnmoY9YEbF4u5D4pGjBARzKNjsf2u9ZqY9SD5cpenKQiNtcDNidbHavuT",
  "key8": "JSEMy6rQYARG9GkXjd7x1R48urhTRsUyjdZkLbqtqwf6XBoDPZmHY1GdBWa25J3jEZ3x8brDW3wHctqETKCRUcC",
  "key9": "Pa9xyD8cotT1T9NUzqz2g3FVg44AokJNjsh8XcCdcPJsvH5En9R33YXxfY4EWQtVWgwn4B5uqUCtTSzMb3nndP9",
  "key10": "5UyFwnRe3YybMSzMP21XvzBumeRMXF3WHYgC5bSjkRtn1ccBT5eMef4KFQfRtjJXRFoknrUSVK1Fdn5rVgFxz5QP",
  "key11": "31dBriH86fo3owvsPCbSbTpfQi8eW9hpGPqXLoNFramVZBbFzVCyLx7xg4q9vTaAG114YPBW4AcsrWFiVo5aYpPS",
  "key12": "58aQh9ii2QDXZZ7a2RzkpsqyKKWj3oGWgZYig7sJLX7hMTQWiu7eG63gFZAk3SeaWKGBAkPGyBxKUr55AvXeUgWy",
  "key13": "29wd7r4GNj5qWQoA4TdyKqbCb7Py7zvkuHkHkX4zjjXNNVq5FXNNXLzg3LXgbFBWBrXEre5DtBH7hGrdU4rdU7KM",
  "key14": "5235Jx2vEgRvXBT9Y7pgpNAGCCN9UaicG5xFZRHafvqS7ZQ6ZzpuBkiUhWvGixser2q9C17DQbPpQwgG6W6JGMdj",
  "key15": "2HSKawHQxR1H3pc71j8TXgRdCzWxm9B7t33D5wxUyeikBLJUqus2ND2STXQp1a1V3CjqeVRRHqMDfys6diCgXLua",
  "key16": "381Cb23e8PTLx56DzmrvUZY9jA9122jFvePCuZJwsemNASJ8WViha5g3pQGaNc4EpdzTxeYV6EXNxojjmeFZ3LFb",
  "key17": "3QZueH5ytj7XHtUKeTTronKiNcfm27urze5C6b3neSLeVDG6yCvV8YywMnNcX82ad4ouUNC8JB1rfzJv5GqsyqHC",
  "key18": "3QYsdhV38ksuwfAR19D8gnFT991SBr8hSUX7Hjg2drxFi8JeGrLhPNvtvKGJ88wkaCLG7sCjALnHG4FvR6nhSNv",
  "key19": "3mxhcH1q8F56iMEXFbnXtg2jbuu61uuc5hp9vmW9V4RfrvW1ot3ES6AGBnFJBSZLP8zy7zx4bCKGLRAq2b6z4mBJ",
  "key20": "4qBnDN7c8iQRRjBuWVvkxBLpj1RfdBYewpT31iJXRMSpmpWkZ5FRdtbwAPf4vuzFuhau72KtXSRRZy5eJr5aoDcY",
  "key21": "2N9y9V7zJJuUK3C2RhAukvcebG7YZs6HtReBGyfcrLAn7Su4iSrYGApR81jNS51TBMg3CesN9vREEK2Lddkm8brg",
  "key22": "UGo48bZWEx4xPDdjzG8F6Ek3QD6bd3wS44Y4BPYrAzXtCrWpKUFF9X7mbCbkZk1RWDj6wN1fGpM3it8NGAz51Ji",
  "key23": "iVku8trT5QxFXU2qCn6bTRJcE2TWoubHJHnRYHvbBdhd5dkdnL2axBNgxXKhJ9s7Fur3TZuj487yqY2kujvSeo1",
  "key24": "U7SxSm35Ee1HgWDjwYR6MDDHKzseq31rwa9Tk4VCh3nERRBsAxASEUt4xKJvoCGZw7LNrRkgMx9ACWeBvE8QLDH",
  "key25": "2gwMKwMRcYzhYhxmy43L7PUaccFMCfHh8caK4PsnVUzX8pRHhhEAv9j1jsEi88qcJeqqfNnHufEG5HdNCwBTprjb",
  "key26": "3DbGXqUSa33TiKrxgP8qFv4v9xkQxdfkDY1RTZsLF7dbsDwAEQfKUdQWuUzvs36CNqeZJWc2SiDuEm5Bw6WP97iE",
  "key27": "3ef1oF5TsmwrWX2iDRwvqurDiGHX2zj8HVbC7RgctyBy58HsFr2gfVwyzdSk1WHaZQByAZ1YCnuHrbgE4PgboJqY",
  "key28": "5PoAigZqQPwCsTE6jjYJMcAVF87nUmosWA4P64nKeQfCPCuZkBP7LUSJ1vxMdT3P4dqqxWVVL5b9QtWEzgpuJ7bZ",
  "key29": "5MJp7hQWTmvEiBrcMMdTpDFg4WmwbiCvTH4LdrMPonv6cx5oTcB69AJdRLLfx8jPRzo7T8nMXcoMY9V3DCcPTSa3",
  "key30": "4t6gLqXkwruSWep9DPgFHc5q1XsXoakAiYU1TPEvUyeZ2tCZNCHVCXiqpLzUMny6JJQbwB6KvxngAaGTePfVf4KM",
  "key31": "23UacKktWGQhzkfVSzdFFv6CYj1kYUCW4uKiyYZhXGp4zoUz3tLi4GQrN9e7jKFbwqdxBX3Z9rf1TMTU6GCHnoTt",
  "key32": "2XnQBEncxad3B9dEvcVX18zGH7F1CDfGiDXudAVH2HTTAvTvJnR3GxSJUMewPz63TKyHhEfNoncsFKWh9G9WbkVK",
  "key33": "2hkrrv72jY7CESLdtV1QuWKCQGem9U5EdvWuLKRVeJAPCruzmwcEwzmonPtR6CyvCAvuJznvop4Ziwqdv8N9S984",
  "key34": "4yziSm57J6cC7rfBtqnwLQr86qpmjCHqeQAQaZEQXBBuj5G8HVXoCLeRp9kubB7oLJGkGGZzGqEsnehdcGNnjSiV",
  "key35": "3vRnxYhp7aE1GKEAMrRJfR7SK9eL7Lqfj5kTJkoFidSTQiLaKn2jQWVVRLr2FPyP9sKcLcg6q4gh2UCYoBNfSVM6",
  "key36": "Ja9r2WZ4cLhgKLQdiSQek3tdgDw4RFc8osm7bvGaHaUSbtFmNyE2ckZbXKh96Msu6KxDW93HsoJALYLZ5TuhqtB",
  "key37": "5188LbHkyJ1montDDSiJsii4RJCjuhQtGhHbHHXwnSGxNovcLuiKFWf99mdnNVdXpoTKrWZNMiVfhqHBzyzjE6sx",
  "key38": "DFUsCGA89wf3pquZki9aWvy2P4aNueebVYcZC4cymfd4efFnfzN38CJyGWnKrRwptbyu8m3H1WoZzXCbynp9Ym3",
  "key39": "2Y2hZAtYh4h3iJBbwEbe8D9k97BcXCBmmnHJooVyJHBty3RiwLMHGcDiLRyeQJg7J7a2aewLscgr5NwDTch2yFCU",
  "key40": "2iEWmjcsnHk33KFhfKSKyvuPJ4DED1mdfmZ3B9zWMJ15LXJDpLziVfyVyxcMWN4kHTZtsqRTkNh3bapJiKeGeqFq",
  "key41": "23N6LBkpPdoarB9G67GHTuYd2St4WW8CG42Nhkqmwp8YMTXMkLt1tuH7y3Pzj1fqCqzUeRtAt2bNyTHJvaju6ATE",
  "key42": "4kmxaB86pWPnsfZmdbhpeTFiwbo4NSsRAay7aJat64WRPN7idwuYhdjTTfeWKSQ8oGpZhAcLJ3imUDKeCH3KRxmE",
  "key43": "4SnmDuSK679BjyiQfCfE645uGmgArsk1JMm5Xr3VKPRDiSDCDhJqgugmtVABbYwVZcCugEMDdmp4NXJFsUeGspyU",
  "key44": "3rzrpfeT2ageRnkn878YdsUs27YQgwUAj85oj22iT9htN2VocXLCqJCfqAARqsUiqmhpbmQxQrGyv51C8a5A61TY",
  "key45": "3FjCtK7wkzZk8GzMeabbXZJe7vtJHjSsZc58vWhCC95z1eszNzmkbgjTZikTsYCiaLagkBPox8eKhYfPkWgpyEY5"
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
