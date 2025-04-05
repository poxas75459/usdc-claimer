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
    "gbHq1KcjwKBwUA7ZuBL9jJ5KfAdmFCyV8sZbR9dQHYvV2ihjz3WjRPczvmCDZstTqfZNQqPsMxcSHCUMyGvHgNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P1FwumXQcMSNb68RHCHg3XQfy1bNWd8BLe6D4fejaQJJkR8ur42oYx3p3AcJiCMnAbnoq3x3QEbpztDS9R5Aa1r",
  "key1": "2PdBHwxnqUtYPj9C7Ne8MbLEqZoDNxSegn1QuSrmJt1SP88uuS8sFMDtEoZBh9izbsM9DEai8ZExsepe55frfKhj",
  "key2": "27XYN6PtLpguvr2JvMXdANpq3Ljg7agxEkExR7j6Dc8wu4W7YPgLgcTnBDsKro7s1796nxJM5EAtWdnRPPqfFQTq",
  "key3": "5FdgrkFwZGmndnBpNbYNWbBn7iz5WYM5aupV2n2McKrdABFn7jds4gLRqmUHenPQwRYk4dre1K3Zajd2osDpaYE4",
  "key4": "2dQ1ebkCnKmPw9ZsRzfuXpyatvLah8igp2XxAmTVmhHEZaBLkAqhH7Gtk9bDaPjby7GxWU717JtXEUFsGAcDAPsx",
  "key5": "64oATmD5RfWHooCoc5di9ryCwqWtzkKVKmdeTxYvA7WXeNq2v12DTc7npMicNwdPSacZMdavHZYrmmDTjbKsDtT4",
  "key6": "ZdA5tsiNwyAAjNdgksxaXF5TqHURfaj8Rvoqv4efmS6AfBaPipmznCARLzhykZXvq69ckVgZNkxaE3jpaG4oM9w",
  "key7": "2MCUTUYYy549FcMe9B19DmBUJaXKkFj2yfpYiCFZZ1MYh3NjKmqguUVyRanJyWsVut41Wb2e2RHGXC8PBU3bKuov",
  "key8": "22d7P6FReKy1nm1BoDHu7bLRPdd3CaDyi8ZbmHLTyY9jHSbxEqi5M1DN6p6AjxL1guNQ6jzoQWNZMjVwiTdmkrtZ",
  "key9": "hEzsV1qBDcJewK4ryWYT5u5UvW3VeeRJXj1ES8pEkfBCSF1TB2nraja6qepXTnJ3ofJi4rY6W5K34zTQkswDW2h",
  "key10": "4hHGJF9U5vye9Wt7L4CJufoFmZSAcHnUUqDv3nU6ErzYZVMUUyFWF1dLWhmPAYcgo8TP8Kvy7f7nNAhQ1fRG2ZBF",
  "key11": "5zcnB3KUgzrWpMUKqgpsYHSZ4YuuKUaxa9WBCdoBq9tzbWEzHNC5c3HA1G87hg21Q9vJEU9MjSpEsrmDhUTgc3NQ",
  "key12": "5n63TRVZ9eZxh6k8UqDqF2tVqPVrjGSX9werPR2vYqRTchnW1RJhgohSwQ9rmahTrjFVzvoEeMpnfkEQLw33GFR4",
  "key13": "4wVoyXX625ypNRDVWGf6ZX6wpzuUJwswMTjgzvDS41KoESJrR4WsGSzzReFjoFHhjNBedd2cCKT7jsXricoj5gPp",
  "key14": "5Jof8eiYUebM8gGXUayskq43Ed9YC9vnVCUBLLPoC7HeR36aVX2Hh7KNXETroxJbZDMYqBJNY1GJVnVdyfdqj4y8",
  "key15": "4ttQxvY44TQhTFVuaeE6hp7h47LgHFe9R6JU1XwByCKQrdUVwvt3a1d8BzMVqsz1CNfU9XfVfdmUtJNW3ZNQJw94",
  "key16": "57Q5tta2pWfB1cKJ6Rjkc3QCVuo8hGj5fa5GcVhdWEca7mEWiu1nDefQjQoqmTZcrPPh7PywKveVt5icHsBZiD3g",
  "key17": "2Go81xpq2XS7SeNqcdHJugKmSm2kCHw8N3Ms8vQYPjBYGwZ9KHrksy78b62e53msUqisH4wK43ZMehg4Kab9M9pS",
  "key18": "5T77TMW1bMqY49Ys2LFgZf7MX4n4sQhJN1KwrsJxoiNMw8hcEddpAKAbxCwv22MbFiz649BE12FKDN3z8UJQQhMw",
  "key19": "6LDitnFgkTPaNeMo2NeA5YkEo8MtzdF4RxxTz5XtkdvWK22asDC2KLU1RGdDp86if9fg1b89Tnn1wqAmLgpnjxp",
  "key20": "4rw4hdovmRj8gRqUYhhchdRR4rjUfv8dYhp9aCmkfPM439kShSZ9b1GjGikGSHFYijrFj2K9bu9g5bhSgDZ49Crt",
  "key21": "2oogCRWNNXtmShkKjtzNE9cCZcte4ZZZHR2DYVz1hgQDHucrpT12KPKXbtjHcec2VGEotzF4b2YzvDP9aEgGC5sk",
  "key22": "5sSvkXhnMZrdLQkP2FtknPj6CVURHEELLqdDRjiNGvnRkZDEVbjbHnxGFds1gRxqMQjD26CitHQA6e6LzcHJYDr2",
  "key23": "5WAJLSjbAW2oYhWf4XZ45v5DBdak8YtwZt8ohmZddRvaKECM8rZ6S4JmzykMk2K75fwgZ2QPFngCT36SSM5siVRe",
  "key24": "5NVKvtFCkTq2s4QcEpGYaDEnVYjt7BUQcPRtda6yNSgEoPZmitDdZtKC9QoPgXgGoWx1hAxgZv6kVWqtXQYc4zSX",
  "key25": "2smURZzrd8pASYUX7cmzDSrbsudCaUef7mDbPL8sf7tbFpaoYDJQAjrstBJhnLakBtafYDuZJaVjCAxvinZaw1BH",
  "key26": "5VdMZm2xEgyYpVCjatzqBu2GsEBngUDoRTh7srABPNawTz8cFQhJbxDMNQvrN7giRfCnUHfvDi4nAwBFxSQCsQhX",
  "key27": "4arXhrpHJK24Sp2dBeKB2Srzzc2Dd4ejEQVvQ9Cg7Hwj2anSxqF11nrcphzgBR22vSyqrxb8vrtoh4cC1TnHrDyY",
  "key28": "3wAaUuoXZ5RSRude4NRvJVt4hxxoL9WdovLmG1RrrXHwJSsRvcwszcGS3SfC1TN6fhrfrnSSianS1g6AbCuzwmYJ",
  "key29": "2WBo5nsm9GuuxAuigPB7uhERQPbPgDRzFYpHDhfuYGBLaLTasNGRTzz9FFsSonAy1aqxEYVCyBX2EG7DSThbjWve",
  "key30": "YaUCSjSHxU3dTHh2ozHg1tgQFbx9gyrUC3MN7of3HsSB3rTU1XZdWE29iwi4114g73gdGytBDfzQRZVECE6XuFd",
  "key31": "4VA7CNggR6hqkmAyBeXZeviPrUpqT9xMzXd6tZ2GTfpES7YzdNzhuYcfUMhZ1gKHqTNcw9TfukYL7SczTx9vT9gf",
  "key32": "4bAyEAcRwmPKkCmWPx9nKAtzGaCHQd8JCupTkc7fhdqNU6CZ8vT1Dhytef29fBp1XgB9XGFvahzHC9szMhQVdguQ",
  "key33": "AQstQ5WLUrpnjmXPseFB7nWnXkqXWaLccj9FHMTdv6oVH6zcC25Rb7dJrGgoivUMkScCY5Tye2eAT7UhvJxZqch",
  "key34": "3pGMRtJ3koMpvtzhbcWqBKUTdKHercj9oTUCktLGSwtpteR8nu3H8wh39DwmM3CGHQ5Pz5TPafjbRioGyW4SctwW",
  "key35": "2nyCUKUZg3b3g2vup7gLQ8mXWMFUapc42dEuw8xUrSC5xyrGwbrXNVgGauZeDbK1Bi2twkXFepeZzqkfJpcYsca5",
  "key36": "3dwum6Fa9x5TZiJoMT22mBZn3sPERYofZNfbUSN5f7oFiiGvVYsMrERPkT6WkgfYEdJhn1CWXLBRvBgdypFAK6Cv",
  "key37": "4SbHFh2pHFiUu94dMGJ5ftJ5QT8fwGEfiszz9V8isZL84xrXS9senkdKxKWZ7EoAQyuaA43jGz3gWxq1w4aUG94V",
  "key38": "4EFdbUsGY3utfoRLmYm1mLS3ERD5NvoM1BdwqdAYaVtEFGAcjHZVWpDmo8CxdmWFsNvJvvqmYBJGzsJkvuAwAL4y",
  "key39": "5eKJpaPdJeEVkk444MS3UJBzbLrySdi5x2uNXqcHmsBqECjw4Tg3bNoe4zBZhAHtgFHQ5poLnK2MVte1GMLzcEBT",
  "key40": "2zvtRdcnn2ErkFiNTKUtpmzx9jc5UnZWiMXwW2pMst2nk3uL26eQjXFE75HxmFg3PxMvS5MhHJBxRRA4XpqXA1VJ",
  "key41": "4GEpMmfRb4V2LXDebWZGAyPbh9xmqWABQMgUfjg1f3oZLj9Z4357ZhJEM6CCB4TQeehz1MmY6d2qgPXPHNTSq1t4",
  "key42": "4NdNuVcMCNdFoXVgGKjstDmvDuhoGi1DbuSZQD2nsifTNwebnaiwPwDguTnCQrk6RKgiEQhmMhsN8W8Nvvh8wk8b",
  "key43": "5JovdEUoCSo8LB2AA4jYXabpxKLEmJPbhyWLTyr33veydVJc3n9z649MVt8dhZ3dhw7vssmhzhvcT1ZfdrW3qTGA",
  "key44": "4VzAQn5Fz7fHirX623oDGhnfnJJRKasdTLQ44g5Nspi8irNsCn925FY9FjLeVRbX4gnFnSo5NnhhukEExaxPXnia",
  "key45": "4xtAL6z4yUyar9sP5UZqZYUnGdU31Mwb2235PXnUcFNCCHLNcELyjifCvQEedXK5MCRPH3QSSubVw7ecpZMkW7DX",
  "key46": "5swepC3Y8ZznfKKkyuybYVGmVUG9GXEhSpqx6AyTeiowT2Fofn7cox9LyK4r7g5iLbswkSXFaB8N2nXKoFVFLUeB",
  "key47": "6VwtkJBkS1UkHkeDCSzVdGpqsgHHMHGow3iiNJHBkifHdcHMCP1uFhoUfteCHAYobFswpuk1G3Gdqnio425SN66",
  "key48": "445azvuqKnvRxUVERrH9WNAJ8ANuAa2a11GfxeuymG2Vpgm3zDyQxmyjPxst6PXdz2eCuQuJXLzxc4gYoWznjvUG"
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
