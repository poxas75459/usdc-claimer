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
    "2Vy3NJJBjvHsCaGfqa4B8kmwPHY8934sYTpjeRBhdop1rAF2hTaVWQS9fZCiGCsGhFGVJkePczKZyt1jk32rdwpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tf8xVX1ety8ZHbmhBPUfoChtZMCspaQdt7R3aAHrtbHs3ojZZPvwbDCmPce5b1wjwVTRbrzA6R3SEKR3oJV2oHG",
  "key1": "iAXh3xWf3nMiYp5zamHuq7qLRt7FziuPswxxYsoB4kZomPoNb7oK3cVs7DDhTcraq2wXDWKyknxH76Qk8WmEaQt",
  "key2": "yXBMdbrifcFJvaDiSxwnxtdt8BCkLHGy4pgqaX8D87Ch4aokcdHacj7RfjCn9RS2nqR2kmki5pFQpWTeKGpSC1v",
  "key3": "3VUZ9wYhGMEhJRJCWMEQyeTDRLMJNbdsNv5KVHLjEa2z6FQKgR3fW5EYP2c6ZiQHwFkdma1NZf5TLB3TPB1ygWDD",
  "key4": "4vhmXgyXh3fSGtTrNX91idAURuKpj95d3wWepdvrGCF6KwNDVKqjyszKnMyE7BtNv6ZEyNNQxZwMdmwdRJWy8EdQ",
  "key5": "5Ua7rhapw3fc76wsewxtZs1ZkAF9Mb349kSdcw5BiqzDq1ih6tJaCyc9BCj9YS9eLk4HjFjaVJH4nvJh6g2FSJ9G",
  "key6": "5p8RaBxxEmHTtgF5r9XUaCT5KG7dpPbiV6PX9npaz9LNyZhUqYicUTvxdVfHYzHteRQy5SN7gW7sbnRUd1pJhxaN",
  "key7": "cKgtubgzmFF12khhkYoNZpM4QxFWioQac5Xdbte4dg6trwM6nhzeKbKDvZ2pFrunf43Fdne7KwLvkZPZaZDtaJr",
  "key8": "2o4daTVu3iFZG9hfaTR8wuyHHFz9GV5P9b8VUQUFRVcFgP8MMj9XDhMQSyKPT9Bwjha7AmSCWVt5ndPumVwoWHx3",
  "key9": "UvkmRBnc4VZ6sG9B1fF5YasaCKSdYhcQq46dh5tBNkjoqSFDyScpoQ6EXGGG8vrvYkDbgvDqvSE8W63TudYFGWF",
  "key10": "5RUdGnGKQRUNrYyD61jrJaYzhmhPDpLuwhhnptzrs1qY3ziW9obTHVMhmtuEXSB4ocNYhHFeL3hPbqm4qZLYsFdT",
  "key11": "5gMvfmdFy8SyRTrTaoLXpJHA3rNzQ5mnsv5SyoUrh491Yyfqg2ZjWvZYJnLBpFN8wsQmQp7s9GqondjChHvdpmuW",
  "key12": "3vmjsrKsmYCeWeGdRrURUXNdvJ4QVyjC6asUPnrs9QxWi2FQcYbe3zPbD7u8bdASyJ9twX7a4AoBxekg4UZfK3p9",
  "key13": "1FaqzdW55r7fBbEJmyDnDjveqvJNxHT3PoSmoFNFXRJLu64BxkqSqRvWjBScpFk1rx8pGP8ssV5KHkrbtD5pUCk",
  "key14": "3B4Fxc6utaM1uiuuxp7WqZLEWN7hC8UvgntVvTjKMrDLKVfCt4iU8Eh9Hshm6ao7x37yRR7sZWwCGfWiPtMqT6yg",
  "key15": "44kaX6gqnBPuSHzwF9WF6MBxRwnMWbSuhHGumn99PDrx6rnmMiX58KYt3wUqu5MZ1J42F98yqFPfFgVdDjhGN3Cw",
  "key16": "4yvbEnxhjFZmsXYPPnBeqHfTZLd3gTZe4ysPh81tggYxuoEmXFZ1wWsREtxCobvyVQTNZGkRaEReDeJJCDn6VUea",
  "key17": "3PGiua19m2rZ2HLM5cdz1GapdnUG4SpM96hNXsxExJUcyL55iCNra8TM9Ff19Pz3o5rFHS5LjMTu8oYyU2zo4HKA",
  "key18": "619zejR3mSA4EhQyq1dkFJ9k7ovdpLuU1rKvWSG7MLcKx7ZSxLfigudQQy1igFXqoEk6EPurZEwpKC9X4uMkfRyy",
  "key19": "4rz34QpW4Nc4TtdPU3DT9TBeTRFDTQCAvFscaatYhLiXcSjGnkMmffFjNuhTzEGLMVdCUxBWSdQUpon5f11Ei319",
  "key20": "4kLHJN7ksYJVLWK9rHvM9A86HFc3iV5sA9Pjatv6tXvU72arDajUD7iZwmhxkoNxwwyAyr3iH7A7zRsLkwzCXQVA",
  "key21": "5ttZJqY1PGADLyd3P8Qdok8AsbUUJayScTB6nZDVYs5rykVkqjjeq1PgcMm7jUd3qWqbC96tJu8GtRcBdtsKqvPT",
  "key22": "kWe9b8wV3tFaKWJY2HziJ3SgbegSnGSPofhBadV7ifU6iCLEzfEp9a8CXQAgGi4H94qNZEaimmgc9WfasAYty2r",
  "key23": "5Zgo2DiQrEjGWKWXDBSSWQjF5WdDtuL8LhiGyE26qjnvTpmDhkLkPUxQXzdaFem2EYAsoLUwYAaBevDLqDJWWvKY",
  "key24": "429iw74svHm59k44u2sEzmduY6kak3eSaMfB1UdUcvbfrcDMpEtbEVJamZ4GtSsFxKDBeZ349aceUpEuS5dEVrvr",
  "key25": "2iwnwtPkxpK9AjNoJJo6rZbV1qfSXCPML55uH9DkSum6VfT9KoNypwmAFey6NsX6uaixErsWjkRebxxV13vu35Rk",
  "key26": "3ZXZfgDhXQqLLPbjkJhKENrEhjizpU26FHDnLTE6vpwfg5Js6wEwE9nAcwfDHLeMic8PB6HoujB1Kf1GqfCFK8fV",
  "key27": "3DzP2sKVZy2VHhsVckE1vn4ZmfeYYBMZ5m3Zq2ichpcfB9tueL2LNe5cJdu3Exi1ZUgHASNDtjPZ1yqtRQded1YC",
  "key28": "2qQ7ubt8njhUWsbfn3r7mqr47Z2jWf2Kz97wwvSSSeoTfp8yuUxvNbEchWTVpJPiu2Kc3kTX2puMgY6i4G5rERof",
  "key29": "4qMqqiSzBYmZdPGMwMJFcZyarQKp7iwCQf8jYnvNDYJXWG8YwVCoaWKK9qnS5Mb7EL4XtfCfR89rZvzLxGjf3GNx",
  "key30": "4V2m1uoDCWhSUcQBE1t64fyFRxbmSxXECodFWJZNHagB8PiJpTkt22T7GNsWdKVCVANHcArdiSTvKP1pvMP7nuHg",
  "key31": "a5u3xM1wjcCkqttuD2KzVRj8rkr7s73ZnDy4CC9AfZbrZ4dcYYSa9zmP1Z4J1vbV3rmPX2vGhqb8YqLGQqkZUax",
  "key32": "UTWjj3ZsarPSdJNFukvYNMG3dL7muxtNqGXwNx4HUeVU9Q4u3mbfNn2jhGRTzS1k7wyzaddhpfdzqCoRoZ3GkLn",
  "key33": "2z8qsD8TvKfiTG3VxmkbsmHcaMBfe4wgd75yEpuTQagn1UZKCgbHTR2VSNjgPfyorAuLZfzxMQcaHG6kzQ1wxjbi",
  "key34": "2yYYbtTpzTM28sb7cBWoTFDGhyi8DGSVMK43xsP3JTWmqBoMeANPSJPo9GV8uwxt6G4r8gT9Q82Efrm9rNSyiozo",
  "key35": "2q8PGpJqA9Pfy4xoSpCUnT4LE2fm9MYkHpJiAAnLYoB9pWnnWG54ZtTUCNQMMBDzYXhZiRHN4HseNrswmKYwdFTg",
  "key36": "34zKSGztWUMMntFri21uEERDvo6XKrm1QAXQoFbWT1hVkA7E3cuitBfUrtxGraiPJd3B8NpnY3tEkAZ81FGrrbE6",
  "key37": "4NTpKNMkPrDXQMiL4scGsH6gT43rUSDqDtVsh1VkJQxfELNUbVqKVuSBHHzQogYfCty9inrDh3Dddor9RWoUxvob"
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
