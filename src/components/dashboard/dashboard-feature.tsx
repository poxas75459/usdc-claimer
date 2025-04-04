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
    "5UVi3m5Hb51MsjM3oQ8wgj8PpTucYSxhCKTyTbhukwibJ7aMu9bjg6c9bnLvx72kWoEiLakM98eo4trpCFKRKoKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SBA5caXoKU9RvU7QCJSt1HFVUsjfDWHXWKzqdsdzHSqknD6oz8ftECnwpFpQ7z2ALrCpXJE33MTsiScLV2eE4DJ",
  "key1": "3vWNuCbHPjWYDzk1LTA1mgfCZ8X3FxEC38S11DaaEHqoUdZapayQAjiDbmdo9J48VqKH36mrWJVJ6wc3qbrjp3Gh",
  "key2": "nA56B6xvjYRejDg9g9uRoQEdiKJrPk3bQ2MooddMh6drtfd2GZazMfurQntxhkBh9Mi91ZkSahzj6TJdBKToyF4",
  "key3": "3LnC8BLAvzyF6SLGNSfWg3jDcoHSC5CdgGe1WHE7WKXMUUN7ze7fyzTcTxUTCo6mgrJWV4EPRLGtn13qQLX1VA52",
  "key4": "4asdyAL3Cv1Soc76rVpdhcRLERhSiSHiYUz8B7AFBZUXAm82RedUSLEPCKpoBYXdsuEvBJ7Wqubn82pfV5C4WxET",
  "key5": "2SrJBVrYgAPn55XT7RmZTwSGeScVEfszevyUuFsbbix3tpEH5EFEYyqCCocWe58pUtLDYRonq2foc9Si2tG2VcGs",
  "key6": "3b3c6AtNNjWfWXvgpR1TqL1hVEcaTJyZ5yH47DmekLVneENyMEXVvB3HpaaPUNBT63SiVKoTeFB1ZxiJD8ZHjrAw",
  "key7": "kzqkMF8UHjHvmRjwmY8n4g6GermL87xQxmasWJ6GqqYJyophgCvwkby778wzLSNdPyj131PcWcfkj12vTg4PSYQ",
  "key8": "4heRN7aXKaibrJwn6CvBNUiyZ9baqhizBtaj3XmRZ8pD1He6X74rAzxts9wYowt1K78PR1oCnLHknWSwzs4e4epG",
  "key9": "2WHpoUzjdKm3KSKzzdjprszFBLBDA2GJFieye3V1ygMy3eG9n32Rci12Dw48mJpLos53aN3hUAS17UwyzZemRpTE",
  "key10": "5E2tQj2g58TSLzn2fUrjjH5KfrsuHETrdWSwdUeePjVAvcwfgxDZheKUTUPjV4A1H2C6ycxKkhW5uMCKYEdBV52y",
  "key11": "58u3Lj1exnSMgpeHWquf1iCXRb2enpovviSFZX5rKKDeYnV21q82dnLrLAVQ96LzPTRsdTwcJVQaZcX7jM5VBqqP",
  "key12": "3xHFh2APC9Wbwz5Fe4RRuRVApUDG6nPCcGnG7evNnJJNZTBqCDFFofGyWeLfW5696LVS6BtXKFyYDPSTuQ2xkDwF",
  "key13": "1wCiANbUyHPd3pr4fY7DuoiNn7pN2Xvq3yX7ch3PC9BBf2hE9zsWEGicoVFEWt5SLV3RkeQbdCLdgSosURZMj5P",
  "key14": "5B4HQUoXB6o2v4L82apkkG7xsRt9JpiuHTsNhN66HoyN9Q5TXgya9Gmtr1GBdQt4EP1SqR2WWp9By8KbC22yuVGx",
  "key15": "2h54rRBwRTeMKMDdXWMF8hP5iTPPcij17yT4CFMCHn4WLmiwi9MFfqAtbwzEhKMnzixV1rutUrDwQ7Px7kzxX4Bu",
  "key16": "G8qUaZEMwatSoaBcLQayoaufK8zSZVrEqAv9JRshhHtte4jC4BwuYxSF8xg5da4EX1YzULFmhChZ3bhHFmSWNPQ",
  "key17": "bVHbc8FxMfYcVPwUEFwJ6BqUbqTSzoZvKMwSmsiV8rVjWmXrz8EPMPDJkVb5aLTLcuEtqQ2JvUqHFqoatCyQBWA",
  "key18": "5aD54XxkJCu3V1hKU6ZAAfC7h7axVk1JgQq5EuhQDspWi2LAfaYeiyLySs3rrjpJgCSekfGTD2cEWoxVnG5kYK4A",
  "key19": "LN6CkkRsrH6fz2Juu4viTTdVLAAAAtGqSe7rtvdMcKbxpmj7GLDrj8ahVBF2V1FPDKipshvq4terFNazWauRH1U",
  "key20": "4Gi8skok9Pq66yyJqdcWxPaBxj7KXjpU3gznvLhWuMebKvQAnjS8CiW15BYDwWDDMqXq78hh235o3Vwg3a6E9Emk",
  "key21": "48NV5d4pgwehWimdQ3qNFDJuyMi3E57zDFYqigqjU2C9K3fLa3Ko28vcVhsQR2AszqrX8oViWsabDQkxE5t4rWz5",
  "key22": "4SdzfK5qWG7tYtzXMMr6Af643584GmjFwgiWgHp3p21obVkKN35NBnQrgY9QYgECHVBwL6iFFYxojM1Q9vzT3WhG",
  "key23": "4SDisEm2k4YZcXbUrNJWYZz8PdYGbtUgjNg1XJ4dW1vSmDFEeK3DQXuYAfFAchEK3BnJHNSR3T2icWwKtLmLrw7Z",
  "key24": "mZLekfgR8uoJx6nTfKDxKDzAczyoDZkXTArmEAqwNdg3pRreumfAyRQTdXHtfh6LvRFDphqNYx7xHiBhodqcemA",
  "key25": "3aRUWcDc7s5uiDgvUqbubjhEbdFBEdTDip9S6AuwMtyxjsfdJpnKQ4TwHzAxMfEciXzgomD4z8Erx7iGUhEhc3sr",
  "key26": "2DVTHok7zYyPkKwBS9cuNSZPpZc11dhqPLWqPqjvHZiLF5vwozFnAnEYyRiHrYys6qPvdCCNQvAKs1bnJBkrConi",
  "key27": "3wTgVbC72Qex69zy96aqphYh6UtW57ffVo49Z4mx4cL1GCH9UEpRHXmFMLiLSsjVo9omD1wktfkmL4DC8HsQUn1x",
  "key28": "3zDrEWZb9aJHgmDvXeh3cPtCUhhbzq6aVBPtEdqzo86rpCAFceeN1gyr4NfwbsYgynKGcRybvkTcGmrTRGwBqkUR",
  "key29": "38t4519x6yJsNvVJtcCf4m2JPLy1ts7QoA7sUJ1mfjBu2vfYxqBsCvN7gnvQye9qs6ZchnayozY4T7o1bTeHKLaZ",
  "key30": "4bzSYDveaWM6L7LaAPCVHYiogQH8KuFvkAp4zg6X8Y6xf9u1niyqRqk9mHjZCs6BmgyjSWPXLLkgxTohwSbjD5ZB",
  "key31": "3wi5Kc5DCMn4ffwPcsnox4wmJRKw7pfQMyt382wC6XPQifesrkpgwMe8YjcigNPCfiXpXGA18hoGuemYqKiLnQVx",
  "key32": "2HvHeftfx4EE8xstJZZSrd2mYYhVB3R3PT5LbuSqwJNL1EB2Y5QasydEfGUs7CQ2sHSKkiE5osNoesnfbdDuYwXZ",
  "key33": "gELU7ZpuZMp1ZXUomUwkt9UvhEUycoK3WScdXAypEiJeRHPLbSRmehUUC87RVoAQHXtVC8ei2PuXfYZwvSUS6r2",
  "key34": "28zz9CH9vB3ivhQ3JP3ne2HJMVye5KRBLZ4xrPUtd8qZpKbsMYLyzsf3Y5DoffGmQBxGHWZwXEXThMpiv9v27EHS",
  "key35": "TgFGTt6aGGpvmhL1jgmpoWv2vHent8FMrSgBng6UnGffTcABjcknGLcNach7ciDzFXwL179d8fpXYvsLgeD1abE",
  "key36": "4mgPxUACwRKQgzSWugTFoj1Qhr1Gd7YqJvtANY9LbL26EGDJgNxAAQde4roRVZr4aZJNwh9S8ADG2GvaFAUcZk1d",
  "key37": "4HqruPgLkfTu5XUc2ab4Nbkudktt5ykHFAAJw6DBmzPCpvMV88hXqe7GFDXa6JdB7gHnTKYJWhqWHitqT9BhNyz5",
  "key38": "Pi7M4CKSJPgncbK58BethwtVd8DUAhCmLhD7WmXHNyrWecP9hDg5KmTK34XTPguBKm2GmoquZX2J7soppWeVKpE",
  "key39": "4gpW7Gx5cGogSWVz9bGB5MLg9G5vKNiHbyvodRw2KhhWXMKPBSt5wn83sF1CfNnMkh1wiojnhfK3tCUKtnMG7QjK",
  "key40": "34iBgUyfp1GMWcW2yDTP4Z6QwDFCLKcVkXqTNct8rAKYn5GsrnuXpz2G1WHr836pS4rJh3gTKHfJNqAjHzAyo2Xi",
  "key41": "tpYia36uW6GA9Jvwb97z1tCm5am5kZNJEbLvrCoi3B4hXxGRrgRGAMoKFyVNGreNzUHco6ZeFG2UPkbHz3BtoTS",
  "key42": "4tHb34rDyvoE3GQqqZekiNdA1TPCetnuDYFDP7LAEwzZMJhyE5bbaZE4ECcebcEbuCABRZvRtMCr5Ep4bh98EgyW",
  "key43": "2U2QpSTJa4MNRtmUzTbhQvUV9bFiB853dhRgETBmegFkh8nk2RKnmaAngSj8Pq7xR2xzerBZkDSGM2BvpGjGEKAb",
  "key44": "2DxjsxRQhVtYmwcu8B3MZuhWdQAQciyRDxah676fyq3m8NtuZSxgBGGq4WFiuTxhuhAi74JvpuL5Xr8GznuhcyRQ",
  "key45": "34iBgspdGSWA1o4xYpGd8mDLHWST6mxrF2BxyfV3XN4P2T7Gyn6xWWWW1bYAbYq19a3mqi4iArou9DcyLsYEXV3z"
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
