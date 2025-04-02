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
    "2RkMhka9MisLfyqXASScL5qCia811vLFDJjtuqSzeoWn4wF8YJj5NGYgdCsKiVbMTZR2NehbgSzmCbgRcKy62tfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ffAMuhCJRcfXpwrikh5NwzLgrsS3c7na25a3d8QMXRkRzBuo1F3qPiXMtu8AsxqKZ4TNXoUYWPtkqqgobZNoU1v",
  "key1": "2N8n17A8CkXB5BiNGfFDviE3fHbUeM43WYmRL19uL9sG4ER2iTnoWHjHDuFz3MbkTCuQp9tAaZRQRZQmGHa3M9fe",
  "key2": "5GJNBpxsDKa5gWDrWFkWrqLEuTfurmNCibbQoCPrddJgWhbvX5hxVTDaHuR8kvsc2xjPFNNJGBu3BcAxeRux524S",
  "key3": "5ucQBFqeaSEqGRFLyFm7iWX3A6brwmH4gjVKAkSL8XnQdBxm419ssC1yEj4cFVzu7L65wuDdt9MW5ANay7Mw8zch",
  "key4": "4SvdRLRuevDV77k9W9UoNjv9VSkjzEdFwrd8PWSbx6jNVKJwcj3r83MCpZ9fP8oRrm987FskNtGwPwnFGhFhiSZf",
  "key5": "4AbzLpBmabvxTQ3SJGtfHz9pMP9DYjAHdp2H7FcnSEXjZzi8vSXt5jmsVkBUwHcC8WFB3UgBTWEKrkAN7MkcxKXc",
  "key6": "5nfY2riQn2mVWXcK2pRJNSbj3YaGHUgQZ2rUs43ezt36QxqKwkuNGGiyH6qcS8rSW2YLAWfVLthKxNERao21CnVG",
  "key7": "26vdLdVHWnLkyqgrtWSpaYNyZTJJV9zVGoH9kz6mBQFNhY7EECyMZoUr8PcQJcjbxxioifWa44G4YBzDgeH4gRXc",
  "key8": "4GPNNyCWmX22StpPngqBSxEpLChhPf64PB8wxNpZJcywC7nwB9iHU2DHsTZPvtuSN3A3M4ziqKghmvwdJiK5XYeD",
  "key9": "4ZZehsBq8VmDyWXByuPcDXTA5Ufo9DGcNFgUi7AyEQToN8Ea9Hiy7G12nTB1cbZ4gkvBxv86rUDeAsybtEdJzDm3",
  "key10": "L7hEZvVJVFVd3BadZHUM8KWPSAKEfg2gRwmD7rr1NuYjEG3Ja16scB9fcG2p2gatoFCbV4RR7rr1CXUvwGK686c",
  "key11": "4Pb6JrjPvUr4HstAyMXYandbq1fTLixw8HAi1vQ2SRfmf2VVto72BV3mWFh2oL6h7EcCQYNVhSwNaT6ywj9xuuPZ",
  "key12": "4YmR5QZytXQr7vn2doAiVD8AQCcFis76G6bX7qbDGRu1bLdkvptXEB4F1UGvq7Uzsjw7rcfF2EGoQpuu37QU87DS",
  "key13": "5QrJQhwCFWzSWmR6pzZRTwLDZDgXghoz1RnwNhYT8KSVK9fbGRTL568R79znew4RQ484rjtvNEHA6oPaxjChnnGk",
  "key14": "51z4oS95kW6D6hEiB2ZcpudGgDVdWkqL6JhwmzbaEN7URSy5dT7hipg8zoSGtgP3KBrWViZB8A27BJhkmWfTXrBQ",
  "key15": "2faF1ZU3R5odar26htA8jLhnf5Q1HwV2tSYz3fU2CJJddnQE7gFk6qDXTMcfRYbXtr8uzP7jF5t9WqFR9w7PvQYU",
  "key16": "2UMoocDAuv3hfy1if1vrYuzD2VD8YtvecHKGpddwg8LRgwLGB9vRu39BJrzxtoiTM9Uryk5HqKq8e1RdRLYCiDp4",
  "key17": "4sZjMaLqwmCJs8Axt2LugYT7Uj4pTVKyi3vFYL46oxHVCcTW1Um39j3qhg1ShfiAFupEN3K7EmpmwB66ta3zqP9G",
  "key18": "5MEYpxZXnmy1JAqg7sZuTeqmB2qHxo2hMjeaQsmfGkMCBwSPYV4FUgPvAK1AAPhjpXbsA9wKUTdMiCDTnZn9tsGJ",
  "key19": "2Rw37uMFhZvnqPVCuzJitFcSydrUY7BSw6FqNb4VrNkxkJModx1W8SsfgGkmqnN8zE5j4fWE557cybSJyGr72vzY",
  "key20": "5rnA1eJQndxA3sAxVtzM6eVCLWqtv6eqg61dENY6LHmUoX8j2eqn7sGUFe8wpAGpDeJPZMtNtmRpeBWUBG9vbczW",
  "key21": "81yzpAoK4AsVL3m1n72GNbqw8aLgjRys4bVMAKEiv7DQ6rBz8HdfsEH4zU47RKBqd8AG7vjbufwMQbiKDFnXNRQ",
  "key22": "ihEx6Zek6CKqa52Ycgc7W36ZxagcBAWh6dxhgvShDDQkkkrKrafP3T1ssrkxP5QQgf6B69NTrv2MHv5ojeP2b7b",
  "key23": "3NN1NU6GmZLrcM3TE8E68fDx9UjQR8YYfzbdzx8FBWwdnGXqXVqv1ReY1XJa7988WUn33rP2oCVZ7JNtFfGCYcve",
  "key24": "Ubj5PEkPU3iCyBU6GUZiqf8ThDPHr6yTMVsxEYpB8uwHfGJAhT7U1tMvCtw5d7sVW1kDrFUX948w5u3ivvCnzYd",
  "key25": "5FoUdnaVCncJmJmUfEeSNRQ9kw4CkKZkAFxe4Qi4RtgYVoP64zX2WZT4F5iXnpocfK2pUoddy5FVuBeYT3wjtjLf",
  "key26": "4bVYsApiZtDHUSnnQs7bwhsBEKzzYbc7SJYzYx5mR2dm77ZEaCtAQ89LkujjZ7x6BzafRy4Wv7Up8EVMkxPo9smA",
  "key27": "2e6CF8dN5pHTkaJNXfJH8safLiqhNtLwkNEcm4MSx6WQENkhYeYcKD8PiDKUgb6bd3NYz5v3nhsjU2zZ934VBX5w",
  "key28": "5mmQbiXMrWmMeEZZJ5n8uBuxyyQFGZ2Fesf43VvrJGMfpzcj9A3DzAmfKC9mcwxdZmNaFm1ZDuuR8JomJro2vAEB",
  "key29": "4hSwPE4oiyktcyRRVmAUUZHjuXqUPs9ZZSfcYGVbupUsPyW37B4pi9c86L5B41Fm4ks3NdYHKtu4QvPgDyHAJAHd",
  "key30": "5uax7yGRJqzUkLUGNGVuMLq5DmaWo6RmjKiKVNDK7fpL6RskTAzr16LQUv7cSrtHusKoVdGAJaUpBCZwD3SBG8Mg",
  "key31": "2Y1WEGnMVEPHfStoz4RB5tS6kM4n8GyNvMaESJYPkfJg1koHQUfkf8zenh9jxaGbyDJarzS3aoY4CC57eYAaK8Rx",
  "key32": "49HHExKG6m9itvZsqKyaKLu8iPeKgSuUN2ELxtambDJH4qgHoBVHBa94SQs3qStAfmN9o9hmPNA5LFZjC681t5ui",
  "key33": "273UeDQckzD6DfR59AFW7Uzs2kUQ4ynTqGmXFZFBmLDHDHc9pAUyM9PXMUdqnNeudbg5Qo4RfdJWP54m8Gkip4Bk",
  "key34": "8i3YVTG9ULoHv7xAMQEVZbyEBKZ77CduvbY9HMnhhM5eEcMP3RixdvHPS7cgh7QbKegdsrH7cwGz267XwqaDSoV",
  "key35": "4iuWiaqTH1ETFoHnnjMCH21cv42mVj7g9DMLqe5M3nGL3SKR12iPkqCPEebcbWsokrXryUx2BTTg6shpSp42fcx"
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
