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
    "3fNknbT1jbDbhDZMF5CMMzc3qi6UJiBW96xRBn9thuh3B8pR6HngeUT2KUPnReN8nfKAUj6KWjeETcrFpiggeU33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YGtS7DmtrNJEaC5sKn9ZWXxjRWjvwCabxsirs629ATLm8Q4bBCanC4bmDGo9o4X9Ax2oiC32zjgwhdeUPMy1TDV",
  "key1": "FWwgb2KDGeKMqH7bmvzB77nCm51TNobfbaDXD2DHSTCxgpTZYntz6NzdsxiF9xinq7c17wXyEjJGPpospkm54tc",
  "key2": "4Q5nZMteigwFGuKvaSU1R6F5HppSbgjDcj8fjEYkfbqunNLbjV31kRoDTx115JwBGZo2LR4RmpXEPrAP3bZKZyDC",
  "key3": "Q99ALT3i91oXGaL723UEMdFtxrTvoXDF5MHiWM3kHBfuPYodKS5J7zfZSLzkR2GNKUJMZhAfhD4b9GHozR7H237",
  "key4": "5dxu2AdNcbMiC8Zke9b8T2dBY71ttVFvWW9zNY5DXGLCKs4F78UxTM4juqjor8UJiZjTUHDqizq4BEvD91yV1sLQ",
  "key5": "2HrMcffMBF8bjMWWAxXkPYbWYfivHJEeJ4RujYXyjBqSvertTzpkawVWLSzNq4iv5w5iWYRkt79zFfuCaukNT2Z",
  "key6": "63BeZuwoQFTsKMtg8B564hAKQK1m9jxtqEzaHhZ7kXo5kjHc1KhWSFZa1CSUVtaWmwY27N7TWSP4VpaChtcD7QRy",
  "key7": "3uGSPbnViDpQin3DUwfZr5D5xGktnnAitGviA5xauxcfUXWLYtHzfhViYBqAzdsSiAHpyMk6gwVwt4ZUwNRBFmAv",
  "key8": "5eQtMJ1CEEQhNtfAFraab3WRQSsFAYEaXKCXXgz24ksXo4YbgWteDTA11eytpEzqgVxyrgMXpfU4iUwZigEsmF3r",
  "key9": "FVAabDUJLUPMqiXwnZYA1yFtC2EomTQ8PouJ5WZSWpHLguR4zFs2D5oLLN8EWSYZuxTZXkTDuE1XQD2J8f553ks",
  "key10": "2QLQLCj6M2KjyU22F2nWM1Rr5WAs5274CqB8nMgcdta8MoLERxchqoEAhTu3VcRjFdj1LNDYuHCbC25raYyGZFev",
  "key11": "o5QkvV3BRQpxeBNhUH99Ea4iutz9RJMJE157H7MnPcayMJb5xk8Uh2Uiq8zEP6juFdPwtfHKhyqUa2X6PCY5LAe",
  "key12": "2saejPMw3raomMpfbDzNiadLJct5ztkTefu8HVoJzL8Hs1tyzJn7zeLKJzHDBEL6zHnZyiafZgqC8HVcTFe4JAVf",
  "key13": "3UsjttFVeeF5Sgp21xBkxGkxP15rV5R7LrPAeiJhRaSNNx9XENQPfgA3EdHaHPWftxpRNJsLphumx5rQ5py8Hbyf",
  "key14": "2Y3Ht2dgMK927Rh4ZVh5kTeQ1AQUQpHvKfRfdJeXRub7Vsqaf4kmLgr98Aw94pKg7cR1A9Bpq36Hi6f3jaRsBsmi",
  "key15": "2F6yvMSuxoEe6tw5w7v5b6gb9ZT9QfMsiWXsCP1DYC6NzbvA5hVPy7ReYrRkVpakfLEdiZz5W5wqU8oY8fqeHDt8",
  "key16": "2ixe6KBWQF2MkUxq6W7spM8xucnB3DFcQ2GyKnmteyeZqQboUgrr3u67Xig6nwQMwtA5zazGk3tmZjcuxubRThjw",
  "key17": "MWWBNiWwMhtQsWX7aNj5kaLjagHMpkVUBqMA4mbLpb4YQHdk5tkM8bcphypJKk2FCbpgTBs3naq4hHPsULm2P77",
  "key18": "4TJ5rSjbLVMVLPENaGasfjNSn4M97QGTW4dM4icqpLEeYmJXgrkEMNoTaLFt5Nrcu1eYbRNyZZ8VjyJyzc478gyU",
  "key19": "61yKahe7gTSvZZrt3WbRzXmHnmyuAKSde5xj3CN2Lovna8LgghJ3d8hTtcwpB39MRmnfWK5E1oJdVEe2khwApW8K",
  "key20": "5v8ThDmCZsWuX6NySD1VryPqd1Wj7hUBPxAqBMh55AZANLLEdwDEf9EDK3tHdDnxjxT5GpMLykTos8uoWXNFeXiC",
  "key21": "37Po9aomjKvAAYSHax1ViXbxbQeLF9CYWM1V4it5wEXY33vixv2ym41wa2qwiiXsrPgXHwedsW8p9sKyFfFUYkQ8",
  "key22": "DUae1JQjvbt8G3NSCWuhMf5PEgECvVKRaWMtEKzpvW9BSXf5RR7W4xavD2Am1ScVnFpaS2CC2QW73dNPyriDCZx",
  "key23": "29cp2Mwktftnz9Zuv9rB1AmR7pitvpbu6LKdczniacdD9qzTHqDnexqwQA5MpkjT6duop3xrEcYB9v1eDdsKQPSB",
  "key24": "K8Eh9sNHt7EkiSs42euFnH44whwW9xep78g8NkR54nSCwQn45QfjSe9YUgYf4x5cHqeMHNTBod1GKSjp7U8DA5Y",
  "key25": "UvgfJMw8kJLjso4gryEe85Ggd4Unkqymc9bXmz96QP8BXzyiM7pR2n1WXPJqCDPU9HhftRD5hMwv4xhDLBGy459",
  "key26": "dvFHRt8Mq2HdhUDizVHFN8qJmGy3TT2i6UtUwJk5KAEEPfc63AXjSxXdPKS7RbTQxPW1XbjkfBrQXb4Q2Tcc9g2",
  "key27": "3qgjPXdiYxrvTVuRkUP2pk76drmYyHjeBGfrSd4X3Jr3ezVVXfoJNgs2ndzXJ1sXgKT1Rk6ECh7cnuzsWDHav2TN",
  "key28": "47TUtJNBhwR69HSmXZUH58MYtKaCAd7p261s74iLAag8nyZKX4xEFrdfrW1LZSaYoj8j8XEB3L1Xo2pSQFgkuNYW",
  "key29": "4kgFtSmhtSVwabpM7t3Z5Yo2JdUAAgf2zBxjmJM1U7Cc5KQ2fip39faNjrD61gNtcRA6GmGU4oR1FUre6eAe1X2r",
  "key30": "524LGofJgvZfKXs3PMFREKaHRQA2TWcSauZzkxusJx6Y6JCCqR9sFsUrMVCCDiCCmJbNB5UA5mjwVbvb2FSpFUro",
  "key31": "4bVEYkKriewgvNEjB4zMZDEK12T1CFMKULm9tLMMVH8vtH6TVWY4Du14oB3qBH6J7L9d7df5WG5HQ37UC5M5EJp2",
  "key32": "5FgM2Lf4CTHhrqg6kRgWGzF6xWV8RtYpBPJ3LE41ju5AusYk6SDtamtGA8RVUhAyeZrgbg4fh45fQxRn82ZaJ1eX"
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
