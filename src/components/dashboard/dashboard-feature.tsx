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
    "fhzQ5oc2XmWqZriXkZNKyCZfgZra9ivQ7k1pdGM8RfuUtmknuB6FxrpXueP16Rdx8v6HT5Dw2r8M4UhPBf4c592"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S1GFJSc114A1MfWpjU4XAhhnsjMwrcKdxx21W8tUVpw1zCCZmiKRxMXL8E15JyT6bu1VcD3Hse5yfqzr5Nmtrb1",
  "key1": "4cpCshEkNcj1GqU3oqPd2XwJ9JgWKN28u4YVKWkLsJhZvMS4bqg2YBMuuaAPimJFzmU6MZRTEwKQy1g7GRDK5jM5",
  "key2": "4a19hufTawjcC9e6rbm2cMGxCfrcnr6y2gqVY4FV6FdGwdP9fY2SsFSyz4swsb3DRdhJBr5pKzsx7XLJx5GeYbBX",
  "key3": "2Wywo3GMEaLkPN8By6KtEwLz5D5F6CJovhirCQqw35Y2o7kmiPCddgumEyNjTsNHcpuF3HaN3zmhxHcAZ1GCiBUj",
  "key4": "2yocBUDwzx2Vmu6SJsXLc8TV9ivxYeHw7jChpkGXsptocHmpd3NGdR1Phjpt9xzuxhg2nfTFMFFs1JND5gzFwqtb",
  "key5": "4r6Yk9cDbVXUM94y9ej9bBW4TUCM7zkZdCHC8JU38uqmPedSpZ5Ro2hLkusvMtx1bxGxfq1gFPZncfAZg49XyP2g",
  "key6": "4hP1utGZmHgebmybfGddWw4DDALcE9QyFCsUqYst8FDJvU9dUHS1tsJzFkCQ13mLd2JtqcZbPqdVGx4ki3SLvb55",
  "key7": "3e9N7vyckZL3zRiCQQF9XJBpLyz9n9iuNg5XzPN2DyeVVSPf1YoZ7WkEymj4ij6kaqXhhpPc4BkkAoiYBjTos56x",
  "key8": "4LwwekXjxY6Dp3H1eCHsM4dYy1zbtU2swB1fPVaTWw54MHxwpX83PCf7zCXHEyY9Rw3t7kBMSQob8X4ywUUCPKo3",
  "key9": "4JkPVKCfsrBbK62KLMbdDVNpefwakenu6w4uncgpgzUBGksU8ByAQKtVTcspdAFDymXwtw1LsJ5NinxFoh1HMuiM",
  "key10": "3mB8NG2LQGasMhngaYMof34XUP5bKmzD4FC6E6aR13FnDJY8gZa9FbDuAXsiaXiESMsgisunyanWq7Ci852UjGTB",
  "key11": "4nJWB2FT4wXAroyqsw5ne5r4LSv3AfJgi3mm14woLZ9M7uHzmDha53acQYLQtufv7tPQdC3mFseLNBq51YtT9L1V",
  "key12": "4vUsEEr6cMerNYqYWHEcHY74NpXZHvpPjfzEpCpQaqhyyKPrc4nngUiu8QURoeP3zCBiJvz7jViCctnn9JnJzBhZ",
  "key13": "3ujcJbHpKWyUFdTBuF5Jp9119GSABMdu4AqpK4CigfrY9WWCPWMGrSRhqgCcL6ej2qPGErPUQSY4MqrBcYkQ4NZi",
  "key14": "fmWPyzKB5kfyMDpnbMy2ukebQaiXiN4iKwacy23UJUP2kWdXtkToSC2o2eoFik2gyZksqQrUQXWeF9z7kR9zP5s",
  "key15": "5VvrBD5ab84VkyZSwXR1wkG2118nZgBkk7gFjpETtunstengJMAwtXLcJ3cmPYhgiCANgv3nyywdPcDzCYHPivTn",
  "key16": "3sG5ChhPYrD2Bk3DvLoyQxjTitWNL2pve6eXyN5NWbNegf6uv9PfWy6p7GpCoo72pkmpp1vJedddJQg8wTvspXke",
  "key17": "LddyqMzhdtkmniKiat8qqkFR6C9rd3GLyyfDFxKzfLeyfkj5kTQcAM9rUcTz76yrXMS4TXWsRz1H3KLLqfSSiKV",
  "key18": "3NU8TXHvQNuSEnQQ4UpavA7EoftUPfmSRh8b7StamPRALtNJpTcts9AVH5pfN2vbEXsDTBskhLhRMSfrk3jWcBQX",
  "key19": "3b8F6aFbLh4y11X6GtYXxSWH1Z48ESoXnxJwfKjtfbP6q3MdEDaoW3kYWcv7J6kjVyiDSqify5QMZks6XQ5AkEcN",
  "key20": "497i2VRHMLzHkRCjb9SkqRFe3H4dJZHcRkyjfr3pwsv7NLuUpNeRY6CZ8oUwVNRk18pzAkKBggXEYaYNV2vESzhz",
  "key21": "5Y8oqHuSQ4w2k8q8EfeXcbRyx59g1pXdRCKCJMCCwHifAf2ednKRCQv1tUS75ZNxsNGKQypopuVTQhKcVgX136Kz",
  "key22": "37hhhPdPPEdFJ4KkrtmSRwdGhXFMFG8Cd4fzGpDvHAEL6EiJymk7xpUaHszxKysaDsAi5q1hhDHPG2EjyLTS1QnG",
  "key23": "4KoWPFm5QvkPdxeEDcBjBgmaj5143NKnt7zScrq2YBQtUvPWrunQ4kygkDrc4PKdXqVS6ZuS9wUGhMbt83rC7Q5J",
  "key24": "27r6JgREZi5VHPowdF3pxBuzDyrWwhnxaSmEAsjfMCjKxiRnHXpzTiAVMZTcnV6zGTqcNrBKp31eHbUgcnKWAuLL",
  "key25": "67fozQCrv3aZmzw32Uwe77DCvsStHs9XM6vFS4j3E5hbAzBix3PUSzjnMFWuw43JxKMpth7ofwsSSY3DFPqSLL9K",
  "key26": "2vt7gU2jFA1mP3ixLXVAazCNWivB4Zv22XyhiQk42XpsrF1zeGkACn6tFpLFSaZRxUwXj7LQgbRYwUfvLwNFo6Cs",
  "key27": "29LyE8uMHVLFy4HgBSCavL1V5sFgiFq6TkumgHcEDUu3g9EBdkGPJ5BQS8SepESvRU6wmZDqjkWVeNQU4sgWXv9w",
  "key28": "2yoX8TKorXxXv96LB8hcEVhCygwZeKpC4LphD1ETJrYi4e5z6PWvafmCqNyn1t64eMwZnDA2nXvui58MK8fpDRLB",
  "key29": "2uZZdvtGokxByK2WoC6aUzi2bR7kRAZeSAi8f69H7ySYRxTuV85FDkrhHJ4b4HJ8JV9Q7B2ceYLZvdcKrrhxpjJR",
  "key30": "2jKxWgK8w1PWrtp3ZHWzd9jWqAh45d3EH91yFJQbkwwaFBvKc8ZWYgnxKJCALLx3CpksdorPqUYZkDTLCuL66T7F",
  "key31": "4quGPFrbkRumB9PzzoFFVXsfQ2zyH4j3966P1YeQaWpiPnp9rnBBeMohHn5fhu8D3REfgMYxTsTcsV8a7Pby1LwS",
  "key32": "4UAuaP255FDv1m8p1UGn4fvBdCrerHRpW7Ej7CNjdZsRQ2Rq3ut6rDA9nJk5PePSnq4JLghxJ51n4HaRuSy6ZFgm",
  "key33": "5qNjuX5jyEZwGC3rTCu8CJLMzShgkMTN7XgAhuUsKcLj7dNM9nAb4ueP9j9ofnLFoXJvRuwKF8hPR7HQrvK3juxU",
  "key34": "5sA5wRjmnsNqVGp6ExidXdS1GrUHXcELCbon9TygbDHbYDyN5HPP54kViymV9GXnGfabKD8KPJRptYLK3tNGnCcg",
  "key35": "wGzbabvUefS4AMoAHY57Pe5rRgiapPRV4mhqouhj9QEKjcgZxjP6GjdEoLzgifCaBx85CgDCmkydBVorgXxXQtX",
  "key36": "EkVJ2hoYHW4r1GJiJpQVJzNeeYUSxyavea3SAc2UiucxMMSPygNwTmPGVFdkqKK5ZctSK1SRtNBqsjeXCYEPAb8",
  "key37": "3ZmuAxyRAEgw7vNnVo6qbAjEGVhuiqTenQ3nsxgWNcWVDKELSNK2aWQuXeVfDbX133VbATdD6CQDnj7zGEh99GYh",
  "key38": "4VPxtiR3zqPn2S8dnqBuNBCe6sH9guVTeXF1Sv8o6V3hkwLENZxeW2UJpfXV67NdbCHVaZtsSsYeKAbJUkjqzsHc",
  "key39": "32aZnU6nvXtazfniT5jNXJ1VQVytWSb9rV5x9VmKfwaS1Km9MpVzDipgijVZqeu2jKm3nkWtocoi9Mjs4yRFazVV",
  "key40": "3FGEmStMdDgfSX8BZ2r65ga5yY1HSFDUfR61bCBNw1jvcr36U4dYRTw94MBiisC7GDLrtHNxcQj1Zi2mwH2CjbDP",
  "key41": "kexcb3XdwWFxRkfjJKV8XT4n3CA76uYxcWBBHPPVyWqtdaUHfMckUUy4i53QPsNqutNGdKHiTPPTUkzrcsyFsVw",
  "key42": "4P3umsHgxwcUk2eKdv3MtASo6ZKoSTTg8G4FwqX3RjTbGHYMcfRKt6mq79ihggePkZRQHvwRFLkQcc9DgJFS7eW5",
  "key43": "5iWkFmrzHKa53EfWHG7ZUegsFdrxUUkyYmRcLLMXbNekyey4tfsgUjFpCQUPDSt4g3KM6tN55eDNkpPddjzhUVzZ",
  "key44": "2QLWPYq6UBdgiB4LSJYPMAxoZz77k7nh3eUwPhvnRGeh3Lcbm22koZAG8C1AKEPN72T3v6qBonSMgvrSLQZRDVJ3",
  "key45": "2vgHszzESDB1FNY4tZtHtTVVgenRwaiRnB3mCG44ZoJR7kqGJrPj4Uc6vq1fY2Mhi5PBZETRmG1DoLarHHBYD61t",
  "key46": "RZxWjUByWH1D8jRGMfZZveLccJ4MvwDPEfxC29koEt7vbjFHnyfgqmatzFgBaw6vb8tRNw88NrdC82E1wKFNtyL",
  "key47": "2GudX56KWKDWuH2jwWYUBpboiM5yuGLwFEG36rhCE5MeVQiSshUmoQcYzS3fRJ8EfkdbHJW3qVzu9XdBaM2Vj2du",
  "key48": "5bX7ctNcbU1VDy8RdXHVmP5K3VkXYpB3vc6tsq2MJ1tN4YSQ7t7f9owTsCHtiKYLhkDhxj2Sof32mtGV1mTpvZXy",
  "key49": "5MHvkHMwaJwwer7HHTDNU78vWnQguUqSU11RYfNk5stwQnoKVZAPuDzNA6NphK2Wp3GGcZ26xJi9PoTCTb98euyL"
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
