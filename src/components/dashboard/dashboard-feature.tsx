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
    "3CsnAq9j59wyFrAMFPuJ1fLEXRjG2P7k6WLP5VwfRdJBF7jwUGcQoxviXFJb7KuTJa8EVtCbcjvtaw8ggDDiL5gY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XtGksGMtBUCbZ2hcJj8uu9Vpbh3tqkDMqWkTR5BWQACEPAa2zXHecghCjgztR2GvKHnhQdXdj7kio2TCRB2JXKK",
  "key1": "4y4nTFJgbrJxKJcUzaiaJac9Gdbr5YTHRLWvNPtCJUBVNFEc8z56tawsTGfGvU8tkHbM9dxGug7L15KoiAgYZtMb",
  "key2": "gTEkxUmAwdJjCuzBnKhBTx3jLN3FdrbV8Z9zdxmmzvcYCyhkBqzBJXBfRSsXtruBkbV61SsVTaue6Ct1C6YtQHw",
  "key3": "3iTJ1CcXVYMNqNTxMxZDjkRTehEy2j9hXqcwXXrNyuUGsbMdeWEhrFYR1MCDAPkPZ6oyU9xyiozwwKVyXbMtHzvr",
  "key4": "5WUbhfbXpFcEXzPVSh7m2ho79mk3xyAdoK9W8o3bQVjJmkJj7YyA7UdPek3pwcrWZhH8u1xc13VAz2TDmn2TLQ8X",
  "key5": "2gRduiw5r2g8oW9bdhfhddbQWJ91SqJ1ELa4nfz9jgbnrv2DjCTKd8snSMoumKWApAGRx7T2DxqPmB6xJjxU6LqN",
  "key6": "2zQVR3X5W8VyUwZNSXJmKcpj99Umgy34TxjxLjiMwsY5dm1Yd732xtDsJPMpvCXGNMmv4T9AMwP6JweQ93cMS4FC",
  "key7": "5uBYNp8AX1H7et6n1iK3wt3hLPPGUoef1sodxBHtV9gKNjw5ubPY4AXxd9Zs9DLYKkb127fSUNGaQUv8oKAcLkXh",
  "key8": "4HJh3LV5MBmkvE91TVoxBN71ZSHpRbJWweo2iNMfHLNVEaPYCcuHuWMGi2DMzGiUZe7HddSPKKrZKiNmem5bB9Sv",
  "key9": "41VLKtsgXn6yYpv4SjwDNzeByY72baib4pNALeJnNga4sfdrwKQDKbWbptedZ4g5x8C6kVYKe1NypGT4eYFB86Uq",
  "key10": "2oaPwsNN9LPfwTig2qHpwYVVt2Es6AYyZXxBYRHhkKukxPjEwvqjRXMGmhKsinRbbXHmhF325a7b8SS2U3iZz8fv",
  "key11": "42Yroqh1GXTcuHd6rD5ri42PgDp22sHEGCDmUJGRbFvaXTS9VYBJkBnuDb2D3zaQmeL5yxwoQFWLxrAk1owqEJfx",
  "key12": "33rK6d4b3w6nbBpEZzrdBd1C8nHp2VETyJQCdNXvMRRBcpocTsdWf2BBKEFQW6uukxduUcTQ3HCUcfkDskvnXo5C",
  "key13": "4Pqh5dapbjETVtBxGoo27wW668hYJxbym9h2k845vk3zvfLCGjNJVwgfcn7AMdhWAz64fNhha7Jdzwih5isutiSu",
  "key14": "431uMx6wDVDh4fiV9st7qUSn9BJRYM22jTDuDQ6wXjhRgG1bmqhCmwE7Kw9PMo3MBhRTd9bPLeTnAjPJC1uJT1qS",
  "key15": "vPtgx5WS7yCcWoMrPW4gmEjrdg7u9rGC5HsgsPjKemf8Q4PdmQZTDKvHrH6PRR9UifcFFc6zmhRGYBmBAA2Vfr8",
  "key16": "iS73FYhmqJEu4kagNzHHdNpDxXdkjZGcbiwHTSysGPREk7u3Pi9ja1MDMksgACsqu2YA38YguiAJ184TWUq2zLs",
  "key17": "4NAnuyKxjqqgpe3jFf9oTQHYWprKpiaULe9oDiGjExAR4EKyRoe7AHhLSskZAHGvnTzmmveKd9681tCkShG2kx9o",
  "key18": "5Esi4DZissiBL8orTR5G4Kx61Lx7Fo3pKUcKw5hjP9dQjTHo9m8ox9aS38Etb3emKnTFBKL4m84fgo6SkvEpm6uS",
  "key19": "SDcJT5jxbW8F9WcgsBiLFLd28LP1s1p6jKJVyFLHVVS77cyuuBJUyMmTs2qtrht42HyenASCb5GxCMownrmiiGr",
  "key20": "3BkJYxmx7fh1tV91ztro59feZ5GhVtfE2J8Be5B4TWKCATKyBMDDRnuA8mRZqHi7gGZVFSAgb9sr61JrMwxGAmoj",
  "key21": "2Xpp3sxr81p2r4qgNNqEz7z6XhzQNHQLZTRBUcGh2NMo43GuRRq7eKZugnWC4qGABdmbNmdVQMHYs8SQZ6SrTszS",
  "key22": "124jxUy4Vs9ebwMX2QdAd2XwcD9FATUb1Nz6N8eViWvYpY3sGWJbGeoLQDjDzFRuG6umRYv21NMt7iYM98MELg7n",
  "key23": "5bW4P7EwnPrPDrbhqMGdrejmmnu7WLTKCHA8xEhjeVvWKAM6SJhdagkwNFfYM98dKQh9SFfYGXZB69fXuDEJLKAn",
  "key24": "2xbe7LSru22G3bsGQLvXzDFamE4GmRLwx7qP5qb399ma8LrrqTZYGrzModKggRwx2FRrrPKWHaup5CBoi4EZVNL4",
  "key25": "QeHe3BQWKjtUSnfFsM1gfexrw6bPfGpBYg28hwJ5XaNjGK28vQrFyWKQxfL7q9dxwek4NRkCqQsAFJfjNz89n5A",
  "key26": "hZ8wAFrrt1MewwHrBapBDmBhgTwLujGr7WQe3w9TXj7idKP9HDZUMrMqJAAqfUDE4bCYjvgtvc2HtCzYiMJw5wC",
  "key27": "62yS3dJgtfKj7x5NpJ2XXt3b6VBNrLX3gaP4raTL3dSgwnBJPD1i5ymMsKxjbx5YgUg34tVMNsTMerirWsnZEAr2",
  "key28": "3ZbeZHEevjLdM2kQmoi1GTKYCM2hQazTwrPExurgcUJ9qZcsHcS4sisQE3uuGbiTPcz1Ftjqj4qE2gCL9x8wbLHY",
  "key29": "4wgs4QRquyNSPastqm56B9jScwZanWhWQ77qYrTcVFMzPDNtxe7C3fNjeph77Fs8J6rpSehbmwpiG8TDhCdopgiJ",
  "key30": "m2V3GbeNBk4qjTqTGNoEyzHZJH4svEBrZ5khKxuxFqVXHMEvC4WMkY7JfpoMn7jDJ2ef1sgeHp6cVd6gg5mAyMg",
  "key31": "2iffGFp8iKZ3o2PTsBLH8SCR9TtZY1tiVGYSmHcmtvu3gRWNmc8aiAMVmGi9H8EXm8kChWJr7JP44dNt19WjqZcs",
  "key32": "5gZwxrn86Nbn7PkxA72sndgvGbtV2TAQxqvcrN4LJrcQVtvdshzFiPUWnGDvfhNaBYqiWQGgWYpL3o5Ah17ddGaL",
  "key33": "23NyjDRMZbbk7xQuwHifLVRT9CuLNdkdNzMGjCm63BVcUSNfrN9xXVw6ZiWHDKSLuyocv4Y1f1ahMHs4CJvgW3L8"
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
