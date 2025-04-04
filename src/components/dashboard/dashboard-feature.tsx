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
    "5FnxJsRDdpvPQQ4i14hxkM1HSXiMFZwu76H4LTuNVmsnFjF3tV52TzM8T28enraB4fe9FEALxDxaUqT5adBtomn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qTEpwhWbeYpnBiShaobb9EXwFEJ9NrPRy7pirmYBjnMw1o9Pkqp1h8VfqUbaGrRXGz1RAvKZJ1Nvd29AmV4E2qy",
  "key1": "5LYfufr9PYND5bRqCGUKptsE2uKhkLbCBQqSxARm1FTjtV5QgjGkvXWiUa3DGtZhKfnNRyUUcHrPFPZR4E2caC8h",
  "key2": "4FUQKarEr7bRc3DgRkJyVSYK6nnxpEdsWqe5uNzYwicdFm3fiQf1NyQhpYuf6tAAwJ4vA5Zn7NZt2mAbRa1CsHHk",
  "key3": "k688RhZN5Cx7djxNbr8bSKpQqM3redyzLggxzXFPZyyxNCVRBdn5mmGShko4juGszPjtXhqTRur8nFDcs4aNZ8d",
  "key4": "5vwrMisZ6FtzRye7X5BNZnx9U1KZeT5iKkBrDVnmEn3tm7J3imHdemttT4U94quQeh3m7DJzUzxUpNwSonXNGaBb",
  "key5": "4Q8pofqxQoeqodgyKExewt3Fs6GDjtuWau51wuxycbWmHn7qLNrr68rT2xVdPckE2dCtaPyqmv4sVsMr7TFGp71u",
  "key6": "4oBPXqZ7TLAaprzDLZGnJjrfDAT3Yww52VXv4YVwAYnYXFTmJuCfnv9HLRvDxiPr25gbWBehTTY2MKDVyAUPnuWw",
  "key7": "rv3NScXFuEchdLkYPwQfiWduyvBwAgUKqBhTHHxGBLJHQxTiRpC5d2Ph5EYpfegoHQH7yYoR8ZzLT1qWXAmUMKa",
  "key8": "26raHdRrmTFdAhNcEqZHLJwbxBbUJdNNr7kGHRrpeB9nBDCyARtSUVkAbG6CmaUcgDPuEmeqJDeYr6Ek28Myd2ZM",
  "key9": "4MqNHey4oX51VERSmjz6ZhbdqRwKcYSvSegpq3eUJb81vJb2x66a79ZiFBA61SPw5pKWSsSQDbhJorNrLV95HFzr",
  "key10": "2ESznUKwX1jP9DDzpuLUG9UM2x6e8jPAbioPHZE4wMNWY84FC5WyzWCtfgYKPhXZEt947TLy1kgsSSw8hkXAxB3N",
  "key11": "2i9MGx7TUTcfAWMc4m73bJLE4bnDhwqzd8KwEsmWYasgMCNZ8uyNohrMphiNkej1GoPWpvxm2qCzB4bZLUuNtxeB",
  "key12": "2NSD6BfG1CTc8pn8zup14mjLSGWULYeHMF5RAU3uyuhB2xprFeHiC8UgHuCQggrp5jfyYP2xC6TPnXYwDqmeZpnk",
  "key13": "vGsuN5Z1bL6pqUpD3cfACJM5Rguw7Po14FNd6gGgmq2jNQCYGTWKoWXMTaiaf4wVgCVmDonchT6PheVPa3rizDd",
  "key14": "5uCYai9mdYrwsd1SepUjsDDRdFF83eftFJcLpyrPEPmheDzrMaPHLsmLnLJox71m8sZxgWqgj2N1FFqfu799dhbq",
  "key15": "2d2MmZTH2AURV94iyoKpHgh4oVbo29TUGNp4MwM73qmfJfAK2LRDWbowz2o41pi4CmbyyEah5tRo2FaUar6nzcvf",
  "key16": "5etNM529WqXECuwYBHdVXMC9XkoGE4Xvz3QXzADfbHjBqZQpCJYRn2Xb7gm2UfQyAYnN2ez7pvuw86o4CxZNZSkU",
  "key17": "5CoM5AW9uF6MQUg4bX4bHEuTmMxvYjRrr35C1XyGQEdLhf7AcJ3K8UxzDedBTfKSWZ1xjoXPWichhhvod6criDTJ",
  "key18": "5e9sLnZUHPCTXP8UKqcYKWGJtuR1QMPnxNkY7sm4QaMYK9FxaeG2KHN5J1PHpTMKgkwPHZf8jp8SLeThBFVJEuPh",
  "key19": "3kFhETxz2cyuEqgCg5E7oxFR4LuHeYdUw9VLFZVE6r2i9cfTs2pe3VKpy9exXiJATFi7qEXPvGsedvuUYUvfzhmJ",
  "key20": "2LdoBGHRGffPrSzLRtATX7GtvGhTY2u1Dm8DRH7GENBL3Ugp6XZgTrTW7qeUTyz2RBJe4qgmLxW551KajXRbhe3z",
  "key21": "3yWF9MpMCjSrESbkWS9xX8NbXY7co1xUMY61fM8UGwKUeEXaxymjdqhvE3M3efafRqHdz6s83sm3zEKTNRKzFKyC",
  "key22": "2tVWi5Nxt44NsE8GqoKEHy5pniZGQ6bQ9qYpDo5AWSAVhwXjtXVrQpiA4muREmUp5MuQKtdGscUTirjwQGqGPR3c",
  "key23": "SsKUX96T814NzciY115xQjVBDZjoCc5BPNTvMqqeuQN9G3XvsScEZFCvooainKMwT8finEsacbRrPGLiY9EUize",
  "key24": "5tVBM1hUSixy2aPQtpdUwbNPykDJ64r2hXXXRFnF1wWJddFBnuFVFeVKRiAEGnkTuUMwzL9TjhZUzW7QUJ1434Rm",
  "key25": "rmzbPkS74H6ptut1PHJu4Tictghx2faME1bUSRYxSzAHsJRB3cBrQbKMrZQAsmR1vqMT91ZjWDCJpSfD5XqsGwM",
  "key26": "ioJ144ppyqcxj3YEBh99mX86L8U1A2QaNQSia6uY5uWwufjyHd3rNx4aZpWBuFLJa4wgsVCyJmatFkY7yeoRUYB",
  "key27": "4ZfhR9ZS4yYxHLvQfXJgFSswDHS7VhbLdhzEV6TkDo7xZvBmXudY9oCZyoWvRQA3Q7jCfbKTskt4zNBEs99Aao8h",
  "key28": "4X3md6FnGFdebKf4sdkUj44j3BnUBbvZGKZgcCxPhZYWo59aLgDMvbCYWRNNh8RdbmaxqJceQd1Z8gK8dhFh7fFD",
  "key29": "34GCrvAyoWUYgLnS46PY66CvP8ueEqiATkoH9m7YNrqDUdN6vTLN1otMeKyq5mLYgr6piVTCNgSFCyRturt9zYxU",
  "key30": "5B4n9KeyVaasiZD38C9TLLWfbVL7Px2yn9yu5cgRrgdsvuEcPRjoo2XPu41xhJLZWb1K7eBrLK7PAN9EgXAquxMi",
  "key31": "4vBZpVTs4qWfSTYUBezyCu7rtdsqYq7G2kAzca7mWDisXbGYo3FPxtHKf73mxxXDHF8C2a4stzqeWRYaRWqdx5dp",
  "key32": "5osnytGTEoDTBSjZJyV8qRVvpjDEruLsYSGMpogya9qhfTKhjiRvy8w5ha6CX1RWmvRQfCtVuQwrvituHfG7pcQ1",
  "key33": "2r8Lmxf2v8y5FEngEJjR71tYHsmxa2xjrZRBuWVgptw5oN2YAAunjoKUNCgoZ73m1iZidHczCSECeQiR93UVvvWR",
  "key34": "4Aupox7sLV7croS58YdPMnNbPpn4dYpBNgefNzXTBzJy1dq312cyrKQUm5K2mUjX6HjJibctHBiKwcP5VrEag3iD",
  "key35": "4WwR1YxfhMsX8Cx2KXgaM4CPwyhuLcK796QXCPrTX2AMoxSt471cUY7afCiJBE8yjJFhYYgMw4K3gDrRA3JaxU4G",
  "key36": "XDqdVJHEEmkR2DjpVNuZm5vpMCwn9LsgFysP8MZtYJzKEDk6kC3VyPwadUyar1AHztRbUjjfemZB9YKRVrf2FWe",
  "key37": "5eETz4Abci2vXQyf58MnJ4ukfhW9PM5TSbFfPXQQaDziEPSxkv1Hr7AE5JrYmKCCHS6gM8zXjb1r7QZSj7pgJHrc",
  "key38": "5N89oGnZtCnCtB3y3Ri5n4yw6ivJZig2Drkwyfb7HHgHgkqg526E2zfdqXxrr8qjSx1B1Xjw1LxfMhigoZT9RRJ9",
  "key39": "2M3TKHyeMyde2hY6BeYsPizRB1FmkiAdAxJckhGZA6mSVByRrSnGNb6QUb82EAkFT86415AU6rbw4MFG4LyiUBU8",
  "key40": "KAZkWaP1HHqmSS7ueY4mNeFntssTwFN5iA8r9GMEKFsdhCLbbKabDoRXFEwn6FyLKzBttMzd9eGHN1rkxdN2XNx",
  "key41": "2kySMi8KNJ11PaVJ4wSy2UH9JRYNavVw1aXAQc2YRo3Qi1akcgh14iaEkfd3hWBnGBKHtrhLv1G8o4f2NjETBmmn",
  "key42": "2b2RabjtVmEX9y2zJ3G6Z5vA4Ktqg2P7Y4uu9misc1LSKapaDhKAJRE3YQMs64N4NEjdMkMbqhoFowM7dcMznbbC",
  "key43": "2VQffNUtWfwa8zmYgNdeiTVN36jatrXLCtJRcHKFNpFNmfKNypdwaCCTzM3cJMhU1fuEqauSTL4n8RGdUX2owUne",
  "key44": "4hpEpVbYmqM1svKjs4NtM6gLa9mabdf5jd9im4fLWTJqPgSKxhhZHiBs2mj5eCA3ZaH9KzQSuPsc67U4pKoLJsqQ",
  "key45": "3p73F1J7SErnP5aP9DRP34zUX3mKGCVzfSDdUM94NQG9sKzpcukBbsuashu7bM7ZA7Rp2c29eKYoaJY6hqgo4zdu"
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
