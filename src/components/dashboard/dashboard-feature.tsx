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
    "TWob2Wr8x78vLnkBnH4xBpesRX6dPg9dTXzs8itLBxYq2kztoScVPQXpP2cW4XWxw7nJ4PpgLovztHf5p5kDDuc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XDEh9x8QDwd7gGiMq6nYJvR3K2caY2La1Knj4w8y19SRBU1vFhi3ziFruinASFoiWLJDm4b4Yah8J1GyAwYep2A",
  "key1": "4qpybCBMJ4MftXNkK5oM1SkpuVVk8oEgBRz7KRhn5y2BtGuMmDbPeQqDqM2SkJoXD8LL4uZJwbMAAVUvkc1XE8e8",
  "key2": "iKJDsRf7hNNUGyj2nAyXjNxXvGUEUvYE1oZNRFsDFb7f8uurHX2hjcvJ7UJxNN9xhUFwL7nKRG8eFBtRWvMPbju",
  "key3": "5FfoDevv5RNAprN5uP85otq6KVHJDKjtH1qGe2th4LSkoj9SJvRPenrURFJX4cx6eFb2CUJEXvpA2wyaZR2RmFMZ",
  "key4": "3L44UL1yZjq4sYZjsim9AbmJst5QWV8ZXEPhg3DeFxCYg5kdoAS22RDt1cEGeGcMwsH9jxn6ZrnEgBqKUYcP62bt",
  "key5": "4hyjTfz3dcAy7jbqpb4VqijkSa6uAfcSQzvJYy2qVfDwJwiKFvz9dRxNXSVBWxphBPPYoSYNeHp94PpXxXi6boSy",
  "key6": "57pUanECvT6RxChfjZzD3A6838ocpms8tLymVKkYybfwfuAhN3jkMgmBU8b6oYfTByNAcLrYrCJb5dmxH7EbFAgq",
  "key7": "zGGjtpC5hsaZHhN3ZJLh7RXsdYY9nsFV2tdrSdH8GkC9xrojNtZtDi5tRZhHbrnFaAAp7LM2UuqNCH3yMez6oEp",
  "key8": "ZB3uhFey5GKNFgHofQrPcF6QQNyo4GSNLtRkPTGyPpLwPBm2aot3BQqL6KG4o2eYbsJYAnwcggMnadjjyfXFpWz",
  "key9": "g8ZApp1UJAmHsbaCaDBqAR8vJggRP1htF2en937nSx2bWKXh78EXUvJfQpMfZhis3noAeXEaGbTUuFdLQSTWZVV",
  "key10": "3sxjNSRdsY6JnWPdLvnGVCQnPjLpUXkuEEUkMURR3a4xtWEKkague7eboj1PnH54rLaLYevDXTcFGNhowds1u8Sa",
  "key11": "vmMo83ctAC95uhqLGgxis3Fuc2SupLz51GonCgXKNH3mudEDQ9YQMCgncwxMixwQUJzSHULETAi5YyCNt8uobdm",
  "key12": "4hEHC8XnZWGoxLpmWRRWLevrgv7vb82tErWXPCj5WVo5ibHoSE8jGy7kXCNFkGJJWxh9qCGmcfmPzQU9LPDepdvQ",
  "key13": "4SkVW9bJx2pe9fNQ4JdiiuiY4bNkxf8EU5Y4iYZqgiVJxNt9HDkJ5o8KW7qGnERwC4a9fmjhgrvgXESLQFUxJA5J",
  "key14": "54qZqNVrofErSiPmGz898JepALCAj9ERbwnVNmZVACxdv13S2juB7kKniwPQZ3WU8cQvo7xJkjwFU8wRjUN46NY7",
  "key15": "3TocAk6rYs6s6Hyv7n1Gqc4S4KnN3KuyeppMmqrnr7e8N34tzTjnFjVjLe1KSZuutsYUUsWv1zkGnZJbUC2TTzKY",
  "key16": "5ooH6TKBfTow7Jni8ZZYmrj7vGZVLyQWUyhPKFUaNdG6eC6RMX9YXsUg3fVReXM2e3psQkwNTHWpVFieQGJ6RTDh",
  "key17": "4GmkteWsj1N4JsraGr1LZJLs6kd5zHzmTxMHdLjQFPUr8Xnj1s1SuwEPQM52LJ4kdvHAcTHyerfrSd4ACKd3hX97",
  "key18": "5xNiAVwiU8Z3knU3C8geQg4z61VyENDYEkLDAhycYtviBNBgQhvXYEJJtHeR993V6EF6QXUQLAL4CtUY5QUQdcge",
  "key19": "ZNggDrevbdhn1a64cQWMkuT3xNQ1fWmAgBuCUMihXsd1mFhqChh5WSPEyXWTaqr9EZg7w61J3WAy354jVwZSm21",
  "key20": "5Z4pGwGa5rFRTF3Se2cwrfBVJhZkffrM1TW36sp6Lpvn6sV4TEN18rYPSWuGspS3UD8JNT631jsLTTP9agtebUMW",
  "key21": "3jhGaXB8PSwSwMzmxGx4YFRFMv19xQPeYjc1ea7nmPJwzgk31jXEY9mab9H2FQiaKrZrBwsJ7oBcJrwHTqhYZBXT",
  "key22": "2TZhLyiurym5eJVBsNGXcjijTbvJFBe329PkKvemVjkBhsCUxHAQRM7HQpBQshRcerVGdwEArfisWec6bXzbT19s",
  "key23": "5KQ97MbGBpSkncQVmQg4adnf4xEQphC9dRChQyJQbiVsy4u84Esi22TKPLVnEoEDBv54ueuthXVzXxA19ANfQmFy",
  "key24": "Hr1gSLfYVv9ou39M7NdPHY7znm4ojcFv9n9seDzN4rF71cCnzgBPeSCkoSsKBhobS5BfHNrKNCkeCKr83T7aarV",
  "key25": "2Mvh6W7h5nDaVhWnxy4Ax9CFh4smTYtHrH53ULXPa7LH2J3KvHiAa1hLgxSd1DyKzy5Qr99atL2zrRqYu3FDwFt2",
  "key26": "28EcqhUM3YJyaCxe749JRbVMPjTT3WFkiNGGbtYGSk96CJVao3HM2bpK6FnJjKxyaMJ9p39GjFtqSTr16Bxj8H9Z",
  "key27": "53qmicZHhHgdq3nNeuaRVCt5mcqYsreuKPiyxyL3PCq7ASZUt38tADhynnrj8AQy4yvUHCG3mv88SiJfjP1BXykB",
  "key28": "4GMegTfpmz8as7ubPrnwHpJgJY9YmTScomaNGtk8GjqyrjW4mtUAYkoAUV56fQGEX7gJSG4ASh8B9U7qDgzdhyJk"
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
