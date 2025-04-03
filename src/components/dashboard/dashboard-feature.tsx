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
    "2cSQY9MwkFNqz7mBcG5QfZzup8C5Wb5BzmUBgbyhqQEiBaWiCpZ59nTyB8TJCtMu7mQHFbAX5FLewKp7s6mFE2xj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZxcXh1eM8tFxB6LZBZEMzTUmgHZz1f7EWkRHfKXiNMxgmDwqfx4aM7wKBfDkS1mEzGpLD3cq5vniFznCKFqrENd",
  "key1": "4rLjoAkJeWb9qoweC5yH5a8NNj9W65FiqnM3419WWfTymdzaTzk6BCzQYe9Tnon2ec7xBrkfXz1b4AQdkBiR2Ufu",
  "key2": "496fBq35KXprhPqXZqbdMEmU5jVpm68StE2ZrB2DVd2GzzD5QpXksRkR9cEqFUXSxTxC1RJS4Wyb5tkE72sCa5JU",
  "key3": "35N59sZCL8tZiXMcVYaASQ4r2zJ41qgrQLTy8bRrzG7w8kqTj94bdAGnncUMKBNZcVKTEvusTdXtcyUDEfYcFQdn",
  "key4": "3zAwcSrxp3iHFrwZwj3RhFiYrMqcVczFDra42L8h7z2njy7wa9dPjVfxPAEtAhCpx1LMnNcLEtaST8oiAHhZB9P2",
  "key5": "47nZTnyc4vG4xXiUaFHtkojh3pvc2fAjGiADrzyhqncoTKEjMrch3TXpRjnLUuA97KkNMGnQE5g7NuJ3TiYf3fJp",
  "key6": "5nLyCQwDKV9T76ZWa8XSgxjLNqWARFnW4UHYSnbpdNxohEhXDNpYJUHoEewViNV2YRMFN5aLxL7VBDs8dvddPkUW",
  "key7": "sviMFYEzGCPZfzVg6SX7n7Zqh7stuFjLxPser4z5kTXKvSGdiQJK4u2aJYPJPQ7QG1dNeRzUFpztNvUhS42Chnq",
  "key8": "eBCVd65tzHrodGPk2PWSaZ3xWHcw51Nzk6NPrGTqH4dCMhpYir4PiJSxtynjLQfk2JvJVUf9yLrfAXit1TyLPQz",
  "key9": "3JkiMtwTGGBqJtDWnVNFqr8Y5raQWBUpBrHoZ5TahKXh94munxZJtBnuW55rbD2NcF7LXNCzyYexPJGWVF2dv3rC",
  "key10": "536fqow2W8cxp12MsEiXxT5MaocH3XSFEG7RxBHiWQJ5CXcxuzbwmJS4ujsEYz4DyboAm2z9PBWvckviyuWJFR2H",
  "key11": "2ZL6R3mkga8PuviXJSpgYoLQAvA9bStvEmj2zFmCVJFU3conVdQZxsJfZ3tRvGjZkvSKQF7uMdKjxMQjajzCBVs",
  "key12": "2G42TX8itvGfCNsVPkFKPTAP18KJDMNCNSPX2f3PsoonaVW5eHUkeMQi7RQ1UQMpPZTGrjWApVJVMibCncE9ASNX",
  "key13": "4TZ2Gxogwa8K8DrG4HrLTg9TMkWg2z8w8uRgfJ7y5fuzzTDj15yH8kFHZQmjSdyXQB1My8q3C1bx1TENxcvkBkDs",
  "key14": "3nyQF3guZVoZwyvFhxYRoCPomSJoMm757wRfqqXpg5pmwxibJ4UG6DbbYr8yqky6j1pUBghrxjqCRVtUhfkTxHUz",
  "key15": "4cu9HJma8Nio2Pw5L8V1SxEPf2ZkMjAAKUBXQ6M7juWzYUFobjRSNoCMU5vXW7hSsktce8xQo3FbTzUkDDqHzigC",
  "key16": "4zDwtxQswCA5qCUggGLcvprxo8YojT5B5AeuUwvwz9cMsbcfh3NdrsCRh9XR7qV1VLpgcUKtQKmHN7fNydncVTQx",
  "key17": "3enCKuuxq7v8u9XeApFTnG3QGJ8WNn26Z72KhCnYYPQEaTGU3gm8xdh5CQK5T3pMcSZ5paqyTqAHRujGhs9WhBuU",
  "key18": "5cUw1suxr23qGzPTcRrNqaD97cSoQ5AfPqFgEcz2zCaAFbrwUy41jALT2uGJQNwapdiNNziuugjD8DPLfPfpimNh",
  "key19": "4fnciWD1tNjpAvgxqWtM2uCvpMMj1w3HuaMgAFexxbpEyZtcp4uxmmAQ5oyF1g1bMT7yYzCDcRRttHZpTSH66SKR",
  "key20": "4ym8sUx744FHbVT3UuUGqcycWmxDmWkTm81gYXYc2L8ReDiNE2wESTn6cjRcdBkJDGccFcsSYeADxtCYpX83nJEf",
  "key21": "2J5AFNJLPtEEff13rJdgBhNxNWY5UWcxu9rSBfSsfjv7SxW42ikbD1VbtSVduTW1yuoUG5uUar9jMiXZzgaVNN2i",
  "key22": "BDpPpDFLjdAoDgfHxbX69qHYqBmg4U8UPeU7G5TELdWX9VzrQWqh6rcGXj3ziDSuvAykENnt8nMv5omVCQonLnQ",
  "key23": "2Eu7WUysiD1vUi7poun6NvYSnoLwegCe4HRHQuxj6FRcRrCcKF8MwNXLnGsRfYGm4gKAJk3s4TxaWR3JrnyNaesk",
  "key24": "2tm9YLLZ36xJEXczbbRj5PR5LYE3LbikTDRZFUiQ5MpMZ7hNGX9JXXwatFwFN8wC1AjpwV1ideDaRN42JJN4w7Hp",
  "key25": "2k1XyKjnLnjncnoJN7c8kTCrAmjpbJXkxbxL5PWuPRbevxRiSdwhwNc1YjujuJo9aq2sLi6UjFisGGogch3abmc9",
  "key26": "5RbzvCzsQwegfi3LYEMRBU2vbpAmh279MVz4EJ5AEM8AZQpN4V5gckkWoCYY5BXPPsRuqphtBkXgZja7f1DBg6Rp",
  "key27": "2qicdH91nP1gWMKUmPjmSaDrfN9t6wZrQLXmvYRhxdLQqDanGCLQr3hnViFXM8Fm13H2D5xp9yvF8igX8hErE3rZ"
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
