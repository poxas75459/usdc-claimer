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
    "5t4TKc5mP5huX62e4T15cSwKj43LGQAtRLHoAgkyG3MQLC5UdCVccSSGQS5uMtcxzAyLwtqfNhyDSqypC6sfrUGj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MULVZqXxTAXeYmrV66xfX3rhR4XUPViWGEmS66nCbKrJ14xKFihjFPRtUSPdVVveMwRUA3zrkeQAuSTEJGRyV5t",
  "key1": "64NQ1XibUTKKaeuk1hPASipPbsfUurBUeSZXK6cdkSfKQYF4MxR7VehxxurMMFDi26gMAHArgWY7a9jWMtmyUAPQ",
  "key2": "4f4jLJdJ54zxb18BfpsAm7wVuypjkkRNik6wZtASXSfuo6Xso3mEcykptsiwBCdY3FT2qjD4Qo8L1yZPLzafGPCC",
  "key3": "uGR9Sww9AmKbs5PkY9GuFzWGaAWtL6VnFri2ZnhZSFNV1R9KsaTJb8UykyXgajUBiTPzn8VJKzPXrjd5YLPQEsV",
  "key4": "42xkfVs6VFBamUGJhmqPma9gg9nCho8Kx6aR26amFUDqduKAewqWKPbj8VDiBGpWBzub2csb9jKsZDVdHdcEEDk6",
  "key5": "3fg9EcZf9mPrxTga3nfZ9M1KL2AHEVoHGk2QbgVxAYw3zX6LEj45VmWkUGb1Dz79nFmwEhWWtQTVtvufyF3zVkgk",
  "key6": "dbswvzedeUVBReED6B754eXPJW5n5m3vRWsGKU19baGtZF6xfmEsWEoHFHsPov67is11wrziXLP2Z2KiSQrMf2v",
  "key7": "58EdhmUuWnEjDn4rPd5R2jQgqSYfFpa8C7fyLe7hBJXGBocxEmdWMRRB4GeprYVf1eUhUT8sndDMXnhQXyZFu7cZ",
  "key8": "3cXz6ykLFsK77D2pV8SbPWBjF4jmtrkbSoA24Wx7cN2UTA8bnYQn1hcm44ecZA41yigxZepkeUQ4c97KBc9YAKnQ",
  "key9": "31q83aehr717yFw8iLPjq8DvfrJQoQBTmQyCuypZ4xXrf8euhFjLQ1RJKdEyBFtSUyxerEKQrZ12E4PNhEuegsdj",
  "key10": "2JqcHUbTrdLBUDDBawEVojZqxBEBqf1yuxUp8e2621esTpBVuWLNwi59RvZZQmWpbPSyaAF9dVAtfMxWYXAPHR3A",
  "key11": "5XQY4X4biET6Xuq7mzcbrtdjB8DMcmE4BT3LQELyF5q78MaLfY2eG6EuDW4osHSZLqYo8kQdZ38zXhitmU2CGYdg",
  "key12": "2zXh7UBdwZeezfqwvSeNeBZLmgzp2a4L6Yde7SNpwZpiboxBnTjAvFqx6Py3z9pTZJSfofapBX9UdZ6ocErniCuT",
  "key13": "55RtNQHsk4cX1bhdgzteUnopYrmcGQcAWMP5oumYXNscwAv1e6pwCtB5FJdMtfr7y6RGqcSBdiWERDumA3b5mgi",
  "key14": "4G75faM8zYTpWk4Qdw6DnkGNR7TJNFonS7c3pgLjp6zTAQVgyXmvqWZkGZX2qDG3g3ntNTk5b9VY21AhoG27XQMU",
  "key15": "5H6vLX52EuV81HYQCPZhYPMk5QKhJ7YPaW5X1oFxcL4s1BJPKaXVmoz28Msf8u3PYApRKGB2JWLQ7fXwJcKYPELi",
  "key16": "5CndTKJWzvFAEccuF5Nu3tbX9PmuDfhvSJ7VDwhY5q9gpHGT9tZvZNnKsci4X6CEeQ533SXEEGBRgmwDQGy9hJeY",
  "key17": "22rgedKVcN4gZNuc4hPteFg7C9mkL785jZVEuoLENQtYzUepCUuSrvZaQ1uMzm8qoAYjDveaxE75rkMAkV8ePnka",
  "key18": "37ScYrPtCCfrwdQDoXbX3Pjyj17qSQv8MYHvLByU7hchQtmWzSFaibS4bjUyVxik16XguunbUx7VqkqeQDPMNdE8",
  "key19": "4Ly7EZ3t1ZGFcftXLyTLwp8Cdh2ZxunXNNDpT9d75AjDMDKL3VzuYhhQE3XQu3okMcoyxFrRvW7K1N1VFj1pVbvr",
  "key20": "2LCm7JeRMxWAkUbjhhRwqE8vgDytYYb4b11sRGu5HG1sFthV3S4SbKgcaypKcsdSws4Ug5ybSFG9i52aj7e6vMMe",
  "key21": "3Kw3wK9PgCUdQsEP8wUgtymcGQXManAkZoMyMfZ9fYucC7gwb2F8FzW79EGFdU2Jnxqan22rwXtrLYnD2N4nx4rx",
  "key22": "4LYZm7obDDFfGQFxTEUAMs6samQKA7PKr38aPDVN2ozdAf4d5Y9jomZkKgwUABf1xZjup6hCseW3NBWt9HGE44f3",
  "key23": "3jNmXgG3F2uy9d5HSXXLgPaj78jWW8ET8Dczdps8TMc8k6naJyPqt9JVEE19wABq6hk9anxnsffKFsc4ssM3KLFY",
  "key24": "4n6okoQL1g4nkNbRfc5hergxcMuKcv1MGiAQs3npYhMM6peWHciorgS7axEy6xPQgfYD9HpqVfh8tX1biptyhmti",
  "key25": "63yLydpyvZTtW5swk3AyHUXeLW9ewNtRPGLQjX5BhnPW1C2JkBQHGGsgn21jGPknvqUKraaUVV53wHadscoRv38F",
  "key26": "xPybgujtxoyUgfk9Tc976FoZ5pN1o7NcRcdC4LQ8e5RGqsaHtcBgKuTcsFnSfzcvHMhdCdDGGNErL9az1zP7jp5",
  "key27": "4xqJoPT2hhmHmCD568Y8e2AHevyyVxcZPD2skVCxmag8xUVgRtY2e3Nzk6CfjyDWA7ghCyw8jgSxtPbQaHYxMKh4",
  "key28": "2YZADMfpf381P45SeP1oChprfpEjuZddwNPzrRg8KiRUKsrAbgxM4HKf83dNKvFVJUYPnzXqn3wYyxiXrF6abqs5",
  "key29": "2A9V2SAhMTxwThy8THM5zm9YUKswB94gQK9Vcfv5cTAAN5DoQjUZSJFxinXwBwsL47iEZ4E46PQAnntHv3HUG9rE",
  "key30": "5irLeyREK59ihVQZNovbs2WmeB8q9wYyppWCiCByiEuzZbopcuLLjpEvB2mzxebE8ck9Qgg6vU9scDxK4TM7iZYY",
  "key31": "4wX9jk9TFHWsm7ogafudpSrZVHK7YPytNohodAcUv22BnbpmDq8p1vqEERwSGu9dEYtQxUK2TPmXxkbLf4ZzAPCW",
  "key32": "2ip8vjnNbH499RzDMB2JwpTDwcHWS6i4oKWr7DpFwSsXn1LD5fYkugQ96ffYmPvvgq4zBF49bLXuP7umY4P17j6X",
  "key33": "655Edbjm7kEuriNrRTjSLimgvYMSPsLnSrbzWtRRej7JQsLVji8b26uW2iRBBMhUZyXScmdhKGvACRgLWZttNHNm",
  "key34": "4NTpDsKNEJYbRrBxxNuTR5wkJtmSpJThnpKzv8vQnn3dvkruTYppB87RF796b7rQ17A45TAAi2qBfzb3v7Byr72V",
  "key35": "4ghP78mamVtAycuwrfygTrvQ6xQLqmWJntdfyjESL8sA52P8Y7v7PCUtqmXDQwHxma1ekFk8416cGipyX4FJKjv4",
  "key36": "2rmWckMPzbTd8EF6PvAsya8CirXjk4fek9QJfv7gJLxNBQQuPGwXti2KavpmLct9nEsiUSsP1kUxtd5rxoiDKjaR",
  "key37": "32hJHY5YRWFFz6wD8UhavAXcQa2NKwFYmykThFqBJrHVS1atv5SvfmgT2FzYUigvfTaToYJdtF9GAFAaFYnoYE6f"
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
