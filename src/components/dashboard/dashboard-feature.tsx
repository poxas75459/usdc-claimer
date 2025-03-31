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
    "39vdjSWksQsLV4ayyKgMDVNKx1GPwoaboFoevVz3bT4frhQyeW7XeupF5PukvbDvcPfPPF3X3TykmhTcV76HgmeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V3yMnavtfBuagQrfKBaEKNJCE3Tzs15sCuxPPBy3YGCpUhvwmn4jpoexgb9m8jvV7pJCAtu4hxQpCHq3fYQt4vr",
  "key1": "2vYdVeJqXzGHKHfjiLaL56jxzyCVd7cWnQ42uWHpMz54QJnhESMK526XCEKSvuo8r1YqtHMd6QYmFxngZgwcQqkX",
  "key2": "jzHxWnk9Z6tuHi7RB4GVGTiVyDXDtkeuxdG6f2trUpR4nPo4UYsUAPNWPu4r2k6DmtNFNg8RQFMG9canBrgmPox",
  "key3": "yExHd44AE5WEddXvbqS7YhytWDtSJnpppfz2UxoS7mFSqSBZbvVHihR5UyeMT11J22eTacy3Ek6CF8HVx5SgbG6",
  "key4": "5XADZsS7cBtfGBxrJcuSTzwsnyBY3tdR7WWpRtEaYL4xGcKNG1W5CCrc1HcEgv8ouSNnLrShyBWVzBg1NpiTfXBb",
  "key5": "2owxv5CGshpUAVBnkRNCLBqNFZybc8X6CdSfAb8Y4fxGvPDbL5NPqV1PqAHhQXkmFh1qA129JcJwi88fbTXFCdN7",
  "key6": "2wDRPGKG38cnLV4DJo1ntZrDNKqmDUm2Vzi3FM75ZaK8kFhk5RRbi78CWJBWgt4KqyfAAhL9QcHujgL7Bc8vpzas",
  "key7": "25xJoQbpEFRAsg9fonU2jtLACFo632zaYTCJmxdDauHr5zhSYxYmwMUPgUWrMWCMeeUhfR3D9irXttoVoZFnQLm2",
  "key8": "5BwEsPh8fkTqxrKRB3hNNSsCZ3zNUWJ11Sj8TWdaEUkw4BAXDSpGE5EmTnMyf6FPkTJXKZibqQn68fbfE5ziBL6k",
  "key9": "5EDywZUsAohZJW8Cfp4BzavzAHPoMStoFUa4eBThj9HZgYz8BUKU3C54bbUFHFLbnCUbJUMzt6waRr74RTh4uJMe",
  "key10": "633x5YGhJBu6iWSNdvcWofxFsrsCe6UKckx5AuB564hJApELxUaGbTGqWDFH3pd4HWKrzxuNor1PyVNNqz5DQwAb",
  "key11": "53aTDUJdUpuY16Gt8uwkPQZZaZ2VfZj5aDwA1CjmiTgujQCsPp8izfTXevySjNomsNdEkceMrnJYEgMdvAmdC2rc",
  "key12": "2Rftnk5wNXKd9qYmSbq8e3aCzFr7bP6Nxv2sU92p1J9sNaQNzZt7XdPjLQ6GrLbV6WnBGcsWZQdrm3gQeUfkFff",
  "key13": "pNsSpAxmGJbjXon1i1zbsAN4gACPRSXLJZDXr99JeZ9PLptmGzH78QWURuGddXdMh2H2tMrkhuigzamwSrxasoH",
  "key14": "5oHdE7PuCDLWtE9DByXZPJtZjer3jAjAFa2yoR3qGFYRdUfw1RJeHTMGcwdBgU4GRRDk2QiR6qGKnrrPzSMLrDsq",
  "key15": "44QsveUFVXazbntFGtU7hggbCZtaBCc4qpwnVcKq8VjLocQ9HW6qJ89kY9uvjWvoUjE45ueakXEqKka7TPRUVs3w",
  "key16": "5WfPgk3QnpNrwKVhYPZTsY27q2dMvvxq6RorsJm5ehNCDtqyBJoFnFpEeCiNnYt1c6T6ML9Lpbb29EJzD24YqGLW",
  "key17": "2BdKf1W3rJqv1UZBbCfbY5LXY6X6rTcWau3P2BZ9suawD5uyDXncN94Gces1RSn2qF111WPucJLNJkFJVzWqvDLV",
  "key18": "2nUUDX5qGrADnKu6XPWPGnHtqnrv7NokoGQ9imDiuhW7SW6LVqwCtw26xFu4yk8rFY2f5bn5isLFwNoqrD7L5V6m",
  "key19": "3yBEjXpNZoqTtLVH13rxQHj16GeZi4RqwgaToNpf3wNLZ33EaKjDmJKgNtwfwuCsbTbVwDFQtiMk1gsjkGu3j3oD",
  "key20": "3NNVJnLTgad1atU9KNTd7KXyPW5yx1mftgrCR4zwrxwG5wwJytd5ykh4KQSGQ3oVWLzAcJRoj1nHi9WZmiaFyeah",
  "key21": "2PT239hdcHSGnaCEQvE3qXLUshd2Zu74unrMAE7M2W4wfcwpR1JwYWQ48WybwLThEpoUq9BxtifYzhxJXP7Uu2Xd",
  "key22": "5wBEkSVw6iwkiducRvZbp4RTxrgCDoucQmT6Q4yakNYQEZ3trD4nVx4sNYATu8GhMBE67VkZ4PXHmH3tChKsTSmd",
  "key23": "rsW1qmkUkh9XMz7cxtcHoddoMUNRW2g3dAqTjK5kjFpJwhWLT1LLg793sARbBmebUsbfBGPRAqzUr86teN58t3t",
  "key24": "4UKP2xSsDVCVTHS12t4JmQfd9VwiABu1tMo2W4cuFjDQ1nyD7kPbBuczYRqo5Byaugr8aHZyvphJrxtuUE2TXjfA",
  "key25": "BnfnKf4SUQjtdqd5WiysuvKi6zoK4u4yDg3FcDdqypeAkenqj3zgPqk5AoCpKjXrVqDPwxWSoDu8YnXTJpCJgSR",
  "key26": "3RmJCMR7TsfzRJ8c1gw8hDppnLAmA2vuK8RRkQGwPVMe6oyyNRR5xM9jsJ4J6KUARREiq46sw3MNieKk8YS5UbiK",
  "key27": "QDjNsEBKaTTRj2PKoY5cgVBLzYD8iPVKKPHf5Sc9yReqXYFnudPWq3R2MbEuSVyHStck63ZXJgvYjW31AhukQiB",
  "key28": "3rjAqZL7FixgwwSX7VAQBbuavakBa5aocPCLJBo9G2H6Doi1jbNiaBgx6jG95E8PiiVVmQBgFD7FK4ZcQTasCGxx",
  "key29": "bNqQWot2AEXMuEHc5PSQShqGSi1aSLQXcZZaASaFcCSSk36bMjvmErdyPKGbBNNDc78koswAKmqTT8X1pr111Sg",
  "key30": "5wdh3KWizB1Wxxm6nTmbtKY8zmUXs6tbzjx3K88YFDdUwVDHwGmS8RTNsiZ5vrXND8xE1pLrFodDHz8qVkqvXwMb",
  "key31": "3WfGqHQPWiHhNnDz5Q2bKaDpGNA8c3XHWDA4hRzHxQfsyjsc3SXWVbBB9GUUjdfMgBqCp8ptgnXcFb3kriJr4LMe",
  "key32": "5Y5DusLRSit385NpFpD4Y9xGYgeteFdGhcZktEx3yCf7UMNqvqWdZbBQYnLH14QrX4V5qJaNWqV51N25bmKTf7YZ",
  "key33": "5RYKsa3tpwutVtHEvBjNQeV1AtNSZE85Gb2ReZfjudr5j5zyVc4s9MCsuQAVvtjQbTtEMJvusQ4eaxwbfRBFAZHT",
  "key34": "4vzwKtL39GCAysiiCXMXcHRCuYhbxjUehmjYWvAuw4SoYTskHpKpvh8jNPx17ipEHQxRQahiE2LZPF3N3dkU1taD",
  "key35": "3ZetqAzWDAL5dzToDwV2iHg4SvJFSktM2L4nwMiMjukPccgwkKggkVvtSnTtL6Q4g4Gharu39GQcLfdvGu3aiizi",
  "key36": "5fNBchw5jcn7PFrbnQu6URcgRYBHFt1hCG2eG9ZjQFZpxECQZoPQhFiYf2YqaoHJnStRDib74JRfzZvUD1kw3R6x",
  "key37": "eefSpGDA2fAWXxB3SDM6V5gXZ9G3sGYf2PCt6AutZoqrKg4wtnpGPVUYSjoRaDbqtYecPcZQW5yuRsFXZLJzHP8",
  "key38": "2MyHAjY6HbDpSkEX2HstvD3i8yrs4NszNjifgZaFmtYJujZuH3WLzJ2a1qW56yBUZUxLLRDtwjk6WviXmqA77iFM",
  "key39": "YuauCs6LhvQJHJGNaKpE7XwMZmYEgjSCpuGEGagUWs2bUBdx2Ai4YGKqBFr3ULmV2sKUy4bXAYF9uo6T7rpoN13",
  "key40": "58N9ienXFkj2bzRmt3n9EFcrKaPPa9Ax5NaRqD4TTe9qGqA51Jknhk5KPu8tXpAc3jGLyohpdZ8URtQm2bkEE5uz"
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
