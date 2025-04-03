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
    "2Y7e2VCATwuAPAjGK5BBnHbje3F4K4AYEQ62vzv5aUxDt6JEEDX27SmqN5ENZNNHhUpS2rriRmdiBsX3CBLfk1oN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kGsZeeTZCxAru4sFxL7YKgQzLrMJzMSKfB8LPdsqzfsgEHRLWCpX433eDSJYsciA4hAjexD3ByViT2RRNTg8boY",
  "key1": "3wire5xrGMACDZkSjFogCEFCGxbQFovuCJzQA9BunfBoAQU1hnLUwkvGLw3ssJEnvwQpwBMrFKsBwfRGwoASvScf",
  "key2": "gHgTVJKLGJMSrPquUr9KVzB9VdNVLCGYfBuHF4iVRXxic85v4bcMY8sWPm6rMqJw844q8oxxc5Xh6AnsTfhcg1x",
  "key3": "4gD85g6hbA5SHzmhnRsARtabrz9huxUsK7JAggE9GNUS4xMv8Y16JnW2srJ23ZUUkYfHk5Xe3oQ2F1dJcDcjRJfj",
  "key4": "5rR9DWu4MKeFnfJW7EMQuXudm7gzYzRAV55pbqcEdm11GxxCKeMPvnDwUHam6C1pHEvVXvSxQRaty8zFJqSia2SV",
  "key5": "3xffvUhQuyEdvneoK6ZsDGrLkFhf5K1vm7jZeUWCLZNiy5BbhCmjUtKUD8qsLzgJoj3xoY1TbDea5Fh9gn65owoK",
  "key6": "4FiuR7Mt312XDtheKg89ri7GgEs2aCpUEA5ajqWnGRNHPV62SNewssjjJC4xw2NDywtVd7V7jZhi3CgfV2mC5ZwX",
  "key7": "534WcNLqikAFzxF1RaCs8RXujKZSmPzgVXQXTbFApeCvjHSoAEZen5nUcEiKNMNkeo16WZLCV9y6XyPxYNurdCpN",
  "key8": "2FkG3AG6pm5TPAaD9cBPADVgdcCjjWMbL1mCo3och4ABun4qhUke3YcfidL34buxamzUWh5PanrXR9numMZu5qPA",
  "key9": "4NPFewgWw6NhEtuQKmxUBag93U2AH6RYPFrYQgS32ogm8RSCL8vWsnQUqh7gXWCbgc5ChJs1tnTRkYXKdhvSorka",
  "key10": "4W8yU5TVLX2MDkk4dqgNQR9X4oG5uHXtQTHvfN2vvhjyMJG93pxjGD1bYQZKWAC83NQwYtAQAcBe6XqvR72NDKg8",
  "key11": "25UVmWMvnNUa6T1ih67dhC8pWp3MUqN4LyA1kHckvR7aNMkZgV8YzzTA4b38VPruGWt3Vy1CBMNoqErs6M99Bhpf",
  "key12": "2bUpCjt1SC2pA7JF2L1YVYENZnjJWuiGJYY4zgyPee6vjTmFLD2wkn6MDAbbZo1XfXqCtzc2eKAxY7CbxcK58FFf",
  "key13": "4em7Ky8gZkJHxx7zD4fHJk2JFcPmNC5X9bH3dWUoA23rSm2B13fmQpMXSqj4PfWGySXGoVobr6ABLSzkg7qDPyqp",
  "key14": "28LHo5mGXAJWXYNJBv9cesLCXEnoiwX8TVZfTaqhwxCzz14GYFzMdjWNRotymX9a8BrpmG3F7nN2HkqyaVbEpvXs",
  "key15": "Jcue3ux2sBjVGfi2UhGfZD8o99bGq4dLvMS7GbbcDF6QBzXHo1mQnAmuUk7vJRrVZAFSBFF4MrsbW12BLHmpAHr",
  "key16": "rk8QzcjqE6CCc5hnERq65GA9AZ69ATmyThHF4Qx9f5BsgppqKNDisb4p7Da8mLzewckDoY5c3Df6axQwM2i2CYs",
  "key17": "2gGAJ58DEns8JcSZEyd8xHEW8s6hiudVafLkiG3MgMFWj8ibrSWUCcLaaa1rZ6mFx6DgydpSRSmuXfuaiMyaZpB6",
  "key18": "3z75hstZm3oYdftzT1hDFgSsFV328L4UFKoxrnmX9XfGab63rf6PEarPUv8BRV32vARCUXFtBKwRKJ9jB9wWQzzj",
  "key19": "5P96ASrWHazWAiXrGtsp1HWh3A5A1oEHSsaYwW3omd9tqx2X2jiLjQViEL9AqDUxXLaD1rYNx6Y86Qs9HLCYsCUo",
  "key20": "3Kq4MRktWvpdVVdPVWb1CR8dGKsWN2rWWZ8BbNcRw18GWKVof79GzvfD8HAzkHHniiKtmKU64bTEnbPB39cQTbRQ",
  "key21": "368xZrQYegBNAqM4TGTuTjvvSHHiuJnX3sjbu7D9smcZ2frsLFik8vcAnCnmaQMmS879hHYHL1sHcg5s6dRGPTf9",
  "key22": "4wGxVhPWrNGEMhPLL2RWRxz8nQKcoRW3oB9XGpy4DEJhcCHJNFGiiKHeheR4ZLpq6WzhQzg7NcCbB56ujp3HyccZ",
  "key23": "2opGbN76eCrAHqkuLXbfJbGBPYN9zan3yWjKPRwbK7WU3XndEFZKyxiSj8PmX4JcXiWiNLkZxweWZKM1CAqCpitb",
  "key24": "4YG9RgZQdjDtYPAwYT4Qdy8iyWiSpTCBC28aDa5DWnekLorwy7nWXvKJv4cbyE9SGekGgyuUcA9c9rd3aEZ3fAZ9",
  "key25": "dkZiYYTHdFwD3rXvBcGVJ7WVSLmsyFHv7V6sz8Dr41M6MWRgrxvn13qxj4wRAo9RwCJLNDmyBhC2JiL61U6uwN3",
  "key26": "9bJmTVxZL9d9hAF6L5geS9g675JgGE9CAoi3ND1zRxJ3JDt6WVg5svnPvXZ4hBXoxS6BAtKpXGGCqBN1Cpxy8rj",
  "key27": "2V3czHoPt6w7RFwCTSyux5ZS6yBkhjCyoxdFS9CY6YP8uny9sR1MRizVnpmVpV8XtP3uLJ4zMvX1QMT9wSCLG6xX",
  "key28": "2mdbKLmRrGn8KSnE1c68bZzFYg8owHNnHVfgNL4EJ5VcgycTJbhjujdTxsY2hyoLNo7J66TYc25DUraSSnAAYzNG",
  "key29": "4FcsnckTE2kewqpzshE9PSwS6edtsEZxXDiHNCY2reskMsMr4iaU3qBdURRyUr9ogM4Kdybuvj8WhEF4XWVFrCyH",
  "key30": "5M5KdnDVNhUjdgtp2e6mscgEKZAMthcdymA1skPZt82M61LBYefQhWgFa8kP19tfu43kz224MK3CVHrpY7XUwUKc",
  "key31": "5mZRbxKC2Bbx1YvCisqdpxagchHoLT3Lxqx1qFy6wUJ7h5aYWVfFcHdPzH4gKZjNAaDV1btKQvHvgwus4AjRHaNp",
  "key32": "3xB278VPzz6AdEu931ynFTdfEbcDuNnKp4g4DRj22b1j7X5CWCAHkizqDsX5aKuk5hLaVMALgjWVhSPwrzFxvpVU",
  "key33": "3MHqAnRaiVhB6NFWuuRtTPBsyBHevBEr1KDevuQBK3dBj13nFZLenRhPZkUQFqsHP5MjhNi5gdpFjucToZeiPRKk",
  "key34": "4sRiSKh4NURkxdQwYvwVmUB6RywyM5Tps15jcBo1Q7VMHA63kZxrfsEyEvT9i1kaxhcSKsYmumuviDiJ6mEgtvRb",
  "key35": "4dpACWbr1mkmR9LzBEdqRXmb3xspA1PgGtFq9Tw57Yx6E91FYrrJc26fcsT3WQimvHRmfX6SHWc91qv487HbbSLz",
  "key36": "2tNVmVefmGAx3awbaqvtaTZRwm6tnPUNWJyJwCHkXaNJjz4AHAbwC2wVTe6pn2NAXQoJca1yujGwZq1YNKG3e2eS",
  "key37": "5qktZTjmWZmqrKVSnpPgzAtf917Gp24iDQdA8GBL5s5werkLQ1yQkuTyLr7TzjJxNb5CAQX1vBRMQsoghdJyHMH4",
  "key38": "3QPiJBKcvJxY2ZLEUVbdkFKPML5K4NHEbsUcJwrufKfJ6FueCCg6HXLXvvpTZ1nvi4W2GzmdUECGhhTjqSoobze",
  "key39": "5oQ3uVrX6JuCRFNmZPkmB2BCecNb7Ex5CkxXGCNwqTEWCVbqmZaU6ULzpwjnBSJAyRHrT1FQQ1pNx8PLyuxsErsv",
  "key40": "2eK1G2Uxx9zULgPWLEq7CJ77zx761whp6JEc9ZhaitdxxUW6KzpesaA4ort25ASetgCkoP8Lu91Uv7CNBG6X356p",
  "key41": "3anuhuKUwufckSFSke9ojR4gb9NGJ77xgbuVCUD4kL8H75uWzpWxp4DbgyjEEBgbVgkeYnpUa6VftbwzRoacgbz7",
  "key42": "22xfqkSoW5pfWtdcKFFKMvmKP18cnhYedGsNd1pRP6tGAyLqZKxCp5pjPuEc1R4bSo5UxeQkLpMNej1Sbw9HGXtR",
  "key43": "aE5QifFnZuiPnmp8mRZQRNSixJwchNX4QTRSB3mA2AbBnEXdvmEsyv4z8NgPZrWNGdat7saZw4d8ySmzurfugzb",
  "key44": "4KWW9F4fpZ7aEDTryKXgwUN6mCexji2gGPx8zFcbowKuexvWRfP9sH383XdVMd3Z9xGRo2ocPHAATrUvgDN8hVmo",
  "key45": "2H23GaQXMFuGnNnWANHV1eVhE3mKaecxhGKc4wB1u4HLezugTLM5mVtCGQjYBwj5zk6wVE7SYUzLeV9zYxh77qs4",
  "key46": "2cx1NRVvMVwEgZ27eCdeL7tF2afVvFK16H3JaZ5WrMzG6dhLz6mh5pzpQP4Jdu2pQxVJxKm4gbWm73RFphm6GjMv",
  "key47": "5JVEAyf68SAQkp8bEo1gjD5RxyxaWW6GThSctfHAfZ8Ez4pRbebZa44qWX1pG4J5RiyTMYpvCh4FwmATJH2HNZJi",
  "key48": "3yz2gnCGnd86rqZzq3QdAHHBVPfWfsxcAReZRrub2vb3JGyPChqM1cdHEodhFqwnzxDG5Zvg5eJV3GvB73R5RZ5e",
  "key49": "5kKuGx7M3scXaDZYRbqgrpms8h56ngUjS7cacDneRRzMFoHEziapwfRN5L485jQP77uiTNxRsxeChigMNzw46bjT"
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
