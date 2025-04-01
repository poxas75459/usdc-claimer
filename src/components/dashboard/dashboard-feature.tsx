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
    "4QoQXwiUYmd6ndwtESF1Z9PXWb1vFPNiztd5C3g58YvDiAGAhiFUpi2MSPSTq5gJ4CVtk9WHgw6kdqwh3VpMKL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2268VLad8QhPwkBzqgzzWLe3MTbSicdbBtcgmVgMDvBjanUXprBjsYmCHg4ApkWtdujetc6sECAiyHNMghN2W3JR",
  "key1": "49RK1MNbzWkrAfy8ghcY6LHdi9YbZv2A7ANm7pH3JhSnZjevW42cVQTfZyR6X5pDY18Vekc8aJDoqU8vrCjUhxr7",
  "key2": "KQ6XXxUqRemN6rKMARTm4WTd9jvHYTgnrhPKbF5Td2TTYL8WEPKvayaEzpks4JBKNq8kmEkcqVuHfN3Y75cDFTu",
  "key3": "3rDspx9PNCj4ngcBSWHLaj4uS2iiB3fyLJKoAi1yL2LdwVjRWavnssAJjgrPq8GzzijfzbL6r2Ypsit5mYya7qUD",
  "key4": "5wvwx9DtoexsvybxzzhiLAEivdba7NjqBr9W5kfd3e6MpP8Zx99CBgQUgirRsFUBpHNjgfFMCJDJphvYTdKcndfd",
  "key5": "4VBZ8KSr2gXSWB6aDBZuKHnR8kb5azSAfVvm8S1rWFNhM3hskuhdjm9jJqTRgMWPw1CYnWDbTWcDJ8GT39tRocnC",
  "key6": "45UVA8jEjKKWvHzXXHutvM6Wp1HgCY18LgQGz2VXaXx6NQQ7ntAjaSFipfbRNivTQWeWaX2CfBHCM2T94awe2RVc",
  "key7": "4F1KVb8LKCyFuJ6sVFbpoTmohafMqAiv8YSvcidztfFLp4aZHmESQEdsfg2MMreVSKyRBp9cpnyw48W4H2XWUY3i",
  "key8": "5C5tr7rCLny32PtKFNxrgExdkEkehSSJEafYekKyWp1keaAQ1rUEeUfq2qddvG4MWrjvchtv2rcpUGKAoX36iWBS",
  "key9": "5fJTGVB8nhNbLKvpkc1pgNtySb1rGTPMxLawXyDaM1USw5vuDiDET4k8SDo9svsCgiweM95eVGRXTCNakmqqpgU3",
  "key10": "EJCqV9xdHsKK9RSryNZ2rUUTJmD5AhDKL8EWPDnXLfeFCo1XFJxjdMXUeL9CfuY2VkYtzSLc5NdJotJTQKVyDeH",
  "key11": "63m4QkN4sBHk9Qzn2WEDNN1uaUbTLJwQZMkyebKNZXCHu7L8dxa5gAgisFjv7BiJcsZoEnychgDp8X4x5tGVUNTb",
  "key12": "3LKsYF6c4oFXRvTsFw4icdT7kTvbCwGRy8i8XzYwjJ7SkMXbtRjbEbsFAw9xSfsg4s1SwSdv9TvScGvYWjRcSoFi",
  "key13": "3fpbd6bg7Vyd66HTiseHfxiXDckNJ6Fb8GzB7porCC8JEfbEF48otdkaZnFkmux73JHjmTM9gGnzbsaVK4orjyV1",
  "key14": "3UE8n12UApCbBuYDUcNKEdpNYCaKMpBRZ7qnmTjBbRhFehzk45qRqGsbGZ39z5iPaQchXAn3bvXBq99Lr62a7JAX",
  "key15": "4JoPoaqMvwuirPn3B11mNc6ikNgfbg4zLtMqwaGtn9padZxjz1Wq2TxLXrcGG3XoGWx8j8vJDrn5f3pFdp5iruYz",
  "key16": "53eihWBUFWrY4orDhktW1RwL8EDux9Q1FTgYgJbkpSGURfpDVo9SjZ2MY6LqZ2M3mbiphqC8iUTWR8opusFz33ke",
  "key17": "2Xef44w4pHX7DdAnfpF25VoBJdFbVwK7Th5yDYgdP9RjXA1JnzeUkW6AtwMv9arjnQGxC7YWXiif8Xz9aF5cdMh9",
  "key18": "yrYdezmufrwpfc1zVWn464sjm1vz2U7wVfiPGyg9FdRjxLPQov93apKjZghwg8PZGWxhB8PHNj1f7bfDNi6yfCS",
  "key19": "JPyTxpQ8aXbfNHMCHFwXFov8RdcMwGwr9LaLNuufrZj3LZaThVYBbNC3WmHkud22ph6HTNpZLSV2gqjaLtc4koW",
  "key20": "2T3Ge5yerRHtBiF2C3XFcSgWc4sy768TqWK34qadQWKrLcU1TfAhH9ZEQJhBbaU7jkfkHzhuLUJLN9HnPanDd2fz",
  "key21": "313J6yYGmAXbtaSvrLsS25YxQaUfFWjSvEELoFjJRjLzEpTNvjwZDczTJi8FcBAeytLmyWU7bnANgLhe9XJhVL1f",
  "key22": "kiqrJYtiP1J6mAbRT1VhKSweoo7bzs7AmeeTdg4KjAzAxWap3RgLQQNPBJgxTzLvy5DnBXwDcwwpNjMt27uMKi5",
  "key23": "2AB7fZZvZ8mtjz85NbziRH4S2bbGGKjGbhPrV6XzJaDxpWhyaJNPYCgqaQhDuqUBjrRNs7aior8H8ZsaYp5L36M9",
  "key24": "2GVKqqXB3kETC4GgN4U6GEXBZkjXXd7SuR7rgSwYyqTwjr5Ri5czJtNBJya9vchB57YmCkGPm1wcDeETk6mUQKXf",
  "key25": "MQSzgxiPk8BiULbfdzFTrkQcqKEzpQRzTRn4YXauniZNd9BGEzBdhzkc3a8J7pqpUzyhpKzhS7pVSdhzduf8AdL",
  "key26": "3hCX6wW81qkANPFFbvsTgR8Pdj176XMWnhPmaJ2iphoAheKyjSeESfG1qQxUYTwtJHZ9tU7qy2SHpQD1RQyDEc9p",
  "key27": "3sunsimZTcdTycF15QGhvAyULhQK2F3yAsNWjETbDhMDfkRoMpheSSm4sG5pht4LDNBb8eWhNyrS8wddM4rLnoUv",
  "key28": "4WnMTTdrGbXMsfp5cscvdWVX1gmdTQ8ChTyJgLitjeCVn2q86YreXRkZMcSgaTegRTEqSzxNRZWaf7XBrveLsuvo",
  "key29": "2T9xYmM289BMbwoHo7pPf2WzCSyq7XpzxFfPPFNnwPBPGjAYUsvWWXnegiuNF5xLUxaoKHtZe8nMLagZ6kS9Aqrx",
  "key30": "8fiyMNTviQLbmRg71z77aatu4phLBHQdH2nXqyGC9iLJRLhP8hRVWkDSB9QBu27nsqSbAHPi7y2t5xAcQfhK3dL",
  "key31": "3ERNBYaZwez1VL5wxWm9RLFzmusgLpjLNTjf5KdoiC15gV3vD3UHJHiUYXFFja2wsBgMjR14MCQZhSEN1X7zJjPF"
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
