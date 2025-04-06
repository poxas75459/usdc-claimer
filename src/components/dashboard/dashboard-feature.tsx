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
    "mgUk4Q2Gi9axB2W9iW1Z212cXTjBTpiiCawbfwp7wfZTbBmcpghvAUyw1nCBJCe7WoYEQoMWYs7S2tWtoP6tQxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jv7rqWgXGYYCYzFvDdgZN2khq2on5CRvnMZVKzi9SZJNyabrDXHxrSvze4givM9iAy46aWnmetmqgfsEqregBML",
  "key1": "2iZRJ3BPVnJe1yPbjQ88muzTDe6WFAnHn5tsdaHZy3GF2xMXgxZz1CHAPinbF966ZL62VMDK8gcbmnnvY49Kq36w",
  "key2": "2yVKKna8omnftyNDkrPtsAat3gtFxSF2dzR8P8PSt9thErxa2jGLjBxnQhThp9nqSr6LG4kzxKsxiPcMQ3zfXfxJ",
  "key3": "5eDM4QsT9GF3uYmvL5gkpXFDp6GnQzWT7yfDBnDbzUNttKHxwAUdQVdd5peJb31uUES7RC5rAfm9UwuXG7wTnGTe",
  "key4": "3PAS6SC9fc16DigBQzyMrT347nAWEGc8WmzgjLoZzr9jG8Fchqoi14n3Q9U1ax1Ry5bZesD2bjToWjeLjqjVV3Jh",
  "key5": "4LsaXv1feUA8465hgV47P1eLPYQhx8kNHqxRH5xgj48hywRUG1G3mPScKnbMtfLcA6rSTDnuk8Tq7UjDsTscHKBC",
  "key6": "3vDDFKDqorhMgoQirr4s2DUa9m5w9XcEQPzc6HEqHAaJGFKBEHTruK6hR3PCqciYBRVj6icUaXiVXPQ38FEfTrYs",
  "key7": "o6cKMwVebRDnMGsUWevotnFhKvJgPB615hNVqs1FX3AG5gYpeT2eErhRP8TyeW2QZARLhLmUYKfhtk2LGJ4c8Dx",
  "key8": "569rX6zwBwEUtezU8zWgH1S4XvoEHiuryUGzXqKKWziumP98cRBr5RDcghQuxsK6kH5JxfVmiwm2YFMQKG6NPrax",
  "key9": "3T7SDX8nK7NACXA7SiDZ5uxDQMxfUxUnUWCpZrxrg5GTPUdxuGm1sBMjkXnwFf71aMKz1r4hL5XeiWUuHQzqPzJB",
  "key10": "4P5KMz6ZKRAQRJh5YNahPaPMhx8ZLYZrxWM6CAE4BBDjpzsNFybPSWSrf2RrQJHWtcoPDxU97YwKZfx2MHr1jmpb",
  "key11": "3wsk6QLMP5hv79KHPFPfv3u2EvuyqkRmnJ5fZHutdEEyjpafoqydSUWYTWmU6KGrXXHbMX73WDh9GzkpgkWbLGW4",
  "key12": "2PFCdoD7sTUnTsHKi2sbWqsfRNcPB6DW6HBuUEe2eh9Ron3bT1RSufpd6aXU8bSYpvbmTmzs6QLCFqrQkdFHqtDh",
  "key13": "3xsjbF7i1uuD1LFk9dBo3jrzwDT5yYNwgG58bKQqZk5j3zimHWWNTGDDaLJbDvxWLqNNphz3dbKtc3RuYi58Knem",
  "key14": "AFRFWrBxFD43XGmo6x5r46yKKErQTJxhXyJJqGJ7Qs1Df4HjVevKZeRTJabR7dF5Bg8y1q67cM7FaLz4acBNEwH",
  "key15": "2USc1RmF87nxpSaau3nUNpktgzyMkmpD75QwgsEH6ydna35rEHWWueYsHS27JcGe6QzF5C3weJVZJxP4Asc5QpwN",
  "key16": "628HovmwAe72SAceQQfiXNDeknWGdHdh7NmrPwuvPX4tFWzmPr6eFTpCk1DSXzpa1YqPtFFcehQfmkmMgwQ3hzwG",
  "key17": "2GMmVtLPTnAppufqd3ZFYSW7ouGgcSXaLxGKUUspptgdtqzeB86H6VyD3VSKakvDX4Xqv8FsnRuVUb6P9v4nQJug",
  "key18": "4ELrRV5c3SUHxe7HGh83FQqGueKzXoLq7YW5Gjdf4mDXHskti1ANgcgokmH7qZ9MPGpb34dGU7fHZyQmJEEEvpfH",
  "key19": "5tRCxHPLUKizoaSX977u58nhMGZCXqdATkgy8VfgZj9Zu2uRn5B4QFGGPzJkYq1qx9VWqCcES7LPvuWQLfbhwGQm",
  "key20": "45FNh6czXwz3DchwT91GugUSdbrosXVgE1NGUc16kaKY9fAfQzXRuXkb2ssncaGYuUCsBBkLn1MTy41Tyk4Dev7z",
  "key21": "guQXsLQM9SLLnZRnRTg6yAHGMH4BfXZcJRWtQJH5HzFU5KXV7Wybn1uufMBxisewmv3Tnq7a4CFpp4TaVP7uQq8",
  "key22": "7sLnqSJDM9EjgaQMEZk2nSAviTH1cXRbfGi2gvLMP3UU4g8444bLm8aKK3SawHwDi54MctjpU5cFMkYu29HhkKe",
  "key23": "4qKspBWg2pZxhRotVR3oDqxmr6BRLy2Bb8YBcsWWjy5KmkTjocpciXCdbUEfRgRJLuVf8pKJtkJdLrNQAYmKkwj9",
  "key24": "GqTDBjTAFi7kVLR3gQwhMCsQVsFJtJjPsbZH2ZV1Ehw1x7nwDCzWsHeTt3b3kEbw1Gi1xt3jhijRrVxzsykf1U1",
  "key25": "2jTBdLYGiAHSC46hiaATcKssaKnEPWypEH8SgYX8aydhho57V4n416uMYP6pZsw4o7WVaXUVkdBvfHHEJWAB2a5v",
  "key26": "5w5BMcdgd5HLXAQvKULxWAkD1JDH7REApmhbeGhPdtpzPc16shfQsLcQ6MbDfViikBo5FTay2tUowXJdBVGJCXtr",
  "key27": "y1CMwXLeHTd9ECaaEvMLNQivMx4iEG1g7d4vQEwVgvdXL3bNk3npav1nDYQgZHc164QS2iPAwy7YMhRf11Rweao",
  "key28": "T42NEbeRB1bFVGELzaVf9ugWTRyeYgreRqvFkEHZ4zwsSAiHvp45yro6KTfio1izbtCbSztqVWC3WCg8RD1LoAB",
  "key29": "4JWQ6Vbq756zdnRbEnSoxU4B75gFr29EzzqBiQs3dGSC9kiCmePe1uvc9kUivDN5gtS9W64o3gmFhK6EPvZNDyYZ"
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
