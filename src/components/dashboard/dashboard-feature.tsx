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
    "3K1WwvtMHEPTzVVHiXhocmm3AEDBD6PGvG61Hb7pv1buH1LfdBPxRS6XT8VmHkstwGx6DXaGHE6t3AcHTFS1jeUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SmiWVWLiSYAE493VLPZdNCTtJsUDNK74XTQ7RMfwi9QRc5Wtf8cYpRM2hNneratgkazjc5E4YpF7bWfeKef6Rpu",
  "key1": "5gfMrzxvafzFEaxMUopKr45JkMeocDV881q7vcH8pFdUjWviKQ1AmXAeRQPDMNYe8o4PejRKFuos8wTKPdsTVjAW",
  "key2": "738msN3FZyH3TRKEQD4gdaSw995sze3p8Fi7mJLN2k39EkZea6X5AEUkq5BvpiX5ftPq5km3iVEx84AvqgcqF6x",
  "key3": "27w3mUiwoDWTAg5PsegXsTE2KiTDpb5VfL1VjhLvUTvr4cs1N5s26bvsqLJaCDLnB84DjqWvHjQQJAPaweU1JYRE",
  "key4": "2HWKi7yCTyKef2KDJGxNq2aQAZdJKockFN7x55Zhpnq2uYnodzHokG6ETviHhcEqDoBvRQwgZ7EfoDhTKX5CJ8Rd",
  "key5": "2XRTjBLkNkncRbaA6zEpjezNEe38JPbW47fLEZkb9k4gHanhsZ5AZrwqJsmF94TgZa5AbB9NEPecFChqabUTyGDh",
  "key6": "3e5w1BTsURVLMWamLBv7fnE59H2BdScZStyomzXrPkxvqReejMkbmKqrFA48C82BjPZQGfYB3mgTkK9b3KRdnPm8",
  "key7": "5nVuEPqnDJ6sAGKitjcBfDqztwnR4YfrcpoqRh2ZAS4CXQVD8uHShQ5uus2j8FwHCogwz5gLgq1QkCkn8S27dWtr",
  "key8": "suiq2UpYMctattQEpQ1UJWNQXYLquJyphybjsJeJDxb1H9rkoh11fqSnvWPtMJUmdWQZ2WRgPuGRc4L8sjumGYE",
  "key9": "5xA3oje16EUkbRML4fFYYXQKFn5pG5tbLdkFvrAKprN5g6peBkSEkgsJ8hhHedJrDN6C78sEnqWs9JsU5iCW4Ftb",
  "key10": "bLaFAUhBevN9CfrJh61sns5QmEK5wXxksYCHv2x4dAehKHjRavWgJDETcHKQdAGRTRYMCjGLYLhx6YR3swYKLBD",
  "key11": "SWkazb8LcdDWBmmzjzM1aVzyNhCC7mhUULypg2H4a6PY3aUEohWS1xhhg38irpvgheTrk17ztdZ9DeixEAZ18Qy",
  "key12": "4sv2FKF1iGacBUwWYQy1ZwBdHkf73u93kiiHtoc2ABPFAoF98vGFUXnWzCJPxymyUiiMKa7CLsJo7WKv1Q47iXb6",
  "key13": "5LAUHowkYSYrbMgYap3gPvcFYCcdkK7CDcimtSPgCjmBxHUa1spm3sH5h9YBbVCz6Xrj3xxmSudYqWjwjeTycv43",
  "key14": "4iFrz6zxJEyL9TKvAaMSZssRjXcX5n3gVXr3cjvkBxPvgQY5GuFb2N75He4XhYhYPh2NUNfrxg4Zuem1DNLQ6svf",
  "key15": "635GKMtHx4aJTRnzT6bmpUs7PohLioJG4i6QzGRvv9qsHgvXdivMKHUQZMkJRd1h4zUuhLoABbfoeBx1zKLr2rKG",
  "key16": "61VDBozzUenyKKjpVebfSYRRRTGdjhaVS62srRMZPwDiTguBQhqDJphc99KCoHZn6XPoys3LCjSX7nwgGd2zzrmQ",
  "key17": "5it8us4srCqwAVtxa24FkaqsStXYj6Tvs2JxTwHPYM9L94chmWrRWMAiiN8LJNS6VQeeu9iFSwneezM9zx5xd44g",
  "key18": "4beBECC6eDVAEnaZsXMaDdsNnqKQJBUS5jH7ykLXvfLTMouc7smFocbkUcPeExVVq1iVBPq7bNx5r9TwWu7hxtyY",
  "key19": "S8X1KnWe98rhHHKNR8syJUj7JSnyffPsYBxUGUcmSrHgqvK1khiZ7A2zYu6tQZ4K1B1HMZA4RiyeGyWhd3FJWPT",
  "key20": "5V8kScqcdpuwPsE1LWumt4VKPqdZnpzdXkUqKjtwGqmRuhGB5QgzhcvpbxQ7f16PDWf9SbNDUAjN55p7Sfp8JMGi",
  "key21": "32WjyoLVGCKszKAh7cfMtYs4qdn1ee9K7k5aTqMcUWMWJsbL5UzpRcdwnMq1Xr97nKYmmNXaVnJV28CmqWiymJBm",
  "key22": "2CMGzhGcdZ86FHjmuMFdhJRDTHsWwku8bJvcH4Je9yPJQtg2rmha8ESkfy62DrjmehVGPcCzBv7LsDhDrKcqpJbz",
  "key23": "4796MdGojDDHRpR2KPZ7vdjPY9U6tqyAqCT1HBEXQRwFCdT4jZKs7xaE4QdUQie6mk9GdtcGDUbozbzghkXnZ6xo",
  "key24": "27EZ88ReF8Pemjntq1Ar62ncD1dAVtKsKDCUH4pXfN2v27rKG6h2Pjf8ZMngrBYUTi4XRYszyuBo8EsaVVecZYhN",
  "key25": "4idvR5maAXokrZZuEEvL47XuSokbtjLWQFMrCKKLKm2zhuhGfmeVQ6aeJRpnGuBSW1auq5RTVRi32AFZ4sAiyDgS",
  "key26": "5TdXK3K6r8FmLybdkVcnEJYau9kjXwAuAJh7Dv2sZBCMEBmY7PfA7xg2iGSGXCxoPuhs7y7Lo2fg1tgUyapL8H83",
  "key27": "5x1Rnf2tztfLk7ZMjvUSKgBApKEm4FMeKmFDQpGvDUsAZPzwAJgb9GGEKzar2kBjVGYCtrkrUSjveda8A7xhjYhs"
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
