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
    "4oy3EGjEWV4jc4iDp6UU7cL84nVZnHkTvgBTcymLWYXJPjqJcGoW1XR9b1aoJzEASBfRvintFxctMXJZDYPqromd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tXxBnQsUziMe3zC6qE7ySxHchrPpLoY2mycXJSZoSYQUa8k1tmF2pRGAo9QSw8JzEBhXiuNifK6C1HR8vrQHehF",
  "key1": "2agp6bqsE6aMyWN8vCDdt7FHRBwXf9RH8YNRjoi8YDN1tVNzU9EoYa6zqW337kcFFtEQBusLszWNfPssgbSsLJfE",
  "key2": "4yTADnkbSghu4VmfCi33SraXhG2Lhed4xUnZE1mdgpVRna8F5FVYWkewzZBttPHUCiNNk1jg5tfqFtkFQay1nUmA",
  "key3": "4DVT7kb8hee6gxsgCfpePHBqPz3QFgVFeXudaYJ3nnuwsk7dh1nKLqq82WzxMR3bp24CGrfW9SJ79HqEZ1AfM6Wy",
  "key4": "R6VP75fgjSqizBokUNzqv9QKSNMMY3VxAzG1q9PLNbRW4JyeQy7nVogMNRG1rP56snJVH4e92T2ejqtaTuZc7y4",
  "key5": "5zaKVSwNX8u4CX4AhNCw1hQxoor93D1Pe33hGeeuF3vPE87hjPxojbE5UTqHJcaPp2gnNMG8pEwRfqHCiFacf6PF",
  "key6": "67e8a3UyuHsra7JqbqPMnTgreeWDfA7fyZcTo1GdG7Tmr5DofiBT7DSuA2MVmnsGnAAEppJd2YB2wJuRRTCe8vfQ",
  "key7": "2QMCc63BrKV7Pj4ZXPMFy6pPcSCh1EaYJ2tVoZ4hHpxzZLDvsUW2GZQRjcxaUyZz65Cmx2H4ew7HaHrRxpRaDbkv",
  "key8": "4ztm8yUMELEAQc8bpyMWYL3yQBf3zPsJ55SrFzFnaGRY1Sz6o3TtfgCoyjwZSdgSzcaAYwZGLNRxqLi5w7bbtiJ2",
  "key9": "2PRutwEbLPJhCQRtMHzBW4chh2BwpF2VjpcnznVEAwLBC5fq7NiRvqSReXk2tCnSuJ5DTrFTteoaABpu8Mn8B1e5",
  "key10": "3fCGPC5gErtAbPEoekumzrNKrHzUZrN4dJNUzXTShuh8RVNBXM8bYhvPMmCMB52c1pNm2xtdTuhED82KYSX6q6Aw",
  "key11": "3QwY79sxBMAEvKoZh8jdvKpLpS88aHgBCAzD5k7Sw5k6YDKbBvx5H6fsJcdcnNtvwG4M1BH7cVTiDEfWN4LyGGsu",
  "key12": "3pYFvSFTiT267Y9qifgMJDqr51cG46VTSckeQYAuqzfb5V3ugWEU49bks9KTV75EiLejimTRMyjSVdt1JiJYcRCq",
  "key13": "2kFmjKa54UvR7BJiEzq2xmMwaye8RJHdk99ikw2ZPE8Kd3GASJ9nKfC9ua3uXB2FnY9nMYmJS42bP4f96cPy2khP",
  "key14": "5afxHgDfGiMHjCZJrL3Q7wV31AjNFnppwiZtpiGbP4DjbnwbnG2u1wWsmh1dc3zkaTG73o6eEKNsGBCeCMVoquRZ",
  "key15": "WiEK7hosNxwLiFmNMPY6RySTp1XiGji4EqrtdW3vEQmGUFLpSNWTqT9FT5X2MitVPKBDTF75mAwpfGXyqb5QK7j",
  "key16": "3Jw9adAStZeyeg2JJZSdN6SEVK7acAfu67Fv4WMukpHEpj6VYV5Jzewr11WRobyzUzzLKDfojV8vDyr8qdnesu6g",
  "key17": "3Vm17HHWyPMBXSGj2CAR6sEjbH3kyDgpygnt3zRuqMvBKbytA586j3eK7Bfm2GDjmKYx1c5qkD361LJV4JruX6Tp",
  "key18": "25SbryKsVWdzw1kBVq81uMPs6YyAk5yZdXA9tqibynofDaM7bnRQQ9XZA2eZKD5TKtcuQbasqSs4JoY5T2hKcYxv",
  "key19": "Upna7EzH5ZmwTjxaRFg3EvyahLgSpaJc2U7nhQYSBB6bHE8rw7THC4MNmX593bGscQjeLPu3wo2KGijubu2JRMc",
  "key20": "3J18KpADsZ8pizVRVLf3nbFzGq8WMVyatzyh4ECH7N4g9x46WtC1zammip5K96DBkGLvkGtfwXsC5QeP68wv4R12",
  "key21": "5cjDYfS6hxQABMYr52yrW5eJy6RAcigNM2hUwCA99tKtTSTSc4huVYZFGR7muAhmAqmTed7ukM7JQKPoXmZprqZB",
  "key22": "44AvgfpWmTgGD3AipokiVuHzRBcY5MLRkWRUKuUEagNH7CbzR1c7ewJGzTEDYywYv3Lq4S1iidkSrEjmLT8LBU92",
  "key23": "cvb8wmVaBipjyu28qJKmH626bypZUjvr94Dz6ewKuCJ7KyXgBZuEwx6HjH1grwV9uuVUkLmxnuDwNrPca8nMYen",
  "key24": "38jdfoSxGUEbTiycDU615eosb1KeWoruZ81vL3bKx5sRQ428hUucqzdSrq6MaaGFJVd6mxmNkXJVnGhryAg3QKux",
  "key25": "oMzN6zURQyFUqcCU1HHN3XzeGc29tvEE8Jo9JaFjvZb8KhnkmdFtw6JfXUSTwAWEMCTGtZsWj2r2GxkWrRGnqz5",
  "key26": "5oX4P8HuKUhhbxZhQvKvzc9wBfJZiZdR2xzNKZULTEbq5khmc47zpukH5iEs82JGWwE9AKBz8ZqxGqTocMK2Ba5Y",
  "key27": "HrbU7W18BhWaSiAdNDhejg5mR8AcbG7PQz1DLG1RkQHEaKhxoWTBJcZFve8wD8vVad9YLCbQduoYARPv8CQXzq2",
  "key28": "3NgzHcVqhF92Riy4ZdAR2MFj7D67uzTrf2Gic4QSkLzzy5C5Yjoo29dMdVGSJ7wSvyU4KBFqq61hgS9kXrDvMoup",
  "key29": "2qyVggqThsZj353WktvcsqTuzBjPdnX9WSSKtpudCdEWm9uEJ9ft3Me72yf2KkR3T1ztQAYxZuT6v3UBZjYgyaUi",
  "key30": "3JE3QrN6FbuvagGhAYWbEWzjxLwvgv8YemzYsF7mrrtkchqwF5ZVan6CxFnWPg61QqRpsyt2RG123s9qHNH6SRT6",
  "key31": "5ZHZ7Sf8ofk7AB47Jetj2xfxFt31xFZqY28APe8kenm3A6eqXtgcEniVrUyVbU2mrtG86h876u5qHFs1Mu2n6JVz",
  "key32": "53udGXuHbbhFyuk34CQX1DWcpSoVDhw8PCpFgZn6mMzwq9p2etnBXzsVGX34MuCH3ErKqUzxpsxGQWbvdRk1RKLq",
  "key33": "3hmTPhYqMdtZiQDnHFipPUHfcTieZm8jyikoubZDuZKgGYyGd77Ni4SeaddLHukbdrbT8ktcW2T8FSvTkGssd7qj",
  "key34": "BYyMgEtH4ikQ1gan14uy5nCtxn1zD3meVJkUTdx8WXQxoEYo93Ave2mEykNky9FcEPeFeJmTSmoM7rL6DJNKC5u",
  "key35": "3RkSWY14kYPEM526gZasisVfDuHLrP5jVLoGGVZcQGQQZo1Mch68pjn3s6V8K8wRukdJwKrFHpvbATsddkeifh5C",
  "key36": "2aSYJgFbsPu2GvLRvavX4MtyoSW4YQr1GVBWkAfQZFSgaztSviXP3qhEYvWo1y3b7Exzn2x3kBZqM9thZ37SE7Sp",
  "key37": "2Kpawsa7EhE4RwZ1RgtbEpHHNNsZorP9XTWq8SftEgLexnefC5SH25QXqQ31fbwP7zUM9TJBVtyuHGfFcqtdqWVR",
  "key38": "2qwASCEETjBgnHnVjvdJHCL81fWeUzrzAUMTm9D12d7iYyLvWEG53MgDudoUiYLFb9hpqt441URBjw5p7VHbM1mV",
  "key39": "5z6oVDefA797QNjeG1vBggotKNzrW7Ye2BFjvwm4cYxBydiAtdTrW4P5tAUUfMxRHH8hYUy4WKymoa9rr3QDie57",
  "key40": "5mgkwTrX9racKHZt1z9idmQvDT3XNst1i1bkQ72BpYKeNW9MXquivqAXQ6VN4osMD3EEcuwQBhWyvMPwuXeRsLhX",
  "key41": "2Uv5daH4epPoCPAeCQBTkQdwABrzg5r6WN2xDxDxFBtpLhWCwuAwuF9yhP6TerRuRgoa785hVrSF7kUnJj1Kj2ay",
  "key42": "5LKSUBoxSnM71scSJBwBagH7SXVSEUyswcfKJPhKihLi7oE6cQWjGG6V252vzWFvt983a6yjijkBd1Xwx4jUrEWp",
  "key43": "KYtGtYkSjQoWa9zaC7EgayuJRwEDjWPMf9rs4PYbGSDyH4JEfCYnTEYb2EpyVdAHyja2pnaURDBTApuDAziFtya",
  "key44": "4qAp9XoK1vrefhPuZJJHVQMsrUxT8qyKnRVL6nYL2sq6zcDGEbeMsUnLadWG9xYQPehonGXST3hafDXC2LkVzs4i",
  "key45": "3ecP3HjiuSe75zmNxRa1Pti9LMdYXmYFiGTHn9BqyEF3JkVZCHNGq7FEoFBcmCVFm13yDXWsRqvpNvqCcMwymmoQ",
  "key46": "2mzfEimHUU5DgGGaeNyWuS8N2Ecisk1iQ5bdB1RBPZke1sdYXBKA64PU5wmovwUSHKx1EinZnJnnjUNkRTGEp8X",
  "key47": "ur4jE1ZPMUMRSfexUHWwTXrcg5TgwJA8vEge3VmW15YEmi9W5cHQ3EGz6pJGuHYjYQDQHNPGcSMAi3EbD5zuJT9",
  "key48": "2kFKxGa3H7vUsP99ctoqvYQ1FvJ36rQT1fA29gXHtZBegX9Hu7gMggEbviGdWKMzuUeYnepdQ78MzQg8yCsoGugu"
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
