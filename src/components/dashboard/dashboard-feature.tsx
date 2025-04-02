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
    "2ajTr1zYGuoqJ2NpDchP5d89j9J7HxG2MJQm7pFvBLnbvpq2KDgutoebRHNQHjuTGg6PzBSj2z74Cg9zwPSwhUAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27MmeMTc2row83q8LTkk1XZez53roy5Zh53SfSNBK27kWLreDn5jrxiSE5o3zXj1MaMN8JPfEpXGtv3hzuQhnyWN",
  "key1": "4nsZd9rRgzN3Tm9Je2SRiCrMrwri7jUm8JKu4Cz3qyuQcKBCxf5bveytwzRPvwy186X4Dqo99m8U4BXJGXG3DG5A",
  "key2": "znr1aMVmDYk9eojxSNVe3BvdgnRZLEVqQ57XNBRXPdXYiJaXaaXkhzBJCNdqzDdw5pJmgxHrtgCPiBhkYH8Ue8z",
  "key3": "4WvdBKoBv8NX7Bvf2fFRTyNN8V6baG8A7RAeRQyvPTySjqVzqc6GQp8HQoUKk2Yvu6qtaVqVHjNUCfmsVCcFhY5a",
  "key4": "27gzQaUbeenibSykCkGfXefHjjRJ85XQpWW1oWm4mTxM8642kvAkDYXiBD2CVXQrpxS5CNK1mXgqRKKtVmhQNtvj",
  "key5": "5mnSLrMSMjuNnbAPC2do1bMrGfeQ8saR86cjjNted1E9tB46zQAgJPzPz6QQRj6YYBD6jd6NtxT7mSwWnW4SaPxa",
  "key6": "3rqWGj8nwQxSAgEXjaG49SqPnc6FHUqvuyxVhrWh68Qktk98q9FeLRssP81dTnxLE2hmoUb7ZrPfrXZTfHZ2FQ2t",
  "key7": "EEY2fgxHf4dYNXhC342cF4nB8r4MaCKwdKHtazSGEoEVCjMvki2pegVkPeCwLkmmoxh5CAWRedYYparAydnza93",
  "key8": "4yvDWRpySqz9suqk57f4jJTK2KZiUNt8bDKKd6P9Qv2oURWkGyCvBLb5U11zvnjT1xKv1iMx771hmCDwxLQHzkAS",
  "key9": "3UN7LwMHTzLeQv9g4mNnTuePTVJNFiMwGPUjbnzQ19hJivL459iq169a9dLETj5LqTWsVA3QtC9JhNo19iY6hWPm",
  "key10": "64GiF3iU2qk268rZxqJDy8fZVgEhSqQnDauhgXZJSFQnwRxgYPRodtW2FV4Nevr8Z5y4hz3ma7YsDCfeUQh5xYCg",
  "key11": "34rpG8grjqSq9wp3QUrq5qBNVuFFzaHYtzq2z54ApmqRpJDjb8e4iofAhRYBixF3eLvfo6QZyTZefDNTcXA1u5qr",
  "key12": "2CGYyoaaaA9cjjA8tBU66xa36PYXNA9hFEsbNxt9ZbAyeK6w33omjBH13EoCJ4sR99N2e3ZoMQg4C1fReMs1hyBX",
  "key13": "9AWVYs2Eeb29Guz4YZrsiU7uMVPYEnCewcneBMZbeHjZaAJZCDB2cSP7yRMWqKGtvjxQfcp3s6WV4Rs4nB7vgEy",
  "key14": "V9GFmgX4uWn8EHuXhhiUedt3ZF9TSXDpNeGWKa14mjLKgEvR2svnHvNDKCisKtegVCsoNpPD9E9Ej2nZEg2vcTc",
  "key15": "4jHWEEkvCi6gM2CbmtkVEfzxY3RKZq3xntPVqd4szhUw8UdsNfehAC1VuD2aMu1FB2A6R3hUy33BfRgW1VKTEnjK",
  "key16": "47nkRbrCe2snWndYF5zqrTGmDTNY7xTYQkoGqcrrarxucyeT2tmeMpfVc888sT2rpNT8CJdKyWxeooUMX4K4SGwC",
  "key17": "5K2CAeNCVzrBNbv9q41vsa5mAaxxthe5ACoi9ZX9kW1Ed8DMPddPSjJBy1JyXXa4mHUPA2TAwiXpSbeZHf2CXDMi",
  "key18": "5sd2u3ecWTbsRC1KEE9jwwe2LhjUjxVdKAFkDujDzZxLp14dUqnMu4q11nfYH2Kh92zw29xWWdE44ZYHc7qXSZX9",
  "key19": "5JP11Zbe7vg4F7tTkHSuFqRBxR25Msi6fAfk86S9sGnASa7RXy5a4GR5oqSPBeeF73m9fCAMfpaeQEZpuYKsaYm8",
  "key20": "2eHweRJUYjrzdRM5T274CWS1PEwmCDzsh6xZzoFN3TV2e1DgcGELXJT9CEZczCLDKzP7jPuNniU4WPBbgtA3PpFi",
  "key21": "3NTytJNo4xCzsaEYbokxxB7F8HBcVj52BAyDsQxNBdn7J7Eo6UjEopjFVyGVUjrkFFsjUp1UbYnD1Rw5RbNWzF9z",
  "key22": "57SD9pev28vYVnR8zd4FEU5iqB4q5Cp3Jb1WENNqzRdLF3NY9Leom78hQw5pdKeFr78KwVUQVWnEYXEJM4zCDLSS",
  "key23": "627rhAVDFSMUgGdb6CcefhZKfXTSbfvTx9JuiiR3Dq1e6ybWHERWAVBgy1rLtCpBHsC6uEAHLqJF7PaHVohePwhr",
  "key24": "3sKtFcBnJ3yn1LTjX9TZdyKdB6qDKHYxNzdeTE16s6y5xoYhqP6XYczycmHVKYZ7jdLa3WMdFJySp6NueRqjgv3A",
  "key25": "2E5aqHTn3BZvsmKJZ3zUDcGrhfXt3NN1vYXGZ7yur7DXmN6XqkSp6KkrTfFFwaiVowkDhJxonRosu7d5CqQ8mCbC",
  "key26": "5myyjG5zAeD6FKBeeYaqoTRidstnVGSdyjSGeHvcMBhbwwgi3Up6MFVp4ot72HFbvYWedFNk4dpHpaPNN3BtdvrJ",
  "key27": "2qPsk8WYqdTeQvL8jXTwM5hvvhtLooDicDPbMCavwmFZP4yFpU2Ua4aD73k8vK8SJsKGSmRwnzkRAYzZxrh7rRc4",
  "key28": "xbXCWDhaHyPRwowaZdFkfAAQBCLTDgajtiVUiUGnXmeAu5SiLFqkUm2H5wAWiAEgQ6w8j6QUQPQjsAFY5XyVriE",
  "key29": "k8m1vUWYEGafeVKqTLGcDApzM4nnjYTjVMmW3rNthTgU6qR6FEUktaeyqRu4bxLgLekmq7P8JgnwanfDeMfLqsH",
  "key30": "2MAJrkSYUsYGfX89tGEv7itAqE7ok59WHyFEDTUnHBvitVHiZjQjZgYEshApoHwcLZkoTJtSAeSqkqc9L64o8RY3",
  "key31": "2Ry2ZMg5D4Pk1HNzUqQ6TU1xqxLeoVtTrXBTNLTE3eLzqy4YPednQgrXM6uFN2fhKPxHztRWybLTvTMk8GEMcSD",
  "key32": "9C9sT7VphZSepjwahMLbmDXd7x5vVS8y3AQYLouxjTPmgchErDLYe9vBDPoMMex8yeJ27xyDwgkAD2sZAiZHUHT",
  "key33": "5rUNjGupU6fkdHyqPDRGZSd7mxdJ2VE6XXeSSnnZArCJnHgnUJPNpJTMMoMvgAi5K6MWDaoW36613kWb2wox2PSb"
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
