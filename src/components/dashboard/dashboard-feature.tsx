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
    "4z8tVxAut5TZR1HtVJ1qu3n3wNyi46WvThokJAsB7K7WRwpnsnmXqZAfSTR1ah5gAbAmKT5TPbwn5mfP2y3wMfVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KSpussXe2GmK1j3e1E8efU264KNScq4LfnMJGFx7osUprszgCrCbVhRJjdmxPuCziNU1Ybxz3sp3TGFbg8Jz5d4",
  "key1": "RjNH9ZUGzr4UXLBDmoFCvXSfgqgZUvsQ3Zc3pqhn6sh4kWVm7jzQbTTpFq7zKvcZrTgnBw92YJQsudQhiUqwa9j",
  "key2": "6XrovtjxShSnXy5DbXmiGyapuSQMyhkU7TyCxsRc5JNgpzbztN1Cme9oNKyvfPUn3mUAWwyLdCLW2py86nxGV5H",
  "key3": "49Cj1B6N6rsr5nQsn5jD6VJwJdJR2qx2zG38RRe5HAT6SLWJShKxcuKYJHTcfKQ21SaReAJf7K2ByKppgdbYVLgv",
  "key4": "3uAf76NQXrUmVMpFFAYcmHMkLvZdR846LLoKT35sSxtYLfGVcGfhZkVA97AQ54GFELRQ8aXWzwa6YfVFojdBA7Ry",
  "key5": "2kaEANU1cU1aCgkkyMmMz4hApYrFP8FCdhXDrh6snwpsyz1HPnArtEfLzqqRjAuRnUyLo1PCEUsF9pa4jpqVNw92",
  "key6": "3QFt2BYuQwXDQ3v2RiK2QZJZ6ZVeLLytFm3T7jqob6jrQk1AzPAGXSsSsijgUpJ7RMXF3jqzppJGkE9rV94PGqK5",
  "key7": "3pRKLKayTmY1n59dc1oGP5BLaA8zWjDUQVSAJoZTwSMHkaUb7MubUsUUYfFeYkrhSnYQDKCrLYCjPUa8trMXJhDd",
  "key8": "3zBHjUQiKKfWdhEjB9fTjksLjANA6tKNkmfZCoeprGvUCRkWYnh6DPXJqfrDkf2tEWuLt6XG8RJgdSuz5JccLWsg",
  "key9": "4ys28XjjgewDpjcpgtHjCncZcm9Fd1icNN3vmvCfAXZW8v82KxNBLa4doiDcUzubb5kENnQmLadf8cSCK6aMZHRY",
  "key10": "u5e8aHZRQM52EerjRVCKLbY6rVYEQYx78A2ou3MBWRKkCpjnesGMRBhddiFYQmnfmqh2cHBrzvML1Q8YjN3GJDB",
  "key11": "4sEymwtTRP8LFFkDxRikxPcb9kb4vR8SAdADk7QmJi76iwUFcoxWivNd2moGFuRCpQ6f5AAdbcpaFSSivNTqR5xx",
  "key12": "2PgcyAAEStrcRGR1ki6KpSZ2R1xRSe5TQ5FovmM75RptyA1SFjW8g133NjqxoXVPoqFAaY37pLvV5cNKY3xHX9H6",
  "key13": "2j5MBDJpaCYbP4iLwv5qmtKa186Ss5k3YiZBZs45o8xG3iA69BegTArWdP7DzBuwNU2sVNAsJGZKY7ZNLZ9jCwqh",
  "key14": "3YN7xkR9xFN9HoSiGYSJVVzg2FsWibvJN43CVhM1pCZv52z6ttyGvpdQFKay2zALuSkJ5zfQNXe9qRGPWGytb8BD",
  "key15": "3AUMY2CftdEmqmH72UFPj3vj658nHwWChiMad6ZPSManXw8ackAjWtmZS2ynihESybzQNYjkpLAwv3S8xau4kjTm",
  "key16": "5YDFjU1xrnqabq8pJ5nXyPTLANJsaDf8d4s1psMkvVfwZnPjeCXdrSQKdiU6tSzsHSvLDb9qVraqsDTHjkJSqHmF",
  "key17": "5PVPqZ42hxCVEoC4p6ZPW6qNt448kD1xYyb6JRhzwUGs1dZnetPaQsPT7QvxWK9DgH7mQp17dVLPDeGhdYSPyZDq",
  "key18": "4xx8zDjtqVdkMcy4cmZKEwzF5Hd3oCAPKKW58xaxcpKJBjNbKXXLRvNnMQbDRCu6g5kgd4L8nFE6mg5VE5NBoPH2",
  "key19": "49iP6pPvMU3pHSFjLA5KzWtSPfSALfxAedVzSJ6XohaNQiYJTHFJQcXwwrjhBeVgKEm8H8rEHRxhqVLDW2AvEFFm",
  "key20": "25Krx25qXCzuv3B2EDFMZMGueFdgufGBUULXwA7RAcrPx2BBSof4rtTkg5QRRrKenkNw6gmoaEf4U5onxzUQ7kKk",
  "key21": "61usc9VtuxabWVdf6XJ55Y6Ssu6EDPY11uKuUCRtjoFvD148iNBhNBUS7uigWKk8A5kL1maWRzNCMQZiG6ScQyZF",
  "key22": "5pj71QJhzFb3K9HiX7wkA9LdMRHBzC1UWrBm9n4LgQnx3TR7L7MrxmFf5Aqs48n7zJLqeWxqGyFUGxdmLrgTeJmk",
  "key23": "j6UCRPSMw4hxnZkguSyzGFTcxJFdVFTKAZePNDHVornM5nMbDHGFvxUj7rogTbG2Wq2cn3mJurptsq688nnRmZo",
  "key24": "SXtf8uG3SZwagtb56yiaWgGUXvaNM7EvYee6dMtAVvnUEf8SYcJXAKqGCuPSKBuvYLbY2wRNr9HQjptqc673jkN",
  "key25": "Ep1gx922TyRDc9ss5sYQoGzkdFGgwB6CgHJRRGJRSnkkzTm4jec5wag94zc3CuufSbNYzg5v6TodrA9zpj6BHsm",
  "key26": "3gSms6pHMzozqN9SvQ1FVefA4vFktojxzvL7bgzRmZGpRNv6cm9NuYkRn5X5GZ2h8w5Y1hmUaSRg62xWw4KvfkJx",
  "key27": "kv6zQGwYwn9cq4MZZexLt9KMWeUq9pL3yomw1KMRGYyQNLsAQtYTEGoUkDEarbAZTzACTi9Lf93rfLuqEt84mAC",
  "key28": "2ECFxiHraYK2uSRGPUtHAgeNqXyhEn429AyvyVzNPXn82MvJ3nfs8F48zjBGHRmFZH5ju7djnxHm1AzEj67qCy5F",
  "key29": "43MrKZdGjJeiBN5cE7d99mLS6Kxgh4paohH6814B57NAiB6hZRscT3AgdF6dAtVdpveAqb2XDN6bNHiCwvYEt7px",
  "key30": "5gc6PZD58HPz8M6AAgd1ZNguCETTW1fAzq6D4pRB4LURqdi4ttqJ3Zc6pifYe4DABraNVVSm7gtgkAXwQxseVCnJ",
  "key31": "3xKK68Fz9jA6snJXVa6cVtCT6vSkq7grStrjK9hAybsPc3AVcerceTJvPCzxhHX6GFbw5RBz67ZfdDhJfh9hKgYx",
  "key32": "AdgEWUXNsogA24Uy39r8Y6t61WmjKh5Qxa9hmjrA9xdtpdEcUmtvk5nA7pPosh7frRjy76z5VBzK7f1ocF55do8",
  "key33": "3hQ2XUjpEvXiy5NSzotRJRHpY5L4uWtiQpiFW8Q9qsYLy2kreSr7DLKRJEvX8bqDS9Ep8N8KQpPT4EUQ53h5yQy4",
  "key34": "JE5x3kBg42bg5uhsXng5obGTLCM1dcHBuG7KaGbvWBHfuGdoVUVoSqLqB3wkoTw3CfHVVnihqzUPkLN6NWTUcAc",
  "key35": "3LVVdTiPXzXQe3hp4hWMBzHWmuLssiKE4Qdo94Pjj1o7Xc6qrpcqzobvHAYE43haozemdFnF6QtEuqwG9auCYkF3",
  "key36": "4PQSmD886ZwABv6NkjK6umyvJiyoxjPmVPDVyRDb41rGUUPVPmhJC5wF2KfrKkPHq6xGUHuG6ew2vHZXpL5y3717",
  "key37": "DN38ZqVdxkLbzWdXWvt8qeEPbJNLf9zyecHPEN7ps2sWax2r6DHCnzGC4hfXbPQM5vWkhxyrFQ2LD8PFyioCyHZ",
  "key38": "2jDAg5Ykm6hM7cfCCpXXYSgVZdS5uxa3LxCFmmk5EFCcpQqNVDxNAJuf7NpyteR1BzU9yJ2rWgYZzsSP18nYSdJF",
  "key39": "5eWb67ywtaZkRCYjAo8GwGZUA8z4ek5LbeKaXTZuohGmLonQrjfkWN4pD7rmbsmtgz8VMtDvaKyg6dcA5YSU827y",
  "key40": "k8JrSqzptRkrdFgc69YTq2vj8pfsfuc4E14BakR97Vk4sZisKk5JRGcqm4bwJ46C93QiAXiazjBhD3mj7aJMqkG",
  "key41": "3an4mp9X5ynb13brSujqtEWKfdNsFWzKQU6PB6vawzC11Pbv7HTdMNUmoykSQ1eKAzkL9Nd4pcHXAmRm3EasZPma",
  "key42": "4rX3YKWueoTWYWecSB35vaPHwantJfLCcNKoRhJhBEJKx4odM9baWGVahthv8NUgsydDTy3M9q5KK9HKCRGLnCUK",
  "key43": "3PSxYRp2GdqytgvYaiJ9ZtUpyqeGoKEfcn872dZZzdsJMgC9RwUT1bM6XEoGYhnKzLRWR3otTKgXFsMpp6mGWnAC",
  "key44": "ZcrM8ZUBSuVRLpskwhTkVo2ELqo645LngFZLWn5tavZn2CyjUu1nv8WU3Bqe4x6rtc6cSxq2y6uDfQWMfPVzu7J",
  "key45": "2ZwuJLBVYzB1hQbdcXS3fDqxgq2pc6Nf3jjJYNCMc3n3dTESW714GtJJ9e7n3GSq1EpHYTXeBjTLzxBdAg29494t",
  "key46": "4JaPCkD9qooMZRc3QEp2xqoWjjRnJWNFrzarLHTTHtjcjgcHEDxpePABeCPbtpyC5VDdzFppXFd6V2wrb2mF7a69"
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
