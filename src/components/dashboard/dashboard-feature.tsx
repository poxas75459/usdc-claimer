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
    "4psHGTJhVPB9U9v3snUapUVYEa3oNvByoPxVVsmWi6AMNsP8iNKFTmgiHYGazWtcU2mdfBue9f58Aqg3FHdtnsGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e8SPHYLzaQiq1vndBujgNakNvw3NJE59DjHMxEDauAfvBhji5otTSx4MTe6XKuXPG3VDaUkJvXPV4sNu4d2KKPs",
  "key1": "5tn3HUzftU1Pw6H77BEeZE1VhqUXRCeRgzBb5CU3bUggccZVSwHDUN68h9UcZFt51pAdWszeiXZ88WkNNWky43q1",
  "key2": "5ozo7wRhb9VM6tR8Eycu8a2JPqFUz47pH18m6hqYaQPzTqHDcW8tgB2BhL4XEVDGjR3bak1RpvnhxCNL9HwJJ4t5",
  "key3": "3ViVppnwRvUuvZDp4GU6xcN4HiCAog4WeQY5JdxhMsmoFGHYsZV1mTgjT55YKXKqSvpbv6nX3nGmjfHCcE3fU8As",
  "key4": "4axTVDbdZkC5tMVXTaCaze7X664Spdup2mGTRuhcth1yYJFVQzJG1jbGan77naPpxXpDYbzD2SH9JCnpiWpzq3aG",
  "key5": "2dVQWEQgCmS7PKPxZCyEaPmm1uCoGkU3eDgYvr2TGmebsSSnbgeQufdegUsdrhDsaBC46BRqHLsxExodRqYQrfbM",
  "key6": "3yG3Py2w1VqCZtAdyqA23SjNXJ8wwgsjhhTrFPLH4barPgYXbn3gLfujBhv17UeATpbQg7nnhF9q5CQQhpMCCWM5",
  "key7": "5CXi5uiVKaAi5nzEJ4AcX5ok7yc5hiVHVz9MEDuypxhuavbVu4jMe4x6ieBqwyFKyz8Q53NgcnfFZk8YdpJiLypN",
  "key8": "31Mkfo8eYYuuJY6cQNbS6sCKSzBrRy5nu799jWAhvPrLzZ2KiNkjtWZepnhPP4gueYqh5jf7uhbFShgN4k3zEW63",
  "key9": "3QmDm9Q2SbifPj1Fyj2dmqEpouRv6Z65MCfDjLYG3JY6eNtsaniih2qFHziEsPotMsdRuWaonUJrWYUnf4YpQD7k",
  "key10": "33Apbsn91VUXtf5CqYyjrUoE2JKrDfjmMsxte8u6G9Gg2RjGbJ19EtF6R87o17qLhnToBn4DjsD3BdCSwxqxXRxX",
  "key11": "6uz3NQBQBmUAPxwKTr7ck8MxrMAzsFCpzb2w8sbDZsLzNdaFPkafU89q2snHnwvLu1NvTYW5j93zJkWNWXN4Wzr",
  "key12": "4HZeDfoS7RJNUxiPn1M3i6dyF7z7paMYynVCPfZsGytLV2S1Xe2GFPxBnvBt8zYFHtYheKM9kraLCQaDAvYnQvaF",
  "key13": "5vkJNEkcTxNG7dG2qftLSPEEwHwYRbTc8j3pfPbDeWqsgNVqejpcMcxCyMipaYYwW3M3nhNmj55pfJNMc8zMY47b",
  "key14": "5xYLHQeWo42gRNVwshqRMZ2zwo5ct5db6TLuYCQwt2PFHKZNgCFHv63MLppiNTu4qNBefdy6aTCUrRPawBPpu8Hu",
  "key15": "3NWrWCraFpvF9jTsXANhwyseXck7mnS2T4HAaVBzg3hAYyX9WQa11mbYjbVXKmiCio4G9apCxpVLJb71tAyiFrsb",
  "key16": "5f24wnVM2WcBJnDTGGZRvoEF77VmqkYxkKGgapG1jU2hehWC5HR2QAJzazLXMbmmJ7EMCkhdrkCXsEaakH2mawcA",
  "key17": "4he53pXvjAjEHj3xzZuesgyCqX1KxMqbY4YPWb3GG92GZAqMXiJmUsA6Q4hVnNjNmvW4mLKR22Av8RrZeRoSa3Hj",
  "key18": "BCAYetcNWRVaFsLGbVef5EHmzBNbyCdz2WHbZuLXFLkSnSnnHxG8KVBvZrc1ch6u7YQz194YHMPgryChkksQRBC",
  "key19": "2x4uJSRmUUaXnGbkjNu8J4KugmXXZB834VvyYJcYSGsn2tXQQwxhSnD2cQV3U3eDHBLiwKYaLTeNsPCP8izJQxAW",
  "key20": "2K8Vi1wPgETPjYm7cBgC3CC4V2cseN6psnWEYACjsvyTccEqkVxPzAnvLTywpxzgMPqFNBa8EKMXH1EAacmGJDtY",
  "key21": "xLJ1UP8H9kfKzNvrCyoN2cL4896orHM7JPgjWuoXMzs1JPv6txjV8duLeNpRR46W1JtPtM7qFtvbGDbbeQytpjR",
  "key22": "28YRHA8GaxgBywXEdUaVdNWsnZvtZ7epe4kh9HPuRzgZrgZHThgne5RWBkw12uMggaLJr8uKULzazZF4n7aUiQc7",
  "key23": "2AJNxmdyeFLnq3C9ZqM18Md6oUnTPhgUwQTMMR2DdYtYt74S8drEMRs7xvgq3KGhMAjJWH6JwXGHafzm7KQycBY5",
  "key24": "5amzWuRp48Nm4c3vrtfcK9EtmMGwy22729QGBGiTAqsZ221NX7AHpgR1rpXrRACvdYGT6gzKeSAfa2Fhuw3ZawDH",
  "key25": "4vAX6GxGmqrVdfzZzTHaSkrvyJgCfjX5YDXrMXnYYhP3GzTVJQVUCbPS8MrVoEpRHapdDphFpfqmfVaVFeNVE8fZ",
  "key26": "5iVmi9qnapvceVTXPERcUQXgzznuRboFHBQHLPQiZigv6MmbkD5LAYDy2Rh174YCpZJ1R2Amxfr5f9pTLdKcZXCY",
  "key27": "257oRDxVFJUFAotnNVTzAQZ42teVSoossGXbyN5iWJhcQmn2xXKd1DcpiBd6CPaQH88jGEf1eSsYwN6W7YNcKDhN",
  "key28": "5sf6jiHpuMe8mU8nTEEC4Ykmpirb8yUc984pMhdg8mnwZPPTH9VAze8JzPhafumJcBJEGHqRrhG4DQqKBGMEQAhp",
  "key29": "3nVMQpgtm2LWM1yaVzoU4gy2DStS7yDqQBoPrKD3MmAoqo9oVwWG2hdAf5Nc8xjtZ9pWQShuKgMJXp6GhhnxdvV3",
  "key30": "3uyWxgZUshNBYDsbMcuzj94JP8XHBaLYvdccQEtvqrxcFmyio9LnawYM4SVD6Tmgg1vqnfUYJKf9WgMNTycKPTgf",
  "key31": "3QEgg9H8HUqmBWDoprPbTNWZJBYK8XbyiqqhYEcjRgPGPg1rQs9Ade9ZwwZNMited9d1jqiNsQ7sqxfiqRMVkJZg",
  "key32": "4hyizYE3Qp1GEcx8hhYX9PBhYqQkaz5X6bwUMRTPTnwh9f7VsrDTZieGx1YxdUYsuZkcJ2N2SN4vGffGRz9ey9YY",
  "key33": "5G8NZFF7CoqVHqA6gxumAWwt1QPEWp7f6HiPAsNbPnw81o8DE3XoX6pe8tdATYGZiRDVw9bT2yrhwGNncwgsL9bD",
  "key34": "3mW5skThZeBBJ9e2bwEQK8VCs8RtW4Zjgmgjc6vAhBFbDzc1N6jf3Kpdcq21VAXy7WFLsidpxsQPyRZPCjVjmeVM",
  "key35": "2DzMq9eRLDfXGxYBzStRG2a7CzD3ax89nRsu8RkPsnFy25oRKmxxheteTiooY6yo3rn8j7FBMySa98HGhNzxZA6o",
  "key36": "3isTftyBPjqEref1hq6Z4kaftSiEPCowj7kC7hdhc2RfZRiEs8bT9ioFexZGWHGCKcCUAqja8uLmic7Lgs85VeBL",
  "key37": "5KBEVj2Tqhz7Jt1nFVFmZFUy9bHhgpDwcsuBmhahh8kZux5ymTU1TaFsAn6zHBooSXtASJ2AtdUuqcAuTEc384gz",
  "key38": "5pgXfKVSfzLR8EYxMLnoHru2Z18x2pnxUDY5KRjy24V2EtVfrDifDRubu1M2vupnghAbjV9ioHTwCmAhRxcsAPhT",
  "key39": "4VW6CZi5pq46xqmNXd199vZcydJfk1ppLThF4NE3bpMKxCwPAq8j4KoryB4W7iL1H7gAMP6zRKg1ac5W1muWPVuP",
  "key40": "2qVDg5iMiZHsRWNXHDXkAkpBEwod3LjixDRxS298pdCrbZka364cL8cuChyz5hfduHkrgm4NiDH4AqEmrx9iWXvg",
  "key41": "2oEmLh18v216EnVJAoAocDXWm5zcp8peH83Sr2oL7Gswado64newcnvqa6GZ6ByrbPqT4wAZ1bvtsVKC1vHrtZ52",
  "key42": "2ByxW9ARXKk8nc8SiigbFGdwBB1XDxRtsV32VaekaXX4HMWia2ZLeDU7Mx3FFRxQ49fhHCef4MRP9cs3HJpDE1pC",
  "key43": "2x1szA617MxANMEwveyVzpYm3Mg8aTVgTVNCrBFuBWTVuRMiBa8sXGajJyxoshe8nWMMNZRh4LXN6wGCUWCzTDHN",
  "key44": "taWAx8rwG1HzS2pLpAEHEfTaSm1U7nfcrEMDGzo5BtQc6s5CW6dNppr3fR7LSDwduLDfdn2VJHyT4fJfRe5XMsT",
  "key45": "9TEeZ5PsinLEnECwvH1KvJKzxewbjukLRm6aBwLUeN6VA4BcMqe7vv5FNF6dVfLyDBTV6gb6914tCnEwBoXWCQC",
  "key46": "4zyAgeEx1ugG7M3CpkMToLZqH2if3HjAN7ntiYt7H4gJLnaT6W35V4zN5rBNXrnbaLZUqqgEiTQSXj7L8xvgWVev",
  "key47": "63WhvXpKmvwk5mWQz3xHdhSAjEPq5NpYKbvnZc4276oGaKBfxz2XXm94o3sQK87chHXJ2GEkabjoUCQGJ4gcXhJ6"
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
