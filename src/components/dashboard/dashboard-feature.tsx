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
    "4zwTYbzhgMTzimxaY7ftk26Ka1rx3oSVJK2PJMas6vaP9Y3PzFsT5PWkShk5UG33fZ9jnen2fkh6hPxJAJ9iASWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q1LE2hUrvFwFRa34kvur1NUJK4ftBACpzqGywVtazNPYKaMYqjZZ7LxyHMFGtS5NsD5b3pXqPZiBzHRCGR594TP",
  "key1": "5upLn9h6Umkz6TzYQnC7wEdnVS3RMbKmnyzonuFRUx1uC3iM1RvYeRCVm4uyfW4rH64JTwPjeCmCHBAdierj1qKU",
  "key2": "3NX8xaumBz7M6etQZSzoGS3iLe27fjUmr1eRdewzUADnpZrAWhUE9M1LQ7mMQE6TxkVLBEax25M64Ejojf9eR1iQ",
  "key3": "4zPD45nm2z9JAU27MmfH36wkmntvsWj1XTLXT3gmcC53qpL9ttbMRXf8LGAYtSCKsZ3nGDTCPvG3Bb9vBNehc36m",
  "key4": "3wS937CjW9djo68z5MdeM82ZX2uCyVVu4VfmQvENjBX7J3hPexqvQPQd8RaFUrZEuz8hmyLMWHgNY8XyUTJEBW8j",
  "key5": "3bwEu1mACgd5C36VkL9zc1Z1z5yXBeBi1GHjAwoVauRmQkS9sBJY7wKPtY5xK252VsRUzbKvftrVv1T2tQAEX7eg",
  "key6": "5nK67EQACC9rno5gXXKkTCfSZMsQJwxvy1bSPGURjKh3hm2a6VncPqC8w8CBfiBBA5vFjJdW6iuXdhYBWRR21xrB",
  "key7": "3xb8PfkJDqDHW2MZPrrdkfjaiUoDU8gvq7CpUo6sDpygpn7bGDfJUrAStNjDFSeXL5vh4tW1vQGMMKSgH51ZdV7B",
  "key8": "gKn3M1pw8j6fw5Gt7aZWtGAvPbV138ntQXq3ZCiHe34rDTJLvi2BZCV7cb5MoHNLh6e8s5mnDb9FLYwzcZPCpRp",
  "key9": "3FTnchuTuK2wdb2hC8yzWDTNZAyGyHHNEQDmMLKqaVputkRfR5h186xKpM5bJERgmEM3pHM7nj7YfgUjmCFyBpNB",
  "key10": "2sJJPur7PtJN72iDknhWu8QUBF9kT7nic9u9P5pXZLWWKznn9doN2zGnMmMEAwcVqcEFKafRRyYHJ7DW2rH952uG",
  "key11": "5eDNi7JmCd3LBTy6HMEn6WgBzVuT8h1h2gQ1udeG5xLwZqGRU6FH4cW64pJb2av5dR1PANnSg9oCcR9vkHnBAedm",
  "key12": "5b861DNuk3yjSUGCVMSRcoKiaT7DMKg3yrsyVLqkzL4uUyFJrJ68PDVGwGVEny1HdACuNQewua7xm5aY7Wykzpzz",
  "key13": "5ULEUEkJg81UsRxKeuVTAZSj7jfHMm7VNmkgmoDkwBQqtjTX6K9jYuV1Ta2WGgJ18ZUDuX8iKMWEMW5yh91wT24X",
  "key14": "61SBqE4MaAyhvJ7DsknPPJbFYi1JeV9VwPwuw2PRj5Pk5YDJ359XLXxsJJ4EtG4w3MeJUJUWrS6zYRgCiA5fmyKK",
  "key15": "37AwNrv9KVgmNEyxx7bQ2pfQJapf4S9gm3xrrTGKccr4VkfeLkn4A7ScLsFnkHX7svTyxVXLuWSk5Jpqo3Faacfx",
  "key16": "4ixZJpakFXXfx94ZSb4gKcFmUhRBQ8Netp2UQAWoov75SXt23W8SrJgrSUAbZCBkUVkLXGHhNa1GRhqf2ax3CN7L",
  "key17": "2ZRFtjkdGbELHAZd194zao99QBk8T2KkL1LxNMbQ3Jv689nsdW87uNdNnq7M5h7ia1PcCaNbbB1wWHRkssV9aq4X",
  "key18": "o3mPCGMs9ZN3hTnaEMXWrKkxm6QkRhC1J3A3NMnNsY5fDFoVPLFKdaAjrFjcdwtVhfpiyEUSdDPrZ7SaTDKqrAx",
  "key19": "59h4Xvuh11foLB27m2STrzRcRRksQjzc2M7FydgZ57dteBehNTSPCaSivXptTLspm5v4AQGErZo4waFwmaUo1kNP",
  "key20": "4xPiQGWbPN7WYXV7g317KQkYqiiBU1ag9b8ZcteeNRFuh7qa1dPZu2CvDoyFYfy5JWrKZcWdWoZxKXgjbZJnBUj8",
  "key21": "VxYc4gqa9VkoxAQovqukvYLvL8kSN8nzCzHiuxA6WVf38QktLonwoWXGunK7MLpPdFgPTyUuHtwP4vYPkBZDMFz",
  "key22": "5rX2zXiSFa2hS5Td9uYmA3BEU4KHn5GBzYFuLGJUTiStEKH3Kod4nxipwfLPX8bvufHPK68YLKFdxZuauhPvyfMW",
  "key23": "4W6yS5aqb87hZ96Xz6pL4KAfuZ4okyP5VHs1fmmSbtevgZPqfB4igUfLXM7QravQixRNALe768NCyvV6ShxEBwzd",
  "key24": "3vLP53U6DXJ5SawD6VRbhuStWHTZRazFASnVYisH5CZWLvDmXsLTXruHkrMWLs71VL89gRkRzFQkFaHhBSBGYMak",
  "key25": "2roBcZCy2yKM3C4DAGgXr6fg4U84uNs6gPUKq4ZChXGwmHxob3oe4d8D9eyzK6JEaJuQkN19oHCwVed7pMPKKUTS",
  "key26": "3nmFifGhFhxN6xy3ugwzNvopBrtV36b2xaYhejk4DRVUzG15avgAme1r26udiy65xmWaetwFCmUpqXNjWvaGvttZ",
  "key27": "2NbMrCavCWpF8M7Rs4DG6MbxiQHpmp1rfSphhSA8TqnkxJMbWKY2KAthSAEjPqZhLkFcNQHfQETMC7AeS3PX75uH",
  "key28": "3B2CTwsz8XskJFasQA1PutV73e1RndDeF1TuxzyLKB244RRHmHLjE8yaf5qLFXjzEk69FxT9yYS3WPpu6ku8sjN6",
  "key29": "4cxor31YyA2jGuci6L6nPAck3WtLb3mQUwruzakiETNpmHwFBXeu9EcYcD4yZbmaN1ZFd2zF8XNY2ovLq7fpB441",
  "key30": "5G9F6DMpi968vUoaNrTy2pTvTmFtsBLkxcmFKKuuM93egvYUqyZEBngc2MMtpHXDPnyVh5SiMitWJA79kWpkiUDL",
  "key31": "4Zq6DYrL6Vyty3B78QKhxPfA5MRJQdDeP3fdYfg9hQmSUMsjiQqojxX6pPzEUFcJBQG6n5ecf8w6b9kmPDQcugRr",
  "key32": "541aW8S3p4UC3yw6r8SYDf2moVEQAHEvxcHPUipeoFMPnHZmKRb4fWqsZZck8tJqAP7rHuWe1AAuSyuMDLphw3ih",
  "key33": "2KM6TdpLhurSUNtsWZjwu3TkBYT5Pa88Yvh8qsFf31CJmsUteSF45YJsKUQhCk5yYtUZNLxfFXJcJFzBC9ay9miF",
  "key34": "1b11DeBNqA4DnfuRpL9DfqRgnNT8u7DssbSNLWdArtdk4oYTkyNeoAigoz6avk4GHDrrAPRsfFHqjwr1K2ZTtoB",
  "key35": "35MCBWiR3VZ7nS2deks8eXZWa4Vco1A9pv9YhXAAHMPB54fMRjeNfo18VJ38DAyauVU7qS6SM5ipnZN9RHX6XKuF",
  "key36": "25VdYkzTtB8EsrX8Xdw45bMayhD7mUgitfasZp2jMyAZTz6QqoULxM71ng6zyc6erTZzQEuubVGyJN3z2SkLXXS6",
  "key37": "2hGvo4C2hdYeRiWFAYXf1Zo1FjaDiTX8Zr3dB8cQpnRqCDp1R2J1R3h28TYu2NUb6ndqgNtwUqmLKJaHdSqu5aBo",
  "key38": "3vwd9YsZ9mQRtKBahBx4HnMJYrmH9YFbYzDT9f3XxKUyhJoibRA4ivU6eBK9AdMbVpLez8jSWTuwbUbTv8fwdjW3",
  "key39": "5PKdDHxnNtfx4KEVFstm7HJ4hiQNYPBXhS8drDRdqjct8LufawznVvDwrMkgTYew2ndSpf8Suh8r1aNF6FhEhssa",
  "key40": "31ng9XmG6ihEcfXyQhUzor5wZfKgxtHj8WSxRGoo5L4C737V55czT5UFBd533Lqmrh1Z7suiVTKUcdKv368HSz6n",
  "key41": "5Kj6dHhZto54guZzMeQqCVaugiUNjtmTMTm7jWpNjaqrQDeYnvXPJMTeqqWtLoUCs4drHfRPG1f5GZq2LyEtNAFx",
  "key42": "4mxZM79A7DUyBH5R19iB6h2NeD6qP4BKcx9MPt8uvpFoZQdW5uksYZBGe9qh5qR6XhA3yS8VKHr8d9w2NzTMncEG",
  "key43": "5G1urrGJXoGuK8MZ5xsnGvo2HXXW1asBetUZGnU5uA4gC97caaTtZSJA2ABvKfNm6atWP1HFKziBjn4VckWDyKb2",
  "key44": "44E2RdJ27tpmEpzGR9NZiKpU67df1UWB9anPE3Y84KRCiLZnq2wTGNVUCDXetV6wfzhi1BTsHCgt9DznPmh7H6dM",
  "key45": "fBHJSmkUmo1UborGGs5dpMX3y4kDk3vS96VFmZfiv7L8B1SU2hQrkdmjb53eXHUtvbUvbq5HM2YEpchufgAXsvZ",
  "key46": "3hJUgVvF4FuDycXxcTvSBPaPzgkDSE7jWg8Y6wDEfpadKEovc7tjM8t7dbuqkFN55ELoPGGducpgYNXh5iCgM3ZW",
  "key47": "5zfuincNXUFSViLKAYGurHNKb9hnsUtJAVB9qc37svw4x7A3mbPTJVEYcoihJ1zP3Xs4iMb5Wxr2evE1u39obGTM",
  "key48": "2SssxXkHrgYArXhwybwDqmMeKDhV5CZJCmkDGZpgn8qVM2Q45i2WooJdsmn8s8huZBV4rCbMDmBPhq3u42L15NfP",
  "key49": "28vZq4b9jkVttFZEfDuaMECeXtUDdnp2V74gs6EGPkrzpADghmQ7GtnpM5LVyC2gvJi5nasUPDDgD5s9TMwLvHDM"
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
