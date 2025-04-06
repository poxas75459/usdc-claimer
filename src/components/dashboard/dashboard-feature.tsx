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
    "5UKKs4wRrS4Ye5vvbvYkPxMiMW8NZxN4ryfp8oDGkETt13ub5uPLA842TWiC4UmLu6j3sm5zMhHPh7DqXdmvGCrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hJKa5MfXo3vDc6WBPXgucxELHpm5jYB9ac6zVbrtHKCRxppGovcwch5bbtdvCviWDPwwmXCvMy8EYYiTgqWFTGX",
  "key1": "5oQJYcUKERpSGENuZg5eDLQA5z9MxdACBw74fJiC32dtyrHykezqrwJuF8mKjiP7TUk6Je7QRsMzmXXivnhTqxE",
  "key2": "4e1ZcUobBACMzQYhPtEPbYSJybwj7P9NiYXH6kfyGvJ9FDibsTiEgnsFYuFqWVMVDJ8L72iQLy257FrhHCJPmezr",
  "key3": "4yzjpo84i7iKG3McuDr9ThmNXTowDfWTHdnMXnTRhTw6Vqz7yQg4gtUsnpdLQ8ftfdywT4Gn8NeMDd5rEmcRUGLX",
  "key4": "5C8rjXHRBEBdxeHRVtesxHk72tsJ68Lym6wxa5s4LKNSE48qSBqKaV8g5t3qWg6EXX7FT5qvknSB54n77QXk1mPZ",
  "key5": "4dBmGXn1qihzB5t4gu7AWD1J1bbMcJfYBbHSo7CR63UY2ZaMt1zbfVAe4A6tt5jk4vYBwPY2aT2fdJE4L2z5oBKH",
  "key6": "21n5vZ9LwQF6U73gCQw2oYgCdjKoGB5YxpCB2SxKyuDdKwz5y7D4jqg6dwzCCvnwe8xAUWMvbcgXZS12W7UW8NCc",
  "key7": "wZbYhew1cFrDgTEZ6Fk4fgFydtGQAyCzVXgxQYsiDwtXawgkCJapAEJTXZE5U7nAyQZBDMrAtSD1Z3trJ7r3fKK",
  "key8": "3dHHHWtDyqKUAD9iNuajS7b4hRrEkMAESSc7wjv9pxtc1gjShHnTwHtumQqTsF4EsG3Nth9YRX4LcSDssSWHxi3d",
  "key9": "eRzA76EW3HbugimZo9GLP4zy7wmaUW2NS5Gd4nPq1W1CxPw3cayVU2TPN9CbX6Ko8Bd7w2ssSSHsCp526Jx1x9S",
  "key10": "4gChWEfxmYwakv4Nh7jdLebEvwrNbCvEjFwrZXJBGp2vbDNsMmVW69ops1FTCHwkEGbd5pQj9HTqfhYvqbCY9dZp",
  "key11": "MZPz6VHMSBg9DdyDYaWh9LNdRXvgCQwuTkaLXgY6sZcjeQHX9cPVRsrX3o8UvUH1eAjiWCrwWntbU3haNR8yEri",
  "key12": "5pZGCcEPHpzgh7Gt8xkuf3DZeEpRqNsKtWpF3gMGxPu7J2jbbUAn8xdk7uLQWzEjNcTnxEhPctdU7gVxdNxUDAW2",
  "key13": "2iCPNWY5B1nc9LyxGMiTTAY4KKgyoKiMMCAXXwr5eCPs6SkHmWpHkooK2oZyYXE9pgCpkFeBqDqQcujnrzEieGem",
  "key14": "5xMPggjXexCXRy6SLnv6dFTZXB2jyfVWhzg2NKvwMSaMsAeSH3Jf6gByx13EQCdfTtjuUNa7URhEuEduu5BuuHwT",
  "key15": "xaLhaZTXFWr1McV6dxgRYDER6bTt5tZLkdaj1Vqf2VTVitsXrHPaKhKd6wTJZcAe4JnCzZoppbgwhSYgCMEFjBe",
  "key16": "2oWDjZjpGUczYd6sQn22Gxw9LU2TH4qXGY8wev1sNnqx64RB84kX7imjhFBFwjH7WriX1Jgx6np8QREZdoxANjUe",
  "key17": "5CCAXCLhM4eaxw5vMdzDSJWt6Nv77u12R3DfNsFJkHbzK114AeNZ2zmn4yNXLfVX38WTXqfRRwYQfAff2kiMjCL3",
  "key18": "4PppPA9e5bPksVLESJryQx8y7tiJw5AtW3itYKqz57ZXnqGDZ9ausn6ZaJVqmWRdsCeUykF6agpKFyzhSzZ4e3Qw",
  "key19": "2vPkX3MDJeHHD1jTM2SeexbMiNbJuZ8n8qkSyoX4PBsFF4CZibxGyjAf1AterZGB4jKikQiHiypUvSwUFzCYTcyj",
  "key20": "tRgVtW1gibtfbpq1ALuwvBCRvbiDmzttFzSYPH8Fxiqp1eC2mt9r1uxhR478d91wUUELV14trw2iVZRBNNfwCXU",
  "key21": "3MkLMbAsRm2s5LCyFEABro7kCHDWKNn1VwXoVZdRCKbSrsjdYAVdSvueY3Y2JoBXgAayqXr3nQgAdAW5jzdFBSsB",
  "key22": "4AjCWcfL7MaWqawgjuLfLiDZT64crxKfkFrRA3w6MHg49DE75tzLaeK49Db3XcsfuHr7p5XwYCz5rVwzq4twfVUw",
  "key23": "Z7vT5FjgLrhH6Sxdf9KMVa4LyGpXoLVYkS9hkLMTU87JtjxaT7WqK1QuyxpkYBs8VHzgQcQwh3ap1upTFZUDj5n",
  "key24": "5hoSrSDA9c1zHYP3ZHUqHfQATpEwLar7xPrqRfMeEXfBZcSLNzgD72W5w78SwM4B5CVKjjyhux4oPhzwMHJ5rcwk",
  "key25": "44NojD1RN7qhEcwUtaYgXNpA6kw2aNtuWFHFPjLZ7Ye4jJyPn9iSDSbE6kwftULQHoTdAeBxjtpCdNvAQ4qSTmQu",
  "key26": "2K7vjn3FXppAPa2Tf5EUtPbR9aDW2pyrwJnKQcEkga1aHEA1LqANFFyWWXhFhRo1EPrxEVDDHh13bs5wVzjAkHP3",
  "key27": "3ebMKh8sSqauixKf5DUHfqYx1ebAMRLh2477hqq35Zjj8Dv1b9fW1wEha3x2b9ZQm7FAXTPALZAhv6F6nJzMtR99",
  "key28": "4WG2pGSEnLTBrhCVsFxKovSuRTcWK538tcda9vZDt6P3u77bSgnVyRprqCmAu221z6Rx3L2pyqfDoWk3L2MjmE51",
  "key29": "61QH1gxpVPmVDS8dfeS7K4xx2ceZoEc6BPzZTMEfXrLefaxNyiBVXL62pUy68pe85faPQuiAfVMUGETe2uVPqU8C",
  "key30": "2S4MZkojYk9KdU3BygkudV4rX1UeXbPfsB1vUnkJAr73TsLQXfhhiiDhQxa1sSwGhBPUf4htPxiRiasxEqUeF79g",
  "key31": "FqBNzA9cpLmmSsZeLPmWAfaqGfjZ52VRUSTCb3ra7YzTSMAWTwYthsjGv3vrB28m46RSfAXqpHTwKp11SmhYGLY",
  "key32": "2CcTzzegUAmGXnuDYTbWdHwk3wjgwu4p1sRMTaCRSqx2o3e4uFQGcHBW2xwPZ5iQrRCNKmpjyZiRTRLrj3oy1Cgu",
  "key33": "2QS68Zxs3cKQhpGv7d23PmzwjD472qee3uNmPuJEWRUjdwScCCBoVx1NMQzzJs48bfsJbtkn1cfm6G3NACnVqChm",
  "key34": "2icXZqoEML78N93wrAcMERRgRvgjivAY8hBqdk34Y2EYYS4egjGnXJMEHeYjNLwwjPpNvSp9HsKbbaoGtkjf5u3r",
  "key35": "22SZNSsAtPA6Zwztut6fD3pzf8cawi1pVpVfGHaEJeSHzaR3sJabW4UsjGq27N9mh1WV3xJSPojuiv5tU92GyyPw",
  "key36": "4HBSH8PMTjz8pgdZJUmGkqp8w9VBGfLf2RKAr79JPp11JJJXHEQ5YiCxMQ7bwkMfnwVyq8tGAdy9XK62qmGTHJUz",
  "key37": "28EMtvfHMcoWWRyZJyu3TwKf8q6ouT8cDS6T9L641uHF4ibH49LsszmCRwGEQxqnfcNhjRGboiXzqLdLtPY5cuHW",
  "key38": "5aQ481s22bdUz94hC3wELoJPydnmV58ge33Yh53TyGp3wvYqK7b5TCW1nGLyRiCeboCZYnDm9pesLcfqqZcZPNj5",
  "key39": "5saNP3uQaz95jEiGtatBtxBye2kSLMSgBMtqBKckfHAtHmzcMoQpB3mYnWUocELv9uMXWnSr95Cm8ysFRS4TbCBX",
  "key40": "4p3ZKjGMvpEFNvFa1XdJU6ZKwKH6jtY6Y3pHm5GtmFE74Mwho9QF6HgjYzSBE1KYuDh4ToEGM5hZ2dxCv5bRh5EN",
  "key41": "4saRYPJ2FD2cCcgcFTVYX1YRzYFX1JyFBEYboiD586ebFTbAqeb3Z6fjPLXKDNub5n2Fzh82crknRjadm7u6iSuw",
  "key42": "stAy1FtXLvVyjtiYogvDDpdM5oDbC8TwDro3DpDgA2uusFAPQXx5cNfuBi9DE975HkC3GRGEhqPDXK6y6yqP9c8",
  "key43": "3ys4gYfaVUMGbbBFFL9xGVgy8TpVLeJGvUrbpkusTYuk6kgtaFf2V25iz54FkabPCHr1qKyNtMW2Xp4DsnfYEzhx"
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
