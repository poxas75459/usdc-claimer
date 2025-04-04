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
    "5d2tHuzbpVRhYCsUaoDbuFNhqeshTA1rZ59BKt5jMcMBWd4QAA96SyDZJCBPV3yDA8kKc46XwwYwaPfT65tR84K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vYfT8c3JJ3BYRBM4ViQUxsP4J1sW7ThEUX4YnLXA3fVVgaAtSxRC1nQuLBN7meCY1LquiiJduXEV8bZ3VbRs5cm",
  "key1": "3Ba79B6dvQbTsPECypUyqAJ36sgo8qHTxVEpRGDuocKJWLHEDf9ZqLiQi9NjzG9XnwKJC6hrYZ3C3bRAJwwkmbi7",
  "key2": "pGCgHQWQAnqLAmMhuysUotfTgsrL6y7mi7kjwd4QbgFEwXPfDiw7eHqD5kJRJ4TZGkQRwY9YxZtzcdEBaBQXZXr",
  "key3": "3neyLnisyy5smHNK8WLMyNQZJubp5QXE9p6Wy514gpctBk6oAq8t7b7ZT4i3PjVNT272uvjyoMiqhjpk3y29KPHC",
  "key4": "42cxZa6aCRwXWGph5ya4vPzP7Ns5zEERH6agZn8PJHvwd4BLZes7EJ5Pt8m3RYcJ9S3VdfPMpbgSqNNTrzxMDZci",
  "key5": "4dSMCNCDdoSKUjyJVNWWAQFDHFQryEzuZU8QDaFAvispDeXGi2K1LG5drYAMdU4e9mvHQTnajdD3txku7g67sHTU",
  "key6": "MMk5cUSEXSsybicbUDiATy5e4rmaYogZsoV2Put1jn9XrhmTiYbc7DTtztHisw9uWGE47sk9GDdnBFz5ecBL5k1",
  "key7": "4wbUDosGbGCSyi4xS1TTxq7UruuHqzE6idjSqUaN5J5BQEXKXBNoKgFKqEBUFe4H9XGSvvH4eCBwgXCCamtbhEXV",
  "key8": "2AbepapSC1c8ZGtDtn9w4MKN24VngTncpXUmaGrmzS3bGiE34nEN4qqC68dYq9JhpMt39ZcDqYapzsKM2M2ADN3n",
  "key9": "3Qzkw7eRTW6WinU2wUk1qyQV7DpeV7WkybbrxNXjeTsBMNJgdag7ViWbZBYdCgtnCYonNBkuTeFvzb5DAMW7pB4d",
  "key10": "2dS6GrZRksexeJH3thjcxHYqAXWo5Kop3DQvjUqiF8mwE9p9r2z355k5Vxx7VTM3uRA3Tmv4gp1Pgmi8zWMzhtkr",
  "key11": "585KARZfAntWpAvDTQ7kqaefbuCxqNkszA893huWKnoayQWi2dKZRQ4357r6zRPW6zQmgPCFFfbJsj7QKHYR9PQ7",
  "key12": "396AsqMnrJ8kcDnkveYSbJMrWqjjeVVFKaWC3jFZxJBnpMQ3RMmgYT21d594eMinwNCqzrHpHjAF2twDeZ6Dt2ZJ",
  "key13": "4ccP575wtvmJpMypcvV1BvfD83mcytwpwRALXcFqwWVwWoqgwqJdcCm6bJbsf3HZK2yaxsRY1NPUR3bkr4wEtWWC",
  "key14": "JqJSZVcv4huJAqaymNJeoHTprDfauv9d2j57ZYQMMotqeXiMTzsECsG2EKSPRZ8KP6kbee7ZizQ5yABnzsrQH9V",
  "key15": "64TGQZHgmyxfhP9Z8HyzVrfCpPkxY4LJc7VELB839hz6J7fi2UGdhKu6jDDfL2DLnTaFA3UwT3ThnoJpKg6MTdfW",
  "key16": "2gnPZ93Y4C7F5AMHGFgQkKwFAAAjacMBHZdakmNebdthmpVjNYq2gZwmAnqwhimuFhHV2BzK19kUP5dMypUa1ASS",
  "key17": "3roB8r4dyw4dR8NiEv1Z3V6bYDDNmenMmrUtzijWQegwSaZ9U9v3Pjfmbyt7EVtvTv1Kgh1W7gUYgy7WXJHyMEak",
  "key18": "4teeqJn2mscMmWcqKuBMbRYN8m3zTJy3CQdDS3mZeXuxDGRrQfyju3Y5mkwxqAXxMaCR19pvUeZHz7UCWAo3mNWL",
  "key19": "4nvwFRSepbWuLUcLibEfD6PaDEx5cb7pKqQdA5ZXdDqAxHT81UYfhMUB6d9HSWrUqkhSjuPS54bq3FcXC2hUpsrK",
  "key20": "2E2C88KUEuvxTuto88qgpGACyUcW3xoZ7yh5o3XEuhxqXfNvCBLcGUiidvRHFVnwcfhpz1T6yuENneedo1fxUnB1",
  "key21": "4oEMaKbJoZ7eeWa3T7ARk3N1nn2ey43nMJjBQekkw1vxrXbVQHy9ZBRzLksAoSgyTZzCLxncpBHVryjDFpemVgYV",
  "key22": "V1QzZc6qhNLEmfJLUymWoqAzY65kZzSgiNfq1mgsfqkFj16ZeTKTWaYKZynfW3uuWE4X4s5yQ13eqm24rjTmJVf",
  "key23": "5tCzVxtDNrBmaJHc334jsHzFpF7JH7ksgryp8R5QGH7D2gzLh45c6iYnpu5sqqAg1wUjrCkY1apGL3e8rDPAKcGV",
  "key24": "5pd1Fuf8aYHotfJRqiJ4SLKzQ5iq3HcCiShbCL4DS7C1yurPAtaEVgCS5W8QqfHPk3hh5A5yy7juac2u6VzsAFbc",
  "key25": "3RKk4Hvmd7jh5Ymo6BPhtSqXLmha7CEh4yK8z1RHnW14ULE1YK4mxs46EpQGMn4EibssoX6jwqzsZojo3yVVNtQL",
  "key26": "3YwjJ8KZj7jAsp2EvYepViDuxXdeW1dxtPqMq7u6rJRUyCXBPKnfRybxrvBiZrPtYMrbm4EDkPB3PsANmCsx1pTp",
  "key27": "rE9tZxQP9tKXJEhc9sGAZxsavqjvEK5mm6cL3otzVyJ6nFMUX9ceHxmZ69891Hne82zt6Vr34HCeMcMZMaW4Bcs",
  "key28": "5Qc7qhDAyUtNhbYko1MBxydyFxCHeEagviFLCqaNxTv48Fa7jLLGwSqhAsHAnE3xoFgVGh5tP8pH6U3hqWrXJrv3",
  "key29": "3i59qBccZsfiTpPU9akDzpNnSuCSHLDsKWobJ9REsks354hFtt6sxo2pgsC4Y5QhMGCLYy4eSCVQX8dj4dMzp22A",
  "key30": "4qF9gUwVi9CetMyG5HytQbE9FVjfj7QAaY2kCxEUZVBD52zqhsQpmRfG2GBcv5xirQXCMKuCLuPraSgMj6jxgQCC",
  "key31": "J2vyiKGWSDVsiniHZ596j93iq9xb9FEdi9HAFHYzWiqVpG5UMqCZD4RJsxLWMXMknsdZHFDLtscP4nDjMvY7ArH",
  "key32": "4KbFKUUHCV25SxW1mcaTkhirkEF52dL1mxw7p1QVVurjUeUufdpwrB96hRw3CjcGeFjkPkPvKFoiVD3yF4XT555e",
  "key33": "2JTkjdNes2YyamntyKqrMfUm55iqWDRDZXHD1P7SMqMCdtLMLtQDAV8LoxZu2p8X4PjRLoqwn3EjCbdWU9oUB2xp",
  "key34": "x8KDgLBpCjb3xjVFQ7osGJ9bqNvdAqk7FhGZR4vLy2YLGCop4qgULfE8LriWoJR9YWwjEb4vw5qgiE6RK3yaV5b",
  "key35": "2qYNhYvP5d7ZvGfLPRjnPZ9MGdNHpJneTRQQn1QuahEdsoaGHTB8W7KMuydSdMYfuL5CTNhugJdPxBwCmGkuwP4",
  "key36": "2JrSsa5JhoNf36vRnfGVgmeJP7dyyLf1x8ZrfEs9ZMyZJr2XUdzK5wRaikKFm75TpvhXoTriCkNVeapNNdX6YBin",
  "key37": "2K6tErrMQWYqN5W1qrHUyFu4XQV6PYcgqYoMqxxwCXM2R45ADKJJ3KWoNg5JQncmpHFGe4WcmKhWBfLqN8RZDgTe",
  "key38": "5VLTcWJps2mrjjUGwSwNKrcHzmPPb3qW82PECAhzpteQptmrw23QnwaabTVbGPcMBshP6nbxc3U1skPNVMscPqwc",
  "key39": "5RhEunbc9PTBA1H6etXqJkEUDB98KFFCSk1empzzjg6a7jEN5WYwETUVZnFAgoALujwDAzZBFFLU1XSqmH1e6SBP",
  "key40": "3jLeJJwhwE1TEWHWCPWRoTt9UE5UZKDqnc4wyxTcZwmTaFKJsUJ77B6HG1uaWUYzCNSbyJihgx3nB2z3Q2p25M78",
  "key41": "4rP4s6CA4h9xf7VX612MiP8YsLBXfF2nMKzrrfdkiLWo9kVEgi3CJkCiFqtqMVtQCVZGt4UjPkTVwgj8Zw6a5aK1",
  "key42": "58aAA3EneFnDZiPsbP5Jtway9UtVgbKQbdSNYmUDNYUW2BY5b1R557SjFMKfPpJcqyrVA1mTCi5Nj5jTCwPmopPU"
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
