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
    "rXrTmfiUCxUMgWnfGYQZ6dWTUA5snR3pGmZCZXariBb6ahBrJmt1DQbGHBYhCrLC3h5aZswudbwyzkDxRc1m9q2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wfaJ5gwg3iGqyG2ndAUQBTmnsCxFGjiGqPFPCDFKJdrMPkMraUE1nHnfPjTQ1tWCXHdAkoZbyLT3Z6bMxYVAmfm",
  "key1": "2xsd1LqDusSQaXwThsURhK6NsFjEdAbNJ2qKVRgjDVLN8aTLYoQzroxABfd5txCLY69fToDZJTygbRynW1p6BVnu",
  "key2": "4FfGRTbzRFF73HEWbGrgoRinuPhtVF9RZr5SsyMsmdAzkH2yL6ZnbR65GT77WPDcxFECNNJhJBa3fKX6iusShcNL",
  "key3": "21UooHDoW5on1QkjpHuFbechsY5KLNNxEqLkhfNedSft2ZSJc1KcfzWx4HznrUh8M6boCNsfMdRNSuVbjsgFexXB",
  "key4": "5qMHZxna9c1v5UgBAPcFcHkdvhQSGV1pk5dZmGicAZCxBAxZGvsgdtHBvoGv4rM8pmtnDE7VWRP2tRqv2Zb2SYqY",
  "key5": "42ec2ypda5gunSXcVr7jhLBiRuUJKoS6RxXHtgjCZb14S8zrRH1NGrydxXgUUEbck4GDkiRQnQgmHt22c3yucJAn",
  "key6": "5CaAEYdoJRBv6PUcsVLJoHky7nYCjnkuqSczDkh7o2gVcboMEwy6xMxvVdPJ7Gixj4rntAgERXU5BBNe7KbSpLeQ",
  "key7": "5XXo4bDzRPvzuEoQxhovitQottXBHq7bYMrzn5aUV1krUi1KDFyHaiDRW3wtGkBX3CDDKcFAVwcyQMHQrF3osVPW",
  "key8": "35QBW3b7dvUqd74gwyYnKHX9x4BMMydMzLNrzriKSzYKPPMB3CvTKa5FqbysM6nr4fMEXCZ7YUVAvx18gbpUUEjJ",
  "key9": "5fCppbLSHi3KtSA7bnx4qAk4kFsGL4ZxxEPzPcduHPjD7LseLie731zATCKCMoLmmhuB49kS2jH1Hi1KR21GCDwu",
  "key10": "2Mq1bufwctueA4SfHtk7YWSBAFSZCohaD3f4FtitaQ8DsmEe3QtQ6cvs8aA1mosxRdQE25dG5GemdtZtb9CG1h5g",
  "key11": "3PPJFgbtKRZREwEEzCkiD2gmqVYNF1GodhnMYr1e7AV4B3R4HZ6i1P2NkcSY8Jin3dga2e89KBP8NztVPY5puHkR",
  "key12": "4Tba7xdyPMkxxGUBZ5fipEqJSfYGbCjs1fj5aAtTDWzv1J9ZkWu91Vs66p5v4QRmHsBoCyqHr6H3RYjEfDNgPAVk",
  "key13": "2LSu4bTULh1tSv643h6niHAe7P9Ra7VtcQMaHtfdk7mVVa85LMgkaEe1pVzhRVEX9YaXUrfwfhcfH2xoUFUBSzfP",
  "key14": "5L994WJAznx2YiJWLAypjDufUXQcxWQYLFfkRzi464hBVURUe88ZjNNVbGw2r5JczikVm7WgpXVmh3dvPxBWMkwK",
  "key15": "4W4LHsKF1i2VYgJqnSSGgfKa4xuRML35gWu1ZdKyowPv2LHKnXfqVZ72iFpPAtZDJxUGKaVUBiDmdY71SbDV88id",
  "key16": "2TBKM3YC9R2PHnDcmQTWH23pgqiap2UYuyyvzjRvP8Kjf1bABAZawMbRrG9gy9dSksnPsS8Wtj4dCBxuMZRc4V7P",
  "key17": "4PXNjjdAcVT3Ekzc7MNwhzEyxNv7652RPywpfS8KfpzC4A4PbuZfZxc72LaEPQYA33xNrgBFHTaD3qXRuF5qtUSj",
  "key18": "3ZfGSMPhwUvWQT5W9FhvAvPmfqAeGwk86xprVEUtkEUJYXciLjBKiRKg1r2G3Q3Cv9P89xYoMVxXNEYJiohjz8Uw",
  "key19": "2sKhNPAX8nvqjcVyWrnLTzpA6Zu3zaaHiY2koo7oy9Nhk77LZ7YDpdCc3AYekFFwsgNfURTETrJ5UHDRx3yzSZYY",
  "key20": "3QDZjPeMubxQWjNGvLM2q7CYUTHMeBfZrFoxMz4886vi12rGi9mVW5PaNBYNgmVMYusG3NEPnKmCK2VEkH1zRxaw",
  "key21": "29qGe6rfbMJboK7CKBQrPU3CLzKGf7kKf7RTe1HR8iLUgsf5ufQaiWpDubj8SZx87Rk1TuY854gLCUPWKHD8Bv69",
  "key22": "41PUaEDKZtHA4ggh5shxbj11qmM7ixAemMxdrdNpFZkzUr9zB258rz7c9gPdHsPNA2MNCbcb1kd68HRKo4H7ychb",
  "key23": "31w2beXS4DCcGGHvzVMMm4Jy7YtRswGVUryUqcj3GbkRijnNxT4JAvHax4xDKWPVc94DUSPhgYuR6DrdyerQaauV",
  "key24": "4gwhUqFyfN9Yp8dguBeE98JVNezcySz2vG8sw8jsJpKSfie8hbbTk58n7hbv5a8TXSnGAz6cuZEfSw938K7vTY9A",
  "key25": "2u6u1XAZiv9B9APpULiuy5yPReBdSYNR4bahEZqLt8G45zrizUcd2rDgLjVyfWaKjqUNsaCgJsGG3y3KTcHifTBe",
  "key26": "45ouXYHnARUqGLywB21fizusvcrdEnaw6EWb25C9akcYPVpkqWAfgkiQPhMi6QKmGksVCLXzf6JmthcyGfS4q539",
  "key27": "fmd2WptJWEYNnzWwJPZCACbayHvvokLYoqz6X8SXgrtvyBoXPc8vjE6h65nFTXstAvcwsnkNerohRgawhWv67Pz",
  "key28": "612pTWs6E5hPnuydvWb8HRdoQtHcLYegBEV3u6vCYaiiXUPMy3Gc4tRZWMJRkCfrWmXN3PDJ5C5bC4b1m7UYPr7",
  "key29": "3mn92BymQXFo94WbtatS22C3aZgzWBbz7mTzYWx9wYaePbppfJ8tvZrPMwzawbF8AoDQfpb9YYbNXBKTiW5DXoD1",
  "key30": "5qGoMWm4bZMEG3sAK7qVUk4WDVg5f3tuD3e2HLxJfijstiDqaw5pX491efXpcwpUWuQxxA3kXPzpbLVNWKpJk7Tj",
  "key31": "2NZT4a57VAFUmUmopWWux6mAPfPNNu2HaVpfykpur37HuuX6txqbYeWG6RptQAkXPi6id5J167K5uN1dH8UT6qij",
  "key32": "5Bme39PacopzwUQ6HCKJHzR3dEGYg9cFtzTLDFSAeWHAXXuFihbcDoSnaWcEYmhsZ1JTyL2ei2SzbFkcZPhv6okD",
  "key33": "5WnwiL3EeZZxwfPUKwWvmuEgNhv6rZHxcUzTgmmDPvZazdiBQeu1SnuXsgXWNJooY2vdvw1g7oSErcMVBi59H7Bu",
  "key34": "5iEFRtQ2U44chFZ3wyEiKs1Mre45GgPsGRU7ZJBJzE2CgxVQzNM4VujkmxPmmTvFQMYgrQHVjYmqYSP6jmwhpR1B",
  "key35": "2VWpVMNrasxyfWwYjQAUDpjBwRNQ4dNxcTRXCENM573VrX6dg3e3t684xgSNf7GKPWGdd9JVqsPPJYua2rweyRz4",
  "key36": "5VoqSUnV6HB2iLx7P7ChFCciSktQMTqUUcpr36gZKMCUESAGQ6LSDtvtNvDSGBsdTS4UaFAA6uPamW7keteA3JZ3",
  "key37": "26rJbyipnGXC9jMgjJj7r6QNPBtHsBUmXxA9sQssNmB5eEwVi4FHtbWjKW7Lh4o2CyWC8rZEMpTw7eWDZ8KrQwyD",
  "key38": "cZY8uywzhwLLW2zNzKCtCKunkiSBLkumoBtUfFMwoSuGMuveUz8JjJFEnoZ5pG9yqnRyQcxpsJPRdBPHUnvxNc2",
  "key39": "5QzWf8i9rqxDGGWhGQxxGDUicPqqFfteGgYks8z98zRmPEAg88CcWx3wnxUkxCtXqVRA62vQFXNNVnpUxbek4TcN",
  "key40": "2bD9wzUuSZvG9SNBmgmCiGDAfdeuuyxc1sVfZL2gVXCHwwEiz489YnhdZJqVPU9uikZKhHhZf9xikLa6S8c5QUoe",
  "key41": "3uNAoYGyrYwoRLX9BY5eyWhc3TW1WWsQPaDYqEGPDQrRgjJ29tskowgHUsVSBbSGAppD5kgiDSzjVDpxtDdMADki",
  "key42": "3jRSPvsYEUur4x6TgwFhDW5XXdujT7pwaDDAi4WkawjFJPkKYJALDpcSS7rkhmK29QV6D1TgNCPa7BECvMZ2YkRm",
  "key43": "53d5AqajUF6x31hGZwR5cvRwVobyGAUA3x8vvJGvtGTEqKdDB7BJYrQKegDJA3vQjZ1a6nsPgmj9x56gxLkvbi4e",
  "key44": "58YV1PbGchF8Ecc6nrrtX1oFt4YRrn4qR273R7GagW3DJUyzK18N14qJC9qzdyxgEwwUD5gfuiJ6pQWFaTTa1HHV",
  "key45": "3zcwBUwhu16oEfet96CyirA9J3jnTyAkvuozrS5MnaBmtCsJhTw517nMZqj28qvPTCAoznVKeeXrRHENGqebE4EH",
  "key46": "4MSUj56TqiY7KsEwkBX6irmwQLuThbgopLcoWeg2YRbFyVGLq5GiUf53gbYVdF9LwoDDHe1PSeRwaxP13hhgREPd"
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
