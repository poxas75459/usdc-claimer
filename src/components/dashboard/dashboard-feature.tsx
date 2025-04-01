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
    "5D2GAz1mfhu5Ks3LonyJR8nCTWNoLhbTuQKcwCycGAMW4YTkoFFhcQCzcnjpNGGDGVfzdmonusAYWyKfQWh5VvGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62afk5P42GVkmkibNtjLToTAb16wo1izB66UMVZ5E1kpmpWGCyBqmLFGFvaFeeVabm7Xw7uSsFqWj4fXHWJMRfMA",
  "key1": "5gPRJ9eaqiqc9Wt6CZ7x5KwP7bGBgvdTumXXs7z47C2SmjZdxwendiz5Tb8o6SWNHr4v6jWSRgew5UuHysxW1fSQ",
  "key2": "3GJFbjfNFxVjNnCTa93hmqSnasuPk97LnUTmDZRiDL3ga57hK7NDuQAjHYePQKg82kkmPVSZfYvKRRZcXW8Lb7jc",
  "key3": "2ynJbTqJnqXTKYReH711aEU3wE7mj1U5honnxNNsgZ5yFRVxTEfQPAriUjsaPUUEPz47T6yqVatRto7G2cAMzkn2",
  "key4": "2UQ2seL4jrLPVk2BsXyxYPtxspa2e9WNXAbVNNrVDsyB71nb3Ap8j4FPyxSgTkyrZTz798WxbkrKYvkzrMfjccBj",
  "key5": "351b4mn1YL6o1ena4v4UP45YnhcXSwogZjKc53YFzyfJDafjcAeUPrV5L9Y4KV95T2XbreHc86x4pZ3RbGBhi6GG",
  "key6": "5YrzMhaSwM2xV31NzrYiivrDtRDAiMZ58B7zwhBm6Q1nW6Y6CY4B3Aii1WRe8jp4vheXHm1PqTpG3YJux9nS3X5c",
  "key7": "3JNVH2ApGdYBr7LPcTLYUAL6BqsX5DJ62sHfJmRCZiosqPbheu45pL99atszHPsBvRE6oNMfnHdUmAHsevbJNHdc",
  "key8": "5v77oJmKUkGhFLRghmPXjfCSZ7Jswn43uXKJWfrMEfMfQCan968MGzUgzbipDxAq6AkcbY5QvAJmnZNfCJ8fQ2PG",
  "key9": "zWvtHSmJTpwpRrbLFaVRFKTfvstC4Qrc7TpNwUVAGmjof5CkfbQvf6HvxQYYC6AyzLTe5LrjLHayNcLjRVpeuwg",
  "key10": "5c7ctX9MwGWQeCP4DSwS78zKAyavZSSamkK3WkgKhfDR5zLdbaxfnXisTVXCFLraopUKax4GXKsoLSDjHbpriqjc",
  "key11": "3zq2L4Hfp8eSj8Wdwezyo23ByyDnL5kQ3kqD7kdBFEXdaAkLtz2P5N6fMZHVzQQT8AMNniT9Wze9GYuG61qeoCcv",
  "key12": "5V3eNP9sQjwgtKpEpRgztdhsbT7UYTfd5zmQtWzETou5aifHk3pqNTyS6tVHkudWeUU8txua4krthwuJw1cksFzr",
  "key13": "P1L6LnPAvKfq9XZPT8V3hAUJM6UELWimbMrfCZUg8yh2AkaEjSy8Kd3LTJ53wSAkDKDSNELW7r7ReCftoiixSYV",
  "key14": "5AqUQBZyzzCERCcXvaxgtAMfCSw1GX5ctt3APWUCD4NbgcXqhLCgpWLe5daPgbCZi1Eri6k8XARFoCwEzBUHqHJc",
  "key15": "wAV9Rjehs9TrxW551GFD5MmeTKGej2qRVcadqUgUi3Ak1RVVyVrELc6NiP1RnoN6hLJUB7MtGL2Zto6WZQAw75g",
  "key16": "4XBEMMVGb9stBqqTm4gj6nG4ctZWHUM8fn25V1M9GUrqioFQjGXamA3MFcWSF2iVPAR46ihyD7k8MDfxZVNKvHjS",
  "key17": "p6dZr1jmV4hPSAqsw7N6uSjmUGYQSvpVxwTiFkKLpfb5jZ6PjDKyh5ct7nmtguh6rGhyVqU7EGMzwGsUSLzoziE",
  "key18": "3fwYNM4peCCaCn6G4gEwjLTaYfDjMiFHxtKkkk1QDpF2vodU3HS13LwSX6pfsHgCm1bxoq1Vm1rHcjxTqDrdAfDw",
  "key19": "45NuJxwVX2o2bA8d9Ay1PHSenBjDh6V7RsAEWkJcovp9rkpKC5vmY6H6p5LnC7DnT6U6jS6LYAMW8qbAYi8NNNnU",
  "key20": "4Yt3SPiDbi613nq1jUHdofzsXLhj1d2sTPeroy458aX4385T5gSLPAX8TGvoK8VPax6kXyBqQBEMy5HGZry3s8GC",
  "key21": "3re6jbJmTjo9vep6QZ2GPAjTimQ38pnxvfNZNxNN2bjsGxfSyiRhQnSRbNX6e9Lr1YwnyiAH6iSnBFWH3ZnvbjpJ",
  "key22": "3kefXFhG5FtfmguSgmq53zgdAUPvFzLq9enxSGMT2Mu7PZgDw5i2ZJj9YyGEUgFkx9wgJWRLVzP1QJqsuupYVQGW",
  "key23": "5AYy5A81A95iESyFY2R4FeNdo2KXBznHX3V2w5J5JbSp42QXRcwbh4gttthvkXCChzAc5fVGAb78MtBatWNnDbdZ",
  "key24": "4PSAhzex2noYDwnr5fGuQtrYDAo5gGBy198yzFWcAJMYnX5e7vmcvNJvoCA1p6G8JVrvG4zPe72vEbVTXtAuXQ1i"
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
