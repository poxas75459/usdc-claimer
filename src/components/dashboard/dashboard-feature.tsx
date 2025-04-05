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
    "5oG26cZgYo9F13uDVVpoZXnbRPPKbnqdo195C5LJa6tj4zX9oGRP1YskEGinhoFY2MgcKe2QtbHbE4rKKcdTWvFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RECei74s46EtC7yKdVrq5KpkytwzqyM4M39nwbbL4XpENhT7wFYwdWV9EDqZon1MmaSw1yxwhMcx8hGqt8QeqVM",
  "key1": "4gMgo8yNDQzT8g6g8PBCK9ngeX72WVpmKsXsb4hifJvUhzHZxerAQLSFbK3t37Xzy4G5EsfeLp2wzy3J1Ka3Gq4x",
  "key2": "62NLf82Sgkjn11vddNaTyG2JctBq118YkR5tLbyq9aay2CNVZ6TUd35thG6qofBGWnd1Pxdp5GTxvBKtSAKV9WAn",
  "key3": "27tNL3TqWWZUKRYbPB4vbeYGqDvX4WcuYVXzKmgDJcxqoK8RzoRCmgMLeYT6xbKvm1VVLcNfAJ5iSXdGTE6afDWL",
  "key4": "5pM7U5k2oKPeAPxsSBEWrcV47XKfR7vEXBpcdjsxNP6bFu7bTGpMQXbv9rNXikL9vVXbkkeK5xKe8nvGSRoYvVyE",
  "key5": "oeBpZd8C7rmueLQ6yGsJwfhdMTbjTpjmueVNUjqz8gzntCmDZGZwq834zyhKFpJDtj7eLFkZJg6suXH6xoEmHgE",
  "key6": "WpEGTZKm2PLQXBwWcJ4bTisEpqzWAwxhs7QLujkMsNkPiNyioq9urt5T5oeahfuZkjiForEUCVJ23xZQwsXxmYF",
  "key7": "29apZfaZdk48WhGg5NPJ1EfvQipWwiU7XQVxT9H2WbkGXvWaa8aQrQ16Sx529WQi9RXk2VCqX1zWWDTpkwSuF2Ai",
  "key8": "65g61HnbjcQQ5zDFAkDMf2nq93BKckUZbMsEoygH6Lb59WGx1uX2LbeQKVyy25iWMqJMkkHr1UpDLigNKSvsJtrh",
  "key9": "39dzj5qYQ3ZG5H5KSAE7V7JFu67YUJad7uyfqHPQJjjVNrSU1t1w3nAdiAdW9EHqQ4E97wdKoscw7Jt3UMxLhasf",
  "key10": "bRe9Tpb2Ji2eiyQN7rC8zwquQXE6kaUteAonqFKKMxZZLW6rxEQ2K2tkf71kR6KAbrfepaHso8y1PAjgRu3rKAV",
  "key11": "5hwgSBckL423xzD7wTnr7axCmcjoXviM2RvU6uzrN1KqkfE6zirc1BpdrXFsz5AsbuFkjhpvHFL8NzLMRMNMAyNk",
  "key12": "3J7voEkUFbDDvJdgGo2LMPkRurCLsPVeUQGeeQXR6uw7tunrtYUW67Bpe5gteXuEc5nQioBRSgveJGtJuPR6iF8Y",
  "key13": "3cPNSGZf1fGMa38zmVezdS5joQrh1QBCBd2xAQCnXLd8wa8w2HXqJ9XHWwVXfdizKdTjLyzHM36gkBH6wqjUa6aS",
  "key14": "2f6hhq6sPyNuLzfguJRfiD7kTQVDc7kZFQR4oSuwShPaBJWgxRnRnVNcbmyk1GKzZxB2nxDM1aJV18fGDPds6EBL",
  "key15": "3YLwThhyUMcJgrzFxUqEAFEi2tgzCDzHbD6sEYgNJQ5jBUduHDwW4KXFqt7Y3kijRxBwFAvx3zEJfjL6L4NTiirR",
  "key16": "2Tqsnw1q7BdRpgwHTTtSk9xrQ9WeeUMr3nR8X9rcK1LUpSigfEQw6STb725qSUnzVqYpJu3qFpTsvgmDGiDWFkLw",
  "key17": "5nyBg7Agk8UbE6dZMLpeaxKVnJz9eVmc6C9cxtSALNu23x94ghVqQXKbmUMGeRtr8E8sQNQKxzyhU7QLaDdkX6U1",
  "key18": "5ep6ukmq1b1bg71U7UCKW5J1XU8EsCbWz6dGdH4bSUwQ5YARx1qwNYKHciGYirH3fwzSAvD2HLCRc4XY3cw8XoU7",
  "key19": "sZioR6Pis7ycpHZVf9cx4CtWSevmdfkatRxCYyQ15fXCvatqmXKtpY1Wqf5iF94LgYgsCrDN9HigSdUprpy5rbG",
  "key20": "iFCTh8gf96Ggqox4dkKUjaGuKkq3ZzfmVbufLmdkt5racB6wBZgDaDXoXmSj8nQTspkvDWtb9NR6ZkUKQobxvF2",
  "key21": "KEn5M2yyjh1WPEzAzBkbd3gPZzGBVpnwWFR9s818v2w8BPAt7XGoJwCSR6c6YNnKSQ3eBesRD7qLZ93Pnuj4H8w",
  "key22": "5UkvuVEiTNRBsLWNHxcixHJsx2HUJAgWD5sSY9ePrKGUpeMrFp8hYdBfeeQejAAJ7Eta6PNMN7h3V5aTSA5ir52M",
  "key23": "4KnH9igbUzD8gB5uumELd1xKgMgyBqmNk9kJxniTst18RcWWjaAZ4eF5HsLkLoRU2womVySByFXhSyMVhFG1G9LQ",
  "key24": "4UB12vypMQ4PHY1m56zmHjgbkFpU9tKbFzsppeAgb9XWzmci1ffbKhpJMwCD8pRrV7JfgehT2s32rT18hi1KoJYr",
  "key25": "4ZA4vn7BgRkt1qvK3FM5cZGcS1Ur9sQQcdwJZMfdC4yxVeHRuooPrbj33zxixxSH6RAJfRpnsgavzFeh7VkiEVUc",
  "key26": "2zbdDxnKesW7DDAjDeHK4aXbrvrkYifqKr18Hj4Rmvqkp6LpruCRLcyYy8vu8sZ6jsqLpvEpeBqJPYCVz3cyGT8H"
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
