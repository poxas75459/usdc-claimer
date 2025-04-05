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
    "5vs7bCbdquH4z46gftfPcrW65cMYWXPucNEWquMLPGWYkaE7VQYNNmn7EYEmsN1q3sdRibR1Hvvt43iEjxRwZP6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63XQGTdP1u7VCFZjXSFxF351ZaYoy84RYcYR6XNjV1KeCmgeJqWD4VHLyiFSmuwd9ePBfQL82F599nVgDb2kFcev",
  "key1": "3FhcWEdmgeYDnFBDkdtVxzepG3iw6usaHjPCMrsScjq5igqXvTExqmDTcLtnxbuntALZ9prrxSYC5JpsjDUVsqEu",
  "key2": "3akfzbSGhstq2sUUsaX8hFm5Nf9Z7435bAXGhFpQp7W4W68PQnmcP3MhZ5HznsT7Uj3bHm9kRPTBefzQV74BaLot",
  "key3": "xBvXjQLK8UZ7mnPRCBmTHATKaWr9iHNDooGd8GpUiDbUWNbkcZmQSTqkVYJBsc9dt3joSLATT1T1B5218tquPqh",
  "key4": "5RfJMKCZTZxX9UHtkhooZYjjuRCFBG8vyLsVcC5knxNhWN5Y8eCvowVqqsqEfGfJYrcSZkkNPxp9JJwyecB7wjqt",
  "key5": "2JbqMkvxycp7PXVT8zy3UKGbcnaGhSAQ2DacPQY9bBiigybKFf1Lg1Bds5ozmsKvc3qiizpEUL9JiDi3RAB9FRWE",
  "key6": "549e7tmpNr5t16aqJbceppSjSSXeWU83Xk3Urae8CSCt65GjZGMhVy2qztRSraGrWbSfpbx6j9TjvHV8X7gyNrEd",
  "key7": "4xxcAA9ZgRgX5coLyHVjcXPFQ8xVoctqHy9c595FtUtFPRAzs85vo426xuUmh68HrMoWoqoPSKJJ69wu871qsLy1",
  "key8": "67QxZbr8LNgyRSPFd3agvkZr5Y5nsHr5FHqWum9QYYYQztr65gt2tUPinYEgnCj9FoyYnRiNcUaeCiNKY9rofChi",
  "key9": "2tiiZBDi96v8dar1pchgUg95fD8xRSDtopdJYYhARcbpWYfRSzkubPvuQQ4uTUrVStmDBjoS6FGtEuDEwTU1v7Wc",
  "key10": "2XrrBN5dQDbo8xqg1oPc6TXkWpTW3CY9yNVbp6HNXTtbAcEo88usAtuAMpWogvGqyoi2byRh6CfQGgEUobMop2z7",
  "key11": "3gfAmBUrLpYg4HFcyoNsn3i5vk7uZcyVTzKS2g4Yurq7FYqCNWJfipy1HuHbz4RSDvtSG4WC7bFP7ThtWyFk3iCY",
  "key12": "3jsdV2o427PgXVFLSkuCynRSgRoAAbasbqmwtvQEzzJ6RBcWS8cdDiKAoYdF1EdaLENy1uYAPSdj5guomZCRhr2h",
  "key13": "5EwvFs6kP8iVdRotoUzaMzok74fBa19a3r52R7bbtpuctaxDrThpeaPDqrqC7hXJQhMZhFTneAGjiqDaWijp6TF8",
  "key14": "34UtbawzsDayQ9CusvQQDoeE2KxodFaeV3yFJnwQMKoqxdjeyajHTKx7VThfxgxrhanAHJbheVdHJzszCNo9Fs3g",
  "key15": "4ZjEwbuVBbam9JUK9gA5v9aeNekuf1Q8kZ7h8cik7d6dY38eawCZUemME2X85RLyBw4D6WhdHsA5pZN7YhCbwb27",
  "key16": "UahuHKUinkCSi5q5wMdgvHX4WuyEZQL2md9p52LuVNXGe2x8zdjbraDahMyuhXKWrFBFbQXRsZqFiR4eBu6GxNt",
  "key17": "HDBwKz9xLTLD6TQkESfPF48Bx5qD6LYoiRK4AKAyvztSAQppRWmnXPWMwvPGnDsuo5nLfmy1uQEe4XRu4b3RRCX",
  "key18": "4EpDe3peSxmrcmvrr4Zu3bTmZQuq8dJ56f6XBVy9zhpd67MoYBduH4jJyX1yHkQk513dnSwvqsMa1K2e3W4YEdVR",
  "key19": "21sBGDAzwMXCX2d7BBTmT8An4YbQ7W1p3Z8G4fRw4Q6wN1oM79LqgdtQQZu4vYqguVZN1a9hFka6Ujfx6bC2HtsU",
  "key20": "3GJUYh26uNQcToaV9UkPvASrksLjNtRiccDZZu3tpXHe9eTpZhNiXJz9KS3AjDVUm51p2voVfB6RTjix8rto764t",
  "key21": "3X1Fu7GticFsj3mdRBEiKcmgT42RXTnoswVvwx8hQEqP5SodxrVEZSgFqqVxAmZNCw2v1PW1pqv6TpUcygkQpPh9",
  "key22": "63vHYfxo4bryNLSfCK6KdDoht5BUarjacLommsWzqUkrDQgpM5Pzow7xfMHJoNfpdMvMBBuKKFLkhkaAYaSRxPZb",
  "key23": "SzhjkiwtZ8H7rtM6AUFFg3ZzTEgxrYX7C2NTL2nR3q1tcEWU35P9LzAYzWYoahdg3nbpE9iXoWT4Pbt6GEnA77F",
  "key24": "2VzKoCQsbmDYb9CueMydo5Wzuu92ieCadkVdfcpB6CvXNsgFJUt4ozfbcckrGJAgVwuYFXXS6XAG9R5CfC3Tb3CR",
  "key25": "2oLrcDUkSPKgmBVxUD25gVQvKXS4Hk9ynqNkTRR1GkVhv49v7bYmQUBr8MdZFwEb6dxzB2ZET394cUgtFp1jJfvY",
  "key26": "4KrSyAdjYYR2CNWvXQNnEG2goSQ4kCVW2MDRm3Bb1YrtguEDtziQNmUS63LEePPnkDAxC4t7crHdvb7jteDxBXEU",
  "key27": "4UpQuDuTtyVD8FCMjkGAKy6ArBMhdzGnUguG3oTTKmabNmY55coCLuVUedFergNaVKbNqUsftfMHXdwaoE8vd5Dr",
  "key28": "3XDVFmjdTX1F2EwTPoburANqiDEFisaSsUeJLR6Du2UtNUTbj2Umqf8TqnbpiXKS45LFoQ12bb7VLrhcvAzRJs9v",
  "key29": "4uUnacUBHvZXeFqUqj9Du4vPDYdDtyc7E6jEoCZgCpGtPmm5AeQozNK8gNc692HpRmz6nbsaWnTkepr1UyMvftws",
  "key30": "2VNX11siA7qL2ySesuB7z5RbFwtMqkAiMUajNb6xSjwmFaFqRNDkPZPSzfsmFbp49GeLW7TaKAoghNsRy3LGADZy",
  "key31": "4n4JuM39SKuVM2ZREbs19SqrGtcQDqib7VYSwzEpy2WZuq2uL4mbS8GtWsuq14pt6ST4ppXzjz7uKZVD3vYFHXmN",
  "key32": "4UGhhDXAeubmz4ApryvoT2RYA5nFPr4fFcogd2x9BzKYTApBc2sajEPB66FMZcDSHcEJiCCNAorvEkjCVkTiE7Fs",
  "key33": "4R8uw4mQpw9jnUjDGs3fYKECoF98AQzp5PLGzgqVipVAF38m9xqHztq1fptx5NQC6WMASzaR1kAJc7z1iDLVotyF",
  "key34": "3QzDcBytLgF1e7HNiAdkp6gvrshByHjCpGbi2kbn1SNkYcz1uPTBQyLXd7WzDrcnphm1d44M8KD8EQnQvxFhvMKQ",
  "key35": "5gHhHu1KUg6hGCfGcTUXgnAwJTPLjNVQiafJ444wDqV71w2fPfefK7HdoHquCNw4Nk162P2hfDVSxN7X6aRgAmMv",
  "key36": "4ehW3h6Csu53qSFGHXMTa7BqN882h18nmGYwGsXK7DFyfoB1YxXBkzfpQ3GaXBvut18cSjhJ8iiVADh3y4jPcfDD",
  "key37": "JUFFbtuYmUJ9oSHWTE2A94cXpxHgRHYJPspjNbgTacErtmkuf4hdu5ppEydzXYsWeiwsaYJ3BWs5i8M1wEpbbut",
  "key38": "4gz4x4BWyDCe7BLAm7uaRak43N2TNTjiFgp1g6Bd9VRDBs3ZDKiw3mhAgj2m33T9Majuy3W3McmsQ62C4ovAD2xH",
  "key39": "2KrH1GhUzRSgXhuXFPEiXdpCvZLDNyGibBqXUVHz8J87M1PUA1d1vg4N1yRJbWzBrcvD8TzJ2VL4nQKHHBVT9Gtr",
  "key40": "44aFiBzntVegPjTH6i39dKomtxMAbsAuGGm1UvFddzt5coc88tuVJnnR3DwFEPV4n1oTYVXcHh84xoAZjtmq9KAh",
  "key41": "5fGKcvEGzkWP2vnzE2M4ZnZJspoYNFPuDmYGfxDVaqbT3udX9smJhepnaBg9YFLUqxHAawxFaeaPKFNmbJpKwa9L"
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
