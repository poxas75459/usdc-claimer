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
    "2vjYUSKDaEyy6rcd1cHnEzGcUZnDnGTVSgwTjYGkMrwNRgc8YNeomPRbk8m4LMRzyGNQSXGLXLBc8Kj5uvT9Dz6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tXay6CBN2KCPWmrbVt4MB3mbBj6qtS92imZsCoXgBbounK1ccdcFjLErcfcv24iAQHDwfwyTUEawFkPF1pB6BGz",
  "key1": "3cQibuA1MxktXYcpjYuSyHkjj69SdvpwsK69pmb8zEPARm32n7mHajiBwkCEiuxVHXCK2r6NaaGQo8cdUhpBTuQU",
  "key2": "3MVz7vgwe2d2wGv8XpSEeEX7rycWBNfhGG3NmuLmneuKuy6u2xFivqnvDwyHYWcZqqzF3yEH8agCrbTvxJaENFNg",
  "key3": "NMPgQp18b5jtKUvLcpjMfBjZdrskDdXvBBrSiHtizerH832SGsomW5jxxZhR2NwwPEtZk66befyBH1LbgWBsK9B",
  "key4": "4UWr65BHmmdBRZi5iKXtS4hBLY8Uef29mj6P6kJwgCQXPgkgXZfZW8wfvwrH36ZxFFEFSN5oqmJfK38gnMpefHzv",
  "key5": "4Lxsxk28hrz4fZtLMR3zgGaMRj727qY4VXTzgPUoK73F95uWdkwpBAfKun9MfETKYQ4dFKNKhPpkQFk77RRYPLqq",
  "key6": "21WZBwD1f7KpSywPsQsFKkohyrzkE6BX65W8yZmA4vRgRWAuVVnJyKo41ytyZM2pwKxCC3gnZ3cfmH5xac2GjQFP",
  "key7": "z8WHnfWoqwk1uXTyPFcnCWhn2SSjHXzpYMymVLGRHgTD7BdBtYkHVZEbtTetiZsjFhPZAwP3trbhBFScctYfMZm",
  "key8": "YpWPSUuMaaXTwW6iEneb2AzV8BUED5jHsMDrqC5wrXM1NPLnkNHhqzhHgqyWD5oAooAFNEfghdkZjJTJUZrjiyE",
  "key9": "2nNi7j7HX3eYV8t4DBzm9qzGVPCa5C5gvCDrG5JoZWvXKKgABdS3tJGwR2zQY7RAjRiLTw2i1tRAhUoDt1ozw7dK",
  "key10": "8r79p8V74FcT3LoCMtntQVowhP5RNVzQLttSTYuSGT5KDGDmMjK947GWAs7vshAdYsYNZAfveCGNrWBCfKvRpQd",
  "key11": "2J43RUdo7F3AozEHHkDZuiG8fY2hPUije7ATqzFXMSrGPQu7qNrk382ZrPfzwgj9oyRY5v3Ycx9GztJqpdRr8Guh",
  "key12": "qBi8kapEzstC2tmF1PaDPK3f31Zu6QdMQd7okkK7Fm9vbfCQXiKqnLNYULyfJWB55n4U8XktpLs54vy6gsHXtg2",
  "key13": "Qsy4g1jcxQT1kRiRR3hJUQ9LeMVJoWZVukNzFMXvWF8KnRc1KwYrBsu6sUR2AC2XCtux8RHVMUFmHs6cwsmGCQU",
  "key14": "52CG75tYbAggMhmYWAKRLvqy1LBczEdPKpWsZxxNHndm3DFa3MiowPgQWgXWH5VJK4af1ydh4kZ6VbEcgqkjhW7E",
  "key15": "4qWLcY7H92zWVGoXZCE3fWFToUndrjornovY8wZB9YFsNvFAposbYunH4npqu3B3xE2SgwDNojm9rFhqKGannsWx",
  "key16": "2raR2XHRoxmC468N3FbfWxKgFthQkiZgLq1oAGY4389whGmWimEDTNErFtqLcTD39Bd81sUm18WuEnX16pGFbBPc",
  "key17": "58oGTBLbibLrRg4HYkajwiYatwHdmNttCGi42XhzRvYJ1Y5Gs4ZxHyx8kPFeobr6Y2bJqkPnpU1ZnhWJ4xLQwT8G",
  "key18": "hNWZh73JMKUuUqY7ZPah8aakdDyDbyuGkY5RufJJNjeYHt8SepgrQJLndSDRZ19HaHGJ8RZmTdRRr29LfLyky8N",
  "key19": "BdVmncTWQTMbb6f7ij7L7eZS1ihkDi3wa2RxZ5NVvyrfdFkXqp76f96nkEL55s9aKEYuZV3R8YNdiT61kNYLPAb",
  "key20": "3tVEX7m7moyXernsErqoS2XkBusr4BwhpTKy7ajFXZFqzEbFbkvRokDcUCfn7KhPBNLXwtjcRZLCudftxbYUmF7Z",
  "key21": "4Uw6sax7joQoFCUNaMq2qwoFWqfp6UnwdfVweU4P8WAa7V2bjg6wB23WhxUrxDgRZWyGQjhyda5tDKyTEHPv957T",
  "key22": "5KRe3Qy3JsVF1nhXUGoCjK8eq13YyYCWpQjhF7QAbncu3cuerBNT5RAtR492XLjoemDhurApcAbxHdpHhJ5FqBp6",
  "key23": "2Yy5fVMWP6DrfdVNsP3pRfJxQPBq2pKV42L4rzDbJEyuc8P6xMRDgkViXVSUqG75UzeT8GPAY1PCwyQkYqLSQtnx",
  "key24": "3qAuuH6SF7mmpuFuN5sL84tLcB5mCP5DvoCAaj1dzfaTG2XAw8e9PVb5JT1iiXXQYjzcDEqa8PsAoErCuMZeUzCT",
  "key25": "36c1F1ZR5pWcBevzd1RKhVReWk21ChBkSwjKFyw3qENXBa4pJ2Uzth2maJnrUXYqNb5MJbJ9Qy8qJARhsZt2QoJ9"
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
