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
    "5DwXBXLS74wuj6onvAhfoiMNB2nV3tqprPHo946cTTCnkWS4kLxhMiLW1qSawVMeL1MkpyKApPruSgmviqDaUW14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xCwi8C4AxiGV1jLJcx69g6F6XCP1KmpVZbTtXBLatFfsnNHmMVDKwEu8whGCqKQWaYxkoLWaeJmUNAvGKiu7KGy",
  "key1": "2zGsjjodoJ2n4VbqSQfwPn6eQSM99zDkqkHGBJ4Td5FNtFg96rJRjC9CwESZJkYSBWpweqoj737iqMHLBdKAtKvm",
  "key2": "5q39WY1fAjDQEpYbyzobXe6TpwrKKjLXyqYDgZNEma4RXATSRHynEuxgiSw5pdkvC3tEoREqbT42uP21A7rBy54D",
  "key3": "4Be6cbTn1iiU8zjdEi9sewQaiMsFCuWNo2TBh88exMXsuHPP6YBBvw9rD1PMskV7BXaj9TkF2S1aTSQtDzg1gzxh",
  "key4": "4CVJyUnE9R75ZgcxQ7asf4FRjGPbZh4atyhxidyhnET4kkBPw9Hq9VrcYvdqfSngqHzQBQbHQWpzRXWC5AU46wRp",
  "key5": "4x8rBTAVeDJLXYfmPLjxsuJjfGUDhYBxPuzxGUwBiinDZuf4ykbJRKXS1pt6Y3jspSXQJvUrF3QnsknWnY4Ze9YW",
  "key6": "qMXdXrjnTsLWqTp31utvwJiNoMhsgubE6iZihc1b3BaFKbRah897CsGBwXorcHNb5ASysi7xPr6Umh78MvnXXRJ",
  "key7": "2X7szv3F2m5oNrAmbr2KuTb6vpe2tGs7erDo63MbvgkQ4sgdtnYfMBR2vv4pATLPEPP9spye349QR38edKQ2ELkZ",
  "key8": "2QDVvVWfyecFjjARcJsxRmVgD9sU9euo6JEkPooV6QvXtdHvbmJtJRUBFaUQqrRdXiPm1QfNaiTeZSK5Zxa6BZDN",
  "key9": "3vGNviQrYGmtv2zqgZthCBUCuFioyk77YodjJEWBuJjXsBzbJUvpdwWGkatzy48zzQhdDVearfdFsoqAB8xHhpNZ",
  "key10": "7aCur3PzdhXCoVCwrSL2u4gomvfPv7fPDCoZBooN4XBbJP7hhEXv37RbiBo6jpWaKpcer4b7eZqh6B3RBg7Krc7",
  "key11": "XyhYoLC6mPxvzc3HBiPpxP6g1Py1xgtSngbKTGMeR57pCMrDyFrYEumNYan9Gt3hkEVR8uLr6aHnQZEf7UHcGPX",
  "key12": "4SwV12q8KBHErdf8UReTKjALgbJDmGtsofu98Ck7upsbo5f7xeoAegmdLD6Vyno6paTMgo48EVwki3sWiiqCxfmg",
  "key13": "3ZBApm3dSnVHX4FQoeEb3tqHaRH5ayMF1j8o4Y4bCSM5JXXqM1vPeW84nU7gAv2BBWyDTB3d1CTiqK77zZuADCKY",
  "key14": "2jTHbvEb2XZ7u1xQ5F639A9ZV7MyVPBXyC4VRjhjntLJxeGNDoSETEaVHQfEV971Se7wCRDsBciwygYpqXq2vsYg",
  "key15": "45pN9FpL6RuDge3brDVjMXduQ7ddC83V5bjZZ6ZfUhKpnVSYBVxw3NG9TikERj3WzsQgipjdJaHAfpYzoJXAuqha",
  "key16": "RYmwhbuR1rfReBSfp4fCC6Az5EMDoBxgQFWV6fpxaJuXpu1UMoatMGrb3KpKXiApAQbKpwvnYfK4UvCsDW2q1WV",
  "key17": "48J87p5qDPuyAsKVEa3GD5VCfRanKev7XFmebSQv9kDaoGo5r8RYn3BuuaDvoSvRRi1Z9TZFVnAeTe3VkUw9pBJM",
  "key18": "5KCfwucSJ43DtA9J9vWYq6ZLnuEGAfwwuHZvgJarBcnHQ3Eg31MYcKtPBwhq4DRo8CWSmnSdFX78xpcT6CCLVyb1",
  "key19": "FxjxVDs38TmUtq63RMGCGRn9GU47UGUUa8NaFsG8ygDvxMYgCg1RtV2PQoA1qw4oZADTaF8ByJ55NtA7GaGBaUp",
  "key20": "MZCU8UghqMBwRFbrSEbTJXYMoFGCBfpFq7eFbALChtvtRZDwrs3YwNQ2hwbwio2fRWcnNRnZUztuVNYEAHtZqjL",
  "key21": "2cBwU3r33CNLN7svrgmV94xYX9f9n5jJXcUyUMkJxLaM5cB2btMUqtJbX5PfV7ibjQdBpfVmcnoeEyiawzqWFzai",
  "key22": "5DtJxddmNQ7VBj5mrSHLeXhXyEK41R3vzgfq4L1FnmfB2cjtooX65Y7Wog2W1yTf3rxAFEcc5hmCaNKYqym6FE6g",
  "key23": "5wWbUzRn8GzUM9uUFWT8mQFmW4umfWbmgvumA1GhCLuwcvgGoEYieH6t4Uoff1o9fP4pqV6fbwzQkrCzS9MXLxF",
  "key24": "596wrBHVhFMHXsG4Eid9PSxFNN9UYfHcKmG21gDTwSEzDrQ7Ybk4wXErQC38qncUDzneMDPFj2TiRaBr31FaH4qz",
  "key25": "2WfdnjfJoAEPjNxtk2KK8e271t9WcExsz9yd2DtUBh5oNhceHRq9p6RYHpzeYCDmnxqojhuB6jR5TdCM3QMTmJ2Z",
  "key26": "5gz42vmhnwBNAj7FU7tCEHkKLLvEuAXZrKWZPrqGSfMgyEUdU9xH66tt1UVybG2nawgj4cEuAoA2mYWEpmpeS4wP",
  "key27": "2gV7nP74modbCcPvjtCvDdLYqpEe5xF6fYC7V6C4CKvJuSb7fLKSLY7SHqUJYmSv1YC3JHS8Kqj7kBdBVkKV21D6",
  "key28": "5MHcE3o9NCnQeDZghM1CoW4GLpBcUwCjcApUyLCY7mt8YhF359F9TM7SHS76cscAodxBjZNQT5ZJQ5NoHfoZFW3g",
  "key29": "2rKqhjCmLaGEh6xhgE4J25xLmDKGKFLGejqKHcwyUxMoxuyYAHzoBjyFXFTQrs8vSRmZBUtPKtZLhjdFbJDqEHu6",
  "key30": "2i6J2LtQPjcH6kLvKrKwJ6GvCrHrpvnMfpLcBYeo87kgEWF1maYdzybcNLPSkibFA5r5QGDsyN49nxF6BHNGoCEK",
  "key31": "2tgTFbb7Xavj8FK9r4W9wMauZoiJxvzoALYF6kpvKSpi1wnrjZy8Dn6yTad2n9JeV8uGC1YZFcPVkfebXaprkp7X",
  "key32": "4K8f7CWuipdC9w7uqwXPKkP5XmruCBth31C5VUVwyVAyLLPA3Bew7QUgsR2FzwkECBaedcx78yKAKBqepBNCFvsL",
  "key33": "4KkVJQBWQiXyf5mwhGaHyzYMcoRoD1vCmM6MRZh2iiGsmfryZDTr2yPGjUPYv4N3tzicTDQabAFA7fTHBnXfP2vj",
  "key34": "24pGX5dURoHQCNNDrYNDYxBg9dhkrhiQq1LDXV3cPk4L8HdrT4xYxDJaG9B9AHfCeeaKFEcpVJUefpbdtGvs2iT6",
  "key35": "48cENEjqgP1zKVuFho36eMAMCC3W62Knh228WMiByrNJ4uzanaLJ6pLneCjFPhbh3YsZ7xjeZw9YfYg8H2enwKfZ",
  "key36": "4U7GaHkhJ8FP175PFMf11FwjW7S9oiyqT6L1gHfD4Qe6vLy1QpMqk4g4H5VYKnhWNLFwpKu1VAm1hmByCoE8EJ2K",
  "key37": "5EfoEoopbFEkRRg8auAZen4z6Vse8ijs9DmqwbSxAWG9YTA5FQyxjupEnDkCF9W8r5tmJ2BBdi3ZC1UB5RT8pFWK",
  "key38": "jgVQwD6ESmctaNz5dmNAmyNmdpK2dN78LLQivSd3hzHR9n68UYNyGavHDn7fmAPAyoqfG7bz5P51BGXtSVScvpo",
  "key39": "3w1BM8TxpZFbkjXfsBfPEr3tdb9oqQJuX6MpaXS1TQGqN998yop98fR4TGTsQAkJG87Gf6BfXjJ4kbtbpXRaLmc8",
  "key40": "xSsTeCKYPWmr5HJM2KBVk2DCGGWxcxASdvyzd4nRaq9qgSnRTztmGj6C5SEhUGg51MwxeuDipdx5BAnRDvZeqbC",
  "key41": "373aYDmyVCPxnekQEfdPTuG6KQSk46oypz73gipZuxVSoBN6Z3ywUZ1f9D9XB9yKEtkxPsVrcNPvrJcB4DvyetC",
  "key42": "4WJNuRAyVBzNBS1nQbu9eF5epSX4c1LtWZ2frq7r6mn5As6G7pc8nKJyUZZ9mPHTHUFFP8UbfUpCZpVdA54hrSi3",
  "key43": "4H5iSvUCbzVKRWoipt7ze8wyZasRjwuPfffJEm5gr8VxsMNUYunrxWMgkaRgCxvNC2PC9xQU7QbYBPUBpULNPAHZ",
  "key44": "3pU9CuE3ArGMYGQVqSDCR7vB2nSwfUwCXtfzkEKKGSLBLDghcbMJ9HWY1HoUmHbJmCBbEZRJQKcXUAvLi5XxN6Qi",
  "key45": "3rkEQznXYSxxsriNgjCaLgyTTyNJPfHfZWJ2Y6j5yCqxQr698F7VfBXZ1m3MfZSxgTsGzjP6tw6CWZN2apR2PqPC",
  "key46": "5rR3YWj9SvErxkVUdHDb1kRoJ9CrJfj84Nq5LkpasnDWVaCJTHp2ZTXKjEZ796CWC2dUNBZg3fNesMERGLVCp19A",
  "key47": "33VwWMfKu4WkReboHNcxUyoFyLyrSGLpLD2Y1USuVMHfAFKUxirgHXDenJxejW3uCedu6CcgLYjs6sxC92uqdcjo",
  "key48": "26q3x51NeTR5eyrRsRuhFr5GEi7GFuuxZjygCYZH1woSK9MstsxZYky7H65gLzCWrCeyczFNqRDRMiBuUcvJJs18"
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
