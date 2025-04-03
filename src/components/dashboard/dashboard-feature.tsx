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
    "3HvZdBt8ci8UnwmVtRaLTEN6wPZeBY6sggvqsMJLxARteioPutzj4PXE5dCHQ3VEy4WuV9Sbs5JHSLsYLWKDUnRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aPWEEdztU7h77pFgmhLzTSeNEiymZYrjiqAQjycDuz7mvTngb7K7hRo1hbDWF1NJXo9h8n8zuWwtUHsARA3YE34",
  "key1": "4HACKxduwZtBFtHzbQjGngJb7zxtv2idVUWpkffXZsNMBy71f3zwk4wNFyzTFiPXqp5nvUqH6qWprFosDZ1GUibi",
  "key2": "4QCh3VjndutG6oCVSHiNbrSuqMsVekSaSNcbYu99bFScsD5egMrSYVUBFapejKxH5vSeTpVrVgnyC4RjMwU8WgCF",
  "key3": "3VSsaUW3nBnrBmu8QVSh9nepcybfYGeJwM2kbibZuURcuwy6n8QUkJCo1bTxGtL1SJZqFdXCBmvYUXgHEqLWauLh",
  "key4": "2sMA75R7gsQ2J5vQvBvP3Px2pjrwfbMt8CwD1LRgnRfDRZbJ2mPtVezPr6q4ZmY5fsMdzxjTz3kygsn6oNc5yFUV",
  "key5": "TfDzBEM1ZWScii6m8yV5KcJ7ddL4wTsimU3Ldii6WHrurYnPLUxjkTS43iChVW2oqcwbsTJBxtpSm23jwp2QwB8",
  "key6": "5u6Nj88LihyRvTt9Cx8JoMpcvaAePMNcdMDi4BJbXxL68T6t9oyKbmftfTtLBDkVEP9g95YeGU7j4MXZhhfNoMik",
  "key7": "2azB9roZAVctonqnN7759aYd4pz9AxhHK6HYyuZmyZ63cLk6ZuDqSdFVqXuwk2QzjJUy8NZyE8ft725ATZ2iX81w",
  "key8": "3tmcz3Z3icZ8f9vb3AgVKzF7J1TYU6GkpbqNh2aK8Jha4DMGfebc2zkA1N3Csow89v9VcLhmm5S7fjUieShE4Usm",
  "key9": "5rGC4CZS8N1HjAqrM8j5NWUfDGNsBSmZZWLMXUGJ7cFx8LFtXem8DXHDZjxsrGUrhQWBJAqhMbmF4DXMctFGuGry",
  "key10": "5FGX9nzBeZ3yy6ZEuh3qDPAb6G1tqvu2e3dWiZAMP2JYLNjoZfVzWb1eDCAccFKXPLyRMbSqWpV4DsgwJd7E9gWq",
  "key11": "tipa6CHeWwPobEHyWWMMp6Zdy1gtpVDymiWMSdAfcRHx9f9iC8Lsnx5qkaBzHSvug8dj9mfjQtCRH4x8ioKczjL",
  "key12": "5FdVP79FWLEJQg8m6udth5tbGX2wc8ca55KESf3Aviy4qSwYcsjuDzWED29WCraiQyseHrMqquEFjCRWh7u2qh4R",
  "key13": "4SKhM2WmxgJfpqTVNMs4YCAVVyk7KaUXmAdmK24t622Le5bPzKwyh2J6E2XjiQzwkq1Qt8KijGWMGyw3k83bg2oy",
  "key14": "5ME3fiqbBHNCRRZPDAZtBoMBS59AidLitE1N8XuvxPTwkBfs2FoyDTJ8T7hR44fQrWEnDaLcmwAg6g89jZ4PnAZ5",
  "key15": "2TbEYqueziuDgrmXxPEtCg9UFNL81AqzUnVX11tsug4u3gDn2MmbuitKCiVsbNuc2wtffx1KvATZkyFJQG4aZ3W8",
  "key16": "3nRzBRYny4pe7PWLcmNtd5kduBycvdteLAbtfaJJDfCrw3ajppMCEgsVWUjoLmVgUeZRMdRZWUZyxwQC11kzwguo",
  "key17": "AHHB2YuQbDf6ibQ7i53EAziUZko6cimSZexfJfWppeaaZXFPoXQ6zWvwdmCTYwECUUkPbVjTYmobW9gb1kaSvtN",
  "key18": "64GhSQztj9i5cwzHEj8dHq37uY7HFHwBy6TRbmmva9MNAcACaCBVZJS2hWEBejWyJr3oNjwEoBJYD3jMt7N4STiJ",
  "key19": "4WFCnA4W9sKxg84akjxN9Ai6UWk3YZ1D9De8PvxF5x5nfzGtDQQaYH7ESoUDLzn5r8iYkiMdXJMi2ESuvXiCXuMA",
  "key20": "5fa38Ln5PUu2FRTt2gSKqKYPfu8eA2f5xSW8SXYyWht54KYP9MspHKqeQ3EZU7yLFKZHBbmkxNWFhcWUr42wDMB5",
  "key21": "buT6ibfik5a8x3C43qBFSpyjtG3QvkPvthu8qCTi35jhtaaVDeenMaXpbtsDk4UcwtZMubG7oAiijNigLDffv12",
  "key22": "Tyu6SmtRRj21yaJRzfrxf3NydkmWdkMzbLhzNjxcDGQR7aiXNS1BA4wtGfxtn2ndfCy4GENXkxuGdnZFh9DcMDR",
  "key23": "tY6UNAdT1K97gTiG9r5Hm8NQEErWjwdHyyfDbohdVtZpcQ8UrrwHfS2CwtqauLjyTsD7ZsP9QFaZXKgp1L16LEh",
  "key24": "5DXuJLxBGa4dk49FYHptaJnYaKWDLKSj6B5HnM7QSJzCU4pqh7y2cez39cyHznWHCtBPFCL81cMDFJjY8153TvEQ",
  "key25": "5vEiTC84Q71aFrvkWVWFucgst8LoSw5G9NE29haLtHMq2yx8pCEE1VWGbs7WvhNWHwEC3mq8zw2nhShk5TwdfBG8",
  "key26": "5tfMUcFgWNZ7eWQHE7FmoQ2AB7zS4BeXnRrjd66dJYSEwSPojqeFXvLHrZDgUp7gfAQUdvVU6At5zifFGafPWdQn",
  "key27": "4wy64W7kGcK8PZDVe1TriU1RyuptSYQjhvwLj8xReZjM7sSMKAZKmVQrK7jeBnwZEayvzckkM42mbRj8Rchik6Vx",
  "key28": "414dehn7vqmw4TCTapprooJaY2agWeTex6nZDKmpze6ztaHMTaUbXWTvvfBiiJgNMB8tyrCN23RtGQNZSXuNH313",
  "key29": "52SBbN4wpDYxj2CDvQCVzzkMoEotmVce4sbYQsHgmt8EyJV8cfEVs2pFxwDEZJR7mgkLnkTnzPfPQ1tUZYxp3Bn3",
  "key30": "5WKF5Ccj9gx3pGrYkgxxWS7Y572RSmULQJJEcXaAH6ttR8KUtnXGyzZDEqiMEX5RWwSH4kK4YG4ZDDWzbRAecABB",
  "key31": "4dDfEgfMaUw45Ff2ELh5Ku5RiDZ2kRnakxEQkozyUBdQy876EDXRPYw3ZvTf3F46a6THBYrp9UcKgYXhpEGU9YDw",
  "key32": "56aAgyaDL45th6RWzrKYc4qpcTAi4gVMu6oVbqequDmKN7ZaSV9ApkNkV5eXjKjKoRLTw7JDx3XSTAPwxQcUKwvQ",
  "key33": "2JndQ9Whahu87gDanxAL3stDkk2qRPeThhDQhc6tbCqSQwexfkGCzYCrf86LyaEGRvNaNLFGQgiuZXTUtya37Yhw",
  "key34": "64hP4GwoACbzgVbs2aCsZ7u3usYHNHVyMxHpCknJ82YssTXWvcyybyoiqYabxaKdHzQ61eFuvJEdLpub7xvyZz4Q",
  "key35": "3fH3o8Lw2NSkrN8FqEoaANMEypEMvcaXYNwmUrs7GoSzvjAqi5WkTUQJ37RhXn43WsZBwx9sV7Yed7fYzfRTcLCr",
  "key36": "3WgiKf551cezzx2QiFBu6gYkiUeN2t2jc59dvNX7QbgPPTHtRhdhtJ3FhBU89sreXdQKxHxTpiuoLwyKdrYWyo16",
  "key37": "2WZ266a6Ar4PZbhhA3b18TeDmoyXVVK1NC4iywWvZSmAmNuVPsC1w2Pv7AmwhDHwJg3ViLKpPB4U3ZuQw1rM17if",
  "key38": "3k5Tc9CLK1xHeY2t986iip2r3MF3DbEFJLQ6bUGJG9mwtnG6i6dHDBnMaefC9AXx5f2azRVcXp7DpgEUmxh18YJQ",
  "key39": "LuEDbyEzUEhAZwyCcoezg1utiRC3JXVQaG4AdABBeJfVBWdh2M1PatZfwHYi5uUK8Sf46qJcu9QHUTLvr94s5br",
  "key40": "JZkXSVZbNxteW36J24EEtDt4QBVNXvEucKsxqFGvxJQH3an7E7Tw5gcLSQWRHxT7NAJRybGvMsY7jP7tumQi4f4",
  "key41": "37wUqQjsNHKxsi5A6M4dwXQdaG6b3FAcuc64bieJCWCpugPM9qgmpu2quV9kaTKbQaNgSfSUdymbBwJVo97P38Gp",
  "key42": "47tG7GyqMtJF8KBjUNXVBNgALkgo4VErSK9fudKfrKPRzmhpWETpEoEU37nhkb7U6AZpLJKSdA9N7BwAEkhBb3cD",
  "key43": "51XbYLXHQSuMgqzfSrYR7WByPzjYdsiQBJYwHHM7g2ni8axHtpcDPm43mBMcjn2bTgUD7eaavuYyGoKVpyugWUd2",
  "key44": "5rv1tUVcphyTXycwFVX72uhUovMGpXUurZfbRwBpuLvghm6Pj29R47N4hUpUJTq5EQdoGJhdL8dX8o1JU1TTx9Le"
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
