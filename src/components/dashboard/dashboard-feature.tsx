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
    "4UVo29tpat4Pu3VDyFyJc8MwZ5dJeM381t1xq5ttRFCadFea3D5ZPE1t14DcrWmrvhJ2y63zLWL4WpFiioxqmway"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c5CNA9vgXKjfnNUmHazcpu6xKbGPBTXsep3CTinG7UdAYaeLVj4DLEhFnFYRhXeLbSAwDbjtGGuJN2kti8gBqyX",
  "key1": "oLxQNfKfTAbN87JuZ912JeDCnsJD5Ja1u18kWNCJBrdLstJmizCtJbY4zJrL9oJEhFMrmTT1DTBpbv53qeaBrZ2",
  "key2": "3g5E8xhMX3xhFjDfk8TdMwYbJvkvLHjxpPVvp7e1QXSFzvdNHUf2PVGC5b4Hskao1FDnANSdipqsgK4dEZFZ5pm1",
  "key3": "4uMy1GsyBdXx5go7TraPiZ6K5uT9U6piArPY2cjG5Vyo9v13xGCYpa1vewGY81pH5kdp9UhvyLLbCvmWcw9t4i7x",
  "key4": "3vKfPvTke43MSvwfwByRJGwTWL9D8MM8EFb4F4w9nV8t5r39pXKdxRopst8omYwaLz5VhCKT3FRE1fKn5oTCcjSV",
  "key5": "22esjFRw4VB7QCq2pbYyBR8QbnXcsK51cRc6uDPg1pvFqp3pd4LzECsPzweAnH559X1ACGMVUojkFRW9V1gBUeg4",
  "key6": "34ARueqLa9ZW8gaFeA5fuNX4mw2Qnt25P338zYnxbpKx18d6or61XAADUWWL2w4bsuyLZFtJKmzYpjX5asrqEEhf",
  "key7": "5cRHQuNLnYvwutkXzwy4xnBpStn5eaZCWFChu7y3i2W9hXj1nbeV8mw6DJgwxuxn17zKKx3m5oR1J3S4k1hXSVzH",
  "key8": "6LDV7njcsuynhdRdCjeAs2kNP9guJp8KkZ6D1Cp9ZxGKaEv85oKjT4UmwprEWYmb1phoue2uCisSpQBUp3LVevJ",
  "key9": "35xhZGdhWqkCPDeEeLe1WXtyG5phseCtFZdBtXSKo4MUbLuTq9hXZCaC1PRMbTdwUtSSjK8pEpdga4j71Fay1kRN",
  "key10": "MiDBsVuas37b8KWgta88LH4wBpCxvANip7faBYy7ewsJtWYZMSq9RFHm8ccpSBYXkdJjedFaGhnEFbWNRv4VucL",
  "key11": "4KddyZpi1AjZc36LLBgQxHnHvRrScTBNwDMPxtdhHULpScPQvVQQsK31hsvci52hRoWZRRkamQdPBZFBssJStHgP",
  "key12": "5FBrTDktDenSPk7sUbGMDydF2bwNkbV1eCEJyKg1viUNagbh1JDxWsaVKuDuHgzYoTmWArvbJvXhLKKtHLSFcHXa",
  "key13": "5QuuCCgacdtBnxeMoPjUSPU3GozW8S9VBmQWrYqtWa7qeEWfCcBGxizimeaCr9E2QtarpHWvjWy2LhdKrmBdFUg8",
  "key14": "667JpwwuQRgypeKbitNQP3hGMDSgrbuG4jvHfYSvrd3EV2ZoD2NRFt2FpS1VPUX4Aq3SMU4QmikSN9n4KcGWRgaD",
  "key15": "2yj4feYcnZ7hKomzvqumk5gCau25rWg1MBw8bnVfvEyRkunfzKitvasV2rhkktJKUxgWRyE5nHRxUbcTLfR2hEKd",
  "key16": "psaCa4Zmh252jr5kdUidAamM4gnmJjFHyEt8QLu4Zd43pmSq5oM5EWrJAsKGDg12FTxih7zAQvogcRH8Eujwy7t",
  "key17": "56qqDXQqiLjBxomDGmGofPHWtzvHtcZ9sorYgfeYC62J5r4gu4br5gMx5Qb6DPKGRiTFaYksdavZvZ92b1MX4Mjt",
  "key18": "2DEsUYtoAaqd7KPWtQ3VChwRSC951i45KdViY1ErMFSC9WsZKmKjrWJmuna2vqGBQYm181vMbNJ5VBCPk7HusQAX",
  "key19": "448DX9SE1XtVZHyeJhBHnK82JnoEu1yt1CcmTdf2F2YjS92EqvK3Uv6ekeunQfKXPKKY792SC6eFuETurg6WCXVH",
  "key20": "3KNDYPskXKgY4XmGQ4zjANXUjJvyfAXdMti3chucHaADCJLfkcjoWv1v7dm55gw1GQLLnxyFkXMGpoE5cfVFk5tx",
  "key21": "5JjCWkSEm6Nr763BfV2SsaN3BuLf2rP3p8ZbwtJN5iPkvCKAXJdhu24a8XfFe1egVqQv4qVS5vjgmNrmXwiGpZ7p",
  "key22": "5A1snjNC7Cq7fdNWdSjNNcLr3ujSheZvwn3sp1AhD6LoRdykA5VafP54Mci4Y6VcYtB1M7NpHXSJJ1V761F9febo",
  "key23": "2qjNmbUCUQsG2r4qUdLfVRuZeMBagwtMe6Nn8j68n7rHu7Nr3Pzo7WSWDKRPBHUVdTD6WFo97KhR8RSS7McEetV6",
  "key24": "VLM4CkfBjJF1hhBYyHZg6BbHSctd2dyYu7ZCpfUm8NnMjxZxuRwppQRKbeJdtcUbvkLeu3wGSNCh8XCpHBwgzoB",
  "key25": "49boB69CYiZdnY9A9GJdDWYJiuT4SiFcZXc5UdxFkrbZ1nkNrMxcC4j3Ce9r5oWHkM4XG98YgAjpiU7cEpsMaWDa",
  "key26": "3n45yAScfz6Ujpc2vHbGBndC6qr7N6wBxUgeYnzpY1gMZnd3GzJkgU5vmGMgmg85pVcJgVfu88RQHWWvrJSHytXj",
  "key27": "PSvvsJ7p1z4oxJBoiPgRLtep6iXARCdzgYbtLjkJpo1GuYMcJhBrJCrfTSvq2H5wJ8SDttrjJKkuNbGSNHR9pz3",
  "key28": "4W1eVGpeKP5eceCBMp4LVSc3JZhY37aqpEPjqRkHVQ1HRyuG4iaLwgXQqTSuTPZ2g7aYdW5aj7rZ23WMDskNKkXY",
  "key29": "2SDawtGqs35PJYzk6ViG8vRDVgtBqRgLyrvg73RTu8bnApMavwsVmJkC1oesaRCK56vjPwLBTivnbVmW2rHpxfBb",
  "key30": "K3bDaCV1c6746UgDvLktKdVBziRxRYEvE56idfj2rye7R3vL4LFBCeNryeVHKAFnKrveSa1EKCj8vVZDm27VzrA",
  "key31": "3ooLCdqorJGKNrzZH6Qgscj1xpvraDtjCCVWcab7ZhjX2qPLJU9FD5jzjDFM5QdGaqVQMyc63yJ6bUdiV2LLaZ7t",
  "key32": "64gKTXsdT6e2o22o4k3CeQEy9FiP58kPdGid9upcPsqg26JmpBkEgDeqntEc4phHfFwuEsRurZm35pM1PwLpZ8z",
  "key33": "2TRQTSgPs4HsjUKNWGsAf1qjKFBF52oFZqjdRbJEjvRqeMijPk9XGKNQi3dEFQKawyfhsJrkeceRxj5Z99MDGNmb",
  "key34": "3ZqZe4cTQWFdkUFZhwVxtqtyAFGXkA8175qitYj81mPvnyu4qF8stcFEGkBAmnMKo8DGB7TvufdJf3xkNd8iMsbp",
  "key35": "CpVJkqNF7EL3g3hBpxPYLhpUEpr8ro1QCeY4Trcu2gC6yJixuRJbqpquid5ygn5huM9R743ezkaT2oGPqkMppXJ",
  "key36": "T3FjwKimHjgfNdQr8Do9YsAsyUw1F4miemWpgDHXxctFuCmK8mmnKL2Zk2HH4WsDxgqbU2SjCWMyR6GcsdQqy8L",
  "key37": "3dRHXXKg54JZbYEe7ZHhdBzbY7ECY4d5dNdThnjSpTk2rPQJRTWCHmq7T97ByxBLwmG2mcAPF6XgTZ1fKxXv2Kft",
  "key38": "435Ywy1xBMBTFpsDPaUu3LxqXFSUzCVK1QB2mG12ZU8XoL9Rw5t9K1HJBHL3WwonbyABpHrfjmmqdCR9vPbAUTxd",
  "key39": "5XNA1ysRSRzQDaZK2BzSNkCHUveakyjQ9VhyvbwhxnMF5pV55pnN9dqPZtzi6spL3WhrZY8CUWewk5YRc1bFYJC7",
  "key40": "4uTL8BvpELYPa9AT4SKAqot2ZBnynKssPYr6vqbyZLmKh7dd4geamYvk3XcR3QGvks9YSXMRRAF7mGvVw14TnuUf",
  "key41": "4ueK6vrjiCXgTinYnucdtLBwWE6TxsMjduntoffnxKomqWbA9UZ4mn9zTg382Lcj8ddDj2mdnAV2L24YAtJRSTGs",
  "key42": "33ntdXrpWNF3b9sZ7eCjkTGWcVwK6uGbJjgcvsuWnPMWTQZYkgupUTPmk9AdJH9SBDiRjjvNLiBrmP1HDyGu1uuh",
  "key43": "5i4HBihsa8V9exAB1gvksL7hV4nRdFp24CSVUVhxQ7ovcPTn9ZP3UNBxgCGNbDQiE2VfEZihumnB3UL51kHj3Cmf"
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
