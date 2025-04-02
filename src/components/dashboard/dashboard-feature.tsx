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
    "5uAvgkA88AQzAHtntJWzN4jwfrjBKN9cZ1fxMjbp852pYsvbr5ARQ8JQRB9DzRez3kDmcwjFPe8kRLDDMErS7P7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "18Q2fAnfLxKaxniBmnKGy3ubtgXttjs3WmsVyN81PwAhwYZnhYHw5j2rZKBtGXGTwHMQofszs7Q8bc51qUUSAGn",
  "key1": "2d1SEZy21T5X8DWFEEJLWbxDwF8HJfZoCSN5Zes7V49YTFZF1hqEsNjvnijFFi7q2pPijhEUfCGo6otWd5gbyjNc",
  "key2": "3Up3XBhXiy2XrVRKjXjDeo5TP6bEWsFV7H6pJVdMrhqyzLSx8cHiCdspMTUTMiEeAqVdkiD35EthahSyTos7ZSaw",
  "key3": "2s1uU4rZhfydb3Shu5d9GHdKSr86us51A5WHuiwcBYo84hKjf8oXoiaSziwLdcy4FVYcd1gwXEQSugsDGBF7HcpU",
  "key4": "hDYbte4iSZuLKVvWZTwGXA2SCmP9KQ8etxCVsJn3i6TjixupHjAfX3JNPbL6Lye3ejbYyNFRe7wtp22Bfs9uTM7",
  "key5": "UcY8rztmmJaoZNpyBbxTQmfHnvvAXupEu2TrmWrrcoDACVA6bjbvRfRdZf51dhQNq3DHXvbe1Qq9dnLB3gJ5MMb",
  "key6": "5NNSzy2Ht4tyPSp9X3YvMFUELYUAYDU69BTj63c2n5oGCX1wPXjUEHH5QNuwzABVGLVY19WpB3Avuem2NXZ4wrcN",
  "key7": "5rgqF2gTGV1qj8ViynT1i11gDCdHRHt8RHb6tUaFhFbkPT1bzRtwbQepmgyfmkBWzMvZUhX7f6GdQbkftCQQJyRE",
  "key8": "4gmvimf3fA5S7Scp2d1Q8ERLoQnyAxmFYGzF9a44fA8cfj1DCCXBvSxJ4KizifZK5fX1HZ3fUt4gEKVpnZ8g8tbr",
  "key9": "5cmMYQq5enG96bERRbokBMPv1cGWoS8DhDnCMBFAxa8wNNedozWbh4GejnFpDX9LjzM9WpGwZVGR1kLJakw4WMa",
  "key10": "4oePqck779CEVvedbK3WhXJkFLeA3LvFQEc3MK7vrG1pKsh2eGfTdYoopDetaCe9PxMBPUN3e8Y4FgTQPRVTFpg",
  "key11": "2gxvzL3yYnt12rjyPk1R6H6MEki1reaYfbcnT8NVoNi6pJgQr6Umpf78q9Zs4dCBLkbeppBZbG66jFrV1kFdKgVm",
  "key12": "2fMzqQMFRVpCdzKmPuXjbQNZuNdz3C8x1xFx2MYka5pHMtcqgnRbCQiNR8x6XxhcRkm2Dip1Hfn4wFeUDx5tDwt2",
  "key13": "591y3sbhoBHMXEvwkJNv79Syn2984fXwpkU2fCPVw3vMFwUQ8a9fQyPscSUNuBbR5rcx13ZMCTE4jHYU5DSxB74q",
  "key14": "4Fc59aevEdKwk9ggawJnwFoJdGnF3criJhAUgfGMj92c9VsrzkJ2jXBxVQN33LBsjkagQx6JGrSwD5SNJ1QzJDYD",
  "key15": "4V771Ze4oAzgecpNWT39jHmk7HctvKaERc8zEDzqSyqRPuTajZ2cDo3N5f3JeZ4gHSSkyrTzD1VH3hvAjwcqsJuM",
  "key16": "3pnwySi9kD5tBUmxgaQU2YAWZrsm7FA9d2JtHUXi78fWcGrpBqzUeFQijF1yrFELZtuRVuKwAMAAYG5uHcYTKRXX",
  "key17": "4rtKkmTrcW8vjYC8rkLCvFfhbcMyrypM7dHouExSXdq81tukfVKJXXDmAQq3rWEJYctuXMv3pL2XGiGgtXSTp6bZ",
  "key18": "5tC5BhnJjiXfpGRDVzqvPHaeAndw3UWDNcfWri3PSpyYmZkYkKBqmFB22juFcyUqtREhDVFsL4g97wQh5bmVZnQu",
  "key19": "4j9CaDqFEkqM7yLsVhFUC6XykkudqUgYUJnxnaFVKiBhP6nUCQcduHAwTtzjrEEnbnJgFABPTwBfuhgxxh5aiPN8",
  "key20": "2rNtzLjcMxssPVRnduJ86D6pjjNmoRbfJz9tPKj5C5APbgYbFfFmgiwRfCYtYC3NjKppww5Dv3ekHGPT9R5t5Moa",
  "key21": "3EJqCDGH2zmRerFxetDMqxNTkrBVrL2PyLAB7ZVCtDmDAYKHuRs1XB9QYGN2cvzaiah9fxmBSVG24emJDzBCXqAJ",
  "key22": "KSD9tsPnvBBGxmz9u6kQfh2KZdqMWdCLARyoaiMt4ey7RbQXJKGfbAy7nqs678jPpbV8NV1ShfZFXszPJwLawoj",
  "key23": "4ea79JxuCET2wr6fWjDhgWLZm98bTX9g3AWELE4Wyg6yG4SETLwwrmp1M54s4u7tLv6JHH5zVmPu17okNkuwKmHW",
  "key24": "2kHhAmUHAsZkzEvzhjfNiqeyah3okC658YbwnLy2UZu7ihGxya2xmMh6vFtvZRQnGRiWbCNqRnuXHmNpE2w3GHWA",
  "key25": "A3jUKr42nNsqpRQHoFQwMBeDay9joNkARBNdxuUfBb88yG2mGrBcxtcmouUundZdgsZqKrmp776JkWy6Ru2W1YX",
  "key26": "4zLGw53N6ar6A3aBDY3wzfGUqyfHhqe1Md6H3f8mtG6dKw5NNCXTQteY7grehBtcwxKdVXxAViFssVDdbg3HmoY5",
  "key27": "4E6UyafjGGC9WcTbo93k6kr3YUoeeRgF45gXZHgNjVRBKwYATstGnN8vCE5WA54kmLDQW9irVZJWZPhpQRcemdSh",
  "key28": "NWk1c35BDML8YsBvdV7wxmwLgCrq1LhyS1uNT1wkq9SmkfRG8zf71eGjpgC4Bg8VFp1Ud9Ume1GofqGBS9Qwe56",
  "key29": "2193NaW6uh4AzmZ4X6xQ9eLu1M4Ty7kFxZVodYqb6XnQYWKX4G2qc7UMzgn5pS76UwL5EJJnRUtB7iR3bJvowXx5",
  "key30": "5DpDWf6KqCje2strKTLSJJkskopUaGQvyysbpxY4xDkbFyateeF2dFksT2Gwwm7iZRUoqgVgx2EnE6hMGPBu7XJt",
  "key31": "396g2Df5gwSWcVmMRk6LJV3Ei9y2J5uUaEmsubBLX2HKstfQ8PetAg2M4U8gu3k4ME2cxPXJgZDQD47G48UQHH3R",
  "key32": "3FZcDnuKuciv1JySNfAydyJsnMAQRPshsT1DsFxScEfwdFY6B8coaSSdv7rXt4jryQXCi5YUewL3TXpanurJwsn6",
  "key33": "5mCdJs716L5LBctjFYHVKtzqdnh5zhq529dS6y8WSc6hGhaWtcCmNt2qNieG7fhQaq9V1yrHMnMm4wLJofQsVqjN",
  "key34": "4arFfuRDcbSMaLD4fs6wW2my9d62EQMcLb3X21zJhV8d1i4WKiCnjpGYsuna2UN17sXmg6gPsvjEV92tHfNHQmEi",
  "key35": "63ZtMzB1uvVBQjFHvVz7Y2UbEb8m8PkFMoQMze9DVf6aERppKc1fNN6jEzcBepJ2qPFYj7YrH6MH4DwbrWn5ELCB",
  "key36": "3AM2EM1uCRM6GcRs6pX3SUgm23pyfWJLeFuufvCHcEzerTBaFiqKc8K6RzqBSrDSeRFyDHkoikD3gcH7WyRZH7HK",
  "key37": "M4B9eUUT85CtfF626JrcLFSUqmFJab11BWqXtadoWP5uss8EFnT4frq7Do4ef9A9mWHs2JFnBQsfLfXzk9NLzNB",
  "key38": "2axyQGHPecyiJK67kom93hjDdA1KhvwLy5rr2MaFFGi2RUHh6e9BKZVqr2K55wg4pb6dZWwQPzWueEmPJvfjg8EX",
  "key39": "e8DbQRAZWfvZztNN5gUWS3XKyqQguSzerXygyo3aq7drA5Lb6thATrrD5ehHQYNYYMqHoQ3JELxjahi3hoBMS7a",
  "key40": "DpVVWknK5uGfnxXg2ePjm9nrMsPgLcu3498ka6jBEkY7vCswx6aGYW38PZ8DFkDEe4uS3EKuroMhcY6YL8pGDv5",
  "key41": "3SVgVCCgipmEGEyk7spLeUo1ysLixCMV3gCjzYfRP4axTbcVQmY416CNEnAubRqPe2Na3hHLGfy5vnMweJjwd8ea",
  "key42": "3kEpecdX3DT4N1NU58dpSfHPcsN64LmPs3SJbK9bhFJSK5YWDWWi8EioahSbn1Y6gJCo49LaFhM4b1oiF7icHpyc",
  "key43": "xPjwjowJF9k3aUasoVuezFLver2oPEhmU6se9hZp3VqKkgKt1NrttMCmSKKA3A65sq5f9fBqVA2zWxZhPaN2QK3",
  "key44": "3xBdp9GLdPbs8fPpjctvu7AcCbGfGrDHb1WjrHEx1eX1tzs6vDELAjeT4yGgnBEkWiAoQWTRKPHJgfRrc4C1VKs5",
  "key45": "63AdogGLrJBqDAfpNZ66J85QEjzoGLpehe5uHYgvTcNDq8Y3bniymx22Ez6JBfu6WZoGBbPv1Rc8W2fyhW8Cbg4N",
  "key46": "4jePNj56bx28GJv2ZaNMpFgRFYvHyeeF8h6kGxhw1UhfCy4LLhDrtLcS8hxssgtuRNqmXao2SbqEzhr3Pbk8JfzA",
  "key47": "28DRpm1VYiLz1j3myxWUpn8aqFqC8QtonUHKJhStVc7P4BvNtJVfrg26LcwR2vf9knQ8NW484tF33qmGwcBQUdWj"
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
