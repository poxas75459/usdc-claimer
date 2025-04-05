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
    "65MxyGkNqWNpEr9DNjvoJXQoNQvUipfTVi9TPar9SKwBTvgSsBApdP7XLovdSzHKUtMR4gV2S25L5zxUo2cj37Wp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eGnsZQ4Hf5GwnXXz3YCBebRXRVrzbNsvPRkL6DGVRABqgk4yzBz1TM78cWeV9u4pF7HgghU3crP8BgX9vYF6cMg",
  "key1": "8vLQzu276Fp1xFRJm33WbcWVJaSWTDSjVoeLsyZZbR1UfnbgLk77nkwTU9KoQNJUcZbXq29KM1WATWCAoXNDYgq",
  "key2": "31ZyRxxVLFS72ZuSV454t4DV8mLMGNk9LSDWPfc4aN7621XmK5rJu4pGKdVtfAtY41yNC5ftZuVpazno22rH5jcP",
  "key3": "3TUs5JRJgoejdpV6zUXqm1ipbr6JMpNmKfCfTiD9y6YxspWJWjFL4pK1ehgUxagRpkxBC39GoFvf3rESi2syJffP",
  "key4": "61Y5jzg88bGC8iWJgbnRop1MKcHkudyWqT8P8J2NZuX1F2T49kAsY1c9ZazQhggx4QNMKZ3KrLE48fStADywU8EB",
  "key5": "5jZPksDmcLNY7cAMR2naxEKvytbpVsGfwKFKoRoNqg2tzLQJf5YNJqcTqXsEKEindCXQbpGcKeMyrihm5YQwFFWA",
  "key6": "61EXJD5BWYNo5wgoVDT89KFsqmy1K2VrkjuKs2PgB2sgWicLNmxdA1FgfLzmWS5iDHaKkRyNTTrtNKWZS2G1bzyz",
  "key7": "2iJqm7QwvBrEhmfS681E4gkEEZL2ewrNdk9QWZwVKTh6GtmdZt9ga5So5KDLRTo5k7pyoE3bCdqK8vGiR1n6Xy2P",
  "key8": "5YjrGoEAb5Kjt5E345p4RcoMeGhCoX4Yx6Bd5eMuPDWebX1BFuz5DBs7iuaSUk6VaR6SyP47YEWdSkbovGkLk96p",
  "key9": "33zmUC1M4Ba41dmmQPQjkPqrC8reeFi1gH8bCBn8KgGAuc2hjgkYfwgGbw453nixq7bW8opebfDteQ7iRXi583Bj",
  "key10": "43bGzqkdP3b3bLhfo2Yr3zNVNDoM9WH3C3XL2YPwaqVBg995NWa94HpYokTM1n7zdH9JyB5UdH3G9vc8gc4xLeCn",
  "key11": "3dJRDL1ge8Jr7MAFFi87rPQb84qNUjtL8TWzPvL214MLhPXFMuMZPfxNyHxhjsv45t1HueP5tyvWKYr4KFzxCppu",
  "key12": "3k3XW4uGB3p1weugT1CUVHLiUwedTaJRLiqUpN9f8yr8zv75Yo4JTHoBBpgf6zEXchFZBUvrGshZ8pX5RTysZA8",
  "key13": "5xK3keq3LcNhe1dLwFVsg43kdSYyCaQH8oAoSUJk8ZKLJDGuwuM6qGmYwZbLKxDUkqJp43uEwgXKaKcs1iNqFxd1",
  "key14": "447YsCQ9nSaA8uu5TSwdAGCP2w9mREiHNBx9Zf8nXHYRhib3piN3KHRHyU1tAoyuMDB7f65XqNa8ZgxmwWurxFM4",
  "key15": "5gAEUcnFUzuLAWKqd7HgYmYf9oDxfSoRoMm5ZwqMVHM2Sek9VyKzkTCTBPv3aFzZXaHoZd8m9DtZ1uVekt5GBa2c",
  "key16": "5x7s27TxqgpLRB1vCV1JLfdX14Gv4mMAe5AReHrpo2CJn8wfoEXByDvzY1vwXmVoCaRjcYGfNy6FHdeEJTMJ3sHm",
  "key17": "3GUURap2nkasRLLthHqLrMhzo7nBSBeoHtPe9xbDNPQGEAsLHt5Refp31YiKPeoB9kBnV5MHL1akgQqEmPnUMhzY",
  "key18": "2dQ6FMcH8rYwGhZrMFAH3fKfa7yBUJdBTVETSQB2mQxjkZstmN8mDefWafxMfZHP3Ws8q72Yzza6rXhHinRdvCqC",
  "key19": "5ag2zSuERGsuvH8K5LAZvPm8Ji38KS43yw4jJxAXd1hZKo9dpDisZUTw7rTYywPu4E7jsY79PNv6kZ1iGmKkjciK",
  "key20": "5ziJBjYpezgAk7LVi45z24tcr2Vpe8PnhKwPQyoBBeSm6mY34JQf5d14RXsZCX9rDAa1Hvnb2KbGn85iK1ZDUfkj",
  "key21": "4qQHEwwGKpwaWoLJ8asRPxVt5jLTjPP4NvBr9kUphMQBHBA9ekn9n7gekUVWmNc5cDAjuJJCWJpBTz7gYkZWy7XQ",
  "key22": "r3tGaMqGCRqUZ3K4sNzFbQYif7Y2zZ7Y2vYZ8ygdoAyRnxfuCPv8rqH71JpsyJGDRs1jVEvKNVfnzqRC1mQdbna",
  "key23": "3ZyRGAJpc5T6DxsQECRsuAbfMkSzW4HUtq2BYfpGDBAW1hBRhC3mj5ejh7cvyVnSUdqKUbAiKBZSgKSTSBdrpuP6",
  "key24": "4k1nkzfogc5nd5yNguLx6DdKs216t3oW6uA8WqG6GzEftK8b9PGVWrLRrEL36fr21t7BiJsmMmCGwUPEMjVp6PiH",
  "key25": "iWEvZ4BxfvmyknK64EznbB5yuGCC5K6rWxPmyvzWaY4ZqRCfoskaBvroeqsFMrt6ftGy2FasV9svrTFbPVSzT61",
  "key26": "2CyCCdW8wrwVeak8wj2KYJS3gkysQ7Q4s3raY5BiQN6Y7YMZMSby7mghUKDjgcypnzaF2c26AuckH4toEnse8GzL",
  "key27": "2eqwY3acsERr4muuyPyKFdTDoXQ7TYpdAhm9LsfqtFS8m1u2HbxVYuz2hTMUePePi3tDMn7KViYWhQDRZmnppnMH",
  "key28": "wmD34PWFMmku2HeWPHeusuGvc3Sx7hxj796f2aYfHBxAPUg9gtbBFL6iG2EqY3FNobPEDXbrhLfnoWXtRXmXdm5",
  "key29": "2Rde7SwYRfHb3ocynMojHk11MZi8wFnHbopjQBU7z5JfwEHQtWut52Np8ZeCtWywNGkqmrczWYtSqxeo2TAzZot1",
  "key30": "2gYW3RPLaDJp9U4kUGYsj1EsK6kLaWWcRE3tDDYpvrB5rRi9xyTomXmzu37ajvSWYrBmnNAzNwSPRod9rAhkFHY7",
  "key31": "25Xhi5MeiSzjuD8FqfCTDtcQx8YLwMuALtTpBVxhsQ7NsddzPJ7NNupM33gBeB7CdPqzRpx1rV8TdJzMEkh5Xisv",
  "key32": "23UM1fPKXs2NRJ4VYs2LHtinj5kQ1i52p2sP8QSXURbPnZVZKcfbCzeMxPEH6sn5za2u2z2T8pCibSq6ckdM2Giv",
  "key33": "F5hvxmH7mSJE6uk4HLUeEXaKMB8aYJHXr2zuwVTBrYnY4Ang4qHG3JJtJvE7PiS79RtNf3TmbpDQ6CR9P8v1HeW",
  "key34": "GthHdj8uFgqqfwS2FkL64npWUtqwJ9UhNsDZY4C3NQvAYDunSYSzV6iK4BPX4WbzseDqxDZZceUcVMWfi2xisY2",
  "key35": "2zihBVzmQRgnbHG27iqH37NfKmwAWwTYjrS4AajLDyoJuXXybvp2nXSL6UcGg6AHYuNbZ8nQnVc4TMRzZ5yeNWHk",
  "key36": "3ybDd7xv4zgUnt5FqfSdPBg5MUaZdJN89nMGV3hVJAAeadVGsybeWJfxMCTS2mo5LDZWRYtUFNGBkQYv9TR8JBHk",
  "key37": "4wX2tPoxLUtFiyhj2YmMoouNCEsCo9RUxXgD3GZxh25iwdYcPPfSp8Mjtn55mJVUb2mQCW2BUqzW3FxjZjfpcwx6",
  "key38": "3WEVWT8Dw4a7HatwM88YFDCatD15qTj81h9xVz4Jh6tUgGReau3YpKsyXprHf9jPmGLe4VuNtdVmEykU8bKmEAZQ",
  "key39": "GfrYDovHwBPopUwVFHWZKf4Mr1XYko8ojKk3ssgdAyt8hKvFp5q8LAXxRsS3npo7fgGcZVDHXBBg2QneUzjufbf",
  "key40": "52PQ15QbfPwJcM4DXyeKwcVTDWGjVeyHgGmvxHNGLJrVaBzv35y5xT1jWrthW4rptK119AYgoKFyFuofqek4xop1",
  "key41": "4fXmuhKsePuxtRpZgFSwj5ykKePioxkhx2XPuALBLSHVc5JqSbCxMfEg84UCb9VtDxyHDpHK6JTnWrVqEkt9oKam",
  "key42": "5qjHTXrPQdXVRggHVgw2kbPgWtA6ExNfeP1j3ErvDUtmoiTAvJdoq1a1sf7tokYxrG1i1WzTRJMNomPghQYnBhy9",
  "key43": "7SrxamB3D81BZNce2NwKwpJdcbu9MPHrM82YZMvw8X7JbNFWnNyK4xuoNWCtt7mWFQQakv2v184GSmbm7dkC8JD",
  "key44": "JjxAsXwvBE9jjgctZGYMTwXnfzuocEJBC3kxb5YxjaGpVoEdkv8j2h36AZSfwvcHbhhjEHcnnLEUbmnL4zQsMMK",
  "key45": "3suYxGzZKLetriQbQ2CSAn162AeZmcjDmRX9yQTw5UNqHz8XRPDYBwoVYZBcKZGu1F5fvmEfmjWgoxstvfmBzqxD",
  "key46": "6a2SnPxgGQNBivBgcnRPg1UVYUoegELTXNM21JxfeZJ3KDY5rBkMY5HfrWJ9zDC1dK9kQBihgBJGt1UGjJrcPYp",
  "key47": "bFWpE5XdP5yuHJZciFEZaE5UmtbdK529GgfX3Snefv8DbcvZdNzzcatemnfEBoAYdmrUgrr4CxfX6wDhbLuWXwd",
  "key48": "4Ebiw5mmRGLTe7HjVEnoFmgrjj71rQiLE2WRs1t19iZRxMUwbBN5U9rAt9vQhDXC6mJar8VA9ACRj8jpmPQsGsGN",
  "key49": "4ML2yCwZS6EJv7UEQyjDLDkmB9xRvtJjXaTGvezVJSage1yDfACRzMKRDWg5KxcwRHysn6oExyN2yQbCwECG3vxV"
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
