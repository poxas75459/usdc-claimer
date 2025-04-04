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
    "mwfPRDBgsAzXWBVvDsgiV8bj8x4vazcbpqxbXgwoy2WRzYLQVmVNqfkqmRwGsKhd93z46wfcYXfnSH9dZkJAoQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aBf6jtPG8ZLMc42N8yq5ksUNTQyPDBazzSfuR3RgTeAFL1gDmGBPg9GYPE3G6Y1s3AZeWG4ChCiXfuqJhcbynzT",
  "key1": "3AVXHSwk2X8C9t31kKq8KEUoKR5ecuRtwiduuCMiATK3f4BhebjJZXfwgr6LyoDBvuscvH495tfEobhXmae611Rt",
  "key2": "3gX48b7ubDCTo4SNUt5QjvsECBtTgk9C77eGP6pJZchimrEHVpM5uLU8aD8279ULswx6PSh9q7WAVyNNDRWujkud",
  "key3": "5nD3ZEW9YFXj6eVjdBDnHUwwrHU4ay9v8CuRkY26DKzR6FnmLUWVXF9zfC42Taq6VdsmDFCJt6aGcEUqtJRyDpzG",
  "key4": "4qTwFFtUrzQzmgAX4NXyBN2Xt4iJGxJ7noEjFHdGByH8pJwd7ej4RSQyrMaSC6pDf9UnBwmT3zm4nEMGJLtwHyxn",
  "key5": "4g2Vg9NxUV8b8ndBgSmwxPWC8hw4jhywGxibC88NvjfrnWcFxEon2yson85XSH7TDtpJF8WhzeUtVFEPV17BMJxQ",
  "key6": "3jsQ8S74ThHePKc75vRKSsF7odMKdoDB2CxdfVLJ5hZ8Fsjv36qMfVJSrEuPekeZXhzwH2n6VYxKRyoJ4rKHunkJ",
  "key7": "5T1E2QJMDxPCACEkCWPqqM5uGoNo4ZgWrbhUsvXEM32w2QuiqR2sk2cbDY7unEyPVdc2NvVDymh4C2jEL7VN2UFR",
  "key8": "3SuLhxYnRTJ9cVywEiuWMHKU1yG4R3UBzigtJxiYKUAN5yvGfjH4ZgHquBd2eu2FVEZXnWFcdrSgsPiQh2UJPuYB",
  "key9": "2gMT2jjD4VMu3DrtQbQzVqYtQergx4L2zrYjaGSvRmsJnXJX6KKbJ1JaxoTejkk5phm7iKt6z9VXPsvjWk3Wob89",
  "key10": "49ZnVjveaUcSxrYDiiA751SmwkRMat2gA83cT5z6QCUTRwHwdmxr5r7YRxHe2u3xSRMKL2xpqMHeDLo4NDpLJabm",
  "key11": "4HCrRXh3zxNTcxjBmM3gDSub6DuErex6zNLRRB4FDsQTAtzQWSVtxN7kq3K9nwN7RS1p1f8stovUDL4ZZ25q5kXz",
  "key12": "3zUbAdBhQZham1jBhVE9pM5vYgFEFw2cvJRyS6EGww9EHX7SzqdRqGDN8gch1DSJ4Qcyr9excMFAVKV1dcpN8SSk",
  "key13": "36vXXVwMP6GLcPHqm5CVVLiQMEQTGniPj8MKd4zHT5wxQ1nBKN1y5RKcXwL81PpcVnT2gS6irZQj1o7ag6q4RSyS",
  "key14": "Z3ogQuraeQ9kGyQPzT8rjmucDcD8qG4o4V29gxAeQQqfsnoAE2pJEYMNV7o3GyuwHL6aM6br8B19vXsow4VZ8VS",
  "key15": "27ebpgNeyMZFFvB3ZgAZX97pFKMjmuWiEDkGVKug4DBNVAzKbVDNamkN3SiBrJxyC8YrbaHcYp22wLwz6Wr1CrLK",
  "key16": "5u2bxFL47fwyWChfQRBA1sWo9DaXYqjFAL7X5S1128DpH8ZdbZbH935iJFznJmqxX16vPzEfLXGBh1ab6hsqBhTR",
  "key17": "5mFT8UFvAR3skLa2tpJh9Wt5LJmxxxL27mtpc5V1aKQgo5MyxReduetKW1Lp6yMYvdUmLSoHwCbXxBt3g8a11Au7",
  "key18": "37MF6pkp5H6QxHXukKH22Des4kmZAb6K5kEJA5796g6jvjzrGTuMPjmcTXLpYFCGDFrRBP65nr4nsXmdb3C9gfRq",
  "key19": "2xNTZ4ban8VjX8RMJhFZTEeqx4ZaEgiNohBqQWMERpg9idh4w3T2tuGq2iEEjXGqfrxgRa16eDLPjD5XFrMC1gKd",
  "key20": "fuLukSmdg5bF1vyz4WxK14ZGW81zHUx3y7UVChWj1DtRujgYjgb8UhiBNhSt3JUxp6V1cwppxRVYi7oceANpGpz",
  "key21": "5kMMkUc7HpuKvh42mt2CA6BWUogTxN9HCw2LGqLKtCWZDtQLJUMezNWWDZJJU3M3pSmdkGXjbQPcUHdK3NUaojqW",
  "key22": "G5CwoPP1NAdK1pfZSpwszw4F8D42oZtSZyWAbX2ozGLmQnqen8xeBXX4zYj36XxwbcPC6u1kEhBgzKtQBuyC6CJ",
  "key23": "4CfK2S2ktbYUyipCgdPbHWsKmT4wdVN1zZdtc5E9rvENYrPFsNzgJ6MUDmYyByhQsZgCdUdSXa3k3htaDSVsSj2d",
  "key24": "4Mqn12uJeby3ED1kH9YngeZFi7Tvj2ut73JWdYaUx7WjXoQP3Ae2i5inK4CDCe6nEd9TNaxw7jGo9Erd5M71Baid",
  "key25": "2nmrEtkR74ijU9cTtihD5adHJBXHnEUsMJ2aL82W3Ps8a6V8miCJtNGydsKzNM1a2rf2aRRVoUNJ124DiXNUwgcM",
  "key26": "AVvgH8snY88HioqzPQModCeEmMha5aexVciao4gegbwN3bso7g7Lf1GyJEgPnw8HxnPPtd8HYCNKhjALtcRWhsN",
  "key27": "pVfdp4dUEVRrEtNUAt8XwLbh2GHyBqZSnJDSosNCB25uzJqfBrNjTD4RqeoxCB9vywACkFaF3QvRHjYn3PZTANt",
  "key28": "3Ewroc96J6CqvTJkxyi9J7dptcWQazNHwu9bSfYYmUVWRBpzaFcnQj7FJVHLV68ziMMSGrF9LSUtcyF7Dimep5wz",
  "key29": "wzYeradcyg8TZ2Aidn9D3jvQsq8R7s1PW5QSBx1LuDkAJVGJWUKLEttL9qcDnuX6jTb19kT5dbU2s5PeEZnGtcK",
  "key30": "9sB9rquUmqyjHPjtUPULPQSf3795ypujGbiCAPVG7XFX5JVhfxe5zDi5aYAeWRCCmWrFucJvdz12yPzeddmwekX",
  "key31": "FDNwTU99jmzXZUyZeaNNKGYHu8z8kkgzjHkco2ZhEw1CWZRqhUUgUCqtkmc2Qr1aRpgcabtrb1dLCEcFLUrSLJt",
  "key32": "2QHRRT7fjhJ87SZHBk1Bbt9CDHhCKcdT6wtrJjYdMkqGZnoN39eE7CjGNZctescFyv6wzLrTrAYUBq85nGSnUjx4",
  "key33": "5SrAmBSoAZ7YBXoA29EiFDNJq7G34s1xMftrukCMUasMNVvWmCjE11J5YkmbTWRTS8Z77Hs8iSpiypCZj5jSNVpZ",
  "key34": "5TCjkRWrx1XK46G4ZQCfjuonQ6d5qbRQkj2QBjyiXY6fsTmDze8EgzjAUJWYTdaMVp7WFYVxgBEkDfhdcxEa4n3G",
  "key35": "R6fu7PG3wp5NKGpCyGwXjgzV5nw6Ajw8wLXcM3v9NoMYDn47EokgPh4Luz5LPTD72P9fLbTHddNwAAkbVz7mt9W",
  "key36": "2FCW6Amoqzg6HZibx9EJrfUsmoCAdYFJ2R37r52YMasUJZhHTtPUodFAd7uAMSjzd9wtgj6kxfM59nCzKZswbfiK",
  "key37": "qeunNzV744X7BbiijWxdUHRGw5FNRuRSGY4UovwXkdwKs1P2twQ9zE7w7G4dpyUd4Ue5T8SrtAMnovBafLjPsZN",
  "key38": "4Y4HTR8SBoqeM85SRNTyaaheerzTd1QVCnawFcgTZukKobuht5isA5FT5HUn5diwXJzhbAo3J4PZVNqgnm5ViuhH"
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
