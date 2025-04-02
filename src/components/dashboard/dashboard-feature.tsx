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
    "4FakmmmCYX5wmNDfyogrtzssYDP6bqUbEGdPNoJpCYqEnCohVMTAwMifPLitMR9WADR4ZCGzSUem64NjDrc2yxFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ytpDSmhMWoCECCPi1AWDaPpsc47Cwe6HiLTVXacKx36R4MRPFy1SfUFvA7zy4FH7z1jTZ1AbtWtpE8cuybzgyb4",
  "key1": "3MCRD84CsvZaPo4XBnXS2dYZezZCuYPtrjcSZCzVVwRiXBHpsd6Bf1K4V2pWfQD7XyLiZkggnvAGnveiTFS3Zeix",
  "key2": "njv1DE2vgKNpBPsCKdetCeonS86HJQLonP9yf6Py5UChqVfQAxwmipSVwm3M3rNtRpf68UUGf22S4XkD9CzHUSU",
  "key3": "5MaVK6VXUtarjkdrqvRfRDAwTL1mm7CoPeWQivdTpBvmDcj7LvXsaGWPsLGgaeMdR2UuR9wm3Ty8nqFtBeTcWYZk",
  "key4": "3jybnmphkp2e5731cAZMHPJDvFkESwnfhZSuWegKrFEtsiTx3jDZwAVcEfu9CJAYhVFBPWUnXQJ7KtJWRPonKuLg",
  "key5": "63yzAxKhQFPh9tsiVtNxMYXbNrJeQXXtzEHYnMdwkgKQuwFZCpRKXJDviTaPSaNLngv5dkG5JaGWXAGbAr9tL7Xd",
  "key6": "52UvvTzbTwFrNR3TxpfUbrktFqCT7wKHb1pan9FLXzAaYqETECx9KVJNqXcm3pLND3CGQkt8eKMyAdbdufmf5tYV",
  "key7": "3qNhsvPSNg6CwHtRob7MvXPAU36SRZv5k9coQaVNx3MwRgVsyT9SnJVeETEVx9J6xT2ZoCcJREdgTUunHfDDUMhx",
  "key8": "BveNUbePC9oz21WZbjhmY3gbgxt3HmPFH3JUFkkhZx9qrZsAjEeUMBuvQMiU5M3WgnabuvXRVqctfZ8NEn6C7kv",
  "key9": "3UV3TPQq1hLCMfPMscqGfbn4kk6LT1dx2sSuGv32gAQGhz6Wxsgp2YXy6ekeVnfpPmXRUVCT8afKJibdZ95cx8b3",
  "key10": "5WX28f7F9rUoo4uCESv2JjgEyo1KDUxBGb8giomKYScaFuSf8sa1krdsiAnRStT2SuyFZDeCFMYuYKKHivJoHMHr",
  "key11": "3jhsvz9bLrpimxeK7hrbutqZskp7qcErFkMycCXT7Zi92cTg7g6vTRGJLbFPxveFSuQJ6CGqWzfvKuycgEiwkpCR",
  "key12": "5y5WkixxdYiSbpzVYMnxTbWfLJmW5VMwod2f1SvEpG6B5hRQ7b3UQq5BM3quAAQbB1y18EVaaL5UJ56ns5tKgv1D",
  "key13": "61L1feYCj3vdTFT8o7cMsRxyKMrim3WkpRtMbAN6i6VAXTPkJZH6FmmMAT7dwNaKoHdT5ZHyC2RnxcMSUvhwyC7J",
  "key14": "4bcRtoeJR9PjJd4rmyMjc4DqrR8jkTFJAoFChTbz5Jds7Da2fNNoGCtUTyid9AhQEPss13BqmRGxY7AXGv7TGRqH",
  "key15": "4oyjwgUwWXY4X5Uku3Kf2EHPSJcPVFEeeotQA5rgNtxuJ5WLZ446a9YJiBn4kv49t5X8ZgJPS2ageVodjcvNp3Lh",
  "key16": "NFGdgNo5JPhU1XJChAGZm1Z7Nekid8KFConWcKjPMHtgsczaBPZ6Q7mEnF3GBoBZjh89qBfdgGdGdmQyeYTL1hf",
  "key17": "4WASYk8GnSFLgYa3d9ebucnTQmRGKxMpFA8cPeZHS25Tg9F9FYJgYGUPP4c4xLyUdVyvRVXPpMN2WnxAA4my7moF",
  "key18": "GDissW85Zd6kUXV84i9CMKZ5XoprSTVvay6ZixEPb2bxAABT4HNHFT1F5kfXZiKBQaE44KxtozksrFKUh5PJggv",
  "key19": "25he8XtVb5KKF1THksEGpkQ6QhQK1QqPDCR7hhtRbyK6dc4ygz4oG1DBosbSsETBjvjSk3LaBfyzpsHY9ffRYsqe",
  "key20": "2wtfA1tvyi3Ddv2sKpoegFjvrwxmisBgVqxBq3xhFAgYQGsmbeC3ihLCQfK5BnuJoYkKchgnouC5Hw4eZ25BaAYk",
  "key21": "2GfkzZZGYSEh7CEudpGiTntEZVBtU1MNAMib6TcTe1Udt29GUs4EZGqwTFUgzz9C4ZUgfbW2MhwJCS7w7ao11GR8",
  "key22": "4g1vFLkTz5CAWYYfRRH38uaqQM5X2aUkmTAKhZY3kBposWKuZMRBfx1XaVb9fjExCtDagZRAbXbf7jbpoBieDJu7",
  "key23": "5wESob8MDdLfxjxbpv3qTEhr4Kcqu6YziJMNmHZWogZ3wfqwDswb5fssydXrPw6HbZNrXSD2PGe3Sic4EnUy6xjt",
  "key24": "5RUm5WC48s643bFBvcNcSAfCY38e7TCkcsfuNKUNagXq5j2E5cZw73a1iVB2qsPRFXU9nBb5FqzkeXLyN12yrMmh",
  "key25": "334otfj4yVYqFvML6hEe3Z5sXvBXfkUTKEwT2XFEs683qdZH8mxMsnELKnHb5yoy4K6Gmn9rzHGnBc17mRUAS7Jj",
  "key26": "64tYkHfL4FrA1yQqiwXvMPwXS8VrhKxPvWdqMYnNgD41ivj95E7waHCeRHVk3gZVxztMQQp9fb3WcKhZGH8d2xE9",
  "key27": "2vtoMGiVB7qhbEnpJej8Ec6ddFq1PHBUm8Z3i9c48MyWMchNXo1AjvEZy8PRxMGJYj12Pc5FVDzMQAgZfkkZGsrB",
  "key28": "2pipsm95PedNX7PvURYAPn47LhQ32qFmGJJugSiZr1LoRr5RtFwznR49Y8FeH3vcaPLRwY9BNBBWK7qkP5S9wZ8L",
  "key29": "4gddUYmzMZfePDKXSFURCRGCwEuAL2AiSuMMdx11BXr5DEfEzoP29zfZVQ7ijctTu5FzSexXHkJdmvsrqie24Gcd",
  "key30": "3vEGyyqy7CAW2xAXocUZf49ER6jJbEJDqDqotHBn7MUPriGa5g5oEZQymP1eSvLhB2CqJJuw2JWhcfkiAdiGeoej",
  "key31": "5s28ZLhU9eMDjxStEezXhpKgnsm5ZVwVS541gwjWJcpgDFS6PeCxRmts23Mvzgo2jVSXMCxeZ1iJjkXAmBnmk7C2",
  "key32": "3Swjb9f2WrHgRNM3PgLq4s3g8EFVNMRYrwp3KmsTafGzPQ7GFc7tKmVGfyvXXPvXHc8ebzy6UTWVYkWBRmvHCmEZ",
  "key33": "5fMigiG8FMcJYsUyhy1K3Q8QNUEchjW1v65zVbJETA4p5KJzLTtCgQxUKNHqui7nXhPX4CJaV6TZLMdNUpRRxEVY"
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
