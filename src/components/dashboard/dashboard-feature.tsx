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
    "37GNq8CB5L61VnVmd6bcpBSkTqzJGvjxZD1uUVU5HLMNZzSp6LU3N86DGMbTtSiXGsKzdygYcgdbPH8816nAtCQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UhQ2eNhRHANK15TjfRLdXyPH3j3oxFNWRznNSgUD5cNjxL19spE18kETqj1M9A4DX6S64mSygY3S2RVJyz8r5Y4",
  "key1": "5RGQvHtxXNrmXvmiQbYWvgB6s6uJeNABdipoLyMEB1PtmRjxR4o7LfUJQBCRkBHhrzXULCNi1DckQrnuQw1hfJPe",
  "key2": "75gqzjQzUfoXzu3MiWQRhNnFLRkgsyLPBeyniMQFQt28r2vDNJNGJPHqjPARBVeHRqzRejEf88BGSAzZEtf29af",
  "key3": "2pET79F9HSqVmTTH86mWByG2UQQKByxyVU2MR3GQiuegrTw8A1gKEck4eLZ6Gd1RjvDZwFyxMBU44Bzy3hkBa3bq",
  "key4": "5PgBYauf8jNU27u9p71Nh2nr2Lpi2FKSVHoSwkKgnoZToyUXcXz6Lb8jVY2ebRTFvzybXu6H7syZcRrfUn5BE7mC",
  "key5": "4kiJ5Ydo3ZGSDz4pYvH9XiERwGBHYmSYrgpy7dvvxUEJA3QjkMHobahc6KR7egAByXby6QPbjrj7FqPRdPEtfLD4",
  "key6": "5qA6DFXdaw6d5QJQFxGFz5eVVBKAtGKfRzd1rjsbsCh8GVQ5HpBFnAZjexzU6DMENfGowJBrQKtvFFZaPje6ZEts",
  "key7": "2z2ZstDzmcUhzsKj4bdKqgW9xfLVoNgpVaL6rZhZH2XWTN4CnyV9xfGnp4X42hwPXzPfenyK7EyukanxNGt7HZsD",
  "key8": "FY7NhDGSsHxQ638XR9CHEt8ycFmARQ6Rhv1M2pWTEC8KCw7XAhQgZKD2VAaGyobBh9tLg4WMXN4oLxtrihRGVJn",
  "key9": "218mE8vLv7sxYkvgXG4cUKMnvmCfpYQTHcK8KU593fmRnNafE8f4caAUqPPDQQqwPiuqYtHRFtc2EBsAYZs6bRwy",
  "key10": "2VVjiGbUQ37VR6XyA7fcjtXZKqvhjDZKXviwDsUq4EsyqV6aVgk8V2Ja1LPVPnvF3sRZzU765brz5ebTuaxoThd6",
  "key11": "B4ftqH2k4Rb7Nz5oJDv2udiJQQqu9s8ZwXmLZVkGYJgxGJaZ9huDMxGLach7r4Jb9TRisxrHDk8xYr5y8ZHVQiW",
  "key12": "BapR34T3EkuBVdTiCBVHVYrLZDQ3b4VaxcXg31tSHU6sJVvnf3YUcKJG6Yu8QCmzjb8Ri2Qt9UtuAbAekcyicnN",
  "key13": "3SfDXg4idmfazntPRiMhsnhvWSHPYMqDKv4r3TLgbuwfFLt6pzqCvkvUjFixrnZtAMsjY37mjwxjxSG7P1snMR9c",
  "key14": "4h5rTMx5eGqdowSdnu84bnAqFEES8VmHfUTZ6LQEoM5nh99ufBUL3HWqq4cyhaCG2hQFQpiNwLW56tsmm8AmPQPT",
  "key15": "3VEgRimangHQzsQzfaq8FPcR7r14E8BmpLMwGumWMZpwVxUQ6mAxkbG2YZmDpDH5oH8j6ZJLF98nL28sKLZqFrpq",
  "key16": "2jCX5VZ5tUMoEo55HusUhCPBDbpd5mFgdxBxmxeKcDk3JJvcZX761Zv8MC5rKQXnX1kgmCPnZsccrd5J3Lz2HoNz",
  "key17": "2dE62wBqH62291qfmfGMJktCVjb9kNjk6YSXKXmVW4DDtR4ZEzBPcwgYUWkvyxYj7CH3pMuwZL7uUFuWZ73jHPyJ",
  "key18": "NoqRoT6Kysc2a5vX6z6LSpkU35QTFE5VmM247i1Bxxk6iquMhvA8VRXTENFVno3PU5irxnpC94RtbYdCjJTdEd2",
  "key19": "53RyDXZGLcWH9zVb2nccrGNtij88b7Fn38XNzSSs9j1awzY2mGjUBBcAznFUyDUA6D12EgoNigeovjZZmaBxYD1k",
  "key20": "2vqJ8bSFMYfGyT7fa86p4hNivMWqrREvfNYWR2bfrdGSUCaHAD3bFZrkWXgK2M8GCzCECJXoyGUVg2fNmvDRPNbk",
  "key21": "2pA5Esx1sWJFMEqWkbi9JgCtL8zt77A11enPHsaAAnHFqAJN9G4oJhvxZhqkW1aBuykhuZ6MUXk575uaTYxk5Ksj",
  "key22": "avueRuH66bvJNrjep3z5G72e3dRqY96Pm3qVzz8bemNtK68kmNEoE96Zz9JgoTavUyKaqAKQZ4uirbn3x8favnd",
  "key23": "3NeosMsx3HD5C54TUmkEiUcmYXHHtDmmWWNsV6QvgPQLNbmdzVA5HhoCtLL9BMPpmNhWoVBBMSn2eQP1VuE4vHzW",
  "key24": "2CEXFrH6NRjALD7KDQiHCtpEEumCME2zqYLfjL6GiS6bTtvi3NTGZefiKiREmVfwsT9uLm8Xq6rycTZhJiX7UadX",
  "key25": "96oYDnVFM6Yi4CxDQy4jjC2tDmzL3qbQxbuCYTnEwYmARNnmcreWjWgxU15Vyw3JR2MSjkwgF6Xqx4H4Lh2asnB",
  "key26": "QjR3wbkazQpeYMUFztuF8c8VNePzfSn7t91QPL1HrUYs3w9UzCqR2QseYaoNoQDSJkZijeVBfjxTUANbijAvSoV",
  "key27": "3Wo43r2pe5NZAsksVMBhATANVCSyyLX83sqmMakGKACLMRHGuKBYG8negBoo4p7HZeNdQTTHEzcQ4KxQD8JVw9h6",
  "key28": "ufT15wGUMCGWKdWGePgvYFensXNGn2u2xQphYVDgYPmAedPb3X7DfsJq6vzkexEDskKjDxXyM4P3DMJKecZY4iN",
  "key29": "4KVoRYSNoCNZjowNqjJb7AvyT1TTXDiSawTHwVj5etJEV9bMGHL8eERs6B4qXXVtU4mByU39WYD8Vnm6xnMUHcX1",
  "key30": "4SGz31qAqMHqwzzut3XDFzYwLVPciJEQsXwoDbJJPP94QTFvYZkvrEG6dTeoAxYo49oYEgjSKTiha7dicfHhKvt8",
  "key31": "3XVAh8cePFXKXmLT7Hg9jE3iyDnJud1oP5HkMzmFiCt5w6afDyKGoysSUTu6sjd2C9VQqXGhzhYz1UpLJAGfmYPa",
  "key32": "MjtYZTDmMYbwMNUDLHaxiJWgi7obCTArFyT2qFvjXi9GPr3Lrz7vdabtsoN5A9FsADdZ7TQMhJi5i1chaP17nq8",
  "key33": "5uurB99G7zEh557syQqumupng6jSDMMspZw5Tg9X74pwsuAGBbpQf45EDK5FETFcHQo9HdbYFEsq22k3zJRGd9En",
  "key34": "iGLgAYCxUSDtevyYA2aXAF3BaYW3A8ZsNEUSX7e46YdVjwfiNhXmAkSB4cL2KhUCcNzgZTX2sD5FWSwWZhvUgXa",
  "key35": "5upX27UWzRHZsinnuhQhvfdSMrT8FYUfrVdCmtdgzUVpTDtFXViiN4SQyDU1kYo1nkfuFZh6Go8kDcDkkmykWREc",
  "key36": "24ZtjfAU8ZJUsWpoaFQpdW1wZiJre1TDtL316kwTadHN5UnsajVXHLtbJELX7f2wHPwka6vx7Ckg59wFHJLTWwa9"
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
