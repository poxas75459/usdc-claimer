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
    "aazK8cguYfKGbNnY12yfanzjDSiJDvrpQCHpNKjpzb5MVnSo9w6BMPyhps7WAwvcnAz9MydPnjLSNe18yZTM4oF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tx4VFGhRPJLDGeHyjZmk2YyyR54Q2cvvFhFZ6oGQju6bQYMhqKTbdwVKibxfBeZqGvsysr9FmTQgxEmN3HaHBGx",
  "key1": "4guG1fAgFgeX1XGi47foG6fwA57veXgGyem71NQvVcgC5n7tetnuSKEY2cQ9ViRFkJ4UV4oLTLTWtgmAHuaXK3Wi",
  "key2": "4jGXuHhZnudFupNJz4Hudn8DUhmh8vjFy3rcoJqNXd6fyYhrAfPAiVFehUM8BLYMxLVurvetiLvxQ12RFPrQT1q",
  "key3": "3X6VyGDpwgtVyoPARBXgnPdtxThzXFwDT4Kme2KpwrgzevyxLNr2VSnGLYPv9p4wpsWqG85hPo4PWW7h1TbBQc79",
  "key4": "3apc9C88SVnt9ADyZdnpn4Bpyx9my14zq62QsCBZQsSC1GTcVQUYAddCE4nzFvT7MSkCYqG77YsBJf8hB3T4nX94",
  "key5": "5KaU9oLCHbtNeTikrbjN3jayX8iMu2epf6CT5fLDbroYJ3QjZkEsxwR4pj6uoEtB1rXYPKZn5nsmZfV3XGo4WWYj",
  "key6": "5AaoEJWsuQfRF7nzd9z3ZfJ2T1PHZ1JtRqcFrqZSXSgaNSzBVDDNzfxBr71TnHAjNGTM6SJy8hjjNU9wXMViFyZr",
  "key7": "27ucQyq7wGVF3dmo2pA6SZMSFHJ1dZwFnEEcrN3sZH4GY3UqAzLXXMENe4htPjwd5DWmWpE5B9EYa1KNE6NQCPRA",
  "key8": "5V5Jby8KuxNdc59TQHRPyM2ZZgBY6MGkUoW4hQbtnzfqWByUar2vyyJQP2BmR13RMq8zfVnZHVVRcYaH8kJvETgL",
  "key9": "2EEW6Sm96PuWpRT2KNNnPYuSgasNkFhkU9ECv71CYkK88tqMMBvzdghXsDLKLCnvRZQ6SRrJr62qfCg7FJwdBdVy",
  "key10": "5aDwxZ7X8hB2nv8UbpyTfrPfJEiAohd5wQsDrJYuDkiNB4vysXyWpH5V9w7PiTZ9fqWvXq2YaQeji8vipRNGwTBd",
  "key11": "3Bs4yVZLACxu4DhjtQuMrte7DMczZiKUb4gaWVYnQXnvGhzxTN98LSKzbHg89v6ThrDJoPcjye2A1EWDKCC2KTF5",
  "key12": "497HLWAbD3d7fbbcqBbsubP6p1oaid239KEqYdqiMNiTnRw1AXGMiwjJkRrUQgMCoV6S3yEdr7UJPXgmooYbRNy2",
  "key13": "38C1iiYJ9V8AZp4pVgBm86TzFikAg7VQvfBcvRbEgqxXxXVAqwGAFSjZqGUimsHNuJsSyumuqHpR8xqJt5ES8woB",
  "key14": "3aY53TkYYgNqXiKhRMieM52LygKZfQGEgMidQbVBvNfJLMjC69MMdnVgYa6wa2WjeUBH1s6mCfGqESa9WhdH2tEn",
  "key15": "3ZjUYgWREYVhkQN9Z7SSYvzLdTi2q1hsc6ZHzLTb5Pi5WMZq4Lu2B7kVg2cNwneQRAgBA375CQL1kCo1mbbLrQzy",
  "key16": "8k9ewNHJ7vCTefrd1dZ8RLibvkTZ4EC9Zx8PNXxnJ1GgsYC5GqF9FVSiE9DQcNghw6r9xqjxhFfFrTVNd55tGXx",
  "key17": "5X4FC55TWo3vKLc72GTWXjMpynqm8ucKvrdx4EpzdkzHzHwXJTiuFjNKEv9EVXeAuNaXiWwyhG6Uu5aLUFdudP9v",
  "key18": "2HYhGHw5Ed7Lsu7JyhcZYcsFmTgArruxRKquakV2mcJQMmBW8r4ssKJjinVZEqmdNgNFKx3QcesqDWUFggwnoDNJ",
  "key19": "2du1dW918mpC23A2Mf5P9rEa5NEtthL9wUdhGQYaCrMWLmKAsFhFjV9vNH2FNvExAfU8jQXf5C4cvQ2EWLY3qn1D",
  "key20": "44n3PeUkFywUXLpWtMPGLunm4xardq8V45qs2aSNEwmJ6kVy63AcLaQJ3Qukos6iYaNYAvSuA5M9WinqFFFNypD5",
  "key21": "5iDYt7NCpK5uUwuZ11SpCVnoaBbFXTgCgKb3soXJS4QD6gb7eeG2AadZJxEyrgiD3EDbLqZgVVo84uQ4S5am3Vb8",
  "key22": "5Mqh7RDfdDkzShu2TFKpp1s7RDiwJxMHEUpy8mDBzThrAT8pSaZiBxSdYiDyMYwaHPFLWwZj7bCtLkKqfgNv2SDD",
  "key23": "4eax3dB7wAsgsa4U8Uj9Aszw3KsFmLsEQrFQv85gqxRsa7Yod9eCS2PmEjwA6SVWRSc5aBEYi2EsTE1eRViYJgPn",
  "key24": "5GUkBf9jBVjqti3StQemkJzkRSXyR46MTyngRdj5kxeDFp9CgZV7fbbN37EDGkZ2cajhMCBArvVm3KjHF7WNv8Z7",
  "key25": "4twnaxWDmfKUyZxDYLebo3qY5QiQDAH7rWYEb56NFNzR5XzjtydxU5VgigmR9bQwqeXuvaY8Wo1yNxaA15jmDjvb",
  "key26": "2GrJcNUjmAEfna1795gF9MvfTHGnjH6MhxpXahcetDreDa4w8QeKM8GVLRrCrk2i2DSvcSTjctEDDBm8nHMpUZ7M",
  "key27": "2J3aWYthtBi12nV8D68dN7dzAx61js3EfKgXnQkYeFchUKRSvzCdMPcNtW6fLnRjhEHeaXbZ21vS53Vs7UUnCrMi",
  "key28": "u5q7mZjqe4We7uZqgiCpdEJWEX38NBZk6k9wtMKtKMYpdA36kjEAdFa6PSFv1rzMfB9qkfEzGeeL89b2zg6NzP6",
  "key29": "4zdvgFFMD2VCkWi11rxhik9yF9rJwE9t1Ck3erepJrvpNoS33AXnpHraabnse4ceLEh2z4j9zx3SQnGaMYwerLTh",
  "key30": "5cQkjMuCcDz9rEoZNCaLjC4DrFWTNv1wqCFDqxypBps6ydiaf2KMss6qQdUzsk8cBBGrs8Y4DWaBGemgMBEiVsRC",
  "key31": "5YxAxFf1q6Cn78BYSVqF7Gkyqt1YkYexSKcsQGbZWs24wfKFj5fKCbB6Ntqdh4PFV4mKBTsgiMYc1Y7b3jJkPLVQ",
  "key32": "4oXDCAVHdFthMY177yzgnjLrWNK3Wa6tYMCPGU94juAucYnbg2wrnKUXRRSzHFj954LksLbGUFH4HEYnV6LgoRLX"
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
