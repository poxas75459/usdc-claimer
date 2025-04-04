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
    "2wt2rMCZV3PefmNB1EkPRgRfcDWUz4TjDfHXxgUZjya9Q5nSP1ftMVfkgcY7eWqDBj1h7Q2P1mdwbBsE4pCGT5pG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yZPy5kiHT5X4wLyedPc78TjNLguqmSJYA4SX3NnaGkLwWRhNLT9DkeSrdKNefkQZx2QcXQuYRSpmjztiTCB9Ube",
  "key1": "3Ngwuv2B7mjcUTBvutMJnLLK14Hn8o2cAvMbDsZG7gD9nkD32Mk32ybb2Uh6tNKSk7qcRSTEtHL3fLdCWcHWiR5y",
  "key2": "2YJMwzSy2ybKK4bcRebJBr7SzWBnCqqjZXUpMmvNQTUosXuwVJEGQFSSgFEaPJmyFCLwmWKwWNBaokqLT8Lr6DLv",
  "key3": "5YXtNdqN4KWvpdR4vgnvjgecQU2puHhUdEtMY8ULz1nb8BBHeXmKpPy3uiuUAFrSJi4j8sZQenjN4bwWi2xH5Azd",
  "key4": "4dg4n9jUFtGtZ6ui7CB62vP761uEz6jV2Mx68auzWaa5uVhVEaFtPnXRJWg9JAvk1aXBv1iUpMXfZRj8GdtGhntE",
  "key5": "4xTfH1jpUvoifcnaAvWvfE1K73tmF5zaWfjS86k4LURMWxKxHMT3bvjPE3WqKBgS5GkHM4jo8yKqDxY9tFEhpPJz",
  "key6": "LEMPRoZpC8UApaKpqFTqbJB1QZELxZK9EbB6w9JK4cdD2YJeL7MyrWPKFxgrp99c5QeGMiEzgQYWNxhv4r13VRt",
  "key7": "2LHUs7jr1mnsRWTstMZ8nDjRCBWCLCrCHVaERASMLLZ8rm1gtmA6sWCAs84arm6WiAFedvxyYSGEwKsaJ6B4UkNW",
  "key8": "2tDytGTgMDuu8dM54SpkKBoeMQZJggWAVcRecmEr3V35iuPMwM4hGAEXFNPdhhvZ4LSytUgGE6jVnnQzJCYf3ec6",
  "key9": "4HGQZzivUJ6tnnX7ZX841Jg8iUqVg4xFTZFuo6iJm7Gw2vm8KwtFknW4bSHfHayg77dhFQJpyMAYWrcU85aYpTbt",
  "key10": "3GwgEEdCKTebG5yhcGZZ9Xv7ywMAes9YAP3J4V1swuUaS5YnkMSC4oCfMB5tQ9SuUkx5FAcU91EXA53opwdbWYtF",
  "key11": "3vCprWn3AfpJ8XyVW9zewP1Vw9RQUyTWZHdi9bDBGRvYmPYeKvSKRrYneSePYtwgNBDqpeMJhvCbMtCDZxdR2PBf",
  "key12": "53AazWVmygtv3WiojfNNC6h7dgTrNA6NPVzSkbdVSi8bk5CEGADtjGdb6np2Yr7n7j938Ee7H7CLJxV4yitpXhme",
  "key13": "RcG9JNPNzCe35hufiga6vrJKYc6qteNW623F4xRPhtBFsikfJbpufF2dtRBn4nVZtg7HY16BXgWsf8acdf9i6oB",
  "key14": "2h2zGzSXN4CN4ZYiBzELHrjXEh4bnkyFcwfyj37Cw1uZBqn42Zf2NwoBZUkqksT8YVVvdE26BrG4C9YkyNUXRSu2",
  "key15": "2S74zPcUNjdQ4RzJSrM4HBKd2ChdCFyYKuN64nNPUmYs8doHaetmC9PYkQ582LdrYd6J9jZogoNBe8Sr4YC6D6KC",
  "key16": "5Bf4YjUg3A5a1XqQirrUSuiGEjPovqXV4X9BHQpTRHxvgbGhzRXMFifNm6nCzMH2DemQicJKjCSV9KT7uksQmJbJ",
  "key17": "3kB1ufcj5EsyggTBW93kp6iPipUEzf4odkFRXfqAsoAQRBiPYMKg2tot6SFczujuA1KqRBBbSc7oUjSF6EPQLvpu",
  "key18": "s4TxErGYvuKPCqbrYbzSNAk1z2RAdDac46tff6nC5zGKUJ1rEJ6tUoZDkF3Fb3oxeM6TMAdid5x5bqdkrqNWZmK",
  "key19": "wQcCyabhcx6KwurFz24uQvhHCYzXYGxoM3WgfFj9rYfSndmVaPih79VJwiupQjFFF8DXNozMB9r5kVgq3WFrJG2",
  "key20": "3LK6bnaP75i1niX9CHXecjQc9K8xRfb9MZiJcQQrfRLR7SZ8WUuzvY9yVexd9mD5x81N4Rp2RckK3ibT2XDPqoQR",
  "key21": "3c54Umu6xcJ4uXUtfifbsyvYeyc8ZBtZybpNrXD79CCSGhZD7WuNaXQRH6YZ1nvPjnHNxRw6cZxJee7JGYk2Dv59",
  "key22": "5aScZ44eerXkRfdG7JEHixYxLnHqvn3dBypFkiV7aKZUqNeRTvtHviCysyohHjh7mWa9XYAcBm7UEm7wjCHNdFNQ",
  "key23": "2yBhHyPGRpMmfbVpQjNGUTw3yE4w9iNHotvHsB97MuTSgJ2h4ZeYq55G9DBQhJmboHoqSmobCZna3Rd5qATSW7V",
  "key24": "aagrJ9pxvAfzsGFwKre5ZEpFyYo1UavyzAPC5DiPqq34XoBgUfdyTKXc2YJwLw7oMNah6aZ7Gbaiy7YEsSn9RdJ",
  "key25": "2Gno6q965Uu5yQKi1D1XDGiZJeuc9SZf7uWA11cUbKHoUKEPkJfKkXyaNYbAfSG2AGJ87RiFahkKzTfpewYqMDCs",
  "key26": "5WpGcZ4oNc2DDKhi6PMPWYkfA6TAZYQAqSJwiawjeVmzYayHi6T44uVnqNfQ6SxREB6yszVTg23QHoEBFPBSWuHd",
  "key27": "3uCQbk8BpDVeGouR8dkmqqYhbShPstf9ZRXM3Box7UxCfKxJozp3nEzdK5D3BHM8MkvpvNR5FSWEBTY5fWqG9y7a",
  "key28": "3tQJ1gyCwuFmCjvtruwZkzegj5RnqQ221vfjtHDXHH97YFM1XzN1R9NXaNjCFshjKPDHPGfUjXvY1N7o7ifJyNT4",
  "key29": "34tGNumPnGeoGPtoDEsT8hv83vFr7qwWZVjfX4xbrvTQWibxCVi5k37sok3QDWm4zq9K1MYdNPs8wRASKmmifPHt",
  "key30": "4KVozQK3qPEe9W6iJJ474nnrN7D7BqGNh1P1SzTzrkF5i79h9oGMRc9RaSCcdPGw7qBdudTgNQ3QNxtv452ucCwq",
  "key31": "DHuGGjwdUwjn2reUPMUngGhAbZP36DWdkMm4wXo5XVr9i1z9TokHnhhHdneRTaDmNE17a6XUbwTjAySLPrW2fR5",
  "key32": "im6QKio9fm8bjycJfeQgD6FXnr9Xu9yeVLVurjVQNToAycPHr7Kydy846ab9Q9fLa41bX8bYK6mKL977jbWLGy6",
  "key33": "471WSbcpjEMyiz1nY24QTYJZrvNJM8nYSawjnuh7J5YbJJWPc7GkQPB1CdzBFma3hu5xBwj9QsWXi41KLEWy2HKk",
  "key34": "Lp4Q4ejLW2iBHGSXoHrF7cKDnBiPEWyd8L8TY3XamrzAzg1GXtjzmaybBxXuvUGJRxWmz5LUCQw4BGtoKd8sSs3",
  "key35": "4stFqdw4VwhUqtDbaSokVk3iCKM56hmbMsGqaQycNRtVxL6ek4EVpi8oU5zJkUBfs9PW7qXqvtvctu3BN4uWkXSg",
  "key36": "3qQj5Bn1BrhjGvBRHDQQnumpaJE2exeA126x3x4NBgqtQCUjh97m7euYBvfqGALYSjBmXCG7Bfqw1z4YAsN6T8jT",
  "key37": "49Ntm9WB6EbPUbdV1pNM488tv3fR4VUc51eu61xZWd9HutByZihnGoKxAb8av5wP1bHi7S3kQw4hrkxTrkctxbRY",
  "key38": "25TYLj3HeHWkuPg6aY62bxXKVk6ijANmxc7KbjeZFMsJHrAz7cNFUF7ppy4r8kTq8usx6qZa4Ua7XtgtvTBAEjVC",
  "key39": "eeGkv9eqmVMkbfwN51DtUuUf1msb6YcV9TvKspfhP2J3Pu9U3mMcWexuKtWhjc9AzCCMcjB1x3xTtPFVvs3RXZG",
  "key40": "ccQdeMx94oEthHTTxKuY6m5mq9XhLWT638DuAuy4KohaVtfyTMBWweqLABfsQ6fDkGJNhN21iuHk1dWBjB6byXf",
  "key41": "GVpfdRRPpnRsno32qDzorYoZuTZHGUZurP8PYF37v599ieP6jy5qYLJjZc94e9o5s1NQimcbLzLDba383kR1RUk",
  "key42": "4ExuEu7ZPJpA5rWsD2LDuu6EJNqsFTKLws5t1BKEsgbXgLEmNGsVq78YgG5tjN9356TydJC6CK7NpekZPgDo9F6P",
  "key43": "66Ttdq3rLnvm8UJsL6U9VVLUH5V52FvSE9v1rU918gey6p17Ao3YTfYMeokcfLT42KGZe4HHghDQ9WMHZNUvqYgC",
  "key44": "2YFohfXdcPijyBoXNdWqd5gmvmVLZfo8XHRikNWYmzt32so5kH7fYTBpuNrY63WTu84AjSvcRpEhFXPwebbJFG3A",
  "key45": "LfkA8Qan4dJWhVWw1S3tHZAwXYFECjUcoHy1M3RynWcqYTqLsZDdRGCiiAGUFN7NpciRP4LGsSVUm3tY31g9mT2",
  "key46": "5tcq1fnDUcwjFcQWUM9hbVeeZDMYXw8iXt8epL65ALQvt9D6KCGPrpPdLTz5iEKS6f95bVniLjazevghM9fMeX2S"
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
