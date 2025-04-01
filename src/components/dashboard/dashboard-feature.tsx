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
    "4hwJY4MR5FNELWCV4ctAxvYLGJ3w1LbJUDKE8t4xf1swSeBG2mBmBsr7uzBkzqGAZS8U8jvNy8LV3ujkVMbT8Qja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H9HGbf7zwGQVLh2VF6SoSeUSn7UBAMqEwCSuvAPHYc31hLcbiwRBmHkdgQxMX1bzJiCydJQiH9s6jNLzSXGP2F6",
  "key1": "2ukQPczhTTVfS7H1eSjbfPYBjxDUybCieNqVrie1kPYYcw1QB11HMP48xRd4nNVHcQa14XbUzFAivz3rH1WZrmLC",
  "key2": "QxKrrriCn7eAHnLFbdWZAwGqMHjgzwiDdYoygUvEq1eYaNPGY4dTUpJxPeFMsZvwzN3E6tZ1KzDrso5NJ1D6JPs",
  "key3": "4QJNcEPRztY96GYv25GS1u65LjVrwthMjsMFfELzik4Ji7hG5BXLiPbYFeN3BZVwtaDAEFu84zPLJPCWL64UCgma",
  "key4": "3mCAk9Q2QW9nxYX7AjhqMSRLXJHmFr7qFD7MqtApAeswfFEHFXKDB1JtS13NVA57M3p5CnWFLHgNWDUTsCp1KZAR",
  "key5": "47UC9wzQdJGL1mQaRdfLuHrPpJvMwiTSYA36eGq6AZqan7TXCVVvsah38NxA6yGd7tJEwT1fcoNieU3t1nTrDQgf",
  "key6": "2UUnjE7JnuMzme4EGpZPYgLgdnBr1rocRArSZ4r8sJSZpyQthRZwVVteFwswCG3c7rC1qMgmYQxgWhNUDNKyEDqV",
  "key7": "5eovayMeyueiJyDEwYRe2jbwExud2vG1x6UXni7JWK84kpPLL89xX5rfnprFVcAZo6A45wHDVk2puP2abx1LLEP7",
  "key8": "3KuvdzvBr8BngFRmxohaaYRBL7hVgpQUx7uHjAxMD6pSEDuuUfujZz8VdtNBZarGJp2emhXYH4pUBYAqqKnuDYME",
  "key9": "5VVmFMrKzhsaq4YR6Jknx84R11udTfEB3SEDAZjJaavYrVx6HSekCDPPaFAkVZEPM6gZiXAd2byBfKpEbdvdBxLy",
  "key10": "4hsKA5totrfXJjybnTVEQFJNc1M34pqeQX2281hcAoM3SgU3YDeAmXzhGrN8vUVHAdqL3sYPET8k3zFmh8ZyqVj6",
  "key11": "2ENCNf1BpVr8BMErdL8SqJ1wANSeJK423GHniy744aicbwnJ5UrKc1mR8vpD1YQipyCFVmctUPFcQ6UekYhrTkDu",
  "key12": "3bPA6ANVntdi1QsU1GYxKALCy4vpG7fG82dPH8g8sNbAhynw95YZcbdrwG12cPcH22kJk2hbB2CtKxxmTmyyt7FT",
  "key13": "3skApMkXy6S5QQJAyW8bdhohf2XC4fV53gdD4sCwjgL7RvepfrRtG3kNtE5iMzC7o3J2j1XuoUPnRhc7z8a2b8rS",
  "key14": "2XpZbKsTK8LwoeazuZEUGfkHjCoUrtPQvKqJXmihSDvCpMPmnhXiqgQb2MdPLsGrprNU3ueTbEUPJcBgsRQPypfX",
  "key15": "2wE5zNe4j1rvAeBfTXmr8AxJkFmd9CjFTArQuXwjthhe3ZsCF5K9cHMkuYJafwGWxhiRRUQiDgiDKkipKFVUGu7f",
  "key16": "5NqSHyHTK67VZuB5Jbqmbt5pUpj1m7Q1eDujV9mo8dog3KrMDfVgjQkKF5DqTWgyBn1KBDYg13krbLFjDn5BXp9x",
  "key17": "5VgfAfoFG5FyHYq9g87UVUcvUN24oZRWEgSSPMEDnKRTmSySavnKrSZash8o5YjmGbJbMW3mKbVrsiu1kgDdESGM",
  "key18": "3njSJzTTJ5Txx3pyVs3SaaJ4FbPaY2LXip69jgG3Aotec8MQZKziqgghmYE38ZvhfrGo9VKG6pmGXvdRWwXtu5as",
  "key19": "9hADge59qyg4uZBBaNWudsFYLovhEZMqynnsdQqwub6spiNDW2bgmqbmwsGfBameZvFM4tPhtg4S16euH9JPenL",
  "key20": "3ucsKSu3FE822p8Ve4htvj1JJtqhyi2wCC3vwGkuaDjRAJqXAbgYipiKAudtPb2emkah1mNvyvQTfFRnMDfTxBAB",
  "key21": "4QMXx3HpqBeHYmkcfevy1sHUDv1Pxk9GbMEtWosxdVQpCeEWUhQ1XFWztiHapYEWGm5sVqQCw31azQJkrRAWqsNV",
  "key22": "4GR4jsaUVDy9jvTcjYamU9govszh33XpjZABPBSa865V1oaYE1gToNT71QWmhAd9uXVbVTBkXfEL5FvV1ua3GDTS",
  "key23": "66fk1D8Wam4ivfrYWAPC2aXm3oriyHmghL8brd4wN1MvWi4L5q7CvxVfCrJCS9LL6vYXqHmXUo87dAbxsL4vR4om",
  "key24": "5uvmu7k1rqi5qkeFfdbEZEFX8zS9pQKecdENMCs24kj8FGwwveFbHHpRP9WfjtbNWuumA5dXY29XaND6EeP8thNV",
  "key25": "5GeJyQQBCiq7ozFAd7CW93ensX6BkfirijCvEm8FGjQoskASZU37WGyvdyqMWkyAdtbL6mpb4wpDviu1FLmTstTw",
  "key26": "5NuvXrKHQbEFmifujFXbkG6qxQFKtA2z9B2zoLNBNnVAcS7E1ckZ6iSSKDGoRQBhgPXu1HiQVbaaFpBWTZgYYvic",
  "key27": "55vimXhadfaiGzL8cg52t17zSs3D8fxY7AFsCPQFTkK4dviSpXXUpMUNSRP3qvWdxh8DhMiJuqieVB3NAfKeiXSV",
  "key28": "3gzhQNUhSrnheadJqqWtVU6VkT84ZrNPEL5rCVfdKk23hM2M32npN3joEJ4qFV94STMa4eiigkcX2C96gCJ6JMuq",
  "key29": "4bsuskyCRvrSwPt8P4z7xzZXkfbKvNB2gTFk9Ytf41AutgRX2itMZiiKqQWpv4hFvN2Q49bz6NEiRtbbk1SuBbsv",
  "key30": "bhxeyDw1kF9hyuLGpz85oq9eYCjtdk7CyAojo5izJ1a6P3aR9s2YTApe34hDen13dVVbY3vBifc5g6w5bphjeEU",
  "key31": "3u6m9UJ6dgEqifRRH8Xd92iBbNKxGcRUpUiyqLhM5ZW5U6vp43UquLEkqcBup9qphayzKzin6RCjc3CVgCxNLXbE",
  "key32": "3qqBmHxcBQmTLQVQ9ryB1yRqhZ12dLRpAaBh56jRfySPgkENv8n438DWxL4NupquBJKXXVT9YX4hpfZJTjdZzXw1",
  "key33": "FTb6ctJc5AXjeLp75CezfLBQ7ZiW7k65ptw5XwKsvG4KBGbTW4r1tXrWE4z9Ny35h3i5wXMn7fDDvHHwYS3ar6X",
  "key34": "63N6cGYv3LR9iWnubXQYQpb6D3auAiPT4x5dPDGQGgbEeb3BWbVavw2kwfqYs5gzszGJFkqtfoZUQ48cZgRnyCHM",
  "key35": "3PRWnqAM1Q4XjEHCpdiKKU6oaKW8cZabpBJrwt6weG33RN3xpHAAGfpPwkBUnmfdwCpoa3yKeT8JryKx67WMAhez",
  "key36": "4gYq9XRynqnqkCYYgpntWkCuHAcVLfhaq3893edeuuVsjr8TLgfLtQGHqRi697JF8jhVFiM4nMifNursCtm1MhSX",
  "key37": "35oH8Zje7pccPcMpLkLGTdo2v6VEEwGudwDbGnE9ofWhNboRwAdrwLFCyDGgkzRYLdMprqAWRy1moAC9zvExsuFx",
  "key38": "3a5XVadueVk4YvNTNwvkW6W7RC2cPHR8fjgjj3NkyMmkpq4k1uK9BZZrdvaJv79rMu7D7R86KFpfEUYNmSxyXoPR",
  "key39": "5ER2ih8zVJAVweaMs9CvnceH1D4oVfAhyjnVki6DNRk5QC4ZyupuzGGHtQ3XH6woQp3w8jwjrFYgQDySoBB7ZX1r",
  "key40": "53QRgcuU8Em16JaVxNNdsC8PX2EEum5kxMKyZba3pMTmSpYZJmfiAb7G6ZyLdszzPitKxkKb6Ss7A517HAtxHw8c",
  "key41": "5cWmBYf74eB8oSuF6hGDzg6w5S4VWpysiF2Z24Y9dUQD2MPNDuvRAcg6b6BCyRWJJibdoaTWAjAyEJrWALAxKPKR",
  "key42": "3CmQi8iyLjrqmRUKoGgiBmW45VWpn3VkqHQGiBrtZ1paccctAyL2PUskFqmUmTELxmQBxyFve5uaPpb1sK5h7aAg",
  "key43": "5iLATmggKtQEqsmSrdq37fL16HNVXys1DPuJVvyKq29nGkrGHLEbq5YzXx6X2D8cJVh8Kp7yNp6VTpm2EgEcdFtz"
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
