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
    "5ndJWAkT6Q2V1qWm2RmLm2s5FtXkPaP3XRHZGhE7ePN3dMZ4nosiCrF9WPNwD5fWFTq1QuXTZKbRSndhUnBDLRLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51MM1XHo6XGCcqZDB1LomAkFhsTZxiv6oZSkapxS1KusoPhfNZYxDTLNz6GbBJGCoRr3Tes9SFzi2gEancUTv25N",
  "key1": "2kxhVX1uSgVFY4fSQmzNaJnnPGFbkS8x83PWyQEHH1Eg265XjkfPpSmCT5YzHDJCVnVWMzmDZvLN4oQwDAc5CKdR",
  "key2": "4CtKpEGScTej5SUwxDP6YsMHttaBagjZYxbdhx3sW2yreewZLJZDLvFACwf5iUQbTYaCPwZc1Wm8SJpvoj5rzi8T",
  "key3": "4A8KBije2J1kESW9ZMLykhnsYoC3DwokUbdXqkWffQYkiAUmqbghBTwfwkTX9s7TLzxiRqVWpNWB3r7XwMLRqRDu",
  "key4": "nsL9yLGJkUVHf36moX2NZxHZTHVpPnF6kJCmw3ttwiVWEhBKGRU6dFMbghCSEmijHzF111baXuALUxuaesGteMH",
  "key5": "pXPnuexwkrTKLQhRrSm9tPGFEUnP9urrwzWSb3GL2nsZRNRVSQ3rrEBN6c33CcutNUmKcCk623Z6sbqH31wBWtC",
  "key6": "5eGGkkr33atbVFpfdkAYK8bhC21CbZTLSCN2zHJgw5aRUNgMXtQuaNLMPHwPB6K2ZSs1qBFGRLYGZjv5XqqdTdnP",
  "key7": "3Quh8cAahnNNKnaNHtjH2X45mziMg6nL5ZnM7oozW8jkenp6qbVXf4CZEeXwQs7GUdgsgbWbrbRJmkUqrvHhRZE7",
  "key8": "5K2muwjjnsvXspmU59D7zNNkZwCgpLLEZfLefbnNa4KTs9bwF1iEB3Bj3Vj7Txm1xHT6QCByqM4zve2TJwZzx3yj",
  "key9": "ve5ZNyALeKRB8rUUTUt1yscTgP6KAYqav9e2Pdp4pEKk8tcP57SjqgXMJPTgTNupqmk2RnbFeB9qHKxp8kzrQPP",
  "key10": "5UUYo565nSZixjCrr1LCiQxtZM1krFLjZMxkFKtVBXVxCDUqi5n5bSuQsBH35RwrNRVQSy3bm5nSjvTuqHYUJCrq",
  "key11": "2bitxZbuhMEYgypoJxpY9KermLqkEWHkbf1FBKDDtwArvGuqJJuytsoDSXiB8sN6xmNEEqtaUBvtzdaWysNrWHq5",
  "key12": "4BN6q9BHagKqVBUrZwgDxxqTdSMZATZ6asHwmE3WtmAaSrSwyQBA14JrYv2Z6HkxQywWzjDrTdnkuDgxsJXL61ru",
  "key13": "2yaSH8w5fB23R6n7Q982zLthwLqVUDBRqkhhqYob8C9GacEsGKB75KUixroqXT9M39h1eDQHXtRmxJ9nrdaFPVh8",
  "key14": "3icCAiGvC2P6m1Ar3TuHjLJGWft9Em5stdqqg9KYCEfhXzYSpcNpLEbwiSKVmBQQAwRtcvF9zMFXFZtmGHmQ2Kh2",
  "key15": "3UVxo5mqTVSzEEkjkJYhA7zHZL4JGCkPSMLhtm1KZo7km4ZcbHAbzTTxV6y8NVaNBBWvPBB51BcXY8zgUEHAd61h",
  "key16": "3StFrbuu96ZAceTV7GUDE8kK37N5JcbyuRakwpXy7DmTzVMnANGSoViqKsoG9Pi7fjNSFVo6LGciKPDhiadnksY9",
  "key17": "tJA4VKctF1yzJCkVSd24J5XeLzi1hMtyngvFcMokUadXPEpqC4a4AchxTmTuGB34i6BEe9qxMJ14eGKd1n4e35k",
  "key18": "2SyCHn92oMn9dkM9sr8fU27WsVnjtQhYra3SAmQgK3MjEUbev683BCKW7vyUW1uaLAL17oM1wnoH9WWiYWXTsyB9",
  "key19": "5Gk2Ck52k13bLJoVTxyPQBRx1vkDHtiPGQoFkT3uFNxbBcwMoawzACVfmA77neK6vuxYkPKDTRgmebqfBWbxFqQE",
  "key20": "2jnV99inAU79Du5BUcKH1uXYoBBAT4xTVVzj5Lc8Q2SKrQv4d3owZSTAn5LPMqzYvvJUKFkzJqtyBUSVocvnXQYm",
  "key21": "5UdMpTGg6byJantPjTLbiKhQ8yAQcCNvCfnCrrRV2jZpEhyBQR1FfoeRGeuyUM6xodT3E18hLD8pZ26YVU5fFaQz",
  "key22": "4XM4Nwua7bKkbxFThUkPVemZDEDrXSKNQHoRWH7rQKsjNFvtcEFGTpa9Ya4XBrhwn16oz4nwS1irPtGNRCMTjU52",
  "key23": "AHrDT8mVs4R5sQhyqzbDyNAs9VoXJbW3fZ2tmx9ee1Ngzi8PFm7TQCCrYYk5GPtfpQj6XNr22GewcipKr9P6CtG",
  "key24": "3Gs1KkSaUuG71vx1AinoDx7NxarjKsf7F3d5vdXYuAga3QTLmfmGKk9btXZMMyCtNKWVK2QXafrknXc5ZVVk8UTr",
  "key25": "2xcQ3X8PfrqqB9MomtjXby2yB7nyHx3cfY9ESjYLQraD4Faye9yZv3Fbft1TobUToS4zLwVTMPyDjteU9ijhSrNE",
  "key26": "3oD69h4opqCUDkg3pkNm5buQkFVkcCNM7cgvTEFeB8tb924YfUzmF5e6iEfzaWjaAfHAinAPM1NEwbUf66oHGLN9",
  "key27": "3zkeDisroPtCYMvMwfqBF2kQ4xtxTAvHkkdjcTYEXdpooLyUdrmDmAwTh9MCdQgyCJ2edLj9ATcXaE1Gfqxephrw",
  "key28": "217P3RX5xyFfR2419f213TmBYHTPzTYXdVJK9s7WX5fFfwCGoFiSWb3YrA5iSdodo2TNitByCbV9fVosdCjoKLbz",
  "key29": "47NdGSpLxRxsvTH2WrP74hDga5sJnYo33ssUCgixQ8mFA4GSRE2PaQoK8BPkbZo43JgMA1yDrDXPXFxPid27LnyQ",
  "key30": "23we3mSM9H3c58uRYHF85bii8y6J3URjAswg3EUnJTc5siA5U4eN17KXJ1LbUqBRwoqwCNJx9Va7eZTvnTBgyBiu",
  "key31": "3CTrrHW4bFg18MWzHu4tkrBYj1QnFmXXRBFcvgT9E9br6st9451efPq5adbtXyCmHc86gUxDwzQLsuQidKr6zdMn",
  "key32": "41kq3MfgHS1awDEJnFRc67CwRjExKKWEL8WxtM6WfJeX6pZuLKZbkdqgwaNvu3cjKxkya7U8SUxRCn4YdxKXBwS8",
  "key33": "3tdHn8Eqy2ZgjQzC48hDdTFCLpcZGh7DtDUeadVWgBtRL7sJRjtJFUc6TMAS3DUDgv11pbfR8GbBnShAETiGk48J",
  "key34": "4dYN623UMFe4b4ieR8wvs3ANvzPPtRtTFJsWHWSgh2FvU4EBDi8GWEm1U222gknRU51WnTnaB3a37KrD5HQpZwH9",
  "key35": "585SNoQBFR76hFXFe9shnHTohs8QZpFEGbhH9LYwLMk1ngydbe5oj2RKD2zHyzdqFtsxwBVHxNW7NRLkmca43P4n",
  "key36": "UnYBbzC7AFtsKqJmCtjcqXJnggRqA8XEWYjyi2Za6wvigo1AeCVFmPtgTjLfHaLWrn1srsL18VNeQ5tVSAVjAZY",
  "key37": "3zneyzXxqaQrLLUZsDd1fxKbkXXWSdDKCJ9juC2MnFgXpSb3eV1WCuoTZj5MfRqutFaDjPs7p7KzxHNeytVX6hQA",
  "key38": "4QLxn9VKEDjDed2L2cMXsMLWaDpm63DeF4GPPnQBy7yTf5th149x6LhDoq4d9qPSJuP8TkhHQWz3UhoQ7p8MotAh",
  "key39": "2dS6e85mcasf4TbsAdQWMARBEoQeRbfDbUW1rjfMnvG4BKuPzQtzhmjCsFnh6oGfGXPRwLb2UpE18NsEUvTZYf3m",
  "key40": "cyP9L4BmY7gr68BhZom7sCVCdC8KFrGLM8nFbnwY3gFeB7kmQ9fMkDHfwCEThXTuka7RDZQmq9vtU49xHkwkwcc",
  "key41": "2xL18x5VWxN1iEXcVKWmShintuFU6TW9fJ2qXd6vELj2Q9CJaDX1xZMPp5GueT7f3iu4GcEqHDAqAtepQtxTf7a4",
  "key42": "4tBUQb3JozHpjn8d9HjaYa693BuxxUKmYwH5gAboXiLoD4touk1MwiymKwX2a9iBefEiQf85JmbQNiEaYNpgU6aQ",
  "key43": "FaV7Tj4A2pnw7yh1PD5gQxwcKWhy2K3Jg4JA1AAhnopaFAxr9RgE3X3YQsConcgu7WoM3xsGNfAJoXR9QhTmCcu",
  "key44": "3XPJj5R2prF6Cj3CoyEeVUmHzf945cGVeNVRPFdLjV2yGyqYiF5ctUi7DUHdiNN7GbVVjiEoFyQRvZF7VPYLhdW6",
  "key45": "36g9a8XFY51uvWbJk3Khjf3w6yGWxpF3AkSHsA25XXvrVg7CV13rtFmWuQWkP8pVSkvR2X74a7nNuEAFomUn2Qwy",
  "key46": "2HVZCJyNJbHxyhdAa2Xty1vCKSRHDVfKi8y2NqvLNs6J3163N9NS2AwxywAFwBBV8inLhxFvmeASxpaa9wmsTznJ",
  "key47": "3cSZXrKu6sAFg2xFobvZX1PSCLEfCjWV5WNAUL36auaYBjgJBdonYqSsmfm3Nk7pb4t5bRmxW3F2sNK799grBgai"
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
