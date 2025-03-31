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
    "5uaCqX5SpP7s4UDj5H9U6pm6jBAz9ZDRiADEQtMKNji5W6hHF5N4xKjHxDTVKdBvYYvTgr5VLuhih5JEwsHDofWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hQnS5R59B26LBSuTs965AYJjyaBy5JQCn5bVFdNoweYr7vzxfnvmjzQiAjJG8giTRDA97fAZN8VvM18tJf1m961",
  "key1": "4rpuUWbeVeggeDy8Rj5mGY9q5yurRTBDKm8gEajhW6fSLzSAfVncEnLmVHaD6WNYLEZv2VwTRnCkURaccBfTNFd6",
  "key2": "3Fj5TFjD6sHPYAbgwpGU3keg3LMNgGN8A11zAs5W98D8MDAskkJ91goDNv3vvgWEzKqPy7mAf5EHQVoVuLatMj3r",
  "key3": "4LEi7ZREcaozAo7K3hBoceaFnuHWzwpPa1sxwdE84w6Ey4A8Dwov72ApikAHzoRu952XtcQ16hVxQqGYLWUG5wdk",
  "key4": "3g8cp3mYdM6TUhHymqCU944odPqxgxXNi7ujLxfY4seRMCARyj5ECTaXLkxBtVTDH38M5ojoV45eoVcaQpAt2uPA",
  "key5": "5TU8KkoQYa9YJ8CwwRvVQwHHnvJ1o1pJ7hAHmdFBhrPeeQmAFWt3quPBT9L1B5Yc3MTQB9kjyF5jfxg5n4Ho2DFT",
  "key6": "2FRxoaEtEUM21NrtcasPkKCs4hvyfakS1wMHAhS3h8GxN7K5AAcTUGukeixpj8hUqJN8Q2SvmA5eNTQQw3FnUtWn",
  "key7": "iUMowydXvQwNoK3rTVewewRg7inDjPkdNri8aq5vJJ1z2rLoanGAVMdjaqAY8kuw3hVLAxSMTbydeaosY6Rh7nk",
  "key8": "46rPba5uEzsTn2VoFAdbNcf8fmratj9Hp2eVQPoyQkgkL6ZzotMnjiDoQ4gEitnUwuNTyxiWzYfgdLfSGMNcKMkt",
  "key9": "5QZW3x352pBPKg4gyF8XzgoSid6jd99eL1JyKT7KQhbdBWUUDmEzgVxUnT3t2YCy4R86B9jV9P81HHJQe7tzzRQp",
  "key10": "2BMWKYsEcoD8WamYaTqcG18VZEUEC4dYzTv6Z4Wkpb2xkSDUecDXvwykwcfpgoCrGsbj7KLJToCCzcBNmV5wFiHq",
  "key11": "5xXTtyn6a5aZgCikj11xTjBzLceb55yUKc3ZJBbvXSmTLDgvv2LzBwLxtw2xxAn5Uqq53Jk2Af3iVRxmkRRKspWw",
  "key12": "3MPkRV5SsKdFqxokUZCbcANn1yVapAD9xyXbV8UBY77eUe6udtvbNYdkAFe3jpVQdj1bxnSJJDhZej7Bv8hunBsg",
  "key13": "4U3BbTQfRE7zUMgUFUuVm1fxfttyqgSPPWmCT2H3XGUMqVKTBayaWwePYdqgjzMpBFrk1avJJ476g9hMGTiFHzUk",
  "key14": "3NvaKvczK7K128L5FmE8PB1WLKP5fqG686jQ9b6fV6ZJADJHgwPmMmysRaNmenWmMMW5gAJsAazjKMNVpc2YqY4L",
  "key15": "3Jen3ceMLCHKC5Pp2v23fciVEw2SdZwwqNHtJGeFxhTkweQ9U9G9erYMePkhVh6nTAbkGKpDCqEc7Qx61QwgSc9m",
  "key16": "284Nbbq6aJAJk1WMhmww5CkHZ2LiUDN2rAdK2mi4YCyY4LqSoAkU8VGL5to9pifPNzVMC9sL2QZxJqnHptHznJQm",
  "key17": "31b5KTKqoPnnerS7i56qSrSZF1nHDboG74nJVx9csVA1xdZnU2BXsabGQmy8wBoHNL2WZ2fgmF9mMUs4yeR7zWif",
  "key18": "3VBButNnRt117CjVhkTiqTgfefXwEdX5Q5WLCPi1T9hApun9dX8m6fz1VibuDybZk5fohr7UgthgBtnSvdTzARm6",
  "key19": "2pTNeZ2kBRmCWS9ZqJQ3KMF2XDJSirX1BF9MMncMkUtCEBFc7Gftdmy58FDjJVHUAmtAqMARZkwX1o6DfupXWX55",
  "key20": "2tMvdkVQvxyez2V27cHctv34Zuov3NCXAtnfe6t62gS1D7ffBdApXS3cHRZtNUedf4o3PXap3bKgddmyo7nXhRtz",
  "key21": "4CwyD1KTScq8DE6CCMEJ5FVrQiYpVSBPdycn7vrW7cFe3sKRSGnzH224LYwXttqBe4QLKtxjzmg6kR2E1ghW3Pm1",
  "key22": "4m2DLmDyXBb1Y5xHfpaqvNu8DUCPbZnH2v4ix2fTaZ5WCGZNt8hGG5yrQF4KDRorjkS4Eu3ap8YpiSTKHFPAvvbn",
  "key23": "43YNiuVGqXZAy74SbhpanjkAGv6XhuZqLEH29Ed9RtnLqkVhNNrm552Kn8AL6Lnu6nCXjMbTc2jtJmmUHM6BSoF9",
  "key24": "66u7VjXTMNcqbyrLCc1i2GGrhLiE79SsRSYKJxYX24SUcowfnFLhmV818xdQcqXJbyHLv1exeb4QxGUmMpSt85uZ",
  "key25": "2qi7mMAqo5VxbHc5K3UNaHwfUvxGfiknJmXRX15iosUS3h9YqLyaJxjgUzeW76RPEybrkCZcntU7PVmJ251dtZ6A",
  "key26": "K63cwMMtkH42t6AzdJXhchDhEFYE7H5RddDbPAyQKwuJbx12ofApARnf7uHSHT1uDuNQZrLwFUxnHnXyxiDswYi",
  "key27": "RvhvVnHgAp2iqn27rmsKdsBoFKyZdyWqT14DrNEFhcF2XRCxrySeS5hLoeHQeuoVcZXwEZWK9SsT5iU44yKzPmM",
  "key28": "2apRNde2wQ26DL38eutNEhMhmiomv12YWUkUJto4EQfJkxGsGXPL784XcJeDbLzL36eKWm2GG9qpBJSZz6KMXS8u",
  "key29": "37e7xGViED1A4XW3PLW1DMaxUrh5Hf1zB1ynufp1DamKGmnWzk23e2e12q6ibVsRqsq8XNcJHPNspnfoLwVeijKA",
  "key30": "3Sj52eQtEBXoqmrXbqxryczVG7z6BKCPXj4bnBLiqYj1idaVy7BdMhmqhxJWk7AePDEu8u5mgCgjcQ4fYh6GxdhZ",
  "key31": "4JdiMXKn9RGwprn9xfnokYeDFQuWcBboire1MYymag4eZSY11eqGKYPCENss7rJGxD6fra8DcRk7Ed2F49DUKUqQ",
  "key32": "4YsE81QEqqXJYk79QNXCjdnuGA4EtVvdhsGYvUJkfdUirpN53wheA8dRdMWC2hydCLi2X3639H9GkHws2pmsVFJH",
  "key33": "4XTsxe99QNuEi6XxtjK8sgFLMNnaZ2xArfLxhXAKWeQwYpBgwEhnWS8WEvRNtmzYMRYhMFm7bERHea6zYvetTfmX",
  "key34": "3NVR9VS8Gmdy1ekeTb4fhHbd25cyBRbxbtzoJpBz6ahNWkorKtQuuoYYbgGucUeEKgp94UMBUBcquJujyHnvWd6V",
  "key35": "5YiPWaSuq7ZAVwUceK6gdGmp52RM6PZqeswjN4AJc7UkdH6XBuBfJ7N7MVu1GvhfA4tQ9WDdPx19pr7w2wncWrnd",
  "key36": "2vNTLYPeQKPLcZGhUVug751ej2ZKtjACX85X9PjTbgwA9sWxUSaMNE4GBQdhjrvLbavsmScZ9ighKhMWyTNHfrXZ",
  "key37": "4TfFZMCq3ZuBmhGrGhMsSjuqCrD2GhE15KEg9PmCpxtAfyh7Cenk9Z2MmMbw2ynmEQdNiQ5u9pnmf2yG6JDnhuAq",
  "key38": "5uEKsbPPUrAHJGaKJUvQyCzZe5n9rg7WAp2s4naxz4v9KXpq813M6nyEn1jqp52DugcEMx7danB4HFyhS26skt7M",
  "key39": "25iENZCFMjUMBgpamJySb7nAV3WqLgMpUgogEkS5pGWCBf2qqShmFuesaUQGJweB3CWSG7iyFYqkpXSVuz5nwGFP",
  "key40": "3pWJv8N7JBzwn8cgQY4DSCHAeNpLBew8j8kbMv9TkoZuMfs7xfHmWpYGSuBCgwAMHZXRJdDDNnXyBRMAmkptAuf8",
  "key41": "uiALQxWgp4DaNHPMnS39F5CxRZUWPF5iXYpYEinM6ZXwzPqfFUWnaLusX6yreJmfggyW7icSwy3ipuZn5kr9uxY",
  "key42": "3cWdBDrEJmLXHJmeSX2nrPimVsMirQQwS4RK69xTK3Aak1QzrRxzUBh8PoPgngDKVphj6FEqMA9ESXyb5R36oUn8",
  "key43": "4vFvwkNzkreaXf3MaEFBoyeREQHzC25WhQ8NZm78yYchNcMBDJp1DFr8Fw4A3srZ4X6PTMc5rv7R7wRNE568e8hv"
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
