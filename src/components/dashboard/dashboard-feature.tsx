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
    "2gAbE24rM7hKAe4spchbecFmpA1Cnv6jPLbwtdLgqSV2G6R14QPGWipgM2nhdSWY2krfR6tQH8U4xEPRefB3XLcu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4592rHMKAZyRSDbTtDMQpWwwEhdXo1R3nxCL312SsdYz3okBqfg1tuxaHo52PxRw8mDWnNEWMnA886Q5T1rH5n4F",
  "key1": "5EYfzukNJzcV4hJnGCEqom2a6uf1JdCLDQSyynavHGL1BhYXjZaNzedNNrKTVX3LrHAXG4t17tMijhgBkuh6hk2v",
  "key2": "UGvynVY5qRoi1iT7vTiv5KRkJnZ7djtZEWnyFjnuK2bm4r6NDgCFtuzGmto95ojqEBPZ2nhF5Sz2xZQ8zKb2ruY",
  "key3": "2GWMJoUiRHGoyrxQMkY8eTHa1vbABr94q1BgQ3bPVD2WejxH5Y8nEKSWg2eKYPe1UD5oRZQREN8Nzn33MzNLQeNQ",
  "key4": "4TNWcj1VXyQnLsoySoumQ1t93rRQdruofwC7r1KtbDoaThX79hmo75XRHP77RZdBUzkNeHk7g34pKnLRdvvndBqr",
  "key5": "32zpCWdV2HvFxhPiu727AJBLiQd18wunedyQgPXsnsUWRu5RPTtYHYuMtUo1KongX8ZyhG9xyPN9gdm8bwWUTeJQ",
  "key6": "5ALZqs45RHYwjHgqZXtvH9B1MkHX3GKUgCH6pezFTTuecUXfgKT1aDmUE2eWyXXg2ixYeb75mrp5bqC5hh5wHZZS",
  "key7": "5TyZMeMGJDqbNeUUhjUpzG6nxkKK6WAtdZ6uuKeQfiyFq1Ws9FBfb56Q14DtqTJUspfDb3R8gYnRWhbBKaqGiGSv",
  "key8": "59dwDVY1atwsyaD9LCwqipEXLYxUCWM8W7Ko91j8hGEpWdPnKPEMSCXS37cmMvnV1956vnbvGqKzXRSu2fuckLPK",
  "key9": "3HPVYUrtGaYYpbzxDDQ1bgecDPWSfPjnp35yVN5Fkkfgc3VQmoBqKdzqq7h4Ex6o11DmUGby3rhKRHNqZnxWYtvz",
  "key10": "2Deb16NyRDZM7tnAagsPff8K75hz4QQjPqRtk9LVenre4tLV3zSMbtnrTDUsgWav3VL7Q8MKQG7uaefkqdvUMb2t",
  "key11": "5CoAgLRxLX28FHARRU1DZgLXVQwRRL9hk17Yam6i7EJy5tSwSqz4SVQu6tNpWMkj3SBSDuPfHveVTgPrT8JwQuEY",
  "key12": "5WNtnj9bpvyVSZYe3UzTrJaUwwAMyT1843EbHDVRGvoZerD8q6vf3AHLPmxCijMiExopkjL2FXWLSeZcxrBAfgbj",
  "key13": "3z6mZKgoAdFpRFHExYeyfe9Dzh8S3YcFZ8we1b1BnjfnsJqud7j88y8NWsQfTmgmVtZyfcJX4zZT3VqidGLLa4Tb",
  "key14": "3csBCRpdswCUeGLEWWdttg15PSwQ8R6KTWuENv8roS7nDHJQG3fHJmC9rjVLVSMWk3v7T6kRc6SM6Qfx8jf8X1rF",
  "key15": "2KECHLHV66kNknPnAoEAU9di9HJhUDLUCNAVyFVd9R4X54SMZPEoXLeqP5SDTAG2c72HaQHSzhkjtRcRXo1idqAW",
  "key16": "4kDsUrWsvjCEK2sT4d1cFaQdxhvDnBFwe3ijtKaWdXBWTGRvwS9M9g95WqyQRGqsm8fGaMd4F9oeiXhtaUfnhPGK",
  "key17": "37KUYWXBmnS7UF2rTsehmZRTiGBd5Eeu2RvbCJfHrArZ9LKoWqx5resqrvny5NYDJmDSmTyqexA6dL8jireBsz1C",
  "key18": "vz8xkXjdgsL7h9mXHV7XEkRHsrWESnXHLocEsV6UDpE415S5D7NC2UDcqYrRYtrvMbg64FFMa3KvCBucoRx1jy8",
  "key19": "4is2vAK9fqvtNaC2hCdPhvYvu2bcXXu3M3Pn4XHfNoVZny91uC19pR5n2BA27XksZPpwEqbWKrNhhoWmjo4z8UZq",
  "key20": "RvxBkkhEfk2yqctgmTmz2Y46mZC9sd9dHRkJLDbxRFEzVsCMWaSZnWziqaaCQCDzycRor9wCPjCuWVLDbLvnDvj",
  "key21": "4EuDVGeja9c29Mcw6ANgLWz26MR8ApNrD4GhSfytxaRKYzSXuCnWvJwtk9G9EMZ1thUKV1wbfx2TFx75GU6J81vR",
  "key22": "24FDJYiinRjCLLfkQqXjYRmwYzN2f2ZeMyzMaWd41Gpx18EVpPu33mUTKqxSV1pTakAM1MS53ELNN8gYLnzevQg9",
  "key23": "5Mt3MexAuZcsjNMTxjLq4kCS8noTnUvQGyHEimPdBzF7BDX6r1mgbBBxGpKTSPP7ZfB3enczbzDK3UALjUiur9Kb",
  "key24": "354h2sV1G8Fzk9Ah3zQn8AdxwRY7Frv6e4Q8CWfHSBYgri8U37mNfNiBVA9iZ1g53KyN9o4UDsw2AYYMp1rficiw",
  "key25": "2x7jxxEd9k1GnkzQY7aPMix8mbpgV9qNGSBoXjscGskYepXtSUUjs1HhiLfF8wdyv9t29dsqRMXgexq4izfYRLhs",
  "key26": "YaeNTmpoTha88TR5bYs5jr3Q5bG9tWk9QHfdWq9DByhF3W1Q58aGvMdvDDscQkDybZnjdQZ5i8gdZAicMkuC1c5",
  "key27": "3iKcLjYAuVcgWRCHcaJteeNhYyh5sfeCvirShPzYH6Fp487eXyp5X7buCbXmz7juXvsFymRmUZWH7fp8iLUgGgim",
  "key28": "23MCnhDWAdGLMVwLb8xLJt7cVPq5XF5GrYd1BwDbpdiGUDPdqA5FeUcc2vA6SFXmNDZWZXQKEYdmGYYZU69VbWRC",
  "key29": "2j44E7AbhXXM9BreDLmSCcpqDP51H11GZa2cPpWCyikEE8nUQfNkv1ekoRoviri1ypWRc7iaGBsGFBNBvFkQpGmp",
  "key30": "4sQEVbLnTNkm3rM6SpaTZ9RZ4kJHEKjmAaCNmoHVrnohXRhqTZRMaRKPJRx9ESCoLbZSEnkEADvXJLdgMsaRx257",
  "key31": "66qAE9KkrG2fyKAWhqDAQMci7rwt345voM8bKAFgFGgCDP23iAUoBTMtUmQtfrdLGHD8SFXvymdYUp8q3Vjgq5EF",
  "key32": "aqwzRaHZLEuabWtxXAi6vViPKkuGJG3uzSymRUb6ETjEbTypvnShQvkQjWcvP9vhhVNeAGJVnhaXBt5LtN2uADP",
  "key33": "62b9iqx1YvJCyLEMWEAsuavYqzz6yq7VJLAjxCzKGKWb4vmxSP8bdgr7Lqv4KEhxWy1HK3jA5nkee2zosvrCqXEF",
  "key34": "RfQGB5Nk5R2wFtWXgaLrBjci9VrhmBg4hW6vjBS23oTMWb4gCxQXmgpha76pvs7n42tpv6c6PzPuEVa7Z8Cre4g",
  "key35": "2KPAnXAQeMxvJk2VRF2cBLNrnmhn6nkTgzGzTcAQ1NAEXLy4nYgbByk3ED4jajPoy1aTUqqPHWM51nkLvCk1Nkxp",
  "key36": "26jNyKfN3Bq2AoAwQdy4iaaEVDT8Ze2mxgBvBbGDnj1TKoB6prcFRspe6d61h9fKcmfB3gw523pWDmhrrs5xzLU8",
  "key37": "2z94ZrgyZaX8FtDu7axRybGkun4BYZrHZoTpYa3neUNz2EWuTv4XxAH9riXrVYPUqhUQykcftQqrADPd5kmGLy4V",
  "key38": "2UEFu94gtNzsjBYqUNhswJSn6WCX5wnSdru5VMtbNG3FdQrYyoKvtscKvmQjMy2YQkAm9JzZaShNGGNArV8Juwrq",
  "key39": "5uzjERCx9ZwKcx7TQuUTF6mHfAbRWP3Cbq54qVfwgaqWqhME9BU28vhw5Ztviex1eJ5VkBSPvYBZbUAB77rWNKFD",
  "key40": "3ZhUEPYbnzsttL9cvVP4bXzskL4i8MUGuPXdGCMGvyWWQKKkaHLE6XqHH2QC7txcWaeJRssD9ujsZgmV9iAdyroK",
  "key41": "64oTu1QwSghpWmXrhpNuwFtAsdM33Y5foq7GUj1Y4LKeQGDHNWrcapPhgHhza2wAJyqBQcPvMiCTBK3urp5BoS8R",
  "key42": "5cW7zZk8FedsQoNqbnbQTiCcfausJw8y7tJxLB1CebmCVn1GXPj1Xs7DkFzAunkhr8cgHFy4HzGrUhjoJoLEuLQK",
  "key43": "5pTGVDq38XvNwAb8tXibyypy6sZS9zEZyGqEnvZhgrdjg3dUscTMZecgmirCq7WgRanFtmH7rFnuX5PAJW1CSBte"
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
