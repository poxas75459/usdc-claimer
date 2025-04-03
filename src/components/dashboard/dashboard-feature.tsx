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
    "DKtTWf6zFsw4GkjkzkDDYSkp3j6CHk5nbAD3zduNs9HKe2a9dRVxKR2cvTQ9SHW2SyTPBmciwjjwJUK6UxAbrCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jSKJTo2aTwVNCAJngYjKWKr3QQ23WBWy54mkada939eZeBPXRwM7mz9FkFRdH6gCgn9NpqYrz8UWNupHBubQyBc",
  "key1": "2kX38prvrb2rh2DtXoj7Z6Jd9qb4x2U7m9vDmdVWEK6r2HrqCtph5FhaPPRoHAh7cWEP234efE1TfDSUyG2Hi5nM",
  "key2": "566XkKBuY77gaFKTvLXrG1shUzkf8yB89qjRwhPQoaEiTemD7rRac45MzBJSTbW3khwHrj3MQR6px8EHDdtmjwbs",
  "key3": "5hCwU64pQwTfzJdG1buzYD2cG4zp3W47zmVUAtjK5BkJqPqgT697XURzRmoJKphH4hC3fgukj6frVQ2c6smu36i2",
  "key4": "QjDAd74PKrwhyR6eeir4QcQ3yZywCFZDXgq9Cu4jzupvP2eUaQUmJ5mRjn2abVGwqwqQABXgi46cwzDSQdsLJx2",
  "key5": "2B6Q8zJjzLHVH4TuHaGHwdRtN77QJ3trj5iKhZ9vJqJQ7cYfjLB36gZ1Fxg94mrrNKMNvX4mP3ZFyRCbqFk27mW1",
  "key6": "4CoFkb6rj58uzR1MBJQjXCszTHPMdGPzqDsyqKuLRddcpwApqxC4nHwexuRVpZihrQdE2pxAsWnH5mdz4TZzWqTH",
  "key7": "4FcibwoGQ8BpJc7JUzY3PLWtsPfxCmbqCYsgibHkUCGjaL9BQmzeC8UWNxnM4mVfobRy2gtA2KP3vTdP3MbU7CZW",
  "key8": "2u1XkevZK4dPvnTKHFcrTQbScNTzs22AtdajSm35apuxCv8ju7JPDQ84yw4MuJYJSrAjB3Z4gNvgADaJCRqc7bBK",
  "key9": "54vcYeLywWJqM9Bny4d7K1EeF1LGA2peweusdYrJfpxaqYvex7AVgR9yrpA2QXYDCjp6vNU3B7ATfexXSQApfqrA",
  "key10": "2EjLjgQ8efFso2eDC8jEsi4ui57zGycARbNaGqpzGs9LPcZ4ePRdpXE1GRdawtQDJ3bWwcbvhBjRed3fiBDbaLHi",
  "key11": "HiFFbekN3X47AGGxpxbzMA6QFw9ZoE1Y12ytY2NV5TTLnLGxeeAe6yPTbVWDGjuZbqr1pZErT8bat7kZgFGszmw",
  "key12": "XymkZGaNo79NbzX5Vf93LN3Wh7eHuSoNeVtsxi2YXAgNmW3ATA6dPpsxJC2xPFeVFGoaoQPEsMLsh4wc2bzZjqv",
  "key13": "5MFnjedekL8owU2aBKx79D9YX7f8ZS7H3cW3fJFMWZ2ony83Xf8egcb4MAwUzSwogBtVnUoP8eVE3D9skGxob5Gq",
  "key14": "26BjjV8MTmppFFZNWZJ57TokY6FMdHptuA1ssxnBmn2uHXzmufmj2XLooSQZWFbEVst3ByfyZfvZ4Kf6fMhhLUjA",
  "key15": "4RqUCtGDf6WGhCCzGTkeAwv9xP2pE5HTPdfGqp8gYPA3FpYjmSKAavcuvqd6P1MpzqPia51hsjhvos9MAedu76NS",
  "key16": "5sh6YHG5shutvw4pLmDD4eA3C7dzDaoNat4Rs4cWKXtiQ9uXEozty8neaodjEEd2AXaYJrG6LXGtdxSLftWeGANP",
  "key17": "2grMSNLqt9K1xVhh2PVGntW6qpGmF7JPYMq2vB7a4MnT1R9F5GpCpS1evEPi2TDaTQ3F9xLigjWxbUbUoBPm5LG2",
  "key18": "4Quu9z8drvSUKPNqUPzYen1TZbrKAZiKZe3gPFXA4JWjX2rJhyYEehDVjLFPjvE2iMAKBVkZ2rbCeQCcedYfYrKb",
  "key19": "4m7E83w18pc5PZu66y6yhCTUcLHsDsKUKFsyMvJBUDXZjoLNGVXA3WYdN83g1EqMnHMr1o3GESVkStvvbrxNm8j5",
  "key20": "5ATBD5LH4HqRF535VPUD5W66MtGGdgur5DycsR3kWE2YXnWSKEtGGjLf9f3oecGGriQRABDuQWH3UMWeevRBPUUi",
  "key21": "24Rbu9NCtsBaps4ahDZ5axfxXo1u5PqdHv8VreDncbDSar35SsukZvU2h3ytcoqcmEbLKkUXh1v6XwhYpzoP4cgc",
  "key22": "39mHPiVjSdJdas1ZHDas86ApyeX47wWbhJtnMsZvyL7i1xSXXdUXk7UroXYiHwSJiRiyV7ZK1qB9kQK7En2x1wDf",
  "key23": "5CKtnduo8UDYvShnrCrEyveG7afdZfHPWLo6N2xyaFuENxPz4u1diUMKESMCpHzX77YYFC12YV6jVbJfXpyXrhnD",
  "key24": "3FTNHaJxz59eCzaMsnUsquc1ePZDcSpNJvksRhefjbqRSy1AAH8Z3NFAQ7X12R5M1u4BRXcZsu8qgVEg7ZsPCjHh",
  "key25": "2JD2uy1NvAySt7zARs2q1dtQC1kYa7m1LVsdJncyK68RHvYazKEnfxhwMYUYNHhRSq4SU7b7GcMVNRkXKXArkctN",
  "key26": "4BQFJRUTFzu1fVkwB3ndfp59ukTZSUzpVt6piHHPX1Lyv5WSpfCUidAu72qCS9Bvoz4Wv4eAmaHrU8Tyq88Hahp5",
  "key27": "3Fda3VtmutjxiBZfJpTMNqJpJ3jQbpqHRqcW5NoD386Rpyqm999mRdsWui6hTJhpyFXDp62uYsHuosxKy4PL9iCg",
  "key28": "33g52p6EWimcXsKHvXh5At2AQNzYcM3okAdh2g29bMmwFwgyBGeu6Pr6iLhFUVZVZnfRaReCYM9TMzrAVkQEhgfC",
  "key29": "34AujBBE6UBhYAQTPdWTp29LfR6xGquFUvpL9fxs5HpaAgnme4u9AkRv1m1tqqfXtXocr33jSNEa6hoWLJmMMFY5",
  "key30": "Exyfjkdpd8FT3TDLaQQK3ht1WncKwXmQ8SDRmPngLVckXprjHU8P5PFFrK3Xkzfx8yz7tWcaPkHaNEwQfTtAxJn",
  "key31": "5pwR6MbzjFJv9Sdqp1s2oJTU5KcotaXNcCgNVkZGUVwBirAd2V5GorbHqCcf6WZnQMsBnp8H4RWch8RcNt4AEuE4",
  "key32": "4ibWxVMV2VWYAEiD9mduCyNaXuD4tCxjqHY3LGHheAAqvJymLYgoDox4653HUHtS8WfEQ54oH8qKHvJy4dL3WNYn",
  "key33": "2JnkoyMAzRKZKCvtyv86fJmsP1k6eJPNCiAeCnuNKwP57uRkmXcTy8tRC3o9vXhf6mqCuRzm8f8eg9aWz5ykMLVb",
  "key34": "4BT3JTB3xb9vwFTGnD4Cn5c58UwiRHCKPvExRnPUQsusxVRoaTy7ZPQzxAVq7psgVYH2RPMUk7uaeYgfUrU8Mzs",
  "key35": "SQYC8m9u5r7Y5ogUpw6oWxeuBade6jGukNjqXqHL4wneTYguEfAKanFMmQh4uypkxrhwSNokV8rV9egLf4C4cxU",
  "key36": "4EqLZyzpipaqer2i8WuxGvGW8v573JepJ2m9wtNAMfv4dnp7XApVaZaKvnhVnYH5igcvoNiQ1K9Y19UTJEMXNKk",
  "key37": "4bb135JUKoBW6YQrxZbiJnmySAr3wTcGDrbyYh4W4Rgcdmdvgs78xY9pn13TpqLtWWFimzUnPeCaNBkmPHC9tBF4",
  "key38": "3ydfXR8pkEchLzxS1mUZjgxZo2uyLZaGrWbpzbVAb7TpRCJcyY9QbVE87TGT16Ga2qrW5WHqCqdACz7jmXmfifYU",
  "key39": "67QeVuvLPzL9CUCAsxXayyZo5WzfVYRKy4szFajKwmVAysJuoddPV2xSLJmfCJFXkLtT3b8VqFx7Zfsju4vWZL8C",
  "key40": "2znq4mT6RpDriZgoh5otM6LiqyDXkdVAE9JX9HVm6aULZ7kQdmCe1kvLCT5tcqX7W9mNEx8D5s4wTHTktbPhtvS9",
  "key41": "9WpHRJf2uXgwnbNzqucDRmojL6iLFzzignCWSMseUmy6c5UMgfyP9pYc1yhV3GNdzWm7mT5Ry9S2bfM6KhHN8kX",
  "key42": "59uB4nVu9aXm6hA929KoKubD9mCDfnGgGFke1Ap5pjUvL4C5RX6YM4AVdbqBuMNWeRaiGT3eB72stKsXrhYVkgVY",
  "key43": "3ycc4jRwiX9ueWPUKYHFJ53k1iqvpqjLzwsCsJhaVNa7MYVDkVCDhdjnYVFT6US4tV6FfMmix8SDZ74rhaq47qrt",
  "key44": "2SyZrmX5nMRTbPt8yWNJ6RkzPHpcDnnKsPRNZv5SXHvbhk3GQ8iePMsBpEWWRH4FQDxtNqtZqA4MXzQiYx19DifG",
  "key45": "5YpTRF2C9L3ngRpL7Ay9imY1Ta5qs2bEF2CVdXrkMbcG1rnqmvCM5BBCxwkZxVNHzDt7oxs4Wf8Ym8VHfSkSnN96",
  "key46": "8vD1goD5WNyRBP6tJH7msDnn1X6TY9tU13xsKvsLnpohF75ZD2v8ZtijUaiSXKerFpLpRh3ZHeph1qymR2iYkza",
  "key47": "41JMej654EC8miMZoxEJjun3QTfBWxa2inkvNQePEqtk4LD3cRXUapD5eZhi2sHkmMJr8BHvx9kH2S9nwmJRKNJS",
  "key48": "2RZgwQR185vwjCGan4BUDGKzRyEQDaYnvTEPKDK5EncwtU1ki1bpPnwEYbVhaA17qy9GyGscr3woiCv4ubr32yXU",
  "key49": "HyfUsaszNtWBRGsxCKvt984CckP2mkraHrx98AYb5SnTS9D2FQH46NSu5ygqMprX2Fz8uvH6voefmVCMqkocVjb"
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
