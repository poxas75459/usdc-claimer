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
    "4M6hnsWoisPCiiyuzwJkzToWcrk3aL3YN4h4FKZzsUhQvCMTZygE2oiQgvotsjJBcKPFtzbCxSeSg4PKPJafVt3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MrqV6uQADzDpa8dVKhX4f1sCYgYWJpP238QxQ5iMF8CrQsvKD4bAcb3zGEa49Ae1k3kRrzqbTQBu1mCLwsoQ4DY",
  "key1": "5V5sZk9vj25XKtsmVaBYF4UeFWtqS3mkWj22aHZFEZbmMDYmKEzDkPMBKJZPdeu2pUbZMMB8nyLtvTt3zxA689Pt",
  "key2": "5Xy2qJRoD3sTmfC4U4UeMwfV8EjWumaXrwkc8eC6PHHdcPgphUJt5M8tsMDt5DKKPzpjQhAJZJxWhb6dbBjyzAAZ",
  "key3": "3D5QxPah7AwyKVe38aCKAHXiSbCQ7DXRAGUpcNQp9WDSJjaAmnpe6PmNBSxoQX8orAcRtCj1mDxioPXazLgeGPBG",
  "key4": "3EhguxFK9EAwaZAzhpcUbggxmJUvb8ymYbrCfTg9SbG2Jf9S9goZNptyFwM2qVAPmZdnz3Rt4C2NoBcrJTmGwnNZ",
  "key5": "2SsG6q18qcjojyiJYwYHtWr8XhrM57K5CCg47hvEo2f8qGB19zcTMbANKGWMjUZfiaMMPbLaVk93tDoDMGdktJF3",
  "key6": "25pCDq7VTXrhhXcuzTYCinNcvCZnhiCKbc6fjJnUdo56U4TkB1qon2yxf1R1FXqwbRZ1A6Hpu4a9k98wuGQCtsyk",
  "key7": "4er9kAVoc9s525iRKNEdHR2h3H527ER5yXCArxjdz9TUFuoW9oLEQfreH8XyX4x2XMdgnhYZDSGXKsgJz2fn9Uyt",
  "key8": "5tdMAhAb7ryyYuzeMDptTik2JRBRn4iYxvsZTAswHFuyHqiwS5o72tEwah2m9TTTNNQZGHVhWjqYyyVpSkc6QKum",
  "key9": "23DYZBCxFPiUMB88nKAQKgbggAM4CJz7WmnpTDJ7GftVgowcRsXirSMUJkQCFPY42z7nNJY2c9S973mSCALm7B4o",
  "key10": "qi2yMjazywKtFa6oN7ydo3FyFjgzVx4gCS1hDZGXDEgCpRmpkVvVmqeGRMn86pyVoPiVpjGrAnA6SK9DJjx3Nia",
  "key11": "Jvrkzs2MdrHNTVoE9uaGqHceSbpArYMNC3fxG9dd2L9wk3Dmo7p5hT6kEx1rHfB6dbeB7iCUkuMJ82S3upiYy2z",
  "key12": "3kqATy5BzrUVR2YdLjooyWASe5CG1AqvuggYWDGoTqTxCU5Hhu8kHgL2E3Ntvv7gAY9nKhj6YUAVWrCsWM8X7hGB",
  "key13": "2ys7XphPYTrJCfTvVnn6NE2pQYQxehiwhz3uU46jcumxwELbzrC4TgihYR5dRGwLRHx2bAKEHbVGcmW5cd59bSCW",
  "key14": "39ECVB9Kp3Sywqf7CDhsKDS72ULgJZ6u9P2iBU7nHBNTLv7g77pPMzT4NUj5UCLGoQwv3srPFui87Stt4saRsjJe",
  "key15": "5M3ta7S2hLQQB54D4SZFuZGkQgLszazx7J5TZ3Uvqg8yAy7wi5oLoS8hJEsNJqzZ6cAqJHNGgspjygYXQWsiZWx1",
  "key16": "CYUZ29CDZUj39qZSzGCneoADgwazn7YQync1HPabr5dewyVgug9JMtBnTeQ4bEN2L6Mfz232Zo9xBXv19KZHENh",
  "key17": "3GY3mL3QeX2bYoV7kVZGGMX4VUQnNwjkNtRkCVPJrRhoid3GNmHnVeizKhvFA7aHrtfmAwtBG5qBz79LnRx2GvAi",
  "key18": "5rBj3EyLJSLMMCRXCkm2Atzf8wvNLk7JM7b6nSgrJkNaZrmbMbFBtJXwyEV6hVLUeRKYBiBfVPEcijLfW1d6bhZb",
  "key19": "g3me5BSsU63rRNEyNWVXyTLzeFDSkj19D4mfkRBd7p7NbXWPPiWrnHx52qsXSVAQ1GwfZ1pEtyMMN3RAanBE9Fg",
  "key20": "2R3qVbMLESj2XeiHK4eUJS5ZyuqHneC9n9ptfDEck2YSgYqVizLEgtCGQxKTXkkRyyRRBRG2QnkFMehoe3TRbLcc",
  "key21": "2pN8bNjPgbVipPs3khyHcYW2XLty2c8b1xMq4ruN5sb2zDU8rLm6rFXnG9v2p7WNSX9ZzsJpabpGxZybu5uEWxRe",
  "key22": "4TA8MNZdHhLMkTMntxZAxPDrqANcuHV2ymXhHfTjrwp8XEEttikHVts1iBwGGSqoD4xDfBUNtkQGFC7gsDkkppHH",
  "key23": "5ozXVtjrM4ktH1ozgpP7HQyUq886BKUVSnkxjhnLszMEK85ie2wxPAU3rxoGtHvJ3gRaYABj21j1wbne37XwtM3R",
  "key24": "5TZrzekbQLQxdVSAzGevaHFy2ymHAKKMtZvcD4BTCbWPA5GsnkiRUTAd9KhNvF7EAdSUeD3t6cu6MFipp1qoxn51",
  "key25": "5anrYrHZehdnrj5rfZG2aBMaG7qEFJLox56cZqqvPWfHe9ivK1HxYLNQucsfVb7PwVjTMYFtkTeDL5b9MUipGAqP",
  "key26": "D6q1AaBdeNbJPeDCD5zhPu1MtTWJZnwXrafwo8np2nPuRsk1y99kHZvHNUpwADygveMHBCAkvTt4wsDYtS2X7i8",
  "key27": "6dCrJgmHsJEX2XQLfWGo2smiNdfk51QBCKXsNHEoNe827sYNKHADMx8QzceVcyDH5zHfvrTyqr1vLEiUGUUzAn1",
  "key28": "vGZkZdP75rCjwhxehBarb5cqzbzY3PwQGMRXBeqAgicbUigXxF1y3Y3MhA2WnMx4xxcZmmDUB7xVL6NUXQWPwfU",
  "key29": "3DnPJ7ieC3PbmgRGfHKHwgehRWGhszXxuvjCw3r3UGrsMLE4BNQcNqV58KLcCNWLCtcVvZ77R6cxiDL8Lk9dU7yA",
  "key30": "64e6SniyzkzkLqxacdegFXvHsjDpMRWPgnLE1spiver5N8LifEd1V1NLMaLfzpAh2ZSskPUhVXvoxtjV7dsVi4Zc",
  "key31": "xFiwjKJSxgej4EEfrf7whuKQa25rPemPDWZsR2XrzQy9safXWRC7WeRkQedQqQY37hgroRzcJps1enDwGYkYuie",
  "key32": "2nt4ZdGcSqRjGcNPC9AApua7rGkWfK9ndrjGd4CEVFgMKfuke8Kmv4cdSqhNjXKPUXaLSHdtsy7Yz1aqFbQ3AYby",
  "key33": "3cXxaBGXq1q8x3QjfifT52qdToXSXUt1RHMqGoQdWFxjE9V3iLSW92stxySvJ8F9bLks6GQ1v3KfjJQALuaDxerF",
  "key34": "2FxZZWqRLBTjpZY2MNKC8Cs7UUJ4Rrj7iUHYAwRQBGsPLv2XpmRkUNYh82JcJhrPBZnetM7gRodWEKHHdRPs2j99",
  "key35": "5nQigwiCG97bZMTbEUYWjzZWHW7Ckj2UmkCeKmwbiDVdWQVBQZNeQnLbUBwRNLcdBFAiU3szFbxs9y7MMxHiFjAU",
  "key36": "u7rTvjEaggvB5vsAfk3ZSvFXndJaVpwmZcXAuZ2LCz8YmRJuuw82wPuKRjDZPKLJeWFxuuVq7NoeuZEzqASTHyf",
  "key37": "3MGW95qegjiYMNeyWFtBNnCrfAfpqSX1XSXdY1R2DgU6MbP1j2xd15ctF9vAWUXCFVxsa2zmweKRQjErQN1Yt1jS",
  "key38": "2maAK5Y1x5r9kuhqw5UD8FS4nJ99MPhHAh6P7oHw6jeRpGEdsa1g2fqC13Xje9sS5HrShWpo1yEEdw42iytX91E",
  "key39": "2g8rZaLLce2YL8pPHSu3YZKe3TpbL64k3qJUC8iVqCutUtoJ62jUuzNCHe2Y5GMoADKMQuuFGaqpGwRprKKJJ7RH",
  "key40": "2f2zK3aq9TCkG5nRkDwfTNcNzMWAknYjC8NSXn6zQxEwEfWJVEtNPjNove5oNcbDjSSZoCCBwjudsiCzMZntm8sd",
  "key41": "25PvQNvi35gbMZtuXR8rqcTTDcTBmUK92otkn7oz8CPWgTxdFMdmnFLzSni17w5WxC6zf6oRewTPGeZLBJS8tvU4",
  "key42": "31GmXRNZKD8AgVqiM4XxCTgcozAAwoZZWPWRRsWBc16NujBRiU9s17bnxYU2oSTcwTHef1rHXLhFZmXFfU8vfvhD",
  "key43": "5GoGjsR8dv3hyzPkUYzVGW3Wynp68aiWoFVZ3BQeanN9twwCDrWzM55Re77RVSTChAgU1o46je9j3gLWkXkVcMRe",
  "key44": "5zbAZDyZNCNxGPJMErwNbVg49GK3fHiepJR7jyLJjGMQksUuhx1RaV6fD5KpyHQLqJY7o3A2Mi84vqgbFKn8LMx3"
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
