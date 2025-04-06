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
    "xPkLKSnk9PsiUeA1r1DLCPBbMEwrbj9APRR6dnSxSNHU1drWHCHAmbtzRZbD2wj3DNdujyNwDkFmkjkzzshBYRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kML2sW1GCSXYDumH2ZPghY9dsQEAqQp1ZnR6LmQpmtZiZQcyw4BbnGPoajuWuQ166spPgUHzMNmg22Tzkf8xGNa",
  "key1": "3m1Tze4Cy2L4AzeEXkiqTqss2ufuovfvz4uydiSoYbFusN2fK1aoDyrfViLs3CMgCuRxibETMeankJQa6DpBuMA8",
  "key2": "4UwYdx5TtmRTdGpP3sSFJzyfxS9bMGv5Vr4TqHRdvbtNTgQp1tVmXxP7FTnSKzNx2QEVCxRZ9L9vusSiFfuzC2Vx",
  "key3": "381A4YUJzXxNLMpwQEJTpwFEo2BfjNu5cbGWQvk75MjYBdUMGqefMFxK1QNN12sY5yU7yYez2et5YjcdRwc8vfap",
  "key4": "48MenNNwu467cqyeytDHTEkY2mxfY1RipXayKEFNLK5trfFpmH9qodwaFvM4pTbmMckBVf259kRSmEt6kSjZJU67",
  "key5": "4e7HoYjJ4xHy62ybtMnNEC7hWukz6CS6pxaiw1j7BJ5u5Eo6Rh4EE8Jpr67FbHKzL7LLkHtMMWfh5RZHJFMMiWoE",
  "key6": "56yK4CBptD1B8GCryJZasccf1SAnJj45VxtyF26qDpB8NRvkiuj3XYsbY9aMUpSsvEsJoUvgrxacgsB5fFNFF3Hy",
  "key7": "RZtCbyJWm9kPCzSaCkVdRCZCa6xny3TgqwSVE76RhJUKn3FsEsgeXMnT4ohXeryCDRhEQ5G62f3eFs2gFTHLdHm",
  "key8": "5YRVXSsaZtMYiTtPMWFbRf4XPXL1ZqkMQ6TirQR9gthFSGQTNYFcLMfJSxnpfHqnKppHM8GTqvMX5FX6EzRMBCBN",
  "key9": "3aTzQY1LyNn8hrzCYxvE27FsGdrnwA6DwxGtBwbRiA9zwhsGp4ouM9saVsmPRorGmV4YHW33mpEhfs5yVLrmFcnp",
  "key10": "35giLPZNi4rQbvhpMPPtwayEmq4kQ5bnraTMvTqKD3Zpnrh4u4K8qpwSo5QRpnHfB2vxuXLATkpe9vAQBXRsVgoH",
  "key11": "2N1KSz21BnqiVSHaTKaDVjpcvR45cTyJ8e2HL9cDp6ncXyBCpckYm4NS8hPP7xb7mqVBjAASEkdrz3CMqGPLEu9s",
  "key12": "dLLLWxcbrtDZSjcwLwqwa8WBedM6JyUt3nRYNtHb5khe3qgCgUWfD4yjBAYRJXfaFuAg9XKdgTSGkKkxacLdqXL",
  "key13": "GWM84xvQRojZyyi6ZzXKJeJdkoPUPirzqddvXjjwUE2F2NeZcGuEjzjqRewFMbDunHZW72LG4urD7e7iWzmwgSM",
  "key14": "2tSNYgN9eWcst5wt3TPaT1xfq7eCY6ifWD9ubErf69HXEgBVus9JwY1E75n4XHXyeLhB3FPkhUYuJaQnDpwuk21j",
  "key15": "3RqmTStCJE3UCroU54D1NnmM87ut4CcxZNubkYK5k4crA8S9GSzP3vKNg58ybZoYFGesgD9pqwXcKESkUVKYgqvu",
  "key16": "Vzv1vG1xSQ9dd7RiG4PymLbuVZZXFXnj2btVwqMmMqtPSkFwVRwtV1y16JWQBizgEbkmELQ3jxLN7fT92t8LyKD",
  "key17": "3X5BEPysvHSZtAvgc2QwiCJF5ujpKkunSJSHDxa3HGyAabFYXjZZ5qv9xGnGGunv2w1PJ4Ssni3fenX6oL76bMbR",
  "key18": "4hd5zUJdjr9CbUtzKUz6d5RBuMLLEE71ei6QnBLznk9a1JpPasEgKtLnWKJ5xTv6DbrS71FdMAcvWMqigMGcEeDY",
  "key19": "5Gmo5Lf9C84UuUHzytmrBQVJsj6pCyExdqVw1dfajFK4PhSy3LVcmtVVfdKDvqiN8GTizWHD3qGHHKxW4PauZBtQ",
  "key20": "3vDyXntCpvdE6mGJD7WY4AcMsLdTSjzK18XRA6btCbKSWGX2AQheByYihn4cJ3sDSPdxDsEn5mNn2ipTym2wVKRb",
  "key21": "2TK8Tcb6MaE2FUBenNLi7z6Dh1XGMhQHYzzC1x23n8bdqM3Rz54zuRSThqzWDnomt7fEWZEkWwABXqs64AkLCBWe",
  "key22": "3vQqLqxWT5oyMHbvdFrdViqbKDhCyT5ED51pXFvwRG3U3uEU1A7kjsdCWNF7txUdRTzMo8Q6onjoPyG6QFT5bAQv",
  "key23": "gxzNeAwGjJUNbD67xrPPzjj3AkSnHGd1sqphvgBgBJU1WKRUaxhkarZrwbTnQ5X7VUjVDpxUwoDRbmByCcBVXBg",
  "key24": "K167FCXG8L9QLpnXAWjnidy7o1c9SenyWo3CVwxqToGxC8t3brvJoBJn4Ktk8Zd4wh18WoXbuYR34GgYzdDAYMw",
  "key25": "3eKLkJNxGmtjvpcGo925KsRfeQhY6kpY3hGetQbJ4Y3vbX8wKkzjbFYZALprkYSyV4rdimFc63zCDn2y1ew2AHFY",
  "key26": "5pDxRs8vWtufQkuFpchsPettH7jjRT4wjXLDdRNmSqvAnSVJha2AQPQHqRZHCjSwSTZjkd51KNnUN8peDa4ovQUv",
  "key27": "2N8haiMr7fnwpUcjnFbn7Udv4hCVhSyQevnBZak4v3zh3XDRyUSxpiZ4faKLeGxsBQgCTmFoMZsNaf5nMFmwx95p",
  "key28": "5JUhH9jM1kVhyURSpNH6P7bwdfJ15X5ANg2D58suLjHd5dhjKTboFj6XiCXheTNCd7p9H3yjKP9zPRJkTXMSp5rp",
  "key29": "4pmfM3HkGK1G7pFkSDnuttaQCanxhfWkCXED2YqQ95PwQJSm471hnwBtmVGvSmEsTLBbLmTYmofpwAJvkPv5ZgcA",
  "key30": "3bR4ZRcUcwn4KngDQyJ6ts8zKqvsTcwTyShcakWivqunoe1SSaTHyhXxknTyQgvv5hxF29qYDdj9FQkBuDE71E45",
  "key31": "3TWaiPzhQTD8VjZAH3LPuM3cYkHsRY6aZmw3mvRuuRnzKhcVzzsgpvGTip5jvdsjSWTx84sseyKbmczhLQetzLp8"
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
