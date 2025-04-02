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
    "zjEvA72QUFMgE7aCuvofCZMwufjAwrp7pU9pcnypfLFXTH8ok3jf7vb9NpBYaFqLYM2FGC5o1fPyANSqQtLagud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GY1qKMALYDMA9rbM9yksG8sshsrSxa2dkKKWEX5HwwFs78M96Ud9MqG6pU75KNjq8HoSPYq6aAeB17bAruPr6LR",
  "key1": "3ykLLsrNHABaF8F4CKWFKpHkZshn1eaTxFbRWELTxqXAeFYpiX3xzoEUoip6kbwXeA2fn7ka6AK6oLnGegv9iPmg",
  "key2": "5JmvbwuY3F4Z99VtpdMekBcgnoq4UkaNFn7HsoKn4myUCkYoaFr9s6VBxMLAVCwt37PVBpyBJjHvgj7kmipHcuGY",
  "key3": "5xX8HPUnzBhKjtBoheuz8JYFBszeDweoeFVFr4qAGCLeqMbmbQtmcQZ5sx21t3g6wzF528jmYjyLmRXtTJQD3RPi",
  "key4": "5iRBoysgatzeRVPhkYzRv3ffDPhTQ1txkh1qQ6jXUKZfZmdAAMTQ2NwLfLGNtUgVRkUkpCChPrw5fr1DbDoPZfGr",
  "key5": "aqoigL5rg3drTuv6poKN1LonNStqEQR9VUigr3g5UZts4BUT7hwMMhj9PomwbdLfJTYBuXfc7C3Q3WotJUhNreH",
  "key6": "3zQ7FKQShjUbbXqEAGqQ5fKZt7yFEEscNEz9Py8kv9rmd8HWzBfKwGsC13nf6vXemDukUvuiXE3FPYsP6Qy18jD2",
  "key7": "3PXzY3iKrff3rtvDS3Pt7hgs7q9H3zz1GxqtBhEvhzAwNd1FvyqavA2joxit11ZTvsCh9YHPwe9Ft2HJSy3GMg2e",
  "key8": "8bkRnDWMtKcZz4f5TV6RViyk846UKwAR2eNNbQvdnRMLy4ZjoebzgQB3b3YGmpaXzPwtnpTNNZhaAtCgg5BrSX2",
  "key9": "4SA5Ct5KGZftA3PaAUs7HK7tJU5UbjBfqu6H6tmQ5TugSsYpQvaWYFZhjLDBo8Lkso11Aim2NMR9pRkLQTTo9Uiu",
  "key10": "4xa22CzGmCHKEXEBzRGqZ93QPvUkynNaXBtWH9JZdaYLjy1aHdXmetTe18MWpNYtAHBrvbvaw4TydaU9WQ42vtWL",
  "key11": "5GLQMybsAcXF3AjshdaAhy8S1rWpnFTeVfkzh67bey8UU8fiUAoN6NVwAz7G5dApMKbbwCYg6h1Cx5Rhdk6NzdX3",
  "key12": "5Uex3dJ9TyYJnK4jRxSn1pX18HQwNfNj6vo48RixFskZbZyMf5YxxP52isBbBEFBEQM9LQTV2Xy3XcXmQNjGiHux",
  "key13": "3bAmPCPEfi27X3xXroeUwWPGWHWLv46iNwqE8jL9ohcU7YFGiJV5Q7mViMMYx5bKjKbS9Aua4oEz8pEFPy8h5eZw",
  "key14": "4MquqcWQosYRh8f2nzB9jauY2e3YsoFmfJfSi8crGxqGJmXeDa4udUhrmcBVRURaq2N3W3GzjWdhNWoMzVWnNnr1",
  "key15": "4GGfarV2DUDvek9ysft5hC5x82YSxviny1FnJtvEB7Mh68sQUXx7Yy4PvByg6eQTk8X5uZw6LzQP5q9iiYYwcwnn",
  "key16": "2dXDPEvAKFXHoTRK8sZjDPxHf6UDaPRb7gUWHtFxeGMCbt6E2gU1ux5QMzEKFh6Jd9cHiLNH162JpY7qEnr2ReX8",
  "key17": "3keLNkVseRh253iikyJUSLLodDJLu1h8cApQNZup7LShC45YK9D6NVW53fBVB6jxZKbfn2MvuL1EyF66bYMFfJ2Z",
  "key18": "4nDSSLrZsdvE4URLX34pJ9cYJ9XgL4pVt263nHyRoHhQVwi3gMTPLWQhNgCTUUHUDPEksxUr3a9RdSHqAGjHUPi",
  "key19": "4XocPDBqESNWhTNyEBzDvsGq432YC1LBFThPS3xi5cKsSStaA1vzCamuFi9BmhuY3CpsZbA41BAKSRzzQFW4u3ZN",
  "key20": "2JKte1wLQBcPDMNop7yft7kxawB5uZbsTBFBs337YjXvJGAonh9BogVR4MfJsLEUcvx3XfGd8jJpJVVMoAqU8J8D",
  "key21": "49U3CnZUAeWTjrzet26S8S1E24VjncKoahZ6CV1XEKeiHEoQLcZy31HvCo3wFxGNPeTG3socB7uQeJKQroauRFpk",
  "key22": "iJtDxkeDGPR4yxX2qMTfYKYziZWDbYrWSKDL83QDoVk4zt9ubnY3kiaTBvCG4F4BGwymsVpVYeRUFQdKUNpQT7r",
  "key23": "5U57HmmUk9xYCbsFx2tJdRNm263xNo7tpRJZ8PRKN77SbXcopodok7cSMPsAfttXpqMnMTQrxYCth55JtAoPBkQF",
  "key24": "4h8cXfWvoz9SZRGzbdZsx3Pvm7zRR5icbAH6TcBJ6k916Piy2x5SgotCaaAaXTaZUuPsvi5ghNXxDEDHfJrjxkkq",
  "key25": "3A8m68s3YoiEZ7WWG8TK8MqjddeGdTsL94sfjX5Yo8CSnR25wHPgiJnotsGpQGJ4UiYsLi6JYiWAy5bV5Bs1S8sN",
  "key26": "2jneVNqVWtpLHd3K4orD2KSJ283K4zFXzMCwoVE9hU1bghRXnRMpSECjWHNQXeL95UhUaugPEFBCHEPkVzRqZbWe",
  "key27": "TBNqivrnXEvTdA4wCeENXZNTYFm8K4he2uED49KLB3w1yJcLcpqLNW1YSjgfDevirN4oCyP6dogS4jDEZk4xGPv",
  "key28": "5Wr233VSA4hCQTvDwrB6t5rdwB26FZRT6icABHnWeYEoB8rq7u2SgBnQakv3DD1F8suxGg9T8xiAnio226idqXQu",
  "key29": "4BW53HV1SjzDc9HAdrDqiVbbY8yVH2wxA9pMWA8NtdNrcsH5tDCTM1RPJiQf8dBXRRZYAvcQVAMZr5JXVM5rzrzr",
  "key30": "yKR7FuwyHM2AGHhEsvbYZPvtAoiQUZEw9mQSQvWW4wo5y2DBftvV4orpHMJ9pookShxrQRsJTBQ9NzVQVaJSRtw",
  "key31": "2SzUeRU3Zn1fyGks4yRkrnkM7CdA64PsQPdwUqubUbLG7WZ2f9fvwk2PvAyX1LEvjJyijGfSw81AQCvD7VyC4VeK",
  "key32": "icjUow1toSLDFJojFPSY8bBRRrMApoYAKfprTesJ5gP95VR2WNDp1r6TttbgMUtKqruma89h3iLKp4XAPZPCoXY",
  "key33": "2hVP2nwHotj9uMyRfjo9ZoiVdT56xhRnQswAoHq2uk6hzrNKdNLSPhPP9459SMBEWdSKJh454rEP8tUJ4CL7faGF",
  "key34": "56ncedyb9bh7Wqs4Cvdz5v7NzVjy4zKGwLFz4FvCWMLBB5m8Gvk2HSoxYsAzrmPL5b4Lr4frqTzVefUNwkpEC1rM",
  "key35": "2G3W8NhvtdYAHYrUWNZswqCmG2RxnmytafJC32saU1eferTe2UjD6AkNRicmU8KyfEQhw3BZNTnSPWkhmGRtdYkr",
  "key36": "3fR2iuY7RbMLno7taph2BTYCXW3NzJ6dDSH21QGb7EqsW4BuT1DNY1byJ4jskk6Vz2tBGfNGJ1dCMhZJ6Haeiv49",
  "key37": "3V5EWjqReraTMiCNeKvjmAewrjq2CfovLb8FfRZCr1u8ri8zAFoTaxfY46wyqmNHb3TwqGbBVahs7pTKcf3PFLou",
  "key38": "3G8MFwgB6372Kbt1QCVmn27CCJ3meLYxFgGjTeAV7hVnPCu7457GDjiqWJMdXaQBmcZa2vVaYvSC5RsyoQJry27U"
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
