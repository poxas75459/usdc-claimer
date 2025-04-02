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
    "33Ksgf9bcXeJogg9urCYJiFZUE84peorHjn6t9fTi9rPLTfDiZZ5UxSftt1rFP56XghfYPZWj7jjTbU5CrYWohYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SXa5ztiudW2pACG27cuchZJ8d2rxAnTsdQrrbiWEPQYWvpKwsPtJsH7TM4cDCvEuqMHWTXV3VqBM4B1MyadaaNb",
  "key1": "3SxQW8cU6B2fDkbWebohRTR8x1u6L4hW2bxEXKfYV7ATR7fZ7zCEgY5fDHXA7TSNSB3SU1qs5qYrUwtKpXysFZ37",
  "key2": "3hC8vTnfsDyLcG3uaMgGT16PTTgX4Q8LbSKEWKJMqPdRXYmiitmKXMCwGA7iNMuEzMyy939W3D3Zh6ZQqnNheFsW",
  "key3": "43WM5viWtcFD3JeforYPEgyS8XoFk2gfreTXpyJ6tsbXPwiWwFu1P31DHQ9yL22Xv31sooCQJVZF5BG13AxjsUER",
  "key4": "3LJe4cWcq1q1jrHHVKtCTQTdC8aUZptM99Rz75zRhf7cJDFwEbd2rkpEzWWhWx9T6gNP5kdyxFLpvw8ZNkBkojBF",
  "key5": "4xxwwBew6CN4J2hQbNgUnyGET9DZSojJKUi4vjEUZGpkdz8D8WhXquWS3wdmt3nFw1AK5wzamhQVKvPFoNiaCBbg",
  "key6": "4UJLXuq8USbxSLRZmdhHD8BBfVuqnxzs13kd17vmTTASeWuCe5DDGh5K2CK86cTfKFmhz5g1cz7e5E2mDZBfcz7K",
  "key7": "4s9aKRHxRbjLE4Wzz7fzjdvN5yBvZHr8FZyBjXzo7hLKBbwCRYzP12TQtAdnZraboqv7oGhb5HtfiVnKuzPF8XCa",
  "key8": "5yhErw4sWSEcndn8G1gk9fFVuNbk27vC5FFAMgLhynGYwVbMxkHSiprH6xsy3oaAHwMk5kMzJWY9BHrFEmpR7HbN",
  "key9": "5CmWm6iHTLv11DdEH1xxQA4vEc75WUT1uMSkGv14xLY2gU3J5zHAApEewHPQtbrb7c85mYDSRAnN2HZt9ntijjYU",
  "key10": "4Wc5cKgHiXRoxwCaRR7knT2HQdiLVkaSSaiDXgERTvEiNnViTFN4ctE6yeyCSpaLKbprBkZdm1adjAwnF2YcSrrw",
  "key11": "5mn8QgeDhty4t8M8kFtgJ29i5fWLzbRRvWoFze3HiaC3mTrJjWygmPwfGFbdpVLLMiUGUbkjJnwNFserZiDJRKXx",
  "key12": "2V2xDn34TFr1mUhbHtPYUDdXU5zzY3mpiKbBfBLbVxK6YD2gZS6jS2a8AA1Mwc51SqH9wa963bSxfHYJe6kB77Fn",
  "key13": "5JQf46rSEittu9RBeN2woVq3143SCX4fugSD6HT1PGxbCDfQDz1Ujs9P9TuvKc6fFZsBMNexF8MUmqo3XWNe4btp",
  "key14": "5JQpXng5V6xqZKtuqttUrH32w8VPKEJ7Bq9oRca39yxWcBDLhtwvkPPPkkb9gNxKHicRCfyqtr9mgSh3Qss9CfoS",
  "key15": "5aVBkJNrjeH5x5ifYppKRxq7GEnH165KJ7wYM9U8ESUa3AbvDYVQYhwiVM39RuSvKWCNv3tJM7LLRoX4WLyeKav3",
  "key16": "3v4mi5q5NU1kHjw45613dfVCq82TAgHCCiz1g6hFLcKnvhmE8QpYh8piPLkJdBtapWF1phdfh2QbB1ZtTcjoM3gK",
  "key17": "4YE3zuCmGzh87xe8wbKruXLNwgQhtDngzbGDoG2SUEidxdFmgLDT4qun7fyhCaN4tzXNCxi5dcvKoqWyNcY37vah",
  "key18": "5fKAQi3TzV7pXBDUbQThHQEjC9ng8aR8MWnNTNpg6zwFSiEa5xQcZGWdDactRWgYmv2CiRXsya16wfDdLrf9Q5ke",
  "key19": "2tZEmFRJmnYZ4okuS2BtEstBP3zx3LdJFYpbZ5FJ6VNDF9mZqDjo6AGcFMCnDYdYDidAYH7VM1i3MqiTrAnQMNQu",
  "key20": "HBKP2YsKiWerNNSHkiHWGLFgBQgHpMc4aMYT1GMvAXRi8JByicuCoF8VXwrPTXv3i1nqMCtstReMLm57R2m6VNe",
  "key21": "X5S8wZupgXGtF4wbzKBAFzTuqeMPuZe5vEaq6o1HxGq6eYB1Rg2dR314tCbnyAvPH5jixz1fcFnvag7j6RKoKSX",
  "key22": "3WS8JSgMGfXh3rbbUhtHLZtEdmbvz1VCH4R3Z3WMYw9HMc9GVP9pjMAwNy5gmgsk2FtWuKj34sX7JxXRgtakmSUR",
  "key23": "3fma8JaRHbLaPFZ5tfpRHuFUByW7VGkgMjWKt2yoNxbwhHZMVcdwPD13qcjV5yLAeFEh7XwfTJ6yt2iqpEgQQgm7",
  "key24": "3hf3LvTNDdKoLk9cTHFB3AYkTpiD1T4qynFUFKMYGuiZLvDV776pxwboMpg9zoz3HT1J17xEuU4wf2zfZmqeksuc",
  "key25": "Y8kNuf4pZsfHdNoMtnBtDNorSX9nTGjGN8hKAEtJ5TSosJLeCgTuATNaDYmyAwo4BGrP7HW5VxYryJYvENosC4Z",
  "key26": "62GBkTpyifY2DLdnqRqEGSuJCywwcutiB5hpdVpfbVpSPCks4sztsrqDz7kmxEdemJE8KZqGdybfNJmRk6cipSaW",
  "key27": "5KSf1uZK74hZynAUnpqEW7X5dy8sUyL3rnEXy4BEX2H4TqLfCD4w37MwQKVXZbEKK3i6CZvHy9s7dFq8KtyYg5sk",
  "key28": "4btsnUuUpqXo4mMGmzwBH2mhJMk26468Rb7i59utKtHKP7CiZH94i3oTuU4AQifad3776PYokj2Ncx2gPjwj7xSy",
  "key29": "5cF9FPFuKY3X8kWRyyJ6K3cbXPYMUE8FNb32LtW8vimSM86d7viCaPcuLf9tjEtRSb3ASewTknuZ9e581uPbM6D6",
  "key30": "4Wx7mzEBLZGr5S3FkxUHbZGJHLJUGLEX9MU7C645j7yqr8926R4o9qZmPUZG8jiSVDV5rgYcWko7MD9tKjGVW7zf",
  "key31": "4YqD7ekYSsiWm93ERi3u3E8oLdAaRba1KAeKDmkiR8P3drMLU51r6Uwfr8z8svaAwR8yrrsMnrfPj86jwPuFbVfv",
  "key32": "31sgHA4yX2jT6EtXcVWizDnohkucVfZ7jxGevQndpG8PWkTgWndTZGu8RaefcgrrQoVipKxtXE3TPBNyLwdK5prV",
  "key33": "614uo9SQBebTbg2Vm1uKwXfGB3N8NStAv7NcBoh582W5CVhCnd5NTGZXtGnwmBaishmPSt1bfHHsZPUDugJ2Xyea",
  "key34": "w9c9yRVGTQLDTuX2ciWbQEmg3JGeB4NFbkkS99J5wSNCrpGGCngemqqyGzaqYTNVv7yE6VyWV2KyT8ratQAyxQo",
  "key35": "2gic2oHzhzztagXEntd5phXEQNPoWiViJKXArWu3WWYGwUUgd9oDwUJa7J8QYMasUDpMYdEYCShCuwXFWHXeXCGd",
  "key36": "5Tuc4yN7Z6yxNCSSKtM7Nc86pwFFzUjhXMxb7k5EwbQLVNTeyJfB5KLPauS69XjUUALhHfNK5wZoPnGX1gvJoHEi",
  "key37": "63Xwi5xY1uWAv2Z6da7gC9eMnxjCDA4TZFXGbMDrvKxtz4HDYqjDMDS9TtPqjy5c6md85mKgc8ktWfHSYKnU1nmv",
  "key38": "2MJjB8suW1QBASfT2mpWMmpHuzNi8ZKgVYDcKQ6GmhYKHmoPaF94PiavpAJHzMvNyTwvGY1yR7sEJ11FSh1MH2R5"
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
