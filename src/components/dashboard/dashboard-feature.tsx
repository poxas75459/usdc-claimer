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
    "3aNdxttCW8swdBdZi6chPQw1kBv7zQpYTFUDM7WGj2i9ufz5auEDP8ky7QqH4WXCeECLBvUryvLJCGCCYAXSS4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tgnboXddBVCcKCNjxrU3FkHPVdokGonUxq1VqSZ31bNCsnKe7uES1abeL4mUjkL4JHwVm8qECLtArxpbiBrCdiC",
  "key1": "sbcpojXu7G7hxcqQhAnNzSFUka5rWukgMobNEbdnpFWDgtnfJJrAtqXup46BYtLCDmwwdrLzydqFYyNbHbYvLSb",
  "key2": "hNb7ewRJwPx2xMAAVfc3v2sfJst8Mw9aRXecpQF53VCED8fovrTaafV828vLGumLCcJqakFBwcwmEX6BrX4JXy4",
  "key3": "QWnFQpb9CgqnDD7LnHhznAGnyAQZTJgU9YBeBEgQmtDZ7MdmSSjpe9LCUfqgCLGN4Z7u8gpy46R5cQwwjAH2KNW",
  "key4": "BhmBDsLoDaPRYPSyLzTiDn6DB2NrYS5GyqM7iYTRXoVDtThwanS875f5jLkDYh5daPno4YhK4WbQMq2PjQnNa4G",
  "key5": "2wtYnD6VrYAoF3ztZCaZDXvJ5PYcVvYYdp3kAfzVHJJ9zjNWQ9LGmLjci1xrZnZAt3E4vxgMaQNJ388DaSLb7yQ6",
  "key6": "3UfJTJDhcL947bh8c6jxSguXUY27eh7at3yQiRb9cZMDygQptkmFtopYVmjsWkrMCFL5QoUQPDQH9eux1BdvsYfL",
  "key7": "58hv57d6qiLn1oxYrfa91fLCPak6BnmAR49x1E8NNNPRNivKLsvDvg3Lc3GL3UY72hqmS4Q3duUMpD7boqqccZjt",
  "key8": "2778QoFkr7G4W6kmTmoqsggpj2T1M1hyTDeTVsBHco9Tk9KAGwa6Lo1G6QDxsCSRGegthX8M357mHLLkbXxkwvri",
  "key9": "5YnVbygKMvEFoMTf4rxoAwo3UF4x3qnwXpUDLNRot2TAfHTdcQzaveMAsdPrV1r3JB1bGst3YdfhseHjYiTKAS9z",
  "key10": "2NzghjqnwwH7KPmLYiNJJixwVv2Rb853Yf9YUQvWZzbNp61zgqhJX6B8eTsMkK2QspPjhU8mJgfeiDVWEmZo1QLp",
  "key11": "5BbDVivUNoj3ctXg689mF2e6tb5HfjL5AQUSrn9HbCMez7vC8bqZr83AFU6ULCTYsJ4bLbKUh6j9Mw7vmwySPTq6",
  "key12": "Uzy6QwbRggc1hAbGvRzJWmmgv4evyBmy9pvEXVG9qs3BS4NhquZs2MnFrF7NcVTHje4BFBbxXmVPvXYtLcp7HQA",
  "key13": "5bnkwB1gLf9XdyqzJcfauSQbkQztyME4vEuUxR2AkiopCURC5cV69DCmiGTrjazmrmTohVbhDeomXnvEd5V12spg",
  "key14": "4gAFhXM46Myu3U4rRtMxuE46s5tDvz1BNwVRaaAddJhPjpQnpmsGXLRSp9r2hvn6hspdk2gLZB5Q2GkAsMU5XMty",
  "key15": "4Amq2dd62SvpLHBpAyY7mpUMYEfwq2uL1sy7MLW4HRxaKMLwST6Xk89uPKnu6nLetD2AFW7WiGXoHQuJRMhjPCCN",
  "key16": "5xMQ5JYKW4P76zxGG7ewSDJdg5zoM6yhYBBwT2d9VKW9a85zY6FYtgZvcLThKAHBcsCG2wnwxtQJNCjMbfPxtYnr",
  "key17": "2eYFsrCnCxe7xj8BV4E9chrkVcp9x95F5NJ3xXXufJzZQioxrKToVnHMeRCxKwXENBsMbYhXzrYmLRyQKkpYvgkk",
  "key18": "5nG76pTsvEi9WwZybuWk8BxBFrpZZ1pPKhzaYx8q6raYBFFWDMFBguEj8GttjZfvPKtVKxyo4HSxKYd1F1bdnxvF",
  "key19": "5vy5cQ5pVJV956gw4gHXYU5BTa75W3k8UKQ79k7JSYFCSCScye3f8uzS5v6tRkNyVCgukQjfxPacmPz53JZPHNQD",
  "key20": "2HzovGAiuVj7S3LtCGcJtBi93wxYUDY5Soodmu3Kk5X8fHU1d4BAwgVxXGb1Fjr5nQL8sjua34qrPMgsrFtTqRm7",
  "key21": "5gi9sci1SHhAj9QMa8LdUmRwDowV61XdSu35DpZ9bA9Vbz6snVrhs2ATmpgnstJUnF7yv8i5y1ELq3vsr9S94Y4M",
  "key22": "55LwTMqeW4eTp5gE66NxsygtUSTBt6sd2VvH3eCEZHreQySLymfxPKABvjGUecYPmBYxBLMo1DEx9NRNf2AT3DdB",
  "key23": "2M3U2xLeEVK7493pUQgYnGDH3yfLkzqT88mkMnJkygBRPL7tqHSzXJfmCyZvuTA9fF7S6Y7zJksKG2vYJZDSj83q",
  "key24": "ywW4chVE1E5vUy9VPW8nFmZR3A6FfwB2HR3EDKQE6kvrrfczQ5d5kVqnprRGiAHwiP8KrWgv5iqY6FaSP5hhp6a",
  "key25": "2R22HUARRiPGJ7ALfVYekvMggZJsdmJJKZEWXCVitDx9UCzs9QEPZidhp1zufBqbGCX6ejZnSrMeHv5ZLBjN5U31",
  "key26": "3tZXJb7X76j6yfgMiTQQ8mGu3xa2GdnuDseowqgWmTgzADpE3VuR3PxTdCWf35psEuAs1rg91YqpPXGRx5XwdKxB",
  "key27": "j2xNGgrBcsgqUyRqSPCfLWfMZtGPC18f6wRLFKdNyW3qT5LHwu8e9S5Tgy9yggSfNVZ29TtRBJonWqHSyQP2zWe",
  "key28": "2z9AKruZESAFqMzYsN9e8YwrXE5UQqjUwdWKBqPjbWTtebkL5Y7n9DPybqiZFriy1PknXUUQP6VcA5KVtQLhxwVQ",
  "key29": "637aJM63TpyFGnt8N3PHrg9vKiHC6MMEuNyo39LPzEMvZ1bHRMc6HnPHiqcqQvkcd2eN6HYbQfyUkH3Lg7ovqwe2",
  "key30": "iWi9GNPjSDK56Tx2EoEbW5FtzkFqi4sAaGKLQ4L877q9Qszwjo7Q9CJvkzDHdcRdaZFwCNHuTXkiU7xrY94R3SQ",
  "key31": "226Z7Uc4K67iST4uKrmueUB1MNQmmGcQjUjXF97TUrThBnPo4gsC4Dme1WhYKfEvqG9KZnYXbemgsyXSYYa2svt2",
  "key32": "3vaWYVGU8iunZY5juVCBPxtMZZAAysFhtWeDWKcrYuUKLc4db6WsP7Ja6i3wZUauVKd49J5naqDPQ4MmeuAoTnVp"
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
