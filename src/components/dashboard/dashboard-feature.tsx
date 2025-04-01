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
    "2STkFYaHrru5bsAYiesAZxthZyd8QXwC61VbdafQSDmR5fJ3CkYkNxRZdfgYu6vQQvAQad1wqKdE61saw4tXUMVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KpPHVho4Tm9isnoTztnK2ZHX3rssJmGi1FR7yoZ4PhskqYVAmKipNgencT7TVwViabDxcWbmEPcPCWkg88jS5Ms",
  "key1": "5XiPa936CBmPWn19Yxjd2T8QDbXcN97cPM2jYhZkrKKaCejHwFKGDm6NastT5nhvhy5YctXkSFynJKccwYp5ddg4",
  "key2": "5MFsJzbqMnpr15ArSYpiRWryWDpUsHa3fxB6PNvjzN4rxe7GXnq5oPeGjGksSuPYPjSFNnqLAQS5Fy8NEGrnfLZE",
  "key3": "2dsDLwzx2D1wthtzPGSqXpueCBZucXtJPFJtf3GYBfB6jfS6NczVKNWp3fNKeRjAVFJ9TcddpJ2paQ1zj5tV4vQ",
  "key4": "2MPpwATRZDSHhYM4E4sLDiFYWEAzW5PWZnCeRJxHD4Rk7LJb3ovT9fp4NB1MbqTp96YjSkNB9J1W8ZnGCaihttKf",
  "key5": "3g86i4RcZoKX61kMWBjsrpeJGcT8oNEA43HLuNUo8GmxjbxxppYDnt4F5mupWhB3Aphjfd8D8tuNHaaJEiz4uuUD",
  "key6": "KP7QA5sBoTeV99rW9jUnfGGkjCS6t9rkDUKK3GwxnUtSmRWjUJpCJwMTFJMsjTFdsNjFCfhjX92K6pUCxHE1Grj",
  "key7": "XVvmB8zQr8NjDMZVaL5NfgoXqf5p2z2bTy6M2fKSsdePS5du11y9QxDWSNP8P5uEqmNUgkoQ4WF5fu4NiwPrwjw",
  "key8": "2CYGaJSQFJyUer8VLmvVvNdV1UsHoJRqcVY548ZNPuxzTY1JftxCe2G33KzxK8LumBs8c9hywh3Yb42b46aYccTz",
  "key9": "2YoEZJqZtyEQMHj4wQUtPnMnUuQNeEJ1Nhx1Nx6FdRq5L9ZWZNL4tR8uoeWuGqHZUxMR6d4CJTXsPSf5SaM1gmTV",
  "key10": "4ndafhFYhEnaPHcbaxLS7MdeD5SyN2m4q85WebPZJV3zUiHgTgbquf7KZWTzUuCLS8ourAPPKgaHvG2QmgJBRTX7",
  "key11": "5bTL4RFSqbwai7gGyCUzRMU6BkPYikLqWn5rsGTmj9p39rV6pNhhyfvyKLNgpVQbd11La3QV9U8H2xo6DGtCdwSA",
  "key12": "34DstzDMSUZrj3WF6NyzyHynPvwMCmGZ8nq953aXCSz7ZNzYEZJUhHkcbctsrKv5i746k9Z9bK5q5Q32EEFnveCk",
  "key13": "5EXo1PBFzHPGk4GrFV6JGNy8q2sxwTTkHhAYSCKHCYPFDDn22YcVtAHe22toSEzjitGawRgWfeyvXujc2WYncSF7",
  "key14": "b8ubvLc5wQ5mLZ32htHsWmXCyv5EVUAw5B7E9ocSyUZ8ab5ui2vTDUT5exFvbTs8iiMwwHttKSAEc2ryfbGDK4V",
  "key15": "4H4hZneZQz9fJzgLAKGZy1YRAM53qwnC8taKFj6eF8VSxoXaBRF1f4HHP3WK7HhWdqkekLm81xeNFBmUxXynHMHE",
  "key16": "2nKqHmMPe9ox8PSckeQn3etXCx3Bf6bbSpuGDMUQwsEJp1GppwakgVz7VkbipyJJEaZWnhyHmYcpvteTm9jBy1Lj",
  "key17": "4YRn86JLiDNQvH5NzePUDE7ttKWBosGAZDKoZQXePUjcyTn8WxfSrJLBgB7THRLfjNwczzkv9ZGcCaeMGAR3vgRB",
  "key18": "J4v6Etu9kMcAREPGocX1kqXm3gpDtW5SYwsajXmFgRwYrDVjRQqUWS8Z6VTASXgQbpr4KnbonH54gjRrgB23Rn1",
  "key19": "47mgdQjMZKKSfJh6LHXQKBcSBPmXK9X3KmVe4wdemDPwj8WubQCWwBJG7u5Qexf4v7HH2qNcb7UWZwTYiVCRDjnV",
  "key20": "4UMDtwYvWQFq7ciR3KyAk7Arq9qrTujWcokvbDHKmh3qLEexJo11rPJe2TFCLsyobmkmwWT74qdNmA2oZQ4cGtHa",
  "key21": "2JLw5Ajrif5ahQMgYC1hC3u5LrNb6K1spqAeNs8tcJ8kSrpCSW2A27fWAYR8W6R6wxa5ZAgCnTTb7DrrHUmZUbGn",
  "key22": "WmC8n9nwA1soFyHrkP7HmnEoF4pCyDdibMxSadgCARBj9Zn9NmJ6AkpNa6HRyK9B1q65Uykg5zTEtnL15F5XnSE",
  "key23": "2fYW4ACJvJfTJwL6kwvQVS65Xh5QUuTCVzjZud8vcDvgfwVmVmvFXKZMCvjbhuwe2TWLBWgu8VZZ6MYQtXvhXfQT",
  "key24": "5oiyA6HDX1LEeKr9zQMZ73JhYPqgmVgzUZn3gGJ2KmJMREw68TqTFtyqbaGbtMzAgUGbJzugGBbD2h5Ys67oe8Mt",
  "key25": "3D7gUy9CqQXoGWnPAEY8yW9V95ZYoRMNfrg5jjyaA6QYfUVp6PnxBpU2UAuv9aEap6KX8Qy9H4DPACFok6MCUBv9",
  "key26": "24oLpjgcV3J1ABCKskkmj1bkk9WFyPgs4sTfbR9jGdpun5sLVeqTZmqKTwvJCb8Huatb6GEhwBFvAEt6SrmLQiyN",
  "key27": "28LPb4pjDTzNm2H17obLpy17qB5e2mw5tS1Zetm25t12565ZNuQxdGbM14jANiH8sG5XcKU2M4erfMXFubmTVw5b",
  "key28": "2ioQFnf3Y71MWfzZoDoo3vP44erxtDqDDTaxS9CTeQor6n6sMggEGpcpMkTwYcLDEiED5ZyrFnLHK8pn26eh1VUi",
  "key29": "5Q6YXcdDE9yh4vZjQmzcP63EtHu9ikCsRrrV9NUUXKTZtZHf5kRrriZHt9HKQVrkjSDSq1s6cXqNpbH1siU1GEYY",
  "key30": "5i7KXosw2NwTPpkYoqGdW1pMw3pnwHUVujD8NSpvzJCRUUaGYafXoScxXXqNvdeALtV68XZ2CcnQzsvvnPyo59ny",
  "key31": "45BuoiNRz6eArBZ7MC2qvxEjEpS4CDdpdjiUjr7WnisUsqLaN3Bu1udSeaNEyP1JWNwg3Bq3rsUuMV6fuSfwVkio",
  "key32": "3WELkCgitFiyq52BRjLjvuAEzCRrh3U6vkcM8Gn1DDX9Z7E9NckRxDamRB5i7rxRcD8E2JHsGn2iiQytaKkvsteq",
  "key33": "4NgGmtSTbs5C1uQGxU6VKUrqERYfwww28yCTsZRVZG8TtczTiCVok6iFA7df8fuwEMSdxDjcHnDwiWUFBR8EAKfz",
  "key34": "4VVDeUzmkXEVwL3vLF7c1g2CBjMpTXvBy55hNMdezdgyHXXmV4xHm2KyuDVen7ZfqYb1d6KAjDFVnG8RQujRMszc",
  "key35": "2rcgYF5JrggJzfCxMMdGQvaz6vtVp9MyV8PWYTRLtgz3eyiAEburXJjWdrPsfd38b557ke8uKiZh9xWsXee2UzV",
  "key36": "jnompzPHPJyqGBgq1UYQT7JDKtUia8dZQdbTy4Mgnd6gWrvvVyv7K6XzxRcR7qfe72X3sRtN7Xhf6HnDbwNr5Dq",
  "key37": "NgAvgceiB6ePbkycHJ3B5xHEdW6cZEYgLYd2aXrqGMoXfpV3AiKAQX6LMqTgSty8YjJ21bM78RZ8nhb5X2XmSZL"
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
