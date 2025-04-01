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
    "vBe9cFd93UcFEgYtwD5EZEHfSaMQ2grXTPW8iEwNkv3kN4XzioEwoChj2qAub1nquSmqBbMWcozRC9LHQmmvFDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BXp4McF3UbmowfPC6Mya36sGf2p9MfMj24cs56Xt5AfonZuBB7EQn2BKDacDeVXmCyCCG5MU5TCSg78sTtYJSJf",
  "key1": "vmJM2ocuw2EAghy6bgt3Ey9Wq4c3fm5UU4wfNn2Z6nhZDjFcxhPG8N8KCSXpQjojN7zkC9h4TRdHmwTmMPXsyW8",
  "key2": "2AYXHg8FhyAEqo8poA24aXic7v4SKCFx3GgbiGxtEQc1Jqb5maSZ4VfRuVj48fU1newFAt9CVfowSmrbKask4kvE",
  "key3": "4W3xcAVsAduEgsKRUWKQBs1cW5MtgZeRgWaVSGa7vfN7reikSHAEgH6L6LqQNH7Sh2f7HE1PTvTwNRjKRf7i37Te",
  "key4": "qfQMoxTTQHqMBR9M3z19UsUQschPXujqWj7KDA16KifYg1ztEh2kKc7cnZw7gNEvhGfKiZQQxUoBVX5HG4vJB6c",
  "key5": "3TBJP1fmtLF7A1749VBj3ePQPrdHJXAx3ymwE8uKs4hTfLkWf42LNVWugqTb6KN2HhzDN1VQYoEP6kTSLY8Ev65v",
  "key6": "5mkTtb28T3BExbB5W1qcQ4hwj8b6g5oaDhbLrkHBs4YQ2MSRLdy9ejKXS4CoPnzk2c1oT58DemRfbXewPcHj4qud",
  "key7": "yku3s9CdJqBv5g3PSJeGhLhwi9F9BYSb7mFo495ZDVgQc9PKxRF3v2uYM2uARgTx28iFLJaoySubLxu4swWaFQi",
  "key8": "Aej1Dhxbj74JfdGpFQtQxwHS7MnCJk6Yn14eF6D3DT1E1xamxW2awUtDxTnkG7ZsNtUjjnCyyGthW3QygEK6P5y",
  "key9": "Xf36d72X5jBtREbyfEZBnzvX6S3xWR4M7AELoyMeSf5tTykwn2yKfw6sexneyHTra5AqZbjQdPv8W41AQQ64hGM",
  "key10": "29ZGAqRAKnKKjKtGqpg31srFo3J8irKmpxq9GRPs3i8efb7LFk6PRTQj2Qg1pCt768UrgbNvg4PGcuvUtditF2UJ",
  "key11": "4DvhF7JRKL7zF5k1ZCSC7sD5KQq5DYuMZLsRf39q1TFnWJcBEWn1gm6vCJTJtRoKmLdg1iFGb8BEsJZUh3eqgvn",
  "key12": "5wqzcoyh8EX6cPKnFmfsi8rLshrV12qm5fRzNVZf3XQ3w77jqosVeyyjDv6EJhNTJs8C4GMMXEkaVGQPmcrR3WQT",
  "key13": "5XeEEZr2337eaDVJrPuC5U73LQgQTjuGTy6thBgtgVfEpwAJjYNsRcVwEXn3JdRjhKXQ1CuZQqTi6ijUwa5ktSxv",
  "key14": "28m2pgCw395Vdp13e3Xt17HrzkCn1ivkHrQFDdDxUGvV88XcSEjD8Pe2Ukfru7TC5S8CTVGphze6WGNqdv72tncp",
  "key15": "58C254sG218JUvGuSZkMH4efevG75fzgGHi5ZG2Lgqtv1T5AE4UsCmUrhg9enEwND5oaQ4UWS2BGGsP7FrTqdS9W",
  "key16": "2jtcEpHtVXXD7gLrfDQS6eXTDq2LrqzyAz1DiT5RHumaRwogVcE3WPBzxm6QDXgv3nWRdEsykb4WwtTQ5fyu6XaZ",
  "key17": "3bxjL7yGbsstDoVW1A7VY2ptM31UZaTph3dE6oDdppVjVLkjjwwsQmokdiZdM3VjABhjbYzLp5aNYL52TVUvKfBV",
  "key18": "2dUTo3N1zxiLQ8NNGuUvx7QuNDx3WDc9Khhc5is5Td9i9FetAdFtZpdyrAK99FRfDMReTkiM8Ku84752GQzFebUi",
  "key19": "3KeAgTeZYtJv9m98t91BypWZPkFhWHcH1xgL6fkjjVg99NTQVandA2W2LA5PMwS3oQdLcosXETuR4FvJW5j9RxD6",
  "key20": "XPQZEmPBwYQTnvudjc2ry13XnXzoVsvHN4aqMqcy9f6qXzhvbd6U1V1anEKqvJ9cntEJguQ9nXkDepe2t5EorXV",
  "key21": "3yPfy7dVc5aJWft4MTvT49gQG7yKXUTfCAJZMqBaYH7K3EWE6GP2qykAU476MrE7jVMBtAjaPgWkGBcTg9bsceBq",
  "key22": "3nU2Z35UDqWrvTitwz94UHeBMuvVTRXFn67xtbzycRjz3yKRb5kWeoAmU2HRxuhu44NK9GBQ9DghGc4dCHCQ3nZP",
  "key23": "dyAAM4ad5MEqKbbkaMNVikL5EahLtTJVzvnMq5rWHRh8no4Eyhfk84vKHvM6LqioBfu7ZrV19VtrPp64oXuWQVH",
  "key24": "3v5fsWFJafdN9NnvTgLH8adfZD39Az3RvGH34Qhg7B79EZ9iLvbWknd7ZkdM1TuBsCQ3cK8GKdkWVUvBrBqtFAQM"
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
