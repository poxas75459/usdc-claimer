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
    "2iNjvpTrJsuhvCNsyRBx8NKqi1teAev7qgi2sC1Bdd5Lph2j5rezfJ9Fc793Y4DQxUhACQxYWdkQwrmuB1Bs596T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49JrtLKKKM2uYGLetFzTGJgMato6wk3FedGLJV6sbp7bVckUVxEEVnLtbs7dUnp8BkG94YbsKikpbrwkWadWTvaN",
  "key1": "4uyHozXqEnZ4Za9y311CXwEs1tRNY97ovvUmLRVKifMJ8LscpnZM65btaLFAEg2up6BLu7if9kP98bZ2xVnEMktw",
  "key2": "3j1ow7EkNG59zFRnqpD9Yy78r5Tmtebm8ELJSNYnenAzthvpXYiz7BTdos2dBwfqcTArEKVuuRsxKdwRt958W9nW",
  "key3": "5DgSxuYkAFovE2rf3R8neBBG5AjVzez3RcNBcJSBLwc5tytfzzTcohvdkRrhSgseKGxfS43cRN6FujHFHnUJWFbn",
  "key4": "3pTtmVykunbg6sW5aVzDYfy15kwm6GrmX9GTUFgV19yCxtJtBSbzcbQcn6mtTYmeeSLGnX59S47YkWiW335GmRRG",
  "key5": "fSoY7Kg85cFWD6WZEgH5iDPLCuZKoLtg82qiMkJLgmdyXiYPVFZvRGQyDkXm8xwN2aXkr1SMe5fVvqqbeCfoY8z",
  "key6": "2DLJYoQHhX4TWJM32MtLwXLGRfkiE9KLryebnrgQHqzGL4PHWFypGKcuaLCjFbmPzGYFkk1nJnszkkovM7ogfGZV",
  "key7": "5HH7U5YTMG6kgnFUDZqNp52mnbgVYaZhyW1m2Tgiv7VZBpcQAioTKUvBG7Hj72r3vRW7tpqeWMmi1S5vLxb64ppb",
  "key8": "5zg17qWVnvU7rHAwStDFR5QwDS6CpFuV1E1GPoXAhLPFQnaB69R4hAvXz9mPKtdLJmoA8g4F6AEKihmXG8GEMfF8",
  "key9": "5i66pJ1hpx78i1esknme6v9eNMr18e5XFTy4owHmhWFxA44KauHQt4Vdx2DzxyyPniiGaMYs78faSbPvdyNf9A67",
  "key10": "4TkREBqcWYehrcn8tCsan1MzTp3KKxZLrCbqpaYLpugw4UtyBLbPRRfgJ49Zvjwx16UBZsnGUX9yZzhv1g4iA5Lv",
  "key11": "kLtW4ZFmJx9n8fCVHDKdFD9UKMVEWPaTUL13atcAZxXj1rh9nAmbvvfZZ4i4GRyLUcKUGWrGSrQedDvJmyxMEue",
  "key12": "51qCFJWG5YtB3jePudt9MQMZ7y5heRycKxZg46TF1oUbRjcSZ36fxwnhe74Sbtwucm55MbwwJVuh1ZWgF79Bv77p",
  "key13": "qvRbpd8P3NQKdphPUtnYNBJiiqUPsY3wwD8DvQ4khdZeKcNJXu33NN2BnMSekiBQBaRYCQkAHpejPYzGLWUNKsF",
  "key14": "KGjqvkf9cPmsoH7N3cvHi6DiHQ3JVcNG2PbTQYevxgc6CCSEUThL55cDGUkcC7EQJF4EDvhB31Hvv8faBp1eMsk",
  "key15": "3XEF15iE5cdXpqLXhoU2RUAPtkmTNm5JMhhVhK2LGFfEnMy5BtYGU8oC5vVkCU4wHTBmMQNSKyc7H14VkK3HaSHf",
  "key16": "geR6vo3NBSQjEDr3PtujDuxsEeSUgPPiKHiizJUePJwRdr5yD5eVsPMyCLqY8imEk7VgxPzwficGWMyKo4GSHky",
  "key17": "4jrmAS23Xta58dKHSCJjr4LA4F5HVtVFszaccUc8UgZ7ycXBxa3tUMioF9BFF2DsBzCeJy2pxhZ463UDU17V4ez",
  "key18": "3vcrrRRFZof6TPWFAXTVZfqthtmGqGnTAgWEcP2iEoZHviRifJb5EzP8UoJ2jL6ZvD6WTP4pWxPxuNynLEtFgJyd",
  "key19": "ALJixz7iZfS3Cv6ZyMzTSYuuuyBYMQHNJfXLTE7JyACGfxDo5T4VRAaS6tESgt62Ry9AgTcZWEavV1RoVy4iS2M",
  "key20": "53zMUgAYWWbmUSCXSwSPQuKQF2sjmHH9DfVpCnYBq4NhBvecWLDpWEWUBxw6vVLuFJdt1iWad1noZek5UPz1aiYD",
  "key21": "2hMz4um5RXRCUiFF8qBwvzDF7wPGceE4inSwq2vhqnQAcJCLLGf9DW4vVMLeK1pkpifb5WG3b4doy6JU8TxxSt1J",
  "key22": "29P9od5E3Drj9KhRKZ7CQkj6vAXtc1Z1KxV3dirJnS3fTm4w5EMW52gPm2yWZRAopg2ZncAgxPGxa9RWXdf6seFv",
  "key23": "5VjBCBFcrYhwWNyedLaVnGEXoWEqq7yKttdRfu3FFKKPHmJH74Vr9Z8HHKyEGbe6sBwzJEvDQjznDxhtXnq8gCU1",
  "key24": "V1kv2yUzKzUu8pnMUtzo2WoaZhPABjZcEBzWENNurtCGwgMmWK6Qtg9eUnpNyKkk6P35RVDdjpybfAcQ3B4p8mQ",
  "key25": "66UUv7roAzCxPxSTEX7JchgG9ToJijPkxkD8Dxt3nMCg4YbQnyDqegnjrgHKBnwRBneSwtFg5JaptBH8H9wLwpZ",
  "key26": "xxsofSXKyASUJHTyBXdCQbCGhxiydmhkXBVXJA1VBeyZSq2rBMYUwrDTC6WTQbB1j9iQbCUdPrcuExypTCWG1Hc",
  "key27": "4r3939nmguqZkfrVmrhWC7P1AbCLMELSFfiLgZLSJgDNtCYGpQ9X6U5TnnfaHzKEtSTHFfeE4Mjwuj2g6ZdoCDes",
  "key28": "K3iS45zT5YpBVNUGZ3CwGckLyW5tM7rmDd3pxviYNTGQN9hvFVc7HnetQNF33qET8oTJLtHSUdAYe6uiPjWouDF",
  "key29": "34ZydCtyzGvuLFzk645359LHvGDS5F3Jd8wEX3gAA41VGUuYY8AdbmMJRmcV5vxprjNc3SsigiQUteKunKhAf5NK",
  "key30": "zDq61eYmaXwSrmEabXmZDRiDoAPAhnjvwaAmfKo1QnGYrWo152y7NAn6LxBodVt7qytJfJogyLT5bxSTzcqum5h",
  "key31": "JAx2FqiacMEnpAQAbDkKbPkP3wom5zs2k37wH1AtvTRd4EwqjPUfVRJf1Y9nWkLg8bZ216R9WpkyNCjrocY9Q6o",
  "key32": "wZ497LNJULPU3278FS7irohuHMUgBRVjn82xg8AYURsQkkjcw9F7sijA87odu96hhdNkHDfHSqLfA2dcwy2pBB8",
  "key33": "5Ad6K9JRHcgWPWedfbWaqEkWzEcFfyukvZhCGubP3MwsTt9vurCUkH4tA4vKSmBQfXZracpzjPQZp4cgSs7j3m5a",
  "key34": "2apgAm8toVVeFPvZSWz3NpzvigchYdffK4gWra4gcxCBqB2qLAPBNJWBnaGVhxGrLUQ3Vib886S4QK1c8kBcd4rW",
  "key35": "5vuZYBsNxhQ2xCs7F7gDjfcnyENNN7JjkPzBiypJtQKWP1crGosWBtDNavx9JooSV63XzEpYJTrXFMv8PNk8CUJb",
  "key36": "48QAijHFtz1arfvL7PEpNNJ6oCcvW7n6uEYHo69euQdZYYhfcR5nkgHnnniQP8F5RxVyKg69U71kKHcfaGDTWrg6"
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
