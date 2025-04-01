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
    "3gzGVKwCGuCjnUJcqCXMjC3xbDFt9qJNL6eLm22YztwTrXWqQhhkGUDg4muKcJZkoSvjr9X5TsQNzphC87P9JQX3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LKFCi86CY1wJzD8n5LUkXXGsbF3bVs5vnvu1yYJnPzMox1pFBuWroBRzqxsvpiJSJ2dig95yRC8RPstA2ayvD6A",
  "key1": "3Xe8w5LC52Zc8LeTMi6Td3EVhTF1C5wg5U753DYQk4LEqtVRhWT2WqS4QCwfvJTtJw9teS9wXg9gnH52ExLL6NN3",
  "key2": "uuMuh7k1wNnu8h99xX9fzejFjNnVKuh1C1oL7kL6Egu2KbrtPzQ4zB9W9bfoMV2DXJ1WY2iEtaT1r5v9otJbNcn",
  "key3": "5ARpvVTCasVp4rMtPunzrnoTHuE3BL91aiaASiz5htc3Fj8dvx8f4PtBUFXdmXeNRYmJLDoaDJfftHEYdwymupxR",
  "key4": "2N92TZf92dNEZ7mnaxMDWYUfXK3wnDUfyzr5X4XxJNmQjh2UEtDDjBwJzgMngBREx59BjG9PjPwqgyqhjSXJ2kTb",
  "key5": "51Mv8zdpVzo4Bn8cGmFDVEfKMVqgZgnVWdGHuK83HYWyT5uxmpQnCFbNkRBnJrxtqFujAsovMjswcbtasNkwQS9Y",
  "key6": "3bAN9FGtsUbAiVuf8HZbPyT84LWKTMuMqUyNupWAV6oqLkoFbjCcDsaeLMRraxL5JWELGewmbQJBcNHPG1g6D2DW",
  "key7": "31qdNGWrhHdTmfr62q2s2xzyNtV6HB7Ew5QXnLgEzQfP11LozXHVGqp7YFGhHUJVLjwj4XSYtUGDLV2EeCxKrNp4",
  "key8": "2oG2QZBKcEEArsmA4q7K8TEERvMPqzAd3u3oTErywtHX9dDM1W7ki6jVNchf7d7nZfd4hqJX9xneUFauhNFooANg",
  "key9": "5SWs7oB6VLQYbbQvqQghk5K7vdacmsqFYiAiE45b3STwFXW9wVxwPqVpwTDgTuM9F2h983Ko1hTm6uBxFNFAw3Bt",
  "key10": "4RGVBFDnkv4WqsCQuUgKjY52FGFDU2iX2XYePpnGVncZTuwGmbEwjS26Nn1MuAq4F7jzv4r4o46CTJUwWooAYLd8",
  "key11": "3wbw9eNzfCofT84BLxEtnnqWMV2Ta1zekC1bRJZHUHirPHGoz3cARe6a2uy4JdgQQGimsDFraHDq3xEVyo1Prjtb",
  "key12": "2tRrCYpn9nYxXLQCZVYGWviz98p1YixZdzNW7wASYeEvk3t3AwoNnxc3bMU5MewbNeX48YFLk8turA2CQRhCrtzm",
  "key13": "2RUyyjjQregTW32wE2er1riqYfMzNNUwCgjvSavoxRRDFxoZmRX5uNLffm9NjYVW5p2PMb32DeP43tXJXgjmwgKF",
  "key14": "4d5h1pkQc1ZTXwmTbVPPEQ5U8Dk7yrnj2UXRZxKo4JSYPswPgrRZr8QmU9aobj2dmvKf9BrqPbVsAdRuY8f1oefu",
  "key15": "2wa6Tx4NLP4Vm6kpbfg42WwX8ThcL3suU7hg8EwGnatUWobkUfiULP8sKHVH1xepdjv8XzcLZJKtqyZy2zPJ7jHi",
  "key16": "tzmXW39jMTYCDzVsBuXxRsj6FWT4fkjdtUGaCv2j3mFLSxqQ7xqweXgwsgAMNjPNtmT7nXfXpUYCWmtWXRGMz5z",
  "key17": "3MYPHiFj73cooUPrRD1XDf9N8e7tDpEL8BgcnsheBzSeh57MvaB6VbNvb3ukLvvpi5cAqScdZwMNKempxxSvHkgZ",
  "key18": "3SHE33SKksLtWgWhtLEvQHHYkFS9GvQCDcJ3P8mZJKbC3xM9nHpCdeDkhZjma4fCbtfHygGXYeCx5pT5SGdR9obg",
  "key19": "xyGjPh7rmHrFftwFs2W993aTrAjta3kiuuhMq8qR81NSJBQ2abvZzmuGQUjR4bABjPeWGX3o1iTEfZder92RbPK",
  "key20": "ySSRz1bQYi5i3u1mKsiCveQ7n1in7kX4vngzaQz98kuFt2yuvxQ3KqJ8V7zDyFnHzaVqBgyTkMze1H5nsqzsr8Y",
  "key21": "2N75JHEm7RfNDe6eFdhq8JvA922TVccNYLFKWuL2CDYVdPncuiLRzunEJiUv4B2bU6fTSiLKPQ4G6n6fupBC2xtr",
  "key22": "2v8mZoqXDt8eJk35hYuMFQVEiuKD3sjMYBSxUSZsF5SUWpb85KgUPQAtaFTUvj5drGy5WnEosXcKCXueGRpHFecg",
  "key23": "57BAgKbuE11vBaBzZjvGyji8Gk1KYPE51VW2sfoRZmtMXMjP6fsoGzbxp8jhRnGvr5onqq8TzJEkxZqgj7HygKEp",
  "key24": "3iXBj6TVYPKxQdVRoicQPCefPtLFj2SM9FZAAzQeayWjyFV73fzL4yDKxSKFEmbmUugjmwDYwRHvEo8fbn8F27s6",
  "key25": "2upNnZd4m1MaJK2p2pKo8U8VYYRxHwfGCs1FJSmGY2tX9KHYAMg2CP5q4FibdaEX7zGjezfDzBky73GEKMDG833m",
  "key26": "534TL34GqJgi5L8wLnfwJ8xRU1yMHqNtiKVfLBCEPTzhfSdLWaZWVu9eLBxPghg5qmUTX7mgG2wV27mVK9awVvYx",
  "key27": "4rYnCqpnoh1fUDUfg1rJQKYUGesbHQmtjZsa3gxvuASzV55MnUtEMaxo7SYNRBEGVYV1YKer6HJe3X3v7gqGfDPY",
  "key28": "2YHKW1QS513zaUZJLhPzzv9Ei4Wa8yMM9MbBDTvRJMQjzLPm7zGn3UjfdLqRmNeZ7yKJ1zkDDRx4LmcJQdJPMFKJ",
  "key29": "26snSzgpwWnSsEqq686E7qmGk1emcaYJtx7iL4AhY5QRaQTVE4kKWKja8Ai4vxethgsa2xuB4QXH8NusEEjPfnkv",
  "key30": "5cXknAZ3Cm7P4uixmA252nK9wXDy1ZWRNJx31AFquSMhLq2TDCo2dc2ETsHsfbqPsLYQmEot5qJXnikA6virAUTv",
  "key31": "ySDfZxwkxkL3SgP5JiphdS6tBjNTW9qvXd5xtyyDNjU1xAZNhTAfFwdPaYqYzB9sffnjwF2U6XCL3Y6zBJiReE4",
  "key32": "4hrSNHrekUyw41uNXbPNzwBUEdt8Yv5GMHFQcsDCXFEaQDSeHu7cFgNVaiKWYqnDHYivyx9ozY964nPezoLsmLyL",
  "key33": "4HrLbjJraBUqZuuyb2qhHNGNVknmuU1CkyWxxSBerN7v272qPp8VS633Tv6z53S1qhze6HY2bdLF1j8Y3Rb2JxkY",
  "key34": "2hJBcJo9TZtqNHNQNvDk3jEVEMC6us9PGYcsKAEuTVzVsviC2it1Wrse4htXD946hvCBNFtVMX42QDygABGF4ZZh",
  "key35": "4PB7rijUuHWPv8jYTJ6ciFcHKC2Rde2qTSngZr8Y4vCoNAHv3ywvrKAdG34RjoX3d1axWva2GFQqhJa3kKHWfHsN",
  "key36": "2Dh8NZXb1idiWYkjHwSaorZdvwLsssy9n1oQvBkxhZdU5DcoSNAfUgNGpcZfcoLCokxntZyC3GRLhkz94GEddJSq",
  "key37": "4K1NA4JNwd5NapVonqdyJLL7zEAC7o2199hbBPxjAm76BkQzZq8rXxnzwYZRr6so7rxxgrToYqsVpR17W4S7ZV2T",
  "key38": "4bLMAzEVsoGPaQKEgB7JiFGNpBnBr9QVrdkAvEcuD5GdzMWJpc2qe2j1qEMAG7a2VpSEKq2EMKFBwm4UZowJC58R",
  "key39": "3rq3tHbLtceghGEgPW9Fyxbnsa9Qh9iXT3SaYjmaMg4kGP6HPpcP9GWpGLHzeqqRKhd4yowuGN3fkc9m3MR8gTAc",
  "key40": "4jeYPj4Ms9JK1QFNa9HsKMzPEV5VPAU96Etjq6hQ3ZoHJcn5ZHqXviX9aNVBYbNYKZJzmG4N2iuTQoqkPcLjDNEL",
  "key41": "2Fa8sRua622AsqUaqcjdHsFzZfXNLcfYBwofR96SWAGYEZtx5gY6ckWhuDMaJYdnRXVPivvxfiHJhNLCQ1qJtWKt",
  "key42": "49tYkR7ZLfeuAciSCdjApTzX1PAtC6bzBAPnHCnHRprcWSVBFp4i9HCVwWwNzTLqwqj9EGjBxrMtTbZFiZBEbNfU",
  "key43": "hCwwGcFjXeKKNRdSuJ7mQ8NdB4GzE84WosGNLwzJt3kjrwdZxyKDmWu3stL6kjnuKD1fggpRFwEZkP6ACRnEKdB"
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
