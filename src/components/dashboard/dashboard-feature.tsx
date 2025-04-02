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
    "4LA4sWvtMU6fKrydJfKK6A3qaLnrmR1bLCWCCMtVoiQjaeXdhkJCArpFdpLEAGgSMz86haynCqx8AHxU6GHsCnTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32PTpbeSpJQPCTsmK9WDDcFt8YPjG6TDgoZqHHuoDzw7ENueG5CiPs3EFiUTQG9ptZBXRcTkbiqfHLvb5s21Xk9H",
  "key1": "5ush9HhTFpXLZqoHdGsgDMSRGfexwrV7r7Y9T6kfRLNT2Hvg8RzC2V8UCUK49XV2QPf4PNaDH1SBmHwidMphMtXr",
  "key2": "334pPutzZTCVFsb2PU8HbHZkwP7Zmp4PBpL6ZZagTAmMKBCc2kAQYfU6FSfZe9E6yofZcsXxSazwZ3VEt21hzkWH",
  "key3": "5kHcSCngFUdxX6Dk9SR74daMxbx2tPdD9mFawhwgsbXrKRu2MAU8rP3k2o5Kc3jen8yTz19Sfb3QpjTKoNCaTPaE",
  "key4": "3H8Mg25EJYzYVw7qez3Vc15xAJiZFvujHsKugemh3spV4N54jMxiptrvbSCAN8cC8Pvv8vTYxFHZTNoPQHy4VGH2",
  "key5": "3LtWosy6gDZNA2Mo1fysPY5PfGCh2edKPKPUJHUHgzmbFuqNTVSZWVcfCwYMERQkcUa7fkkyfWXZTb6ASei896j4",
  "key6": "4gFAXY4oEKiBEa3FSh1YiEjTH67orv6okqrabWafz7ujfGw2xkx5qJTNY43728ZKdrU5LiPV83hBYsFRdG7i4bhg",
  "key7": "63oShGUwBNHo5ebcNvL2SCs3dr6YRKSsMUieRCTzT6QcYLMo1RpEYkdbySioNsXpaLsVpnWM8NdAXKDZVP37ps9s",
  "key8": "3TCyceJcGthd6DMt8KaRNS9shotFSeteviPsBauAT5zsyq4XFFb3afEWwhPcCpSGhFWTRgHv7mKpUBwG6zK3oDZ6",
  "key9": "5G4Jmq2f8NNVYhGJpnKjivNqZTfZ4XSWu83H9PwbxNp8incUTBJJjSSQMG6qaRrRfyu4YMoRieUKrur5LtV2TdPb",
  "key10": "3YEuG49RyZDUohv5aeC97SGpXWDNVuxwbzrtAz56RQ7ieY65yk3ewHn4LyxXrWZpWXnVEAS4Lj9ZLoPvzQ1GhNWG",
  "key11": "HTAFopyDkTBJB46dGzgV5XoLzQzhWXUC8QFH3uPmvhNmobSV7qzWySPPhHeVA3RWX4A4v8NMgPd4Nk3foeKBK7d",
  "key12": "5PBqKMRaNo4LdbSGVPSkciPsTUuaAPceDRUTHi5UHbyCvBDjhYGnwbSGukKnCv83UN8GFqy5WDbDw8jUSbJukq1M",
  "key13": "4GhRsZ7gi173t4WJDfmcLwXsdphKesmbetW5vJszdmg1mihuXwZSp3HH8Af17Azinhd7QfVEBP32nmxYLzAnoFAZ",
  "key14": "2v1NPmXPHVwf6vmFbHSwi7Fu4MxR37YR8nf1k6VLd1zB9uyUgExDdocmgwjV5f5wSsosUZYx6z6sMTtEGxHRD7vt",
  "key15": "AEVE49hbsf1LGMyEJfmQzvrZpBSVJ49t1GWCSar6xZtfZBuskrYUUJhYQCkv947dAvGZ1Nrsp4pFEqjB9VfRJkh",
  "key16": "4JmWEAR8kRp52dAZ7SY2VwUaAVKE59vQSaycd6AC7PCRVhKTrZhhpDjET6FroRkjtc31aRqRRbBnJBdY3JXUwtSg",
  "key17": "44c5VNCcjTmbCewN9jCVCAzCPHkL87RHzFWbXgw7AF3HdCaxZc732Nn6u5Wty3ikQz3LE9bg7hJoeTq8SXS8YwhF",
  "key18": "2d55i4CLh7AoL31v91WaNT85NZVu4kA7KGpTgA3Yr2XZD43Q9VHwsXNock26AozXd1v3gBwdcEoVpZNZ9nqZxa8v",
  "key19": "4rLp4r1JNMhVctC4shs6eeSpUgBV69MmBpomyEWZCkoxmiayA4MKXhoHmkrQZsfRqDKv7YyfeHmk8zpr5Xpu8gve",
  "key20": "5Vvw8S7h51vdv4FyUJApykFwH7nt7RtzFsGDuhtFv16myqnRPFik2Xe5Mw6dcJHKt7a9WUnbgvyAdEEN2Tt11Dav",
  "key21": "4sJBUrxsyRFoFdDLjqSudjWaRSmPomVjvBfqrYLFzYDAYiayA2KDzpAZsLRVvxGhQiSvSFizSiP7ALi1c8DjzJy9",
  "key22": "4YtnprqCQNut1Y7jZ9V3GwChEa48MBkKdNyZyk9Z2zF8EZ9c1SU7LacfR7jLM7rCCvRniP2aN2uGGjxGwxae2cgN",
  "key23": "57vRpTJetKNM194jyPjaAB6uPa2Hd8UG2bMVJFji1ApenJ6xKTzz78YVrae7nEBrsGvE2ajyU2zUEbXNVwi9eYMt",
  "key24": "2kBNMoCsARyMwX1QuCRiRgyYbf5M1oaDLeXiKHN5knscweCqKDVK5za1nJZxYzQ7N6Q6UhBhBZS94EZxsWwYLweE",
  "key25": "2sXfyGVTnYwKSshwJuWtEcmxNAA9RXrFTDtjSZWZUs4J8Een4dn3oAdT5PZsRYtXDYRmdoXr8bruCAg83xGRszMP",
  "key26": "2grWThskVYy5GhFvmfMCkvdh67XnFRY1RGfQhzQLbZ1T6mraXAiETUrGRg3MNXoEiMB4h1WiVas9DtpAGoS9Go64",
  "key27": "mSngLD3aGfxg9M2vgZ7z3xKpmBYMAggESYD74zmv4Xu1bRBrDoa2KQ1JzhEWRh28j2WSLSZkXGjfMzpnaWLJeXy"
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
