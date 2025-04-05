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
    "3Lbvmv4r74Ra3bWZGrUdt9TCphT6SWQhrgXHQf86xQJKqvQrtUifMahypEMEEF6APbnHzfMQuV5KWQf9JhJL7U9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4csFpAoeNdq8NTt25vXFHFsG8TLkihpUmhfDmjDNFMK2U4aKuwFmLiR1C5L3UA8ENUruFBH3PYy4DcyQP7GgM1ir",
  "key1": "2bX4kPXpzUsU442PXCqBji8ADTGzwodKupVpLWKaaW8Vj3KkKbXcvb2B2VvDLBxHU6tYup2TDi5mtDrpd5zm8YGc",
  "key2": "VbPGPZXhWuR33YjaRAUqsnJepRpKurGgeVJAc3gaNjuVzRjJMXefkYVpXvYuqT8vdcRv1YLF93KbnGyyUS5vX1x",
  "key3": "2hT4D13Bi6LffuiaxunYxokdWoH9wrb5vtXkhz3osDmoKY8BfBphV5Ka21Ljmp5LtyPHcbxC6us4HZHHkDSQrShU",
  "key4": "2SRNnrvCWSgkmH41nyjKT8GJNR1moDrbaAyNxB61ndhkqTaMV8JRtRaQGjRpn6DTVePfHPV6bgmYBhpE97aY1nKP",
  "key5": "wUQTH3MoQmFN2Cq8W6oCg174cYs89hxf8kxSHLfu2DGT1f7LXweEMMfZU6JwGYcDWGHGVxoBHQtyjJZKYdRwnVC",
  "key6": "2kDAMtSSnyQe6dfxV4sER7xQRRBTp3MBAUdBbty9SoSHwtto39HZubZeYF6nRRegVDyT5m2ZkyN3aU8XY9U598gP",
  "key7": "26SE8LSRv2ebM4j4YPwYksn2ZfMRY9sgZp1LJmudtBSSaZDFvfrz2y9Wj89LtQ81KvwTGaNX46MXbbSfCa8kpbQG",
  "key8": "4cUkN69s4ifH2692cMPrQYD1n3hz41BgkEJRxAY7nyru9CxhbR7o1LSqmyNbu6aXZKbRJb5cYdgCtZ6kvMgMUEFP",
  "key9": "33igRB57puX228fGAMNYtUCEszK9H2g3JEhmgqx3RXWKPrgUGr3FqKcg5Eo3usxHfktfE7uXo1qBAtfEUDCN3Xqp",
  "key10": "3SUnhzYxMe42r4ZUhu5ZjfiC7H6E5BDUoVXbgA6gi7TpnjNzf1JNkJEBcNnsM84HTt4xJsqF3frbamQnXAe1o2ty",
  "key11": "2fk6m7kGQd7fg74DRHL1reDLkmQ25NiKNhVmjqGjcBVMtJFNV9r9iwnekE5YWyJayTYwDWD7713obprX1YKYi1ys",
  "key12": "3FD3mDJnN1fLLVatmvsm1cADk8EtrupnzyQ3qL3Hmd6KrSGvkWdTgaYo2ehqdzq69D8urGMeKaJiwnmgR5RicwLm",
  "key13": "4cLhNYXGfaHas7K5d1zPFVA3ZZqupZwkqjc4HfhGAnU7uswseK1HBUJ2ekjioF8ZuVFCQSNpNeH3fuHW3S88Vptk",
  "key14": "2CTNQwj9UZWHBG4oMRMG3yuw3FP6dLai6am5m8LxJG3Qzjyk8EhYwgNF3soNDRQDz93k8R8y3AY3iuyizMBFVChy",
  "key15": "kywt5LucSkzYrNiRYHYvKQ8oH6XfGScZQ2WbkrtNDDQqJjzoNLVUpS6KmecCKzTfNP5XHynMGBJ488JfypVzEFK",
  "key16": "35iAuqUWjJCWjDqDVWVy2ZkUK9HqQYQnxyFija8LKf31jvDr9rP74AN1UnhZeqf8urB1GJmzfgmuzhuY2f9t7NBr",
  "key17": "4WwvtqWJsCorKwtmHoVJ9y5Pua9xEwc8fKTPzoCV3jKuK6PnBWQw7wnCSvuGh5YjnGAXkTQKVAQd68Dfnqvxt5H2",
  "key18": "63ZcgabViofhW6ZpHZJWwcrdhhTruhMpRWBo5t9Ut87cWaFQpUggiEyuyYYeHFDjF5hqowcBpmFEdUd22cGne8c1",
  "key19": "2y3kEUdLbHoX8GTBc8scCWzHkp1f2LYaqSK2XFyXVSMmUor62vYyDtkcCoKF8xoZowshKKYLPp1sBbTfrNRow7Uj",
  "key20": "5JbEHTzScmU7TpmLHcaT9Ucb9esr992752dCs4bMkCHsACLGrDQLC1xnicyzJ7ze2aio8MCUkHnK8pzhHCoxMViB",
  "key21": "4yCNpuAHBnAQoXDBoktgbfsRGCqAoFRRFSGnbcVsjuqfHq7afe9iQQcyDHzQ17bhRgBeBMt9tSz917dnndWzkFM9",
  "key22": "2MtQ5jW9J3VS6DfjnUWy2PnN5qj3Grzv6smXhBUupmtoQ2LdAPDLKAwGFXWdHaDRSbeuFAd6JuFNECabBDqhLFNF",
  "key23": "327n4G5AN5UGxCbj6tNfQTnNe1LkS3HeAgg1exgsSnTCUskthF62uk8ZRD8Ez9pBNqrGQo4wMCsTuixikCdyiPsf",
  "key24": "4c8RAtbrL4f4MT8G8XMG2VFPGFn38xKnue1tLYrMd6Nkp5ZEBAX6eh3HQQiJ6jr8N7rNVsmdbJtYzXm9MwtjBuTv",
  "key25": "29x6VYBmXDSFbiaoAGGYE7g6uuZQPqBZxRKmHeRXTSuFTTvHMU2wiB4PtF1vNNw4fspejLGM8BwmtPAkJtCSj5Tr",
  "key26": "25QYtvXAJ5x3saaFvtLZvjbtR6Y9miWiaw1PGpAveWu7wpcmz5BSakCLYwfdpaJvaXzguqSTnHruttTfx8tgJw8s",
  "key27": "2Yd1seifgvpTsDLTjtZpYMfB64WZe3ARJeeHCJkDuJYqyceBzTcsV7DeAmZZozu96b51H6x8MkBNcgczEvaRCvdk",
  "key28": "3y3Gy1ZbD2Tc2EBt6amAjFoBQ5MNhg99iU83GjrpWxiPgSYnHwxnDkLpxJ1H7CXYuhGnczSToVixXQbffn3CG9mD",
  "key29": "5zMSLQyzdKuKVKBfzsxork89kCQKbbG7JXajQipmQxcgRekmahjAsDj4GxiAk7F1yPqUTdta4v7L8CJumvweQw8z",
  "key30": "5zMJhDkpXFeyhQdPc2rxTvJoHk55VKkYxqPsFpkvq7CB5qPwtY5zRXn5gm5h7H5ScCLTZYTEhJkmi4TWAedZJGWG",
  "key31": "4AUSyfeBxvkhiYVrfZvUBSMJiDoRMndRVyCNeTvPN8hHgyTWa7LJey6AmjGeTbrt273toECfw8uBRi8Pi7VfRQR5",
  "key32": "XkAGYQ46nFYA8W9PDhRVJ5QLm7oSSMjakatA4Xyme6dowwekr1gZtqnUUbMtqtg4bncevCurzsMrupKwq8dB4g7",
  "key33": "4M2D2dWve6LVVcHkKPcGvsVnFXDzrBnny9aoQkG9JdVSJ36pU6h4LhjEnVFX91WomrdbDP1FYn517v2Rmmf5gB94",
  "key34": "2dVS56fshRDXrN7pkMnttUUbEaThc9c6wQQSpVLubkzjP69sXruwQZpH7HnnMF2yygtVzKZ3JJiGBpwCXsYMnu9k",
  "key35": "4f4Rm1QpZaTEzNyF8Lk4FCNQ3R5AHt9orbCQjVGHnfkRaHcMkBKRcPJbxtoJAndmzxsJPD4DhqKhKvSSF1Sz3PhS",
  "key36": "4Q7sfF3RFpXJiaExRV1mseEVWHyueYRtbziQJYgAQ2SXA1MP8st8AAAXdukZ2gL4Jj2ro5nsgD2nin57Bg2e68Kv",
  "key37": "zLrAkyeiNAQcnFoCGTbfsbrBudNMvvcceU2ZESNWi8XFMdQQED9jwt9b7tyVPvvsN1ifoC25ZNmFNteEf92HFt3",
  "key38": "zhSQPxPB7MNEUyJ6Yy28qB3oFn7B2RyNKzWG7oRUbVQKUx1nqNCcAvFAWuKvvCpBwcUPnc6QrmC5rL52GbTrsYR",
  "key39": "5hZceNhYm8VWLLmcP8aaU5tfDrfrQzqGw33nBTxofTAmKNvmJGqHvuQnrAfCqpUa4x3VewmpZ13PMQ5iyx7vFSvV",
  "key40": "26ExGad6yfLirz64tkSorR11W4MjV6cytXT5hxYgVb6ZjWtgCnx6rv5ixgzhbux9RZRyx944EKAsBzpZj6AtYwgW",
  "key41": "54sGddE2E3fnGwpLSTsBTD2e6pJmcPqMxGKpLi9b1aGBvDdq1PTtEJVyTD56pbMkS7WXyZqNHQeLxnNm2udWsUJt",
  "key42": "3pLHGMDMsjbk6JS8SrCLynLfXYG3uuTgxrsFXALDj6gLbnj7H2Aebk2evhY42GtupZPgvBRg32e7S7xvZyRyZpYb"
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
