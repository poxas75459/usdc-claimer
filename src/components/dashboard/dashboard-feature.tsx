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
    "5Uo1B2gMLcAwH5BaLqDbx8fXRspnGA5F6mAaHgRZCu6Gj6CoFQhNsMxceu9kZ9viWrzGNKTZvpX9Jt36wvGgrABs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nKUfmLVeZAe8mKB5DpxXHeALDDe62q2UvGYmtvjJ4recyXzV8ZEkakdoU5JmcvksHcQDBHBvm96BrLeuHUAXFrf",
  "key1": "5mNDDKnBgakj38uYrcv2jFwkHVbUuptvHgj6sXi1K8Gf7anjdcdYVA3m1cpfaNUxbhx7MQrypaaZNGSRjcPa78Cx",
  "key2": "poHcTJq9y41zUNqfrDYdXmBU7Gi6yJ4dxV2bvJqbsLFKfbqKz9uMqRdk6sZm55VzeYqpyFq9qBGmbtVA6ij7gaS",
  "key3": "9Bb6rwiV2BErRTVpi4QyYS7XhPXZRWpJkZ6wMK7XzTBbRnAxtq9FEvUDZjEA5yXZ519N2hJzb6JLrgBJoMw339f",
  "key4": "47QeQnTVKn2VqbHPRCxWLHiQsS7SzPnskApjimdfaLVBc1PdkFzd9uH5B2PGbSog6qT5NXAeoMsMdRXTjW7cUTXz",
  "key5": "216vAHii5CsLUFgQsh4M4xxXMARzACRxDaVHHNDEfGsSh892EFHRdJW2UjVr4xJ2M2fatSM8wF6QAT7bvvWMoHGb",
  "key6": "ByspaqejPm5e5VUaz3dP1oRwkyoLvtp265hQ8sSVEXuwrh1RrNo9brPXZY8vvJ2VREWbGbWeqbJ3HYrXa3x94ev",
  "key7": "32Bz1espFJSF5WozEdZncEDr7XkRiStZKpQ8AaLL4m266gGHzFrVhX812nfTJFTKggjPhcLPrzznPAw3nBs5sYmF",
  "key8": "5yPL57p1knXQWvvzyjpts7dpMwoUdt4KRe6rouMaqtGmHUUjUbyatvTW5RA8ZAPr2cjSk5wDEaZrMvbmQqM2QMQj",
  "key9": "5m8rGu43EWREw3srthMKeyqJtTpU9Sm4wWQrTCL2KgQ1KwWuUjgJRjM4CohZBqwGn2uVGbyx6AmN3Bg9mzmUYGkr",
  "key10": "KFhGd4z1w2xCsasQTpuKGNrmLVDgejnFZ3TNdxcoSxqaJi517Mo3AnoQz51Tga78bC2rpCFBGhRH3dYL8GqGRnx",
  "key11": "5ESmWwEUdySm21sCpGNd2Jnrna7AMTUcdztDpnCXZhuhnXN93nuJKxzoFhuU4adrqs3aAYAWP9xBdcvoHL4Uckbk",
  "key12": "3PGcpHmyV7KfLstmNHibNNgu76fnmeETRCjmaCWh8y6sU27B7Zq8sfPpXkeHZPmDdbCejMwg7zjhaZjVyWMM2x8n",
  "key13": "4kQtjQ4tBQx5P3k7ro38LHWmdfeLjAHb8Ya3swUtAs3FqL4T9EQK1dYsbB5z68kSd8mWDA5XP5aYz34mpux3dkLi",
  "key14": "46cpJKmW1RUJh4sHvnqfM8hkxQhF51h7ocSfMkxgiKHJYmCgZFvn3dXxgARNqRhhqKHQhgop1orJEjo8KHqLZwsn",
  "key15": "4ZswGTcZp3bGtQU7DSQWthE46nGC3DdpdfZDCJWdH6Cm6ni1XfG3s4cGW9zNzEUxmbRFfvdgap8c5v2nMMFJqe5i",
  "key16": "3ABpyQsrj9dN9i5ExcABqd7Sw379rMT7U2zY9Dd9NBaaqsrQ5xHsqqBjgkjNew5Y56HPcSVLGQh3T1pSV5YMmexn",
  "key17": "67VmsE7fBy4rUjLwt6XUKC6YjsNwCdozRAfeuMZnbYU211sekxL52rPN3ZMqVoYYTPsDmhXKbkRUuHg7LRRCHtvG",
  "key18": "4vCbAusZoPoCMpGR3tVV6BSqCF4v8yjKA1UkEFLCijcCU93ytwbxYcqXEPWCzLPpjowkJ2ZCToRKX6JmSK4iNhVp",
  "key19": "355WRST3PPP8NtKeXk7WAVFDpfM7vzPAf6z3swrQ9uUkfpUKS6LKjzmhm3sgXQRJT23BBS2D5GLLq4xKsvpMRPwp",
  "key20": "vqaXX6DfiQs8aXesKgijWcacczAhcHvxAKUiDeD35oDK69z4EoxWc9azD17V143hB4WxY8baaAc7tvFDSg3vo2R",
  "key21": "JwYFcpE7ioD1bw7pu7owXZtsqfFL86VJXMoKUh9116cxy7eSf6LXJ8eEVtv7Rd9qAUnZJWQhpZWXL5bdCNGzyw4",
  "key22": "5cpAxbQoxzuhJ7gMmgUGXkTrSgARrNNjHoVrG71TY59xt182LZeu8MCmyQuU2Ljfd7bdWox3zmMv3keXHAXAoHnq",
  "key23": "5MnocfUPDgigPnTMaBR9WBmQjhNqWoHktErwQk2DcbEvyQBmgXVK4aXWxKuQrMnjDnyFUiLTjqfGakwMg7dSMCaQ",
  "key24": "4xGRdrEmuyz77g8Qrrn7r5BNqBHtYMZnauZDvPJj8dsXH2MFk5GpDWxL8ECFSyS1BFooKUuPc7564stnVYJazFoB",
  "key25": "Zd5WDw1mnj4sKgbU5tDibYjQPj36KjQrQAqkymwizK19sQfpffkvpijWyZemBSoqfvdHBASyqAe3oYFJRL4w73q",
  "key26": "4tS6b2MM7k28f5BXPSDZxgXWKHAxYZqdkbhxFcYx1szvUeXMzeUKxy1JrmCTq5BrbRSAcJ2yfs7YffRz37aC3mGw",
  "key27": "3nH5kMakuwYQ4PLHJP3DjRQkqJGhAd1cDYxn8Y72J95kqaxGwftnUhNTY7Hzg57kRGVe6CsVMWAhERysZBJaognT",
  "key28": "56hbfjNpDDRaesX2uXBrUJsd7vcMNU9GSquDQYwscRAGiPNVRMarRP431Y6Zx5dKNoXs8v6PbKjiVXtN3pyGq6PA",
  "key29": "5zjahjJfb7dfo4GUkd9Xf3nVgqzMwKjakrCU9uT5RF5GZwRkjLMrmt58qceVtR8u91LZD8Lt4L7Yid7qMhXQNVtL",
  "key30": "5KkEb64hwV69Ri2eUWSRXXifqtt9NUSCMHWqpFJcZdYTCmvGoceNUSmhbpx74YmFTzKhMD7vm5EiA7fE9Pe2L3ww",
  "key31": "PvxNCWe1zy5UkujBNdZhf4tEBapALFihu2s4N35KsDJvZFAqkpKVg2iCEmuRr2uJzhnRdWEZbCpK9uiCChik64z",
  "key32": "2XKkpjZZjQ9VmzwVrgHFF3bcoac8XmXk61GdHCMpxjoegvcJjr35uzwaYsHjmVF3sWAbBmVAzWa2NVjrk4gL9tUX",
  "key33": "GyuAL91QofTrRx7rWDChH4XmMKtjE3e7SFL7cY6c38o9paPZ1x6JLcWZ3XT7osFeVpdgP8Hb8T5TcZTormtEhGa"
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
