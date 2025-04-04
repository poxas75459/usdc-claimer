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
    "5MSZnZkFBaTnkJ7tGqYd3dY4nNdL48AJUkR9aPPGQeNy6X4WhdNSTzpLNuiaPHaGeiPHNjZnS9faPGzKuBcYZY1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3otyFhwiHB1nmV5sHE6XY6uxgSU9Q7AJmr5GPk7XyqGA4mqBWZ9Pmg1qkwuCsirgR5cYgKpR6ct9gpZZnAggeHs1",
  "key1": "5rWaegvwGtndqaD2SXP4tF56wNUSBTp2Nd1qXbcCxpxjEtk6yom1UR4tBoGg5taKKcJindFe5nugnJB4WWX2NbWt",
  "key2": "4Rtxcx1PG4nswnVegTMM8PSP4QzgpcKRS2W1TveZfEr2wPWM1spmaRVkM1xXdf9xBFn6Aa6yvE86fB49PJ75Zs2w",
  "key3": "4bMK83kvMHBuRjKGRkhyKRaY8QmzRoA2rimtCmecuDVAXBuzQhdcE5kHF1n8cRvHKWHGL3qFzGsy7F55mCsDA75x",
  "key4": "MTQ4YKRfJJR2oJVPGUpw8tAQf8W159PLjTSG7nRwxgShzbhvBFsZ3BeFXsSE6xoheVW3y3rB5eR2AhGGofSyKpL",
  "key5": "36N5CED9VDu1o7VuFuqdJJ1Bbamqz2NtmuSiHgfSnao6pj9yVAy1baY3XviayETiCm9zHdKqK8APrv3eSLS3FcHu",
  "key6": "5dGgZyqh7SYXK4DoRr7TRB4yaawsK6CTQsUGSDiyKaGSK9iimEx3KR4CnmzJRUR8c3QSLvijXTd8qfhC2AgmA1Kn",
  "key7": "4DGUfv2TCHdWnHpow834w2cdYD11rpTYF4bWmrRRwWa8vtjFiPXeoY52VoRjxtQutmP9x98p2vzdB2rFaMXgZJE8",
  "key8": "wwMnzu39j4Ju4ta5DhbbDvyEqR11gSqF3As1mPJE1iK4QZCKU82p7hJsh8GK96ZjiDdjpdN3TDYS2TynvBV5CVk",
  "key9": "hpPRxgXBe2GEvVu7K2KtojM9YUgZ9nhKLSmQcshXEWXJMZVR9XNgzHVsycccgxztcxYUL3ZBGUsZyoGR4JcqPFh",
  "key10": "4StSJhyWe2mfPvKDCa56XMNXWTNUdPw3AGKH51CqtMkzijv4ior4iCxB8Gvsbq4B7aCeEA9M5pNMN6ikCN6Zcs65",
  "key11": "2K5doE44XhaSDJxKLfK9AaakbnZnVR11njkT2kYbWkft3gfhQFgAinFoPZmXY291JgXyu36KKpjuspRekcPKgETW",
  "key12": "Q4gcvYMM5dKZ95RTX8nMKGjt6we4hSfWfD3gZhuAWarobxKLNfvBmQJThx4adrtRNzVM9DAVAE1zCakDeYU5GPq",
  "key13": "4kvW2stz4yeXtyC2iDv4zLLeeojT2Kt3EkdAW2fG4B23pMzbzTPJpkXwBTijqvB9pKAeLCcRYtsCPMMmv2o483kp",
  "key14": "3Fp4Kai66kaDnVLmNrzegDzh6EbGZpXhoEb1eiwJAV9TdJU58R4HDNHyAUiumc6Ec98fGspAe3WJk4ZmE1tD1ek8",
  "key15": "N7onfe232G9f13ztxpfWnytW3xCEYjDrsMrMdW8Mw7fxr7BeR6ySZ48vm3jFpDayFzo3zw813Qh1MPW2g8VjCkw",
  "key16": "EXUnj6edb3up6f238Vxv8TSjgivnHRbwzTQ58mcoYszk3qDv5vzyo18NFhdM6PR4GnDHefcxFMkssbcLqpPFb9G",
  "key17": "4B62sAiSrxZQnyTzF3vUCXmue5EBKGyBMq5FXFBie6hJ44ufwzkVPKYgRMTz7XFFmnKQnMrDNDUGo3RaNLrqrtNb",
  "key18": "taFbd11d8BuFeRUD6Zvj7zKH3NZdEZDPFusnBK2HqtTEEvJYz7Sn8Kkf3kdE9982HFCEH86ACx33Z5fvWUhnMJh",
  "key19": "4EJRNkMDWKcCeYKj5di82Zn9mRquUG4RQU5QGnTNQDwu74BkX9Y6SqUrVLhKRukeBuUpCK5FKxgYY4CR3qFVXmKe",
  "key20": "5N9hRBiiZiLGLHzA75dJNbTgbhCkeQVPNMDdHS3cAqz9Rt9RJ2kyTaRKDuNvubBmz7NnSTg18JGrQX4vaajAZzYq",
  "key21": "475MzNRRytfcB1evfnjKk2zcCA463C1KFs2Lp43Po9VCb3HtavzXNkNMAwEMnjQh2bYx5YVJdMmzDgXg1rsxHc26",
  "key22": "Qp5JbAhdypxeWsG4wEQKw3t7riXR2ymoY1r78pA8zgHgeGNpFGYJM3TiySGTP1m88gVC5GefsFPttwfTqAJQHht",
  "key23": "GJeR6iM4udzQ7fpN9ZrjhkmBB8Y1xioCKERFTDfUKyzmvm2i5kW1m9CSGGgg5jZANWJq2wUhanHPGQzLSHgxBpg",
  "key24": "3aHJDJF5TsDVQ6EFM1AAgkosNgxGunJAHUMH8UNf7fWHUK4ZVztCsd42iXMT7z2HXz6NYrowcRWd2FMG9eNkAmFZ",
  "key25": "4MAGPiFTiqzNoXZtE6S1UwcK5CoSdMatagNVdtyMtZfzpftmaHZuowj8g7ZxW5YM1jTterMJgB95Kre6fUaSPVV1",
  "key26": "52rHHH6jgo92cMx5uAJfyU6oKfVA2M4ycF5Q7LBGVJyTxvLtcw1aT9zovLzoNkhv1LwDHjonq6BW2pXPEVfh7nJB",
  "key27": "3i2tzNBGX6PHM3skfYM3zyRouCPpTrRsjWxbmaxXT2toQYoPCK4n8LyTdLNK3xTXbeAxb8jLMhDz3c276DGKib6v",
  "key28": "2KkYSYnprgqiUWNvfcQjTfipaMSBRnVx7sKRxZNFFvB2dFwfW6HpguNEtpgGr7Hi5zpNWTWvGNmYkr82UjwsfyZM",
  "key29": "1wTvbnaYkzgSM54BpTzTzhQ6hvS1MxZVxYQNKUTPd2stwXqzomYZzS5eNTw6U1VHovMDSgKvpDGFDEumLdM3iD",
  "key30": "2vTFcmEPTGF9YBWWpTRj8ueyFFuVqSdsyautsEXVpwwX1V3s68NaJ5vRbi569PR6GeVtzrThFpQYniEonpyh6MDc",
  "key31": "hcCkiY1Fr1rLPDxDKzAEVrcNmQW8uv2pg4s2oEQn7SdL7f7sPHk9BajCrCQYF7r23WohPiez2QrBdiAXdD13Cwp",
  "key32": "ZgfWgQ2ZWFiR7FmrNpg2qALj9Yv3JjAia5dCYxktDZ9C5mJTjFezN9AnqNFGoSRfQVQUdEDoH9QRmuQyyQsvof4",
  "key33": "454h8hBy5sYtdM7kvQt7xjTJysQu3TmT4AtZ9u7DJ4mVsa4Hnw8gHaFchsonnoDYU6YJUMZt7R6rREnfZ1XSAB1k",
  "key34": "LnpLUX7KUqKYBvNRLJM5GbrX5S18DRHinrPdfna8t3GSg9XrR7ZWtLfpoJbdomaSy1ETLk7CPo16dYcMU8WtoKc",
  "key35": "BEYacnnEzsvUGDJ3YfRqY8QQZ6yz7XSU6dk17Vbu1AitXg1tk1egJ6LQFwqxfLGE3UX5VbFG9B9NitT1AiWsTh1",
  "key36": "4ePow84Mqv5dTJn9gNNHHGGnZnjwszsoX46E8vdBhyVg9TikCE8mC44BZDPAL9MBd4YSEGFeTdVUHDu4KNhag1K5",
  "key37": "2LaRc8SGRgmZBxtRGo952NYt4oaBcYKetZn1HTQN7xurA2pMYiSfKrAjfBuNcABQLayGX8ytq6pGqADEk7ni19qJ",
  "key38": "4oZZ7jCwnNRJsRAQdamsdqudgxUY4Xn65PuQiPda89dMteJNAjnf9x4CuNDnDSfLCJkG4KeEHTpJecjkVGDV2hGT",
  "key39": "41NhDouoTj2UC36uaCiG3McNhmbtxRyhuGGxuPTgXnWVdH2iy8SCwCZNr2WDQapCySvASQKwQ5sRQiZ5JBgzYBn9",
  "key40": "4MkrTHFSVXugPFgsb2goHzX6LUq4LvF4FxWcgomQkcz4Zj1Bj8S8CA6B93U7rDKt21JsqWiW32JSs6isbzy7zkZF",
  "key41": "3j212RURBQJZJK8m1zTVB185NokGVdnmb39tCvn2LZ5w36amTRcFTYJTNFSuyymCVSDCFqbK2fZM6AZoj9o2r1hK",
  "key42": "295x5BqyNZiGDD6dF2f6ifaHvfRDVR4TYcDSBjtgxLv9PwhPtABhZBKpEfv6dk9Szi7bgk8BM1RyeZv1Ws3QbAk4",
  "key43": "5UiWycbe9HpL2gouc2YKcTbCZdrBCserjbHBf7X1CYp31ns9kAxQtUwLJGyDHrGDFM2chhZMg1f6BETToTFVg85N",
  "key44": "2ErhdNqFFjogLhPhYgWSFsdF3MdjhCWdgxNpt5ptHkrFJtU7tWxpZ5yfht7WHoRXobJo3gZa8BRmsWFFe5xobJV4",
  "key45": "2jLokBCwKMQTBixKTVzF7hN9kS59KRvJ2d2CFapCPtcvevsMv1yqjsXr8JBqugRz8HYmtQ1wEB4Dfj4FuaJajHit",
  "key46": "J1TJ1REi3iFg6nexJu5Fd9TRUvF58GKUezcmeeYL6dqb7nJoPwCCyfDZmY68hqpLx2PMKquFhKG17iq3TQ8UYjg",
  "key47": "4J83RsQ98WG97t4GjEZAUQAYULRjKLWeek17PuoKEFfaNj5ZvfDusYDDt1CbpsmGtqikcQ1EbxTQ1fwqw1DixZ8W",
  "key48": "3rkePrnX5SEmKQ37D6NHpdsCBkLaQP46PrmhyoVQ3NsVkbRAhVHJ9YtmYJMcJ3kqHEwRcWnxjVLrB9FdKrxKb5Pw"
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
