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
    "3hgSzNQHdFpx65rAVpxPTftkd8sDuAz4XgQN1YgsBCCrdEHbnSReBh6ex3CWBEfz9Xv1ifqMJUwbz3EqHEh6EMqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cd38vpZ7gvNpriQWszqMQRg4VuQ53C7sjCUwT9eCZPC5P4zpevRD5MFivfRhyWchopa9gYBVzePXQ7Aa3y5R5Vf",
  "key1": "3b2ExdH9NU2wr8vnz3TU4F3nEZKZgAYykx2X54HwiMzSscNjFjTZHzzdPAmbsnAr2GaVVmti8Dw2i84icn4EfNTL",
  "key2": "2Wv9V6Rra442hdVWXy1mnWxdA7QFVroFMPyespwbaN8Qsxjvc7Gwe9SrFdFS4GCPCyjjV5eoLJKvVLb1D1mjcLd6",
  "key3": "2w4B3dmLPCsdbj1oPjEQss633PoJE4DrWRfN2xNvyyGG4bndLr7H19rDd4wSjhY9u2ek4F4BVnoCTkiq3wDKy32W",
  "key4": "5HfUjV9haABwk9VyQ8QWiUTpYTnJn9iC9WQRJDQuRbxDV2kz66yfXgTBLQdj75nLckXYHeUqBPF5NUuEnC4PBJq5",
  "key5": "4fs4kHxWVNyBPMaSWHb65FnVtxGXncR28Y1S6H4XWGkRyeiLfBdiTYSFU4WaHqHG6opNuQhbBnYWXTBDiWVhJoQK",
  "key6": "58A6ReudCiJEbN5sGqCTi4N7rn6ZcqAqJwWdDNmDS1XYJW1Hm6AVnAiDDFn8rqwaeyvC2o3bnneBcUnnBoGQueSu",
  "key7": "2rYHkdccHkhXtcH7SS2uUWaUb2RHMvZ6Ttj7kVC5LrFUNWAEX9UAVyRSDb9e7dWpGk6KBSCaDDhxAbebXDEAFizG",
  "key8": "5uWj2MreV89FaBPDwYJoiUhwRMSmgXKkKzSaW9JeZm84oCKaE6dh4JFP7D9RYV778ibybPFrDmoUfbzwh4ftRH2H",
  "key9": "4i88E25KqxAg5JjTnhsx7Uw7654PR2RPLz41SURkk2TLz2EenAaC4B97eWBeWT9h12XiurMtFqcNUwfrz59ghqgv",
  "key10": "NG3YzcrdRxJsNz5VnvJwy469VeDSh2EkHgmzfgGpo3MfQe9RjdP4eoepUBiGQWV6MSFmi2aZ951ZTark7wNhDY8",
  "key11": "4sPZtN489kkVAr4BgmngazKXh9dLxVQwfEAGZ2LR6xLoinTgmnn39thKQzdSmtfs4e6oQa1usfNpcHHT46X7CKyj",
  "key12": "4yPAuoofATq6QYVPedgaUX6MsCdNJ3zVpAZX8uR4UH88a4df4CMTy2XzmnV71fsQiEgYU1ukcF72Lv8pQJrXnrHq",
  "key13": "3UhLPiiQW6ApqHVPxiQFQXSRAwGUvr1UovooMabuKWvFFQRBSgCDWV3sBg3FKZs25KKYBpzv64juoY4K4KfsY7Sd",
  "key14": "5CsykFkvLKqcZKkBaaCFbXXuin2VbikkwtVsgRbpoM5pfvepAZf9ibBHMGVKUHvFD7n1v5KeniVafxQkzkwisvCX",
  "key15": "5rrJg3yVEy76Sp6SxNvXcgLrSyRfziXmEQ9Vr17Gh79GaCnAb2e5SyTynRXpBErZnLX58xBz2pghdRrz45EMZhPs",
  "key16": "4eBEX2bL7tjKyidcD9u59oZKpaCpLJgLFXnGaWgiLN53DpNqNMNPBZ7KhWrHi2BjvqYqTL1GphenFQjP5G6qcjzX",
  "key17": "hfFAY2XMASXX3mhuvQrGBcCu8zeGdxbugust58zEaMRQp3o148TVQ2ehnTrjbW2mhRMxpUFkVYujNpcSEKG2qLs",
  "key18": "5yQuTPdbk4nTJR6vBFQVLGMtDz5ydY8Ug9SB6169HMkaFnUEB87weB4UHWxMw9fRnCeDukzJZDc7SVaRTBYoUKzs",
  "key19": "63VLHtmfPSQHEZomLUaGVGwgEEoLyru7EfCf8ZkdmSYA4Fx7BpxV6zTke4Z9fncmKAPVLVmYBQhRvoRp7xQHmibA",
  "key20": "3X96pUwdzSBGZacPY3DvGZT4EbZrzTicfFqpD8yy7RGwXCwRZeAz1jhaS37LnGE7vcU67uXv1p7ALVwtiLUeo9d5",
  "key21": "25RRcWfjXCG3nFU13AYnT74SiG1h9GQBaRpvkUBWikDz82FnfP2oRiahLELusTuthr4WPQSqGyyNKFUWmiZ6iZqf",
  "key22": "64cKQW3FG2p9W5uprTveurRi4oLfwSMmGL8WUL67iPghU92TSBqZS19nHuoqmPS1VfH9aZAPBveFviYfV2hFp3Di",
  "key23": "2bvMsHK8XsA7DnYybTdutova7enQfRy7EJh5gEHGhzUFXWaLz73C57Dn1jMAkhuYavuE28CaXk9qHEFFeu6rAJBc",
  "key24": "5xPMh28yY2tf2fJgi3GwD1ajDMziH2MY1uauYoLBAJKgo8ZvNbMyW8wSizeTBYkEa7Z2UMqRjMSFGLyAHgjshd1U",
  "key25": "nFoaD1RVm2byjLZSQmRSDAwyBbAuicewUvipMkKZdoY8dw7ekAmS2uLnzzx8a9JZrhdefcJro1fvonbcqrhYXHX",
  "key26": "3aweqnmgowhbL35cZ2REfroNJFRSohCLyNSD4w1KudYvNANcBGDFnj6eoGw4uujzWRv9r84KckVC5oswBhzRa8Sr",
  "key27": "5aYyyLpxDSDWgASm11UTchnsKzcLxRzgqT5fDDheBH5nP1RbZ41MyZRx42a87ieDbGGo8MkGsny4iBLrkgSYqeDC",
  "key28": "2NAC9T1AAjEXMiHzfBERA3wwTCMVkqfMVu93J45z6nsU72ZR9kWMWNYmHfwXQcwHbP4hUZjZrR8taUvGN8nX2BMh"
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
