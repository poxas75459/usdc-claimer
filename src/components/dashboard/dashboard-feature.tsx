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
    "5ZbdK7REvTYTibbbKTbbbN2ortFGefumXXiPabG1HfE7qUZE5zZcyQiX8eoWs8pM7edju9wvBn2o7L1F7kh61ryA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67KxKLsyH35nV5am5YexCewJyqmbSr2CQVvNDurqtz9gnwLi94jB8QnWeh8SRTnA7U9Hu8Zekm5p77TmxS5qFyQv",
  "key1": "267v8bxWsc3BTeFTtetYC3KVyyDewTUy3HwJEfxHFQKrQZo6LRHY7k9X7nK6UjTRbco1bHyHgWS1eooPL535niZP",
  "key2": "3q8HHTWkVYezkKSLvG897rqgjuE4zrxkrHwvfQbd4Gqyut7BGBd69BjAioogZxsHiPtaeLArQh7cXqj8SFHcJoJg",
  "key3": "2NZ1gC6ghoB2zcNJheckuFZj1obNoRHHttUC5k25ycBYmnY4mRCcr1ZiFd157Ywo48vNcXydjU6Msan6oE2uNrZX",
  "key4": "4bwwPWcZvhstuVzJGUeHViCmRi2t57dXxQ8zCxHTg1Te5aMab3RwGgbJ7tVfYGKNVwXxniLAHmQENSU5dBTdCeG9",
  "key5": "8jUdtj2i8Mrtdc4EABYhp928G1WnwWuqqudy1PusaP9QR9uFCSX4vM7Cb6fAKuprtZCKVZfbRkdkmc799mWBcno",
  "key6": "51iBscfaWyMzMYKikG37xBbvEeLXaDny5sA7vr7pmYjJCj1uPyeM1VsGFCqBQANmM2UcYKYKNqNp3JAQWmALrAGP",
  "key7": "5VUEbh2ivWnCudH8AFva8SQReVrEHdDLG8C2FvjAK5KNSzKfVRKcR1B3gsrxbL5vXtjjrAPAnvwXH2YpcN6hxijA",
  "key8": "GcHhVUCjyLW39msUCRFDYpxwhvuKyksNi8noPAJYnMpYDvvLCMnECucfDRFRm7ccPLStHACqqieRAALHkgADmCa",
  "key9": "54zFwxUicygZV1ftTkgszFpAX5SkNvR2337aUWYcLYhwmvuQH7Z7L9Q919uMYtnj8TBkEhS9mBTxYp2hfvfuhLYk",
  "key10": "2SUYS2qjD5Es3o7whRaqdEAR9nBupzqaGKZyfCauWkcW4JT14z92wpKSAh5BQoUD11u44gnpKfZBHSDffBQrSFjy",
  "key11": "3NYc3sNWQd9HyXTSvYakZn2v4TAhgvenLHzVDKjjR1NtSLPCBAGr9p6h6maN5WsyGNAJxScfH2sT2TAeHc65RTWA",
  "key12": "4Lxa3DnycqqEDWxvS5M2RLXbYgVKNRrUttKMZhSU7TupMfhEbZyksgHQvByMuncDs1Xper8i7b2zPB8C4eNvG4dD",
  "key13": "5XWQxmCLsc6NZaQ5zXvBxcPXTFetDqDHvLrXHMNhNDWgDn73b2842RNSbYN9hH2nncz6Vna6uB6JEZq9knF1ps1u",
  "key14": "3fQbG5FZNJc4Be2mfVwQJQoaYPV1ZYKsZ5KTDk4JDmgR8DKwbsigUPj3ctax3X7Cy87PKxQvzMeNoUfxbEpcucE1",
  "key15": "2Q2b3ssFPVhCpZBdSx4qWgi6id9vzcU28RRAVNk8Qo4gvZpDiu2SGDkUaUanUtxzo9h4DPtXCN2LF7UfRmo2CoYr",
  "key16": "YPcUWBGvBimVg3YmAptdoo3iKgrR7JUXSSZ9bepEwjaB23dLikE2gwc9C8WmrGJMqBhYXMc5j1qG5F4qdbZ4znL",
  "key17": "3DXDqpAqwaaV7tLiZ7yiVY1tgJhynmWUbGAhSieKJCQxdh3hGvVs1MsDZgL7Cr4eA1zkK4nsDNUDV7V9P4AdN6Au",
  "key18": "5a3hKYKtCT1RS5iVUtpuR6FRNKQAoPrMZKYK8iC4WdqzS4nnEK3eJPA16Jw1ryZ3QMU5crLcdTYq5qWwJSNHVR5E",
  "key19": "3ohxvRENTeT2sUnJXDM3PufAA6HGAyYjvpemXWCQ49CnGh2AAK4HBifCDS6gZW3rLZqRoGc4yRZq4BvEsD7TTYhJ",
  "key20": "4F5svt4Ex3fTxSqq1s66QhePRv7fppY8jsSiaQZk6ukw8wBGzJCCbxzyaycGFq3uJgVPVbmH3fd46wVUHLfuiJv",
  "key21": "A5NiaZkMQwS7wkKmptJnMhS8ihfnpGPaj96EhsEviBsxLE2zNekkj2sgDxx2dgUEhDjYCeKRUJZaEwvHqeEy8FY",
  "key22": "2Mr6i4JegsUnKcJ7yKzaa8zRPcaDx2kARydJxFV3YqNyTTF1A1EeMjRZiCZ4rRTEzSyr2qeAC7UiARCfNVnax7U2",
  "key23": "473p4TVLVKfzSQqVdV3AAStNuMDwShjajmqdHDq6qrypqdoGtdgFrrW5dW6xMHyRovWsSDehHmuH4BE55jm5NTUg",
  "key24": "4mbEF9ZUyxmv29b6snZy6EAHd7Yv3ub1vAcFBQEfAxbW95xxCMuodAznEYD9qCFPYecSVze9Vixc3Gdb8HsL34Pm",
  "key25": "56czUEWDerabjxmSrNC7v6NM28UCjTyiyU257QRqTBaYTEoAzMofWSaPq1AGKuNF28Uj3wPDotuGp1dxdgiiDu6k",
  "key26": "4ED2cyLntGxj1ou1UgjhviXP9PQzZZrrJXA9dqQZdkHVr4LTzFHmdeD5m856kTqnJ8nfdK4n3nc7i9zibnu5wtDq",
  "key27": "4MVu2Mn5dzPEfZDgUFNoJFSMQU2Ejbcin1eqYgaSf64KNrqDo7mZ6ntbKCeE4mwwX4Xny8EH4soWs6fJ8QGnViRb",
  "key28": "K4AU6ueNWrqyqh6LxDHqaQMvMxov34n5x5sRYNSWAotcQMVHwJCZN3Y3izsD5UWmvv3ztJbJU9Tv8Zd23sNscTT",
  "key29": "28DXmUguSMHoUy9VUYpGPrqchjzmxU7DTwCE9uzFkZxdWzAFses7NPbcUBsfSukSnizw2YcvkYeLP2oQRicX5XbE",
  "key30": "28wFmWeXKEVbU31b8paiP8adCA8vKMQiP2Vi89uH2hzjzcSzNjBoYLfzwUz3mmJZh9RKExdQH8YhUigQ6bZjn7nb",
  "key31": "3ohpLj9vsAS6ZrKAEHbEUPvGCUU6G8jFg9eBnhdTnXo2APYMKEJKGVLkGBzH3uk1JinfKdpAd7Bp2HB7Sky9Y1hW",
  "key32": "3GrSzrh1vJHCvbiXYXR1vVgF2ew7pYpw7SjB43fqoAeLzNVhwN9G4wMazUKYsjNdNG5fxv5ptZfQtvS4hPo8PQty",
  "key33": "2i7RgiPCWkZQjZAegrivPhNUYPJG1uFVsb1ChUfQ9AHVvxPs9K3qFUNme1Ja25sbXk6MiKfetjLcH5CvugQ4pc7V",
  "key34": "23BsUdg5MAhifVD86Emz7zV4V7iTShgnjePGAnAtXobXsCsa9ZbPzCCrNWwEBmEU1jur5UiNrzNXurUgSXm7fXqF",
  "key35": "2hdrPL8QuaJPWKEd6JCcMVyHCuPbgZx8sF9r1rgRLvJee6hrzPAf5qEZd6qM5FC2LnofvMPKKjfnNo5FMNUWowRo",
  "key36": "hzhKcFfuzWwMwwcf1VnxRYNZnw2VACYogPNnWYDugYQvZPPRKVBTr2ddkRgEJjo98ajc6RRbh8VJ9asv89H9Kp2",
  "key37": "UyLiVgHKfoe56z5Ct6sRkCDpMxFoyXBPc82bFsh89uu7A8LYw6X8TeK2RvFcyfFVH9seRfGedcsSUhwCYR6RpH2",
  "key38": "2D1SSYfmB1vyBHB4xBE97GbxwNL2U649NV4etWTznjMKBV9QdBGcRt61YmkSck7vDxoCCpMRNfAJWvV7jqq247Ud",
  "key39": "2XVNuG2KafZHiY2ntoK4JPCkDMPnf1894rE8KLqTHwaw7uM2BNSKjU1vNNiY1JaHNLJAjg7sk2tdM7zfKo8uvRj8",
  "key40": "Q5US79XbS4rWYLzT3VXNg1RtuuM9uN6NXDW69pD19usgAo2m7eUMKKnMaZdd9WfAZua5nmosARzrz9kh4LiWJsh",
  "key41": "5HMKmrrGC4b4t8zmXis5h78cXqLGfWCfPuWjArCnDd9KQ7uaj4i3ju7p1PQRiU6dEi7cQndd1bSXGRiyKmXdXeoS",
  "key42": "53HHDwovY5K17kbybs3n3ngfnaZArhzBmy2wNN2VyGb5UggUuHMhFzm5ysSxenXxx3x1QXrPHVW3gquqr8mHopbj",
  "key43": "369iVGST6JHfYEQ96TjpzAFokmEJcMco6sRq3PupAYYD29ywGvz5tVe2uCc47EMhtauKZgrCNtU4TL5UzHy9KHGH",
  "key44": "2UzjzHxtkVuV9ogRV9LUKfsgtkqhEWAf8auj4kgwDMSFJCv7bKNWFMZ5ZYS3M8AB2m9GQ5WeZ5BQ88YXXGZwoB1G",
  "key45": "4wrG1dBgtKtcMezhVAabkdazjkPAW3H3wkE4pyHJZJoFZNmAcwmLVMMJfVnpARM6kHbHYiRF1n4Zf7DXYqDfJHEH",
  "key46": "gexvwV5kjpMcrjCReinoQ9Tb2qoje2oP3Uqtf4wTkHDPgU1FGcFmTdh4DQjeRJBKXKRgsLL2jR4giKufJKhsyCk"
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
