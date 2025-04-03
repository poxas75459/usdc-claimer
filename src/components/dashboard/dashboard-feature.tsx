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
    "3aPyZpGTZCc9gzZppkwCvVqLCxdXAKjGQ8fLCKCsqEPf5j6aSjjVtiho2vTrk2wEt8cy1RUX7pUbAND14m6aPcZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yMtytPQr84c51P3XsgPjaxyKdXcwubk4QUVaNQ1vifMChSnpc471f5SVsUoMu5b4vVcFq3aUSuZG49hdsuUvUKZ",
  "key1": "FAuu3Ww6ctveSratkjihh8X3dD3Dt31KMwMmq52HwvPDynoY1vQtBHcfQHrgiBdRKnEQrGevdfVaezBv68vkWJC",
  "key2": "663txb7oipAkok1qQXYRMLpr9cDJ2bRMm3K5vkmUkgP2z4YFBHr7ZEr34LDCDkNx2DiSyZ5sbSgoXY6wo5uifPhv",
  "key3": "4XnhPtDZdnfHodCq4ifzkRdfaHcTN17y3Ak2g9aVxoVqEgXPzF54WSVnj3pYkktZwMcHgaNuES8Fzv9KSjnbZMjY",
  "key4": "48uLgCNkvK8pbnUH1FFAfArSw6X6NZtgVu8EXH6KPMV3tE1Cpddh77K4soDQF9cKEKHojShZTzt25erznrqTRRpF",
  "key5": "2cRHTQUZ7JuA1DrbKGf932VFwAmxzz58HmcAsDoHT8iCQGfaNqEXYq589Vgk1YhL3uB8F4Pte1gtWbx1VZGuw75j",
  "key6": "nhithX7kjatvZXekdjwyJNPixJGySMEETMq1ZQyxg3Cqmtm2VfgA9mQq3kfLBUM8LGHwrqjfTe2PoeCRAhhcnvx",
  "key7": "x3mHSY6Qw4bDrxzVBxfin6g9PLN673bp5ctAMcR1jnxyunVXQLk9zkJE1fcHFwURRUhUjUoJQLrhEm2F1cLyYaS",
  "key8": "5HrcgPRetFTVAuDKfR7qHp3gZ5kHdDDqsur4b7aNekAgrucMuF8TBXhostX76S8XKXoRDrZydcVXzZyuZJ3uxLQC",
  "key9": "258K1KCL9G9pgvGLxJgVJomeuas8fA1ZzCFjfgZBFJSeavry7QaNt1uHa6dce9NzyW91c44kBoBa17ckWEvAVGvj",
  "key10": "31AedB7BSQozEruLko9yo6Qyy9sS5hNWbuFVnYSmKmCqBHwC2iVtaHUUZyxoZbe4RhNvXVrp5XTMLCSEPmxjAuDS",
  "key11": "4CcEWKGFpBiCRtX5FWrHVePTPEi5qVP3SbvMKfJ3WTPw8ESzPuQJeEc3Hhsm5VhE2ANUmYP2BwPa61yiFfkivhdr",
  "key12": "4mQp4f4tPj9Zv1xQizMfKcoGpt5uomYMwKBehM98Lwnz1EYx5sepYFcHHyqvR39dTrnwpfKzJGnMjZUEU5zSkcpH",
  "key13": "FQh2UmktK1kFSe6KecHVLsRbxooQUPGCnfbzsNCgP4UVB4wBeWACvxE9s2RMLVM4DYVnWgP4tSxc42hrcc3yi7c",
  "key14": "vdvFGzEB5ocPKcuyX6SpS1NX19tXsYd4rMG85pHNEPWXJWPtJWh9BKzytuKTtAuYTxuvSZHRgamGv9DfP3U1Fpi",
  "key15": "3J1Azwo6JwW2mQFbLqkc9LhYtFdkbrnFpkdKWSnKF918MgEhYTYj1uJQc6jFxpeHAriAZcdwMQ3YnAxTnaEjoZz7",
  "key16": "5xs5czL6TcZBEVLVc6U5pkcPoyc7pAfCyWZcaM2MLnwjBMdtBKxSdy99pZ58uDPUjGzwbP66BMeoBnQ5a9eENBKd",
  "key17": "5BXeiZ9YeCenZYmMhjQn4gNkpQYFfMk1Lkvu13FxoFu8ruAmqSLhgfnswcUMepp9RNsF1hL45sabWzws9DYZKZNY",
  "key18": "32wAEqy5ZvyMHHXkY86LC6ejuv9xT6kCRUoZmjZ4q687tBufR53QtnD2GmkrQxpoapB3ZimA6F7JuZkAHg83uU8P",
  "key19": "45iHDHXx4XqeDudwBBM7oMJvu8Exv5Y9AhRpMXtnrTtdadg9oPsejmfSo6p5Y8DBZ7AfvNUfUGivQC3QajR9mHiS",
  "key20": "wJuuu33v3HGsHm1iUrUamm2QQ2EVi7RMDZTQpdw1V8txELarr6zdMg8G8xqg2HUYn5oyPnVr5R8DTmYUkBw8pxd",
  "key21": "3CvTgvnXxpfaMntn6XWtinZUp9TxYxu5DqRXXhv7RLyfFabnkmYuX8NfuJNow9xfeE9RmJKdXuLG9cchQLp3gwXR",
  "key22": "c93mTm2uJNKteniTUvutdYMXa7YCXEWTUhFPoG9YHJZj1g7FUuS8uCS6aSF5mim6kbApmw2sMmn1R42RLyai2e8",
  "key23": "3bmaZBpoRG5QuRxpcG5ueFj16Y7mm9q4YSAyDirWcRPbiUwowfHegQf4p4YTkcwN87v4j57EQG2e9ekCzJPdhmX6",
  "key24": "5umRHtjBouTSwBBgKiEnwLVWmi5wVuJfrwKCXnG844Fy1gx7jrStkzU4gg9XjEACEQgugMvoMzLKFGXAhAdzVqGf",
  "key25": "CUXcGLFxwYWvgWTZavE8rges3g3EPZSqsnbr8eviHVGLeAbYMCBJs8j7cvxNBL6bNudmd7PdenyDDvmRKbPttNh",
  "key26": "2GpXCwGE3Kkt1hcqgs9m5PgmQ4c1tU2uV6YR5bFVMseXa8ovRroG82cGGEbdQyEaEc5aHP49WKom4K2bv7xR8Npn",
  "key27": "27HGSPHwM7iMmq8wroVyenT1Y3aiUo43UwXJR573TediBtC54A11Xb4JiZueaTQkbSuYpY7w8c7Ld4JCYL2VLiBL",
  "key28": "3s1EBMpnqmYJtSngGhvGbhhS7yUkbYd1b7gsFcYdFN1BvhW2CSLmCV9cnmroLJxENZWY45uVQcHZHbCEvAJZfhCZ",
  "key29": "2Eh7aVYcBRRQdKZ95j2U1NTGM4QWGcv3EwXfjD3jGDzSEQd3uLdXpavhU7ScTZV8QwPpWDx1DkYJsJKrZq7DR3LN",
  "key30": "w66beebVhP9Br91Gi7TkXr81T8UDc8vwnFPKKmWygJvmmT3XCJ3p3kbLuHaY6rA4SPXzwFLaK3t8PbQHUYsxGRv",
  "key31": "4sR4LUr2cNWmJZag3788ZSTWF6yJEYRrSqW84ZtuPRa7jecyJ28AJ3MiWfmQvfXKtBswaY4uD9gN2PCbTaQBUSNo",
  "key32": "b8SQmAxA6Sn8GBCBRfoV5UpifQvMwu2GxbGRre3RbcsmvJ5SJ4zEUmqi2Xfu7PkiGXUbNx4Wo4Dw7kbtpRP9CB6",
  "key33": "2V7m3niYuq7NGpVWnWeZGtpJ37VNCeUaRrp8ZyL8L63AWfope2SGdzu3sChhvhpzck2k62XY4oNqwqiwHvQF7Vux",
  "key34": "5tt5s5Dn5AeUEeAFRUNubhtWNQCRHG6aRsgkxxFYMZGNM6NrjyUydCuVaEtSZ4UAY5q3Dys55FwGayxyefkjuwff",
  "key35": "5cokjewPoAF3jrwUWZsn4K1FQvExC5TLNkoJjk6jDwT1mg1o87GHAPfh4ywpbAf2gpG4URvJg3Ns88d2asapSHhB",
  "key36": "66dRQhaZp1vg2zRoP3HqPz1gzKFCmEBHXXFym1cca2FfNFwQJpNxYHSkyVRUxRzhDf2DaEfFzHKTmjqUg9LwZqpk",
  "key37": "2QWXwq1m4ai9HySoBbYyj1oaCLD3uidvdhQ46fUXnfRSzYEUhTnE62CFhKif6prT9Bz8oHcTHGFWrARMJLRDwFJt",
  "key38": "B6z3hPDRZaoC5KEofuLJqLwHb6z36rvoJghMUMyvTBmxR8CR9kGLfnY4Rg6xbbyoc1sWsK5XxUzJ9TtMDp87gsf",
  "key39": "37WTRGD1oQkmx75nqR1SSPPmcYPrHwAezrvYTjt1A6DfS3xNBogYQ7Rg5t6sUfrYGFD9K4eEcTY5WaBeK7eDLHpE",
  "key40": "2JuFtfUqRJ4BTymHFuwr5un6viaUNof8yXZwqKkwE5PJhn1ZzcmuLwJpMDM4oVr5uXLpN6RhRAyJk96rFm2Sry1F",
  "key41": "2RsDCZFPEUrmVHKu1v4eFjAZf4arpaDxzdaWiUn8Pim3MD9CBQVVdVM36wMMjLDWiq1xvt1yaLH4iDuHJfWeEPcz",
  "key42": "5GgAcjp1562ojMudkZqFocc2ryhRn6gQBJaZn6fSKymwmNvLkPQgqfXeDFxc8ZYbehpzD7mRpK3JnMEXhEUsNx37",
  "key43": "2im1bUH6RgyJNQD6Gsr8zfDsDpNaLipoHMmZnRwZUuSdd31kHCgWPDGSybDbpB53mzQnVjmq9MDnAbhDntgMP1cL"
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
