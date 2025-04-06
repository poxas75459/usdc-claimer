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
    "2CRMMZYrLQejMYEfc8Dntgh1CYEYZLGfrKxHrB8x3vJDcKpifQKs5ER9LNoRPt1AuG3QWdHFG19ri23f35DfxiQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zPEczfmMr5aBPhqnNzDqhZ9JD8Sf6ZSMYVn1RQjn1v6L7fJ8SymZZX3vjMzPeCTgetJDjTTmPXK5djmpw7q4G86",
  "key1": "2Gv7DVsHabYo4283mcDr167LfPHPU6gNyLgmJwGTD48WrbzqngWWDd45ZHrtzrM5wn6mF515Xzj5oMPfXbnZ4YV6",
  "key2": "5myKqi3NYmXaNMJ5gv556VEhjqacAy6h1tLvoPHcNJUkUEUaVPU96HjqZa7imhUK3tBoNtxNbQcPr7sRPbVpQ127",
  "key3": "5x2nH8C1qpeGw2Ww9xVBsDdXJqhm2VbZGyTU5opLhdDf98cwq4DwdTHNsAu3WQLQ17buD2BBjrVbxg2fNxfXYn62",
  "key4": "2uFz3GaWyNwjSUpepqCkvWVmAXK9Bv5JFx2pLoLuKs9obF4HArmGnAYsoMZSRUT58JRXvM52VJrz2dWDYxV7aukg",
  "key5": "5mqA737rh8NzjpMLZLSQoTCDGmkV8EdWhteQEpgttKgbub9rXEmCrztKiSnBqnh6gZTEPnbUcfNyCHLJ95FbReu9",
  "key6": "2oPNeERDez6LjFw2ZvhuNHqDeo8s3h9tzA1hS1n8CnKe7BZJ1r4mVMGmVTcntuMb1KWJojzXv4aLzvVNJjNDmV8W",
  "key7": "4eTtxD1AaJav9yqBR5Y5D7suZzonZLJvKF74w2B2aBid4ysNkGNC2uNkAGDNTanoLtUzBZuYnmuq6Qgm9aHBHioR",
  "key8": "5y1w77GAgyXtctrJscLjEhbufy9FvdBwFJBACiENiJ7LxidYbNoAzgf8VsNYwLtppnAyJKbrhqm9BEpiuhdSmnDS",
  "key9": "56g1o8W9ojCpDkdr3s8emZhGQMxqfoJyw6jekruJJXfexHGJdNtbpuHDVqNffp9WQxkXFiANtzzrcFE1Sj8xqZCQ",
  "key10": "4BeYkihJygihHS3faBRDiL4MqKVAa4AEi7zFdRT4Y6t9evuySsKu7s7uCq1J1Ek7xDY8gmVPjRyq4t2SfzCCU3fW",
  "key11": "4C7MXkQ1X3YxRLoKxKLHRLuEiLyB3DASQY7ueCoJA5Bn3L2VcguBGweUgc8MCtfeE2NDteXFWrgT6qnT6zBQdkX1",
  "key12": "NKpH9jhdBGkD3zVTE5rGXcSSw3s7Tz9izjfgqzJHt4Qz7fvUzWVDrYKXudYgyX8dAj6kBKs2zLLFLSPyWhm7csC",
  "key13": "5GWcAFiZSoMB6QNzf77TEPXQv3EFbffE2AHdHbQq6Ame3SoFGQTfedTVx5je2eamkwzowy3vt2gYqP3hxA5FBgcz",
  "key14": "Eb3gAxaQQ6NoaoQPJBPJxxaPKdyz5uAYEygatphSmVRifJKcgfVxkKxiMWcyYE4KhMP7GEsP7wxFUV9SQsFBTqw",
  "key15": "2RYC1FiPKdy3A9xyH6eFp5wRtfnTAFGZ3ZoW6xtrinNNJiSL5EwmbxRWvTDLi8KAuH8kKC7gFQj5dXxCQy47K2i4",
  "key16": "2DCHy9uYWitavRUXHj7ygc3yerT6rYCmqpLrkhLQqWSB1E3ucMCCanQtbHQRTQSqLZVPnfthH5thUoLUkaVYeKHU",
  "key17": "4FZbufwpnTTMHMHNmGz6i9LT1d7UpGmnfyF9HSPkPE1ZSpayuA9cnbJNJQjBb1t9gZq1xUEaYAnhcmTfnRjRHkys",
  "key18": "24tYefYj4XzM2uJDTBPrwU7CyJ7RmZxnQPvanCs43f9RTh9NxGgtpCgdjcuWG27JVQcB1inoGwpc6RFMWbqch62c",
  "key19": "2E5wGupRLfLyAXwx8eaQE2vsDc2i37zPDfDvrG3Y3tRmBjeC5N4vJRiM8G66vhHxx7NGRLDzeYgM8eGo3efbdzMh",
  "key20": "3ZPAy8qZDvXWV99ifm2ADGzzgEWVS3ShJxEyZuwXmqSEKdXrBZ53foPTwPVBSqS4az8oakA6WxtGV2er3BABJ6a6",
  "key21": "2Sgy8RF83Hn6SqPDkf8mQKedjjsQxK2Bfk8bwjexMnUAZehQJVEDHcNfkwDTMZfEQaBXsgqwu7RtzRwiLhQvQB2r",
  "key22": "3TheuovSsBjNVk5157E75JrYdwKEy3me4tgs4y8Rokbz4ReXLgHe2yqSwVXqGGajrQVgWUvC8eYvWoX8VbiTqaM6",
  "key23": "2ELBTZXxqfLfXnstYEcEhRvGNth1NLoH27pcVyhk76FMfhkUx3D3pY5AJB9tQEroRbGVHrqH91Kv95h7UyhqTgxF",
  "key24": "4Dttj2W3V454gKSqmQ66x7WSHyGZB9EujtUGtsgL6XBQsPPCHDWz8qtqudxmGubWnv6Y4F8NAs4ohQjHe7uQsoYM",
  "key25": "4DpTafn6D57i6xpnoMQkC6cM7LNQVFv4zdAPK2KktTK9HtHok62ZLyYhGBRceUwvXCiLb4XAGyZjenKaTq1DZPeh",
  "key26": "i2HEm8rkcdUZV6UApjXbAi5hwcpajz1jjwPfYmuVf6QeGZkvoqYshfq7MT24dBLR4KNau3QUQGBVCeXvRYPu37n",
  "key27": "qyMJXPXhgxxFGYZrZbZznqy2keoqwKPoPvTqgymS3LNQzjtbe2XRWb2dP5thXtaoahuDJhDJ5yoYdz4YC6Ux8j6",
  "key28": "28Aogz7YVrmrJ5kErRoBYNQgf5zpBuAC6Zk3G9Uf4pRrRLKGTCPRSYpYdQmdwNAnNqUzBBckE2nxQ1mHx7DT7AQ6",
  "key29": "WzqRV12Krc7do9pqQWWG46hsfRwFvmRujXUWAifquqA9miriDqARU4Dw9m8nZxQkjZKuWhfNvLMVrBX8Rz7r3dQ",
  "key30": "4hyVA5Wx59RYsnNFtCvLKygWJw5G2bv9saoEtZAjzG1Zpva9r5roTgnAbthW8NHcqfH4PxZdWi6gKdMmgs4h48z7",
  "key31": "3bcEgfP6K3uVBrH7ideF18bCQMUWJBexQ46NsGcBbWVL7Af9cqKTjhuBZ6qsqtnWYxUk3eGuGHpPNvQgM18jX2K1",
  "key32": "ktzGgb85R7c9J8uVAYVoptuaL6hFamB1tb8QSjzRm99wv46jDNizqjkG7YZDKY1fLpDCD2KAAi9U8UXCENJaNwe",
  "key33": "5yVnvDRkfQ8iugEXeDX8RhVw7NyE9sgCPMQVQYNMQwJxhJsMGWN1KCBu65vouB7T9jccLsppsHpFqDxPyvxG8eK3",
  "key34": "2SdU5XUuzbV4gkaLhyrd9MZM6eHWWNBwWFoDbn8JKy5uDTP9VjgM72Mpd1bSby5rw7s98YPBSmHHLFNM4n3PfBTp",
  "key35": "2T48fFQ8UYmjhKYB2aw2TiayKsupT7tFt8sJfswjwPRch9jVK11cSoHEvijueexs8hgBKX3m4RWyXivfCGfeSFPi",
  "key36": "4yzr94VsWe7Nn3qdR6Az8rEkkcJBHFsrcJKbVNWTbZ2sJLWFCViiDmsdZuo5Xg7czM4HCSJoZJy4ZVS2hXWHPsQd",
  "key37": "5qxczSoRKUBrcSF8FVeSBNpM51sLmJimisdYHY88KuiAuzaRbEzFk5gN1qRfj2YvEDjksvJPEqNSEkamjj6LuXaH",
  "key38": "4166kgpS7qjENP1o5bhZ5sT3Tv93XiYATpwCBwuipHKwczb2D3aLBTHaHgBgYTuDn4XbBRRJTsidZXnmBtgQ3tny",
  "key39": "5es6XN6Kh9iNSZfG6r3DkeJpFzYU8QxPcwE4mB1b7pjuyiAGXmQTugbSmCtmrvADqsaPYuTGMJXXMFXGrjetrXPR",
  "key40": "Y7MacuzJKWGL49yiJf3eiL7tdmHqxAUPVTiUdTPbNR4UBpQ1nugrFPSw63tR8dbyVexBPBHQHzSpAH8JMbMX278",
  "key41": "5q2sco6nPfPjafMKQm9SGadZmjUovFbujgfEzkpkNCbNuvZHyVfeb1nh9inh2J9d7BDKvpW3NBRBrzmAu97M6wN2",
  "key42": "2gEXU7RR4YbJgSpdDVfHzZrvTA2YSX15NWpqBy3DRHfXQ6W5rddxvmdutPcnfQPsvxxYSYut9wjGMNiZJ6CAJhXg",
  "key43": "2UQNzN1BFpLjbrwBVdWskEN9tdb8AhqfZf7HwVfLHwVcPLFSUvcTmTJbS9bERHutippJGbcRHQQjDDaAP35Gweap",
  "key44": "39v2GdfiH1GQpeBqoow9CknutWQxJnQKVReFRhH1ELQhJSGe3LrwYrdQkE29N6Csgix71YoB1z1VspH69i2XDt7u",
  "key45": "52uJiR9fK8FSexuYLbK647c97idWE27rFGgSKAeSTg8a2YKG1oYWhFgQ72b8bqa1gWRvQB2GFhzN2NLB9saLeYmC",
  "key46": "4i96YnR6xgiuP45eK2aW9nmTLpDfAeebp8VmobVFF6wejbbEPHqm7P9ZvLXE7mV3TFvf7rCBi2NEkhz2KzwtoGcX"
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
