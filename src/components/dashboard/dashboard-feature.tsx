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
    "3ZkdqPp2UHAKtiBGh9fNha2cu29gx14CJ32miDQkRxe847VhidhrbXdzrJR2GGy9xuN4gBcuokGGysmYBDtPtLyx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ipWai4XYwdRQ8d1hXBjoX8copVgfc8QrDRVKJWFSggQJmAqw4T5Ppf13krKSTNZ37vSQ6kyTLw1ightZAufuhhs",
  "key1": "3zQ3wydNpXJH3hGLrAyDooiGMz769UR57YCu5uHG6jh7Pxik6AsqhotAM8axMiLyGJWg4gZwnLdFt2XRaBkyTpkY",
  "key2": "26WQ4NmNp1WMVKhsSVvXnN49xT9KvrS6sDQnZn62hczFqr48pTaAyW8H9tJc37g7XSXKgtNCA1axtJLHsaiZKfYC",
  "key3": "5qKxAdrwULQKLkCqf145Z3q3JQpY4bcLbGSKDEY2VTNU8yRGeXVD4Y4mhxbEJRctppLT2DCFsRWXYvL6GL6G2fHc",
  "key4": "2KMcfeJ9tdEK4hYSnVbMcjy19aKtVHoafgT56z9bZMd1nZVdiGSfb4mAgWuBuona6PrRm5h7BdfPr8XP9b4bHiyD",
  "key5": "2WZmGbHQmQE6MsnzaQQRq3X56JshUWeAfU9G496y3dyQ4yKRswXxabkQWLXY8kwKkcn3PwUk1JNgLcVQWzoTpxhm",
  "key6": "2gdN1heHcznKtK1iuZ8kvuiMRg5fVyL5ZAfBZUFJBogjujFZAtcq53mq4gS6S1QvXrJ3gd9YaDXKtazirnq8qLgw",
  "key7": "2UMGmrdjcTNUJ575wSYrrNBaztCwRuA9K2K1U6s1Rns3rWGnmDr38fUWs145acY9viaADZWaTs8m3rwM48caiJGQ",
  "key8": "4GDxG37iM1wBm3197AJCNGFpyhTCy8a9ieTcj8uFfe3SSmxpjqmiLk5RnW7M9xRqAtqRydvbzBT9t1xYpDM8Xpfy",
  "key9": "2jMBRRU1giKkB6H7D8H1dTLXGwC7hoeR3HNPssjtkqD11xrLtjhepKaCCqYMUadt1uTsLoJpvUzgyd9qmj1sHTmF",
  "key10": "4P2RmAYyQeKjwyfFtzvSPEpdgPiyt8rXb24PqcjAGdKQYyKHJahyLrzDSAfnPFRQywvZ3bswoXnmH4U1HENTe5uq",
  "key11": "4afPiP86Uzwm38fZBMUAAW5EWpRKXrAFUGSTZnPX6QpyJieawPFEcJ49JS3YneCadKMZUwqJeiGX1EL6mM2ETX8t",
  "key12": "9J18zyaaZiwCQx3mdvemzGGKCBZrqbMwwCeenYhE88rSo3YPqkstJQgPrkthqhEPzXprGPdkqSkBUGH7t7LScCZ",
  "key13": "5JeKoYT6N8RQFSNnFnSUDTB4ryDUM5i5p9QGYb14m7yT6fajFmg6DdamDGGFFzLRA2ZskKcdgHq2RCTe3NSNGNrq",
  "key14": "z37y6npCMCEi3AKya9fCeRRBQxhx4UL4jqwxraR5RGYTBjbZNJxUvNVmmjGkDMjB8WkL6f6ZT5C6QYaT8Ssh5oE",
  "key15": "2qn3UghZwfnJHKoCum6i3CYR5SLqh2xoN49hoj4FkxiXcTJ6uUKM4d6jVW3wDZtCtvjPRfSPEh86nbkuvwjjZmR7",
  "key16": "GRAEJEJZYA5w4PKZco2FqHb1WEpwT9vEKw5HaEgNQ3rP6nY3NSrKr7YoLPP9vNLu5eFrGpBpX8VkdzHHKDAj7Ek",
  "key17": "4bpJT7ui4qVfPmNmK5oewHb4tM2tZLq1AQBe7KSAokYwbEFwdNYaAxFxWnk5LCSHySb9asxVwfhhyuLBfPu1PHs5",
  "key18": "3637LoyeTfU2NsnmHyAnhUwSb4U2zyWkkhwsg5mZTEV5QMvMA8iNTFcxCPxBxMVguWcJdUNep9MBsgjJq1cPDgdH",
  "key19": "5sJMcm86DRumSKHZpK8aUgQFqpdHoUszfR7c83YJMa9rd5pEuCRK1KSVVPV8p6A9giKL6u8JP9gaZSbzRxzmrut5",
  "key20": "2bPyjVPCdH2PpjXUEUp9wNJU8kQooKis5F35D5gw5MsVUpqKer1rowDiQKVTF3nMsTfdayrL39fBv17Sm8JgNfkP",
  "key21": "5hwmpA33pvp9BUE9XWBvjazXmxLcsMNqoMo41wbMPsCEyVndev6wvCqnNiXJAQ4L8t4LHmYLwt24u5edtsmJ3qtu",
  "key22": "4uKambpKTJQtRZgzmudyXxfQ2F3MNrYjHWHL7nfYyJ6Y1LGjALjjGXuK5VFpfWG9QWSK7TSMNufn1SgBQUgCGdmV",
  "key23": "4svyysn3J9T9kEFXVAAmBrARERqBKCv695wVi1g6dXdH5rNEE8Bbqqc9bhVFMD9n8VQVzgma3dhGXyw5D55mQJ5n",
  "key24": "KkVSBtZPUqc2p4sFieQ4y3kEYDQuAxthq7FNsx4Leo1vq9m6kDQm7JboZPnMYoPfuzzNUCUixsY6D8av3uzNZ8p",
  "key25": "2Qmu9D9oRUV7kQ4E3Q5qJ5Fco2mD3xkBev56DoSArd3p42EjpyPbuppyvxLzmobGBNcddkaMxnjSZFEEWbV7AUkY",
  "key26": "sjTKNG5dLUTChoC45q2EHG4PJTJigSq6ru3RfLHHufADt8WG7LHgxcthfDJBbBEXhxnraNANXVqVz8VBZ4GrSVF",
  "key27": "2LAC5HSW3E12bEwnVyhMDQAmD4a3H3Ce31xxyG4oqLXbYaYFpf674awq4JtkF5KjNsiRfGGjVZgLZNgpkj5P9kX",
  "key28": "KoT8wgNQS1TE5EddGNqvycHWh2w2KtTZvYv6ddxVKe1RmrPLq7KURhjhkpT3ciqHqVmLuGEZYwjnPrpJ5ujhjs7",
  "key29": "bRvjana1gk46s9ZARRyeYnRWCripDCxFUhD6i5Yc5DrPV4XXuKSESLpdTZyv8mugATeQS4b4GhtTwC2xHJzTt2z"
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
