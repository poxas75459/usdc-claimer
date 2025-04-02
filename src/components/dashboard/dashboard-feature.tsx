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
    "3UV4dawtdYXMTjfKx7VDpvEHceqYP5wx4RpW6HVJK7yn1xr14oLmKEs8Ss8mzCfJgYULLFeSfT5Rn9bVFSYYZGYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j9KfAK6LzqWEo4Wm9ZVbbMBKMAMLTBQY8wXjp8RjmQqZERLePgWzkzQwdbNeyum5nt14iokNvCdpN1Z1tppokWa",
  "key1": "2bBURwk4J1UoiDiF7JndKvrrNaLZYMCAZsM3e4s9wh8fvUoBNrWCEiNunmG1FpLA6cb8CJUWHLeyrkvPt8MDHQGV",
  "key2": "t3gxmEgtPUD9ND6h57TBkgF6vWVrjM5kGsNx7YvVbrJcoWuqTTP2JBoW5EVm37oaDeXSr7pDuqsPQ1TERAPjCzW",
  "key3": "33ww17ZLu6JqKj5C3ou7gBpj2cdaTcj5yHSfBZTPBm4zPJSnfcHzcXQL157CvUU4rabhz7QJLwvCPCUwhnWoPWsw",
  "key4": "5bDwELC3fsjxJQkEKR7saBKUska6x27Qw7rCpwgSZ8tqYR9WY9KpvBrVtVJ2kpAS7mi53YCR1pjjsw71LzZ3rjMc",
  "key5": "4fyWYNwK6e1gZvxz5AfhzvoMogSNZeKe6oBiK7kV1fCYszo2FWuLNWXZHBW3Ys7Zqc9ybvMmvKmM4cNgXAzMejnY",
  "key6": "2HMSSwG9zZwsPuU3iQNZEpajExHjX6jxiJmaGLy1mdRkojZxru5h96xvPgGBARUKUG9zhm4wMzqVFo3tGGmXsiQq",
  "key7": "rfyM4TNFDdkfRx53qmDK95V5DiJJB7sCCBo4pbU6MiidgZgcGfLDxCugccWwBypV8xMB8MECDoC6hFk63FyeJNs",
  "key8": "3zQJXwPwiX1ZaAiejP2Ub1nS8vMGMEb56fwBmVVh3hjWKXnkBDgCoCWFwAft7bNV5kTsR85MWYXU87iP3Y1aBQSz",
  "key9": "2aciHwUDW6c4npf24sawheXBhuHYEhSTnKQ2vXGPhTGt9pfy9DMWWvSSWnCMJyB4iDopXs5UEKi991bRpcrxfDUJ",
  "key10": "yt4wgY1riy32uTjJwfFcwWrpB9ZzmX3wEsWcuXEZJUt6aPH8bNJgXeaa3mFSwhXLZcqnshEHwKym8qekMV3NfRV",
  "key11": "5PSer1SPkHSJYTCX2Teu3EpTdUYV35wWJduEtNv6GVHJoc7CfSvfcFmktCtMsyRKSpbJn5nTGeXxH33giYR8gMNK",
  "key12": "4FEswPDeEFFWVaj62DS1HQQWMvTMGfwC94dEo8JLYGo9menonDbPPBBDjZXq1qb9yoMfwzsqC85afzoNTxsbxLu1",
  "key13": "bYqi2Hj6HCqa79LkmhZoUDuDsoA6CDknRkMLGdq6XLSxgcTzXTgKYLzzJAj5oD3azcd71cvU5dZSPEuND7SV3RQ",
  "key14": "2gujnp7Qdy3RvQK4FtSfvyvwG3YK1V5WTzkjzPom3MUqc2Zkqy3oS8ujcKP4o4A36W7pbhYCfaiuDRXiBhiPU6sS",
  "key15": "4j5vQrvJCNY5cVobU7XULzN6yMmfumEobdCazEvXbejMyS2NnKeQegav5NZDNavr2YzoYfvgC9BHW6z5tHAdhP9k",
  "key16": "38U2cs1AyC7gwqhcaTeBxHMMAYp86vZcVYYKYNB2UZP16m4GG97sZbzVQrGEUggnx12y6timJS2auZEhbap5ULLG",
  "key17": "2STLYpUaxHxiVU2f7aGG7tJyNq2ihPcVrDX2pSUpDAoMFJV84t4bBAHt6ToFAncDGnkgFUdTYU8QqPgz5HDct47v",
  "key18": "yFg3Z9xZZfvuFmpm5Zmxn7BkTNNHMKf8NNfbpxu5AkibtnGHE2yLAV1gD9rwXxmeg3RNxnJKFGxhU6tnNRq87Dz",
  "key19": "4fQJCXguSVhsD6MPb9ibX2FpqdJiyaW88uGgj3g3eU4r8TggieciZJeQdi8aoGESNsu82a9k2TBhLsiR9E9kcxAN",
  "key20": "3KGmacxPko31oF2tHF443TzuNarYagieQnzRrkESVFFPTeMHVS1JtbtbtxwVKESwcFhLASMsjv4d1cyXH26qntVr",
  "key21": "D918wrS2EdRXRHmWPUEmkJ1yuJi6cfg8QqnuAaSMcmVqsMNs2eFzY8zUJyDWkEWcnu6oMMBG4KhGDXgHswajef9",
  "key22": "5qzsv2jMxgNAeqTLEyAEQ7jkWfztQQkB2JuehHhMz5S3aQ3gwZifyy1wcEqcrjQcTN7cGVxcG5mcRChJfBzwJjFK",
  "key23": "5fC6Y2uEWVHAXckqSGujegZwuYfT4BqsXDSYtjUhaScJcpjExo5ZYJ9M33LqCGcePAQEv9eooExbfDbRx1gAKByV",
  "key24": "5EXiw3c7c9gN66Sgj1pgcgph3YXKTa9rfUeeMBVWaK2QuqDQTrqjXUzWLzccHsoHsH2suWQjnREdNSXkMNFUuTv4",
  "key25": "63qYhhbR4oc9SuqvWH8eogzGjB9tzR4CbYPYXj5Yo5eaQSneaYYhSi8Ue422EVvgchmgia3PMknP34U1cPjszeZs",
  "key26": "2UQvEcjUELTh3vHpGHubCsATyKuqNdc3YGpTktfF9b2jASXw8JSUojCjEfzneH7V6dh1neGLLQqW3aTg2yeQgRkJ",
  "key27": "kYoktEr2LzTMMw2ryERTxphNmsCBUy2B3cx4XCxcChvcxV7554QXbkCsDZCnuR5W59P3ak1wPUkTeWU4xuv86At",
  "key28": "3gLjVbJe6ZAJ7N6svz1o59zpnpgZangZCLAc8bZtxwi9rt2JRLxJizBi2bGnWkQJBbNRsBPk9V5G5UMdtzXGeWgX",
  "key29": "2FEZ21ig2AUv7fdA4NbTgJHtpbpSeChQxREAqJXJK2ANMFoovXdsTksvLZ792TGSCnZoAaA513uRmK4Sbg3J7KqC",
  "key30": "35mSf8nRtTrZwb9vPkKqSPqEjvUtg3WRGiwFWh5qF5fFbA8Fn4y1HNMXcoSj1Xfc8ndocQep9JBCzw3MLAhwStfc",
  "key31": "3jt9ahN4gBs226E4EivkiFh6sCe7yxspeHiWa3fM4vTJXGrZs1Y4Fod9zg2zTGKr3RUjhsJS5493YUQJFabaxRW2",
  "key32": "64VEwpfsNMrqzjdZtxoADA68HxLcog6Fsa1uvCUkfRKACcKKtsiRnSJUz57RfyR5W7hA8s5WBAfm6cowkbTDn3yM",
  "key33": "33ghYjMnuNeex9xx7jsuWfbCv8xAVva3kaQSHtKrQzNnoyx3zg42NvAo6JHBrDkJNQYw5A582WjLc22W2RhwYbtm",
  "key34": "3L3heKZ3wbc5PKDLHHUPJcmPb78tt2DSVdBPeHQiLxBpfi8QouWxt7WJ87MzDe9LpZWC7d5Mj9r1u16iLY1LTtHx",
  "key35": "3gomKAgUg3rX7o9NPzFxiPHmYCtk1LTtQ7qoUQEBR1Xj6oHrUaFBwLocmxXxkBiThpG2J53aQHrBHmqzUvFSphSR",
  "key36": "4TMtvZH55UDMHLwKfFUTnr2z54TcckHxgMqJQV2KPaE9vuBSxyr2ojKZaxumxdw5RftQ5UFZjckfDkgaSmACUr24",
  "key37": "kgsQzdwB3qUfkT8dSLt9rSKDpJWaQtNdEdbEQKgvCwdsZnsrqY2TJqhficKn1YEjDgfqWhfMYP59YgMoDjj8Dvv",
  "key38": "463CpHRJ4DwDygd31VZ8p78NTXiS35QA4pPg3bGUvPgy9q2bUSsmR2HRp8Kf8ubL7ViDfBzHJHp53FD8thWS3JLc",
  "key39": "3UzJfXWqZEaj6QkpfhQphCMycTCBYNx3Czv5Xtm54E1KbUWZ2PgmSFkDNQ1QrWrmTno1FJVrocmqhyiqSicdG6Go",
  "key40": "4Qr9w54w9pScn23Thv483a7Unq7zaZsFLxyPSSSs1N48VHkkWTxJPMfXMjioo5jdpxwLLkZ91gsvEvpXXzagYtaA",
  "key41": "3k6YnFdGNgBvQhK1fMncYAFxYjM2qqfvMpeUU51B4xwtU69dwh8cp73YxTseQHMuY7YNqWKUFXV8Fbg6MY3Nb6E1",
  "key42": "36ec9mEGM2DUCeExs9k8FepfMUMTB3tkyXAY1rBUnhvPTzAyDYnFRqVmrmKtNaLUydKvgZtCoFxejjdEuRaphqEc",
  "key43": "4csSgiGKVyxTesd7EzVrKeCMNbGgtSzs2TZv2dvk49ZVqpkKMj1WJPRE34259kSvWFYphL8mC9rb3wjYvJtTZqZX",
  "key44": "gcU6aB8g7Vjc2wGDFrUp1NL2vHXCck9jAttCmy5MceVY2rricD8DhrKev4gwASGJdjhBkq8bNAL1R6x1BUA5VmQ",
  "key45": "2sKYBiV5nGV4iDy9AT7P1t2yta3MFcEnFEofjyobQdcNfDSuLvzVexpBmKoWEBh2w62kybRtm4womQKrbLpQv63z",
  "key46": "5iHpbjPqTf3uiNkPzV4iWoumKRhp9EVh1hCE71XJMcucppDcKK38f5CSHZ4XeEqyRrNLZNYcuai7f5FBAMAmQMET",
  "key47": "2SoMXmH3bKVaUn1DTAay1mLeFHCVS2SFHL6U72nDXtLcwJ9doSzBbfrRcnzpe7CjVzJFxMRYpiMYFNuiNq67rfyN",
  "key48": "4pvxtX4uBkVFxLsfBX6h6Mybi3fCy9RwfPPAASFPL3rniaTMq4hVdmBeTLSj3jGo8McPPQNam6M2bthuxo5paEkU",
  "key49": "u58CFErkgPVjfb1yktChTs3UB3VVTcLTRbYVitTb3h8rEnt5MUzykMQDWTviyxrnQAwQF1kzr9K8KpU8XRZkYA4"
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
