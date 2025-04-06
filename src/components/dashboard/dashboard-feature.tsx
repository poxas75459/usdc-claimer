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
    "3JVa4EPxJM5kxY7XA6HidtcUiPwUzKbTMhFDUfiwn3wDzJkzkBp76pFexD91rWXFnFXFrPSzzKWSBZ2ai7Ka4CVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KJkWPagWD6gBjNEj8B6XebqB9xxcCjdwGHAiLnh1b2z9zA2Hp5vwryj5WaaNxFFKkpPLHfP7tjGy4XFiFtdervm",
  "key1": "4cmujycQysssm6VPfwfmwwr495qjifJL4snax12j6VW5g7tQZmPdht4SkDxjRRP4JhwuLyFAm38LEgufhTLVi7FC",
  "key2": "2xDz7u3jrsct9JXeRofncfpcBfWzf94dZ6ktijFREbQqNNMm6jqp15x1B6JsLihTjH8FX4pzfGZuxmkfxRNc7LUd",
  "key3": "3pUKAvNcH7jQu4bo9ajrshfiSs7hdNtPLGsSj2Jb68MW5gg7z2MjyjonsmTfiwVjVcDrLi3ghYC5nCQemtjAFgvj",
  "key4": "5JyfX3LcWiY1SodALHB9SLPCYrcA4Nryfo7Q81Lo1cYuf9SfFg474WzbacER1NewhH1GvWm8KdUPhV2qpH5uyFVf",
  "key5": "5NrMNi7CGB2GN9gEzjrmSGFTcbvnjW9dNpbtcF1cvVnJV4wrWsCvkdAgenJWZaPF6kZYyQjz9xsgfL6Rrq1EBbbq",
  "key6": "55neBn6hP1THa26AbvsRE9QHvUtLsrT6bSmgyWdhWtgQdWbGbiHAZvtoQ8RF8fsRTKqMi4dLSPf7aATyKixDw9aG",
  "key7": "4qxTvsupSLn51K2WKbRsxpMWoZ7UDCxoXZpFpzRic3EWVeCTxDCti6bNpb5vHpQ5FW7txZykKXD1MkiYQeS7vn8V",
  "key8": "nqm7KYB74ndYUiwSSztQxWWHm626cgNQ6L21RZkvxFubMoNxLpkiEHE4MhXs9SWVQgGU9fppm9Ui6pnHcpYEEoD",
  "key9": "5imEijZVKyHibKq2ZhB2UdwTToU3w9copmN1ZaeuRGS8geL6DNACDmfDHwPdUrvUgmFPhjacyzB2iym3GaBrGvXz",
  "key10": "3rzvUAXu13tku2GENuPr644uPPWHA1BGYSN2uQjz3XbNs6GNGSj2rz7uPiVEAzLfghvFfiBpUD7ZgSeqmu8CgYjd",
  "key11": "5UTDbSaHdJ6MktBdMLFJNFBLmJTvjScYy9XkC1wGBM6qRd1xXTRzEaYcRaKyi2H4bRmHvbJMJnu9W4FkJFnFFJau",
  "key12": "4NS2wA8GNGXpTgH3pkCCdCqKyCa7xk5KXvBBphchdSoXy4DVWELDB6qp5seNQpwkNDS4DXvvNnoWNXdEh4gif2m9",
  "key13": "5MmG9z7VCXFA4rXFAiWVksv6kpfWymbteA9Yo5wbZtZ8ZS577ijXe7TBcdVQoiW5BQVFbPTb71KcAxSarQY53XXh",
  "key14": "2xijhBdb5ZXfCgA8Vq5WnjNwFMQok65pWaGypS5MhfiP3nCiM4JCmqQSkENaBMV4C2zo62WQMVZiEZ5XLHALNYTu",
  "key15": "4uavwLMAtMQTp6Nm18Xifa1mPCvRNVWRXLh1puWJh5YEoKKDp7QvpxgStdeHxwdh8D9CfKtGRczxCzv6Ua2hWpqy",
  "key16": "4PgW5WngXgnAZrdxuSf6LFmGxnpTggXmupfvbmQucXcsrrZKpS3VMc9K4CDMkiS4MFayQvxAiVZR2vCHdk1VC4TW",
  "key17": "58mRFkpqjiYd2ZxT6stitCzdgE8BAVGvAZmFJVZXSLNAzBtpKgtfsWNcXBh2JWXna62eKMzqREgCA4YARQ4NB1tY",
  "key18": "5LeuC18S7R4D5HHndk2ELTLPTXFNmJmUhLtgVZWAUiMqW7M3vz1cWwXbFsp3B9pt4NZiPgdQq7f6DezNTPC1JQfs",
  "key19": "VoZsSTaxJ3mXu2vj4ZUxM14HzQbH2WZaNfku93KAs1SDbFTHM5BsYpGXURx9c1XmyVHB9dicc9g3zY7NyCc5bYw",
  "key20": "3AuJBdXWAMGb48ZzKA9RvUCz194BZuDgf6TDFUMyhwtpcjVSMiT3r3v9un46maF2AidRcMJxjrHnrZW64HKv9eEZ",
  "key21": "2yAYrDr3EnMY2NTaLRXGKspwrHRx5mgfmrsEAp6y7rLJoEJpH6zUdt1t4gEQSZxhvbMrf2LxNuRcMeGGN8xwGfKS",
  "key22": "4obsmCcBUz5oyzERzux2WYTsD5qxLgEdbx9wevD1Mq7RcLG9KVQemTtNF5bmqEjoMZypYeiSPgh8MqVuCmwEZnkH",
  "key23": "4N73ReQ6Eupb7Mamu9ZmtoW51c85pxVsqDTBM99EaHFyVstpcJCP3xqJk66WeCZHohsPS5NFbVs5XNx6mQiZYi1T",
  "key24": "2RCW6WBunTkh2YWWUkPatmQx4qaivzECVLWKjooiAvCTk4uF1syWExtdb1UqSV2eYreCnP8tUkNLv6hvMYJY5BZn",
  "key25": "52d9sJfeX8yGhShM91gqSmbXqLuVkyJjpNE6HjF8SynH7vqV8X78SH73aw9CdGzzXXpZxptRDTXcnWxFQcjqLidx",
  "key26": "3iXujH8S6B1n7g2QM6vCr9nygCTd3SdPXxgciWriLowdAh1DEpHBcpbPJN2MkNv7maVVfBd5N3LRD3FYuDY8kWZv",
  "key27": "54RmJe7wNFMeBhA9j8WK9ACXPnYPzAegBsW1ekVRdY35baoDYMroqhJFPeuY6ou1ntfcnxiemVVGemtuDQ4GisSF",
  "key28": "5TvyJYhzV5jXRzJ5GJwBhFJWg1Eg4WSFGid1pV6FqnGBof8qE3TTNyoJGyj2vi5ipeDoJC9GUqxbWuwrkW7Sb9i4",
  "key29": "WDBxnKcgECRPappLWy3tm4oFmwjRQqw5ToQWGCoUeaQ2J21c1K1ksgoBFXptvLYrBmoibuUijWqgkzB3apKbDgW",
  "key30": "5L3k3qcKCeprYiQCyLAEaXh8gHhBNA2Q7UZkhoF9LuxANAk17B5tWG3kpVkqJcUZuFP4zJXhgDV4v8bXcf2KD1xp",
  "key31": "2v5NpQnS677WR9aHkrzsXCxEmGYxjnYo4MHKtPCj2466sUbeQHUm7FxubRXB1uCD3917ZhLR51S4mdbvBLw3TwbG",
  "key32": "2baxd8W3a5wW2FZbLgF6pvwuQ71ZymBKNNbFwDu6cKzvJtHkLuyxMLR2uoedydPBPSxHudNAh7N3WsSoWCwQD9Gt",
  "key33": "4srW8B2wK34RaJYKA5PJmUtYJufRcMsogq547ibJJfN2Paj4ThZMvSUdcuqmz1PXaTu4Y69Kc1GgZw1p8QUBktpA",
  "key34": "36Vquw7D2GGdr9dzZM7aHdRAkDbveoi593xhJYUUZXSjYbhCA9QqBJbwvq5rj5x7RVxB6q6qT7Li1YtyyKB9yUyT",
  "key35": "2JUKDaBqguXjaPQDPrfDhdRtcNn2NojCJKuecddrruUQaUZuknyc8gEqd4CNh6auoo4E3zt4gEdJFY6DGF839eSd",
  "key36": "mxfwnRQuUgy7UbCFxPZS1rXpLALQKGkjNXWrEJypFHBPzsFKQ7SEkdM9X5rKQ8fgX4VY7hTZkzVNSWgMkzbmWnq",
  "key37": "hFjhegTw2Jk7EAwWoC4Ha1oZoccBFJQWZaMvQoDRw9V7Kat4FCphSod2XZgac3rEUCSd6EoqAKjcNYY5uM7Qs3J",
  "key38": "5qwv5FckpXiTUDqw9ZcUr8t56XFXswp6f5kM8P9ppfbcSqczpJ2mhF6qMQTeaGwJWsBKqCN2kM3tCAPexBKKKNdC",
  "key39": "5oXxXwzvWa3LT4Kx7FwGtB9rSzjTUmDkCWG8NAchxZChqBjr6yTDeu23nEGZJybiecdRD8e6MkH2TaGnGLr7a9rC",
  "key40": "5WZ5CJpWnPSCGwENuX2fCkdcak7FHMDJCQtYZGATkBERanUHZYFWGb9ahxyqA4DuYD1dAad89YeCuHxRrSnZmeny"
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
