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
    "5BXVhVs6HZ1cyBTjfPGBwN3LGJJWTo5dW3pPynUP6JsCxA8h6PKHDA2xJZXH47rUYMhATYmVkTCNGvcG9u5fFcif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1ejJy4Zz4U7iyQvoz9XnVGHeWiWvUyEwGXMdR4bJyHa5NhASFKqFPQaf2L654WPm4EGjtUsuLwFbt2wfbtWzufE",
  "key1": "2N2QQdMbCQ24nyeyP1StqRMJ5rU7Wv7W9TSHwHdHJzHAGLvjeUnjwgHGhEydZK83yK3xb76KLMZoFDdFmeMaohhP",
  "key2": "2XwcxJW5qAdUzt9Jzo6GM4rwfbapRUnQadjYDF7WZkhpipoPayc5A3TnqmwK3PZ8sVdFd9wddNvrT4SWPQzsNGQa",
  "key3": "3ZMP6suA2Z5mWFbetApZXVhjJYxZT33PevgehYP4GW4ZgT5d2812FK8pb3N3NimoTL7wMAfziL44ATFJHoUmb6uk",
  "key4": "2aXovBEqPCNyi4XtGRcdJDYvJ5WrQCps74YoXF1M7437Qt74us6j2K8EgDnUHmE9dQgMXV5rzzue5wDDdfiVVfRf",
  "key5": "3qMg7TTNn6tNhPZGmLe1PDSPhCTdGc2AzpeEyNSaTVoh7jHkWiXy7twJFqFVcUfWeEfWsZwud4pPSv9qh4qDR4oV",
  "key6": "5J45E64baaHiDaKiHPsAxJesCf2voMmpGAjPLV1JA34DRu8wTorLfhafB8XHauPfKw3nqvKMRbG4cEx5VCqrT8r6",
  "key7": "2cJbmyaB7a4KiPRcFtGVALUrAHUFKme78w4buFVnXAszCFan8MPqn2AqXZeUdd8q9uHCPBSi1q6DfQVtRT4sqBXR",
  "key8": "MU2NpJk8cuwhqci7GjayyKCZhGEQ7rMe6XHLishXbK1ygsrsRYuxxbpERDX8ggPzmnLsxsJUQebS5b2UcJGprfW",
  "key9": "581EW8y4oEupNivcBz9iEMGzdKBUE1BvQh7ob5zFWngj9iYiCyZwzbfaKV5VGegCjZXfYku6GXPZTZ7YjLKPJsx2",
  "key10": "5SpzRDxFGM48iAqL5ekJ2iBXuhSCzQc5dfXdfrr4fhJ3qoVcGkvky6fUQNXoPRhyxVvajWsSYuYKmASmqhyCNBwr",
  "key11": "5miCCtsND1ZR24udMVivKhnzAbeJwgd7ZGigLSnBHPfZBoDBKJf4MuWMfjnwCjg86CPQY9VVf6bYbTEVPib17tZs",
  "key12": "2qKXyriRqYkBrkoBz3fTSVcgPrPFbeLSYxuwVUnXbP8HHCmWQVBgRPSobmhb3zxRbGv3uGmtBpp7bayfX8DpJfQ1",
  "key13": "4m65NnNaDmQNxu2njzuXQ4c7weJDGiaJoX97mze1ogDBFNq5HiC2ZJY9G5vsoxsUDrv4Z1cb38xpqQizZGX7hRgP",
  "key14": "3nNMjqjKuswW9hRaC4XBV7xXcSQWVca7TDMpXG8rNuh4j8mfFAkikDqA8Pshw2bcw2vm6jMLErBwxAHLnsVAFgBE",
  "key15": "2RGUCuhLw9a2xCDogR2ecdvUEem3mBbfnR2czPACQbkbom9UYTUQs8XjAezXoC4biod1C8DzWt2mLKZ7ecZo1AFW",
  "key16": "36TdXiQU7s3BouPa4X8xGPu4YQiJ54XjMSRyLYkX5d2zUDLpw8RHCNwrGCkbKUC7poV4s5y6k1eUd6prT5SfiC1g",
  "key17": "3UFTbK2rHfkKRWbV2UHsLzW5ihPC3KP26zhmzjStXyU1KrPHDzevWzGUFnu4pnPSuEgaAKVZ51sLN4hQcYoQNpSr",
  "key18": "129xkCVeziQwvc1AEfhcpKqbc8HjjRpb5j9cNKVg17P7nZthL2ytVG2tGnRXKtKrHDHJZwaPbUEeeKGKRF6CWBFD",
  "key19": "3JeJbvjFztX9sGRU5suSaTzYFyVVmCzNmp8iJS1TkcaqF5ZhmbHqSMfowuZydWFTJgWHJaDyrWiFyQ63poyALbVT",
  "key20": "4y7G1vfxLE7LNicNYfv3WpsKi9786gYDLTa8w8qzYea2kZVgzvvZ4TLkgYFbKeDkdQTbvM25qrVTqESE8pkH13ux",
  "key21": "5Uj6Ts23qrZzoxh6dZ5GM7WKVVDhSxPUbHce4iVNq4693TkMcNBhn6jcYtwZByF6xRvVKFAr1aEaGcQqf8Mo6TH1",
  "key22": "4TrcfHAGSd13RPbcLsbGHLNL7VYFBhW6VSdaaBZmuhKkdc1zzb2ZuDvdYBzrtxfrEPJEEkTkKHKqwdoCnCTguVj9",
  "key23": "2LMhtw9QXYraPVD1PwMvvMP48CNofMgFUfbmKA6NG4MHT8vuH7jUJr78E9XYqrL6jbhfbaMrYRffpveFVBpNcAjE",
  "key24": "vwu7DwXaexhYrxQFq6XUYzTJ3r4nX5CkpLXSAySiAytpxadaUEjJgsSLQEio6BndC6sRNTbUU5W6EgejZTUFUSC",
  "key25": "3STDYnUpCrg4owBiqVvT6jKTdkaR7G17d3qU1z5ia1S3SUbUi4LPsDdkifBbWzpj4YVvmLWLzJaTSf7QXmeUrQ1F",
  "key26": "5Nt4KW9n7sELHK4NwaoKWMLircd48fJbCoFL7AfWho2s7u2zb5QpUwXrbnAo11vy2rTUit5V6HAyqHMSU4h92uob",
  "key27": "3HzUwCVBi8eCUUy3mYtHfEbjxQ1P9pLt8RNnNLoYWanSpKiKtjwyfGB9KAYF1r4HwjCHPJNtRWDsDvaFdsqdEiVG",
  "key28": "1cvGrz41kwcAYTHwdFEvSJug9Lwdd4C33uVoGzqQTSuNmYVY8gUaPKksZ6ubH9VMbsPogfKxomy6unMSbERw32y",
  "key29": "33DvBcbVxQKmw298gUcdz2KsT8XDQDBG6DtK79ctKi44wywGJng2n9dEmDZWW3KPdjJqQWrZFj4eGkfAbsiVonFM",
  "key30": "3om5B5izHwYd1KTvqoDZiLpJZTF8q5V2fY3nudMVbc7PzX3iw8iXD8fGK8LCcY7hWyiDFjEhxmpSe4ZvcuRwpQY2",
  "key31": "4xawWxqVefFgjQBH1ThEQfDLi4DEoy6VQ91RYC87VVWgzLuziGd9fjbR2v5z6FyqdT6sqJM99974fVDYMafDcqRf",
  "key32": "cFSCeDn3EwVMpdtcrghH3PLqbDi89B6cJwHHBPNh83dQtd3DwVz5Edw1y6GDdNpQCN4gojmejQBtbWxDeCFBmQU",
  "key33": "4e2V9rm1oNjm8qnPy8nXvwDtk4TjJZDiwef6Xyy1WJsHmooou7cfXJ3THiZLg6fCeBN4ApoG5vFymvhnaBDqhV8b",
  "key34": "3FFKvKPRk9bA3f97n9kkiQtbex4TVrpqEh1He41HNW1eK24pAmXnGQnnLaEC8e5vWtktf2Vo7AyuzpNdcV1VVd1Y",
  "key35": "8Aooh2bJNe67z5xJe1khwuDXryp2uAPtvqzxsFVXJ7Mehp2xE7tLEHUgtZkos2a8kendWSE4QD1r4VtKVCE5bkh",
  "key36": "2FtwhNCYUkq86crqeNeRF9bhJrgBebYRRnBfxtatrTgas7ebME59vuWEmXAS527fMDdgYuphCxX1hxt2T4AvuVWi",
  "key37": "2JJtKdUV7phwWvXiz55JMGEeZqWxKRXk4LFPfGEcNRe9Sh3uWR41AZfqDZU3xorE1oABjtHaerBckbBUqxhJEUyA",
  "key38": "RBen5Yic74MWC4nqhDo5uKmkGcNFAdL6bYFVi8Hyhe3a324gtji79MVnsp8Pnii512GzGyoJKPHTpVgZ17iw2HA"
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
