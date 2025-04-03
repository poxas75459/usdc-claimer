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
    "PTuxgukeqLaYAqGFnjsyaoMyuwuR6Xtcp9Y9mvXyB2KG45VRKcKqaDbPCKPP4EwGPnioK2XC5bSV5nRDT62B8a6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZSDoha5qJ3S7ErTqwZ7bgGHh5iiUibos23tUsu4ELQjLsT9NxtnBdnHyi54FzxHbia8FU79unB7VkxJKtfhGJ5X",
  "key1": "3qBpijYm5Kcr7XRjfvYgTj9wGbqkPfpZMA2Lb7A3Zsv3EKV7u5HjBo8XKcuibUHhKCV2V4iNhF2wWQVxSopSGRkG",
  "key2": "JyETJpPGuectJ9qbQAX4foXM8oY5pcF1ywc71yLX3zCmW45yQedUVaqidjYCEE8pkhECss61YEmKejcxGeDNJ4u",
  "key3": "4P1ZF2Zutq4kGh2Ea7EZtSKZtdQv2tzTtq41Vbmz81H6FY6AQUVAwFiqYnBzhg5fCDotq6Hr5xjwHsNmnitCvAvf",
  "key4": "5SJCcnrTxo31v5E9wX27Z2HNH416ZQChC3z7agXVxEHNQe5q47wkhBi2Hyk8nJi96x2AZy7tF9iVDsbBnX4A4fRm",
  "key5": "51TUGkqyvbgds6GysriKMcv4xowTZXhiTZKRUhzJLfpyxU781WudZtS2i39anQtFNCCe6bUhbcgp7RLhZQf95Bsr",
  "key6": "5ShgDzK4aef57TgHeR8Myj7yRUSZPLXLTQbdzgB5hXsxuhBfrriJy8ifpxBMawchUfekBEMvWTNuCkmCK2X5dLLx",
  "key7": "2pxhnvwJ2W19VvekkBNhdJ138hvpQVudgKjzpjyre9EQLkzC6EbYKFmHJuKXwn2tmiUuF4WX5WE55f4oXf9et4hL",
  "key8": "Rsmu6tk5xedPmCzdocT5nKyMQPBtJpLuvxySZb3sWrgepPQ5njjY9An41FhRrYstL9XDiaLYCyxzSupcSv2Mgvs",
  "key9": "5xAF3Afj7wtr2CQ14q5b5T7b8RaTBTiCBJxy6g3WBdeLqPwN9yn9LGLrZfK4itB1VyuKpcVD2GhYpKmst1QyR4ub",
  "key10": "5mZ8d4PNt3sZBke9Q4SWyHYFpUxfAaiwyoWG9zhpE2S2MmXK5QevQC6JNKEKcaX9anuKbRVxNNt1WhQy4PyKemMC",
  "key11": "3icwznrHepG7Gak6AZstPRoPoBKjefXKf7oZhPRkPSK2AADWu9LLxHZgP4cnjSr4EYqDszZA9YB8BrgAx6Wxqypy",
  "key12": "52G55kjufx4cxmkTZJ3oDTTJjSNqLntYfufhKQ1PnEtxCPv77y8Gja1XoktuJPxABc3uUt1LMEhJUdqfrf5UMBJV",
  "key13": "5BkYmYpGAPmw89pJaNozAkboBLuaN6aXcMpjBJJ5YxYurHkehjBS5dSzAyXpUMM6ZZvZk6ntduZW7upBLUkm2FgE",
  "key14": "rWoHQxzYB6sHg5BwevSYZBddwe1yQ2nJJ6KcVpKq57zSAp7kErzUaLTo6WPoPmEGgEc8N7vMjsimGgzmZEDcgAc",
  "key15": "JmzGmvfa4Sb81fGPHKY4XkY1XGLv5UPppJRVQfsj2DNV4VkaKyfQ8RumMPs9pdwNQLthKVMyXapCvHidaWq3FKR",
  "key16": "5gSKZG2edgtaP5mh8HUg76qjjVP2RUZaMKDpJmt2LfjdX958Y5SKrY2KmuSMoTix9mV1g7A5RjvWJ1cNUugzqGzR",
  "key17": "5ETEXvvo4sWT1ejr8n4zsBp6aXQhyvKgnkzBMnM7qUzLVUDzCLqUCWiTp7Q3giAQJZcuDU3rXKbShVuk2SSkWwRZ",
  "key18": "3CcAyYXW8APgcY974xhoKTa8sie4xcpmcYTrzsMMQbGgejPNsEM8GXKaNWKLaF1UEdDxtaH4VjWTLJaEUm7Qa5Mo",
  "key19": "3jXo22qN5dJnKERsu1t1wWtM6CNVbEGA2B429iR3fc7ZgpV4qKWW6o2EtvHG2T44csgV8z6USgWrEuAK2AvTvWMA",
  "key20": "5snAhQTSxG7xnKwdef21H5ZzEPfBP5D2rDB6rsNUag2H8iFXfe3JQmL2QztvYLDx3uUxqiGDm5ZrRGr48pYENdA4",
  "key21": "4yCcvvwFjq9wUvMV5oPSarck3qP5EDJXLRKRD4F3syUJJt8uG53ZdJHDBYmHwDJGq4N7oK9B9AgucEmvC36XAnsP",
  "key22": "2sDrU4y6CqRiu6ityzWczYDwbhEpLNJEjvdiL1q38ScqroLTVQEjZ75QCyw13w7LuLYgnx9quoKUQUHppW8Ggs2S",
  "key23": "2sHKRjAbk7wiRb6W6qUdtLXJgv2YX81Y7WkpYm9MVpSvaupzK9fpZny9bACHVfM3jyxswVNEh7VvvpEjQryKV3Xs",
  "key24": "cbC2iD2iu6bgK6MV4Rf25eMMmYPUp6F1V7235fxggw6HzAtvzybAriXqaewNkur3AMXomrcrSemXM3WGm8fmHYa",
  "key25": "3J3RA927K17pCw51T7Dby3YPof5uFiUM4WLjp7qxCATW8XhuBHgpcbDA5nBrDz6UCppnE3srJ1v6d43NSQATJP8k"
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
