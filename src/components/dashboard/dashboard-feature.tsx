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
    "BKCRbDv3aGZw8YzxEmoP3hBymEzckFgDsEha8STEnCK8QqptCJGFtka37EsqsKQx2AAwC6quXxU9eyexrgRmoLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iuv2FDEUrkeRDFsGz8D1LqsByhfDU9oxBXeNzgYtdr6tCiRd8hJztpiat9BSvoTFxrBeowBKnfApNgeAZE2HbT7",
  "key1": "2Vwu4ciaSJ5i7neQfNKKr1oCF4kik2tvf7nrV4uvF2n9XN6KMbJkPUAPHV1P4WdCVz32Ng5Udq7g4nrnvViKyw3f",
  "key2": "2mNvjAWdQKVeBJogzkRT3yEPqBkWKqzhU1J7d3nMsFH15kw7KdTme5X4mCeUMcCiGHEWbKeXYuNT6iZ5ZZonvwRW",
  "key3": "4aVMsdSXzzKfpqmjw4jXkmX1CMHoiSoSK6KxQiWPNzxDWuZsRomNdMURDUEFg9WTdzqrdunSFLn2izmWpeL3q6JM",
  "key4": "2k21To2NnNtsQZ8KsPQQdTnHN17M1aawKLBPJ5r92q5zNsmizkkyjLA7hGdCR2Y8eM17EFwqiq9ZtwdCKYRJgKLf",
  "key5": "4cUuxyxxqiCj1S5ypz3vyfFnCChpSsmH1NfVDodajMPSwhUSPB6PYVZAvphesmaFFiQnh6LaoeN7t5KtXYgzXMAL",
  "key6": "4U5hkc1eK2QGE51XHAbxgFVeuiFGNhm6KZSsLEQ6sS9en4dnAkykD8CWdHh9R8fkZco6X8TyWx8jurAgYfNZKx77",
  "key7": "4Jr2Kh7LSyPYE1WiBAnYzjRWv8HQoHEac878j7z1gkzARkfBoUiCxvCrb8Q9mU1fSgDmFBpYz1NuaFydy3jF8Td5",
  "key8": "5YVoh1Bz4X8SreQwtNMEQ8MvvhjXq6n6uQ87aNiYt788HtC9nnP2BPfycQEDngXhCZmQCKK6HiAfuFmrX7W5TuQs",
  "key9": "2DbvkaGUD65nyLHQRyDfEv66uCEC9zosxuU3Ub2uKaLTQENxR1pDRZPEuSqUbZBBDr847zLa3ZXADa5irZ4LkMzh",
  "key10": "yyPhDigttBb3uTKZKq3CR7rWkVEHwkNLEfTspKsi1p4SbAwLVGTpH9sA8ne9KkRQB9tQqWmASjbwZhkguwpfV1E",
  "key11": "3bHjpBK1Jg6AiLWpfiF8Kc1hVYqSBRZZvmTYkjCCjxdact8KZPJoQCym2a1WwYyzbZXXzuShztMSgMwqxXDSyJtd",
  "key12": "5sHDPFTgVRy9mTgBXCr83poUEWz1FgsH7xFpJ8DdPE3FHYrZPXz5xrQHu3pqdiLdqnQfqnKxvo1T2R9THTwhVGzo",
  "key13": "442mQWVB9zcjsQrVt7Zuzkf11xdwJxDNQhgP6kHKRLQ4qPbi48icbUCkQpUTuABRCyUrn9jKiWHztyJT2wnp5qe6",
  "key14": "2aS9FWqcqQMf25jGcNXHiiFHtJxguqzVTavCMAmSppq7DE99ghYt2V2nmD2TEup6sBUTAC4UQK5v7BuM6yfJo14R",
  "key15": "5ecV5sZ6yoPoHa78EkrBtxz9PFhH621i9xFsBPe8mmxLGnEEmkefgaaw2d7BoAkndPbFaqrKEXv5FAtwhDGNki8e",
  "key16": "dJPYMyzkYs1QLWNw96r4sPdSWJqNxf3GqQ8ZgMM7xjSf55ftQfQfpi2Qsz1arnPpQne6wDpBpTghBnwMadgVpAV",
  "key17": "2RbrfkmJMaXkGor5tAyacjVFrSE1GHcB4LrDMK19KRH7mnp5GJ5gExqG28ac5JGgg5HAHrYTJt8eykhi1NeDXZzQ",
  "key18": "4wBy7eQDfVBAwSJrFvEwGhABRnXfugizGQ5nQuYmWCyrxTf2SaijyjNeDNLuizp7MpSGWjkdfKhub6LMYLG8X11k",
  "key19": "3Q7My5GoMo7CbGjW6KcBDbUTrfYWw4iPH7wrJPmX3ot3Zpma3nqPSLcDNyHU9zge4gg9J6zcCBnzmbWEmfhDZ714",
  "key20": "ZsYnRQ6LgQEk8UdYWXi9jUpNXvibBAeVFp2SpyU4xGgSK9foVcB4CjZRYWaoDdTytZhKfR6uJWPBkkzaV5aUwGo",
  "key21": "2GQpnvZNr4sa1ap6eM3w4JGMjhoJEHzxaJvzKNyqHxwagXHJqx8KsBdpeT8hYpUuQ4RxAToFuK5NnHrUU2mwhzNx",
  "key22": "3o3Y3SeXjLSEDjXDpPex6JK8xYWwT57fqwtE71qWA79toRWcN481NkkaX655oUXPt47ZiMa8pYZMAVGbfMi3AuEY",
  "key23": "4UXZKJ8LiusMc6Hhx7oi6xvQrTrrLbbvoEPWfJidegJwNrvGecg1qs3X8JK9BjPGm381STC1TWW6QEjaU6qEXB4L",
  "key24": "53i4DAhL5zUiGqJdVyiuxbGhctjVBKaV8jh1DYnwTGUuCu645UCq4FQnN3N8XJSqdDDkiWaajPMpJrpW6wRfHwKg",
  "key25": "4fNWkMukMrnwXmEgWz6of79cb1MAnHbp449AEe7mnHWE2Gok7NshriKSgAdvUGmAnGUvzpFMeRnBptb89MvwZyn8",
  "key26": "jwzyawaFxsHeVJ9DqTetqcRpsf12d6RubmeswLfFwffQ7bZQzh1QUPYRBqq4NPC51fs61p9LK7LCc9DXGSz43rD",
  "key27": "5K2fUuNwK9b4jciMv2vAN76vTF69QK8k7797UN1tXVy5ct7tKDM6aPkAjjX4gSPscoH7P4C64e1ZRBpH2kbeoxJZ",
  "key28": "5gFrBSWetggJ4AGpqL91eeLnZJu3d87DikU1ng5LE6M5TJT1pcwv4Ff67objjJPXW2UGAXLFGdFc8wvZfCKEs3rX",
  "key29": "D1cvwWcnVMcNfRspJF23NBeV4A1UU16ETHbu9qneEKxtfSLSng4xbnhDJt1Xh7WbgHLYGxC6Y5pYc4fAkGr5tat",
  "key30": "BPsuHjpDocdSct7XmR48nufK6GCHbtELbbQMBh3zXS21AraVUeeaF36ZvNAsFrPYzETQZ6VqwiCoZKcttkwyitN",
  "key31": "B2cGvBEJoeJMeN7H1YX3iCvdd1fT1Kbjc5pq77N9e2nLFVq4vp9y7TPbjRK2CqvRnkypvWefk2YjnjA1oqFpKn6",
  "key32": "53BHJw99yQfunWxb3LAWRbdAU9dNnVgKxDjctGdpoefshjKXE91FRmzhqkJqnShDuL4FEsXsRcYa8XQgnVCRAsed",
  "key33": "2dWNPpXVg5jV62sd7618kCWj2jCm9F3TvCv7Aen3hzLFU82hcFxQsUd9iffsw2cbhzQtuFv7zRi6vVGYSdz3F3Ws",
  "key34": "2S6dFA4TVodZqw99b2BdjNnnvTzpQwGf4YnfvFAPqLjnC6uoXXWZNYXKjuCjRB5ABkpEnDztwpFtf3afDrYgr1XQ",
  "key35": "2B7oKkLQLvcVVYsEthzTfUhKLagQCDVFfRdwXSMw16b2zZ1ihRfRvXTi4G3NnKPy8PNmwVriovp8erFZ9qfMnGtx"
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
