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
    "431oJZAv8C589BD544hAdhz9CdVWxHDdxfij2kmcwygnys7JsQDLFWqgohEX7KXWkESJFxNvMP7zwTo3jpV4hYME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZneT9Pr9WqRoZcE2eYhdirVsEihw1gGpLcCiSwTvD7NGGrMyPtzjdx3CJGynyoiJHnstig4nCWio1M5f3fD9gzL",
  "key1": "bPPafSgF2uGErNfbo6tmG6erkgug3wX5EkR1NRKhhTtWbZghXb2PwWJTDxA3UNvrknST1S5fEgqpjRTrMkxYyGK",
  "key2": "4zR1cbpTxe494s9fQKJdCZGDVY2xaVVqEKNWBtBksr5yP2zdUPvmDrrCdETszAqNHFEPe3UiusYdRBBCaQacgLVm",
  "key3": "5QLCNt1dHHkMGwEY3GaQKPvPYgGbfQwe179uw5U8Ngym6N3rhgTr86u6mcBHU16Kb3A5DUYpsA1pBMm6UzpCThDA",
  "key4": "46rdhv5LXcUdVaYGRVYpdBDQQfRNbp2RP1AxNUoX48NTesfe5NhGzS41fwLx916LsbWqK6Lt5U4SVMaHkNfVzLLg",
  "key5": "32QJGVFrmujoRU4jzjvyiTFPrPBNb5RXfPsgXkRHzrPRE9R8GUCdcSMB3Vkmcs1zJtzQC5NAtkeZya5ccFxX99zv",
  "key6": "2iwFQSGkHA4ovwgbrwEEm8mp6qBXJ1yPt245thfUzFBtm6S9hg9MCZjz381jdPm7nvJiFptqnDeMAmX498EeukQ8",
  "key7": "R7KD6dTBF4phEsnrBzymH4aKHryouXbkhBPsCMssXKSHSjUXtVEjr73XSdwZPyPVu6KA3rDj7UrSxxcZAm8K2Rd",
  "key8": "57KiUCL6Up31ReTvvA3voiNcwvz5rxqQaNPYw5kugSp8VE6VDCHztHD7Fgju1V9NfcD79qtP65GSRKzE8qEqo6W8",
  "key9": "4tyQbEqiBUo3uj6DNucjxewNigXJuuPdEidGf9wt1RwTicuWUMrvTdi5rAnQUwmiPDkdgxBMookgdFrpuNxCqZin",
  "key10": "3PnLA6YA9xKfSpejDtPiYGX28XnuCV2uwRMWabL4TcZ53GiRGQpXQtVSaRDz7Rk7xHGR7PqinS2Mzg6EwW6G491R",
  "key11": "4SnrXZFCREdkgEnuBFpS6vZ8krYQSaLVcDmW15m3KCN5ngmVqzYmx1NeiqDsfFdFvoCqgCuMpJfqzHqWckdfMyaQ",
  "key12": "4fGcqnVvMm7wkNvqhiMEZZj9umx89ZpTCoov9UyyXE3p7AGd4SLXXfJUJML1prLv3nBKQRAuuRhQipX5AFuokQfm",
  "key13": "42KjyRxbdMjMfbHt7ZMXZQrwHxd4NV9dJJ8BvHgk2aiDtYespp1w9XNSYM76wmk9TTTTom6dnJZgQxmp4NbrVMS5",
  "key14": "3epLYVMMRRyyxBUxvdkd5ooCpbNq2jj154aZCtZhrvmfzRbAq289EqvkmgTaYkdezCqsDwZh4JX4QCv3Ah8UDGvr",
  "key15": "5S2QadoRqacatGEuBeAqdFWi3mkP821WhaAJRDNN1bxqfCNgUVz2XnRdDuQ2R6z1eC5MUHFzxSgGePnBpxPiK7gq",
  "key16": "KHHrXRMzboMJSbrnfV4og8rjEQSpxu82cfkv3yAwG7cRWWcFFbT5dRUdtLMpywAiTiRkGYiLqN99c7RdUw7saXk",
  "key17": "2uLrB8aY7aG7w5ZpENZpMmn4XocqHGBk2CrARoVFqy1KS8gVn6doYT3XmFGXvnKfy6kGUrjEb21ZTfBwg3hASBvx",
  "key18": "65BUR7UFtPxfRdQkbnRhXmULJ4WYk5LtzpgrwET9UsgeNyCZSoiNGRGyYBatohbDGrSrBohhx9xs6n7tpQ18PF7t",
  "key19": "4TvJSfWBUwxJpQPsPNBaqwdSvDxWTxQKEZgcG6iRWcHNc9z9j1kEW7SbrFrv6PRmwtWPs5W8BmXBBj8Z93NN5tWZ",
  "key20": "5aNw8FXdvkbXthr5ACpsD5LxVXzf45pdYNDpPozfy4vtWz3BoFN1XzrL9z4EGRfxbsTPRNwQNhg2VLaaeXVA7FnS",
  "key21": "4cVyrFVXoxhPGGmMAvX2bcXJN4KbeeJJc3jz9ymBbJyEbyCkgoLvAGDjhFdorrzWTD8aAvu9FWFgBaxnAPVgbsAj",
  "key22": "3CJMB7ZmgkMXmHqvfkfDG5nbg8NVbGNKnFrkwjuiU7wDcpU415RLD1UcpGD2Cj2egCfDn9fqVRAyHoGvWCuoK7zt",
  "key23": "54qvWBkgqrtMYLtVSPJsNJnadr8cR6VoQHVxNVw9VuguNbiAdUH4KenZUXuVPY4a5idWehNvnpZPhRwYDHkp3QcX",
  "key24": "21jTfe5BBdKNWihnyuYgKAWuXgLUEpeyvaJmW2JZ1MLGGxqhJagei5TuFk2kracoZrt6fBwy766XaBXJMXrShLfH",
  "key25": "2HgpB9r6kraBnmVTWj4Nk7rqiZxhu34JiPeyGR1PkFK2XqmwjqrpdxoTxHzwyhrp5c7fPrVcp6srcfSGfsqX9H2r",
  "key26": "3HvsutjazGhrdtN4YVLWbdQb8D2NncRfYLqHGF65Lfxm4xKbs5z35hqUrrosk2wMbtz4BoA1zgoFUEiC34inFmi5",
  "key27": "2VUGKesq22a4tNYRfdovF8tE5crKsGUuWiiE2GXEnhc1qZEUwt3PnaekNTYrR8Q9UVxdtK3XvHELzWE7ZUTka25x",
  "key28": "37rswBLBLdPYrfawWuFxsapNqS85Pn8XFXNToBALTRexS15dktHRfrH1Xt976K5kwpin6hKHUeomki43A8egYSi8",
  "key29": "SXQxfp8dcSym6TcCxfT9aUF6BPLcvsUMkgDfemHL5rfRrijXr4WPfZfTeseMhbTokgS1xavUdVMULDYBqbJcMak",
  "key30": "3wqUCHDnn8AToCvznoFTm4ManhaPAkqso1wRjfoDvuFup6iCjxKc4re8i6FJ2iji2HZQ2QU3ZSvyxKH9qisTZhtT",
  "key31": "2A8DMUKijYSt8p7rbbetSEXyXL7SNbHeyy9DegYaGt5RTDcQVRp4RvenzhdZ3cmYPCSk6uXDf8UdftcgaFX6nZ81",
  "key32": "WBLwHh2TXmLSLS9giiVHfuGToKqco3e9ipJtRegDfhfYp1iDFvCayHHAe4ytzm7BELYujwXmCBYm1ifA9wVh6S2",
  "key33": "2MvQRJeGzYDbDZ4HNywHsHyBarWYxcsCx8vf5Ey5qBfrx5xhaRNBqzD8HymWarufaATWKpBBzccY3LqVCR5FvCbr",
  "key34": "42wNvWCcX9vuSetffnai6pyZ5PCnjnCU4hWB6xATmGDmGXScYjRgCrgx8614dcDgJuF77Pn3MefJoP9s5TXBKFvp",
  "key35": "4obPwA8rkoE4CS1vRNdxPq7nXtrCQy6nyhR671bq7TMCQYJForJe8JrViCcqzkfjzup2KUVLmaK1xtRB3dWAhhnZ",
  "key36": "4L69PyKwAckFjoFaL6yHGZfP3o3i8TBUeMnEs8ovFXhqCU7mqKh6CuropRcjBjrxMWGAfnm1N5h4f2uMPouyJbbm",
  "key37": "ZNdyYYdhmKeXtuTfRu5fw5VJbks9D1bTwxfHyVGczzJr2mTgPuh6CJ7hLyj2RkQBnQkrGDRdExbQMqrFZb2ebdv",
  "key38": "56SGTKgefxP2PVWvjoadJz8V2xh8RBaEG2Woetijd1qqsE9e8mAsmMPpFT98KwTH41JuWpXV6QKbxLZrU7pewHvQ",
  "key39": "25po3BzA1yFH5PrNg6mHRLRm7HvTpm6MFoPSMH9TTRASErrwWY1jHP5N4PSFEJiKtLKXQWrVhKsKMGJ48SzEy5wi"
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
