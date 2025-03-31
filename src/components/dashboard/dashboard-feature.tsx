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
    "soFkSzEPUFV5B1AWyT4u8kpWDArAwgQKdVaJU69ovqaXFR7fqNpNRFZ5a7XHAzf2Tw4T82TjVTBJoZPgfEfCLGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nA9493zuPwTiCj82VVe4stpTtiJsU198miEKz6mDvnALs5vkNSZbv8P8ALK59mcSrsC4pdG5ndTuzh8vMCvjAnA",
  "key1": "2icwMG3GQfb7YPorCXeRDmY4sqrwn1wGpzrXmbHeE4TRmN5hGzzBQ8H3mo8gQkiGa92AS61zgzB2rAdxyxUaRob",
  "key2": "37BBRdyoUy7TrULNKvnfVrbTE3z1pPMJpLVbrk8mtiybkhGa9xYV3nzzucEx4LyRrZ7itCVWQzSvuEY4dgfxhPXD",
  "key3": "5U5Y1YSGWxsqpLwEuHKTqkJAMDjxDDPAwZF1Ufk6qRQu8CPivz31tcmucpiDNBUKRxStUuBmDM33v4QbH8hmnKys",
  "key4": "4aazNNwW5pgW33J5p7tkmC5c7MhDKdG9HtKBgGtBhfEaoMBo8cJyQxL5VRBHdRd7FjN6HrtAJen4yifaxdGG9JNe",
  "key5": "5YyoyEkHLRrK1qiFXmhBPHabPaD8cgd4mRtzZSTN7rvPgRKcHfENJ5QkksHm8SnE8DqGkxmw8bHiPEeZPnsiDsHh",
  "key6": "2MGXdF7hghhjHkN6LuqwMttC9KDMUF24RaWz4myVVX4ZeXfpsdoUJx5oWrUMijVWkCBRykUbWFcBTZviF7eAkuCK",
  "key7": "2a748oZQannPC4D66UzZhvpjhyohd9zjooBR1NG9k84kRQKGTk3E13siytUNeycjg7GmS2AaMQajt8Gm545uckpS",
  "key8": "5TFTey43xFjqtUrHJGySVdgXk9oReyTjbrqUmdLzPnottRYCeMmqF8PgvnrNp8sS8Vnwpfr2fJCswRG9stsBfvEP",
  "key9": "23ttAvj5RDfaYYXEt8oVfvAHyiPKujt4EGR7D9wqfYhtLJ1Fco96KDnVcR98GKyAqG94yqNxFYR4FnzjGn8kBASZ",
  "key10": "mFdHHT11nsQk9tSUMhevjHZoXsPnStduDAoo7iB4Z3Nzrqwm8LNiwoVajjvGfkWr4P4tAXC9K37bEXM4mQ1Bi65",
  "key11": "4GzxJ4tBHFAQfrAx39VGGDxAZZp4e397czz6PA3oorqsyFcZkaoTSBV1yiM7THAgVoqWayj2zt4aaBUwHHTjQr7E",
  "key12": "5UEKnZYYvjq4qKJ2mNuvVxDktBgyPy6uWVk6YpCKKTfbdmJqDvx9fGvL8o9MyKMhVX913HgmH7PTDoVRWh9yJXkC",
  "key13": "2HKA43QdnAwRPFyNTkjjcFRZGrwzxQupKsTbbxJZhL3feGcrgQS1vnMKCnQJ6JaLwun59sg9P7h8Z1kW4JefiosM",
  "key14": "hz3T1kXmGCsMyF8CtjLYZ8pnNkLmLjThowv3ripVJZxWeqeJ658Ct5rbGTYitcuymPMaWagKfrNY7doooDTCG4z",
  "key15": "5fkdRvf8CcBHHmKjFv2gj7iua3kCDs9DZzvbDBj2BrvAURQ3ShxwG12QhypdpopCWMQUYoMgMTqoiwtu2RQsG5uf",
  "key16": "3uhnBZCHcaW4zu38vDEAuw39LmM6H9w5kEQ4Ut3iNTnPocvBAM7oWQmSRkzVEfnycmAH8kpkVVXtZVuFMAvcGGJ2",
  "key17": "62RtdtwooAQJLGRzjGr41ruoND2FWAEWkSMEJoWirdYbgtJ8bag5jAE2b8nyYJrWjnVVxqskmrQKQ89FMqXXADjy",
  "key18": "3vBHA9aUZYeRTdjdmUENZfDzJ1QTemAG1ZMzBUKN3jhLW9WE5aq6H85moNuDdPgLijkFamJfpD6nLEpPUkUYbWc4",
  "key19": "5Tz7VezXEF9p9hWJzXjxoEbDnhjbXd7YJ7yNon2knup4QHhdTpuZgoN3RyNULPEfd5fKJgN3c9YKjjjpnBp1wiax",
  "key20": "2KNvuRxSkjsuoaDHyzU1Gm1SK2YVnA3bp5JzbhuLd6kFNEnUeVSwSidK59zSkkJaSn5eV7PcYnYUsdSVPosHg79f",
  "key21": "H8htzZaB1MAcLCWmeYQ97y7Pxa2oJqkZSHEBR9cGkTmfBDMVLC9xW1WTAsiJtGeWQdwQDkRuHBSBaXbZuFmUkmA",
  "key22": "67i8rN6YU1rkPQUVA6fPqA62vaJm2mkymsHurzMgFMyY2xATPfZvvRYagH2Wtw2ybLFrFDc5sEciNs3nCU9NEXjr",
  "key23": "5yCQhnLGev7U7QyVh4ortUK9euATqvp1ygHc71XVxrdpvZT7gCUygkLQbZL1Dn3sCdN2w8rQJ4RqfDuBmfSkZksE",
  "key24": "5tXNXvgGahUsegYkPUY3XFFhBmzYGtTKhRFcvVUnCtjEooJKd351jyqEBdkve5gmHMANysoTxugzwzSjfna3jFoe",
  "key25": "4JohgNZ8DqWKcdTDUpZvrB5eiRJ4AAAvHNq8me75RXgg2XdY3m9xHTfh7YX4JR4cQX8Mzd1pPG7GnsjjMuCqSqHb",
  "key26": "3rfeAfZLWsw8HMmLCEbYwLgq3ArmH4p1w9pGTM1ggHx2oCKgJZuTWejUSqmxwJXEFSDnpyAjYTRNp7JqMJeeN5qC",
  "key27": "4eat9EMXBsf6EULLGWhdrvYVo8M7QE6tBnbUdcYRepUxqdakarR65BHxFtkM8fWnVx2SZNjKp4XQiJEFFbBuM7aV",
  "key28": "ysvNSCMYJkXsT1Xp9pFJQugdjZ41UpB8bVWUhzSUpzL3Z6HiSGd6BgcZUze2D3G8bp1dQBqjgfCEJpumJR89ESs",
  "key29": "2nDNP2rGebs19JZK3KVU1iGNaBp9a4eDSMTbK1GWdhbT2VqritTwtXqek5n2cTcvNW93zsaJmUd5VAmtjguXHfZK",
  "key30": "3buZDWRnc4sVbx1kBzgHLE6nYA3SSi8JKUpV9GKnn1uMrbuecAzQfBjSpTPuHxCsZKvPjmoEwcPsV61drq8CtmBM",
  "key31": "a6SyApVCJZCQKtTz9i85NPvT6y2DuxngyBZzFpWkzHPUgwJtSE7oenMhv1hw1wszhtRTQ9TneijMRhdoh8Z2A8f",
  "key32": "22HBZvDe8gWkyKbWeT5K7J4Dp5Z4uCKKzM6feW7HxGxzwks6a7dqwqeQCQzzwWPyQQfJi9Kvxsn2FMs8dSjs9pqk",
  "key33": "4gvAPhdpXjYckcceWDENKtKYekd12EU7yo74oa7WgmF83fnw67XSb3AyMzB1MMPNtNLDSTQXydKDESKVqh3YXz5W",
  "key34": "nmoPLytKWv627puKF2oiXwRySbKTz4uFPdgfD2UtsN1NLPksjAbapt8XTfqKdv2a6Tpdx3C678K9rR2mwvd8dMt",
  "key35": "4mNB8cZ6ZQN7yQmawhtufC5nHd72XWRSBs1gXXmzKJmvC8ZDyuUMzPDP9K2r9tTasqjc793vrNw3qMGtCqMgjezp",
  "key36": "5VQB9YoAuctWB86x2i2XSFvpiLFXpR9E9zpAugNrgi85LCdnVZcy9UTd1HMnaA8Ct7Vt7Qua317WLRudaUAj4uRj",
  "key37": "4FVC9Xv1xdEKaRkgagm1bLbNTH76iHKZmafLXReDDeAYUuKRCWSkm5rvzfEDs2Wa5Zse7RmubvRcG7hTAzgALmpb"
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
