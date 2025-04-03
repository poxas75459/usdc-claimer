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
    "3vJWn89Y89jkTUEARahxcSVcfVU98Vio8i3hbNFFou4cKgcJxxXz27EQAk2DXcMatGp5a8fpsMJymaCqo6sTaiC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NSvKkYdCsVrM26rRipKNh1KPCorNkFmkfKwdDfERwKvnbU12kCUa23aYhhce8oqMTXGmJQEgs8WKzS6ELR4FSm1",
  "key1": "5ZAtPPvrG3ZMUkqPX1BRQHRPePRDRRaNuheZnaWwQeap56N8SQrGKFgETvdBSVENsVDHhQdmBxg1yfuvQNtUqXBw",
  "key2": "64pEEfPtUEXrYfAUhT2n4NB4Ebq4sMqv1qpqR5yegGKmwSBbVkNjB62pWuse8M5kXPhGj3eMnFsJT4VYCgX3iZtv",
  "key3": "4LdSAPardPFuaxBHNyctJ52C8MSbYuEoNVKi6PnmDunpYhxpxJiEECZy2KzW5bfp2UQ6iN3dWhPu8GAc2aRmsRez",
  "key4": "5jJ61d3LCgL7PABZik3APzmmM3dmXtLnBMmUh6Z8TEjH3UobvT2qW36ATewVjpNebfAtBneW4M9hTs43F6oEEoBL",
  "key5": "f7gKkTfsogutiJby3kxvp2e6VvT2Q2pBpASZwAwKQYrkBWwqBs9GKXf17yvJsy3ftdDVPTBQVZJ87767KJXPzbn",
  "key6": "LB4DbTeiVcxcRwG3pg8jzkSYZkw83axZ3nST1XvB4aadMa5s84BQK3CmkYTDhHEZ1GE4nkSCzKpk3K5S6NHV5Mq",
  "key7": "2j4uyDVmeWSJHCFoE3UKYVNLiwM4B3eYdmzFXjSH8wV8P1NpWmLXN8dGitTDn3K6fFcDm8Y4d7s8RP9PDjCesmfc",
  "key8": "2DXz9PeNJBCyKEtfQnabyhua6ESYqhgsaPiYNCsoJG8qH9P2UkfmuGkHgecatBew9FKKb8A9oNN5RaT7E8XByWnq",
  "key9": "2B8FAGu6AY3UkvhtaeRGwBAzoMvXFMTEUGfr4JjijAqtgMbrm8jYWTxBKb7oZUETMV8iHsAFdszAo3iqDLEiV6Bk",
  "key10": "2Hb7dajNPRC1bU3XByCq1LGmn9ETjXRCXM8YVQAxGv5CoWW8uKNBUy5QCuChRCbHeW6mJCzF6ZX3kN6tRxpZNN3N",
  "key11": "5Yi5f6xFPSdLaaRn3UbqFq4552m9hKniNvgrXapd4sRoiAL5MZ2rpj2wuyqTooraFGc1n73Nx8jtC9KfQzr49SB3",
  "key12": "4Ri1JbSDZZqbQbuxwVKTWqmJs1mrJp5b11BiYn1EUhAq74rMWYxLyT4ffDnrtNhCStpaNx51t6fZwH2pjNiwpKp5",
  "key13": "3dKGGirw2Gqc81W4EHkVumPTtb9Xs6nPrB11um5btxsqtk5xUcXnSmwz3AS8fq4TZYyonP1gEye7L8UHujqnUyq9",
  "key14": "UEMHq1KRdKKfJoibuawbFmWyxJV4eaiChpQSdgc8WWd3qqhqd8FUxA3h8ViZAsBHg6ddHn1nidE64vb8YrRpp5a",
  "key15": "254bD67ZjF6sv4WM84HaX3CaQ856SPtaGzJ4qVWyC8x7DD8qji7qmbLj5jxVax2f9q48pZvh36FVBZFbznMWzPzA",
  "key16": "3HZLHmMTbKX6o8pt9fWKPNW8quFLuJv9jw4VaHhAxZmBu2mLw5JnixjNm6ibXVMvMYgV5qSE9bDyaB2AtvvWmxh5",
  "key17": "36HDjB8ByK2ERu74gFfZoya3WkWmKfRvErbsmwRUm8g2yHcJouS5Nx3fSNbpNNVV4MVZguESRzsqQnG9RvLivNbz",
  "key18": "tRDhfj777zAGDpRGfVyEKth7g4tm6aP5nTQEg8kWrv7JsJGCVJLzfrrQFPiwYqe1cs4hRVm9rSytmRzhoN2y497",
  "key19": "bsbzF2TFTc9n2qyet7aXkYztHMtAUHV8XuBap5Q46bE1HMJk75Ged5L4mhstzvjCm1sMDB5A7upCM1ppL3uHt6x",
  "key20": "4ixF2Jxd4x3fvDrDoq197Gvv2rMfZc2rx3Qixf7cebaKEo2qVrDU1s4HW3ALqmsNg8P2RxdhnuQnN2VLVLzNhHLz",
  "key21": "4W1mF7PkKyVs45h95NSJKJieiwzas3AFSjLeTZFgaGnyDxUbDmLeK47LXytAACrvXWRXU3qSWdjyvndS94rix5S5",
  "key22": "3ifzAbekrFixirdYKNz2c9bhvjSGSt8RzLXLsodPouYXisTKpAGYbQ1Qb1r56GkwvvYLQHHvLBnsyymAQbQXf39Q",
  "key23": "61bhQyLXCtuZL4Z82yus4C9NTQP1To2QZMGqYVpXvfdLPZGqCLvSZUQRbRhwfCdMp3Xcz19Tg9UJRW2Pa6qFz4RG",
  "key24": "3GXNqgZLURpGMxUhEPR3Wuf82n6YjuwWkZpv6MaMsmiU6cxzFoiYzYZg8iBEMzqaMBexhkvDADS7UodVEVREkAQ7",
  "key25": "2kT5zWRTjYfcMn5f4J52mKf6Wy2Xogyno5RhJLvwFMg9i5dPGJv7iCnb3BbCUwuZ4yAyjzQ1DxxKXe1c3JRiHHSu",
  "key26": "47oKCh92KCEcsURUDPtsSqdZGFu7bFK6trdb7vTRdwwMmKcfSEkbF2AUNNnTFX93RN4BBSQXc9GX74gzFH17r1gt",
  "key27": "53FNp91tY6QJ9dA7m4P6XtPhkondAG8NU7XtA3nEeFqNCXTLVR5gbPgZCWrADzBdZ4kX9d9CqHwS4UyzRLnzv46q",
  "key28": "4gxeCasAM7gEK9p2tsKotWtgzKc3FPBcCw2Hhq9ybz7VCK6KFGwnsBuxSMy42xLPniBjwGbawb2JxeEcWMgdWeL4",
  "key29": "293BPHUNH2u85WneBXp8v2pkMJtycq4n6XDXc1xcqpW4rtHZRQxfkbuzebJGPLpRZWe4AXNiZ8ceFyVwiVc1SUip",
  "key30": "52FP6SLK86AW5tydWsfGmrEEGD8QdyrgozxUi9koLRJJuiYLrP8CjhcpUjMBPmSWMHCjuojNYdSeS2H5eqaNJEZ9",
  "key31": "3oqnEXgoWjeBN53cHbk3JZhdCSvkAPuvkXcPtha2krSkRdDfvwmYmJ6pA3RXcqz8EjjwFV76gZscDvKz5WvoHyt1",
  "key32": "VSs9kedj3Ewdqo7oZ6sLuWQs7sV8D12215ypAfKubYuhjygsE8kic1NGansuHX1nEF4eFcytifcoAdoTtnwp8Ei",
  "key33": "2v7Mp4hcZ1DpAuECk6GtMDmjqfGi8SyJKc6hFpRGayyNfYpnXZbrVQ6dtWB5XMYg9a3xbQjPCDt9RAY4V6VLUes5",
  "key34": "4Ctd1T9VRgfv3zeTwV69aJubUkBkUx9aKom3Lcfg9pdTgpGyhkfTMwDjC2honifExbkrAc94fQuwcM1zcWDe6abH",
  "key35": "tEYV2bzNZRnLTgx9Z1sATAaPYJ4Ji4eYE75XkpYRAvDvrcSDQYURphWh8yQZJwTvztSnnNxgtN4wx5j7FdZ81NA",
  "key36": "4kx9qzWYmV7mz9KnKmwBcwctvTKh5Uo5fZGQFyHgTo3VKnxnCnTUgesGBEJCXTvSEJ6eCjpSYsn7GtEbgvgKweTH",
  "key37": "4UqkoVA9iQsiSQuYF9e9VierRUupKZxjZeDwfgyQFRKsU6CQK4oajuP7tZpU7yJAGGsWmX2cX1yyTFjWsnTdwzoT",
  "key38": "4uPrtbXBtJ9iprQMGwRnEhcaaQ76o863Fc3G6wvLsdprVkiJxjAmJF2piJ9ncS2EDLTcVktKTP62UxFXX5tEkXzn",
  "key39": "55ddP2YMmdSY8Y8jWssKgyZSCjmbTRXZGx8CH7K6mgnp2KhXLQxceZpuSuQeS5ruFDpb4nkFKzCEJ5vLm9hqnR8M",
  "key40": "eAP2GpWNRxFEQvXcdiEiaqN5tVRp8KWcbzmteNAWYr9SYcain6pLJva9BacftsuB2o9SWsPTFufDHodbJEg4KjY",
  "key41": "62xMFjpXerAkAR2LQoWtpfhenfJb6rYtnP2CTeUwDfUGrMe6EvJHgmo5DAxysKiYWe8sphLhNojyTRXSeVm9U8N1",
  "key42": "2U3DV4ZEb4AWbVSjP2KMaV3XkQ5m6JcoYBkuQfN7ajFGeZbYVXcxiNtjzTExqwsxUnnqS6MTETVfS6Zm2Qv4cM5Z",
  "key43": "oDs64vKu7FzDbDhhiHm4dbqaQgEKn48sqFLFcRbH2VhXiGNLcEmkS65gFBgqU1mFLJkLGLz3fpZ3bcWd1sfTZBT",
  "key44": "2ZS7f2sYJ8eCBmdhRYdCv34BBaRHLLX2HKYsPmvt43bNiq2M5VEiWjKEgVribryYjYwHA4QKXuU6XJA3MD33BpsN",
  "key45": "2EqcybLXN7b4n8tnPo4h3DWD7v2bz9XHNn7Lo3Um3PLMBdqJh7ZjyyPTA5tQYPT3Ei1oRbyCi8N6imbh5T5NCZy7"
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
