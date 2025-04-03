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
    "3VPKh7D4qJs1Q9CcrG7WKeVZP7PwjMV9WubjjGXSvs9DD5CWA2Fe7tfG8yQWkNsWnnaFpHj1fjnXfVJp1pfAzZzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QgHxHZTnM87FMnSCRjViMXRYe7ZmaseRQHHd8Srfdqgas46txp1GC2QpK2DuvG7NeS2cJvTYC3XnWg72Vv4M8w6",
  "key1": "UYiM3wC3Mp8jiYVgn5AfGgC3K3nLD4yyQUseSWASXnKfegDD7dvMdf4F8S7anMCpuU42FqwfJpQJkxAaQweYhiA",
  "key2": "5GS5n25JLisr1gdeRJGSjkoBcAwQBLXTY97RpCi8kWT3n9RY52ihXhNUJCUY6TebjpT7HNL6cqWahSyWgmP2CUCx",
  "key3": "Zaz9w7q9S193AsDZwEkEgwZp5AHsy31qGSYrSnch5n16dYdvuBamadNgcpUK4HEoWrBNQYnfz2akWN2GAPSNEzw",
  "key4": "4BygHNYKpSk71drnmKj3ApNR4RmWyyieD3YGQTA2Szgv1dtC8p92bqChCWGWAp4M9sekYPwVUQJ5dhc8By88PmYj",
  "key5": "2uSHpYgS8f6BP7ZdaTbr5S2kxDaYx6sfU1qq2VcYjE2h21inNpZLBDmYezSDjYSZGDEi41R3fWaKhk4cXDLpwsfd",
  "key6": "vZR2jjKgWVjB4k9FCrbrEYrfyDVTuGWrfVz7uenM7w4jAnMXgz9ANJQjgZC9bEL13Vv2SVReZ8uoWpFxv8njW2Q",
  "key7": "3sMzX8S1svjRnpDSudNj5orSkHhhh7AruCvznQf4WGdomcJvk8P34UqXJ9MXBVnz4DGf2XJyxygcrkoa8Px3GrZW",
  "key8": "2Xjt5B2Jy5efMx2sZc5Tqqu2haqDrQ9B3o7AoV8eZf76hjZfjeiTyyN8posauY6WMnWxgEZbVGqgXTuzPwmw3yaL",
  "key9": "31F1XK11tf61U9dQpeY2JmW5bYqtETdgZkFusWiKVAvfm95qvy4Eek9Je2brR1iQq3UB3rmKd37n4Eogyv3R3KJC",
  "key10": "4HbBnfc416sw8fUqK7hzDNoajVw966VXzoAarFE8fBrPp5iuxXT7LiFf68CjvZXEH13wqDqG5UzByCztnsAVgWQG",
  "key11": "2dSF6LsUtaLsn5x6ibQSdd5q1a8Sa8a4Xg7b4ZQxYgQWwD6p5tmeAa84m6ka4RHdTaswrAe9dcnJGtufPvsoY1RD",
  "key12": "5kieAW1tAsZbq1r8nzQsDh9m7kmhjnqpH8FRCnCho22qCLEPbAh3j89nxgMzMhMPvqLJGkCfAv1HiX71mVyZfN3",
  "key13": "4pdJytQaPuK6Ly8xa6ojDfxNMDLu5LS5o4zSASgDZtJJr23No2DBL3gWimYC5gFUD2oKKPe7SBNr3mLrPrUejqmx",
  "key14": "4udsygiKzB9ZCXxR87tY7zeQVBdjt8yg1SazgMcBCrvdCtRXx4Sm5thQ85wBWEqBtNwYuWhQEdzjFjvQBAkahhfz",
  "key15": "KgAQRQEF51JtgU93f5AzvqBV6qR4BaWULCHGE5rErbqfow852dz5x7DTR8JBSaFohP5qoMGL6BBuebR82M2sTCY",
  "key16": "5vjX6tScRJNUJ4BHgesHu3xKTv3yiLbBnZGeRBqzoKXWGxkvAz7wdXQytssQZMz7z6hjyWNSrg3LzHxZ83sMhPyZ",
  "key17": "2Xv7CDfsbwMg8oVzirD54U7iUvQvn5DzQ7QzzBtf98i1mFjLcBYvMyMcm9GBo4UA9KbPKsfYfFFucu1fwQYyWBgE",
  "key18": "3NjNHQUWfUiU1nPEKtfp197HRy25vxRJPPkuepd7rzUTpNnQtizzDiWYPdQZhschXgjNNArPPErQa4oRXTU1wg4X",
  "key19": "AxzzfZiG8JUYU2nvheEqu2a4gxZhy5Y6mWaLidX5qkwsLLQSUeQteiax1QnyZxniBcyQSQ1Z1oycwDFCnAdcwtf",
  "key20": "mymkQsuUKQvk3P9uoFr1cyeRo1GMV2uFFG9q5o4htSHn3xGZznX2ztNxaeZckYTnPuD4VHTvrrQjgFbzFKh23vb",
  "key21": "4nsxh2k5otsBqB1h3DeyzJ3ARnFc7abEnNqpmvUi2WPfuQrK8wpNDxbqqLtxMSrFXG6BN4nTe6MzHxeX88F5edTk",
  "key22": "5kKvxsRGm1kyXMzpMZCKn9RMwymU2oqAh5N6anwRPz3nryMQbJwQhLCkEGbC8ePoC5UfsGBbWtUQzx7QeSQJeHje",
  "key23": "2pgXJN7E1gvxeauDADMxNSAWtWMP4zkAzoh1p1jRD3AznLcDcvv72HcB3Uxi71brxKgZVYkjJ3xpF9ganDRzii4L",
  "key24": "3vZiyhFFeexmq7aytHxGyDQHUD15HQHieRn8Cox3h5usSG4rA3bzwffTe3ueGWu3vpPf2b1M161V8VNviKimgYkr",
  "key25": "48RjWPvv38NXNv3K7UVYuz2EC8M1VwiwWPE99tKKi3Y6Z9CrdZCckk6iTY9Lp5GJXLztPt9id9DjAgiuuGteVa3u",
  "key26": "2naYYYo6xwddJHJQaVQ5qSzSKx2sPvXyokiL7enm3JoSv1CjtvyGDbuZyfemEjuFr6jaeKy5rb1ncuRdFCTJMYar",
  "key27": "2aNEWn6LGGt4tJxSsNidcLKTqaV8FGuw7xmgwVbC9S9Yr7eV38kk6mZFC14gnJToPdR7uQ5MtGuEcVtScqfdAFWy",
  "key28": "2hvVGGi5TqFq9wNUuqitxk7ppPq9eNJkaTaxrnY3Yt799GKo4yE4ZQsPfLqgH6DAftLciV86onHT5RiRh6JRYkop",
  "key29": "3LfGxkJmmvoaHe2EYEbuZc5uKC2XtnaFUZTcj28L1wYBhVi5Po87znraqL7fMJWBPmSgHnKTjdETgobpqdyWYntV",
  "key30": "tghY2kMxGKG4DDmcX6JEkTrZXRmn7pMKsqLFUF66Y5ccG8AzstUsXLr4y9jMmQoFPpHYaRMitAKFzrvm9MC36Ah",
  "key31": "fv6Pnfct2qogbx8YnMxxSPctsDwmAFLwjtC1GuZK31dEz9pa8gsw6vmXRfo6APhqM9XdxRtHzHeqVW8MHDR48yT",
  "key32": "5kNKxJvWypEYgbFbTD5qewBBaoZizZxRdStRYyZiEFq6EzphevnE6EdXUo89A1Aeepwen5AD9jELZc2GwLTpoeAE",
  "key33": "2LnEapXYDfGPw5gEQiczBTW4AnKvoetgmereL66XEb9i45UGYnHgTbXUaBCZdeXoRj7t3HNDazDhuHiNBnEsbWPq",
  "key34": "4NhjYVmvYXGtv8cUUcPdtyS2Zp6A3xaRoLGmaPwqPtWfKNiFFRQr116SUPmotUn8v52WVURpQfKUChqRurQt6tE7"
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
