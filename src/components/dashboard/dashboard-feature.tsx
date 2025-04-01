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
    "3pzLEZ5n1U5gzokzjZeEYZihYSG6nLuyBHgC1AiTxMbMwUzyk4naKftNMcvJUc2gvx5wzk7GR7eELYo1wgyrfPdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ah6aE87y9gZPWstS6ShNfnLwTFeu8vWz1TwTHJ6qSRz6CPjm4hoHyGy6EJQosdsCQbMY2Sz1urBmfJh2iG3i8F5",
  "key1": "TomzqqDDDaRPSPiUzVGgJF6m1cgbAvH2AKz3FdtrCeXNWZmYaf7MtMGsPu9yrfDtrvDrpsHPiKdW7fobAF83Crh",
  "key2": "4NjzRxhTJbKEDggnsicjgPKVgByJtE1a66JPVJwXPNRJG2LXjaD35pc3rg88ahDSpEKpZcM1YkaTuUYp8LCTk58u",
  "key3": "VQQduLDbehj3V24pHzvWRWdhVtuu4Nu7sYybN19qHpvjfx9mXD3CPvwMV68f5oiJqwMyDQk5kMY8Pbk2XsZMcJQ",
  "key4": "4o4TDFJFJbCKMf9MCWq2tSFJx29YSdo6xDp5XpWebj9zkV7mtomdnpGJ91AdByDZYMUUmnPVjAwAN7uSqZsTbqWo",
  "key5": "5uWcHJeCPjmUmHkRYza8UYZ4QLV2k8yvqASAMzPdnZxtKozuiYEaQZnxNSvV3VvsHi7793sCrVxRTesXBzQgbXR8",
  "key6": "4jtTQKPZWzpuRc8NAyueS48DPgypf95HikwP3j289odnHyreeSqbx6MY2VSGSXdNRwDhXXZ3fn4rU256E2bopqnb",
  "key7": "65vU4kRAdzTxeNXeizqGeKrGnE8YBhzCLZP8wZVStL26SmJ2bNVNtN6F6QK82Vy7AXDbY61BBn9SpKHUaBury9Uj",
  "key8": "5fVHxPKrC32nNCUXdmxeMC7aMJmvaEUbC4KUTZZzG4D89w3wcEnhokgb8Eebu8fvnaMwDCbnyJNxHiRGUcrtWhY9",
  "key9": "448WMPeHYJxhx6kvdt8QZQe3KcoEGrhGBHDgBGWrMKbqyps4QeXcisdX2YoHR5KkzcsNKaULnRE1JrFYvuYEjHEr",
  "key10": "356NvQgZbg7YoMRbc77uPz2VgyfyGFSfir6a7xFSfm9EdAyvWfndtFNaDKCah5c1FKBo1PobdK76dUiFUgYQjMLn",
  "key11": "4ENYjh7exbfjPn6nz3BEZA7KTyhz9LbvPDtKN5wu1AnN6Rg3RAwKDFWxHg7EAYNnCTu3YYmM4wCTL9kWyF4v2WVQ",
  "key12": "4esc9hiJtmD7oicS7WzPvK5CHuzSikRLs8AMT7Z9ip8ZEUPeoweCJxjuEtE76XRdZDg3jLZDNWCpazcTKRxBfATz",
  "key13": "3wZA245svaQZFPQvYASieWAQnBjo9nVEnezDEwG5XFgZqGowbyZDp3Fr8V8SYjVDJpXBEtYaPqTTmJLwEdEfYVP5",
  "key14": "3ATbHeC2pM1owPRjpxpCRi5FN83gYeTe58Vp6hC59xyf1ohmhQWZ1tGSpeWsmPiApvcmCe7yjBZtouUURnEtAkPi",
  "key15": "3sEcKmTxiN97JvqmyYMQv7qfePZom2phRhjK6YdS7wzbMJuCV9s6jDtPdy6heCGfTiZJVVrbLCP661ZUnWWejPdW",
  "key16": "5ouUMEB2DUb5fezGmmUiwQaiwZRsT3ecvUt8d5T2Snea6LTPWJb9uEPEwPd5GxUXLFb9ggACdMqovxNUetntyea3",
  "key17": "4YaVBK2n1HMHgX3KbDFNR5sEVVP1ov9yrXBRq2A9CaBzQ5fFQFRWFj4W8juof6UmNifooPJA5FmdiJhPwnL8Cph8",
  "key18": "5BNZEaSP56cGKatKowaLB6S5SEShycxCSkeVvcZwH5NpJKM8bnkiEKCcGRTPMyXfx94LSDygy8wSfeWgeDMqnUpE",
  "key19": "54epMbLr94hNHtVN7u5VbmLKEAmCGZYFXefFVd3bZ3XTkAeXzc12ELVPRw9eCtYwK1dKJgeLs81WKPTuNdZSQbHy",
  "key20": "3qVLwLfE48nHoeLRLaL5cKMNmAJDs3p8C7pMFTgT6wPQQaPYq5A7C7iz95arPYnQAAQN8DaeT5m7r8b16G6wTKth",
  "key21": "5fetAMCZcVebc4661o3sE9fAT6HxLRq7Qod7gXXwW9hQJtp4VnU2QD96TDeUTGkE9A8EgoXu3RpTHvJYK73aBpjX",
  "key22": "589Mi8C4nacLwiWTvPccJZGAUiS2VGC29WYnaa9WihTH6pFbrK4bxvit7vztSKQ1gGs6h9KrLfwUXRWJZLkb9KUn",
  "key23": "4JN1kEYCqyFFfwypUW2wKHDMP1UDhtCEJLyMVNyFg64KJRm4VzESeCG9oxAwkzZwTeRqmyCa64gbTUtofsGRrLEj",
  "key24": "3SX45ZQk9nXSwZd8SCWkUGtwzBJPsB3fc3gsCaSQfQ7MnSAYp1CinLfAiSvY8VmHL7dzs9pLnshymfxzU31KAzXg",
  "key25": "4PTog66YLMNDQUwHmHJJGcPFQPtZGwjj2AnoHHA7MArqrAHw2xpkGfEKqAcZyrAAUGCKoF81z97e34P38oKybVBN",
  "key26": "Wjbd4wqdRibz2EHFNNYRqKV4mwRjuX8jeNsxJJKEbkfEE3dxdYaaZafHE5LmFLuxgV9ZVuY5ji8YsdM1tfHNhH9",
  "key27": "4nPFDVruB6L6yemn2VKcHxzdACcVjKELyPyQicbkSNogf6HqTshNyZUXrWegynN3j4Um3siwSkr5ctPEns31jdvQ",
  "key28": "2HZjXGzMd2zLKX5UfyyBuMpeNmEB3EjZ436L36APHfqjT9uEk1GyLN67okTaAkJEk1mcgQFmwWzPVsaQHMMCZKPZ",
  "key29": "3dR6idxnacw7DHGtMvfawarXLuB1LP4drjiiwwHwgaa39R7ZFvMyntyqWVnqN6FvnTSXYtSKHPV721gZ71UTTxcZ",
  "key30": "3F2Ez5DUqJ34sj859BZrnj5Qhc1v9G5os4CN186rawmKrEJWQz7oZWpw4V4fRXQADkxjt6wFPmpbUXarpdYhVT6Y",
  "key31": "2f6q9pyCTmpSa4wSNmRhNoMGqDDjNGUEtVksJZeuaUrWu1XGGfUWMEN1iM8i6pCiEu6CQfX6ABAnFBy5tyzZefF4",
  "key32": "5PTveQcWvXf4Ci7vkDa6HyBndfEuU5GyMWAB6hHRsCf5WZotW7qXpDY8pPrcK7SLe1bfjVoK1jFdD3KQiHTnk13N",
  "key33": "4sUbqYzJkDMdPpPooEX5p7Ch1DMiK1y4d4zF14UJjV5PBcwqUAhzcppkupbbqrUcgDtMfaqYY2CqmxWr3j2baQTD"
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
