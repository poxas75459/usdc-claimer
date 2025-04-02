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
    "5WynLfzSQZGGD44RJzNMXKv6n8w9XNeHbteeKXgqUok7cbVrMg8WgeLNoaNXHebYHJqGYt5WfYWynr2RVNzjeVJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YKzXvLJzvVtVxeH4k9XLAjX118TdEpQwwryj6sacB6z5qHVJb8uxGBRMLvjBFodN2kNZBEHMj5A25dwi7qUkTCx",
  "key1": "vF8mXwezn8yHr5GG6fMUu8HzNpBzMWZYk8RKLXnrwqroMfkdCknVLXmbvPNbE3rdMDQWfRgJgAwGq8ePSv6vEdT",
  "key2": "3eicFQKoKXN9T4hEemeKxKUz7k9UhKnvRnjW9r5pK8Xr2szZ1dKqhZZ3MTbt6o8bys86C4GJm88newhaEJkgLNCx",
  "key3": "3eRQMxoA9KjJGvCVYXiLdayvs3r8LtzdNpy9WxVaobR8SuSGvrCeoH3xd3pwRhNpmCFGxnSfiUgwx1EFcXMDXbFp",
  "key4": "4Jep1KhTnPu6roBp37J3xdXT7YN9dfs5sGo8qVj5fSRVwJSjqvHG1StAi7PEhaGtvUgqG5sgUUCpYG17JiGSdCyA",
  "key5": "2vf6VPWctoHF8i5rK7JsFvaoAvjEngN6e7YP6fCzGc51A7utNw7yWGT9tDvGtcNZeSEKk6JzrKczcbBEZ1PgDxkX",
  "key6": "uecVzLwHP5sSfqDbUWZzeCRMxVayZF29MmSmabPAgJv1KU4huNK4NVxTXTm2KAJ1wnmqqYVeX1PiRSNdpu1AxLW",
  "key7": "2SunM3s9GTBFx9wwuNwtnvq29kuhzKxFWCfbfL4P5XuhtBy2XFrVYUrRAN7veAGCVHothCDvq5iALRqNRRhm3Y7v",
  "key8": "4aYWcojF8zsJcFDA46iMWJGHpQPS9U3YfrATK2Xig1V1d3eLY7VfCGPPK19BKPYS22h7CmrY5TJ4AfZuuZEwvcCX",
  "key9": "5vDmpk5ytvDQcJzwnkEKwaQ9jzKmFC1zuqpvAjkPiVoiVLQdPUU5Qzt9kA3AiWskACQqnZcALSdjjUP27As9Pcny",
  "key10": "Wp2VPcyKxhwMbeDjSSdRHHXZnT7VHXSDpQSuqMaVttTFT2gbWnpPMbTJPUYUodrX6hyi733aZsVASX6BoAR93YP",
  "key11": "3kjo2ZeDrKDQ4nWgFEm4ghtVqGKmia5yybWwW7HNd31btFtudnuNhGQnHGEueHdTcNoAmT6gJfu7t1eiozWnx2JT",
  "key12": "59FHSEnLPxsrzZRvQEqQ6ViTZcwu1NxJ1L8Fnx6UZAm9Ui4PKEjzcFfUVj9RbuatUV1gZTANwqe2tvL5WcbBoW8Y",
  "key13": "25c6j8inXEVmYzTC9ygKvAyMXYLGPP3375GV6arjxk7Yvc7Kt9RYpukbvLtWL3GoJRUyNqGEoarJ8MBryjNpqXgD",
  "key14": "45Pokf7KjP253zaVUfjjAaTS99TUbdSbMmQuG85HUJXBV44EMiKez3qhLiKooEe1UqAFALhDECcLtpybLFfePhTE",
  "key15": "GtL9kNV73FZsRmKYFoLbtJx1CKZ3Eb9UTmornA8WFLj3UkyhA4ZAxz6ufz9tXqMwGF4DQqo93mJv4zhqJBBLNPG",
  "key16": "4A5ARNmqiiG1AAfvbRCWZKP88cJoEEya7j5yBebeE2Gf44BARTMJUmVMzx327pscoNiWhJgbbxDMdvr6FFCd8Ueq",
  "key17": "2wjGTAM6G7Riuk3NuMXBEhrr3ckwuAtHYxMgBktoDuYym5GaBhkvSjNmfHP2XCNpefLU3Qrq48uiFMNR488YNmK3",
  "key18": "37XFW2gp5ueegyNjJMhWub4CfLgaWq4j41gaCemUMLXmyz2mi8PNQb1XcF4nrddYE5f1PRwjDvZEsSNiJbqANJth",
  "key19": "x8HPRRSWz4QGeb5Kf6THVAAnbfUFk12LVwE9zWLX1oqmBL9ZTNHWG3mAWZwfUdt4vvnQvrYDcKJ9j9KEedJhNiz",
  "key20": "3nPduH7GF9M4CUdbNTLFUQXbzUAj5Pq3S2jtTmRP8nVfjyRVHKztU65QUnWjPbYo7UGKbg1DHwRuopgdEFL6VWgn",
  "key21": "4884VjCCkXPvmXMu9QyWXXYtR5g7DHk86PEdfPoYQEjB2AMhzktwACcLMm7fZrXYdGbWUmLkKzyjBNz6LUqpESGF",
  "key22": "3mwHYQxZnhxAPQZNFykfHhuseUw3WJ1HNs1pw2gi4C7fp1m4BRMp7Yxfvs2w7s3h7eRsZSYkpNAe3XFUauuaWnCK",
  "key23": "4wAuV9LBN39BTCG93iuHZ4D86C7PjFq8HjoonP7D1xKk7c5UwSaERXVFEbyyhyFNqYWmN96GruBHDWZGgDAZyzAd",
  "key24": "4n6zrm7u4jxnDgXbsMyuqKoa24YVfotfYLbQG4fZJBBtoajghRo8MEaYUT76xb7A6S8M6tuRH25yC24FPUq56jX2",
  "key25": "55UpvQsJUWucXripeDtVJxEg7FMH24UP6PGWfXvtMwMC3DQkS2rTypX8BcWmSWBeq3RCiWLq6qvAddAxYQJsbCwU",
  "key26": "GabDDxhYraLVVApEC4XmRfnxDWFr9JvgBTxBJcj1LRCDmXXC55qKkikPu6hSXTPUZptBaebuL4fGfQRvErJDevu"
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
