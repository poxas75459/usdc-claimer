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
    "3SDRo7jb84viDcb6m9MyBHd886WK8cHq1H92CEJUokqdeQSA686x546S7dZ5frpb5skNF9qPXMH8kq1sTceNVC5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VZ9XEP5AV5nHSagpQMaLg4Qh4RmrAqUJG5K1xmysaGGp5ebTsi8VqsCjggtesPQpB1Mbd3qFeqygoWkGXTd7Spq",
  "key1": "QfMX7GcjS8QiXGtouThr4EeRtMdXEH6kCZKy9eb8RgxL2givQCVeWZXRwFgy7yfMVSkHAnjmxqw15AaMyocKSjf",
  "key2": "3GJckWWfCEyU5RTMcfyqm6NUMrwm2Xe3hkCVj6dDNJsVdzXRq7XEtSuNwt4eByWCPTqJzYVL3GXM3PRk1VUr1Z8g",
  "key3": "517UTcQFkagEsM7fDyFUgmUbNUq1utLDNNPYZcuRLG3QRoCS1itbjV9d1NZByCM7TikV9HNz5hL23VEJ5jU3NepW",
  "key4": "3wEzwpQbre9gqTVE2vX1H8Ss7AZdPMe17pEp6BKXX42rRKvy3ZY3Lcw3bCyqPQaFqFnms1VL375trEi8JvPZ4eRG",
  "key5": "5YwyYXWyxKryDV4UGiQSSmDvdmjdamT9ScaaLAMjtaivAjgGMNCqy11haiUEhsfc2J5hTEHaqz3detXVmC3PhbXq",
  "key6": "5rRnaePKhjWdcCHaQYVQ47N8LfpZMnHH5NpH9XwrFoxwgfs5xHXQEya6gUiNH2ytvdsQmQc2Wj1MMFWHh78dEPN",
  "key7": "gWLki6DppCUycBSPijptQggGywZV4CkwW5urCxyD91ngDhzXgfjj8veJnpMsoGg29ZcfyE7WBoKGjbeQi7sKHgz",
  "key8": "4JaRzKCWGXrXLAwDjbHPwVgjgSXturbcbR43spYsJ8PM5QBXUyUHfCGsYESRtcrNrV2JAuXam5NcjeutKfmaQwPj",
  "key9": "mwFmbBeELh3ev3SkXob5BjsgkY5wucbPoEWht7TimNFUepzqWNUGkLBCo5gaXhdmcHYuELSfwHvrZfn6ou1fVKx",
  "key10": "5jTgiskgu99DFC4sHBzKpXTmv3iSyAhENWjB4wNrGAMnWqsvAU24vmXZA5ravtpcaHPfSMKTm8jnZHVKDmdLvAiv",
  "key11": "2aAnTeGGMsJKBjDyJh8MXFi63esptrbtZvyiL1DAxS5Cavv2MefXHheRXJBUZ6fvGkoy7oiLSYusE3fwwVq7Dx1F",
  "key12": "3f3QYAL9B67EUSHeKDfv7V7R6yrufWTfNmf33MQEvkm2zH24SKijxoDGzmYLgUfoTvwuzfAPq6SK5pS7bLorU47q",
  "key13": "2niuqFWRyX5kJjBmsofTcLZX2YdSeP6xtPD63nUMLAXsJ8qHh7X9PNLHMCML8NjC4r436St6z2va7xrsB7UA1UWN",
  "key14": "KY67NmU3cWPcgxsyBjUc28ghgh7xf5jyGMnpc81n4yyMGPNUgab2DqfxHrR1DrKhjH3AqRrk5kL64N9mJpNXaWm",
  "key15": "54VEf1E8omemvtrxvT7NgNktgaz1XpCqm5TC8bYy5o6QV2apJyJy5QANCLRSGFabX6fQW88kgE18onQxwGoteyEL",
  "key16": "eJiQNE4enxx8QFBvCzoPV2JhWmjHewkFePgurTZnjp7doD7kVTXR1GnpAdezARPPY9ZhXEWYzDvvTKx9v4Q7VFU",
  "key17": "2SaVvKrJUKuS9RrZWK1igxsxkiTxLUALw2pLpbNyrqHkvJZttq2JysGSKyrwynSDwGvf7j89xDLCKrz3uiQb7amV",
  "key18": "2DAoqYmsdRobsXTyYqJk4v7FUN9vmRuUSEQw6wGKcK8yX5yAs2JzzSnzBEULNN5uH3asH4oCJmRZtCHX2ioB165M",
  "key19": "EkdFWH3XAQpkwNBQCvcBWADTjaSBCvE3tfCY6RSCHXUkgPPsbKhBWey6QD8e34Z69dNWbHMwcrWa8UusK3xUZBp",
  "key20": "2RJyp1iANBLbtDcMTTvwHudsoV982oe6jmSHyKkt8gJFYtAXPKcUxCrVGcHDbeujMiHxWoyoRngcBJJf5jffRr4k",
  "key21": "3SmopuuDU29ZLjcxXxt5YQw5oTpxWkpKJQoYVZbFatZ9ae15yES1W4kqgSXqzHRcREjycRa88pnHHgWDSdNyrYmv",
  "key22": "4RCVLKd7MjqZuUCBtawf71S18TsJwCERtj6FbqnjNetbh3yW3aq6xyqcYnkJJr5Nx5wqUcRgBHTyQKDWuJ8rJj47",
  "key23": "wXHP7GPudHfWBEUxYurmcEAL1E7hsAiQ7QWeaotcGigcPSK7QVNDn4oCLbmh5CELeEcu73tErmAF2KZZpLzu6NG",
  "key24": "4JSV57hVH2bAsFDw35ghqamYgoUTqeDpgJNShJVd5smqLWwAanX4dj9N1zd2qj9pJdpkS5YunnYHczr4oA8CCXRa",
  "key25": "45jUoeok5uKmRSncnxJyndvJZV3CPnH3Q7P6LhvSvj3nG8oERfkHdp5Z4U9WS5qjwudqConyReGs3uYivXpGgGa9",
  "key26": "Vf5ahQQrahAHC5jgTEgLpaVuJ3u5xRfdqfx8vzMDrgFZnzTSn5o1w3gV5SjwLnTU1TozCHEs7mmvfvYwKDtQqWw",
  "key27": "jzyUM3YnD1w4eTfDzpwLpK3eV5bcV2QMcnqMpCUTGFkBCUyaGTTDmCoqcvAPnyH9dt1mhCM8v8pWQQrKba4pj7j",
  "key28": "26TbVkWD3Aigp8wn2FZuWuRT934GAAhms2mkrZxv33nT74BkZBDzicB9P2XjhvaZkLuXg1PXxSsuTyqMivyZjFLa",
  "key29": "3M1En6GqWuq2wS2EYptMr6zthNCTssMpjcTb3jBFG4t7SGEBUTJ652NvXPxcMBCUPFCyo7fopbSnn2jcJan1EMkG",
  "key30": "5gExg7s9fTqmtA81FFPaXJwQkctwoMt7hp21BNcDeCUXzQPVdAMzjpGu3aH4B6cFgtbQD9KpDenAn7fwdP44oaZS",
  "key31": "5v7BNRaEHLGMd3LaXMfUwvxDHambqrENFeDZnc1wdQQ8W5N5fWcmc2Qzau3vrypmExP9BLYbUD4sLC7YgCfi5qVh",
  "key32": "3ugv4ZX7QajhZ32tbehJTJ78WhsGSLV1GY1BsJsLnCnzckwrimSHJPPAcp6dbugvGRVqzAKZNrp86jxURmSvprk8",
  "key33": "2xvLrMFVT5CgCWsYAyCRenETdtKAMkN9GpTQV1rqnUL8dSxhNMohbJnPx7yLp3Ej4zUPJW1RjExi5NSU4Pr1KCx2",
  "key34": "Z2FuRNhKsouRqBDPNQY17VzrhbTbY7bEUxR6YmsfKjCqvxdAkN2aH3dXc9cXfhfS1N4iceWj3ozop8JWcCWcYhk",
  "key35": "4HwaPgXVuMxxYs84yMhf1iWsfHEFt1txNnqmuuQBecpGAPp6r9K98fNGhwt1MF81sTN368hu7CqQtA6ywqtk2GKi",
  "key36": "3zybKfUfKtRXGo4MqhYVf2c9ifb3rquH8TyHHYW5FexRbXsgwp7WNYc28h9j3u4iS6m5C4PJyTdTx4r7LHbee3dn",
  "key37": "4M42RQQ15rfRPFJ9J9h5tuW8FmDVK2rPr6Aaemm3Bi2femV8mZd596Pcu2JnN2QF9tQu7U5cMfEdTLDRtoieCGpW",
  "key38": "f34scJScLFVaxx4EcuEo5rgNHJX3Jn9iiDMqyNuxWwJmTG3FVR6qqZAUbpAQ8TU1R6SXy93wvAYGY2GhoZ8dg6b"
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
