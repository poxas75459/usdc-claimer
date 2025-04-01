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
    "3AncN26cSHQMVQNqijM6RXmqCBrMSw5PSXN9t69aGgHKDRAYREhruqBDnTbMDb8dzgpoVAE1BdV354w4SHUYdzVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23uN6m3ngs1pLUUzuzUygY6Rawy7MsCpWVeBZSZ4xrfhLEfQunRBBA8fNphLoRMGe1Cjt4TGJeqMZjpEPEWWwHnS",
  "key1": "4UDFrrR9uKxNrnDXkg5NtWGiwHiLJEwvaoD9J2YWs5cfkoHfoepz8MxCYr9LhwnrHpkoGhL5joyu7nkK7Zd6c9Tz",
  "key2": "3an3k5PJXvtzbeL3hKytDg1ryjkDy7tHCiRSMesFEhsPngAhKMs6xBZ3kcDHFAuxGY95U4Jbb34DhcbvDMMANC3s",
  "key3": "2YX6RreC2G3V3WYEhXobcV4daUCFZvUaGLt6a5Cv78NUB2K7DXYsvHBgavssMxZ66BqYanvaDSdnfdzty44yaCXN",
  "key4": "25UJhuErZ8pmwsdsSf2VYkTAwgWXSkYy7q1mHrtPou3GEocdnYhYrZX3XhFkHT6a7x9M9zyaoBZ7TJ9Pv3ctcQNQ",
  "key5": "4B8Rw2XSvney5WhaM2g5qbyxMb8G3rGDbHzvd3WPdWFgtexavQAEz6cEBjpb3dM71KRaTQZbyEnwfdDuVxJWhKRX",
  "key6": "hRjpo4KMQEqqMXzgHuqCFEKSGwxTa1YqDrB4C1R24dGW4NcwrUZMLG8vbXGSRHyAJSdfEw4Po1fd22ZPf4E6Qu2",
  "key7": "jgQ4zrbw76jUrEVx8RoFk6UgdXkSZ3i2bgYqG44wfjF427TVevxbV5DHi6GicMdn4y7EJLtrqxiNCEuVzmDkYRM",
  "key8": "55zK5q6mMAfd6Kwwr5UuBGTyebXd8Nr6u1oXT54HcE6Bo2NZ939XUat3ygMkGDB8QSVNjEAMbXmzTnmTbGi4ENbj",
  "key9": "4EbcgVWj2rNCFDYv6VFR5h7i5Zy9Ct79ZDwc6Hu4dQMdNsZKY3g6kC9NoBKKXN7Wy7Rauwmbv7fiD734nHT5smcu",
  "key10": "2B9GTSqVvxAneU921nQwHSD5FjxdRpuXPCpGQATHTnLXEes59oyKTAb6Ee6YKDTRv9bBRqq9amkRedy27EVyTbTh",
  "key11": "2LP6ZKxTDhuiVAnvBA8XV1BtPFVuXFG96gyzjDon945wCQcNL9p3G8boo9waEo9T1zTtqTwh7hYhF71U8HWYtmHF",
  "key12": "UCAWhcQgcn8wCoZ7uaUSMz1jZeytpPp7dLP8P4soJFUm6KLpCPY3ybfvRfemppFe4ynSKWUs9Rwf94qZPzZMsgk",
  "key13": "4frv5xzPEWPRE62pPNpgD3v8nXTa5dvSJP2g4uekCKUfHVyDuQ54cj8DyhUTeA6nnEv7ibBX4dYQf98J5DQvBi29",
  "key14": "4E1PQQfTEqUCLg2frvcdPpTtJKFuXQtGfHoct4yGDsq9iqC4waQyxA9CjixxJbgV4ZTvC577JfcRJbQWdevD8MHv",
  "key15": "f86pBK5hVfevQq53Mkb7Vs88rpyWyh1kCAwokCBqEXmcMEEF5ZaYfPXTkUejELNUBh5n6UBmYbHKAWz6RBwiF5T",
  "key16": "ANHQoAdKcpdyehMuNruFTWdy49dYKvuh6x1BVz7tYn68ZLZRYXBCuvJ2Lmv6G32XdAMvMhd8vYh4QYALMSd29BE",
  "key17": "zkmhiZYN5VcP8R5sVfwgLebjvMkofAUG2HjmKtESjrLzmCHvZ1ALWTufNMtJMWx9pVbgPg6m53SdAHY99uFgu6F",
  "key18": "2hRVc3XRNeeV6RN4nSYD5DW313Jb6srygKnSiuyHLmNTExxoitUZvjRaFpLXpddJFqSayWFWmWYAEHqANYMUwde6",
  "key19": "4KufTdDeYiCpLpKtn9iopRc1h2psaQzwFmyYswt2xJnJXf4CgexTxhD6iGKszctFue2QU6AX3e8AsjJ1AoG8JeRZ",
  "key20": "2dX57uzRE5fhTnejzbHhCUNu3PdKp7TMeF45QVFNfJ6kpmJ7g9Ht2ew37rqeF4JE33VkwDwmogdvfMKcv864btAV",
  "key21": "QorWKpXxpqzhu7c3nf5RfGQMDuNNVjvtPgpj94JKWPeiScSekKpaVDW6TGrtrmDd77U7J8QMsa1KBrCzqvbA911",
  "key22": "5LjAun9bY217fnNgasygJgPqEabHEhCbE9hqW54MCqwdS1UFgxg7c5he6E9YdeQ5DegBTvTnDgV7RTUNT6jfuHce",
  "key23": "64HHh7QFJdZ3ipsZbAsydLomxyLVRAvVEqqjVT4f1sARix5c73jwdMBBG7AA3nbo6tPVUSdtiwrrJYZM4eJpHS8g",
  "key24": "4TFLML3JcFae6r1oo8RNL85xWLZJWnBECmdM5mykJ7vWQ5LTq8yEtsPrME2uFQSwDitikQE2HL9n48MzcsmDFESS",
  "key25": "5191kHH2CCk523T5neGo5VtA6EEx2ynR49HfvC89k7M94fQTvh6eEmooaddPoRi4j9MbwrYowMusBLGRtQCKFVLK",
  "key26": "5jynUABPTBQCfDhMmxjgdNqiAUuQKtzjz6PtvfNYUCQu5jQj3Jzioe3BGSKK5rzaNWzc2trW7QXbmzhn1sNoYZ2G"
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
