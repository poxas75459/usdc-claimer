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
    "i8jS9YQ4Nz5TBwRFrVvy4DcXN9fxywGD8r7NquzaeAyPpScL8bTKs9UNddH6dT3QDKhZrb7LCeZpmivybQbktt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JG3QhMc7rfV4SEgizPErca5BMeYTnFMsFt8swnEy9eu7v6KuvvCWDPytLeHNeroNXruomwjZnsnTxtMwMXQx3P8",
  "key1": "5RxUmpQwjkp5TjPSDxDh4QaEH8aBP1f1VRK3YwGcRz9711nmrMkbWk1cH3HKsBzpem7fU1uc7JQLrt4gv3MXazYa",
  "key2": "3bTLH89hCnepQvoowAkXQLz76QUfFgLRJubbyB2GcCHyNrUyhFn2nmq7T22DWAu2C3nNyxEpfYP9cmyqkpa7aFDv",
  "key3": "1jsDiBUMMXe3njHgF2u6LQP1Qbg52BQD4jcKxMjDBHdrw9pi4cumGmatczSrBZ92jZ9fHdNiLEw9RyU8yEzduPX",
  "key4": "4QFNdjfJRZp9Xp91fudsHNixAp5eGM2SvEL4TDaZnQFZGVd7gqHCBXPakLqC8jYGzJ6iRodCQ1qUomBs8btpegtv",
  "key5": "6aYHB7k4pj9WZbwU9wUpTM4dkY8kWF7yRzBRVu39FZFCF9kAnACCZTnyUwCDSkMyxHRTiZH2iNU2YtgC6HZhtrk",
  "key6": "4WJ9q9wr4tAdtmrsgqLsZLNQc5SRMifGm3ziws9UUb66tdNsj9Svg9NaQhXMwDvDAyRiDz8MpfSG1DSEAvm3cXMK",
  "key7": "3qiy9PMcaknkVJwjQsWHk4wqT5zwHHegWMWiwXXMcxEA3X2sWYqdfyRfga5pgyx4uYWCpLUABnmqUdgtEFe8vzbX",
  "key8": "5YTJnu8FYFzFXCda3skFj6RfVPovHfmED9Gku4KV5nD5syW2kwJFRG7W7Qrw1fBUcYT8up9ZV2MtmFGUAE4pWBZe",
  "key9": "4yS9TWxmjpfyiHyaqEU9JxgmzGycHjB52fJmzzuPgH3azxkGJg6hjDDDfsJuw2p62VbamdQPeRsQdoy7N6Zr7b9H",
  "key10": "3geGM6pRXDqqPYR8ExVYWYsUeMRdns78psjB86ba6ikJEqL7YNQnBqRWHqeENAbPPSBSKaJf3e7q9CGBuWAvtoeA",
  "key11": "3KhqHJXWKNe9H7Vy975uKq5tphpEiigoChPH95gCUMSgHd7y8gpTRwKrcyJsKhBuwn7aiN7fMBMvoMb62sSeu1i",
  "key12": "3arAoaL5tPsvJWV8foiMDtjc6CdcrZVTBtsYZPZ3p2FcCQuJezzd8nHc8GzzT6pns4Lv6Exn823yWxz2SRpCryzv",
  "key13": "SpRHRBXAmXV2ydYi9k9XXYsCqEi425HtpMELr2VeQ2n3ygB2iPbBbYDXKUac3bbRZXVuwLspTJL4tiFvcxH96t7",
  "key14": "4wEw1DZzkbhMDcMfDXpJrrVYHmwQSscB6WFGYWCYiQ3dDH6Kh1p4PMLvpbweiv2FgBms97grVqLBDWG1Hk3WdNGR",
  "key15": "2smB4WJ6HnMA7H54mj5q77BgJQLnZaGu8RLwSgjnt9Qronahyc6UCtJ6N7WazmHkXHmfjhmDEATpgFnP8jiwUm13",
  "key16": "2B5TUm8JBCNkn8jBVFMHqi4ZH4YNHNPbJcC65jPGWJ2FsnQMnNUkYMJu8jzifPrQQAGkQsEKyg2aQgEaP9SfJBgz",
  "key17": "4eda1Jua79n669B6i8s9SLYx24St8JkG6RJ16bxYWSexjVKpyCpLM7rpj7v57dXth38QQuHSS9oPDt5TmQw15CJQ",
  "key18": "3a2K4awUAVNFGtK3jx3ZNjqYkKWJndumR286Rc1nRMUzXVWrpC54NowjhsbtgWWtouWSrp6nrkcq4LuK5udZSQoV",
  "key19": "VXDb9M3UgoNHgMHoKuhmzFNggLkWzr1mQHvC3jFXoVVcmnLM7WoAobRgp9UrXrBcKq7kJGVLxezk8TNTmh83MXx",
  "key20": "4A3UfDhagh2t9ENPiDVYJfgawz5uxEJJJgbTB3QWHnGe7a5kaA2mCSLPAJvLtpaNQ5x2Xa7x1MJs6Tx4PUqhhWHd",
  "key21": "5PAHtLoR3EWmzDtc6yCM5PXvdqxuaH32QG4J2FXdNSGPFDYZtfNJzhQkdHCmmyWUoYywRt4iQf55HnWYAMMdv7Yw",
  "key22": "4XvyrUMoGetcuudpcwsfLakkZ5aJaqYQoQ3bPqAUZxHJo6dwP27aMsj6Twf4m7SNQpi64w5rstDxorRcjyjr3US8",
  "key23": "5sArfERkrkHpi7P7xqjkdGuzXZdJtqcs6AkrGfapA5VLH6osdict3RyYM6qjo3A9xpbdBC84e9z7owm3eVsW99xQ",
  "key24": "4PegsxGeV1uxQC3UdEXiS5TRnfZPSqmCuKEvZ3x6ot8cMoK6jqabqcynfbr1maJ5SYd1ERceJc63V8QMGdbT3E1A",
  "key25": "63NFCvzh7krykWUzQ5YC4G4dCPHBoutVHDJsCQ6d3myutz2Q3RHCMa7JLXD14tSXPMNLCuWpagcqS4DHRe26BZym",
  "key26": "2TynScHaYHg2ZZE2Paprg4hgJhtsgKrTXCSijUBXGwMY1Aqtoxw4gCKf9tcvBWU91spzZ2cQC1dvUEtMDhYpreiA",
  "key27": "3bcnPLjxBMW67yaqfE1myptZVmW3bjebLUBVHgd6Az3YwtPazoQfVwtLuHSjWNfLTnBRjr8AgXc4NuHXoyojJJ3C",
  "key28": "5yVRyxUrE86ynHxE6ZSySokuTuH5h6XMEqdDZ3nxQFJidyn8H4ncfVVKZ4PDCc5EXmARsuxm3o9obSvSoy1j4b3M",
  "key29": "wm1hyZaqvXMzyknnp7148C5V4ppTVWDn2taJqM8gtVvEt1juK2Nnocmrn7gz7b1N3CssbzdhHVw8u47zM2BvM4z",
  "key30": "2r8ccZiehrBGZh1U6Tz7GbhPYHL35h1qcWVx1EuBrbBzHksmoafJr8tUjZvB1K7px1o23dfCAkKfEqDzyefQy7Yp",
  "key31": "5RXrGSHgsMaiXdXmL6UKYJAjBvwXzMC77Ye43Konmwz8tLWdcadxXteLAes9JkaoXoUKsKy3YzebteSF1WJbmTfH",
  "key32": "2983t6X8G4mdiwJ4Tg9ZZfZMPh9WQN5vVXHUzmf7EA3rS5Hr2rwcAHJNNmh3U8cT43A6tZmF7FKYSMkkC1q1QUBD",
  "key33": "4djAwKPkEEUj67taLBpEnmPMX4j2FCWCRhEcuRqp8pKTzDpgaDwmR8ETtnoMA8N1CBqyqkorNU5gV9LDvuYPERsD",
  "key34": "57QivaEjaEw1LJxhCLzLijeZbbGe6rT54CuN1zbZBMUdQkiZzQPyA4BqvHkyAoDPziioitXC5HJTBKGdFTDPXjf9",
  "key35": "3kAP3cMwyiTjzbw9eh9qKjWzhLQDgboy69gxKsF6DorA5DUKBqb1VwyxbhhwzWLVRGnc6v1yycavYe6B2avWf6pT",
  "key36": "5Djs4u5nwaYySzgNPdBVz2p4dr7464MPCjR9mKnRg8ZmQbTcYYUPWdLheSxYdmizZ6Hnz1H6vuevAJpEkhC7xMwp",
  "key37": "4jhyDnNPJtSzApA7CfihpvAwPphRLJqcHJGFHP7LpG3YhRw95429LcCYAPMa14WRmspo6buzkQKuRdUZfgRVqUnG",
  "key38": "3yf2xxi6fCZn3EU7QieicRUNtavUeBbiY5ptvoJiwayTRnA7wuuhFY99VACUxQXDzVg9i9nysXD2UKkHhfwC1SRj",
  "key39": "3aFGj9tJzAJ3CgMWSEiP3gujkRCjtZya6SjkefceJpCx92bi9HH5r5hGvzPJ6Z1P1JGydW6Q1o8VyoBs2vSkjrdV",
  "key40": "2giCckdMec4PLen74JWxCqiyUtdgX8pmzB2BNj2TRXDG91RGmbfiz67g68AUycBhXbzXHYvXLN2ThyergP5p53ot",
  "key41": "4SHQ6x1PcwYwmymsq8Wv5zFVUk7JNzSrvEacmyKnbcWcsi4eMNpPysrpxpWz5TtwkG2Wb8X8TWbzxX5jiNLXM8fB",
  "key42": "321BaBiBQRaCVuqvYnGm9chPNYt7E2PrYDVTx8sAdfEwmqgsduvT3xjXo5pnsLaG6H2C5Jb1UCPMzXmZv7SXeYHt",
  "key43": "4eDAzp9jYs8FyeYbPBUmPRE27H99mVUFtFmciB8e7P8Xkf3FdH9AEHLzaAsZdUMArv1gaWfFZofevtRQceVjfiir",
  "key44": "5SiTPk4ZcgKtor89cWzxR4WrUWFcci42cVmu5j2qP8L347kgqnD3VfmKn5ebVgeU7oqrJeLAu27ma6j7ZDdkcZ1r",
  "key45": "51FiTGJXChpYpy294qVepMqoDcuAJw9BA2gE2kFApyMq9s93yp68Xqf9BPeBpmH2ZGUV5jDDS2sA8gsmA55e4Ciq",
  "key46": "Nka9NiQhYfDHydm1KPBAC9gja5wjGuHM7Hg6UtTDogzKRtpRDoTtHEVa5RQD6Dc8a7XLyVc1kit7PRQ9tYSz6Nf",
  "key47": "4pS2hH61VcE9KCuGmHk2hCVneKZyvA2apptz1JkXuZT6a2rJVJhJZ4dEPiUpEjCiwoj72xWVueCW5DrJ9D83Wrzr",
  "key48": "3LCBAvuCiSC5yJM2d1KCAgikb8jJEyDmEiEp12kwBv6z9K9qB65KoKtgn8sACKcE5CAekK8WnCnHJrdxNYL585Mk"
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
