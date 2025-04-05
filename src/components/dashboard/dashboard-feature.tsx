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
    "8hLtfVsV4ivonXXzy7uKc6zVStZKGJaDmzQibpRm3ZfRg72kkBP7zAzgEx2PCCxU96ZPAfVWkJxSMeFjyR8azq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TWDetndEf3eeAgrQVwbg9A2qwYbdxxppzYoU4LRzu7MHQ6CFstRPe9zwjvG9nsNiRhwSrQxv5AFnK5i3g91QMiT",
  "key1": "3PfJ2TqMteAdypWKLe8uWYTwhQzjAV8E8JPytjQpHTm72GTk4ab6J1WnkXmwgxXJK8e59UNZgsDzonQFfL4sQ4i1",
  "key2": "3fC8f8Wuwpkg5YhBehemK8VWY4mYvV5S21w3wbeNRShqznPTTWDyuvaYWTimdZbuCQQ9WbarnLtvZuC3C2xrsDT5",
  "key3": "cxe9seCV9fh6yydL4duVTrkCfLz5Vdui8cQ4Jfe2qrQTb96SJk7UXdfT5WkCK6Uf9GPqtSjBLwTwTYP6zkgUdQC",
  "key4": "2NrdgWyKBnTugTJPsAnJ3AP6jGiHYkikJaS1h42fZHwbkGSRE4cVDzJiRVDNWHstfUNHSdu2pEY919mqJK8enT2u",
  "key5": "5TrA9U9ABFAnMCDGrbtbiVcYLQ2R8mr9zJS6yUTGg7zVAt9wzyVgxtLUQLWF4HnKETxrPyHBb1iJuhYk9F72Uqkb",
  "key6": "2i61MV97XET4PCZ43CRdtJUydR8Shg4utQz4cSnKn4QgnvLLnc3WGcoffcaz3HuVQR72cMiSMPjeZe2obkWu7yCx",
  "key7": "2pqziVpQZw7HEYF6yAVsnQrdN8GK15mk2Ro8v8nCFtGJa4fbdDmnbeYLaypaSVsTxE2S3ojzpmEsaN45ftUnek74",
  "key8": "65sRTDy1QQgxFfAXt9XHXZia4kKoDd98Vcqu2MPkig4qpCX7Jn7EBoon5AS7CsKqRrVhXJSPCuXoNVDzgx6nkdDi",
  "key9": "38tXF39y6yWJanKbxvBUZ4xAgoGFR6zcAdwH7daSUH1zWpvi6seiMhHUDvY5nWcJRhneii9gzEU95Uj1gubke4Tb",
  "key10": "Lh6gnysiauokgLVAQX34msUffTgSADehTQYo99xAr9WnrZtmkxYBwVDUJdg2dirSJWvrWKGvqR124TXBRP4C5NZ",
  "key11": "3ZjqVpdy5WYNR6kUu6FhyLmrG2GL7fBL2iXv5yBymnnmgnmfMPbHF28MHJF98j9eTARkYC9iovuknhvdmx5UEPYg",
  "key12": "aBEzfay7KHvjnQjfJZnBwbY5sqM4ysYiaVBKehyZXZBDh4PnwjREW1QWnoaFfHaBFVDZAE9JgRNrdxquz9MzjbN",
  "key13": "3Hv7gVMtSMGuMjPvrNwNhfvYdFEC4rvMxSmdJ4oPbNAXzCdE3tVrmGHRDGbtXgdkqUXW8UqNcvF5xzYSi18ACCVB",
  "key14": "DCrTZPFHv5Jefqe1nbZWK46XWTndthtkBhq1HqGgh3TGtRct11bUSi2W6kwQuJBkHUASZHfi1M6AMyUo2FRe2Q7",
  "key15": "3zJZp3Guf557gunjFY5D3wEuU81tFqbha6d9ToGWuQDhHLcHCk5ZobDMbT6visnSM655YopFqZhscgKTqrBTFP6C",
  "key16": "3CKAetBWt4GpE8DC3ehEWNdWZVEKfMjwkBUYEVkCy55mLKQCP2wE8qkZ8vpiMjorfSjcdtGSY7stPoBSgw7G3t87",
  "key17": "3pGZ9iN1M5p6puH4Hu7kJUQXwSyLysSMK5FaetPYCufBrRZSQEaNcnjdVnjyCgjvLQ13VRkdkSvkLE7U5rfkHf7v",
  "key18": "22hWTyG1jo1zb5wtBw9yNNJsLs4ze9hBUWLDA9zgbqT4pFiMZqcMW1U4gBLZyMsQAMfF5xYdwhiQpjntZaaS5ZPb",
  "key19": "2oKqic9EeV8NfhuTgiiH4FBQiKavKLgnFsg4HpVTkqfgJ4pJJ8sRDFQbTYp6DSf1eELmcUsDhVUfZ3UkX1Zj1xHU",
  "key20": "3baL4KALRDjBPhePQyq9NMx9xFQuMqTjUfMeBi5Jw88qzHAKfNot5eiAgKXevCuRhu7mZJa4e7ioGtMbMqCcwEvi",
  "key21": "3mhXP1XPJytqY1HeCSpbK6d5bsL3qMu5bdEV74SchieAZj3Jfa3Nx2tcMY3XLwAGgLyJjUTXNJXsYuTm99MHtuPM",
  "key22": "3SJKMgEL7w5TbtDpTbcuw4WKYWnmr7rT8NXtczpUmeErkC7jHo7uSLZthFqdpqULu39rYhHSc2fmFH21xUjDjdUs",
  "key23": "3tiXHqxJaufvegejRAxsqQ9pxyKWoQAygW6RxcZeLGnHYaRo2hU8BkMvKUA6xqVBuufauoqV9Ga6bjJHok2njdTF",
  "key24": "2WCR4q4DTioqqM7qdcmWyJYsTqb4eWzBfqg4AyC2cLZG4gdN5LnQAEKrPNnChDT1FkAcodpqonxyM2doi9efEgBW",
  "key25": "4UGaxuAGssRMU3tUi5cygxxGKJyFR6b8y4qnqiy6ysGwpc9k55Wmn7VByv9uDtu2FHmRpYUnRBL15uMqxYfttzft",
  "key26": "4hRzHFmnDHeW1UHgqtSyhojkM3eoNDb8W5AfebWWACPSw1FeGftLP5vfNWFWF7W9zCQCe2ojZNtecdpkYKi4AhZC",
  "key27": "2U7331D3MdSqZzAsAQvDoZLyyspfrAfT2bZd3CKNiYAc1Dyi1iq9Z9W1KrZYaz9B5UMF5iv5L9ABDdEQmy69RiDP",
  "key28": "5iRjQJpB6BaTfSbeFcW6YaMuRzfTC8cHgrhPp2MoX9JQ65czrHZdmZLXye5467m3ZqYb7NQscn6MA1iUJZaeBsTH"
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
