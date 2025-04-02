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
    "5AaaxhzYrrhR1jnBKsdFXVr3RYZoALyU3jHg3C5Ew2cjJ95UoMLjYQzFsAFmJRicbmQfqeMsm7o1izQ5ysy3n55q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28VMJePPNakw3HvCEY1XBkAVqasXhXAnwaUKo8qN1YFWKyyPJU2gHzFQSuTa9nVAEXXS54XErFwbj2uXPrMDf3e6",
  "key1": "61EcKGjkDqf4M9tgKHd2SW9UNJz8oNAX28o9oYNH6MncF4tHqYcC4JQ446Fvgaqhy3rW3TktNWxAeEB5LbyqWREa",
  "key2": "2RPLPomMRGtprijkm4M41nEM7zYNdL9XunacEYBXELRjgHW17MnrR2xVw3s2NAnLxd52EcdZcQs8opn2NH5oSfGu",
  "key3": "26CpLdaNMa6TrviR1BRtryqsQGCgQdS7XnqqJMYdBUbnz2i5CMtcuFPMXdhVKLJKQQddx4VYLXByXjUt3PPQVQKa",
  "key4": "oyFPFYpqX72yxU4D5uXdeEFLDATk2veoVKrzLeYb57CihE8frJ1KCovGwZkdqGETA2xjKmcLMH6T85EFbGfegFB",
  "key5": "4QQg2E5CRtBqPh7VLn5LkorD7xYt9cjtjcfQJn49PnEHbUURLXToc5kz3nPYp117jvZEY4rQ9JfUicye2ZbUjdga",
  "key6": "3EvvqM4D8AqTQTLHHVSw6ccP7C1KCXgbkkgvAJMrQ881AdUumnD8P9TDj4VMh3M2eS2zQ4tdgEHeUW7toJ8B8Nzj",
  "key7": "8VsPJfNWUUBX42HWMSV3k7XRRG2E7vne2s3cd7sqQLYed5n1N5QeZy4SixdwdrA6EKby6ttHcsLzZ6prEajibdn",
  "key8": "5vTPHxq9aZTMouu4qouM22v4WrLx284SqRaKAPbbnMQfkwpa2PxjoS65jKU15k1Nz3zrTm64d618BRENxQo82Lc",
  "key9": "28eL3EgdudF49aj2stcqo4qnVaEv9L29twKvkFHy6xu52UcRpubswszmz5vwMrYZ3fbJsWCERCwNsm8QPPEz56sr",
  "key10": "3EbwD3BuLZS5rKF2TKKW7iSC88cac9bfBincvUD6xW4jif1QPDZZUytbB3LRGVv4EnqsUYSRpkZbxskGzuHrGYqz",
  "key11": "5g7zZWaKxf9rAtUAkCLn82MGJvD9b7xT2wbFVVJ4sNDzTcAKtr2VPpfMqHJFHv1ye9yBujv9ccySouHDgbu1wEeC",
  "key12": "3msaP5CCH8b7te4RGVUuMS5njGC9MvqhguN39dMLQ1pzcBV7uUXY1ZnA5p2bpznLYbBuvJVEZZ7vkL3pHB5Ccqen",
  "key13": "5SgqSoHvMoU1XsL3DHnN44GdTRjDcUXbT2vBNuKJLZc7b6jxVnozNvSB9nHk8upah8QDQgstpevPDFRb4ozd6VZY",
  "key14": "2SWieNc1WbpGMCz9SVAzyskJ7PFiieupSSkTVjbY3yy4SyrP2tD1LFiH8kTZpjWFdkV6d71BJdznJda3KNWUHWHZ",
  "key15": "61SxhuShYLcJLLMegHUxcXt4sJ3vyVJ7EKEZxpo7XisKtW2vfz6Skx7vawi6ZtHgcRsCYmdiB4mCu61thpe7ApDu",
  "key16": "PtFp7Nibhbearg7oaT4pZJbSsYLGFCgDJiqGYrKGwYMuzho1XkEFetrUM8TUCJZ3gPMjwPK8q9yH8qJX72k93jm",
  "key17": "4TF7FXiVdTC42SEw1mhThLm6SnJVhgA4fUWUp8kcstGhfuF7vTpDYdm8ta2JeGYJTtTvUqkZh6Ek6gie5ikRuaYN",
  "key18": "CQ9KjsFecYhRw7gFWY21nGfVsRRpXiCwzQNm3cZAAcNchdzZJM3x92kaKGXS37QA8eqUf8YhwqA3fgc2JQRiNqR",
  "key19": "5w5XfRFghE69S2YNshrPR9yTV59EGcQz2NJkhDgBYz72d24JjURkyEAz9vzy8PSVFK2EKewHzR4uSy6U4jZw7Pgh",
  "key20": "3tMJCh8PF9VADMKFB9c6DNgDfw4PaAd3RWmGe2qwpp4wPG4VSzQzyTVQMPoHbRPWeykYLcGJUbHqJHBHirFoj9rt",
  "key21": "5v173k56gDH3bZbzvpTwJjTeaHKuQvjsZV2UTpsXYYrAcuYLUtcyiAwmuNKw3Pjh1JmC1rJ6JzqWwFCSowVDd9Ca",
  "key22": "2q9jdNzs3WqzZmLgbjKnZJjrhtJ8ANtb9aX7whSwkP23E1jTe8AFmQ3exHjSq4FhYBw3yBPZJiksffTYGikXL6MQ",
  "key23": "2iF6jZUh2Sk2Bu6mNNTjLMQG6vhADpATB8m38B1RE43DtTrcNGjew2i824nQA7KDJHEDC9xRBvTopWkgobZctpRp",
  "key24": "2GcMMjCXkhnE5S2Hs1MB7DpfEU8vqEikXxUqQmVW2AMcMFSiVba9ic6YyVNZGxGQmDiiBnD4E2P7Z1WBCvggGnUQ",
  "key25": "321oHQ9EBDcbgzT8QGZFywbjiCEbd54VM86smzouQ5JcoNBuGZA5j3K9BAwemNzu4viVSr2EbRAiCzzB392LRi9X",
  "key26": "5b2BoXQsWUqGu6Vkjdo7UwQmmfxTfAHXMfsrSmmZwVceC7nS7p8F55DsZzzCoKgFHmW8ZaVhj5dwJJDpFEp9Zrge",
  "key27": "5k6G8MRB3QMJQP3g6e8BLRU3BpfDDM1s5W6x6N94RHeJNKSv82vZaXRuXWEtRKQFjxrcNr63G9aoYVvHspPSWK96",
  "key28": "5tqDFYSLPBVKjP9hybNabw4ACXxAiMGkfWLPfgALJAiAMCjj5tCzrcBzZvm2W1ytUtNDYhezTWcEALAp4NysP3KU",
  "key29": "5L3hQwPsw2wA1hmmQZfddvPfzP9UgqFZbsEiTbGyZQ7HuKjofz5UsBMmHzKUrknyDPRZTPyRuPPT23WtzVMYFhdz",
  "key30": "3nZ2kz6M2CxArgFb9Fqhmw5PY74rgGRFRT7XZFSCnH7hHmoacZuQpcEGLBTVDDFpnt6Ya7GnTusEhSVj9BMhMk8F",
  "key31": "2XTj61X6gvg8hkmdCWbebDHHeLWr1LeVHgccwso6ELYPpbmjmWWJWxioh7DNUJAUUef9xzcS55Tx1Xy14Vrfkcn8",
  "key32": "4FTf5W71MWc619MoNo94AkJtUQRC6puHzhbqVfKKUWqdrG18Ue4dLtvQWXYLE3R1vDn1RMujHtniXNQnmggpwr45",
  "key33": "2B1G6fkrR7vZ4VGuniUwChwoEYe2B5auriuwVoCgc2PdrfwgjWg5k29pBKuBwHEyBomy3HtaL9zRaLPJXZWbNXTS",
  "key34": "37d5Y3SBmXGYduAXvWPb4nszof5PzE2nhUKahCmM7KshQ9GBwtryd26vKs2MsGivWTkYoQkBvnUUhXxynrwrfHEM",
  "key35": "7uQBjnmjhxHnFvz8gRXCeGBd1BNkPmKwi4AVBqJhrcCK1eu1GPRDD3PjV3X9qUpJrQigsRmqdZpmgwpMKG6PLdD",
  "key36": "2dYpLeazNqd9kXerChwqcc6Tc85yAZnNcseGNGmqUieg8MdDar1YXGG9HyVJWj1Go5gsvpXAbrWxQscDGce11YQe",
  "key37": "2Kzp4xTQa7pwJqpbLazuonKtCZFMb8UQexQZxyPEcWc6do7A5RkNdGVMrPk3i5ae2VH8JCSSBJogPLSArDTtfwBn",
  "key38": "2rg4K9gMVVhosT2pAwhDhSBbXwURrGWQ46cG5LTyZhakUKtRmuFidPLDB6BZyZBbZVLQ1Bhom5J3DY4YzU6sCT6a",
  "key39": "5hG5BgyMj1JA79jjKfBknvEYcHud3UR1VGSpPrmHPeNCv6vPQaycLJZfBAvHpUVcH4iFromi8zY55TitKC9ZWh6Y",
  "key40": "4d2EFRpz1k2G5PsaV23dXpMTvwLagUscTJxzNE3NpnRKjFXohfC2vgK9TUZZmrCQxJoWymKyaQSGCY8znC8ENTjq",
  "key41": "2Dwcwyr3oEpbmb85htXsLcWZpL51Uqs5LKAiLrUuhdUAkPePVvRLPKHx8SmfNa6QJg5eUxZWtPrXzhDkMHZtNU4F",
  "key42": "4fAMvrwwDni5XxQaZ49BDN3MHTMR5c4zNKNTC6kYKKKvfFKtMLEnLnoeUyTcuLUjvNzMJFHZXG5iXTbNKLMgVkxh",
  "key43": "4agT6Bh2KTnqtK9X6KzwgpcWmKHQLCFCeFV2j3JZjDK1QysphgCNj4YfnBvJn4XwBy21GqRkipknQDrwy7f4abFi"
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
