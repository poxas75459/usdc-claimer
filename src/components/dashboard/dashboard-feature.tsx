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
    "4CqaZ1QnNgvEfw4koF6JHATLzvfNR8XiZkCgbPuTSg8yBh5ApG7yRDHnAoee9PTvnKXEFYfgwMgvKX81EMZNPVk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zYm2aeYEwawHtDxjVCGLv2RWzB5YUvUrieqsApLP2Cib2stEqCXZjPL1fsWXB9c7bV9SBSf9wMkCyEFjWXMim2z",
  "key1": "2TdXbKL4u4v1XiyngCYdzZi7uDCsnU4fKuWzV7RBuo99FvwBjGwxfPSLwaq3akHM33QMAdpQwHBn2PQkfGUhgLfk",
  "key2": "GrqYs1QhH3hm1LGw9rtxk35awhENwQUzTayw5vH5Cb6kRhyCbt3112n7ypzio2FXWYApcKNm3ejYNNr9nduRYRm",
  "key3": "5nWHG6sVBhamWEpGggVNrbJKNSCgtg5CakdvYGrdEDki6RQVaUEkc9DaKXreoY1JEB3qMAp8zK4MdSe5AYtktTfF",
  "key4": "2nHcoVpBdzfq3ArpbN5w31bwh2ZkPHr1kkJkDjPAiMqDRJHUL8KEumVAvDiBfyfGmyDbj98syK7gj8W6Rxj3AxVQ",
  "key5": "51QFDqPX6w2kW6yojCLMGLG1ghkUwtmPsEsoHzeP3SpzzedMzaFXf698JDTmZwaTfZXjW73m5z4PKAaNz7rSUstg",
  "key6": "4rr7YGZhXwnkGc5u19YBxa52DkvFYXb8XUy3yg9ZxLgQt9iRHHkeHLNF9qModf8QU9okS6hquC3xhZKsRrQgEcRC",
  "key7": "4Lgmh89aHL4VwLCANG1CXsUMw54feJn2wdu94AyS6iFjMNWukwZXzAH2A5DhsfgU8GZZiK97eHrW9FWJj8ukPhLN",
  "key8": "Xhy7rsoxwsWXPYVw5bbUviP5t8JFZTE58WDq9u972Dtzs5A8HUR3aQua34h3xg9eHafvsM65EzfXyATXctUMQen",
  "key9": "5nuXRpRLJMqcDGmpydTvmQbVQifL79fFebsNpv15hZkhUUxXc7Qf5nre7rxAcYHwRdaD2Sff7GSvmxqqXz7EtLUE",
  "key10": "3daMjj9X6R8u6ZAGHEoG8mF5kb6Rqzc24Zy6Anhhi7bvHuo76ib3qhAZVL4PbUh1vNoKbVrEC24mNCqZRbRPTBBK",
  "key11": "5rfnFqTcypjDSqwPLZ4pt32swx1uvmE7U3m6dTNo9HBzkeWn5bQWBBPTUdb26AeGBM4zow7dqwQnRTTQtmHjvvob",
  "key12": "46CpWdRqkXYGurVAc2ecnhukJgFGNMBpgrwii6Xe2ETrq3p9YYyg99C8Yk7g9WQHnmMdq7thkZZfwCL6sGjawaAY",
  "key13": "5SSqPVWRAocjQmjwZscP4L88PJfj6fReQ8oshSAPUWz3Dmyb6jB7wxLeUKD62oWmVBS3hhWMFcjqjN4GKm9yjgdq",
  "key14": "2kpaRwNeEKmsBX7hinpU9vZ83wJobPmaHNySSjvVJ7qHvFu7EdzWiAbZt6xNpVgqfZasNmu4mbSRRK7Y2nxcaHPc",
  "key15": "CEuDjCrWzD7jQ3cFqMfi5NFg5TDRFMPYbB8k1iBk6sq5pubcUvTq8BgTRfhcMBCQzdrwZnW4WNNjVDnThpwMj1m",
  "key16": "5PuzqH7fbzwRKU5VLakHwHfj6wtdU8gAsvaHZSvZKo9fBtbH9CPXXTZV64NcXRc8HMWBkobsnEfUhkk11tFTBosW",
  "key17": "56jYt8UM1DuXzbWCuuUzoiargdi6oUSr8xHZMvepiS33P4SVpfbB6woh4kkDY9jsV2LeyRBYcvHKpfGRU1UNVQeJ",
  "key18": "3mH1zf74XNidw6PjnffLts5H9Wtt72cgJNfbJjSw7A1S9Bqc1LU5VNmSmgtsdX4ydF45tNVp7EWGiMxcsiTwVdNA",
  "key19": "57KDKAeqdT8Xap53GMhDgyJKBxW9kVXSx1wGAhbys6EVUraPwKoeSPBr56HTrJgnkC2Q5RpQkrfiYH5L8bAe7pEn",
  "key20": "5g7BixUybrz2EVdLrhGkuKVSnauYN1CnJE6ckShdaa4zBeUhUh1h77GNVZ3a9RKkw3gCBL8MJ3EBQbQ1EJmUgU89",
  "key21": "QzgQmGcTc3MNxyreXAMm4pX67FgfEj8sDejAj6PhCgYUGCNPpnScdZnd4ze64ZQLsTwuHmQSLc55Rk4KAEQxkHg",
  "key22": "5jAWvPRUV4N61AcEppZXLTSm7ynNzGopA2tVyoTgcrS8PiK9CowxeQTuZt4MPmCDxJA8Hbso5B9sPs8rkTMNHFUX",
  "key23": "5LyDxZTFKQeBjZJu9akjEjYX8XzUCdHrGMGL6F5NxjRUwjrYcH1cMaJ6aEn4AwddfA7t4ApWVgAb5TuqbuoYwUns",
  "key24": "3tY9pXR6T4dn9avv2iKvrrCp9FWfrwpDcxyYajizRfMe2Uf4Wi12hjP1aa2u35XXJXenFqYbpdd63pbKbHULdnk7",
  "key25": "3MFdJ54UF5Jg5ytanK63JkM5DjtufRMJD3cUoPSnayzbMRvaVuYxRnf31fcFJ65bmxpGqNy5XUd3sx6oYkd7LL9j",
  "key26": "5wTopBVv9bJpyTU9STvusrnYeiat3A6bRmpJMXvBdNopqAH3eBnV67fozmcdaiGopLr9ZKgSvz4vBjSgdirA76Uc",
  "key27": "3By7dXt6Bqq4zguawhFYLmjU3YM3RkiutuY46gSbofecQ9W3pRNGJq5L2xEwg4MpeoMLa9sqReVKY8G4bno9X6q3",
  "key28": "22jWuZfhfJPecEPc4jS5AjBBPHMYDe447xn51WdLRvotx2v5F6jguy4VMUAs9fkCuVDL6q6Nynsmyzn71xDbHfCi",
  "key29": "5vkWcfxovo8rsb4pbKtERT9AHTJS4nLpGdCM9VLLYgArbayD8tBkB9EzLFy9nCFjwEdgLYJ8v2ad9y1zTiow8i8P",
  "key30": "8NmcFGi4pzidw7Dv9H51rHmNdnxTit6Xt6tPCa21inhu7SAAynoRcVZihUqhNB2Ug3f2PmvMD3ovtJFV1Cj1nxS",
  "key31": "2sYFvdUUyRwcW2t1gziw2FE7DZLg3VnRNmtyM3ZfQg8y4fVFWXu9grnyu543EemD714JgtMrepSw3T96H9Z7MTLg",
  "key32": "4JyCmubYEnKBChvfAUWbeCxoyvsivAaHkcEyeK7TTeXCxUnbRu2bpfApkt1H5i2UMcpgp2PuwspxuWDKKjwyiwwj",
  "key33": "61cwqVifQ9FCwzu7nuZ88jMBFLKNFxJH3xHGgGmhTMCHaLhBhQkwSdUJtrfVCy1gGJA7itR7NXvpHXwmzmh2buNE",
  "key34": "3cYHz8DeNv6CA5kFrfGnVKAfi5A3pixkcj7uecnuZjDPJRFng3xMpgqNzZHgDwoUM7tcX5QEX4wFwv2eKVDG6oAD",
  "key35": "4w3KwPwDPhHco6S4PQ7jp5g6j4y7zuWs3ho4tCCJB5FPcXaHmQPbv5sRHdm6kq6zuNtMihXuCwDSr5CKZV8ZwAe1",
  "key36": "3iQNFZsMaU88zdrELESpF5B36FA4gscdhC3btwSiFQ7Tf6ZjZUJQrgdBTrK5EYSfSH14zSKZSEY5PDhDpCtEtMJ3",
  "key37": "2L6HKbPnjGirvcqUDVXda45EUh1xf3nmLo3hgHsdVYtQAJJ9LoErMFWNcPGxxHjt195iXUC4SYLCiKzRYgBzBcwH",
  "key38": "KdxdBK2BxLTDnzZvZmnbQ4napRR6pfQNtyiNfLkpEuH3cKcSdX9QixN3F4iCxdCKvKdu2CXnmndagQJyFMJ5uLD",
  "key39": "3bVpxP7pmB6MoUwB6YzTJzLMvWdZdCe4V7DgBf9wJpJdHBD5m4j9bdB1sYd94E9pWYwj156t4AYkdjBNayqHsMG6",
  "key40": "joHLjFydQghGNKWAGwhfMLNxxy5dVSwfPtt5zti8qtJFER2nETrv6Mqwx6cUnwRNC9QHRXtvMjTVejEaDp4XbKq",
  "key41": "4nBCwmRqKVg5ZYBmNhePa4EBUuWCnWtCpvv5SM4J4YoC9XfJjGKZZCbMfQwr5U8emukVST67g6QbEg8iEi2bvcmc",
  "key42": "eaXGZvnnPtfrFvnGwej2HVbDv9dPscrxEVrhbjQ5TpgFVrfo5t2HvnXkXA5UWLa4n9Xdwecuzw4PWGMG6G8N1ri",
  "key43": "ZRAVihw99PPvN3RwMB4wKCzVNiuNpk9Ubxkf2en6PLYrqoDD9VPSX1tk1Csix5R5ujuG5MVdeDRFt7fXbHSrxEi",
  "key44": "cWWoVsKWLHa3dBQtxrYecKLxV3nF3duwPUJDwqmcjSKtyrnAsAcgkBxoF856VVyc9h3rkP7EcQXVYPCZ4f5rPUU",
  "key45": "2ZzAk6CZRmSBZLKYVh4XgddE4juwjZhnPxEs5tRsenBsbUgbAfV4qJex19s135PvqYhvg1chKVFZfQ96QTJnHPmH",
  "key46": "4ZaHR7MF7SmxYx9wUwYwxk1b9yph79ECncuLBZFeq9QKXJZNYSm5yha4jug3CMiv1B6tPGeUUA9S89fuuNQMYzmU"
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
