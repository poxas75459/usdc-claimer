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
    "i1dnQg68tEWZasTt47XpkvB2HRpVkLYwvN7JeU8TWTShj1goBVKXwEqXaPm4VpisBDVZzo15ZyqapvTEfbB24XM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oCpCevLKKSNeNjb9te83gfZ5FfWpfX1LR3DeML24GWPNx5JgYwvXJ45kBgxyUouoDQzZDYqaA9MZFSJFgNP7jDn",
  "key1": "4eLWPEDhhxjzWCnYbdqnR9Rkq1J63S8vdey3iv1MpnZvAopqkCEd5hwDpsimgU2s7noKNBaqA7oxD1t491Sdk9Kz",
  "key2": "43ZETnx4wakLoYEX2hAnAp5owPwUqcjrQv6wBCZkFbh9BNqehAqPZKC6QaufzQK7RUcxPUhbMXMLbuiBFMdqNi5G",
  "key3": "4Vkrfq3DdyiNtPBEaaBc924yPkiggxkpHnpWePNNNFyFxCyUeJs3XjLYvGP6rs9LpxhaEKwJ5uVFf5us8ZbakSt1",
  "key4": "5FJ9mSnnkH6cPMHewbKgUJfm6JcHQM3vc9CRmVzbrxuVCkhNzYsQmYF1Prqw2PxEyTj6tEdZQy8AFuXDVKjDfmyF",
  "key5": "5h85M5h3r43mbyqFQbX7hCzQqwabVUFNW9UA6RLrfh5Lu87a6zBzPiNFVMwBDLjDiyYD8NbRmyJSo2T4KbRmZUr4",
  "key6": "QgTxkXUAxLpB4ty7qdu5XHnJL3a93SGsqqEwAwJsj9ACC6UtNAwf5xHMEpQSv7VMvVVf4AxncKbTXirgBNS4Dua",
  "key7": "3TMfqLvvmQqoDLELdyURHAwWZtVpE1NCZnZV31FYekyrA5VuKCh2gEPGn6BMCkCkUTQKZrueLqDw6wT5aSSdrVUx",
  "key8": "5QtRmMzn4P4FVdrFNZhnVLToudGgoUFvD3rcSNyyZs1TVX7EqTa4RbShhtcvBBf3uHEstJqbzXbnF3StzHrHP8WU",
  "key9": "2GidECRS39iB9ayduaxB3yxfy6Zrat6YoQp3L7xjUbB4nmp4spfU65MZBxZEzVo33TXBqY8EKUh3EYnXKtf8Qaqg",
  "key10": "4BSNoEgRm9m3vg5SnZtrm8trmHUonsnpR8dTU3MkP2jE82xnav5TgYKrVGNVPTpE1HzkbpU3VcHJZipfQEZHD9H",
  "key11": "41ZcQhKXidFrgavkaoWp4aTsFK17PXtN3RWyJxAmfkvVtZKzxfRGahjFvMWP11s81A16Xdru4qAKR5D4ZHctT27T",
  "key12": "3RZr35XpE5AJQA4DeXrBEkGADR8UKMiKjVs1W9JdojNXb3gGjU7X5jRzK6r9Wc543Hc8trVkXVteEMdXDyxM6Xrp",
  "key13": "Agu1K41CAtiTXr4DRom21Be9EagkJjSfGRDaDKsSbNCMnvwSPNAL6e41KLHxG7h8UZtTKsprJUCc2DjVJ5Lfaof",
  "key14": "5ex3Y5fSEpSfQAtRyD4WjCUFjmWasZ2JoUkx4VBJWxqCL2Kg4KVm2Bk2863npaa6CadLjKeu965wfVjuUAJmbD2X",
  "key15": "3YZJwetTdb1x3f53DJHmhsfTBGLQfrjxXPuk6Y38a7QF2aP53GhMpsnc6m4dLDemQVpfrvQsRYjhDfBzUtcAHJ4j",
  "key16": "3QPy8jeUNCGLSg28UuGqJUJm8oNK4kxvMJs17eudXutFyeUpUAc2hXsjSDY1aTxGiZM1f4GbeVFc1dEy7d68ASbm",
  "key17": "mb4eMrq1LJwnUuNsdygnQjNNu6SgxwZH88oLmLKBdDSi5aw9fQjakrwfzorPYLHJ16tSq2j8Q2zTRQZv6ZjqKxg",
  "key18": "4gsVufGo7rMPnoQhd5Nv9msUrdzvqTXP6FmXfzJ6f89t4WVpaQWByBjeaHZDfbYx52aJ3UR1YkBsWrMoZhJoyqZH",
  "key19": "5w8bif2LsSpoq3rY4vF6Xp86VBkfAGUKNBTEtnVidV86EtpTS6v7NADKFqebLsPxEEvj4koncPyc6hnBCdnTPv8J",
  "key20": "26RiA2fdy5CJbe4hmkkkyUGLKHbjidkfh3WdM2dPZPcxg6nAcK3HjPE7z6zaZGYv6r27u93kVJJEqo5stbrZtyja",
  "key21": "vbTzcaUVgihd6Qrv384kCuR3uEywmmTBeB69FNSBC5gHM8r42cqMA2KTWpoReFP2stWNhD6ZfkhiiPwrk6tueTE",
  "key22": "4fxTABAJPdqK4S8Gs6bDUudhJpx88oWYp48pwPjGpDohYYs3UCYW1hGQ5jtaJpdD1ZBzjENBfF9VQLPK6mrq56fn",
  "key23": "5trJq6oUdJ1bfudET62djV5qYw3EfzniEjyCQfxW3eLnTXvrRwCEv7jzpXx2nmL5ywDz7cQphkp15CAHEYWGuYdG",
  "key24": "5aAgah6WremnrcRqtWVGAVZAwWPXQejscVbLX8ZkAmHzae3iqWw1kSXysoknhNQfJRSt4DLRaiYSibgyGcoewGXT",
  "key25": "5uQuMuLUmAznCQYNHwDDFcRWd56XiTuEBkMLytT8Us1L69DseoXaFvVveJyM64zwEaJeYVuU8MM2V4zAZjsEX3DY",
  "key26": "3ruKGqdDEZsdgACCqd8cyriXX7mhqru1nyBNACJ8hRAfKFeMKtYrP81SzYGfHMQfm59YrXutPqC3qg7yy2EFAJQU",
  "key27": "ZWteUWQq4Wz8WjyNS53xWYpjmqAGytGamHU3ZVaX2MRzNQeMMAxZqvKnuCMnnoX5MCD3jsdXUF4FZ7xy6bzc2ie",
  "key28": "2fCtuNts7Dw2q4o3GuoXLD297iYjJXmra78Zz7kXiDDmCVCCwmZost52eHGLqTcUUXkQgF3bZkmKwLbqujgfeqtG",
  "key29": "3nCyzGtcij7qNnx9q5HD8PTJopk48wgUotGaf4tpPamEq87VMPPfKNJ8XV2RXWxZEXuSp62AHxkyaKNXRe87baEH",
  "key30": "5tqdjTksuPM4mHfYCXraTaKZB6WPhfmbPBYdNYRnNSDrToDV39rNSpbk5g7uEdEaNBgJ389HCtRxta8o65WtnHxF",
  "key31": "3ifahEjwui5Rk9dgw6xG4NkUXT3UgQUT81FchhKQoVMJ2N2kaJyUkVRuAezVkM1NftwkMaFvWMuSDt7do5aJvo32",
  "key32": "59e43mPk5XLU6HH4dQmnbAA3nNqVQigqmCgYjci2KND9AfXjEYgkT4xo7q8rxyEvvBa2TN1MwXVm3qzZRQzaAm6W",
  "key33": "5HmNvvAxRy9ug6wsv7BnxJoMpVYBaXwmmqK8PE6LJhd9S3kubHnPBLzDxcN2zZjv28STg8c8Zx3JPxyhCao7HiR8",
  "key34": "28ZKVXbw2Mn9BqRZnHWi3KUUZsviGJ9TWgRuRTW3bn7GGDob49vwcLfYGcgWzVcF2qBiQjqfBB9hWKnQC87mvfbz",
  "key35": "5PiaeysN6yt9oFNVB3K6mobyf8iFB9RASfSLWergXBY3B51VcCeZoCRoB45VhoKyJphT9fSx4dmLV7rd2ePYCcwW",
  "key36": "87WCC4hSVur94bhYijDBMD1o4T8MYdgsN9MHwXojNwZJuAsP5r7EG79mDW16kQisp8DURsqG34toagyxbyiSwNq",
  "key37": "Ruz1jez82XzqBEFcJPEt3iG94zk7d7mFcwL9HjkMffqyuuJbBjJjqnSPRqPSPuhc677Zfnz4AZzydhNdJeZrjAb",
  "key38": "41AfbcramoZWYA9KmMeCEKmK73ue2kmbGG3dpfhfRypVYE9W9oAuymmXM8wdHdhuJHuBkEmUUxs2k7ZqQpWeBYry",
  "key39": "2mufibTd1D4mCNnHma3GK1XpqbsNAg6vdEnQL21KbbhepfuUmf4MdnECVWqiQRqEXZEkv4fryirWRjUt6GD9e9b7",
  "key40": "3ySVQzjJBCu6u5o5xur3EHzKjFk1dWfzhS8XpKF2nzvZGdYmTPkQ1LaRWJ1ZvJQpt7EgvhWo6Mb5fTAE7vKdxyGC",
  "key41": "2hwYUV2xxTWSckrjA1PQM5AQ3t9WLJMrwYjgiDc7TeVP8snDa3YcAxjLbSbGjSLttMTmGaWhsrYajmpePuBo5N1X",
  "key42": "2XSrJcp2t7YG19q495vKmiPfcNVgB4HKQu67725ywMfgJx8nz3qCNaP5mozwar8fnP3sCuy6WR71v83h6w5SnF9u",
  "key43": "GABQM4AWDc6ARPZfCFG168uDm5CkgXuMDiv5NdF7ktgCnmzAfCxJaG6LGrcWiG7aG3pbJyhQQrmXk31rUZzQjmu",
  "key44": "51uHCJWwr1a3LDv1daujTPhnXhmBrjb3MA1HUZhHUEM98moNyDW2gampYwAAazLxVTKgcdct5t8nSfsCgjCA1QFY",
  "key45": "2CRNBPxCQjK8WTGsk6ACbQucVjsyQHdnoKmyb6nC2QjCMfKcWqdr2kw5RmFboyAZtkAP6DtvxYcRY2VTWTnTNMKs",
  "key46": "ohf3QqPPi844ViGeKsdkyoFb8WshMAnQUbGfyT1Vt4C14mLRcF9qfFTrWmNS5AMi8ysqprvDb1XNjw654yNFejj",
  "key47": "YHnYui2bHzTgcwkbqzYwzxj7pfmSgq8onjx57nsFXJrLyu7yV2wsNE6pHkJYrPM8qNHkJk9fVx8QspG4RM8pdXh",
  "key48": "3xjEjhbtnxa5HKiPVSjK5q3dj2WM3JfLA9fSVWXbtXvgkJvhkJ5fSFzLBHCU85HoWgkAP2TafR1VSBdw5r4Ku2SU"
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
