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
    "3GpngcJbVui4mZPA7Sn5c8bDaQomqpz1rwWp7mHc2VpgwU25qSfB6rbLsHzYhVZL8KgXavZQn6w3zGVPcH3b3iVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7b2qhAF6G1iaBdimQzqjgacPWcvXFmjNv2HvATYTbAog165voiyGtKT32GJfUsqem1PQ5eAeGp8eoQYrvvR22Wv",
  "key1": "5zQqrFfcrPnDTRxFZkyawpPqALcBt526p1Z8DkvRxqtHon5K62DZEs6QcgpiHTwfsfJkZ7PZc7Gp5gsHg3NpCtb5",
  "key2": "JEfWoFao6ZiaLypPtqLUmChwHNVQKUmXFDwE5r8AHPPFLJEpt1yvLNEw71yTXjTLm4yfZJYjP9b17CRwNPrVAu5",
  "key3": "4iKuc1dJkF9oXv6jeac9MBMHivpwgnDUdMRyYFtuXnrwJfmVyXJocChShdQTF4MbLhLT3dp5o6SGVeG4RuwWDFsC",
  "key4": "4gEbTmDeyviRXNHzXKFBqTEDxqgQCwFhMnsg4TzXGNjEjmgMPRuYLnkn95eHtzDiL63mD8bA7Z3VicYjnyimag4F",
  "key5": "54AqHHCGPBogxxpvCWtDoF8ivaJnJHC9JhEcArgGQADyAgyYQpnEWzQ5CRj2D5nFHmscpEE8pRPmXtycGpSXuHY",
  "key6": "2YfCoJMUfwmUcSqZDDccBxDXfrXkybt8c2NAmVpJiLseTqMqQXZtFTUUQYYvQQzkRRkpbj7AoFnwmLP2Xn1J27wR",
  "key7": "aohC5qW2Fh1rxEhVpDtm7HKMRJeDZW9m86YgjT1Jm1QtFY5C2Gp5GbYSFcyzqEpoF92tfs5yxojfs5MxNmVyVGY",
  "key8": "4xcsE8QT72W3w1PAJRiEgME2RF1AGp3LTu9RidKgrPGYZ6EDRT2SAkvJYTWQEJG7rwDE4PYnYkgTuRu1Jy9vMtUh",
  "key9": "5UBcd595jWPhhvFjmPxUzkqYGoKwyQXw4iAL2BKb3TFSu5QDHjVVy8TPhpqDL9U6RdSpmeebFW3Yij5r5hY9g8G6",
  "key10": "4wFHFLv2mdaG9zAjJCJrzTA5bG59zCL8k1Yc9DUAtj9TdVZbbDWzR7BNRfR5Sy4GYjDn8SpFDJ77fcJs1zAXzKdQ",
  "key11": "3NbJrqPJ7B3wYE26H6CnjJdFwHGP6EWpWGg2peny65rwy2fv1ffTwkJAa5VzR9LCne3wEmGVUJs2ZQAQ2TFQAaQN",
  "key12": "55Z22QR5WnHXuiq3J4QGoLT3QN3o1WR2QvhP4zU7NQCifsHGruMar76tP6wwTPMUBnynUQBJCBwAUPqGRXSdcauL",
  "key13": "2G3vKX5bGy53QbXZ4R9rkGZebskKniBFuuFMVTVzEYHxDimGG2XerePqstQpZbEBLKzckwyZFVScwb7o1BkA4hB7",
  "key14": "dcTSt7qSuvYdK3nMWbZfMWi2rLKX5VbthzHviErrSq8arBwhD73KKirEDXUoqUVJc4nA9PBLJsU2EvcpwRYERNB",
  "key15": "3Y1gV7EUnK6acUrNTagXg2UQfoJJVJ5NNzYQHhM5Uy3A9rYQZV91tKX9iMC5GogHoutovZ6wjZeGsLmXmcDAgSGX",
  "key16": "3QLtidGP922dZkyT5Z3r9gZAWxErAREfiNoNo79MeiaxiKjATTfWHpexf17Z8Y9HVYokynSAwTceLdhdpDEmZkty",
  "key17": "2UFWNexnWJhUAhjG99ssV5YQPeiymrtqkMPFi5fmy6SvtyqEUETFsUwuaYKofbYtd7bLV69atR28x1pvbnvjvCSi",
  "key18": "EPdtvY5g8yC8jtzFQKsTyEGCKAGpa9RqHGQMKXMP1EUAC4R2RtZTF6kLG1LPum9yZykmnu72XgFGuNHUwhpeRbh",
  "key19": "4uecwyj6srfUuPcLbPbnioMRwDfpmX2Fo9SC6yBPGs4NAVQWuNiQdbENaWjuR6Z3RTvyhA5nW2TVD8wDbbp5nLmw",
  "key20": "PhvNZTarDZGM1z8X9YzGWTXejVun9BN2RhhCgUZBs6kZqoKzGdRFD37BAXNH3LtYnXPXrZmfgRNxPwQc9rTdRP2",
  "key21": "2t434odn2LUdkbfZiXFEAREkoUTUpeJRaJBh8hsco592ZJ47Nmhia9LjMPmVpJ7JFcVqQHarHeoVeQnQwxyAGSFm",
  "key22": "4NdBd7q8jKBRM5W85DDzMFSD1WaGufRMCHN7fRLeAZpkYqBws7Bkvapt3Yp9h5ZAoeNhJZ3gZdv4JaoXh5pPySnC",
  "key23": "qePebLUsKuHrHojQb2zXtQR97WNgcB5vcVJ7gVrvYZ1zjYYr9RbTD7efi3r6CgNyPVKZuf9TEpo9kc3xbYSKFpv",
  "key24": "4W1HBPwP4N6KnWwdbu7DPYhK7PTUaJ58aLMxYwdBQ7uSW9se7hGQSWgV8UQFdv3NDLPDHuSjWLhwco5j5eS5tV7o",
  "key25": "3G8aLiB6pm52uqZTRQ9i2ABuXiLKmeKMJH38JeRNhXXgffnCBZgvx2f1K5ybTo9x5oW5oVUptvtUVsDjthEzWHn",
  "key26": "4jBY4fvzhwjw2Lei8tjHqCnDamkBbPvkwSVtKgyKSs8Yy1kpj6opULBWpq22wYWMhjwaZiSPeewQnBN69bvNRTnF",
  "key27": "47h9hdsXec7pa2g3k1BAcg4LstrxbmruduEwZHnCBZg8xoFM1fFzTpTF9qHEk84q7JLqxVx8DcWF979AyPRVcvxb",
  "key28": "5Wbc3cDNYhfY1SLw5sNvjNS5NBPbK2jDMNM6cjFxfs6Zmx2acGtjG4n8BbbaYyoUC65BafiUtwZ1TEq5ViYq28H9",
  "key29": "5rBTuuzjsdUGGtwS8Ciouc9nicA6mJSDgpozmUVdn6ZPNnsVRY8A7gu3qdaTisbDjgweAhikssKnH3i8aFTTH3xE",
  "key30": "Wh3qAZ7wS9QWVZyyu3KWMwBSdh6c9egbCX66GqrTAEBzbkvpfY1Zdz4gzD5cMBvbU1YK5yvckxcaEJqy5r5Tv6y"
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
