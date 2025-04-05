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
    "3Y5FJL8hziAKqXU9EUgGohbqRzSYyFQ2LD1ZqCjaYUVUARgbQVPE2LU8PudcU15xgXP1cLbrRBk2p1U65Jt85dUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35FN3ikU655kHDyVrzpLQvJ6rBr7vEi63MfcZVgzSQzjM64Yem8fz9g2qbCU6oRnZUCQztqGkRtrzBVBadF9cmmd",
  "key1": "5LzaHa8yaXb9ovrk8PC3641CA6R3H379L3b4t1fHz1BZFzLEpsYM9YzWMhQeCtFMgogvt6PMkXWj6mFyNA93Q614",
  "key2": "2jg8xPd1hLzakMfTY4PBMoULCacLPe12MquekXkzXisMiuGK71U86DjTxdMsTpsDxSz8yn6Ni5VEk7CCiyLLZL7B",
  "key3": "4KbP4FpjyviCBNuAN4cqiKKRa4mqsGnzGEZTxdJ2B1V7HYmK4TiT4UPwQK9ePX3kg5SrXjUc7HJBMsR5AHHbUCnC",
  "key4": "3cePEhTwW7u49imFKFJdmDqZZrEiWa2mFVDJcRen4RjqEnKbinSoXHDXedhybYHzjUKZxH4NFq8ZqqSzFJuSHSGA",
  "key5": "2MGuCphUFwuUfCU8iJpPXWVRYAG1hizpkCDMe2bF5fX23pE5UTKchLSfExyjqjXjJJmQYGvL8XwAdYE6t1mjFCNd",
  "key6": "3zd3zNuY8ZCco9yNJTZyQwo2peYbccQcQpUwAFA2RXNWTWLQgajwPETh5g915P9AD4b764QnwfFyrbQnqcDq2LYx",
  "key7": "5VZQARBc3oW6SjUaUSiD2JDzhaYckvRKgW1ZoeSKnfDM9N1HYtHHHk9zzebgGh22qiqNw7ZMw5hrfdCrvE1e7cy7",
  "key8": "3ycR1JPPA7FHfRBFn7XUd6b46nVG3c7jJAxsiEEJCzRdkg8A3gbD2vHSvapEgoD2SsUWsjjBqG5GX6HNKJGUKEjZ",
  "key9": "vdNTXi6nHRqGBimeJivWipNDS2sQ89W2TJiGYbf7K5kTseZEAEcd8k82jjj2JPgazW9KYzg7ma4VoZzaLGWYN2k",
  "key10": "8pZiVQrRsZisEne2qUTm4DcPdvnqBiUKN41VXDs4xTjXyk8dNKNSw4TXqHKC9SqtRd317X1af9L8N1nq8DnsxVR",
  "key11": "AueLLF8pb7MCAGxaBhC1XMxfikHwWSeQKMQddjq7ax9z8vUXV3KeeRiL8KUYsnzJuhHgY5AFmAauEVqbo8ApwNw",
  "key12": "kphHT1kHS1ZpwxVBUBNeX1HE4QbrbbXgGzchREGtMwz7otzPQpGZVLP2h7GMu7R68YX7i4CeZRU4jvdZ8cA5Ya6",
  "key13": "39RwMzhov7pFfHHVwt2BL5H44oin9LZB8NHF1KC73aqCpaktcFppFjXyBGjRRKVSLNqVDVyjaRdhBt66ZZ1CtGeW",
  "key14": "3z1yDtyYydvDyKAcaRmwL9ft2m1K13iy6GHCa19Mug2ZbMkcFmZXnX9wrkWCqpMGigiSdNrgufCGcCWKFbtCdtFb",
  "key15": "3Uf53PpdmWDPsUfsEo98c6AjPMnFxNbeZBHbSGnkAZKN74EJ9zNzt2dD4gQzUqnADwctXBwmbAMgZ3y5gjoS39yz",
  "key16": "2AVr6BV8CF6oBGq9LRqymM6uQ9d3nxw21DzmRYfQ9z7PRSjA1YekjEsVyojxUZzn8ocZXGfCwBgWCkU38rWgs81D",
  "key17": "5r3ic6aVkn97dwZhzQbh2Q2BQyKdxrMpBbjjtqwCdu6HRZmDEEcM7DwXB22Hj7xNrxhnNJztexY3sErqiZE5oLSq",
  "key18": "AWA9zw8Vp84qEUiHLho4qGGSWvbrYSuycS14ijLdUfHvJSVQURbRbF6hpFHPhZwFefZ3yyE6eiFMSUZegXKMkxQ",
  "key19": "37GgM4UGU4vSSRcBSmQMDEzSbt6gRB5qveDLW27Ck29HKm8g6nQ7i27V5J65CdXgKSc5gyxsPE6ykHsLB8EV7K8A",
  "key20": "2KdAmxtKjHNQTGf9h9uZy9CmbEziugFAAuR5NhfvmPPvD95LfyXdxFNGzDqmyvNdry6uwotgjTcELcNtX2kHnBmh",
  "key21": "2ZofEPBrPbUVjkYVaUuKzACsJgxqAHTUBQ14WqeE6nVJUShrVTcQx5LRTcLDTTx4VL3GeBbhRj7s81baUwFdnHxv",
  "key22": "5624ZpPgZxunQWq4krHaDPc5B6gsJTmbWHUbpFzj7N5drtDzkQ8EJXRK435ZoFnzJkNPwnF6BdfqGdUmZQbWvvQX",
  "key23": "4B4GcVSfsAh6asME6Ho32yALmrNfnaR4UgxLokTXSHNRM95Z5BS6k8SQMF5aL173anokgpjWKTteEGf7PnP3ZB9j",
  "key24": "4pHQrEhhhEQyxWVRJMMbSqn4QXvPh1pWnSBzZX9E4TtL1XNUF8Bppt5VtyXpsWSnVK3eUu1gXGiuMMbYFnw1g71T",
  "key25": "63za45xCu4mzkrLtNeNgdYu43N3dgQp6WGVcNfEH6R5fcnUGGaNd2QMirXK6YdtDEkc6qnrdCawd2VFqKipubWrL",
  "key26": "2KeVj5FjNMXJr1hg6DVUi6FvRrkk1TY2nVzZB6hkRcAdY2aeRqBV9tWXeSD8LTjKaXiK4WhUEYaxscK8myvmbkni",
  "key27": "2jJ445kcyWeBgxBuCrjNxVAqj1YVvyJnoZXcys8sKsGve17y5cFEumAbEXQbRSpNiuk8edhSQW7aVrtyjZbnD5zt",
  "key28": "4WnRbgyC21T6wPRCvKUhkR9mscAYmKQNaXPWdjv8mVw85jtHcufeyE9kpoTC35d68AVKpR87eUFaAD4r5xQGKLzv",
  "key29": "3PXwvbbDjsgQxxPDZY4d5mY5wosZd35nxig78jNNW9ons4q7k8CCjSK4HNcZdHwL59antaAhJqCY8cXU21XGXwjV",
  "key30": "5SKC98ihxoBoyX3y1JfJPgEaxwLTVkPNr9JVu1kheuwrTNPfGGawLJ9719eq3gFBnVt4YNwmmM1VyPEhk7ZtixCH",
  "key31": "4MjiGbHj64bZmXgBgVY4DKDFebTszS3B7WNw8WLgS9c8ct9dGBrrs1s8GUgB6d4j2syPxiu13eoXrz9o8J46WxPn",
  "key32": "26n6Vd3Hp3aqJ45GxRJyyGXkPtF9Yw9q9cxV9su9ipLCWpJdZiv5q4p2ZifEDr1BPwrF3t6nETPbGcmWJ8cusCag",
  "key33": "5WMjv8PWmMgotjETeNBcJzet9N2ohhBxxrfNxpZpS9K3sUYFUkefu9yZUG5kVYfBu5LFn6pzgKBXD9jtTJQ7bD41",
  "key34": "5Y28rDWevr5nYkY9QLDHYPVMU76j7vBZC7LpQKELqKMbxgsd2EXms1qizxRmZUkwLsUjoQgFtXm6QAhXyrdBQyqx"
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
