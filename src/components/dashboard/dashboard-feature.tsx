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
    "3QMAWkMFvipkVxXTTYvHZTHZ3SXgaSCTtJH1gfzpExwNFPPCutbxSFHGCnYpDf7RQeGJZ4UhjyukqYvSeq7RzzyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LyqHESyYCUdiB4QnNwsp7NUjC1EzaW29Rk73gnELmF8iRRS5FepJum6uhNizRSsr5UJZQTGoAD6gaJpJHsTvHLY",
  "key1": "4XUHWLPVyBvvzQPtVV69w1weSuzFi5V2P677AcTcSVJN5jr2mihYEuFF37vzhkhA28PuSHbTnRhdkQTz16Vsgfoe",
  "key2": "459rLTyLPR4iyKx2oZ9KLR5fM2LMF5tzFUjDUbeefbYByyWg36P7juU4husV9G6epqhMZTzLWaTyWDQ3czp4Pgk4",
  "key3": "2ukyMfkY6jXB4u8E1Cu9quUPX2VaJLn2e68equF4GrpnZCS7SZ4XxTF9L5aRFRtfo72oLBoid76T1DDvSeoZS9a7",
  "key4": "2wXZcCaiEW5LmB14tws3xohtQc8Sy6QjJxfe5WRRL6kmMrYN2kurmDQ7fj4TShRq8sgnLMb2wLi7gib8cyJuGi8n",
  "key5": "2m1W1hymPVNDwg3WmSqA4uv6cfEpx5GLDmxbooMwTcpFUkffYkPr96m3Fk9jTs1T5KtHpgefhkDL168jZHFCUdkq",
  "key6": "cuw3VgeGk3AW2Ht7PMbrkeXCNTQNZgCU4VhzLn7PxHQzEK9NQYzzY8YeRcLLgiPRXjH8oNa2beQrufEvR16Jx6r",
  "key7": "5QuXZnjFfHTKGP374yjuhPfR4B73U4vdDBKtnw3j9ohbNNbSmrjKfW7n2DRCnCtPegu1DTdGyJQCwRZdfcgUT8pu",
  "key8": "2G8aE4xgzPz6oieaqmaMJzUSBjXQgasNX8cYtmQTzWVNkFfYnSXCZa19FyQy5TE3LWkZpiRJ4bjePEAxuj1Tsvrn",
  "key9": "3Gb8FjrJEqrj6iZkikiKrts5uW3qjdAQm7LkLVevidDKnsn4HJ95kNiDwoY3k4sVWuvjkDdb3rMvrZEubPmKuR9N",
  "key10": "5hsX1JsrZkamw6WTN8Y9J2MN3RyFomwWZEs5wZHBkjYbaH5pXmn7YyK8JDA9femqVQEUV7zBfP8fy9osNXZf4tZQ",
  "key11": "a51QsX4XWUsPKx7oJd87a1BYAH3TyCEcqAqgBBsY3TFg1vnJRZcM8vQBiYZQe2gTHUr2rzyRTKuhuwD9nvyTTbd",
  "key12": "2gAq1rjGwP9WELhJ4vVLafo7PukaDTmRWAtCyUhLC6WqY5gAwxW3PjFohc9Azv24JLb9qDFe66BnYtva27ZGcAXr",
  "key13": "3pq2UFfGptNw1kj7bAQcW9WjcVy46P9jRwBuiiMQWQaRQ2RNtiUbaJTGmbW1hPVZVjWP2NPwVbGNPhEqqpmSKmC1",
  "key14": "3DTmyRnvYzeSswErMoLFsxGFvE8YKiN9RQqSKGXVk2DCwabF93XnxvR98PdmqrFyd3DWkXyf5csud9VXN2B9ZU7u",
  "key15": "5ZW8jnXDz3SUbWjE7P6k8kqXwfq6rfLZzB9FUzwq2sRLGEbu1CXHRsELgDjWuuGGqcSAit3Gkm9doReirnHxSR5u",
  "key16": "5DA7UeMnUGDVL43hxCtd2t9LczPakbRS2MwH4CCThs8DKEMu43eGMR9sDrnu8ewQnpeb36WtQfTHjQfwQHRvbAp3",
  "key17": "2zgT2jUwoNeathLdK1HAmQzZ9q2kJe5fx79AL4XFXeX4Q1MKV7BzNf3RErV5J4ifC4mMjtvdp4h5L5iUczWf6qyp",
  "key18": "RRK2aGEhK189v38DBxLewqxNAK8weeDnpdBjzwXUAqezLDovJvpGXDAjhgdTd9XwMty4PPFV4SX3hYwf2GBfSTU",
  "key19": "32YKoM3LTjbEiS1poF84A8u99sKHBm5yzgEfV7wXnmwiT4eC6iHmGMw3DTU1U7JLmEWrpitcGmPwNapevTy3uSLc",
  "key20": "24epiX6kGB6qrzgHbGbPgkDeFfniWrpXwWwF94TkrJAutXx1HP6KFnP1LN6BatY7p6Anw4miRD6eJba6FSVTczG9",
  "key21": "3FsLoFVzeeezw4vKx9SLp2Rz6G3nH4oR8SSmJqjHk6NESFrJYSsJ5AcSxgbmmJaZGPY312zytJbZfJ28ZfuBTygR",
  "key22": "3Ls8r1GeQEm48EGUdjsygLTfBZ68jux7MRchaJ13DaKFB1hE4naHP7SV1Xb18H5sLyCRyirVGmUUC6gzc9yygFtv",
  "key23": "CGWThrNymizcomT9FQ8t1YYtS1ENHQkiMNjoWCVnhXBBi8DSR4v3BpDnT5PLud5vR73DF1q6fEVfkzg24eHznGm",
  "key24": "4bNNGEW52cADSLtubD9XntXTzhfooncTV4tNowc1JtHdWQ2hKMWHj5PFxbMx8vKtRPNyHMh8x63RZSnLZegvsKyy",
  "key25": "4hxGnumMCrxBhFf48RCNGkrt5d5g9WC1ihTVudPgdafDHcbAtF4x7XjLpGDo2kHukSjcN5pwMUMf8AoCbvTcKrW2",
  "key26": "qyxPkRCKdY4vDR6oktjkqfdh95awVsmM1sgbZXPqSXkukmQ9ZNgEo3YpeTb6Rttad6iGup5HKcZ4kPpvurQocLS",
  "key27": "2pmqhHJds9bLMA356pGXqqBqHp6cmtcVQD7vzpNDaafWNmxmswRjgo9rwFb7ckAwjmaTTG698xYfuPN5gvEuEhiM",
  "key28": "48tk8Mm6aCpkNNM1UV3sc8nYu8pqxrwgw81X16RuC9vNzDSvQ8sYUcQb7urQTerqhHxmRjLm1UZCeYUVf4i6JWXs",
  "key29": "5KYA5UhNhU8p9fYSqR4H6yp56rP1YiddEZfehm9oDxguPUzx2FLrXXub7wqrSTbJQFeHfAgaXdU2XPWk1xVoVxdz",
  "key30": "sUBG6hs4VtN274aJ73t3nCd6aDniUv6GLZukfpyuRzt4vLCGQ5FJN73UGnZiam45aDNmckWcKeC3v2hkaCivVfq",
  "key31": "5nXypY7RSoPrMMxrJPZcUXn5FgJEU5pPCZHXwN9JBjgTssYMszND6z2cVATob67QnbWPg8jrM9q4LBPzM44SAurJ",
  "key32": "3u99SweaWPxfJaUkpnjPr2tYTzKUHrKmpPrQwJ8XqV57B3QiEbrXeekidXssWGaxMwyQM8S6ncHnUjKp6EvnpnoP"
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
