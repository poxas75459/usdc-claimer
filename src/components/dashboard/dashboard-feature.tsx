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
    "5uPVu9PgFwCmaGXRfwVZ7hif8X9iPeXSdkidENCLfp1Qg9WSvAGn37S3zkN8n7jGXGHH6ZhNsLGzEXMqAKx1TuyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bx6qhjpRZVtVghm9hNbtgaYUstNwbDfERVPpaJEsHtxwc2D81LzrBpcXEmPCbfnMNsiNXYLEDcswGU6BX613WnW",
  "key1": "5wQogehdv7jCqtNUYYbJEUKuKNQtSnJCetu7VKXNq3uQRTgqdsSh3EqxCn2QqrxpfXJ3LCEZQdFgqaYM2vSZ63Qy",
  "key2": "5augxTjseBfexSvF5Fdi9ZxMP4hj7kb6wiGMbRXq1GbM7L7cNVLhUy4sZAZKAHxPe6QJqGeWJe39iyMpeeBKT1VA",
  "key3": "dJkccERYupkeq1gqJ1mvsaaAYoUAjnNxbn6L5L5MWHzosRVk6HEQJpWGaPQ6BvoQj4U4vzfjuZjDsUg1737mQbZ",
  "key4": "7EduDp9Pk7mqhn26wehR4QTXtvUvWWCqEeTBTGVPvDm2zTovuT1WNeBHhmWmCrG7ftecYwKB4KmZFB6HsCsfAuu",
  "key5": "4ctuy5MagBxitBfXpyf5a2qF2HoYWoU8JoL7TjuhP17PiBWKXk8YbqXPXFVj7GmvGX8r5KUBdh4g8efpa8pqmfwD",
  "key6": "t3GWVFX7jpgaBZFDnRkat2cDRdCHwcpeX7QDWPaVY6ryLAcrVjgmjMAxJGY77stP52NxsCz7zKvCNQMVp2WSrD9",
  "key7": "PmGZgZEqJrhMT4nFTv7QWuVLcpbmkUWyhmZVys9LGVr4jTSaKPmLjZ67kbRugDUgwXNfQgo8XpfTy486BzhRCK8",
  "key8": "2koFGscSZBdAkFZz6nNkfTEeYSjrM37CH4GR1CAT1bGWutptPgwNNJaqBrJ1thRkMemLVrU657rk1JwvMt7TRbYG",
  "key9": "3sFdzf2rp8uUGvNf555zNbAbYWxTxjaqaLpFvC47SrqdMMAgg3x6oTPZEkLCzPJhH55QGUj8n6DC1aE7ZVVfyCrq",
  "key10": "56cYRrdmgEQYkvke1B2zgjKsScib47rdftiS93g8chykZu38pGTTAHgneM6ixUydUHhYTEraxAg2Z1bXQxSUjDwY",
  "key11": "3Nk1XnRShHWH4MTFf9sNm6KEQtpMLSP7eXk8oj9o865WyWyY2zBtardpsC6nCc6oK8UHy7XjAxWaCirHYXjwycDb",
  "key12": "DEiosMXoCjxuMeqJc4ZRBdqshQqejDnrhUYJy2yJLcpufLATjnw2YT7uQBdypUsyhb27HkSgoYCJsjY2k5ygwUQ",
  "key13": "f6eMpXFjGL5niiAhH3ABQvPCZaUj42nL37EJVpHE7SdgvX15x8N7nG3Cqyq8TUAQUhTY1VdWzvKSjGTLyTBZoPK",
  "key14": "3YQRZE7hSt8T491qgWyyVDGgsgshgauspCpKEqYPwMbD8nTtEdFipqBMBJS82GTTLLLdMR3CKZK9VFZff7V8bkc4",
  "key15": "2KcrDw4en3Ln8rqfX4bX8FdtHk6W68ufXpf7McuWPzHCBd4MSpPgzXtej2xsswjqogiQp6hpXh5jFLmxasz86Dzj",
  "key16": "4UjMmX1UqxVP6uUkZ6rzeX5EGHfg9Qk9K15LCQCYAzQ5qPRqybmuQUVswVtLZUmX8qJGiQtNHmBJFc4UjJ9attkm",
  "key17": "UQRYj3vqTTVBmgi8qCefsyJwwfvketERkrdm6Ci65pTiNg9cc7N4kgLLTM6fkYZcBHX7RLRPSDr7KX3XjpXuLcU",
  "key18": "32sKjS2RVuv4TDyujhD16qTUtozeZiE2f2zYkJhcHU9tei2ysqRQ8TT8HCeAJuKoraGZrSsk1RhRJCaUnx554Wdu",
  "key19": "3h6AuJTSp2bXgqA7J6Y1a7GJefpfKrvpP7oTHEUyjQkMXRyFNbUpSAsqDQAwgf2bb1wq2PQw1dHkWj2wEByZKVNU",
  "key20": "51dD2K83sHWbJdPwybHUNJd91yLkM584VV9mdEDnp7No49F5Cao9Re9Dh587VzoB537CFCsfkM9T9cXpmZ55KLuQ",
  "key21": "mmnVq3aj79Wkw3jXCpNX3L14zC3rs1noSw1TGe2EA5sZ66g3bhmy8NZyRfDUnDWLSACgTyYrRHunr1J61LdQcKv",
  "key22": "4wzYMA59sMAy7fudV8yY6S1rmZLviCTE466NDGbm2Jw76oRhqqjPw9nAQ8busnw8HtyPokUokH3BQoxhT5wcKJy2",
  "key23": "ALUQ7JLutSsy4kLJjNvvdSRgLMMftdZskSAEcrja6NEX1AxFp5vEWrxfFn97FmysKzdnqUQsuBf8vayqw4qtdM5",
  "key24": "3JVH5qHseNeaAsVf35VJvWuALy5DT9hco5qFa1THBLNHen6b7sym9b52SexNPbDkN2eFjD8ApGqCMWW2ra3tqGr5",
  "key25": "66GueyMjd8tycsLUjnsvFw3XQWKA2WSW4MAtGv1dBCczPTKUM6ivApws44e7qF7ZRduyMo6hQe6TrVPsyyh4d4Nn",
  "key26": "TfgQHyM8Gs9KFpRqRS8xthofQszwCyccbMYK3kEUA4YvJFgfDTbxTeTaBRqrCaWBJ8TrM6SR6kqJCeoJJhP8CqZ",
  "key27": "4Y6PercRuG65oqz2wvruUx6DqUumsk3WCVHuiCtghfs4g9fUvX2MQs3QSb9AJ5EuNK2WkXAm4vW6TMXxrgfAgYei",
  "key28": "51dWkyRxxKo355Nkr8K1gLLLJsQ3zRLukMSMxavs3g3r5Re1zQUCmwNy7xVqtPv9QrLJxVKc8X3gYVDHYU1WtKDj",
  "key29": "cPDf3AcsDv2o9JYsBY1mmUzG2PyCvUHVA17uH9C9ZQhSoWhs1X3hJg4rc59NUL4GY7G8tszSzRLm3M8AnVRtu5U",
  "key30": "2zXTKBTqwDVMKjeuugHj6jyQtX3WrqG3rYjMDMtMkFxxYdxTZrgpycahftzN5hnTi1NjLECFMera6MYsTAhJSuSy",
  "key31": "24VonTdkivRQZTQR2TWUsbxEdXLfgZbF2iJ9cSzCZBQhdnPgG4E6sDsCksEpKzVmtK5f2Rf6z7VbB8M7d9fDnTmU",
  "key32": "4k5JvbnxnGZ99uksqhhv8GZrsvJmNFbmH7ZPmTmL7UJ7tq84iJHtvX7SxeekXTPi3iUwtQacTnKZm3fQpyG3Fyb1",
  "key33": "2RTr6EbFBwWkJfg95su2otAoPbdh6NxSa2Ce5w1Fbc2xsisjMMJm2B4sF4gTjbiEcnFHDTe7XZ5Ws6ufLAVXC9wc",
  "key34": "32p9xdvkFu514Crw4CSxPfNHnaCmciuBP7BSvPuV5LMiWrt95tczZ6WGN84D7s53sUdhtM24p9baGPtTa7w1tXY3",
  "key35": "gU8tREsbZkegvbfQJHLMBkS1T7b6RR9kFJf3yHeQtY2wxLVTkX8DVxHyY7irRc38usZSE2bmnEPmwbC9vG7PGSd",
  "key36": "3qE5gqPd7U4Dp5x2U6bu5KcQ4CT6p5fA51ocR55oiHzHNyzrkN1jP9AfLpKgGGywDqsMYMsVeQe6psFj2NrdU96j",
  "key37": "4XErFQgJBXWRCibe9rmuY18oXgR1zkk9XfLfF9Qu6ftjekVCPziQ8ZorTaUYaVUQtywa7sLx7qXz2rAeN1yEEeDG",
  "key38": "4gGcE9MPH4d1PjoGNKu8dt1VieVQvmhuEyBKZgBUvTm86qbBewaH9KEEhoNxkPSj12L5pirnVcAxTTKgAkDzYuJD",
  "key39": "5CZnnAuf9FrZPobP38KNWZS2yq88Kn7Uru3935GAeEzabsz6DdjKEywH1REygQxVEka8kXMbmUwGiYdAXa7Dq9Hb",
  "key40": "rqz3vYCCtKwNStsUZ1pbfo6okDRvq8yzf9Wo83aqkuvKvCT1fRanH4o4KQkLQLiWkL1bkF6MXYK6x2THgPbMFPa",
  "key41": "5PgzTBHAJ3YUBFtK6xPaXYfB5FYBuVfWjBWKNRAXPN1YJrtGPm5fCyJyaDRAJkZeLdRrsm4AZ3fp1Hgyx3VFGCAx",
  "key42": "3hfo2QEjLxL7LD4YEQcsWQxGJ1eRGN6e84KY9AxZArriVwZhuZSqmU75eiEN9WSgf1Me45izv6Y55oU6PECMQggD",
  "key43": "HtPiPirBG8SjFV3nb4Gn4WTC1YhsprnoamCQEp1H6KcbDJZ44QyKP1rwTCuHST2WNo2Y3QhQQBEa1Tj2chstDKM",
  "key44": "2831zBxNdHkisgwF3JoDnCBHRVDgkuxZuFA8xT6Z4WA1hWFGqJyQdfJUfWr24NcDTvtoCUozYehqvGUBVty3aJWS",
  "key45": "rhzti7WWMhyfe5pfk5WLGSWbZcX2ofCd3trWVi5vr7G3QxrZfTD8aUo6EHnVuPzJk78fRMWEyQ6o12tB4DwKxzz"
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
