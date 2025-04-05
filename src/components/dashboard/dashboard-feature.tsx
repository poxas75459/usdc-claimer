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
    "5CXZjDLVeAXSEb76CmpTNhvtod1gYg4HbNgMnGejg6EnY2SvmUcD7zMm4a8svKhRsLrM9tXTMoM5mifqUTxrPh1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25SrTSNJ4mmYKAMzKrD7t6sNBZiyLT867MiC3E6vWRVi55bA3AuDhBqMPNFCWNWhneT2qvT7F8M18ouFKYVYyBNB",
  "key1": "2YjXYEbhtC2hf9CRV2E7bsUVb9gPwYysCJ68zkmU5qUL9ReB1qKnVeCeH5Hf813JrtcNA16KwPZPYdxSc7pbyrH9",
  "key2": "5Y1MV3gz51XPW6z6ewMnKwJN5i637GfiBq8P7E9LS6dfveo5zxuzkQZpCKxyc54sFn9wTqthfpUWDVXcPjKJKHcN",
  "key3": "4ufgSPFK2Wqf4wSERuCSuGTLhM4YrrFejtXgPDPDtJwvYqDtNGcc1oKt7AM5TVyybWnSiZehECHo11wTBksMBTkw",
  "key4": "TovV6nNx5r1yLn1ikcdgYfUDsgMm8rU2rSeUgaDDXAwuDEv6sdcu3hwR3rVeTzAUjZsmT4SBcsoVtR38ufBDRYe",
  "key5": "3NTnS5YN8yEbBsP7L5MstUag2iKmT9j5D1terwusTzmuiz77Phb5xrTFsTokiqGk9gnzwfpVg2LUZSHVVfyxuns6",
  "key6": "4mjLmj2V8Aaf24YB5Sn4TvbnaxzAU2Cynq59fwGnSPvezzQVBoWoPgFKEs1xtT4FJAxFWj6iHh8Mfe9A2brTD76",
  "key7": "3xxuND8mBv5PHg6WqzXTc4NomAe5t1iX5C17nW3V4zgXcSbJQjw8eEUqEZEtACLhqFVHtD8ubGFoVsUu9DJEXyXD",
  "key8": "5AYCDbdE3VrcHDv73sUgLq7CHuaZh4j2QkHW5bsr1V3WJ2VAgvU42WQaaj8jQua9XqZhf48UBMXcNSuj1PzPNx5d",
  "key9": "4aVJ5WXoZG7ZEsje8keuxqwUuYVTCgqfEpzjXLffaubC6RRTn6ppEeKpoG41N3PTN3HRRFW5PyXhdEzSarBg2NSe",
  "key10": "5h7TAn7kgWufW5iKjN6HGUSWkKRvsjBzP9F8DF2fCVssrPv4RDSWtv4WEhor36XgZ19yssXt4rEjVUv4yMafXEUa",
  "key11": "4cWzA6hCavVsz9vGNS1Gi1kYgSBe1C6RGu87ecjpfShEcpU51SwHZxs8PD5tjbzouCoaxnFMd2m1zXixWhZvUKvG",
  "key12": "Bg7kMM9Zo1ZWxpcAScPHHGLj5uZJo6UyJz3KVwimhrr3K6PmqN7yyqGqX5YF8pNpxAB3xYmXJTbdGLvWVFpxt7X",
  "key13": "5r4hFuuvTCZegMvLvzgwpEeg255ZzDUw3jCrkmMTRuYLx4rekag3zKRyudFBSpHijHfqpUgsbMubT1WzGirmcTY3",
  "key14": "4SnmfZMGQVMb1KitdWj56pXi8PtAuAktAMztEG39o6jiMiuad8tBJjgWdhtPkKk1ay4TTnN2Ho4rGGp5zpQTyuNC",
  "key15": "3RV567S3XXdPs8zscg4Ma3JF5jpb4k1eLRFViQ43iLaQDfr2AsPPHaFUC42nyPUxtSxvekqiXHHmj3Usv8Y4HjN1",
  "key16": "2hEbj5Q9hcH8Cj8F1fYUW4PkzBL6ctNCGvJ5nPePhr49osKhC2sUJ2fzgoT4gbrRS1JidVUFBxb42C4KTXgFz6yS",
  "key17": "38E8BUh5cJ4AFs8WFLwRCu2wkan1r4fJPv7MaPzsFmENaTugnt8d8P3w47ammjZUdzd2rwfSR74SawRyoDdGgpRA",
  "key18": "21iAxsxzZYtBeUohTQKtW2HWQPnNnW9oK2GLJWCEEZTSpvNE7PyD7eVGik3H1vD71FjeVTst8XJHyVKEWV7aE1oN",
  "key19": "4zjkXfFgBCgtqAo5jRRPejAr8Dqqse5LYDqKqKKcWVKv7dzhbPydunqKYgAvyRox7kPsKrBYKGg2zn8ebmQtVWxc",
  "key20": "49BwS5tpe8xCicm47rYL3vzScyeY2ya8yCa3sWucn9M57nX2x9mLyR2YyUA45V5vCWfUzaiRDo7vrohg7nenTchj",
  "key21": "67DAoYMEYqnQreyzx5emNBCmDjKhmfZv4LZ7p8XE5gV52rnNYUpuRDqYa8ySFr4vXB7ZWRP2Yfs34fYb1SYLweD8",
  "key22": "5Ln4BpDHH93UwjJZtR2S4S2BLusyk7zR8CHYmJGb9yFjL7Qm9Pr173byG3vr4HxcCmuLrdq6yNv6sRbzUgwgcnPK",
  "key23": "5WTF4HdzFd2BoFUi87ErS8MkjCBSjuS7fD5Ub1RZomHBXr4wkUhndxTvCQ7NL6wZkZTwPbi8aw7567AveXmMpovG",
  "key24": "5DtJ3mnD2xyKd4Ys41X1kHnc9YrATA3WNA1FyCZQTgfZi5Av52NeQyzzKNBubLjz7jBvQNqjPMgcYCmVsYtLPXet",
  "key25": "4snfSjojdwKsCt2sa9vLzgBhi34f8jJ7i35B7NEgwwU5jFWxJfV8ci9dYggdxpW1hBzNVFbiyYMcz6o1qJuhr1aN",
  "key26": "2b5dxcVjqJ8ssfb3K7qHqRk5Z8RmmJneazBah1sd52Kf7j7BXN7SKhCCpD4JyoKp1CHCQTbiRt45Pq8N6ZXdHbpd",
  "key27": "32aX3FrgWNjMhU4Y6wHnxRpid5EzR4Qys9zudoVsa3EiCvy71T1CC193QpaoSQbQ8WD8h5gLdb9RjybMTSd9jCnW",
  "key28": "2r3d3iHG5ttwf1WGPoAoiqE3jv4x2JuxDCv2mYxZd3ncJ8CfQ5cSsGEbSnQkNCBa2Z3TPfXQrn2bwis7hFmmPo2",
  "key29": "2FWzkbqfioaFHAnHUBWuWemVETumQKAFnxW7fbeS18cdsQokmKjaQpCBkWx22L78xQh4861sDuBkuu1ytk7y9Vgf",
  "key30": "2zNVmyVcvBKGmQndtCJPkeN5Y6SEps7GfSUbrQe7LE4vRPGTLLdhMebW9LQEKeZgjEg3UMXFwzZMY3Juf3yV58PL",
  "key31": "5FGa1rx9C8rghgyjsGTJPRxPmJD9bpWyzcNFGteA93gYMzgmPcumZKHjZGiYcTL9DHLoAaqBaXBJpFtxfNH8etPm",
  "key32": "3VPYUVNBN6oztB9hDHum45t2JWcqfnJjifUotF7hvxRXbQKdJJhYgUfMKNCoBsauwRZmsMAB4LByV7trt7NF4mXa",
  "key33": "2LxNDm1HLEoVQuWxCqvZFSNqzB5CBzyJrWboSmpnWa5os2Hbd6NXMsAJ2k6Cc9TdS9h2pFTJKWmYhinMaV71gqrT",
  "key34": "3s6h2oi88eJdNJcGdxuTABhVMUKkQEVt1iGtcbp2QBCua69m1p7yVs6k2txeXZx8eCMgv7TXUYLooR9DYxV644rX",
  "key35": "33MvvHrPqVmcxwaZexggsoK71ddWxRiVYfhDXjYLE1pH1krMq7ib8qi4iTJRfLZd1jaj9mh2fz6iq4Ks2q3uoWy4",
  "key36": "27E54z8GKdHwSTYzBKiPLRDb869UMJf3rRVnHkher4kJrimrkWGkEdWbCg3Nb6iPTgiicDHDRkCR6KTJqaV2mikk",
  "key37": "3oWeoRVP1ayQSS8J3myfraK9nQHpDCnwZczvKY2XmSBNwR96eWGfUVEhyn7zvnEtf1pZ2TcoqyuHrVHUCLv4tV6f",
  "key38": "2n4ZHAre1TZ766c4fA8Dx2d5ZHSPFK24QJBpYh9CyUus8mYy8LyWrZmQcGrM921rpo7ab8iAA8AdxEF4QF4M3x7R",
  "key39": "5zVZejaN94DjU1nXZu8gNA4shmiXWs8w8zVovjH89ty3b2ZugouejgDyfkNKhm32ZZbrjCTmkEWnebbHEypS3uQG",
  "key40": "48ZCnbPx786tDsEJN2uCzgrQr69XNKGUqj3cwVMtvNxHSB1PhJofXzN3gNRBzbMHrbLDMveeVHp72SkWzdR5xQh5"
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
