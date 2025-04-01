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
    "5NiY5GmVH5CT65r8sM2vqidJi3qDJQAQLtnnZrvTCmYa67tbEmEf3eWtEYt87nupiMLChhQgc6c54j3PMR31EYxx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gWzWs1tciK5KKkmMyHa83cdQ5cKwmvUHCFx6t3ovYFQHt5MAPz72rsrhWhJP1whWfDUGkjjbuuyC1BQ7joLosFM",
  "key1": "XpHTbGAbJRzXvy3LZv2fFznvNd6QWDrRxyrYeZJBjKQh9EJu8k8wR5ciNZpyVDMnY73mpJuKHmGjHS4QUzRA6AC",
  "key2": "tbhaP5JCVa5VbUm3DPdnHVYZVkURm4AKX6KwxZrts1Le2oZSzxq6YadcnXoQPLhWHQaGB5RZ42tT9PkaK8UZtYU",
  "key3": "2MXHChNjbgZ14fNnC2Hk36zjL3nFrXsWxXcZqBmgQXgq8zvS4kSVhLtiF5h8snALaNEfYTLLQqQmdk6up7GWdWPg",
  "key4": "3FGPLPMFGY3AEAXWtT66kpwigkkJR6KwRo9xLvFhvvYczg1VfCmHCmVmGyY1G7SyytyF1sGsJ1acDD4AvZSTPGRa",
  "key5": "2iPe1bGKRDh1M2M32CnFbxM3sW2Jd5yUogkhsWgZKr8w4dDt16TJoHiSkf3zTW8pUc5TZWTAJ3ZBvzFaFjMzZznS",
  "key6": "5aNm1fUQuyfXXJJet7qvji1sX2dNkk1EUroKrVCgFbDng5hbUHNFrzA2JMWcyQzdSXW3gmdinADHgejgyMpazgbp",
  "key7": "giCy9uCdd7gnor4nytbLzrohLsWjUvLYWJjwj44PJtUoF515yXAN38LySM5Lq3vdFGCbkAkiQHMDgMryMZXwiR9",
  "key8": "KMWH6EenMsK3osLtXLQ3n42BgSvXnD9QpKLiP7BrfWHf8o2GXmkBS2UgBvy5PAysTBtvEsMgd7bG87JvVKLCosX",
  "key9": "57criYAnHqs54LVRvXo77R5nkCyznaXpEqXGyv3Y8BjW7D5aUH5D4UGVT4qgccrXrVjmefXjHxgAqCZJ3tJvo1vR",
  "key10": "4hhEb9mxB5w6qEmmy63XkEPAhK7crW4b3QMyPGQeUykBtx51rVw3EQyNFmkWn8puxj9Yg3y1744qEE5XrzNLUWfd",
  "key11": "2ZwwfQh3kY5DMQ24WkoX6FhaSnUGLY8WzBDtFq4DucrKTXrq78cmr3e757pjccDQ5NcugxxKLmyC8KAsZVERyDfC",
  "key12": "42aiN37LdB6xpgJ78TQC1Fc7S3HWva1GbTtJFKycuCVTarAATZok5Q2U47wLsyX7Y99pBc3NrRXTZcBBih7kUB58",
  "key13": "3UyvaFJqykYWJK7eYkLjdaimuNoJGexPhhtCYp28ZEjDM8xMkBGg9dETCNJWmvWzKZqPLm4MEP9yEMn5TcToTYb",
  "key14": "4VSgi4CaqsmbbV38XazoMeK3P9bGiDWzHuuR1aKLqSKh4sWLvgqiwUtW5HAuWjfTnvHk51ai3oVwMnsP7RWVNUAA",
  "key15": "Rg98eVXfwTRhDEdTBUnQzUPRFbmexh15V5Ng1mfcAk1iLn7QFg8HGondV4j9Aueops7rxyZjD1LB5Dcr8tWf9Ze",
  "key16": "5BDbPfQzDLHrSShqxaKPLUraZoLYUjhvAJ9h16WbbMvH8aVzUZ33HrFoMmGGmMKpPiTDsctmwwGAutky4K6VtgFT",
  "key17": "Q2aYb9jmxihTJtWgDcnP7S41c4qFDc1bpDeEd6K41BiBjtXbiKr1HHfHDvEnB4LbNfnscAn4iNxhpohmyF7NSrB",
  "key18": "49mZsfJT9EQjHgysjB91b3eP8GG2rFob2YnF9FjQ6vzkNfJk7WYezDWV6wF3fUMUScoiuZr79AYziRXZGy95GjGZ",
  "key19": "2o97f615reqY6hPBXTfQCMuY4ecWnFR2adAQmRejwvbxbtNDLU5i98sEC9PtDq7zhAd3Dh2YBTqmKgucWinMjPsR",
  "key20": "3mt1FhuYSxZb89Co548erWzug9tjcyHymoCDRCXrQQgsWzjdbZmYwjg9aAxJNxWmiYgwuEKj5bdJ66YFpD7yAmJv",
  "key21": "5w6SHpFrWz2eHrxnQLjsHqj1duHasEofRTkTRrr9Dv6sDCL7C9uFdkxPR22fVrTa4QYzWyj9qi4z1ZEgwgXNmNLT",
  "key22": "5zKcF44F2149vF7wxgDVEqteqRcot8kakf64aAEcoaLhipk5WSVTnj6DbDVts8cgYCBcT7DvSmRvGSN7iS7R24iE",
  "key23": "uBWVnHcPF4KmBfKanXkyAixLFb9eDgSr9M6qPWbuZL168rHeek9NvFjdFwtNmo12M13CH1X2MScsjM3MPr3RWL9",
  "key24": "4fdmu2soWYnf8R6d8UtCGwDinynJjhW3qs1sQBYSve72zv2gXqfpGPsgATtNhqJq1kAkytn5GV7f8BegArkYsyot",
  "key25": "3mX6JpMRNtWuN29XBW5MVv6yxDHwSt4NUa3Wdxzom6HMY68tQ5pYyPz6cyKUcD2k6X9bT9ep33cNtTc4drLd2a2x",
  "key26": "4P3Tq7JbnKtheNG6yoxQtsrMUAzKrb7z8maUujZoggDcgf6xM5p33KMtZbG5dP7cNXZ4fHUeLbEKUaVZqLiz651T",
  "key27": "4sjbSA9sQTByFj3fsSehpffLXmMCrdcxuAxJCvKqnBC1S2ZafXkmg5eSghJMwVcKevKTYdVsoc1oHW3nN18iRAwW",
  "key28": "6kQvYnTBXMJeQYvYMFJgaBVyNCeNir9XwfCmWvFLH7GR55LtSgi1ePuhBDLa7HiKHPthJtcmjsGDsVb6A6bhkRB",
  "key29": "5Bd6hAbutMWHgqxqwwNVa28b1kucf8pwQzy3SwYUnJ6MQP1Ct3CekJL2mTXJbrf1sDGKYbhxfGvVGRRL5GHW8934",
  "key30": "5WxZXkNtZLubC4eEHsNqTcXitvdzigzfHYvoZ4u141S3z3vGKtqxTQ1pPvRycUASbVJTZbhtEXxAYSWhc6mN2rNi",
  "key31": "3ixEJdGkmP6V3LakSnzhNZNTRwismEnoK3BfKk5GJSpwJD3VDeE5HJ6gEqwpBfmNmbymfGzv2yc3hcMHcD7Th5Hz",
  "key32": "B25EiAeffA24pv5LYaRHXEafpVRLRhyGqB4gt9AQfWH37dALL7LGwdGSyzf7rvwgJS53zgkbVT1zvuGC3j5QMSp",
  "key33": "4JTxZ6FJNzuRnxe4zABzLSGzQmnzWdGho748kvd9A1zu3kQF2BPifjVp17g7fsNzeJFH65JDxRiLB7mUC4RCGtgH",
  "key34": "3bvVe4CVbb9fLsRx93ww5pWaszPSjKJXp5xfJt5bJCeg7hakRLfpMeC764DTNaSZLm7SGVTPa5dWqyKm66vgC55v",
  "key35": "aexKssgWwR4JrkLRzMRJNiKUb6f4AzaRyEyZsA7HbPPLrXrYENLTrSs7jCZUL3uEME6kcFmxmpXZ3Ns4dc4dsKP",
  "key36": "GyvPCmNfq1ZNHbr4W2A2GJPTtdChZ2bqsrzxEfU3cJQAZa6oWsGfjsXj9EPYc1UansBtM8QAz2QJaSKv7sbAXJt",
  "key37": "2Adyf8b7yMMTY9PLSuZH3T5TLc4J34dpEe3mq49U2YxyERYpB4ECWKKrDP6kZkxmGxxd452e4vPm331eMQg8NYiz",
  "key38": "57nMC1kpq2UwYjH1DsnUV1srLJQQozQXk5sxUzTuEp4qxLiNz3w4WtGytZ5Jy5YJqLWcSKWycuk8uYEEfqnBk5eD",
  "key39": "mNsNdURK2NpcEzJtB6z8M7h7mULMm7oi5UZqhAqKp4WGHKN7Zy1DYZMqAQSrNCSpkKzvNw7unPngGKHuxJzG92B",
  "key40": "2tgc3ij2nFbGBtAtBghiqgvR92HDqMq9P6b6k9u8uzYZfzzHJwN8avBKo3kBVdjJNCTqLw4SRBXvU6VfS4cnXVEc",
  "key41": "4SnaK1muUynW1Vm1KpZ8KV4FrFMWf32EbndQ6NhzjWdBbBbFHE8j65vt7uyzYGNbDMsCfgQYpe7JoDqEpUg7H2fG",
  "key42": "2MaC41nutXazH26YxmJsMCLkRF6sRYThjQXc3Tdhkp4RCeMimE7rucXbnnubkAiBToFpu69jSZiy96n4BCEbJwdR",
  "key43": "4SC9XJPjjnPZrp4YgHCcHnKVWTJD5raMPRRpKReLRbC2Cjnz5ZRUPDgQKG6Dso7iFdpJ1wx5nJiCoygTx2vUMoG2",
  "key44": "2nLf6X96xsm5AremQuUw3Dm4xuevVHMfAFy6TqUCebD8WRzT8EotkrKRWYvJRS6HykmCJtamuY5r2D4yBQBYeiZB",
  "key45": "2mM8wTcScv1USmWdvft9yqTSCMVyJE5o6speMCLhdq3Xyz3pNSqxZ2oXkrcn7aiXvSmBQFVo57wRBaguDCe6fTkA",
  "key46": "j9sHXQGe7ZdAvY5hSHHi7r1nK6ER4hSUXRCFVSb3Jkv1LpWzjuoQrat7HqMJeqYrMVR9zY2fb8WhxW7RDzgFBz7",
  "key47": "3Qfcxc9HDrsrMzoQrwXJPCugYyLdpdHmMhHUWyVfK8HtPg9ta19NpvTXCcp7PkBsU2UYsCjJULH2Q5suyy1Gwo1W",
  "key48": "3TnygNgoJmfxtDhAr3HzxtFgNCQvBA3mKifV5pPCZDxZfJeUbNxsmdpVWL3hbdTAyx5q1TXU96XVwm7KSLpN3YSn"
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
