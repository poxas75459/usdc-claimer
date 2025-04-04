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
    "2ARPUqQbaa4LXaU4WM55v98q5tDFVnAY99KxeXaevXcDRGzWm4i6VUyckwSZBPvqQKWMFuNHqALhngxALhmYL6jd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QHtoXL61jT7sBYCL7QcNtrr4W6sXadXFA7nkFZPnZWpJcHUCdpANWDx9sdXRSNbRxq3PdMucHf52PH85CF8C3RB",
  "key1": "4xzknGrd5urADw26FF8nCW6ihadwbPMFfTrSKYX9H4UKt3LDmRj84GENHDZ1pJiEK6tpv5wYWSACZsmGXHKPtpbm",
  "key2": "2tpRuG4JqjqLyZRRGAsQXf5d3RMkGiZ52ZRBvbFCuLS9gBK1fZMoBFdeuQCHczPtomjbqPngsj2XBndYj5mfFDED",
  "key3": "2UkDQJpUMmQbYSNUnCywdBMTkpfSardx2VED1ftsKbd3TPciSUMBRt8DfQ887sdcer8KvDEAkoRZiUPLcd7UWPAg",
  "key4": "4hbkHDC25C6ZM1FNcUaqwUiFodPyBmTac6vKFQsxNqTPSFPTxeepziYixnkhYsEoYRpV6QPeveMN8i4fHrurikp6",
  "key5": "3x2GsqnV928pgRQzhwDuuxig1hWEQLT85GSbiZyTdrwPErQhboMeuJ6GxTJQrg2WNaE2dPiaPazKMdGQVVerQLa3",
  "key6": "3sdsAQma4mohStESyhVy7kgQCvpap68cxiify95nK5myuTb9mgVSYvokXg28JW1byUEys1JuntsruqdtypHGMsVj",
  "key7": "34r39vJ4YH1ga7VThokarSSLyb8tJxxDFTvFhPbe6ytyrmjhymVrgqGTv5hgm57At3vpA6EYPYsgUDK6M9WUFiXU",
  "key8": "3dedGmPf957rZNdoG882SdALs35CH4cWrLzpE5Fp5cCZaS79FAvZDmPneMzPh8wjoS4QKSJJB8n11FxdBm8Wgv15",
  "key9": "59b1VwttbLnuaEHo3zV5Z3vxVu8bKoEPWCAzh3bbYNYRSrp6iqUC9JDR3noFkZCdN6uRJkQpXWq2EtYGse3hG3tQ",
  "key10": "4PB1cHVKebiSgWRs2Mt7vAEzWnXJLUYuYSu7AocCLAVuoryvaDxNvTDK1ByZhv7QEZGsehUCYXXucmuxQrPiFQ91",
  "key11": "4y2t3pYUtZwTaV6HFyJorRtm9vRYaFEnPuvb4FW5C7J5Zk7BnkhNrzqRb4HJJdactY1kT5Lv5mXfsDnVaoebPZ27",
  "key12": "59poyGCz8miLcdh64ScaVTYvdWkSqVyfywaTRGrM7YBMzDiMYD8n6BVqTJcw6tsEgiTA3S3aSvoNQGRKyeSjssPB",
  "key13": "xQH81jM6hKrKfBCGZjVJ5jkpEN8Mvw4sYuykWnFcKJnJFmk8s81W698xQHqLcvy4qXqi43mSSUMLmiu3wXV9ae8",
  "key14": "T5tEdMMgmDZXudZGYoXParq5S6qkS8KzKe6sxpEWXYivvwuUb6HzmaRV3z2Y1jHZeLdaYeXL5vKuJJDAoi45TU9",
  "key15": "4KJKEjXzXJEz9P26UuG98ohGCuCmVNyLEFkFtxBou1F3Hvim9zYeBsP5WnpUFDewrfBJFfwksj3bBVko2911w1mK",
  "key16": "V4juFZfSY4ZHbAZgJDfBdBGRdHu7bPQhMmWgxJKXQZHPtWt5LdXyMfd6F3aXkbLgPDVc8ETbECJHNwVcbuXgokQ",
  "key17": "63R9cGjbEjVnoMD4uuNFGHzTWzhtZg1AbZMV5HdXfoB8svBjBYJrky471sqqfAAjybKX3SFnu4DeHT2h4HohbK1c",
  "key18": "3QGTviCuAcXk78hiXHBVbmJXBq5XmAFTts8BmvdSytSv7mMr2ZxBapg2ur66U7WWfZfqhodb3as8zY1MMaT4BBrK",
  "key19": "281fWnAUXjWbT1XHvgPBBMXtqpFujArHxMSt4rUh9DtgUeeahrrQHF9SoDhH4oTYWkuw34kaUjyjUji1RT6bMwha",
  "key20": "4jXs9PxP67hWnWHrQSTcvk6V8CzebUDeFTDt1ghDGvCUvQs995rEKrHPGZBhDvbgMudYsuqAFTrkitq9zzk5AdKr",
  "key21": "22FLY1M4yx8FWsD2vEKAPjXct5hTD43T2jo7gQzbE4fQ4Mr4b9UiSCwz1st8SNF6HNdAgQvhJDmgp37bjCZSCtns",
  "key22": "3Q323N2SLw3Nowy3yUJqpPVbd1XbMiVz5TyNp2h9fbxuS5UCaq2oXCnFFP9iAe9zyCeuR2YSy9JMFDehhNFFXpqe",
  "key23": "21e5AjQvh5XBB9xmM9DuN2yMJmaBDW8W1UrtsJg3xsXV7QDqas26X2dD2Aheon43BfTHp4Ne9AAYNfTbajyuTJoP",
  "key24": "6358qU4SKFk1mpCkC4DsKAGUrAxtmeHmsPWdxkNCBz7Sr5aJGCGW4VVY7zwZTapTxCRe2MgQ4hrAd5yMBGmKkJVt",
  "key25": "5xV8mvTW4NpbZx1GZxJhnD5pKBqaeEgNUfN1jvt5ABPwNNow3TTBEX4hFDvog9MH4fJg3XrsDXzvjTh3EXYVUgec",
  "key26": "mQtPZaFMzBcjiQhmJm85iLLiEtjqPMFwLyRB9CKjDw4GTkyg5nvJnP69hyrMgAeBHuHRtXtv3h4q4EYdpV1DCWg",
  "key27": "vct17t8pmmtspeEyKNNhaPPteNm8WEVN4ok8wkvUGLqWKcvMFMbBfwuw7fsw58K8P69sHedJpGwP6zxCPF9ETK7",
  "key28": "2WMCDZujgdpQStNDk8Do7g83V6cgTumKHQ8X3F33ACYKemupQKYZ15ya9vBjetwY6WzAMskv6Bn2WauyAwjK8ftA",
  "key29": "57D1LbUS24ATNtxXDUMaj4iLtFEeTpt7y82Pn882xSRQwGA5rgA8gy4cdLB63MsoXYxqV3juAr6KbZMjmHS7ZWZd",
  "key30": "64hF1Nr123fL177J4BcA8ghCz3GkucazvarVgnAJbUcWtwqkqvCGYcNkRoEeK3SYDpMnWmfkuVYSmKS42LrQ1Uub",
  "key31": "4wXdZQJfSZSNeK1AweNnqBoe6TARMGQBCYSbE2iM4hQbA58QHaEVz9mB8ns7sKJKePoTxfSFpc1NhgYfbUz9mZCD",
  "key32": "vomkqo8dqH2qvqCasJfhkke8Eu3XUXDsaucwmY92ohMwLJahjPKZQcWe9YmGzckwgcUfhY9YkqZVKqBdTr8yx4j",
  "key33": "DWdhe6P2PKCrC81ysJQrVxpFxoVJS4ML6rQppi8dQkrnUoBnU4AptA5LKBNqNEuA4zPEmkEhBe1ztnmq99HeKcD",
  "key34": "4VoRoquyV7JNLtA5EmmbWxgoscJnRZRK8r3nq5sc8rqGQBz9dSuEMdpnkLiyfaoVaZt9FuKHPSfgC2k9y2AYoC7q",
  "key35": "26id2SmjmmuJvkewyuqAJP1hSAsUoCBwPjETVDRndAMNDZEyiWNcq8WHe8fdsrFkgUdm5wzNHLxEFYNsBofjttk8",
  "key36": "3t6g33efw4zQwL15JnuCtGfNtKGPcf3VcWCwB1r5wCoJWjJZxLZDoNzFGsmcexbqcUVaE1j8zSP1VRicjuetQTYZ",
  "key37": "3gdapeZybJTvEj4XhHnM84vJZtJWhhTQg81gdTqrsVAURrKZrPXm8s5nubv5HfnaaCuqhKMWvsavwM1mXaVMRkHZ",
  "key38": "4n5UQBzKshbswHNZ8dk5WnsysYtLmxEfWGprg3p2BpLVnkzq1MccrTgdqgCT4Y6PoLzVhv49rhJisUjnivDKVLY9",
  "key39": "2WvgWPUGEXdzMMFHRb6CviLxYKsWj9ok5EAKz6gJgKqxALRMgAoWEFGbkgNVRmzjVNPZCbJUMtiD8bHfpZkjsANe",
  "key40": "4jghLM8vGkSoec2n1mFbQ1buQL7vLusXUNPmzLXfto6eJwFPqntPF3STdD2ormr9rbzYyjBbzviCef4m45auAwfH",
  "key41": "53ig53qasCCkfNHvsWm5r9raBg9KfXE5PGrxbBUSCEgEws7cX7LpfkBQx25ew11E4U4rENESkATQ7t6Y8ZgVGuPP",
  "key42": "TTfpNa3bSwR1SHmQb7GkCvdZBeVdBAyy327aa73iZHyFphYbuC8a4RajutHZuGnMmYhBfuUjfBtVb4Rd4nt7ySP",
  "key43": "5PF9YHchXZgfW7j8qkjNCD67KmqVSn3pgE61YJxd1qiTfdhPjVmBAsiZHhvQwCrFSp2iN7zyP9hiHHEJC8dW3SVa",
  "key44": "3XAov9wKy1GoEmaY9jQvrtUWREPeTYgs5ZzuLSrgAarZLFY12oUzkVzbiebsF1aEGFG3jyqjZp3vipE1WZzNjPYY",
  "key45": "57Q2LEvHmqctBQFc4NENv6aLMJivBje7LAhnXRbuz78LU1i5Lb1mQjzvFReB5FPrwhkLGa63P3Jb7HAc5G98HbBv",
  "key46": "253cehY6WiHGThZZLGHn4eS8fxg9L4MLK81r3TqzRpyMm8q7nAoRZDCBF6559AquQxPrgndg9tRbdGuZHDnMVon8"
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
