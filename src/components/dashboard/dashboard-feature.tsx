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
    "5LJ6LBx8c2aEoqKnsq5YK7zrjXYHTR6LyimhvmAvEW3FjGUB8JCmwDEo4EyeDbLycwtn6w5Zi6i8ujCPgHBKxk1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49RwsDUewADyzG9ah86TGiGUTqiQHtBLec5B7RCs2J6ob5UX7VZDfpCygPN3FSr3x2dAURfrAEJxLVXJ7WurrDix",
  "key1": "4ewB46xMHMbD1VduApWuujEN7Ze6EqGWrJQi719gRafCvSHxzPy6fGRG5wkjgzouzHHRWT9omaRu4oaJHciv3snL",
  "key2": "35pve5Yp76hfgxm7BjxieWagPB9LtDneBFDtRSjCVT1gbwa2H7Q3y5bpWShwEwMhwX4H4RuPxnL7EQXUAc2tEXbU",
  "key3": "2pii6hMyczgJ9FRquRdB48DEVoBP9JsbgdzDsnS9gK3PMooq2KoAjS61gtMbiun5hbd2QVNnnqGuNTJCkV2UC58j",
  "key4": "65HDKSDjJzUNUeSVgVRfgNaEyDLzdSrGQCkeS48GH484rEuWypv5UJ36nQGL9cdcV2TPTGttYriKd9WiumSVZRzh",
  "key5": "64t9TPETf2CmE9qvS9ZtVidTmfhLDmfPiuVHC31dk9PEb9q7zyqSk81a1VyF9UUrm2Xh9vZJJiDTjag48fEWgycf",
  "key6": "5PvjDnRjBYnN2mPpTqJGDFwgaifW41LXGBEQ286f8KAfBB83wFJf8reFQGYjeyR3WkNzVhiLzcZhGWv2AsuXwASE",
  "key7": "5njY3nZ8RNGjkHD6wneb4D9F5XhSqUFRhF2aVr6zEe1tmFhxKvjkABqfrm1ciWuuH32tU2gt4kfJF8VtuiPUJa15",
  "key8": "3frxRw4BF2Ysz3ismTHC5QfrF2LWMyFhgNRrZLm1SpsgMBFUnDRzDeoPzg7wRgFaMtXpF568W1dkRfMmPfJ6rHF5",
  "key9": "3TrWYudGZ2j7dhTyi1qd8zJamWbrqpD5qdUGRWZME3aTx8d3Md2r8hfKHDgy14wJG3fi2JWXnMKfbPptc4TafPRc",
  "key10": "5e9xdwpw6YYCMt4pA5BwqMy4P9bak9sLwxfJRJMrSgCnVGkmR8HYmvCVovudoQ4PWWQjRaG3eHesjA5QRc4bsz3g",
  "key11": "3Yyt4Rkcnd1hWGBrQwAtRon22KVerveLtN8TbGK2LcrKqPYyDrXFJP7PJKCS8NiyoPGhGqijFeeVm131v352qQSD",
  "key12": "4ifHnfgYFfQpqhy6b1iDNHQw9T9of3L6CBoPCX8XVJ7vz4F4xjmihKWCmoBPFHYwnUDz9SusBLhBBgTHUSeSCzEo",
  "key13": "5SayUbXLfMifiJ99b7Rt4QzaHNHYk172tkoX8Qzi615RXsVQ87JrCLFmncvt3Aofry9HrifygZeiDQoPVk9k2mgy",
  "key14": "5s1gSkc1FggdCejUpiwZuH1VxdusXyJFNKokkynTrzamFPpgJdzXb6zJ3BpEaLrwSTZkkrzijfhRsb3sxCFhSH8E",
  "key15": "X668HejKqSJYDA9mZiMZuLo4MwFb2vEBNQtjV7ReKMMk7xZ54yyEGk1QcQ3bL9nwqEpNWA5X9KVMvuLFBBZix9g",
  "key16": "3TyR2DicNMpxXx7zU758fyt8eHuRviPyZi9mUSmmWvF9rBggeYtwzQZ2xAfy1fhBk4uZirKHooC7id5mNQ3BYsoL",
  "key17": "4BG8KwUUJZZrqqSrcn1ERnNM2b8LL3XjByVY75sFazn1sd6e66rUD96DkApw4dPNTFgxqvq6dJyRXMEgZuuRKH9m",
  "key18": "281xSV4a61V6RPfNu6HV7x151UhhGdmBUVjUXPh28aQdVKRG2jvmgqvVzqkwzs1tpEtb9wHzvtJuaubxpen23k8f",
  "key19": "2VLF4DNWe2xftVR5LoVhdohhmLdRv8SYZBMBH8id1kkkZ4NdkcnMnADvtxVcMTvfXYim2pPPzvS5TwXN4y76z9X3",
  "key20": "47KCtcoru7RqkASoGimfgnaZJQ7y4ZmNhkAapD2dHJ5uxg1CCMPNh9HxghuTLGJHbZXA4KGsw7hg6pJnuoxHyVae",
  "key21": "5AEUBqSMyYCMuuPWJgmWyBHZ5S1Rsb5hcELKvSHH2nF2W3L5okNCW9a6QMqGbdgNeJdm8qevaBTMwHvyTdrJJDrS",
  "key22": "5GkjPGfFYJn7CB1Z7dsz2u3JxCMKnjmDehKa9PGF2CAiGWJZQn1czCPtDHZqro5YeYxrAKECAd262MZKregYxzni",
  "key23": "3Mwywh4KZ2AcTuPUS3r88fCHHdj1wz5QUWUatL3GufsUFujeUp1gSxgS8gTXrkZERfNQQfW2k3kQoA22ksWRAxAY",
  "key24": "4JUWNpJgU33AhtHwHr5THsWUBE6vMK94cwvCasQeqH96mgbdLH8VaQTGWXpDDJDgWv6KUSxhYN7oVKpJ3TR9tNtj",
  "key25": "aNvJeqYyqR9exgrrLrLmXnz4KrXF5WSXivTpoAywc4wHbQBtXG5n5FwBtsxPcQHZ2qmTyALywf9Y2nbrCDAzWgr",
  "key26": "2QcEo8uyxJwdrp7CQzTp816u2iK5q9X5bVETkfaRJYkEDVMWjMXXVfFYDfsoanxbm5Lc4kavxsjN2Am4YuWFpgsh",
  "key27": "3zbQoLNmvrhhhDch4q5R56haxqPsnsV6qWSxwkZKshYTciCkYmzx9hb7FMJfsP4XdqxYawbi2aRb1y6ratGi1CEj",
  "key28": "3dPrP1rS9GF8JM2RrD6xXkTp8t1zEfLyW9JaBSqxWnLADJNXvauUsjPuYezEuZ3jythLSCSSqvRgJ57coZgU81v8",
  "key29": "3d9qCV3kpCCMcAqzSk9VuWrC8JEp128dXDD5bxC8so3h1S5bbPoqMQMsgde22VuEs7u93ur1eowLq9cxPfjGnTHk",
  "key30": "RFhGMAxXZMxMAJkAxNHKGofAToHMm8jVJapLWehfGB5xJtTwCtBtATmabaRLW19Gi72TsFibhwqJLjTu9feoxMe",
  "key31": "36xVGdEC5Jmvhd6x4vo5M1xbf2kp4F3qfyGG5VzyaqpSFMQhfFZUpZKgDPjSx2a9A61CyPngeBw9H5FZnrArZu77",
  "key32": "hkuFxwzBF1mr9H8J5euqRnsJN9utW8UWgAFqJD2uzxioW1UGxEcbSdgh9zrzkqEQNpaBbjX3wTrXonELwwKSHBe",
  "key33": "3gWpVHMfkTqAYeivUYcycdGUYVcENkEyUE6jRMJdPmf8wZrGponHZi6bDjsbobXY5HGfiVMPzh9Ey5mbcYBjXQm3",
  "key34": "5EsHPitg795pvHonPHKv3m3AojktnRUYxXsfCtJSxuK9y4ZZSnAP8ef6nVqgQ3GyNsNhQuMrFLXntaXWbQoMZT7q",
  "key35": "2SS9LpYVxd3Y7jhPZMmtbDRbeqpDKQACey8uQxVtNdDUZdo1ZSQP2bXFRY1DHZ1oEAk2oEBscsun5t5VnBbWN5RV",
  "key36": "3h3Q8X42BnDFipaPkp4CGb8CKNxfLPnKgR2FBjvzmN8WYdJGKZmJTKUADb1dXCRLC2dCaQvTSRQnfoaMwDe6SFbU",
  "key37": "2R2Yvf3mUo4s9zt1yp85ys62C1CDVJyfddo6iBqxWHn3joTN112eRMtPVup5LdKziHRPFVE1WLjuR3LWwfWh7LwS",
  "key38": "5mbHicrG1Uu9P67u8y1pr2Nwxwz5Gt7pN6J1FdrTpextWcS9CuiwT5UmRvdrw7yPsCjLJSUDF2gxWjjKJtGy7QMK",
  "key39": "31HM4b6Rx6nHcQgqWgj3u7b4nApGaVeRQA8fp9AkcyVX8mZmibDB55CozqL9yRKWFizmafbAGmYLq1iFELkQHo5R",
  "key40": "2JaXvh8boVp2t6ieb69ZVBh4JPDfSoqwb7kTrqZjMvt2oHrA5QbV1CXKBC8HsmyzD7Hxi6r4961zjcve3SdzigVQ",
  "key41": "4tbGmuUF79FWY37P8duX7MfquxtbYtGotrqREjsBGbo5jhjPZKmHFYKFBbpFiErrJXX66hQNNyyN9Y9Av5ZtbxC4",
  "key42": "4G88GMi2Fav9dDEEd2iFnhEfr8uvdGSdaxsGHuwEcwxtLgepXaqDZrVcyxmzCnSi7fT9Pa442fRN7nTWmG6AvJPk",
  "key43": "3Dozy8y5sKGpQiXzUA8JJYDH1qtnXTQeCZCjttBgAav6tYXaGobBLFfYH5XxK8vXsicDAy7ts5VBfZ2VZqU3nE7k",
  "key44": "vxUg5K68W9FW25e28ksSPQsXCXoYHvDDBxTBitGwmgeeBijB7F86FTpuR44n7icX97Yq4ymvTdPwiow4NH85fwt",
  "key45": "3ywben4rYSnTwyBv3SXwU8iC3LZJp2MZUWxKxJJYDHeDxJFeBfi8x7SrWDXv9cAdKjRteN3NCg1MgBW7hRPyG9Az",
  "key46": "37ZoUYMgihNsmTfqikxSqcYqB6EhmUVCxg5aDBxQdTiH1WHZzNKFbYAtxnJkUyUnqHirsBErBBPQQkwUPPHLicyo"
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
