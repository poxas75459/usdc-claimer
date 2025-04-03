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
    "63YHFXS6HDmdELuyf94AeRbqwoy5QK41ZtsiWhXdg9cqE5HQBmgxaLC79XL2YxYvzGfmjtb8xnM7uqJHxDSx9CVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pUrb8PtRrJxQR3exQx628GxWetNKg4FPwppNjb7CEhBPn1cP7dxytU4sAwmbnyTHJ6ZSTPbnwd77uYL6DoVqqRM",
  "key1": "3fe9TKhdQd42xQBP1bf1TvhfqC6z5Po9bwbRetvDxjwGK73Ko1Ty3Gnw9ZuDZHLDs7AZQxP5sPNEdR1ip47VgSwu",
  "key2": "22N1vjM8aZ8UF3HDZfYFk74XNxpLhAJfBvGj3BarzGU3N9a8kXbUwZPD2d6cizVHKvxNFnnRRVTkwX1qpKpXV6uz",
  "key3": "22UxxNenA9E7tcqfPpt8rCyA46KGbcSiXPAisP8LNeebGmcVDi5jei3GxLSBJAuqhgb85jGAech8hHzfwQw8SZVk",
  "key4": "2rt1DFWGW8UVuDVmxYiBcsyq47cvRVjAAtFJrqVLhHzsbk1KxXKS8BYYipYvXJ7gjpn2joncmR8UTiMop2T4Yr1n",
  "key5": "675d2HroPWjWcLRZUWarMmckYo7bFmkaoopwJHS5PnYkMB6iUopQv8dxaUYTBZQxfuA6QRF2sHGK8vuWNFhGiA2H",
  "key6": "4CiksLnjAsLAB7fvHq7dSGgQsotNFDh53TSPAChfx4pygtiDBhcr7sEH1NWAyU552nDXWSrstnEjCxhLiftaPahM",
  "key7": "2kG9ShPBunn4NegH5C8pwVGMB79Z6V5JE9nS9hg3yL27Y9eayPwYZPdswAFiCs6rAUiEjc748BizEUP19UJ1XzTR",
  "key8": "4xyTr5zV4Bp5bHPA4yFhY13Ux3N8kcwkk4kAZKYoEw8ZCF5SH3y2mjvpM9n2urqYDUyQDGrtrPRmiT4xyJaXSFix",
  "key9": "4o8mPXmynNyDtTtS4dX1NPNLzfbw4AgukwomaadYSvpFjYmcrsxpTdMTZhcbaDwJyJEA1CZgYrhyTnRapDrHpQRk",
  "key10": "mR3mK6CssqUT1HgrXTgmWZmV7T17vvqTotY4nXLqVYEw8RHk8MqTCEGrFGXKzQEJz4ryiqz8QEpzHWtJzDqgf9Z",
  "key11": "3YhMUk2kTbnKqTiNF3GsuBfyB86yXn3jNDfEVwFjqf6GeoU6DEYNaed5yerihPpnvjocWWW8z7PuZkG5fJ1yte48",
  "key12": "3eb1TyN2SysVtccPMJ8RarUMn1NgiYDb78zwDxsxgjqjA7vfuwTrM1vbgvN1PL8awiqTtp1K7mXKnGLuaMxaL8bC",
  "key13": "51sSQT7xuBwcWMBvxLrPcdwxfwB3jekjpzKcCt2qGednATiNiyUtyompkHr8vd6WDSJuhghAfYVZ3baGhwea6W5X",
  "key14": "3Yowj73MzJf8q6V9zrBcVs8TAAPWJ4enyLEKWTAs8mrSLY12AkwekkiibuJ5FDVuDXysstZA9ntk5zgPc8rBQxNg",
  "key15": "4xjhLr6m6uUkJ2S2XYKhMvSvnufTwyGcVKNg4XzNxqmn1Sva5VQedKFhiequvmuWvc6PqBqtZmv9Lknw4xV5pdwW",
  "key16": "4auJcRa7o7SP6EeSuxR5x15XZ11fow3sUVmVRjWSxg83iZBqQh4cf681tuD7voi8jZuEyjbfZwZEekeUHXy5NEAw",
  "key17": "2kMGwHmCeV3bUK6jEZUvjbVjFoq4ufKyS8vWS6Yr48umcTfF4ocM9qJwGWXsoJDmi5o7wFHiVTETyZKSEKJSKVKa",
  "key18": "5oJZrduFL3W2qT89N3WS2yMdQB1WpXTtmiob7H4qAPeGfTPRUiSYrxEKvnBAc7ipLu1WEjmBW1PDxXGkMaeuWC1e",
  "key19": "aWGUJN5WWpVyL83brk7iyFoCcPwWq8CScmBhTpfJQqUGXo4iXGCmDoZsWbYMvsiiHbdrznz3HKHDc6zsev1GCZf",
  "key20": "4bGA9o9hvsAYu3M3JHrEYmXMtQwiPzrV8bSVSyN4BBTkM9Pt12jzykyw4y3qUAd1DAmBDxkmryXEy2T7MnSeSQ6H",
  "key21": "5HbH7pDHKQvwmDZAVhGY48iN7DY5PsXeN4zs7Pav4Zbsxg6PSed5wxq8h7Kg5vojmcQd5nfrBnsUJDCfgLuiwut5",
  "key22": "F5R52V1fVEL5gBSSGBdAgJGurDRw1e12zgsYqjPxQxrKrXKyvnUnFFn6NnYY91FtDem8gghhfEX22ffgPX8Coxz",
  "key23": "3KiZK2if5rwj6Jks8oHjzwQfgdRdDecBnAmbguQ9CBFe5DSJhQQjHQDHEAowDgrshcArvxhKN7812oKnkmCpsrS3",
  "key24": "9RvjidbdcDc5igeNvR3mw758nZKwXGhbowPw1u1SdhGhzX4jFbqafsYEZHe5cKawYm6KaV6VV7ZZY1dqoAJ8jLH",
  "key25": "3SvbF1w4E4n1iUWTUWLACFXaBmsjGPHxVxnKmyLv5fmww5fiwKnUGzps5SBwp56uMu36noDCuwFDiymZFfSoTknt",
  "key26": "sVyYHzM6zGShKw4BkPbWARbVJaeeRau2FMqtZYjqi8TFMdkjWAeFdqgqQBjafthpLg4EoixJCkVQyjJtwuQPMbH",
  "key27": "2aRQiA5hm74QSRSU6v5BLtvsekSJsd62USPX4yDdKgGcT1QmMsT8VxdE5fsqqJoiXncXcMyWWACHo6cgqvZuRGks",
  "key28": "3PUwed6Foe1kTJtzMEHTskPkDqJjktEPbbSCoST6tiiS9S8USxE2MAKVVN8RvXZJxWQkt3hHHsKMxWjsQGjnM76n",
  "key29": "5b24FZj4jzQCezCqPFYM4NbpTQmnpDAkxZFF6AVWtkviMdTZfrXoPajE9qrkaPkaA1x17hSG37nLUkJF4ip26Nk1",
  "key30": "2mmmS7u3xbxQNd3hLW1VTmcAi8s1Bq8j4Ye1KzcPAE4L92FhQPxidmoH3jF1ZfCRNqNZ9Z6j4g6FNuPhh7XWPNR3",
  "key31": "4KxBvLmA3jZzQHSvf3SX7fWkjkjBfLWVbgWtdh6XdPjqnW6hrXwUPGw622uopHGuZ9bVpXE1dkKN9TK8uFbmJYR4",
  "key32": "ZNSstTQWjyPocLeVCyZ3MSjXMVdqdJYyvqu2B5ZcdeNqpQGoSha87qsMeLFfZsADgpDbriFEXmR17dh2LrFw7gu",
  "key33": "5gSk3Kd6AU9vSYyy6sjpv9YgqYSnPJVkj7QqEWiy2YBC8RaopUJ2Rau3KUvqAD6Yzwmm3He7Fx5iWauXUJdYZiSz",
  "key34": "kizQPNooLxADADGJKyM3xYVP6s5YQbzm5JkqeSvMEKBwtXsGNQXLBT4ouHMgtQk6m1ebwRiZ73QKyfMkjYth1Jp",
  "key35": "ReLQMhTQrph6zLe9XEJhe1TNR2iQs7qe4oQJDNrZSZbXhknghRA9TkzucHaRSnrtD7hNijvKNSQnMqhLsVQvotu",
  "key36": "4uZ3rywxgq7DYFYsXcXTKpSQnzF7aFNk2d3Y8qSY8GoWEvRDabe4e5phgDYdfbQtcKeqGTEMejfeHKW13D4MZq4r",
  "key37": "3PCmKDhQKLhHPY56MpAKTo3tkJdVSxAGeRt8twRQ6pqZS4NLEBuyouLLHg43saAUyo3sde3tT1NC2pt7YBaHwC62",
  "key38": "5vttRTsQJhjK8p3QjjE3W3STA6AQhnoW2cgah9rUDHUa5cisfQCPYiVajQFjxBuqxrwhEsmMRTRjgpsJv15Tn54p",
  "key39": "3TEE5fKJ5ng4Pf7T5dW5hztRQjb1UopMMqvcwtaooRjvTKhFuFi1YaqyAn6bFhfmBXwjbnRtfFeao7D75jYE2kPj",
  "key40": "2e9EgKmopz7uvVErkNieRL5d8eavkowRkCacbXX6gtYGc11RfRA3ESqUsCQoF2PdE6ZSjkfLjAArw8GsWrQr52tX",
  "key41": "2bKPXQYKZBmyfAuPzrFMTHQoskcDZDnT34eDyUzh5hbY8VwXM3YYw45qPpTdRmU9HvE6ovgHWLRtA1QhTorXy6RJ",
  "key42": "3BuvRWUMuKn9zfrpf4xUhhFUPRGkJW96mzhBNkZ6NwuRLXsS4FK5x7jvuoUAiN1G5ztmPRSbYTRWWjejMWNj8Q4R"
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
