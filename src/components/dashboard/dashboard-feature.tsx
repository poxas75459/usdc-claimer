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
    "4FAcSWGVjhGbnkr9KuDJGN881zxvzYeQ2Kp6xNKZUkBqxdAwbQELViBQ11ifKDQkBFRjjw7RfiTiwKbKeJqSYvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GcZZJUX8W96RTNNjFAr6qEc6vB6ccJSfKJ63NJ4oPquvPm5XhLfHHeUedqENMGowhrw5xFTTcVS3m2rGRaTsSxe",
  "key1": "F5ukcP8GiYJhy4JBCn8fV2x2B9GsNZA9PugRjCij5p5GXar569rvZ7a1oWvdWTGwJNMYgjWT4w3JvMWBR7WEXgc",
  "key2": "4tNi7QZThFSvJwxKHQVoT2xcJN7gVBsuEsYQsNAqefFAoB7PiLZyQKxGvoX8fex8doyAwEM8BgRYo4h7pPinfsDG",
  "key3": "4YkGxt22cwwLtMbCGXLP84ZcQYNRcgMV1mTnBKQEPa8JbRYxi5UChLPQe4dxYB84L5VccaFmcF2jJhPRRAqKwCUe",
  "key4": "2W1cEx7NUCwUTforhgHn98Naw2yMUq6HuMphXQXuDTnR4fEq3BdZa1c4wEVmkdt5sj2R34tfCvNFuuZGZuKFCutp",
  "key5": "2qyypYHKybqJNcsL5inHvkNZ4JJbT7LrsS2ghMefWzdjv7egjwnSsvwbvnoxiHPof5b1HhiCjAfZU3rTERmBwhfG",
  "key6": "5e6Li4c6uhomuWpmmbdw68Mruv7N7R66bAS1qLkGuZKLZXMSBWUHgFHkz6tojpRbSh2cyQV8qR3SbpBvJLxLurG9",
  "key7": "21bMcpppcWBQwnu5WWJsBAmH8UqS8RSJV1bfRdZX5QYy2ndKgTQ5SEVjL84isvjAXCf4KpecPfXTDCQyqMSUerTX",
  "key8": "hfxBPtmA1zwXE9a9Z9svfr4zwNaiQmUVYqpNZ7LLZAePWaNs5kV18AscC6TfaGKii6uSUTKhBRh44Cd9xBe946L",
  "key9": "2C8tCyKEELU2enZoCQmADxjZVxgvAYz1qbyFtnxUxCMtL9NQafGuJvgLAdYhroZqh1h3ZzJQBy28S5hXQ8JYgvc6",
  "key10": "9KWLcKDBW4HPyYQWxY7qa5vHnTEbqgitkW4K7SB7853F5Xta4hEfvaNM6q5iiTMcbrEukCNRkSChXGvytoR2nAA",
  "key11": "2ZsxCWxCzNvVowPako1eQkgXgnG9Bi8zQ3k6tGxtXvRuNqivb4VbGFgMdoM5dADJJARwavMYZhx1L3RyMgRJ6VMY",
  "key12": "5xM2VjSQLdYb9ikkzocsjP6Nq1GYfZmdaQAJ7ttNpEdmfcpbDf5tQJCoRAqRxkNogGaQPRh2aFRxc9kepDFXreE7",
  "key13": "58sUEGyXGEfUDxxR3UakoU3RbYSsFVSvkCyxutz3dMcv3tmxkoBd9ofYwKYo4oDvZihDSTVMNruhK6z8MdzMdLqx",
  "key14": "4msxaGstZc7GuLWRvnvUBxhLTJvZYGsbu3TkajyEkh8EfYhhpfA4n4vftLkCc4JrndaGhMsHdW4VcS5pEPC6tzyy",
  "key15": "5wbCXiM9rETTMy8HGLi8mAGUZUSaUvvcdUPgBLQKsxpZoxUw4czqAngMR3EJCf8g3DKT1Y6XwLHgoGB6W7GiRAJi",
  "key16": "4XbVTZx4i5y9jLkXtsAKadyfkwRbPSm5Kwvr5Du3teFb1snNZJZmjzBsEtSGNEqbr7JVqUNhy5NvMbXX16vYTveT",
  "key17": "artxrSQuY4qWdnJKnrjMzksnCJ9qWSK2XCFnNs1HSfdXw9pAAJZZ9cMZJRZhry5V6kxU3Nf1qVyPEvryUzTfJjo",
  "key18": "1GLTVybMWxaBbf3r9tUytYtD1jV5wVrdXfTh2Vhpy3rH4Y7os1HauKRnitm325w1egU1zmCRKPESxLFEyzyiUXd",
  "key19": "2ksmn7JbHo9asZRUrtaLHqRoWMRU5kngZYyDvhbZEVrLSfXQjhqjo9QA1Pfzx6iKGZDWPaWczG8TvNttTkhB3pxh",
  "key20": "2WGJMZQdjcM6ZdxXbmwXprseeKJc8kAx7LkdniL9fK3VwdAoNPP9juTXrJ47DgPrMx8dUtFFS35QRKi4uQMWedvx",
  "key21": "4eC1UCwtvkf89NGcC76TJhhbqn7vnc7dcYSUF4NkxTgukMjmEsBjAXcpXSKdYoSbHGoiFpgg6WSNJ1cJGP2e2e1G",
  "key22": "463YQ74wxK5W27U8XqDDYcp1vUdGV2xNAfiBfnGQXVwFvE3vJzJGdE69e37LL2gQpAbGa1reHoKbFpkvcnkdqgRF",
  "key23": "2bqz3BWZnpQpBXUXpgJamjTkQtpH6hgwPVP7yECzBeJ23iyMx2r2NTfMrP57zcHUREBDuL5LicYu9duhVkR2BPco",
  "key24": "3zeEyoo6jGgPhrNnadrUgSCbcDJSGRvBajhghd9f6zxdMLKwkJa8HzeBb1E8ShrXaBHbdj4RTz5vTfYFCiDY5NkG",
  "key25": "wXWeLgTtWsRQ3aTXa8QaCij7jypzb99M4XkJxJyACWBaBNxcsGMmhmDKXmtv9uPSTgHcHsnuQbupeLcu5xwsKtb",
  "key26": "2fnqn3gV5bDkS6GRpfByDmmZPFULhbLe6XT5Styo6XdU6mMaXjnv5KDmM9hgtX3fZTZvYDDapBN1st1MgPQ84krQ",
  "key27": "5HV3GRiFh48ry2YaBzRbVZoKvBFYVrs4gRi9TWGtepx3osp9WYrAc7G4AyyZuxpJNdVU9F5h8u4AQxAQtSVzmbtZ",
  "key28": "2GEmCbgjoGafs9Yu34EViVUB2DkMN2WQ1GJdy6P2TZyE5t863WcvJC8FJijhAnqTCr7QQjhMzCcoK8xSa3jAfRyU",
  "key29": "5n8DAN8uD8x61r1hTB4E3fbXpgU8j5tcap3uk8fQcPc3LvZk1gsiBUE11SfFyi3unHSUHZW9JBEauFX9aiB1dA1q",
  "key30": "5kb7kuY1MQKakUgypsG5fe5JZsn2ouVrDEzdNTu9ubBK2bqHukLWWJXTFtCQc8tRWaPQpvSs6AkxtjpTidCuNn1w",
  "key31": "55GbR3wutPDhg2Vk7DrwazL4nB99vtZdsFjjU5FnJhYYyH1HoCC57rXPqRQpKJY8NAHXK4v6qPkB2bWhSGKocwDB",
  "key32": "eQmApk8JLHLEbUtLWjHHeAD2fLLH2aWBZDaM3uJt1K3Wzff5pfmuycjPPM9seZuYLZ4h2b19wKdFRDKtUEhMqDR"
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
