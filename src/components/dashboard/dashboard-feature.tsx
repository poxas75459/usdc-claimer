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
    "3qBYEmvfzQjttzbxFnFbzAt4j5yQddm14VHCW3LjWjtmMssE4eNx5GPAMY8JMAyVWhu4P5V3o75D7gh4nvKS9eV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S1g2natSi5NGYrfAjRjGoDPe5LTdyLwthpGPHQ8pZ4KSn17EfKmN6H5TQNAPcv58X8andLjBvqtyr6o2rqd6hme",
  "key1": "mYnd8phRQxrLtG3V3mZ2Cn1B69XFN64cAhj54vuY5J6TFG3zMRnqaeM62w5hCzA8Kt5r7MXLrJSProe1Fzttnrf",
  "key2": "3VLdoEUHZY7BXmwkpPRv9Np7AnHoXZ5wqkuP1eSBhVrhJMc4gFWy1vQ8xbJxuoocdCwnSvpbK9kJyoy11xFGr2fc",
  "key3": "5FDskLC5N8yNKteZMfFarCUgiorbFsnnv4Hq6Xt7d6idqcT2Jm9XHVEeGTUFqSquGpyzywdSz2D8HqFEE8fXtVYb",
  "key4": "2uBWpSzdPRJfrXDc3Je9jYh1XUYMsaMFddxujGzaQqkHpTnEnTMQtfSHZKZHBRb1W3FDRCqBq77tnzBCdsvzxp6m",
  "key5": "2mVyazoXzt7Uikwtww2HHfkRWdtnYAuL3CFMTYLSrmSsgodCqzM4kJ5LNu3srjG9Jea4W6gz8hiQn3drP2FCHSXb",
  "key6": "2uDXcRTRamCUfFToygHKwdLx9KMA4qN8NLk7UbHMd6iaHkCpjpX8YHdQGVHriaNnfCWgh8JyLhw5juMgX1LaLywm",
  "key7": "RKJkfzajxVHKcUHiGqNsG1WhmBkxt2m4F69zsPzoCL2MS2bKnE2B9p9TU3Pu2ib1pSd4N3LjcoXN2c6w7CqCL6q",
  "key8": "4WePMLSTgMzS2DNB8LKD38juKTiKSUY3EojDioVhd9KgZXsMENgy5U1187B2vJrUfhy5S6eut7vASmxY4ojTfMem",
  "key9": "5YB36Tyi4vBMPeNQ8cdVroTfGPMXzQJ7V6Y9UveGTzvj3NR4y9KhHGCnRiERN1tdffUzTweTrdsREhqggQcWaEj8",
  "key10": "G8rrs38frhy44X5WYkaSU8irYsJAUEwLJcWPLaxd6sZqAwmfw4Co57ypc7S6ciQjidot43DBwDUTwNth1ZLPkgJ",
  "key11": "3uiLP8wcpWxe3wDcncrSk4NocCMBTJRX4oH9Gq19uiNxBwQ43t1ap6QKorN6uG3mGU59YjBuUzSUPYCLfZrDcgW8",
  "key12": "3qjj3k198DJGrw48nAvcp1o2QHBXwxuGWazbXuX6KRzXiZ5CoexV6ir4f2gVuf8irXcRyi38mhSGT3DwzZpxMg4K",
  "key13": "129jN4GYHMfLrxeq139A96wDH4hWMYPofAk9huXgPxNKgMtSuMY3NaBeBp9TTKxsXQCJCRjWwm1NjBsVu3rgwjXc",
  "key14": "3jjvfzMnymdgx78mbf7XXSU39amUhkqxPNrPch9PfYe6bbgc6Mpn4kVYdvzdgn8e7AjTxUdJ6v1BmLkHVh2nYbcL",
  "key15": "bFyRFLVeXdKPh3LGAtuf2KQumZbnZV2rcNdoHiMQ7GUCG6cAX9zAfeJTjTx2rPqWuCPCxKvvYuyqB6BsAtPdf81",
  "key16": "4T8UcAw4dNxvWr7LN4QLsfc6qELkZ5px8g669oYTf7xy9M8RnRjEUYNNiZZBFNzYVsm6bPYkM6ZPkjG24LKLEWB5",
  "key17": "5CkSQekS4JwLZMq5LB6jad51NU3LUVL5XDaS5g1hLqGT9V6BKeFkH5SLiyaPh5MwNDBr4hLJXQgmPtmr8owhSJy1",
  "key18": "4EHqk9tYKsa65rtVDUdvrDw8nmeyw3tKiKfjdwvqKHv92Sn4zEFtrA9RgUvvxAMgvbCtStymZADCZA3hQrbed66",
  "key19": "4jBG42DPSKoq8JSA5DmWq4nJcKmMoJnoD2iPUVjzHDermJfGyRdJrefgnwstzxYgNLWhbMSMDbxJNvQxRBpuEtg6",
  "key20": "297wXqH7EeSQ7M15oLfxQnvFKi15NFh25ofNSPScZtLvj8eGNuRtUjkzx7oKmEMq35VBryH8wiamPB16EsdxQ1oh",
  "key21": "5jxj4PK4U8uJrMHTYPS5t47VRewAfzVxYtkFUnLwKGtFdec8m2KPoBZUw2ehh3eEcaqAvnLabhnUaZo7zoAAkbsk",
  "key22": "55fAW5ms8LcjrRYRZCnVq3aS7Y3Cvzkc3BTZtyTuwxJNFDMPuNorYJkPRk1zR2BhthNUsTZnmDxyXqkauF6C61Fb",
  "key23": "4ifM6bsuEztrsZovuU5MCnznHLXZvbYcp8CoCFxPbBPrTdj84KjekN2T3npCtwppcDCK5K7Mca9egxRgLdAyQ9ZS",
  "key24": "2fFb3y45r9sX5gtCEocrVR3wceApTpyXnnxCmtVLJPbM8wYedaBbCzLkbM3eVHZKa2g6LPkKZM73LafwXoosFknY",
  "key25": "4w5pEwE4vMtbY78Ef17LWascjbNkGWrmFQbZvDEykCGZav2fwjpUhQR4VvPWEsKc62CoGS4ZebxApw7pgq14E2ZG",
  "key26": "3C1AwNwinFkupBv3yiWJsmdG9PdGE6kHd8BNYRFwkV3sapUffvuvyEnQaxXoZjD5FMuzYemRcsnQZuuAgqFRNwVK",
  "key27": "2d3qHK6SYTsh7Po7zLqBXyhx3SYKrfBRu8xFZRDyP3jp4BWQkEeYtDUJfLAAAHSKywPWR9pv8E2NCAE63J9h1ijC",
  "key28": "4KoYjVcdQfEBxBUm9uqBMSigm6JNxFEaHPbcWghD7Wf2479vCQ1qu8ak2VrFhbLKWdvTRgqcHpxs4oUHZxyrNzbV",
  "key29": "5U9EtKxD1VwLYwEX2pEo64TkEzESPZa1M4CxeZNEE5myXLvY9Sbt6Qjr3cQ3Ljp5Z1Hzhvx8Tiv6pXTHof6BoYgn",
  "key30": "3dvWfHSk2MeCzGRG1P6uLfrGXi8EoEwkqBqyx1krDrfr4enq9EohhN5pjwymiorSCA4BVwBZCUtLALE6rpJCW9Cb",
  "key31": "4KhXxBnAET2FEjm7HsyG2EMaxKVMYpK1TqYXWczBNPZza9THMsbPwbRDHAd6JPfcRuKXon948ej5g3UHHyjUE318",
  "key32": "4B2kb8fiYvrZmjUJfNKVDkxbTbA67ryaMAqt4i1deQEo9xy2E39oL9Ymt4SCcEYxUcLu2fFa6H22EAUmKB6329iW",
  "key33": "3t3ZpjMCx5R6sLmhbXFok4i6Ar45Q73LpJajbVRbqWE5JEqz9CDdn9wsq77QAzwVhDhzvRAcNGrMXa8q5wEFTt4C",
  "key34": "1T7Xe2XEdHvppUH89SNbtkLEDW7z6XTBKCbRuQ33rA7iVfxJKVgdiyiuVdMvUVec9RuVxN5QTgkFzWdbLexPa91",
  "key35": "2SqA6mh117NwhDbBZFMpLxddyHMjn2AT4r7TrrwUtTZqBj8wwztr5ScpYwtpCBy67zv658rXLa3y4yayPNJpHQP5",
  "key36": "61oEXJZqSfrJCVpbQ23GTEYx9hYLp8CHsYYi5bnbJgKKBPwdS25pmW5HDDKYmF3pkhw6mjbvSu2biGMRgnTzXoHs",
  "key37": "A67FJzgmj43W8WmfLQqQuPc5nTHmHcicyZ9iQ46xNRnQdq2F6XyFXtTHevKAqTPTL83KHoVGzxciw3TRGrezeH7",
  "key38": "4FpYdh7g1Tttvw3S1iKKk2hnazu9urYZNXMC7dmiBRDapMcRwkTdTW4ATf7UDBV3Qpnrgcd7HbfTdhbBuJKurrKz",
  "key39": "4RLVaC52bhpzrQfBiXjBS3Zc3bdHqabP56yd1YofJaq5SswN9LGwijzeFWsBAwG4aQYr9PxAhE3UrdVoABjMZy92",
  "key40": "oLGPKkAfkAfkz24aFZYapPSidi54S8WPR7z5ndmkcSPNyZ2qnfcdA4AuULXMYxfkPaPjzDJjYabceFut7r3TTD4",
  "key41": "ANhbgxaoTGyN5xLqaUAeEFZpTQYuXA3M5sQdHjgwE2NdbtxH2tFzgV76pDCQNKnxHJHhxD88Lp5kUvabZsTDGWz",
  "key42": "38BHazizSZHK5QG9aBihhxMaaSCj7T1FDKnpqzGcQbFen3u3EZnZNq2gNUes4AYe1m9u1HVAK6tNaLeqjzpm79Lv"
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
