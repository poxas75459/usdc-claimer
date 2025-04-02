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
    "2PDwYZk6Bvrg2en3paR4KwcXZy3aAHDBXFm2tPR2TZzgtf3J58jVVntFdT9VKohuMsZLugqQPL474AprfAVCvCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KnjZTmXDFqKa6CesMdp4v1wdBfD3EXQT7Lt2zSGuYLbeAumGwyRwmo7CbvRyYTwfcxFbLkvYL8WXbzB5r7CE3Vt",
  "key1": "49DfuTqXzfAtFBGftFTM1jyp8McyYNUyZJGdmSjCsDWv2viTLerCM6pppTNTprdAQq391PCBCQVWiu7vtkDSp4RH",
  "key2": "2QUnLuEQ8UNyDhtEKH86yAyhUCKxAuWmuXKy427k6bPoJu6rcN2q74z6PbMqtgBmvw6Xndq1S2wHgfSHvMv4LtfP",
  "key3": "4TVHhrGWbgQiTSbakTJ6AfBAuSVvwD2cnxz8wr32Kk4YM9PmjusiAXx2BjmYgLQjJZ8CdEBam7KPawXFSxYdFgvQ",
  "key4": "Mgi4sBNcwMmX7s81DG9jin75TD2mLmS4xf5yob87mH21CikHfSfE3dY3fbVkxb6te2Vv76LrRQ39okLijoMiaNQ",
  "key5": "28XEY4QeJzKDGpgHG928SKPpM1yaiJY3wWNLrQnm8vwbqyxUXbAbgYYup29jQSYpXPzbmfjXZ1QSm9Uivj8Yhcnp",
  "key6": "pNG31wdKGjdZiNyh8grMQjdpXs13GQb8WkCiaw1yivQ6LKBDYJGGqUgX55vCWpLUoDh6M6rc36yUpmJ39tCnL9U",
  "key7": "3xejCMp64WEqEWx4CNVXPT97H6zNyTQukEvLf7zuw6R4WfVVKXa21XZdLhCWEvTJyr6MQHiMguAhr6toLFVy27wZ",
  "key8": "5zejugW6Dy5AWb6qPaVpGB4TwXrhwrL6C7CtT9Ygfrwazs5oB2ygANbFNNfxJb8cTBRm24hGs5N23Q27T3Yz4aAH",
  "key9": "2QZfzoyo5kymnjAvGevuZnvvqiekBhkPb32FPabk6SQbw7QL8AiuFfURrt8UxXM14d3BViMCQTzW1swd1Cih7oBp",
  "key10": "BG7pnFbcouyYvxwkTTZ9D5Ya773oAxmEua6iLpqgjY9kZJ9p2hXRQqttEXoJqeTqFW3j4BUkmuSs6qAzazTE1nY",
  "key11": "4ZtVTB2AiLWkh5KY8wdPYDoudvvuPxALjTkdGRtnGHVSSj3x6KaH4m8SCWCeEfoLNhCbVR1bvXCq7w8jVdWTCxu9",
  "key12": "4EZfNPogoSSGm1DHjjuxm1kHWdw6yyCiLCtVLNvsmTATYrk7bM39bDzdjGcdbmmbY6gXqE3pvs7NSNP3wjLu5dJU",
  "key13": "41TiUFNwq7TMsByKHAvMUKMcgEeCRtPg45CAQdanw6KiuV6wJVSGoZ9bHc98pWzCaUdjj6zfSJS8LkcSfi5xs1mT",
  "key14": "4pT7VGEXbTmfoUgsdUhknxkTVpkBMAEAm8ASWop1aXrMgtzqDGyKFiiTVDgmimgZdCG1bHsVUxXaU9DjyreaJm7B",
  "key15": "3wPn9SYJniezQWZxaQpKbsXLeFbgNnKzTs8cnGKPq5inyXGQCsE72UjfPsSQGeQtKPcUEVsppk5bgQcfP9nNFiUH",
  "key16": "5QrvxWYa7nbBprgDrsj7JNY4FiEibWA8mwUp1CLuxM42cjpkvmJWxpL8ZwH8RWgkxXbx7E9SoLa9eUK2FP3d7y21",
  "key17": "2qxNEEHtEq7GsUH2nz7RjgQxQhaB2WdpZYRfgRLkAoRRba9dTNVEZ7ZZbehenRDJp5Fbeagw6RXZ3Wf9ARoikjyw",
  "key18": "66AywwU1tGKr6QrzZwZucL2WLjdNbK8s8DqNDbVH7HqXTXGWLiJYWij4X5gDiUVNNoPU4PSKRQGWUD9VcLoeQtQr",
  "key19": "5wxe7JdXG4U61uijQbh1XaV9JzKYJ8MhpPN1jJQxPv265VneeLjrQZbZpceVTiXds5B7z21AryAgruHaHkFsghaL",
  "key20": "5zGKY3qbGw4b8qd5Pap5gDaSY6Zi2M9DT8f4VCwpvd2rkg851BD6XMhEEBgSzxBuTb4v1tyAXgXjSUZyHLbmpjwT",
  "key21": "3uMnQQcPEVPZcENqY4PNS7QuSxYNyNzDQ2mcBCZFN5DfFfCJUJykCU9WHx1ENSKsoPMzeadBbcPUpdUsnBbFziK9",
  "key22": "5dXC89KX3s7xogoLxCB7S2yy8ty6cHFjajjwE6xdpdDXsmkV3iAAkXCxhUiev4B5s4V6kQGsN1SGyWH1hqD7qR5F",
  "key23": "4aniuJQvKUnLBAuAz4ebsV5HLridjZAjMcTQvdKFm6vRt72LMAW1YHbE28rbMeCnuVjPGUhXZ6YPvAfZATwVcwR8",
  "key24": "3iUNqmSLjygCJ79yaHw82vNqfttTmfeLRmx72ad1QpakixgUQjxSrq8TbUDbA6J4d5T74hgFKn4Yp36pJPwsRMTD",
  "key25": "5UYaUKTrAkPC5R3wvnuR2nN4hmw5Pn6X4QkR2NPqbRvwP2hjGKkARMWTHABAyksutYkjRBQwm3Vi694sW4NDxqBE",
  "key26": "3vkBKV6CXJSCRZTfKGgsippTq5PN3BB7TRZkw8zAy6iwLt8tapkvW18cAM3g65TjB5zzmbX3PmBQVj8Q5pTQFpdx",
  "key27": "5e4HTnChUD516npPaKj7yN4QhuESrQTZ1h2LU771HWxqYJ9QVzxgoMruLBL9FJ3CVAFRcJgjvpt5iATgZP6J3Mt7",
  "key28": "5PReEe4SZsGnqfK27t2Udf7Y7xpN44D6cvwJAf3bMtd8auc6jNQ2W4rRmCaAMt83Hzmo55z7Z8x1k3Z6PFUzd8jy",
  "key29": "2B4APE8dCqiMa5q4q6R9gr4xQxY2C8V5QDiEhcBHm3T1om6wbSEjae7WoAWnbDBSe4YxXtYoDyzbKT1gc2KDRW7r",
  "key30": "3PQH32qbffTgxPoz2PXrUoJcmNF7JbFQNEmbfw6wJCXW5xfu5NhFrfERC3ajv3DLRGKLg31k81edFpNZQunJpUis",
  "key31": "3o7TbCQVivRRGL1X56jBiUmAPbSxo76Q4ZbMr3oseT68ifHqfX9UNYJ3RBjbsgmGbbMyWveGQJvnWMusmoW9gBcu",
  "key32": "TJDmU3phntMnuSqgb4kUjtpaEaKhn3avD3BxZyQKFbQ9bq6ifTRgaLqK5oQAkZMm6knPjqoNeb4x13mbCF7q5sD",
  "key33": "FXA8s2Cvk4EMmzFHgNdkVejcJanEVcURKrNe1P4uKmpZHNNS5zbXtJYYkqGnJ3p6Ht2HVWsEszdLBLY2AdADVrZ",
  "key34": "2e4gJDjA8R8MF1tbSHdKpWc1UJhE8cZRcuhEb7LGgeQ5LXTbEUEETbGctQBWK4h8nwYYRCkTXoJBvcQnPg2D2EAk",
  "key35": "5uibg3qJMxvMLtTM6SuELo2t8NLoYkYU845yQCHzChYJstaTWLvzbSVpEiEj387HWhMmTMggiz2At9tR6KBkR6s2",
  "key36": "5YannunyjLRJUqEcixjZXvy2bs74UntvJg7LUJYVvNG3fbxriFd6jc651cCW1RbFJduxhhFFosDgPYtKQjUu4tYF",
  "key37": "FqAKVgXkhNAufaK57yipwgZufjJADmu2jjzHqTKqeyBA3maTbyKer1ev6LDZx53rQA47QJ17N5qA6YgLPvewLiM",
  "key38": "2GDwwmTKPWtBMvvhn7UGeKsopiGoFqGhD7R3KYufyRnLZR9UKYsKCSQTCRntfQAvDLopUjJbfdWVGmA1yVCC7k2U",
  "key39": "Frow9Ged5JpVNxwxZ2irz4sJahdatWyqefwrTvmmBrYsYLaJ2E5jFu58EHyAYVd6fHJrkBt5aBAkek7tevZp9oG"
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
