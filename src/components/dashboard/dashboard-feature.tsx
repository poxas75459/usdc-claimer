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
    "3g9f3wpoTag6yavijZntsDiAsRAWyi6mtS9oxe35WjFf9WWMkNbZd4UFDguf4fj2GVDgptj5WSDkxYN4isANnuas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j1QFwtCC2Lw6YsYUttGJAWuxxLjYJ3Sbr4Jyk5Sb6EYAKuMAm4kMzKHGwkrQsyoDahbPTWFtF5jKvYiN19aJjUE",
  "key1": "3usbK2YEkw6vuX3qJj7s8FY78kiog7Dvum8v35XJ8kXE8fEju4Mf5dWRULjpUDXp3cQL2NmrmuTGNwZgZTSWnxee",
  "key2": "4YbGK8caaAgQC93TLAGRoaP9eKV6EQ8Q9u9U78p8kDd3TrZR4UWy1KGyRWxnpigw8J7W3SjThhAD1usgb4pTnz31",
  "key3": "3MgketbeWKTJrmnmqVw4RqvanrXDYXidoBWd5Q8WUfPMtTJGTutYSYBpzavv5MvyKyE1LsMB1Acpx4n3vssYP8gz",
  "key4": "5oQzMcnMGaqFMYTcPHgKWMkqyBdTWwGbhj5WjDUShxm7X5SRGB7A3QcDSmAq7dAwwZAMTJGZy4ScqKqoeEwBw1tX",
  "key5": "JJLxvQAh6vvfzEEDS2tkGzknoTtLHmg6mYofX8yTdKBbkqmCujQxiw23z2bc5TvCBjEXKjsVQk7dnkzSpFWnTtL",
  "key6": "63ZcT9ftfVEg3kBC9ajjiDchbKzwPATrw8nnKXuFZwexxnABU7iVqK3PqjsedC773YunPu1HPhqVG564MqBhBvyN",
  "key7": "5b4isAsZqzYptpbfZbBShBzMRRwe2nLjwaiCdEWYU9TBvX7znmo2Jv747PHpTxUM17ecjGW99wTQT8zwDEQJda8r",
  "key8": "37sTaaX4cbAZNsrHHaxJSjuz445qqnHBVgv9ZxTs7z2FHXZDiZj5SY57fiZzfQKL2UmyvwqBXK4VaobKYj8tpX2f",
  "key9": "2a29hW8sXChDCixSC5BZtmPjXm2WuK1sp3qcT9ZSHeoKP2cCbnczteysjreVgn9uRVEJghGvSXfKvfRiULHj6RB3",
  "key10": "5eG2Bc5NdNsznNZp7NaCpZmDyHoX43xuCEtyi196hEvXJNnY6DD2zV3g13Uy4vF9kujZ3MqmW2wvqoDGwMp1cYrD",
  "key11": "2oRK8a5SoGAJthT6nsuBpGmTfa4HVLsqvRZdBxqQCh3qfqVYPh1WDfaY14PyXKWPCrLKd2RPpAAJTEuc3FYQBjXm",
  "key12": "43bHUFCZF557hKF2HjtNJGsCUeTg9WaxLM96cpVDtuu6tjrvVHiG1G8cGFc3jkHpZxmhDFSjDzUsYkTxNeyrjrxR",
  "key13": "KWLLad11iwuYbccDrFs6sSRXkdPTpMk8sDQkQKTEKCE4fnsbKf3fftcGeiJfEJtgBLLS3f7MBXeRe5hAXZLfjnv",
  "key14": "5YQAMWqQgny6pB5xBHyRbqRcQemqKH5pKYzrDSqZawUCC2eeGkGEXj9BLyAxE9quK1FRV1fqoXi7YBrAe7VeXYQb",
  "key15": "3sdFX1aAtCgh4riu1UNKZeG6qG6EQ42Y8e6B6LC585TcHWpnu7JAsbCsqApN3WzRLzjH4KEQh7qxTXZ5fWwyntdj",
  "key16": "3ofbS2qgBDv14HhwzrzKY2vysSeGGqWpdUxXgcoUXFaGjCp4FbDL1u7bo8oEU11Qzcwjxf8HWu2EygwHkyEsgAUQ",
  "key17": "4aVkx2fu7UT45fkL7pdaPJ835LcQ39T9pWG3NJBieU2bE6HYKaZK5TmqPUVn8Box4L9fGWPHRTJL3uSLziwjWixX",
  "key18": "1tRdbkUdif1xqCGHnTHyFbGN4cd9GbaoQ5jGXADLm8WazN5zzv6xpc8NjNwbU3A9jfiKG1hchC5yxQkdZSG8btz",
  "key19": "v75briLmxfubTh3pJ2im5PVYuJKShRBgQN3TN9FF15XiCM1RYPbwZdDiUbQ9ZUaae5uczgnx5B24UVsiAGKdbKT",
  "key20": "5cog4mFrVfRJqxuyxyndGu298GGvyk5qxkBZuKwV5e3WT2xDcWATjoYGvNM8E8MnguWvg5qPkPDhWWfvx6NCwfCR",
  "key21": "58prqdnDwnkDgxknYC5Yr3N6KMFyrWF8WdmcHqBudEK4sUSqZ9UwLj7ZBQngRHmeEDfkYRFKg2KCLHWoZwU7nEw9",
  "key22": "29nECPghTuDpesyXfwTA47gJFgmiywJfnbsugFY5PTSuLBLbUohTgu7a7v9LeCjbJjNB3AVKmifneqBUBn4HbFiF",
  "key23": "22QJhhvQETtc3ouuKfUoPe2kaaKAxTYa91ZUgfS29qoubumWL8bdSGExgAGFhbzSKKjMTD1xjDiM5YKzwUvwu4T5",
  "key24": "3qrwzpvzvfHLeNXkNFMkyeNtoYPEtNQxRLg8bDLMrud5qdMpzqUJRvxCbxPscS9h76jwRoqQWqqRzWpSpDsmuTjn",
  "key25": "59r9yvPF3vhQR2GjwNABk5MRnK9X8A2bjmh3o2v54EhHgnoy6Xsq4Mw4FSNyUrjp393pQ1irUX4DUQpXuoYVxyT3",
  "key26": "4Lh7tXwbbr4TsS3c8BgLsdYHEu98b1z1bzunUkJZ9518gHpajmruSTUtL43PwaB2omTiS1uM4AKwrpQgxkzcSL3b",
  "key27": "Tfkba3Gb2vTxd3RnCYU7B9arrUEb9t1uZWL5sDu55wh1HKthh7zUMZ1XYfDf5XR9XsYM5ohqzozi9gxvD6ofRrS",
  "key28": "3jYhcoJdDE7QAkzaz3YaxE9RPhCsST9NQm3Sv7F23J8A97CFNcVC9SMsoWRPndSTK5SKN6iZG5MpEsZ68TWqU7S7",
  "key29": "2rxPyQEnqDFM9fdRy3FedSNQ8PnapLfktbVvzYzQXyhVQ8dirNzk3jiYgGsDwxaLZNoGDfArLr9yuErFkSH7UAya",
  "key30": "4VhdQhEU6F3buoNLqYNA92hBVbm2YeY1bySjHVwAqDptSGtYPeQyY743hPhAzXVQTFvbotQ7yU5zkZKDhKgVMFr5",
  "key31": "2iZ66RdH5PqLhPoGTyuesXawPs7WiS8SxNCz24SxnfdJPDxhcRSUeyfw7KhnrzzsLqowCV3ix1qopsUsdRvSfxj4",
  "key32": "2SocsCbRnAG62en2kdymCDrGmiLykRBhstSy43yatuozxWdhuwdHovtaiK3kfMbVVEGzcCXyo1YNCMUJWedBupn",
  "key33": "2bAqwq4rNWUQk4yJ8rWmGgZX9TuqVgHRUPc6rA54FPEgBPxz2az7dss4XevaMDWaYZUnZL8aHCFxS13fQqhUox2W"
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
