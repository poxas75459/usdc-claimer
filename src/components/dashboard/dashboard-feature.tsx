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
    "5JhFfKr6efBZhCcpu5Uk1qwq3hN8cD7QkYgNPykH31JHoVDJF3KX9D3fmcmfm5gH442msEiexLNYq3LneJZ8yWEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CXAMuCXHcw1WuQUqDHoJJdjqKmMDGbfvMHYD2p9tPPbDWdmbiwtELzvmAo3hSoAGhScdpqr43sgyjGgfVb8Sig4",
  "key1": "5Vgc8QAANtQaHfWjSJrYZR6K7k6BpCCb9K8PtSFhRrL27bfwd3dbE1h7aE5xQv8h4Jz6eb5MAz3KNQLp3qAc8h8s",
  "key2": "agXsMc5KBweujBKxaJZiMpqPaTpxuPCktPLjkRBNuaDERPVdr3GDMLAxvSKUwGMUEJDJh8o5xXc5D4aUYaQLxpE",
  "key3": "nVDk6dSyJjFHPumLcMSeghVMixEaLzDj4dF1i3BYxjLVqZ1y8rGh4LP4gMrMgNTPWZXDUXBNFL1kC7ZhTpPnNQc",
  "key4": "63DGbUTBzSbuZ3eMYfxj4cfyTrp5upATEmc4S5DedM4DKQn2ZsgAaXejRtbGYXXixqjPkTpAxdwsSo2oRPkyGKax",
  "key5": "d2JsnjVW3MtpMmbkZ934q3WW1CUD6W9Uo4HoZhLuT95YXHiriuuPFNdsTNi5LYYCiGyqhDRkACkpwqdWu8jny3X",
  "key6": "GyWZeX8utHxxLnRcwUjneSUzjTAZn71owtyJTkJsLDMMYX4XdeQrJsBBLDSDAMynAFvwxnTCaXaJVbGZ1UfD747",
  "key7": "4PoXXoqp7rBgX3V2HddXZo6MH6YCYHE5gTxXuoouZBwMiT8fW2TPW5etTahVKikriYqJJnC1ZU54hVfXZxoPdtrs",
  "key8": "3fgv4nKfd3nDwo2qJuP6EXTCsP3czvathGejsB6Hy7emxode1nbK8hKVD8jrR7WL2F3HuFSKm3rAB1bzJm18Fw3R",
  "key9": "5j9ouBu8Gu4FJufMJvmXD7bCPheGpAbddqd5Kjh6dJaLrM3njr9hdGbdvp2mj664g61kPmDyJXf8qKYGKq1bY4Gz",
  "key10": "4uMs3RNPgMEodprpgHAfo9ux5NVKocPdqX2iwcyQnDx2nvzdHbynfiDf2An1zf58ic2DjHZpsaaJbD88FHgpXLn5",
  "key11": "4Sug7559FaJtjYLmgxeV4d6FqWeGSCUj4gk51c1E3cLXUTSvt8axmeNTpDMJjTNHfwmqUpKmpcouAPsKZBpRBjJH",
  "key12": "5ZTZM9ZdkRj4vW1RaTWgwdKTRcv5KAjuqobjQntPNiQyX8vAAZQh3JsCdAD9RUn4dGNcpB8gkvk25995k8oxE1Bk",
  "key13": "51hF4hRZDmftW2FR2wshn8A6uZykTfmnMjmnAzQHUssnXfCPWr3rffodGZZFuWgZzUpwKTK727DTYUrRuPPdxH7",
  "key14": "k49ECPxzrrhKs5ySEaThR4iEz11v2UqSYJtw2KLmEJ9wUteRi5L7dijKMKmhRfxyKGL21GyACe7Bwp8RjnwrEHz",
  "key15": "31XJGKE9Z9rrbVVYDC8M6YgEeaFQwKVNoTnBDnwUH4BqtkmupsHz1yUmJDaL9zJgAZ6Uocj5zBGuCET5N3wHdsaf",
  "key16": "2gAcYENj62YtivLxukkLdNP5CfXcQRuGJeHRYjnm8QR5eAsDKwdG6jkH4P3Mfc37v7B9WcGQoGhNKXZx2qpYaSVP",
  "key17": "425ER9GEHUc8RLWpcXg1S7TA63chceC4hmTxyK3MMcqmstvbEQ2anFw4S6SGmBDmtPw58eJ3azE2UmPm45q9URru",
  "key18": "YePLdYvZ9h99yo8es3cdjZbF3sHk55E7BREjMtHCHpSejfoPwyzyt73NeEQiYV1r1rPqMKL7Hu1aXHPvtwnVSmF",
  "key19": "4kujmsh2xQF9UzofSjG6qoB7u8QVMvmDTKfoe2b1CN1dtvjKs4r3eCKESGxqWLSDCvoKtTyM1ZfePKUUysnpeajZ",
  "key20": "2AzQq8NjjwM6Mz5RfiUbjPEXoc4B8XXUPgv3X896R3foznq8wJr9wVpbAAppuBPJhy1MFrCeGqLnPMbvwnQarwKv",
  "key21": "BjW6C4jgxHyzsuVca7zuohrGHYvh3gK51rC6xi2G2TvusYf1amYSbiJRm2g6URc7BcPBb3C418rMSXwmv2CLmfW",
  "key22": "53S6KyGj6VdVwTPZrtXCuW6HbQcE6ootPAxBX5iAFnnR6q7P8b8urkQuikcC4FW6pPEoYoDB5s86uMh93W4TPXsH",
  "key23": "4ah19rn73dEc5eA5TgMSkJCUcQGCcygNvX2SFX3jJXRmCneCw4LRsYk8KKumyGD2VNiMZcQrbcQNSCpno6AzKw2B",
  "key24": "5QBaxbGabP6hYViUJLpukXH9LhwpoYAv6WxUx4kqbSVwoYxthaN1g9PA1GXC6jor2WZ1WQSoGe3b5cdFYkTkVKAC",
  "key25": "EfRifj1h6dU5UqcgvMCTzqs1faPzfu3Gk9Rmz5mFTWLhT4R2YtRovpvZTiT5Cy1RQryR51NBHFrkiBiNtMmXnSj",
  "key26": "o1tCmNNhcWdQyYktMiUyP6gp9BgCCLyT5UBpcBxW98vZn6xndKggig2YPpQUzPzWbs8YbpiG9SBdGuCNN4j9cvj",
  "key27": "3QSx4vW9bPaDX6bMhuLWtABmGrd1LTRTCr6iZx29rEGZhYATgtuqKBj1fqpwjxtWrRisR4SZcmbEkz5PMuxUyJWV",
  "key28": "4Prc9b1ppV8vmUuP1aFbZCXctdo5cTGvmb35h4FC1qKyuq77ydRLhaP82ToZf12e92PB5PMA8XWF3hpAWK3Ncnw6",
  "key29": "8cmSQdGwovaRiF48fphFLs3N5BVk445PYY5EVXdfjiuZRdMgLPpN7JidaG3kYt2CxGKiWzWAskkpLiwNxRdHu7L",
  "key30": "67i4a6UcuQE2ELgFefoDFDcbRnra8FefYiX1bxmnjv65LJExYRgz3sXXmsG9XCgAaU27esBtL1zej628TSb2FYxA",
  "key31": "23NRm9gpp8nSa9osbcuX5NzPzSA6dt3yTxE8vU9VkjBjyk1gHVPg4v4a3QEw2fv9K1gjXbTEWWukhEbXpiUWQp2p",
  "key32": "5jRNL6XnVPHRKMTktYvJzHHXULXWBtpRmPMcc5Co89nDZdJZaNggaoWN9RoUacQ5YY2burMALnHkUqCKynm6LPTx",
  "key33": "3twZgk8RgcWDDn5KztZxNj838PNCEUCoJ9hPBR6vxu7AT99jJbTcCJQU3pBCm7tmsCTuVFeAzVfRB8v3SMGHCUwD",
  "key34": "2NUXV1CcQyddto7fwiZrRfrtGAsKTUtQizTFBs4EaGaQPn1nQfkYq6BF2nxgmJ74eYbJmUUwZNJduYTpCMyxaYrg",
  "key35": "3n9EvWfE65qAKHHcMqhxnm9dENxM2TgxRVuaoV5Q3jAx7f9XjGrgMTfeo6Ngf6SY7RHxDNtcBgEfBw91YVP7trCs",
  "key36": "3WUMjE9TEjPdA7iWqh2B8dWqP4XhXqgtLmnDDod1s9aLBvHC7AAV4VD3av6TbKMFzreyfi92VXB746fYfeo1heuR",
  "key37": "3oVzW73Hcj9SHi3j3ASLYHjqySBgNTaeFfB68DG5VpbDrfUdnz38VVMQAseczWifaCbxBPzsjSM3GbEavDhJUudf",
  "key38": "4kpT57SEg4n2gUfnrRwbTVBcWc3yZ9x6NUBWFeeQRydaoVR8CbK9EAVuqVzu7azaLkJW18c3pgyLqdjANHAALURH",
  "key39": "3XeY5gTpG2yrTj6kisKVpiJGKs1baZ6CAfbojZWCLdWBJWoB8gdb1PvJ5QRjJY1gKnXk9bEbm4d35pgHRjKswNun",
  "key40": "5MyFJQJjmp8LWHA6jVegLdrcfMh73wjb4bK5fY9sHeRNbsPWZzgtspaqUS5K2oQ8zTP6c9uBZd6wmVUbrUG3wHQD",
  "key41": "qkEZ533nmhtF567pkkv4RYQh7tUMQrxhhohxaB85tFH1HeCkv1XzFkdY8gMW79edWEfheHrupMYGknAAp3egxS9",
  "key42": "3nhzzgZxd7iLgv9vQzSu7wRA22qLGipN2dHx7mD1aKGuEST7QuLnQusZVJk7KSuFvjgqZVzxYZudkCJJtKZ5Jcd1",
  "key43": "aUc33ekgeP24QDPjGYQucKVo2cRYqNjFP9d5f3i2nYR8eZn6tWTAgQNEAhZxEceHLe3dSpjK9BR9yYBsYDHm3R6"
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
