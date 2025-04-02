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
    "LVkVw87sAaNDKLhWZLPbnrdG1pWngxS18qmtSf1dMSdtbgDnm7ofK9ukSYSHn8jxG8y5m6kxAWH11iGnF8nAiZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zvhCM31seQQ4CRwAgQGJsMeHP713nKgaGC6CfDXcjGgfuoZLqWstH64Pcm3vgrN1w4jy8RVR17Zwduhq4bF2GQx",
  "key1": "2Aey7QsDFUFAaLHet6iX1RchV8j3YHLfdtKKByvDZ9y38Xf83R8tDaovFNtGiJzVkLLRPb7cJ9SyByEAmc924EDC",
  "key2": "32j324ifZ8CtYD4UWyGxQWAixGSSgUWZwBfSkWEAZw7Km2Z1CWDvG7bxS5CajjeGGhZzSqjNYnBVm3qaGaViwr8t",
  "key3": "3MinqWzLUw8gAFCq7bEZgt6LsXLYsdaoMuVStkYQeScz9WpZssd5yUd9aFdSSYwbEGCT3WaSrib3AGWXaHfD6Who",
  "key4": "36Ngsm4Cg1qWpMH8wpWBC1vVNYSgrBbomYFkb3gdgUfYn4qzYgLjAZBViGxX4GuDWwuU8S1fK7ChLGb9rdsnn8ax",
  "key5": "2kkA4X5DkNih1rwDZNyYbGEHUA4NcaWWc2V8pygce6ZCUFmPuvCZqASsSmExpQrqhXaXkuviaETmjEZVuPSEEmCP",
  "key6": "2WZY7WHZwXPCVxcDCoQSvz8xvQBdgMD3XLdodtp33Axf9bn4L95AaZNYNkUikrKmRgAdxCL9qLjHV5zJWkquvKsL",
  "key7": "Y4Z8udturdh5XA8Y6H9BZ19nvEPq5R9GrZrH5C5uLceCbeegX5pDhMXGuyCG7oVpwoq54y6yZgVMP2RzwLgkTbE",
  "key8": "4bFvCGzajRu7Esc8AFt96XreVQ4DZ5J9EpSa8aGwe5GPRSvEauDmxYAeoECzB9RkzcHvSsDppkXK8D8Y7rbhrzz3",
  "key9": "5cGZaAmxpbY6aA8inuCjdJdJveiegaBnyuQ7FpAjSUk9T48fKRQURMUU2N5px1vKnybc4B3HhmD8jhPcMuxVfM1L",
  "key10": "656X4oUw2LcP8u6GEMTAK4UjL5n9FdreYcExKGNkYTyE4nsyVjrpdy72QUiL8Um1erbcopRTNjCepWzkPJ5sdhdz",
  "key11": "3cKtb1wDSJS339xj9mj73TXmKJPAnczApTz8rNy94rMy5M1oA7ReSWSePqqyKpxteFUQw5UWpwdmXhaHXbh7jNRe",
  "key12": "yWZpdJxiWFwWPLKTDopjxS7QEtPJk5rcsGAyxHTaeGSGq3yiUZxQW8NARJBYNDJzZD63sf2W8jgtpznqQH66Z9X",
  "key13": "UQZd872Mzce29DvtHPxq7dpxfZVzLidgyfDrKsTJhA2awvzyr3aKBQJuM5zZQmuMXBKUZ35o1A2puzagLN5HtQu",
  "key14": "TknbFh8LJrc9LndPNo2eibFFcfAYfzKSFZx178kXMjaMjfJPg4g6bHJcGh6VroA1D9rtoKLcQtg2Na92qY3gv4t",
  "key15": "54y53cFTLps4ZusX5q2325PgvDM5WrPBwe1ZrsWbXrin1e6wEEmB6jEAtniDeQBCC2VZxWbG74WyMmGjbxpbPRFj",
  "key16": "5SjA12Cy62icaptF8WgBfBGZsf2FbAtc4HizjvsxDFmZeK98PmTP5Z7XoLYkyArNNUKHJtMMn4PeUKH2q9VafeQF",
  "key17": "2YwXCsFnfemZAMv4UPQPKDs4aFFt4GYDkc9R5bj7Qq3cXLK1vWtvHu7G5r4WJczsNBuVTSoj3F7qkEuZ5BvzRreS",
  "key18": "4fTAbnA2KFHMYMWXVPDmqbYUVq1BmqKKtrSt7zPJm6oZvNueGPuh4rDRjyhih121eRRwPW1pKrETg8dbi6swZZXx",
  "key19": "2e7NFVWMVFiLsPrc2TQP2q9zUbWQ7o8amLTJ6jKpquPt7zBPxuv1y1neVukii2dXfK2GgpvVdU2kx1ch4NEuougi",
  "key20": "67Thaauh1zxnyMZsCkk1izg4qtEXjWxkSFz6fz8Y7C5YMNCd6vw1dKckwpLARyukR9JLkZqMVhQgij9dqWHYoV7N",
  "key21": "21gsjTciCxetNimwgAy9AssM8DtrfyvJBwzk3m3eCprEMWE62bTPBVRwmJFSYcVTxCoe7xiBzziirvBScNHR6GqS",
  "key22": "2BoZbsNf8YB5pq9uPh5tRv9f69QXbQLuma25K2PrC6JCMDB9cNdokSPzEA4E82CCe9bDYhTX3PeKdQp4Bj8G7qAp",
  "key23": "3GYd6JNYzhs34mcrXzvqcdiLPGASrB1e66kYo4YAwaMSewFMHWK7vR38K9EFKjumyKUS3ooDMYz7vYdRrjAnBhyo",
  "key24": "4xAR3Vmr1LKpZidQbBiD7S9XP5T6XhxhnxUPVG7Gpgj93vFkzeVZQ8CJivgyy5ZcbqCwnwfCTs4MQLTRyFqwrcFb",
  "key25": "u1zwDbWo4f6sfvbjTsDUHEwJJynvsRaVvLMZEgCNY22CDDF9Z1Z9tZ2pET37MrNaD9dzB26afkjHjkgTfxxfe9e",
  "key26": "1AWEvpwDCdZfFD8VjArY4iTLcNFiHzkyB1he86ZjNmYg9WrDBqZfZdfMf1dAJWXM5dAiTLsQ1hy23rsiwrJt9k3"
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
