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
    "5GZuR7VnwcMGTYtmX6iHQ1mwzpxWEza5z1HP9jUsenmya6KDNVY7v2Maa5tdzkv4MU4kYsH7zMdHZERb1BzQN2RS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZRMMwPiPU8TPomvModvdmszrfcD4Juj1aqHCTTtkvjgyiKtrwfLURfey56yPn4WskhNfC5V351J4PqHFYq63WJ3",
  "key1": "sjz4xjD5MquhPFi8onycYSrCchXvgY6pdamqNo4apQ9bgfZMBaPaHjENcrcoQiDMh7ikV5vFH9VZcuPwvpQPH4a",
  "key2": "4ZVu2Rgq26SnH9sNBS6e7uWjLd2s5JMCFJzAKAffR44aXTyEWEDZ5ANgyYj8dxTkNJ8Mw3wjnNkr7Fgx5zMquDhR",
  "key3": "2ZCmdNi6uEqVTFTRcpJDoMGL4pvvM788diE2Te8tfyT1Jt8QaX78aqkGABLCrgfYpgVBHejtHhZN3nNKpaosWrc2",
  "key4": "2jtZzCZp4GchArnhajgNnUKqyXeTRX9iqb2A2LkPQL6TGaKVmwqk7kz7QYHvmQXNs7dwkLegKeScSvjjzUShyTv1",
  "key5": "5PqqJRzsB6UciraF1hqXCFpcLXKYUTQAtnZekECBYHHVPY3MUdq9yhWEULbEHm7edZTFqeHHU8Y3yLvjnXpJFxxX",
  "key6": "5AVxaXhuz65PMnSsxz5tuNuH8UXNE3gXSKHysveFKfzJWnasCJbZtsHCi2EFNbE5qBg4d89Zm3xq7dpFwAPB9XBe",
  "key7": "5SUdKWkUMKg6UXwLU9roiziN4ecAQbyZAS4o8RkCTn3hAAftXXrVH4Yj466FHxruAqMTudts7H82u7svPBdWDpbd",
  "key8": "3cxV18XRdyMw2iYAC855Us9ogoH3dFqCM45c7nobyjDvQeSJgPYciW3qzvnXU1oa3v2B4VqJWGiirb8NLkBwNdam",
  "key9": "4fFgpLx9Bk8JngHpJ5GmBVSASUCSBL8SSnoA2v2cvce1CaPyY4aoxEnZqcMshM8Jn1MwYWrYwBUiUMbJNXnfd4sj",
  "key10": "4XnFYrdh84TTaRrB4yCaR87g7BUDKNfrRyYfgPh7sQZvuCam8u8GgTEgHBTtJpvqALvvnqcDAW6YpYG1qpSoeRQE",
  "key11": "4mH4CWsHzeWHAABbcPxtM9PJ86AwbbJf6wTKL9cywTvDD4q4xPa8YUHDysiXDXRRkxsZhp3Q2UbkfNuYkZJMrr85",
  "key12": "3jipcjRCGqXWHs28LP1y95AzUzwN5UDZsFuRdXvocTWbXikseqbxKZfCS7jGZoYs8kkkY8nStpgqcByXXTaZ2iyG",
  "key13": "5mzC16duiZd6bPp3NtZn1nHwnNuwfWikSv1j4UYghvfizt1Zqfm6zR1Gts3DzK6N83uwUNv1xBJxEGwrMyScvPbo",
  "key14": "4sWDDVvzgVqsAJmZ4hPY8vxLXFU5Q46XxybP51fgVFSGJFoM6qxMrGrGitinbHDC72ftby5e2hqrsnKy3jnPAHfd",
  "key15": "5feu5V1JaGag56QSExkoGrde32RVSvHzqQpJrnW8iCzpsjivJpy6DjzfC7795xLXJAqsG79b7kcLyw4DefowBesw",
  "key16": "2seenWtz2Qg9wemS4ok5fRnjNvH9d67Ane2vGezKUHHXhHgPdR5aGbtmQFjUGPUam4WxuBn8bAS7hrfDdvPSepdR",
  "key17": "3BQvACjSnyRGa3ToQkbnWw4JmwfWY8yzTTzDPjQEqukTBWJuSf9xLrs4jQWghW7XdwXquASmhtE442DwCpyhygaA",
  "key18": "P2xJzR3dN1a5Ko1CUSoxSNemn8mMM548y7HGf7CLxnNwdscnWJxovWfAZQhZddwpxgWr1c7ytC9SwMhueWipH7i",
  "key19": "5Npzi93WgvVqcjbVtQFigW9FZd4LUsMcTfehTsMuVDHqEXULX6fSWBwwbaSvfMRiTGb6wJws8Ua3R2fMhsgQyqj7",
  "key20": "3DAavuW21ubxTeRbsxTY6Tu35sSShVLBRZ1nTjPyTqYbu1E6t4tw8BEZ9nJD7oEnkXiK7Hnjtfi3jg5h5vEff69v",
  "key21": "uTByeFdoMm3gDr7WYaFGaJX3htY7rTamECTnWNTdM7zz6n72zfn7i1LXP8RZzH8ZJo6CwVCkBHapnTLDdpsaGHg",
  "key22": "2f5zhA6mZmBTL3GfrcxbVuZanye9xaSQ9xAqAaofMHgPodM9QEDgAgwKvSxpLer3omxBLq63ZjZymUU6Lp7YF5LE",
  "key23": "42U2Gt46pFoR3praPzehGsggCB2GnUpSGzwZ5LSqWuZvJ3gTgXUzpzkr7a6FGNuuXnPUs36AwSBQ3BZaN8h9vjFk",
  "key24": "4WJwxMxpjRwjyrYiDe5gHNvCufrmYidaWoBs4pmBMbxRvMycpGoGB5opqbrim8TRsuAgv84s2ncYRusWvLZU6hr1",
  "key25": "5VheMEvFRCKPS17PDPzgnNyVa9kV7QXRx77v3HcCUxDSdk6Z84VJiS2GfcTf6qY5fUboW1PU1kSwmc7ufW1W3otV",
  "key26": "5aj6noCmuLf7wYe1Ft7wAMsdh739kQA3ac6Hr5cwQAL7rMkrTPrZdFTp2P75CJf9zcmwD4R1K4Zp3vZJF9wYFcMj",
  "key27": "37xNRRYhGShVACqKtFHnWj7vYvFFLq2yo4QR7n82MUMrTTrzB3yM2KNmXTDcjxffWxcshGbXfvDmDh7H36n3Hv53",
  "key28": "6m8XECHVsVVww8NDXnLKyFcpUiaPW9zTT63cC6PE8ei7M78WztYca5k4JR1ugpNxpKkzcTJFVsXm7RmC4dJS1As",
  "key29": "5ju2pAN9vBu99FJVWqVqmTPov9vMzUJDNkUdnJbSLjcN2TE2r6V8yA41sGoZq3EpfhkcANG3KWK1tHsGPgtPNg6p",
  "key30": "48gSEakesJN5Ki6WRuQrDSDgxAQxBYTXsQ3bbg46cTNw5JKeZj4yW4MAofuDPqSZuDptPsmknSZaW3ucQRZjjEi3",
  "key31": "R3kQNRA5omM6F9YiwVCr85Un4vN6mMc2FZ8jCS2k2qJZcARLyugA3P4TLht4dkmSZJvYyLdcpQjr2JwvHS2qr61",
  "key32": "2yLY3W5XwY89x7CHBbUhq2Ur3Rm9eh9D3RCFhcQnD4hnEe6GnCfJK1e3Cj33HPmQMEjajkzXvybnU88yqV1MjtVZ",
  "key33": "uCEZ6T5PWaN9zYv7TG7myHt9JtTKHn7mjFDbuNWczkhQ5nX5yeecuu7iM6kwRjEy6JttkQvaNBtjeFnVXPrAsTy",
  "key34": "4Go8DyePUmXUp5tZLVKDSKQmPpLfNFwZxEAbhRUsTPRE6oUXgv6vx3mmiuPZev17Wzv1WVG7YBaMqdTEkfpaJJ9g",
  "key35": "2WxhYHQLczoXodnKB1mYMndwVL9dFrLvxvL4mERy4mPwKKkUCDyRz97mLqw611py9CwK6sHhH7PeoyjKy4u8kgGu",
  "key36": "3GFtE2df5uBDb5ktPDjuwAn1wRvLPK4RuXYrRvFpY6Ldiuxp8HY3Px8jkGjvTnkN9cm3iwdEBVRFVM63CXqpQZZ5",
  "key37": "aJuz6x3kgSFovyD4tVwhQwXEXBnF6oWzJPyqUKJJu5R97G143bbEmA7bCxzoaWctz4UZi9ocTa7jTDsMGuUwC2D",
  "key38": "4EPi1NnFUi84omaGPQr4RxxaDzk4odw82PkYvXXWPNvPpRVJvDTd6KwDTuFTD7b1tYAJeyDrWTWPVV6y5m8Bp9Lz",
  "key39": "4xasYfByNpoezBR29BjZmo7sRCop9zyLZNykmwMN8kdaBnseu1zbTmUa1pE4QZrLM6ULsx4LVDkRaqvuTkzrS78J",
  "key40": "hK8AZ1vfjGzmqzx8ZeKNh5fJZnuMmKaajzDMFsiYpyKacfNE3YkpE73uDP282D8ZFkqLCzRHxLwdudejfDZsCKq",
  "key41": "6372mirCWh9MAVT8zFZMubQKfkZobYatfzvy2weGbcfUXGZUa9dnuNdtu77TFqzEfgVjGZYYfh8rznbTQZvtxNmW",
  "key42": "4uv6PXHCTKSEsQkbt2npjeWMKcxQYYLpf86vPm2mnX1MNXUvqBTCQ3dptL72GbAM26CDLYsSK3rtb5bb6W9W4JfM",
  "key43": "x19maX5xjYGjgCLApjX9mL5vYbmSjxEvbfFbC1BGX8T6DEJKrrtd7r2qf5AGXWft2h98zZbfRjqZBGZPxFx6tab",
  "key44": "35K9SsJ4DCarckKDaWzkzoRXHQeLxdpL7sam3nyjnfWdDbYt4EyEdSSqQeZG2RXXDyFhrBRbxs6LKCzRf15Z7Cfr",
  "key45": "4avk1jX9EUq2BwGgFN6e8ba4KkDQ5vhB6n7DeBVfSFwHEq3SqEgNNt8hk1ThvHT9TUWWdnrzKKbgJNqjG5gX5tvb",
  "key46": "2GZwFSqhX2Ai9XuBKxbuxmsRhYmrKLnFNhL1Vnu29bJcBhYPeAiLQTgjHn9dZ5E83ktEgvcog6ir6TbKxEdB2jXR"
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
