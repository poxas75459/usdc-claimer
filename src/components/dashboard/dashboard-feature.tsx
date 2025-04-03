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
    "59EegkbyHa8hDDcmxRbvLEm1EvriH2GZQFS8RFVgjUZkPu4ZCNi5zWvphwYsiGrCMNXQ7skhNfvm8h5vpaXbKBGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f8anuWPad67kojnedp8Eq3KwAyiPMaxwfM5ERpJ8m9AGAJomPMS6g3jS9u9ZdmwKXEetFeG8xhuvyh5JYbBXWp7",
  "key1": "5PoYatVZgPYNX4LBCsLGvmy7CcrgY8HsYNGQ1BRjU1GQfwCDoKpJAMFrDfmufMK8Xdfq84E37JjUqkEvGyPcQ9Tj",
  "key2": "3pYqX3xCFRNBn7YjDrAY57e2adDV6hqUbydEUTiTn9QvQ85Qir5iTmRbyT1VqB9ni21vuRkkSVjhjBDYuQodfX9A",
  "key3": "5LCdxGdtSC5uUdU4YZAuya3Yu9VBNcyFug6shFLZhzvN7gy2kc5hqiYAAxGEiHskXFwTLvNPVtkioY1D2W8RPLAH",
  "key4": "42WkcqTJEnS5QgpENQvHhxi1GES8Y6VvLvJjx76JAx6PRFu9Yoj5AWtgVW17cidMVg2z7Xu91Lwcr6tLNkjBut7J",
  "key5": "48FfY1Rppvru6izGc1tNwEdvUvzqGavQ2bXykKV317ZCZhH2BLHELXBdrztKyVX2oJTEjMjwpXtoaTnPTcTVrqR7",
  "key6": "243kdvzpfgNMEqZHgPa47Ed6x3iTsG7HR94qWm2SSVr1GFcH6Es6pefepY6q2QxeG9HLqCtgBVsvn3iai7KKUQ7o",
  "key7": "1W8FT5KmFNegzEx3WMtGssEwwTFwDMbkKet61bagstWygDiwm8QCmasnJ7oXeB8iugUDtSUVLxqgbFDiHBkQhcA",
  "key8": "3dkN6ZqwvB6GjjxNxqq3xGg9GDrK49dKRxYDf8a5rBwiqPCVBDSKKsMUkNmz5yvWjXsCPqdEJL5PVEcTemtd5af3",
  "key9": "4LxqgWSPYfbVuk79ffsRiUtenLDSaTbo5kzHqS4YDAft7C1MQFhfYBrmxLAQzCFsFYDdMJp28ehYPn5fASzLEJP9",
  "key10": "3LYbdgtNj4NY9NhVQuPE1MdQSw1bvGW1WNVJHGma4Z1jB3pj7efLTVRtJp9zmhH7qNyweoH258WXjur67tTHWnPE",
  "key11": "5kHDpD81rmAdnGBvyvgtaYNCs5ERgoi9mqykt2hrzxtJ5SRLzmc3xSEFD1w7PM7vthVcQ3zAZXgGgA1f3XGouMh9",
  "key12": "3od4KafXmy1oapCqDaBdJiA8aCq9BeJucaX1NnBJmpirzpiJwX2GgQV47Mi6vwL3b4ZdqB1P5mTJLs7niNt6DJV4",
  "key13": "52Y1UyPXzZksJ8B4MF3T6NBe3WqWvrXe7JSsUEjgcqktYA5aJwpqeqtEurFoHRpVHyPqtVp8HdrRBcyjcPxj3r9D",
  "key14": "2NMvbk6tYq5gs6oVu3XLxQwCa283uWo7Xa8NQ9iwKaA7xbvrUz7Qkpq81rmKvJZRrDYJ3iQTh2qmrPSjoRr8QBf4",
  "key15": "55MVfUp2FDeoFHKuJSQax6nRDhwGoSCY7bB218CHuXon12Fi9Kf4ACQ74ixcbWmRDSdoTLQQXMJD2R8uX4a9unA5",
  "key16": "2Ep8XYJJbrUpejDmLp4BapmUPZ81cAa7xgsxJciQ4FuppfmLCJJSY7CA6CLrGsGeRdrZSqtPN6rn6kt4374DZkUg",
  "key17": "4L96CyF7JvuvkNf2NocHrbPGDt1TMLLH3ivyk7nmuchbYpvFTsi6Wk1c3fADRdGpb7RwvjRFoNpn24u74hXGtQfa",
  "key18": "4M8oogouW5w3kLdyR9bTp7L55zek24j4u6ShDFoi9jp45pZyUS3oF8JXvyPgnWVev47ye4rjCg6k5bH51FCw3sNs",
  "key19": "3soHAgLjuhfJpdDAnjH9Eh7BktT3eRkJYVosfTH9TyJD8uaVaSLxWi2AYdkML26GdoKdoniWUVppznX8TE9FWvPS",
  "key20": "4VUoEUttmjpFwTgL81h1AD5maDxYTbsMgarxAedJF2QUoT37rkvKnaeQwudkbN2DCPWKiNTgJhbUsmKFjY9SsQZf",
  "key21": "MBx4tr23XSuymdNCXocw4A4Q4udsMyjK5HYH3s5drp9PVJvikWM4T7NRrK5H8BjvZQ7DXdz8nJ7qd73nW8RbrWi",
  "key22": "3h9Rbyticd4H5qs4ZafSm4QsjcFcEJJ1pUiUY4Zfuuj1qL26hUMreR8g7AZnc7V7gUgGEkzpta7XMFCLQgQqDWvT",
  "key23": "38XgXRexFVWzRKXpKPn4HwdzhNgFY4G5xdrCXnCKeWkMDh6wadURTqMyg2GANiug2iGHnha7m4TDmyhP9nj5Ldrx",
  "key24": "22W3Enh5kPQgZPmBM5GMZhXWWGL8jVqSv99hJe5TVci4xQoTt4Bc9p9S7YNJ62USBuzg6rcSTx1R4AfK1LpJxYmc",
  "key25": "rVcDq8h2tuoepPyAhKmL4pFRdLdMAbx2dXL5TCQt8NzW8zz9vHY1J5ciiTFNXBQnHZtqTuhCCyHDWgyPUfZkWHg",
  "key26": "5fz958N7xcexQPAAWd8xbv13avjdLDgN1PjYK836Q1uWdP76A7ciB5wpWurZpxpbkAgEUALRMZea7pnRmdUQZTbs",
  "key27": "2nkvrbf2y1Qv6xfjYCFwmqCAv7gPSZp8R8A1hxkoaEHmmuVxF4DcTG7jLBvzdU6RMZyRbKPTGUQMVdv1VpXEHGyj",
  "key28": "3bgu3y7AnhgviWQhstxV9Hsv8675MS7iudum1FDcpRxc1mBRY5Y4GNjTWXEcsPC8vMcMqXCqc57H7CEG2b81pUP8",
  "key29": "4P3QuKvfRp16YdFMPmnQ5wpVSfq3h2Dx6VVAS3ZsQVSmKB5UCAkjCMP2cZM3oeLB5FeNkwV48Nw6cr8jsqXXMAR7",
  "key30": "4KP3xqBj2T5TBkNGckLTZdfRE3HidLvyQECbdFce356LxT43VUQuuKkkRPR2fG8a9MHcVNVM9cxfJ6nALabnzYuD"
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
