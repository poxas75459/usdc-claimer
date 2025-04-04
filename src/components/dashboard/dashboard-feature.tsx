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
    "2XVY5cWVAizU1LHw1bheZgeivw7yYccTNGEU61v6dR6Aa3GbbqsmZRWUiZZSk1fH3J3Cb9oYbSLvTgSopERT49ka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42ZY5PQKrr7bEHWhDjkC3RBBTC84SkY5xABASPpjBspL6ciKcctErEPw8fikmZKM6FJ7CUn6x1nErwhzmRE2rWbZ",
  "key1": "2KvpigqcGT5B5L5bXdReRDhsUMQZ9LYNZQYZHDeYNUec3Xi8bXdwCH7fqctUTJLHuFTGkgroeDrMY5pC93fBuXRe",
  "key2": "5pDRF7SwpzM5tRFghDWv5KrNZSbv7RyThf2KGeGMcqtb8zXpNE2KqVMqFXQeXwC43c8chYZ2iLsLNjLxcALheShy",
  "key3": "3NCdudpukR2wBwd3Q14GBaXdefim3ns5SY6SrKLM3qgvLu24YLVgSCwNqAi8HvZ6xuG4e7xnVdBr5573rnNjC3V1",
  "key4": "35womusCxPWZtve4o9uXvsZ82Zc4UrLaUpa24Lq5MYFyYfxuG3Fmo3K2m7vLZDEsmz8U29sQ8aiSEyNBACZKpA9p",
  "key5": "3yjzBVasGYBTfAAoStLXQtnnQRjqzWaLCyPkBMoMSrGkyjQb7rJ4ue1CP5z3KxFCzaAU6zUQSwQftC9ARGM4DTYo",
  "key6": "3m4tmTenvQHLEwNH3QZnmW8RMMN665jsuRBSiuhnJjNPjtawcRRTEgUBLQEyxwDUJGUNWwW6FNRAEYEhGjwQJHj9",
  "key7": "5pgXEYuTLk9QM1iZv4kRLdYnbMjg8rGt9FWiZsHoypezA6JgT849uao95zT8mA8CiFgrXxvyEvxeM2Nm6v8H8BTZ",
  "key8": "ndQgmL7UunNCGqKXwuXrk4WfrHEYvqmkVjGAxagozczt7z68MoZt6sziF78owyxth4s4qidbjZaGouhiok4KCf3",
  "key9": "3QYvct3GjhKQnGv5UgFA6eocUuBSeLffsZc6xF257BBgWAkpMX4GDYNsGsK2fEfEDjEugh2GQGPDHwwx3FDvnsEG",
  "key10": "2Yry7aqUTUQFEdwgVtbb59f6FKikDY6jH1WfdG5A5JLZy5USaA8rhuhpF2zTYB7nPZz6SpJXiSCixDJ5ZqWSYD1n",
  "key11": "58vhJbHdbpy2yMjHqKmg9mmnGhnrB4b1UF42qEU7nsiqqCWNkMfLuMaRFcULpz7ontE24xkGTtd6pC7TPXsR3dWq",
  "key12": "5QJ6fJ3VHFF68AAwZwCGWZKtUdTVYNzxvKkNAEy8Q5cfELomPnT4hfAnTmxJdLMdPkzNm4xcsUvuBh7cR7DnwaEN",
  "key13": "AcGWxMF9EU8mNrbKqiAP58suncETz83jfaypfNnARW6EYbjZdN6JzqqMxsUsSr1oGRuFkzV3hyMXsPQ1zmEnVpW",
  "key14": "sLB95jWRG4wZ5B1PNW1HmdPpwp7dgMHTmHNGhLo3Fr2JcxY6oGP65r9fwwJnfMJdiGTWfWB7SXqACn8yd1hJenL",
  "key15": "4bBs7GffTcX3UoyMVDKr3YQxVyPcr8PffPwGAz1ZSECwCEY9hGqBCU2nzbZ9ACxAYG44imdAcLSxHGTRGSrgY8Wb",
  "key16": "5TeUcm5Y8VUbSk5tEYrqmwZ46ZquCBs7Yy8BhDqaoVWJVmySdy97UifeLEeFqE1B1WaSzwTwYbdqNqv9PAQhMceY",
  "key17": "4JFZSAdNoFp5wWXTKA8LwgJDqjNoZpogxUpBCHR7Scs9yKGRtCaYPWgnxWjvfpw9N5h8wPQxpi7JceMgUn34AiVb",
  "key18": "2S7Eu36YRTvVYTTeBCKYiL6QKX1RqN45z2fQD2tYFF8opcum7LbVE1ys8bbCa2jgo6W2L8dXjMxfEqUxN8uqdHja",
  "key19": "3f98ppo2mSgaKqfZ1uABKiuX4Le3nETWPVY8hRFGBPKSZRbgyS32P6sP3StxS2CtvMVyrvFu8Uti4sCU2oCtv4EY",
  "key20": "2Wn21VDDNMMAZTiypJWAbv3GtW7yrxxb69cH2sbChMEN5Hrss91XWWAbuqRVrCUixgWVrF4HZdxVfyMGgw8m8Hhq",
  "key21": "4io35g3HCBUadPgd51w8WKYtVv13HipqoTMbyBaTu5wpYVh6u3wvwiei5zDSaYPMvairdnqRKjarvk5XHSVyJAEP",
  "key22": "5n9TQ5QNmZwW6dLemdAd3ga9f9GbvPPwZv2ZEcfnekgxaLEmmoF2UCWNLYoC9JZS6qufxNVzcR4QXRzRdecL4NuQ",
  "key23": "56zjnyAXkQgBghfgwwMdt4gV3gzA2mfKamrb6Y7ABDHS6onvC78yM96w44b2Yiv1vTcH39TXLwVYTfzrUeY9LgA6",
  "key24": "ehhMzArTM3BgQUpHNUT5nsRBi1cxg7s96FkffB7suZsAojhWZSZdtEZmaY5MDiT92BA9dsGXkEryhuDeu9Tke1f",
  "key25": "4rHKHY2s6Z23obJ2D1SrxwxRJfUFfLujjHe8qF6QbXcBK2Qa9pbVX6iVJ7e1245cGQ64W7UAr3WpFMNs7HoJ3vtG",
  "key26": "4m2qoBHPRaM2X9AnFtygG63BN6tprRVf15U3VujfTR6WTmvLcY4C2H9J79QF7MKJ6eCXftGKjK55uHDpWSwGnch2",
  "key27": "2qr9cwwRjPAghoKrmwa8nLSfFRz7Ks8ufgLTgVrFBNpV8t6YjuSX3okx5yCKonMr6rd6ydBZLmxbxXjnzbun4XoU",
  "key28": "2qubagBzLkJ89cg5debXFky78q7Hi5sYugWRtvfUyM4LW9b5qaTHyBE6aYnEsKaMPSR96An4GLiTCApbSn3GrDhn",
  "key29": "3QpQg61142WxJPLRKzWewL5iPxTajnjz2Qbn4Ey58bY2W9X3zRx5jE1tv17iDFcDnNkjCQDekm2zbasB8XjSSiQg",
  "key30": "5J2qjRfdc62xatYnCvkb8FiB7P7LDBvM8u4FrmpDB2K4syu8E5nSVryzReaLnwcdUgJhv4hRmYuaQJY94vrBBZhQ",
  "key31": "3u6TMAAbJ6LLEAv7tW573DYWBXHaG4RWYsFHei32zuwyhFA947wU5qKiyryyfWJV9uWBbCK7AMTysKurgJdkH5bA",
  "key32": "4Pfwki4goNZnn8vEKxormbJ5UvG78Fhx7tjpLMg4KLyMr3fyn7BGt3mYxXukanGCvjCKR88wPY3AJFCzqCLx3HqM",
  "key33": "5NqdN7p9TNAunQxrk6rfjKAm9YEs3pozWGdeywQ6D7ERPcwPUBhTBAYEuVDkNNCkE2Egt1sD5985NLk96NaNa1U1",
  "key34": "4GZZAGCuSaApAhkTBguNECZmdkVGcG43YrJfUoxGDKR9cA94ckbKzeSeobHrUG93varF724EqzhnUomCCSWzPii8",
  "key35": "4umcqBNgAM5FKKsY93AcCrMNh7XYvQKjD1ogKN694yx6JadSzbquSzm2Lqekj56EJUCW16Zp51S8yz5fErN21NNC",
  "key36": "5WovNcty2ADaeVcaJZXWeGWicBnGdMFw8UXNnc3U97PLSbtVXzxAeRmoXbjXBNqmbhoVQ7as8x8YTjDPK1THCdqa",
  "key37": "2anJkUFL19uXWgGCHfvCdY8TDF4a3hAitPfad7JRe9kDhTwBq99KGjEPvbG1fkw3VZifPKereTsHG1mYhNA5reXm",
  "key38": "2VaYq6GnvqEq6wErMQz5BhUshNVZ1shi76GfJZr5WZVW6P4XGaSYjNcyj9Vd56xaauEaCdjcELWfhiveaWAcfMnH",
  "key39": "3vtysgjpC6uB3WiAkoE47wxiyMdE54Qv9S7BntZN7AF6ZdV3yjwoPxGV9wQcNPCofLbjoe3TDHyJ82QVHGo1zhu8",
  "key40": "v511VBqGHFcT23ycMan2tc7Lx2Scq2qjGs8ZaBKCZfxJLwHMDR5zWAwrNqt5WX5CPENkkU2jkJqvnrgQc2fjajV"
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
