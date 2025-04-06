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
    "56oKcgvcMjjp6ZgGj3V73oXqoWzcLWuPTd1vuVSQsYwadQNwj8vA2EhiM71VwPQBjpARb9YJuHk1WAfSiLGozY1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y5izvmAkA2AuL4C9aeEVwH1VirDA6czdzQpMFjVZA8Poy3qfVgNHejcx6TJc56FdxHAsXnXpxT95pisb1Y2fgt3",
  "key1": "3ygwTQkdgAiZB6oD5ycErrnCV4rAB9HQ2qUzGrsR1bhjgpsuTssyWWogd1Huo6UvFKajsTnDuM697UMdj4yUtSF3",
  "key2": "3Z8Bo4fZcUM6Rr8vKendgx529BWY3TLrLzuWm8HhsPSbBdiRvL3HR5q248kqgUadcjve5Q6KUTHzHZ9XmxojtX5P",
  "key3": "4373p2q2gnvVeZ7v27nyD4rhSVaKqJWjxTQA4SPgNUznNpDb2EaEV88AXLKTudTAaSczfEPZxZoPBcBBjAjRT3oy",
  "key4": "4YMMWjXXDJnG4nrudArE9TLNPEZEZzvDRLfTeYqPGjbUsPCMzZYU9o9XtkCugbsThFSDWdmZsTcDZuH7yAf5RTyP",
  "key5": "42RwnTBZ81hJsLfjxmu2mk5Kk5uSwWe8WD4wrCdZB2PeuHgq1jv7LpW24jsqzzpgj2RGtGkEVKkgZn7u4MhkboXW",
  "key6": "5ozqVSJLMTQPPnUKa6M5Kj45vgGAaDESi1uMVrTnDschHj1QGc4jMUnyeQEYcAvava5EeSRu225r37nDNm1b6J6a",
  "key7": "bo8aXUknvdH3iewuX4VioLuqCUkdNbStAVgwnWmiKeDShGfMzP9os8QRewP1MnoDQdaXPpxzHAprRZtQcdRVqoy",
  "key8": "5LYuSRMmhJhe3uU4JU43FSgqscxWnLzhrv9eHdNNeztZsrGC9B8Jt8R5cKp3F5aMjEmBnnTr4CFR8U3uoSzMpUx9",
  "key9": "3SK32J4Ais8gbNK2QZJvZ7cvqXZzeDsQ9AH5tKgeCzJhWRpcdddzWEUJXhvbcuB9ovCQD5RnWja6N1RopqZg2eHC",
  "key10": "2hhA4HpkEAvK8shamPHu2eTjdD4f4iKxVv8Mzq3iFrTc6uD6QtZDUTFypc4rt29h4U2xMugG5DwHW8H9cBXhBMUw",
  "key11": "4KTaXzEpM9rmyCZaUpKzxh2tQ2ZuGrTQpvGVjDGvLYC6Gt2B6qEiaeiPUxvnnNFfB5E8PDH4g2XxNnvpjXnMm6vk",
  "key12": "3zyRWwivXj5XvtdLkBWXyQiojii8VciEZ2qntvRt2g46kfuzBbQzL13adRNXVF1b1wVkxv7CkYn2KtPNSsmdtpQX",
  "key13": "2nY5FdxwfwwqumRiEyafY9PMSErzkoetTM7RHLRym4g2NzAbCrsdTfdLDnFM8h61V9SCp43fyERyyLyDSGMmMqkc",
  "key14": "4ziAW1JyyE6QTkB7NuRcogi4sDnytaeSZXfm4DqSAuqJp5jBv5QukE89o3K6q17tp6NZV8hZfwiuVBP5JbF7kTqz",
  "key15": "614zdH5bG4LDZtjKn7d8UHhQ9h8BCsKi89dfvSaqmUpMJiRUycGS7qVcVWPvxbp6P2FarV5jRjNPh4BfJQuAH4si",
  "key16": "36wwm5fEW8ovENj6wMgEmGyUpjwyT2E7poLZfBEnsCaAxF4gHKBEAYBBeSPhTe28W3zD1F2J4tripdt2bDrbP2bi",
  "key17": "531FJhcrPGrSCouZRgiqhfFb39qipB6qNmfZcBi5E1LPDFstq1N7J8EEkKA8fdE8GkBkzQFrdgSKCnsK9XJWpfXe",
  "key18": "4gb3pmow3FfR9aiHSd6ZBNp7pXGjUwygUdAar37ER5E4iGuVMCYS2ZVHpUDoWys1rxSb7hmqm3nh77JKMtuQo6Qo",
  "key19": "3eDUGrBQPUL5uvTA4PrmnobrGL8Zvs313aR8TbvrtAZa11iFpK5VabDTTjiu37mytnXRJBJrHT9LrniFLFj1dZFn",
  "key20": "25wRdTNhe1aQQXdrkjHTqPBFDtHvtzX4NJHZbvQYdyfwRBcBb5Q4pBDLibrRuV2FNZ3jEXtgRtWBbXJ8A99erKWA",
  "key21": "214xzhnaVgr8ixEAr2WowhcpofBfoEkux2JCJpaHdRqj9UbKTcrqtgac5whucwuW6nEaHJLbMCBS4RKvnrYDhQfg",
  "key22": "AC7msiPiJYP6ySS9xZfr7ZPfFJEeenAYNzfxCpubCjnSjEoCwM6hg1PUkChYFPzt9hwLu6qMKXQnjPYiBP5yfjc",
  "key23": "3SJArNYYiJitxAn7oCodnyRUSrMbwo7JW9qnmsZt2XSp4o9QbCPcDE9ZA4zJzHYhfnpHCJB8qaqdaYNnXuN9bUkR",
  "key24": "3yvtZwsWk1yXJLRptmyGG8WKdcRTVZD8By3rut9TMR6i8WgZDPPhFbB6excTTjKidTRiLjf6A9BXFVj4uuutEyvh"
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
