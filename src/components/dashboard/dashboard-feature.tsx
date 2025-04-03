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
    "4hHKwd7dbq4UNkskRZiGzXkxep5WksecyMJuQG82g6M1XdSTYFN17incTSGJBAibWukQpqNMbUxw2B6sKWRqyq8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mjDka8gLp941uNg2Umr8mFjp7iGT7N7SdZiTgusFFJ652SD7ZTjAjmBSG7WaMgEnqsxfb2aJuDKuQzq6e4f4YrZ",
  "key1": "4gTBShDooQoX4mSrJKYP4bhaCGvHt1zNvRKzAsU8wJYjTxG7rRBxi9gc76TLb6md3qnLcQtx5eqvz914GqSgCgac",
  "key2": "3cEDuaNHHjyym1SRTtRQLZBcww1thZYFizpMcxNcytg4jVjBijGUjH7trATEXGsenAS8rDtqTkYNAxJChKCGEuLk",
  "key3": "2jfEugD2gVXoKMN6KyTjeHD9x6P9b6YH3Bybd2rvsX42WMSkUnEBLZ3nn59GdeL7VsYSwUGsHawZ1h89ZckDTbiX",
  "key4": "2XdxYBDRHg6XLTMUiMQnrPXumssuFuu554Nn41LF3fZRFgrGCRJSiyMdxcBnx8PgNxdkoD1YUWb9LsFZUGx11aDo",
  "key5": "iXdZShhvxt7Zf4NxUeowpsAKP6ySQq7qt76Br8UVNSY1e9kCa5ozMtwHkYBsZdy5X4EWd1Fccz7zybxoUvfDKdT",
  "key6": "2bTND5CqddudV2vh4JxC44Gv7qBD5KU2gnwoBBYSEVQtqebXF2UhyBMgx8ucnjiUF9tfNQEG4uXNrSRM4jCvyY3i",
  "key7": "2amTiSKedviVAVt8BvrTJFcDAvio8kUh6LaAkCat2J3ZLGuKV7TRxHDMtVoCadeycp136oeFgAyKF1odCbGoGf8q",
  "key8": "56qQYz5hVqiEESPs6e6Eh6HbxZnKY7vBUbd5CxjRY7sK61rM47SNvVYaJJpLYy6k4srkDzatB4cNRBKAdBC8HPR5",
  "key9": "2WfJCnKUScWuQNRTWsxYoMyb89BxMfeDsRyrtwn6tcMKmoY9FQem6k2Np2ZpQTxcMxcU28FSooUP7jswVPG6VcBG",
  "key10": "3sPDMYv5oWzY5XqfVRcWrmMCHPbT1HXTjEFL2VRkpiZGpDGKtUV3tjx9yoRBg7AFWKmsZjNh8QMPz8oy9SsG52f2",
  "key11": "hZcJpwzoiY2sTUAgDK1dbDNx94sphh6XP6B5FwdQhxZwXR3v2f3FgtQDoqL3nt1yf3nRD2MnqJcTLHKDE312aAq",
  "key12": "27Ry9B9pDfux6afbJDwtkEfb8tcJccNqYintz5gmiRo8Y4b1iQpHAnkEbuiLERHAFF4JWWYEp4rnnGB52BWw3ekK",
  "key13": "YZNimAZfHP1r3aRekK8ho5i2okTGv3KVzRF71vsb2qmwShjogGD359vdkVg6RuN4KR7nuQdq6dog4BH9hv5gyeZ",
  "key14": "4GypHukzjbg9R4ME2a79VMLj1v26FBndD21ywKZJZ48DrrKL8XuCnZqU26aS1QLG39bLj8GDavZkVA1tJYDRF9nR",
  "key15": "fCFF8SMsrGbMXnxydzYxpzVb49MwLF9Bwuvve4Qijz7GHeihrm2jmcY23agaKuEB9BBRDnJbCvSvb6pczMTNfSk",
  "key16": "5dDAg1LL52R6MJJS7VvjeeCXVvZAvH738MXUNz5Ur9JM9D3bntiHBZnTasGdRLxHJUSqJxSiqr2wka66aj7zR2FD",
  "key17": "5ofbja3viv6hLnw7sDvhL1a5uGz2Nyw7ffWY1Jj26YNvVzprvS6mwVJLJCxfZy3FKFaJBbTrTaqdk5XzAUsm72wE",
  "key18": "2dnWyXZAux6niTsA6tE4rmmMf2DiTbbWbBTdbUgLioXXSyqbZWKY5BqoKuNSPMvMd5AYBqvu22omqiMXXx2FZiPR",
  "key19": "aEdAXt8gvm3ERp7cRNtdmF6Gnv1ymDVF5GWSjDhQM9zypo1LJXVFCiaKD6aMpvKuadw883aPo8bVuassoGt1M3q",
  "key20": "51o1WqV4XDCPYctpHr9CGf7gWS2LMnj17iBJQN7xUj7xsm7pU7icBbSuJZ4XRZz7saU5QwoieyKLFBXAykX7qqut",
  "key21": "2ASvGfMebzDjax8sHa626UTu2fdfYvAiTFTxf1DZqyrqq5vPyBvW2RXfaTy7wPJoH9QRH8NMi4fi2fpcubabp87J",
  "key22": "4edgp34dQmwhJSyRWg2TxF3Xf92Hw39AyyPWqqu6rGKwxbPGdTtcr7KPumGWME7g1tECkDheTer6LhwBQrZWXMhT",
  "key23": "4JnAYuMDDy23FJGneSqYRkGYM6TwjHHBFqkKk21xHzFfToCCefFpwpsd9k8zJCtXF482oc7oNFoJVjbR5HDL4Ld9",
  "key24": "UKwkjPevgrqiftfjwL2bfHojTDwDF3GVuhPemx4PbR8vXM2K9tvJNUCWsaxo8pLi8jRcTESqRGnFkHfKA1PmTX3",
  "key25": "3oxcjvGYeSg7ReuRnjPuft3S8VxEhLED6dvwA6dTwyNFjqFhmrSZAYnYqy3eZYUQu4AkCfgm4kCRGgb7TBY5gEdC",
  "key26": "3yDPbqjrgx9t5sFGBPFzjQ2qo5kkm1KjRNVcDbnTxhFyi7trj5qs7VTowrZ7pLwpLz8N98teNL2U7Zi97txdsCmY",
  "key27": "3iHz1V9WQ1pkAT5pm4zRjuj7m8yvvZTdAL6uyo3vUYi758yJhfY32jxWJ1firPb9TZQ97xKCz9bUemseBerjEXdY",
  "key28": "fjJLBao2yuUBvU5qkCuAaAm2wknqk8wx53pyemZvoN3ecqcRr6ws7F76oFP1cEJCHKJjYV3yt5vpkDE5Dn5AKeY",
  "key29": "4Nq8DsaVry1jXjdk8Q1RiarG44Yom6vJA9exD1yvgAD3ka4VzBJPnfbKeUjkuaretQg1nXWNGDycagi67gf8gnnh",
  "key30": "pigvGvZYSahMvSiwV5e96HE77m28jRXYHTdtbZnByJYf7wXKvLPWfvK9rhi5vvYPTVZ52LxUJxMU4nFP5Ee7nMA",
  "key31": "2j3BHLacdeGXVnQxwpS1eVdDN8JxYHwL9qK3g6M9jsdrhmMqZJXqpTBU9qoQtApBhoCY79xTfWuqms6HLBxbRxbN",
  "key32": "3RBpQQbG2uKJMTYCqa3cXxWcdmamrrUbgtWTrDQ1mf2GpRimyBsBrnewLLNtq4viVNnUGk2g1f512b9aGFJGwiy4",
  "key33": "2953dfcHfgujTtqiQpcSSh3fveEbgocM5ExzAww4kLRTQPoD3A4YxDvC3GyTB4cTTH464Psf23E2tpkKNcgnAQbS",
  "key34": "5AUp9J3KxezESyry7M4beJk4SzxMyzB9vvZkvBYrWuiR6bxRdV3iX4Mme5VB6AT6ofWuSgkyGA7ky2pVJt7CiSiZ",
  "key35": "3ojxCQ1qdmiaftVBVcLGzXT2TBi5kZjwoBQtXjG8ciiH5LSHYUf5xxRM7UCM54swCXdopNQQGCCFoppkuPmXg938",
  "key36": "2pnwZxbmep2nVALnwNHgPWpyZ7roERnmU4sNvYsZKptXXpaVVnye8jWbMRxja5z7y7yLRqHVzcFV5GUw7so8VHnj",
  "key37": "44uM5mQgyPjyTjr6JtJwxAwQvFwqHfzH5qrgTfdXeg52YHFQBrVbjtBUnN7XZxyXvUagXbquU3jifNf94SQFC3Fz",
  "key38": "63QBUm3AHaZ598RBzUbiLgyY9ysr512kGSYwzjM2V1gxYMCSoCHVmDKWkHT8AtNKZ2rSfXCMLTHoVZaK8Wkf7JTj",
  "key39": "SktiA86BqXXCFxCDvi6pu72x828Y3MZCGtMEk1L49DsB56psanmcdv4eVnk3RJY3c9biGsXd28CDrBggY5ggZNh",
  "key40": "3CzK6L6LogCKWh6n2RAupEh59Cn9H53b9PQXRGn86ZU2wrZf1ZcFLesLqWcF8yrkoB7xeRSwDXoiTJWCzfRvEzSr"
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
