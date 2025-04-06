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
    "4G5jftEHLt3dq69nKrsKr7xgzzoXQMv8kHwrqbeucyX3xZLKzQ1EnsyTstwdJBWmSRohQK95iGfgvf598r4CTz5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RCc8VkW4qdkETLTK4iUdmxFMjk23NHpiRLf5qQMuirXFzW96qpB4sdbRq1xKbLT14D7iJgiZxcw5TDWCMJHX2eP",
  "key1": "4MBiuMaDerU9mJdmGhYxCQuFp6BxuFvt6QcxzxjcKQRbCP7xvyJ6PjcHPUpEdL55qhkHDjyeCpHC2f6nrAPkLRZt",
  "key2": "3aynF9Ng3PJ6GyBDbzhC4Zcm6gQXLsmEWNffKHdZz3eFoVryxTDNSNc9GYGtZevbpfQjjiR2WxU8ayVUv5vQ4sq2",
  "key3": "5PR2aLBKoxSbEvLRVSTxVBnvV3dqVsmQzNLsKyAuoNKiF4dbvDbmoojDTaQpR1jQrmYpdvxxv7yqP6vdjnkzvc2i",
  "key4": "5wUAeKYgEMom9xf1YpeCsTayLoPw1KNSXEwE7VwSwYraXPH4W7HYAWEzojHgqiwaB5GwtACnWLRwPvywABMkh3tr",
  "key5": "57zQYbKaaU3ka8JvXZ8Y8ep4bHSLPoXpiM7CSQUAoXzeYMw5x21SHDwuHQMTTzc3dpSfQfJLSLVE1nE2YMyToZds",
  "key6": "33CN2CkbkMK7C9639RZvn2DiMUsUoZwLQo8yYhSoqqoes9fFDMHpyLnnkrjKQZnkNAFHXTEAoRrs7w8wC1QHQDTH",
  "key7": "672Sa6PrVtxgPKd5tAu44yuG592YGpyDd3nUQUWWXA9sBBV6oreHdJePQfXYNCaEYkXFBYBrKho92E71pMNfV1UE",
  "key8": "3BjsXdgaSqdBZnak9CR1r6gc48VqTWyuKNHcDj7LxgfsCEhBTnFxANYBKAJHZ5HFFsF7qjpZcrKtD6nKmUkioQt5",
  "key9": "536h2Zt1zuHraP3HacYmRvR7pMdukeuc7MUTXjLsF55d2BVDyKJJakGTVAfCNbDBoJf1eNRtDLfAmKHoh743gbEq",
  "key10": "2XQPEhaQdBiLZ1iMqFrouPgnLnZX73mt9Fvc53ToyqgdJubG1KEgAdjAYpaBb29UvsDnTpGrG76yxq3T6APQiL2W",
  "key11": "2jNiG5YfiRddyyefgqT5Zc54KGoyGWf7yWA5QinMzHa9d86ex9yyox75kTL3oKVpueJEQ7kHxeUiPuCF8xjui3LY",
  "key12": "4wWBVwgtAW9NcPT3ZMe35jZn4yS9KRBLEEWnnsfSn2dnQT9xhqnXiH1ShTaCY9TEjwUq3B1rUeHHhWWnxoC2eGSW",
  "key13": "D19t9c7Rhg5Bs1anpY3n7EixYDSszMXqED7DwdqSzw8vUVGPxNVKy1cZYZSWMd1XoWiEntSrYcDTsvHatfaWR7j",
  "key14": "4yPjaeiuVYNswFE4EnXYrkTE7FnVtWeZmHJTn5GZW2VcV9YTspeLBphMrJTnsn6zPFfg8ZZZWCguBAWooNhs8jSK",
  "key15": "2tGepP3k2Sidt7hkhLSDprpai6FYBj8s96EMXuWjhMGckxXTJuyB7Vh2YYU7hR6r2kDBdfgcVqMbRKzASd5pWT7Z",
  "key16": "49d3HpwwweTefqu6UuQDbFqw9ezyyuv2xKgXU3ria4xFiLB63N3yGFgn9ZfUAtNz3hLxoZhoRPPRifZM6eQ7o7tf",
  "key17": "NcQJMoh3z5K77URNF94c14FGrwbC2utkVzZ97ME5NpDHELCj1NwS4vxH2dmJA2FnURh9CDJyEXtusAVmjVCjtwv",
  "key18": "5YZQHoLk2gUvHmFZvZfZC3bX9y2satYQsc2gdNawtUnLn3LJkZsq9u17keJVhGUotU3xrG2taH931gJgW9eXcmvQ",
  "key19": "ayrpVuhSpeYdQqe4gDdep1c9FFJRRTHQvoTG7mv18xAbApYnhWRHbvUGJS86beuNm1ubx8n5kDN3mWWK3uh8p3U",
  "key20": "2kVboWW4BDJuNohBtYUcMqXPrQRtbLVaG5mzooa5JCJY2F3VDM8zNb5bvsQK8ZsZ9gtWMuDzX8UxdGtTNz7WEemD",
  "key21": "XVoXDNf1c2oNaboAVFFAB4NjCZmPD6VmwwCLikVNgLNXSwGvNCtJprKKMJ4LDGSmuvHiBi4K7GiguLSyhXV5sri",
  "key22": "3s1GRwGbeT71MUUVk8DhmCtsma6z8AKjtNLZYGyUNUcv2XqBhLtCLBRnXCw8mDKacRgx2GxbFiaNzJC7WhoyLwtd",
  "key23": "2e9jm2rK8AFvoeMWyywR4nMzbtEGaZZrBxJYHK51hER3FA8grWs3kdneWgt1VFa5Yc77BB1XkJQkjFYCZ1nuRKrb",
  "key24": "34oLCFXuAATTd5uQfP2koU5ZRZrrmyTKENqvTWeG47pKX85BTSpDqTwbQV8Eukjk3DgDpNZT8hSE8XqJ4G5rRQPN",
  "key25": "52Uax656Nm4oAysFaZ1jawyTnNbKL4cja7QxNRbseQMVFfSYdVDWiVGG5xn9jXqksRSo4cgR4TJzt4vjD6QCiq7X",
  "key26": "2sH4frs7pLxB6Drvcs2rCA1qQD6v7LjvKCcbJrQujfaDke7k2o1tnEwsNv5ftMxETfwZSt7dELP9wu4fRjW9miY4",
  "key27": "3RzDce7ZmMhxKjqZ7NtvkcwpSezUitpAhymyJTAqhrYRLt9KEh6tmUE8aYqT6mmXDRqDP5eK9VEn5oMYpvdT8iyV",
  "key28": "3y1V557wU6R8XW2uV5w7ZeP47o2XraCnayK8URbgTvYiBsTrAdsii4RtV7W8gedcQRC9ueMKJgcfeY2uQFZG16SS",
  "key29": "5T2znumyyHzPacEZUPWeMUXXvadUGoAQiigDzibz1Sp56znK23dMC4iPGnAb5Q2C7CmDChe8TsfRiTZaWWJyGDZ2",
  "key30": "4u9qaVjurMBmxRxQzwqa3H6JLgPM3dv25KTQXjvsQfwN8dULmH47oKBtQLc1PpFKaQHgx7Uzad1nfao4C2aMzbB8",
  "key31": "3EXdhWiBs8wEoW55Ruv5KJhqPEmgVd91rorEtbCAYcPSVqyip2KCafwRCp8p2mbj9vcJdE5MRVMkuheSoYdebN45",
  "key32": "2FPKmy1CzEKe6SekMD2Ko64yRhychvNGwNAnBXWn5fEBQXGdkdPiSErbt9bq697ruY1GTHhGWPrarzpHyTYJmp1g",
  "key33": "4WGreVbrdYrYboGRfit1JCiF4gqGTaWob5DaA56UBGshfg8yQ55CnH4TRTtp4aLV6AHLypMMq87ixXzE6zpL4G4K",
  "key34": "3PJcrNkgqAVn5cG4X2zFdLdPAjNpVfLkiBaAEoVuKUCPR8yzCwzw6QTsrgbP2L2Dvg5aoBer4Ac2aWNk7jXyEknT",
  "key35": "3BgKnMMV3oD5FuFEKbtJj8My96tNjoeBGo2JwABosxvpSFnBovP3mArwyQiQKG3wWTYLLLdvT9YGx61wRrbCSJQE",
  "key36": "YzkBei64oHiSoTDyCegncs4gGkHuBTbcaFS3s3msQhvdD2egencCpSsKuhVA1ZMvKwHYhqnzeh7a97xy4tGH7j3",
  "key37": "C8kapUh1ATerov2xtBqfQjwfNyrmYd5ui4ST19zAKcmSfLQTHEF6eziefj4ByU71f5dRJB3jyzz52JA5AMMeDt1",
  "key38": "3CE4LUQPbhFpxPVw3vtuvt7atQsdzDVTbEcxgQtN1mzaZDuz64NNnW9PmYTU31rTivqYcBizozwsmQkUc7zN1SYf",
  "key39": "4crLW8niZvDLddqDxUVCcYbNjUiXun5QYwiC5asZ85riRCLfaX8Wy2iY9FqXqSfR8waR5svTWB933PMYtBnkRXaK",
  "key40": "5s5f2dhGyCdz4eSkddKXFvbxRhQxjpJqfb7sExjivVNbuKYgACAESS6zrjN3aH7AxigS7Vptk53pA2CWL2uXZozr",
  "key41": "3sznHriGE9DSvyzyerMMq8xu21ea7uaMyvCukLKzudtVV1wGXG8ejPZrReQeDQ2pHKrVZK7mWimvyBVWVfZAU7BL",
  "key42": "236tdxhKv8bb6xdk6Not8QtkUQKB2bmiF5mL2YWMjntwfwnsmgWX1CZ795v21Me1pF84KG3i2ca5FmsVDwWQyACj",
  "key43": "5bh4LTftb36kBLQzmrRuMXRorUVW6Ux6bgLs1CbodCaG7QYuC2bWcXPcsW1BMXuwxFjRKtiAr9CiCG7N8K29whso"
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
