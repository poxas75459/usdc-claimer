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
    "5nwRGZLaBczSE7UCrKC8yhBBAjiJDw8bfxeSY2cMRAW3EvJ1vESbdB8PwdDEEsrDoxS3ZS3upLwyyq3wb62SKzMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1iRUZPY1vLede1MQgzMfDuekvGAfWWrhDsnxMBs7gqFDxmE2BexSQXAM36DFasK6rj2KUJJZVrTaBcFP7XDL5RD",
  "key1": "5eNmWNDk1RnbBPXPifThWgcWassTzg2HfRiCzifXHrVYiTYKdNqx7XNH6U6UzqvqJ3PXdjFfKKD6g6vvwHqGGkUJ",
  "key2": "5rfakRQYSZNKMs7k6GtwZqtgLsmQkNkTDagqorXh9uFRTvEsAMyDL3eEvr7DLhG17qwH3cRK4YyAv9Vb9h2ayQqU",
  "key3": "31NMhacRzHrHJVtLMe7HJhJYrmJ3PFFHjZRP3cJNwKrwTkS9Bn6mkx7zWAzGHd2PKCHvCwx4hjWqbD6iXm9sYE8A",
  "key4": "3xxDgaTCRdZfC7szdUs87X7fxvMNiJoxUDdhHwV4hstkM6bzBcqfywaGxLbMwyEEJvei1i8oNZT5aEnLS5cdK9ih",
  "key5": "3uzPh1QKqkMxxTy4zgDLztY7WWoyfLfFnzdzoDpetJgydnKN6bynheb5r2NQHQUVUQSKL2Dkh2RnMtNQ7uekUma6",
  "key6": "hge1jemhx51cUgryTqgzamKR6HbiJE7iMPaS1tK5YJJFMWgNuef7mUdpQUWtuxWHkiaq6vYECvq3tzo2L6LGUDx",
  "key7": "5pm4nYZChwvinY47rHHKg2CZ8GtpYLhL4W5ug4t75AtZ5Ekv93k7KukhejXRz4Kw3wBVXmjuGGgm8vYxmAKhMqCa",
  "key8": "634EC84LzARsb9FRhDuRhhp7X1LjoGLHHoiqeyPHHFSmy537zksVs6rkLx7XLRaGzaLgubUN3UusXhqvAYZMd2Y",
  "key9": "5SZiEqtcCWF7YwtAgyeBCuhddBvBz6nK2gMj6cJWWJVSqsQCpyrye2wYsCbLzHdjqmYyC1rx3Z4oiK1ZNwLCEg7g",
  "key10": "2jBnZSb1LdLKncjSAMKAzZfP9exiTEM5KGSFgEK3MAdxtG815UvCzkUwJJ7aGybQKz8fs5PLUdK9avgetPd2EoqU",
  "key11": "39M1rNuAnfDVemqTMFFXdZC437CM6LZMjNrTRtNrAHKN8wM5Dk8TY5QodGVbmc3jqnRg6f8BmqzdsLHUvbkwC5Jt",
  "key12": "GtUan4u37o8XNBquDUsmrLwwiKbaE2sNHKedUGDTNRgySEAS1fDek2913tnCmv2mKJLT1cn3H3Q3QkKYqFvo9CY",
  "key13": "3RVreH92zAcrzjw6GVFjoaNnaLHmzFqAuAEt3Ub5iQRQpoeaumVh5vmiYhAfDFMY8TQsVKjMptZCACEnfmHd4zQ9",
  "key14": "2cYMJgZvrsUXZgJWtws25WBAAL83a6Y1vDwzPUJbadYfoZjwV5oCd8uXPWjbPdAoY7fxCEojz33kCgHasGs81kEa",
  "key15": "3rLTLgQyUfvkgnKWTMXg1fjExp6GdtT5PjeXWsgcvdorfoLwdxXSEyicVJaeu3DZ5Wp6PKQws4g9U6MWQ5Gj9feN",
  "key16": "2CYsdL6FMYQ5TdEL8nciLPWQ4CSh2LcHLpjwxGF8TYCLYq7WyF4GPr4JXbgZt4SkPs3bELBF7zQ7AncKjWiJS6gm",
  "key17": "5B4RRT8A9poyybfHFxopi8yghgxtdhZSUAHPu1tR2PcdzhUFHCbFUoX7zxRL7jtkYgs8u9BR789FZMvYbNp3FdSH",
  "key18": "28Bg5SpvQFLzzigmZV32bur6H6kn15SuUWZFef9uaKbnk76mcHmwV8AbfpEkCBBPEpdHidivDkTQhEibgLZspDVC",
  "key19": "NVKEbGsm5Xpm9oXjKGBeHLsrjCA9esCeB9Fb21HJWg9SqPQ3B4S5xoiJiUREA4jW6LGXV7ugsLAELxcT3ofdJnK",
  "key20": "2qVuMXGBuen7jNx6YdpS17jNHkGK25QbciMy67BCr3SXv3vYcnCiEZGaej6mq1nNL1wjCUdjXapPH1Ps9TGjbeUV",
  "key21": "5vBZrJfbgijjJwPPQXxjwYkoBouHK61c7gE8SdbfF2B9CVq4JJzZUmiav8e9Ace8uU5KFJZKcFNFJQnAXHXyJWBV",
  "key22": "UM7SMkyzs79JFicQBcsWCcVdCQ2vEnZJofimm3dKRv1AxCtWfagRN1wiwYtvpmY6syTLcoJsw6D9PUYrvQxu2ts",
  "key23": "3kfJGHK6F5hBXmQNdK133QPM3eHJTPdaGTHKraVE3CovvexeZZyAUXznzFtA2DEeYM4xyQwJptci7hhffCdQ5DSy",
  "key24": "5BZwz6J1QjXJqWKeDSCz978qDpfvzFp276QUhZ8rNEMShYuWvmWKVVpusqnFQYJ6FDCYMvyoY86gr91FE5kc2Ee5",
  "key25": "675L3AunHwPeNQdjs2CkgHrgThK4gYA77eQ3wUTrce5tF5HUenhrnseyg6y5oYb5cD9wGugZ6fG8P9oHCmTMrt9f",
  "key26": "4YZAbBUo6T8DpUns5mp38Ro1AerkiAZF4bzGRqgE4wZjSQ5WauHnR5AvsgLkQhNhfUhuRjZt4x1ivhXPzPFErnS7",
  "key27": "4Hjp8cR2MYSTjx1XNtpQYqt3nmiiNab5o3VNVaG4BFKTaztiQvJNMyV8czDGr4C36iz4cCJC9Ffu2oFvFtiibdmL",
  "key28": "3UC7mttQMmupH5NDxooaKVAjdu2jXaaQtLVoSi96jvN5d447sjzo8MoDGzHaPQFbUYGyuHXQwZsaaFaPAqUaca4D",
  "key29": "3x6KKErq5wqNXuM4bm2Ufmz867g6Hv2tRHCbQ7BEoiDS6aNBUVpvamo5j3xLAEKrF21RwfvYhMoqA8r1CzcMHdZ3",
  "key30": "PFEvrthbJUccxYbGyTUBrYzeonqYXu7RHVfxrA8hfNYPn5mBHsGFbC6oXjR9TXiDXh3uky3HpEUWM5Dn9bQkutE",
  "key31": "BtP8cubCZLwft1Bjj4gEKzL6Mok6Lwq4KAcU6ThBWL2KpXCA1oXSQHoBfLFCmrQ4mVqW9VvYTEvyhUkvXSo7YUQ",
  "key32": "64i9zCSxecVRgfnD3jqQJh3MJqwKs2gQzbagYHPExY13Yh7EUMhZuYjCA5Cqp43ZVXtYxWNp9d4MkDWdyx1dCnpR",
  "key33": "ykYLKUR5ocnSuUV6qDWsMMZNZAoHKB5PDS8m7TAfnK3s5AWRQLwiWJZSPGBN35TA2DpdM7H4Xvz3phkgJ41977v",
  "key34": "a7V8ab4w4q64JfnNnLvWRqwbRUnEBeMHz6jjFE6CSPiBKi95LxGdxTvfNDjNZxgbaC6RCicBe3oUSqd7TjLNoHq",
  "key35": "5QQC6VnLF966f4BUaBFSmuqc48TVRu5LLEefosUKPRgbFqVjizTdA2pa8X2fhvic6r2qpnVPsWhUiVQDgGsi1JG9",
  "key36": "WMs1qrBgiMrPgtYvxFzLoWcyBKACDv4V9gNks2t7iSyj6auzWC9hcs1ZG39V9AAq39n3dbUgzvhZWmW429d3yk9",
  "key37": "8NZ7zMoSSR76Ly8GS4N77d4xeadtvT44BViPVyEoqsfFX3dnikXttJdfPkFEKvqmdriS1fty3kPB13tJ7YccbWh",
  "key38": "27BkfEeC8q719E15t6tdxVZGoY3ioMjr4gZbwYMzcStyaAYr8mV7Bgw8zKWX24MRwRAPf6F1r2HUuTrHDLT8Ah5f",
  "key39": "H45ryVTCfUu5emfeYGfLYSYmHv8qXuY6bRjoUFzue5Xm8i3btKzABJ8uor4hAeRpSz2rKJi51SCrsvJK31BHUKU",
  "key40": "2oA4Y99XfFHbN5aqtCp8jF5RHiPtnSpBbUe8AY4SkGbnVLf4Y1btFJ7mU7whwpbK4der96tnw52VdD8Ag58h1tk1",
  "key41": "65ykuDgYDFZcK6bqVoacAre38MnXtZfUQR2zw2L726WviKkopHoBFX5ECSyQhdrrST6g7RtyX4tpLkNyBdpV642y",
  "key42": "3MNC2RyRG6EMkyNfQLDtxFRGsb99PjcUk7e6ft6HDFwAkC3saMJtjyB6HXJZzznkzWuofbSN5EN5WYJT25mBm4Fu",
  "key43": "fKQxZnkgmZuYXuuDymTCHzT9Y3rppDFCjvuZcVTfHSsWZTdXtyQsDooJCCbaN4LDdLnNRJubtaB5EFkzXcLE1v1",
  "key44": "51sTrNbT4adKWNcRcD5HDXKqFN1KMUQ3oA83WMojrP42QxBRUWxG2L6dLFT5xHyJStVn8ytp72VSZfnznEzqbcgr"
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
