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
    "5jwfE6aUJYqXP7WqnQ3wEeG1PDDN8YnfWBdifaMtNqp9vXz5L89qLhnB8TLKuNLf2aWCku8rpHdD7iuKb3TUhMuc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kSfZL32Zj1vFfcQF2c6SahiYFNBAfAT7r8DbGGhSXMFTaUEVUnNxHf1kH5DpWWJbuTirBLYDNk8VoJMurkE3Cd1",
  "key1": "5mPyL2e8wgGJ31GbsT6oVWDMjDRarp7Z8rrBGPYFfw9mFE2Kqbbbne2jBhKr1koMVkg3eacBrkCRL8URNPTcHfKF",
  "key2": "5FqNK9wSLWzsq288VbMGKajsZcHdXAnam7dZHJhep9G23iiWP5cZxELUAJzpJNPNwRdJTEY5xeeHEdZ5UPz5jsVE",
  "key3": "5EFECTiu8zdLmE2iUfPLS2uxaeusoX3prutC81wKUd9SSyD95jq5NZSednomkgaXhz6obwKex5fQTFda6q4fSqrC",
  "key4": "RtFBDXcfJUcLhUrLUgzFpjni7Dm1Zym9Z1PpeSLtp8pe5ULY6HVELAhDKZFzjZJWngrQBx87KCxq7QV13XSDmjB",
  "key5": "5XmznevLfA9msroFC5xqQHBnw2w5ehGFaCS94rqSmcgXg23W7JdDfMpdakyZ7xkfoWzRKF4HrpwLc2EHgMnzPX1q",
  "key6": "qrdcZqgEcUSoBUSUBvhekNG9WTwMYq2oZDGR1yQLu134vucsnsMH6QEPWFbjkP83aSXfFzYzbt9JybK2cxsSTao",
  "key7": "4NyNLTKe8BJrMHtD9Yz153BqskuZXix6KZkczDFrTgPawuoCHxLdNSTASpLrc33urghiTRutmm1DY2F35fLVZWvk",
  "key8": "5ELi8NAMBJu1sz4rzWbhpid3rgExjdb3U6mBecAWzGTy2S1TCRrHiuYoS5jx7MiciNysPzBBDrACaZ45pg6hHrUK",
  "key9": "4m2WdmmKqnfaN1o31QejuzuYsC2kEcriyfZ3XE63ZqWPLwi8naxUMhNssTocxf6ZqonJRsuYE3YzAbFwKRkp8L3v",
  "key10": "4g4cSZe8TyW9Cv76CnAL4n9prQHQW6LVgY54MqUj1jTwBJRoDWeLpFDZKWQnbYVv7wWTZfBwGyr41cnBr3wZXKhD",
  "key11": "3oDihnScs3NwWWCGvBah6tLaaYGb5CXjWZ2DTrVNRjy2Ye2NUhNFdBbVezzFZ43qVdc73FAyzm31Ys6vxDxLp4QA",
  "key12": "2LsjqKVkU77bhMfwbZG26DJMekJBKt4kdXiaUQngKtG3Z7ddE3e52ByNbpKLau8eE762dsLqzYmhVD8bMdGhPnfR",
  "key13": "668yjHRs8Nu6AiS5q3QGekJ7NrxCjKg3KsLj26mt4wKFCiUmFTmrqZHtAoCEurrRZitoY18Y2fUzb9Ea5BFm9aWS",
  "key14": "3r9pDLHnUiKmR1RnEwTL2TRRLt7AbFqFDWdNaQHbr7hQ3n6ng5mGC7idByXnLMSRRChyXTCPqWC997AXBGtyPFnD",
  "key15": "2gkUnLEWHmVj5WVidn9Kd6BwEsgwra71NxRV2uRmcxRPFxE68g5cP8CCdu3N5wqJL8qRzefvaHqEX7Dts2gwPThY",
  "key16": "5iUFGFcSqfTMNxQTeQLhNxfNseLGFGH5pjAeApvPsC3AoRiyV31hwf2QN61LbadE1zYoC4LEo82CjcMLd2dJ1dKk",
  "key17": "r3WjkvTb3ea1ibYjE5cPoQWEajGqvsms1xYuTbY9eik8SuYDhrXCqt2vvZRw5AAcnYgJoZ5JUyw2mBXcYKg2Tcb",
  "key18": "4A5jyP1iXd2pJisU4PPWWHZWtzzw4oQmux3ea6mYAYmGFQ7oPTfBUq5eYhc5P6g4s6taAXTYaL1BP2fJMdY2WoxX",
  "key19": "4hTEu4nkCFevTiYMRCkxWtQ8BgGDLkUr78ZEtJyb7MeM4cvGKS53Qf7iVEpjpuwYrFwJjDix1L8W4Wuvt7kQ3vcs",
  "key20": "2Q98Ld1kbCL7DxE5pphPpXEcf3gH5qhDxVwT8eikHyQTCWqwCnQXuRrq5YVer4QCmwBoPYP3gcoBKoWytugYifoT",
  "key21": "3P1stLPfFuuPdpwtcMhw4QkQxEp7UD75Fx7rZSM1yFzc4iKRgSPrD22EaTCQ6KVu1SFKjUvJobvhrzuHWsG3BmAD",
  "key22": "KvfGMnmhv4EKCiFg5mMVJ6NGwaBM7Y2Zarsh5XuULM5vppr41fVGxfvyhqRrP7CLAQkShNQdUThbTfgfZsxNwE5",
  "key23": "5rY5iKuRA22NZ1DQmp3FenTXFYyjyBYKWjt81vG3Qcz6pH4mtuTdR7kT9xL2cr5VQgGkzArYR3GownLBiHYJDaea",
  "key24": "3L1E2zWNE9q9zAn58JaujrpeYH5gFQ6CmjkGwL6KwU4kgS3DoBr9JRDDhPUgGdmvLkRm2Apkwhh7iP3zqmfh33fv",
  "key25": "32nXC8bqZAZqyiaTZuogGSeCtd8zcMS8h9ZeQUYjYdg8dtLfZ5pn3kh7LpLV1xKvWp63JN1vi4QtU1NbfVnMr7jm",
  "key26": "RdfJomuuG7Thi5TqPh1udQNH9PNqk6G1Rv2eeDGER8SaTYi9gnjEYaggsdeGKfm9nnUyqszNu2RAR5CzPC5JSPv",
  "key27": "5F1H6GuCvPUxEzkVqxRSTe6wpasJP9GsEBZ5u6W8syi76pWu4VzqmWs6aGQtuUDZiuhftSF4w9qmsyb6KWte21w5",
  "key28": "5JtzbcJNTn9HBpcKDaLpxDz8iiJqyNNekjvJHJxFAVUcszia9jNaA16ymF8iJqzMnUpLda57ExeaVV9Vv4Dw3Mpu",
  "key29": "3jJpTgDLfU64px8JWe4hTCxrYbkT7KiPUjC5N9DPcBXN7AK7SDVPiNHEsEsRYCm3sNsCdKpyADc3xzehKpxQwigD",
  "key30": "4JUZAZDZzhtPTSggLZNkATF86XyJkZpFLm9CGXk18khHUa8uBPtaDoSrrUczKiUipHj5wGpMkVfxmCn2WD4um5bJ",
  "key31": "4k2vQK1QDeWrW5NzmiqDT4kPCkd3XVMU8EzbhK2bm38ZZkGBbBrLdQHjsGEi9Q3F8GrP1Uuz874NVhguuDodnctG",
  "key32": "3PESYULhYXYZU6BzUZLmwgxDv4zLm4gPPTHvRv6PTJAvyPVAxJvFm8StYsDT816LCodawA9Mfe4ojT7PHEgYW1Cu",
  "key33": "4aeujU1sTGjC5hRtpUDmRbHNppEvo6bqwU4e2vKqim54CyeHDNPZJ3c61F3JVwiQaPrXzngAm7Fjy61PMmuYR3ma",
  "key34": "PZagSAJnS41FLptaF5LCFsn6AkWKJvVoeZKncKFiSMBVg81ggBezXF8oqwQ3D9wyTTC4UnjDdekR29u42MHxcry",
  "key35": "5K5SjAamKw7FiVvHAqBVmqAjRF3ThQCbAhMVmFmzE8yTK5icVGguP7DZWW4mSnYRAhYvEwDLb22gq48inoMNcc4Y",
  "key36": "Jv3pGYzzDLVaZ82uGtetp5nah1XGpyHqvQDFPkM2Jhc3MvcfeWk1qewmepB9mZFKArooy6W5qXsfiEb9NKLmhwF",
  "key37": "mqFALxobRWVbDpzPWu6LWbyR2QPRVQdoNkRSthzEv7s9iADSb853TF3KuetSFJ9MydF9B6k5JYg6AWJE6azWXhm",
  "key38": "5xWTZ5XHNk4SCJF1LMk2UB2FEAe3SHkkj3DmhxRjD7rTwiMrh71Qo2GdEiqVDbYU5zzYUUiA1fx13aknmibvwgvu",
  "key39": "543ZQ3t8VziQoBgdEvjUySPoHrKCBwno3RiBkVWtfRgxdvsEPTJryf4VdmHQgsgNVWn7kJn1bmDEDnXp2FGcK9xG",
  "key40": "sCCGm54JLzXPHoKDNcUrB9UPKv99e8rVXouAwERq8opTMiyp2uoptBQc7M9kj6PgJg4ZE38b8apsetMHiyYoz4y",
  "key41": "4pqcGRbdTYxKQSwux7s6sMSudb7AnRyXbx4FyCYg65WAVF8TTNW1J3VTFzLmiLEvPFtwxf1Mii24FFBPxanHA24X",
  "key42": "5NtczhTReUJwomf1qC24p2dJHcLRhg9B4MGLkUkwCqkyeCUcDFJcUZhvRQKJCzPkgxz7f7mTntbMMAzmbgw2L3kz",
  "key43": "kBdrf3Sz8Kh2Z1ebBGnKj3PuBkvvhCnX7jMZxeZmrXwRx6fzwYygarozk1Z3w3CCnYgjVGtxsP7zKRsFK9q3AR2",
  "key44": "4XdNBJytiSmEMHPBJJKBCPiZT8MU923UmQNRb1W5Ywuo285dV9jvAy9iuStaioaWGXNQCaCfnFpLg4EecLSqm5gy",
  "key45": "5Kx34nA1N2s9P2TYqQwmxMWgSTKR2e1kjccofaGtENVZD4sXu7RgmjAtxPjMSXmJhHSRPX5g9ducr4vzkpiSp6NV",
  "key46": "EE92pCzA8M3oSpbPGZf1BppTrnD8tmT7ERetsEnDXMFj345CCNowyuFtd9rB94vPhBc3cbCA6zS39vDF5wBjXeV",
  "key47": "2zA9VExCxzK36kAv4XjhwxgQZtvit5giYRquRMbQa3961ySrGbxeEHJsrsWgsEW9zUUuKDKbFk2at52kbqNCWp5s",
  "key48": "5iVRw3mFggwK2eF3SabMizkF3q8aHK8LXjV1BCLpT5aeX9c3WtE1Z5mTkMLK5DQjQnpyg89mCK3GgCtvxd3eg9TR"
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
