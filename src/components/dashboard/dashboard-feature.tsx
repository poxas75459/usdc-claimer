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
    "VmCxpeiHJjBQMvdx1he1pUs5SCNLnWHM71BgeogyAe4hudAMALWDvenjDr6EJAFKvkDnTxT7EBCFF9rNU9YCrQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kMgHfEBJnu9oFimjECWuygvTJhX2JQkAgiEmifAGUY13pe7gWQ3dtnz1AQGkxf4rS8shR6mkHjfQqieh2UtEZvv",
  "key1": "4Et39o7y9yrULmb7a69PFMHJvXBnHBc2MbeWFR35wT7GPF5PvSfvrQ1tWDVZGpnB9E3wxnsLnc7wKvZSGrXLe6D7",
  "key2": "2fso5LdjV7rrMUnNf7hHsVaYynY9KhV6WLv5ZDhToxmX8onmVJCB2zT28XX1Rp7HhGfhS5mEPj5ccQM2fBnCQYXj",
  "key3": "2eJwseeEYzXoujK5qYND3tjmeBw95GnshfMNQuDqozbaiVyXusecmBj7xaHuMPwiNtW5rCtjV9eN5YtDNUkEHgGN",
  "key4": "4o1dweoPbni1VyAXQJJtWnJYzjUDerWfGKByS3V2zmqx7fbaGkrJdyLuHrU1obur7pWXSgCGwhiQXAvxA3nhFcLM",
  "key5": "32nJvgvyTtZQTMG8eagQEfVA8yEw1vJKJit8iLGrNd5z2L3D25wtnoFBGTgREK2quSefcbvhpUBsQ9Tv5NBBePC1",
  "key6": "61s5WWmYEa9ALoQQ1TY86ZUqRyKAjXZARYcXVaksXE7ZiTarevGAfHQAxNPb26yNnpPZq6ouFSauNz9rKQ3ZU6uK",
  "key7": "38PT8B6Sb9LdcyBzFJgqd9gHzLX7jtkTHhWY4nhTw8dVZsEMnWLCFkaCV9B8aQhKAsS2DAj3AgDG7Eg6fcBJGxoW",
  "key8": "2t3b2moVXXiiRZdGm1Kim5fDFBw2HoNg4ADjfEaA5g4dnLfRThaCdXb5YTyXqq9cC8cuvg1jw1iapUxM73HJkFWf",
  "key9": "4ump7XmWAGN9JAszyTotzrZ5maQ6VNsLawERKJuzjvormyBHywnjskNakaaYF9PVa8hSSnKyMQ59yXyZdScPTnxR",
  "key10": "4SAfVFDo2Xr2Ex91BxaSXq8qRTtc32ojpzRarrMbJYHjFLgYjZLpydKqfuPiKkTa8hvoKMyNwoNzbz3zZjUHTFgv",
  "key11": "66eTLrSF33nwybXZzirMWGBz2nt1hFRjZcq3dE7FhUwKgjzT4KUCSvGDrBWYM8XQbDzQcr4Lf9iZWw4Zs5pyKp4S",
  "key12": "3ig5uCFz8CZzFyfSDoL7Ut2YNyD93MNEdLoRaCzQDPaRT5L2A8TipSAafrMrXJaJS8qGq1NsQ4bzFG38TjQAYSYr",
  "key13": "5UNx14M5eYkYR8F3SHMMpUJ69qvxw2SAFShDdmzzUEkxU4uzqMNNq1eZcPebb6iYBz4it91VkgFMXNefN6CTj5Pv",
  "key14": "31wavTSYdLvwfmv9r374W15dhiU3sXFse7YiJwp8Vo2sm4PYtSktYn2yAYCMuAkyiLMto7RCyi9LgmpHBnyRwExH",
  "key15": "3D6SKPBKxxky8GXzk6122vLVtgc5oM1HjJQqGDKGmPMSyEjTLeyTfry5LuWVNisTtXmu3yN1rGnaZsU6MMgCTeUL",
  "key16": "1aqWo4GbNDYwrMZo2iWFfCspn9Tn55aNCyqoQRoXSgKMKBQmS89UVMQj4D5mXgqDwTmHjbFi8ZNFNBJSJMRr2V",
  "key17": "3KmMshMGmUdEDuj6kDFMNxTTN1DZLP2TiJRefss8RduYfSTDocYAf5L73J9UpDTw3JNTKWeByX4K8vawSBehi14c",
  "key18": "3Bc43x3Vux9ow12aoYgMmwfr54GDFj2ouba4QuPXRTjv1R2snd3yx87Ar67JUYFVXBFhXW3WhoovjoEiz3rRM3Sa",
  "key19": "4QyTEDeu3SANXjoVkNLuLqQmzyFpueGiPQQUoKijJgXhicyuCmyEhWwrJLE2VCMASHjrLU4k1XgwfKNc1zc5WzUT",
  "key20": "4Wceeq3sJrkXSUkynNLUesV5LifDCkqgVU8D9ep9AyE7xewHZAQZUbw7SjVCrVMyYekoMfpJktGRwbTnr5wcA6VL",
  "key21": "2ZEph8EhP6YV8mwUqjSWNkbpWcqcKziWuBXRuY2b9d3tsRvUf5nKPyMKMEZ9hPPKz6T5imJCbzjicr3ngP6VZ4Lh",
  "key22": "3u2ejh7a1n4ARHtFf7nXthYvcqk4JsG3iMv6WyyrA6YTAmHdkHTcWvkipm2tU39FsBbi3BhkSVD9V95GoNZ87c2t",
  "key23": "5VSRys2rmMLm1ceEJfAJVRzUi3rJbKjcKPd5j1PR41DecadKDnqSYWeuxxNAh5Pxr9YPzbTBZdobJS5E9MMuszWQ",
  "key24": "GMgjUZPxGyThVu1S5avkVY9BGtQ3aWxm2QZhFvyM8TxVbcP1gKL6i88B7KMi8pagaTauXDvHpDCP5oVaX6ZCBnp",
  "key25": "5HkcwEQAF8Jz5n1rrHwixCLNSA87XbUkV4YYRsqPBYZqi3TxHcUrdMLTVEnyD7h6yBRn6nLaZYZAUjFR92F8cJKw",
  "key26": "2dQgtxXKGLZH4i3xJpSaN2xVyfVRKHvq1S2LhWVQALovyLEqDsuigKMnDC3DqPFnNjZRNqSvjyYMsFB2nvGugLq9",
  "key27": "tqA3EMm9GqrmesWt2wuKFRhd9afTLAs4wxzuDDRf7oGEDwjsYZ3k7ecGMjKki2QzS7EJzrKsnsyaPhndfok3xUB",
  "key28": "E7F8y3yFMrFByzf7bndcSFcjyYrSp1ia2oA8vi5hwsbb8myLzQci9TecnRyeqXC2unWFVa75wrKswP3gid9yy9f",
  "key29": "28PD1oQ5SnQ4eS4BQF9UbM3PnPumvc2S8DPE4LwrBwm9RMFT5VBA4Q4mrirrNMgKNaQ9eHGqSk2f25WHq8FSpX7D",
  "key30": "csFiDd11zH6pXTPxtEejj7XRwNx14DhFQMgKS5HnRjMBNn5T4PUTRRRCpmjaRgJrX7o5iNC624c6mTfPutJSzJE",
  "key31": "2kN3tjeyJ8M7JoTUaoJaS6CwKhzFS7mjfWH9knR2isH3wSp7drtCPE4yZzz6nEYHcexfX1WaqdvdwcdQb8RNmqcK",
  "key32": "28kpt5BK5dMLh1HjWKXXj34dFMyDUMj4TuhGNYrW9vWiLTfpY4GwFQndvXcYcdxkuVTMMyJUq413zBwsiTyeprM3",
  "key33": "2Sbem7fDth8Cy5zmiE5SUFwngezfZLFL2wSUfcky5xuuYBMnWEVBKJorK5jyvjgHJwXD522Uwfa5oExQXo6r7yeV",
  "key34": "4dYNy8MgkripSWMra8NEffDqXuF5tGd14KwjLfnsdmA194poCniRQr8BiEP91eSXiDLMkatCV5rJMYPjYRdGDux9",
  "key35": "3xZDmWhnaLwLFZQFqpiR3VAyU5zEbAhP43UzBb9uif9MAsgLu3S9pkT1Gwdou2rTRB14hoq4PGdHxmiJbRG38QDK",
  "key36": "2bkrcK4smoGfMRLxHcrGhunn2nowZ3qGSzjt1m8Uz8fXWnoNi2sq3eDuUkhHbUMvPLv9SiSe4Di35z8oNfZWjyCy",
  "key37": "5eJfkjZxGkmrqersJ9WS6UqR81Ta6GVHcuXHFFg1PMp8w57mDCxM1N1SK84Sf1VfVrKwcW7wb3Eb1uCTqYi3xQfA",
  "key38": "3XkzSYqtAvgZsDsiimjUR4PdffxNp1ebJkWj3AJN3tii9KWKaJz4resyBe2d6MYbdDcK7K4mEp9XJ9xQiHzapa96",
  "key39": "3uUjWvjbfKJ7bH5TgwK8bWGRh6ye2DjDanDiAgnhzpxMBwt2aMhTD8Dgydi1P9dnxgJZSeTU9aZ4fgdT1WRfQaPr",
  "key40": "2rrxMT1voKtLsfQidQHb5x2F7kSPdfBZMcnqiUjtDfzez5gFuKWTsqkcv61TmR5isCck3hJa2CNEQgbaKWpgv1hM",
  "key41": "rFqtd4xaZc1VNpEwaRDtgd7wJQpiXV5nWoiL8AXzuLuNcXCnwaTmqjHcBuUNKDiuEE4BcLBpaThZPVy1juZ3AVR",
  "key42": "5XfeA9uKR8ffeHUmumFxm1onFHDguGSaAE84gNK6Bxtv3vaei4S6tJd9pRf8bpQ1xiuDMma1UhnSpVy3Fd7wZcVN",
  "key43": "4g7EmvgZy5xNjcCzJ8gHbBj1YzstXq2q7dMiJfr81pCP9vND8jR4wUCXTYgroYpCJg2LFZ759nNVDKD9CTagTgFE",
  "key44": "3BqMpSuNgHL4k4DqympS9FvMkWujRoyuGWuLdGhHeoVfDwkV9JGdLWpY6tB1FmbXRSK5kYjfFk4F1xdbzpoyyZUo"
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
