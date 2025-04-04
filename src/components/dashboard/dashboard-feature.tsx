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
    "3DxASbp6UfGvxr8rc56DK4AHtAGBcRr79DaN7nbpz9A8w9eNNmYC2vbaqbAnjer4Xzux7VuV81c2V3xVCLztBj2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m8TYHcgsSk2WNzXqhK2CgHWfYGPzZJ2ZowuGmgv3e24nQDE54ATvkjVYyNu3fXZZ4YiSbq2sbzCM9UftGeNaBvm",
  "key1": "3U1Xi7v2gNoiChkFKS7ZcQZC8exnwWfVQpYBbd1s9knyfqEtyxCyZDpCjiiyozq6RzUQfyZ3rirYrnNKwSMhj6N1",
  "key2": "5MKvE9VvGzWd8tbtSYiEkJza5q1fEtvYris12uoy2WZihTYrVN3JFm8mcG6wFmgX6oagTTZ8vyzNKQa3yfHtAiL2",
  "key3": "2YNYSgpmUzmM6P34zMrz4aAyUA7n4BbHEsDyx6GFnpz5NvjsjSPZWASn6NJyx8onB9rA6g9AnmSHig88borbsTpP",
  "key4": "4HH5pqGcofyCcubfZVrtfsPAzRNxFpKzcfZe3DmqK1iuUT6WESxxScBUbQoZ7TvrYJgMhH8jRuupnqTJ4BLC2Pft",
  "key5": "624bDQSo1Qbap4nfhm4Qb5415qFQPoypHdXvRp7pKit3Xqw9jHLWdQdbjQQguukn1af5WS37KsMriJTN1qTrsCeQ",
  "key6": "ZwFUxHbT3sMeh9T2SoydFCiBTyzsuU6UivfWNDHo5sXtLRrqgJcHAkwn9B9z7Ga2CCKCUTB6fsw72ojbvnS3xMs",
  "key7": "3uYaVEEkLiStgxvA9sQwhM1ZGeUJivdH26W28SiLECVRHwrpWGgrZhyFJz2JgmFY2kCPDxYTtxLeMibFFkM1vZxz",
  "key8": "2YRdpYnkdQjAJbtuujegheX2xkB7xFPFP8HQ1BJxovS3CPvUpJg71gzpRHTszy8uU3Kd7tYWNdCKW2djVqox7KNf",
  "key9": "42Foz78M9jLjDHNxwJKraLyDTCq5U2fekhWuSE9Hw3DC3fY9vZX7hRRwvmAYxiTi8QUPMeUUdHchSphoMGQo3tPm",
  "key10": "3v6dD31gw3yCb6uxpt8uefWeQfH3xtGHU7Q523LcTtQsVYTFyUUQu35zewycUizexYGeRsYKpeNH83faEGFFhQ68",
  "key11": "4nz4quBnw4rzoTRWjXd9kEegQdBkRhPJphsSAeGyNVMuRsSJUnb6irGZTexohUcB3tZBXKLKsaWAr43n54vhqJc6",
  "key12": "55n7XAByKGDzBF4Ar957iytZA7SeLt5nn1wVPxTwqMgri1xruWSwXcUj2GxDobCj2EEdMrvzQKV6MCDrhCnLEdTP",
  "key13": "4aF7aAWLcpx5oDWfA2RKSo48NqBBtfnTXC9BU77GN6VGtHxh7QQYVYDUFgZWhX9MN7ZpCsTrZfkyHBpspntnnKzS",
  "key14": "369RbMFuDUSjzNPicchU9B3bHL99KhS2BwRwidLrAhnonoKq4Uw75wNrDLydua4DZxpZdkT7vcscqaV9WHBFgbCu",
  "key15": "4btqZK3UL4fE68EzAESaHxfiG6tXGgHytmN88iMvt1JxCutRfmRvgvpYZoR6cG5njQ5G3JrzRSZg4fRp1QWLZpbA",
  "key16": "7mP8h5ZXkFLqtNuG8F4hRwSMXaPewrpbFqHHnJXjNbnoKtxskWeL1jpLfpHaB9jkKCuvryALmu4R8YzftrCqRMP",
  "key17": "3ZLfFXJZFtLKoPuKEWz49BMx6iMbKrhiatRZDEaTaqCXnfyJ7RsYxhkeU7ucEpmR2oRZJtYBaj5ozxEgtC2ap8WJ",
  "key18": "4dPiwsvAMKspMoCQnDG8poGfJFm4Dwmi2wPP1vJuHdkfa7ApuRZvn3NTTrbZkUZMpdWGvR1wYtHGfVghEijZast5",
  "key19": "3xqDLunmeSsXuFGaYhmunKAtS9f2BPFLMwJY4Y94Xc7MERmnbVuSH4y7fvnD62VuHiVEHNTzsQs3ZCd5cm1aiGR9",
  "key20": "3XAMBtE56qvVuWoVBCaZ9tob6bcNFYXctrCGewi1DH1369UJRFobizTNiEab6s5PQ96Eao1kWm7P7x6rJ1jwPHwF",
  "key21": "24RzgdPyXPygaafQxKR2Gj5frg1rnpuXvXadgf9VyHVHFKKwEGjYpsiACtqaciSBDkDJR1E1nrYNJ7pssKtTAyNQ",
  "key22": "3XQAUdC2xqFdWhojiQpLbaVCXPduqKAj2kHqutbo2Dj8xgP1v4zim2Xxqu64jCP7DDzTrBVhsMnuounwrowivPR",
  "key23": "563urjJyHwKsLzbFR6b5AjyWikm81kTBMsSB5P9Y14ETkarV34VQ8CxwgdjHGEhTANuYqwkuBSo2tke7vBC6E9sk",
  "key24": "4F9hGQpcewXy5USB4ZbmUQWhnVy4FLtXxNHdivPnonyp5Vm4S8XeuqUMNFYDQmmebXke5BoLDHKwBAd1yPBQ3Y9p",
  "key25": "2XBobtTZB47N8y4S3RvmJDp9NmwXbqavMPDQfUKg5eEXSSiKZZDhSZSxaGKSTMRi2wZ9scQYcd62jSpN4VWHcRSv",
  "key26": "2GNj2xao8qLdwxznKWrLF5ULitRbVGdvDinW3fe8QAXxepvsvxEEo2PqNumcXDdrzmr4HHpSENbFKuyjDAEJhdjL",
  "key27": "46cmVTukTCfdxEi3PCd1oq1onDDvVntTft1HJwhfvanw2dbsJFYjEM3dy3xWq7Wc82BDFFwUPFHgMB4zgeFXXNT1",
  "key28": "455AzzaMNZ6qpJcJzfemH6CaThrNseJSKQmTHdCsMwZn7KGxsdYw2X5uBCmwkrkicisD9ETccFtC3TQGrYnizJRJ",
  "key29": "3GUtb5B9JeixcEzxk5nMRob52Fs1RNdPUvm6Cv3kMKJ8bPRGnntLWV8hFY97tPHVGwEQucC6mwkM7ecHdzSaUZat"
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
