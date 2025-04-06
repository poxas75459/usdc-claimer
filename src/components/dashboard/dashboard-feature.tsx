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
    "3pAK4FLTjECA7eozgevUCBztrLMbUnnSyin6cApJsHN5m4U9NJ9uowB76QqgAvZCZoLhy43dXpBbB3z2Khs2yuZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DxXLAhe5YZsPd5hBX3a19HASRt2e7aM1zLbLBqinoxW4B5vkjnCpgPsSfMpSXNZH6jq21sUmdBTrPMgNYpLijbK",
  "key1": "3T1PQziDQnzUGmW4Y2kj76inCkeqACgQCPGiAACoP3zzQhEXGV2UCfrxLRsQapNnbzg5UbZWaScGsFFLaht8T6KK",
  "key2": "5UGaQSf3HiEvfGXYYAk36t5rCYSHHnXnKCSYqiNq4SvqbFA2gvsqXqrwyY2emz7yD8j65kSncKTrb2JtvJrrskLb",
  "key3": "3oxfprcwAoJGofDkFiT2F4bYTqSEyAT3eQAhZEpUUUUQy6rX6E4CnNQFz2J3368zZ8BJsiT9EPaKdayF9UB7zo53",
  "key4": "2qbbYjG1o4FZvTWM2wjZT3EkSJ6xnCHToRfmL7Nw5uiHTQDcwBwT7D3Bh3WNo5FNL9gXseRpqnRF3Jdp84S2sUa5",
  "key5": "5CnAtWzzhpux2ia31N1SbhKFA2Hi7GziUQf3xd4yAfMTNG7RmXx6qKdJrm1n6yLqUu5XoHyyKydMThpQ95SRSgvL",
  "key6": "5qJNyvFxHcGf1XDFxj5ExM2irrRqCMKHDAELrr4wdC6Auyku74KFzBo7hXkZh16T7dWnwppo9As8ie3ADvWznmBJ",
  "key7": "5wPtcknQ56fQqPbDGiP4cNZ456PfvBZUAjPyn7EoL1HhdHJjdop6R6UYTYJSpWqZR21hM64ZkjeuNi4wbpBJSAi9",
  "key8": "2JEMMJFkTz1QPKU4fkmmNCkK1xTGMrR6e185wEvb8YxkZkRmPcXy44yv2N8rTpbVDP5kMowWaxdxnCG8FFYrETRH",
  "key9": "4QESC3FuW1tXxmjAToP1RTiwoxZE1gAV1jxQgsxjQ3CnCzsKEugBnZE6JAQLnjD63wCsrQ4vc39Kz6PtfH8mfrB4",
  "key10": "mhg1ZxQ4ePVrVYUQ4MLw4oXsm8tJFzfhnbpFm4RhUw4KtPUhKS34JjFKqm26x5QwdiUqbi1ksgiatZbDZk5Cxqf",
  "key11": "5AL1YyeF9TzERE4jKJjngs6wjYTcfrxbv5bZhggpcKLwPhGhw4FTCAfmYFT5NrW2m2MyryDkNqT39sFpRMfTihiD",
  "key12": "3iMgdYgE1pXCcHJHhA4zojcQjm3aVGhHWouYnxCkbXW9w6aP22wF3zVxKLwh6pLKguw2hWnfTrDeiBZe4MG2pqzo",
  "key13": "2v8gVo92Ke2J8YzNew2tj79W3FMWPYLUycqshRpg3kmAmSBGsoiEdXxLSBFWCYDh8F7gDM9QaMg1hYF4X85Fx4KS",
  "key14": "4uDhkm4vZV4rnRvenwmRawrAjz5bUauquP54mEhGnQuddy45T1nDA7E2vocRV2BorVcEjW7CY4kGR2rqLw7XAG9W",
  "key15": "2jnUhpvNdpiY9GfdmkxoGcM2Ukh1nMCNhUyDCa69av1hs2Lkks3FBWEGgPnNmzx3NoZ1BwJscZxBVusM8iC2EPSR",
  "key16": "bVayc1UZsR7X4rMct6EN9P1YK5kHajiMmkLytnEUZcLwqUWQtVN84PFGvz9KXCCc6yswwwnAxJoYKuLdxqFU1dy",
  "key17": "5ZEKk6hr3FULGfpccmPodRQrMK2sSHBGzEARx4ktXSACvMco1LRKa7VHUCPcr8F671rMeJJDfLRGtzxoXxZV8a5p",
  "key18": "4oNrDnG8ZNKKo4PWGazXM7ddsgamdCyh8qforrg1oXFwANmP8ysahpKqT7Xb69CmnNxAUGn2ndWczTGdYzqomcTB",
  "key19": "3KswdpBw8AE2zSHwaWh6QSGfMd9uWdA2Z89KxAuXXow6QN5LLQViF545cM2qPy5oY29zCzQkMLx4B734Hb16iYEz",
  "key20": "kwiu3txrcZMWjan24TVozXPFgp83ofm8kytLoiVnESG9nxMpdcumhkKVQBoAtubmDm2oVujBmrVmbJdmwpVi2PJ",
  "key21": "539avLfWTj7Y22dUcq8MgKoZWikf4mdu2Wv1o2EzkdDSvQuHvCMqyq73RniKqNDbEhg3GfXKdvvAWctUqooL8KGf",
  "key22": "62idwBpBVUTfUhYUcpZj54UgQZa5ArbTLnFWWvC72Kyn9hqTvVWSJxxyKkvF5v8GHBKGSnZjoXi9QAG3mfwKLfGU",
  "key23": "3LSCqZSBDWUVG65zsMQH5LVuceCtZSm3g6HTicZUtAyfFB6r7iAmTXKX7gGqJ1CibgLuF1fpJdbJTkoFRYA3hVWH",
  "key24": "4j7sUpSF3ciPKysaNcV9mvs5TJqmw6wxK6N5yYkGT7eWUxZLCyyLb4JZrJj7wrbGUjByH7AW9BF42je9gvfWmCdN",
  "key25": "e2bSLyjMFYK4owSRs9thbiE7VySSHuJiHUBezpouxWees64xLPxQx91zQLpAK5iuGLZXYVLCD16fVoHdvq47Lye",
  "key26": "26ec9kkoobUQUYFBXM8pg6eSS2Cg5Cvm84jSYT7vjtawNEJZ6z4AVzpXP8mqkhsxaX8j7ZKCiF8TbdvkgdmvtrSX",
  "key27": "3MnRboWoojgQXAU2ERvzCgWQsP4Qyt48d14dCRaDLF2xDYS9ZxvjNydmUN7oNRojwnhBJNada9SRgFdLt79wB9ey",
  "key28": "3nnqbWLqbt6W8zJirFbz1ign9Z6Fea1MVA8cmZJuzSicMqvLAJjiA3YGdotwP1e1FXBcL16697KAz995e9DjFjgH",
  "key29": "65E2eYYnMZjXpTM7Vv1B1bCpo8rS1B2zL2TgWMt1Sfe3MqCnxcwXGmCpycMaFF2UFFvZ6LjArboknMdP7m8DEzHt",
  "key30": "51kxPqP99YdPEjnAVAToSrm63ZjHxLZd3MhwUncGSDFXWoHJS7qVS7WeRbaeEspoxSxKkxutBWXZ1f7Vvt9nDXrb",
  "key31": "3L4zTqHKHSD3ZwKPZTNGy9ph4QANZfy3brqKFSTetxKUDRVHb7kFFEeTMWEdmgDELeE8JbHfcjv4mC2aVgTo37VP",
  "key32": "46ZJuN44ejceLz66sPoSMGukdcSc6hTmaCSJGUymbHpLSSxk5j8rWimAy83R73DGECto4hjBwUfjmBrEnsa5emQu",
  "key33": "5AWbcMdvVP6gHcbVWwMz3Y4fzNdbigenEpXb2ThF7xEaF8M9pTWsmtRFqzmGWUqpJqspHjLa5aPZdQR5ou5xbYrm",
  "key34": "3WZu48dMeXQbFwydotT7ey9QF9y12omvZQU9dMhkv3WZmFadpQhwLnoJEWi6WaFknio1MC3hUnK4fyynkJstVymX",
  "key35": "vZnMp783ismV5SJwihkax3kutWzCPd7AxptWjcsCQsY9iLsJQr9owLC4H8uTuw1zUndNu1T3SSQ1zVsCPSjAGK7",
  "key36": "5dLJjxNtJbXMNPZ9gwN58qP6yhMEVNP2sm3VTcuXKrbsUEe1nSNRRBHWW6ZgabfZPPM13FKzPTNUSBhpTi1g4g9K",
  "key37": "3yhAgsTHgUg3x8s5PeTbgB8zwP6jqRD5RiHSDCBKA8xELKGWRSm9c121AAKK6Hn3unFzZ2qFWtpDzjVt1cD8ssMQ",
  "key38": "63Ebkha8iYcytGRtJfgj9eovyiqoTEFuW1GUWmDBYWJFsa7tXkakwGAJC3RyT4eoNkGwm8BLqBsCc2owUV7rcTYo",
  "key39": "3UqUf348AfTBY7Sz34NENtHvQsjnhoyXjMf7XbDkXMBqXaxKaap4xz56YubPsHrbBSp4TxxYDjfnGukPSh8ckAeu",
  "key40": "5PLSTbGwtDvnuL7ugHac5qkFCSU9xVR4VhPdQCGEwrZE3azKVkGj6Sm4HY51J9nj92sn4mSoXa4ABGW5ZNcbdGnw",
  "key41": "3ZjCbHdDSA65XGpoPrYVNV2NVbQMTeSPphURZDKCBoBU1gNHe9rGeRjUEowEdo9xMf2X63YU7BMQWVptZXR2kfDf",
  "key42": "yafCrR4iCJn6YFUqeTTKakkAs8x6E2tQjAyionEzwYcAGnPsKHdHsZ2vMMfHPRP5BaESHYZRTjCRTTqq2m7LJ4v",
  "key43": "63RKa5TRtsR2iXGkzfwEGcgxoP8Ncoa8jpq4YSgMVyTbmQqSrsfjvCyrtGASEqjgqBsnKLE8qi1ZQp1kgQoyxvXv",
  "key44": "4Fa7XeNC9YSYcw5RYDrhYcycvf7XV65jMz982iNQJ1BkC3SQyZN3svpXho94Pa9bULeg2tk8TyVvYAX2f9xTwEA5",
  "key45": "31YvzznuRBSLTvEc8qUNsFkqNHcNNFpKJboUHnbSYHi9QDB1VoAmYmQDGMtPRqwqowa6ETgCmAfL3ThHiAZ3nNvV",
  "key46": "49UPTj5xJwio8PkVcBfHLdzR2PnQFfJyYuMtn7cjXFYH7QE6o8ZE76fnnuru792qZ5QWS2grttB2gZtBGJAx7g4Q",
  "key47": "58SaDAbEAu5mzroo4PzcvuTdt19VYkGNdpKBMDG87afs7QsUbNDFkCpqiWe3dAXaMnJXt3LoM1YhaZtSudq5X3bZ",
  "key48": "2sJaSaTFPq2xZWLguL4Sg6BQbU2WcV4aLFWXyimZmLyYEVNQ8J5yp6cukBE6ebwZHNL1z6qSMtU1zR9i5Cyv4HRb",
  "key49": "YHGE8ceVtsgABAL6J429aY1WhbHWhLEUC722MsxnuLo9B4ZqRpqz8FmjwZb7MdttbHmEGgKxznAiRwgKzuZxL5j"
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
