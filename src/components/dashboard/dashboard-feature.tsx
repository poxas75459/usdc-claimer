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
    "4s48p21fx7M1QTzYF34HUKnbHRnsoz86E9STfpfzocCi1K7RCUGDQf6u84k9bB3jCNTbCem7wdZRXZSwZy6dqu1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sNfFjmcxH9yHYFq13j2VgbLxLUU27u87dazTGxtaN6mFkeFUhEwF6RPGQv4s9rh1WvMLhwR7Y6WUzjtRiW5B3hh",
  "key1": "24PmDgANQneiWLevhhE1sZZWV3hPX1wNtbNyTmhggZUC4QJjLhGyth4SS4YJf2YFfVoMPyMyLFR7K836HrLaU2h9",
  "key2": "38M2muyKLkT2zF7NLfmssXujYoE7N4kEZBENPaeqVAERECLirhPLCkmDd8yaVWLCuWuYs3k7uQraXF8rqGQg7apV",
  "key3": "h8oUx7heHQ9iwQafTfqn3VrbrpwgAdBH57BcdY3rPHc1YfRmJhTUYuQrgpBW2edZUk4FMYWbFgwESzmwQ9hhSKG",
  "key4": "2CZ24yarAPnMN3pZDzuENCbtWVF8kJyiEpg98Fi8A4meuShYXbWDQRyjwby7Dpx2knbxsstX2YzDnCdRB6Xk8e29",
  "key5": "3hskpnr61bf4hwmN2y26YmQqM93e5ehhrVShFCg8a34W7kusRBKrJMm2F7AYWS5hM4CX9Ag5P8StTrgTmdyj51JZ",
  "key6": "3TjUnguTcSe6Jv3MdZPCC9RD4RaKUgQxjxMFn78EHk2ED6ApArnoHvNoXxMW5P4NhAH4BqnDJZV6kw5oabqSweY6",
  "key7": "2mr7JZxumqAQivhnm6XrMJXvRaZzBaDZqKFrLmtpRWUbFmzhVof782kHxDCXtWrG8R3mL1dqVxQtkSuLcfazZM5G",
  "key8": "34uTbr3f3dgco45W4KULocPx2c4UUzqKXomiFZiuQ9sxEokoMnFjBd1AcTR38cbyJgsai4C2QMCnKZ7Ufe3KbKxV",
  "key9": "2jEjj6oUTcjG42f6PTvntschShLjyX4zY41wNMhtGUYVVsrxfDkP6KZYshFcxMPWnToY5p5ykP3223hqrkzbvxtC",
  "key10": "4vbxbYo8YoLX5ZGbZsZ4jMJDSoHjcVosaRypnDxFXAitbbHxmb41apnkm1KAbDWB5T54488RwcR9QNj1k7Jzdxiq",
  "key11": "3BV4pmHtbHtzZidNjg94X1TdeeakJobqPVATvj4YBmcK2fZd2xzNPYFdePELvqEfF6Vw85MLdeucvBs6rAYVW9xj",
  "key12": "25LsNv3MKFfsjxhBjVx9QnbC9BAnoY9P4hx4njDEgMEFXeVCdxCPvNvuHfdvAHAgnxbPndZ3wwseJ6sWgwKjWpY4",
  "key13": "unL1WnEdLXUrrGkNvEaxuLAaCdjQefG6A1B9LSmdr48FyoWs4Bo21h85S5A1fw4kwcfYwsoSYQNagBXJgLvyXnb",
  "key14": "36JQ9a3PrwEDaLLSC3s4XuLRafnsuYDTkJQLvMw9cEhFKFviqmUAypmPku3xe6Eo651PSv545GyYiNMdXYjKqnWu",
  "key15": "3eCZC2kP2EmMzKP6gCgrThuG4tzsheGUtVFL9T6hX7Yt6fxMswyQz1qSabxZJ2uo4JG48QASxH3N9XxvtttZBoaw",
  "key16": "2Js9F5nDN2iUEDFx5ABVke2EtpZwaHbWKmQxGR896oWjsFNdxumFWB3ZjjnQgiox7wpDAmcJ8SVjL7NYR2ZBypRG",
  "key17": "5F3TgMJy4xGkU7nS43Wn7pU6NEXEFCY3zW3gBqGvBVgWLfw7pMq6dbrG51TER1ykuNNTNhxb3tTwpWnJQCP7fmxP",
  "key18": "3j7WTrZkTwFUYjMTRHsKGAnpGZFkkWY29B5FWJxwz66KeXFmR56scKJx3gEt5WssGZzzAsyMnjbsrk9cULoaU4bV",
  "key19": "5xTHQ1cMwgUJP8WfjqMaKhzNzYESNVjFw84xsBDsMbjaNW17MobhE5cHp2FLcJymwCAqRGqgDJoX3uL7vKD4jgTq",
  "key20": "5TaMBAjz4V6Y9rLatD9J62uTNyfkLRTrcBXvVJYziA7NoBL3ADZzQsJXQdQr79kdB96U6k9PD9NggAGtCjXoEPHC",
  "key21": "2Tq7ft87CyBJXfjZ8rf5XBAFFeXQMoNNtZmzngzXh1sZo4WwpUiLhWNCUP2rXRbZSbGnZ23baPw64sNB7cpoUFhK",
  "key22": "3tAv27WRcYgDv4baqUyd8SgENMXU1557EaoH44J4WEvfoMwK6s6LZxSL11xK9RVETnY64gVJsVaNBbsStLH9UF7v",
  "key23": "2aFzMNKr5adYUUkNDiqN2gxfF5uTr6VAbc1DEDNa8vbfaB1JuY6rWcTmF6a2giL2ZwWdRGZaqkJCJMeC8fTkYPQJ",
  "key24": "2JVDyj1oNxtSdhkKKE4qn5T3iUo4Yc8Nwi68jKfDSTT4SVAhTq24AWZFrmWzzC2jhReN61ag9WmJCzQvzH7hco3",
  "key25": "2Gg39UttF82V73kykfQEYGHQnH1Adjd7jinEY8U52iEa6e8UYVAB1XAkV59kxuuRrbzV5fcpgwcB1ZQtv7QALTej",
  "key26": "21jsXVoFw4wuoHSdwSjoGJ9NbM57rhi2K9j72G8bxtFaRMsrW3mvUnzEZShzGmaMa8gUN2CFqwafatfpnL1p2hj3",
  "key27": "4hSHpxcLHvTBnNyxvER6DeZuovbtW3Z5NshHoNoqxrqbQNY2THmopXgcqGUb9ncWqd249FbnAzyAEffG5j7Hrig",
  "key28": "2ZtCaTjor1UhmmdsbyqC9wvYZJMuw6q8v6APRg9EDAY6de8UpEyFSYQgTXYoufNypJNjY3U28aMH3FPptYtGKPfV",
  "key29": "4RFLgJAg87vb1mpzyE3XDRZwndo6tBMjMURcvpm49zZa2PH2WVtDvpxb7W1CZpwZUdhE71yAMrFWeYecxBAZNsLL",
  "key30": "4cAw9QzgARBBJSoxDnWzmtfbjXsc8EV6XrBWFwmMFj9wUui6ErGNJdEukkxKv9KRaxUtSxZQBkxujypFbtJHfarA",
  "key31": "5dTmA9yPTdf6z7Vc1FTsteZTVJNaTgP82ssMZ1V9qhAswcu256JpNnXZKYn83fgfe87YyZxbL5U5ZBZPR1oLuSRP",
  "key32": "32BiFFotCivE5Saj95psijpynWn56N8ZTXknNeg6W1uVkusMqDUieqhusceVTPQCaeJrxT7mfwDYhGGLsFSqp7jA",
  "key33": "5Lg5tg3XxEDJCxhyoZB21ZpWGdY3NuR9PVudqkd5QA616YBqRS78H58kZ1jEW5rWJJhtiX4vXRTt1AdPx6U2Nd9p",
  "key34": "21N66jBqwMjoptsUCJ2g2ik611HjqcBQaRx1DzKTi93ZfoRTtqRFJ6jaauPfNkkmF7NmM62AcFKxRv1RkVNrRzT7",
  "key35": "4UR2TcN1rVSrB15y2PLFWi7wHV3txnGfKDBHzoyMp7f3kN2uxKxboPt9pgHwXLCBqeg2bKfmpphqkf7fh1ZXCZBs",
  "key36": "5DKdMKaKkB5BQXAGKQiGDBY1Rmak8GwSL8seCiUSYbcAv1AvDfPhU6TnHs9NkBaN3LzKtvcwViXr5MHHA16SENi1",
  "key37": "52V5Shfph8gbP8fA47eTAc7xSGtQH2kcLuXmuNEzLJCCzh7zhMxPygz3WZidTef26gfJAdQ9r7mQmACBbzHQop6d",
  "key38": "47WoK55ZALqaK5YR1scmJzVpYe1JKTX4TWxLZCRWm7nvRbjiub1vVv5pmH1dzUDPNtYJGMfUTyHRhX7JmntJcK3G",
  "key39": "3dXqQG3AEb1BaFnCRgX1drUvsXYFEnbEu2uUc2oZXXNuEuoRHBpgafmBMBzQwbvP6p1mykfVnSmj84H7Tnu8YGig",
  "key40": "61hZMtURXnLadQQGYKj1PB3VfDfmZ3bJYrLSforsG2VkXtJJ3vbQRrn8g81gT59yPiVg9iYQZwaEvnGqJjpU5VDY",
  "key41": "2LxSHdwPZGLtamzUTaj44ZytM5qR9zoBP4dn6wKzd9A7gZMnvDa9xZ1VVyTJdx5Y2JNcSRg4Qsdkj7BNbFTnQx7T"
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
