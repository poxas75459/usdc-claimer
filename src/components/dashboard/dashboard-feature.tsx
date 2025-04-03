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
    "5ncxdZR88eMbVAu18TMDHmjDn9rZYSpV6NDSz7gwB9f5zkVoe7sKNXQV62cWDWZdxWL4G2X5PnJzddHt4RzFajRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mdSQsqqxdio1EBMZeZCi5aSjfgmpXk3NDoSWbinjvYeJ5QKQLJU5f7wzeaTjDoCvPfSmNLUYTjb6iWi1Q7po8PD",
  "key1": "3rruV1uF6qCdnEVmGNDdTXGZpxNkGSdN43Ztm7J4rcHmC5LZYThaB4pqFemUoUtJ8M4dmi35V2dohvgF8BnqSHZS",
  "key2": "WvnXasBvjWdxpiHptY2rM7nnCp96MfWyQ3eC8pEhZyxnAZbQc1dxi9Lj3YSYVuyLjBuh9KSPbar3aroT29dJivC",
  "key3": "2sJLawu271a3VpNGuvB1TzhFMj9NUi9WJyoGsU2msSviQHUDJ8d3aNB3bPcY4G29z5mWpTvCgFmmNefnaFmLUELv",
  "key4": "2jWyV4paXW9KS2KLakTPEGt9Lcks7bvcfay3PkJcJ6eSpJzHcBYUkzScAiyGHkyb33wLJY4q1V4UiYuPBaQhxt3e",
  "key5": "2a9mxSDsuTTNxZJoP3Nuj3NECGkSqtdLqMQzxi3SajXK6afzuVvoghSzCDuadhvZJuzxQBbp9jzECmRoJVV3GUtg",
  "key6": "h8Z8CjyQkH2R9fvYk1gDVMh3dv5xXcV23ieq5pz1AwH7gU7FwjwZ5roJngLh6MRWpSUKSc8Q9AT8D5pXq2Fm1D7",
  "key7": "2iVggKFdM54aDMrBHjzDWCY4ug7ojhnrmptX2ZsPaDuKRRBZHt2AzNnqaxU9RzWVgVaLNF3VPbwC8rz7PrwGWksQ",
  "key8": "4Q1KZ4zakZwM8oqmqrvdBoxFn6bBGAApMPMm17ps48aT46xcRF2BSmd1kKZ4FaGfQQBujWkhFCpS3rrPoBRa7wP5",
  "key9": "3HEJiNfuzCouQE38LofQyK786eFrgDV75CduSvoLr8Ddj3j78oQLNoAotsoZ8uFhGFhK9AfukaxkaF1YgdCRvumH",
  "key10": "5173kwKP6ZWfHVXhRt9uZNRxfrbuJy4x1XFFvhjco9DurTuCxxYTEpS49SiMV1TR1PCA1m2UQ4VPBomxXNUZzB8b",
  "key11": "2HuCu53pWpi5WJGLieviKkvpAfaJ1UiS8CDTxj2L5QYurwmbpsEgJdpRJVcyaAMusYD8FkchD5PC1818iuX9hdfo",
  "key12": "23mf6PorqFL4wbSSg8uZnCPZMhZSUN6ejhTyKLhqDWjDCLEQaJUgedJtiTu8iGoJsycLm8YAgpAHZzwfg8cYKPkw",
  "key13": "5E6kG9xge3wMJiLC7QjsnAiUq8WyYv5kfTc6g7SHePaVLLKk1g6UbQ8jTx8PSrLHDHeWPrE2HQpQwCe4foAMWyAt",
  "key14": "k7yPYNauwWzGKKtJGuSbGX81EdHRmJm8qiYKckCkW1k1BijH2XBM4sKFZdo3rD3t7q6upyzdxDXhAPeYBpEeYt6",
  "key15": "BkjtnhaS1zPJRtb5Mqaa5PMRGfCF4E7G7p8ooDxALVCscM7UkhRk4omVE5Kx3bkZjquMpwhhN3GkPvjFW1EFvo1",
  "key16": "4jYQ8FqkgwmKPM7EAHQse7t6ErSKCnsGHRqgCCiSs9Q6ZhgqJV5ndqBoD8NCLd9sN6SsP7mhxHd2kJhQFMD1tTr9",
  "key17": "2xKdN75Lo75kEMXzgxxhefPFRMDyXR1nsk2BY3mcv8pfpfpbwBpngcuSRnLsL1z7kELA3YnhaqovWCtrXMKqMXWK",
  "key18": "42eQtBKMtv6G9HkD4Vh8fGxqwYCN6LB8jhwVYCCpaP8Mq28ojJ6hXUAton3PL1BiyEPq1sCj7VPKb6ygcqnFuEHK",
  "key19": "1JncuZSV1FV15Z4CthgXzMr1Z4pKa6LJeL61a5U5nPd7vVJgGMqDLxcQAKDTTMydUM8AW5zsTep15JBHHrMsfAQ",
  "key20": "5eGJeDWmoHY8Gvo4fgL1kbMXvrtae5CMD5dmUmWpUjrWHCPSMjvvTanfq3wnUqkM7TfSWE5Pf6xVbCUCGD7cALWS",
  "key21": "2FESFQa97m97PDZRYcpBidDMjSMX3rN6AhMjFdd9zEjKr6PQa8EvFCi1QrKp2XgzXkcukxxUzXQeRibUxsLZr32E",
  "key22": "XHDvZE9bdFfkutbkLk8yHSRf1pyhoqNNQ7PEZwD5YxeNRjyfpaHHa4G4MUau9aCPSRbUpjC6V45WTjgC2xWDEyx",
  "key23": "3Z4nCQKqQHPJYsjcRQU4qGAkdsR7DXMgBs631BTroDjFBThXbTu7xTbdCYnJ1K98oWeA7rxUgC6Rbs466LPT89Nx",
  "key24": "4f1oGPaJ9xUEJJKzYoE3wPjMKiP3J44Nj5rKAJHuUHaUd7AfrKf9Cm5vHEH7vz6qhzR3Dcx59EnHnLaTKxb6EVwE",
  "key25": "2KHyPzr6QQ1pPBxeEgJkuAsWx8CLACNzsXqSigWhwx6k2bhBcP7dJTTMKnw7zbBepkHnKKSxTZzJzDzY9YLE4fYd",
  "key26": "4XHw3ny6QqXuS2JR6TbEGXDgYY7gfTZXVpLHYkFRBRjdyB9wH2k1C5Qn8dsQdaYrYfkvJcFKhA3T3uqUHgw24uKx",
  "key27": "319tm1GEw5LSEVSjGxD2taJzkgRCQnpRjYLUcCZaHbwqprPtEVkaPQVF5Xtb5CH92Q4iZrvt8JvH9jduaEzaQD5E",
  "key28": "4Jrioy7AvcKGsxric1716LmAp4Be5PQyk1ag9Z61hY1CMzJckY3uTwv37sfJD8ciMyydiM32RhvEpe5KXWYZe4wm"
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
