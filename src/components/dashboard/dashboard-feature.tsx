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
    "5CqWmCxLaLmH7HAzicGvkwqGXhgQBSosbAE3hfLVVzMX2KyVZJXSLssz4uLnp28NUxPQywWQ4pQEnKvYvqjz4Vpj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pv5chQi1vqru4XjB5FDQo6f4YzQkMhaZvJiE581xrgeTsfXuJRmEZYVS8LkQ4S7iAFjQzzZpAePqpGNWMJiiHrM",
  "key1": "57Pu2oTHMAWesTaQkMovXLyx92tpNmxQFhxsfqgq9zUtWDQBq93P4QG2FjrmZTU75aGg339zHy8gqdcbXZRWSHNW",
  "key2": "3yDLTiinDfdZ69akN2eFJ2ZaDiSvjt6aFkv4LtSYoq6EqvgU2XzWHbC5FKPnqnJCpPVPKZ1qNtpBrajW3vX6G6uQ",
  "key3": "676P9Sk6Wudx7U7uQiP2kQVbcRCsSfYSRvfNEnJrru9g8n8YQrEs8XSdbAA1ndfhD4BiDhE5ZW559uag51zFjytq",
  "key4": "4R7AyRxhne8ayrQAWe1BQLeLPJdVv279PXYPFiq34xr5AnSoA6M6QF2NgUQVxqeiCY9JZbmCkdeCn9B8tpNdvKyn",
  "key5": "3qekZxpxVLwBh97DvdF19fLAS16tkWoS2LbLzMNW5Xz67eKTcVFRvFTowsCBz89AJqyv6eBru22FDvryMYFEEUys",
  "key6": "vaF9VHEUAJGS4mHkqD82DpWYpaErC5Nbfu7nwVbmoSq45amfbQDsTqd8MgimJwKGy2WvD8soBAHJaWcbDKm71Uk",
  "key7": "4uwJHATKVeRpJZtpdAMoKhW9VTQRxQuj6XPTCBYA4CAQbCSm4sqdRXa57wfUSUgzZMeLuv4igE59AeV4idJMf14H",
  "key8": "2NVTn3szKg5NJ67TdqGtd3Kef387sNYgww7ApvHa21mVdutRctx2EsS4LSmuQHWJVJXxgYjysWFx4G35jUwKWJDu",
  "key9": "2gopt545zn55Hc5Pp9rWAhvRyakYBVnpQqRm6fEAk2qWDk4QSEnp5oQJHyw3k9YtHhuCJyvMGYcBBCsbAvJ2ziyE",
  "key10": "CFccvhqmZGJsyVFHhobqmkgW9b6WfjoGFFv21WDFj95JDsyCheeeG9biQNbCXtaoSX7KTs2xHuaEybY3T7hUniM",
  "key11": "4X6A6ZVqgQZVQT3RXhTSqo9JydyrzvR21sUAEPxxkTeoNy6YVS9Ktar4rw9SEiFZuojxb6AUrBbVyAfSRUADGFko",
  "key12": "bm8bz8b29ALGVHN4qbyGWqoGhKZfYTaduGfvbGZfn9aEegXf8sqAhiJ5vfgoYfpK4eMb8xjcMsDm1sG9rZYAhic",
  "key13": "2Bz38mDrJppgTGsZwwq1nbiMahTBcEBiVukfW9JwcY3PjXXJdtS2NrYgWzfAyzQYUR2rS4qJ2orkWTCMvQ5FchtG",
  "key14": "aHPrLjnsEEzj639uZtcY3xBcLThH2N7rFLt69UMotASCS755h1pSy9mQFU3J5BraTRjS1wkmqHhKKxaxnUtfd6R",
  "key15": "3Rwnj3pqSiCXuAms9eryr1aN92dLrzmtT3CS98mgo17hU4jLVY9j4YfRDkZtw3JhsMqjJvvhLVmfMagY3i2kjaTf",
  "key16": "DKPSJSbpvgkRqA5eqjByrCCsC2tum8h1ShpJtcr1bBs6eNVhkT5wkEdpaWe9T9pFeuSLzWnkoa9Fxvf44wh6SZY",
  "key17": "2yv6oPwjvyN5Lmig5G6Qn6ZZG5n6PXMDhvcHWxKizEQQqUKgLp9J3Pwmi2QcqkAaJGXcbp8ZCsQK3S6GScuN6G2E",
  "key18": "6MfB5xE9iem6JkEa5HMVHMHSVxDhQaDpkoDwyibmtHN6sPs4URZFv9VAyayvGo8r1y2b2iJUqEqgdko59Wy5F3W",
  "key19": "1pjtBKVo2r9iqXUnX6g4KJbvkgo8xmgV5ErxfhY2Dse7C5d77MKHv1rDiTYKm2s7iA8qzdQJQ9QaGmSi5Yxe1m4",
  "key20": "3V8hUJzp1XmJVycHU9QE2oYY66hUa8M4L9Lf9YLxorSzfKQMD5hQ5cixs93K4ps4oQY6jTMUN8aFMVQt73xr6xdP",
  "key21": "5biYBbv7wrV3N64QxiNtuUwS3KayJVk8z7B49y2Cx86WPcJjMSfe8DNp3JbhaafbqBLkCApU6LZiGGb1bFPsVpAu",
  "key22": "3TYRzpn4C2mQ4h9LTp7m9RFQGUoFiu9Hx1ERVNqrbMZkugzTc2myPo9LAysVSFmkz4CKCaffByzBbKJVvdzmRHm8",
  "key23": "4Siynf2xnCQUdSnDVAQhaKR8PZzNSdtz9gzAs7WdbkYCNRiF3VttWj7W3G8h6yVPcyvmEF2KM5VNQ4ziUUVKLviW",
  "key24": "4Y8ZTTx2PDRXaqsRNXwmEJtbU5GMSbzJ3uwg43iQ1B8zrR6Cr4ouGgkekMkfEd6A5C81jTaPE4igBnUVh9ahD1hR",
  "key25": "3AC8ropaqLop3eBvzURuA5xQpKqE6fXmuQDRzumnyP2UScwZ5oPVtvREygvvBhM7nqs9ivukPNnnxovr4R911ieb",
  "key26": "39P44RprYq3guBwPYoBSXXr1QX8c3zrrdhvWhVC9uEWi9qjf7fWAnB3WPNjfHPd4AcHS1dcqPuaCEeyKqGXk8vGo",
  "key27": "pgoYNGMaSKv5U3r9oXs1pHgx8WT4fHK2ofbVdSYCVjPPQrsP79KsKccCs13fAUNqx4WqXDKJMBXsqFy6YmFiSSj",
  "key28": "5k1TojPaUWRDSHkobbj1REDYzsmWzLZ2byELvcYxcbw9xm4sguAcq2nNEWfZUX66y2ka8FMpe93mguiYc7ei8tUY"
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
