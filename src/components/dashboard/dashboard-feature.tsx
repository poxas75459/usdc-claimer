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
    "5YgdP5YvihCHypFHvAAjsAFRK3VqfnX7dB3B8RjKkcphLsZagCSZ23rg7dF49Ws9bJh8K1bnSXosnzf1N9evhQR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r44sNowzYffR2bqgq7iBWUxUMaJz7aBHj8dXkdh86FN7p2N83QCe8vMNPhwrXFW6e2xiLtEJXo8T62nRAHNDW9Z",
  "key1": "669zmyDPmzCWPqzVAqSSvFcZwi38bjHcn6opBezWWXFCNrSw2zpqDQM5oznmmfx25CFe83YpY7rJFXde75UDQGVj",
  "key2": "41MqgTYVDFcwMsjd6pfpmCtppr1QLUioWHnELnR66SUwKw5emQXmo7VE1cQkjZ9ZRiLzuHbtSGrn7RoK17WGgp8y",
  "key3": "3E99o9iR5MBz6bDDRbrAxiyENR33RWKWpFBYiGvJWpD2Uz9gA5VSRrhXuf6nTn1CPaVN9cBrpeFNmSxnyXmjKK7Q",
  "key4": "4rDuFdNGhi4zmx6XTTuD6pdWMFbZtR6QcZ56m2S9PtbA9aFTTbmsUdn9jktM99e7rw8zK4MY6CByVQ3LHPqZwS6x",
  "key5": "V9X9VW8882LEb29y32rEqKetVAnwx5LWYDKyM3uatrMtAFiyGyEWkRaE6fixU3QJUW5A3trD5jZKpBVQzbwkRsJ",
  "key6": "2AKfe7FbWA9EmWsNa8BhUoP3zWn5G4dMKN18iVdEV9E1jZsWhfEAriz4Jof1MWcfUbvZQ6J5pXXUsLctMGprnEfg",
  "key7": "2SZpivVQmAztb3tVYijBahtUcVqNx7eHRqjoRD7r8nVYS41XCoxgXrk45zefD6u3ueiZxexJK7ir2vKrDVaJVRgU",
  "key8": "3tcLk3fx1D52nBWmEceUuTWhkaBAb4BrH6XqVWQnKuGXTQ8Mni5n3RtKR8takvrnDPtRF3STmSAW1ceNySGg2uKQ",
  "key9": "2BqF3m2zUFzqegA59Bbdbcm6HffysKCVebAzkzkXMh6sFh84AZzqo7Sm5p8N5YJcsLRf8qCbGgo7oCgxSL9JNxon",
  "key10": "zf7UDjgGWbDi9M59DxsKSqudgquQWcUJggVvq9dVAzpkTruvdUALut1VfUPrxTUcG7crNtismWYVHNUMeaimg4h",
  "key11": "Bx9qRvaQohTde6eY89ZniQseSruVQDcWxamT1Y9sMf7yVyC7PwE4Pi1xjRajwazSfPe6r5J1N7UACh63hGSxkhD",
  "key12": "5PMSohEsAqHhtXy65keLPRmF49o4FA9cMsBrVtgb8xzbyXqBAutgCkEmERLSLrvHss1hUVXWEcLd7LqypXcfRiMX",
  "key13": "5Ba62pjQgmhtNGyNXAUrdu7ZmosBqZuEJSH4nznhjoZYBu9EZ8xj5MWQAu3aDzi1Hu8rnZ5agJ773C1gvC2tNN4f",
  "key14": "5BZJBzxTgHkBYX3UC7jGif4h1n7CKfP3dJwUyjEnoTHG1bcS4hPGYLBAjxHAdJbakB4PPqNrAidH83ZU7PUyjoPS",
  "key15": "5X2SZ3HEhsfGuSkJSFmRTrvmagfnoBF1Jws61HcCwVpZGUUY7gwPBjR9r22tPUg6etNunzPkqdSy8DJFGCjqeRT7",
  "key16": "4fWxQFHGhTxsCdtfA8TARsPcVxy971Dajr376nZ8yGsjN5WQGTNtgVFHeHp8CaEoAzVQQx6rQXw7kdbRMR1sBNQD",
  "key17": "5fKmQgecwzfTKFeb1KM52xY7NcgpjfSNgPSBgkaTtsc8D19SukaGjLuwkYqtBvyLJKSEb2YLy4ytW34epPRAdgC4",
  "key18": "4A9G5FXmURqApMDdDbshiMNHJyqTWxHAZHhBiLssHWEVXitpi7ujNdER1Ns8S7QxaPT8Ctpov9tv7CceRHLAD4WZ",
  "key19": "4amsTnTZ5U2A8eLikzNxgDxQwHZbASQzB9ounuaBb9Xnnv9jXrLAESk2XJydqPvCrymMaXHokLBF4vG9qktkb5W3",
  "key20": "5emchUh4fSa8jmzFGEXj6uWDuWhNabyfvQ79z8QdcV8S3Sadwo4riH5SWAvGECFPu1VuthMHEWwP3fpbLqKSup33",
  "key21": "5vvS1jN6m4RMzQniDDBihEomPKhdi6PbcWy3VuXQp8t8JQ1VAgEDxWAg4M6veGYp6be1FJj6GjuoPbSriP3Njb8F",
  "key22": "4vXK3QQqUSRZjJSW8XPdBESCKLuyd66SoxkpcyGJyCVi5La9XyvV4trJtbSp1UDeAn8ZikfWP4L5KsUNh2h9DNFw",
  "key23": "5HixPdL46z2WuwX1MTqdxTr2MKdtNnkc4VBbB3rfWRShqFzYMn2CiSDD27HpAC3QvhgqTekFFBDNNSwk8QFbmRQS",
  "key24": "2oKprkMPadaE9sSTLXCBAtjRYALmv5QsV9aGf1w1tXMk7akdvYpdEDcCUExSyMjnGdrQsWuYpJNaKrLHZwZ5qvVL",
  "key25": "55vzeu9kJeaWVCw4W7Kwr8qddGdJTPvpBa8oSfdaBys5JYPQZb1s1RZNoUZi3c24iqCFpEcuMKbT5zXN7fMNN5g4",
  "key26": "4EssT1KKnEjap7HGZKvH1omkL7bBP2ysHg2nY8Y7XNrDo5izvCXNEeJ5Lm4Bnecr8mcT6xXbBJCPkSoAPTGixNYd",
  "key27": "QXxjJDLuKzPv4eJUSNHrWzfSDWRqL7Lv4nUn5MVCBm3DGpFUHE62oiYbBcqyLVVTt8Atsv8hAwn9Kgu9aCRBoEU",
  "key28": "3d2D3Nco7vzyiQV7ST3gWNdRf4ApH8NNV9C4p5tDdR6evmv26pKkQyJxjD4Q7UR5G8obm4uxhsxP1gAt2Kuswxnk",
  "key29": "3RP5ooFpQyV39UpM1fo83VJcgqyQ7Xggby2pJwUDG4GaDCSJzeaokdv7RBGXeDhB7nN89AxCvb6MDmhPaVRtBmBV",
  "key30": "5fGLKtaGPLik5npTmMuW5xdntwbNGz2FSPwyVzmwXnAQZ1c399WmPdd54Uxu4uRSfNHDfmpGaTJPjQLYkLJ7pWzJ",
  "key31": "377FisyvtCXFcnkp7raxAMnvKMjPnf35rX96teQCpuZgv7GCojtpXiXTRnusD5Nx8msjv7zPS6SAHxuZurxjhnVR",
  "key32": "tXBpqDa2gk7dTL5zknzJqmKsHkDA8B62nheJ6tsLhfTm3XzZcSSYWjM9z2sZzZmbYAPFBfbc7Tp2nLfUQbQT1pv",
  "key33": "r91nmBV1ZGQsHqok4UyZtLMi99cDd9K7VJ3DsQSVwwxY3GHHaW4uUQabFNT92YRgxDbk989DehDF6Eba4ckhNBj",
  "key34": "5fGKiS9owqozyaiSoG8rwj2keZ3F8P7xoW8r1Nk35RxfacnXhNxK36MBQWiKAigtVX99FfuSAnGrHotBiLHCaALD",
  "key35": "4TSssFgXwM6MN5d4nPbH5HYsCAMMe2Ua7jHjz6WL887zdz1Zsr7gaUoDWswCpCzFRqLLpgiKB9N3Fh6ddXYSta42",
  "key36": "5VBWyzG8ueRE6Ra7YDvCRvJuqzngihrotgRWorv1Z7YaRMnqyWtid7dURCToR3X6YQ3JDAbsKk9VDWNoH3sUmQkF",
  "key37": "AvJxvvphdeXG77w2yCwmgPFcjgPjjTvZWuk4YZsuY9M4kgraM4u6WVoNJBuDcRDUYV62XxuTAKv7MNwm6Rt1Fri",
  "key38": "28A3eiSNsKEUhGdyEgaErNCoFzffHMC93C4VWGZz5EPrUyvKYguKcgrDsrM3aAGw2t7SzZ9WLVERvKATrGyprFKn",
  "key39": "3d1z7zQaihUDgTRybSGb1aBg4Mp1NXwPFsZoKmgr3pohLw84PTGnCEKAj3vEHn2ngHCgcer4DuPrUqyLtLeXvQGL",
  "key40": "556DA59wnXXfwocjT6ptWy2xTyNbAhmkNTdwUHAAihPRFBfyUqjoFkgBeTtny2DEQ7Pbn3LXHp88TkiYabJfYSX9",
  "key41": "4m7A5JVvLtWaYHodFcSPPSZaTfGqE8NkNnR5ioxJmeJVV62CtThgeZJX7Q4zjNkquvZHAqKHTMmjtQdMdUqTZ3SM",
  "key42": "2HmyVwPqAKqGx5dkgqXXbMuGWSWRsjrFKCyehVWNJh5bD5Vs2gq4VZ3w9ff4oyK4dnS5r8fJtq1bVJGLrqgNK5jT",
  "key43": "2AiACsscRsxNzkbfAiHRjBwpnUw97zGi9TuhhGJCiGuyDdjDXpcGaZjK9btESuAsbFQWgBotATanrxnnrU4uhWum",
  "key44": "4YQqdubk26w4kWcoP95y5LBLPEswhrLjLrtuAqhmaTRhHCVX1ZYdYXTbSJffsSGdhHpjDG5HUrKwdig9Yse8VSSm",
  "key45": "EDg491pLScwrn5v7wGZmzpJqcCwu1ombyHXSWzrEz2pNDLPFwfexRKjQM3UNn7DP2JBFwP9rY2iQrQCbvLZN2sc",
  "key46": "24DSZVRcJz62wi4ja7myUb1w6RGGEyzk5fNEGdZkxSbj517wwQwGjVLfw14AhWkfBGKj5T63VDr2eZbWu14tkWum"
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
