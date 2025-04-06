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
    "2TV3rYpxQ7kWMR4bHZxH52A3JWC37HgXzKM4NSazBoJi21AeMRUnRK5PQXdd2jaincFQrkhcQ5idTDQS4L4iMbb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kBTtpN9dhY3jGLRBZV249Mhc62FP7WPWkFf7tmq8Z1aZZGr16mm8ngCxX5CKJTsZXDbZQUn5R1TNvQy9HLVuJSy",
  "key1": "3MdoVGetA7htDcqLPDQMRzqizAPjs9zgixPTQHRfabDPx9qrFf6JJpvjCt2FDFHkvi2YRiKbKZUn2qkC3qmBQPkT",
  "key2": "3NkFY3ZuqvQEpCxE5yFAtcXDPUybKeLx63wCLr8FyZkBzbs8tF8HrZsTi4qoUE5hthkKjqfk2okRuWYfcHwnmbU7",
  "key3": "5FCEHZjz9YukxUwbrCnS4UYoEGz3kq2FEREUAo6h4unbiZMHeRD16Y6PyHydQ19nbm2sKfns3SB6viUPjYXPgRp4",
  "key4": "bKtAayUuCXu1thGefXkVMS8SKeHtCYy89cYiJA8vEezZTQSZaHxq9MoTXKwoohrARxvLPXBq8iB24JXR282yLFU",
  "key5": "2riU9oUa4RbWHCkHDgeHzxLkghQSVqv6GcVYfRJSyEsD5dNaYeNWzZdSwqTn75McLm1WdBLYeN8dUeTykp2Ak6Y6",
  "key6": "5Lun2yUXkpE3MYNF5Vfbgi3BG5ZEp6hcRXyBP52qFq4529Ag8nhDNtC9HuKwMyxNradVD8HN5U3v8GP8WgPr2D8h",
  "key7": "483w8FcFUNpi7xu5nMGCx9zAXZMpWfE2Vi2X4wtMu1bMkx1smtpbpupcmtAAC85BsA4X4BmpaGfmUDuXxKjdM32R",
  "key8": "4gRXR4GPZnXgQgH8qysucYCgbXCTy1mNbtQbQuzXtPTSh8EQD4oKkYCtx8mkHBLvZ1owoQyqf4zYneaEUzrhmB1j",
  "key9": "3zuDKg51BUF3KC7vbVfrgjCBAP7MKi8KhjpUvafw7jowr3H1PqXcqdEEiVqtzRLrR6cPNMDTN6aE93UUEbTrKeZw",
  "key10": "32e2PLh58ii5bXGLooxxqjTqH1vZvXi2imGBPUxTaQvb3LLWqkKCNTdCWSLQfxvNjgYMPxfJyjTQsTGTxPJpoRVk",
  "key11": "3GCiLEztz75tWub21sAKkehwGZU2SZgAKgVUXo6Rwty8nFJPXAuNsdAHsACQ2P2E1y1qouHecMRQShs8G4sRCJmQ",
  "key12": "36vy4jR4pNmBhULjp8bMfgCPWGpbxyoPb7xdqtcNvayDVUP5YYCnPsHmLU11VCLabQUzS3HcHbS9v556JDpQ6Ewp",
  "key13": "27LVQCyTKHJHhQA6ucWkRLgeaAcXetmfFT51NKbrAv56VRMdKT1uWihVfjKwZLL5KEQ6yFDcpoNyNE87Km3WLPns",
  "key14": "4mgzoSQrMzEVpKUJYFNKdmXttrGqquGnMBxSVhrwSxZ8xUfCthWWAXYrB8S3ScjHg6YTZg3x1abooYyqNT5DGCnE",
  "key15": "5cGibAwUUhwRz4GnpwvKKyVcQL9yrBBPoksfMSzR3BvPbs8dcqRFFDn2ZkxEkfp4Fx7tRou43hv5UecA5d7eoFA8",
  "key16": "2PhgZJXAQv3DEZtafdetQYKVzWBb3bsLTV7ReHb7Z4Hwr4Lpdx1dBRj2dFemGYpQSGBG2eabAfzZC3VvShA5CWyn",
  "key17": "4HdUyuhF6hFmdbbyWZFFDJTWr4P3NKSEEYzKQkEahBtMznyEUEApzfR3bjr5nfr8ZhjzLqSFFE7NtwoYHXhRiF9S",
  "key18": "4zmqLjFJZoUgTi3dHxVc1Rd1KtbButUWbPz3ReH4cZsYbKqPvAttLZwec516RxX5c8KPZaUZGaZbLdEYw9d8cPLw",
  "key19": "2hbDYzrJaXz7YAtXYE83v1UgSo4qPLogjoYCGAPvV3Hob9k58VofgBFtUNFGmLi2bPugL3UZfqepUBNqzPrZQG4F",
  "key20": "4tqUyaBgg1SZspNtbMg7bD3kfTNLPpMvGQTKbxWd7DtLSWxWbxHmAq9kb9p1A82K9UZbotKiDv54gmsRzPpZ2roD",
  "key21": "4UwivWwHV2rrNFpwA9mSWVScrzYVbGo1pX73nDJJX2Ghsyg31r8UfxFZnZGRNPRwi4pbmX8jWSYK1z6tkEHg2hn",
  "key22": "2esSCgX1mBiNv8KZyFLfDczGxzVQQdySzCrVkiQ6b5HWVNebUM8KMC55bRx9MCd3FrD5iM9zdFb5mBf6movhrk7K",
  "key23": "63b9CYmjtES6HbkUvqqd1t3D1r34QcrgNhrdjSxo1GVw4LRTzsmwxUSiLVP85P6L9kPswdbkx8Sacear98JsXiL5",
  "key24": "4mjBXd3SmuHnJRgBjxRR7cLEDPzhoDcijXVKqQoRGg5Le2yzZ55TSdZGX7KzDJRVXMVwcXUvWpcDpuccPPH5mWcz",
  "key25": "64emBL72LnVgKFyumBoWWCRD4uysyNfCJ85NYeyAbB7EPMHQTNDaDZqcaHDtTK2ugssgKxd5rfASbPyAJ4PcvvPj",
  "key26": "5yrNUTg66CesWdZyNpmNKjGH7C3F1XwbEeZkCp66bdCkcBmbimPJDdEi9pybMmAKUAHTi2R9n7NbZTo9opPZnxU3",
  "key27": "37GoXbQjWXakth6kqX8gYkwgri4x7USjB7VKXHnSqFfX1d2N3UndMhM58omc3UEPzmZQyAMxaDP9Z47pdskTNhw4",
  "key28": "2VkDZdx9qU7vDk38c9619ckpHjd5ggk5ZMyUBaMbaDRMs5uesCV4dgVkkfRGhZedAfVoT65V9hQnf3i8PUm764rb"
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
