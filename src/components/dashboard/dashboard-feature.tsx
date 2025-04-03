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
    "4ZwAeWxAcLiLZHPh9EhCLB8GsQZwCtDUsAXyCg1VyGoi6e8h9qAW12beM9U73jDizY9AoUV1fXS2nC2vPXsXvN9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "247x4bjGc3SXCqaCHEreyzL85npUHmuC3XDoD8Brh2YGqsyvtyM5ogusVfvp6fqJactFcsMQPpiqaSo1GxyvRch7",
  "key1": "2JB9CgVv5r65auxodSd4A2nrYBBbxLY2bWN5H6nnvVZynfvkyqz3yL11vQSNpUZ1xqKhUxYMojUbfUCjpunXJSkX",
  "key2": "5u7oPNwnseGFk3bhEuYiFGveYYkMX5jg2bwAbb1aQbx76ukeBgAKpuJcqBy8oi5Jd7fi2JbFn24sJrxDqDieLN2r",
  "key3": "4eLVrRCwkhsEtViAwfZaT9dfdiUHXZsksr6xRY5JHLbSxskfNJJNi6HDM3JXRy8dF5YFcTzD3KhGRYqf3Da1Cbrv",
  "key4": "VJw13kRwaRHdNrhj7AABpv6GBXa3WBS4eW3SNrThVVhneE8tKQ72JUsTMrS1Kg7RqtoDXDmdjTG6PGpZbBXsVum",
  "key5": "3e23yCt4CxPzgwbgLyxVfYMVuyJwh1fnemWiXbycB7YGJADi9gGkdeB7hgFreytHyUDdVCXQEVoFbJpwQD8dgct2",
  "key6": "2MuLcUmZW7p1AwY9T7uUStpZm7YVqLWELhNqDLMCwk2xew2YFPfYM8JmnoY4DTbCEyk16M8sqjwEKLbAYbGqvyPc",
  "key7": "5UYrZg3PenKDg4Jswpk1gdbVwCxNtKd5HQGV3A8j86rkyq8yLBSu3WniU1fVvYsodyXVxMxiPadjFm97nPYaYAEB",
  "key8": "2J5w5Suh5SfvJAbqk1VAJ5kaTnNuGyrEsAhMaDRqnkEuwex3re9vhxvsKoHCAtnEhdpVtML8ioboEhnwed4irGpk",
  "key9": "4fNkwUceG8WnxBXTi7oNu1NBsozuDVQynP54Ln93aacZdTPiDdVRDxMkvSuPQXHPusMNyiLa7yK7oduyLet7HtjF",
  "key10": "4Bg87AKerTzsTgvRR9AaayujYdCB6UpTxCNjHSyb2tEvdzujJ2mbXw166AuQ6nahSbVRHVkxtGQmLY6L39qBtZCv",
  "key11": "3zzmZz6FFWYr8e61RPAUMLJXsT1BF7E6NbJHkS1fDMdGvWXm2YffN3rfWcAHd37eRmo7siuuBrGbX4ejwLNZpDd7",
  "key12": "2sLxbXgnvUkMouSW4vXp5tDMJZbyZx7FxrKJrLbjKeJT2yMCbBoXdFVotpUUBxLhGs1zcZCTkCTeraHPUvDrQ1sn",
  "key13": "5Zn7mASuLUrU9ounkYyWZWag6ZUPznwjpRK8r25U5pBnirg4ZcSD8x1ZpkNr7UysK7BXjVivospjUuawWdCcmpLw",
  "key14": "2Jb61yoAzM4p46oUZi7z1sn5fPEffGBJxBBYHqetnSvzRv8UiqyNYxzLRdAP9hPX8v4sYrB17bHjp5DWu5tbsbzu",
  "key15": "5ceG4v9UcigjZ3irLQMRxXWqteEKUkhLeporjAfsTGQ5X98WwNF5RxUCjBw7ZGjeKfRP2TtbhMAmeqkcrkMvsjRD",
  "key16": "5bz2o9aS19qGcmBpcoU5z5Fdq2QMMC1UQCj9qDwfeNtjfry12czDrD8GUW9GtZ8zwLBEw1w6X1q9WpsKK4EdKaAg",
  "key17": "5QFxG3CiSt48Bpt3gRwfycfDvWtHJCFbavcefBFChr7PSXyUiULZMVTzVCTzZJfwPxDXWhosNLtUUqFXpfm2kcc",
  "key18": "ZGUZFdSs3mZQPTVXFAQ1pGaSKnjSaKX2C2fieTSoyyG3YttpbGZMt9n9qtSpySYERF3nkoMrdB1WB6eQoqVNSwY",
  "key19": "5B84kfeqpYbwPnJ1ZfrXYh2g3hPcciaH1b6BzVoMDeSUqB5UShjPkWu3Qfpe3KZUanWGLx2GGZWfMxCSYQAKyp1n",
  "key20": "JQMwYXE7zJSukRuH3efJ2Q6s5ENbFqSaZo9nx9pKzf3RQfgLmw75o5F2A9zqrckrHNuhdGe6XaqhmrnHgcXmpzT",
  "key21": "2pyyvPWh8ryoi6rfv5ycD2bf4ociyjt7NWBV6yWpxn4z8EjYYS7Wz7wabnoSbHjDe2nzyWoaKktyQotEuG3kMxLd",
  "key22": "2DTJyUwzZAaZGvuTfWLp4PxMrLBhYeLaDiaVAwc29qfWmauAkGfNNLrWaAGJtBGrfnDj21xC8WjaRLd1onbGrtRB",
  "key23": "2JnsVjxesYycNaPpwGspNjeWG919g3ifdwhwbaFGmLE2KUEZVmhqkWkvmFjGqhkTQTSA9EqQ9nXSSHDXmZTEVsQN",
  "key24": "5zZxTZxFDL9kHE5CxAY7LrSdxUyKfMoPuDRfKsQ83GW5QzvMgza3Yd3eskaUREdbL4d6Q3K2frvmCjKn61WHm4LA",
  "key25": "3pXmDFrT11iG9bEDwRynSho85m7RrbcsekwPSrgJKzgpNsLRUBzXVQJnH9GyU9Y5fKGzY8M1AtjNsQbAm2jWauvY",
  "key26": "4EFJJwz3CuBM2bf8PB6hc8tWt7oA1VuWaPgQNwQVz7nyepiuhCvXENGcnWgac9rTaN6cgbZzHC3EFvaaiaJpnXPD",
  "key27": "5uauRmsvJLNzru7ZTMhnexq5J34hnDVmDRoKnRxR3EzBRQwi9tfMX4A32rGsGK7vwkBrvir73RnnU1rkSxySZYNW",
  "key28": "3qpmJL5Hw71gLKU7HXQTmTcFopTQLNVJkXce2kozYzmXv9TG73cH1scSY2rbm87cr1jB2eJEtuDmTa6hm7kcFwYa",
  "key29": "2AhR7xYbembQxdRtBdzV6JcgX23R3PkakPVTcLwJ2gKJuDD1PYpAJJpFXwp2TGNAH5jca1r7iKRdBdki764teFRj",
  "key30": "2nop9ZPqBaabq6vmiy459axQogLhPnGyNZnLM7DKgm9P66ahB5ZaKkLHuNdmaSaS7LRE1tdEeBPhDouMUVqGY7CY",
  "key31": "5ywWsLEmJEWUKoP4ko1pz8x4jwG6xE5BqsVJHyYr48BL5gyE1i7hLUoqxXcBRYouV8DDoZy9EoYZKwy7yp9tDmfN",
  "key32": "4NadGft6D8tTo77SaxnZoCxgHioVvrkSDCAdFx8dB71t5yWctaFYL7V6Atg3TuTu1UHhene8u652LfwYU7L8BYaX",
  "key33": "3R1gCU2rzEmYibFoQB3jCKXBpV3TzYszvKPGKz4B3X2NDwG5QKHRcCryp1PeS6Y6Kst6YaVMtUyzLwNQVfeCWZWB",
  "key34": "5WwyyemkJHZmFPv6VkhWVzW5myjYG9y72LPZJVphjWiqq7iHmKHdNKTkjRzsXmEyDoWgFcnnfiDkVALMKwkEDt3H",
  "key35": "3FAceqgSPNxGD32nRSf6GEbvhxNCTG62Lo7xXQYZGnULp7r4bCEZsXBS9P8UCukheVshpWDDnHB28e4V5TQVmpFq",
  "key36": "gN51eHNgjiMyZAJEYumw17N4QmsszSk9ktupd7JFCocWragU5KNFDMCcavT4B6o1RibBS2Q3f4RWSjjoRkULUvR"
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
