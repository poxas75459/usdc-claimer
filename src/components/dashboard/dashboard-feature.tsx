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
    "wm3LJupZfw2BYCTXbcPCTeh59AcRYay8G2QMWfsXw4ZxyNouiyN8P8VkjvzxkVFiLZZ9oeUNnqpRBG5jbvJcv8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64VwNxR6N1enz98cw4zfK25zvXsQWzxzbZBzc98gumM1rbWQ8LbjZSVdhMo8CEweuaNSpXYNyjxR4SMVX22BnbVz",
  "key1": "4m1H138v41K37ALzFKkrPMHaHM6Evs8G5UdWfWYvxuwpgiCgp6RyVrzm3b7sbvsoNTZJmWLURmNq19wcmhiDfDDA",
  "key2": "3T4fYN5JY1mhNqRgm96mQvwF964WwaQQfsvfcu1vSYZ47xn8J4XzLSf9msUbpGoucRSnfAMPFYuQ58LUBC2vMCRp",
  "key3": "ZSspi3YrvBRkHXgjqYAbECu4Nf2cJXQB2KRUuefDPkR7HDBAXM5D34abJZeVjkFWbbAjugAQUkTPRnYCBuRzqFm",
  "key4": "2ue1hta4qKR92ZAi93BSjQkRfLXRxvpPHywDq2vNEWH8Ai5VqVK8DuUisbf4ipmj3sJzAs8kq8okTNf2BKWJZWmW",
  "key5": "15fvCrvptqYvaRu4EahFrXyqD6eZpTKw5x59LvdCBcau6TovfQWDdeD8cXBN1DpFS765QhKrmNc32kRYZXGBNtX",
  "key6": "5ftzRx94ouNvsR2w8mrQsmtGZC8E6PZWi6rj7LAH4Z2sPsHMM5La34vttzto31vFdXGBEsvQLaNgsiCNSQcGVGEs",
  "key7": "3czDz1f1Tie63JGJ2srHTRT5rQwFu6q4nX5P4jcvayNLL4DWQzZoMBAZAGLV3u3wn4ST1kcu2C3zaSeXsfAm5uxM",
  "key8": "3ZFZJ2cVQbqgAsMvLVtjPCSsgpy6T7b51nHiCMted8KNTjvgC8WzVv4XnQMuxEdcqq2J1gaX6CrYRm75js6YpzoV",
  "key9": "5tiPxy9mk1bdByTGkrjhykf1JjugkyYvSvDmp8ASHtshBNHriFin7txeEktTH8RWvGkUbzp1sNVB8i12oThz3HaA",
  "key10": "38ZBPgwKaZYheJzmS3ykD9F5Rw8cLjDi6SKGdZ9PTPtHJ3tR3L3eueGkB5EJDBz7K2uD1zJcWvehZoM8EKEPiYWg",
  "key11": "62xHdCW18xFK469doobJPwhS7jvgh3b7eheJy8nViRsmpckG9Sb9ukD29eotq8ncWs8eAZPWyxEvnuZoG8hetyHz",
  "key12": "4isF83cQZpEVMFR2UtownZ9HH6GxHM6ALiUc36fxTMcidALtXbRLyWejaenrdqBbL2VXhn5kbWA2f7PyfzUf41Bh",
  "key13": "5XSK57TTJKFG1VPxnXXik3C7ruZJ7sEuyPd6dfWbDDKHc9vbtqnnJVGzdFWY1QZPDrhZPr8uZLQWEiXnXLU8Pa7f",
  "key14": "55wDaE6miTTvBetTHDtqQxn6TVMzTKQPmmUQT6Pe41HVY9i69Vs5EuEt4wePoViiwv6YKsipLbRqdUeDeJwENe9F",
  "key15": "2Skph6AM6YDqQkV1hM5jkuknPU9Hg1V2TMqTGkRCG9k69Yxf4bRtud82BK1EoJ8vC1D68U4y5ean8cq8JQmq2o3c",
  "key16": "2KdL5ANvoXPa3VGcLyeHKis5n2NDu2Ac4tFsRJ2AjeJPuAuEzzJfxETEtV6ETqjHg9h3A2JMxNpyaBCnKPp1DxRm",
  "key17": "CfYpXzbQWEAiwBAzCSz7RFJCnECodpuaTB95veaPqUdhztXdQ5awdeijmaZzaKhxfBpHusvtjLkfM7REjKr8rmV",
  "key18": "3UHM4HQsYYGbDgbAa9J7SJnzjX4q4Ms7jadSLRup9Msv7Znbm9YGCaQiPCJeXyFrdRm91rrqo4i6vb5msNhKfguC",
  "key19": "3h4P3ujDuN6rtiqJ6jXxE3k7z7jYchQRVPVTZrd6Py5pMYQp6wxAjuqBmh1XjoMVuB7xcxYY7ATXrXeX58X7uHhy",
  "key20": "5xFjxJDR8JPq1ggeiRU56KQuxj8Xrurshtv5tZ1KPyzSLWg5yefhp6SGjqihWBqgwn5RkBGSu6GHv9EzQh6q8SVU",
  "key21": "34CBbVmmAW7NayZnyCdD5tKqpgHbzap4FHLA4ui8bY4cCXpuEKJFkRT5Bk1nddUgVsssESiVP1iVcAcapdTseKhf",
  "key22": "4wAPSsEHKo7iTjEezgQQpDBvpXkDpKuFevXBsGnSgdscE7ope7c27Xde8ThgpxAT9ckZkrHHdUUxM2zBYpWtusv2",
  "key23": "9knDVxXDXKLmX9bFcwE15fQtkkbSP1YPdCxrc875SfApwjti21wahemWxTvoskTt9X826ixd1H4NJcvedkmneXu",
  "key24": "61pigsb1j9etQHWt5AKgUsh9pQRbnc71VDscR55XgYvkCyHsEqCShYsDtfuAPKM8H6dWaZrW9uGBsaAtBfbWxRWw",
  "key25": "8hVzDRT4tkeZiYpk4N9PcdQuEzKEBesC7ntK2n4bF9xtA3z5LLZiRE24zToR4iGYRUrDSzGg74mzfvgoSEzbEFD",
  "key26": "vBsCzhZ4vqX3EUC8vZjDmm1KfzBgB15ayejP97tpb6UWW87ZA5yFadNUyTJUkrjhstC87YVN7eibcnB9SK6J2g1",
  "key27": "baTAn8bRWsjGjqvuc7BYFAbAUDbMDTRPJ9m8AbQ7JN4Z8eccMsip46ym4QqwqgKb1McJAD1u9nmeqG3gJkFfcDA",
  "key28": "4ML4dYY9NH9gEqqRgb4vfWEkN7oWdNG5W8ZVms16s2C7rgpZG7qgNzgFiqa9JKM69xvU4cLBYK8rDKCq7AcjkSvr",
  "key29": "2B7Gd1wZjuu8SkTjbrMDavymhziUjQp8RPxiEwnj2Dv3LygdRLppi9zi4aZp8XMFnFvutvoLBzVXHaYnRzB2z5Rr",
  "key30": "61aPR4dn3RF9fPSoTUvZq87UpN1WhYNgiDZBxpbkPnEVZXDVPRUfBJPSonf2A9fkBUKhHoN3HgRbo1gKn91Td2An"
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
