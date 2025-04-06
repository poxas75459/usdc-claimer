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
    "FdZXfbTxUuTpHTfCqNX8xBCm3V4EAT2Rc6FKdn4cTTSyiAAkjjp8CNPEXJvo3r3g8yvZdtgsmSoAYoHdCdyqjRY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FtQky2zZEEs3g7v61qt49dPm5bLcBgRJGWPcGViVVyx4jWH96jWLRKzYuzXNgrLG8o5d17kndYsJwingDVtVwRJ",
  "key1": "5MvBx4pQnSAfyKbc5a3CcaDYwD98uRKi5Dcdtt5TDViizBjsb8YmKZxhqHHP2zziAX6xufzuPb1i2WDqs9tLvri1",
  "key2": "59zFR8noAh2gLDhPvY77hqaYP6pepS1VBHPg5tYAYQDPhuaHMAbXhHPQqqCTPwkJ9LaU2RCDGPqf2Qv8qtdFU8yJ",
  "key3": "HvUP8sgwTRaEmpNvd14mmGQEEK3VMoHGSYz9vc28XtWbsCumFEXAiu6Dt8Lyd7zxcTKZxNwRQjXPuzPmhwZvq6q",
  "key4": "2c6w8zJgtnADYQuiyXhRH93cTXiJMpKj8Ge3nhv3doLj3ikhc9vXkAfPSq9Ak4VyLYKfME4MuYZTGYMrxpJrzibm",
  "key5": "5S7MDLN7Zc1f6YLxtkt3kSSGKeiAzYc2unTMSmzyJcFuo8V7iiMtMFRUjziPiWS51DU3E7Bte4KM7vpNECvbwz9e",
  "key6": "3zqNV2fWtkYn8cHCrjU6pYJkvzzj4bnjtemM5ZhVUmNFTM89PNdyc5YzbuCFE4vhNYPyQqYhavRRgk3fbKeVjA5G",
  "key7": "3YPv9zVpZYS2f3P95HdtUekFNf9r8ieXG4frVw6BBM3EJN97JS4n2m44cJ6om4VjkjiwbqPnMR24Jf1xNss6sQB4",
  "key8": "4q27jFAjC6zQQ2b4CwQi87TF7N74raRUnzv1ic3uvSmBXoYLujVEkTrMAKpGknStP1Q1sr7jE3T1tHz6EufTAM2K",
  "key9": "3eEwEtg5Hkw8z7gyH5fV2NhHXoQCbMbNX1ox2xCNxEWqXCrnJwj5cVyfhGnBJ2sofAnacM2k8hUZ1uFzjLUdJvRX",
  "key10": "3Kc4igee25ap2fvBTZ3Su8rRruyrgr6ByAgmurKhhRYyME9RLW91smSCNhctAFfoRsEgNGVcRW5bNkMyQmefGA1d",
  "key11": "YjyBCqSDwr4FkhZQ4PfPbdCozbT8NXZgzz9NwCivLqLfXnpWPfNQadgh4ras8xyNULGNnnzhTpsNEckwzXEypw3",
  "key12": "2jYWxvSr3EvXrKPLDA3GGkuxsyPFhk1P3HEZkCsDoPCBi4S5VpnPEkTQXZH8pYaDgEoT1VVRBjQtvEzo5fNMNm6C",
  "key13": "4Nm5XPqgkZgPDRkatfr9GNfh17Cvx1syQYx4KErfjsw97RovJQGEWFrUn6xwk7r3ajefM7JXXQUiYarwSxggwzaV",
  "key14": "3iXx5anpFfTCwvyf12CXYxYexs6jUA6r1xVtQt7bUZSfC67CHjEw9DRjJAsfgAWekqvgHcDxANE1Pvn9Litpcfdc",
  "key15": "2AzZvKSK9TUwviXfu33hRA5Vxfgt9S9v3RUdmkjtpTqtXfNJbCPkH5dkQvT4RxtSdJgmMzcZvYkGvr5q2Pcxevmc",
  "key16": "3uYwxj4C6ShQp9oXaDrBqGpiL7WUFWVtcpo1PbV4s6tV642jBd2EZgMP8Svwr51zYo5SCeHqLwhuiGMdkrWK49V4",
  "key17": "9kuRQTnWJQhqRZg7woJvfnhoRsx9LnH35MDyhwPmnuCRcYK8i9xuyCDcA4suqZbMofk6mgvVzUpcAHLCJ7rdqw3",
  "key18": "38RZ1jJLFt4j7XWmZjbWJmGAUVamLJE7HYEnKd1HZs9wa4NQmc7L2j9qAXLUKbpnDoLw4gMZ5dAbuarA9ciKY4gr",
  "key19": "4b2ikTk5VkTuJ9TymHatpXYVycSrFLeBR997wj9ADEBEdsZw1MMKtzyvr6GNR4P26UCTfBihRiuUGWYn3NKC19Uc",
  "key20": "5YixwS9WzV2dAxfDf1PFo52CBa8YvhFfX4o7cstaAhrnvsg4wumkPzZAtWvYtGXjbARcqdr7pHKAVVqtJDMEy5YD",
  "key21": "5eVMeEngwPVbydTAkJTGNZdPuca3MmYxi9cpwC7rxo9WEGgBzPQfNRJ6ed4ySsCrG4uoPGwtQRWSxSy91h26FqCs",
  "key22": "5C3PhDWbUf1AsdKbRyCZbgJcUJek6CS5xgKzJG2sZr2UnKRBgovfB8JLXapmWcJgVEEzKfYv7ePR2cE4yT9b4JSv",
  "key23": "3SrbiAirAFbqBdVNZjwsaKbWcnCukhvQNEXLRjZECFVniYnjPxCiHxjDNZWf47nRZjzEZTURN1LNzV6bH36E9sKg",
  "key24": "4ovc66VvLBHXRsJxc9Ftsv4RtobdU4QLXyZXeixi9nnYH56L4bS25SJ6Ukb52hj8suGyByHEcHp9zdoovYGycSdN",
  "key25": "4Z8DkMU3GyLKfN97frcP5QnpDJ7s118eLtCTTRy3gG1q2jQogKX5nX4oamDtfF13FswpXaCgUKgd5PvF3qq4fkYQ",
  "key26": "2jwrgjRWj8qdN1kVE8YSCFXsiNG4CqzmRWfXeVkdb97NkgfR7zF9edA6SPhkCdKZsuJPQ4EgFs98zqz7beCJdmoR",
  "key27": "64xBYaT3YWBbfHsSn6UGb1iB1sY47jBPACRVJCQrsCpiSLiw7XdS3HpU2uFT1Qi9dBh2EG4pUNXnwtYKQs7dBumG",
  "key28": "4dKyL8vt6ncLNhPztuPTyAp9W9ihoSgTPwqi1ayhvqFy7h4Yb2H3ncMoeagBQidFQrLgSVAy5wtKSag8qKHxCdVh",
  "key29": "Qx8R2o4fKfScLc6bS9dPeoH6qwNYrU4KfC7tNJn6s9yQNCjAwm9rMvvc7S5wfTZ9TZo5x3Ak7c666mxnoZqcZ8K",
  "key30": "3nBzEa1Jinb1C8BgcnPseyTRxNMzEtjfAipdLKHnx4DGFxq8rMwkZHdRh2e8fjtBCKjbpySNhm256E2R7E3eXoLd",
  "key31": "4bQD9BAd4ewaEouShmqhbHbd2VSEr4KqJRYc4UgzMvXs5nF7EhuZEQG9SiLfAmd5KApe1vYMZm5hKGFGNh5FJJQD",
  "key32": "4dZjrzs4Ejqyg4viYbWfQjeeJeJjennJcB2xVaSkAPu7TZzfxGXfp5dTNVTUwej9CuosU6hEKFK4tb2bEGP8CMRy",
  "key33": "44K4TLtFVUP1L8BqdYGbydcMQQERcBe85cxNKJ5iWNB5X3zYx1Q7ujZCuUWdgeQVGAATntvvhfGoBGg29pAogQgm",
  "key34": "3QaSdmk2bktw5DA5WGpQ6Uhbg6c2NFkGbA7ndGQKjz2gV8Az8N1ypTDYiouZJSSEWkcoB1eFZx486sc5LBNiW3jF",
  "key35": "5Ys1Y5GNePaZu3gXKVMfyatvHRsUPRcJqHEfh19nRMqP7AMxpDVMHhJL7tUkfRZV2FMkuHrTc7fdArxmQMGuoaNi",
  "key36": "vYi8BE3RoyowroCk3D2LSuuMC9eF6yHGeEp9iXRJXf1iYmXALDega3qgzfWFNoijZrZMUGKPUwqnCGj6L9KRAPm",
  "key37": "4TDf6GC84mHDCUxbgkqQ5vy4F8r3gdKBMggRfpm2dzcVB3UP1atYZFAgrPTgEitMu7hX8RCd4wbuGLHdu5i32Koq",
  "key38": "3B9UEmuGYjvwCsqYManoi52znuLBp3fYxosVbguYRfg5nwYNHTCpTTfPPogSJQvnepPtF5mfcF6yswo6eiA4dkE",
  "key39": "417aeLFDPNW5Nh6gbyFCypHP4e4YzfFJcQPQztcYKRpr13irGJesca7h6WseoSfCHLF2Cr6PcaibkwHF7yt6U5u",
  "key40": "4bJ6A9QAuZt38JKQsgTrdgUYSag8jmLdmSpa8LhrfzS3MMsD2XzJ7GeNdyP9jdajrxwDSoLEeHCPt21jC6RHR73u",
  "key41": "3miFDZHfFoPb3tZ8cgwW4Ry2izUZVkJfMfsfw4xLKja9HLmCrGCCn9D4MpYT8RhiWFhTJ2KT4JeG87kgr1WyCJd6",
  "key42": "4LRuVstKaH5JNmxNqRQneiMomwE1BEZNCZ8KLLDsEcb3pureTUqW5S98EyqGjpdpPC3BJroEdHWHZzL6kCVoNPcp",
  "key43": "eqoWprqw63sq1A6dpz6HS1xv2hAYxC7gf89TKYxw1XYrzufeXN5R5gyQhkvriq3sdA7hrUVcF4MBzscQofLW67R",
  "key44": "5fubGbmB8Lb6B2Pt5peUvtr1rjzAU3z8ibe8Gfw8bFcfUTRThHckcH8mre25EE8YZnz6RSigCuG4jKvWuTAJDyhp",
  "key45": "3YLzLm1CVFsstCymuzBWEMYimVtWFs4zainzZMgDw42LPuimj2TpKUd6hVTprDyRwJZTXgqDbfDa6rVCXPVftjwP",
  "key46": "3P1HkYT8hywwcW9dDSBewETSjYQo1LXMdXVSJsdrEpJsoNSooTdnGxc7KLvfrMck2T7KoMRrbfgCjxWRjJTML7er",
  "key47": "24mBWdDEepkWeLNmL1pDfHqE2Yd9sBbsiZ8myAHVJ7BP8XHtRPe3HkByGdQ8hw8xqREen9wZDX1f22LdnvYKcVnG",
  "key48": "2wDsZtwUd8YjuBBajwEqYo4R2gcTnEeJtqMgEqBmNp1b9gkTTFttMLsDuJzNFWXFUdLGnoahQB9jCczr4wu9nqLL",
  "key49": "4cUJRbupjKPkBqTWeRr8wUgndgxudTZkebMrduFjRKDpCaXebSt9GYnYiEgVsVxYRos65wpAksAfT3Vpve76ypPK"
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
