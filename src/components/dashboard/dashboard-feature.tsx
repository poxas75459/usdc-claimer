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
    "2zhSffYPFcWaKmADpBzCypHom7quTno72mztgvUJiPGUkTfpogYX6s8AftbX7mv7XiZRpjjBWTvKFHM1CSiqRiNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NT94yUVHqtuu6KKgEhWA2Jk9e6dyviXwWRB9zX5u7hmSiHXJeD36W8qhjkC7CPLM6Dtgxhz1pFgB86wq7P2rUpU",
  "key1": "38iknWSv1GKZgFHSWZCx9wtr4wHxCsMdM5dyJZGfo3vjh2xsjqvD9UxEpFC7WCjD4DntVHDTtvQrvK1U9Lx4dg9j",
  "key2": "AiN8hs38gHG9vzuRkX4eUXcQSHgbuJ4Uyj59EfL41Wc5LtHGLuJ6MEwjMCfyrmNdyxjzgK6qzQnHivN99ydUWpS",
  "key3": "4zkL7RYRRaoxUN74c2GGTYoRvYtz64sZQ7KBAtxRtmYhGE1GPAsoBPHyaYijuZ9zYAXxHy1zYVsPXF4x2UN5cvTz",
  "key4": "2fxzY53hr4HEuQbwQhMoWKnoY2FzT3sBQHTgLSUVYXqmHZ5CXKUJtwoPmumnTtzn1bMsoMc9Jqr5pL4pz6FUMMZx",
  "key5": "26wpsXDPqwok3u3813ppyfcvN8ZM9EkdXGdhWHnBU8DX3Gkjy1FVr7QPfQzfPpSYERyCPPGmmh84SiHoz4FPVr1e",
  "key6": "5MLkXZ7iAt8ftd6LkM2QWtf7QSuGo33s6grq9AVUdhQbM9zBrXb758ccPQXvCGegNJye3Wu85comKdyXz6Zwyjcs",
  "key7": "5tPebzaz9ghuC2ptD2RhmMH4izKQvL6meUzJRezpg3rfC857YPqTvLqS9uS4sK4tzapNBGVThjNgjpHbvtcJGvfk",
  "key8": "55jhcvuxCbUZac9iA9UdKDgWL3YDAcWtrT9qTuR8avxjm1a2n6kEL32icyDfFwKExBHjDH46wgiuhH2NuD8XN6E1",
  "key9": "4BcSDK6aasrLWYVFyYY1ocHK2PkK5qYSbt5vukcDDJcWgPTaT2EAyQaRdogxsZ9qmXEeCWLyX1Rxyd97CtTahbQx",
  "key10": "49iw9pDkAMmjrZ8SuRt28nrggPUZshxC1U8prNJx1JsMrSwknqkRZuiLLRNLs2Ncb4La1dZK8fHdXvv4b9Lzd7XN",
  "key11": "5PQkKsZbTrbhuEnikPukjMsGgiNuHahGXPAuCyvRtoBm3ePbHTmGK3qZFh9VthJuKxiAMz3xyHKC83vAt6zLBx5m",
  "key12": "2rk3BBBqoMaFCE1HekBezwDTYEYMnF1nPJtLLk1F3ge3N9Ri9UxpR9SKJqdaV7XnL6bHYMAGvqZh3FJdTScu63Kj",
  "key13": "614phGWDxP9TgHjy9fH8UArmdxYwrN3V3aWXEie3zrwLmG32JdtwG4hAKLJ74qugF2BUBYPtp3NWLNmqfLUu1wVn",
  "key14": "3iA95vMtcxsWLmTmmRhov33jAhVjrBKB2gaP8obHt2er9dR8QG1Sf8yZyYGmQwQpMckJ9rw2uCkCUPYGLwBPJbtL",
  "key15": "2mtXdh55tRbTyWa6Gt6q1VsjKfWFC5f1XYD7koGkkbhiD8anRHPyhwo6B4qd2FV6epZ3ZYScTkh6PPd8zeZFbiid",
  "key16": "hNAtBzYFMLrhKY8dQ3txCAuaemdSTgqDQd1yZjbcN3cRBdHinnADtfJzxY1hHAhmfM9hUeRjYpnA2ca8BNmemHz",
  "key17": "245R4xX5wcN6dtuyMYzE2dEXpHRpsH5JGrgq7VB5j6JkUVGvEnCKx43GNiKoAbLKaorMG8FFRz1YcXcrQjUT6Czo",
  "key18": "28GBntSZqC6WPkTigy6zQxYTqiXENMoAYCcjJ5k82XXuD2kngHZpF6EEyJFFWJZyYeq2hPwZb7pmMHyymybyCox8",
  "key19": "4mwkHovU2kGPr1c3p5ccrNve8uMmA32EGnJccRq4it7iFutSgotFxm7DFWcBqgDmsvAJYjLiG58EwqpjVhcJJWPB",
  "key20": "2LyPDsR3SJwAfPtYwEmmNPC5U918nNeRp6zDM6ufU18CNEPbGFC9yDwBGypDLTWgNp8dvDErV6yKynoxCj3H6P9k",
  "key21": "Qt83BHddoo4BxdC8UPSguY67sQuXhf2jzWnHyQ2G25TJspV46duGYvi6k4qTVFXwRdt65uRgywRYyLWMCukdmTG",
  "key22": "Fo4MD2XvsapRmSseUJwQBbFBA2BEtB26QqVMkYCQUqSTkd9GkFhqiSZPqvFMgnFMjgyWj1rEW2qLosuz3X8JUpG",
  "key23": "4Bck2TMZhDx4GDcQ95vjmemRaLXDyULNMXfFt864UZYmhjb8HntRC4h6cE9aqpApaHSmw5acgHiW7wJ7r2LmN6ZN",
  "key24": "5rrUs6YW6W7NbiniCaoNcs4YP5Qx2EdmD1GNj17xFTMiKE2RbkEJ42coUbZBAM6Q9qUKSZNJZA1EzE1K4StqKyFE",
  "key25": "8DKkhX8f9ooU9gWaeq68NLhRfoTrMovFcdnnieKtrDYD3CDfW3p5yfE8kdsZxQ94AND1aMVw3a73UbUrQb5LLhN",
  "key26": "w5QitaboNxAep97GAgBUCDoD44tt6ZgWKqGJ1yBhjgZrvkiHus38uUtEpknua5sPPBJSLUvaE8M4QGquKTBBg6J",
  "key27": "3EfcF98k4AQRyqSdGG3NQm4mihEwH4ertMeDQT2V4JYH2EVrcJePbHGkztAF6JUks78AS5RLfGM7KiQjmmXkski6",
  "key28": "62UBNST8iWf7fhX4JnFs4qim6sYQ57DRsj6LD8Eabc6rMpVVZKRtynZS6eSGTKeu3rt5uvK7ubaZLsnZw5zYrsgS",
  "key29": "5GBoS8Nzt7Fni2bKLtWt5DZi2Eq3oWPuroYh4KHK4mxWKuxNdJo5tW5KrfDdgnbxZSJRWttkTmL8jXn6teWRtn5t",
  "key30": "SZugX4U2DL2TtAkKD2M2PWE7BmetoFoXqryq5wZUCuFExeGAKay4gby7xTSwhRfRU265gmbGAPdLa6jKcU8xpkW",
  "key31": "5KwmgH5QMtKETRcUJmVHcozUwX6xFRFSUSwW2JsW6PTJ5P4ASQ4WJ7XzkFG4pCbUAQpR8H3oLdZd2zKwFdnDfXVZ",
  "key32": "4fFHFzfyeuhUQ58TFDuRWsZzw9d5HBbxxzhdVJrwB4s6dwY3U3o4VaTEzCrK9NJk37XeGuQBxEMqui8eq41USi2R",
  "key33": "38QoArWnErQ9WuEWm2v9vLf2kFNMuNMELo7wR1AfV5eJcjdYQ1t7UuFK5b67HYmeJ2DFMdoLfVj1t7vZo2cXrjos",
  "key34": "55bVGbcaxVjES6CskVC2ooBoxd1X5tTQqrBxYcda89F1udQNkEhXDxYk6487taWseY27YEYpvDgSTGLnRSTLGL2k",
  "key35": "3HuzZDarQwuVr98UtmaUVpMu6nc5JbC9NYvGmPsTFABDXGaB3ckkvSfAfqkYMJQmrzcRX2pD8iFLb5AxcDUFmmLn",
  "key36": "2UhcbD9PvY2mwmTR84R68XYDwaQDDjfA3YhWaevD1KC98vHVqaFPZ1WJQ9HK3SZftyeJesft8cUV9yeWqGTr9NBp",
  "key37": "3maSk6mf35WnCiZVGCsfcjp4iiXF7VENp4hm6R3HbcEjBrXqotycA7uYWE4yQXktJTfqWwy3j6pEJN2w86xySt1U",
  "key38": "3L3U9JxaXZeQyaS3kFogSoUnkKLUunaFsqmh7vKmH1PvkuSrBH6hRcnhY5RkpRXmJNcmZpF5WW2vPJMgGwqQxhkJ"
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
