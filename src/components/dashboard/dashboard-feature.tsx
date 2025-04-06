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
    "aquuW6oZ98e7vLkqf9aWWwxvZGRLN9yAco6aJ6ob7RTpU3t9QSgdTeASrqP6mGJt5w72PLjaVLxk3TxiCumXm6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z7fDGXdNEcqa5oBJBs5ZqfpPRdx34VJcwfCzBwjaqhULvSZxmUoPPRUqrZtW2m5mnUoMDKkBh3PJCg8A9ANzSab",
  "key1": "2GgR6EXeRdUnMbconsgB9rnVvwT1VoiuXNc9bGJtbPQEsXEiid8mHhWd5EPiQKsfusbyVUfgSSCZZKPnWN6emc4J",
  "key2": "5gr8NHPp5G7jEQDf5uUrpzRMFxN3cc6JSqDBsthhpZk46gcRXh1n2rBeZs9Zza6oQWRdRqM2djJPq2Nqv3EV5TFV",
  "key3": "49Roabm4E7wJbTitznGk8nEk5aDXz4tMqu5tLxV7WLQ5NST92TafewcMqeLNeZxhnyhsjHnmeXkMUHQ6dzKKX2Lz",
  "key4": "3fckcd1YonXFgBbLbuHA41J2xhgF5GR2w9iJdM7sEBCun5KrSZWM36o2RqUCoc8yDqCNCHp1VrxVHJFfdnkJxMHr",
  "key5": "28EphDfCLr9dPUiWUar5dr2yAaLc9PomGWCoCtkBCfxP3uHE6yduEpwEp9Qy14v61Fyv3w7m7wbSdgMHiQ9ngDep",
  "key6": "eWS5xZajTHCbmGurSpWccZZNZo38MUFqn5W95xyxqrdTjDB8quryp72KcLd42Lfa8atgKh4RprauRb67drW9AUZ",
  "key7": "5w6am6Log7o2AE48822igVnAtqWTCSJ9TaxxG8hVkMcqbV5nPFTC2cWotrWxq38Men8Sbf4Tt2DTYLpRUGaFXttX",
  "key8": "41oBhsFFzUCjMbQEe7yQN8n2YdjobDzUKvk41WXojFAbkP2wyyrNxPMqriVBmV2A3BNU5arotX6BuBNrJRbRo2id",
  "key9": "5bpXrS31WwYa3wAcUSK1v1TTWQZejs1KnmUDDN9S7EuD8VrzieoUW6E5GC7XUMFisVWUpPnCCZVUnoCPtwGZoxAm",
  "key10": "27rmhV4tuPuJtArBdnfbUF8rhbE4MsrdK7hFfdYXiY157cB2cEef3KxZryeHo385xEsxfi9BGHVoSiFS5vzwCyB6",
  "key11": "5JVSGpWph467SyrQEWQp36cvdgsiZYJzoE1jmjJrjSBfSa9yaJh372MYtYU8pUrEBSh8j14qXG89j2cHKmhgLwy5",
  "key12": "2vZhJhvVNaTfyWc1EDiCg7w3Sc6QJXTyNjeDwC2T9oj22yTxrRVPcjChZFXCS4L26nLQ5qhWQRWZSH6iVozkHHuW",
  "key13": "4DSBJpj6RjTZCsbh4kBvH9hCSQ7fmxDKZaapdV5NQuMEtJN4biLZytWv3d1LUk1d6e185zkjZtGw7ueHNGJdAbLh",
  "key14": "4z2cM2KkV9QFLDYUzKnFERzqfkQtoDzrH6FKHmTAwTuNhtSA7wcVDeoejctb2MiQZk7JsbeQz7ykJMbcJk3q4ksd",
  "key15": "NhFLRDgZUxANopHpJvxu3XkaxGTfHVsYtN4NaNf9BiEs635jKQCJfAYEfxwdwknPNJ8f9B5awM9EccCYwRSnWta",
  "key16": "2sqEajBjectBSRPKyq9ZmR1dkgeEBz8pJ1rNM3NYFJFWxpyugPQLy5q81uPe6UCXZua7JFeyTJCi28FRsoYNxA4u",
  "key17": "28ybPiEusEkPYmRKm4wC5UyieD49STxzYfbAd2qLzcUSzaUStJRASzyMUZ1zciBGy66Pp4TDLGkR62Wmddd4o7Xw",
  "key18": "2FnQLdXYTSComU15joM4yJniu9MWUwgTP4s9tqoxezJViaFYhTiBncPZVYSZBfpxXu8Ei6ceitujm1LvReRZXijd",
  "key19": "8EZ5JeJrJuMUPEcaBHGCrqAoJo2Huoe6E1m7CAWRLwcSYqW7x8YwPnhTCopRXsisVCaSpwPch2fSPKbk8Fc1pLN",
  "key20": "22FNyXuxTDyrAXKXV5x3JpHrY6R6V5UudfYPXuaQAwHsNh7Sht1qezS2vbkaTYPU6CfBNVmTNto9H4JG7GuGVSq5",
  "key21": "1ghDKoQDWz1hmni9EJPcfMxkcXSJVPdX83173KEfgTJd5CcbVvJsvg2gVqkehFjsH5W97g4PMadba8a5YAfDHYD",
  "key22": "5mVnW97msCFBbgjDz9kTuD4mT8bcekZdCnDvE5Q3i6AT6D2vxHyxuX8xgZy4wAaDdqz25XSfC8GRcoSXU3bThZqU",
  "key23": "4S9dsojYLfCwaiWAJxcviaTG7aSdgjRFMP5bYKYzp2xo9G8XYxowauumCdEvDyHrTueNDzu48e7yc9DitRrQp3Zm",
  "key24": "4Cio4xxXJAAu79etJWxrwS7NpAdk2YyWKPLaRe38G7nrFE1qypXEKK3wK59GGRSaU8T8YtBHCBCE1XLdTQFQR7JY",
  "key25": "3EFLtGQGXdmd4LDQgjDkYKd3xNkQHcT22uGkyaFafKorwprRkoVp7gv5jWSr1dfSavnKxbaJ4GBzs5xpD2W6h6rh",
  "key26": "2WTd5sNi7gnLwqdBuG4Mpa76xT6FSbMjDvNZT7tvMhiaWzmJsk3fJ5u5RmY2DTiZ2AaQ3py4jahXNLR4e7NxV2qW",
  "key27": "2UU3tYSEQxkupkcsX3wBaiAWvKupTfNAVUWuCSpUPmybL1nwCJgcnxkMuuGy4o6p6fRc3UPcSaGAbJCCuAUCdBmB",
  "key28": "3ZSRuvG196s8WLR8CKbGN9DYbwoncA74d8yxNmMLa6WSPsJE2qe2DzCaRTc97MXQahXEnmaAvZiNAEJGLWL94UhB",
  "key29": "uuxDV7tc1CtAF5nbCUa71QthKUoFiUThqH6rRJJrCLLYyeGtyeSTV3N1a5kVzEXUbmEzFbFPWCz8ekk2TMiQAen",
  "key30": "59kxSXFpciefeQK8XzPTrit5JA7PpeXSDCD9XgyHXwvspSAqDTFBpQMNhbWXZWU465bc59cz96XyKdiEF9Rwiczj",
  "key31": "4J6jvLrfDUng91dmbkM9Qyhz7WLgNG8BMBn9BpzXrASXjCxrUNEBL4RoYfgHtPauBYDiTmCKqUk8fNmyFPYUeAx1",
  "key32": "57nrV1PzVnTEqwYCsjbAdWC6KcScX7yKvCs1SNEN6f977GymMvt5uyYmHQTBqrqisK6xUYpgSpoArXg5mL4LWA6s",
  "key33": "3x1GeqrEFq2McTkZH9h9pbQ3F6Qq8v3poL6pHEtcc6X2qwq5Cm32h6EYifPrqsHYwbVWzShHHkQiHqbUqJSiFzYo",
  "key34": "32AtavetmbPt8FJkHUZDmYoMeu7u1kN6DgYHQFUAtKucg7yE69MZ68Rsq7Ui46b7kbdULAfK9y2qL2dS1fhXNiDY",
  "key35": "NPEdqJ2gRtrQSzEnjRsGCZCxPLqvHBoUj3RZymxsjq75jFHLJkerkeqDJTZ3ySu7vY1mFWoKnL4rtHwxdEEEina",
  "key36": "5HcFvWZP4z4uAB39699JWz3gMq4KswoAs4j5hzwwpqb3mPQXd25MDe9CzJKbWF2DK4exTNcs2PH6nKPahQ6fjJQm",
  "key37": "56DcfPbrUY1MbyLZuqT2RpQvJd8DkN8uVK9h1jLaYYi2NCFRJCW8AudPxJmyqT3m6Kr2odCUG8TwLZ21vSxysX64",
  "key38": "y5G9kQ9diQqythq8ABfkstwS8SD4c7PJ5bqBhQU4HEm75qB6eCvq8rJxcG4pdGwUxawvx1UxA94zjrpTGQHiXok",
  "key39": "P1bTZAeQ2zMBqiovrnZGQXwcY4UZAHdvC7ireXfE5pEinjnQZut3UmJpQEUXU1zu5Jx3EMmCyYLRweSPKa9kXhe",
  "key40": "4JyMei2ws9PyDgpbrnHYohD3a7iixDLx41QAHs1R9cP1GkWZoFpCnFwnkTiMpTeMb44gzW37bCQj1rteo1hD3iWy",
  "key41": "2vX6ZG3TvxjuKXt7jyp9qcZSVn5i6YTUkRterHwimLVu8netiAUBXXE81GSgyzjHaYjttKH42QRaCMmuAmjZBenK",
  "key42": "2DsP4TZhC27LrPfYZQCpPCF1PZc3W6GCB5bqKJyK4jNTLciNGqkSYqajU8G7GYTX7qrqQ1CwktAULmTdQJY33Utk",
  "key43": "2pnsBuCaQNdteSViN4J4mpmbnHt54VjGQ895KWgH2k4Cpaci8wQzVx6TpcFUdqUqokzKZYtZeKVd43yjfH4KS7b",
  "key44": "5zR9yS4ZDQxjAeiC8z7CaWnW8Ge8aeMYN985CJ843sfPrmxncvmQ3AjumyCb581LdkqidUNGcT83gh4LbhC5m24G",
  "key45": "3Fds8siiqmV11BHS9AZf6xxq13o1gWhGkk5kzJmUNXtKpPDSdLYt85mCNVAM2jW6iDxAdy8gm7hDucE2uor79j5A",
  "key46": "5Uj4nJegiXwqJMPgTzjYu1hZBZhZXbU1umbcr7fDYhHUo8vjoSJYPQZBnG4cqTykYGRrTnWtdWiFbtgCL1F5DUEX",
  "key47": "e3ZNmEGxUtjExCWACCrFJvsNGS1ZiMDDHemtWSiZALQKk7tH6H9Sa2ffU6y8CSr17UkkkbaBFiZwuBKzHcvsjdb"
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
