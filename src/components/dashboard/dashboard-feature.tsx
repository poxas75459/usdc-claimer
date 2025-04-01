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
    "2fFcXAwjsp6jgq7vfLQjRqkLWQsQs9vU99ZhfEmkWJm7EWbjcQxecJ5yFdRJkTWXEUnJMbn58dWW73PFM7QSwRx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ReS2cNTx2Mrbdzb6YbTNqGVDsnrJKrgwX7XT2zT4fS2rLEXru4Fg6xEiGcRfSnaVGjZ9Vt9NWzJFPp7hNEJZCmr",
  "key1": "2kmFascoW3hGmNtA8j2s676Pp36GD6jYU5VdZCbv9EGmKZqcJ97woHmdWTwsvNFRMvCybL3LocY2GPtPaRHowHyk",
  "key2": "2xmujj6QzdcvxdTYJbM574ZBrVstxYGZr2Fu5jMfGgNErDw4bvtu82Mu2D2TMSykKfGEbbpHLQeu2AEGUU4C4yDj",
  "key3": "626tNsDfhHa7bi7eDp6UMQPphyReZXtP7Lphvc8BBvi1DLjj6VSXTxa181f5A3toEc5YKkY33sPYSrB6wy7LqfzG",
  "key4": "5a1qvgGkZiNjXZKh3kEdCav8s3BE7kyvoT9jqScVJL3H8EqTXR8a5xxGwUTPi7pjzUebx9udBtS7TSXCrgrZJYkS",
  "key5": "4WcfDhSPEQ1epykAAk5HA781aSscHebxkv6SsfjmKPSdxUeKpUusyiMNHuxgpFJDWifiF9pDpPrM5bUFXdbCbWnD",
  "key6": "64R2iTxaHk2QCfrNbuqY1BEHwb6K1GLinc144exuscJqrVu5gXrk5K6ejELtiUFpTqt8mq7HZN27uMtEo6gCvL6E",
  "key7": "3F3UA7L6RENX5XD2MipfkGXPYkfp2HWRmV4sPrdxEKwRR4RokwhS3F5H97hzinixUKEGUNubb6YRFUVrcG7P4T1W",
  "key8": "3YZUsuZhtZXEv6V7NT6sGztrj4VcurUcbBEBzyDqyKyhytoFqrfkUMioGM9JUxo9TCj5sqZ7kuh5nuXJixXi6Htf",
  "key9": "2qe8L4vwChBnxrdSoRq4pku2Z5yQQzhpWALQKKcdw4vJ2oYRzi4cYV5pxEwGt8Vh9RApwRgtMsAMNoh4RxaZPViQ",
  "key10": "2vW7u4kTjTMNzaSYG1tZ33Ko5UPrkUopjJ6DtBW6TGCFd8sdDVNshsT65ZMawdxhPvW8P8FRuYwbfAj37eCyqoqP",
  "key11": "4NxW7Sm8xKm2aR2SLv4qFyFhMA6ZLoaUdPzN6QCeBEGQm9WqYYYxW45tKTXBc4ov13hVYydmrw7RhbJe6MWBcLCk",
  "key12": "4uZ4sL78boh6SR27pbgPzHdZFWJAvcEAWTDBw2wzUq5WMBFG8osKpm8Amng9nPz63GkDKZQBjoVnuAGd4uZ2iRme",
  "key13": "24WH7VDtoriXWapgCEGfXcMkPtwHFgE9d8CNtXe1N6imRWSx41kTfVtnp6ht5ZbExVNwYmoyfz6f2TPY5bVYSZmQ",
  "key14": "bELTpagGGcmLVPocmyzrqy8V8RG1pMJk323HsRsUz7Ev3cRJB6JWrF6Ym1z9t2Sk41mr5sf2owMPgZbijJupiMw",
  "key15": "4pKBgAwQ4Btc4ZQ3HLKfB3b2dJDssnrDn1sLNS19YsFupdzHr4tzhF5u9gJhyxjmi3Q5Q7PEuLUjqmzDqVBLAqgV",
  "key16": "AyEqQfN6ii32XNdBSa6YpeNLCDrWy5Gman6nY1HzsncJCg5YSbTp46Pqj4QHkPUTThv7a7dXHboizB7U4Usg4de",
  "key17": "3xSpULirUDZqEny7fiEoY4zg5wmjGsXFrzjXC7wQsuNZHjhjjjqTK24PPJR2jyVMnTMxhQFSY7QH6FcnLKd7JpoX",
  "key18": "2SJgjTyKnqoADEHBbUBMGwyEgaZs7Zdq1GRscWHQnsEBrT6yHynZx59F8BQe8zWdnFxBm4UrZkUvBGe86hSjyJJo",
  "key19": "54rzsuvpgr5jYFQ6j1ktcFnVfwxxpgM2f78aGbLFJyrrximuTYjivFHt12z38RCuarSiy8QcYLZaUVUe9AZrdyRi",
  "key20": "4jx82VskzjbRf2qF9QTPTp8SWvDJGVuuV5jNpg8idnSKnHyKNtts8iFsRDUPokBwLGPLv4M6rN4wurcwGY8MU9e1",
  "key21": "5XLbMQtRCdcTKzCXwztcfvhkddq9DhKKeZo7hQR8dwQQYqtQekPuVH4f3vZrRPZD9PKLT9TCoMpgGxETXUV24JvU",
  "key22": "41Wr725Wehg67SSkfK92ZX78f3VTiiVKi1Wc3S5imxckqiCwvcuN5T6nGo2NVRCY9rhuyrCjUCA6DiJDw2PofTxT",
  "key23": "4pkvmQnK59SYyFLnLf71VQYSq5cta8tUwjBVm6jKSojG6kPLLymdQmB9YBVS3d1e4hQLT1hfYHF8oijjrK1CndPG",
  "key24": "5tuok8baBF47vu3gwMPn99pb7WKCPH8Xn15A61d7pAzrH9SAmJKyyiZxXYuFPqnLgLpN4q3ZAok2HAmTMJuUcRUY",
  "key25": "4Z93czA1yLH4J2zAJ1yP4vRWQiTL4EcvZD4ZF2GM8TBDTY9trouckPG9z2UAPgq2LBuuipKHWamtj64XL4K6mi2y",
  "key26": "2kFNN3SzzPzYfmAMFMhZKwojPu2maWJ2YMUb2AXePuiuQ2Uy1QKFHimnrvyYHXAMxYuckBmWzFwkbeq6GGvEoX35",
  "key27": "2s2GznTLBLeVhmGQAcQJ1imwHuP7fcDgsHoZcTvRcv7sqLwMvrAynXTetNombGwbL4RxNppFPGw5N5wFFiQXX9tC",
  "key28": "2kN2vhTigBA9NqN7Kc2NKfGtoyhXPhroofhsJ2mofeJXUwdMdXqwjAm9SpKHCeP7Tg2S2WV1RVyGrFojVXt3Fsmj",
  "key29": "hW3FYSrE8nZ74mxtjuVpikTDRwRjxRzRfd6vCmviNnReWmTfwQGdbc6UgcpsM1WmsWK7ES2XN9pZHGcW93LmZ1p",
  "key30": "5tQRVuBMkcGSwpWaPwrXYK56LdG9r3RGSETceHtxYhVMQnbZTp1u8Gw5v49z75GHEDCUXjeFezyht5ZPpj4qnfW8",
  "key31": "4boP9eXWS2Q8ymJfLzgsce62q8uHCxqeCq7pDWK9aLURgzG6C7L6hWwmGV2jecVzC88hFa1eRFLQACQDUD7dLWyK",
  "key32": "2DycKe3ov7RGyd4Mvd2MwGeMnYkyTTr6hP59KMRxEKnN1WEeag2susHo5WcydjsKgkfwWWhq27ox1YFm2cAF1hsG",
  "key33": "2pC9apf9aSJY5fJo2ohmLD4W7Gvmcti57QQQgNv1vojTsYrH9uXHbTxrMjDh1YiDPnzRU6AokFUfmHNpKieW169k",
  "key34": "3PJJ4gwLJ1KaSP9N8efj4sc4rYXzgiS8zhL7kfGtwCRv3JaeEPqueLakEyBRVA5VMNm7j4116p5qwrqxqYxokage",
  "key35": "4XnUfBPapDDynikzGqSUN4VyYEs7pgTL4SxP1RaRAuPwTAscVDcuCHvzdsfc6MDxFJhyApvbCQ6ZnsWUUH1oD5ta",
  "key36": "QpT1B4BsuSR2jzz6VvvG9yhw7Eg4LBiiu5JyeoeaU5unRfNEJ33xfEKmKwHCEaXauZnhK7WsW95n9ECEk7kdmW2",
  "key37": "5LX64KS51LvzZ2S8CqeobmCQasyVXE5GcLj6b8AWc9groQgYZBKfWgqcJkjtHm292r7SC8xDJwMfc5MaFezEwuDe",
  "key38": "315W69ppZ1DegCCCLRTxT6cSmoXxmQ6z4oQjEb9MRi1SNnehYgtF9Uf8M8r9DowzcuF91wNSF4J8J7xBpJiAUWTR",
  "key39": "xTygQTq6Bo8Lv8cZ8RVXita8wmdzsZqCaWuyvJLqfTxFEhHcMc1SEsU36jXAe3P6FMoN1Y32zgiECpaUeo1mpUu",
  "key40": "eBsLPsBwkDpVv7pvuW9BEnnLr2nLeKVFtE1HpNTCcEcVHM4L47uAaUrmjhqksvRx5EsUTDa1boX8Uk5zDSNUGrF",
  "key41": "2CEdn258BPpeDMhh3oYFo8iEVg8KARMeyAgb5DYzo5TmPW9UgYCZF7DLPh38a59S5UCC1nCV6yMyyF4tErxtCWAa",
  "key42": "3enkbQ39UFnsuh72iJi6qMBwCuzFnybacwk3VtjtmcfJVdfaUBgn6ufZEaas2h5WJo6wBTLr6XqtoWjGCTpee8Wh",
  "key43": "2g9NikLgrh3naey8iT73XDwsjGxTETM9YxdDtcDPiyRMBsCfomPKZKYHoXTNZwv7xVHbQfuhw1DfhBrEUpHidA6g",
  "key44": "DKhfSqNc4MmEwjKtYSa8m88u1aiwMbRunini4Fvp9zMBXHN13t9ApS5WBWLft48NFJUEVJEzuw9iAUSZvuYW2h8"
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
