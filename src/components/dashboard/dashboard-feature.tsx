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
    "HefSc5twCmbVJa9QUvSkzikxTvhsBpsLyc6E8mXmZSFoCMgpqf9fACWXMQUs2TagQvw3M4u6pDrP5T3YisuE2zw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YqB8Qmk4d4eY7NTXLe2XHUgrF8KhgxG3FpoyFPbm3Z2aQiXwjvyQoWA9xd4iTicRFmfVAJB4g5es6rcXVaGY9SL",
  "key1": "27V6dJKajwpfcFTdqCynFWuhR3VJRhtor2Fa6eSJMuJ6Fexo2ijusXAxCNVzU9L1tJYxwmhmh5n6nfB2bdZTRpeL",
  "key2": "qtpNwKnqu2odLmakBa5ZLWD2VQgFjoJwsEGh2nBfUGX75e3eRy8QNPW28uUKHzP8owMmo8ojpLQmFGxSPKCcFKD",
  "key3": "2JZkB875Qe9F5jMW7fbSeZed9QMMccywiUJAaq6Jwb2pL42BjCbZG8f1Japk66TuiDT66hEzT78yY6jkfywNcJvw",
  "key4": "5bXNpLkEbCcgFR9tPdCwt7nDnohmcXGbREVZctD2wcsJ5XKSkZfKG2ZCpQ4T2u7TEJ1wsk1QaEztuuw7tL6GMoex",
  "key5": "tjxM6ZWYtGVGrw2kZmVJAkLzrvfL52MeAwN8y3UFEkEPWumrteF3S7XHXiB2JepwbCkHcZ6QZ8xYaK3DMKSodAT",
  "key6": "4dRMEfHeh3r1DJoXGEsro1Rs4Ftb6JojNgLFQeknZQbtqAnFDfs726M3p3DTBjMEYTAp4RZttvYjpLXDkafrnM3y",
  "key7": "auWaEKjYg3FpVRhTtcx2w8jkVPtCp7RGEBG1BfL39C3mYu5dhxe6TkiyaYa5h3WoCAsEHyUTVTg1KzC1osNrJFA",
  "key8": "Zj2T6gSQ2zueBoY7q18TwoTa1RdX5jXeMzKxeDPWBL1x7WSVMViN2bYYtQi18mDDEdV2Z59TMtsQHSz46NBGA5S",
  "key9": "64tYH76EyDTr6dNjpx5abmSz3tej26WfUTvpdDToq9amrnejHfSzAPxxuSfFcWfQAeegVjE3rbfyHRsWCYNG8XEa",
  "key10": "4jcb3o83FEhxaXRvwiKext7z5kcHvXW9MZvaYvXJQthZxSpw7LrJAjE4FcnTisH4WBwGc6Cn74VzuRVScAWnPu4v",
  "key11": "5osyHKZwMKRM5rTMtTkYWUMdRmahxxEWmcNHmcozU6PrCvEwCPjmcv4SKwXEg9LN8vrWjUgQdvEkvFcWR9UcvhJC",
  "key12": "4z3d2YQeFWmbq1DcviSvn1CNywXZSc9tUJE5FFgmJ6fpyPy6A3kgGM7xJQXvWQEPoR4uAfAPFpwH1ESzkUv8mcxV",
  "key13": "MN98kFBz8BEc37cNHMuPTwqdvQnHcWgcKQEAwt5ZWgrAYD5tWJZAb6xmHxNxWmN66duzc7z2g4mEaBTgF2eooLU",
  "key14": "4uFT2wPQpDa226Bm8Vga3KMJ4qvTer9mm8YQNdDEcgChQNy7JNkmR6hhK91faVabXzwTG1j6ZqgtwhpZeVotCAYL",
  "key15": "Kg56Z5JUheWnEjXuMHqGivcyhx4iwZgtDcgmxAZRJrC49chRAPiDiXDU1nSadQ2anEyiX6bAmUcGSpMg94fXiEN",
  "key16": "vF6bgGuX2VHwDrXmNrTYtua6yVdn5t5ovQLaB2QTFfATJTc4WxNAXa1SDatEMar6KDLJoTZRM7ugJfpA9AyvHzZ",
  "key17": "5AwCbcTA17jKAg4kaMHctqS6epoRv2RSc2T7n8MP7hU5Y73A6Y4dK9ybe6SnVCwpD7EH89gUXpsacH39BFFwyYa4",
  "key18": "2yGhyjeAqxLUPgwgx1mzCp1NkMRyznEEb7q7fdMUxng6UK1BSN3PyfCnZFcRtJeuuckyKex3Qcw38bn5TDAsw9Rg",
  "key19": "3FZtfUWNFq7E7PdfyTyZVBtUy9PT9revYNsVVtWd7C7tcXE86wRK4mXQMSXm9kN4N59e6rYNiGJGxZo4LGmbAkyw",
  "key20": "5gMpkzKmBVMjiwbQF64CGbHRhAwsVBA4G3AQq7CEjcJKKJGy7wbwqZX72EE4FHGGa1DL9xuhTpKAd96csw8paCEY",
  "key21": "5ZE8xPoEKrrS9AGRTMGp2itY5PGbEqercEf5aFkEfBXMcphQAwNy6xntgEVAJBwxGba9CekpcwLWpx6S6WuoqtTo",
  "key22": "vxFLFx2p3bFnuTCSJrVF2Y7NuSp4mUswtwikM3hA8nzWZDX8h2hTvuduxMkyi5t4mS3nbjboa8vuvW7zSBykZKB",
  "key23": "2EQcS3vz9XXtJmuFZiYHac8VvM9fo4hAfkZVL3JeXJY1rV8DUg1nCRmRdJowZZXskRXtTkoxnbHAD4qXiheNMeZU",
  "key24": "4psaV7uWZ2nUaqdG2Q9zi6dvzcFmUfQ713op66M1agbQsr6ZEs1ka35x9zcvnvzHfYHenWN2i8Aa418EsxmxeWwm",
  "key25": "4DS3uHimPLMp8SyoryiGrXigWm9Bo4dj84rPuB9pBCsARn9c6RjkdRu3J7nAwvRtEFmUbRhLCUNRKDGPUPjeYxek",
  "key26": "2RxBrVnpMbMaHoTT2WwNNdk4j8jFbfgGLKdsQiCziaiGLQggMQ8eQweyy2MqsHhew4rdMcnZS9pmo6hTjMh6y8wd",
  "key27": "29GcmwP9iHyqCiievb3iNQ6eiAGxUNCrj3hHYXGB5DZfSoM2uNgyvUAC2DCrXhfL57r5wt2MrzhYd71YUQBebrq9",
  "key28": "2D3PSDF3Ws9EM75kwJDUxDyJHnCBZXGHYb68sxptPfxmJpyyppJsHx4rAZ4kfvQKtMV6BcywxWSLkjuUJ3mZGntQ",
  "key29": "iBh8pLjTpqErcAHx3yigAi1CFUQpkL6pzDYi2EpDYixsesGCv6mePa74L7L9T8NiWZXmWLteMWASFqLyYh3kKRr",
  "key30": "7ph1QPjHtVZqg6fpk7qtZeLAKg4DfyMevkUbK3dr9XxWATnx48sugfZEiV4F9S1udsd7ayHeztbJcXziqTqTzLb",
  "key31": "45tLP25ZHZQViwyqUsxyXmk4dNFzr3dPHyhtUpSNtQ1Dn33tsn8k7E6omAsBGUBfMoTUeUHnaRbyiyBUru1JAmXb",
  "key32": "2xXPB1pcJL5gsN7uQpD1VXoV7rbA4U8ndhCpBvvfxyduXtq2vWyjP9vgYjWG8XbjQpMYT8qwH4QkX161cCzUAzv6",
  "key33": "61GHH7oWwzubU2guf6dw7gTZ6GvUcKYwDX5VbVeg37LNgj4WLvxMDjrG8ZEpYA4PDwpG8pr79y93NtzHrLTWZJDt",
  "key34": "5q8N3HrKLuJcXbDoxDm6kzLctEiqyEyirFrHeej9NLdZD9QpeEtP631ERwTfdstJYqhJKuwYvBt5c35FyZQYNRqU",
  "key35": "5vAkq1thaafoKmxPGjf8r3P7GmPC9Bg4CthWtD1GFWgNG7TzdxjJrzeMR1dC7jnGv62k8e4objPS32FEeE8h6HeX",
  "key36": "3vtSkU7RGW2PzuyAeYpKaQu8tB49YdJYji7SkoLChvSBSSfjqJXxwekAPUDtdr2M3wBuASaEu389NphcTLiXWiuQ",
  "key37": "41HNxrYN9vrkuyBcQ7kPctGG3zdNQqdo9AGMHhpsCPCje7LQkVgFt4DZWyFD2bV8buBuRebTRHM8MsHYUvmP3Axu",
  "key38": "22vh993GMnc175QYV1Nu3B4sU8G1WJDZS31kTTB7GBYLyW1SgA3s4ZKbwnGW9sFjtd8kjAgdcVGUi84ct5wF3per",
  "key39": "HmDVSutoLiRqs3pwCmdeFZx6SqwBJXvVf4b55nkFmjPqjfZFGwL7zQbV17SSZ3GVqsDhW836u8gUo4sZTcZhWdW",
  "key40": "2rwoixoB24MKjtAhMkVpDhvdgAcxH1Y6TiMhz69tfH4dpo52bTgH9c3WMpUKriMpaXSwRKL8mPy9tMce2oyf2tHa",
  "key41": "5FbGE1jG9CfZYmXBhRqjiTZbS4VPg667NbcDXBkxUzmofa2gTLdYJyczdGmosN6cTkq4hNjYCJo1qLw1twvyegNo",
  "key42": "sjeoUb5mE9iYYGV2gNpFK2dAYtRG6uUPJ4DKojSZA5Rddi78NmxbGHvg68o8FDbtP8CHGt8VPJjhwRm5jWEzXg8",
  "key43": "3gUGcbo4MuDUG7ZGdh7p2UmANPiGjvU2efJZ6J1fzsAtCYXbTTURSBvvbNcAXvgKhCMWEezwPMLFS4wC23TzVEfo",
  "key44": "433Kk24ipeTi7v7qqwHbA1vJFgAZkc17Bkos7qRymSXRM7CX3PbgdkyrJbtJgsZUskZuzdSCJ1nF54igFSAPQt3V",
  "key45": "5BSRHBQSeCoKbBsnYQoHzzZ1jPCQ9rwGdu7e67Rei8w9KQ61N2NVMQyYdsmsBKz59wWuX7EBGZqvSNVcD9rxaZig",
  "key46": "3YUJj24wPktQ3TneeVB3HP9De3N9WmsrFzB7ykDoMFu1ZkcotjptvwahbM3tT9Ut58xhY4nmRWGEngEEWcLAQ4ct",
  "key47": "31yFbNwqBbk1WQH8mfwEXNAVXUXdqzQ1MXuPgjRKWWzU3cd7L4qMTCcG4UqzD4oFZUNX2BmekPnweUHkaz2C8uq8",
  "key48": "toGsKMf3PztLH5HSbiAdpVRiXWK3kyxYY91xKaxTGNgmhjeE2LvC5P3EtBRbJEZmhhsEco6ZdpEe8AfV38RvjHS"
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
