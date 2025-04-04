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
    "5Vfkm78xCxCyiLjvEUEejaKKs7QsFcwaTUdTrdyShvRgoPRMr5nE9VWi4qQ1b58UTfpPvGvi56wZPjq7Zh5tr9K8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kHuipS6Uk1JSfd6zatdWC6bJkZAAqxZedxErDZJA5Drtij9Kr37ujzJ9nojGmgkaprie3Y8PhxozJLsuriCG7Ae",
  "key1": "21FSsFMyhrkzLGZfAm5nAJEg6cfb5wddJAxTjQvdFbSkFuBTMBGzXo32CvCBsK9hYS7bcdkyujHuTp1gaMHmsd6w",
  "key2": "39hCprUAPJ8PudcHFbxan2qb1BjGtXiSfejUTqdBME3xNLfxE6X6cikfFe6AZtV9kdM5k6CEEAixeWF1r4Dkpbk5",
  "key3": "3nmwfE8nPkQZfWq2JTNaiTm5GDZxcLVWgqCMSsUyWbUwaqTtEBjSKJKVBuGktFXsYyyPWj4RkN83SNHS1u2mW3xz",
  "key4": "3Emw2kvp4zvPKdmJcAjBSW5XRTvox1YspJhtpowxzUuxUrRtjaSwWmiQNbxCpAQ2thdhGFNiA5CQ1y4JEqXnoRbW",
  "key5": "9hb9dvGmn2QKCeZoibyySHgU7ZfvqNYNT7nBXfaa7Jw1NkjeTgiCWuxBVgwuQLXMXrnPbTQa4x8oR8c5ZQiSHzR",
  "key6": "38DSKFer144UnhWhiHjEpe6KeErsYRHuUAQgTYXWHpBQhghzV38bM5Vu9KJ3wNx5AUnungbXZa4m7YDpBiHS3MzE",
  "key7": "3ErJYHnmjASbJVd2BFoyEn4aWWZUPqoH5QcuzuKFXmjZKY9yNQFNLNfZn9QZGSQ7vrAUuyYBwXkEXGbyUtXvBud7",
  "key8": "fk3h8T3jYoDuGYkBMkV5DKMGbKTLDCMano4b2PcpzM92XPx5CYddBBa4TkZoDzgQAP3bDbmCWhVLZSYyw5NqiWs",
  "key9": "5uLKhQV8F2nFt5i1YMUaAmDnx4VJxhF17TZAzpZZ9XjWEH2BqJ8mXLZp8NcEY5KoBJ39gRJFcVVF7XhjgkundrKg",
  "key10": "3uoMUbb56X9pggtTMP2v4zS6k7nZMyA2KuhYFzVxnZFu2L6pzKFcjQo14dKeRT6sTkuW7gAD2ip7MAJE9NFjGx4w",
  "key11": "5HVMf6hKakLmCCL6P4VNC6apkVB48ksdqbwJmfMX63mDYDSLzAWDGyESMbQNzYt39ZacvLE7xA8X7dkKnhhQXcKT",
  "key12": "zUpZNJo6EB75rL8Mwfp2EsiiVF16Z79tdpc9Z3UC5wnp44v3VZ1qKxsL6UxnXFRoEF8yzrvHRLdtzXVPYPShCse",
  "key13": "5L1sKm9zE9tqtbCo5Wox6LnfRVXBbVALkKVGxF67ptzvGmEEMgcksGUrVxzybzk94rYWQLzcgmnBD1rZDsaGD7Si",
  "key14": "2C1HqdF2vRzZsRRKnEW7PTRBJvzwzG3CNdUqGE9e182MxXKojbNDU3u5pn52zciDieb2ph3rzhby1SSTeP37caY2",
  "key15": "25wqN6bx2f5WLGMqC2HMqYYJawbM5ZhG9TBUjv19QiXxc7mwuz4wfposQbbnLp8cqJvqkLSUraiECTrSUrSuCbwz",
  "key16": "2GctNdAJALDc8SHLAmoKHZy3V7iFL2D42Lm1SfACQHydzNFmPJDknaDjpsasVXkfsB8SBhHg6fdCx7zP3vquzLr3",
  "key17": "25URZ4wNMsjdZwJTCWjSauzjfzKzsCsVFtDhnbYmxkz5thwWyvz2LLKiamkffC7crhAq5qejNb2e53aHNGnFHF6M",
  "key18": "5Frq5UHL1UNn6ucKSSDfkGodcvf8Cv6BajiT9cqY9uPgEbPoQ6BRySZwU1gMLQcWnMJRKGerfcRsFjubRaQksuSU",
  "key19": "3x7QipmrHjooKbu7yKmU7yUKefpJUMnZGPb14qUjnDJsBAS3CdUfRxoN9mXzT7EK8GSsfJmhBMrKqRL9wZhGYcmg",
  "key20": "5m8UfGda78y7bVTHkZ1De35iwKwq6D9D34C89M3XayTcEBuuNpdVjzRsLntT9t4hU15XgeiqLKCUNfCxJdCmqz1z",
  "key21": "2ghwYC98EedX319neWtYU2xvHaHjnzjEtp8Sd4dMJrBY7sN6wKpwTduHX1n5tjHHseAz2rrsq6kHqPtEovHLiNx1",
  "key22": "5XGiQMrCNJ2YFRWtou9MMAyyThreX2787PzTVVejDsnKsRXPDDppKtHX5qZWjA1RVGm3mxB3VRSGDonE12ypSWnG",
  "key23": "zNtXMYrkAVJefmFZk4jj7KQVzPRe6qvYLkXhYgn1cfGKUFNqxrU2ST631JwwUJMD2nFL2tsrxPfWzPY7WwwvpYw",
  "key24": "4yExaiVM4Sr3TWoXoeTnJ2Xtr3dUJDt14xWgXWAyWpwL4yBm4LK23LFyNaQUBLiB23726b7P87iaBueTRuCzGzRy",
  "key25": "xsNCzrLy1grBS3xECefCT5HzBQGSXbUsAyGizxu4mm6VwP5g4uGTdaWUzZe8JbgcuBeBqPCCdfDRHK2x5DtQx4D",
  "key26": "3PMJTXJtF1x2pPB1M4i33iLAYFzvQVNTucM16d6Q8Rn1nGFqcVHUbkm2479r96uRNFHs4GaFdxKV2BY5qcZyQBzg",
  "key27": "ZWehojYA7tpYEaunxAW4VdYxJANmUUFUDhBbVf36qtsiVUzZ4xZo5MxMCKXSPzPUZQWpoNFM6wQjmnzE8zsU9xt",
  "key28": "5dZ75361sVqbeZkjqRfjXRocES5Mv1S4mhZbft8EuLrc6n3R657hXK9syGZBLnUHWf5gu1jAdKX7F6nQSzNjkGc8",
  "key29": "cbzmJDDtH9VadNUQtA9UWRR9yVY5EDkznLPdv74k2SRMec417siFme4TcgTPQY4MiGfnXtMeAvuXeKmgwoWxQ2m",
  "key30": "3E32i6toRJVJUMARz1GB337Q77hgTpYpZ3bLJBnLZhDj4MoetRzEj4CKjAr91iz8E9X3orXosL73NmmrvtFHG3x1",
  "key31": "35kRKdLq7pGtxDT85mLrtxi5tHWGERVtW311LYZ7yovP7hBvEz4dKmZ2cz7MfexMVtUzKZfXtx5E21v5jnNiiPXv",
  "key32": "3JAwYz1wPJKeLjog4r3D45NTtcxBNCazdpAzr9a57MT9gi2zVyi5dAJXu3jppxrMaKK4LAjP83BQE5w4mgL9APcg"
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
