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
    "yHkdTGtV6aNzGLQdpQ2BBPRt53cYzRWhKjWEgBGY9ZY2cFwkVqWZWfFE3qxZx3QghRFjy541TZrExMv1dkBzVKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29UBWsWLTBV7UYDbY51vdaMyWVqmFsLVRbLbTNw4F3RgrkHvhbALmtDhmg4LYhG2FriyChnZUFjHTnA2mWUf5LLu",
  "key1": "3tLRSLp6LbsSiZ5fQnuAGwvKJAkrUDxxRXGEbRWExF75uL8Fdxt9F1SFeYHkTUmSL9Lv5zu9vRtQpf3pGgs9u8Xm",
  "key2": "4Ez53SnjSWCW38p9LMUEA7mUt86SJZuJvfgzT8EWETJYm6MRHnFreTQR49JuU8NXoCf2ykrrSN5KpNcfwbEvFxvi",
  "key3": "iC9wEuZJsfqGkHgkUZ13q6kxg221cyr7fRbxHy1cFmLzU1o71MEpWG6GwDcPrwe5vaDCYdrsd4u19kR28avexYC",
  "key4": "5qFj4CY2amvydhexnPoR9dDiFSP6K3bxurRLHhvqHPhsX6NaEzwCu4DiZmbb7kPXqbQqimMfWgDcjqgHc4LyQChH",
  "key5": "D7KaE2EAhGpWHYwBhvxohFoVTHohkLDrZ7QKZjBGGA4mbwG92dwj6QdZSsKGQVRKN1g6c6uoaK7kq7q3GtWEP1u",
  "key6": "jF2jSDBPiVtkMbv57MZ941Qqsy8iCaRaNTzMZFqbN1dsJfxP7cEoCQ9apmw3SQ8P1bTF5rHCMsXLQ62SGKsivJX",
  "key7": "2hpEhSZAWQ1xAk5Mz6z83kivpcYKGAhTXN37qTGRYSAq57zuYQ3sZdyWkU4zn8mNPLvnjf1kiXWx7s21u5TqhuDH",
  "key8": "4BdmV3MUrT4BnqfqvvbSoYjEkjRg1bYcWuTMv6oyEvULGBLMLP3DE3hC52qNvvypwhBfCpQQBNRLFPgzuL2KNc2n",
  "key9": "3qosHZvDKfvUGrBPycD5o975p1VbhB5aDtyEj2Afjue2E4rygKfMq29SCBUtci7BL8BKuizJ6A38vwv9r7bmitcD",
  "key10": "3hemrXzKiKT58ScpGBvknznXmGUC3EZn9bkyVWakwUH2cEsN8tMcmn5osrgGJK4jR7coTuFNW825d9sAjKs7xncd",
  "key11": "iCTDHUFvB4KzcVNGxNzr5dGvyNReSPhxUJNpUmT5umQyTNCBDjPpQs9i5fXent8LpxAdkY3Gpo7jJR3BUGs3zHd",
  "key12": "C2ebiwzxrDvfppQQyMfL357fwe761oX5Zkrv4HKGGnQ91jGWnZqvMAD7tTWicZpwAGfCrM2taUhsBk3ehMAcqnR",
  "key13": "2ayo7WbXZ8yeUzHCodbo499rR19jhQ8xT7unmAcTSZf5NfyiFNTLLHPvAzsabpNVKoUft5QuvBScA57PHycmgMYN",
  "key14": "4thQtfWjzK8mGmm17fd6p3yScMVaxiNtHJq1Ui94XisoqPf2ZRTND68QDoaQGEvCQSandKHBizbjMnxRLuHhEHG2",
  "key15": "3ToywTbAccvbh7V9omfGSaJRerPmJfy9CC1UxyVQn2rGBxxx5dYh5uWTM8yUAV5QoxujDRunqpqXcCDtnGzt4VUW",
  "key16": "5iN6rCQekHecqGFf2i6XJzou7ZirrdctKDbKQVRxeGrELo2FvzcjkYPWzG8SY8Jgx4c7JqnkuLGooTDKRMxYEXju",
  "key17": "4nnqJTdx84GjgWeT5UbZzJcfC86Gu9XpX2AxfBmjxhspanGYysPLNoDSH6VSzo3u4AVDGDLMZRVRrU5G6WCM4RVX",
  "key18": "3Phw6W7jafhd2LdQ8deR6ztzppxwSvprCCrCv4bzbbtbNTUXAr9mTTy4Gf5iMx1rHr9g8ebZZha3BTRHYt6jffVF",
  "key19": "5gTjevqu2wnZPoJh3Y7ZjGLhb2RjB9T8Z86s9uRuZaNkZwCj5AzV7pGtVv4fFb2s97Ny8F5qhCqF6kg6gcxjXzxd",
  "key20": "2BYvJx9Dbbb8VZ9Tgm1ajZ1aFund36JytgRtHw7sKraFVeHxLDfuGJ5wrFaxgX2ukQqRhm9ZrVrARiaeC39yHJgF",
  "key21": "sA2DL8YPFCzht3i4ZsMHNcxycrDFdvDDooJTQKSuTZX4oWF2iYLBiwC31PXmAcfe6juyraENA8U6wcdEVMujLgy",
  "key22": "5UQreRoJhERJitK1atb4rFvb3ZVCWT3UqezmYAbHepU8PZczPQoJXT8nibViZcqPaPoApnLCccSsUFQKXV3CzUJY",
  "key23": "2zrvDBLnyaGZ1xYNJMpXwfwVXdRneG6MFdGkoYzKCiJ3TS2F4UNcSV6Z1H6NwYZ85CvJuy2u6hc1hoSaNjaM9CZx",
  "key24": "tSzMUWcQZ8i2W6hGd2LPmU4vigTd8kpTTasFLQKfhuZujJkUnrH5s3oE3mKoW7T8xCezJhMjc73gZ2m8QgXkieY",
  "key25": "4wSByhJBuc3axa1xsXwcskUFnErFymr8eVLTDAb1eNGLmeU3K34hRzRmZhv6V51JYJiFgPnLSgCxnvNme4DhAfu4",
  "key26": "zcugjTbZMLZKkrXMZaeqqx4XS6Gbk6rDJpt717PmrRdtNF3YpSa9NPefdLF4dbzvrjUVrNbo4dwJsqZaH6N323L",
  "key27": "LJep642FxtcVCUjdkJKAibnZTPKadYoPHyFGEcsszfZREaZD5fURcxHE168RzmvEisuZzq3S5Uf65gFwgHsus9A",
  "key28": "4vZXfuT2SrLz56puc5mBVCHdyrujxLcW8LT6oW2kQkUszgcYdewTrGu8WQ6onZ6qNP1YkA5BSw3djfoS6q4dGVG7",
  "key29": "3s5ynGhy8S9psF33W2vNiT39NVrLcu6GCp5PyzbFd4PPmsKGFUNUQtdV7DPxEKue5KNrWyTX4RTrT2JiFX1uVZ4o",
  "key30": "8EW4BanbZU2Fq7Mo75TxGjqZL5ZoNR31vjVbGCZvzwfVtR7dj5TQrhTqqjhi3HBTCwstpuFURnH4BGCWgkssfy8",
  "key31": "286GEZRHfunYc6pwaVCXajdx1CDK8Bb32GEXp3nZcc1jCFe15AKZqoAJDhJwrqk8WMGkJJAZuRfxrE59fRCg4dna",
  "key32": "2Tj7FVSytoPQShQCoH1gr2GPe4GE5ibjjcUQGByM1ooL9PA7emDuqvCtLkZSmyBjvnQu36c4ipSe2CAqwcVFg3NF",
  "key33": "3bmXKrjztJUZUkrKn5krk3DhbTortzbE7pvDDJnJWVCHx1T4eeHYkZSrzncoHHfNQLh4WS6hEW7HP52GpdN2oxHu",
  "key34": "4Hkmx7YLo1Q2gTNpQaxWEY7MSEEzK29DdgJ7a3xoG1V2gj6FP7SLd8r2d9uS79HYwgCgNg6629DLBxJwKpd3oL3k",
  "key35": "48kBkJTwk3onsmq96H6DAXavi9v3jnxFvmYbxcGNyyXr3q6JWDEueXj2fmynsYX6q4nTV7eLVFECScbWJ8aMveXT",
  "key36": "2WXgk93bqmhzfyeaAizHwikaYiQa9iNxj8AfdBgnAkrDjKWkZrrYmnLksj3RXqvX4A9Rnmay2YMyNJVHSsdg2ZBg",
  "key37": "3ccxfpJsQ1CRfQKYDkGWGYkGp4yXuE5ZbbKh9USR974JwuzGj9BqcrUUACybEBmuW2mCbqdxZ8o8Y6c3dzXT7cMo",
  "key38": "2USniFPd9ssuAe5uf7vRXUg6ucjuFXCBahFMQmwUbMpvebRdYVNsoM5rDwAqA1ewFeamz3ZqmMUzNq2GasTFfxE3",
  "key39": "4oAWvo17ac2sazJShozEW81k3HsDUatUKdVL7HdEtzwwhuYMReRvqwXrpPoqjsNe2fuXwqiWPieXnuyUydKjnEX9",
  "key40": "G5FPjEyPfvWvSZEvTFGRA2HusPeEtLr15JvXkdGvFLS7ZXY168cy8aWLKTttaDc4jNrqgnM66Nm4GMUGGaboG2Q",
  "key41": "2eS6N5Uo4nCKPzrSoszid9rGVXmRK51cFPTAPJzeHZaeXr3yWPPYFzCf2jvvTz7hZUe5Epkme26B985mMpaT1dq2",
  "key42": "4GNZrEU1zvsaB7qbzgzXLYpZ9kxXzP7WLbuKNkuy6JwH4Xia3FWZucxLZScCdyDAqeocsS7zY1hdpLujixjut2Ur",
  "key43": "4zeDjYNLDUHfAfauSpjfsozp9HT5AyyHXLo978iy2HKuQZxVJzg3uaSdhzXzvLjkcydVbavniwhHhMU46Qtfkxwo",
  "key44": "3AjDtezbYepeTcXAPBcrtnDSSfpQaDiCB22sxK2uHTNdf5c1D2WAKcDSLx4h4qtuRcGeCQRbbmMw8Qf5p6AQRWTN",
  "key45": "PJ4QyvYuSxqMy6kRuZEfdh67ndt9TRJgqDEG1N8Ah44sLa7TpFLW34MEWimKhSe4NXq5NT7GWfp2HHL6wsc2nnW",
  "key46": "38xQwEU6ztFhLaXyuuoQSYzu7qA5Nb47a4APi2aVociqT824dvbBRC5Z3kaLppJqtKkTX8VhUoRTqrnheMw4x9EB",
  "key47": "sAnk712MMzA7CUBPFqGEiPcTja2BxSLng2DhVrf1BrwPXSuuT6FPpdNbGb91cLRr8GYFHBcw3TJVQkh2Y3535RU"
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
