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
    "2simaeHc7i4ioJXiJEYwqptqY1y7PKjfBcuBUpiDxMdJMdwRhodiQoqhn26B9ebFnd2pDMmfNsocGdh3xuQLqtZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uhGMoR6pS2zFnnTQpseyRHL8BnPXwwo3xxjZjNUQWL8Ss3AfLYZUDKUy349jzqUnzbiRpK4zrpDYrTtn5HaUAUZ",
  "key1": "24jsZetDc9XXj55ziFRorWDCiieG9hvw819FKQUMgKvbw9w4LH4Kyv3BXiXYNrUcQ7YsSN3YaghC5NF1yEvc6YgR",
  "key2": "5LqNxn6cHYpK7X2qeGCkzAGuRpKs6KU9CjNimKLgf5GNhcFEMx6sboRoApumNjcEMf4YYAgDmA5Uar8q5ny51GLf",
  "key3": "5RxygnZU3CXVNjggxCDY56yVdsJG4rixXv6z7hBH28UkiHEULmVUduiPSF4Zk9AT8SevTXX5fH8sFVgwmYN6QE7p",
  "key4": "4VXWafBKkVPjATcV6scuk3mJuJfSkTrTDUBmWBtKvs5ivnczEkCKayUacGDTZmH7mDjxEDLhnVzEhF4xvUEMCpAd",
  "key5": "2jakc6JaXxesagriesQf2wr8QnCX7hxgLXL5FwRkBwox1ihRtkoedmTn9EkfRM5UEBH2fMc8o7zS2Thfx31rGLPm",
  "key6": "48YVnDRnTzSJ1h3S41HXXtR5Fd4U2mQ4hHtD6c2KtbxnUV6bKTJVqkZUrVvCUXggGE7bYvwUxBhcFFHNAV3vUgv",
  "key7": "3wuPRZmN1mnZ87ozyAJi9hzJiHPCrvLS4LvZM9n1YDore4gAjJCa2Wbt9Bif7hewyAF3dNifPvgNtiVV4dbN1E4n",
  "key8": "5DCFntyDF2PfAcG6fuJDVxMo9Rarbw49fGg3yAgQVTY8gMnoR5TKei4TyCf3Jc2uc6Uw3jbjA6diPSAoEMScGeiT",
  "key9": "XxnXmTWb1A3UtfTHxD2fGkqRbmknJQcZSpeB1oqnFSefY3EtdpXjYrJ9c5ADfuzHa3f9RV7PGKe4SAcfm4YfAXZ",
  "key10": "4T4dj8yxgBagNRdhciJgFts5GtMjZr96YABnqhENPtCHsPKg7vBraBA81bZDCauCRaQC4KC8HCR9xvuY3A8We3L4",
  "key11": "PbMogdMyiy5b3UJfvFRnbWSx288wxHLHZX8fejNAxp4oXuzC8vtPRzgZU7RXMMWQb2JnfwkhsG6WsQ63eh3e2Lx",
  "key12": "4ebRQe1KH8JnDuSZja4uSxLS1fYiwZFujNDS9g48wgzK5zHGEQfYvurvs7wD344Jo51SHw1Zfuu94c7j36W3mioF",
  "key13": "GVpXSejxToyo4kigYhVmsLMeWZ7b9QoBV7vBsafkFjGoFAsvLoxauNEjzRcSXjfQAdJ82nWNKqujFctDoPFmB3x",
  "key14": "5TU2HysWn6SWsVKuZ2gM2spdUWYZmu5wjjFd6n2T6Zr9tLqpAak86YctFsmp9XKfQtCzob2ujWBKnTuXv1TABdPQ",
  "key15": "4nmvp2fSyEhqP5ykwLd9Dux43FVt1eJddVt3HieHeLbyCfcFoeTrs1HgCh2isEDL2DJtcWVoWL1x6jLtvBmT47oy",
  "key16": "5F4YRAmHqWX1tZESvaBsef8rYF57oMdqytxikJwmUwwmY6MrvJTDq5MF44zqo4sdtkpXyrDFQUD82MLEwhJpNwha",
  "key17": "3ChtFYVhTt5c4yYQq2bcbyHpAEmKcjvqguaVY6nsraTpFNeAXp1eFuPvr9gAFkUhKD8vG49Y2PwSswLscS8nZJf5",
  "key18": "4iLxBdp9kUHwrYj5HMtD5w4CDiYh6urH9EBQHKx5f1eAYF3bqLhjB4kTgkfXeG3HPQdEwtHY8vBZ8BU4tagEoHz3",
  "key19": "oneiYrGKrA3MVvSAJiQZ7nEYHnzzLafUjNUPyed7ZcYSjruRH9gUZBMshGZoNbVXHwYMYLLZVmYbMADwJgjQzgF",
  "key20": "4GZF9MAziuo49ByUcpRN651iT1cbMmpkzVyzZKP3wng2bAm812bHUdYsBhYiGmkA33nAiKY1UUVdQypjnFsrafZ8",
  "key21": "3GoG8M5aNS2skHJhsMKcKjB9R1h4XshxwxW9PueEdAfwMCnQ8RPX7t6JdaYcBQKh1STvdSyhjuNZxYHq4bnZ4dBx",
  "key22": "35edK8RjV2eaqakia7nKMeJupXoD83A9mymet4cj6Rdc57HiaadzJjLn9WQxNEGfVYbmT73qihJcYBJEempejxbQ",
  "key23": "5dF9A2Q5Y5traANHiFPnMdStDtWeqPqXzuVLY9xkjW9y22ZJNtYJfPCeUizwJubEnLxTTox4V1x2tQhM6PHmaadi",
  "key24": "4QjUYTVURaAiq938RJX9Gf9LeYWWSCQrFrmA6GW8ZDQh75fr8BKQLxMgag1V2HfYwyebzAyKUK8MdQpHuWNsz9aC",
  "key25": "3tQsJhKWvYwf3rvf4R8PjN8JDhrXgdpxscy6SsFt9mgcZrx8A9R7MUB3Jqj6DMTVhmtREFUccsAVcQZuBmAzd4A2",
  "key26": "6H9kXew3heKvBF4tkGfka8P1HE2RHmoRnfmHz5PRDAAVeY1p9o4vYWWEyVceByd9PFLgUC9qG79abJwf6kgZeYn",
  "key27": "6M1dvc2Qe71mGtXrXNynogWfD9kJy8cj9Mzfbf5td6BstKYGh7qkyDsRBkvDrp6mJzPRFXs9bsiiidHjLiLd4r1",
  "key28": "3FfRRxd7utDTxoiucqUGvQHu1mNcQezfXX9qb7tA4JpRVaPN76ADCBipq7W9zHai8EECSY9Jhvztc9uXfwKWq3BY",
  "key29": "27MuxBrNNB92WCv3vsAzatwzQXXaqAsGRXW3uZRPhmKX4GGbjwvLSRa2hZRpX7XZNS2huHdiR7EAYPmFnsHssM4V",
  "key30": "2dNYNJsJwX4XjQWeEctEsxCFJb6Bn1LBybDbfvjd8gK1DVXTAfvh1iiZR4KR7ciAkPLaj8ttqiMypdP3gar32hDV",
  "key31": "5NS2gEHQEz3QWXqCadDF8PsfxCRFCEeo2rrhYf5w8aFQwf5p1H6Y62qvyyE3XR8juHRtxDK4bzRNgZNtExb5uqhZ",
  "key32": "5qFcp7HVEh2TSUF3uSRhZsHEAg2DMiipW9HgsWueVu9o86moqVq3J9BNRbmR5Q9SUx6T5CxkjUVhnnC825JExrxj",
  "key33": "8DBu2gwRgHJEBy2vZRFdG3cdnEVAQaBrRaXhpNoeg1Bf5EiULLQ61MDi13wqp4vzhj8gKJLaxDG1WRycTsCK1fn",
  "key34": "4YkvpMTv9XH5D6qtfWEnKSSHx7noDx7fTHXkFEAqgEZ8h8XgUUrFkaz44BXEYPMBwvRUXU9a67ih5x7SmcFt1uHM",
  "key35": "6PZM4cSvuoci3q1HanJiZ5N7d3oRAdScvt8Q1jUkgc8faHAjzyM9maJRdpkSDGb4f2xg4qXM6XqRURVCCUofJQr",
  "key36": "3wKMnoHbzqPANkGZffyzjrk4RAUJZrC7s16Ft4hYLLY63QhQCbnFQnMPBh4ntuT1PQtZckFW8KcMhBY9ukHnSN9u",
  "key37": "4N22hXo3LaXNPQZ4exSK1qrku56zEXcX5is4aEL9GzNLsdQu5e6ggNJBqLTcpMoaiSMAhubcUUmLcgvvpdVKSy2f",
  "key38": "5QKa7BVEhEUSGpzBfaW2LPd6wzVknyb6aoC5uzs3mcwHuyyxwaqg1nP8gmhSrGQb29RT26G8uFJaNW2TRTqNwvrJ",
  "key39": "bxhWjxCUQfLmpZD8HvwL2HtothwnftqMZU3rQ4FNjUjvh3pJyBHGBzBYpzNZZZT2Jre1nQnxX229m9XtP7WEuin",
  "key40": "217UP5eFxPHv7LHQCo2iMGLwq1nEVZyjyBxo6JRyTok6XnKUq9hbJ12ivRxsSc9aBHySkVbb8GST5revz9q2fb2B",
  "key41": "31sBJn8Wb8LCiexKuf9ZXSz2Vw5TVp9ajPYLoXeAk5Ha4f6MUgJzNeGj1cdoGZqr3cGiTaqJsSd4noq9dsekj49u",
  "key42": "5gZeTWRbCTRAXUKmgp7mUDV1P74zsNDKcc87dQJGCT6wsobZhckJRH7DN3cXhbHpXkRDbadxxN6Ux13rsma9qWqC",
  "key43": "2qZTguUb5JTA4RnVufzPju9s5mmh7yJrbjBKdafNuASRgf6n6UW9zRvwFt9SfpKb7guaQJTJkCZbkXE1wqQvbyLH",
  "key44": "5hxAPV3qy7k4J2npBdjTc2mYJWEZCZPw64tNb8dKuDac38Bi8RCV4AEsmopzdkV7RhX7TDo4SxdBZJ474uPu2Qy4",
  "key45": "4bJLANYH69ieKjZF1E6jusPJFx9JcJxg8ZtZM1KZNwd4iCW6bG4jMpAB6NtRiJi286SCP3cfzut4e76UJPLe6zBs"
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
