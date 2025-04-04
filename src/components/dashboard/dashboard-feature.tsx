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
    "ACJ2PHY9Yzx2p1WjbMdaPmLSvx3y3YkEb851yb32ntBYAesvmZ6MVoCjqZChpxoWEHW8koJMKSqovL9KoMoU1im"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "okqEvFDgfowrberzCzNi134tjJgEbXD9z3qCQahZxHHYux6HjRdnvmZVMmKJrazLZ6grUXNqpQ8uCHJxnEGcFk3",
  "key1": "2bcxh5Sysc1KmzBVdtRsFYMuS1bTwTaWg2Qa3WxM2Aamv1H8SLQfM7v7xGa9WZk15TG5FrukqLFu5pCaUhoApYxZ",
  "key2": "4bX8B9fD5QEPmXvWfc7KMhq51xjJi5EXUSsBHJzdJsgjreF89C8XeV79eyuCLCwXcKk3cRTm3U5sEN396Ggm7wu5",
  "key3": "43YQRCyXbEtttNvAsSCesV8emv2ZQ92Ks2NS9jxzuxpjmVr5XMoevJco74QGKw6QTJNF8CL2vLEuemHx15SEMr3c",
  "key4": "4rhttDRJZ9heMq1i6yCupHeVCesD4FNZqWsJAp2f88qNSmKihD6s7Ux8CRBfrpVzpUaFgQLDkb1TDQPfN7zy7um4",
  "key5": "kUhSpksKU6jzZpQXYX4bSaBHZC9zwWWB5hVNU9LZbMEWCk4m39H56dj2vYAW9i9kFVr14xNgNDCe493okSSodQZ",
  "key6": "4Kd7xRG8qkJgHVMf7rpvaJoPJ3MB8BVEsC6Ny9cJsM2rx5DcGS1xMWwJEWyEEeJF2o7x6dk5UrA8t1ML9FEUC2wd",
  "key7": "4cgvMeFS32ity8qKKDYkkLEA38KVqNcMWeuJjJS6pAYaQrpbqXmso1D9PebBvW6MYxMKMiaMGQPkvLCsd8oJM2u1",
  "key8": "5CCh5CJt2VFs4sqwSPeHmiHzUMW45ojSz2oirXkHhKiBexADCJcKhT7vUC8s8Ute4WHTRpDvZ9xq8obL934y94r3",
  "key9": "46rKBbBSHww4SCzVWQ4pKUVYZBzWpzDJqFnG3EF22amb1MqD2kMwzJdU5sLsSkMZMVk3wkL4owjcGbP18aXPNHVb",
  "key10": "4oeaJSAXD8cuFvmedM2YkWxzwMgPbf3JCpegPZgpC38snT3X1t19Ajd4UuCNfQSt19snvw1M7fVA7jWdKAWB13L4",
  "key11": "1NYsvzN1NGyFYAzzYThveLDLm4mQ4xeL7PzFr3gVrKTUQmrn5SXzvHW2uuMvtZ31NABBVdq8n4dBV3JVc3T4HAt",
  "key12": "4FHpF18EGhpzfJEZFhGAaJ5CgiZcJ6n4HzFDJh3c9BEShRhbwvtM7wnkcnawbHgXiS6bZRvTZob1mQRFZZGFypZq",
  "key13": "2Xgv4QrLF7KkmTX7aoir4Nv4Njc9pzFRkj2RCNVXsYHDN98KVquMHa1K8mtZWuH9NhYrrdFYjwaU1kuuybQT7KPd",
  "key14": "3s3o6UiLucBVge9tn9MrG1hHmHTn8A9EuEu1RzdUDjADneWrsegSWVQ5UmCYH2ZDvAutCGF7pQEFfXxB3kqrJENk",
  "key15": "3SihUcuu4LQPg2LKALN5n7QXJrzLHqDtMxU7ttew48PHJP8BAut3JFo6acPTHwiWDmSwVpGK4WLa7QSaHYakA9nD",
  "key16": "BbcJd9UXaEzXjcLevtVgmjsBtxWMA2odBFahTpuKVwzbHLSM3hVU4bhtUgwuK5VkpCuVhwivLyKLzJeqnfRaSgN",
  "key17": "3q3X9BY9dsTFnJFS9bJcXwAsNttuQ9cRaLUNEUzBGCYb9Zz2uB14tegPPvWQPWy37oqiXS2kfTrJnrsnRMkqgy8h",
  "key18": "31nqP3eYTQpcQZTdoYLQ4Ed6eZpNAZ7ZWAwmBkMM9CYUCFejHqPWmJrBg8B7RMwumKApZpfUzEtkxnCXGkUXFC5r",
  "key19": "e7M4mrJQEbvgzUuWqwHkSDnHSExr2NJmTNAeUaSnpGuEXmZDExe9qC1XwAaWNGRddQqXyAELCYgvXc3SBChcm1g",
  "key20": "5vA7xdc2DYEuFTx836RgDg5svpGZaGe9bUfnSPxuKu2hRNDv6jDpvSN4Gf5A3sAcFRFS1f3ZTaRj3E3Jq442VBjg",
  "key21": "3MsBsw7rRVWbawTJd5hrWDFTNjBBFSEGvhvjZvoDh5XZtUv8xVS2kHyj8hcARvXdrxiA1SXS8XMXBfo4Pbb1Buf8",
  "key22": "3K3kVHQ2ctRqUQwwJqrbHLVufFfragr4Pqcn5odvYkWmD1XJ2PMHXZQmLoWHQVxScoYY9vGWLzmEhtPXTqsNLes6",
  "key23": "3cQBTNrH6VH8Gj3A3FhAsycv36Udbb2kATXpeuKJCSjiP3So9rvrekH6tSU1Qeyuv3WcNzPTTs4sYMsQCLGop9Rt",
  "key24": "5gFq1K2JHfP3Kn5oqyFao8CU46m4Hkvaq2niQE5gtrmDUL2T17tARNr5rB1cmS226B4Zx5yq2nthtFqK1s4gkMkV",
  "key25": "5P6gpj6y5pZF9dV6wKBZsoS4Rv3voPWtjSba79dSjJbsMg6WiiBZNE8MyXFnmpYeMD9s8xE9KDzermb4xUKRdDNZ",
  "key26": "3xtrqGFx4gzSoNq8fdaxE4TD67V7fphLob4R4ZYiuHXNh7HGjuz2HkECXd67QJFSNWrvNYhizijBp1yGP6wifitB",
  "key27": "2rBUh1jF7vVf1k8GPPdzaiiWqTgEDASen2q9kdQAXpL5zSzgoZK4TrUtmT1U96wTF7KdSKYTesQVbci3vfU7H6VE",
  "key28": "4JFLCRAA1W1i2tdXqBkgry2fvAgn59KG1aSj2ffPSd7BZmD2KqZrzgcP2yzBZqbL6FnqUcVuD39xFGE9Jgvmo4Zu",
  "key29": "5UzHtQgo9MLdDUp7uubKg21Fx41LSDqZa2wXs4ggs8px6hVt1AbXnhCZ9MCha2kEmrq4VqWcRPigHtTVDFHkQwD7",
  "key30": "66TMDM4G345qvGrZsu9tiLmdBVv78FeR7dU1iM4WoDtB3AFUi9NhbV6Xi52QP7Fo8S5XJXpF13qRFv9ajsorzyzr",
  "key31": "39Hef6rgcrF8P6LT6k781nCJz9fWnvSKSod5HGFu1nnHAjJdoCbJPdzcTBzRDVAKL4HpwATr3LTDzaQUMZizC4T4",
  "key32": "26PpYpAmHXUT4Wj6EhwpxQg6Jdxzed7cjCopofNpAmPRnfV17amAnRWLvtWwwAKvxxftoVYFRZcjYYswF1Xe6p6c",
  "key33": "3VrUQaAdR6PyBEMwKdEjD8hz232JXdzzCwyJcnU9aCGjTVZv47tgLh1WYyLeUnpR2u49eS2jUzdT3RZ85TZabgct",
  "key34": "4YxvfZBqcGMgbdT4PLDPE9fNSUuMHJM3FpU81ftQJgfcpu5nQojF1yt5cGG3mdB4ZbSSLZ57uVQQkzj9zCDiuUCX",
  "key35": "4h2SLJ2UHTXYddcg2tfgDApdFWH4swhDv6yZ49axC5S3FA3f5Wo9QBnuT1iHjtFYhVJ6zK6gugB55dQYPUWFCPU2",
  "key36": "2LJyTsZPJcog8ug5f9qb6CVwqus7DJZHSamKbG2N36kQuSvceKduQFVDSEKoCZYxkFgkjQXx5cRDsvrVEchs8mM",
  "key37": "3GPbUrt5qatxK4B3embbsQYaFmandyVrXpgKgdKZ3AhxynaTzLThnKBpECRccYGmYfB32f9bF5PcrriMsp1aRBQY",
  "key38": "5aLQnNB2SHxoFeFb5nVc1cesFQcHrgFt99wB6u53ibuyx96xgTaVP9ybHKLMTd6PHgxXV31HyCyCWXiYqiSoz9YV",
  "key39": "rXqUUQxvEXUyKp74dgghNhpTGU7obUa1SpnvcxDiwTNmvksB4w4rryPA3yQsGvFST4W2FGrrgfphdJdPESi3K69",
  "key40": "2mh8kPY1yZRWxD1ubsGKMMV4KtSxZYwD4Aw1fU7by5ESMTNcdNWYNgMDL6vGiMsqp1qUdCoD1KwSPtHfEajd4yEb",
  "key41": "exqX2y8TAWgM6fxdQArCn1Pi1qTNBUmqiS2pbzETXqJDCbswBhgTWZsSS1XzR1CwAxbr11cUWJcU2xpnb8bUBCV",
  "key42": "4AA1FmWUNcjxZu9b9BwNkG2cZ3UBCHUU4wExAkCX1vqWqPZMF6ZxRPy9BsEgnX4dZ123q2VnkrbnwthPeHSZauuV",
  "key43": "2xHAGYe8DPkD45JY6Z6xVPrVamV79rJXHRXsQfMnnRq1UvqWY5r1crADSGZXvdXpSCZMp3vrcGSwy93BkYoZRCqx",
  "key44": "4cDiPRxG7uZqUKNTKa5ND2EQ2p22WXHxMnf8DRQbeiB1y8htNoVrUTdZ2mPRLb6gQ6FHrciAGBfVWHFZERFbkxgp",
  "key45": "4mGEp9sWbFtHS28q3Xymapv3pJ1Bev6PCxCsVUGLVjdoPz8btHUuD68EFC19UNJMW8BQ49J6TBcEiLxhku1hbGEG"
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
