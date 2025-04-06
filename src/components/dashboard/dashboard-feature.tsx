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
    "59cuXz7Xq2zh2D7kA6yMv25YKWvvEJADNJanobjJ1GfL8nJanLT87SBqHP2w3sGfVjGofnmGTrQ69ngJJWCvvEkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T5eztTvU61KrT2NNjsirX8zfhh9hzxMc3k9dBXEx6zWDDPez9prLRCj3BVBRV6dgTytKw9p7EkUACZeeaPfSicL",
  "key1": "5HC3z6uLnSKr7kw8zxa4c5QGk7r1qHFgNtevapM55A5iP46chnCEzoSqX6peacp7KMoLNtzkGfPamDisVbtd8jcb",
  "key2": "2ZcjEXXosR7zLEdfj9CpbFNfvN2HM7gqEf7PuZK836KDbkX7FsND585orfxKeLo72bRy3Xf6UEjuq56nPrreNE5s",
  "key3": "2tgdr5QY9ndnP32tjNbroYXj6k5VhGZ1VRksqL9SRSGcUCFQ3FLNz2qv8EbPeiBv48gop49pECkmvNkBVAHQZY4M",
  "key4": "4Lop5eCYNnNCAWHPU1zKEQXyuEzB5Ne1LoeyMpyF7oeqDPHrj3mcfgiWa6oFVriLFh13qTYi1q2N8Q7awT9u1dNx",
  "key5": "2Zehz1MQSF2athb9BNkvhpwJwuVuD8dyoi3DUZ6XSTtWh1gYwyUsDxST8cpfJP1mrL6WL9hZh58GJuTbYRxvuQDt",
  "key6": "3q2dsJYf7PQUfeRjz7eJnGkgwmUAQxapaYhosJNKrUf7zVNTL8DY7utiNU2wPD5kNUxWz3FfHmm1roSFJYVfvmY5",
  "key7": "bGogiUaed33L3KoRG4PgqMkvt5KMVWRPDNwUNskTQYWWkLS5uWqfSsM6QmbmJTYem72fwN3wL1jqniZRTgYuXbL",
  "key8": "2hgbkVDtQ98wXPZmZzZaKG8RvfKwMFPEV14mgh7NcWDCYb7UBnWquFiQgmdw1CE1uWc7jWVRJkgpFxcuKTyV9Hkb",
  "key9": "254YiJwhtLSjiFYoWjWUiKKuhL2zPNptEsWrhzZdnu7GLDPpqZFya8Rym1Q76sr6oPHPVhyWUh9c56agQoG9QTyj",
  "key10": "2CUesBE4zzmGwaBucVFBKEoBcxPTPAB4aCGyyF2PCcoHkhA9avKGyU3YiZatxUDDM1M2TETbGYb4w2UidVaYJwTn",
  "key11": "2nJRn4712AkCYTTJWGmT44H3uUtYQDQogUvyQchKPPLbJ3Uf9coaV2a3h2hEv7pwjyHSAk5VBQPfFUrynEdSJG5Z",
  "key12": "366z2LQD4w8pQKTkJRvXxYebTfuH33fRKi2ajPBfLvtyhwKFP2u7bNrEQas2UjKNjn59qZggiGDL158Kvzi6KJaD",
  "key13": "3DXiSG4ictKc5r4QMwCBH4ZVnMm3JGRC8tcbqq4k2DhZ67apUFXMaJDp1H7TUQ5m9oq9zwaKuKhDqGbS7v2LtT8Y",
  "key14": "62Hk27vf9VAYirAuGQkLKVrBfAzSY8XTAgTjqCYmL3mSaGDxTWN91p29cmSd1V7LZAtjTC42JgXpzHU4xmx1keuu",
  "key15": "2crHegSz6LPswGjJtLBdR6kTe4qncHTsV28f74YFpdCrGKFJhqwwSwXr2toLE1rfV3147i6T97epMqiP7ezaVPTj",
  "key16": "25hxVhbJY9kEZf1bdikRtgNCVygVC3LyWH8EZUEpYgebACAL2VVzHFfusvLXYsjuynDcj4GpU6SY9Yxd4a41PTde",
  "key17": "JURTje6srwymZTHaqv2vQs471ohz5k4TuTDySMv9Q9nC9ShH3B54869ffD9TkAjHXnrZz4Eytai1ProYu3FzL39",
  "key18": "3m7B7C4yehqbNLtckrZeCpVMdEj5a743wZvFuZaNJhMwSUZviogWFh1V6BG2p5MK3FYz7fZsa5oSsS6nHwEsX2cM",
  "key19": "5CUGbfWqdukCUyzc19fB4SZ9szuvo6s5XE99t3Jv4WHp2isHeV37wNsXFj2PzQpzLF3HoaBMHfTVLXFBBneDFzSw",
  "key20": "eS2Yzb1HvkYReM6SZbtDU1mJd8Cz9r8CHZNHBJ6p8MoJfXCGQgA9gmEzLuB3d2RAjASKAN8DM5t57cmCsTKyW5y",
  "key21": "5F1Sad6MUQYmV7dQSD7EaAv3UixSRZtPkpUTuj928fXuuZm6R2Mt3mZp5HB9LfBfAJ9CQ91XxePCQo9558GzGjX",
  "key22": "4zSckbNYMbLUkk78uejziozKvfUeRfBzCSoVQkzecmdFGeEWAsUbZKtyyRrzsRMpM9e72iTKZG58zUnf5vV5iorF",
  "key23": "3oea6XBxLgS27ATDdcnyj4xDL98WyH4o12V9Vzo14G2mE5Hc3rDKCSV2seW35o2x3gLACrxDQJq2kF8SopFgs96R",
  "key24": "48s2qYFjDQ8vYGU6HD3gDNoTiMZQNQBTvTdrQw8vTE85x1ZDFNDiM4xUeizh7mx7T1Qk3yCQbzryMuEgV6HTVZuo",
  "key25": "RYhebmTNCgoZYg4ZxdRcYLfswZPhKXVKNsQ6dxzctgj4RhikS8grTanJPr8QfrofA4R1xL2xLJpeDAjag37CgX7",
  "key26": "snt2uqXvUXyEvA8qiESSJetUyY5rguBMpDi7gcLxjqa3JR1iH3kRTWXmoENuTTR8HBPmoUbPcJ2G1YPW7jRcehN",
  "key27": "3ue1qu78Mo4D8WXnjsaN8tfPazoM1fhNq9EWi3KRrAGJWXX3uCaPGrSEQait1KcBNW7nQFbGHKgjMkzDzDZ6DDHi",
  "key28": "vCxLtityBptCpGuDsDVDxBbd8afoTjnzgUBCse75ihzGqSGFh5uks1KmuoZFHAvN8iUR5vQns2D8JVTe7CzBzmH",
  "key29": "5eV2YwUqWUG17uHwp2dBjLBWqHKBTCuX5Lh8NwADK3pza36yM9ysvHkdRasgo6hWMYT4WpBe1TMYRhgKRi6zzkQ7",
  "key30": "5Rx6iT5D85PphEg9EhKQXYuNNuwdPrrBgC36vJbC8oDniWzeoQjCBAQ8wJYYFmdTwb3HaTPHEyrpjNknvsumgsM3",
  "key31": "Qpuxaj8qfwDyaAEsEJj4k582NqUtU9ycAjHdCEagb6Cg6LHzKcMevvi2M5HymtcGgRy4cTfj5f6ug2AJW1atNYi",
  "key32": "4rVhUVfwmT5xqxe25jqLTJjb5MKwCxvxAahenQ3vE3AGHTZmAWi5iVL21WnY4j5QfKhBMdFKthxVKEgnPPQzwyUJ",
  "key33": "4JS9gnjx5dwnW6if752hmPT8hAEAd4uqTi4yMQvb66Hmq8eXfe2GeD1b7ZfwWgArdqF1EQ5UpdfPKfJp8kStDP28",
  "key34": "CEnBb8uvwFzFSLjvStMX8E2HDq42BNx7aeLwyeKmw6ibTp6u43FdMpd5ATbfNR9tRrVNgQGubBaSrJZBY9Dpmsg",
  "key35": "5WwzGzRdDqogsWumkQKkFp3z3wfQN9ZuA9EHfT46TXUggQBGtfTidPH2ed6hyCHm8mcrF94DLQFSWnT3D3K8pe5p",
  "key36": "3N4nagZUsaRrmx9Kp1CBzFD7KGHq5UdVjbhaiNuuAZ4MusYe5D62zoQRawVRxix5PkQzxygYVh3w3pcn33LLYEUu",
  "key37": "NxSpwEc6Rh58dUHUUQZhiDRdeSkYvNo9tNKBLfzFbPVZFZvniHV1d4bE2GP574SQpbbzB4qfQ4pjuLk3RxapXdJ",
  "key38": "49nFQ7KRnCsBsDwHP9BKxh19HSWxrf3tqzGoT8Q2M2RjyboMFVnnqfYbSvi5hYYaJHUfkg3K5fN1mwVWemd9WqAB",
  "key39": "5m7ZrruP8LJFZ4Q4KNWQFKXc8CdiN6PsdZXCgDFrpU6CTFPJCpY1Axa5LaULunaUuosDh8Gpkh83zmUvBy1NHxZZ",
  "key40": "4ksXruzCgbwnuhERV1HtsdGpmdPHL6ihHZ1Z8RkUFFnCK3hW7HYdg7goXH3y4rYtwpaXhMZRJvu6mDTWYP8pgaoN",
  "key41": "3w3r6BzWd1MhjfTAhn52Jme4pjYamcx29GYu2FTSMV2hfF6ZQNSgYRcQoU9EDPD5xaNSHEudKYoqUZUEUfXLm44d",
  "key42": "rzmXQcAKkuKD96xFHqqcXP832jksMMYYNzSHhJiYtUSYqvNGYHxekiQN5oRBNQNMUXYuq8RSehdL17xXnwhoLud",
  "key43": "5LajU3TsT4NXySVnzCLCmebWSBYbPvRQkiVFpB9ys7CZt3cqgLvUQzj3wj3UZqmNoYYukwjZFdFgFwY9L2CMmMR8",
  "key44": "DTrUfRsNtrmEjZwMziMjGGrytcGJNwZ9KbJMeTwNT2FZEi7ijj4WWD1XfDfFGVwo4TxuVRcz9Y6L1oLJpR4A4Bz"
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
