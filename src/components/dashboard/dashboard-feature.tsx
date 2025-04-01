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
    "3isaProVjf3ytuRgiavL5YqSaKYLrEBrBmdQ4NERwrUmJW58qvCTS6RPrqLgYqkvnbCXUN57CzmJsUgj8gcUjhD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bxnzo4Xn5qdtL4FTbKbgtRjvAx1Dz98R4qmkDnGGvdmeYcqEPt1a8Rwr4eGfkWPzRK3GLPi89Z1DBiJUgL7ub35",
  "key1": "2RhbkgSVYy4zf725RtJxokQ1imihXZ1zcwgvuWDRmRAN3kQEDxJhr19AHf4BekTR6Lp9MGtWV1H7wGxPBkqwqrbt",
  "key2": "46H5tGjGLs7qrjoQWdkJDBAjSaN84gWDXCAn9mQzYYiw4TpKExiMwUJ7kd55ztA68ivv2Awsgj4sBNbkU3Z1HeSe",
  "key3": "4Etgi1D7AwoCfr8KxHZkoA4Z1TdTqHviKedJxYVSseqU1pYhmCZREBbqtCp2ED5kkqdZrWDgafNS7G1KvvGut3Hc",
  "key4": "67cMk5FDXKEDhjcAQkNHcwEUsXp7L1D6UAYtUS4zo5mDgghrEwQgu9AzRd1Fz32tuu33uMUAyyDB5XqzGC1efoSM",
  "key5": "3WA3WRDhJynWSPkRXzZdx3d8mw3MV2tWf1bch6KFD5ozigTeaYR73MWy8eeuBBouQ5QHMJFMR4oQrJ1NFftWoQBZ",
  "key6": "3zrBZVGJLgf7wRpPoBbghutQFNqpD4CkiFFXv8DPvG15bvywBM1UZ1KnsGgu4vFU7sXwzM9v8tnCpPNTfrfM2yT9",
  "key7": "5jhMGvtDrjR2iGv2kmjFUDGSzGjetiWoB7eo1Sm4hccGSsn6L17KNDAhnSVaHztZLfYUsn4xje9yhJTE1DCEQzp5",
  "key8": "2fUcK1fZHjwLBDZ67ZiC7wXQKU8zBanVYtnXqs8dZpFi7dUCtbGbv2xMfueTyZVoyued3CExgnhQ9jcSJGAfg9S7",
  "key9": "2zbNKfvoo8iX64KRHYNrHDKj1yo8YyA2Az8AWEspBG3CvWRbW7x7HA6oAiuudEEXeeqrYySjpgorRoR3r2cHahUm",
  "key10": "2VheLN7cxs7hPELn1F7e3e8b4jHP7ExhNkNiVZPQXJXi5kJepyXqSDjXFBrijjpqRQQYiRw7AbuGf5rsVD8AuCta",
  "key11": "4cM2Kx3uy81UiZS6KskJXsNaHGA1fZVCx5ZtEgfnRmP7p5FSA73FmtgKy9GJGD8T2piugQBMBvPTuMWbB5xTGyVf",
  "key12": "4XrxQ66o6dHSPZvetVapqmbzvzAvhZW5zTG68gzqE9uxctTMG2PdAAaZqwTxB3FMtZBAZkNXFHVhV1AgXGzHYm4V",
  "key13": "25reSFdJXFCvm8mPTVUuUEXNFTCRzn1ZZTwaeZ1EJ2pZgGtydXZkeXTtWqUG2DUUJs2pPPKAygZaDSzbVjurTRpq",
  "key14": "2NJMQv8CSJaVu6SKEUTe4b4wLuWj5F9GfV8B5Wjnk8md76RjCuRQU6mEHxqqb9i5wYRLMkY7BxM8UUjRpT4HSMqU",
  "key15": "x9WzCCdkooBQeEb5CiQpb8fJctXXA8D3MGBTKwT2ZCGT2iS6hViCDSqSVaEWD4m5dw5yi3fapDqZ13z5zMaPmGQ",
  "key16": "2KfamxQgT5thj3nbrq735eVoAR5sKAg1hQnZZDLcXSBmFxxwnNrroBVGmKhsc6FpcU4VYrmBTY53jh5kQYXJEMSR",
  "key17": "5mYWLtnYSuaYDcjY9c2e72kQuttpv3bYkFU36X5mehGjuMRUAepNX191DdHhRf9whV18xJ6fHc6vSqF5c8otbxYE",
  "key18": "2T8en1W1B1XXA54vMM48hRiryiep7FNyJFmSskDorY5G8rKp4HwJAZd3LgvvMVdqyuZCr2Wc6Utn4qDwo65eUS2f",
  "key19": "2zPM916Qe8TvMU5tYTWdB8j6Uk54qT3w2kQ9p1xJmVvaf4CsAeCJntQg7zZusb2jrZBUMNrPzLY2XjQVKwQKNbwd",
  "key20": "3NbvDegZ1jGcb538vTh6Pgjgc5TLdExfERHGVurwHxY25yEofBYdzKi4ZEwzqb4nzw3aK6GQycaGWSymmCX5GiVC",
  "key21": "3vbETveGrFVDre5GxVo4KMV29wWoyL5B3KezmxCbqLShPfaTFtyj8WueZJW2yZwE8xYTUGrFPnsNLXd4acdxPtYD",
  "key22": "4hmWL1q6pcoMq98CjAJaN49hc6ERks6vjd9StFNVbhFcXKi5XKUFBfs9z2eGCbN83D7CE6BodRfXN4r4NbVnNijX",
  "key23": "3P9TQKXpb4p6TC1WcBA9cLiF9o495GCe1DGqVRa5gTgh292RBwmNT5vboYEMDhYSoBjFmgXLSRyf2YsovvMKUsB5",
  "key24": "4PrW1bUxaw7SDUZKaPwSjU3VH43cq3rGZ57F9Cn9Cbn3TP5o24sHJQJPQf6MMrAf9nB9LTzVp18gyE3ARwXxKxQ3",
  "key25": "5nVX9asCWgx42AicaURrwTRD1MYL8FNw3h1tiRHYPBP1UoLdWo9JmSRFPvMqRGHC4MwvLASAMM6wXdEJGDTmzNjf",
  "key26": "4sKXZg7VoMY6JmZcJD7LnHTDtHuFaGp5KQySrAdtqUuAxWarMX1mftGaf6nmnQaCyofPDGvCcWNZcAsJSoxNBPXv",
  "key27": "5WtTfGaPqvFeQ7TRLcybAm31aNC6gH7r3aCxU1fhFnJDvib2oY128Yd5NK66DFMj4C3ops4zWjVTCTKG3eYjyUxR",
  "key28": "3hHD4GNYfC27ZbsRwTXfWtyGupoiy3ieTVEQoSa9bc71mYeghGHQSyR99zF7jhZFxTysgu9FEtuBmmUUZLY6kCz5",
  "key29": "3Qjnb4g7fTkRjUtQh9NUAv4U7owJBzYWz2uiLafqjY9iKqZfbAvEmobFgWo3zGowepzYJK6ntDXATCMdwvr8oPEL",
  "key30": "3XRdQLWeLxpCVJptLn7r1WqNcwFFdNzFsHQKYwhiZppDa9WzEfuTViUYpPaB65D2tquS4h13iz4L3S1BVwyzZzMj",
  "key31": "3XMGauM47HJg4YEXvNXUnBgYW9DrhPKR8JNE3fUEVii11s2kyXLaidrnQWd6JiaVJdiqMVTBHKevzwo5PpgW8DE8",
  "key32": "5HzEvRBBGzz9d1gRvj9ahPeJFrxKxWAmX8Gs8NjqdbhAQ7oyG9MmgStn9H7bxJE6qoGAmYD2HHdLW88XmPnMzDbp",
  "key33": "5jdAEr5YjpkRahGcfAc48U9pyCscWkaz68qNx2v12aDw7rhUALhPn4tD7PQvxxqpdxXZfZckA6Qbz2iCFrLiesYa",
  "key34": "3EWBfuCdbnALX8uM3SZRmvgCLwQ63cwkxqbRpidmNkXFASqLekUYtccGQSCkoWXt6BXqk81hrp1fRrHrcEgpjrDi",
  "key35": "5r9rfDpk1FxDYQdGmmRaSaHGueBmBdPw7E1yVX9ZuJwBLViV5ug4GQinsiujejhg9vJ42AmYu26tN6cpv56XTTv2",
  "key36": "3PgtMs19ubbdauRDGwYWBHiHYMT3e6yavLofsjNQd4jh7D7Ahb2SRJQeyKkNZ4UJZuj1cHou5StUJ2X3EQwcyNaG",
  "key37": "4WYu32XVbYa472Nw3scMowz7Ma3mAs4GL2a6jcMiGmTGFG3yAMWajesjBsz8mVZAM6Lc9wpNdnpdCBT3J4FNQvb5",
  "key38": "3QZwvyAh9gQmwKz4fxrRMabqgh9C4w8v258HFE1nWDpV3j4n4iBy6HvjwJBwwMtpenaN91vXFegFrxavAwD3xSZ1",
  "key39": "3qt3XD8ioCLmiGkz8QXvJbTj1AMLjdG4JLs82Ejx1KAMpXWaQHSNZ9fa38Uf4SLSjkG6yGEZb8amzCVcRBMhrouT",
  "key40": "4dz25gb4GxzmjZ8vwG2MzGRX4zkzs4akWD4zAcjvvuUcarFs5eY684uJhoCxVR6b5Xr4ChwzAGsjkp9t5KSLucFn",
  "key41": "dyKdAGVyZ3x5rcMxZz8r3dQLpxg1jv18fjmD2nGxTy9f1Hm5bREgdddzHBWsF6jpX4xRviiwNNMmTynmSkshvoL",
  "key42": "5EFbRaoDVtrEz5xs6FKfR3XSr79GXPzGyLjagivDZNEQkxTNwPs7i4G8UbjSnAYMHpCViyk65Vof6ZoVCUirdCbQ",
  "key43": "4cxSC895PVJrt7TaYhe9JfeJbYHJi3LP3W7NRw4tGhbS79t9q497rJQLds5jzBswUHNjLvFSmBF47AHVhN7mE1uQ",
  "key44": "2uUkEN9QqyuJKjqGRjnhyCKTxTD1qqazeaLvb8ipLRDqteZagTJWegn8DWKGUqazp7EZYV3QM6dYPfdd3ork1srH",
  "key45": "2aX9xzCquHfKWEWwfL5uEaGntiFPJEaydQBvsad6VRrPQbvUswEHmwtg449r21bZ89PwTRCa6LkVY642kCH7kUqW",
  "key46": "4LaMuTtMtdi38XaMockLEVUn6VomULhjBeT46j2TGdEBqgutm58m4RQQ4YXQfeex5ir95RBRDB8ANQwSozWqbwWm",
  "key47": "HQuRFKM4jB8aJVf9fWcqwoCetfPJ9hMcZ6g9SmNnkjr28nP8uJ7MamKXtQZoD32RMwrUQBmvxQqSD6DGfdB2pRm",
  "key48": "ekza7RWnBq943eZjmkW42jdXhdAV3QaH3MXXba3BmHqY48BDUBfiAczJWZADfaG6q5KmQG5fgqybdGABdACxtvs",
  "key49": "3Kfsvye4jbMx9xkeHNbjfo9ad9ot7so73z3UmNkAat1ZiZRQrqwimnfJwDDwDWRknCk5ErsAiKa4pK5azLvo5hxZ"
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
