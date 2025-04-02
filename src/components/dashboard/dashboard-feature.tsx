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
    "2oqW8NF9Z47facDaPLViyzxp5s189RarUfSetM2sXcbEQm7ruvQdwQoWMKAjKzS8zoR7w2w7HQk1bpALzwNjJtYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qYbpjZfBEH7HJtApNdtkRkS55BHT3BwyJn9GzUD6XDttSTJ1Hx5M8U1Jq4m5EyxFfKZwGSRiNhSqj4qWWASJ5Fr",
  "key1": "27NNaP3YDE5NR9SLYgA9fzUiPH69VvM2BxQTjwUYa5ACv8G1zuMMPUK9LxCWbfuk6sZfeBQDyTicn1mZLQ8obGTA",
  "key2": "5reRtAUVtWHvbRHzVwQA46mBPkkqVhUFeaiNPT1d7hDuhBDXghDrQuZQDoxBsngU6f93DcEz8Hum8jVsvAxGG7ib",
  "key3": "2onK5ixGPf8oLovgMkqQ5pGzgJTr2f99FMHkk5uuLVJ11UuHU9mpJxsYMzoXGLk3HVUpA8D44SpG2kDn1417eyky",
  "key4": "Jth7iicfqVqcKvAWm1jhbAiiJYpEB42PxdPqjmPVoQ4at9hGDk1u9bFDvYt7DtEByQLw3qgVKqQZ6vkYxLFXP9S",
  "key5": "4Kvk4etvV38a7aC3sz7z2co2JMWF43mkJybjXxHn1hXjN1Gi2XRLPhtTTdEu5mh4RJxP3dDgAZbYQytaT4YWsRBi",
  "key6": "3pmX9S6iNPXGJfGUNY4xjSdWxQyvGtcE7q3hPKNR6xvK79VHHbSTwRhTHUYo7Qy6oGgEhQqy8bS8Y1Cqm3DoBnhK",
  "key7": "656usqtCkRTaPn6sZmjqhHrptwsJCWrtGRK1uHccy2kRcefquQXkAmLruGVWYJXsT6yB3DJxDyVz2P2YC7auBVo8",
  "key8": "5wmgeVFM4KBDLw3hj2wE7DrayuRhccQVuKYFsuwh7YF5KDDzBwnG84uxpxQYDEUX461YEG383tUFMRhH616AZKu4",
  "key9": "2m5nXXTSiCd8raca5o1BY7Vc5gyZznZGXZpFyGrU5wwXgBJZgqoxagjA52e3a2zsXH63AzACbwTq5PTivXsei5bb",
  "key10": "2W8cMMFDZPPkQ4D2Taa95mKCoj3FbiHzSWKMRTxXbExVnMEDuqJnLLrCgrdpPNCw8SRuk4jzanSLPwUgUD9bpZzN",
  "key11": "2SSrWsNXYAyv2DdNLqWMQn22EVjMWtkELtBjfDzG2wECJmV6deUyqpH627fQUsAMdMsqLjKAku3TgqvBU4adsSvc",
  "key12": "3XdxRb7qmoKdvRLuxj4mc87fmYPGx9kNir7uuizBFPJ78yFt8dfZHyyxFmKiBHdCBXeyabaehSm7yPW4dM9mEz8L",
  "key13": "5Eqtd6HnrmA5PnHLzhQPNfmQNVmCSqc6Ru7Y6h9EjLDb2d6AGUUdUnKMmFHmoq8CSB18mWgTYxz4zqUTNcrtgUpw",
  "key14": "3WLvgFkhkzbWvBB8wvqfFkuX88SPo6h3v1FViMGuySvY3TfiysBdr83WfmzFdHtKw4pkKya2ZW9Ath4K9WkG2LcS",
  "key15": "3rXSjkWCd5Kdv8Grb27U9ZyVLbBqrR3VHSPUT5VYoZZ8tMF6CqLFAiNU2kGUhMY2Tu3TNa5dpAJx5N8wqukTBwAv",
  "key16": "3zN4f6NZL655Z7BCkHptvDCrpruzApcbqpmrNrKw2xfahhkvRdhdAnasDtgCdTJYVZc6oH4r2bwfhZHd6iNRFxu9",
  "key17": "41ieStNZHYGdcRxiaFZAErhPaMA7rcb4ASzrouPgDaDjA2rcgsf8aeMKGwZGoHshTBCHMaaXFzcFKcp1tvh95Rqu",
  "key18": "4TJsEn6RU7XAbie3xSQKzsjVPXHC71MqjKGvrBq8wCHxiinpPx4pCf1VDV9p6kMZC5RkW9YC4vWUfigQ8CfrWABF",
  "key19": "3eZAHQRRM1Vpw1hF3u7ozDSf4ky471nSoZfy8pmwrjNrccbFNzNfsJedejJxpsYFM18MG93N8ui27mXABAWcheY8",
  "key20": "5s9DRiD5B2hgdnuDvEdBb4gq59eNrc7BkM7NXyrcMGQ54UbRMmHwqAQ7FgEiamEUDBnGzFjRAetAjoNbYnUoLLPa",
  "key21": "2q4DFf2r6sjaUjGicAmq1grHkUFh1wbEKPw2gV6ci7fF5FDXxqGyRaERFEnRL5Z9RRBiT9p6tkY89uBjfv5HsEv",
  "key22": "2ynVwVPUpqUjVK6twocpnSEMZQcRJdDFRH1zQ3pDReb4RNu3ZGewVF8CsPffM5NRQ2wct97u5WP5KaWoutKjUReo",
  "key23": "3njVqeWXaCvoGh9Y45UL2CuFTp6ex8ucxMkFWXDNrtoB1Fdd6Zp8s63xEHaKxgGL8vzmrezmSUD6fAAGmwj4Gqwg",
  "key24": "4uCAJVACFkn8bxq52y3TRSLWoeVGqM33WnGSRzwCFMsQeQWaBm6FzSfw3SUheZvwAh3BWkFdEX8RGzbu5qrudUiB",
  "key25": "2y4X4rvsMX9iuXcZroyPEWFWmCrPEzKrw1rr24iLDbLFcH4gbvqndrkjrwGhPmqziPD1chNirRK1uArVMCfSjC35",
  "key26": "7V4ZWkSZYhYN3MVMwPH2oqej7DKPaDRbQCvH3FPi3F3dWpkFvP31YiTprjBe6jMbnfoAMgZRE7woXNdzmMtHMur",
  "key27": "47ApgdcXi7xuJDMK2tSgBjE53GzsStGqfGofu8m1K8yVvXVjaP6cgZBnQKmnpV1X2N3Eim1jfFr4DEYWNn4KQT4k",
  "key28": "5yB2kWQTTL8mYSRVwWv18oYjDE5jrKLN9zB5yyJdjGidNjeZL4HPKW7iMuUcjYBD5DXzgfbKGW3xVLdroDXcyWAm",
  "key29": "5PZSQFCt5BuYqEiTcLstTV3vUecrnNSCpJdvUNGxSFnGTK5q1r18oHY7MARpmXpDj9F5o3J538VzmXjxU3PJDdz4",
  "key30": "9JZpJF2WdYQL9bUxF7NqFZwLc1wawEv8tp5tHVc6wso7Y6zEsiH9sCWNSkCwim9iZV2S52w3SyEPpUjdm4CxbnG",
  "key31": "vVGGB8kLtBdgoeSmfbN84rSs5yxfe7YEz1zqArgma9FyhKJtCNDi6D8vpVfRGbvTAHyLjjPzBeojyZbJLkHHpCd",
  "key32": "4JozgSNT4rVCvV6zGoxSeQSUJiN7uNfV1pKPrFvqWV8UN1qiNWehhHb8Ji6u2gMCnZmiuXSxLwR7Ayr8vPN7PVMp",
  "key33": "2kFNGxSMe4rd46XFRhWBvRPK6nDHhm8LWp1V1dtFP3A3FRKiGzW7x8VRHNH8FHcicmrhCDyHsM41SdYEnmFjPZxy",
  "key34": "5doqKQV59bHkgoVrpnJU5TFSzS6at5S5CUFcRE6r5ZDS7WK6ga3A9F1BU4CFDYadxK2h5tdCCqWwMBMaEcjZ1nXS",
  "key35": "gc2Us9oaJapXdMZH4mzBquoVQsNRKRfysQ5ET89wzDugTqrAQpcvxWoRFTJeCveUvx5GJtnu7H1BnNdwFd15cwk",
  "key36": "CgcPybdn69p99Kkc98FR34tnueY2KBfS3vGDEiP7LDN2rMhUXcZ8HGcch3VCkjiEAny8gBgmqG5YbVYTq5FR7zx",
  "key37": "fX9PLT3WC6E2jsn4JNQLH8HSvw3asKZ9naYkue54SFWJ3LLtBiF6u1h8S2FdHa4zb3uUpBR62QG2Hz3eS1sE3rF",
  "key38": "4ckxNkZP5R3i3J6xE8BXviF67kaoLD46pSDm9jH5XHojyZvBTh9DKWxt2nhoQhMxBaeCCZcdggTC2JAUX77XLPLh",
  "key39": "2phUJobrV7yaZDxj1XmEeUVeSud4F1q3E8asMjYYZThdZG95KN6NAYCTmRQ1SS9oMsoYN6dS7am4e7tXcBuDpu5F",
  "key40": "ULEfXzkVWAj1Tbybzdnrpr1B1eDPcqqpXkEx7Vark6d2bGc4dhGvDFkLyAguwhNjHguzKNWnuP3UjnRGadmsyed",
  "key41": "56tZpsz1DoAcgBWFQnyqTsY7gkGTDBmoTAeGajKyeGwxEvAH2Mh5nn9PPXAPH9MXtCEJQMPWFxQghi2q3QkM2DJw",
  "key42": "3rLTtXrpJZWTZLpADjzbv2BLHwiBV1QKpDJFFMXLKim7FiZKufUuLG8YJg7mwaiArr5jN1Dzdhnx11Y7kYBXhGme",
  "key43": "3Cqmr5up4qYmzBqbcqx7Lw8CqEg4T6jCQownwtZSRsnxXPAr8FkM5gVvsYwsPSVNc9j8zDcdFTZjdmvPrvUmo2vH"
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
