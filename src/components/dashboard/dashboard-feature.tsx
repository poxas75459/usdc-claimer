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
    "edy4eVH4UvyNwtnMhcAHSPAtppNEiDxu4m7qkaQ4N2DVpc3JiAWWgbHUffgSs3NF3mwBVJeif4hxA3Du9dxFKGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x6wFm5YxSbAzthZTo9d2sEs2EizbY2VQWMZEiy3jCc7gm51hbZgvpmKiKPULLGBJDJ7w4rPHh2PxizDhjpyMV3x",
  "key1": "5QDAzXawNWwhVzysaFSbrBwBiU5TRaxZ6AMXiCVAwbWEUFaunyHL6LrTiTP7VRTwvwwqaS2xV2dq7LTPuBbB1TkD",
  "key2": "RmvGzrHYmtojhpqEpmBH5bH9MewtRzEUTM34L7KqNLxPB53JCuXDek9gmMKAsgW3wokHmFbVr32QgeG4FLty7aa",
  "key3": "3c1qA5MCi7xbPLEx8bBcFctXMuZQDFC3qTdraweLYUsv42XwWGbWLNcPcVn1Pn11vyKPTJPaFBj4CbjH2294J55r",
  "key4": "5Nc2Jfwc9piPMDg86Phnkew8oqD2Qq6GBqosGshK52YQhJTLezDkVyN4gn3Zti7LGohQuQ8khK1rvJMneMj7tmKB",
  "key5": "2LncvPvqYNYwKRHZJ5vYaUrAV89PThhSVLLiE1DB67zf1cE58psKMYPwCMmxiUi5V5MXeVxZgyu2QMD7ZUQ2LYLj",
  "key6": "5f3Bnaz7R215CnqAYcJL7qWRDGqeZMYFz8PMKcRCW87C8Y1uxSmjRnTuzf8feF14DRvtzDsx5F2iXR5SfXtZMQHZ",
  "key7": "sR4JJxKprDRvaV6uLpBhBv1RuLMEhfrByTpPa2n9Sa98GtuSkZFmEywZrbbdxyGQkBMNRroFFDj1KFtbZwgdDXj",
  "key8": "5ne6yPSgk91BQ3xcqrfvtmiCYhsSJi6rrrqRkHhBAiT4R3NgvTsKceStce1F6YSfHSKB4WZjCY9Z5r9boUsLRDhA",
  "key9": "3VcCdaTupqssL1GWKGkNES5aQnzeCfzzhXBbe2rCMUafhDGnvy7Ex5uyZoDr4SCtR74d25F6UKq1ZNF6FX6AZBfg",
  "key10": "5gVaVTjfqWq112VLdbRodwsEsUQY3rNXr61kB6dsujZHo6FgnQXqpDQBkbGg3VvEpXHVuUDNUaoyx37G3L7Xpfkq",
  "key11": "3QRoatSr2W1JDs3Wu8ncu6nGduAoApcmeznaga18beLwfoVnbY52PPG9ArT7mBhuT2bVyhEqHmLC1QeYPYdkLuUa",
  "key12": "Ey34iPrqQ6c8RmEAJo5eaZq4jLD46TXkNqPF3RtKkRZrTC9D71rr8bVJhUDzrtK8yfKLzjHWVjBLkW9hagfn4ay",
  "key13": "5kJSf9w4oSdo683om7o644jhYMYPDt1rZ61EFd4GbLDfjnHagobo73F5sVahQw4xXMsy5LdSxsbMWviWKb9RWq6A",
  "key14": "3rNJ42bNXBuyAJm7aaMzo2sZFj6WtsCHBEAen7vMYETaYr41NzMssjM4nxyoPHSb4he2nFaa4VKrp5bN5cGxFUxN",
  "key15": "5TTZ6fSdhTSMw1V8fGuuAnRNNcU9idQyosRgX3LFRXoVhGrVk3oYVuPzsuMEL9a94hioUMmFNJGJ7xnjHNEKvLXV",
  "key16": "34RiahPye4ymbyXQPf12F1zncM98cWHcLUVFXdJK5QTY5ghRWdz4eMr1Wfe7C5jSmvWKAGGyfmqY1YZuLSLahaHT",
  "key17": "4PeHZyEC5xnz6Q8976JaNsFDdbGkrGMs497R5DqPGPUa1MY2Rg6qsVn4v3UuMUmudmQGzDtqm1BCvFRdnj7W3MtT",
  "key18": "rM6UQfTSwKKPX2DcWwhWnxJmQKerk8dfXb17wJzjva3mXLf7U24792nXXfZpCMTYfPyBSDfxcqxHwhhqgesqzTi",
  "key19": "22ZNaqTHWbHeCxEyx4kBcRDFHWenr8vP4j3knQowrr6khSEt92pazqgwJG4mK3uAtBwKmqSNFn2x6abZKn2pi4oA",
  "key20": "2QCK19iu1aqJSZ6rkWgE1FkzqXPA5hBxq1p1PeZdZWAg5cSqsrfaAQnKUMnmBHtAdCNnxSbaTXdJt2EQ1Enw8bvu",
  "key21": "EXaat5aG2xW5piD1Nw3Gq5o7QKU4xxCYEocqWKTqkP6vyEEnGZyHteaiyjsNuXSzkcjujUNr3FjMBYvxJ1S31qU",
  "key22": "3FQkTirp1nM3gzpNosM4byAuA96AQCBQsqWp6YHWbiD8steG5UoY2cMYnaUzEZjrfHXFVoybBWHMs9MeJKfENeyf",
  "key23": "2MmohgQyyQeQJ2V4guomD144hWXT2fxXZ3Ubs9Qk8HW2DdV8ZwSoD3W8X8sWBHygMPXvGLbbUaHZ62FWpAaFc2Yn",
  "key24": "5UiyL4tKnzDg7sYgvRDTM6SHqPnQpqyosi5Y8KxzfXfvReLBe7CrBZSb1PX9G1NBQwZWNVeqigJpTkS238yPVVwZ",
  "key25": "5kuTbmTx9LNPBs9y2XLLxBPwwsWjupRRg4j8BNt32w3E9UMnDaWtDmFw7Pxg1epEKAWKQ1bhVXA2GrxmfspSutor",
  "key26": "3uazbGpgsuWDnRvydi7PMduKAWYHNiC44fqmVENbfqSqEc1eksk2SqBtVuyeg5uSRkENuWh69MsUcEqV4bHDFK5r",
  "key27": "6SopSW3ty12FHfhS4ZzaPy9abDaaNhT5BGqyXjLQuMUAVYChRAvWE4ruoRKkzrL41nBzYyieP7GK9mbLk2YhXW7",
  "key28": "Uz8ZimDzhqKrqkjcsFyVLPxurzK5kq6sZWKzs9dD1L7FtWvs3SJA8HMKm1dNVoY11Yd5xndJRQpprB4Xvjzt3hr",
  "key29": "5AwYJNTusRErxbNtypvqP1xad4CAZgjUkidBCpvcHHkEoSUmbgTe2bFvPqfZ1xXa8JzhZ9yC9iUU3NpeBwzzxVu3",
  "key30": "5qpozMonNZSSamLEQf9sompLUeW8UkH45ZuEuPG6ctCMPB79y3CRvTsWyzr7gqHGvR2hQF6srnFf2p5dZi7X9S1s",
  "key31": "5uCgBS6RiU6mAqurZFfbNN4As3NsrVcqRMNwmeSjv2gaPwKBM6An7HP6yY6CZ3xuJe844UJ4155gjNGcL3G8G8UT",
  "key32": "56cGS583m3Us7KoVN4ZXCPPffBzQrHCHenEycCqeZjn5T3bPruRkdQ2tg9t6iMkEGfsyZxm6hrvtybAzM9w8kWTA",
  "key33": "5eew5mTyqSgRHikru3x7A8k8KB5x73VxBqd9FP5tyxWsmF1qUiYXp6o7tP3uLnUTPHYqzTuVhx9tkqaL7YM6jng6",
  "key34": "3taLBnsxvuxxvFtEUsBA1AFNL4RB2NTFF71xss1rV5nEo9JqJfohTpC5zDy4sDQ7TAzRRKzPa942gaWf1r9Eyxn4",
  "key35": "67Xnt9E2ha5Nr6NHE1KZxy2iCLrkhzGbFUaLq949FR4AoUS4U4gvivjRnyVTWnBT6Ms1XYgcwc5qkoWGDXRQQwQo",
  "key36": "5XdoG61G9JfWXFFQGZtph5nS1B3TkSbcykKw3nvEXs4dwVYbs3Vv9smxbjHhLiDugSVuMkmULMHZFy1vU1rSpQtn",
  "key37": "4yJHZX9k1kcmgEgN8ZyQTmXku7syWLrJ9cb6fCaznLXK6SkWTZQKZNtvbZtEyLKbLa2K2SVJRztzLHgdn9Q9j5zw",
  "key38": "47uRS8oCBr5QAmoZYPQftRcCVo4nPVX7rE8kEDdbdwSVPkzEWfkvqh1sZwRzmmV69DptJH7jXhT7HcC9vWcsePG6",
  "key39": "op3MuUm61vVmG5kPmAU9VK1vNMFQ1FSaZckRpZmhnSjRGFcGNC4y6bwfdGwAFumvapDSzevMnhgGzcWtte5A5wA",
  "key40": "4xZhN9HFHjxzXJGNzZwrQAmAY414GfpbyPWcre4hPMmvVejS7qMoMEHdoADQkHkoP3pT3GSs4XGBQcNqT3aBHThG",
  "key41": "3zJnB8sGKnLJVyJg1GWu7k6pvQJEX6eYF28AmzKnpvhN2BKrwnksV8eMedudWdcQXVV5GZKkVgqLqayUDkKUs1uW",
  "key42": "3ofUyJJuD3ywweWBDSSvKaDPq8yTjYc3udBoZoe1QcNyfTDHaPyuCbuYdAh3Hqmo2gQnGse9YUvmgUKAjFi1gE2k",
  "key43": "3FUE43bvLMUAwCLDgF6Scjx5HzK3Ww5D3KrMYXHnwM9puwSoVzHyPDEDFi5RzzEj7MPaLu7YSb4uKoWsS2iBGgQ1",
  "key44": "nR1vSmK35FdPFJLRradF7miZYQ3NKzvUc81w1ZD9a3nZb4X4bydshBid6ednyXi44PAgNjVSaTmbSgU6cBNGM8T",
  "key45": "4cRRR4QDQwJY2t8uuDfKfQSxsHhZQqPgbQ52ariRDpBN9F9TxXNu7hyfrADVidZ1eXG483nT3JsGUnQ8UPeYCuyP",
  "key46": "7gNYkqHKe1bTssidWXGHpfQua7h95JdvVKXUwXNZWCMySWM8bDBPoTEypGe4j42zqGpDgdJ1sxbfQEGs3x3sRQZ"
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
